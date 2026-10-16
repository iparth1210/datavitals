// F.R.I.D.A.Y. OS Core Script v1.2.0

const API_BASE = "http://localhost:8080";
let isServerConnected = false;
let pollingInterval = null;
let speechRecognition = null;
let isListening = false;
let currentTelemetry = {
    cpu: 0,
    ram: 0,
    disk: 0,
    battery: 100,
    uptime: "00:00:00"
};

// Biometrics & LLM keys
let isBiometricEnforced = false;
let registeredVoicePitch = null;
let audioContext = null;
let analyserNode = null;
let mediaStream = null;
let pitchSamples = [];
let isAnalyzingAudio = false;
let geminiApiKey = "";

// Clock Widget
function updateClock() {
    const clockEl = document.getElementById("hud-clock");
    if (!clockEl) return;
    const now = new Date();
    clockEl.innerText = now.toTimeString().split(" ")[0];
}
setInterval(updateClock, 1000);
updateClock();

// Terminal Logger
function logTerminal(text, type = "system") {
    const logsEl = document.getElementById("terminal-logs");
    if (!logsEl) return;
    
    const line = document.createElement("div");
    line.className = `terminal-line ${type}`;
    
    if (type === "bot") {
        line.innerHTML = `<span class="prefix">FRIDAY:</span> ${text}`;
    } else if (type === "user") {
        line.innerHTML = `<span class="prefix">BOSS:</span> ${text}`;
    } else {
        line.innerHTML = text;
    }
    
    logsEl.appendChild(line);
    logsEl.scrollTop = logsEl.scrollHeight;
}

// Telemetry Polling
async function pollTelemetry() {
    try {
        const response = await fetch(`${API_BASE}/api/telemetry`);
        if (!response.ok) throw new Error("Offline");
        
        const data = await response.json();
        isServerConnected = true;
        updateTelemetryUI(data);
    } catch (err) {
        isServerConnected = false;
        runSimulatedTelemetry();
    }
}

function updateTelemetryUI(data) {
    const statusText = document.getElementById("connection-status");
    const linkModeText = document.getElementById("link-mode");
    const osVerText = document.getElementById("os-ver");
    
    if (statusText) {
        statusText.innerText = "UPLINK SECURED";
        statusText.style.color = "#10b981";
    }
    if (linkModeText) {
        linkModeText.innerText = "LIVE UPLINK";
        linkModeText.className = "mode-live";
    }
    if (osVerText && data.os_version) {
        osVerText.innerText = data.os_version.toUpperCase();
    }

    currentTelemetry = data;

    // Gauges
    const cpuVal = Math.round(data.cpu);
    const cpuRing = document.getElementById("cpu-ring");
    const cpuValEl = document.getElementById("cpu-val");
    const cpuTempEl = document.getElementById("cpu-temp");
    
    if (cpuRing) cpuRing.style.setProperty("--pct", cpuVal);
    if (cpuValEl) cpuValEl.innerText = `${cpuVal}%`;
    if (cpuTempEl && data.cpu_temp) cpuTempEl.innerText = `${data.cpu_temp}°C`;

    const ramVal = Math.round(data.ram);
    const ramRing = document.getElementById("ram-ring");
    const ramValEl = document.getElementById("ram-val");
    const ramUsedEl = document.getElementById("ram-used");
    const ramTotalEl = document.getElementById("ram-total");
    
    if (ramRing) ramRing.style.setProperty("--pct", ramVal);
    if (ramValEl) ramValEl.innerText = `${ramVal}%`;
    if (ramUsedEl && data.ram_used) ramUsedEl.innerText = `${data.ram_used} GB`;
    if (ramTotalEl && data.ram_total) ramTotalEl.innerText = `${data.ram_total} GB`;
}

let simUptimeSeconds = 12500;
function runSimulatedTelemetry() {
    const statusText = document.getElementById("connection-status");
    const linkModeText = document.getElementById("link-mode");
    
    if (statusText) {
        statusText.innerText = "LOCAL SIMULATION MODE";
        statusText.style.color = "#f97316";
    }
    if (linkModeText) {
        linkModeText.innerText = "SIMULATED (OFFLINE)";
        linkModeText.className = "mode-simulated";
    }

    const cpuVal = Math.round(15 + Math.sin(Date.now() / 2000) * 8 + Math.random() * 5);
    const ramVal = 42;
    simUptimeSeconds += 2;

    const mockData = {
        cpu: cpuVal,
        ram: ramVal,
        ram_total: 16.0,
        ram_used: 6.7,
        os_version: "WINDOWS (OFFLINE DEMO)",
        cpu_temp: Math.round(38 + (cpuVal * 0.15))
    };

    updateTelemetryUI(mockData);
}

