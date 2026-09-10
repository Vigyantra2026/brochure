export interface ScheduleItem {
  time: string;
  title: string;
  venue: string;
  type: string;
  desc: string;
}

export interface ScheduleData {
  day1: {
    date: string;
    title: string;
    events: ScheduleItem[];
  };
  day2: {
    date: string;
    title: string;
    events: ScheduleItem[];
  };
}

export const SCHEDULE_DATA = {
  day1: {
    date: "Friday, 30 October 2026",
    title: "DAY 01: THE LAUNCH & BATTLE OF MINDS",
    events: [
      {
        time: "08:30 AM - 09:45 AM",
        title: "Delegate Check-in & Security Credential Issuance",
        description: "Verification of College ID cards, issuance of commemorative Silver Jubilee delegate passes and event welcome kits.",
        venue: "Main Campus Reception & Registration Desks",
        tag: "ADMIN"
      },
      {
        time: "10:00 AM - 10:45 AM",
        title: "Grand Inaugural Ceremony & Lamp Lighting",
        description: "Divine invocations, presidential address by Revered Swamijis, keynote by distinguished Chief Guest from Tech Industry, and official unveiling of Vigyantra 2026.",
        venue: "SJB Institute of Technology Main Auditorium",
        tag: "CEREMONY"
      },
      {
        time: "11:00 AM - 02:00 PM",
        title: "Arena Kickoff: Session 1 Competitions",
        description: "Parallel initiation of AI Prompt Battle (Stage 1), Code Relay (Stage 1), Hack & Hunt (Sector 1), and App Development Challenge.",
        venue: "Respective Labs & Center of Excellence",
        tag: "COMPETITION"
      },
      {
        time: "01:00 PM - 02:00 PM",
        title: "Networking Lunch & Cyber Exhibition",
        description: "Complimentary networking luncheon for registered delegates and faculty mentors; showcase of 25-Year SJBIT Innovation Gallery.",
        venue: "Campus Food Court & Quadrangle",
        tag: "NETWORKING"
      },
      {
        time: "02:00 PM - 04:30 PM",
        title: "Arena Climax: Zerocrypt CTF & RoboInnovate Finals",
        description: "High-octane live King of the Hill cybersecurity battles and dynamic autonomous robotics arena course runs.",
        venue: "Cyber Defense Lab & Robotics Arena",
        tag: "FINALS"
      },
      {
        time: "04:30 PM - 05:30 PM",
        title: "Day 1 Stage Debrief & Innovation Marathon Overnight Kickoff",
        description: "Announcement of Day 1 winners for single-day tracks; commencement of overnight sprint for Innovation Marathon.",
        venue: "Main Auditorium",
        tag: "STAGE"
      }
    ]
  },
  day2: {
    date: "Saturday, 31 October 2026",
    title: "DAY 02: GRAND FINALS & VALEDICTORY GALA",
    events: [
      {
        time: "09:00 AM - 11:30 AM",
        title: "Innovation Marathon: Working Prototype Audits",
        description: "Jury walkthrough and inspection of 24-hour prototypes built overnight across hardware, software, and CleanTech domains.",
        venue: "Innovation Incubation Arena",
        tag: "EVALUATION"
      },
      {
        time: "11:30 AM - 01:00 PM",
        title: "Grand Investor & Venture Partner Pitch Showcase",
        description: "Top 8 finalists pitch live on stage before industry leaders, venture investors, and technology evangelists.",
        venue: "Main Auditorium",
        tag: "SHOWCASE"
      },
      {
        time: "01:00 PM - 02:00 PM",
        title: "Silver Jubilee Luncheon",
        description: "Executive banquet celebrating 25 years of engineering excellence with dignitaries and delegates.",
        venue: "Campus Banquet Hall",
        tag: "BANQUET"
      },
      {
        time: "02:30 PM - 04:30 PM",
        title: "Grand Valedictory Ceremony & ₹4,00,000 Prize Distribution",
        description: "Felicitation of winners across all 8 Flagship Arenas, presentation of Silver Jubilee trophies, cash prizes, and closing address.",
        venue: "Main Auditorium",
        tag: "AWARDS"
      },
      {
        time: "04:30 PM - 05:30 PM",
        title: "Cultural Celebration & Symposium Adjournment",
        description: "Electrifying cultural celebrations, commemorative group photo sessions, and certificate distribution.",
        venue: "Open Air Amphitheatre",
        tag: "CELEBRATION"
      }
    ]
  }
};
