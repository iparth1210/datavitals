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
        // If pyodide is loaded but editor element is missing/new, we might need to re-init Monaco
        const container = document.getElementById('monaco-container');

        if (this.pyodide && this.editor && container && container.childElementCount > 0) {
            return; // Already fully ready
        }

        // If loading, wait
        if (this.isLoading) return;

        this.isLoading = true;
        this.updateButtonState(true, "⏳ Loading Engine...");
        this.log("Initializing Neural Python Runtime...");

        try {
            if (!this.pyodide) {
                await this.loadScript(this.config.pyodideUrl);
                await this.initPyodide();
            }

            // Always init monaco if container exists and is empty
            if (container && container.childElementCount === 0) {
                await this.initMonaco();
            }

            this.isLoading = false;
            this.updateButtonState(false, "▶ Run Code");
            this.log("✅ Python Engine Online. Version 3.11");
            if (!this.pyodide) { // Only run hello if fresh load
                this.runCode(`print("Welcome to the Neural Terminal.")\nimport sys\nprint(f"Python {sys.version}")`);
            }
        } catch (e) {
            this.log(`❌ Critical Error: ${e.message}`, 'error');
            this.isLoading = false;
            this.updateButtonState(false, "⚠️ Error");
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
