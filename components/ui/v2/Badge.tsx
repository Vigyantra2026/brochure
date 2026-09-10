import React from 'react';

export interface V2BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'crimson' | 'gold' | 'steel';
  pulseDot?: boolean;
  children: React.ReactNode;
}

export const V2Badge: React.FC<V2BadgeProps> = ({
  variant = 'steel',
  pulseDot = false,
  children,
  className = '',
  ...props
}) => {
  const variantClass = {
    crimson: 'v2-badge-crimson',
    gold: 'v2-badge-gold',
    steel: 'v2-badge-steel',
  }[variant];

  return (
    <span className={`v2-badge ${variantClass} ${className}`} {...props}>
      {pulseDot && (
        <span
          style={{
            display: 'inline-block',
            width: '5px',
            height: '5px',
            borderRadius: '50%',
            backgroundColor: variant === 'crimson' ? '#BA1E38' : variant === 'gold' ? '#D4AF37' : '#A8ADB8',
          }}
          aria-hidden="true"
        />
      )}
      {children}
    </span>
  );
};

export interface V2EyebrowProps extends React.HTMLAttributes<HTMLDivElement> {
  accent?: 'crimson' | 'gold';
  children: React.ReactNode;
}

export const V2Eyebrow: React.FC<V2EyebrowProps> = ({
  accent = 'crimson',
  children,
  className = '',
  ...props
}) => {
  return (
    <div className={`v2-eyebrow ${accent === 'gold' ? 'gold' : ''} ${className}`} {...props}>
      {children}
    </div>
  );
};

export default V2Badge;
