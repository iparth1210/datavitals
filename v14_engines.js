/**
 * DATAVITALS OS - v14.0 ADVANCED ENGINE SUITE
 * 1. 🎧 AI Audio Briefing Engine (Web Speech API)
 * 2. 🎯 Clinical Knowledge Check & Micro-Quiz Engine (+50 XP)
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
               `Clinical Application: ${health}. ` +
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

// --- 2. 🎯 CLINICAL KNOWLEDGE CHECK & MICRO-QUIZ ENGINE ---
const clinicalKnowledgeBank = {
    'lesson-w1-d1': {
        question: 'In an emergency EHR infrastructure, which hardware architecture is fundamentally required for parallel matrix multiplications in diagnostic deep learning models?',
        options: [
            { text: 'Sequential Single-Core CPU Arithmetic Logic Units', correct: false },
            { text: 'GPU / TPU Parallel Tensor Accelerator Arrays', correct: true },
            { text: 'Mechanical SAS Magnetic Hard Drives', correct: false },
            { text: 'Virtual Linux Swap File on Disk', correct: false }
        ],
        explanation: 'GPUs and TPUs feature thousands of specialized SIMD/tensor execution cores engineered specifically for parallel matrix calculations required by deep neural networks.'
    },
    'lesson-w1-d2': {
        question: 'When recording clinical vitals across distributed hospital campuses spanning multiple timezones, which timestamp format is required for reliable sequencing?',
        options: [
            { text: 'Local 12-hour AM/PM string without timezone offset', correct: false },
            { text: 'ISO 8601 UTC timestamp format (e.g. 2026-10-03T12:00:00Z)', correct: true },
            { text: 'Unformatted epoch milliseconds stored as a float', correct: false },
            { text: 'Julian day integers without calendar year references', correct: false }
        ],
        explanation: 'ISO 8601 UTC timestamps provide unequivocal chronological ordering across worldwide EHR systems and comply strictly with HL7 FHIR interoperability standards.'
    },
    'lesson-w1-d3': {
        question: 'In database query optimization for healthcare datasets with millions of patient records, how does a B-Tree index accelerate lookup speed?',
        options: [
            { text: 'By automatically hashing and encrypting HIPAA protected fields', correct: false },
            { text: 'By structuring search keys into a logarithmic hierarchy, avoiding O(N) full-table scans', correct: true },
            { text: 'By pre-loading the entire table into browser GPU memory', correct: false },
            { text: 'By deleting duplicate rows during query execution', correct: false }
        ],
        explanation: 'B-Tree indexes maintain sorted balanced tree structures that reduce row lookup times from O(N) full-table scans down to O(log N) disk reads.'
    }
};

window.getLessonQuiz = (lesson) => {
    if (!lesson) return null;
    if (clinicalKnowledgeBank[lesson.id]) {
        return clinicalKnowledgeBank[lesson.id];
    }
    return {
        question: `Based on today's protocol for "${lesson.title}", why is real-time validation essential before deploying clinical algorithms?`,
        options: [
            { text: 'To eliminate algorithmic hallucinations and ensure clinical safety before patient care impact', correct: true },
            { text: 'To bypass automated security audits and expedite product releases', correct: false },
            { text: 'To discard patient edge-cases that do not match standard distributions', correct: false },
            { text: 'To replace clinician diagnosis with unverified automated heuristics', correct: false }
        ],
        explanation: 'Rigorous clinical data verification ensures high diagnostic sensitivity, avoids fatal false negatives, and maintains compliance with FDA and HIPAA standards.'
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
                        ${isCompleted ? '✓ CLINICAL ACCREDITATION VERIFIED' : '⚡ CLINICAL KNOWLEDGE CHECK'}
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
                <div style="font-weight: 700; color: #10b981; margin-bottom: 4px;">✓ Verified Clinical Rationale:</div>
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
                <div style="font-weight: 700; color: var(--accent-pink); margin-bottom: 4px;">⚠️ Clinical Mismatch</div>
                <div>Review the mission briefing parameters above and select the optimal clinical response.</div>
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
            { id: 101, patient_id: "P-492", age: 64, triage_level: 4, wait_min: 45, dept: "Cardiology", readmitted: "YES" },
            { id: 102, patient_id: "P-118", age: 42, triage_level: 2, wait_min: 12, dept: "Trauma", readmitted: "NO" },
            { id: 103, patient_id: "P-883", age: 71, triage_level: 5, wait_min: 90, dept: "Neurology", readmitted: "YES" },
            { id: 104, patient_id: "P-304", age: 35, triage_level: 1, wait_min: 8, dept: "General", readmitted: "NO" },
            { id: 105, patient_id: "P-752", age: 58, triage_level: 3, wait_min: 30, dept: "Cardiology", readmitted: "YES" }
        ],
        bp: [
            { trial_id: "T-01", group: "Placebo", baseline_bp: 142, week4_bp: 140, drop_mmHg: 2 },
            { trial_id: "T-02", group: "Treatment_10mg", baseline_bp: 145, week4_bp: 128, drop_mmHg: 17 },
            { trial_id: "T-03", group: "Treatment_20mg", baseline_bp: 150, week4_bp: 122, drop_mmHg: 28 },
            { trial_id: "T-04", group: "Placebo", baseline_bp: 138, week4_bp: 137, drop_mmHg: 1 }
        ],
        claims: [
            { claim_id: "CLM-901", icd_code: "I10", billed_amount: 1450.00, approved_amount: 1200.00, status: "APPROVED" },
            { claim_id: "CLM-902", icd_code: "E11.9", billed_amount: 2800.00, approved_amount: 0.00, status: "DENIED" },
            { claim_id: "CLM-903", icd_code: "J45.909", billed_amount: 980.00, approved_amount: 950.00, status: "APPROVED" }
        ]
    };

    if (key === 'ehr') {
        const data = datasets.ehr;
        const maxWait = 100;
        const chartHeight = 220;
        const chartWidth = 620;
        const barWidth = 60;
        const gap = (chartWidth - (data.length * barWidth)) / (data.length + 1);

        const triageColors = {
            1: '#10b981',
            2: '#06b6d4',
            3: '#f59e0b',
            4: '#f97316',
            5: '#ef4444'
        };

        const barsSvg = data.map((d, i) => {
            const x = gap + i * (barWidth + gap);
            const barH = (d.wait_min / maxWait) * chartHeight;
            const y = chartHeight - barH + 30;
            const color = triageColors[d.triage_level] || '#06b6d4';
            return `
                <g class="chart-bar-group">
                    <rect class="chart-bar-rect" x="${x}" y="${y}" width="${barWidth}" height="${barH}" rx="6" fill="${color}" opacity="0.85">
                        <title>Patient: ${d.patient_id}&#10;Dept: ${d.dept}&#10;Wait Time: ${d.wait_min} min&#10;Triage Level: ${d.triage_level}</title>
                    </rect>
                    <text x="${x + barWidth / 2}" y="${y - 8}" text-anchor="middle" fill="${color}" font-family="'JetBrains Mono', monospace" font-size="11" font-weight="700">${d.wait_min}m</text>
                    <text x="${x + barWidth / 2}" y="${chartHeight + 48}" text-anchor="middle" fill="#94a3b8" font-family="'Space Grotesk', sans-serif" font-size="11" font-weight="600">${d.patient_id}</text>
                    <text x="${x + barWidth / 2}" y="${chartHeight + 64}" text-anchor="middle" fill="#64748b" font-family="'JetBrains Mono', monospace" font-size="9">${d.dept.slice(0, 5)}</text>
                </g>
            `;
        }).join('');

        container.innerHTML = `
            <div style="background: rgba(13, 17, 34, 0.6); padding: 20px; border-radius: 14px; border: 1px solid rgba(255,255,255,0.08);">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 14px; flex-wrap: wrap; gap: 8px;">
                    <div>
                        <div style="font-family: 'Space Grotesk'; font-size: 1.1rem; font-weight: 700; color: white;">Emergency Department Wait Times & Triage Acuity</div>
                        <div style="font-family: 'JetBrains Mono'; font-size: 0.75rem; color: var(--accent-cyan);">COLOR CODED BY EMERGENCY TRIAGE LEVEL (1: STABLE → 5: CRITICAL)</div>
                    </div>
                    <div style="display: flex; gap: 8px; font-family: 'JetBrains Mono'; font-size: 0.7rem; align-items: center;">
                        <span style="display: flex; align-items: center; gap: 4px; color: #10b981;"><span style="width: 8px; height: 8px; border-radius: 50%; background: #10b981; display: inline-block;"></span> L1</span>
                        <span style="display: flex; align-items: center; gap: 4px; color: #06b6d4;"><span style="width: 8px; height: 8px; border-radius: 50%; background: #06b6d4; display: inline-block;"></span> L2</span>
                        <span style="display: flex; align-items: center; gap: 4px; color: #f59e0b;"><span style="width: 8px; height: 8px; border-radius: 50%; background: #f59e0b; display: inline-block;"></span> L3</span>
                        <span style="display: flex; align-items: center; gap: 4px; color: #f97316;"><span style="width: 8px; height: 8px; border-radius: 50%; background: #f97316; display: inline-block;"></span> L4</span>
                        <span style="display: flex; align-items: center; gap: 4px; color: #ef4444;"><span style="width: 8px; height: 8px; border-radius: 50%; background: #ef4444; display: inline-block;"></span> L5</span>
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
                        <span style="font-family: 'JetBrains Mono'; font-size: 0.7rem; color: var(--text-muted);">AVG WAIT TIME</span>
                        <span style="font-family: 'Space Grotesk'; font-size: 1.3rem; font-weight: 700; color: white; margin-top: 2px;">37.0 min</span>
                    </div>
                    <div class="chart-kpi-card">
                        <span style="font-family: 'JetBrains Mono'; font-size: 0.7rem; color: var(--text-muted);">HIGH ACUITY (L4-L5)</span>
                        <span style="font-family: 'Space Grotesk'; font-size: 1.3rem; font-weight: 700; color: var(--accent-pink); margin-top: 2px;">40% (2 / 5)</span>
                    </div>
                    <div class="chart-kpi-card">
                        <span style="font-family: 'JetBrains Mono'; font-size: 0.7rem; color: var(--text-muted);">30-DAY READMISSION</span>
                        <span style="font-family: 'Space Grotesk'; font-size: 1.3rem; font-weight: 700; color: var(--accent-cyan); margin-top: 2px;">60% (3 / 5)</span>
                    </div>
                </div>
            </div>
        `;
    } else if (key === 'bp') {
        const data = datasets.bp;
        const chartHeight = 220;
        const chartWidth = 620;
        const groupWidth = 100;
        const gap = (chartWidth - (data.length * groupWidth)) / (data.length + 1);

        const barsSvg = data.map((d, i) => {
            const x = gap + i * (groupWidth + gap);
            const h1 = ((d.baseline_bp - 100) / 60) * chartHeight;
            const h2 = ((d.week4_bp - 100) / 60) * chartHeight;
            const y1 = chartHeight - h1 + 30;
            const y2 = chartHeight - h2 + 30;
            return `
                <g class="chart-bar-group">
                    <rect class="chart-bar-rect" x="${x}" y="${y1}" width="38" height="${h1}" rx="4" fill="#64748b" opacity="0.8">
                        <title>${d.group}&#10;Baseline SBP: ${d.baseline_bp} mmHg</title>
                    </rect>
                    <text x="${x + 19}" y="${y1 - 6}" text-anchor="middle" fill="#94a3b8" font-family="'JetBrains Mono', monospace" font-size="10">${d.baseline_bp}</text>

                    <rect class="chart-bar-rect" x="${x + 44}" y="${y2}" width="38" height="${h2}" rx="4" fill="${d.drop_mmHg > 10 ? '#10b981' : '#06b6d4'}" opacity="0.9">
                        <title>${d.group}&#10;Week 4 SBP: ${d.week4_bp} mmHg&#10;Reduction: -${d.drop_mmHg} mmHg</title>
                    </rect>
                    <text x="${x + 63}" y="${y2 - 6}" text-anchor="middle" fill="${d.drop_mmHg > 10 ? '#10b981' : '#06b6d4'}" font-family="'JetBrains Mono', monospace" font-size="10" font-weight="700">${d.week4_bp}</text>

                    <text x="${x + 41}" y="${chartHeight + 48}" text-anchor="middle" fill="white" font-family="'Space Grotesk', sans-serif" font-size="10" font-weight="600">${d.trial_id}</text>
                    <text x="${x + 41}" y="${chartHeight + 64}" text-anchor="middle" fill="${d.drop_mmHg > 10 ? '#10b981' : '#94a3b8'}" font-family="'JetBrains Mono', monospace" font-size="9">-${d.drop_mmHg} mmHg</text>
                </g>
            `;
        }).join('');

        container.innerHTML = `
            <div style="background: rgba(13, 17, 34, 0.6); padding: 20px; border-radius: 14px; border: 1px solid rgba(255,255,255,0.08);">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 14px; flex-wrap: wrap; gap: 8px;">
                    <div>
                        <div style="font-family: 'Space Grotesk'; font-size: 1.1rem; font-weight: 700; color: white;">Antihypertensive Trial: Baseline vs Week 4 SBP (mmHg)</div>
                        <div style="font-family: 'JetBrains Mono'; font-size: 0.75rem; color: var(--accent-cyan);">GREY: BASELINE // GREEN: WEEK 4 (SIGNIFICANT DROP >10 mmHg)</div>
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
                        <span style="font-family: 'JetBrains Mono'; font-size: 0.7rem; color: var(--text-muted);">MAX EFFICACY DROP</span>
                        <span style="font-family: 'Space Grotesk'; font-size: 1.3rem; font-weight: 700; color: #10b981; margin-top: 2px;">-28 mmHg (20mg)</span>
                    </div>
                    <div class="chart-kpi-card">
                        <span style="font-family: 'JetBrains Mono'; font-size: 0.7rem; color: var(--text-muted);">PLACEBO MEAN EFFECT</span>
                        <span style="font-family: 'Space Grotesk'; font-size: 1.3rem; font-weight: 700; color: var(--text-muted); margin-top: 2px;">-1.5 mmHg</span>
                    </div>
                    <div class="chart-kpi-card">
                        <span style="font-family: 'JetBrains Mono'; font-size: 0.7rem; color: var(--text-muted);">TRIAL SIGNIFICANCE</span>
                        <span style="font-family: 'Space Grotesk'; font-size: 1.3rem; font-weight: 700; color: var(--accent-cyan); margin-top: 2px;">p &lt; 0.001</span>
                    </div>
                </div>
            </div>
        `;
    } else if (key === 'claims') {
        const data = datasets.claims;
        const chartHeight = 220;
        const chartWidth = 620;
        const groupWidth = 120;
        const gap = (chartWidth - (data.length * groupWidth)) / (data.length + 1);

        const barsSvg = data.map((d, i) => {
            const x = gap + i * (groupWidth + gap);
            const maxVal = 3000;
            const h1 = (d.billed_amount / maxVal) * chartHeight;
            const h2 = (d.approved_amount / maxVal) * chartHeight;
            const y1 = chartHeight - h1 + 30;
            const y2 = chartHeight - h2 + 30;
            return `
                <g class="chart-bar-group">
                    <rect class="chart-bar-rect" x="${x}" y="${y1}" width="46" height="${h1}" rx="4" fill="#8b5cf6" opacity="0.8">
                        <title>${d.claim_id} (${d.icd_code})&#10;Billed: $${d.billed_amount.toFixed(2)}</title>
                    </rect>
                    <text x="${x + 23}" y="${y1 - 6}" text-anchor="middle" fill="#c4b5fd" font-family="'JetBrains Mono', monospace" font-size="10">$${d.billed_amount}</text>

                    <rect class="chart-bar-rect" x="${x + 52}" y="${y2}" width="46" height="${h2 > 0 ? h2 : 4}" rx="4" fill="${d.status === 'APPROVED' ? '#10b981' : '#ef4444'}" opacity="0.9">
                        <title>${d.claim_id}&#10;Approved: $${d.approved_amount.toFixed(2)}&#10;Status: ${d.status}</title>
                    </rect>
                    <text x="${x + 75}" y="${y2 - 6}" text-anchor="middle" fill="${d.status === 'APPROVED' ? '#10b981' : '#ef4444'}" font-family="'JetBrains Mono', monospace" font-size="10" font-weight="700">$${d.approved_amount}</text>

                    <text x="${x + 49}" y="${chartHeight + 48}" text-anchor="middle" fill="white" font-family="'Space Grotesk', sans-serif" font-size="11" font-weight="600">${d.claim_id}</text>
                    <text x="${x + 49}" y="${chartHeight + 64}" text-anchor="middle" fill="${d.status === 'APPROVED' ? '#10b981' : '#ef4444'}" font-family="'JetBrains Mono', monospace" font-size="9">[${d.status}]</text>
                </g>
            `;
        }).join('');

        container.innerHTML = `
            <div style="background: rgba(13, 17, 34, 0.6); padding: 20px; border-radius: 14px; border: 1px solid rgba(255,255,255,0.08);">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 14px; flex-wrap: wrap; gap: 8px;">
                    <div>
                        <div style="font-family: 'Space Grotesk'; font-size: 1.1rem; font-weight: 700; color: white;">Hospital Billing Claims: Billed vs Approved</div>
                        <div style="font-family: 'JetBrains Mono'; font-size: 0.75rem; color: var(--accent-cyan);">PURPLE: BILLED // GREEN: APPROVED // RED: DENIED CLAIM</div>
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
                        <span style="font-family: 'JetBrains Mono'; font-size: 0.7rem; color: var(--text-muted);">TOTAL BILLED</span>
                        <span style="font-family: 'Space Grotesk'; font-size: 1.3rem; font-weight: 700; color: var(--accent-violet); margin-top: 2px;">$5,230.00</span>
                    </div>
                    <div class="chart-kpi-card">
                        <span style="font-family: 'JetBrains Mono'; font-size: 0.7rem; color: var(--text-muted);">TOTAL APPROVED</span>
                        <span style="font-family: 'Space Grotesk'; font-size: 1.3rem; font-weight: 700; color: #10b981; margin-top: 2px;">$2,150.00</span>
                    </div>
                    <div class="chart-kpi-card">
                        <span style="font-family: 'JetBrains Mono'; font-size: 0.7rem; color: var(--text-muted);">REIMBURSEMENT RATE</span>
                        <span style="font-family: 'Space Grotesk'; font-size: 1.3rem; font-weight: 700; color: var(--accent-pink); margin-top: 2px;">41.1% (Denied Claim)</span>
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
                            Healthcare Data Intelligence Master Curriculum
                        </h1>
                        <p style="font-family: 'Plus Jakarta Sans', sans-serif; font-size: 1.05rem; color: #94a3b8; margin: 0; line-height: 1.65;">
                            An exhaustive, production-grade professional curriculum. Every module provides a complete academic dossier powered by the <strong>5 W's & H Framework (What, Why, Who, Where, When, How)</strong>, real-world clinical case studies, and hands-on laboratory missions.
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
                        <div style="font-size: 1.25rem; font-weight: 800; color: white; font-family: 'Space Grotesk', sans-serif;">Clinical Case Studies</div>
                        <div style="font-size: 0.78rem; color: #94a3b8; font-family: 'Plus Jakarta Sans', sans-serif;">Real-World Medical Systems</div>
                    </div>
                </div>

                <!-- SEARCH & FILTER CONTROLS -->
                <div style="display: flex; flex-direction: column; gap: 14px; margin-top: 24px; border-top: 1px solid rgba(255,255,255,0.08); padding-top: 20px;">
                    <div style="display: flex; gap: 12px; flex-wrap: wrap; align-items: center;">
                        <div style="flex: 1; min-width: 280px; background: rgba(0,0,0,0.5); border: 1px solid rgba(255,255,255,0.15); border-radius: 12px; padding: 12px 18px; display: flex; align-items: center; gap: 12px;">
                            <span style="color: #38bdf8; font-size: 1.1rem;">🔍</span>
                            <input type="text" id="hub-search-input" placeholder="Search topics, 5 W's, clinical applications, or tools (e.g. SQL, Sepsis, DICOM, ICU, PyTorch)..." 
                                oninput="window.filterModulesHub(this.value)"
                                style="background: transparent; border: none; color: white; width: 100%; outline: none; font-family: 'Plus Jakarta Sans', sans-serif; font-size: 0.95rem;">
                        </div>
                        <div id="hub-results-count" style="font-family: 'JetBrains Mono', monospace; font-size: 0.8rem; color: #94a3b8; background: rgba(255,255,255,0.05); padding: 10px 16px; border-radius: 10px; border: 1px solid rgba(255,255,255,0.1);">
                            Showing 52 of 52 modules
                        </div>
                    </div>

                    <!-- PHASE FILTER PILLS -->
                    <div class="hub-phase-filters" style="display: flex; gap: 8px; flex-wrap: wrap; align-items: center;">
                        <button class="hub-phase-pill active" onclick="window.setHubPhaseFilter(0, this)">All (52 Modules)</button>
                        <button class="hub-phase-pill" onclick="window.setHubPhaseFilter(1, this)">Phase 1: Foundations & Excel (W1-8)</button>
                        <button class="hub-phase-pill" onclick="window.setHubPhaseFilter(2, this)">Phase 2: Relational DBs & SQL (W9-20)</button>
                        <button class="hub-phase-pill" onclick="window.setHubPhaseFilter(3, this)">Phase 3: Python Data Science (W21-32)</button>
                        <button class="hub-phase-pill" onclick="window.setHubPhaseFilter(4, this)">Phase 4: ML & Medical AI (W33-52)</button>
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
                                    <div style="font-family: 'Space Grotesk', sans-serif; font-size: 0.76rem; font-weight: 700; color: #f87171; margin-bottom: 4px;">💡 WHY DOES IT MATTER? (CLINICAL URGENCY)</div>
                                    <p style="font-family: 'Plus Jakarta Sans', sans-serif; font-size: 0.86rem; color: #cbd5e1; line-height: 1.5; margin: 0;">${fiveWs.why || ''}</p>
                                </div>
                                <div style="background: rgba(168,85,247,0.04); border-left: 3px solid #a855f7; border-radius: 0 10px 10px 0; padding: 12px 16px;">
                                    <div style="font-family: 'Space Grotesk', sans-serif; font-size: 0.76rem; font-weight: 700; color: #c084fc; margin-bottom: 4px;">👥 WHO USES THIS IN HEALTHCARE?</div>
                                    <p style="font-family: 'Plus Jakarta Sans', sans-serif; font-size: 0.86rem; color: #cbd5e1; line-height: 1.5; margin: 0;">${fiveWs.who || ''}</p>
                                </div>
                                <div style="background: rgba(16,185,129,0.04); border-left: 3px solid #10b981; border-radius: 0 10px 10px 0; padding: 12px 16px;">
                                    <div style="font-family: 'Space Grotesk', sans-serif; font-size: 0.76rem; font-weight: 700; color: #34d399; margin-bottom: 4px;">🏥 WHERE IS IT DEPLOYED? (SYSTEMS & EHR)</div>
                                    <p style="font-family: 'Plus Jakarta Sans', sans-serif; font-size: 0.86rem; color: #cbd5e1; line-height: 1.5; margin: 0;">${fiveWs.where || ''}</p>
                                </div>
                                <div style="background: rgba(245,158,11,0.04); border-left: 3px solid #f59e0b; border-radius: 0 10px 10px 0; padding: 12px 16px;">
                                    <div style="font-family: 'Space Grotesk', sans-serif; font-size: 0.76rem; font-weight: 700; color: #fbbf24; margin-bottom: 4px;">⏱️ WHEN IS IT EXECUTED IN CARE LIFECYCLE?</div>
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
                                    🏥 REAL-WORLD CLINICAL CASE STUDY
                                </div>
                                <p style="font-family: 'Plus Jakarta Sans', sans-serif; font-size: 0.88rem; color: #cbd5e1; line-height: 1.6; margin: 0 0 10px 0;">
                                    ${week.clinicalCaseStudy || week.clinicalApplication || ''}
                                </p>
                                <div style="font-family: 'Space Grotesk', sans-serif; font-size: 0.76rem; color: #94a3b8; font-weight: 600;">
                                    STACK & STANDARDS: ${(week.tools || []).join(' • ')}
                                </div>
                            </div>
                        </div>

                        <!-- 7-DAY SYLLABUS ACCORDION -->
                        <div class="hub-days-inline" id="hub-days-${week.id}" style="display: none; flex-direction: column; gap: 10px; margin: 20px 0; border-top: 1px solid rgba(255,255,255,0.08); padding-top: 18px;">
                            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px;">
                                <span style="font-family: 'Space Grotesk', sans-serif; font-size: 0.88rem; color: #38bdf8; font-weight: 700;">
                                    📅 7-DAY STRUCTURED MASTER SYLLABUS
                                </span>
                                <span style="font-family: 'Plus Jakarta Sans', sans-serif; font-size: 0.78rem; color: #94a3b8;">
                                    Click any day to launch mission workspace
                                </span>
                            </div>

                            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 10px;">
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
                                class="btn-neural" style="padding: 12px 18px; border-radius: 10px; font-family: 'Space Grotesk', sans-serif; font-size: 0.85rem; font-weight: 600; border-color: rgba(255,255,255,0.18); color: #e2e8f0; cursor: pointer; background: rgba(255,255,255,0.04);">
                                📅 7-Day Syllabus & Briefs ▾
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
