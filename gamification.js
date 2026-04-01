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
        this.state = window.StorageHub.load('datavitals_stats', this.state);
    },

    saveState() {
        window.StorageHub.save('datavitals_stats', this.state);
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
        window.StorageHub.save('datavitals_xp', this.state.xp);
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
                <div class="vital-card">
                    <span class="vital-label">NEURAL_XP [LVL ${this.state.level}]</span>
                    <div style="display:flex; justify-content:space-between; align-items:flex-end;">
                        <span class="vital-value text-gradient">${this.state.xp}</span>
                        <span style="font-size:0.7rem; color:var(--text-muted); opacity:0.6;">NEXT: 1000</span>
                    </div>
                    <div class="liquid-bar-container">
                        <div class="liquid-fill" style="width: ${xpPercent}%;"></div>
                    </div>
                </div>

                <div class="vital-card">
                    <span class="vital-label">CLINICAL_STREAK</span>
                    <span class="vital-value" style="color: var(--accent-pink);">${this.state.streak} DAYS</span>
                    <div class="aura-insight-bubble" id="aura-streak-insight">"Consistency is the catalyst of mastery."</div>
                </div>

                <div class="vital-card" id="aura-predictive-card">
                    <span class="vital-label">AURA_SYNOPSIS</span>
                    <div id="aura-suggested-node" style="font-size: 0.9rem; font-weight: 600; margin: 4px 0;">Analyzing paths...</div>
                    <div class="aura-insight-bubble">"Calculating optimal next trajectory..."</div>
                </div>
            `;

            // Trigger script-side predictive analysis if available
            if (window.updateAuraInsights) {
                window.updateAuraInsights();
            }
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
