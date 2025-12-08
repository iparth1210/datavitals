// Modules are loaded globally

const app = document.getElementById('app');

// State
let currentModuleIndex = 0;
let isLandingPage = true;


function unlockNextDay(currentDayId) {
    // Find current week and day index
    let currentWeek = null;
    let dayIndex = -1;

    for (const week of window.roadmap) {
        const idx = week.days.findIndex(d => d.id === currentDayId);
        if (idx !== -1) {
            currentWeek = week;
            dayIndex = idx;
            break;
        }
    }

    if (currentWeek && dayIndex !== -1) {
        if (dayIndex < currentWeek.days.length - 1) {
            // Unlock next day in same week
            const nextDay = currentWeek.days[dayIndex + 1];
            saveProgress(nextDay.id);
            return `🔓 ${nextDay.title} Unlocked!`;
        } else {
            // Unlock first day of NEXT week
            const weekIndex = window.roadmap.findIndex(w => w.id === currentWeek.id);
            if (weekIndex < window.roadmap.length - 1) {
                const nextWeek = window.roadmap[weekIndex + 1];
                const nextWeekFirstDay = nextWeek.days[0];
                saveProgress(nextWeekFirstDay.id);
                return `🎉 Week Completed! 🔓 ${nextWeek.title} Unlocked!`;
            }
        }
    }
    return "🎉 Course Completed!";
}

// --- RENDER FUNCTIONS ---

function renderRoadmap() {
    const unlocked = loadProgress();

    app.innerHTML = `
        <div class="roadmap-container">
            <h2 style="text-align: center; margin-bottom: 2rem; color: var(--text-main);">Your 52-Week Journey 🗺️</h2>
            <div class="roadmap-grid">
                ${window.roadmap.map((week, index) => {
        // Check if Week 1 Day 1 is unlocked for this week
        const isUnlocked = unlocked.includes(week.days[0].id);
        const statusClass = isUnlocked ? 'unlocked' : 'locked';

        return `
                    <div class="roadmap-node phase-${week.phase} ${statusClass}" onclick="renderWeekView('${week.id}')">
                        <div class="node-number">${week.id.split('-')[1]}</div>
                        <div class="node-content">
                            <h3>${week.title}</h3>
                            <p>${week.description}</p>
                            <p style="font-size: 0.8rem; margin-top: 0.5rem;">${week.days.length} Days</p>
                        </div>
                        ${!isUnlocked ? '<div class="lock-icon">🔒</div>' : ''}
                    </div>
                `}).join('')}
            </div>
            <div style="text-align: center; margin-top: 2rem;">
                <button onclick="resetProgress()" class="btn btn-secondary" style="font-size: 0.8rem;">Reset Journey</button>
            </div>
        </div>
    `;
}

function renderWeekView(weekId) {
    const week = window.roadmap.find(w => w.id === weekId);
    if (!week) return;

    const unlocked = loadProgress();
    // Check if week is unlocked
    if (!unlocked.includes(week.days[0].id)) {
        alert("🔒 Complete the previous weeks to unlock this!");
        return;
    }

    app.innerHTML = `
        <div class="roadmap-container">
            <div style="max-width: 1200px; margin: 0 auto; margin-bottom: 2rem; display: flex; align-items: center;">
                <button onclick="renderRoadmap()" class="btn btn-secondary">← Back to Map</button>
                <h2 style="margin-left: 2rem; color: var(--text-main);">${week.title}</h2>
            </div>
            
            <div class="roadmap-grid" style="grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));">
                ${week.days.map((day, index) => {
        const isUnlocked = unlocked.includes(day.id);
        const statusClass = isUnlocked ? 'unlocked' : 'locked';

        return `
                    <div class="roadmap-node ${statusClass}" onclick="handleDayClick('${day.id}', '${day.lessonId}')">
                        <div class="node-number" style="background: var(--secondary);">${index + 1}</div>
                        <div class="node-content">
                            <h3>${day.title}</h3>
                        </div>
                        ${!isUnlocked ? '<div class="lock-icon">🔒</div>' : ''}
                    </div>
                `}).join('')}
            </div>
        </div>
    `;
}

