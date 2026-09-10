import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ARENAS_V4, getArenaById } from '@/data/arenas';
import ArenaDossier from '@/components/arenas/v4/ArenaDossier';
import Link from 'next/link';

interface PageProps {
  params: {
    arena: string;
  };
}

// Pre-generate static paths for all 8 arenas
export function generateStaticParams() {
  return ARENAS_V4.map((arena) => ({
    arena: arena.slug,
  }));
}

// Generate dynamic metadata for the arena dossier
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const arena = getArenaById(params.arena);
  if (!arena) {
    return {
      title: 'Arena Not Found | VIGYANTRA 2026',
    };
  }

  return {
    title: `Arena ${arena.number}: ${arena.name} | VIGYANTRA 2026 Technical Dossier`,
    description: arena.shortDescription || arena.description,
    keywords: [
      arena.name,
      arena.code,
      `Arena ${arena.number}`,
      'Vigyantra 2026',
      'SJBIT',
      'Technical Symposium',
      'Bengaluru',
    ],
    openGraph: {
      title: `Arena ${arena.number}: ${arena.name} | VIGYANTRA 2026`,
      description: arena.shortDescription || arena.description,
      url: `https://vigyantra.sjbit.edu.in/arenas/${arena.slug}`,
      siteName: 'VIGYANTRA 2026',
      type: 'article',
    },
  };
}

export default function ArenaDossierPage({ params }: PageProps) {
  const arena = getArenaById(params.arena);

  if (!arena) {
    notFound();
  }

  return (
    <main className="v4-dossier-page-root">
      {/* Top Global Command Bar */}
      <header className="v4-dossier-topbar">
        <div className="v4-dossier-topbar-inner">
          <Link href="/" className="v4-topbar-brand">
            <span className="v4-topbar-badge">SJBIT</span>
            <span className="v4-topbar-title">VIGYANTRA 2026</span>
            <span className="v4-topbar-sep">•</span>
            <span className="v4-topbar-sub">SILVER JUBILEE</span>
          </Link>

          <div className="v4-topbar-actions">
            <Link href="/#arenas" className="v4-topbar-back-btn">
              <span>← ALL ARENAS</span>
            </Link>
            <Link href="/#registration" className="v4-topbar-reg-btn">
              <span>REGISTER ⚡</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Dossier Component with 8 Structured Sections */}
      <ArenaDossier arena={arena} />

      {/* Global Dossier Minimal Footer */}
      <footer className="v4-dossier-footer">
        <div className="v4-dossier-footer-inner">
          <div className="v4-dfooter-left">
            <span className="v4-dfooter-gold">VIGYANTRA 2026</span>
            <span className="v4-dfooter-sep">//</span>
            <span>25TH SILVER JUBILEE TECHNICAL SYMPOSIUM</span>
            <span className="v4-dfooter-sep">//</span>
            <span>SJB INSTITUTE OF TECHNOLOGY</span>
          </div>
          <div className="v4-dfooter-right">
            <Link href="/" className="v4-dfooter-link">HOMEPAGE</Link>
            <Link href="/#arenas" className="v4-dfooter-link">ARENAS</Link>
            <Link href="/#contact" className="v4-dfooter-link">CONTACT</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
