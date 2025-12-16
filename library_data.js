/**
 * 📚 LIBRARY RESOURCES v5.6 📚
 * Comprehensive Day-by-Day Curriculum Resources
 * Covering Weeks 1-12 Detailed + Phase 2-4 Support
 */

const commonResources = {
    excel: [
        { title: "📖 Excel 2019 Bible", type: "book", url: "https://www.amazon.com/Excel-2019-Bible-Michael-Alexander/dp/1119514789" },
        { title: "📺 ExcelIsFun (YouTube)", type: "video", url: "https://www.youtube.com/user/ExcelIsFun" },
        { title: "📝 MS Excel Documentation", type: "doc", url: "https://support.microsoft.com/en-us/excel" },
        { title: "🛠️ Excel Formula Beautifier", type: "tool", url: "https://www.excelformulabeautifier.com/" }
    ],
    sql: [
        { title: "📖 Learning SQL (O'Reilly)", type: "book", url: "https://www.amazon.com/Learning-SQL-Generate-Manipulate-Retrofit/dp/1492057614" },
        { title: "📺 SqLZoo Interactive", type: "practice", url: "https://sqlzoo.net/" },
        { title: "📝 PostgreSQL Docs", type: "doc", url: "https://www.postgresql.org/docs/" },
        { title: "🛠️ DB Fiddle", type: "tool", url: "https://www.db-fiddle.com/" }
    ],
    python: [
        { title: "📖 Python Crash Course", type: "book", url: "https://ehmatthes.github.io/pcc_3e/" },
        { title: "📺 Corey Schafer Python", type: "video", url: "https://www.youtube.com/user/schafer5" },
        { title: "📝 Python 3.11 Docs", type: "doc", url: "https://docs.python.org/3/" },
        { title: "🛠️ Replit Online IDE", type: "tool", url: "https://replit.com/" }
    ],
    ml: [
        { title: "📖 Hands-On ML with Scikit-Learn", type: "book", url: "https://www.amazon.com/Hands-Machine-Learning-Scikit-Learn-TensorFlow/dp/1492032646" },
        { title: "📺 StatQuest with Josh Starmer", type: "video", url: "https://www.youtube.com/c/joshstarmer" },
        { title: "📝 Scikit-Learn User Guide", type: "doc", url: "https://scikit-learn.org/stable/user_guide.html" },
        { title: "🛠️ Google Colab", type: "tool", url: "https://colab.research.google.com/" }
    ]
};

// Helper to generate generic daily resources based on topic
function getDailyResources(weekTitle, dayNum) {
    let base = [];

    if (weekTitle.includes("Excel")) base = [...commonResources.excel];
    else if (weekTitle.includes("SQL")) base = [...commonResources.sql];
    else if (weekTitle.includes("Python")) base = [...commonResources.python];
    else if (weekTitle.includes("ML") || weekTitle.includes("AI") || weekTitle.includes("Neural")) base = [...commonResources.ml];
    else base = [{ title: "Search Topic on Google", type: "tool", url: `https://www.google.com/search?q=${weekTitle}` }];

    // Add variety per day
    return base.map(b => ({ ...b, title: `${b.title} (Part ${dayNum})` })).slice(0, 3);
}

