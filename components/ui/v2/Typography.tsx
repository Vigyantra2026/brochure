import React from 'react';

// Editorial & Display Headings
export interface V2HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  level?: 'display-xl' | 'display-l' | 'h1' | 'h2' | 'h3';
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'div';
  gradient?: 'none' | 'gold' | 'crimson';
  children: React.ReactNode;
}

export const V2Heading: React.FC<V2HeadingProps> = ({
  level = 'h2',
  as,
  gradient = 'none',
  children,
  className = '',
  ...props
}) => {
  const Component = as || (
    level === 'display-xl' || level === 'h1' ? 'h1' :
    level === 'display-l' || level === 'h2' ? 'h2' : 'h3'
  );

  const levelClass = {
    'display-xl': 'v2-display-xl',
    'display-l': 'v2-display-l',
    h1: 'v2-h1',
    h2: 'v2-h2',
    h3: 'v2-h3',
  }[level];

  const gradientClass = {
    none: '',
    gold: 'v2-text-gold-gradient',
    crimson: 'v2-text-crimson-gradient',
  }[gradient];

  return (
    <Component className={`${levelClass} ${gradientClass} ${className}`} {...props}>
      {children}
    </Component>
  );
};

// Body Texts
export interface V2TextProps extends React.HTMLAttributes<HTMLParagraphElement> {
  size?: 'large' | 'base' | 'small';
  muted?: boolean;
  children: React.ReactNode;
}

export const V2Text: React.FC<V2TextProps> = ({
  size = 'base',
  muted = false,
  children,
  className = '',
  ...props
}) => {
  const sizeClass = {
    large: 'v2-body-lg',
    base: 'v2-body',
    small: 'v2-body-sm',
  }[size];

  const mutedClass = muted ? 'v2-text-tertiary' : '';

  return (
    <p className={`${sizeClass} ${mutedClass} ${className}`} {...props}>
      {children}
    </p>
  );
};

// Technical Micro Label (Uppercase Mono)
export interface V2TechLabelProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
}

export const V2TechLabel: React.FC<V2TechLabelProps> = ({
  children,
  className = '',
  ...props
}) => {
  return (
    <span className={`v2-label-tech ${className}`} {...props}>
      {children}
    </span>
  );
};

// Metadata (Compact Technical Value)
export interface V2MetadataProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
}

export const V2Metadata: React.FC<V2MetadataProps> = ({
  children,
  className = '',
  ...props
}) => {
  return (
    <span className={`v2-meta ${className}`} {...props}>
      {children}
    </span>
  );
};