function handleDayClick(dayId, lessonId) {
    const unlocked = loadProgress();
    if (!unlocked.includes(dayId)) {
        alert("🔒 Complete the previous day to unlock this!");
        return;
    }
    renderLesson(lessonId, dayId);
}


function renderLesson(lessonId, dayId) {
    const lesson = window.modules.find(m => m.id === lessonId) || window.modules.find(m => m.id === 'placeholder-lesson');

    if (!lesson) {
        alert("Error: Lesson not found!");
        return;
    }

    const isPythonLesson = lesson.type === 'python';

    app.innerHTML = `
        <div class="split-screen">
            <div class="pane pane-left">
                <div class="module-header">
                    <button onclick="renderWeekView('${getWeekIdForDay(dayId)}')" class="btn btn-secondary" style="margin-bottom: 1rem; padding: 8px 16px; font-size: 0.9rem;">📅 Back to Week</button>
                    ${lesson.image ? `<img src="${lesson.image}" alt="${lesson.title}" class="lesson-hero-image">` : ''}
                    <h2 class="module-title">${lesson.title}</h2>
                </div>
                <div class="story-text">
                    ${lesson.story}
                </div>

                ${lesson.video ? `
                <div class="video-container" style="margin-bottom: 2rem;">
                    <iframe width="100%" height="315" src="${lesson.video}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style="border-radius: var(--radius); border: 1px solid rgba(255,255,255,0.1);"></iframe>
                </div>
                ` : ''}
                
                ${lesson.sources ? `
                <div class="knowledge-base">
                    <h4>🧠 Neural Knowledge Base</h4>
                    <ul class="source-list">
                        ${lesson.sources.map(s => `
                            <li><a href="${s.url}" target="_blank" rel="noopener noreferrer">🔗 ${s.title}</a></li>
                        `).join('')}
                    </ul>
                </div>
                ` : ''}
            </div>
            <div class="pane pane-right">
                <div class="interactive-area" style="height:100%; display:flex; flex-direction:column;">
                    <h3>${isPythonLesson ? '🐍 Python Terminal' : 'Interactive Task'}</h3>
                    
                    ${isPythonLesson ? `
                        <div id="monaco-container" class="editor-pane" style="flex:1; min-height:300px; border:1px solid #334155; border-radius:8px;"></div>
                        <div class="term-controls" style="margin-top:10px;">
                            <button onclick="PythonEngine.run()" class="run-btn">▶ Run Code</button>
                            <span style="font-size:0.8rem; color:#64748b; margin-left:10px;">Output below:</span>
                        </div>
                        <div id="term-output" class="console-pane" style="height:150px; width:100%; margin-top:10px; border-radius:8px;">
                            <div class="term-line info">Ready.</div>
                        </div>
                    ` : `
                        ${renderTable(lesson.data)}
                        <div id="feedback" class="feedback-box">
                            Select a cell to analyze it...
                        </div>
                    `}
                </div>
            </div>
        </div>
    `;

    if (isPythonLesson) {
        // Init Engine for this lesson
        if (window.PythonEngine) {
            // Need small delay for DOM to be ready
            setTimeout(() => {
                PythonEngine.init().then(() => {
                    if (PythonEngine.editor) {
                        PythonEngine.editor.setValue(lesson.code_start || '# Write your code here\nprint("Hello World")');
                    }
                });
            }, 100);
        }
    } else {
        attachLessonListeners(lesson, dayId);
    }
}

function getWeekIdForDay(dayId) {
    const week = window.roadmap.find(w => w.days.some(d => d.id === dayId));
    return week ? week.id : 'week-1';
}

