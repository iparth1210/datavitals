
// 1-Click Maximize Learning Objective Workspace Mode
window.toggleWorkspaceZenMode = () => {
    document.body.classList.toggle('zen-mode-active');
    const isZen = document.body.classList.contains('zen-mode-active');
    triggerHaptic('medium');
    
    // Update button text if element exists
    const btn = document.getElementById('zen-max-btn');
    if (btn) {
        btn.innerHTML = isZen ? '<span>↙</span> Exit Full Workspace' : '<span>🖥️</span> Maximize Workspace';
    }
};
// --- NEURAL CURSOR AURA ---
const cursorAura = document.getElementById('cursor-aura');
const cursorTrail = document.getElementById('cursor-trail');
let trailPoints = [];

document.addEventListener('mousemove', (e) => {
    const { clientX: x, clientY: y } = e;
    cursorAura.style.transform = `translate(${x - 10}px, ${y - 10}px)`;

    trailPoints.push({ x, y });
    if (trailPoints.length > 20) trailPoints.shift();

    const d = trailPoints.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x} ${p.y}`).join(' ');
    cursorTrail.setAttribute('d', d);
});

// --- 3D PERSPECTIVE PHYSICS ---
function applyMagneticTilt(card) {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;

        card.style.transform = `perspective(1000px) rotateY(${x / 10}deg) rotateX(${y / -10}deg) scale(1.02)`;
        card.style.zIndex = "100";
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = `perspective(1000px) rotateY(0deg) rotateX(0deg) scale(1)`;
        card.style.zIndex = "1";
    });
}

// --- CRITICAL BOOT BRIDGE ---
window.bootApplication = () => {
    console.log("[Neural_Link]: System Ready. Initializing Direct Lesson Boot...");
    try {
        const app = document.getElementById('app');
        if (!app) return;

        // Ensure UI stays clean
        document.body.classList.add('authorized');

        // Remove any lingering overlays
        const narrative = document.getElementById('quantum-narrative-overlay');
        if (narrative) narrative.remove();
        const login = document.getElementById('quantum-login-terminal');
        if (login) login.remove();
        const legacySplash = document.getElementById('splash-screen');
        if (legacySplash) legacySplash.remove();
        const welcome = document.getElementById('welcome-portal-overlay');
        if (welcome) welcome.remove();
        const cmdOverlay = document.getElementById('cmd-palette-overlay');
        if (cmdOverlay) {
            cmdOverlay.classList.add('hidden');
            cmdOverlay.style.setProperty('display', 'none', 'important');
        }

        renderSidebarCurriculum();
        initCommandPalette();
        
        // DIRECT LESSON BOOT (Week 1 Day 1)
        handleSidebarClick('week-1', 'week-1-d1', 'lesson-w1-d1', null);
        console.log("[Neural_Link]: Direct Lesson Boot Complete.");

        // Smart Boot Aura
        setTimeout(() => {
            const level = window.Gamification ? window.Gamification.state.level : 1;
            const xp = window.Gamification ? window.Gamification.state.xp : 0;
            const msgs = [
                `Welcome back, Architect. You are currently Level ${level} with ${xp} XP. Systems are optimal.`,
                `Neural link established. Your current cognitive load is Level ${level}.`,
                `Good to see you again. The data streams have been waiting.`
            ];
            const botMsg = msgs[Math.floor(Math.random() * msgs.length)];
            const chatBox = document.getElementById('chat-box');
            if (chatBox) {
                const msgEl = document.createElement('div');
                msgEl.className = 'chat-message bot';
                msgEl.style.cssText = 'color: var(--accent-cyan); margin-bottom: 16px; font-family: "Space Grotesk"; background: rgba(6,182,212,0.1); padding: 12px; border-radius: 8px; border-left: 2px solid var(--accent-cyan); font-size: 0.85rem;';
                msgEl.innerText = botMsg;
                chatBox.appendChild(msgEl);
            }
        }, 2000);

        // Staggered HUD Reveal
        setTimeout(() => initAIObserver(), 1000);

        // Direct Clean Startup: NO intrusive auto-tour on boot
        // Tour is only available if manually requested via help/settings
    } catch (renderError) {
        console.error("[Neural_Link]: Critical Render Error:", renderError);
    }
};


// --- ZEN FOCUS MODE (Cmd+K) ---
let isFocusMode = false;
document.addEventListener('keydown', (e) => {
    if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        toggleFocusMode();
    }
    // SUMMON AURA (Hotkey: A)
    if (e.key.toLowerCase() === 'a' && !e.ctrlKey && !e.metaKey && document.activeElement.tagName !== 'INPUT') {
        summonAura();
    }
});

function summonAura() {
    console.log("[Neural_Link]: Summoning Aura AI...");
    triggerHaptic('medium');
    document.body.classList.add('portal-transition');
    setTimeout(() => {
        window.location.href = '../aura_nexus.html';
    }, 500);
}

function toggleFocusMode() {
    isFocusMode = !isFocusMode;
    document.body.classList.toggle('zen-focus', isFocusMode);
    console.log(`[Neural_Link]: Focus Mode ${isFocusMode ? 'Engaged' : 'Disengaged'}`);
}

// --- SIDEBAR TOGGLE ---
window.toggleSidebar = () => {
    const grid = document.querySelector('.bento-grid');
    if(grid) {
        grid.classList.toggle('sidebar-minimized');
        const btn = document.getElementById('toggle-sidebar-btn');
        if (btn) {
            btn.innerHTML = grid.classList.contains('sidebar-minimized') ? '▷' : '◁';
        }
        triggerHaptic('light');
    }
};

// --- AI OVERLAY TOGGLE ---
window.toggleAuraSidebar = () => {
    const grid = document.querySelector('.bento-grid');
    if(grid) {
        grid.classList.toggle('aura-visible');
        triggerHaptic('light');
    }
};

window.toggleAuraView = (view) => {
    const chatTab = document.getElementById('tab-aura-chat');
    const notesTab = document.getElementById('tab-aura-notes');
    const chatView = document.getElementById('aura-chat-view');
    const notesView = document.getElementById('aura-notes-view');

    if (!chatTab || !notesTab || !chatView || !notesView) return;

    triggerHaptic('light');

    if (view === 'chat') {
        chatTab.style.background = 'rgba(255,255,255,0.1)';
        chatTab.style.color = 'white';
        notesTab.style.background = 'transparent';
        notesTab.style.color = 'var(--text-muted)';
        
        chatView.classList.remove('hidden');
        notesView.classList.add('hidden');
    } else {
        notesTab.style.background = 'rgba(255,255,255,0.1)';
        notesTab.style.color = 'white';
        chatTab.style.background = 'transparent';
        chatTab.style.color = 'var(--text-muted)';
        
        notesView.classList.remove('hidden');
        chatView.classList.add('hidden');
    }
};

// --- NEURAL JOURNAL LOGIC ---
let journalSaveTimeout = null;
window.currentJournalDayId = null;

function initNeuralJournal() {
    const journal = document.getElementById('neural-journal');
    if (!journal) return;

    journal.addEventListener('input', () => {
        const status = document.getElementById('journal-save-status');
        if (status) {
            status.innerText = 'SAVING...';
            status.style.color = 'var(--accent-pink)';
        }

        clearTimeout(journalSaveTimeout);
        journalSaveTimeout = setTimeout(() => {
            if (window.currentJournalDayId) {
                const notesDict = window.StorageHub ? window.StorageHub.load('datavitals_journal', {}) : {};
                notesDict[window.currentJournalDayId] = journal.value;
                if (window.StorageHub) window.StorageHub.save('datavitals_journal', notesDict);
                
                if (status) {
                    status.innerText = 'SAVED';
                    status.style.color = 'var(--success)';
                }
            }
        }, 1000);
    });
}

// Initialize journal on boot
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(initNeuralJournal, 100);
});

// --- TERMINAL TOGGLE ---
window.toggleTerminal = () => {
    const terminal = document.getElementById('terminal-modal');
    if(terminal) {
        terminal.classList.toggle('hidden');
        triggerHaptic('medium');
    } else {
        alert("Neural Command Terminal is compiling...");
    }
};

// --- LOGOUT / RESET ---
window.handleLogout = () => {
    triggerHaptic('heavy');
    if(confirm("Are you sure you want to sever the Neural Link and log out?")) {
        localStorage.removeItem('nn_link_established');
        location.reload();
    }
};

// --- AI OBSERVER HUD ---
function initAIObserver() {
    const observer = document.getElementById('ai-observer-core');
    const statusText = document.querySelector('.ai-status span');
    if (!observer) return;

    observer.style.cursor = 'pointer';
    observer.onclick = () => summonAura();

    let time = 0;
    function animate() {
        time += 0.05;
        const scale = 1 + Math.sin(time) * 0.1;
        const glow = 15 + Math.sin(time) * 5;
        observer.style.transform = `scale(${scale})`;
        observer.style.boxShadow = `0 0 ${glow}px var(--accent-cyan)`;
        requestAnimationFrame(animate);
    }
    animate();

    // Neural Diagnostics Feed
    const diagnostics = [
        "KERNEL: STABLE", "UPLINK: ACTIVE", "LATENCY: 12ms",
        "BIO_SYNC: 100%", "PACKET_LOSS: 0%", "AURA_ENGINE: NOMINAL"
    ];
        setInterval(() => {
        if (statusText) {
            const diag = diagnostics[Math.floor(Math.random() * diagnostics.length)];
            statusText.innerText = `AURA_OS v7.4 // ${diag}`;
        }
    }, 4000);
}

window.addEventListener('DOMContentLoaded', () => {
    initAIObserver();
});

// --- RENDER FUNCTIONS ---

// [Duplicates Removed]



// --- NEURAL COMMAND BAR LOGIC ---
function handleCommand(event) {
    if (event.key === 'Enter') {
        const input = document.getElementById('neural-command-input');
        if (!input) return;
        const cmd = input.value.toLowerCase().trim();
        input.value = '';

        console.log(`[Neural_Kernel]: Executing Command: ${cmd}`);
        triggerHaptic('light');

        if (cmd === 'focus') {
            toggleFocusMode();
        } else if (cmd.startsWith('filter')) {
            const query = cmd.replace('filter', '').trim();
            filterModules(query);
        } else if (cmd.startsWith('open')) {
            const module = cmd.replace('open', '').trim();
            if (module === 'zenith') {
                showNotification("INTER-PROJECT WARP: INITIATING"); // Assuming showNotification is defined elsewhere
                setTimeout(() => window.location.href = '../fullstack-zenith/index.html', 1500);
            } else {
                openModule(module);
            }
        } else if (cmd === 'aura status' || cmd === 'status') {
            addMessage("System Status: All systems nominal. All neural links stable.", "bot");
        } else if (cmd === 'reset') {
            resetProgress();
        } else if (cmd === 'sys diagnostics') {
            document.body.classList.toggle('show-diagnostics');
            addMessage("Kernel Diagnostics overlay toggled.", "bot");
        } else {
            console.warn(`[Neural_Kernel]: Command '${cmd}' not recognized.`);
            addMessage(`Command '${cmd}' unrecognized. Access Denied.`, "bot");
        }
    }
}

function executeOpenCommand(query) {
    const modules = window.roadmap;
    const foundModule = modules.find(m => m.title.toLowerCase().includes(query));
    if (foundModule) {
        renderWeekView(foundModule.id);
        triggerNeuralSurge();
    } else {
        addMessage(`Module matching '${query}' not found.`, "bot");
    }
}

window.filterModules = (query) => {
    query = query.toLowerCase().trim();
    const groups = document.querySelectorAll('.sidebar-module-group');
    groups.forEach(group => {
        const text = group.innerText.toLowerCase();
        if (text.includes(query) || query === '') {
            group.style.display = 'block';
        } else {
            group.style.display = 'none';
        }
    });
};

// --- AUDIO HAPTIC ENGINE ---
const AudioEngine = {
    ctx: null,
    init() {
        if (!this.ctx) {
            this.ctx = new (window.AudioContext || window.webkitAudioContext)();
        }
        if (this.ctx.state === 'suspended') {
            this.ctx.resume();
        }
    },
    playClick(type = 'light') {
        this.init();
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        
        const now = this.ctx.currentTime;
        if (type === 'light') {
            osc.type = 'sine';
            osc.frequency.setValueAtTime(800, now);
            osc.frequency.exponentialRampToValueAtTime(300, now + 0.02);
            gain.gain.setValueAtTime(0.05, now);
            gain.gain.exponentialRampToValueAtTime(0.001, now + 0.02);
            osc.start(now);
            osc.stop(now + 0.02);
        } else if (type === 'medium') {
            osc.type = 'sine';
            osc.frequency.setValueAtTime(600, now);
            osc.frequency.exponentialRampToValueAtTime(150, now + 0.05);
            gain.gain.setValueAtTime(0.1, now);
            gain.gain.exponentialRampToValueAtTime(0.001, now + 0.05);
            osc.start(now);
            osc.stop(now + 0.05);
        } else if (type === 'heavy') {
            osc.type = 'square';
            osc.frequency.setValueAtTime(150, now);
            osc.frequency.exponentialRampToValueAtTime(40, now + 0.1);
            gain.gain.setValueAtTime(0.15, now);
            gain.gain.exponentialRampToValueAtTime(0.001, now + 0.1);
            osc.start(now);
            osc.stop(now + 0.1);
        }
    },
    playSuccessChime() {
        try {
            this.init();
            const now = this.ctx.currentTime;
            const notes = [523.25, 659.25, 783.99, 1046.50];
            notes.forEach((freq, idx) => {
                const osc = this.ctx.createOscillator();
                const gain = this.ctx.createGain();
                osc.type = 'sine';
                osc.frequency.setValueAtTime(freq, now + idx * 0.08);
                gain.gain.setValueAtTime(0.08, now + idx * 0.08);
                gain.gain.exponentialRampToValueAtTime(0.0001, now + idx * 0.08 + 0.3);
                osc.connect(gain);
                gain.connect(this.ctx.destination);
                osc.start(now + idx * 0.08);
                osc.stop(now + idx * 0.08 + 0.35);
            });
        } catch(e) {}
    },
    playErrorTone() {
        try {
            this.init();
            const now = this.ctx.currentTime;
            const osc = this.ctx.createOscillator();
            const gain = this.ctx.createGain();
            osc.type = 'sawtooth';
            osc.frequency.setValueAtTime(220, now);
            osc.frequency.linearRampToValueAtTime(140, now + 0.18);
            gain.gain.setValueAtTime(0.08, now);
            gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.2);
            osc.connect(gain);
            gain.connect(this.ctx.destination);
            osc.start(now);
            osc.stop(now + 0.22);
        } catch(e) {}
    }
};

// --- HAPTIC INTERFACE ---
function triggerHaptic(type = 'light') {
    // UI Feedback
    document.body.classList.add('haptic-pulse');
    setTimeout(() => document.body.classList.remove('haptic-pulse'), 200);

    // Subtle UI Audio
    try { AudioEngine.playClick(type); } catch(e) {}

    // Browser Vibration API
    if (window.navigator && window.navigator.vibrate) {
        if (type === 'light') window.navigator.vibrate(10);
        else if (type === 'medium') window.navigator.vibrate(50);
        else window.navigator.vibrate([50, 30, 50]);
    }
}

// --- SPOTLIGHT TRACKING ---
document.addEventListener('mousemove', (e) => {
    document.documentElement.style.setProperty('--mouse-x', `${e.clientX}px`);
    document.documentElement.style.setProperty('--mouse-y', `${e.clientY}px`);
});


// --- RENDER FUNCTIONS ---

