/**
 * VIGYANTRA 2026 — Main Interactive Engine
 * Silver Jubilee Technical Symposium
 */

document.addEventListener('DOMContentLoaded', () => {
  initHeroCanvas();
  initCountdown();
  initNavbar();
  initStatsObserver();
  renderEvents();
  initEventFilters();
  initScheduleTabs();
  renderPrizes();
  initAccordions();
  initEventModal();
  initRegistrationModal();
  initBrochureViewer();
});

/* ==========================================================================
   1. HERO CONSTELLATION / CIRCUIT MESH CANVAS
   ========================================================================== */
function initHeroCanvas() {
  const canvas = document.getElementById('hero-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let width, height;
  let particles = [];
  let mouse = { x: null, y: null, radius: 140 };
  let animationFrameId;

  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReduced) return;

  function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
    createParticles();
  }

  function createParticles() {
    particles = [];
    // Lower count on mobile for smooth 60fps performance
    const count = window.innerWidth < 768 ? 32 : 70;
    
    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.45,
        vy: (Math.random() - 0.5) * 0.45,
        radius: Math.random() * 1.8 + 0.8,
        color: Math.random() > 0.8 ? 'rgba(245, 158, 11, 0.7)' : (Math.random() > 0.4 ? 'rgba(56, 189, 248, 0.7)' : 'rgba(226, 232, 240, 0.5)'),
        pulse: Math.random() * Math.PI
      });
    }
  }

  function animate() {
    ctx.clearRect(0, 0, width, height);

    // Update and draw particles
    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];
      p.x += p.vx;
      p.y += p.vy;

      // Bounce at boundaries
      if (p.x < 0 || p.x > width) p.vx *= -1;
      if (p.y < 0 || p.y > height) p.vy *= -1;

      // Pulse particle
      p.pulse += 0.02;
      const currentRadius = p.radius + Math.sin(p.pulse) * 0.4;

      ctx.beginPath();
      ctx.arc(p.x, p.y, Math.max(0.6, currentRadius), 0, Math.PI * 2);
      ctx.fillStyle = p.color;
      ctx.fill();

      // Mouse proximity interaction
      if (mouse.x !== null) {
        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < mouse.radius) {
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.strokeStyle = `rgba(56, 189, 248, ${0.2 * (1 - dist / mouse.radius)})`;
          ctx.lineWidth = 0.8;
          ctx.stroke();
        }
      }

      // Connect neighbor particles with circuit lines
      for (let j = i + 1; j < particles.length; j++) {
        const p2 = particles[j];
        const dx = p.x - p2.x;
        const dy = p.y - p2.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const maxDist = window.innerWidth < 768 ? 95 : 130;

        if (dist < maxDist) {
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.strokeStyle = `rgba(226, 232, 240, ${0.12 * (1 - dist / maxDist)})`;
          ctx.lineWidth = 0.6;
          ctx.stroke();
        }
      }
    }

    animationFrameId = requestAnimationFrame(animate);
  }

  window.addEventListener('resize', () => {
    resize();
  });

  window.addEventListener('mousemove', (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  });

  window.addEventListener('mouseout', () => {
    mouse.x = null;
    mouse.y = null;
  });

  // Pause canvas when scrolled far out of view
  const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      if (!animationFrameId) animate();
    } else {
      cancelAnimationFrame(animationFrameId);
      animationFrameId = null;
    }
  }, { threshold: 0.05 });

  observer.observe(canvas);

  resize();
  animate();
}

/* ==========================================================================
   2. DYNAMIC COUNTDOWN TIMER
   ========================================================================== */
