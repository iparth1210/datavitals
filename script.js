// Modules are loaded globally

const app = document.getElementById('app');

// State
let currentModuleIndex = 0;
let isLandingPage = true;

// --- PROGRESS SYSTEM ---
// --- PROGRESS SYSTEM ---
function loadProgress() {
    const user = window.authService.getCurrentUser();
    if (!user) return [];

    const saved = localStorage.getItem(`datavitals_progress_${user.username}`);
    if (saved) {
        return JSON.parse(saved);
    }
    // Default: Week 1, Day 1 is unlocked
    return ['week-1-d1'];
}

function saveProgress(dayId) {
    const user = window.authService.getCurrentUser();
    if (!user) return;

    let unlocked = loadProgress();
    if (!unlocked.includes(dayId)) {
        unlocked.push(dayId);
        localStorage.setItem(`datavitals_progress_${user.username}`, JSON.stringify(unlocked));
    }
}

// ... existing helper functions (isWeekUnlocked, unlockNextDay) remain valid as they call loadProgress() ...

function isWeekUnlocked(weekId) {
    const unlocked = loadProgress();
    // A week is unlocked if its first day is unlocked
    const firstDayId = window.roadmap.find(w => w.id === weekId)?.days[0]?.id;
    return unlocked.includes(firstDayId);
}

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

// ... RENDER FUNCTIONS ...

function renderLandingPage() {
    // Check if auth is not ready (missing config)
    if (window.firebaseConfig && window.firebaseConfig.apiKey === "YOUR_API_KEY_HERE") {
        app.innerHTML = `
            <div class="landing-page">
                <div class="landing-content">
                    <h1>Configuration Needed ⚠️</h1>
                    <p style="margin-bottom: 30px;">This app requires Firebase for Google Authentication.</p>
                    <div style="background: rgba(0,0,0,0.1); padding: 20px; text-align: left; border-radius: 8px;">
                        <p style="font-weight: bold; margin-bottom: 10px;">Step 1:</p>
                        <p>Open <code>firebase-config.js</code> in your editor.</p>
                        <p style="font-weight: bold; margin-top: 15px; margin-bottom: 10px;">Step 2:</p>
                        <p>Paste your Firebase Config keys.</p>
                    </div>
                </div>
            </div>`;
        return;
    }

    if (window.authService && window.authService.isLoggedIn && window.authService.isLoggedIn()) {
        renderRoadmap();
        return;
    }

    app.innerHTML = `
        <div class="landing-page">
            <div class="landing-content">
                <span class="mascot">👨‍⚕️📊</span>
                <h1>DataVitals</h1>
                <p style="font-size: 1.2rem; margin: 1rem 0;">Zero to AI Analyst: 52 Weeks, 365 Days.</p>
                <div class="auth-buttons" style="display: flex; gap: 1rem; justify-content: center; margin-top: 2rem;">
                    <button id="login-btn" class="btn btn-primary">Login</button>
                    <button id="register-btn" class="btn btn-secondary">Register</button>
                </div>
            </div>
        </div>
    `;

    document.getElementById('login-btn').addEventListener('click', () => renderAuth('login'));
    document.getElementById('register-btn').addEventListener('click', () => renderAuth('register'));
}

function renderAuth(mode) {
    const title = mode === 'login' ? 'Login' : 'Create Account';
    const btnText = mode === 'login' ? 'Enter Hospital' : 'Join Staff';

    app.innerHTML = `
        <div class="landing-page">
            <div class="landing-content" style="max-width: 400px;">
                <button onclick="renderLandingPage()" style="background:none; border:none; color:white; cursor:pointer; font-size:1.5rem; position:absolute; top:20px; left:20px;">←</button>
                <h2>${title}</h2>
                <div class="form-group" style="text-align: left; margin: 1rem 0;">
                    <label style="display:block; margin-bottom: 0.5rem;">Username</label>
                    <input type="text" id="username" style="width: 100%; padding: 0.8rem; border-radius: 8px; border: none;">
                </div>
                <div class="form-group" style="text-align: left; margin: 1rem 0;">
                    <label style="display:block; margin-bottom: 0.5rem;">Password</label>
                    <input type="password" id="password" style="width: 100%; padding: 0.8rem; border-radius: 8px; border: none;">
                </div>
                <button id="auth-action-btn" class="btn btn-primary" style="width: 100%;">${btnText}</button>
                <p id="auth-error" style="color: #ff7675; margin-top: 1rem; min-height: 1.2em;"></p>
            </div>
        </div>
    `;

    document.getElementById('auth-action-btn').addEventListener('click', () => {
        const user = document.getElementById('username').value;
        const pass = document.getElementById('password').value;
        const errorEl = document.getElementById('auth-error');

        if (!user || !pass) {
            errorEl.textContent = "Please fill in all fields.";
            return;
        }

        let result;
        if (mode === 'login') {
            result = window.authService.login(user, pass);
        } else {
            result = window.authService.register(user, pass);
        }

        if (result.success) {
            if (mode === 'register') {
                alert(result.message); // Prompt to login after registering
                renderAuth('login');
            } else {
                renderRoadmap();
            }
        } else {
            errorEl.textContent = result.message;
        }
    });
}

function renderRoadmap() {
    const unlocked = loadProgress();

    app.innerHTML = `
        <div class="roadmap-container">
            <h2 style="text-align: center; margin-bottom: 2rem; color: var(--color-primary-dark);">Your 52-Week Journey 🗺️</h2>
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
                <button onclick="resetProgress()" class="btn btn-secondary" style="font-size: 0.8rem;">Logout</button>
            </div>
        </div>
    `;
}

function renderWeekView(weekId) {
    const week = window.roadmap.find(w => w.id === weekId);
    if (!week) return;

    const unlocked = loadProgress();
    // Check if week is locked (Day 1 locked)
    if (!unlocked.includes(week.days[0].id)) {
        alert("🔒 Complete the previous weeks to unlock this!");
        return;
    }

    app.innerHTML = `
        <div class="roadmap-container">
            <div style="max-width: 1200px; margin: 0 auto; margin-bottom: 2rem; display: flex; align-items: center;">
                <button onclick="renderRoadmap()" class="btn btn-secondary">← Back to Map</button>
                <h2 style="margin-left: 2rem; color: var(--color-primary-dark);">${week.title}</h2>
            </div>
            
            <div class="roadmap-grid" style="grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));">
                ${week.days.map((day, index) => {
        const isUnlocked = unlocked.includes(day.id);
        const statusClass = isUnlocked ? 'unlocked' : 'locked';

        return `
                    <div class="roadmap-node ${statusClass}" onclick="handleDayClick('${day.id}', '${day.lessonId}')">
                        <div class="node-number" style="background: #718096;">${index + 1}</div>
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
                    <h2 class="module-title">${lesson.title}</h2>
                </div>
                <div class="story-text">
                    ${lesson.story}
                </div>
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
    if (confirm("Are you sure you want to log out?")) {
        window.authService.logout();
        renderLandingPage();
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

// Init
renderLandingPage();
