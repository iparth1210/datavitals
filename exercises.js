// Enhanced content with images and exercises
const enhancedContent = {
    exercises: {
        cellReference: {
            type: "click-game",
            prompt: "Click on cell B3!",
            correct: "B3",
            options: ["A1", "B3", "C5", "D2", "A3", "B1"]
        },
        formula: {
            type: "formula-builder",
            prompt: "Build a SUM formula for cells A1 to A5",
            parts: ["=", "SUM", "(", "A1:A5", ")"],
            scrambled: [")", "A1:A5", "SUM", "(", "="]
        },
        dataType: {
            type: "match",
            prompt: "Which of these is a NUMBER?",
            options: ["'123'", "123", "Hello", "=TEXT(A1)"],
            correct: "123"
        }
    },

    images: {
        excel_interface: "C:/Users/pp250/.gemini/antigravity/brain/01b133a3-0b95-408f-a1e4-f23d3a5606e6/excel_interface_diagram_1764821698879.png",
        cell_reference: "C:/Users/pp250/.gemini/antigravity/brain/01b133a3-0b95-408f-a1e4-f23d3a5606e6/cell_reference_diagram_1764821714440.png",
        formula_example: "C:/Users/pp250/.gemini/antigravity/brain/01b133a3-0b95-408f-a1e4-f23d3a5606e6/formula_example_1764821734300.png"
    }
};

// Function to generate exercise HTML
function generateExerciseHTML(exerciseKey) {
    const ex = enhancedContent.exercises[exerciseKey];
    if (!ex) return "";

    if (ex.type === "click-game") {
        return `
            <div class="exercise-panel">
                <h3>🎮 Interactive Challenge</h3>
                <div class="prompt">${ex.prompt}</div>
                <div class="exercise-grid">
                    ${ex.options.map(opt => `
                        <div class="exercise-cell" onclick="checkAnswer('${opt}', '${ex.correct}')">${opt}</div>
                    `).join('')}
                </div>
                <div id="exercise-feedback" class="exercise-feedback" style="display:none;"></div>
            </div>
        `;
    }

    if (ex.type === "match") {
        return `
            <div class="exercise-panel">
                <h3>💡 Quick Quiz</h3>
                <div class="prompt">${ex.prompt}</div>
                <div class="exercise-grid">
                    ${ex.options.map(opt => `
                        <div class="exercise-cell" onclick="checkAnswer('${opt}', '${ex.correct}', this)">${opt}</div>
                    `).join('')}
                </div>
                <div id="exercise-feedback" class="exercise-feedback" style="display:none;"></div>
            </div>
        `;
    }

    return "";
}

// Function to check answers
function checkAnswer(selected, correct, element) {
    const feedback = document.getElementById('exercise-feedback');
    const cells = document.querySelectorAll('.exercise-cell');

    if (selected === correct) {
        if (element) element.classList.add('correct');
        feedback.className = 'exercise-feedback success';
        feedback.textContent = '🎉 Correct! You got it!';
        feedback.style.display = 'block';

        // Award XP for correct answer
        if (typeof GAMIFICATION !== 'undefined') {
            GAMIFICATION.addXP(25);
        }

        // Disable other cells
        cells.forEach(cell => {
            if (cell !== element) cell.style.opacity = '0.5';
            cell.style.pointerEvents = 'none';
        });
    } else {
        if (element) {
            element.classList.add('wrong');
            setTimeout(() => element.classList.remove('wrong'), 500);
        }
        feedback.className = 'exercise-feedback error';
        feedback.textContent = '❌ Try again!';
        feedback.style.display = 'block';
        setTimeout(() => feedback.style.display = 'none', 2000);
    }
}

if (typeof window !== 'undefined') {
    window.enhancedContent = enhancedContent;
    window.generateExerciseHTML = generateExerciseHTML;
    window.checkAnswer = checkAnswer;
}