// System command execution
async function triggerSystemCommand(cmdName) {
    logTerminal(`Executing override: ${cmdName.toUpperCase()}`, "system");
    
    if (!isServerConnected) {
        logTerminal(`Link offline. Simulating action...`, "system");
        setTimeout(() => {
            speak(`Executing mock launch for ${cmdName}. In live mode, this will open the program directly.`);
            logTerminal(`Simulated launch: ${cmdName.toUpperCase()} SUCCESS`, "system");
        }, 800);
        return;
    }

    try {
        const response = await fetch(`${API_BASE}/api/command`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ command: cmdName })
        });
        const result = await response.json();
        if (result.status === "success") {
            logTerminal(result.message, "system");
        } else {
            logTerminal(`Execution error: ${result.message}`, "system");
        }
    } catch (err) {
        logTerminal(`Telemetry uplink error: ${err.message}`, "system");
    }
}

// Speech Synthesis
function speak(text, callback) {
    if (!window.speechSynthesis) {
        if (callback) callback();
        return;
    }
    
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    
    const voices = window.speechSynthesis.getVoices();
    let bestVoice = voices.find(v => v.lang.includes("en-GB") && v.name.toLowerCase().includes("female"));
    if (!bestVoice) bestVoice = voices.find(v => v.lang.includes("en-GB"));
    if (!bestVoice) bestVoice = voices.find(v => v.lang.includes("en-IE"));
    if (!bestVoice) bestVoice = voices.find(v => v.name.toLowerCase().includes("female") && v.lang.startsWith("en"));
    if (!bestVoice) bestVoice = voices.find(v => v.lang.startsWith("en"));
    
    if (bestVoice) utterance.voice = bestVoice;
    utterance.rate = 1.05;
    utterance.pitch = 1.1;
    
    const wave = document.getElementById("speech-wave");
    const reactor = document.getElementById("reactor-trigger");
    const stateText = document.getElementById("reactor-state-text");
    
    utterance.onstart = () => {
        if (wave) wave.classList.add("active");
        if (reactor) reactor.classList.add("speaking");
        if (stateText) stateText.innerText = "SPEAKING...";
    };
    
    utterance.onend = () => {
        if (wave) wave.classList.remove("active");
        if (reactor) reactor.classList.remove("speaking");
        if (stateText) stateText.innerText = isListening ? "LISTENING..." : "TAP TO TALK";
        if (callback) callback();
    };

    utterance.onerror = () => {
        if (wave) wave.classList.remove("active");
        if (reactor) reactor.classList.remove("speaking");
        if (stateText) stateText.innerText = "TAP TO TALK";
        if (callback) callback();
    };
    
    window.speechSynthesis.speak(utterance);
}

// Biometric setup & triggers
function loadVoicePrint() {
    const savedPitch = localStorage.getItem("friday_voice_print_pitch");
    const savedEnforced = localStorage.getItem("friday_voice_print_enforced");
    const savedKey = localStorage.getItem("friday_gemini_api_key");
    
    if (savedPitch) {
        registeredVoicePitch = parseFloat(savedPitch);
        const printValEl = document.getElementById("bio-print-value");
        if (printValEl) printValEl.innerText = `${Math.round(registeredVoicePitch)} Hz`;
        const toggleBtn = document.getElementById("btn-bio-toggle");
        if (toggleBtn) {
            toggleBtn.removeAttribute("disabled");
            toggleBtn.style.opacity = "1";
        }
    }
    
    if (savedEnforced === "true" && savedPitch) {
        isBiometricEnforced = true;
        updateBioUI();
    }
    
    if (savedKey) {
        geminiApiKey = savedKey;
        const keyInput = document.getElementById("gemini-key-input");
        if (keyInput) keyInput.value = geminiApiKey;
        logTerminal("System: Cognitive LLM uplink primed.", "system");
    }
}

function updateBioUI() {
    const lockStatusEl = document.getElementById("bio-lock-status");
    const toggleBtn = document.getElementById("btn-bio-toggle");
    
    if (lockStatusEl) {
        if (isBiometricEnforced) {
            lockStatusEl.innerText = "ENFORCED";
            lockStatusEl.style.color = "#ef4444";
            lockStatusEl.style.textShadow = "0 0 8px rgba(239, 68, 68, 0.6)";
        } else {
            lockStatusEl.innerText = "OFF";
            lockStatusEl.style.color = "#6b7280";
            lockStatusEl.style.textShadow = "none";
        }
    }
    
    if (toggleBtn) {
        toggleBtn.innerText = isBiometricEnforced ? "DISABLE LOCK" : "ENFORCE LOCK";
        toggleBtn.style.background = isBiometricEnforced ? "rgba(239, 68, 68, 0.15)" : "rgba(239, 68, 68, 0.05)";
    }
}

