// VOICE AGENT MODULE
// Handles Speech-to-Text (STT) and Text-to-Speech (TTS)

const VOICE_AGENT = {
    recognition: null,
    synthesis: window.speechSynthesis,
    isListening: false,
    isSpeaking: false,
    voice: null,

    // Config
    lang: 'en-US',

    init() {
        // Check browser support
        if (!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)) {
            console.warn("Voice API not supported in this browser.");
            return false;
        }

        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        this.recognition = new SpeechRecognition();
        this.recognition.lang = this.lang;
        this.recognition.interimResults = false;
        this.recognition.maxAlternatives = 1;

        // Load voices
        this.loadVoices();
        if (this.synthesis.onvoiceschanged !== undefined) {
            this.synthesis.onvoiceschanged = () => this.loadVoices();
        }

        return true;
    },

    loadVoices() {
        const voices = this.synthesis.getVoices();
        // Try to find a good English voice (Google US English is usually best if available)
        this.voice = voices.find(v => v.name === 'Google US English') ||
            voices.find(v => v.lang === 'en-US') ||
            voices[0];
    },

    startListening(onResult, onEnd) {
        if (this.isListening) return;

        this.isListening = true;
        this.recognition.start();

        this.recognition.onresult = (event) => {
            const text = event.results[0][0].transcript;
            console.log("Heard:", text);
            if (onResult) onResult(text);
        };

        this.recognition.onspeechend = () => {
            this.recognition.stop();
        };

        this.recognition.onerror = (event) => {
            console.error("Speech recognition error", event.error);
            this.isListening = false;
            if (onEnd) onEnd();
        };

        this.recognition.onend = () => {
            this.isListening = false;
            if (onEnd) onEnd();
        };
    },

    stopListening() {
        if (this.recognition && this.isListening) {
            this.recognition.stop();
            this.isListening = false;
        }
    },

    speak(text) {
        if (!text) return;

        // Cancel current speech
        this.synthesis.cancel();

        const utterance = new SpeechSynthesisUtterance(text);
        if (this.voice) utterance.voice = this.voice;
        utterance.pitch = 1;
        utterance.rate = 1;

        utterance.onstart = () => { this.isSpeaking = true; };
        utterance.onend = () => { this.isSpeaking = false; };
        utterance.onerror = () => { this.isSpeaking = false; };

        this.synthesis.speak(utterance);
    },

    stopSpeaking() {
        this.synthesis.cancel();
        this.isSpeaking = false;
    }
};

// Auto-init
VOICE_AGENT.init();