function initCountdown() {
  const daysEl = document.getElementById('cd-days');
  const hoursEl = document.getElementById('cd-hours');
  const minsEl = document.getElementById('cd-mins');
  const secsEl = document.getElementById('cd-secs');

  if (!daysEl || !hoursEl || !minsEl || !secsEl) return;

  const targetDate = new Date(window.SYMPOSIUM_CONFIG?.targetDate || '2026-10-15T09:00:00').getTime();

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
   3. STICKY NAVBAR & MOBILE DRAWER
   ========================================================================== */
function initNavbar() {
  const header = document.querySelector('.site-header');
  const toggleBtn = document.querySelector('.mobile-nav-toggle');
  const drawer = document.querySelector('.mobile-nav-drawer');
  const backdrop = document.querySelector('.mobile-drawer-backdrop');
  const closeBtn = document.querySelector('.mobile-drawer-close');
  const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');

  // Sticky transition on scroll
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // Mobile menu open / close
  function openDrawer() {
    drawer.classList.add('open');
    backdrop.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeDrawer() {
    drawer.classList.remove('open');
    backdrop.classList.remove('open');
    document.body.style.overflow = '';
  }

  if (toggleBtn) toggleBtn.addEventListener('click', openDrawer);
  if (closeBtn) closeBtn.addEventListener('click', closeDrawer);
  if (backdrop) backdrop.addEventListener('click', closeDrawer);

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      closeDrawer();
    });
  });

  // Active section scroll spy
  const sections = document.querySelectorAll('section[id]');
  window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY + 120;
    sections.forEach(sec => {
      const top = sec.offsetTop;
      const height = sec.offsetHeight;
      const id = sec.getAttribute('id');
      if (scrollPos >= top && scrollPos < top + height) {
        document.querySelectorAll('.nav-link').forEach(l => {
          l.classList.toggle('active', l.getAttribute('href') === `#${id}`);
        });
      }
    });
  });
}

/* ==========================================================================
   4. STATS ANIMATED COUNTERS
   ========================================================================== */
function initStatsObserver() {
  const statElements = document.querySelectorAll('.stat-number');
  if (!statElements.length) return;

  let animated = false;

  const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting && !animated) {
      animated = true;
      statElements.forEach(el => {
        const target = parseInt(el.getAttribute('data-target'), 10);
        const prefix = el.getAttribute('data-prefix') || '';
        const suffix = el.getAttribute('data-suffix') || '';
        const isRupee = prefix === '₹';
        const duration = 1600;
        const startTime = performance.now();

        function step(currentTime) {
          const progress = Math.min((currentTime - startTime) / duration, 1);
          // Ease out cubic
          const ease = 1 - Math.pow(1 - progress, 3);
          const currentVal = Math.floor(ease * target);

          if (isRupee) {
            el.textContent = '₹' + currentVal.toLocaleString('en-IN') + suffix;
          } else {
            el.textContent = (currentVal < 10 && target < 10 ? '0' : '') + currentVal.toLocaleString() + suffix;
          }

          if (progress < 1) {
            requestAnimationFrame(step);
          } else {
            // Ensure final exact formatting
            if (isRupee) {
              el.textContent = '₹1,00,000+';
            } else if (target === 25) {
              el.textContent = '25th';
            } else if (target === 8) {
              el.textContent = '08';
            } else {
              el.textContent = target.toLocaleString() + suffix;
            }
          }
        }

        requestAnimationFrame(step);
      });
    }
  }, { threshold: 0.3 });

  const statsSection = document.querySelector('.stats-section');
  if (statsSection) observer.observe(statsSection);
}

/* ==========================================================================
   5. RENDER 8 FLAGSHIP EVENTS
   ========================================================================== */
