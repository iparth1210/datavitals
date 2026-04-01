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
        div.style.position = 'fixed';
        div.style.inset = '0';
        div.style.zIndex = '99999';
        div.style.display = 'flex';
        div.style.alignItems = 'center';
        div.style.justifyContent = 'center';

        div.innerHTML = `
            <!-- Cinematic Abstract Video Background -->
            <video id="auth-video-bg" autoplay loop muted playsinline>
                <source src="https://assets.mixkit.co/videos/preview/mixkit-data-structures-forming-in-a-network-32863-large.mp4" type="video/mp4">
            </video>
            
            <div class="auth-card-godmode">
                
                <div class="brand-section stagger-1">
                    <h1 class="text-gradient" style="font-family: 'Space Grotesk'; font-size: 3.5rem; letter-spacing: -2px; margin-bottom: 8px;">DATAVITALS</h1>
                    <p style="color: var(--accent-cyan); font-size: 0.85rem; letter-spacing: 5px; font-weight: 700; margin: 0;">DIGITAL OPERATING SYSTEM</p>
                </div>

                <div class="auth-section stagger-2" style="margin-top: 16px;">
                    <div class="boot-sequence hidden" id="boot-status">
                        <div class="boot-loader" style="height: 4px; background: rgba(255,255,255,0.1); border-radius: 2px; overflow: hidden; margin-bottom: 12px;">
                            <div class="boot-bar-fill" id="boot-progress-bar" style="height: 100%; background: var(--accent-cyan); box-shadow: 0 0 10px var(--accent-cyan); width: 0%;"></div>
                        </div>
                        <div class="boot-data" style="display: flex; justify-content: space-between; font-family: 'JetBrains Mono'; font-size: 0.8rem; color: var(--accent-cyan);">
                            <span id="boot-percent">0%</span>
                            <span id="boot-text">INITIALIZING_NEURAL_MODULES...</span>
                        </div>
                    </div>

                    <div id="auth-controls">
                        <button class="btn-neural" style="width: 100%; display: flex; align-items: center; justify-content: center; gap: 12px; font-size: 1rem; padding: 16px;" onclick="window.loginOverlay.handleLogin('Google')">
                            <svg viewBox="0 0 24 24" width="24">
                                <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                                <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-1.02.68-2.33 1.09-3.71 1.09-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                                <path fill="currentColor" d="M5.84 14.13c-.22-.68-.35-1.44-.35-2.13s.13-1.45.35-2.13V7.03H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.97l3.66-2.84z"/>
                                <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.03l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                            </svg>
                            SYNC NEURAL LINK
                        </button>
                    </div>
                </div>
                
                <div class="stagger-3" style="opacity: 0.5; font-family: 'JetBrains Mono'; font-size: 0.7rem; color: white;">
                    SECURE_HANDSHAKE_PENDING... ENCRYPTING_STREAMS_V7
                </div>
            </div>
            
            <!-- Surge effect overlay for successful login -->
            <div id="white-out-surge" class="white-out-surge"></div>
        `;
        document.body.appendChild(div);
        this.el = div;
    }

    attachParallax() {
        // Obsolete function, safely bypassing.
    }

    show() {
        this.el.classList.remove('hidden');
        this.el.style.opacity = '1';
    }

    async handleLogin(type) {
        console.log(`[Neural_Link]: Initiating Handshake via ${type}...`);

        // UI Feedback
        const controls = this.el.querySelector('#auth-controls');
        const bootStatus = this.el.querySelector('#boot-status');
        const progressBar = this.el.querySelector('#boot-progress-bar');
        const percentText = this.el.querySelector('#boot-percent');
        const surge = this.el.querySelector('#white-out-surge');

        controls.classList.add('hidden');
        bootStatus.classList.remove('hidden');

        // Restore Firebase Auth
        if (type === 'Google' && window.authService) {
            const authResult = await window.authService.loginWithGoogle();
            if (!authResult.success) {
                alert(authResult.message);
                controls.classList.remove('hidden');
                bootStatus.classList.add('hidden');
                return;
            }
        }

        // Initialization Surge Sequence
        let progress = 0;
        const interval = setInterval(() => {
            progress += Math.random() * 8;
            if (progress >= 100) {
                progress = 100;
                clearInterval(interval);

                // Trigger Surge
                surge.classList.add('active');

                setTimeout(() => {
                    this.el.style.opacity = '0';
                    setTimeout(() => {
                        this.el.remove();
                        if (window.onLoginSuccess) window.onLoginSuccess();
                    }, 500);
                }, 800);
            }
            progressBar.style.width = `${progress}%`;
            percentText.innerText = `${Math.floor(progress)}%`;
        }, 50);
    }
}

window.loginOverlay = new LoginOverlay();
// Initialized by script.js to ensure boot order
