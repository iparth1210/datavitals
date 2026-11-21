/**
 * DATAVITALS OS - v14.0 ADVANCED ENGINE SUITE
 * 1. 🎧 AI Audio Briefing Engine (Web Speech API)
 * 2. 🎯 Technical Knowledge Check & Micro-Quiz Engine (+50 XP)
 * 3. 📊 Interactive SVG Live Chart Engine for Data Studio
 * 4. 📈 Dynamic Reading Progress Bar
 */

// --- 1. 🎧 AI AUDIO BRIEFING ENGINE ---
window.AudioBriefing = {
    synth: (typeof window !== 'undefined' && 'speechSynthesis' in window) ? window.speechSynthesis : null,
    currentUtterance: null,
    isPlaying: false,
    isPaused: false,
    rate: 1.1,

    getBriefingText(lesson) {
        if (!lesson) return '';
        const title = lesson.title ? lesson.title.replace(/^W\d+-D\d+:\s*/, '') : 'Lesson';
        const tech = (typeof extractTrackText === 'function') ? extractTrackText(lesson.story || '', 'tech') : '';
        const health = (typeof extractTrackText === 'function') ? extractTrackText(lesson.story || '', 'health') : '';
        const lab = (typeof extractTrackText === 'function') ? extractTrackText(lesson.story || '', 'lab') : '';

        return `DataVitals mission briefing for ${title}. ` +
               `Core Technical Substrate: ${tech}. ` +
               `Enterprise Production Impact: ${health}. ` +
               `Lab Protocol: ${lab}. Mission active. Proceed with analysis.`;
    },

    toggle() {
        if (!this.synth) {
            alert('Speech synthesis audio briefing is not supported on this browser device.');
            return;
        }

        if (this.isPlaying) {
            this.stop();
            return;
        }

        const lesson = window.activeLessonContext || (window.modules ? window.modules[0] : null);
        if (!lesson) return;

        const text = this.getBriefingText(lesson);
        this.synth.cancel();

        const utterance = new SpeechSynthesisUtterance(text);
        utterance.rate = this.rate;
        utterance.pitch = 1.0;

        try {
            const voices = this.synth.getVoices();
            const preferredVoice = voices.find(v => v.lang.startsWith('en') && 
                (v.name.includes('Natural') || v.name.includes('Google') || v.name.includes('Samantha') || v.name.includes('Daniel') || v.name.includes('Alex')));
            if (preferredVoice) {
                utterance.voice = preferredVoice;
            }
        } catch(e) {}

        utterance.onstart = () => {
            this.isPlaying = true;
            this.isPaused = false;
            this.updateUI(true);
        };

        utterance.onend = () => {
            this.isPlaying = false;
            this.isPaused = false;
            this.updateUI(false);
        };

        utterance.onerror = () => {
            this.isPlaying = false;
            this.isPaused = false;
            this.updateUI(false);
        };

        this.currentUtterance = utterance;
        this.synth.speak(utterance);
    },

    togglePause() {
        if (!this.synth || !this.isPlaying) return;
        if (this.isPaused) {
            this.synth.resume();
            this.isPaused = false;
        } else {
            this.synth.pause();
            this.isPaused = true;
        }
        this.updateHUD();
    },

    cycleSpeed() {
        if (this.rate === 1.0) this.rate = 1.2;
        else if (this.rate === 1.2) this.rate = 1.5;
        else this.rate = 1.0;

        if (this.isPlaying) {
            this.stop();
            setTimeout(() => this.toggle(), 100);
        } else {
            this.updateHUD();
        }
    },

    stop() {
        if (this.synth) {
            this.synth.cancel();
        }
        this.isPlaying = false;
        this.isPaused = false;
        this.updateUI(false);
    },

    updateUI(active) {
        const btn = document.getElementById('lesson-audio-btn');
        const icon = document.getElementById('audio-icon');
        const label = document.getElementById('audio-btn-label');
        let hud = document.getElementById('audio-briefing-hud');

        if (btn) {
            if (active) {
                btn.style.borderColor = 'var(--accent-cyan)';
                btn.style.color = 'var(--accent-cyan)';
                btn.style.background = 'rgba(6, 182, 212, 0.15)';
                if (label) label.innerText = 'Stop Audio';
                if (icon) icon.innerText = '⏹';
            } else {
                btn.style.borderColor = 'var(--accent-pink)';
                btn.style.color = 'var(--accent-pink)';
                btn.style.background = 'transparent';
                if (label) label.innerText = 'Audio Briefing';
                if (icon) icon.innerText = '🎧';
            }
        }

        if (active) {
            if (!hud) {
                hud = document.createElement('div');
                hud.id = 'audio-briefing-hud';
                hud.className = 'audio-briefing-hud glass-refractive';
                document.body.appendChild(hud);
            }
            this.renderHUD(hud);
            hud.style.display = 'flex';
        } else {
            if (hud) hud.style.display = 'none';
        }
    },

    renderHUD(hud) {
        const title = window.activeLessonContext ? window.activeLessonContext.title : 'Lesson Briefing';
        hud.innerHTML = `
            <div class="audio-wave">
                <span class="bar"></span><span class="bar"></span><span class="bar"></span><span class="bar"></span>
            </div>
            <div style="flex: 1; min-width: 0; margin: 0 10px;">
                <div style="font-family: 'JetBrains Mono'; font-size: 0.68rem; color: var(--accent-cyan); text-transform: uppercase;">🎧 AI Narration</div>
                <div style="font-family: 'Space Grotesk'; font-size: 0.78rem; color: white; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; font-weight: 600;">${title}</div>
            </div>
            <div style="display: flex; gap: 6px; align-items: center;">
                <button onclick="window.AudioBriefing.togglePause()" class="audio-hud-btn" title="Pause / Resume" style="padding: 4px 8px; font-size: 0.75rem; border-radius: 6px; background: rgba(255,255,255,0.1); border: 1px solid rgba(255,255,255,0.2); color: white; cursor: pointer;">
                    ${this.isPaused ? '▶' : '⏸'}
                </button>
                <button onclick="window.AudioBriefing.cycleSpeed()" class="audio-hud-btn" title="Cycle Speed" style="padding: 4px 8px; font-family: 'JetBrains Mono'; font-size: 0.75rem; border-radius: 6px; background: rgba(255,255,255,0.1); border: 1px solid rgba(255,255,255,0.2); color: var(--accent-cyan); cursor: pointer;">
                    ${this.rate}x
                </button>
                <button onclick="window.AudioBriefing.stop()" class="audio-hud-btn" title="Stop Audio" style="padding: 4px 8px; font-size: 0.75rem; border-radius: 6px; background: rgba(236,72,153,0.2); border: 1px solid var(--accent-pink); color: var(--accent-pink); cursor: pointer;">
                    ⏹
                </button>
            </div>
        `;
    },

    updateHUD() {
        const hud = document.getElementById('audio-briefing-hud');
        if (hud && this.isPlaying) {
            this.renderHUD(hud);
        }
    }
};

window.toggleAudioBriefing = () => {
    if (window.AudioBriefing) window.AudioBriefing.toggle();
};

// --- 2. 🎯 TECHNICAL KNOWLEDGE CHECK & MICRO-QUIZ ENGINE ---
const technicalKnowledgeBank = {
    'lesson-w1-d1': {
        question: 'In distributed cloud computing infrastructure, which hardware architecture is fundamentally required for parallel matrix multiplications in deep learning and large-scale AI inference?',
        options: [
            { text: 'Sequential Single-Core CPU Arithmetic Logic Units', correct: false },
            { text: 'GPU / TPU Parallel Tensor Accelerator Arrays', correct: true },
            { text: 'Mechanical SAS Magnetic Hard Drives', correct: false },
            { text: 'Virtual Linux Swap File on Disk', correct: false }
        ],
        explanation: 'GPUs and TPUs feature thousands of specialized SIMD/tensor execution cores engineered specifically for parallel matrix calculations required by deep neural networks.'
    },
    'lesson-w1-d2': {
        question: 'When ingesting distributed system telemetry across global multi-region cloud clusters, which timestamp format is required for reliable chronological sequencing?',
        options: [
            { text: 'Local 12-hour AM/PM string without timezone offset', correct: false },
            { text: 'ISO 8601 UTC timestamp format (e.g. 2026-10-03T12:00:00Z)', correct: true },
            { text: 'Unformatted epoch milliseconds stored as a float', correct: false },
            { text: 'Julian day integers without calendar year references', correct: false }
        ],
        explanation: 'ISO 8601 UTC timestamps provide unequivocal chronological ordering across worldwide distributed systems and comply strictly with RFC 3339 standards.'
    },
    'lesson-w1-d3': {
        question: 'In database query optimization for high-throughput enterprise datasets with millions of transactional records, how does a B-Tree index accelerate lookup speed?',
        options: [
            { text: 'By automatically compressing table row buffers into gzip streams', correct: false },
            { text: 'By structuring search keys into a logarithmic hierarchy, avoiding O(N) full-table scans', correct: true },
            { text: 'By pre-loading the entire table into browser GPU memory', correct: false },
            { text: 'By deleting duplicate rows during query execution', correct: false }
        ],
        explanation: 'B-Tree indexes maintain sorted balanced tree structures that reduce row lookup times from O(N) full-table scans down to O(log N) disk reads.'
    }
};