function renderTable(data) {
    if (!data || data.length === 0) return '<p>No data available</p>';

    const headers = Object.keys(data[0]);

    let html = '<table class="data-table"><thead><tr>';
    headers.forEach(h => {
        html += `<th>${h.charAt(0).toUpperCase() + h.slice(1)}</th>`;
    });
    html += '</tr></thead><tbody>';

    data.forEach((row, rowIndex) => {
        html += '<tr>';
        headers.forEach(key => {
            html += `<td class="clickable-cell" data-row="${rowIndex}" data-col="${key}" data-val="${row[key]}">${row[key]}</td>`;
        });
        html += '</tr>';
    });

    html += '</tbody></table>';
    return html;
}

// Helper to find next lesson object
function getNextLesson(currentDayId) {
    for (let w = 0; w < window.roadmap.length; w++) {
        const week = window.roadmap[w];
        const dIndex = week.days.findIndex(d => d.id === currentDayId);
        if (dIndex !== -1) {
            // Found current day
            if (dIndex < week.days.length - 1) {
                return week.days[dIndex + 1]; // Next day in same week
            } else if (w < window.roadmap.length - 1) {
                return window.roadmap[w + 1].days[0]; // First day of next week
            }
        }
    }
    return null;
}

function attachLessonListeners(lesson, currentDayId) {
    const cells = document.querySelectorAll('.clickable-cell');
    const feedback = document.getElementById('feedback');

    cells.forEach(cell => {
        cell.addEventListener('click', () => {
            cells.forEach(c => c.classList.remove('selected-cell'));
            cell.classList.add('selected-cell');

            const col = cell.dataset.col;
            let val = cell.dataset.val;

            if (!isNaN(val) && val.trim() !== '') {
                val = Number(val);
            }

            const rowData = lesson.data[cell.dataset.row];

            if (col === lesson.task.targetColumn) {
                const isCorrect = lesson.task.condition(val, rowData);

                if (isCorrect) {
                    feedback.className = 'feedback-box success';

                    // --- GAMIFICATION HOOK ---
                    if (window.Gamification) {
                        Gamification.addXP(50); // Reward for correct answer
                    }

                    const unlockMsg = unlockNextDay(currentDayId);

                    // Generate Next Lesson Button
                    const nextLesson = getNextLesson(currentDayId);
                    let nextBtnHtml = '';
                    if (nextLesson) {
                        nextBtnHtml = `
                            <button onclick="renderLesson('${nextLesson.lessonId}', '${nextLesson.id}')" 
                                    class="btn btn-primary" 
                                    style="margin-left: 15px; padding: 5px 15px; font-size: 0.9rem; animation: pulseGlow 2s infinite;">
                                Next Lesson →
                            </button>
                        `;
                    }

                    feedback.innerHTML = `
                        <div style="display:flex; align-items:center; justify-content:center; gap:10px;">
                            <span>✅ ${lesson.task.successMessage} <br><strong>${unlockMsg}</strong></span>
                            ${nextBtnHtml}
                        </div>
                    `;
                    triggerConfetti();
                } else {
                    feedback.className = 'feedback-box error';
                    feedback.innerHTML = `❌ ${lesson.task.errorMessage}`;
                }
            } else {
                feedback.className = 'feedback-box error';
                feedback.innerHTML = `❌ ${lesson.task.errorMessage}`;
            }
        });
    });
}

function resetProgress() {
    if (confirm("Are you sure you want to reset your journey?")) {
        localStorage.removeItem('datavitals_progress_default');
        renderRoadmap();
    }
}

// Fun Confetti Effect! 🎉
function triggerConfetti() {
    const container = document.createElement('div');
    container.id = 'confetti-container';
    document.body.appendChild(container);

    const colors = ['#00b894', '#0984e3', '#ff7675', '#fdcb6e', '#6c5ce7'];

    for (let i = 0; i < 100; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.animationDuration = (Math.random() * 3 + 2) + 's';
        container.appendChild(confetti);
    }

    setTimeout(() => {
        container.remove();
    }, 5000);
}


