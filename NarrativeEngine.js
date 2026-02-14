/**
 * 🎬 QUANTUM NARRATIVE ENGINE v2.0 (THE "KILLER" STANDARD)
 * High-fidelity immersive entry flow with 3D Parallax.
 */

class NarrativeEngine {
    constructor() {
        this.container = null;
        this.currentScene = 0;
        this.scenes = [
            {
                id: "scene-neural",
                title: "NEURAL LOGIC",
                desc: "Synthesizing clinical data streams into actionable intelligence.",
                svg: `<svg viewBox="0 0 800 600" class="quantum-svg">
                        <circle cx="400" cy="300" r="100" class="pulse-ring" />
                        <path d="M400 200 L400 400 M300 300 L500 300" class="neural-cross" />
                        <g class="data-particles"></g>
                      </svg>`
            },
            {
                id: "scene-pulse",
                title: "CLINICAL PULSE",
                desc: "Monitoring real-time vital metrics through the neural fabric.",
                svg: `<svg viewBox="0 0 800 600" class="quantum-svg">
                        <path d="M100 300 Q250 100 400 300 T700 300" class="pulse-wave" />
                        <rect x="350" y="250" width="100" height="100" class="pulse-core" />
                      </svg>`
            },
            {
                id: "scene-synthesis",
                title: "THE SYNTHESIS",
                desc: "Welcome to the Horizon. Your neural link is stabilizing.",
                svg: `<svg viewBox="0 0 800 600" class="quantum-svg">
                        <polygon points="400,150 450,300 400,450 350,300" class="synthesis-diamond" />
                        <circle cx="400" cy="300" r="150" class="halo-ring" />
                      </svg>`
            }
        ];
    }

    init() {
        // Create full-screen narrative overlay
        this.container = document.createElement('div');
        this.container.id = 'quantum-narrative-overlay';
        this.container.innerHTML = `
            <div class="narrative-scene-wrapper">
                <div class="scene-visual-layer"></div>
                <div class="scene-content-layer">
                    <h1 class="scene-title text-gradient"></h1>
                    <p class="scene-desc"></p>
                    <div class="scene-progress-bar"><div class="progress-fill"></div></div>
                </div>
            </div>
            <div class="narrative-controls">
                <button class="btn-skip" onclick="window.NarrativeEngine.skip()">Skip Neural Link</button>
            </div>
        `;
        document.body.appendChild(this.container);
        this.renderScene();
    }

    renderScene() {
        const scene = this.scenes[this.currentScene];
        const visualLayer = this.container.querySelector('.scene-visual-layer');
        const titleEl = this.container.querySelector('.scene-title');
        const descEl = this.container.querySelector('.scene-desc');
        const progressFill = this.container.querySelector('.progress-fill');

        // Transition Out
        visualLayer.style.opacity = '0';
        visualLayer.style.transform = 'scale(1.2) rotateX(10deg)';

        setTimeout(() => {
            visualLayer.innerHTML = scene.svg;
            titleEl.textContent = scene.title;
            descEl.textContent = scene.desc;

            // Transition In
            visualLayer.style.opacity = '1';
            visualLayer.style.transform = 'scale(1) rotateX(0deg)';

            // Progress Animation
            progressFill.style.width = '0%';
            setTimeout(() => {
                progressFill.style.transition = 'width 4s linear';
                progressFill.style.width = '100%';
            }, 50);

            // Auto-advance
            this.advanceTimeout = setTimeout(() => {
                this.next();
            }, 4000);
        }, 800);
    }

    next() {
        this.currentScene++;
        if (this.currentScene < this.scenes.length) {
            this.renderScene();
        } else {
            this.finish();
        }
    }

    skip() {
        clearTimeout(this.advanceTimeout);
        this.finish();
    }

    finish() {
        this.container.style.opacity = '0';
        this.container.style.pointerEvents = 'none';
        setTimeout(() => {
            this.container.remove();
            if (window.LoginOverlay) window.LoginOverlay.init();
        }, 1000);
    }
}

window.NarrativeEngine = new NarrativeEngine();
