// specific check for syntax errors
const fs = require('fs');
const path = require('path');

// Mock window and document
global.window = {};
global.document = {
    getElementById: () => ({ classList: { add: () => { }, toggle: () => { } }, remove: () => { } }),
    createElement: () => ({ classList: { add: () => { } }, style: {} }),
    body: { appendChild: () => { } },
    head: { appendChild: () => { } },
    addEventListener: () => { }
};
global.localStorage = {
    getItem: () => "[]",
    setItem: () => { }
};
global.alert = console.log;

function loadFile(filename) {
    try {
        const content = fs.readFileSync(path.join(__dirname, filename), 'utf8');
        eval(content);
        console.log(`✅ ${filename} loaded successfully.`);
    } catch (e) {
        console.error(`❌ ERROR in ${filename}:`, e.message);
        console.error(e.stack);
    }
}

console.log("--- STARTING DEBUG CHECK ---");
loadFile('roadmap.js');
loadFile('modules.js');
loadFile('gamification.js');
// python_engine uses monaco/pyodide which might error in eval if not careful, but let's try
loadFile('python_engine.js');
loadFile('script.js');

console.log("--- DATA CHECK ---");
if (window.modules) {
    console.log(`Modules Count: ${window.modules.length}`);
    // Check for duplicates
    const ids = window.modules.map(m => m.id);
    const duplicates = ids.filter((item, index) => ids.indexOf(item) !== index);
    if (duplicates.length > 0) {
        console.error("❌ Duplicate Module IDs found:", duplicates);
    } else {
        console.log("✅ No duplicate Module IDs.");
    }
} else {
    console.error("❌ window.modules is undefined!");
}
