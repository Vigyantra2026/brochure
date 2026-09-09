/**
 * VIGYANTRA 2026 — Next-Gen Cybernetic Interactive Engine
 * SJB Institute of Technology — 25th Silver Jubilee Celebrations
 * Command Deck & Holographic Modals Controller
 */

document.addEventListener('DOMContentLoaded', () => {
  initCinematicIntro();
  initTechUniverseCanvas();
  initCountdown();
  renderEvents();
  initEventFilters();
  initScheduleTabs();
  renderPrizes();
  initAccordions();
  initEventModal();
  initRegistrationModal();
  initBrochureViewer();
  initCardTiltSheen();
  initScrollSectionObserver();
});

/* ==========================================================================
   2. 3D TECH UNIVERSE & COSMIC CANVAS ENGINE
   ========================================================================== */
function initTechUniverseCanvas() {
  const canvas = document.getElementById('universe-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let width, height;
  let cx, cy;
  let animationFrameId;

  let stars = [];
  let constellationNodes = [];
  let polyhedra = [];
  let dataBeams = [];

  let mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };
  let lastW = 0;
  let lastH = 0;

  function resize() {
    const newW = window.innerWidth;
    const newH = window.innerHeight;

    // Avoid clearing canvas & re-randomizing stars on mobile address-bar height toggles
    if (newW === lastW && Math.abs(newH - lastH) < 120) {
      return;
    }

    lastW = newW;
    lastH = newH;
    width = canvas.width = newW;
    height = canvas.height = newH;
    cx = width / 2;
    cy = height / 2;
    initUniverse();
  }

  function initUniverse() {
    const isMobile = width < 768;
    const starCount = isMobile ? 90 : 200;
    const nodeCount = isMobile ? 35 : 70;

    // 1. Deep Space Starfield
    stars = [];
    for (let i = 0; i < starCount; i++) {
      stars.push({
        x: (Math.random() - 0.5) * width * 2,
        y: (Math.random() - 0.5) * height * 2,
        z: Math.random() * 1000 + 100,
        size: Math.random() * 1.5 + 0.5,
        color: Math.random() > 0.8 ? '#f59e0b' : (Math.random() > 0.5 ? '#00f0ff' : '#e2e8f0')
      });
    }

    // 2. Tech Constellation Nodes
    constellationNodes = [];
    for (let i = 0; i < nodeCount; i++) {
      constellationNodes.push({
        x: (Math.random() - 0.5) * width * 1.6,
        y: (Math.random() - 0.5) * height * 1.6,
        z: Math.random() * 700 + 200,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        vz: (Math.random() - 0.5) * 0.3,
        radius: Math.random() * 2 + 1.2,
        color: Math.random() > 0.7 ? 'rgba(245, 158, 11, ' : 'rgba(0, 240, 255, '
      });
    }

    // 3. Floating 3D Geometric Cyber Polyhedra
    polyhedra = [
      {
        x: cx * 0.6,
        y: -cy * 0.4,
        z: 400,
        size: 75,
        rotX: 0,
        rotY: 0,
        speedX: 0.007,
        speedY: 0.01,
        color: 'rgba(0, 240, 255, 0.4)'
      },
      {
        x: -cx * 0.65,
        y: cy * 0.35,
        z: 500,
        size: 85,
        rotX: 0,
        rotY: 0,
        speedX: -0.008,
        speedY: 0.006,
        color: 'rgba(245, 158, 11, 0.3)'
      }
    ];

    dataBeams = [];
  }

  function renderPolyhedron(p) {
    p.rotX += p.speedX;
    p.rotY += p.speedY;

    const rawVertices = [
      [0, -p.size, 0],
      [0, p.size, 0],
      [-p.size, 0, 0],
      [p.size, 0, 0],
      [0, 0, -p.size],
      [0, 0, p.size]
    ];

    const edges = [
      [0, 2], [0, 3], [0, 4], [0, 5],
      [1, 2], [1, 3], [1, 4], [1, 5],
      [2, 4], [4, 3], [3, 5], [5, 2]
    ];

    const projected = rawVertices.map(v => {
      let y1 = v[1] * Math.cos(p.rotX) - v[2] * Math.sin(p.rotX);
      let z1 = v[1] * Math.sin(p.rotX) + v[2] * Math.cos(p.rotX);
      let x2 = v[0] * Math.cos(p.rotY) + z1 * Math.sin(p.rotY);
      let z2 = -v[0] * Math.sin(p.rotY) + z1 * Math.cos(p.rotY);

      const fov = 600;
      const worldZ = z2 + p.z;
      const scale = fov / worldZ;

      return {
        x: cx + (p.x + x2 - mouse.x * 0.15) * scale,
        y: cy + (p.y + y1 - mouse.y * 0.15) * scale
      };
    });

    ctx.strokeStyle = p.color;
    ctx.lineWidth = 1;
    edges.forEach(([i, j]) => {
      ctx.beginPath();
      ctx.moveTo(projected[i].x, projected[i].y);
      ctx.lineTo(projected[j].x, projected[j].y);
      ctx.stroke();
    });
  }

  function animate() {
    const isMobile = window.innerWidth <= 768;
    // When a full-screen modal overlay is active on mobile, skip redrawing the canvas
    // to preserve GPU fillrate and completely prevent background flicker.
    if (isMobile && document.querySelector('.hud-modal-overlay.active, .modal-backdrop.active')) {
      animationFrameId = requestAnimationFrame(animate);
      return;
    }

    ctx.clearRect(0, 0, width, height);

    mouse.x += (mouse.targetX - mouse.x) * 0.05;
    mouse.y += (mouse.targetY - mouse.y) * 0.05;

    // Draw Stars
    const fov = 650;
    for (let i = 0; i < stars.length; i++) {
      const s = stars[i];
      s.z -= 0.6;
      if (s.z <= 0) s.z = 1000;

      const scale = fov / s.z;
      const px = cx + (s.x - mouse.x * 0.2) * scale;
      const py = cy + (s.y - mouse.y * 0.2) * scale;

      if (px >= 0 && px <= width && py >= 0 && py <= height) {
        ctx.beginPath();
        ctx.arc(px, py, s.size * scale * 0.6, 0, Math.PI * 2);
        ctx.fillStyle = s.color;
        ctx.fill();
      }
    }

    // Draw Polyhedra
    polyhedra.forEach(renderPolyhedron);

    // Draw Nodes & Constellation Lines
    const projectedNodes = [];
    for (let i = 0; i < constellationNodes.length; i++) {
      const n = constellationNodes[i];
      n.x += n.vx;
      n.y += n.vy;
      n.z += n.vz;

      if (Math.abs(n.x) > width * 0.8) n.vx *= -1;
      if (Math.abs(n.y) > height * 0.8) n.vy *= -1;
      if (n.z < 200 || n.z > 900) n.vz *= -1;

      const scale = fov / n.z;
      const px = cx + (n.x - mouse.x * 0.3) * scale;
      const py = cy + (n.y - mouse.y * 0.3) * scale;

      projectedNodes.push({ px, py, scale, orig: n });
    }

    for (let i = 0; i < projectedNodes.length; i++) {
      const p1 = projectedNodes[i];
      for (let j = i + 1; j < projectedNodes.length; j++) {
        const p2 = projectedNodes[j];
        const dx = p1.px - p2.px;
        const dy = p1.py - p2.py;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 110) {
          const strength = (1 - dist / 110) * 0.3;
          ctx.beginPath();
          ctx.moveTo(p1.px, p1.py);
          ctx.lineTo(p2.px, p2.py);
          ctx.strokeStyle = `rgba(0, 240, 255, ${strength})`;
          ctx.lineWidth = 0.75;
          ctx.stroke();
        }
      }

      ctx.beginPath();
      ctx.arc(p1.px, p1.py, p1.orig.radius * p1.scale, 0, Math.PI * 2);
      ctx.fillStyle = p1.orig.color + `${0.8 * p1.scale})`;
      ctx.fill();
    }

    animationFrameId = requestAnimationFrame(animate);
  }

  window.addEventListener('resize', resize);
  window.addEventListener('mousemove', (e) => {
    mouse.targetX = e.clientX - cx;
    mouse.targetY = e.clientY - cy;
  });

  resize();
  animate();
}

