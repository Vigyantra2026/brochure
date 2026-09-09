/**
 * VIGYANTRA 2026 — Centralized Event & Symposium Configuration
 * 25-Year Silver Jubilee Technical Symposium
 * 
 * All data in this file is centralized and easily editable.
 */

const SYMPOSIUM_CONFIG = {
  edition: "25th Silver Jubilee Edition",
  year: "2026",
  theme: "Celebrating 25 Years of Engineering Excellence",
  tagline: "Celebrating a quarter century of innovation, engineering and student excellence.",
  totalPrizePool: "₹1,00,000+",
  collegePlaceholder: "SJBIT Campus, BGS Health & Education City",
  cityPlaceholder: "Bengaluru, Karnataka, India",
  directionsUrl: "https://maps.google.com/?q=Bengaluru+Karnataka",
  // Target date for countdown (Set to upcoming symposium date)
  targetDate: "2026-10-15T09:00:00+05:30",
  brochurePdfUrl: "#", // Placeholder: replace with actual PDF URL when uploaded
  socials: {
    instagram: "https://instagram.com/vigyantra2026",
    linkedin: "https://linkedin.com/company/vigyantra2026",
    youtube: "https://youtube.com/@vigyantra2026",
    github: "https://github.com/Vigyantra2026"
  }
};

const STATS_DATA = [
  { value: "25", suffix: "th", label: "SILVER JUBILEE EDITION", icon: "award" },
  { value: "08", suffix: "", label: "FLAGSHIP EVENTS", icon: "layers" },
  { value: "100000", prefix: "₹", suffix: "+", label: "PRIZE POOL", icon: "trophy", display: "₹1,00,000+" },
  { value: "1000", suffix: "+", label: "INNOVATORS", icon: "users" },
  { value: "50", suffix: "+", label: "INSTITUTES", icon: "compass" }
];

