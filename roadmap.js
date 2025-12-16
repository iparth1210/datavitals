/**
 * 🗺️ ROADMAP DATA 🗺️
 * Defines the 52-week journey structure.
 */

const phases = {
    1: "Phase 1: The Foundation (Weeks 1-8)",
    2: "Phase 2: The Data Analyst (Weeks 9-20)",
    3: "Phase 3: The Python Developer (Weeks 21-32)",
    4: "Phase 4: The AI Specialist (Weeks 33-52)"
};

const weekTitles = [
    "Computer Basics & Setup", "Excel: The Grid", "Excel: Formulas 101", "Excel: Charts & Viz",
    "Excel: Pivot Tables", "Excel: Cleaning Data", "Excel: Real World Project", "Phase 1 Capstone Exam",
    "SQL: Hello Database", "SQL: SELECT & WHERE", "SQL: Aggregates (COUNT/SUM)", "SQL: GROUP BY",
    "SQL: JOINS (Left/Right)", "SQL: Advanced JOINS", "SQL: Subqueries", "SQL: Data Modeling",
    "PowerBI: Intro", "PowerBI: DAX", "PowerBI: Dashboards", "Phase 2 Capstone Project",
    "Python: Setup & Print", "Python: Variables & Types", "Python: Logic (If/Else)", "Python: Loops",
    "Python: Functions", "Python: Data Structures", "Python: Pandas Intro", "Python: Data Cleaning",
    "Python: Matplotlib/Seaborn", "Python: Sklearn Intro", "Python: Web Scraping", "Phase 3 Capstone",
    "Math for AI (Stats)", "Math for AI (Linear Alg)", "ML: Linear Regression", "ML: Logistic Regression",
    "ML: Decision Trees", "ML: Random Forests", "ML: Clustering", "Deep Learning: Concepts",
    "Neural Networks 101", "TensorFlow/Keras", "CNNs (Images)", "RNNs (Text)",
    "NLP Basics", "Transformers", "GenAI Overview", "Prompt Engineering",
    "AI Ethics", "Final Project: Planning", "Final Project: Building", "Final Project: Graduation"
];

const generateRoadmap = () => {
    const roadmap = [];

    // Generate 52 Weeks
    for (let i = 0; i < 52; i++) {
        const weekNum = i + 1;
        let phase = 1;
        if (weekNum > 8) phase = 2;
        if (weekNum > 20) phase = 3;
        if (weekNum > 32) phase = 4;

        const days = [];
        for (let d = 1; d <= 7; d++) {
            let dayTitle = `Day ${d}`;
            // Custom titles for Week 1 (matching modules.js)
            if (weekNum === 1) {
                const titles = [
                    "Hardware vs Software", "The Operating System", "Files & Folders",
                    "The Internet & Cloud", "Data Units", "Security (HIPAA)", "Weekly Review"
                ];
                dayTitle = titles[d - 1];
            } else {
                // Generic Day Titles based on Week Topic
                const topic = weekTitles[i];
                if (d === 7) dayTitle = "Weekly Concept Review";
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
