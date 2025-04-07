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
  const baseStyle = 'max-w-fit py-3 px-6 rounded-lg text-xs font-medium tracking-wider whitespace-nowrap flex items-center justify-center transition-all duration-300 ease-in-out';
  const primaryStyle = 'bg-colorQuaternary/90 text-colorMain hover:bg-colorQuaternary dark:bg-colorSecondary dark:text-colorWhite';
  const secondaryStyle = 'border border-colorQuaternary text-colorWhite hover:bg-colorQuaternary hover:text-colorMain';

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