window.getLessonQuiz = (lesson) => {
    if (!lesson) return null;
    if (technicalKnowledgeBank[lesson.id]) {
        return technicalKnowledgeBank[lesson.id];
    }
    return {
        question: `Based on today's protocol for "${lesson.title}", why is real-time validation essential before deploying enterprise production algorithms?`,
        options: [
            { text: 'To eliminate algorithmic hallucinations and ensure high reliability before production deployment', correct: true },
            { text: 'To bypass automated CI/CD security audits and expedite releases', correct: false },
            { text: 'To discard critical edge-cases that do not match standard distributions', correct: false },
            { text: 'To replace human engineering reviews with unverified heuristics', correct: false }
        ],
        explanation: 'Rigorous automated data verification prevents silent failures, avoids catastrophic production downtime, and enforces SOC 2 compliance.'
    };
};

window.renderQuizCard = (lesson) => {
    if (!lesson) return '';
    const quiz = window.getLessonQuiz(lesson);
    if (!quiz) return '';

    const completedQuizzes = JSON.parse(localStorage.getItem('datavitals_quiz_completed') || '{}');
    const isCompleted = !!completedQuizzes[lesson.id];

    return `
        <div id="quiz-block-${lesson.id}" class="lesson-quiz-card glass-refractive" style="margin-top: 24px; padding: 24px 28px; border-radius: 16px; border: 1px solid ${isCompleted ? 'rgba(16, 185, 129, 0.4)' : 'rgba(139, 92, 246, 0.3)'}; background: rgba(13, 17, 34, 0.65);">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 14px; flex-wrap: wrap; gap: 8px;">
                <div style="display: flex; align-items: center; gap: 8px;">
                    <span style="font-family: 'JetBrains Mono'; font-size: 0.8rem; color: ${isCompleted ? '#10b981' : 'var(--accent-violet)'}; font-weight: 700;">
                        ${isCompleted ? '✓ TECHNICAL ACCREDITATION VERIFIED' : '⚡ TECHNICAL KNOWLEDGE CHECK'}
                    </span>
                </div>
                <span id="quiz-xp-badge-${lesson.id}" style="font-family: 'JetBrains Mono'; font-size: 0.72rem; padding: 3px 8px; border-radius: 6px; background: ${isCompleted ? 'rgba(16, 185, 129, 0.15)' : 'rgba(236, 72, 153, 0.15)'}; color: ${isCompleted ? '#10b981' : 'var(--accent-pink)'}; border: 1px solid ${isCompleted ? '#10b981' : 'var(--accent-pink)'};">
                    ${isCompleted ? 'COMPLETED (+50 XP EARNED)' : '+50 XP FIRST PASS'}
                </span>
            </div>

            <p style="font-family: 'Space Grotesk'; font-size: 0.98rem; font-weight: 600; color: white; margin-bottom: 16px; line-height: 1.5;">
                ${quiz.question}
            </p>

            <div style="display: flex; flex-direction: column; gap: 10px;">
                ${quiz.options.map((opt, idx) => {
                    const letters = ['A', 'B', 'C', 'D'];
                    const isCorrectAnswer = opt.correct;
                    const extraClass = (isCompleted && isCorrectAnswer) ? 'correct' : '';
                    return `
                        <button onclick="window.submitQuizAnswer('${lesson.id}', ${idx})" id="quiz-opt-${lesson.id}-${idx}" class="quiz-option-btn ${extraClass}" ${isCompleted ? 'disabled' : ''}>
                            <span style="font-family: 'JetBrains Mono'; font-weight: 700; color: var(--accent-cyan);">${letters[idx]}</span>
                            <span style="flex: 1;">${opt.text}</span>
                        </button>
                    `;
                }).join('')}
            </div>

            <div id="quiz-feedback-${lesson.id}" style="margin-top: 16px; font-family: 'Space Grotesk'; font-size: 0.88rem; display: ${isCompleted ? 'block' : 'none'}; padding: 12px 16px; border-radius: 10px; background: rgba(16, 185, 129, 0.1); border: 1px solid rgba(16, 185, 129, 0.3); color: #ecfdf5;">
                <div style="font-weight: 700; color: #10b981; margin-bottom: 4px;">✓ Verified Engineering Rationale:</div>
                <div>${quiz.explanation}</div>
            </div>
        </div>
    `;
};

window.submitQuizAnswer = (lessonId, optionIndex) => {
    const lesson = (typeof getLessonById === 'function') ? getLessonById(lessonId) : null;
    if (!lesson) return;
    const quiz = window.getLessonQuiz(lesson);
    if (!quiz) return;
    const selected = quiz.options[optionIndex];
    const feedbackEl = document.getElementById(`quiz-feedback-${lessonId}`);
    const cardEl = document.getElementById(`quiz-block-${lessonId}`);
    const xpBadge = document.getElementById(`quiz-xp-badge-${lessonId}`);
    const clickedBtn = document.getElementById(`quiz-opt-${lessonId}-${optionIndex}`);

    if (selected && selected.correct) {
        try {
            if (typeof AudioEngine !== 'undefined' && AudioEngine.playSuccessChime) {
                AudioEngine.playSuccessChime();
            }
        } catch(e) {}
        try {
            if (typeof triggerConfetti === 'function') triggerConfetti();
        } catch(e) {}

        if (window.Gamification) {
            Gamification.addXP(50);
        }

        const completed = JSON.parse(localStorage.getItem('datavitals_quiz_completed') || '{}');
        completed[lessonId] = true;
        localStorage.setItem('datavitals_quiz_completed', JSON.stringify(completed));

        if (cardEl) {
            cardEl.style.borderColor = 'rgba(16, 185, 129, 0.5)';
        }
        if (xpBadge) {
            xpBadge.innerText = 'COMPLETED (+50 XP EARNED)';
            xpBadge.style.color = '#10b981';
            xpBadge.style.borderColor = '#10b981';
            xpBadge.style.background = 'rgba(16, 185, 129, 0.15)';
        }

        quiz.options.forEach((opt, idx) => {
            const btn = document.getElementById(`quiz-opt-${lessonId}-${idx}`);
            if (btn) {
                btn.disabled = true;
                if (opt.correct) {
                    btn.classList.add('correct');
                }
            }
        });

        if (feedbackEl) {
            feedbackEl.style.display = 'block';
            feedbackEl.style.background = 'rgba(16, 185, 129, 0.12)';
            feedbackEl.style.borderColor = 'rgba(16, 185, 129, 0.4)';
            feedbackEl.style.color = '#ecfdf5';
            feedbackEl.innerHTML = `
                <div style="font-weight: 700; color: #10b981; margin-bottom: 4px;">✨ Correct Protocol Verification (+50 XP Earned)</div>
                <div>${quiz.explanation}</div>
            `;
        }
    } else {
        try {
            if (typeof AudioEngine !== 'undefined' && AudioEngine.playErrorTone) {
                AudioEngine.playErrorTone();
            }
        } catch(e) {}
        if (window.Gamification) {
            Gamification.takeDamage(5);
        }

        if (clickedBtn) {
            clickedBtn.classList.add('incorrect');
            setTimeout(() => clickedBtn.classList.remove('incorrect'), 600);
        }

        if (feedbackEl) {
            feedbackEl.style.display = 'block';
            feedbackEl.style.background = 'rgba(239, 68, 68, 0.1)';
            feedbackEl.style.borderColor = 'rgba(239, 68, 68, 0.3)';
            feedbackEl.style.color = '#fee2e2';
            feedbackEl.innerHTML = `
                <div style="font-weight: 700; color: var(--accent-pink); margin-bottom: 4px;">⚠️ Architecture Mismatch</div>
                <div>Review the mission briefing parameters above and select the optimal architectural response.</div>
            `;
        }
    }
};

