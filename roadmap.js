/**
 * 🗺️ ROADMAP DATA MASTER 🗺️
 * 52-Week Master Curriculum: From Absolute Zero to Pro Pro Pro AI & Analytics Specialist
 */

const phases = {
    1: "Phase 1: Foundations, Spreadsheets & Applied Statistics (Weeks 1-8)",
    2: "Phase 2: Relational Databases, SQL & Analytics Engineering (Weeks 9-20)",
    3: "Phase 3: Python Programming, Data Science & SciPy (Weeks 21-32)",
    4: "Phase 4: Machine Learning, AI Architect & Technical Career Prep (Weeks 33-52)"
};

const weekTitles = [
    // --- PHASE 1: BASICS & SPREADSHEETS & STATS (WEEKS 1-8) ---
    "Computer Basics & Infrastructure",
    "Excel 101: The Grid & Data Types",
    "Excel Formulas: IF, AND, OR & Math",
    "Excel Lookups: VLOOKUP & XLOOKUP",
    "Descriptive Statistics (Mean, Median, StdDev)",
    "Inferential Statistics & Hypothesis Testing (T-Tests)",
    "Excel Pivot Tables & Dashboard Viz",
    "Phase 1 Capstone: Foundations Audit",

    // --- PHASE 2: SQL & ANALYTICS ENGINEERING (WEEKS 9-20) ---
    "SQL 101: Databases & SELECT",
    "SQL Filtering: WHERE, LIKE, IN & BETWEEN",
    "SQL Aggregations: COUNT, SUM, AVG & GROUP BY",
    "SQL JOINS: INNER, LEFT, RIGHT & FULL",
    "SQL Advanced: Subqueries & CTEs",
    "SQL Window Functions & Analytical Partitioning",
    "A/B Testing Experiments & Risk Metrics",
    "Data Modeling: ERDs, Normalization & Schemas",
    "PowerBI / Tableau: Data Ingestion",
    "PowerBI: DAX Formulas & Calculated Columns",
    "PowerBI: Executive Dashboard Design",
    "Phase 2 Capstone: SQL & BI Project",

    // --- PHASE 3: PYTHON DATA SCIENCE & ENGINEERING (WEEKS 21-32) ---
    "Python 101: Setup, Print & Variables",
    "Python Logic: If/Else & Boolean Math",
    "Python Control Flow: For & While Loops",
    "Python Data Structures: Lists, Dicts & Sets",
    "Python Statistical Computing (SciPy & Statsmodels)",
    "Python Functions, Modules & Scoping",
    "Pandas 101: Series & DataFrames",
    "Pandas Data Cleaning & Handling Missing Values",
    "Pandas GroupBy, Pivot & Merging",
    "Data Viz: Matplotlib & Seaborn Mastery",
    "Web Scraping (BeautifulSoup) & REST APIs",
    "Phase 3 Capstone: Python Data Pipeline",

    // --- PHASE 4: PRO PRO PRO MACHINE LEARNING & AI ARCHITECT (WEEKS 33-52) ---
    "Math for AI: Linear Algebra & Matrix Math",
    "Math for AI: Calculus & Gradient Descent",
    "ML 101: Supervised vs Unsupervised Learning",
    "ML Regression: Linear & Polynomial Models",
    "ML Classification: Logistic Regression & ROC/AUC",
    "ML Decision Trees & Ensemble Random Forests",
    "ML Model Evaluation: Cross-Validation & GridSearch",
    "ML Unsupervised: K-Means & PCA Dimensionality",
    "Deep Learning 101: Perceptrons & Activation Functions",
    "Neural Networks: Backpropagation & Loss Functions",
    "Frameworks: PyTorch & TensorFlow Fundamentals",
    "Computer Vision: CNNs & Image Recognition",
    "Natural Language Processing (NLP): Text Processing",
    "Sequential AI: Recurrent Neural Networks (RNNs)",
    "Transformers & Attention Mechanisms (Self-Attention)",
    "Generative AI & Large Language Models (LLMs)",
    "RAG (Retrieval-Augmented Generation) & Vector DBs",
    "Prompt Engineering & Fine-Tuning Protocols",
    "Career Prep 101: Technical SQL & Python Interviews",
    "Career Prep 202: Portfolio Building & GitHub Showcase",
    "Final Capstone Project: Architecture & Building",
    "Final Graduation: Production Deployment & Career Ready"
];

const generateRoadmap = () => {
    const roadmap = [];

    for (let i = 0; i < 52; i++) {
        const weekNum = i + 1;
        let phase = 1;
        if (weekNum > 8) phase = 2;
        if (weekNum > 20) phase = 3;
        if (weekNum > 32) phase = 4;

        const days = [];
        for (let d = 1; d <= 7; d++) {
            let dayTitle = `Day ${d}`;
            if (weekNum === 1) {
                const titles = [
                    "Hardware vs Software", "The Operating System", "Files & Folders",
                    "The Internet & Cloud", "Data Units & Bytes", "Security & Privacy", "Weekly Review"
                ];
                dayTitle = titles[d - 1];
            } else {
                const topic = weekTitles[i];
                if (d === 7) dayTitle = "Weekly Concept & Lab Review";
                else dayTitle = `${topic} - Part ${d}`;
            }

            days.push({
                id: `week-${weekNum}-d${d}`,
                title: dayTitle,
                lessonId: `lesson-w${weekNum}-d${d}`
            });
        }

        roadmap.push({
            id: `week-${weekNum}`,
            phase: phase,
            title: `Week ${weekNum}: ${weekTitles[i]}`,
            description: phases[phase],
            days: days
        });
    }
    return roadmap;
};

window.roadmap = generateRoadmap();
