import { EVENTS_DATA, EventArena } from './events';

export interface ArenaHighlight {
  label: string;
  value: string;
}

export type ArenaVisualType =
  | 'neural'     // 01 APB - AI Prompt Battle
  | 'algorithm'  // 02 CR - Code Relay
  | 'cyber'      // 03 HNH - Hack & Hunt
  | 'modular'    // 04 ADC - App Development Challenge
  | 'cipher'     // 05 ZCTF - ZeroCrypt CTF
  | 'hardware'   // 06 INM - Innovation Marathon
  | 'energy'     // 07 GTC - Green Tech Challenge
  | 'robotics';  // 08 RBI - RobotInnovate

export interface ArenaRound {
  roundNumber: string;
  title: string;
  duration?: string;
  format?: string;
  task: string;
  scoring?: string;
  qualification?: string;
}

export interface ArenaCoordinator {
  faculty: string;
  facultyContact?: string;
  student: string;
  studentContact?: string;
  email?: string;
}

export interface ArenaFAQItem {
  q: string;
  a: string;
}

export interface ArenaV4Data {
  id: string;
  number: string;
  code: string;
  slug: string;
  name: string;
  subName: string;
  category: string;
  categoryLabel: string;
  shortDescription: string;
  description: string;
  prizePool: string;
  prizeWinner: number;
  prizeRunnerUp: number;
  teamSize: string;
  registrationFee: string;
  fee: number;
  venue: string;
  duration: string;
  tags: string[];
  accentColor: string;
  technicalMotif: string;
  visualType: ArenaVisualType;
  blueprintSpec: string;
  highlights: ArenaHighlight[];
  roundsCount: number;
  rounds: ArenaRound[];
  rules: string[];
  tasks: string[];
  scoring: string[];
  judgingCriteria: string[];
  eligibility: string[];
  submissionRequirements: string[];
  coordinator: ArenaCoordinator;
  faqs: ArenaFAQItem[];
  registrationUrl?: string;
  rawEvent: EventArena;
}

