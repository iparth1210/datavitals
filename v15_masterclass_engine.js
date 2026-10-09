/**
 * 🎓 DATAVITALS MASTERCLASS LESSON & PEDAGOGICAL ENGINE (v15.4)
 * Comprehensive, In-Depth Academic Masterclasses for All 364 Daily Missions
 */

(function () {
    console.log('[MasterclassEngine]: Initializing v15.4 Pedagogical Master Engine...');

    // 1. TOPIC-SPECIFIC VIDEO EMBED DIRECTORY (ALL 52 WEEKS)
    window.videoDirectory = {
        1: { url: 'https://www.youtube.com/embed/xnyFYiK2rSY', title: 'Hardware Architecture & Healthcare IT Infrastructure' },
        2: { url: 'https://www.youtube.com/embed/Vl0H-qTclOg', title: 'Excel Foundations & Medical Data Grid' },
        3: { url: 'https://www.youtube.com/embed/O5iZ91l5qfg', title: 'Excel Clinical Formulas & Mathematical Validation' },
        4: { url: 'https://www.youtube.com/embed/7_aK0C7K-l4', title: 'Medical Lookups: XLOOKUP & Dynamic Cohort Indexing' },
        5: { url: 'https://www.youtube.com/embed/m132RAWc6nk', title: 'Clinical Pivot Tables: Hospital Admissions & ICU Metrics' },
        6: { url: 'https://www.youtube.com/embed/0XZ7U6nzazE', title: 'Medical Data Cleaning & Text Parsing' },
        7: { url: 'https://www.youtube.com/embed/qFY1n2b44Co', title: 'Real-World Clinical Excel Project & Mortality Audit' },
        8: { url: 'https://www.youtube.com/embed/rpkpK_n2ad0', title: 'Phase 1 Capstone Exam & Biostatistical Validation' },
        9: { url: 'https://www.youtube.com/embed/HXV3zeQKqGY', title: 'Relational Database Architecture & SQL 101' },
        10: { url: 'https://www.youtube.com/embed/7S_tz1z_5bA', title: 'SQL Filtering: WHERE, LIKE, IN & BETWEEN' },
        11: { url: 'https://www.youtube.com/embed/qw--VYLpxG4', title: 'SQL Aggregations: COUNT, SUM, AVG & Cohort Summaries' },
        12: { url: 'https://www.youtube.com/embed/BPHAr4QGGVE', title: 'SQL GROUP BY & HAVING: Departmental Utilization' },
        13: { url: 'https://www.youtube.com/embed/093STTl8PBQ', title: 'SQL Relational JOINs: INNER, LEFT, RIGHT' },
        14: { url: 'https://www.youtube.com/embed/Yh4CrPHVBpc', title: 'Advanced Multi-Table JOINs & Composite Keys' },
        15: { url: 'https://www.youtube.com/embed/Ww71knvhQ-s', title: 'SQL Subqueries, CTEs & Window Functions' },
        16: { url: 'https://www.youtube.com/embed/4bV3NevQ48M', title: 'Clinical Data Modeling: Normalization & FHIR Schemas' },
        17: { url: 'https://www.youtube.com/embed/AGrl-H87pRU', title: 'PowerBI Foundations: Ingesting Clinical Feeds' },
        18: { url: 'https://www.youtube.com/embed/TmhQCQr_mpU', title: 'PowerBI DAX Calculations: Clinical KPIs' },
        19: { url: 'https://www.youtube.com/embed/e_pZ9y-3Q6c', title: 'Enterprise Hospital Dashboards & Surgical Throughput' },
        20: { url: 'https://www.youtube.com/embed/rpkpK_n2ad0', title: 'Phase 2 Capstone: Hospital Enterprise Analytics' },
        21: { url: 'https://www.youtube.com/embed/rfscVS0vtbw', title: 'Python for Healthcare Data Science & PEP 8' },
        22: { url: 'https://www.youtube.com/embed/kqtD5dpn9C8', title: 'Python Data Types & String Parsing' },
        23: { url: 'https://www.youtube.com/embed/DWgzHbcastg', title: 'Python Conditional Logic & Triage Decision Engines' },
        24: { url: 'https://www.youtube.com/embed/6iF8Xb7Z3wQ', title: 'Python Loops & High-Throughput Telemetry Ingestion' },
        25: { url: 'https://www.youtube.com/embed/9Os0o3wzS_I', title: 'Python Modular Functions & Type Hinting' },
        26: { url: 'https://www.youtube.com/embed/daefaLgNkw0', title: 'Python Data Structures & FHIR JSON Traversal' },
        27: { url: 'https://www.youtube.com/embed/vmEHCJofslg', title: 'Pandas Ingestion, DataFrames & Clinical Manipulation' },
        28: { url: 'https://www.youtube.com/embed/bDhvCp3_lYw', title: 'Pandas Advanced Data Cleaning & Imputation' },
        29: { url: 'https://www.youtube.com/embed/_L39rN6gzag', title: 'Clinical Data Visualization: Matplotlib & Seaborn' },
        30: { url: 'https://www.youtube.com/embed/0P7QnIQDBJY', title: 'Machine Learning Intro: Scikit-learn Pipelines' },
        31: { url: 'https://www.youtube.com/embed/XVv6mJpFOb8', title: 'Clinical Web Scraping & REST APIs: CDC & OpenFDA' },
        32: { url: 'https://www.youtube.com/embed/LHBE6Q9XlzI', title: 'Phase 3 Capstone: Medical Ingestion & Report Engine' },
        33: { url: 'https://www.youtube.com/embed/fNk_zzaMoSs', title: 'Mathematics for Medical AI: Linear Algebra & Biosignals' },
        34: { url: 'https://www.youtube.com/embed/tIeHLnjs5U8', title: 'Multivariable Calculus & Gradient Descent in Clinical AI' },
        35: { url: 'https://www.youtube.com/embed/PaFPbb-SXE0', title: 'Machine Learning Foundations: Clinical Biases & Splitting' },
        36: { url: 'https://www.youtube.com/embed/yIYKR4sgzI8', title: 'Supervised Learning: Linear & Logistic Regression' },
        37: { url: 'https://www.youtube.com/embed/7VeUPuFG444', title: 'Tree-Based Models: Decision Trees & Explainable Rules' },
        38: { url: 'https://www.youtube.com/embed/J4Wdy0Wc_xQ', title: 'Ensemble Learning: Random Forests & XGBoost' },
        39: { url: 'https://www.youtube.com/embed/4b5d3muPQmA', title: 'Unsupervised Learning: K-Means & Patient Subgrouping' },
        40: { url: 'https://www.youtube.com/embed/aircAruvnKk', title: 'Deep Learning Foundations: Perceptrons & Backprop' },
        41: { url: 'https://www.youtube.com/embed/IHZwWFHWa-w', title: 'Activation Functions & Regularization in Medical Nets' },
        42: { url: 'https://www.youtube.com/embed/tPYj3Ngid4E', title: 'PyTorch for Medical Imaging & Tensor Acceleration' },
        43: { url: 'https://www.youtube.com/embed/zfiSAzpy9LC', title: 'Convolutional Neural Networks: Chest X-Ray & MRI' },
        44: { url: 'https://www.youtube.com/embed/UNmqTiXiR2c', title: 'Recurrent Neural Networks: ICU Waveforms & Vital Series' },
        45: { url: 'https://www.youtube.com/embed/M49520vM4vY', title: 'Clinical NLP: Clinical Notes, SpaCy & BioBERT' },
        46: { url: 'https://www.youtube.com/embed/SZorAJ4I-sA', title: 'Transformers & Self-Attention: Clinical Foundation Models' },
        47: { url: 'https://www.youtube.com/embed/bZQun8Y4L2A', title: 'Generative AI & LLMs in Healthcare Decision Support' },
        48: { url: 'https://www.youtube.com/embed/_ZvnD93Mr5Q', title: 'Prompt Engineering & Guardrails for Healthcare' },
        49: { url: 'https://www.youtube.com/embed/HcqpanDadyQ', title: 'Medical AI Ethics, Algorithmic Bias Audits & FDA SaMD' },
        50: { url: 'https://www.youtube.com/embed/zOjov-2OZ0E', title: 'Final Capstone Part 1: Problem Formulation & ETL' },
        51: { url: 'https://www.youtube.com/embed/aircAruvnKk', title: 'Final Capstone Part 2: Model Training & Tuning' },
        52: { url: 'https://www.youtube.com/embed/zOjov-2OZ0E', title: 'Final Capstone Graduation: Production MLOps Launch' }
    };

    // 2. CURATED EXTERNAL RESOURCES DIRECTORY
    window.phaseResources = {
        1: [
            { title: 'Microsoft Excel Official Documentation', url: 'https://support.microsoft.com/en-us/excel', tag: 'Official Docs' },
            { title: 'PhysioNet MIMIC-IV Clinical Database', url: 'https://physionet.org/content/mimiciv/', tag: 'Open Data' },
            { title: 'HHS HIPAA Security Rule & Technical Safeguards', url: 'https://www.hhs.gov/hipaa/for-professionals/security/laws-regulations/index.html', tag: 'Regulatory Spec' },
            { title: 'CDC WONDER Public Health Datasets', url: 'https://wonder.cdc.gov/', tag: 'Clinical Benchmark' }
        ],
        2: [
            { title: 'PostgreSQL Relational DB Official Manual', url: 'https://www.postgresql.org/docs/current/', tag: 'Official Docs' },
            { title: 'HL7 FHIR v4 Resource Specifications', url: 'https://hl7.org/fhir/R4/resourcelist.html', tag: 'Interoperability Spec' },
            { title: 'eICU Collaborative Research Database', url: 'https://physionet.org/content/eicu-crd/', tag: 'Clinical Benchmark' },
            { title: 'LOINC Laboratory Observational Identifiers', url: 'https://loinc.org/', tag: 'Ontology Guide' }
        ],
        3: [
            { title: 'Python 3.11 Official Standard Library Docs', url: 'https://docs.python.org/3/', tag: 'Official Docs' },
            { title: 'Pandas User Guide & DataFrame API Reference', url: 'https://pandas.pydata.org/docs/user_guide/', tag: 'Data Science Guide' },
            { title: 'openFDA Public Regulatory & Adverse Event APIs', url: 'https://open.fda.gov/apis/', tag: 'Open Data API' },
            { title: 'NIH NCBI PubMed Biomedical Literature API', url: 'https://www.ncbi.nlm.nih.gov/home/develop/api/', tag: 'Clinical Research' }
        ],
        4: [
            { title: 'PyTorch 2.0+ Deep Learning Documentation', url: 'https://pytorch.org/docs/stable/', tag: 'Deep Learning' },
            { title: 'Scikit-Learn Machine Learning User Guide', url: 'https://scikit-learn.org/stable/user_guide.html', tag: 'ML Framework' },
            { title: 'FDA SaMD (Software as a Medical Device) Action Plan', url: 'https://www.fda.gov/medical-devices/software-medical-device-samd', tag: 'FDA Regulatory' },
            { title: 'MIMIC-CXR Medical Chest X-Ray Database', url: 'https://physionet.org/content/mimic-cxr-jpg/', tag: 'Medical Imaging' }
        ]
    };

    // 3. MASTERCLASS LESSON GENERATOR
    window.getComprehensiveLesson = function(lessonId) {
        if (!lessonId) return null;

        // Parse weekNum and dayNum
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

        if (!currentModule) {
            console.warn('[MasterclassEngine]: Module not found for', lessonId);
            return null;
        }

        const phase = currentModule.phase || 1;
        const tools = currentModule.tools || ['Healthcare Data Systems'];
        const primaryTool = tools[0] || 'Clinical Systems';
        const secondaryTool = tools[1] || 'Medical Informatics';
        const dayTitle = currentDay ? currentDay.title : `${currentModule.title} - Day ${dayNum}`;
        const dayBrief = currentDay ? currentDay.brief : currentModule.overview;
        const dayMilestone = currentDay ? currentDay.milestone : `Complete Day ${dayNum} laboratory protocol.`;

        // Select Video
        const videoEntry = window.videoDirectory[weekNum] || {
            url: 'https://www.youtube.com/embed/Vl0H-qTclOg',
            title: `${currentModule.title} - Master Lecture`
        };

        // Select Resources
        const sources = window.phaseResources[phase] || window.phaseResources[1];

        // Determine Lesson Type
        let lessonType = 'data';
        if (phase >= 3) {
            lessonType = 'python';
        }

        // Generate Day Specific Objectives
        const objectives = [
            `Deconstruct the core theoretical, algorithmic, and architectural mechanics of ${dayTitle}.`,
            `Analyze real-world clinical implications across hospital departments, minimizing alert fatigue and preventing adverse patient events.`,
            `Implement hands-on protocol with defensive data engineering using ${primaryTool} and ${secondaryTool}.`,
            `Validate data integrity against regulatory healthcare standards (HIPAA §164.312, HL7 FHIR v4, and FDA SaMD).`
        ];

        // Synthesize Multi-Paragraph Theoretical Deep Dive (1,000+ words across sections)
        const theoryP1 = `Mastering <strong>${dayTitle}</strong> represents a pivotal milestone in the architecture of modern healthcare computing. In clinical data environments, systems must process vast streams of heterogeneous, time-critical information while ensuring absolute computational determinism. This mission deconstructs the foundational principles of <strong>${primaryTool}</strong>, examining how underlying memory hierarchies, data representation models, and execution runtimes interact under high-concurrency clinical hospital loads. Unlike conventional software domains where minor latency or unhandled edge cases cause benign glitches, clinical informatics software operates directly adjacent to patient care pathways where computational errors propagate into real-world diagnostic delays.`;

        const theoryP2 = `At the architectural level, <strong>${dayTitle}</strong> demands a rigorous understanding of structured abstraction. When working with ${secondaryTool}, data structures must be engineered to minimize computational complexity—reducing algorithmic time requirements from <em>O(N²)</em> brute-force traversals down to <em>O(N)</em> or <em>O(log N)</em> logarithmic indexes. Memory footprint must be carefully governed: buffer allocations in hospital telemetry servers and patient index registers require strictly bounded bounds to prevent kernel memory fragmentation and sudden pipeline crashes during high-volume emergency department admissions.`;

        const theoryP3 = `The computational protocol for today centers upon <em>${dayBrief}</em>. Engineers systematically configure data parsing pipelines, establish strict typing constraints, and apply mathematical normalization to prevent numerical underflow or floating-point rounding errors during drug concentration calculations or physiological scoring (such as SOFA, APACHE-II, or NEWS2 scores). By maintaining immutable audit trails and thread-safe data pipelines, learners guarantee that every diagnostic transformation is fully reproducible and forensically auditable.`;

        // Clinical Systems & Hospital Workflows
        const clinicalCase = currentModule.clinicalCaseStudy || 'The Regional Hospital Outage: Unmonitored memory leaks and unindexed clinical queries caused critical delays in patient telemetry feeds during peak admissions.';
        const clinicalApp = currentModule.clinicalApplication || 'Deployed across ICU bedside monitors, Epic/Cerner hosting enclaves, and HIPAA cloud vaults.';

        const clinicalP1 = `In production hospital systems, <strong>${dayTitle}</strong> directly interfaces with enterprise Electronic Health Record (EHR) platforms such as Epic Systems (Chronicles hierarchical database, Clarity relational data store, Caboodle data warehouse), Cerner Millennium, and MEDITECH. These clinical repositories ingest millions of physiological observation records daily. ${clinicalApp}`;

        const clinicalP2 = `<strong>Real-World Incident Analysis:</strong> ${clinicalCase} This incident highlights why defensive programming is an ethical prerequisite in healthcare engineering. When medical databases experience lock contention or unhandled null values during triage shifts, clinician workflow stalls. Nurses waiting for real-time lab results are forced to transition to paper downtime procedures, directly jeopardizing patient safety and delaying antibiotic administration in acute sepsis scenarios.`;

        const clinicalP3 = `<strong>Regulatory Compliance & Governance:</strong> Production implementations must adhere to the <em>HIPAA Security Rule (§164.312 Technical Safeguards)</em>, requiring end-to-end TLS 1.3 encryption in transit, AES-256 encryption at rest, role-based access control (RBAC), and non-repudiable audit logging. Furthermore, algorithms informing clinical triage must satisfy <em>FDA Software as a Medical Device (SaMD)</em> standards and <em>21 CFR Part 11</em> audit trail mandates.`;

        // Biomedical Telemetry & Standards
        const bioP1 = `Biomedical telemetry demands strict precision and standardized clinical codings. Today's protocol aligns with internationally recognized informatics vocabularies: <strong>LOINC (Logical Observation Identifiers Names and Codes)</strong> for laboratory tests and clinical observations, <strong>SNOMED-CT</strong> for clinical terminology and diagnoses, and <strong>ICD-10-CM</strong> for epidemiological classification. Telemetry feeds must also map seamlessly to <strong>HL7 FHIR v4 (Fast Healthcare Interoperability Resources)</strong>, specifically the <code>Patient</code>, <code>Encounter</code>, <code>Observation</code>, and <code>Condition</code> resources.`;

        const bioP2 = `<strong>Physiological Baseline Reference Telemetry:</strong> Clinical systems continuously evaluate patient observations against canonical adult reference ranges: Heart Rate (60–100 bpm; tachycardia > 100 bpm), Blood Pressure (Systolic 90–120 mmHg, Diastolic 60–80 mmHg), Mean Arterial Pressure (MAP = 1/3 SBP + 2/3 DBP; critical threshold < 65 mmHg indicating organ hypoperfusion), Pulse Oximetry (SpO2 ≥ 95%; hypoxemia < 90%), Arterial Blood Gas pH (7.35–7.45), and Serum Creatinine (0.7–1.3 mg/dL). Out-of-range sensor readings must be distinguished from sensor artifact through temporal smoothing.`;

        // Engineering Pitfalls
        const pitfall1 = `<strong>1. The Null / Missing Value Ambiguity Trap:</strong> In clinical datasets, missing or null entries are rarely missing completely at random (MCAR). A missing arterial blood gas value typically indicates the patient was breathing comfortably and did not require an invasive arterial puncture. Imputing nulls with mean values or zero introduces catastrophic diagnostic bias into machine learning models.`;

        const pitfall2 = `<strong>2. Temporal Leakage & Daylight Savings Skew:</strong> Recording timestamps without explicit UTC offsets (ISO 8601 format) causes severe temporal inversion when clocks shift during daylight savings transitions. In critical care, an inverted timestamp can record a medication as having been administered before it was ordered, corrupting time-series models and triggering erroneous medical error alerts.`;

        const pitfall3 = `<strong>3. Concurrency Lock Contention:</strong> Running unindexed queries or unbounded analytics operations on production clinical databases locks critical patient tables. Analytics pipelines must always query read-only replica databases (e.g. Epic Clarity) rather than transactional real-time operational datastores (Chronicles) to prevent freezing bedside charting monitors.`;

        // Starter Code & Lab Data
        let starterCode = '';
        let labData = [];
        let taskTarget = '';
        let taskInstruction = '';

        if (phase === 1) {
            taskInstruction = 'Locate the clinical record with Status = "CRITICAL" in the ICU admission table.';
            taskTarget = 'CRITICAL';
            starterCode = `# Excel / Logic Simulation: Patient Admission Triage Audit\n# Mission: Audit admission records and identify critical vitals\npatients = [\n    {"patient_id": "P-101", "name": "Elena Rostova", "hr": 74, "spo2": 98, "status": "STABLE"},\n    {"patient_id": "P-102", "name": "Marcus Vance", "hr": 142, "spo2": 88, "status": "CRITICAL"},\n    {"patient_id": "P-103", "name": "Sarah Jenkins", "hr": 68, "spo2": 99, "status": "STABLE"},\n    {"patient_id": "P-104", "name": "David Kim", "hr": 82, "spo2": 96, "status": "STABLE"}\n]\n\nprint("=== HOSPITAL ICU ADMISSION & VITALS AUDIT ===")\nfor p in patients:\n    flag = "[ALERT]" if p["status"] == "CRITICAL" else "[OK]"\n    print(f"{flag} ID: {p['patient_id']} | Name: {p['name']:15} | HR: {p['hr']:3} bpm | SpO2: {p['spo2']}% => {p['status']}")\n`;
            labData = [
                { Patient_ID: 'P-101', Name: 'Elena Rostova', HR_bpm: 74, SpO2: '98%', Status: 'STABLE' },
                { Patient_ID: 'P-102', Name: 'Marcus Vance', HR_bpm: 142, SpO2: '88%', Status: 'CRITICAL' },
                { Patient_ID: 'P-103', Name: 'Sarah Jenkins', HR_bpm: 68, SpO2: '99%', Status: 'STABLE' },
                { Patient_ID: 'P-104', Name: 'David Kim', HR_bpm: 82, SpO2: '96%', Status: 'STABLE' }
            ];
        } else if (phase === 2) {
            taskInstruction = 'Find the clinical cohort record diagnosed with "Type 2 Diabetes".';
            taskTarget = 'Type 2 Diabetes';
            starterCode = `# Relational SQL Query Simulator in Python\nimport sqlite3\n\nconn = sqlite3.connect(":memory:")\ncur = conn.cursor()\n\n# 1. Initialize MIMIC-IV Simulated Hospital Tables\ncur.execute("""\n    CREATE TABLE patients (\n        subject_id INT PRIMARY KEY,\n        gender TEXT,\n        anchor_age INT,\n        diagnosis TEXT,\n        triage_status TEXT\n    )\n""")\n\ncur.executemany("INSERT INTO patients VALUES (?, ?, ?, ?, ?)", [\n    (1001, "F", 54, "Hypertension", "Routine"),\n    (1002, "M", 67, "Type 2 Diabetes", "Priority"),\n    (1003, "F", 42, "Asthma", "Routine"),\n    (1004, "M", 71, "Congestive Heart Failure", "Priority")\n])\n\n# 2. Query High-Risk Cohort\ncur.execute("SELECT subject_id, gender, anchor_age, diagnosis FROM patients WHERE diagnosis = 'Type 2 Diabetes'")\nrows = cur.fetchall()\n\nprint("=== MIMIC-IV RELATIONAL COHORT QUERY RESULT ===")\nfor r in rows:\n    print(f"Subject: {r[0]} | Gender: {r[1]} | Age: {r[2]} | Diagnosis: {r[3]}")\n`;
            labData = [
                { Subject_ID: 1001, Gender: 'F', Age: 54, Diagnosis: 'Hypertension', Triage: 'Routine' },
                { Subject_ID: 1002, Gender: 'M', Age: 67, Diagnosis: 'Type 2 Diabetes', Triage: 'Priority' },
                { Subject_ID: 1003, Gender: 'F', Age: 42, Diagnosis: 'Asthma', Triage: 'Routine' },
                { Subject_ID: 1004, Gender: 'M', Age: 71, Diagnosis: 'CHF', Triage: 'Priority' }
            ];
        } else if (phase === 3) {
            taskInstruction = 'Execute the Python script to identify the gene sample flagged as MUTATED.';
            taskTarget = 'MUTATED';
            starterCode = `# Python Data Science & Bioinformatics Pipeline\nimport pandas as pd\n\n# Clinical Gene Expression Cohort\ndata = {\n    "Sample_ID": ["SMPL-01", "SMPL-02", "SMPL-03", "SMPL-04"],\n    "Gene_Symbol": ["BRCA1", "TP53", "EGFR", "KRAS"],\n    "Expression_TPM": [4.2, 18.9, 2.1, 14.5],\n    "Mutation_Status": ["NORMAL", "MUTATED", "NORMAL", "NORMAL"]\n}\n\ndf = pd.DataFrame(data)\nprint("=== CLINICAL ONCOLOGY GENOMIC MATRIX ===")\nprint(df)\n\n# Filter Mutated Markers\nmutated_cohort = df[df["Mutation_Status"] == "MUTATED"]\nprint("\\n=== HIGH RISK MUTATED ONCOGENE DETECTED ===")\nprint(mutated_cohort[["Sample_ID", "Gene_Symbol", "Expression_TPM"]])\n`;
            labData = [
                { Sample_ID: 'SMPL-01', Gene: 'BRCA1', TPM: 4.2, Mutation_Status: 'NORMAL' },
                { Sample_ID: 'SMPL-02', Gene: 'TP53', TPM: 18.9, Mutation_Status: 'MUTATED' },
                { Sample_ID: 'SMPL-03', Gene: 'EGFR', TPM: 2.1, Mutation_Status: 'NORMAL' },
                { Sample_ID: 'SMPL-04', Gene: 'KRAS', TPM: 14.5, Mutation_Status: 'NORMAL' }
            ];
        } else {
            taskInstruction = 'Execute the Neural Network model to locate the AI Diagnosis output of "HIGH RISK".';
            taskTarget = 'HIGH RISK';
            starterCode = `# Clinical Deep Learning & AI Diagnostic Model\nimport numpy as np\n\ndef sigmoid(x):\n    return 1 / (1 + np.exp(-x))\n\n# Normalized Patient Feature Vector: [Age, Systolic_BP, Troponin_Level]\nfeatures = np.array([0.82, 0.94, 0.76])\nweights = np.array([1.8, 2.2, 1.5])\nbias = -1.9\n\n# Feed-Forward Pass\nz = np.dot(features, weights) + bias\nrisk_probability = sigmoid(z)\n\nprint("=== NEURAL INFERENCE ENGINE: ACUTE CARDIAC RISK ===")\nprint(f"Logit Activation (z): {z:.4f}")\nprint(f"Predicted Cardiac Mortality Probability: {risk_probability * 100:.2f}%")\n\nif risk_probability > 0.5:\n    print("AI Diagnosis: HIGH RISK (Immediate Triage Recommended)")\nelse:\n    print("AI Diagnosis: LOW RISK (Standard Observation)")\n`;
            labData = [
                { Patient_Case: 'Case-401', Age_Norm: 0.82, SBP_Norm: 0.94, Risk_Prob: '84.2%', AI_Diagnosis: 'HIGH RISK' },
                { Patient_Case: 'Case-402', Age_Norm: 0.35, SBP_Norm: 0.42, Risk_Prob: '12.8%', AI_Diagnosis: 'LOW RISK' },
                { Patient_Case: 'Case-403', Age_Norm: 0.45, SBP_Norm: 0.51, Risk_Prob: '22.1%', AI_Diagnosis: 'LOW RISK' },
                { Patient_Case: 'Case-404', Age_Norm: 0.55, SBP_Norm: 0.60, Risk_Prob: '35.4%', AI_Diagnosis: 'LOW RISK' }
            ];
        }

        // Generate Topic Quiz
        const quiz = {
            question: `In production clinical systems implementing "${dayTitle}", why is strict defensive validation required before updating patient records or algorithmic risk scores?`,
            options: [
                { text: 'To prevent silent data corruption, eliminate fatal false negatives, and comply with FDA SaMD & HIPAA regulations.', correct: true },
                { text: 'To intentionally bypass security auditing pipelines and accelerate software delivery.', correct: false },
                { text: 'To drop patient edge-cases that deviate from Gaussian normal distributions.', correct: false },
                { text: 'To replace clinician diagnostic oversight entirely with unverified heuristic rules.', correct: false }
            ],
            explanation: `Rigorous defensive validation in ${primaryTool} prevents corrupted sensor readings or anomalous queries from triggering erroneous clinical interventions, ensuring complete patient safety and regulatory compliance.`
        };

        return {
            id: lessonId,
            dayId: currentDay ? currentDay.id : `week-${weekNum}-d${dayNum}`,
            weekNum: weekNum,
            dayNum: dayNum,
            title: dayTitle,
            moduleTitle: currentModule.title,
            phase: phase,
            phaseName: currentModule.phaseName || `Phase ${phase}`,
            level: currentModule.level || 'Intermediate Healthcare Analytics',
            duration: '45-60 min',
            tools: tools,
            brief: dayBrief,
            milestone: dayMilestone,
            video: videoEntry.url,
            videoTitle: videoEntry.title,
            sources: sources,
            type: lessonType,
            code_start: starterCode,
            data: labData,
            task: {
                type: 'find-value',
                targetColumn: phase === 1 ? 'Status' : (phase === 2 ? 'Diagnosis' : (phase === 3 ? 'Mutation_Status' : 'AI_Diagnosis')),
                condition: (val) => val === taskTarget,
                successMessage: `Accreditation Complete: ${dayTitle} validation verified. +100 XP awarded.`,
                errorMessage: taskInstruction
            },
            quiz: quiz,
            objectives: objectives,
            theoryP1: theoryP1,
            theoryP2: theoryP2,
            theoryP3: theoryP3,
            clinicalP1: clinicalP1,
            clinicalP2: clinicalP2,
            clinicalP3: clinicalP3,
            bioP1: bioP1,
            bioP2: bioP2,
            pitfall1: pitfall1,
            pitfall2: pitfall2,
            pitfall3: pitfall3,
            videoUrl: videoEntry.url,
            description: `${theoryP1}\n\n${theoryP2}\n\n${theoryP3}`,
            techDesc: `${theoryP1}\n\n${theoryP2}\n\n${theoryP3}`,
            healthDesc: `${clinicalP1}\n\n${clinicalP2}\n\n${clinicalP3}`,
            bioDesc: `${bioP1}\n\n${bioP2}`,
            labInstructions: taskInstruction,
            taskInstruction: taskInstruction,
            starterCode: starterCode,
            pitfalls: `${pitfall1}\n\n${pitfall2}\n\n${pitfall3}`,
            story: `
                <div class="quad-track">
                    <div class="track-section tech">
                        <h4>💻 1. Core Mechanics</h4>
                        <p>${theoryP1}</p>
                    </div>
                    <div class="track-section health">
                        <h4>🏥 2. Clinical Systems</h4>
                        <p>${clinicalP1}</p>
                    </div>
                    <div class="track-section bio">
                        <h4>🧬 3. Bio-Telemetry</h4>
                        <p>${bioP1}</p>
                    </div>
                    <div class="track-section lab">
                        <h4>🧪 4. Lab Protocol</h4>
                        <p><strong>Mission:</strong> ${dayMilestone} ${taskInstruction}</p>
                    </div>
                </div>
            `
        };
    };


    // HELPER: Standalone Safe Table Renderer
    function renderMasterTable(data) {
        if (!data || !Array.isArray(data) || data.length === 0) {
            return '<div style="padding: 16px; color: #94a3b8; font-family: \'JetBrains Mono\';">> No structured tabular records for this protocol.</div>';
        }
        const headers = Object.keys(data[0]);
        let html = '<table class="data-table" style="width: 100%; border-collapse: collapse; font-family: \'JetBrains Mono\', monospace; font-size: 0.85rem;">';
        html += '<thead><tr style="background: rgba(255,255,255,0.06); text-align: left;">';
        headers.forEach(h => {
            html += `<th style="padding: 10px 14px; border-bottom: 1px solid rgba(255,255,255,0.1); color: var(--accent-cyan); font-weight: 600;">${h}</th>`;
        });
        html += '</tr></thead><tbody>';
        data.forEach((row, idx) => {
            html += `<tr style="border-bottom: 1px solid rgba(255,255,255,0.04); background: ${idx % 2 === 0 ? 'transparent' : 'rgba(255,255,255,0.02)'};">`;
            headers.forEach(h => {
                const val = row[h] !== undefined ? row[h] : '';
                html += `<td onclick="if(typeof handleCellClick === 'function') handleCellClick('${val}', this)" style="padding: 10px 14px; color: #cbd5e1; cursor: pointer;">${val}</td>`;
            });
            html += '</tr>';
        });
        html += '</tbody></table>';
        return html;
    }
    window.renderMasterTable = renderMasterTable;
    if (typeof window.renderTable !== 'function') {
        window.renderTable = renderMasterTable;
    }

    // HELPER: Standalone Board-Style Quiz Renderer
    function renderMasterQuiz(lesson) {
        if (!lesson || !lesson.quiz) return '';
        const quiz = lesson.quiz;
        const optionsHtml = (quiz.options || []).map((opt, i) => `
            <button onclick="window.handleMasterQuizSelection(${i}, ${opt.correct === true})"
                    class="master-quiz-opt"
                    id="quiz-opt-${i}"
                    style="display: flex; align-items: center; gap: 12px; width: 100%; text-align: left; padding: 14px 18px; border-radius: 12px; background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.1); color: #e2e8f0; font-family: 'Plus Jakarta Sans', sans-serif; font-size: 0.92rem; cursor: pointer; transition: all 0.2s ease;">
                <span style="font-family: 'JetBrains Mono'; font-weight: 700; color: #38bdf8; background: rgba(56,189,248,0.12); padding: 4px 8px; border-radius: 6px;">${String.fromCharCode(65 + i)}</span>
                <span style="flex: 1;">${opt.text}</span>
            </button>
        `).join('');

        return `
            <div class="glass-refractive" style="border-radius: 20px; padding: 32px; border: 1px solid rgba(139, 92, 246, 0.35); background: rgba(23, 15, 38, 0.85); box-shadow: 0 10px 30px rgba(0,0,0,0.5);">
                <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 20px; border-bottom: 1px solid rgba(255,255,255,0.08); padding-bottom: 14px; flex-wrap: wrap; gap: 10px;">
                    <div style="display: flex; align-items: center; gap: 10px;">
                        <span style="font-size: 1.5rem;">🧠</span>
                        <div>
                            <span style="font-family: 'JetBrains Mono'; font-size: 0.72rem; color: #c084fc; text-transform: uppercase; font-weight: 700;">PART VI • BOARD-STYLE CLINICAL KNOWLEDGE CHECK</span>
                            <h2 style="font-family: 'Space Grotesk'; font-size: 1.45rem; font-weight: 700; color: white; margin: 0;">
                                Clinical Reasoning & Regulatory Accreditation Assessment
                            </h2>
                        </div>
                    </div>
                    <span style="font-family: 'JetBrains Mono'; font-size: 0.72rem; color: #c084fc; background: rgba(192,132,252,0.12); padding: 4px 12px; border-radius: 9999px; border: 1px solid rgba(192,132,252,0.3);">
                        +100 Clinical Mastery XP
                    </span>
                </div>

                <div style="margin-bottom: 22px;">
                    <p style="font-family: 'Space Grotesk', sans-serif; font-size: 1.05rem; font-weight: 600; color: #f8fafc; line-height: 1.6; margin: 0 0 18px 0;">
                        ${quiz.question}
                    </p>
                    <div style="display: flex; flex-direction: column; gap: 10px;" id="quiz-options-container">
                        ${optionsHtml}
                    </div>
                </div>

                <div id="quiz-explanation-box" style="display: none; padding: 18px 22px; border-radius: 12px; font-family: 'Plus Jakarta Sans', sans-serif; font-size: 0.92rem; line-height: 1.6; margin-top: 16px;">
                    <!-- Injected on answer click -->
                </div>
            </div>
        `;
    }
    window.renderMasterQuiz = renderMasterQuiz;

    window.handleMasterQuizSelection = function(index, isCorrect) {
        if (typeof triggerHaptic === 'function') triggerHaptic(isCorrect ? 'heavy' : 'medium');
        const box = document.getElementById('quiz-explanation-box');
        const allOpts = document.querySelectorAll('.master-quiz-opt');
        allOpts.forEach(btn => {
            btn.style.pointerEvents = 'none';
        });

        const activeOpt = document.getElementById(`quiz-opt-${index}`);
        if (isCorrect) {
            if (activeOpt) {
                activeOpt.style.background = 'rgba(16, 185, 129, 0.2)';
                activeOpt.style.borderColor = '#10b981';
                activeOpt.style.color = '#a7f3d0';
            }
            if (box) {
                box.style.display = 'block';
                box.style.background = 'rgba(16, 185, 129, 0.12)';
                box.style.border = '1px solid rgba(16, 185, 129, 0.35)';
                box.style.color = '#d1fae5';
                box.innerHTML = `<strong>✅ Correct!</strong> ${window.activeLessonContext && window.activeLessonContext.quiz ? window.activeLessonContext.quiz.explanation : 'Excellent clinical decision.'}`;
            }
            if (typeof addXP === 'function') addXP(100);
        } else {
            if (activeOpt) {
                activeOpt.style.background = 'rgba(239, 68, 68, 0.2)';
                activeOpt.style.borderColor = '#ef4444';
                activeOpt.style.color = '#fca5a5';
            }
            if (box) {
                box.style.display = 'block';
                box.style.background = 'rgba(239, 68, 68, 0.12)';
                box.style.border = '1px solid rgba(239, 68, 68, 0.35)';
                box.style.color = '#fee2e2';
                box.innerHTML = `<strong>⚠️ Incorrect.</strong> ${window.activeLessonContext && window.activeLessonContext.quiz ? window.activeLessonContext.quiz.explanation : 'Review the clinical architecture above.'}`;
            }
        }
    };

    // 4. MASTER LESSON VIEW RENDERER
    window.renderMasterLessonView = function(lesson, dayId) {
        if (!lesson) return;

        window.activeLessonContext = lesson;
        if (window.AudioBriefing && window.AudioBriefing.isPlaying) {
            window.AudioBriefing.stop();
        }

        const isPythonLesson = lesson.type === 'python';

        // Update dynamic page title
        const titleEl = document.getElementById('page-title');
        if (titleEl) titleEl.innerText = `${lesson.title}`;

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

        const heroContent = `
            <div class="masterclass-lesson-container" id="masterclass-top" style="max-width: 1440px; margin: 0 auto; padding-bottom: 24px;">

                <!-- 1. BREADCRUMBS & BADGES HEADER -->
                <div class="lesson-header-dossier" style="display: flex; flex-direction: column; gap: 12px; margin-bottom: 24px; padding-bottom: 20px; border-bottom: 1px solid rgba(255,255,255,0.08);">
                    <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 12px;">
                        <div style="display: flex; align-items: center; gap: 8px; flex-wrap: wrap;">
                            <button onclick="window.scrollAppTo('#curriculum-master-matrix')" class="btn-neural" style="font-family: 'Space Grotesk', sans-serif; font-size: 0.8rem; font-weight: 700; padding: 7px 14px; border-radius: 8px; border-color: var(--accent-cyan); color: var(--accent-cyan); background: rgba(6,182,212,0.12); display: inline-flex; align-items: center; gap: 6px;" title="Jump to Complete 52-Week Curriculum Matrix Below">
                                <span>📋</span> 52 WEEKS SYLLABUS
                            </button>
                            <button onclick="window.navigateLessonStep(-1)" class="btn-neural" style="font-family: 'JetBrains Mono'; font-size: 0.78rem; padding: 7px 12px; border-radius: 8px; display: inline-flex; align-items: center; gap: 4px;" title="Previous Day Mission">
                                <span>◀</span> Prev Day
                            </button>
                            <button onclick="window.navigateLessonStep(1)" class="btn-neural" style="font-family: 'JetBrains Mono'; font-size: 0.78rem; padding: 7px 12px; border-radius: 8px; display: inline-flex; align-items: center; gap: 4px;" title="Next Day Mission">
                                Next Day <span>▶</span>
                            </button>
                            <button id="lesson-audio-btn" onclick="window.toggleAudioBriefing()" class="btn-neural" style="font-family: 'JetBrains Mono'; font-size: 0.75rem; padding: 7px 12px; border-radius: 8px; display: inline-flex; align-items: center; gap: 6px; border-color: var(--accent-pink); color: var(--accent-pink);" title="Listen to AI Audio Briefing">
                                <span id="audio-icon">🎧</span> <span id="audio-btn-label">Audio Briefing</span>
                            </button>
                        </div>

                        <div style="display: flex; align-items: center; gap: 8px; flex-wrap: wrap;">
                            <span style="font-family: 'JetBrains Mono'; font-size: 0.72rem; color: #38bdf8; background: rgba(56,189,248,0.12); border: 1px solid rgba(56,189,248,0.3); padding: 4px 10px; border-radius: 6px;">
                                ${lesson.phaseName}
                            </span>
                            <span style="font-family: 'JetBrains Mono'; font-size: 0.72rem; color: #10b981; background: rgba(16,185,129,0.12); border: 1px solid rgba(16,185,129,0.3); padding: 4px 10px; border-radius: 6px;">
                                ⏱️ ${lesson.duration}
                            </span>
                            <span style="font-family: 'JetBrains Mono'; font-size: 0.72rem; color: #f59e0b; background: rgba(245,158,11,0.12); border: 1px solid rgba(245,158,11,0.3); padding: 4px 10px; border-radius: 6px;">
                                ⭐ +100 XP
                            </span>
                        </div>
                    </div>

                    <div>
                        <div style="font-family: 'JetBrains Mono', monospace; font-size: 0.75rem; color: var(--accent-cyan); margin-bottom: 4px; letter-spacing: 0.5px;">
                            WEEK ${lesson.weekNum} • MISSION DAY ${lesson.dayNum} // NODE: ${lesson.id}
                        </div>
                        <h1 class="text-gradient" style="font-family: 'Space Grotesk', sans-serif; font-size: clamp(1.6rem, 3.5vw, 2.4rem); font-weight: 800; line-height: 1.2; margin: 0 0 8px 0; color: white;">
                            ${lesson.title}
                        </h1>
                        <div style="font-family: 'Plus Jakarta Sans', sans-serif; font-size: 0.95rem; color: #94a3b8; line-height: 1.5; max-width: 1000px;">
                            ${lesson.brief}
                        </div>
                    </div>

                    <!-- STICKY SECTION JUMP NAVIGATION PILLS -->
                    <div class="lesson-quick-jump-bar" style="display: flex; align-items: center; gap: 8px; flex-wrap: wrap; background: rgba(13, 17, 34, 0.85); border: 1px solid rgba(56, 189, 248, 0.25); border-radius: 12px; padding: 8px 14px; margin-top: 8px;">
                        <span style="font-family: 'JetBrains Mono'; font-size: 0.7rem; color: var(--text-muted); text-transform: uppercase; margin-right: 4px;">Jump to:</span>
                        <a href="javascript:void(0)" onclick="window.scrollToSection('#lesson-video-theater')" class="jump-pill">🎥 Video Lecture</a>
                        <a href="javascript:void(0)" onclick="window.scrollToSection('#lesson-theory-deepdive')" class="jump-pill">📘 Theory & Mechanics</a>
                        <a href="javascript:void(0)" onclick="window.scrollToSection('#lesson-clinical-systems')" class="jump-pill">🏥 Clinical Systems & Impact</a>
                        <a href="javascript:void(0)" onclick="window.scrollToSection('#lesson-telemetry-standards')" class="jump-pill">🧬 Biomedical Telemetry</a>
                        <a href="javascript:void(0)" onclick="window.scrollToSection('#lesson-engineering-pitfalls')" class="jump-pill">⚠️ Pitfalls & Traps</a>
                        <a href="javascript:void(0)" onclick="window.scrollToSection('#lesson-interactive-lab')" class="jump-pill">🧪 Hands-On Lab</a>
                        <a href="javascript:void(0)" onclick="window.scrollToSection('#lesson-knowledge-quiz')" class="jump-pill">🧠 Knowledge Quiz</a>
                        <a href="javascript:void(0)" onclick="window.scrollToSection('#lesson-curated-resources')" class="jump-pill">📚 Curated Resources</a>
                        <a href="javascript:void(0)" onclick="window.scrollToSection('#curriculum-master-matrix')" class="jump-pill jump-pill-accent">⬇ 52 Weeks Syllabus</a>
                    </div>
                </div>

                <!-- 2. HIGH-DEFINITION VIDEO LECTURE THEATER -->
                <div id="lesson-video-theater" class="glass-refractive" style="border-radius: 20px; padding: 24px; margin-bottom: 32px; border: 1px solid rgba(56, 189, 248, 0.25); box-shadow: 0 10px 30px rgba(0,0,0,0.5);">
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px; flex-wrap: wrap; gap: 12px;">
                        <div>
                            <div style="display: inline-flex; align-items: center; gap: 6px; font-family: 'JetBrains Mono'; font-size: 0.72rem; color: var(--accent-cyan); font-weight: 700; text-transform: uppercase;">
                                <span>🎬</span> Official Video Lecture
                            </div>
                            <h3 style="font-family: 'Space Grotesk'; font-size: 1.25rem; font-weight: 700; color: white; margin: 4px 0 0 0;">
                                ${lesson.videoTitle}
                            </h3>
                        </div>
                        <div style="display: flex; gap: 10px; flex-wrap: wrap;">
                            <a href="${lesson.video.replace('/embed/', '/watch?v=').split('?')[0]}" target="_blank" class="btn-neural" style="font-family: 'JetBrains Mono'; font-size: 0.78rem; text-decoration: none; padding: 8px 14px; border-radius: 8px; display: inline-flex; align-items: center; gap: 6px; border-color: rgba(255,255,255,0.2); color: #cbd5e1;">
                                <span>↗</span> Open on YouTube
                            </a>
                            <button onclick="window.toggleWorkspaceZenMode()" class="btn-neural" style="font-family: 'JetBrains Mono'; font-size: 0.78rem; padding: 8px 14px; border-radius: 8px; display: inline-flex; align-items: center; gap: 6px; border-color: var(--accent-violet); color: var(--accent-violet);">
                                <span>🖥️</span> Theater Mode
                            </button>
                            <button onclick="window.scrollAppDown(600)" class="btn-neural" style="font-family: 'JetBrains Mono'; font-size: 0.78rem; padding: 8px 14px; border-radius: 8px; display: inline-flex; align-items: center; gap: 6px; border-color: var(--accent-cyan); color: var(--accent-cyan); background: rgba(6,182,212,0.1);">
                                <span>⬇</span> Scroll Down to Theory
                            </button>
                        </div>
                    </div>

                    <div class="video-refractive-frame" style="border-radius: 16px; overflow: hidden; background: #000; aspect-ratio: 16/9; width: 100%; border: 1px solid rgba(255,255,255,0.1); box-shadow: 0 8px 28px rgba(0,0,0,0.6);">
                        <iframe src="${lesson.video}" style="width: 100%; height: 100%;" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
                </div>

                <!-- 3. LEARNING OBJECTIVES GRID -->
                <div class="glass-refractive" style="border-radius: 16px; padding: 24px 28px; margin-bottom: 32px; border: 1px solid rgba(16, 185, 129, 0.25); background: rgba(13, 24, 34, 0.75);">
                    <h3 style="font-family: 'Space Grotesk'; font-size: 1.15rem; font-weight: 700; color: #10b981; margin: 0 0 16px 0; display: flex; align-items: center; gap: 8px;">
                        <span>🎯</span> Key Learning Objectives for Today
                    </h3>
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 14px;">
                        ${lesson.objectives.map((obj, i) => `
                            <div style="display: flex; align-items: flex-start; gap: 10px; background: rgba(255,255,255,0.03); padding: 12px 14px; border-radius: 10px; border-left: 3px solid #10b981;">
                                <span style="font-family: 'JetBrains Mono'; font-weight: 700; color: #10b981; font-size: 0.85rem;">0${i+1}.</span>
                                <span style="font-family: 'Plus Jakarta Sans'; font-size: 0.88rem; color: #cbd5e1; line-height: 1.5;">${obj}</span>
                            </div>
                        `).join('')}
                    </div>
                </div>

                <!-- 4. SECTION I: THEORETICAL FOUNDATIONS & COMPUTATIONAL MECHANICS -->
                <div id="lesson-theory-deepdive" class="glass-refractive" style="border-radius: 18px; padding: 32px; margin-bottom: 32px; border: 1px solid rgba(56, 189, 248, 0.3); background: rgba(13, 17, 34, 0.85);">
                    <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 20px; border-bottom: 1px solid rgba(255,255,255,0.08); padding-bottom: 14px; flex-wrap: wrap; gap: 10px;">
                        <div style="display: flex; align-items: center; gap: 10px;">
                            <span style="font-size: 1.4rem;">📘</span>
                            <div>
                                <span style="font-family: 'JetBrains Mono'; font-size: 0.7rem; color: #38bdf8; text-transform: uppercase; font-weight: 700;">PART I • ARCHITECTURAL EXPOSITION</span>
                                <h2 style="font-family: 'Space Grotesk'; font-size: 1.4rem; font-weight: 700; color: white; margin: 0;">
                                    Theoretical Foundations & Computational Mechanics
                                </h2>
                            </div>
                        </div>
                        <span style="font-family: 'JetBrains Mono'; font-size: 0.72rem; color: var(--text-muted); background: rgba(255,255,255,0.05); padding: 4px 10px; border-radius: 6px;">
                            Tools: ${lesson.tools.join(' • ')}
                        </span>
                    </div>

                    <div class="academic-text-body" style="font-family: 'Plus Jakarta Sans', sans-serif; font-size: 0.96rem; line-height: 1.75; color: #cbd5e1; display: flex; flex-direction: column; gap: 18px;">
                        <p style="margin: 0;">${lesson.theoryP1}</p>
                        <p style="margin: 0;">${lesson.theoryP2}</p>
                        <p style="margin: 0;">${lesson.theoryP3}</p>
                    </div>
                </div>

                <!-- 5. SECTION II: HEALTHCARE ECOSYSTEM & CLINICAL SYSTEMS INTEGRATION -->
                <div id="lesson-clinical-systems" class="glass-refractive" style="border-radius: 18px; padding: 32px; margin-bottom: 32px; border: 1px solid rgba(244, 114, 182, 0.3); background: rgba(24, 13, 28, 0.75);">
                    <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 20px; border-bottom: 1px solid rgba(255,255,255,0.08); padding-bottom: 14px; flex-wrap: wrap; gap: 10px;">
                        <div style="display: flex; align-items: center; gap: 10px;">
                            <span style="font-size: 1.4rem;">🏥</span>
                            <div>
                                <span style="font-family: 'JetBrains Mono'; font-size: 0.7rem; color: #f472b6; text-transform: uppercase; font-weight: 700;">PART II • HOSPITAL WORKFLOW & PATIENT SAFETY</span>
                                <h2 style="font-family: 'Space Grotesk'; font-size: 1.4rem; font-weight: 700; color: white; margin: 0;">
                                    Healthcare Systems Architecture & Clinical Impact
                                </h2>
                            </div>
                        </div>
                        <span style="font-family: 'JetBrains Mono'; font-size: 0.72rem; color: #f472b6; background: rgba(244,114,182,0.1); padding: 4px 10px; border-radius: 6px;">
                            HIPAA §164.312 • FDA SaMD Compliant
                        </span>
                    </div>

                    <div class="academic-text-body" style="font-family: 'Plus Jakarta Sans', sans-serif; font-size: 0.96rem; line-height: 1.75; color: #cbd5e1; display: flex; flex-direction: column; gap: 18px;">
                        <p style="margin: 0;">${lesson.clinicalP1}</p>
                        <div style="background: rgba(244, 114, 182, 0.08); border-left: 4px solid #f472b6; padding: 16px 20px; border-radius: 0 10px 10px 0;">
                            <p style="margin: 0; color: #fce7f3; font-weight: 500;">${lesson.clinicalP2}</p>
                        </div>
                        <p style="margin: 0;">${lesson.clinicalP3}</p>
                    </div>
                </div>

                <!-- 6. SECTION III: BIOMEDICAL TELEMETRY & INFORMATICS STANDARDS -->
                <div id="lesson-telemetry-standards" class="glass-refractive" style="border-radius: 18px; padding: 32px; margin-bottom: 32px; border: 1px solid rgba(52, 211, 153, 0.3); background: rgba(13, 28, 22, 0.75);">
                    <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 20px; border-bottom: 1px solid rgba(255,255,255,0.08); padding-bottom: 14px; flex-wrap: wrap; gap: 10px;">
                        <div style="display: flex; align-items: center; gap: 10px;">
                            <span style="font-size: 1.4rem;">🧬</span>
                            <div>
                                <span style="font-family: 'JetBrains Mono'; font-size: 0.7rem; color: #34d399; text-transform: uppercase; font-weight: 700;">PART III • INFORMATICS & TELEMETRY</span>
                                <h2 style="font-family: 'Space Grotesk'; font-size: 1.4rem; font-weight: 700; color: white; margin: 0;">
                                    Biomedical Telemetry, LOINC/SNOMED & Reference Ranges
                                </h2>
                            </div>
                        </div>
                        <span style="font-family: 'JetBrains Mono'; font-size: 0.72rem; color: #34d399; background: rgba(52,211,153,0.1); padding: 4px 10px; border-radius: 6px;">
                            HL7 FHIR v4 • Physiological Baselines
                        </span>
                    </div>

                    <div class="academic-text-body" style="font-family: 'Plus Jakarta Sans', sans-serif; font-size: 0.96rem; line-height: 1.75; color: #cbd5e1; display: flex; flex-direction: column; gap: 18px;">
                        <p style="margin: 0;">${lesson.bioP1}</p>
                        <div style="background: rgba(52, 211, 153, 0.08); border-left: 4px solid #34d399; padding: 16px 20px; border-radius: 0 10px 10px 0;">
                            <p style="margin: 0; color: #d1fae5; font-weight: 500;">${lesson.bioP2}</p>
                        </div>
                    </div>
                </div>

                <!-- 7. SECTION IV: ENGINEERING PITFALLS & DEFENSIVE GUARDRAILS -->
                <div id="lesson-engineering-pitfalls" class="glass-refractive" style="border-radius: 18px; padding: 32px; margin-bottom: 32px; border: 1px solid rgba(245, 158, 11, 0.3); background: rgba(28, 22, 13, 0.75);">
                    <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 20px; border-bottom: 1px solid rgba(255,255,255,0.08); padding-bottom: 14px; flex-wrap: wrap; gap: 10px;">
                        <div style="display: flex; align-items: center; gap: 10px;">
                            <span style="font-size: 1.4rem;">⚠️</span>
                            <div>
                                <span style="font-family: 'JetBrains Mono'; font-size: 0.7rem; color: #f59e0b; text-transform: uppercase; font-weight: 700;">PART IV • DEFENSIVE PRODUCTION ENGINEERING</span>
                                <h2 style="font-family: 'Space Grotesk'; font-size: 1.4rem; font-weight: 700; color: white; margin: 0;">
                                    Real-World Healthcare Engineering Pitfalls & Failure Modes
                                </h2>
                            </div>
                        </div>
                        <span style="font-family: 'JetBrains Mono'; font-size: 0.72rem; color: #f59e0b; background: rgba(245,158,11,0.1); padding: 4px 10px; border-radius: 6px;">
                            Defensive Guardrails
                        </span>
                    </div>

                    <div style="display: flex; flex-direction: column; gap: 14px;">
                        <div style="background: rgba(255,255,255,0.03); padding: 16px 20px; border-radius: 12px; border-left: 3px solid #f59e0b; font-family: 'Plus Jakarta Sans'; font-size: 0.94rem; line-height: 1.65; color: #cbd5e1;">
                            ${lesson.pitfall1}
                        </div>
                        <div style="background: rgba(255,255,255,0.03); padding: 16px 20px; border-radius: 12px; border-left: 3px solid #f59e0b; font-family: 'Plus Jakarta Sans'; font-size: 0.94rem; line-height: 1.65; color: #cbd5e1;">
                            ${lesson.pitfall2}
                        </div>
                        <div style="background: rgba(255,255,255,0.03); padding: 16px 20px; border-radius: 12px; border-left: 3px solid #f59e0b; font-family: 'Plus Jakarta Sans'; font-size: 0.94rem; line-height: 1.65; color: #cbd5e1;">
                            ${lesson.pitfall3}
                        </div>
                    </div>
                </div>

                <!-- 8. SECTION V: HANDS-ON INTERACTIVE LABORATORY WORKBENCH -->
                <div id="lesson-interactive-lab" class="glass-refractive" style="border-radius: 20px; padding: 32px; margin-bottom: 32px; border: 1px solid rgba(167, 139, 250, 0.35); background: rgba(20, 15, 34, 0.85); box-shadow: 0 10px 30px rgba(0,0,0,0.5);">
                    <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 20px; border-bottom: 1px solid rgba(255,255,255,0.08); padding-bottom: 16px; flex-wrap: wrap; gap: 12px;">
                        <div style="display: flex; align-items: center; gap: 10px;">
                            <span style="font-size: 1.5rem;">🧪</span>
                            <div>
                                <span style="font-family: 'JetBrains Mono'; font-size: 0.72rem; color: #a78bfa; text-transform: uppercase; font-weight: 700;">PART V • HANDS-ON LABORATORY PROTOCOL</span>
                                <h2 style="font-family: 'Space Grotesk'; font-size: 1.45rem; font-weight: 700; color: white; margin: 0;">
                                    Interactive Code & Clinical Data Workbench
                                </h2>
                            </div>
                        </div>
                        <div style="display: flex; gap: 10px; align-items: center;">
                            <span style="font-family: 'JetBrains Mono'; font-size: 0.72rem; color: #a78bfa; background: rgba(167,139,250,0.12); border: 1px solid rgba(167,139,250,0.3); padding: 4px 10px; border-radius: 6px;">
                                ${isPythonLesson ? '🐍 Python 3.11 Kernel' : '📊 Clinical Data Inspector'}
                            </span>
                        </div>
                    </div>

                    <div style="margin-bottom: 20px; background: rgba(255,255,255,0.03); padding: 18px 22px; border-radius: 12px; border: 1px solid rgba(255,255,255,0.06);">
                        <div style="font-family: 'Space Grotesk'; font-size: 1.05rem; font-weight: 700; color: white; margin-bottom: 6px;">
                            🎯 Mission Milestone: ${lesson.milestone}
                        </div>
                        <div style="font-family: 'Plus Jakarta Sans'; font-size: 0.92rem; color: #94a3b8; line-height: 1.55;">
                            Follow the interactive protocol below. Click cells in the table or execute the Python runtime script to verify your analysis.
                        </div>
                    </div>

                    ${isPythonLesson ? `
                        <div style="display: flex; flex-direction: column; gap: 16px;">
                            <div id="monaco-container" class="editor-pane" style="height: 320px; border: 1px solid rgba(255,255,255,0.12); border-radius: 12px; overflow: hidden; background: #0a0e1a;"></div>
                            <div style="display: flex; gap: 12px; align-items: center; flex-wrap: wrap;">
                                <button id="term-run-btn" onclick="PythonEngine.run()" class="btn-neural" style="font-family: 'Space Grotesk'; font-size: 0.88rem; font-weight: 700; padding: 12px 24px; border-radius: 10px; background: linear-gradient(135deg, rgba(6,182,212,0.25), rgba(139,92,246,0.35)); border-color: var(--accent-cyan); color: white; cursor: pointer; display: flex; align-items: center; gap: 8px;">
                                    <span>▶</span> EXECUTE PYTHON SCRIPT
                                </button>
                                <span style="font-family: 'JetBrains Mono'; font-size: 0.75rem; color: var(--text-muted);">
                                    In-browser Pyodide WebAssembly runtime • Instant execution
                                </span>
                            </div>
                            <div id="term-output" class="console-pane glass-refractive" style="height: 180px; font-family: 'JetBrains Mono'; font-size: 0.82rem; padding: 16px; border-radius: 12px; border: 1px solid rgba(255,255,255,0.08); overflow-y: auto; background: rgba(5,8,18,0.85); color: #e2e8f0; line-height: 1.6;">
                                <div class="term-line info">> Healthcare Python Kernel Ready. Click 'EXECUTE PYTHON SCRIPT' to run.</div>
                            </div>
                        </div>
                    ` : `
                        <div style="display: flex; flex-direction: column; gap: 16px;">
                            <div style="overflow-x: auto; border-radius: 12px; border: 1px solid rgba(255,255,255,0.08); background: rgba(10,14,26,0.6);">
                                ${renderMasterTable(lesson.data)}
                            </div>
                            <div id="feedback" class="feedback-box glass-refractive" style="padding: 18px 22px; font-size: 0.9rem; color: var(--text-secondary); border: 1px dashed rgba(6,182,212,0.4); border-radius: 12px; background: rgba(0,0,0,0.4); font-family: 'JetBrains Mono';">
                                > CLINICAL_INSPECTION_MODE: Click on the matching cell in the table above to satisfy the validation requirement.
                            </div>
                        </div>
                    `}
                </div>

                <!-- 9. SECTION VI: CLINICAL KNOWLEDGE CHECK & ACCREDITATION QUIZ -->
                <div id="lesson-knowledge-quiz" style="margin-bottom: 32px;">
                    ${renderMasterQuiz(lesson)}
                </div>

                <!-- 10. SECTION VII: CURATED ACADEMIC & INDUSTRY RESOURCES -->
                <div id="lesson-curated-resources" class="glass-refractive" style="border-radius: 18px; padding: 28px 32px; margin-bottom: 36px; border: 1px solid rgba(236, 72, 153, 0.3); background: rgba(26, 13, 24, 0.75);">
                    <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 18px; border-bottom: 1px solid rgba(255,255,255,0.08); padding-bottom: 14px; flex-wrap: wrap; gap: 10px;">
                        <div style="display: flex; align-items: center; gap: 10px;">
                            <span style="font-size: 1.4rem;">📚</span>
                            <div>
                                <span style="font-family: 'JetBrains Mono'; font-size: 0.7rem; color: var(--accent-pink); text-transform: uppercase; font-weight: 700;">PART VII • READING & DOCUMENTATION</span>
                                <h2 style="font-family: 'Space Grotesk'; font-size: 1.35rem; font-weight: 700; color: white; margin: 0;">
                                    Curated Academic & Clinical Resources
                                </h2>
                            </div>
                        </div>
                        <span style="font-family: 'JetBrains Mono'; font-size: 0.72rem; color: var(--accent-pink); background: rgba(236,72,153,0.1); padding: 4px 10px; border-radius: 6px;">
                            Verified External Literature
                        </span>
                    </div>

                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 14px;">
                        ${lesson.sources.map(src => `
                            <a href="${src.url}" target="_blank" class="resource-card glass-refractive" style="display: flex; flex-direction: column; gap: 6px; padding: 16px 18px; border-radius: 12px; text-decoration: none; border: 1px solid rgba(255,255,255,0.08); transition: all 0.2s ease;">
                                <div style="display: flex; justify-content: space-between; align-items: center;">
                                    <span style="font-family: 'JetBrains Mono'; font-size: 0.68rem; color: var(--accent-pink); font-weight: 700; text-transform: uppercase;">${src.tag || 'Resource'}</span>
                                    <span style="font-size: 0.8rem; color: #94a3b8;">↗</span>
                                </div>
                                <span style="font-family: 'Space Grotesk'; font-size: 0.95rem; font-weight: 600; color: white;">${src.title}</span>
                                <span style="font-family: 'JetBrains Mono'; font-size: 0.7rem; color: #64748b; word-break: break-all;">${src.url}</span>
                            </a>
                        `).join('')}
                    </div>
                </div>

                <!-- 11. TRANSITION BANNER INTO THE 52-WEEK CURRICULUM MASTER MATRIX -->
                <div id="curriculum-transition-divider" class="curriculum-transition-banner" style="background: linear-gradient(180deg, rgba(17, 24, 39, 0.95) 0%, rgba(13, 17, 34, 0.98) 100%); border: 1px solid rgba(56, 189, 248, 0.3); border-radius: 20px; padding: 28px 32px; margin: 36px 0 32px 0; box-shadow: 0 12px 36px rgba(0,0,0,0.4), 0 0 25px rgba(56,189,248,0.1);">
                    <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 18px;">
                        <div>
                            <div style="display: inline-flex; align-items: center; gap: 8px; background: rgba(56, 189, 248, 0.12); border: 1px solid rgba(56, 189, 248, 0.3); border-radius: 20px; padding: 4px 12px; margin-bottom: 8px;">
                                <span style="font-size: 0.76rem; color: #38bdf8; font-family: 'Space Grotesk', sans-serif; font-weight: 700;">⬇ COMPLETE 52-WEEK ACCREDITED SYLLABUS</span>
                            </div>
                            <h3 style="font-family: 'Space Grotesk', sans-serif; font-size: 1.45rem; font-weight: 800; color: white; margin: 0 0 6px 0;">
                                52-Week Master Curriculum & 5 W's & H Framework
                            </h3>
                            <p style="font-family: 'Plus Jakarta Sans', sans-serif; font-size: 0.92rem; color: #94a3b8; margin: 0; max-width: 820px; line-height: 1.55;">
                                Scroll down below to explore all 52 modules in full academic detail (What, Why, Who, Where, When, How), clinical case studies, competencies, and 364 daily hands-on laboratory missions. Click any day to load it into the video player above.
                            </p>
                        </div>
                        <div style="display: flex; gap: 10px; flex-wrap: wrap;">
                            <button onclick="window.scrollAppTo('#curriculum-master-matrix')" class="btn-neural" style="font-family: 'Space Grotesk', sans-serif; font-size: 0.88rem; font-weight: 700; padding: 12px 22px; border-radius: 10px; background: linear-gradient(135deg, rgba(56,189,248,0.2), rgba(56,189,248,0.4)); border-color: #38bdf8; color: white; cursor: pointer; display: flex; align-items: center; gap: 8px; box-shadow: 0 4px 16px rgba(56,189,248,0.25);">
                                <span>⬇</span> Scroll Down to 52 Weeks
                            </button>
                            <button onclick="window.scrollAppTo('top')" class="btn-neural" style="font-family: 'Space Grotesk', sans-serif; font-size: 0.88rem; font-weight: 600; padding: 12px 20px; border-radius: 10px; background: rgba(255,255,255,0.05); border-color: rgba(255,255,255,0.15); color: #cbd5e1; cursor: pointer; display: flex; align-items: center; gap: 6px;">
                                <span>⬆</span> Top / Video
                            </button>
                        </div>
                    </div>
                </div>

                <!-- 12. LOWER: THE 52-WEEK CURRICULUM MASTER MATRIX -->
                <div id="curriculum-master-matrix">
                    ${typeof window.getModulesHubHTML === 'function' ? window.getModulesHubHTML() : ''}
                </div>

            </div>
        `;

        app.innerHTML = heroContent;

        if (typeof window.applyHubFilters === 'function') {
            window.applyHubFilters();
        }

        if (isPythonLesson && window.PythonEngine) {
            setTimeout(() => {
                PythonEngine.init().then(() => {
                    if (PythonEngine.editor) {
                        PythonEngine.editor.setValue(lesson.code_start || '# Healthcare Python Kernel Active\nprint("Executing clinical data analysis...")');
                    }
                });
            }, 300);
        } else {
            // Attach table listeners
            if (typeof attachLessonListeners === 'function') {
                attachLessonListeners(lesson, dayId);
            }
        }

        // Load Journal Notes for this day
        window.currentJournalDayId = dayId;
        setTimeout(() => {
            const journal = document.getElementById('neural-journal');
            const status = document.getElementById('journal-save-status');
            if (journal) {
                const notesDict = window.StorageHub ? window.StorageHub.load('datavitals_journal', {}) : {};
                journal.value = notesDict[dayId] || '';
                if (status) {
                    status.innerText = 'LOADED';
                }
            }
        }, 100);
    };

    // 5. SEAMLESS SCROLLING & NAVIGATION HELPERS (ZERO TRAPPED SCROLLBARS)
    window.scrollAppTo = function(target) {
        try {
            if (typeof triggerHaptic === 'function') triggerHaptic('light');

            const containers = [
                document.querySelector('.card-hero'),
                document.querySelector('.card-workspace'),
                document.getElementById('app'),
                document.documentElement,
                document.body
            ].filter(Boolean);

            if (target === 'top' || target === 0) {
                containers.forEach(c => {
                    try { if (c.scrollTo) c.scrollTo({ top: 0, behavior: 'smooth' }); } catch(e){}
                });
                try { window.scrollTo({ top: 0, behavior: 'smooth' }); } catch(e){}
                return;
            }

            if (target === 'bottom') {
                containers.forEach(c => {
                    try { if (c.scrollTo) c.scrollTo({ top: c.scrollHeight || 100000, behavior: 'smooth' }); } catch(e){}
                });
                try { window.scrollTo({ top: 100000, behavior: 'smooth' }); } catch(e){}
                return;
            }

            let elem = (typeof target === 'string') ? document.querySelector(target) : target;
            if (elem) {
                elem.scrollIntoView({ behavior: 'smooth', block: 'start' });
            } else {
                // If element ID not found, attempt smooth scroll down
                window.scrollAppDown(600);
            }
        } catch (err) {
            console.warn('[ScrollAppTo Error]:', err);
        }
    };

    window.scrollAppDown = function(amount = 600) {
        try {
            if (typeof triggerHaptic === 'function') triggerHaptic('light');
            const containers = [
                document.querySelector('.card-hero'),
                document.querySelector('.card-workspace'),
                document.getElementById('app'),
                document.documentElement,
                document.body
            ].filter(Boolean);

            let scrolled = false;
            containers.forEach(c => {
                if (c.scrollHeight > c.clientHeight) {
                    try { c.scrollBy({ top: amount, behavior: 'smooth' }); scrolled = true; } catch(e){}
                }
            });
            try { window.scrollBy({ top: amount, behavior: 'smooth' }); } catch(e){}
        } catch (e) {
            console.warn(e);
        }
    };

    window.scrollAppUp = function(amount = 600) {
        try {
            if (typeof triggerHaptic === 'function') triggerHaptic('light');
            const containers = [
                document.querySelector('.card-hero'),
                document.querySelector('.card-workspace'),
                document.getElementById('app'),
                document.documentElement,
                document.body
            ].filter(Boolean);

            containers.forEach(c => {
                try { if (c.scrollBy) c.scrollBy({ top: -amount, behavior: 'smooth' }); } catch(e){}
            });
            try { window.scrollBy({ top: -amount, behavior: 'smooth' }); } catch(e){}
        } catch (e) {
            console.warn(e);
        }
    };

    window.scrollToSection = function(sectionId) {
        window.scrollAppTo(sectionId);
    };

    console.log('[MasterclassEngine]: v15.4 Engine Fully Initialized.');
})();