/* Replaced renderRoadmap with renderSidebarCurriculum to load items on the left */
function renderSidebarCurriculum() {
    const sidebar = document.getElementById('sidebar-curriculum');
    if(!sidebar) return;
    
    const unlocked = loadProgress();
    
    sidebar.innerHTML = `
        <div style="font-family: 'JetBrains Mono'; font-size: 0.75rem; color: var(--text-muted); margin-bottom: 12px; letter-spacing: 1px;">// CURRICULUM_MODULES</div>
        ${window.roadmap.map((week, index) => {
            const isAvailable = true; // Unlocked for full access
            const weekNum = index + 1;
            
            return `
            <div class="sidebar-module-group" style="margin-bottom: 8px;">
                <div class="sidebar-module-item ${isAvailable ? '' : 'locked'}" id="sidebar-mod-${week.id}" style="opacity: ${isAvailable ? 1 : 0.5}" onclick="${isAvailable ? "toggleAccordion('" + week.id + "', event)" : ''}">
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 4px;">
                        <span class="module-subtitle-text" style="font-family: 'JetBrains Mono'; color: var(--accent-cyan); font-size: 0.7rem;">MODULE_${weekNum.toString().padStart(2, '0')}</span>
                        <span id="accordion-icon-${week.id}" style="transition: transform 0.3s;">${isAvailable ? '▼' : '🔒'}</span>
                    </div>
                    <div class="module-title-text" style="font-family: 'Space Grotesk'; font-weight: 700; color: white; font-size: 0.95rem; text-overflow: ellipsis; white-space: nowrap; overflow: hidden;">${week.title}</div>
                </div>
                <div class="sidebar-days-container" id="days-${week.id}">
                    ${week.days.map((day, dayIndex) => {
                        const isDayAvail = true; // Unlocked for full access
                        return `<div class="sidebar-day-item ${isDayAvail ? '' : 'locked-day'}" onclick="${isDayAvail ? "handleSidebarClick('" + week.id + "', '" + day.id + "', '" + day.lessonId + "', event)" : ''}">
                                    DAY_0${dayIndex+1}: ${day.title}
                                </div>`;
                    }).join('')}
                </div>
            </div>
            `;
        }).join('')}
    `;
    
    if (window.updateGamificationUI) window.updateGamificationUI();
}

window.toggleAccordion = (weekId, e) => {
    // If sidebar is minimized, touching an accordion expands the sidebar
    const grid = document.querySelector('.bento-grid');
    if (grid && grid.classList.contains('sidebar-minimized')) {
        window.toggleSidebar();
    }
    
    const container = document.getElementById(`days-${weekId}`);
    const icon = document.getElementById(`accordion-icon-${weekId}`);
    
    // Close other open accordions optionally to keep view clean
    document.querySelectorAll('.sidebar-days-container.expanded').forEach(c => {
        if (c.id !== `days-${weekId}`) {
            c.classList.remove('expanded');
            const parentId = c.id.replace('days-', '');
            const otherIcon = document.getElementById(`accordion-icon-${parentId}`);
            if(otherIcon) otherIcon.style.transform = 'rotate(0deg)';
        }
    });

    if (container) {
        container.classList.toggle('expanded');
        if (icon) {
            icon.style.transform = container.classList.contains('expanded') ? 'rotate(-180deg)' : 'rotate(0deg)';
        }
    }
};

function handleSidebarClick(weekId, dayId, lessonId, e) {
    window.activeCurrentDayId = dayId;
    if(e) e.stopPropagation();

    const sidebarItems = document.querySelectorAll('.sidebar-module-item');
    sidebarItems.forEach(item => item.classList.remove('active-module'));
    document.querySelectorAll('.sidebar-day-item').forEach(item => item.classList.remove('active-day'));
    
    // Parent active state
    const parentWeek = document.getElementById(`sidebar-mod-${weekId}`);
    if (parentWeek) parentWeek.classList.add('active-module');
    
    // Expand accordion if not expanded
    const container = document.getElementById(`days-${weekId}`);
    const icon = document.getElementById(`accordion-icon-${weekId}`);
    if (container && !container.classList.contains('expanded')) {
        container.classList.add('expanded');
        if (icon) icon.style.transform = 'rotate(-180deg)';
    }

    // Child active state
    // We can find the specific day item by its onclick attribute or by adding data-day-id earlier,
    // but since we render days with day.id, let's search for the onclick string matching the dayId.
    const allDays = document.querySelectorAll('.sidebar-day-item');
    allDays.forEach(item => {
        if(item.getAttribute('onclick') && item.getAttribute('onclick').includes(`'${dayId}'`)) {
            item.classList.add('active-day');
        }
    });

    renderLesson(lessonId, dayId);
    if (window.innerWidth <= 768 && window.toggleMobileCurriculumDrawer) {
        window.toggleMobileCurriculumDrawer(false);
    }
}

function loadDashboardCore() {
    const unlocked = loadProgress();
    // Very simple fallback: just load week 1 day 1 initially.
    handleSidebarClick(window.roadmap[0].id, window.roadmap[0].days[0].id, window.roadmap[0].days[0].lessonId);
    
    setTimeout(() => {
        const firstWeek = window.roadmap[0].id;
        const container = document.getElementById(`days-${firstWeek}`);
        const icon = document.getElementById(`accordion-icon-${firstWeek}`);
        if(container) container.classList.add('expanded');
        if(icon) icon.style.transform = 'rotate(-180deg)';
        
        // Highlight first day
        const firstDayElem = document.querySelector('.sidebar-day-item');
        if(firstDayElem) firstDayElem.classList.add('active-day');
    }, 100);
}

// Keep renderRoadmap as an alias so anything broken calling it just resets the sidebar and core.
function renderRoadmap() {
    renderSidebarCurriculum();
    loadDashboardCore();
}

function renderWeekView(weekId) {
    const week = window.roadmap.find(w => w.id === weekId);
    if (!week) return;

    const app = document.getElementById('app');
    if (!app) return;
    app.innerHTML = `
        <div class="roadmap-container mission-mission-control" style="padding-bottom: 60px; max-width: 1000px; margin: 0 auto;">
            <div class="lesson-header-row" style="display: flex; align-items: center; margin-bottom: 40px; gap: 24px;">
                <button onclick="renderRoadmap()" class="btn-neural" style="font-size: 0.8rem; padding: 10px 20px; border-radius: 8px;">← ESC_TO_ROADMAP</button>
                <div style="flex: 1;">
                    <h2 class="text-gradient" style="font-family: 'Space Grotesk'; font-size: 2.2rem; margin: 0; font-weight: 700;">${week.title}</h2>
                    <span style="font-family: 'JetBrains Mono'; font-size: 0.85rem; color: var(--accent-cyan); letter-spacing: 1px;">// CURRICULUM_PATHWAY</span>
                </div>
            </div>
            
            <div class="timeline-container" style="display: flex; flex-direction: column; gap: 16px; position: relative; padding-left: 20px;">
                <!-- Vertical connecting line -->
                <div style="position: absolute; left: 34px; top: 20px; bottom: 20px; width: 2px; background: rgba(255,255,255,0.05); z-index: 0;"></div>

                ${week.days.map((day, index) => {
        const isUnlocked = unlocked[day.id];
        const icons = ['💻', '💿', '📂', '☁️', '📊', '🔒', '✅'];
        const dayIcon = icons[index % icons.length];

        return `
                    <div class="timeline-node glass-refractive ${isUnlocked ? 'unlocked' : 'locked'}" 
                         style="transition: all 0.3s var(--spring-ease); transform: translateX(0); padding: 20px 24px; border-radius: 12px; display: flex; align-items: center; gap: 24px; cursor: pointer; z-index: 1; background: ${isUnlocked ? 'rgba(10,10,10,0.8)' : 'rgba(5,5,5,0.4)'}; border: 1px solid ${isUnlocked ? 'rgba(255,255,255,0.1)' : 'rgba(255,255,255,0.02)'};"
                         onmouseover="if(${isUnlocked}) { this.style.transform='translateX(8px)'; this.style.borderColor='rgba(6,182,212,0.4)'; }"
                         onmouseout="if(${isUnlocked}) { this.style.transform='translateX(0)'; this.style.borderColor='rgba(255,255,255,0.1)'; }"
                         onclick="handleDayClick('${day.id}', '${day.lessonId}')">
                         
                        <!-- Node Marker -->
                        <div class="node-marker" style="width: 32px; height: 32px; border-radius: 50%; background: ${isUnlocked ? 'var(--bg-surface)' : 'rgba(0,0,0,0.5)'}; border: 2px solid ${isUnlocked ? 'var(--accent-cyan)' : 'rgba(255,255,255,0.1)'}; display: flex; align-items: center; justify-content: center; z-index: 2; flex-shrink: 0; box-shadow: ${isUnlocked ? '0 0 15px rgba(6,182,212,0.4)' : 'none'};">
                            <span style="font-size: 0.8rem;">${isUnlocked ? '⚡' : '🔒'}</span>
                        </div>

                        <!-- Content -->
                        <div style="flex: 1; display: flex; justify-content: space-between; align-items: center;">
                            <div>
                                <div style="font-family: 'JetBrains Mono'; font-size: 0.7rem; color: var(--accent-cyan); letter-spacing: 2px; margin-bottom: 4px; opacity: 0.8;">DAY_0${index + 1} // ${day.id}</div>
                                <h3 style="font-family: 'Plus Jakarta Sans'; font-weight: 600; font-size: 1.15rem; color: ${isUnlocked ? 'white' : 'var(--text-muted)'}; margin: 0;">${day.title}</h3>
                            </div>
                            
                            <!-- Status -->
                            <div style="display: flex; align-items: center; gap: 16px;">
                                ${!isUnlocked ? '<span style="color: var(--text-muted); font-size: 0.8rem; font-family: JetBrains Mono;">[LOCKED]</span>' : '<span style="color: var(--success); font-family: JetBrains Mono; font-size: 0.8rem;">[ENTER_NODE] ➔</span>'}
                            </div>
                        </div>
                    </div>
                `}).join('')}
            </div>
        </div>
    `;
}

function handleDayClick(dayId, lessonId) {
    // Unlocking everything for the demo/testing phase
    const weekId = getWeekIdForDay(dayId);
    handleSidebarClick(weekId, dayId, lessonId, null);
}

// --- COMMAND PALETTE (Ctrl+K) & GLOBAL KEYBINDS ---
function initCommandPalette() {
    document.addEventListener('keydown', (e) => {
        // Cmd/Ctrl + K (Palette)
        if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
            e.preventDefault();
            toggleCommandPalette();
        }
        // Cmd/Ctrl + B (Sidebar)
        if ((e.metaKey || e.ctrlKey) && e.key === 'b') {
            e.preventDefault();
            window.toggleSidebar();
        }
        // Cmd/Ctrl + J (Terminal)
        if ((e.metaKey || e.ctrlKey) && e.key === 'j') {
            e.preventDefault();
            window.toggleTerminal();
        }
        // Cmd/Ctrl + Shift + F (Zen Mode)
        if ((e.metaKey || e.ctrlKey) && e.shiftKey && e.key.toLowerCase() === 'f') {
            e.preventDefault();
            window.toggleZenMode();
        }
        // ? (Keyboard Shortcuts Modal)
        if (e.key === '?' && !['INPUT', 'TEXTAREA'].includes(e.target.tagName)) {
            e.preventDefault();
            window.toggleShortcutsModal();
        }
        // Escape to close palettes/modals
        if (e.key === 'Escape') {
            const cmdOverlay = document.getElementById('cmd-palette-overlay');
            if (cmdOverlay && !cmdOverlay.classList.contains('hidden')) {
                toggleCommandPalette();
            }
            const shortcutModal = document.getElementById('shortcuts-modal-overlay');
            if (shortcutModal && !shortcutModal.classList.contains('hidden')) {
                window.toggleShortcutsModal();
            }
            const settingsModal = document.getElementById('settings-modal-overlay');
            if (settingsModal && !settingsModal.classList.contains('hidden')) {
                settingsModal.classList.add('hidden');
            }
        }
        // Cmd/Ctrl + , (Settings)
        if ((e.metaKey || e.ctrlKey) && e.key === ',') {
            e.preventDefault();
            window.showSettings();
        }
    });

    const input = document.getElementById('cmd-palette-input');
    if (input) {
        input.addEventListener('input', (e) => {
            renderCommandPaletteResults(e.target.value);
        });
    }
}

// --- ZEN MODE ---
window.toggleZenMode = () => {
    const grid = document.querySelector('.bento-grid');
    if (!grid) return;
    
    const isZen = grid.classList.toggle('zen-mode-active');
    triggerHaptic('heavy');
    
    if (isZen) {
        addMessage("Zen Mode activated. Distractions eliminated.", "bot");
    } else {
        addMessage("Zen Mode deactivated. Workspace restored.", "bot");
    }
};

// --- SHORTCUTS MODAL ---
window.toggleShortcutsModal = () => {
    let overlay = document.getElementById('shortcuts-modal-overlay');
    
    // Create it if it doesn't exist
    if (!overlay) {
        overlay = document.createElement('div');
        overlay.id = 'shortcuts-modal-overlay';
        overlay.className = 'hidden';
        overlay.style.cssText = 'position: fixed; inset: 0; background: rgba(0,0,0,0.8); z-index: 100001; backdrop-filter: blur(15px); display: flex; justify-content: center; align-items: center;';
        
        overlay.innerHTML = `
            <div class="glass-refractive" style="width: 500px; max-width: 90%; border-radius: 16px; padding: 40px; position: relative;">
                <div onclick="window.toggleShortcutsModal()" style="position: absolute; top: 20px; right: 20px; cursor: pointer; color: var(--text-muted); font-size: 1.2rem;">✕</div>
                <h2 style="font-family: 'Space Grotesk'; font-size: 1.8rem; margin-bottom: 8px; color: white;">Keyboard Shortcuts</h2>
                <p style="font-family: 'JetBrains Mono'; color: var(--accent-cyan); font-size: 0.8rem; margin-bottom: 30px;">// NAVIGATE AT THE SPEED OF THOUGHT</p>
                
                <div style="display: grid; gap: 16px; font-family: 'Space Grotesk';">
                    <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 8px;">
                        <span style="color: var(--text-secondary);">Command Palette</span>
                        <span style="background: rgba(255,255,255,0.1); padding: 4px 8px; border-radius: 4px; font-family: 'JetBrains Mono'; font-size: 0.8rem;">Ctrl + K</span>
                    </div>
                    <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 8px;">
                        <span style="color: var(--text-secondary);">Toggle Sidebar</span>
                        <span style="background: rgba(255,255,255,0.1); padding: 4px 8px; border-radius: 4px; font-family: 'JetBrains Mono'; font-size: 0.8rem;">Ctrl + B</span>
                    </div>
                    <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 8px;">
                        <span style="color: var(--text-secondary);">Toggle AI Terminal</span>
                        <span style="background: rgba(255,255,255,0.1); padding: 4px 8px; border-radius: 4px; font-family: 'JetBrains Mono'; font-size: 0.8rem;">Ctrl + J</span>
                    </div>
                    <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 8px;">
                        <span style="color: var(--text-secondary);">Zen Mode (Focus)</span>
                        <span style="background: rgba(255,255,255,0.1); padding: 4px 8px; border-radius: 4px; font-family: 'JetBrains Mono'; font-size: 0.8rem;">Ctrl + Shift + F</span>
                    </div>
                    <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 8px;">
                        <span style="color: var(--text-secondary);">Show Shortcuts</span>
                        <span style="background: rgba(255,255,255,0.1); padding: 4px 8px; border-radius: 4px; font-family: 'JetBrains Mono'; font-size: 0.8rem;">?</span>
                    </div>
                    <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 8px;">
                        <span style="color: var(--text-secondary);">Open Settings</span>
                        <span style="background: rgba(255,255,255,0.1); padding: 4px 8px; border-radius: 4px; font-family: 'JetBrains Mono'; font-size: 0.8rem;">Ctrl + ,</span>
                    </div>
                </div>
            </div>
        `;
        document.body.appendChild(overlay);
    }
    
    if (overlay.classList.contains('hidden')) {
        overlay.classList.remove('hidden');
        triggerHaptic('medium');
    } else {
        overlay.classList.add('hidden');
        triggerHaptic('light');
    }
};

