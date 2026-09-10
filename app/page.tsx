'use client';

import React, { useState, useEffect } from 'react';
import UniverseCanvas from '@/components/motion/UniverseCanvas';
import V2CinematicIntro from '@/components/intro/v2/V2CinematicIntro';
import CyberHeader from '@/components/navigation/CyberHeader';
import V2Hero from '@/components/hero/v2/V2Hero';
import V3Hero from '@/components/hero/v3/V3Hero';
import V2LegacySection from '@/components/legacy/v2/V2LegacySection';
import CoordinatorsDesk from '@/components/coordinators/CoordinatorsDesk';
import CampusTelemetry from '@/components/campus/CampusTelemetry';
import ContactTerminal from '@/components/contact/ContactTerminal';
import CyberFooter from '@/components/navigation/CyberFooter';
import HudModal from '@/components/ui/HudModal';
import CadetRegistrationModal from '@/components/registration/CadetRegistrationModal';
import BrochureViewerModal from '@/components/brochure/BrochureViewerModal';
import EventDossierModal from '@/components/events/EventDossierModal';
import V4ArenasSection from '@/components/arenas/v4/V4ArenasSection';
import { EventArena, EVENTS_DATA } from '@/data/events';
import { initLenis } from '@/lib/lenis';
import { gsap, ScrollTrigger } from '@/lib/gsap';

