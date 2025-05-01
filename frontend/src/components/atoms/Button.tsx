import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  href?: string;
  blank?: boolean;
  type?: 'primary' | 'secondary';
  icon?: React.ReactNode;
  onClick?: (event?: React.MouseEvent<HTMLButtonElement>) => void;
  handleSubmit?: (endpoint: string) => Promise<void>;
  endpoint?: string;
  animate?: boolean;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  className, 
  href, 
  blank, 
  type = 'primary', 
  icon, 
  onClick,
  handleSubmit, 
  endpoint,
  animate = false
}) => {
  const baseStyle = 'max-w-fit py-3 px-6 rounded-lg text-[13px] font-semibold tracking-wider whitespace-nowrap flex items-center justify-center transition-all duration-300 ease-in-out';
  const primaryStyle = 'dark:bg-colorQuaternary/80 dark:text-colorMain dark:hover:bg-colorQuaternary bg-colorTertiary/80 hover:bg-colorTertiary text-colorWhite';
  const secondaryStyle = 'border dark:border-colorQuaternary dark:text-colorWhite dark:hover:bg-colorQuaternary dark:hover:text-colorMain border-colorTertiary text-colorTertiary hover:bg-colorTertiary hover:border-colorTertiary hover:text-colorWhite';

  const buttonStyle = `${baseStyle} ${type === 'primary' ? primaryStyle : secondaryStyle}`;

  const handleClick = async (event?: React.MouseEvent<HTMLButtonElement>) => {
    if (event) {
      event.preventDefault();
      event.stopPropagation();
    }
    if (onClick) {
      onClick(event);
    }
    if (handleSubmit && endpoint) {
      await handleSubmit(endpoint);
    }
  };

  const ButtonContent = () => (
    <>
      {children}
      {icon && <span className="ml-2">{icon}</span>}
    </>
  );

  if (href) {
    if (animate) {
      return (
        <motion.a
          href={href}
          target={blank ? '_blank' : undefined}
          rel={blank ? 'noopener noreferrer' : undefined}
          className={`mt-2 ${buttonStyle} ${className || ''}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ 
            opacity: 1, 
            y: [0, -30, 0],
            transition: {
              y: {
                repeat: Infinity,
                duration: 2,
                ease: "easeInOut",
                delay: 0.5
              },
              opacity: {
                duration: 0.6,
                delay: 0.4
              }
            }
          }}
        >
          <ButtonContent />
        </motion.a>
      );
    }
    return (
      <a
        href={href}
        target={blank ? '_blank' : undefined}
        rel={blank ? 'noopener noreferrer' : undefined}
        className={`${buttonStyle} ${className || ''}`}
      >
        <ButtonContent />
      </a>
    );
  }

  if (animate) {
    return (
      <motion.button
        onClick={handleClick}
        className={`${buttonStyle} ${className || ''}`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ 
          opacity: 1, 
          y: [0, -12, 0],
          transition: {
            y: {
              repeat: Infinity,
              duration: 2,
              ease: "easeInOut",
              delay: 0.5
            },
            opacity: {
              duration: 0.6,
              delay: 0.4
            }
          }
        }}
      >
        <ButtonContent />
      </motion.button>
    );
  }

  return (
    <button
      onClick={handleClick}
      className={`${buttonStyle} ${className || ''}`}
    >
      <ButtonContent />
    </button>
  );
};

export default Button;