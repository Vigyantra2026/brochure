import { EVENTS_DATA, EventArena } from './events';

export interface ArenaHighlight {
  label: string;
  value: string;
}

export interface ArenaV4Data {
  id: string;
  number: string;
  code: string;
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
  highlights: ArenaHighlight[];
  roundsCount: number;
  rawEvent: EventArena;
}

// Map the 8 official arenas from EVENTS_DATA into the structured V4 Arena system
export const ARENAS_V4: ArenaV4Data[] = EVENTS_DATA.map((event) => {
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

  return {
    id: event.id,
    number: event.number || '01',
    code: event.code || event.id,
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
    highlights,
    roundsCount: event.rounds?.length || 3,
    rawEvent: event as unknown as EventArena,
  };
});

export function getArenaById(id: string): ArenaV4Data | undefined {
  return ARENAS_V4.find((a) => a.id === id || a.code === id);
}
