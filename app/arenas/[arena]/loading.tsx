import React from 'react';

export default function ArenaLoading() {
  return (
    <div
      style={{
        minHeight: '100vh',
        backgroundColor: '#08090C',
        color: '#F4F3EF',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: "'Space Grotesk', -apple-system, sans-serif",
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '14px',
        }}
      >
        <div
          style={{
            width: '40px',
            height: '40px',
            border: '2px solid rgba(212, 175, 55, 0.2)',
            borderTopColor: '#D4AF37',
            borderRadius: '50%',
            animation: 'spin 0.8s linear infinite',
          }}
        />
        <span
          style={{
            fontSize: '0.75rem',
            letterSpacing: '0.18em',
            color: 'rgba(244, 243, 239, 0.6)',
            textTransform: 'uppercase',
          }}
        >
          // ACCESSING ARENA DOSSIER //
        </span>
      </div>
      <style>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}
