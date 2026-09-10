'use client';

import React, { useState, useEffect } from 'react';
import UniverseCanvas from '@/components/motion/UniverseCanvas';
import V2CinematicIntro from '@/components/intro/v2/V2CinematicIntro';
import CyberHeader from '@/components/navigation/CyberHeader';
import V3Hero from '@/components/hero/v3/V3Hero';
import GuidingLegacySection from '@/components/legacy/v2/GuidingLegacySection';
import V4ArenasSection from '@/components/arenas/v4/V4ArenasSection';
import ScheduleSection from '@/components/schedule/ScheduleSection';
import SilverJubileeSection from '@/components/jubilee/SilverJubileeSection';
import SjbitInstitutionSection from '@/components/institution/SjbitInstitutionSection';
import CampusSection from '@/components/campus/CampusSection';
import PrizePoolSection from '@/components/prizes/PrizePoolSection';
import BrochureSection from '@/components/brochure-section/BrochureSection';
import FinalCtaSection from '@/components/cta/FinalCtaSection';
import InstitutionalFooter from '@/components/footer/InstitutionalFooter';

import HudModal from '@/components/ui/HudModal';
import CadetRegistrationModal from '@/components/registration/CadetRegistrationModal';
import BrochureViewerModal from '@/components/brochure/BrochureViewerModal';
import EventDossierModal from '@/components/events/EventDossierModal';
import { EventArena } from '@/data/events';
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

    // Coordinated layout stabilization:
    // Ensure all ScrollTriggers are sorted in strict DOM order and refreshed after layout settles
    let rafId: number;
    const stabilizeTriggers = () => {
      ScrollTrigger.sort();
      ScrollTrigger.refresh();
    };

    if (typeof document !== 'undefined' && document.fonts && document.fonts.ready) {
      document.fonts.ready.then(() => {
        rafId = requestAnimationFrame(stabilizeTriggers);
      });
    } else {
      rafId = requestAnimationFrame(stabilizeTriggers);
    }

    // Secondary backup refresh to account for asynchronous 3D canvas / textures
    const backupTimer = setTimeout(stabilizeTriggers, 350);

    return () => {
      cancelAnimationFrame(rafId);
      clearTimeout(backupTimer);
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
      {/* 1. Cinematic Opening Intro (plays once per session) */}
      <V2CinematicIntro />

      {/* 2. Ambient Universe Canvas & Cyber Overlays */}
      <UniverseCanvas />
      <div className="cosmic-nebula-glow" aria-hidden="true" />
      <div className="cyber-grid-overlay" aria-hidden="true" />
      <div className="scanline-screen-effect" aria-hidden="true" />

      {/* 3. Top Cyber Navigation Header */}
      <CyberHeader onOpenModal={handleOpenModal} onScrollTo={handleScrollTo} />

      {/* 4. VIGYANTRA Hero / Home (V3 3D Monument + Transformation + Register CTA) */}
      <V3Hero
        onOpenModal={handleOpenModal}
        onScrollTo={handleScrollTo}
        onSelectEvent={handleSelectEvent}
      />

      {/* 5. The Guiding Legacy (Standalone Institutional Bridge - Only ONCE on page) */}
      <GuidingLegacySection />

      {/* 6. The 8 Arenas (Scroll-Driven Timeline & Identity Cards) */}
      <V4ArenasSection
        onSelectEvent={handleSelectEvent}
        onRegisterEvent={handleRegisterEvent}
        onOpenModal={handleOpenModal}
      />

      {/* 7. Schedule / Event Timeline */}
      <ScheduleSection />

      {/* 8. 25 Years / Silver Jubilee Celebration */}
      <SilverJubileeSection />

      {/* 9. SJBIT / Institution */}
      <SjbitInstitutionSection />

      {/* 10. Campus / Telemetry & Venue */}
      <CampusSection onOpenVenueModal={() => handleOpenModal('venue')} />

      {/* 11. Prize Pool / Awards Breakdown */}
      <PrizePoolSection />

      {/* 11. Brochure / Event Information */}
      <BrochureSection onOpenBrochureModal={() => handleOpenModal('brochure')} />

      {/* 12. Final CTA */}
      <FinalCtaSection
        onOpenRegistration={() => handleRegisterEvent('')}
        onScrollToArenas={() => handleScrollTo('arenas')}
      />

      {/* 14. Institutional Footer */}
      <InstitutionalFooter onOpenModal={handleOpenModal} onScrollTo={handleScrollTo} />

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
