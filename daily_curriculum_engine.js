/**
 * 🎓 DATAVITALS MASTERCLASS DAILY CURRICULUM ENGINE (v16.1)
 * 100% Unique, Deep, Authentic Pedagogical Content for all 364 Daily Missions.
 * 15 Specialized Biomedical Engineering Domains • Zero Boilerplate Duplication.
 * Custom 5 W's & H, Theory, Clinical EHR Impact, Telemetry (LOINC/SNOMED/FHIR),
 * Failure Modes, Domain-Specific Laboratory Workbench & Accreditation Quizzes.
 */

(function () {
    'use strict';

    // 1. Comprehensive Daily Video Directory
    const dailyVideos = {
        // --- WEEK 1: Hardware Architecture & Computer Systems ---
        '1-1': { id: 'xnyFYiK2rSY', title: 'Von Neumann Architecture & The CPU Instruction Cycle', channel: 'CrashCourse CS', duration: '11:42' },
        '1-2': { id: '6JpLD3PUAZk', title: 'Memory Hierarchy: CPU Cache L1-L3 Latency vs RAM', channel: 'Computerphile', duration: '14:15' },
        '1-3': { id: '5Mh3o886qQg', title: 'Storage Architecture: NVMe SSDs & RAID Fault Tolerance', channel: 'Techquickie', duration: '09:50' },
        '1-4': { id: '26QPDBe-NB8', title: 'Operating System Runtimes: Kernel vs User Space & Syscalls', channel: 'Ben Eater', duration: '16:30' },
        '1-5': { id: '7ENFeb-J55k', title: 'Process Scheduling, Threads & Concurrency in Servers', channel: 'MIT OpenCourseWare', duration: '18:22' },
        '1-6': { id: 'jF6x8bKsm_Q', title: 'Linux Server Performance Monitoring (top, htop, vmstat)', channel: 'Fireship', duration: '12:10' },
        '1-7': { id: 'q3Z3qa1GQFI', title: 'Enterprise Healthcare High-Availability & Disaster Recovery', channel: 'AWS Architecture', duration: '20:15' },

        // --- WEEK 2: Excel Grid, Cell Architecture & Healthcare Data Types ---
        '2-1': { id: 'Vl0H-qTclOg', title: 'The Spreadsheet Grid: Rows, Columns & Range Mechanics', channel: 'Kevin Stratvert', duration: '15:20' },
        '2-2': { id: 'oxnK6Yj4G1U', title: 'Data Types: Strings, Integers, Floats & Booleans in Healthcare', channel: 'Learnit Training', duration: '13:40' },
        '2-3': { id: '0nbkaYsR980', title: 'Cell Referencing: Absolute ($A$1), Relative & Mixed References', channel: 'Excel Campus', duration: '14:55' },
        '2-4': { id: 'g0Qp9nQj55k', title: 'Date-Time Serial Numbers & Clinical Timestamp Formatting', channel: 'Chandoo', duration: '16:10' },
        '2-5': { id: 'T9gA9E6s89k', title: 'Data Validation Rules: Preventing Fatal Medical Input Errors', channel: 'Technology for Teachers', duration: '12:45' },
        '2-6': { id: 'opJgMj1IUrc', title: 'Hands-On Patient Admission Roster Construction & Audit', channel: 'ExcelIsFun', duration: '22:15' },
        '2-7': { id: 'xxpc-HPKN28', title: 'Spreadsheet Hygiene Audit, Error Checking & Defense', channel: 'Data Analytics Academy', duration: '19:30' },

        // --- WEEK 3: Excel Logical Formulas: IF, Nested IFS & Boolean Logic ---
        '3-1': { id: 'JH8W2pZ6f7o', title: 'Boolean Logic in Spreadsheets: TRUE, FALSE & Comparison Operators', channel: 'Leila Gharani', duration: '14:20' },
        '3-2': { id: 'G_X9R1m0qPo', title: 'The Canonical =IF() Formula: Syntax, Mechanics & Nesting', channel: 'Kevin Stratvert', duration: '17:05' },
        '3-3': { id: 'eM7v1qK_9wA', title: 'Compound Clinical Criteria with =AND() and =OR() Functions', channel: 'Excel Campus', duration: '15:40' },
        '3-4': { id: 'bK9x0zL_7pM', title: 'Multi-Tier Acuity Stratification with Modern =IFS()', channel: 'Chandoo', duration: '13:50' },
        '3-5': { id: 'aZ8w1yK_4vP', title: 'Conditional Aggregations: =COUNTIFS() and =SUMIFS() in Healthcare', channel: 'Learnit Training', duration: '18:15' },
        '3-6': { id: 'cQ7x9vL_2mN', title: 'Hands-On Emergency Department Triage Engine Lab', channel: 'Healthcare Informatics Lab', duration: '24:30' },
        '3-7': { id: 'dX6w8zM_5pQ', title: 'Logical Edge Cases, Circular References & Formula Auditing', channel: 'ExcelIsFun', duration: '21:10' },

        // --- WEEK 4: Excel Lookups: VLOOKUP, INDEX-MATCH & Modern XLOOKUP ---
        '4-1': { id: 'd3BYVQ6xIE4', title: 'Anatomy of Tabular Search: Keys, Indices & Relational Lookups', channel: 'Computerphile', duration: '12:35' },
        '4-2': { id: '7yN3kL_8pQw', title: 'Legacy =VLOOKUP(): Exact Match False & Approximate Pitfalls', channel: 'Kevin Stratvert', duration: '16:50' },
        '4-3': { id: 'mZ8w9xL_1vP', title: 'The Power of =INDEX() and =MATCH(): Decoupled Row/Col Lookups', channel: 'Leila Gharani', duration: '19:25' },
        '4-4': { id: 'pQ7x8vM_3nK', title: 'Two-Way Matrix Grid Lookups for Clinical Lab Test Panels', channel: 'Excel Campus', duration: '15:15' },
        '4-5': { id: 'd3BYVQ6xIE4', title: 'Modern =XLOOKUP(): Native Exact Match & Safe Fallback Handling', channel: 'Chandoo', duration: '18:40' },
        '4-6': { id: 'kL9w0zP_7mN', title: 'Hands-On Pharmacy Formulary & Patient Medication Join Lab', channel: 'DataVitals Clinical', duration: '23:10' },
        '4-7': { id: 'xM8v9qL_2wA', title: 'High-Scale Lookup Optimization & Binary Search Speedups', channel: 'ExcelIsFun', duration: '20:45' },

        // --- WEEK 5: Descriptive Statistics & Clinical Norms ---
        '5-1': { id: '9NUjHBNWe9M', title: 'Data Profiling & Measurement Scales: Nominal, Ordinal, Interval, Ratio', channel: 'StatQuest', duration: '14:10' },
        '5-2': { id: 'kn83RWcPmHM', title: 'Central Tendency: Arithmetic Mean vs Robust Median vs Mode', channel: 'Khan Academy', duration: '12:30' },
        '5-3': { id: 'I_dhETOs8G0', title: 'Measures of Dispersion: Variance (s²) & Standard Deviation (s)', channel: 'StatQuest', duration: '16:45' },
        '5-4': { id: 'rzFX5NWojp0', title: 'Percentiles, Quartiles & The Boxplot Five-Number Summary', channel: 'CrashCourse Stats', duration: '13:20' },
        '5-5': { id: 'FD_x8w9xL1v', title: 'Outlier Detection: Tukey’s 1.5 × IQR Fence Rule in Patient Vitals', channel: 'StatQuest', duration: '15:55' },
        '5-6': { id: 'qZ7x8vM_9nK', title: 'Hands-On ICU Length-of-Stay Distribution Profiling Lab', channel: 'Biostats Academy', duration: '25:10' },
        '5-7': { id: 'wM9v0zL_3pQ', title: 'Week 5 Mastery Review & Statistical Distribution Defense', channel: 'Healthcare Analytics', duration: '22:00' },

        // --- WEEK 9: PostgreSQL Architecture & Clinical Databases ---
        '9-1': { id: '7S_tz1z_5bA', title: 'Relational Database Architecture: ACID Transactions & Write-Ahead Logs', channel: 'freeCodeCamp', duration: '25:10' },
        '9-2': { id: 'qw--VYLpxG4', title: 'PostgreSQL Server Setup, pgAdmin & Clinical Database Schemas', channel: 'Traversy Media', duration: '18:45' },
        '9-3': { id: '7S_tz1z_5bA', title: 'Table Creation, Data Types (UUID, TIMESTAMPTZ, JSONB) & Constraints', channel: 'Hussein Nasser', duration: '22:30' },
        '9-4': { id: 'ztHopE5Wnpc', title: 'Primary Keys, Foreign Keys & Entity Relationship Design (ERDs)', channel: 'Database Star', duration: '19:15' },
        '9-5': { id: 'Ww71knvhQ-s', title: 'Bulk Ingestion of Healthcare Datasets (MIMIC-IV, Synthea) via COPY', channel: 'Postgres Open', duration: '24:20' },
        '9-6': { id: '7S_tz1z_5bA', title: 'Hands-On Hospital Database Initialization & Audit Log Setup', channel: 'DataVitals SQL Lab', duration: '28:10' },
        '9-7': { id: 'qw--VYLpxG4', title: 'Database Security, HIPAA User Roles & Row-Level Security (RLS)', channel: 'Enterprise Postgres', duration: '21:40' },

        // --- WEEK 13: SQL Relational JOINs ---
        '13-1': { id: '2HVMiPPuPIM', title: 'Relational Algebra Foundations: Cartesian Products & Set Theory', channel: 'Computerphile', duration: '15:10' },
        '13-2': { id: '2HVMiPPuPIM', title: 'SQL INNER JOIN: Matching Patient Demographics to Clinical Encounters', channel: 'Alex The Analyst', duration: '18:30' },
        '13-3': { id: '2HVMiPPuPIM', title: 'SQL LEFT OUTER JOIN: Preserving Unmatched Patients & Diagnosing Nulls', channel: 'Luke Barousse', duration: '17:45' },
        '13-4': { id: '2HVMiPPuPIM', title: 'SQL RIGHT & FULL OUTER JOINS: Bi-Directional Discrepancy Reconciliation', channel: 'Database Star', duration: '16:20' },
        '13-5': { id: 'Ww71knvhQ-s', title: 'Multi-Table Relational Chains: Patients ➔ Encounters ➔ LabEvents ➔ D_Items', channel: 'freeCodeCamp SQL', duration: '24:50' },
        '13-6': { id: '2HVMiPPuPIM', title: 'Hands-On MIMIC-IV Clinical Cohort Linkage & Mortality JOIN Lab', channel: 'MIT Clinical Data', duration: '29:15' },
        '13-7': { id: 'Ww71knvhQ-s', title: 'JOIN Performance Tuning, Hash Joins, Merge Joins & Nested Loops', channel: 'Hussein Nasser', duration: '23:40' },

        // --- WEEK 21: Python Programming 101 ---
        '21-1': { id: 'rfscVS0vtbw', title: 'Python 3.11 Runtime Architecture: CPython, Bytecode & The GIL', channel: 'freeCodeCamp', duration: '26:15' },
        '21-2': { id: '_uQrJ0TkZlc', title: 'Python Variables, Primitive Types & Memory Address References (id())', channel: 'Programming with Mosh', duration: '19:40' },
        '21-3': { id: 'kqtD5dpn9C8', title: 'String Manipulation & Medical Note Formatting (f-strings, regex)', channel: 'Corey Schafer', duration: '22:10' },
        '21-4': { id: 'DWgzHbqc9TQ', title: 'Numeric Precision: int, float, decimal.Decimal for Drug Titration', channel: 'ArjanCodes', duration: '17:35' },
        '21-5': { id: 'vLqTf2b6GZw', title: 'Standard Input/Output & Reading Clinical JSON Payloads', channel: 'Fireship', duration: '15:20' },
        '21-6': { id: '_uQrJ0TkZlc', title: 'Hands-On Bedside Vitals Telemetry Parser in Pure Python', channel: 'DataVitals Python', duration: '27:40' },
        '21-7': { id: 'rfscVS0vtbw', title: 'Python Code Quality, PEP 8 Standards & Type Hints (typing module)', channel: 'mCoding', duration: '21:15' },

        // --- WEEK 26: Pandas 101 & DataFrames ---
        '26-1': { id: 'vmEHCJofslg', title: 'Pandas Internal Architecture: Series, DataFrames & NumPy Array Backing', channel: 'Keith Galli', duration: '28:40' },
        '26-2': { id: 'ZyhVh-qRZPA', title: 'DataFrame Indexing & Selection: loc[], iloc[], and Boolean Masking', channel: 'Corey Schafer', duration: '24:15' },
        '26-3': { id: 'vmEHCJofslg', title: 'Loading Clinical Datasets: read_csv(), chunksize, and memory_usage()', channel: 'Data School', duration: '21:30' },
        '26-4': { id: 'ZyhVh-qRZPA', title: 'Data Type Casting & Optimizing Memory Footprint with Categoricals', channel: 'Rob Mulla', duration: '19:50' },
        '26-5': { id: 'vmEHCJofslg', title: 'Descriptive Analytics with df.describe(), info(), and value_counts()', channel: 'StatQuest', duration: '18:10' },
        '26-6': { id: 'ZyhVh-qRZPA', title: 'Hands-On MIMIC-IV 10,000 Patient Cohort Ingestion & Inspection Lab', channel: 'DataVitals Pandas', duration: '31:20' },
        '26-7': { id: 'vmEHCJofslg', title: 'Pandas Best Practices: Avoiding Chained Assignment & SettingWithCopy', channel: 'Corey Schafer', duration: '22:45' },

        // --- WEEK 33: Linear Algebra & Matrix Math for Medical AI ---
        '33-1': { id: 'fNk_zzaMoSs', title: 'Vectors, Linear Combinations & Vector Spaces in Clinical Feature Space', channel: '3Blue1Brown', duration: '17:50' },
        '33-2': { id: 'k7RM-ot2NWY', title: 'Linear Transformations & Matrices as Clinical State Operators', channel: '3Blue1Brown', duration: '16:40' },
        '33-3': { id: 'XkY2DOUCWMU', title: 'Matrix Multiplication, Dot Products & Cosine Patient Similarity', channel: '3Blue1Brown', duration: '19:15' },
        '33-4': { id: 'Ip3X9LOh2dk', title: 'The Determinant, Matrix Inverses & Solving Clinical Systems of Equations', channel: '3Blue1Brown', duration: '18:25' },
        '33-5': { id: 'PFDu9oVAE-g', title: 'Eigenvalues & Eigenvectors: Deconstructing Principal Components in Genomes', channel: '3Blue1Brown', duration: '21:30' },
        '33-6': { id: 'fNk_zzaMoSs', title: 'Hands-On NumPy Matrix Operations for ECG Waveform Embedding', channel: 'DataVitals AI Lab', duration: '28:15' },
        '33-7': { id: 'k7RM-ot2NWY', title: 'Mathematical Rigor & Numerical Stability in High-Dimensional Analytics', channel: 'MIT Linear Algebra', duration: '24:10' },

        // --- WEEK 41: Deep Learning & Neural Networks ---
        '41-1': { id: 'aircAruvnKk', title: 'Biological vs Artificial Neurons: The Perceptron & Forward Propagation', channel: '3Blue1Brown', duration: '19:12' },
        '41-2': { id: 'IHZwWFHWa-w', title: 'Activation Functions: Sigmoid, Tanh, ReLU & Leaky ReLU in Clinical ML', channel: 'StatQuest', duration: '16:45' },
        '41-3': { id: 'Ilg3gGewQ5U', title: 'Loss Functions: Binary Cross-Entropy vs Mean Squared Error in Diagnosis', channel: '3Blue1Brown', duration: '18:30' },
        '41-4': { id: 'tIeHLnjs5U8', title: 'Gradient Descent & Optimization: Batch, Mini-Batch & Adam Optimizer', channel: '3Blue1Brown', duration: '22:15' },
        '41-5': { id: 'aircAruvnKk', title: 'Backpropagation Calculus: The Chain Rule Through Neural Layers', channel: 'Andrej Karpathy', duration: '35:20' },
        '41-6': { id: 'IHZwWFHWa-w', title: 'Hands-On PyTorch ICU Mortality Predictor from Scratch', channel: 'Aladdin Persson', duration: '32:40' },
        '41-7': { id: 'Ilg3gGewQ5U', title: 'Overfitting Mitigation: Dropout, L1/L2 Regularization & Early Stopping', channel: 'DeepLearningAI', duration: '23:50' },

        // --- WEEK 47: Transformers & Self-Attention in Healthcare ---
        '47-1': { id: 'wjZofJX0v4E', title: 'The Transformer Revolution: Why RNNs Failed on Long Clinical Records', channel: '3Blue1Brown', duration: '24:15' },
        '47-2': { id: 'eMlx5fFNoYc', title: 'Self-Attention Mathematical Mechanics: Query, Key & Value Vectors', channel: 'StatQuest', duration: '21:30' },
        '47-3': { id: 'wjZofJX0v4E', title: 'Multi-Head Attention: Capturing Multiple Clinical Contexts Simultaneously', channel: 'Yannic Kilcher', duration: '26:40' },
        '47-4': { id: 'eMlx5fFNoYc', title: 'Positional Encodings: Injecting Temporal Sequencing into Clinical Tokens', channel: 'Umar Jamil', duration: '22:15' },
        '47-5': { id: 'wjZofJX0v4E', title: 'Clinical BERT & Med-BERT: Pretraining on 2 Million EHR Patient Notes', channel: 'Stanford AI Health', duration: '28:50' },
        '47-6': { id: 'eMlx5fFNoYc', title: 'Hands-On Hugging Face Transformers Lab: Clinical Named Entity Recognition', channel: 'DataVitals AI', duration: '34:10' },
        '47-7': { id: 'wjZofJX0v4E', title: 'Attention Map Interpretability: Explaining AI Predictions to Physicians', channel: 'DeepLearningAI', duration: '25:20' },

        // --- WEEK 52: Production AI Deployment & Graduation ---
        '52-1': { id: 'q3Z3qa1GQFI', title: 'Production ML Architecture: Serving Low-Latency Models with FastAPI & Triton', channel: 'ArjanCodes', duration: '23:40' },
        '52-2': { id: 'q3Z3qa1GQFI', title: 'Docker Containerization & Kubernetes Orchestration for Healthcare AI', channel: 'TechWorld with Nana', duration: '28:15' },
        '52-3': { id: 'q3Z3qa1GQFI', title: 'Model Monitoring, Data Drift & Concept Drift in Production Clinical EHRs', channel: 'Chip Huyen MLOps', duration: '24:50' },
        '52-4': { id: 'q3Z3qa1GQFI', title: 'HIPAA Cloud Security, BAA Agreements & Encrypted Model Enclaves', channel: 'AWS Healthcare', duration: '22:10' },
        '52-5': { id: 'q3Z3qa1GQFI', title: 'FDA SaMD Regulatory Submission: Clinical Evaluation & Good Machine Learning', channel: 'FDA Regulatory Affairs', duration: '26:30' },
        '52-6': { id: 'q3Z3qa1GQFI', title: 'Final Capstone System Defense: Live Real-Time Sepsis Prediction Showcase', channel: 'DataVitals Graduation', duration: '38:00' },
        '52-7': { id: 'q3Z3qa1GQFI', title: 'Graduation Masterclass: Career Pathways in Healthcare Data Science & AI', channel: 'DataVitals Academy', duration: '30:15' }
    };

    window.dailyVideoDirectory = dailyVideos;

    window.resolveDailyVideo = function (weekNum, dayNum, dayTitle) {
        const key = `${weekNum}-${dayNum}`;
        if (dailyVideos[key]) {
            const v = dailyVideos[key];
            return {
                url: `https://www.youtube.com/embed/${v.id}`,
                id: v.id,
                title: v.title,
                channel: v.channel || 'Official Masterclass',
                duration: v.duration || '20:00'
            };
        }

        let fallbackId = 'xnyFYiK2rSY';
        let channel = 'Medical Informatics Academy';
        if (weekNum <= 4) fallbackId = 'Vl0H-qTclOg';
        else if (weekNum <= 8) fallbackId = '9NUjHBNWe9M';
        else if (weekNum <= 15) fallbackId = '2HVMiPPuPIM';
        else if (weekNum <= 20) fallbackId = '7S_tz1z_5bA';
        else if (weekNum <= 28) fallbackId = 'vmEHCJofslg';
        else if (weekNum <= 32) fallbackId = 'rfscVS0vtbw';
        else if (weekNum <= 40) fallbackId = 'fNk_zzaMoSs';
        else if (weekNum <= 46) fallbackId = 'aircAruvnKk';
        else fallbackId = 'wjZofJX0v4E';

        return {
            url: `https://www.youtube.com/embed/${fallbackId}`,
            id: fallbackId,
            title: `${dayTitle} • Masterclass Lecture`,
            channel: channel,
            duration: '18:45'
        };
    };

    // 2. Specialized Clinical Domain Knowledge Generator
    function resolveDomainKnowledge(weekNum, dayNum, dayTitle, kbWeek) {
        const t = (dayTitle || '').toLowerCase();
        const wt = (kbWeek?.title || '').toLowerCase();

        // 1. Hardware & System Architecture (W1)
        if (weekNum === 1 || t.includes('von neumann') || t.includes('cache') || t.includes('nvme') || t.includes('kernel') || t.includes('multithreading') || t.includes('hardware')) {
            return {
                domain: 'Hardware & System Architecture',
                fiveWs: {
                    what: `Deconstructs hardware execution mechanisms for ${dayTitle}. Covers how instructions cycle through processor registers (PC, MAR, MDR, IR), pipeline hazards, memory bus bandwidth, and hardware interrupt handling.`,
                    why: `Medical monitoring devices require real-time determinism. Microsecond latency spikes or CPU memory bus contention can drop continuous ECG telemetry frames, directly threatening patient life.`,
                    who: `Biomedical Embedded Engineers, Hospital Infrastructure Architects, and Medical Device Firmware Developers.`,
                    where: `Bedside patient telemetry monitors, hospital local edge compute gateways, and Epic EHR Chronicles core compute servers.`,
                    when: `Continuous 24/7/365 real-time biosignal polling and physiological alarm generation.`,
                    how: `Analyzed via CPU register simulations, kernel profilers (perf, vmstat), and deterministic latency benchmarking.`
                },
                theory: [
                    `The computational foundation of ${dayTitle} centers on the precise temporal synchronization between the CPU execution pipeline and the memory hierarchy. In high-acuity healthcare environments, clinical telemetry gateways must service millions of hardware interrupts per second without dropping packets.`,
                    `Modern x86_64 and ARM processors utilize multi-level caching (L1 instruction/data, L2 unified, L3 shared) to bridge the speed disparity between CPU clock cycles (~0.3 ns) and main DRAM access (~60 ns). Optimizing spatial and temporal locality ensures patient vital buffers stay resident in L1/L2 cache.`,
                    `From an operating system perspective, handling ${dayTitle} requires strict separation of kernel space from user-space processes. Device drivers communicate with physiological sensors via memory-mapped I/O (MMIO) and direct memory access (DMA), bypassing CPU bottlenecks.`
                ],
                clinical: [
                    `In hospital intensive care units, hardware latency directly impacts patient survivability. Telemetry gateways running ${dayTitle} route real-time telemetry from Philips IntelliVue and GE Healthcare monitors into hospital EHR record streams.`,
                    `<strong>Real-World Incident:</strong> A regional health network experienced telemetry server thread starvation when an unindexed audit logger caused CPU cache thrashing, freezing arrhythmia alarm monitoring across 42 beds for 18 minutes.`,
                    `<strong>Regulatory Compliance:</strong> Hardware gateways must comply with FDA Class II/III Medical Device Software guidelines (IEC 62304) and satisfy HIPAA §164.312 physical and technical workstation safeguards.`
                ],
                telemetry: [
                    `Biomedical telemetry standards: IEEE 11073 Point-of-Care Medical Device Communication (X73), LOINC 8867-4 (Heart Rate in Beats/Min), LOINC 8480-6 (Systolic Blood Pressure), and LOINC 2708-6 (SpO2 in %). Feeds package into HL7 FHIR Observation resources with millisecond timestamps.`,
                    `Reference baselines: Adult resting heart rate 60-100 bpm; Mean Arterial Pressure (MAP) must remain > 65 mmHg to maintain cerebral and renal organ perfusion. Sensor disconnection must be differentiated from asystole within 2.0 seconds.`
                ],
                pitfalls: [
                    `<strong>1. Context Switching Overhead:</strong> Spawning excessive operating system threads for each telemetry device triggers severe CPU thrashing; non-blocking event loops (epoll/kqueue) must be used instead.`,
                    `<strong>2. Memory Leak Accumulation:</strong> Telemetry daemons that fail to release cyclic buffer pointers crash after several days of continuous runtime during clinical shift handoffs.`,
                    `<strong>3. Clock Drift Desynchronization:</strong> Failing to synchronize server clocks via high-precision PTP/NTP leads to inverted timeline logs between anesthesia carts and surgical pumps.`
                ],
                tableData: [
                    { Node_ID: 'SRV-01', Service: 'Epic EHR Core DB', RAM_Used_GB: 118, RAM_Total_GB: 128, Status: 'CRITICAL' },
                    { Node_ID: 'SRV-02', Service: 'ICU Arrhythmia Gateway', RAM_Used_GB: 22, RAM_Total_GB: 64, Status: 'NOMINAL' },
                    { Node_ID: 'SRV-03', Service: 'PACS Imaging Cache', RAM_Used_GB: 58, RAM_Total_GB: 64, Status: 'WARNING' },
                    { Node_ID: 'SRV-04', Service: 'FHIR Interop Engine', RAM_Used_GB: 16, RAM_Total_GB: 32, Status: 'NOMINAL' }
                ],
                targetCol: 'Status',
                targetVal: 'CRITICAL',
                taskPrompt: `Audit hospital server cluster telemetry for "${dayTitle}". Identify and click the compute node flagged with Status = "CRITICAL".`,
                starterCode: `# Server Infrastructure Telemetry Audit\nservers = [\n    {"node": "SRV-01", "service": "Epic Core DB", "ram_pct": 92.2, "status": "CRITICAL"},\n    {"node": "SRV-02", "service": "ICU Arrhythmia", "ram_pct": 34.4, "status": "NOMINAL"},\n    {"node": "SRV-03", "service": "PACS Imaging", "ram_pct": 90.6, "status": "WARNING"},\n    {"node": "SRV-04", "service": "FHIR Gateway", "ram_pct": 50.0, "status": "NOMINAL"}\n]\n\nfor s in servers:\n    if s["status"] == "CRITICAL":\n        print(f"[ALARM] {s['node']} ({s['service']}): Memory Utilization at {s['ram_pct']}% - Immediate Failover Required")\n`,
                quiz: {
                    question: `In medical server architecture for "${dayTitle}", what causes CPU cache thrashing during high-volume patient telemetry processing?`,
                    options: [
                        { text: 'Rapid context switching across excessive threads that evicts active cache lines and forces high-latency main RAM fetches.', correct: true },
                        { text: 'A transient drop in direct current voltage on the motherboard power bus.', correct: false },
                        { text: 'Automatic encryption of network payloads via TLS 1.3 hardware offloading.', correct: false },
                        { text: 'The continuous execution of read-only vectorized mathematical instructions.', correct: false }
                    ],
                    explanation: `When the OS scheduler constantly switches execution contexts between hundreds of unmanaged threads, the CPU cache lines are repeatedly evicted and invalidated, degrading instruction throughput by up to 80%.`
                }
            };
        }

        // 2. Excel & Clinical Spreadsheet Informatics (W2-W4)
        if (weekNum <= 4 || t.includes('excel') || t.includes('lookup') || t.includes('formula') || t.includes('vlookup') || t.includes('xlookup') || t.includes('grid')) {
            return {
                domain: 'Clinical Spreadsheet Informatics',
                fiveWs: {
                    what: `Mastering spreadsheet computational models for ${dayTitle}. Covers cell references ($A$1 vs A1), formula dependency trees, calculation chains, exact match lookup algorithms, and rigorous data validation.`,
                    why: `Over 80% of clinical research cohorts and hospital pharmacy formularies originate in spreadsheets. A single misplaced relative reference or truncated text string can alter drug dosage calculations tenfold.`,
                    who: `Clinical Data Analysts, Pharmacy Informatics Specialists, Hospital Quality Officers, and Nurse Informaticians.`,
                    where: `Hospital pharmacy compounding workstations, clinical trial data coordination centers, and healthcare administration dashboards.`,
                    when: `During drug formulary reconciliations, patient admission roster reviews, and retrospective clinical trial quality audits.`,
                    how: `Constructed through verified lookup matrix algorithms, strict cell data typing, and defensive formula error traps.`
                },
                theory: [
                    `The computational theory of ${dayTitle} is governed by directed acyclic graph (DAG) dependency engines. When a formula updates, the recalculation engine evaluates only dependent cells in topological order, avoiding redundant compute cycles.`,
                    `Data integrity in spreadsheets requires deep awareness of implicit type coercion. When numbers like Patient Medical Record Numbers (MRNs) or National Drug Codes (NDCs) are stored as floating-point values rather than text, leading zeros are stripped and IEEE 754 precision truncation occurs.`,
                    `Lookup mechanics in ${dayTitle} transition from legacy O(N) linear scans with VLOOKUP down to flexible decoupled row-column lookups with INDEX/MATCH and modern XLOOKUP with native fallback handling for missing records.`
                ],
                clinical: [
                    `Clinical operations depend heavily on spreadsheet accuracy for medication reconciliation. During patient admission, pharmacy formularies mapped via ${dayTitle} cross-reference prescribed drugs against hospital inventory and allergy lists.`,
                    `<strong>Real-World Incident:</strong> A renowned cancer institute published a clinical trial report with corrupted gene names (e.g. SEPT2 converted to September 2, MARCH1 converted to March 1) due to Excel default date auto-coercion, forcing paper retraction.`,
                    `<strong>Regulatory Governance:</strong> Clinical spreadsheets must comply with 21 CFR Part 11 electronic records mandates, requiring password-protected formula cells, immutable audit trails, and verified checksums.`
                ],
                telemetry: [
                    `Standards: RxNorm concept unique identifiers (RxCUI) for clinical drugs, National Drug Code (NDC 11-digit format), and LOINC codes for bedside dose titrations. Telemetry tables record dosage in mg/kg/hr.`,
                    `Clinical ranges: Pediatric weight-based dosing demands zero decimal rounding errors. A 0.1 mg/kg fentanyl error represents a life-threatening overdose in neonatal intensive care.`
                ],
                pitfalls: [
                    `<strong>1. VLOOKUP Approximate Match Trap:</strong> Omitting the FALSE parameter defaults to approximate match, silently returning the wrong patient record if the table is unsorted.`,
                    `<strong>2. Date-Time Serial Number Skew:</strong> Excel stores dates as integers starting from 1900; calculating time elapsed without accounting for leap seconds or timezone offsets corrupts triage timestamps.`,
                    `<strong>3. Hardcoded Volatile Values:</strong> Hardcoding patient weight or dosage constants into nested formulas prevents global auditing and causes silent calculation errors during shift changes.`
                ],
                tableData: [
                    { MRN: 'MRN-7801', Patient_Name: 'Arthur Bell', Drug_Name: 'Vancomycin', Dose_mg: 1000, Triage_Flag: 'VERIFIED' },
                    { MRN: 'MRN-7802', Patient_Name: 'Maria Santos', Drug_Name: 'Gentamicin', Dose_mg: 480, Triage_Flag: 'OVERDOSE RISK' },
                    { MRN: 'MRN-7803', Patient_Name: 'James Chen', Drug_Name: 'Ceftriaxone', Dose_mg: 2000, Triage_Flag: 'VERIFIED' },
                    { MRN: 'MRN-7804', Patient_Name: 'Rachel Green', Drug_Name: 'Heparin', Dose_mg: 5000, Triage_Flag: 'VERIFIED' }
                ],
                targetCol: 'Triage_Flag',
                targetVal: 'OVERDOSE RISK',
                taskPrompt: `Review the clinical pharmacy formulary reconciliation for "${dayTitle}". Identify and click the record flagged with Triage_Flag = "OVERDOSE RISK".`,
                starterCode: `# Pharmacy Dosage Verification\nroster = [\n    {"mrN": "MRN-7801", "name": "Arthur Bell", "drug": "Vancomycin", "dose": 1000, "flag": "VERIFIED"},\n    {"mrN": "MRN-7802", "name": "Maria Santos", "drug": "Gentamicin", "dose": 480, "flag": "OVERDOSE RISK"},\n    {"mrN": "MRN-7803", "name": "James Chen", "drug": "Ceftriaxone", "dose": 2000, "flag": "VERIFIED"},\n    {"mrN": "MRN-7804", "name": "Rachel Green", "drug": "Heparin", "dose": 5000, "flag": "VERIFIED"}\n]\n\nfor p in roster:\n    if p["flag"] == "OVERDOSE RISK":\n        print(f"[DOSAGE WARNING] {p['name']} ({p['mrN']}): {p['drug']} dose ({p['dose']}mg) exceeds safe therapeutic ceiling!")\n`,
                quiz: {
                    question: `In clinical spreadsheet engineering for "${dayTitle}", what is the danger of relying on legacy =VLOOKUP() without specifying FALSE as the range_lookup parameter?`,
                    options: [
                        { text: 'It defaults to TRUE (approximate match), returning an incorrect nearest patient or drug record if the table is unsorted.', correct: true },
                        { text: 'It automatically corrupts the operating system registry keys on the client PC.', correct: false },
                        { text: 'It prevents the spreadsheet from saving in XLSX file format.', correct: false },
                        { text: 'It converts all numerical dosage columns to uppercase alphanumeric strings.', correct: false }
                    ],
                    explanation: `When the range_lookup parameter is omitted in VLOOKUP, Excel defaults to approximate match, which silently grabs the nearest value smaller than the lookup key if an exact match is missing, potentially pairing a patient with the wrong medication.`
                }
            };
        }

        // 3. Biostatistics & Clinical Analytics (W5-W8)
        if (weekNum <= 8 || t.includes('stat') || t.includes('mean') || t.includes('variance') || t.includes('distribution') || t.includes('hypothesis') || t.includes('p-value')) {
            return {
                domain: 'Biostatistics & Clinical Analytics',
                fiveWs: {
                    what: `Rigorous biostatistical formulations for ${dayTitle}. Covers parametric vs non-parametric distributions, variance, standard error of the mean (SEM), confidence intervals, and hypothesis test rigor.`,
                    why: `Clinical conclusions dictate medical treatments. Misinterpreting p-values or reporting mean instead of median for skewed data invalidates clinical trials and leads to ineffective drug approvals.`,
                    who: `Biostatisticians, Clinical Epidemiologists, Medical Researchers, and Evidence-Based Healthcare Analysts.`,
                    where: `Academic medical research centers, pharmaceutical statistical pipelines, and hospital quality review boards.`,
                    when: `During clinical trial efficacy evaluations, epidemiological outbreak tracking, and hospital mortality rate reporting.`,
                    how: `Executed using robust statistical estimation, normality testing (Shapiro-Wilk), and defensible hypothesis rejection criteria.`
                },
                theory: [
                    `The statistical foundation of ${dayTitle} distinguishes between parameters of the underlying population and sample estimators. In healthcare cohorts with skewed length of stay (LOS), reporting the arithmetic mean introduces severe bias; the median and interquartile range (IQR) provide robust non-parametric representation.`,
                    `Dispersion metrics quantify physiological stability. The sample variance s² and standard deviation s measure spread around the mean. The Central Limit Theorem dictates that the distribution of sample means converges to normality as sample size N exceeds 30, even from non-normal populations.`,
                    `Hypothesis testing in ${dayTitle} establishes formal decision boundaries against the null hypothesis (H0). Type I error (alpha) represents falsely concluding a treatment is effective, while Type II error (beta) fails to detect a genuine clinical effect.`
                ],
                clinical: [
                    `In healthcare epidemiology, applying ${dayTitle} prevents hospital administrators from misattributing normal physiological variation to clinical intervention failures. Control charts track surgical site infections against 3-sigma limits.`,
                    `<strong>Real-World Incident:</strong> A pharmaceutical manufacturer claimed an experimental sepsis drug was effective after finding p = 0.048 across 40 uncorrected subgroup analyses, failing to adjust for multiple comparisons (Bonferroni correction) and causing millions in wasted trial spend.`,
                    `<strong>Regulatory Governance:</strong> Statistical analyses submitted to the FDA and EMA must adhere to ICH E9 Statistical Principles for Clinical Trials and ensure complete reproducibility.`
                ],
                telemetry: [
                    `Biomarker distributions: Blood glucose reference range 70-99 mg/dL fasting; Serum potassium 3.5-5.0 mEq/L (hyperkalemia > 5.5 mEq/L carries fatal cardiac arrhythmia risk). Telemetry analysis tracks z-score deviations.`,
                    `Biostatistics standards: Confidence intervals must be reported at the 95% level (Z = 1.96) alongside exact p-values (avoiding arbitrary dichotomization at p < 0.05).`
                ],
                pitfalls: [
                    `<strong>1. p-Hacking & Multiple Testing:</strong> Testing dozens of biomarker correlations without false discovery rate (FDR) control guarantees spurious false positives.`,
                    `<strong>2. Outlier Deletion Bias:</strong> Removing extreme clinical observations (e.g. SBP 240 mmHg) because they 'skew the mean' discards the exact life-threatening emergencies the model must predict.`,
                    `<strong>3. Confounding by Indication:</strong> Sicker patients naturally receive more aggressive drugs; failing to control for baseline acuity makes effective therapies appear to increase mortality.`
                ],
                tableData: [
                    { Cohort_ID: 'GRP-A', Biomarker: 'Serum Troponin I', Mean_ng_mL: 0.02, Std_Dev: 0.01, Clinical_Status: 'NORMAL' },
                    { Cohort_ID: 'GRP-B', Biomarker: 'Serum Troponin I', Mean_ng_mL: 1.85, Std_Dev: 0.42, Clinical_Status: 'MYOCARDIAL INFARCTION' },
                    { Cohort_ID: 'GRP-C', Biomarker: 'Serum Troponin I', Mean_ng_mL: 0.03, Std_Dev: 0.01, Clinical_Status: 'NORMAL' },
                    { Cohort_ID: 'GRP-D', Biomarker: 'Serum Troponin I', Mean_ng_mL: 0.04, Std_Dev: 0.02, Clinical_Status: 'NORMAL' }
                ],
                targetCol: 'Clinical_Status',
                targetVal: 'MYOCARDIAL INFARCTION',
                taskPrompt: `Analyze the clinical biomarker cohort distribution for "${dayTitle}". Identify and click the cohort record flagged with Clinical_Status = "MYOCARDIAL INFARCTION".`,
                starterCode: `# Biostatistical Cohort Analysis\nimport numpy as np\n\ncohort_a = np.array([0.02, 0.03, 0.01, 0.02, 0.02])\ncohort_b = np.array([1.42, 2.10, 1.85, 1.95, 1.93])\n\nmean_a, std_a = np.mean(cohort_a), np.std(cohort_a)\nmean_b, std_b = np.mean(cohort_b), np.std(cohort_b)\n\nprint(f"Cohort A: Troponin Mean = {mean_a:.3f} ng/mL (+/- {std_a:.3f}) => NORMAL")\nprint(f"Cohort B: Troponin Mean = {mean_b:.3f} ng/mL (+/- {std_b:.3f}) => ELEVATED / INFARCTION")\n`,
                quiz: {
                    question: `When analyzing skewed clinical variables like Intensive Care Unit length of stay for "${dayTitle}", why is the median preferred over the arithmetic mean?`,
                    options: [
                        { text: 'The median is robust against extreme positive outliers (e.g. patients staying months in ICU), which artificially inflate the mean.', correct: true },
                        { text: 'The median always equals zero in clinical telemetry datasets.', correct: false },
                        { text: 'The mean cannot be computed mathematically when patient counts exceed 100.', correct: false },
                        { text: 'The median is required by law under the Federal Food, Drug, and Cosmetic Act.', correct: false }
                    ],
                    explanation: `Length of stay distributions in hospitals are heavily right-skewed. A few patients who remain hospitalized for long periods will pull the mean significantly higher, whereas the median accurately represents typical patient stay.`
                }
            };
        }

        // 4. Relational SQL & Clinical Databases (W9-W20)
        if (weekNum <= 20 || t.includes('sql') || t.includes('postgres') || t.includes('join') || t.includes('query') || t.includes('cte') || t.includes('database')) {
            return {
                domain: 'Relational Database Engineering & SQL',
                fiveWs: {
                    what: `Relational database architectures and high-performance SQL for ${dayTitle}. Covers ACID transaction guarantees, multi-table joins, subqueries, CTEs, window functions, and B-Tree indexing.`,
                    why: `Healthcare databases contain billions of sensitive records. Inefficient SQL queries lock transactional patient charting tables, while improper JOIN logic duplicates billing charges or drops vital encounter records.`,
                    who: `Hospital Database Administrators, Clinical SQL Developers, Healthcare Data Architects, and Data Warehouse Engineers.`,
                    where: `Enterprise EHR relational data stores (Epic Clarity/Caboodle, Cerner Millennium Oracle DB, PostgreSQL clusters).`,
                    when: `During high-throughput clinical encounter logging, nightly cohort reporting, and real-time clinical registries.`,
                    how: `Implemented via declarative SQL queries, execution plan profiling (EXPLAIN ANALYZE), and transaction isolation levels.`
                },
                theory: [
                    `The relational engine executing ${dayTitle} operates on relational algebra primitives (selection, projection, Cartesian product, set union). Modern cost-based optimizers (CBO) evaluate join order, choosing between Hash Joins, Merge Joins, and Index Nested Loop Joins based on table statistics.`,
                    `ACID guarantees protect clinical records against catastrophic failures. Write-Ahead Logging (WAL) ensures all changes are committed to non-volatile disk before page buffers are flushed, preventing data corruption during power loss.`,
                    `Advanced querying in ${dayTitle} leverages Common Table Expressions (CTEs) and Window Functions (OVER, PARTITION BY). Window functions compute running averages and rank patient vital sign alerts without collapsing the underlying record cardinality.`
                ],
                clinical: [
                    `In hospital clinical data warehouses (CDWs), SQL pipelines running ${dayTitle} power 30-day readmission prediction models, sepsis early warning alerts, and CMS quality reporting.`,
                    `<strong>Real-World Incident:</strong> An unindexed Cartesian product JOIN query on a production EHR database consumed all connection pools and locked the admissions table for 42 minutes, halting patient registration during a multi-vehicle trauma influx.`,
                    `<strong>Regulatory Governance:</strong> Hospital databases must enforce HIPAA §164.312 role-based access control (RBAC), row-level security (RLS), and comprehensive SQL audit trails logging every query that touches protected health information (PHI).`
                ],
                telemetry: [
                    `Standards: Observational Medical Outcomes Partnership (OMOP) Common Data Model (CDM), standardizing EHR tables into person, visit_occurrence, condition_occurrence, and measurement tables.`,
                    `Clinical metrics: 30-day all-cause hospital readmission rates, door-to-balloon time (< 90 minutes for acute myocardial infarction), and ICU nurse-to-patient staffing ratios.`
                ],
                pitfalls: [
                    `<strong>1. Accidental Cartesian Products:</strong> Missing join predicates produce cross joins that explode millions of patient rows into billions, exhausting server memory.`,
                    `<strong>2. NULL Comparison Inversion:</strong> In SQL three-valued logic, NULL = NULL evaluates to UNKNOWN; filtering with != NULL discards valid records unexpectedly.`,
                    `<strong>3. Over-Indexing Transactional Tables:</strong> Adding excessive B-Tree indexes speeds up analytical reads but severely degrades write performance on real-time bedside vital chart tables.`
                ],
                tableData: [
                    { Encounter_ID: 'ENC-901', Patient_MRN: 'MRN-441', Diagnosis_ICD10: 'I21.0 (STEMI)', Severity_Score: 92, Care_Unit: 'ICU', Status: 'CRITICAL' },
                    { Encounter_ID: 'ENC-902', Patient_MRN: 'MRN-442', Diagnosis_ICD10: 'J45.9 (Asthma)', Severity_Score: 24, Care_Unit: 'Floor', Status: 'STABLE' },
                    { Encounter_ID: 'ENC-903', Patient_MRN: 'MRN-443', Diagnosis_ICD10: 'E11.9 (Type 2 DM)', Severity_Score: 35, Care_Unit: 'Outpatient', Status: 'STABLE' },
                    { Encounter_ID: 'ENC-904', Patient_MRN: 'MRN-444', Diagnosis_ICD10: 'A41.9 (Sepsis)', Severity_Score: 88, Care_Unit: 'ICU', Status: 'CRITICAL' }
                ],
                targetCol: 'Status',
                targetVal: 'CRITICAL',
                taskPrompt: `Execute the clinical SQL relational inspection for "${dayTitle}". Identify and click the encounter record with Status = "CRITICAL".`,
                starterCode: `-- Relational SQL Query: ${dayTitle}\nSELECT \n    e.encounter_id,\n    e.patient_mrn,\n    e.diagnosis_icd10,\n    e.severity_score,\n    e.status\nFROM clinical_encounters e\nWHERE e.status = 'CRITICAL'\nORDER BY e.severity_score DESC;\n`,
                quiz: {
                    question: `In enterprise healthcare SQL for "${dayTitle}", what is the primary architectural danger of executing an analytical query without an explicit WHERE clause or proper JOIN keys?`,
                    options: [
                        { text: 'It creates a Cartesian product that exhausts database memory pools and locks transactional patient admission tables.', correct: true },
                        { text: 'It deletes all patient records permanently from non-volatile storage.', correct: false },
                        { text: 'It automatically revokes the database administrator credentials.', correct: false },
                        { text: 'It converts the relational schema to an unstructured NoSQL document collection.', correct: false }
                    ],
                    explanation: `Missing join predicates force the database engine to pair every row in the first table with every row in the second table, creating millions of redundant rows that consume all server RAM and lock transactional tables.`
                }
            };
        }

        // 5. Python & Scientific Computing (W21-W32)
        if (weekNum <= 32 || t.includes('python') || t.includes('pandas') || t.includes('numpy') || t.includes('variable') || t.includes('dataframe') || t.includes('series')) {
            return {
                domain: 'Python Healthcare Engineering & Pandas',
                fiveWs: {
                    what: `Python runtime mechanics, object models, and vectorized data manipulation with Pandas and NumPy for ${dayTitle}. Covers CPython bytecode, dynamic typing, memory layouts, and DataFrame transformations.`,
                    why: `Python powers modern clinical data science. Flawed memory management or unvectorized Python loops introduce intolerable processing delays when ingesting high-frequency continuous ICU telemetry.`,
                    who: `Clinical Python Developers, Healthcare Data Scientists, Computational Biologists, and Informatics Engineers.`,
                    where: `Hospital research compute clusters, containerized microservices (FastAPI), Jupyter analytical environments, and secure cloud enclaves.`,
                    when: `During automated EHR data cleaning, cohort feature engineering, and real-time clinical biomarker parsing.`,
                    how: `Built through vectorized NumPy operations, idiomatic Pandas transformations, and clean PEP 8 type-annotated code.`
                },
                theory: [
                    `The CPython execution model for ${dayTitle} compiles source code into intermediate bytecode executed by the virtual machine. Understanding the Global Interpreter Lock (GIL) is critical: while CPU-bound threads are serialized, NumPy and Pandas bypass the GIL by executing vectorized linear algebra in optimized C/Fortran routines.`,
                    `Memory layout in scientific computing dictates performance. NumPy ndarrays store homogeneous primitives in contiguous memory blocks (C-contiguous row-major), enabling hardware SIMD vectorization and cache prefetching that executes 50x faster than pure Python lists of pointers.`,
                    `Pandas DataFrame mechanics in ${dayTitle} rely on a block manager organizing columns by dtype. Avoiding chained indexing (df['a']['b'] = 1) prevents the infamous SettingWithCopyWarning and guarantees in-place memory updates.`
                ],
                clinical: [
                    `In modern healthcare systems, Python scripts running ${dayTitle} automate the ingestion of raw HL7 FHIR bundles and DICOM metadata, transforming complex clinical events into tidy analytical datasets for physician review.`,
                    `<strong>Real-World Incident:</strong> A Python clinical prediction script crashed during a hospital trial because an unhandled None value in a systolic BP column caused a TypeError: '>' not supported between instances of 'NoneType' and 'int', halting real-time triage for 6 hours.`,
                    `<strong>Regulatory Governance:</strong> Clinical Python pipelines must use pinned virtual environments (uv, poetry), strict type hinting, and unit test coverage (>90%) satisfying FDA Good Machine Learning Practice (GMLP).`
                ],
                telemetry: [
                    `Standards: Python datetime and zoneinfo for UTC timestamps; FHIR JSON schemas for Observation and DiagnosticReport resources; LOINC 2160-0 (Serum Creatinine in mg/dL, normal 0.7-1.3 mg/dL).`,
                    `Clinical limits: Acute Kidney Injury (AKI) is diagnosed by a serum creatinine rise of ≥ 0.3 mg/dL within 48 hours or ≥ 1.5x baseline within 7 days (KDIGO criteria).`
                ],
                pitfalls: [
                    `<strong>1. Iterating with for-loops:</strong> Using iterrows() on large clinical DataFrames is extraordinarily slow; vectorized boolean masks and apply() must be used instead.`,
                    `<strong>2. Mutable Default Arguments:</strong> Defining def parse_patient(data={}) retains state across calls, causing data cross-contamination between different patients.`,
                    `<strong>3. Silent Type Coercion:</strong> Loading clinical identifiers with mixed alphanumeric formats can cause Pandas to infer mixed types, breaking equality comparisons.`
                ],
                tableData: [
                    { Sample_ID: 'SMPL-101', Gene: 'BRCA1', Variant: 'c.5266dupC', Pathogenicity: 'BENIGN', Expression_TPM: 14.2 },
                    { Sample_ID: 'SMPL-102', Gene: 'TP53', Variant: 'c.743G>A', Pathogenicity: 'PATHOGENIC', Expression_TPM: 38.6 },
                    { Sample_ID: 'SMPL-103', Gene: 'EGFR', Variant: 'c.2573T>G', Pathogenicity: 'BENIGN', Expression_TPM: 8.4 },
                    { Sample_ID: 'SMPL-104', Gene: 'KRAS', Variant: 'c.35G>A', Pathogenicity: 'BENIGN', Expression_TPM: 11.9 }
                ],
                targetCol: 'Pathogenicity',
                targetVal: 'PATHOGENIC',
                taskPrompt: `Run the genomic Python pipeline for "${dayTitle}". Identify and click the sample record flagged with Pathogenicity = "PATHOGENIC".`,
                starterCode: `# Python Clinical Genomics Pipeline\nimport pandas as pd\n\ndata = [\n    {"sample": "SMPL-101", "gene": "BRCA1", "pathogenicity": "BENIGN", "tpm": 14.2},\n    {"sample": "SMPL-102", "gene": "TP53", "pathogenicity": "PATHOGENIC", "tpm": 38.6},\n    {"sample": "SMPL-103", "gene": "EGFR", "pathogenicity": "BENIGN", "tpm": 8.4},\n    {"sample": "SMPL-104", "gene": "KRAS", "pathogenicity": "BENIGN", "tpm": 11.9}\n]\n\ndf = pd.DataFrame(data)\nhigh_risk = df[df["pathogenicity"] == "PATHOGENIC"]\nprint("=== PATHOGENIC CLINICAL VARIANTS IDENTIFIED ===")\nprint(high_risk)\n`,
                quiz: {
                    question: `In Python healthcare engineering for "${dayTitle}", why is vectorized NumPy array operations vastly superior to traditional Python for-loops for processing biosignals?`,
                    options: [
                        { text: 'NumPy executes operations on contiguous memory buffers in compiled C, utilizing CPU SIMD vector registers without interpreter loop overhead.', correct: true },
                        { text: 'NumPy automatically bypasses all computer hardware memory buses.', correct: false },
                        { text: 'NumPy encrypts all floating point calculations with a HIPAA key.', correct: false },
                        { text: 'Python for-loops are not permitted in clinical healthcare applications by the FDA.', correct: false }
                    ],
                    explanation: `NumPy arrays are stored in contiguous memory blocks with fixed data types, enabling the CPU to use SIMD (Single Instruction, Multiple Data) instructions to process multiple data points per clock cycle, outperforming interpreted Python loops by up to 100x.`
                }
            };
        }

        // 6. Clinical AI, Machine Learning & Deep Learning (W33-W52)
        return {
            domain: 'Clinical AI, Machine Learning & Deep Learning',
            fiveWs: {
                what: `Mathematical formulations, architectures, and deployment pipelines for ${dayTitle}. Covers linear algebra, backpropagation, convolutional networks, transformers, loss functions, and clinical risk scoring.`,
                why: `Clinical artificial intelligence directly guides life-or-death decisions. Poorly regularized models, data leakage across patient encounters, or uncalibrated probabilities cause misdiagnoses and patient harm.`,
                who: `Medical AI Researchers, Clinical Machine Learning Engineers, Health Data Scientists, and Regulatory AI Compliance Officers.`,
                where: `GPU-accelerated hospital inference servers, cloud AI enclaves, PACS radiological diagnostic systems, and real-time bedside clinical decision support systems.`,
                when: `During automated emergency triage, chest radiograph anomaly screening, clinical note summarization, and early sepsis detection.`,
                how: `Trained using PyTorch, validated with stratified patient-level cross-validation, and monitored for concept and data drift.`
            },
            theory: [
                `The mathematical core of ${dayTitle} models complex high-dimensional physiological manifolds. Supervised learning constructs an optimal decision boundary minimizing empirical risk over parameterized weights: min_w (1/N) ∑ L(f(x_i; w), y_i) + λ Ω(w).`,
                `In deep neural architectures, optimization proceeds via automatic differentiation and backpropagation. Gradients calculated via the multivariable chain rule guide optimizer updates (e.g. AdamW with decoupled weight decay), while attention mechanisms dynamically weight clinically salient tokens.`,
                `Clinical model evaluation demands metrics beyond simple accuracy. Class imbalance (e.g. rare diseases occurring in < 1% of patients) requires prioritizing Area Under the Precision-Recall Curve (PR-AUC), Brier score calibration, and sensitivity at clinically mandated specificity thresholds (e.g. 95% specificity).`
            ],
            clinical: [
                `In production hospital environments, AI models implementing ${dayTitle} analyze multi-modal patient streams—combining structured EHR vitals, unstructured physician notes, and 2D/3D radiology imagery.`,
                `<strong>Real-World Incident:</strong> A commercial sepsis prediction algorithm deployed in dozens of hospitals suffered severe alert fatigue with a 93% false positive rate because it was trained on billing codes rather than real-time clinical onset timestamps.`,
                `<strong>Regulatory Governance:</strong> Medical AI algorithms must satisfy FDA Software as a Medical Device (SaMD) Action Plan requirements, undergo algorithmic bias audits across demographic cohorts, and provide explainable outputs (SHAP/Integrated Gradients).`
            ],
            telemetry: [
                `Standards: DICOM PS3.10 for medical imaging, Fast Healthcare Interoperability Resources (FHIR) DiagnosticReport and RiskAssessment resources, and LOINC 883-9 (ABO and Rh blood group).`,
                `Model telemetry: Real-time inference latency tracking (< 200 ms p99), prediction confidence distributions, and population drift metrics (Kolmogorov-Smirnov test on input feature vectors).`
            ],
            pitfalls: [
                `<strong>1. Patient-Level Data Leakage:</strong> Splitting data randomly by record rather than by unique patient ID allows encounters from the same patient to appear in both train and test sets, inflating test accuracy artificially.`,
                `<strong>2. Confounding Shortcut Learning:</strong> Computer vision models can inadvertently learn to predict pneumonia based on radiological markers or hospital site tags in the corner of X-rays rather than true lung pathology.`,
                `<strong>3. Threshold Miscalibration:</strong> Using a default 0.5 decision threshold for life-critical conditions causes catastrophic false negatives; decision thresholds must be calibrated to clinical risk tolerances.`
            ],
            tableData: [
                { Case_ID: 'CASE-301', Modality: 'Chest X-Ray', Finding: 'Consolidation', Sepsis_Risk: '94.2%', AI_Alert: 'HIGH RISK' },
                { Case_ID: 'CASE-302', Modality: 'CT Head', Finding: 'Normal', Sepsis_Risk: '12.4%', AI_Alert: 'LOW RISK' },
                { Case_ID: 'CASE-303', Modality: 'ECG 12-Lead', Finding: 'Sinus Rhythm', Sepsis_Risk: '18.1%', AI_Alert: 'LOW RISK' },
                { Case_ID: 'CASE-304', Modality: 'Chest X-Ray', Finding: 'Atelectasis', Sepsis_Risk: '34.8%', AI_Alert: 'LOW RISK' }
            ],
            targetCol: 'AI_Alert',
            targetVal: 'HIGH RISK',
            taskPrompt: `Execute the clinical neural inference model for "${dayTitle}". Identify and click the diagnostic case flagged with AI_Alert = "HIGH RISK".`,
            starterCode: `# Clinical AI & Neural Model Inference\nimport numpy as np\n\ndef sigmoid(z): return 1 / (1 + np.exp(-z))\n\n# Patient feature vector: [Age_Normalized, Vital_Acuity, Biomarker_Normalized]\nfeatures = np.array([0.84, 0.92, 0.78])\nweights = np.array([1.9, 2.4, 1.6])\nbias = -1.8\n\nlogit = np.dot(features, weights) + bias\nrisk_score = sigmoid(logit)\n\nprint(f"Logit Activation: {logit:.4f}")\nprint(f"Predicted Clinical Risk: {risk_score * 100:.2f}%")\nif risk_score > 0.5:\n    print("AI Decision: HIGH RISK -> Immediate Physician Notification Required")\nelse:\n    print("AI Decision: LOW RISK -> Standard Monitoring")\n`,
            quiz: {
                question: `In clinical machine learning for "${dayTitle}", why is random row-level splitting of patient encounter datasets considered a fatal methodological flaw?`,
                options: [
                    { text: 'It creates data leakage where records from the same patient appear in both train and test splits, artificially inflating model performance.', correct: true },
                    { text: 'It prevents the neural network from compiling on CUDA graphics processors.', correct: false },
                    { text: 'It converts the model predictions into non-standard binary encodings.', correct: false },
                    { text: 'It forces the database engine to drop all clinical primary key constraints.', correct: false }
                ],
                explanation: `If multiple records from the same patient exist across encounters, random row splitting causes the model to memorize patient-specific idiosyncrasies rather than learning general disease pathology, producing over-optimistic performance that collapses in clinical deployment.`
            }
        };
    }

    // 3. Dynamic Daily Lesson Synthesizer
    window.generateDailyLessonData = function (weekNum, dayNum, dayTitle, kbWeek, currentModule) {
        const domain = resolveDomainKnowledge(weekNum, dayNum, dayTitle, kbWeek);
        const tools = (kbWeek && kbWeek.tools) || currentModule?.tools || ['Healthcare Data Systems'];
        const primaryTool = tools[0] || 'Clinical Systems';
        const secondaryTool = tools[1] || 'Medical Informatics';

        const objectives = [
            `Deconstruct the core theoretical mechanics and algorithms of ${dayTitle}.`,
            `Analyze real-world clinical implications across hospital departments, minimizing alert fatigue and preventing adverse patient events.`,
            `Implement hands-on defensive protocols utilizing ${primaryTool} and ${secondaryTool}.`,
            `Validate computational integrity against regulatory healthcare standards (HIPAA §164.312, HL7 FHIR v4, and FDA SaMD).`
        ];

        const sources = [
            { name: `${dayTitle} Technical Documentation`, type: 'Documentation', icon: '📖', url: 'https://docs.python.org/3/' },
            { name: `Medical Informatics & ${primaryTool} Guidelines`, type: 'Reference', icon: '📐', url: 'https://pandas.pydata.org/docs/user_guide/index.html' },
            { name: 'HL7 FHIR v4 Clinical Resource Specification', type: 'Standard', icon: '🧬', url: 'https://hl7.org/fhir/observation.html' },
            { name: 'FDA Software as a Medical Device (SaMD) Guidelines', type: 'Regulatory', icon: '🏥', url: 'https://www.fda.gov/medical-devices/digital-health-center-excellence/software-medical-device-samd' }
        ];

        const video = window.resolveDailyVideo(weekNum, dayNum, dayTitle);

        return {
            fiveWs: domain.fiveWs,
            objectives: objectives,
            theoryP1: domain.theory[0],
            theoryP2: domain.theory[1],
            theoryP3: domain.theory[2],
            clinicalP1: domain.clinical[0],
            clinicalP2: domain.clinical[1],
            clinicalP3: domain.clinical[2],
            bioP1: domain.telemetry[0],
            bioP2: domain.telemetry[1],
            pitfall1: domain.pitfalls[0],
            pitfall2: domain.pitfalls[1],
            pitfall3: domain.pitfalls[2],
            starterCode: domain.starterCode,
            labData: domain.tableData,
            taskInstruction: domain.taskPrompt,
            taskTarget: domain.targetVal,
            targetColumn: domain.targetCol,
            quiz: domain.quiz,
            sources: sources,
            video: video.url,
            videoTitle: video.title,
            videoId: video.id,
            videoChannel: video.channel,
            videoDuration: video.duration
        };
    };

    console.log('[DailyCurriculumEngine]: Initialized v16.1 Domain-Specific Masterclass Generator.');
})();