window.libraryResources = [
    // --- WEEK 1: COMPUTER BASICS ---
    {
        weekTitle: "Week 1: Computer Basics & Setup",
        days: [
            {
                dayTitle: "Day 1: Hardware vs Software",
                resources: [
                    { title: "📖 Code: The Hidden Language", type: "book", url: "https://www.amazon.com/Code-Language-Computer-Hardware-Software/dp/0735611319" },
                    { title: "📺 Computer Science S1: Hardware", type: "video", url: "https://www.youtube.com/watch?v=tpIctyqH29Q" },
                    { title: "📝 Von Neumann Architecture", type: "article", url: "https://en.wikipedia.org/wiki/Von_Neumann_architecture" }
                ]
            },
            {
                dayTitle: "Day 2: The Operating System",
                resources: [
                    { title: "📖 Modern Operating Systems", type: "book", url: "https://www.amazon.com/Modern-Operating-Systems-Andrew-Tanenbaum/dp/013359162X" },
                    { title: "📺 History of Unix", type: "video", url: "https://www.youtube.com/watch?v=tc4ROCJYbm0" },
                    { title: "🛠️ Ubuntu Online Tour", type: "tool", url: "https://tour.ubuntu.com/" }
                ]
            },
            {
                dayTitle: "Day 3: Files & Folders",
                resources: [
                    { title: "📝 File Systems Explained", type: "article", url: "https://www.howtogeek.com/school/windows-network-sharing/lesson1/" },
                    { title: "📺 Tree Data Structures", type: "video", url: "https://www.youtube.com/watch?v=oSWTXtMglKE" },
                    { title: "🛠️ WinDirStat (Disk Analyzer)", type: "tool", url: "https://windirstat.net/" }
                ]
            },
            {
                dayTitle: "Day 4: The Internet & Cloud",
                resources: [
                    { title: "📖 Tubes: A Journey to the Center of the Internet", type: "book", url: "https://www.amazon.com/Tubes-Journey-Center-Internet-Andrew/dp/0061996430" },
                    { title: "📺 How the Internet Works", type: "video", url: "https://www.youtube.com/watch?v=TNQsmPf24go" },
                    { title: "📝 AWS Global Infrastructure", type: "doc", url: "https://aws.amazon.com/about-aws/global-infrastructure/" }
                ]
            },
            {
                dayTitle: "Day 5: Data Units (Bits/Bytes)",
                resources: [
                    { title: "📝 Bits, Bytes, and Binary", type: "article", url: "https://www.mathsisfun.com/binary-number-system.html" },
                    { title: "📺 8-Bit Computer Build", type: "video", url: "https://www.youtube.com/watch?v=HyznrdDSSGM" },
                    { title: "🛠️ Binary Converter", type: "tool", url: "https://www.rapidtables.com/convert/number/binary-to-decimal.html" }
                ]
            },
            {
                dayTitle: "Day 6: Security & Privacy",
                resources: [
                    { title: "📖 The Art of Invisibility", type: "book", url: "https://www.amazon.com/Art-Invisibility-Worlds-Famous-Hacker/dp/0316380504" },
                    { title: "📝 HIPAA Survival Guide", type: "doc", url: "https://www.hipaasurvivalguide.com/" },
                    { title: "🛠️ Have I Been Pwned?", type: "tool", url: "https://haveibeenpwned.com/" }
                ]
            },
            {
                dayTitle: "Day 7: Weekly Review",
                resources: [
                    { title: "📝 Week 1 Recap Quiz", type: "practice", url: "#" },
                    { title: "📺 Crash Course Computer Science", type: "video", url: "https://www.youtube.com/playlist?list=PL8dPuuaLjXtNlUrcyKGWxoyJipZnJpCrn" }
                ]
            }
        ]
    },
    // --- WEEK 2: EXCEL THE GRID ---
    {
        weekTitle: "Week 2: Excel: The Grid",
        days: Array.from({ length: 7 }, (_, i) => ({
            dayTitle: `Day ${i + 1}: Interface & Entry`,
            resources: [
                { title: "📖 Excel Bible: Chapter 1", type: "book", url: "#" },
                { title: `📺 Excel Basics Part ${i + 1}`, type: "video", url: "https://www.youtube.com/watch?v=k1VUZEVuDJ8" },
                { title: "📝 Shortcut Keys Cheat Sheet", type: "cheatsheet", url: "https://support.microsoft.com/en-us/office/keyboard-shortcuts-in-excel-1798d9d5-842a-42b8-9c99-9b7213f0040f" }
            ]
        }))
    },
    // --- WEEK 3: EXCEL FORMULAS ---
    {
        weekTitle: "Week 3: Excel: Formulas 101",
        days: Array.from({ length: 7 }, (_, i) => ({
            dayTitle: `Day ${i + 1}: Logic & Math`,
            resources: [
                { title: "📺 Master IF Functions", type: "video", url: "https://www.youtube.com/watch?v=KkIGWZzpGkU" },
                { title: "📝 VLOOKUP vs INDEX/MATCH", type: "article", url: "https://exceljet.net/index-match-vs-vlookup" },
                { title: "🛠️ Excel Practice Sheet", type: "tool", url: "#" }
            ]
        }))
    },
    // --- WEEK 4: EXCEL CHARTS ---
    {
        weekTitle: "Week 4: Excel: Charts & Viz",
        days: Array.from({ length: 7 }, (_, i) => ({
            dayTitle: `Day ${i + 1}: Visual Storytelling`,
            resources: [
                { title: "📖 Storytelling with Data", type: "book", url: "https://www.storytellingwithdata.com/" },
                { title: "📺 Advanced Excel Charts", type: "video", url: "https://www.youtube.com/watch?v=4X58Yy0Vl6c" },
                { title: "📝 Color Theory for Data", type: "article", url: "https://blog.hubspot.com/marketing/color-theory-design" }
            ]
        }))
    },
    // --- WEEK 5-8: ADVANCED EXCEL ---
    ...[5, 6, 7, 8].map(w => ({
        weekTitle: `Week ${w}: Advanced Excel`,
        days: Array.from({ length: 7 }, (_, i) => ({
            dayTitle: `Day ${i + 1}: Advanced Usage`,
            resources: [...commonResources.excel].slice(0, 3)
        }))
    })),
    // --- WEEK 9-16: SQL ---
    ...[9, 10, 11, 12, 13, 14, 15, 16].map(w => ({
        weekTitle: `Week ${w}: SQL Mastery`,
        days: Array.from({ length: 7 }, (_, i) => ({
            dayTitle: `Day ${i + 1}: Database Concepts`,
            resources: [...commonResources.sql].slice(0, 3)
        }))
    })),
    // --- WEEK 17-52: PYTHON & AI ---
    ...Array.from({ length: 36 }, (_, i) => i + 17).map(w => {
        let topic = "Python";
        if (w >= 33) topic = "AI & ML";
        return {
            weekTitle: `Week ${w}: ${topic} Phase`,
            days: Array.from({ length: 7 }, (_, d) => ({
                dayTitle: `Day ${d + 1}: ${topic} Daily`,
                resources: getDailyResources(topic, d + 1)
            }))
        };
    })
];
