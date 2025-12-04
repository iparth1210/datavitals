/**
 * 🗺️ THE 52-WEEK ROADMAP TO HEALTHCARE AI ANALYST 🗺️
 * 
 * ZERO TO HERO: A complete year-long curriculum.
 * PHASES: Foundation -> Analyst -> Visualizer -> Healthcare Expert -> Coder -> AI Specialist
 */

const curriculum = [
    // --- PHASE 1: THE FOUNDATION (Weeks 1-6) ---
    {
        id: 'week-1', phase: 1, title: 'Week 1: The Machine', description: 'Hardware, Software, and how Computers actually work.',
        days: ['Hardware vs Software', 'The Operating System (OS)', 'Files, Folders & Paths', 'The Internet (DNS/IP)', 'Cloud Computing Basics', 'Data Units (Bits to Petabytes)', 'Security & Passwords']
    },
    {
        id: 'week-2', phase: 1, title: 'Week 2: Excel Basics', description: 'The universal language of data.',
        days: ['The Interface (Ribbon/Grid)', 'Rows, Columns & Cells', 'Data Types in Excel', 'Basic Math Formulas', 'Relative vs Absolute Refs ($)', 'Sorting & Filtering', 'Basic Formatting']
    },
    {
        id: 'week-3', phase: 1, title: 'Week 3: Advanced Excel', description: 'Power user techniques.',
        days: ['Conditional Formatting', 'Data Validation (Drop-downs)', 'Text to Columns', 'Removing Duplicates', 'Find & Replace Wildcards', 'Paste Special', 'Protecting Sheets']
    },
    {
        id: 'week-4', phase: 1, title: 'Week 4: Excel Functions', description: 'Logic and Lookups.',
        days: ['IF / AND / OR Logic', 'COUNTIF & SUMIF', 'VLOOKUP & HLOOKUP', 'XLOOKUP (The King)', 'INDEX & MATCH', 'Date & Text Functions', 'Nested Functions']
    },
    {
        id: 'week-5', phase: 1, title: 'Week 5: Pivot Tables', description: 'Slicing and dicing data.',
        days: ['Creating Pivot Tables', 'Rows vs Columns vs Values', 'Filters & Slicers', 'Calculated Fields', 'Grouping Data (Dates)', 'Pivot Charts', 'Drill Down Analysis']
    },
    {
        id: 'week-6', phase: 1, title: 'Week 6: Data Cleaning', description: 'Preparing for analysis.',
        days: ['Dirty Data Types', 'Handling Missing Values', 'Standardizing Text', 'Parsing Dates', 'Error Checking', 'The ETL Concept', 'Phase 1 Exam: The Spreadsheet']
    },

    // --- PHASE 2: THE DATA ANALYST (Weeks 7-14) ---
    {
        id: 'week-7', phase: 2, title: 'Week 7: Database Concepts', description: 'Moving beyond spreadsheets.',
        days: ['Excel vs Databases', 'Relational Models (RDBMS)', 'Tables, Rows, Columns', 'Primary Keys (PK)', 'Foreign Keys (FK)', 'Normalization (1NF-3NF)', 'ER Diagrams']
    },
    {
        id: 'week-8', phase: 2, title: 'Week 8: SQL Basics', description: 'Talking to the database.',
        days: ['SQL Syntax Overview', 'SELECT & FROM', 'SELECT DISTINCT', 'WHERE Filtering', 'AND / OR / NOT', 'ORDER BY Sorting', 'LIMIT / TOP']
    },
    {
        id: 'week-9', phase: 2, title: 'Week 9: Aggregation', description: 'Summarizing millions of rows.',
        days: ['COUNT & COUNT(*)', 'SUM & AVG', 'MIN & MAX', 'GROUP BY Clause', 'HAVING vs WHERE', 'Aliasing (AS)', 'Data Granularity']
    },
    {
        id: 'week-10', phase: 2, title: 'Week 10: SQL Joins', description: 'Connecting tables.',
        days: ['The Concept of Joins', 'INNER JOIN', 'LEFT JOIN', 'RIGHT JOIN', 'FULL OUTER JOIN', 'CROSS JOIN', 'Self Joins']
    },
    {
        id: 'week-11', phase: 2, title: 'Week 11: Advanced SQL', description: 'Complex logic.',
        days: ['CASE WHEN Statements', 'COALESCE & NULLIF', 'String Manipulation', 'Date Math in SQL', 'Casting Data Types', 'Views vs Tables', 'Indexing Basics']
    },
    {
        id: 'week-12', phase: 2, title: 'Week 12: Subqueries', description: 'Queries inside queries.',
        days: ['Subqueries in WHERE', 'Subqueries in FROM', 'Correlated Subqueries', 'Common Table Expressions (CTEs)', 'Recursive CTEs', 'UNION vs UNION ALL', 'EXISTS Operator']
    },
    {
        id: 'week-13', phase: 2, title: 'Week 13: Window Functions', description: 'Analytics power moves.',
        days: ['OVER() Clause', 'ROW_NUMBER()', 'RANK() & DENSE_RANK()', 'LEAD() & LAG()', 'Running Totals', 'Moving Averages', 'Partitioning Data']
    },
    {
        id: 'week-14', phase: 2, title: 'Week 14: SQL Project', description: 'Putting it all together.',
        days: ['Project Scoping', 'Schema Design', 'Data Loading', 'Exploratory Queries', 'Answering Business Questions', 'Optimization', 'Phase 2 Exam: The Query']
    },

    // --- PHASE 3: THE VISUALIZER (Weeks 15-20) ---
    {
        id: 'week-15', phase: 3, title: 'Week 15: Viz Principles', description: 'How to tell stories with data.',
        days: ['Why Visualize?', 'Preattentive Attributes', 'Gestalt Principles', 'Tufte\'s Data-Ink Ratio', 'Choosing the Right Chart', 'Color Theory', 'Accessibility (Colorblindness)']
    },
    {
        id: 'week-16', phase: 3, title: 'Week 16: PowerBI Basics', description: 'Microsoft\'s BI Tool.',
        days: ['PowerBI Desktop Tour', 'Connecting to Data', 'Power Query (M Language)', 'Data Modeling (Star Schema)', 'Creating Visuals', 'Formatting Visuals', 'Publishing to Service']
    },
    {
        id: 'week-17', phase: 3, title: 'Week 17: DAX (PowerBI)', description: 'Data Analysis Expressions.',
        days: ['Calculated Columns vs Measures', 'SUMX and Iterators', 'CALCULATE (The Magic)', 'FILTER Context', 'ALL & ALLEXCEPT', 'Time Intelligence', 'Variables in DAX']
    },
    {
        id: 'week-18', phase: 3, title: 'Week 18: Tableau Basics', description: 'The artist\'s tool.',
        days: ['Tableau Interface', 'Dimensions vs Measures', 'Discrete (Blue) vs Continuous (Green)', 'Basic Charts', 'Calculated Fields', 'Parameters', 'Dashboards & Stories']
    },
    {
        id: 'week-19', phase: 3, title: 'Week 19: Dashboard Design', description: 'Building for users.',
        days: ['User Personas', 'Layout (F-Pattern)', 'KPI Selection', 'Interactivity (Filters/Actions)', 'Performance Tuning', 'Mobile Layouts', 'User Testing']
    },
    {
        id: 'week-20', phase: 3, title: 'Week 20: Viz Project', description: 'Full Dashboard Build.',
        days: ['Requirement Gathering', 'Sketching/Wireframing', 'Data Prep', 'Building Visuals', 'Assembling Dashboard', 'Feedback Loop', 'Phase 3 Exam: The Dashboard']
    },

    // --- PHASE 4: THE HEALTHCARE EXPERT (Weeks 21-28) ---
    {
        id: 'week-21', phase: 4, title: 'Week 21: US Healthcare 101', description: 'The System Overview.',
        days: ['Payers (Insurance)', 'Providers (Doctors/Hospitals)', 'Patients', 'Medicare vs Medicaid', 'Commercial Insurance', 'The Revenue Cycle', 'Value-Based Care']
    },
    {
        id: 'week-22', phase: 4, title: 'Week 22: Medical Coding', description: 'The language of billing.',
        days: ['ICD-10-CM (Diagnoses)', 'ICD-10-PCS (Procedures)', 'CPT Codes (Outpatient)', 'HCPCS Codes', 'DRG (Diagnosis Related Groups)', 'Modifiers', 'Coding Guidelines']
    },
    {
        id: 'week-23', phase: 4, title: 'Week 23: Claims Data', description: 'The 837 and 835 files.',
        days: ['The CMS-1500 Form', 'The UB-04 Form', 'EDI 837 (Claim Submission)', 'EDI 835 (Remittance)', 'Explanation of Benefits (EOB)', 'Denials & Appeals', 'Adjudication Process']
    },
    {
        id: 'week-24', phase: 4, title: 'Week 24: Clinical Data', description: 'EHRs and Patient Care.',
        days: ['EHR vs EMR', 'HL7 Standards', 'FHIR Resources', 'DICOM (Imaging)', 'Lab Data (LOINC)', 'Pharmacy Data (NDC)', 'Clinical Notes (Unstructured)']
    },
    {
        id: 'week-25', phase: 4, title: 'Week 25: Healthcare KPIs', description: 'What we measure.',
        days: ['Length of Stay (LOS)', 'Readmission Rates', 'Patient Satisfaction (HCAHPS)', 'PMPM (Per Member Per Month)', 'Utilization Rates', 'HEDIS Measures', 'Star Ratings']
    },
    {
        id: 'week-26', phase: 4, title: 'Week 26: Regulatory & Privacy', description: 'Keeping data safe.',
        days: ['HIPAA Basics', 'PHI (Protected Health Info)', 'HITECH Act', 'Data De-identification', 'Security Rule', 'Privacy Rule', 'Breach Notification']
    },
    {
        id: 'week-27', phase: 4, title: 'Week 27: Interoperability', description: 'Systems talking to systems.',
        days: ['The Interop Problem', 'Health Information Exchanges (HIE)', 'API Integration', 'SMART on FHIR', 'Tegria/Epic/Cerner Overview', 'Data Blocking Rule', 'Future of Interop']
    },
    {
        id: 'week-28', phase: 4, title: 'Week 28: Healthcare Project', description: 'Real-world Analysis.',
        days: ['Population Health Analysis', 'Risk Stratification', 'Cost Analysis', 'Quality Improvement', 'Dashboarding Health Data', 'Presenting to Doctors', 'Phase 4 Exam: The Hospital']
    },

    // --- PHASE 5: THE CODER (Weeks 29-40) ---
    {
        id: 'week-29', phase: 5, title: 'Week 29: Python Setup', description: 'Entering the Matrix.',
        days: ['Why Python for Data?', 'Anaconda & Jupyter', 'Variables & Types', 'Strings & Printing', 'Basic Math in Python', 'Comments & Docs', 'The Zen of Python']
    },
    {
        id: 'week-30', phase: 5, title: 'Week 30: Control Flow', description: 'Logic in Code.',
        days: ['Booleans', 'If / Elif / Else', 'For Loops', 'While Loops', 'Break & Continue', 'List Comprehensions', 'Error Handling (Try/Except)']
    },
    {
        id: 'week-31', phase: 5, title: 'Week 31: Data Structures', description: 'Organizing memory.',
        days: ['Lists (Arrays)', 'Dictionaries (Hash Maps)', 'Tuples (Immutable)', 'Sets (Unique)', 'Nesting Structures', 'Slicing & Indexing', 'Mutability']
    },
    {
        id: 'week-32', phase: 5, title: 'Week 32: Functions', description: 'Reusable Logic.',
        days: ['Defining Functions (def)', 'Parameters & Arguments', 'Return Values', 'Scope (Local/Global)', '*args & **kwargs', 'Lambda Functions', 'Modules & Imports']
    },
    {
        id: 'week-33', phase: 5, title: 'Week 33: Pandas Basics', description: 'Excel on Steroids.',
        days: ['Series vs DataFrames', 'Reading CSV/Excel', 'Inspecting Data (head/info)', 'Selecting Columns', 'Filtering Rows', 'Sorting Data', 'Exporting Data']
    },
    {
        id: 'week-34', phase: 5, title: 'Week 34: Pandas Cleaning', description: 'Fixing messy data.',
        days: ['Handling Missing Data (dropna/fillna)', 'Removing Duplicates', 'Renaming Columns', 'Type Conversion', 'String Operations', 'Apply & Map', 'Vectorization']
    },
    {
        id: 'week-35', phase: 5, title: 'Week 35: Pandas Advanced', description: 'Complex manipulation.',
        days: ['Groupby & Aggregation', 'Pivot Tables in Pandas', 'Merging (Joins)', 'Concatenating', 'Melt & Stack', 'Time Series Data', 'Multi-Index']
    },
    {
        id: 'week-36', phase: 5, title: 'Week 36: Visualization (Code)', description: 'Matplotlib & Seaborn.',
        days: ['Matplotlib Anatomy', 'Line & Scatter Plots', 'Seaborn Styles', 'Histograms & Distributions', 'Boxplots & Outliers', 'Heatmaps', 'Subplots']
    },
    {
        id: 'week-37', phase: 5, title: 'Week 37: Statistics 101', description: 'The math of data.',
        days: ['Mean, Median, Mode', 'Standard Deviation', 'Normal Distribution', 'Percentiles & Quartiles', 'Correlation vs Causation', 'Hypothesis Testing', 'P-Values Explained']
    },
    {
        id: 'week-38', phase: 5, title: 'Week 38: APIs & Web', description: 'Fetching external data.',
        days: ['What is an API?', 'JSON Format', 'Requests Library', 'GET vs POST', 'Status Codes (200/404)', 'Authentication (Keys)', 'Rate Limiting']
    },
    {
        id: 'week-39', phase: 5, title: 'Week 39: Automation', description: 'Scripting tasks.',
        days: ['OS Module (Files)', 'Automating Excel (OpenPyXL)', 'Sending Emails (SMTP)', 'Scheduling Scripts (Cron)', 'Logging', 'Web Scraping (BeautifulSoup)', 'Building a Bot']
    },
    {
        id: 'week-40', phase: 5, title: 'Week 40: Git & GitHub', description: 'Version Control.',
        days: ['Why Git?', 'Init, Add, Commit', 'Push & Pull', 'Branches', 'Merge Conflicts', 'Pull Requests', 'Portfolio Building']
    },

    // --- PHASE 6: THE AI SPECIALIST (Weeks 41-52) ---
    {
        id: 'week-41', phase: 6, title: 'Week 41: ML Concepts', description: 'Teaching machines.',
        days: ['What is Machine Learning?', 'Supervised vs Unsupervised', 'Regression vs Classification', 'The ML Pipeline', 'Training vs Testing Data', 'Overfitting vs Underfitting', 'Bias & Variance']
    },
    {
        id: 'week-42', phase: 6, title: 'Week 42: Scikit-Learn', description: 'The ML Library.',
        days: ['Scikit-Learn API', 'Data Preprocessing', 'Scaling/Normalization', 'Encoding Categoricals', 'Train-Test Split', 'Cross-Validation', 'Pipelines']
    },
    {
        id: 'week-43', phase: 6, title: 'Week 43: Regression', description: 'Predicting numbers.',
        days: ['Linear Regression Math', 'Simple vs Multiple', 'Coefficients & Intercepts', 'Evaluation (RMSE/MAE)', 'R-Squared', 'Polynomial Regression', 'Predicting Costs']
    },
    {
        id: 'week-44', phase: 6, title: 'Week 44: Classification', description: 'Predicting diagnoses.',
        days: ['Logistic Regression', 'Decision Trees', 'Random Forests', 'Confusion Matrix', 'Accuracy/Precision/Recall', 'F1 Score', 'ROC & AUC']
    },
    {
        id: 'week-45', phase: 6, title: 'Week 45: Clustering', description: 'Finding patterns.',
        days: ['K-Means Clustering', 'The Elbow Method', 'Hierarchical Clustering', 'DBSCAN', 'Dimensionality Reduction (PCA)', 'Patient Segmentation', 'Anomaly Detection']
    },
    {
        id: 'week-46', phase: 6, title: 'Week 46: NLP in Healthcare', description: 'Reading doctor notes.',
        days: ['Text Data Challenges', 'Tokenization', 'Stop Words', 'Bag of Words', 'TF-IDF', 'Sentiment Analysis', 'Extracting Symptoms (NER)']
    },
    {
        id: 'week-47', phase: 6, title: 'Week 47: Neural Networks', description: 'Deep Learning.',
        days: ['Neurons & Layers', 'Activation Functions', 'Forward/Back Propagation', 'Loss Functions', 'Optimizers (Adam)', 'Keras/TensorFlow Intro', 'Medical Imaging (CNNs)']
    },
    {
        id: 'week-48', phase: 6, title: 'Week 48: Model Deployment', description: 'Into production.',
        days: ['Saving Models (Pickle)', 'Flask/FastAPI Basics', 'Docker Containers', 'Cloud Deployment (AWS/Azure)', 'Monitoring Drift', 'CI/CD for ML', 'Model Governance']
    },
    {
        id: 'week-49', phase: 6, title: 'Week 49: Ethics & AI', description: 'Do no harm.',
        days: ['Algorithmic Bias', 'Fairness in Healthcare', 'Explainable AI (SHAP)', 'Privacy in ML', 'FDA Regulation', 'The Black Box Problem', 'Human-in-the-loop']
    },
    {
        id: 'week-50', phase: 6, title: 'Week 50: Capstone - Build', description: 'The Final Project.',
        days: ['Problem Definition', 'Data Sourcing', 'EDA & Cleaning', 'Feature Engineering', 'Model Selection', 'Tuning & Optimization', 'Final Evaluation']
    },
    {
        id: 'week-51', phase: 6, title: 'Week 51: Capstone - Present', description: 'The Story.',
        days: ['Building the App (Streamlit)', 'Creating the Deck', 'Visualizing Results', 'Business Impact', 'Recording Demo', 'GitHub Readme', 'Portfolio Polish']
    },
    {
        id: 'week-52', phase: 6, title: 'Week 52: Graduation', description: 'You made it.',
        days: ['Final Presentation', 'Peer Review', 'Reflection', 'Career Path Planning', 'Networking Strategy', 'Continuous Learning', 'YOU ARE A PRO!']
    }
];

// Generate the roadmap object
window.roadmap = curriculum.map(week => ({
    id: week.id,
    phase: week.phase,
    title: week.title,
    description: week.description,
    status: 'locked', // Default locked
    days: week.days.map((dayTitle, index) => ({
        id: `${week.id}-d${index + 1}`,
        title: dayTitle.startsWith('Day') ? dayTitle : `Day ${index + 1}: ${dayTitle}`,
        lessonId: `lesson-${week.id}-d${index + 1}`, // Link to specific lesson ID
        status: 'locked'
    }))
}));

// Unlock Week 1 Day 1 by default
window.roadmap[0].status = 'unlocked';
window.roadmap[0].days[0].status = 'unlocked';