const EVENTS_DATA = [
  {
    id: "codestorm",
    number: "01",
    name: "CODESTORM",
    subName: "Hackathon",
    category: "coding",
    categoryLabel: "CODING & SOFTWARE",
    shortDescription: "A high-octane 24-hour sprint pushing algorithmic mastery, system architecture, and product prototyping to their limits.",
    description: "CODESTORM is the premier hackathon of Vigyantra 2026. Teams are challenged to architect, engineer, and deploy real-world production prototypes within tight time constraints across themes including Autonomous Systems, FinTech, Web3, and HealthTech.",
    teamSize: "2 - 4 Members",
    minTeam: 2,
    maxTeam: 4,
    registrationFee: "₹300 / Team (Placeholder)",
    prizePool: "₹25,000",
    date: "Day 01 & 02 (10:00 AM onwards)",
    venue: "Central Computing Complex, Lab 1 & 2",
    tags: ["HACKATHON", "FULL-STACK", "ALGORITHMS", "DEV"],
    accentColor: "#38bdf8",
    code: "CS",
    rounds: [
      {
        roundNumber: "ROUND 01",
        title: "Ideation & Architecture Pitch",
        duration: "3 Hours",
        format: "Design Document & Architecture Defense",
        task: "Teams submit system architecture, tech stack breakdown, and wireframe prototypes for their chosen problem statement.",
        scoring: "Innovation (30%), Technical Feasibility (30%), Problem Relevance (20%), Pitch (20%)",
        qualification: "Top 15 teams advance to the 24-Hour Build Sprint."
      },
      {
        roundNumber: "ROUND 02",
        title: "24-Hour Build Sprint & Live Deployment",
        duration: "24 Hours Continuous",
        format: "Hands-on Code Sprint with Scheduled Mentor Checkpoints",
        task: "Build the functional MVP, integrate backend APIs, host live deployment, and push all commits to official repository.",
        scoring: "Code Quality & Architecture (35%), Completeness of Prototype (25%), UX/UI (20%), Scalability (20%)",
        qualification: "Top 5 teams advance to Grand Jury Demonstration."
      },
      {
        roundNumber: "ROUND 03",
        title: "Grand Jury Demo & Code Audit",
        duration: "10 Mins / Team",
        format: "Live Demonstration & Q&A with Industry Judges",
        task: "Demonstrate live working product, handle edge-case stress tests, and defend architectural choices before jury.",
        scoring: "Execution (40%), Technical Depth (30%), Market Potential (30%)",
        qualification: "Winner & Runner-Up declared at the Valedictory Ceremony."
      }
    ],
    rules: [
      "All code, design assets, and commits must be authored within the hackathon timeframe.",
      "Use of open-source libraries, standard frameworks, and public APIs is permitted with explicit attribution.",
      "Pre-built proprietary products or components authored prior to kickoff are strictly forbidden.",
      "Every team must maintain a public GitHub repository with regular timestamped commits.",
      "Strict zero-tolerance policy on code plagiarism and unauthorized API key sharing."
    ],
    judgingCriteria: [
      "Technical Complexity & Engineering Rigor (30%)",
      "Novelty and Originality of Solution (25%)",
      "Functional Completeness & Stability of Live MVP (25%)",
      "User Experience & Presentation Quality (20%)"
    ],
    eligibility: [
      "Open to all undergraduate and postgraduate engineering and tech students.",
      "Participants must present a valid college ID card during on-campus check-in.",
      "Cross-college teams are fully permitted."
    ],
    submissionRequirements: [
      "Live working deployment link (Vercel, Render, AWS, etc.)",
      "GitHub repository link with commit logs and README documentation",
      "3-minute video walkthrough or deck explaining problem statement and technical architecture"
    ],
    coordinator: {
      faculty: "Prof. R. S. Sharma (Faculty Lead)",
      facultyContact: "+91 98765 43210",
      student: "Aarav Nair & Meera Reddy",
      studentContact: "+91 91234 56789",
      email: "codestorm@vigyantra.org"
    }
  },
  {
    id: "webcraft",
    number: "02",
    name: "WEBCRAFT",
    subName: "DevSprint",
    category: "coding",
    categoryLabel: "CODING & SOFTWARE",
    shortDescription: "A fast-paced web engineering battle testing modern reactive design, performance optimization, and creative micro-interactions.",
    description: "WEBCRAFT challenges front-end developers and UI/UX engineers to craft breathtaking, accessible, high-performance web experiences. From complex state management to sleek CSS animations, only the most refined interfaces will prevail.",
    teamSize: "1 - 2 Members",
    minTeam: 1,
    maxTeam: 2,
    registrationFee: "₹200 / Team (Placeholder)",
    prizePool: "₹15,000",
    date: "Day 01 (11:30 AM - 04:30 PM)",
    venue: "Software Systems Lab, 3rd Floor",
    tags: ["WEB", "FRONTEND", "UI/UX", "REACT", "PERFORMANCE"],
    accentColor: "#38bdf8",
    code: "WC",
    rounds: [
      {
        roundNumber: "ROUND 01",
        title: "Pixel-Perfect Speed Sprint",
        duration: "90 Minutes",
        format: "UI Reconstruction & Responsive Challenge",
        task: "Reconstruct a complex, animated dashboard UI from a provided Figma mockup with pixel precision and fluid responsiveness.",
        scoring: "Fidelity to Design (40%), Responsive Breakpoints (30%), Code Cleanliness (30%)",
        qualification: "Top 10 participants qualify for the feature build."
      },
      {
        roundNumber: "ROUND 02",
        title: "Full Feature Craft & Optimization",
        duration: "2.5 Hours",
        format: "Interactive Web Application Development",
        task: "Integrate dynamic state, live API data, micro-interactions, dark/light themes, and achieve a 95+ Lighthouse score.",
        scoring: "User Experience & Animations (35%), Performance & Accessibility (35%), Architecture (30%)",
        qualification: "Top 3 declared winners."
      }
    ],
    rules: [
      "Modern web frameworks (React, Vue, Svelte, or Vanilla HTML/CSS/JS) and Tailwind CSS are allowed.",
      "Pre-built commercial templates and site builders (Webflow, Wix, etc.) are strictly prohibited.",
      "Work must be responsive across 320px to 2560px screen widths.",
      "Lighthouse performance, accessibility, and SEO audits will be executed by judges."
    ],
    judgingCriteria: [
      "Design Polish & Micro-Interactions (35%)",
      "Performance & Responsive Behavior (30%)",
      "Code Modularity & Semantic HTML (20%)",
      "Creativity & Added Value Features (15%)"
    ],
    eligibility: [
      "Open to all enrolled college students with valid student credentials.",
      "Solo participants or pairs are welcome."
    ],
    submissionRequirements: [
      "Deployed link (Netlify, Vercel, or GitHub Pages)",
      "Clean GitHub repository with clean commit history"
    ],
    coordinator: {
      faculty: "Prof. Deepa V. (Associate Prof., CSE)",
      facultyContact: "+91 98765 43211",
      student: "Kiran Kumar & Tanvi Bhat",
      studentContact: "+91 92345 67890",
      email: "webcraft@vigyantra.org"
    }
  },
  {
    id: "neuralnexus",
    number: "03",
    name: "NEURALNEXUS",
    subName: "AI Challenge",
    category: "ai",
    categoryLabel: "AI & DATA",
    shortDescription: "Solve intricate real-world machine learning benchmarks, computer vision puzzles, and LLM reasoning challenges.",
    description: "NEURALNEXUS brings together data scientists, ML engineers, and AI researchers. Participants will be provided with proprietary noisy datasets to train, tune, and deploy predictive models and multimodal reasoning pipelines.",
    teamSize: "2 - 3 Members",
    minTeam: 2,
    maxTeam: 3,
    registrationFee: "₹250 / Team (Placeholder)",
    prizePool: "₹20,000",
    date: "Day 01 (10:30 AM - 05:00 PM)",
    venue: "AI & Machine Intelligence Center",
    tags: ["AI", "MACHINE LEARNING", "COMPUTER VISION", "LLM", "PYTHON"],
    accentColor: "#f59e0b",
    code: "NN",
    rounds: [
      {
        roundNumber: "ROUND 01",
        title: "Model Accuracy & Benchmark Sprint",
        duration: "3 Hours",
        format: "Kaggle-style Competitive Leaderboard",
        task: "Clean, preprocess, and train baseline predictive models on an unseen tabular/vision dataset to optimize F1-score/RMSE.",
        scoring: "Automated test split accuracy & metrics on live leaderboard (100%)",
        qualification: "Top 8 teams qualify for the GenAI & Application Defense."
      },
      {
        roundNumber: "ROUND 02",
        title: "GenAI & Agentic Pipeline Defense",
        duration: "2 Hours",
        format: "End-to-End Inference Application & Jury Defense",
        task: "Wrap models into a functional API or RAG agent pipeline with explainability visualizations and ethical guardrails.",
        scoring: "Model Explainability (35%), Inference Speed & Latency (30%), Pipeline Architecture (35%)",
        qualification: "Top 2 teams awarded podium positions."
      }
    ],
    rules: [
      "Use of PyTorch, TensorFlow, Scikit-learn, HuggingFace, and Python data stack is recommended.",
      "Access to external pre-trained open weights (e.g., HuggingFace hub) is allowed with proper citation.",
      "Data leakage or training on validation/holdout sets triggers immediate disqualification.",
      "Jupyter notebooks and reproducible Docker or environment files must be submitted."
    ],
    judgingCriteria: [
      "Model Generalization & F1/Accuracy Metrics (40%)",
      "Feature Engineering & Data Pipeline Ingenuity (25%)",
      "Model Explainability (SHAP/LIME) & Guardrails (20%)",
      "Oral Defense & Technical Clarity (15%)"
    ],
    eligibility: [
      "Undergraduate and Postgraduate students from any engineering branch.",
      "Basic familiarity with Python and Machine Learning concepts."
    ],
    submissionRequirements: [
      "Executed Jupyter Notebook with clear markdown explanations",
      "Serialized model weights and requirements.txt",
      "Slide deck summarizing architectural insights"
    ],
    coordinator: {
      faculty: "Dr. Arvind K. (Head, AI Research Cell)",
      facultyContact: "+91 98765 43212",
      student: "Varun Shenoy & Ananya Dixit",
      studentContact: "+91 93456 78901",
      email: "neuralnexus@vigyantra.org"
    }
  },
  {
    id: "roboclash",
    number: "04",
    name: "ROBOCLASH",
    subName: "Robotics Arena",
    category: "robotics",
    categoryLabel: "HARDWARE & ROBOTICS",
    shortDescription: "Custom-engineered bots battle in an intense tactical obstacle course, line tracing, and robo-combat colosseum.",
    description: "ROBOCLASH is the premier robotics spectacle of the Silver Jubilee. Autonomous and manually controlled bots navigate multi-terrain hazard tracks, execute precision maneuvers, and compete in the ultimate robo-clash arena.",
    teamSize: "2 - 4 Members",
    minTeam: 2,
    maxTeam: 4,
    registrationFee: "₹350 / Team (Placeholder)",
    prizePool: "₹25,000",
    date: "Day 02 (10:00 AM - 04:00 PM)",
    venue: "Main Amphitheatre & Robotics Arena",
    tags: ["ROBOTICS", "EMBEDDED", "ARDUINO", "HARDWARE", "COMBAT"],
    accentColor: "#38bdf8",
    code: "RC",
    rounds: [
      {
        roundNumber: "ROUND 01",
        title: "All-Terrain Obstacle & Speed Run",
        duration: "5 Mins / Bot Run",
        format: "Timed Autonomous & Teleoperated Course",
        task: "Bots must navigate ramps, gravel pits, dynamic gates, and bridge obstacles within minimum time with zero penalties.",
        scoring: "Time elapsed (60%), Obstacle completion points (40%), Penalty deductions",
        qualification: "Fastest 8 bots advance to the Deathmatch Arena."
      },
      {
        roundNumber: "ROUND 02",
        title: "Robo-Combat Colosseum",
        duration: "3 Mins / Match",
        format: "Head-to-Head Elimination Matches",
        task: "Direct bot-versus-bot clash inside a fortified arena with hazards, pits, and push zones.",
        scoring: "Immobilization (Direct Win), Damage & Aggression points (100%)",
        qualification: "Finalists battle for Silver Jubilee Champion Trophy."
      }
    ],
    rules: [
      "Bot weight must not exceed 5.0 kg (allowance +2% max).",
      "Maximum dimensions: 40cm x 40cm x 40cm at startup.",
      "Power source must be on-board; maximum voltage permitted is 24V DC.",
      "No hazardous chemical, flame, or projectile weapons are allowed.",
      "All bots must feature a physical kill-switch accessible from outside the chassis."
    ],
    judgingCriteria: [
      "Chassis Structural Integrity & Durability (30%)",
      "Driver Maneuverability & Precision (30%)",
      "Autonomous Navigation & Sensing Quality (20%)",
      "Arena Aggression & Tactical Execution (20%)"
    ],
    eligibility: [
      "Open to inter-college and intra-college engineering teams.",
      "Team members may represent multiple engineering departments."
    ],
    submissionRequirements: [
      "Bot Technical Specification Sheet",
      "Safety Inspection Clearance Certificate (issued at venue)"
    ],
    coordinator: {
      faculty: "Prof. S. Manjunath (Mechanical & Mechatronics)",
      facultyContact: "+91 98765 43213",
      student: "Nikhil Gowda & Prateek Joshi",
      studentContact: "+91 94567 89012",
      email: "roboclash@vigyantra.org"
    }
  },
  {
    id: "cybershield",
    number: "05",
    name: "CYBERSHIELD",
    subName: "Capture The Flag (CTF)",
    category: "cybersecurity",
    categoryLabel: "CYBERSECURITY",
    shortDescription: "An adrenaline-pumping cybersecurity gauntlet spanning reverse engineering, web exploitation, crypto, and digital forensics.",
    description: "CYBERSHIELD puts ethical hackers into a simulated adversarial proving ground. Competitors race against time to discover zero-day vulnerabilities, crack cipher suites, reverse engineer binaries, and capture secret flags.",
    teamSize: "1 - 3 Members",
    minTeam: 1,
    maxTeam: 3,
    registrationFee: "₹200 / Team (Placeholder)",
    prizePool: "₹15,000",
    date: "Day 01 (01:00 PM - 06:00 PM)",
    venue: "Information Security Lab, 2nd Floor",
    tags: ["CYBERSECURITY", "CTF", "CRYPTOGRAPHY", "REVERSE ENG", "ETHICAL HACKING"],
    accentColor: "#38bdf8",
    code: "CY",
    rounds: [
      {
        roundNumber: "ROUND 01",
        title: "Jeopardy-Style Security Gauntlet",
        duration: "3.5 Hours",
        format: "Live Dynamic Scoring CTF Server",
        task: "Solve tiered challenges across Web Exploitation, Cryptography, Reverse Engineering, OSINT, and Memory Forensics.",
        scoring: "Dynamic flag point values (points decay based on number of solves)",
        qualification: "Top 6 teams enter the Attack-Defense Final."
      },
      {
        roundNumber: "ROUND 02",
        title: "Live Defense & Vulnerability Patching",
        duration: "1.5 Hours",
        format: "Vulnerable Service Hardening & Live Patching",
        task: "Patch a vulnerable web service while maintaining availability uptime and warding off automated exploit scripts.",
        scoring: "Uptime SLA (50%), Defense effectiveness (50%)",
        qualification: "Winner & Runner-Up declared."
      }
    ],
    rules: [
      "Attacking the CTF infrastructure or network equipment is strictly prohibited and results in immediate disqualification.",
      "Sharing flags or solutions between distinct teams is prohibited.",
      "Use of automated scanners (e.g., Dirbuster, sqlmap) is permitted only against designated target boxes.",
      "Participants must bring their own laptops with required security distros (Kali, Parrot, etc.)."
    ],
    judgingCriteria: [
      "Total CTF Score on Automated Platform (60%)",
      "Writeup Quality & Methodology Depth (25%)",
      "Speed of Execution (15%)"
    ],
    eligibility: [
      "All students currently enrolled in undergraduate or postgraduate university degree programs.",
      "Valid institutional credentials mandatory."
    ],
    submissionRequirements: [
      "Platform flag submissions via local competition network",
      "Executive summary write-up of top 3 complex solves"
    ],
    coordinator: {
      faculty: "Dr. H. C. Srinivas (Cyber Defense Dept.)",
      facultyContact: "+91 98765 43214",
      student: "Darshan Hegde & Rohit K.",
      studentContact: "+91 95678 90123",
      email: "cybershield@vigyantra.org"
    }
  },
  {
    id: "technoquest",
    number: "06",
    name: "TECHNO QUEST",
    subName: "Tech ConnecXion",
    category: "quiz",
    categoryLabel: "QUIZ & BRAIN-STORM",
    shortDescription: "The ultimate technical quiz and puzzle nexus combining cryptic tech trivia, visual connections, and rapid-fire buzzers.",
    description: "TECHNO QUEST is an electrifying brain sport for tech enthusiasts. From decrypting visual connect clues to identifying legendary computer scientists, hardware schematics, and sci-fi tech Easter eggs, this event celebrates intellectual agility.",
    teamSize: "2 Members",
    minTeam: 2,
    maxTeam: 2,
    registrationFee: "₹150 / Team (Placeholder)",
    prizePool: "₹10,000",
    date: "Day 01 (10:30 AM - 01:30 PM)",
    venue: "Seminar Hall 1, Admin Block",
    tags: ["TECH QUIZ", "TRIVIA", "PUZZLES", "LOGIC", "RAPID FIRE"],
    accentColor: "#f59e0b",
    code: "TQ",
    rounds: [
      {
        roundNumber: "ROUND 01",
        title: "Cryptic ConnecXion Prelims",
        duration: "45 Minutes",
        format: "Pen-and-Paper Written Elimination Round",
        task: "Identify 30 hidden tech concepts, acronyms, company acquisitions, and inventors from multi-image connection grids.",
        scoring: "1 mark per correct answer; negative marks for unattempted visual bonus.",
        qualification: "Top 6 teams qualify on stage for the Grand Finale."
      },
      {
        roundNumber: "ROUND 02",
        title: "On-Stage Buzzer & Rapid-Fire Showdown",
        duration: "90 Minutes",
        format: "Live On-Stage Multimedia Quiz with 5 Specialized Rounds",
        task: "Rounds include: The Infinite Loop (Buzzer), Code Decryption, Tech Chronology, and the High-Stakes Rapid Fire.",
        scoring: "Live electronic buzzer score system with pass/bounce rules.",
        qualification: "Podium winners crowned on stage."
      }
    ],
    rules: [
      "Strict prohibition of smartphones, smartwatches, and external electronic devices during prelims.",
      "Quizmaster's ruling is binding and final on all disputed answers.",
      "In case of a tie in the preliminary round, predetermined star questions will be evaluated.",
      "Both team members must belong to an accredited educational institution."
    ],
    judgingCriteria: [
      "Accuracy and speed of recall",
      "Deductive lateral thinking in connect rounds",
      "Strategic risk management in negative marking rounds"
    ],
    eligibility: [
      "Open to students from all college years and disciplines.",
      "Teams must register as pairs."
    ],
    submissionRequirements: [
      "Preliminary round answer sheets handed to invigilators at end of Round 1"
    ],
    coordinator: {
      faculty: "Prof. Rekha B. (Information Science)",
      facultyContact: "+91 98765 43215",
      student: "Harshith Babu & Hithesh Singh",
      studentContact: "+91 96789 01234",
      email: "technoquest@vigyantra.org"
    }
  },
  {
    id: "innovatex",
    number: "07",
    name: "INNOVATEX",
    subName: "Project Expo & Ideathon",
    category: "project",
    categoryLabel: "PROJECT & INNOVATION",
    shortDescription: "Showcase breakthrough final year projects, hardware prototypes, and patented scientific innovations to industry titans.",
    description: "INNOVATEX is the flagship innovation showcase of the Silver Jubilee. Students exhibit hardware working prototypes, software platforms, and patent-ready inventions before an elite panel of researchers, venture capitalists, and academic leaders.",
    teamSize: "2 - 4 Members",
    minTeam: 2,
    maxTeam: 4,
    registrationFee: "₹300 / Team (Placeholder)",
    prizePool: "₹25,000",
    date: "Day 02 (09:30 AM - 03:30 PM)",
    venue: "Main Indoor Sports & Exhibition Hall",
    tags: ["EXPO", "INNOVATION", "HARDWARE", "STARTUP", "PATENTS"],
    accentColor: "#f59e0b",
    code: "IX",
    rounds: [
      {
        roundNumber: "ROUND 01",
        title: "Stall Exhibit & Peer Demonstration",
        duration: "3 Hours",
        format: "Interactive Booth Exhibition & Poster Display",
        task: "Present live working hardware/software models to visiting delegates, peers, and preliminary evaluators.",
        scoring: "Working Prototype (35%), Commercial Viability (25%), Poster Quality (20%), Demonstration (20%)",
        qualification: "Top 8 projects advance to the Grand Boardroom Defense."
      },
      {
        roundNumber: "ROUND 02",
        title: "Boardroom Investor Pitch & Q&A",
        duration: "12 Mins / Team",
        format: "Formal PPT & Live Model Defense before Jury",
        task: "Pitch market viability, intellectual property, technical scalability, and societal impact.",
        scoring: "Innovation (30%), Feasibility & Impact (30%), Technical Execution (25%), Defense (15%)",
        qualification: "Gold & Silver Jubilee Innovation Laurels awarded."
      }
    ],
    rules: [
      "The working prototype must be physically demonstrated at the allotted expo booth.",
      "Teams must bring their own extension boards and specialized peripherals.",
      "Flex banner / poster of size 3x2 feet should accompany the exhibit stall.",
      "Plagiarized or commercially purchased turnkey projects lead to immediate blacklisting."
    ],
    judgingCriteria: [
      "Originality and Intellectual Property Depth (30%)",
      "Societal, Environmental or Commercial Impact (25%)",
      "Hardware/Software Engineering Quality (25%)",
      "Presentation and Live Demonstration (20%)"
    ],
    eligibility: [
      "Open to Diploma, UG, and PG students of all engineering institutions.",
      "Capstone, final year, and extracurricular research projects are welcomed."
    ],
    submissionRequirements: [
      "2-page Project Abstract & Architecture Diagram",
      "Working model / prototype for live stall display",
      "Standard A1/3x2 format project poster"
    ],
    coordinator: {
      faculty: "Dr. K. N. Prakash (Dean of Research)",
      facultyContact: "+91 98765 43216",
      student: "Siddharth Rao & Pooja Hegde",
      studentContact: "+91 97890 12345",
      email: "innovatex@vigyantra.org"
    }
  },
  {
    id: "circuitmania",
    number: "08",
    name: "CIRCUIT MANIA",
    subName: "Hardware & Esports Tech",
    category: "hardware",
    categoryLabel: "HARDWARE & ESPORTS",
    shortDescription: "A dual-stage thrill combining circuit debugging, PCB breadboard speed-wiring, and high-performance competitive gaming.",
    description: "CIRCUIT MANIA merges the precision of electronic circuit design with the tactical reflexes of competitive esports. Engineers debug complex silicon circuitry and trace faults before taking the stage in high-frame-rate tactical gameplay.",
    teamSize: "2 - 4 Members",
    minTeam: 2,
    maxTeam: 4,
    registrationFee: "₹250 / Team (Placeholder)",
    prizePool: "₹15,000",
    date: "Day 02 (11:00 AM - 05:00 PM)",
    venue: "VLSI & Embedded Systems Laboratory",
    tags: ["CIRCUITS", "ELECTRONICS", "ESPORTS", "DEBUGGING", "HARDWARE"],
    accentColor: "#38bdf8",
    code: "CM",
    rounds: [
      {
        roundNumber: "ROUND 01",
        title: "Silicon Bug Hunt & Breadboard Rush",
        duration: "60 Minutes",
        format: "Hands-on Hardware Circuit Assembly & Oscilloscope Debugging",
        task: "Identify intentionally planted faults in an analog-digital circuit, calculate component values, and wire the working output.",
        scoring: "Speed of circuit completion (50%), Signal accuracy on oscilloscope (50%)",
        qualification: "Top 8 teams advance to the tactical esports arena."
      },
      {
        roundNumber: "ROUND 02",
        title: "Tactical LAN Tournament (Valorant / BGMI)",
        duration: "3 Hours",
        format: "Double-Elimination LAN Bracket",
        task: "Battle against opposing teams in intense tactical round-based LAN matches under tournament guidelines.",
        scoring: "Round differentials, K/D scores, and objective control.",
        qualification: "Tournament champions crowned."
      }
    ],
    rules: [
      "All electronic components and testing equipment will be provided at the lab.",
      "Participants are welcome to bring their own gaming peripherals (mouse, headset, keyboard).",
      "Use of scripts, hacks, or third-party exploits in esports rounds results in immediate disqualification.",
      "Good sportsmanship and professional decorum are strictly enforced."
    ],
    judgingCriteria: [
      "Circuit Debugging Speed & Accuracy (50%)",
      "Tournament Bracket Match Victories (50%)"
    ],
    eligibility: [
      "Open to all enrolled college and university students.",
      "Teams of 2 to 4 players."
    ],
    submissionRequirements: [
      "Hardware circuit verification stamp from lab evaluator",
      "Player gamer tags & verified college ID"
    ],
    coordinator: {
      faculty: "Prof. Vinay Kumar (ECE Dept.)",
      facultyContact: "+91 98765 43217",
      student: "Gautam Shenoy & Karthik M.",
      studentContact: "+91 98901 23456",
      email: "circuitmania@vigyantra.org"
    }
  }
];

