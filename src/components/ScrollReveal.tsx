
import React, { useEffect, useRef } from 'react';

interface ScrollRevealProps {
  children: React.ReactNode;
  animation?: 'fade-in' | 'fade-in-left' | 'fade-in-right' | 'scale-up' | 'blur-in';
  delay?: number;
  threshold?: number;
  className?: string;
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  animation = 'fade-in',
  delay = 0,
  threshold = 0.1,
  className = '',
}) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('animate-' + animation);
              entry.target.classList.remove('opacity-0');
            }, delay);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    const current = ref.current;
    
    if (current) {
      observer.observe(current);
    }

    return () => {
      if (current) {
        observer.unobserve(current);
      }
    };
  }, [animation, delay, threshold]);

  return (
    <div ref={ref} className={`opacity-0 will-change-transform ${className}`}>
      {children}
    </div>
  );
};

export default ScrollReveal;
