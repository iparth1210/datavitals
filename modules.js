/**
 * 🎓 LESSON CONTENT MASTER MODULES 🎓
 * Complete Zero-to-Hero Data Science & AI Curriculum
 */

window.modules = [
    // --- PHASE 1: BASICS, SPREADSHEETS & APPLIED STATISTICS ---
    {
        id: 'lesson-w1-d1',
        title: 'W1-D1: Hardware & Computing Substrate',
        image: 'assets/lesson_hardware_software.png',
        video: 'https://www.youtube.com/embed/xnyFYiK2rSY?si=premium_mode',
        type: 'data',
        sources: [
            { title: 'Von Neumann Architecture', url: 'https://en.wikipedia.org/wiki/Von_Neumann_architecture' },
            { title: 'CPU vs GPU vs TPU Guide', url: 'https://cloud.google.com/tpu/docs/intro-to-tpu' }
        ],
        code_start: `# Hardware Benchmark Script
cpu_cores = 8
ram_gb = 16
gpu_enabled = True

print(f"System Check: {cpu_cores} Cores | {ram_gb}GB RAM | GPU Active: {gpu_enabled}")
if ram_gb >= 16 and gpu_enabled:
    print("Status: Ready for Deep Learning & Heavy Data Workloads!")
`,
        story: `
            <div class="quad-track">
                <div class="track-section tech">
                    <h4>💻 1. Tech Core: Silicon & Binary Logic</h4>
                    <p>Computing begins at the hardware layer. The <strong>CPU</strong> executes calculations sequentially. <strong>RAM</strong> stores active data in high-speed volatile memory. <strong>GPUs & TPUs</strong> excel at parallel matrix calculations required for AI models.</p>
                </div>
                <div class="track-section health">
                    <h4>🏥 2. Enterprise Systems: Hardware Redundancy</h4>
                    <p>Enterprise cloud servers rely on RAID arrays and redundant power supplies to guarantee 99.999% uptime during emergency surgeries.</p>
                </div>
                <div class="track-section bio">
                    <h4>🧬 3. Bio-Analog: Neural Pathways</h4>
                    <p>Biological brains consist of ~86 billion neurons communicating via bio-electric action potentials, mirroring how transistor gates control digital signals.</p>
                </div>
                <div class="track-section lab">
                    <h4>🧪 4. Lab Protocol: Hardware Inventory Audit</h4>
                    <p><strong>Mission:</strong> Inspect the server inventory table. Identify the component mislabeled as Software.</p>
                </div>
            </div>
        `,
        task: {
            type: 'find-value',
            targetColumn: 'category',
            condition: (val, row) => row.item === 'NVIDIA H100 GPU' && val === 'Software',
            successMessage: "Correct! The NVIDIA H100 is high-performance hardware (GPU accelerator), not software.",
            errorMessage: "Find the physical GPU component incorrectly categorized as Software."
        },
        data: [
            { region: "us-east-1", account: "Stripe Tech", mrr_usd: 18500, rank: 1 },
            { region: "us-east-1", account: "Apex Labs", mrr_usd: 15000, rank: 2 },
            { region: "eu-central-1", account: "FinBank AG", mrr_usd: 22000, rank: 1 }
        ]
    }
];
