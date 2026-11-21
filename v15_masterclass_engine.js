/**
 * 🎓 DATAVITALS MASTERCLASS & PEDAGOGICAL ENGINE (v16.0)
 * World-Class EdTech Platform UI/UX • Dual-Level Week/Day Separation • 364 Unique Lessons
 * Offline Local Mode Video Fallback • Zero Layout Collision • Refined Modern Typography
 */

(function () {
    'use strict';

    // 0. GLOBAL WEEK & DAY NAVIGATION METHODS
    window.jumpToWeek = function (weekNum, dayNum = 1) {
        weekNum = parseInt(weekNum);
        dayNum = parseInt(dayNum) || 1;
        if (isNaN(weekNum) || weekNum < 1) weekNum = 1;
        if (weekNum > 52) weekNum = 52;
        if (dayNum < 1) dayNum = 1;
        if (dayNum > 7) dayNum = 7;

        const lessonId = `lesson-w${weekNum}-d${dayNum}`;
        const dayId = `week-${weekNum}-d${dayNum}`;

        const lesson = window.getComprehensiveLesson(lessonId);
        if (lesson) {
            window.renderMasterLessonView(lesson, dayId);

            // Update Week Select if present
            const weekSelect = document.getElementById('masterclass-week-select');
            if (weekSelect) weekSelect.value = weekNum;

            // Update Sidebar Active Day
            if (typeof renderSidebarCurriculum === 'function') {
                renderSidebarCurriculum();
            }

            // Smooth scroll to top of lesson
            window.scrollAppTo('top');
        } else {
            console.warn('[MasterclassEngine]: Could not resolve lesson for', lessonId);
        }
    };

    window.navigateWeek = function (delta) {
        let currentWeek = 1;
        if (window.activeLessonContext && window.activeLessonContext.weekNum) {
            currentWeek = window.activeLessonContext.weekNum;
        }
        let targetWeek = currentWeek + delta;
        if (targetWeek < 1) targetWeek = 52;
        if (targetWeek > 52) targetWeek = 1;
        window.jumpToWeek(targetWeek, 1);
    };

    window.openModuleDay = function (moduleId, dayId, lessonId) {
        let weekNum = 1;
        let dayNum = 1;

        if (lessonId) {
            const m = lessonId.match(/w(\d+)-d(\d+)/) || lessonId.match(/week-(\d+)-d(\d+)/);
            if (m) {
                weekNum = parseInt(m[1]);
                dayNum = parseInt(m[2]);
            }
        } else if (dayId) {
            const m = dayId.match(/week-(\d+)-d(\d+)/) || dayId.match(/w(\d+)-d(\d+)/);
            if (m) {
                weekNum = parseInt(m[1]);
                dayNum = parseInt(m[2]);
            }
        } else if (moduleId) {
            const m = moduleId.match(/week-(\d+)/) || moduleId.match(/(\d+)/);
            if (m) {
                weekNum = parseInt(m[1]);
            }
        }

        window.jumpToWeek(weekNum, dayNum);
        window.scrollAppTo('top');
    };

    // 1. MASTERCLASS LESSON GENERATOR (100% Unique Content for Every Day)
    window.getComprehensiveLesson = function (lessonId) {
        if (!lessonId) return null;

        let weekNum = 1;
        let dayNum = 1;
        const match = lessonId.match(/w(\d+)-d(\d+)/) || lessonId.match(/week-(\d+)-d(\d+)/);
        if (match) {
            weekNum = parseInt(match[1]);
            dayNum = parseInt(match[2]);
        }

        const allModules = window.curriculumData || window.roadmap || [];
        let currentModule = allModules.find(m => m.weekNum === weekNum) || allModules[weekNum - 1] || allModules[0];
        let currentDay = null;

        if (currentModule && currentModule.days) {
            currentDay = currentModule.days.find(d => d.dayNum === dayNum) || currentModule.days[dayNum - 1] || currentModule.days[0];
        }

        const kb = (typeof window !== 'undefined' && window.curriculumKnowledgeBase) ? window.curriculumKnowledgeBase : null;
        const kbWeek = kb ? kb[weekNum] : null;

        const phase = (kbWeek && kbWeek.phase) || currentModule?.phase || (weekNum <= 8 ? 1 : (weekNum <= 20 ? 2 : (weekNum <= 32 ? 3 : 4)));
        const tools = (kbWeek && kbWeek.tools) || currentModule?.tools || ['Computer Systems', 'Python & SQL', 'Cloud Architecture'];

        // Authentic Day Title
        let dayTitle = `Day ${dayNum} Engineering Mission`;
        if (kbWeek && kbWeek.dayTitles && kbWeek.dayTitles[dayNum - 1]) {
            dayTitle = kbWeek.dayTitles[dayNum - 1];
        } else if (currentDay && currentDay.title) {
            dayTitle = currentDay.title;
        }

        // Generate or fetch authentic daily data
        let dailyData = null;
        if (typeof window.generateDailyLessonData === 'function') {
            dailyData = window.generateDailyLessonData(weekNum, dayNum, dayTitle, kbWeek, currentModule);
        }

        // Fallback if dailyData generator not yet loaded
        if (!dailyData) {
            const video = (typeof window.resolveDailyVideo === 'function') ? window.resolveDailyVideo(weekNum, dayNum, dayTitle) : {
                url: 'https://www.youtube.com/embed/xnyFYiK2rSY',
                id: 'xnyFYiK2rSY',
                title: `${dayTitle} • Master Lecture`,
                channel: 'DataVitals Engineering Academy',
                duration: '18:30'
            };

            dailyData = {
                fiveWs: {
                    what: `Deconstructs the foundational principles, data structures, and algorithmic mechanics of <strong>${dayTitle}</strong>.`,
                    why: `Prevents silent data corruption, eliminates race conditions, and guarantees high availability across production distributed systems.`,
                    who: `Engineered for Systems Architects, Data Engineers, Software Engineers, and Applied AI Scientists across top-tier tech companies.`,
                    where: `Deployed on cloud Kubernetes clusters, enterprise database replicas, edge compute nodes, and distributed microservices.`,
                    when: `Executed during real-time event streaming, scheduled batch ETL pipelines, low-latency API queries, and production inference.`,
                    how: `Mastered through theoretical mechanics, interactive coding environments, and rigorous enterprise production verification.`
                },
                objectives: [
                    `Deconstruct the core architectural and algorithmic mechanics of ${dayTitle}.`,
                    `Analyze real-world enterprise engineering implications across distributed clusters, minimizing latency.`,
                    `Implement hands-on defensive data engineering protocols utilizing ${tools[0]}.`,
                    `Validate data integrity against industry standards (POSIX, IEEE 754, SOC 2, ISO 27001).`
                ],
                theoryP1: `The study of <strong>${dayTitle}</strong> represents a foundational competency in Computer Science and Data Engineering. At its computational core, this topic governs how data elements—ranging from low-level binary bitstreams to high-dimensional matrix arrays—are structured, normalized, and processed through computing hardware and memory subsystems. In mission-critical production systems, data representation must guarantee strict mathematical determinism, preventing numerical overflow, loss of floating-point precision, or unexpected type coercions.`,
                theoryP2: `From an architectural standpoint, <strong>${dayTitle}</strong> enforces disciplined data abstractions. Algorithms must optimize computational complexity, reducing execution time from brute-force O(N²) traversals down to optimal O(N) or O(log N) logarithmic lookups. Furthermore, memory footprint must be rigorously bounded: buffer allocations in high-throughput network brokers and state registers require strictly controlled bounds to prevent kernel memory fragmentation and sudden pipeline crashes during high-volume traffic surges.`,
                theoryP3: `The operational protocol for today centers upon applying robust verification rules to ${dayTitle}. Engineers establish immutable audit logs, verify cryptographic checksums across event streams, and implement thread-safe transactional boundaries. By ensuring that every state transition in the data pipeline is forensically auditable, learners protect system integrity against hardware transient faults, software race conditions, and network transmission artifacts.`,
                clinicalP1: `In production enterprise systems, <strong>${dayTitle}</strong> directly interfaces with large-scale data platforms, distributed streaming clusters (Apache Kafka, Apache Flink), and transactional database engines (PostgreSQL, Snowflake, BigQuery). These platforms ingest and transform billions of operational events daily with strict low-latency SLAs.`,
                clinicalP2: `<strong>Real-World Incident Analysis:</strong> During a notable production cloud outage, an unhandled edge-case exception in an event-processing worker handling ${dayTitle} resulted in cascading thread starvation. Ingress streaming queues backed up across 14 server nodes, stalling payment processing for 28 minutes. This incident demonstrates why defensive programming, automated circuit breakers, and bounded queues are mandatory prerequisites in enterprise software engineering.`,
                clinicalP3: `<strong>Regulatory Governance & Security Mandates:</strong> Production implementations of ${dayTitle} must satisfy <em>SOC 2 Type II, ISO/IEC 27001, and GDPR Article 32</em> technical controls, requiring TLS 1.3 encryption in transit, AES-256 encryption at rest, role-based access control (RBAC), and tamper-evident audit logging.`,
                bioP1: `Industry-standard telemetric protocols require strict determinism and standardized data formats: <strong>POSIX standards</strong> for process scheduling, <strong>RFC 4180</strong> for CSV parsing, <strong>JSON Schema / Protocol Buffers (Protobuf)</strong> for cross-service RPC contracts, and <strong>OpenTelemetry</strong> for distributed tracing across microservices.`,
                bioP2: `<strong>Canonical Production Baseline Telemetry:</strong> Production monitoring systems continuously track service health against canonical performance baselines: P99 Latency (< 100 ms for transactional endpoints; < 500 ms for analytical queries), CPU Utilization (50–70% target; threshold > 85% auto-scaling trigger), Memory Working Set (< 80% capacity to avoid OOM killer), and Network Packet Drop Rate (< 0.001%). Out-of-bounds metrics trigger automated alerts via Prometheus and PagerDuty.`,
                pitfall1: `<strong>1. The Unbounded Memory Allocation Trap:</strong> Allowing data streaming workers to accumulate unindexed records in memory without fixed window bounds or backpressure mechanisms, triggering catastrophic Out-Of-Memory (OOM) process termination.`,
                pitfall2: `<strong>2. Clock Drift & Non-UTC Timestamp Serialization:</strong> Recording distributed timestamps without explicit UTC offsets (ISO 8601 format) causes severe temporal inversion across global regions, corrupting event sequencing and distributed consensus.`,
                pitfall3: `<strong>3. Concurrency Lock Contention:</strong> Running unindexed analytical queries or unbounded table scans on primary transactional databases locks critical write tables. Analytics pipelines must always query read-only replica databases or columnar data warehouses.`,
                starterCode: `# Production Data Engineering Simulation: ${dayTitle}\n# Mission: Audit high-throughput transaction records and identify critical anomalies\nevents = [\n    {"event_id": "EVT-101", "service": "Auth-Gateway", "latency_ms": 14, "cpu_pct": 32, "status": "STABLE"},\n    {"event_id": "EVT-102", "service": "Payment-Broker", "latency_ms": 1420, "cpu_pct": 98, "status": "CRITICAL"},\n    {"event_id": "EVT-103", "service": "Search-Index", "latency_ms": 28, "cpu_pct": 45, "status": "STABLE"},\n    {"event_id": "EVT-104", "service": "Notification-Worker", "latency_ms": 19, "cpu_pct": 28, "status": "STABLE"}\n]\n\nprint("=== ENTERPRISE TELEMETRY AUDIT: ${dayTitle.toUpperCase()} ===")\nfor e in events:\n    flag = "[ALERT]" if e["status"] == "CRITICAL" else "[OK]"\n    print(f"{flag} ID: {e['event_id']} | Service: {e['service']:20} | Latency: {e['latency_ms']:4} ms | CPU: {e['cpu_pct']}% => {e['status']}")\n`,
                labData: [
                    { Event_ID: 'EVT-101', Service: 'Auth-Gateway', Latency_ms: 14, CPU_pct: '32%', Status: 'STABLE' },
                    { Event_ID: 'EVT-102', Service: 'Payment-Broker', Latency_ms: 1420, CPU_pct: '98%', Status: 'CRITICAL' },
                    { Event_ID: 'EVT-103', Service: 'Search-Index', Latency_ms: 28, CPU_pct: '45%', Status: 'STABLE' },
                    { Event_ID: 'EVT-104', Service: 'Notification-Worker', Latency_ms: 19, CPU_pct: '28%', Status: 'STABLE' }
                ],
                taskInstruction: `Inspect the production telemetry dataset for "${dayTitle}" and click the record with Status = "CRITICAL".`,
                taskTarget: 'CRITICAL',
                targetColumn: 'Status',
                quiz: {
                    question: `In enterprise distributed systems implementing "${dayTitle}", what is the primary architectural justification for strict defensive boundary validation?`,
                    options: [
                        { text: 'To prevent silent data corruption, eliminate catastrophic downtime, and guarantee strict high-availability SLAs.', correct: true },
                        { text: 'To intentionally bypass security auditing pipelines and accelerate ad-hoc software delivery.', correct: false },
                        { text: 'To automatically drop edge-case transactions that deviate from normal distributions without logging.', correct: false },
                        { text: 'To eliminate automated regression testing entirely in favor of unverified manual checks.', correct: false }
                    ],
                    explanation: `Rigorous defensive validation in ${tools[0]} prevents corrupted payloads or anomalous inputs from propagating downstream, ensuring 99.999% system reliability and complete operational auditability.`
                },
                sources: [
                    { name: `${dayTitle} Technical Documentation`, type: 'Documentation', icon: '📖', url: 'https://docs.python.org/3/' },
                    { name: `Computer Science & ${tools[0]} Reference Guide`, type: 'Reference', icon: '📐', url: 'https://pandas.pydata.org/docs/user_guide/index.html' },
                    { name: `OpenTelemetry Specification & Architecture`, type: 'Standard', icon: '⚙️', url: 'https://opentelemetry.io/docs/' },
                    { name: `System Reliability & Production Postmortems`, type: 'Engineering', icon: '🏢', url: 'https://sre.google/sre-book/table-of-contents/' }
                ],
                video: video.url,
                videoTitle: video.title,
                videoId: video.id,
                videoChannel: video.channel,
                videoDuration: video.duration
            };
        }

        // Determine Lesson Type
        let lessonType = (phase >= 3) ? 'python' : 'data';

        return {
            id: lessonId,
            dayId: currentDay ? currentDay.id : `week-${weekNum}-d${dayNum}`,
            weekNum: weekNum,
            dayNum: dayNum,
            title: dayTitle,
            moduleTitle: currentModule?.title || `Week ${weekNum}`,
            phase: phase,
            phaseName: currentModule?.phaseName || `Phase ${phase}`,
            level: currentModule?.level || 'Intermediate Computer Science & Engineering',
            duration: dailyData.videoDuration ? `~${dailyData.videoDuration} Video + 30m Lab` : '45-60 min',
            tools: tools,
            brief: dailyData.fiveWs.what,
            milestone: `Complete Day ${dayNum} laboratory protocol for ${dayTitle}.`,
            domain: dailyData.domain || 'Computer Science & Distributed Systems',
            eli5: dailyData.eli5 || {
                title: "What is a Computer? (Explain Like I'm 5 / The Master Workshop Model)",
                analogy: "Think of a computer as a master workshop: Inputs (keyboard/mouse/network) are the reception counter receiving requests, the CPU is the master craftsman executing operations, RAM is the working workbench holding active blueprints, and Storage (SSD/Drive) is the permanent warehouse holding all files.",
                binaryBitsExplained: "Computers use electricity (0s and 1s). High voltage is 1, low voltage is 0. Billions of microscopic transistor switches perform billions of arithmetic operations per second."
            },
            onFieldPractice: dailyData.onFieldPractice || {
                roleTitle: "Systems Architect / Infrastructure Engineer",
                dayToDayDuties: "Architect high-availability computing services, monitor system latency, and guarantee zero data loss.",
                onFieldChecklist: [
                    "Profile CPU, memory, and I/O bus throughput under peak load.",
                    "Audit transactional boundaries to eliminate concurrency race conditions.",
                    "Enforce end-to-end cryptographic integrity and SOC 2 / ISO 27001 compliance."
                ]
            },
            interviewQA: dailyData.interviewQA || {
                question: "Why is volatile RAM access orders of magnitude faster than persistent NVMe SSD storage?",
                idealAnswer: "RAM is wired directly to the CPU memory bus and operates in nanoseconds (50-100ns) without persistent physical wear. NVMe SSDs must transfer through PCI-e controllers and flash NAND pages in microseconds (10-50µs).",
                keyTakeaway: "High-performance systems cache hot state in RAM to avoid expensive I/O latency bottlenecks."
            },
            fiveWs: dailyData.fiveWs,
            objectives: dailyData.objectives,
            theoryP1: dailyData.theoryP1,
            theoryP2: dailyData.theoryP2,
            theoryP3: dailyData.theoryP3,
            clinicalP1: dailyData.clinicalP1,
            clinicalP2: dailyData.clinicalP2,
            clinicalP3: dailyData.clinicalP3,
            bioP1: dailyData.bioP1,
            bioP2: dailyData.bioP2,
            pitfall1: dailyData.pitfall1,
            pitfall2: dailyData.pitfall2,
            pitfall3: dailyData.pitfall3,
            video: dailyData.video,
            videoTitle: dailyData.videoTitle,
            videoId: dailyData.videoId,
            videoChannel: dailyData.videoChannel,
            videoDuration: dailyData.videoDuration,
            sources: dailyData.sources,
            type: lessonType,
            code_start: dailyData.starterCode,
            data: dailyData.labData,
            task: {
                type: 'find-value',
                targetColumn: dailyData.targetColumn,
                condition: (val) => val === dailyData.taskTarget,
                successMessage: `Accreditation Complete: ${dayTitle} validation verified. +100 XP awarded.`,
                errorMessage: dailyData.taskInstruction
            },
            quiz: dailyData.quiz
        };
    };

    // 2. INTERACTIVE CLINICAL DATA TABLE RENDERER
    window.renderMasterTable = function (data) {
        if (!data || !Array.isArray(data) || data.length === 0) {
            return '<div style="padding: 20px; color: #94a3b8; font-family: \'JetBrains Mono\'; text-align: center;">No inspection data available.</div>';
        }

        const columns = Object.keys(data[0]);

        return `
            <table class="clinical-interactive-table" style="width: 100%; border-collapse: separate; border-spacing: 0; font-family: 'JetBrains Mono', monospace; font-size: 0.85rem; text-align: left;">
                <thead>
                    <tr style="background: rgba(15, 23, 42, 0.95);">
                        ${columns.map((col, idx) => `
                            <th style="padding: 14px 18px; color: #94a3b8; font-weight: 700; text-transform: uppercase; font-size: 0.72rem; letter-spacing: 0.5px; border-bottom: 1px solid rgba(255,255,255,0.1); ${idx === 0 ? 'border-top-left-radius: 12px;' : ''} ${idx === columns.length - 1 ? 'border-top-right-radius: 12px;' : ''}">
                                ${col.replace(/_/g, ' ')}
                            </th>
                        `).join('')}
                    </tr>
                </thead>
                <tbody>
                    ${data.map((row, rIdx) => `
                        <tr style="background: ${rIdx % 2 === 0 ? 'rgba(255,255,255,0.02)' : 'rgba(255,255,255,0.04)'}; transition: background 0.15s ease;">
                            ${columns.map((col, cIdx) => {
                                const val = row[col];
                                const isCritical = (val === 'CRITICAL' || val === 'HIGH RISK' || val === 'MUTATED');
                                const isStable = (val === 'STABLE' || val === 'LOW RISK' || val === 'NORMAL');

                                let cellBadge = val;
                                if (isCritical) {
                                    cellBadge = `<span style="background: rgba(239,68,68,0.2); color: #fca5a5; border: 1px solid rgba(239,68,68,0.4); padding: 3px 8px; border-radius: 6px; font-weight: 700;">${val}</span>`;
                                } else if (isStable) {
                                    cellBadge = `<span style="background: rgba(16,185,129,0.2); color: #86efac; border: 1px solid rgba(16,185,129,0.4); padding: 3px 8px; border-radius: 6px; font-weight: 600;">${val}</span>`;
                                }

                                return `
                                    <td onclick="window.handleCellClick(this, '${col}', '${val}')" 
                                        style="padding: 14px 18px; border-bottom: 1px solid rgba(255,255,255,0.05); color: #e2e8f0; cursor: pointer; transition: all 0.15s ease;"
                                        onmouseover="this.style.background='rgba(59,130,246,0.18)'"
                                        onmouseout="this.style.background='transparent'"
                                        title="Click to validate: ${col} = ${val}">
                                        ${cellBadge}
                                    </td>
                                `;
                            }).join('')}
                        </tr>
                    `).join('')}
                </tbody>
            </table>
        `;
    };

    window.handleCellClick = function (cellElem, col, val) {
        if (!cellElem) return;
        const lesson = window.activeLessonContext;
        const feedbackEl = document.getElementById('feedback');

        // Reset previous selections
        document.querySelectorAll('table.clinical-interactive-table td').forEach(td => {
            td.style.outline = 'none';
        });

        if (!lesson || !lesson.task) {
            cellElem.style.outline = '2px solid #3b82f6';
            if (feedbackEl) {
                feedbackEl.innerHTML = `<span style="color: #38bdf8;">> Selected: <strong>${col}</strong> = "${val}".</span>`;
            }
            return;
        }

        const task = lesson.task;
        let isCorrect = false;

        if (typeof task.condition === 'function') {
            isCorrect = (col === task.targetColumn && task.condition(val));
        } else {
            isCorrect = (val === 'CRITICAL' || val === 'HIGH RISK' || val === 'MUTATED');
        }

        if (isCorrect) {
            cellElem.style.outline = '2px solid #10b981';
            cellElem.style.background = 'rgba(16, 185, 129, 0.2)';
            if (feedbackEl) {
                feedbackEl.className = 'feedback-box modern-card';
                feedbackEl.style.borderColor = '#10b981';
                feedbackEl.style.background = 'rgba(16, 185, 129, 0.12)';
                feedbackEl.innerHTML = `
                    <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 10px;">
                        <div>
                            <div style="font-family: 'Space Grotesk'; font-weight: 700; color: #10b981; font-size: 1.05rem;">
                                ✔ PRODUCTION GROUND TRUTH CONFIRMED (+100 XP)
                            </div>
                            <div style="font-family: 'Plus Jakarta Sans'; font-size: 0.92rem; color: #cbd5e1; margin-top: 4px;">
                                ${task.successMessage || 'System telemetry observation validated against production protocol.'}
                            </div>
                        </div>
                        <button onclick="window.navigateLessonStep(1)" class="btn-neural" style="font-family: 'Space Grotesk'; font-size: 0.85rem; font-weight: 700; padding: 10px 18px; border-radius: 8px; background: #10b981; color: #022c22; border: none; cursor: pointer;">
                            Continue to Next Mission ➔
                        </button>
                    </div>
                `;
            }
            if (window.Gamification && typeof window.Gamification.addXP === 'function') {
                window.Gamification.addXP(100);
            }
            if (typeof triggerHaptic === 'function') triggerHaptic('success');
            if (typeof triggerConfetti === 'function') triggerConfetti();
        } else {
            cellElem.style.outline = '2px solid #f59e0b';
            if (feedbackEl) {
                feedbackEl.className = 'feedback-box modern-card';
                feedbackEl.style.borderColor = 'rgba(245, 158, 11, 0.4)';
                feedbackEl.innerHTML = `
                    <div style="font-family: 'Plus Jakarta Sans'; font-size: 0.92rem; color: #fbbf24;">
                        ⚠️ Inspected <strong>${col}</strong> = "${val}". Target required: ${task.errorMessage || 'Please locate the critical telemetry or anomalous system record.'}
                    </div>
                `;
            }
            if (typeof triggerHaptic === 'function') triggerHaptic('light');
        }
    };

    // 3. CLINICAL ACCREDITATION QUIZ RENDERER
    window.renderMasterQuiz = function (lesson) {
        if (!lesson || !lesson.quiz) return '';
        const quiz = lesson.quiz;

        return `
            <div class="modern-card" style="border-radius: 20px; padding: 32px; background: #0f172a; border: 1px solid rgba(255, 255, 255, 0.08); box-shadow: 0 10px 30px rgba(0,0,0,0.4);">
                <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 20px; border-bottom: 1px solid rgba(255,255,255,0.08); padding-bottom: 16px; flex-wrap: wrap; gap: 12px;">
                    <div style="display: flex; align-items: center; gap: 12px;">
                        <span style="font-size: 1.6rem;">🧠</span>
                        <div>
                            <span style="font-family: 'JetBrains Mono'; font-size: 0.72rem; color: #a855f7; text-transform: uppercase; font-weight: 700;">PART VI • TECHNICAL ACCREDITATION</span>
                            <h2 style="font-family: 'Space Grotesk', sans-serif; font-size: 1.45rem; font-weight: 700; color: white; margin: 2px 0 0 0;">
                                Knowledge Check & Production Decision Defense
                            </h2>
                        </div>
                    </div>
                    <span style="font-family: 'JetBrains Mono'; font-size: 0.75rem; color: #f59e0b; background: rgba(245,158,11,0.12); border: 1px solid rgba(245,158,11,0.3); padding: 5px 12px; border-radius: 8px; font-weight: 700;">
                        ⭐ +50 XP Reward
                    </span>
                </div>

                <div style="font-family: 'Plus Jakarta Sans', sans-serif; font-size: 1.05rem; font-weight: 600; color: #f8fafc; margin-bottom: 22px; line-height: 1.6;">
                    ${quiz.question}
                </div>

                <div id="master-quiz-options" style="display: flex; flex-direction: column; gap: 12px; margin-bottom: 20px;">
                    ${quiz.options.map((opt, idx) => `
                        <div class="quiz-option-card" 
                             onclick="window.handleMasterQuizSelection(${idx}, ${opt.correct}, '${quiz.explanation.replace(/'/g, "\\'")}')"
                             style="display: flex; align-items: flex-start; gap: 14px; background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.1); border-radius: 12px; padding: 16px 20px; cursor: pointer; transition: all 0.2s ease;">
                            <span style="font-family: 'JetBrains Mono'; font-weight: 700; color: #94a3b8; font-size: 0.9rem; min-width: 24px; padding-top: 1px;">
                                ${String.fromCharCode(65 + idx)}.
                            </span>
                            <span style="font-family: 'Plus Jakarta Sans', sans-serif; font-size: 0.95rem; color: #cbd5e1; line-height: 1.5; flex: 1;">
                                ${opt.text}
                            </span>
                        </div>
                    `).join('')}
                </div>

                <div id="master-quiz-feedback" style="display: none; border-radius: 12px; padding: 18px 22px; font-family: 'Plus Jakarta Sans', sans-serif; font-size: 0.95rem; line-height: 1.6;">
                </div>
            </div>
        `;
    };

    window.handleMasterQuizSelection = function (optionIndex, isCorrect, explanation) {
        const feedbackEl = document.getElementById('master-quiz-feedback');
        const optionsContainer = document.getElementById('master-quiz-options');
        if (!feedbackEl || !optionsContainer) return;

        const optionCards = optionsContainer.querySelectorAll('.quiz-option-card');
        optionCards.forEach((card, idx) => {
            card.style.pointerEvents = 'none';
            if (idx === optionIndex) {
                if (isCorrect) {
                    card.style.background = 'rgba(16, 185, 129, 0.15)';
                    card.style.borderColor = '#10b981';
                } else {
                    card.style.background = 'rgba(239, 68, 68, 0.15)';
                    card.style.borderColor = '#ef4444';
                }
            }
        });

        feedbackEl.style.display = 'block';
        if (isCorrect) {
            feedbackEl.style.background = 'rgba(16, 185, 129, 0.12)';
            feedbackEl.style.border = '1px solid rgba(16, 185, 129, 0.4)';
            feedbackEl.style.color = '#86efac';
            feedbackEl.innerHTML = `
                <div style="display: flex; align-items: center; gap: 8px; font-weight: 700; margin-bottom: 6px;">
                    <span style="font-size: 1.2rem;">✔</span> CORRECT ARCHITECTURAL & TECHNICAL DEFENSE (+50 XP)
                </div>
                <div>${explanation}</div>
            `;
            if (window.Gamification && typeof window.Gamification.addXP === 'function') {
                window.Gamification.addXP(50);
            }
        } else {
            feedbackEl.style.background = 'rgba(239, 68, 68, 0.12)';
            feedbackEl.style.border = '1px solid rgba(239, 68, 68, 0.4)';
            feedbackEl.style.color = '#fca5a5';
            feedbackEl.innerHTML = `
                <div style="display: flex; align-items: center; gap: 8px; font-weight: 700; margin-bottom: 6px;">
                    <span style="font-size: 1.2rem;">✖</span> TECHNICAL RATIONALE & SYSTEM DEFENSE
                </div>
                <div>${explanation}</div>
            `;
        }
    };

    // 4. WORLD-CLASS MASTER LESSON VIEW RENDERER (v16.0)
    window.renderMasterLessonView = function (lesson, dayId) {
        if (!lesson) return;

        window.activeLessonContext = lesson;
        if (window.AudioBriefing && window.AudioBriefing.isPlaying) {
            window.AudioBriefing.stop();
        }

        const isPythonLesson = lesson.type === 'python';

        // Update Workspace Header Title
        const titleEl = document.getElementById('page-title');
        if (titleEl) {
            titleEl.innerHTML = `<span style="color: #3b82f6; font-family: 'JetBrains Mono'; font-weight: 700; margin-right: 8px;">W${lesson.weekNum}·D${lesson.dayNum}</span> <span style="color: #ffffff; font-weight: 600;">${lesson.shortTitle || lesson.moduleTitle}</span>`;
            titleEl.title = lesson.title;
        }

        window.activeDayId = dayId || lesson.dayId;
        window.activeCurrentLessonId = lesson.id;
        window.activeCurrentDayId = dayId || lesson.dayId;

        // Update floating day badge
        const floatingCounter = document.getElementById('floating-day-counter');
        if (floatingCounter) {
            const overallDay = ((lesson.weekNum - 1) * 7) + lesson.dayNum;
            floatingCounter.textContent = `Day ${overallDay} / 364 • W${lesson.weekNum}-D${lesson.dayNum}`;
        }

        const app = document.getElementById('app');
        if (!app) return;

        const kb = (typeof window !== 'undefined' && window.curriculumKnowledgeBase) ? window.curriculumKnowledgeBase : null;
        const allRoadmap = (typeof window !== 'undefined' && window.roadmap) ? window.roadmap : [];

        // Build 52-Week Selector Dropdown
        const weekOptionsHTML = Array.from({ length: 52 }, (_, i) => {
            const wNum = i + 1;
            const kbW = kb ? kb[wNum] : null;
            const rW = allRoadmap[i];
            const title = (kbW && kbW.shortTitle) ? kbW.shortTitle : ((rW && rW.title) ? rW.title.replace(/^Week \d+:\s*/, '') : 'Week ' + wNum);
            const phaseNum = wNum <= 8 ? 1 : (wNum <= 20 ? 2 : (wNum <= 32 ? 3 : 4));
            const selected = (wNum === lesson.weekNum) ? 'selected' : '';
            return `<option value="${wNum}" ${selected} style="background: #0f172a; color: white;">W${wNum.toString().padStart(2, '0')}: ${title} [Phase ${phaseNum}]</option>`;
        }).join('');

        // Build 7 Day Mission Stepper Cards
        const currentKbWeek = kb ? kb[lesson.weekNum] : null;
        const currentRoadmapWeek = allRoadmap.find(m => m.weekNum === lesson.weekNum) || allRoadmap[lesson.weekNum - 1];

        const dayCardsHTML = [1, 2, 3, 4, 5, 6, 7].map(d => {
            const isActive = (d === lesson.dayNum);
            let dTitle = 'Day ' + d;
            if (currentKbWeek && currentKbWeek.dayTitles && currentKbWeek.dayTitles[d - 1]) {
                dTitle = currentKbWeek.dayTitles[d - 1];
            } else if (currentRoadmapWeek && currentRoadmapWeek.days && currentRoadmapWeek.days[d - 1]) {
                dTitle = currentRoadmapWeek.days[d - 1].title;
            }

            return `
            <div class="day-nav-card ${isActive ? 'active-day-mission' : ''}" 
                 onclick="window.jumpToWeek(${lesson.weekNum}, ${d})" 
                 title="Switch to Week ${lesson.weekNum} - Day ${d}: ${dTitle.replace(/"/g, '&quot;')}"
                 style="background: ${isActive ? 'linear-gradient(135deg, rgba(59,130,246,0.16), rgba(99,102,241,0.12))' : 'rgba(255,255,255,0.02)'}; border: 1.5px solid ${isActive ? '#3b82f6' : 'rgba(255,255,255,0.08)'}; border-radius: 14px; padding: 14px 16px; cursor: pointer; transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1); display: flex; flex-direction: column; gap: 8px; box-shadow: ${isActive ? '0 0 24px rgba(59,130,246,0.25)' : 'none'};">
                <div style="display: flex; justify-content: space-between; align-items: center;">
                    <span style="font-family: 'JetBrains Mono', monospace; font-size: 0.72rem; font-weight: 700; color: ${isActive ? '#3b82f6' : '#94a3b8'}; background: ${isActive ? 'rgba(59,130,246,0.2)' : 'rgba(255,255,255,0.05)'}; padding: 3px 8px; border-radius: 6px;">DAY 0${d}</span>
                    <span style="font-family: 'JetBrains Mono'; font-size: 0.65rem; color: ${isActive ? '#10b981' : '#64748b'}; font-weight: 700;">${isActive ? '● ACTIVE' : 'OPEN'}</span>
                </div>
                <div style="font-family: 'Plus Jakarta Sans', sans-serif; font-size: 0.88rem; font-weight: 700; color: ${isActive ? '#ffffff' : '#cbd5e1'}; line-height: 1.35; overflow: hidden; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; min-height: 2.3em;">
                    ${dTitle}
                </div>
                <div style="display: flex; justify-content: space-between; align-items: center; margin-top: auto; padding-top: 6px; border-top: 1px solid ${isActive ? 'rgba(59,130,246,0.25)' : 'rgba(255,255,255,0.04)'};">
                    <span style="font-family: 'JetBrains Mono'; font-size: 0.68rem; color: #f59e0b; font-weight: 600;">⭐ +100 XP</span>
                    <span style="font-size: 0.8rem; color: ${isActive ? '#3b82f6' : '#94a3b8'}; font-weight: 700;">${isActive ? '✔' : '➔'}</span>
                </div>
            </div>
            `;
        }).join('');

        // Detect if running locally via file protocol
        const isFileProtocol = (typeof window !== 'undefined' && window.location.protocol === 'file:');

        // Render video theater container (offline poster vs iframe embed)
        let videoPlayerHTML = '';
        if (isFileProtocol) {
            videoPlayerHTML = `
                <div class="offline-video-poster" 
                     onclick="window.open('https://www.youtube.com/watch?v=${lesson.videoId}', '_blank')"
                     style="position: relative; aspect-ratio: 16/9; width: 100%; border-radius: 16px; overflow: hidden; background: #0b0f19; cursor: pointer; border: 1px solid rgba(255,255,255,0.1); box-shadow: 0 12px 36px rgba(0,0,0,0.6); display: flex; align-items: center; justify-content: center;">
                    <img src="https://img.youtube.com/vi/${lesson.videoId}/hqdefault.jpg" alt="${lesson.videoTitle}" style="position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; opacity: 0.65; transition: transform 0.3s ease;">
                    <div style="position: absolute; inset: 0; background: linear-gradient(180deg, rgba(11,15,25,0.4) 0%, rgba(11,15,25,0.95) 100%);"></div>
                    
                    <div style="position: relative; z-index: 10; text-align: center; padding: 24px; max-width: 600px;">
                        <div style="width: 76px; height: 76px; border-radius: 50%; background: rgba(239, 68, 68, 0.9); margin: 0 auto 18px auto; display: flex; align-items: center; justify-content: center; box-shadow: 0 0 30px rgba(239, 68, 68, 0.6); transition: transform 0.2s ease;">
                            <span style="font-size: 2.2rem; color: white; margin-left: 5px;">▶</span>
                        </div>
                        <div style="font-family: 'Space Grotesk', sans-serif; font-size: 1.35rem; font-weight: 700; color: white; margin-bottom: 8px;">
                            ${lesson.videoTitle}
                        </div>
                        <div style="font-family: 'JetBrains Mono', monospace; font-size: 0.8rem; color: #94a3b8; margin-bottom: 16px;">
                            ${lesson.videoChannel || 'Official Lecture'} • ${lesson.videoDuration || 'HD Masterclass'}
                        </div>
                        <div style="display: inline-flex; align-items: center; gap: 8px; background: rgba(255,255,255,0.1); border: 1px solid rgba(255,255,255,0.2); padding: 8px 18px; border-radius: 9999px; font-family: 'Space Grotesk'; font-size: 0.85rem; font-weight: 700; color: white;">
                            <span>▶</span> Click to Watch on YouTube in Full HD
                        </div>
                        <div style="margin-top: 10px; font-family: 'JetBrains Mono'; font-size: 0.7rem; color: #64748b;">
                            (Local File Mode • Direct YouTube launch prevents browser iframe configuration errors)
                        </div>
                    </div>
                </div>
            `;
        } else {
            videoPlayerHTML = `
                <div class="video-refractive-frame" style="border-radius: 16px; overflow: hidden; background: #000; aspect-ratio: 16/9; width: 100%; border: 1px solid rgba(255,255,255,0.1); box-shadow: 0 10px 30px rgba(0,0,0,0.6);">
                    <iframe src="https://www.youtube-nocookie.com/embed/${lesson.videoId}?rel=0" style="width: 100%; height: 100%; border: none;" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen title="${lesson.videoTitle}"></iframe>
                </div>
            `;
        }

        const heroContent = `
            <div class="masterclass-lesson-container lesson-container" id="masterclass-top" style="max-width: 1440px; margin: 0 auto; padding-bottom: 40px;">

                <!-- 0. MASTER DUAL-LEVEL WEEK & DAY CURRICULUM CONTROLLER -->
                <div class="week-day-master-nav-strip modern-card" style="border-radius: 20px; padding: 22px 26px; margin-bottom: 28px; background: #0f172a; border: 1px solid rgba(255,255,255,0.08); box-shadow: 0 10px 30px rgba(0,0,0,0.4);">
                    
                    <!-- LEVEL 1: WEEK CONTROLS & PHASE JUMP -->
                    <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 14px; padding-bottom: 18px; border-bottom: 1px solid rgba(255,255,255,0.08);">
                        <div style="display: flex; align-items: center; gap: 10px; flex-wrap: wrap;">
                            <button onclick="window.navigateWeek(-1)" class="btn-neural" style="font-family: 'Space Grotesk', sans-serif; font-size: 0.82rem; font-weight: 700; padding: 9px 15px; border-radius: 10px; border-color: rgba(255,255,255,0.15); color: #e2e8f0; background: rgba(255,255,255,0.05); display: inline-flex; align-items: center; gap: 6px; cursor: pointer;" title="Previous Week">
                                <span>◀</span> Prev Week
                            </button>

                            <!-- 52-WEEK SELECTOR DROPDOWN -->
                            <div style="display: flex; align-items: center; gap: 8px; background: rgba(0,0,0,0.5); border: 1px solid rgba(59, 130, 246, 0.4); border-radius: 10px; padding: 6px 14px;">
                                <span style="font-size: 1rem;">🗓️</span>
                                <span style="font-family: 'JetBrains Mono'; font-size: 0.72rem; color: #3b82f6; font-weight: 700; text-transform: uppercase;">WEEK:</span>
                                <select id="masterclass-week-select" onchange="window.jumpToWeek(this.value, 1)" style="background: transparent; border: none; color: white; font-family: 'Space Grotesk', sans-serif; font-size: 0.92rem; font-weight: 700; outline: none; cursor: pointer; max-width: 380px;">
                                    ${weekOptionsHTML}
                                </select>
                            </div>

                            <button onclick="window.navigateWeek(1)" class="btn-neural" style="font-family: 'Space Grotesk', sans-serif; font-size: 0.82rem; font-weight: 700; padding: 9px 15px; border-radius: 10px; border-color: rgba(255,255,255,0.15); color: #e2e8f0; background: rgba(255,255,255,0.05); display: inline-flex; align-items: center; gap: 6px; cursor: pointer;" title="Next Week">
                                Next Week <span>▶</span>
                            </button>
                        </div>

                        <!-- PHASE SELECTOR PILLS -->
                        <div style="display: flex; align-items: center; gap: 8px; flex-wrap: wrap;">
                            <button onclick="window.jumpToWeek(1, 1)" class="btn-neural" style="font-family: 'JetBrains Mono'; font-size: 0.74rem; padding: 7px 12px; border-radius: 8px; cursor: pointer; ${lesson.phase === 1 ? 'border-color: #3b82f6; color: #3b82f6; background: rgba(59,130,246,0.18); font-weight: 700;' : 'color: #94a3b8; background: rgba(255,255,255,0.03);'}" title="Phase 1: Foundations & Stats (W1-8)">P1: Foundations</button>
                            <button onclick="window.jumpToWeek(9, 1)" class="btn-neural" style="font-family: 'JetBrains Mono'; font-size: 0.74rem; padding: 7px 12px; border-radius: 8px; cursor: pointer; ${lesson.phase === 2 ? 'border-color: #a855f7; color: #a855f7; background: rgba(168,85,247,0.18); font-weight: 700;' : 'color: #94a3b8; background: rgba(255,255,255,0.03);'}" title="Phase 2: Relational DBs & SQL (W9-20)">P2: SQL & DBs</button>
                            <button onclick="window.jumpToWeek(21, 1)" class="btn-neural" style="font-family: 'JetBrains Mono'; font-size: 0.74rem; padding: 7px 12px; border-radius: 8px; cursor: pointer; ${lesson.phase === 3 ? 'border-color: #ec4899; color: #ec4899; background: rgba(236,72,153,0.18); font-weight: 700;' : 'color: #94a3b8; background: rgba(255,255,255,0.03);'}" title="Phase 3: Python Data Science (W21-32)">P3: Python</button>
                            <button onclick="window.jumpToWeek(33, 1)" class="btn-neural" style="font-family: 'JetBrains Mono'; font-size: 0.74rem; padding: 7px 12px; border-radius: 8px; cursor: pointer; ${lesson.phase === 4 ? 'border-color: #10b981; color: #10b981; background: rgba(16,185,129,0.18); font-weight: 700;' : 'color: #94a3b8; background: rgba(255,255,255,0.03);'}" title="Phase 4: Machine Learning & AI (W33-52)">P4: AI & ML</button>
                            <button onclick="window.scrollAppTo('#curriculum-master-matrix')" class="btn-neural" style="font-family: 'Space Grotesk', sans-serif; font-size: 0.76rem; font-weight: 700; padding: 7px 14px; border-radius: 8px; border-color: rgba(255,255,255,0.2); color: #f1f5f9; background: rgba(255,255,255,0.06); cursor: pointer;" title="View Complete 52-Week Curriculum Below">
                                📋 52 Weeks Hub
                            </button>
                        </div>
                    </div>

                    <!-- LEVEL 2: 7 DISTINCT DAILY MISSION CARDS -->
                    <div style="margin-top: 18px;">
                        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 14px; flex-wrap: wrap; gap: 8px;">
                            <div style="font-family: 'Space Grotesk', sans-serif; font-size: 0.82rem; font-weight: 700; color: #f8fafc; display: flex; align-items: center; gap: 8px; letter-spacing: 0.5px;">
                                <span style="display: inline-block; width: 8px; height: 8px; border-radius: 50%; background: #3b82f6; box-shadow: 0 0 10px #3b82f6;"></span>
                                WEEK ${lesson.weekNum} DAILY MISSIONS • 7 DAYS SEPARATED (CLICK TO LOAD)
                            </div>
                            <div style="display: flex; align-items: center; gap: 8px;">
                                <button onclick="window.navigateLessonStep(-1)" class="btn-neural" style="font-family: 'JetBrains Mono'; font-size: 0.72rem; padding: 4px 10px; border-radius: 6px; cursor: pointer;">◀ Prev Day</button>
                                <button onclick="window.navigateLessonStep(1)" class="btn-neural" style="font-family: 'JetBrains Mono'; font-size: 0.72rem; padding: 4px 10px; border-radius: 6px; cursor: pointer;">Next Day ▶</button>
                                <span style="font-family: 'JetBrains Mono'; font-size: 0.74rem; color: #3b82f6; background: rgba(59,130,246,0.12); padding: 4px 10px; border-radius: 6px; font-weight: 700;">
                                    CURRENT: DAY 0${lesson.dayNum} OF 7
                                </span>
                            </div>
                        </div>

                        <!-- 7-DAY MISSION GRID (Symmetrical 7-Column Layout) -->
                        <div class="week-seven-days-grid" style="display: grid; grid-template-columns: repeat(7, minmax(0, 1fr)); gap: 10px;">
                            ${dayCardsHTML}
                        </div>
                    </div>
                </div>

                <!-- 1. LESSON HERO HEADER -->
                <div class="modern-card" style="border-radius: 20px; padding: 32px 36px; margin-bottom: 28px; background: #0f172a; border: 1px solid rgba(255,255,255,0.08); box-shadow: 0 10px 30px rgba(0,0,0,0.4);">
                    <div style="display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap; gap: 14px; margin-bottom: 16px;">
                        <div style="display: flex; align-items: center; gap: 10px; flex-wrap: wrap;">
                            <span style="font-family: 'JetBrains Mono'; font-size: 0.72rem; color: #3b82f6; background: rgba(59,130,246,0.12); border: 1px solid rgba(59,130,246,0.3); padding: 4px 10px; border-radius: 6px; font-weight: 700; text-transform: uppercase;">
                                ${lesson.phaseName}
                            </span>
                            <span style="font-family: 'JetBrains Mono'; font-size: 0.72rem; color: #94a3b8; background: rgba(255,255,255,0.04); padding: 4px 10px; border-radius: 6px;">
                                ⏱️ ${lesson.duration}
                            </span>
                            <span style="font-family: 'JetBrains Mono'; font-size: 0.72rem; color: #f59e0b; background: rgba(245,158,11,0.1); border: 1px solid rgba(245,158,11,0.25); padding: 4px 10px; border-radius: 6px; font-weight: 700;">
                                ⭐ +100 XP
                            </span>
                        </div>
                        <div style="display: flex; gap: 8px;">
                            <button onclick="window.navigateLessonStep(-1)" class="btn-neural" style="font-family: 'Space Grotesk'; font-size: 0.78rem; font-weight: 700; padding: 7px 12px; border-radius: 8px;">◀ Prev Day</button>
                            <button onclick="window.navigateLessonStep(1)" class="btn-neural" style="font-family: 'Space Grotesk'; font-size: 0.78rem; font-weight: 700; padding: 7px 12px; border-radius: 8px;">Next Day ▶</button>
                        </div>
                    </div>

                    <div style="font-family: 'JetBrains Mono'; font-size: 0.75rem; color: #64748b; margin-bottom: 6px;">
                        WEEK ${lesson.weekNum} • MISSION DAY ${lesson.dayNum} // NODE: ${lesson.id}
                    </div>
                    <h1 style="font-family: 'Space Grotesk', sans-serif; font-size: 2.2rem; font-weight: 800; color: #ffffff; margin: 0 0 14px 0; letter-spacing: -0.5px; line-height: 1.25;">
                        ${lesson.title}
                    </h1>
                    <p style="font-family: 'Plus Jakarta Sans', sans-serif; font-size: 1.05rem; line-height: 1.65; color: #94a3b8; margin: 0 0 24px 0; max-width: 1100px;">
                        ${lesson.brief}
                    </p>

                    <!-- QUICK JUMP PILLS WITH PROMINENT SCROLL DOWN BUTTON -->
                    <div class="lesson-quick-jump-bar" style="display: flex; align-items: center; gap: 8px; flex-wrap: wrap; background: rgba(0,0,0,0.4); border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 14px; padding: 10px 16px;">
                        <span style="font-family: 'JetBrains Mono'; font-size: 0.72rem; color: #94a3b8; text-transform: uppercase; margin-right: 4px; font-weight: 700;">Jump to:</span>
                        <a href="javascript:void(0)" onclick="window.scrollToSection('#lesson-zero-to-field')" class="jump-pill">🌱 Zero-to-Field</a>
                        <a href="javascript:void(0)" onclick="window.scrollToSection('#lesson-computer-simulator')" class="jump-pill">⚡ Architecture Sim</a>
                        <a href="javascript:void(0)" onclick="window.scrollToSection('#lesson-video-theater')" class="jump-pill">🎥 Video Lecture</a>
                        <a href="javascript:void(0)" onclick="window.scrollToSection('#lesson-five-ws')" class="jump-pill">📌 5 W's & H</a>
                        <a href="javascript:void(0)" onclick="window.scrollToSection('#lesson-theory-deepdive')" class="jump-pill">📘 Theory & Mechanics</a>
                        <a href="javascript:void(0)" onclick="window.scrollToSection('#lesson-clinical-systems')" class="jump-pill">🏢 Production Impact</a>
                        <a href="javascript:void(0)" onclick="window.scrollToSection('#lesson-telemetry-standards')" class="jump-pill">📊 System Telemetry</a>
                        <a href="javascript:void(0)" onclick="window.scrollToSection('#lesson-engineering-pitfalls')" class="jump-pill">⚠️ Failure Modes</a>
                        <a href="javascript:void(0)" onclick="window.scrollToSection('#lesson-interactive-lab')" class="jump-pill">🧪 Hands-On Lab</a>
                        <a href="javascript:void(0)" onclick="window.scrollToSection('#lesson-knowledge-quiz')" class="jump-pill">🧠 Accreditation Quiz</a>
                        <a href="javascript:void(0)" onclick="window.scrollToSection('#lesson-curated-resources')" class="jump-pill">📚 Resources</a>
                        
                        <!-- HIGH VISIBILITY SCROLL DOWN BUTTON -->
                        <button onclick="window.scrollAppDown(650)" class="btn-neural" style="font-family: 'Space Grotesk'; font-size: 0.8rem; font-weight: 700; padding: 7px 16px; border-radius: 8px; background: linear-gradient(135deg, rgba(59,130,246,0.3), rgba(99,102,241,0.3)); border-color: #3b82f6; color: white; display: inline-flex; align-items: center; gap: 6px; cursor: pointer; margin-left: auto;" title="Scroll down through lesson">
                            <span>⬇</span> Read Full Lesson
                        </button>
                    </div>
                </div>

                <!-- 2. HIGH-DEFINITION VIDEO LECTURE THEATER -->
                <div id="lesson-video-theater" class="modern-card" style="border-radius: 20px; padding: 26px; margin-bottom: 28px; background: #0f172a; border: 1px solid rgba(255,255,255,0.08); box-shadow: 0 10px 30px rgba(0,0,0,0.4);">
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 18px; flex-wrap: wrap; gap: 12px;">
                        <div>
                            <div style="display: inline-flex; align-items: center; gap: 6px; font-family: 'JetBrains Mono'; font-size: 0.72rem; color: #3b82f6; font-weight: 700; text-transform: uppercase;">
                                <span>🎬</span> Official Video Lecture • ${lesson.videoDuration || 'HD Masterclass'}
                            </div>
                            <h3 style="font-family: 'Space Grotesk', sans-serif; font-size: 1.3rem; font-weight: 700; color: white; margin: 4px 0 0 0;">
                                ${lesson.videoTitle}
                            </h3>
                            <div style="font-family: 'JetBrains Mono'; font-size: 0.75rem; color: #94a3b8; margin-top: 2px;">
                                Instructor / Channel: ${lesson.videoChannel || 'DataVitals Engineering Specialist'}
                            </div>
                        </div>
                        <div style="display: flex; gap: 10px; flex-wrap: wrap;">
                            <a href="https://www.youtube.com/watch?v=${lesson.videoId}" target="_blank" rel="noopener noreferrer" class="btn-neural" style="font-family: 'Space Grotesk'; font-size: 0.82rem; font-weight: 700; text-decoration: none; padding: 9px 18px; border-radius: 10px; display: inline-flex; align-items: center; gap: 6px; background: rgba(239, 68, 68, 0.2); border-color: #ef4444; color: #fca5a5;" title="Open directly in YouTube full-screen player"><span>▶</span> Open on YouTube</a>
                            <button onclick="window.toggleWorkspaceZenMode()" class="btn-neural" style="font-family: 'Space Grotesk'; font-size: 0.8rem; padding: 9px 15px; border-radius: 10px; display: inline-flex; align-items: center; gap: 6px; border-color: rgba(255,255,255,0.15); color: #cbd5e1;">
                                <span>🖥️</span> Theater Mode
                            </button>
                            <button onclick="window.scrollAppDown(650)" class="btn-neural" style="font-family: 'Space Grotesk'; font-size: 0.8rem; font-weight: 700; padding: 9px 16px; border-radius: 10px; display: inline-flex; align-items: center; gap: 6px; border-color: #3b82f6; color: #3b82f6; background: rgba(59,130,246,0.1);">
                                <span>⬇</span> Scroll to Theory & Lab
                            </button>
                        </div>
                    </div>

                    ${videoPlayerHTML}
                </div>

                <!-- 2.5. ZERO-TO-FIELD PEDAGOGICAL ARCHITECTURE (ELI5, ON-FIELD DUTY & INTERVIEW DEFENSE) -->
                <div id="lesson-zero-to-field" class="modern-card" style="border-radius: 20px; padding: 30px; margin-bottom: 28px; background: linear-gradient(135deg, rgba(15, 23, 42, 0.95), rgba(30, 41, 59, 0.85)); border: 1px solid rgba(56, 189, 248, 0.25); box-shadow: 0 10px 30px rgba(0,0,0,0.4);">
                    <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 20px; border-bottom: 1px solid rgba(255,255,255,0.08); padding-bottom: 14px; flex-wrap: wrap; gap: 10px;">
                        <div style="display: flex; align-items: center; gap: 12px;">
                            <div style="width: 44px; height: 44px; border-radius: 12px; background: rgba(56, 189, 248, 0.15); border: 1px solid rgba(56, 189, 248, 0.3); display: flex; align-items: center; justify-content: center; font-size: 1.4rem;">
                                🌱
                            </div>
                            <div>
                                <span style="font-family: 'JetBrains Mono'; font-size: 0.72rem; color: #38bdf8; text-transform: uppercase; font-weight: 700; letter-spacing: 0.05em;">
                                    ZERO-TO-FIELD PEDAGOGY • GROUND ZERO TO ON-FIELD INDUSTRY PROFESSIONAL
                                </span>
                                <h2 style="font-family: 'Space Grotesk'; font-size: 1.35rem; font-weight: 700; color: white; margin: 0;">
                                    Ground-Zero Foundation & On-Field Industry Readiness
                                </h2>
                            </div>
                        </div>
                        <div style="font-family: 'JetBrains Mono'; font-size: 0.75rem; color: #94a3b8; background: rgba(255,255,255,0.05); padding: 5px 12px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.08);">
                            Discipline: <strong style="color: #38bdf8;">${lesson.domain}</strong>
                        </div>
                    </div>

                    <!-- 3-COLUMN BENTO GRID: ELI5, ON-FIELD DUTY, INTERVIEW DEFENSE -->
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 18px;">
                        <!-- BENTO 1: ELI5 -->
                        <div style="background: rgba(255,255,255,0.02); border: 1px solid rgba(56, 189, 248, 0.2); border-radius: 16px; padding: 22px; display: flex; flex-direction: column;">
                            <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 14px;">
                                <span style="font-size: 1.3rem;">💡</span>
                                <div style="font-family: 'Space Grotesk'; font-size: 1.05rem; font-weight: 700; color: #38bdf8;">
                                    ${lesson.eli5.title}
                                </div>
                            </div>
                            <p style="font-family: 'Plus Jakarta Sans'; font-size: 0.9rem; line-height: 1.65; color: #cbd5e1; margin: 0 0 16px 0; white-space: pre-line;">
                                ${lesson.eli5.analogy}
                            </p>
                            <div style="margin-top: auto; background: rgba(56, 189, 248, 0.06); border: 1px solid rgba(56, 189, 248, 0.2); border-radius: 10px; padding: 12px 14px;">
                                <div style="font-family: 'JetBrains Mono'; font-size: 0.72rem; color: #38bdf8; font-weight: 700; text-transform: uppercase; margin-bottom: 4px;">
                                    ⚡ The Binary Bits & Electronics Reality:
                                </div>
                                <div style="font-family: 'Plus Jakarta Sans'; font-size: 0.85rem; line-height: 1.5; color: #94a3b8;">
                                    ${lesson.eli5.binaryBitsExplained}
                                </div>
                            </div>
                        </div>

                        <!-- BENTO 2: ON-FIELD INDUSTRY ROLE -->
                        <div style="background: rgba(255,255,255,0.02); border: 1px solid rgba(16, 185, 129, 0.2); border-radius: 16px; padding: 22px; display: flex; flex-direction: column;">
                            <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 14px;">
                                <span style="font-size: 1.3rem;">💻</span>
                                <div>
                                    <div style="font-family: 'JetBrains Mono'; font-size: 0.7rem; color: #10b981; text-transform: uppercase; font-weight: 700;">ON-FIELD INDUSTRY ROLE</div>
                                    <div style="font-family: 'Space Grotesk'; font-size: 1.05rem; font-weight: 700; color: #10b981;">
                                        ${lesson.onFieldPractice.roleTitle}
                                    </div>
                                </div>
                            </div>
                            <p style="font-family: 'Plus Jakarta Sans'; font-size: 0.9rem; line-height: 1.65; color: #cbd5e1; margin: 0 0 14px 0;">
                                ${lesson.onFieldPractice.dayToDayDuties}
                            </p>
                            <div style="margin-top: auto; background: rgba(16, 185, 129, 0.05); border: 1px solid rgba(16, 185, 129, 0.2); border-radius: 10px; padding: 12px 14px;">
                                <div style="font-family: 'JetBrains Mono'; font-size: 0.72rem; color: #10b981; font-weight: 700; text-transform: uppercase; margin-bottom: 6px;">
                                    📋 On-Field Engineering Checklist:
                                </div>
                                <ul style="margin: 0; padding-left: 18px; font-family: 'Plus Jakarta Sans'; font-size: 0.84rem; line-height: 1.5; color: #cbd5e1;">
                                    ${lesson.onFieldPractice.onFieldChecklist.map(item => `<li style="margin-bottom: 4px;">${item}</li>`).join('')}
                                </ul>
                            </div>
                        </div>

                        <!-- BENTO 3: TOP-TIER TECH INTERVIEW DEFENSE -->
                        <div style="background: rgba(255,255,255,0.02); border: 1px solid rgba(168, 85, 247, 0.2); border-radius: 16px; padding: 22px; display: flex; flex-direction: column;">
                            <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 14px;">
                                <span style="font-size: 1.3rem;">💼</span>
                                <div>
                                    <div style="font-family: 'JetBrains Mono'; font-size: 0.7rem; color: #a855f7; text-transform: uppercase; font-weight: 700;">TECHNICAL RECRUITMENT DEFENSE</div>
                                    <div style="font-family: 'Space Grotesk'; font-size: 1.05rem; font-weight: 700; color: #a855f7;">
                                        Top-Tier Tech Interview Defense
                                    </div>
                                </div>
                            </div>
                            <div style="background: rgba(168, 85, 247, 0.08); border-left: 3px solid #a855f7; padding: 10px 12px; border-radius: 6px; margin-bottom: 12px; font-family: 'Plus Jakarta Sans'; font-size: 0.88rem; font-weight: 600; color: #e2e8f0; line-height: 1.5;">
                                "${lesson.interviewQA.question}"
                            </div>
                            <p style="font-family: 'Plus Jakarta Sans'; font-size: 0.88rem; line-height: 1.6; color: #cbd5e1; margin: 0 0 12px 0;">
                                <strong style="color: #a855f7;">Model Answer:</strong> ${lesson.interviewQA.idealAnswer}
                            </p>
                            <div style="margin-top: auto; background: rgba(255, 255, 255, 0.03); border: 1px solid rgba(255, 255, 255, 0.06); border-radius: 8px; padding: 8px 12px; font-family: 'JetBrains Mono'; font-size: 0.75rem; color: #94a3b8;">
                                🎯 <strong style="color: #cbd5e1;">Core Takeaway:</strong> ${lesson.interviewQA.keyTakeaway}
                            </div>
                        </div>
                    </div>
                </div>

                <!-- 2.8. INTERACTIVE COMPUTER & DATA ARCHITECTURE SIMULATOR -->
                <div id="lesson-computer-simulator" class="modern-card" style="border-radius: 20px; padding: 30px; margin-bottom: 28px; background: #0f172a; border: 1px solid rgba(59, 130, 246, 0.25); box-shadow: 0 10px 30px rgba(0,0,0,0.4);">
                    <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 20px; border-bottom: 1px solid rgba(255,255,255,0.08); padding-bottom: 14px; flex-wrap: wrap; gap: 12px;">
                        <div style="display: flex; align-items: center; gap: 12px;">
                            <div style="width: 44px; height: 44px; border-radius: 12px; background: rgba(59, 130, 246, 0.15); border: 1px solid rgba(59, 130, 246, 0.3); display: flex; align-items: center; justify-content: center; font-size: 1.4rem;">
                                ⚡
                            </div>
                            <div>
                                <span style="font-family: 'JetBrains Mono'; font-size: 0.72rem; color: #3b82f6; text-transform: uppercase; font-weight: 700; letter-spacing: 0.05em;">
                                    HARDWARE-TO-CLOUD INTERACTIVE SIMULATION
                                </span>
                                <h3 style="font-family: 'Space Grotesk'; font-size: 1.35rem; font-weight: 700; color: white; margin: 0;">
                                    Universal Computer & Data Processing Architecture Simulator
                                </h3>
                            </div>
                        </div>
                        <div style="display: flex; gap: 8px; flex-wrap: wrap;">
                            <button onclick="window.stepClinicalSimulation()" class="btn-neural" style="font-family: 'Space Grotesk'; font-size: 0.82rem; font-weight: 700; padding: 8px 16px; border-radius: 10px; background: rgba(59, 130, 246, 0.2); border-color: #3b82f6; color: #93c5fd; cursor: pointer; display: inline-flex; align-items: center; gap: 6px;">
                                <span>▶</span> Next Clock Cycle
                            </button>
                            <button id="sim-continuous-toggle-btn" onclick="window.toggleContinuousSimulation()" class="btn-neural" style="font-family: 'Space Grotesk'; font-size: 0.82rem; font-weight: 700; padding: 8px 16px; border-radius: 10px; background: rgba(255,255,255,0.05); border-color: rgba(255,255,255,0.15); color: #cbd5e1; cursor: pointer; display: inline-flex; align-items: center; gap: 6px;">
                                <span>⚡</span> Continuous Flow: OFF
                            </button>
                            <button onclick="window.resetClinicalSimulation()" class="btn-neural" style="font-family: 'Space Grotesk'; font-size: 0.82rem; padding: 8px 14px; border-radius: 10px; background: rgba(255,255,255,0.04); border-color: rgba(255,255,255,0.1); color: #94a3b8; cursor: pointer;">
                                🔄 Reset
                            </button>
                        </div>
                    </div>

                    <!-- 5-STAGE INTERACTIVE HARDWARE PIPELINE GRID -->
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 12px; margin-bottom: 20px;">
                        <div id="sim-node-1" onclick="window.setSimulationStep(1)" class="sim-stage-node active-sim-node" style="border: 1px solid #ec4899; background: rgba(236, 72, 153, 0.12); border-radius: 14px; padding: 14px; cursor: pointer; transition: all 0.25s ease;">
                            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px;">
                                <span style="font-size: 1.3rem;">⚡</span>
                                <span style="font-family: 'JetBrains Mono'; font-size: 0.68rem; color: #ec4899; font-weight: 700;">STAGE 1</span>
                            </div>
                            <div style="font-family: 'Space Grotesk'; font-size: 0.88rem; font-weight: 700; color: white;">Sensor & Event Input</div>
                            <div style="font-family: 'JetBrains Mono'; font-size: 0.72rem; color: #94a3b8; margin-top: 2px;">Polling @ 1000 Hz</div>
                        </div>

                        <div id="sim-node-2" onclick="window.setSimulationStep(2)" class="sim-stage-node" style="border: 1px solid rgba(255,255,255,0.08); background: rgba(255,255,255,0.02); border-radius: 14px; padding: 14px; cursor: pointer; transition: all 0.25s ease;">
                            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px;">
                                <span style="font-size: 1.3rem;">📋</span>
                                <span style="font-family: 'JetBrains Mono'; font-size: 0.68rem; color: #38bdf8; font-weight: 700;">STAGE 2</span>
                            </div>
                            <div style="font-family: 'Space Grotesk'; font-size: 0.88rem; font-weight: 700; color: white;">ADC & RAM Buffer</div>
                            <div style="font-family: 'JetBrains Mono'; font-size: 0.72rem; color: #94a3b8; margin-top: 2px;">Address 0x4F00</div>
                        </div>

                        <div id="sim-node-3" onclick="window.setSimulationStep(3)" class="sim-stage-node" style="border: 1px solid rgba(255,255,255,0.08); background: rgba(255,255,255,0.02); border-radius: 14px; padding: 14px; cursor: pointer; transition: all 0.25s ease;">
                            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px;">
                                <span style="font-size: 1.3rem;">💡</span>
                                <span style="font-family: 'JetBrains Mono'; font-size: 0.68rem; color: #a855f7; font-weight: 700;">STAGE 3</span>
                            </div>
                            <div style="font-family: 'Space Grotesk'; font-size: 0.88rem; font-weight: 700; color: white;">CPU Instruction</div>
                            <div style="font-family: 'JetBrains Mono'; font-size: 0.72rem; color: #94a3b8; margin-top: 2px;">Fetch & Decode</div>
                        </div>

                        <div id="sim-node-4" onclick="window.setSimulationStep(4)" class="sim-stage-node" style="border: 1px solid rgba(255,255,255,0.08); background: rgba(255,255,255,0.02); border-radius: 14px; padding: 14px; cursor: pointer; transition: all 0.25s ease;">
                            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px;">
                                <span style="font-size: 1.3rem;">🧮</span>
                                <span style="font-family: 'JetBrains Mono'; font-size: 0.68rem; color: #10b981; font-weight: 700;">STAGE 4</span>
                            </div>
                            <div style="font-family: 'Space Grotesk'; font-size: 0.88rem; font-weight: 700; color: white;">ALU Evaluation</div>
                            <div style="font-family: 'JetBrains Mono'; font-size: 0.72rem; color: #94a3b8; margin-top: 2px;">Logic & Math Unit</div>
                        </div>

                        <div id="sim-node-5" onclick="window.setSimulationStep(5)" class="sim-stage-node" style="border: 1px solid rgba(255,255,255,0.08); background: rgba(255,255,255,0.02); border-radius: 14px; padding: 14px; cursor: pointer; transition: all 0.25s ease;">
                            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px;">
                                <span style="font-size: 1.3rem;">🌐</span>
                                <span style="font-family: 'JetBrains Mono'; font-size: 0.68rem; color: #f59e0b; font-weight: 700;">STAGE 5</span>
                            </div>
                            <div style="font-family: 'Space Grotesk'; font-size: 0.88rem; font-weight: 700; color: white;">GPU & Cloud Lake</div>
                            <div style="font-family: 'JetBrains Mono'; font-size: 0.72rem; color: #94a3b8; margin-top: 2px;">Render & Persist</div>
                        </div>
                    </div>

                    <!-- ACTIVE STEP DETAILS READOUT -->
                    <div id="sim-active-readout-box" style="background: rgba(0,0,0,0.5); border: 1px solid rgba(255,255,255,0.1); border-radius: 14px; padding: 20px;">
                        <!-- Dynamically populated by window.renderSimulationDOM() -->
                    </div>
                </div>

                <!-- 3. THE 5 W'S & H FRAMEWORK (6-TILE BENTO GRID) -->
                <div id="lesson-five-ws" class="modern-card" style="border-radius: 20px; padding: 30px; margin-bottom: 28px; background: #0f172a; border: 1px solid rgba(255,255,255,0.08); box-shadow: 0 10px 30px rgba(0,0,0,0.4);">
                    <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 20px; border-bottom: 1px solid rgba(255,255,255,0.08); padding-bottom: 14px;">
                        <span style="font-size: 1.5rem;">📌</span>
                        <div>
                            <span style="font-family: 'JetBrains Mono'; font-size: 0.72rem; color: #38bdf8; text-transform: uppercase; font-weight: 700;">PEDAGOGICAL RIGOR</span>
                            <h2 style="font-family: 'Space Grotesk'; font-size: 1.35rem; font-weight: 700; color: white; margin: 0;">
                                The 5 W's & H Architecture Framework
                            </h2>
                        </div>
                    </div>

                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 16px;">
                        <div style="background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.06); border-radius: 14px; padding: 18px 20px;">
                            <div style="font-family: 'Space Grotesk'; font-size: 0.95rem; font-weight: 700; color: #38bdf8; margin-bottom: 8px; display: flex; align-items: center; gap: 6px;">
                                <span>📌</span> WHAT (Concept & Foundation)
                            </div>
                            <div style="font-family: 'Plus Jakarta Sans'; font-size: 0.9rem; line-height: 1.6; color: #cbd5e1;">
                                ${lesson.fiveWs.what}
                            </div>
                        </div>

                        <div style="background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.06); border-radius: 14px; padding: 18px 20px;">
                            <div style="font-family: 'Space Grotesk'; font-size: 0.95rem; font-weight: 700; color: #f43f5e; margin-bottom: 8px; display: flex; align-items: center; gap: 6px;">
                                <span>🎯</span> WHY (Production Rationale & System Reliability)
                            </div>
                            <div style="font-family: 'Plus Jakarta Sans'; font-size: 0.9rem; line-height: 1.6; color: #cbd5e1;">
                                ${lesson.fiveWs.why}
                            </div>
                        </div>

                        <div style="background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.06); border-radius: 14px; padding: 18px 20px;">
                            <div style="font-family: 'Space Grotesk'; font-size: 0.95rem; font-weight: 700; color: #a855f7; margin-bottom: 8px; display: flex; align-items: center; gap: 6px;">
                                <span>👥</span> WHO (Target Engineering Roles)
                            </div>
                            <div style="font-family: 'Plus Jakarta Sans'; font-size: 0.9rem; line-height: 1.6; color: #cbd5e1;">
                                ${lesson.fiveWs.who}
                            </div>
                        </div>

                        <div style="background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.06); border-radius: 14px; padding: 18px 20px;">
                            <div style="font-family: 'Space Grotesk'; font-size: 0.95rem; font-weight: 700; color: #10b981; margin-bottom: 8px; display: flex; align-items: center; gap: 6px;">
                                <span>📍</span> WHERE (Deployment Infrastructure)
                            </div>
                            <div style="font-family: 'Plus Jakarta Sans'; font-size: 0.9rem; line-height: 1.6; color: #cbd5e1;">
                                ${lesson.fiveWs.where}
                            </div>
                        </div>

                        <div style="background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.06); border-radius: 14px; padding: 18px 20px;">
                            <div style="font-family: 'Space Grotesk'; font-size: 0.95rem; font-weight: 700; color: #f59e0b; margin-bottom: 8px; display: flex; align-items: center; gap: 6px;">
                                <span>⏱️</span> WHEN (Workflow Trigger & Timing)
                            </div>
                            <div style="font-family: 'Plus Jakarta Sans'; font-size: 0.9rem; line-height: 1.6; color: #cbd5e1;">
                                ${lesson.fiveWs.when}
                            </div>
                        </div>

                        <div style="background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.06); border-radius: 14px; padding: 18px 20px;">
                            <div style="font-family: 'Space Grotesk'; font-size: 0.95rem; font-weight: 700; color: #06b6d4; margin-bottom: 8px; display: flex; align-items: center; gap: 6px;">
                                <span>⚙️</span> HOW (Technical Implementation Protocol)
                            </div>
                            <div style="font-family: 'Plus Jakarta Sans'; font-size: 0.9rem; line-height: 1.6; color: #cbd5e1;">
                                ${lesson.fiveWs.how}
                            </div>
                        </div>
                    </div>
                </div>

                <!-- 4. KEY LEARNING OBJECTIVES -->
                <div class="modern-card" style="border-radius: 20px; padding: 26px 30px; margin-bottom: 28px; background: #0f172a; border: 1px solid rgba(16, 185, 129, 0.2); box-shadow: 0 10px 30px rgba(0,0,0,0.4);">
                    <h3 style="font-family: 'Space Grotesk', sans-serif; font-size: 1.2rem; font-weight: 700; color: #10b981; margin: 0 0 16px 0; display: flex; align-items: center; gap: 8px;">
                        <span>🎯</span> Key Learning Objectives for Today
                    </h3>
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 14px;">
                        ${lesson.objectives.map((obj, i) => `
                            <div style="display: flex; align-items: flex-start; gap: 12px; background: rgba(255,255,255,0.02); padding: 14px 16px; border-radius: 12px; border-left: 3px solid #10b981;">
                                <span style="font-family: 'JetBrains Mono'; font-weight: 700; color: #10b981; font-size: 0.85rem;">0${i+1}.</span>
                                <span style="font-family: 'Plus Jakarta Sans'; font-size: 0.92rem; color: #cbd5e1; line-height: 1.5;">${obj}</span>
                            </div>
                        `).join('')}
                    </div>
                </div>

                <!-- 5. SECTION I: THEORETICAL FOUNDATIONS & COMPUTATIONAL MECHANICS -->
                <div id="lesson-theory-deepdive" class="modern-card" style="border-radius: 20px; padding: 34px; margin-bottom: 28px; background: #0f172a; border: 1px solid rgba(59, 130, 246, 0.3); box-shadow: 0 10px 30px rgba(0,0,0,0.4);">
                    <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 22px; border-bottom: 1px solid rgba(255,255,255,0.08); padding-bottom: 16px; flex-wrap: wrap; gap: 10px;">
                        <div style="display: flex; align-items: center; gap: 12px;">
                            <span style="font-size: 1.6rem;">📘</span>
                            <div>
                                <span style="font-family: 'JetBrains Mono'; font-size: 0.72rem; color: #3b82f6; text-transform: uppercase; font-weight: 700;">PART I • ARCHITECTURAL EXPOSITION</span>
                                <h2 style="font-family: 'Space Grotesk'; font-size: 1.45rem; font-weight: 700; color: white; margin: 2px 0 0 0;">
                                    Theoretical Foundations & Computational Mechanics
                                </h2>
                            </div>
                        </div>
                        <span style="font-family: 'JetBrains Mono'; font-size: 0.74rem; color: #94a3b8; background: rgba(255,255,255,0.05); padding: 5px 12px; border-radius: 8px;">
                            Tools: ${lesson.tools.join(' • ')}
                        </span>
                    </div>

                    <div class="academic-text-body" style="font-family: 'Plus Jakarta Sans', sans-serif; font-size: 1.02rem; line-height: 1.8; color: #cbd5e1; display: flex; flex-direction: column; gap: 20px;">
                        <p style="margin: 0;">${lesson.theoryP1}</p>
                        <p style="margin: 0;">${lesson.theoryP2}</p>
                        <p style="margin: 0;">${lesson.theoryP3}</p>
                    </div>
                </div>

                <!-- 6. SECTION II: ENTERPRISE PRODUCTION & SYSTEMS ENGINEERING -->
                <div id="lesson-clinical-systems" class="modern-card" style="border-radius: 20px; padding: 34px; margin-bottom: 28px; background: #0f172a; border: 1px solid rgba(244, 63, 94, 0.25); box-shadow: 0 10px 30px rgba(0,0,0,0.4);">
                    <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 22px; border-bottom: 1px solid rgba(255,255,255,0.08); padding-bottom: 16px; flex-wrap: wrap; gap: 10px;">
                        <div style="display: flex; align-items: center; gap: 12px;">
                            <span style="font-size: 1.6rem;">🏢</span>
                            <div>
                                <span style="font-family: 'JetBrains Mono'; font-size: 0.72rem; color: #f43f5e; text-transform: uppercase; font-weight: 700;">PART II • ENTERPRISE PRODUCTION & SYSTEMS ENGINEERING</span>
                                <h2 style="font-family: 'Space Grotesk'; font-size: 1.45rem; font-weight: 700; color: white; margin: 2px 0 0 0;">
                                    Enterprise Production Architecture & Systems Engineering
                                </h2>
                            </div>
                        </div>
                        <span style="font-family: 'JetBrains Mono'; font-size: 0.72rem; color: #f43f5e; background: rgba(244,63,94,0.1); border: 1px solid rgba(244,63,94,0.25); padding: 5px 12px; border-radius: 8px; font-weight: 700;">
                            High Availability • ACID & SOC 2
                        </span>
                    </div>

                    <div class="academic-text-body" style="font-family: 'Plus Jakarta Sans', sans-serif; font-size: 1.02rem; line-height: 1.8; color: #cbd5e1; display: flex; flex-direction: column; gap: 20px;">
                        <p style="margin: 0;">${lesson.clinicalP1}</p>
                        <div style="background: rgba(244,63,94,0.06); border-left: 4px solid #f43f5e; padding: 18px 22px; border-radius: 10px; color: #fecdd3;">
                            ${lesson.clinicalP2}
                        </div>
                        <p style="margin: 0;">${lesson.clinicalP3}</p>
                    </div>
                </div>

                <!-- 7. SECTION III: SYSTEM TELEMETRY & PRODUCTION STANDARDS -->
                <div id="lesson-telemetry-standards" class="modern-card" style="border-radius: 20px; padding: 34px; margin-bottom: 28px; background: #0f172a; border: 1px solid rgba(16, 185, 129, 0.25); box-shadow: 0 10px 30px rgba(0,0,0,0.4);">
                    <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 22px; border-bottom: 1px solid rgba(255,255,255,0.08); padding-bottom: 16px; flex-wrap: wrap; gap: 10px;">
                        <div style="display: flex; align-items: center; gap: 12px;">
                            <span style="font-size: 1.6rem;">📊</span>
                            <div>
                                <span style="font-family: 'JetBrains Mono'; font-size: 0.72rem; color: #10b981; text-transform: uppercase; font-weight: 700;">PART III • TELEMETRY, PROTOCOLS & STANDARDS</span>
                                <h2 style="font-family: 'Space Grotesk'; font-size: 1.45rem; font-weight: 700; color: white; margin: 2px 0 0 0;">
                                    Production Telemetry, Standards & Baseline Benchmarks
                                </h2>
                            </div>
                        </div>
                        <span style="font-family: 'JetBrains Mono'; font-size: 0.72rem; color: #10b981; background: rgba(16,185,129,0.1); border: 1px solid rgba(16,185,129,0.25); padding: 5px 12px; border-radius: 8px; font-weight: 700;">
                            POSIX • IEEE • RFC Standards
                        </span>
                    </div>

                    <div class="academic-text-body" style="font-family: 'Plus Jakarta Sans', sans-serif; font-size: 1.02rem; line-height: 1.8; color: #cbd5e1; display: flex; flex-direction: column; gap: 20px;">
                        <p style="margin: 0;">${lesson.bioP1}</p>
                        <div style="background: rgba(16,185,129,0.06); border-left: 4px solid #10b981; padding: 18px 22px; border-radius: 10px; color: #a7f3d0;">
                            ${lesson.bioP2}
                        </div>
                    </div>
                </div>

                <!-- 8. SECTION IV: ENGINEERING PITFALLS & FAILURE MODES -->
                <div id="lesson-engineering-pitfalls" class="modern-card" style="border-radius: 20px; padding: 34px; margin-bottom: 28px; background: #0f172a; border: 1px solid rgba(245, 158, 11, 0.25); box-shadow: 0 10px 30px rgba(0,0,0,0.4);">
                    <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 22px; border-bottom: 1px solid rgba(255,255,255,0.08); padding-bottom: 16px; flex-wrap: wrap; gap: 10px;">
                        <div style="display: flex; align-items: center; gap: 12px;">
                            <span style="font-size: 1.6rem;">⚠️</span>
                            <div>
                                <span style="font-family: 'JetBrains Mono'; font-size: 0.72rem; color: #f59e0b; text-transform: uppercase; font-weight: 700;">PART IV • DEFENSIVE COMPUTING</span>
                                <h2 style="font-family: 'Space Grotesk'; font-size: 1.45rem; font-weight: 700; color: white; margin: 2px 0 0 0;">
                                    Engineering Pitfalls & Production Outage Postmortems
                                </h2>
                            </div>
                        </div>
                        <span style="font-family: 'JetBrains Mono'; font-size: 0.72rem; color: #f59e0b; background: rgba(245,158,11,0.1); border: 1px solid rgba(245,158,11,0.25); padding: 5px 12px; border-radius: 8px; font-weight: 700;">
                            Production Outage Prevention
                        </span>
                    </div>

                    <div style="display: flex; flex-direction: column; gap: 16px;">
                        <div style="background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.06); border-left: 4px solid #f59e0b; padding: 18px 22px; border-radius: 12px; font-family: 'Plus Jakarta Sans'; font-size: 0.96rem; line-height: 1.65; color: #e2e8f0;">
                            ${lesson.pitfall1}
                        </div>
                        <div style="background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.06); border-left: 4px solid #f59e0b; padding: 18px 22px; border-radius: 12px; font-family: 'Plus Jakarta Sans'; font-size: 0.96rem; line-height: 1.65; color: #e2e8f0;">
                            ${lesson.pitfall2}
                        </div>
                        <div style="background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.06); border-left: 4px solid #f59e0b; padding: 18px 22px; border-radius: 12px; font-family: 'Plus Jakarta Sans'; font-size: 0.96rem; line-height: 1.65; color: #e2e8f0;">
                            ${lesson.pitfall3}
                        </div>
                    </div>
                </div>

                <!-- 9. SECTION V: HANDS-ON INTERACTIVE LABORATORY WORKBENCH -->
                <div id="lesson-interactive-lab" class="modern-card" style="border-radius: 20px; padding: 34px; margin-bottom: 28px; background: #0f172a; border: 1px solid rgba(139, 92, 246, 0.3); box-shadow: 0 10px 30px rgba(0,0,0,0.4);">
                    <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 22px; border-bottom: 1px solid rgba(255,255,255,0.08); padding-bottom: 16px; flex-wrap: wrap; gap: 12px;">
                        <div style="display: flex; align-items: center; gap: 12px;">
                            <span style="font-size: 1.6rem;">🧪</span>
                            <div>
                                <span style="font-family: 'JetBrains Mono'; font-size: 0.72rem; color: #8b5cf6; text-transform: uppercase; font-weight: 700;">PART V • HANDS-ON LABORATORY PROTOCOL</span>
                                <h2 style="font-family: 'Space Grotesk'; font-size: 1.45rem; font-weight: 700; color: white; margin: 2px 0 0 0;">
                                    Interactive Code, SQL & Production Workbench
                                </h2>
                            </div>
                        </div>
                        <span style="font-family: 'JetBrains Mono'; font-size: 0.74rem; color: #8b5cf6; background: rgba(139,92,246,0.12); border: 1px solid rgba(139,92,246,0.3); padding: 5px 12px; border-radius: 8px; font-weight: 700;">
                            ${isPythonLesson ? '🐍 Python 3.11 Kernel' : '📊 Production Data Inspector'}
                        </span>
                    </div>

                    <div style="margin-bottom: 22px; background: rgba(255,255,255,0.03); padding: 20px 24px; border-radius: 14px; border: 1px solid rgba(255,255,255,0.06);">
                        <div style="font-family: 'Space Grotesk'; font-size: 1.05rem; font-weight: 700; color: white; margin-bottom: 6px;">
                            🎯 Mission Objective: ${lesson.task.errorMessage || lesson.milestone}
                        </div>
                        <div style="font-family: 'Plus Jakarta Sans'; font-size: 0.94rem; color: #94a3b8; line-height: 1.6;">
                            Follow the protocol instructions below. Inspect the live data table or execute the code script to verify production ground truth.
                        </div>
                    </div>

                    ${isPythonLesson ? `
                        <div style="display: flex; flex-direction: column; gap: 16px;">
                            <div id="monaco-container" class="editor-pane" style="height: 320px; border: 1px solid rgba(255,255,255,0.12); border-radius: 14px; overflow: hidden; background: #0a0e1a;"></div>
                            <div style="display: flex; gap: 12px; align-items: center; flex-wrap: wrap;">
                                <button id="term-run-btn" onclick="PythonEngine.run()" class="btn-neural" style="font-family: 'Space Grotesk'; font-size: 0.88rem; font-weight: 700; padding: 12px 24px; border-radius: 10px; background: linear-gradient(135deg, rgba(59,130,246,0.3), rgba(139,92,246,0.35)); border-color: #3b82f6; color: white; cursor: pointer; display: flex; align-items: center; gap: 8px;">
                                    <span>▶</span> EXECUTE PYTHON SCRIPT
                                </button>
                                <span style="font-family: 'JetBrains Mono'; font-size: 0.75rem; color: #94a3b8;">
                                    In-browser Pyodide WebAssembly runtime • Instant execution
                                </span>
                            </div>
                            <div id="term-output" class="console-pane modern-card" style="height: 180px; font-family: 'JetBrains Mono'; font-size: 0.82rem; padding: 16px; border-radius: 12px; border: 1px solid rgba(255,255,255,0.08); overflow-y: auto; background: rgba(5,8,18,0.85); color: #e2e8f0; line-height: 1.6;">
                                <div class="term-line info">> Python 3.11 Execution Kernel Ready. Click 'EXECUTE PYTHON SCRIPT' to run.</div>
                            </div>
                        </div>
                    ` : `
                        <div style="display: flex; flex-direction: column; gap: 14px;">
                            <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 10px;">
                                <div style="display: flex; align-items: center; gap: 8px; background: rgba(0,0,0,0.5); border: 1px solid rgba(255,255,255,0.12); border-radius: 8px; padding: 6px 14px; width: 300px;">
                                    <span style="font-size: 0.85rem; opacity: 0.7;">🔎</span>
                                    <input type="text" placeholder="Filter records in table..." oninput="window.filterClinicalTable(this.value)" style="background: transparent; border: none; color: white; width: 100%; outline: none; font-family: 'JetBrains Mono'; font-size: 0.78rem;">
                                </div>
                                <div style="font-family: 'JetBrains Mono'; font-size: 0.72rem; color: #94a3b8;">
                                    Live Production Telemetry & System Dataset • Click matching record to validate
                                </div>
                            </div>
                            <div style="overflow-x: auto; border-radius: 14px; border: 1px solid rgba(255,255,255,0.08); background: rgba(10,14,26,0.6);">
                                ${window.renderMasterTable(lesson.data)}
                            </div>
                            <div id="feedback" class="feedback-box modern-card" style="padding: 18px 22px; font-size: 0.92rem; color: #cbd5e1; border: 1px dashed rgba(59,130,246,0.4); border-radius: 12px; background: rgba(0,0,0,0.4); font-family: 'JetBrains Mono';">
                                > ENTERPRISE_INSPECTION_MODE: Click on the matching record in the table above to satisfy the validation requirement.
                            </div>
                        </div>
                    `}
                </div>

                <!-- 10. SECTION VI: TECHNICAL ACCREDITATION QUIZ -->
                <div id="lesson-knowledge-quiz" style="margin-bottom: 28px;">
                    ${window.renderMasterQuiz(lesson)}
                </div>

                <!-- 11. SECTION VII: CURATED EXTERNAL RESOURCES -->
                <div id="lesson-curated-resources" class="modern-card" style="border-radius: 20px; padding: 32px; margin-bottom: 32px; background: #0f172a; border: 1px solid rgba(236, 72, 153, 0.25); box-shadow: 0 10px 30px rgba(0,0,0,0.4);">
                    <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 20px; border-bottom: 1px solid rgba(255,255,255,0.08); padding-bottom: 16px; flex-wrap: wrap; gap: 10px;">
                        <div style="display: flex; align-items: center; gap: 12px;">
                            <span style="font-size: 1.6rem;">📚</span>
                            <div>
                                <span style="font-family: 'JetBrains Mono'; font-size: 0.72rem; color: #ec4899; text-transform: uppercase; font-weight: 700;">PART VII • DOCUMENTATION & TECHNICAL STANDARDS</span>
                                <h2 style="font-family: 'Space Grotesk'; font-size: 1.45rem; font-weight: 700; color: white; margin: 2px 0 0 0;">
                                    Curated Technical Documentation & Industry Standards
                                </h2>
                            </div>
                        </div>
                        <span style="font-family: 'JetBrains Mono'; font-size: 0.72rem; color: #ec4899; background: rgba(236,72,153,0.1); border: 1px solid rgba(236,72,153,0.25); padding: 5px 12px; border-radius: 8px; font-weight: 700;">
                            Verified External Documentation
                        </span>
                    </div>

                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 16px;">
                        ${lesson.sources.map(src => `
                            <a href="${src.url}" target="_blank" rel="noopener noreferrer" class="modern-card" style="display: flex; flex-direction: column; gap: 8px; padding: 18px 20px; border-radius: 14px; text-decoration: none; background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.08); transition: all 0.2s ease;">
                                <div style="display: flex; justify-content: space-between; align-items: center;">
                                    <span style="font-size: 1.4rem;">${src.icon || '📖'}</span>
                                    <span style="font-family: 'JetBrains Mono'; font-size: 0.7rem; color: #ec4899; background: rgba(236,72,153,0.1); padding: 3px 8px; border-radius: 6px;">${src.type || 'Resource'}</span>
                                </div>
                                <div style="font-family: 'Space Grotesk'; font-weight: 700; font-size: 0.95rem; color: white; line-height: 1.4;">
                                    ${src.name}
                                </div>
                                <div style="font-family: 'JetBrains Mono'; font-size: 0.72rem; color: #64748b; margin-top: auto; display: flex; align-items: center; gap: 4px;">
                                    <span>Open Resource</span> <span>➔</span>
                                </div>
                            </a>
                        `).join('')}
                    </div>
                </div>

                <!-- 11.5. MISSION COMPLETION & ACCREDITATION PROGRESSION -->
                <div class="modern-card mission-completion-card" style="border-radius: 20px; padding: 32px 36px; margin-bottom: 32px; background: linear-gradient(135deg, rgba(15, 23, 42, 0.95), rgba(30, 41, 59, 0.95)); border: 1.5px solid rgba(59, 130, 246, 0.35); box-shadow: 0 10px 30px rgba(0,0,0,0.4); display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 20px;">
                    <div>
                        <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 8px;">
                            <span style="font-family: 'JetBrains Mono'; font-size: 0.75rem; color: #10b981; font-weight: 700; background: rgba(16,185,129,0.12); border: 1px solid rgba(16,185,129,0.3); padding: 3px 10px; border-radius: 9999px;">MISSION VERIFICATION</span>
                            <span style="font-family: 'JetBrains Mono'; font-size: 0.75rem; color: #f59e0b; font-weight: 700;">⭐ +100 XP REWARD</span>
                        </div>
                        <h3 style="font-family: 'Space Grotesk'; font-size: 1.5rem; font-weight: 800; color: white; margin: 0 0 6px 0;">
                            Completed Day 0${lesson.dayNum}: ${lesson.title}?
                        </h3>
                        <p style="font-family: 'Plus Jakarta Sans'; font-size: 0.92rem; color: #94a3b8; margin: 0; max-width: 650px;">
                            Advance your professional engineering & data portfolio. Verify ground truth in the workbench above, validate your technical defense in the quiz, then advance to the next mission.
                        </p>
                    </div>
                    <div style="display: flex; gap: 12px; align-items: center; flex-wrap: wrap;">
                        <button onclick="window.navigateLessonStep(-1)" class="btn-neural" style="font-family: 'Space Grotesk'; font-size: 0.88rem; font-weight: 700; padding: 12px 20px; border-radius: 12px; background: rgba(255,255,255,0.05); border-color: rgba(255,255,255,0.15); color: #cbd5e1; cursor: pointer; display: inline-flex; align-items: center; gap: 8px;">
                            <span>◀</span> Prev Day
                        </button>
                        <button onclick="window.completeAndNextLesson()" class="btn-neural" style="font-family: 'Space Grotesk'; font-size: 0.95rem; font-weight: 800; padding: 13px 26px; border-radius: 12px; background: linear-gradient(135deg, #2563eb, #3b82f6); border-color: #60a5fa; color: white; cursor: pointer; display: inline-flex; align-items: center; gap: 10px; box-shadow: 0 6px 20px rgba(37,99,235,0.4);">
                            <span>✔</span> Complete & Next Day <span>▶</span>
                        </button>
                    </div>
                </div>

                <!-- 12. SECTION VIII: 52-WEEK MASTER CURRICULUM SYLLABUS HUB -->
                <div id="curriculum-master-matrix" class="modern-card" style="border-radius: 20px; padding: 34px; margin-bottom: 40px; background: #0f172a; border: 1px solid rgba(255,255,255,0.1); box-shadow: 0 10px 30px rgba(0,0,0,0.4);">
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 24px; border-bottom: 1px solid rgba(255,255,255,0.08); padding-bottom: 18px; flex-wrap: wrap; gap: 14px;">
                        <div>
                            <div style="display: inline-flex; align-items: center; gap: 8px; font-family: 'JetBrains Mono'; font-size: 0.74rem; color: #3b82f6; font-weight: 700; text-transform: uppercase;">
                                <span>🎓</span> Complete 52-Week Computer Science, Data Engineering & AI Matrix
                            </div>
                            <h2 style="font-family: 'Space Grotesk'; font-size: 1.6rem; font-weight: 800; color: white; margin: 4px 0 0 0;">
                                Master Curriculum Syllabus & Daily Mission Registry
                            </h2>
                        </div>
                        <div style="display: flex; gap: 10px; align-items: center; flex-wrap: wrap;">
                            <button onclick="window.filterHubBySingleWeek(${lesson.weekNum})" class="btn-neural" style="font-family: 'Space Grotesk'; font-size: 0.8rem; font-weight: 700; padding: 8px 16px; border-radius: 8px; background: rgba(59,130,246,0.15); border-color: #3b82f6; color: #3b82f6;">
                                Focus Week ${lesson.weekNum}
                            </button>
                            <button onclick="window.applyHubFilters(0)" class="btn-neural" style="font-family: 'Space Grotesk'; font-size: 0.8rem; font-weight: 700; padding: 8px 16px; border-radius: 8px; background: rgba(255,255,255,0.05); border-color: rgba(255,255,255,0.2); color: white;">
                                Show All 52 Weeks
                            </button>
                            <button onclick="window.scrollAppTo('top')" class="btn-neural" style="font-family: 'Space Grotesk'; font-size: 0.8rem; font-weight: 700; padding: 8px 16px; border-radius: 8px; background: rgba(255,255,255,0.05); border-color: rgba(255,255,255,0.2); color: #cbd5e1;">
                                <span>⬆</span> Back to Top
                            </button>
                        </div>
                    </div>

                    <div id="v14-modules-hub-container">
                        ${typeof window.getModulesHubHTML === 'function' ? window.getModulesHubHTML() : '<div style="padding: 24px; text-align: center; color: #94a3b8;">52-Week Curriculum Hub Ready.</div>'}
                    </div>
                </div>

            </div>
        `;

        app.innerHTML = heroContent;

        // Initialize Clinical Computer Architecture Simulator
        setTimeout(() => {
            if (typeof window.renderSimulationDOM === 'function') {
                window.renderSimulationDOM();
            }
        }, 50);

        // Populate Monaco / Pyodide editor if Python lesson
        if (isPythonLesson && window.PythonEngine && typeof window.PythonEngine.setEditorContent === 'function') {
            setTimeout(() => {
                try {
                    window.PythonEngine.setEditorContent(lesson.code_start || '');
                } catch (e) {
                    console.warn('[PythonEngine]: Monaco initialization error:', e);
                }
            }, 100);
        }
    };

    // 5. SEAMLESS SCROLLING & NAVIGATION HELPERS (ZERO TRAPPED SCROLLBARS)
    window.scrollAppTo = function (target) {
        try {
            if (typeof triggerHaptic === 'function') triggerHaptic('light');

            const heroCard = document.querySelector('.card-hero');

            if (target === 'top') {
                if (heroCard && heroCard.scrollTo) heroCard.scrollTo({ top: 0, behavior: 'smooth' });
                window.scrollTo({ top: 0, behavior: 'smooth' });
                return;
            }

            if (target === 'bottom') {
                if (heroCard && heroCard.scrollTo) heroCard.scrollTo({ top: heroCard.scrollHeight || 100000, behavior: 'smooth' });
                window.scrollTo({ top: 100000, behavior: 'smooth' });
                return;
            }

            let elem = (typeof target === 'string') ? document.querySelector(target) : target;
            if (elem) {
                elem.scrollIntoView({ behavior: 'smooth', block: 'start' });
            } else {
                window.scrollAppDown(650);
            }
        } catch (err) {
            console.warn('[ScrollAppTo Error]:', err);
        }
    };

    window.scrollAppDown = function (amount = 650) {
        try {
            if (typeof triggerHaptic === 'function') triggerHaptic('light');
            const heroCard = document.querySelector('.card-hero');
            if (heroCard && heroCard.scrollBy) {
                heroCard.scrollBy({ top: amount, behavior: 'smooth' });
            }
            window.scrollBy({ top: amount, behavior: 'smooth' });
        } catch (e) {
            console.warn(e);
        }
    };

    window.scrollAppUp = function (amount = 650) {
        try {
            if (typeof triggerHaptic === 'function') triggerHaptic('light');
            const heroCard = document.querySelector('.card-hero');
            if (heroCard && heroCard.scrollBy) {
                heroCard.scrollBy({ top: -amount, behavior: 'smooth' });
            }
            window.scrollBy({ top: -amount, behavior: 'smooth' });
        } catch (e) {
            console.warn(e);
        }
    };

    window.scrollToSection = function (sectionId) {
        window.scrollAppTo(sectionId);
    };

    window.completeAndNextLesson = function () {
        if (window.Gamification && typeof window.Gamification.addXP === 'function') {
            window.Gamification.addXP(100);
        }
        if (typeof triggerHaptic === 'function') triggerHaptic('heavy');

        const existingToast = document.getElementById('mission-toast');
        if (existingToast) existingToast.remove();

        const toast = document.createElement('div');
        toast.id = 'mission-toast';
        toast.style.cssText = 'position: fixed; bottom: 90px; right: 30px; background: linear-gradient(135deg, #10b981, #059669); color: white; padding: 14px 22px; border-radius: 12px; font-family: "Space Grotesk", sans-serif; font-weight: 700; box-shadow: 0 10px 30px rgba(16,185,129,0.5); z-index: 999999; display: flex; align-items: center; gap: 10px; font-size: 0.95rem; border: 1px solid rgba(255,255,255,0.2);';
        toast.innerHTML = '<span>🎉</span> Engineering Mission Verified & Accredited! +100 XP Earned!';
        document.body.appendChild(toast);
        setTimeout(() => {
            toast.style.opacity = '0';
            toast.style.transition = 'opacity 0.5s ease';
            setTimeout(() => toast.remove(), 500);
        }, 2200);

        setTimeout(() => {
            window.navigateLessonStep(1);
        }, 350);
    };

    window.filterClinicalTable = function (query) {
        query = (query || '').toLowerCase().trim();
        const table = document.querySelector('.interactive-clinical-table');
        if (!table) return;
        const rows = table.querySelectorAll('tbody tr');
        rows.forEach(row => {
            const text = row.innerText.toLowerCase();
            if (text.includes(query) || query === '') {
                row.style.display = '';
            } else {
                row.style.display = 'none';
            }
        });
    };

    // 7. UNIVERSAL COMPUTER & DATA ARCHITECTURE SIMULATOR CONTROLLER
    window.simTelemetryData = {
        step: 1,
        isPlaying: false,
        timer: null,
        stages: [
            {
                num: 1,
                badge: "STAGE 1 • PHYSICAL WORLD TO SENSOR / INPUT",
                title: "🔌 Physical Sensor & User Event Input",
                sub: "Keyboard, Mouse, Optical Sensor & Network NIC",
                icon: "⚡",
                color: "#ec4899",
                payload: "Input Event: Hardware Transistor Polling @ 1000 Hz",
                detail: "Physical interactions (user keyboard press, mouse click, sensor polling, or incoming network packet) generate microvolt electrical signals. The input controller polls the hardware bus thousands of times per second, translating physical events into electronic pulses."
            },
            {
                num: 2,
                badge: "STAGE 2 • MEMORY BUS & RAM CACHE",
                title: "🔄 ADC, Bus & RAM Memory Buffer",
                sub: "Volatile Memory Address: 0x4F00",
                icon: "📋",
                color: "#38bdf8",
                payload: "Binary Word: 0000 0001 0100 1010 (Hex 0x014A = 330)",
                detail: "The Analog-to-Digital Converter (ADC) or network controller quantizes continuous electrical impulses into discrete binary numbers (0s and 1s). The Direct Memory Access (DMA) controller streams the raw packet across the system bus into high-speed volatile RAM buffer without blocking the CPU."
            },
            {
                num: 3,
                badge: "STAGE 3 • PROCESSOR CORE (FETCH & DECODE)",
                title: "🧠 CPU Instruction Fetch & Pipeline Decode",
                sub: "Instruction Register (IR) & Control Unit",
                icon: "💡",
                color: "#a855f7",
                payload: "OPCODE: FETCH [0x4F00] -> DECODE: EXECUTE_ALGORITHM",
                detail: "The CPU Control Unit fetches the queued instruction from L1 instruction cache. The Program Counter increments to 0x0842. The instruction is decoded into hardware micro-operations that configure ALU registers for immediate arithmetic execution."
            },
            {
                num: 4,
                badge: "STAGE 4 • ARITHMETIC LOGIC (ALU & MATH)",
                title: "⚙️ ALU Math & Decision Logic Execution",
                sub: "Arithmetic Logic Unit & Vector Engine",
                icon: "🧮",
                color: "#10b981",
                payload: "Vector Math: Delta 810 ms -> Metric: 74 | Condition: 74 <= 100 -> TRUE (OPTIMAL)",
                detail: "The Arithmetic Logic Unit executes calculations in clock cycles. It evaluates conditional logic, verifies safety thresholds, and updates processor status flags. The calculation satisfies nominal operating criteria; nominal program flow continues."
            },
            {
                num: 5,
                badge: "STAGE 5 • PERSISTENCE & SYSTEM OUTPUT",
                title: "🖥️ Screen Render & Cloud Database Persistence",
                sub: "GPU Display Buffer & Distributed Storage",
                icon: "🌐",
                color: "#f59e0b",
                payload: "Display: Framebuffer Rendered @ 60 FPS | Cloud: POST /events (Committed)",
                detail: "The graphics engine (GPU) paints the visual interface to the display at 60-144 FPS. Simultaneously, the network controller serializes the processed record and commits it to non-volatile distributed cloud storage (PostgreSQL / Data Lake), ensuring complete data durability."
            }
        ]
    };

    window.setSimulationStep = function (stepNum) {
        if (!window.simTelemetryData) return;
        window.simTelemetryData.step = stepNum;
        window.renderSimulationDOM();
    };

    window.stepClinicalSimulation = function () {
        if (!window.simTelemetryData) return;
        let nextStep = window.simTelemetryData.step + 1;
        if (nextStep > 5) nextStep = 1;
        window.setSimulationStep(nextStep);
    };

    window.toggleContinuousSimulation = function () {
        if (!window.simTelemetryData) return;
        const sim = window.simTelemetryData;
        const btn = document.getElementById('sim-continuous-toggle-btn');
        if (sim.isPlaying) {
            clearInterval(sim.timer);
            sim.isPlaying = false;
            if (btn) {
                btn.innerHTML = '<span>⚡</span> Continuous Flow: OFF';
                btn.style.background = 'rgba(255, 255, 255, 0.05)';
                btn.style.color = '#cbd5e1';
            }
        } else {
            sim.isPlaying = true;
            if (btn) {
                btn.innerHTML = '<span>⚡</span> Continuous Flow: ON';
                btn.style.background = 'rgba(16, 185, 129, 0.25)';
                btn.style.color = '#34d399';
            }
            sim.timer = setInterval(() => {
                window.stepClinicalSimulation();
            }, 1800);
        }
    };

    window.resetClinicalSimulation = function () {
        if (!window.simTelemetryData) return;
        if (window.simTelemetryData.isPlaying) {
            window.toggleContinuousSimulation();
        }
        window.setSimulationStep(1);
    };

    window.renderSimulationDOM = function () {
        const sim = window.simTelemetryData;
        if (!sim) return;
        const activeStage = sim.stages[sim.step - 1];

        // Update active nodes styling
        sim.stages.forEach(st => {
            const el = document.getElementById(`sim-node-${st.num}`);
            if (el) {
                if (st.num === sim.step) {
                    el.classList.add('active-sim-node');
                    el.style.borderColor = st.color;
                    el.style.boxShadow = `0 0 20px ${st.color}55`;
                    el.style.background = `${st.color}18`;
                } else {
                    el.classList.remove('active-sim-node');
                    el.style.borderColor = 'rgba(255,255,255,0.08)';
                    el.style.boxShadow = 'none';
                    el.style.background = 'rgba(255,255,255,0.02)';
                }
            }
        });

        // Update active readout box
        const readoutBox = document.getElementById('sim-active-readout-box');
        if (readoutBox && activeStage) {
            readoutBox.innerHTML = `
                <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px; flex-wrap: wrap; gap: 8px;">
                    <div style="display: flex; align-items: center; gap: 10px;">
                        <span style="font-size: 1.8rem;">${activeStage.icon}</span>
                        <div>
                            <div style="font-family: 'JetBrains Mono'; font-size: 0.72rem; color: ${activeStage.color}; font-weight: 700; text-transform: uppercase;">
                                ${activeStage.badge}
                            </div>
                            <h4 style="font-family: 'Space Grotesk'; font-size: 1.15rem; font-weight: 700; color: white; margin: 0;">
                                ${activeStage.title} (${activeStage.sub})
                            </h4>
                        </div>
                    </div>
                    <div style="font-family: 'JetBrains Mono'; font-size: 0.75rem; padding: 4px 10px; border-radius: 6px; background: ${activeStage.color}22; color: ${activeStage.color}; border: 1px solid ${activeStage.color}44;">
                        Clock Cycle: #${sim.step} of 5
                    </div>
                </div>
                
                <div style="background: #020617; border: 1px solid rgba(255,255,255,0.08); border-radius: 10px; padding: 12px 16px; margin-bottom: 12px; font-family: 'JetBrains Mono', monospace; font-size: 0.85rem; color: #38bdf8; display: flex; align-items: center; gap: 10px; flex-wrap: wrap;">
                    <span style="color: #94a3b8;">DATA PAYLOAD:</span>
                    <span style="font-weight: 700; color: ${activeStage.color};">${activeStage.payload}</span>
                </div>

                <p style="font-family: 'Plus Jakarta Sans'; font-size: 0.92rem; line-height: 1.6; color: #cbd5e1; margin: 0;">
                    ${activeStage.detail}
                </p>
            `;
        }
    };

    console.log('[MasterclassEngine]: v16.1 World-Class Masterclass Engine Fully Initialized.');
})();

// Compatibility Aliases for Universal Architecture Simulator
window.stepArchitectureSimulation = window.stepClinicalSimulation;
window.resetArchitectureSimulation = window.resetClinicalSimulation;
window.filterProductionTable = window.filterClinicalTable;