// --- 3. 📊 INTERACTIVE SVG CHART GENERATOR FOR DATA STUDIO ---
window.currentStudioView = 'table';
window.setStudioView = (view) => {
    window.currentStudioView = view;
    const tabTable = document.getElementById('ds-tab-table');
    const tabChart = document.getElementById('ds-tab-chart');
    const viewTable = document.getElementById('ds-view-table');
    const viewChart = document.getElementById('ds-view-chart');

    if (view === 'table') {
        if (tabTable) {
            tabTable.style.background = 'rgba(6,182,212,0.15)';
            tabTable.style.borderColor = 'var(--accent-cyan)';
            tabTable.style.color = 'var(--accent-cyan)';
        }
        if (tabChart) {
            tabChart.style.background = 'transparent';
            tabChart.style.borderColor = 'rgba(255,255,255,0.1)';
            tabChart.style.color = 'var(--text-muted)';
        }
        if (viewTable) viewTable.style.display = 'block';
        if (viewChart) viewChart.style.display = 'none';
    } else {
        if (tabChart) {
            tabChart.style.background = 'rgba(6,182,212,0.15)';
            tabChart.style.borderColor = 'var(--accent-cyan)';
            tabChart.style.color = 'var(--accent-cyan)';
        }
        if (tabTable) {
            tabTable.style.background = 'transparent';
            tabTable.style.borderColor = 'rgba(255,255,255,0.1)';
            tabTable.style.color = 'var(--text-muted)';
        }
        if (viewTable) viewTable.style.display = 'none';
        if (viewChart) viewChart.style.display = 'block';

        const selector = document.getElementById('ds-selector');
        const activeKey = selector ? selector.value : 'ehr';
        window.renderStudioChart(activeKey);
    }
};

