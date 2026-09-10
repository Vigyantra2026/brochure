import React from 'react';

export interface V2CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'standard' | 'elevated' | 'event' | 'stat' | 'tech';
  showCorners?: boolean;
  accentBorder?: 'none' | 'crimson' | 'gold' | 'steel';
  children: React.ReactNode;
}

export const V2Card: React.FC<V2CardProps> = ({
  variant = 'standard',
  showCorners = false,
  accentBorder = 'none',
  children,
  className = '',
  style,
  ...props
}) => {
  const variantClass = {
    standard: 'v2-card',
    elevated: 'v2-card-elevated',
    event: 'v2-card-event',
    stat: 'v2-card-stat',
    tech: 'v2-panel-tech',
  }[variant];

  const borderClass = {
    none: '',
    crimson: 'border-crimson',
    gold: 'border-gold',
    steel: 'border-steel',
  }[accentBorder];

  return (
    <div
      className={`${variantClass} ${borderClass} ${className}`}
      style={style}
      {...props}
    >
      {showCorners && (
        <>
          <span className="v2-corner-marker tl" aria-hidden="true" />
          <span className="v2-corner-marker tr" aria-hidden="true" />
          <span className="v2-corner-marker bl" aria-hidden="true" />
          <span className="v2-corner-marker br" aria-hidden="true" />
        </>
      )}
      {children}
    </div>
  );
};

export default V2Card;
