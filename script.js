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
                <div class="interactive-area">
                    <h3>Interactive Task</h3>
                    ${renderTable(lesson.data)}
                    <div id="feedback" class="feedback-box">
                        Select a cell to analyze it...
                    </div>
                </div>
            </div>
        </div>
    `;

    attachLessonListeners(lesson, dayId);
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
                    feedback.innerHTML = `✅ ${lesson.task.successMessage} <br><strong>${unlockMsg}</strong>`;
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

// Init
try {
    console.log("System Initializing...");

    // Simulate boot sequence
    setTimeout(() => {
        const splash = document.getElementById('splash-screen');
        if (splash) {
            splash.classList.add('hidden');
            // Remove from DOM after fade out to save resources
            setTimeout(() => splash.remove(), 800);
        }
        renderRoadmap();
        console.log("Neural Link Established.");
    }, 3500); // 3.5s delay to match typing animation

} catch (e) {
    console.error("Critical System Failure:", e);
    alert("System Error: " + e.message);
}
