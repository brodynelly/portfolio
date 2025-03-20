
import React, { ReactNode } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { cn } from '@/lib/utils';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  animation?: 
    | 'fade-in' 
    | 'fade-in-right' 
    | 'fade-in-left' 
    | 'slide-in-bottom' 
    | 'blur-in'
    | 'scale-in';
  delay?: number;
  threshold?: number;
  id?: string;
}

export default function AnimatedSection({
  children,
  className,
  animation = 'fade-in',
  delay = 0,
  threshold = 0.1,
  id,
}: AnimatedSectionProps) {
  const { ref, isVisible } = useScrollAnimation({ threshold });

  return (
    <div
      id={id}
      ref={ref}
      className={cn(
        className,
        isVisible ? `animate-${animation}` : 'opacity-0',
      )}
      style={{ 
        animationDelay: `${delay}ms`,
        animationFillMode: 'forwards'
      }}
    >
      {children}
    </div>
  );
}
