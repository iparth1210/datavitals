
/**
 * 🔦 SPOTLIGHT TOUR v1.0
 * High-precision guided walkthrough for the DataVitals OS.
 */

class SpotlightTour {
    constructor() {
        this.steps = [
            {
                element: 'sidebar-nav',
                title: 'The Neural Sidebar',
                content: 'Access all Quad-Track modules, the Medical Library, and your Progress Stats from here.'
            },
            {
                element: 'app', // Roadmap Container
                title: 'Quad-Track Roadmap',
                content: 'Your journey through CS, Bio-Med, Clinical Systems, and Applied Labs. Click a card to begin.'
            },
            {
                element: 'chat-container',
                title: 'Aura Assistant',
                content: 'Need help with Python or Medical concepts? Aura is your real-time neural companion.'
            }
        ];
        this.currentStep = 0;
        this.overlay = null;
        this.mask = null;
    }

    init() {
        console.log("Spotlight Tour Starting...");
        this.createTourElements();
        this.showStep(0);
    }

    createTourElements() {
        // Overlay container
        const div = document.createElement('div');
        div.id = 'tour-overlay';
        div.style.cssText = `
            position: fixed;
            inset: 0;
            z-index: 2000;
            pointer-events: none;
            opacity: 0;
            transition: opacity 0.5s ease;
        `;
        div.innerHTML = `
            <svg style="position:absolute; width:100%; height:100%">
                <defs>
                    <mask id="spotlight-mask">
                        <rect width="100%" height="100%" fill="white" />
                        <rect id="mask-hole" x="0" y="0" width="0" height="0" fill="black" rx="12" />
                    </mask>
                </defs>
                <rect width="100%" height="100%" fill="rgba(0,0,0,0.8)" mask="url(#spotlight-mask)" style="pointer-events:auto;" />
            </svg>
            <div id="tour-card" style="
                position: absolute;
                background: var(--bg-card);
                border: 1px solid var(--synthesis-accent);
                padding: 1.5rem;
                border-radius: 16px;
                width: 280px;
                pointer-events: auto;
                box-shadow: 0 20px 40px rgba(0,0,0,0.5);
                transition: all 0.5s var(--ease-smooth);
            ">
                <h3 id="tour-title" style="color:var(--synthesis-accent); margin-bottom:0.5rem; font-size:1.1rem;"></h3>
                <p id="tour-content" style="color:var(--text-secondary); font-size:0.9rem; line-height:1.5; margin-bottom:1.5rem;"></p>
                <div style="display:flex; justify-content:space-between; align-items:center;">
                    <span id="tour-progress" style="font-size:10px; color:var(--text-muted);">Step 1 of 3</span>
                    <button onclick="window.SpotlightTour.next()" style="
                        background: var(--synthesis-accent);
                        color: white;
                        border: none;
                        padding: 6px 16px;
                        border-radius: 8px;
                        cursor: pointer;
                        font-weight: 600;
                    ">Next</button>
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

        // Move Mask Hole
        this.maskHole.setAttribute('x', rect.left - padding);
        this.maskHole.setAttribute('y', rect.top - padding);
        this.maskHole.setAttribute('width', rect.width + padding * 2);
        this.maskHole.setAttribute('height', rect.height + padding * 2);

        // Update Card Content
        document.getElementById('tour-title').innerText = step.title;
        document.getElementById('tour-content').innerText = step.content;
        document.getElementById('tour-progress').innerText = `Step ${idx + 1} of ${this.steps.length}`;

        // Position Card
        let cardTop = rect.bottom + 20;
        let cardLeft = rect.left + (rect.width / 2) - 140;

        // Bounds check
        if (cardTop + 200 > window.innerHeight) cardTop = rect.top - 200;
        if (cardLeft < 20) cardLeft = 20;
        if (cardLeft + 300 > window.innerWidth) cardLeft = window.innerWidth - 300;

        this.card.style.top = `${cardTop}px`;
        this.card.style.left = `${cardLeft}px`;
    }

    next() {
        this.currentStep++;
        this.showStep(this.currentStep);
    }

    finish() {
        this.overlay.style.opacity = '0';
        setTimeout(() => {
            this.overlay.remove();
            console.log("Tour Finished. User is now autonomous.");
            if (window.onTourFinish) window.onTourFinish();
        }, 500);
    }
}

window.SpotlightTour = new SpotlightTour();
