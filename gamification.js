/**
 * 🎮 GAMIFICATION ENGINE v2.0 (THE "HORIZON" EDITION)
 * Manages User Stats, XP, Levels, and Streaks within the Bento Grid.
 */

const Gamification = {
    state: {
        xp: 0,
        level: 1,
        streak: 0,
        lastLogin: null,
        badges: []
    },

    init() {
        this.loadState();
        this.checkStreak();
        this.updateHUD();
        console.log("[Aura]: Gamification Subsystems Active.");
    },

    loadState() {
        const stored = localStorage.getItem('datavitals_stats');
        if (stored) {
            this.state = JSON.parse(stored);
        }
    },

    saveState() {
        localStorage.setItem('datavitals_stats', JSON.stringify(this.state));
        this.updateHUD();
    },

    checkStreak() {
        const today = new Date().toISOString().split('T')[0];
        if (this.state.lastLogin !== today) {
            const yesterday = new Date();
            yesterday.setDate(yesterday.getDate() - 1);
            const yesterdayStr = yesterday.toISOString().split('T')[0];

            if (this.state.lastLogin === yesterdayStr) {
                this.state.streak++;
                this.showNotification(`🔥 NEURAL STREAK: ${this.state.streak} DAYS`);
            } else if (this.state.lastLogin && this.state.lastLogin < yesterdayStr) {
                this.state.streak = 1;
                this.showNotification(`🔥 STREAK RESET`);
            } else {
                if (this.state.streak === 0) this.state.streak = 1;
            }
            this.state.lastLogin = today;
            this.saveState();
        }
    },

    addXP(amount) {
        this.state.xp += amount;
        const nextLevelXP = this.state.level * 1000;
        if (this.state.xp >= nextLevelXP) {
            this.levelUp();
        }
        localStorage.setItem('datavitals_xp', this.state.xp); // Sync with script.js HUD
        this.saveState();
        this.showNotification(`+${amount} XP SYNTHESIZED`);
    },

    levelUp() {
        this.state.level++;
        this.state.xp = this.state.xp % 1000;
        this.showNotification(`🎉 NEURAL ASCENSION: LEVEL ${this.state.level}`);
    },

    updateHUD() {
        const hud = document.getElementById('sidebar-hud');
        if (hud) {
            const xpPercent = (this.state.xp % 1000) / 10;
            hud.innerHTML = `
                <div class="vital-item">
                    <span class="label">NEURAL_XP [LVL ${this.state.level}]</span>
                    <span class="value text-gradient">${this.state.xp}</span>
                    <div class="vital-bar"><div class="fill" style="width: ${xpPercent}%;"></div></div>
                </div>
                <div class="vital-item">
                    <span class="label">CLINICAL_STREAK</span>
                    <span class="value" style="color: var(--accent-pink);">${this.state.streak} DAYS</span>
                </div>
                <div class="vital-item">
                    <span class="label">BIO_SYNC</span>
                    <span class="value" style="color: var(--accent-cyan);">OPTIMAL</span>
                </div>
            `;
        }
    },

    showNotification(msg) {
        const toast = document.createElement('div');
        toast.className = 'killer-glass';
        toast.style.cssText = `
            position: fixed; bottom: 40px; left: 50%; transform: translateX(-50%) translateY(100px);
            padding: 16px 32px; z-index: 20000; color: white; font-family: 'Space Grotesk';
            font-weight: 700; font-size: 1rem; letter-spacing: 1px;
            box-shadow: 0 0 30px rgba(6, 182, 212, 0.4); transition: all 0.6s var(--spring-ease);
        `;
        toast.innerText = msg;
        document.body.appendChild(toast);
        setTimeout(() => toast.style.transform = 'translateX(-50%) translateY(0)', 100);
        setTimeout(() => {
            toast.style.transform = 'translateX(-50%) translateY(100px)';
            setTimeout(() => toast.remove(), 600);
        }, 3000);
    },

    takeDamage(amount) {
        this.showNotification(`⚠️ NEURAL FRAGMENTATION: -${amount}`);
    }
};

window.Gamification = Gamification;
document.addEventListener('DOMContentLoaded', () => {
    Gamification.init();
});
