
/**
 * 🧬 GUIDED LOADING v1.0
 * The sophisticated post-login system synthesis experience.
 */

class GuidedLoading {
    constructor() {
        this.el = null;
        this.stages = [
            { label: "AUTHENTICATING NEURAL LINK", pulse: true },
            { label: "SYNCHRONIZING BIO-METRICS", pulse: true },
            { label: "INGESTING QUAD-TRACK CURRICULUM", pulse: true },
            { label: "INITIALIZING AURA ARCHITECT", pulse: false }
        ];
        this.tips = [
            "Tip: DataVitals runs 100% locally for maximum privacy.",
            "Analyzing clinical datasets manually develops medical intuition.",
            "Aura AI can help troubleshoot Python Sandbox errors.",
            "The Quad-Track ensures 360° competence in MedTech."
        ];
    }

    init() {
        this.createOverlay();
        this.run();
    }

    createOverlay() {
        const div = document.createElement('div');
        div.id = 'guided-loading';
        div.style.cssText = `
            position: fixed;
            inset: 0;
            z-index: 1005;
            background: #030712;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            color: white;
            font-family: 'Inter', sans-serif;
        `;
        div.innerHTML = `
            <div class="loading-content" style="text-align:center;">
                <div class="synth-ring" style="width:80px; height:80px; border: 2px solid rgba(94, 106, 210, 0.2); border-top-color: var(--synthesis-accent); border-radius:50%; animation: spin 1s linear infinite; margin: 0 auto 2rem;"></div>
                <div id="synth-status" style="font-family: 'JetBrains Mono', monospace; font-size: 14px; color: var(--synthesis-accent); margin-bottom: 0.5rem; letter-spacing: 0.1em;">INITIALIZING...</div>
                <div id="synth-bar-container" style="width:300px; height:2px; background: rgba(255,255,255,0.05); border-radius:1px; overflow:hidden; margin-bottom: 2rem;">
                    <div id="synth-bar" style="width:0%; height:100%; background: var(--synthesis-accent); transition: width 0.3s ease;"></div>
                </div>
                <div id="synth-tip" style="font-size: 12px; color: var(--text-secondary); opacity: 0.8; max-width: 250px; line-height: 1.5;">Preparing your workspace...</div>
            </div>
            
            <style>
                @keyframes spin { to { transform: rotate(360deg); } }
            </style>
        `;
        document.body.appendChild(div);
        this.el = div;
    }

    async run() {
        const statusEl = document.getElementById('synth-status');
        const barEl = document.getElementById('synth-bar');
        const tipEl = document.getElementById('synth-tip');

        // Cycle through stages
        for (let i = 0; i < this.stages.length; i++) {
            const stage = this.stages[i];
            statusEl.innerText = stage.label;
            tipEl.innerText = this.tips[i % this.tips.length];

            // Advance bar
            const targetWidth = ((i + 1) / this.stages.length) * 100;
            barEl.style.width = `${targetWidth}%`;

            await new Promise(r => setTimeout(r, 1500));
        }

        // Finish
        this.el.style.transition = 'opacity 0.8s ease';
        this.el.style.opacity = '0';
        setTimeout(() => {
            this.el.remove();
            if (window.onSystemReady) window.onSystemReady();
        }, 800);
    }
}

window.GuidedLoading = new GuidedLoading();