function toggleBiometricLock() {
    if (!registeredVoicePitch) return;
    isBiometricEnforced = !isBiometricEnforced;
    localStorage.setItem("friday_voice_print_enforced", isBiometricEnforced);
    updateBioUI();
    
    if (isBiometricEnforced) {
        speak("Biometric voice lock enforced, Boss. Restricting console access.");
        logTerminal("Biometric Lock ENFORCED. Restricting system to registered frequency profile.", "system");
    } else {
        speak("Biometric lock disengaged.");
        logTerminal("Biometric Lock DISABLED.", "system");
    }
}

async function registerVoicePrint() {
    speak("Please speak continuously for three seconds. Initializing voice print calibration.");
    logTerminal("Voice Print Calibration: Speak into microphone...", "system");
    
    try {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        mediaStream = stream;
        
        audioContext = new (window.AudioContext || window.webkitAudioContext)();
        const source = audioContext.createMediaStreamSource(stream);
        analyserNode = audioContext.createAnalyser();
        analyserNode.fftSize = 2048;
        source.connect(analyserNode);
        
        pitchSamples = [];
        isAnalyzingAudio = true;
        
        const meterContainer = document.getElementById("pitch-meter-container");
        if (meterContainer) meterContainer.style.display = "flex";
        
        const sampleInterval = setInterval(() => {
            if (!isAnalyzingAudio) {
                clearInterval(sampleInterval);
                return;
            }
            const pitch = detectPitch();
            if (pitch > 0) {
                pitchSamples.push(pitch);
                updatePitchMeter(pitch, registeredVoicePitch || pitch);
            }
        }, 100);
        
        setTimeout(() => {
            isAnalyzingAudio = false;
            clearInterval(sampleInterval);
            stream.getTracks().forEach(track => track.stop());
            if (audioContext) audioContext.close();
            
            if (pitchSamples.length > 0) {
                const avgPitch = pitchSamples.reduce((a, b) => a + b, 0) / pitchSamples.length;
                registeredVoicePitch = avgPitch;
                localStorage.setItem("friday_voice_print_pitch", avgPitch);
                
                const printValEl = document.getElementById("bio-print-value");
                if (printValEl) printValEl.innerText = `${Math.round(avgPitch)} Hz`;
                
                const toggleBtn = document.getElementById("btn-bio-toggle");
                if (toggleBtn) {
                    toggleBtn.removeAttribute("disabled");
                    toggleBtn.style.opacity = "1";
                }
                
                if (meterContainer) meterContainer.style.display = "none";
                speak(`Voice print saved. Profile locked at ${Math.round(avgPitch)} Hertz.`);
                logTerminal(`Voice print calibration SUCCESS: locked at ${Math.round(avgPitch)} Hz.`, "system");
            } else {
                speak("Calibration failed, Boss. I couldn't isolate a voice print.");
                logTerminal("Voice calibration FAILED: No voice signal isolated.", "system");
            }
        }, 3000);
        
    } catch (err) {
        speak("Biometric sensor uplink failed. Ensure microphone access is approved.");
        logTerminal(`Sensor uplink failed: ${err.message}`, "system");
    }
}

function detectPitch() {
    if (!analyserNode) return -1;
    const bufferLength = analyserNode.frequencyBinCount;
    const dataArray = new Uint8Array(bufferLength);
    analyserNode.getByteFrequencyData(dataArray);
    
    const sampleRate = audioContext.sampleRate;
    const hzPerBin = sampleRate / analyserNode.fftSize;
    
    const minBin = Math.floor(80 / hzPerBin);
    const maxBin = Math.ceil(300 / hzPerBin);
    
    let maxVal = -1;
    let peakBin = -1;
    
    for (let i = minBin; i <= maxBin; i++) {
        if (dataArray[i] > maxVal) {
            maxVal = dataArray[i];
            peakBin = i;
        }
    }
    
    if (maxVal > 30) {
        return peakBin * hzPerBin;
    }
    return -1;
}

function updatePitchMeter(pitch, target) {
    const deltaSpan = document.getElementById("pitch-delta");
    const meterFill = document.getElementById("pitch-meter-fill");
    if (!deltaSpan || !meterFill) return;
    
    const delta = Math.abs(pitch - target);
    deltaSpan.innerText = `${Math.round(delta)} Hz`;
    const matchPct = Math.max(0, 100 - (delta * 2.5));
    meterFill.style.width = `${matchPct}%`;
    meterFill.style.backgroundColor = matchPct > 70 ? "#10b981" : matchPct > 40 ? "#fbbf24" : "#ef4444";
}