// Map the 8 official arenas from EVENTS_DATA into the structured V4 Arena system
export const ARENAS_V4: ArenaV4Data[] = EVENTS_DATA.map((event) => {
  const visualTypes: Record<string, ArenaVisualType> = {
    APB: 'neural',
    CR: 'algorithm',
    HNH: 'cyber',
    ADC: 'modular',
    ZCTF: 'cipher',
    INM: 'hardware',
    GTC: 'energy',
    RBI: 'robotics',
  };

  const blueprintSpecs: Record<string, string> = {
    APB: 'SPEC // ML-ATTN-768D',
    CR: 'SPEC // DAG-FORK-EXEC',
    HNH: 'SPEC // RECON-RAD-SEC',
    ADC: 'SPEC // ISO-3TIER-ARCH',
    ZCTF: 'SPEC // CRYPT-ZK-ROT',
    INM: 'SPEC // PCB-SMD-MCU',
    GTC: 'SPEC // BIO-SOLAR-CAD',
    RBI: 'SPEC // 6AX-KIN-JOINT',
  };

  const technicalMotifs: Record<string, string> = {
    APB: 'OCTAHEDRAL PROMPT MATRIX // MULTIMODAL INFERENCE',
    CR: 'SYNCHRONIZED BATON RELAY // DISTRIBUTED REFACTORING',
    HNH: 'HEXAGONAL CIPHER SHIELD // RECON & VULN HARVEST',
    ADC: 'MODULAR APP PLATFORM // FULL-STACK MICROSERVICES',
    ZCTF: 'CRYPTOGRAPHIC PRISM // BINARY REVERSE & DEFENSE',
    INM: 'KINETIC NEXUS DOCK // EMBEDDED TELEMETRY & IOT',
    GTC: 'PHOTOVOLTAIC CELL // CIRCULAR ENERGY ARCHITECTURE',
    RBI: 'DUAL-AXIS ACTUATOR // AUTONOMOUS ROVER NAVIGATION',
  };

  const highlights: ArenaHighlight[] = [
    { label: 'PRIZE POOL', value: event.prizePool || '₹50,000' },
    { label: 'TEAM SIZE', value: event.teamSize || `${event.minTeam} - ${event.maxTeam} Members` },
    { label: 'ENTRY FEE', value: event.registrationFee || `₹${event.fee} / Team` },
    { label: 'VENUE', value: event.venue || 'SJBIT Campus' },
  ];

  // Standard symposium FAQs for technical arenas
  const defaultFaqs: ArenaFAQItem[] = [
    {
      q: 'Who is eligible to participate in this arena?',
      a: 'Open to enrolled undergraduate and postgraduate students from recognized institutions across India. A valid college/university ID card is required for verification at check-in.',
    },
    {
      q: 'Can members of a team be from different institutions or engineering branches?',
      a: 'Yes, cross-college and interdisciplinary teams are permitted, provided all delegates are enrolled students and the team size complies with the specified limits (2–4 members).',
    },
    {
      q: 'What should teams bring on event day (30 October 2026)?',
      a: 'Delegates should bring personal laptops, chargers, institutional ID cards, and any arena-specific pre-approved hardware or tools. Dedicated lab workstations and high-speed network connectivity are provided on campus.',
    },
    {
      q: 'How is the prize pool distributed between winners?',
      a: 'Each flagship arena features a ₹50,000 prize purse: Champion receives ₹30,000 and Runner-Up receives ₹20,000, along with certificates of technical excellence.',
    },
  ];

  const coordinator: ArenaCoordinator = {
    faculty: event.coordinator?.faculty || event.facultyCoordinator || 'Prof. Faculty Convenor',
    facultyContact: event.coordinator?.facultyContact || event.contactPhone || '+91 XXXXX XXXXX',
    student: event.coordinator?.student || event.studentCoordinator || 'Student Arena Lead',
    studentContact: event.coordinator?.studentContact || event.contactPhone || '+91 XXXXX XXXXX',
    email: event.coordinator?.email || event.contactEmail || 'vigyantra@sjbit.edu.in',
  };

  const eligibilityList = Array.isArray(event.eligibility)
    ? event.eligibility
    : event.eligibility
    ? [event.eligibility]
    : [
        'Open to all enrolled undergraduate and postgraduate students with valid institutional ID cards.',
        `Teams must comprise ${event.minTeam} to ${event.maxTeam} registered delegates.`,
      ];

  return {
    id: event.id,
    number: event.number || '01',
    code: event.code || event.id,
    slug: event.slug || event.id.toLowerCase(),
    name: event.name,
    subName: event.subName || '',
    category: event.category || 'technology',
    categoryLabel: event.categoryLabel || 'TECHNICAL SYMPOSIUM',
    shortDescription: event.shortDescription || event.description.slice(0, 160) + '...',
    description: event.description,
    prizePool: event.prizePool || '₹50,000',
    prizeWinner: event.prizeWinner || 30000,
    prizeRunnerUp: event.prizeRunnerUp || 20000,
    teamSize: event.teamSize || `${event.minTeam} - ${event.maxTeam} Members`,
    registrationFee: event.registrationFee || `₹${event.fee} / Team`,
    fee: event.fee || 500,
    venue: event.venue || 'SJBIT Campus',
    duration: event.duration || '10:00 AM - 04:00 PM',
    tags: event.tags || [],
    accentColor: event.accentColor || '#d4af37',
    technicalMotif: technicalMotifs[event.id] || 'ARCHITECTURAL MODULE',
    visualType: visualTypes[event.id] || 'neural',
    blueprintSpec: blueprintSpecs[event.id] || 'SPEC // REF-01',
    highlights,
    roundsCount: event.rounds?.length || 3,
    rounds: (event.rounds as ArenaRound[]) || [],
    rules: event.rules || [],
    tasks: event.tasks || [],
    scoring: event.scoring || [],
    judgingCriteria: event.judgingCriteria || [],
    eligibility: eligibilityList,
    submissionRequirements: event.submissionRequirements || [],
    coordinator,
    faqs: (event as any).faqs || defaultFaqs,
    registrationUrl: event.registrationUrl || '',
    rawEvent: event as unknown as EventArena,
  };
});

export function getArenaById(id: string): ArenaV4Data | undefined {
  if (!id) return undefined;
  const clean = id.trim().toLowerCase();
  return ARENAS_V4.find(
    (a) =>
      a.id.toLowerCase() === clean ||
      a.code.toLowerCase() === clean ||
      a.slug.toLowerCase() === clean ||
      a.number === id.trim()
  );
}

export function getArenaByIndex(index: number): ArenaV4Data | undefined {
  if (index < 0 || index >= ARENAS_V4.length) return undefined;
  return ARENAS_V4[index];
}

export function getAdjacentArenas(currentId: string): {
  prev: ArenaV4Data;
  next: ArenaV4Data;
} {
  const currentIndex = ARENAS_V4.findIndex(
    (a) =>
      a.id.toLowerCase() === currentId.toLowerCase() ||
      a.slug.toLowerCase() === currentId.toLowerCase() ||
      a.code.toLowerCase() === currentId.toLowerCase()
  );
  const idx = currentIndex >= 0 ? currentIndex : 0;
  const prevIdx = (idx - 1 + ARENAS_V4.length) % ARENAS_V4.length;
  const nextIdx = (idx + 1) % ARENAS_V4.length;
  return {
    prev: ARENAS_V4[prevIdx],
    next: ARENAS_V4[nextIdx],
  };
}
