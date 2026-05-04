const window = { addEventListener: () => {}, navigator: {} }; const document = { addEventListener: () => {}, getElementById: () => null, querySelectorAll: () => [], createElement: () => ({ style: {} }), documentElement: { style: { setProperty: () => {} } } }; const localStorage = { getItem: () => null };
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
    console.log("[Neural_Link]: System Ready. Initializing Kernel...");
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
        if (legacySplash) legacySplash.classList.add('hidden');

        renderSidebarCurriculum();
        initCommandPalette();
        loadDashboardCore();
        console.log("[Neural_Link]: Welcome back, Architect.");

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

        // Trigger Phase 2.4: Strategic Spotlight
        setTimeout(() => {
            if (window.SpotlightTour) {
                window.SpotlightTour.init();
            }
        }, 1200);
    } catch (renderError) {
        console.error("[Neural_Link]: Critical Render Error:", renderError);
    }
};

window.onLoginSuccess = () => {
    window.bootApplication();
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
            btn.innerHTML = grid.classList.contains('sidebar-minimized') ? '???' : '???';
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

function triggerNeuralSurge() {
    const surge = document.createElement('div');
    surge.className = 'neural-surge-overlay';
    document.body.appendChild(surge);

    triggerHaptic('medium');

    setTimeout(() => {
        surge.classList.add('active');
        setTimeout(() => {
            surge.remove();
        }, 1000);
    }, 10);
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
            const isAvailable = unlocked[week.days[0].id];
            const weekNum = index + 1;
            
            return `
            <div class="sidebar-module-group" style="margin-bottom: 8px;">
                <div class="sidebar-module-item ${isAvailable ? '' : 'locked'}" id="sidebar-mod-${week.id}" style="opacity: ${isAvailable ? 1 : 0.5}" onclick="${isAvailable ? `toggleAccordion('${week.id}', event)` : ''}">
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 4px;">
                        <span class="module-subtitle-text" style="font-family: 'JetBrains Mono'; color: var(--accent-cyan); font-size: 0.7rem;">MODULE_${weekNum.toString().padStart(2, '0')}</span>
                        <span id="accordion-icon-${week.id}" style="transition: transform 0.3s;">${isAvailable ? '???' : '????'}</span>
                    </div>
                    <div class="module-title-text" style="font-family: 'Space Grotesk'; font-weight: 700; color: white; font-size: 0.95rem; text-overflow: ellipsis; white-space: nowrap; overflow: hidden;">${week.title}</div>
                </div>
                <div class="sidebar-days-container" id="days-${week.id}">
                    ${week.days.map((day, dayIndex) => {
                        const isDayAvail = unlocked[day.id];
                        return `<div class="sidebar-day-item ${isDayAvail ? '' : 'locked-day'}" onclick="${isDayAvail ? `handleSidebarClick('${week.id}', '${day.id}', '${day.lessonId}', event)` : ''}">
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
                <button onclick="renderRoadmap()" class="btn-neural" style="font-size: 0.8rem; padding: 10px 20px; border-radius: 8px;">??? ESC_TO_ROADMAP</button>
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
        const icons = ['????', '????', '????', '??????', '????', '????', '???'];
        const dayIcon = icons[index % icons.length];

        return `
                    <div class="timeline-node glass-refractive ${isUnlocked ? 'unlocked' : 'locked'}" 
                         style="transition: all 0.3s var(--spring-ease); transform: translateX(0); padding: 20px 24px; border-radius: 12px; display: flex; align-items: center; gap: 24px; cursor: pointer; z-index: 1; background: ${isUnlocked ? 'rgba(10,10,10,0.8)' : 'rgba(5,5,5,0.4)'}; border: 1px solid ${isUnlocked ? 'rgba(255,255,255,0.1)' : 'rgba(255,255,255,0.02)'};"
                         onmouseover="if(${isUnlocked}) { this.style.transform='translateX(8px)'; this.style.borderColor='rgba(6,182,212,0.4)'; }"
                         onmouseout="if(${isUnlocked}) { this.style.transform='translateX(0)'; this.style.borderColor='rgba(255,255,255,0.1)'; }"
                         onclick="handleDayClick('${day.id}', '${day.lessonId}')">
                         
                        <!-- Node Marker -->
                        <div class="node-marker" style="width: 32px; height: 32px; border-radius: 50%; background: ${isUnlocked ? 'var(--bg-surface)' : 'rgba(0,0,0,0.5)'}; border: 2px solid ${isUnlocked ? 'var(--accent-cyan)' : 'rgba(255,255,255,0.1)'}; display: flex; align-items: center; justify-content: center; z-index: 2; flex-shrink: 0; box-shadow: ${isUnlocked ? '0 0 15px rgba(6,182,212,0.4)' : 'none'};">
                            <span style="font-size: 0.8rem;">${isUnlocked ? '???' : '????'}</span>
                        </div>

                        <!-- Content -->
                        <div style="flex: 1; display: flex; justify-content: space-between; align-items: center;">
                            <div>
                                <div style="font-family: 'JetBrains Mono'; font-size: 0.7rem; color: var(--accent-cyan); letter-spacing: 2px; margin-bottom: 4px; opacity: 0.8;">DAY_0${index + 1} // ${day.id}</div>
                                <h3 style="font-family: 'Plus Jakarta Sans'; font-weight: 600; font-size: 1.15rem; color: ${isUnlocked ? 'white' : 'var(--text-muted)'}; margin: 0;">${day.title}</h3>
                            </div>
                            
                            <!-- Status -->
                            <div style="display: flex; align-items: center; gap: 16px;">
                                ${!isUnlocked ? '<span style="color: var(--text-muted); font-size: 0.8rem; font-family: JetBrains Mono;">[LOCKED]</span>' : '<span style="color: var(--success); font-family: JetBrains Mono; font-size: 0.8rem;">[ENTER_NODE] ???</span>'}
                            </div>
                        </div>
                    </div>
                `}).join('')}
            </div>
        </div>
    `;
}

function handleDayClick(dayId, lessonId) {
    const unlocked = loadProgress();
    if (!unlocked[dayId]) {
        alert("???? Complete the previous day to unlock this!");
        return;
    }
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
        // Escape to close palette
        if (e.key === 'Escape') {
            const overlay = document.getElementById('cmd-palette-overlay');
            if (overlay && !overlay.classList.contains('hidden')) {
                toggleCommandPalette();
            }
        }
    });

    const input = document.getElementById('cmd-palette-input');
    if (input) {
        input.addEventListener('input', (e) => {
            renderCommandPaletteResults(e.target.value);
        });
    }
}

function toggleCommandPalette() {
    const overlay = document.getElementById('cmd-palette-overlay');
    const input = document.getElementById('cmd-palette-input');
    if (!overlay) return;

    if (overlay.classList.contains('hidden')) {
        overlay.classList.remove('hidden');
        input.value = '';
        renderCommandPaletteResults('');
        setTimeout(() => input.focus(), 50);
        triggerHaptic('medium');
    } else {
        overlay.classList.add('hidden');
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
        { title: 'Toggle Terminal', action: 'window.toggleTerminal()', icon: '????' },
        { title: 'Toggle AI Overlay', action: 'window.toggleAuraSidebar()', icon: '???' },
        { title: 'View Progress Dashboard', action: 'window.showMyProgress()', icon: '????' },
        { title: 'View Data Library', action: 'window.showResources()', icon: '????' }
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
                        <span style="margin-right: 16px; font-size: 1.2rem; color: var(--accent-cyan);">???</span>
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
                            ? state.badges.map(b => `<div style="text-align: center; padding: 16px; background: rgba(255,255,255,0.05); border-radius: 12px; border: 1px solid rgba(255,255,255,0.1);"><div style="font-size: 2rem; margin-bottom: 8px;">????</div><div style="font-size: 0.6rem; font-family: 'JetBrains Mono';">${b}</div></div>`).join('') 
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
    if (!app) return;

    app.innerHTML = `
        <div class="data-library" style="padding: 40px; animation: fadeIn 0.5s;">
            <h2 class="text-gradient" style="font-family: 'Space Grotesk'; font-size: 2.5rem; margin-bottom: 30px;">DATA_LIBRARY</h2>
            <div style="font-family: 'JetBrains Mono'; color: var(--text-muted); margin-bottom: 40px;">// Essential reference documents and cheat sheets.</div>
            
            <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 24px;">
                <div class="glass-refractive" style="padding: 24px; border-radius: 16px; cursor: pointer; transition: all 0.3s;" onmouseover="this.style.transform='translateY(-4px)'; this.style.borderColor='var(--accent-cyan)'" onmouseout="this.style.transform='translateY(0)'; this.style.borderColor='rgba(255,255,255,0.1)'">
                    <div style="font-size: 2.5rem; margin-bottom: 16px;">????</div>
                    <h3 style="font-family: 'Space Grotesk'; margin-bottom: 8px;">Python Syntax Matrix</h3>
                    <p style="color: var(--text-muted); font-size: 0.8rem;">Core syntax, data structures, and standard libraries.</p>
                </div>
                
                <div class="glass-refractive" style="padding: 24px; border-radius: 16px; cursor: pointer; transition: all 0.3s;" onmouseover="this.style.transform='translateY(-4px)'; this.style.borderColor='var(--accent-pink)'" onmouseout="this.style.transform='translateY(0)'; this.style.borderColor='rgba(255,255,255,0.1)'">
                    <div style="font-size: 2.5rem; margin-bottom: 16px;">???????</div>
                    <h3 style="font-family: 'Space Grotesk'; margin-bottom: 8px;">SQL Query Protocols</h3>
                    <p style="color: var(--text-muted); font-size: 0.8rem;">Joins, aggregations, window functions, and CTEs.</p>
                </div>
                
                <div class="glass-refractive" style="padding: 24px; border-radius: 16px; cursor: pointer; transition: all 0.3s;" onmouseover="this.style.transform='translateY(-4px)'; this.style.borderColor='var(--success)'" onmouseout="this.style.transform='translateY(0)'; this.style.borderColor='rgba(255,255,255,0.1)'">
                    <div style="font-size: 2.5rem; margin-bottom: 16px;">????</div>
                    <h3 style="font-family: 'Space Grotesk'; margin-bottom: 8px;">Excel Function Architecture</h3>
                    <p style="color: var(--text-muted); font-size: 0.8rem;">VLOOKUP, INDEX/MATCH, and pivot table automation.</p>
                </div>
            </div>
        </div>
    `;
    triggerHaptic('light');
};

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
                    <h4>???? 1. Tech Core</h4>
                    <p>${techContent}</p>
                </div>
                <div class="track-section health">
                    <h4>???? 2. Health Systems</h4>
                    <p>${healthContent}</p>
                </div>
                <div class="track-section bio">
                    <h4>???? 3. Bio-Science</h4>
                    <p>${bioContent}</p>
                </div>
                <div class="track-section lab">
                    <h4>???? 4. Project Lab</h4>
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
    if (!lesson) return;

    window.activeLessonContext = lesson; // AURA AI CONTEXT HOOK

    const isPythonLesson = lesson.type === 'python';

    // Safety check for the back button
    let parentWeekId = 'week-1'; // fallback
    if (dayId) {
        parentWeekId = getWeekIdForDay(dayId); // Robust resolution of the parent Week
    }

    const app = document.getElementById('app');
    if (!app) return;
    app.innerHTML = `
        <div class="lesson-mission-control" style="padding-bottom: 60px;">
            <div class="lesson-header-row" style="display: flex; align-items: center; margin-bottom: 32px; gap: 24px;">
                <button onclick="renderWeekView('${parentWeekId}')" class="btn-neural" style="font-size: 0.8rem; padding: 10px 20px; border-radius: 8px;">??? ESC_TO_NODE</button>
                <div style="flex: 1;">
                    <h2 class="text-gradient" style="font-family: 'Space Grotesk'; font-size: 1.8rem; margin: 0; font-weight: 700;">${lesson.title}</h2>
                    <span style="font-family: 'JetBrains Mono'; font-size: 0.8rem; color: var(--accent-cyan);">NODE_ID: ${lesson.id} // MISSION_STATUS: ACTIVE</span>
                </div>
            </div>

            <div class="lesson-main-layout" style="display: grid; grid-template-columns: 7fr 3fr; gap: 32px; height: calc(100vh - 200px); min-height: 600px;">
                
                <!-- 70% PRIMARY STREAM -->
                <div class="lesson-primary-stream" style="display: flex; flex-direction: column; overflow-y: auto; padding-right: 16px;">
                    <div class="video-refractive-frame glass-refractive" style="border-radius: 16px; overflow: hidden; background: #000; aspect-ratio: 16/9; width: 100%;">
                        <iframe src="${lesson.video}" style="width: 100%; height: 100%;" frameborder="0" allowfullscreen></iframe>
                    </div>
                    
                    <div class="lesson-story-glass glass-refractive" style="margin-top: 32px; padding: 32px; border-radius: 16px;">
                        <h3 style="color: var(--accent-cyan); margin-bottom: 24px; font-family: 'JetBrains Mono'; font-size: 0.9rem;">> MISSION_BRIEFING</h3>
                        <div class="holographic-quad-track" style="display: grid; grid-template-columns: 1fr 1fr; gap: 24px;">
                            <div class="track-node">
                                <h4 style="font-family: 'JetBrains Mono'; font-size: 0.75rem; color: var(--text-muted); opacity: 0.8; margin-bottom: 8px;">???? TECH_CORE</h4>
                                <p style="font-size: 0.95rem; line-height: 1.6; color: var(--text-secondary);">${extractTrackText(lesson.story, 'tech')}</p>
                            </div>
                            <div class="track-node">
                                <h4 style="font-family: 'JetBrains Mono'; font-size: 0.75rem; color: var(--text-muted); opacity: 0.8; margin-bottom: 8px;">???? CLINICAL_BASE</h4>
                                <p style="font-size: 0.95rem; line-height: 1.6; color: var(--text-secondary);">${extractTrackText(lesson.story, 'health')}</p>
                            </div>
                            <div class="track-node">
                                <h4 style="font-family: 'JetBrains Mono'; font-size: 0.75rem; color: var(--text-muted); opacity: 0.8; margin-bottom: 8px;">???? BIO_SYNC</h4>
                                <p style="font-size: 0.95rem; line-height: 1.6; color: var(--text-secondary);">${extractTrackText(lesson.story, 'bio')}</p>
                            </div>
                            <div class="track-node">
                                <h4 style="font-family: 'JetBrains Mono'; font-size: 0.75rem; color: var(--text-muted); opacity: 0.8; margin-bottom: 8px;">???? LAB_PROTOCOL</h4>
                                <p style="font-size: 0.95rem; line-height: 1.6; color: var(--text-secondary);">${extractTrackText(lesson.story, 'lab')}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- 30% INTERACTIVE LAB -->
                <div class="lesson-vitals-sidebar" style="height: 100%;">
                    <div class="glass-refractive" style="padding: 32px; height: 100%; border-radius: 16px; display: flex; flex-direction: column;">
                         <h3 style="color: var(--accent-violet); margin-bottom: 24px; font-family: 'JetBrains Mono'; font-size: 0.9rem;">> NEURAL_LAB</h3>
                         
                         <div id="neural-lab-interface" style="flex: 1; display: flex; flex-direction: column; overflow-y: auto;">
                            ${isPythonLesson ? `
                                <div id="monaco-container" class="editor-pane" style="flex: 1; min-height: 250px; border: 1px solid rgba(255,255,255,0.1); border-radius: 12px; margin-bottom: 24px;"></div>
                                <div class="lab-controls" style="display: flex; gap: 12px; margin-bottom: 24px;">
                                    <button id="term-run-btn" onclick="PythonEngine.run()" class="btn-neural" style="font-size: 0.8rem; padding: 10px 20px; width: 100%;">??? EXECUTE_CODE</button>
                                </div>
                                <div id="term-output" class="console-pane glass-refractive" style="height: 160px; font-family: 'JetBrains Mono'; font-size: 0.75rem; padding: 16px; border-radius: 12px; border: 1px solid rgba(255,255,255,0.05);">
                                    <div class="term-line info">> Kernel linked. Awaiting input.</div>
                                </div>
                            ` : `
                                <div class="interaction-node" style="flex: 1; display: flex; flex-direction: column;">
                                    ${renderTable(lesson.data)}
                                    <div id="feedback" class="feedback-box glass-refractive" style="margin-top: 24px; padding: 24px; font-size: 0.9rem; color: var(--text-secondary); border: 1px dashed rgba(6,182,212,0.3); border-radius: 12px; background: rgba(0,0,0,0.3);">
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
}

// Utility to extract text from the procedural HTML strings
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
function getWeekIdForDay(currentDayId) {
    for (let w = 0; w < window.roadmap.length; w++) {
        const week = window.roadmap[w];
        const dIndex = week.days.findIndex(d => d.id === currentDayId);
        if (dIndex !== -1) {
            return week.id;
        }
    }
    return 'week-1'; // fallback
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
                                        Next Lesson <span style="font-size: 1.1em">???</span>
                                    </button>
                                `;
                            }
                        } catch (innerErr) {
                            console.error("Navigation Error:", innerErr);
                        }

                        feedbackEl.innerHTML = `
                            <div style="display:flex; flex-direction: column; align-items:center; justify-content:center; gap:12px;">
                                <div style="font-size: 1.1rem; font-weight: 600;">??? Correct Analysis</div>
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
                                ??? Correct Answer recorded.<br>
                                <span style="font-size:0.8em; opacity:0.8">System Warning: Module transition failed (${e.message}). Please refresh.</span>
                            </div>
                        `;
                    }
                } else {
                    feedbackEl.className = 'feedback-box error';
                    feedbackEl.innerHTML = `??? ${lesson.task.errorMessage} `;
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

// Fun Confetti Effect! ????
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
                        <span style="opacity:0.6;">????</span> ${day.dayTitle}
                    </h3>
                    <div class="resources-list" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 10px;">
            `;

            day.resources.forEach(res => {
                let icon = '????';
                if (res.type === 'book') icon = '????';
                if (res.type === 'video') icon = '????';
                if (res.type === 'tool') icon = '???????';
                if (res.type === 'course') icon = '????';

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
                        <span style="opacity:0.3;">???</span>
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
    app.innerHTML = html;
}

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
                <div style="font-size:4rem; margin-bottom:10px;">????</div>
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
        if (grid.classList.contains('aura-minimized')) {
            toggleIcon.innerText = '???';
        } else {
            toggleIcon.innerText = '???';
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
    messagesContainer.appendChild(typingDiv);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;

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
    window.StorageHub.save('datavitals_progress_default', progress);
    return "Next Module Decrypted Successfully.";
}

function loadProgress() {
    // Returns an object like { 'week-1-d1': true, 'week-1-d2': true }
    // Initialize with 'week-1-d1' if no progress is found
    const storedProgress = window.StorageHub.load('datavitals_progress_default', { 'week-1-d1': true });
    return storedProgress;
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
            <div class="quick-link" onclick="window.open('https://python.org', '_blank')">???? PYTHON_DOCS</div>
            <div class="quick-link" onclick="window.open('https://hl7.org', '_blank')">???? HL7_STANDARDS</div>
            <div class="quick-link" onclick="showResources()">???? VIEW_LIBRARY_OVR</div>
        `;
    }
}

// Init
try {
    console.log("[Forensic]: System Initializing...");

    // 1. Defined hooks first
    window.onLoginSuccess = () => {
        console.log("[Forensic]: Login Success Triggered.");
        if (window.GuidedLoading) {
            window.GuidedLoading.init();
        } else {
            window.bootApplication();
        }
    };

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

    // 5. Delayed Narrative Entry
    setTimeout(() => {
        const splash = document.getElementById('splash-screen');
        if (splash) splash.remove();

        if (window.NarrativeEngine) {
            window.NarrativeEngine.init();
        }
    }, 500);

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
            <div class="nav-item-killer" onclick="window.authService.loginWithGoogle()" title="Neural Login" style="color: var(--accent-cyan);">????</div>
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