async function startLiveVoiceAnalysis() {
    try {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        audioContext = new (window.AudioContext || window.webkitAudioContext)();
        const source = audioContext.createMediaStreamSource(stream);
        analyserNode = audioContext.createAnalyser();
        analyserNode.fftSize = 2048;
        source.connect(analyserNode);
        
        pitchSamples = [];
        isAnalyzingAudio = true;
        
        const meterContainer = document.getElementById("pitch-meter-container");
        if (meterContainer && isBiometricEnforced) {
            meterContainer.style.display = "flex";
        }
        
        const analysisLoop = () => {
            if (!isAnalyzingAudio) return;
            const pitch = detectPitch();
            if (pitch > 0) {
                pitchSamples.push(pitch);
                if (registeredVoicePitch) {
                    updatePitchMeter(pitch, registeredVoicePitch);
                }
            }
            requestAnimationFrame(analysisLoop);
        };
        analysisLoop();
        return stream;
    } catch (e) {
        console.warn("Audio spectrum initialization failed: " + e.message);
        return null;
    }
}

// LLM settings
function saveGeminiKey() {
    const val = document.getElementById("gemini-key-input").value.trim();
    if (!val) return;
    geminiApiKey = val;
    localStorage.setItem("friday_gemini_api_key", val);
    logTerminal("System: Cognitive LLM nodes updated successfully.", "system");
    speak("Cognitive nodes updated, Boss.");
}

// Speech Recognition & Speech processing
function initSpeechRecognition() {
    const SpeechRec = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRec) {
        console.log("Speech recognition not supported in browser.");
        return;
    }
    
    speechRecognition = new SpeechRec();
    speechRecognition.continuous = false;
    speechRecognition.interimResults = false;
    speechRecognition.lang = "en-US";
    
    let voiceStream = null;
    
    speechRecognition.onstart = async () => {
        isListening = true;
        const btn = document.getElementById("mic-btn");
        const reactor = document.getElementById("reactor-trigger");
        const stateText = document.getElementById("reactor-state-text");
        
        if (btn) btn.classList.add("active");
        if (reactor) reactor.classList.add("listening");
        if (stateText) stateText.innerText = "LISTENING...";
        
        voiceStream = await startLiveVoiceAnalysis();
    };
    
    speechRecognition.onend = () => {
        isListening = false;
        const btn = document.getElementById("mic-btn");
        const reactor = document.getElementById("reactor-trigger");
        const stateText = document.getElementById("reactor-state-text");
        
        if (btn) btn.classList.remove("active");
        if (reactor) reactor.classList.remove("listening");
        if (stateText && !window.speechSynthesis.speaking) stateText.innerText = "TAP TO TALK";
        
        isAnalyzingAudio = false;
        if (voiceStream) {
            voiceStream.getTracks().forEach(track => track.stop());
            voiceStream = null;
        }
        if (audioContext) {
            audioContext.close();
            audioContext = null;
        }
        analyserNode = null;
        
        setTimeout(() => {
            const meterContainer = document.getElementById("pitch-meter-container");
            if (meterContainer) meterContainer.style.display = "none";
        }, 1500);
    };
    
    speechRecognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        
        if (isBiometricEnforced && registeredVoicePitch) {
            if (pitchSamples.length > 0) {
                const avgPitch = pitchSamples.reduce((a, b) => a + b, 0) / pitchSamples.length;
                const delta = Math.abs(avgPitch - registeredVoicePitch);
                logTerminal(`Biometric telemetry: voice delta = ${Math.round(delta)} Hz (Threshold < 30 Hz)`, "system");
                
                if (delta > 30) {
                    logTerminal("WARNING: Voice biometric mismatch. Command execution blocked.", "system");
                    speak("Voice signature mismatch, Boss. Access denied.");
                    return;
                }
            } else {
                logTerminal("WARNING: Biometric verification failed (Audio signal weak). Access blocked.", "system");
                speak("I couldn't isolate your voice profile, Boss. Access denied.");
                return;
            }
        }
        
        processBossCommand(transcript);
    };
}

function toggleListening() {
    if (!speechRecognition) {
        speak("Voice recognition is not fully supported in this browser layout, Boss. Please type your command.");
        return;
    }
    if (isListening) {
        speechRecognition.stop();
    } else {
        speechRecognition.start();
    }
}

