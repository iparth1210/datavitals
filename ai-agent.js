// AI AGENT - Intelligent Assistant for DataVitals

class AIAgent {
    constructor() {
        this.name = "DataBot";
        this.personality = "friendly, encouraging, slightly funny";
        this.context = {
            currentLesson: null,
            currentPage: 0,
            userProgress: [],
            lastInteraction: null
        };
        this.isOpen = false;
        this.conversationHistory = [];
    }

    init() {
        this.createUI();
        this.greet();
    }

    createUI() {
        // Create chat container
        const chatHTML = `
            <div class="ai-chat-container" id="ai-chat">
                <div class="ai-chat-header">
                    <div class="ai-avatar">🤖</div>
                    <div class="ai-info">
                        <div class="ai-name">${this.name}</div>
                        <div class="ai-status">Online • Ready to help</div>
                    </div>
                    <button class="ai-close-btn" onclick="aiAgent.toggleChat()">✕</button>
                </div>
                <div class="ai-chat-messages" id="ai-messages"></div>
                <div class="ai-chat-input-area">
                    <button id="voice-btn" onclick="aiAgent.toggleVoice()" title="Speak">🎤</button>
                    <input type="text" id="ai-input" placeholder="Ask me anything..." />
                    <button onclick="aiAgent.sendMessage()" class="ai-send-btn">Send</button>
                </div>
                <div class="ai-suggestions" id="ai-suggestions"></div>
            </div>
            <button class="ai-chat-button" id="ai-btn" onclick="aiAgent.toggleChat()">
                <span class="ai-btn-icon">🤖</span>
                <span class="ai-notification-badge" id="ai-badge">1</span>
            </button>
        `;

        document.body.insertAdjacentHTML('beforeend', chatHTML);

        // Add enter key support
        document.getElementById('ai-input').addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.sendMessage();
        });
    }

    toggleVoice() {
        const btn = document.getElementById('voice-btn');
        if (VOICE_AGENT.isListening) {
            VOICE_AGENT.stopListening();
            btn.classList.remove('listening');
        } else {
            btn.classList.add('listening');
            VOICE_AGENT.startListening(
                (text) => {
                    // On Result
                    document.getElementById('ai-input').value = text;
                    this.sendMessage(true); // true = isVoice
                },
                () => {
                    // On End
                    btn.classList.remove('listening');
                }
            );
        }
    }

    toggleChat() {
        this.isOpen = !this.isOpen;
        const chat = document.getElementById('ai-chat');
        const btn = document.getElementById('ai-btn');
        const badge = document.getElementById('ai-badge');

        if (this.isOpen) {
            chat.classList.add('open');
            btn.classList.add('active');
            badge.style.display = 'none';
            document.getElementById('ai-input').focus();
        } else {
            chat.classList.remove('open');
            btn.classList.remove('active');
            VOICE_AGENT.stopSpeaking(); // Stop talking if closed
        }
    }

    greet() {
        setTimeout(() => {
            this.addMessage('ai', `Hey! 👋 I'm ${this.name}, your learning companion!\n\nI can help you:\n• Navigate lessons\n• Explain concepts\n• Give hints\n• Track your progress\n\nJust ask me anything!`);
            this.showSuggestions(['How do I start?', 'Show my progress', 'What is SQL?']);
        }, 2000);
    }

    addMessage(sender, text) {
        const messagesDiv = document.getElementById('ai-messages');
        const msgHTML = `
            <div class="ai-message ${sender}">
                ${sender === 'ai' ? '<div class="ai-msg-avatar">🤖</div>' : ''}
                <div class="ai-msg-content">${this.formatMessage(text)}</div>
            </div>
        `;
        messagesDiv.insertAdjacentHTML('beforeend', msgHTML);
        messagesDiv.scrollTop = messagesDiv.scrollHeight;

        if (sender === 'ai') {
            this.conversationHistory.push({ role: 'ai', text, timestamp: Date.now() });
        }
    }

    formatMessage(text) {
        // Convert newlines to <br>, support bold, code blocks
        return text
            .split('\n').map(line => {
                // Convert **bold**
                line = line.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
                // Convert `code`
                line = line.replace(/`(.*?)`/g, '<code>$1</code>');
                return line;
            }).join('<br>');
    }

    sendMessage(isVoice = false) {
        const input = document.getElementById('ai-input');
        const message = input.value.trim();

        if (!message) return;

        this.addMessage('user', message);
        input.value = '';

        // Process the message
        setTimeout(() => {
            const response = this.processMessage(message);
            this.addMessage('ai', response);

            if (isVoice) {
                // Strip markdown for speech
                const cleanText = response.replace(/\*\*/g, '').replace(/`/g, '');
                VOICE_AGENT.speak(cleanText);
            }
        }, 500);
    }

    processMessage(message) {
        const msg = message.toLowerCase();

        // GREETINGS
        if (msg.match(/^(hi|hello|hey|sup|yo)/)) {
            return "Hey there! 😊 Ready to learn something awesome today?";
        }

        // HELP WITH NAVIGATION
        if (msg.includes('start') || msg.includes('begin')) {
            return "Great! Here's what you can do:\n\n**• Click 'Start Your Journey'** on the home screen\n**• Choose a week** from the roadmap\n**• Complete lessons** in order\n\nWant me to jump you to Week 1?";
        }

        if (msg.includes('week 1') || msg.includes('first week')) {
            this.executeCommand('goto', 'week-1');
            return "✅ Taking you to Week 1! Let's learn Excel fundamentals!";
        }

        // PROGRESS TRACKING
        if (msg.includes('progress') || msg.includes('how am i doing')) {
            const progress = loadProgress();
            const completed = progress.length;
            const total = 52 * 5; // 52 weeks * 5 days
            const percent = Math.round((completed / total) * 100);
            return `📊 **Your Progress:**\n\n✅ Completed: ${completed} lessons\n🎯 Total: ${total} lessons\n📈 That's ${percent}% done!\n\n${this.getEncouragement(percent)}`;
        }

        // CONCEPT EXPLANATIONS
        if (msg.includes('what is sql') || msg.includes('explain sql')) {
            return "**SQL (Structured Query Language)** 🗄️\n\nIt's the language you use to talk to databases!\n\nThink of it like asking a librarian for specific books. Instead of browsing, you just ask:\n\n`SELECT BookTitle FROM Library WHERE Genre = 'Sci-Fi'`\n\nSQL is used by Google, Facebook, Amazon - basically everyone!";
        }

        if (msg.includes('what is python')) {
            return "**Python** 🐍\n\nThe #1 programming language for data science!\n\nWhy?\n• **Simple syntax** (reads like English)\n• **Powerful libraries** (Pandas, NumPy)\n• **Huge community** (tons of help available)\n\nUsed by Google, Netflix, NASA, and millions of developers!";
        }

        if (msg.includes('excel') && msg.includes('what')) {
            return "**Excel** 📊\n\nA spreadsheet program that's basically a super-powered calculator!\n\n500+ million people use it. It's the #1 tool for:\n• Data analysis\n• Financial modeling\n• Project management\n• Reporting\n\nMaster Excel = $50K-$80K salary potential! 💰";
        }

        // HINTS FOR TASKS
        if (msg.includes('hint') || msg.includes('help') || msg.includes('stuck')) {
            return this.getContextualHint();
        }

        // MOTIVATION
        if (msg.includes('hard') || msg.includes('difficult') || msg.includes('confus')) {
            return "I get it - learning new stuff is tough! 💪\n\nBut remember:\n• **Every expert was once a beginner**\n• **Confusion means you're learning**\n• **You're already ahead** of 99% of people\n\nWant me to explain something specific? Or take a break and come back fresh?";
        }

        if (msg.includes('motivate') || msg.includes('tired')) {
            return "🔥 **YOU GOT THIS!** 🔥\n\nRight now, someone is paying $1000s for a bootcamp to learn what you're learning FOR FREE.\n\nYou're building a $70K+/year skillset, one day at a time.\n\nKeep going! Future You will thank Present You! 🚀";
        }

        // SPECIFIC TOPICS
        if (msg.includes('healthcare') && msg.includes('what')) {
            return "**US Healthcare System** 🏥\n\nIt's complex, but here's the basics:\n\n**3 Players:**\n• **Payer** (Insurance company)\n• **Provider** (Doctor/Hospital)\n• **Patient** (You!)\n\n**The Flow:**\nPatient → Doctor → Claim → Insurance → Payment\n\n80% of healthcare data jobs involve analyzing this process!";
        }

        // COMMANDS
        if (msg.includes('reset') && msg.includes('progress')) {
            return "⚠️ **Warning:** This will erase ALL your progress!\n\nAre you sure? Reply with:\n**'yes reset my progress'** to confirm.";
        }

        if (msg === 'yes reset my progress') {
            localStorage.removeItem('datavitals-progress');
            location.reload();
            return "✅ Progress reset! Starting fresh!";
        }

        if (msg.includes('roadmap') || msg.includes('show me') && msg.includes('week')) {
            renderRoadmap();
            return "✅ Showing you the full roadmap! Pick any unlocked week to start!";
        }

        // JOKES
        if (msg.includes('joke') || msg.includes('funny')) {
            const jokes = [
                "Why do programmers prefer dark mode?\n\nBecause light attracts bugs! 🐛",
                "What's a database admin's favorite pizza?\n\nOne with lots of TABLES! 🍕",
                "Why did the SQL query go to therapy?\n\nIt had too many INNER issues! 😅",
                "How do you comfort a JavaScript bug?\n\nYou console it! 🤣",
                "Why don't Excel users ever get lost?\n\nBecause they always find their way with VLOOKUP! 🗺️"
            ];
            return jokes[Math.floor(Math.random() * jokes.length)];
        }

        // DEFAULT RESPONSE
        return this.getSmartDefault(msg);
    }

    getSmartDefault(msg) {
        const defaults = [
            "Hmm, I'm not sure about that one! 🤔 But I can help with:\n• Lessons & concepts\n• Navigation\n• Your progress\n• Motivation\n\nTry asking something like 'What is SQL?' or 'Show my progress'!",
            "Interesting question! I'm still learning too. 😊\n\nI'm best at:\n• Explaining data concepts\n• Helping you navigate lessons\n• Providing hints\n• Cheering you on!\n\nWhat can I help with?",
            "Good question! While I don't have that info, I can:\n• Guide you through lessons\n• Explain technical concepts\n• Track your progress\n• Keep you motivated!\n\nAsk me about any topic in the curriculum!"
        ];
        return defaults[Math.floor(Math.random() * defaults.length)];
    }

    getContextualHint() {
        // Check if user is on an interactive page
        const feedbackBox = document.getElementById('feedback');
        if (feedbackBox && feedbackBox.textContent.includes('Waiting')) {
            return "👀 **Hint for this challenge:**\n\nLook carefully at the table!\n\nRead the instructions above - they tell you EXACTLY what to find.\n\nClick on the cell that matches the criteria!\n\n🎯 You got this!";
        }

        return "💡 **General Tips:**\n\n1. **Read slowly** - Don't rush!\n2. **Click through** all pages\n3. **Try the interactive** tasks\n4. **Re-read** if confused\n\nNeed help with something specific? Just ask!";
    }

    getEncouragement(percent) {
        if (percent === 0) return "🌱 Every journey starts with a single step!";
        if (percent < 25) return "🔥 Great start! Keep the momentum going!";
        if (percent < 50) return "💪 You're crushing it! Almost halfway!";
        if (percent < 75) return "🚀 Wow! You're on fire! Keep going!";
        if (percent < 100) return "🏆 SO CLOSE! The finish line is in sight!";
        return "🎉 AMAZING! You did it! You're a data master!";
    }

    showSuggestions(suggestions) {
        const sugDiv = document.getElementById('ai-suggestions');
        sugDiv.innerHTML = suggestions.map(s =>
            `<button class="ai-suggestion-btn" onclick="aiAgent.useSuggestion('${s}')">${s}</button>`
        ).join('');
    }

    useSuggestion(text) {
        document.getElementById('ai-input').value = text;
        this.sendMessage();
        document.getElementById('ai-suggestions').innerHTML = '';
    }

    executeCommand(cmd, args) {
        // Execute app commands
        if (cmd === 'goto') {
            if (args.startsWith('week-')) {
                renderWeekView(args);
            }
        }
    }

    updateContext(lesson, page) {
        this.context.currentLesson = lesson;
        this.context.currentPage = page;
        this.context.lastInteraction = Date.now();
    }
}

// Initialize AI Agent
let aiAgent;
document.addEventListener('DOMContentLoaded', () => {
    aiAgent = new AIAgent();
    aiAgent.init();
});
