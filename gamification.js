// GAMIFICATION MODULE
// Handles XP, Levels, Badges, and User Profile

const GAMIFICATION = {
    // Config
    XP_PER_PAGE: 10,
    XP_PER_TASK: 50,
    LEVEL_CONSTANT: 0.1, // Level = Constant * Sqrt(XP)

    // State
    state: {
        xp: 0,
        level: 1,
        badges: [],
        streak: 0,
        lastLogin: null
    },

    // Badges Definitions
    badgesList: [
        { id: 'novice', title: 'Data Novice', icon: '👶', description: 'Completed your first lesson' },
        { id: 'streaker', title: 'On Fire', icon: '🔥', description: '3-Day Learning Streak' },
        { id: 'scholar', title: 'Scholar', icon: '🎓', description: 'Earned 1000 XP' },
        { id: 'wizard', title: 'Data Wizard', icon: '🧙‍♂️', description: 'Reached Level 10' },
        { id: 'completionist', title: 'Completionist', icon: '🏆', description: 'Completed a full Phase' }
    ],

    // Init
    init() {
        this.load();
        this.checkStreak();
        this.renderProfile();
    },

    // Load/Save
    load() {
        const saved = localStorage.getItem('datavitals-gamification');
        if (saved) {
            this.state = JSON.parse(saved);
        }
    },

    save() {
        localStorage.setItem('datavitals-gamification', JSON.stringify(this.state));
        this.renderProfile(); // Update UI whenever saved
    },

    // Core Logic
    addXP(amount) {
        const oldLevel = this.state.level;
        this.state.xp += amount;

        // Calculate new level: Level = Floor(0.1 * Sqrt(XP)) + 1
        // Example: 100 XP = Lvl 2, 400 XP = Lvl 3, 900 XP = Lvl 4
        const newLevel = Math.floor(this.LEVEL_CONSTANT * Math.sqrt(this.state.xp)) + 1;

        if (newLevel > oldLevel) {
            this.state.level = newLevel;
            this.showLevelUpModal(newLevel);
            this.checkBadges();
        }

        this.showNotification(`+${amount} XP`);
        this.checkBadges();
        this.save();
    },

    unlockBadge(badgeId) {
        if (!this.state.badges.includes(badgeId)) {
            this.state.badges.push(badgeId);
            const badge = this.badgesList.find(b => b.id === badgeId);
            this.showNotification(`🏅 Badge Unlocked: ${badge.title}!`);
            this.save();
        }
    },

    checkBadges() {
        // Check for specific achievements
        if (this.state.xp >= 1000) this.unlockBadge('scholar');
        if (this.state.level >= 10) this.unlockBadge('wizard');
    },

    checkStreak() {
        const today = new Date().toDateString();
        if (this.state.lastLogin !== today) {
            // Logic to check if yesterday was logged in could be added here
            // For simplicity, we just increment if it's a new day
            this.state.streak++;
            this.state.lastLogin = today;
            if (this.state.streak >= 3) this.unlockBadge('streaker');
            this.save();
        }
    },

    // UI Functions
    renderProfile() {
        const container = document.getElementById('user-profile-container');
        if (!container) return; // Guard clause if container doesn't exist yet

        // Calculate progress to next level
        const currentLevelXP = Math.pow((this.state.level - 1) / this.LEVEL_CONSTANT, 2);
        const nextLevelXP = Math.pow(this.state.level / this.LEVEL_CONSTANT, 2);
        const progress = ((this.state.xp - currentLevelXP) / (nextLevelXP - currentLevelXP)) * 100;

        container.innerHTML = `
            <div class="profile-card">
                <div class="profile-header">
                    <div class="profile-avatar">👨‍💻</div>
                    <div class="profile-info">
                        <div class="profile-name">Data Cadet</div>
                        <div class="profile-level">Level ${this.state.level}</div>
                    </div>
                </div>
                <div class="xp-bar-container">
                    <div class="xp-bar-fill" style="width: ${Math.min(100, Math.max(0, progress))}%"></div>
                </div>
                <div class="xp-text">${Math.floor(this.state.xp)} / ${Math.floor(nextLevelXP)} XP</div>
                <div class="badges-container">
                    ${this.state.badges.map(bid => {
            const b = this.badgesList.find(x => x.id === bid);
            return `<span class="badge-icon" title="${b.title}">${b.icon}</span>`;
        }).join('')}
                    ${this.state.badges.length === 0 ? '<span class="no-badges">No badges yet</span>' : ''}
                </div>
            </div>
        `;
    },

    showNotification(text) {
        const notif = document.createElement('div');
        notif.className = 'gamification-notification';
        notif.innerText = text;
        document.body.appendChild(notif);

        // Animate in
        setTimeout(() => notif.classList.add('show'), 10);

        // Remove after 3s
        setTimeout(() => {
            notif.classList.remove('show');
            setTimeout(() => notif.remove(), 300);
        }, 3000);
    },

    showLevelUpModal(level) {
        const modal = document.createElement('div');
        modal.className = 'level-up-modal';
        modal.innerHTML = `
            <div class="level-up-content">
                <h1>🎉 LEVEL UP! 🎉</h1>
                <div class="level-number">${level}</div>
                <p>You are now Level ${level}</p>
                <button onclick="this.closest('.level-up-modal').remove()">Awesome!</button>
            </div>
        `;
        document.body.appendChild(modal);
        this.triggerConfetti();
    },

    triggerConfetti() {
        // Simple CSS/JS confetti effect
        for (let i = 0; i < 50; i++) {
            const conf = document.createElement('div');
            conf.className = 'confetti';
            conf.style.left = Math.random() * 100 + 'vw';
            conf.style.animationDuration = (Math.random() * 3 + 2) + 's';
            conf.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
            document.body.appendChild(conf);
            setTimeout(() => conf.remove(), 5000);
        }
    }
};

// Initialize on load
window.addEventListener('DOMContentLoaded', () => {
    // Create container if not exists (will be placed by script.js usually, but safety first)
    if (!document.getElementById('user-profile-container')) {
        const div = document.createElement('div');
        div.id = 'user-profile-container';
        document.body.appendChild(div); // Default to bottom or specific place
    }
    GAMIFICATION.init();
});
