import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#030712",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export const metadata: Metadata = {
  title: "VIGYANTRA 2026 | SJB Institute of Technology -- Silver Jubilee Celebrations",
  description:
    "VIGYANTRA 2026 -- 25th Silver Jubilee National Technical Symposium at SJB Institute of Technology, Bengaluru on October 30, 2026. 8 Flagship Arenas, Rs. 4,00,000 Prize Pool. Ideas Today Solutions Tomorrow.",
  keywords: [
    "Vigyantra 2026",
    "SJBIT",
    "SJB Institute of Technology",
    "Silver Jubilee",
    "AI Prompt Battle",
    "Code Relay",
    "Zerocrypt CTF",
    "RoboInnovate",
    "Green Tech",
    "App Development Challenge",
    "Innovation Marathon",
    "Hack and Hunt",
    "Bengaluru"
  ],
  openGraph: {
    title: "VIGYANTRA 2026 | SJBIT Silver Jubilee",
    description: "National Technical Symposium - 8 Flagship Arenas - Rs. 4,00,000 Prize Pool",
    url: "https://vigyantra.sjbit.edu.in",
    siteName: "VIGYANTRA 2026",
    locale: "en_IN",
    type: "website",
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cinzel:wght@500;700;800;900&family=Inter:wght@300;400;500;600;700;800&family=Orbitron:wght@600;700;800;900&family=Space+Grotesk:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
