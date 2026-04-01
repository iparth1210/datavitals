/**
 * 🛰️ NEURAL STORAGE HUB v1.0
 * Unified adapter for LocalStorage and Cloud Firestore.
 */

class NeuralStorageHub {
    constructor() {
        this.cloudActive = false;
        this.userId = null;
        this.db = null;
        this.syncQueue = new Map();

        this.init();
    }

    init() {
        if (window.firebase && firebase.apps.length) {
            this.db = firebase.firestore();
            this.listenToAuth();
        }
    }

    listenToAuth() {
        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                this.userId = user.uid;
                this.cloudActive = true;
                console.log("[Neural Storage]: Cloud Link Established.");
                this.pullFromCloud();
            } else {
                this.userId = null;
                this.cloudActive = false;
                console.log("[Neural Storage]: Operating in Local-Only Mode.");
            }
        });
    }

    /**
     * Save data with local-first priority and background cloud sync.
     */
    async save(key, data) {
        // 1. Local Persistence (Immediate)
        localStorage.setItem(key, JSON.stringify(data));

        // 2. Cloud Sync (Background)
        if (this.cloudActive && this.userId) {
            this.syncQueue.set(key, data);
            this.debouncedCloudSync();
        }
    }

    /**
     * Load data from local storage with optional cloud hydration.
     */
    load(key, defaultValue = null) {
        const local = localStorage.getItem(key);
        return local ? JSON.parse(local) : defaultValue;
    }

    debouncedCloudSync() {
        if (this.syncTimeout) clearTimeout(this.syncTimeout);
        this.syncTimeout = setTimeout(() => this.pushToCloud(), 2000);
    }

    async pushToCloud() {
        if (!this.cloudActive || !this.userId) return;

        console.log("[Neural Storage]: Syncing to Cloud...");
        const batch = this.db.batch();
        const userDoc = this.db.collection('users').doc(this.userId);

        this.syncQueue.forEach((data, key) => {
            batch.set(userDoc, { [key]: data }, { merge: true });
        });

        try {
            await batch.commit();
            console.log("[Neural Storage]: Cloud Sync Successful.");
            this.syncQueue.clear();
        } catch (e) {
            console.error("[Neural Storage]: Cloud Sync Failed:", e);
        }
    }

    async pullFromCloud() {
        if (!this.cloudActive || !this.userId) return;

        try {
            const doc = await this.db.collection('users').doc(this.userId).get();
            if (doc.exists) {
                const cloudData = doc.data();
                console.log("[Neural Storage]: Cloud Data Hydrated.");

                // Merge cloud data into local storage
                Object.keys(cloudData).forEach(key => {
                    localStorage.setItem(key, JSON.stringify(cloudData[key]));
                });

                // Notify systems of update
                window.dispatchEvent(new Event('neural-storage-updated'));
            }
        } catch (e) {
            console.error("[Neural Storage]: Pull Failed:", e);
        }
    }
}

// Global Injector
window.StorageHub = new NeuralStorageHub();
