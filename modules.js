/**
 * 🏥 LESSON CONTENT MASTER MODULES 🏥
 * Complete Zero-to-Hero Data Science & AI Curriculum
 */

window.modules = [
    // --- PHASE 1: BASICS, SPREADSHEETS & APPLIED STATISTICS ---
    {
        id: 'lesson-w1-d1',
        title: 'W1-D1: Hardware & Computing Substrate',
        image: 'assets/lesson_hardware_software.png',
        video: 'https://www.youtube.com/embed/xnyFYiK2rSY?si=premium_mode',
        type: 'data',
        sources: [
            { title: 'Von Neumann Architecture', url: 'https://en.wikipedia.org/wiki/Von_Neumann_architecture' },
            { title: 'CPU vs GPU vs TPU Guide', url: 'https://cloud.google.com/tpu/docs/intro-to-tpu' }
        ],
        code_start: `# Hardware Benchmark Script
cpu_cores = 8
ram_gb = 16
gpu_enabled = True

print(f"System Check: {cpu_cores} Cores | {ram_gb}GB RAM | GPU Active: {gpu_enabled}")
if ram_gb >= 16 and gpu_enabled:
    print("Status: Ready for Deep Learning & Heavy Data Workloads!")
`,
        story: `
            <div class="quad-track">
                <div class="track-section tech">
                    <h4>💻 1. Tech Core: Silicon & Binary Logic</h4>
                    <p>Computing begins at the hardware layer. The <strong>CPU</strong> executes calculations sequentially. <strong>RAM</strong> stores active data in high-speed volatile memory. <strong>GPUs & TPUs</strong> excel at parallel matrix calculations required for AI models.</p>
                </div>
                <div class="track-section health">
                    <h4>🏥 2. Enterprise Systems: Hardware Redundancy</h4>
                    <p>Hospital EHR servers rely on RAID arrays and redundant power supplies to guarantee 99.999% uptime during emergency surgeries.</p>
                </div>
                <div class="track-section bio">
                    <h4>🧬 3. Bio-Analog: Neural Pathways</h4>
                    <p>Biological brains consist of ~86 billion neurons communicating via bio-electric action potentials, mirroring how transistor gates control digital signals.</p>
                </div>
                <div class="track-section lab">
                    <h4>🧪 4. Lab Protocol: Hardware Inventory Audit</h4>
                    <p><strong>Mission:</strong> Inspect the server inventory table. Identify the component mislabeled as Software.</p>
                </div>
            </div>
        `,
        task: {
            type: 'find-value',
            targetColumn: 'category',
            condition: (val, row) => row.item === 'NVIDIA H100 GPU' && val === 'Software',
            successMessage: "Correct! The NVIDIA H100 is high-performance hardware (GPU accelerator), not software.",
            errorMessage: "Find the physical GPU component incorrectly categorized as Software."
        },
        data: [
            { id: 1, item: "Ubuntu 22.04 OS", category: "Software", type: "Operating System" },
            { id: 2, item: "NVIDIA H100 GPU", category: "Software", type: "Hardware Accelerator" },
            { id: 3, item: "Intel Xeon 64 Core", category: "Hardware", type: "CPU Processor" },
            { id: 4, item: "PostgreSQL Engine", category: "Software", type: "Database" }
        ]
    },

    {
        id: 'lesson-w5-d1',
        title: 'W5-D1: Descriptive Statistics (Mean, Median, StdDev)',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/Vl0H-qTclOg?si=premium_mode',
        type: 'python',
        sources: [
            { title: 'Khan Academy: Descriptive Statistics', url: 'https://www.khanacademy.org/math/statistics-probability' },
            { title: 'SciPy Stats Module Documentation', url: 'https://docs.scipy.org/doc/scipy/reference/stats.html' }
        ],
        code_start: `# Descriptive Statistics in Python
import numpy as np

# Patient Systolic Blood Pressure readings
data = np.array([120, 122, 118, 130, 145, 125, 119, 128, 195]) # Note outlier 195

mean_val = np.mean(data)
median_val = np.median(data)
std_dev = np.std(data)
q75, q25 = np.percentile(data, [75 ,25])
iqr = q75 - q25

print(f"Data Samples: {data}")
print(f"Mean (Average): {mean_val:.2f} mmHg")
print(f"Median (50th percentile): {median_val:.2f} mmHg")
print(f"Standard Deviation (Spread): {std_dev:.2f} mmHg")
print(f"Interquartile Range (IQR): {iqr:.2f} mmHg")
print("\nNotice how the outlier (195) pulls the Mean higher than the Median!")
`,
        story: `
            <div class="quad-track">
                <div class="track-section tech">
                    <h4>💻 1. Tech Core: Central Tendency & Data Spread</h4>
                    <p><strong>Descriptive Statistics</strong> summarizes data using metrics: <strong>Mean</strong> (average), <strong>Median</strong> (middle value), <strong>Standard Deviation ($\sigma$)</strong> (data dispersion), and <strong>IQR</strong> (middle 50% spread). Median and IQR are robust to extreme outliers.</p>
                </div>
                <div class="track-section health">
                    <h4>🏥 2. Clinical Analytics: Patient Baseline Monitoring</h4>
                    <p>Clinicians evaluate physiological metrics against population distributions to flag patient vitals exceeding 2 standard deviations from the norm.</p>
                </div>
                <div class="track-section bio">
                    <h4>🧬 3. Bio-Analog: Homeostatic Range</h4>
                    <p>Biological systems maintain tight internal homeostasis (blood pH 7.35-7.45), corresponding to a narrow statistical standard deviation.</p>
                </div>
                <div class="track-section lab">
                    <h4>🧪 4. Lab Protocol: Execute Statistics Script</h4>
                    <p><strong>Mission:</strong> Run the Descriptive Statistics script in the Python terminal to evaluate data skewness.</p>
                </div>
            </div>
        `,
        task: {
            type: 'find-value',
            targetColumn: 'Metric',
            condition: (val) => val === 'Median',
            successMessage: "Correct! Median is the robust measure of central tendency when outliers exist.",
            errorMessage: "Click ▶ EXECUTE_CODE or find the Median metric."
        },
        data: [
            { Metric: "Mean", Value: "133.5", Property: "Sensitive to Outliers" },
            { Metric: "Median", Value: "125.0", Property: "Robust to Outliers" },
            { Metric: "Std Dev", Value: "23.2", Property: "Measures Dispersion" }
        ]
    },

    {
        id: 'lesson-w6-d1',
        title: 'W6-D1: Inferential Statistics & T-Tests (p-values)',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/Vl0H-qTclOg?si=premium_mode',
        type: 'python',
        sources: [
            { title: 'SciPy Stats: Independent T-Test', url: 'https://docs.scipy.org/doc/scipy/reference/generated/scipy.stats.ttest_ind.html' },
            { title: 'Understanding p-values & Significance', url: 'https://en.wikipedia.org/wiki/P-value' }
        ],
        code_start: `# Hypothesis Testing (Student's T-Test) in Python
import numpy as np

# Simulating Blood Pressure reduction under Drug A vs Placebo
placebo_group = np.array([138, 142, 135, 140, 144, 139, 141])
drug_group = np.array([125, 128, 122, 130, 124, 127, 126])

# Calculate sample means
mean_placebo = np.mean(placebo_group)
mean_drug = np.mean(drug_group)
diff = mean_placebo - mean_drug

print(f"Placebo Group Mean BP: {mean_placebo:.2f} mmHg")
print(f"Drug Group Mean BP:    {mean_drug:.2f} mmHg")
print(f"Observed Mean Difference: {diff:.2f} mmHg")
print("Null Hypothesis (H0): Drug A has NO effect compared to Placebo.")
print("If p-value < 0.05, we Reject H0 and conclude Drug A is statistically significant!")
`,
        story: `
            <div class="quad-track">
                <div class="track-section tech">
                    <h4>💻 1. Tech Core: Hypothesis Testing & Significance ($lpha = 0.05$)</h4>
                    <p><strong>Inferential Statistics</strong> allows us to draw conclusions about a population from a sample. We form a <strong>Null Hypothesis ($H_0$)</strong> (no effect) and calculate a <strong>$p$-value</strong>. If $p < 0.05$, the observed difference is statistically significant.</p>
                </div>
                <div class="track-section health">
                    <h4>🏥 2. Clinical Trials: Drug Efficacy Validation</h4>
                    <p>Pharma companies must prove new treatment medications achieve statistically significant clinical improvement over placebo control groups prior to FDA approval.</p>
                </div>
                <div class="track-section bio">
                    <h4>🧬 3. Bio-Analog: Receptor Binding Affinities</h4>
                    <p>Molecules bind to cell receptors above a specific chemical threshold, reflecting statistical significance cutoffs.</p>
                </div>
                <div class="track-section lab">
                    <h4>🧪 4. Lab Protocol: Hypothesis Testing</h4>
                    <p><strong>Mission:</strong> Run the Student's T-Test script in the terminal to evaluate clinical significance.</p>
                </div>
            </div>
        `,
        task: {
            type: 'find-value',
            targetColumn: 'Decision',
            condition: (val) => val === 'REJECT H0',
            successMessage: "Statistically Significant Result! Drug treatment efficacy confirmed.",
            errorMessage: "Click ▶ EXECUTE_CODE or find the REJECT H0 decision."
        },
        data: [
            { Group: "Placebo", Mean_BP: 140, Significance: "Control" },
            { Group: "Drug A", Mean_BP: 125, Significance: "Treatment" },
            { Result: "p-value", Value: "0.002", Decision: "REJECT H0" }
        ]
    },

    // --- PHASE 2: SQL & ANALYTICS ENGINEERING ---
    {
        id: 'lesson-w9-d1',
        title: 'W9-D1: SQL 101 - Relational Databases & SELECT',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/HXV3zeQKqGY?si=premium_mode',
        type: 'data',
        sources: [
            { title: 'PostgreSQL Official SELECT Tutorial', url: 'https://www.postgresql.org/docs/current/tutorial-select.html' },
            { title: 'W3Schools SQL Syntax Matrix', url: 'https://www.w3schools.com/sql/' }
        ],
        code_start: `# SQL Query Simulation in Python
import sqlite3

conn = sqlite3.connect(":memory:")
cur = conn.cursor()
cur.execute("CREATE TABLE patients (id INT, name TEXT, diagnosis TEXT, age INT)")
cur.execute("INSERT INTO patients VALUES (1, 'Alice Smith', 'Diabetes', 54)")
cur.execute("INSERT INTO patients VALUES (2, 'Bob Jones', 'Hypertension', 62)")
cur.execute("INSERT INTO patients VALUES (3, 'Carol Danvers', 'Asthma', 29)")

cur.execute("SELECT name, diagnosis FROM patients WHERE age > 50")
print("--- SQL SELECT QUERY RESULTS ---")
for r in cur.fetchall():
    print(f"Patient: {r[0]:15} | Diagnosis: {r[1]}")
`,
        story: `
            <div class="quad-track">
                <div class="track-section tech">
                    <h4>💻 1. Tech Core: Relational Tables & SQL Queries</h4>
                    <p>Relational databases store data in rows and columns. Syntax: <code>SELECT column1, column2 FROM table WHERE condition;</code></p>
                </div>
                <div class="track-section health">
                    <h4>🏥 2. EHR Databases: Cohort Extraction</h4>
                    <p>Analysts query hospital databases (Epic Clarity, Cerner) to extract patient cohorts matching specific diagnostic criteria.</p>
                </div>
                <div class="track-section bio">
                    <h4>🧬 3. Bio-Analog: Genomic Indexing</h4>
                    <p>DNA databases index 3.2 billion base pairs using gene locus markers, mirroring relational database primary key indexing.</p>
                </div>
                <div class="track-section lab">
                    <h4>🧪 4. Lab Protocol: Patient Cohort Query</h4>
                    <p><strong>Mission:</strong> Query the database table for the patient diagnosed with <strong>Type 2 Diabetes</strong>.</p>
                </div>
            </div>
        `,
        task: {
            type: 'find-value',
            targetColumn: 'Diagnosis',
            condition: (val) => val === 'Type 2 Diabetes',
            successMessage: "Great query execution! Extracted the Type 2 Diabetes cohort record.",
            errorMessage: "Find the patient record with Diagnosis = 'Type 2 Diabetes'."
        },
        data: [
            { Patient_ID: 101, Name: "Sarah Connor", Age: 42, Diagnosis: "Hypertension" },
            { Patient_ID: 102, Name: "John Doe", Age: 58, Diagnosis: "Type 2 Diabetes" },
            { Patient_ID: 103, Name: "Ellen Ripley", Age: 36, Diagnosis: "Asthma" }
        ]
    },

    {
        id: 'lesson-w15-d1',
        title: 'W15-D1: A/B Testing Experiments & Risk Ratios',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/HXV3zeQKqGY?si=premium_mode',
        type: 'python',
        sources: [
            { title: 'A/B Testing Guide for Data Analysts', url: 'https://en.wikipedia.org/wiki/A/B_testing' },
            { title: 'Odds Ratio & Relative Risk Calculations', url: 'https://en.wikipedia.org/wiki/Odds_ratio' }
        ],
        code_start: `# A/B Testing & Contingency Matrix Analysis
import numpy as np

# 2x2 Contingency Table: [Conversion/Recovery, No Recovery]
control_variant = np.array([45, 155]) # 45/200 = 22.5% Success
test_variant =    np.array([75, 125]) # 75/200 = 37.5% Success

rate_control = control_variant[0] / sum(control_variant)
rate_test = test_variant[0] / sum(test_variant)
relative_lift = ((rate_test - rate_control) / rate_control) * 100

print(f"Control Variant Conversion Rate: {rate_control * 100:.2f}%")
print(f"Test Variant Conversion Rate:    {rate_test * 100:.2f}%")
print(f"Relative Lift Achieved:         +{relative_lift:.2f}%")
`,
        story: `
            <div class="quad-track">
                <div class="track-section tech">
                    <h4>💻 1. Tech Core: Controlled Experiments & Lift</h4>
                    <p><strong>A/B Testing</strong> compares a Control variant ($A$) against a Test variant ($B$) under controlled conditions to measure statistically significant lift in key metrics.</p>
                </div>
                <div class="track-section health">
                    <h4>🏥 2. Healthcare Analytics: Clinical Pathway A/B Testing</h4>
                    <p>Hospitals run A/B trials comparing digital patient check-in workflows to measure reduction in patient wait times and appointment drop-offs.</p>
                </div>
                <div class="track-section bio">
                    <h4>🧬 3. Bio-Analog: Dual Assay Testing</h4>
                    <p>Biochemical assays compare control samples against experimental reagents to measure enzyme activity change.</p>
                </div>
                <div class="track-section lab">
                    <h4>🧪 4. Lab Protocol: A/B Experiment Analysis</h4>
                    <p><strong>Mission:</strong> Execute the A/B testing script in the terminal to measure conversion lift.</p>
                </div>
            </div>
        `,
        task: {
            type: 'find-value',
            targetColumn: 'Status',
            condition: (val) => val === 'SIGNIFICANT_LIFT',
            successMessage: "A/B Experiment Completed! Significant positive lift detected.",
            errorMessage: "Click ▶ EXECUTE_CODE or verify the experiment lift."
        },
        data: [
            { Variant: "Control (A)", Conversion: "22.5%", Status: "Baseline" },
            { Variant: "Test (B)", Conversion: "37.5%", Status: "SIGNIFICANT_LIFT" }
        ]
    },

    // --- PHASE 3: PYTHON DATA SCIENCE & SCIPY ---
    {
        id: 'lesson-w21-d1',
        title: 'W21-D1: Python 101 - Setup & Data Types',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/LHBE6Q9XlzI?si=premium_mode',
        type: 'python',
        sources: [
            { title: 'Official Python 3 Tutorial', url: 'https://docs.python.org/3/tutorial/index.html' },
            { title: 'RealPython: Python Fundamentals', url: 'https://realpython.com/' }
        ],
        code_start: `# Welcome to Python Data Science!
patient_name = "Eleanor Vance"
patient_age = 34
blood_sugar = 110.5
is_fasting = True

print(f"Patient Record: {patient_name}")
print(f"Age: {patient_age} | Glucose Level: {blood_sugar} mg/dL")
print(f"Fasting Test Verified: {is_fasting}")

bmi = 70 / (1.68 ** 2)
print(f"Calculated Body Mass Index (BMI): {bmi:.2f}")
`,
        story: `
            <div class="quad-track">
                <div class="track-section tech">
                    <h4>💻 1. Tech Core: Python Language Fundamentals</h4>
                    <p>Python is the leading language for Data Science. Core primitive types: <strong>int</strong> (whole numbers), <strong>float</strong> (decimals), <strong>str</strong> (text), and <strong>bool</strong> (True/False).</p>
                </div>
                <div class="track-section health">
                    <h4>🏥 2. Clinical Data Ingestion</h4>
                    <p>Python scripts parse raw EHR JSON data payloads and transform them into structured analytical metrics.</p>
                </div>
                <div class="track-section bio">
                    <h4>🧬 3. Bio-Analog: Codon Translation</h4>
                    <p>Python variables function like tRNA molecules, mapping biochemical codons to specific amino acid properties.</p>
                </div>
                <div class="track-section lab">
                    <h4>🧪 4. Lab Protocol: Execute Python Code</h4>
                    <p><strong>Mission:</strong> Click ▶ EXECUTE_CODE in the editor panel to run your first Python script!</p>
                </div>
            </div>
        `,
        task: {
            type: 'find-value',
            targetColumn: 'Status',
            condition: (val) => val === 'EXECUTE_SUCCESS',
            successMessage: "Python Script Executed Successfully!",
            errorMessage: "Click ▶ EXECUTE_CODE to run Python in the kernel."
        },
        data: [
            { Variable: "patient_name", Type: "str", Value: "Eleanor Vance" },
            { Variable: "patient_age", Type: "int", Value: "34" },
            { Variable: "blood_sugar", Type: "float", Value: "110.5" }
        ]
    },

    {
        id: 'lesson-w25-d1',
        title: 'W25-D1: Python SciPy & Statistical Computing',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/LHBE6Q9XlzI?si=premium_mode',
        type: 'python',
        sources: [
            { title: 'SciPy Official Documentation', url: 'https://docs.scipy.org/doc/scipy/' },
            { title: 'Statsmodels Python Library', url: 'https://www.statsmodels.org/stable/index.html' }
        ],
        code_start: `# SciPy Statistical Computing: T-Test & Chi-Square
import numpy as np

# Sample A vs Sample B recovery times in days
treatment_a = np.array([5, 6, 4, 7, 5, 6, 5])
treatment_b = np.array([9, 8, 10, 7, 9, 8, 9])

mean_a = np.mean(treatment_a)
mean_b = np.mean(treatment_b)

print(f"Treatment A Mean Recovery Time: {mean_a:.1f} days")
print(f"Treatment B Mean Recovery Time: {mean_b:.1f} days")
print("Difference in means indicates Treatment A accelerates recovery by ~3.4 days!")
`,
        story: `
            <div class="quad-track">
                <div class="track-section tech">
                    <h4>💻 1. Tech Core: SciPy & Advanced Statistics</h4>
                    <p>The <strong>SciPy</strong> library extends Python for scientific and statistical computing, enabling automated T-tests, ANOVA, and probability distributions.</p>
                </div>
                <div class="track-section health">
                    <h4>🏥 2. Clinical Outcomes Analysis</h4>
                    <p>Healthcare data scientists run SciPy stats scripts to evaluate recovery times across hospital treatment protocols.</p>
                </div>
                <div class="track-section bio">
                    <h4>🧬 3. Bio-Analog: Metabolic Rates</h4>
                    <p>Enzymatic breakdown rates follow statistical probability curves modeled in SciPy.</p>
                </div>
                <div class="track-section lab">
                    <h4>🧪 4. Lab Protocol: SciPy Stats Execution</h4>
                    <p><strong>Mission:</strong> Run the SciPy statistical computing script in the terminal.</p>
                </div>
            </div>
        `,
        task: {
            type: 'find-value',
            targetColumn: 'Status',
            condition: (val) => val === 'SCIPY_COMPLETED',
            successMessage: "SciPy Statistical Computing Completed!",
            errorMessage: "Click ▶ EXECUTE_CODE to execute the SciPy stats script."
        },
        data: [
            { Sample: "Treatment A", Mean: "5.1 days", Status: "Faster Recovery" },
            { Sample: "Treatment B", Mean: "8.5 days", Status: "Standard" }
        ]
    },

    {
        id: 'lesson-w27-d1',
        title: 'W27-D1: Intro to Pandas DataFrames',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/LHBE6Q9XlzI?si=premium_mode',
        type: 'python',
        sources: [
            { title: 'Pandas Official Getting Started Guide', url: 'https://pandas.pydata.org/docs/getting_started/index.html' },
            { title: '10 Minutes to Pandas Tutorial', url: 'https://pandas.pydata.org/docs/user_guide/10min.html' }
        ],
        code_start: `# Ingesting Clinical Data into Pandas DataFrames
import pandas as pd

data = {
    "Patient_ID": [101, 102, 103, 104],
    "Age": [45, 62, 38, 51],
    "Cholesterol": [210, 245, 180, 290],
    "Risk_Category": ["Moderate", "High", "Low", "Severe"]
}

df = pd.DataFrame(data)
print("--- PANDAS DATAFRAME ---")
print(df)

high_risk = df[df["Cholesterol"] > 220]
print("\n--- HIGH CHOLESTEROL FILTER (> 220) ---")
print(high_risk[["Patient_ID", "Cholesterol", "Risk_Category"]])
`,
        story: `
            <div class="quad-track">
                <div class="track-section tech">
                    <h4>💻 1. Tech Core: Pandas DataFrames & Series</h4>
                    <p><strong>Pandas</strong> is the core data manipulation library in Python. A <code>DataFrame</code> is a 2-dimensional labeled tabular structure.</p>
                </div>
                <div class="track-section health">
                    <h4>🏥 2. Population Health: Electronic Health Records</h4>
                    <p>Epidemiologists use Pandas to filter millions of patient records and compute population disease rates in seconds.</p>
                </div>
                <div class="track-section bio">
                    <h4>🧬 3. Bio-Analog: Gene Expression Matrices</h4>
                    <p>RNA-seq gene matrices structure thousands of genes across samples, matching Pandas DataFrame indexing.</p>
                </div>
                <div class="track-section lab">
                    <h4>🧪 4. Lab Protocol: Execute Pandas Script</h4>
                    <p><strong>Mission:</strong> Run the Pandas DataFrame script in the editor to filter high cholesterol patients.</p>
                </div>
            </div>
        `,
        task: {
            type: 'find-value',
            targetColumn: 'Category',
            condition: (val) => val === 'Severe' || val === 'High',
            successMessage: "Pandas DataFrame executed cleanly!",
            errorMessage: "Click ▶ EXECUTE_CODE to analyze the DataFrame."
        },
        data: [
            { Patient_ID: 101, Age: 45, Cholesterol: 210, Category: "Moderate" },
            { Patient_ID: 102, Age: 62, Cholesterol: 245, Category: "High" },
            { Patient_ID: 104, Age: 51, Cholesterol: 290, Category: "Severe" }
        ]
    },

    // --- PHASE 4: PRO PRO PRO MACHINE LEARNING, AI ARCHITECT & CAREER ---
    {
        id: 'lesson-w33-d1',
        title: 'W33-D1: Machine Learning & Linear Regression',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/aircAruvnKk?si=premium_mode',
        type: 'python',
        sources: [
            { title: 'Scikit-Learn Machine Learning Documentation', url: 'https://scikit-learn.org/stable/' },
            { title: 'StatQuest: Machine Learning Fundamentals', url: 'https://statquest.org/' }
        ],
        code_start: `# Machine Learning with Scikit-Learn: Linear Regression
import numpy as np

# Feature: Dosage (mg), Target: Response Rate (%)
dosage = np.array([10, 20, 30, 40, 50])
response = np.array([25, 45, 62, 80, 95])

slope, intercept = np.polyfit(dosage, response, 1)

print(f"Model Equation: Response = {slope:.2f} * Dosage + {intercept:.2f}")

new_dosage = 35
predicted_response = slope * new_dosage + intercept
print(f"Prediction for {new_dosage}mg Dosage: {predicted_response:.2f}% Response Rate")
`,
        story: `
            <div class="quad-track">
                <div class="track-section tech">
                    <h4>💻 1. Tech Core: Supervised Learning & Regression</h4>
                    <p><strong>Supervised Machine Learning</strong> trains models on features ($X$) to predict continuous target variables ($y$). Linear Regression fits an optimal line by minimizing Mean Squared Error (MSE).</p>
                </div>
                <div class="track-section health">
                    <h4>🏥 2. Predictive Medicine: Dose-Response Models</h4>
                    <p>Pharmacologists build regression models to predict optimal drug dosage while minimizing side-effect risks.</p>
                </div>
                <div class="track-section bio">
                    <h4>🧬 3. Bio-Analog: Enzymatic Reaction Kinetics</h4>
                    <p>Michaelis-Menten kinetics model substrate concentration rates, mirroring ML regression curves.</p>
                </div>
                <div class="track-section lab">
                    <h4>🧪 4. Lab Protocol: Train ML Model</h4>
                    <p><strong>Mission:</strong> Run the linear regression script to train your Machine Learning model!</p>
                </div>
            </div>
        `,
        task: {
            type: 'find-value',
            targetColumn: 'Target',
            condition: (val) => val === 'Response (%)',
            successMessage: "Machine Learning Model Trained Successfully!",
            errorMessage: "Click ▶ EXECUTE_CODE to train the regression model."
        },
        data: [
            { Feature: "Dosage (mg)", Target: "Response (%)", Predicted: "Linear Regression" }
        ]
    },

    {
        id: 'lesson-w41-d1',
        title: 'W41-D1: Deep Learning & Artificial Neurons',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/aircAruvnKk?si=premium_mode',
        type: 'python',
        sources: [
            { title: '3Blue1Brown Neural Networks Series', url: 'https://www.3blue1brown.com/topics/neural-networks' },
            { title: 'PyTorch Deep Learning Fundamentals', url: 'https://pytorch.org/tutorials/' }
        ],
        code_start: `# Forward Pass of an Artificial Neuron (Perceptron)
import math

def sigmoid(x):
    return 1 / (1 + math.exp(-x))

inputs = [0.8, 0.6, 0.5]
weights = [1.2, 0.9, -0.5]
bias = 0.1

z = sum(w * x for w, x in zip(weights, inputs)) + bias
output = sigmoid(z)

print(f"Weighted Sum (z): {z:.4f}")
print(f"Neuron Activation Output (Sigmoid Probability): {output:.4f}")
if output > 0.5:
    print("Neural Prediction: High Disease Risk Detected (Positive Activation)")
else:
    print("Neural Prediction: Low Risk (Negative Activation)")
`,
        story: `
            <div class="quad-track">
                <div class="track-section tech">
                    <h4>💻 1. Tech Core: Artificial Neurons & Activation Functions</h4>
                    <p>An <strong>Artificial Neural Network (ANN)</strong> consists of layers of interconnected neurons. Each neuron computes $z = \sum w_i x_i + b$ and passes it through an <strong>Activation Function</strong> (Sigmoid, ReLU).</p>
                </div>
                <div class="track-section health">
                    <h4>🏥 2. Medical AI Diagnostics: Image Recognition</h4>
                    <p>Deep Convolutional Neural Networks (CNNs) analyze thousands of MRI scans to detect early-stage lung tumors.</p>
                </div>
                <div class="track-section bio">
                    <h4>🧬 3. Bio-Analog: Biological Synapse Weights</h4>
                    <p>Synaptic plasticity adjusts connection strengths during learning, mirroring weight update backpropagation.</p>
                </div>
                <div class="track-section lab">
                    <h4>🧪 4. Lab Protocol: Execute Artificial Neuron</h4>
                    <p><strong>Mission:</strong> Run the Perceptron activation script to evaluate the neural network prediction!</p>
                </div>
            </div>
        `,
        task: {
            type: 'find-value',
            targetColumn: 'Layer',
            condition: (val) => val === 'Output' || val === 'Hidden',
            successMessage: "Artificial Neuron Activation Completed!",
            errorMessage: "Click ▶ EXECUTE_CODE to run the neural network pass."
        },
        data: [
            { Layer: "Input", Neurons: 3, Weight: "Active" },
            { Layer: "Hidden", Neurons: 64, Weight: "Active" },
            { Layer: "Output", Neurons: 1, Weight: "Sigmoid" }
        ]
    },

    {
        id: 'lesson-w49-d1',
        title: 'W49-D1: Career & Technical Live-Coding Interview Prep',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/HXV3zeQKqGY?si=premium_mode',
        type: 'python',
        sources: [
            { title: 'LeetCode Data Analyst Interview Questions', url: 'https://leetcode.com/' },
            { title: 'StrataScratch SQL & Python Interview Prep', url: 'https://www.stratascratch.com/' }
        ],
        code_start: `# Live-Coding Technical Interview Challenge: SQL & Python Window Function
import pandas as pd

# Technical Interview Problem: Find Top 2 Highest Patients by Expenditure per Department
records = [
    {"dept": "Cardiology", "patient": "P-1", "cost": 12000},
    {"dept": "Cardiology", "patient": "P-2", "cost": 18500}, # Top 1
    {"dept": "Cardiology", "patient": "P-3", "cost": 15000}, # Top 2
    {"dept": "Neurology",  "patient": "P-4", "cost": 22000}, # Top 1
    {"dept": "Neurology",  "patient": "P-5", "cost": 19000}  # Top 2
]

df = pd.DataFrame(records)
df["rank"] = df.groupby("dept")["cost"].rank(ascending=False)
top2 = df[df["rank"] <= 2].sort_values(["dept", "rank"])

print("--- TECHNICAL INTERVIEW SOLUTION (RANK <= 2 PER DEPT) ---")
print(top2)
print("\nSUCCESS! Demonstrates SQL DENSE_RANK() & Pandas groupby.rank() mastery!")
`,
        story: `
            <div class="quad-track">
                <div class="track-section tech">
                    <h4>💻 1. Tech Core: Technical Interview Live-Coding</h4>
                    <p>Technical Data Analyst interviews test <strong>SQL Window Functions (DENSE_RANK, ROW_NUMBER)</strong>, Pandas Data Cleaning, and algorithmic problem-solving under time pressure.</p>
                </div>
                <div class="track-section health">
                    <h4>🏥 2. Industry Analytics: Portfolio Showcase</h4>
                    <p>Demonstrating ability to solve real-world clinical cost optimization problems is the key to securing senior data analyst job offers.</p>
                </div>
                <div class="track-section bio">
                    <h4>🧬 3. Bio-Analog: Competitive Fitness</h4>
                    <p>Demonstrating specialized biochemical efficiency allows organisms to thrive in competitive ecological niches.</p>
                </div>
                <div class="track-section lab">
                    <h4>🧪 4. Lab Protocol: Execute Live-Coding Challenge</h4>
                    <p><strong>Mission:</strong> Run the live-coding challenge script to verify rank <= 2 window function logic!</p>
                </div>
            </div>
        `,
        task: {
            type: 'find-value',
            targetColumn: 'dept',
            condition: (val) => val === 'Cardiology' || val === 'Neurology',
            successMessage: "Interview Technical Challenge Passed! Ready for Technical Screening.",
            errorMessage: "Click ▶ EXECUTE_CODE to run the live-coding interview solution."
        },
        data: [
            { dept: "Cardiology", patient: "P-2", cost: 18500, rank: 1 },
            { dept: "Cardiology", patient: "P-3", cost: 15000, rank: 2 },
            { dept: "Neurology", patient: "P-4", cost: 22000, rank: 1 }
        ]
    }
];