export default function HomePage() {
  // Modal states
  const [hudModalId, setHudModalId] = useState<string | null>(null);
  const [regModalOpen, setRegModalOpen] = useState(false);
  const [regInitialEventId, setRegInitialEventId] = useState('');
  const [brochureModalOpen, setBrochureModalOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<EventArena | null>(null);
  const [eventModalOpen, setEventModalOpen] = useState(false);

  // Initialize Lenis and GSAP ScrollTrigger
  useEffect(() => {
    const lenis = initLenis();

    if (lenis) {
      lenis.on('scroll', ScrollTrigger.update);
      gsap.ticker.add((time) => {
        lenis.raf(time * 1000);
      });
      gsap.ticker.lagSmoothing(0);
    }

    // Gentle fade-in triggers for info sections
    const sections = document.querySelectorAll('.info-section');
    sections.forEach((sec) => {
      gsap.fromTo(
        sec,
        { opacity: 0.85, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sec,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  const handleOpenModal = (modalId: string) => {
    if (modalId === 'registration') {
      setRegInitialEventId('');
      setRegModalOpen(true);
    } else if (modalId === 'brochure') {
      setBrochureModalOpen(true);
    } else {
      setHudModalId(modalId);
    }
  };

  const handleScrollTo = (sectionId: string) => {
    const target = document.getElementById(sectionId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectEvent = (event: EventArena) => {
    setSelectedEvent(event);
    setEventModalOpen(true);
  };

  const handleRegisterEvent = (eventId: string) => {
    setRegInitialEventId(eventId);
    setRegModalOpen(true);
  };

  return (
    <>
      {/* 1. V2 Cinematic 6-Scene Opening Experience */}
      <V2CinematicIntro />

      {/* 2. Full-Screen Universe Canvas Backdrop */}
      <UniverseCanvas />
      <div className="cosmic-nebula-glow" aria-hidden="true" />
      <div className="cyber-grid-overlay" aria-hidden="true" />
      <div className="scanline-screen-effect" aria-hidden="true" />

      {/* 3. Top Cyber Navigation Header */}
      <CyberHeader onOpenModal={handleOpenModal} onScrollTo={handleScrollTo} />

      {/* 4. V3 3D Prototype Homepage Command Deck Hero (100dvh) */}
      <V3Hero
        onOpenModal={handleOpenModal}
        onScrollTo={handleScrollTo}
        onSelectEvent={handleSelectEvent}
      />

      {/* 5. V4.1 The 8 Flagship Arenas Section (MAIN FEATURED SECTION) */}
      <V4ArenasSection
        onSelectEvent={handleSelectEvent}
        onRegisterEvent={handleRegisterEvent}
        onOpenModal={handleOpenModal}
      />

      {/* 6. Legacy Section (SJBIT / 25 Years) */}
      <V2LegacySection onScrollToArenas={() => handleScrollTo('arenas')} />

      {/* 7. Scrollable Technical Dossier & Information Sections */}
      <div className="info-scroll-container">

        {/* About Section */}
        <section id="about" className="info-section">
          <div className="hud-scanline-beam" aria-hidden="true" />
          <div className="info-section-inner">
            <div className="info-section-header">
              <span className="info-badge">✦ 01 // SYMPOSIUM OVERVIEW ✦</span>
              <h2 className="info-title">ABOUT VIGYANTRA 2026</h2>
              <div className="info-motto">“Ideas Today Solutions Tomorrow”</div>
            </div>

            <div className="info-text-block">
              <p>
                <strong>VIGYANTRA 2026</strong> is the premier <strong>25th Silver Jubilee National Technical Symposium</strong> hosted by <strong>SJB Institute of Technology (SJBIT)</strong>, Bengaluru. Convening on <strong>30 October 2026 (Friday)</strong>, the symposium unites over 1,500 collegiate innovators, engineers, ethical hackers, and visionary developers across India.
              </p>
              <p>
                Spanning cutting-edge computational paradigms, AI systems, secure infrastructure, and robotics engineering, VIGYANTRA 2026 features <strong>8 Flagship Technical Arenas</strong> competing for a combined national prize pool of <strong>₹ 4,00,000</strong>.
              </p>
            </div>

            <div className="info-highlights-grid">
              <div className="info-stat-card">
                <div className="info-stat-num cyan">08</div>
                <div className="info-stat-lbl">FLAGSHIP ARENAS</div>
                <div className="info-stat-sub">AI, Coding, CTF, Web3 &amp; Robotics</div>
              </div>
              <div className="info-stat-card">
                <div className="info-stat-num gold">₹ 4,00,000</div>
                <div className="info-stat-lbl">PRIZE POOL</div>
                <div className="info-stat-sub">₹50,000 Allocated Per Arena</div>
              </div>
              <div className="info-stat-card">
                <div className="info-stat-num cyan">25 YRS</div>
                <div className="info-stat-lbl">SILVER JUBILEE</div>
                <div className="info-stat-sub">Celebration of Engineering Excellence</div>
              </div>
              <div className="info-stat-card">
                <div className="info-stat-num gold">30 OCT 2026</div>
                <div className="info-stat-lbl">FRIDAY HORIZON</div>
                <div className="info-stat-sub">SJB Campus, Bengaluru, India</div>
              </div>
            </div>

            <div className="info-section-action" style={{ marginTop: '28px' }}>
              <button className="btn btn-primary" onClick={() => handleOpenModal('events')}>
                <span>LAUNCH ARENAS MODAL VIEW →</span>
              </button>
            </div>
          </div>
        </section>

        {/* Coordinators */}
        <CoordinatorsDesk />

        {/* Campus & Location Telemetry */}
        <CampusTelemetry onOpenVenueModal={() => handleOpenModal('venue')} />

        {/* Contact Helpdesk */}
        <ContactTerminal />

        {/* Footer */}
        <CyberFooter onOpenModal={handleOpenModal} />
      </div>

      {/* 6. Modals Layer */}
      {/* HUD Modal for Events, Schedule, Prizes, Rules, FAQ, Venue */}
      <HudModal
        modalId={hudModalId}
        onClose={() => setHudModalId(null)}
        onSelectEvent={handleSelectEvent}
        onRegisterEvent={handleRegisterEvent}
      />

      {/* Cadet Registration 5-Step Terminal */}
      <CadetRegistrationModal
        isOpen={regModalOpen}
        initialEventId={regInitialEventId}
        onClose={() => setRegModalOpen(false)}
      />

      {/* Digital Brochure Viewer Flipbook */}
      <BrochureViewerModal
        isOpen={brochureModalOpen}
        onClose={() => setBrochureModalOpen(false)}
        onOpenRegistration={() => {
          setRegInitialEventId('');
          setRegModalOpen(true);
        }}
      />

      {/* Event Dossier Modal */}
      <EventDossierModal
        event={selectedEvent}
        isOpen={eventModalOpen}
        onClose={() => setEventModalOpen(false)}
        onRegister={handleRegisterEvent}
      />
    </>
  );
}