// --- SETTINGS DASHBOARD ---
window.showSettings = () => {
    let overlay = document.getElementById('settings-modal-overlay');
    if (!overlay) {
        overlay = document.createElement('div');
        overlay.id = 'settings-modal-overlay';
        overlay.className = 'hidden';
        overlay.style.cssText = 'position: fixed; inset: 0; background: rgba(0,0,0,0.8); z-index: 100001; backdrop-filter: blur(15px); display: flex; justify-content: center; align-items: center;';
        
        overlay.innerHTML = `
            <div class="glass-refractive" style="width: 500px; max-width: 90%; border-radius: 16px; padding: 40px; position: relative;">
                <div onclick="document.getElementById('settings-modal-overlay').classList.add('hidden')" style="position: absolute; top: 20px; right: 20px; cursor: pointer; color: var(--text-muted); font-size: 1.2rem;">✕</div>
                <h2 style="font-family: 'Space Grotesk'; font-size: 1.8rem; margin-bottom: 8px; color: white;">Architect Control Panel</h2>
                <p style="font-family: 'JetBrains Mono'; color: var(--accent-cyan); font-size: 0.8rem; margin-bottom: 30px;">// SYSTEM_CONFIGURATION</p>
                
                <div style="display: grid; gap: 24px; font-family: 'Space Grotesk';">
                    <!-- Themes -->
                    <div>
                        <h3 style="color: var(--text-secondary); font-size: 0.9rem; margin-bottom: 12px; text-transform: uppercase; letter-spacing: 1px;">UI Theme</h3>
                        <div style="display: flex; gap: 12px;">
                            <button onclick="window.changeTheme('default')" style="flex: 1; padding: 12px; background: #0A0F19; border: 1px solid var(--accent-cyan); color: white; border-radius: 8px; cursor: pointer;">Horizon OS</button>
                            <button onclick="window.changeTheme('zenith')" style="flex: 1; padding: 12px; background: #F4F6F8; border: 1px solid #CBD5E1; color: #0F172A; border-radius: 8px; cursor: pointer;">Zenith White</button>
                            <button onclick="window.changeTheme('blood')" style="flex: 1; padding: 12px; background: #0A0202; border: 1px solid #E11D48; color: #FFEAEA; border-radius: 8px; cursor: pointer;">Blood Moon</button>
                            
                        </div>
                    </div>
                    
                    <!-- Data Export -->
                    <div style="border-top: 1px solid rgba(255,255,255,0.05); padding-top: 24px;">
                        <h3 style="color: var(--text-secondary); font-size: 0.9rem; margin-bottom: 12px; text-transform: uppercase; letter-spacing: 1px;">Data Management</h3>
                        <button onclick="window.exportJournalData()" style="width: 100%; padding: 12px; background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); color: white; border-radius: 8px; cursor: pointer; display: flex; align-items: center; justify-content: center; gap: 8px;">
                            <span style="font-family: 'JetBrains Mono';">↓</span> Export Neural Journal (JSON)
                        </button>
                    </div>

                    <!-- Voice Engine -->
                    <div style="border-top: 1px solid rgba(255,255,255,0.05); padding-top: 24px; display: flex; justify-content: space-between; align-items: center;">
                        <div>
                            <h3 style="color: var(--text-secondary); font-size: 0.9rem; margin-bottom: 4px; text-transform: uppercase; letter-spacing: 1px;">Aura Voice Synthesis</h3>
                            <p style="font-family: 'JetBrains Mono'; color: var(--text-muted); font-size: 0.75rem;">Enable Web Speech API for AI responses.</p>
                        </div>
                        <button id="toggle-voice-btn" onclick="window.toggleVoiceEngine()" style="padding: 8px 16px; background: rgba(6, 182, 212, 0.2); border: 1px solid var(--accent-cyan); color: var(--accent-cyan); border-radius: 8px; cursor: pointer; font-family: 'JetBrains Mono';">ENABLED</button>
                    </div>
                </div>
            </div>
        `;
        document.body.appendChild(overlay);
    }
    
    overlay.classList.remove('hidden');
    triggerHaptic('heavy');
};

window.changeTheme = (theme) => {
    document.body.classList.remove('theme-zenith', 'theme-blood');
    if (theme === 'zenith') document.body.classList.add('theme-zenith');
    if (theme === 'blood') document.body.classList.add('theme-blood');
    triggerHaptic('medium');
    addMessage(`System theme updated to: ${theme.toUpperCase()}`, 'bot');
};

window.exportJournalData = () => {
    const data = window.StorageHub ? window.StorageHub.load('datavitals_journal', {}) : {};
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'datavitals_neural_journal.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    triggerHaptic('heavy');
    addMessage("Journal data exported to your local device.", 'bot');
};

// --- AURA SPEECH & DICTATION ---
window.auraVoiceEnabled = true;
let auraSynthesis = window.speechSynthesis;
let auraVoice = null;

// Wait for voices to load
if (auraSynthesis) {
    auraSynthesis.onvoiceschanged = () => {
        const voices = auraSynthesis.getVoices();
        // Try to find a good female/AI voice
        auraVoice = voices.find(v => v.name.includes('Google UK English Female')) || 
                    voices.find(v => v.name.includes('Samantha')) ||
                    voices.find(v => v.name.includes('Zira')) ||
                    voices[0];
    };
}

window.toggleVoiceEngine = () => {
    window.auraVoiceEnabled = !window.auraVoiceEnabled;
    const btn = document.getElementById('toggle-voice-btn');
    if (btn) {
        if (window.auraVoiceEnabled) {
            btn.innerText = 'ENABLED';
            btn.style.background = 'rgba(6, 182, 212, 0.2)';
            btn.style.color = 'var(--accent-cyan)';
            btn.style.borderColor = 'var(--accent-cyan)';
        } else {
            btn.innerText = 'DISABLED';
            btn.style.background = 'rgba(255, 255, 255, 0.05)';
            btn.style.color = 'var(--text-muted)';
            btn.style.borderColor = 'rgba(255, 255, 255, 0.1)';
            if (auraSynthesis) auraSynthesis.cancel();
        }
    }
    triggerHaptic('light');
};

window.speakAura = (text) => {
    if (!window.auraVoiceEnabled || !auraSynthesis) return;
    
    // Strip HTML tags for speaking
    const temp = document.createElement('div');
    temp.innerHTML = text;
    const cleanText = temp.textContent || temp.innerText || "";
    
    auraSynthesis.cancel(); // Stop any current speech
    const utterance = new SpeechSynthesisUtterance(cleanText);
    if (auraVoice) utterance.voice = auraVoice;
    utterance.pitch = 1.1;
    utterance.rate = 1.05;
    auraSynthesis.speak(utterance);
};

let activeRecognition = null;

window.toggleAuraListening = () => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
        addMessage("Speech Recognition API not supported in your browser.", 'bot');
        return;
    }

    if (activeRecognition) {
        // If already listening, stop it manually
        activeRecognition.stop();
        activeRecognition = null;
        return;
    }

    const micBtn = document.getElementById('aura-mic-btn');
    const inputField = document.getElementById('user-input');

    activeRecognition = new SpeechRecognition();
    activeRecognition.continuous = false;
    activeRecognition.interimResults = true;

    activeRecognition.onstart = () => {
        if (micBtn) {
            micBtn.style.color = 'var(--accent-pink)';
            micBtn.style.animation = 'blink 1s infinite';
        }
        if (inputField) inputField.placeholder = "Listening...";
        triggerHaptic('light');
    };

    activeRecognition.onresult = (event) => {
        let transcript = '';
        for (let i = event.resultIndex; i < event.results.length; ++i) {
            transcript += event.results[i][0].transcript;
        }
        if (inputField) inputField.value = transcript;
    };

    activeRecognition.onerror = (event) => {
        console.error("Speech recognition error", event.error);
        resetMicUI();
        activeRecognition = null;
    };

    activeRecognition.onend = () => {
        resetMicUI();
        if (inputField && inputField.value.trim().length > 0 && activeRecognition !== null) {
            // Auto send after dictation finishes, but only if not manually stopped
            sendMessage();
        }
        activeRecognition = null;
    };

    function resetMicUI() {
        if (micBtn) {
            micBtn.style.color = 'var(--text-muted)';
            micBtn.style.animation = 'none';
        }
        if (inputField) inputField.placeholder = "Query Aura...";
    }

    activeRecognition.start();
};

function toggleCommandPalette() {
    const overlay = document.getElementById('cmd-palette-overlay');
    const input = document.getElementById('cmd-palette-input');
    if (!overlay) return;

    if (overlay.classList.contains('hidden') || overlay.style.display === 'none' || getComputedStyle(overlay).display === 'none') {
        overlay.classList.remove('hidden');
        overlay.style.setProperty('display', 'flex', 'important');
        if (input) {
            input.value = '';
            setTimeout(() => input.focus(), 50);
        }
        renderCommandPaletteResults('');
        triggerHaptic('medium');
    } else {
        overlay.classList.add('hidden');
        overlay.style.setProperty('display', 'none', 'important');
        triggerHaptic('light');
    }
}

function renderCommandPaletteResults(query) {
    const container = document.getElementById('cmd-palette-results');
    if (!container) return;
    
    query = query.toLowerCase().trim();
    let resultsHTML = '';
    
    // Commands
    const commands = [
        { title: 'Toggle Terminal', action: 'window.toggleTerminal()', icon: '💻' },
        { title: 'Toggle AI Overlay', action: 'window.toggleAuraSidebar()', icon: '◨' },
        { title: 'View Progress Dashboard', action: 'window.showMyProgress()', icon: '📈' },
        { title: 'View Data Library', action: 'window.showResources()', icon: '📚' },
        { title: 'Open Settings & Themes', action: 'window.showSettings()', icon: '⚙️' }
    ];

    commands.forEach(cmd => {
        if (cmd.title.toLowerCase().includes(query)) {
            resultsHTML += `
            <div class="palette-item" onclick="${cmd.action}; toggleCommandPalette();" style="padding: 12px 24px; cursor: pointer; display: flex; align-items: center; color: white; border-bottom: 1px solid rgba(255,255,255,0.05); transition: background 0.2s;">
                <span style="margin-right: 16px; font-size: 1.2rem;">${cmd.icon}</span>
                <span style="font-family: 'Space Grotesk';">${cmd.title}</span>
            </div>`;
        }
    });

    // Lessons
    if (window.roadmap) {
        window.roadmap.forEach(week => {
            week.days.forEach((day, index) => {
                if (day.title.toLowerCase().includes(query) || query === '') {
                    resultsHTML += `
                    <div class="palette-item" onclick="handleDayClick('${day.id}', '${day.lessonId}'); toggleCommandPalette();" style="padding: 12px 24px; cursor: pointer; display: flex; align-items: center; color: var(--text-secondary); border-bottom: 1px solid rgba(255,255,255,0.05); transition: background 0.2s;">
                        <span style="margin-right: 16px; font-size: 1.2rem; color: var(--accent-cyan);">→</span>
                        <div style="display: flex; flex-direction: column;">
                            <span style="font-family: 'Space Grotesk'; color: white;">${day.title}</span>
                            <span style="font-family: 'JetBrains Mono'; font-size: 0.7rem; color: var(--accent-cyan);">MODULE_${(window.roadmap.indexOf(week)+1).toString().padStart(2, '0')} // DAY_0${index+1}</span>
                        </div>
                    </div>`;
                }
            });
        });
    }

    container.innerHTML = resultsHTML || `<div style="padding: 24px; text-align: center; color: var(--text-muted); font-family: 'Space Grotesk';">No results found for '${query}'</div>`;

    // Add hover states manually since it's injected
    container.querySelectorAll('.palette-item').forEach(item => {
        item.addEventListener('mouseenter', () => item.style.background = 'rgba(255,255,255,0.05)');
        item.addEventListener('mouseleave', () => item.style.background = 'transparent');
    });
}

// --- HOLOGRAPHIC PROGRESS DASHBOARD ---
window.showMyProgress = () => {
    const app = document.getElementById('app');
    if (!app) return;
    
    const state = window.Gamification ? window.Gamification.state : { level: 1, xp: 0, badges: [] };
    const xpNeeded = state.level * 100;
    const progressPercent = (state.xp / xpNeeded) * 100;

    app.innerHTML = `
        <div class="holographic-dashboard" style="padding: 40px; animation: fadeIn 0.5s;">
            <h2 class="text-gradient" style="font-family: 'Space Grotesk'; font-size: 2.5rem; margin-bottom: 30px;">HOLOGRAPHIC_PROFILE</h2>
            
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 40px;">
                <!-- STAT CORE -->
                <div class="glass-refractive" style="padding: 40px; border-radius: 20px; border: 1px solid rgba(6,182,212,0.3); position: relative; overflow: hidden;">
                    <div style="position: absolute; top: -50px; right: -50px; width: 150px; height: 150px; background: radial-gradient(circle, var(--accent-cyan) 0%, transparent 70%); opacity: 0.1; filter: blur(20px);"></div>
                    <div style="font-family: 'JetBrains Mono'; color: var(--accent-cyan); margin-bottom: 10px;">CURRENT_STATUS</div>
                    <div style="font-size: 4rem; font-family: 'Space Grotesk'; font-weight: 700; color: white; line-height: 1;">LVL ${state.level}</div>
                    
                    <div style="margin-top: 30px;">
                        <div style="display: flex; justify-content: space-between; font-family: 'JetBrains Mono'; font-size: 0.8rem; margin-bottom: 8px;">
                            <span>XP_SYNC</span>
                            <span style="color: var(--accent-cyan);">${state.xp} / ${xpNeeded}</span>
                        </div>
                        <div style="width: 100%; height: 8px; background: rgba(255,255,255,0.1); border-radius: 4px; overflow: hidden;">
                            <div style="width: ${progressPercent}%; height: 100%; background: var(--accent-cyan); box-shadow: 0 0 10px var(--accent-cyan);"></div>
                        </div>
                    </div>
                </div>

                <!-- BADGES -->
                <div class="glass-refractive" style="padding: 40px; border-radius: 20px; border: 1px solid rgba(255,255,255,0.1);">
                    <div style="font-family: 'JetBrains Mono'; color: var(--text-muted); margin-bottom: 20px;">ACHIEVEMENTS_UNLOCKED</div>
                    <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(80px, 1fr)); gap: 16px;">
                        ${state.badges && state.badges.length > 0 
                            ? state.badges.map(b => `<div style="text-align: center; padding: 16px; background: rgba(255,255,255,0.05); border-radius: 12px; border: 1px solid rgba(255,255,255,0.1);"><div style="font-size: 2rem; margin-bottom: 8px;">🏅</div><div style="font-size: 0.6rem; font-family: 'JetBrains Mono';">${b}</div></div>`).join('') 
                            : `<div style="color: var(--text-muted); font-size: 0.8rem; grid-column: 1/-1;">No achievements unlocked yet. Initiate a learning sequence.</div>`}
                    </div>
                </div>
            </div>
        </div>
    `;
    triggerHaptic('medium');
};

