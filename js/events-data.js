/**
 * VIGYANTRA 2026 — Centralized Event & Symposium Configuration
 * SJB Institute of Technology — Silver Jubilee Celebrations (25 Years)
 * Official 8 Flagship Technical Events, ₹4,00,000 Prize Pool
 */

const SYMPOSIUM_CONFIG = {
  institution: "SJB Institute of Technology",
  trust: "Sri Adichunchanagiri Shikshana Trust®",
  invocatory: "|| Jai Sri Gurudev ||",
  status: "An Autonomous Institute under VTU",
  accreditations: "NAAC A+ | NBA | AICTE | ISO | IEEE CS Bengaluru Section",
  edition: "25th Silver Jubilee Edition",
  year: "2026",
  theme: "Ideas Today Solutions Tomorrow",
  tagline: "Skills, Ideas, Impact for a Brighter Tomorrow • 25 Years of Engineering Excellence",
  totalPrizePool: "₹ 4,00,000",
  totalPrizeAmountNumber: 400000,
  campusAddress: "No.67, BGS Health & Education City, Dr. Vishnuvardhan Rd, Kengeri, Bengaluru, Karnataka 560060",
  directionsUrl: "https://maps.google.com/?q=SJB+Institute+of+Technology+Bengaluru",
  targetDate: "2026-10-30T09:00:00+05:30",
  eventDateDisplay: "30 OCTOBER 2026 (FRIDAY)",
  brochurePdfUrl: "#",
  socials: {
    instagram: "https://instagram.com/example_handle",
    linkedin: "https://linkedin.com/company/example_handle",
    youtube: "https://youtube.com/@example_handle",
    github: "https://github.com/Vigyantra2026/brochure"
  }
};

const STATS_DATA = [
  { value: "25", suffix: "th", label: "SILVER JUBILEE EDITION", icon: "award" },
  { value: "08", suffix: "", label: "FLAGSHIP ARENAS", icon: "layers" },
  { value: "400000", prefix: "₹", suffix: "", label: "PRIZE POOL", icon: "trophy", display: "₹ 4,00,000" },
  { value: "1500", suffix: "+", label: "DELEGATES & INNOVATORS", icon: "users" },
  { value: "75", suffix: "+", label: "ACADEMIC INSTITUTIONS", icon: "compass" }
];

/**
 * THE 8 OFFICIAL FLAGSHIP EVENTS FROM THE POSTER
 */
