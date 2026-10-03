/**
 * 🔦 SPOTLIGHT TOUR v2.0
 * High-precision guided walkthrough for the DataVitals OS.
 */

class SpotlightTour {
    constructor() {
        this.steps = [
            {
                element: 'sidebar-curriculum',
                title: '📚 1. The 52-Week Curriculum',
                content: 'Access all 52 weeks (364 days) of structured modules from Excel basics to PyTorch & RAG.'
            },
            {
                element: 'app',
                title: '💻 2. Main Learning Workspace',
                content: 'Your full-width interactive workspace. Read quad-track stories and click ⚡ Launch Code Kernel to execute Python & SQL.'
            },
            {
                element: 'page-title',
                title: '🧪 3. Top Action Tools',
                content: 'Access the Data Studio CSV Playground, Formula CheatSheets, and GitHub Portfolio Builder directly from the header.'
            },
            {
                element: 'toggle-aura-btn',
                title: '🤖 4. AI Companion',
                content: 'Click here anytime to engage the Aura AI assistant for real-time guidance.'
            }
        ];
        this.currentStep = 0;
        this.overlay = null;
        this.maskHole = null;
        this.card = null;
    }

    init() {
        console.log("Spotlight Tour Starting...");
        this.currentStep = 0;
        this.createTourElements();
        this.showStep(0);
    }

    createTourElements() {
        const existing = document.getElementById('tour-overlay');
        if (existing) existing.remove();

        const div = document.createElement('div');
        div.id = 'tour-overlay';
        div.style.cssText = `
            position: fixed;
            inset: 0;
            z-index: 200000;
            pointer-events: none;
            opacity: 0;
            transition: opacity 0.4s ease;
        `;
        div.innerHTML = `
            <svg style="position:absolute; width:100%; height:100%">
                <defs>
                    <mask id="spotlight-mask">
                        <rect width="100%" height="100%" fill="white" />
                        <rect id="mask-hole" x="0" y="0" width="0" height="0" fill="black" rx="12" />
                    </mask>
                </defs>
                <rect width="100%" height="100%" fill="rgba(0,0,0,0.82)" mask="url(#spotlight-mask)" style="pointer-events:auto;" />
            </svg>
            <div id="tour-card" style="
                position: absolute;
                background: #0f172a;
                border: 1px solid var(--accent-cyan);
                padding: 1.5rem;
                border-radius: 16px;
                width: 320px;
                max-width: 90vw;
                pointer-events: auto;
                box-shadow: 0 20px 40px rgba(0,0,0,0.8), 0 0 30px rgba(6,182,212,0.2);
                transition: all 0.4s ease;
            ">
                <h3 id="tour-title" style="color:var(--accent-cyan); margin-bottom:0.5rem; font-size:1.1rem; font-family:'Space Grotesk';"></h3>
                <p id="tour-content" style="color:var(--text-secondary); font-size:0.88rem; line-height:1.5; margin-bottom:1.2rem; font-family:'Space Grotesk';"></p>
                <div style="display:flex; justify-content:space-between; align-items:center;">
                    <span id="tour-progress" style="font-size:11px; color:var(--text-muted); font-family:'JetBrains Mono';">Step 1 of 4</span>
                    <button onclick="window.SpotlightTour.next()" style="
                        background: var(--accent-cyan);
                        color: #000;
                        border: none;
                        padding: 8px 18px;
                        border-radius: 8px;
                        cursor: pointer;
                        font-weight: 700;
                        font-family: 'Space Grotesk';
                        font-size: 0.85rem;
                    ">Next →</button>
                </div>
            </div>
        `;
        document.body.appendChild(div);
        this.overlay = div;
        this.maskHole = document.getElementById('mask-hole');
        this.card = document.getElementById('tour-card');

        requestAnimationFrame(() => this.overlay.style.opacity = '1');
    }

    showStep(idx) {
        if (idx >= this.steps.length) {
            this.finish();
            return;
        }

        const step = this.steps[idx];
        const target = document.getElementById(step.element) || document.querySelector(`.${step.element}`);

        if (!target) {
            console.warn(`Tour target ${step.element} not found. Skipping.`);
            this.next();
            return;
        }

        const rect = target.getBoundingClientRect();
        const padding = 10;

        if (this.maskHole) {
            this.maskHole.setAttribute('x', Math.max(0, rect.left - padding));
            this.maskHole.setAttribute('y', Math.max(0, rect.top - padding));
            this.maskHole.setAttribute('width', rect.width + padding * 2);
            this.maskHole.setAttribute('height', rect.height + padding * 2);
        }

        const titleEl = document.getElementById('tour-title');
        const contentEl = document.getElementById('tour-content');
        const progressEl = document.getElementById('tour-progress');

        if (titleEl) titleEl.innerText = step.title;
        if (contentEl) contentEl.innerText = step.content;
        if (progressEl) progressEl.innerText = `Step ${idx + 1} of ${this.steps.length}`;

        let cardTop = rect.bottom + 20;
        let cardLeft = rect.left + (rect.width / 2) - 160;

        if (cardTop + 220 > window.innerHeight) cardTop = Math.max(20, rect.top - 220);
        if (cardLeft < 20) cardLeft = 20;
        if (cardLeft + 320 > window.innerWidth) cardLeft = window.innerWidth - 340;

        if (this.card) {
            this.card.style.top = `${cardTop}px`;
            this.card.style.left = `${cardLeft}px`;
        }
    }

    next() {
        this.currentStep++;
        this.showStep(this.currentStep);
    }

    finish() {
        if (this.overlay) {
            this.overlay.style.opacity = '0';
            setTimeout(() => {
                this.overlay.remove();
                console.log("Tour Finished.");
                if (window.onTourFinish) window.onTourFinish();
            }, 400);
        }
    }
}

window.SpotlightTour = new SpotlightTour();