window.renderStudioChart = (key) => {
    const container = document.getElementById('ds-chart-wrapper');
    if (!container) return;

    const datasets = (typeof studioDatasets !== 'undefined') ? studioDatasets : {
        ehr: [
            { id: 101, session_id: "SES-492", latency_ms: 45, priority_tier: 4, service: "AuthService", status: "SUCCESS" },
            { id: 102, session_id: "SES-118", latency_ms: 12, priority_tier: 2, service: "BillingEngine", status: "SUCCESS" },
            { id: 103, session_id: "SES-883", latency_ms: 90, priority_tier: 5, service: "StreamIngest", status: "TIMEOUT" },
            { id: 104, session_id: "SES-304", latency_ms: 8,  priority_tier: 1, service: "UserRegistry", status: "SUCCESS" },
            { id: 105, session_id: "SES-752", latency_ms: 30, priority_tier: 3, service: "AnalyticsAPI", status: "SUCCESS" }
        ],
        bp: [
            { cohort_id: "C-01", variant: "Control_Baseline", baseline_latency_ms: 142, week4_latency_ms: 140, improvement_ms: 2 },
            { cohort_id: "C-02", variant: "Variant_Memcached", baseline_latency_ms: 145, week4_latency_ms: 128, improvement_ms: 17 },
            { cohort_id: "C-03", variant: "Variant_RedisCluster", baseline_latency_ms: 150, week4_latency_ms: 122, improvement_ms: 28 },
            { cohort_id: "C-04", variant: "Control_Baseline", baseline_latency_ms: 138, week4_latency_ms: 137, improvement_ms: 1 }
        ],
        claims: [
            { tx_id: "TXN-901", routing_code: "RT-100", requested_usd: 1450.00, settled_usd: 1450.00, status: "SETTLED" },
            { tx_id: "TXN-902", routing_code: "RT-204", requested_usd: 2800.00, settled_usd: 0.00, status: "FRAUD_FLAGGED" },
            { tx_id: "TXN-903", routing_code: "RT-105", requested_usd: 980.00, settled_usd: 980.00, status: "SETTLED" }
        ]
    };

    if (key === 'ehr' || key === 'events') {
        const data = datasets.events || datasets.ehr;
        const maxWait = 100;
        const chartHeight = 220;
        const chartWidth = 620;
        const barWidth = 60;
        const gap = (chartWidth - (data.length * barWidth)) / (data.length + 1);

        const priorityColors = {
            1: '#10b981',
            2: '#06b6d4',
            3: '#f59e0b',
            4: '#f97316',
            5: '#ef4444'
        };

        const barsSvg = data.map((d, i) => {
            const x = gap + i * (barWidth + gap);
            const val = d.latency_ms || d.wait_min || 20;
            const barH = (val / maxWait) * chartHeight;
            const y = chartHeight - barH + 30;
            const tier = d.priority_tier || d.triage_level || 2;
            const color = priorityColors[tier] || '#06b6d4';
            const idLabel = d.session_id || d.patient_id || 'NODE';
            const srvLabel = d.service || d.dept || 'Core';
            return `
                <g class="chart-bar-group">
                    <rect class="chart-bar-rect" x="${x}" y="${y}" width="${barWidth}" height="${barH}" rx="6" fill="${color}" opacity="0.85">
                        <title>Session: ${idLabel}&#10;Service: ${srvLabel}&#10;Latency: ${val} ms&#10;Priority: P${tier}</title>
                    </rect>
                    <text x="${x + barWidth / 2}" y="${y - 8}" text-anchor="middle" fill="${color}" font-family="'JetBrains Mono', monospace" font-size="11" font-weight="700">${val}ms</text>
                    <text x="${x + barWidth / 2}" y="${chartHeight + 48}" text-anchor="middle" fill="#94a3b8" font-family="'Space Grotesk', sans-serif" font-size="11" font-weight="600">${idLabel}</text>
                    <text x="${x + barWidth / 2}" y="${chartHeight + 64}" text-anchor="middle" fill="#64748b" font-family="'JetBrains Mono', monospace" font-size="9">${srvLabel.slice(0, 7)}</text>
                </g>
            `;
        }).join('');

        container.innerHTML = `
            <div style="background: rgba(13, 17, 34, 0.6); padding: 20px; border-radius: 14px; border: 1px solid rgba(255,255,255,0.08);">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 14px; flex-wrap: wrap; gap: 8px;">
                    <div>
                        <div style="font-family: 'Space Grotesk'; font-size: 1.1rem; font-weight: 700; color: white;">Microservice Cluster Latency & Alert Priority</div>
                        <div style="font-family: 'JetBrains Mono'; font-size: 0.75rem; color: var(--accent-cyan);">COLOR CODED BY ALERT SEVERITY (P1: LOW → P5: OUTAGE)</div>
                    </div>
                    <div style="display: flex; gap: 8px; font-family: 'JetBrains Mono'; font-size: 0.7rem; align-items: center;">
                        <span style="display: flex; align-items: center; gap: 4px; color: #10b981;"><span style="width: 8px; height: 8px; border-radius: 50%; background: #10b981; display: inline-block;"></span> P1</span>
                        <span style="display: flex; align-items: center; gap: 4px; color: #06b6d4;"><span style="width: 8px; height: 8px; border-radius: 50%; background: #06b6d4; display: inline-block;"></span> P2</span>
                        <span style="display: flex; align-items: center; gap: 4px; color: #f59e0b;"><span style="width: 8px; height: 8px; border-radius: 50%; background: #f59e0b; display: inline-block;"></span> P3</span>
                        <span style="display: flex; align-items: center; gap: 4px; color: #f97316;"><span style="width: 8px; height: 8px; border-radius: 50%; background: #f97316; display: inline-block;"></span> P4</span>
                        <span style="display: flex; align-items: center; gap: 4px; color: #ef4444;"><span style="width: 8px; height: 8px; border-radius: 50%; background: #ef4444; display: inline-block;"></span> P5</span>
                    </div>
                </div>

                <div style="width: 100%; overflow-x: auto;">
                    <svg viewBox="0 0 ${chartWidth} 310" style="width: 100%; min-width: 500px; height: auto;">
                        <line x1="20" y1="30" x2="${chartWidth - 20}" y2="30" stroke="rgba(255,255,255,0.06)" stroke-dasharray="4" />
                        <line x1="20" y1="85" x2="${chartWidth - 20}" y2="85" stroke="rgba(255,255,255,0.06)" stroke-dasharray="4" />
                        <line x1="20" y1="140" x2="${chartWidth - 20}" y2="140" stroke="rgba(255,255,255,0.06)" stroke-dasharray="4" />
                        <line x1="20" y1="195" x2="${chartWidth - 20}" y2="195" stroke="rgba(255,255,255,0.06)" stroke-dasharray="4" />
                        <line x1="20" y1="${chartHeight + 30}" x2="${chartWidth - 20}" y2="${chartHeight + 30}" stroke="rgba(255,255,255,0.2)" />
                        ${barsSvg}
                    </svg>
                </div>

                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(160px, 1fr)); gap: 12px; margin-top: 16px;">
                    <div class="chart-kpi-card">
                        <span style="font-family: 'JetBrains Mono'; font-size: 0.7rem; color: var(--text-muted);">AVG LATENCY</span>
                        <span style="font-family: 'Space Grotesk'; font-size: 1.3rem; font-weight: 700; color: white; margin-top: 2px;">37.0 ms</span>
                    </div>
                    <div class="chart-kpi-card">
                        <span style="font-family: 'JetBrains Mono'; font-size: 0.7rem; color: var(--text-muted);">CRITICAL TIERS (P4-P5)</span>
                        <span style="font-family: 'Space Grotesk'; font-size: 1.3rem; font-weight: 700; color: var(--accent-pink); margin-top: 2px;">40% (2 / 5)</span>
                    </div>
                    <div class="chart-kpi-card">
                        <span style="font-family: 'JetBrains Mono'; font-size: 0.7rem; color: var(--text-muted);">99.99% SLA COMPLIANCE</span>
                        <span style="font-family: 'Space Grotesk'; font-size: 1.3rem; font-weight: 700; color: var(--accent-cyan); margin-top: 2px;">80% (4 / 5)</span>
                    </div>
                </div>
            </div>
        `;
    } else if (key === 'bp' || key === 'ab_test') {
        const data = datasets.ab_test || datasets.bp;
        const chartHeight = 220;
        const chartWidth = 620;
        const groupWidth = 100;
        const gap = (chartWidth - (data.length * groupWidth)) / (data.length + 1);

        const barsSvg = data.map((d, i) => {
            const x = gap + i * (groupWidth + gap);
            const bVal = d.baseline_latency_ms || d.baseline_bp || 140;
            const wVal = d.week4_latency_ms || d.week4_bp || 125;
            const drop = d.improvement_ms || d.drop_mmHg || (bVal - wVal);
            const h1 = ((bVal - 100) / 60) * chartHeight;
            const h2 = ((wVal - 100) / 60) * chartHeight;
            const y1 = chartHeight - h1 + 30;
            const y2 = chartHeight - h2 + 30;
            const label = d.cohort_id || d.trial_id || `C-0${i+1}`;
            return `
                <g class="chart-bar-group">
                    <rect class="chart-bar-rect" x="${x}" y="${y1}" width="38" height="${h1}" rx="4" fill="#64748b" opacity="0.8">
                        <title>${d.variant || d.group}&#10;Baseline: ${bVal} ms</title>
                    </rect>
                    <text x="${x + 19}" y="${y1 - 6}" text-anchor="middle" fill="#94a3b8" font-family="'JetBrains Mono', monospace" font-size="10">${bVal}</text>

                    <rect class="chart-bar-rect" x="${x + 44}" y="${y2}" width="38" height="${h2}" rx="4" fill="${drop > 10 ? '#10b981' : '#06b6d4'}" opacity="0.9">
                        <title>${d.variant || d.group}&#10;Optimized: ${wVal} ms&#10;Speedup: -${drop} ms</title>
                    </rect>
                    <text x="${x + 63}" y="${y2 - 6}" text-anchor="middle" fill="${drop > 10 ? '#10b981' : '#06b6d4'}" font-family="'JetBrains Mono', monospace" font-size="10" font-weight="700">${wVal}</text>

                    <text x="${x + 41}" y="${chartHeight + 48}" text-anchor="middle" fill="white" font-family="'Space Grotesk', sans-serif" font-size="10" font-weight="600">${label}</text>
                    <text x="${x + 41}" y="${chartHeight + 64}" text-anchor="middle" fill="${drop > 10 ? '#10b981' : '#94a3b8'}" font-family="'JetBrains Mono', monospace" font-size="9">-${drop} ms</text>
                </g>
            `;
        }).join('');

        container.innerHTML = `
            <div style="background: rgba(13, 17, 34, 0.6); padding: 20px; border-radius: 14px; border: 1px solid rgba(255,255,255,0.08);">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 14px; flex-wrap: wrap; gap: 8px;">
                    <div>
                        <div style="font-family: 'Space Grotesk'; font-size: 1.1rem; font-weight: 700; color: white;">A/B Performance Experiment: Baseline vs Cache Latency (ms)</div>
                        <div style="font-family: 'JetBrains Mono'; font-size: 0.75rem; color: var(--accent-cyan);">GREY: DISK BASELINE // GREEN: IN-MEMORY CACHE (SIGNIFICANT GAIN >10 ms)</div>
                    </div>
                </div>

                <div style="width: 100%; overflow-x: auto;">
                    <svg viewBox="0 0 ${chartWidth} 310" style="width: 100%; min-width: 500px; height: auto;">
                        <line x1="20" y1="30" x2="${chartWidth - 20}" y2="30" stroke="rgba(255,255,255,0.06)" stroke-dasharray="4" />
                        <line x1="20" y1="85" x2="${chartWidth - 20}" y2="85" stroke="rgba(255,255,255,0.06)" stroke-dasharray="4" />
                        <line x1="20" y1="140" x2="${chartWidth - 20}" y2="140" stroke="rgba(255,255,255,0.06)" stroke-dasharray="4" />
                        <line x1="20" y1="195" x2="${chartWidth - 20}" y2="195" stroke="rgba(255,255,255,0.06)" stroke-dasharray="4" />
                        <line x1="20" y1="${chartHeight + 30}" x2="${chartWidth - 20}" y2="${chartHeight + 30}" stroke="rgba(255,255,255,0.2)" />
                        ${barsSvg}
                    </svg>
                </div>

                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(160px, 1fr)); gap: 12px; margin-top: 16px;">
                    <div class="chart-kpi-card">
                        <span style="font-family: 'JetBrains Mono'; font-size: 0.7rem; color: var(--text-muted);">MAX LATENCY SPEEDUP</span>
                        <span style="font-family: 'Space Grotesk'; font-size: 1.3rem; font-weight: 700; color: #10b981; margin-top: 2px;">-28 ms (Redis)</span>
                    </div>
                    <div class="chart-kpi-card">
                        <span style="font-family: 'JetBrains Mono'; font-size: 0.7rem; color: var(--text-muted);">CONTROL MEAN DRIFT</span>
                        <span style="font-family: 'Space Grotesk'; font-size: 1.3rem; font-weight: 700; color: var(--text-muted); margin-top: 2px;">-1.5 ms</span>
                    </div>
                    <div class="chart-kpi-card">
                        <span style="font-family: 'JetBrains Mono'; font-size: 0.7rem; color: var(--text-muted);">EXPERIMENT SIGNIFICANCE</span>
                        <span style="font-family: 'Space Grotesk'; font-size: 1.3rem; font-weight: 700; color: var(--accent-cyan); margin-top: 2px;">p &lt; 0.001</span>
                    </div>
                </div>
            </div>
        `;
    } else if (key === 'claims' || key === 'transactions') {
        const data = datasets.transactions || datasets.claims;
        const chartHeight = 220;
        const chartWidth = 620;
        const groupWidth = 120;
        const gap = (chartWidth - (data.length * groupWidth)) / (data.length + 1);

        const barsSvg = data.map((d, i) => {
            const x = gap + i * (groupWidth + gap);
            const maxVal = 3000;
            const req = d.requested_usd || d.billed_amount || 1000;
            const set = d.settled_usd || d.approved_amount || 0;
            const h1 = (req / maxVal) * chartHeight;
            const h2 = (set / maxVal) * chartHeight;
            const y1 = chartHeight - h1 + 30;
            const y2 = chartHeight - h2 + 30;
            const idLabel = d.tx_id || d.claim_id || 'TXN';
            const codeLabel = d.routing_code || d.icd_code || 'CODE';
            const statusLabel = d.status || 'OK';
            return `
                <g class="chart-bar-group">
                    <rect class="chart-bar-rect" x="${x}" y="${y1}" width="46" height="${h1}" rx="4" fill="#8b5cf6" opacity="0.8">
                        <title>${idLabel} (${codeLabel})&#10;Requested: $${req.toFixed(2)}</title>
                    </rect>
                    <text x="${x + 23}" y="${y1 - 6}" text-anchor="middle" fill="#c084fc" font-family="'JetBrains Mono', monospace" font-size="10">$${Math.round(req)}</text>

                    <rect class="chart-bar-rect" x="${x + 52}" y="${y2}" width="46" height="${h2}" rx="4" fill="${statusLabel === 'SETTLED' || statusLabel === 'APPROVED' ? '#10b981' : '#ef4444'}" opacity="0.9">
                        <title>${idLabel} (${codeLabel})&#10;Settled: $${set.toFixed(2)}</title>
                    </rect>
                    <text x="${x + 75}" y="${y2 - 6}" text-anchor="middle" fill="${statusLabel === 'SETTLED' || statusLabel === 'APPROVED' ? '#10b981' : '#ef4444'}" font-family="'JetBrains Mono', monospace" font-size="10" font-weight="700">$${Math.round(set)}</text>

                    <text x="${x + 49}" y="${chartHeight + 48}" text-anchor="middle" fill="white" font-family="'Space Grotesk', sans-serif" font-size="10" font-weight="600">${idLabel}</text>
                    <text x="${x + 49}" y="${chartHeight + 64}" text-anchor="middle" fill="${statusLabel === 'SETTLED' || statusLabel === 'APPROVED' ? '#10b981' : '#ef4444'}" font-family="'JetBrains Mono', monospace" font-size="9">[${statusLabel}]</text>
                </g>
            `;
        }).join('');

        container.innerHTML = `
            <div style="background: rgba(13, 17, 34, 0.6); padding: 20px; border-radius: 14px; border: 1px solid rgba(255,255,255,0.08);">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 14px; flex-wrap: wrap; gap: 8px;">
                    <div>
                        <div style="font-family: 'Space Grotesk'; font-size: 1.1rem; font-weight: 700; color: white;">Enterprise Transactions: Ingress vs Settled ($ USD)</div>
                        <div style="font-family: 'JetBrains Mono'; font-size: 0.75rem; color: var(--accent-cyan);">PURPLE: REQUESTED // GREEN: SETTLED // RED: FRAUD FLAGGED</div>
                    </div>
                </div>

                <div style="width: 100%; overflow-x: auto;">
                    <svg viewBox="0 0 ${chartWidth} 310" style="width: 100%; min-width: 500px; height: auto;">
                        <line x1="20" y1="30" x2="${chartWidth - 20}" y2="30" stroke="rgba(255,255,255,0.06)" stroke-dasharray="4" />
                        <line x1="20" y1="85" x2="${chartWidth - 20}" y2="85" stroke="rgba(255,255,255,0.06)" stroke-dasharray="4" />
                        <line x1="20" y1="140" x2="${chartWidth - 20}" y2="140" stroke="rgba(255,255,255,0.06)" stroke-dasharray="4" />
                        <line x1="20" y1="195" x2="${chartWidth - 20}" y2="195" stroke="rgba(255,255,255,0.06)" stroke-dasharray="4" />
                        <line x1="20" y1="${chartHeight + 30}" x2="${chartWidth - 20}" y2="${chartHeight + 30}" stroke="rgba(255,255,255,0.2)" />
                        ${barsSvg}
                    </svg>
                </div>

                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(160px, 1fr)); gap: 12px; margin-top: 16px;">
                    <div class="chart-kpi-card">
                        <span style="font-family: 'JetBrains Mono'; font-size: 0.7rem; color: var(--text-muted);">TOTAL REQUESTED</span>
                        <span style="font-family: 'Space Grotesk'; font-size: 1.3rem; font-weight: 700; color: #c084fc; margin-top: 2px;">$5,230</span>
                    </div>
                    <div class="chart-kpi-card">
                        <span style="font-family: 'JetBrains Mono'; font-size: 0.7rem; color: var(--text-muted);">TOTAL SETTLED</span>
                        <span style="font-family: 'Space Grotesk'; font-size: 1.3rem; font-weight: 700; color: #10b981; margin-top: 2px;">$2,430</span>
                    </div>
                    <div class="chart-kpi-card">
                        <span style="font-family: 'JetBrains Mono'; font-size: 0.7rem; color: var(--text-muted);">FRAUD DETECTION REJECTION</span>
                        <span style="font-family: 'Space Grotesk'; font-size: 1.3rem; font-weight: 700; color: var(--accent-pink); margin-top: 2px;">53.5%</span>
                    </div>
                </div>
            </div>
        `;
    }
};