const SCHEDULE_DATA = {
  day1: {
    label: "DAY 01",
    date: "October 15, 2026 (Placeholder)",
    theme: "Ignition & Flagship Prelims",
    events: [
      {
        time: "07:30 - 08:30",
        title: "Participant Registration & Welcome Kit Distribution",
        tag: "ON-CAMPUS CHECKIN",
        description: "Welcome desk check-in, college ID verification, kit distribution, and breakfast for registered delegates.",
        venue: "Main Campus Quadrangle"
      },
      {
        time: "08:30 - 09:30",
        title: "Silver Jubilee Inaugural Ceremony",
        tag: "CEREMONY",
        description: "Lighting of the lamp, presidential address by dignitaries, unveiling of the Silver Jubilee Souvenir, and keynote on 25 Years of Engineering Legacy.",
        venue: "Dr. APJ Abdul Kalam Auditorium"
      },
      {
        time: "09:30 - 10:30",
        title: "Symposium Keynote & Industry 4.0 Address",
        tag: "KEYNOTE",
        description: "Distinguished guest lecture by prominent Silicon City technologists on future frontiers in AI, Cyber Defense, and Hardware.",
        venue: "Dr. APJ Abdul Kalam Auditorium"
      },
      {
        time: "10:30 - 13:00",
        title: "Technical Events Round 01 Commences",
        tag: "FLAGSHIP ROUNDS",
        description: "Concurrent kickoff of CODESTORM (Ideation & 24h Sprint), WEBCRAFT (Speed Sprint), NEURALNEXUS (Benchmark Challenge), and TECHNO QUEST (Prelims).",
        venue: "Respective Labs & Seminar Halls"
      },
      {
        time: "13:00 - 14:00",
        title: "Networking Luncheon",
        tag: "BREAK",
        description: "Complimentary lunch and student networking lounge for all registered participants and faculty mentors.",
        venue: "Campus Banquet Arena"
      },
      {
        time: "14:00 - 18:00",
        title: "Technical Sessions & Sprint Continuations",
        tag: "HACK SPRINT",
        description: "CYBERSHIELD CTF kickoff, WEBCRAFT finals, NEURALNEXUS Round 2 defense, and continuous overnight hacking for CODESTORM teams.",
        venue: "Computing Labs & IT Block"
      },
      {
        time: "18:00 - 18:30",
        title: "Day 01 Evaluation Checkpoint & Wrap-Up",
        tag: "WRAP-UP",
        description: "Announcement of Day 1 qualifier teams and security clearance for overnight hackathon developers.",
        venue: "Auditorium Foyer"
      }
    ]
  },
  day2: {
    label: "DAY 02",
    date: "October 16, 2026 (Placeholder)",
    theme: "Grand Arena & Silver Jubilee Valedictory",
    events: [
      {
        time: "08:30 - 09:30",
        title: "Day 02 Assembly & Morning Refreshments",
        tag: "ASSEMBLY",
        description: "Breakfast and checkpoint review for ongoing overnight teams and incoming Day 2 participants.",
        venue: "Main Foyer"
      },
      {
        time: "09:30 - 13:00",
        title: "INNOVATEX (Project Expo) & ROBOCLASH (Obstacle Arena)",
        tag: "EXPO & ROBOTICS",
        description: "Public exhibition of cutting-edge working prototypes in the Indoor Arena alongside high-speed obstacle runs in ROBOCLASH.",
        venue: "Indoor Sports Complex & Amphitheatre"
      },
      {
        time: "11:00 - 13:00",
        title: "CIRCUIT MANIA (Hardware Debugging & LAN Esports)",
        tag: "DUAL ARENA",
        description: "Silicon bug hunt in VLSI lab followed by high-octane esports tournament bracket matches.",
        venue: "VLSI Center & Esports Arena"
      },
      {
        time: "13:00 - 14:00",
        title: "Lunch & Cultural Intermission",
        tag: "LUNCH & MUSIC",
        description: "Lunch followed by a short celebratory musical performance by the college band celebrating 25 years.",
        venue: "Open Air Amphitheatre"
      },
      {
        time: "14:00 - 16:00",
        title: "CODESTORM Grand Jury Demos & ROBOCLASH Combat Finals",
        tag: "GRAND FINALES",
        description: "Top 5 hackathon teams present live to industry leaders, while battle bots clash in the Robo Deathmatch colosseum.",
        venue: "Auditorium & Arena"
      },
      {
        time: "16:00 - 17:30",
        title: "Silver Jubilee Valedictory Ceremony & Prize Distribution",
        tag: "CEREMONY",
        description: "Felicitation of winners, distribution of ₹1,00,000+ cash prizes, 25-year commemorative silver trophies, and certificates.",
        venue: "Dr. APJ Abdul Kalam Auditorium"
      },
      {
        time: "17:30 - 18:00",
        title: "Vote of Thanks & Official Symposium Closure",
        tag: "CLOSING",
        description: "Address by Convenor, group photograph of all participants, and national anthem.",
        venue: "Auditorium Quadrangle"
      }
    ]
  }
};