const EVENTS_DATA = [
  {
    id: "ai-prompt-battle",
    number: "01",
    name: "AI Prompt Battle",
    subName: "Generative AI & LLM Combat",
    category: "ai",
    categoryLabel: "AI & PROMPT ENGINEERING",
    shortDescription: "Participants compete to create effective prompts for solving technical and creative problems using AI tools.",
    description: "AI Prompt Battle challenges prompt engineers, AI creators, and problem solvers to push generative intelligence to its frontiers. Harness LLMs, vision models, and reasoning architectures to solve cryptic coding bugs, generate optimal algorithmic pipelines, and create jaw-dropping multimodal outputs under severe token and context constraints.",
    teamSize: "1 - 2 Members",
    minTeam: 1,
    maxTeam: 2,
    registrationFee: "₹200 / Team",
    prizePool: "₹50,000",
    date: "30 October 2026 (10:30 AM - 01:30 PM)",
    venue: "AI & Machine Learning Center of Excellence",
    tags: ["PROMPT", "CREATE", "SOLVE", "INNOVATE"],
    accentColor: "#00f0ff",
    code: "APB",
    iconSvg: `<svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2a4 4 0 0 1 4 4c0 1.95-1.4 3.58-3.25 3.93L13 14h-2l.25-4.07A4.002 4.002 0 0 1 12 2z"/><circle cx="12" cy="18" r="1.5"/><path d="M4 10a8 8 0 0 1 16 0"/><path d="M7 16a6 6 0 0 0 10 0"/></svg>`,
    rounds: [
      {
        roundNumber: "STAGE 01",
        title: "Zero-Shot Problem Decryption",
        duration: "45 Minutes",
        format: "Constrained Token Engineering",
        task: "Formulate ultra-concise system prompts to make an LLM solve edge-case algorithmic puzzles and logic traps with zero hallucinations.",
        scoring: "Prompt Efficiency (35%), Accuracy (45%), Token Minimization (20%)",
        qualification: "Top 12 delegates advance to Stage 02."
      },
      {
        roundNumber: "STAGE 02",
        title: "Multimodal Synthesis Battle",
        duration: "60 Minutes",
        format: "Cross-Modal Pipeline Generation",
        task: "Generate interactive prototypes, technical schematics, and clean code documentation using chained multi-agent prompt flows.",
        scoring: "Creative Fidelity (30%), Technical Precision (40%), Prompt Architecture (30%)",
        qualification: "Top 5 teams advance to the Grand Final Prompt Showdown."
      },
      {
        roundNumber: "STAGE 03",
        title: "Grand AI Jailbreak & Defense Showdown",
        duration: "30 Minutes",
        format: "Live Prompt Arena Defense",
        task: "Compete head-to-head on the main stage: construct guardrail-breaking adversarial queries while defending your agent against opposing strikes.",
        scoring: "Defensive Robustness (50%), Adversarial Penetration (50%)",
        qualification: "Winner and Runner-up declared with ₹50,000 prize share."
      }
    ],
    rules: [
      "All approved LLM tools and Web UI interfaces will be provisioned on dedicated workstation terminals.",
      "Custom pre-saved prompt scripts on external storage devices are strictly prohibited.",
      "Use of automated prompt scraping bots will trigger immediate arena disqualification.",
      "Decisions rendered by the AI Technical Council jury are final and binding."
    ],
    judgingCriteria: [
      "Prompt Clarity, Conciseness & Token Economy (30%)",
      "Correctness & Feasibility of Generated Output (30%)",
      "Adaptability to Dynamic Constraints (25%)",
      "Live Stage Defense & Demonstration (15%)"
    ],
    eligibility: [
      "Open to all enrolled undergraduate and postgraduate students with valid institutional ID cards.",
      "Solo participants or 2-member teams are welcome."
    ],
    submissionRequirements: [
      "Final prompt transcription log sheet",
      "Model output JSON and screen captures",
      "1-page prompt engineering rationalization report"
    ],
    coordinator: {
      faculty: "Prof. Faculty Coordinator",
      facultyContact: "+91 XXXXX XXXXX",
      student: "Student Lead (AI Arena)",
      studentContact: "+91 XXXXX XXXXX",
      email: "example@gmail.com"
    }
  },
  {
    id: "code-relay",
    number: "02",
    name: "Code Relay",
    subName: "Synchronized Algorithmic Relay",
    category: "coding",
    categoryLabel: "CODING & ALGORITHMS",
    shortDescription: "Teams solve a programming problem in stages, with each member continuing from the previous member's code. Number of stagewise outcome is considered for evaluation.",
    description: "Code Relay is the ultimate collaborative programming arena. Like a high-speed track relay, team members pass the keyboard baton at timed intervals. Member 2 must comprehend, refactor, and extend Member 1's architecture without verbal communication during transitions. Stagewise outcomes, clean modularity, and algorithmic efficiency determine victory.",
    teamSize: "2 - 4 Members",
    minTeam: 2,
    maxTeam: 4,
    registrationFee: "₹300 / Team",
    prizePool: "₹50,000",
    date: "30 October 2026 (11:00 AM - 02:30 PM)",
    venue: "Advanced Computing Systems Laboratory",
    tags: ["CODE", "PASS", "SOLVE", "REPEAT"],
    accentColor: "#38bdf8",
    code: "CR",
    iconSvg: `<svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/><circle cx="12" cy="12" r="2"/></svg>`,
    rounds: [
      {
        roundNumber: "STAGE 01",
        title: "Algorithmic Foundation Sprint",
        duration: "40 Minutes (10 mins/member)",
        format: "Sequential Baton Pass",
        task: "Member 1 constructs the core data structures; Member 2 implements core search/traversal algorithms; Member 3 optimizes time complexity; Member 4 writes test suites.",
        scoring: "Test Suite Passing Rate (50%), Clean Modularity (30%), Comment Quality (20%)",
        qualification: "Top 10 teams qualify for the High-Stress Refactor."
      },
      {
        roundNumber: "STAGE 02",
        title: "Blind Refactor & Chaos Injection",
        duration: "45 Minutes",
        format: "Asynchronous Bug Patch Relay",
        task: "Teams receive surprise edge-case failures and injected memory leaks. Each member has 7 minutes on the terminal to diagnose, patch, and execute.",
        scoring: "Bug Recovery (40%), Memory Footprint (30%), Code Readability (30%)",
        qualification: "Top 4 teams qualify for the Grand Relay Sprint."
      },
      {
        roundNumber: "STAGE 03",
        title: "Grand Production-Grade Scale Sprint",
        duration: "30 Minutes",
        format: "Live Arena Projection Relay",
        task: "Build and benchmark a distributed concurrent cache system handling 50k requests/sec. Live baton passes projected on arena screens.",
        scoring: "System Throughput (50%), Architectural Resilience (30%), Teamwork (20%)",
        qualification: "Winner & Runner-Up crowned with ₹50,000 prize pool."
      }
    ],
    rules: [
      "Supported programming languages: C++, Java, Python 3, Go, and Rust.",
      "Zero verbal or digital communication allowed between active coder and waiting members during sprint intervals.",
      "Code comments must be written in-line to facilitate seamless baton handoffs.",
      "Plagiarism checks are automatically enforced via automated AST analyzer."
    ],
    judgingCriteria: [
      "Stagewise Functional Completion & Test Passes (40%)",
      "Algorithmic Time & Space Complexity (30%)",
      "Readability, Modularity & Architectural Integrity (20%)",
      "Relay Transition Efficiency (10%)"
    ],
    eligibility: [
      "Undergraduate and postgraduate students enrolled in recognized universities.",
      "Teams must comprise 2 to 4 registered delegates."
    ],
    submissionRequirements: [
      "Repository commit log showing sequential stage commits",
      "Automated unit test execution report"
    ],
    coordinator: {
      faculty: "Prof. Faculty Coordinator",
      facultyContact: "+91 XXXXX XXXXX",
      student: "Student Lead (Code Relay)",
      studentContact: "+91 XXXXX XXXXX",
      email: "example@gmail.com"
    }
  },
  {
    id: "hack-and-hunt",
    number: "03",
    name: "Hack & Hunt",
    subName: "Cryptic Challenge & Logic Hunt",
    category: "puzzle",
    categoryLabel: "PUZZLES & CRYPTIC HUNT",
    shortDescription: "Participants solve a series of technical clues, coding challenges and logical puzzles to reach the final solution.",
    description: "Hack & Hunt blends cybersecurity cryptography, reverse engineering, geolocation intelligence, and intricate logic puzzles. Teams navigate an encrypted cyber labyrinth where each decrypted cipher unlocks a secret API endpoint, buried hardware token, or campus coordinate leading to the ultimate quantum key.",
    teamSize: "2 - 3 Members",
    minTeam: 2,
    maxTeam: 3,
    registrationFee: "₹250 / Team",
    prizePool: "₹50,000",
    date: "30 October 2026 (11:30 AM - 03:30 PM)",
    venue: "Information Science Arena & Campus Perimeter",
    tags: ["EXPLORE", "ANALYZE", "SOLVE", "WIN"],
    accentColor: "#f59e0b",
    code: "HNH",
    iconSvg: `<svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><path d="M11 8v6"/><path d="M8 11h6"/></svg>`,
    rounds: [
      {
        roundNumber: "LEVEL 01",
        title: "The Digital Cryptogram",
        duration: "60 Minutes",
        format: "Terminal Clue Decryption",
        task: "Crack stenographic image layers, base64/hex ciphers, and inspect web payloads to reveal the hidden entry token.",
        scoring: "Speed of Clue Clearance (60%), Accuracy (40%)",
        qualification: "First 15 teams advance to the Physical-Digital Hunt."
      },
      {
        roundNumber: "LEVEL 02",
        title: "The Geocached Code Matrix",
        duration: "90 Minutes",
        format: "Campus Telemetry & Code Hunt",
        task: "Use decrypted GPS coordinates and technical riddles to locate encrypted NFC/QR nodes across the campus, assembling the master key.",
        scoring: "Checkpoints Reached (50%), Puzzle Solving Speed (50%)",
        qualification: "Top 5 teams qualify for the Vault Terminal."
      },
      {
        roundNumber: "LEVEL 03",
        title: "The Master Vault Protocol",
        duration: "45 Minutes",
        format: "Interactive Logic Hardware Lock",
        task: "Reconstruct an encrypted logic circuit on the master terminal to disarm the vault and secure the grand flag.",
        scoring: "First team to unlock the vault wins the top prize.",
        qualification: "Champion & Runner-up declared with ₹50,000 prize pool."
      }
    ],
    rules: [
      "Any unauthorized tampering with campus infrastructure or network devices is grounds for instant expulsion.",
      "Delegates may utilize any programming language or scripting tools (Python, bash, CyberChef).",
      "Hint penalties: Requesting official clues will deduct 50 points per hint."
    ],
    judgingCriteria: [
      "Milestone Speed & Timestamped Logs (40%)",
      "Analytical & Algorithmic Deductions (35%)",
      "Integrity & Rule Adherence (25%)"
    ],
    eligibility: [
      "All college and university engineering/polytechnic students with valid ID."
    ],
    submissionRequirements: [
      "Digital scoreboard telemetry validation",
      "Master flag submission key"
    ],
    coordinator: {
      faculty: "Prof. Faculty Coordinator",
      facultyContact: "+91 XXXXX XXXXX",
      student: "Student Lead (Hack & Hunt)",
      studentContact: "+91 XXXXX XXXXX",
      email: "example@gmail.com"
    }
  },
  {
    id: "app-development-challenge",
    number: "04",
    name: "App Development Challenge",
    subName: "Rapid Full-Stack & Mobile Sprint",
    category: "app",
    categoryLabel: "APP & WEB ENGINEERING",
    shortDescription: "Teams conceptualize, design and develop a mobile/web application based on a common theme or problem statement.",
    description: "App Development Challenge invites mobile and web architects to transform napkin ideas into high-performance, responsive, and beautiful production-ready applications. Teams receive a theme on symposium morning and have 5 hours to design, develop, test, and pitch an intuitive application that solves real-world societal friction.",
    teamSize: "2 - 4 Members",
    minTeam: 2,
    maxTeam: 4,
    registrationFee: "₹300 / Team",
    prizePool: "₹50,000",
    date: "30 October 2026 (10:00 AM - 04:00 PM)",
    venue: "Software Development & Cloud Computing Center",
    tags: ["IDEAS INTO APPLICATIONS"],
    accentColor: "#10b981",
    code: "ADC",
    iconSvg: `<svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="2"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/><circle cx="12" cy="7" r="1"/></svg>`,
    rounds: [
      {
        roundNumber: "PHASE 01",
        title: "Theme Release & Blueprint Pitch",
        duration: "60 Minutes",
        format: "UI/UX & Architectural Architecture",
        task: "Receive the surprise challenge theme, architect wireframes, schema design, and defend tech stack choice before mentors.",
        scoring: "Product Relevance (35%), UI Design Aesthetic (35%), Technical Feasibility (30%)",
        qualification: "All teams proceed with mentor calibration feedback."
      },
      {
        roundNumber: "PHASE 02",
        title: "Rapid Build Sprint & Deployment",
        duration: "3.5 Hours",
        format: "Intensive Code & Integration Sprint",
        task: "Develop the functional application (Flutter/React Native/React/PWA), integrate responsive APIs, and host a live testing link.",
        scoring: "Feature Completeness (40%), Performance & UX (30%), Code Cleanliness (30%)",
        qualification: "Top 6 teams advance to Live Jury Pitch."
      },
      {
        roundNumber: "PHASE 03",
        title: "Grand Jury Demo & Stress Defense",
        duration: "10 Mins / Team",
        format: "Interactive Demonstration",
        task: "Present live product to industry judges, handle surprise test scenarios, and present business value proposition.",
        scoring: "Innovation (35%), Working Demo (35%), Pitch Clarity (30%)",
        qualification: "Grand Champion and Runner-Up awarded ₹50,000 prize pool."
      }
    ],
    rules: [
      "Any modern tech stack is allowed: Flutter, React Native, Kotlin, Swift, React/Next.js, Vue, Svelte.",
      "Pre-built turnkey commercial templates are strictly prohibited.",
      "App must be accessible via live deployment URL or installable APK test build.",
      "Code must be pushed to a public GitHub repository with active commit logs."
    ],
    judgingCriteria: [
      "Working Functionality & Execution Depth (35%)",
      "UI/UX Design Polish & Responsiveness (30%)",
      "Innovation & Real-World Utility (25%)",
      "Presentation & Architecture Defense (10%)"
    ],
    eligibility: [
      "Open to all undergraduate and graduate college students.",
      "Cross-college teams are fully permitted."
    ],
    submissionRequirements: [
      "Live working web URL or installable mobile package",
      "GitHub repo link with architecture documentation",
      "3-minute product pitch deck"
    ],
    coordinator: {
      faculty: "Prof. Faculty Coordinator",
      facultyContact: "+91 XXXXX XXXXX",
      student: "Student Lead (App Dev)",
      studentContact: "+91 XXXXX XXXXX",
      email: "example@gmail.com"
    }
  },
  {
    id: "zerocrypt-ctf",
    number: "05",
    name: "Zerocrypt CTF",
    subName: "Hands-on Cybersecurity & Flag Capture",
    category: "cybersecurity",
    categoryLabel: "CYBERSECURITY & CTF",
    shortDescription: "Hands-on cybersecurity competition that challenges participants to solve real-world security problems and capture hidden flags.",
    description: "Zerocrypt CTF is an elite hands-on cyber defense and offensive security proving ground. White-hat hackers, security researchers, and cyber cadets compete in a secure sandboxed network to reverse binaries, exploit vulnerable services, crack cryptographic ciphers, and defend critical assets while capturing hidden digital flags.",
    teamSize: "2 - 3 Members",
    minTeam: 2,
    maxTeam: 3,
    registrationFee: "₹250 / Team",
    prizePool: "₹50,000",
    date: "30 October 2026 (10:30 AM - 03:30 PM)",
    venue: "Cyber Defense & Network Security Lab",
    tags: ["THINK", "EXPLOIT", "CAPTURE", "SECURE"],
    accentColor: "#ef4444",
    code: "ZCTF",
    iconSvg: `<svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><rect x="10" y="10" width="4" height="4" rx="1"/></svg>`,
    rounds: [
      {
        roundNumber: "SECTOR 01",
        title: "Reconnaissance & Web Exploitation",
        duration: "90 Minutes",
        format: "Jeopardy-Style CTF Challenges",
        task: "Uncover hidden directories, bypass authentication hurdles, exploit SQLi/SSRF vulnerabilities, and capture initial flags.",
        scoring: "Flags Captured (Dynamic Point Scoring)",
        qualification: "Dynamic leaderboard rankings."
      },
      {
        roundNumber: "SECTOR 02",
        title: "Binary Analysis & Cryptanalysis",
        duration: "90 Minutes",
        format: "Reverse Engineering & Cryptographic Breaks",
        task: "Decompile obfuscated binaries, analyze buffer overflows, factor weak RSA keys, and extract deeply encrypted tokens.",
        scoring: "High-tier challenge points with first-blood bonuses.",
        qualification: "Top 6 teams advance to King of the Hill."
      },
      {
        roundNumber: "SECTOR 03",
        title: "Attack & Defend War Games",
        duration: "60 Minutes",
        format: "Live Network Battle",
        task: "Patch your team's vulnerable service while deploying exploits against rival teams' nodes in real time.",
        scoring: "Uptime Defense Points + Attack Flag Points",
        qualification: "Top team crowned Zerocrypt Champions (₹50,000 prize share)."
      }
    ],
    rules: [
      "Any cyber attacks against symposium scoring infrastructure or external networks will result in instant disqualification and legal escalation.",
      "Denial of Service (DoS/DDoS) attacks against challenge servers are strictly outlawed.",
      "Sharing flags or solution writeups between competing teams is prohibited.",
      "Teams must maintain their own Kali Linux / Parrot OS laptops."
    ],
    judgingCriteria: [
      "Total Validated Flag Score on Official CTF Platform (60%)",
      "First Blood Speed Bonuses (20%)",
      "Integrity & Quality of Exploitation Writeups (20%)"
    ],
    eligibility: [
      "Open to enrolled college students with valid student ID.",
      "Teams of 2 to 3 cadets."
    ],
    submissionRequirements: [
      "Live flag submission via the symposium CTF portal",
      "Brief exploit methodology writeup for top-tier challenges"
    ],
    coordinator: {
      faculty: "Prof. Faculty Coordinator",
      facultyContact: "+91 XXXXX XXXXX",
      student: "Student Lead (Zerocrypt CTF)",
      studentContact: "+91 XXXXX XXXXX",
      email: "example@gmail.com"
    }
  },
  {
    id: "innovation-marathon",
    number: "06",
    name: "Innovation Marathon",
    subName: "Problem Ideation & Prototype Sprint",
    category: "innovation",
    categoryLabel: "INNOVATION & HACKATHON",
    shortDescription: "Teams progress from problem identification to ideation, prototyping, testing and pitching over two days.",
    description: "The Innovation Marathon is the flagship 2-day innovation crucible of Vigyantra 2026. Student innovators tackle grand societal challenges spanning Smart Cities, Healthcare Automation, Fintech Accessibility, and Industry 4.0. Teams ideate, architect hardware/software MVPs, conduct user testing, and pitch before venture capitalists and industry chiefs.",
    teamSize: "2 - 4 Members",
    minTeam: 2,
    maxTeam: 4,
    registrationFee: "₹350 / Team",
    prizePool: "₹50,000",
    date: "30 & 31 October 2026 (Continuous Sprint)",
    venue: "Main Auditorium & Innovation Incubation Cell",
    tags: ["IDEATE", "PROTOTYPE", "TEST", "PITCH"],
    accentColor: "#fbbf24",
    code: "INM",
    iconSvg: `<svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="2"><line x1="9" y1="18" x2="15" y2="18"/><line x1="10" y1="22" x2="14" y2="22"/><path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 0 1 8.91 14"/></svg>`,
    rounds: [
      {
        roundNumber: "DAY 01 - AM",
        title: "Problem Identification & Empathy Pitch",
        duration: "3 Hours",
        format: "Design Thinking Defense",
        task: "Identify a critical societal or technological pain point, perform user research analysis, and present the conceptual blueprint.",
        scoring: "Originality (35%), Market Relevance (35%), Feasibility (30%)",
        qualification: "All teams advance to the 24-hour prototype build."
      },
      {
        roundNumber: "DAY 01 - PM & NIGHT",
        title: "High-Octane MVP Build & Testing",
        duration: "Overnight Sprint",
        format: "Hands-on Hardware/Software Prototyping",
        task: "Engineer the functional working prototype, assemble electrical or software stacks, conduct load and usability tests with mentors.",
        scoring: "Prototype Completeness (40%), Technical Depth (30%), Architecture (30%)",
        qualification: "Top 8 teams qualify for the Grand Investor Showcase."
      },
      {
        roundNumber: "DAY 02",
        title: "Grand Jury Demo & Investor Pitch",
        duration: "15 Mins / Team",
        format: "Stage Demo & Defense",
        task: "Deliver a live working demonstration on stage and pitch to venture partners and faculty convenors.",
        scoring: "Demonstration Success (40%), Commercial Viability (30%), Q&A Defense (30%)",
        qualification: "Winner & Runner-Up receive ₹50,000 prize pool and incubation support."
      }
    ],
    rules: [
      "Solutions can incorporate software, physical hardware, IoT devices, or hybrid models.",
      "Work must be authored and assembled within the official 2-day symposium window.",
      "Mentors will conduct midnight milestones to verify authenticity of development.",
      "Strict prohibition against pre-packaged commercial products."
    ],
    judgingCriteria: [
      "Novelty and Societal Impact (30%)",
      "Functional Completeness of Working MVP (30%)",
      "Technical Complexity & Engineering Rigor (25%)",
      "Pitch Clarity & Market Scalability (15%)"
    ],
    eligibility: [
      "Open to all students from engineering, science, design, and management backgrounds.",
      "Multi-disciplinary teams strongly encouraged."
    ],
    submissionRequirements: [
      "Functional prototype demonstration",
      "Executive summary business pitch deck",
      "GitHub repo or hardware schematics dossier"
    ],
    coordinator: {
      faculty: "Prof. Faculty Coordinator",
      facultyContact: "+91 XXXXX XXXXX",
      student: "Student Lead (Innovation Marathon)",
      studentContact: "+91 XXXXX XXXXX",
      email: "example@gmail.com"
    }
  },
  {
    id: "green-tech-challenge",
    number: "07",
    name: "Green Tech Challenge",
    subName: "Sustainability & Clean Energy Tech",
    category: "greentech",
    categoryLabel: "GREEN TECH & SUSTAINABILITY",
    shortDescription: "Teams develop technology-driven solutions for sustainability, renewable energy, water conservation or waste reduction.",
    description: "The Green Tech Challenge bridges technological innovation and ecological preservation. Delegations engineer tangible, scalable hardware and digital solutions tackling urban heat islands, renewable energy storage, AI-driven smart grid management, automated water conservation, and zero-waste circular economy systems.",
    teamSize: "2 - 3 Members",
    minTeam: 2,
    maxTeam: 3,
    registrationFee: "₹250 / Team",
    prizePool: "₹50,000",
    date: "30 October 2026 (11:00 AM - 04:00 PM)",
    venue: "Sustainable Engineering & IoT Lab",
    tags: ["GREENER IDEAS", "CLEANER TOMORROW"],
    accentColor: "#22c55e",
    code: "GTC",
    iconSvg: `<svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/></svg>`,
    rounds: [
      {
        roundNumber: "STAGE 01",
        title: "Eco-Impact Thesis & Technical Schema",
        duration: "60 Minutes",
        format: "Technical Whitepaper & Presentation",
        task: "Submit lifecycle energy audit and mathematical model proving ecological efficiency and carbon offset viability.",
        scoring: "Ecological Impact (40%), Technical Soundness (35%), Feasibility (25%)",
        qualification: "Top 12 teams advance to Prototype Evaluation."
      },
      {
        roundNumber: "STAGE 02",
        title: "Working Clean-Tech Prototype Demo",
        duration: "2.5 Hours",
        format: "Bench Demonstration",
        task: "Demonstrate your working hardware/software model (e.g., smart sensor arrays, solar telemetry, bio-waste converters).",
        scoring: "Operational Reliability (40%), Energy Efficiency (35%), Cost Viability (25%)",
        qualification: "Top 4 teams qualify for Grand Jury Defense."
      },
      {
        roundNumber: "STAGE 03",
        title: "Scalability & Urban Implementation Pitch",
        duration: "10 Mins / Team",
        format: "Jury Defense",
        task: "Defend municipal or industrial scalability, payback period, and durability under environmental stress.",
        scoring: "Scalability (40%), Defense Quality (35%), Prototype Polish (25%)",
        qualification: "Winners declared with ₹50,000 prize distribution."
      }
    ],
    rules: [
      "Prototypes may utilize microcontrollers (ESP32, Arduino, Raspberry Pi), environmental sensors, or simulation pipelines.",
      "Hazardous chemical reactions or open flames without safety supervisor clearance are prohibited.",
      "Hardware must conform to standard electrical safety protocols."
    ],
    judgingCriteria: [
      "Quantifiable Carbon / Resource Conservation Impact (35%)",
      "Hardware / Software Engineering Precision (30%)",
      "Cost Feasibility and Scalability (20%)",
      "Presentation & Technical Defense (15%)"
    ],
    eligibility: [
      "Open to students from all branches of engineering and environmental sciences."
    ],
    submissionRequirements: [
      "Working prototype or verified simulation model",
      "Life-cycle analysis and bill of materials (BOM)",
      "Technical poster summary"
    ],
    coordinator: {
      faculty: "Prof. Faculty Coordinator",
      facultyContact: "+91 XXXXX XXXXX",
      student: "Student Lead (Green Tech)",
      studentContact: "+91 XXXXX XXXXX",
      email: "example@gmail.com"
    }
  },
  {
    id: "roboinnovate",
    number: "08",
    name: "RoboInnovate",
    subName: "Autonomous Robotics & Mechatronics",
    category: "robotics",
    categoryLabel: "ROBOTICS & MECHATRONICS",
    shortDescription: "Teams from different disciplines collaborate to develop a working robotic solution for a real-world problem.",
    description: "RoboInnovate brings mechanical design, embedded systems, and computer vision together on the battleground of robotics. Interdisciplinary teams construct autonomous or semi-autonomous robotic systems to navigate challenging terrain, perform precision manipulation, and execute dynamic industrial automation tasks under strict time limits.",
    teamSize: "2 - 4 Members",
    minTeam: 2,
    maxTeam: 4,
    registrationFee: "₹350 / Team",
    prizePool: "₹50,000",
    date: "30 October 2026 (10:00 AM - 04:30 PM)",
    venue: "Robotics & Automation Arena (Mechanical Block)",
    tags: ["BUILD", "PROGRAM", "INNOVATE", "AUTOMATE"],
    accentColor: "#06b6d4",
    code: "RBI",
    iconSvg: `<svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 8V4H8"/><rect x="4" y="8" width="16" height="12" rx="2"/><circle cx="9" cy="13" r="1.5"/><circle cx="15" cy="13" r="1.5"/><path d="M9 17h6"/></svg>`,
    rounds: [
      {
        roundNumber: "PHASE 01",
        title: "Chassis Telemetry & Safety Scrutiny",
        duration: "45 Minutes",
        format: "Technical Inspection",
        task: "Bot dimensions (max 40x40x40 cm), weight limits (max 5 kg), and fail-safe power cutoffs verified by technical inspectors.",
        scoring: "Safety Compliance Pass/Fail",
        qualification: "All certified bots clear for Arena Trials."
      },
      {
        roundNumber: "PHASE 02",
        title: "Autonomous Navigation & Obstacle Trial",
        duration: "90 Minutes",
        format: "Time-Attack Obstacle Course",
        task: "Bot must navigate terrain elevation, detect visual markers, and manipulate industrial payload blocks autonomously.",
        scoring: "Navigation Speed (40%), Task Precision (40%), Autonomous Reliability (20%)",
        qualification: "Top 6 bots qualify for the Grand Arena Challenge."
      },
      {
        roundNumber: "PHASE 03",
        title: "Dynamic Industrial Utility Mission",
        duration: "15 Mins / Team",
        format: "Head-to-Head Arena Challenge",
        task: "Bots compete in a simulated factory floor environment executing high-speed pick-and-place, line following, and sorting.",
        scoring: "Throughput Points (50%), Mechanical Stability (30%), Control Logic (20%)",
        qualification: "Champion & Runner-Up awarded ₹50,000 prize share."
      }
    ],
    rules: [
      "Bot weight must not exceed 5.0 kg including on-board battery packs.",
      "Maximum permissible voltage: 24V DC.",
      "Remote control communications must operate on encrypted 2.4GHz or Bluetooth BLE.",
      "Intentional arena destruction or projectile deployment will result in instant disqualification."
    ],
    judgingCriteria: [
      "Autonomous Performance & Path Planning (40%)",
      "Mechanical Build Quality & Robustness (30%)",
      "Task Completion Speed & Precision (20%)",
      "Engineering Design Innovation (10%)"
    ],
    eligibility: [
      "Interdisciplinary teams of 2 to 4 students from any recognized engineering college."
    ],
    submissionRequirements: [
      "Physical working bot demonstration",
      "Circuit schematics and CAD design documentation",
      "Source code for control algorithms (GitHub)"
    ],
    coordinator: {
      faculty: "Prof. Faculty Coordinator",
      facultyContact: "+91 XXXXX XXXXX",
      student: "Student Lead (RoboInnovate)",
      studentContact: "+91 XXXXX XXXXX",
      email: "example@gmail.com"
    }
  }
];