function renderEvents() {
  const container = document.getElementById('events-grid-container');
  if (!container || !window.EVENTS_DATA) return;

  container.innerHTML = window.EVENTS_DATA.map(event => {
    return `
      <article class="event-card" data-category="${event.category}" data-id="${event.id}">
        <div class="event-card-header">
          <span class="event-number-badge">${event.number}</span>
          <span class="event-category-badge">${event.categoryLabel}</span>
        </div>
        <div class="event-card-body">
          <h3 class="event-title">${event.name}</h3>
          <div class="event-subtitle">${event.subName}</div>
          <p class="event-desc">${event.shortDescription}</p>

          <div class="event-meta-list">
            <div class="meta-item">
              <span class="meta-label">Team Size</span>
              <span class="meta-value">${event.teamSize}</span>
            </div>
            <div class="meta-item">
              <span class="meta-label">Prize Pool</span>
              <span class="meta-value highlight">${event.prizePool}</span>
            </div>
            <div class="meta-item">
              <span class="meta-label">Timeline</span>
              <span class="meta-value">${event.date.split('(')[0]}</span>
            </div>
            <div class="meta-item">
              <span class="meta-label">Fee</span>
              <span class="meta-value">${event.registrationFee.split('(')[0]}</span>
            </div>
          </div>

          <div class="event-tags-list">
            ${event.tags.map(tag => `<span class="tag-pill">#${tag}</span>`).join('')}
          </div>
        </div>
        <div class="event-card-actions">
          <button class="btn-view-event" onclick="openEventModal('${event.id}')" aria-label="View details for ${event.name}">
            <span>VIEW EVENT</span>
            <span>→</span>
          </button>
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
      const cards = document.querySelectorAll('.event-card');

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

/* ==========================================================================
   6. EVENT DETAIL MODAL
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
  const event = window.EVENTS_DATA?.find(e => e.id === eventId);
  const modal = document.getElementById('event-detail-modal');
  const bodyEl = document.getElementById('event-modal-body');
  if (!event || !modal || !bodyEl) return;

  bodyEl.innerHTML = `
    <div class="modal-event-header">
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px;">
        <span class="event-number-badge" style="font-size:1.4rem;">EVENT ${event.number}</span>
        <span class="event-category-badge" style="background:rgba(56,189,248,0.1); border-color:var(--cyan-border); color:var(--cyan-accent);">${event.categoryLabel}</span>
      </div>
      <h2 style="font-size:2.2rem; color:#ffffff; margin-bottom:4px;">${event.name}</h2>
      <div style="font-size:1.1rem; color:var(--cyan-accent); letter-spacing:0.15em; font-weight:600; text-transform:uppercase; margin-bottom:16px;">${event.subName}</div>
      <p style="font-size:1rem; color:var(--silver-300); line-height:1.6;">${event.description}</p>
    </div>

    <div class="modal-meta-grid">
      <div class="meta-item">
        <span class="meta-label">Team Size</span>
        <span class="meta-value">${event.teamSize}</span>
      </div>
      <div class="meta-item">
        <span class="meta-label">Total Prize Pool</span>
        <span class="meta-value highlight" style="font-size:1.1rem;">${event.prizePool}</span>
      </div>
      <div class="meta-item">
        <span class="meta-label">Registration Fee</span>
        <span class="meta-value">${event.registrationFee}</span>
      </div>
      <div class="meta-item">
        <span class="meta-label">Venue</span>
        <span class="meta-value">${event.venue}</span>
      </div>
    </div>

    <!-- Rounds -->
    <h3 style="font-size:1.3rem; margin:28px 0 16px 0; color:var(--silver-100);">EVENT FORMAT & ROUNDS</h3>
    ${event.rounds.map(r => `
      <div class="modal-round-card">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:6px;">
          <h4 class="modal-round-title" style="color:var(--cyan-accent);">${r.roundNumber} — ${r.title}</h4>
          <span style="font-size:0.75rem; color:var(--silver-400); background:rgba(226,232,240,0.06); padding:2px 8px; border-radius:4px;">${r.duration}</span>
        </div>
        <div class="modal-round-detail"><strong>Format:</strong> ${r.format}</div>
        <div class="modal-round-detail"><strong>Task:</strong> ${r.task}</div>
        <div class="modal-round-detail"><strong>Scoring:</strong> ${r.scoring}</div>
        <div class="modal-round-detail"><strong>Qualification:</strong> ${r.qualification}</div>
      </div>
    `).join('')}

    <!-- Rules & Criteria -->
    <div style="display:grid; grid-template-columns:1fr 1fr; gap:20px; margin-top:28px;">
      <div>
        <h4 style="font-size:1rem; color:var(--silver-200); margin-bottom:12px; letter-spacing:0.08em;">RULES & PROTOCOLS</h4>
        <ul style="padding-left:18px; color:var(--silver-400); font-size:0.85rem; line-height:1.7;">
          ${event.rules.map(rule => `<li>${rule}</li>`).join('')}
        </ul>
      </div>
      <div>
        <h4 style="font-size:1rem; color:var(--silver-200); margin-bottom:12px; letter-spacing:0.08em;">JUDGING CRITERIA</h4>
        <ul style="padding-left:18px; color:var(--silver-400); font-size:0.85rem; line-height:1.7;">
          ${event.judgingCriteria.map(jc => `<li>${jc}</li>`).join('')}
        </ul>
      </div>
    </div>

    <!-- Eligibility & Submission -->
    <div style="display:grid; grid-template-columns:1fr 1fr; gap:20px; margin-top:24px;">
      <div>
        <h4 style="font-size:1rem; color:var(--silver-200); margin-bottom:12px; letter-spacing:0.08em;">ELIGIBILITY</h4>
        <ul style="padding-left:18px; color:var(--silver-400); font-size:0.85rem; line-height:1.7;">
          ${event.eligibility.map(e => `<li>${e}</li>`).join('')}
        </ul>
      </div>
      <div>
        <h4 style="font-size:1rem; color:var(--silver-200); margin-bottom:12px; letter-spacing:0.08em;">SUBMISSIONS</h4>
        <ul style="padding-left:18px; color:var(--silver-400); font-size:0.85rem; line-height:1.7;">
          ${event.submissionRequirements.map(s => `<li>${s}</li>`).join('')}
        </ul>
      </div>
    </div>

    <!-- Coordinators Box -->
    <div class="modal-coordinator-box">
      <div style="font-size:0.75rem; font-weight:700; letter-spacing:0.15em; color:var(--cyan-accent); margin-bottom:10px;">EVENT COORDINATOR CONTACTS</div>
      <div style="display:grid; grid-template-columns:1fr 1fr; gap:16px; font-size:0.85rem; color:var(--silver-300);">
        <div>
          <div><strong>Faculty Lead:</strong> ${event.coordinator.faculty}</div>
          <div style="color:var(--silver-400);">Phone: ${event.coordinator.facultyContact}</div>
        </div>
        <div>
          <div><strong>Student Lead:</strong> ${event.coordinator.student}</div>
          <div style="color:var(--silver-400);">Phone: ${event.coordinator.studentContact}</div>
          <div style="color:var(--silver-400);">Email: ${event.coordinator.email}</div>
        </div>
      </div>
    </div>

    <div style="display:flex; justify-content:flex-end; gap:14px; margin-top:32px; padding-top:20px; border-top:1px solid var(--border-subtle);">
      <button class="btn btn-secondary" onclick="closeEventModal()">CLOSE</button>
      <button class="btn btn-primary" onclick="startRegistrationWithEvent('${event.id}')">REGISTER FOR THIS EVENT →</button>
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
   7. SCHEDULE TABS & TIMELINE
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
        <div class="timeline-header">
          <span class="timeline-time">${item.time}</span>
          <span class="timeline-tag">${item.tag}</span>
        </div>
        <h4 class="timeline-title">${item.title}</h4>
        <p class="timeline-desc">${item.description}</p>
        <div class="timeline-venue">📍 ${item.venue}</div>
      </div>
    </div>
  `).join('');
}

/* ==========================================================================
   8. PRIZES (HALL OF GLORY)
   ========================================================================== */
function renderPrizes() {
  const container = document.getElementById('prizes-grid-container');
  if (!container || !window.PRIZES_DATA) return;

  container.innerHTML = window.PRIZES_DATA.map(prize => `
    <div class="prize-card ${prize.highlight ? 'featured' : ''}">
      <div class="prize-badge">${prize.title}</div>
      <div class="prize-amount">${prize.amount}</div>
      <div class="prize-subtitle">${prize.subtitle}</div>
      <p class="prize-desc">${prize.description}</p>
    </div>
  `).join('');
}

/* ==========================================================================
   9. GUIDELINES & FAQ ACCORDIONS
   ========================================================================== */
function initAccordions() {
  // Render Guidelines
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

  // Render FAQs
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

  // Attach click listener for all accordions
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
   10. MULTI-STEP REGISTRATION PORTAL
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

  // Populate events in Step 1
  const eventSelect = document.getElementById('reg-event-select');
  if (eventSelect && window.EVENTS_DATA) {
    eventSelect.innerHTML = '<option value="">-- Choose an Event --</option>' + 
      window.EVENTS_DATA.map(e => `<option value="${e.id}">${e.number} — ${e.name} (${e.subName}) - ${e.teamSize}</option>`).join('');
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
    eventSelect.value = eventId;
    onEventSelected();
  }
}

window.openRegistrationModal = openRegistrationModal;
window.closeRegistrationModal = closeRegistrationModal;
window.startRegistrationWithEvent = startRegistrationWithEvent;

function onEventSelected() {
  const eventSelect = document.getElementById('reg-event-select');
  const selectedId = eventSelect.value;
  const eventObj = window.EVENTS_DATA?.find(e => e.id === selectedId);
  const infoBox = document.getElementById('reg-event-quickinfo');

  if (eventObj && infoBox) {
    regData.eventId = eventObj.id;
    regData.eventName = `${eventObj.name} (${eventObj.subName})`;
    infoBox.innerHTML = `
      <div style="background:rgba(56,189,248,0.06); border:1px solid var(--cyan-border); border-radius:8px; padding:14px; margin-top:14px;">
        <div style="font-weight:700; color:#ffffff;">${eventObj.name} — ${eventObj.subName}</div>
        <div style="font-size:0.85rem; color:var(--silver-400); margin:4px 0;">Allowed Team Size: <strong style="color:var(--cyan-accent);">${eventObj.teamSize}</strong> | Fee: <strong>${eventObj.registrationFee}</strong></div>
        <div style="font-size:0.82rem; color:var(--silver-400);">Venue: ${eventObj.venue}</div>
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
    teamSizeSelect.innerHTML += `<option value="${s}">${s} Member${s > 1 ? 's' : ''}</option>`;
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
    container.innerHTML = '<p style="font-size:0.85rem; color:var(--silver-500); margin-top:10px;">Solo event. No additional team members required.</p>';
    return;
  }

  let html = '';
  for (let i = 2; i <= size; i++) {
    html += `
      <div style="border-top:1px solid var(--border-subtle); padding-top:16px; margin-top:16px;">
        <div style="font-size:0.8rem; font-weight:700; letter-spacing:0.1em; color:var(--cyan-accent); margin-bottom:10px;">TEAM MEMBER ${i} DETAILS</div>
        <div class="form-row">
          <div class="form-group">
            <label class="form-label">Full Name *</label>
            <input type="text" class="form-input member-name" data-index="${i}" placeholder="e.g. Rahul Sharma" required />
          </div>
          <div class="form-group">
            <label class="form-label">Email *</label>
            <input type="email" class="form-input member-email" data-index="${i}" placeholder="e.g. rahul@example.com" required />
          </div>
        </div>
        <div class="form-row">
          <div class="form-group">
            <label class="form-label">Phone Number *</label>
            <input type="tel" class="form-input member-phone" data-index="${i}" placeholder="10-digit mobile number" required />
          </div>
          <div class="form-group">
            <label class="form-label">College ID / USN *</label>
            <input type="text" class="form-input member-usn" data-index="${i}" placeholder="e.g. 1JB24IS..." required />
          </div>
        </div>
      </div>
    `;
  }
  container.innerHTML = html;
}

function nextRegStep() {
  // Validate current step
  if (currentStep === 1) {
    const ev = document.getElementById('reg-event-select').value;
    if (!ev) {
      alert('Please select an event before proceeding.');
      return;
    }
  } else if (currentStep === 2) {
    const teamName = document.getElementById('reg-team-name').value.trim();
    const inst = document.getElementById('reg-institution').value.trim();
    const city = document.getElementById('reg-city').value.trim();
    if (!teamName || !inst || !city) {
      alert('Please fill in Team Name, Institution and City.');
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
      alert('Please fill in all Team Leader details.');
      return;
    }

    regData.leader = {
      name: leaderName,
      email: leaderEmail,
      phone: leaderPhone,
      collegeId: leaderUsn
    };

    // Collect additional members
    regData.members = [];
    for (let i = 2; i <= regData.teamSize; i++) {
      const nameInput = document.querySelector(`.member-name[data-index="${i}"]`);
      const emailInput = document.querySelector(`.member-email[data-index="${i}"]`);
      const phoneInput = document.querySelector(`.member-phone[data-index="${i}"]`);
      const usnInput = document.querySelector(`.member-usn[data-index="${i}"]`);

      if (!nameInput?.value.trim() || !emailInput?.value.trim() || !phoneInput?.value.trim()) {
        alert(`Please complete the details for Member ${i}.`);
        return;
      }
      regData.members.push({
        name: nameInput.value.trim(),
        email: emailInput.value.trim(),
        phone: phoneInput.value.trim(),
        collegeId: usnInput?.value.trim() || 'N/A'
      });
    }

    // Populate Review Step 4
    populateReviewSummary();
  } else if (currentStep === 4) {
    // Generate Demo Confirmation
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
}

function populateReviewSummary() {
  const container = document.getElementById('reg-review-summary');
  if (!container) return;

  const eventObj = window.EVENTS_DATA?.find(e => e.id === regData.eventId);

  container.innerHTML = `
    <div style="background:var(--bg-surface); border:1px solid var(--border-subtle); border-radius:8px; padding:20px;">
      <h4 style="color:var(--cyan-accent); font-size:1.1rem; margin-bottom:12px;">ENTRY SUMMARY</h4>
      <div style="display:grid; grid-template-columns:1fr 1fr; gap:12px; font-size:0.9rem; margin-bottom:16px;">
        <div><strong>Event:</strong> ${eventObj ? eventObj.name + ' (' + eventObj.subName + ')' : regData.eventId}</div>
        <div><strong>Team Name:</strong> ${regData.teamName}</div>
        <div><strong>Institution:</strong> ${regData.institution}</div>
        <div><strong>City:</strong> ${regData.city}</div>
        <div><strong>Team Size:</strong> ${regData.teamSize} Member${regData.teamSize > 1 ? 's' : ''}</div>
        <div><strong>Fee Status:</strong> ${eventObj ? eventObj.registrationFee : 'Payable at Desk'}</div>
      </div>
      
      <div style="border-top:1px solid var(--border-subtle); padding-top:12px;">
        <div style="font-weight:700; color:var(--silver-200); margin-bottom:4px;">Team Leader:</div>
        <div style="font-size:0.85rem; color:var(--silver-400);">
          ${regData.leader.name} (${regData.leader.collegeId}) | 📞 ${regData.leader.phone} | ✉️ ${regData.leader.email}
        </div>
      </div>

      ${regData.members.length > 0 ? `
        <div style="border-top:1px solid var(--border-subtle); padding-top:12px; margin-top:12px;">
          <div style="font-weight:700; color:var(--silver-200); margin-bottom:4px;">Additional Members:</div>
          ${regData.members.map((m, idx) => `
            <div style="font-size:0.85rem; color:var(--silver-400); margin-bottom:4px;">
              Member ${idx + 2}: ${m.name} (${m.collegeId}) | 📞 ${m.phone}
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

  const eventObj = window.EVENTS_DATA?.find(e => e.id === regData.eventId);
  const code = eventObj ? eventObj.code : 'VIG';
  const randHash = Math.random().toString(36).substring(2, 7).toUpperCase();
  const demoId = `VIG26-${code}-${randHash}`;

  // Store temporarily in localStorage for interaction demonstration
  try {
    const demoPayload = { ...regData, demoId, registeredAt: new Date().toISOString() };
    localStorage.setItem('vigyantra_last_demo_reg', JSON.stringify(demoPayload));
  } catch (e) {
    // localStorage may be restricted in sandbox
  }

  container.innerHTML = `
    <div class="confirmation-card">
      <div class="confirmation-badge">★ REGISTRATION CONFIRMED ★</div>
      <h3 style="font-size:1.8rem; color:#ffffff; margin-bottom:6px;">SILVER JUBILEE SYMPOSIUM PASS</h3>
      <p style="font-size:0.9rem; color:var(--silver-400); margin-bottom:12px;">Your delegate pass and entry credentials have been generated.</p>
      
      <div class="reg-id-display">${demoId}</div>

      <div style="text-align:left; background:rgba(0,0,0,0.3); border-radius:8px; padding:16px; margin:20px 0; font-size:0.88rem; color:var(--silver-300);">
        <div style="margin-bottom:6px;"><strong>Event:</strong> ${eventObj ? eventObj.name : 'Technical Symposium'} (${eventObj ? eventObj.categoryLabel : ''})</div>
        <div style="margin-bottom:6px;"><strong>Team:</strong> ${regData.teamName} (${regData.teamSize} Members)</div>
        <div style="margin-bottom:6px;"><strong>Lead Delegate:</strong> ${regData.leader.name}</div>
        <div style="margin-bottom:6px;"><strong>College:</strong> ${regData.institution}, ${regData.city}</div>
        <div><strong>Venue:</strong> ${eventObj ? eventObj.venue : 'SJBIT Main Campus'}</div>
      </div>

      <p style="font-size:0.78rem; color:var(--gold-jubilee); margin-bottom:20px;">
        ⚠️ NOTE: This is a verified frontend demo pass. Please present this reference code or digital confirmation along with your institutional College ID cards during on-campus check-in.
      </p>

      <div style="display:flex; justify-content:center; gap:12px; flex-wrap:wrap;">
        <button class="btn btn-secondary" onclick="window.print()">
          <span>🖨️ PRINT CONFIRMATION PASS</span>
        </button>
        <button class="btn btn-primary" onclick="closeRegistrationModal()">
          <span>DONE & RETURN</span>
        </button>
      </div>
    </div>
  `;
}

/* ==========================================================================
   11. DIGITAL BROCHURE VIEWER
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

function renderBrochurePage() {
  const card = document.getElementById('brochure-content-card');
  const counter = document.getElementById('brochure-page-counter');
  const prevBtn = document.getElementById('brochure-prev-btn');
  const nextBtn = document.getElementById('brochure-next-btn');

  const pages = window.BROCHURE_PAGES || [];
  const pageData = pages.find(p => p.page === currentBrochurePage) || pages[0];

  if (!card || !pageData) return;

  card.innerHTML = pageData.content;
  if (counter) counter.textContent = `Page ${currentBrochurePage} of ${pages.length}`;

  if (prevBtn) prevBtn.disabled = currentBrochurePage === 1;
  if (nextBtn) nextBtn.disabled = currentBrochurePage === pages.length;
}

window.openBrochureModal = openBrochureModal;
window.closeBrochureModal = closeBrochureModal;
