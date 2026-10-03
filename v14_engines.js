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