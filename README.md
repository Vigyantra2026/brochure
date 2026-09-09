# VIGYANTRA 2026 — Silver Jubilee National Technical Symposium

> Celebrating 25 Years of Engineering Excellence, Innovation & Student Distinction.

A premier, high-performance frontend web platform crafted for **VIGYANTRA 2026**, the landmark 25th Silver Jubilee Edition of the National Technical Symposium. Built with a distinctive dark Silver Jubilee aesthetic, obsidian depths, platinum silver typography, electric cyan accents, and jubilee gold highlights.

---

## 🌟 Key Highlights & Features

- **Distinct 25-Year Silver Jubilee Aesthetic**:
  - Deep space obsidian background (`#07070A`, `#0B0D12`, `#111318`)
  - Typography hierarchy featuring classical Google Font **Cinzel** for landmark Jubilee headers and numerals paired with ultra-clean **Inter** for UI, cards, and editorial body text.
  - Interactive Canvas Constellation & Circuit Mesh with mouse proximity reactions, particle drifts, and full `prefers-reduced-motion` compliance.

- **Hero & Key Metrics**:
  - Oversized "25" celebratory Jubilee typography and badge.
  - Live dynamic countdown timer with configurable symposium date.
  - Viewport-animated metrics row: 25th Edition, 08 Flagship Events, ₹1,00,000+ Prize Pool, 1000+ Innovators, 50+ Institutes.
  - Instant action CTAs: *Explore Events*, *Register Now*, and *View Brochure*.

- **8 Flagship Technical Events**:
  1. **01 — CODESTORM**: 24-Hour Full-Stack Hackathon & Product Sprint
  2. **02 — WEBCRAFT**: DevSprint & High-Performance UI/UX Engineering
  3. **03 — NEURALNEXUS**: AI Benchmark & Agentic Reasoning Challenge
  4. **04 — ROBOCLASH**: All-Terrain Obstacle & Deathmatch Combat Colosseum
  5. **05 — CYBERSHIELD**: Jeopardy-Style CTF, Reverse Eng & Defense Gauntlet
  6. **06 — TECHNO QUEST**: Tech ConnecXion Cryptic Trivia & Buzzer Showdown
  7. **07 — INNOVATEX**: Breakthrough Project Expo, Hardware Demos & Ideathon
  8. **08 — CIRCUIT MANIA**: Silicon Circuit Debugging & Tactical LAN Esports

- **Interactive Category Filtering**:
  - Filter by `ALL`, `CODING & SOFTWARE`, `AI & DATA`, `HARDWARE & ROBOTICS`, `CYBERSECURITY`, `PROJECT & INNOVATION`, and `QUIZ`.

- **Comprehensive Event Detail Modals**:
  - Detailed format & round breakdowns (Round 1 Prelims, Round 2 Finals, Round 3 Grand Jury).
  - Rules & protocols, judging criteria, eligibility, and submission requirements.
  - Direct student and faculty coordinator contacts (phone & email).
  - One-click event registration trigger pre-selecting the event.

- **Chronological Symposium Schedule**:
  - Interactive Day 01 / Day 02 tab switcher.
  - Vertical glowing timeline with timestamps, session tags, and hall venues.

- **Hall of Glory (Prizes & Laurels)**:
  - Total ₹1,00,000+ prize pool breakdown.
  - Silver Jubilee Trophies, Certificates of Excellence, Universal Participation Certificates, Special Category Awards, and Incubation Opportunities.

- **Interactive Multi-Step Registration Portal (Frontend Only)**:
  - Step 1: Event Selection with real-time fee and team size metadata.
  - Step 2: Team Name, Institution, City, and dynamic Team Size selector.
  - Step 3: Team Leader credentials + dynamically generated member input fields.
  - Step 4: Comprehensive entry review summary.
  - Step 5: Instant generation of verified demo registration ID (e.g. `VIG26-CS-8F42K`), commemorative digital pass, and printable confirmation card.

- **Digital Brochure Viewer**:
  - Interactive multi-page digital booklet reader (Cover, About & Legacy, Events, Schedule, Prizes, Guidelines & Contact).
  - Page-by-page flip navigation, page indicators, and direct print functionality (`window.print()`).

- **Interactive Accordions**:
  - 11 Rules of the Game accordions (Eligibility, Team Formation, ID card, Submissions, AI tools, Plagiarism, Disqualification, etc.).
  - 12 Frequently Asked Questions with instant collapsible answers.

- **Campus Venue, Directions & System Status**:
  - Campus address, transit guide, Google Map direct link.
  - Technical system status badge in footer: `SYSTEM STATUS: ONLINE | EDITION: 25 | YEAR: 2026`.

---

## 📁 Repository Structure

```
brochure/
├── index.html            # Main semantic HTML5 landing page with SEO & OpenGraph tags
├── README.md             # Documentation and deployment guide
├── .gitignore            # Git configuration
├── css/
│   └── styles.css        # Pure CSS design system, typography, glassmorphism & responsive layouts
├── js/
│   ├── events-data.js    # Centralized event configuration, schedule, prizes & FAQs
│   └── main.js           # Canvas particle engine, countdown, modals, and registration logic
└── assets/               # Media and icon assets
```

---

## 🚀 Quick Start & Local Preview

Because this project is built with standard HTML5, CSS3, and modern JavaScript with zero build dependencies, you can run it immediately without `npm` or `node`.

### Option 1: Python Built-in Server (Recommended)
From the `brochure` folder:
```powershell
python -m http.server 8000
```
Then open [http://localhost:8000](http://localhost:8000) in any web browser.

### Option 2: Direct File Open
Simply double-click `index.html` in your file explorer to open directly in Google Chrome, Microsoft Edge, or Mozilla Firefox.

---

## ⚙️ Centralized Configuration

All event details, prizes, schedules, coordinators, FAQs, and symposium dates are isolated in `js/events-data.js`:
- To adjust the countdown date: modify `SYMPOSIUM_CONFIG.targetDate`.
- To update event rules, team sizes, or coordinator phone numbers: edit the corresponding object in `EVENTS_DATA`.
- To alter Day 1 / Day 2 timings: edit `SCHEDULE_DATA`.

---

## 🌐 Deployment

### Deploying to GitHub Pages
1. Push this repository to your GitHub repository `https://github.com/Vigyantra2026/brochure.git`.
2. In GitHub, go to **Settings** > **Pages**.
3. Under **Build and deployment** > **Source**, choose **Deploy from a branch**.
4. Select `main` branch and `/ (root)`, then click **Save**.
5. Your website will be live at `https://vigyantra2026.github.io/brochure/` in seconds!

### Deploying to Vercel
1. Import repository on [Vercel](https://vercel.com/).
2. Framework Preset: **Other** (Static HTML).
3. Click **Deploy**.

---

© 2026 VIGYANTRA Technical Council. Celebrating 25 Years of Engineering Excellence.