// Conversation Processing (Local commands + Gemini LLM)
async function processBossCommand(text) {
    if (!text.trim()) return;
    
    logTerminal(text, "user");
    const cleanText = text.toLowerCase().trim();
    
    // Quick local overrides
    if (cleanText === "open vscode" || cleanText === "open vs code" || cleanText === "open code") {
        triggerSystemCommand("vscode");
        speak("Initializing VS Code in workspace...");
        return;
    }
    if (cleanText === "open chrome" || cleanText === "open browser") {
        triggerSystemCommand("chrome");
        speak("Spinning up browser...");
        return;
    }
    if (cleanText === "lock computer" || cleanText === "lock screen") {
        triggerSystemCommand("lock");
        speak("Securing console.");
        return;
    }

    // Advanced Gemini LLM routing
    if (geminiApiKey) {
        logTerminal("Thinking...", "system");
        try {
            const responseText = await queryGeminiAPI(text);
            handleFridayResponse(responseText);
        } catch (e) {
            logTerminal(`Cognitive error: ${e.message}`, "system");
            speak("I encountered a cognitive error, Boss.");
        }
    } else {
        // Fallback local mock responses
        let response = "";
        if (cleanText.includes("hello") || cleanText.includes("wake up")) {
            response = "System active, Boss. Telemetry link is operational. Please configure your Gemini API key below to unlock advanced intelligence.";
        } else if (cleanText.includes("status") || cleanText.includes("diagnostics")) {
            response = `Diagnostics nominal. CPU load is ${Math.round(currentTelemetry.cpu)} percent. Memory is ${Math.round(currentTelemetry.ram)} percent. Uptime is ${currentTelemetry.uptime}.`;
        } else {
            response = `I hear you, Boss. Direct system controls (VS Code, Chrome, Calculator, Lock) are active. Connect your Gemini API Key for general reasoning.`;
        }
        logTerminal(response, "bot");
        speak(response);
    }
}

async function queryGeminiAPI(promptText) {
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${geminiApiKey}`;
    
    const systemInstruction = "You are F.R.I.D.A.Y., a loyal, sharp, and witty digital assistant created by Stark Industries for Tony Stark (the user). You speak with a British female persona. Address the user as 'Boss' or 'Sir'. You can execute system commands on the user's laptop by adding this exact text at the end of your response: [RUN_COMMAND: cmdName]. The allowed cmdNames are: vscode, chrome, explorer, calc, notepad, lock. Example: 'Right away, Boss. Launching notepad. [RUN_COMMAND: notepad]'. Keep responses very short and crisp (1-3 sentences).";
    
    const requestBody = {
        contents: [
            { role: "user", parts: [{ text: promptText }] }
        ],
        systemInstruction: {
            parts: [{ text: systemInstruction }]
        },
        generationConfig: {
            maxOutputTokens: 150,
            temperature: 0.7
        }
    };

    const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(requestBody)
    });
    
    if (!response.ok) {
        const errData = await response.json();
        throw new Error(errData.error?.message || "Gemini API query failed");
    }

    const data = await response.json();
    return data.candidates[0].content.parts[0].text;
}

function handleFridayResponse(rawResponse) {
    let text = rawResponse;
    
    // Command Interceptor: look for [RUN_COMMAND: cmdName]
    const cmdRegex = /\[RUN_COMMAND:\s*(\w+)\]/i;
    const match = text.match(cmdRegex);
    
    if (match && match[1]) {
        const cmdName = match[1].toLowerCase().trim();
        triggerSystemCommand(cmdName);
        // Strip the command bracket from display & TTS
        text = text.replace(cmdRegex, "").trim();
    }
    
    logTerminal(text, "bot");
    speak(text);
}

// Input key handler
function handleInputKey(event) {
    if (event.key === "Enter") {
        sendChat();
    }
}

function sendChat() {
    const input = document.getElementById("chat-input");
    if (!input || !input.value.trim()) return;
    const text = input.value;
    input.value = "";
    processBossCommand(text);
}

// DOM Init
window.addEventListener("DOMContentLoaded", () => {
    loadVoicePrint();
    pollTelemetry();
    pollingInterval = setInterval(pollTelemetry, 2000);
    initSpeechRecognition();
    
    const reactor = document.getElementById("reactor-trigger");
    if (reactor) reactor.addEventListener("click", toggleListening);
    const micBtn = document.getElementById("mic-btn");
    if (micBtn) micBtn.addEventListener("click", toggleListening);
    
    if (window.speechSynthesis) {
        window.speechSynthesis.onvoiceschanged = () => {
            console.log("Audio systems mapped.");
        };
    }
    
    setTimeout(() => {
        speak("F.R.I.D.A.Y. assistant core initialized. Secure voice link ready.");
    }, 1500);
});
