/**
 * 🐍 PYTHON ENGINE (The Matrix) 🐍
 * Manages Pyodide (WASM) and Monaco Editor.
 * Lazy-loads resources to keep initial page load fast.
 */

const PythonEngine = {
    pyodide: null,
    editor: null,
    isLoading: false,
    outputElement: null,

    config: {
        pyodideUrl: "https://cdn.jsdelivr.net/pyodide/v0.25.0/full/pyodide.js",
        monacoUrl: "https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.44.0/min/vs"
    },

    /**
     * Initialize the Engine (lazy load)
     */
    async init() {
        const container = document.getElementById('monaco-container');
        if (!container) return;

        // If already loading or ready, skip
        if (this.isLoading) return;
        if (this.pyodide && this.editor) return;

        this.isLoading = true;
        this.log("Initializing Secure Sandbox...", 'info');

        // 1. Init Monaco (UI First)
        if (!this.editor) {
            try {
                await this.initMonaco();
                this.log("✨ Code Editor Ready.");
                new ResizeObserver(() => {
                    if (this.editor) this.editor.layout();
                }).observe(container);
            } catch (e) {
                this.log("Editor Init Failed: " + e.message, 'error');
            }
        }

        // 2. Init Pyodide (Backend Second)
        if (!this.pyodide) {
            this.updateButtonState(true, "⏳ Loading Kernel...");
            try {
                await this.loadScript(this.config.pyodideUrl);
                await this.initPyodide();
                this.isLoading = false;
                this.updateButtonState(false, "▶ Run Code");
                this.log("✅ Neural Python Kernel (v3.11) Online.");
                this.log("Info: All processing occurs locally on this device.", 'success');
            } catch (e) {
                this.isLoading = false;
                this.log("Kernel Error: " + e.message, 'error');
                this.updateButtonState(false, "⚠️ Kernel Failed");
            }
        }
    },

    updateButtonState(disabled, text) {
        const btn = document.getElementById('term-run-btn');
        if (btn) {
            btn.disabled = disabled;
            btn.innerText = text;
            btn.style.opacity = disabled ? '0.5' : '1';
            btn.style.cursor = disabled ? 'not-allowed' : 'pointer';
        }
    },
    /**
     * Load an external script dynamically
     */
    loadScript(url) {
        return new Promise((resolve, reject) => {
            const script = document.createElement('script');
            script.src = url;
            script.onload = resolve;
            script.onerror = reject;
            document.head.appendChild(script);
        });
    },

    /**
     * Initialize Pyodide WASM
     */
    async initPyodide() {
        this.pyodide = await loadPyodide();
        // Redirect stdout
        this.pyodide.setStdout({ batched: (msg) => this.log(msg) });
    },

    /**
     * Initialize Monaco Editor
     */
    initMonaco() {
        return new Promise((resolve) => {
            // RequireJS configuration for Monaco
            const loader = document.createElement('script');
            loader.src = `${this.config.monacoUrl}/loader.js`;
            loader.onload = () => {
                require.config({ paths: { vs: this.config.monacoUrl } });
                require(['vs/editor/editor.main'], () => {
                    this.editor = monaco.editor.create(document.getElementById('monaco-container'), {
                        value: '# Write your Python code here...\nprint("Hello, DataVitals!")',
                        language: 'python',
                        theme: 'vs-dark',
                        minimap: { enabled: false },
                        scrollBeyondLastLine: false,
                        automaticLayout: true,
                        fontSize: 14,
                        fontFamily: "'Fira Code', 'Consolas', monospace"
                    });

                    // Force layout recalc to fill container
                    setTimeout(() => {
                        this.editor.layout();
                    }, 100);

                    // Respond to window resize
                    window.addEventListener('resize', () => {
                        if (this.editor) this.editor.layout();
                    });

                    resolve();
                });
            };
            document.head.appendChild(loader);
        });
    },

    /**
     * Run Code from Editor
     */
    async run() {
        if (!this.pyodide || !this.editor) {
            this.log("⚠️ Engine not ready. Please wait...", 'warn');
            return;
        }

        const code = this.editor.getValue();
        this.log(">>> Executing...", 'info');

        try {
            await this.pyodide.runPythonAsync(code);
            // Reward XP if length > 10 chars (simple playful mechanic)
            if (code.length > 20 && window.Gamification) {
                Gamification.addXP(10);
            }
        } catch (e) {
            this.log(e.message, 'error');
        }
    },

    /**
     * Log output to the 'Terminal' div
     */
    log(msg, type = 'log') {
        const consoleEl = document.getElementById('term-output');
        if (!consoleEl) return;

        const line = document.createElement('div');
        line.className = `term-line ${type}`;
        line.innerText = msg;
        consoleEl.appendChild(line);
        consoleEl.scrollTop = consoleEl.scrollHeight;
    }
};
