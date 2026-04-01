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
            { title: 'Von Neumann Architecture', url: 'https://en.wikipedia.org/wiki/Von_Neumann_architecture' },
            { title: 'CPU vs GPU vs TPU', url: 'https://cloud.google.com/tpu/docs/intro-to-tpu' }
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
            { title: 'Linux Kernel Basics', url: 'https://www.kernel.org/doc/html/latest/admin-guide/index.html' },
            { title: 'Process Scheduling', url: 'https://en.wikipedia.org/wiki/Scheduling_(computing)' }
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
            { title: 'NTFS vs EXT4', url: 'https://www.howtogeek.com/177078/htg-explains-what-file-system-should-i-use-for-my-usb-drive/' },
            { title: 'Block Storage vs Object Storage', url: 'https://cloud.google.com/storage/docs/concepts' }
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
            { title: 'Week 1 Recap (Quizlet)', url: 'https://quizlet.com/latest' }
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

    // --- GOD-MODE SYNTHESIZED NODES ---

    {
        id: 'lesson-w3-d1',
        title: 'Excel: Formulas 101 - Part 1',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/zOjov-2OZ0E?si=premium_mode',
        sources: [
            { title: 'Official Documentation', url: 'https://developer.mozilla.org/' },
            { title: 'Architect Archives', url: '#' }
        ],
        story: `<div class="quad-track"><div class="track-section tech"><h4>💻 1. Algorithmic Processing</h4><p>This module focuses on high-speed data parsing. Time Complexity (Big O) prevents server timeouts.</p></div><div class="track-section health"><h4>🏥 2. Clinical Data Streams</h4><p>Hospitals generate terabytes of telemetry hourly. Structuring this raw byte data is critical.</p></div><div class="track-section bio"><h4>🧬 3. Evolutionary Algorithms</h4><p>Algorithms evolve through mutation and selection. Structure ML pipelines to adapt dynamically.</p></div><div class="track-section lab"><h4>🧪 4. God-Mode Lab</h4><p><strong>Mission:</strong> The pipeline has stalled. Isolate the errant data frame.</p></div></div>`,
        task: {
            type: 'find-value',
            targetColumn: 'status',
            condition: (val) => val === 'CRITICAL',
            successMessage: "System Override Successful. Node unlocked. +100 XP.",
            errorMessage: "Locate the CRITICAL status node."
        },
        data: [
          {
                    "id": 7594,
                    "value": "Alpha_Node",
                    "metric": "0.45",
                    "status": "Active"
          },
          {
                    "id": 4786,
                    "value": "Beta_Node",
                    "metric": "0.89",
                    "status": "Active"
          },
          {
                    "id": 3862,
                    "value": "Omega_Node",
                    "metric": "0.01",
                    "status": "CRITICAL"
          },
          {
                    "id": 9733,
                    "value": "Zeta_Node",
                    "metric": "1.00",
                    "status": "Active"
          }
]
    },
    {
        id: 'lesson-w3-d2',
        title: 'Excel: Formulas 101 - Part 2',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/rpkpK_n2ad0?si=premium_mode',
        sources: [
            { title: 'Official Documentation', url: 'https://developer.mozilla.org/' },
            { title: 'Architect Archives', url: '#' }
        ],
        story: `<div class="quad-track"><div class="track-section tech"><h4>💻 1. Core Mechanics</h4><p>Mastering this concept requires understanding the underlying synthetic logic. In enterprise computing, this is the foundational bedrock.</p></div><div class="track-section health"><h4>🏥 2. Bio-Systems</h4><p>Data science in healthcare relies on absolute precision. We apply this logic to sequence genomic arrays.</p></div><div class="track-section bio"><h4>🧬 3. Neural Architecture</h4><p>Information must flow efficiently like a biological synapse. Optimize your code.</p></div><div class="track-section lab"><h4>🧪 4. God-Mode Lab</h4><p><strong>Mission:</strong> Locate the critical node anomaly to restore integrity.</p></div></div>`,
        task: {
            type: 'find-value',
            targetColumn: 'anomaly',
            condition: (val) => val === 'True',
            successMessage: "System Override Successful. Node unlocked. +100 XP.",
            errorMessage: "Find the True anomaly flag."
        },
        data: [
          {
                    "key": "Patient_XYZ",
                    "vitals": "Stable",
                    "heart_rate": "72",
                    "anomaly": "False"
          },
          {
                    "key": "Patient_ABC",
                    "vitals": "Unstable",
                    "heart_rate": "145",
                    "anomaly": "True"
          },
          {
                    "key": "Patient_LMN",
                    "vitals": "Stable",
                    "heart_rate": "65",
                    "anomaly": "False"
          },
          {
                    "key": "Patient_QRS",
                    "vitals": "Stable",
                    "heart_rate": "80",
                    "anomaly": "False"
          }
]
    },
    {
        id: 'lesson-w3-d3',
        title: 'Excel: Formulas 101 - Part 3',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/HcqpanDadyQ?si=premium_mode',
        sources: [
            { title: 'Official Documentation', url: 'https://developer.mozilla.org/' },
            { title: 'Architect Archives', url: '#' }
        ],
        story: `<div class="quad-track"><div class="track-section tech"><h4>💻 1. Core Mechanics</h4><p>Mastering this concept requires understanding the underlying synthetic logic. In enterprise computing, this is the foundational bedrock.</p></div><div class="track-section health"><h4>🏥 2. Bio-Systems</h4><p>Data science in healthcare relies on absolute precision. We apply this logic to sequence genomic arrays.</p></div><div class="track-section bio"><h4>🧬 3. Neural Architecture</h4><p>Information must flow efficiently like a biological synapse. Optimize your code.</p></div><div class="track-section lab"><h4>🧪 4. God-Mode Lab</h4><p><strong>Mission:</strong> Locate the critical node anomaly to restore integrity.</p></div></div>`,
        task: {
            type: 'find-value',
            targetColumn: 'status',
            condition: (val) => val === 'CRITICAL',
            successMessage: "System Override Successful. Node unlocked. +100 XP.",
            errorMessage: "Locate the CRITICAL status node."
        },
        data: [
          {
                    "id": 2000,
                    "value": "Alpha_Node",
                    "metric": "0.45",
                    "status": "Active"
          },
          {
                    "id": 5097,
                    "value": "Beta_Node",
                    "metric": "0.89",
                    "status": "Active"
          },
          {
                    "id": 1045,
                    "value": "Omega_Node",
                    "metric": "0.01",
                    "status": "CRITICAL"
          },
          {
                    "id": 9483,
                    "value": "Zeta_Node",
                    "metric": "1.00",
                    "status": "Active"
          }
]
    },
    {
        id: 'lesson-w3-d4',
        title: 'Excel: Formulas 101 - Part 4',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/aircAruvnKk?si=premium_mode',
        sources: [
            { title: 'Official Documentation', url: 'https://developer.mozilla.org/' },
            { title: 'Architect Archives', url: '#' }
        ],
        story: `<div class="quad-track"><div class="track-section tech"><h4>💻 1. Algorithmic Processing</h4><p>This module focuses on high-speed data parsing. Time Complexity (Big O) prevents server timeouts.</p></div><div class="track-section health"><h4>🏥 2. Clinical Data Streams</h4><p>Hospitals generate terabytes of telemetry hourly. Structuring this raw byte data is critical.</p></div><div class="track-section bio"><h4>🧬 3. Evolutionary Algorithms</h4><p>Algorithms evolve through mutation and selection. Structure ML pipelines to adapt dynamically.</p></div><div class="track-section lab"><h4>🧪 4. God-Mode Lab</h4><p><strong>Mission:</strong> The pipeline has stalled. Isolate the errant data frame.</p></div></div>`,
        task: {
            type: 'find-value',
            targetColumn: 'anomaly',
            condition: (val) => val === 'True',
            successMessage: "System Override Successful. Node unlocked. +100 XP.",
            errorMessage: "Find the True anomaly flag."
        },
        data: [
          {
                    "key": "Patient_XYZ",
                    "vitals": "Stable",
                    "heart_rate": "72",
                    "anomaly": "False"
          },
          {
                    "key": "Patient_ABC",
                    "vitals": "Unstable",
                    "heart_rate": "145",
                    "anomaly": "True"
          },
          {
                    "key": "Patient_LMN",
                    "vitals": "Stable",
                    "heart_rate": "65",
                    "anomaly": "False"
          },
          {
                    "key": "Patient_QRS",
                    "vitals": "Stable",
                    "heart_rate": "80",
                    "anomaly": "False"
          }
]
    },
    {
        id: 'lesson-w3-d5',
        title: 'Excel: Formulas 101 - Part 5',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/zOjov-2OZ0E?si=premium_mode',
        sources: [
            { title: 'Official Documentation', url: 'https://developer.mozilla.org/' },
            { title: 'Architect Archives', url: '#' }
        ],
        story: `<div class="quad-track"><div class="track-section tech"><h4>💻 1. Algorithmic Processing</h4><p>This module focuses on high-speed data parsing. Time Complexity (Big O) prevents server timeouts.</p></div><div class="track-section health"><h4>🏥 2. Clinical Data Streams</h4><p>Hospitals generate terabytes of telemetry hourly. Structuring this raw byte data is critical.</p></div><div class="track-section bio"><h4>🧬 3. Evolutionary Algorithms</h4><p>Algorithms evolve through mutation and selection. Structure ML pipelines to adapt dynamically.</p></div><div class="track-section lab"><h4>🧪 4. God-Mode Lab</h4><p><strong>Mission:</strong> The pipeline has stalled. Isolate the errant data frame.</p></div></div>`,
        task: {
            type: 'find-value',
            targetColumn: 'status',
            condition: (val) => val === 'CRITICAL',
            successMessage: "System Override Successful. Node unlocked. +100 XP.",
            errorMessage: "Locate the CRITICAL status node."
        },
        data: [
          {
                    "id": 5111,
                    "value": "Alpha_Node",
                    "metric": "0.45",
                    "status": "Active"
          },
          {
                    "id": 3031,
                    "value": "Beta_Node",
                    "metric": "0.89",
                    "status": "Active"
          },
          {
                    "id": 1078,
                    "value": "Omega_Node",
                    "metric": "0.01",
                    "status": "CRITICAL"
          },
          {
                    "id": 6440,
                    "value": "Zeta_Node",
                    "metric": "1.00",
                    "status": "Active"
          }
]
    },
    {
        id: 'lesson-w3-d6',
        title: 'Excel: Formulas 101 - Part 6',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/aircAruvnKk?si=premium_mode',
        sources: [
            { title: 'Official Documentation', url: 'https://developer.mozilla.org/' },
            { title: 'Architect Archives', url: '#' }
        ],
        story: `<div class="quad-track"><div class="track-section tech"><h4>💻 1. Core Mechanics</h4><p>Mastering this concept requires understanding the underlying synthetic logic. In enterprise computing, this is the foundational bedrock.</p></div><div class="track-section health"><h4>🏥 2. Bio-Systems</h4><p>Data science in healthcare relies on absolute precision. We apply this logic to sequence genomic arrays.</p></div><div class="track-section bio"><h4>🧬 3. Neural Architecture</h4><p>Information must flow efficiently like a biological synapse. Optimize your code.</p></div><div class="track-section lab"><h4>🧪 4. God-Mode Lab</h4><p><strong>Mission:</strong> Locate the critical node anomaly to restore integrity.</p></div></div>`,
        task: {
            type: 'find-value',
            targetColumn: 'anomaly',
            condition: (val) => val === 'True',
            successMessage: "System Override Successful. Node unlocked. +100 XP.",
            errorMessage: "Find the True anomaly flag."
        },
        data: [
          {
                    "key": "Patient_XYZ",
                    "vitals": "Stable",
                    "heart_rate": "72",
                    "anomaly": "False"
          },
          {
                    "key": "Patient_ABC",
                    "vitals": "Unstable",
                    "heart_rate": "145",
                    "anomaly": "True"
          },
          {
                    "key": "Patient_LMN",
                    "vitals": "Stable",
                    "heart_rate": "65",
                    "anomaly": "False"
          },
          {
                    "key": "Patient_QRS",
                    "vitals": "Stable",
                    "heart_rate": "80",
                    "anomaly": "False"
          }
]
    },
    {
        id: 'lesson-w3-d7',
        title: 'Weekly Concept Review',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/zOjov-2OZ0E?si=premium_mode',
        sources: [
            { title: 'Official Documentation', url: 'https://developer.mozilla.org/' },
            { title: 'Architect Archives', url: '#' }
        ],
        story: `<div class="quad-track"><div class="track-section tech"><h4>💻 1. Core Mechanics</h4><p>Mastering this concept requires understanding the underlying synthetic logic. In enterprise computing, this is the foundational bedrock.</p></div><div class="track-section health"><h4>🏥 2. Bio-Systems</h4><p>Data science in healthcare relies on absolute precision. We apply this logic to sequence genomic arrays.</p></div><div class="track-section bio"><h4>🧬 3. Neural Architecture</h4><p>Information must flow efficiently like a biological synapse. Optimize your code.</p></div><div class="track-section lab"><h4>🧪 4. God-Mode Lab</h4><p><strong>Mission:</strong> Locate the critical node anomaly to restore integrity.</p></div></div>`,
        task: {
            type: 'find-value',
            targetColumn: 'anomaly',
            condition: (val) => val === 'True',
            successMessage: "System Override Successful. Node unlocked. +100 XP.",
            errorMessage: "Find the True anomaly flag."
        },
        data: [
          {
                    "key": "Patient_XYZ",
                    "vitals": "Stable",
                    "heart_rate": "72",
                    "anomaly": "False"
          },
          {
                    "key": "Patient_ABC",
                    "vitals": "Unstable",
                    "heart_rate": "145",
                    "anomaly": "True"
          },
          {
                    "key": "Patient_LMN",
                    "vitals": "Stable",
                    "heart_rate": "65",
                    "anomaly": "False"
          },
          {
                    "key": "Patient_QRS",
                    "vitals": "Stable",
                    "heart_rate": "80",
                    "anomaly": "False"
          }
]
    },
    {
        id: 'lesson-w4-d1',
        title: 'Excel: Charts & Viz - Part 1',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/zOjov-2OZ0E?si=premium_mode',
        sources: [
            { title: 'Official Documentation', url: 'https://developer.mozilla.org/' },
            { title: 'Architect Archives', url: '#' }
        ],
        story: `<div class="quad-track"><div class="track-section tech"><h4>💻 1. Algorithmic Processing</h4><p>This module focuses on high-speed data parsing. Time Complexity (Big O) prevents server timeouts.</p></div><div class="track-section health"><h4>🏥 2. Clinical Data Streams</h4><p>Hospitals generate terabytes of telemetry hourly. Structuring this raw byte data is critical.</p></div><div class="track-section bio"><h4>🧬 3. Evolutionary Algorithms</h4><p>Algorithms evolve through mutation and selection. Structure ML pipelines to adapt dynamically.</p></div><div class="track-section lab"><h4>🧪 4. God-Mode Lab</h4><p><strong>Mission:</strong> The pipeline has stalled. Isolate the errant data frame.</p></div></div>`,
        task: {
            type: 'find-value',
            targetColumn: 'anomaly',
            condition: (val) => val === 'True',
            successMessage: "System Override Successful. Node unlocked. +100 XP.",
            errorMessage: "Find the True anomaly flag."
        },
        data: [
          {
                    "key": "Patient_XYZ",
                    "vitals": "Stable",
                    "heart_rate": "72",
                    "anomaly": "False"
          },
          {
                    "key": "Patient_ABC",
                    "vitals": "Unstable",
                    "heart_rate": "145",
                    "anomaly": "True"
          },
          {
                    "key": "Patient_LMN",
                    "vitals": "Stable",
                    "heart_rate": "65",
                    "anomaly": "False"
          },
          {
                    "key": "Patient_QRS",
                    "vitals": "Stable",
                    "heart_rate": "80",
                    "anomaly": "False"
          }
]
    },
    {
        id: 'lesson-w4-d2',
        title: 'Excel: Charts & Viz - Part 2',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/HcqpanDadyQ?si=premium_mode',
        sources: [
            { title: 'Official Documentation', url: 'https://developer.mozilla.org/' },
            { title: 'Architect Archives', url: '#' }
        ],
        story: `<div class="quad-track"><div class="track-section tech"><h4>💻 1. Core Mechanics</h4><p>Mastering this concept requires understanding the underlying synthetic logic. In enterprise computing, this is the foundational bedrock.</p></div><div class="track-section health"><h4>🏥 2. Bio-Systems</h4><p>Data science in healthcare relies on absolute precision. We apply this logic to sequence genomic arrays.</p></div><div class="track-section bio"><h4>🧬 3. Neural Architecture</h4><p>Information must flow efficiently like a biological synapse. Optimize your code.</p></div><div class="track-section lab"><h4>🧪 4. God-Mode Lab</h4><p><strong>Mission:</strong> Locate the critical node anomaly to restore integrity.</p></div></div>`,
        task: {
            type: 'find-value',
            targetColumn: 'status',
            condition: (val) => val === 'CRITICAL',
            successMessage: "System Override Successful. Node unlocked. +100 XP.",
            errorMessage: "Locate the CRITICAL status node."
        },
        data: [
          {
                    "id": 3668,
                    "value": "Alpha_Node",
                    "metric": "0.45",
                    "status": "Active"
          },
          {
                    "id": 7112,
                    "value": "Beta_Node",
                    "metric": "0.89",
                    "status": "Active"
          },
          {
                    "id": 3888,
                    "value": "Omega_Node",
                    "metric": "0.01",
                    "status": "CRITICAL"
          },
          {
                    "id": 3118,
                    "value": "Zeta_Node",
                    "metric": "1.00",
                    "status": "Active"
          }
]
    },
    {
        id: 'lesson-w4-d3',
        title: 'Excel: Charts & Viz - Part 3',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/rpkpK_n2ad0?si=premium_mode',
        sources: [
            { title: 'Official Documentation', url: 'https://developer.mozilla.org/' },
            { title: 'Architect Archives', url: '#' }
        ],
        story: `<div class="quad-track"><div class="track-section tech"><h4>💻 1. Core Mechanics</h4><p>Mastering this concept requires understanding the underlying synthetic logic. In enterprise computing, this is the foundational bedrock.</p></div><div class="track-section health"><h4>🏥 2. Bio-Systems</h4><p>Data science in healthcare relies on absolute precision. We apply this logic to sequence genomic arrays.</p></div><div class="track-section bio"><h4>🧬 3. Neural Architecture</h4><p>Information must flow efficiently like a biological synapse. Optimize your code.</p></div><div class="track-section lab"><h4>🧪 4. God-Mode Lab</h4><p><strong>Mission:</strong> Locate the critical node anomaly to restore integrity.</p></div></div>`,
        task: {
            type: 'find-value',
            targetColumn: 'anomaly',
            condition: (val) => val === 'True',
            successMessage: "System Override Successful. Node unlocked. +100 XP.",
            errorMessage: "Find the True anomaly flag."
        },
        data: [
          {
                    "key": "Patient_XYZ",
                    "vitals": "Stable",
                    "heart_rate": "72",
                    "anomaly": "False"
          },
          {
                    "key": "Patient_ABC",
                    "vitals": "Unstable",
                    "heart_rate": "145",
                    "anomaly": "True"
          },
          {
                    "key": "Patient_LMN",
                    "vitals": "Stable",
                    "heart_rate": "65",
                    "anomaly": "False"
          },
          {
                    "key": "Patient_QRS",
                    "vitals": "Stable",
                    "heart_rate": "80",
                    "anomaly": "False"
          }
]
    },
    {
        id: 'lesson-w4-d4',
        title: 'Excel: Charts & Viz - Part 4',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/aircAruvnKk?si=premium_mode',
        sources: [
            { title: 'Official Documentation', url: 'https://developer.mozilla.org/' },
            { title: 'Architect Archives', url: '#' }
        ],
        story: `<div class="quad-track"><div class="track-section tech"><h4>💻 1. Core Mechanics</h4><p>Mastering this concept requires understanding the underlying synthetic logic. In enterprise computing, this is the foundational bedrock.</p></div><div class="track-section health"><h4>🏥 2. Bio-Systems</h4><p>Data science in healthcare relies on absolute precision. We apply this logic to sequence genomic arrays.</p></div><div class="track-section bio"><h4>🧬 3. Neural Architecture</h4><p>Information must flow efficiently like a biological synapse. Optimize your code.</p></div><div class="track-section lab"><h4>🧪 4. God-Mode Lab</h4><p><strong>Mission:</strong> Locate the critical node anomaly to restore integrity.</p></div></div>`,
        task: {
            type: 'find-value',
            targetColumn: 'anomaly',
            condition: (val) => val === 'True',
            successMessage: "System Override Successful. Node unlocked. +100 XP.",
            errorMessage: "Find the True anomaly flag."
        },
        data: [
          {
                    "key": "Patient_XYZ",
                    "vitals": "Stable",
                    "heart_rate": "72",
                    "anomaly": "False"
          },
          {
                    "key": "Patient_ABC",
                    "vitals": "Unstable",
                    "heart_rate": "145",
                    "anomaly": "True"
          },
          {
                    "key": "Patient_LMN",
                    "vitals": "Stable",
                    "heart_rate": "65",
                    "anomaly": "False"
          },
          {
                    "key": "Patient_QRS",
                    "vitals": "Stable",
                    "heart_rate": "80",
                    "anomaly": "False"
          }
]
    },
    {
        id: 'lesson-w4-d5',
        title: 'Excel: Charts & Viz - Part 5',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/zOjov-2OZ0E?si=premium_mode',
        sources: [
            { title: 'Official Documentation', url: 'https://developer.mozilla.org/' },
            { title: 'Architect Archives', url: '#' }
        ],
        story: `<div class="quad-track"><div class="track-section tech"><h4>💻 1. Core Mechanics</h4><p>Mastering this concept requires understanding the underlying synthetic logic. In enterprise computing, this is the foundational bedrock.</p></div><div class="track-section health"><h4>🏥 2. Bio-Systems</h4><p>Data science in healthcare relies on absolute precision. We apply this logic to sequence genomic arrays.</p></div><div class="track-section bio"><h4>🧬 3. Neural Architecture</h4><p>Information must flow efficiently like a biological synapse. Optimize your code.</p></div><div class="track-section lab"><h4>🧪 4. God-Mode Lab</h4><p><strong>Mission:</strong> Locate the critical node anomaly to restore integrity.</p></div></div>`,
        task: {
            type: 'find-value',
            targetColumn: 'status',
            condition: (val) => val === 'CRITICAL',
            successMessage: "System Override Successful. Node unlocked. +100 XP.",
            errorMessage: "Locate the CRITICAL status node."
        },
        data: [
          {
                    "id": 5123,
                    "value": "Alpha_Node",
                    "metric": "0.45",
                    "status": "Active"
          },
          {
                    "id": 6801,
                    "value": "Beta_Node",
                    "metric": "0.89",
                    "status": "Active"
          },
          {
                    "id": 2329,
                    "value": "Omega_Node",
                    "metric": "0.01",
                    "status": "CRITICAL"
          },
          {
                    "id": 5887,
                    "value": "Zeta_Node",
                    "metric": "1.00",
                    "status": "Active"
          }
]
    },
    {
        id: 'lesson-w4-d6',
        title: 'Excel: Charts & Viz - Part 6',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/HcqpanDadyQ?si=premium_mode',
        sources: [
            { title: 'Official Documentation', url: 'https://developer.mozilla.org/' },
            { title: 'Architect Archives', url: '#' }
        ],
        story: `<div class="quad-track"><div class="track-section tech"><h4>💻 1. Algorithmic Processing</h4><p>This module focuses on high-speed data parsing. Time Complexity (Big O) prevents server timeouts.</p></div><div class="track-section health"><h4>🏥 2. Clinical Data Streams</h4><p>Hospitals generate terabytes of telemetry hourly. Structuring this raw byte data is critical.</p></div><div class="track-section bio"><h4>🧬 3. Evolutionary Algorithms</h4><p>Algorithms evolve through mutation and selection. Structure ML pipelines to adapt dynamically.</p></div><div class="track-section lab"><h4>🧪 4. God-Mode Lab</h4><p><strong>Mission:</strong> The pipeline has stalled. Isolate the errant data frame.</p></div></div>`,
        task: {
            type: 'find-value',
            targetColumn: 'anomaly',
            condition: (val) => val === 'True',
            successMessage: "System Override Successful. Node unlocked. +100 XP.",
            errorMessage: "Find the True anomaly flag."
        },
        data: [
          {
                    "key": "Patient_XYZ",
                    "vitals": "Stable",
                    "heart_rate": "72",
                    "anomaly": "False"
          },
          {
                    "key": "Patient_ABC",
                    "vitals": "Unstable",
                    "heart_rate": "145",
                    "anomaly": "True"
          },
          {
                    "key": "Patient_LMN",
                    "vitals": "Stable",
                    "heart_rate": "65",
                    "anomaly": "False"
          },
          {
                    "key": "Patient_QRS",
                    "vitals": "Stable",
                    "heart_rate": "80",
                    "anomaly": "False"
          }
]
    },
    {
        id: 'lesson-w4-d7',
        title: 'Weekly Concept Review',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/zOjov-2OZ0E?si=premium_mode',
        sources: [
            { title: 'Official Documentation', url: 'https://developer.mozilla.org/' },
            { title: 'Architect Archives', url: '#' }
        ],
        story: `<div class="quad-track"><div class="track-section tech"><h4>💻 1. Core Mechanics</h4><p>Mastering this concept requires understanding the underlying synthetic logic. In enterprise computing, this is the foundational bedrock.</p></div><div class="track-section health"><h4>🏥 2. Bio-Systems</h4><p>Data science in healthcare relies on absolute precision. We apply this logic to sequence genomic arrays.</p></div><div class="track-section bio"><h4>🧬 3. Neural Architecture</h4><p>Information must flow efficiently like a biological synapse. Optimize your code.</p></div><div class="track-section lab"><h4>🧪 4. God-Mode Lab</h4><p><strong>Mission:</strong> Locate the critical node anomaly to restore integrity.</p></div></div>`,
        task: {
            type: 'find-value',
            targetColumn: 'status',
            condition: (val) => val === 'CRITICAL',
            successMessage: "System Override Successful. Node unlocked. +100 XP.",
            errorMessage: "Locate the CRITICAL status node."
        },
        data: [
          {
                    "id": 8099,
                    "value": "Alpha_Node",
                    "metric": "0.45",
                    "status": "Active"
          },
          {
                    "id": 5967,
                    "value": "Beta_Node",
                    "metric": "0.89",
                    "status": "Active"
          },
          {
                    "id": 8049,
                    "value": "Omega_Node",
                    "metric": "0.01",
                    "status": "CRITICAL"
          },
          {
                    "id": 4968,
                    "value": "Zeta_Node",
                    "metric": "1.00",
                    "status": "Active"
          }
]
    },
    {
        id: 'lesson-w5-d1',
        title: 'Excel: Pivot Tables - Part 1',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/aircAruvnKk?si=premium_mode',
        sources: [
            { title: 'Official Documentation', url: 'https://developer.mozilla.org/' },
            { title: 'Architect Archives', url: '#' }
        ],
        story: `<div class="quad-track"><div class="track-section tech"><h4>💻 1. Core Mechanics</h4><p>Mastering this concept requires understanding the underlying synthetic logic. In enterprise computing, this is the foundational bedrock.</p></div><div class="track-section health"><h4>🏥 2. Bio-Systems</h4><p>Data science in healthcare relies on absolute precision. We apply this logic to sequence genomic arrays.</p></div><div class="track-section bio"><h4>🧬 3. Neural Architecture</h4><p>Information must flow efficiently like a biological synapse. Optimize your code.</p></div><div class="track-section lab"><h4>🧪 4. God-Mode Lab</h4><p><strong>Mission:</strong> Locate the critical node anomaly to restore integrity.</p></div></div>`,
        task: {
            type: 'find-value',
            targetColumn: 'status',
            condition: (val) => val === 'CRITICAL',
            successMessage: "System Override Successful. Node unlocked. +100 XP.",
            errorMessage: "Locate the CRITICAL status node."
        },
        data: [
          {
                    "id": 7737,
                    "value": "Alpha_Node",
                    "metric": "0.45",
                    "status": "Active"
          },
          {
                    "id": 2258,
                    "value": "Beta_Node",
                    "metric": "0.89",
                    "status": "Active"
          },
          {
                    "id": 9660,
                    "value": "Omega_Node",
                    "metric": "0.01",
                    "status": "CRITICAL"
          },
          {
                    "id": 4862,
                    "value": "Zeta_Node",
                    "metric": "1.00",
                    "status": "Active"
          }
]
    },
    {
        id: 'lesson-w5-d2',
        title: 'Excel: Pivot Tables - Part 2',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/rpkpK_n2ad0?si=premium_mode',
        sources: [
            { title: 'Official Documentation', url: 'https://developer.mozilla.org/' },
            { title: 'Architect Archives', url: '#' }
        ],
        story: `<div class="quad-track"><div class="track-section tech"><h4>💻 1. Algorithmic Processing</h4><p>This module focuses on high-speed data parsing. Time Complexity (Big O) prevents server timeouts.</p></div><div class="track-section health"><h4>🏥 2. Clinical Data Streams</h4><p>Hospitals generate terabytes of telemetry hourly. Structuring this raw byte data is critical.</p></div><div class="track-section bio"><h4>🧬 3. Evolutionary Algorithms</h4><p>Algorithms evolve through mutation and selection. Structure ML pipelines to adapt dynamically.</p></div><div class="track-section lab"><h4>🧪 4. God-Mode Lab</h4><p><strong>Mission:</strong> The pipeline has stalled. Isolate the errant data frame.</p></div></div>`,
        task: {
            type: 'find-value',
            targetColumn: 'status',
            condition: (val) => val === 'CRITICAL',
            successMessage: "System Override Successful. Node unlocked. +100 XP.",
            errorMessage: "Locate the CRITICAL status node."
        },
        data: [
          {
                    "id": 9940,
                    "value": "Alpha_Node",
                    "metric": "0.45",
                    "status": "Active"
          },
          {
                    "id": 2545,
                    "value": "Beta_Node",
                    "metric": "0.89",
                    "status": "Active"
          },
          {
                    "id": 7211,
                    "value": "Omega_Node",
                    "metric": "0.01",
                    "status": "CRITICAL"
          },
          {
                    "id": 8869,
                    "value": "Zeta_Node",
                    "metric": "1.00",
                    "status": "Active"
          }
]
    },
    {
        id: 'lesson-w5-d3',
        title: 'Excel: Pivot Tables - Part 3',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/aircAruvnKk?si=premium_mode',
        sources: [
            { title: 'Official Documentation', url: 'https://developer.mozilla.org/' },
            { title: 'Architect Archives', url: '#' }
        ],
        story: `<div class="quad-track"><div class="track-section tech"><h4>💻 1. Algorithmic Processing</h4><p>This module focuses on high-speed data parsing. Time Complexity (Big O) prevents server timeouts.</p></div><div class="track-section health"><h4>🏥 2. Clinical Data Streams</h4><p>Hospitals generate terabytes of telemetry hourly. Structuring this raw byte data is critical.</p></div><div class="track-section bio"><h4>🧬 3. Evolutionary Algorithms</h4><p>Algorithms evolve through mutation and selection. Structure ML pipelines to adapt dynamically.</p></div><div class="track-section lab"><h4>🧪 4. God-Mode Lab</h4><p><strong>Mission:</strong> The pipeline has stalled. Isolate the errant data frame.</p></div></div>`,
        task: {
            type: 'find-value',
            targetColumn: 'anomaly',
            condition: (val) => val === 'True',
            successMessage: "System Override Successful. Node unlocked. +100 XP.",
            errorMessage: "Find the True anomaly flag."
        },
        data: [
          {
                    "key": "Patient_XYZ",
                    "vitals": "Stable",
                    "heart_rate": "72",
                    "anomaly": "False"
          },
          {
                    "key": "Patient_ABC",
                    "vitals": "Unstable",
                    "heart_rate": "145",
                    "anomaly": "True"
          },
          {
                    "key": "Patient_LMN",
                    "vitals": "Stable",
                    "heart_rate": "65",
                    "anomaly": "False"
          },
          {
                    "key": "Patient_QRS",
                    "vitals": "Stable",
                    "heart_rate": "80",
                    "anomaly": "False"
          }
]
    },
    {
        id: 'lesson-w5-d4',
        title: 'Excel: Pivot Tables - Part 4',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/rpkpK_n2ad0?si=premium_mode',
        sources: [
            { title: 'Official Documentation', url: 'https://developer.mozilla.org/' },
            { title: 'Architect Archives', url: '#' }
        ],
        story: `<div class="quad-track"><div class="track-section tech"><h4>💻 1. Algorithmic Processing</h4><p>This module focuses on high-speed data parsing. Time Complexity (Big O) prevents server timeouts.</p></div><div class="track-section health"><h4>🏥 2. Clinical Data Streams</h4><p>Hospitals generate terabytes of telemetry hourly. Structuring this raw byte data is critical.</p></div><div class="track-section bio"><h4>🧬 3. Evolutionary Algorithms</h4><p>Algorithms evolve through mutation and selection. Structure ML pipelines to adapt dynamically.</p></div><div class="track-section lab"><h4>🧪 4. God-Mode Lab</h4><p><strong>Mission:</strong> The pipeline has stalled. Isolate the errant data frame.</p></div></div>`,
        task: {
            type: 'find-value',
            targetColumn: 'status',
            condition: (val) => val === 'CRITICAL',
            successMessage: "System Override Successful. Node unlocked. +100 XP.",
            errorMessage: "Locate the CRITICAL status node."
        },
        data: [
          {
                    "id": 6420,
                    "value": "Alpha_Node",
                    "metric": "0.45",
                    "status": "Active"
          },
          {
                    "id": 6984,
                    "value": "Beta_Node",
                    "metric": "0.89",
                    "status": "Active"
          },
          {
                    "id": 3116,
                    "value": "Omega_Node",
                    "metric": "0.01",
                    "status": "CRITICAL"
          },
          {
                    "id": 5212,
                    "value": "Zeta_Node",
                    "metric": "1.00",
                    "status": "Active"
          }
]
    },
    {
        id: 'lesson-w5-d5',
        title: 'Excel: Pivot Tables - Part 5',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/HcqpanDadyQ?si=premium_mode',
        sources: [
            { title: 'Official Documentation', url: 'https://developer.mozilla.org/' },
            { title: 'Architect Archives', url: '#' }
        ],
        story: `<div class="quad-track"><div class="track-section tech"><h4>💻 1. Core Mechanics</h4><p>Mastering this concept requires understanding the underlying synthetic logic. In enterprise computing, this is the foundational bedrock.</p></div><div class="track-section health"><h4>🏥 2. Bio-Systems</h4><p>Data science in healthcare relies on absolute precision. We apply this logic to sequence genomic arrays.</p></div><div class="track-section bio"><h4>🧬 3. Neural Architecture</h4><p>Information must flow efficiently like a biological synapse. Optimize your code.</p></div><div class="track-section lab"><h4>🧪 4. God-Mode Lab</h4><p><strong>Mission:</strong> Locate the critical node anomaly to restore integrity.</p></div></div>`,
        task: {
            type: 'find-value',
            targetColumn: 'anomaly',
            condition: (val) => val === 'True',
            successMessage: "System Override Successful. Node unlocked. +100 XP.",
            errorMessage: "Find the True anomaly flag."
        },
        data: [
          {
                    "key": "Patient_XYZ",
                    "vitals": "Stable",
                    "heart_rate": "72",
                    "anomaly": "False"
          },
          {
                    "key": "Patient_ABC",
                    "vitals": "Unstable",
                    "heart_rate": "145",
                    "anomaly": "True"
          },
          {
                    "key": "Patient_LMN",
                    "vitals": "Stable",
                    "heart_rate": "65",
                    "anomaly": "False"
          },
          {
                    "key": "Patient_QRS",
                    "vitals": "Stable",
                    "heart_rate": "80",
                    "anomaly": "False"
          }
]
    },
    {
        id: 'lesson-w5-d6',
        title: 'Excel: Pivot Tables - Part 6',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/HcqpanDadyQ?si=premium_mode',
        sources: [
            { title: 'Official Documentation', url: 'https://developer.mozilla.org/' },
            { title: 'Architect Archives', url: '#' }
        ],
        story: `<div class="quad-track"><div class="track-section tech"><h4>💻 1. Algorithmic Processing</h4><p>This module focuses on high-speed data parsing. Time Complexity (Big O) prevents server timeouts.</p></div><div class="track-section health"><h4>🏥 2. Clinical Data Streams</h4><p>Hospitals generate terabytes of telemetry hourly. Structuring this raw byte data is critical.</p></div><div class="track-section bio"><h4>🧬 3. Evolutionary Algorithms</h4><p>Algorithms evolve through mutation and selection. Structure ML pipelines to adapt dynamically.</p></div><div class="track-section lab"><h4>🧪 4. God-Mode Lab</h4><p><strong>Mission:</strong> The pipeline has stalled. Isolate the errant data frame.</p></div></div>`,
        task: {
            type: 'find-value',
            targetColumn: 'status',
            condition: (val) => val === 'CRITICAL',
            successMessage: "System Override Successful. Node unlocked. +100 XP.",
            errorMessage: "Locate the CRITICAL status node."
        },
        data: [
          {
                    "id": 3481,
                    "value": "Alpha_Node",
                    "metric": "0.45",
                    "status": "Active"
          },
          {
                    "id": 8114,
                    "value": "Beta_Node",
                    "metric": "0.89",
                    "status": "Active"
          },
          {
                    "id": 6082,
                    "value": "Omega_Node",
                    "metric": "0.01",
                    "status": "CRITICAL"
          },
          {
                    "id": 7957,
                    "value": "Zeta_Node",
                    "metric": "1.00",
                    "status": "Active"
          }
]
    },
    {
        id: 'lesson-w5-d7',
        title: 'Weekly Concept Review',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/rpkpK_n2ad0?si=premium_mode',
        sources: [
            { title: 'Official Documentation', url: 'https://developer.mozilla.org/' },
            { title: 'Architect Archives', url: '#' }
        ],
        story: `<div class="quad-track"><div class="track-section tech"><h4>💻 1. Algorithmic Processing</h4><p>This module focuses on high-speed data parsing. Time Complexity (Big O) prevents server timeouts.</p></div><div class="track-section health"><h4>🏥 2. Clinical Data Streams</h4><p>Hospitals generate terabytes of telemetry hourly. Structuring this raw byte data is critical.</p></div><div class="track-section bio"><h4>🧬 3. Evolutionary Algorithms</h4><p>Algorithms evolve through mutation and selection. Structure ML pipelines to adapt dynamically.</p></div><div class="track-section lab"><h4>🧪 4. God-Mode Lab</h4><p><strong>Mission:</strong> The pipeline has stalled. Isolate the errant data frame.</p></div></div>`,
        task: {
            type: 'find-value',
            targetColumn: 'anomaly',
            condition: (val) => val === 'True',
            successMessage: "System Override Successful. Node unlocked. +100 XP.",
            errorMessage: "Find the True anomaly flag."
        },
        data: [
          {
                    "key": "Patient_XYZ",
                    "vitals": "Stable",
                    "heart_rate": "72",
                    "anomaly": "False"
          },
          {
                    "key": "Patient_ABC",
                    "vitals": "Unstable",
                    "heart_rate": "145",
                    "anomaly": "True"
          },
          {
                    "key": "Patient_LMN",
                    "vitals": "Stable",
                    "heart_rate": "65",
                    "anomaly": "False"
          },
          {
                    "key": "Patient_QRS",
                    "vitals": "Stable",
                    "heart_rate": "80",
                    "anomaly": "False"
          }
]
    },
    {
        id: 'lesson-w6-d1',
        title: 'Excel: Cleaning Data - Part 1',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/aircAruvnKk?si=premium_mode',
        sources: [
            { title: 'Official Documentation', url: 'https://developer.mozilla.org/' },
            { title: 'Architect Archives', url: '#' }
        ],
        story: `<div class="quad-track"><div class="track-section tech"><h4>💻 1. Algorithmic Processing</h4><p>This module focuses on high-speed data parsing. Time Complexity (Big O) prevents server timeouts.</p></div><div class="track-section health"><h4>🏥 2. Clinical Data Streams</h4><p>Hospitals generate terabytes of telemetry hourly. Structuring this raw byte data is critical.</p></div><div class="track-section bio"><h4>🧬 3. Evolutionary Algorithms</h4><p>Algorithms evolve through mutation and selection. Structure ML pipelines to adapt dynamically.</p></div><div class="track-section lab"><h4>🧪 4. God-Mode Lab</h4><p><strong>Mission:</strong> The pipeline has stalled. Isolate the errant data frame.</p></div></div>`,
        task: {
            type: 'find-value',
            targetColumn: 'status',
            condition: (val) => val === 'CRITICAL',
            successMessage: "System Override Successful. Node unlocked. +100 XP.",
            errorMessage: "Locate the CRITICAL status node."
        },
        data: [
          {
                    "id": 6099,
                    "value": "Alpha_Node",
                    "metric": "0.45",
                    "status": "Active"
          },
          {
                    "id": 9764,
                    "value": "Beta_Node",
                    "metric": "0.89",
                    "status": "Active"
          },
          {
                    "id": 7550,
                    "value": "Omega_Node",
                    "metric": "0.01",
                    "status": "CRITICAL"
          },
          {
                    "id": 6747,
                    "value": "Zeta_Node",
                    "metric": "1.00",
                    "status": "Active"
          }
]
    },
    {
        id: 'lesson-w6-d2',
        title: 'Excel: Cleaning Data - Part 2',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/aircAruvnKk?si=premium_mode',
        sources: [
            { title: 'Official Documentation', url: 'https://developer.mozilla.org/' },
            { title: 'Architect Archives', url: '#' }
        ],
        story: `<div class="quad-track"><div class="track-section tech"><h4>💻 1. Algorithmic Processing</h4><p>This module focuses on high-speed data parsing. Time Complexity (Big O) prevents server timeouts.</p></div><div class="track-section health"><h4>🏥 2. Clinical Data Streams</h4><p>Hospitals generate terabytes of telemetry hourly. Structuring this raw byte data is critical.</p></div><div class="track-section bio"><h4>🧬 3. Evolutionary Algorithms</h4><p>Algorithms evolve through mutation and selection. Structure ML pipelines to adapt dynamically.</p></div><div class="track-section lab"><h4>🧪 4. God-Mode Lab</h4><p><strong>Mission:</strong> The pipeline has stalled. Isolate the errant data frame.</p></div></div>`,
        task: {
            type: 'find-value',
            targetColumn: 'anomaly',
            condition: (val) => val === 'True',
            successMessage: "System Override Successful. Node unlocked. +100 XP.",
            errorMessage: "Find the True anomaly flag."
        },
        data: [
          {
                    "key": "Patient_XYZ",
                    "vitals": "Stable",
                    "heart_rate": "72",
                    "anomaly": "False"
          },
          {
                    "key": "Patient_ABC",
                    "vitals": "Unstable",
                    "heart_rate": "145",
                    "anomaly": "True"
          },
          {
                    "key": "Patient_LMN",
                    "vitals": "Stable",
                    "heart_rate": "65",
                    "anomaly": "False"
          },
          {
                    "key": "Patient_QRS",
                    "vitals": "Stable",
                    "heart_rate": "80",
                    "anomaly": "False"
          }
]
    },
    {
        id: 'lesson-w6-d3',
        title: 'Excel: Cleaning Data - Part 3',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/zOjov-2OZ0E?si=premium_mode',
        sources: [
            { title: 'Official Documentation', url: 'https://developer.mozilla.org/' },
            { title: 'Architect Archives', url: '#' }
        ],
        story: `<div class="quad-track"><div class="track-section tech"><h4>💻 1. Core Mechanics</h4><p>Mastering this concept requires understanding the underlying synthetic logic. In enterprise computing, this is the foundational bedrock.</p></div><div class="track-section health"><h4>🏥 2. Bio-Systems</h4><p>Data science in healthcare relies on absolute precision. We apply this logic to sequence genomic arrays.</p></div><div class="track-section bio"><h4>🧬 3. Neural Architecture</h4><p>Information must flow efficiently like a biological synapse. Optimize your code.</p></div><div class="track-section lab"><h4>🧪 4. God-Mode Lab</h4><p><strong>Mission:</strong> Locate the critical node anomaly to restore integrity.</p></div></div>`,
        task: {
            type: 'find-value',
            targetColumn: 'anomaly',
            condition: (val) => val === 'True',
            successMessage: "System Override Successful. Node unlocked. +100 XP.",
            errorMessage: "Find the True anomaly flag."
        },
        data: [
          {
                    "key": "Patient_XYZ",
                    "vitals": "Stable",
                    "heart_rate": "72",
                    "anomaly": "False"
          },
          {
                    "key": "Patient_ABC",
                    "vitals": "Unstable",
                    "heart_rate": "145",
                    "anomaly": "True"
          },
          {
                    "key": "Patient_LMN",
                    "vitals": "Stable",
                    "heart_rate": "65",
                    "anomaly": "False"
          },
          {
                    "key": "Patient_QRS",
                    "vitals": "Stable",
                    "heart_rate": "80",
                    "anomaly": "False"
          }
]
    },
    {
        id: 'lesson-w6-d4',
        title: 'Excel: Cleaning Data - Part 4',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/rpkpK_n2ad0?si=premium_mode',
        sources: [
            { title: 'Official Documentation', url: 'https://developer.mozilla.org/' },
            { title: 'Architect Archives', url: '#' }
        ],
        story: `<div class="quad-track"><div class="track-section tech"><h4>💻 1. Core Mechanics</h4><p>Mastering this concept requires understanding the underlying synthetic logic. In enterprise computing, this is the foundational bedrock.</p></div><div class="track-section health"><h4>🏥 2. Bio-Systems</h4><p>Data science in healthcare relies on absolute precision. We apply this logic to sequence genomic arrays.</p></div><div class="track-section bio"><h4>🧬 3. Neural Architecture</h4><p>Information must flow efficiently like a biological synapse. Optimize your code.</p></div><div class="track-section lab"><h4>🧪 4. God-Mode Lab</h4><p><strong>Mission:</strong> Locate the critical node anomaly to restore integrity.</p></div></div>`,
        task: {
            type: 'find-value',
            targetColumn: 'anomaly',
            condition: (val) => val === 'True',
            successMessage: "System Override Successful. Node unlocked. +100 XP.",
            errorMessage: "Find the True anomaly flag."
        },
        data: [
          {
                    "key": "Patient_XYZ",
                    "vitals": "Stable",
                    "heart_rate": "72",
                    "anomaly": "False"
          },
          {
                    "key": "Patient_ABC",
                    "vitals": "Unstable",
                    "heart_rate": "145",
                    "anomaly": "True"
          },
          {
                    "key": "Patient_LMN",
                    "vitals": "Stable",
                    "heart_rate": "65",
                    "anomaly": "False"
          },
          {
                    "key": "Patient_QRS",
                    "vitals": "Stable",
                    "heart_rate": "80",
                    "anomaly": "False"
          }
]
    },
    {
        id: 'lesson-w6-d5',
        title: 'Excel: Cleaning Data - Part 5',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/aircAruvnKk?si=premium_mode',
        sources: [
            { title: 'Official Documentation', url: 'https://developer.mozilla.org/' },
            { title: 'Architect Archives', url: '#' }
        ],
        story: `<div class="quad-track"><div class="track-section tech"><h4>💻 1. Core Mechanics</h4><p>Mastering this concept requires understanding the underlying synthetic logic. In enterprise computing, this is the foundational bedrock.</p></div><div class="track-section health"><h4>🏥 2. Bio-Systems</h4><p>Data science in healthcare relies on absolute precision. We apply this logic to sequence genomic arrays.</p></div><div class="track-section bio"><h4>🧬 3. Neural Architecture</h4><p>Information must flow efficiently like a biological synapse. Optimize your code.</p></div><div class="track-section lab"><h4>🧪 4. God-Mode Lab</h4><p><strong>Mission:</strong> Locate the critical node anomaly to restore integrity.</p></div></div>`,
        task: {
            type: 'find-value',
            targetColumn: 'anomaly',
            condition: (val) => val === 'True',
            successMessage: "System Override Successful. Node unlocked. +100 XP.",
            errorMessage: "Find the True anomaly flag."
        },
        data: [
          {
                    "key": "Patient_XYZ",
                    "vitals": "Stable",
                    "heart_rate": "72",
                    "anomaly": "False"
          },
          {
                    "key": "Patient_ABC",
                    "vitals": "Unstable",
                    "heart_rate": "145",
                    "anomaly": "True"
          },
          {
                    "key": "Patient_LMN",
                    "vitals": "Stable",
                    "heart_rate": "65",
                    "anomaly": "False"
          },
          {
                    "key": "Patient_QRS",
                    "vitals": "Stable",
                    "heart_rate": "80",
                    "anomaly": "False"
          }
]
    },
    {
        id: 'lesson-w6-d6',
        title: 'Excel: Cleaning Data - Part 6',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/aircAruvnKk?si=premium_mode',
        sources: [
            { title: 'Official Documentation', url: 'https://developer.mozilla.org/' },
            { title: 'Architect Archives', url: '#' }
        ],
        story: `<div class="quad-track"><div class="track-section tech"><h4>💻 1. Algorithmic Processing</h4><p>This module focuses on high-speed data parsing. Time Complexity (Big O) prevents server timeouts.</p></div><div class="track-section health"><h4>🏥 2. Clinical Data Streams</h4><p>Hospitals generate terabytes of telemetry hourly. Structuring this raw byte data is critical.</p></div><div class="track-section bio"><h4>🧬 3. Evolutionary Algorithms</h4><p>Algorithms evolve through mutation and selection. Structure ML pipelines to adapt dynamically.</p></div><div class="track-section lab"><h4>🧪 4. God-Mode Lab</h4><p><strong>Mission:</strong> The pipeline has stalled. Isolate the errant data frame.</p></div></div>`,
        task: {
            type: 'find-value',
            targetColumn: 'status',
            condition: (val) => val === 'CRITICAL',
            successMessage: "System Override Successful. Node unlocked. +100 XP.",
            errorMessage: "Locate the CRITICAL status node."
        },
        data: [
          {
                    "id": 5984,
                    "value": "Alpha_Node",
                    "metric": "0.45",
                    "status": "Active"
          },
          {
                    "id": 2614,
                    "value": "Beta_Node",
                    "metric": "0.89",
                    "status": "Active"
          },
          {
                    "id": 6141,
                    "value": "Omega_Node",
                    "metric": "0.01",
                    "status": "CRITICAL"
          },
          {
                    "id": 1076,
                    "value": "Zeta_Node",
                    "metric": "1.00",
                    "status": "Active"
          }
]
    },
    {
        id: 'lesson-w6-d7',
        title: 'Weekly Concept Review',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/zOjov-2OZ0E?si=premium_mode',
        sources: [
            { title: 'Official Documentation', url: 'https://developer.mozilla.org/' },
            { title: 'Architect Archives', url: '#' }
        ],
        story: `<div class="quad-track"><div class="track-section tech"><h4>💻 1. Algorithmic Processing</h4><p>This module focuses on high-speed data parsing. Time Complexity (Big O) prevents server timeouts.</p></div><div class="track-section health"><h4>🏥 2. Clinical Data Streams</h4><p>Hospitals generate terabytes of telemetry hourly. Structuring this raw byte data is critical.</p></div><div class="track-section bio"><h4>🧬 3. Evolutionary Algorithms</h4><p>Algorithms evolve through mutation and selection. Structure ML pipelines to adapt dynamically.</p></div><div class="track-section lab"><h4>🧪 4. God-Mode Lab</h4><p><strong>Mission:</strong> The pipeline has stalled. Isolate the errant data frame.</p></div></div>`,
        task: {
            type: 'find-value',
            targetColumn: 'status',
            condition: (val) => val === 'CRITICAL',
            successMessage: "System Override Successful. Node unlocked. +100 XP.",
            errorMessage: "Locate the CRITICAL status node."
        },
        data: [
          {
                    "id": 9711,
                    "value": "Alpha_Node",
                    "metric": "0.45",
                    "status": "Active"
          },
          {
                    "id": 6897,
                    "value": "Beta_Node",
                    "metric": "0.89",
                    "status": "Active"
          },
          {
                    "id": 9725,
                    "value": "Omega_Node",
                    "metric": "0.01",
                    "status": "CRITICAL"
          },
          {
                    "id": 6563,
                    "value": "Zeta_Node",
                    "metric": "1.00",
                    "status": "Active"
          }
]
    },
    {
        id: 'lesson-w7-d1',
        title: 'Excel: Real World Project - Part 1',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/zOjov-2OZ0E?si=premium_mode',
        sources: [
            { title: 'Official Documentation', url: 'https://developer.mozilla.org/' },
            { title: 'Architect Archives', url: '#' }
        ],
        story: `<div class="quad-track"><div class="track-section tech"><h4>💻 1. Algorithmic Processing</h4><p>This module focuses on high-speed data parsing. Time Complexity (Big O) prevents server timeouts.</p></div><div class="track-section health"><h4>🏥 2. Clinical Data Streams</h4><p>Hospitals generate terabytes of telemetry hourly. Structuring this raw byte data is critical.</p></div><div class="track-section bio"><h4>🧬 3. Evolutionary Algorithms</h4><p>Algorithms evolve through mutation and selection. Structure ML pipelines to adapt dynamically.</p></div><div class="track-section lab"><h4>🧪 4. God-Mode Lab</h4><p><strong>Mission:</strong> The pipeline has stalled. Isolate the errant data frame.</p></div></div>`,
        task: {
            type: 'find-value',
            targetColumn: 'anomaly',
            condition: (val) => val === 'True',
            successMessage: "System Override Successful. Node unlocked. +100 XP.",
            errorMessage: "Find the True anomaly flag."
        },
        data: [
          {
                    "key": "Patient_XYZ",
                    "vitals": "Stable",
                    "heart_rate": "72",
                    "anomaly": "False"
          },
          {
                    "key": "Patient_ABC",
                    "vitals": "Unstable",
                    "heart_rate": "145",
                    "anomaly": "True"
          },
          {
                    "key": "Patient_LMN",
                    "vitals": "Stable",
                    "heart_rate": "65",
                    "anomaly": "False"
          },
          {
                    "key": "Patient_QRS",
                    "vitals": "Stable",
                    "heart_rate": "80",
                    "anomaly": "False"
          }
]
    },
    {
        id: 'lesson-w7-d2',
        title: 'Excel: Real World Project - Part 2',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/zOjov-2OZ0E?si=premium_mode',
        sources: [
            { title: 'Official Documentation', url: 'https://developer.mozilla.org/' },
            { title: 'Architect Archives', url: '#' }
        ],
        story: `<div class="quad-track"><div class="track-section tech"><h4>💻 1. Core Mechanics</h4><p>Mastering this concept requires understanding the underlying synthetic logic. In enterprise computing, this is the foundational bedrock.</p></div><div class="track-section health"><h4>🏥 2. Bio-Systems</h4><p>Data science in healthcare relies on absolute precision. We apply this logic to sequence genomic arrays.</p></div><div class="track-section bio"><h4>🧬 3. Neural Architecture</h4><p>Information must flow efficiently like a biological synapse. Optimize your code.</p></div><div class="track-section lab"><h4>🧪 4. God-Mode Lab</h4><p><strong>Mission:</strong> Locate the critical node anomaly to restore integrity.</p></div></div>`,
        task: {
            type: 'find-value',
            targetColumn: 'anomaly',
            condition: (val) => val === 'True',
            successMessage: "System Override Successful. Node unlocked. +100 XP.",
            errorMessage: "Find the True anomaly flag."
        },
        data: [
          {
                    "key": "Patient_XYZ",
                    "vitals": "Stable",
                    "heart_rate": "72",
                    "anomaly": "False"
          },
          {
                    "key": "Patient_ABC",
                    "vitals": "Unstable",
                    "heart_rate": "145",
                    "anomaly": "True"
          },
          {
                    "key": "Patient_LMN",
                    "vitals": "Stable",
                    "heart_rate": "65",
                    "anomaly": "False"
          },
          {
                    "key": "Patient_QRS",
                    "vitals": "Stable",
                    "heart_rate": "80",
                    "anomaly": "False"
          }
]
    },
    {
        id: 'lesson-w7-d3',
        title: 'Excel: Real World Project - Part 3',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/zOjov-2OZ0E?si=premium_mode',
        sources: [
            { title: 'Official Documentation', url: 'https://developer.mozilla.org/' },
            { title: 'Architect Archives', url: '#' }
        ],
        story: `<div class="quad-track"><div class="track-section tech"><h4>💻 1. Algorithmic Processing</h4><p>This module focuses on high-speed data parsing. Time Complexity (Big O) prevents server timeouts.</p></div><div class="track-section health"><h4>🏥 2. Clinical Data Streams</h4><p>Hospitals generate terabytes of telemetry hourly. Structuring this raw byte data is critical.</p></div><div class="track-section bio"><h4>🧬 3. Evolutionary Algorithms</h4><p>Algorithms evolve through mutation and selection. Structure ML pipelines to adapt dynamically.</p></div><div class="track-section lab"><h4>🧪 4. God-Mode Lab</h4><p><strong>Mission:</strong> The pipeline has stalled. Isolate the errant data frame.</p></div></div>`,
        task: {
            type: 'find-value',
            targetColumn: 'status',
            condition: (val) => val === 'CRITICAL',
            successMessage: "System Override Successful. Node unlocked. +100 XP.",
            errorMessage: "Locate the CRITICAL status node."
        },
        data: [
          {
                    "id": 9908,
                    "value": "Alpha_Node",
                    "metric": "0.45",
                    "status": "Active"
          },
          {
                    "id": 9514,
                    "value": "Beta_Node",
                    "metric": "0.89",
                    "status": "Active"
          },
          {
                    "id": 9147,
                    "value": "Omega_Node",
                    "metric": "0.01",
                    "status": "CRITICAL"
          },
          {
                    "id": 7904,
                    "value": "Zeta_Node",
                    "metric": "1.00",
                    "status": "Active"
          }
]
    },
    {
        id: 'lesson-w7-d4',
        title: 'Excel: Real World Project - Part 4',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/zOjov-2OZ0E?si=premium_mode',
        sources: [
            { title: 'Official Documentation', url: 'https://developer.mozilla.org/' },
            { title: 'Architect Archives', url: '#' }
        ],
        story: `<div class="quad-track"><div class="track-section tech"><h4>💻 1. Algorithmic Processing</h4><p>This module focuses on high-speed data parsing. Time Complexity (Big O) prevents server timeouts.</p></div><div class="track-section health"><h4>🏥 2. Clinical Data Streams</h4><p>Hospitals generate terabytes of telemetry hourly. Structuring this raw byte data is critical.</p></div><div class="track-section bio"><h4>🧬 3. Evolutionary Algorithms</h4><p>Algorithms evolve through mutation and selection. Structure ML pipelines to adapt dynamically.</p></div><div class="track-section lab"><h4>🧪 4. God-Mode Lab</h4><p><strong>Mission:</strong> The pipeline has stalled. Isolate the errant data frame.</p></div></div>`,
        task: {
            type: 'find-value',
            targetColumn: 'status',
            condition: (val) => val === 'CRITICAL',
            successMessage: "System Override Successful. Node unlocked. +100 XP.",
            errorMessage: "Locate the CRITICAL status node."
        },
        data: [
          {
                    "id": 9169,
                    "value": "Alpha_Node",
                    "metric": "0.45",
                    "status": "Active"
          },
          {
                    "id": 9160,
                    "value": "Beta_Node",
                    "metric": "0.89",
                    "status": "Active"
          },
          {
                    "id": 8688,
                    "value": "Omega_Node",
                    "metric": "0.01",
                    "status": "CRITICAL"
          },
          {
                    "id": 8246,
                    "value": "Zeta_Node",
                    "metric": "1.00",
                    "status": "Active"
          }
]
    },
    {
        id: 'lesson-w7-d5',
        title: 'Excel: Real World Project - Part 5',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/zOjov-2OZ0E?si=premium_mode',
        sources: [
            { title: 'Official Documentation', url: 'https://developer.mozilla.org/' },
            { title: 'Architect Archives', url: '#' }
        ],
        story: `<div class="quad-track"><div class="track-section tech"><h4>💻 1. Core Mechanics</h4><p>Mastering this concept requires understanding the underlying synthetic logic. In enterprise computing, this is the foundational bedrock.</p></div><div class="track-section health"><h4>🏥 2. Bio-Systems</h4><p>Data science in healthcare relies on absolute precision. We apply this logic to sequence genomic arrays.</p></div><div class="track-section bio"><h4>🧬 3. Neural Architecture</h4><p>Information must flow efficiently like a biological synapse. Optimize your code.</p></div><div class="track-section lab"><h4>🧪 4. God-Mode Lab</h4><p><strong>Mission:</strong> Locate the critical node anomaly to restore integrity.</p></div></div>`,
        task: {
            type: 'find-value',
            targetColumn: 'anomaly',
            condition: (val) => val === 'True',
            successMessage: "System Override Successful. Node unlocked. +100 XP.",
            errorMessage: "Find the True anomaly flag."
        },
        data: [
          {
                    "key": "Patient_XYZ",
                    "vitals": "Stable",
                    "heart_rate": "72",
                    "anomaly": "False"
          },
          {
                    "key": "Patient_ABC",
                    "vitals": "Unstable",
                    "heart_rate": "145",
                    "anomaly": "True"
          },
          {
                    "key": "Patient_LMN",
                    "vitals": "Stable",
                    "heart_rate": "65",
                    "anomaly": "False"
          },
          {
                    "key": "Patient_QRS",
                    "vitals": "Stable",
                    "heart_rate": "80",
                    "anomaly": "False"
          }
]
    },
    {
        id: 'lesson-w7-d6',
        title: 'Excel: Real World Project - Part 6',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/aircAruvnKk?si=premium_mode',
        sources: [
            { title: 'Official Documentation', url: 'https://developer.mozilla.org/' },
            { title: 'Architect Archives', url: '#' }
        ],
        story: `<div class="quad-track"><div class="track-section tech"><h4>💻 1. Algorithmic Processing</h4><p>This module focuses on high-speed data parsing. Time Complexity (Big O) prevents server timeouts.</p></div><div class="track-section health"><h4>🏥 2. Clinical Data Streams</h4><p>Hospitals generate terabytes of telemetry hourly. Structuring this raw byte data is critical.</p></div><div class="track-section bio"><h4>🧬 3. Evolutionary Algorithms</h4><p>Algorithms evolve through mutation and selection. Structure ML pipelines to adapt dynamically.</p></div><div class="track-section lab"><h4>🧪 4. God-Mode Lab</h4><p><strong>Mission:</strong> The pipeline has stalled. Isolate the errant data frame.</p></div></div>`,
        task: {
            type: 'find-value',
            targetColumn: 'anomaly',
            condition: (val) => val === 'True',
            successMessage: "System Override Successful. Node unlocked. +100 XP.",
            errorMessage: "Find the True anomaly flag."
        },
        data: [
          {
                    "key": "Patient_XYZ",
                    "vitals": "Stable",
                    "heart_rate": "72",
                    "anomaly": "False"
          },
          {
                    "key": "Patient_ABC",
                    "vitals": "Unstable",
                    "heart_rate": "145",
                    "anomaly": "True"
          },
          {
                    "key": "Patient_LMN",
                    "vitals": "Stable",
                    "heart_rate": "65",
                    "anomaly": "False"
          },
          {
                    "key": "Patient_QRS",
                    "vitals": "Stable",
                    "heart_rate": "80",
                    "anomaly": "False"
          }
]
    },
    {
        id: 'lesson-w7-d7',
        title: 'Weekly Concept Review',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/rpkpK_n2ad0?si=premium_mode',
        sources: [
            { title: 'Official Documentation', url: 'https://developer.mozilla.org/' },
            { title: 'Architect Archives', url: '#' }
        ],
        story: `<div class="quad-track"><div class="track-section tech"><h4>💻 1. Core Mechanics</h4><p>Mastering this concept requires understanding the underlying synthetic logic. In enterprise computing, this is the foundational bedrock.</p></div><div class="track-section health"><h4>🏥 2. Bio-Systems</h4><p>Data science in healthcare relies on absolute precision. We apply this logic to sequence genomic arrays.</p></div><div class="track-section bio"><h4>🧬 3. Neural Architecture</h4><p>Information must flow efficiently like a biological synapse. Optimize your code.</p></div><div class="track-section lab"><h4>🧪 4. God-Mode Lab</h4><p><strong>Mission:</strong> Locate the critical node anomaly to restore integrity.</p></div></div>`,
        task: {
            type: 'find-value',
            targetColumn: 'anomaly',
            condition: (val) => val === 'True',
            successMessage: "System Override Successful. Node unlocked. +100 XP.",
            errorMessage: "Find the True anomaly flag."
        },
        data: [
          {
                    "key": "Patient_XYZ",
                    "vitals": "Stable",
                    "heart_rate": "72",
                    "anomaly": "False"
          },
          {
                    "key": "Patient_ABC",
                    "vitals": "Unstable",
                    "heart_rate": "145",
                    "anomaly": "True"
          },
          {
                    "key": "Patient_LMN",
                    "vitals": "Stable",
                    "heart_rate": "65",
                    "anomaly": "False"
          },
          {
                    "key": "Patient_QRS",
                    "vitals": "Stable",
                    "heart_rate": "80",
                    "anomaly": "False"
          }
]
    },
    {
        id: 'lesson-w8-d1',
        title: 'Phase 1 Capstone Exam - Part 1',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/HcqpanDadyQ?si=premium_mode',
        sources: [
            { title: 'Official Documentation', url: 'https://developer.mozilla.org/' },
            { title: 'Architect Archives', url: '#' }
        ],
        story: `<div class="quad-track"><div class="track-section tech"><h4>💻 1. Algorithmic Processing</h4><p>This module focuses on high-speed data parsing. Time Complexity (Big O) prevents server timeouts.</p></div><div class="track-section health"><h4>🏥 2. Clinical Data Streams</h4><p>Hospitals generate terabytes of telemetry hourly. Structuring this raw byte data is critical.</p></div><div class="track-section bio"><h4>🧬 3. Evolutionary Algorithms</h4><p>Algorithms evolve through mutation and selection. Structure ML pipelines to adapt dynamically.</p></div><div class="track-section lab"><h4>🧪 4. God-Mode Lab</h4><p><strong>Mission:</strong> The pipeline has stalled. Isolate the errant data frame.</p></div></div>`,
        task: {
            type: 'find-value',
            targetColumn: 'status',
            condition: (val) => val === 'CRITICAL',
            successMessage: "System Override Successful. Node unlocked. +100 XP.",
            errorMessage: "Locate the CRITICAL status node."
        },
        data: [
          {
                    "id": 3041,
                    "value": "Alpha_Node",
                    "metric": "0.45",
                    "status": "Active"
          },
          {
                    "id": 6565,
                    "value": "Beta_Node",
                    "metric": "0.89",
                    "status": "Active"
          },
          {
                    "id": 4635,
                    "value": "Omega_Node",
                    "metric": "0.01",
                    "status": "CRITICAL"
          },
          {
                    "id": 6023,
                    "value": "Zeta_Node",
                    "metric": "1.00",
                    "status": "Active"
          }
]
    },
    {
        id: 'lesson-w8-d2',
        title: 'Phase 1 Capstone Exam - Part 2',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/rpkpK_n2ad0?si=premium_mode',
        sources: [
            { title: 'Official Documentation', url: 'https://developer.mozilla.org/' },
            { title: 'Architect Archives', url: '#' }
        ],
        story: `<div class="quad-track"><div class="track-section tech"><h4>💻 1. Core Mechanics</h4><p>Mastering this concept requires understanding the underlying synthetic logic. In enterprise computing, this is the foundational bedrock.</p></div><div class="track-section health"><h4>🏥 2. Bio-Systems</h4><p>Data science in healthcare relies on absolute precision. We apply this logic to sequence genomic arrays.</p></div><div class="track-section bio"><h4>🧬 3. Neural Architecture</h4><p>Information must flow efficiently like a biological synapse. Optimize your code.</p></div><div class="track-section lab"><h4>🧪 4. God-Mode Lab</h4><p><strong>Mission:</strong> Locate the critical node anomaly to restore integrity.</p></div></div>`,
        task: {
            type: 'find-value',
            targetColumn: 'anomaly',
            condition: (val) => val === 'True',
            successMessage: "System Override Successful. Node unlocked. +100 XP.",
            errorMessage: "Find the True anomaly flag."
        },
        data: [
          {
                    "key": "Patient_XYZ",
                    "vitals": "Stable",
                    "heart_rate": "72",
                    "anomaly": "False"
          },
          {
                    "key": "Patient_ABC",
                    "vitals": "Unstable",
                    "heart_rate": "145",
                    "anomaly": "True"
          },
          {
                    "key": "Patient_LMN",
                    "vitals": "Stable",
                    "heart_rate": "65",
                    "anomaly": "False"
          },
          {
                    "key": "Patient_QRS",
                    "vitals": "Stable",
                    "heart_rate": "80",
                    "anomaly": "False"
          }
]
    },
    {
        id: 'lesson-w8-d3',
        title: 'Phase 1 Capstone Exam - Part 3',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/aircAruvnKk?si=premium_mode',
        sources: [
            { title: 'Official Documentation', url: 'https://developer.mozilla.org/' },
            { title: 'Architect Archives', url: '#' }
        ],
        story: `<div class="quad-track"><div class="track-section tech"><h4>💻 1. Core Mechanics</h4><p>Mastering this concept requires understanding the underlying synthetic logic. In enterprise computing, this is the foundational bedrock.</p></div><div class="track-section health"><h4>🏥 2. Bio-Systems</h4><p>Data science in healthcare relies on absolute precision. We apply this logic to sequence genomic arrays.</p></div><div class="track-section bio"><h4>🧬 3. Neural Architecture</h4><p>Information must flow efficiently like a biological synapse. Optimize your code.</p></div><div class="track-section lab"><h4>🧪 4. God-Mode Lab</h4><p><strong>Mission:</strong> Locate the critical node anomaly to restore integrity.</p></div></div>`,
        task: {
            type: 'find-value',
            targetColumn: 'status',
            condition: (val) => val === 'CRITICAL',
            successMessage: "System Override Successful. Node unlocked. +100 XP.",
            errorMessage: "Locate the CRITICAL status node."
        },
        data: [
          {
                    "id": 4796,
                    "value": "Alpha_Node",
                    "metric": "0.45",
                    "status": "Active"
          },
          {
                    "id": 1048,
                    "value": "Beta_Node",
                    "metric": "0.89",
                    "status": "Active"
          },
          {
                    "id": 4786,
                    "value": "Omega_Node",
                    "metric": "0.01",
                    "status": "CRITICAL"
          },
          {
                    "id": 7314,
                    "value": "Zeta_Node",
                    "metric": "1.00",
                    "status": "Active"
          }
]
    },
    {
        id: 'lesson-w8-d4',
        title: 'Phase 1 Capstone Exam - Part 4',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/zOjov-2OZ0E?si=premium_mode',
        sources: [
            { title: 'Official Documentation', url: 'https://developer.mozilla.org/' },
            { title: 'Architect Archives', url: '#' }
        ],
        story: `<div class="quad-track"><div class="track-section tech"><h4>💻 1. Algorithmic Processing</h4><p>This module focuses on high-speed data parsing. Time Complexity (Big O) prevents server timeouts.</p></div><div class="track-section health"><h4>🏥 2. Clinical Data Streams</h4><p>Hospitals generate terabytes of telemetry hourly. Structuring this raw byte data is critical.</p></div><div class="track-section bio"><h4>🧬 3. Evolutionary Algorithms</h4><p>Algorithms evolve through mutation and selection. Structure ML pipelines to adapt dynamically.</p></div><div class="track-section lab"><h4>🧪 4. God-Mode Lab</h4><p><strong>Mission:</strong> The pipeline has stalled. Isolate the errant data frame.</p></div></div>`,
        task: {
            type: 'find-value',
            targetColumn: 'anomaly',
            condition: (val) => val === 'True',
            successMessage: "System Override Successful. Node unlocked. +100 XP.",
            errorMessage: "Find the True anomaly flag."
        },
        data: [
          {
                    "key": "Patient_XYZ",
                    "vitals": "Stable",
                    "heart_rate": "72",
                    "anomaly": "False"
          },
          {
                    "key": "Patient_ABC",
                    "vitals": "Unstable",
                    "heart_rate": "145",
                    "anomaly": "True"
          },
          {
                    "key": "Patient_LMN",
                    "vitals": "Stable",
                    "heart_rate": "65",
                    "anomaly": "False"
          },
          {
                    "key": "Patient_QRS",
                    "vitals": "Stable",
                    "heart_rate": "80",
                    "anomaly": "False"
          }
]
    },
    {
        id: 'lesson-w8-d5',
        title: 'Phase 1 Capstone Exam - Part 5',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/zOjov-2OZ0E?si=premium_mode',
        sources: [
            { title: 'Official Documentation', url: 'https://developer.mozilla.org/' },
            { title: 'Architect Archives', url: '#' }
        ],
        story: `<div class="quad-track"><div class="track-section tech"><h4>💻 1. Core Mechanics</h4><p>Mastering this concept requires understanding the underlying synthetic logic. In enterprise computing, this is the foundational bedrock.</p></div><div class="track-section health"><h4>🏥 2. Bio-Systems</h4><p>Data science in healthcare relies on absolute precision. We apply this logic to sequence genomic arrays.</p></div><div class="track-section bio"><h4>🧬 3. Neural Architecture</h4><p>Information must flow efficiently like a biological synapse. Optimize your code.</p></div><div class="track-section lab"><h4>🧪 4. God-Mode Lab</h4><p><strong>Mission:</strong> Locate the critical node anomaly to restore integrity.</p></div></div>`,
        task: {
            type: 'find-value',
            targetColumn: 'status',
            condition: (val) => val === 'CRITICAL',
            successMessage: "System Override Successful. Node unlocked. +100 XP.",
            errorMessage: "Locate the CRITICAL status node."
        },
        data: [
          {
                    "id": 8514,
                    "value": "Alpha_Node",
                    "metric": "0.45",
                    "status": "Active"
          },
          {
                    "id": 9489,
                    "value": "Beta_Node",
                    "metric": "0.89",
                    "status": "Active"
          },
          {
                    "id": 8212,
                    "value": "Omega_Node",
                    "metric": "0.01",
                    "status": "CRITICAL"
          },
          {
                    "id": 9701,
                    "value": "Zeta_Node",
                    "metric": "1.00",
                    "status": "Active"
          }
]
    },
    {
        id: 'lesson-w8-d6',
        title: 'Phase 1 Capstone Exam - Part 6',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/aircAruvnKk?si=premium_mode',
        sources: [
            { title: 'Official Documentation', url: 'https://developer.mozilla.org/' },
            { title: 'Architect Archives', url: '#' }
        ],
        story: `<div class="quad-track"><div class="track-section tech"><h4>💻 1. Core Mechanics</h4><p>Mastering this concept requires understanding the underlying synthetic logic. In enterprise computing, this is the foundational bedrock.</p></div><div class="track-section health"><h4>🏥 2. Bio-Systems</h4><p>Data science in healthcare relies on absolute precision. We apply this logic to sequence genomic arrays.</p></div><div class="track-section bio"><h4>🧬 3. Neural Architecture</h4><p>Information must flow efficiently like a biological synapse. Optimize your code.</p></div><div class="track-section lab"><h4>🧪 4. God-Mode Lab</h4><p><strong>Mission:</strong> Locate the critical node anomaly to restore integrity.</p></div></div>`,
        task: {
            type: 'find-value',
            targetColumn: 'status',
            condition: (val) => val === 'CRITICAL',
            successMessage: "System Override Successful. Node unlocked. +100 XP.",
            errorMessage: "Locate the CRITICAL status node."
        },
        data: [
          {
                    "id": 9666,
                    "value": "Alpha_Node",
                    "metric": "0.45",
                    "status": "Active"
          },
          {
                    "id": 8685,
                    "value": "Beta_Node",
                    "metric": "0.89",
                    "status": "Active"
          },
          {
                    "id": 9362,
                    "value": "Omega_Node",
                    "metric": "0.01",
                    "status": "CRITICAL"
          },
          {
                    "id": 4520,
                    "value": "Zeta_Node",
                    "metric": "1.00",
                    "status": "Active"
          }
]
    },
    {
        id: 'lesson-w8-d7',
        title: 'Weekly Concept Review',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/HcqpanDadyQ?si=premium_mode',
        sources: [
            { title: 'Official Documentation', url: 'https://developer.mozilla.org/' },
            { title: 'Architect Archives', url: '#' }
        ],
        story: `<div class="quad-track"><div class="track-section tech"><h4>💻 1. Core Mechanics</h4><p>Mastering this concept requires understanding the underlying synthetic logic. In enterprise computing, this is the foundational bedrock.</p></div><div class="track-section health"><h4>🏥 2. Bio-Systems</h4><p>Data science in healthcare relies on absolute precision. We apply this logic to sequence genomic arrays.</p></div><div class="track-section bio"><h4>🧬 3. Neural Architecture</h4><p>Information must flow efficiently like a biological synapse. Optimize your code.</p></div><div class="track-section lab"><h4>🧪 4. God-Mode Lab</h4><p><strong>Mission:</strong> Locate the critical node anomaly to restore integrity.</p></div></div>`,
        task: {
            type: 'find-value',
            targetColumn: 'status',
            condition: (val) => val === 'CRITICAL',
            successMessage: "System Override Successful. Node unlocked. +100 XP.",
            errorMessage: "Locate the CRITICAL status node."
        },
        data: [
          {
                    "id": 4014,
                    "value": "Alpha_Node",
                    "metric": "0.45",
                    "status": "Active"
          },
          {
                    "id": 9462,
                    "value": "Beta_Node",
                    "metric": "0.89",
                    "status": "Active"
          },
          {
                    "id": 3750,
                    "value": "Omega_Node",
                    "metric": "0.01",
                    "status": "CRITICAL"
          },
          {
                    "id": 1400,
                    "value": "Zeta_Node",
                    "metric": "1.00",
                    "status": "Active"
          }
]
    },
    {
        id: 'lesson-w9-d1',
        title: 'SQL: Hello Database - Part 1',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/rpkpK_n2ad0?si=premium_mode',
        sources: [
            { title: 'Official Documentation', url: 'https://developer.mozilla.org/' },
            { title: 'Architect Archives', url: '#' }
        ],
        story: `<div class="quad-track"><div class="track-section tech"><h4>💻 1. Core Mechanics</h4><p>Mastering this concept requires understanding the underlying synthetic logic. In enterprise computing, this is the foundational bedrock.</p></div><div class="track-section health"><h4>🏥 2. Bio-Systems</h4><p>Data science in healthcare relies on absolute precision. We apply this logic to sequence genomic arrays.</p></div><div class="track-section bio"><h4>🧬 3. Neural Architecture</h4><p>Information must flow efficiently like a biological synapse. Optimize your code.</p></div><div class="track-section lab"><h4>🧪 4. God-Mode Lab</h4><p><strong>Mission:</strong> Locate the critical node anomaly to restore integrity.</p></div></div>`,
        task: {
            type: 'find-value',
            targetColumn: 'status',
            condition: (val) => val === 'CRITICAL',
            successMessage: "System Override Successful. Node unlocked. +100 XP.",
            errorMessage: "Locate the CRITICAL status node."
        },
        data: [
          {
                    "id": 3131,
                    "value": "Alpha_Node",
                    "metric": "0.45",
                    "status": "Active"
          },
          {
                    "id": 1273,
                    "value": "Beta_Node",
                    "metric": "0.89",
                    "status": "Active"
          },
          {
                    "id": 1854,
                    "value": "Omega_Node",
                    "metric": "0.01",
                    "status": "CRITICAL"
          },
          {
                    "id": 9822,
                    "value": "Zeta_Node",
                    "metric": "1.00",
                    "status": "Active"
          }
]
    },
    {
        id: 'lesson-w9-d2',
        title: 'SQL: Hello Database - Part 2',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/rpkpK_n2ad0?si=premium_mode',
        sources: [
            { title: 'Official Documentation', url: 'https://developer.mozilla.org/' },
            { title: 'Architect Archives', url: '#' }
        ],
        story: `<div class="quad-track"><div class="track-section tech"><h4>💻 1. Algorithmic Processing</h4><p>This module focuses on high-speed data parsing. Time Complexity (Big O) prevents server timeouts.</p></div><div class="track-section health"><h4>🏥 2. Clinical Data Streams</h4><p>Hospitals generate terabytes of telemetry hourly. Structuring this raw byte data is critical.</p></div><div class="track-section bio"><h4>🧬 3. Evolutionary Algorithms</h4><p>Algorithms evolve through mutation and selection. Structure ML pipelines to adapt dynamically.</p></div><div class="track-section lab"><h4>🧪 4. God-Mode Lab</h4><p><strong>Mission:</strong> The pipeline has stalled. Isolate the errant data frame.</p></div></div>`,
        task: {
            type: 'find-value',
            targetColumn: 'status',
            condition: (val) => val === 'CRITICAL',
            successMessage: "System Override Successful. Node unlocked. +100 XP.",
            errorMessage: "Locate the CRITICAL status node."
        },
        data: [
          {
                    "id": 3822,
                    "value": "Alpha_Node",
                    "metric": "0.45",
                    "status": "Active"
          },
          {
                    "id": 2806,
                    "value": "Beta_Node",
                    "metric": "0.89",
                    "status": "Active"
          },
          {
                    "id": 3080,
                    "value": "Omega_Node",
                    "metric": "0.01",
                    "status": "CRITICAL"
          },
          {
                    "id": 3174,
                    "value": "Zeta_Node",
                    "metric": "1.00",
                    "status": "Active"
          }
]
    },
    {
        id: 'lesson-w9-d3',
        title: 'SQL: Hello Database - Part 3',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/HcqpanDadyQ?si=premium_mode',
        sources: [
            { title: 'Official Documentation', url: 'https://developer.mozilla.org/' },
            { title: 'Architect Archives', url: '#' }
        ],
        story: `<div class="quad-track"><div class="track-section tech"><h4>💻 1. Core Mechanics</h4><p>Mastering this concept requires understanding the underlying synthetic logic. In enterprise computing, this is the foundational bedrock.</p></div><div class="track-section health"><h4>🏥 2. Bio-Systems</h4><p>Data science in healthcare relies on absolute precision. We apply this logic to sequence genomic arrays.</p></div><div class="track-section bio"><h4>🧬 3. Neural Architecture</h4><p>Information must flow efficiently like a biological synapse. Optimize your code.</p></div><div class="track-section lab"><h4>🧪 4. God-Mode Lab</h4><p><strong>Mission:</strong> Locate the critical node anomaly to restore integrity.</p></div></div>`,
        task: {
            type: 'find-value',
            targetColumn: 'anomaly',
            condition: (val) => val === 'True',
            successMessage: "System Override Successful. Node unlocked. +100 XP.",
            errorMessage: "Find the True anomaly flag."
        },
        data: [
          {
                    "key": "Patient_XYZ",
                    "vitals": "Stable",
                    "heart_rate": "72",
                    "anomaly": "False"
          },
          {
                    "key": "Patient_ABC",
                    "vitals": "Unstable",
                    "heart_rate": "145",
                    "anomaly": "True"
          },
          {
                    "key": "Patient_LMN",
                    "vitals": "Stable",
                    "heart_rate": "65",
                    "anomaly": "False"
          },
          {
                    "key": "Patient_QRS",
                    "vitals": "Stable",
                    "heart_rate": "80",
                    "anomaly": "False"
          }
]
    },
    {
        id: 'lesson-w9-d4',
        title: 'SQL: Hello Database - Part 4',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/rpkpK_n2ad0?si=premium_mode',
        sources: [
            { title: 'Official Documentation', url: 'https://developer.mozilla.org/' },
            { title: 'Architect Archives', url: '#' }
        ],
        story: `<div class="quad-track"><div class="track-section tech"><h4>💻 1. Core Mechanics</h4><p>Mastering this concept requires understanding the underlying synthetic logic. In enterprise computing, this is the foundational bedrock.</p></div><div class="track-section health"><h4>🏥 2. Bio-Systems</h4><p>Data science in healthcare relies on absolute precision. We apply this logic to sequence genomic arrays.</p></div><div class="track-section bio"><h4>🧬 3. Neural Architecture</h4><p>Information must flow efficiently like a biological synapse. Optimize your code.</p></div><div class="track-section lab"><h4>🧪 4. God-Mode Lab</h4><p><strong>Mission:</strong> Locate the critical node anomaly to restore integrity.</p></div></div>`,
        task: {
            type: 'find-value',
            targetColumn: 'anomaly',
            condition: (val) => val === 'True',
            successMessage: "System Override Successful. Node unlocked. +100 XP.",
            errorMessage: "Find the True anomaly flag."
        },
        data: [
          {
                    "key": "Patient_XYZ",
                    "vitals": "Stable",
                    "heart_rate": "72",
                    "anomaly": "False"
          },
          {
                    "key": "Patient_ABC",
                    "vitals": "Unstable",
                    "heart_rate": "145",
                    "anomaly": "True"
          },
          {
                    "key": "Patient_LMN",
                    "vitals": "Stable",
                    "heart_rate": "65",
                    "anomaly": "False"
          },
          {
                    "key": "Patient_QRS",
                    "vitals": "Stable",
                    "heart_rate": "80",
                    "anomaly": "False"
          }
]
    },
    {
        id: 'lesson-w9-d5',
        title: 'SQL: Hello Database - Part 5',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/zOjov-2OZ0E?si=premium_mode',
        sources: [
            { title: 'Official Documentation', url: 'https://developer.mozilla.org/' },
            { title: 'Architect Archives', url: '#' }
        ],
        story: `<div class="quad-track"><div class="track-section tech"><h4>💻 1. Algorithmic Processing</h4><p>This module focuses on high-speed data parsing. Time Complexity (Big O) prevents server timeouts.</p></div><div class="track-section health"><h4>🏥 2. Clinical Data Streams</h4><p>Hospitals generate terabytes of telemetry hourly. Structuring this raw byte data is critical.</p></div><div class="track-section bio"><h4>🧬 3. Evolutionary Algorithms</h4><p>Algorithms evolve through mutation and selection. Structure ML pipelines to adapt dynamically.</p></div><div class="track-section lab"><h4>🧪 4. God-Mode Lab</h4><p><strong>Mission:</strong> The pipeline has stalled. Isolate the errant data frame.</p></div></div>`,
        task: {
            type: 'find-value',
            targetColumn: 'status',
            condition: (val) => val === 'CRITICAL',
            successMessage: "System Override Successful. Node unlocked. +100 XP.",
            errorMessage: "Locate the CRITICAL status node."
        },
        data: [
          {
                    "id": 9104,
                    "value": "Alpha_Node",
                    "metric": "0.45",
                    "status": "Active"
          },
          {
                    "id": 1195,
                    "value": "Beta_Node",
                    "metric": "0.89",
                    "status": "Active"
          },
          {
                    "id": 3502,
                    "value": "Omega_Node",
                    "metric": "0.01",
                    "status": "CRITICAL"
          },
          {
                    "id": 7070,
                    "value": "Zeta_Node",
                    "metric": "1.00",
                    "status": "Active"
          }
]
    },
    {
        id: 'lesson-w9-d6',
        title: 'SQL: Hello Database - Part 6',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/HcqpanDadyQ?si=premium_mode',
        sources: [
            { title: 'Official Documentation', url: 'https://developer.mozilla.org/' },
            { title: 'Architect Archives', url: '#' }
        ],
        story: `<div class="quad-track"><div class="track-section tech"><h4>💻 1. Algorithmic Processing</h4><p>This module focuses on high-speed data parsing. Time Complexity (Big O) prevents server timeouts.</p></div><div class="track-section health"><h4>🏥 2. Clinical Data Streams</h4><p>Hospitals generate terabytes of telemetry hourly. Structuring this raw byte data is critical.</p></div><div class="track-section bio"><h4>🧬 3. Evolutionary Algorithms</h4><p>Algorithms evolve through mutation and selection. Structure ML pipelines to adapt dynamically.</p></div><div class="track-section lab"><h4>🧪 4. God-Mode Lab</h4><p><strong>Mission:</strong> The pipeline has stalled. Isolate the errant data frame.</p></div></div>`,
        task: {
            type: 'find-value',
            targetColumn: 'anomaly',
            condition: (val) => val === 'True',
            successMessage: "System Override Successful. Node unlocked. +100 XP.",
            errorMessage: "Find the True anomaly flag."
        },
        data: [
          {
                    "key": "Patient_XYZ",
                    "vitals": "Stable",
                    "heart_rate": "72",
                    "anomaly": "False"
          },
          {
                    "key": "Patient_ABC",
                    "vitals": "Unstable",
                    "heart_rate": "145",
                    "anomaly": "True"
          },
          {
                    "key": "Patient_LMN",
                    "vitals": "Stable",
                    "heart_rate": "65",
                    "anomaly": "False"
          },
          {
                    "key": "Patient_QRS",
                    "vitals": "Stable",
                    "heart_rate": "80",
                    "anomaly": "False"
          }
]
    },
    {
        id: 'lesson-w9-d7',
        title: 'Weekly Concept Review',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/rpkpK_n2ad0?si=premium_mode',
        sources: [
            { title: 'Official Documentation', url: 'https://developer.mozilla.org/' },
            { title: 'Architect Archives', url: '#' }
        ],
        story: `<div class="quad-track"><div class="track-section tech"><h4>💻 1. Algorithmic Processing</h4><p>This module focuses on high-speed data parsing. Time Complexity (Big O) prevents server timeouts.</p></div><div class="track-section health"><h4>🏥 2. Clinical Data Streams</h4><p>Hospitals generate terabytes of telemetry hourly. Structuring this raw byte data is critical.</p></div><div class="track-section bio"><h4>🧬 3. Evolutionary Algorithms</h4><p>Algorithms evolve through mutation and selection. Structure ML pipelines to adapt dynamically.</p></div><div class="track-section lab"><h4>🧪 4. God-Mode Lab</h4><p><strong>Mission:</strong> The pipeline has stalled. Isolate the errant data frame.</p></div></div>`,
        task: {
            type: 'find-value',
            targetColumn: 'status',
            condition: (val) => val === 'CRITICAL',
            successMessage: "System Override Successful. Node unlocked. +100 XP.",
            errorMessage: "Locate the CRITICAL status node."
        },
        data: [
          {
                    "id": 5830,
                    "value": "Alpha_Node",
                    "metric": "0.45",
                    "status": "Active"
          },
          {
                    "id": 9835,
                    "value": "Beta_Node",
                    "metric": "0.89",
                    "status": "Active"
          },
          {
                    "id": 1015,
                    "value": "Omega_Node",
                    "metric": "0.01",
                    "status": "CRITICAL"
          },
          {
                    "id": 6622,
                    "value": "Zeta_Node",
                    "metric": "1.00",
                    "status": "Active"
          }
]
    },
    {
        id: 'lesson-w10-d1',
        title: 'SQL: SELECT & WHERE - Part 1',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/aircAruvnKk?si=premium_mode',
        sources: [
            { title: 'Official Documentation', url: 'https://developer.mozilla.org/' },
            { title: 'Architect Archives', url: '#' }
        ],
        story: `<div class="quad-track"><div class="track-section tech"><h4>💻 1. Core Mechanics</h4><p>Mastering this concept requires understanding the underlying synthetic logic. In enterprise computing, this is the foundational bedrock.</p></div><div class="track-section health"><h4>🏥 2. Bio-Systems</h4><p>Data science in healthcare relies on absolute precision. We apply this logic to sequence genomic arrays.</p></div><div class="track-section bio"><h4>🧬 3. Neural Architecture</h4><p>Information must flow efficiently like a biological synapse. Optimize your code.</p></div><div class="track-section lab"><h4>🧪 4. God-Mode Lab</h4><p><strong>Mission:</strong> Locate the critical node anomaly to restore integrity.</p></div></div>`,
        task: {
            type: 'find-value',
            targetColumn: 'anomaly',
            condition: (val) => val === 'True',
            successMessage: "System Override Successful. Node unlocked. +100 XP.",
            errorMessage: "Find the True anomaly flag."
        },
        data: [
          {
                    "key": "Patient_XYZ",
                    "vitals": "Stable",
                    "heart_rate": "72",
                    "anomaly": "False"
          },
          {
                    "key": "Patient_ABC",
                    "vitals": "Unstable",
                    "heart_rate": "145",
                    "anomaly": "True"
          },
          {
                    "key": "Patient_LMN",
                    "vitals": "Stable",
                    "heart_rate": "65",
                    "anomaly": "False"
          },
          {
                    "key": "Patient_QRS",
                    "vitals": "Stable",
                    "heart_rate": "80",
                    "anomaly": "False"
          }
]
    },
    {
        id: 'lesson-w10-d2',
        title: 'SQL: SELECT & WHERE - Part 2',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/HcqpanDadyQ?si=premium_mode',
        sources: [
            { title: 'Official Documentation', url: 'https://developer.mozilla.org/' },
            { title: 'Architect Archives', url: '#' }
        ],
        story: `<div class="quad-track"><div class="track-section tech"><h4>💻 1. Core Mechanics</h4><p>Mastering this concept requires understanding the underlying synthetic logic. In enterprise computing, this is the foundational bedrock.</p></div><div class="track-section health"><h4>🏥 2. Bio-Systems</h4><p>Data science in healthcare relies on absolute precision. We apply this logic to sequence genomic arrays.</p></div><div class="track-section bio"><h4>🧬 3. Neural Architecture</h4><p>Information must flow efficiently like a biological synapse. Optimize your code.</p></div><div class="track-section lab"><h4>🧪 4. God-Mode Lab</h4><p><strong>Mission:</strong> Locate the critical node anomaly to restore integrity.</p></div></div>`,
        task: {
            type: 'find-value',
            targetColumn: 'anomaly',
            condition: (val) => val === 'True',
            successMessage: "System Override Successful. Node unlocked. +100 XP.",
            errorMessage: "Find the True anomaly flag."
        },
        data: [
          {
                    "key": "Patient_XYZ",
                    "vitals": "Stable",
                    "heart_rate": "72",
                    "anomaly": "False"
          },
          {
                    "key": "Patient_ABC",
                    "vitals": "Unstable",
                    "heart_rate": "145",
                    "anomaly": "True"
          },
          {
                    "key": "Patient_LMN",
                    "vitals": "Stable",
                    "heart_rate": "65",
                    "anomaly": "False"
          },
          {
                    "key": "Patient_QRS",
                    "vitals": "Stable",
                    "heart_rate": "80",
                    "anomaly": "False"
          }
]
    },
    {
        id: 'lesson-w10-d3',
        title: 'SQL: SELECT & WHERE - Part 3',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/rpkpK_n2ad0?si=premium_mode',
        sources: [
            { title: 'Official Documentation', url: 'https://developer.mozilla.org/' },
            { title: 'Architect Archives', url: '#' }
        ],
        story: `<div class="quad-track"><div class="track-section tech"><h4>💻 1. Core Mechanics</h4><p>Mastering this concept requires understanding the underlying synthetic logic. In enterprise computing, this is the foundational bedrock.</p></div><div class="track-section health"><h4>🏥 2. Bio-Systems</h4><p>Data science in healthcare relies on absolute precision. We apply this logic to sequence genomic arrays.</p></div><div class="track-section bio"><h4>🧬 3. Neural Architecture</h4><p>Information must flow efficiently like a biological synapse. Optimize your code.</p></div><div class="track-section lab"><h4>🧪 4. God-Mode Lab</h4><p><strong>Mission:</strong> Locate the critical node anomaly to restore integrity.</p></div></div>`,
        task: {
            type: 'find-value',
            targetColumn: 'status',
            condition: (val) => val === 'CRITICAL',
            successMessage: "System Override Successful. Node unlocked. +100 XP.",
            errorMessage: "Locate the CRITICAL status node."
        },
        data: [
          {
                    "id": 7960,
                    "value": "Alpha_Node",
                    "metric": "0.45",
                    "status": "Active"
          },
          {
                    "id": 2526,
                    "value": "Beta_Node",
                    "metric": "0.89",
                    "status": "Active"
          },
          {
                    "id": 7124,
                    "value": "Omega_Node",
                    "metric": "0.01",
                    "status": "CRITICAL"
          },
          {
                    "id": 2739,
                    "value": "Zeta_Node",
                    "metric": "1.00",
                    "status": "Active"
          }
]
    },
    {
        id: 'lesson-w10-d4',
        title: 'SQL: SELECT & WHERE - Part 4',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/HcqpanDadyQ?si=premium_mode',
        sources: [
            { title: 'Official Documentation', url: 'https://developer.mozilla.org/' },
            { title: 'Architect Archives', url: '#' }
        ],
        story: `<div class="quad-track"><div class="track-section tech"><h4>💻 1. Algorithmic Processing</h4><p>This module focuses on high-speed data parsing. Time Complexity (Big O) prevents server timeouts.</p></div><div class="track-section health"><h4>🏥 2. Clinical Data Streams</h4><p>Hospitals generate terabytes of telemetry hourly. Structuring this raw byte data is critical.</p></div><div class="track-section bio"><h4>🧬 3. Evolutionary Algorithms</h4><p>Algorithms evolve through mutation and selection. Structure ML pipelines to adapt dynamically.</p></div><div class="track-section lab"><h4>🧪 4. God-Mode Lab</h4><p><strong>Mission:</strong> The pipeline has stalled. Isolate the errant data frame.</p></div></div>`,
        task: {
            type: 'find-value',
            targetColumn: 'status',
            condition: (val) => val === 'CRITICAL',
            successMessage: "System Override Successful. Node unlocked. +100 XP.",
            errorMessage: "Locate the CRITICAL status node."
        },
        data: [
          {
                    "id": 3192,
                    "value": "Alpha_Node",
                    "metric": "0.45",
                    "status": "Active"
          },
          {
                    "id": 5836,
                    "value": "Beta_Node",
                    "metric": "0.89",
                    "status": "Active"
          },
          {
                    "id": 8241,
                    "value": "Omega_Node",
                    "metric": "0.01",
                    "status": "CRITICAL"
          },
          {
                    "id": 8849,
                    "value": "Zeta_Node",
                    "metric": "1.00",
                    "status": "Active"
          }
]
    },
    {
        id: 'lesson-w10-d5',
        title: 'SQL: SELECT & WHERE - Part 5',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/HcqpanDadyQ?si=premium_mode',
        sources: [
            { title: 'Official Documentation', url: 'https://developer.mozilla.org/' },
            { title: 'Architect Archives', url: '#' }
        ],
        story: `<div class="quad-track"><div class="track-section tech"><h4>💻 1. Algorithmic Processing</h4><p>This module focuses on high-speed data parsing. Time Complexity (Big O) prevents server timeouts.</p></div><div class="track-section health"><h4>🏥 2. Clinical Data Streams</h4><p>Hospitals generate terabytes of telemetry hourly. Structuring this raw byte data is critical.</p></div><div class="track-section bio"><h4>🧬 3. Evolutionary Algorithms</h4><p>Algorithms evolve through mutation and selection. Structure ML pipelines to adapt dynamically.</p></div><div class="track-section lab"><h4>🧪 4. God-Mode Lab</h4><p><strong>Mission:</strong> The pipeline has stalled. Isolate the errant data frame.</p></div></div>`,
        task: {
            type: 'find-value',
            targetColumn: 'anomaly',
            condition: (val) => val === 'True',
            successMessage: "System Override Successful. Node unlocked. +100 XP.",
            errorMessage: "Find the True anomaly flag."
        },
        data: [
          {
                    "key": "Patient_XYZ",
                    "vitals": "Stable",
                    "heart_rate": "72",
                    "anomaly": "False"
          },
          {
                    "key": "Patient_ABC",
                    "vitals": "Unstable",
                    "heart_rate": "145",
                    "anomaly": "True"
          },
          {
                    "key": "Patient_LMN",
                    "vitals": "Stable",
                    "heart_rate": "65",
                    "anomaly": "False"
          },
          {
                    "key": "Patient_QRS",
                    "vitals": "Stable",
                    "heart_rate": "80",
                    "anomaly": "False"
          }
]
    },
    {
        id: 'lesson-w10-d6',
        title: 'SQL: SELECT & WHERE - Part 6',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/rpkpK_n2ad0?si=premium_mode',
        sources: [
            { title: 'Official Documentation', url: 'https://developer.mozilla.org/' },
            { title: 'Architect Archives', url: '#' }
        ],
        story: `<div class="quad-track"><div class="track-section tech"><h4>💻 1. Algorithmic Processing</h4><p>This module focuses on high-speed data parsing. Time Complexity (Big O) prevents server timeouts.</p></div><div class="track-section health"><h4>🏥 2. Clinical Data Streams</h4><p>Hospitals generate terabytes of telemetry hourly. Structuring this raw byte data is critical.</p></div><div class="track-section bio"><h4>🧬 3. Evolutionary Algorithms</h4><p>Algorithms evolve through mutation and selection. Structure ML pipelines to adapt dynamically.</p></div><div class="track-section lab"><h4>🧪 4. God-Mode Lab</h4><p><strong>Mission:</strong> The pipeline has stalled. Isolate the errant data frame.</p></div></div>`,
        task: {
            type: 'find-value',
            targetColumn: 'status',
            condition: (val) => val === 'CRITICAL',
            successMessage: "System Override Successful. Node unlocked. +100 XP.",
            errorMessage: "Locate the CRITICAL status node."
        },
        data: [
          {
                    "id": 1877,
                    "value": "Alpha_Node",
                    "metric": "0.45",
                    "status": "Active"
          },
          {
                    "id": 3181,
                    "value": "Beta_Node",
                    "metric": "0.89",
                    "status": "Active"
          },
          {
                    "id": 6931,
                    "value": "Omega_Node",
                    "metric": "0.01",
                    "status": "CRITICAL"
          },
          {
                    "id": 1600,
                    "value": "Zeta_Node",
                    "metric": "1.00",
                    "status": "Active"
          }
]
    },
    {
        id: 'lesson-w10-d7',
        title: 'Weekly Concept Review',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/HcqpanDadyQ?si=premium_mode',
        sources: [
            { title: 'Official Documentation', url: 'https://developer.mozilla.org/' },
            { title: 'Architect Archives', url: '#' }
        ],
        story: `<div class="quad-track"><div class="track-section tech"><h4>💻 1. Core Mechanics</h4><p>Mastering this concept requires understanding the underlying synthetic logic. In enterprise computing, this is the foundational bedrock.</p></div><div class="track-section health"><h4>🏥 2. Bio-Systems</h4><p>Data science in healthcare relies on absolute precision. We apply this logic to sequence genomic arrays.</p></div><div class="track-section bio"><h4>🧬 3. Neural Architecture</h4><p>Information must flow efficiently like a biological synapse. Optimize your code.</p></div><div class="track-section lab"><h4>🧪 4. God-Mode Lab</h4><p><strong>Mission:</strong> Locate the critical node anomaly to restore integrity.</p></div></div>`,
        task: {
            type: 'find-value',
            targetColumn: 'status',
            condition: (val) => val === 'CRITICAL',
            successMessage: "System Override Successful. Node unlocked. +100 XP.",
            errorMessage: "Locate the CRITICAL status node."
        },
        data: [
          {
                    "id": 8224,
                    "value": "Alpha_Node",
                    "metric": "0.45",
                    "status": "Active"
          },
          {
                    "id": 4365,
                    "value": "Beta_Node",
                    "metric": "0.89",
                    "status": "Active"
          },
          {
                    "id": 1421,
                    "value": "Omega_Node",
                    "metric": "0.01",
                    "status": "CRITICAL"
          },
          {
                    "id": 1287,
                    "value": "Zeta_Node",
                    "metric": "1.00",
                    "status": "Active"
          }
]
    },
    {
        id: 'lesson-w11-d1',
        title: 'SQL: Aggregates (COUNT/SUM) - Part 1',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/HcqpanDadyQ?si=premium_mode',
        sources: [
            { title: 'Official Documentation', url: 'https://developer.mozilla.org/' },
            { title: 'Architect Archives', url: '#' }
        ],
        story: `<div class="quad-track"><div class="track-section tech"><h4>💻 1. Algorithmic Processing</h4><p>This module focuses on high-speed data parsing. Time Complexity (Big O) prevents server timeouts.</p></div><div class="track-section health"><h4>🏥 2. Clinical Data Streams</h4><p>Hospitals generate terabytes of telemetry hourly. Structuring this raw byte data is critical.</p></div><div class="track-section bio"><h4>🧬 3. Evolutionary Algorithms</h4><p>Algorithms evolve through mutation and selection. Structure ML pipelines to adapt dynamically.</p></div><div class="track-section lab"><h4>🧪 4. God-Mode Lab</h4><p><strong>Mission:</strong> The pipeline has stalled. Isolate the errant data frame.</p></div></div>`,
        task: {
            type: 'find-value',
            targetColumn: 'anomaly',
            condition: (val) => val === 'True',
            successMessage: "System Override Successful. Node unlocked. +100 XP.",
            errorMessage: "Find the True anomaly flag."
        },
        data: [
          {
                    "key": "Patient_XYZ",
                    "vitals": "Stable",
                    "heart_rate": "72",
                    "anomaly": "False"
          },
          {
                    "key": "Patient_ABC",
                    "vitals": "Unstable",
                    "heart_rate": "145",
                    "anomaly": "True"
          },
          {
                    "key": "Patient_LMN",
                    "vitals": "Stable",
                    "heart_rate": "65",
                    "anomaly": "False"
          },
          {
                    "key": "Patient_QRS",
                    "vitals": "Stable",
                    "heart_rate": "80",
                    "anomaly": "False"
          }
]
    },
    {
        id: 'lesson-w11-d2',
        title: 'SQL: Aggregates (COUNT/SUM) - Part 2',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/zOjov-2OZ0E?si=premium_mode',
        sources: [
            { title: 'Official Documentation', url: 'https://developer.mozilla.org/' },
            { title: 'Architect Archives', url: '#' }
        ],
        story: `<div class="quad-track"><div class="track-section tech"><h4>💻 1. Core Mechanics</h4><p>Mastering this concept requires understanding the underlying synthetic logic. In enterprise computing, this is the foundational bedrock.</p></div><div class="track-section health"><h4>🏥 2. Bio-Systems</h4><p>Data science in healthcare relies on absolute precision. We apply this logic to sequence genomic arrays.</p></div><div class="track-section bio"><h4>🧬 3. Neural Architecture</h4><p>Information must flow efficiently like a biological synapse. Optimize your code.</p></div><div class="track-section lab"><h4>🧪 4. God-Mode Lab</h4><p><strong>Mission:</strong> Locate the critical node anomaly to restore integrity.</p></div></div>`,
        task: {
            type: 'find-value',
            targetColumn: 'anomaly',
            condition: (val) => val === 'True',
            successMessage: "System Override Successful. Node unlocked. +100 XP.",
            errorMessage: "Find the True anomaly flag."
        },
        data: [
          {
                    "key": "Patient_XYZ",
                    "vitals": "Stable",
                    "heart_rate": "72",
                    "anomaly": "False"
          },
          {
                    "key": "Patient_ABC",
                    "vitals": "Unstable",
                    "heart_rate": "145",
                    "anomaly": "True"
          },
          {
                    "key": "Patient_LMN",
                    "vitals": "Stable",
                    "heart_rate": "65",
                    "anomaly": "False"
          },
          {
                    "key": "Patient_QRS",
                    "vitals": "Stable",
                    "heart_rate": "80",
                    "anomaly": "False"
          }
]
    },
    {
        id: 'lesson-w11-d3',
        title: 'SQL: Aggregates (COUNT/SUM) - Part 3',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/HcqpanDadyQ?si=premium_mode',
        sources: [
            { title: 'Official Documentation', url: 'https://developer.mozilla.org/' },
            { title: 'Architect Archives', url: '#' }
        ],
        story: `<div class="quad-track"><div class="track-section tech"><h4>💻 1. Core Mechanics</h4><p>Mastering this concept requires understanding the underlying synthetic logic. In enterprise computing, this is the foundational bedrock.</p></div><div class="track-section health"><h4>🏥 2. Bio-Systems</h4><p>Data science in healthcare relies on absolute precision. We apply this logic to sequence genomic arrays.</p></div><div class="track-section bio"><h4>🧬 3. Neural Architecture</h4><p>Information must flow efficiently like a biological synapse. Optimize your code.</p></div><div class="track-section lab"><h4>🧪 4. God-Mode Lab</h4><p><strong>Mission:</strong> Locate the critical node anomaly to restore integrity.</p></div></div>`,
        task: {
            type: 'find-value',
            targetColumn: 'status',
            condition: (val) => val === 'CRITICAL',
            successMessage: "System Override Successful. Node unlocked. +100 XP.",
            errorMessage: "Locate the CRITICAL status node."
        },
        data: [
          {
                    "id": 8295,
                    "value": "Alpha_Node",
                    "metric": "0.45",
                    "status": "Active"
          },
          {
                    "id": 7989,
                    "value": "Beta_Node",
                    "metric": "0.89",
                    "status": "Active"
          },
          {
                    "id": 5341,
                    "value": "Omega_Node",
                    "metric": "0.01",
                    "status": "CRITICAL"
          },
          {
                    "id": 8022,
                    "value": "Zeta_Node",
                    "metric": "1.00",
                    "status": "Active"
          }
]
    },
    {
        id: 'lesson-w11-d4',
        title: 'SQL: Aggregates (COUNT/SUM) - Part 4',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/aircAruvnKk?si=premium_mode',
        sources: [
            { title: 'Official Documentation', url: 'https://developer.mozilla.org/' },
            { title: 'Architect Archives', url: '#' }
        ],
        story: `<div class="quad-track"><div class="track-section tech"><h4>💻 1. Algorithmic Processing</h4><p>This module focuses on high-speed data parsing. Time Complexity (Big O) prevents server timeouts.</p></div><div class="track-section health"><h4>🏥 2. Clinical Data Streams</h4><p>Hospitals generate terabytes of telemetry hourly. Structuring this raw byte data is critical.</p></div><div class="track-section bio"><h4>🧬 3. Evolutionary Algorithms</h4><p>Algorithms evolve through mutation and selection. Structure ML pipelines to adapt dynamically.</p></div><div class="track-section lab"><h4>🧪 4. God-Mode Lab</h4><p><strong>Mission:</strong> The pipeline has stalled. Isolate the errant data frame.</p></div></div>`,
        task: {
            type: 'find-value',
            targetColumn: 'status',
            condition: (val) => val === 'CRITICAL',
            successMessage: "System Override Successful. Node unlocked. +100 XP.",
            errorMessage: "Locate the CRITICAL status node."
        },
        data: [
          {
                    "id": 2983,
                    "value": "Alpha_Node",
                    "metric": "0.45",
                    "status": "Active"
          },
          {
                    "id": 5037,
                    "value": "Beta_Node",
                    "metric": "0.89",
                    "status": "Active"
          },
          {
                    "id": 6927,
                    "value": "Omega_Node",
                    "metric": "0.01",
                    "status": "CRITICAL"
          },
          {
                    "id": 7619,
                    "value": "Zeta_Node",
                    "metric": "1.00",
                    "status": "Active"
          }
]
    },
    {
        id: 'lesson-w11-d5',
        title: 'SQL: Aggregates (COUNT/SUM) - Part 5',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/zOjov-2OZ0E?si=premium_mode',
        sources: [
            { title: 'Official Documentation', url: 'https://developer.mozilla.org/' },
            { title: 'Architect Archives', url: '#' }
        ],
        story: `<div class="quad-track"><div class="track-section tech"><h4>💻 1. Algorithmic Processing</h4><p>This module focuses on high-speed data parsing. Time Complexity (Big O) prevents server timeouts.</p></div><div class="track-section health"><h4>🏥 2. Clinical Data Streams</h4><p>Hospitals generate terabytes of telemetry hourly. Structuring this raw byte data is critical.</p></div><div class="track-section bio"><h4>🧬 3. Evolutionary Algorithms</h4><p>Algorithms evolve through mutation and selection. Structure ML pipelines to adapt dynamically.</p></div><div class="track-section lab"><h4>🧪 4. God-Mode Lab</h4><p><strong>Mission:</strong> The pipeline has stalled. Isolate the errant data frame.</p></div></div>`,
        task: {
            type: 'find-value',
            targetColumn: 'anomaly',
            condition: (val) => val === 'True',
            successMessage: "System Override Successful. Node unlocked. +100 XP.",
            errorMessage: "Find the True anomaly flag."
        },
        data: [
          {
                    "key": "Patient_XYZ",
                    "vitals": "Stable",
                    "heart_rate": "72",
                    "anomaly": "False"
          },
          {
                    "key": "Patient_ABC",
                    "vitals": "Unstable",
                    "heart_rate": "145",
                    "anomaly": "True"
          },
          {
                    "key": "Patient_LMN",
                    "vitals": "Stable",
                    "heart_rate": "65",
                    "anomaly": "False"
          },
          {
                    "key": "Patient_QRS",
                    "vitals": "Stable",
                    "heart_rate": "80",
                    "anomaly": "False"
          }
]
    },
    {
        id: 'lesson-w11-d6',
        title: 'SQL: Aggregates (COUNT/SUM) - Part 6',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/aircAruvnKk?si=premium_mode',
        sources: [
            { title: 'Official Documentation', url: 'https://developer.mozilla.org/' },
            { title: 'Architect Archives', url: '#' }
        ],
        story: `<div class="quad-track"><div class="track-section tech"><h4>💻 1. Algorithmic Processing</h4><p>This module focuses on high-speed data parsing. Time Complexity (Big O) prevents server timeouts.</p></div><div class="track-section health"><h4>🏥 2. Clinical Data Streams</h4><p>Hospitals generate terabytes of telemetry hourly. Structuring this raw byte data is critical.</p></div><div class="track-section bio"><h4>🧬 3. Evolutionary Algorithms</h4><p>Algorithms evolve through mutation and selection. Structure ML pipelines to adapt dynamically.</p></div><div class="track-section lab"><h4>🧪 4. God-Mode Lab</h4><p><strong>Mission:</strong> The pipeline has stalled. Isolate the errant data frame.</p></div></div>`,
        task: {
            type: 'find-value',
            targetColumn: 'status',
            condition: (val) => val === 'CRITICAL',
            successMessage: "System Override Successful. Node unlocked. +100 XP.",
            errorMessage: "Locate the CRITICAL status node."
        },
        data: [
          {
                    "id": 3051,
                    "value": "Alpha_Node",
                    "metric": "0.45",
                    "status": "Active"
          },
          {
                    "id": 7646,
                    "value": "Beta_Node",
                    "metric": "0.89",
                    "status": "Active"
          },
          {
                    "id": 6735,
                    "value": "Omega_Node",
                    "metric": "0.01",
                    "status": "CRITICAL"
          },
          {
                    "id": 2977,
                    "value": "Zeta_Node",
                    "metric": "1.00",
                    "status": "Active"
          }
]
    },
    {
        id: 'lesson-w11-d7',
        title: 'Weekly Concept Review',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/zOjov-2OZ0E?si=premium_mode',
        sources: [
            { title: 'Official Documentation', url: 'https://developer.mozilla.org/' },
            { title: 'Architect Archives', url: '#' }
        ],
        story: `<div class="quad-track"><div class="track-section tech"><h4>💻 1. Algorithmic Processing</h4><p>This module focuses on high-speed data parsing. Time Complexity (Big O) prevents server timeouts.</p></div><div class="track-section health"><h4>🏥 2. Clinical Data Streams</h4><p>Hospitals generate terabytes of telemetry hourly. Structuring this raw byte data is critical.</p></div><div class="track-section bio"><h4>🧬 3. Evolutionary Algorithms</h4><p>Algorithms evolve through mutation and selection. Structure ML pipelines to adapt dynamically.</p></div><div class="track-section lab"><h4>🧪 4. God-Mode Lab</h4><p><strong>Mission:</strong> The pipeline has stalled. Isolate the errant data frame.</p></div></div>`,
        task: {
            type: 'find-value',
            targetColumn: 'anomaly',
            condition: (val) => val === 'True',
            successMessage: "System Override Successful. Node unlocked. +100 XP.",
            errorMessage: "Find the True anomaly flag."
        },
        data: [
          {
                    "key": "Patient_XYZ",
                    "vitals": "Stable",
                    "heart_rate": "72",
                    "anomaly": "False"
          },
          {
                    "key": "Patient_ABC",
                    "vitals": "Unstable",
                    "heart_rate": "145",
                    "anomaly": "True"
          },
          {
                    "key": "Patient_LMN",
                    "vitals": "Stable",
                    "heart_rate": "65",
                    "anomaly": "False"
          },
          {
                    "key": "Patient_QRS",
                    "vitals": "Stable",
                    "heart_rate": "80",
                    "anomaly": "False"
          }
]
    },
    {
        id: 'lesson-w12-d1',
        title: 'SQL: GROUP BY - Part 1',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/HcqpanDadyQ?si=premium_mode',
        sources: [
            { title: 'Official Documentation', url: 'https://developer.mozilla.org/' },
            { title: 'Architect Archives', url: '#' }
        ],
        story: `<div class="quad-track"><div class="track-section tech"><h4>💻 1. Algorithmic Processing</h4><p>This module focuses on high-speed data parsing. Time Complexity (Big O) prevents server timeouts.</p></div><div class="track-section health"><h4>🏥 2. Clinical Data Streams</h4><p>Hospitals generate terabytes of telemetry hourly. Structuring this raw byte data is critical.</p></div><div class="track-section bio"><h4>🧬 3. Evolutionary Algorithms</h4><p>Algorithms evolve through mutation and selection. Structure ML pipelines to adapt dynamically.</p></div><div class="track-section lab"><h4>🧪 4. God-Mode Lab</h4><p><strong>Mission:</strong> The pipeline has stalled. Isolate the errant data frame.</p></div></div>`,
        task: {
            type: 'find-value',
            targetColumn: 'status',
            condition: (val) => val === 'CRITICAL',
            successMessage: "System Override Successful. Node unlocked. +100 XP.",
            errorMessage: "Locate the CRITICAL status node."
        },
        data: [
          {
                    "id": 2188,
                    "value": "Alpha_Node",
                    "metric": "0.45",
                    "status": "Active"
          },
          {
                    "id": 4129,
                    "value": "Beta_Node",
                    "metric": "0.89",
                    "status": "Active"
          },
          {
                    "id": 8490,
                    "value": "Omega_Node",
                    "metric": "0.01",
                    "status": "CRITICAL"
          },
          {
                    "id": 5589,
                    "value": "Zeta_Node",
                    "metric": "1.00",
                    "status": "Active"
          }
]
    },
    {
        id: 'lesson-w12-d2',
        title: 'SQL: GROUP BY - Part 2',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/HcqpanDadyQ?si=premium_mode',
        sources: [
            { title: 'Official Documentation', url: 'https://developer.mozilla.org/' },
            { title: 'Architect Archives', url: '#' }
        ],
        story: `<div class="quad-track"><div class="track-section tech"><h4>💻 1. Algorithmic Processing</h4><p>This module focuses on high-speed data parsing. Time Complexity (Big O) prevents server timeouts.</p></div><div class="track-section health"><h4>🏥 2. Clinical Data Streams</h4><p>Hospitals generate terabytes of telemetry hourly. Structuring this raw byte data is critical.</p></div><div class="track-section bio"><h4>🧬 3. Evolutionary Algorithms</h4><p>Algorithms evolve through mutation and selection. Structure ML pipelines to adapt dynamically.</p></div><div class="track-section lab"><h4>🧪 4. God-Mode Lab</h4><p><strong>Mission:</strong> The pipeline has stalled. Isolate the errant data frame.</p></div></div>`,
        task: {
            type: 'find-value',
            targetColumn: 'anomaly',
            condition: (val) => val === 'True',
            successMessage: "System Override Successful. Node unlocked. +100 XP.",
            errorMessage: "Find the True anomaly flag."
        },
        data: [
          {
                    "key": "Patient_XYZ",
                    "vitals": "Stable",
                    "heart_rate": "72",
                    "anomaly": "False"
          },
          {
                    "key": "Patient_ABC",
                    "vitals": "Unstable",
                    "heart_rate": "145",
                    "anomaly": "True"
          },
          {
                    "key": "Patient_LMN",
                    "vitals": "Stable",
                    "heart_rate": "65",
                    "anomaly": "False"
          },
          {
                    "key": "Patient_QRS",
                    "vitals": "Stable",
                    "heart_rate": "80",
                    "anomaly": "False"
          }
]
    },
    {
        id: 'lesson-w12-d3',
        title: 'SQL: GROUP BY - Part 3',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/aircAruvnKk?si=premium_mode',
        sources: [
            { title: 'Official Documentation', url: 'https://developer.mozilla.org/' },
            { title: 'Architect Archives', url: '#' }
        ],
        story: `<div class="quad-track"><div class="track-section tech"><h4>💻 1. Core Mechanics</h4><p>Mastering this concept requires understanding the underlying synthetic logic. In enterprise computing, this is the foundational bedrock.</p></div><div class="track-section health"><h4>🏥 2. Bio-Systems</h4><p>Data science in healthcare relies on absolute precision. We apply this logic to sequence genomic arrays.</p></div><div class="track-section bio"><h4>🧬 3. Neural Architecture</h4><p>Information must flow efficiently like a biological synapse. Optimize your code.</p></div><div class="track-section lab"><h4>🧪 4. God-Mode Lab</h4><p><strong>Mission:</strong> Locate the critical node anomaly to restore integrity.</p></div></div>`,
        task: {
            type: 'find-value',
            targetColumn: 'status',
            condition: (val) => val === 'CRITICAL',
            successMessage: "System Override Successful. Node unlocked. +100 XP.",
            errorMessage: "Locate the CRITICAL status node."
        },
        data: [
          {
                    "id": 7614,
                    "value": "Alpha_Node",
                    "metric": "0.45",
                    "status": "Active"
          },
          {
                    "id": 9634,
                    "value": "Beta_Node",
                    "metric": "0.89",
                    "status": "Active"
          },
          {
                    "id": 4816,
                    "value": "Omega_Node",
                    "metric": "0.01",
                    "status": "CRITICAL"
          },
          {
                    "id": 5159,
                    "value": "Zeta_Node",
                    "metric": "1.00",
                    "status": "Active"
          }
]
    },
    {
        id: 'lesson-w12-d4',
        title: 'SQL: GROUP BY - Part 4',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/zOjov-2OZ0E?si=premium_mode',
        sources: [
            { title: 'Official Documentation', url: 'https://developer.mozilla.org/' },
            { title: 'Architect Archives', url: '#' }
        ],
        story: `<div class="quad-track"><div class="track-section tech"><h4>💻 1. Core Mechanics</h4><p>Mastering this concept requires understanding the underlying synthetic logic. In enterprise computing, this is the foundational bedrock.</p></div><div class="track-section health"><h4>🏥 2. Bio-Systems</h4><p>Data science in healthcare relies on absolute precision. We apply this logic to sequence genomic arrays.</p></div><div class="track-section bio"><h4>🧬 3. Neural Architecture</h4><p>Information must flow efficiently like a biological synapse. Optimize your code.</p></div><div class="track-section lab"><h4>🧪 4. God-Mode Lab</h4><p><strong>Mission:</strong> Locate the critical node anomaly to restore integrity.</p></div></div>`,
        task: {
            type: 'find-value',
            targetColumn: 'anomaly',
            condition: (val) => val === 'True',
            successMessage: "System Override Successful. Node unlocked. +100 XP.",
            errorMessage: "Find the True anomaly flag."
        },
        data: [
          {
                    "key": "Patient_XYZ",
                    "vitals": "Stable",
                    "heart_rate": "72",
                    "anomaly": "False"
          },
          {
                    "key": "Patient_ABC",
                    "vitals": "Unstable",
                    "heart_rate": "145",
                    "anomaly": "True"
          },
          {
                    "key": "Patient_LMN",
                    "vitals": "Stable",
                    "heart_rate": "65",
                    "anomaly": "False"
          },
          {
                    "key": "Patient_QRS",
                    "vitals": "Stable",
                    "heart_rate": "80",
                    "anomaly": "False"
          }
]
    },
    {
        id: 'lesson-w12-d5',
        title: 'SQL: GROUP BY - Part 5',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/rpkpK_n2ad0?si=premium_mode',
        sources: [
            { title: 'Official Documentation', url: 'https://developer.mozilla.org/' },
            { title: 'Architect Archives', url: '#' }
        ],
        story: `<div class="quad-track"><div class="track-section tech"><h4>💻 1. Algorithmic Processing</h4><p>This module focuses on high-speed data parsing. Time Complexity (Big O) prevents server timeouts.</p></div><div class="track-section health"><h4>🏥 2. Clinical Data Streams</h4><p>Hospitals generate terabytes of telemetry hourly. Structuring this raw byte data is critical.</p></div><div class="track-section bio"><h4>🧬 3. Evolutionary Algorithms</h4><p>Algorithms evolve through mutation and selection. Structure ML pipelines to adapt dynamically.</p></div><div class="track-section lab"><h4>🧪 4. God-Mode Lab</h4><p><strong>Mission:</strong> The pipeline has stalled. Isolate the errant data frame.</p></div></div>`,
        task: {
            type: 'find-value',
            targetColumn: 'status',
            condition: (val) => val === 'CRITICAL',
            successMessage: "System Override Successful. Node unlocked. +100 XP.",
            errorMessage: "Locate the CRITICAL status node."
        },
        data: [
          {
                    "id": 2911,
                    "value": "Alpha_Node",
                    "metric": "0.45",
                    "status": "Active"
          },
          {
                    "id": 8405,
                    "value": "Beta_Node",
                    "metric": "0.89",
                    "status": "Active"
          },
          {
                    "id": 2535,
                    "value": "Omega_Node",
                    "metric": "0.01",
                    "status": "CRITICAL"
          },
          {
                    "id": 5540,
                    "value": "Zeta_Node",
                    "metric": "1.00",
                    "status": "Active"
          }
]
    },
    {
        id: 'lesson-w12-d6',
        title: 'SQL: GROUP BY - Part 6',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/HcqpanDadyQ?si=premium_mode',
        sources: [
            { title: 'Official Documentation', url: 'https://developer.mozilla.org/' },
            { title: 'Architect Archives', url: '#' }
        ],
        story: `<div class="quad-track"><div class="track-section tech"><h4>💻 1. Algorithmic Processing</h4><p>This module focuses on high-speed data parsing. Time Complexity (Big O) prevents server timeouts.</p></div><div class="track-section health"><h4>🏥 2. Clinical Data Streams</h4><p>Hospitals generate terabytes of telemetry hourly. Structuring this raw byte data is critical.</p></div><div class="track-section bio"><h4>🧬 3. Evolutionary Algorithms</h4><p>Algorithms evolve through mutation and selection. Structure ML pipelines to adapt dynamically.</p></div><div class="track-section lab"><h4>🧪 4. God-Mode Lab</h4><p><strong>Mission:</strong> The pipeline has stalled. Isolate the errant data frame.</p></div></div>`,
        task: {
            type: 'find-value',
            targetColumn: 'status',
            condition: (val) => val === 'CRITICAL',
            successMessage: "System Override Successful. Node unlocked. +100 XP.",
            errorMessage: "Locate the CRITICAL status node."
        },
        data: [
          {
                    "id": 4998,
                    "value": "Alpha_Node",
                    "metric": "0.45",
                    "status": "Active"
          },
          {
                    "id": 3487,
                    "value": "Beta_Node",
                    "metric": "0.89",
                    "status": "Active"
          },
          {
                    "id": 8528,
                    "value": "Omega_Node",
                    "metric": "0.01",
                    "status": "CRITICAL"
          },
          {
                    "id": 9169,
                    "value": "Zeta_Node",
                    "metric": "1.00",
                    "status": "Active"
          }
]
    },
    {
        id: 'lesson-w12-d7',
        title: 'Weekly Concept Review',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/rpkpK_n2ad0?si=premium_mode',
        sources: [
            { title: 'Official Documentation', url: 'https://developer.mozilla.org/' },
            { title: 'Architect Archives', url: '#' }
        ],
        story: `<div class="quad-track"><div class="track-section tech"><h4>💻 1. Core Mechanics</h4><p>Mastering this concept requires understanding the underlying synthetic logic. In enterprise computing, this is the foundational bedrock.</p></div><div class="track-section health"><h4>🏥 2. Bio-Systems</h4><p>Data science in healthcare relies on absolute precision. We apply this logic to sequence genomic arrays.</p></div><div class="track-section bio"><h4>🧬 3. Neural Architecture</h4><p>Information must flow efficiently like a biological synapse. Optimize your code.</p></div><div class="track-section lab"><h4>🧪 4. God-Mode Lab</h4><p><strong>Mission:</strong> Locate the critical node anomaly to restore integrity.</p></div></div>`,
        task: {
            type: 'find-value',
            targetColumn: 'anomaly',
            condition: (val) => val === 'True',
            successMessage: "System Override Successful. Node unlocked. +100 XP.",
            errorMessage: "Find the True anomaly flag."
        },
        data: [
          {
                    "key": "Patient_XYZ",
                    "vitals": "Stable",
                    "heart_rate": "72",
                    "anomaly": "False"
          },
          {
                    "key": "Patient_ABC",
                    "vitals": "Unstable",
                    "heart_rate": "145",
                    "anomaly": "True"
          },
          {
                    "key": "Patient_LMN",
                    "vitals": "Stable",
                    "heart_rate": "65",
                    "anomaly": "False"
          },
          {
                    "key": "Patient_QRS",
                    "vitals": "Stable",
                    "heart_rate": "80",
                    "anomaly": "False"
          }
]
    },
    {
        id: 'lesson-w13-d1',
        title: 'SQL: JOINS (Left/Right) - Part 1',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/HcqpanDadyQ?si=premium_mode',
        sources: [
            { title: 'Official Documentation', url: 'https://developer.mozilla.org/' },
            { title: 'Architect Archives', url: '#' }
        ],
        story: `<div class="quad-track"><div class="track-section tech"><h4>💻 1. Algorithmic Processing</h4><p>This module focuses on high-speed data parsing. Time Complexity (Big O) prevents server timeouts.</p></div><div class="track-section health"><h4>🏥 2. Clinical Data Streams</h4><p>Hospitals generate terabytes of telemetry hourly. Structuring this raw byte data is critical.</p></div><div class="track-section bio"><h4>🧬 3. Evolutionary Algorithms</h4><p>Algorithms evolve through mutation and selection. Structure ML pipelines to adapt dynamically.</p></div><div class="track-section lab"><h4>🧪 4. God-Mode Lab</h4><p><strong>Mission:</strong> The pipeline has stalled. Isolate the errant data frame.</p></div></div>`,
        task: {
            type: 'find-value',
            targetColumn: 'status',
            condition: (val) => val === 'CRITICAL',
            successMessage: "System Override Successful. Node unlocked. +100 XP.",
            errorMessage: "Locate the CRITICAL status node."
        },
        data: [
          {
                    "id": 8377,
                    "value": "Alpha_Node",
                    "metric": "0.45",
                    "status": "Active"
          },
          {
                    "id": 4469,
                    "value": "Beta_Node",
                    "metric": "0.89",
                    "status": "Active"
          },
          {
                    "id": 3634,
                    "value": "Omega_Node",
                    "metric": "0.01",
                    "status": "CRITICAL"
          },
          {
                    "id": 1931,
                    "value": "Zeta_Node",
                    "metric": "1.00",
                    "status": "Active"
          }
]
    },
    {
        id: 'lesson-w13-d2',
        title: 'SQL: JOINS (Left/Right) - Part 2',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/aircAruvnKk?si=premium_mode',
        sources: [
            { title: 'Official Documentation', url: 'https://developer.mozilla.org/' },
            { title: 'Architect Archives', url: '#' }
        ],
        story: `<div class="quad-track"><div class="track-section tech"><h4>💻 1. Core Mechanics</h4><p>Mastering this concept requires understanding the underlying synthetic logic. In enterprise computing, this is the foundational bedrock.</p></div><div class="track-section health"><h4>🏥 2. Bio-Systems</h4><p>Data science in healthcare relies on absolute precision. We apply this logic to sequence genomic arrays.</p></div><div class="track-section bio"><h4>🧬 3. Neural Architecture</h4><p>Information must flow efficiently like a biological synapse. Optimize your code.</p></div><div class="track-section lab"><h4>🧪 4. God-Mode Lab</h4><p><strong>Mission:</strong> Locate the critical node anomaly to restore integrity.</p></div></div>`,
        task: {
            type: 'find-value',
            targetColumn: 'status',
            condition: (val) => val === 'CRITICAL',
            successMessage: "System Override Successful. Node unlocked. +100 XP.",
            errorMessage: "Locate the CRITICAL status node."
        },
        data: [
          {
                    "id": 2020,
                    "value": "Alpha_Node",
                    "metric": "0.45",
                    "status": "Active"
          },
          {
                    "id": 8751,
                    "value": "Beta_Node",
                    "metric": "0.89",
                    "status": "Active"
          },
          {
                    "id": 4288,
                    "value": "Omega_Node",
                    "metric": "0.01",
                    "status": "CRITICAL"
          },
          {
                    "id": 6452,
                    "value": "Zeta_Node",
                    "metric": "1.00",
                    "status": "Active"
          }
]
    },
    {
        id: 'lesson-w13-d3',
        title: 'SQL: JOINS (Left/Right) - Part 3',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/aircAruvnKk?si=premium_mode',
        sources: [
            { title: 'Official Documentation', url: 'https://developer.mozilla.org/' },
            { title: 'Architect Archives', url: '#' }
        ],
        story: `<div class="quad-track"><div class="track-section tech"><h4>💻 1. Core Mechanics</h4><p>Mastering this concept requires understanding the underlying synthetic logic. In enterprise computing, this is the foundational bedrock.</p></div><div class="track-section health"><h4>🏥 2. Bio-Systems</h4><p>Data science in healthcare relies on absolute precision. We apply this logic to sequence genomic arrays.</p></div><div class="track-section bio"><h4>🧬 3. Neural Architecture</h4><p>Information must flow efficiently like a biological synapse. Optimize your code.</p></div><div class="track-section lab"><h4>🧪 4. God-Mode Lab</h4><p><strong>Mission:</strong> Locate the critical node anomaly to restore integrity.</p></div></div>`,
        task: {
            type: 'find-value',
            targetColumn: 'anomaly',
            condition: (val) => val === 'True',
            successMessage: "System Override Successful. Node unlocked. +100 XP.",
            errorMessage: "Find the True anomaly flag."
        },
        data: [
          {
                    "key": "Patient_XYZ",
                    "vitals": "Stable",
                    "heart_rate": "72",
                    "anomaly": "False"
          },
          {
                    "key": "Patient_ABC",
                    "vitals": "Unstable",
                    "heart_rate": "145",
                    "anomaly": "True"
          },
          {
                    "key": "Patient_LMN",
                    "vitals": "Stable",
                    "heart_rate": "65",
                    "anomaly": "False"
          },
          {
                    "key": "Patient_QRS",
                    "vitals": "Stable",
                    "heart_rate": "80",
                    "anomaly": "False"
          }
]
    },
    {
        id: 'lesson-w13-d4',
        title: 'SQL: JOINS (Left/Right) - Part 4',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/zOjov-2OZ0E?si=premium_mode',
        sources: [
            { title: 'Official Documentation', url: 'https://developer.mozilla.org/' },
            { title: 'Architect Archives', url: '#' }
        ],
        story: `<div class="quad-track"><div class="track-section tech"><h4>💻 1. Core Mechanics</h4><p>Mastering this concept requires understanding the underlying synthetic logic. In enterprise computing, this is the foundational bedrock.</p></div><div class="track-section health"><h4>🏥 2. Bio-Systems</h4><p>Data science in healthcare relies on absolute precision. We apply this logic to sequence genomic arrays.</p></div><div class="track-section bio"><h4>🧬 3. Neural Architecture</h4><p>Information must flow efficiently like a biological synapse. Optimize your code.</p></div><div class="track-section lab"><h4>🧪 4. God-Mode Lab</h4><p><strong>Mission:</strong> Locate the critical node anomaly to restore integrity.</p></div></div>`,
        task: {
            type: 'find-value',
            targetColumn: 'status',
            condition: (val) => val === 'CRITICAL',
            successMessage: "System Override Successful. Node unlocked. +100 XP.",
            errorMessage: "Locate the CRITICAL status node."
        },
        data: [
          {
                    "id": 9130,
                    "value": "Alpha_Node",
                    "metric": "0.45",
                    "status": "Active"
          },
          {
                    "id": 5837,
                    "value": "Beta_Node",
                    "metric": "0.89",
                    "status": "Active"
          },
          {
                    "id": 7048,
                    "value": "Omega_Node",
                    "metric": "0.01",
                    "status": "CRITICAL"
          },
          {
                    "id": 4760,
                    "value": "Zeta_Node",
                    "metric": "1.00",
                    "status": "Active"
          }
]
    },
    {
        id: 'lesson-w13-d5',
        title: 'SQL: JOINS (Left/Right) - Part 5',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/HcqpanDadyQ?si=premium_mode',
        sources: [
            { title: 'Official Documentation', url: 'https://developer.mozilla.org/' },
            { title: 'Architect Archives', url: '#' }
        ],
        story: `<div class="quad-track"><div class="track-section tech"><h4>💻 1. Algorithmic Processing</h4><p>This module focuses on high-speed data parsing. Time Complexity (Big O) prevents server timeouts.</p></div><div class="track-section health"><h4>🏥 2. Clinical Data Streams</h4><p>Hospitals generate terabytes of telemetry hourly. Structuring this raw byte data is critical.</p></div><div class="track-section bio"><h4>🧬 3. Evolutionary Algorithms</h4><p>Algorithms evolve through mutation and selection. Structure ML pipelines to adapt dynamically.</p></div><div class="track-section lab"><h4>🧪 4. God-Mode Lab</h4><p><strong>Mission:</strong> The pipeline has stalled. Isolate the errant data frame.</p></div></div>`,
        task: {
            type: 'find-value',
            targetColumn: 'status',
            condition: (val) => val === 'CRITICAL',
            successMessage: "System Override Successful. Node unlocked. +100 XP.",
            errorMessage: "Locate the CRITICAL status node."
        },
        data: [
          {
                    "id": 5485,
                    "value": "Alpha_Node",
                    "metric": "0.45",
                    "status": "Active"
          },
          {
                    "id": 6243,
                    "value": "Beta_Node",
                    "metric": "0.89",
                    "status": "Active"
          },
          {
                    "id": 3395,
                    "value": "Omega_Node",
                    "metric": "0.01",
                    "status": "CRITICAL"
          },
          {
                    "id": 5956,
                    "value": "Zeta_Node",
                    "metric": "1.00",
                    "status": "Active"
          }
]
    },
    {
        id: 'lesson-w13-d6',
        title: 'SQL: JOINS (Left/Right) - Part 6',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/rpkpK_n2ad0?si=premium_mode',
        sources: [
            { title: 'Official Documentation', url: 'https://developer.mozilla.org/' },
            { title: 'Architect Archives', url: '#' }
        ],
        story: `<div class="quad-track"><div class="track-section tech"><h4>💻 1. Core Mechanics</h4><p>Mastering this concept requires understanding the underlying synthetic logic. In enterprise computing, this is the foundational bedrock.</p></div><div class="track-section health"><h4>🏥 2. Bio-Systems</h4><p>Data science in healthcare relies on absolute precision. We apply this logic to sequence genomic arrays.</p></div><div class="track-section bio"><h4>🧬 3. Neural Architecture</h4><p>Information must flow efficiently like a biological synapse. Optimize your code.</p></div><div class="track-section lab"><h4>🧪 4. God-Mode Lab</h4><p><strong>Mission:</strong> Locate the critical node anomaly to restore integrity.</p></div></div>`,
        task: {
            type: 'find-value',
            targetColumn: 'status',
            condition: (val) => val === 'CRITICAL',
            successMessage: "System Override Successful. Node unlocked. +100 XP.",
            errorMessage: "Locate the CRITICAL status node."
        },
        data: [
          {
                    "id": 3843,
                    "value": "Alpha_Node",
                    "metric": "0.45",
                    "status": "Active"
          },
          {
                    "id": 4594,
                    "value": "Beta_Node",
                    "metric": "0.89",
                    "status": "Active"
          },
          {
                    "id": 6939,
                    "value": "Omega_Node",
                    "metric": "0.01",
                    "status": "CRITICAL"
          },
          {
                    "id": 7288,
                    "value": "Zeta_Node",
                    "metric": "1.00",
                    "status": "Active"
          }
]
    },
    {
        id: 'lesson-w13-d7',
        title: 'Weekly Concept Review',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/aircAruvnKk?si=premium_mode',
        sources: [
            { title: 'Official Documentation', url: 'https://developer.mozilla.org/' },
            { title: 'Architect Archives', url: '#' }
        ],
        story: `<div class="quad-track"><div class="track-section tech"><h4>💻 1. Algorithmic Processing</h4><p>This module focuses on high-speed data parsing. Time Complexity (Big O) prevents server timeouts.</p></div><div class="track-section health"><h4>🏥 2. Clinical Data Streams</h4><p>Hospitals generate terabytes of telemetry hourly. Structuring this raw byte data is critical.</p></div><div class="track-section bio"><h4>🧬 3. Evolutionary Algorithms</h4><p>Algorithms evolve through mutation and selection. Structure ML pipelines to adapt dynamically.</p></div><div class="track-section lab"><h4>🧪 4. God-Mode Lab</h4><p><strong>Mission:</strong> The pipeline has stalled. Isolate the errant data frame.</p></div></div>`,
        task: {
            type: 'find-value',
            targetColumn: 'status',
            condition: (val) => val === 'CRITICAL',
            successMessage: "System Override Successful. Node unlocked. +100 XP.",
            errorMessage: "Locate the CRITICAL status node."
        },
        data: [
          {
                    "id": 4964,
                    "value": "Alpha_Node",
                    "metric": "0.45",
                    "status": "Active"
          },
          {
                    "id": 2255,
                    "value": "Beta_Node",
                    "metric": "0.89",
                    "status": "Active"
          },
          {
                    "id": 6391,
                    "value": "Omega_Node",
                    "metric": "0.01",
                    "status": "CRITICAL"
          },
          {
                    "id": 6699,
                    "value": "Zeta_Node",
                    "metric": "1.00",
                    "status": "Active"
          }
]
    },
    {
        id: 'lesson-w14-d1',
        title: 'SQL: Advanced JOINS - Part 1',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/HcqpanDadyQ?si=premium_mode',
        sources: [
            { title: 'Official Documentation', url: 'https://developer.mozilla.org/' },
            { title: 'Architect Archives', url: '#' }
        ],
        story: `<div class="quad-track"><div class="track-section tech"><h4>💻 1. Algorithmic Processing</h4><p>This module focuses on high-speed data parsing. Time Complexity (Big O) prevents server timeouts.</p></div><div class="track-section health"><h4>🏥 2. Clinical Data Streams</h4><p>Hospitals generate terabytes of telemetry hourly. Structuring this raw byte data is critical.</p></div><div class="track-section bio"><h4>🧬 3. Evolutionary Algorithms</h4><p>Algorithms evolve through mutation and selection. Structure ML pipelines to adapt dynamically.</p></div><div class="track-section lab"><h4>🧪 4. God-Mode Lab</h4><p><strong>Mission:</strong> The pipeline has stalled. Isolate the errant data frame.</p></div></div>`,
        task: {
            type: 'find-value',
            targetColumn: 'status',
            condition: (val) => val === 'CRITICAL',
            successMessage: "System Override Successful. Node unlocked. +100 XP.",
            errorMessage: "Locate the CRITICAL status node."
        },
        data: [
          {
                    "id": 9239,
                    "value": "Alpha_Node",
                    "metric": "0.45",
                    "status": "Active"
          },
          {
                    "id": 9074,
                    "value": "Beta_Node",
                    "metric": "0.89",
                    "status": "Active"
          },
          {
                    "id": 6793,
                    "value": "Omega_Node",
                    "metric": "0.01",
                    "status": "CRITICAL"
          },
          {
                    "id": 2358,
                    "value": "Zeta_Node",
                    "metric": "1.00",
                    "status": "Active"
          }
]
    },
    {
        id: 'lesson-w14-d2',
        title: 'SQL: Advanced JOINS - Part 2',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/zOjov-2OZ0E?si=premium_mode',
        sources: [
            { title: 'Official Documentation', url: 'https://developer.mozilla.org/' },
            { title: 'Architect Archives', url: '#' }
        ],
        story: `<div class="quad-track"><div class="track-section tech"><h4>💻 1. Core Mechanics</h4><p>Mastering this concept requires understanding the underlying synthetic logic. In enterprise computing, this is the foundational bedrock.</p></div><div class="track-section health"><h4>🏥 2. Bio-Systems</h4><p>Data science in healthcare relies on absolute precision. We apply this logic to sequence genomic arrays.</p></div><div class="track-section bio"><h4>🧬 3. Neural Architecture</h4><p>Information must flow efficiently like a biological synapse. Optimize your code.</p></div><div class="track-section lab"><h4>🧪 4. God-Mode Lab</h4><p><strong>Mission:</strong> Locate the critical node anomaly to restore integrity.</p></div></div>`,
        task: {
            type: 'find-value',
            targetColumn: 'status',
            condition: (val) => val === 'CRITICAL',
            successMessage: "System Override Successful. Node unlocked. +100 XP.",
            errorMessage: "Locate the CRITICAL status node."
        },
        data: [
          {
                    "id": 4714,
                    "value": "Alpha_Node",
                    "metric": "0.45",
                    "status": "Active"
          },
          {
                    "id": 2899,
                    "value": "Beta_Node",
                    "metric": "0.89",
                    "status": "Active"
          },
          {
                    "id": 2300,
                    "value": "Omega_Node",
                    "metric": "0.01",
                    "status": "CRITICAL"
          },
          {
                    "id": 3866,
                    "value": "Zeta_Node",
                    "metric": "1.00",
                    "status": "Active"
          }
]
    },
    {
        id: 'lesson-w14-d3',
        title: 'SQL: Advanced JOINS - Part 3',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/zOjov-2OZ0E?si=premium_mode',
        sources: [
            { title: 'Official Documentation', url: 'https://developer.mozilla.org/' },
            { title: 'Architect Archives', url: '#' }
        ],
        story: `<div class="quad-track"><div class="track-section tech"><h4>💻 1. Algorithmic Processing</h4><p>This module focuses on high-speed data parsing. Time Complexity (Big O) prevents server timeouts.</p></div><div class="track-section health"><h4>🏥 2. Clinical Data Streams</h4><p>Hospitals generate terabytes of telemetry hourly. Structuring this raw byte data is critical.</p></div><div class="track-section bio"><h4>🧬 3. Evolutionary Algorithms</h4><p>Algorithms evolve through mutation and selection. Structure ML pipelines to adapt dynamically.</p></div><div class="track-section lab"><h4>🧪 4. God-Mode Lab</h4><p><strong>Mission:</strong> The pipeline has stalled. Isolate the errant data frame.</p></div></div>`,
        task: {
            type: 'find-value',
            targetColumn: 'anomaly',
            condition: (val) => val === 'True',
            successMessage: "System Override Successful. Node unlocked. +100 XP.",
            errorMessage: "Find the True anomaly flag."
        },
        data: [
          {
                    "key": "Patient_XYZ",
                    "vitals": "Stable",
                    "heart_rate": "72",
                    "anomaly": "False"
          },
          {
                    "key": "Patient_ABC",
                    "vitals": "Unstable",
                    "heart_rate": "145",
                    "anomaly": "True"
          },
          {
                    "key": "Patient_LMN",
                    "vitals": "Stable",
                    "heart_rate": "65",
                    "anomaly": "False"
          },
          {
                    "key": "Patient_QRS",
                    "vitals": "Stable",
                    "heart_rate": "80",
                    "anomaly": "False"
          }
]
    },
    {
        id: 'lesson-w14-d4',
        title: 'SQL: Advanced JOINS - Part 4',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/zOjov-2OZ0E?si=premium_mode',
        sources: [
            { title: 'Official Documentation', url: 'https://developer.mozilla.org/' },
            { title: 'Architect Archives', url: '#' }
        ],
        story: `<div class="quad-track"><div class="track-section tech"><h4>💻 1. Algorithmic Processing</h4><p>This module focuses on high-speed data parsing. Time Complexity (Big O) prevents server timeouts.</p></div><div class="track-section health"><h4>🏥 2. Clinical Data Streams</h4><p>Hospitals generate terabytes of telemetry hourly. Structuring this raw byte data is critical.</p></div><div class="track-section bio"><h4>🧬 3. Evolutionary Algorithms</h4><p>Algorithms evolve through mutation and selection. Structure ML pipelines to adapt dynamically.</p></div><div class="track-section lab"><h4>🧪 4. God-Mode Lab</h4><p><strong>Mission:</strong> The pipeline has stalled. Isolate the errant data frame.</p></div></div>`,
        task: {
            type: 'find-value',
            targetColumn: 'anomaly',
            condition: (val) => val === 'True',
            successMessage: "System Override Successful. Node unlocked. +100 XP.",
            errorMessage: "Find the True anomaly flag."
        },
        data: [
          {
                    "key": "Patient_XYZ",
                    "vitals": "Stable",
                    "heart_rate": "72",
                    "anomaly": "False"
          },
          {
                    "key": "Patient_ABC",
                    "vitals": "Unstable",
                    "heart_rate": "145",
                    "anomaly": "True"
          },
          {
                    "key": "Patient_LMN",
                    "vitals": "Stable",
                    "heart_rate": "65",
                    "anomaly": "False"
          },
          {
                    "key": "Patient_QRS",
                    "vitals": "Stable",
                    "heart_rate": "80",
                    "anomaly": "False"
          }
]
    },
    {
        id: 'lesson-w14-d5',
        title: 'SQL: Advanced JOINS - Part 5',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/aircAruvnKk?si=premium_mode',
        sources: [
            { title: 'Official Documentation', url: 'https://developer.mozilla.org/' },
            { title: 'Architect Archives', url: '#' }
        ],
        story: `<div class="quad-track"><div class="track-section tech"><h4>💻 1. Algorithmic Processing</h4><p>This module focuses on high-speed data parsing. Time Complexity (Big O) prevents server timeouts.</p></div><div class="track-section health"><h4>🏥 2. Clinical Data Streams</h4><p>Hospitals generate terabytes of telemetry hourly. Structuring this raw byte data is critical.</p></div><div class="track-section bio"><h4>🧬 3. Evolutionary Algorithms</h4><p>Algorithms evolve through mutation and selection. Structure ML pipelines to adapt dynamically.</p></div><div class="track-section lab"><h4>🧪 4. God-Mode Lab</h4><p><strong>Mission:</strong> The pipeline has stalled. Isolate the errant data frame.</p></div></div>`,
        task: {
            type: 'find-value',
            targetColumn: 'status',
            condition: (val) => val === 'CRITICAL',
            successMessage: "System Override Successful. Node unlocked. +100 XP.",
            errorMessage: "Locate the CRITICAL status node."
        },
        data: [
          {
                    "id": 8538,
                    "value": "Alpha_Node",
                    "metric": "0.45",
                    "status": "Active"
          },
          {
                    "id": 2475,
                    "value": "Beta_Node",
                    "metric": "0.89",
                    "status": "Active"
          },
          {
                    "id": 5696,
                    "value": "Omega_Node",
                    "metric": "0.01",
                    "status": "CRITICAL"
          },
          {
                    "id": 4355,
                    "value": "Zeta_Node",
                    "metric": "1.00",
                    "status": "Active"
          }
]
    },
    {
        id: 'lesson-w14-d6',
        title: 'SQL: Advanced JOINS - Part 6',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/zOjov-2OZ0E?si=premium_mode',
        sources: [
            { title: 'Official Documentation', url: 'https://developer.mozilla.org/' },
            { title: 'Architect Archives', url: '#' }
        ],
        story: `<div class="quad-track"><div class="track-section tech"><h4>💻 1. Core Mechanics</h4><p>Mastering this concept requires understanding the underlying synthetic logic. In enterprise computing, this is the foundational bedrock.</p></div><div class="track-section health"><h4>🏥 2. Bio-Systems</h4><p>Data science in healthcare relies on absolute precision. We apply this logic to sequence genomic arrays.</p></div><div class="track-section bio"><h4>🧬 3. Neural Architecture</h4><p>Information must flow efficiently like a biological synapse. Optimize your code.</p></div><div class="track-section lab"><h4>🧪 4. God-Mode Lab</h4><p><strong>Mission:</strong> Locate the critical node anomaly to restore integrity.</p></div></div>`,
        task: {
            type: 'find-value',
            targetColumn: 'anomaly',
            condition: (val) => val === 'True',
            successMessage: "System Override Successful. Node unlocked. +100 XP.",
            errorMessage: "Find the True anomaly flag."
        },
        data: [
          {
                    "key": "Patient_XYZ",
                    "vitals": "Stable",
                    "heart_rate": "72",
                    "anomaly": "False"
          },
          {
                    "key": "Patient_ABC",
                    "vitals": "Unstable",
                    "heart_rate": "145",
                    "anomaly": "True"
          },
          {
                    "key": "Patient_LMN",
                    "vitals": "Stable",
                    "heart_rate": "65",
                    "anomaly": "False"
          },
          {
                    "key": "Patient_QRS",
                    "vitals": "Stable",
                    "heart_rate": "80",
                    "anomaly": "False"
          }
]
    },
    {
        id: 'lesson-w14-d7',
        title: 'Weekly Concept Review',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/rpkpK_n2ad0?si=premium_mode',
        sources: [
            { title: 'Official Documentation', url: 'https://developer.mozilla.org/' },
            { title: 'Architect Archives', url: '#' }
        ],
        story: `<div class="quad-track"><div class="track-section tech"><h4>💻 1. Core Mechanics</h4><p>Mastering this concept requires understanding the underlying synthetic logic. In enterprise computing, this is the foundational bedrock.</p></div><div class="track-section health"><h4>🏥 2. Bio-Systems</h4><p>Data science in healthcare relies on absolute precision. We apply this logic to sequence genomic arrays.</p></div><div class="track-section bio"><h4>🧬 3. Neural Architecture</h4><p>Information must flow efficiently like a biological synapse. Optimize your code.</p></div><div class="track-section lab"><h4>🧪 4. God-Mode Lab</h4><p><strong>Mission:</strong> Locate the critical node anomaly to restore integrity.</p></div></div>`,
        task: {
            type: 'find-value',
            targetColumn: 'status',
            condition: (val) => val === 'CRITICAL',
            successMessage: "System Override Successful. Node unlocked. +100 XP.",
            errorMessage: "Locate the CRITICAL status node."
        },
        data: [
          {
                    "id": 3188,
                    "value": "Alpha_Node",
                    "metric": "0.45",
                    "status": "Active"
          },
          {
                    "id": 1659,
                    "value": "Beta_Node",
                    "metric": "0.89",
                    "status": "Active"
          },
          {
                    "id": 4946,
                    "value": "Omega_Node",
                    "metric": "0.01",
                    "status": "CRITICAL"
          },
          {
                    "id": 7335,
                    "value": "Zeta_Node",
                    "metric": "1.00",
                    "status": "Active"
          }
]
    },
    {
        id: 'lesson-w15-d1',
        title: 'SQL: Subqueries - Part 1',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/aircAruvnKk?si=premium_mode',
        sources: [
            { title: 'Official Documentation', url: 'https://developer.mozilla.org/' },
            { title: 'Architect Archives', url: '#' }
        ],
        story: `<div class="quad-track"><div class="track-section tech"><h4>💻 1. Core Mechanics</h4><p>Mastering this concept requires understanding the underlying synthetic logic. In enterprise computing, this is the foundational bedrock.</p></div><div class="track-section health"><h4>🏥 2. Bio-Systems</h4><p>Data science in healthcare relies on absolute precision. We apply this logic to sequence genomic arrays.</p></div><div class="track-section bio"><h4>🧬 3. Neural Architecture</h4><p>Information must flow efficiently like a biological synapse. Optimize your code.</p></div><div class="track-section lab"><h4>🧪 4. God-Mode Lab</h4><p><strong>Mission:</strong> Locate the critical node anomaly to restore integrity.</p></div></div>`,
        task: {
            type: 'find-value',
            targetColumn: 'status',
            condition: (val) => val === 'CRITICAL',
            successMessage: "System Override Successful. Node unlocked. +100 XP.",
            errorMessage: "Locate the CRITICAL status node."
        },
        data: [
          {
                    "id": 4433,
                    "value": "Alpha_Node",
                    "metric": "0.45",
                    "status": "Active"
          },
          {
                    "id": 5406,
                    "value": "Beta_Node",
                    "metric": "0.89",
                    "status": "Active"
          },
          {
                    "id": 1923,
                    "value": "Omega_Node",
                    "metric": "0.01",
                    "status": "CRITICAL"
          },
          {
                    "id": 8503,
                    "value": "Zeta_Node",
                    "metric": "1.00",
                    "status": "Active"
          }
]
    },
    {
        id: 'lesson-w15-d2',
        title: 'SQL: Subqueries - Part 2',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/zOjov-2OZ0E?si=premium_mode',
        sources: [
            { title: 'Official Documentation', url: 'https://developer.mozilla.org/' },
            { title: 'Architect Archives', url: '#' }
        ],
        story: `<div class="quad-track"><div class="track-section tech"><h4>💻 1. Core Mechanics</h4><p>Mastering this concept requires understanding the underlying synthetic logic. In enterprise computing, this is the foundational bedrock.</p></div><div class="track-section health"><h4>🏥 2. Bio-Systems</h4><p>Data science in healthcare relies on absolute precision. We apply this logic to sequence genomic arrays.</p></div><div class="track-section bio"><h4>🧬 3. Neural Architecture</h4><p>Information must flow efficiently like a biological synapse. Optimize your code.</p></div><div class="track-section lab"><h4>🧪 4. God-Mode Lab</h4><p><strong>Mission:</strong> Locate the critical node anomaly to restore integrity.</p></div></div>`,
        task: {
            type: 'find-value',
            targetColumn: 'status',
            condition: (val) => val === 'CRITICAL',
            successMessage: "System Override Successful. Node unlocked. +100 XP.",
            errorMessage: "Locate the CRITICAL status node."
        },
        data: [
          {
                    "id": 5934,
                    "value": "Alpha_Node",
                    "metric": "0.45",
                    "status": "Active"
          },
          {
                    "id": 9226,
                    "value": "Beta_Node",
                    "metric": "0.89",
                    "status": "Active"
          },
          {
                    "id": 7251,
                    "value": "Omega_Node",
                    "metric": "0.01",
                    "status": "CRITICAL"
          },
          {
                    "id": 7801,
                    "value": "Zeta_Node",
                    "metric": "1.00",
                    "status": "Active"
          }
]
    },
    {
        id: 'lesson-w15-d3',
        title: 'SQL: Subqueries - Part 3',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/aircAruvnKk?si=premium_mode',
        sources: [
            { title: 'Official Documentation', url: 'https://developer.mozilla.org/' },
            { title: 'Architect Archives', url: '#' }
        ],
        story: `<div class="quad-track"><div class="track-section tech"><h4>💻 1. Core Mechanics</h4><p>Mastering this concept requires understanding the underlying synthetic logic. In enterprise computing, this is the foundational bedrock.</p></div><div class="track-section health"><h4>🏥 2. Bio-Systems</h4><p>Data science in healthcare relies on absolute precision. We apply this logic to sequence genomic arrays.</p></div><div class="track-section bio"><h4>🧬 3. Neural Architecture</h4><p>Information must flow efficiently like a biological synapse. Optimize your code.</p></div><div class="track-section lab"><h4>🧪 4. God-Mode Lab</h4><p><strong>Mission:</strong> Locate the critical node anomaly to restore integrity.</p></div></div>`,
        task: {
            type: 'find-value',
            targetColumn: 'status',
            condition: (val) => val === 'CRITICAL',
            successMessage: "System Override Successful. Node unlocked. +100 XP.",
            errorMessage: "Locate the CRITICAL status node."
        },
        data: [
          {
                    "id": 2453,
                    "value": "Alpha_Node",
                    "metric": "0.45",
                    "status": "Active"
          },
          {
                    "id": 6711,
                    "value": "Beta_Node",
                    "metric": "0.89",
                    "status": "Active"
          },
          {
                    "id": 1359,
                    "value": "Omega_Node",
                    "metric": "0.01",
                    "status": "CRITICAL"
          },
          {
                    "id": 2779,
                    "value": "Zeta_Node",
                    "metric": "1.00",
                    "status": "Active"
          }
]
    },
    {
        id: 'lesson-w15-d4',
        title: 'SQL: Subqueries - Part 4',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/zOjov-2OZ0E?si=premium_mode',
        sources: [
            { title: 'Official Documentation', url: 'https://developer.mozilla.org/' },
            { title: 'Architect Archives', url: '#' }
        ],
        story: `<div class="quad-track"><div class="track-section tech"><h4>💻 1. Core Mechanics</h4><p>Mastering this concept requires understanding the underlying synthetic logic. In enterprise computing, this is the foundational bedrock.</p></div><div class="track-section health"><h4>🏥 2. Bio-Systems</h4><p>Data science in healthcare relies on absolute precision. We apply this logic to sequence genomic arrays.</p></div><div class="track-section bio"><h4>🧬 3. Neural Architecture</h4><p>Information must flow efficiently like a biological synapse. Optimize your code.</p></div><div class="track-section lab"><h4>🧪 4. God-Mode Lab</h4><p><strong>Mission:</strong> Locate the critical node anomaly to restore integrity.</p></div></div>`,
        task: {
            type: 'find-value',
            targetColumn: 'status',
            condition: (val) => val === 'CRITICAL',
            successMessage: "System Override Successful. Node unlocked. +100 XP.",
            errorMessage: "Locate the CRITICAL status node."
        },
        data: [
          {
                    "id": 8031,
                    "value": "Alpha_Node",
                    "metric": "0.45",
                    "status": "Active"
          },
          {
                    "id": 9852,
                    "value": "Beta_Node",
                    "metric": "0.89",
                    "status": "Active"
          },
          {
                    "id": 1074,
                    "value": "Omega_Node",
                    "metric": "0.01",
                    "status": "CRITICAL"
          },
          {
                    "id": 1544,
                    "value": "Zeta_Node",
                    "metric": "1.00",
                    "status": "Active"
          }
]
    },
    {
        id: 'lesson-w15-d5',
        title: 'SQL: Subqueries - Part 5',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/zOjov-2OZ0E?si=premium_mode',
        sources: [
            { title: 'Official Documentation', url: 'https://developer.mozilla.org/' },
            { title: 'Architect Archives', url: '#' }
        ],
        story: `<div class="quad-track"><div class="track-section tech"><h4>💻 1. Algorithmic Processing</h4><p>This module focuses on high-speed data parsing. Time Complexity (Big O) prevents server timeouts.</p></div><div class="track-section health"><h4>🏥 2. Clinical Data Streams</h4><p>Hospitals generate terabytes of telemetry hourly. Structuring this raw byte data is critical.</p></div><div class="track-section bio"><h4>🧬 3. Evolutionary Algorithms</h4><p>Algorithms evolve through mutation and selection. Structure ML pipelines to adapt dynamically.</p></div><div class="track-section lab"><h4>🧪 4. God-Mode Lab</h4><p><strong>Mission:</strong> The pipeline has stalled. Isolate the errant data frame.</p></div></div>`,
        task: {
            type: 'find-value',
            targetColumn: 'anomaly',
            condition: (val) => val === 'True',
            successMessage: "System Override Successful. Node unlocked. +100 XP.",
            errorMessage: "Find the True anomaly flag."
        },
        data: [
          {
                    "key": "Patient_XYZ",
                    "vitals": "Stable",
                    "heart_rate": "72",
                    "anomaly": "False"
          },
          {
                    "key": "Patient_ABC",
                    "vitals": "Unstable",
                    "heart_rate": "145",
                    "anomaly": "True"
          },
          {
                    "key": "Patient_LMN",
                    "vitals": "Stable",
                    "heart_rate": "65",
                    "anomaly": "False"
          },
          {
                    "key": "Patient_QRS",
                    "vitals": "Stable",
                    "heart_rate": "80",
                    "anomaly": "False"
          }
]
    },
    {
        id: 'lesson-w15-d6',
        title: 'SQL: Subqueries - Part 6',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/zOjov-2OZ0E?si=premium_mode',
        sources: [
            { title: 'Official Documentation', url: 'https://developer.mozilla.org/' },
            { title: 'Architect Archives', url: '#' }
        ],
        story: `<div class="quad-track"><div class="track-section tech"><h4>💻 1. Core Mechanics</h4><p>Mastering this concept requires understanding the underlying synthetic logic. In enterprise computing, this is the foundational bedrock.</p></div><div class="track-section health"><h4>🏥 2. Bio-Systems</h4><p>Data science in healthcare relies on absolute precision. We apply this logic to sequence genomic arrays.</p></div><div class="track-section bio"><h4>🧬 3. Neural Architecture</h4><p>Information must flow efficiently like a biological synapse. Optimize your code.</p></div><div class="track-section lab"><h4>🧪 4. God-Mode Lab</h4><p><strong>Mission:</strong> Locate the critical node anomaly to restore integrity.</p></div></div>`,
        task: {
            type: 'find-value',
            targetColumn: 'status',
            condition: (val) => val === 'CRITICAL',
            successMessage: "System Override Successful. Node unlocked. +100 XP.",
            errorMessage: "Locate the CRITICAL status node."
        },
        data: [
          {
                    "id": 3007,
                    "value": "Alpha_Node",
                    "metric": "0.45",
                    "status": "Active"
          },
          {
                    "id": 3231,
                    "value": "Beta_Node",
                    "metric": "0.89",
                    "status": "Active"
          },
          {
                    "id": 8849,
                    "value": "Omega_Node",
                    "metric": "0.01",
                    "status": "CRITICAL"
          },
          {
                    "id": 3820,
                    "value": "Zeta_Node",
                    "metric": "1.00",
                    "status": "Active"
          }
]
    },
    {
        id: 'lesson-w15-d7',
        title: 'Weekly Concept Review',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/rpkpK_n2ad0?si=premium_mode',
        sources: [
            { title: 'Official Documentation', url: 'https://developer.mozilla.org/' },
            { title: 'Architect Archives', url: '#' }
        ],
        story: `<div class="quad-track"><div class="track-section tech"><h4>💻 1. Algorithmic Processing</h4><p>This module focuses on high-speed data parsing. Time Complexity (Big O) prevents server timeouts.</p></div><div class="track-section health"><h4>🏥 2. Clinical Data Streams</h4><p>Hospitals generate terabytes of telemetry hourly. Structuring this raw byte data is critical.</p></div><div class="track-section bio"><h4>🧬 3. Evolutionary Algorithms</h4><p>Algorithms evolve through mutation and selection. Structure ML pipelines to adapt dynamically.</p></div><div class="track-section lab"><h4>🧪 4. God-Mode Lab</h4><p><strong>Mission:</strong> The pipeline has stalled. Isolate the errant data frame.</p></div></div>`,
        task: {
            type: 'find-value',
            targetColumn: 'status',
            condition: (val) => val === 'CRITICAL',
            successMessage: "System Override Successful. Node unlocked. +100 XP.",
            errorMessage: "Locate the CRITICAL status node."
        },
        data: [
          {
                    "id": 1562,
                    "value": "Alpha_Node",
                    "metric": "0.45",
                    "status": "Active"
          },
          {
                    "id": 9081,
                    "value": "Beta_Node",
                    "metric": "0.89",
                    "status": "Active"
          },
          {
                    "id": 2989,
                    "value": "Omega_Node",
                    "metric": "0.01",
                    "status": "CRITICAL"
          },
          {
                    "id": 2807,
                    "value": "Zeta_Node",
                    "metric": "1.00",
                    "status": "Active"
          }
]
    },
    {
        id: 'lesson-w16-d1',
        title: 'SQL: Data Modeling - Part 1',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/HcqpanDadyQ?si=premium_mode',
        sources: [
            { title: 'Official Documentation', url: 'https://developer.mozilla.org/' },
            { title: 'Architect Archives', url: '#' }
        ],
        story: `<div class="quad-track"><div class="track-section tech"><h4>💻 1. Core Mechanics</h4><p>Mastering this concept requires understanding the underlying synthetic logic. In enterprise computing, this is the foundational bedrock.</p></div><div class="track-section health"><h4>🏥 2. Bio-Systems</h4><p>Data science in healthcare relies on absolute precision. We apply this logic to sequence genomic arrays.</p></div><div class="track-section bio"><h4>🧬 3. Neural Architecture</h4><p>Information must flow efficiently like a biological synapse. Optimize your code.</p></div><div class="track-section lab"><h4>🧪 4. God-Mode Lab</h4><p><strong>Mission:</strong> Locate the critical node anomaly to restore integrity.</p></div></div>`,
        task: {
            type: 'find-value',
            targetColumn: 'status',
            condition: (val) => val === 'CRITICAL',
            successMessage: "System Override Successful. Node unlocked. +100 XP.",
            errorMessage: "Locate the CRITICAL status node."
        },
        data: [
          {
                    "id": 4801,
                    "value": "Alpha_Node",
                    "metric": "0.45",
                    "status": "Active"
          },
          {
                    "id": 6281,
                    "value": "Beta_Node",
                    "metric": "0.89",
                    "status": "Active"
          },
          {
                    "id": 2625,
                    "value": "Omega_Node",
                    "metric": "0.01",
                    "status": "CRITICAL"
          },
          {
                    "id": 6671,
                    "value": "Zeta_Node",
                    "metric": "1.00",
                    "status": "Active"
          }
]
    },
    {
        id: 'lesson-w16-d2',
        title: 'SQL: Data Modeling - Part 2',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/aircAruvnKk?si=premium_mode',
        sources: [
            { title: 'Official Documentation', url: 'https://developer.mozilla.org/' },
            { title: 'Architect Archives', url: '#' }
        ],
        story: `<div class="quad-track"><div class="track-section tech"><h4>💻 1. Algorithmic Processing</h4><p>This module focuses on high-speed data parsing. Time Complexity (Big O) prevents server timeouts.</p></div><div class="track-section health"><h4>🏥 2. Clinical Data Streams</h4><p>Hospitals generate terabytes of telemetry hourly. Structuring this raw byte data is critical.</p></div><div class="track-section bio"><h4>🧬 3. Evolutionary Algorithms</h4><p>Algorithms evolve through mutation and selection. Structure ML pipelines to adapt dynamically.</p></div><div class="track-section lab"><h4>🧪 4. God-Mode Lab</h4><p><strong>Mission:</strong> The pipeline has stalled. Isolate the errant data frame.</p></div></div>`,
        task: {
            type: 'find-value',
            targetColumn: 'status',
            condition: (val) => val === 'CRITICAL',
            successMessage: "System Override Successful. Node unlocked. +100 XP.",
            errorMessage: "Locate the CRITICAL status node."
        },
        data: [
          {
                    "id": 1238,
                    "value": "Alpha_Node",
                    "metric": "0.45",
                    "status": "Active"
          },
          {
                    "id": 1962,
                    "value": "Beta_Node",
                    "metric": "0.89",
                    "status": "Active"
          },
          {
                    "id": 9623,
                    "value": "Omega_Node",
                    "metric": "0.01",
                    "status": "CRITICAL"
          },
          {
                    "id": 4203,
                    "value": "Zeta_Node",
                    "metric": "1.00",
                    "status": "Active"
          }
]
    },
    {
        id: 'lesson-w16-d3',
        title: 'SQL: Data Modeling - Part 3',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/rpkpK_n2ad0?si=premium_mode',
        sources: [
            { title: 'Official Documentation', url: 'https://developer.mozilla.org/' },
            { title: 'Architect Archives', url: '#' }
        ],
        story: `<div class="quad-track"><div class="track-section tech"><h4>💻 1. Algorithmic Processing</h4><p>This module focuses on high-speed data parsing. Time Complexity (Big O) prevents server timeouts.</p></div><div class="track-section health"><h4>🏥 2. Clinical Data Streams</h4><p>Hospitals generate terabytes of telemetry hourly. Structuring this raw byte data is critical.</p></div><div class="track-section bio"><h4>🧬 3. Evolutionary Algorithms</h4><p>Algorithms evolve through mutation and selection. Structure ML pipelines to adapt dynamically.</p></div><div class="track-section lab"><h4>🧪 4. God-Mode Lab</h4><p><strong>Mission:</strong> The pipeline has stalled. Isolate the errant data frame.</p></div></div>`,
        task: {
            type: 'find-value',
            targetColumn: 'anomaly',
            condition: (val) => val === 'True',
            successMessage: "System Override Successful. Node unlocked. +100 XP.",
            errorMessage: "Find the True anomaly flag."
        },
        data: [
          {
                    "key": "Patient_XYZ",
                    "vitals": "Stable",
                    "heart_rate": "72",
                    "anomaly": "False"
          },
          {
                    "key": "Patient_ABC",
                    "vitals": "Unstable",
                    "heart_rate": "145",
                    "anomaly": "True"
          },
          {
                    "key": "Patient_LMN",
                    "vitals": "Stable",
                    "heart_rate": "65",
                    "anomaly": "False"
          },
          {
                    "key": "Patient_QRS",
                    "vitals": "Stable",
                    "heart_rate": "80",
                    "anomaly": "False"
          }
]
    },
    {
        id: 'lesson-w16-d4',
        title: 'SQL: Data Modeling - Part 4',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/rpkpK_n2ad0?si=premium_mode',
        sources: [
            { title: 'Official Documentation', url: 'https://developer.mozilla.org/' },
            { title: 'Architect Archives', url: '#' }
        ],
        story: `<div class="quad-track"><div class="track-section tech"><h4>💻 1. Algorithmic Processing</h4><p>This module focuses on high-speed data parsing. Time Complexity (Big O) prevents server timeouts.</p></div><div class="track-section health"><h4>🏥 2. Clinical Data Streams</h4><p>Hospitals generate terabytes of telemetry hourly. Structuring this raw byte data is critical.</p></div><div class="track-section bio"><h4>🧬 3. Evolutionary Algorithms</h4><p>Algorithms evolve through mutation and selection. Structure ML pipelines to adapt dynamically.</p></div><div class="track-section lab"><h4>🧪 4. God-Mode Lab</h4><p><strong>Mission:</strong> The pipeline has stalled. Isolate the errant data frame.</p></div></div>`,
        task: {
            type: 'find-value',
            targetColumn: 'status',
            condition: (val) => val === 'CRITICAL',
            successMessage: "System Override Successful. Node unlocked. +100 XP.",
            errorMessage: "Locate the CRITICAL status node."
        },
        data: [
          {
                    "id": 9390,
                    "value": "Alpha_Node",
                    "metric": "0.45",
                    "status": "Active"
          },
          {
                    "id": 9904,
                    "value": "Beta_Node",
                    "metric": "0.89",
                    "status": "Active"
          },
          {
                    "id": 4253,
                    "value": "Omega_Node",
                    "metric": "0.01",
                    "status": "CRITICAL"
          },
          {
                    "id": 2079,
                    "value": "Zeta_Node",
                    "metric": "1.00",
                    "status": "Active"
          }
]
    },
    {
        id: 'lesson-w16-d5',
        title: 'SQL: Data Modeling - Part 5',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/rpkpK_n2ad0?si=premium_mode',
        sources: [
            { title: 'Official Documentation', url: 'https://developer.mozilla.org/' },
            { title: 'Architect Archives', url: '#' }
        ],
        story: `<div class="quad-track"><div class="track-section tech"><h4>💻 1. Algorithmic Processing</h4><p>This module focuses on high-speed data parsing. Time Complexity (Big O) prevents server timeouts.</p></div><div class="track-section health"><h4>🏥 2. Clinical Data Streams</h4><p>Hospitals generate terabytes of telemetry hourly. Structuring this raw byte data is critical.</p></div><div class="track-section bio"><h4>🧬 3. Evolutionary Algorithms</h4><p>Algorithms evolve through mutation and selection. Structure ML pipelines to adapt dynamically.</p></div><div class="track-section lab"><h4>🧪 4. God-Mode Lab</h4><p><strong>Mission:</strong> The pipeline has stalled. Isolate the errant data frame.</p></div></div>`,
        task: {
            type: 'find-value',
            targetColumn: 'status',
            condition: (val) => val === 'CRITICAL',
            successMessage: "System Override Successful. Node unlocked. +100 XP.",
            errorMessage: "Locate the CRITICAL status node."
        },
        data: [
          {
                    "id": 8071,
                    "value": "Alpha_Node",
                    "metric": "0.45",
                    "status": "Active"
          },
          {
                    "id": 5602,
                    "value": "Beta_Node",
                    "metric": "0.89",
                    "status": "Active"
          },
          {
                    "id": 9597,
                    "value": "Omega_Node",
                    "metric": "0.01",
                    "status": "CRITICAL"
          },
          {
                    "id": 5946,
                    "value": "Zeta_Node",
                    "metric": "1.00",
                    "status": "Active"
          }
]
    },
    {
        id: 'lesson-w16-d6',
        title: 'SQL: Data Modeling - Part 6',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/HcqpanDadyQ?si=premium_mode',
        sources: [
            { title: 'Official Documentation', url: 'https://developer.mozilla.org/' },
            { title: 'Architect Archives', url: '#' }
        ],
        story: `<div class="quad-track"><div class="track-section tech"><h4>💻 1. Algorithmic Processing</h4><p>This module focuses on high-speed data parsing. Time Complexity (Big O) prevents server timeouts.</p></div><div class="track-section health"><h4>🏥 2. Clinical Data Streams</h4><p>Hospitals generate terabytes of telemetry hourly. Structuring this raw byte data is critical.</p></div><div class="track-section bio"><h4>🧬 3. Evolutionary Algorithms</h4><p>Algorithms evolve through mutation and selection. Structure ML pipelines to adapt dynamically.</p></div><div class="track-section lab"><h4>🧪 4. God-Mode Lab</h4><p><strong>Mission:</strong> The pipeline has stalled. Isolate the errant data frame.</p></div></div>`,
        task: {
            type: 'find-value',
            targetColumn: 'status',
            condition: (val) => val === 'CRITICAL',
            successMessage: "System Override Successful. Node unlocked. +100 XP.",
            errorMessage: "Locate the CRITICAL status node."
        },
        data: [
          {
                    "id": 9767,
                    "value": "Alpha_Node",
                    "metric": "0.45",
                    "status": "Active"
          },
          {
                    "id": 4298,
                    "value": "Beta_Node",
                    "metric": "0.89",
                    "status": "Active"
          },
          {
                    "id": 1766,
                    "value": "Omega_Node",
                    "metric": "0.01",
                    "status": "CRITICAL"
          },
          {
                    "id": 2551,
                    "value": "Zeta_Node",
                    "metric": "1.00",
                    "status": "Active"
          }
]
    },
    {
        id: 'lesson-w16-d7',
        title: 'Weekly Concept Review',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/zOjov-2OZ0E?si=premium_mode',
        sources: [
            { title: 'Official Documentation', url: 'https://developer.mozilla.org/' },
            { title: 'Architect Archives', url: '#' }
        ],
        story: `<div class="quad-track"><div class="track-section tech"><h4>💻 1. Algorithmic Processing</h4><p>This module focuses on high-speed data parsing. Time Complexity (Big O) prevents server timeouts.</p></div><div class="track-section health"><h4>🏥 2. Clinical Data Streams</h4><p>Hospitals generate terabytes of telemetry hourly. Structuring this raw byte data is critical.</p></div><div class="track-section bio"><h4>🧬 3. Evolutionary Algorithms</h4><p>Algorithms evolve through mutation and selection. Structure ML pipelines to adapt dynamically.</p></div><div class="track-section lab"><h4>🧪 4. God-Mode Lab</h4><p><strong>Mission:</strong> The pipeline has stalled. Isolate the errant data frame.</p></div></div>`,
        task: {
            type: 'find-value',
            targetColumn: 'status',
            condition: (val) => val === 'CRITICAL',
            successMessage: "System Override Successful. Node unlocked. +100 XP.",
            errorMessage: "Locate the CRITICAL status node."
        },
        data: [
          {
                    "id": 2872,
                    "value": "Alpha_Node",
                    "metric": "0.45",
                    "status": "Active"
          },
          {
                    "id": 8786,
                    "value": "Beta_Node",
                    "metric": "0.89",
                    "status": "Active"
          },
          {
                    "id": 7909,
                    "value": "Omega_Node",
                    "metric": "0.01",
                    "status": "CRITICAL"
          },
          {
                    "id": 4912,
                    "value": "Zeta_Node",
                    "metric": "1.00",
                    "status": "Active"
          }
]
    },
    {
        id: 'lesson-w17-d1',
        title: 'PowerBI: Intro - Part 1',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/HcqpanDadyQ?si=premium_mode',
        sources: [
            { title: 'Official Documentation', url: 'https://developer.mozilla.org/' },
            { title: 'Architect Archives', url: '#' }
        ],
        story: `<div class="quad-track"><div class="track-section tech"><h4>💻 1. Algorithmic Processing</h4><p>This module focuses on high-speed data parsing. Time Complexity (Big O) prevents server timeouts.</p></div><div class="track-section health"><h4>🏥 2. Clinical Data Streams</h4><p>Hospitals generate terabytes of telemetry hourly. Structuring this raw byte data is critical.</p></div><div class="track-section bio"><h4>🧬 3. Evolutionary Algorithms</h4><p>Algorithms evolve through mutation and selection. Structure ML pipelines to adapt dynamically.</p></div><div class="track-section lab"><h4>🧪 4. God-Mode Lab</h4><p><strong>Mission:</strong> The pipeline has stalled. Isolate the errant data frame.</p></div></div>`,
        task: {
            type: 'find-value',
            targetColumn: 'anomaly',
            condition: (val) => val === 'True',
            successMessage: "System Override Successful. Node unlocked. +100 XP.",
            errorMessage: "Find the True anomaly flag."
        },
        data: [
          {
                    "key": "Patient_XYZ",
                    "vitals": "Stable",
                    "heart_rate": "72",
                    "anomaly": "False"
          },
          {
                    "key": "Patient_ABC",
                    "vitals": "Unstable",
                    "heart_rate": "145",
                    "anomaly": "True"
          },
          {
                    "key": "Patient_LMN",
                    "vitals": "Stable",
                    "heart_rate": "65",
                    "anomaly": "False"
          },
          {
                    "key": "Patient_QRS",
                    "vitals": "Stable",
                    "heart_rate": "80",
                    "anomaly": "False"
          }
]
    },
    {
        id: 'lesson-w17-d2',
        title: 'PowerBI: Intro - Part 2',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/aircAruvnKk?si=premium_mode',
        sources: [
            { title: 'Official Documentation', url: 'https://developer.mozilla.org/' },
            { title: 'Architect Archives', url: '#' }
        ],
        story: `<div class="quad-track"><div class="track-section tech"><h4>💻 1. Core Mechanics</h4><p>Mastering this concept requires understanding the underlying synthetic logic. In enterprise computing, this is the foundational bedrock.</p></div><div class="track-section health"><h4>🏥 2. Bio-Systems</h4><p>Data science in healthcare relies on absolute precision. We apply this logic to sequence genomic arrays.</p></div><div class="track-section bio"><h4>🧬 3. Neural Architecture</h4><p>Information must flow efficiently like a biological synapse. Optimize your code.</p></div><div class="track-section lab"><h4>🧪 4. God-Mode Lab</h4><p><strong>Mission:</strong> Locate the critical node anomaly to restore integrity.</p></div></div>`,
        task: {
            type: 'find-value',
            targetColumn: 'anomaly',
            condition: (val) => val === 'True',
            successMessage: "System Override Successful. Node unlocked. +100 XP.",
            errorMessage: "Find the True anomaly flag."
        },
        data: [
          {
                    "key": "Patient_XYZ",
                    "vitals": "Stable",
                    "heart_rate": "72",
                    "anomaly": "False"
          },
          {
                    "key": "Patient_ABC",
                    "vitals": "Unstable",
                    "heart_rate": "145",
                    "anomaly": "True"
          },
          {
                    "key": "Patient_LMN",
                    "vitals": "Stable",
                    "heart_rate": "65",
                    "anomaly": "False"
          },
          {
                    "key": "Patient_QRS",
                    "vitals": "Stable",
                    "heart_rate": "80",
                    "anomaly": "False"
          }
]
    },
    {
        id: 'lesson-w17-d3',
        title: 'PowerBI: Intro - Part 3',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/rpkpK_n2ad0?si=premium_mode',
        sources: [
            { title: 'Official Documentation', url: 'https://developer.mozilla.org/' },
            { title: 'Architect Archives', url: '#' }
        ],
        story: `<div class="quad-track"><div class="track-section tech"><h4>💻 1. Algorithmic Processing</h4><p>This module focuses on high-speed data parsing. Time Complexity (Big O) prevents server timeouts.</p></div><div class="track-section health"><h4>🏥 2. Clinical Data Streams</h4><p>Hospitals generate terabytes of telemetry hourly. Structuring this raw byte data is critical.</p></div><div class="track-section bio"><h4>🧬 3. Evolutionary Algorithms</h4><p>Algorithms evolve through mutation and selection. Structure ML pipelines to adapt dynamically.</p></div><div class="track-section lab"><h4>🧪 4. God-Mode Lab</h4><p><strong>Mission:</strong> The pipeline has stalled. Isolate the errant data frame.</p></div></div>`,
        task: {
            type: 'find-value',
            targetColumn: 'status',
            condition: (val) => val === 'CRITICAL',
            successMessage: "System Override Successful. Node unlocked. +100 XP.",
            errorMessage: "Locate the CRITICAL status node."
        },
        data: [
          {
                    "id": 1227,
                    "value": "Alpha_Node",
                    "metric": "0.45",
                    "status": "Active"
          },
          {
                    "id": 3044,
                    "value": "Beta_Node",
                    "metric": "0.89",
                    "status": "Active"
          },
          {
                    "id": 1105,
                    "value": "Omega_Node",
                    "metric": "0.01",
                    "status": "CRITICAL"
          },
          {
                    "id": 4044,
                    "value": "Zeta_Node",
                    "metric": "1.00",
                    "status": "Active"
          }
]
    },
    {
        id: 'lesson-w17-d4',
        title: 'PowerBI: Intro - Part 4',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/HcqpanDadyQ?si=premium_mode',
        sources: [
            { title: 'Official Documentation', url: 'https://developer.mozilla.org/' },
            { title: 'Architect Archives', url: '#' }
        ],
        story: `<div class="quad-track"><div class="track-section tech"><h4>💻 1. Core Mechanics</h4><p>Mastering this concept requires understanding the underlying synthetic logic. In enterprise computing, this is the foundational bedrock.</p></div><div class="track-section health"><h4>🏥 2. Bio-Systems</h4><p>Data science in healthcare relies on absolute precision. We apply this logic to sequence genomic arrays.</p></div><div class="track-section bio"><h4>🧬 3. Neural Architecture</h4><p>Information must flow efficiently like a biological synapse. Optimize your code.</p></div><div class="track-section lab"><h4>🧪 4. God-Mode Lab</h4><p><strong>Mission:</strong> Locate the critical node anomaly to restore integrity.</p></div></div>`,
        task: {
            type: 'find-value',
            targetColumn: 'status',
            condition: (val) => val === 'CRITICAL',
            successMessage: "System Override Successful. Node unlocked. +100 XP.",
            errorMessage: "Locate the CRITICAL status node."
        },
        data: [
          {
                    "id": 7583,
                    "value": "Alpha_Node",
                    "metric": "0.45",
                    "status": "Active"
          },
          {
                    "id": 3850,
                    "value": "Beta_Node",
                    "metric": "0.89",
                    "status": "Active"
          },
          {
                    "id": 1669,
                    "value": "Omega_Node",
                    "metric": "0.01",
                    "status": "CRITICAL"
          },
          {
                    "id": 5892,
                    "value": "Zeta_Node",
                    "metric": "1.00",
                    "status": "Active"
          }
]
    },
    {
        id: 'lesson-w17-d5',
        title: 'PowerBI: Intro - Part 5',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/zOjov-2OZ0E?si=premium_mode',
        sources: [
            { title: 'Official Documentation', url: 'https://developer.mozilla.org/' },
            { title: 'Architect Archives', url: '#' }
        ],
        story: `<div class="quad-track"><div class="track-section tech"><h4>💻 1. Algorithmic Processing</h4><p>This module focuses on high-speed data parsing. Time Complexity (Big O) prevents server timeouts.</p></div><div class="track-section health"><h4>🏥 2. Clinical Data Streams</h4><p>Hospitals generate terabytes of telemetry hourly. Structuring this raw byte data is critical.</p></div><div class="track-section bio"><h4>🧬 3. Evolutionary Algorithms</h4><p>Algorithms evolve through mutation and selection. Structure ML pipelines to adapt dynamically.</p></div><div class="track-section lab"><h4>🧪 4. God-Mode Lab</h4><p><strong>Mission:</strong> The pipeline has stalled. Isolate the errant data frame.</p></div></div>`,
        task: {
            type: 'find-value',
            targetColumn: 'status',
            condition: (val) => val === 'CRITICAL',
            successMessage: "System Override Successful. Node unlocked. +100 XP.",
            errorMessage: "Locate the CRITICAL status node."
        },
        data: [
          {
                    "id": 1195,
                    "value": "Alpha_Node",
                    "metric": "0.45",
                    "status": "Active"
          },
          {
                    "id": 9412,
                    "value": "Beta_Node",
                    "metric": "0.89",
                    "status": "Active"
          },
          {
                    "id": 8780,
                    "value": "Omega_Node",
                    "metric": "0.01",
                    "status": "CRITICAL"
          },
          {
                    "id": 9172,
                    "value": "Zeta_Node",
                    "metric": "1.00",
                    "status": "Active"
          }
]
    },
    {
        id: 'lesson-w17-d6',
        title: 'PowerBI: Intro - Part 6',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/rpkpK_n2ad0?si=premium_mode',
        sources: [
            { title: 'Official Documentation', url: 'https://developer.mozilla.org/' },
            { title: 'Architect Archives', url: '#' }
        ],
        story: `<div class="quad-track"><div class="track-section tech"><h4>💻 1. Algorithmic Processing</h4><p>This module focuses on high-speed data parsing. Time Complexity (Big O) prevents server timeouts.</p></div><div class="track-section health"><h4>🏥 2. Clinical Data Streams</h4><p>Hospitals generate terabytes of telemetry hourly. Structuring this raw byte data is critical.</p></div><div class="track-section bio"><h4>🧬 3. Evolutionary Algorithms</h4><p>Algorithms evolve through mutation and selection. Structure ML pipelines to adapt dynamically.</p></div><div class="track-section lab"><h4>🧪 4. God-Mode Lab</h4><p><strong>Mission:</strong> The pipeline has stalled. Isolate the errant data frame.</p></div></div>`,
        task: {
            type: 'find-value',
            targetColumn: 'anomaly',
            condition: (val) => val === 'True',
            successMessage: "System Override Successful. Node unlocked. +100 XP.",
            errorMessage: "Find the True anomaly flag."
        },
        data: [
          {
                    "key": "Patient_XYZ",
                    "vitals": "Stable",
                    "heart_rate": "72",
                    "anomaly": "False"
          },
          {
                    "key": "Patient_ABC",
                    "vitals": "Unstable",
                    "heart_rate": "145",
                    "anomaly": "True"
          },
          {
                    "key": "Patient_LMN",
                    "vitals": "Stable",
                    "heart_rate": "65",
                    "anomaly": "False"
          },
          {
                    "key": "Patient_QRS",
                    "vitals": "Stable",
                    "heart_rate": "80",
                    "anomaly": "False"
          }
]
    },
    {
        id: 'lesson-w17-d7',
        title: 'Weekly Concept Review',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/zOjov-2OZ0E?si=premium_mode',
        sources: [
            { title: 'Official Documentation', url: 'https://developer.mozilla.org/' },
            { title: 'Architect Archives', url: '#' }
        ],
        story: `<div class="quad-track"><div class="track-section tech"><h4>💻 1. Core Mechanics</h4><p>Mastering this concept requires understanding the underlying synthetic logic. In enterprise computing, this is the foundational bedrock.</p></div><div class="track-section health"><h4>🏥 2. Bio-Systems</h4><p>Data science in healthcare relies on absolute precision. We apply this logic to sequence genomic arrays.</p></div><div class="track-section bio"><h4>🧬 3. Neural Architecture</h4><p>Information must flow efficiently like a biological synapse. Optimize your code.</p></div><div class="track-section lab"><h4>🧪 4. God-Mode Lab</h4><p><strong>Mission:</strong> Locate the critical node anomaly to restore integrity.</p></div></div>`,
        task: {
            type: 'find-value',
            targetColumn: 'status',
            condition: (val) => val === 'CRITICAL',
            successMessage: "System Override Successful. Node unlocked. +100 XP.",
            errorMessage: "Locate the CRITICAL status node."
        },
        data: [
          {
                    "id": 5702,
                    "value": "Alpha_Node",
                    "metric": "0.45",
                    "status": "Active"
          },
          {
                    "id": 5111,
                    "value": "Beta_Node",
                    "metric": "0.89",
                    "status": "Active"
          },
          {
                    "id": 9436,
                    "value": "Omega_Node",
                    "metric": "0.01",
                    "status": "CRITICAL"
          },
          {
                    "id": 3794,
                    "value": "Zeta_Node",
                    "metric": "1.00",
                    "status": "Active"
          }
]
    },
    {
        id: 'lesson-w18-d1',
        title: 'PowerBI: DAX - Part 1',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/aircAruvnKk?si=premium_mode',
        sources: [
            { title: 'Official Documentation', url: 'https://developer.mozilla.org/' },
            { title: 'Architect Archives', url: '#' }
        ],
        story: `<div class="quad-track"><div class="track-section tech"><h4>💻 1. Algorithmic Processing</h4><p>This module focuses on high-speed data parsing. Time Complexity (Big O) prevents server timeouts.</p></div><div class="track-section health"><h4>🏥 2. Clinical Data Streams</h4><p>Hospitals generate terabytes of telemetry hourly. Structuring this raw byte data is critical.</p></div><div class="track-section bio"><h4>🧬 3. Evolutionary Algorithms</h4><p>Algorithms evolve through mutation and selection. Structure ML pipelines to adapt dynamically.</p></div><div class="track-section lab"><h4>🧪 4. God-Mode Lab</h4><p><strong>Mission:</strong> The pipeline has stalled. Isolate the errant data frame.</p></div></div>`,
        task: {
            type: 'find-value',
            targetColumn: 'status',
            condition: (val) => val === 'CRITICAL',
            successMessage: "System Override Successful. Node unlocked. +100 XP.",
            errorMessage: "Locate the CRITICAL status node."
        },
        data: [
          {
                    "id": 6825,
                    "value": "Alpha_Node",
                    "metric": "0.45",
                    "status": "Active"
          },
          {
                    "id": 4303,
                    "value": "Beta_Node",
                    "metric": "0.89",
                    "status": "Active"
          },
          {
                    "id": 6001,
                    "value": "Omega_Node",
                    "metric": "0.01",
                    "status": "CRITICAL"
          },
          {
                    "id": 7267,
                    "value": "Zeta_Node",
                    "metric": "1.00",
                    "status": "Active"
          }
]
    },
    {
        id: 'lesson-w18-d2',
        title: 'PowerBI: DAX - Part 2',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/zOjov-2OZ0E?si=premium_mode',
        sources: [
            { title: 'Official Documentation', url: 'https://developer.mozilla.org/' },
            { title: 'Architect Archives', url: '#' }
        ],
        story: `<div class="quad-track"><div class="track-section tech"><h4>💻 1. Core Mechanics</h4><p>Mastering this concept requires understanding the underlying synthetic logic. In enterprise computing, this is the foundational bedrock.</p></div><div class="track-section health"><h4>🏥 2. Bio-Systems</h4><p>Data science in healthcare relies on absolute precision. We apply this logic to sequence genomic arrays.</p></div><div class="track-section bio"><h4>🧬 3. Neural Architecture</h4><p>Information must flow efficiently like a biological synapse. Optimize your code.</p></div><div class="track-section lab"><h4>🧪 4. God-Mode Lab</h4><p><strong>Mission:</strong> Locate the critical node anomaly to restore integrity.</p></div></div>`,
        task: {
            type: 'find-value',
            targetColumn: 'status',
            condition: (val) => val === 'CRITICAL',
            successMessage: "System Override Successful. Node unlocked. +100 XP.",
            errorMessage: "Locate the CRITICAL status node."
        },
        data: [
          {
                    "id": 6101,
                    "value": "Alpha_Node",
                    "metric": "0.45",
                    "status": "Active"
          },
          {
                    "id": 2704,
                    "value": "Beta_Node",
                    "metric": "0.89",
                    "status": "Active"
          },
          {
                    "id": 6593,
                    "value": "Omega_Node",
                    "metric": "0.01",
                    "status": "CRITICAL"
          },
          {
                    "id": 3445,
                    "value": "Zeta_Node",
                    "metric": "1.00",
                    "status": "Active"
          }
]
    },
    {
        id: 'lesson-w18-d3',
        title: 'PowerBI: DAX - Part 3',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/zOjov-2OZ0E?si=premium_mode',
        sources: [
            { title: 'Official Documentation', url: 'https://developer.mozilla.org/' },
            { title: 'Architect Archives', url: '#' }
        ],
        story: `<div class="quad-track"><div class="track-section tech"><h4>💻 1. Algorithmic Processing</h4><p>This module focuses on high-speed data parsing. Time Complexity (Big O) prevents server timeouts.</p></div><div class="track-section health"><h4>🏥 2. Clinical Data Streams</h4><p>Hospitals generate terabytes of telemetry hourly. Structuring this raw byte data is critical.</p></div><div class="track-section bio"><h4>🧬 3. Evolutionary Algorithms</h4><p>Algorithms evolve through mutation and selection. Structure ML pipelines to adapt dynamically.</p></div><div class="track-section lab"><h4>🧪 4. God-Mode Lab</h4><p><strong>Mission:</strong> The pipeline has stalled. Isolate the errant data frame.</p></div></div>`,
        task: {
            type: 'find-value',
            targetColumn: 'anomaly',
            condition: (val) => val === 'True',
            successMessage: "System Override Successful. Node unlocked. +100 XP.",
            errorMessage: "Find the True anomaly flag."
        },
        data: [
          {
                    "key": "Patient_XYZ",
                    "vitals": "Stable",
                    "heart_rate": "72",
                    "anomaly": "False"
          },
          {
                    "key": "Patient_ABC",
                    "vitals": "Unstable",
                    "heart_rate": "145",
                    "anomaly": "True"
          },
          {
                    "key": "Patient_LMN",
                    "vitals": "Stable",
                    "heart_rate": "65",
                    "anomaly": "False"
          },
          {
                    "key": "Patient_QRS",
                    "vitals": "Stable",
                    "heart_rate": "80",
                    "anomaly": "False"
          }
]
    },
    {
        id: 'lesson-w18-d4',
        title: 'PowerBI: DAX - Part 4',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/zOjov-2OZ0E?si=premium_mode',
        sources: [
            { title: 'Official Documentation', url: 'https://developer.mozilla.org/' },
            { title: 'Architect Archives', url: '#' }
        ],
        story: `<div class="quad-track"><div class="track-section tech"><h4>💻 1. Core Mechanics</h4><p>Mastering this concept requires understanding the underlying synthetic logic. In enterprise computing, this is the foundational bedrock.</p></div><div class="track-section health"><h4>🏥 2. Bio-Systems</h4><p>Data science in healthcare relies on absolute precision. We apply this logic to sequence genomic arrays.</p></div><div class="track-section bio"><h4>🧬 3. Neural Architecture</h4><p>Information must flow efficiently like a biological synapse. Optimize your code.</p></div><div class="track-section lab"><h4>🧪 4. God-Mode Lab</h4><p><strong>Mission:</strong> Locate the critical node anomaly to restore integrity.</p></div></div>`,
        task: {
            type: 'find-value',
            targetColumn: 'status',
            condition: (val) => val === 'CRITICAL',
            successMessage: "System Override Successful. Node unlocked. +100 XP.",
            errorMessage: "Locate the CRITICAL status node."
        },
        data: [
          {
                    "id": 7885,
                    "value": "Alpha_Node",
                    "metric": "0.45",
                    "status": "Active"
          },
          {
                    "id": 5296,
                    "value": "Beta_Node",
                    "metric": "0.89",
                    "status": "Active"
          },
          {
                    "id": 1160,
                    "value": "Omega_Node",
                    "metric": "0.01",
                    "status": "CRITICAL"
          },
          {
                    "id": 7950,
                    "value": "Zeta_Node",
                    "metric": "1.00",
                    "status": "Active"
          }
]
    },
    {
        id: 'lesson-w18-d5',
        title: 'PowerBI: DAX - Part 5',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/zOjov-2OZ0E?si=premium_mode',
        sources: [
            { title: 'Official Documentation', url: 'https://developer.mozilla.org/' },
            { title: 'Architect Archives', url: '#' }
        ],
        story: `<div class="quad-track"><div class="track-section tech"><h4>💻 1. Algorithmic Processing</h4><p>This module focuses on high-speed data parsing. Time Complexity (Big O) prevents server timeouts.</p></div><div class="track-section health"><h4>🏥 2. Clinical Data Streams</h4><p>Hospitals generate terabytes of telemetry hourly. Structuring this raw byte data is critical.</p></div><div class="track-section bio"><h4>🧬 3. Evolutionary Algorithms</h4><p>Algorithms evolve through mutation and selection. Structure ML pipelines to adapt dynamically.</p></div><div class="track-section lab"><h4>🧪 4. God-Mode Lab</h4><p><strong>Mission:</strong> The pipeline has stalled. Isolate the errant data frame.</p></div></div>`,
        task: {
            type: 'find-value',
            targetColumn: 'status',
            condition: (val) => val === 'CRITICAL',
            successMessage: "System Override Successful. Node unlocked. +100 XP.",
            errorMessage: "Locate the CRITICAL status node."
        },
        data: [
          {
                    "id": 1211,
                    "value": "Alpha_Node",
                    "metric": "0.45",
                    "status": "Active"
          },
          {
                    "id": 8595,
                    "value": "Beta_Node",
                    "metric": "0.89",
                    "status": "Active"
          },
          {
                    "id": 6439,
                    "value": "Omega_Node",
                    "metric": "0.01",
                    "status": "CRITICAL"
          },
          {
                    "id": 4291,
                    "value": "Zeta_Node",
                    "metric": "1.00",
                    "status": "Active"
          }
]
    },
    {
        id: 'lesson-w18-d6',
        title: 'PowerBI: DAX - Part 6',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/rpkpK_n2ad0?si=premium_mode',
        sources: [
            { title: 'Official Documentation', url: 'https://developer.mozilla.org/' },
            { title: 'Architect Archives', url: '#' }
        ],
        story: `<div class="quad-track"><div class="track-section tech"><h4>💻 1. Core Mechanics</h4><p>Mastering this concept requires understanding the underlying synthetic logic. In enterprise computing, this is the foundational bedrock.</p></div><div class="track-section health"><h4>🏥 2. Bio-Systems</h4><p>Data science in healthcare relies on absolute precision. We apply this logic to sequence genomic arrays.</p></div><div class="track-section bio"><h4>🧬 3. Neural Architecture</h4><p>Information must flow efficiently like a biological synapse. Optimize your code.</p></div><div class="track-section lab"><h4>🧪 4. God-Mode Lab</h4><p><strong>Mission:</strong> Locate the critical node anomaly to restore integrity.</p></div></div>`,
        task: {
            type: 'find-value',
            targetColumn: 'anomaly',
            condition: (val) => val === 'True',
            successMessage: "System Override Successful. Node unlocked. +100 XP.",
            errorMessage: "Find the True anomaly flag."
        },
        data: [
          {
                    "key": "Patient_XYZ",
                    "vitals": "Stable",
                    "heart_rate": "72",
                    "anomaly": "False"
          },
          {
                    "key": "Patient_ABC",
                    "vitals": "Unstable",
                    "heart_rate": "145",
                    "anomaly": "True"
          },
          {
                    "key": "Patient_LMN",
                    "vitals": "Stable",
                    "heart_rate": "65",
                    "anomaly": "False"
          },
          {
                    "key": "Patient_QRS",
                    "vitals": "Stable",
                    "heart_rate": "80",
                    "anomaly": "False"
          }
]
    },
    {
        id: 'lesson-w18-d7',
        title: 'Weekly Concept Review',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/aircAruvnKk?si=premium_mode',
        sources: [
            { title: 'Official Documentation', url: 'https://developer.mozilla.org/' },
            { title: 'Architect Archives', url: '#' }
        ],
        story: `<div class="quad-track"><div class="track-section tech"><h4>💻 1. Core Mechanics</h4><p>Mastering this concept requires understanding the underlying synthetic logic. In enterprise computing, this is the foundational bedrock.</p></div><div class="track-section health"><h4>🏥 2. Bio-Systems</h4><p>Data science in healthcare relies on absolute precision. We apply this logic to sequence genomic arrays.</p></div><div class="track-section bio"><h4>🧬 3. Neural Architecture</h4><p>Information must flow efficiently like a biological synapse. Optimize your code.</p></div><div class="track-section lab"><h4>🧪 4. God-Mode Lab</h4><p><strong>Mission:</strong> Locate the critical node anomaly to restore integrity.</p></div></div>`,
        task: {
            type: 'find-value',
            targetColumn: 'anomaly',
            condition: (val) => val === 'True',
            successMessage: "System Override Successful. Node unlocked. +100 XP.",
            errorMessage: "Find the True anomaly flag."
        },
        data: [
          {
                    "key": "Patient_XYZ",
                    "vitals": "Stable",
                    "heart_rate": "72",
                    "anomaly": "False"
          },
          {
                    "key": "Patient_ABC",
                    "vitals": "Unstable",
                    "heart_rate": "145",
                    "anomaly": "True"
          },
          {
                    "key": "Patient_LMN",
                    "vitals": "Stable",
                    "heart_rate": "65",
                    "anomaly": "False"
          },
          {
                    "key": "Patient_QRS",
                    "vitals": "Stable",
                    "heart_rate": "80",
                    "anomaly": "False"
          }
]
    },
    {
        id: 'lesson-w19-d1',
        title: 'PowerBI: Dashboards - Part 1',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/zOjov-2OZ0E?si=premium_mode',
        sources: [
            { title: 'Official Documentation', url: 'https://developer.mozilla.org/' },
            { title: 'Architect Archives', url: '#' }
        ],
        story: `<div class="quad-track"><div class="track-section tech"><h4>💻 1. Core Mechanics</h4><p>Mastering this concept requires understanding the underlying synthetic logic. In enterprise computing, this is the foundational bedrock.</p></div><div class="track-section health"><h4>🏥 2. Bio-Systems</h4><p>Data science in healthcare relies on absolute precision. We apply this logic to sequence genomic arrays.</p></div><div class="track-section bio"><h4>🧬 3. Neural Architecture</h4><p>Information must flow efficiently like a biological synapse. Optimize your code.</p></div><div class="track-section lab"><h4>🧪 4. God-Mode Lab</h4><p><strong>Mission:</strong> Locate the critical node anomaly to restore integrity.</p></div></div>`,
        task: {
            type: 'find-value',
            targetColumn: 'status',
            condition: (val) => val === 'CRITICAL',
            successMessage: "System Override Successful. Node unlocked. +100 XP.",
            errorMessage: "Locate the CRITICAL status node."
        },
        data: [
          {
                    "id": 7306,
                    "value": "Alpha_Node",
                    "metric": "0.45",
                    "status": "Active"
          },
          {
                    "id": 6720,
                    "value": "Beta_Node",
                    "metric": "0.89",
                    "status": "Active"
          },
          {
                    "id": 2167,
                    "value": "Omega_Node",
                    "metric": "0.01",
                    "status": "CRITICAL"
          },
          {
                    "id": 6020,
                    "value": "Zeta_Node",
                    "metric": "1.00",
                    "status": "Active"
          }
]
    },
    {
        id: 'lesson-w19-d2',
        title: 'PowerBI: Dashboards - Part 2',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/aircAruvnKk?si=premium_mode',
        sources: [
            { title: 'Official Documentation', url: 'https://developer.mozilla.org/' },
            { title: 'Architect Archives', url: '#' }
        ],
        story: `<div class="quad-track"><div class="track-section tech"><h4>💻 1. Core Mechanics</h4><p>Mastering this concept requires understanding the underlying synthetic logic. In enterprise computing, this is the foundational bedrock.</p></div><div class="track-section health"><h4>🏥 2. Bio-Systems</h4><p>Data science in healthcare relies on absolute precision. We apply this logic to sequence genomic arrays.</p></div><div class="track-section bio"><h4>🧬 3. Neural Architecture</h4><p>Information must flow efficiently like a biological synapse. Optimize your code.</p></div><div class="track-section lab"><h4>🧪 4. God-Mode Lab</h4><p><strong>Mission:</strong> Locate the critical node anomaly to restore integrity.</p></div></div>`,
        task: {
            type: 'find-value',
            targetColumn: 'status',
            condition: (val) => val === 'CRITICAL',
            successMessage: "System Override Successful. Node unlocked. +100 XP.",
            errorMessage: "Locate the CRITICAL status node."
        },
        data: [
          {
                    "id": 2400,
                    "value": "Alpha_Node",
                    "metric": "0.45",
                    "status": "Active"
          },
          {
                    "id": 1453,
                    "value": "Beta_Node",
                    "metric": "0.89",
                    "status": "Active"
          },
          {
                    "id": 4279,
                    "value": "Omega_Node",
                    "metric": "0.01",
                    "status": "CRITICAL"
          },
          {
                    "id": 1420,
                    "value": "Zeta_Node",
                    "metric": "1.00",
                    "status": "Active"
          }
]
    },
    {
        id: 'lesson-w19-d3',
        title: 'PowerBI: Dashboards - Part 3',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/HcqpanDadyQ?si=premium_mode',
        sources: [
            { title: 'Official Documentation', url: 'https://developer.mozilla.org/' },
            { title: 'Architect Archives', url: '#' }
        ],
        story: `<div class="quad-track"><div class="track-section tech"><h4>💻 1. Core Mechanics</h4><p>Mastering this concept requires understanding the underlying synthetic logic. In enterprise computing, this is the foundational bedrock.</p></div><div class="track-section health"><h4>🏥 2. Bio-Systems</h4><p>Data science in healthcare relies on absolute precision. We apply this logic to sequence genomic arrays.</p></div><div class="track-section bio"><h4>🧬 3. Neural Architecture</h4><p>Information must flow efficiently like a biological synapse. Optimize your code.</p></div><div class="track-section lab"><h4>🧪 4. God-Mode Lab</h4><p><strong>Mission:</strong> Locate the critical node anomaly to restore integrity.</p></div></div>`,
        task: {
            type: 'find-value',
            targetColumn: 'status',
            condition: (val) => val === 'CRITICAL',
            successMessage: "System Override Successful. Node unlocked. +100 XP.",
            errorMessage: "Locate the CRITICAL status node."
        },
        data: [
          {
                    "id": 8742,
                    "value": "Alpha_Node",
                    "metric": "0.45",
                    "status": "Active"
          },
          {
                    "id": 3167,
                    "value": "Beta_Node",
                    "metric": "0.89",
                    "status": "Active"
          },
          {
                    "id": 8329,
                    "value": "Omega_Node",
                    "metric": "0.01",
                    "status": "CRITICAL"
          },
          {
                    "id": 4273,
                    "value": "Zeta_Node",
                    "metric": "1.00",
                    "status": "Active"
          }
]
    },
    {
        id: 'lesson-w19-d4',
        title: 'PowerBI: Dashboards - Part 4',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/zOjov-2OZ0E?si=premium_mode',
        sources: [
            { title: 'Official Documentation', url: 'https://developer.mozilla.org/' },
            { title: 'Architect Archives', url: '#' }
        ],
        story: `<div class="quad-track"><div class="track-section tech"><h4>💻 1. Algorithmic Processing</h4><p>This module focuses on high-speed data parsing. Time Complexity (Big O) prevents server timeouts.</p></div><div class="track-section health"><h4>🏥 2. Clinical Data Streams</h4><p>Hospitals generate terabytes of telemetry hourly. Structuring this raw byte data is critical.</p></div><div class="track-section bio"><h4>🧬 3. Evolutionary Algorithms</h4><p>Algorithms evolve through mutation and selection. Structure ML pipelines to adapt dynamically.</p></div><div class="track-section lab"><h4>🧪 4. God-Mode Lab</h4><p><strong>Mission:</strong> The pipeline has stalled. Isolate the errant data frame.</p></div></div>`,
        task: {
            type: 'find-value',
            targetColumn: 'anomaly',
            condition: (val) => val === 'True',
            successMessage: "System Override Successful. Node unlocked. +100 XP.",
            errorMessage: "Find the True anomaly flag."
        },
        data: [
          {
                    "key": "Patient_XYZ",
                    "vitals": "Stable",
                    "heart_rate": "72",
                    "anomaly": "False"
          },
          {
                    "key": "Patient_ABC",
                    "vitals": "Unstable",
                    "heart_rate": "145",
                    "anomaly": "True"
          },
          {
                    "key": "Patient_LMN",
                    "vitals": "Stable",
                    "heart_rate": "65",
                    "anomaly": "False"
          },
          {
                    "key": "Patient_QRS",
                    "vitals": "Stable",
                    "heart_rate": "80",
                    "anomaly": "False"
          }
]
    },
    {
        id: 'lesson-w19-d5',
        title: 'PowerBI: Dashboards - Part 5',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/rpkpK_n2ad0?si=premium_mode',
        sources: [
            { title: 'Official Documentation', url: 'https://developer.mozilla.org/' },
            { title: 'Architect Archives', url: '#' }
        ],
        story: `<div class="quad-track"><div class="track-section tech"><h4>💻 1. Core Mechanics</h4><p>Mastering this concept requires understanding the underlying synthetic logic. In enterprise computing, this is the foundational bedrock.</p></div><div class="track-section health"><h4>🏥 2. Bio-Systems</h4><p>Data science in healthcare relies on absolute precision. We apply this logic to sequence genomic arrays.</p></div><div class="track-section bio"><h4>🧬 3. Neural Architecture</h4><p>Information must flow efficiently like a biological synapse. Optimize your code.</p></div><div class="track-section lab"><h4>🧪 4. God-Mode Lab</h4><p><strong>Mission:</strong> Locate the critical node anomaly to restore integrity.</p></div></div>`,
        task: {
            type: 'find-value',
            targetColumn: 'anomaly',
            condition: (val) => val === 'True',
            successMessage: "System Override Successful. Node unlocked. +100 XP.",
            errorMessage: "Find the True anomaly flag."
        },
        data: [
          {
                    "key": "Patient_XYZ",
                    "vitals": "Stable",
                    "heart_rate": "72",
                    "anomaly": "False"
          },
          {
                    "key": "Patient_ABC",
                    "vitals": "Unstable",
                    "heart_rate": "145",
                    "anomaly": "True"
          },
          {
                    "key": "Patient_LMN",
                    "vitals": "Stable",
                    "heart_rate": "65",
                    "anomaly": "False"
          },
          {
                    "key": "Patient_QRS",
                    "vitals": "Stable",
                    "heart_rate": "80",
                    "anomaly": "False"
          }
]
    },
    {
        id: 'lesson-w19-d6',
        title: 'PowerBI: Dashboards - Part 6',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/rpkpK_n2ad0?si=premium_mode',
        sources: [
            { title: 'Official Documentation', url: 'https://developer.mozilla.org/' },
            { title: 'Architect Archives', url: '#' }
        ],
        story: `<div class="quad-track"><div class="track-section tech"><h4>💻 1. Core Mechanics</h4><p>Mastering this concept requires understanding the underlying synthetic logic. In enterprise computing, this is the foundational bedrock.</p></div><div class="track-section health"><h4>🏥 2. Bio-Systems</h4><p>Data science in healthcare relies on absolute precision. We apply this logic to sequence genomic arrays.</p></div><div class="track-section bio"><h4>🧬 3. Neural Architecture</h4><p>Information must flow efficiently like a biological synapse. Optimize your code.</p></div><div class="track-section lab"><h4>🧪 4. God-Mode Lab</h4><p><strong>Mission:</strong> Locate the critical node anomaly to restore integrity.</p></div></div>`,
        task: {
            type: 'find-value',
            targetColumn: 'status',
            condition: (val) => val === 'CRITICAL',
            successMessage: "System Override Successful. Node unlocked. +100 XP.",
            errorMessage: "Locate the CRITICAL status node."
        },
        data: [
          {
                    "id": 6090,
                    "value": "Alpha_Node",
                    "metric": "0.45",
                    "status": "Active"
          },
          {
                    "id": 6803,
                    "value": "Beta_Node",
                    "metric": "0.89",
                    "status": "Active"
          },
          {
                    "id": 8170,
                    "value": "Omega_Node",
                    "metric": "0.01",
                    "status": "CRITICAL"
          },
          {
                    "id": 6146,
                    "value": "Zeta_Node",
                    "metric": "1.00",
                    "status": "Active"
          }
]
    },
    {
        id: 'lesson-w19-d7',
        title: 'Weekly Concept Review',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/rpkpK_n2ad0?si=premium_mode',
        sources: [
            { title: 'Official Documentation', url: 'https://developer.mozilla.org/' },
            { title: 'Architect Archives', url: '#' }
        ],
        story: `<div class="quad-track"><div class="track-section tech"><h4>💻 1. Core Mechanics</h4><p>Mastering this concept requires understanding the underlying synthetic logic. In enterprise computing, this is the foundational bedrock.</p></div><div class="track-section health"><h4>🏥 2. Bio-Systems</h4><p>Data science in healthcare relies on absolute precision. We apply this logic to sequence genomic arrays.</p></div><div class="track-section bio"><h4>🧬 3. Neural Architecture</h4><p>Information must flow efficiently like a biological synapse. Optimize your code.</p></div><div class="track-section lab"><h4>🧪 4. God-Mode Lab</h4><p><strong>Mission:</strong> Locate the critical node anomaly to restore integrity.</p></div></div>`,
        task: {
            type: 'find-value',
            targetColumn: 'anomaly',
            condition: (val) => val === 'True',
            successMessage: "System Override Successful. Node unlocked. +100 XP.",
            errorMessage: "Find the True anomaly flag."
        },
        data: [
          {
                    "key": "Patient_XYZ",
                    "vitals": "Stable",
                    "heart_rate": "72",
                    "anomaly": "False"
          },
          {
                    "key": "Patient_ABC",
                    "vitals": "Unstable",
                    "heart_rate": "145",
                    "anomaly": "True"
          },
          {
                    "key": "Patient_LMN",
                    "vitals": "Stable",
                    "heart_rate": "65",
                    "anomaly": "False"
          },
          {
                    "key": "Patient_QRS",
                    "vitals": "Stable",
                    "heart_rate": "80",
                    "anomaly": "False"
          }
]
    },
    {
        id: 'lesson-w20-d1',
        title: 'Phase 2 Capstone Project - Part 1',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/zOjov-2OZ0E?si=premium_mode',
        sources: [
            { title: 'Official Documentation', url: 'https://developer.mozilla.org/' },
            { title: 'Architect Archives', url: '#' }
        ],
        story: `<div class="quad-track"><div class="track-section tech"><h4>💻 1. Core Mechanics</h4><p>Mastering this concept requires understanding the underlying synthetic logic. In enterprise computing, this is the foundational bedrock.</p></div><div class="track-section health"><h4>🏥 2. Bio-Systems</h4><p>Data science in healthcare relies on absolute precision. We apply this logic to sequence genomic arrays.</p></div><div class="track-section bio"><h4>🧬 3. Neural Architecture</h4><p>Information must flow efficiently like a biological synapse. Optimize your code.</p></div><div class="track-section lab"><h4>🧪 4. God-Mode Lab</h4><p><strong>Mission:</strong> Locate the critical node anomaly to restore integrity.</p></div></div>`,
        task: {
            type: 'find-value',
            targetColumn: 'anomaly',
            condition: (val) => val === 'True',
            successMessage: "System Override Successful. Node unlocked. +100 XP.",
            errorMessage: "Find the True anomaly flag."
        },
        data: [
          {
                    "key": "Patient_XYZ",
                    "vitals": "Stable",
                    "heart_rate": "72",
                    "anomaly": "False"
          },
          {
                    "key": "Patient_ABC",
                    "vitals": "Unstable",
                    "heart_rate": "145",
                    "anomaly": "True"
          },
          {
                    "key": "Patient_LMN",
                    "vitals": "Stable",
                    "heart_rate": "65",
                    "anomaly": "False"
          },
          {
                    "key": "Patient_QRS",
                    "vitals": "Stable",
                    "heart_rate": "80",
                    "anomaly": "False"
          }
]
    },
    {
        id: 'lesson-w20-d2',
        title: 'Phase 2 Capstone Project - Part 2',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/rpkpK_n2ad0?si=premium_mode',
        sources: [
            { title: 'Official Documentation', url: 'https://developer.mozilla.org/' },
            { title: 'Architect Archives', url: '#' }
        ],
        story: `<div class="quad-track"><div class="track-section tech"><h4>💻 1. Algorithmic Processing</h4><p>This module focuses on high-speed data parsing. Time Complexity (Big O) prevents server timeouts.</p></div><div class="track-section health"><h4>🏥 2. Clinical Data Streams</h4><p>Hospitals generate terabytes of telemetry hourly. Structuring this raw byte data is critical.</p></div><div class="track-section bio"><h4>🧬 3. Evolutionary Algorithms</h4><p>Algorithms evolve through mutation and selection. Structure ML pipelines to adapt dynamically.</p></div><div class="track-section lab"><h4>🧪 4. God-Mode Lab</h4><p><strong>Mission:</strong> The pipeline has stalled. Isolate the errant data frame.</p></div></div>`,
        task: {
            type: 'find-value',
            targetColumn: 'anomaly',
            condition: (val) => val === 'True',
            successMessage: "System Override Successful. Node unlocked. +100 XP.",
            errorMessage: "Find the True anomaly flag."
        },
        data: [
          {
                    "key": "Patient_XYZ",
                    "vitals": "Stable",
                    "heart_rate": "72",
                    "anomaly": "False"
          },
          {
                    "key": "Patient_ABC",
                    "vitals": "Unstable",
                    "heart_rate": "145",
                    "anomaly": "True"
          },
          {
                    "key": "Patient_LMN",
                    "vitals": "Stable",
                    "heart_rate": "65",
                    "anomaly": "False"
          },
          {
                    "key": "Patient_QRS",
                    "vitals": "Stable",
                    "heart_rate": "80",
                    "anomaly": "False"
          }
]
    },
    {
        id: 'lesson-w20-d3',
        title: 'Phase 2 Capstone Project - Part 3',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/HcqpanDadyQ?si=premium_mode',
        sources: [
            { title: 'Official Documentation', url: 'https://developer.mozilla.org/' },
            { title: 'Architect Archives', url: '#' }
        ],
        story: `<div class="quad-track"><div class="track-section tech"><h4>💻 1. Algorithmic Processing</h4><p>This module focuses on high-speed data parsing. Time Complexity (Big O) prevents server timeouts.</p></div><div class="track-section health"><h4>🏥 2. Clinical Data Streams</h4><p>Hospitals generate terabytes of telemetry hourly. Structuring this raw byte data is critical.</p></div><div class="track-section bio"><h4>🧬 3. Evolutionary Algorithms</h4><p>Algorithms evolve through mutation and selection. Structure ML pipelines to adapt dynamically.</p></div><div class="track-section lab"><h4>🧪 4. God-Mode Lab</h4><p><strong>Mission:</strong> The pipeline has stalled. Isolate the errant data frame.</p></div></div>`,
        task: {
            type: 'find-value',
            targetColumn: 'anomaly',
            condition: (val) => val === 'True',
            successMessage: "System Override Successful. Node unlocked. +100 XP.",
            errorMessage: "Find the True anomaly flag."
        },
        data: [
          {
                    "key": "Patient_XYZ",
                    "vitals": "Stable",
                    "heart_rate": "72",
                    "anomaly": "False"
          },
          {
                    "key": "Patient_ABC",
                    "vitals": "Unstable",
                    "heart_rate": "145",
                    "anomaly": "True"
          },
          {
                    "key": "Patient_LMN",
                    "vitals": "Stable",
                    "heart_rate": "65",
                    "anomaly": "False"
          },
          {
                    "key": "Patient_QRS",
                    "vitals": "Stable",
                    "heart_rate": "80",
                    "anomaly": "False"
          }
]
    },
    {
        id: 'lesson-w20-d4',
        title: 'Phase 2 Capstone Project - Part 4',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/aircAruvnKk?si=premium_mode',
        sources: [
            { title: 'Official Documentation', url: 'https://developer.mozilla.org/' },
            { title: 'Architect Archives', url: '#' }
        ],
        story: `<div class="quad-track"><div class="track-section tech"><h4>💻 1. Algorithmic Processing</h4><p>This module focuses on high-speed data parsing. Time Complexity (Big O) prevents server timeouts.</p></div><div class="track-section health"><h4>🏥 2. Clinical Data Streams</h4><p>Hospitals generate terabytes of telemetry hourly. Structuring this raw byte data is critical.</p></div><div class="track-section bio"><h4>🧬 3. Evolutionary Algorithms</h4><p>Algorithms evolve through mutation and selection. Structure ML pipelines to adapt dynamically.</p></div><div class="track-section lab"><h4>🧪 4. God-Mode Lab</h4><p><strong>Mission:</strong> The pipeline has stalled. Isolate the errant data frame.</p></div></div>`,
        task: {
            type: 'find-value',
            targetColumn: 'status',
            condition: (val) => val === 'CRITICAL',
            successMessage: "System Override Successful. Node unlocked. +100 XP.",
            errorMessage: "Locate the CRITICAL status node."
        },
        data: [
          {
                    "id": 9846,
                    "value": "Alpha_Node",
                    "metric": "0.45",
                    "status": "Active"
          },
          {
                    "id": 1842,
                    "value": "Beta_Node",
                    "metric": "0.89",
                    "status": "Active"
          },
          {
                    "id": 5108,
                    "value": "Omega_Node",
                    "metric": "0.01",
                    "status": "CRITICAL"
          },
          {
                    "id": 3430,
                    "value": "Zeta_Node",
                    "metric": "1.00",
                    "status": "Active"
          }
]
    },
    {
        id: 'lesson-w20-d5',
        title: 'Phase 2 Capstone Project - Part 5',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/aircAruvnKk?si=premium_mode',
        sources: [
            { title: 'Official Documentation', url: 'https://developer.mozilla.org/' },
            { title: 'Architect Archives', url: '#' }
        ],
        story: `<div class="quad-track"><div class="track-section tech"><h4>💻 1. Algorithmic Processing</h4><p>This module focuses on high-speed data parsing. Time Complexity (Big O) prevents server timeouts.</p></div><div class="track-section health"><h4>🏥 2. Clinical Data Streams</h4><p>Hospitals generate terabytes of telemetry hourly. Structuring this raw byte data is critical.</p></div><div class="track-section bio"><h4>🧬 3. Evolutionary Algorithms</h4><p>Algorithms evolve through mutation and selection. Structure ML pipelines to adapt dynamically.</p></div><div class="track-section lab"><h4>🧪 4. God-Mode Lab</h4><p><strong>Mission:</strong> The pipeline has stalled. Isolate the errant data frame.</p></div></div>`,
        task: {
            type: 'find-value',
            targetColumn: 'status',
            condition: (val) => val === 'CRITICAL',
            successMessage: "System Override Successful. Node unlocked. +100 XP.",
            errorMessage: "Locate the CRITICAL status node."
        },
        data: [
          {
                    "id": 8767,
                    "value": "Alpha_Node",
                    "metric": "0.45",
                    "status": "Active"
          },
          {
                    "id": 9107,
                    "value": "Beta_Node",
                    "metric": "0.89",
                    "status": "Active"
          },
          {
                    "id": 3782,
                    "value": "Omega_Node",
                    "metric": "0.01",
                    "status": "CRITICAL"
          },
          {
                    "id": 1216,
                    "value": "Zeta_Node",
                    "metric": "1.00",
                    "status": "Active"
          }
]
    },
    {
        id: 'lesson-w20-d6',
        title: 'Phase 2 Capstone Project - Part 6',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/aircAruvnKk?si=premium_mode',
        sources: [
            { title: 'Official Documentation', url: 'https://developer.mozilla.org/' },
            { title: 'Architect Archives', url: '#' }
        ],
        story: `<div class="quad-track"><div class="track-section tech"><h4>💻 1. Core Mechanics</h4><p>Mastering this concept requires understanding the underlying synthetic logic. In enterprise computing, this is the foundational bedrock.</p></div><div class="track-section health"><h4>🏥 2. Bio-Systems</h4><p>Data science in healthcare relies on absolute precision. We apply this logic to sequence genomic arrays.</p></div><div class="track-section bio"><h4>🧬 3. Neural Architecture</h4><p>Information must flow efficiently like a biological synapse. Optimize your code.</p></div><div class="track-section lab"><h4>🧪 4. God-Mode Lab</h4><p><strong>Mission:</strong> Locate the critical node anomaly to restore integrity.</p></div></div>`,
        task: {
            type: 'find-value',
            targetColumn: 'status',
            condition: (val) => val === 'CRITICAL',
            successMessage: "System Override Successful. Node unlocked. +100 XP.",
            errorMessage: "Locate the CRITICAL status node."
        },
        data: [
          {
                    "id": 2817,
                    "value": "Alpha_Node",
                    "metric": "0.45",
                    "status": "Active"
          },
          {
                    "id": 2650,
                    "value": "Beta_Node",
                    "metric": "0.89",
                    "status": "Active"
          },
          {
                    "id": 2547,
                    "value": "Omega_Node",
                    "metric": "0.01",
                    "status": "CRITICAL"
          },
          {
                    "id": 7103,
                    "value": "Zeta_Node",
                    "metric": "1.00",
                    "status": "Active"
          }
]
    },
    {
        id: 'lesson-w20-d7',
        title: 'Weekly Concept Review',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/rpkpK_n2ad0?si=premium_mode',
        sources: [
            { title: 'Official Documentation', url: 'https://developer.mozilla.org/' },
            { title: 'Architect Archives', url: '#' }
        ],
        story: `<div class="quad-track"><div class="track-section tech"><h4>💻 1. Algorithmic Processing</h4><p>This module focuses on high-speed data parsing. Time Complexity (Big O) prevents server timeouts.</p></div><div class="track-section health"><h4>🏥 2. Clinical Data Streams</h4><p>Hospitals generate terabytes of telemetry hourly. Structuring this raw byte data is critical.</p></div><div class="track-section bio"><h4>🧬 3. Evolutionary Algorithms</h4><p>Algorithms evolve through mutation and selection. Structure ML pipelines to adapt dynamically.</p></div><div class="track-section lab"><h4>🧪 4. God-Mode Lab</h4><p><strong>Mission:</strong> The pipeline has stalled. Isolate the errant data frame.</p></div></div>`,
        task: {
            type: 'find-value',
            targetColumn: 'status',
            condition: (val) => val === 'CRITICAL',
            successMessage: "System Override Successful. Node unlocked. +100 XP.",
            errorMessage: "Locate the CRITICAL status node."
        },
        data: [
          {
                    "id": 1386,
                    "value": "Alpha_Node",
                    "metric": "0.45",
                    "status": "Active"
          },
          {
                    "id": 4237,
                    "value": "Beta_Node",
                    "metric": "0.89",
                    "status": "Active"
          },
          {
                    "id": 5463,
                    "value": "Omega_Node",
                    "metric": "0.01",
                    "status": "CRITICAL"
          },
          {
                    "id": 1003,
                    "value": "Zeta_Node",
                    "metric": "1.00",
                    "status": "Active"
          }
]
    },
    {
        id: 'lesson-w21-d1',
        title: 'Python: Setup & Print - Part 1',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/HcqpanDadyQ?si=premium_mode',
        sources: [
            { title: 'Official Documentation', url: 'https://developer.mozilla.org/' },
            { title: 'Architect Archives', url: '#' }
        ],
        story: `<div class="quad-track"><div class="track-section tech"><h4>💻 1. Algorithmic Processing</h4><p>This module focuses on high-speed data parsing. Time Complexity (Big O) prevents server timeouts.</p></div><div class="track-section health"><h4>🏥 2. Clinical Data Streams</h4><p>Hospitals generate terabytes of telemetry hourly. Structuring this raw byte data is critical.</p></div><div class="track-section bio"><h4>🧬 3. Evolutionary Algorithms</h4><p>Algorithms evolve through mutation and selection. Structure ML pipelines to adapt dynamically.</p></div><div class="track-section lab"><h4>🧪 4. God-Mode Lab</h4><p><strong>Mission:</strong> The pipeline has stalled. Isolate the errant data frame.</p></div></div>`,
        task: {
            type: 'find-value',
            targetColumn: 'status',
            condition: (val) => val === 'CRITICAL',
            successMessage: "System Override Successful. Node unlocked. +100 XP.",
            errorMessage: "Locate the CRITICAL status node."
        },
        data: [
          {
                    "id": 2408,
                    "value": "Alpha_Node",
                    "metric": "0.45",
                    "status": "Active"
          },
          {
                    "id": 1495,
                    "value": "Beta_Node",
                    "metric": "0.89",
                    "status": "Active"
          },
          {
                    "id": 5337,
                    "value": "Omega_Node",
                    "metric": "0.01",
                    "status": "CRITICAL"
          },
          {
                    "id": 2138,
                    "value": "Zeta_Node",
                    "metric": "1.00",
                    "status": "Active"
          }
]
    },
    {
        id: 'lesson-w21-d2',
        title: 'Python: Setup & Print - Part 2',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/zOjov-2OZ0E?si=premium_mode',
        sources: [
            { title: 'Official Documentation', url: 'https://developer.mozilla.org/' },
            { title: 'Architect Archives', url: '#' }
        ],
        story: `<div class="quad-track"><div class="track-section tech"><h4>💻 1. Algorithmic Processing</h4><p>This module focuses on high-speed data parsing. Time Complexity (Big O) prevents server timeouts.</p></div><div class="track-section health"><h4>🏥 2. Clinical Data Streams</h4><p>Hospitals generate terabytes of telemetry hourly. Structuring this raw byte data is critical.</p></div><div class="track-section bio"><h4>🧬 3. Evolutionary Algorithms</h4><p>Algorithms evolve through mutation and selection. Structure ML pipelines to adapt dynamically.</p></div><div class="track-section lab"><h4>🧪 4. God-Mode Lab</h4><p><strong>Mission:</strong> The pipeline has stalled. Isolate the errant data frame.</p></div></div>`,
        task: {
            type: 'find-value',
            targetColumn: 'status',
            condition: (val) => val === 'CRITICAL',
            successMessage: "System Override Successful. Node unlocked. +100 XP.",
            errorMessage: "Locate the CRITICAL status node."
        },
        data: [
          {
                    "id": 8740,
                    "value": "Alpha_Node",
                    "metric": "0.45",
                    "status": "Active"
          },
          {
                    "id": 6942,
                    "value": "Beta_Node",
                    "metric": "0.89",
                    "status": "Active"
          },
          {
                    "id": 7453,
                    "value": "Omega_Node",
                    "metric": "0.01",
                    "status": "CRITICAL"
          },
          {
                    "id": 5466,
                    "value": "Zeta_Node",
                    "metric": "1.00",
                    "status": "Active"
          }
]
    },
    {
        id: 'lesson-w21-d3',
        title: 'Python: Setup & Print - Part 3',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/zOjov-2OZ0E?si=premium_mode',
        sources: [
            { title: 'Official Documentation', url: 'https://developer.mozilla.org/' },
            { title: 'Architect Archives', url: '#' }
        ],
        story: `<div class="quad-track"><div class="track-section tech"><h4>💻 1. Algorithmic Processing</h4><p>This module focuses on high-speed data parsing. Time Complexity (Big O) prevents server timeouts.</p></div><div class="track-section health"><h4>🏥 2. Clinical Data Streams</h4><p>Hospitals generate terabytes of telemetry hourly. Structuring this raw byte data is critical.</p></div><div class="track-section bio"><h4>🧬 3. Evolutionary Algorithms</h4><p>Algorithms evolve through mutation and selection. Structure ML pipelines to adapt dynamically.</p></div><div class="track-section lab"><h4>🧪 4. God-Mode Lab</h4><p><strong>Mission:</strong> The pipeline has stalled. Isolate the errant data frame.</p></div></div>`,
        task: {
            type: 'find-value',
            targetColumn: 'status',
            condition: (val) => val === 'CRITICAL',
            successMessage: "System Override Successful. Node unlocked. +100 XP.",
            errorMessage: "Locate the CRITICAL status node."
        },
        data: [
          {
                    "id": 5440,
                    "value": "Alpha_Node",
                    "metric": "0.45",
                    "status": "Active"
          },
          {
                    "id": 9433,
                    "value": "Beta_Node",
                    "metric": "0.89",
                    "status": "Active"
          },
          {
                    "id": 8766,
                    "value": "Omega_Node",
                    "metric": "0.01",
                    "status": "CRITICAL"
          },
          {
                    "id": 8136,
                    "value": "Zeta_Node",
                    "metric": "1.00",
                    "status": "Active"
          }
]
    },
    {
        id: 'lesson-w21-d4',
        title: 'Python: Setup & Print - Part 4',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/HcqpanDadyQ?si=premium_mode',
        sources: [
            { title: 'Official Documentation', url: 'https://developer.mozilla.org/' },
            { title: 'Architect Archives', url: '#' }
        ],
        story: `<div class="quad-track"><div class="track-section tech"><h4>💻 1. Algorithmic Processing</h4><p>This module focuses on high-speed data parsing. Time Complexity (Big O) prevents server timeouts.</p></div><div class="track-section health"><h4>🏥 2. Clinical Data Streams</h4><p>Hospitals generate terabytes of telemetry hourly. Structuring this raw byte data is critical.</p></div><div class="track-section bio"><h4>🧬 3. Evolutionary Algorithms</h4><p>Algorithms evolve through mutation and selection. Structure ML pipelines to adapt dynamically.</p></div><div class="track-section lab"><h4>🧪 4. God-Mode Lab</h4><p><strong>Mission:</strong> The pipeline has stalled. Isolate the errant data frame.</p></div></div>`,
        task: {
            type: 'find-value',
            targetColumn: 'status',
            condition: (val) => val === 'CRITICAL',
            successMessage: "System Override Successful. Node unlocked. +100 XP.",
            errorMessage: "Locate the CRITICAL status node."
        },
        data: [
          {
                    "id": 6605,
                    "value": "Alpha_Node",
                    "metric": "0.45",
                    "status": "Active"
          },
          {
                    "id": 6092,
                    "value": "Beta_Node",
                    "metric": "0.89",
                    "status": "Active"
          },
          {
                    "id": 8324,
                    "value": "Omega_Node",
                    "metric": "0.01",
                    "status": "CRITICAL"
          },
          {
                    "id": 1203,
                    "value": "Zeta_Node",
                    "metric": "1.00",
                    "status": "Active"
          }
]
    },
    {
        id: 'lesson-w21-d5',
        title: 'Python: Setup & Print - Part 5',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/zOjov-2OZ0E?si=premium_mode',
        sources: [
            { title: 'Official Documentation', url: 'https://developer.mozilla.org/' },
            { title: 'Architect Archives', url: '#' }
        ],
        story: `<div class="quad-track"><div class="track-section tech"><h4>💻 1. Core Mechanics</h4><p>Mastering this concept requires understanding the underlying synthetic logic. In enterprise computing, this is the foundational bedrock.</p></div><div class="track-section health"><h4>🏥 2. Bio-Systems</h4><p>Data science in healthcare relies on absolute precision. We apply this logic to sequence genomic arrays.</p></div><div class="track-section bio"><h4>🧬 3. Neural Architecture</h4><p>Information must flow efficiently like a biological synapse. Optimize your code.</p></div><div class="track-section lab"><h4>🧪 4. God-Mode Lab</h4><p><strong>Mission:</strong> Locate the critical node anomaly to restore integrity.</p></div></div>`,
        task: {
            type: 'find-value',
            targetColumn: 'anomaly',
            condition: (val) => val === 'True',
            successMessage: "System Override Successful. Node unlocked. +100 XP.",
            errorMessage: "Find the True anomaly flag."
        },
        data: [
          {
                    "key": "Patient_XYZ",
                    "vitals": "Stable",
                    "heart_rate": "72",
                    "anomaly": "False"
          },
          {
                    "key": "Patient_ABC",
                    "vitals": "Unstable",
                    "heart_rate": "145",
                    "anomaly": "True"
          },
          {
                    "key": "Patient_LMN",
                    "vitals": "Stable",
                    "heart_rate": "65",
                    "anomaly": "False"
          },
          {
                    "key": "Patient_QRS",
                    "vitals": "Stable",
                    "heart_rate": "80",
                    "anomaly": "False"
          }
]
    },
    {
        id: 'lesson-w21-d6',
        title: 'Python: Setup & Print - Part 6',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/HcqpanDadyQ?si=premium_mode',
        sources: [
            { title: 'Official Documentation', url: 'https://developer.mozilla.org/' },
            { title: 'Architect Archives', url: '#' }
        ],
        story: `<div class="quad-track"><div class="track-section tech"><h4>💻 1. Core Mechanics</h4><p>Mastering this concept requires understanding the underlying synthetic logic. In enterprise computing, this is the foundational bedrock.</p></div><div class="track-section health"><h4>🏥 2. Bio-Systems</h4><p>Data science in healthcare relies on absolute precision. We apply this logic to sequence genomic arrays.</p></div><div class="track-section bio"><h4>🧬 3. Neural Architecture</h4><p>Information must flow efficiently like a biological synapse. Optimize your code.</p></div><div class="track-section lab"><h4>🧪 4. God-Mode Lab</h4><p><strong>Mission:</strong> Locate the critical node anomaly to restore integrity.</p></div></div>`,
        task: {
            type: 'find-value',
            targetColumn: 'anomaly',
            condition: (val) => val === 'True',
            successMessage: "System Override Successful. Node unlocked. +100 XP.",
            errorMessage: "Find the True anomaly flag."
        },
        data: [
          {
                    "key": "Patient_XYZ",
                    "vitals": "Stable",
                    "heart_rate": "72",
                    "anomaly": "False"
          },
          {
                    "key": "Patient_ABC",
                    "vitals": "Unstable",
                    "heart_rate": "145",
                    "anomaly": "True"
          },
          {
                    "key": "Patient_LMN",
                    "vitals": "Stable",
                    "heart_rate": "65",
                    "anomaly": "False"
          },
          {
                    "key": "Patient_QRS",
                    "vitals": "Stable",
                    "heart_rate": "80",
                    "anomaly": "False"
          }
]
    },
    {
        id: 'lesson-w21-d7',
        title: 'Weekly Concept Review',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/aircAruvnKk?si=premium_mode',
        sources: [
            { title: 'Official Documentation', url: 'https://developer.mozilla.org/' },
            { title: 'Architect Archives', url: '#' }
        ],
        story: `<div class="quad-track"><div class="track-section tech"><h4>💻 1. Core Mechanics</h4><p>Mastering this concept requires understanding the underlying synthetic logic. In enterprise computing, this is the foundational bedrock.</p></div><div class="track-section health"><h4>🏥 2. Bio-Systems</h4><p>Data science in healthcare relies on absolute precision. We apply this logic to sequence genomic arrays.</p></div><div class="track-section bio"><h4>🧬 3. Neural Architecture</h4><p>Information must flow efficiently like a biological synapse. Optimize your code.</p></div><div class="track-section lab"><h4>🧪 4. God-Mode Lab</h4><p><strong>Mission:</strong> Locate the critical node anomaly to restore integrity.</p></div></div>`,
        task: {
            type: 'find-value',
            targetColumn: 'anomaly',
            condition: (val) => val === 'True',
            successMessage: "System Override Successful. Node unlocked. +100 XP.",
            errorMessage: "Find the True anomaly flag."
        },
        data: [
          {
                    "key": "Patient_XYZ",
                    "vitals": "Stable",
                    "heart_rate": "72",
                    "anomaly": "False"
          },
          {
                    "key": "Patient_ABC",
                    "vitals": "Unstable",
                    "heart_rate": "145",
                    "anomaly": "True"
          },
          {
                    "key": "Patient_LMN",
                    "vitals": "Stable",
                    "heart_rate": "65",
                    "anomaly": "False"
          },
          {
                    "key": "Patient_QRS",
                    "vitals": "Stable",
                    "heart_rate": "80",
                    "anomaly": "False"
          }
]
    },
    {
        id: 'lesson-w22-d1',
        title: 'Python: Variables & Types - Part 1',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/HcqpanDadyQ?si=premium_mode',
        sources: [
            { title: 'Official Documentation', url: 'https://developer.mozilla.org/' },
            { title: 'Architect Archives', url: '#' }
        ],
        story: `<div class="quad-track"><div class="track-section tech"><h4>💻 1. Algorithmic Processing</h4><p>This module focuses on high-speed data parsing. Time Complexity (Big O) prevents server timeouts.</p></div><div class="track-section health"><h4>🏥 2. Clinical Data Streams</h4><p>Hospitals generate terabytes of telemetry hourly. Structuring this raw byte data is critical.</p></div><div class="track-section bio"><h4>🧬 3. Evolutionary Algorithms</h4><p>Algorithms evolve through mutation and selection. Structure ML pipelines to adapt dynamically.</p></div><div class="track-section lab"><h4>🧪 4. God-Mode Lab</h4><p><strong>Mission:</strong> The pipeline has stalled. Isolate the errant data frame.</p></div></div>`,
        task: {
            type: 'find-value',
            targetColumn: 'anomaly',
            condition: (val) => val === 'True',
            successMessage: "System Override Successful. Node unlocked. +100 XP.",
            errorMessage: "Find the True anomaly flag."
        },
        data: [
          {
                    "key": "Patient_XYZ",
                    "vitals": "Stable",
                    "heart_rate": "72",
                    "anomaly": "False"
          },
          {
                    "key": "Patient_ABC",
                    "vitals": "Unstable",
                    "heart_rate": "145",
                    "anomaly": "True"
          },
          {
                    "key": "Patient_LMN",
                    "vitals": "Stable",
                    "heart_rate": "65",
                    "anomaly": "False"
          },
          {
                    "key": "Patient_QRS",
                    "vitals": "Stable",
                    "heart_rate": "80",
                    "anomaly": "False"
          }
]
    },
    {
        id: 'lesson-w22-d2',
        title: 'Python: Variables & Types - Part 2',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/HcqpanDadyQ?si=premium_mode',
        sources: [
            { title: 'Official Documentation', url: 'https://developer.mozilla.org/' },
            { title: 'Architect Archives', url: '#' }
        ],
        story: `<div class="quad-track"><div class="track-section tech"><h4>💻 1. Core Mechanics</h4><p>Mastering this concept requires understanding the underlying synthetic logic. In enterprise computing, this is the foundational bedrock.</p></div><div class="track-section health"><h4>🏥 2. Bio-Systems</h4><p>Data science in healthcare relies on absolute precision. We apply this logic to sequence genomic arrays.</p></div><div class="track-section bio"><h4>🧬 3. Neural Architecture</h4><p>Information must flow efficiently like a biological synapse. Optimize your code.</p></div><div class="track-section lab"><h4>🧪 4. God-Mode Lab</h4><p><strong>Mission:</strong> Locate the critical node anomaly to restore integrity.</p></div></div>`,
        task: {
            type: 'find-value',
            targetColumn: 'anomaly',
            condition: (val) => val === 'True',
            successMessage: "System Override Successful. Node unlocked. +100 XP.",
            errorMessage: "Find the True anomaly flag."
        },
        data: [
          {
                    "key": "Patient_XYZ",
                    "vitals": "Stable",
                    "heart_rate": "72",
                    "anomaly": "False"
          },
          {
                    "key": "Patient_ABC",
                    "vitals": "Unstable",
                    "heart_rate": "145",
                    "anomaly": "True"
          },
          {
                    "key": "Patient_LMN",
                    "vitals": "Stable",
                    "heart_rate": "65",
                    "anomaly": "False"
          },
          {
                    "key": "Patient_QRS",
                    "vitals": "Stable",
                    "heart_rate": "80",
                    "anomaly": "False"
          }
]
    },
    {
        id: 'lesson-w22-d3',
        title: 'Python: Variables & Types - Part 3',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/rpkpK_n2ad0?si=premium_mode',
        sources: [
            { title: 'Official Documentation', url: 'https://developer.mozilla.org/' },
            { title: 'Architect Archives', url: '#' }
        ],
        story: `<div class="quad-track"><div class="track-section tech"><h4>💻 1. Core Mechanics</h4><p>Mastering this concept requires understanding the underlying synthetic logic. In enterprise computing, this is the foundational bedrock.</p></div><div class="track-section health"><h4>🏥 2. Bio-Systems</h4><p>Data science in healthcare relies on absolute precision. We apply this logic to sequence genomic arrays.</p></div><div class="track-section bio"><h4>🧬 3. Neural Architecture</h4><p>Information must flow efficiently like a biological synapse. Optimize your code.</p></div><div class="track-section lab"><h4>🧪 4. God-Mode Lab</h4><p><strong>Mission:</strong> Locate the critical node anomaly to restore integrity.</p></div></div>`,
        task: {
            type: 'find-value',
            targetColumn: 'status',
            condition: (val) => val === 'CRITICAL',
            successMessage: "System Override Successful. Node unlocked. +100 XP.",
            errorMessage: "Locate the CRITICAL status node."
        },
        data: [
          {
                    "id": 1130,
                    "value": "Alpha_Node",
                    "metric": "0.45",
                    "status": "Active"
          },
          {
                    "id": 1449,
                    "value": "Beta_Node",
                    "metric": "0.89",
                    "status": "Active"
          },
          {
                    "id": 5498,
                    "value": "Omega_Node",
                    "metric": "0.01",
                    "status": "CRITICAL"
          },
          {
                    "id": 8161,
                    "value": "Zeta_Node",
                    "metric": "1.00",
                    "status": "Active"
          }
]
    },
    {
        id: 'lesson-w22-d4',
        title: 'Python: Variables & Types - Part 4',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/zOjov-2OZ0E?si=premium_mode',
        sources: [
            { title: 'Official Documentation', url: 'https://developer.mozilla.org/' },
            { title: 'Architect Archives', url: '#' }
        ],
        story: `<div class="quad-track"><div class="track-section tech"><h4>💻 1. Core Mechanics</h4><p>Mastering this concept requires understanding the underlying synthetic logic. In enterprise computing, this is the foundational bedrock.</p></div><div class="track-section health"><h4>🏥 2. Bio-Systems</h4><p>Data science in healthcare relies on absolute precision. We apply this logic to sequence genomic arrays.</p></div><div class="track-section bio"><h4>🧬 3. Neural Architecture</h4><p>Information must flow efficiently like a biological synapse. Optimize your code.</p></div><div class="track-section lab"><h4>🧪 4. God-Mode Lab</h4><p><strong>Mission:</strong> Locate the critical node anomaly to restore integrity.</p></div></div>`,
        task: {
            type: 'find-value',
            targetColumn: 'anomaly',
            condition: (val) => val === 'True',
            successMessage: "System Override Successful. Node unlocked. +100 XP.",
            errorMessage: "Find the True anomaly flag."
        },
        data: [
          {
                    "key": "Patient_XYZ",
                    "vitals": "Stable",
                    "heart_rate": "72",
                    "anomaly": "False"
          },
          {
                    "key": "Patient_ABC",
                    "vitals": "Unstable",
                    "heart_rate": "145",
                    "anomaly": "True"
          },
          {
                    "key": "Patient_LMN",
                    "vitals": "Stable",
                    "heart_rate": "65",
                    "anomaly": "False"
          },
          {
                    "key": "Patient_QRS",
                    "vitals": "Stable",
                    "heart_rate": "80",
                    "anomaly": "False"
          }
]
    },
    {
        id: 'lesson-w22-d5',
        title: 'Python: Variables & Types - Part 5',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/HcqpanDadyQ?si=premium_mode',
        sources: [
            { title: 'Official Documentation', url: 'https://developer.mozilla.org/' },
            { title: 'Architect Archives', url: '#' }
        ],
        story: `<div class="quad-track"><div class="track-section tech"><h4>💻 1. Core Mechanics</h4><p>Mastering this concept requires understanding the underlying synthetic logic. In enterprise computing, this is the foundational bedrock.</p></div><div class="track-section health"><h4>🏥 2. Bio-Systems</h4><p>Data science in healthcare relies on absolute precision. We apply this logic to sequence genomic arrays.</p></div><div class="track-section bio"><h4>🧬 3. Neural Architecture</h4><p>Information must flow efficiently like a biological synapse. Optimize your code.</p></div><div class="track-section lab"><h4>🧪 4. God-Mode Lab</h4><p><strong>Mission:</strong> Locate the critical node anomaly to restore integrity.</p></div></div>`,
        task: {
            type: 'find-value',
            targetColumn: 'anomaly',
            condition: (val) => val === 'True',
            successMessage: "System Override Successful. Node unlocked. +100 XP.",
            errorMessage: "Find the True anomaly flag."
        },
        data: [
          {
                    "key": "Patient_XYZ",
                    "vitals": "Stable",
                    "heart_rate": "72",
                    "anomaly": "False"
          },
          {
                    "key": "Patient_ABC",
                    "vitals": "Unstable",
                    "heart_rate": "145",
                    "anomaly": "True"
          },
          {
                    "key": "Patient_LMN",
                    "vitals": "Stable",
                    "heart_rate": "65",
                    "anomaly": "False"
          },
          {
                    "key": "Patient_QRS",
                    "vitals": "Stable",
                    "heart_rate": "80",
                    "anomaly": "False"
          }
]
    },
    {
        id: 'lesson-w22-d6',
        title: 'Python: Variables & Types - Part 6',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/aircAruvnKk?si=premium_mode',
        sources: [
            { title: 'Official Documentation', url: 'https://developer.mozilla.org/' },
            { title: 'Architect Archives', url: '#' }
        ],
        story: `<div class="quad-track"><div class="track-section tech"><h4>💻 1. Algorithmic Processing</h4><p>This module focuses on high-speed data parsing. Time Complexity (Big O) prevents server timeouts.</p></div><div class="track-section health"><h4>🏥 2. Clinical Data Streams</h4><p>Hospitals generate terabytes of telemetry hourly. Structuring this raw byte data is critical.</p></div><div class="track-section bio"><h4>🧬 3. Evolutionary Algorithms</h4><p>Algorithms evolve through mutation and selection. Structure ML pipelines to adapt dynamically.</p></div><div class="track-section lab"><h4>🧪 4. God-Mode Lab</h4><p><strong>Mission:</strong> The pipeline has stalled. Isolate the errant data frame.</p></div></div>`,
        task: {
            type: 'find-value',
            targetColumn: 'status',
            condition: (val) => val === 'CRITICAL',
            successMessage: "System Override Successful. Node unlocked. +100 XP.",
            errorMessage: "Locate the CRITICAL status node."
        },
        data: [
          {
                    "id": 3795,
                    "value": "Alpha_Node",
                    "metric": "0.45",
                    "status": "Active"
          },
          {
                    "id": 9904,
                    "value": "Beta_Node",
                    "metric": "0.89",
                    "status": "Active"
          },
          {
                    "id": 3729,
                    "value": "Omega_Node",
                    "metric": "0.01",
                    "status": "CRITICAL"
          },
          {
                    "id": 1798,
                    "value": "Zeta_Node",
                    "metric": "1.00",
                    "status": "Active"
          }
]
    },
    {
        id: 'lesson-w22-d7',
        title: 'Weekly Concept Review',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/zOjov-2OZ0E?si=premium_mode',
        sources: [
            { title: 'Official Documentation', url: 'https://developer.mozilla.org/' },
            { title: 'Architect Archives', url: '#' }
        ],
        story: `<div class="quad-track"><div class="track-section tech"><h4>💻 1. Core Mechanics</h4><p>Mastering this concept requires understanding the underlying synthetic logic. In enterprise computing, this is the foundational bedrock.</p></div><div class="track-section health"><h4>🏥 2. Bio-Systems</h4><p>Data science in healthcare relies on absolute precision. We apply this logic to sequence genomic arrays.</p></div><div class="track-section bio"><h4>🧬 3. Neural Architecture</h4><p>Information must flow efficiently like a biological synapse. Optimize your code.</p></div><div class="track-section lab"><h4>🧪 4. God-Mode Lab</h4><p><strong>Mission:</strong> Locate the critical node anomaly to restore integrity.</p></div></div>`,
        task: {
            type: 'find-value',
            targetColumn: 'anomaly',
            condition: (val) => val === 'True',
            successMessage: "System Override Successful. Node unlocked. +100 XP.",
            errorMessage: "Find the True anomaly flag."
        },
        data: [
          {
                    "key": "Patient_XYZ",
                    "vitals": "Stable",
                    "heart_rate": "72",
                    "anomaly": "False"
          },
          {
                    "key": "Patient_ABC",
                    "vitals": "Unstable",
                    "heart_rate": "145",
                    "anomaly": "True"
          },
          {
                    "key": "Patient_LMN",
                    "vitals": "Stable",
                    "heart_rate": "65",
                    "anomaly": "False"
          },
          {
                    "key": "Patient_QRS",
                    "vitals": "Stable",
                    "heart_rate": "80",
                    "anomaly": "False"
          }
]
    },
    {
        id: 'lesson-w23-d1',
        title: 'Python: Logic (If/Else) - Part 1',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/zOjov-2OZ0E?si=premium_mode',
        sources: [
            { title: 'Official Documentation', url: 'https://developer.mozilla.org/' },
            { title: 'Architect Archives', url: '#' }
        ],
        story: `<div class="quad-track"><div class="track-section tech"><h4>💻 1. Algorithmic Processing</h4><p>This module focuses on high-speed data parsing. Time Complexity (Big O) prevents server timeouts.</p></div><div class="track-section health"><h4>🏥 2. Clinical Data Streams</h4><p>Hospitals generate terabytes of telemetry hourly. Structuring this raw byte data is critical.</p></div><div class="track-section bio"><h4>🧬 3. Evolutionary Algorithms</h4><p>Algorithms evolve through mutation and selection. Structure ML pipelines to adapt dynamically.</p></div><div class="track-section lab"><h4>🧪 4. God-Mode Lab</h4><p><strong>Mission:</strong> The pipeline has stalled. Isolate the errant data frame.</p></div></div>`,
        task: {
            type: 'find-value',
            targetColumn: 'anomaly',
            condition: (val) => val === 'True',
            successMessage: "System Override Successful. Node unlocked. +100 XP.",
            errorMessage: "Find the True anomaly flag."
        },
        data: [
          {
                    "key": "Patient_XYZ",
                    "vitals": "Stable",
                    "heart_rate": "72",
                    "anomaly": "False"
          },
          {
                    "key": "Patient_ABC",
                    "vitals": "Unstable",
                    "heart_rate": "145",
                    "anomaly": "True"
          },
          {
                    "key": "Patient_LMN",
                    "vitals": "Stable",
                    "heart_rate": "65",
                    "anomaly": "False"
          },
          {
                    "key": "Patient_QRS",
                    "vitals": "Stable",
                    "heart_rate": "80",
                    "anomaly": "False"
          }
]
    },
    {
        id: 'lesson-w23-d2',
        title: 'Python: Logic (If/Else) - Part 2',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/aircAruvnKk?si=premium_mode',
        sources: [
            { title: 'Official Documentation', url: 'https://developer.mozilla.org/' },
            { title: 'Architect Archives', url: '#' }
        ],
        story: `<div class="quad-track"><div class="track-section tech"><h4>💻 1. Core Mechanics</h4><p>Mastering this concept requires understanding the underlying synthetic logic. In enterprise computing, this is the foundational bedrock.</p></div><div class="track-section health"><h4>🏥 2. Bio-Systems</h4><p>Data science in healthcare relies on absolute precision. We apply this logic to sequence genomic arrays.</p></div><div class="track-section bio"><h4>🧬 3. Neural Architecture</h4><p>Information must flow efficiently like a biological synapse. Optimize your code.</p></div><div class="track-section lab"><h4>🧪 4. God-Mode Lab</h4><p><strong>Mission:</strong> Locate the critical node anomaly to restore integrity.</p></div></div>`,
        task: {
            type: 'find-value',
            targetColumn: 'anomaly',
            condition: (val) => val === 'True',
            successMessage: "System Override Successful. Node unlocked. +100 XP.",
            errorMessage: "Find the True anomaly flag."
        },
        data: [
          {
                    "key": "Patient_XYZ",
                    "vitals": "Stable",
                    "heart_rate": "72",
                    "anomaly": "False"
          },
          {
                    "key": "Patient_ABC",
                    "vitals": "Unstable",
                    "heart_rate": "145",
                    "anomaly": "True"
          },
          {
                    "key": "Patient_LMN",
                    "vitals": "Stable",
                    "heart_rate": "65",
                    "anomaly": "False"
          },
          {
                    "key": "Patient_QRS",
                    "vitals": "Stable",
                    "heart_rate": "80",
                    "anomaly": "False"
          }
]
    },
    {
        id: 'lesson-w23-d3',
        title: 'Python: Logic (If/Else) - Part 3',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/zOjov-2OZ0E?si=premium_mode',
        sources: [
            { title: 'Official Documentation', url: 'https://developer.mozilla.org/' },
            { title: 'Architect Archives', url: '#' }
        ],
        story: `<div class="quad-track"><div class="track-section tech"><h4>💻 1. Core Mechanics</h4><p>Mastering this concept requires understanding the underlying synthetic logic. In enterprise computing, this is the foundational bedrock.</p></div><div class="track-section health"><h4>🏥 2. Bio-Systems</h4><p>Data science in healthcare relies on absolute precision. We apply this logic to sequence genomic arrays.</p></div><div class="track-section bio"><h4>🧬 3. Neural Architecture</h4><p>Information must flow efficiently like a biological synapse. Optimize your code.</p></div><div class="track-section lab"><h4>🧪 4. God-Mode Lab</h4><p><strong>Mission:</strong> Locate the critical node anomaly to restore integrity.</p></div></div>`,
        task: {
            type: 'find-value',
            targetColumn: 'status',
            condition: (val) => val === 'CRITICAL',
            successMessage: "System Override Successful. Node unlocked. +100 XP.",
            errorMessage: "Locate the CRITICAL status node."
        },
        data: [
          {
                    "id": 7813,
                    "value": "Alpha_Node",
                    "metric": "0.45",
                    "status": "Active"
          },
          {
                    "id": 9062,
                    "value": "Beta_Node",
                    "metric": "0.89",
                    "status": "Active"
          },
          {
                    "id": 3425,
                    "value": "Omega_Node",
                    "metric": "0.01",
                    "status": "CRITICAL"
          },
          {
                    "id": 9556,
                    "value": "Zeta_Node",
                    "metric": "1.00",
                    "status": "Active"
          }
]
    },
    {
        id: 'lesson-w23-d4',
        title: 'Python: Logic (If/Else) - Part 4',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/HcqpanDadyQ?si=premium_mode',
        sources: [
            { title: 'Official Documentation', url: 'https://developer.mozilla.org/' },
            { title: 'Architect Archives', url: '#' }
        ],
        story: `<div class="quad-track"><div class="track-section tech"><h4>💻 1. Core Mechanics</h4><p>Mastering this concept requires understanding the underlying synthetic logic. In enterprise computing, this is the foundational bedrock.</p></div><div class="track-section health"><h4>🏥 2. Bio-Systems</h4><p>Data science in healthcare relies on absolute precision. We apply this logic to sequence genomic arrays.</p></div><div class="track-section bio"><h4>🧬 3. Neural Architecture</h4><p>Information must flow efficiently like a biological synapse. Optimize your code.</p></div><div class="track-section lab"><h4>🧪 4. God-Mode Lab</h4><p><strong>Mission:</strong> Locate the critical node anomaly to restore integrity.</p></div></div>`,
        task: {
            type: 'find-value',
            targetColumn: 'status',
            condition: (val) => val === 'CRITICAL',
            successMessage: "System Override Successful. Node unlocked. +100 XP.",
            errorMessage: "Locate the CRITICAL status node."
        },
        data: [
          {
                    "id": 6256,
                    "value": "Alpha_Node",
                    "metric": "0.45",
                    "status": "Active"
          },
          {
                    "id": 1944,
                    "value": "Beta_Node",
                    "metric": "0.89",
                    "status": "Active"
          },
          {
                    "id": 2414,
                    "value": "Omega_Node",
                    "metric": "0.01",
                    "status": "CRITICAL"
          },
          {
                    "id": 9096,
                    "value": "Zeta_Node",
                    "metric": "1.00",
                    "status": "Active"
          }
]
    },
    {
        id: 'lesson-w23-d5',
        title: 'Python: Logic (If/Else) - Part 5',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/aircAruvnKk?si=premium_mode',
        sources: [
            { title: 'Official Documentation', url: 'https://developer.mozilla.org/' },
            { title: 'Architect Archives', url: '#' }
        ],
        story: `<div class="quad-track"><div class="track-section tech"><h4>💻 1. Algorithmic Processing</h4><p>This module focuses on high-speed data parsing. Time Complexity (Big O) prevents server timeouts.</p></div><div class="track-section health"><h4>🏥 2. Clinical Data Streams</h4><p>Hospitals generate terabytes of telemetry hourly. Structuring this raw byte data is critical.</p></div><div class="track-section bio"><h4>🧬 3. Evolutionary Algorithms</h4><p>Algorithms evolve through mutation and selection. Structure ML pipelines to adapt dynamically.</p></div><div class="track-section lab"><h4>🧪 4. God-Mode Lab</h4><p><strong>Mission:</strong> The pipeline has stalled. Isolate the errant data frame.</p></div></div>`,
        task: {
            type: 'find-value',
            targetColumn: 'status',
            condition: (val) => val === 'CRITICAL',
            successMessage: "System Override Successful. Node unlocked. +100 XP.",
            errorMessage: "Locate the CRITICAL status node."
        },
        data: [
          {
                    "id": 2652,
                    "value": "Alpha_Node",
                    "metric": "0.45",
                    "status": "Active"
          },
          {
                    "id": 8008,
                    "value": "Beta_Node",
                    "metric": "0.89",
                    "status": "Active"
          },
          {
                    "id": 1116,
                    "value": "Omega_Node",
                    "metric": "0.01",
                    "status": "CRITICAL"
          },
          {
                    "id": 8406,
                    "value": "Zeta_Node",
                    "metric": "1.00",
                    "status": "Active"
          }
]
    },
    {
        id: 'lesson-w23-d6',
        title: 'Python: Logic (If/Else) - Part 6',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/rpkpK_n2ad0?si=premium_mode',
        sources: [
            { title: 'Official Documentation', url: 'https://developer.mozilla.org/' },
            { title: 'Architect Archives', url: '#' }
        ],
        story: `<div class="quad-track"><div class="track-section tech"><h4>💻 1. Algorithmic Processing</h4><p>This module focuses on high-speed data parsing. Time Complexity (Big O) prevents server timeouts.</p></div><div class="track-section health"><h4>🏥 2. Clinical Data Streams</h4><p>Hospitals generate terabytes of telemetry hourly. Structuring this raw byte data is critical.</p></div><div class="track-section bio"><h4>🧬 3. Evolutionary Algorithms</h4><p>Algorithms evolve through mutation and selection. Structure ML pipelines to adapt dynamically.</p></div><div class="track-section lab"><h4>🧪 4. God-Mode Lab</h4><p><strong>Mission:</strong> The pipeline has stalled. Isolate the errant data frame.</p></div></div>`,
        task: {
            type: 'find-value',
            targetColumn: 'anomaly',
            condition: (val) => val === 'True',
            successMessage: "System Override Successful. Node unlocked. +100 XP.",
            errorMessage: "Find the True anomaly flag."
        },
        data: [
          {
                    "key": "Patient_XYZ",
                    "vitals": "Stable",
                    "heart_rate": "72",
                    "anomaly": "False"
          },
          {
                    "key": "Patient_ABC",
                    "vitals": "Unstable",
                    "heart_rate": "145",
                    "anomaly": "True"
          },
          {
                    "key": "Patient_LMN",
                    "vitals": "Stable",
                    "heart_rate": "65",
                    "anomaly": "False"
          },
          {
                    "key": "Patient_QRS",
                    "vitals": "Stable",
                    "heart_rate": "80",
                    "anomaly": "False"
          }
]
    },
    {
        id: 'lesson-w23-d7',
        title: 'Weekly Concept Review',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/aircAruvnKk?si=premium_mode',
        sources: [
            { title: 'Official Documentation', url: 'https://developer.mozilla.org/' },
            { title: 'Architect Archives', url: '#' }
        ],
        story: `<div class="quad-track"><div class="track-section tech"><h4>💻 1. Core Mechanics</h4><p>Mastering this concept requires understanding the underlying synthetic logic. In enterprise computing, this is the foundational bedrock.</p></div><div class="track-section health"><h4>🏥 2. Bio-Systems</h4><p>Data science in healthcare relies on absolute precision. We apply this logic to sequence genomic arrays.</p></div><div class="track-section bio"><h4>🧬 3. Neural Architecture</h4><p>Information must flow efficiently like a biological synapse. Optimize your code.</p></div><div class="track-section lab"><h4>🧪 4. God-Mode Lab</h4><p><strong>Mission:</strong> Locate the critical node anomaly to restore integrity.</p></div></div>`,
        task: {
            type: 'find-value',
            targetColumn: 'status',
            condition: (val) => val === 'CRITICAL',
            successMessage: "System Override Successful. Node unlocked. +100 XP.",
            errorMessage: "Locate the CRITICAL status node."
        },
        data: [
          {
                    "id": 1201,
                    "value": "Alpha_Node",
                    "metric": "0.45",
                    "status": "Active"
          },
          {
                    "id": 5131,
                    "value": "Beta_Node",
                    "metric": "0.89",
                    "status": "Active"
          },
          {
                    "id": 4065,
                    "value": "Omega_Node",
                    "metric": "0.01",
                    "status": "CRITICAL"
          },
          {
                    "id": 3320,
                    "value": "Zeta_Node",
                    "metric": "1.00",
                    "status": "Active"
          }
]
    },
    {
        id: 'lesson-w24-d1',
        title: 'Python: Loops - Part 1',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/zOjov-2OZ0E?si=premium_mode',
        sources: [
            { title: 'Official Documentation', url: 'https://developer.mozilla.org/' },
            { title: 'Architect Archives', url: '#' }
        ],
        story: `<div class="quad-track"><div class="track-section tech"><h4>💻 1. Core Mechanics</h4><p>Mastering this concept requires understanding the underlying synthetic logic. In enterprise computing, this is the foundational bedrock.</p></div><div class="track-section health"><h4>🏥 2. Bio-Systems</h4><p>Data science in healthcare relies on absolute precision. We apply this logic to sequence genomic arrays.</p></div><div class="track-section bio"><h4>🧬 3. Neural Architecture</h4><p>Information must flow efficiently like a biological synapse. Optimize your code.</p></div><div class="track-section lab"><h4>🧪 4. God-Mode Lab</h4><p><strong>Mission:</strong> Locate the critical node anomaly to restore integrity.</p></div></div>`,
        task: {
            type: 'find-value',
            targetColumn: 'anomaly',
            condition: (val) => val === 'True',
            successMessage: "System Override Successful. Node unlocked. +100 XP.",
            errorMessage: "Find the True anomaly flag."
        },
        data: [
          {
                    "key": "Patient_XYZ",
                    "vitals": "Stable",
                    "heart_rate": "72",
                    "anomaly": "False"
          },
          {
                    "key": "Patient_ABC",
                    "vitals": "Unstable",
                    "heart_rate": "145",
                    "anomaly": "True"
          },
          {
                    "key": "Patient_LMN",
                    "vitals": "Stable",
                    "heart_rate": "65",
                    "anomaly": "False"
          },
          {
                    "key": "Patient_QRS",
                    "vitals": "Stable",
                    "heart_rate": "80",
                    "anomaly": "False"
          }
]
    },
    {
        id: 'lesson-w24-d2',
        title: 'Python: Loops - Part 2',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/aircAruvnKk?si=premium_mode',
        sources: [
            { title: 'Official Documentation', url: 'https://developer.mozilla.org/' },
            { title: 'Architect Archives', url: '#' }
        ],
        story: `<div class="quad-track"><div class="track-section tech"><h4>💻 1. Core Mechanics</h4><p>Mastering this concept requires understanding the underlying synthetic logic. In enterprise computing, this is the foundational bedrock.</p></div><div class="track-section health"><h4>🏥 2. Bio-Systems</h4><p>Data science in healthcare relies on absolute precision. We apply this logic to sequence genomic arrays.</p></div><div class="track-section bio"><h4>🧬 3. Neural Architecture</h4><p>Information must flow efficiently like a biological synapse. Optimize your code.</p></div><div class="track-section lab"><h4>🧪 4. God-Mode Lab</h4><p><strong>Mission:</strong> Locate the critical node anomaly to restore integrity.</p></div></div>`,
        task: {
            type: 'find-value',
            targetColumn: 'status',
            condition: (val) => val === 'CRITICAL',
            successMessage: "System Override Successful. Node unlocked. +100 XP.",
            errorMessage: "Locate the CRITICAL status node."
        },
        data: [
          {
                    "id": 4601,
                    "value": "Alpha_Node",
                    "metric": "0.45",
                    "status": "Active"
          },
          {
                    "id": 8936,
                    "value": "Beta_Node",
                    "metric": "0.89",
                    "status": "Active"
          },
          {
                    "id": 2780,
                    "value": "Omega_Node",
                    "metric": "0.01",
                    "status": "CRITICAL"
          },
          {
                    "id": 3638,
                    "value": "Zeta_Node",
                    "metric": "1.00",
                    "status": "Active"
          }
]
    },
    {
        id: 'lesson-w24-d3',
        title: 'Python: Loops - Part 3',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/rpkpK_n2ad0?si=premium_mode',
        sources: [
            { title: 'Official Documentation', url: 'https://developer.mozilla.org/' },
            { title: 'Architect Archives', url: '#' }
        ],
        story: `<div class="quad-track"><div class="track-section tech"><h4>💻 1. Core Mechanics</h4><p>Mastering this concept requires understanding the underlying synthetic logic. In enterprise computing, this is the foundational bedrock.</p></div><div class="track-section health"><h4>🏥 2. Bio-Systems</h4><p>Data science in healthcare relies on absolute precision. We apply this logic to sequence genomic arrays.</p></div><div class="track-section bio"><h4>🧬 3. Neural Architecture</h4><p>Information must flow efficiently like a biological synapse. Optimize your code.</p></div><div class="track-section lab"><h4>🧪 4. God-Mode Lab</h4><p><strong>Mission:</strong> Locate the critical node anomaly to restore integrity.</p></div></div>`,
        task: {
            type: 'find-value',
            targetColumn: 'anomaly',
            condition: (val) => val === 'True',
            successMessage: "System Override Successful. Node unlocked. +100 XP.",
            errorMessage: "Find the True anomaly flag."
        },
        data: [
          {
                    "key": "Patient_XYZ",
                    "vitals": "Stable",
                    "heart_rate": "72",
                    "anomaly": "False"
          },
          {
                    "key": "Patient_ABC",
                    "vitals": "Unstable",
                    "heart_rate": "145",
                    "anomaly": "True"
          },
          {
                    "key": "Patient_LMN",
                    "vitals": "Stable",
                    "heart_rate": "65",
                    "anomaly": "False"
          },
          {
                    "key": "Patient_QRS",
                    "vitals": "Stable",
                    "heart_rate": "80",
                    "anomaly": "False"
          }
]
    },
    {
        id: 'lesson-w24-d4',
        title: 'Python: Loops - Part 4',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/aircAruvnKk?si=premium_mode',
        sources: [
            { title: 'Official Documentation', url: 'https://developer.mozilla.org/' },
            { title: 'Architect Archives', url: '#' }
        ],
        story: `<div class="quad-track"><div class="track-section tech"><h4>💻 1. Core Mechanics</h4><p>Mastering this concept requires understanding the underlying synthetic logic. In enterprise computing, this is the foundational bedrock.</p></div><div class="track-section health"><h4>🏥 2. Bio-Systems</h4><p>Data science in healthcare relies on absolute precision. We apply this logic to sequence genomic arrays.</p></div><div class="track-section bio"><h4>🧬 3. Neural Architecture</h4><p>Information must flow efficiently like a biological synapse. Optimize your code.</p></div><div class="track-section lab"><h4>🧪 4. God-Mode Lab</h4><p><strong>Mission:</strong> Locate the critical node anomaly to restore integrity.</p></div></div>`,
        task: {
            type: 'find-value',
            targetColumn: 'status',
            condition: (val) => val === 'CRITICAL',
            successMessage: "System Override Successful. Node unlocked. +100 XP.",
            errorMessage: "Locate the CRITICAL status node."
        },
        data: [
          {
                    "id": 7704,
                    "value": "Alpha_Node",
                    "metric": "0.45",
                    "status": "Active"
          },
          {
                    "id": 7883,
                    "value": "Beta_Node",
                    "metric": "0.89",
                    "status": "Active"
          },
          {
                    "id": 1354,
                    "value": "Omega_Node",
                    "metric": "0.01",
                    "status": "CRITICAL"
          },
          {
                    "id": 3093,
                    "value": "Zeta_Node",
                    "metric": "1.00",
                    "status": "Active"
          }
]
    },
    {
        id: 'lesson-w24-d5',
        title: 'Python: Loops - Part 5',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/rpkpK_n2ad0?si=premium_mode',
        sources: [
            { title: 'Official Documentation', url: 'https://developer.mozilla.org/' },
            { title: 'Architect Archives', url: '#' }
        ],
        story: `<div class="quad-track"><div class="track-section tech"><h4>💻 1. Core Mechanics</h4><p>Mastering this concept requires understanding the underlying synthetic logic. In enterprise computing, this is the foundational bedrock.</p></div><div class="track-section health"><h4>🏥 2. Bio-Systems</h4><p>Data science in healthcare relies on absolute precision. We apply this logic to sequence genomic arrays.</p></div><div class="track-section bio"><h4>🧬 3. Neural Architecture</h4><p>Information must flow efficiently like a biological synapse. Optimize your code.</p></div><div class="track-section lab"><h4>🧪 4. God-Mode Lab</h4><p><strong>Mission:</strong> Locate the critical node anomaly to restore integrity.</p></div></div>`,
        task: {
            type: 'find-value',
            targetColumn: 'status',
            condition: (val) => val === 'CRITICAL',
            successMessage: "System Override Successful. Node unlocked. +100 XP.",
            errorMessage: "Locate the CRITICAL status node."
        },
        data: [
          {
                    "id": 8580,
                    "value": "Alpha_Node",
                    "metric": "0.45",
                    "status": "Active"
          },
          {
                    "id": 1826,
                    "value": "Beta_Node",
                    "metric": "0.89",
                    "status": "Active"
          },
          {
                    "id": 4398,
                    "value": "Omega_Node",
                    "metric": "0.01",
                    "status": "CRITICAL"
          },
          {
                    "id": 6062,
                    "value": "Zeta_Node",
                    "metric": "1.00",
                    "status": "Active"
          }
]
    },
    {
        id: 'lesson-w24-d6',
        title: 'Python: Loops - Part 6',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/aircAruvnKk?si=premium_mode',
        sources: [
            { title: 'Official Documentation', url: 'https://developer.mozilla.org/' },
            { title: 'Architect Archives', url: '#' }
        ],
        story: `<div class="quad-track"><div class="track-section tech"><h4>💻 1. Core Mechanics</h4><p>Mastering this concept requires understanding the underlying synthetic logic. In enterprise computing, this is the foundational bedrock.</p></div><div class="track-section health"><h4>🏥 2. Bio-Systems</h4><p>Data science in healthcare relies on absolute precision. We apply this logic to sequence genomic arrays.</p></div><div class="track-section bio"><h4>🧬 3. Neural Architecture</h4><p>Information must flow efficiently like a biological synapse. Optimize your code.</p></div><div class="track-section lab"><h4>🧪 4. God-Mode Lab</h4><p><strong>Mission:</strong> Locate the critical node anomaly to restore integrity.</p></div></div>`,
        task: {
            type: 'find-value',
            targetColumn: 'status',
            condition: (val) => val === 'CRITICAL',
            successMessage: "System Override Successful. Node unlocked. +100 XP.",
            errorMessage: "Locate the CRITICAL status node."
        },
        data: [
          {
                    "id": 9094,
                    "value": "Alpha_Node",
                    "metric": "0.45",
                    "status": "Active"
          },
          {
                    "id": 3147,
                    "value": "Beta_Node",
                    "metric": "0.89",
                    "status": "Active"
          },
          {
                    "id": 1048,
                    "value": "Omega_Node",
                    "metric": "0.01",
                    "status": "CRITICAL"
          },
          {
                    "id": 1402,
                    "value": "Zeta_Node",
                    "metric": "1.00",
                    "status": "Active"
          }
]
    },
    {
        id: 'lesson-w24-d7',
        title: 'Weekly Concept Review',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/aircAruvnKk?si=premium_mode',
        sources: [
            { title: 'Official Documentation', url: 'https://developer.mozilla.org/' },
            { title: 'Architect Archives', url: '#' }
        ],
        story: `<div class="quad-track"><div class="track-section tech"><h4>💻 1. Core Mechanics</h4><p>Mastering this concept requires understanding the underlying synthetic logic. In enterprise computing, this is the foundational bedrock.</p></div><div class="track-section health"><h4>🏥 2. Bio-Systems</h4><p>Data science in healthcare relies on absolute precision. We apply this logic to sequence genomic arrays.</p></div><div class="track-section bio"><h4>🧬 3. Neural Architecture</h4><p>Information must flow efficiently like a biological synapse. Optimize your code.</p></div><div class="track-section lab"><h4>🧪 4. God-Mode Lab</h4><p><strong>Mission:</strong> Locate the critical node anomaly to restore integrity.</p></div></div>`,
        task: {
            type: 'find-value',
            targetColumn: 'status',
            condition: (val) => val === 'CRITICAL',
            successMessage: "System Override Successful. Node unlocked. +100 XP.",
            errorMessage: "Locate the CRITICAL status node."
        },
        data: [
          {
                    "id": 7017,
                    "value": "Alpha_Node",
                    "metric": "0.45",
                    "status": "Active"
          },
          {
                    "id": 8852,
                    "value": "Beta_Node",
                    "metric": "0.89",
                    "status": "Active"
          },
          {
                    "id": 6700,
                    "value": "Omega_Node",
                    "metric": "0.01",
                    "status": "CRITICAL"
          },
          {
                    "id": 2558,
                    "value": "Zeta_Node",
                    "metric": "1.00",
                    "status": "Active"
          }
]
    },
    {
        id: 'lesson-w25-d1',
        title: 'Python: Functions - Part 1',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/HcqpanDadyQ?si=premium_mode',
        sources: [
            { title: 'Official Documentation', url: 'https://developer.mozilla.org/' },
            { title: 'Architect Archives', url: '#' }
        ],
        story: `<div class="quad-track"><div class="track-section tech"><h4>💻 1. Algorithmic Processing</h4><p>This module focuses on high-speed data parsing. Time Complexity (Big O) prevents server timeouts.</p></div><div class="track-section health"><h4>🏥 2. Clinical Data Streams</h4><p>Hospitals generate terabytes of telemetry hourly. Structuring this raw byte data is critical.</p></div><div class="track-section bio"><h4>🧬 3. Evolutionary Algorithms</h4><p>Algorithms evolve through mutation and selection. Structure ML pipelines to adapt dynamically.</p></div><div class="track-section lab"><h4>🧪 4. God-Mode Lab</h4><p><strong>Mission:</strong> The pipeline has stalled. Isolate the errant data frame.</p></div></div>`,
        task: {
            type: 'find-value',
            targetColumn: 'status',
            condition: (val) => val === 'CRITICAL',
            successMessage: "System Override Successful. Node unlocked. +100 XP.",
            errorMessage: "Locate the CRITICAL status node."
        },
        data: [
          {
                    "id": 9635,
                    "value": "Alpha_Node",
                    "metric": "0.45",
                    "status": "Active"
          },
          {
                    "id": 4888,
                    "value": "Beta_Node",
                    "metric": "0.89",
                    "status": "Active"
          },
          {
                    "id": 1588,
                    "value": "Omega_Node",
                    "metric": "0.01",
                    "status": "CRITICAL"
          },
          {
                    "id": 8321,
                    "value": "Zeta_Node",
                    "metric": "1.00",
                    "status": "Active"
          }
]
    },
    {
        id: 'lesson-w25-d2',
        title: 'Python: Functions - Part 2',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/aircAruvnKk?si=premium_mode',
        sources: [
            { title: 'Official Documentation', url: 'https://developer.mozilla.org/' },
            { title: 'Architect Archives', url: '#' }
        ],
        story: `<div class="quad-track"><div class="track-section tech"><h4>💻 1. Core Mechanics</h4><p>Mastering this concept requires understanding the underlying synthetic logic. In enterprise computing, this is the foundational bedrock.</p></div><div class="track-section health"><h4>🏥 2. Bio-Systems</h4><p>Data science in healthcare relies on absolute precision. We apply this logic to sequence genomic arrays.</p></div><div class="track-section bio"><h4>🧬 3. Neural Architecture</h4><p>Information must flow efficiently like a biological synapse. Optimize your code.</p></div><div class="track-section lab"><h4>🧪 4. God-Mode Lab</h4><p><strong>Mission:</strong> Locate the critical node anomaly to restore integrity.</p></div></div>`,
        task: {
            type: 'find-value',
            targetColumn: 'status',
            condition: (val) => val === 'CRITICAL',
            successMessage: "System Override Successful. Node unlocked. +100 XP.",
            errorMessage: "Locate the CRITICAL status node."
        },
        data: [
          {
                    "id": 6848,
                    "value": "Alpha_Node",
                    "metric": "0.45",
                    "status": "Active"
          },
          {
                    "id": 4027,
                    "value": "Beta_Node",
                    "metric": "0.89",
                    "status": "Active"
          },
          {
                    "id": 4549,
                    "value": "Omega_Node",
                    "metric": "0.01",
                    "status": "CRITICAL"
          },
          {
                    "id": 3458,
                    "value": "Zeta_Node",
                    "metric": "1.00",
                    "status": "Active"
          }
]
    },
    {
        id: 'lesson-w25-d3',
        title: 'Python: Functions - Part 3',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/HcqpanDadyQ?si=premium_mode',
        sources: [
            { title: 'Official Documentation', url: 'https://developer.mozilla.org/' },
            { title: 'Architect Archives', url: '#' }
        ],
        story: `<div class="quad-track"><div class="track-section tech"><h4>💻 1. Core Mechanics</h4><p>Mastering this concept requires understanding the underlying synthetic logic. In enterprise computing, this is the foundational bedrock.</p></div><div class="track-section health"><h4>🏥 2. Bio-Systems</h4><p>Data science in healthcare relies on absolute precision. We apply this logic to sequence genomic arrays.</p></div><div class="track-section bio"><h4>🧬 3. Neural Architecture</h4><p>Information must flow efficiently like a biological synapse. Optimize your code.</p></div><div class="track-section lab"><h4>🧪 4. God-Mode Lab</h4><p><strong>Mission:</strong> Locate the critical node anomaly to restore integrity.</p></div></div>`,
        task: {
            type: 'find-value',
            targetColumn: 'anomaly',
            condition: (val) => val === 'True',
            successMessage: "System Override Successful. Node unlocked. +100 XP.",
            errorMessage: "Find the True anomaly flag."
        },
        data: [
          {
                    "key": "Patient_XYZ",
                    "vitals": "Stable",
                    "heart_rate": "72",
                    "anomaly": "False"
          },
          {
                    "key": "Patient_ABC",
                    "vitals": "Unstable",
                    "heart_rate": "145",
                    "anomaly": "True"
          },
          {
                    "key": "Patient_LMN",
                    "vitals": "Stable",
                    "heart_rate": "65",
                    "anomaly": "False"
          },
          {
                    "key": "Patient_QRS",
                    "vitals": "Stable",
                    "heart_rate": "80",
                    "anomaly": "False"
          }
]
    },
    {
        id: 'lesson-w25-d4',
        title: 'Python: Functions - Part 4',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/zOjov-2OZ0E?si=premium_mode',
        sources: [
            { title: 'Official Documentation', url: 'https://developer.mozilla.org/' },
            { title: 'Architect Archives', url: '#' }
        ],
        story: `<div class="quad-track"><div class="track-section tech"><h4>💻 1. Algorithmic Processing</h4><p>This module focuses on high-speed data parsing. Time Complexity (Big O) prevents server timeouts.</p></div><div class="track-section health"><h4>🏥 2. Clinical Data Streams</h4><p>Hospitals generate terabytes of telemetry hourly. Structuring this raw byte data is critical.</p></div><div class="track-section bio"><h4>🧬 3. Evolutionary Algorithms</h4><p>Algorithms evolve through mutation and selection. Structure ML pipelines to adapt dynamically.</p></div><div class="track-section lab"><h4>🧪 4. God-Mode Lab</h4><p><strong>Mission:</strong> The pipeline has stalled. Isolate the errant data frame.</p></div></div>`,
        task: {
            type: 'find-value',
            targetColumn: 'status',
            condition: (val) => val === 'CRITICAL',
            successMessage: "System Override Successful. Node unlocked. +100 XP.",
            errorMessage: "Locate the CRITICAL status node."
        },
        data: [
          {
                    "id": 6661,
                    "value": "Alpha_Node",
                    "metric": "0.45",
                    "status": "Active"
          },
          {
                    "id": 4372,
                    "value": "Beta_Node",
                    "metric": "0.89",
                    "status": "Active"
          },
          {
                    "id": 4541,
                    "value": "Omega_Node",
                    "metric": "0.01",
                    "status": "CRITICAL"
          },
          {
                    "id": 1036,
                    "value": "Zeta_Node",
                    "metric": "1.00",
                    "status": "Active"
          }
]
    },
    {
        id: 'lesson-w25-d5',
        title: 'Python: Functions - Part 5',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/aircAruvnKk?si=premium_mode',
        sources: [
            { title: 'Official Documentation', url: 'https://developer.mozilla.org/' },
            { title: 'Architect Archives', url: '#' }
        ],
        story: `<div class="quad-track"><div class="track-section tech"><h4>💻 1. Algorithmic Processing</h4><p>This module focuses on high-speed data parsing. Time Complexity (Big O) prevents server timeouts.</p></div><div class="track-section health"><h4>🏥 2. Clinical Data Streams</h4><p>Hospitals generate terabytes of telemetry hourly. Structuring this raw byte data is critical.</p></div><div class="track-section bio"><h4>🧬 3. Evolutionary Algorithms</h4><p>Algorithms evolve through mutation and selection. Structure ML pipelines to adapt dynamically.</p></div><div class="track-section lab"><h4>🧪 4. God-Mode Lab</h4><p><strong>Mission:</strong> The pipeline has stalled. Isolate the errant data frame.</p></div></div>`,
        task: {
            type: 'find-value',
            targetColumn: 'anomaly',
            condition: (val) => val === 'True',
            successMessage: "System Override Successful. Node unlocked. +100 XP.",
            errorMessage: "Find the True anomaly flag."
        },
        data: [
          {
                    "key": "Patient_XYZ",
                    "vitals": "Stable",
                    "heart_rate": "72",
                    "anomaly": "False"
          },
          {
                    "key": "Patient_ABC",
                    "vitals": "Unstable",
                    "heart_rate": "145",
                    "anomaly": "True"
          },
          {
                    "key": "Patient_LMN",
                    "vitals": "Stable",
                    "heart_rate": "65",
                    "anomaly": "False"
          },
          {
                    "key": "Patient_QRS",
                    "vitals": "Stable",
                    "heart_rate": "80",
                    "anomaly": "False"
          }
]
    },
    {
        id: 'lesson-w25-d6',
        title: 'Python: Functions - Part 6',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/aircAruvnKk?si=premium_mode',
        sources: [
            { title: 'Official Documentation', url: 'https://developer.mozilla.org/' },
            { title: 'Architect Archives', url: '#' }
        ],
        story: `<div class="quad-track"><div class="track-section tech"><h4>💻 1. Algorithmic Processing</h4><p>This module focuses on high-speed data parsing. Time Complexity (Big O) prevents server timeouts.</p></div><div class="track-section health"><h4>🏥 2. Clinical Data Streams</h4><p>Hospitals generate terabytes of telemetry hourly. Structuring this raw byte data is critical.</p></div><div class="track-section bio"><h4>🧬 3. Evolutionary Algorithms</h4><p>Algorithms evolve through mutation and selection. Structure ML pipelines to adapt dynamically.</p></div><div class="track-section lab"><h4>🧪 4. God-Mode Lab</h4><p><strong>Mission:</strong> The pipeline has stalled. Isolate the errant data frame.</p></div></div>`,
        task: {
            type: 'find-value',
            targetColumn: 'anomaly',
            condition: (val) => val === 'True',
            successMessage: "System Override Successful. Node unlocked. +100 XP.",
            errorMessage: "Find the True anomaly flag."
        },
        data: [
          {
                    "key": "Patient_XYZ",
                    "vitals": "Stable",
                    "heart_rate": "72",
                    "anomaly": "False"
          },
          {
                    "key": "Patient_ABC",
                    "vitals": "Unstable",
                    "heart_rate": "145",
                    "anomaly": "True"
          },
          {
                    "key": "Patient_LMN",
                    "vitals": "Stable",
                    "heart_rate": "65",
                    "anomaly": "False"
          },
          {
                    "key": "Patient_QRS",
                    "vitals": "Stable",
                    "heart_rate": "80",
                    "anomaly": "False"
          }
]
    },
    {
        id: 'lesson-w25-d7',
        title: 'Weekly Concept Review',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/zOjov-2OZ0E?si=premium_mode',
        sources: [
            { title: 'Official Documentation', url: 'https://developer.mozilla.org/' },
            { title: 'Architect Archives', url: '#' }
        ],
        story: `<div class="quad-track"><div class="track-section tech"><h4>💻 1. Core Mechanics</h4><p>Mastering this concept requires understanding the underlying synthetic logic. In enterprise computing, this is the foundational bedrock.</p></div><div class="track-section health"><h4>🏥 2. Bio-Systems</h4><p>Data science in healthcare relies on absolute precision. We apply this logic to sequence genomic arrays.</p></div><div class="track-section bio"><h4>🧬 3. Neural Architecture</h4><p>Information must flow efficiently like a biological synapse. Optimize your code.</p></div><div class="track-section lab"><h4>🧪 4. God-Mode Lab</h4><p><strong>Mission:</strong> Locate the critical node anomaly to restore integrity.</p></div></div>`,
        task: {
            type: 'find-value',
            targetColumn: 'status',
            condition: (val) => val === 'CRITICAL',
            successMessage: "System Override Successful. Node unlocked. +100 XP.",
            errorMessage: "Locate the CRITICAL status node."
        },
        data: [
          {
                    "id": 4307,
                    "value": "Alpha_Node",
                    "metric": "0.45",
                    "status": "Active"
          },
          {
                    "id": 5500,
                    "value": "Beta_Node",
                    "metric": "0.89",
                    "status": "Active"
          },
          {
                    "id": 9592,
                    "value": "Omega_Node",
                    "metric": "0.01",
                    "status": "CRITICAL"
          },
          {
                    "id": 7076,
                    "value": "Zeta_Node",
                    "metric": "1.00",
                    "status": "Active"
          }
]
    },
    {
        id: 'lesson-w26-d1',
        title: 'Python: Data Structures - Part 1',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/HcqpanDadyQ?si=premium_mode',
        sources: [
            { title: 'Official Documentation', url: 'https://developer.mozilla.org/' },
            { title: 'Architect Archives', url: '#' }
        ],
        story: `<div class="quad-track"><div class="track-section tech"><h4>💻 1. Algorithmic Processing</h4><p>This module focuses on high-speed data parsing. Time Complexity (Big O) prevents server timeouts.</p></div><div class="track-section health"><h4>🏥 2. Clinical Data Streams</h4><p>Hospitals generate terabytes of telemetry hourly. Structuring this raw byte data is critical.</p></div><div class="track-section bio"><h4>🧬 3. Evolutionary Algorithms</h4><p>Algorithms evolve through mutation and selection. Structure ML pipelines to adapt dynamically.</p></div><div class="track-section lab"><h4>🧪 4. God-Mode Lab</h4><p><strong>Mission:</strong> The pipeline has stalled. Isolate the errant data frame.</p></div></div>`,
        task: {
            type: 'find-value',
            targetColumn: 'anomaly',
            condition: (val) => val === 'True',
            successMessage: "System Override Successful. Node unlocked. +100 XP.",
            errorMessage: "Find the True anomaly flag."
        },
        data: [
          {
                    "key": "Patient_XYZ",
                    "vitals": "Stable",
                    "heart_rate": "72",
                    "anomaly": "False"
          },
          {
                    "key": "Patient_ABC",
                    "vitals": "Unstable",
                    "heart_rate": "145",
                    "anomaly": "True"
          },
          {
                    "key": "Patient_LMN",
                    "vitals": "Stable",
                    "heart_rate": "65",
                    "anomaly": "False"
          },
          {
                    "key": "Patient_QRS",
                    "vitals": "Stable",
                    "heart_rate": "80",
                    "anomaly": "False"
          }
]
    },
    {
        id: 'lesson-w26-d2',
        title: 'Python: Data Structures - Part 2',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/rpkpK_n2ad0?si=premium_mode',
        sources: [
            { title: 'Official Documentation', url: 'https://developer.mozilla.org/' },
            { title: 'Architect Archives', url: '#' }
        ],
        story: `<div class="quad-track"><div class="track-section tech"><h4>💻 1. Core Mechanics</h4><p>Mastering this concept requires understanding the underlying synthetic logic. In enterprise computing, this is the foundational bedrock.</p></div><div class="track-section health"><h4>🏥 2. Bio-Systems</h4><p>Data science in healthcare relies on absolute precision. We apply this logic to sequence genomic arrays.</p></div><div class="track-section bio"><h4>🧬 3. Neural Architecture</h4><p>Information must flow efficiently like a biological synapse. Optimize your code.</p></div><div class="track-section lab"><h4>🧪 4. God-Mode Lab</h4><p><strong>Mission:</strong> Locate the critical node anomaly to restore integrity.</p></div></div>`,
        task: {
            type: 'find-value',
            targetColumn: 'status',
            condition: (val) => val === 'CRITICAL',
            successMessage: "System Override Successful. Node unlocked. +100 XP.",
            errorMessage: "Locate the CRITICAL status node."
        },
        data: [
          {
                    "id": 3381,
                    "value": "Alpha_Node",
                    "metric": "0.45",
                    "status": "Active"
          },
          {
                    "id": 1936,
                    "value": "Beta_Node",
                    "metric": "0.89",
                    "status": "Active"
          },
          {
                    "id": 6257,
                    "value": "Omega_Node",
                    "metric": "0.01",
                    "status": "CRITICAL"
          },
          {
                    "id": 8815,
                    "value": "Zeta_Node",
                    "metric": "1.00",
                    "status": "Active"
          }
]
    },
    {
        id: 'lesson-w26-d3',
        title: 'Python: Data Structures - Part 3',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/HcqpanDadyQ?si=premium_mode',
        sources: [
            { title: 'Official Documentation', url: 'https://developer.mozilla.org/' },
            { title: 'Architect Archives', url: '#' }
        ],
        story: `<div class="quad-track"><div class="track-section tech"><h4>💻 1. Core Mechanics</h4><p>Mastering this concept requires understanding the underlying synthetic logic. In enterprise computing, this is the foundational bedrock.</p></div><div class="track-section health"><h4>🏥 2. Bio-Systems</h4><p>Data science in healthcare relies on absolute precision. We apply this logic to sequence genomic arrays.</p></div><div class="track-section bio"><h4>🧬 3. Neural Architecture</h4><p>Information must flow efficiently like a biological synapse. Optimize your code.</p></div><div class="track-section lab"><h4>🧪 4. God-Mode Lab</h4><p><strong>Mission:</strong> Locate the critical node anomaly to restore integrity.</p></div></div>`,
        task: {
            type: 'find-value',
            targetColumn: 'status',
            condition: (val) => val === 'CRITICAL',
            successMessage: "System Override Successful. Node unlocked. +100 XP.",
            errorMessage: "Locate the CRITICAL status node."
        },
        data: [
          {
                    "id": 7548,
                    "value": "Alpha_Node",
                    "metric": "0.45",
                    "status": "Active"
          },
          {
                    "id": 3515,
                    "value": "Beta_Node",
                    "metric": "0.89",
                    "status": "Active"
          },
          {
                    "id": 7900,
                    "value": "Omega_Node",
                    "metric": "0.01",
                    "status": "CRITICAL"
          },
          {
                    "id": 8559,
                    "value": "Zeta_Node",
                    "metric": "1.00",
                    "status": "Active"
          }
]
    },
    {
        id: 'lesson-w26-d4',
        title: 'Python: Data Structures - Part 4',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/aircAruvnKk?si=premium_mode',
        sources: [
            { title: 'Official Documentation', url: 'https://developer.mozilla.org/' },
            { title: 'Architect Archives', url: '#' }
        ],
        story: `<div class="quad-track"><div class="track-section tech"><h4>💻 1. Algorithmic Processing</h4><p>This module focuses on high-speed data parsing. Time Complexity (Big O) prevents server timeouts.</p></div><div class="track-section health"><h4>🏥 2. Clinical Data Streams</h4><p>Hospitals generate terabytes of telemetry hourly. Structuring this raw byte data is critical.</p></div><div class="track-section bio"><h4>🧬 3. Evolutionary Algorithms</h4><p>Algorithms evolve through mutation and selection. Structure ML pipelines to adapt dynamically.</p></div><div class="track-section lab"><h4>🧪 4. God-Mode Lab</h4><p><strong>Mission:</strong> The pipeline has stalled. Isolate the errant data frame.</p></div></div>`,
        task: {
            type: 'find-value',
            targetColumn: 'anomaly',
            condition: (val) => val === 'True',
            successMessage: "System Override Successful. Node unlocked. +100 XP.",
            errorMessage: "Find the True anomaly flag."
        },
        data: [
          {
                    "key": "Patient_XYZ",
                    "vitals": "Stable",
                    "heart_rate": "72",
                    "anomaly": "False"
          },
          {
                    "key": "Patient_ABC",
                    "vitals": "Unstable",
                    "heart_rate": "145",
                    "anomaly": "True"
          },
          {
                    "key": "Patient_LMN",
                    "vitals": "Stable",
                    "heart_rate": "65",
                    "anomaly": "False"
          },
          {
                    "key": "Patient_QRS",
                    "vitals": "Stable",
                    "heart_rate": "80",
                    "anomaly": "False"
          }
]
    },
    {
        id: 'lesson-w26-d5',
        title: 'Python: Data Structures - Part 5',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/zOjov-2OZ0E?si=premium_mode',
        sources: [
            { title: 'Official Documentation', url: 'https://developer.mozilla.org/' },
            { title: 'Architect Archives', url: '#' }
        ],
        story: `<div class="quad-track"><div class="track-section tech"><h4>💻 1. Algorithmic Processing</h4><p>This module focuses on high-speed data parsing. Time Complexity (Big O) prevents server timeouts.</p></div><div class="track-section health"><h4>🏥 2. Clinical Data Streams</h4><p>Hospitals generate terabytes of telemetry hourly. Structuring this raw byte data is critical.</p></div><div class="track-section bio"><h4>🧬 3. Evolutionary Algorithms</h4><p>Algorithms evolve through mutation and selection. Structure ML pipelines to adapt dynamically.</p></div><div class="track-section lab"><h4>🧪 4. God-Mode Lab</h4><p><strong>Mission:</strong> The pipeline has stalled. Isolate the errant data frame.</p></div></div>`,
        task: {
            type: 'find-value',
            targetColumn: 'status',
            condition: (val) => val === 'CRITICAL',
            successMessage: "System Override Successful. Node unlocked. +100 XP.",
            errorMessage: "Locate the CRITICAL status node."
        },
        data: [
          {
                    "id": 9031,
                    "value": "Alpha_Node",
                    "metric": "0.45",
                    "status": "Active"
          },
          {
                    "id": 4727,
                    "value": "Beta_Node",
                    "metric": "0.89",
                    "status": "Active"
          },
          {
                    "id": 7301,
                    "value": "Omega_Node",
                    "metric": "0.01",
                    "status": "CRITICAL"
          },
          {
                    "id": 5548,
                    "value": "Zeta_Node",
                    "metric": "1.00",
                    "status": "Active"
          }
]
    },
    {
        id: 'lesson-w26-d6',
        title: 'Python: Data Structures - Part 6',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/rpkpK_n2ad0?si=premium_mode',
        sources: [
            { title: 'Official Documentation', url: 'https://developer.mozilla.org/' },
            { title: 'Architect Archives', url: '#' }
        ],
        story: `<div class="quad-track"><div class="track-section tech"><h4>💻 1. Algorithmic Processing</h4><p>This module focuses on high-speed data parsing. Time Complexity (Big O) prevents server timeouts.</p></div><div class="track-section health"><h4>🏥 2. Clinical Data Streams</h4><p>Hospitals generate terabytes of telemetry hourly. Structuring this raw byte data is critical.</p></div><div class="track-section bio"><h4>🧬 3. Evolutionary Algorithms</h4><p>Algorithms evolve through mutation and selection. Structure ML pipelines to adapt dynamically.</p></div><div class="track-section lab"><h4>🧪 4. God-Mode Lab</h4><p><strong>Mission:</strong> The pipeline has stalled. Isolate the errant data frame.</p></div></div>`,
        task: {
            type: 'find-value',
            targetColumn: 'anomaly',
            condition: (val) => val === 'True',
            successMessage: "System Override Successful. Node unlocked. +100 XP.",
            errorMessage: "Find the True anomaly flag."
        },
        data: [
          {
                    "key": "Patient_XYZ",
                    "vitals": "Stable",
                    "heart_rate": "72",
                    "anomaly": "False"
          },
          {
                    "key": "Patient_ABC",
                    "vitals": "Unstable",
                    "heart_rate": "145",
                    "anomaly": "True"
          },
          {
                    "key": "Patient_LMN",
                    "vitals": "Stable",
                    "heart_rate": "65",
                    "anomaly": "False"
          },
          {
                    "key": "Patient_QRS",
                    "vitals": "Stable",
                    "heart_rate": "80",
                    "anomaly": "False"
          }
]
    },
    {
        id: 'lesson-w26-d7',
        title: 'Weekly Concept Review',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/HcqpanDadyQ?si=premium_mode',
        sources: [
            { title: 'Official Documentation', url: 'https://developer.mozilla.org/' },
            { title: 'Architect Archives', url: '#' }
        ],
        story: `<div class="quad-track"><div class="track-section tech"><h4>💻 1. Algorithmic Processing</h4><p>This module focuses on high-speed data parsing. Time Complexity (Big O) prevents server timeouts.</p></div><div class="track-section health"><h4>🏥 2. Clinical Data Streams</h4><p>Hospitals generate terabytes of telemetry hourly. Structuring this raw byte data is critical.</p></div><div class="track-section bio"><h4>🧬 3. Evolutionary Algorithms</h4><p>Algorithms evolve through mutation and selection. Structure ML pipelines to adapt dynamically.</p></div><div class="track-section lab"><h4>🧪 4. God-Mode Lab</h4><p><strong>Mission:</strong> The pipeline has stalled. Isolate the errant data frame.</p></div></div>`,
        task: {
            type: 'find-value',
            targetColumn: 'anomaly',
            condition: (val) => val === 'True',
            successMessage: "System Override Successful. Node unlocked. +100 XP.",
            errorMessage: "Find the True anomaly flag."
        },
        data: [
          {
                    "key": "Patient_XYZ",
                    "vitals": "Stable",
                    "heart_rate": "72",
                    "anomaly": "False"
          },
          {
                    "key": "Patient_ABC",
                    "vitals": "Unstable",
                    "heart_rate": "145",
                    "anomaly": "True"
          },
          {
                    "key": "Patient_LMN",
                    "vitals": "Stable",
                    "heart_rate": "65",
                    "anomaly": "False"
          },
          {
                    "key": "Patient_QRS",
                    "vitals": "Stable",
                    "heart_rate": "80",
                    "anomaly": "False"
          }
]
    },
    {
        id: 'lesson-w27-d1',
        title: 'Python: Pandas Intro - Part 1',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/aircAruvnKk?si=premium_mode',
        sources: [
            { title: 'Official Documentation', url: 'https://developer.mozilla.org/' },
            { title: 'Architect Archives', url: '#' }
        ],
        story: `<div class="quad-track"><div class="track-section tech"><h4>💻 1. Algorithmic Processing</h4><p>This module focuses on high-speed data parsing. Time Complexity (Big O) prevents server timeouts.</p></div><div class="track-section health"><h4>🏥 2. Clinical Data Streams</h4><p>Hospitals generate terabytes of telemetry hourly. Structuring this raw byte data is critical.</p></div><div class="track-section bio"><h4>🧬 3. Evolutionary Algorithms</h4><p>Algorithms evolve through mutation and selection. Structure ML pipelines to adapt dynamically.</p></div><div class="track-section lab"><h4>🧪 4. God-Mode Lab</h4><p><strong>Mission:</strong> The pipeline has stalled. Isolate the errant data frame.</p></div></div>`,
        task: {
            type: 'find-value',
            targetColumn: 'anomaly',
            condition: (val) => val === 'True',
            successMessage: "System Override Successful. Node unlocked. +100 XP.",
            errorMessage: "Find the True anomaly flag."
        },
        data: [
          {
                    "key": "Patient_XYZ",
                    "vitals": "Stable",
                    "heart_rate": "72",
                    "anomaly": "False"
          },
          {
                    "key": "Patient_ABC",
                    "vitals": "Unstable",
                    "heart_rate": "145",
                    "anomaly": "True"
          },
          {
                    "key": "Patient_LMN",
                    "vitals": "Stable",
                    "heart_rate": "65",
                    "anomaly": "False"
          },
          {
                    "key": "Patient_QRS",
                    "vitals": "Stable",
                    "heart_rate": "80",
                    "anomaly": "False"
          }
]
    },
    {
        id: 'lesson-w27-d2',
        title: 'Python: Pandas Intro - Part 2',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/rpkpK_n2ad0?si=premium_mode',
        sources: [
            { title: 'Official Documentation', url: 'https://developer.mozilla.org/' },
            { title: 'Architect Archives', url: '#' }
        ],
        story: `<div class="quad-track"><div class="track-section tech"><h4>💻 1. Core Mechanics</h4><p>Mastering this concept requires understanding the underlying synthetic logic. In enterprise computing, this is the foundational bedrock.</p></div><div class="track-section health"><h4>🏥 2. Bio-Systems</h4><p>Data science in healthcare relies on absolute precision. We apply this logic to sequence genomic arrays.</p></div><div class="track-section bio"><h4>🧬 3. Neural Architecture</h4><p>Information must flow efficiently like a biological synapse. Optimize your code.</p></div><div class="track-section lab"><h4>🧪 4. God-Mode Lab</h4><p><strong>Mission:</strong> Locate the critical node anomaly to restore integrity.</p></div></div>`,
        task: {
            type: 'find-value',
            targetColumn: 'status',
            condition: (val) => val === 'CRITICAL',
            successMessage: "System Override Successful. Node unlocked. +100 XP.",
            errorMessage: "Locate the CRITICAL status node."
        },
        data: [
          {
                    "id": 4501,
                    "value": "Alpha_Node",
                    "metric": "0.45",
                    "status": "Active"
          },
          {
                    "id": 1211,
                    "value": "Beta_Node",
                    "metric": "0.89",
                    "status": "Active"
          },
          {
                    "id": 1347,
                    "value": "Omega_Node",
                    "metric": "0.01",
                    "status": "CRITICAL"
          },
          {
                    "id": 8288,
                    "value": "Zeta_Node",
                    "metric": "1.00",
                    "status": "Active"
          }
]
    },
    {
        id: 'lesson-w27-d3',
        title: 'Python: Pandas Intro - Part 3',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/HcqpanDadyQ?si=premium_mode',
        sources: [
            { title: 'Official Documentation', url: 'https://developer.mozilla.org/' },
            { title: 'Architect Archives', url: '#' }
        ],
        story: `<div class="quad-track"><div class="track-section tech"><h4>💻 1. Algorithmic Processing</h4><p>This module focuses on high-speed data parsing. Time Complexity (Big O) prevents server timeouts.</p></div><div class="track-section health"><h4>🏥 2. Clinical Data Streams</h4><p>Hospitals generate terabytes of telemetry hourly. Structuring this raw byte data is critical.</p></div><div class="track-section bio"><h4>🧬 3. Evolutionary Algorithms</h4><p>Algorithms evolve through mutation and selection. Structure ML pipelines to adapt dynamically.</p></div><div class="track-section lab"><h4>🧪 4. God-Mode Lab</h4><p><strong>Mission:</strong> The pipeline has stalled. Isolate the errant data frame.</p></div></div>`,
        task: {
            type: 'find-value',
            targetColumn: 'anomaly',
            condition: (val) => val === 'True',
            successMessage: "System Override Successful. Node unlocked. +100 XP.",
            errorMessage: "Find the True anomaly flag."
        },
        data: [
          {
                    "key": "Patient_XYZ",
                    "vitals": "Stable",
                    "heart_rate": "72",
                    "anomaly": "False"
          },
          {
                    "key": "Patient_ABC",
                    "vitals": "Unstable",
                    "heart_rate": "145",
                    "anomaly": "True"
          },
          {
                    "key": "Patient_LMN",
                    "vitals": "Stable",
                    "heart_rate": "65",
                    "anomaly": "False"
          },
          {
                    "key": "Patient_QRS",
                    "vitals": "Stable",
                    "heart_rate": "80",
                    "anomaly": "False"
          }
]
    },
    {
        id: 'lesson-w27-d4',
        title: 'Python: Pandas Intro - Part 4',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/HcqpanDadyQ?si=premium_mode',
        sources: [
            { title: 'Official Documentation', url: 'https://developer.mozilla.org/' },
            { title: 'Architect Archives', url: '#' }
        ],
        story: `<div class="quad-track"><div class="track-section tech"><h4>💻 1. Algorithmic Processing</h4><p>This module focuses on high-speed data parsing. Time Complexity (Big O) prevents server timeouts.</p></div><div class="track-section health"><h4>🏥 2. Clinical Data Streams</h4><p>Hospitals generate terabytes of telemetry hourly. Structuring this raw byte data is critical.</p></div><div class="track-section bio"><h4>🧬 3. Evolutionary Algorithms</h4><p>Algorithms evolve through mutation and selection. Structure ML pipelines to adapt dynamically.</p></div><div class="track-section lab"><h4>🧪 4. God-Mode Lab</h4><p><strong>Mission:</strong> The pipeline has stalled. Isolate the errant data frame.</p></div></div>`,
        task: {
            type: 'find-value',
            targetColumn: 'status',
            condition: (val) => val === 'CRITICAL',
            successMessage: "System Override Successful. Node unlocked. +100 XP.",
            errorMessage: "Locate the CRITICAL status node."
        },
        data: [
          {
                    "id": 9739,
                    "value": "Alpha_Node",
                    "metric": "0.45",
                    "status": "Active"
          },
          {
                    "id": 8246,
                    "value": "Beta_Node",
                    "metric": "0.89",
                    "status": "Active"
          },
          {
                    "id": 8986,
                    "value": "Omega_Node",
                    "metric": "0.01",
                    "status": "CRITICAL"
          },
          {
                    "id": 1098,
                    "value": "Zeta_Node",
                    "metric": "1.00",
                    "status": "Active"
          }
]
    },
    {
        id: 'lesson-w27-d5',
        title: 'Python: Pandas Intro - Part 5',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/rpkpK_n2ad0?si=premium_mode',
        sources: [
            { title: 'Official Documentation', url: 'https://developer.mozilla.org/' },
            { title: 'Architect Archives', url: '#' }
        ],
        story: `<div class="quad-track"><div class="track-section tech"><h4>💻 1. Algorithmic Processing</h4><p>This module focuses on high-speed data parsing. Time Complexity (Big O) prevents server timeouts.</p></div><div class="track-section health"><h4>🏥 2. Clinical Data Streams</h4><p>Hospitals generate terabytes of telemetry hourly. Structuring this raw byte data is critical.</p></div><div class="track-section bio"><h4>🧬 3. Evolutionary Algorithms</h4><p>Algorithms evolve through mutation and selection. Structure ML pipelines to adapt dynamically.</p></div><div class="track-section lab"><h4>🧪 4. God-Mode Lab</h4><p><strong>Mission:</strong> The pipeline has stalled. Isolate the errant data frame.</p></div></div>`,
        task: {
            type: 'find-value',
            targetColumn: 'anomaly',
            condition: (val) => val === 'True',
            successMessage: "System Override Successful. Node unlocked. +100 XP.",
            errorMessage: "Find the True anomaly flag."
        },
        data: [
          {
                    "key": "Patient_XYZ",
                    "vitals": "Stable",
                    "heart_rate": "72",
                    "anomaly": "False"
          },
          {
                    "key": "Patient_ABC",
                    "vitals": "Unstable",
                    "heart_rate": "145",
                    "anomaly": "True"
          },
          {
                    "key": "Patient_LMN",
                    "vitals": "Stable",
                    "heart_rate": "65",
                    "anomaly": "False"
          },
          {
                    "key": "Patient_QRS",
                    "vitals": "Stable",
                    "heart_rate": "80",
                    "anomaly": "False"
          }
]
    },
    {
        id: 'lesson-w27-d6',
        title: 'Python: Pandas Intro - Part 6',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/aircAruvnKk?si=premium_mode',
        sources: [
            { title: 'Official Documentation', url: 'https://developer.mozilla.org/' },
            { title: 'Architect Archives', url: '#' }
        ],
        story: `<div class="quad-track"><div class="track-section tech"><h4>💻 1. Algorithmic Processing</h4><p>This module focuses on high-speed data parsing. Time Complexity (Big O) prevents server timeouts.</p></div><div class="track-section health"><h4>🏥 2. Clinical Data Streams</h4><p>Hospitals generate terabytes of telemetry hourly. Structuring this raw byte data is critical.</p></div><div class="track-section bio"><h4>🧬 3. Evolutionary Algorithms</h4><p>Algorithms evolve through mutation and selection. Structure ML pipelines to adapt dynamically.</p></div><div class="track-section lab"><h4>🧪 4. God-Mode Lab</h4><p><strong>Mission:</strong> The pipeline has stalled. Isolate the errant data frame.</p></div></div>`,
        task: {
            type: 'find-value',
            targetColumn: 'anomaly',
            condition: (val) => val === 'True',
            successMessage: "System Override Successful. Node unlocked. +100 XP.",
            errorMessage: "Find the True anomaly flag."
        },
        data: [
          {
                    "key": "Patient_XYZ",
                    "vitals": "Stable",
                    "heart_rate": "72",
                    "anomaly": "False"
          },
          {
                    "key": "Patient_ABC",
                    "vitals": "Unstable",
                    "heart_rate": "145",
                    "anomaly": "True"
          },
          {
                    "key": "Patient_LMN",
                    "vitals": "Stable",
                    "heart_rate": "65",
                    "anomaly": "False"
          },
          {
                    "key": "Patient_QRS",
                    "vitals": "Stable",
                    "heart_rate": "80",
                    "anomaly": "False"
          }
]
    },
    {
        id: 'lesson-w27-d7',
        title: 'Weekly Concept Review',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/aircAruvnKk?si=premium_mode',
        sources: [
            { title: 'Official Documentation', url: 'https://developer.mozilla.org/' },
            { title: 'Architect Archives', url: '#' }
        ],
        story: `<div class="quad-track"><div class="track-section tech"><h4>💻 1. Algorithmic Processing</h4><p>This module focuses on high-speed data parsing. Time Complexity (Big O) prevents server timeouts.</p></div><div class="track-section health"><h4>🏥 2. Clinical Data Streams</h4><p>Hospitals generate terabytes of telemetry hourly. Structuring this raw byte data is critical.</p></div><div class="track-section bio"><h4>🧬 3. Evolutionary Algorithms</h4><p>Algorithms evolve through mutation and selection. Structure ML pipelines to adapt dynamically.</p></div><div class="track-section lab"><h4>🧪 4. God-Mode Lab</h4><p><strong>Mission:</strong> The pipeline has stalled. Isolate the errant data frame.</p></div></div>`,
        task: {
            type: 'find-value',
            targetColumn: 'status',
            condition: (val) => val === 'CRITICAL',
            successMessage: "System Override Successful. Node unlocked. +100 XP.",
            errorMessage: "Locate the CRITICAL status node."
        },
        data: [
          {
                    "id": 3610,
                    "value": "Alpha_Node",
                    "metric": "0.45",
                    "status": "Active"
          },
          {
                    "id": 6620,
                    "value": "Beta_Node",
                    "metric": "0.89",
                    "status": "Active"
          },
          {
                    "id": 5483,
                    "value": "Omega_Node",
                    "metric": "0.01",
                    "status": "CRITICAL"
          },
          {
                    "id": 1735,
                    "value": "Zeta_Node",
                    "metric": "1.00",
                    "status": "Active"
          }
]
    },
    {
        id: 'lesson-w28-d1',
        title: 'Python: Data Cleaning - Part 1',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/zOjov-2OZ0E?si=premium_mode',
        sources: [
            { title: 'Official Documentation', url: 'https://developer.mozilla.org/' },
            { title: 'Architect Archives', url: '#' }
        ],
        story: `<div class="quad-track"><div class="track-section tech"><h4>💻 1. Algorithmic Processing</h4><p>This module focuses on high-speed data parsing. Time Complexity (Big O) prevents server timeouts.</p></div><div class="track-section health"><h4>🏥 2. Clinical Data Streams</h4><p>Hospitals generate terabytes of telemetry hourly. Structuring this raw byte data is critical.</p></div><div class="track-section bio"><h4>🧬 3. Evolutionary Algorithms</h4><p>Algorithms evolve through mutation and selection. Structure ML pipelines to adapt dynamically.</p></div><div class="track-section lab"><h4>🧪 4. God-Mode Lab</h4><p><strong>Mission:</strong> The pipeline has stalled. Isolate the errant data frame.</p></div></div>`,
        task: {
            type: 'find-value',
            targetColumn: 'anomaly',
            condition: (val) => val === 'True',
            successMessage: "System Override Successful. Node unlocked. +100 XP.",
            errorMessage: "Find the True anomaly flag."
        },
        data: [
          {
                    "key": "Patient_XYZ",
                    "vitals": "Stable",
                    "heart_rate": "72",
                    "anomaly": "False"
          },
          {
                    "key": "Patient_ABC",
                    "vitals": "Unstable",
                    "heart_rate": "145",
                    "anomaly": "True"
          },
          {
                    "key": "Patient_LMN",
                    "vitals": "Stable",
                    "heart_rate": "65",
                    "anomaly": "False"
          },
          {
                    "key": "Patient_QRS",
                    "vitals": "Stable",
                    "heart_rate": "80",
                    "anomaly": "False"
          }
]
    },
    {
        id: 'lesson-w28-d2',
        title: 'Python: Data Cleaning - Part 2',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/HcqpanDadyQ?si=premium_mode',
        sources: [
            { title: 'Official Documentation', url: 'https://developer.mozilla.org/' },
            { title: 'Architect Archives', url: '#' }
        ],
        story: `<div class="quad-track"><div class="track-section tech"><h4>💻 1. Algorithmic Processing</h4><p>This module focuses on high-speed data parsing. Time Complexity (Big O) prevents server timeouts.</p></div><div class="track-section health"><h4>🏥 2. Clinical Data Streams</h4><p>Hospitals generate terabytes of telemetry hourly. Structuring this raw byte data is critical.</p></div><div class="track-section bio"><h4>🧬 3. Evolutionary Algorithms</h4><p>Algorithms evolve through mutation and selection. Structure ML pipelines to adapt dynamically.</p></div><div class="track-section lab"><h4>🧪 4. God-Mode Lab</h4><p><strong>Mission:</strong> The pipeline has stalled. Isolate the errant data frame.</p></div></div>`,
        task: {
            type: 'find-value',
            targetColumn: 'status',
            condition: (val) => val === 'CRITICAL',
            successMessage: "System Override Successful. Node unlocked. +100 XP.",
            errorMessage: "Locate the CRITICAL status node."
        },
        data: [
          {
                    "id": 8362,
                    "value": "Alpha_Node",
                    "metric": "0.45",
                    "status": "Active"
          },
          {
                    "id": 6179,
                    "value": "Beta_Node",
                    "metric": "0.89",
                    "status": "Active"
          },
          {
                    "id": 9010,
                    "value": "Omega_Node",
                    "metric": "0.01",
                    "status": "CRITICAL"
          },
          {
                    "id": 6613,
                    "value": "Zeta_Node",
                    "metric": "1.00",
                    "status": "Active"
          }
]
    },
    {
        id: 'lesson-w28-d3',
        title: 'Python: Data Cleaning - Part 3',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/rpkpK_n2ad0?si=premium_mode',
        sources: [
            { title: 'Official Documentation', url: 'https://developer.mozilla.org/' },
            { title: 'Architect Archives', url: '#' }
        ],
        story: `<div class="quad-track"><div class="track-section tech"><h4>💻 1. Algorithmic Processing</h4><p>This module focuses on high-speed data parsing. Time Complexity (Big O) prevents server timeouts.</p></div><div class="track-section health"><h4>🏥 2. Clinical Data Streams</h4><p>Hospitals generate terabytes of telemetry hourly. Structuring this raw byte data is critical.</p></div><div class="track-section bio"><h4>🧬 3. Evolutionary Algorithms</h4><p>Algorithms evolve through mutation and selection. Structure ML pipelines to adapt dynamically.</p></div><div class="track-section lab"><h4>🧪 4. God-Mode Lab</h4><p><strong>Mission:</strong> The pipeline has stalled. Isolate the errant data frame.</p></div></div>`,
        task: {
            type: 'find-value',
            targetColumn: 'status',
            condition: (val) => val === 'CRITICAL',
            successMessage: "System Override Successful. Node unlocked. +100 XP.",
            errorMessage: "Locate the CRITICAL status node."
        },
        data: [
          {
                    "id": 2764,
                    "value": "Alpha_Node",
                    "metric": "0.45",
                    "status": "Active"
          },
          {
                    "id": 6750,
                    "value": "Beta_Node",
                    "metric": "0.89",
                    "status": "Active"
          },
          {
                    "id": 2203,
                    "value": "Omega_Node",
                    "metric": "0.01",
                    "status": "CRITICAL"
          },
          {
                    "id": 5169,
                    "value": "Zeta_Node",
                    "metric": "1.00",
                    "status": "Active"
          }
]
    },
    {
        id: 'lesson-w28-d4',
        title: 'Python: Data Cleaning - Part 4',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/HcqpanDadyQ?si=premium_mode',
        sources: [
            { title: 'Official Documentation', url: 'https://developer.mozilla.org/' },
            { title: 'Architect Archives', url: '#' }
        ],
        story: `<div class="quad-track"><div class="track-section tech"><h4>💻 1. Core Mechanics</h4><p>Mastering this concept requires understanding the underlying synthetic logic. In enterprise computing, this is the foundational bedrock.</p></div><div class="track-section health"><h4>🏥 2. Bio-Systems</h4><p>Data science in healthcare relies on absolute precision. We apply this logic to sequence genomic arrays.</p></div><div class="track-section bio"><h4>🧬 3. Neural Architecture</h4><p>Information must flow efficiently like a biological synapse. Optimize your code.</p></div><div class="track-section lab"><h4>🧪 4. God-Mode Lab</h4><p><strong>Mission:</strong> Locate the critical node anomaly to restore integrity.</p></div></div>`,
        task: {
            type: 'find-value',
            targetColumn: 'status',
            condition: (val) => val === 'CRITICAL',
            successMessage: "System Override Successful. Node unlocked. +100 XP.",
            errorMessage: "Locate the CRITICAL status node."
        },
        data: [
          {
                    "id": 5422,
                    "value": "Alpha_Node",
                    "metric": "0.45",
                    "status": "Active"
          },
          {
                    "id": 9386,
                    "value": "Beta_Node",
                    "metric": "0.89",
                    "status": "Active"
          },
          {
                    "id": 5248,
                    "value": "Omega_Node",
                    "metric": "0.01",
                    "status": "CRITICAL"
          },
          {
                    "id": 1440,
                    "value": "Zeta_Node",
                    "metric": "1.00",
                    "status": "Active"
          }
]
    },
    {
        id: 'lesson-w28-d5',
        title: 'Python: Data Cleaning - Part 5',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/rpkpK_n2ad0?si=premium_mode',
        sources: [
            { title: 'Official Documentation', url: 'https://developer.mozilla.org/' },
            { title: 'Architect Archives', url: '#' }
        ],
        story: `<div class="quad-track"><div class="track-section tech"><h4>💻 1. Algorithmic Processing</h4><p>This module focuses on high-speed data parsing. Time Complexity (Big O) prevents server timeouts.</p></div><div class="track-section health"><h4>🏥 2. Clinical Data Streams</h4><p>Hospitals generate terabytes of telemetry hourly. Structuring this raw byte data is critical.</p></div><div class="track-section bio"><h4>🧬 3. Evolutionary Algorithms</h4><p>Algorithms evolve through mutation and selection. Structure ML pipelines to adapt dynamically.</p></div><div class="track-section lab"><h4>🧪 4. God-Mode Lab</h4><p><strong>Mission:</strong> The pipeline has stalled. Isolate the errant data frame.</p></div></div>`,
        task: {
            type: 'find-value',
            targetColumn: 'status',
            condition: (val) => val === 'CRITICAL',
            successMessage: "System Override Successful. Node unlocked. +100 XP.",
            errorMessage: "Locate the CRITICAL status node."
        },
        data: [
          {
                    "id": 4906,
                    "value": "Alpha_Node",
                    "metric": "0.45",
                    "status": "Active"
          },
          {
                    "id": 8576,
                    "value": "Beta_Node",
                    "metric": "0.89",
                    "status": "Active"
          },
          {
                    "id": 2614,
                    "value": "Omega_Node",
                    "metric": "0.01",
                    "status": "CRITICAL"
          },
          {
                    "id": 4322,
                    "value": "Zeta_Node",
                    "metric": "1.00",
                    "status": "Active"
          }
]
    },
    {
        id: 'lesson-w28-d6',
        title: 'Python: Data Cleaning - Part 6',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/zOjov-2OZ0E?si=premium_mode',
        sources: [
            { title: 'Official Documentation', url: 'https://developer.mozilla.org/' },
            { title: 'Architect Archives', url: '#' }
        ],
        story: `<div class="quad-track"><div class="track-section tech"><h4>💻 1. Core Mechanics</h4><p>Mastering this concept requires understanding the underlying synthetic logic. In enterprise computing, this is the foundational bedrock.</p></div><div class="track-section health"><h4>🏥 2. Bio-Systems</h4><p>Data science in healthcare relies on absolute precision. We apply this logic to sequence genomic arrays.</p></div><div class="track-section bio"><h4>🧬 3. Neural Architecture</h4><p>Information must flow efficiently like a biological synapse. Optimize your code.</p></div><div class="track-section lab"><h4>🧪 4. God-Mode Lab</h4><p><strong>Mission:</strong> Locate the critical node anomaly to restore integrity.</p></div></div>`,
        task: {
            type: 'find-value',
            targetColumn: 'anomaly',
            condition: (val) => val === 'True',
            successMessage: "System Override Successful. Node unlocked. +100 XP.",
            errorMessage: "Find the True anomaly flag."
        },
        data: [
          {
                    "key": "Patient_XYZ",
                    "vitals": "Stable",
                    "heart_rate": "72",
                    "anomaly": "False"
          },
          {
                    "key": "Patient_ABC",
                    "vitals": "Unstable",
                    "heart_rate": "145",
                    "anomaly": "True"
          },
          {
                    "key": "Patient_LMN",
                    "vitals": "Stable",
                    "heart_rate": "65",
                    "anomaly": "False"
          },
          {
                    "key": "Patient_QRS",
                    "vitals": "Stable",
                    "heart_rate": "80",
                    "anomaly": "False"
          }
]
    },
    {
        id: 'lesson-w28-d7',
        title: 'Weekly Concept Review',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/HcqpanDadyQ?si=premium_mode',
        sources: [
            { title: 'Official Documentation', url: 'https://developer.mozilla.org/' },
            { title: 'Architect Archives', url: '#' }
        ],
        story: `<div class="quad-track"><div class="track-section tech"><h4>💻 1. Core Mechanics</h4><p>Mastering this concept requires understanding the underlying synthetic logic. In enterprise computing, this is the foundational bedrock.</p></div><div class="track-section health"><h4>🏥 2. Bio-Systems</h4><p>Data science in healthcare relies on absolute precision. We apply this logic to sequence genomic arrays.</p></div><div class="track-section bio"><h4>🧬 3. Neural Architecture</h4><p>Information must flow efficiently like a biological synapse. Optimize your code.</p></div><div class="track-section lab"><h4>🧪 4. God-Mode Lab</h4><p><strong>Mission:</strong> Locate the critical node anomaly to restore integrity.</p></div></div>`,
        task: {
            type: 'find-value',
            targetColumn: 'anomaly',
            condition: (val) => val === 'True',
            successMessage: "System Override Successful. Node unlocked. +100 XP.",
            errorMessage: "Find the True anomaly flag."
        },
        data: [
          {
                    "key": "Patient_XYZ",
                    "vitals": "Stable",
                    "heart_rate": "72",
                    "anomaly": "False"
          },
          {
                    "key": "Patient_ABC",
                    "vitals": "Unstable",
                    "heart_rate": "145",
                    "anomaly": "True"
          },
          {
                    "key": "Patient_LMN",
                    "vitals": "Stable",
                    "heart_rate": "65",
                    "anomaly": "False"
          },
          {
                    "key": "Patient_QRS",
                    "vitals": "Stable",
                    "heart_rate": "80",
                    "anomaly": "False"
          }
]
    },
    {
        id: 'lesson-w29-d1',
        title: 'Python: Matplotlib/Seaborn - Part 1',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/rpkpK_n2ad0?si=premium_mode',
        sources: [
            { title: 'Official Documentation', url: 'https://developer.mozilla.org/' },
            { title: 'Architect Archives', url: '#' }
        ],
        story: `<div class="quad-track"><div class="track-section tech"><h4>💻 1. Algorithmic Processing</h4><p>This module focuses on high-speed data parsing. Time Complexity (Big O) prevents server timeouts.</p></div><div class="track-section health"><h4>🏥 2. Clinical Data Streams</h4><p>Hospitals generate terabytes of telemetry hourly. Structuring this raw byte data is critical.</p></div><div class="track-section bio"><h4>🧬 3. Evolutionary Algorithms</h4><p>Algorithms evolve through mutation and selection. Structure ML pipelines to adapt dynamically.</p></div><div class="track-section lab"><h4>🧪 4. God-Mode Lab</h4><p><strong>Mission:</strong> The pipeline has stalled. Isolate the errant data frame.</p></div></div>`,
        task: {
            type: 'find-value',
            targetColumn: 'anomaly',
            condition: (val) => val === 'True',
            successMessage: "System Override Successful. Node unlocked. +100 XP.",
            errorMessage: "Find the True anomaly flag."
        },
        data: [
          {
                    "key": "Patient_XYZ",
                    "vitals": "Stable",
                    "heart_rate": "72",
                    "anomaly": "False"
          },
          {
                    "key": "Patient_ABC",
                    "vitals": "Unstable",
                    "heart_rate": "145",
                    "anomaly": "True"
          },
          {
                    "key": "Patient_LMN",
                    "vitals": "Stable",
                    "heart_rate": "65",
                    "anomaly": "False"
          },
          {
                    "key": "Patient_QRS",
                    "vitals": "Stable",
                    "heart_rate": "80",
                    "anomaly": "False"
          }
]
    },
    {
        id: 'lesson-w29-d2',
        title: 'Python: Matplotlib/Seaborn - Part 2',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/zOjov-2OZ0E?si=premium_mode',
        sources: [
            { title: 'Official Documentation', url: 'https://developer.mozilla.org/' },
            { title: 'Architect Archives', url: '#' }
        ],
        story: `<div class="quad-track"><div class="track-section tech"><h4>💻 1. Core Mechanics</h4><p>Mastering this concept requires understanding the underlying synthetic logic. In enterprise computing, this is the foundational bedrock.</p></div><div class="track-section health"><h4>🏥 2. Bio-Systems</h4><p>Data science in healthcare relies on absolute precision. We apply this logic to sequence genomic arrays.</p></div><div class="track-section bio"><h4>🧬 3. Neural Architecture</h4><p>Information must flow efficiently like a biological synapse. Optimize your code.</p></div><div class="track-section lab"><h4>🧪 4. God-Mode Lab</h4><p><strong>Mission:</strong> Locate the critical node anomaly to restore integrity.</p></div></div>`,
        task: {
            type: 'find-value',
            targetColumn: 'status',
            condition: (val) => val === 'CRITICAL',
            successMessage: "System Override Successful. Node unlocked. +100 XP.",
            errorMessage: "Locate the CRITICAL status node."
        },
        data: [
          {
                    "id": 7270,
                    "value": "Alpha_Node",
                    "metric": "0.45",
                    "status": "Active"
          },
          {
                    "id": 7061,
                    "value": "Beta_Node",
                    "metric": "0.89",
                    "status": "Active"
          },
          {
                    "id": 1687,
                    "value": "Omega_Node",
                    "metric": "0.01",
                    "status": "CRITICAL"
          },
          {
                    "id": 1437,
                    "value": "Zeta_Node",
                    "metric": "1.00",
                    "status": "Active"
          }
]
    },
    {
        id: 'lesson-w29-d3',
        title: 'Python: Matplotlib/Seaborn - Part 3',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/rpkpK_n2ad0?si=premium_mode',
        sources: [
            { title: 'Official Documentation', url: 'https://developer.mozilla.org/' },
            { title: 'Architect Archives', url: '#' }
        ],
        story: `<div class="quad-track"><div class="track-section tech"><h4>💻 1. Algorithmic Processing</h4><p>This module focuses on high-speed data parsing. Time Complexity (Big O) prevents server timeouts.</p></div><div class="track-section health"><h4>🏥 2. Clinical Data Streams</h4><p>Hospitals generate terabytes of telemetry hourly. Structuring this raw byte data is critical.</p></div><div class="track-section bio"><h4>🧬 3. Evolutionary Algorithms</h4><p>Algorithms evolve through mutation and selection. Structure ML pipelines to adapt dynamically.</p></div><div class="track-section lab"><h4>🧪 4. God-Mode Lab</h4><p><strong>Mission:</strong> The pipeline has stalled. Isolate the errant data frame.</p></div></div>`,
        task: {
            type: 'find-value',
            targetColumn: 'status',
            condition: (val) => val === 'CRITICAL',
            successMessage: "System Override Successful. Node unlocked. +100 XP.",
            errorMessage: "Locate the CRITICAL status node."
        },
        data: [
          {
                    "id": 7527,
                    "value": "Alpha_Node",
                    "metric": "0.45",
                    "status": "Active"
          },
          {
                    "id": 9017,
                    "value": "Beta_Node",
                    "metric": "0.89",
                    "status": "Active"
          },
          {
                    "id": 8066,
                    "value": "Omega_Node",
                    "metric": "0.01",
                    "status": "CRITICAL"
          },
          {
                    "id": 7835,
                    "value": "Zeta_Node",
                    "metric": "1.00",
                    "status": "Active"
          }
]
    },
    {
        id: 'lesson-w29-d4',
        title: 'Python: Matplotlib/Seaborn - Part 4',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/rpkpK_n2ad0?si=premium_mode',
        sources: [
            { title: 'Official Documentation', url: 'https://developer.mozilla.org/' },
            { title: 'Architect Archives', url: '#' }
        ],
        story: `<div class="quad-track"><div class="track-section tech"><h4>💻 1. Algorithmic Processing</h4><p>This module focuses on high-speed data parsing. Time Complexity (Big O) prevents server timeouts.</p></div><div class="track-section health"><h4>🏥 2. Clinical Data Streams</h4><p>Hospitals generate terabytes of telemetry hourly. Structuring this raw byte data is critical.</p></div><div class="track-section bio"><h4>🧬 3. Evolutionary Algorithms</h4><p>Algorithms evolve through mutation and selection. Structure ML pipelines to adapt dynamically.</p></div><div class="track-section lab"><h4>🧪 4. God-Mode Lab</h4><p><strong>Mission:</strong> The pipeline has stalled. Isolate the errant data frame.</p></div></div>`,
        task: {
            type: 'find-value',
            targetColumn: 'anomaly',
            condition: (val) => val === 'True',
            successMessage: "System Override Successful. Node unlocked. +100 XP.",
            errorMessage: "Find the True anomaly flag."
        },
        data: [
          {
                    "key": "Patient_XYZ",
                    "vitals": "Stable",
                    "heart_rate": "72",
                    "anomaly": "False"
          },
          {
                    "key": "Patient_ABC",
                    "vitals": "Unstable",
                    "heart_rate": "145",
                    "anomaly": "True"
          },
          {
                    "key": "Patient_LMN",
                    "vitals": "Stable",
                    "heart_rate": "65",
                    "anomaly": "False"
          },
          {
                    "key": "Patient_QRS",
                    "vitals": "Stable",
                    "heart_rate": "80",
                    "anomaly": "False"
          }
]
    },
    {
        id: 'lesson-w29-d5',
        title: 'Python: Matplotlib/Seaborn - Part 5',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/zOjov-2OZ0E?si=premium_mode',
        sources: [
            { title: 'Official Documentation', url: 'https://developer.mozilla.org/' },
            { title: 'Architect Archives', url: '#' }
        ],
        story: `<div class="quad-track"><div class="track-section tech"><h4>💻 1. Core Mechanics</h4><p>Mastering this concept requires understanding the underlying synthetic logic. In enterprise computing, this is the foundational bedrock.</p></div><div class="track-section health"><h4>🏥 2. Bio-Systems</h4><p>Data science in healthcare relies on absolute precision. We apply this logic to sequence genomic arrays.</p></div><div class="track-section bio"><h4>🧬 3. Neural Architecture</h4><p>Information must flow efficiently like a biological synapse. Optimize your code.</p></div><div class="track-section lab"><h4>🧪 4. God-Mode Lab</h4><p><strong>Mission:</strong> Locate the critical node anomaly to restore integrity.</p></div></div>`,
        task: {
            type: 'find-value',
            targetColumn: 'anomaly',
            condition: (val) => val === 'True',
            successMessage: "System Override Successful. Node unlocked. +100 XP.",
            errorMessage: "Find the True anomaly flag."
        },
        data: [
          {
                    "key": "Patient_XYZ",
                    "vitals": "Stable",
                    "heart_rate": "72",
                    "anomaly": "False"
          },
          {
                    "key": "Patient_ABC",
                    "vitals": "Unstable",
                    "heart_rate": "145",
                    "anomaly": "True"
          },
          {
                    "key": "Patient_LMN",
                    "vitals": "Stable",
                    "heart_rate": "65",
                    "anomaly": "False"
          },
          {
                    "key": "Patient_QRS",
                    "vitals": "Stable",
                    "heart_rate": "80",
                    "anomaly": "False"
          }
]
    },
    {
        id: 'lesson-w29-d6',
        title: 'Python: Matplotlib/Seaborn - Part 6',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/rpkpK_n2ad0?si=premium_mode',
        sources: [
            { title: 'Official Documentation', url: 'https://developer.mozilla.org/' },
            { title: 'Architect Archives', url: '#' }
        ],
        story: `<div class="quad-track"><div class="track-section tech"><h4>💻 1. Core Mechanics</h4><p>Mastering this concept requires understanding the underlying synthetic logic. In enterprise computing, this is the foundational bedrock.</p></div><div class="track-section health"><h4>🏥 2. Bio-Systems</h4><p>Data science in healthcare relies on absolute precision. We apply this logic to sequence genomic arrays.</p></div><div class="track-section bio"><h4>🧬 3. Neural Architecture</h4><p>Information must flow efficiently like a biological synapse. Optimize your code.</p></div><div class="track-section lab"><h4>🧪 4. God-Mode Lab</h4><p><strong>Mission:</strong> Locate the critical node anomaly to restore integrity.</p></div></div>`,
        task: {
            type: 'find-value',
            targetColumn: 'status',
            condition: (val) => val === 'CRITICAL',
            successMessage: "System Override Successful. Node unlocked. +100 XP.",
            errorMessage: "Locate the CRITICAL status node."
        },
        data: [
          {
                    "id": 2574,
                    "value": "Alpha_Node",
                    "metric": "0.45",
                    "status": "Active"
          },
          {
                    "id": 8048,
                    "value": "Beta_Node",
                    "metric": "0.89",
                    "status": "Active"
          },
          {
                    "id": 5418,
                    "value": "Omega_Node",
                    "metric": "0.01",
                    "status": "CRITICAL"
          },
          {
                    "id": 8039,
                    "value": "Zeta_Node",
                    "metric": "1.00",
                    "status": "Active"
          }
]
    },
    {
        id: 'lesson-w29-d7',
        title: 'Weekly Concept Review',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/HcqpanDadyQ?si=premium_mode',
        sources: [
            { title: 'Official Documentation', url: 'https://developer.mozilla.org/' },
            { title: 'Architect Archives', url: '#' }
        ],
        story: `<div class="quad-track"><div class="track-section tech"><h4>💻 1. Algorithmic Processing</h4><p>This module focuses on high-speed data parsing. Time Complexity (Big O) prevents server timeouts.</p></div><div class="track-section health"><h4>🏥 2. Clinical Data Streams</h4><p>Hospitals generate terabytes of telemetry hourly. Structuring this raw byte data is critical.</p></div><div class="track-section bio"><h4>🧬 3. Evolutionary Algorithms</h4><p>Algorithms evolve through mutation and selection. Structure ML pipelines to adapt dynamically.</p></div><div class="track-section lab"><h4>🧪 4. God-Mode Lab</h4><p><strong>Mission:</strong> The pipeline has stalled. Isolate the errant data frame.</p></div></div>`,
        task: {
            type: 'find-value',
            targetColumn: 'anomaly',
            condition: (val) => val === 'True',
            successMessage: "System Override Successful. Node unlocked. +100 XP.",
            errorMessage: "Find the True anomaly flag."
        },
        data: [
          {
                    "key": "Patient_XYZ",
                    "vitals": "Stable",
                    "heart_rate": "72",
                    "anomaly": "False"
          },
          {
                    "key": "Patient_ABC",
                    "vitals": "Unstable",
                    "heart_rate": "145",
                    "anomaly": "True"
          },
          {
                    "key": "Patient_LMN",
                    "vitals": "Stable",
                    "heart_rate": "65",
                    "anomaly": "False"
          },
          {
                    "key": "Patient_QRS",
                    "vitals": "Stable",
                    "heart_rate": "80",
                    "anomaly": "False"
          }
]
    },
    {
        id: 'lesson-w30-d1',
        title: 'Python: Sklearn Intro - Part 1',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/aircAruvnKk?si=premium_mode',
        sources: [
            { title: 'Official Documentation', url: 'https://developer.mozilla.org/' },
            { title: 'Architect Archives', url: '#' }
        ],
        story: `<div class="quad-track"><div class="track-section tech"><h4>💻 1. Algorithmic Processing</h4><p>This module focuses on high-speed data parsing. Time Complexity (Big O) prevents server timeouts.</p></div><div class="track-section health"><h4>🏥 2. Clinical Data Streams</h4><p>Hospitals generate terabytes of telemetry hourly. Structuring this raw byte data is critical.</p></div><div class="track-section bio"><h4>🧬 3. Evolutionary Algorithms</h4><p>Algorithms evolve through mutation and selection. Structure ML pipelines to adapt dynamically.</p></div><div class="track-section lab"><h4>🧪 4. God-Mode Lab</h4><p><strong>Mission:</strong> The pipeline has stalled. Isolate the errant data frame.</p></div></div>`,
        task: {
            type: 'find-value',
            targetColumn: 'anomaly',
            condition: (val) => val === 'True',
            successMessage: "System Override Successful. Node unlocked. +100 XP.",
            errorMessage: "Find the True anomaly flag."
        },
        data: [
          {
                    "key": "Patient_XYZ",
                    "vitals": "Stable",
                    "heart_rate": "72",
                    "anomaly": "False"
          },
          {
                    "key": "Patient_ABC",
                    "vitals": "Unstable",
                    "heart_rate": "145",
                    "anomaly": "True"
          },
          {
                    "key": "Patient_LMN",
                    "vitals": "Stable",
                    "heart_rate": "65",
                    "anomaly": "False"
          },
          {
                    "key": "Patient_QRS",
                    "vitals": "Stable",
                    "heart_rate": "80",
                    "anomaly": "False"
          }
]
    },
    {
        id: 'lesson-w30-d2',
        title: 'Python: Sklearn Intro - Part 2',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/HcqpanDadyQ?si=premium_mode',
        sources: [
            { title: 'Official Documentation', url: 'https://developer.mozilla.org/' },
            { title: 'Architect Archives', url: '#' }
        ],
        story: `<div class="quad-track"><div class="track-section tech"><h4>💻 1. Algorithmic Processing</h4><p>This module focuses on high-speed data parsing. Time Complexity (Big O) prevents server timeouts.</p></div><div class="track-section health"><h4>🏥 2. Clinical Data Streams</h4><p>Hospitals generate terabytes of telemetry hourly. Structuring this raw byte data is critical.</p></div><div class="track-section bio"><h4>🧬 3. Evolutionary Algorithms</h4><p>Algorithms evolve through mutation and selection. Structure ML pipelines to adapt dynamically.</p></div><div class="track-section lab"><h4>🧪 4. God-Mode Lab</h4><p><strong>Mission:</strong> The pipeline has stalled. Isolate the errant data frame.</p></div></div>`,
        task: {
            type: 'find-value',
            targetColumn: 'anomaly',
            condition: (val) => val === 'True',
            successMessage: "System Override Successful. Node unlocked. +100 XP.",
            errorMessage: "Find the True anomaly flag."
        },
        data: [
          {
                    "key": "Patient_XYZ",
                    "vitals": "Stable",
                    "heart_rate": "72",
                    "anomaly": "False"
          },
          {
                    "key": "Patient_ABC",
                    "vitals": "Unstable",
                    "heart_rate": "145",
                    "anomaly": "True"
          },
          {
                    "key": "Patient_LMN",
                    "vitals": "Stable",
                    "heart_rate": "65",
                    "anomaly": "False"
          },
          {
                    "key": "Patient_QRS",
                    "vitals": "Stable",
                    "heart_rate": "80",
                    "anomaly": "False"
          }
]
    },
    {
        id: 'lesson-w30-d3',
        title: 'Python: Sklearn Intro - Part 3',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/aircAruvnKk?si=premium_mode',
        sources: [
            { title: 'Official Documentation', url: 'https://developer.mozilla.org/' },
            { title: 'Architect Archives', url: '#' }
        ],
        story: `<div class="quad-track"><div class="track-section tech"><h4>💻 1. Algorithmic Processing</h4><p>This module focuses on high-speed data parsing. Time Complexity (Big O) prevents server timeouts.</p></div><div class="track-section health"><h4>🏥 2. Clinical Data Streams</h4><p>Hospitals generate terabytes of telemetry hourly. Structuring this raw byte data is critical.</p></div><div class="track-section bio"><h4>🧬 3. Evolutionary Algorithms</h4><p>Algorithms evolve through mutation and selection. Structure ML pipelines to adapt dynamically.</p></div><div class="track-section lab"><h4>🧪 4. God-Mode Lab</h4><p><strong>Mission:</strong> The pipeline has stalled. Isolate the errant data frame.</p></div></div>`,
        task: {
            type: 'find-value',
            targetColumn: 'status',
            condition: (val) => val === 'CRITICAL',
            successMessage: "System Override Successful. Node unlocked. +100 XP.",
            errorMessage: "Locate the CRITICAL status node."
        },
        data: [
          {
                    "id": 8933,
                    "value": "Alpha_Node",
                    "metric": "0.45",
                    "status": "Active"
          },
          {
                    "id": 8634,
                    "value": "Beta_Node",
                    "metric": "0.89",
                    "status": "Active"
          },
          {
                    "id": 4416,
                    "value": "Omega_Node",
                    "metric": "0.01",
                    "status": "CRITICAL"
          },
          {
                    "id": 7836,
                    "value": "Zeta_Node",
                    "metric": "1.00",
                    "status": "Active"
          }
]
    },
    {
        id: 'lesson-w30-d4',
        title: 'Python: Sklearn Intro - Part 4',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/aircAruvnKk?si=premium_mode',
        sources: [
            { title: 'Official Documentation', url: 'https://developer.mozilla.org/' },
            { title: 'Architect Archives', url: '#' }
        ],
        story: `<div class="quad-track"><div class="track-section tech"><h4>💻 1. Core Mechanics</h4><p>Mastering this concept requires understanding the underlying synthetic logic. In enterprise computing, this is the foundational bedrock.</p></div><div class="track-section health"><h4>🏥 2. Bio-Systems</h4><p>Data science in healthcare relies on absolute precision. We apply this logic to sequence genomic arrays.</p></div><div class="track-section bio"><h4>🧬 3. Neural Architecture</h4><p>Information must flow efficiently like a biological synapse. Optimize your code.</p></div><div class="track-section lab"><h4>🧪 4. God-Mode Lab</h4><p><strong>Mission:</strong> Locate the critical node anomaly to restore integrity.</p></div></div>`,
        task: {
            type: 'find-value',
            targetColumn: 'anomaly',
            condition: (val) => val === 'True',
            successMessage: "System Override Successful. Node unlocked. +100 XP.",
            errorMessage: "Find the True anomaly flag."
        },
        data: [
          {
                    "key": "Patient_XYZ",
                    "vitals": "Stable",
                    "heart_rate": "72",
                    "anomaly": "False"
          },
          {
                    "key": "Patient_ABC",
                    "vitals": "Unstable",
                    "heart_rate": "145",
                    "anomaly": "True"
          },
          {
                    "key": "Patient_LMN",
                    "vitals": "Stable",
                    "heart_rate": "65",
                    "anomaly": "False"
          },
          {
                    "key": "Patient_QRS",
                    "vitals": "Stable",
                    "heart_rate": "80",
                    "anomaly": "False"
          }
]
    },
    {
        id: 'lesson-w30-d5',
        title: 'Python: Sklearn Intro - Part 5',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/zOjov-2OZ0E?si=premium_mode',
        sources: [
            { title: 'Official Documentation', url: 'https://developer.mozilla.org/' },
            { title: 'Architect Archives', url: '#' }
        ],
        story: `<div class="quad-track"><div class="track-section tech"><h4>💻 1. Core Mechanics</h4><p>Mastering this concept requires understanding the underlying synthetic logic. In enterprise computing, this is the foundational bedrock.</p></div><div class="track-section health"><h4>🏥 2. Bio-Systems</h4><p>Data science in healthcare relies on absolute precision. We apply this logic to sequence genomic arrays.</p></div><div class="track-section bio"><h4>🧬 3. Neural Architecture</h4><p>Information must flow efficiently like a biological synapse. Optimize your code.</p></div><div class="track-section lab"><h4>🧪 4. God-Mode Lab</h4><p><strong>Mission:</strong> Locate the critical node anomaly to restore integrity.</p></div></div>`,
        task: {
            type: 'find-value',
            targetColumn: 'anomaly',
            condition: (val) => val === 'True',
            successMessage: "System Override Successful. Node unlocked. +100 XP.",
            errorMessage: "Find the True anomaly flag."
        },
        data: [
          {
                    "key": "Patient_XYZ",
                    "vitals": "Stable",
                    "heart_rate": "72",
                    "anomaly": "False"
          },
          {
                    "key": "Patient_ABC",
                    "vitals": "Unstable",
                    "heart_rate": "145",
                    "anomaly": "True"
          },
          {
                    "key": "Patient_LMN",
                    "vitals": "Stable",
                    "heart_rate": "65",
                    "anomaly": "False"
          },
          {
                    "key": "Patient_QRS",
                    "vitals": "Stable",
                    "heart_rate": "80",
                    "anomaly": "False"
          }
]
    },
    {
        id: 'lesson-w30-d6',
        title: 'Python: Sklearn Intro - Part 6',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/zOjov-2OZ0E?si=premium_mode',
        sources: [
            { title: 'Official Documentation', url: 'https://developer.mozilla.org/' },
            { title: 'Architect Archives', url: '#' }
        ],
        story: `<div class="quad-track"><div class="track-section tech"><h4>💻 1. Algorithmic Processing</h4><p>This module focuses on high-speed data parsing. Time Complexity (Big O) prevents server timeouts.</p></div><div class="track-section health"><h4>🏥 2. Clinical Data Streams</h4><p>Hospitals generate terabytes of telemetry hourly. Structuring this raw byte data is critical.</p></div><div class="track-section bio"><h4>🧬 3. Evolutionary Algorithms</h4><p>Algorithms evolve through mutation and selection. Structure ML pipelines to adapt dynamically.</p></div><div class="track-section lab"><h4>🧪 4. God-Mode Lab</h4><p><strong>Mission:</strong> The pipeline has stalled. Isolate the errant data frame.</p></div></div>`,
        task: {
            type: 'find-value',
            targetColumn: 'anomaly',
            condition: (val) => val === 'True',
            successMessage: "System Override Successful. Node unlocked. +100 XP.",
            errorMessage: "Find the True anomaly flag."
        },
        data: [
          {
                    "key": "Patient_XYZ",
                    "vitals": "Stable",
                    "heart_rate": "72",
                    "anomaly": "False"
          },
          {
                    "key": "Patient_ABC",
                    "vitals": "Unstable",
                    "heart_rate": "145",
                    "anomaly": "True"
          },
          {
                    "key": "Patient_LMN",
                    "vitals": "Stable",
                    "heart_rate": "65",
                    "anomaly": "False"
          },
          {
                    "key": "Patient_QRS",
                    "vitals": "Stable",
                    "heart_rate": "80",
                    "anomaly": "False"
          }
]
    },
    {
        id: 'lesson-w30-d7',
        title: 'Weekly Concept Review',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/zOjov-2OZ0E?si=premium_mode',
        sources: [
            { title: 'Official Documentation', url: 'https://developer.mozilla.org/' },
            { title: 'Architect Archives', url: '#' }
        ],
        story: `<div class="quad-track"><div class="track-section tech"><h4>💻 1. Algorithmic Processing</h4><p>This module focuses on high-speed data parsing. Time Complexity (Big O) prevents server timeouts.</p></div><div class="track-section health"><h4>🏥 2. Clinical Data Streams</h4><p>Hospitals generate terabytes of telemetry hourly. Structuring this raw byte data is critical.</p></div><div class="track-section bio"><h4>🧬 3. Evolutionary Algorithms</h4><p>Algorithms evolve through mutation and selection. Structure ML pipelines to adapt dynamically.</p></div><div class="track-section lab"><h4>🧪 4. God-Mode Lab</h4><p><strong>Mission:</strong> The pipeline has stalled. Isolate the errant data frame.</p></div></div>`,
        task: {
            type: 'find-value',
            targetColumn: 'anomaly',
            condition: (val) => val === 'True',
            successMessage: "System Override Successful. Node unlocked. +100 XP.",
            errorMessage: "Find the True anomaly flag."
        },
        data: [
          {
                    "key": "Patient_XYZ",
                    "vitals": "Stable",
                    "heart_rate": "72",
                    "anomaly": "False"
          },
          {
                    "key": "Patient_ABC",
                    "vitals": "Unstable",
                    "heart_rate": "145",
                    "anomaly": "True"
          },
          {
                    "key": "Patient_LMN",
                    "vitals": "Stable",
                    "heart_rate": "65",
                    "anomaly": "False"
          },
          {
                    "key": "Patient_QRS",
                    "vitals": "Stable",
                    "heart_rate": "80",
                    "anomaly": "False"
          }
]
    },
    {
        id: 'lesson-w31-d1',
        title: 'Python: Web Scraping - Part 1',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/aircAruvnKk?si=premium_mode',
        sources: [
            { title: 'Official Documentation', url: 'https://developer.mozilla.org/' },
            { title: 'Architect Archives', url: '#' }
        ],
        story: `<div class="quad-track"><div class="track-section tech"><h4>💻 1. Algorithmic Processing</h4><p>This module focuses on high-speed data parsing. Time Complexity (Big O) prevents server timeouts.</p></div><div class="track-section health"><h4>🏥 2. Clinical Data Streams</h4><p>Hospitals generate terabytes of telemetry hourly. Structuring this raw byte data is critical.</p></div><div class="track-section bio"><h4>🧬 3. Evolutionary Algorithms</h4><p>Algorithms evolve through mutation and selection. Structure ML pipelines to adapt dynamically.</p></div><div class="track-section lab"><h4>🧪 4. God-Mode Lab</h4><p><strong>Mission:</strong> The pipeline has stalled. Isolate the errant data frame.</p></div></div>`,
        task: {
            type: 'find-value',
            targetColumn: 'status',
            condition: (val) => val === 'CRITICAL',
            successMessage: "System Override Successful. Node unlocked. +100 XP.",
            errorMessage: "Locate the CRITICAL status node."
        },
        data: [
          {
                    "id": 8454,
                    "value": "Alpha_Node",
                    "metric": "0.45",
                    "status": "Active"
          },
          {
                    "id": 1899,
                    "value": "Beta_Node",
                    "metric": "0.89",
                    "status": "Active"
          },
          {
                    "id": 5327,
                    "value": "Omega_Node",
                    "metric": "0.01",
                    "status": "CRITICAL"
          },
          {
                    "id": 9943,
                    "value": "Zeta_Node",
                    "metric": "1.00",
                    "status": "Active"
          }
]
    },
    {
        id: 'lesson-w31-d2',
        title: 'Python: Web Scraping - Part 2',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/HcqpanDadyQ?si=premium_mode',
        sources: [
            { title: 'Official Documentation', url: 'https://developer.mozilla.org/' },
            { title: 'Architect Archives', url: '#' }
        ],
        story: `<div class="quad-track"><div class="track-section tech"><h4>💻 1. Core Mechanics</h4><p>Mastering this concept requires understanding the underlying synthetic logic. In enterprise computing, this is the foundational bedrock.</p></div><div class="track-section health"><h4>🏥 2. Bio-Systems</h4><p>Data science in healthcare relies on absolute precision. We apply this logic to sequence genomic arrays.</p></div><div class="track-section bio"><h4>🧬 3. Neural Architecture</h4><p>Information must flow efficiently like a biological synapse. Optimize your code.</p></div><div class="track-section lab"><h4>🧪 4. God-Mode Lab</h4><p><strong>Mission:</strong> Locate the critical node anomaly to restore integrity.</p></div></div>`,
        task: {
            type: 'find-value',
            targetColumn: 'status',
            condition: (val) => val === 'CRITICAL',
            successMessage: "System Override Successful. Node unlocked. +100 XP.",
            errorMessage: "Locate the CRITICAL status node."
        },
        data: [
          {
                    "id": 6591,
                    "value": "Alpha_Node",
                    "metric": "0.45",
                    "status": "Active"
          },
          {
                    "id": 2437,
                    "value": "Beta_Node",
                    "metric": "0.89",
                    "status": "Active"
          },
          {
                    "id": 5626,
                    "value": "Omega_Node",
                    "metric": "0.01",
                    "status": "CRITICAL"
          },
          {
                    "id": 8815,
                    "value": "Zeta_Node",
                    "metric": "1.00",
                    "status": "Active"
          }
]
    },
    {
        id: 'lesson-w31-d3',
        title: 'Python: Web Scraping - Part 3',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/rpkpK_n2ad0?si=premium_mode',
        sources: [
            { title: 'Official Documentation', url: 'https://developer.mozilla.org/' },
            { title: 'Architect Archives', url: '#' }
        ],
        story: `<div class="quad-track"><div class="track-section tech"><h4>💻 1. Algorithmic Processing</h4><p>This module focuses on high-speed data parsing. Time Complexity (Big O) prevents server timeouts.</p></div><div class="track-section health"><h4>🏥 2. Clinical Data Streams</h4><p>Hospitals generate terabytes of telemetry hourly. Structuring this raw byte data is critical.</p></div><div class="track-section bio"><h4>🧬 3. Evolutionary Algorithms</h4><p>Algorithms evolve through mutation and selection. Structure ML pipelines to adapt dynamically.</p></div><div class="track-section lab"><h4>🧪 4. God-Mode Lab</h4><p><strong>Mission:</strong> The pipeline has stalled. Isolate the errant data frame.</p></div></div>`,
        task: {
            type: 'find-value',
            targetColumn: 'status',
            condition: (val) => val === 'CRITICAL',
            successMessage: "System Override Successful. Node unlocked. +100 XP.",
            errorMessage: "Locate the CRITICAL status node."
        },
        data: [
          {
                    "id": 5719,
                    "value": "Alpha_Node",
                    "metric": "0.45",
                    "status": "Active"
          },
          {
                    "id": 6539,
                    "value": "Beta_Node",
                    "metric": "0.89",
                    "status": "Active"
          },
          {
                    "id": 9346,
                    "value": "Omega_Node",
                    "metric": "0.01",
                    "status": "CRITICAL"
          },
          {
                    "id": 2095,
                    "value": "Zeta_Node",
                    "metric": "1.00",
                    "status": "Active"
          }
]
    },
    {
        id: 'lesson-w31-d4',
        title: 'Python: Web Scraping - Part 4',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/zOjov-2OZ0E?si=premium_mode',
        sources: [
            { title: 'Official Documentation', url: 'https://developer.mozilla.org/' },
            { title: 'Architect Archives', url: '#' }
        ],
        story: `<div class="quad-track"><div class="track-section tech"><h4>💻 1. Core Mechanics</h4><p>Mastering this concept requires understanding the underlying synthetic logic. In enterprise computing, this is the foundational bedrock.</p></div><div class="track-section health"><h4>🏥 2. Bio-Systems</h4><p>Data science in healthcare relies on absolute precision. We apply this logic to sequence genomic arrays.</p></div><div class="track-section bio"><h4>🧬 3. Neural Architecture</h4><p>Information must flow efficiently like a biological synapse. Optimize your code.</p></div><div class="track-section lab"><h4>🧪 4. God-Mode Lab</h4><p><strong>Mission:</strong> Locate the critical node anomaly to restore integrity.</p></div></div>`,
        task: {
            type: 'find-value',
            targetColumn: 'status',
            condition: (val) => val === 'CRITICAL',
            successMessage: "System Override Successful. Node unlocked. +100 XP.",
            errorMessage: "Locate the CRITICAL status node."
        },
        data: [
          {
                    "id": 5975,
                    "value": "Alpha_Node",
                    "metric": "0.45",
                    "status": "Active"
          },
          {
                    "id": 8705,
                    "value": "Beta_Node",
                    "metric": "0.89",
                    "status": "Active"
          },
          {
                    "id": 4208,
                    "value": "Omega_Node",
                    "metric": "0.01",
                    "status": "CRITICAL"
          },
          {
                    "id": 6545,
                    "value": "Zeta_Node",
                    "metric": "1.00",
                    "status": "Active"
          }
]
    },
    {
        id: 'lesson-w31-d5',
        title: 'Python: Web Scraping - Part 5',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/rpkpK_n2ad0?si=premium_mode',
        sources: [
            { title: 'Official Documentation', url: 'https://developer.mozilla.org/' },
            { title: 'Architect Archives', url: '#' }
        ],
        story: `<div class="quad-track"><div class="track-section tech"><h4>💻 1. Algorithmic Processing</h4><p>This module focuses on high-speed data parsing. Time Complexity (Big O) prevents server timeouts.</p></div><div class="track-section health"><h4>🏥 2. Clinical Data Streams</h4><p>Hospitals generate terabytes of telemetry hourly. Structuring this raw byte data is critical.</p></div><div class="track-section bio"><h4>🧬 3. Evolutionary Algorithms</h4><p>Algorithms evolve through mutation and selection. Structure ML pipelines to adapt dynamically.</p></div><div class="track-section lab"><h4>🧪 4. God-Mode Lab</h4><p><strong>Mission:</strong> The pipeline has stalled. Isolate the errant data frame.</p></div></div>`,
        task: {
            type: 'find-value',
            targetColumn: 'status',
            condition: (val) => val === 'CRITICAL',
            successMessage: "System Override Successful. Node unlocked. +100 XP.",
            errorMessage: "Locate the CRITICAL status node."
        },
        data: [
          {
                    "id": 8361,
                    "value": "Alpha_Node",
                    "metric": "0.45",
                    "status": "Active"
          },
          {
                    "id": 2301,
                    "value": "Beta_Node",
                    "metric": "0.89",
                    "status": "Active"
          },
          {
                    "id": 1408,
                    "value": "Omega_Node",
                    "metric": "0.01",
                    "status": "CRITICAL"
          },
          {
                    "id": 9110,
                    "value": "Zeta_Node",
                    "metric": "1.00",
                    "status": "Active"
          }
]
    },
    {
        id: 'lesson-w31-d6',
        title: 'Python: Web Scraping - Part 6',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/HcqpanDadyQ?si=premium_mode',
        sources: [
            { title: 'Official Documentation', url: 'https://developer.mozilla.org/' },
            { title: 'Architect Archives', url: '#' }
        ],
        story: `<div class="quad-track"><div class="track-section tech"><h4>💻 1. Core Mechanics</h4><p>Mastering this concept requires understanding the underlying synthetic logic. In enterprise computing, this is the foundational bedrock.</p></div><div class="track-section health"><h4>🏥 2. Bio-Systems</h4><p>Data science in healthcare relies on absolute precision. We apply this logic to sequence genomic arrays.</p></div><div class="track-section bio"><h4>🧬 3. Neural Architecture</h4><p>Information must flow efficiently like a biological synapse. Optimize your code.</p></div><div class="track-section lab"><h4>🧪 4. God-Mode Lab</h4><p><strong>Mission:</strong> Locate the critical node anomaly to restore integrity.</p></div></div>`,
        task: {
            type: 'find-value',
            targetColumn: 'status',
            condition: (val) => val === 'CRITICAL',
            successMessage: "System Override Successful. Node unlocked. +100 XP.",
            errorMessage: "Locate the CRITICAL status node."
        },
        data: [
          {
                    "id": 4088,
                    "value": "Alpha_Node",
                    "metric": "0.45",
                    "status": "Active"
          },
          {
                    "id": 9361,
                    "value": "Beta_Node",
                    "metric": "0.89",
                    "status": "Active"
          },
          {
                    "id": 8033,
                    "value": "Omega_Node",
                    "metric": "0.01",
                    "status": "CRITICAL"
          },
          {
                    "id": 1010,
                    "value": "Zeta_Node",
                    "metric": "1.00",
                    "status": "Active"
          }
]
    },
    {
        id: 'lesson-w31-d7',
        title: 'Weekly Concept Review',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/zOjov-2OZ0E?si=premium_mode',
        sources: [
            { title: 'Official Documentation', url: 'https://developer.mozilla.org/' },
            { title: 'Architect Archives', url: '#' }
        ],
        story: `<div class="quad-track"><div class="track-section tech"><h4>💻 1. Algorithmic Processing</h4><p>This module focuses on high-speed data parsing. Time Complexity (Big O) prevents server timeouts.</p></div><div class="track-section health"><h4>🏥 2. Clinical Data Streams</h4><p>Hospitals generate terabytes of telemetry hourly. Structuring this raw byte data is critical.</p></div><div class="track-section bio"><h4>🧬 3. Evolutionary Algorithms</h4><p>Algorithms evolve through mutation and selection. Structure ML pipelines to adapt dynamically.</p></div><div class="track-section lab"><h4>🧪 4. God-Mode Lab</h4><p><strong>Mission:</strong> The pipeline has stalled. Isolate the errant data frame.</p></div></div>`,
        task: {
            type: 'find-value',
            targetColumn: 'status',
            condition: (val) => val === 'CRITICAL',
            successMessage: "System Override Successful. Node unlocked. +100 XP.",
            errorMessage: "Locate the CRITICAL status node."
        },
        data: [
          {
                    "id": 4080,
                    "value": "Alpha_Node",
                    "metric": "0.45",
                    "status": "Active"
          },
          {
                    "id": 7865,
                    "value": "Beta_Node",
                    "metric": "0.89",
                    "status": "Active"
          },
          {
                    "id": 5796,
                    "value": "Omega_Node",
                    "metric": "0.01",
                    "status": "CRITICAL"
          },
          {
                    "id": 4373,
                    "value": "Zeta_Node",
                    "metric": "1.00",
                    "status": "Active"
          }
]
    },
    {
        id: 'lesson-w32-d1',
        title: 'Phase 3 Capstone - Part 1',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/zOjov-2OZ0E?si=premium_mode',
        sources: [
            { title: 'Official Documentation', url: 'https://developer.mozilla.org/' },
            { title: 'Architect Archives', url: '#' }
        ],
        story: `<div class="quad-track"><div class="track-section tech"><h4>💻 1. Algorithmic Processing</h4><p>This module focuses on high-speed data parsing. Time Complexity (Big O) prevents server timeouts.</p></div><div class="track-section health"><h4>🏥 2. Clinical Data Streams</h4><p>Hospitals generate terabytes of telemetry hourly. Structuring this raw byte data is critical.</p></div><div class="track-section bio"><h4>🧬 3. Evolutionary Algorithms</h4><p>Algorithms evolve through mutation and selection. Structure ML pipelines to adapt dynamically.</p></div><div class="track-section lab"><h4>🧪 4. God-Mode Lab</h4><p><strong>Mission:</strong> The pipeline has stalled. Isolate the errant data frame.</p></div></div>`,
        task: {
            type: 'find-value',
            targetColumn: 'anomaly',
            condition: (val) => val === 'True',
            successMessage: "System Override Successful. Node unlocked. +100 XP.",
            errorMessage: "Find the True anomaly flag."
        },
        data: [
          {
                    "key": "Patient_XYZ",
                    "vitals": "Stable",
                    "heart_rate": "72",
                    "anomaly": "False"
          },
          {
                    "key": "Patient_ABC",
                    "vitals": "Unstable",
                    "heart_rate": "145",
                    "anomaly": "True"
          },
          {
                    "key": "Patient_LMN",
                    "vitals": "Stable",
                    "heart_rate": "65",
                    "anomaly": "False"
          },
          {
                    "key": "Patient_QRS",
                    "vitals": "Stable",
                    "heart_rate": "80",
                    "anomaly": "False"
          }
]
    },
    {
        id: 'lesson-w32-d2',
        title: 'Phase 3 Capstone - Part 2',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/rpkpK_n2ad0?si=premium_mode',
        sources: [
            { title: 'Official Documentation', url: 'https://developer.mozilla.org/' },
            { title: 'Architect Archives', url: '#' }
        ],
        story: `<div class="quad-track"><div class="track-section tech"><h4>💻 1. Algorithmic Processing</h4><p>This module focuses on high-speed data parsing. Time Complexity (Big O) prevents server timeouts.</p></div><div class="track-section health"><h4>🏥 2. Clinical Data Streams</h4><p>Hospitals generate terabytes of telemetry hourly. Structuring this raw byte data is critical.</p></div><div class="track-section bio"><h4>🧬 3. Evolutionary Algorithms</h4><p>Algorithms evolve through mutation and selection. Structure ML pipelines to adapt dynamically.</p></div><div class="track-section lab"><h4>🧪 4. God-Mode Lab</h4><p><strong>Mission:</strong> The pipeline has stalled. Isolate the errant data frame.</p></div></div>`,
        task: {
            type: 'find-value',
            targetColumn: 'status',
            condition: (val) => val === 'CRITICAL',
            successMessage: "System Override Successful. Node unlocked. +100 XP.",
            errorMessage: "Locate the CRITICAL status node."
        },
        data: [
          {
                    "id": 3016,
                    "value": "Alpha_Node",
                    "metric": "0.45",
                    "status": "Active"
          },
          {
                    "id": 1457,
                    "value": "Beta_Node",
                    "metric": "0.89",
                    "status": "Active"
          },
          {
                    "id": 8216,
                    "value": "Omega_Node",
                    "metric": "0.01",
                    "status": "CRITICAL"
          },
          {
                    "id": 1266,
                    "value": "Zeta_Node",
                    "metric": "1.00",
                    "status": "Active"
          }
]
    },
    {
        id: 'lesson-w32-d3',
        title: 'Phase 3 Capstone - Part 3',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/rpkpK_n2ad0?si=premium_mode',
        sources: [
            { title: 'Official Documentation', url: 'https://developer.mozilla.org/' },
            { title: 'Architect Archives', url: '#' }
        ],
        story: `<div class="quad-track"><div class="track-section tech"><h4>💻 1. Core Mechanics</h4><p>Mastering this concept requires understanding the underlying synthetic logic. In enterprise computing, this is the foundational bedrock.</p></div><div class="track-section health"><h4>🏥 2. Bio-Systems</h4><p>Data science in healthcare relies on absolute precision. We apply this logic to sequence genomic arrays.</p></div><div class="track-section bio"><h4>🧬 3. Neural Architecture</h4><p>Information must flow efficiently like a biological synapse. Optimize your code.</p></div><div class="track-section lab"><h4>🧪 4. God-Mode Lab</h4><p><strong>Mission:</strong> Locate the critical node anomaly to restore integrity.</p></div></div>`,
        task: {
            type: 'find-value',
            targetColumn: 'anomaly',
            condition: (val) => val === 'True',
            successMessage: "System Override Successful. Node unlocked. +100 XP.",
            errorMessage: "Find the True anomaly flag."
        },
        data: [
          {
                    "key": "Patient_XYZ",
                    "vitals": "Stable",
                    "heart_rate": "72",
                    "anomaly": "False"
          },
          {
                    "key": "Patient_ABC",
                    "vitals": "Unstable",
                    "heart_rate": "145",
                    "anomaly": "True"
          },
          {
                    "key": "Patient_LMN",
                    "vitals": "Stable",
                    "heart_rate": "65",
                    "anomaly": "False"
          },
          {
                    "key": "Patient_QRS",
                    "vitals": "Stable",
                    "heart_rate": "80",
                    "anomaly": "False"
          }
]
    },
    {
        id: 'lesson-w32-d4',
        title: 'Phase 3 Capstone - Part 4',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/aircAruvnKk?si=premium_mode',
        sources: [
            { title: 'Official Documentation', url: 'https://developer.mozilla.org/' },
            { title: 'Architect Archives', url: '#' }
        ],
        story: `<div class="quad-track"><div class="track-section tech"><h4>💻 1. Core Mechanics</h4><p>Mastering this concept requires understanding the underlying synthetic logic. In enterprise computing, this is the foundational bedrock.</p></div><div class="track-section health"><h4>🏥 2. Bio-Systems</h4><p>Data science in healthcare relies on absolute precision. We apply this logic to sequence genomic arrays.</p></div><div class="track-section bio"><h4>🧬 3. Neural Architecture</h4><p>Information must flow efficiently like a biological synapse. Optimize your code.</p></div><div class="track-section lab"><h4>🧪 4. God-Mode Lab</h4><p><strong>Mission:</strong> Locate the critical node anomaly to restore integrity.</p></div></div>`,
        task: {
            type: 'find-value',
            targetColumn: 'anomaly',
            condition: (val) => val === 'True',
            successMessage: "System Override Successful. Node unlocked. +100 XP.",
            errorMessage: "Find the True anomaly flag."
        },
        data: [
          {
                    "key": "Patient_XYZ",
                    "vitals": "Stable",
                    "heart_rate": "72",
                    "anomaly": "False"
          },
          {
                    "key": "Patient_ABC",
                    "vitals": "Unstable",
                    "heart_rate": "145",
                    "anomaly": "True"
          },
          {
                    "key": "Patient_LMN",
                    "vitals": "Stable",
                    "heart_rate": "65",
                    "anomaly": "False"
          },
          {
                    "key": "Patient_QRS",
                    "vitals": "Stable",
                    "heart_rate": "80",
                    "anomaly": "False"
          }
]
    },
    {
        id: 'lesson-w32-d5',
        title: 'Phase 3 Capstone - Part 5',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/aircAruvnKk?si=premium_mode',
        sources: [
            { title: 'Official Documentation', url: 'https://developer.mozilla.org/' },
            { title: 'Architect Archives', url: '#' }
        ],
        story: `<div class="quad-track"><div class="track-section tech"><h4>💻 1. Core Mechanics</h4><p>Mastering this concept requires understanding the underlying synthetic logic. In enterprise computing, this is the foundational bedrock.</p></div><div class="track-section health"><h4>🏥 2. Bio-Systems</h4><p>Data science in healthcare relies on absolute precision. We apply this logic to sequence genomic arrays.</p></div><div class="track-section bio"><h4>🧬 3. Neural Architecture</h4><p>Information must flow efficiently like a biological synapse. Optimize your code.</p></div><div class="track-section lab"><h4>🧪 4. God-Mode Lab</h4><p><strong>Mission:</strong> Locate the critical node anomaly to restore integrity.</p></div></div>`,
        task: {
            type: 'find-value',
            targetColumn: 'status',
            condition: (val) => val === 'CRITICAL',
            successMessage: "System Override Successful. Node unlocked. +100 XP.",
            errorMessage: "Locate the CRITICAL status node."
        },
        data: [
          {
                    "id": 7214,
                    "value": "Alpha_Node",
                    "metric": "0.45",
                    "status": "Active"
          },
          {
                    "id": 3873,
                    "value": "Beta_Node",
                    "metric": "0.89",
                    "status": "Active"
          },
          {
                    "id": 5585,
                    "value": "Omega_Node",
                    "metric": "0.01",
                    "status": "CRITICAL"
          },
          {
                    "id": 8676,
                    "value": "Zeta_Node",
                    "metric": "1.00",
                    "status": "Active"
          }
]
    },
    {
        id: 'lesson-w32-d6',
        title: 'Phase 3 Capstone - Part 6',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/aircAruvnKk?si=premium_mode',
        sources: [
            { title: 'Official Documentation', url: 'https://developer.mozilla.org/' },
            { title: 'Architect Archives', url: '#' }
        ],
        story: `<div class="quad-track"><div class="track-section tech"><h4>💻 1. Core Mechanics</h4><p>Mastering this concept requires understanding the underlying synthetic logic. In enterprise computing, this is the foundational bedrock.</p></div><div class="track-section health"><h4>🏥 2. Bio-Systems</h4><p>Data science in healthcare relies on absolute precision. We apply this logic to sequence genomic arrays.</p></div><div class="track-section bio"><h4>🧬 3. Neural Architecture</h4><p>Information must flow efficiently like a biological synapse. Optimize your code.</p></div><div class="track-section lab"><h4>🧪 4. God-Mode Lab</h4><p><strong>Mission:</strong> Locate the critical node anomaly to restore integrity.</p></div></div>`,
        task: {
            type: 'find-value',
            targetColumn: 'anomaly',
            condition: (val) => val === 'True',
            successMessage: "System Override Successful. Node unlocked. +100 XP.",
            errorMessage: "Find the True anomaly flag."
        },
        data: [
          {
                    "key": "Patient_XYZ",
                    "vitals": "Stable",
                    "heart_rate": "72",
                    "anomaly": "False"
          },
          {
                    "key": "Patient_ABC",
                    "vitals": "Unstable",
                    "heart_rate": "145",
                    "anomaly": "True"
          },
          {
                    "key": "Patient_LMN",
                    "vitals": "Stable",
                    "heart_rate": "65",
                    "anomaly": "False"
          },
          {
                    "key": "Patient_QRS",
                    "vitals": "Stable",
                    "heart_rate": "80",
                    "anomaly": "False"
          }
]
    },
    {
        id: 'lesson-w32-d7',
        title: 'Weekly Concept Review',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/rpkpK_n2ad0?si=premium_mode',
        sources: [
            { title: 'Official Documentation', url: 'https://developer.mozilla.org/' },
            { title: 'Architect Archives', url: '#' }
        ],
        story: `<div class="quad-track"><div class="track-section tech"><h4>💻 1. Core Mechanics</h4><p>Mastering this concept requires understanding the underlying synthetic logic. In enterprise computing, this is the foundational bedrock.</p></div><div class="track-section health"><h4>🏥 2. Bio-Systems</h4><p>Data science in healthcare relies on absolute precision. We apply this logic to sequence genomic arrays.</p></div><div class="track-section bio"><h4>🧬 3. Neural Architecture</h4><p>Information must flow efficiently like a biological synapse. Optimize your code.</p></div><div class="track-section lab"><h4>🧪 4. God-Mode Lab</h4><p><strong>Mission:</strong> Locate the critical node anomaly to restore integrity.</p></div></div>`,
        task: {
            type: 'find-value',
            targetColumn: 'status',
            condition: (val) => val === 'CRITICAL',
            successMessage: "System Override Successful. Node unlocked. +100 XP.",
            errorMessage: "Locate the CRITICAL status node."
        },
        data: [
          {
                    "id": 5325,
                    "value": "Alpha_Node",
                    "metric": "0.45",
                    "status": "Active"
          },
          {
                    "id": 7753,
                    "value": "Beta_Node",
                    "metric": "0.89",
                    "status": "Active"
          },
          {
                    "id": 4218,
                    "value": "Omega_Node",
                    "metric": "0.01",
                    "status": "CRITICAL"
          },
          {
                    "id": 1838,
                    "value": "Zeta_Node",
                    "metric": "1.00",
                    "status": "Active"
          }
]
    },
    {
        id: 'lesson-w33-d1',
        title: 'Math for AI (Stats) - Part 1',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/HcqpanDadyQ?si=premium_mode',
        sources: [
            { title: 'Official Documentation', url: 'https://developer.mozilla.org/' },
            { title: 'Architect Archives', url: '#' }
        ],
        story: `<div class="quad-track"><div class="track-section tech"><h4>💻 1. Algorithmic Processing</h4><p>This module focuses on high-speed data parsing. Time Complexity (Big O) prevents server timeouts.</p></div><div class="track-section health"><h4>🏥 2. Clinical Data Streams</h4><p>Hospitals generate terabytes of telemetry hourly. Structuring this raw byte data is critical.</p></div><div class="track-section bio"><h4>🧬 3. Evolutionary Algorithms</h4><p>Algorithms evolve through mutation and selection. Structure ML pipelines to adapt dynamically.</p></div><div class="track-section lab"><h4>🧪 4. God-Mode Lab</h4><p><strong>Mission:</strong> The pipeline has stalled. Isolate the errant data frame.</p></div></div>`,
        task: {
            type: 'find-value',
            targetColumn: 'status',
            condition: (val) => val === 'CRITICAL',
            successMessage: "System Override Successful. Node unlocked. +100 XP.",
            errorMessage: "Locate the CRITICAL status node."
        },
        data: [
          {
                    "id": 2415,
                    "value": "Alpha_Node",
                    "metric": "0.45",
                    "status": "Active"
          },
          {
                    "id": 8833,
                    "value": "Beta_Node",
                    "metric": "0.89",
                    "status": "Active"
          },
          {
                    "id": 4932,
                    "value": "Omega_Node",
                    "metric": "0.01",
                    "status": "CRITICAL"
          },
          {
                    "id": 9544,
                    "value": "Zeta_Node",
                    "metric": "1.00",
                    "status": "Active"
          }
]
    },
    {
        id: 'lesson-w33-d2',
        title: 'Math for AI (Stats) - Part 2',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/aircAruvnKk?si=premium_mode',
        sources: [
            { title: 'Official Documentation', url: 'https://developer.mozilla.org/' },
            { title: 'Architect Archives', url: '#' }
        ],
        story: `<div class="quad-track"><div class="track-section tech"><h4>💻 1. Algorithmic Processing</h4><p>This module focuses on high-speed data parsing. Time Complexity (Big O) prevents server timeouts.</p></div><div class="track-section health"><h4>🏥 2. Clinical Data Streams</h4><p>Hospitals generate terabytes of telemetry hourly. Structuring this raw byte data is critical.</p></div><div class="track-section bio"><h4>🧬 3. Evolutionary Algorithms</h4><p>Algorithms evolve through mutation and selection. Structure ML pipelines to adapt dynamically.</p></div><div class="track-section lab"><h4>🧪 4. God-Mode Lab</h4><p><strong>Mission:</strong> The pipeline has stalled. Isolate the errant data frame.</p></div></div>`,
        task: {
            type: 'find-value',
            targetColumn: 'status',
            condition: (val) => val === 'CRITICAL',
            successMessage: "System Override Successful. Node unlocked. +100 XP.",
            errorMessage: "Locate the CRITICAL status node."
        },
        data: [
          {
                    "id": 3318,
                    "value": "Alpha_Node",
                    "metric": "0.45",
                    "status": "Active"
          },
          {
                    "id": 3792,
                    "value": "Beta_Node",
                    "metric": "0.89",
                    "status": "Active"
          },
          {
                    "id": 5336,
                    "value": "Omega_Node",
                    "metric": "0.01",
                    "status": "CRITICAL"
          },
          {
                    "id": 9297,
                    "value": "Zeta_Node",
                    "metric": "1.00",
                    "status": "Active"
          }
]
    },
    {
        id: 'lesson-w33-d3',
        title: 'Math for AI (Stats) - Part 3',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/zOjov-2OZ0E?si=premium_mode',
        sources: [
            { title: 'Official Documentation', url: 'https://developer.mozilla.org/' },
            { title: 'Architect Archives', url: '#' }
        ],
        story: `<div class="quad-track"><div class="track-section tech"><h4>💻 1. Core Mechanics</h4><p>Mastering this concept requires understanding the underlying synthetic logic. In enterprise computing, this is the foundational bedrock.</p></div><div class="track-section health"><h4>🏥 2. Bio-Systems</h4><p>Data science in healthcare relies on absolute precision. We apply this logic to sequence genomic arrays.</p></div><div class="track-section bio"><h4>🧬 3. Neural Architecture</h4><p>Information must flow efficiently like a biological synapse. Optimize your code.</p></div><div class="track-section lab"><h4>🧪 4. God-Mode Lab</h4><p><strong>Mission:</strong> Locate the critical node anomaly to restore integrity.</p></div></div>`,
        task: {
            type: 'find-value',
            targetColumn: 'status',
            condition: (val) => val === 'CRITICAL',
            successMessage: "System Override Successful. Node unlocked. +100 XP.",
            errorMessage: "Locate the CRITICAL status node."
        },
        data: [
          {
                    "id": 3172,
                    "value": "Alpha_Node",
                    "metric": "0.45",
                    "status": "Active"
          },
          {
                    "id": 9943,
                    "value": "Beta_Node",
                    "metric": "0.89",
                    "status": "Active"
          },
          {
                    "id": 8729,
                    "value": "Omega_Node",
                    "metric": "0.01",
                    "status": "CRITICAL"
          },
          {
                    "id": 9861,
                    "value": "Zeta_Node",
                    "metric": "1.00",
                    "status": "Active"
          }
]
    },
    {
        id: 'lesson-w33-d4',
        title: 'Math for AI (Stats) - Part 4',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/zOjov-2OZ0E?si=premium_mode',
        sources: [
            { title: 'Official Documentation', url: 'https://developer.mozilla.org/' },
            { title: 'Architect Archives', url: '#' }
        ],
        story: `<div class="quad-track"><div class="track-section tech"><h4>💻 1. Algorithmic Processing</h4><p>This module focuses on high-speed data parsing. Time Complexity (Big O) prevents server timeouts.</p></div><div class="track-section health"><h4>🏥 2. Clinical Data Streams</h4><p>Hospitals generate terabytes of telemetry hourly. Structuring this raw byte data is critical.</p></div><div class="track-section bio"><h4>🧬 3. Evolutionary Algorithms</h4><p>Algorithms evolve through mutation and selection. Structure ML pipelines to adapt dynamically.</p></div><div class="track-section lab"><h4>🧪 4. God-Mode Lab</h4><p><strong>Mission:</strong> The pipeline has stalled. Isolate the errant data frame.</p></div></div>`,
        task: {
            type: 'find-value',
            targetColumn: 'anomaly',
            condition: (val) => val === 'True',
            successMessage: "System Override Successful. Node unlocked. +100 XP.",
            errorMessage: "Find the True anomaly flag."
        },
        data: [
          {
                    "key": "Patient_XYZ",
                    "vitals": "Stable",
                    "heart_rate": "72",
                    "anomaly": "False"
          },
          {
                    "key": "Patient_ABC",
                    "vitals": "Unstable",
                    "heart_rate": "145",
                    "anomaly": "True"
          },
          {
                    "key": "Patient_LMN",
                    "vitals": "Stable",
                    "heart_rate": "65",
                    "anomaly": "False"
          },
          {
                    "key": "Patient_QRS",
                    "vitals": "Stable",
                    "heart_rate": "80",
                    "anomaly": "False"
          }
]
    },
    {
        id: 'lesson-w33-d5',
        title: 'Math for AI (Stats) - Part 5',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/HcqpanDadyQ?si=premium_mode',
        sources: [
            { title: 'Official Documentation', url: 'https://developer.mozilla.org/' },
            { title: 'Architect Archives', url: '#' }
        ],
        story: `<div class="quad-track"><div class="track-section tech"><h4>💻 1. Core Mechanics</h4><p>Mastering this concept requires understanding the underlying synthetic logic. In enterprise computing, this is the foundational bedrock.</p></div><div class="track-section health"><h4>🏥 2. Bio-Systems</h4><p>Data science in healthcare relies on absolute precision. We apply this logic to sequence genomic arrays.</p></div><div class="track-section bio"><h4>🧬 3. Neural Architecture</h4><p>Information must flow efficiently like a biological synapse. Optimize your code.</p></div><div class="track-section lab"><h4>🧪 4. God-Mode Lab</h4><p><strong>Mission:</strong> Locate the critical node anomaly to restore integrity.</p></div></div>`,
        task: {
            type: 'find-value',
            targetColumn: 'status',
            condition: (val) => val === 'CRITICAL',
            successMessage: "System Override Successful. Node unlocked. +100 XP.",
            errorMessage: "Locate the CRITICAL status node."
        },
        data: [
          {
                    "id": 3330,
                    "value": "Alpha_Node",
                    "metric": "0.45",
                    "status": "Active"
          },
          {
                    "id": 8091,
                    "value": "Beta_Node",
                    "metric": "0.89",
                    "status": "Active"
          },
          {
                    "id": 6972,
                    "value": "Omega_Node",
                    "metric": "0.01",
                    "status": "CRITICAL"
          },
          {
                    "id": 7529,
                    "value": "Zeta_Node",
                    "metric": "1.00",
                    "status": "Active"
          }
]
    },
    {
        id: 'lesson-w33-d6',
        title: 'Math for AI (Stats) - Part 6',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/zOjov-2OZ0E?si=premium_mode',
        sources: [
            { title: 'Official Documentation', url: 'https://developer.mozilla.org/' },
            { title: 'Architect Archives', url: '#' }
        ],
        story: `<div class="quad-track"><div class="track-section tech"><h4>💻 1. Algorithmic Processing</h4><p>This module focuses on high-speed data parsing. Time Complexity (Big O) prevents server timeouts.</p></div><div class="track-section health"><h4>🏥 2. Clinical Data Streams</h4><p>Hospitals generate terabytes of telemetry hourly. Structuring this raw byte data is critical.</p></div><div class="track-section bio"><h4>🧬 3. Evolutionary Algorithms</h4><p>Algorithms evolve through mutation and selection. Structure ML pipelines to adapt dynamically.</p></div><div class="track-section lab"><h4>🧪 4. God-Mode Lab</h4><p><strong>Mission:</strong> The pipeline has stalled. Isolate the errant data frame.</p></div></div>`,
        task: {
            type: 'find-value',
            targetColumn: 'anomaly',
            condition: (val) => val === 'True',
            successMessage: "System Override Successful. Node unlocked. +100 XP.",
            errorMessage: "Find the True anomaly flag."
        },
        data: [
          {
                    "key": "Patient_XYZ",
                    "vitals": "Stable",
                    "heart_rate": "72",
                    "anomaly": "False"
          },
          {
                    "key": "Patient_ABC",
                    "vitals": "Unstable",
                    "heart_rate": "145",
                    "anomaly": "True"
          },
          {
                    "key": "Patient_LMN",
                    "vitals": "Stable",
                    "heart_rate": "65",
                    "anomaly": "False"
          },
          {
                    "key": "Patient_QRS",
                    "vitals": "Stable",
                    "heart_rate": "80",
                    "anomaly": "False"
          }
]
    },
    {
        id: 'lesson-w33-d7',
        title: 'Weekly Concept Review',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/aircAruvnKk?si=premium_mode',
        sources: [
            { title: 'Official Documentation', url: 'https://developer.mozilla.org/' },
            { title: 'Architect Archives', url: '#' }
        ],
        story: `<div class="quad-track"><div class="track-section tech"><h4>💻 1. Algorithmic Processing</h4><p>This module focuses on high-speed data parsing. Time Complexity (Big O) prevents server timeouts.</p></div><div class="track-section health"><h4>🏥 2. Clinical Data Streams</h4><p>Hospitals generate terabytes of telemetry hourly. Structuring this raw byte data is critical.</p></div><div class="track-section bio"><h4>🧬 3. Evolutionary Algorithms</h4><p>Algorithms evolve through mutation and selection. Structure ML pipelines to adapt dynamically.</p></div><div class="track-section lab"><h4>🧪 4. God-Mode Lab</h4><p><strong>Mission:</strong> The pipeline has stalled. Isolate the errant data frame.</p></div></div>`,
        task: {
            type: 'find-value',
            targetColumn: 'anomaly',
            condition: (val) => val === 'True',
            successMessage: "System Override Successful. Node unlocked. +100 XP.",
            errorMessage: "Find the True anomaly flag."
        },
        data: [
          {
                    "key": "Patient_XYZ",
                    "vitals": "Stable",
                    "heart_rate": "72",
                    "anomaly": "False"
          },
          {
                    "key": "Patient_ABC",
                    "vitals": "Unstable",
                    "heart_rate": "145",
                    "anomaly": "True"
          },
          {
                    "key": "Patient_LMN",
                    "vitals": "Stable",
                    "heart_rate": "65",
                    "anomaly": "False"
          },
          {
                    "key": "Patient_QRS",
                    "vitals": "Stable",
                    "heart_rate": "80",
                    "anomaly": "False"
          }
]
    },
    {
        id: 'lesson-w34-d1',
        title: 'Math for AI (Linear Alg) - Part 1',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/aircAruvnKk?si=premium_mode',
        sources: [
            { title: 'Official Documentation', url: 'https://developer.mozilla.org/' },
            { title: 'Architect Archives', url: '#' }
        ],
        story: `<div class="quad-track"><div class="track-section tech"><h4>💻 1. Algorithmic Processing</h4><p>This module focuses on high-speed data parsing. Time Complexity (Big O) prevents server timeouts.</p></div><div class="track-section health"><h4>🏥 2. Clinical Data Streams</h4><p>Hospitals generate terabytes of telemetry hourly. Structuring this raw byte data is critical.</p></div><div class="track-section bio"><h4>🧬 3. Evolutionary Algorithms</h4><p>Algorithms evolve through mutation and selection. Structure ML pipelines to adapt dynamically.</p></div><div class="track-section lab"><h4>🧪 4. God-Mode Lab</h4><p><strong>Mission:</strong> The pipeline has stalled. Isolate the errant data frame.</p></div></div>`,
        task: {
            type: 'find-value',
            targetColumn: 'status',
            condition: (val) => val === 'CRITICAL',
            successMessage: "System Override Successful. Node unlocked. +100 XP.",
            errorMessage: "Locate the CRITICAL status node."
        },
        data: [
          {
                    "id": 5602,
                    "value": "Alpha_Node",
                    "metric": "0.45",
                    "status": "Active"
          },
          {
                    "id": 3781,
                    "value": "Beta_Node",
                    "metric": "0.89",
                    "status": "Active"
          },
          {
                    "id": 5830,
                    "value": "Omega_Node",
                    "metric": "0.01",
                    "status": "CRITICAL"
          },
          {
                    "id": 3304,
                    "value": "Zeta_Node",
                    "metric": "1.00",
                    "status": "Active"
          }
]
    },
    {
        id: 'lesson-w34-d2',
        title: 'Math for AI (Linear Alg) - Part 2',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/aircAruvnKk?si=premium_mode',
        sources: [
            { title: 'Official Documentation', url: 'https://developer.mozilla.org/' },
            { title: 'Architect Archives', url: '#' }
        ],
        story: `<div class="quad-track"><div class="track-section tech"><h4>💻 1. Algorithmic Processing</h4><p>This module focuses on high-speed data parsing. Time Complexity (Big O) prevents server timeouts.</p></div><div class="track-section health"><h4>🏥 2. Clinical Data Streams</h4><p>Hospitals generate terabytes of telemetry hourly. Structuring this raw byte data is critical.</p></div><div class="track-section bio"><h4>🧬 3. Evolutionary Algorithms</h4><p>Algorithms evolve through mutation and selection. Structure ML pipelines to adapt dynamically.</p></div><div class="track-section lab"><h4>🧪 4. God-Mode Lab</h4><p><strong>Mission:</strong> The pipeline has stalled. Isolate the errant data frame.</p></div></div>`,
        task: {
            type: 'find-value',
            targetColumn: 'status',
            condition: (val) => val === 'CRITICAL',
            successMessage: "System Override Successful. Node unlocked. +100 XP.",
            errorMessage: "Locate the CRITICAL status node."
        },
        data: [
          {
                    "id": 1718,
                    "value": "Alpha_Node",
                    "metric": "0.45",
                    "status": "Active"
          },
          {
                    "id": 7707,
                    "value": "Beta_Node",
                    "metric": "0.89",
                    "status": "Active"
          },
          {
                    "id": 4756,
                    "value": "Omega_Node",
                    "metric": "0.01",
                    "status": "CRITICAL"
          },
          {
                    "id": 4049,
                    "value": "Zeta_Node",
                    "metric": "1.00",
                    "status": "Active"
          }
]
    },
    {
        id: 'lesson-w34-d3',
        title: 'Math for AI (Linear Alg) - Part 3',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/rpkpK_n2ad0?si=premium_mode',
        sources: [
            { title: 'Official Documentation', url: 'https://developer.mozilla.org/' },
            { title: 'Architect Archives', url: '#' }
        ],
        story: `<div class="quad-track"><div class="track-section tech"><h4>💻 1. Algorithmic Processing</h4><p>This module focuses on high-speed data parsing. Time Complexity (Big O) prevents server timeouts.</p></div><div class="track-section health"><h4>🏥 2. Clinical Data Streams</h4><p>Hospitals generate terabytes of telemetry hourly. Structuring this raw byte data is critical.</p></div><div class="track-section bio"><h4>🧬 3. Evolutionary Algorithms</h4><p>Algorithms evolve through mutation and selection. Structure ML pipelines to adapt dynamically.</p></div><div class="track-section lab"><h4>🧪 4. God-Mode Lab</h4><p><strong>Mission:</strong> The pipeline has stalled. Isolate the errant data frame.</p></div></div>`,
        task: {
            type: 'find-value',
            targetColumn: 'status',
            condition: (val) => val === 'CRITICAL',
            successMessage: "System Override Successful. Node unlocked. +100 XP.",
            errorMessage: "Locate the CRITICAL status node."
        },
        data: [
          {
                    "id": 4864,
                    "value": "Alpha_Node",
                    "metric": "0.45",
                    "status": "Active"
          },
          {
                    "id": 7236,
                    "value": "Beta_Node",
                    "metric": "0.89",
                    "status": "Active"
          },
          {
                    "id": 3542,
                    "value": "Omega_Node",
                    "metric": "0.01",
                    "status": "CRITICAL"
          },
          {
                    "id": 1488,
                    "value": "Zeta_Node",
                    "metric": "1.00",
                    "status": "Active"
          }
]
    },
    {
        id: 'lesson-w34-d4',
        title: 'Math for AI (Linear Alg) - Part 4',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/zOjov-2OZ0E?si=premium_mode',
        sources: [
            { title: 'Official Documentation', url: 'https://developer.mozilla.org/' },
            { title: 'Architect Archives', url: '#' }
        ],
        story: `<div class="quad-track"><div class="track-section tech"><h4>💻 1. Algorithmic Processing</h4><p>This module focuses on high-speed data parsing. Time Complexity (Big O) prevents server timeouts.</p></div><div class="track-section health"><h4>🏥 2. Clinical Data Streams</h4><p>Hospitals generate terabytes of telemetry hourly. Structuring this raw byte data is critical.</p></div><div class="track-section bio"><h4>🧬 3. Evolutionary Algorithms</h4><p>Algorithms evolve through mutation and selection. Structure ML pipelines to adapt dynamically.</p></div><div class="track-section lab"><h4>🧪 4. God-Mode Lab</h4><p><strong>Mission:</strong> The pipeline has stalled. Isolate the errant data frame.</p></div></div>`,
        task: {
            type: 'find-value',
            targetColumn: 'anomaly',
            condition: (val) => val === 'True',
            successMessage: "System Override Successful. Node unlocked. +100 XP.",
            errorMessage: "Find the True anomaly flag."
        },
        data: [
          {
                    "key": "Patient_XYZ",
                    "vitals": "Stable",
                    "heart_rate": "72",
                    "anomaly": "False"
          },
          {
                    "key": "Patient_ABC",
                    "vitals": "Unstable",
                    "heart_rate": "145",
                    "anomaly": "True"
          },
          {
                    "key": "Patient_LMN",
                    "vitals": "Stable",
                    "heart_rate": "65",
                    "anomaly": "False"
          },
          {
                    "key": "Patient_QRS",
                    "vitals": "Stable",
                    "heart_rate": "80",
                    "anomaly": "False"
          }
]
    },
    {
        id: 'lesson-w34-d5',
        title: 'Math for AI (Linear Alg) - Part 5',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/aircAruvnKk?si=premium_mode',
        sources: [
            { title: 'Official Documentation', url: 'https://developer.mozilla.org/' },
            { title: 'Architect Archives', url: '#' }
        ],
        story: `<div class="quad-track"><div class="track-section tech"><h4>💻 1. Algorithmic Processing</h4><p>This module focuses on high-speed data parsing. Time Complexity (Big O) prevents server timeouts.</p></div><div class="track-section health"><h4>🏥 2. Clinical Data Streams</h4><p>Hospitals generate terabytes of telemetry hourly. Structuring this raw byte data is critical.</p></div><div class="track-section bio"><h4>🧬 3. Evolutionary Algorithms</h4><p>Algorithms evolve through mutation and selection. Structure ML pipelines to adapt dynamically.</p></div><div class="track-section lab"><h4>🧪 4. God-Mode Lab</h4><p><strong>Mission:</strong> The pipeline has stalled. Isolate the errant data frame.</p></div></div>`,
        task: {
            type: 'find-value',
            targetColumn: 'anomaly',
            condition: (val) => val === 'True',
            successMessage: "System Override Successful. Node unlocked. +100 XP.",
            errorMessage: "Find the True anomaly flag."
        },
        data: [
          {
                    "key": "Patient_XYZ",
                    "vitals": "Stable",
                    "heart_rate": "72",
                    "anomaly": "False"
          },
          {
                    "key": "Patient_ABC",
                    "vitals": "Unstable",
                    "heart_rate": "145",
                    "anomaly": "True"
          },
          {
                    "key": "Patient_LMN",
                    "vitals": "Stable",
                    "heart_rate": "65",
                    "anomaly": "False"
          },
          {
                    "key": "Patient_QRS",
                    "vitals": "Stable",
                    "heart_rate": "80",
                    "anomaly": "False"
          }
]
    },
    {
        id: 'lesson-w34-d6',
        title: 'Math for AI (Linear Alg) - Part 6',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/HcqpanDadyQ?si=premium_mode',
        sources: [
            { title: 'Official Documentation', url: 'https://developer.mozilla.org/' },
            { title: 'Architect Archives', url: '#' }
        ],
        story: `<div class="quad-track"><div class="track-section tech"><h4>💻 1. Core Mechanics</h4><p>Mastering this concept requires understanding the underlying synthetic logic. In enterprise computing, this is the foundational bedrock.</p></div><div class="track-section health"><h4>🏥 2. Bio-Systems</h4><p>Data science in healthcare relies on absolute precision. We apply this logic to sequence genomic arrays.</p></div><div class="track-section bio"><h4>🧬 3. Neural Architecture</h4><p>Information must flow efficiently like a biological synapse. Optimize your code.</p></div><div class="track-section lab"><h4>🧪 4. God-Mode Lab</h4><p><strong>Mission:</strong> Locate the critical node anomaly to restore integrity.</p></div></div>`,
        task: {
            type: 'find-value',
            targetColumn: 'anomaly',
            condition: (val) => val === 'True',
            successMessage: "System Override Successful. Node unlocked. +100 XP.",
            errorMessage: "Find the True anomaly flag."
        },
        data: [
          {
                    "key": "Patient_XYZ",
                    "vitals": "Stable",
                    "heart_rate": "72",
                    "anomaly": "False"
          },
          {
                    "key": "Patient_ABC",
                    "vitals": "Unstable",
                    "heart_rate": "145",
                    "anomaly": "True"
          },
          {
                    "key": "Patient_LMN",
                    "vitals": "Stable",
                    "heart_rate": "65",
                    "anomaly": "False"
          },
          {
                    "key": "Patient_QRS",
                    "vitals": "Stable",
                    "heart_rate": "80",
                    "anomaly": "False"
          }
]
    },
    {
        id: 'lesson-w34-d7',
        title: 'Weekly Concept Review',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/rpkpK_n2ad0?si=premium_mode',
        sources: [
            { title: 'Official Documentation', url: 'https://developer.mozilla.org/' },
            { title: 'Architect Archives', url: '#' }
        ],
        story: `<div class="quad-track"><div class="track-section tech"><h4>💻 1. Algorithmic Processing</h4><p>This module focuses on high-speed data parsing. Time Complexity (Big O) prevents server timeouts.</p></div><div class="track-section health"><h4>🏥 2. Clinical Data Streams</h4><p>Hospitals generate terabytes of telemetry hourly. Structuring this raw byte data is critical.</p></div><div class="track-section bio"><h4>🧬 3. Evolutionary Algorithms</h4><p>Algorithms evolve through mutation and selection. Structure ML pipelines to adapt dynamically.</p></div><div class="track-section lab"><h4>🧪 4. God-Mode Lab</h4><p><strong>Mission:</strong> The pipeline has stalled. Isolate the errant data frame.</p></div></div>`,
        task: {
            type: 'find-value',
            targetColumn: 'anomaly',
            condition: (val) => val === 'True',
            successMessage: "System Override Successful. Node unlocked. +100 XP.",
            errorMessage: "Find the True anomaly flag."
        },
        data: [
          {
                    "key": "Patient_XYZ",
                    "vitals": "Stable",
                    "heart_rate": "72",
                    "anomaly": "False"
          },
          {
                    "key": "Patient_ABC",
                    "vitals": "Unstable",
                    "heart_rate": "145",
                    "anomaly": "True"
          },
          {
                    "key": "Patient_LMN",
                    "vitals": "Stable",
                    "heart_rate": "65",
                    "anomaly": "False"
          },
          {
                    "key": "Patient_QRS",
                    "vitals": "Stable",
                    "heart_rate": "80",
                    "anomaly": "False"
          }
]
    },
    {
        id: 'lesson-w35-d1',
        title: 'ML: Linear Regression - Part 1',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/zOjov-2OZ0E?si=premium_mode',
        sources: [
            { title: 'Official Documentation', url: 'https://developer.mozilla.org/' },
            { title: 'Architect Archives', url: '#' }
        ],
        story: `<div class="quad-track"><div class="track-section tech"><h4>💻 1. Core Mechanics</h4><p>Mastering this concept requires understanding the underlying synthetic logic. In enterprise computing, this is the foundational bedrock.</p></div><div class="track-section health"><h4>🏥 2. Bio-Systems</h4><p>Data science in healthcare relies on absolute precision. We apply this logic to sequence genomic arrays.</p></div><div class="track-section bio"><h4>🧬 3. Neural Architecture</h4><p>Information must flow efficiently like a biological synapse. Optimize your code.</p></div><div class="track-section lab"><h4>🧪 4. God-Mode Lab</h4><p><strong>Mission:</strong> Locate the critical node anomaly to restore integrity.</p></div></div>`,
        task: {
            type: 'find-value',
            targetColumn: 'anomaly',
            condition: (val) => val === 'True',
            successMessage: "System Override Successful. Node unlocked. +100 XP.",
            errorMessage: "Find the True anomaly flag."
        },
        data: [
          {
                    "key": "Patient_XYZ",
                    "vitals": "Stable",
                    "heart_rate": "72",
                    "anomaly": "False"
          },
          {
                    "key": "Patient_ABC",
                    "vitals": "Unstable",
                    "heart_rate": "145",
                    "anomaly": "True"
          },
          {
                    "key": "Patient_LMN",
                    "vitals": "Stable",
                    "heart_rate": "65",
                    "anomaly": "False"
          },
          {
                    "key": "Patient_QRS",
                    "vitals": "Stable",
                    "heart_rate": "80",
                    "anomaly": "False"
          }
]
    },
    {
        id: 'lesson-w35-d2',
        title: 'ML: Linear Regression - Part 2',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/HcqpanDadyQ?si=premium_mode',
        sources: [
            { title: 'Official Documentation', url: 'https://developer.mozilla.org/' },
            { title: 'Architect Archives', url: '#' }
        ],
        story: `<div class="quad-track"><div class="track-section tech"><h4>💻 1. Core Mechanics</h4><p>Mastering this concept requires understanding the underlying synthetic logic. In enterprise computing, this is the foundational bedrock.</p></div><div class="track-section health"><h4>🏥 2. Bio-Systems</h4><p>Data science in healthcare relies on absolute precision. We apply this logic to sequence genomic arrays.</p></div><div class="track-section bio"><h4>🧬 3. Neural Architecture</h4><p>Information must flow efficiently like a biological synapse. Optimize your code.</p></div><div class="track-section lab"><h4>🧪 4. God-Mode Lab</h4><p><strong>Mission:</strong> Locate the critical node anomaly to restore integrity.</p></div></div>`,
        task: {
            type: 'find-value',
            targetColumn: 'status',
            condition: (val) => val === 'CRITICAL',
            successMessage: "System Override Successful. Node unlocked. +100 XP.",
            errorMessage: "Locate the CRITICAL status node."
        },
        data: [
          {
                    "id": 6438,
                    "value": "Alpha_Node",
                    "metric": "0.45",
                    "status": "Active"
          },
          {
                    "id": 7669,
                    "value": "Beta_Node",
                    "metric": "0.89",
                    "status": "Active"
          },
          {
                    "id": 3274,
                    "value": "Omega_Node",
                    "metric": "0.01",
                    "status": "CRITICAL"
          },
          {
                    "id": 3674,
                    "value": "Zeta_Node",
                    "metric": "1.00",
                    "status": "Active"
          }
]
    },
    {
        id: 'lesson-w35-d3',
        title: 'ML: Linear Regression - Part 3',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/HcqpanDadyQ?si=premium_mode',
        sources: [
            { title: 'Official Documentation', url: 'https://developer.mozilla.org/' },
            { title: 'Architect Archives', url: '#' }
        ],
        story: `<div class="quad-track"><div class="track-section tech"><h4>💻 1. Algorithmic Processing</h4><p>This module focuses on high-speed data parsing. Time Complexity (Big O) prevents server timeouts.</p></div><div class="track-section health"><h4>🏥 2. Clinical Data Streams</h4><p>Hospitals generate terabytes of telemetry hourly. Structuring this raw byte data is critical.</p></div><div class="track-section bio"><h4>🧬 3. Evolutionary Algorithms</h4><p>Algorithms evolve through mutation and selection. Structure ML pipelines to adapt dynamically.</p></div><div class="track-section lab"><h4>🧪 4. God-Mode Lab</h4><p><strong>Mission:</strong> The pipeline has stalled. Isolate the errant data frame.</p></div></div>`,
        task: {
            type: 'find-value',
            targetColumn: 'status',
            condition: (val) => val === 'CRITICAL',
            successMessage: "System Override Successful. Node unlocked. +100 XP.",
            errorMessage: "Locate the CRITICAL status node."
        },
        data: [
          {
                    "id": 6028,
                    "value": "Alpha_Node",
                    "metric": "0.45",
                    "status": "Active"
          },
          {
                    "id": 2736,
                    "value": "Beta_Node",
                    "metric": "0.89",
                    "status": "Active"
          },
          {
                    "id": 6318,
                    "value": "Omega_Node",
                    "metric": "0.01",
                    "status": "CRITICAL"
          },
          {
                    "id": 4907,
                    "value": "Zeta_Node",
                    "metric": "1.00",
                    "status": "Active"
          }
]
    },
    {
        id: 'lesson-w35-d4',
        title: 'ML: Linear Regression - Part 4',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/rpkpK_n2ad0?si=premium_mode',
        sources: [
            { title: 'Official Documentation', url: 'https://developer.mozilla.org/' },
            { title: 'Architect Archives', url: '#' }
        ],
        story: `<div class="quad-track"><div class="track-section tech"><h4>💻 1. Algorithmic Processing</h4><p>This module focuses on high-speed data parsing. Time Complexity (Big O) prevents server timeouts.</p></div><div class="track-section health"><h4>🏥 2. Clinical Data Streams</h4><p>Hospitals generate terabytes of telemetry hourly. Structuring this raw byte data is critical.</p></div><div class="track-section bio"><h4>🧬 3. Evolutionary Algorithms</h4><p>Algorithms evolve through mutation and selection. Structure ML pipelines to adapt dynamically.</p></div><div class="track-section lab"><h4>🧪 4. God-Mode Lab</h4><p><strong>Mission:</strong> The pipeline has stalled. Isolate the errant data frame.</p></div></div>`,
        task: {
            type: 'find-value',
            targetColumn: 'status',
            condition: (val) => val === 'CRITICAL',
            successMessage: "System Override Successful. Node unlocked. +100 XP.",
            errorMessage: "Locate the CRITICAL status node."
        },
        data: [
          {
                    "id": 5498,
                    "value": "Alpha_Node",
                    "metric": "0.45",
                    "status": "Active"
          },
          {
                    "id": 6153,
                    "value": "Beta_Node",
                    "metric": "0.89",
                    "status": "Active"
          },
          {
                    "id": 6029,
                    "value": "Omega_Node",
                    "metric": "0.01",
                    "status": "CRITICAL"
          },
          {
                    "id": 8736,
                    "value": "Zeta_Node",
                    "metric": "1.00",
                    "status": "Active"
          }
]
    },
    {
        id: 'lesson-w35-d5',
        title: 'ML: Linear Regression - Part 5',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/rpkpK_n2ad0?si=premium_mode',
        sources: [
            { title: 'Official Documentation', url: 'https://developer.mozilla.org/' },
            { title: 'Architect Archives', url: '#' }
        ],
        story: `<div class="quad-track"><div class="track-section tech"><h4>💻 1. Core Mechanics</h4><p>Mastering this concept requires understanding the underlying synthetic logic. In enterprise computing, this is the foundational bedrock.</p></div><div class="track-section health"><h4>🏥 2. Bio-Systems</h4><p>Data science in healthcare relies on absolute precision. We apply this logic to sequence genomic arrays.</p></div><div class="track-section bio"><h4>🧬 3. Neural Architecture</h4><p>Information must flow efficiently like a biological synapse. Optimize your code.</p></div><div class="track-section lab"><h4>🧪 4. God-Mode Lab</h4><p><strong>Mission:</strong> Locate the critical node anomaly to restore integrity.</p></div></div>`,
        task: {
            type: 'find-value',
            targetColumn: 'status',
            condition: (val) => val === 'CRITICAL',
            successMessage: "System Override Successful. Node unlocked. +100 XP.",
            errorMessage: "Locate the CRITICAL status node."
        },
        data: [
          {
                    "id": 4554,
                    "value": "Alpha_Node",
                    "metric": "0.45",
                    "status": "Active"
          },
          {
                    "id": 7687,
                    "value": "Beta_Node",
                    "metric": "0.89",
                    "status": "Active"
          },
          {
                    "id": 8530,
                    "value": "Omega_Node",
                    "metric": "0.01",
                    "status": "CRITICAL"
          },
          {
                    "id": 3603,
                    "value": "Zeta_Node",
                    "metric": "1.00",
                    "status": "Active"
          }
]
    },
    {
        id: 'lesson-w35-d6',
        title: 'ML: Linear Regression - Part 6',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/HcqpanDadyQ?si=premium_mode',
        sources: [
            { title: 'Official Documentation', url: 'https://developer.mozilla.org/' },
            { title: 'Architect Archives', url: '#' }
        ],
        story: `<div class="quad-track"><div class="track-section tech"><h4>💻 1. Algorithmic Processing</h4><p>This module focuses on high-speed data parsing. Time Complexity (Big O) prevents server timeouts.</p></div><div class="track-section health"><h4>🏥 2. Clinical Data Streams</h4><p>Hospitals generate terabytes of telemetry hourly. Structuring this raw byte data is critical.</p></div><div class="track-section bio"><h4>🧬 3. Evolutionary Algorithms</h4><p>Algorithms evolve through mutation and selection. Structure ML pipelines to adapt dynamically.</p></div><div class="track-section lab"><h4>🧪 4. God-Mode Lab</h4><p><strong>Mission:</strong> The pipeline has stalled. Isolate the errant data frame.</p></div></div>`,
        task: {
            type: 'find-value',
            targetColumn: 'anomaly',
            condition: (val) => val === 'True',
            successMessage: "System Override Successful. Node unlocked. +100 XP.",
            errorMessage: "Find the True anomaly flag."
        },
        data: [
          {
                    "key": "Patient_XYZ",
                    "vitals": "Stable",
                    "heart_rate": "72",
                    "anomaly": "False"
          },
          {
                    "key": "Patient_ABC",
                    "vitals": "Unstable",
                    "heart_rate": "145",
                    "anomaly": "True"
          },
          {
                    "key": "Patient_LMN",
                    "vitals": "Stable",
                    "heart_rate": "65",
                    "anomaly": "False"
          },
          {
                    "key": "Patient_QRS",
                    "vitals": "Stable",
                    "heart_rate": "80",
                    "anomaly": "False"
          }
]
    },
    {
        id: 'lesson-w35-d7',
        title: 'Weekly Concept Review',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/zOjov-2OZ0E?si=premium_mode',
        sources: [
            { title: 'Official Documentation', url: 'https://developer.mozilla.org/' },
            { title: 'Architect Archives', url: '#' }
        ],
        story: `<div class="quad-track"><div class="track-section tech"><h4>💻 1. Algorithmic Processing</h4><p>This module focuses on high-speed data parsing. Time Complexity (Big O) prevents server timeouts.</p></div><div class="track-section health"><h4>🏥 2. Clinical Data Streams</h4><p>Hospitals generate terabytes of telemetry hourly. Structuring this raw byte data is critical.</p></div><div class="track-section bio"><h4>🧬 3. Evolutionary Algorithms</h4><p>Algorithms evolve through mutation and selection. Structure ML pipelines to adapt dynamically.</p></div><div class="track-section lab"><h4>🧪 4. God-Mode Lab</h4><p><strong>Mission:</strong> The pipeline has stalled. Isolate the errant data frame.</p></div></div>`,
        task: {
            type: 'find-value',
            targetColumn: 'anomaly',
            condition: (val) => val === 'True',
            successMessage: "System Override Successful. Node unlocked. +100 XP.",
            errorMessage: "Find the True anomaly flag."
        },
        data: [
          {
                    "key": "Patient_XYZ",
                    "vitals": "Stable",
                    "heart_rate": "72",
                    "anomaly": "False"
          },
          {
                    "key": "Patient_ABC",
                    "vitals": "Unstable",
                    "heart_rate": "145",
                    "anomaly": "True"
          },
          {
                    "key": "Patient_LMN",
                    "vitals": "Stable",
                    "heart_rate": "65",
                    "anomaly": "False"
          },
          {
                    "key": "Patient_QRS",
                    "vitals": "Stable",
                    "heart_rate": "80",
                    "anomaly": "False"
          }
]
    },
    {
        id: 'lesson-w36-d1',
        title: 'ML: Logistic Regression - Part 1',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/rpkpK_n2ad0?si=premium_mode',
        sources: [
            { title: 'Official Documentation', url: 'https://developer.mozilla.org/' },
            { title: 'Architect Archives', url: '#' }
        ],
        story: `<div class="quad-track"><div class="track-section tech"><h4>💻 1. Algorithmic Processing</h4><p>This module focuses on high-speed data parsing. Time Complexity (Big O) prevents server timeouts.</p></div><div class="track-section health"><h4>🏥 2. Clinical Data Streams</h4><p>Hospitals generate terabytes of telemetry hourly. Structuring this raw byte data is critical.</p></div><div class="track-section bio"><h4>🧬 3. Evolutionary Algorithms</h4><p>Algorithms evolve through mutation and selection. Structure ML pipelines to adapt dynamically.</p></div><div class="track-section lab"><h4>🧪 4. God-Mode Lab</h4><p><strong>Mission:</strong> The pipeline has stalled. Isolate the errant data frame.</p></div></div>`,
        task: {
            type: 'find-value',
            targetColumn: 'status',
            condition: (val) => val === 'CRITICAL',
            successMessage: "System Override Successful. Node unlocked. +100 XP.",
            errorMessage: "Locate the CRITICAL status node."
        },
        data: [
          {
                    "id": 9897,
                    "value": "Alpha_Node",
                    "metric": "0.45",
                    "status": "Active"
          },
          {
                    "id": 2642,
                    "value": "Beta_Node",
                    "metric": "0.89",
                    "status": "Active"
          },
          {
                    "id": 3031,
                    "value": "Omega_Node",
                    "metric": "0.01",
                    "status": "CRITICAL"
          },
          {
                    "id": 4451,
                    "value": "Zeta_Node",
                    "metric": "1.00",
                    "status": "Active"
          }
]
    },
    {
        id: 'lesson-w36-d2',
        title: 'ML: Logistic Regression - Part 2',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/HcqpanDadyQ?si=premium_mode',
        sources: [
            { title: 'Official Documentation', url: 'https://developer.mozilla.org/' },
            { title: 'Architect Archives', url: '#' }
        ],
        story: `<div class="quad-track"><div class="track-section tech"><h4>💻 1. Core Mechanics</h4><p>Mastering this concept requires understanding the underlying synthetic logic. In enterprise computing, this is the foundational bedrock.</p></div><div class="track-section health"><h4>🏥 2. Bio-Systems</h4><p>Data science in healthcare relies on absolute precision. We apply this logic to sequence genomic arrays.</p></div><div class="track-section bio"><h4>🧬 3. Neural Architecture</h4><p>Information must flow efficiently like a biological synapse. Optimize your code.</p></div><div class="track-section lab"><h4>🧪 4. God-Mode Lab</h4><p><strong>Mission:</strong> Locate the critical node anomaly to restore integrity.</p></div></div>`,
        task: {
            type: 'find-value',
            targetColumn: 'anomaly',
            condition: (val) => val === 'True',
            successMessage: "System Override Successful. Node unlocked. +100 XP.",
            errorMessage: "Find the True anomaly flag."
        },
        data: [
          {
                    "key": "Patient_XYZ",
                    "vitals": "Stable",
                    "heart_rate": "72",
                    "anomaly": "False"
          },
          {
                    "key": "Patient_ABC",
                    "vitals": "Unstable",
                    "heart_rate": "145",
                    "anomaly": "True"
          },
          {
                    "key": "Patient_LMN",
                    "vitals": "Stable",
                    "heart_rate": "65",
                    "anomaly": "False"
          },
          {
                    "key": "Patient_QRS",
                    "vitals": "Stable",
                    "heart_rate": "80",
                    "anomaly": "False"
          }
]
    },
    {
        id: 'lesson-w36-d3',
        title: 'ML: Logistic Regression - Part 3',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/HcqpanDadyQ?si=premium_mode',
        sources: [
            { title: 'Official Documentation', url: 'https://developer.mozilla.org/' },
            { title: 'Architect Archives', url: '#' }
        ],
        story: `<div class="quad-track"><div class="track-section tech"><h4>💻 1. Algorithmic Processing</h4><p>This module focuses on high-speed data parsing. Time Complexity (Big O) prevents server timeouts.</p></div><div class="track-section health"><h4>🏥 2. Clinical Data Streams</h4><p>Hospitals generate terabytes of telemetry hourly. Structuring this raw byte data is critical.</p></div><div class="track-section bio"><h4>🧬 3. Evolutionary Algorithms</h4><p>Algorithms evolve through mutation and selection. Structure ML pipelines to adapt dynamically.</p></div><div class="track-section lab"><h4>🧪 4. God-Mode Lab</h4><p><strong>Mission:</strong> The pipeline has stalled. Isolate the errant data frame.</p></div></div>`,
        task: {
            type: 'find-value',
            targetColumn: 'anomaly',
            condition: (val) => val === 'True',
            successMessage: "System Override Successful. Node unlocked. +100 XP.",
            errorMessage: "Find the True anomaly flag."
        },
        data: [
          {
                    "key": "Patient_XYZ",
                    "vitals": "Stable",
                    "heart_rate": "72",
                    "anomaly": "False"
          },
          {
                    "key": "Patient_ABC",
                    "vitals": "Unstable",
                    "heart_rate": "145",
                    "anomaly": "True"
          },
          {
                    "key": "Patient_LMN",
                    "vitals": "Stable",
                    "heart_rate": "65",
                    "anomaly": "False"
          },
          {
                    "key": "Patient_QRS",
                    "vitals": "Stable",
                    "heart_rate": "80",
                    "anomaly": "False"
          }
]
    },
    {
        id: 'lesson-w36-d4',
        title: 'ML: Logistic Regression - Part 4',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/zOjov-2OZ0E?si=premium_mode',
        sources: [
            { title: 'Official Documentation', url: 'https://developer.mozilla.org/' },
            { title: 'Architect Archives', url: '#' }
        ],
        story: `<div class="quad-track"><div class="track-section tech"><h4>💻 1. Core Mechanics</h4><p>Mastering this concept requires understanding the underlying synthetic logic. In enterprise computing, this is the foundational bedrock.</p></div><div class="track-section health"><h4>🏥 2. Bio-Systems</h4><p>Data science in healthcare relies on absolute precision. We apply this logic to sequence genomic arrays.</p></div><div class="track-section bio"><h4>🧬 3. Neural Architecture</h4><p>Information must flow efficiently like a biological synapse. Optimize your code.</p></div><div class="track-section lab"><h4>🧪 4. God-Mode Lab</h4><p><strong>Mission:</strong> Locate the critical node anomaly to restore integrity.</p></div></div>`,
        task: {
            type: 'find-value',
            targetColumn: 'status',
            condition: (val) => val === 'CRITICAL',
            successMessage: "System Override Successful. Node unlocked. +100 XP.",
            errorMessage: "Locate the CRITICAL status node."
        },
        data: [
          {
                    "id": 7251,
                    "value": "Alpha_Node",
                    "metric": "0.45",
                    "status": "Active"
          },
          {
                    "id": 9094,
                    "value": "Beta_Node",
                    "metric": "0.89",
                    "status": "Active"
          },
          {
                    "id": 2890,
                    "value": "Omega_Node",
                    "metric": "0.01",
                    "status": "CRITICAL"
          },
          {
                    "id": 4363,
                    "value": "Zeta_Node",
                    "metric": "1.00",
                    "status": "Active"
          }
]
    },
    {
        id: 'lesson-w36-d5',
        title: 'ML: Logistic Regression - Part 5',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/zOjov-2OZ0E?si=premium_mode',
        sources: [
            { title: 'Official Documentation', url: 'https://developer.mozilla.org/' },
            { title: 'Architect Archives', url: '#' }
        ],
        story: `<div class="quad-track"><div class="track-section tech"><h4>💻 1. Core Mechanics</h4><p>Mastering this concept requires understanding the underlying synthetic logic. In enterprise computing, this is the foundational bedrock.</p></div><div class="track-section health"><h4>🏥 2. Bio-Systems</h4><p>Data science in healthcare relies on absolute precision. We apply this logic to sequence genomic arrays.</p></div><div class="track-section bio"><h4>🧬 3. Neural Architecture</h4><p>Information must flow efficiently like a biological synapse. Optimize your code.</p></div><div class="track-section lab"><h4>🧪 4. God-Mode Lab</h4><p><strong>Mission:</strong> Locate the critical node anomaly to restore integrity.</p></div></div>`,
        task: {
            type: 'find-value',
            targetColumn: 'status',
            condition: (val) => val === 'CRITICAL',
            successMessage: "System Override Successful. Node unlocked. +100 XP.",
            errorMessage: "Locate the CRITICAL status node."
        },
        data: [
          {
                    "id": 8628,
                    "value": "Alpha_Node",
                    "metric": "0.45",
                    "status": "Active"
          },
          {
                    "id": 4193,
                    "value": "Beta_Node",
                    "metric": "0.89",
                    "status": "Active"
          },
          {
                    "id": 2569,
                    "value": "Omega_Node",
                    "metric": "0.01",
                    "status": "CRITICAL"
          },
          {
                    "id": 2921,
                    "value": "Zeta_Node",
                    "metric": "1.00",
                    "status": "Active"
          }
]
    },
    {
        id: 'lesson-w36-d6',
        title: 'ML: Logistic Regression - Part 6',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/zOjov-2OZ0E?si=premium_mode',
        sources: [
            { title: 'Official Documentation', url: 'https://developer.mozilla.org/' },
            { title: 'Architect Archives', url: '#' }
        ],
        story: `<div class="quad-track"><div class="track-section tech"><h4>💻 1. Core Mechanics</h4><p>Mastering this concept requires understanding the underlying synthetic logic. In enterprise computing, this is the foundational bedrock.</p></div><div class="track-section health"><h4>🏥 2. Bio-Systems</h4><p>Data science in healthcare relies on absolute precision. We apply this logic to sequence genomic arrays.</p></div><div class="track-section bio"><h4>🧬 3. Neural Architecture</h4><p>Information must flow efficiently like a biological synapse. Optimize your code.</p></div><div class="track-section lab"><h4>🧪 4. God-Mode Lab</h4><p><strong>Mission:</strong> Locate the critical node anomaly to restore integrity.</p></div></div>`,
        task: {
            type: 'find-value',
            targetColumn: 'anomaly',
            condition: (val) => val === 'True',
            successMessage: "System Override Successful. Node unlocked. +100 XP.",
            errorMessage: "Find the True anomaly flag."
        },
        data: [
          {
                    "key": "Patient_XYZ",
                    "vitals": "Stable",
                    "heart_rate": "72",
                    "anomaly": "False"
          },
          {
                    "key": "Patient_ABC",
                    "vitals": "Unstable",
                    "heart_rate": "145",
                    "anomaly": "True"
          },
          {
                    "key": "Patient_LMN",
                    "vitals": "Stable",
                    "heart_rate": "65",
                    "anomaly": "False"
          },
          {
                    "key": "Patient_QRS",
                    "vitals": "Stable",
                    "heart_rate": "80",
                    "anomaly": "False"
          }
]
    },
    {
        id: 'lesson-w36-d7',
        title: 'Weekly Concept Review',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/aircAruvnKk?si=premium_mode',
        sources: [
            { title: 'Official Documentation', url: 'https://developer.mozilla.org/' },
            { title: 'Architect Archives', url: '#' }
        ],
        story: `<div class="quad-track"><div class="track-section tech"><h4>💻 1. Core Mechanics</h4><p>Mastering this concept requires understanding the underlying synthetic logic. In enterprise computing, this is the foundational bedrock.</p></div><div class="track-section health"><h4>🏥 2. Bio-Systems</h4><p>Data science in healthcare relies on absolute precision. We apply this logic to sequence genomic arrays.</p></div><div class="track-section bio"><h4>🧬 3. Neural Architecture</h4><p>Information must flow efficiently like a biological synapse. Optimize your code.</p></div><div class="track-section lab"><h4>🧪 4. God-Mode Lab</h4><p><strong>Mission:</strong> Locate the critical node anomaly to restore integrity.</p></div></div>`,
        task: {
            type: 'find-value',
            targetColumn: 'status',
            condition: (val) => val === 'CRITICAL',
            successMessage: "System Override Successful. Node unlocked. +100 XP.",
            errorMessage: "Locate the CRITICAL status node."
        },
        data: [
          {
                    "id": 9355,
                    "value": "Alpha_Node",
                    "metric": "0.45",
                    "status": "Active"
          },
          {
                    "id": 4675,
                    "value": "Beta_Node",
                    "metric": "0.89",
                    "status": "Active"
          },
          {
                    "id": 4315,
                    "value": "Omega_Node",
                    "metric": "0.01",
                    "status": "CRITICAL"
          },
          {
                    "id": 9871,
                    "value": "Zeta_Node",
                    "metric": "1.00",
                    "status": "Active"
          }
]
    },
    {
        id: 'lesson-w37-d1',
        title: 'ML: Decision Trees - Part 1',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/aircAruvnKk?si=premium_mode',
        sources: [
            { title: 'Official Documentation', url: 'https://developer.mozilla.org/' },
            { title: 'Architect Archives', url: '#' }
        ],
        story: `<div class="quad-track"><div class="track-section tech"><h4>💻 1. Algorithmic Processing</h4><p>This module focuses on high-speed data parsing. Time Complexity (Big O) prevents server timeouts.</p></div><div class="track-section health"><h4>🏥 2. Clinical Data Streams</h4><p>Hospitals generate terabytes of telemetry hourly. Structuring this raw byte data is critical.</p></div><div class="track-section bio"><h4>🧬 3. Evolutionary Algorithms</h4><p>Algorithms evolve through mutation and selection. Structure ML pipelines to adapt dynamically.</p></div><div class="track-section lab"><h4>🧪 4. God-Mode Lab</h4><p><strong>Mission:</strong> The pipeline has stalled. Isolate the errant data frame.</p></div></div>`,
        task: {
            type: 'find-value',
            targetColumn: 'anomaly',
            condition: (val) => val === 'True',
            successMessage: "System Override Successful. Node unlocked. +100 XP.",
            errorMessage: "Find the True anomaly flag."
        },
        data: [
          {
                    "key": "Patient_XYZ",
                    "vitals": "Stable",
                    "heart_rate": "72",
                    "anomaly": "False"
          },
          {
                    "key": "Patient_ABC",
                    "vitals": "Unstable",
                    "heart_rate": "145",
                    "anomaly": "True"
          },
          {
                    "key": "Patient_LMN",
                    "vitals": "Stable",
                    "heart_rate": "65",
                    "anomaly": "False"
          },
          {
                    "key": "Patient_QRS",
                    "vitals": "Stable",
                    "heart_rate": "80",
                    "anomaly": "False"
          }
]
    },
    {
        id: 'lesson-w37-d2',
        title: 'ML: Decision Trees - Part 2',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/rpkpK_n2ad0?si=premium_mode',
        sources: [
            { title: 'Official Documentation', url: 'https://developer.mozilla.org/' },
            { title: 'Architect Archives', url: '#' }
        ],
        story: `<div class="quad-track"><div class="track-section tech"><h4>💻 1. Core Mechanics</h4><p>Mastering this concept requires understanding the underlying synthetic logic. In enterprise computing, this is the foundational bedrock.</p></div><div class="track-section health"><h4>🏥 2. Bio-Systems</h4><p>Data science in healthcare relies on absolute precision. We apply this logic to sequence genomic arrays.</p></div><div class="track-section bio"><h4>🧬 3. Neural Architecture</h4><p>Information must flow efficiently like a biological synapse. Optimize your code.</p></div><div class="track-section lab"><h4>🧪 4. God-Mode Lab</h4><p><strong>Mission:</strong> Locate the critical node anomaly to restore integrity.</p></div></div>`,
        task: {
            type: 'find-value',
            targetColumn: 'status',
            condition: (val) => val === 'CRITICAL',
            successMessage: "System Override Successful. Node unlocked. +100 XP.",
            errorMessage: "Locate the CRITICAL status node."
        },
        data: [
          {
                    "id": 6983,
                    "value": "Alpha_Node",
                    "metric": "0.45",
                    "status": "Active"
          },
          {
                    "id": 4803,
                    "value": "Beta_Node",
                    "metric": "0.89",
                    "status": "Active"
          },
          {
                    "id": 9085,
                    "value": "Omega_Node",
                    "metric": "0.01",
                    "status": "CRITICAL"
          },
          {
                    "id": 5985,
                    "value": "Zeta_Node",
                    "metric": "1.00",
                    "status": "Active"
          }
]
    },
    {
        id: 'lesson-w37-d3',
        title: 'ML: Decision Trees - Part 3',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/rpkpK_n2ad0?si=premium_mode',
        sources: [
            { title: 'Official Documentation', url: 'https://developer.mozilla.org/' },
            { title: 'Architect Archives', url: '#' }
        ],
        story: `<div class="quad-track"><div class="track-section tech"><h4>💻 1. Core Mechanics</h4><p>Mastering this concept requires understanding the underlying synthetic logic. In enterprise computing, this is the foundational bedrock.</p></div><div class="track-section health"><h4>🏥 2. Bio-Systems</h4><p>Data science in healthcare relies on absolute precision. We apply this logic to sequence genomic arrays.</p></div><div class="track-section bio"><h4>🧬 3. Neural Architecture</h4><p>Information must flow efficiently like a biological synapse. Optimize your code.</p></div><div class="track-section lab"><h4>🧪 4. God-Mode Lab</h4><p><strong>Mission:</strong> Locate the critical node anomaly to restore integrity.</p></div></div>`,
        task: {
            type: 'find-value',
            targetColumn: 'anomaly',
            condition: (val) => val === 'True',
            successMessage: "System Override Successful. Node unlocked. +100 XP.",
            errorMessage: "Find the True anomaly flag."
        },
        data: [
          {
                    "key": "Patient_XYZ",
                    "vitals": "Stable",
                    "heart_rate": "72",
                    "anomaly": "False"
          },
          {
                    "key": "Patient_ABC",
                    "vitals": "Unstable",
                    "heart_rate": "145",
                    "anomaly": "True"
          },
          {
                    "key": "Patient_LMN",
                    "vitals": "Stable",
                    "heart_rate": "65",
                    "anomaly": "False"
          },
          {
                    "key": "Patient_QRS",
                    "vitals": "Stable",
                    "heart_rate": "80",
                    "anomaly": "False"
          }
]
    },
    {
        id: 'lesson-w37-d4',
        title: 'ML: Decision Trees - Part 4',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/aircAruvnKk?si=premium_mode',
        sources: [
            { title: 'Official Documentation', url: 'https://developer.mozilla.org/' },
            { title: 'Architect Archives', url: '#' }
        ],
        story: `<div class="quad-track"><div class="track-section tech"><h4>💻 1. Core Mechanics</h4><p>Mastering this concept requires understanding the underlying synthetic logic. In enterprise computing, this is the foundational bedrock.</p></div><div class="track-section health"><h4>🏥 2. Bio-Systems</h4><p>Data science in healthcare relies on absolute precision. We apply this logic to sequence genomic arrays.</p></div><div class="track-section bio"><h4>🧬 3. Neural Architecture</h4><p>Information must flow efficiently like a biological synapse. Optimize your code.</p></div><div class="track-section lab"><h4>🧪 4. God-Mode Lab</h4><p><strong>Mission:</strong> Locate the critical node anomaly to restore integrity.</p></div></div>`,
        task: {
            type: 'find-value',
            targetColumn: 'anomaly',
            condition: (val) => val === 'True',
            successMessage: "System Override Successful. Node unlocked. +100 XP.",
            errorMessage: "Find the True anomaly flag."
        },
        data: [
          {
                    "key": "Patient_XYZ",
                    "vitals": "Stable",
                    "heart_rate": "72",
                    "anomaly": "False"
          },
          {
                    "key": "Patient_ABC",
                    "vitals": "Unstable",
                    "heart_rate": "145",
                    "anomaly": "True"
          },
          {
                    "key": "Patient_LMN",
                    "vitals": "Stable",
                    "heart_rate": "65",
                    "anomaly": "False"
          },
          {
                    "key": "Patient_QRS",
                    "vitals": "Stable",
                    "heart_rate": "80",
                    "anomaly": "False"
          }
]
    },
    {
        id: 'lesson-w37-d5',
        title: 'ML: Decision Trees - Part 5',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/zOjov-2OZ0E?si=premium_mode',
        sources: [
            { title: 'Official Documentation', url: 'https://developer.mozilla.org/' },
            { title: 'Architect Archives', url: '#' }
        ],
        story: `<div class="quad-track"><div class="track-section tech"><h4>💻 1. Algorithmic Processing</h4><p>This module focuses on high-speed data parsing. Time Complexity (Big O) prevents server timeouts.</p></div><div class="track-section health"><h4>🏥 2. Clinical Data Streams</h4><p>Hospitals generate terabytes of telemetry hourly. Structuring this raw byte data is critical.</p></div><div class="track-section bio"><h4>🧬 3. Evolutionary Algorithms</h4><p>Algorithms evolve through mutation and selection. Structure ML pipelines to adapt dynamically.</p></div><div class="track-section lab"><h4>🧪 4. God-Mode Lab</h4><p><strong>Mission:</strong> The pipeline has stalled. Isolate the errant data frame.</p></div></div>`,
        task: {
            type: 'find-value',
            targetColumn: 'status',
            condition: (val) => val === 'CRITICAL',
            successMessage: "System Override Successful. Node unlocked. +100 XP.",
            errorMessage: "Locate the CRITICAL status node."
        },
        data: [
          {
                    "id": 1510,
                    "value": "Alpha_Node",
                    "metric": "0.45",
                    "status": "Active"
          },
          {
                    "id": 6082,
                    "value": "Beta_Node",
                    "metric": "0.89",
                    "status": "Active"
          },
          {
                    "id": 9797,
                    "value": "Omega_Node",
                    "metric": "0.01",
                    "status": "CRITICAL"
          },
          {
                    "id": 6502,
                    "value": "Zeta_Node",
                    "metric": "1.00",
                    "status": "Active"
          }
]
    },
    {
        id: 'lesson-w37-d6',
        title: 'ML: Decision Trees - Part 6',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/aircAruvnKk?si=premium_mode',
        sources: [
            { title: 'Official Documentation', url: 'https://developer.mozilla.org/' },
            { title: 'Architect Archives', url: '#' }
        ],
        story: `<div class="quad-track"><div class="track-section tech"><h4>💻 1. Algorithmic Processing</h4><p>This module focuses on high-speed data parsing. Time Complexity (Big O) prevents server timeouts.</p></div><div class="track-section health"><h4>🏥 2. Clinical Data Streams</h4><p>Hospitals generate terabytes of telemetry hourly. Structuring this raw byte data is critical.</p></div><div class="track-section bio"><h4>🧬 3. Evolutionary Algorithms</h4><p>Algorithms evolve through mutation and selection. Structure ML pipelines to adapt dynamically.</p></div><div class="track-section lab"><h4>🧪 4. God-Mode Lab</h4><p><strong>Mission:</strong> The pipeline has stalled. Isolate the errant data frame.</p></div></div>`,
        task: {
            type: 'find-value',
            targetColumn: 'status',
            condition: (val) => val === 'CRITICAL',
            successMessage: "System Override Successful. Node unlocked. +100 XP.",
            errorMessage: "Locate the CRITICAL status node."
        },
        data: [
          {
                    "id": 1600,
                    "value": "Alpha_Node",
                    "metric": "0.45",
                    "status": "Active"
          },
          {
                    "id": 1395,
                    "value": "Beta_Node",
                    "metric": "0.89",
                    "status": "Active"
          },
          {
                    "id": 2135,
                    "value": "Omega_Node",
                    "metric": "0.01",
                    "status": "CRITICAL"
          },
          {
                    "id": 1591,
                    "value": "Zeta_Node",
                    "metric": "1.00",
                    "status": "Active"
          }
]
    },
    {
        id: 'lesson-w37-d7',
        title: 'Weekly Concept Review',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/aircAruvnKk?si=premium_mode',
        sources: [
            { title: 'Official Documentation', url: 'https://developer.mozilla.org/' },
            { title: 'Architect Archives', url: '#' }
        ],
        story: `<div class="quad-track"><div class="track-section tech"><h4>💻 1. Algorithmic Processing</h4><p>This module focuses on high-speed data parsing. Time Complexity (Big O) prevents server timeouts.</p></div><div class="track-section health"><h4>🏥 2. Clinical Data Streams</h4><p>Hospitals generate terabytes of telemetry hourly. Structuring this raw byte data is critical.</p></div><div class="track-section bio"><h4>🧬 3. Evolutionary Algorithms</h4><p>Algorithms evolve through mutation and selection. Structure ML pipelines to adapt dynamically.</p></div><div class="track-section lab"><h4>🧪 4. God-Mode Lab</h4><p><strong>Mission:</strong> The pipeline has stalled. Isolate the errant data frame.</p></div></div>`,
        task: {
            type: 'find-value',
            targetColumn: 'status',
            condition: (val) => val === 'CRITICAL',
            successMessage: "System Override Successful. Node unlocked. +100 XP.",
            errorMessage: "Locate the CRITICAL status node."
        },
        data: [
          {
                    "id": 4232,
                    "value": "Alpha_Node",
                    "metric": "0.45",
                    "status": "Active"
          },
          {
                    "id": 3083,
                    "value": "Beta_Node",
                    "metric": "0.89",
                    "status": "Active"
          },
          {
                    "id": 1696,
                    "value": "Omega_Node",
                    "metric": "0.01",
                    "status": "CRITICAL"
          },
          {
                    "id": 5942,
                    "value": "Zeta_Node",
                    "metric": "1.00",
                    "status": "Active"
          }
]
    },
    {
        id: 'lesson-w38-d1',
        title: 'ML: Random Forests - Part 1',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/aircAruvnKk?si=premium_mode',
        sources: [
            { title: 'Official Documentation', url: 'https://developer.mozilla.org/' },
            { title: 'Architect Archives', url: '#' }
        ],
        story: `<div class="quad-track"><div class="track-section tech"><h4>💻 1. Core Mechanics</h4><p>Mastering this concept requires understanding the underlying synthetic logic. In enterprise computing, this is the foundational bedrock.</p></div><div class="track-section health"><h4>🏥 2. Bio-Systems</h4><p>Data science in healthcare relies on absolute precision. We apply this logic to sequence genomic arrays.</p></div><div class="track-section bio"><h4>🧬 3. Neural Architecture</h4><p>Information must flow efficiently like a biological synapse. Optimize your code.</p></div><div class="track-section lab"><h4>🧪 4. God-Mode Lab</h4><p><strong>Mission:</strong> Locate the critical node anomaly to restore integrity.</p></div></div>`,
        task: {
            type: 'find-value',
            targetColumn: 'anomaly',
            condition: (val) => val === 'True',
            successMessage: "System Override Successful. Node unlocked. +100 XP.",
            errorMessage: "Find the True anomaly flag."
        },
        data: [
          {
                    "key": "Patient_XYZ",
                    "vitals": "Stable",
                    "heart_rate": "72",
                    "anomaly": "False"
          },
          {
                    "key": "Patient_ABC",
                    "vitals": "Unstable",
                    "heart_rate": "145",
                    "anomaly": "True"
          },
          {
                    "key": "Patient_LMN",
                    "vitals": "Stable",
                    "heart_rate": "65",
                    "anomaly": "False"
          },
          {
                    "key": "Patient_QRS",
                    "vitals": "Stable",
                    "heart_rate": "80",
                    "anomaly": "False"
          }
]
    },
    {
        id: 'lesson-w38-d2',
        title: 'ML: Random Forests - Part 2',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/rpkpK_n2ad0?si=premium_mode',
        sources: [
            { title: 'Official Documentation', url: 'https://developer.mozilla.org/' },
            { title: 'Architect Archives', url: '#' }
        ],
        story: `<div class="quad-track"><div class="track-section tech"><h4>💻 1. Algorithmic Processing</h4><p>This module focuses on high-speed data parsing. Time Complexity (Big O) prevents server timeouts.</p></div><div class="track-section health"><h4>🏥 2. Clinical Data Streams</h4><p>Hospitals generate terabytes of telemetry hourly. Structuring this raw byte data is critical.</p></div><div class="track-section bio"><h4>🧬 3. Evolutionary Algorithms</h4><p>Algorithms evolve through mutation and selection. Structure ML pipelines to adapt dynamically.</p></div><div class="track-section lab"><h4>🧪 4. God-Mode Lab</h4><p><strong>Mission:</strong> The pipeline has stalled. Isolate the errant data frame.</p></div></div>`,
        task: {
            type: 'find-value',
            targetColumn: 'status',
            condition: (val) => val === 'CRITICAL',
            successMessage: "System Override Successful. Node unlocked. +100 XP.",
            errorMessage: "Locate the CRITICAL status node."
        },
        data: [
          {
                    "id": 2194,
                    "value": "Alpha_Node",
                    "metric": "0.45",
                    "status": "Active"
          },
          {
                    "id": 2580,
                    "value": "Beta_Node",
                    "metric": "0.89",
                    "status": "Active"
          },
          {
                    "id": 1154,
                    "value": "Omega_Node",
                    "metric": "0.01",
                    "status": "CRITICAL"
          },
          {
                    "id": 6985,
                    "value": "Zeta_Node",
                    "metric": "1.00",
                    "status": "Active"
          }
]
    },
    {
        id: 'lesson-w38-d3',
        title: 'ML: Random Forests - Part 3',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/zOjov-2OZ0E?si=premium_mode',
        sources: [
            { title: 'Official Documentation', url: 'https://developer.mozilla.org/' },
            { title: 'Architect Archives', url: '#' }
        ],
        story: `<div class="quad-track"><div class="track-section tech"><h4>💻 1. Core Mechanics</h4><p>Mastering this concept requires understanding the underlying synthetic logic. In enterprise computing, this is the foundational bedrock.</p></div><div class="track-section health"><h4>🏥 2. Bio-Systems</h4><p>Data science in healthcare relies on absolute precision. We apply this logic to sequence genomic arrays.</p></div><div class="track-section bio"><h4>🧬 3. Neural Architecture</h4><p>Information must flow efficiently like a biological synapse. Optimize your code.</p></div><div class="track-section lab"><h4>🧪 4. God-Mode Lab</h4><p><strong>Mission:</strong> Locate the critical node anomaly to restore integrity.</p></div></div>`,
        task: {
            type: 'find-value',
            targetColumn: 'status',
            condition: (val) => val === 'CRITICAL',
            successMessage: "System Override Successful. Node unlocked. +100 XP.",
            errorMessage: "Locate the CRITICAL status node."
        },
        data: [
          {
                    "id": 2876,
                    "value": "Alpha_Node",
                    "metric": "0.45",
                    "status": "Active"
          },
          {
                    "id": 4629,
                    "value": "Beta_Node",
                    "metric": "0.89",
                    "status": "Active"
          },
          {
                    "id": 3369,
                    "value": "Omega_Node",
                    "metric": "0.01",
                    "status": "CRITICAL"
          },
          {
                    "id": 1197,
                    "value": "Zeta_Node",
                    "metric": "1.00",
                    "status": "Active"
          }
]
    },
    {
        id: 'lesson-w38-d4',
        title: 'ML: Random Forests - Part 4',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/aircAruvnKk?si=premium_mode',
        sources: [
            { title: 'Official Documentation', url: 'https://developer.mozilla.org/' },
            { title: 'Architect Archives', url: '#' }
        ],
        story: `<div class="quad-track"><div class="track-section tech"><h4>💻 1. Algorithmic Processing</h4><p>This module focuses on high-speed data parsing. Time Complexity (Big O) prevents server timeouts.</p></div><div class="track-section health"><h4>🏥 2. Clinical Data Streams</h4><p>Hospitals generate terabytes of telemetry hourly. Structuring this raw byte data is critical.</p></div><div class="track-section bio"><h4>🧬 3. Evolutionary Algorithms</h4><p>Algorithms evolve through mutation and selection. Structure ML pipelines to adapt dynamically.</p></div><div class="track-section lab"><h4>🧪 4. God-Mode Lab</h4><p><strong>Mission:</strong> The pipeline has stalled. Isolate the errant data frame.</p></div></div>`,
        task: {
            type: 'find-value',
            targetColumn: 'status',
            condition: (val) => val === 'CRITICAL',
            successMessage: "System Override Successful. Node unlocked. +100 XP.",
            errorMessage: "Locate the CRITICAL status node."
        },
        data: [
          {
                    "id": 3685,
                    "value": "Alpha_Node",
                    "metric": "0.45",
                    "status": "Active"
          },
          {
                    "id": 4645,
                    "value": "Beta_Node",
                    "metric": "0.89",
                    "status": "Active"
          },
          {
                    "id": 5130,
                    "value": "Omega_Node",
                    "metric": "0.01",
                    "status": "CRITICAL"
          },
          {
                    "id": 4037,
                    "value": "Zeta_Node",
                    "metric": "1.00",
                    "status": "Active"
          }
]
    },
    {
        id: 'lesson-w38-d5',
        title: 'ML: Random Forests - Part 5',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/rpkpK_n2ad0?si=premium_mode',
        sources: [
            { title: 'Official Documentation', url: 'https://developer.mozilla.org/' },
            { title: 'Architect Archives', url: '#' }
        ],
        story: `<div class="quad-track"><div class="track-section tech"><h4>💻 1. Algorithmic Processing</h4><p>This module focuses on high-speed data parsing. Time Complexity (Big O) prevents server timeouts.</p></div><div class="track-section health"><h4>🏥 2. Clinical Data Streams</h4><p>Hospitals generate terabytes of telemetry hourly. Structuring this raw byte data is critical.</p></div><div class="track-section bio"><h4>🧬 3. Evolutionary Algorithms</h4><p>Algorithms evolve through mutation and selection. Structure ML pipelines to adapt dynamically.</p></div><div class="track-section lab"><h4>🧪 4. God-Mode Lab</h4><p><strong>Mission:</strong> The pipeline has stalled. Isolate the errant data frame.</p></div></div>`,
        task: {
            type: 'find-value',
            targetColumn: 'anomaly',
            condition: (val) => val === 'True',
            successMessage: "System Override Successful. Node unlocked. +100 XP.",
            errorMessage: "Find the True anomaly flag."
        },
        data: [
          {
                    "key": "Patient_XYZ",
                    "vitals": "Stable",
                    "heart_rate": "72",
                    "anomaly": "False"
          },
          {
                    "key": "Patient_ABC",
                    "vitals": "Unstable",
                    "heart_rate": "145",
                    "anomaly": "True"
          },
          {
                    "key": "Patient_LMN",
                    "vitals": "Stable",
                    "heart_rate": "65",
                    "anomaly": "False"
          },
          {
                    "key": "Patient_QRS",
                    "vitals": "Stable",
                    "heart_rate": "80",
                    "anomaly": "False"
          }
]
    },
    {
        id: 'lesson-w38-d6',
        title: 'ML: Random Forests - Part 6',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/HcqpanDadyQ?si=premium_mode',
        sources: [
            { title: 'Official Documentation', url: 'https://developer.mozilla.org/' },
            { title: 'Architect Archives', url: '#' }
        ],
        story: `<div class="quad-track"><div class="track-section tech"><h4>💻 1. Algorithmic Processing</h4><p>This module focuses on high-speed data parsing. Time Complexity (Big O) prevents server timeouts.</p></div><div class="track-section health"><h4>🏥 2. Clinical Data Streams</h4><p>Hospitals generate terabytes of telemetry hourly. Structuring this raw byte data is critical.</p></div><div class="track-section bio"><h4>🧬 3. Evolutionary Algorithms</h4><p>Algorithms evolve through mutation and selection. Structure ML pipelines to adapt dynamically.</p></div><div class="track-section lab"><h4>🧪 4. God-Mode Lab</h4><p><strong>Mission:</strong> The pipeline has stalled. Isolate the errant data frame.</p></div></div>`,
        task: {
            type: 'find-value',
            targetColumn: 'anomaly',
            condition: (val) => val === 'True',
            successMessage: "System Override Successful. Node unlocked. +100 XP.",
            errorMessage: "Find the True anomaly flag."
        },
        data: [
          {
                    "key": "Patient_XYZ",
                    "vitals": "Stable",
                    "heart_rate": "72",
                    "anomaly": "False"
          },
          {
                    "key": "Patient_ABC",
                    "vitals": "Unstable",
                    "heart_rate": "145",
                    "anomaly": "True"
          },
          {
                    "key": "Patient_LMN",
                    "vitals": "Stable",
                    "heart_rate": "65",
                    "anomaly": "False"
          },
          {
                    "key": "Patient_QRS",
                    "vitals": "Stable",
                    "heart_rate": "80",
                    "anomaly": "False"
          }
]
    },
    {
        id: 'lesson-w38-d7',
        title: 'Weekly Concept Review',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/zOjov-2OZ0E?si=premium_mode',
        sources: [
            { title: 'Official Documentation', url: 'https://developer.mozilla.org/' },
            { title: 'Architect Archives', url: '#' }
        ],
        story: `<div class="quad-track"><div class="track-section tech"><h4>💻 1. Algorithmic Processing</h4><p>This module focuses on high-speed data parsing. Time Complexity (Big O) prevents server timeouts.</p></div><div class="track-section health"><h4>🏥 2. Clinical Data Streams</h4><p>Hospitals generate terabytes of telemetry hourly. Structuring this raw byte data is critical.</p></div><div class="track-section bio"><h4>🧬 3. Evolutionary Algorithms</h4><p>Algorithms evolve through mutation and selection. Structure ML pipelines to adapt dynamically.</p></div><div class="track-section lab"><h4>🧪 4. God-Mode Lab</h4><p><strong>Mission:</strong> The pipeline has stalled. Isolate the errant data frame.</p></div></div>`,
        task: {
            type: 'find-value',
            targetColumn: 'status',
            condition: (val) => val === 'CRITICAL',
            successMessage: "System Override Successful. Node unlocked. +100 XP.",
            errorMessage: "Locate the CRITICAL status node."
        },
        data: [
          {
                    "id": 5981,
                    "value": "Alpha_Node",
                    "metric": "0.45",
                    "status": "Active"
          },
          {
                    "id": 6306,
                    "value": "Beta_Node",
                    "metric": "0.89",
                    "status": "Active"
          },
          {
                    "id": 7475,
                    "value": "Omega_Node",
                    "metric": "0.01",
                    "status": "CRITICAL"
          },
          {
                    "id": 3302,
                    "value": "Zeta_Node",
                    "metric": "1.00",
                    "status": "Active"
          }
]
    },
    {
        id: 'lesson-w39-d1',
        title: 'ML: Clustering - Part 1',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/HcqpanDadyQ?si=premium_mode',
        sources: [
            { title: 'Official Documentation', url: 'https://developer.mozilla.org/' },
            { title: 'Architect Archives', url: '#' }
        ],
        story: `<div class="quad-track"><div class="track-section tech"><h4>💻 1. Algorithmic Processing</h4><p>This module focuses on high-speed data parsing. Time Complexity (Big O) prevents server timeouts.</p></div><div class="track-section health"><h4>🏥 2. Clinical Data Streams</h4><p>Hospitals generate terabytes of telemetry hourly. Structuring this raw byte data is critical.</p></div><div class="track-section bio"><h4>🧬 3. Evolutionary Algorithms</h4><p>Algorithms evolve through mutation and selection. Structure ML pipelines to adapt dynamically.</p></div><div class="track-section lab"><h4>🧪 4. God-Mode Lab</h4><p><strong>Mission:</strong> The pipeline has stalled. Isolate the errant data frame.</p></div></div>`,
        task: {
            type: 'find-value',
            targetColumn: 'status',
            condition: (val) => val === 'CRITICAL',
            successMessage: "System Override Successful. Node unlocked. +100 XP.",
            errorMessage: "Locate the CRITICAL status node."
        },
        data: [
          {
                    "id": 7601,
                    "value": "Alpha_Node",
                    "metric": "0.45",
                    "status": "Active"
          },
          {
                    "id": 7793,
                    "value": "Beta_Node",
                    "metric": "0.89",
                    "status": "Active"
          },
          {
                    "id": 2641,
                    "value": "Omega_Node",
                    "metric": "0.01",
                    "status": "CRITICAL"
          },
          {
                    "id": 9148,
                    "value": "Zeta_Node",
                    "metric": "1.00",
                    "status": "Active"
          }
]
    },
    {
        id: 'lesson-w39-d2',
        title: 'ML: Clustering - Part 2',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/HcqpanDadyQ?si=premium_mode',
        sources: [
            { title: 'Official Documentation', url: 'https://developer.mozilla.org/' },
            { title: 'Architect Archives', url: '#' }
        ],
        story: `<div class="quad-track"><div class="track-section tech"><h4>💻 1. Algorithmic Processing</h4><p>This module focuses on high-speed data parsing. Time Complexity (Big O) prevents server timeouts.</p></div><div class="track-section health"><h4>🏥 2. Clinical Data Streams</h4><p>Hospitals generate terabytes of telemetry hourly. Structuring this raw byte data is critical.</p></div><div class="track-section bio"><h4>🧬 3. Evolutionary Algorithms</h4><p>Algorithms evolve through mutation and selection. Structure ML pipelines to adapt dynamically.</p></div><div class="track-section lab"><h4>🧪 4. God-Mode Lab</h4><p><strong>Mission:</strong> The pipeline has stalled. Isolate the errant data frame.</p></div></div>`,
        task: {
            type: 'find-value',
            targetColumn: 'anomaly',
            condition: (val) => val === 'True',
            successMessage: "System Override Successful. Node unlocked. +100 XP.",
            errorMessage: "Find the True anomaly flag."
        },
        data: [
          {
                    "key": "Patient_XYZ",
                    "vitals": "Stable",
                    "heart_rate": "72",
                    "anomaly": "False"
          },
          {
                    "key": "Patient_ABC",
                    "vitals": "Unstable",
                    "heart_rate": "145",
                    "anomaly": "True"
          },
          {
                    "key": "Patient_LMN",
                    "vitals": "Stable",
                    "heart_rate": "65",
                    "anomaly": "False"
          },
          {
                    "key": "Patient_QRS",
                    "vitals": "Stable",
                    "heart_rate": "80",
                    "anomaly": "False"
          }
]
    },
    {
        id: 'lesson-w39-d3',
        title: 'ML: Clustering - Part 3',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/aircAruvnKk?si=premium_mode',
        sources: [
            { title: 'Official Documentation', url: 'https://developer.mozilla.org/' },
            { title: 'Architect Archives', url: '#' }
        ],
        story: `<div class="quad-track"><div class="track-section tech"><h4>💻 1. Core Mechanics</h4><p>Mastering this concept requires understanding the underlying synthetic logic. In enterprise computing, this is the foundational bedrock.</p></div><div class="track-section health"><h4>🏥 2. Bio-Systems</h4><p>Data science in healthcare relies on absolute precision. We apply this logic to sequence genomic arrays.</p></div><div class="track-section bio"><h4>🧬 3. Neural Architecture</h4><p>Information must flow efficiently like a biological synapse. Optimize your code.</p></div><div class="track-section lab"><h4>🧪 4. God-Mode Lab</h4><p><strong>Mission:</strong> Locate the critical node anomaly to restore integrity.</p></div></div>`,
        task: {
            type: 'find-value',
            targetColumn: 'anomaly',
            condition: (val) => val === 'True',
            successMessage: "System Override Successful. Node unlocked. +100 XP.",
            errorMessage: "Find the True anomaly flag."
        },
        data: [
          {
                    "key": "Patient_XYZ",
                    "vitals": "Stable",
                    "heart_rate": "72",
                    "anomaly": "False"
          },
          {
                    "key": "Patient_ABC",
                    "vitals": "Unstable",
                    "heart_rate": "145",
                    "anomaly": "True"
          },
          {
                    "key": "Patient_LMN",
                    "vitals": "Stable",
                    "heart_rate": "65",
                    "anomaly": "False"
          },
          {
                    "key": "Patient_QRS",
                    "vitals": "Stable",
                    "heart_rate": "80",
                    "anomaly": "False"
          }
]
    },
    {
        id: 'lesson-w39-d4',
        title: 'ML: Clustering - Part 4',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/rpkpK_n2ad0?si=premium_mode',
        sources: [
            { title: 'Official Documentation', url: 'https://developer.mozilla.org/' },
            { title: 'Architect Archives', url: '#' }
        ],
        story: `<div class="quad-track"><div class="track-section tech"><h4>💻 1. Algorithmic Processing</h4><p>This module focuses on high-speed data parsing. Time Complexity (Big O) prevents server timeouts.</p></div><div class="track-section health"><h4>🏥 2. Clinical Data Streams</h4><p>Hospitals generate terabytes of telemetry hourly. Structuring this raw byte data is critical.</p></div><div class="track-section bio"><h4>🧬 3. Evolutionary Algorithms</h4><p>Algorithms evolve through mutation and selection. Structure ML pipelines to adapt dynamically.</p></div><div class="track-section lab"><h4>🧪 4. God-Mode Lab</h4><p><strong>Mission:</strong> The pipeline has stalled. Isolate the errant data frame.</p></div></div>`,
        task: {
            type: 'find-value',
            targetColumn: 'anomaly',
            condition: (val) => val === 'True',
            successMessage: "System Override Successful. Node unlocked. +100 XP.",
            errorMessage: "Find the True anomaly flag."
        },
        data: [
          {
                    "key": "Patient_XYZ",
                    "vitals": "Stable",
                    "heart_rate": "72",
                    "anomaly": "False"
          },
          {
                    "key": "Patient_ABC",
                    "vitals": "Unstable",
                    "heart_rate": "145",
                    "anomaly": "True"
          },
          {
                    "key": "Patient_LMN",
                    "vitals": "Stable",
                    "heart_rate": "65",
                    "anomaly": "False"
          },
          {
                    "key": "Patient_QRS",
                    "vitals": "Stable",
                    "heart_rate": "80",
                    "anomaly": "False"
          }
]
    },
    {
        id: 'lesson-w39-d5',
        title: 'ML: Clustering - Part 5',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/aircAruvnKk?si=premium_mode',
        sources: [
            { title: 'Official Documentation', url: 'https://developer.mozilla.org/' },
            { title: 'Architect Archives', url: '#' }
        ],
        story: `<div class="quad-track"><div class="track-section tech"><h4>💻 1. Core Mechanics</h4><p>Mastering this concept requires understanding the underlying synthetic logic. In enterprise computing, this is the foundational bedrock.</p></div><div class="track-section health"><h4>🏥 2. Bio-Systems</h4><p>Data science in healthcare relies on absolute precision. We apply this logic to sequence genomic arrays.</p></div><div class="track-section bio"><h4>🧬 3. Neural Architecture</h4><p>Information must flow efficiently like a biological synapse. Optimize your code.</p></div><div class="track-section lab"><h4>🧪 4. God-Mode Lab</h4><p><strong>Mission:</strong> Locate the critical node anomaly to restore integrity.</p></div></div>`,
        task: {
            type: 'find-value',
            targetColumn: 'anomaly',
            condition: (val) => val === 'True',
            successMessage: "System Override Successful. Node unlocked. +100 XP.",
            errorMessage: "Find the True anomaly flag."
        },
        data: [
          {
                    "key": "Patient_XYZ",
                    "vitals": "Stable",
                    "heart_rate": "72",
                    "anomaly": "False"
          },
          {
                    "key": "Patient_ABC",
                    "vitals": "Unstable",
                    "heart_rate": "145",
                    "anomaly": "True"
          },
          {
                    "key": "Patient_LMN",
                    "vitals": "Stable",
                    "heart_rate": "65",
                    "anomaly": "False"
          },
          {
                    "key": "Patient_QRS",
                    "vitals": "Stable",
                    "heart_rate": "80",
                    "anomaly": "False"
          }
]
    },
    {
        id: 'lesson-w39-d6',
        title: 'ML: Clustering - Part 6',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/aircAruvnKk?si=premium_mode',
        sources: [
            { title: 'Official Documentation', url: 'https://developer.mozilla.org/' },
            { title: 'Architect Archives', url: '#' }
        ],
        story: `<div class="quad-track"><div class="track-section tech"><h4>💻 1. Core Mechanics</h4><p>Mastering this concept requires understanding the underlying synthetic logic. In enterprise computing, this is the foundational bedrock.</p></div><div class="track-section health"><h4>🏥 2. Bio-Systems</h4><p>Data science in healthcare relies on absolute precision. We apply this logic to sequence genomic arrays.</p></div><div class="track-section bio"><h4>🧬 3. Neural Architecture</h4><p>Information must flow efficiently like a biological synapse. Optimize your code.</p></div><div class="track-section lab"><h4>🧪 4. God-Mode Lab</h4><p><strong>Mission:</strong> Locate the critical node anomaly to restore integrity.</p></div></div>`,
        task: {
            type: 'find-value',
            targetColumn: 'status',
            condition: (val) => val === 'CRITICAL',
            successMessage: "System Override Successful. Node unlocked. +100 XP.",
            errorMessage: "Locate the CRITICAL status node."
        },
        data: [
          {
                    "id": 7561,
                    "value": "Alpha_Node",
                    "metric": "0.45",
                    "status": "Active"
          },
          {
                    "id": 7983,
                    "value": "Beta_Node",
                    "metric": "0.89",
                    "status": "Active"
          },
          {
                    "id": 9744,
                    "value": "Omega_Node",
                    "metric": "0.01",
                    "status": "CRITICAL"
          },
          {
                    "id": 5221,
                    "value": "Zeta_Node",
                    "metric": "1.00",
                    "status": "Active"
          }
]
    },
    {
        id: 'lesson-w39-d7',
        title: 'Weekly Concept Review',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/aircAruvnKk?si=premium_mode',
        sources: [
            { title: 'Official Documentation', url: 'https://developer.mozilla.org/' },
            { title: 'Architect Archives', url: '#' }
        ],
        story: `<div class="quad-track"><div class="track-section tech"><h4>💻 1. Algorithmic Processing</h4><p>This module focuses on high-speed data parsing. Time Complexity (Big O) prevents server timeouts.</p></div><div class="track-section health"><h4>🏥 2. Clinical Data Streams</h4><p>Hospitals generate terabytes of telemetry hourly. Structuring this raw byte data is critical.</p></div><div class="track-section bio"><h4>🧬 3. Evolutionary Algorithms</h4><p>Algorithms evolve through mutation and selection. Structure ML pipelines to adapt dynamically.</p></div><div class="track-section lab"><h4>🧪 4. God-Mode Lab</h4><p><strong>Mission:</strong> The pipeline has stalled. Isolate the errant data frame.</p></div></div>`,
        task: {
            type: 'find-value',
            targetColumn: 'status',
            condition: (val) => val === 'CRITICAL',
            successMessage: "System Override Successful. Node unlocked. +100 XP.",
            errorMessage: "Locate the CRITICAL status node."
        },
        data: [
          {
                    "id": 1975,
                    "value": "Alpha_Node",
                    "metric": "0.45",
                    "status": "Active"
          },
          {
                    "id": 6870,
                    "value": "Beta_Node",
                    "metric": "0.89",
                    "status": "Active"
          },
          {
                    "id": 3443,
                    "value": "Omega_Node",
                    "metric": "0.01",
                    "status": "CRITICAL"
          },
          {
                    "id": 6536,
                    "value": "Zeta_Node",
                    "metric": "1.00",
                    "status": "Active"
          }
]
    },
    {
        id: 'lesson-w40-d1',
        title: 'Deep Learning: Concepts - Part 1',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/rpkpK_n2ad0?si=premium_mode',
        sources: [
            { title: 'Official Documentation', url: 'https://developer.mozilla.org/' },
            { title: 'Architect Archives', url: '#' }
        ],
        story: `<div class="quad-track"><div class="track-section tech"><h4>💻 1. Algorithmic Processing</h4><p>This module focuses on high-speed data parsing. Time Complexity (Big O) prevents server timeouts.</p></div><div class="track-section health"><h4>🏥 2. Clinical Data Streams</h4><p>Hospitals generate terabytes of telemetry hourly. Structuring this raw byte data is critical.</p></div><div class="track-section bio"><h4>🧬 3. Evolutionary Algorithms</h4><p>Algorithms evolve through mutation and selection. Structure ML pipelines to adapt dynamically.</p></div><div class="track-section lab"><h4>🧪 4. God-Mode Lab</h4><p><strong>Mission:</strong> The pipeline has stalled. Isolate the errant data frame.</p></div></div>`,
        task: {
            type: 'find-value',
            targetColumn: 'anomaly',
            condition: (val) => val === 'True',
            successMessage: "System Override Successful. Node unlocked. +100 XP.",
            errorMessage: "Find the True anomaly flag."
        },
        data: [
          {
                    "key": "Patient_XYZ",
                    "vitals": "Stable",
                    "heart_rate": "72",
                    "anomaly": "False"
          },
          {
                    "key": "Patient_ABC",
                    "vitals": "Unstable",
                    "heart_rate": "145",
                    "anomaly": "True"
          },
          {
                    "key": "Patient_LMN",
                    "vitals": "Stable",
                    "heart_rate": "65",
                    "anomaly": "False"
          },
          {
                    "key": "Patient_QRS",
                    "vitals": "Stable",
                    "heart_rate": "80",
                    "anomaly": "False"
          }
]
    },
    {
        id: 'lesson-w40-d2',
        title: 'Deep Learning: Concepts - Part 2',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/rpkpK_n2ad0?si=premium_mode',
        sources: [
            { title: 'Official Documentation', url: 'https://developer.mozilla.org/' },
            { title: 'Architect Archives', url: '#' }
        ],
        story: `<div class="quad-track"><div class="track-section tech"><h4>💻 1. Algorithmic Processing</h4><p>This module focuses on high-speed data parsing. Time Complexity (Big O) prevents server timeouts.</p></div><div class="track-section health"><h4>🏥 2. Clinical Data Streams</h4><p>Hospitals generate terabytes of telemetry hourly. Structuring this raw byte data is critical.</p></div><div class="track-section bio"><h4>🧬 3. Evolutionary Algorithms</h4><p>Algorithms evolve through mutation and selection. Structure ML pipelines to adapt dynamically.</p></div><div class="track-section lab"><h4>🧪 4. God-Mode Lab</h4><p><strong>Mission:</strong> The pipeline has stalled. Isolate the errant data frame.</p></div></div>`,
        task: {
            type: 'find-value',
            targetColumn: 'anomaly',
            condition: (val) => val === 'True',
            successMessage: "System Override Successful. Node unlocked. +100 XP.",
            errorMessage: "Find the True anomaly flag."
        },
        data: [
          {
                    "key": "Patient_XYZ",
                    "vitals": "Stable",
                    "heart_rate": "72",
                    "anomaly": "False"
          },
          {
                    "key": "Patient_ABC",
                    "vitals": "Unstable",
                    "heart_rate": "145",
                    "anomaly": "True"
          },
          {
                    "key": "Patient_LMN",
                    "vitals": "Stable",
                    "heart_rate": "65",
                    "anomaly": "False"
          },
          {
                    "key": "Patient_QRS",
                    "vitals": "Stable",
                    "heart_rate": "80",
                    "anomaly": "False"
          }
]
    },
    {
        id: 'lesson-w40-d3',
        title: 'Deep Learning: Concepts - Part 3',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/rpkpK_n2ad0?si=premium_mode',
        sources: [
            { title: 'Official Documentation', url: 'https://developer.mozilla.org/' },
            { title: 'Architect Archives', url: '#' }
        ],
        story: `<div class="quad-track"><div class="track-section tech"><h4>💻 1. Algorithmic Processing</h4><p>This module focuses on high-speed data parsing. Time Complexity (Big O) prevents server timeouts.</p></div><div class="track-section health"><h4>🏥 2. Clinical Data Streams</h4><p>Hospitals generate terabytes of telemetry hourly. Structuring this raw byte data is critical.</p></div><div class="track-section bio"><h4>🧬 3. Evolutionary Algorithms</h4><p>Algorithms evolve through mutation and selection. Structure ML pipelines to adapt dynamically.</p></div><div class="track-section lab"><h4>🧪 4. God-Mode Lab</h4><p><strong>Mission:</strong> The pipeline has stalled. Isolate the errant data frame.</p></div></div>`,
        task: {
            type: 'find-value',
            targetColumn: 'status',
            condition: (val) => val === 'CRITICAL',
            successMessage: "System Override Successful. Node unlocked. +100 XP.",
            errorMessage: "Locate the CRITICAL status node."
        },
        data: [
          {
                    "id": 4019,
                    "value": "Alpha_Node",
                    "metric": "0.45",
                    "status": "Active"
          },
          {
                    "id": 3545,
                    "value": "Beta_Node",
                    "metric": "0.89",
                    "status": "Active"
          },
          {
                    "id": 8338,
                    "value": "Omega_Node",
                    "metric": "0.01",
                    "status": "CRITICAL"
          },
          {
                    "id": 6638,
                    "value": "Zeta_Node",
                    "metric": "1.00",
                    "status": "Active"
          }
]
    },
    {
        id: 'lesson-w40-d4',
        title: 'Deep Learning: Concepts - Part 4',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/HcqpanDadyQ?si=premium_mode',
        sources: [
            { title: 'Official Documentation', url: 'https://developer.mozilla.org/' },
            { title: 'Architect Archives', url: '#' }
        ],
        story: `<div class="quad-track"><div class="track-section tech"><h4>💻 1. Core Mechanics</h4><p>Mastering this concept requires understanding the underlying synthetic logic. In enterprise computing, this is the foundational bedrock.</p></div><div class="track-section health"><h4>🏥 2. Bio-Systems</h4><p>Data science in healthcare relies on absolute precision. We apply this logic to sequence genomic arrays.</p></div><div class="track-section bio"><h4>🧬 3. Neural Architecture</h4><p>Information must flow efficiently like a biological synapse. Optimize your code.</p></div><div class="track-section lab"><h4>🧪 4. God-Mode Lab</h4><p><strong>Mission:</strong> Locate the critical node anomaly to restore integrity.</p></div></div>`,
        task: {
            type: 'find-value',
            targetColumn: 'anomaly',
            condition: (val) => val === 'True',
            successMessage: "System Override Successful. Node unlocked. +100 XP.",
            errorMessage: "Find the True anomaly flag."
        },
        data: [
          {
                    "key": "Patient_XYZ",
                    "vitals": "Stable",
                    "heart_rate": "72",
                    "anomaly": "False"
          },
          {
                    "key": "Patient_ABC",
                    "vitals": "Unstable",
                    "heart_rate": "145",
                    "anomaly": "True"
          },
          {
                    "key": "Patient_LMN",
                    "vitals": "Stable",
                    "heart_rate": "65",
                    "anomaly": "False"
          },
          {
                    "key": "Patient_QRS",
                    "vitals": "Stable",
                    "heart_rate": "80",
                    "anomaly": "False"
          }
]
    },
    {
        id: 'lesson-w40-d5',
        title: 'Deep Learning: Concepts - Part 5',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/HcqpanDadyQ?si=premium_mode',
        sources: [
            { title: 'Official Documentation', url: 'https://developer.mozilla.org/' },
            { title: 'Architect Archives', url: '#' }
        ],
        story: `<div class="quad-track"><div class="track-section tech"><h4>💻 1. Core Mechanics</h4><p>Mastering this concept requires understanding the underlying synthetic logic. In enterprise computing, this is the foundational bedrock.</p></div><div class="track-section health"><h4>🏥 2. Bio-Systems</h4><p>Data science in healthcare relies on absolute precision. We apply this logic to sequence genomic arrays.</p></div><div class="track-section bio"><h4>🧬 3. Neural Architecture</h4><p>Information must flow efficiently like a biological synapse. Optimize your code.</p></div><div class="track-section lab"><h4>🧪 4. God-Mode Lab</h4><p><strong>Mission:</strong> Locate the critical node anomaly to restore integrity.</p></div></div>`,
        task: {
            type: 'find-value',
            targetColumn: 'anomaly',
            condition: (val) => val === 'True',
            successMessage: "System Override Successful. Node unlocked. +100 XP.",
            errorMessage: "Find the True anomaly flag."
        },
        data: [
          {
                    "key": "Patient_XYZ",
                    "vitals": "Stable",
                    "heart_rate": "72",
                    "anomaly": "False"
          },
          {
                    "key": "Patient_ABC",
                    "vitals": "Unstable",
                    "heart_rate": "145",
                    "anomaly": "True"
          },
          {
                    "key": "Patient_LMN",
                    "vitals": "Stable",
                    "heart_rate": "65",
                    "anomaly": "False"
          },
          {
                    "key": "Patient_QRS",
                    "vitals": "Stable",
                    "heart_rate": "80",
                    "anomaly": "False"
          }
]
    },
    {
        id: 'lesson-w40-d6',
        title: 'Deep Learning: Concepts - Part 6',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/HcqpanDadyQ?si=premium_mode',
        sources: [
            { title: 'Official Documentation', url: 'https://developer.mozilla.org/' },
            { title: 'Architect Archives', url: '#' }
        ],
        story: `<div class="quad-track"><div class="track-section tech"><h4>💻 1. Core Mechanics</h4><p>Mastering this concept requires understanding the underlying synthetic logic. In enterprise computing, this is the foundational bedrock.</p></div><div class="track-section health"><h4>🏥 2. Bio-Systems</h4><p>Data science in healthcare relies on absolute precision. We apply this logic to sequence genomic arrays.</p></div><div class="track-section bio"><h4>🧬 3. Neural Architecture</h4><p>Information must flow efficiently like a biological synapse. Optimize your code.</p></div><div class="track-section lab"><h4>🧪 4. God-Mode Lab</h4><p><strong>Mission:</strong> Locate the critical node anomaly to restore integrity.</p></div></div>`,
        task: {
            type: 'find-value',
            targetColumn: 'anomaly',
            condition: (val) => val === 'True',
            successMessage: "System Override Successful. Node unlocked. +100 XP.",
            errorMessage: "Find the True anomaly flag."
        },
        data: [
          {
                    "key": "Patient_XYZ",
                    "vitals": "Stable",
                    "heart_rate": "72",
                    "anomaly": "False"
          },
          {
                    "key": "Patient_ABC",
                    "vitals": "Unstable",
                    "heart_rate": "145",
                    "anomaly": "True"
          },
          {
                    "key": "Patient_LMN",
                    "vitals": "Stable",
                    "heart_rate": "65",
                    "anomaly": "False"
          },
          {
                    "key": "Patient_QRS",
                    "vitals": "Stable",
                    "heart_rate": "80",
                    "anomaly": "False"
          }
]
    },
    {
        id: 'lesson-w40-d7',
        title: 'Weekly Concept Review',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/aircAruvnKk?si=premium_mode',
        sources: [
            { title: 'Official Documentation', url: 'https://developer.mozilla.org/' },
            { title: 'Architect Archives', url: '#' }
        ],
        story: `<div class="quad-track"><div class="track-section tech"><h4>💻 1. Core Mechanics</h4><p>Mastering this concept requires understanding the underlying synthetic logic. In enterprise computing, this is the foundational bedrock.</p></div><div class="track-section health"><h4>🏥 2. Bio-Systems</h4><p>Data science in healthcare relies on absolute precision. We apply this logic to sequence genomic arrays.</p></div><div class="track-section bio"><h4>🧬 3. Neural Architecture</h4><p>Information must flow efficiently like a biological synapse. Optimize your code.</p></div><div class="track-section lab"><h4>🧪 4. God-Mode Lab</h4><p><strong>Mission:</strong> Locate the critical node anomaly to restore integrity.</p></div></div>`,
        task: {
            type: 'find-value',
            targetColumn: 'status',
            condition: (val) => val === 'CRITICAL',
            successMessage: "System Override Successful. Node unlocked. +100 XP.",
            errorMessage: "Locate the CRITICAL status node."
        },
        data: [
          {
                    "id": 7241,
                    "value": "Alpha_Node",
                    "metric": "0.45",
                    "status": "Active"
          },
          {
                    "id": 3603,
                    "value": "Beta_Node",
                    "metric": "0.89",
                    "status": "Active"
          },
          {
                    "id": 3643,
                    "value": "Omega_Node",
                    "metric": "0.01",
                    "status": "CRITICAL"
          },
          {
                    "id": 5166,
                    "value": "Zeta_Node",
                    "metric": "1.00",
                    "status": "Active"
          }
]
    },
    {
        id: 'lesson-w41-d1',
        title: 'Neural Networks 101 - Part 1',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/HcqpanDadyQ?si=premium_mode',
        sources: [
            { title: 'Official Documentation', url: 'https://developer.mozilla.org/' },
            { title: 'Architect Archives', url: '#' }
        ],
        story: `<div class="quad-track"><div class="track-section tech"><h4>💻 1. Core Mechanics</h4><p>Mastering this concept requires understanding the underlying synthetic logic. In enterprise computing, this is the foundational bedrock.</p></div><div class="track-section health"><h4>🏥 2. Bio-Systems</h4><p>Data science in healthcare relies on absolute precision. We apply this logic to sequence genomic arrays.</p></div><div class="track-section bio"><h4>🧬 3. Neural Architecture</h4><p>Information must flow efficiently like a biological synapse. Optimize your code.</p></div><div class="track-section lab"><h4>🧪 4. God-Mode Lab</h4><p><strong>Mission:</strong> Locate the critical node anomaly to restore integrity.</p></div></div>`,
        task: {
            type: 'find-value',
            targetColumn: 'status',
            condition: (val) => val === 'CRITICAL',
            successMessage: "System Override Successful. Node unlocked. +100 XP.",
            errorMessage: "Locate the CRITICAL status node."
        },
        data: [
          {
                    "id": 6508,
                    "value": "Alpha_Node",
                    "metric": "0.45",
                    "status": "Active"
          },
          {
                    "id": 1370,
                    "value": "Beta_Node",
                    "metric": "0.89",
                    "status": "Active"
          },
          {
                    "id": 9440,
                    "value": "Omega_Node",
                    "metric": "0.01",
                    "status": "CRITICAL"
          },
          {
                    "id": 7959,
                    "value": "Zeta_Node",
                    "metric": "1.00",
                    "status": "Active"
          }
]
    },
    {
        id: 'lesson-w41-d2',
        title: 'Neural Networks 101 - Part 2',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/HcqpanDadyQ?si=premium_mode',
        sources: [
            { title: 'Official Documentation', url: 'https://developer.mozilla.org/' },
            { title: 'Architect Archives', url: '#' }
        ],
        story: `<div class="quad-track"><div class="track-section tech"><h4>💻 1. Core Mechanics</h4><p>Mastering this concept requires understanding the underlying synthetic logic. In enterprise computing, this is the foundational bedrock.</p></div><div class="track-section health"><h4>🏥 2. Bio-Systems</h4><p>Data science in healthcare relies on absolute precision. We apply this logic to sequence genomic arrays.</p></div><div class="track-section bio"><h4>🧬 3. Neural Architecture</h4><p>Information must flow efficiently like a biological synapse. Optimize your code.</p></div><div class="track-section lab"><h4>🧪 4. God-Mode Lab</h4><p><strong>Mission:</strong> Locate the critical node anomaly to restore integrity.</p></div></div>`,
        task: {
            type: 'find-value',
            targetColumn: 'status',
            condition: (val) => val === 'CRITICAL',
            successMessage: "System Override Successful. Node unlocked. +100 XP.",
            errorMessage: "Locate the CRITICAL status node."
        },
        data: [
          {
                    "id": 9956,
                    "value": "Alpha_Node",
                    "metric": "0.45",
                    "status": "Active"
          },
          {
                    "id": 2995,
                    "value": "Beta_Node",
                    "metric": "0.89",
                    "status": "Active"
          },
          {
                    "id": 3577,
                    "value": "Omega_Node",
                    "metric": "0.01",
                    "status": "CRITICAL"
          },
          {
                    "id": 1621,
                    "value": "Zeta_Node",
                    "metric": "1.00",
                    "status": "Active"
          }
]
    },
    {
        id: 'lesson-w41-d3',
        title: 'Neural Networks 101 - Part 3',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/zOjov-2OZ0E?si=premium_mode',
        sources: [
            { title: 'Official Documentation', url: 'https://developer.mozilla.org/' },
            { title: 'Architect Archives', url: '#' }
        ],
        story: `<div class="quad-track"><div class="track-section tech"><h4>💻 1. Algorithmic Processing</h4><p>This module focuses on high-speed data parsing. Time Complexity (Big O) prevents server timeouts.</p></div><div class="track-section health"><h4>🏥 2. Clinical Data Streams</h4><p>Hospitals generate terabytes of telemetry hourly. Structuring this raw byte data is critical.</p></div><div class="track-section bio"><h4>🧬 3. Evolutionary Algorithms</h4><p>Algorithms evolve through mutation and selection. Structure ML pipelines to adapt dynamically.</p></div><div class="track-section lab"><h4>🧪 4. God-Mode Lab</h4><p><strong>Mission:</strong> The pipeline has stalled. Isolate the errant data frame.</p></div></div>`,
        task: {
            type: 'find-value',
            targetColumn: 'anomaly',
            condition: (val) => val === 'True',
            successMessage: "System Override Successful. Node unlocked. +100 XP.",
            errorMessage: "Find the True anomaly flag."
        },
        data: [
          {
                    "key": "Patient_XYZ",
                    "vitals": "Stable",
                    "heart_rate": "72",
                    "anomaly": "False"
          },
          {
                    "key": "Patient_ABC",
                    "vitals": "Unstable",
                    "heart_rate": "145",
                    "anomaly": "True"
          },
          {
                    "key": "Patient_LMN",
                    "vitals": "Stable",
                    "heart_rate": "65",
                    "anomaly": "False"
          },
          {
                    "key": "Patient_QRS",
                    "vitals": "Stable",
                    "heart_rate": "80",
                    "anomaly": "False"
          }
]
    },
    {
        id: 'lesson-w41-d4',
        title: 'Neural Networks 101 - Part 4',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/HcqpanDadyQ?si=premium_mode',
        sources: [
            { title: 'Official Documentation', url: 'https://developer.mozilla.org/' },
            { title: 'Architect Archives', url: '#' }
        ],
        story: `<div class="quad-track"><div class="track-section tech"><h4>💻 1. Algorithmic Processing</h4><p>This module focuses on high-speed data parsing. Time Complexity (Big O) prevents server timeouts.</p></div><div class="track-section health"><h4>🏥 2. Clinical Data Streams</h4><p>Hospitals generate terabytes of telemetry hourly. Structuring this raw byte data is critical.</p></div><div class="track-section bio"><h4>🧬 3. Evolutionary Algorithms</h4><p>Algorithms evolve through mutation and selection. Structure ML pipelines to adapt dynamically.</p></div><div class="track-section lab"><h4>🧪 4. God-Mode Lab</h4><p><strong>Mission:</strong> The pipeline has stalled. Isolate the errant data frame.</p></div></div>`,
        task: {
            type: 'find-value',
            targetColumn: 'status',
            condition: (val) => val === 'CRITICAL',
            successMessage: "System Override Successful. Node unlocked. +100 XP.",
            errorMessage: "Locate the CRITICAL status node."
        },
        data: [
          {
                    "id": 1958,
                    "value": "Alpha_Node",
                    "metric": "0.45",
                    "status": "Active"
          },
          {
                    "id": 4478,
                    "value": "Beta_Node",
                    "metric": "0.89",
                    "status": "Active"
          },
          {
                    "id": 4609,
                    "value": "Omega_Node",
                    "metric": "0.01",
                    "status": "CRITICAL"
          },
          {
                    "id": 8577,
                    "value": "Zeta_Node",
                    "metric": "1.00",
                    "status": "Active"
          }
]
    },
    {
        id: 'lesson-w41-d5',
        title: 'Neural Networks 101 - Part 5',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/HcqpanDadyQ?si=premium_mode',
        sources: [
            { title: 'Official Documentation', url: 'https://developer.mozilla.org/' },
            { title: 'Architect Archives', url: '#' }
        ],
        story: `<div class="quad-track"><div class="track-section tech"><h4>💻 1. Core Mechanics</h4><p>Mastering this concept requires understanding the underlying synthetic logic. In enterprise computing, this is the foundational bedrock.</p></div><div class="track-section health"><h4>🏥 2. Bio-Systems</h4><p>Data science in healthcare relies on absolute precision. We apply this logic to sequence genomic arrays.</p></div><div class="track-section bio"><h4>🧬 3. Neural Architecture</h4><p>Information must flow efficiently like a biological synapse. Optimize your code.</p></div><div class="track-section lab"><h4>🧪 4. God-Mode Lab</h4><p><strong>Mission:</strong> Locate the critical node anomaly to restore integrity.</p></div></div>`,
        task: {
            type: 'find-value',
            targetColumn: 'anomaly',
            condition: (val) => val === 'True',
            successMessage: "System Override Successful. Node unlocked. +100 XP.",
            errorMessage: "Find the True anomaly flag."
        },
        data: [
          {
                    "key": "Patient_XYZ",
                    "vitals": "Stable",
                    "heart_rate": "72",
                    "anomaly": "False"
          },
          {
                    "key": "Patient_ABC",
                    "vitals": "Unstable",
                    "heart_rate": "145",
                    "anomaly": "True"
          },
          {
                    "key": "Patient_LMN",
                    "vitals": "Stable",
                    "heart_rate": "65",
                    "anomaly": "False"
          },
          {
                    "key": "Patient_QRS",
                    "vitals": "Stable",
                    "heart_rate": "80",
                    "anomaly": "False"
          }
]
    },
    {
        id: 'lesson-w41-d6',
        title: 'Neural Networks 101 - Part 6',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/rpkpK_n2ad0?si=premium_mode',
        sources: [
            { title: 'Official Documentation', url: 'https://developer.mozilla.org/' },
            { title: 'Architect Archives', url: '#' }
        ],
        story: `<div class="quad-track"><div class="track-section tech"><h4>💻 1. Algorithmic Processing</h4><p>This module focuses on high-speed data parsing. Time Complexity (Big O) prevents server timeouts.</p></div><div class="track-section health"><h4>🏥 2. Clinical Data Streams</h4><p>Hospitals generate terabytes of telemetry hourly. Structuring this raw byte data is critical.</p></div><div class="track-section bio"><h4>🧬 3. Evolutionary Algorithms</h4><p>Algorithms evolve through mutation and selection. Structure ML pipelines to adapt dynamically.</p></div><div class="track-section lab"><h4>🧪 4. God-Mode Lab</h4><p><strong>Mission:</strong> The pipeline has stalled. Isolate the errant data frame.</p></div></div>`,
        task: {
            type: 'find-value',
            targetColumn: 'status',
            condition: (val) => val === 'CRITICAL',
            successMessage: "System Override Successful. Node unlocked. +100 XP.",
            errorMessage: "Locate the CRITICAL status node."
        },
        data: [
          {
                    "id": 9549,
                    "value": "Alpha_Node",
                    "metric": "0.45",
                    "status": "Active"
          },
          {
                    "id": 7611,
                    "value": "Beta_Node",
                    "metric": "0.89",
                    "status": "Active"
          },
          {
                    "id": 7925,
                    "value": "Omega_Node",
                    "metric": "0.01",
                    "status": "CRITICAL"
          },
          {
                    "id": 2195,
                    "value": "Zeta_Node",
                    "metric": "1.00",
                    "status": "Active"
          }
]
    },
    {
        id: 'lesson-w41-d7',
        title: 'Weekly Concept Review',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/rpkpK_n2ad0?si=premium_mode',
        sources: [
            { title: 'Official Documentation', url: 'https://developer.mozilla.org/' },
            { title: 'Architect Archives', url: '#' }
        ],
        story: `<div class="quad-track"><div class="track-section tech"><h4>💻 1. Algorithmic Processing</h4><p>This module focuses on high-speed data parsing. Time Complexity (Big O) prevents server timeouts.</p></div><div class="track-section health"><h4>🏥 2. Clinical Data Streams</h4><p>Hospitals generate terabytes of telemetry hourly. Structuring this raw byte data is critical.</p></div><div class="track-section bio"><h4>🧬 3. Evolutionary Algorithms</h4><p>Algorithms evolve through mutation and selection. Structure ML pipelines to adapt dynamically.</p></div><div class="track-section lab"><h4>🧪 4. God-Mode Lab</h4><p><strong>Mission:</strong> The pipeline has stalled. Isolate the errant data frame.</p></div></div>`,
        task: {
            type: 'find-value',
            targetColumn: 'anomaly',
            condition: (val) => val === 'True',
            successMessage: "System Override Successful. Node unlocked. +100 XP.",
            errorMessage: "Find the True anomaly flag."
        },
        data: [
          {
                    "key": "Patient_XYZ",
                    "vitals": "Stable",
                    "heart_rate": "72",
                    "anomaly": "False"
          },
          {
                    "key": "Patient_ABC",
                    "vitals": "Unstable",
                    "heart_rate": "145",
                    "anomaly": "True"
          },
          {
                    "key": "Patient_LMN",
                    "vitals": "Stable",
                    "heart_rate": "65",
                    "anomaly": "False"
          },
          {
                    "key": "Patient_QRS",
                    "vitals": "Stable",
                    "heart_rate": "80",
                    "anomaly": "False"
          }
]
    },
    {
        id: 'lesson-w42-d1',
        title: 'TensorFlow/Keras - Part 1',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/aircAruvnKk?si=premium_mode',
        sources: [
            { title: 'Official Documentation', url: 'https://developer.mozilla.org/' },
            { title: 'Architect Archives', url: '#' }
        ],
        story: `<div class="quad-track"><div class="track-section tech"><h4>💻 1. Algorithmic Processing</h4><p>This module focuses on high-speed data parsing. Time Complexity (Big O) prevents server timeouts.</p></div><div class="track-section health"><h4>🏥 2. Clinical Data Streams</h4><p>Hospitals generate terabytes of telemetry hourly. Structuring this raw byte data is critical.</p></div><div class="track-section bio"><h4>🧬 3. Evolutionary Algorithms</h4><p>Algorithms evolve through mutation and selection. Structure ML pipelines to adapt dynamically.</p></div><div class="track-section lab"><h4>🧪 4. God-Mode Lab</h4><p><strong>Mission:</strong> The pipeline has stalled. Isolate the errant data frame.</p></div></div>`,
        task: {
            type: 'find-value',
            targetColumn: 'status',
            condition: (val) => val === 'CRITICAL',
            successMessage: "System Override Successful. Node unlocked. +100 XP.",
            errorMessage: "Locate the CRITICAL status node."
        },
        data: [
          {
                    "id": 6445,
                    "value": "Alpha_Node",
                    "metric": "0.45",
                    "status": "Active"
          },
          {
                    "id": 7094,
                    "value": "Beta_Node",
                    "metric": "0.89",
                    "status": "Active"
          },
          {
                    "id": 2901,
                    "value": "Omega_Node",
                    "metric": "0.01",
                    "status": "CRITICAL"
          },
          {
                    "id": 9768,
                    "value": "Zeta_Node",
                    "metric": "1.00",
                    "status": "Active"
          }
]
    },
    {
        id: 'lesson-w42-d2',
        title: 'TensorFlow/Keras - Part 2',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/zOjov-2OZ0E?si=premium_mode',
        sources: [
            { title: 'Official Documentation', url: 'https://developer.mozilla.org/' },
            { title: 'Architect Archives', url: '#' }
        ],
        story: `<div class="quad-track"><div class="track-section tech"><h4>💻 1. Algorithmic Processing</h4><p>This module focuses on high-speed data parsing. Time Complexity (Big O) prevents server timeouts.</p></div><div class="track-section health"><h4>🏥 2. Clinical Data Streams</h4><p>Hospitals generate terabytes of telemetry hourly. Structuring this raw byte data is critical.</p></div><div class="track-section bio"><h4>🧬 3. Evolutionary Algorithms</h4><p>Algorithms evolve through mutation and selection. Structure ML pipelines to adapt dynamically.</p></div><div class="track-section lab"><h4>🧪 4. God-Mode Lab</h4><p><strong>Mission:</strong> The pipeline has stalled. Isolate the errant data frame.</p></div></div>`,
        task: {
            type: 'find-value',
            targetColumn: 'status',
            condition: (val) => val === 'CRITICAL',
            successMessage: "System Override Successful. Node unlocked. +100 XP.",
            errorMessage: "Locate the CRITICAL status node."
        },
        data: [
          {
                    "id": 6463,
                    "value": "Alpha_Node",
                    "metric": "0.45",
                    "status": "Active"
          },
          {
                    "id": 4135,
                    "value": "Beta_Node",
                    "metric": "0.89",
                    "status": "Active"
          },
          {
                    "id": 9919,
                    "value": "Omega_Node",
                    "metric": "0.01",
                    "status": "CRITICAL"
          },
          {
                    "id": 9784,
                    "value": "Zeta_Node",
                    "metric": "1.00",
                    "status": "Active"
          }
]
    },
    {
        id: 'lesson-w42-d3',
        title: 'TensorFlow/Keras - Part 3',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/zOjov-2OZ0E?si=premium_mode',
        sources: [
            { title: 'Official Documentation', url: 'https://developer.mozilla.org/' },
            { title: 'Architect Archives', url: '#' }
        ],
        story: `<div class="quad-track"><div class="track-section tech"><h4>💻 1. Algorithmic Processing</h4><p>This module focuses on high-speed data parsing. Time Complexity (Big O) prevents server timeouts.</p></div><div class="track-section health"><h4>🏥 2. Clinical Data Streams</h4><p>Hospitals generate terabytes of telemetry hourly. Structuring this raw byte data is critical.</p></div><div class="track-section bio"><h4>🧬 3. Evolutionary Algorithms</h4><p>Algorithms evolve through mutation and selection. Structure ML pipelines to adapt dynamically.</p></div><div class="track-section lab"><h4>🧪 4. God-Mode Lab</h4><p><strong>Mission:</strong> The pipeline has stalled. Isolate the errant data frame.</p></div></div>`,
        task: {
            type: 'find-value',
            targetColumn: 'status',
            condition: (val) => val === 'CRITICAL',
            successMessage: "System Override Successful. Node unlocked. +100 XP.",
            errorMessage: "Locate the CRITICAL status node."
        },
        data: [
          {
                    "id": 8456,
                    "value": "Alpha_Node",
                    "metric": "0.45",
                    "status": "Active"
          },
          {
                    "id": 4623,
                    "value": "Beta_Node",
                    "metric": "0.89",
                    "status": "Active"
          },
          {
                    "id": 8593,
                    "value": "Omega_Node",
                    "metric": "0.01",
                    "status": "CRITICAL"
          },
          {
                    "id": 4523,
                    "value": "Zeta_Node",
                    "metric": "1.00",
                    "status": "Active"
          }
]
    },
    {
        id: 'lesson-w42-d4',
        title: 'TensorFlow/Keras - Part 4',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/rpkpK_n2ad0?si=premium_mode',
        sources: [
            { title: 'Official Documentation', url: 'https://developer.mozilla.org/' },
            { title: 'Architect Archives', url: '#' }
        ],
        story: `<div class="quad-track"><div class="track-section tech"><h4>💻 1. Algorithmic Processing</h4><p>This module focuses on high-speed data parsing. Time Complexity (Big O) prevents server timeouts.</p></div><div class="track-section health"><h4>🏥 2. Clinical Data Streams</h4><p>Hospitals generate terabytes of telemetry hourly. Structuring this raw byte data is critical.</p></div><div class="track-section bio"><h4>🧬 3. Evolutionary Algorithms</h4><p>Algorithms evolve through mutation and selection. Structure ML pipelines to adapt dynamically.</p></div><div class="track-section lab"><h4>🧪 4. God-Mode Lab</h4><p><strong>Mission:</strong> The pipeline has stalled. Isolate the errant data frame.</p></div></div>`,
        task: {
            type: 'find-value',
            targetColumn: 'anomaly',
            condition: (val) => val === 'True',
            successMessage: "System Override Successful. Node unlocked. +100 XP.",
            errorMessage: "Find the True anomaly flag."
        },
        data: [
          {
                    "key": "Patient_XYZ",
                    "vitals": "Stable",
                    "heart_rate": "72",
                    "anomaly": "False"
          },
          {
                    "key": "Patient_ABC",
                    "vitals": "Unstable",
                    "heart_rate": "145",
                    "anomaly": "True"
          },
          {
                    "key": "Patient_LMN",
                    "vitals": "Stable",
                    "heart_rate": "65",
                    "anomaly": "False"
          },
          {
                    "key": "Patient_QRS",
                    "vitals": "Stable",
                    "heart_rate": "80",
                    "anomaly": "False"
          }
]
    },
    {
        id: 'lesson-w42-d5',
        title: 'TensorFlow/Keras - Part 5',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/aircAruvnKk?si=premium_mode',
        sources: [
            { title: 'Official Documentation', url: 'https://developer.mozilla.org/' },
            { title: 'Architect Archives', url: '#' }
        ],
        story: `<div class="quad-track"><div class="track-section tech"><h4>💻 1. Core Mechanics</h4><p>Mastering this concept requires understanding the underlying synthetic logic. In enterprise computing, this is the foundational bedrock.</p></div><div class="track-section health"><h4>🏥 2. Bio-Systems</h4><p>Data science in healthcare relies on absolute precision. We apply this logic to sequence genomic arrays.</p></div><div class="track-section bio"><h4>🧬 3. Neural Architecture</h4><p>Information must flow efficiently like a biological synapse. Optimize your code.</p></div><div class="track-section lab"><h4>🧪 4. God-Mode Lab</h4><p><strong>Mission:</strong> Locate the critical node anomaly to restore integrity.</p></div></div>`,
        task: {
            type: 'find-value',
            targetColumn: 'anomaly',
            condition: (val) => val === 'True',
            successMessage: "System Override Successful. Node unlocked. +100 XP.",
            errorMessage: "Find the True anomaly flag."
        },
        data: [
          {
                    "key": "Patient_XYZ",
                    "vitals": "Stable",
                    "heart_rate": "72",
                    "anomaly": "False"
          },
          {
                    "key": "Patient_ABC",
                    "vitals": "Unstable",
                    "heart_rate": "145",
                    "anomaly": "True"
          },
          {
                    "key": "Patient_LMN",
                    "vitals": "Stable",
                    "heart_rate": "65",
                    "anomaly": "False"
          },
          {
                    "key": "Patient_QRS",
                    "vitals": "Stable",
                    "heart_rate": "80",
                    "anomaly": "False"
          }
]
    },
    {
        id: 'lesson-w42-d6',
        title: 'TensorFlow/Keras - Part 6',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/HcqpanDadyQ?si=premium_mode',
        sources: [
            { title: 'Official Documentation', url: 'https://developer.mozilla.org/' },
            { title: 'Architect Archives', url: '#' }
        ],
        story: `<div class="quad-track"><div class="track-section tech"><h4>💻 1. Algorithmic Processing</h4><p>This module focuses on high-speed data parsing. Time Complexity (Big O) prevents server timeouts.</p></div><div class="track-section health"><h4>🏥 2. Clinical Data Streams</h4><p>Hospitals generate terabytes of telemetry hourly. Structuring this raw byte data is critical.</p></div><div class="track-section bio"><h4>🧬 3. Evolutionary Algorithms</h4><p>Algorithms evolve through mutation and selection. Structure ML pipelines to adapt dynamically.</p></div><div class="track-section lab"><h4>🧪 4. God-Mode Lab</h4><p><strong>Mission:</strong> The pipeline has stalled. Isolate the errant data frame.</p></div></div>`,
        task: {
            type: 'find-value',
            targetColumn: 'status',
            condition: (val) => val === 'CRITICAL',
            successMessage: "System Override Successful. Node unlocked. +100 XP.",
            errorMessage: "Locate the CRITICAL status node."
        },
        data: [
          {
                    "id": 8624,
                    "value": "Alpha_Node",
                    "metric": "0.45",
                    "status": "Active"
          },
          {
                    "id": 7425,
                    "value": "Beta_Node",
                    "metric": "0.89",
                    "status": "Active"
          },
          {
                    "id": 8798,
                    "value": "Omega_Node",
                    "metric": "0.01",
                    "status": "CRITICAL"
          },
          {
                    "id": 4041,
                    "value": "Zeta_Node",
                    "metric": "1.00",
                    "status": "Active"
          }
]
    },
    {
        id: 'lesson-w42-d7',
        title: 'Weekly Concept Review',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/rpkpK_n2ad0?si=premium_mode',
        sources: [
            { title: 'Official Documentation', url: 'https://developer.mozilla.org/' },
            { title: 'Architect Archives', url: '#' }
        ],
        story: `<div class="quad-track"><div class="track-section tech"><h4>💻 1. Algorithmic Processing</h4><p>This module focuses on high-speed data parsing. Time Complexity (Big O) prevents server timeouts.</p></div><div class="track-section health"><h4>🏥 2. Clinical Data Streams</h4><p>Hospitals generate terabytes of telemetry hourly. Structuring this raw byte data is critical.</p></div><div class="track-section bio"><h4>🧬 3. Evolutionary Algorithms</h4><p>Algorithms evolve through mutation and selection. Structure ML pipelines to adapt dynamically.</p></div><div class="track-section lab"><h4>🧪 4. God-Mode Lab</h4><p><strong>Mission:</strong> The pipeline has stalled. Isolate the errant data frame.</p></div></div>`,
        task: {
            type: 'find-value',
            targetColumn: 'status',
            condition: (val) => val === 'CRITICAL',
            successMessage: "System Override Successful. Node unlocked. +100 XP.",
            errorMessage: "Locate the CRITICAL status node."
        },
        data: [
          {
                    "id": 8936,
                    "value": "Alpha_Node",
                    "metric": "0.45",
                    "status": "Active"
          },
          {
                    "id": 7254,
                    "value": "Beta_Node",
                    "metric": "0.89",
                    "status": "Active"
          },
          {
                    "id": 9337,
                    "value": "Omega_Node",
                    "metric": "0.01",
                    "status": "CRITICAL"
          },
          {
                    "id": 6400,
                    "value": "Zeta_Node",
                    "metric": "1.00",
                    "status": "Active"
          }
]
    },
    {
        id: 'lesson-w43-d1',
        title: 'CNNs (Images) - Part 1',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/rpkpK_n2ad0?si=premium_mode',
        sources: [
            { title: 'Official Documentation', url: 'https://developer.mozilla.org/' },
            { title: 'Architect Archives', url: '#' }
        ],
        story: `<div class="quad-track"><div class="track-section tech"><h4>💻 1. Core Mechanics</h4><p>Mastering this concept requires understanding the underlying synthetic logic. In enterprise computing, this is the foundational bedrock.</p></div><div class="track-section health"><h4>🏥 2. Bio-Systems</h4><p>Data science in healthcare relies on absolute precision. We apply this logic to sequence genomic arrays.</p></div><div class="track-section bio"><h4>🧬 3. Neural Architecture</h4><p>Information must flow efficiently like a biological synapse. Optimize your code.</p></div><div class="track-section lab"><h4>🧪 4. God-Mode Lab</h4><p><strong>Mission:</strong> Locate the critical node anomaly to restore integrity.</p></div></div>`,
        task: {
            type: 'find-value',
            targetColumn: 'status',
            condition: (val) => val === 'CRITICAL',
            successMessage: "System Override Successful. Node unlocked. +100 XP.",
            errorMessage: "Locate the CRITICAL status node."
        },
        data: [
          {
                    "id": 7454,
                    "value": "Alpha_Node",
                    "metric": "0.45",
                    "status": "Active"
          },
          {
                    "id": 4179,
                    "value": "Beta_Node",
                    "metric": "0.89",
                    "status": "Active"
          },
          {
                    "id": 1717,
                    "value": "Omega_Node",
                    "metric": "0.01",
                    "status": "CRITICAL"
          },
          {
                    "id": 6119,
                    "value": "Zeta_Node",
                    "metric": "1.00",
                    "status": "Active"
          }
]
    },
    {
        id: 'lesson-w43-d2',
        title: 'CNNs (Images) - Part 2',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/HcqpanDadyQ?si=premium_mode',
        sources: [
            { title: 'Official Documentation', url: 'https://developer.mozilla.org/' },
            { title: 'Architect Archives', url: '#' }
        ],
        story: `<div class="quad-track"><div class="track-section tech"><h4>💻 1. Algorithmic Processing</h4><p>This module focuses on high-speed data parsing. Time Complexity (Big O) prevents server timeouts.</p></div><div class="track-section health"><h4>🏥 2. Clinical Data Streams</h4><p>Hospitals generate terabytes of telemetry hourly. Structuring this raw byte data is critical.</p></div><div class="track-section bio"><h4>🧬 3. Evolutionary Algorithms</h4><p>Algorithms evolve through mutation and selection. Structure ML pipelines to adapt dynamically.</p></div><div class="track-section lab"><h4>🧪 4. God-Mode Lab</h4><p><strong>Mission:</strong> The pipeline has stalled. Isolate the errant data frame.</p></div></div>`,
        task: {
            type: 'find-value',
            targetColumn: 'anomaly',
            condition: (val) => val === 'True',
            successMessage: "System Override Successful. Node unlocked. +100 XP.",
            errorMessage: "Find the True anomaly flag."
        },
        data: [
          {
                    "key": "Patient_XYZ",
                    "vitals": "Stable",
                    "heart_rate": "72",
                    "anomaly": "False"
          },
          {
                    "key": "Patient_ABC",
                    "vitals": "Unstable",
                    "heart_rate": "145",
                    "anomaly": "True"
          },
          {
                    "key": "Patient_LMN",
                    "vitals": "Stable",
                    "heart_rate": "65",
                    "anomaly": "False"
          },
          {
                    "key": "Patient_QRS",
                    "vitals": "Stable",
                    "heart_rate": "80",
                    "anomaly": "False"
          }
]
    },
    {
        id: 'lesson-w43-d3',
        title: 'CNNs (Images) - Part 3',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/rpkpK_n2ad0?si=premium_mode',
        sources: [
            { title: 'Official Documentation', url: 'https://developer.mozilla.org/' },
            { title: 'Architect Archives', url: '#' }
        ],
        story: `<div class="quad-track"><div class="track-section tech"><h4>💻 1. Algorithmic Processing</h4><p>This module focuses on high-speed data parsing. Time Complexity (Big O) prevents server timeouts.</p></div><div class="track-section health"><h4>🏥 2. Clinical Data Streams</h4><p>Hospitals generate terabytes of telemetry hourly. Structuring this raw byte data is critical.</p></div><div class="track-section bio"><h4>🧬 3. Evolutionary Algorithms</h4><p>Algorithms evolve through mutation and selection. Structure ML pipelines to adapt dynamically.</p></div><div class="track-section lab"><h4>🧪 4. God-Mode Lab</h4><p><strong>Mission:</strong> The pipeline has stalled. Isolate the errant data frame.</p></div></div>`,
        task: {
            type: 'find-value',
            targetColumn: 'status',
            condition: (val) => val === 'CRITICAL',
            successMessage: "System Override Successful. Node unlocked. +100 XP.",
            errorMessage: "Locate the CRITICAL status node."
        },
        data: [
          {
                    "id": 4670,
                    "value": "Alpha_Node",
                    "metric": "0.45",
                    "status": "Active"
          },
          {
                    "id": 3117,
                    "value": "Beta_Node",
                    "metric": "0.89",
                    "status": "Active"
          },
          {
                    "id": 6006,
                    "value": "Omega_Node",
                    "metric": "0.01",
                    "status": "CRITICAL"
          },
          {
                    "id": 3199,
                    "value": "Zeta_Node",
                    "metric": "1.00",
                    "status": "Active"
          }
]
    },
    {
        id: 'lesson-w43-d4',
        title: 'CNNs (Images) - Part 4',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/HcqpanDadyQ?si=premium_mode',
        sources: [
            { title: 'Official Documentation', url: 'https://developer.mozilla.org/' },
            { title: 'Architect Archives', url: '#' }
        ],
        story: `<div class="quad-track"><div class="track-section tech"><h4>💻 1. Core Mechanics</h4><p>Mastering this concept requires understanding the underlying synthetic logic. In enterprise computing, this is the foundational bedrock.</p></div><div class="track-section health"><h4>🏥 2. Bio-Systems</h4><p>Data science in healthcare relies on absolute precision. We apply this logic to sequence genomic arrays.</p></div><div class="track-section bio"><h4>🧬 3. Neural Architecture</h4><p>Information must flow efficiently like a biological synapse. Optimize your code.</p></div><div class="track-section lab"><h4>🧪 4. God-Mode Lab</h4><p><strong>Mission:</strong> Locate the critical node anomaly to restore integrity.</p></div></div>`,
        task: {
            type: 'find-value',
            targetColumn: 'status',
            condition: (val) => val === 'CRITICAL',
            successMessage: "System Override Successful. Node unlocked. +100 XP.",
            errorMessage: "Locate the CRITICAL status node."
        },
        data: [
          {
                    "id": 2309,
                    "value": "Alpha_Node",
                    "metric": "0.45",
                    "status": "Active"
          },
          {
                    "id": 7232,
                    "value": "Beta_Node",
                    "metric": "0.89",
                    "status": "Active"
          },
          {
                    "id": 2130,
                    "value": "Omega_Node",
                    "metric": "0.01",
                    "status": "CRITICAL"
          },
          {
                    "id": 8326,
                    "value": "Zeta_Node",
                    "metric": "1.00",
                    "status": "Active"
          }
]
    },
    {
        id: 'lesson-w43-d5',
        title: 'CNNs (Images) - Part 5',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/HcqpanDadyQ?si=premium_mode',
        sources: [
            { title: 'Official Documentation', url: 'https://developer.mozilla.org/' },
            { title: 'Architect Archives', url: '#' }
        ],
        story: `<div class="quad-track"><div class="track-section tech"><h4>💻 1. Core Mechanics</h4><p>Mastering this concept requires understanding the underlying synthetic logic. In enterprise computing, this is the foundational bedrock.</p></div><div class="track-section health"><h4>🏥 2. Bio-Systems</h4><p>Data science in healthcare relies on absolute precision. We apply this logic to sequence genomic arrays.</p></div><div class="track-section bio"><h4>🧬 3. Neural Architecture</h4><p>Information must flow efficiently like a biological synapse. Optimize your code.</p></div><div class="track-section lab"><h4>🧪 4. God-Mode Lab</h4><p><strong>Mission:</strong> Locate the critical node anomaly to restore integrity.</p></div></div>`,
        task: {
            type: 'find-value',
            targetColumn: 'status',
            condition: (val) => val === 'CRITICAL',
            successMessage: "System Override Successful. Node unlocked. +100 XP.",
            errorMessage: "Locate the CRITICAL status node."
        },
        data: [
          {
                    "id": 7751,
                    "value": "Alpha_Node",
                    "metric": "0.45",
                    "status": "Active"
          },
          {
                    "id": 2760,
                    "value": "Beta_Node",
                    "metric": "0.89",
                    "status": "Active"
          },
          {
                    "id": 4235,
                    "value": "Omega_Node",
                    "metric": "0.01",
                    "status": "CRITICAL"
          },
          {
                    "id": 2708,
                    "value": "Zeta_Node",
                    "metric": "1.00",
                    "status": "Active"
          }
]
    },
    {
        id: 'lesson-w43-d6',
        title: 'CNNs (Images) - Part 6',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/HcqpanDadyQ?si=premium_mode',
        sources: [
            { title: 'Official Documentation', url: 'https://developer.mozilla.org/' },
            { title: 'Architect Archives', url: '#' }
        ],
        story: `<div class="quad-track"><div class="track-section tech"><h4>💻 1. Algorithmic Processing</h4><p>This module focuses on high-speed data parsing. Time Complexity (Big O) prevents server timeouts.</p></div><div class="track-section health"><h4>🏥 2. Clinical Data Streams</h4><p>Hospitals generate terabytes of telemetry hourly. Structuring this raw byte data is critical.</p></div><div class="track-section bio"><h4>🧬 3. Evolutionary Algorithms</h4><p>Algorithms evolve through mutation and selection. Structure ML pipelines to adapt dynamically.</p></div><div class="track-section lab"><h4>🧪 4. God-Mode Lab</h4><p><strong>Mission:</strong> The pipeline has stalled. Isolate the errant data frame.</p></div></div>`,
        task: {
            type: 'find-value',
            targetColumn: 'anomaly',
            condition: (val) => val === 'True',
            successMessage: "System Override Successful. Node unlocked. +100 XP.",
            errorMessage: "Find the True anomaly flag."
        },
        data: [
          {
                    "key": "Patient_XYZ",
                    "vitals": "Stable",
                    "heart_rate": "72",
                    "anomaly": "False"
          },
          {
                    "key": "Patient_ABC",
                    "vitals": "Unstable",
                    "heart_rate": "145",
                    "anomaly": "True"
          },
          {
                    "key": "Patient_LMN",
                    "vitals": "Stable",
                    "heart_rate": "65",
                    "anomaly": "False"
          },
          {
                    "key": "Patient_QRS",
                    "vitals": "Stable",
                    "heart_rate": "80",
                    "anomaly": "False"
          }
]
    },
    {
        id: 'lesson-w43-d7',
        title: 'Weekly Concept Review',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/aircAruvnKk?si=premium_mode',
        sources: [
            { title: 'Official Documentation', url: 'https://developer.mozilla.org/' },
            { title: 'Architect Archives', url: '#' }
        ],
        story: `<div class="quad-track"><div class="track-section tech"><h4>💻 1. Algorithmic Processing</h4><p>This module focuses on high-speed data parsing. Time Complexity (Big O) prevents server timeouts.</p></div><div class="track-section health"><h4>🏥 2. Clinical Data Streams</h4><p>Hospitals generate terabytes of telemetry hourly. Structuring this raw byte data is critical.</p></div><div class="track-section bio"><h4>🧬 3. Evolutionary Algorithms</h4><p>Algorithms evolve through mutation and selection. Structure ML pipelines to adapt dynamically.</p></div><div class="track-section lab"><h4>🧪 4. God-Mode Lab</h4><p><strong>Mission:</strong> The pipeline has stalled. Isolate the errant data frame.</p></div></div>`,
        task: {
            type: 'find-value',
            targetColumn: 'status',
            condition: (val) => val === 'CRITICAL',
            successMessage: "System Override Successful. Node unlocked. +100 XP.",
            errorMessage: "Locate the CRITICAL status node."
        },
        data: [
          {
                    "id": 6760,
                    "value": "Alpha_Node",
                    "metric": "0.45",
                    "status": "Active"
          },
          {
                    "id": 8918,
                    "value": "Beta_Node",
                    "metric": "0.89",
                    "status": "Active"
          },
          {
                    "id": 6186,
                    "value": "Omega_Node",
                    "metric": "0.01",
                    "status": "CRITICAL"
          },
          {
                    "id": 4723,
                    "value": "Zeta_Node",
                    "metric": "1.00",
                    "status": "Active"
          }
]
    },
    {
        id: 'lesson-w44-d1',
        title: 'RNNs (Text) - Part 1',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/HcqpanDadyQ?si=premium_mode',
        sources: [
            { title: 'Official Documentation', url: 'https://developer.mozilla.org/' },
            { title: 'Architect Archives', url: '#' }
        ],
        story: `<div class="quad-track"><div class="track-section tech"><h4>💻 1. Core Mechanics</h4><p>Mastering this concept requires understanding the underlying synthetic logic. In enterprise computing, this is the foundational bedrock.</p></div><div class="track-section health"><h4>🏥 2. Bio-Systems</h4><p>Data science in healthcare relies on absolute precision. We apply this logic to sequence genomic arrays.</p></div><div class="track-section bio"><h4>🧬 3. Neural Architecture</h4><p>Information must flow efficiently like a biological synapse. Optimize your code.</p></div><div class="track-section lab"><h4>🧪 4. God-Mode Lab</h4><p><strong>Mission:</strong> Locate the critical node anomaly to restore integrity.</p></div></div>`,
        task: {
            type: 'find-value',
            targetColumn: 'anomaly',
            condition: (val) => val === 'True',
            successMessage: "System Override Successful. Node unlocked. +100 XP.",
            errorMessage: "Find the True anomaly flag."
        },
        data: [
          {
                    "key": "Patient_XYZ",
                    "vitals": "Stable",
                    "heart_rate": "72",
                    "anomaly": "False"
          },
          {
                    "key": "Patient_ABC",
                    "vitals": "Unstable",
                    "heart_rate": "145",
                    "anomaly": "True"
          },
          {
                    "key": "Patient_LMN",
                    "vitals": "Stable",
                    "heart_rate": "65",
                    "anomaly": "False"
          },
          {
                    "key": "Patient_QRS",
                    "vitals": "Stable",
                    "heart_rate": "80",
                    "anomaly": "False"
          }
]
    },
    {
        id: 'lesson-w44-d2',
        title: 'RNNs (Text) - Part 2',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/aircAruvnKk?si=premium_mode',
        sources: [
            { title: 'Official Documentation', url: 'https://developer.mozilla.org/' },
            { title: 'Architect Archives', url: '#' }
        ],
        story: `<div class="quad-track"><div class="track-section tech"><h4>💻 1. Core Mechanics</h4><p>Mastering this concept requires understanding the underlying synthetic logic. In enterprise computing, this is the foundational bedrock.</p></div><div class="track-section health"><h4>🏥 2. Bio-Systems</h4><p>Data science in healthcare relies on absolute precision. We apply this logic to sequence genomic arrays.</p></div><div class="track-section bio"><h4>🧬 3. Neural Architecture</h4><p>Information must flow efficiently like a biological synapse. Optimize your code.</p></div><div class="track-section lab"><h4>🧪 4. God-Mode Lab</h4><p><strong>Mission:</strong> Locate the critical node anomaly to restore integrity.</p></div></div>`,
        task: {
            type: 'find-value',
            targetColumn: 'anomaly',
            condition: (val) => val === 'True',
            successMessage: "System Override Successful. Node unlocked. +100 XP.",
            errorMessage: "Find the True anomaly flag."
        },
        data: [
          {
                    "key": "Patient_XYZ",
                    "vitals": "Stable",
                    "heart_rate": "72",
                    "anomaly": "False"
          },
          {
                    "key": "Patient_ABC",
                    "vitals": "Unstable",
                    "heart_rate": "145",
                    "anomaly": "True"
          },
          {
                    "key": "Patient_LMN",
                    "vitals": "Stable",
                    "heart_rate": "65",
                    "anomaly": "False"
          },
          {
                    "key": "Patient_QRS",
                    "vitals": "Stable",
                    "heart_rate": "80",
                    "anomaly": "False"
          }
]
    },
    {
        id: 'lesson-w44-d3',
        title: 'RNNs (Text) - Part 3',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/rpkpK_n2ad0?si=premium_mode',
        sources: [
            { title: 'Official Documentation', url: 'https://developer.mozilla.org/' },
            { title: 'Architect Archives', url: '#' }
        ],
        story: `<div class="quad-track"><div class="track-section tech"><h4>💻 1. Algorithmic Processing</h4><p>This module focuses on high-speed data parsing. Time Complexity (Big O) prevents server timeouts.</p></div><div class="track-section health"><h4>🏥 2. Clinical Data Streams</h4><p>Hospitals generate terabytes of telemetry hourly. Structuring this raw byte data is critical.</p></div><div class="track-section bio"><h4>🧬 3. Evolutionary Algorithms</h4><p>Algorithms evolve through mutation and selection. Structure ML pipelines to adapt dynamically.</p></div><div class="track-section lab"><h4>🧪 4. God-Mode Lab</h4><p><strong>Mission:</strong> The pipeline has stalled. Isolate the errant data frame.</p></div></div>`,
        task: {
            type: 'find-value',
            targetColumn: 'status',
            condition: (val) => val === 'CRITICAL',
            successMessage: "System Override Successful. Node unlocked. +100 XP.",
            errorMessage: "Locate the CRITICAL status node."
        },
        data: [
          {
                    "id": 9026,
                    "value": "Alpha_Node",
                    "metric": "0.45",
                    "status": "Active"
          },
          {
                    "id": 6686,
                    "value": "Beta_Node",
                    "metric": "0.89",
                    "status": "Active"
          },
          {
                    "id": 8268,
                    "value": "Omega_Node",
                    "metric": "0.01",
                    "status": "CRITICAL"
          },
          {
                    "id": 6791,
                    "value": "Zeta_Node",
                    "metric": "1.00",
                    "status": "Active"
          }
]
    },
    {
        id: 'lesson-w44-d4',
        title: 'RNNs (Text) - Part 4',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/HcqpanDadyQ?si=premium_mode',
        sources: [
            { title: 'Official Documentation', url: 'https://developer.mozilla.org/' },
            { title: 'Architect Archives', url: '#' }
        ],
        story: `<div class="quad-track"><div class="track-section tech"><h4>💻 1. Core Mechanics</h4><p>Mastering this concept requires understanding the underlying synthetic logic. In enterprise computing, this is the foundational bedrock.</p></div><div class="track-section health"><h4>🏥 2. Bio-Systems</h4><p>Data science in healthcare relies on absolute precision. We apply this logic to sequence genomic arrays.</p></div><div class="track-section bio"><h4>🧬 3. Neural Architecture</h4><p>Information must flow efficiently like a biological synapse. Optimize your code.</p></div><div class="track-section lab"><h4>🧪 4. God-Mode Lab</h4><p><strong>Mission:</strong> Locate the critical node anomaly to restore integrity.</p></div></div>`,
        task: {
            type: 'find-value',
            targetColumn: 'anomaly',
            condition: (val) => val === 'True',
            successMessage: "System Override Successful. Node unlocked. +100 XP.",
            errorMessage: "Find the True anomaly flag."
        },
        data: [
          {
                    "key": "Patient_XYZ",
                    "vitals": "Stable",
                    "heart_rate": "72",
                    "anomaly": "False"
          },
          {
                    "key": "Patient_ABC",
                    "vitals": "Unstable",
                    "heart_rate": "145",
                    "anomaly": "True"
          },
          {
                    "key": "Patient_LMN",
                    "vitals": "Stable",
                    "heart_rate": "65",
                    "anomaly": "False"
          },
          {
                    "key": "Patient_QRS",
                    "vitals": "Stable",
                    "heart_rate": "80",
                    "anomaly": "False"
          }
]
    },
    {
        id: 'lesson-w44-d5',
        title: 'RNNs (Text) - Part 5',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/zOjov-2OZ0E?si=premium_mode',
        sources: [
            { title: 'Official Documentation', url: 'https://developer.mozilla.org/' },
            { title: 'Architect Archives', url: '#' }
        ],
        story: `<div class="quad-track"><div class="track-section tech"><h4>💻 1. Core Mechanics</h4><p>Mastering this concept requires understanding the underlying synthetic logic. In enterprise computing, this is the foundational bedrock.</p></div><div class="track-section health"><h4>🏥 2. Bio-Systems</h4><p>Data science in healthcare relies on absolute precision. We apply this logic to sequence genomic arrays.</p></div><div class="track-section bio"><h4>🧬 3. Neural Architecture</h4><p>Information must flow efficiently like a biological synapse. Optimize your code.</p></div><div class="track-section lab"><h4>🧪 4. God-Mode Lab</h4><p><strong>Mission:</strong> Locate the critical node anomaly to restore integrity.</p></div></div>`,
        task: {
            type: 'find-value',
            targetColumn: 'anomaly',
            condition: (val) => val === 'True',
            successMessage: "System Override Successful. Node unlocked. +100 XP.",
            errorMessage: "Find the True anomaly flag."
        },
        data: [
          {
                    "key": "Patient_XYZ",
                    "vitals": "Stable",
                    "heart_rate": "72",
                    "anomaly": "False"
          },
          {
                    "key": "Patient_ABC",
                    "vitals": "Unstable",
                    "heart_rate": "145",
                    "anomaly": "True"
          },
          {
                    "key": "Patient_LMN",
                    "vitals": "Stable",
                    "heart_rate": "65",
                    "anomaly": "False"
          },
          {
                    "key": "Patient_QRS",
                    "vitals": "Stable",
                    "heart_rate": "80",
                    "anomaly": "False"
          }
]
    },
    {
        id: 'lesson-w44-d6',
        title: 'RNNs (Text) - Part 6',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/aircAruvnKk?si=premium_mode',
        sources: [
            { title: 'Official Documentation', url: 'https://developer.mozilla.org/' },
            { title: 'Architect Archives', url: '#' }
        ],
        story: `<div class="quad-track"><div class="track-section tech"><h4>💻 1. Algorithmic Processing</h4><p>This module focuses on high-speed data parsing. Time Complexity (Big O) prevents server timeouts.</p></div><div class="track-section health"><h4>🏥 2. Clinical Data Streams</h4><p>Hospitals generate terabytes of telemetry hourly. Structuring this raw byte data is critical.</p></div><div class="track-section bio"><h4>🧬 3. Evolutionary Algorithms</h4><p>Algorithms evolve through mutation and selection. Structure ML pipelines to adapt dynamically.</p></div><div class="track-section lab"><h4>🧪 4. God-Mode Lab</h4><p><strong>Mission:</strong> The pipeline has stalled. Isolate the errant data frame.</p></div></div>`,
        task: {
            type: 'find-value',
            targetColumn: 'status',
            condition: (val) => val === 'CRITICAL',
            successMessage: "System Override Successful. Node unlocked. +100 XP.",
            errorMessage: "Locate the CRITICAL status node."
        },
        data: [
          {
                    "id": 7965,
                    "value": "Alpha_Node",
                    "metric": "0.45",
                    "status": "Active"
          },
          {
                    "id": 9678,
                    "value": "Beta_Node",
                    "metric": "0.89",
                    "status": "Active"
          },
          {
                    "id": 8638,
                    "value": "Omega_Node",
                    "metric": "0.01",
                    "status": "CRITICAL"
          },
          {
                    "id": 2243,
                    "value": "Zeta_Node",
                    "metric": "1.00",
                    "status": "Active"
          }
]
    },
    {
        id: 'lesson-w44-d7',
        title: 'Weekly Concept Review',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/rpkpK_n2ad0?si=premium_mode',
        sources: [
            { title: 'Official Documentation', url: 'https://developer.mozilla.org/' },
            { title: 'Architect Archives', url: '#' }
        ],
        story: `<div class="quad-track"><div class="track-section tech"><h4>💻 1. Core Mechanics</h4><p>Mastering this concept requires understanding the underlying synthetic logic. In enterprise computing, this is the foundational bedrock.</p></div><div class="track-section health"><h4>🏥 2. Bio-Systems</h4><p>Data science in healthcare relies on absolute precision. We apply this logic to sequence genomic arrays.</p></div><div class="track-section bio"><h4>🧬 3. Neural Architecture</h4><p>Information must flow efficiently like a biological synapse. Optimize your code.</p></div><div class="track-section lab"><h4>🧪 4. God-Mode Lab</h4><p><strong>Mission:</strong> Locate the critical node anomaly to restore integrity.</p></div></div>`,
        task: {
            type: 'find-value',
            targetColumn: 'status',
            condition: (val) => val === 'CRITICAL',
            successMessage: "System Override Successful. Node unlocked. +100 XP.",
            errorMessage: "Locate the CRITICAL status node."
        },
        data: [
          {
                    "id": 9785,
                    "value": "Alpha_Node",
                    "metric": "0.45",
                    "status": "Active"
          },
          {
                    "id": 2490,
                    "value": "Beta_Node",
                    "metric": "0.89",
                    "status": "Active"
          },
          {
                    "id": 1990,
                    "value": "Omega_Node",
                    "metric": "0.01",
                    "status": "CRITICAL"
          },
          {
                    "id": 5888,
                    "value": "Zeta_Node",
                    "metric": "1.00",
                    "status": "Active"
          }
]
    },
    {
        id: 'lesson-w45-d1',
        title: 'NLP Basics - Part 1',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/rpkpK_n2ad0?si=premium_mode',
        sources: [
            { title: 'Official Documentation', url: 'https://developer.mozilla.org/' },
            { title: 'Architect Archives', url: '#' }
        ],
        story: `<div class="quad-track"><div class="track-section tech"><h4>💻 1. Core Mechanics</h4><p>Mastering this concept requires understanding the underlying synthetic logic. In enterprise computing, this is the foundational bedrock.</p></div><div class="track-section health"><h4>🏥 2. Bio-Systems</h4><p>Data science in healthcare relies on absolute precision. We apply this logic to sequence genomic arrays.</p></div><div class="track-section bio"><h4>🧬 3. Neural Architecture</h4><p>Information must flow efficiently like a biological synapse. Optimize your code.</p></div><div class="track-section lab"><h4>🧪 4. God-Mode Lab</h4><p><strong>Mission:</strong> Locate the critical node anomaly to restore integrity.</p></div></div>`,
        task: {
            type: 'find-value',
            targetColumn: 'status',
            condition: (val) => val === 'CRITICAL',
            successMessage: "System Override Successful. Node unlocked. +100 XP.",
            errorMessage: "Locate the CRITICAL status node."
        },
        data: [
          {
                    "id": 6429,
                    "value": "Alpha_Node",
                    "metric": "0.45",
                    "status": "Active"
          },
          {
                    "id": 9525,
                    "value": "Beta_Node",
                    "metric": "0.89",
                    "status": "Active"
          },
          {
                    "id": 6646,
                    "value": "Omega_Node",
                    "metric": "0.01",
                    "status": "CRITICAL"
          },
          {
                    "id": 4583,
                    "value": "Zeta_Node",
                    "metric": "1.00",
                    "status": "Active"
          }
]
    },
    {
        id: 'lesson-w45-d2',
        title: 'NLP Basics - Part 2',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/rpkpK_n2ad0?si=premium_mode',
        sources: [
            { title: 'Official Documentation', url: 'https://developer.mozilla.org/' },
            { title: 'Architect Archives', url: '#' }
        ],
        story: `<div class="quad-track"><div class="track-section tech"><h4>💻 1. Core Mechanics</h4><p>Mastering this concept requires understanding the underlying synthetic logic. In enterprise computing, this is the foundational bedrock.</p></div><div class="track-section health"><h4>🏥 2. Bio-Systems</h4><p>Data science in healthcare relies on absolute precision. We apply this logic to sequence genomic arrays.</p></div><div class="track-section bio"><h4>🧬 3. Neural Architecture</h4><p>Information must flow efficiently like a biological synapse. Optimize your code.</p></div><div class="track-section lab"><h4>🧪 4. God-Mode Lab</h4><p><strong>Mission:</strong> Locate the critical node anomaly to restore integrity.</p></div></div>`,
        task: {
            type: 'find-value',
            targetColumn: 'status',
            condition: (val) => val === 'CRITICAL',
            successMessage: "System Override Successful. Node unlocked. +100 XP.",
            errorMessage: "Locate the CRITICAL status node."
        },
        data: [
          {
                    "id": 2612,
                    "value": "Alpha_Node",
                    "metric": "0.45",
                    "status": "Active"
          },
          {
                    "id": 6094,
                    "value": "Beta_Node",
                    "metric": "0.89",
                    "status": "Active"
          },
          {
                    "id": 3830,
                    "value": "Omega_Node",
                    "metric": "0.01",
                    "status": "CRITICAL"
          },
          {
                    "id": 3083,
                    "value": "Zeta_Node",
                    "metric": "1.00",
                    "status": "Active"
          }
]
    },
    {
        id: 'lesson-w45-d3',
        title: 'NLP Basics - Part 3',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/zOjov-2OZ0E?si=premium_mode',
        sources: [
            { title: 'Official Documentation', url: 'https://developer.mozilla.org/' },
            { title: 'Architect Archives', url: '#' }
        ],
        story: `<div class="quad-track"><div class="track-section tech"><h4>💻 1. Algorithmic Processing</h4><p>This module focuses on high-speed data parsing. Time Complexity (Big O) prevents server timeouts.</p></div><div class="track-section health"><h4>🏥 2. Clinical Data Streams</h4><p>Hospitals generate terabytes of telemetry hourly. Structuring this raw byte data is critical.</p></div><div class="track-section bio"><h4>🧬 3. Evolutionary Algorithms</h4><p>Algorithms evolve through mutation and selection. Structure ML pipelines to adapt dynamically.</p></div><div class="track-section lab"><h4>🧪 4. God-Mode Lab</h4><p><strong>Mission:</strong> The pipeline has stalled. Isolate the errant data frame.</p></div></div>`,
        task: {
            type: 'find-value',
            targetColumn: 'status',
            condition: (val) => val === 'CRITICAL',
            successMessage: "System Override Successful. Node unlocked. +100 XP.",
            errorMessage: "Locate the CRITICAL status node."
        },
        data: [
          {
                    "id": 1641,
                    "value": "Alpha_Node",
                    "metric": "0.45",
                    "status": "Active"
          },
          {
                    "id": 7720,
                    "value": "Beta_Node",
                    "metric": "0.89",
                    "status": "Active"
          },
          {
                    "id": 5567,
                    "value": "Omega_Node",
                    "metric": "0.01",
                    "status": "CRITICAL"
          },
          {
                    "id": 2455,
                    "value": "Zeta_Node",
                    "metric": "1.00",
                    "status": "Active"
          }
]
    },
    {
        id: 'lesson-w45-d4',
        title: 'NLP Basics - Part 4',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/HcqpanDadyQ?si=premium_mode',
        sources: [
            { title: 'Official Documentation', url: 'https://developer.mozilla.org/' },
            { title: 'Architect Archives', url: '#' }
        ],
        story: `<div class="quad-track"><div class="track-section tech"><h4>💻 1. Algorithmic Processing</h4><p>This module focuses on high-speed data parsing. Time Complexity (Big O) prevents server timeouts.</p></div><div class="track-section health"><h4>🏥 2. Clinical Data Streams</h4><p>Hospitals generate terabytes of telemetry hourly. Structuring this raw byte data is critical.</p></div><div class="track-section bio"><h4>🧬 3. Evolutionary Algorithms</h4><p>Algorithms evolve through mutation and selection. Structure ML pipelines to adapt dynamically.</p></div><div class="track-section lab"><h4>🧪 4. God-Mode Lab</h4><p><strong>Mission:</strong> The pipeline has stalled. Isolate the errant data frame.</p></div></div>`,
        task: {
            type: 'find-value',
            targetColumn: 'anomaly',
            condition: (val) => val === 'True',
            successMessage: "System Override Successful. Node unlocked. +100 XP.",
            errorMessage: "Find the True anomaly flag."
        },
        data: [
          {
                    "key": "Patient_XYZ",
                    "vitals": "Stable",
                    "heart_rate": "72",
                    "anomaly": "False"
          },
          {
                    "key": "Patient_ABC",
                    "vitals": "Unstable",
                    "heart_rate": "145",
                    "anomaly": "True"
          },
          {
                    "key": "Patient_LMN",
                    "vitals": "Stable",
                    "heart_rate": "65",
                    "anomaly": "False"
          },
          {
                    "key": "Patient_QRS",
                    "vitals": "Stable",
                    "heart_rate": "80",
                    "anomaly": "False"
          }
]
    },
    {
        id: 'lesson-w45-d5',
        title: 'NLP Basics - Part 5',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/aircAruvnKk?si=premium_mode',
        sources: [
            { title: 'Official Documentation', url: 'https://developer.mozilla.org/' },
            { title: 'Architect Archives', url: '#' }
        ],
        story: `<div class="quad-track"><div class="track-section tech"><h4>💻 1. Core Mechanics</h4><p>Mastering this concept requires understanding the underlying synthetic logic. In enterprise computing, this is the foundational bedrock.</p></div><div class="track-section health"><h4>🏥 2. Bio-Systems</h4><p>Data science in healthcare relies on absolute precision. We apply this logic to sequence genomic arrays.</p></div><div class="track-section bio"><h4>🧬 3. Neural Architecture</h4><p>Information must flow efficiently like a biological synapse. Optimize your code.</p></div><div class="track-section lab"><h4>🧪 4. God-Mode Lab</h4><p><strong>Mission:</strong> Locate the critical node anomaly to restore integrity.</p></div></div>`,
        task: {
            type: 'find-value',
            targetColumn: 'status',
            condition: (val) => val === 'CRITICAL',
            successMessage: "System Override Successful. Node unlocked. +100 XP.",
            errorMessage: "Locate the CRITICAL status node."
        },
        data: [
          {
                    "id": 5639,
                    "value": "Alpha_Node",
                    "metric": "0.45",
                    "status": "Active"
          },
          {
                    "id": 5396,
                    "value": "Beta_Node",
                    "metric": "0.89",
                    "status": "Active"
          },
          {
                    "id": 1561,
                    "value": "Omega_Node",
                    "metric": "0.01",
                    "status": "CRITICAL"
          },
          {
                    "id": 7850,
                    "value": "Zeta_Node",
                    "metric": "1.00",
                    "status": "Active"
          }
]
    },
    {
        id: 'lesson-w45-d6',
        title: 'NLP Basics - Part 6',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/rpkpK_n2ad0?si=premium_mode',
        sources: [
            { title: 'Official Documentation', url: 'https://developer.mozilla.org/' },
            { title: 'Architect Archives', url: '#' }
        ],
        story: `<div class="quad-track"><div class="track-section tech"><h4>💻 1. Algorithmic Processing</h4><p>This module focuses on high-speed data parsing. Time Complexity (Big O) prevents server timeouts.</p></div><div class="track-section health"><h4>🏥 2. Clinical Data Streams</h4><p>Hospitals generate terabytes of telemetry hourly. Structuring this raw byte data is critical.</p></div><div class="track-section bio"><h4>🧬 3. Evolutionary Algorithms</h4><p>Algorithms evolve through mutation and selection. Structure ML pipelines to adapt dynamically.</p></div><div class="track-section lab"><h4>🧪 4. God-Mode Lab</h4><p><strong>Mission:</strong> The pipeline has stalled. Isolate the errant data frame.</p></div></div>`,
        task: {
            type: 'find-value',
            targetColumn: 'anomaly',
            condition: (val) => val === 'True',
            successMessage: "System Override Successful. Node unlocked. +100 XP.",
            errorMessage: "Find the True anomaly flag."
        },
        data: [
          {
                    "key": "Patient_XYZ",
                    "vitals": "Stable",
                    "heart_rate": "72",
                    "anomaly": "False"
          },
          {
                    "key": "Patient_ABC",
                    "vitals": "Unstable",
                    "heart_rate": "145",
                    "anomaly": "True"
          },
          {
                    "key": "Patient_LMN",
                    "vitals": "Stable",
                    "heart_rate": "65",
                    "anomaly": "False"
          },
          {
                    "key": "Patient_QRS",
                    "vitals": "Stable",
                    "heart_rate": "80",
                    "anomaly": "False"
          }
]
    },
    {
        id: 'lesson-w45-d7',
        title: 'Weekly Concept Review',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/rpkpK_n2ad0?si=premium_mode',
        sources: [
            { title: 'Official Documentation', url: 'https://developer.mozilla.org/' },
            { title: 'Architect Archives', url: '#' }
        ],
        story: `<div class="quad-track"><div class="track-section tech"><h4>💻 1. Algorithmic Processing</h4><p>This module focuses on high-speed data parsing. Time Complexity (Big O) prevents server timeouts.</p></div><div class="track-section health"><h4>🏥 2. Clinical Data Streams</h4><p>Hospitals generate terabytes of telemetry hourly. Structuring this raw byte data is critical.</p></div><div class="track-section bio"><h4>🧬 3. Evolutionary Algorithms</h4><p>Algorithms evolve through mutation and selection. Structure ML pipelines to adapt dynamically.</p></div><div class="track-section lab"><h4>🧪 4. God-Mode Lab</h4><p><strong>Mission:</strong> The pipeline has stalled. Isolate the errant data frame.</p></div></div>`,
        task: {
            type: 'find-value',
            targetColumn: 'status',
            condition: (val) => val === 'CRITICAL',
            successMessage: "System Override Successful. Node unlocked. +100 XP.",
            errorMessage: "Locate the CRITICAL status node."
        },
        data: [
          {
                    "id": 7304,
                    "value": "Alpha_Node",
                    "metric": "0.45",
                    "status": "Active"
          },
          {
                    "id": 8796,
                    "value": "Beta_Node",
                    "metric": "0.89",
                    "status": "Active"
          },
          {
                    "id": 4087,
                    "value": "Omega_Node",
                    "metric": "0.01",
                    "status": "CRITICAL"
          },
          {
                    "id": 9755,
                    "value": "Zeta_Node",
                    "metric": "1.00",
                    "status": "Active"
          }
]
    },
    {
        id: 'lesson-w46-d1',
        title: 'Transformers - Part 1',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/aircAruvnKk?si=premium_mode',
        sources: [
            { title: 'Official Documentation', url: 'https://developer.mozilla.org/' },
            { title: 'Architect Archives', url: '#' }
        ],
        story: `<div class="quad-track"><div class="track-section tech"><h4>💻 1. Algorithmic Processing</h4><p>This module focuses on high-speed data parsing. Time Complexity (Big O) prevents server timeouts.</p></div><div class="track-section health"><h4>🏥 2. Clinical Data Streams</h4><p>Hospitals generate terabytes of telemetry hourly. Structuring this raw byte data is critical.</p></div><div class="track-section bio"><h4>🧬 3. Evolutionary Algorithms</h4><p>Algorithms evolve through mutation and selection. Structure ML pipelines to adapt dynamically.</p></div><div class="track-section lab"><h4>🧪 4. God-Mode Lab</h4><p><strong>Mission:</strong> The pipeline has stalled. Isolate the errant data frame.</p></div></div>`,
        task: {
            type: 'find-value',
            targetColumn: 'status',
            condition: (val) => val === 'CRITICAL',
            successMessage: "System Override Successful. Node unlocked. +100 XP.",
            errorMessage: "Locate the CRITICAL status node."
        },
        data: [
          {
                    "id": 6539,
                    "value": "Alpha_Node",
                    "metric": "0.45",
                    "status": "Active"
          },
          {
                    "id": 6434,
                    "value": "Beta_Node",
                    "metric": "0.89",
                    "status": "Active"
          },
          {
                    "id": 8842,
                    "value": "Omega_Node",
                    "metric": "0.01",
                    "status": "CRITICAL"
          },
          {
                    "id": 3570,
                    "value": "Zeta_Node",
                    "metric": "1.00",
                    "status": "Active"
          }
]
    },
    {
        id: 'lesson-w46-d2',
        title: 'Transformers - Part 2',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/rpkpK_n2ad0?si=premium_mode',
        sources: [
            { title: 'Official Documentation', url: 'https://developer.mozilla.org/' },
            { title: 'Architect Archives', url: '#' }
        ],
        story: `<div class="quad-track"><div class="track-section tech"><h4>💻 1. Core Mechanics</h4><p>Mastering this concept requires understanding the underlying synthetic logic. In enterprise computing, this is the foundational bedrock.</p></div><div class="track-section health"><h4>🏥 2. Bio-Systems</h4><p>Data science in healthcare relies on absolute precision. We apply this logic to sequence genomic arrays.</p></div><div class="track-section bio"><h4>🧬 3. Neural Architecture</h4><p>Information must flow efficiently like a biological synapse. Optimize your code.</p></div><div class="track-section lab"><h4>🧪 4. God-Mode Lab</h4><p><strong>Mission:</strong> Locate the critical node anomaly to restore integrity.</p></div></div>`,
        task: {
            type: 'find-value',
            targetColumn: 'status',
            condition: (val) => val === 'CRITICAL',
            successMessage: "System Override Successful. Node unlocked. +100 XP.",
            errorMessage: "Locate the CRITICAL status node."
        },
        data: [
          {
                    "id": 4142,
                    "value": "Alpha_Node",
                    "metric": "0.45",
                    "status": "Active"
          },
          {
                    "id": 1636,
                    "value": "Beta_Node",
                    "metric": "0.89",
                    "status": "Active"
          },
          {
                    "id": 7897,
                    "value": "Omega_Node",
                    "metric": "0.01",
                    "status": "CRITICAL"
          },
          {
                    "id": 2679,
                    "value": "Zeta_Node",
                    "metric": "1.00",
                    "status": "Active"
          }
]
    },
    {
        id: 'lesson-w46-d3',
        title: 'Transformers - Part 3',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/aircAruvnKk?si=premium_mode',
        sources: [
            { title: 'Official Documentation', url: 'https://developer.mozilla.org/' },
            { title: 'Architect Archives', url: '#' }
        ],
        story: `<div class="quad-track"><div class="track-section tech"><h4>💻 1. Algorithmic Processing</h4><p>This module focuses on high-speed data parsing. Time Complexity (Big O) prevents server timeouts.</p></div><div class="track-section health"><h4>🏥 2. Clinical Data Streams</h4><p>Hospitals generate terabytes of telemetry hourly. Structuring this raw byte data is critical.</p></div><div class="track-section bio"><h4>🧬 3. Evolutionary Algorithms</h4><p>Algorithms evolve through mutation and selection. Structure ML pipelines to adapt dynamically.</p></div><div class="track-section lab"><h4>🧪 4. God-Mode Lab</h4><p><strong>Mission:</strong> The pipeline has stalled. Isolate the errant data frame.</p></div></div>`,
        task: {
            type: 'find-value',
            targetColumn: 'status',
            condition: (val) => val === 'CRITICAL',
            successMessage: "System Override Successful. Node unlocked. +100 XP.",
            errorMessage: "Locate the CRITICAL status node."
        },
        data: [
          {
                    "id": 8099,
                    "value": "Alpha_Node",
                    "metric": "0.45",
                    "status": "Active"
          },
          {
                    "id": 4846,
                    "value": "Beta_Node",
                    "metric": "0.89",
                    "status": "Active"
          },
          {
                    "id": 8704,
                    "value": "Omega_Node",
                    "metric": "0.01",
                    "status": "CRITICAL"
          },
          {
                    "id": 3033,
                    "value": "Zeta_Node",
                    "metric": "1.00",
                    "status": "Active"
          }
]
    },
    {
        id: 'lesson-w46-d4',
        title: 'Transformers - Part 4',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/rpkpK_n2ad0?si=premium_mode',
        sources: [
            { title: 'Official Documentation', url: 'https://developer.mozilla.org/' },
            { title: 'Architect Archives', url: '#' }
        ],
        story: `<div class="quad-track"><div class="track-section tech"><h4>💻 1. Algorithmic Processing</h4><p>This module focuses on high-speed data parsing. Time Complexity (Big O) prevents server timeouts.</p></div><div class="track-section health"><h4>🏥 2. Clinical Data Streams</h4><p>Hospitals generate terabytes of telemetry hourly. Structuring this raw byte data is critical.</p></div><div class="track-section bio"><h4>🧬 3. Evolutionary Algorithms</h4><p>Algorithms evolve through mutation and selection. Structure ML pipelines to adapt dynamically.</p></div><div class="track-section lab"><h4>🧪 4. God-Mode Lab</h4><p><strong>Mission:</strong> The pipeline has stalled. Isolate the errant data frame.</p></div></div>`,
        task: {
            type: 'find-value',
            targetColumn: 'anomaly',
            condition: (val) => val === 'True',
            successMessage: "System Override Successful. Node unlocked. +100 XP.",
            errorMessage: "Find the True anomaly flag."
        },
        data: [
          {
                    "key": "Patient_XYZ",
                    "vitals": "Stable",
                    "heart_rate": "72",
                    "anomaly": "False"
          },
          {
                    "key": "Patient_ABC",
                    "vitals": "Unstable",
                    "heart_rate": "145",
                    "anomaly": "True"
          },
          {
                    "key": "Patient_LMN",
                    "vitals": "Stable",
                    "heart_rate": "65",
                    "anomaly": "False"
          },
          {
                    "key": "Patient_QRS",
                    "vitals": "Stable",
                    "heart_rate": "80",
                    "anomaly": "False"
          }
]
    },
    {
        id: 'lesson-w46-d5',
        title: 'Transformers - Part 5',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/zOjov-2OZ0E?si=premium_mode',
        sources: [
            { title: 'Official Documentation', url: 'https://developer.mozilla.org/' },
            { title: 'Architect Archives', url: '#' }
        ],
        story: `<div class="quad-track"><div class="track-section tech"><h4>💻 1. Core Mechanics</h4><p>Mastering this concept requires understanding the underlying synthetic logic. In enterprise computing, this is the foundational bedrock.</p></div><div class="track-section health"><h4>🏥 2. Bio-Systems</h4><p>Data science in healthcare relies on absolute precision. We apply this logic to sequence genomic arrays.</p></div><div class="track-section bio"><h4>🧬 3. Neural Architecture</h4><p>Information must flow efficiently like a biological synapse. Optimize your code.</p></div><div class="track-section lab"><h4>🧪 4. God-Mode Lab</h4><p><strong>Mission:</strong> Locate the critical node anomaly to restore integrity.</p></div></div>`,
        task: {
            type: 'find-value',
            targetColumn: 'anomaly',
            condition: (val) => val === 'True',
            successMessage: "System Override Successful. Node unlocked. +100 XP.",
            errorMessage: "Find the True anomaly flag."
        },
        data: [
          {
                    "key": "Patient_XYZ",
                    "vitals": "Stable",
                    "heart_rate": "72",
                    "anomaly": "False"
          },
          {
                    "key": "Patient_ABC",
                    "vitals": "Unstable",
                    "heart_rate": "145",
                    "anomaly": "True"
          },
          {
                    "key": "Patient_LMN",
                    "vitals": "Stable",
                    "heart_rate": "65",
                    "anomaly": "False"
          },
          {
                    "key": "Patient_QRS",
                    "vitals": "Stable",
                    "heart_rate": "80",
                    "anomaly": "False"
          }
]
    },
    {
        id: 'lesson-w46-d6',
        title: 'Transformers - Part 6',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/HcqpanDadyQ?si=premium_mode',
        sources: [
            { title: 'Official Documentation', url: 'https://developer.mozilla.org/' },
            { title: 'Architect Archives', url: '#' }
        ],
        story: `<div class="quad-track"><div class="track-section tech"><h4>💻 1. Core Mechanics</h4><p>Mastering this concept requires understanding the underlying synthetic logic. In enterprise computing, this is the foundational bedrock.</p></div><div class="track-section health"><h4>🏥 2. Bio-Systems</h4><p>Data science in healthcare relies on absolute precision. We apply this logic to sequence genomic arrays.</p></div><div class="track-section bio"><h4>🧬 3. Neural Architecture</h4><p>Information must flow efficiently like a biological synapse. Optimize your code.</p></div><div class="track-section lab"><h4>🧪 4. God-Mode Lab</h4><p><strong>Mission:</strong> Locate the critical node anomaly to restore integrity.</p></div></div>`,
        task: {
            type: 'find-value',
            targetColumn: 'anomaly',
            condition: (val) => val === 'True',
            successMessage: "System Override Successful. Node unlocked. +100 XP.",
            errorMessage: "Find the True anomaly flag."
        },
        data: [
          {
                    "key": "Patient_XYZ",
                    "vitals": "Stable",
                    "heart_rate": "72",
                    "anomaly": "False"
          },
          {
                    "key": "Patient_ABC",
                    "vitals": "Unstable",
                    "heart_rate": "145",
                    "anomaly": "True"
          },
          {
                    "key": "Patient_LMN",
                    "vitals": "Stable",
                    "heart_rate": "65",
                    "anomaly": "False"
          },
          {
                    "key": "Patient_QRS",
                    "vitals": "Stable",
                    "heart_rate": "80",
                    "anomaly": "False"
          }
]
    },
    {
        id: 'lesson-w46-d7',
        title: 'Weekly Concept Review',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/zOjov-2OZ0E?si=premium_mode',
        sources: [
            { title: 'Official Documentation', url: 'https://developer.mozilla.org/' },
            { title: 'Architect Archives', url: '#' }
        ],
        story: `<div class="quad-track"><div class="track-section tech"><h4>💻 1. Algorithmic Processing</h4><p>This module focuses on high-speed data parsing. Time Complexity (Big O) prevents server timeouts.</p></div><div class="track-section health"><h4>🏥 2. Clinical Data Streams</h4><p>Hospitals generate terabytes of telemetry hourly. Structuring this raw byte data is critical.</p></div><div class="track-section bio"><h4>🧬 3. Evolutionary Algorithms</h4><p>Algorithms evolve through mutation and selection. Structure ML pipelines to adapt dynamically.</p></div><div class="track-section lab"><h4>🧪 4. God-Mode Lab</h4><p><strong>Mission:</strong> The pipeline has stalled. Isolate the errant data frame.</p></div></div>`,
        task: {
            type: 'find-value',
            targetColumn: 'status',
            condition: (val) => val === 'CRITICAL',
            successMessage: "System Override Successful. Node unlocked. +100 XP.",
            errorMessage: "Locate the CRITICAL status node."
        },
        data: [
          {
                    "id": 8103,
                    "value": "Alpha_Node",
                    "metric": "0.45",
                    "status": "Active"
          },
          {
                    "id": 6850,
                    "value": "Beta_Node",
                    "metric": "0.89",
                    "status": "Active"
          },
          {
                    "id": 2113,
                    "value": "Omega_Node",
                    "metric": "0.01",
                    "status": "CRITICAL"
          },
          {
                    "id": 7679,
                    "value": "Zeta_Node",
                    "metric": "1.00",
                    "status": "Active"
          }
]
    },
    {
        id: 'lesson-w47-d1',
        title: 'GenAI Overview - Part 1',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/rpkpK_n2ad0?si=premium_mode',
        sources: [
            { title: 'Official Documentation', url: 'https://developer.mozilla.org/' },
            { title: 'Architect Archives', url: '#' }
        ],
        story: `<div class="quad-track"><div class="track-section tech"><h4>💻 1. Core Mechanics</h4><p>Mastering this concept requires understanding the underlying synthetic logic. In enterprise computing, this is the foundational bedrock.</p></div><div class="track-section health"><h4>🏥 2. Bio-Systems</h4><p>Data science in healthcare relies on absolute precision. We apply this logic to sequence genomic arrays.</p></div><div class="track-section bio"><h4>🧬 3. Neural Architecture</h4><p>Information must flow efficiently like a biological synapse. Optimize your code.</p></div><div class="track-section lab"><h4>🧪 4. God-Mode Lab</h4><p><strong>Mission:</strong> Locate the critical node anomaly to restore integrity.</p></div></div>`,
        task: {
            type: 'find-value',
            targetColumn: 'status',
            condition: (val) => val === 'CRITICAL',
            successMessage: "System Override Successful. Node unlocked. +100 XP.",
            errorMessage: "Locate the CRITICAL status node."
        },
        data: [
          {
                    "id": 8060,
                    "value": "Alpha_Node",
                    "metric": "0.45",
                    "status": "Active"
          },
          {
                    "id": 8129,
                    "value": "Beta_Node",
                    "metric": "0.89",
                    "status": "Active"
          },
          {
                    "id": 8948,
                    "value": "Omega_Node",
                    "metric": "0.01",
                    "status": "CRITICAL"
          },
          {
                    "id": 8717,
                    "value": "Zeta_Node",
                    "metric": "1.00",
                    "status": "Active"
          }
]
    },
    {
        id: 'lesson-w47-d2',
        title: 'GenAI Overview - Part 2',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/rpkpK_n2ad0?si=premium_mode',
        sources: [
            { title: 'Official Documentation', url: 'https://developer.mozilla.org/' },
            { title: 'Architect Archives', url: '#' }
        ],
        story: `<div class="quad-track"><div class="track-section tech"><h4>💻 1. Core Mechanics</h4><p>Mastering this concept requires understanding the underlying synthetic logic. In enterprise computing, this is the foundational bedrock.</p></div><div class="track-section health"><h4>🏥 2. Bio-Systems</h4><p>Data science in healthcare relies on absolute precision. We apply this logic to sequence genomic arrays.</p></div><div class="track-section bio"><h4>🧬 3. Neural Architecture</h4><p>Information must flow efficiently like a biological synapse. Optimize your code.</p></div><div class="track-section lab"><h4>🧪 4. God-Mode Lab</h4><p><strong>Mission:</strong> Locate the critical node anomaly to restore integrity.</p></div></div>`,
        task: {
            type: 'find-value',
            targetColumn: 'status',
            condition: (val) => val === 'CRITICAL',
            successMessage: "System Override Successful. Node unlocked. +100 XP.",
            errorMessage: "Locate the CRITICAL status node."
        },
        data: [
          {
                    "id": 8668,
                    "value": "Alpha_Node",
                    "metric": "0.45",
                    "status": "Active"
          },
          {
                    "id": 7486,
                    "value": "Beta_Node",
                    "metric": "0.89",
                    "status": "Active"
          },
          {
                    "id": 2011,
                    "value": "Omega_Node",
                    "metric": "0.01",
                    "status": "CRITICAL"
          },
          {
                    "id": 6258,
                    "value": "Zeta_Node",
                    "metric": "1.00",
                    "status": "Active"
          }
]
    },
    {
        id: 'lesson-w47-d3',
        title: 'GenAI Overview - Part 3',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/aircAruvnKk?si=premium_mode',
        sources: [
            { title: 'Official Documentation', url: 'https://developer.mozilla.org/' },
            { title: 'Architect Archives', url: '#' }
        ],
        story: `<div class="quad-track"><div class="track-section tech"><h4>💻 1. Core Mechanics</h4><p>Mastering this concept requires understanding the underlying synthetic logic. In enterprise computing, this is the foundational bedrock.</p></div><div class="track-section health"><h4>🏥 2. Bio-Systems</h4><p>Data science in healthcare relies on absolute precision. We apply this logic to sequence genomic arrays.</p></div><div class="track-section bio"><h4>🧬 3. Neural Architecture</h4><p>Information must flow efficiently like a biological synapse. Optimize your code.</p></div><div class="track-section lab"><h4>🧪 4. God-Mode Lab</h4><p><strong>Mission:</strong> Locate the critical node anomaly to restore integrity.</p></div></div>`,
        task: {
            type: 'find-value',
            targetColumn: 'status',
            condition: (val) => val === 'CRITICAL',
            successMessage: "System Override Successful. Node unlocked. +100 XP.",
            errorMessage: "Locate the CRITICAL status node."
        },
        data: [
          {
                    "id": 8483,
                    "value": "Alpha_Node",
                    "metric": "0.45",
                    "status": "Active"
          },
          {
                    "id": 2421,
                    "value": "Beta_Node",
                    "metric": "0.89",
                    "status": "Active"
          },
          {
                    "id": 7056,
                    "value": "Omega_Node",
                    "metric": "0.01",
                    "status": "CRITICAL"
          },
          {
                    "id": 9487,
                    "value": "Zeta_Node",
                    "metric": "1.00",
                    "status": "Active"
          }
]
    },
    {
        id: 'lesson-w47-d4',
        title: 'GenAI Overview - Part 4',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/aircAruvnKk?si=premium_mode',
        sources: [
            { title: 'Official Documentation', url: 'https://developer.mozilla.org/' },
            { title: 'Architect Archives', url: '#' }
        ],
        story: `<div class="quad-track"><div class="track-section tech"><h4>💻 1. Core Mechanics</h4><p>Mastering this concept requires understanding the underlying synthetic logic. In enterprise computing, this is the foundational bedrock.</p></div><div class="track-section health"><h4>🏥 2. Bio-Systems</h4><p>Data science in healthcare relies on absolute precision. We apply this logic to sequence genomic arrays.</p></div><div class="track-section bio"><h4>🧬 3. Neural Architecture</h4><p>Information must flow efficiently like a biological synapse. Optimize your code.</p></div><div class="track-section lab"><h4>🧪 4. God-Mode Lab</h4><p><strong>Mission:</strong> Locate the critical node anomaly to restore integrity.</p></div></div>`,
        task: {
            type: 'find-value',
            targetColumn: 'anomaly',
            condition: (val) => val === 'True',
            successMessage: "System Override Successful. Node unlocked. +100 XP.",
            errorMessage: "Find the True anomaly flag."
        },
        data: [
          {
                    "key": "Patient_XYZ",
                    "vitals": "Stable",
                    "heart_rate": "72",
                    "anomaly": "False"
          },
          {
                    "key": "Patient_ABC",
                    "vitals": "Unstable",
                    "heart_rate": "145",
                    "anomaly": "True"
          },
          {
                    "key": "Patient_LMN",
                    "vitals": "Stable",
                    "heart_rate": "65",
                    "anomaly": "False"
          },
          {
                    "key": "Patient_QRS",
                    "vitals": "Stable",
                    "heart_rate": "80",
                    "anomaly": "False"
          }
]
    },
    {
        id: 'lesson-w47-d5',
        title: 'GenAI Overview - Part 5',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/rpkpK_n2ad0?si=premium_mode',
        sources: [
            { title: 'Official Documentation', url: 'https://developer.mozilla.org/' },
            { title: 'Architect Archives', url: '#' }
        ],
        story: `<div class="quad-track"><div class="track-section tech"><h4>💻 1. Algorithmic Processing</h4><p>This module focuses on high-speed data parsing. Time Complexity (Big O) prevents server timeouts.</p></div><div class="track-section health"><h4>🏥 2. Clinical Data Streams</h4><p>Hospitals generate terabytes of telemetry hourly. Structuring this raw byte data is critical.</p></div><div class="track-section bio"><h4>🧬 3. Evolutionary Algorithms</h4><p>Algorithms evolve through mutation and selection. Structure ML pipelines to adapt dynamically.</p></div><div class="track-section lab"><h4>🧪 4. God-Mode Lab</h4><p><strong>Mission:</strong> The pipeline has stalled. Isolate the errant data frame.</p></div></div>`,
        task: {
            type: 'find-value',
            targetColumn: 'anomaly',
            condition: (val) => val === 'True',
            successMessage: "System Override Successful. Node unlocked. +100 XP.",
            errorMessage: "Find the True anomaly flag."
        },
        data: [
          {
                    "key": "Patient_XYZ",
                    "vitals": "Stable",
                    "heart_rate": "72",
                    "anomaly": "False"
          },
          {
                    "key": "Patient_ABC",
                    "vitals": "Unstable",
                    "heart_rate": "145",
                    "anomaly": "True"
          },
          {
                    "key": "Patient_LMN",
                    "vitals": "Stable",
                    "heart_rate": "65",
                    "anomaly": "False"
          },
          {
                    "key": "Patient_QRS",
                    "vitals": "Stable",
                    "heart_rate": "80",
                    "anomaly": "False"
          }
]
    },
    {
        id: 'lesson-w47-d6',
        title: 'GenAI Overview - Part 6',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/zOjov-2OZ0E?si=premium_mode',
        sources: [
            { title: 'Official Documentation', url: 'https://developer.mozilla.org/' },
            { title: 'Architect Archives', url: '#' }
        ],
        story: `<div class="quad-track"><div class="track-section tech"><h4>💻 1. Algorithmic Processing</h4><p>This module focuses on high-speed data parsing. Time Complexity (Big O) prevents server timeouts.</p></div><div class="track-section health"><h4>🏥 2. Clinical Data Streams</h4><p>Hospitals generate terabytes of telemetry hourly. Structuring this raw byte data is critical.</p></div><div class="track-section bio"><h4>🧬 3. Evolutionary Algorithms</h4><p>Algorithms evolve through mutation and selection. Structure ML pipelines to adapt dynamically.</p></div><div class="track-section lab"><h4>🧪 4. God-Mode Lab</h4><p><strong>Mission:</strong> The pipeline has stalled. Isolate the errant data frame.</p></div></div>`,
        task: {
            type: 'find-value',
            targetColumn: 'status',
            condition: (val) => val === 'CRITICAL',
            successMessage: "System Override Successful. Node unlocked. +100 XP.",
            errorMessage: "Locate the CRITICAL status node."
        },
        data: [
          {
                    "id": 5599,
                    "value": "Alpha_Node",
                    "metric": "0.45",
                    "status": "Active"
          },
          {
                    "id": 4471,
                    "value": "Beta_Node",
                    "metric": "0.89",
                    "status": "Active"
          },
          {
                    "id": 9370,
                    "value": "Omega_Node",
                    "metric": "0.01",
                    "status": "CRITICAL"
          },
          {
                    "id": 5395,
                    "value": "Zeta_Node",
                    "metric": "1.00",
                    "status": "Active"
          }
]
    },
    {
        id: 'lesson-w47-d7',
        title: 'Weekly Concept Review',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/aircAruvnKk?si=premium_mode',
        sources: [
            { title: 'Official Documentation', url: 'https://developer.mozilla.org/' },
            { title: 'Architect Archives', url: '#' }
        ],
        story: `<div class="quad-track"><div class="track-section tech"><h4>💻 1. Algorithmic Processing</h4><p>This module focuses on high-speed data parsing. Time Complexity (Big O) prevents server timeouts.</p></div><div class="track-section health"><h4>🏥 2. Clinical Data Streams</h4><p>Hospitals generate terabytes of telemetry hourly. Structuring this raw byte data is critical.</p></div><div class="track-section bio"><h4>🧬 3. Evolutionary Algorithms</h4><p>Algorithms evolve through mutation and selection. Structure ML pipelines to adapt dynamically.</p></div><div class="track-section lab"><h4>🧪 4. God-Mode Lab</h4><p><strong>Mission:</strong> The pipeline has stalled. Isolate the errant data frame.</p></div></div>`,
        task: {
            type: 'find-value',
            targetColumn: 'status',
            condition: (val) => val === 'CRITICAL',
            successMessage: "System Override Successful. Node unlocked. +100 XP.",
            errorMessage: "Locate the CRITICAL status node."
        },
        data: [
          {
                    "id": 2599,
                    "value": "Alpha_Node",
                    "metric": "0.45",
                    "status": "Active"
          },
          {
                    "id": 7815,
                    "value": "Beta_Node",
                    "metric": "0.89",
                    "status": "Active"
          },
          {
                    "id": 2489,
                    "value": "Omega_Node",
                    "metric": "0.01",
                    "status": "CRITICAL"
          },
          {
                    "id": 7363,
                    "value": "Zeta_Node",
                    "metric": "1.00",
                    "status": "Active"
          }
]
    },
    {
        id: 'lesson-w48-d1',
        title: 'Prompt Engineering - Part 1',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/HcqpanDadyQ?si=premium_mode',
        sources: [
            { title: 'Official Documentation', url: 'https://developer.mozilla.org/' },
            { title: 'Architect Archives', url: '#' }
        ],
        story: `<div class="quad-track"><div class="track-section tech"><h4>💻 1. Algorithmic Processing</h4><p>This module focuses on high-speed data parsing. Time Complexity (Big O) prevents server timeouts.</p></div><div class="track-section health"><h4>🏥 2. Clinical Data Streams</h4><p>Hospitals generate terabytes of telemetry hourly. Structuring this raw byte data is critical.</p></div><div class="track-section bio"><h4>🧬 3. Evolutionary Algorithms</h4><p>Algorithms evolve through mutation and selection. Structure ML pipelines to adapt dynamically.</p></div><div class="track-section lab"><h4>🧪 4. God-Mode Lab</h4><p><strong>Mission:</strong> The pipeline has stalled. Isolate the errant data frame.</p></div></div>`,
        task: {
            type: 'find-value',
            targetColumn: 'status',
            condition: (val) => val === 'CRITICAL',
            successMessage: "System Override Successful. Node unlocked. +100 XP.",
            errorMessage: "Locate the CRITICAL status node."
        },
        data: [
          {
                    "id": 3383,
                    "value": "Alpha_Node",
                    "metric": "0.45",
                    "status": "Active"
          },
          {
                    "id": 3057,
                    "value": "Beta_Node",
                    "metric": "0.89",
                    "status": "Active"
          },
          {
                    "id": 3645,
                    "value": "Omega_Node",
                    "metric": "0.01",
                    "status": "CRITICAL"
          },
          {
                    "id": 2730,
                    "value": "Zeta_Node",
                    "metric": "1.00",
                    "status": "Active"
          }
]
    },
    {
        id: 'lesson-w48-d2',
        title: 'Prompt Engineering - Part 2',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/HcqpanDadyQ?si=premium_mode',
        sources: [
            { title: 'Official Documentation', url: 'https://developer.mozilla.org/' },
            { title: 'Architect Archives', url: '#' }
        ],
        story: `<div class="quad-track"><div class="track-section tech"><h4>💻 1. Algorithmic Processing</h4><p>This module focuses on high-speed data parsing. Time Complexity (Big O) prevents server timeouts.</p></div><div class="track-section health"><h4>🏥 2. Clinical Data Streams</h4><p>Hospitals generate terabytes of telemetry hourly. Structuring this raw byte data is critical.</p></div><div class="track-section bio"><h4>🧬 3. Evolutionary Algorithms</h4><p>Algorithms evolve through mutation and selection. Structure ML pipelines to adapt dynamically.</p></div><div class="track-section lab"><h4>🧪 4. God-Mode Lab</h4><p><strong>Mission:</strong> The pipeline has stalled. Isolate the errant data frame.</p></div></div>`,
        task: {
            type: 'find-value',
            targetColumn: 'status',
            condition: (val) => val === 'CRITICAL',
            successMessage: "System Override Successful. Node unlocked. +100 XP.",
            errorMessage: "Locate the CRITICAL status node."
        },
        data: [
          {
                    "id": 5637,
                    "value": "Alpha_Node",
                    "metric": "0.45",
                    "status": "Active"
          },
          {
                    "id": 8413,
                    "value": "Beta_Node",
                    "metric": "0.89",
                    "status": "Active"
          },
          {
                    "id": 5096,
                    "value": "Omega_Node",
                    "metric": "0.01",
                    "status": "CRITICAL"
          },
          {
                    "id": 4826,
                    "value": "Zeta_Node",
                    "metric": "1.00",
                    "status": "Active"
          }
]
    },
    {
        id: 'lesson-w48-d3',
        title: 'Prompt Engineering - Part 3',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/HcqpanDadyQ?si=premium_mode',
        sources: [
            { title: 'Official Documentation', url: 'https://developer.mozilla.org/' },
            { title: 'Architect Archives', url: '#' }
        ],
        story: `<div class="quad-track"><div class="track-section tech"><h4>💻 1. Algorithmic Processing</h4><p>This module focuses on high-speed data parsing. Time Complexity (Big O) prevents server timeouts.</p></div><div class="track-section health"><h4>🏥 2. Clinical Data Streams</h4><p>Hospitals generate terabytes of telemetry hourly. Structuring this raw byte data is critical.</p></div><div class="track-section bio"><h4>🧬 3. Evolutionary Algorithms</h4><p>Algorithms evolve through mutation and selection. Structure ML pipelines to adapt dynamically.</p></div><div class="track-section lab"><h4>🧪 4. God-Mode Lab</h4><p><strong>Mission:</strong> The pipeline has stalled. Isolate the errant data frame.</p></div></div>`,
        task: {
            type: 'find-value',
            targetColumn: 'anomaly',
            condition: (val) => val === 'True',
            successMessage: "System Override Successful. Node unlocked. +100 XP.",
            errorMessage: "Find the True anomaly flag."
        },
        data: [
          {
                    "key": "Patient_XYZ",
                    "vitals": "Stable",
                    "heart_rate": "72",
                    "anomaly": "False"
          },
          {
                    "key": "Patient_ABC",
                    "vitals": "Unstable",
                    "heart_rate": "145",
                    "anomaly": "True"
          },
          {
                    "key": "Patient_LMN",
                    "vitals": "Stable",
                    "heart_rate": "65",
                    "anomaly": "False"
          },
          {
                    "key": "Patient_QRS",
                    "vitals": "Stable",
                    "heart_rate": "80",
                    "anomaly": "False"
          }
]
    },
    {
        id: 'lesson-w48-d4',
        title: 'Prompt Engineering - Part 4',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/rpkpK_n2ad0?si=premium_mode',
        sources: [
            { title: 'Official Documentation', url: 'https://developer.mozilla.org/' },
            { title: 'Architect Archives', url: '#' }
        ],
        story: `<div class="quad-track"><div class="track-section tech"><h4>💻 1. Core Mechanics</h4><p>Mastering this concept requires understanding the underlying synthetic logic. In enterprise computing, this is the foundational bedrock.</p></div><div class="track-section health"><h4>🏥 2. Bio-Systems</h4><p>Data science in healthcare relies on absolute precision. We apply this logic to sequence genomic arrays.</p></div><div class="track-section bio"><h4>🧬 3. Neural Architecture</h4><p>Information must flow efficiently like a biological synapse. Optimize your code.</p></div><div class="track-section lab"><h4>🧪 4. God-Mode Lab</h4><p><strong>Mission:</strong> Locate the critical node anomaly to restore integrity.</p></div></div>`,
        task: {
            type: 'find-value',
            targetColumn: 'anomaly',
            condition: (val) => val === 'True',
            successMessage: "System Override Successful. Node unlocked. +100 XP.",
            errorMessage: "Find the True anomaly flag."
        },
        data: [
          {
                    "key": "Patient_XYZ",
                    "vitals": "Stable",
                    "heart_rate": "72",
                    "anomaly": "False"
          },
          {
                    "key": "Patient_ABC",
                    "vitals": "Unstable",
                    "heart_rate": "145",
                    "anomaly": "True"
          },
          {
                    "key": "Patient_LMN",
                    "vitals": "Stable",
                    "heart_rate": "65",
                    "anomaly": "False"
          },
          {
                    "key": "Patient_QRS",
                    "vitals": "Stable",
                    "heart_rate": "80",
                    "anomaly": "False"
          }
]
    },
    {
        id: 'lesson-w48-d5',
        title: 'Prompt Engineering - Part 5',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/aircAruvnKk?si=premium_mode',
        sources: [
            { title: 'Official Documentation', url: 'https://developer.mozilla.org/' },
            { title: 'Architect Archives', url: '#' }
        ],
        story: `<div class="quad-track"><div class="track-section tech"><h4>💻 1. Core Mechanics</h4><p>Mastering this concept requires understanding the underlying synthetic logic. In enterprise computing, this is the foundational bedrock.</p></div><div class="track-section health"><h4>🏥 2. Bio-Systems</h4><p>Data science in healthcare relies on absolute precision. We apply this logic to sequence genomic arrays.</p></div><div class="track-section bio"><h4>🧬 3. Neural Architecture</h4><p>Information must flow efficiently like a biological synapse. Optimize your code.</p></div><div class="track-section lab"><h4>🧪 4. God-Mode Lab</h4><p><strong>Mission:</strong> Locate the critical node anomaly to restore integrity.</p></div></div>`,
        task: {
            type: 'find-value',
            targetColumn: 'status',
            condition: (val) => val === 'CRITICAL',
            successMessage: "System Override Successful. Node unlocked. +100 XP.",
            errorMessage: "Locate the CRITICAL status node."
        },
        data: [
          {
                    "id": 3439,
                    "value": "Alpha_Node",
                    "metric": "0.45",
                    "status": "Active"
          },
          {
                    "id": 4282,
                    "value": "Beta_Node",
                    "metric": "0.89",
                    "status": "Active"
          },
          {
                    "id": 3005,
                    "value": "Omega_Node",
                    "metric": "0.01",
                    "status": "CRITICAL"
          },
          {
                    "id": 7182,
                    "value": "Zeta_Node",
                    "metric": "1.00",
                    "status": "Active"
          }
]
    },
    {
        id: 'lesson-w48-d6',
        title: 'Prompt Engineering - Part 6',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/aircAruvnKk?si=premium_mode',
        sources: [
            { title: 'Official Documentation', url: 'https://developer.mozilla.org/' },
            { title: 'Architect Archives', url: '#' }
        ],
        story: `<div class="quad-track"><div class="track-section tech"><h4>💻 1. Algorithmic Processing</h4><p>This module focuses on high-speed data parsing. Time Complexity (Big O) prevents server timeouts.</p></div><div class="track-section health"><h4>🏥 2. Clinical Data Streams</h4><p>Hospitals generate terabytes of telemetry hourly. Structuring this raw byte data is critical.</p></div><div class="track-section bio"><h4>🧬 3. Evolutionary Algorithms</h4><p>Algorithms evolve through mutation and selection. Structure ML pipelines to adapt dynamically.</p></div><div class="track-section lab"><h4>🧪 4. God-Mode Lab</h4><p><strong>Mission:</strong> The pipeline has stalled. Isolate the errant data frame.</p></div></div>`,
        task: {
            type: 'find-value',
            targetColumn: 'status',
            condition: (val) => val === 'CRITICAL',
            successMessage: "System Override Successful. Node unlocked. +100 XP.",
            errorMessage: "Locate the CRITICAL status node."
        },
        data: [
          {
                    "id": 8001,
                    "value": "Alpha_Node",
                    "metric": "0.45",
                    "status": "Active"
          },
          {
                    "id": 7586,
                    "value": "Beta_Node",
                    "metric": "0.89",
                    "status": "Active"
          },
          {
                    "id": 8373,
                    "value": "Omega_Node",
                    "metric": "0.01",
                    "status": "CRITICAL"
          },
          {
                    "id": 6380,
                    "value": "Zeta_Node",
                    "metric": "1.00",
                    "status": "Active"
          }
]
    },
    {
        id: 'lesson-w48-d7',
        title: 'Weekly Concept Review',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/rpkpK_n2ad0?si=premium_mode',
        sources: [
            { title: 'Official Documentation', url: 'https://developer.mozilla.org/' },
            { title: 'Architect Archives', url: '#' }
        ],
        story: `<div class="quad-track"><div class="track-section tech"><h4>💻 1. Algorithmic Processing</h4><p>This module focuses on high-speed data parsing. Time Complexity (Big O) prevents server timeouts.</p></div><div class="track-section health"><h4>🏥 2. Clinical Data Streams</h4><p>Hospitals generate terabytes of telemetry hourly. Structuring this raw byte data is critical.</p></div><div class="track-section bio"><h4>🧬 3. Evolutionary Algorithms</h4><p>Algorithms evolve through mutation and selection. Structure ML pipelines to adapt dynamically.</p></div><div class="track-section lab"><h4>🧪 4. God-Mode Lab</h4><p><strong>Mission:</strong> The pipeline has stalled. Isolate the errant data frame.</p></div></div>`,
        task: {
            type: 'find-value',
            targetColumn: 'anomaly',
            condition: (val) => val === 'True',
            successMessage: "System Override Successful. Node unlocked. +100 XP.",
            errorMessage: "Find the True anomaly flag."
        },
        data: [
          {
                    "key": "Patient_XYZ",
                    "vitals": "Stable",
                    "heart_rate": "72",
                    "anomaly": "False"
          },
          {
                    "key": "Patient_ABC",
                    "vitals": "Unstable",
                    "heart_rate": "145",
                    "anomaly": "True"
          },
          {
                    "key": "Patient_LMN",
                    "vitals": "Stable",
                    "heart_rate": "65",
                    "anomaly": "False"
          },
          {
                    "key": "Patient_QRS",
                    "vitals": "Stable",
                    "heart_rate": "80",
                    "anomaly": "False"
          }
]
    },
    {
        id: 'lesson-w49-d1',
        title: 'AI Ethics - Part 1',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/rpkpK_n2ad0?si=premium_mode',
        sources: [
            { title: 'Official Documentation', url: 'https://developer.mozilla.org/' },
            { title: 'Architect Archives', url: '#' }
        ],
        story: `<div class="quad-track"><div class="track-section tech"><h4>💻 1. Algorithmic Processing</h4><p>This module focuses on high-speed data parsing. Time Complexity (Big O) prevents server timeouts.</p></div><div class="track-section health"><h4>🏥 2. Clinical Data Streams</h4><p>Hospitals generate terabytes of telemetry hourly. Structuring this raw byte data is critical.</p></div><div class="track-section bio"><h4>🧬 3. Evolutionary Algorithms</h4><p>Algorithms evolve through mutation and selection. Structure ML pipelines to adapt dynamically.</p></div><div class="track-section lab"><h4>🧪 4. God-Mode Lab</h4><p><strong>Mission:</strong> The pipeline has stalled. Isolate the errant data frame.</p></div></div>`,
        task: {
            type: 'find-value',
            targetColumn: 'anomaly',
            condition: (val) => val === 'True',
            successMessage: "System Override Successful. Node unlocked. +100 XP.",
            errorMessage: "Find the True anomaly flag."
        },
        data: [
          {
                    "key": "Patient_XYZ",
                    "vitals": "Stable",
                    "heart_rate": "72",
                    "anomaly": "False"
          },
          {
                    "key": "Patient_ABC",
                    "vitals": "Unstable",
                    "heart_rate": "145",
                    "anomaly": "True"
          },
          {
                    "key": "Patient_LMN",
                    "vitals": "Stable",
                    "heart_rate": "65",
                    "anomaly": "False"
          },
          {
                    "key": "Patient_QRS",
                    "vitals": "Stable",
                    "heart_rate": "80",
                    "anomaly": "False"
          }
]
    },
    {
        id: 'lesson-w49-d2',
        title: 'AI Ethics - Part 2',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/zOjov-2OZ0E?si=premium_mode',
        sources: [
            { title: 'Official Documentation', url: 'https://developer.mozilla.org/' },
            { title: 'Architect Archives', url: '#' }
        ],
        story: `<div class="quad-track"><div class="track-section tech"><h4>💻 1. Core Mechanics</h4><p>Mastering this concept requires understanding the underlying synthetic logic. In enterprise computing, this is the foundational bedrock.</p></div><div class="track-section health"><h4>🏥 2. Bio-Systems</h4><p>Data science in healthcare relies on absolute precision. We apply this logic to sequence genomic arrays.</p></div><div class="track-section bio"><h4>🧬 3. Neural Architecture</h4><p>Information must flow efficiently like a biological synapse. Optimize your code.</p></div><div class="track-section lab"><h4>🧪 4. God-Mode Lab</h4><p><strong>Mission:</strong> Locate the critical node anomaly to restore integrity.</p></div></div>`,
        task: {
            type: 'find-value',
            targetColumn: 'anomaly',
            condition: (val) => val === 'True',
            successMessage: "System Override Successful. Node unlocked. +100 XP.",
            errorMessage: "Find the True anomaly flag."
        },
        data: [
          {
                    "key": "Patient_XYZ",
                    "vitals": "Stable",
                    "heart_rate": "72",
                    "anomaly": "False"
          },
          {
                    "key": "Patient_ABC",
                    "vitals": "Unstable",
                    "heart_rate": "145",
                    "anomaly": "True"
          },
          {
                    "key": "Patient_LMN",
                    "vitals": "Stable",
                    "heart_rate": "65",
                    "anomaly": "False"
          },
          {
                    "key": "Patient_QRS",
                    "vitals": "Stable",
                    "heart_rate": "80",
                    "anomaly": "False"
          }
]
    },
    {
        id: 'lesson-w49-d3',
        title: 'AI Ethics - Part 3',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/aircAruvnKk?si=premium_mode',
        sources: [
            { title: 'Official Documentation', url: 'https://developer.mozilla.org/' },
            { title: 'Architect Archives', url: '#' }
        ],
        story: `<div class="quad-track"><div class="track-section tech"><h4>💻 1. Algorithmic Processing</h4><p>This module focuses on high-speed data parsing. Time Complexity (Big O) prevents server timeouts.</p></div><div class="track-section health"><h4>🏥 2. Clinical Data Streams</h4><p>Hospitals generate terabytes of telemetry hourly. Structuring this raw byte data is critical.</p></div><div class="track-section bio"><h4>🧬 3. Evolutionary Algorithms</h4><p>Algorithms evolve through mutation and selection. Structure ML pipelines to adapt dynamically.</p></div><div class="track-section lab"><h4>🧪 4. God-Mode Lab</h4><p><strong>Mission:</strong> The pipeline has stalled. Isolate the errant data frame.</p></div></div>`,
        task: {
            type: 'find-value',
            targetColumn: 'anomaly',
            condition: (val) => val === 'True',
            successMessage: "System Override Successful. Node unlocked. +100 XP.",
            errorMessage: "Find the True anomaly flag."
        },
        data: [
          {
                    "key": "Patient_XYZ",
                    "vitals": "Stable",
                    "heart_rate": "72",
                    "anomaly": "False"
          },
          {
                    "key": "Patient_ABC",
                    "vitals": "Unstable",
                    "heart_rate": "145",
                    "anomaly": "True"
          },
          {
                    "key": "Patient_LMN",
                    "vitals": "Stable",
                    "heart_rate": "65",
                    "anomaly": "False"
          },
          {
                    "key": "Patient_QRS",
                    "vitals": "Stable",
                    "heart_rate": "80",
                    "anomaly": "False"
          }
]
    },
    {
        id: 'lesson-w49-d4',
        title: 'AI Ethics - Part 4',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/aircAruvnKk?si=premium_mode',
        sources: [
            { title: 'Official Documentation', url: 'https://developer.mozilla.org/' },
            { title: 'Architect Archives', url: '#' }
        ],
        story: `<div class="quad-track"><div class="track-section tech"><h4>💻 1. Algorithmic Processing</h4><p>This module focuses on high-speed data parsing. Time Complexity (Big O) prevents server timeouts.</p></div><div class="track-section health"><h4>🏥 2. Clinical Data Streams</h4><p>Hospitals generate terabytes of telemetry hourly. Structuring this raw byte data is critical.</p></div><div class="track-section bio"><h4>🧬 3. Evolutionary Algorithms</h4><p>Algorithms evolve through mutation and selection. Structure ML pipelines to adapt dynamically.</p></div><div class="track-section lab"><h4>🧪 4. God-Mode Lab</h4><p><strong>Mission:</strong> The pipeline has stalled. Isolate the errant data frame.</p></div></div>`,
        task: {
            type: 'find-value',
            targetColumn: 'anomaly',
            condition: (val) => val === 'True',
            successMessage: "System Override Successful. Node unlocked. +100 XP.",
            errorMessage: "Find the True anomaly flag."
        },
        data: [
          {
                    "key": "Patient_XYZ",
                    "vitals": "Stable",
                    "heart_rate": "72",
                    "anomaly": "False"
          },
          {
                    "key": "Patient_ABC",
                    "vitals": "Unstable",
                    "heart_rate": "145",
                    "anomaly": "True"
          },
          {
                    "key": "Patient_LMN",
                    "vitals": "Stable",
                    "heart_rate": "65",
                    "anomaly": "False"
          },
          {
                    "key": "Patient_QRS",
                    "vitals": "Stable",
                    "heart_rate": "80",
                    "anomaly": "False"
          }
]
    },
    {
        id: 'lesson-w49-d5',
        title: 'AI Ethics - Part 5',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/zOjov-2OZ0E?si=premium_mode',
        sources: [
            { title: 'Official Documentation', url: 'https://developer.mozilla.org/' },
            { title: 'Architect Archives', url: '#' }
        ],
        story: `<div class="quad-track"><div class="track-section tech"><h4>💻 1. Algorithmic Processing</h4><p>This module focuses on high-speed data parsing. Time Complexity (Big O) prevents server timeouts.</p></div><div class="track-section health"><h4>🏥 2. Clinical Data Streams</h4><p>Hospitals generate terabytes of telemetry hourly. Structuring this raw byte data is critical.</p></div><div class="track-section bio"><h4>🧬 3. Evolutionary Algorithms</h4><p>Algorithms evolve through mutation and selection. Structure ML pipelines to adapt dynamically.</p></div><div class="track-section lab"><h4>🧪 4. God-Mode Lab</h4><p><strong>Mission:</strong> The pipeline has stalled. Isolate the errant data frame.</p></div></div>`,
        task: {
            type: 'find-value',
            targetColumn: 'status',
            condition: (val) => val === 'CRITICAL',
            successMessage: "System Override Successful. Node unlocked. +100 XP.",
            errorMessage: "Locate the CRITICAL status node."
        },
        data: [
          {
                    "id": 7071,
                    "value": "Alpha_Node",
                    "metric": "0.45",
                    "status": "Active"
          },
          {
                    "id": 1877,
                    "value": "Beta_Node",
                    "metric": "0.89",
                    "status": "Active"
          },
          {
                    "id": 9976,
                    "value": "Omega_Node",
                    "metric": "0.01",
                    "status": "CRITICAL"
          },
          {
                    "id": 6465,
                    "value": "Zeta_Node",
                    "metric": "1.00",
                    "status": "Active"
          }
]
    },
    {
        id: 'lesson-w49-d6',
        title: 'AI Ethics - Part 6',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/rpkpK_n2ad0?si=premium_mode',
        sources: [
            { title: 'Official Documentation', url: 'https://developer.mozilla.org/' },
            { title: 'Architect Archives', url: '#' }
        ],
        story: `<div class="quad-track"><div class="track-section tech"><h4>💻 1. Core Mechanics</h4><p>Mastering this concept requires understanding the underlying synthetic logic. In enterprise computing, this is the foundational bedrock.</p></div><div class="track-section health"><h4>🏥 2. Bio-Systems</h4><p>Data science in healthcare relies on absolute precision. We apply this logic to sequence genomic arrays.</p></div><div class="track-section bio"><h4>🧬 3. Neural Architecture</h4><p>Information must flow efficiently like a biological synapse. Optimize your code.</p></div><div class="track-section lab"><h4>🧪 4. God-Mode Lab</h4><p><strong>Mission:</strong> Locate the critical node anomaly to restore integrity.</p></div></div>`,
        task: {
            type: 'find-value',
            targetColumn: 'status',
            condition: (val) => val === 'CRITICAL',
            successMessage: "System Override Successful. Node unlocked. +100 XP.",
            errorMessage: "Locate the CRITICAL status node."
        },
        data: [
          {
                    "id": 9418,
                    "value": "Alpha_Node",
                    "metric": "0.45",
                    "status": "Active"
          },
          {
                    "id": 4405,
                    "value": "Beta_Node",
                    "metric": "0.89",
                    "status": "Active"
          },
          {
                    "id": 8265,
                    "value": "Omega_Node",
                    "metric": "0.01",
                    "status": "CRITICAL"
          },
          {
                    "id": 5260,
                    "value": "Zeta_Node",
                    "metric": "1.00",
                    "status": "Active"
          }
]
    },
    {
        id: 'lesson-w49-d7',
        title: 'Weekly Concept Review',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/aircAruvnKk?si=premium_mode',
        sources: [
            { title: 'Official Documentation', url: 'https://developer.mozilla.org/' },
            { title: 'Architect Archives', url: '#' }
        ],
        story: `<div class="quad-track"><div class="track-section tech"><h4>💻 1. Algorithmic Processing</h4><p>This module focuses on high-speed data parsing. Time Complexity (Big O) prevents server timeouts.</p></div><div class="track-section health"><h4>🏥 2. Clinical Data Streams</h4><p>Hospitals generate terabytes of telemetry hourly. Structuring this raw byte data is critical.</p></div><div class="track-section bio"><h4>🧬 3. Evolutionary Algorithms</h4><p>Algorithms evolve through mutation and selection. Structure ML pipelines to adapt dynamically.</p></div><div class="track-section lab"><h4>🧪 4. God-Mode Lab</h4><p><strong>Mission:</strong> The pipeline has stalled. Isolate the errant data frame.</p></div></div>`,
        task: {
            type: 'find-value',
            targetColumn: 'status',
            condition: (val) => val === 'CRITICAL',
            successMessage: "System Override Successful. Node unlocked. +100 XP.",
            errorMessage: "Locate the CRITICAL status node."
        },
        data: [
          {
                    "id": 3922,
                    "value": "Alpha_Node",
                    "metric": "0.45",
                    "status": "Active"
          },
          {
                    "id": 5176,
                    "value": "Beta_Node",
                    "metric": "0.89",
                    "status": "Active"
          },
          {
                    "id": 6450,
                    "value": "Omega_Node",
                    "metric": "0.01",
                    "status": "CRITICAL"
          },
          {
                    "id": 4130,
                    "value": "Zeta_Node",
                    "metric": "1.00",
                    "status": "Active"
          }
]
    },
    {
        id: 'lesson-w50-d1',
        title: 'Final Project: Planning - Part 1',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/HcqpanDadyQ?si=premium_mode',
        sources: [
            { title: 'Official Documentation', url: 'https://developer.mozilla.org/' },
            { title: 'Architect Archives', url: '#' }
        ],
        story: `<div class="quad-track"><div class="track-section tech"><h4>💻 1. Algorithmic Processing</h4><p>This module focuses on high-speed data parsing. Time Complexity (Big O) prevents server timeouts.</p></div><div class="track-section health"><h4>🏥 2. Clinical Data Streams</h4><p>Hospitals generate terabytes of telemetry hourly. Structuring this raw byte data is critical.</p></div><div class="track-section bio"><h4>🧬 3. Evolutionary Algorithms</h4><p>Algorithms evolve through mutation and selection. Structure ML pipelines to adapt dynamically.</p></div><div class="track-section lab"><h4>🧪 4. God-Mode Lab</h4><p><strong>Mission:</strong> The pipeline has stalled. Isolate the errant data frame.</p></div></div>`,
        task: {
            type: 'find-value',
            targetColumn: 'status',
            condition: (val) => val === 'CRITICAL',
            successMessage: "System Override Successful. Node unlocked. +100 XP.",
            errorMessage: "Locate the CRITICAL status node."
        },
        data: [
          {
                    "id": 6523,
                    "value": "Alpha_Node",
                    "metric": "0.45",
                    "status": "Active"
          },
          {
                    "id": 6562,
                    "value": "Beta_Node",
                    "metric": "0.89",
                    "status": "Active"
          },
          {
                    "id": 7536,
                    "value": "Omega_Node",
                    "metric": "0.01",
                    "status": "CRITICAL"
          },
          {
                    "id": 8789,
                    "value": "Zeta_Node",
                    "metric": "1.00",
                    "status": "Active"
          }
]
    },
    {
        id: 'lesson-w50-d2',
        title: 'Final Project: Planning - Part 2',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/aircAruvnKk?si=premium_mode',
        sources: [
            { title: 'Official Documentation', url: 'https://developer.mozilla.org/' },
            { title: 'Architect Archives', url: '#' }
        ],
        story: `<div class="quad-track"><div class="track-section tech"><h4>💻 1. Algorithmic Processing</h4><p>This module focuses on high-speed data parsing. Time Complexity (Big O) prevents server timeouts.</p></div><div class="track-section health"><h4>🏥 2. Clinical Data Streams</h4><p>Hospitals generate terabytes of telemetry hourly. Structuring this raw byte data is critical.</p></div><div class="track-section bio"><h4>🧬 3. Evolutionary Algorithms</h4><p>Algorithms evolve through mutation and selection. Structure ML pipelines to adapt dynamically.</p></div><div class="track-section lab"><h4>🧪 4. God-Mode Lab</h4><p><strong>Mission:</strong> The pipeline has stalled. Isolate the errant data frame.</p></div></div>`,
        task: {
            type: 'find-value',
            targetColumn: 'status',
            condition: (val) => val === 'CRITICAL',
            successMessage: "System Override Successful. Node unlocked. +100 XP.",
            errorMessage: "Locate the CRITICAL status node."
        },
        data: [
          {
                    "id": 1892,
                    "value": "Alpha_Node",
                    "metric": "0.45",
                    "status": "Active"
          },
          {
                    "id": 3468,
                    "value": "Beta_Node",
                    "metric": "0.89",
                    "status": "Active"
          },
          {
                    "id": 1276,
                    "value": "Omega_Node",
                    "metric": "0.01",
                    "status": "CRITICAL"
          },
          {
                    "id": 7094,
                    "value": "Zeta_Node",
                    "metric": "1.00",
                    "status": "Active"
          }
]
    },
    {
        id: 'lesson-w50-d3',
        title: 'Final Project: Planning - Part 3',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/aircAruvnKk?si=premium_mode',
        sources: [
            { title: 'Official Documentation', url: 'https://developer.mozilla.org/' },
            { title: 'Architect Archives', url: '#' }
        ],
        story: `<div class="quad-track"><div class="track-section tech"><h4>💻 1. Core Mechanics</h4><p>Mastering this concept requires understanding the underlying synthetic logic. In enterprise computing, this is the foundational bedrock.</p></div><div class="track-section health"><h4>🏥 2. Bio-Systems</h4><p>Data science in healthcare relies on absolute precision. We apply this logic to sequence genomic arrays.</p></div><div class="track-section bio"><h4>🧬 3. Neural Architecture</h4><p>Information must flow efficiently like a biological synapse. Optimize your code.</p></div><div class="track-section lab"><h4>🧪 4. God-Mode Lab</h4><p><strong>Mission:</strong> Locate the critical node anomaly to restore integrity.</p></div></div>`,
        task: {
            type: 'find-value',
            targetColumn: 'anomaly',
            condition: (val) => val === 'True',
            successMessage: "System Override Successful. Node unlocked. +100 XP.",
            errorMessage: "Find the True anomaly flag."
        },
        data: [
          {
                    "key": "Patient_XYZ",
                    "vitals": "Stable",
                    "heart_rate": "72",
                    "anomaly": "False"
          },
          {
                    "key": "Patient_ABC",
                    "vitals": "Unstable",
                    "heart_rate": "145",
                    "anomaly": "True"
          },
          {
                    "key": "Patient_LMN",
                    "vitals": "Stable",
                    "heart_rate": "65",
                    "anomaly": "False"
          },
          {
                    "key": "Patient_QRS",
                    "vitals": "Stable",
                    "heart_rate": "80",
                    "anomaly": "False"
          }
]
    },
    {
        id: 'lesson-w50-d4',
        title: 'Final Project: Planning - Part 4',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/aircAruvnKk?si=premium_mode',
        sources: [
            { title: 'Official Documentation', url: 'https://developer.mozilla.org/' },
            { title: 'Architect Archives', url: '#' }
        ],
        story: `<div class="quad-track"><div class="track-section tech"><h4>💻 1. Algorithmic Processing</h4><p>This module focuses on high-speed data parsing. Time Complexity (Big O) prevents server timeouts.</p></div><div class="track-section health"><h4>🏥 2. Clinical Data Streams</h4><p>Hospitals generate terabytes of telemetry hourly. Structuring this raw byte data is critical.</p></div><div class="track-section bio"><h4>🧬 3. Evolutionary Algorithms</h4><p>Algorithms evolve through mutation and selection. Structure ML pipelines to adapt dynamically.</p></div><div class="track-section lab"><h4>🧪 4. God-Mode Lab</h4><p><strong>Mission:</strong> The pipeline has stalled. Isolate the errant data frame.</p></div></div>`,
        task: {
            type: 'find-value',
            targetColumn: 'status',
            condition: (val) => val === 'CRITICAL',
            successMessage: "System Override Successful. Node unlocked. +100 XP.",
            errorMessage: "Locate the CRITICAL status node."
        },
        data: [
          {
                    "id": 6055,
                    "value": "Alpha_Node",
                    "metric": "0.45",
                    "status": "Active"
          },
          {
                    "id": 5476,
                    "value": "Beta_Node",
                    "metric": "0.89",
                    "status": "Active"
          },
          {
                    "id": 8335,
                    "value": "Omega_Node",
                    "metric": "0.01",
                    "status": "CRITICAL"
          },
          {
                    "id": 3481,
                    "value": "Zeta_Node",
                    "metric": "1.00",
                    "status": "Active"
          }
]
    },
    {
        id: 'lesson-w50-d5',
        title: 'Final Project: Planning - Part 5',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/HcqpanDadyQ?si=premium_mode',
        sources: [
            { title: 'Official Documentation', url: 'https://developer.mozilla.org/' },
            { title: 'Architect Archives', url: '#' }
        ],
        story: `<div class="quad-track"><div class="track-section tech"><h4>💻 1. Algorithmic Processing</h4><p>This module focuses on high-speed data parsing. Time Complexity (Big O) prevents server timeouts.</p></div><div class="track-section health"><h4>🏥 2. Clinical Data Streams</h4><p>Hospitals generate terabytes of telemetry hourly. Structuring this raw byte data is critical.</p></div><div class="track-section bio"><h4>🧬 3. Evolutionary Algorithms</h4><p>Algorithms evolve through mutation and selection. Structure ML pipelines to adapt dynamically.</p></div><div class="track-section lab"><h4>🧪 4. God-Mode Lab</h4><p><strong>Mission:</strong> The pipeline has stalled. Isolate the errant data frame.</p></div></div>`,
        task: {
            type: 'find-value',
            targetColumn: 'anomaly',
            condition: (val) => val === 'True',
            successMessage: "System Override Successful. Node unlocked. +100 XP.",
            errorMessage: "Find the True anomaly flag."
        },
        data: [
          {
                    "key": "Patient_XYZ",
                    "vitals": "Stable",
                    "heart_rate": "72",
                    "anomaly": "False"
          },
          {
                    "key": "Patient_ABC",
                    "vitals": "Unstable",
                    "heart_rate": "145",
                    "anomaly": "True"
          },
          {
                    "key": "Patient_LMN",
                    "vitals": "Stable",
                    "heart_rate": "65",
                    "anomaly": "False"
          },
          {
                    "key": "Patient_QRS",
                    "vitals": "Stable",
                    "heart_rate": "80",
                    "anomaly": "False"
          }
]
    },
    {
        id: 'lesson-w50-d6',
        title: 'Final Project: Planning - Part 6',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/aircAruvnKk?si=premium_mode',
        sources: [
            { title: 'Official Documentation', url: 'https://developer.mozilla.org/' },
            { title: 'Architect Archives', url: '#' }
        ],
        story: `<div class="quad-track"><div class="track-section tech"><h4>💻 1. Algorithmic Processing</h4><p>This module focuses on high-speed data parsing. Time Complexity (Big O) prevents server timeouts.</p></div><div class="track-section health"><h4>🏥 2. Clinical Data Streams</h4><p>Hospitals generate terabytes of telemetry hourly. Structuring this raw byte data is critical.</p></div><div class="track-section bio"><h4>🧬 3. Evolutionary Algorithms</h4><p>Algorithms evolve through mutation and selection. Structure ML pipelines to adapt dynamically.</p></div><div class="track-section lab"><h4>🧪 4. God-Mode Lab</h4><p><strong>Mission:</strong> The pipeline has stalled. Isolate the errant data frame.</p></div></div>`,
        task: {
            type: 'find-value',
            targetColumn: 'anomaly',
            condition: (val) => val === 'True',
            successMessage: "System Override Successful. Node unlocked. +100 XP.",
            errorMessage: "Find the True anomaly flag."
        },
        data: [
          {
                    "key": "Patient_XYZ",
                    "vitals": "Stable",
                    "heart_rate": "72",
                    "anomaly": "False"
          },
          {
                    "key": "Patient_ABC",
                    "vitals": "Unstable",
                    "heart_rate": "145",
                    "anomaly": "True"
          },
          {
                    "key": "Patient_LMN",
                    "vitals": "Stable",
                    "heart_rate": "65",
                    "anomaly": "False"
          },
          {
                    "key": "Patient_QRS",
                    "vitals": "Stable",
                    "heart_rate": "80",
                    "anomaly": "False"
          }
]
    },
    {
        id: 'lesson-w50-d7',
        title: 'Weekly Concept Review',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/aircAruvnKk?si=premium_mode',
        sources: [
            { title: 'Official Documentation', url: 'https://developer.mozilla.org/' },
            { title: 'Architect Archives', url: '#' }
        ],
        story: `<div class="quad-track"><div class="track-section tech"><h4>💻 1. Core Mechanics</h4><p>Mastering this concept requires understanding the underlying synthetic logic. In enterprise computing, this is the foundational bedrock.</p></div><div class="track-section health"><h4>🏥 2. Bio-Systems</h4><p>Data science in healthcare relies on absolute precision. We apply this logic to sequence genomic arrays.</p></div><div class="track-section bio"><h4>🧬 3. Neural Architecture</h4><p>Information must flow efficiently like a biological synapse. Optimize your code.</p></div><div class="track-section lab"><h4>🧪 4. God-Mode Lab</h4><p><strong>Mission:</strong> Locate the critical node anomaly to restore integrity.</p></div></div>`,
        task: {
            type: 'find-value',
            targetColumn: 'anomaly',
            condition: (val) => val === 'True',
            successMessage: "System Override Successful. Node unlocked. +100 XP.",
            errorMessage: "Find the True anomaly flag."
        },
        data: [
          {
                    "key": "Patient_XYZ",
                    "vitals": "Stable",
                    "heart_rate": "72",
                    "anomaly": "False"
          },
          {
                    "key": "Patient_ABC",
                    "vitals": "Unstable",
                    "heart_rate": "145",
                    "anomaly": "True"
          },
          {
                    "key": "Patient_LMN",
                    "vitals": "Stable",
                    "heart_rate": "65",
                    "anomaly": "False"
          },
          {
                    "key": "Patient_QRS",
                    "vitals": "Stable",
                    "heart_rate": "80",
                    "anomaly": "False"
          }
]
    },
    {
        id: 'lesson-w51-d1',
        title: 'Final Project: Building - Part 1',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/rpkpK_n2ad0?si=premium_mode',
        sources: [
            { title: 'Official Documentation', url: 'https://developer.mozilla.org/' },
            { title: 'Architect Archives', url: '#' }
        ],
        story: `<div class="quad-track"><div class="track-section tech"><h4>💻 1. Core Mechanics</h4><p>Mastering this concept requires understanding the underlying synthetic logic. In enterprise computing, this is the foundational bedrock.</p></div><div class="track-section health"><h4>🏥 2. Bio-Systems</h4><p>Data science in healthcare relies on absolute precision. We apply this logic to sequence genomic arrays.</p></div><div class="track-section bio"><h4>🧬 3. Neural Architecture</h4><p>Information must flow efficiently like a biological synapse. Optimize your code.</p></div><div class="track-section lab"><h4>🧪 4. God-Mode Lab</h4><p><strong>Mission:</strong> Locate the critical node anomaly to restore integrity.</p></div></div>`,
        task: {
            type: 'find-value',
            targetColumn: 'status',
            condition: (val) => val === 'CRITICAL',
            successMessage: "System Override Successful. Node unlocked. +100 XP.",
            errorMessage: "Locate the CRITICAL status node."
        },
        data: [
          {
                    "id": 4609,
                    "value": "Alpha_Node",
                    "metric": "0.45",
                    "status": "Active"
          },
          {
                    "id": 4728,
                    "value": "Beta_Node",
                    "metric": "0.89",
                    "status": "Active"
          },
          {
                    "id": 5770,
                    "value": "Omega_Node",
                    "metric": "0.01",
                    "status": "CRITICAL"
          },
          {
                    "id": 5034,
                    "value": "Zeta_Node",
                    "metric": "1.00",
                    "status": "Active"
          }
]
    },
    {
        id: 'lesson-w51-d2',
        title: 'Final Project: Building - Part 2',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/zOjov-2OZ0E?si=premium_mode',
        sources: [
            { title: 'Official Documentation', url: 'https://developer.mozilla.org/' },
            { title: 'Architect Archives', url: '#' }
        ],
        story: `<div class="quad-track"><div class="track-section tech"><h4>💻 1. Core Mechanics</h4><p>Mastering this concept requires understanding the underlying synthetic logic. In enterprise computing, this is the foundational bedrock.</p></div><div class="track-section health"><h4>🏥 2. Bio-Systems</h4><p>Data science in healthcare relies on absolute precision. We apply this logic to sequence genomic arrays.</p></div><div class="track-section bio"><h4>🧬 3. Neural Architecture</h4><p>Information must flow efficiently like a biological synapse. Optimize your code.</p></div><div class="track-section lab"><h4>🧪 4. God-Mode Lab</h4><p><strong>Mission:</strong> Locate the critical node anomaly to restore integrity.</p></div></div>`,
        task: {
            type: 'find-value',
            targetColumn: 'status',
            condition: (val) => val === 'CRITICAL',
            successMessage: "System Override Successful. Node unlocked. +100 XP.",
            errorMessage: "Locate the CRITICAL status node."
        },
        data: [
          {
                    "id": 5004,
                    "value": "Alpha_Node",
                    "metric": "0.45",
                    "status": "Active"
          },
          {
                    "id": 4381,
                    "value": "Beta_Node",
                    "metric": "0.89",
                    "status": "Active"
          },
          {
                    "id": 5574,
                    "value": "Omega_Node",
                    "metric": "0.01",
                    "status": "CRITICAL"
          },
          {
                    "id": 4008,
                    "value": "Zeta_Node",
                    "metric": "1.00",
                    "status": "Active"
          }
]
    },
    {
        id: 'lesson-w51-d3',
        title: 'Final Project: Building - Part 3',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/zOjov-2OZ0E?si=premium_mode',
        sources: [
            { title: 'Official Documentation', url: 'https://developer.mozilla.org/' },
            { title: 'Architect Archives', url: '#' }
        ],
        story: `<div class="quad-track"><div class="track-section tech"><h4>💻 1. Algorithmic Processing</h4><p>This module focuses on high-speed data parsing. Time Complexity (Big O) prevents server timeouts.</p></div><div class="track-section health"><h4>🏥 2. Clinical Data Streams</h4><p>Hospitals generate terabytes of telemetry hourly. Structuring this raw byte data is critical.</p></div><div class="track-section bio"><h4>🧬 3. Evolutionary Algorithms</h4><p>Algorithms evolve through mutation and selection. Structure ML pipelines to adapt dynamically.</p></div><div class="track-section lab"><h4>🧪 4. God-Mode Lab</h4><p><strong>Mission:</strong> The pipeline has stalled. Isolate the errant data frame.</p></div></div>`,
        task: {
            type: 'find-value',
            targetColumn: 'anomaly',
            condition: (val) => val === 'True',
            successMessage: "System Override Successful. Node unlocked. +100 XP.",
            errorMessage: "Find the True anomaly flag."
        },
        data: [
          {
                    "key": "Patient_XYZ",
                    "vitals": "Stable",
                    "heart_rate": "72",
                    "anomaly": "False"
          },
          {
                    "key": "Patient_ABC",
                    "vitals": "Unstable",
                    "heart_rate": "145",
                    "anomaly": "True"
          },
          {
                    "key": "Patient_LMN",
                    "vitals": "Stable",
                    "heart_rate": "65",
                    "anomaly": "False"
          },
          {
                    "key": "Patient_QRS",
                    "vitals": "Stable",
                    "heart_rate": "80",
                    "anomaly": "False"
          }
]
    },
    {
        id: 'lesson-w51-d4',
        title: 'Final Project: Building - Part 4',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/zOjov-2OZ0E?si=premium_mode',
        sources: [
            { title: 'Official Documentation', url: 'https://developer.mozilla.org/' },
            { title: 'Architect Archives', url: '#' }
        ],
        story: `<div class="quad-track"><div class="track-section tech"><h4>💻 1. Core Mechanics</h4><p>Mastering this concept requires understanding the underlying synthetic logic. In enterprise computing, this is the foundational bedrock.</p></div><div class="track-section health"><h4>🏥 2. Bio-Systems</h4><p>Data science in healthcare relies on absolute precision. We apply this logic to sequence genomic arrays.</p></div><div class="track-section bio"><h4>🧬 3. Neural Architecture</h4><p>Information must flow efficiently like a biological synapse. Optimize your code.</p></div><div class="track-section lab"><h4>🧪 4. God-Mode Lab</h4><p><strong>Mission:</strong> Locate the critical node anomaly to restore integrity.</p></div></div>`,
        task: {
            type: 'find-value',
            targetColumn: 'status',
            condition: (val) => val === 'CRITICAL',
            successMessage: "System Override Successful. Node unlocked. +100 XP.",
            errorMessage: "Locate the CRITICAL status node."
        },
        data: [
          {
                    "id": 4827,
                    "value": "Alpha_Node",
                    "metric": "0.45",
                    "status": "Active"
          },
          {
                    "id": 5905,
                    "value": "Beta_Node",
                    "metric": "0.89",
                    "status": "Active"
          },
          {
                    "id": 4604,
                    "value": "Omega_Node",
                    "metric": "0.01",
                    "status": "CRITICAL"
          },
          {
                    "id": 6825,
                    "value": "Zeta_Node",
                    "metric": "1.00",
                    "status": "Active"
          }
]
    },
    {
        id: 'lesson-w51-d5',
        title: 'Final Project: Building - Part 5',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/rpkpK_n2ad0?si=premium_mode',
        sources: [
            { title: 'Official Documentation', url: 'https://developer.mozilla.org/' },
            { title: 'Architect Archives', url: '#' }
        ],
        story: `<div class="quad-track"><div class="track-section tech"><h4>💻 1. Core Mechanics</h4><p>Mastering this concept requires understanding the underlying synthetic logic. In enterprise computing, this is the foundational bedrock.</p></div><div class="track-section health"><h4>🏥 2. Bio-Systems</h4><p>Data science in healthcare relies on absolute precision. We apply this logic to sequence genomic arrays.</p></div><div class="track-section bio"><h4>🧬 3. Neural Architecture</h4><p>Information must flow efficiently like a biological synapse. Optimize your code.</p></div><div class="track-section lab"><h4>🧪 4. God-Mode Lab</h4><p><strong>Mission:</strong> Locate the critical node anomaly to restore integrity.</p></div></div>`,
        task: {
            type: 'find-value',
            targetColumn: 'status',
            condition: (val) => val === 'CRITICAL',
            successMessage: "System Override Successful. Node unlocked. +100 XP.",
            errorMessage: "Locate the CRITICAL status node."
        },
        data: [
          {
                    "id": 8073,
                    "value": "Alpha_Node",
                    "metric": "0.45",
                    "status": "Active"
          },
          {
                    "id": 9455,
                    "value": "Beta_Node",
                    "metric": "0.89",
                    "status": "Active"
          },
          {
                    "id": 4556,
                    "value": "Omega_Node",
                    "metric": "0.01",
                    "status": "CRITICAL"
          },
          {
                    "id": 2772,
                    "value": "Zeta_Node",
                    "metric": "1.00",
                    "status": "Active"
          }
]
    },
    {
        id: 'lesson-w51-d6',
        title: 'Final Project: Building - Part 6',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/HcqpanDadyQ?si=premium_mode',
        sources: [
            { title: 'Official Documentation', url: 'https://developer.mozilla.org/' },
            { title: 'Architect Archives', url: '#' }
        ],
        story: `<div class="quad-track"><div class="track-section tech"><h4>💻 1. Algorithmic Processing</h4><p>This module focuses on high-speed data parsing. Time Complexity (Big O) prevents server timeouts.</p></div><div class="track-section health"><h4>🏥 2. Clinical Data Streams</h4><p>Hospitals generate terabytes of telemetry hourly. Structuring this raw byte data is critical.</p></div><div class="track-section bio"><h4>🧬 3. Evolutionary Algorithms</h4><p>Algorithms evolve through mutation and selection. Structure ML pipelines to adapt dynamically.</p></div><div class="track-section lab"><h4>🧪 4. God-Mode Lab</h4><p><strong>Mission:</strong> The pipeline has stalled. Isolate the errant data frame.</p></div></div>`,
        task: {
            type: 'find-value',
            targetColumn: 'status',
            condition: (val) => val === 'CRITICAL',
            successMessage: "System Override Successful. Node unlocked. +100 XP.",
            errorMessage: "Locate the CRITICAL status node."
        },
        data: [
          {
                    "id": 2913,
                    "value": "Alpha_Node",
                    "metric": "0.45",
                    "status": "Active"
          },
          {
                    "id": 5269,
                    "value": "Beta_Node",
                    "metric": "0.89",
                    "status": "Active"
          },
          {
                    "id": 3165,
                    "value": "Omega_Node",
                    "metric": "0.01",
                    "status": "CRITICAL"
          },
          {
                    "id": 5155,
                    "value": "Zeta_Node",
                    "metric": "1.00",
                    "status": "Active"
          }
]
    },
    {
        id: 'lesson-w51-d7',
        title: 'Weekly Concept Review',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/zOjov-2OZ0E?si=premium_mode',
        sources: [
            { title: 'Official Documentation', url: 'https://developer.mozilla.org/' },
            { title: 'Architect Archives', url: '#' }
        ],
        story: `<div class="quad-track"><div class="track-section tech"><h4>💻 1. Algorithmic Processing</h4><p>This module focuses on high-speed data parsing. Time Complexity (Big O) prevents server timeouts.</p></div><div class="track-section health"><h4>🏥 2. Clinical Data Streams</h4><p>Hospitals generate terabytes of telemetry hourly. Structuring this raw byte data is critical.</p></div><div class="track-section bio"><h4>🧬 3. Evolutionary Algorithms</h4><p>Algorithms evolve through mutation and selection. Structure ML pipelines to adapt dynamically.</p></div><div class="track-section lab"><h4>🧪 4. God-Mode Lab</h4><p><strong>Mission:</strong> The pipeline has stalled. Isolate the errant data frame.</p></div></div>`,
        task: {
            type: 'find-value',
            targetColumn: 'status',
            condition: (val) => val === 'CRITICAL',
            successMessage: "System Override Successful. Node unlocked. +100 XP.",
            errorMessage: "Locate the CRITICAL status node."
        },
        data: [
          {
                    "id": 7133,
                    "value": "Alpha_Node",
                    "metric": "0.45",
                    "status": "Active"
          },
          {
                    "id": 7230,
                    "value": "Beta_Node",
                    "metric": "0.89",
                    "status": "Active"
          },
          {
                    "id": 6080,
                    "value": "Omega_Node",
                    "metric": "0.01",
                    "status": "CRITICAL"
          },
          {
                    "id": 6201,
                    "value": "Zeta_Node",
                    "metric": "1.00",
                    "status": "Active"
          }
]
    },
    {
        id: 'lesson-w52-d1',
        title: 'Final Project: Graduation - Part 1',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/rpkpK_n2ad0?si=premium_mode',
        sources: [
            { title: 'Official Documentation', url: 'https://developer.mozilla.org/' },
            { title: 'Architect Archives', url: '#' }
        ],
        story: `<div class="quad-track"><div class="track-section tech"><h4>💻 1. Algorithmic Processing</h4><p>This module focuses on high-speed data parsing. Time Complexity (Big O) prevents server timeouts.</p></div><div class="track-section health"><h4>🏥 2. Clinical Data Streams</h4><p>Hospitals generate terabytes of telemetry hourly. Structuring this raw byte data is critical.</p></div><div class="track-section bio"><h4>🧬 3. Evolutionary Algorithms</h4><p>Algorithms evolve through mutation and selection. Structure ML pipelines to adapt dynamically.</p></div><div class="track-section lab"><h4>🧪 4. God-Mode Lab</h4><p><strong>Mission:</strong> The pipeline has stalled. Isolate the errant data frame.</p></div></div>`,
        task: {
            type: 'find-value',
            targetColumn: 'status',
            condition: (val) => val === 'CRITICAL',
            successMessage: "System Override Successful. Node unlocked. +100 XP.",
            errorMessage: "Locate the CRITICAL status node."
        },
        data: [
          {
                    "id": 9200,
                    "value": "Alpha_Node",
                    "metric": "0.45",
                    "status": "Active"
          },
          {
                    "id": 3154,
                    "value": "Beta_Node",
                    "metric": "0.89",
                    "status": "Active"
          },
          {
                    "id": 5998,
                    "value": "Omega_Node",
                    "metric": "0.01",
                    "status": "CRITICAL"
          },
          {
                    "id": 5523,
                    "value": "Zeta_Node",
                    "metric": "1.00",
                    "status": "Active"
          }
]
    },
    {
        id: 'lesson-w52-d2',
        title: 'Final Project: Graduation - Part 2',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/zOjov-2OZ0E?si=premium_mode',
        sources: [
            { title: 'Official Documentation', url: 'https://developer.mozilla.org/' },
            { title: 'Architect Archives', url: '#' }
        ],
        story: `<div class="quad-track"><div class="track-section tech"><h4>💻 1. Core Mechanics</h4><p>Mastering this concept requires understanding the underlying synthetic logic. In enterprise computing, this is the foundational bedrock.</p></div><div class="track-section health"><h4>🏥 2. Bio-Systems</h4><p>Data science in healthcare relies on absolute precision. We apply this logic to sequence genomic arrays.</p></div><div class="track-section bio"><h4>🧬 3. Neural Architecture</h4><p>Information must flow efficiently like a biological synapse. Optimize your code.</p></div><div class="track-section lab"><h4>🧪 4. God-Mode Lab</h4><p><strong>Mission:</strong> Locate the critical node anomaly to restore integrity.</p></div></div>`,
        task: {
            type: 'find-value',
            targetColumn: 'anomaly',
            condition: (val) => val === 'True',
            successMessage: "System Override Successful. Node unlocked. +100 XP.",
            errorMessage: "Find the True anomaly flag."
        },
        data: [
          {
                    "key": "Patient_XYZ",
                    "vitals": "Stable",
                    "heart_rate": "72",
                    "anomaly": "False"
          },
          {
                    "key": "Patient_ABC",
                    "vitals": "Unstable",
                    "heart_rate": "145",
                    "anomaly": "True"
          },
          {
                    "key": "Patient_LMN",
                    "vitals": "Stable",
                    "heart_rate": "65",
                    "anomaly": "False"
          },
          {
                    "key": "Patient_QRS",
                    "vitals": "Stable",
                    "heart_rate": "80",
                    "anomaly": "False"
          }
]
    },
    {
        id: 'lesson-w52-d3',
        title: 'Final Project: Graduation - Part 3',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/rpkpK_n2ad0?si=premium_mode',
        sources: [
            { title: 'Official Documentation', url: 'https://developer.mozilla.org/' },
            { title: 'Architect Archives', url: '#' }
        ],
        story: `<div class="quad-track"><div class="track-section tech"><h4>💻 1. Algorithmic Processing</h4><p>This module focuses on high-speed data parsing. Time Complexity (Big O) prevents server timeouts.</p></div><div class="track-section health"><h4>🏥 2. Clinical Data Streams</h4><p>Hospitals generate terabytes of telemetry hourly. Structuring this raw byte data is critical.</p></div><div class="track-section bio"><h4>🧬 3. Evolutionary Algorithms</h4><p>Algorithms evolve through mutation and selection. Structure ML pipelines to adapt dynamically.</p></div><div class="track-section lab"><h4>🧪 4. God-Mode Lab</h4><p><strong>Mission:</strong> The pipeline has stalled. Isolate the errant data frame.</p></div></div>`,
        task: {
            type: 'find-value',
            targetColumn: 'anomaly',
            condition: (val) => val === 'True',
            successMessage: "System Override Successful. Node unlocked. +100 XP.",
            errorMessage: "Find the True anomaly flag."
        },
        data: [
          {
                    "key": "Patient_XYZ",
                    "vitals": "Stable",
                    "heart_rate": "72",
                    "anomaly": "False"
          },
          {
                    "key": "Patient_ABC",
                    "vitals": "Unstable",
                    "heart_rate": "145",
                    "anomaly": "True"
          },
          {
                    "key": "Patient_LMN",
                    "vitals": "Stable",
                    "heart_rate": "65",
                    "anomaly": "False"
          },
          {
                    "key": "Patient_QRS",
                    "vitals": "Stable",
                    "heart_rate": "80",
                    "anomaly": "False"
          }
]
    },
    {
        id: 'lesson-w52-d4',
        title: 'Final Project: Graduation - Part 4',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/rpkpK_n2ad0?si=premium_mode',
        sources: [
            { title: 'Official Documentation', url: 'https://developer.mozilla.org/' },
            { title: 'Architect Archives', url: '#' }
        ],
        story: `<div class="quad-track"><div class="track-section tech"><h4>💻 1. Algorithmic Processing</h4><p>This module focuses on high-speed data parsing. Time Complexity (Big O) prevents server timeouts.</p></div><div class="track-section health"><h4>🏥 2. Clinical Data Streams</h4><p>Hospitals generate terabytes of telemetry hourly. Structuring this raw byte data is critical.</p></div><div class="track-section bio"><h4>🧬 3. Evolutionary Algorithms</h4><p>Algorithms evolve through mutation and selection. Structure ML pipelines to adapt dynamically.</p></div><div class="track-section lab"><h4>🧪 4. God-Mode Lab</h4><p><strong>Mission:</strong> The pipeline has stalled. Isolate the errant data frame.</p></div></div>`,
        task: {
            type: 'find-value',
            targetColumn: 'anomaly',
            condition: (val) => val === 'True',
            successMessage: "System Override Successful. Node unlocked. +100 XP.",
            errorMessage: "Find the True anomaly flag."
        },
        data: [
          {
                    "key": "Patient_XYZ",
                    "vitals": "Stable",
                    "heart_rate": "72",
                    "anomaly": "False"
          },
          {
                    "key": "Patient_ABC",
                    "vitals": "Unstable",
                    "heart_rate": "145",
                    "anomaly": "True"
          },
          {
                    "key": "Patient_LMN",
                    "vitals": "Stable",
                    "heart_rate": "65",
                    "anomaly": "False"
          },
          {
                    "key": "Patient_QRS",
                    "vitals": "Stable",
                    "heart_rate": "80",
                    "anomaly": "False"
          }
]
    },
    {
        id: 'lesson-w52-d5',
        title: 'Final Project: Graduation - Part 5',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/rpkpK_n2ad0?si=premium_mode',
        sources: [
            { title: 'Official Documentation', url: 'https://developer.mozilla.org/' },
            { title: 'Architect Archives', url: '#' }
        ],
        story: `<div class="quad-track"><div class="track-section tech"><h4>💻 1. Algorithmic Processing</h4><p>This module focuses on high-speed data parsing. Time Complexity (Big O) prevents server timeouts.</p></div><div class="track-section health"><h4>🏥 2. Clinical Data Streams</h4><p>Hospitals generate terabytes of telemetry hourly. Structuring this raw byte data is critical.</p></div><div class="track-section bio"><h4>🧬 3. Evolutionary Algorithms</h4><p>Algorithms evolve through mutation and selection. Structure ML pipelines to adapt dynamically.</p></div><div class="track-section lab"><h4>🧪 4. God-Mode Lab</h4><p><strong>Mission:</strong> The pipeline has stalled. Isolate the errant data frame.</p></div></div>`,
        task: {
            type: 'find-value',
            targetColumn: 'status',
            condition: (val) => val === 'CRITICAL',
            successMessage: "System Override Successful. Node unlocked. +100 XP.",
            errorMessage: "Locate the CRITICAL status node."
        },
        data: [
          {
                    "id": 5928,
                    "value": "Alpha_Node",
                    "metric": "0.45",
                    "status": "Active"
          },
          {
                    "id": 9706,
                    "value": "Beta_Node",
                    "metric": "0.89",
                    "status": "Active"
          },
          {
                    "id": 9338,
                    "value": "Omega_Node",
                    "metric": "0.01",
                    "status": "CRITICAL"
          },
          {
                    "id": 4003,
                    "value": "Zeta_Node",
                    "metric": "1.00",
                    "status": "Active"
          }
]
    },
    {
        id: 'lesson-w52-d6',
        title: 'Final Project: Graduation - Part 6',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/zOjov-2OZ0E?si=premium_mode',
        sources: [
            { title: 'Official Documentation', url: 'https://developer.mozilla.org/' },
            { title: 'Architect Archives', url: '#' }
        ],
        story: `<div class="quad-track"><div class="track-section tech"><h4>💻 1. Core Mechanics</h4><p>Mastering this concept requires understanding the underlying synthetic logic. In enterprise computing, this is the foundational bedrock.</p></div><div class="track-section health"><h4>🏥 2. Bio-Systems</h4><p>Data science in healthcare relies on absolute precision. We apply this logic to sequence genomic arrays.</p></div><div class="track-section bio"><h4>🧬 3. Neural Architecture</h4><p>Information must flow efficiently like a biological synapse. Optimize your code.</p></div><div class="track-section lab"><h4>🧪 4. God-Mode Lab</h4><p><strong>Mission:</strong> Locate the critical node anomaly to restore integrity.</p></div></div>`,
        task: {
            type: 'find-value',
            targetColumn: 'status',
            condition: (val) => val === 'CRITICAL',
            successMessage: "System Override Successful. Node unlocked. +100 XP.",
            errorMessage: "Locate the CRITICAL status node."
        },
        data: [
          {
                    "id": 5378,
                    "value": "Alpha_Node",
                    "metric": "0.45",
                    "status": "Active"
          },
          {
                    "id": 8802,
                    "value": "Beta_Node",
                    "metric": "0.89",
                    "status": "Active"
          },
          {
                    "id": 6211,
                    "value": "Omega_Node",
                    "metric": "0.01",
                    "status": "CRITICAL"
          },
          {
                    "id": 4504,
                    "value": "Zeta_Node",
                    "metric": "1.00",
                    "status": "Active"
          }
]
    },
    {
        id: 'lesson-w52-d7',
        title: 'Weekly Concept Review',
        image: 'assets/lesson_matrix.png',
        video: 'https://www.youtube.com/embed/HcqpanDadyQ?si=premium_mode',
        sources: [
            { title: 'Official Documentation', url: 'https://developer.mozilla.org/' },
            { title: 'Architect Archives', url: '#' }
        ],
        story: `<div class="quad-track"><div class="track-section tech"><h4>💻 1. Core Mechanics</h4><p>Mastering this concept requires understanding the underlying synthetic logic. In enterprise computing, this is the foundational bedrock.</p></div><div class="track-section health"><h4>🏥 2. Bio-Systems</h4><p>Data science in healthcare relies on absolute precision. We apply this logic to sequence genomic arrays.</p></div><div class="track-section bio"><h4>🧬 3. Neural Architecture</h4><p>Information must flow efficiently like a biological synapse. Optimize your code.</p></div><div class="track-section lab"><h4>🧪 4. God-Mode Lab</h4><p><strong>Mission:</strong> Locate the critical node anomaly to restore integrity.</p></div></div>`,
        task: {
            type: 'find-value',
            targetColumn: 'status',
            condition: (val) => val === 'CRITICAL',
            successMessage: "System Override Successful. Node unlocked. +100 XP.",
            errorMessage: "Locate the CRITICAL status node."
        },
        data: [
          {
                    "id": 9884,
                    "value": "Alpha_Node",
                    "metric": "0.45",
                    "status": "Active"
          },
          {
                    "id": 2610,
                    "value": "Beta_Node",
                    "metric": "0.89",
                    "status": "Active"
          },
          {
                    "id": 8668,
                    "value": "Omega_Node",
                    "metric": "0.01",
                    "status": "CRITICAL"
          },
          {
                    "id": 8769,
                    "value": "Zeta_Node",
                    "metric": "1.00",
                    "status": "Active"
          }
]
    },
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
