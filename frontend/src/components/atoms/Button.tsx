import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  href?: string;
  blank?: boolean;
  type?: 'primary' | 'secondary';
  icon?: React.ReactNode;
  onClick?: () => void;
  handleSubmit?: (endpoint: string) => Promise<void>;
  endpoint?: string;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  className, 
  href, 
  blank, 
  type = 'primary', 
  icon, 
  handleSubmit, 
  endpoint 
}) => {
  const baseStyle = 'max-w-fit py-3 px-6 rounded-lg text-[13px] font-semibold tracking-wider whitespace-nowrap flex items-center justify-center transition-all duration-300 ease-in-out';
  const primaryStyle = 'dark:bg-colorQuaternary/80 dark:text-colorMain dark:hover:bg-colorQuaternary bg-colorTertiary/80 hover:bg-colorTertiary text-colorWhite';
  const secondaryStyle = 'border dark:border-colorQuaternary dark:text-colorWhite dark:hover:bg-colorQuaternary dark:hover:text-colorMain border-colorTertiary text-colorTertiary hover:bg-colorTertiary hover:border-colorTertiary hover:text-colorWhite';

  const buttonStyle = `${baseStyle} ${type === 'primary' ? primaryStyle : secondaryStyle}`;

  const handleClick = async () => {
    if (handleSubmit && endpoint) {
      await handleSubmit(endpoint);
    }
  };

  if (href) {
    return (
      <a href={href} className={`${buttonStyle} ${className}`} target={blank ? '_blank' : '_self'}>
        {children}
        {icon && <span className="ml-2">{icon}</span>}
      </a>
    );
  }

  return (
    <button 
      className={`${buttonStyle} ${className}`} 
      onClick={handleClick}
    >
      {children}
      {icon && <span className="ml-2">{icon}</span>}
    </button>
  );
};

export default Button;