/**
 * SCHEDULE DATA (OCTOBER 30 & 31, 2026)
 */
const SCHEDULE_DATA = {
  day1: {
    date: "Friday, 30 October 2026",
    title: "DAY 01: THE LAUNCH & BATTLE OF MINDS",
    events: [
      {
        time: "08:30 AM - 09:45 AM",
        title: "Delegate Check-in & Security Credential Issuance",
        description: "Verification of College ID cards, issuance of commemorative Silver Jubilee delegate passes and event welcome kits.",
        venue: "Main Campus Reception & Registration Desks",
        tag: "ADMIN"
      },
      {
        time: "10:00 AM - 10:45 AM",
        title: "Grand Inaugural Ceremony & Lamp Lighting",
        description: "Divine invocations, presidential address by Revered Swamijis, keynote by distinguished Chief Guest from Tech Industry, and official unveiling of Vigyantra 2026.",
        venue: "SJB Institute of Technology Main Auditorium",
        tag: "CEREMONY"
      },
      {
        time: "11:00 AM - 02:00 PM",
        title: "Arena Kickoff: Session 1 Competitions",
        description: "Parallel initiation of AI Prompt Battle (Stage 1), Code Relay (Stage 1), Hack & Hunt (Sector 1), and App Development Challenge.",
        venue: "Respective Labs & Center of Excellence",
        tag: "COMPETITION"
      },
      {
        time: "01:00 PM - 02:00 PM",
        title: "Networking Lunch & Cyber Exhibition",
        description: "Complimentary networking luncheon for registered delegates and faculty mentors; showcase of 25-Year SJBIT Innovation Gallery.",
        venue: "Campus Food Court & Quadrangle",
        tag: "NETWORKING"
      },
      {
        time: "02:00 PM - 04:30 PM",
        title: "Arena Climax: Zerocrypt CTF & RoboInnovate Finals",
        description: "High-octane live King of the Hill cybersecurity battles and dynamic autonomous robotics arena course runs.",
        venue: "Cyber Defense Lab & Robotics Arena",
        tag: "FINALS"
      },
      {
        time: "04:30 PM - 05:30 PM",
        title: "Day 1 Stage Debrief & Innovation Marathon Overnight Kickoff",
        description: "Announcement of Day 1 winners for single-day tracks; commencement of overnight sprint for Innovation Marathon.",
        venue: "Main Auditorium",
        tag: "STAGE"
      }
    ]
  },
  day2: {
    date: "Saturday, 31 October 2026",
    title: "DAY 02: GRAND FINALS & VALEDICTORY GALA",
    events: [
      {
        time: "09:00 AM - 11:30 AM",
        title: "Innovation Marathon: Working Prototype Audits",
        description: "Jury walkthrough and inspection of 24-hour prototypes built overnight across hardware, software, and CleanTech domains.",
        venue: "Innovation Incubation Arena",
        tag: "EVALUATION"
      },
      {
        time: "11:30 AM - 01:00 PM",
        title: "Grand Investor & Venture Partner Pitch Showcase",
        description: "Top 8 finalists pitch live on stage before industry leaders, venture investors, and technology evangelists.",
        venue: "Main Auditorium",
        tag: "SHOWCASE"
      },
      {
        time: "01:00 PM - 02:00 PM",
        title: "Silver Jubilee Luncheon",
        description: "Executive banquet celebrating 25 years of engineering excellence with dignitaries and delegates.",
        venue: "Campus Banquet Hall",
        tag: "BANQUET"
      },
      {
        time: "02:30 PM - 04:30 PM",
        title: "Grand Valedictory Ceremony & ₹4,00,000 Prize Distribution",
        description: "Felicitation of winners across all 8 Flagship Arenas, presentation of Silver Jubilee trophies, cash prizes, and closing address.",
        venue: "Main Auditorium",
        tag: "AWARDS"
      },
      {
        time: "04:30 PM - 05:30 PM",
        title: "Cultural Celebration & Symposium Adjournment",
        description: "Electrifying cultural celebrations, commemorative group photo sessions, and certificate distribution.",
        venue: "Open Air Amphitheatre",
        tag: "CELEBRATION"
      }
    ]
  }
};