/* ==========================================================================
   3. 3D CARD TILT & HOLOGRAPHIC LIGHT SHEEN
   ========================================================================= */
function initCardTiltSheen() {
  if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
    return; // Touch/mobile screens do not use mouse hover sheen; avoid layout thrashing
  }
  document.addEventListener('mousemove', (e) => {
    const cards = document.querySelectorAll('.hud-event-card, .prize-card, .venue-card');
    cards.forEach(card => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
    });
  });
}

/* ==========================================================================
   4. DYNAMIC COUNTDOWN TIMER (TO 30 OCTOBER 2026)
   ========================================================================== */
function initCountdown() {
  const daysEl = document.getElementById('cd-days');
  const hoursEl = document.getElementById('cd-hours');
  const minsEl = document.getElementById('cd-mins');
  const secsEl = document.getElementById('cd-secs');

  if (!daysEl || !hoursEl || !minsEl || !secsEl) return;

  const targetDate = new Date(window.SYMPOSIUM_CONFIG?.targetDate || '2026-10-30T09:00:00+05:30').getTime();

  function update() {
    const now = new Date().getTime();
    const diff = targetDate - now;

    if (diff <= 0) {
      daysEl.textContent = '00';
      hoursEl.textContent = '00';
      minsEl.textContent = '00';
      secsEl.textContent = '00';
      return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    daysEl.textContent = String(days).padStart(2, '0');
    hoursEl.textContent = String(hours).padStart(2, '0');
    minsEl.textContent = String(minutes).padStart(2, '0');
    secsEl.textContent = String(seconds).padStart(2, '0');
  }

  update();
  setInterval(update, 1000);
}

/* ==========================================================================
   5. RENDER THE 8 OFFICIAL FLAGSHIP ARENAS MATRIX
   ========================================================================== */
function renderEvents() {
  const container = document.getElementById('events-grid-container');
  if (!container || !window.EVENTS_DATA) return;

  container.innerHTML = window.EVENTS_DATA.map(event => {
    return `
      <article class="hud-event-card" data-category="${event.category}" data-id="${event.id}">
        <div class="hud-card-media">
          <img src="${event.image}" alt="${event.name} — ${event.subName}" class="hud-card-img" loading="lazy" width="600" height="270" />
          <div class="hud-card-media-overlay"></div>
        </div>

        <div class="hud-card-body">
          <div>
            <div class="hud-card-header">
              <div class="hud-event-num-box">
                <span class="hud-event-number">${event.number}</span>
                <div class="hud-event-icon" style="color:${event.accentColor};">${event.iconSvg}</div>
              </div>
              <span class="hud-prize-pill">${event.prizePool} POOL</span>
            </div>

            <h3 class="hud-event-title">${event.name}</h3>
            <div class="hud-event-subtitle">${event.subName}</div>
            <p class="hud-event-desc">${event.shortDescription}</p>

            <div class="hud-poster-tags-wrap">
              ${event.tags.map(t => `<span class="hud-poster-tag">#${t}</span>`).join('')}
            </div>
          </div>

          <div class="hud-card-actions-grid">
            <button class="hud-btn-decrypt" onclick="openEventModal('${event.id}')">
              <span>DECRYPT INTEL →</span>
            </button>
            <button class="hud-btn-enroll" onclick="startRegistrationWithEvent('${event.id}')">
              <span>ENROLL SQUAD ⚡</span>
            </button>
          </div>
        </div>
      </article>
    `;
  }).join('');
}

function initEventFilters() {
  const buttons = document.querySelectorAll('.filter-btn');
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      buttons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');
      const cards = document.querySelectorAll('.hud-event-card');

      cards.forEach(card => {
        const cat = card.getAttribute('data-category');
        if (filter === 'all' || cat === filter) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

function filterEventsBySearch(query) {
  const q = (query || '').toLowerCase().trim();
  const cards = document.querySelectorAll('.hud-event-card');

  cards.forEach(card => {
    const cardText = card.textContent.toLowerCase();
    if (!q || cardText.includes(q)) {
      card.style.display = 'flex';
    } else {
      card.style.display = 'none';
    }
  });
}
window.filterEventsBySearch = filterEventsBySearch;

/* ==========================================================================
   6. EVENT DETAIL VIEW (INTEL DOSSIER)
   ========================================================================== */
function initEventModal() {
  const modal = document.getElementById('event-detail-modal');
  const closeBtn = document.getElementById('event-modal-close');

  if (closeBtn && modal) {
    closeBtn.addEventListener('click', closeEventModal);
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeEventModal();
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal && modal.classList.contains('active')) {
      closeEventModal();
    }
  });
}

function openEventModal(eventId) {
  const event = window.getEventById ? window.getEventById(eventId) : window.EVENTS_DATA?.find(e => e.id === eventId || e.shortName === eventId || e.code === eventId || e.slug === eventId);
  const modal = document.getElementById('event-detail-modal');
  const bodyEl = document.getElementById('event-modal-body');
  if (!event || !modal || !bodyEl) return;

  bodyEl.scrollTop = 0;
  bodyEl.innerHTML = `
    <div class="modal-event-header">
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px;">
        <span class="hud-dialog-tag" style="background:rgba(0,240,255,0.15); border-color:var(--cyan); color:var(--cyan); font-weight:800; font-size:0.8rem;">
          ARENA ${event.number} // ${event.categoryLabel}
        </span>
        <span class="hud-prize-pill" style="font-size:0.85rem; padding:4px 14px;">
          ★ ${event.prizePool || '₹50,000'} PRIZE POOL ★
        </span>
      </div>

      <h2 style="font-family:var(--font-heading); font-size:2.3rem; color:#ffffff; margin-bottom:4px; letter-spacing:0.06em;">
        ${event.name}
      </h2>
      <div style="font-family:var(--font-mono); font-size:0.95rem; color:var(--cyan); letter-spacing:0.12em; font-weight:700; margin-bottom:14px;">
        ${event.subName}
      </div>
      <p style="font-size:0.95rem; color:var(--silver-200); line-height:1.65;">
        ${event.description}
      </p>

      <!-- Key Telemetry Specs -->
      <div class="modal-telemetry-specs-grid">
        <div class="telemetry-spec-card">
          <div class="telemetry-spec-lbl">SQUAD SIZE</div>
          <div class="telemetry-spec-val">${event.teamSize || `${event.minTeam} - ${event.maxTeam} Members`}</div>
        </div>
        <div class="telemetry-spec-card">
          <div class="telemetry-spec-lbl">ARENA PRIZE</div>
          <div class="telemetry-spec-val gold">${event.prizePool || '₹50,000'}</div>
        </div>
        <div class="telemetry-spec-card">
          <div class="telemetry-spec-lbl">ENTRY FEE</div>
          <div class="telemetry-spec-val">${event.registrationFee || `₹${event.fee} / Team`}</div>
        </div>
        <div class="telemetry-spec-card">
          <div class="telemetry-spec-lbl">ARENA LAB</div>
          <div class="telemetry-spec-val" style="font-size:0.82rem;">${event.venue}</div>
        </div>
      </div>
    </div>

    <!-- Official Tactical Rounds -->
    <h3 style="font-family:var(--font-heading); font-size:1.15rem; color:#ffffff; margin:24px 0 14px 0; letter-spacing:0.08em;">
      TACTICAL ROUND PROGRESSION
    </h3>
    ${event.rounds.map(r => `
      <div class="modal-round-card">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:6px;">
          <span class="modal-round-title">${r.roundNumber}: ${r.title}</span>
          <span style="font-family:var(--font-mono); font-size:0.7rem; color:var(--cyan); background:rgba(0,240,255,0.08); padding:2px 8px; border-radius:4px;">${r.duration}</span>
        </div>
        <div class="modal-round-detail"><strong>Format:</strong> ${r.format}</div>
        <div class="modal-round-detail"><strong>Challenge Task:</strong> ${r.task}</div>
        <div class="modal-round-detail"><strong>Scoring Matrix:</strong> ${r.scoring}</div>
        <div class="modal-round-detail"><strong>Advancement:</strong> ${r.qualification}</div>
      </div>
    `).join('')}

    <!-- Protocols & Judging Breakdown -->
    <div style="display:grid; grid-template-columns:1fr 1fr; gap:20px; margin-top:24px;">
      <div style="background:rgba(0,0,0,0.3); border-radius:8px; padding:18px; border:1px solid var(--border-subtle);">
        <h4 style="font-family:var(--font-heading); font-size:0.9rem; color:var(--cyan); margin-bottom:10px;">RULES OF ENGAGEMENT</h4>
        <ul style="padding-left:18px; font-size:0.82rem; color:var(--silver-300); line-height:1.7;">
          ${event.rules.map(rule => `<li>${rule}</li>`).join('')}
        </ul>
      </div>
      <div style="background:rgba(0,0,0,0.3); border-radius:8px; padding:18px; border:1px solid var(--border-subtle);">
        <h4 style="font-family:var(--font-heading); font-size:0.9rem; color:var(--gold); margin-bottom:10px;">EVALUATION CRITERIA</h4>
        <ul style="padding-left:18px; font-size:0.82rem; color:var(--silver-300); line-height:1.7;">
          ${event.judgingCriteria.map(jc => `<li>${jc}</li>`).join('')}
        </ul>
      </div>
    </div>

    <!-- Coordinator Contacts Box -->
    <div style="margin-top:20px; background:rgba(0,240,255,0.04); border:1px solid var(--cyan-border); border-radius:8px; padding:16px;">
      <div style="font-family:var(--font-mono); font-size:0.72rem; font-weight:700; color:var(--cyan); margin-bottom:6px;">ARENA CONVENORS & DESK</div>
      <div style="display:grid; grid-template-columns:1fr 1fr; gap:12px; font-size:0.82rem; color:var(--silver-300);">
        <div><strong>Faculty Lead:</strong> ${event.facultyCoordinator || event.coordinator?.faculty} (${event.contactPhone || event.coordinator?.facultyContact})</div>
        <div><strong>Student Lead:</strong> ${event.studentCoordinator || event.coordinator?.student} (${event.contactPhone || event.coordinator?.studentContact})</div>
      </div>
      ${(event.contactEmail || event.coordinator?.email) ? `
        <div style="margin-top:8px; font-size:0.78rem; color:var(--silver-400);">
          <strong>Official Desk Email:</strong> ${event.contactEmail || event.coordinator?.email}
        </div>
      ` : ''}
    </div>

    <!-- Actions -->
    <div style="display:flex; justify-content:flex-end; gap:14px; margin-top:28px; padding-top:18px; border-top:1px solid var(--border-subtle);">
      <button class="btn btn-secondary" onclick="closeEventModal()">CLOSE INTEL</button>
      <button class="btn btn-primary" onclick="startRegistrationWithEvent('${event.id}')">
        <span>INITIALIZE SQUAD ENROLLMENT ⚡</span>
      </button>
    </div>
  `;

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeEventModal() {
  const modal = document.getElementById('event-detail-modal');
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
}
window.openEventModal = openEventModal;
window.closeEventModal = closeEventModal;

/* ==========================================================================
   7. CADET ONBOARDING TERMINAL (REGISTRATION)
   ========================================================================== */
let currentStep = 1;
const regData = {
  eventId: '',
  eventName: '',
  teamName: '',
  institution: '',
  city: '',
  teamSize: 2,
  leader: { name: '', email: '', phone: '', collegeId: '' },
  members: []
};

function initRegistrationModal() {
  const modal = document.getElementById('registration-modal');
  const closeBtn = document.getElementById('reg-modal-close');

  if (closeBtn && modal) {
    closeBtn.addEventListener('click', closeRegistrationModal);
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeRegistrationModal();
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal && modal.classList.contains('active')) {
      closeRegistrationModal();
    }
  });

  const eventSelect = document.getElementById('reg-event-select');
  if (eventSelect && window.EVENTS_DATA) {
    eventSelect.innerHTML = '<option value="">-- Select One of 8 Arenas --</option>' + 
      window.EVENTS_DATA.map(e => `<option value="${e.id}">${e.number} — ${e.name} (${e.subName}) | Team: ${e.teamSize || `${e.minTeam} - ${e.maxTeam} Members`}</option>`).join('');
  }
}

function openRegistrationModal() {
  currentStep = 1;
  updateRegistrationStepUI();
  const modal = document.getElementById('registration-modal');
  if (modal) {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

function closeRegistrationModal() {
  const modal = document.getElementById('registration-modal');
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
}

function startRegistrationWithEvent(eventId) {
  closeEventModal();
  openRegistrationModal();
  const eventSelect = document.getElementById('reg-event-select');
  if (eventSelect) {
    const matched = window.getEventById ? window.getEventById(eventId) : null;
    eventSelect.value = matched ? matched.id : eventId;
    onEventSelected();
  }
}

window.openRegistrationModal = openRegistrationModal;
window.closeRegistrationModal = closeRegistrationModal;
window.startRegistrationWithEvent = startRegistrationWithEvent;

function onEventSelected() {
  const eventSelect = document.getElementById('reg-event-select');
  const selectedId = eventSelect.value;
  const eventObj = window.getEventById ? window.getEventById(selectedId) : window.EVENTS_DATA?.find(e => e.id === selectedId || e.shortName === selectedId || e.code === selectedId || e.slug === selectedId);
  const infoBox = document.getElementById('reg-event-quickinfo');

  if (eventObj && infoBox) {
    regData.eventId = eventObj.id;
    regData.eventName = `${eventObj.name} (${eventObj.subName})`;
    infoBox.innerHTML = `
      <div style="background:rgba(0,240,255,0.06); border:1px solid var(--cyan); border-radius:8px; padding:16px; margin-top:14px; box-shadow:0 0 20px rgba(0,240,255,0.15);">
        <div style="display:flex; justify-content:space-between; align-items:center;">
          <h4 style="font-family:var(--font-heading); font-size:1.1rem; color:#ffffff;">${eventObj.name}</h4>
          <span style="font-family:var(--font-mono); font-size:0.75rem; color:var(--gold); font-weight:800;">${eventObj.prizePool || '₹50,000'} PRIZE</span>
        </div>
        <p style="font-size:0.84rem; color:var(--silver-300); margin:6px 0;">${eventObj.shortDescription}</p>
        <div style="font-family:var(--font-mono); font-size:0.75rem; color:var(--cyan); margin-top:6px;">
          Squad Size: <strong>${eventObj.teamSize || `${eventObj.minTeam} - ${eventObj.maxTeam} Members`}</strong> &nbsp;|&nbsp; Fee: <strong>${eventObj.registrationFee || `₹${eventObj.fee} / Team`}</strong> &nbsp;|&nbsp; Venue: <strong>${eventObj.venue}</strong>
        </div>
      </div>
    `;
    updateTeamSizeOptions(eventObj);
  } else if (infoBox) {
    infoBox.innerHTML = '';
  }
}
window.onEventSelected = onEventSelected;

function updateTeamSizeOptions(eventObj) {
  const teamSizeSelect = document.getElementById('reg-team-size');
  if (!teamSizeSelect) return;

  teamSizeSelect.innerHTML = '';
  for (let s = eventObj.minTeam; s <= eventObj.maxTeam; s++) {
    teamSizeSelect.innerHTML += `<option value="${s}">${s} Cadet${s > 1 ? 's' : ''}</option>`;
  }
}

function handleTeamSizeChange() {
  const size = parseInt(document.getElementById('reg-team-size').value, 10);
  regData.teamSize = size;
  renderDynamicMemberFields(size);
}
window.handleTeamSizeChange = handleTeamSizeChange;

function renderDynamicMemberFields(size) {
  const container = document.getElementById('reg-dynamic-members-container');
  if (!container) return;

  if (size <= 1) {
    container.innerHTML = '<p style="font-size:0.82rem; color:var(--silver-400); margin-top:10px;">Solo event entry. No additional cadets required.</p>';
    return;
  }

  let html = '';
  for (let i = 2; i <= size; i++) {
    html += `
      <div style="border-top:1px solid var(--border-subtle); padding-top:16px; margin-top:16px;">
        <div class="cadet-section-header">⚡ CADET ${i} (SQUAD MEMBER)</div>
        <div class="form-row">
          <div class="form-group">
            <label class="form-label">Full Name *</label>
            <input type="text" class="form-input member-name" data-index="${i}" placeholder="e.g. Cadet ${i} Name" required />
          </div>
          <div class="form-group">
            <label class="form-label">Email Address *</label>
            <input type="email" class="form-input member-email" data-index="${i}" placeholder="e.g. cadet${i}@example.com" required />
          </div>
        </div>
        <div class="form-row">
          <div class="form-group">
            <label class="form-label">Contact Phone *</label>
            <input type="tel" class="form-input member-phone" data-index="${i}" placeholder="e.g. +91 XXXXX XXXXX" required />
          </div>
          <div class="form-group">
            <label class="form-label">College Roll No. / USN *</label>
            <input type="text" class="form-input member-usn" data-index="${i}" placeholder="e.g. 1JB24XX00${i}" required />
          </div>
        </div>
      </div>
    `;
  }
  container.innerHTML = html;
}

function nextRegStep() {

  if (currentStep === 1) {
    const ev = document.getElementById('reg-event-select').value;
    if (!ev) {
      alert('Please select an arena to continue.');
      return;
    }
  } else if (currentStep === 2) {
    const teamName = document.getElementById('reg-team-name').value.trim();
    const inst = document.getElementById('reg-institution').value.trim();
    const city = document.getElementById('reg-city').value.trim();
    if (!teamName || !inst || !city) {
      alert('Please complete Squad Codename, Institution, and City.');
      return;
    }
    regData.teamName = teamName;
    regData.institution = inst;
    regData.city = city;
    regData.teamSize = parseInt(document.getElementById('reg-team-size').value, 10);
    renderDynamicMemberFields(regData.teamSize);
  } else if (currentStep === 3) {
    const leaderName = document.getElementById('reg-leader-name').value.trim();
    const leaderEmail = document.getElementById('reg-leader-email').value.trim();
    const leaderPhone = document.getElementById('reg-leader-phone').value.trim();
    const leaderUsn = document.getElementById('reg-leader-usn').value.trim();

    if (!leaderName || !leaderEmail || !leaderPhone || !leaderUsn) {
      alert('Please fill in all primary squad lead details.');
      return;
    }

    regData.leader = {
      name: leaderName,
      email: leaderEmail,
      phone: leaderPhone,
      collegeId: leaderUsn
    };

    regData.members = [];
    for (let i = 2; i <= regData.teamSize; i++) {
      const nameInput = document.querySelector(`.member-name[data-index="${i}"]`);
      const emailInput = document.querySelector(`.member-email[data-index="${i}"]`);
      const phoneInput = document.querySelector(`.member-phone[data-index="${i}"]`);
      const usnInput = document.querySelector(`.member-usn[data-index="${i}"]`);

      if (!nameInput?.value.trim() || !emailInput?.value.trim() || !phoneInput?.value.trim()) {
        alert(`Please fill in required fields for Cadet ${i}.`);
        return;
      }
      regData.members.push({
        name: nameInput.value.trim(),
        email: emailInput.value.trim(),
        phone: phoneInput.value.trim(),
        collegeId: usnInput?.value.trim() || 'N/A'
      });
    }

    populateReviewSummary();
  } else if (currentStep === 4) {
    generateRegistrationConfirmation();
  }

  if (currentStep < 5) {
    currentStep++;
    updateRegistrationStepUI();
  }
}
window.nextRegStep = nextRegStep;

function prevRegStep() {
  if (currentStep > 1) {
    currentStep--;
    updateRegistrationStepUI();
  }
}
window.prevRegStep = prevRegStep;

function updateRegistrationStepUI() {
  for (let i = 1; i <= 5; i++) {
    const stepPane = document.getElementById(`reg-step-${i}`);
    const stepNode = document.getElementById(`reg-node-${i}`);
    if (stepPane) stepPane.style.display = i === currentStep ? 'block' : 'none';
    if (stepNode) {
      stepNode.classList.toggle('active', i === currentStep);
      stepNode.classList.toggle('completed', i < currentStep);
    }
  }

  // Ensure scroll is smoothly reset to top on each step change so cadet fields are immediately visible
  const modalContent = document.querySelector('.reg-modal-content');
  if (modalContent) {
    modalContent.scrollTop = 0;
  }
}

function populateReviewSummary() {
  const container = document.getElementById('reg-review-summary');
  if (!container) return;

  const eventObj = window.getEventById ? window.getEventById(regData.eventId) : window.EVENTS_DATA?.find(e => e.id === regData.eventId || e.shortName === regData.eventId || e.code === regData.eventId || e.slug === regData.eventId);

  container.innerHTML = `
    <div style="background:rgba(0,0,0,0.4); border:1px solid var(--cyan-border); border-radius:8px; padding:20px; box-shadow:0 0 25px rgba(0,240,255,0.1);">
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:14px; border-bottom:1px solid var(--border-subtle); padding-bottom:8px;">
        <span style="font-family:var(--font-heading); font-size:1.1rem; color:var(--cyan);">SQUAD ENROLLMENT MANIFEST</span>
        <span style="font-family:var(--font-mono); font-size:0.75rem; color:var(--gold); font-weight:800;">STATUS: READY FOR CIPHER</span>
      </div>

      <div style="display:grid; grid-template-columns:1fr 1fr; gap:12px; font-size:0.86rem; color:var(--silver-200); margin-bottom:16px;">
        <div><strong>Selected Arena:</strong> ${eventObj ? eventObj.name : regData.eventId}</div>
        <div><strong>Squad Codename:</strong> ${regData.teamName}</div>
        <div><strong>Institution:</strong> ${regData.institution}</div>
        <div><strong>Location:</strong> ${regData.city}</div>
        <div><strong>Squad Capacity:</strong> ${regData.teamSize} Cadets</div>
        <div><strong>Registration Desk:</strong> ${eventObj ? (eventObj.registrationFee || `₹${eventObj.fee} / Team`) : 'Free'}</div>
      </div>

      <div style="border-top:1px solid var(--border-subtle); padding-top:12px; font-size:0.84rem;">
        <div style="font-weight:700; color:var(--gold); margin-bottom:4px;">Squad Lead:</div>
        <div style="color:var(--silver-300);">
          ${regData.leader.name} [USN: ${regData.leader.collegeId}] &nbsp;|&nbsp; 📞 ${regData.leader.phone} &nbsp;|&nbsp; ✉️ ${regData.leader.email}
        </div>
      </div>

      ${regData.members.length > 0 ? `
        <div style="border-top:1px solid var(--border-subtle); padding-top:12px; margin-top:12px; font-size:0.84rem;">
          <div style="font-weight:700; color:var(--gold); margin-bottom:4px;">Additional Cadets:</div>
          ${regData.members.map((m, idx) => `
            <div style="color:var(--silver-300); margin-bottom:4px;">
              Cadet ${idx + 2}: ${m.name} [USN: ${m.collegeId}] &nbsp;|&nbsp; 📞 ${m.phone}
            </div>
          `).join('')}
        </div>
      ` : ''}
    </div>
  `;
}

function generateRegistrationConfirmation() {
  const container = document.getElementById('reg-confirmation-container');
  if (!container) return;

  const eventObj = window.getEventById ? window.getEventById(regData.eventId) : window.EVENTS_DATA?.find(e => e.id === regData.eventId || e.shortName === regData.eventId || e.code === regData.eventId || e.slug === regData.eventId);
  const code = eventObj ? (eventObj.shortName || eventObj.code || eventObj.id) : 'VIG';
  const randHash = Math.random().toString(36).substring(2, 7).toUpperCase();
  const passId = `VIG26-${code}-${randHash}`;

  try {
    const demoPayload = { ...regData, passId, registeredAt: new Date().toISOString() };
    localStorage.setItem('vigyantra_last_pass', JSON.stringify(demoPayload));
  } catch (e) {}

  container.innerHTML = `
    <div class="holo-pass-deck">
      <span class="hud-dialog-tag gold" style="font-size:0.75rem; letter-spacing:0.15em;">
        ★ DELEGATE ENTRY AUTHORIZED ★
      </span>

      <div class="holo-pass-card">
        <div class="holo-pass-top">
          <div>
            <div class="holo-pass-college-badge">SJB INSTITUTE OF TECHNOLOGY</div>
            <div style="font-size:0.65rem; color:var(--silver-400);">25th Silver Jubilee Celebrations • Bengaluru</div>
          </div>
          <div class="holo-pass-silver-seal">25 YRS JUBILEE</div>
        </div>

        <div class="holo-pass-code-banner">
          <div style="font-family:var(--font-mono); font-size:0.65rem; color:var(--cyan); letter-spacing:0.12em;">COMMEMORATIVE PASS CIPHER</div>
          <div class="holo-pass-id">${passId}</div>
        </div>

        <div class="holo-pass-grid">
          <div><strong>Arena:</strong> ${eventObj ? eventObj.name : 'Flagship Track'}</div>
          <div><strong>Squad:</strong> ${regData.teamName} (${regData.teamSize} Cadets)</div>
          <div><strong>Lead Cadet:</strong> ${regData.leader.name}</div>
          <div><strong>Roll / USN:</strong> ${regData.leader.collegeId}</div>
          <div><strong>Institution:</strong> ${regData.institution}</div>
          <div><strong>Date:</strong> 30 October 2026</div>
          <div style="grid-column: span 2;"><strong>Campus Lab:</strong> ${eventObj ? eventObj.venue : 'SJB Main Arena'}</div>
        </div>

        <div class="holo-pass-barcode-wrap">
          <div class="barcode-lines">||| | | |||| | |||||| | ||| | ||</div>
          <div style="font-family:var(--font-mono); font-size:0.65rem; color:var(--cyan); font-weight:700;">IEEE-CS VERIFIED</div>
        </div>
      </div>

      <p style="font-size:0.8rem; color:var(--gold); margin-bottom:20px; max-width:500px;">
        ⚡ Please carry this Pass Token alongside your physical College ID card to the campus registration desks on Friday, 30 October 2026.
      </p>

      <div style="display:flex; justify-content:center; gap:14px; flex-wrap:wrap;">
        <button class="btn btn-secondary" onclick="window.print()">
          <span>🖨️ PRINT ENTRY PASS</span>
        </button>
        <button class="btn btn-primary" onclick="closeRegistrationModal()">
          <span>RETURN TO COMMAND DECK</span>
        </button>
      </div>
    </div>
  `;
}

/* ==========================================================================
   8. DIGITAL BROCHURE FLIPBOOK (INTERACTIVE CYBER DOSSIER)
   ========================================================================== */
let currentBrochurePage = 1;

function initBrochureViewer() {
  const modal = document.getElementById('brochure-modal');
  const closeBtn = document.getElementById('brochure-modal-close');
  const prevBtn = document.getElementById('brochure-prev-btn');
  const nextBtn = document.getElementById('brochure-next-btn');
  const printBtn = document.getElementById('brochure-print-btn');

  if (closeBtn && modal) {
    closeBtn.addEventListener('click', closeBrochureModal);
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeBrochureModal();
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      if (currentBrochurePage > 1) {
        currentBrochurePage--;
        renderBrochurePage();
      }
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      if (currentBrochurePage < (window.BROCHURE_PAGES?.length || 6)) {
        currentBrochurePage++;
        renderBrochurePage();
      }
    });
  }

  if (printBtn) {
    printBtn.addEventListener('click', () => {
      window.print();
    });
  }

  document.addEventListener('keydown', (e) => {
    if (modal && modal.classList.contains('active')) {
      if (e.key === 'Escape') closeBrochureModal();
      if (e.key === 'ArrowRight') nextBtn?.click();
      if (e.key === 'ArrowLeft') prevBtn?.click();
    }
  });

  renderBrochureDots();
}

function openBrochureModal() {
  currentBrochurePage = 1;
  renderBrochurePage();
  const modal = document.getElementById('brochure-modal');
  if (modal) {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

function closeBrochureModal() {
  const modal = document.getElementById('brochure-modal');
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
}

function renderBrochureDots() {
  const container = document.getElementById('brochure-dots-container');
  const pages = window.BROCHURE_PAGES || [];
  if (!container || !pages.length) return;

  container.innerHTML = pages.map((_, idx) => `
    <div class="brochure-dot ${idx + 1 === currentBrochurePage ? 'active' : ''}" onclick="goToBrochurePage(${idx + 1})"></div>
  `).join('');
}

function goToBrochurePage(pageNum) {
  currentBrochurePage = pageNum;
  renderBrochurePage();
}
window.goToBrochurePage = goToBrochurePage;

function renderBrochurePage() {
  const card = document.getElementById('brochure-content-card');
  const counter = document.getElementById('brochure-page-counter');
  const prevBtn = document.getElementById('brochure-prev-btn');
  const nextBtn = document.getElementById('brochure-next-btn');

  const pages = window.BROCHURE_PAGES || [];
  const pageData = pages.find(p => p.page === currentBrochurePage) || pages[0];

  if (!card || !pageData) return;

  card.innerHTML = pageData.content;
  card.scrollTop = 0;
  if (counter) counter.textContent = `PAGE ${currentBrochurePage} OF ${pages.length}: ${pageData.title.toUpperCase()}`;

  if (prevBtn) prevBtn.disabled = currentBrochurePage === 1;
  if (nextBtn) nextBtn.disabled = currentBrochurePage === pages.length;

  renderBrochureDots();
}

window.openBrochureModal = openBrochureModal;
window.closeBrochureModal = closeBrochureModal;

/* ==========================================================================
   9. SCHEDULE TABS & TIMELINE
   ========================================================================== */
function initScheduleTabs() {
  const tabBtns = document.querySelectorAll('.schedule-tab-btn');
  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      tabBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const dayKey = btn.getAttribute('data-day');
      renderSchedule(dayKey);
    });
  });

  renderSchedule('day1');
}

function renderSchedule(dayKey) {
  const container = document.getElementById('timeline-container');
  const dayData = window.SCHEDULE_DATA?.[dayKey];
  if (!container || !dayData) return;

  container.innerHTML = dayData.events.map(item => `
    <div class="timeline-item">
      <div class="timeline-dot"></div>
      <div class="timeline-card">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:6px;">
          <span class="timeline-time">${item.time}</span>
          <span class="timeline-tag">${item.tag}</span>
        </div>
        <h4 style="font-family:var(--font-heading); font-size:1.05rem; color:#ffffff; margin-bottom:4px;">${item.title}</h4>
        <p style="font-size:0.85rem; color:var(--silver-300); margin-bottom:8px;">${item.description}</p>
        <div style="font-family:var(--font-mono); font-size:0.75rem; color:var(--cyan);">📍 ${item.venue}</div>
      </div>
    </div>
  `).join('');
}

/* ==========================================================================
   10. PRIZES (HALL OF GLORY)
   ========================================================================== */
function renderPrizes() {
  const container = document.getElementById('prizes-grid-container');
  if (!container || !window.PRIZES_DATA) return;

  container.innerHTML = window.PRIZES_DATA.map(prize => `
    <div class="prize-card ${prize.highlight ? 'featured' : ''}">
      <div style="font-family:var(--font-mono); font-size:0.68rem; font-weight:700; color:var(--gold); letter-spacing:0.1em; margin-bottom:6px;">
        ${prize.tag}
      </div>
      <div class="prize-amount">${prize.amount}</div>
      <div style="font-family:var(--font-heading); font-size:0.92rem; font-weight:700; color:#ffffff; margin-bottom:6px;">
        ${prize.title}
      </div>
      <div style="font-size:0.78rem; color:var(--silver-400); margin-bottom:8px;">${prize.subtitle}</div>
      <p style="font-size:0.82rem; color:var(--silver-300); line-height:1.5;">${prize.description}</p>
    </div>
  `).join('');
}

/* ==========================================================================
   11. GUIDELINES & FAQ ACCORDIONS
   ========================================================================== */
function initAccordions() {
  const guideContainer = document.getElementById('guidelines-accordion-container');
  if (guideContainer && window.GUIDELINES_DATA) {
    guideContainer.innerHTML = window.GUIDELINES_DATA.map((item, idx) => `
      <div class="accordion-item ${idx === 0 ? 'open' : ''}">
        <button class="accordion-trigger" aria-expanded="${idx === 0 ? 'true' : 'false'}">
          <span>${item.title}</span>
          <span class="accordion-icon">▼</span>
        </button>
        <div class="accordion-content" style="${idx === 0 ? 'max-height: 250px;' : ''}">
          <div class="accordion-body">${item.content}</div>
        </div>
      </div>
    `).join('');
  }

  const faqContainer = document.getElementById('faq-accordion-container');
  if (faqContainer && window.FAQ_DATA) {
    faqContainer.innerHTML = window.FAQ_DATA.map((item, idx) => `
      <div class="accordion-item ${idx === 0 ? 'open' : ''}">
        <button class="accordion-trigger" aria-expanded="${idx === 0 ? 'true' : 'false'}">
          <span>${item.q}</span>
          <span class="accordion-icon">▼</span>
        </button>
        <div class="accordion-content" style="${idx === 0 ? 'max-height: 250px;' : ''}">
          <div class="accordion-body">${item.a}</div>
        </div>
      </div>
    `).join('');
  }

  document.querySelectorAll('.accordion-trigger').forEach(trigger => {
    trigger.addEventListener('click', () => {
      const item = trigger.closest('.accordion-item');
      const content = item.querySelector('.accordion-content');
      const isOpen = item.classList.contains('open');

      if (isOpen) {
        item.classList.remove('open');
        trigger.setAttribute('aria-expanded', 'false');
        content.style.maxHeight = null;
      } else {
        item.classList.add('open');
        trigger.setAttribute('aria-expanded', 'true');
        content.style.maxHeight = content.scrollHeight + 30 + 'px';
      }
    });
  });
}

/* ==========================================================================
   12. FULL-SCREEN HUD MODAL ROUTING & SOUND TRIGGERS
   ========================================================================== */
function openHudModal(name) {
  const modal = document.getElementById(`hud-modal-${name}`);
  if (modal) {
    const dialogBody = modal.querySelector('.hud-dialog-body');
    if (dialogBody) dialogBody.scrollTop = 0;
    modal.classList.add('active');
  }
}

function closeHudModal(name) {
  const modal = document.getElementById(`hud-modal-${name}`);
  if (modal) {
    modal.classList.remove('active');
  }
}

window.openHudModal = openHudModal;
window.closeHudModal = closeHudModal;

/* ==========================================================================
   13. TOP-RIGHT THREE LINES CYBER DROPDOWN MENU
   ========================================================================== */
function toggleCyberMenu() {
  const toggle = document.getElementById('cyber-menu-toggle');
  const menu = document.getElementById('cyber-dropdown-menu');
  if (!toggle || !menu) return;

  const isActive = menu.classList.contains('active');
  if (isActive) {
    closeCyberMenu();
  } else {
    openCyberMenu();
  }
}

function openCyberMenu() {
  const toggle = document.getElementById('cyber-menu-toggle');
  const menu = document.getElementById('cyber-dropdown-menu');
  if (!toggle || !menu) return;

  toggle.classList.add('active');
  toggle.setAttribute('aria-expanded', 'true');
  menu.classList.add('active');
}

function closeCyberMenu() {
  const toggle = document.getElementById('cyber-menu-toggle');
  const menu = document.getElementById('cyber-dropdown-menu');
  if (!toggle || !menu) return;

  if (menu.classList.contains('active')) {
  }
  toggle.classList.remove('active');
  toggle.setAttribute('aria-expanded', 'false');
  menu.classList.remove('active');
}

function selectDropdownOption(option) {
  closeCyberMenu();
  if (option === 'register') {
    openRegistrationModal();
  } else if (option === 'brochure') {
    openBrochureModal();
  } else {
    openHudModal(option);
  }
}

function scrollToSection(sectionId) {
  closeCyberMenu();
  const target = document.getElementById(sectionId);
  if (target) {
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

window.toggleCyberMenu = toggleCyberMenu;
window.openCyberMenu = openCyberMenu;
window.closeCyberMenu = closeCyberMenu;
window.selectDropdownOption = selectDropdownOption;
window.scrollToSection = scrollToSection;

// Close dropdown on outside click or ESC
document.addEventListener('DOMContentLoaded', () => {
  document.addEventListener('click', (e) => {
    const toggle = document.getElementById('cyber-menu-toggle');
    const menu = document.getElementById('cyber-dropdown-menu');
    if (toggle && menu && menu.classList.contains('active')) {
      if (!toggle.contains(e.target) && !menu.contains(e.target)) {
        closeCyberMenu();
      }
    }
  });

  document.querySelectorAll('.hud-modal-overlay').forEach(overlay => {
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) {
        overlay.classList.remove('active');
      }
    });
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeCyberMenu();
      document.querySelectorAll('.hud-modal-overlay.active').forEach(m => {
        m.classList.remove('active');
      });
    }
  });
});

/* ==========================================================================
   16. CINEMATIC INTRO / BOOT CONTROLLER
   Choreographed 3.6s dark cinematic intro with skip handler and clean GPU release
   ========================================================================== */
let cinematicIntroTimer = null;
let cinematicIntroDismissed = false;

function initCinematicIntro() {
  const overlay = document.getElementById('cinematic-intro-overlay');
  if (!overlay) return;

  // If user prefers reduced motion, skip intro immediately
  if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    dismissCinematicIntro(true);
    return;
  }

  // Auto-complete intro cleanly after ~5.65 seconds
  cinematicIntroTimer = setTimeout(() => {
    dismissCinematicIntro(false);
  }, 5650);
}

function skipCinematicIntro() {
  dismissCinematicIntro(true);
}

function dismissCinematicIntro(immediate = false) {
  if (cinematicIntroDismissed) return;
  cinematicIntroDismissed = true;

  if (cinematicIntroTimer) {
    clearTimeout(cinematicIntroTimer);
    cinematicIntroTimer = null;
  }

  const overlay = document.getElementById('cinematic-intro-overlay');
  if (!overlay) return;

  overlay.classList.add('intro-complete');

  const removeDelay = immediate ? 50 : 600;
  setTimeout(() => {
    overlay.style.display = 'none';
    overlay.style.pointerEvents = 'none';
    // Remove all ongoing animation layers inside intro to free GPU compositor entirely
    const stage = overlay.querySelector('.intro-stage');
    if (stage) stage.innerHTML = '';
  }, removeDelay);
}

window.initCinematicIntro = initCinematicIntro;
window.skipCinematicIntro = skipCinematicIntro;
window.dismissCinematicIntro = dismissCinematicIntro;

/* ==========================================================================
   17. HOLOGRAPHIC INFORMATION PANELS SCROLL CONTROLLER
   Lightweight IntersectionObserver for section entrance, focus & de-emphasis
   ========================================================================== */
function initScrollSectionObserver() {
  const sections = document.querySelectorAll('.info-section');
  if (!sections.length) return;

  // Reduced motion check: immediately materialize all sections cleanly
  if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    sections.forEach(s => {
      s.classList.add('is-visible', 'is-focused');
    });
    return;
  }

  // 1. Entrance & Exit Visibility Observer (Wide Margins)
  const visibilityObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const section = entry.target;
      if (entry.isIntersecting) {
        section.classList.add('is-visible');
      } else {
        // Subtle exit: if passed above viewport, flag as past
        const rect = entry.boundingClientRect;
        if (rect.top < 0) {
          section.classList.add('is-past');
        } else {
          section.classList.remove('is-past', 'is-visible', 'is-focused');
        }
      }
    });
  }, {
    root: null,
    rootMargin: '40px 0px -40px 0px',
    threshold: [0, 0.15]
  });

  // 2. Primary Focus Observer (Tight Center Band: 32% - 68% of Viewport)
  const focusObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const section = entry.target;
      if (entry.isIntersecting) {
        // Make this terminal the primary focused HUD panel
        sections.forEach(s => {
          if (s !== section) s.classList.remove('is-focused');
        });
        section.classList.add('is-visible', 'is-focused');
        section.classList.remove('is-past');

        // Re-trigger the scanline beam animation cleanly
        const beam = section.querySelector('.hud-scanline-beam');
        if (beam) {
          beam.style.animation = 'none';
          // Trigger reflow to restart CSS keyframe animation
          void beam.offsetWidth;
          beam.style.animation = '';
        }
      } else {
        // If exiting above center band, transition to past state
        const rect = entry.boundingClientRect;
        if (rect.top < window.innerHeight * 0.32) {
          section.classList.remove('is-focused');
          section.classList.add('is-past');
        } else {
          section.classList.remove('is-focused', 'is-past');
        }
      }
    });
  }, {
    root: null,
    rootMargin: '-32% 0px -38% 0px',
    threshold: 0
  });

  sections.forEach(section => {
    visibilityObserver.observe(section);
    focusObserver.observe(section);
  });
}

window.initScrollSectionObserver = initScrollSectionObserver;

