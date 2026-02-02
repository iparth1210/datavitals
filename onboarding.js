/**
 * 🕉️ DataVitals Traditional Onboarding
 * Featuring your personalized Gujarati Guide
 * Multi-Language Support: English, Gujarati, Hindi
 */

const Onboarding = {
    userName: localStorage.getItem('datavitals_user_name') || '',
    userLang: localStorage.getItem('datavitals_user_lang') || 'en',
    isTourComplete: localStorage.getItem('datavitals_tour_complete') === 'true',

    translations: {
        en: {
            welcomeTitle: "🙏 Kem Cho! Welcome to DataVitals",
            welcomeBody: "I am your guide on this journey to mastering healthcare intelligence. I follow the true Gujarati tradition of hospitality.",
            welcomeAskName: "Before we begin our 'Yatra' (journey), may I ask for your name?",
            namePlaceholder: "Enter your name",
            continueBtn: "Continue",
            namasteUser: "Namaste, {name}!",
            atithiDevo: "It is an honor to have you here. In our culture, we say 'Athiti Devo Bhava' - the guest is God.",
            shallExplore: "I would like to show you around your new professional workspace. Shall we explore?",
            startTourBtn: "Start Tour",
            skipTourBtn: "Skip for now",
            tourNavHub: "Navigation Hub",
            tourNavHubDesc: "This is where you switch between the Roadmap, Library, and your Stats. All your essentials are here.",
            tourRoadmap: "Your Learning Path",
            tourRoadmapDesc: "Our 52-week curriculum is organized here. Each week builds upon the last in our unique Quad-Track methodology.",
            tourProfile: "Your Identity",
            tourProfileDesc: "Access your profile and sign out here. Your progress is saved automatically as you learn.",
            nextBtn: "Next →",
            finishToast: "Dhanyawad (Thank you), {name}! Your workspace is ready."
        },
        gu: {
            welcomeTitle: "🙏 કેમ છો! ડેટાવાઇટલ્સમાં તમારું સ્વાગત છે",
            welcomeBody: "હેલ્થકેર ઇન્ટેલિજન્સમાં નિપુણતા મેળવવાની આ સફરમાં હું તમારો માર્ગદર્શક છું. હું આતિથ્યની સાચી ગુજરાતી પરંપરાને અનુસરૂં છું.",
            welcomeAskName: "આપણી 'યાત્રા' શરૂ કરતા પહેલા, શું હું તમારું નામ જાણી શકું?",
            namePlaceholder: "તમારું નામ લખો",
            continueBtn: "આગળ વધો",
            namasteUser: "નમસ્તે, {name}!",
            atithiDevo: "તમારું અહીં હોવું એ મારા માટે સન્માનની વાત છે. અમારી સંસ્કૃતિમાં અમે કહીએ છીએ કે 'અતિથિ દેવો ભવ'.",
            shallExplore: "હું તમને તમારા નવા વ્યાવસાયિક કાર્યસ્થળ વિશે બતાવવા માંગુ છું. શું આપણે તે જોઈએ?",
            startTourBtn: "ટૂર શરૂ કરો",
            skipTourBtn: "હમણાં રહેવા દો",
            tourNavHub: "નેવિગેશન હબ",
            tourNavHubDesc: "અહીંથી તમે રોડમેપ, લાઇબ્રેરી અને તમારી વિગતો વચ્ચે બદલી શકો છો. બધી આવશ્યક વસ્તુઓ અહીં છે.",
            tourRoadmap: "તમારો લર્નિંગ પાથ",
            tourRoadmapDesc: "અમારો 52-અઠવાડિયાનો અભ્યાસક્રમ અહીં ગોઠવાયેલ છે. દરેક અઠવાડિયું આગલા અઠવાડિયા પર આધારિત છે.",
            tourProfile: "તમારી ઓળખ",
            tourProfileDesc: "તમારી પ્રોફાઇલ અને સાઇન આઉટ અહીંથી કરો. તમે જેમ જેમ શીખો છો તેમ તમારી પ્રગતિ આપોઆપ સચવાય છે.",
            nextBtn: "આગળ →",
            finishToast: "ધન્નયવાદ, {name}! તમારું કાર્યસ્થળ તૈયાર છે."
        },
        hi: {
            welcomeTitle: "🙏 नमस्ते! डेटावाइटल्स में आपका स्वागत है",
            welcomeBody: "हेल्थकेयर इंटेलिजेंस में महारत हासिल करने की इस यात्रा में मैं आपका मार्गदर्शक हूं। मैं आतिथ्य की सच्ची गुजराती परंपरा का पालन करता हूं।",
            welcomeAskName: "अपनी 'यात्रा' शुरू करने से पहले, क्या मैं आपका नाम जान सकता हूँ?",
            namePlaceholder: "अपना नाम दर्ज करें",
            continueBtn: "आगे बढ़ें",
            namasteUser: "नमस्ते, {name}!",
            atithiDevo: "आपका यहाँ होना मेरे लिए सम्मान की बात है। हमारी संस्कृति में हम कहते हैं 'अतिथि देवो भव' - अतिथि भगवान है।",
            shallExplore: "मैं आपको आपके नए पेशेवर कार्यक्षेत्र के बारे में बताना चाहता हूँ। क्या हम शुरू करें?",
            startTourBtn: "टूर शुरू करें",
            skipTourBtn: "अभी छोड़ें",
            tourNavHub: "नेविगेशन हब",
            tourNavHubDesc: "यह वह जगह है जहाँ आप रोडमैप, लाइब्रेरी और अपने आंकड़ों के बीच स्विच करते हैं। आपकी सभी ज़रूरतें यहाँ हैं।",
            tourRoadmap: "आपका सीखने का पथ",
            tourRoadmapDesc: "हमारा 52-सप्ताह का पाठ्यक्रम यहाँ व्यवस्थित है। प्रत्येक सप्ताह हमारी विशिष्ट क्वाड-ट्रैक पद्धति में पिछले सप्ताह पर आधारित है.",
            tourProfile: "आपकी पहचान",
            tourProfileDesc: "यहाँ से अपनी प्रोफ़ाइल और साइन आउट एक्सेस करें। जैसे-जैसे आप सीखते हैं, आपकी प्रगति अपने आप सहेज ली जाती है।",
            nextBtn: "अगला →",
            finishToast: "धन्यवाद, {name}! आपका कार्यक्षेत्र तैयार है।"
        }
    },

    t(key, params = {}) {
        let text = this.translations[this.userLang][key] || this.translations['en'][key] || key;
        for (const [pKey, pVal] of Object.entries(params)) {
            text = text.replace(`{${pKey}}`, pVal);
        }
        return text;
    },

    init() {
        if (!this.userName) {
            this.showWelcome();
        } else if (!this.isTourComplete) {
            this.startTour();
        }
    },

    showWelcome() {
        const overlay = document.createElement('div');
        overlay.id = 'onboarding-overlay';
        overlay.className = 'onboarding-overlay';

        overlay.innerHTML = `
            <div class="onboarding-card">
                <div class="onboarding-mascot">
                    <img src="assets/gujarati_guide.png" alt="Gujarati Guide">
                </div>
                <div class="onboarding-content">
                    <div class="lang-selector-top">
                        <select onchange="Onboarding.changeLang(this.value)" class="lang-select">
                            <option value="en" ${this.userLang === 'en' ? 'selected' : ''}>English</option>
                            <option value="gu" ${this.userLang === 'gu' ? 'selected' : ''}>ગુજરાતી</option>
                            <option value="hi" ${this.userLang === 'hi' ? 'selected' : ''}>हिन्दी</option>
                        </select>
                    </div>
                    <h2 id="welcome-title">${this.t('welcomeTitle')}</h2>
                    <p id="welcome-body">${this.t('welcomeBody')}</p>
                    <p id="welcome-ask-name">${this.t('welcomeAskName')}</p>
                    <div class="onboarding-input-group">
                        <input type="text" id="onboarding-name-input" placeholder="${this.t('namePlaceholder')}" autofocus>
                        <button onclick="Onboarding.saveName()" class="btn btn-primary" id="continue-btn">${this.t('continueBtn')}</button>
                    </div>
                </div>
            </div>
        `;
        document.body.appendChild(overlay);

        // Add CSS for onboarding
        this.injectStyles();
    },

    changeLang(lang) {
        this.userLang = lang;
        localStorage.setItem('datavitals_user_lang', lang);

        // Update current UI text if welcome is open
        const title = document.getElementById('welcome-title');
        const body = document.getElementById('welcome-body');
        const askName = document.getElementById('welcome-ask-name');
        const nameInput = document.getElementById('onboarding-name-input');
        const btn = document.getElementById('continue-btn');

        if (title) title.innerText = this.t('welcomeTitle');
        if (body) body.innerText = this.t('welcomeBody');
        if (askName) askName.innerText = this.t('welcomeAskName');
        if (nameInput) nameInput.placeholder = this.t('namePlaceholder');
        if (btn) btn.innerText = this.t('continueBtn');

        // Update Chatbot Label
        const botNameLabel = document.getElementById('bot-name-label');
        if (botNameLabel) {
            botNameLabel.innerText = (lang === 'gu' ? "Aura (માર્ગદર્શક)" : lang === 'hi' ? "Aura (मार्गदर्शक)" : "Aura (Guide)");
        }
    },

    saveName() {
        const nameInput = document.getElementById('onboarding-name-input');
        const name = nameInput.value.trim();
        if (name) {
            this.userName = name;
            localStorage.setItem('datavitals_user_name', name);
            this.updateGreeting();
        } else {
            const warning = this.userLang === 'gu' ? "કૃપા કરીને તમારું નામ દાખલ કરો!" : this.userLang === 'hi' ? "कृपया अपना नाम दर्ज करें!" : "Please enter your name!";
            alert(warning);
        }
    },

    updateGreeting() {
        const content = document.querySelector('.onboarding-content');
        content.innerHTML = `
            <h2>${this.t('namasteUser', { name: this.userName })}</h2>
            <p>${this.t('atithiDevo')}</p>
            <p>${this.t('shallExplore')}</p>
            <div class="onboarding-btn-group">
                <button onclick="Onboarding.startTour()" class="btn btn-primary">${this.t('startTourBtn')}</button>
                <button onclick="Onboarding.skipTour()" class="btn btn-secondary">${this.t('skipTourBtn')}</button>
            </div>
        `;
    },

    startTour() {
        const overlay = document.getElementById('onboarding-overlay');
        if (overlay) overlay.remove();

        this.currentStep = 0;
        this.steps = [
            {
                element: '.sidebar',
                title: this.t('tourNavHub'),
                content: this.t('tourNavHubDesc'),
                position: 'right'
            },
            {
                element: '.roadmap-container',
                title: this.t('tourRoadmap'),
                content: this.t('tourRoadmapDesc'),
                position: 'bottom'
            },
            {
                element: '.top-header',
                title: this.t('tourProfile'),
                content: this.t('tourProfileDesc'),
                position: 'bottom'
            }
        ];

        this.showTourStep();
    },

    showTourStep() {
        this.removeTourTip();

        if (this.currentStep >= this.steps.length) {
            this.completeTour();
            return;
        }

        const step = this.steps[this.currentStep];
        const target = document.querySelector(step.element);

        if (!target) {
            this.currentStep++;
            this.showTourStep();
            return;
        }

        const tip = document.createElement('div');
        tip.id = 'tour-tip';
        tip.className = 'tour-tip';

        tip.innerHTML = `
            <div class="tour-tip-header">
                <img src="assets/gujarati_guide.png" class="tour-mini-mascot">
                <span>${step.title}</span>
            </div>
            <div class="tour-tip-content">${step.content}</div>
            <div class="tour-tip-footer">
                <button onclick="Onboarding.nextStep()" class="btn btn-secondary btn-sm">${this.t('nextBtn')}</button>
            </div>
        `;

        document.body.appendChild(tip);
        this.positionTip(target, tip, step.position);
        target.classList.add('tour-highlight');
    },

    nextStep() {
        const prevTarget = document.querySelector(this.steps[this.currentStep].element);
        if (prevTarget) prevTarget.classList.remove('tour-highlight');

        this.currentStep++;
        this.showTourStep();
    },

    positionTip(target, tip, position) {
        const rect = target.getBoundingClientRect();
        let top, left;

        switch (position) {
            case 'right':
                top = rect.top + (rect.height / 2) - (tip.offsetHeight / 2);
                left = rect.right + 20;
                break;
            case 'bottom':
                top = rect.bottom + 20;
                left = rect.left + (rect.width / 2) - (tip.offsetWidth / 2);
                break;
            case 'top':
                top = rect.top - tip.offsetHeight - 20;
                left = rect.left + (rect.width / 2) - (tip.offsetWidth / 2);
                break;
        }

        tip.style.top = `${Math.max(10, top)}px`;
        tip.style.left = `${Math.max(10, left)}px`;
    },

    removeTourTip() {
        const tip = document.getElementById('tour-tip');
        if (tip) tip.remove();
        document.querySelectorAll('.tour-highlight').forEach(el => el.classList.remove('tour-highlight'));
    },

    skipTour() {
        const overlay = document.getElementById('onboarding-overlay');
        if (overlay) overlay.remove();
        this.completeTour();
    },

    completeTour() {
        localStorage.setItem('datavitals_tour_complete', 'true');
        this.isTourComplete = true;
        this.removeTourTip();

        // Final toast from the guide
        if (window.showToast) {
            window.showToast(this.t('finishToast', { name: this.userName }), 'info');
        }
    },

    injectStyles() {
        if (document.getElementById('onboarding-styles')) return;
        const style = document.createElement('style');
        style.id = 'onboarding-styles';
        style.innerHTML = `
            .onboarding-overlay {
                position: fixed; top: 0; left: 0; width: 100%; height: 100%;
                background: rgba(0,0,0,0.85); backdrop-filter: blur(8px);
                z-index: 10000; display: flex; align-items: center; justify-content: center;
                animation: fadeIn 0.5s ease;
            }
            .onboarding-card {
                background: #1e293b; border: 1px solid rgba(94, 234, 212, 0.2);
                border-radius: 20px; width: 90%; max-width: 800px;
                display: flex; overflow: hidden; box-shadow: 0 25px 50px -12px rgba(0,0,0,0.5);
            }
            .onboarding-mascot {
                width: 40%; background: #0f172a; display: flex; align-items: center; justify-content: center;
            }
            .onboarding-mascot img { width: 100%; height: 100%; object-fit: cover; }
            .onboarding-content { padding: 40px; width: 60%; color: white; position: relative; }
            .lang-selector-top { position: absolute; top: 20px; right: 20px; }
            .lang-select { background: #0f172a; color: white; border: 1px solid #334155; border-radius: 4px; padding: 4px 8px; font-size: 0.8rem; cursor: pointer; }
            .onboarding-content h2 { color: var(--accent-cyan); margin-bottom: 20px; font-size: 1.8rem; }
            .onboarding-content p { color: #94a3b8; line-height: 1.6; margin-bottom: 15px; }
            .onboarding-input-group { margin-top: 30px; display: flex; gap: 10px; }
            .onboarding-input-group input {
                flex: 1; background: #0f172a; border: 1px solid #334155;
                border-radius: 8px; padding: 12px; color: white;
            }
            .onboarding-btn-group { margin-top: 30px; display: flex; gap: 15px; }
            
            .tour-tip {
                position: fixed; z-index: 10001; background: #1e293b;
                border: 1px solid var(--accent-cyan); border-radius: 12px;
                padding: 15px; width: 300px; box-shadow: 0 10px 25px rgba(0,0,0,0.4);
                animation: popIn 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
                color: white;
            }
            .tour-tip-header { display: flex; align-items: center; gap: 10px; margin-bottom: 10px; font-weight: 600; color: var(--accent-cyan); }
            .tour-mini-mascot { width: 30px; height: 30px; border-radius: 50%; object-fit: cover; border: 1px solid var(--accent-cyan); }
            .tour-tip-content { font-size: 0.9rem; color: #94a3b8; line-height: 1.4; margin-bottom: 15px; }
            .tour-highlight { position: relative; z-index: 10000 !important; box-shadow: 0 0 0 4px var(--accent-cyan), 0 0 30px rgba(94, 234, 212, 0.5) !important; pointer-events: none; transition: all 0.3s ease; }
            
            @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
            @keyframes popIn { from { transform: scale(0.8); opacity: 0; } to { transform: scale(1); opacity: 1; } }
        `;
        document.head.appendChild(style);
    }
};

window.Onboarding = Onboarding;