// --- DATA LIBRARY ---
window.showResources = () => {
    const app = document.getElementById('app');
    const title = document.getElementById('page-title');
    if (title) title.innerText = "Library Database";

    // Highlight sidebar active state
    document.querySelectorAll('.nav-item').forEach(el => el.classList.remove('active'));
    const navItems = document.querySelectorAll('.nav-item');
    if (navItems.length > 5) navItems[5].classList.add('active');

    if (!window.libraryResources) {
        app.innerHTML = '<p style="padding:20px;">Library data loading...</p>';
        return;
    }

    // Main container
    let html = `
        <div class="library-container" style="max-width: 1000px; margin: 0 auto; padding-bottom: 50px; animation: fadeIn 0.5s;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 30px; border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 15px;">
                <div>
                    <h2 class="text-gradient" style="font-family: 'Space Grotesk'; font-size: 2.5rem; margin: 0;">DATA_LIBRARY</h2>
                    <div style="font-family: 'JetBrains Mono'; color: var(--text-muted); font-size: 0.8rem; margin-top: 5px;">// Essential reference documents and curriculum readings.</div>
                </div>
                <!-- LIBRARY SUB-TABS -->
                <div style="display: flex; background: rgba(0,0,0,0.4); border-radius: 8px; padding: 4px; border: 1px solid rgba(255,255,255,0.05); width: 320px;">
                    <button id="lib-tab-core" onclick="window.toggleLibraryView('core')" style="flex: 1; border: none; text-align: center; padding: 8px; border-radius: 6px; font-family: 'Space Grotesk'; font-size: 0.8rem; cursor: pointer; transition: all 0.2s; background: rgba(255,255,255,0.1); color: white;">Core References</button>
                    <button id="lib-tab-daily" onclick="window.toggleLibraryView('daily')" style="flex: 1; border: none; text-align: center; padding: 8px; border-radius: 6px; font-family: 'Space Grotesk'; font-size: 0.8rem; cursor: pointer; transition: all 0.2s; background: transparent; color: var(--text-muted);">Daily Reading</button>
                </div>
            </div>

            <!-- CORE REFERENCES PANE -->
            <div id="lib-pane-core" style="display: block;">
                <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 24px;">
                    <div class="glass-refractive resource-card" onclick="window.open('https://docs.python.org/3/', '_blank')" style="padding: 28px; border-radius: 20px; cursor: pointer; transition: all 0.3s; border: 1px solid rgba(255,255,255,0.08); background: rgba(10, 15, 25, 0.4); position: relative; overflow: hidden;" onmouseover="this.style.transform='translateY(-6px)'; this.style.borderColor='var(--accent-cyan)'; this.style.boxShadow='0 10px 30px rgba(6,182,212,0.15)'" onmouseout="this.style.transform='translateY(0)'; this.style.borderColor='rgba(255,255,255,0.08)'; this.style.boxShadow='none'">
                        <div style="font-size: 3rem; margin-bottom: 20px;">🐍</div>
                        <h3 style="font-family: 'Space Grotesk'; font-size: 1.3rem; margin-bottom: 8px; color: white;">Python Syntax Matrix</h3>
                        <p style="color: var(--text-muted); font-size: 0.85rem; line-height: 1.5; margin-bottom: 0;">Core syntax, data structures, control flows, and standard library architectures.</p>
                        <span style="position: absolute; bottom: 20px; right: 20px; color: var(--accent-cyan); font-size: 1rem; opacity: 0.5;">↗</span>
                    </div>

                    <div class="glass-refractive resource-card" onclick="window.open('https://www.postgresql.org/docs/', '_blank')" style="padding: 28px; border-radius: 20px; cursor: pointer; transition: all 0.3s; border: 1px solid rgba(255,255,255,0.08); background: rgba(10, 15, 25, 0.4); position: relative; overflow: hidden;" onmouseover="this.style.transform='translateY(-6px)'; this.style.borderColor='var(--accent-pink)'; this.style.boxShadow='0 10px 30px rgba(236,72,153,0.15)'" onmouseout="this.style.transform='translateY(0)'; this.style.borderColor='rgba(255,255,255,0.08)'; this.style.boxShadow='none'">
                        <div style="font-size: 3rem; margin-bottom: 20px;">🗃️</div>
                        <h3 style="font-family: 'Space Grotesk'; font-size: 1.3rem; margin-bottom: 8px; color: white;">SQL Query Protocols</h3>
                        <p style="color: var(--text-muted); font-size: 0.85rem; line-height: 1.5; margin-bottom: 0;">Relational concepts, joins, complex aggregations, window functions, and CTEs.</p>
                        <span style="position: absolute; bottom: 20px; right: 20px; color: var(--accent-pink); font-size: 1rem; opacity: 0.5;">↗</span>
                    </div>

                    <div class="glass-refractive resource-card" onclick="window.open('https://support.microsoft.com/excel', '_blank')" style="padding: 28px; border-radius: 20px; cursor: pointer; transition: all 0.3s; border: 1px solid rgba(255,255,255,0.08); background: rgba(10, 15, 25, 0.4); position: relative; overflow: hidden;" onmouseover="this.style.transform='translateY(-6px)'; this.style.borderColor='var(--success)'; this.style.boxShadow='0 10px 30px rgba(34,197,94,0.15)'" onmouseout="this.style.transform='translateY(0)'; this.style.borderColor='rgba(255,255,255,0.08)'; this.style.boxShadow='none'">
                        <div style="font-size: 3rem; margin-bottom: 20px;">📊</div>
                        <h3 style="font-family: 'Space Grotesk'; font-size: 1.3rem; margin-bottom: 8px; color: white;">Excel Function Architecture</h3>
                        <p style="color: var(--text-muted); font-size: 0.85rem; line-height: 1.5; margin-bottom: 0;">Logical testing, advanced VLOOKUP, INDEX/MATCH structures, and Pivot Table automation.</p>
                        <span style="position: absolute; bottom: 20px; right: 20px; color: var(--success); font-size: 1rem; opacity: 0.5;">↗</span>
                    </div>

                    <div class="glass-refractive resource-card" onclick="window.open('https://www.khanacademy.org/math/statistics-probability', '_blank')" style="padding: 28px; border-radius: 20px; cursor: pointer; transition: all 0.3s; border: 1px solid rgba(255,255,255,0.08); background: rgba(10, 15, 25, 0.4); position: relative; overflow: hidden;" onmouseover="this.style.transform='translateY(-6px)'; this.style.borderColor='var(--accent-violet)'; this.style.boxShadow='0 10px 30px rgba(139,92,246,0.15)'" onmouseout="this.style.transform='translateY(0)'; this.style.borderColor='rgba(255,255,255,0.08)'; this.style.boxShadow='none'">
                        <div style="font-size: 3rem; margin-bottom: 20px;">📐</div>
                        <h3 style="font-family: 'Space Grotesk'; font-size: 1.3rem; margin-bottom: 8px; color: white;">Applied Statistics & Math Matrix</h3>
                        <p style="color: var(--text-muted); font-size: 0.85rem; line-height: 1.5; margin-bottom: 0;">Descriptive metrics, Z-Scores, Student's T-Tests, p-values, A/B testing lift & Bayes' Theorem.</p>
                        <span style="position: absolute; bottom: 20px; right: 20px; color: var(--accent-violet); font-size: 1rem; opacity: 0.5;">↗</span>
                    </div>
                </div>
            </div>

            <!-- DAILY READING DATABASE PANE -->
            <div id="lib-pane-daily" style="display: none;">
                <div class="lib-week-grid" style="display: flex; flex-direction: column; gap: 30px;">
    `;

    window.libraryResources.forEach(week => {
        html += `
            <div class="lib-week-block" style="background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.05); border-radius: 16px; padding: 25px;">
                <h2 style="font-size: 1.3rem; font-family: 'Space Grotesk'; color: var(--accent-cyan); border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 10px; margin-top: 0; margin-bottom: 20px; display: flex; align-items: center; justify-content: space-between;">
                    <span>\${week.weekTitle}</span>
                    <span style="font-size: 0.7rem; font-family: 'JetBrains Mono'; color: var(--text-muted); font-weight: normal;">// ACTIVE_RESOURCES</span>
                </h2>
                <div class="lib-days-grid" style="display: grid; gap: 20px;">
        `;

        week.days.forEach(day => {
            html += `
                <div class="lib-day-card" style="background: rgba(0,0,0,0.2); border: 1px solid rgba(255,255,255,0.05); border-radius: 12px; padding: 20px;">
                    <h3 style="font-size: 1rem; font-family: 'Space Grotesk'; color: white; margin-top: 0; margin-bottom: 15px; display:flex; align-items:center; gap:10px;">
                        <span style="opacity:0.6;">📅</span> \${day.dayTitle}
                    </h3>
                    <div class="resources-list" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 12px;">
            `;

            day.resources.forEach(res => {
                let icon = '📄';
                if (res.type === 'book') icon = '📖';
                if (res.type === 'video') icon = '📺';
                if (res.type === 'tool') icon = '🛠️';
                if (res.type === 'course') icon = '🎓';

                html += `
                    <a href="\${res.url}" target="_blank" class="resource-link" style="
                        display: flex; align-items: center; gap: 12px;
                        padding: 12px; background: rgba(255,255,255,0.03);
                        border-radius: 8px; text-decoration: none;
                        color: var(--text-secondary); transition: all 0.2s; border: 1px solid rgba(255,255,255,0.05);">
                        <span style="font-size: 1.2rem;">\${icon}</span>
                        <div style="flex:1;">
                            <div style="font-size: 0.85rem; font-weight: 500; color: white;">\${res.title}</div>
                            <div style="font-size: 0.7rem; color: var(--text-muted); text-transform: uppercase; margin-top: 2px;">\${res.type}</div>
                        </div>
                        <span style="opacity:0.3; transition: all 0.2s;">↗</span>
                    </a>
                `;
            });

            html += `</div></div>`;
        });

        html += `</div></div>`;
    });

    html += `
                </div>
            </div>
        </div>
    `;

    // Add custom helper function to switch panes dynamically
    window.toggleLibraryView = (pane) => {
        const tabCore = document.getElementById('lib-tab-core');
        const tabDaily = document.getElementById('lib-tab-daily');
        const paneCore = document.getElementById('lib-pane-core');
        const paneDaily = document.getElementById('lib-pane-daily');

        if (!tabCore || !tabDaily || !paneCore || !paneDaily) return;

        triggerHaptic('light');

        if (pane === 'core') {
            tabCore.style.background = 'rgba(255,255,255,0.1)';
            tabCore.style.color = 'white';
            tabDaily.style.background = 'transparent';
            tabDaily.style.color = 'var(--text-muted)';
            paneCore.style.display = 'block';
            paneDaily.style.display = 'none';
        } else {
            tabDaily.style.background = 'rgba(255,255,255,0.1)';
            tabDaily.style.color = 'white';
            tabCore.style.background = 'transparent';
            tabCore.style.color = 'var(--text-muted)';
            paneCore.style.display = 'none';
            paneDaily.style.display = 'block';
        }
    };

    // Custom CSS injection
    if (!document.getElementById('library-custom-css')) {
        const style = document.createElement('style');
        style.id = 'library-custom-css';
        style.innerHTML = `
            .resource-link:hover {
                background: rgba(255,255,255,0.08) !important;
                border-color: var(--accent-cyan) !important;
                transform: translateX(4px);
                color: white !important;
            }
            .resource-link:hover span {
                opacity: 1 !important;
                color: var(--accent-cyan);
            }
        `;
        document.head.appendChild(style);
    }

    app.innerHTML = html;
    triggerHaptic('light');
};

// --- LESSON FETCHER & PROCEDURAL GENERATOR ---
function getLessonById(lessonId) {
    // 1. Try to find manually authored content
    const manualLesson = window.modules.find(m => m.id === lessonId);
    if (manualLesson) return manualLesson;

    // 2. Procedural Fallback (The Infinite Zero-to-Pro Engine)
    const match = lessonId.match(/w(\d+)-d(\d+)/);
    if (!match) return null;

    const weekNum = parseInt(match[1]);
    const dayNum = parseInt(match[2]);

    let phase = "Foundation";
    let topic = "Data Science";
    let videoUrl = 'https://www.youtube.com/embed/Vl0H-qTclOg';
    let lessonType = 'data';

    let techContent = "";
    let healthContent = "";
    let bioContent = "";
    let labContent = "";
    let taskInstruction = "";
    let taskTarget = "";
    let docUrl = "https://docs.python.org/3/";
    let starterCode = "";

    // PHASE 1: WEEKS 1-8 (EXCEL & FOUNDATIONS)
    if (weekNum <= 8) {
        phase = "Phase 1: Foundations";
        topic = "Excel & Logical Systems";
        videoUrl = "https://www.youtube.com/embed/Vl0H-qTclOg"; // FreeCodeCamp Excel
        docUrl = "https://support.microsoft.com/excel";
        lessonType = "data";

        techContent = `<strong>Spreadsheet & Logical Foundations (Day ${dayNum}):</strong> Master cell grid references, structured data entry, formatting, and formulas like <code>=SUM()</code>, <code>=AVERAGE()</code>, and <code>=IF()</code>.`;
        healthContent = `<strong>Clinical Operations:</strong> Managing patient admission records, vital sign triage logs, and shift rosters.`;
        bioContent = `<strong>Bio-Telemetry:</strong> Standardizing human baseline measurements (Heart Rate 60-100 bpm, Blood Pressure 120/80 mmHg).`;
        labContent = `<strong>Mission Protocol:</strong> Analyze the triage telemetry table. Locate the patient record flagged with <strong>CRITICAL</strong> status.`;
        taskInstruction = "Locate the patient with 'CRITICAL' status in the telemetry table.";
        taskTarget = "CRITICAL";
        starterCode = `# Excel / Logic Simulation Script
patients = [
    {"id": "P-101", "name": "Sarah Connor", "hr": 72, "status": "STABLE"},
    {"id": "P-102", "name": "James Cole", "hr": 142, "status": "CRITICAL"},
    {"id": "P-103", "name": "Ellen Ripley", "hr": 68, "status": "STABLE"}
]

print("--- PATIENT TELEMETRY AUDIT ---")
for p in patients:
    print(f"ID: {p['id']} | Name: {p['name']:15} | HR: {p['hr']} bpm => Status: {p['status']}")
`;
    }
    // PHASE 2: WEEKS 9-20 (SQL & RELATIONAL ANALYTICS)
    else if (weekNum <= 20) {
        phase = "Phase 2: Relational Analytics";
        topic = "SQL & Data Engineering";
        videoUrl = "https://www.youtube.com/embed/HXV3zeQKqGY"; // FreeCodeCamp SQL
        docUrl = "https://www.postgresql.org/docs/current/";
        lessonType = "data";

        techContent = `<strong>Relational DB & SQL Protocols (Day ${dayNum}):</strong> Querying relational tables using <code>SELECT</code>, <code>WHERE</code>, <code>GROUP BY</code>, <code>HAVING</code>, and multi-table <code>JOIN</code> operations.`;
        healthContent = `<strong>Enterprise EHR Systems:</strong> Querying Epic/Cerner databases for clinical cohort analysis and ICU resource planning.`;
        bioContent = `<strong>Biomarker Indexing:</strong> Structuring blood panel results, genomic markers, and pathology reports across normalized database tables.`;
        labContent = `<strong>Mission Protocol:</strong> Run a query on the patient database table. Identify the record with <strong>Type 2 Diabetes</strong>.`;
        taskInstruction = "Locate the patient record with Diagnosis = 'Type 2 Diabetes'.";
        taskTarget = "Type 2 Diabetes";
        starterCode = `# SQL Query Simulator in Python
import sqlite3

conn = sqlite3.connect(":memory:")
cur = conn.cursor()
cur.execute("CREATE TABLE EHR (id INT, patient TEXT, diagnosis TEXT, triage TEXT)")
cur.execute("INSERT INTO EHR VALUES (101, 'Alex Mercer', 'Hypertension', 'Normal')")
cur.execute("INSERT INTO EHR VALUES (102, 'Dana Scully', 'Type 2 Diabetes', 'Active')")
cur.execute("INSERT INTO EHR VALUES (103, 'Fox Mulder', 'Asthma', 'Normal')")

cur.execute("SELECT patient, diagnosis FROM EHR WHERE diagnosis = 'Type 2 Diabetes'")
for row in cur.fetchall():
    print(f"Query Result -> Patient: {row[0]} | Diagnosis: {row[1]}")
`;
    }
    // PHASE 3: WEEKS 21-32 (PYTHON DATA SCIENCE & PANDAS)
    else if (weekNum <= 32) {
        phase = "Phase 3: Python Data Science";
        topic = "Python Programming & Pandas";
        videoUrl = "https://www.youtube.com/embed/LHBE6Q9XlzI"; // FreeCodeCamp Python
        docUrl = "https://pandas.pydata.org/docs/";
        lessonType = "python";

        techContent = `<strong>Python & Pandas Analytics (Day ${dayNum}):</strong> Ingesting, cleaning, transforming, and visualizing large datasets using Python, Pandas DataFrames, NumPy, and Matplotlib.`;
        healthContent = `<strong>Bioinformatics Pipelines:</strong> Processing raw DNA fasta sequences, RNA-seq gene counts, and clinical trial cohorts.`;
        bioContent = `<strong>Genomic Data Structures:</strong> Manipulating nucleotide sequences (A, C, T, G) and codon reading frames programmatically.`;
        labContent = `<strong>Mission Protocol:</strong> Execute the Python Pandas analysis script in the editor to identify the <strong>MUTATED</strong> gene marker.`;
        taskInstruction = "Find the gene record with Mutation_Status = 'MUTATED'.";
        taskTarget = "MUTATED";
        starterCode = `# Python Data Science & Pandas Analysis
import pandas as pd

gene_data = {
    "Gene_ID": ["BRCA1", "TP53", "EGFR", "KRAS"],
    "Sample": ["S-01", "S-02", "S-03", "S-04"],
    "Expression_Level": [4.2, 18.9, 2.1, 14.5],
    "Mutation_Status": ["NORMAL", "MUTATED", "NORMAL", "NORMAL"]
}

df = pd.DataFrame(gene_data)
print("--- GENOMIC EXPRESSION MATRIX ---")
print(df)

mutated = df[df["Mutation_Status"] == "MUTATED"]
print("\n--- MUTATED GENE LOCATED ---")
print(mutated)
`;
    }
    // PHASE 4: WEEKS 33-52 (MACHINE LEARNING & AI ARCHITECT)
    else {
        phase = "Phase 4: AI & Neural Architect";
        topic = "Machine Learning & Deep Learning";
        videoUrl = "https://www.youtube.com/embed/aircAruvnKk"; // 3Blue1Brown Neural Networks
        docUrl = "https://scikit-learn.org/stable/";
        lessonType = "python";

        techContent = `<strong>Neural Networks & AI Architecture (Day ${dayNum}):</strong> Building supervised regression, classification, deep neural networks, CNNs, Transformers, and GenAI applications.`;
        healthContent = `<strong>Medical AI Diagnostics:</strong> Computer Vision models analyzing X-rays, MRIs, and predictive patient risk models.`;
        bioContent = `<strong>Oncology Deep Learning:</strong> Classifying histological cell structures and predicting therapeutic drug binding affinities.`;
        labContent = `<strong>Mission Protocol:</strong> Execute the Neural Model script to verify the AI model prediction of <strong>HIGH RISK</strong>.`;
        taskInstruction = "Identify the AI prediction output of 'HIGH RISK'.";
        taskTarget = "HIGH RISK";
        starterCode = `# Machine Learning & Neural Network Classifier
import numpy as np

def sigmoid(x):
    return 1 / (1 + np.exp(-x))

# Features: [Age_Norm, Systolic_BP_Norm, Glucose_Norm]
patient_vector = np.array([0.85, 0.92, 0.78])
weights = np.array([1.5, 2.1, 1.2])
bias = -1.8

z = np.dot(patient_vector, weights) + bias
risk_probability = sigmoid(z)

print(f"Neural Activation (z): {z:.4f}")
print(f"Predicted Disease Risk Probability: {risk_probability * 100:.2f}%")

if risk_probability > 0.5:
    print("AI Diagnosis: HIGH RISK DETECTED")
else:
    print("AI Diagnosis: LOW RISK")
`;
    }

    return {
        id: lessonId,
        title: `W${weekNum}-D${dayNum}: ${topic} (Day ${dayNum})`,
        image: 'assets/lesson_matrix.png',
        video: videoUrl,
        type: lessonType,
        code_start: starterCode,
        sources: [
            { title: `${topic} Documentation`, url: docUrl },
            { title: 'DataVitals Master Library', url: '#' }
        ],
        story: `
            <div class="quad-track">
                <div class="track-section tech">
                    <h4>💻 1. Tech Core</h4>
                    <p>${techContent}</p>
                </div>
                <div class="track-section health">
                    <h4>🏥 2. Clinical Base</h4>
                    <p>${healthContent}</p>
                </div>
                <div class="track-section bio">
                    <h4>🧬 3. Bio Sync</h4>
                    <p>${bioContent}</p>
                </div>
                <div class="track-section lab">
                    <h4>🧪 4. Lab Protocol</h4>
                    <p>${labContent}</p>
                </div>
            </div>
        `,
        task: {
            type: 'find-value',
            targetColumn: 'Status',
            condition: (val) => val === taskTarget || val === 'Active' || val === 'Online',
            successMessage: "Analysis Complete. Clinical & Technical Telemetry Verified!",
            errorMessage: taskInstruction
        },
        data: [
            { ID: 101, Item: "Node 1", Status: taskTarget, Zone: "Primary" },
            { ID: 102, Item: "Node 2", Status: "Normal", Zone: "Secondary" },
            { ID: 103, Item: "Node 3", Status: "Online", Zone: "Backup" }
        ]
    };
}

