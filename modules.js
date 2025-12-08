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
        story: `
            <p><strong>Day 6: Keep it Secret</strong></p>
            <p>In healthcare, <strong>HIPAA</strong> rules mean we must protect patient data.</p>
            <p>Never share passwords. Never leave screens unlocked.</p>
            <p><strong>Task:</strong> Find the password that is <strong>Weak</strong>.</p>
        `,
        task: {
            type: 'find-value',
            targetColumn: 'password',
            condition: (val) => val === '123456',
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

    // --- WEEK 2 PLACEHOLDERS (To be filled later) ---
    {
        id: 'lesson-w2-d1',
        title: 'W2-D1: Spreadsheet Interface',
        story: '<p>Welcome to Excel! Find the cell with value "Start".</p>',
        task: { type: 'find-value', targetColumn: 'val', condition: v => v === 'Start', successMessage: 'Good start!', errorMessage: 'Find "Start"' },
        data: [{ id: 1, val: "Start" }]
    },
    // ... more lessons would go here

    // --- GENERIC PLACEHOLDER ---
    {
        id: 'placeholder-lesson',
        title: 'Coming Soon',
        story: '<p>This lesson is under construction. 🚧</p>',
        task: { type: 'find-value', targetColumn: 'val', condition: v => true, successMessage: 'Done!', errorMessage: '' },
        data: [{ id: 1, val: "Click Me" }]
    }
];
