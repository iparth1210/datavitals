/**
 * 🏥 LESSON CONTENT 🏥
 */

window.modules = [
    // --- WEEK 1: INFRASTRUCTURE & FOUNDATIONS ---
    {
        id: 'lesson-w1-d1',
        title: 'W1-D1: Hardware Architecture',
        image: 'assets/lesson_hardware_software.png',
        video: 'https://www.youtube.com/embed/xnyFYiK2rSY?si=premium_mode', // Code.org: Hardware Basics
        sources: [
            { title: 'Von Neumann Architecture', url: '#' },
            { title: 'CPU vs GPU vs TPU', url: '#' }
        ],
        story: `
            <div class="quad-track">
                <div class="track-section tech">
                    <h4>💻 1. Tech Core: Silicon & Logic</h4>
                    <p><strong>Hardware</strong> is the physical substrate of computing. The <strong>CPU</strong> executes instructions, while <strong>RAM</strong> provides fast, temporary storage for active tasks.</p>
                </div>
                <div class="track-section health">
                    <h4>🏥 2. Systems Engineering: Reliability</h4>
                    <p>In enterprise systems, hardware redundancy (RAID, Failover Clusters) is critical to ensure 99.999% uptime for mission-critical services.</p>
                </div>
                <div class="track-section bio">
                    <h4>🧬 3. Biological Analog: The Brain</h4>
                    <p>The brain acts as a massively parallel processor. Neurons fire signals similar to binary logic gates, but with analog variability.</p>
                </div>
                <div class="track-section lab">
                    <h4>🧪 4. Project Lab: Component Audit</h4>
                    <p><strong>Mission:</strong> You are auditing a server rack. Identify the components that are categorized incorrectly in the inventory system.</p>
                </div>
            </div>
        `,
        task: {
            type: 'find-value',
            targetColumn: 'category',
            condition: (val, row) => row.item === 'NVIDIA H100 GPU' && val === 'Software',
            successMessage: "Correct! The H100 is physical hardware (a GPU), not software.",
            errorMessage: "Find the physical hardware component mislabeled as Software."
        },
        data: [
            { id: 1, item: "Ubuntu 22.04", category: "Software", type: "OS" },
            { id: 2, item: "NVIDIA H100 GPU", category: "Software", type: "Accelerator" }, // Error
            { id: 3, item: "Intel Xeon CPU", category: "Hardware", type: "Processor" },
            { id: 4, item: "PostgreSQL", category: "Software", type: "Database" }
        ]
    },
    {
        id: 'lesson-w1-d2',
        title: 'W1-D2: Operating Systems 101',
        image: 'assets/lesson_os_brain.png',
        video: 'https://www.youtube.com/embed/p1q34_D2kKQ?si=premium_mode', // OS Basics
        sources: [
            { title: 'Linux Kernel Basics', url: '#' },
            { title: 'Process Scheduling', url: '#' }
        ],
        story: `
            <div class="quad-track">
                <div class="track-section tech">
                    <h4>💻 1. Tech Core: The Kernel</h4>
                    <p>The <strong>OS Kernel</strong> sits between hardware and software, managing memory, CPU scheduling, and I/O requests. It is the traffic controller.</p>
                </div>
                <div class="track-section health">
                    <h4>🏥 2. Systems Engineering: Stability</h4>
                    <p>Servers typically run <strong>Linux</strong> due to its stability and efficiency. Desktop workstations often run <strong>Windows</strong> or <strong>macOS</strong> for user compatibility.</p>
                </div>
                <div class="track-section bio">
                    <h4>🧬 3. Biological Analog: Autonomic System</h4>
                    <p>Just as an OS manages background processes, your autonomic nervous system handles breathing and heart rate without conscious input.</p>
                </div>
                <div class="track-section lab">
                    <h4>🧪 4. Project Lab: Server Status</h4>
                    <p><strong>Mission:</strong> Locate the critical production server that is missing an installed Operating System.</p>
                </div>
            </div>
        `,
        task: {
            type: 'find-value',
            targetColumn: 'os',
            condition: (val) => val === 'None',
            successMessage: "Critical Error Found! A server cannot function without an OS.",
            errorMessage: "Find the Critical server with 'None' for OS."
        },
        data: [
            { id: 101, hostname: "web-01", os: "Ubuntu Linux", status: "Active" },
            { id: 102, hostname: "db-primary", os: "RedHat Enterprise", status: "Active" },
            { id: 103, hostname: "cache-03", os: "None", status: "CRITICAL" }, // Target
            { id: 104, hostname: "win-auth", os: "Windows Server", status: "Active" }
        ]
    },
    {
        id: 'lesson-w1-d3',
        title: 'W1-D3: File Systems & Storage',
        image: 'assets/lesson_files.png',
        video: 'https://www.youtube.com/embed/Q5K3jR9a3pM?si=premium_mode', // Files
        sources: [
            { title: 'NTFS vs EXT4', url: '#' },
            { title: 'Block Storage vs Object Storage', url: '#' }
        ],
        story: `
            <div class="quad-track">
                <div class="track-section tech">
                    <h4>💻 1. Tech Core: File Extensions</h4>
                    <p>Extensions tell the computer how to read data: <code>.txt</code> (Text), <code>.jpg</code> (Image), <code>.csv</code> (Data).</p>
                </div>
                <div class="track-section health">
                    <h4>🏥 2. Health Systems: DICOM & HL7</h4>
                    <p>Medical Imaging uses <strong>.dcm (DICOM)</strong> files. Patient records often move as <strong>HL7</strong> messages or JSON.</p>
                </div>
                <div class="track-section bio">
                    <h4>🧬 3. Bio-Science: DNA Coding</h4>
                    <p>DNA is the ultimate file format, using 4 characters (A, C, T, G) to encode the entire human operating system.</p>
                </div>
                <div class="track-section lab">
                    <h4>🧪 4. Project Lab: Data Triage</h4>
                    <p><strong>Mission:</strong> Find the **Medical Imagine** file (DICOM format) hidden among the admin documents.</p>
                </div>
            </div>
        `,
        task: {
            type: 'find-value',
            targetColumn: 'file',
            condition: (val) => val.endsWith('.dcm'),
            successMessage: "Excellent. .dcm files contain high-resolution X-Rays or MRI scans plus patient metadata.",
            errorMessage: "Look for the file ending in .dcm (Digital Imaging and Communications in Medicine)."
        },
        data: [
            { id: 1, file: "budget_report.xlsx", type: "Admin", size: "2MB" },
            { id: 2, file: "patient_notes.txt", type: "Clinical", size: "5KB" },
            { id: 3, file: "chest_xray_scan.dcm", type: "Imaging", size: "45MB" }, // Target
            { id: 4, file: "hospital_logo.png", type: "Marketing", size: "1MB" }
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