// --- 4. 📈 DYNAMIC READING PROGRESS BAR SCROLL LISTENER ---
window.addEventListener('scroll', () => {
    const bar = document.getElementById('reading-progress-bar');
    if (!bar) return;
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    if (totalHeight <= 0) {
        bar.style.width = '0%';
        return;
    }
    const progress = Math.min(100, Math.max(0, (window.scrollY / totalHeight) * 100));
    bar.style.width = `${progress}%`;
}, { passive: true });

// ============================================================================
// 📚 5. 52-WEEK MASTER CURRICULUM MODULES HUB & NAVIGATION ENGINE (v14.2)
// ============================================================================
window.currentHubPhaseFilter = 0;
window.currentHubSearchQuery = '';

// ============================================================================
// 📜 UNIVERSAL BULLETPROOF APP SCROLLER (ALL DEVICES)
// ============================================================================
window.scrollAppTo = (target) => {
    try {
        if (typeof triggerHaptic === 'function') triggerHaptic('light');

        if (target === 'top' || target === 0) {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            document.documentElement.scrollTo({ top: 0, behavior: 'smooth' });
            document.body.scrollTo({ top: 0, behavior: 'smooth' });
            const ws = document.querySelector('.card-workspace');
            if (ws) ws.scrollTo({ top: 0, behavior: 'smooth' });
            const app = document.getElementById('app');
            if (app) app.scrollTo({ top: 0, behavior: 'smooth' });
            return;
        }

        if (target === 'bottom') {
            const bottomY = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight, 5000);
            window.scrollTo({ top: bottomY, behavior: 'smooth' });
            const ws = document.querySelector('.card-workspace');
            if (ws) ws.scrollTo({ top: ws.scrollHeight, behavior: 'smooth' });
            const app = document.getElementById('app');
            if (app) app.scrollTo({ top: app.scrollHeight, behavior: 'smooth' });
            return;
        }

        let elem = (typeof target === 'string') ? document.querySelector(target) : target;
        if (elem) {
            elem.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    } catch (err) {
        console.warn('[ScrollAppTo Error]:', err);
    }
};

