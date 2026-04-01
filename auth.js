/**
 * 🔐 AUTHENTICATION SERVICE (FIREBASE) 🔐
 * Handles Google Sign-In and session management.
 * Recovered from Elite Masterpiece Archives.
 */

class AuthService {
    constructor() {
        if (!firebase.apps.length) {
            firebase.initializeApp(window.firebaseConfig);
        }
        this.auth = firebase.auth();
        this.provider = new firebase.auth.GoogleAuthProvider();
        this.currentUser = null;

        // Listen for auth state changes
        this.auth.onAuthStateChanged(user => {
            if (user) {
                this.currentUser = {
                    username: user.displayName || user.email.split('@')[0],
                    email: user.email,
                    uid: user.uid,
                    photoURL: user.photoURL
                };
                console.log("[Neural Link]: Session Synchronized -", this.currentUser.username);

                // Allow system to know we are authorized
                document.body.classList.add('authorized');

                if (window.onLoginSuccess) window.onLoginSuccess();
            } else {
                this.currentUser = null;
                document.body.classList.remove('authorized');
                console.log("[Neural Link]: Session Terminated");
            }
        });
    }

    async loginWithGoogle() {
        try {
            const result = await this.auth.signInWithPopup(this.provider);
            return { success: true, message: `Welcome ${result.user.displayName}!` };
        } catch (error) {
            console.error("[Auth Error]:", error);
            return { success: false, message: error.message };
        }
    }

    logout() {
        this.auth.signOut().then(() => {
            window.location.reload();
        });
    }

    getCurrentUser() {
        return this.currentUser;
    }

    isLoggedIn() {
        return !!this.auth.currentUser;
    }
}

// Global Injector
window.addEventListener('DOMContentLoaded', () => {
    if (window.firebaseConfig && window.firebaseConfig.apiKey !== "YOUR_API_KEY_HERE") {
        window.authService = new AuthService();
    } else {
        console.warn("Neural Link Offline: Firebase Config missing.");
        // Mock fallback for UI testing
        window.authService = {
            loginWithGoogle: async () => {
                console.log("[Neural Link]: Bypassing to Mock Auth...");
                // Save session for hard refreshes
                localStorage.setItem('nn_link_established', 'true');
                if (window.onLoginSuccess) window.onLoginSuccess();
                return { success: true, message: "Mock Neural Link Established." };
            },
            logout: () => {
                localStorage.removeItem('nn_link_established');
                window.location.reload();
            },
            getCurrentUser: () => ({
                username: "ARCHITECT",
                photoURL: "logo.png"
            }),
            isLoggedIn: () => !!localStorage.getItem('nn_link_established')
        };

        // If already "logged in" via mock, trigger success hook
        if (localStorage.getItem('nn_link_established')) {
            if (window.onLoginSuccess) window.onLoginSuccess();
        }
    }
});
