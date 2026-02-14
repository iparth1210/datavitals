/**
 * 🛰️ AURA VISUAL CORE v1.0
 * Universal waveform and holographic avatar for Aura AI.
 */

class AuraVisual {
    constructor(containerId) {
        this.container = document.getElementById(containerId);
        if (!this.container) return;

        this.canvas = document.createElement('canvas');
        this.ctx = this.canvas.getContext('2d');
        this.container.appendChild(this.canvas);

        this.bars = 32;
        this.amplitudes = new Array(this.bars).fill(0);
        this.targetAmplitudes = new Array(this.bars).fill(0);

        this.init();
        this.animate();

        window.addEventListener('resize', () => this.resize());
    }

    init() {
        this.resize();
    }

    resize() {
        this.canvas.width = this.container.clientWidth;
        this.canvas.height = this.container.clientHeight;
    }

    update(active = false) {
        if (active) {
            for (let i = 0; i < this.bars; i++) {
                this.targetAmplitudes[i] = Math.random() * (this.canvas.height * 0.4);
            }
        } else {
            this.targetAmplitudes.fill(2);
        }
    }

    animate() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        const barWidth = this.canvas.width / this.bars;
        const spacing = 4;

        for (let i = 0; i < this.bars; i++) {
            // Smoothler interpolation
            this.amplitudes[i] += (this.targetAmplitudes[i] - this.amplitudes[i]) * 0.1;

            const x = i * barWidth + spacing / 2;
            const y = (this.canvas.height - this.amplitudes[i]) / 2;

            // Draw Radiant Bar
            const grad = this.ctx.createLinearGradient(0, y, 0, y + this.amplitudes[i]);
            grad.addColorStop(0, '#06b6d4');
            grad.addColorStop(0.5, '#8b5cf6');
            grad.addColorStop(1, '#ec4899');

            this.ctx.fillStyle = grad;
            this.ctx.shadowBlur = 10;
            this.ctx.shadowColor = 'rgba(6, 182, 212, 0.5)';
            this.ctx.fillRect(x, y, barWidth - spacing, this.amplitudes[i]);
        }

        if (Math.random() > 0.9) this.update(true); // Random activity for demo
        else if (Math.random() > 0.8) this.update(false);

        requestAnimationFrame(() => this.animate());
    }
}

// Global Injector
window.AuraVisualEngine = AuraVisual;