window.getModulesHubHTML = () => {
    const modules = window.curriculumData || window.roadmap || [];
    if (!modules || !modules.length) {
        return '<div style="padding: 60px 20px; color: white; text-align: center; font-family: sans-serif;"><h3>Loading 52-Week Healthcare Intelligence Curriculum...</h3></div>';
    }

    return `<div class="modules-hub-wrapper" style="max-width: 1440px; margin: 0 auto; padding-bottom: 90px; animation: fadeIn 0.3s ease;">
            
            <!-- EXECUTIVE HERO HEADER -->
            <div class="edtech-hero-banner" style="background: linear-gradient(180deg, rgba(22, 28, 45, 0.9) 0%, rgba(13, 17, 34, 0.95) 100%); border: 1px solid rgba(255, 255, 255, 0.1); border-radius: 20px; padding: 32px 36px; margin-bottom: 28px; box-shadow: 0 12px 36px rgba(0,0,0,0.4);">
                <div style="display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap; gap: 20px;">
                    <div style="max-width: 900px;">
                        <div style="display: inline-flex; align-items: center; gap: 8px; background: rgba(56, 189, 248, 0.12); border: 1px solid rgba(56, 189, 248, 0.3); border-radius: 20px; padding: 4px 14px; margin-bottom: 12px;">
                            <span style="font-size: 0.78rem; color: #38bdf8; font-family: 'Space Grotesk', sans-serif; font-weight: 700; letter-spacing: 0.8px;">🎓 DATAVITALS ACCREDITED CURRICULUM • 52 WEEKS • 364 MISSIONS</span>
                        </div>
                        <h1 style="font-family: 'Space Grotesk', sans-serif; font-size: clamp(2rem, 4vw, 2.8rem); font-weight: 800; color: white; margin: 0 0 10px 0; line-height: 1.2; letter-spacing: -0.5px;">
                            Computer Science, Data Engineering & Applied AI Master Curriculum
                        </h1>
                        <p style="font-family: 'Plus Jakarta Sans', sans-serif; font-size: 1.05rem; color: #94a3b8; margin: 0; line-height: 1.65;">
                            An exhaustive, production-grade professional curriculum. Every module provides a complete academic dossier powered by the <strong>5 W's & H Framework (What, Why, Who, Where, When, How)</strong>, real-world enterprise systems, outage postmortems, and hands-on laboratory missions.
                        </p>
                    </div>

                    <button onclick="window.showActiveLessonMobile()" class="btn-neural" style="font-family: 'Space Grotesk', sans-serif; font-size: 0.88rem; font-weight: 700; padding: 14px 22px; border-radius: 12px; border-color: #38bdf8; color: white; display: inline-flex; align-items: center; gap: 10px; cursor: pointer; background: linear-gradient(135deg, rgba(56,189,248,0.2), rgba(56,189,248,0.4)); box-shadow: 0 4px 20px rgba(56,189,248,0.25);">
                        <span>📖</span> Resume Active Lesson
                    </button>
                </div>

                <!-- METRIC CARDS -->
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(210px, 1fr)); gap: 14px; margin-top: 24px;">
                    <div style="background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.07); border-radius: 12px; padding: 14px 18px;">
                        <div style="font-size: 1.25rem; font-weight: 800; color: white; font-family: 'Space Grotesk', sans-serif;">52 Modules</div>
                        <div style="font-size: 0.78rem; color: #94a3b8; font-family: 'Plus Jakarta Sans', sans-serif;">Exhaustive Academic Dossiers</div>
                    </div>
                    <div style="background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.07); border-radius: 12px; padding: 14px 18px;">
                        <div style="font-size: 1.25rem; font-weight: 800; color: white; font-family: 'Space Grotesk', sans-serif;">364 Missions</div>
                        <div style="font-size: 0.78rem; color: #94a3b8; font-family: 'Plus Jakarta Sans', sans-serif;">Hands-On Daily Code Labs</div>
                    </div>
                    <div style="background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.07); border-radius: 12px; padding: 14px 18px;">
                        <div style="font-size: 1.25rem; font-weight: 800; color: white; font-family: 'Space Grotesk', sans-serif;">The 5 W's & H</div>
                        <div style="font-size: 0.78rem; color: #94a3b8; font-family: 'Plus Jakarta Sans', sans-serif;">What, Why, Who, Where, When, How</div>
                    </div>
                    <div style="background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.07); border-radius: 12px; padding: 14px 18px;">
                        <div style="font-size: 1.25rem; font-weight: 800; color: white; font-family: 'Space Grotesk', sans-serif;">Incident Postmortems</div>
                        <div style="font-size: 0.78rem; color: #94a3b8; font-family: 'Plus Jakarta Sans', sans-serif;">Enterprise Architecture Case Studies</div>
                    </div>
                </div>

                <!-- SEARCH & FILTER CONTROLS -->
                <div style="display: flex; flex-direction: column; gap: 14px; margin-top: 24px; border-top: 1px solid rgba(255,255,255,0.08); padding-top: 20px;">
                    <div style="display: flex; gap: 12px; flex-wrap: wrap; align-items: center;">
                        <div style="flex: 1; min-width: 280px; background: rgba(0,0,0,0.5); border: 1px solid rgba(255,255,255,0.15); border-radius: 12px; padding: 12px 18px; display: flex; align-items: center; gap: 12px;">
                            <span style="color: #38bdf8; font-size: 1.1rem;">🔍</span>
                            <input type="text" id="hub-search-input" placeholder="Search topics, 5 W's, system architectures, or tools (e.g. SQL, Python, Kafka, Spark, PyTorch, LLMs)..." 
                                oninput="window.filterModulesHub(this.value)"
                                style="background: transparent; border: none; color: white; width: 100%; outline: none; font-family: 'Plus Jakarta Sans', sans-serif; font-size: 0.95rem;">
                        </div>
                        <div id="hub-results-count" style="font-family: 'JetBrains Mono', monospace; font-size: 0.8rem; color: #94a3b8; background: rgba(255,255,255,0.05); padding: 10px 16px; border-radius: 10px; border: 1px solid rgba(255,255,255,0.1);">
                            Showing 52 of 52 modules
                        </div>
                    </div>

                    <!-- PHASE & WEEK ISOLATION CONTROLS -->
                    <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 12px;">
                        <div class="hub-phase-filters" style="display: flex; gap: 8px; flex-wrap: wrap; align-items: center;">
                            <button class="hub-phase-pill active" onclick="window.setHubPhaseFilter(0, this)">All (52 Modules)</button>
                            <button class="hub-phase-pill" onclick="window.setHubPhaseFilter(1, this)">Phase 1: Spreadsheets & Stats (W1-8)</button>
                            <button class="hub-phase-pill" onclick="window.setHubPhaseFilter(2, this)">Phase 2: Relational DBs & SQL (W9-20)</button>
                            <button class="hub-phase-pill" onclick="window.setHubPhaseFilter(3, this)">Phase 3: Python Data Science (W21-32)</button>
                            <button class="hub-phase-pill" onclick="window.setHubPhaseFilter(4, this)">Phase 4: ML & Medical AI (W33-52)</button>
                        </div>

                        <!-- SINGLE WEEK ISOLATOR DROPDOWN -->
                        <div style="display: flex; align-items: center; gap: 8px; background: rgba(0,0,0,0.5); border: 1px solid rgba(56,189,248,0.3); border-radius: 10px; padding: 6px 14px;">
                            <span style="font-size: 0.9rem;">🗓️</span>
                            <span style="font-family: 'JetBrains Mono'; font-size: 0.72rem; color: #38bdf8; font-weight: 700;">ISOLATE WEEK:</span>
                            <select id="hub-week-select" onchange="window.filterHubBySingleWeek(this.value)" style="background: transparent; border: none; color: white; font-family: 'Space Grotesk', sans-serif; font-size: 0.84rem; font-weight: 700; outline: none; cursor: pointer;">
                                <option value="0" style="background: #0f172a;">Show All 52 Weeks</option>
                                ${modules.map((m, idx) => {
                                    const wNum = idx + 1;
                                    const cln = m.title.replace(/^Week \d+:\s*/, '');
                                    return `<option value="${wNum}" style="background: #0f172a;">Week ${wNum}: ${cln}</option>`;
                                }).join('')}
                            </select>
                        </div>
                    </div>
                </div>
            </div>

            <!-- MODULES GRID -->
            <div id="modules-hub-grid" class="modules-hub-grid" style="display: flex; flex-direction: column; gap: 28px;">
                ${modules.map((week, index) => {
                    const weekNum = week.weekNum || (index + 1);
                    const phase = week.phase || (weekNum <= 8 ? 1 : weekNum <= 20 ? 2 : weekNum <= 36 ? 3 : 4);
                    const phaseTheme = {
                        1: { primary: '#38bdf8', badge: 'rgba(56,189,248,0.15)', border: 'rgba(56,189,248,0.3)' },
                        2: { primary: '#a855f7', badge: 'rgba(168,85,247,0.15)', border: 'rgba(168,85,247,0.3)' },
                        3: { primary: '#ec4899', badge: 'rgba(236,72,153,0.15)', border: 'rgba(236,72,153,0.3)' },
                        4: { primary: '#10b981', badge: 'rgba(16,185,129,0.15)', border: 'rgba(16,185,129,0.3)' }
                    }[phase] || { primary: '#38bdf8', badge: 'rgba(56,189,248,0.15)', border: 'rgba(56,189,248,0.3)' };

                    const fiveWs = week.fiveWs || {};
                    const days = week.days || [];
                    const firstDay = days.length > 0 ? days[0] : { id: `${week.id}-d1`, lessonId: `lesson-${week.id}-d1` };
                    const outcomes = week.whatYouWillUnderstand || [];

                    return `
                    <div class="modern-edtech-card" id="hub-card-${week.id}" data-phase="${phase}" data-title="${week.title.toLowerCase()}" 
                        style="background: #111827; border: 1px solid rgba(255,255,255,0.1); border-radius: 18px; padding: 28px; box-shadow: 0 10px 30px rgba(0,0,0,0.35); transition: all 0.25s ease;">
                        
                        <!-- CARD HEADER -->
                        <div style="display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap; gap: 12px; margin-bottom: 16px;">
                            <div style="display: flex; align-items: center; gap: 10px; flex-wrap: wrap;">
                                <span style="background: ${phaseTheme.badge}; border: 1px solid ${phaseTheme.border}; color: ${phaseTheme.primary}; font-family: 'Space Grotesk', sans-serif; font-size: 0.78rem; font-weight: 700; padding: 4px 10px; border-radius: 8px;">
                                    MODULE ${weekNum.toString().padStart(2, '0')}
                                </span>
                                <span style="background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.1); color: #e2e8f0; font-family: 'Space Grotesk', sans-serif; font-size: 0.78rem; font-weight: 600; padding: 4px 10px; border-radius: 8px;">
                                    ${week.level || 'Foundation'}
                                </span>
                                <span style="font-family: 'Plus Jakarta Sans', sans-serif; font-size: 0.78rem; color: #94a3b8;">
                                    ⏱️ ${week.duration || '7 Daily Missions'} • ${week.estimatedHours || '6-8 Hours'}
                                </span>
                            </div>
                            <span style="font-family: 'Space Grotesk', sans-serif; font-size: 0.78rem; color: ${phaseTheme.primary}; font-weight: 600;">
                                ${week.phaseName}
                            </span>
                        </div>

                        <!-- TITLE -->
                        <h2 style="font-family: 'Space Grotesk', sans-serif; font-size: 1.45rem; font-weight: 800; color: white; margin: 0 0 14px 0; line-height: 1.3;">
                            ${week.title}
                        </h2>

                        <!-- TOPIC OVERVIEW -->
                        <div style="background: rgba(255,255,255,0.025); border: 1px solid rgba(255,255,255,0.07); border-radius: 12px; padding: 16px 20px; margin-bottom: 20px;">
                            <div style="font-family: 'Space Grotesk', sans-serif; font-size: 0.78rem; font-weight: 700; color: #38bdf8; margin-bottom: 6px; letter-spacing: 0.5px;">
                                📖 ACADEMIC OVERVIEW
                            </div>
                            <p style="font-family: 'Plus Jakarta Sans', sans-serif; font-size: 0.95rem; color: #e2e8f0; line-height: 1.65; margin: 0;">
                                ${week.overview || ''}
                            </p>
                        </div>

                        <!-- THE 5 W'S & H FRAMEWORK -->
                        <div style="margin-bottom: 20px;">
                            <div style="font-family: 'Space Grotesk', sans-serif; font-size: 0.82rem; font-weight: 800; color: #f59e0b; margin-bottom: 12px; letter-spacing: 0.5px;">
                                ❓ THE COMPLETE 5 W'S & H FRAMEWORK (WHAT • WHY • WHO • WHERE • WHEN • HOW)
                            </div>
                            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 14px;">
                                <div style="background: rgba(56,189,248,0.04); border-left: 3px solid #38bdf8; border-radius: 0 10px 10px 0; padding: 12px 16px;">
                                    <div style="font-family: 'Space Grotesk', sans-serif; font-size: 0.76rem; font-weight: 700; color: #38bdf8; margin-bottom: 4px;">📘 WHAT IS THIS TOPIC?</div>
                                    <p style="font-family: 'Plus Jakarta Sans', sans-serif; font-size: 0.86rem; color: #cbd5e1; line-height: 1.5; margin: 0;">${fiveWs.what || ''}</p>
                                </div>
                                <div style="background: rgba(239,68,68,0.04); border-left: 3px solid #ef4444; border-radius: 0 10px 10px 0; padding: 12px 16px;">
                                    <div style="font-family: 'Space Grotesk', sans-serif; font-size: 0.76rem; font-weight: 700; color: #f87171; margin-bottom: 4px;">💡 WHY DOES IT MATTER? (PRODUCTION URGENCY & SLA)</div>
                                    <p style="font-family: 'Plus Jakarta Sans', sans-serif; font-size: 0.86rem; color: #cbd5e1; line-height: 1.5; margin: 0;">${fiveWs.why || ''}</p>
                                </div>
                                <div style="background: rgba(168,85,247,0.04); border-left: 3px solid #a855f7; border-radius: 0 10px 10px 0; padding: 12px 16px;">
                                    <div style="font-family: 'Space Grotesk', sans-serif; font-size: 0.76rem; font-weight: 700; color: #c084fc; margin-bottom: 4px;">👥 WHO USES THIS IN INDUSTRY? (JOB ROLES)</div>
                                    <p style="font-family: 'Plus Jakarta Sans', sans-serif; font-size: 0.86rem; color: #cbd5e1; line-height: 1.5; margin: 0;">${fiveWs.who || ''}</p>
                                </div>
                                <div style="background: rgba(16,185,129,0.04); border-left: 3px solid #10b981; border-radius: 0 10px 10px 0; padding: 12px 16px;">
                                    <div style="font-family: 'Space Grotesk', sans-serif; font-size: 0.76rem; font-weight: 700; color: #34d399; margin-bottom: 4px;">🏢 WHERE IS IT DEPLOYED? (ENTERPRISE & CLOUD INFRASTRUCTURE)</div>
                                    <p style="font-family: 'Plus Jakarta Sans', sans-serif; font-size: 0.86rem; color: #cbd5e1; line-height: 1.5; margin: 0;">${fiveWs.where || ''}</p>
                                </div>
                                <div style="background: rgba(245,158,11,0.04); border-left: 3px solid #f59e0b; border-radius: 0 10px 10px 0; padding: 12px 16px;">
                                    <div style="font-family: 'Space Grotesk', sans-serif; font-size: 0.76rem; font-weight: 700; color: #fbbf24; margin-bottom: 4px;">⏱️ WHEN IS IT EXECUTED IN PRODUCTION LIFECYCLE?</div>
                                    <p style="font-family: 'Plus Jakarta Sans', sans-serif; font-size: 0.86rem; color: #cbd5e1; line-height: 1.5; margin: 0;">${fiveWs.when || ''}</p>
                                </div>
                                <div style="background: rgba(14,165,233,0.04); border-left: 3px solid #0ea5e9; border-radius: 0 10px 10px 0; padding: 12px 16px;">
                                    <div style="font-family: 'Space Grotesk', sans-serif; font-size: 0.76rem; font-weight: 700; color: #38bdf8; margin-bottom: 4px;">🛠️ HOW WILL YOU MASTER IT? (LAB METHOD)</div>
                                    <p style="font-family: 'Plus Jakarta Sans', sans-serif; font-size: 0.86rem; color: #cbd5e1; line-height: 1.5; margin: 0;">${fiveWs.how || ''}</p>
                                </div>
                            </div>
                        </div>

                        <!-- COMPETENCIES & CASE STUDY -->
                        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 16px; margin-bottom: 20px;">
                            <div style="background: rgba(16,185,129,0.03); border: 1px solid rgba(16,185,129,0.2); border-radius: 12px; padding: 16px 18px;">
                                <div style="font-family: 'Space Grotesk', sans-serif; font-size: 0.8rem; font-weight: 700; color: #34d399; margin-bottom: 10px;">
                                    🎯 MASTER LEARNING COMPETENCIES
                                </div>
                                <ul style="margin: 0; padding: 0; list-style: none; display: flex; flex-direction: column; gap: 8px;">
                                    ${outcomes.map(o => `
                                        <li style="display: flex; align-items: flex-start; gap: 8px; font-family: 'Plus Jakarta Sans', sans-serif; font-size: 0.86rem; color: #e2e8f0; line-height: 1.45;">
                                            <span style="color: #10b981; font-weight: 900; line-height: 1.3;">✓</span>
                                            <span>${o}</span>
                                        </li>
                                    `).join('')}
                                </ul>
                            </div>

                            <div style="background: rgba(56,189,248,0.03); border: 1px solid rgba(56,189,248,0.2); border-radius: 12px; padding: 16px 18px;">
                                <div style="font-family: 'Space Grotesk', sans-serif; font-size: 0.8rem; font-weight: 700; color: #38bdf8; margin-bottom: 8px;">
                                    🏢 PRODUCTION ARCHITECTURE & INCIDENT POSTMORTEM
                                </div>
                                <p style="font-family: 'Plus Jakarta Sans', sans-serif; font-size: 0.88rem; color: #cbd5e1; line-height: 1.6; margin: 0 0 10px 0;">
                                    ${week.incidentPostmortem || week.clinicalCaseStudy || week.productionArchitecture || week.clinicalApplication || ''}
                                </p>
                                <div style="font-family: 'Space Grotesk', sans-serif; font-size: 0.76rem; color: #94a3b8; font-weight: 600;">
                                    STACK & STANDARDS: ${(week.tools || []).join(' • ')}
                                </div>
                            </div>
                        </div>

                        <!-- 7-DAY SYLLABUS (DAY-WISE SEPARATED) -->
                        <div class="hub-days-inline" id="hub-days-${week.id}" style="display: flex; flex-direction: column; gap: 10px; margin: 20px 0; border-top: 1px solid rgba(255,255,255,0.08); padding-top: 18px;">
                            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px;">
                                <span style="font-family: 'Space Grotesk', sans-serif; font-size: 0.88rem; color: #38bdf8; font-weight: 700; display: inline-flex; align-items: center; gap: 6px;">
                                    <span>📅</span> 7-DAY STRUCTURED MASTER SYLLABUS (DAY-WISE SEPARATED)
                                </span>
                                <span style="font-family: 'Plus Jakarta Sans', sans-serif; font-size: 0.78rem; color: #94a3b8;">
                                    Click any day to launch mission workspace
                                </span>
                            </div>

                            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 10px;">
                                ${days.map((day, dIdx) => `
                                    <div class="hub-day-row" onclick="window.openModuleDay('${week.id}', '${day.id}', '${day.lessonId}')" 
                                        style="padding: 12px 16px; border-radius: 10px; background: rgba(0,0,0,0.4); cursor: pointer; border: 1px solid rgba(255,255,255,0.08); transition: all 0.2s ease; display: flex; flex-direction: column; gap: 6px;">
                                        <div style="display: flex; align-items: center; justify-content: space-between;">
                                            <span style="font-family: 'Space Grotesk', sans-serif; font-size: 0.74rem; color: ${phaseTheme.primary}; font-weight: 700; background: ${phaseTheme.badge}; border: 1px solid ${phaseTheme.border}; padding: 2px 8px; border-radius: 6px;">
                                                DAY 0${day.dayNum || (dIdx + 1)}
                                            </span>
                                            <span style="font-family: 'Space Grotesk', sans-serif; font-size: 0.75rem; color: #38bdf8; font-weight: 700;">
                                                Launch ➔
                                            </span>
                                        </div>
                                        <div style="font-family: 'Space Grotesk', sans-serif; font-size: 0.92rem; font-weight: 700; color: white;">
                                            ${day.title}
                                        </div>
                                        <div style="font-family: 'Plus Jakarta Sans', sans-serif; font-size: 0.82rem; color: #94a3b8; line-height: 1.45;">
                                            ${day.brief || ''}
                                        </div>
                                        <div style="font-family: 'Plus Jakarta Sans', sans-serif; font-size: 0.76rem; color: #34d399; font-weight: 600;">
                                            🎯 Milestone: ${day.milestone || 'Complete interactive mission'}
                                        </div>
                                    </div>
                                `).join('')}
                            </div>
                        </div>

                        <!-- ACTIONS -->
                        <div style="display: flex; gap: 12px; margin-top: auto; padding-top: 18px; border-top: 1px solid rgba(255,255,255,0.08); flex-wrap: wrap;">
                            <button onclick="window.openModuleDay('${week.id}', '${firstDay.id}', '${firstDay.lessonId}')" 
                                class="btn-neural" style="flex: 1; min-width: 160px; padding: 12px 18px; border-radius: 10px; font-family: 'Space Grotesk', sans-serif; font-size: 0.9rem; font-weight: 700; background: linear-gradient(135deg, ${phaseTheme.primary}22, ${phaseTheme.primary}44); border-color: ${phaseTheme.primary}; color: white; display: flex; align-items: center; justify-content: center; gap: 8px; cursor: pointer; box-shadow: 0 4px 16px ${phaseTheme.primary}33;">
                                <span>🚀</span> Start Day 1 Mission
                            </button>
                            <button onclick="window.toggleHubDaysList('${week.id}')" id="hub-toggle-btn-${week.id}"
                                class="btn-neural" style="padding: 12px 18px; border-radius: 10px; font-family: 'Space Grotesk', sans-serif; font-size: 0.85rem; font-weight: 600; border-color: #38bdf8; color: #38bdf8; cursor: pointer; background: rgba(56,189,248,0.08);">
                                📅 7-Day Syllabus & Briefs (Expanded) ▴
                            </button>
                        </div>
                    </div>
                    `;
                }).join('')}
            </div>
        </div>`;
};