const PRIZES_DATA = [
  {
    title: "GRAND CASH PRIZES",
    amount: "₹1,00,000+",
    subtitle: "Across All 8 Flagship Arenas",
    description: "Generous cash awards for 1st Place Champions and 2nd Place Runners-Up across every individual technical event.",
    highlight: true,
    icon: "banknote"
  },
  {
    title: "SILVER JUBILEE TROPHIES",
    amount: "Commemorative 25th Edition",
    subtitle: "Custom Cast Platinum Metal",
    description: "Prestigious engraved 25-Year Silver Jubilee trophies awarded to the top winning teams as an enduring hallmark of prestige.",
    highlight: false,
    icon: "trophy"
  },
  {
    title: "CERTIFICATES OF EXCELLENCE",
    amount: "Merit Badges",
    subtitle: "Authenticated & Verifiable",
    description: "High-grade certificates signed by university leadership, keynote industry guests, and technical council leads.",
    highlight: false,
    icon: "file-check"
  },
  {
    title: "CERTIFICATES OF PARTICIPATION",
    amount: "For All Registered Delegates",
    subtitle: "Universal Recognition",
    description: "Every student presenting or participating in Vigyantra 2026 receives an accredited certificate honoring their technical spirit.",
    highlight: false,
    icon: "award"
  },
  {
    title: "SPECIAL AWARDS",
    amount: "Category Laurels",
    subtitle: "Best Innovation, Best UI/UX, Fair Play",
    description: "Recognizing outstanding creativity, best all-women tech team, green technology innovation, and exceptional sportsmanship.",
    highlight: false,
    icon: "sparkles"
  },
  {
    title: "INCUBATION & MENTORSHIP",
    amount: "Startup Launchpad",
    subtitle: "VC & Innovation Cell Connect",
    description: "Top selected projects from INNOVATEX and CODESTORM earn direct fast-track evaluation for college incubation funding and industry mentorship.",
    highlight: false,
    icon: "rocket"
  }
];

