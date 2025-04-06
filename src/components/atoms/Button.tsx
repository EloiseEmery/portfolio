import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  href?: string;
}

const Button: React.FC<ButtonProps> = ({ children, onClick, className, href }) => {
  const baseStyle = 'bg-colorTertiary text-colorWhite py-6 px-2 rounded-lg';

  if (href) {
    return (
      <a href={href} className={`${baseStyle} ${className}`}>
        {children}
      </a>
    );
  }

  return (
    <button className={`${baseStyle} ${className}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;