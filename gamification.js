/**
 * 🎮 GAMIFICATION ENGINE 🎮
 * Manages User Stats, XP, Levels, and Streaks.
 */

const Gamification = {
    // Default Initial State
    state: {
        xp: 0,
        level: 1,
        streak: 0,
        lastLogin: null, // "YYYY-MM-DD"
        badges: []
    },

    /**
     * Initialize the system
     */
    init() {
        this.loadState();
        this.checkStreak();
        this.updateHUD();
    },

    /**
     * Load stats from LocalStorage
     */
    loadState() {
        const stored = localStorage.getItem('datavitals_stats');
        if (stored) {
            this.state = JSON.parse(stored);
        }
    },

    /**
     * Save stats to LocalStorage
     */
    saveState() {
        localStorage.setItem('datavitals_stats', JSON.stringify(this.state));
        this.updateHUD();
    },

    /**
     * Calculate and Update Streak Logic
     */
    checkStreak() {
        const today = new Date().toISOString().split('T')[0];

        if (this.state.lastLogin !== today) {
            // It's a new day
            const yesterday = new Date();
            yesterday.setDate(yesterday.getDate() - 1);
            const yesterdayStr = yesterday.toISOString().split('T')[0];

            if (this.state.lastLogin === yesterdayStr) {
                // Continued streak
                this.state.streak++;
                this.showNotification(`🔥 Streak Ignited: ${this.state.streak} Days!`);
            } else if (this.state.lastLogin && this.state.lastLogin < yesterdayStr) {
                // Streak broken
                this.state.streak = 1;
                this.showNotification(`🔥 Streak Reset. Let's build it back!`);
            } else {
                // First login ever or new streak start
                if (this.state.streak === 0) this.state.streak = 1;
            }

            this.state.lastLogin = today;
            this.saveState();
        }
    },

    /**
     * Add XP to user and check for Level Up
     * @param {number} amount - Amount of XP to add
     */
    addXP(amount) {
        this.state.xp += amount;

        // Level Formula: Level * 1000 XP required
        const nextLevelXP = this.state.level * 1000;

        if (this.state.xp >= nextLevelXP) {
            this.levelUp();
        }

        this.saveState();
        this.showNotification(`+${amount} XP`);
    },

    /**
     * Level Up Logic
     */
    levelUp() {
        this.state.level++;
        this.state.xp = 0;
        const msg = `🎉 LEVEL UP! You are now Level ${this.state.level}!`;
        this.showNotification(msg);
        console.log(`[GAME] ${msg}`);
    },

    /**
     * Update the UI HUD
     */
    updateHUD() {
        const hud = document.getElementById('user-hud');
        if (!hud) return;

        hud.innerHTML = `
            <div class="hud-pill">
                <span class="hud-icon">⚡</span>
                <span class="hud-value">${this.state.streak}</span>
            </div>
            <div class="hud-pill">
                <span class="hud-icon">⭐</span>
                <span class="hud-value">Lvl ${this.state.level}</span>
            </div>
            <div class="hud-pill xp-pill">
                <div class="xp-bar" style="width: ${(this.state.xp / (this.state.level * 1000)) * 100}%"></div>
                <span class="hud-value" style="position:relative; z-index:2">${this.state.xp} XP</span>
            </div>
        `;
    },

    /**
     * Show Toast Notification
     */
    showNotification(msg) {
        let toast = document.createElement('div');
        toast.className = 'game-toast';
        toast.innerText = msg;
        document.body.appendChild(toast);

        // Animate
        setTimeout(() => toast.classList.add('show'), 100);
        setTimeout(() => {
            toast.classList.remove('show');
            setTimeout(() => toast.remove(), 300);
        }, 3000);
    },

    takeDamage(amount) {
        this.showNotification(`💔 Took ${amount} Damage!`);
    }
};

// Auto-init on load if script is deferred
window.Gamification = Gamification;
document.addEventListener('DOMContentLoaded', () => {
    Gamification.init();
});
