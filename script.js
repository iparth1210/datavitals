// Modules are loaded globally

const app = document.getElementById('app');

// State
let currentModuleIndex = 0;
let isLandingPage = true;

// --- PROGRESS SYSTEM ---
function loadProgress() {
    const saved = localStorage.getItem('datavitals-progress');
    if (saved) {
        return JSON.parse(saved);
    }
    // Default: Week 1, Day 1 is unlocked
    return ['week-1-d1'];
}

function saveProgress(dayId) {
    let unlocked = loadProgress();
    if (!unlocked.includes(dayId)) {
        unlocked.push(dayId);
        localStorage.setItem('datavitals-progress', JSON.stringify(unlocked));
    }
}

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

// --- RENDER FUNCTIONS ---
// Auto‑generated lesson content
// Auto‑generated lesson content
// Auto‑generated lesson content
function generateModules() {
    const modules = [];

    // Helper to get phase data
    const getPhaseData = (phaseNum) => {
        const key = `phase${phaseNum}`;
        return CONTENT_DATA[key] || CONTENT_DATA.phase1; // Fallback
    };

    window.roadmap.forEach((week, wIdx) => {
        const phaseNum = week.phase;
        const phaseData = getPhaseData(phaseNum);

        week.days.forEach((day, dIdx) => {
            const lessonId = `lesson-${week.id}-d${dIdx + 1}`;
            const title = `W${wIdx + 1}-D${dIdx + 1}: ${day.title}`;

            let allPages = [];

            // For Day 1 of each week, include ALL topics from the phase
            // For other days, just include placeholder content
            if (dIdx === 0) {
                // Put ALL phase topics into Day 1
                phaseData.topics.forEach(topic => {
                    const topicPages = generateLessonFromTopic(topic, phaseNum);
                    allPages = allPages.concat(topicPages);
                });
            } else {
                // Other days get placeholder content for now
                allPages = [{
                    type: 'text',
                    title: 'Coming Soon!',
                    content: '<p>More lessons coming soon!</p><p>Focus on Day 1 to master all core concepts first.</p>'
                }];
            }

            modules.push({
                id: lessonId,
                title,
                pages: allPages
            });
        });
    });
    window.modules = modules;
}


function showSplashScreen() {
    app.innerHTML = `
        <div class="splash-screen">
            <div class="splash-content">
                <div class="logo-container">
                    <img src="datavitals_logo_1764705533164.png" alt="DataVitals Logo" class="splash-logo">
                </div>
                <div class="splash-name">DataVitals</div>
                <div class="splash-tagline">Transform Data Into Healthcare Intelligence</div>
            </div>
        </div>
    `;

    // Sequence: Logo appears → Name fades in → Tagline → Fade to landing
    setTimeout(() => {
        const name = document.querySelector('.splash-name');
        name.style.opacity = '1';
        name.style.transform = 'translateY(0)';
    }, 1000);

    setTimeout(() => {
        const tagline = document.querySelector('.splash-tagline');
        tagline.style.opacity = '1';
        tagline.style.transform = 'translateY(0)';
    }, 2000);

    setTimeout(() => {
        const splash = document.querySelector('.splash-screen');
        splash.style.opacity = '0';
        setTimeout(() => {
            renderLandingPage();
        }, 800);
    }, 4000);
}

