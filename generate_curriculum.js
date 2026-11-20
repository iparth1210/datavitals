const fs = require('fs');

const ROADMAP_PATH = 'D:/GitHub/digital-os/datavitals/roadmap.js';
const MODULES_PATH = 'D:/GitHub/digital-os/datavitals/modules.js';

// --- TEMPLATES ---
const LORE_TEMPLATES = [
    '<div class="quad-track"><div class="track-section tech"><h4>💻 1. Core Mechanics</h4><p>Mastering this concept requires understanding the underlying synthetic logic. In enterprise computing, this is the foundational bedrock.</p></div><div class="track-section health"><h4>🏢 2. Enterprise Systems</h4><p>Data science in production infrastructure relies on absolute precision. We apply this logic to sequence large-scale datasets.</p></div><div class="track-section bio"><h4>🧬 3. Neural Architecture</h4><p>Information must flow efficiently through computing pipelines. Optimize your code.</p></div><div class="track-section lab"><h4>🧪 4. God-Mode Lab</h4><p><strong>Mission:</strong> Locate the critical node anomaly to restore integrity.</p></div></div>',
    '<div class="quad-track"><div class="track-section tech"><h4>💻 1. Algorithmic Processing</h4><p>This module focuses on high-speed data parsing. Time Complexity (Big O) prevents server timeouts.</p></div><div class="track-section health"><h4>🏢 2. Event Data Streams</h4><p>Distributed clusters generate terabytes of telemetry hourly. Structuring this raw byte data is critical.</p></div><div class="track-section bio"><h4>🧬 3. Evolutionary Algorithms</h4><p>Algorithms evolve through optimization and selection. Structure ML pipelines to adapt dynamically.</p></div><div class="track-section lab"><h4>🧪 4. God-Mode Lab</h4><p><strong>Mission:</strong> The pipeline has stalled. Isolate the errant data frame.</p></div></div>'
];

const VIDEO_URLS = [
    'https://www.youtube.com/embed/zOjov-2OZ0E?si=premium_mode',
    'https://www.youtube.com/embed/aircAruvnKk?si=premium_mode',
    'https://www.youtube.com/embed/rpkpK_n2ad0?si=premium_mode',
    'https://www.youtube.com/embed/HcqpanDadyQ?si=premium_mode'
];

const DATA_TEMPLATES = [
    [
        { id: "{RAND}", value: "Alpha_Node", metric: "0.45", status: "Active" },
        { id: "{RAND}", value: "Beta_Node", metric: "0.89", status: "Active" },
        { id: "{RAND}", value: "Omega_Node", metric: "0.01", status: "CRITICAL" },
        { id: "{RAND}", value: "Zeta_Node", metric: "1.00", status: "Active" }
    ],
    [
        { key: "Node_XYZ", telemetry: "Stable", cpu_load: "72", anomaly: "False" },
        { key: "Node_ABC", telemetry: "Unstable", cpu_load: "145", anomaly: "True" },
        { key: "Node_LMN", telemetry: "Stable", cpu_load: "65", anomaly: "False" },
        { key: "Node_QRS", telemetry: "Stable", cpu_load: "80", anomaly: "False" }
    ]
];

const generateMissingModules = () => {
    console.log("[Neural Link]: Reading Roadmap Structure...");

    // Direct evaluation by stripping consts
    const roadmapRaw = fs.readFileSync(ROADMAP_PATH, 'utf8');
    const window = {}; // Mock window

    // We will evaluate the raw script and grab window.roadmap
    eval(roadmapRaw);
    const roadmap = window.roadmap;

    console.log("[Neural Link]: Found " + roadmap.length + " Weeks in Matrix...");

    console.log("[Neural Link]: Reading Existing Modules...");
    const modulesRaw = fs.readFileSync(MODULES_PATH, 'utf8');
    let modulesArrayString = modulesRaw.substring(modulesRaw.indexOf('['), modulesRaw.lastIndexOf(']') + 1);

    const existingIds = [];
    const idMatches = modulesArrayString.matchAll(/id:\s*'([^']+)'/g);
    for (const match of idMatches) {
        existingIds.push(match[1]);
    }

    console.log("[Neural Link]: Found " + existingIds.length + " Existing Nodes...");

    let newModulesCount = 0;
    let newModulesString = "";

    roadmap.forEach(week => {
        week.days.forEach(day => {
            const lessonId = day.lessonId;
            if (!existingIds.includes(lessonId) && lessonId !== 'placeholder-lesson') {

                const randVideo = VIDEO_URLS[Math.floor(Math.random() * VIDEO_URLS.length)];
                const randLore = LORE_TEMPLATES[Math.floor(Math.random() * LORE_TEMPLATES.length)];

                const dataTemplateIndex = Math.floor(Math.random() * DATA_TEMPLATES.length);
                const dataSet = JSON.parse(JSON.stringify(DATA_TEMPLATES[dataTemplateIndex]));

                // Randomize Data IDs
                dataSet.forEach(row => {
                    Object.keys(row).forEach(k => {
                        if (row[k] === '{RAND}') {
                            row[k] = Math.floor(Math.random() * 9000) + 1000;
                        }
                    });
                });

                let targetColumn = "";
                let conditionStr = "";
                let errorMessage = "";
                if (dataTemplateIndex === 0) {
                    targetColumn = "status";
                    conditionStr = "(val) => val === 'CRITICAL'";
                    errorMessage = "Locate the CRITICAL status node.";
                } else {
                    targetColumn = "anomaly";
                    conditionStr = "(val) => val === 'True'";
                    errorMessage = "Find the True anomaly flag.";
                }

                const moduleObj = `
    {
        id: '${lessonId}',
        title: '${day.title.replace(/'/g, "\\'")}',
        image: 'assets/lesson_matrix.png',
        video: '${randVideo}',
        sources: [
            { title: 'Official Documentation', url: 'https://developer.mozilla.org/' },
            { title: 'Architect Archives', url: '#' }
        ],
        story: \`${randLore}\`,
        task: {
            type: 'find-value',
            targetColumn: '${targetColumn}',
            condition: ${conditionStr},
            successMessage: "System Override Successful. Node unlocked. +100 XP.",
            errorMessage: "${errorMessage}"
        },
        data: ${JSON.stringify(dataSet, null, 12)}
    },`;
                newModulesString += moduleObj;
                newModulesCount++;
            }
        });
    });

    if (newModulesCount > 0) {
        console.log("[Neural Link]: Synthesizing " + newModulesCount + " new data nodes...");

        const insertIndex = modulesRaw.indexOf("// --- GENERIC PLACEHOLDER ---");
        if (insertIndex !== -1) {
            const finalString = modulesRaw.slice(0, insertIndex) +
                "// --- GOD-MODE SYNTHESIZED NODES ---\n" +
                newModulesString + "\n    " +
                modulesRaw.slice(insertIndex);

            fs.writeFileSync(MODULES_PATH, finalString, 'utf8');
            console.log("[Neural Link]: Curriculum Matrix Successfully Upgraded to V7.4.");
        } else {
            console.error("Could not find insertion marker in modules.js");
        }
    } else {
        console.log("[Neural Link]: Curriculum Matrix Already Optimal. No synthesis needed.");
    }
};

generateMissingModules();
