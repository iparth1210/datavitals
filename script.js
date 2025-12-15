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

// --- LESSON FETCHER ---
function getLessonById(lessonId) {
    // 1. Try to find manually authored content
    const manualLesson = window.modules.find(m => m.id === lessonId);
    if (manualLesson) return manualLesson;

    // 2. Procedural Fallback (The Infinite Engine)
    // Extract Week and Day from ID: "lesson-w22-d3"
    const match = lessonId.match(/w(\d+)-d(\d+)/);
    if (!match) return null;

    const weekNum = parseInt(match[1]);
    const dayNum = parseInt(match[2]);
    let phase = "Foundation";
    let topic = "General Data Science";

    // Detect Topic & Video based on roadmap
    let videoUrl = 'https://www.youtube.com/embed/jfKfPfyJRdk?si=premium_mode'; // Default Fallback

    if (weekNum <= 8) {
        phase = "Phase 1: Foundation";
        topic = "Excel & Logic";
        videoUrl = "https://www.youtube.com/embed/Vl0H-qTclOg?si=premium_mode"; // FreeCodeCamp Excel
    }
    else if (weekNum <= 20) {
        phase = "Phase 2: Analyst";
        topic = "SQL & Data Viz";
        videoUrl = "https://www.youtube.com/embed/5bF55FKAOqI?si=premium_mode"; // FreeCodeCamp SQL
    }
    else if (weekNum <= 32) {
        phase = "Phase 3: Python Dev";
        topic = "Python Programming";
        videoUrl = "https://www.youtube.com/embed/LHBE6Q9XlzI?si=premium_mode"; // FreeCodeCamp Python
    }
    else {
        phase = "Phase 4: AI Architect";
        topic = "Neural Networks & ML";
        videoUrl = "https://www.youtube.com/embed/aircAruvnKk?si=premium_mode"; // 3Blue1Brown Neural Networks
    }

    return {
        id: lessonId,
        title: `W${weekNum}-D${dayNum}: ${topic} Mastery`,
        image: 'assets/lesson_matrix.png',
        video: videoUrl,
        sources: [{ title: `${topic} Documentation`, url: '#' }],
        story: `
            <p><strong>${phase} // Week ${weekNum} Day ${dayNum}</strong></p>
            <p>You are deep in the simulation. Today's focus is <strong>${topic}</strong>.</p>
            <p>As an advanced agent, you must verify system integrity to proceed.</p>
            <p><strong>Task:</strong> Locate the <strong>"System Ready"</strong> signal.</p>
        `,
        task: {
            type: 'find-value',
            targetColumn: 'Status',
            condition: (val) => val === 'System Ready',
            successMessage: "Signal verified. Neural link stable. Proceeding...",
            errorMessage: "Find the 'System Ready' status."
        },
        data: [
            { Check: "Power", Status: "Online", Zone: "Core" },
            { Check: "Uplink", Status: "Stable", Zone: "Net" },
            { Check: "Verify", Status: "System Ready", Zone: "Admin" }, // Target
            { Check: "Aux", Status: "Standby", Zone: "Backup" }
        ]
    };
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



// --- LESSON FETCHER ---
function getLessonById(lessonId) {
    // 1. Try to find manually authored content
    const manualLesson = window.modules.find(m => m.id === lessonId);
    if (manualLesson) return manualLesson;

    // 2. Procedural Fallback (The Infinite Engine)
    const match = lessonId.match(/w(\d+)-d(\d+)/);
    if (!match) return null;

    const weekNum = parseInt(match[1]);
    const dayNum = parseInt(match[2]);
    let phase = "Foundation";
    let topic = "General Data Science";
    let videoUrl = 'https://www.youtube.com/embed/Vl0H-qTclOg'; // Fallback

    // Quad-Track Content Generator
    let techContent = "";
    let healthContent = "";
    let bioContent = "";
    let labContent = "";
    let taskInstruction = "";
    let taskTarget = "";

    // PHASE 1: WEEKS 1-8 (Excel & Logic)
    if (weekNum <= 8) {
        phase = "Phase 1: Foundation";
        topic = "Excel & Logic";
        videoUrl = "https://www.youtube.com/embed/Vl0H-qTclOg"; // FreeCodeCamp Excel

        techContent = "<strong>Excel & Logic:</strong> Mastering spreadsheets, filters, and conditional logic (IF/AND/OR).";
        healthContent = "<strong>Hospital Admin:</strong> Managing patient admission logs, shift schedules, and inventory.";
        bioContent = "<strong>Vital Signs:</strong> Understanding HR, BP, and SpO2 data ranges.";
        labContent = "<strong>Mission:</strong> Find the patient with <strong>Critical Vitals</strong> in the log.";
        taskInstruction = "Locate the patient with 'Critical' status.";
        taskTarget = "Critical";
    }
    // PHASE 2: WEEKS 9-20 (SQL & Analysis)
    else if (weekNum <= 20) {
        phase = "Phase 2: Analyst";
        topic = "SQL & Data Viz";
        videoUrl = "https://www.youtube.com/embed/5bF55FKAOqI"; // FreeCodeCamp SQL

        techContent = "<strong>SQL & Databases:</strong> SELECT, WHERE, JOIN, and Aggregations.";
        healthContent = "<strong>EHR Systems:</strong> Querying Epic/Cerner databases for patient cohorts.";
        bioContent = "<strong>Pathology:</strong> Lab results, blood panels, and disease markers.";
        labContent = "<strong>Mission:</strong> Query the database for <strong>Type 2 Diabetes</strong> patients.";
        taskInstruction = "Find the 'Type 2 Diabetes' diagnosis.";
        taskTarget = "Type 2 Diabetes";
    }
    // PHASE 3: WEEKS 21-32 (Python Dev)
    else if (weekNum <= 32) {
        phase = "Phase 3: Python Dev";
        topic = "Python Programming";
        videoUrl = "https://www.youtube.com/embed/LHBE6Q9XlzI"; // FreeCodeCamp Python

        techContent = "<strong>Python Programming:</strong> Variables, Lists, Loops, Pandas DataFrames.";
        healthContent = "<strong>Bioinformatics:</strong> Processing raw DNA sequences and large clinical datasets.";
        bioContent = "<strong>Genomics:</strong> A, C, T, G sequences and protein synthesis.";
        labContent = "<strong>Mission:</strong> Identify the <strong>Mutated</strong> gene sequence.";
        taskInstruction = "Find the 'Mutated' status.";
        taskTarget = "Mutated";
    }
    // PHASE 4: WEEKS 33-52 (AI Architect)
    else {
        phase = "Phase 4: AI Architect";
        topic = "Neural Networks & ML";
        videoUrl = "https://www.youtube.com/embed/aircAruvnKk"; // 3Blue1Brown Neural Networks

        techContent = "<strong>Neural Networks:</strong> Nodes, Layers, Weights, Biases, Backprop.";
        healthContent = "<strong>Medical AI:</strong> Computer Vision for Tumor Detection in X-Rays.";
        bioContent = "<strong>Oncology:</strong> Identifying malignant vs benign cell structures.";
        labContent = "<strong>Mission:</strong> Verify the model's prediction of <strong>High Risk</strong>.";
        taskInstruction = "Find the 'High Risk' prediction.";
        taskTarget = "High Risk";
    }

    return {
        id: lessonId,
        title: `W${weekNum}-D${dayNum}: ${topic} Mastery`,
        image: 'assets/lesson_matrix.png',
        video: videoUrl,
        sources: [{ title: `${topic} Documentation`, url: '#' }],
        story: `
            <div class="quad-track">
                <div class="track-section tech">
                    <h4>💻 1. Tech Core</h4>
                    <p>${techContent}</p>
                </div>
                <div class="track-section health">
                    <h4>🏥 2. Health Systems</h4>
                    <p>${healthContent}</p>
                </div>
                <div class="track-section bio">
                    <h4>🧬 3. Bio-Science</h4>
                    <p>${bioContent}</p>
                </div>
                <div class="track-section lab">
                    <h4>🧪 4. Project Lab</h4>
                    <p>${labContent}</p>
                </div>
            </div>
        `,
        task: {
            type: 'find-value',
            targetColumn: 'Status',
            condition: (val) => val === taskTarget,
            successMessage: "Analysis Complete. Clinical Insight Generated.",
            errorMessage: taskInstruction
        },
        data: [
            { Check: "Power", Status: "Online", Zone: "Core" },
            { Check: "Uplink", Status: "Stable", Zone: "Net" },
            { Check: "Verify", Status: "System Ready", Zone: "Admin" }, // Target
            { Check: "Aux", Status: "Standby", Zone: "Backup" }
        ]
    };
}


function renderLesson(lessonId, dayId) {
    const lesson = getLessonById(lessonId);

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
                <div class="lesson-video-container" style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 100%; border-radius: 8px; border: 1px solid var(--border-subtle); margin-bottom: 1.5rem;">
                    <iframe src="${lesson.video}" 
                            style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;" 
                            frameborder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowfullscreen>
                    </iframe>
                </div>
                <div style="margin-top: -1rem; margin-bottom: 2rem; text-align: right;">
                    <!-- Robust Link Generator -->
                    ${(() => {
                const vidMatch = lesson.video.match(/(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/);
                const videoId = vidMatch ? vidMatch[1] : null;
                const watchUrl = videoId ? `https://www.youtube.com/watch?v=${videoId}` : lesson.video;
                return `
                        <a href="${watchUrl}" target="_blank" style="color: var(--accent-cyan); font-size: 0.9rem; font-weight: 500; text-decoration: none; display: inline-flex; align-items: center; gap: 6px; padding: 4px 8px; border: 1px solid rgba(94, 234, 212, 0.2); border-radius: 4px; background: rgba(94, 234, 212, 0.05);">
                            <span>📺 Open Full Video in New Tab</span>
                            <span style="opacity: 0.7; font-size: 0.8em;">↗</span>
                        </a>`;
            })()}
                </div>
                ` : ''}
                <div class="knowledge-base">
                    <h4>🧠 Neural Knowledge Base</h4>
                    <ul class="source-list">
                        ${lesson.sources.map(s => `
                            <li><a href="${s.url}" target="_blank" rel="noopener noreferrer">🔗 ${s.title}</a></li>
                        `).join('')}
                    </ul>
                </div>
                ` : ''
}
            </div >
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
        </div >
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
        html += `< th > ${ h.charAt(0).toUpperCase() + h.slice(1) }</th > `;
    });
    html += '</tr></thead><tbody>';

    data.forEach((row, rowIndex) => {
        html += '<tr>';
        headers.forEach(key => {
            html += `< td class="clickable-cell" data - row="${rowIndex}" data - col="${key}" data - val="${row[key]}" > ${ row[key] }</td > `;
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
            console.log("Cell Clicked:", cell.dataset.val); // Debug Log

            cells.forEach(c => c.classList.remove('selected-cell'));
            cell.classList.add('selected-cell');

            const col = cell.dataset.col;
            let val = cell.dataset.val;

            if (!isNaN(val) && val.trim() !== '') {
                val = Number(val);
            }

            const rowData = lesson.data[cell.dataset.row];

            // Re-query feedback element to ensure we have the live one
            const feedbackEl = document.getElementById('feedback');
            if (!feedbackEl) {
                console.error("Critical: Feedback element not found in DOM");
                return;
            }

            if (col === lesson.task.targetColumn) {
                const isCorrect = lesson.task.condition(val, rowData);

                if (isCorrect) {
                    try {
                        // Logic: Mark Success -> Gamify -> Unlock -> Next Button
                        feedbackEl.className = 'feedback-box success';

                        if (window.Gamification) {
                            Gamification.addXP(50);
                        }

                        const unlockMsg = unlockNextDay(currentDayId);

                        let nextBtnHtml = '';
                        try {
                            const nextLesson = getNextLesson(currentDayId);
                            if (nextLesson) {
                                nextBtnHtml = `
    < button onclick = "renderLesson('${nextLesson.lessonId}', '${nextLesson.id}')"
class="btn btn-primary"
id = "btn-next-lesson"
style = "margin-left: 15px; padding: 6px 18px; font-size: 0.95rem; animation: pulseGlow 2s infinite; display: inline-flex; align-items: center; gap: 8px;" >
    Next Lesson < span style = "font-size: 1.1em" >→</span >
                                </button >
    `;
                            }
                        } catch (innerErr) {
                            console.error("Navigation Error:", innerErr);
                        }

                        feedbackEl.innerHTML = `
    < div style = "display:flex; flex-direction: column; align-items:center; justify-content:center; gap:12px;" >
                            <div style="font-size: 1.1rem; font-weight: 600;">✅ Correct Analysis</div>
                            <div style="font-size:0.9rem; opacity:0.8; color: var(--text-muted);">${lesson.task.successMessage}</div>
                            <div style="font-size:0.8rem; color: var(--accent-cyan);">${unlockMsg}</div>
                            ${ nextBtnHtml }
                        </div >
    `;
                        triggerConfetti();
                    } catch (e) {
                        console.error("Runtime Error:", e);
                        feedbackEl.innerHTML = `
    < div style = "color: var(--error);" >
                            ✅ Correct Answer recorded.< br >
    <span style="font-size:0.8em; opacity:0.8">System Warning: Module transition failed (${e.message}). Please refresh.</span>
                        </div > `;
                    }
                } else {
                    feedbackEl.className = 'feedback-box error';
                    feedbackEl.innerHTML = `❌ ${ lesson.task.errorMessage } `;
                    if (window.Gamification) {
                        Gamification.takeDamage(10);
                    }
                }
            } else {
                console.log("Wrong Column Clicked");
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


// --- UI UTILS ---

function toggleTerminal() {
    const modal = document.getElementById('terminal-modal');
    if (modal) {
        modal.classList.toggle('hidden');
        if (!modal.classList.contains('hidden')) {
            // Re-init engine if needed when opening
            if (window.PythonEngine && !PythonEngine.editor) {
                setTimeout(() => PythonEngine.init(), 100);
            }
        }
    } else {
        console.error("Terminal Modal not found!");
    }
}

function showRoadmap() {
    renderRoadmap();
    const splash = document.getElementById('splash-screen');
    if (splash) splash.classList.add('hidden');
}

function handleLogout() {
    resetProgress();
}

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
    msgDiv.className = `message ${ sender } -message`;
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
        return `Greetings.I see you are currently focusing on ** ${ currentLesson }**.How can I clarify this topic ? `;
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
    // alert("DEBUG: System Init");


    // DEPENDENCY CHECK
    if (!window.roadmap) throw new Error("Critical: roadmap.js failed to load.");
    if (!window.modules) throw new Error("Critical: modules.js failed to load.");

    // Simulate boot sequence
    const bootTime = 4000; // 4s delay (USER REQUEST)

    // Add Loading Bar
    const splash = document.getElementById('splash-screen');
    if (splash) {
        const barContainer = document.createElement('div');
        barContainer.className = 'splash-loader-container';
        barContainer.innerHTML = '<div class="splash-loader-bar"></div>';
        splash.querySelector('.splash-content').appendChild(barContainer);
    }

    setTimeout(() => {
        const splash = document.getElementById('splash-screen');
        if (splash) {
            splash.style.opacity = '0';
            splash.style.display = 'none'; // FORCE REMOVAL
            splash.remove();
        }

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
    const splash = document.getElementById('splash-screen');
    if (splash) splash.style.display = 'none';

    alert("System Error: " + e.message);
    document.getElementById('app').innerHTML = `< h1 style = "color:red; padding:20px;" > System Error: ${ e.message }</h1 > `;
}