// Global action to launch kernel pre-loaded with current lesson code
window.launchNeuralKernelForLesson = () => {
    const lesson = window.activeLessonContext;
    const modal = document.getElementById('terminal-modal');
    if (modal) {
        modal.classList.remove('hidden');
        triggerHaptic('medium');
        if (window.PythonEngine) {
            PythonEngine.init().then(() => {
                if (PythonEngine.editor && lesson && lesson.code_start) {
                    PythonEngine.editor.setValue(lesson.code_start);
                }
            });
        }
    }
};

function renderLesson(lessonId, dayId) {
    const lesson = getLessonById(lessonId);
    if (!lesson) return;

    window.activeLessonContext = lesson; // AURA AI CONTEXT HOOK
    if (window.AudioBriefing && window.AudioBriefing.isPlaying) {
        window.AudioBriefing.stop();
    }

    const isPythonLesson = lesson.type === 'python';

    // Safety check for the back button
    let parentWeekId = 'week-1'; // fallback
    if (dayId) {
        parentWeekId = getWeekIdForDay(dayId); // Robust resolution of the parent Week
    }

    const app = document.getElementById('app');
    if (!app) return;

    app.innerHTML = `
        <div class="lesson-container" style="max-width: 1400px; margin: 0 auto; animation: fadeIn 0.4s;">

            <!-- TOP ACTION NAV BAR (FLUID RESPONSIVE) -->
            <div class="lesson-top-bar" style="display: flex; flex-direction: column; align-items: flex-start; gap: 6px; margin-bottom: 20px; width: 100%;">
                <div style="display: flex; align-items: center; gap: 10px; flex-wrap: wrap;">
                    <button onclick="window.toggleMobileCurriculumDrawer()" class="btn-neural" style="font-family: 'JetBrains Mono'; font-size: 0.72rem; padding: 4px 10px; border-radius: 6px; display: inline-flex; align-items: center; gap: 4px; border-color: var(--accent-cyan); color: var(--accent-cyan);">
                        <span>☰</span> 52 WEEKS
                    </button>
                    <button id="lesson-audio-btn" onclick="window.toggleAudioBriefing()" class="btn-neural" style="font-family: 'JetBrains Mono'; font-size: 0.72rem; padding: 4px 10px; border-radius: 6px; display: inline-flex; align-items: center; gap: 4px; border-color: var(--accent-pink); color: var(--accent-pink);" title="Listen to AI Audio Briefing">
                        <span id="audio-icon">🎧</span> <span id="audio-btn-label">Audio Briefing</span>
                    </button>
                    <span style="font-family: 'JetBrains Mono'; font-size: 0.75rem; color: var(--accent-cyan);">NODE_ID: ${lesson.id} // MISSION_STATUS: ACTIVE</span>
                </div>
                <h2 class="text-gradient" style="font-family: 'Space Grotesk'; font-size: clamp(1.4rem, 4.5vw, 2.2rem); margin: 4px 0 0 0; font-weight: 700; line-height: 1.25; word-break: break-word; max-width: 100%;">${lesson.title}</h2>
            </div>

            <div class="lesson-main-layout" style="display: grid; grid-template-columns: 7fr 3fr; gap: 32px; min-height: 600px;">

                <!-- 70% PRIMARY STREAM -->
                <div class="lesson-primary-stream" style="display: flex; flex-direction: column; overflow-y: auto; padding-right: 16px;">
                    <div class="video-refractive-frame glass-refractive" style="border-radius: 16px; overflow: hidden; background: #000; aspect-ratio: 16/9; width: 100%;">
                        <iframe src="${lesson.video}" style="width: 100%; height: 100%;" frameborder="0" allowfullscreen></iframe>
                    </div>
                    <div style="margin-top: 12px; display: flex; justify-content: flex-end; gap: 12px; flex-wrap: wrap;">
                        <button id="zen-max-btn" onclick="window.toggleWorkspaceZenMode()" class="btn-neural" style="font-family: 'JetBrains Mono'; font-size: 0.8rem; padding: 6px 14px; border-radius: 8px; display: flex; align-items: center; gap: 8px; border-color: var(--accent-violet); color: var(--accent-violet);">
                            <span>🖥️</span> Maximize Workspace
                        </button>
                        <button onclick="window.launchNeuralKernelForLesson()" class="btn-neural" style="font-family: 'JetBrains Mono'; font-size: 0.8rem; padding: 6px 14px; border-radius: 8px; display: flex; align-items: center; gap: 8px; border-color: var(--accent-cyan); color: var(--accent-cyan);">
                            <span>⚡</span> Launch Code Kernel
                        </button>
                        ${lesson.sources ? lesson.sources.map(src => `
                            <a href="${src.url}" target="_blank" class="btn-neural" style="font-family: 'JetBrains Mono'; font-size: 0.8rem; text-decoration: none; padding: 6px 12px; border-radius: 6px; display: flex; align-items: center; gap: 8px; border-color: var(--accent-pink); color: var(--accent-pink);">
                                <span>📚</span> ${src.title}
                            </a>
                        `).join('') : ''}
                        <a href="${lesson.video.replace('/embed/', '/watch?v=').split('?')[0]}" target="_blank" class="btn-neural" style="font-family: 'JetBrains Mono'; font-size: 0.8rem; text-decoration: none; padding: 6px 12px; border-radius: 6px; display: flex; align-items: center; gap: 8px;">
                            <span>🔗</span> Open Video in New Tab
                        </a>
                    </div>

                    <div class="lesson-story-glass glass-refractive" style="margin-top: 32px; padding: 32px; border-radius: 16px;">
                        <h3 style="color: var(--accent-cyan); margin-bottom: 24px; font-family: 'JetBrains Mono'; font-size: 0.9rem;">> MISSION_BRIEFING</h3>
                        <div class="holographic-quad-track" style="display: grid; grid-template-columns: 1fr 1fr; gap: 24px;">
                            <div class="track-node">
                                <h4 style="font-family: 'JetBrains Mono'; font-size: 0.75rem; color: var(--text-muted); opacity: 0.8; margin-bottom: 8px;">💻 TECH_CORE</h4>
                                <p style="font-size: 0.95rem; line-height: 1.6; color: var(--text-secondary);">${extractTrackText(lesson.story, 'tech')}</p>
                            </div>
                            <div class="track-node">
                                <h4 style="font-family: 'JetBrains Mono'; font-size: 0.75rem; color: var(--text-muted); opacity: 0.8; margin-bottom: 8px;">🏥 CLINICAL_BASE</h4>
                                <p style="font-size: 0.95rem; line-height: 1.6; color: var(--text-secondary);">${extractTrackText(lesson.story, 'health')}</p>
                            </div>
                            <div class="track-node">
                                <h4 style="font-family: 'JetBrains Mono'; font-size: 0.75rem; color: var(--text-muted); opacity: 0.8; margin-bottom: 8px;">🧬 BIO_SYNC</h4>
                                <p style="font-size: 0.95rem; line-height: 1.6; color: var(--text-secondary);">${extractTrackText(lesson.story, 'bio')}</p>
                            </div>
                            <div class="track-node">
                                <h4 style="font-family: 'JetBrains Mono'; font-size: 0.75rem; color: var(--text-muted); opacity: 0.8; margin-bottom: 8px;">🧪 LAB_PROTOCOL</h4>
                                <p style="font-size: 0.95rem; line-height: 1.6; color: var(--text-secondary);">${extractTrackText(lesson.story, 'lab')}</p>
                            </div>
                        </div>
                    </div>

                    <!-- CLINICAL KNOWLEDGE CHECK CARD (v14.0) -->
                    ${(typeof renderQuizCard === 'function') ? renderQuizCard(lesson) : ''}
                </div>

                <!-- 30% INTERACTIVE LAB -->
                <div class="lesson-vitals-sidebar" style="height: 100%;">
                    <div class="glass-refractive" style="padding: 24px; height: 100%; border-radius: 16px; display: flex; flex-direction: column;">
                         <h3 style="color: var(--accent-violet); margin-bottom: 20px; font-family: 'JetBrains Mono'; font-size: 0.9rem;">> NEURAL_LAB</h3>

                         <div id="neural-lab-interface" style="flex: 1; display: flex; flex-direction: column; overflow-y: auto;">
                            ${isPythonLesson ? `
                                <div id="monaco-container" class="editor-pane" style="flex: 1; min-height: 250px; border: 1px solid rgba(255,255,255,0.1); border-radius: 12px; margin-bottom: 16px;"></div>
                                <div class="lab-controls" style="display: flex; gap: 12px; margin-bottom: 16px;">
                                    <button id="term-run-btn" onclick="PythonEngine.run()" class="btn-neural" style="font-size: 0.8rem; padding: 10px 20px; width: 100%;">▶ EXECUTE_CODE</button>
                                </div>
                                <div id="term-output" class="console-pane glass-refractive" style="height: 140px; font-family: 'JetBrains Mono'; font-size: 0.75rem; padding: 12px; border-radius: 12px; border: 1px solid rgba(255,255,255,0.05); overflow-y: auto;">
                                    <div class="term-line info">> Kernel linked. Awaiting input.</div>
                                </div>
                            ` : `
                                <div class="interaction-node" style="flex: 1; display: flex; flex-direction: column;">
                                    ${renderTable(lesson.data)}
                                    <div id="feedback" class="feedback-box glass-refractive" style="margin-top: 16px; padding: 16px; font-size: 0.85rem; color: var(--text-secondary); border: 1px dashed rgba(6,182,212,0.3); border-radius: 12px; background: rgba(0,0,0,0.3);">
                                        > MONITORING_DATA_SYNC...
                                    </div>
                                </div>
                            `}
                         </div>
                    </div>
                </div>

            </div>
        </div>
    `;

    if (isPythonLesson && window.PythonEngine) {
        setTimeout(() => {
            PythonEngine.init().then(() => {
                if (PythonEngine.editor) {
                    PythonEngine.editor.setValue(lesson.code_start || '# Neural Link Active\nprint("Executing Data Analysis...")');
                }
            });
        }, 300);
    }

    // Load Journal Notes for this day
    window.currentJournalDayId = dayId;
    setTimeout(() => {
        const journal = document.getElementById('neural-journal');
        const status = document.getElementById('journal-save-status');
        if (journal) {
            const notesDict = window.StorageHub ? window.StorageHub.load('datavitals_journal', {}) : {};
            journal.value = notesDict[dayId] || '';
            if (status) {
                status.innerText = 'LOADED';
            }
        }
    }, 100);
}

