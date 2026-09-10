export interface PrizeItem {
  id: string;
  category: string;
  name: string;
  winner: string;
  runner: string;
  total: string;
  perks: string[];
}

export const PRIZES_DATA = [
  {
    title: "GRAND SYMPOSIUM POOL",
    amount: "₹ 4,00,000",
    subtitle: "Across All 8 Competitive Arenas",
    description: "Honoring pioneering innovation, algorithmic supremacy, cyber defense mastery, and hardware excellence across the Silver Jubilee edition.",
    highlight: true,
    tag: "GRAND POOL"
  },
  {
    title: "PER ARENA ALLOCATION",
    amount: "₹ 50,000",
    subtitle: "Each Flagship Event",
    description: "Every flagship arena awards ₹30,000 to the Champions and ₹20,000 to the Runners-Up alongside custom Silver Jubilee mementos.",
    highlight: false,
    tag: "ARENA PRIZE"
  },
  {
    title: "ARENA CHAMPIONS (x8)",
    amount: "₹ 30,000",
    subtitle: "First Place Glory",
    description: "Awarded to the premier squad in each of the 8 technical arenas + Commemorative Silver Jubilee Trophy + Merit Credentials.",
    highlight: false,
    tag: "1ST PLACE"
  },
  {
    title: "ARENA RUNNERS-UP (x8)",
    amount: "₹ 20,000",
    subtitle: "Second Place Distinction",
    description: "Awarded to the second-place team in each arena + Silver Jubilee Medallion + Certificate of Technical Distinction.",
    highlight: false,
    tag: "2ND PLACE"
  },
  {
    title: "INNOVATION INCUBATION GRANTS",
    amount: "WORTH ₹ 1,00,000+",
    subtitle: "Direct Startup Incubation",
    description: "Exclusive access to SJBIT Incubation Center seed mentorship, cloud credits, patent filing support, and venture network access.",
    highlight: true,
    tag: "GRANTS & CREDITS"
  },
  {
    title: "PARTICIPATION CREDENTIALS",
    amount: "ALL CADETS",
    subtitle: "Verified NFT / Digital Certificate",
    description: "Every registered delegate receives an official, cryptographically verified Certificate of Participation backed by IEEE CS & SJBIT.",
    highlight: false,
    tag: "CERTIFICATES"
  }
];