window.showModulesView = () => {
    if (window.toggleMobileCurriculumDrawer) {
        window.toggleMobileCurriculumDrawer(false);
    }
    const navButtons = document.querySelectorAll('#mobile-bottom-nav .mob-nav-btn');
    if (navButtons) navButtons.forEach(btn => btn.classList.remove('active'));
    const modulesBtn = document.getElementById('mob-btn-modules');
    if (modulesBtn) modulesBtn.classList.add('active');

    const matrix = document.getElementById('curriculum-master-matrix');
    if (matrix) {
        window.scrollAppTo('#curriculum-master-matrix');
    } else {
        const lesson = window.activeLessonContext || (window.modules ? window.modules[0] : null);
        const dayId = window.activeCurrentDayId || 'week-1-d1';
        const lessonId = window.activeCurrentLessonId || (lesson ? lesson.id : 'lesson-w1-d1');
        if (typeof renderLesson === 'function') {
            renderLesson(lessonId, dayId);
        } else if (typeof window.renderLesson === 'function') {
            window.renderLesson(lessonId, dayId);
        }
        setTimeout(() => window.scrollAppTo('#curriculum-master-matrix'), 100);
    }
};


window.toggleHubDaysList = (weekId) => {
    const list = document.getElementById(`hub-days-${weekId}`);
    const btn = document.getElementById(`hub-toggle-btn-${weekId}`);
    if (!list) return;

    if (list.style.display === 'none' || list.style.display === '') {
        list.style.display = 'flex';
        if (btn) {
            btn.innerHTML = '▲ Close 7-Day Syllabus';
            btn.style.borderColor = '#38bdf8';
            btn.style.color = '#38bdf8';
        }
    } else {
        list.style.display = 'none';
        if (btn) {
            btn.innerHTML = '📅 7-Day Syllabus & Briefs ▾';
            btn.style.borderColor = 'rgba(255,255,255,0.18)';
            btn.style.color = '#e2e8f0';
        }
    }
};

