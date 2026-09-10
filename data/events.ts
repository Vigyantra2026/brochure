export interface EventArena {
  id: string;
  name: string;
  shortName: string;
  image: string;
  fee: number;
  minTeam: number;
  maxTeam: number;
  prizeWinner: number;
  prizeRunnerUp: number;
  venue: string;
  registrationUrl: string;
  description: string;
  duration: string;
  tasks: string[];
  scoring: string[];
  facultyCoordinator: string;
  studentCoordinator: string;
  contactEmail: string;
  contactPhone: string;
  code: string;
  slug: string;
  number: string;
  subName: string;
  category: string;
  categoryLabel: string;
  shortDescription: string;
  teamSize: string;
  registrationFee: string;
  prizePool: string;
  date: string;
  tags: string[];
  accentColor: string;
  iconSvg: string;
  overviewHeading?: string;
  format?: string;
  eligibility?: string | string[];
  teamGuidelines?: string[];
  faqs?: Array<{ q: string; a: string }>;
  [key: string]: any;
}

export const EVENTS_DATA = [
  {
    // Primary Identifiers
    id: "APB",
    name: "AI Prompt Battle",
    shortName: "APB",
    image: "assets/arenas/apb.jpg",

    // Registration & Financial Configuration
    fee: 500,
    minTeam: 2,
    maxTeam: 4,
    prizeWinner: 30000,
    prizeRunnerUp: 20000,
    venue: "AI & Machine Learning Center of Excellence",
    registrationUrl: "", // Ready for Google Forms / External registration link integration

    // Descriptive Intelligence
    description: "AI Prompt Battle challenges prompt engineers, AI creators, and problem solvers to push generative intelligence to its frontiers. Harness LLMs, vision models, and reasoning architectures to solve cryptic coding bugs, generate optimal algorithmic pipelines, and create jaw-dropping multimodal outputs under severe token and context constraints.",
    duration: "10:30 AM - 01:30 PM",

    // High-Level Tasks & Scoring Rubric
    tasks: [
      "Zero-Shot Problem Decryption: Formulate ultra-concise system prompts to make an LLM solve edge-case algorithmic puzzles and logic traps with zero hallucinations.",
      "Multimodal Synthesis Battle: Generate interactive prototypes, technical schematics, and clean code documentation using chained multi-agent prompt flows.",
      "Grand AI Jailbreak & Defense Showdown: Live head-to-head arena defense constructing guardrail-breaking adversarial queries while defending your agent against opposing strikes."
    ],
    scoring: [
      "Prompt Clarity, Conciseness & Token Economy (30%)",
      "Correctness & Feasibility of Generated Output (30%)",
      "Adaptability to Dynamic Constraints (25%)",
      "Live Stage Defense & Demonstration (15%)"
    ],

    // Coordination & Contacts
    facultyCoordinator: "Prof. Faculty Coordinator",
    studentCoordinator: "Student Lead (AI Arena)",
    contactEmail: "example@gmail.com",
    contactPhone: "+91 XXXXX XXXXX",

    // UI Presentation & Compatibility Metadata
    code: "APB",
    slug: "ai-prompt-battle",
    number: "01",
    subName: "Generative AI & LLM Combat",
    category: "ai",
    categoryLabel: "AI & PROMPT ENGINEERING",
    shortDescription: "Participants compete to create effective prompts for solving technical and creative problems using AI tools.",
    teamSize: "2 - 4 Members",
    registrationFee: "₹500 / Team",
    prizePool: "₹50,000",
    date: "30 October 2026 (10:30 AM - 01:30 PM)",
    tags: ["PROMPT", "CREATE", "SOLVE", "INNOVATE"],
    accentColor: "#00f0ff",
    iconSvg: `<svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2a4 4 0 0 1 4 4c0 1.95-1.4 3.58-3.25 3.93L13 14h-2l.25-4.07A4.002 4.002 0 0 1 12 2z"/><circle cx="12" cy="18" r="1.5"/><path d="M4 10a8 8 0 0 1 16 0"/><path d="M7 16a6 6 0 0 0 10 0"/></svg>`,

    // Tactical Rounds Progression
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
      "Teams must comprise 2 to 4 registered delegates."
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
    // Primary Identifiers
    id: "CR",
    name: "Code Relay",
    shortName: "CR",
    image: "assets/arenas/code_relay.jpg",

    // Registration & Financial Configuration
    fee: 500,
    minTeam: 2,
    maxTeam: 4,
    prizeWinner: 30000,
    prizeRunnerUp: 20000,
    venue: "Advanced Computing Systems Laboratory",
    registrationUrl: "", // Ready for Google Forms / External registration link integration

    // Descriptive Intelligence
    description: "Code Relay is the ultimate collaborative programming arena. Like a high-speed track relay, team members pass the keyboard baton at timed intervals. Member 2 must comprehend, refactor, and extend Member 1's architecture without verbal communication during transitions. Stagewise outcomes, clean modularity, and algorithmic efficiency determine victory.",
    duration: "11:00 AM - 02:30 PM",

    // High-Level Tasks & Scoring Rubric
    tasks: [
      "Algorithmic Foundation Sprint: Member 1 constructs core data structures; Member 2 implements core search/traversal algorithms; Member 3 optimizes time complexity; Member 4 writes test suites.",
      "Blind Refactor & Chaos Injection: Diagnose, patch, and execute under timed 7-minute rotation with injected bugs.",
      "Grand Production-Grade Scale Sprint: Build and benchmark a distributed concurrent cache system handling 50k requests/sec live on arena projection."
    ],
    scoring: [
      "Stagewise Functional Completion & Test Passes (40%)",
      "Algorithmic Time & Space Complexity (30%)",
      "Readability, Modularity & Architectural Integrity (20%)",
      "Relay Transition Efficiency (10%)"
    ],

    // Coordination & Contacts
    facultyCoordinator: "Prof. Faculty Coordinator",
    studentCoordinator: "Student Lead (Code Relay)",
    contactEmail: "example@gmail.com",
    contactPhone: "+91 XXXXX XXXXX",

    // UI Presentation & Compatibility Metadata
    code: "CR",
    slug: "code-relay",
    number: "02",
    subName: "Synchronized Algorithmic Relay",
    category: "coding",
    categoryLabel: "CODING & ALGORITHMS",
    shortDescription: "Teams solve a programming problem in stages, with each member continuing from the previous member's code. Number of stagewise outcome is considered for evaluation.",
    teamSize: "2 - 4 Members",
    registrationFee: "₹500 / Team",
    prizePool: "₹50,000",
    date: "30 October 2026 (11:00 AM - 02:30 PM)",
    tags: ["CODE", "PASS", "SOLVE", "REPEAT"],
    accentColor: "#38bdf8",
    iconSvg: `<svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/><circle cx="12" cy="12" r="2"/></svg>`,

    // Tactical Rounds Progression
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
    // Primary Identifiers
    id: "HNH",
    name: "Hack & Hunt",
    shortName: "HNH",
    image: "assets/arenas/hack_hunt.jpg",

    // Registration & Financial Configuration
    fee: 500,
    minTeam: 2,
    maxTeam: 4,
    prizeWinner: 30000,
    prizeRunnerUp: 20000,
    venue: "Information Science Arena & Campus Perimeter",
    registrationUrl: "", // Ready for Google Forms / External registration link integration

    // Descriptive Intelligence
    description: "Hack & Hunt blends cybersecurity cryptography, reverse engineering, geolocation intelligence, and intricate logic puzzles. Teams navigate an encrypted cyber labyrinth where each decrypted cipher unlocks a secret API endpoint, buried hardware token, or campus coordinate leading to the ultimate quantum key.",
    duration: "11:30 AM - 03:30 PM",

    // High-Level Tasks & Scoring Rubric
    tasks: [
      "The Digital Cryptogram: Crack stenographic image layers, base64/hex ciphers, and inspect web payloads to reveal the hidden entry token.",
      "The Geocached Code Matrix: Use decrypted GPS coordinates and technical riddles to locate encrypted NFC/QR nodes across the campus.",
      "The Master Vault Protocol: Reconstruct an encrypted logic circuit on the master terminal to disarm the vault and secure the grand flag."
    ],
    scoring: [
      "Speed of Clue Clearance & Cryptographic Decryption (40%)",
      "Physical-Digital Checkpoint Exploration (35%)",
      "Final Vault Protocol Deactivation (25%)"
    ],

    // Coordination & Contacts
    facultyCoordinator: "Prof. Faculty Coordinator",
    studentCoordinator: "Student Lead (Hack & Hunt)",
    contactEmail: "example@gmail.com",
    contactPhone: "+91 XXXXX XXXXX",

    // UI Presentation & Compatibility Metadata
    code: "HNH",
    slug: "hack-and-hunt",
    number: "03",
    subName: "Cryptic Challenge & Logic Hunt",
    category: "puzzle",
    categoryLabel: "PUZZLES & CRYPTIC HUNT",
    shortDescription: "Participants solve a series of technical clues, coding challenges and logical puzzles to reach the final solution.",
    teamSize: "2 - 4 Members",
    registrationFee: "₹500 / Team",
    prizePool: "₹50,000",
    date: "30 October 2026 (11:30 AM - 03:30 PM)",
    tags: ["EXPLORE", "ANALYZE", "SOLVE", "WIN"],
    accentColor: "#f59e0b",
    iconSvg: `<svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><path d="M11 8v6"/><path d="M8 11h6"/></svg>`,

    // Tactical Rounds Progression
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
      "External assistance via communication with non-participants will trigger team disqualification.",
      "Physical clues are tagged with tamper-evident holograms and must remain in situ."
    ],
    judgingCriteria: [
      "Speed of Clue Clearance & Cryptographic Decryption (40%)",
      "Physical-Digital Checkpoint Exploration (35%)",
      "Final Vault Protocol Deactivation (25%)"
    ],
    eligibility: [
      "Open to all enrolled undergraduate/postgraduate students with valid institutional identity.",
      "Squad size: 2 to 4 members."
    ],
    submissionRequirements: [
      "Digital audit log of solved hashes and flags",
      "Physical token collected at final checkpoint"
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
    // Primary Identifiers
    id: "ADC",
    name: "App Development Challenge",
    shortName: "ADC",
    image: "assets/arenas/app_dev.jpg",

    // Registration & Financial Configuration
    fee: 500,
    minTeam: 2,
    maxTeam: 4,
    prizeWinner: 30000,
    prizeRunnerUp: 20000,
    venue: "Software Development & Cloud Computing Center",
    registrationUrl: "", // Ready for Google Forms / External registration link integration

    // Descriptive Intelligence
    description: "App Development Challenge invites mobile and web architects to transform napkin ideas into high-performance, responsive, and beautiful production-ready applications. Teams receive a theme on symposium morning and have 5 hours to design, develop, test, and pitch an intuitive application that solves real-world societal friction.",
    duration: "10:00 AM - 04:00 PM",

    // High-Level Tasks & Scoring Rubric
    tasks: [
      "Theme Release & Blueprint Pitch: Receive surprise challenge theme, architect wireframes, schema design, and defend tech stack choice.",
      "Rapid Build Sprint & Deployment: Develop functional application (Flutter/React Native/React/PWA), integrate responsive APIs, and host live testing link.",
      "Grand Jury Demo & Stress Defense: Present live product to industry judges, handle surprise test scenarios, and present business value proposition."
    ],
    scoring: [
      "Working Functionality & Execution Depth (35%)",
      "UI/UX Design Polish & Responsiveness (30%)",
      "Innovation & Real-World Utility (25%)",
      "Presentation & Architecture Defense (10%)"
    ],

    // Coordination & Contacts
    facultyCoordinator: "Prof. Faculty Coordinator",
    studentCoordinator: "Student Lead (App Dev)",
    contactEmail: "example@gmail.com",
    contactPhone: "+91 XXXXX XXXXX",

    // UI Presentation & Compatibility Metadata
    code: "ADC",
    slug: "app-development-challenge",
    number: "04",
    subName: "Rapid Full-Stack & Mobile Sprint",
    category: "app",
    categoryLabel: "APP & WEB ENGINEERING",
    shortDescription: "Teams conceptualize, design and develop a mobile/web application based on a common theme or problem statement.",
    teamSize: "2 - 4 Members",
    registrationFee: "₹500 / Team",
    prizePool: "₹50,000",
    date: "30 October 2026 (10:00 AM - 04:00 PM)",
    tags: ["IDEAS INTO APPLICATIONS"],
    accentColor: "#10b981",
    iconSvg: `<svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="2"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/><circle cx="12" cy="7" r="1"/></svg>`,

    // Tactical Rounds Progression
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
      "Cross-college teams are fully permitted (2 to 4 members per team)."
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
    // Primary Identifiers
    id: "ZCTF",
    name: "Zerocrypt CTF",
    shortName: "ZCTF",
    image: "assets/arenas/zerocrypt.jpg",

    // Registration & Financial Configuration
    fee: 500,
    minTeam: 2,
    maxTeam: 4,
    prizeWinner: 30000,
    prizeRunnerUp: 20000,
    venue: "Cyber Defense & Network Security Lab",
    registrationUrl: "", // Ready for Google Forms / External registration link integration

    // Descriptive Intelligence
    description: "Zerocrypt CTF is an elite hands-on cyber defense and offensive security proving ground. White-hat hackers, security researchers, and cyber cadets compete in a secure sandboxed network to reverse binaries, exploit vulnerable services, crack cryptographic ciphers, and defend critical assets while capturing hidden digital flags.",
    duration: "10:30 AM - 03:30 PM",

    // High-Level Tasks & Scoring Rubric
    tasks: [
      "Jeopardy Cyber Qualification: Solve challenges across Web Security, Reverse Engineering, Cryptography, Binary Exploitation, and OSINT.",
      "Live Attack & Defense Sandbox: Defend assigned network node, patch vulnerabilities in real time, and deploy custom exploits against opposing nodes.",
      "King of the Hill Cyber Summit: Gain root privileges on core target server, maintain ownership under continuous attack, and execute final cyber telemetry."
    ],
    scoring: [
      "Total Capture The Flag Matrix Points (50%)",
      "Network Defense & Uptime Integrity (30%)",
      "Vulnerability Exploit Speed & Documentation (20%)"
    ],

    // Coordination & Contacts
    facultyCoordinator: "Prof. Faculty Coordinator",
    studentCoordinator: "Student Lead (Zerocrypt CTF)",
    contactEmail: "example@gmail.com",
    contactPhone: "+91 XXXXX XXXXX",

    // UI Presentation & Compatibility Metadata
    code: "ZCTF",
    slug: "zerocrypt-ctf",
    number: "05",
    subName: "Hands-on Cybersecurity & Flag Capture",
    category: "cybersecurity",
    categoryLabel: "CYBERSECURITY & CTF",
    shortDescription: "Hands-on cybersecurity competition that challenges participants to solve real-world security problems and capture hidden flags.",
    teamSize: "2 - 4 Members",
    registrationFee: "₹500 / Team",
    prizePool: "₹50,000",
    date: "30 October 2026 (10:30 AM - 03:30 PM)",
    tags: ["THINK", "EXPLOIT", "CAPTURE", "SECURE"],
    accentColor: "#ef4444",
    iconSvg: `<svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><circle cx="12" cy="11" r="3"/><path d="M12 14v3"/></svg>`,

    // Tactical Rounds Progression
    rounds: [
      {
        roundNumber: "SECTOR 01",
        title: "Jeopardy Cyber Qualification",
        duration: "90 Minutes",
        format: "Jeopardy CTF Matrix",
        task: "Solve challenges across Web Security, Reverse Engineering, Cryptography, Binary Exploitation, and OSINT.",
        scoring: "Dynamic scoring based on flag difficulty (100 - 500 pts per flag)",
        qualification: "Top 8 teams advance to Attack-Defense Arena."
      },
      {
        roundNumber: "SECTOR 02",
        title: "Live Attack & Defense Sandbox",
        duration: "120 Minutes",
        format: "Simulated Industrial Infrastructure",
        task: "Defend your assigned network node, patch vulnerabilities in real time, and deploy custom exploits against opposing nodes.",
        scoring: "Defense Uptime (50%), Successful Exploits (50%)",
        qualification: "Top 3 teams qualify for King of the Hill finale."
      },
      {
        roundNumber: "SECTOR 03",
        title: "King of the Hill Cyber Summit",
        duration: "45 Minutes",
        format: "Live Network Domination",
        task: "Gain root privileges on the core target server, maintain ownership under continuous attack, and execute final cyber telemetry.",
        scoring: "Sustained Root Possession Time (100%)",
        qualification: "Champion & Runner-up crowned with ₹50,000 prize pool."
      }
    ],
    rules: [
      "Any denial-of-service (DoS/DDoS) attack targeting the CTF infrastructure platform will trigger instant team ban.",
      "Flag sharing, cross-team collusion, or credential leaking is strictly prohibited.",
      "Only attacks directed at designated sandbox IP ranges are permitted.",
      "Decisions by the Cyber Red-Team Marshals are absolute."
    ],
    judgingCriteria: [
      "Total Capture The Flag Matrix Points (50%)",
      "Network Defense & Uptime Integrity (30%)",
      "Vulnerability Exploit Speed & Documentation (20%)"
    ],
    eligibility: [
      "Open to all enrolled undergraduate and postgraduate students.",
      "Teams must comprise 2 to 4 registered cadets."
    ],
    submissionRequirements: [
      "Submitted flag strings on live platform scoring engine",
      "Vulnerability assessment and proof-of-concept write-up"
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
    // Primary Identifiers
    id: "INM",
    name: "Innovation Marathon",
    shortName: "INM",
    image: "assets/arenas/innovation.jpg",

    // Registration & Financial Configuration
    fee: 500,
    minTeam: 2,
    maxTeam: 4,
    prizeWinner: 30000,
    prizeRunnerUp: 20000,
    venue: "Main Auditorium & Innovation Incubation Cell",
    registrationUrl: "", // Ready for Google Forms / External registration link integration

    // Descriptive Intelligence
    description: "The Innovation Marathon is the flagship 2-day innovation crucible of Vigyantra 2026. Student innovators tackle grand societal challenges spanning Smart Cities, Healthcare Automation, Fintech Accessibility, and Industry 4.0. Teams ideate, architect hardware/software MVPs, conduct user testing, and pitch before venture capitalists and industry chiefs.",
    duration: "Continuous Sprint (30 & 31 Oct)",

    // High-Level Tasks & Scoring Rubric
    tasks: [
      "Problem Identification & Empathy Pitch: Identify a critical societal or technological pain point, perform user research analysis, and present conceptual blueprint.",
      "High-Octane MVP Build & Testing: Engineer functional working prototype, assemble electrical or software stacks, conduct load and usability tests with mentors.",
      "Grand Jury Demo & Investor Pitch: Deliver live working demonstration on stage and pitch to venture partners and faculty convenors."
    ],
    scoring: [
      "Novelty and Societal Impact (30%)",
      "Functional Completeness of Working MVP (30%)",
      "Technical Complexity & Engineering Rigor (25%)",
      "Pitch Clarity & Market Scalability (15%)"
    ],

    // Coordination & Contacts
    facultyCoordinator: "Prof. Faculty Coordinator",
    studentCoordinator: "Student Lead (Innovation Marathon)",
    contactEmail: "example@gmail.com",
    contactPhone: "+91 XXXXX XXXXX",

    // UI Presentation & Compatibility Metadata
    code: "INM",
    slug: "innovation-marathon",
    number: "06",
    subName: "Problem Ideation & Prototype Sprint",
    category: "innovation",
    categoryLabel: "INNOVATION & HACKATHON",
    shortDescription: "Teams progress from problem identification to ideation, prototyping, testing and pitching over two days.",
    teamSize: "2 - 4 Members",
    registrationFee: "₹500 / Team",
    prizePool: "₹50,000",
    date: "30 & 31 October 2026 (Continuous Sprint)",
    tags: ["IDEATE", "PROTOTYPE", "TEST", "PITCH"],
    accentColor: "#fbbf24",
    iconSvg: `<svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="2"><line x1="9" y1="18" x2="15" y2="18"/><line x1="10" y1="22" x2="14" y2="22"/><path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 0 1 8.91 14"/></svg>`,

    // Tactical Rounds Progression
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
      "Teams must comprise 2 to 4 registered delegates."
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
    // Primary Identifiers
    id: "GTC",
    name: "Green Tech Challenge",
    shortName: "GTC",
    image: "assets/arenas/green_tech.jpg",

    // Registration & Financial Configuration
    fee: 500,
    minTeam: 2,
    maxTeam: 4,
    prizeWinner: 30000,
    prizeRunnerUp: 20000,
    venue: "Sustainable Engineering & IoT Lab",
    registrationUrl: "", // Ready for Google Forms / External registration link integration

    // Descriptive Intelligence
    description: "The Green Tech Challenge bridges technological innovation and ecological preservation. Delegations engineer tangible, scalable hardware and digital solutions tackling urban heat islands, renewable energy storage, AI-driven smart grid management, automated water conservation, and zero-waste circular economy systems.",
    duration: "11:00 AM - 04:00 PM",

    // High-Level Tasks & Scoring Rubric
    tasks: [
      "Eco-Impact Thesis & Technical Schema: Submit lifecycle energy audit and mathematical model proving ecological efficiency and carbon offset viability.",
      "Working Clean-Tech Prototype Demo: Demonstrate your working hardware/software model (smart sensor arrays, solar telemetry, bio-waste converters).",
      "Scalability & Urban Implementation Pitch: Defend municipal or industrial scalability, payback period, and durability under environmental stress."
    ],
    scoring: [
      "Ecological Impact & Sustainability Innovation (35%)",
      "Hardware/Software Prototype Efficacy (35%)",
      "Technical Feasibility & Commercial Viability (20%)",
      "Team Presentation & Defense (10%)"
    ],

    // Coordination & Contacts
    facultyCoordinator: "Prof. Faculty Coordinator",
    studentCoordinator: "Student Lead (Green Tech)",
    contactEmail: "example@gmail.com",
    contactPhone: "+91 XXXXX XXXXX",

    // UI Presentation & Compatibility Metadata
    code: "GTC",
    slug: "green-tech-challenge",
    number: "07",
    subName: "Sustainability & Clean Energy Tech",
    category: "greentech",
    categoryLabel: "GREEN TECH & SUSTAINABILITY",
    shortDescription: "Teams develop technology-driven solutions for sustainability, renewable energy, water conservation or waste reduction.",
    teamSize: "2 - 4 Members",
    registrationFee: "₹500 / Team",
    prizePool: "₹50,000",
    date: "30 October 2026 (11:00 AM - 04:00 PM)",
    tags: ["GREENER IDEAS", "CLEANER TOMORROW"],
    accentColor: "#22c55e",
    iconSvg: `<svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/></svg>`,

    // Tactical Rounds Progression
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
        scoring: "Feasibility of Urban Deployment (50%), Cost vs Return (30%), Q&A Defense (20%)",
        qualification: "Winner & Runner-Up crowned with ₹50,000 prize share."
      }
    ],
    rules: [
      "Prototypes must utilize eco-friendly, non-hazardous, or recycled materials wherever practical.",
      "Energy consumption metrics must be demonstrable with live multimeter/telemetry logs.",
      "Chemical or biological agents must be benign and pre-approved by the safety council.",
      "Decisions by the Green Tech Jury and IEEE sustainability experts are final."
    ],
    judgingCriteria: [
      "Ecological Impact & Sustainability Innovation (35%)",
      "Hardware/Software Prototype Efficacy (35%)",
      "Technical Feasibility & Commercial Viability (20%)",
      "Team Presentation & Defense (10%)"
    ],
    eligibility: [
      "Open to all multidisciplinary student teams from recognized engineering colleges.",
      "Squad size: 2 to 4 registered delegates."
    ],
    submissionRequirements: [
      "Working CleanTech prototype / simulation dashboard",
      "1-page lifecycle environmental impact statement",
      "Bill of Materials (BOM) & Scalability Blueprint"
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
    // Primary Identifiers
    id: "RBI",
    name: "RoboInnovate",
    shortName: "RBI",
    image: "assets/arenas/roboinnovate.jpg",

    // Registration & Financial Configuration
    fee: 500,
    minTeam: 2,
    maxTeam: 4,
    prizeWinner: 30000,
    prizeRunnerUp: 20000,
    venue: "Robotics & Automation Arena (Mechanical Block)",
    registrationUrl: "", // Ready for Google Forms / External registration link integration

    // Descriptive Intelligence
    description: "RoboInnovate brings mechanical design, embedded systems, and computer vision together on the battleground of robotics. Interdisciplinary teams construct autonomous or semi-autonomous robotic systems to navigate challenging terrain, perform precision manipulation, and execute dynamic industrial automation tasks under strict time limits.",
    duration: "10:00 AM - 04:30 PM",

    // High-Level Tasks & Scoring Rubric
    tasks: [
      "Chassis Telemetry & Safety Scrutiny: Bot dimensions (max 40x40x40 cm), weight limits (max 5 kg), and fail-safe power cutoffs verified by technical inspectors.",
      "Autonomous Navigation & Obstacle Trial: Bot must navigate terrain elevation, detect visual markers, and manipulate industrial payload blocks autonomously.",
      "Dynamic Industrial Utility Mission: Bots compete in a simulated factory floor environment executing high-speed pick-and-place, line following, and sorting."
    ],
    scoring: [
      "Autonomous Performance & Path Planning (40%)",
      "Mechanical Build Quality & Robustness (30%)",
      "Task Completion Speed & Precision (20%)",
      "Engineering Design Innovation (10%)"
    ],

    // Coordination & Contacts
    facultyCoordinator: "Prof. Faculty Coordinator",
    studentCoordinator: "Student Lead (RoboInnovate)",
    contactEmail: "example@gmail.com",
    contactPhone: "+91 XXXXX XXXXX",

    // UI Presentation & Compatibility Metadata
    code: "RBI",
    slug: "roboinnovate",
    number: "08",
    subName: "Autonomous Robotics & Mechatronics",
    category: "robotics",
    categoryLabel: "ROBOTICS & MECHATRONICS",
    shortDescription: "Teams from different disciplines collaborate to develop a working robotic solution for a real-world problem.",
    teamSize: "2 - 4 Members",
    registrationFee: "₹500 / Team",
    prizePool: "₹50,000",
    date: "30 October 2026 (10:00 AM - 04:30 PM)",
    tags: ["BUILD", "PROGRAM", "INNOVATE", "AUTOMATE"],
    accentColor: "#06b6d4",
    iconSvg: `<svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 8V4H8"/><rect x="4" y="8" width="16" height="12" rx="2"/><circle cx="9" cy="13" r="1.5"/><circle cx="15" cy="13" r="1.5"/><path d="M9 17h6"/></svg>`,

    // Tactical Rounds Progression
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

export function getEventById(identifier: string): EventArena | undefined {
  if (!identifier) return undefined;
  const cleanId = identifier.trim().toLowerCase();
  return EVENTS_DATA.find(e => 
    e.id.toLowerCase() === cleanId ||
    e.shortName.toLowerCase() === cleanId ||
    e.code.toLowerCase() === cleanId ||
    e.slug.toLowerCase() === cleanId ||
    e.number === identifier.trim()
  );
}
