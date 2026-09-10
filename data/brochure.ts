export interface BrochurePage {
  page: number;
  title: string;
  content: string;
}

export const BROCHURE_PAGES = [
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