const GUIDELINES_DATA = [
  {
    id: "eligibility",
    title: "ELIGIBILITY & ENROLLMENT",
    content: "All undergraduate and postgraduate engineering, polytechnic, science, and computer applications (BE/BTech, ME/MTech, BCA, MCA, BSc) students from recognized universities and institutions across India are eligible to participate."
  },
  {
    id: "team-formation",
    title: "TEAM FORMATION & CROSS-COLLEGE TEAMS",
    content: "Team sizes vary by event (typically 1 to 4 members). Cross-college and inter-departmental teams are fully permitted in all events, encouraging collaborative innovation."
  },
  {
    id: "college-id",
    title: "MANDATORY COLLEGE ID & VERIFICATION",
    content: "All participants must carry their original institutional physical identity card (or valid bonafide certificate with photo) for physical check-in at the registration desk on event day."
  },
  {
    id: "registration-procedure",
    title: "REGISTRATION & CONFIRMATION",
    content: "Registrations can be completed online via the symposium portal. Participants must confirm event selection and review team member details. Spot registration is subject strictly to remaining slot availability."
  },
  {
    id: "submissions",
    title: "SUBMISSION STANDARDS & REPOSITORIES",
    content: "All code, documentation, slide decks, and project models must be submitted through designated channels (GitHub links, drive folders, or lab evaluators) before the stipulated event round deadlines."
  },
  {
    id: "fair-play",
    title: "FAIR PLAY & INTEGRITY",
    content: "Any form of malpractice, tampering with opponent hardware, sniffing network packets outside designated CTF target servers, or disrupting competition infrastructure results in immediate blacklisting."
  },
  {
    id: "code-of-conduct",
    title: "CAMPUS CODE OF CONDUCT",
    content: "Participants must maintain professional decorum, adhere to campus discipline, respect event volunteers and faculty coordinators, and wear their symposium delegate badge at all times."
  },
  {
    id: "ai-tool-usage",
    title: "AI TOOL USAGE POLICY",
    content: "Use of AI tools (e.g., Copilot, LLMs) is permitted for syntax assistance and scaffolding where explicitly allowed by event rules, but core logic, architectural defenses, and originality must be authored and explained by the team."
  },
  {
    id: "plagiarism",
    title: "PLAGIARISM & PRE-BUILT CODE",
    content: "All submissions are subjected to automated code similarity checks. Pre-built projects or commercial templates authored prior to the event announcement will be disqualified immediately."
  },
  {
    id: "disqualification",
    title: "GROUNDS FOR DISQUALIFICATION",
    content: "Impersonation, falsification of team credentials, harassment, refusal to adhere to safety measures in the robotics arena, or intentional damage to lab equipment will incur instant disqualification without refund."
  },
  {
    id: "judging",
    title: "JUDGING & DECISION FINALITY",
    content: "The decisions of the independent industry jury, keynote evaluators, and faculty convenors are final and binding. No appeals or external contestations will be entertained."
  }
];