window.setHubPhaseFilter = (phase, btn) => {
    window.currentHubPhaseFilter = phase;
    document.querySelectorAll('.hub-phase-pill').forEach(p => p.classList.remove('active'));
    if (btn) btn.classList.add('active');
    window.applyHubFilters();
};

window.filterModulesHub = (query) => {
    window.currentHubSearchQuery = (query || '').toLowerCase().trim();
    window.applyHubFilters();
};

window.applyHubFilters = () => {
    const q = window.currentHubSearchQuery || '';
    const phase = window.currentHubPhaseFilter || 0;
    const cards = document.querySelectorAll('.modern-edtech-card');
    let visibleCount = 0;

    cards.forEach(card => {
        const cardPhase = parseInt(card.getAttribute('data-phase'));
        const cardTitle = (card.getAttribute('data-title') || '').toLowerCase();
        const text = card.innerText.toLowerCase();

        const matchesPhase = (phase === 0) || (cardPhase === phase);
        const matchesQuery = (q === '') || cardTitle.includes(q) || text.includes(q);

        if (matchesPhase && matchesQuery) {
            card.style.display = '';
            visibleCount++;
        } else {
            card.style.display = 'none';
        }
    });

    const countEl = document.getElementById('hub-results-count');
    if (countEl) {
        countEl.innerText = `Showing ${visibleCount} of ${cards.length} modules`;
    }
};

window.filterHubBySingleWeek = (weekNum) => {
    weekNum = parseInt(weekNum) || 0;
    const cards = document.querySelectorAll('.modern-edtech-card');
    let visibleCount = 0;
    cards.forEach(card => {
        if (weekNum === 0) {
            card.style.display = '';
            visibleCount++;
        } else {
            const id = card.id; // e.g. hub-card-week-1
            if (id === `hub-card-week-${weekNum}`) {
                card.style.display = '';
                visibleCount++;
                const daysList = document.getElementById(`hub-days-week-${weekNum}`);
                if (daysList) daysList.style.display = 'flex';
            } else {
                card.style.display = 'none';
            }
        }
    });
    const countEl = document.getElementById('hub-results-count');
    if (countEl) {
        countEl.innerText = weekNum === 0 ? `Showing 52 of 52 modules` : `Showing Week ${weekNum} (Isolated with 7 Days)`;
    }
};

window.openModuleDay = (weekId, dayId, lessonId) => {
    window.activeCurrentDayId = dayId;
    window.activeCurrentLessonId = lessonId;

    // 1. Render the lesson
    if (typeof renderLesson === 'function') {
        renderLesson(lessonId, dayId);
    } else if (typeof window.renderLesson === 'function') {
        window.renderLesson(lessonId, dayId);
    }

    // 2. Update sidebar active status
    const sidebarItems = document.querySelectorAll('.sidebar-module-item');
    if (sidebarItems) sidebarItems.forEach(item => item.classList.remove('active-module'));
    const sidebarDays = document.querySelectorAll('.sidebar-day-item');
    if (sidebarDays) sidebarDays.forEach(item => item.classList.remove('active-day'));

    const parentWeek = document.getElementById(`sidebar-mod-${weekId}`);
    if (parentWeek) parentWeek.classList.add('active-module');

    const dayElem = document.getElementById(`day-node-${dayId}`);
    if (dayElem) dayElem.classList.add('active-day');

    // 3. Highlight Lesson tab on bottom nav
    const navButtons = document.querySelectorAll('#mobile-bottom-nav .mob-nav-btn');
    if (navButtons) navButtons.forEach(btn => btn.classList.remove('active'));
    const lessonBtn = document.getElementById('mob-btn-lesson');
    if (lessonBtn) lessonBtn.classList.add('active');

    // 4. Close mobile drawer if open
    if (window.toggleMobileCurriculumDrawer) {
        window.toggleMobileCurriculumDrawer(false);
    }

    // 5. Scroll to top smoothly
    window.scrollAppTo('top');
    if (typeof triggerHaptic === 'function') triggerHaptic('light');
};

window.showActiveLessonMobile = () => {
    // If not currently showing a lesson, re-render the active lesson
    const app = document.getElementById('app');
    const isShowingLesson = app && app.querySelector('.lesson-container');
    if (!isShowingLesson) {
        const lesson = window.activeLessonContext || (window.modules ? window.modules[0] : null);
        const dayId = window.activeCurrentDayId || 'week-1-d1';
        const lessonId = window.activeCurrentLessonId || (lesson ? lesson.id : 'lesson-w1-d1');
        if (typeof renderLesson === 'function') {
            renderLesson(lessonId, dayId);
        } else if (typeof window.renderLesson === 'function') {
            window.renderLesson(lessonId, dayId);
        }
    }

    // Update bottom nav
    const navButtons = document.querySelectorAll('#mobile-bottom-nav .mob-nav-btn');
    if (navButtons) navButtons.forEach(btn => btn.classList.remove('active'));
    const lessonBtn = document.getElementById('mob-btn-lesson');
    if (lessonBtn) lessonBtn.classList.add('active');

    // Close drawer
    if (window.toggleMobileCurriculumDrawer) {
        window.toggleMobileCurriculumDrawer(false);
    }

    window.scrollAppTo('top');
    if (typeof triggerHaptic === 'function') triggerHaptic('light');
};

window.returnToCurriculum = window.showActiveLessonMobile;
