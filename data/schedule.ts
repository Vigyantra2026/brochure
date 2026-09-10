export interface ScheduleItem {
  time: string;
  title: string;
  description: string;
  venue: string;
  tag: string;
}

export interface ScheduleDay {
  date: string;
  title: string;
  events: ScheduleItem[];
}

export interface ScheduleData {
  isPlaceholder: boolean;
  statusNotice: string;
  day1: ScheduleDay;
  day2: ScheduleDay;
}

export const SCHEDULE_DATA: ScheduleData = {
  isPlaceholder: true,
  statusNotice: 'TENTATIVE TIMINGS // FINAL OFFICIAL SCHEDULE TO BE ANNOUNCED',
  day1: {
    date: 'Friday, 30 October 2026',
    title: 'DAY 01: SYMPOSIUM INAUGURATION & ARENAS COMBAT',
    events: [
      {
        time: '08:30 AM - 09:45 AM',
        title: 'Registration & Credential Verification',
        description: 'Verification of collegiate ID cards, distribution of commemorative Silver Jubilee delegate kits and access passes.',
        venue: 'Main Reception & Registration Desks',
        tag: 'ADMIN',
      },
      {
        time: '10:00 AM - 10:45 AM',
        title: 'Inaugural Ceremony & Lamp Lighting',
        description: 'Divine blessings of Poojya Swamijis, presidential address, and the ceremonial unveiling of Vigyantra 2026.',
        venue: 'SJB Institute of Technology Main Auditorium',
        tag: 'CEREMONY',
      },
      {
        time: '11:00 AM - 01:30 PM',
        title: '8 Flagship Arenas: Round 01 Commences',
        description: 'Parallel execution of AI Prompt Battle, Code Relay, Hack & Hunt, App Challenge, CTF, and Hardware arenas.',
        venue: 'Respective Department Laboratories & Centers of Excellence',
        tag: 'COMPETITION',
      },
      {
        time: '01:30 PM - 02:30 PM',
        title: 'Luncheon & Technical Networking',
        description: 'Networking meal for registered delegates and faculty mentors; exploration of the 25-Year Innovation Gallery.',
        venue: 'Campus Food Court & Central Quadrangle',
        tag: 'NETWORKING',
      },
      {
        time: '02:30 PM - 05:00 PM',
        title: 'Arena Climax & Knockout Stages',
        description: 'High-octane cybersecurity CTF flags, live robot test courses, algorithmic finals, and prototype reviews.',
        venue: 'Cyber Defense Lab & Robotics Arena',
        tag: 'FINALS',
      },
      {
        time: '05:00 PM - 06:00 PM',
        title: 'Innovation Marathon Overnight Launch',
        description: 'Announcement of single-day track qualifiers and briefing for 24-hour sprint competitors.',
        venue: 'Main Auditorium',
        tag: 'STAGE',
      },
    ],
  },
  day2: {
    date: 'Saturday, 31 October 2026',
    title: 'DAY 02: GRAND FINALS & ₹4,00,000 AWARDS GALA',
    events: [
      {
        time: '09:00 AM - 11:30 AM',
        title: 'Innovation Marathon: Prototype Audits',
        description: 'Jury evaluation of working technical solutions across hardware, AI, and green technology domains.',
        venue: 'Innovation Incubation Center',
        tag: 'EVALUATION',
      },
      {
        time: '11:30 AM - 01:00 PM',
        title: 'Grand Pitch Showcase',
        description: 'Top finalist teams present live demonstrations before technical judges and venture mentors.',
        venue: 'Main Auditorium',
        tag: 'SHOWCASE',
      },
      {
        time: '01:00 PM - 02:00 PM',
        title: 'Executive Luncheon',
        description: 'Official banquet honoring institutional dignitaries, jury leads, and student convenors.',
        venue: 'Campus Banquet Hall',
        tag: 'BANQUET',
      },
      {
        time: '02:30 PM - 04:30 PM',
        title: 'Grand Valedictory Ceremony & ₹4,00,000 Prize Distribution',
        description: 'Conferral of ₹4,00,000 cash prizes, Silver Jubilee trophies, and certificates of distinction across all 8 Arenas.',
        venue: 'Main Auditorium',
        tag: 'AWARDS',
      },
      {
        time: '04:30 PM - 05:30 PM',
        title: 'Symposium Adjournment & Commemorative Photo',
        description: 'Official closing celebration, photo session with winners, and issue of verified participation credentials.',
        venue: 'Open Air Amphitheatre',
        tag: 'CELEBRATION',
      },
    ],
  },
};
