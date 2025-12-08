/**
 * 🏥 LESSON CONTENT 🏥
 */

window.modules = [
    // --- WEEK 1 CONTENT ---
    {
        id: 'lesson-w1-d1',
        title: 'W1-D1: Hardware vs Software',
        image: 'assets/lesson_hardware_software.png',
        video: 'https://www.youtube.com/embed/xnyFYiK2rSY?si=premium_mode', // Code.org
        sources: [
            { title: 'Computer Basics (GCFGlobal)', url: 'https://edu.gcfglobal.org/en/computerbasics/what-is-a-computer/1/' },
            { title: 'Hardware vs Software (Diffen)', url: 'https://www.diffen.com/difference/Hardware_vs_Software' }
        ],
        story: `
            <p><strong>Day 1: The Body and The Mind</strong></p>
            <p>Think of a computer like a human:</p>
            <ul>
                <li><strong>Hardware</strong> is the Body (The screen, the keyboard, the chips). You can touch it.</li>
                <li><strong>Software</strong> is the Mind (The apps, the OS, the logic). You can't touch it, but it controls the body.</li>
            </ul>
            <p><strong>Task:</strong> In the list below, find the item that is <strong>Hardware</strong> (something you can physically touch) but is labeled incorrectly as Software.</p>
        `,
        task: {
            type: 'find-value',
            targetColumn: 'type',
            condition: (val, row) => row.item === 'Keyboard' && val === 'Software',
            successMessage: "Correct! A Keyboard is Hardware. You can throw it out a window (but please don't).",
            errorMessage: "Look for a physical object that is mislabeled as Software."
        },
        data: [
            { id: 1, item: "Excel", type: "Software", category: "App" },
            { id: 2, item: "Windows", type: "Software", category: "OS" },
            { id: 3, item: "Keyboard", type: "Software", category: "Input" }, // Error
            { id: 4, item: "Monitor", type: "Hardware", category: "Output" }
        ]
    },
    {
        id: 'lesson-w1-d2',
        title: 'W1-D2: The Operating System',
        image: 'assets/lesson_os_brain.png',
        video: 'https://www.youtube.com/embed/p1q34_D2kKQ?si=premium_mode', // GCFLearnFree
        sources: [
            { title: 'What is an OS? (Microsoft)', url: 'https://support.microsoft.com/en-us/windows/what-is-an-operating-system-8bc2f5bc-9f55-4c03-8d62-0959f6c77006' },
            { title: 'History of Operating Systems', url: 'https://en.wikipedia.org/wiki/History_of_operating_systems' }
        ],
        story: `
            <p><strong>Day 2: The Manager</strong></p>
            <p>The <strong>Operating System (OS)</strong> is the boss. It manages all the hardware and software. Examples: Windows, macOS, Linux.</p>
            <p>Without an OS, your computer is just a pile of expensive metal.</p>
            <p><strong>Task:</strong> Find the computer that is missing an OS (It says "None").</p>
        `,
        task: {
            type: 'find-value',
            targetColumn: 'os',
            condition: (val) => val === 'None',
            successMessage: "Found it! A computer without an OS can't run any apps.",
            errorMessage: "Look for the computer with 'None' listed for OS."
        },
        data: [
            { id: 1, device: "Laptop A", os: "Windows 11", status: "Online" },
            { id: 2, device: "Server B", os: "Linux", status: "Online" },
            { id: 3, device: "Old PC", os: "None", status: "Dead" }, // Target
            { id: 4, device: "MacBook", os: "macOS", status: "Online" }
        ]
    },
    {
        id: 'lesson-w1-d3',
        title: 'W1-D3: Files & Folders',
        image: 'assets/lesson_files.png',
        video: 'https://www.youtube.com/embed/Q5K3jR9a3pM?si=premium_mode', // GCFGlobal
        sources: [
            { title: 'Managing Files (Computers 101)', url: 'https://www.computerhope.com/issues/ch001732.htm' }
        ],
        story: `
            <p><strong>Day 3: The Filing Cabinet</strong></p>
            <p>Data is stored in <strong>Files</strong>. Files live in <strong>Folders</strong>.</p>
            <p>Extensions tell you what a file is: <code>.docx</code> (Word), <code>.xlsx</code> (Excel), <code>.exe</code> (App).</p>
            <p><strong>Task:</strong> Find the file that is an <strong>Image</strong> (usually <code>.jpg</code> or <code>.png</code>).</p>
        `,
        task: {
            type: 'find-value',
            targetColumn: 'file',
            condition: (val) => val.endsWith('.jpg') || val.endsWith('.png'),
            successMessage: "Nice! .jpg is a common image format.",
            errorMessage: "Look for a file ending in .jpg or .png"
        },
        data: [
            { id: 1, file: "report.docx", type: "Document", size: "1MB" },
            { id: 2, file: "budget.xlsx", type: "Spreadsheet", size: "2MB" },
            { id: 3, file: "patient_scan.jpg", type: "Image", size: "5MB" }, // Target
            { id: 4, file: "game.exe", type: "Application", size: "10GB" }
        ]
    },
    {
        id: 'lesson-w1-d4',
        title: 'W1-D4: The Internet & Cloud',
        image: 'assets/lesson_cloud_network.png',
        video: 'https://www.youtube.com/embed/M988_fsOSWo?si=premium_mode', // Code.org
        sources: [
            { title: 'What is the Cloud? (Azure)', url: 'https://azure.microsoft.com/en-us/resources/cloud-computing-dictionary/what-is-the-cloud/' }
        ],
        story: `
            <p><strong>Day 4: The Network</strong></p>
            <p>"The Cloud" is just someone else's computer that you access over the internet.</p>
            <p><strong>Task:</strong> Find the server that is <strong>Offline</strong>.</p>
        `,
        task: {
            type: 'find-value',
            targetColumn: 'status',
            condition: (val) => val === 'Offline',
            successMessage: "You found the broken link! Time to reboot it.",
            errorMessage: "Look for the status 'Offline'."
        },
        data: [
            { id: 1, server: "AWS-East", status: "Online", load: "45%" },
            { id: 2, server: "Azure-West", status: "Online", load: "60%" },
            { id: 3, server: "Local-Backup", status: "Offline", load: "0%" }, // Target
            { id: 4, server: "Google-Cloud", status: "Online", load: "30%" }
        ]
    },
    {
        id: 'lesson-w1-d5',
        title: 'W1-D5: Data Units',
        image: 'assets/lesson_data_units.png',
        video: 'https://www.youtube.com/embed/5i_loW3eK3w?si=premium_mode', // Techquickie or similar (Bits & Bytes)
        sources: [
            { title: 'Bits and Bytes (Stanford)', url: 'https://web.stanford.edu/class/cs101/bits-bytes.html' }
        ],
        story: `
            <p><strong>Day 5: Bits & Bytes</strong></p>
            <p>Computers count in 0s and 1s (Bits). 8 Bits = 1 Byte.</p>
            <p>KB (Kilo) < MB (Mega) < GB (Giga) < TB (Tera).</p>
            <p><strong>Task:</strong> Find the <strong>Largest</strong> file size in this list.</p>
        `,
        task: {
            type: 'find-value',
            targetColumn: 'size',
            condition: (val) => val === '1TB',
            successMessage: "Whoa! 1TB is 1,000 GB. That's a huge file!",
            errorMessage: "Which is bigger: 500MB, 2GB, or 1TB?"
        },
        data: [
            { id: 1, file: "Note.txt", size: "1KB" },
            { id: 2, file: "Song.mp3", size: "5MB" },
            { id: 3, file: "Movie.mp4", size: "2GB" },
            { id: 4, file: "Hospital_Backup.db", size: "1TB" } // Target
        ]
    },
    {
        id: 'lesson-w1-d6',
        title: 'W1-D6: Security (HIPAA)',
        image: 'assets/lesson_security.png',
        video: 'https://www.youtube.com/embed/inWWhr5tnEA?si=premium_mode',
        sources: [
            { title: 'Password Security (CISA)', url: 'https://www.cisa.gov/secure-our-world/secure-your-accounts' }
        ],
        story: `
            <p><strong>Day 6: Keep it Secret</strong></p>
            <p>In healthcare, <strong>HIPAA</strong> rules mean we must protect patient data.</p>
            <p>Never share passwords. Never leave screens unlocked.</p>
            <p><strong>Task:</strong> Find the password that is <strong>Weak</strong>.</p>
        `,
        task: {
            type: 'find-value',
            targetColumn: 'strength',
            condition: (val) => val === 'Weak',
            successMessage: "Yikes! '123456' is the worst password ever. Hackers love it.",
            errorMessage: "Look for the simplest, easiest to guess password."
        },
        data: [
            { id: 1, user: "Dr. Smith", password: "Xy9#mK2$p", strength: "Strong" },
            { id: 2, user: "Nurse Joy", password: "Correct-Horse-Battery", strength: "Strong" },
            { id: 3, user: "Intern Bob", password: "123456", strength: "Weak" }, // Target
            { id: 4, user: "Admin", password: "AdminUser2023!", strength: "Medium" }
        ]
    },
    {
        id: 'lesson-w1-d7',
        title: 'W1-D7: Weekly Review',
        image: 'assets/lesson_review.png',
        video: 'https://www.youtube.com/embed/AkFi90lZmXA?si=premium_mode', // Review/Summary
        sources: [
            { title: 'Week 1 Recap (Interactive)', url: '#' }
        ],
        story: `
            <p><strong>Day 7: The Review</strong></p>
            <p>You made it through Week 1! Let's review.</p>
            <p>Hardware, Software, OS, Files, Cloud, Security.</p>
            <p><strong>Task:</strong> Find the <strong>"All Clear"</strong> status to graduate to Week 2.</p>
        `,
        task: {
            type: 'find-value',
            targetColumn: 'status',
            condition: (val) => val === 'All Clear',
            successMessage: "Congratulations! You have completed Week 1. Week 2 is now unlocked!",
            errorMessage: "Find the 'All Clear' status."
        },
        data: [
            { id: 1, check: "Hardware", status: "Pass" },
            { id: 2, check: "Software", status: "Pass" },
            { id: 3, check: "Security", status: "Pass" },
            { id: 4, check: "Final Exam", status: "All Clear" } // Target
        ]
    },

    // --- WEEK 2 CONTENT: EXCEL & DATA ---
    {
        id: 'lesson-w2-d1',
        title: 'W2-D1: The Grid (Excel Basics)',
        image: 'assets/lesson_excel_intro.png',
        video: 'https://www.youtube.com/embed/rpkpK_n2ad0?si=premium_mode',
        sources: [{ title: 'Excel Basics', url: 'https://support.microsoft.com/en-us/excel' }],
        story: `
            <p><strong>Day 1: The Grid</strong></p>
            <p>Welcome to <strong>Phase 2: The Data Analyst</strong>. Your primary weapon is the Spreadsheet.</p>
            <p>Rows (Numbers) and Columns (Letters) form a <strong>Cell</strong> (e.g., A1).</p>
            <p><strong>Task:</strong> Find the cell that contains the value <strong>"Start"</strong>.</p>
        `,
        task: {
            type: 'find-value',
            targetColumn: 'Value',
            condition: (val) => val === 'Start',
            successMessage: "Correct! Every journey begins with a single cell.",
            errorMessage: "Look for the cell with the text 'Start'."
        },
        data: [
            { Cell: "A1", Value: "Header" },
            { Cell: "B2", Value: "Random" },
            { Cell: "C3", Value: "Start" }, // Target
            { Cell: "D4", Value: "End" }
        ]
    },
    {
        id: 'lesson-w2-d2',
        title: 'W2-D2: Formulas (The Spellbook)',
        image: 'assets/lesson_formulas.png',
        video: 'https://www.youtube.com/embed/Flos10s52N8?si=premium_mode',
        sources: [{ title: 'Basic Formulas', url: 'https://edu.gcfglobal.org/en/excel2016/intro-to-formulas/1/' }],
        story: `
            <p><strong>Day 2: The Spellbook</strong></p>
            <p>Data Analysts don't do math. We write <strong>Formulas</strong> to do math for us.</p>
            <p><code>=SUM(A1:A5)</code> adds numbers. <code>=AVERAGE(A1:A5)</code> finds the mean.</p>
            <p><strong>Task:</strong> Find the <strong>Total Revenue</strong> (Sum of all Sales).</p>
        `,
        task: {
            type: 'find-value',
            targetColumn: 'Sales',
            condition: (val) => val === '$1000',
            successMessage: "Math checks out! $200 + $300 + $500 = $1000.",
            errorMessage: "Add the sales figures: 200 + 300 + 500."
        },
        data: [
            { Item: "Apples", Sales: "$200" },
            { Item: "Bananas", Sales: "$300" },
            { Item: "Cherries", Sales: "$500" },
            { Item: "TOTAL", Sales: "$1000" } // Target
        ]
    },
    {
        id: 'lesson-w2-d3',
        title: 'W2-D3: Visualization (Charts)',
        image: 'assets/lesson_charts.png',
        video: 'https://www.youtube.com/embed/4Gf0d9ZfXIA?si=premium_mode',
        sources: [{ title: 'Choosing Charts', url: 'https://www.atlassian.com/data/charts/how-to-choose-data-visualization' }],
        story: `
            <p><strong>Day 3: A Picture is Worth 1000 Rows</strong></p>
            <p>Validating data is hard. Seeing trends is easy.</p>
            <p><strong>Task:</strong> Identify the <strong>Best Selling</strong> month from the data below.</p>
        `,
        task: {
            type: 'find-value',
            targetColumn: 'Sales',
            condition: (val) => val === '900',
            successMessage: "Correct! December was the peak month.",
            errorMessage: "Find the highest sales number."
        },
        data: [
            { Month: "Jan", Sales: "200" },
            { Month: "Jun", Sales: "500" },
            { Month: "Dec", Sales: "900" } // Target
        ]
    },
    {
        id: 'lesson-w2-d4',
        title: 'W2-D4: Pivot Tables (Magic)',
        image: 'assets/lesson_pivot.png',
        video: 'https://www.youtube.com/embed/qu-AK0Hv0b4?si=premium_mode',
        sources: [{ title: 'Pivot Tables Explained', url: 'https://www.excel-easy.com/data-analysis/pivot-tables.html' }],
        story: `
            <p><strong>Day 4: Magic Tables</strong></p>
            <p><strong>Pivot Tables</strong> let you summarize 100,000 rows in seconds. They group and aggregate data.</p>
            <p><strong>Task:</strong> Find the <strong>Total Sales for Region 'East'</strong>.</p>
        `,
        task: {
            type: 'find-value',
            targetColumn: 'Total',
            condition: (val) => val === '150',
            successMessage: "Boom! Pivot Tables make aggregation easy.",
            errorMessage: "Look at the summary for East: 50 + 100."
        },
        data: [
            { Region: "East", Product: "A", Sales: "50" },
            { Region: "East", Product: "B", Sales: "100" },
            { Region: "West", Product: "A", Sales: "20" },
            { Region: "SUMMARY (East)", Product: "ALL", Total: "150" } // Target
        ]
    },
    {
        id: 'lesson-w2-d5',
        title: 'W2-D5: Data Tea Cleaning',
        image: 'assets/lesson_cleaning.png',
        video: 'https://www.youtube.com/embed/PrM425q01Jo?si=premium_mode',
        sources: [{ title: 'Data Cleaning 101', url: 'https://www.tableau.com/learn/articles/what-is-data-cleaning' }],
        story: `
            <p><strong>Day 5: The Janitor</strong></p>
            <p>80% of Data Science is <strong>Cleaning Data</strong>. Fixing typos, removing duplicates, handling nulls.</p>
            <p><strong>Task:</strong> Find the <strong>Dirty Data</strong> (The outlier/typo).</p>
        `,
        task: {
            type: 'find-value',
            targetColumn: 'Age',
            condition: (val) => val === '250',
            successMessage: "Caught it! Unless this is a vampire, age 250 is an error.",
            errorMessage: "Look for an impossible age."
        },
        data: [
            { Name: "Alice", Age: "25" },
            { Name: "Bob", Age: "30" },
            { Name: "Charlie", Age: "250" }, // Target
            { Name: "Dave", Age: "40" }
        ]
    },
    {
        id: 'lesson-w2-d6',
        title: 'W2-D6: Real World Project',
        image: 'assets/lesson_project_logo.png',
        video: 'https://www.youtube.com/embed/K74_NRhdK1w?si=premium_mode',
        sources: [],
        story: `
            <p><strong>Day 6: The Client</strong></p>
            <p>A client sent you a sales report. They want to know the <strong>Profit Margin</strong>.</p>
            <p>Formula: <code>(Price - Cost) / Price</code>.</p>
            <p><strong>Task:</strong> Calculate the margin for the Laptop (Price: 1000, Cost: 800).</p>
        `,
        task: {
            type: 'find-value',
            targetColumn: 'Margin',
            condition: (val) => val === '20%',
            successMessage: "(1000 - 800) / 1000 = 0.20 or 20%. You made the client happy!",
            errorMessage: "Calculate (1000-800)/1000."
        },
        data: [
            { Item: "Phone", Price: "500", Cost: "400", Margin: "20%" },
            { Item: "Laptop", Price: "1000", Cost: "800", Margin: "20%" }, // Target (Logic is same)
            { Item: "Mouse", Price: "50", Cost: "45", Margin: "10%" }
        ]
    },
    {
        id: 'lesson-w2-d7',
        title: 'W2-D7: Python Excel (Bonus)',
        type: 'python',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/0y78Yoi98kg?si=premium_mode', // Python vs Excel
        sources: [{ title: 'Pandas vs Excel', url: 'https://pandas.pydata.org/docs/getting_started/comparison/comparison_with_excel.html' }],
        story: `
            <p><strong>Day 7: Evolving</strong></p>
            <p>Excel is great, but Python is faster. In Python, a spreadsheet is called a <strong>DataFrame</strong>.</p>
            <p><strong>Mission:</strong> Create a simple DataFrame using Python code.</p>
        `,
        code_start: `# Creating a DataFrame
import pandas as pd

data = {
  "Name": ["Alice", "Bob", "Charlie"],
  "Age": [25, 30, 35],
  "City": ["New York", "Paris", "London"]
}

df = pd.DataFrame(data)
print(df)
`,
        task: { successMessage: "You just built a spreadsheet with code! +100 XP" },
        data: []
    },
    // ... more lessons would go here

    // --- GENERIC PLACEHOLDER ---
    {
        id: 'placeholder-lesson',
        title: 'Coming Soon',
        image: 'assets/lesson_coming_soon.png',
        video: 'https://www.youtube.com/embed/dQw4w9WgXcQ?si=premium_mode', // Rick Roll (Easter Egg) or generic waiting music
        sources: [],
        story: '<p>This lesson is under construction. 🚧</p>',
        task: { type: 'find-value', targetColumn: 'val', condition: v => true, successMessage: 'Done!', errorMessage: '' },
        data: [{ id: 1, val: "Click Me" }]
    }
];