/**
 * PRIZES DATA (HALL OF GLORY) — Total ₹4,00,000
 */
const PRIZES_DATA = [
  {
    title: "GRAND SYMPOSIUM POOL",
    amount: "₹ 4,00,000",
    subtitle: "Across All 8 Competitive Arenas",
    description: "Honoring pioneering innovation, algorithmic supremacy, cyber defense mastery, and hardware excellence across the Silver Jubilee edition.",
    highlight: true,
    tag: "GRAND POOL"
  },
  {
    title: "PER ARENA ALLOCATION",
    amount: "₹ 50,000",
    subtitle: "Each Flagship Event",
    description: "Every flagship arena awards ₹30,000 to the Champions and ₹20,000 to the Runners-Up alongside custom Silver Jubilee mementos.",
    highlight: false,
    tag: "ARENA PRIZE"
  },
  {
    title: "ARENA CHAMPIONS (x8)",
    amount: "₹ 30,000",
    subtitle: "First Place Glory",
    description: "Awarded to the premier squad in each of the 8 technical arenas + Commemorative Silver Jubilee Trophy + Merit Credentials.",
    highlight: false,
    tag: "1ST PLACE"
  },
  {
    title: "ARENA RUNNERS-UP (x8)",
    amount: "₹ 20,000",
    subtitle: "Second Place Distinction",
    description: "Awarded to the second-place team in each arena + Silver Jubilee Medallion + Certificate of Technical Distinction.",
    highlight: false,
    tag: "2ND PLACE"
  },
  {
    title: "INNOVATION INCUBATION GRANTS",
    amount: "WORTH ₹ 1,00,000+",
    subtitle: "Direct Startup Incubation",
    description: "Exclusive access to SJBIT Incubation Center seed mentorship, cloud credits, patent filing support, and venture network access.",
    highlight: true,
    tag: "GRANTS & CREDITS"
  },
  {
    title: "PARTICIPATION CREDENTIALS",
    amount: "ALL CADETS",
    subtitle: "Verified NFT / Digital Certificate",
    description: "Every registered delegate receives an official, cryptographically verified Certificate of Participation backed by IEEE CS & SJBIT.",
    highlight: false,
    tag: "CERTIFICATES"
  }
];