function extractTrackText(html, trackClass) {
    const temp = document.createElement('div');
    temp.innerHTML = html;
    const section = temp.querySelector(`.track-section.${trackClass} p`);
    return section ? section.innerText : "Awaiting synchronization...";
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

// Helper to find parent Week ID

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
        window.StorageHub.save('datavitals_progress_default', {});
        renderRoadmap();
        window.location.reload();
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
// Show Progress Stats
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

function toggleChat() {
    const chatWindow = document.getElementById('chat-window');
    if (chatWindow) {
        chatWindow.classList.toggle('hidden');
        if (!chatWindow.classList.contains('hidden')) {
            const input = document.getElementById('user-input');
            if (input) input.focus();
        }
    }
}

function toggleAuraSidebar() {
    const grid = document.querySelector('.bento-grid');
    const toggleIcon = document.getElementById('aura-toggle-icon');

    if (grid) {
        grid.classList.toggle('aura-minimized');
        if (toggleIcon) {
            toggleIcon.innerText = grid.classList.contains('aura-minimized') ? '◧' : '◨';
        }
    }
}

function handleChatInput(event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
}

function sendMessage(overrideText = null) {
    const input = document.getElementById('user-input');
    const message = overrideText || input.value.trim();
    if (!message) return;

    // User Message
    addMessage(message, 'user');
    if (input) input.value = '';

    const messagesContainer = document.getElementById('chat-messages');

    // Simulate Typing Indicator
    const typingId = 'typing-' + Date.now();
    const typingDiv = document.createElement('div');
    typingDiv.id = typingId;
    typingDiv.className = 'message bot-message typing-indicator';
    typingDiv.innerHTML = '<span class="dot">.</span><span class="dot">.</span><span class="dot">.</span>';
    if (messagesContainer) {
        messagesContainer.appendChild(typingDiv);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }

    // Simulate Network/Processing Delay (0.8s to 2s)
    const delay = Math.floor(Math.random() * 1200) + 800;
    setTimeout(() => {
        const tDiv = document.getElementById(typingId);
        if (tDiv) tDiv.remove();

        const botResponse = generateBotResponse(message, window.activeLessonContext);
        addMessage(botResponse, 'bot');
    }, delay);
}

function addMessage(text, sender) {
    const messagesContainer = document.getElementById('chat-messages');
    if (!messagesContainer) return;
    const msgDiv = document.createElement('div');
    msgDiv.className = `message ${sender}-message`;
    msgDiv.innerHTML = text.replace(/\n/g, '<br>');
    if (sender === 'bot') {
        msgDiv.style.borderLeft = '2px solid var(--accent-cyan)';
        window.speakAura(text);
    }
    messagesContainer.appendChild(msgDiv);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

function generateBotResponse(userMsg, context) {
    const msg = userMsg.toLowerCase();

    // 1. Core Directives
    if (msg.includes('hello') || msg.includes('hi')) {
        if (context) {
            return `Greetings, Architect. I see your optical sensors are currently focused on **${context.title}**. What parameters can I clarify?`;
        }
        return `Aura Node online. Awaiting cognitive queries.`;
    }

    if (msg.includes('answer') || msg.includes('solution') || msg.includes('cheat')) {
        return "I am programmed to empower human intelligence, not bypass it. Analyze the <b>Neural Lab</b> telemetry and deduce the correct node constraint.";
    }

    // 2. Contextual Intelligence Routing
    if (context) {
        if (msg.includes('what') || msg.includes('explain') || msg.includes('help')) {
            // Strip HTML to get raw context lore
            const temp = document.createElement('div');
            temp.innerHTML = context.story;
            const loreText = temp.textContent || temp.innerText || "";

            // Extract the first sensible sentence from the lore as a "hint"
            const hintMatch = loreText.match(/[A-Z][^.?!]+[.?!]/);
            const hint = hintMatch ? hintMatch[0] : "Focus on the core mechanics presented in the tracks.";

            return `Analyzing active node [${context.id}]...\n\nMy scan of the local databanks indicates this module focuses on **${context.title}**.\n\n*Heuristic Hint:* ${hint}`;
        }

        if (msg.includes('lab') || msg.includes('task') || msg.includes('mission')) {
            return `Current Objective parameters:\n\nTarget Vector: \`${context.task.targetColumn}\`\nCondition Check active.\n\nLook closely at the data matrix on your interface.`;
        }
    } else {
        if (msg.includes('what') || msg.includes('explain')) {
            return "Please initialize a specific Lesson Node before requesting localized analysis.";
        }
    }

    // 3. Fallback Heuristics
    const cannedResponses = [
        "Processing query... The local data grid requires further analysis. Rephrase your parameters.",
        "My logic gates are currently optimized for the active lesson context. Please stay on protocol.",
        "Fascinating inquiry. However, that data is outside my current security clearance.",
        "Have you reviewed the Architect Archives? The official documentation usually holds the key."
    ];
    return cannedResponses[Math.floor(Math.random() * cannedResponses.length)];
}

// --- PERSISTENCE HELPERS ---

function unlockNextDay(currentDayId) {
    const progress = window.StorageHub.load('datavitals_progress_default', {});
    progress[currentDayId] = true;
    if (window.StorageHub && window.StorageHub.save) {
        window.StorageHub.save('datavitals_progress_default', progress);
    } else {
        try { localStorage.setItem('datavitals_progress_default', JSON.stringify(progress)); } catch(e) {}
    }
    return "Next Module Decrypted Successfully.";
}

function loadProgress() {
    if (window.StorageHub && window.StorageHub.load) {
        return window.StorageHub.load('datavitals_progress_default', { 'week-1-d1': true });
    }
    try {
        const raw = localStorage.getItem('datavitals_progress_default');
        return raw ? JSON.parse(raw) : { 'week-1-d1': true };
    } catch(e) {
        return { 'week-1-d1': true };
    }
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
        // Force render of the grid if already authorized
        setTimeout(() => {
            if (typeof renderRoadmap === 'function') {
                renderRoadmap();
                if (typeof initAIObserver === 'function') initAIObserver();
                if (typeof updateNeuralHUD === 'function') updateNeuralHUD();
            }
        }, 500);
    } else {
        // Force show login if no session established
        if (window.loginOverlay) window.loginOverlay.show();
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
    console.log("[Forensic]: System Initializing...");

    // 1. Defined hooks first
    window.onSystemReady = () => {
        console.log("[Forensic]: System Ready Triggered.");
        window.bootApplication();
    };

    // 2. State & HUD Initialization
    updateNeuralHUD();

    // 3. Dependency Check
    if (!window.roadmap) throw new Error("Critical: roadmap.js failed to load.");
    if (!window.modules) throw new Error("Critical: modules.js failed to load.");

    // 4. Component Boot
    if (window.loginOverlay) window.loginOverlay.init();

    // 5. Direct Entry Point: Boot Directly into Lesson 1
    setTimeout(() => {
        const splash = document.getElementById('splash-screen');
        if (splash) splash.remove();

        // Direct Boot into Lesson View
        window.bootApplication();
    }, 50);

} catch (e) {
    console.error("Critical System Failure:", e);
    const splash = document.getElementById('splash-screen');
    if (splash) splash.style.display = 'none';

    alert("System Error: " + e.message);
    const appContainer = document.getElementById('app');
    if (appContainer) {
        appContainer.innerHTML = `<h1 style="color:red; padding:20px;">System Error: ${e.message}</h1>`;
    }
}
// --- NEURAL IDENTITY HUD ---
function initNeuralIdentity() {
    console.log("[Neural Identity]: Initializing Architecture...");
    const nav = document.querySelector('.card-nav');
    if (!nav) return;

    // Check if identity block already exists
    if (document.getElementById('architect-identity')) return;

    const identityBlock = document.createElement('div');
    identityBlock.id = 'architect-identity';
    identityBlock.style.cssText = `
        margin-top: auto; padding-top: 20px; border-top: 1px solid rgba(255,255,255,0.05);
        display: flex; flex-direction: column; align-items: center; gap: 12px; width: 100%;
    `;

    const user = window.authService ? window.authService.getCurrentUser() : null;

    if (user) {
        identityBlock.innerHTML = `
            <div class="architect-avatar" style="width:40px; height:40px; border-radius:50%; background:var(--accent-cyan); border:2px solid var(--accent-cyan); overflow:hidden; box-shadow:0 0 15px rgba(6,182,212,0.3);">
                <img src="${user.photoURL || 'assets/default_avatar.png'}" style="width:100%; height:100%; object-fit:cover;">
            </div>
            <div style="text-align:center;">
                <div style="font-family:'Space Grotesk'; font-weight:700; font-size:0.7rem; color:white;">${user.username.toUpperCase()}</div>
                <div style="font-family:'JetBrains Mono'; font-size:0.5rem; color:var(--accent-cyan); opacity:0.6;">ARCHITECT_L1</div>
            </div>
        `;
    } else {
        identityBlock.innerHTML = `
            <div class="nav-item-killer" onclick="window.authService.loginWithGoogle()" title="Neural Login" style="color: var(--accent-cyan);">🔐</div>
            <div style="font-family:'JetBrains Mono'; font-size:0.5rem; color:var(--text-muted); text-align:center;">GUEST_ACCESS</div>
        `;
    }

    nav.appendChild(identityBlock);
}

// Global Storage Updates listener
window.addEventListener('neural-storage-updated', () => {
    console.log("[Aura]: Cloud state detected. Refreshing subsystems...");
    renderRoadmap();
    if (window.Gamification) window.Gamification.updateHUD();
});

window.onLoginSuccess = () => {
    console.log("[Neural Link]: Login Success.");
    initNeuralIdentity();
    if (window.GuidedLoading) window.GuidedLoading.init();
    else window.bootApplication();
};

// --- AURA PREDICTIVE INSIGHTS ---
window.updateAuraInsights = () => {
    const roadmap = window.roadmap;
    const progress = window.StorageHub.load('datavitals_progress_default', {});
    const suggestionEl = document.getElementById('aura-suggested-node');
    const insightBubble = document.querySelector('#aura-predictive-card .aura-insight-bubble');

    if (!roadmap || !suggestionEl) return;

    let nextLesson = null;
    let found = false;

    for (const week of roadmap) {
        for (const day of week.days) {
            if (!progress[day.id]) {
                nextLesson = day;
                found = true;
                break;
            }
        }
        if (found) break;
    }

    if (nextLesson) {
        suggestionEl.innerText = `NEXT: ${nextLesson.title}`;
        suggestionEl.style.color = 'var(--accent-cyan)';
        if (insightBubble) {
            const insights = [
                "Your trajectory suggests this module is the logical next step.",
                "Optimal path identified: Data persistence aligns here.",
                "Shall we continue, Architect? The neural link is stable.",
                "Mastery of this node unlocks advanced clinical logic flows."
            ];
            insightBubble.innerText = `"${insights[Math.floor(Math.random() * insights.length)]}"`;
        }
    } else {
        suggestionEl.innerText = "PATH COMPLETED";
        suggestionEl.style.color = 'var(--accent-pink)';
        if (insightBubble) insightBubble.innerText = '"You have reached the horizon, Sir. Exceptional."';
    }
};

// Neural Surge Visual Feedback
function triggerNeuralSurge() {
    const surge = document.createElement('div');
    surge.className = 'neural-surge-overlay aura-core-active';
    document.body.appendChild(surge);

    triggerHaptic('medium');

    setTimeout(() => {
        surge.classList.add('active');
        setTimeout(() => {
            surge.remove();
        }, 1200);
    }, 10);
}



// ============================================================================
// 💼 FEATURE 1: GITHUB PORTFOLIO GENERATOR
// ============================================================================
window.showPortfolioGenerator = () => {
    const app = document.getElementById('app');
    const title = document.getElementById('page-title');
    if (title) title.innerText = "GitHub Portfolio Builder";

    document.querySelectorAll('.nav-item').forEach(el => el.classList.remove('active'));

    app.innerHTML = `
        <div class="portfolio-container" style="max-width: 1100px; margin: 0 auto; padding-bottom: 50px; animation: fadeIn 0.4s;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 30px; border-bottom: 1px solid rgba(255,255,255,0.08); padding-bottom: 20px;">
                <div>
                    <h2 class="text-gradient" style="font-family: 'Space Grotesk'; font-size: 2.2rem; margin: 0;">💼 CAREER PORTFOLIO GENERATOR</h2>
                    <div style="font-family: 'JetBrains Mono'; color: var(--text-muted); font-size: 0.85rem; margin-top: 6px;">
                        Transform your completed lab exercises into a production-ready GitHub README project portfolio.
                    </div>
                </div>
                <button onclick="window.copyPortfolioToClipboard()" class="btn-neural" style="padding: 10px 20px; font-family: 'Space Grotesk'; font-size: 0.9rem; background: var(--accent-cyan); color: #000; font-weight: 700;">
                    📋 Copy Markdown
                </button>
            </div>

            <div style="display: grid; grid-template-columns: 320px 1fr; gap: 30px;">
                <!-- OPTIONS PANEL -->
                <div class="glass-refractive" style="padding: 24px; border-radius: 16px; border: 1px solid rgba(6,182,212,0.3); height: fit-content;">
                    <h4 style="font-family: 'Space Grotesk'; color: white; margin-top: 0; margin-bottom: 16px;">Configure Portfolio</h4>

                    <label style="font-family: 'JetBrains Mono'; font-size: 0.75rem; color: var(--accent-cyan); display: block; margin-bottom: 6px;">PROJECT TRACK</label>
                    <select id="port-track-select" onchange="window.updatePortfolioPreview()" style="width: 100%; padding: 10px; background: rgba(0,0,0,0.6); border: 1px solid rgba(255,255,255,0.1); color: white; border-radius: 8px; font-family: 'Space Grotesk'; margin-bottom: 16px;">
                        <option value="sql_etl">Phase 2: Healthcare SQL ETL & ER Readmission Pipeline</option>
                        <option value="stats_scipy">Phase 3: Clinical Trial Statistical Hypothesis Testing (SciPy)</option>
                        <option value="ai_rag">Phase 4: Medical Imaging AI Assistant & RAG Knowledgebase</option>
                    </select>

                    <label style="font-family: 'JetBrains Mono'; font-size: 0.75rem; color: var(--accent-cyan); display: block; margin-bottom: 6px;">YOUR NAME</label>
                    <input type="text" id="port-user-name" value="Data Analytics Specialist" onkeyup="window.updatePortfolioPreview()" style="width: 100%; padding: 10px; background: rgba(0,0,0,0.6); border: 1px solid rgba(255,255,255,0.1); color: white; border-radius: 8px; font-family: 'Space Grotesk'; margin-bottom: 16px;">

                    <label style="font-family: 'JetBrains Mono'; font-size: 0.75rem; color: var(--accent-cyan); display: block; margin-bottom: 6px;">TARGET JOB ROLE</label>
                    <input type="text" id="port-job-role" value="Healthcare Data Analyst / AI Engineer" onkeyup="window.updatePortfolioPreview()" style="width: 100%; padding: 10px; background: rgba(0,0,0,0.6); border: 1px solid rgba(255,255,255,0.1); color: white; border-radius: 8px; font-family: 'Space Grotesk'; margin-bottom: 16px;">

                    <div style="background: rgba(6,182,212,0.1); border: 1px solid var(--accent-cyan); border-radius: 10px; padding: 12px; margin-top: 10px;">
                        <span style="font-size: 0.75rem; font-family: 'JetBrains Mono'; color: var(--accent-cyan);">💡 PRO TIP: Paste this formatted Markdown directly into a new repository 'README.md' on GitHub to showcase to recruiters.</span>
                    </div>
                </div>

                <!-- PREVIEW PANEL -->
                <div class="glass-refractive" style="padding: 24px; border-radius: 16px; border: 1px solid rgba(255,255,255,0.1); background: rgba(0,0,0,0.4);">
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px;">
                        <span style="font-family: 'JetBrains Mono'; font-size: 0.8rem; color: var(--text-muted);">MARKDOWN_PREVIEW</span>
                        <span id="port-copied-toast" style="font-family: 'JetBrains Mono'; font-size: 0.8rem; color: var(--accent-cyan); display: none;">✓ Copied to Clipboard!</span>
                    </div>
                    <pre id="portfolio-markdown-output" style="white-space: pre-wrap; font-family: 'JetBrains Mono', monospace; font-size: 0.82rem; line-height: 1.6; color: #e2e8f0; background: #090d16; padding: 20px; border-radius: 10px; border: 1px solid rgba(255,255,255,0.05); max-height: 550px; overflow-y: auto;"></pre>
                </div>
            </div>
        </div>
    `;

    window.updatePortfolioPreview();
    triggerHaptic('medium');
};

window.updatePortfolioPreview = () => {
    const track = document.getElementById('port-track-select')?.value || 'sql_etl';
    const name = document.getElementById('port-user-name')?.value || 'Data Analyst';
    const role = document.getElementById('port-job-role')?.value || 'Healthcare Data Analytics Engineer';
    const outputEl = document.getElementById('portfolio-markdown-output');

    if (!outputEl) return;

    let md = '';

    if (track === 'sql_etl') {
        md = `# 🏥 Healthcare ER Readmission SQL Pipeline & Analytics Dashboard
**Author:** ${name}  
**Target Role:** ${role}  
**Repository:** [github.com/${name.toLowerCase().replace(/\s+/g, '')}/healthcare-sql-pipeline](https://github.com)

## 📌 Executive Summary
Designed and deployed a end-to-end relational SQL ETL pipeline and executive dashboard analyzing 10,000+ emergency room patient records. Identified key factors driving 30-day readmission rates, resulting in actionable recommendations that reduce hospital penalty risks by **18%**.

## 🛠️ Technology Stack
- **SQL / Relational DB:** PostgreSQL, CTEs, Window Functions (\`ROW_NUMBER()\`, \`DENSE_RANK()\`, \`LAG()\`)
- **Python Data Science:** Pandas, NumPy, Matplotlib, Seaborn
- **BI & Viz:** Power BI / Tableau Interactive Dashboard

## 📊 Analytical Highlights & SQL Window Functions
\`\`\`sql
-- Query: 30-Day Patient Readmission Window Analysis
WITH PatientVisits AS (
    SELECT 
        patient_id,
        visit_date,
        diagnosis_code,
        LAG(visit_date, 1) OVER (PARTITION BY patient_id ORDER BY visit_date) AS prev_visit
    FROM hospital_admissions
)
SELECT 
    patient_id,
    visit_date,
    prev_visit,
    (visit_date - prev_visit) AS days_between_visits,
    CASE 
        WHEN (visit_date - prev_visit) <= 30 THEN 1 
        ELSE 0 
    END AS is_30day_readmit
FROM PatientVisits
WHERE prev_visit IS NOT NULL;
\`\`\`

## 📈 Key Findings
1. Patients with high Triage Scores (Level 4-5) had a **34% higher probability** of readmission within 14 days without follow-up tele-health calls.
2. Implemented automated SQL trigger alerts for high-risk chronic care patient discharges.
`;
    } else if (track === 'stats_scipy') {
        md = `# 🧪 Clinical Trial Statistical Analysis & Hypothesis Testing (SciPy)
**Author:** ${name}  
**Target Role:** ${role}  

## 📌 Project Overview
Statistical evaluation of drug efficacy data across 500 patient cohorts using **SciPy.stats** and hypothesis testing. Verified treatment response significance ($p < 0.05$) across control vs experimental drug dosages.

## 🔬 Statistical Methodology
- **Normality Check:** Shapiro-Wilk Test (\`scipy.stats.shapiro\`)
- **2-Sample Independent T-Test:** \`scipy.stats.ttest_ind(equal_var=False)\`
- **Categorical Independence:** Chi-Square Test (\`scipy.stats.chi2_contingency\`)

\`\`\`python
import numpy as np
from scipy import stats

# Clinical Trial Blood Pressure Data (mmHg Drop)
control_group = np.random.normal(loc=4.2, scale=2.1, size=150)
treatment_group = np.random.normal(loc=12.8, scale=2.4, size=150)

# Execute 2-Sample T-Test
t_stat, p_val = stats.ttest_ind(treatment_group, control_group)
print(f"T-Statistic: {t_stat:.4f} | P-Value: {p_val:.4e}")

if p_val < 0.05:
    print("Conclusion: Reject H0 — Statistically significant blood pressure reduction achieved!")
\`\`\`
`;
    } else {
        md = `# 🤖 Medical Diagnostic AI Assistant & RAG Vector Knowledgebase
**Author:** ${name}  
**Target Role:** ${role}  

## 📌 Architecture Summary
Built a Retrieval-Augmented Generation (RAG) assistant leveraging LLMs, vector embeddings (Cosine Similarity), and PyTorch for clinical documentation lookup and diagnostic support.

## 🧠 Model Pipeline
- **Embedding Model:** Sentence-Transformers (\`all-MiniLM-L6-v2\`)
- **Vector Database:** FAISS / Chromadb
- **LLM Engine:** Open-Source Transformer Pipeline

\`\`\`python
from sklearn.metrics.pairwise import cosine_similarity
import numpy as np

# Vector Embeddings Cosine Distance Query
def query_clinical_knowledgebase(query_vector, doc_vectors):
    similarities = cosine_similarity([query_vector], doc_vectors)[0]
    top_k_idx = np.argsort(similarities)[::-1][:3]
    return top_k_idx
\`\`\`
`;
    }

    outputEl.innerText = md;
};

window.copyPortfolioToClipboard = () => {
    const outputEl = document.getElementById('portfolio-markdown-output');
    if (!outputEl) return;
    navigator.clipboard.writeText(outputEl.innerText).then(() => {
        const toast = document.getElementById('port-copied-toast');
        if (toast) {
            toast.style.display = 'inline';
            setTimeout(() => toast.style.display = 'none', 2500);
        }
        triggerHaptic('medium');
    });
};

// ============================================================================
// 📐 FEATURE 2: INSTANT FORMULA & CODE CHEAT-SHEET MATRIX
// ============================================================================
window.showCheatSheetModal = () => {
    let overlay = document.getElementById('cheat-sheet-modal-overlay');
    if (!overlay) {
        overlay = document.createElement('div');
        overlay.id = 'cheat-sheet-modal-overlay';
        overlay.style.cssText = `
            position: fixed; top: 0; left: 0; width: 100vw; height: 100vh;
            background: rgba(0,0,0,0.85); backdrop-filter: blur(15px);
            z-index: 10000; display: flex; align-items: center; justify-content: center; animation: fadeIn 0.3s;
        `;
        document.body.appendChild(overlay);
    }

    overlay.classList.remove('hidden');

    overlay.innerHTML = `
        <div class="glass-refractive" style="width: 90%; max-width: 950px; max-height: 85vh; background: #0a0f1d; border: 1px solid rgba(6,182,212,0.4); border-radius: 20px; padding: 30px; display: flex; flex-direction: column; box-shadow: 0 20px 50px rgba(0,0,0,0.8); position: relative;">
            <button onclick="document.getElementById('cheat-sheet-modal-overlay').classList.add('hidden')" style="position: absolute; top: 20px; right: 20px; background: transparent; border: none; color: var(--text-muted); font-size: 1.5rem; cursor: pointer;">✕</button>
            
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px; border-bottom: 1px solid rgba(255,255,255,0.08); padding-bottom: 15px;">
                <div>
                    <h3 class="text-gradient" style="font-family: 'Space Grotesk'; font-size: 1.8rem; margin: 0;">📐 ULTIMATE FORMULA & CODE CHEAT-SHEET</h3>
                    <div style="font-family: 'JetBrains Mono'; font-size: 0.75rem; color: var(--accent-cyan); margin-top: 4px;">// Instant copyable reference for SQL, Excel, Python & Healthcare Stats</div>
                </div>
                <input type="text" id="cs-search-input" placeholder="Search formulas (e.g. XLOOKUP, CTE, T-Test)..." onkeyup="window.filterCheatSheet(this.value)" style="width: 300px; padding: 8px 14px; background: rgba(0,0,0,0.5); border: 1px solid rgba(255,255,255,0.1); border-radius: 8px; color: white; font-family: 'Space Grotesk'; outline: none;">
            </div>

            <!-- TABS -->
            <div style="display: flex; gap: 10px; margin-bottom: 20px; border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 10px; overflow-x: auto;">
                <button class="cs-tab btn-neural active" onclick="window.switchCheatTab('sql')" style="padding: 6px 14px; font-size: 0.8rem;">SQL Mastery</button>
                <button class="cs-tab btn-neural" onclick="window.switchCheatTab('excel')" style="padding: 6px 14px; font-size: 0.8rem;">Excel & Formulas</button>
                <button class="cs-tab btn-neural" onclick="window.switchCheatTab('python')" style="padding: 6px 14px; font-size: 0.8rem;">Python & Pandas</button>
                <button class="cs-tab btn-neural" onclick="window.switchCheatTab('stats')" style="padding: 6px 14px; font-size: 0.8rem;">SciPy Stats</button>
                <button class="cs-tab btn-neural" onclick="window.switchCheatTab('ai')" style="padding: 6px 14px; font-size: 0.8rem;">AI & GenAI</button>
            </div>

            <!-- CONTENT BODY -->
            <div id="cheat-sheet-body" style="flex: 1; overflow-y: auto; display: grid; grid-template-columns: repeat(auto-fill, minmax(400px, 1fr)); gap: 16px; padding-right: 8px;">
            </div>
        </div>
    `;

    window.switchCheatTab('sql');
    triggerHaptic('medium');
};

const cheatSheetData = {
    sql: [
        { title: "Window Function (ROW_NUMBER & PARTITION)", code: "SELECT patient_id, visit_date,\n       ROW_NUMBER() OVER (PARTITION BY patient_id ORDER BY visit_date DESC) as visit_rank\nFROM hospital_admissions;" },
        { title: "Common Table Expression (CTE)", code: "WITH HighRisk AS (\n    SELECT patient_id, COUNT(*) as visit_count\n    FROM admissions GROUP BY patient_id\n    HAVING COUNT(*) >= 3\n)\nSELECT * FROM HighRisk WHERE visit_count > 5;" },
        { title: "SQL LEFT JOIN with Aggregation", code: "SELECT p.dept_name, COUNT(a.id) as total_admissions, AVG(a.cost) as avg_cost\nFROM departments p\nLEFT JOIN admissions a ON p.id = a.dept_id\nGROUP BY p.dept_name;" }
    ],
    excel: [
        { title: "XLOOKUP (Modern Lookup)", code: "=XLOOKUP(lookup_val, A2:A100, B2:B100, 'Not Found', 0)" },
        { title: "INDEX / MATCH Combination", code: "=INDEX(C2:C100, MATCH(lookup_val, A2:A100, 0))" },
        { title: "SUMIFS Multi-Condition", code: "=SUMIFS(CostRange, DeptRange, 'Cardiology', StatusRange, 'Admitted')" }
    ],
    python: [
        { title: "Pandas GroupBy & Multi-Aggregation", code: "df.groupby('department').agg(\n    avg_readmission=('readmitted', 'mean'),\n    total_patients=('patient_id', 'count')\n).reset_index()" },
        { title: "Pandas Merge (SQL JOIN equivalent)", code: "df_combined = pd.merge(df_patients, df_visits, on='patient_id', how='left')" },
        { title: "Missing Data Handling", code: "df['age'] = df['age'].fillna(df['age'].median())" }
    ],
    stats: [
        { title: "2-Sample Independent T-Test", code: "from scipy import stats\nt_stat, p_val = stats.ttest_ind(group_a, group_b, equal_var=False)" },
        { title: "Chi-Square Test of Independence", code: "res = stats.chi2_contingency(contingency_table)\nprint(f'P-value: {res.pvalue:.4f}')" },
        { title: "ANOVA (One-Way)", code: "f_val, p_val = stats.f_oneway(group1, group2, group3)" }
    ],
    ai: [
        { title: "Scikit-Learn Train/Test & Random Forest", code: "from sklearn.ensemble import RandomForestClassifier\nfrom sklearn.model_selection import train_test_split\n\nX_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2)\nclf = RandomForestClassifier().fit(X_train, y_train)\nprint(f'Accuracy: {clf.score(X_test, y_test):.2f}')" },
        { title: "Cosine Similarity Vector Search", code: "from sklearn.metrics.pairwise import cosine_similarity\nsim = cosine_similarity([query_embedding], document_embeddings)[0]" }
    ]
};

window.switchCheatTab = (tabKey) => {
    document.querySelectorAll('.cs-tab').forEach(btn => btn.classList.remove('active'));
    const body = document.getElementById('cheat-sheet-body');
    if (!body) return;

    const items = cheatSheetData[tabKey] || [];
    body.innerHTML = items.map(item => `
        <div class="glass-refractive" style="padding: 16px; border-radius: 12px; border: 1px solid rgba(255,255,255,0.08); background: rgba(0,0,0,0.3);">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
                <span style="font-family: 'Space Grotesk'; font-weight: 700; color: white; font-size: 0.9rem;">${item.title}</span>
                <button onclick="navigator.clipboard.writeText('${item.code}'); triggerHaptic('light'); alert('Copied snippet!');" style="padding: 4px 10px; font-family: 'JetBrains Mono'; font-size: 0.7rem; background: rgba(6,182,212,0.2); border: 1px solid var(--accent-cyan); color: var(--accent-cyan); border-radius: 6px; cursor: pointer;">📋 Copy</button>
            </div>
            <pre style="font-family: 'JetBrains Mono'; font-size: 0.78rem; background: #050811; color: #38bdf8; padding: 12px; border-radius: 8px; margin: 0; white-space: pre-wrap; overflow-x: auto;">${item.code}</pre>
        </div>
    `).join('');
};

window.filterCheatSheet = (query) => {
    query = query.toLowerCase();
    const body = document.getElementById('cheat-sheet-body');
    if (!body) return;

    let allItems = [];
    Object.keys(cheatSheetData).forEach(k => allItems.push(...cheatSheetData[k]));
    const filtered = allItems.filter(i => i.title.toLowerCase().includes(query) || i.code.toLowerCase().includes(query));

    body.innerHTML = filtered.map(item => `
        <div class="glass-refractive" style="padding: 16px; border-radius: 12px; border: 1px solid rgba(255,255,255,0.08); background: rgba(0,0,0,0.3);">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
                <span style="font-family: 'Space Grotesk'; font-weight: 700; color: white; font-size: 0.9rem;">${item.title}</span>
                <button onclick="navigator.clipboard.writeText('${item.code}'); triggerHaptic('light'); alert('Copied snippet!');" style="padding: 4px 10px; font-family: 'JetBrains Mono'; font-size: 0.7rem; background: rgba(6,182,212,0.2); border: 1px solid var(--accent-cyan); color: var(--accent-cyan); border-radius: 6px; cursor: pointer;">📋 Copy</button>
            </div>
            <pre style="font-family: 'JetBrains Mono'; font-size: 0.78rem; background: #050811; color: #38bdf8; padding: 12px; border-radius: 8px; margin: 0; white-space: pre-wrap; overflow-x: auto;">${item.code}</pre>
        </div>
    `).join('');
};

// ============================================================================
// 🧪 FEATURE 3: INTERACTIVE DATA STUDIO & CSV PLAYGROUND
// ============================================================================
window.showDataStudio = () => {
    const app = document.getElementById('app');
    const title = document.getElementById('page-title');
    if (title) title.innerText = "Data Studio & CSV Playground";

    document.querySelectorAll('.nav-item').forEach(el => el.classList.remove('active'));

    app.innerHTML = `
        <div class="datastudio-container" style="max-width: 1150px; margin: 0 auto; padding-bottom: 50px; animation: fadeIn 0.4s;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 24px; border-bottom: 1px solid rgba(255,255,255,0.08); padding-bottom: 16px;">
                <div>
                    <h2 class="text-gradient" style="font-family: 'Space Grotesk'; font-size: 2.2rem; margin: 0;">🧪 INTERACTIVE DATA STUDIO</h2>
                    <div style="font-family: 'JetBrains Mono'; color: var(--text-muted); font-size: 0.85rem; margin-top: 4px;">
                        Explore, filter, and run live Python queries against healthcare datasets.
                    </div>
                </div>
                <div style="display: flex; gap: 12px;">
                    <button onclick="window.sendDataToKernel()" class="btn-neural" style="padding: 10px 18px; font-family: 'Space Grotesk'; font-size: 0.85rem; border-color: var(--accent-violet); color: var(--accent-violet);">
                        ⚡ Run Pandas in Code Kernel
                    </button>
                </div>
            </div>

            <!-- DATASET SELECTOR & METRICS -->
            <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; margin-bottom: 24px;">
                <div class="glass-refractive" style="padding: 16px; border-radius: 12px; border: 1px solid rgba(6,182,212,0.3);">
                    <div style="font-family: 'JetBrains Mono'; font-size: 0.7rem; color: var(--accent-cyan);">ACTIVE_DATASET</div>
                    <select id="ds-selector" onchange="window.loadStudioDataset(this.value)" style="width: 100%; margin-top: 8px; background: rgba(0,0,0,0.6); border: 1px solid rgba(255,255,255,0.1); color: white; padding: 6px; border-radius: 6px; font-family: 'Space Grotesk'; font-size: 0.85rem;">
                        <option value="ehr">🏥 EHR Emergency Patients (100 Rows)</option>
                        <option value="bp">💊 Blood Pressure Drug Trial (50 Rows)</option>
                        <option value="claims">💰 Hospital Billing Claims (60 Rows)</option>
                    </select>
                </div>
                <div class="glass-refractive" style="padding: 16px; border-radius: 12px; border: 1px solid rgba(255,255,255,0.08);">
                    <div style="font-family: 'JetBrains Mono'; font-size: 0.7rem; color: var(--text-muted);">TOTAL_RECORDS</div>
                    <div id="ds-metric-records" style="font-family: 'Space Grotesk'; font-size: 1.8rem; font-weight: 700; color: white; margin-top: 4px;">100</div>
                </div>
                <div class="glass-refractive" style="padding: 16px; border-radius: 12px; border: 1px solid rgba(255,255,255,0.08);">
                    <div style="font-family: 'JetBrains Mono'; font-size: 0.7rem; color: var(--text-muted);">MISSING_VALUES</div>
                    <div id="ds-metric-missing" style="font-family: 'Space Grotesk'; font-size: 1.8rem; font-weight: 700; color: var(--accent-pink); margin-top: 4px;">0 (Clean)</div>
                </div>
                <div class="glass-refractive" style="padding: 16px; border-radius: 12px; border: 1px solid rgba(255,255,255,0.08);">
                    <div style="font-family: 'JetBrains Mono'; font-size: 0.7rem; color: var(--text-muted);">IN_MEMORY_SIZE</div>
                    <div style="font-family: 'Space Grotesk'; font-size: 1.8rem; font-weight: 700; color: var(--accent-violet); margin-top: 4px;">14.2 KB</div>
                </div>
            </div>

            <!-- TABLE & CHART CONTAINER (v14.0) -->
            <div class="glass-refractive" style="padding: 20px; border-radius: 16px; border: 1px solid rgba(255,255,255,0.08); background: rgba(0,0,0,0.3);">
                <!-- VIEW SWITCHER BUTTONS -->
                <div style="display: flex; gap: 8px; margin-bottom: 16px;">
                    <button id="ds-tab-table" onclick="window.setStudioView('table')" class="btn-neural" style="padding: 6px 16px; font-size: 0.8rem; border-radius: 8px; background: rgba(6,182,212,0.15); border-color: var(--accent-cyan); color: var(--accent-cyan);">
                        📋 Data Table
                    </button>
                    <button id="ds-tab-chart" onclick="window.setStudioView('chart')" class="btn-neural" style="padding: 6px 16px; font-size: 0.8rem; border-radius: 8px; border-color: rgba(255,255,255,0.1); color: var(--text-muted);">
                        📊 Interactive SVG Chart
                    </button>
                </div>

                <!-- TABLE VIEW -->
                <div id="ds-view-table">
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px; flex-wrap: wrap; gap: 10px;">
                        <span style="font-family: 'JetBrains Mono'; font-size: 0.8rem; color: var(--accent-cyan);">// DATASET_VIEWER</span>
                        <input type="text" placeholder="Filter rows in real-time..." onkeyup="window.filterStudioTable(this.value)" style="padding: 6px 12px; background: rgba(0,0,0,0.5); border: 1px solid rgba(255,255,255,0.1); border-radius: 6px; color: white; font-family: 'Space Grotesk'; font-size: 0.85rem; width: 250px;">
                    </div>
                    <div id="ds-table-wrapper" style="overflow-x: auto; max-height: 420px; overflow-y: auto;">
                    </div>
                </div>

                <!-- CHART VIEW -->
                <div id="ds-view-chart" style="display: none;">
                    <div id="ds-chart-wrapper" class="studio-chart-wrapper">
                    </div>
                </div>
            </div>
        </div>
    `;

    window.loadStudioDataset('ehr');
    triggerHaptic('medium');
};

const studioDatasets = {
    ehr: [
        { id: 101, patient_id: "P-492", age: 64, triage_level: 4, wait_min: 45, dept: "Cardiology", readmitted: "YES" },
        { id: 102, patient_id: "P-118", age: 42, triage_level: 2, wait_min: 12, dept: "Trauma", readmitted: "NO" },
        { id: 103, patient_id: "P-883", age: 71, triage_level: 5, wait_min: 90, dept: "Neurology", readmitted: "YES" },
        { id: 104, patient_id: "P-304", age: 35, triage_level: 1, wait_min: 8, dept: "General", readmitted: "NO" },
        { id: 105, patient_id: "P-752", age: 58, triage_level: 3, wait_min: 30, dept: "Cardiology", readmitted: "YES" }
    ],
    bp: [
        { trial_id: "T-01", group: "Placebo", baseline_bp: 142, week4_bp: 140, drop_mmHg: 2 },
        { trial_id: "T-02", group: "Treatment_10mg", baseline_bp: 145, week4_bp: 128, drop_mmHg: 17 },
        { trial_id: "T-03", group: "Treatment_20mg", baseline_bp: 150, week4_bp: 122, drop_mmHg: 28 },
        { trial_id: "T-04", group: "Placebo", baseline_bp: 138, week4_bp: 137, drop_mmHg: 1 }
    ],
    claims: [
        { claim_id: "CLM-901", icd_code: "I10", billed_amount: 1450.00, approved_amount: 1200.00, status: "APPROVED" },
        { claim_id: "CLM-902", icd_code: "E11.9", billed_amount: 2800.00, approved_amount: 0.00, status: "DENIED" },
        { claim_id: "CLM-903", icd_code: "J45.909", billed_amount: 980.00, approved_amount: 950.00, status: "APPROVED" }
    ]
};

window.loadStudioDataset = (key) => {
    const data = studioDatasets[key] || studioDatasets.ehr;
    const recordsEl = document.getElementById('ds-metric-records');
    const wrapper = document.getElementById('ds-table-wrapper');

    if (recordsEl) recordsEl.innerText = data.length;

    if (!data || data.length === 0 || !wrapper) return;

    const cols = Object.keys(data[0]);

    wrapper.innerHTML = `
        <table class="studio-table" style="width: 100%; border-collapse: collapse; font-family: 'Space Grotesk'; font-size: 0.85rem;">
            <thead>
                <tr style="background: rgba(6,182,212,0.15); border-bottom: 1px solid var(--accent-cyan); text-align: left;">
                    ${cols.map(c => `<th style="padding: 10px 14px; color: var(--accent-cyan); font-family: 'JetBrains Mono';">${c.toUpperCase()}</th>`).join('')}
                </tr>
            </thead>
            <tbody id="ds-tbody">
                ${data.map((row, idx) => `
                    <tr style="border-bottom: 1px solid rgba(255,255,255,0.05); background: ${idx % 2 === 0 ? 'rgba(255,255,255,0.02)' : 'transparent'}; transition: background 0.2s;" onmouseover="this.style.background='rgba(6,182,212,0.08)'" onmouseout="this.style.background='${idx % 2 === 0 ? 'rgba(255,255,255,0.02)' : 'transparent'}'">
                        ${cols.map(c => `<td style="padding: 10px 14px; color: white;">${row[c]}</td>`).join('')}
                    </tr>
                `).join('')}
            </tbody>
        </table>
    `;

    if (window.renderStudioChart) {
        window.renderStudioChart(key);
    }
};

window.filterStudioTable = (query) => {
    query = query.toLowerCase();
    const tbody = document.getElementById('ds-tbody');
    if (!tbody) return;

    const rows = tbody.querySelectorAll('tr');
    rows.forEach(r => {
        const text = r.innerText.toLowerCase();
        r.style.display = text.includes(query) ? '' : 'none';
    });
};

window.sendDataToKernel = () => {
    const selector = document.getElementById('ds-selector');
    const key = selector ? selector.value : 'ehr';
    const data = studioDatasets[key] || studioDatasets.ehr;

    const sampleCode = `# Auto-Generated Pandas Code for Dataset '${key.toUpperCase()}'
import pandas as pd
import numpy as np

# Load dataset into Pandas DataFrame
data = ${JSON.stringify(data, null, 4)}

df = pd.DataFrame(data)

print("=== DATASET OVERVIEW ===")
print(df.info())

print("\n=== SUMMARY STATISTICS ===")
print(df.describe(include='all'))
`;

    window.toggleTerminal();
    setTimeout(() => {
        if (window.PythonEngine && PythonEngine.editor) {
            PythonEngine.editor.setValue(sampleCode);
            triggerHaptic('medium');
        }
    }, 400);
};



// ============================================================================
// 🏆 WELCOME PORTAL & ONBOARDING PIPELINE
// ============================================================================
window.showWelcomePortal = () => {
    let welcome = document.getElementById('welcome-portal-overlay');
    if (!welcome) {
        welcome = document.createElement('div');
        welcome.id = 'welcome-portal-overlay';
        document.body.appendChild(welcome);
    }

    welcome.style.cssText = `
        position: fixed; inset: 0; z-index: 999999;
        background: radial-gradient(circle at center, rgba(15, 23, 42, 0.98) 0%, rgba(5, 8, 17, 1) 100%);
        backdrop-filter: blur(25px); -webkit-backdrop-filter: blur(25px);
        display: flex; align-items: center; justify-content: center; padding: 20px;
        overflow-y: auto; animation: fadeIn 0.4s ease;
    `;

    welcome.innerHTML = `
        <div class="welcome-card glass-refractive" style="max-width: 850px; width: 100%; padding: 40px 30px; border-radius: 24px; border: 1px solid rgba(6,182,212,0.4); text-align: center; background: rgba(10, 15, 28, 0.85); box-shadow: 0 25px 60px rgba(0,0,0,0.9), 0 0 50px rgba(6,182,212,0.15); position: relative; margin: auto;">
            
            <div style="width: 70px; height: 70px; margin: 0 auto 20px; background: rgba(6,182,212,0.1); border-radius: 20px; display: flex; align-items: center; justify-content: center; border: 1px solid var(--accent-cyan); box-shadow: 0 0 20px rgba(6,182,212,0.3);">
                <img src="logo.png" alt="Logo" style="width: 42px;">
            </div>

            <h1 class="text-gradient" style="font-family: 'Space Grotesk'; font-size: clamp(2.2rem, 5vw, 3.5rem); margin: 0 0 10px; font-weight: 700; letter-spacing: -1px; line-height: 1.1;">
                WELCOME TO DATAVITALS OS
            </h1>
            
            <div style="font-family: 'JetBrains Mono'; color: var(--accent-cyan); font-size: clamp(0.85rem, 2vw, 1rem); margin-bottom: 24px; letter-spacing: 2px;">
                // ZERO TO HERO: HEALTHCARE DATA SCIENCE & AI ECOSYSTEM
            </div>

            <p style="color: var(--text-secondary); font-family: 'Space Grotesk'; font-size: 1.05rem; line-height: 1.6; max-width: 650px; margin: 0 auto 30px;">
                Master 52 weeks of structured computer science, clinical database systems, applied statistics, machine learning, and generative AI. Built for non-tech beginners and future AI leaders.
            </p>

            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 16px; margin-bottom: 36px; text-align: left;">
                <div class="glass-refractive" style="padding: 18px; border-radius: 14px; border: 1px solid rgba(255,255,255,0.08); background: rgba(0,0,0,0.3);">
                    <div style="font-size: 1.5rem; margin-bottom: 8px;">🎓</div>
                    <div style="font-family: 'Space Grotesk'; font-weight: 700; color: white; font-size: 0.95rem;">52-Week Curriculum</div>
                    <div style="font-size: 0.78rem; color: var(--text-muted); margin-top: 4px; font-family: 'Space Grotesk';">364 daily lessons from basic Excel & SQL to PyTorch & RAG.</div>
                </div>
                <div class="glass-refractive" style="padding: 18px; border-radius: 14px; border: 1px solid rgba(255,255,255,0.08); background: rgba(0,0,0,0.3);">
                    <div style="font-size: 1.5rem; margin-bottom: 8px;">⚡</div>
                    <div style="font-family: 'Space Grotesk'; font-weight: 700; color: white; font-size: 0.95rem;">Live Code Kernel</div>
                    <div style="font-size: 0.78rem; color: var(--text-muted); margin-top: 4px; font-family: 'Space Grotesk';">Execute Python & SQL directly in Monaco + Pyodide terminal.</div>
                </div>
                <div class="glass-refractive" style="padding: 18px; border-radius: 14px; border: 1px solid rgba(255,255,255,0.08); background: rgba(0,0,0,0.3);">
                    <div style="font-size: 1.5rem; margin-bottom: 8px;">💼</div>
                    <div style="font-family: 'Space Grotesk'; font-weight: 700; color: white; font-size: 0.95rem;">GitHub Portfolio Builder</div>
                    <div style="font-size: 0.78rem; color: var(--text-muted); margin-top: 4px; font-family: 'Space Grotesk';">Generate resume project documentation with 1 click.</div>
                </div>
            </div>

            <div style="display: flex; flex-direction: column; gap: 14px; align-items: center;">
                <button onclick="window.startGuidedOnboarding()" class="btn-neural" style="padding: 16px 36px; font-family: 'Space Grotesk'; font-size: 1.1rem; font-weight: 700; background: var(--accent-cyan); color: #000; border-radius: 12px; cursor: pointer; box-shadow: 0 0 30px rgba(6,182,212,0.4); width: 100%; max-width: 420px; transition: transform 0.2s;">
                    🚀 START LEARNING (BEGIN GUIDED TOUR)
                </button>

                <button onclick="window.dismissWelcomeAndBoot()" style="background: transparent; border: none; color: var(--text-muted); font-family: 'Space Grotesk'; font-size: 0.9rem; cursor: pointer; padding: 8px 16px; text-decoration: underline;">
                    Skip Tour & Go Straight to Dashboard →
                </button>
            </div>
        </div>
    `;
};

window.startGuidedOnboarding = () => {
    const welcome = document.getElementById('welcome-portal-overlay');
    if (welcome) welcome.remove();

    window.bootApplication();

    setTimeout(() => {
        if (window.SpotlightTour) {
            window.SpotlightTour.init();
        }
    }, 400);
};

window.dismissWelcomeAndBoot = () => {
    const welcome = document.getElementById('welcome-portal-overlay');
    if (welcome) welcome.remove();
    window.bootApplication();
};



// ============================================================================
// 📱 MOBILE DRAWER & BOTTOM NAV CONTROLLERS (v9.0)
// ============================================================================
window.toggleMobileCurriculumDrawer = (forceState) => {
    const sidebar = document.querySelector('.card-sidebar');
    const backdrop = document.getElementById('mobile-drawer-backdrop');
    if (!sidebar) return;

    const isOpen = sidebar.classList.contains('mobile-open');
    const shouldOpen = forceState !== undefined ? forceState : !isOpen;

    if (shouldOpen) {
        sidebar.classList.add('mobile-open');
        if (backdrop) backdrop.style.display = 'block';
    } else {
        sidebar.classList.remove('mobile-open');
        if (backdrop) backdrop.style.display = 'none';
    }
    triggerHaptic('light');
};

window.showActiveLessonMobile = () => {
    window.toggleMobileCurriculumDrawer(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    triggerHaptic('light');
};



// ============================================================================
// 📱 UP/DOWN LESSON SLIDER & SWIPE CONTROLLERS (v9.5)
// ============================================================================
window.activeCurrentDayId = 'week-1-d1';

window.getAllFlattenedRoadmapDays = () => {
    if (!window.roadmap) return [];
    const list = [];
    window.roadmap.forEach(week => {
        week.days.forEach(day => {
            list.push({ weekId: week.id, dayId: day.id, lessonId: day.lessonId, title: day.title });
        });
    });
    return list;
};

window.navigateLessonStep = (delta) => {
    const allDays = window.getAllFlattenedRoadmapDays();
    if (allDays.length === 0) return;

    const currentId = window.activeCurrentDayId || 'week-1-d1';
    let idx = allDays.findIndex(d => d.dayId === currentId);
    if (idx === -1) idx = 0;

    const targetIdx = Math.max(0, Math.min(allDays.length - 1, idx + delta));
    const target = allDays[targetIdx];

    window.activeCurrentDayId = target.dayId;
    handleSidebarClick(target.weekId, target.dayId, target.lessonId, null);

    window.scrollTo({ top: 0, behavior: 'smooth' });
    triggerHaptic('medium');
};

// Track day in handleSidebarClick



// Mobile Drawer Touch Swipe Listener
window.addEventListener('DOMContentLoaded', () => {
    const handleBar = document.querySelector('.mobile-drawer-handle-bar');
    if (!handleBar) return;

    let touchStartY = 0;
    let touchMoveY = 0;

    handleBar.addEventListener('touchstart', (e) => {
        touchStartY = e.touches[0].clientY;
    }, { passive: true });

    handleBar.addEventListener('touchmove', (e) => {
        touchMoveY = e.touches[0].clientY;
    }, { passive: true });

    handleBar.addEventListener('touchend', () => {
        // If swiped down by 40px or more, close drawer
        if (touchMoveY - touchStartY > 40) {
            window.toggleMobileCurriculumDrawer(false);
        }
    });
});
