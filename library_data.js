/**
 * 📚 LIBRARY RESOURCES v5.7 📚
 * Detailed Day-by-Day with Chapter-Level Granularity
 */

// --- DYNAMIC CONTENT GENERATORS ---

const excelTopics = [
    { ch: "1", title: "Getting Started", doc: "https://support.microsoft.com/en-us/office/excel-video-training-9bc05390-e94c-46af-a5b3-d7c22f6990bb" },
    { ch: "2", title: "Entering Data", doc: "https://support.microsoft.com/en-us/office/enter-data-manually-in-worksheet-cells-c6199342-83b5-4b53-8f0a-d8302f37e42d" },
    { ch: "3", title: "Formulas & Functions", doc: "https://support.microsoft.com/en-us/office/overview-of-formulas-in-excel-ecfdc708-9162-49e8-b993-c311f47ca173" },
    { ch: "4", title: "Formatting", doc: "https://support.microsoft.com/en-us/office/format-cells-90a61253-1579-4a00-9856-78ccabfc516f" },
    { ch: "5", title: "Charts & Graphs", doc: "https://support.microsoft.com/en-us/office/create-a-chart-from-start-to-finish-0bafdc58-466d-441d-9c3f-c7c936c5o88" },
    { ch: "6", title: "Pivot Tables", doc: "https://support.microsoft.com/en-us/office/create-a-pivottable-to-analyze-worksheet-data-a9a84538-bfe9-40a9-a8e9-f991344565bc" },
    { ch: "7", title: "Data Analysis", doc: "https://support.microsoft.com/en-us/office/load-the-analysis-toolpak-in-excel-6a63e598-cd6d-42e3-9317-6b40ba1a66b4" }
];

const sqlTopics = [
    { ch: "1", title: "Relational Concepts", doc: "https://www.postgresql.org/docs/current/tutorial-concepts.html" },
    { ch: "2", title: "Basic SELECT", doc: "https://www.postgresql.org/docs/current/queries-table-expressions.html" },
    { ch: "3", title: "Filtering (WHERE)", doc: "https://www.w3schools.com/sql/sql_where.asp" },
    { ch: "4", title: "Aggregates (SUM/COUNT)", doc: "https://www.postgresql.org/docs/current/tutorial-agg.html" },
    { ch: "5", title: "GROUP BY & HAVING", doc: "https://www.w3schools.com/sql/sql_groupby.asp" },
    { ch: "6", title: "JOINS (Inner/Outer)", doc: "https://www.postgresql.org/docs/current/tutorial-join.html" },
    { ch: "7", title: "Database Design", doc: "https://www.postgresql.org/docs/current/ddl.html" }
];

const getExcelResources = (dayNum) => {
    const topic = excelTopics[(dayNum - 1) % excelTopics.length];
    return [
        { title: `📖 Excel Bible: Ch.${topic.ch} "${topic.title}"`, type: "book", url: "https://www.amazon.com/Excel-2019-Bible-Michael-Alexander/dp/1119514789" },
        { title: `📝 MS Docs: ${topic.title}`, type: "doc", url: topic.doc },
        { title: `🛠️ Practice Sheet: ${topic.title}`, type: "tool", url: "https://sheets.new" }
    ];
};

const getSqlResources = (dayNum) => {
    const topic = sqlTopics[(dayNum - 1) % sqlTopics.length];
    return [
        { title: `📖 Learning SQL: Ch.${topic.ch} "${topic.title}"`, type: "book", url: "https://www.amazon.com/Learning-SQL-Generate-Manipulate-Retrofit/dp/1492057614" },
        { title: `📺 Video: SQL ${topic.title} Guide`, type: "video", url: "https://www.youtube.com/results?search_query=sql+" + topic.title.replace(' ', '+') },
        { title: `📝 Postgres Docs: ${topic.title}`, type: "doc", url: topic.doc }
    ];
};

const getPythonResources = (dayNum) => {
    return [
        { title: `📖 Python Crash Course: Chapter ${dayNum}`, type: "book", url: "#" },
        { title: `📺 Python Tutorial Part ${dayNum}`, type: "video", url: "https://www.youtube.com/watch?v=_uQrJ0TkZlc" },
        { title: `🛠️ Replit IDE (New Repl)`, type: "tool", url: "https://replit.com/new/python3" }
    ];
};

const getAIResources = (dayNum) => {
    return [
        { title: `📖 Hands-On ML: Chapter ${dayNum}`, type: "book", url: "#" },
        { title: `📺 StatQuest: ML Concept ${dayNum}`, type: "video", url: "https://www.youtube.com/c/joshstarmer" },
        { title: `📝 Scikit-Learn Guide: Section ${dayNum}`, type: "doc", url: "https://scikit-learn.org/stable/" }
    ];
};


// --- MAIN DATA ---

