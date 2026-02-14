/**
 * 🔐 LOGIN OVERLAY v2.0 (THE "KILLER" STANDARD)
 * Redesigned as a floating holographic clinical terminal.
 */

class LoginOverlay {
    constructor() {
        this.el = null;
    }

    init() {
        this.createOverlay();
    }

    createOverlay() {
        const div = document.createElement('div');
        div.id = 'quantum-login-terminal';
        div.className = 'hidden';
        div.innerHTML = `
            <div class="holographic-container">
                <div class="terminal-frame killer-glass">
                    <div class="terminal-header-line">
                        <span class="status-dot"></span>
                        <span class="terminal-id">ACCESS_TERMINAL: 0X-882</span>
                        <div class="header-scanline"></div>
                    </div>
                    
                    <div class="terminal-body-flow">
                        <div class="brand-section">
                            <h1 class="text-gradient" style="font-family: 'Space Grotesk'; font-size: 2.5rem; letter-spacing: -2px;">DATAVITALS</h1>
                            <p style="color: var(--text-secondary); font-size: 0.8rem; letter-spacing: 2px;">NEURAL LINK INTERFACE v7.0</p>
                        </div>

                        <div class="auth-section">
                            <button class="btn-google-neural" onclick="window.loginOverlay.handleLogin('Google')">
                                <span class="btn-glow"></span>
                                <svg viewBox="0 0 24 24" width="20">
                                    <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                                    <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-1.02.68-2.33 1.09-3.71 1.09-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                                    <path fill="currentColor" d="M5.84 14.13c-.22-.68-.35-1.44-.35-2.13s.13-1.45.35-2.13V7.03H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.97l3.66-2.84z"/>
                                    <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.03l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                                </svg>
                                Authenticate via Neural Link
                            </button>

                            <div class="terminal-divider">
                                <span>OR MANUAL OVERRIDE</span>
                            </div>

                            <div class="terminal-input-group">
                                <label>> UID</label>
                                <input type="text" placeholder="architect.vitals" id="login-user">
                            </div>

                            <div class="terminal-input-group">
                                <label>> SYNC_KEY</label>
                                <input type="password" placeholder="••••••••" id="login-pass">
                            </div>

                            <button class="btn-neural" style="width: 100%; margin-top: 16px;" onclick="window.loginOverlay.handleLogin('Core')">Initialize Link</button>
                        </div>
                    </div>
                    
                    <div class="terminal-footer-data">
                        <span class="scrolling-data">SECURE_HANDSHAKE_PENDING... ENCRYPTING_STREAMS... BIO_METRIC_VALIDATION_ACTIVE...</span>
                    </div>
                </div>
            </div>
        `;
        document.body.appendChild(div);
        this.el = div;
    }

    show() {
        this.el.classList.remove('hidden');
        this.el.style.opacity = '1';
    }

    handleLogin(type) {
        console.log(`[Aura]: Initiating Neural Handshake via ${type}...`);
        const frame = this.el.querySelector('.terminal-frame');
        frame.style.transform = 'scale(0.98) rotateX(5deg)';
        frame.style.opacity = '0.7';

        // Final transition logic
        setTimeout(() => {
            this.el.style.opacity = '0';
            setTimeout(() => {
                this.el.remove();
                if (window.onLoginSuccess) window.onLoginSuccess();
            }, 800);
        }, 1200);
    }
}

window.loginOverlay = new LoginOverlay();
window.loginOverlay.init();
