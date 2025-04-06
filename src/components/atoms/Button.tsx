import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  href?: string;
  blank?: boolean;
  type?: 'primary' | 'secondary';
  icon?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ children, className, href, blank, type = 'primary', icon }) => {
  const baseStyle = 'max-w-fit py-4 px-8 rounded-lg text-sm font-medium tracking-wider whitespace-nowrap flex items-center justify-center';
  const primaryStyle = 'bg-gradient-to-br from-colorTertiary to-colorQuaternary text-colorMain hover:bg-gradient-to-br hover:from-colorQuaternary hover:to-colorQuaternary';
  const secondaryStyle = 'bg-gradient-to-br from-colorSecondary to-colorTertiary text-colorWhite';

  const buttonStyle = `${baseStyle} ${type === 'primary' ? primaryStyle : secondaryStyle}`;

  if (href) {
    return (
      <a href={href} className={`${buttonStyle} ${className}`} target={blank ? '_blank' : '_self'}>
        {children}
        {icon && <span className="ml-2">{icon}</span>}
      </a>
    );
  }

  return (
    <button className={`${buttonStyle} ${className}`}>
      {children}
      {icon && <span className="ml-2">{icon}</span>}
    </button>
  );
};

export default Button;