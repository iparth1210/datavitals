/**
 * 🕉️ DataVitals Traditional Onboarding
 * Featuring your personalized Gujarati Guide
 */

const Onboarding = {
    userName: localStorage.getItem('datavitals_user_name') || '',
    isTourComplete: localStorage.getItem('datavitals_tour_complete') === 'true',

    init() {
        if (!this.userName) {
            this.showWelcome();
        } else if (!this.isTourComplete) {
            this.startTour();
        }
    },

    showWelcome() {
        const overlay = document.createElement('div');
        overlay.id = 'onboarding-overlay';
        overlay.className = 'onboarding-overlay';

        overlay.innerHTML = `
            <div class="onboarding-card">
                <div class="onboarding-mascot">
                    <img src="assets/gujarati_guide.png" alt="Gujarati Guide">
                </div>
                <div class="onboarding-content">
                    <h2>🙏 Kem Cho! Welcome to DataVitals</h2>
                    <p>I am your guide on this journey to mastering healthcare intelligence. I follow the true Gujarati tradition of hospitality.</p>
                    <p>Before we begin our "Yatra" (journey), may I ask for your name?</p>
                    <div class="onboarding-input-group">
                        <input type="text" id="onboarding-name-input" placeholder="Enter your name" autofocus>
                        <button onclick="Onboarding.saveName()" class="btn btn-primary">Continue</button>
                    </div>
                </div>
            </div>
        `;
        document.body.appendChild(overlay);

        // Add CSS for onboarding
        this.injectStyles();
    },

    saveName() {
        const nameInput = document.getElementById('onboarding-name-input');
        const name = nameInput.value.trim();
        if (name) {
            this.userName = name;
            localStorage.setItem('datavitals_user_name', name);
            this.updateGreeting();
        } else {
            alert("Please enter your name so I can welcome you properly!");
        }
    },

    updateGreeting() {
        const content = document.querySelector('.onboarding-content');
        content.innerHTML = `
            <h2>Namaste, ${this.userName}!</h2>
            <p>It is an honor to have you here. In our culture, we say 'Athiti Devo Bhava' - the guest is God.</p>
            <p>I would like to show you around your new professional workspace. Shall we explore?</p>
            <div class="onboarding-btn-group">
                <button onclick="Onboarding.startTour()" class="btn btn-primary">Start Tour</button>
                <button onclick="Onboarding.skipTour()" class="btn btn-secondary">Skip for now</button>
            </div>
        `;
    },

    startTour() {
        const overlay = document.getElementById('onboarding-overlay');
        if (overlay) overlay.remove();

        this.currentStep = 0;
        this.steps = [
            {
                element: '.sidebar-v7',
                title: 'Navigation Hub',
                content: 'This is where you switch between the Roadmap, Library, and your Stats. All your essentials are here.',
                position: 'right'
            },
            {
                element: '.roadmap-container',
                title: 'Your Learning Path',
                content: 'Our 52-week curriculum is organized here. Each week builds upon the last in our unique Quad-Track methodology.',
                position: 'bottom'
            },
            {
                element: '.user-profile-v7',
                title: 'Your Identity',
                content: 'Access your profile and sign out here. Your progress is saved automatically as you learn.',
                position: 'top'
            }
        ];

        this.showTourStep();
    },

    showTourStep() {
        this.removeTourTip();

        if (this.currentStep >= this.steps.length) {
            this.completeTour();
            return;
        }

        const step = this.steps[this.currentStep];
        const target = document.querySelector(step.element);

        if (!target) {
            this.currentStep++;
            this.showTourStep();
            return;
        }

        const tip = document.createElement('div');
        tip.id = 'tour-tip';
        tip.className = 'tour-tip';

        tip.innerHTML = `
            <div class="tour-tip-header">
                <img src="assets/gujarati_guide.png" class="tour-mini-mascot">
                <span>${step.title}</span>
            </div>
            <div class="tour-tip-content">${step.content}</div>
            <div class="tour-tip-footer">
                <button onclick="Onboarding.nextStep()" class="btn btn-secondary btn-sm">Next →</button>
            </div>
        `;

        document.body.appendChild(tip);
        this.positionTip(target, tip, step.position);
        target.classList.add('tour-highlight');
    },

    nextStep() {
        const prevTarget = document.querySelector(this.steps[this.currentStep].element);
        if (prevTarget) prevTarget.classList.remove('tour-highlight');

        this.currentStep++;
        this.showTourStep();
    },

    positionTip(target, tip, position) {
        const rect = target.getBoundingClientRect();
        let top, left;

        switch (position) {
            case 'right':
                top = rect.top + (rect.height / 2) - (tip.offsetHeight / 2);
                left = rect.right + 20;
                break;
            case 'bottom':
                top = rect.bottom + 20;
                left = rect.left + (rect.width / 2) - (tip.offsetWidth / 2);
                break;
            case 'top':
                top = rect.top - tip.offsetHeight - 20;
                left = rect.left + (rect.width / 2) - (tip.offsetWidth / 2);
                break;
        }

        tip.style.top = `${Math.max(10, top)}px`;
        tip.style.left = `${Math.max(10, left)}px`;
    },

    removeTourTip() {
        const tip = document.getElementById('tour-tip');
        if (tip) tip.remove();
    },

    skipTour() {
        const overlay = document.getElementById('onboarding-overlay');
        if (overlay) overlay.remove();
        this.completeTour();
    },

    completeTour() {
        localStorage.setItem('datavitals_tour_complete', 'true');
        this.isTourComplete = true;
        this.removeTourTip();

        // Final toast from the guide
        if (window.showToast) {
            window.showToast(`Dhanyawad (Thank you), ${this.userName}! Your workspace is ready.`, 'info');
        }
    },

    injectStyles() {
        if (document.getElementById('onboarding-styles')) return;
        const style = document.createElement('style');
        style.id = 'onboarding-styles';
        style.innerHTML = `
            .onboarding-overlay {
                position: fixed; top: 0; left: 0; width: 100%; height: 100%;
                background: rgba(0,0,0,0.85); backdrop-filter: blur(8px);
                z-index: 10000; display: flex; align-items: center; justify-content: center;
                animation: fadeIn 0.5s ease;
            }
            .onboarding-card {
                background: #1e293b; border: 1px solid rgba(94, 234, 212, 0.2);
                border-radius: 20px; width: 90%; max-width: 800px;
                display: flex; overflow: hidden; box-shadow: 0 25px 50px -12px rgba(0,0,0,0.5);
            }
            .onboarding-mascot {
                width: 40%; background: #0f172a; display: flex; align-items: center; justify-content: center;
            }
            .onboarding-mascot img { width: 100%; height: 100%; object-fit: cover; }
            .onboarding-content { padding: 40px; width: 60%; color: white; }
            .onboarding-content h2 { color: var(--accent-cyan); margin-bottom: 20px; font-size: 1.8rem; }
            .onboarding-content p { color: #94a3b8; line-height: 1.6; margin-bottom: 15px; }
            .onboarding-input-group { margin-top: 30px; display: flex; gap: 10px; }
            .onboarding-input-group input {
                flex: 1; background: #0f172a; border: 1px solid #334155;
                border-radius: 8px; padding: 12px; color: white;
            }
            .onboarding-btn-group { margin-top: 30px; display: flex; gap: 15px; }
            
            .tour-tip {
                position: fixed; z-index: 10001; background: #1e293b;
                border: 1px solid var(--accent-cyan); border-radius: 12px;
                padding: 15px; width: 300px; box-shadow: 0 10px 25px rgba(0,0,0,0.4);
                animation: popIn 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
                color: white;
            }
            .tour-tip-header { display: flex; align-items: center; gap: 10px; margin-bottom: 10px; font-weight: 600; color: var(--accent-cyan); }
            .tour-mini-mascot { width: 30px; height: 30px; border-radius: 50%; object-fit: cover; border: 1px solid var(--accent-cyan); }
            .tour-tip-content { font-size: 0.9rem; color: #94a3b8; line-height: 1.4; margin-bottom: 15px; }
            .tour-highlight { position: relative; z-index: 10001 !important; box-shadow: 0 0 0 4px var(--accent-cyan), 0 0 30px rgba(94, 234, 212, 0.5) !important; pointer-events: none; transition: all 0.3s ease; }
            
            @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
            @keyframes popIn { from { transform: scale(0.8); opacity: 0; } to { transform: scale(1); opacity: 1; } }
        `;
        document.head.appendChild(style);
    }
};

window.Onboarding = Onboarding;
