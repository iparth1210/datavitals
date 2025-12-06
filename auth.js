/**
 * 🔐 AUTHENTICATION SERVICE (FIREBASE) 🔐
 * Handles Google Sign-In and session management.
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
                console.log("User logged in:", this.currentUser.username);
                // Trigger UI update if on landing page
                if (window.renderLandingPage && document.querySelector('.landing-page')) {
                    window.renderLandingPage(); // Will redirect to roadmap
                }
            } else {
                this.currentUser = null;
                console.log("User logged out");
            }
        });
    }

    loginWithGoogle() {
        return this.auth.signInWithPopup(this.provider)
            .then(result => {
                return { success: true, message: `Welcome ${result.user.displayName}!` };
            })
            .catch(error => {
                console.error(error);
                return { success: false, message: error.message };
            });
    }

    logout() {
        this.auth.signOut().then(() => {
            window.location.reload();
        });
    }

    getCurrentUser() {
        return this.currentUser;
    }
}

// Initialize only if config is present (prevents crash on empty config)
if (window.firebaseConfig && window.firebaseConfig.apiKey !== "YOUR_API_KEY_HERE") {
    window.authService = new AuthService();
} else {
    console.warn("Firebase Auth not initialized: Using Demo Mode");

    // Demo Mode Auth Service
    window.authService = {
        currentUser: null,
        loginWithGoogle: async () => {
            // Simulate network delay
            await new Promise(r => setTimeout(r, 800));
            window.authService.currentUser = {
                username: "Demo User",
                email: "demo@example.com",
                photoURL: "https://api.dicebear.com/7.x/avataaars/svg?seed=Felix",
                uid: "demo-123"
            };
            if (window.renderLandingPage) window.renderLandingPage(); // Trigger re-render
            return { success: true, message: "Welcome Demo User!" };
        },
        logout: () => {
            window.authService.currentUser = null;
            window.location.reload();
        },
        getCurrentUser: () => window.authService.currentUser,
        isLoggedIn: () => !!window.authService.currentUser
    };
}
