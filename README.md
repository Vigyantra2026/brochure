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
  - Live dynamic countdown timer with symposium date: 30 October 2026.
  - Viewport-animated metrics row: 25th Edition, 08 Flagship Events, ₹4,00,000 Prize Pool, 1500+ Innovators, 75+ Institutes.
  - Instant action CTAs: *Explore 8 Arenas*, *Register Now*, and *View Brochure*.

- **8 Official Flagship Technical Events (₹50,000 Prize Pool per Arena)**:
  1. **01 — AI Prompt Battle**: Generative AI, LLM Combat & Prompt Engineering (2-4 Members | ₹500 / Team)
  2. **02 — Code Relay**: Synchronized Algorithmic Relay (2-4 Members | ₹500 / Team)
  3. **03 — Hack & Hunt**: Cryptic Challenge, Geocache & Logic Hunt (2-4 Members | ₹500 / Team)
  4. **04 — App Development Challenge**: Rapid Full-Stack & Mobile Sprint (2-4 Members | ₹500 / Team)
  5. **05 — Zerocrypt CTF**: Hands-on Cybersecurity & Flag Capture (2-4 Members | ₹500 / Team)
  6. **06 — Innovation Marathon**: 2-Day Problem Ideation & Prototype Sprint (2-4 Members | ₹500 / Team)
  7. **07 — Green Tech Challenge**: Sustainability & Clean Energy Tech (2-4 Members | ₹500 / Team)
  8. **08 — RoboInnovate**: Autonomous Robotics & Mechatronics (2-4 Members | ₹500 / Team)

- **Interactive Category Filtering**:
  - Filter by `ALL`, `CODING & SOFTWARE`, `AI & DATA`, `HARDWARE & ROBOTICS`, `CYBERSECURITY`, `PROJECT & INNOVATION`, and `PUZZLES & CTF`.

- **Comprehensive Event Detail Modals**:
  - Detailed format & round breakdowns (Stage 1 Prelims, Stage 2 Deep Dive, Stage 3 Grand Finals).
  - Rules & protocols, judging criteria, eligibility (2 to 4 delegates), and submission requirements.
  - Squad specs: 2-4 Cadets per team, ₹500 entry fee per team, and campus venue.
  - One-click squad enrollment pre-selecting the event.

- **Chronological Symposium Schedule**:
  - Interactive Day 01 (Oct 30) / Day 02 (Oct 31) tab switcher.
  - Vertical glowing timeline with timestamps, session tags, and hall venues.

- **Hall of Glory (Prizes & Laurels)**:
  - Total ₹4,00,000 prize pool breakdown across all 8 Arenas (₹30,000 Winners, ₹20,000 Runners-Up).
  - Silver Jubilee Trophies, Medallions, Incubation Seed Grants (₹1,00,000+), and Verified IEEE CS Certificates.

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