const FAQ_DATA = [
  {
    q: "Who can participate in Vigyantra 2026?",
    a: "Any student actively pursuing an undergraduate, postgraduate, or diploma course in Engineering, Technology, Computer Applications, or Applied Sciences from an accredited college or university is welcome to participate."
  },
  {
    q: "What is the team size for the events?",
    a: "Team size depends on the specific event: CODESTORM (2-4), WEBCRAFT (1-2), NEURALNEXUS (2-3), ROBOCLASH (2-4), CYBERSHIELD (1-3), TECHNO QUEST (2), INNOVATEX (2-4), and CIRCUIT MANIA (2-4). You can check exact details inside each event modal."
  },
  {
    q: "Can students from different colleges form a team?",
    a: "Yes! Cross-college and cross-year teams are warmly encouraged across all 8 flagship technical events."
  },
  {
    q: "Are first-year students eligible to compete?",
    a: "Absolutely. We encourage first-year innovators to participate. Several events, like TECHNO QUEST, WEBCRAFT, and CODESTORM, feature dedicated mentorship and student-friendly challenges."
  },
  {
    q: "Is spot registration available on the day of the event?",
    a: "Online pre-registration is strongly recommended as arena seats and lab terminals are capped. Spot registration may be accommodated only if vacant slots remain on the morning of Day 1."
  },
  {
    q: "What is the registration fee?",
    a: "Nominal per-team registration fees (₹150 to ₹350 per team) cover event participation, official delegate kits, certificates, and refreshments. Exact placeholder fees are listed per event in the event details."
  },
  {
    q: "Are certificates provided to all participants?",
    a: "Yes. All registered attendees who participate in their respective events will receive an official Certificate of Participation. Podium winners receive Certificates of Excellence along with cash prizes and trophies."
  },
  {
    q: "Can a participant register for multiple events?",
    a: "Yes, provided the event schedules do not directly conflict. Check the interactive timeline to ensure your selected events take place in non-overlapping time slots."
  },
  {
    q: "Is accommodation available for outstation participants?",
    a: "Limited campus hostel accommodation can be facilitated for verified outstation teams on prior request. Contact the student coordinator desk at least one week prior to the symposium."
  },
  {
    q: "What should participants bring with them?",
    a: "Participants must bring their original College ID cards, personal laptops with chargers, any required software/distros pre-installed, and specific hardware if participating in ROBOCLASH or INNOVATEX."
  },
  {
    q: "Are generative AI tools allowed during competitions?",
    a: "AI tools are permitted for research and syntax suggestions in software tracks, but models and code must be defended live before the judges. Pure copy-pasting of AI outputs without deep conceptual understanding will fail jury audits."
  },
  {
    q: "How are the winners selected?",
    a: "Winners are evaluated on standardized rubrics by an esteemed panel of external industry practitioners, senior academicians, and domain specialists. Detailed criteria are listed in each event modal."
  }
];

