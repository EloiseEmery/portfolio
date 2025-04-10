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
  const baseStyle = 'max-w-fit py-3 px-6 rounded-lg text-[13px] font-semibold tracking-wider whitespace-nowrap flex items-center justify-center transition-all duration-300 ease-in-out';
  const primaryStyle = 'dark:bg-colorQuaternary/80 dark:text-colorMain dark:hover:bg-colorQuaternary bg-colorTertiary/80 hover:bg-colorTertiary text-colorWhite';
  const secondaryStyle = 'border dark:border-colorQuaternary dark:text-colorWhite dark:hover:bg-colorQuaternary dark:hover:text-colorMain border-colorTertiary text-colorTertiary hover:bg-colorTertiary hover:border-colorTertiary hover:text-colorWhite';

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