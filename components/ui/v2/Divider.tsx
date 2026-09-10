import React from 'react';

export interface V2DividerProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'hairline' | 'tech';
  label?: string;
}

export const V2Divider: React.FC<V2DividerProps> = ({
  variant = 'hairline',
  label,
  className = '',
  ...props
}) => {
  if (variant === 'tech') {
    return (
      <div className={`v2-divider-tech ${className}`} {...props}>
        {label && <span>{label}</span>}
      </div>
    );
  }

  return <div className={`v2-divider ${className}`} {...props} />;
};

export default V2Divider;
