/**
 * 🔦 SPOTLIGHT TOUR v3.0 (MOBILE-SAFE & NON-INTRUSIVE)
 * Guaranteed to never trap the user or cut off buttons.
 */

class SpotlightTour {
    constructor() {
        this.steps = [
            {
                element: 'sidebar-curriculum',
                title: '📚 1. 52-Week Curriculum',
                content: 'Access all 52 weeks (364 days) of structured modules from Excel basics to PyTorch & RAG.'
            },
            {
                element: 'app',
                title: '💻 2. Learning Workspace',
                content: 'Interactive workspace: Read quad-track stories and click ⚡ Launch Code Kernel to execute live code.'
            },
            {
                element: 'page-title',
                title: '🧪 3. Top Action Tools',
                content: 'Data Studio, Formula CheatSheets, and GitHub Portfolio Builder directly in the header.'
            },
            {
                element: 'toggle-aura-btn',
                title: '🤖 4. AI Companion',
                content: 'Engage Aura AI assistant anytime for real-time guidance.'
            }
        ];
        this.currentStep = 0;
        this.overlay = null;
        this.card = null;
    }

    init() {
        console.log("Spotlight Tour Triggered.");
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
            opacity: 0;
            transition: opacity 0.3s ease;
            background: rgba(0, 0, 0, 0.7);
            backdrop-filter: blur(4px);
            -webkit-backdrop-filter: blur(4px);
        `;
        
        // Tap anywhere on backdrop to close
        div.onclick = (e) => {
            if (e.target.id === 'tour-overlay') {
                this.finish();
            }
        };

        div.innerHTML = `
            <div id="tour-card" style="
                position: fixed;
                bottom: 85px;
                left: 50%;
                transform: translateX(-50%);
                background: #0d1527;
                border: 1px solid var(--accent-cyan);
                padding: 1.25rem;
                border-radius: 16px;
                width: 90%;
                max-width: 380px;
                box-shadow: 0 20px 40px rgba(0,0,0,0.9), 0 0 30px rgba(6,182,212,0.3);
                z-index: 200001;
            ">
                <!-- TOP HEADER WITH CLOSE BUTTON -->
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem;">
                    <h3 id="tour-title" style="color:var(--accent-cyan); font-size:1.05rem; font-family:'Space Grotesk'; margin: 0;"></h3>
                    <button onclick="window.SpotlightTour.finish()" style="background: transparent; border: none; color: var(--text-muted); font-size: 1.2rem; cursor: pointer; padding: 0 4px; line-height: 1;" title="Close Tour">✕</button>
                </div>

                <p id="tour-content" style="color:var(--text-secondary); font-size:0.85rem; line-height:1.5; margin-bottom:1rem; font-family:'Space Grotesk';"></p>
                
                <div style="display:flex; justify-content:space-between; align-items:center;">
                    <span id="tour-progress" style="font-size:11px; color:var(--text-muted); font-family:'JetBrains Mono';">Step 1 of 4</span>
                    <div style="display: flex; gap: 8px;">
                        <button onclick="window.SpotlightTour.finish()" style="
                            background: transparent;
                            color: var(--text-muted);
                            border: 1px solid rgba(255,255,255,0.15);
                            padding: 6px 12px;
                            border-radius: 8px;
                            cursor: pointer;
                            font-family: 'Space Grotesk';
                            font-size: 0.8rem;
                        ">Skip</button>
                        <button onclick="window.SpotlightTour.next()" style="
                            background: var(--accent-cyan);
                            color: #000;
                            border: none;
                            padding: 6px 16px;
                            border-radius: 8px;
                            cursor: pointer;
                            font-weight: 700;
                            font-family: 'Space Grotesk';
                            font-size: 0.8rem;
                        ">Next →</button>
                    </div>
                </div>
            </div>
        `;
        
        document.body.appendChild(div);
        this.overlay = div;
        this.card = document.getElementById('tour-card');

        requestAnimationFrame(() => this.overlay.style.opacity = '1');
    }

    showStep(idx) {
        if (idx >= this.steps.length) {
            this.finish();
            return;
        }

        const step = this.steps[idx];
        const titleEl = document.getElementById('tour-title');
        const contentEl = document.getElementById('tour-content');
        const progressEl = document.getElementById('tour-progress');

        if (titleEl) titleEl.innerText = step.title;
        if (contentEl) contentEl.innerText = step.content;
        if (progressEl) progressEl.innerText = `Step ${idx + 1} of ${this.steps.length}`;
    }

    next() {
        this.currentStep++;
        this.showStep(this.currentStep);
    }

    finish() {
        if (this.overlay) {
            this.overlay.style.opacity = '0';
            setTimeout(() => {
                if (this.overlay) this.overlay.remove();
                console.log("Tour Closed.");
            }, 300);
        }
    }
}

window.SpotlightTour = new SpotlightTour();
