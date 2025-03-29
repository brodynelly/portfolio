
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

  const getAnimationClass = () => {
    if (!isVisible) return 'opacity-0';
    
    switch(animation) {
      case 'fade-in':
        return 'animate-fade-in';
      case 'fade-in-right':
        return 'animate-fade-in-right';
      case 'fade-in-left':
        return 'animate-fade-in-left';
      case 'slide-in-bottom':
        return 'animate-slide-in-bottom';
      case 'blur-in':
        return 'animate-blur-in';
      case 'scale-in':
        return 'animate-scale-in';
      default:
        return 'animate-fade-in';
    }
  };

  return (
    <div
      id={id}
      ref={ref}
      className={cn(
        className,
        getAnimationClass()
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