/**
 * GUIDELINES & PROTOCOLS
 */
const GUIDELINES_DATA = [
  {
    title: "General Code of Conduct & Ethics",
    content: "Vigyantra 2026 upholds the highest standards of integrity, respect, and professionalism. Plagiarism, offensive behavior, unauthorized access to secure networks, or violation of institutional decorum will lead to immediate disqualification and campus debarment."
  },
  {
    title: "Mandatory College Identification & Check-In",
    content: "All participants must carry a valid physical College ID card or institutional Bonafide certificate alongside the digital entry pass issued upon online registration. Cross-college delegations are permitted, but each delegate must verify their individual student status."
  },
  {
    title: "Hardware, Network & Safety Protocols",
    content: "Participants in robotics and hardware events must adhere strictly to voltage specifications (max 24V DC). No open flames or hazardous chemical experiments are permitted. Campus Wi-Fi credentials will be provisioned during morning check-in."
  },
  {
    title: "Intellectual Property & Code Rights",
    content: "All intellectual property, source code, and design prototypes developed during the symposium remain the 100% exclusive property of the respective student teams. Open-source libraries may be used with appropriate licensing attribution."
  },
  {
    title: "Jury Evaluation & Finality of Decisions",
    content: "Scoring rubrics have been established in coordination with industry experts and academic convenors. The decisions rendered by the judging panels and the technical advisory board are final, non-negotiable, and binding."
  }
];

/**
 * FAQ DATA
 */
