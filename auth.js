/**
 * 🔐 AUTHENTICATION SERVICE (LOCAL STORAGE) 🔐
 * Handles local user registration and login.
 */

class AuthService {
    constructor() {
        this.currentUser = null;
        this.users = JSON.parse(localStorage.getItem('datavitals_users') || '{}');
    }

    register(username, password) {
        if (this.users[username]) {
            return { success: false, message: "Username already exists!" };
        }
        this.users[username] = { password: password }; // In a real app, hash this!
        localStorage.setItem('datavitals_users', JSON.stringify(this.users));
        return { success: true, message: "Registration successful! Please login." };
    }

    login(username, password) {
        const user = this.users[username];
        if (user && user.password === password) {
            this.currentUser = { username: username };
            return { success: true, message: `Welcome back, ${username}!` };
        }
        return { success: false, message: "Invalid username or password." };
    }

    logout() {
        this.currentUser = null;
        window.location.reload();
    }

    getCurrentUser() {
        return this.currentUser;
    }

    isLoggedIn() {
        return !!this.currentUser;
    }
}

window.authService = new AuthService();