function renderLandingPage() {
    app.innerHTML = `
        <div class="landing-page">
            <div class="floating-elements">
                <div class="float-icon">📊</div>
                <div class="float-icon">💡</div>
                <div class="float-icon">🏥</div>
                <div class="float-icon">🤖</div>
            </div>
            <div class="landing-content">
                <div class="mascot-container">
                    <span class="mascot">👨‍⚕️📊</span>
                    <div class="mascot-shadow"></div>
                </div>
                <h1>DataVitals</h1>
                <div class="subtitle-container">
                    <p class="subtitle">Master Healthcare AI Analytics</p>
                    <p class="description">52 Weeks • 6 Phases • 365 Days of Learning</p>
                </div>
                <div class="feature-badges">
                    <span class="badge">🎯 Interactive</span>
                    <span class="badge">😂 Fun</span>
                    <span class="badge">🚀 Career-Ready</span>
                </div>
                <button id="start-btn" class="btn btn-primary btn-large">
                    <span>Begin Your Journey</span>
                    <span class="btn-icon">→</span>
                </button>
            </div>
        </div>
    `;

    document.getElementById('start-btn').addEventListener('click', () => {
        renderRoadmap();
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
                <button onclick="resetProgress()" class="btn btn-secondary" style="font-size: 0.8rem;">Reset Progress</button>
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
    currentLessonPage = 0; // Reset to start
    renderLesson(lessonId, dayId);
}

let currentLessonPage = 0;
let currentLessonId = null;

function renderLesson(lessonId, dayId) {
    const lesson = window.modules.find(m => m.id === lessonId);
    if (!lesson) {
        alert("Error: Lesson not found!");
        return;
    }

    currentLessonId = lessonId;
    const page = lesson.pages[currentLessonPage];
    const totalPages = lesson.pages.length;
    const progress = ((currentLessonPage + 1) / totalPages) * 100;
    const isInteractive = page.type === 'interactive';

    let contentHtml = '';
    if (isInteractive) {
        // Keep existing interactive layout
        contentHtml = `
            <div class="split-layout">
                <div class="split-left">
                    <h2 class="lesson-title" style="color: var(--color-accent);">${page.title}</h2>
                    <div class="lesson-body">${page.content}</div>
                    <p style="margin-top: 1rem; font-weight: bold;">👉 Action: Select the correct row on the right!</p>
                </div>
                <div class="split-right">
                    ${renderInteractiveTask(page, dayId)}
                </div>
            </div>
        `;
    } else {
        // NEW: Split-view for regular lessons with images and exercises
        const hasExercise = (currentLessonPage + 1) % 3 === 0; // Every 3rd page
        const imageKey = currentLessonPage % 3; // Cycle through images
        const images = window.enhancedContent ? window.enhancedContent.images : {};
        const imageOptions = Object.values(images);
        const selectedImage = imageOptions[imageKey % imageOptions.length] || imageOptions[0];

        contentHtml = `
            <div class="lesson-split-view">
                <div class="split-left">
                    <h2 class="lesson-title">${page.title}</h2>
                    <div class="lesson-body">${page.content}</div>
                </div>
                <div class="split-right">
                    <!-- Visual Panel -->
                    <div class="visual-panel">
                        <h3>📊 Visual Guide</h3>
                        ${selectedImage ? `<img src="${selectedImage}" alt="Educational Diagram" onerror="this.style.display='none'">` : '<p>Visual coming soon!</p>'}
                    </div>
                    
                    <!-- Exercise Panel (every 3rd page) -->
                    ${hasExercise && window.generateExerciseHTML ? window.generateExerciseHTML('cellReference') : ''}
                </div>
            </div>
        `;
    }

    app.innerHTML = `
        <div class="lesson-container" style="${isInteractive ? 'max-width: 1400px;' : 'max-width: 1400px;'}">
            <div class="lesson-header">
                <button onclick="renderWeekView('${getWeekIdForDay(dayId)}')" class="btn btn-secondary">📅 Exit</button>
                <div class="progress-bar-container">
                    <div class="progress-bar" style="width: ${progress}%"></div>
                </div>
                <span class="page-counter">Page ${currentLessonPage + 1} / ${totalPages}</span>
            </div>

            <div class="lesson-content fade-in">
                ${contentHtml}
            </div>

            <div class="lesson-footer">
                <button onclick="prevPage('${dayId}')" class="btn btn-secondary" ${currentLessonPage === 0 ? 'disabled' : ''}>← Previous</button>
                <button onclick="nextPage('${dayId}')" class="btn btn-primary" ${currentLessonPage === totalPages - 1 ? 'disabled' : ''}>Next →</button>
            </div>
        </div>
    `;

    if (isInteractive) {
        attachLessonListeners(page, dayId);
    }
}

function renderInteractiveTask(page, dayId) {
    return `
        <div class="interactive-area">
            <h3 style="text-align: center; margin-bottom: 1rem;">The Data Grid 🕹️</h3>
            ${renderTable(page.data)}
            <div id="feedback" class="feedback-box" style="margin-top: 1rem;">
                Waiting for your move...
            </div>
        </div>
    `;
}

function nextPage(dayId) {
    const lesson = window.modules.find(m => m.id === currentLessonId);
    if (currentLessonPage < lesson.pages.length - 1) {
        currentLessonPage++;
        GAMIFICATION.addXP(10); // Award XP for reading
        renderLesson(currentLessonId, dayId);
    }
}

function prevPage(dayId) {
    if (currentLessonPage > 0) {
        currentLessonPage--;
        renderLesson(currentLessonId, dayId);
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

                    // Gamification Rewards
                    GAMIFICATION.addXP(50);
                    GAMIFICATION.triggerConfetti(); // Use the one in gamification.js

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
        localStorage.removeItem('datavitals-progress');
        renderRoadmap();
    }
}



// Init
generateModules();
showSplashScreen();
