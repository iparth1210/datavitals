console.log("Booting DataVitals v5.9 Grid Layout...");
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

// [Duplicates Removed]



function renderRoadmap() {
    const unlocked = loadProgress();

    app.innerHTML = `
        <div class="roadmap-container">
            <!-- Header Removed per user request -->
            <div style="margin-bottom: 24px;"></div>

            <div class="roadmap-grid">
                ${window.roadmap.map((week, index) => {
        const isAvailable = unlocked.includes(week.days[0].id);
        const weekNum = index + 1;

        return `
                    <div class="week-card ${isAvailable ? 'unlocked' : 'locked'}" 
                         onclick="${isAvailable ? `renderWeekView('${week.id}')` : ''}">
                        <div class="week-header">
                            <span class="week-number">WEEK ${weekNum}</span>
                            ${!isAvailable ? '🔒' : ''}
                        </div>
                        <h3 class="week-title">${week.title}</h3>
                        <div class="week-desc">${week.description}</div>
                        <div class="progress-bar">
                            <div class="progress-fill" style="width: ${isAvailable ? '0%' : '0%'}"></div> 
                        </div>
                    </div>
                    `;
    }).join('')}
            </div>
        </div>
    `;

    if (window.updateGamificationUI) window.updateGamificationUI();
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
            
            <div class="week-grid-square">
                ${week.days.map((day, index) => {
        const isUnlocked = unlocked.includes(day.id);
        const statusClass = isUnlocked ? 'unlocked' : 'locked';
        // Generate a fun abstract pattern/icon based on day index
        const icons = ['💻', '💿', '📂', '☁️', '📊', '🔒', '✅'];
        const dayIcon = icons[index % icons.length];

        return `
                    <div class="day-card-square ${statusClass}" onclick="handleDayClick('${day.id}', '${day.lessonId}')">
                        <div class="day-header">
                            <span class="day-num">DAY ${index + 1}</span>
                            ${!isUnlocked ? '<span class="lock-state">🔒</span>' : ''}
                        </div>
                        <div class="day-body">
                            <div class="day-icon-large">${dayIcon}</div>
                            <h3 class="day-title-text">${day.title}</h3>
                        </div>
                        <div class="day-footer">
                            <span class="status-indicator"></span>
                            ${isUnlocked ? 'Completed' : 'Locked'}
                        </div>
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
        title: `W${weekNum} -D${dayNum}: ${topic} Mastery`,
        image: 'assets/lesson_matrix.png',
        video: videoUrl,
        sources: [{ title: `${topic} Documentation`, url: `https://www.google.com/search?q=${topic.replace(/ /g, '+')}+documentation` }],
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
                                    <button onclick="renderLesson('${nextLesson.lessonId}', '${nextLesson.id}')" 
                                            class="btn btn-primary" 
                                            id="btn-next-lesson" 
                                            style="margin-left: 15px; padding: 6px 18px; font-size: 0.95rem; animation: pulseGlow 2s infinite; display: inline-flex; align-items: center; gap: 8px;">
                                        Next Lesson <span style="font-size: 1.1em">→</span>
                                    </button>
                                `;
                            }
                        } catch (innerErr) {
                            console.error("Navigation Error:", innerErr);
                        }

                        feedbackEl.innerHTML = `
                            <div style="display:flex; flex-direction: column; align-items:center; justify-content:center; gap:12px;">
                                <div style="font-size: 1.1rem; font-weight: 600;">✅ Correct Analysis</div>
                                <div style="font-size:0.9rem; opacity:0.8; color: var(--text-muted);">${lesson.task.successMessage}</div>
                                <div style="font-size:0.8rem; color: var(--accent-cyan);">${unlockMsg}</div>
                                ${nextBtnHtml}
                            </div>
                        `;
                        triggerConfetti();
                    } catch (e) {
                        console.error("Runtime Error:", e);
                        feedbackEl.innerHTML = `
                            <div style="color: var(--error);">
                                ✅ Correct Answer recorded.<br>
                                <span style="font-size:0.8em; opacity:0.8">System Warning: Module transition failed (${e.message}). Please refresh.</span>
                            </div>
                        `;
                    }
                } else {
                    feedbackEl.className = 'feedback-box error';
                    feedbackEl.innerHTML = `❌ ${lesson.task.errorMessage} `;
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

// Show Library Resources v5.5 (Day-by-Day)
window.showResources = () => {
    const app = document.getElementById('app');
    const title = document.getElementById('page-title');
    if (title) title.innerText = "Library";

    // Highlight sidebar
    document.querySelectorAll('.nav-item').forEach(el => el.classList.remove('active'));
    // Find library link heuristic
    const navItems = document.querySelectorAll('.nav-item');
    if (navItems.length > 5) navItems[5].classList.add('active');

    if (!window.libraryResources) {
        app.innerHTML = '<p style="padding:20px;">Library data loading...</p>';
        return;
    }

    let html = `<div class="library-container" style="max-width: 1000px; margin: 0 auto; padding-bottom: 50px;">`;

    window.libraryResources.forEach(week => {
        html += `
            <div class="lib-week-block" style="margin-bottom: 40px;">
                <h2 style="font-size: 1.4rem; color: var(--accent-primary); border-bottom: 1px solid var(--border-subtle); padding-bottom: 10px; margin-bottom: 20px;">
                    ${week.weekTitle}
                </h2>
                <div class="lib-days-grid" style="display: grid; gap: 20px;">
        `;

        week.days.forEach(day => {
            html += `
                <div class="lib-day-card" style="background: var(--bg-card); border: 1px solid var(--border-subtle); border-radius: 8px; padding: 20px;">
                    <h3 style="font-size: 1.1rem; color: var(--text-primary); margin-bottom: 15px; display:flex; align-items:center; gap:10px;">
                        <span style="opacity:0.6;">📅</span> ${day.dayTitle}
                    </h3>
                    <div class="resources-list" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 10px;">
            `;

            day.resources.forEach(res => {
                let icon = '📄';
                if (res.type === 'book') icon = '📖';
                if (res.type === 'video') icon = '📺';
                if (res.type === 'tool') icon = '🛠️';
                if (res.type === 'course') icon = '🎓';

                html += `
                    <a href="${res.url}" target="_blank" class="resource-link" style="
                        display: flex; align-items: center; gap: 10px; 
                        padding: 10px; background: rgba(255,255,255,0.03); 
                        border-radius: 6px; text-decoration: none; 
                        color: var(--text-secondary); transition: all 0.2s; border: 1px solid transparent;">
                        <span style="font-size: 1.2rem;">${icon}</span>
                        <div style="flex:1;">
                            <div style="font-size: 0.9rem; font-weight: 500; color: var(--text-primary);">${res.title}</div>
                            <div style="font-size: 0.75rem; opacity: 0.6; text-transform: uppercase;">${res.type}</div>
                        </div>
                        <span style="opacity:0.3;">↗</span>
                    </a>
                `;
            });

            html += `</div></div>`;
        });

        html += `</div></div>`;
    });

    html += `</div>`;

    // --- BENTO GRID COMPATIBILITY ---
    function filterModules(query) {
        const q = query.toLowerCase();
        const cards = document.querySelectorAll('.week-card');
        cards.forEach(card => {
            const text = card.innerText.toLowerCase();
            card.style.display = text.includes(q) ? 'block' : 'none';
            card.style.animation = 'fadeIn 0.5s forwards';
        });
    }

    // Adding custom styles for HUD items
    const horizonStyles = document.createElement('style');
    horizonStyles.innerHTML = `
    .vital-item { margin-bottom: 16px; font-family: 'JetBrains Mono'; font-size: 0.7rem; }
    .vital-item .label { color: var(--text-muted); display: block; margin-bottom: 4px; }
    .vital-item .value { font-size: 1.1rem; font-weight: 700; }
    .vital-bar { width: 100%; height: 2px; background: rgba(255,255,255,0.05); margin-top: 8px; border-radius: 1px; }
    .vital-bar .fill { height: 100%; background: var(--accent-cyan); box-shadow: 0 0 10px var(--accent-cyan); }
    .lab-line { font-family: 'JetBrains Mono'; font-size: 0.7rem; padding: 4px 0; opacity: 0.8; }
    .quick-link { padding: 8px 12px; background: rgba(255,255,255,0.03); border: 1px solid var(--border-glass); border-radius: 8px; font-family: 'JetBrains Mono'; font-size: 0.65rem; color: var(--text-secondary); cursor: pointer; transition: 0.3s; margin-bottom: 4px; }
    .quick-link:hover { border-color: var(--accent-cyan); color: white; transform: translateX(5px); }
`;
    document.head.appendChild(horizonStyles);

    // --- UI UTILS ---
    function injectCustomStyles(id, css) {
        if (!document.getElementById(id)) {
            const style = document.createElement('style');
            style.id = id;
            style.innerHTML = css;
            document.head.appendChild(style);
        }
    }

    injectCustomStyles('library-styles', `
    .resource-link:hover {
        background: rgba(255,255,255,0.08) !important;
        border-color: var(--accent-cyan) !important;
        transform: translateX(5px);
        color: white !important;
    }
`);
}

app.innerHTML = html;
};

// Show Progress Stats
window.showMyProgress = () => {
    const app = document.getElementById('app');
    const title = document.getElementById('page-title');
    if (title) title.innerText = "My Progress";

    const unlocked = loadProgress().length;
    const total = window.roadmap.reduce((acc, week) => acc + week.days.length, 0);
    const percent = Math.round((unlocked / total) * 100);
    const xp = window.Gamification ? window.Gamification.state.xp : 0;
    const level = window.Gamification ? window.Gamification.state.level : 1;

    app.innerHTML = `
        <div style="max-width:800px; margin:0 auto; text-align:center;">
            <div style="background:var(--bg-card); padding:40px; border-radius:16px; border:1px solid var(--border-subtle);">
                <div style="font-size:4rem; margin-bottom:10px;">🏆</div>
                <h2 style="margin-bottom:20px;">Your Journey</h2>
                <div style="display:flex; justify-content:center; gap:40px; margin-bottom:30px;">
                    <div>
                        <div style="font-size:2rem; font-weight:800; color:var(--accent-primary);">${percent}%</div>
                        <div style="color:var(--text-muted);">Completed</div>
                    </div>
                    <div>
                        <div style="font-size:2rem; font-weight:800; color:var(--accent-cyan);">${xp}</div>
                        <div style="color:var(--text-muted);">Total XP</div>
                    </div>
                    <div>
                        <div style="font-size:2rem; font-weight:800; color:var(--warning);">${level}</div>
                        <div style="color:var(--text-muted);">Level</div>
                    </div>
                </div>
                <button onclick="renderRoadmap()" class="btn btn-primary">Continue Learning</button>
            </div>
        </div>
    `;
};

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
        localStorage.removeItem('datavitals_stats'); // Clear Gamification
        window.location.reload();
    }
}

const VERSION = "7.0-KILLER";

window.addEventListener('DOMContentLoaded', () => {
    console.log("Horizon OS Initialized.");
    // Pre-inject high-end assets
    injectUniversalAssets();
});

function injectUniversalAssets() {
    // Ensuring the Bento Grid is visible if login is bypassed or successful
    if (localStorage.getItem('nn_link_established')) {
        document.body.classList.add('authorized');
    }
}

// --- NEW "KILLER" HUD LOGIC ---
function updateNeuralHUD() {
    const vitalsCard = document.getElementById('sidebar-hud');
    const labsCard = document.getElementById('labs-status');
    const quickResources = document.getElementById('quick-resources');

    if (vitalsCard) {
        vitalsCard.innerHTML = `
            <div class="vital-item">
                <span class="label">NEURAL_XP</span>
                <span class="value text-gradient">${localStorage.getItem('datavitals_xp') || 1250}</span>
                <div class="vital-bar"><div class="fill" style="width: 65%;"></div></div>
            </div>
            <div class="vital-item">
                <span class="label">CLINICAL_STREAK</span>
                <span class="value" style="color: var(--accent-pink);">8 DAYS</span>
            </div>
            <div class="vital-item">
                <span class="label">BIO_SYNC</span>
                <span class="value" style="color: var(--accent-cyan);">OPTIMAL</span>
            </div>
        `;
    }

    if (labsCard) {
        labsCard.innerHTML = `
            <div class="lab-line">> KERNEL: V3.11_ACTIVE</div>
            <div class="lab-line">> UPTIME: 02:44:12</div>
            <div class="lab-line">> LATEST_ANALYSIS: COMPLETE</div>
            <button class="btn-neural" onclick="toggleTerminal()" style="width: 100%; margin-top: auto; padding: 10px; font-size: 0.7rem;">OPEN_NEURAL_KERNEL</button>
        `;
    }

    if (quickResources) {
        quickResources.innerHTML = `
            <div class="quick-link" onclick="window.open('https://python.org', '_blank')">🔗 PYTHON_DOCS</div>
            <div class="quick-link" onclick="window.open('https://hl7.org', '_blank')">🔗 HL7_STANDARDS</div>
            <div class="quick-link" onclick="showResources()">🔗 VIEW_LIBRARY_OVR</div>
        `;
    }
}

// Init
try {
    console.log("System Initializing...");
    updateNeuralHUD();


    // Initialize Aura Visual
    if (window.AuraVisualEngine) {
        window.auraVisual = new AuraVisualEngine('aura-waveform-container');
    }

    // DEPENDENCY CHECK
    if (!window.roadmap) throw new Error("Critical: roadmap.js failed to load.");
    if (!window.modules) throw new Error("Critical: modules.js failed to load.");

    // Initial Render Bridge
    window.bootApplication = () => {
        console.log("System Ready. Initializing Neural Link...");
        try {
            renderRoadmap();
            console.log("Welcome to DataVitals.");

            // Trigger Phase 2.4: Strategic Spotlight
            setTimeout(() => {
                if (window.SpotlightTour) {
                    window.SpotlightTour.init();
                }
            }, 1000);
        } catch (renderError) {
            console.error("Critical Render Error:", renderError);
        }
    };

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
        // --- CINEMATIC OVERHAUL START ---
        // Hide legacy splash immediately
        const splash = document.getElementById('splash-screen');
        if (splash) splash.remove();

        // Start Cinematic Narrative
        if (window.NarrativeEngine) {
            window.NarrativeEngine.init();
        }

        // Hook Login Success -> System Synthesis -> Application Boot
        window.onLoginSuccess = () => {
            console.log("Login Verified. Starting System Synthesis...");
            if (window.GuidedLoading) {
                window.GuidedLoading.init();
            } else {
                window.bootApplication();
            }

            window.onSystemReady = () => {
                window.bootApplication();
            };
        };
        // --- CINEMATIC OVERHAUL END ---

    }, 500); // Quick handoff to Narrative

} catch (e) {
    console.error("Critical System Failure:", e);
    const splash = document.getElementById('splash-screen');
    if (splash) splash.style.display = 'none';

    alert("System Error: " + e.message);
    document.getElementById('app').innerHTML = `<h1 style="color:red; padding:20px;">System Error: ${e.message}</h1>`;
}