// --- PYTHON TERMINAL ---
function toggleTerminal() {
    const term = document.getElementById('terminal-modal');
    if (!term) return;

    term.classList.toggle('hidden');

    // Lazy Load on first open
    if (!term.classList.contains('hidden') && window.PythonEngine) {
        PythonEngine.init();
    }
}

// --- Neural Assistant Logic ---
function toggleChat() {
    const chatWindow = document.getElementById('chat-window');
    chatWindow.classList.toggle('hidden');
    if (!chatWindow.classList.contains('hidden')) {
        document.getElementById('user-input').focus();
    }
}

function handleChatInput(event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
}

function sendMessage() {
    const input = document.getElementById('user-input');
    const message = input.value.trim();
    if (!message) return;

    // User Message
    addMessage(message, 'user');
    input.value = '';

    // Simulate Thinking
    setTimeout(() => {
        const botResponse = generateBotResponse(message);
        addMessage(botResponse, 'bot');
    }, 1000);
}

function addMessage(text, sender) {
    const messagesContainer = document.getElementById('chat-messages');
    const msgDiv = document.createElement('div');
    msgDiv.className = `message ${sender}-message`;
    msgDiv.innerHTML = text.replace(/\n/g, '<br>');
    messagesContainer.appendChild(msgDiv);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

function generateBotResponse(userMsg) {
    const msg = userMsg.toLowerCase();

    // Context: Which lesson is active?
    const titleEl = document.querySelector('.module-title');
    const currentLesson = titleEl ? titleEl.innerText : "the Roadmap";

    if (msg.includes('hello') || msg.includes('hi')) {
        return `Greetings. I see you are currently focusing on **${currentLesson}**. How can I clarify this topic?`;
    }

    if (msg.includes('help') || msg.includes('stuck')) {
        return "Do not worry. Learning is an iterative process. \n\n1. Read the story text carefully.\n2. Check the 'Neural Knowledge Base' links.\n3. Analyze the data table for patterns.";
    }

    if (msg.includes('answer') || msg.includes('solution')) {
        return "I cannot provide direct answers. That would violate my core directive: *Empower Human Intelligence*. \n\nHowever, I can verify your logic if you describe it.";
    }

    if (currentLesson.includes("Hardware")) {
        if (msg.includes("hardware") || msg.includes("soft")) {
            return "Remember: Hardware = Physical (Touch). Software = Logical (Code). If you can kick it, it's hardware. If you can only curse at it, it's software.";
        }
    }

    return "Processing query... \n\nMy neural database is vast, but my current context window is limited. Could you rephrase that related to the current lesson?";
}

// --- PERSISTENCE HELPERS ---

function saveProgress(dayId) {
    let unlocked = loadProgress();
    if (!unlocked.includes(dayId)) {
        unlocked.push(dayId);
        localStorage.setItem('datavitals_progress_default', JSON.stringify(unlocked));
    }
}

function loadProgress() {
    const stored = localStorage.getItem('datavitals_progress_default');
    return stored ? JSON.parse(stored) : ['week-1-d1'];
}

function handleLogout() {
    if (confirm("Are you sure you want to reset your journey?")) {
        localStorage.removeItem('datavitals_progress_default');
        localStorage.removeItem('datavitals_stats'); // Clear Gamification too
        window.location.reload();
    }
}

// Init
try {
    console.log("System Initializing...");


    try {
        renderRoadmap();
        console.log("Neural Link Established.");
    } catch (renderError) {
        console.error("Render Failed:", renderError);
        alert("Render Error: " + renderError.message);
    }

}, bootTime);

} catch (e) {
    console.error("Critical System Failure:", e);
    // Force remove splash to show error
    const splash = document.getElementById('splash-screen');
    if (splash) splash.style.display = 'none';

    alert("System Error: " + e.message);
    document.getElementById('app').innerHTML = `<h1 style="color:red; padding:20px;">System Error: ${e.message}</h1>`;
}
