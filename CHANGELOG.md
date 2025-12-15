# DataVitals Deployment Changelog

## v3.3 - Final Polished Release
**Deployment Status:** ✅ Live at [https://iparth1210.github.io/datavitals/](https://iparth1210.github.io/datavitals/)

### 🚀 Major Upgrades
- **Infinite Content Engine 2.0**: 
  - Dynamic procedural lesson generation for Weeks 2-52.
  - **Phase-Specific Content**:
    - **Weeks 1-8**: Excel & Logic (FreeCodeCamp)
    - **Weeks 9-20**: SQL & Data Viz (FreeCodeCamp)
    - **Weeks 21-32**: Python for Data Science (FreeCodeCamp)
    - **Weeks 33-52**: Neural Networks & AI (3Blue1Brown)
- **Video Reliability System**:
  - Replaced generic loop with 4 distinct educational high-quality videos.
  - Added **"🔗 Open Video in New Tab"** fallback link below every video player.
- **UI/UX Polish**:
  - **Split-Screen Fixed**: 50/50 balanced layout for lessons.
  - **Splash Screen**: Extended to 4 seconds with a centered, animated loading bar.
  - **Gamification**: Fixed missing CSS for XP pills, level-up toasts, and confetti.

### 🛠️ Fixes
- Fixed "Video Unavailable" errors in procedural content.
- Implemented cache-busting (`v=3.3`) to ensure live updates.
- Added GitHub Actions workflow for automated deployment.