const FAQ_DATA = [
  {
    q: "Who is eligible to participate in Vigyantra 2026?",
    a: "Any student currently enrolled in an undergraduate or postgraduate program (B.E./B.Tech, M.Tech, MCA, BCA, B.Sc, etc.) at any recognized college or university across India is eligible."
  },
  {
    q: "Can team members be from different colleges?",
    a: "Yes! Cross-college and cross-disciplinary teams are fully permitted and enthusiastically encouraged for all team events."
  },
  {
    q: "Can a participant register for multiple events?",
    a: "Participants may register for multiple events as long as their scheduled timings do not directly clash. Please review the symposium timeline before finalizing registrations."
  },
  {
    q: "What is the total prize pool and how is it distributed?",
    a: "The total prize pool is ₹ 4,00,000 (Four Lakh Rupees), distributed across all 8 Flagship Arenas (₹50,000 per event: ₹30,000 for Winners, ₹20,000 for Runners-Up), plus trophies, incubation credits, and certificates."
  },
  {
    q: "Will food and accommodation be provided?",
    a: "Complimentary lunch and high tea are provided for all registered delegates on October 30. Outstation teams requiring accommodation assistance should contact the organizing committee desk in advance."
  },
  {
    q: "How will certificates and prizes be issued?",
    a: "Cash prizes and trophies will be formally awarded during the Grand Valedictory Ceremony on Day 2. Verified digital certificates will be issued to all participants via registered email addresses."
  }
];

/**
 * RICH DIGITAL BROCHURE PAGES (CRAZY CYBER DOSSIER)
 */