const BROCHURE_PAGES = [
  {
    page: 1,
    title: "COVER",
    subtitle: "25 Years of Engineering Excellence",
    content: `
      <div class="brochure-cover">
        <div class="brochure-badge">SILVER JUBILEE EDITION</div>
        <h1 class="brochure-title">VIGYANTRA 2026</h1>
        <p class="brochure-tagline">NATIONAL TECHNICAL SYMPOSIUM</p>
        <div class="brochure-accent-line"></div>
        <p class="brochure-desc">Celebrating a quarter century of technical distinction, pioneering ideas, and engineering brilliance.</p>
        <div class="brochure-meta-grid">
          <div><strong>8</strong> Flagship Events</div>
          <div><strong>₹1,00,000+</strong> Prize Pool</div>
          <div><strong>1000+</strong> Innovators</div>
        </div>
      </div>
    `
  },
  {
    page: 2,
    title: "ABOUT & LEGACY",
    subtitle: "A Quarter Century of Technical Milestones",
    content: `
      <div class="brochure-section">
        <h3>25 YEARS. ONE LEGACY.</h3>
        <p>Vigyantra 2026 marks the prestigious Silver Jubilee milestone of our institution's premier National Technical Symposium. For twenty-five years, this platform has served as a crucible for ambitious young engineers, bridging classroom theory with high-stakes technical competition.</p>
        <div class="brochure-legacy-track">
          <div class="legacy-step"><span>2001</span> FOUNDATION</div>
          <div class="legacy-step"><span>2008</span> EXPANSION & GROWTH</div>
          <div class="legacy-step"><span>2015</span> INNOVATION ACCELERATOR</div>
          <div class="legacy-step"><span>2020</span> DIGITAL ERA & AUTOMATION</div>
          <div class="legacy-step active"><span>2026</span> SILVER JUBILEE HORIZON</div>
        </div>
        <p>Our 25th edition unites the finest minds across India in coding, artificial intelligence, cyber defense, robotics, and visionary design.</p>
      </div>
    `
  },
  {
    page: 3,
    title: "THE 8 FLAGSHIP EVENTS",
    subtitle: "Arenas of Technical Distinction",
    content: `
      <div class="brochure-events-grid">
        <div class="b-event-item"><strong>01. CODESTORM</strong> — 24H Full-Stack Hackathon (₹25,000)</div>
        <div class="b-event-item"><strong>02. WEBCRAFT</strong> — DevSprint & UI Engineering (₹15,000)</div>
        <div class="b-event-item"><strong>03. NEURALNEXUS</strong> — AI & Machine Learning Challenge (₹20,000)</div>
        <div class="b-event-item"><strong>04. ROBOCLASH</strong> — Combat & Obstacle Arena (₹25,000)</div>
        <div class="b-event-item"><strong>05. CYBERSHIELD</strong> — Jeopardy CTF & Security (₹15,000)</div>
        <div class="b-event-item"><strong>06. TECHNO QUEST</strong> — Tech ConnecXion Quiz (₹10,000)</div>
        <div class="b-event-item"><strong>07. INNOVATEX</strong> — Project Expo & Ideathon (₹25,000)</div>
        <div class="b-event-item"><strong>08. CIRCUIT MANIA</strong> — Hardware & Esports Tech (₹15,000)</div>
      </div>
    `
  },
  {
    page: 4,
    title: "SCHEDULE & TIMELINE",
    subtitle: "Two Days of High-Intensity Engineering",
    content: `
      <div class="brochure-schedule">
        <h4>DAY 01 — IGNITION & SPRINT</h4>
        <ul>
          <li>07:30 — Registration & Check-in</li>
          <li>08:30 — Grand Inaugural Ceremony</li>
          <li>10:30 — Hackathons & Technical Prelims Begin</li>
          <li>14:00 — Hack Sprints & Defense Sessions</li>
        </ul>
        <h4 style="margin-top:16px;">DAY 02 — FINALS & CELEBRATION</h4>
        <ul>
          <li>09:30 — Project Expo (INNOVATEX) & ROBOCLASH Combat</li>
          <li>11:00 — CIRCUIT MANIA Debugging & LAN Tournament</li>
          <li>16:00 — Silver Jubilee Valedictory & Prize Distribution</li>
        </ul>
      </div>
    `
  },
  {
    page: 5,
    title: "PRIZES & REWARDS",
    subtitle: "Hall of Glory",
    content: `
      <div class="brochure-section">
        <h3>₹1,00,000+ TOTAL PRIZE POOL</h3>
        <p>In celebration of the 25th Silver Jubilee Edition, top winners receive grand cash prizes, commemorative silver trophies, and certificates of excellence.</p>
        <div class="brochure-prizes-list">
          <div>🏆 <strong>1st Place Champions</strong>: Cash Prize + Silver Trophy + Merit Certificate</div>
          <div>🥈 <strong>2nd Place Runners-Up</strong>: Cash Prize + Trophy + Merit Certificate</div>
          <div>📜 <strong>All Participants</strong>: Accredited Certificate of Participation</div>
          <div>🚀 <strong>Top Innovations</strong>: Incubation & Mentorship Opportunities</div>
        </div>
      </div>
    `
  },
  {
    page: 6,
    title: "GUIDELINES & CONTACT",
    subtitle: "Participation Protocols & Connect",
    content: `
      <div class="brochure-section">
        <h4>GENERAL GUIDELINES</h4>
        <p>• Mandatory college ID for all team members.<br>
           • Cross-college teams are welcome.<br>
           • Strict code of conduct & zero-tolerance plagiarism policy.</p>
        <h4 style="margin-top:16px;">CONNECT WITH ORGANIZERS</h4>
        <p>Email: contact@vigyantra.org | Phone: +91 98765 43210<br>
        Campus: SJBIT Campus, BGS Health & Education City, Bengaluru, Karnataka, India<br>
        Website: vigyantra2026.vercel.app</p>
      </div>
    `
  }
];

// Export to window for global browser access
window.SYMPOSIUM_CONFIG = SYMPOSIUM_CONFIG;
window.STATS_DATA = STATS_DATA;
window.EVENTS_DATA = EVENTS_DATA;
window.SCHEDULE_DATA = SCHEDULE_DATA;
window.PRIZES_DATA = PRIZES_DATA;
window.GUIDELINES_DATA = GUIDELINES_DATA;
window.FAQ_DATA = FAQ_DATA;
window.BROCHURE_PAGES = BROCHURE_PAGES;