window.libraryResources = [
    // --- WEEK 1: COMPUTER BASICS (Detailed) ---
    {
        weekTitle: "Week 1: Computer Basics & Setup",
        days: [
            {
                dayTitle: "Day 1: Hardware vs Software",
                resources: [
                    { title: "📖 Code (Petzold): Ch.1 \"Best Friends\"", type: "book", url: "https://www.amazon.com/Code-Language-Computer-Hardware-Software/dp/0735611319" },
                    { title: "📺 CrashCourse CS: Hardware", type: "video", url: "https://www.youtube.com/watch?v=tpIctyqH29Q" },
                    { title: "🛠️ Logic.ly Gates Demo", type: "tool", url: "https://logic.ly/demo" }
                ]
            },
            {
                dayTitle: "Day 2: The Operating System",
                resources: [
                    { title: "📖 Modern OS: Ch.1 \"Introduction\"", type: "book", url: "#" },
                    { title: "📺 How OS Works (Code.org)", type: "video", url: "https://www.youtube.com/watch?v=26QPDBe-TK8" },
                    { title: "🛠️ JSLinux (Run Linux in Browser)", type: "tool", url: "https://bellard.org/jslinux/" }
                ]
            },
            {
                dayTitle: "Day 3: Files & Folders",
                resources: [
                    { title: "📖 Windows Internals: Ch.12 \"File Systems\"", type: "book", url: "#" },
                    { title: "📺 Files & File Systems", type: "video", url: "https://www.youtube.com/watch?v=KN8YgBkVEOM" },
                    { title: "📝 NTFS vs FAT32 Guide", type: "doc", url: "https://www.howtogeek.com/177078/htg-explains-what-file-system-should-i-use-for-my-usb-drive/" }
                ]
            },
            {
                dayTitle: "Day 4: The Internet & Cloud",
                resources: [
                    { title: "📖 Tubes: Ch.2 \"The Map\"", type: "book", url: "#" },
                    { title: "📺 How the Internet Works in 5 mins", type: "video", url: "https://www.youtube.com/watch?v=7_LPdttKXPc" },
                    { title: "📝 AWS Cloud Concepts", type: "doc", url: "https://aws.amazon.com/what-is-cloud-computing/" }
                ]
            },
            {
                dayTitle: "Day 5: Data Units (Bits/Bytes)",
                resources: [
                    { title: "📖 Code (Petzold): Ch.6 \"Logic Gates\"", type: "book", url: "#" },
                    { title: "📺 Bits and Bytes Explained", type: "video", url: "https://www.youtube.com/watch?v=5i_loW3eK3w" },
                    { title: "🛠️ RapidTables Binary Converter", type: "tool", url: "https://www.rapidtables.com/convert/number/binary-to-decimal.html" }
                ]
            },
            {
                dayTitle: "Day 6: Security (HIPAA)",
                resources: [
                    { title: "📖 Ghost in the Wires: Ch.1", type: "book", url: "#" },
                    { title: "📺 Cyber Security 101", type: "video", url: "https://www.youtube.com/watch?v=inWWhr5tnEA" },
                    { title: "📝 HIPAA Official Summary", type: "doc", url: "https://www.hhs.gov/hipaa/for-professionals/security/laws-regulations/index.html" }
                ]
            },
            {
                dayTitle: "Day 7: Weekly Review",
                resources: [
                    { title: "📝 Week 1 Flashcards", type: "tool", url: "https://quizlet.com/latest" },
                    { title: "📺 CS50: Lecture 0", type: "video", url: "https://www.youtube.com/watch?v=y62mj9tT5rE" }
                ]
            }
        ]
    },
    // --- WEEK 2-8: EXCEL (Dynamic) ---
    ...[2, 3, 4, 5, 6, 7, 8].map(w => ({
        weekTitle: `Week ${w}: Excel Mastery`,
        days: Array.from({ length: 7 }, (_, i) => ({
            dayTitle: `Day ${i + 1}: Excel Topic ${i + 1}`,
            resources: getExcelResources(i + 1)
        }))
    })),
    // --- WEEK 9-16: SQL (Dynamic) ---
    ...[9, 10, 11, 12, 13, 14, 15, 16].map(w => ({
        weekTitle: `Week ${w}: SQL Mastery`,
        days: Array.from({ length: 7 }, (_, i) => ({
            dayTitle: `Day ${i + 1}: SQL Patterns ${i + 1}`,
            resources: getSqlResources(i + 1)
        }))
    })),
    // --- WEEK 17-20: POWERBI ---
    ...[17, 18, 19, 20].map(w => ({
        weekTitle: `Week ${w}: Power BI & Viz`,
        days: Array.from({ length: 7 }, (_, i) => ({
            dayTitle: `Day ${i + 1}: Visualization`,
            resources: [
                { title: "📖 Storytelling with Data: Ch.1", type: "book", url: "#" },
                { title: "📺 PowerBI for Beginners", type: "video", url: "https://www.youtube.com/watch?v=T7487qaXh2Y" },
                { title: "🛠️ PowerBI Service Login", type: "tool", url: "https://app.powerbi.com/" }
            ]
        }))
    })),
    // --- REST: PYTHON & AI ---
    ...Array.from({ length: 32 }, (_, i) => i + 21).map(w => {
        const isAI = w > 32;
        return {
            weekTitle: `Week ${w}: ${isAI ? 'AI Specialization' : 'Python Development'}`,
            days: Array.from({ length: 7 }, (_, i) => ({
                dayTitle: `Day ${i + 1}: Concept Deep Dive`,
                resources: isAI ? getAIResources(i + 1) : getPythonResources(i + 1)
            }))
        };
    })
];
