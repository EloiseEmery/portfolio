import { ReactNode, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

interface PageTransitionProps {
  children: ReactNode;
}

const PageTransition = ({ children }: PageTransitionProps) => {
  const location = useLocation();
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = containerRef.current;
    if (element) {
      // Reset initial state
      element.style.opacity = '0';
      element.style.transform = 'translateY(20px)';

      // Animate in
      requestAnimationFrame(() => {
        element.style.transition = 'opacity 0.3s ease-in-out, transform 0.3s ease-in-out';
        element.style.opacity = '1';
        element.style.transform = 'translateY(0)';
      });
    }

    // Cleanup
    return () => {
      if (element) {
        element.style.transition = '';
      }
    };
  }, [location.pathname]);

  return (
    <div ref={containerRef} style={{ opacity: 0 }}>
      {children}
    </div>
  );
};

export default PageTransition;