const BROCHURE_PAGES = [
  {
    page: 1,
    title: "Official Cover Dossier",
    content: `
      <div class="brochure-page-hero">
        <div class="brochure-crest-header">
          <div style="font-size:0.8rem; letter-spacing:0.2em; color:var(--cyan); font-weight:700;">|| JAI SRI GURUDEV ||</div>
          <div style="font-size:0.85rem; color:var(--silver-300); margin:4px 0;">Sri Adichunchanagiri Shikshana Trust®</div>
          <h2 style="font-size:1.8rem; color:#ffffff; font-family:var(--font-heading); margin:4px 0; letter-spacing:0.06em;">SJB INSTITUTE OF TECHNOLOGY</h2>
          <div style="font-size:0.75rem; color:var(--cyan-glow-text); letter-spacing:0.12em;">AN AUTONOMOUS INSTITUTE UNDER VTU • NAAC A+ • NBA ACCREDITED</div>
        </div>

        <div class="brochure-silver-badge">
          <div style="font-size:3.5rem; font-weight:900; font-family:var(--font-heading); line-height:1; color:#ffffff; text-shadow:0 0 25px rgba(245,158,11,0.6);">25</div>
          <div style="font-size:0.85rem; font-weight:800; letter-spacing:0.25em; color:var(--gold);">YEARS OF EXCELLENCE</div>
          <div style="font-size:0.7rem; color:var(--silver-400); letter-spacing:0.1em;">SILVER JUBILEE CELEBRATIONS</div>
        </div>

        <div style="margin:24px 0 16px 0;">
          <h1 style="font-size:2.4rem; color:#ffffff; font-family:var(--font-heading); letter-spacing:0.12em; text-shadow:0 0 20px rgba(0,240,255,0.4);">VIGYANTRA 2026</h1>
          <div style="font-size:0.95rem; color:var(--cyan); letter-spacing:0.2em; font-weight:700; margin-top:4px;">NATIONAL TECHNICAL SYMPOSIUM</div>
          <p style="font-size:0.85rem; font-style:italic; color:var(--gold); margin-top:8px;">“Ideas Today Solutions Tomorrow”</p>
        </div>

        <div class="brochure-highlight-box">
          <div style="font-size:0.75rem; font-weight:700; letter-spacing:0.15em; color:var(--silver-300);">COMMEMORATIVE PRIZE POOL</div>
          <div style="font-size:2rem; font-weight:900; font-family:var(--font-heading); color:var(--gold); text-shadow:0 0 20px rgba(245,158,11,0.5);">₹ 4,00,000</div>
          <div style="font-size:0.75rem; color:var(--silver-400);">WIN • LEARN • SHOWCASE</div>
        </div>

        <div style="margin-top:20px; font-size:0.78rem; color:var(--silver-400); border-top:1px solid rgba(0,240,255,0.15); padding-top:12px;">
          📅 <strong>DATE:</strong> 30 OCTOBER 2026 (FRIDAY) &nbsp;|&nbsp; 📍 <strong>CAMPUS:</strong> KENGERI, BENGALURU
        </div>
      </div>
    `
  },
  {
    page: 2,
    title: "Divine Blessings & Academic Legacy",
    content: `
      <div class="brochure-page-body">
        <div style="text-align:center; margin-bottom:20px;">
          <span style="font-size:0.7rem; font-weight:700; letter-spacing:0.2em; color:var(--gold);">WITH THE DIVINE BLESSINGS OF</span>
          <h3 style="font-size:1.4rem; color:#ffffff; font-family:var(--font-heading); margin-top:4px;">OUR REVERED SPIRITUAL LEADERS</h3>
        </div>

        <div style="display:grid; grid-template-columns:repeat(3, 1fr); gap:14px; margin-bottom:24px;">
          <div style="text-align:center; background:rgba(0,0,0,0.3); border:1px solid rgba(245,158,11,0.2); border-radius:8px; padding:12px;">
            <div style="width:64px; height:64px; border-radius:50%; margin:0 auto 8px auto; overflow:hidden; border:2px solid var(--gold); box-shadow:0 0 12px rgba(245,158,11,0.4);">
              <img src="assets/swamiji_1.png" alt="Founder President" style="width:100%; height:100%; object-fit:cover;">
            </div>
            <div style="font-size:0.75rem; font-weight:700; color:#ffffff; line-height:1.2;">Jagadguru Sri Sri Sri Dr. Balagangadharanatha Mahaswamiji</div>
            <div style="font-size:0.65rem; color:var(--gold); margin-top:4px;">Founder President</div>
          </div>

          <div style="text-align:center; background:rgba(0,0,0,0.3); border:1px solid rgba(245,158,11,0.2); border-radius:8px; padding:12px;">
            <div style="width:64px; height:64px; border-radius:50%; margin:0 auto 8px auto; overflow:hidden; border:2px solid var(--gold); box-shadow:0 0 12px rgba(245,158,11,0.4);">
              <img src="assets/swamiji_2.png" alt="President" style="width:100%; height:100%; object-fit:cover;">
            </div>
            <div style="font-size:0.75rem; font-weight:700; color:#ffffff; line-height:1.2;">Jagadguru Sri Sri Sri Dr. Nirmalanandanatha Mahaswamiji</div>
            <div style="font-size:0.65rem; color:var(--gold); margin-top:4px;">President, BGS & SJBIT</div>
          </div>

          <div style="text-align:center; background:rgba(0,0,0,0.3); border:1px solid rgba(245,158,11,0.2); border-radius:8px; padding:12px;">
            <div style="width:64px; height:64px; border-radius:50%; margin:0 auto 8px auto; overflow:hidden; border:2px solid var(--gold); box-shadow:0 0 12px rgba(245,158,11,0.4);">
              <img src="assets/swamiji_3.png" alt="Managing Director" style="width:100%; height:100%; object-fit:cover;">
            </div>
            <div style="font-size:0.75rem; font-weight:700; color:#ffffff; line-height:1.2;">Poojya Sri Sri Prakashanatha Swamiji</div>
            <div style="font-size:0.65rem; color:var(--gold); margin-top:4px;">Managing Director</div>
          </div>
        </div>

        <div style="background:rgba(0,240,255,0.03); border:1px solid rgba(0,240,255,0.15); border-radius:8px; padding:18px; margin-bottom:16px;">
          <h4 style="font-size:0.95rem; color:var(--cyan); margin-bottom:6px; letter-spacing:0.08em;">A QUARTER CENTURY OF ENGINEERING DISTINCTION</h4>
          <p style="font-size:0.82rem; color:var(--silver-300); line-height:1.6;">
            Established under the divine vision of Sri Adichunchanagiri Shikshana Trust®, SJB Institute of Technology has grown into one of Bengaluru's preeminent technological institutions. Celebrating 25 years of educational brilliance, SJBIT has fostered world-class research centers, top-tier industry placements, and entrepreneurial incubation.
          </p>
        </div>

        <div style="display:flex; justify-content:space-around; background:rgba(0,0,0,0.3); border-radius:8px; padding:12px; font-size:0.75rem; color:var(--silver-400);">
          <div>🏛️ <strong>Autonomous under VTU</strong></div>
          <div>⭐ <strong>NAAC A+ Accredited</strong></div>
          <div>🛡️ <strong>NBA Accredited Programs</strong></div>
          <div>🌐 <strong>IEEE Computer Society</strong></div>
        </div>
      </div>
    `
  },
  {
    page: 3,
    title: "The 8 Flagship Arenas Matrix",
    content: `
      <div class="brochure-page-body">
        <div style="text-align:center; margin-bottom:16px;">
          <span style="font-size:0.7rem; font-weight:700; letter-spacing:0.2em; color:var(--cyan);">OFFICIAL COMPETITIVE MATRIX</span>
          <h3 style="font-size:1.3rem; color:#ffffff; font-family:var(--font-heading); margin-top:4px;">8 FLAGSHIP TECHNICAL ARENAS</h3>
        </div>

        <div style="display:grid; grid-template-columns:1fr 1fr; gap:12px;">
          <div class="brochure-event-mini-card">
            <div style="display:flex; justify-content:space-between; align-items:center;">
              <span style="font-weight:800; color:var(--cyan); font-size:0.95rem;">01. AI Prompt Battle</span>
              <span style="font-size:0.65rem; color:var(--gold); font-weight:700;">₹50,000</span>
            </div>
            <p style="font-size:0.74rem; color:var(--silver-300); margin:4px 0;">Participants compete to create effective prompts for solving technical and creative problems using AI tools.</p>
            <div style="font-size:0.62rem; color:var(--cyan); font-weight:600;">PROMPT • CREATE • SOLVE • INNOVATE</div>
          </div>

          <div class="brochure-event-mini-card">
            <div style="display:flex; justify-content:space-between; align-items:center;">
              <span style="font-weight:800; color:var(--cyan); font-size:0.95rem;">02. Code Relay</span>
              <span style="font-size:0.65rem; color:var(--gold); font-weight:700;">₹50,000</span>
            </div>
            <p style="font-size:0.74rem; color:var(--silver-300); margin:4px 0;">Teams solve a programming problem in stages, with each member continuing from previous member's code.</p>
            <div style="font-size:0.62rem; color:var(--cyan); font-weight:600;">CODE • PASS • SOLVE • REPEAT</div>
          </div>

          <div class="brochure-event-mini-card">
            <div style="display:flex; justify-content:space-between; align-items:center;">
              <span style="font-weight:800; color:var(--cyan); font-size:0.95rem;">03. Hack & Hunt</span>
              <span style="font-size:0.65rem; color:var(--gold); font-weight:700;">₹50,000</span>
            </div>
            <p style="font-size:0.74rem; color:var(--silver-300); margin:4px 0;">Participants solve technical clues, coding challenges and logical puzzles to reach the final solution.</p>
            <div style="font-size:0.62rem; color:var(--cyan); font-weight:600;">EXPLORE • ANALYZE • SOLVE • WIN</div>
          </div>

          <div class="brochure-event-mini-card">
            <div style="display:flex; justify-content:space-between; align-items:center;">
              <span style="font-weight:800; color:var(--cyan); font-size:0.95rem;">04. App Dev Challenge</span>
              <span style="font-size:0.65rem; color:var(--gold); font-weight:700;">₹50,000</span>
            </div>
            <p style="font-size:0.74rem; color:var(--silver-300); margin:4px 0;">Teams conceptualize, design and develop a mobile/web application based on a common theme or problem statement.</p>
            <div style="font-size:0.62rem; color:var(--cyan); font-weight:600;">IDEAS INTO APPLICATIONS</div>
          </div>

          <div class="brochure-event-mini-card">
            <div style="display:flex; justify-content:space-between; align-items:center;">
              <span style="font-weight:800; color:var(--cyan); font-size:0.95rem;">05. Zerocrypt CTF</span>
              <span style="font-size:0.65rem; color:var(--gold); font-weight:700;">₹50,000</span>
            </div>
            <p style="font-size:0.74rem; color:var(--silver-300); margin:4px 0;">Hands-on cybersecurity competition solving real-world security problems and capturing hidden flags.</p>
            <div style="font-size:0.62rem; color:var(--cyan); font-weight:600;">THINK • EXPLOIT • CAPTURE • SECURE</div>
          </div>

          <div class="brochure-event-mini-card">
            <div style="display:flex; justify-content:space-between; align-items:center;">
              <span style="font-weight:800; color:var(--cyan); font-size:0.95rem;">06. Innovation Marathon</span>
              <span style="font-size:0.65rem; color:var(--gold); font-weight:700;">₹50,000</span>
            </div>
            <p style="font-size:0.74rem; color:var(--silver-300); margin:4px 0;">Teams progress from problem identification to ideation, prototyping, testing and pitching over two days.</p>
            <div style="font-size:0.62rem; color:var(--cyan); font-weight:600;">IDEATE • PROTOTYPE • TEST • PITCH</div>
          </div>

          <div class="brochure-event-mini-card">
            <div style="display:flex; justify-content:space-between; align-items:center;">
              <span style="font-weight:800; color:var(--cyan); font-size:0.95rem;">07. Green Tech Challenge</span>
              <span style="font-size:0.65rem; color:var(--gold); font-weight:700;">₹50,000</span>
            </div>
            <p style="font-size:0.74rem; color:var(--silver-300); margin:4px 0;">Technology-driven solutions for sustainability, renewable energy, water conservation or waste reduction.</p>
            <div style="font-size:0.62rem; color:var(--cyan); font-weight:600;">GREENER IDEAS • CLEANER TOMORROW</div>
          </div>

          <div class="brochure-event-mini-card">
            <div style="display:flex; justify-content:space-between; align-items:center;">
              <span style="font-weight:800; color:var(--cyan); font-size:0.95rem;">08. RoboInnovate</span>
              <span style="font-size:0.65rem; color:var(--gold); font-weight:700;">₹50,000</span>
            </div>
            <p style="font-size:0.74rem; color:var(--silver-300); margin:4px 0;">Teams collaborate to develop working robotic solutions for real-world automation challenges.</p>
            <div style="font-size:0.62rem; color:var(--cyan); font-weight:600;">BUILD • PROGRAM • INNOVATE • AUTOMATE</div>
          </div>
        </div>
      </div>
    `
  },
  {
    page: 4,
    title: "Schedule of Engagements",
    content: `
      <div class="brochure-page-body">
        <div style="text-align:center; margin-bottom:18px;">
          <span style="font-size:0.7rem; font-weight:700; letter-spacing:0.2em; color:var(--gold);">SYMPOSIUM CHRONOLOGY</span>
          <h3 style="font-size:1.3rem; color:#ffffff; font-family:var(--font-heading); margin-top:4px;">TWO-DAY SCHEDULE OF ENGAGEMENTS</h3>
        </div>

        <div style="display:grid; grid-template-columns:1fr 1fr; gap:16px;">
          <div style="background:rgba(0,240,255,0.03); border:1px solid rgba(0,240,255,0.15); border-radius:8px; padding:16px;">
            <div style="font-size:0.8rem; font-weight:800; color:var(--cyan); margin-bottom:10px; border-bottom:1px solid rgba(0,240,255,0.2); padding-bottom:6px;">
              DAY 01: 30 OCTOBER 2026 (FRIDAY)
            </div>
            <ul style="list-style:none; padding:0; margin:0; font-size:0.75rem; color:var(--silver-300); line-height:1.7;">
              <li><strong>08:30 AM:</strong> Delegate Check-In & Security Kits</li>
              <li><strong>10:00 AM:</strong> Grand Inaugural & Lamp Lighting</li>
              <li><strong>11:00 AM:</strong> Flagship Arenas Ignition (Session 1)</li>
              <li><strong>01:00 PM:</strong> Networking Banquet & Gallery</li>
              <li><strong>02:00 PM:</strong> Zerocrypt CTF & Robo Finals</li>
              <li><strong>04:30 PM:</strong> Innovation Marathon Overnight Start</li>
            </ul>
          </div>

          <div style="background:rgba(245,158,11,0.03); border:1px solid rgba(245,158,11,0.15); border-radius:8px; padding:16px;">
            <div style="font-size:0.8rem; font-weight:800; color:var(--gold); margin-bottom:10px; border-bottom:1px solid rgba(245,158,11,0.2); padding-bottom:6px;">
              DAY 02: 31 OCTOBER 2026 (SATURDAY)
            </div>
            <ul style="list-style:none; padding:0; margin:0; font-size:0.75rem; color:var(--silver-300); line-height:1.7;">
              <li><strong>09:00 AM:</strong> Prototype Scrutiny & Code Audits</li>
              <li><strong>11:30 AM:</strong> Investor & Jury Stage Pitch</li>
              <li><strong>01:00 PM:</strong> Silver Jubilee Dignitary Luncheon</li>
              <li><strong>02:30 PM:</strong> Grand Valedictory & Awards Gala</li>
              <li><strong>03:30 PM:</strong> ₹4,00,000 Cash Prize Presentation</li>
              <li><strong>04:30 PM:</strong> Cultural Symphony & Adjournment</li>
            </ul>
          </div>
        </div>

        <div style="margin-top:20px; background:rgba(0,0,0,0.3); border-radius:8px; padding:14px; text-align:center; font-size:0.78rem; color:var(--silver-400);">
          ⚡ All venues are equipped with uninterrupted power, high-speed fiber uplink, and faculty monitoring.
        </div>
      </div>
    `
  },
  {
    page: 5,
    title: "Prize Distribution & Accolades",
    content: `
      <div class="brochure-page-body">
        <div style="text-align:center; margin-bottom:18px;">
          <span style="font-size:0.7rem; font-weight:700; letter-spacing:0.2em; color:var(--cyan);">HALL OF GLORY</span>
          <h3 style="font-size:1.4rem; color:#ffffff; font-family:var(--font-heading); margin-top:4px;">₹ 4,00,000 PRIZE POOL BREAKDOWN</h3>
        </div>

        <div style="display:grid; grid-template-columns:repeat(3, 1fr); gap:14px; margin-bottom:20px;">
          <div style="background:linear-gradient(180deg, rgba(245,158,11,0.15) 0%, rgba(0,0,0,0.4) 100%); border:1px solid var(--gold); border-radius:8px; padding:16px; text-align:center;">
            <div style="font-size:1.8rem;">🥇</div>
            <div style="font-size:0.85rem; font-weight:800; color:var(--gold); margin-top:4px;">ARENA CHAMPIONS</div>
            <div style="font-size:1.3rem; font-weight:900; color:#ffffff; margin:6px 0;">₹ 30,000</div>
            <div style="font-size:0.7rem; color:var(--silver-400);">Per Event (x8 Arenas) + Trophy</div>
          </div>

          <div style="background:linear-gradient(180deg, rgba(226,232,240,0.12) 0%, rgba(0,0,0,0.4) 100%); border:1px solid var(--silver-300); border-radius:8px; padding:16px; text-align:center;">
            <div style="font-size:1.8rem;">🥈</div>
            <div style="font-size:0.85rem; font-weight:800; color:var(--silver-200); margin-top:4px;">RUNNERS-UP</div>
            <div style="font-size:1.3rem; font-weight:900; color:#ffffff; margin:6px 0;">₹ 20,000</div>
            <div style="font-size:0.7rem; color:var(--silver-400);">Per Event (x8 Arenas) + Medallion</div>
          </div>

          <div style="background:linear-gradient(180deg, rgba(0,240,255,0.12) 0%, rgba(0,0,0,0.4) 100%); border:1px solid var(--cyan); border-radius:8px; padding:16px; text-align:center;">
            <div style="font-size:1.8rem;">🚀</div>
            <div style="font-size:0.85rem; font-weight:800; color:var(--cyan); margin-top:4px;">INCUBATION</div>
            <div style="font-size:1.3rem; font-weight:900; color:#ffffff; margin:6px 0;">₹ 1,00,000+</div>
            <div style="font-size:0.7rem; color:var(--silver-400);">Seed Grants & Cloud Credits</div>
          </div>
        </div>

        <div style="background:rgba(0,0,0,0.3); border:1px solid rgba(0,240,255,0.15); border-radius:8px; padding:16px; font-size:0.8rem; color:var(--silver-300);">
          <div style="font-weight:700; color:var(--cyan); margin-bottom:6px;">ADDITIONAL COMMENDATIONS:</div>
          <ul style="padding-left:18px; margin:0; line-height:1.7;">
            <li>Official Silver Jubilee Commemorative Certificates to all verified delegators.</li>
            <li>Direct fast-track interview consideration with premier tech recruitment sponsors.</li>
            <li>Free 1-year IEEE Computer Society student chapter membership benefits.</li>
          </ul>
        </div>
      </div>
    `
  },
  {
    page: 6,
    title: "Campus Telemetry & Scan To Register",
    content: `
      <div class="brochure-page-body" style="text-align:center;">
        <span style="font-size:0.7rem; font-weight:700; letter-spacing:0.2em; color:var(--gold);">CAMPUS TELEMETRY & ONBOARDING</span>
        <h3 style="font-size:1.4rem; color:#ffffff; font-family:var(--font-heading); margin:4px 0 16px 0;">JOIN THE SILVER JUBILEE HORIZON</h3>

        <div style="background:rgba(0,240,255,0.04); border:1px solid rgba(0,240,255,0.2); border-radius:8px; padding:18px; max-width:540px; margin:0 auto 20px auto; text-align:left;">
          <div style="font-size:0.75rem; font-weight:700; color:var(--cyan); letter-spacing:0.1em; margin-bottom:4px;">LOCATION COORDINATES</div>
          <div style="font-size:0.95rem; font-weight:700; color:#ffffff;">SJB Institute of Technology</div>
          <div style="font-size:0.8rem; color:var(--silver-300); margin:4px 0;">No.67, BGS Health & Education City, Dr. Vishnuvardhan Rd, Kengeri, Bengaluru 560060</div>
          <div style="font-size:0.75rem; color:var(--silver-400);">Coordinates: 12.9056° N, 77.4984° E &nbsp;|&nbsp; Kengeri Metro Station (~4 km)</div>
        </div>

        <!-- Scan to Register Graphic -->
        <div style="display:inline-block; background:#ffffff; border-radius:12px; padding:16px; margin-bottom:12px; box-shadow:0 0 30px rgba(0,240,255,0.3);">
          <div style="width:140px; height:140px; background:radial-gradient(circle, #0f172a 0%, #020617 100%); border-radius:8px; display:flex; flex-direction:column; align-items:center; justify-content:center; color:#ffffff;">
            <div style="font-size:2rem;">📱</div>
            <div style="font-size:0.65rem; font-family:var(--font-mono); color:var(--cyan); margin-top:6px; font-weight:700;">SCAN TO REGISTER</div>
            <div style="font-size:0.55rem; color:var(--silver-400);">VIGYANTRA 2026</div>
          </div>
        </div>

        <div style="font-size:0.82rem; font-weight:700; color:var(--cyan); letter-spacing:0.15em;">STUDENTS | INNOVATORS | CHANGE MAKERS</div>
        <div style="font-size:0.75rem; color:var(--silver-300); margin-top:2px;">ALL ARE CORDIALLY WELCOME!</div>

        <div style="margin-top:20px;">
          <button class="btn btn-primary" onclick="closeBrochureModal(); openRegistrationModal();">
            <span>⚡ INITIALIZE REGISTRATION NOW</span>
          </button>
        </div>
      </div>
    `
  }
];

// Attach globally
window.SYMPOSIUM_CONFIG = SYMPOSIUM_CONFIG;
window.STATS_DATA = STATS_DATA;
window.EVENTS_DATA = EVENTS_DATA;
window.SCHEDULE_DATA = SCHEDULE_DATA;
window.PRIZES_DATA = PRIZES_DATA;
window.GUIDELINES_DATA = GUIDELINES_DATA;
window.FAQ_DATA = FAQ_DATA;
window.BROCHURE_PAGES = BROCHURE_PAGES;
