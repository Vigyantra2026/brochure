export interface SymposiumConfig {
  institution: string;
  trust: string;
  invocatory: string;
  status: string;
  accreditations: string;
  edition: string;
  year: string;
  theme: string;
  tagline: string;
  totalPrizePool: string;
  totalPrizeAmountNumber: number;
  campusAddress: string;
  directionsUrl: string;
  targetDate: string;
  eventDateDisplay: string;
  brochurePdfUrl: string;
  socials: {
    instagram: string;
    linkedin: string;
    youtube: string;
    github: string;
  };
}

export interface StatsItem {
  value: string;
  prefix?: string;
  suffix?: string;
  label: string;
  icon: string;
  display?: string;
}

export const SYMPOSIUM_CONFIG = {
  institution: "SJB Institute of Technology",
  trust: "Sri Adichunchanagiri Shikshana Trust®",
  invocatory: "|| Jai Sri Gurudev ||",
  status: "An Autonomous Institute under VTU",
  accreditations: "NAAC A+ | NBA | AICTE | ISO | IEEE CS Bengaluru Section",
  edition: "25th Silver Jubilee Edition",
  year: "2026",
  theme: "Ideas Today Solutions Tomorrow",
  tagline: "Skills, Ideas, Impact for a Brighter Tomorrow • 25 Years of Engineering Excellence",
  totalPrizePool: "₹ 4,00,000",
  totalPrizeAmountNumber: 400000,
  campusAddress: "No.67, BGS Health & Education City, Dr. Vishnuvardhan Rd, Kengeri, Bengaluru, Karnataka 560060",
  directionsUrl: "https://maps.google.com/?q=SJB+Institute+of+Technology+Bengaluru",
  targetDate: "2026-10-30T09:00:00+05:30",
  eventDateDisplay: "30 OCTOBER 2026 (FRIDAY)",
  brochurePdfUrl: "#",
  socials: {
    instagram: "https://instagram.com/example_handle",
    linkedin: "https://linkedin.com/company/example_handle",
    youtube: "https://youtube.com/@example_handle",
    github: "https://github.com/Vigyantra2026/brochure"
  }
};

export const STATS_DATA = [
  { value: "25", suffix: "th", label: "SILVER JUBILEE EDITION", icon: "award" },
  { value: "08", suffix: "", label: "FLAGSHIP ARENAS", icon: "layers" },
  { value: "400000", prefix: "₹", suffix: "", label: "PRIZE POOL", icon: "trophy", display: "₹ 4,00,000" },
  { value: "1500", suffix: "+", label: "DELEGATES & INNOVATORS", icon: "users" },
  { value: "75", suffix: "+", label: "ACADEMIC INSTITUTIONS", icon: "compass" }
];
