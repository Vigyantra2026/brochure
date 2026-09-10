import React from 'react';

export interface V2ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'tertiary' | 'gold';
  size?: 'sm' | 'md' | 'lg';
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  children: React.ReactNode;
  asAnchor?: boolean;
  href?: string;
  target?: string;
  rel?: string;
}

export const V2Button: React.FC<V2ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  icon,
  iconPosition = 'right',
  children,
  className = '',
  asAnchor = false,
  href,
  target,
  rel,
  disabled,
  ...props
}) => {
  const variantClass = {
    primary: 'v2-btn-primary',
    secondary: 'v2-btn-secondary',
    tertiary: 'v2-btn-tertiary',
    gold: 'v2-btn-gold',
  }[variant];

  const sizeStyle: React.CSSProperties = {
    sm: { padding: '6px 14px', fontSize: '0.8rem', minHeight: '36px' },
    md: { padding: '8px 20px', fontSize: '0.875rem', minHeight: 'var(--v2-min-touch-target)' },
    lg: { padding: '12px 28px', fontSize: '0.95rem', minHeight: '48px' },
  }[size];

  const content = (
    <>
      {icon && iconPosition === 'left' && <span className="v2-btn-icon-left">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === 'right' && <span className="v2-btn-icon-right">{icon}</span>}
    </>
  );

  if (asAnchor && href) {
    return (
      <a
        href={href}
        target={target}
        rel={rel}
        className={`v2-btn ${variantClass} ${disabled ? 'disabled' : ''} ${className}`}
        style={sizeStyle}
        role="button"
        aria-disabled={disabled}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      className={`v2-btn ${variantClass} ${className}`}
      style={sizeStyle}
      disabled={disabled}
      {...props}
    >
      {content}
    </button>
  );
};

export default V2Button;
