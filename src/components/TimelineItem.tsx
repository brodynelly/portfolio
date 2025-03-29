
import { cn } from '@/lib/utils';
import React, { useState } from 'react';

interface TimelineItemProps {
  date: string;
  title: string;
  description: string;
  isLast?: boolean;
}

export default function TimelineItem({ date, title, description, isLast = false }: TimelineItemProps) {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className="relative pl-8 pb-6 transition-transform duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        transform: isHovered ? 'translateX(5px)' : 'translateX(0)'
      }}
    >
      {/* Timeline connector */}
      {!isLast && (
        <div className="absolute left-3 top-5 bottom-0 w-px bg-gray-200 transition-all duration-300"
          style={{
            height: isHovered ? '100%' : 'calc(100% - 5px)',
            opacity: isHovered ? 1 : 0.6
          }}
        ></div>
      )}
      
      {/* Timeline dot */}
      <div 
        className={cn(
          "absolute left-0 top-2 h-6 w-6 rounded-full bg-primary flex items-center justify-center transition-all duration-300",
          isHovered ? "scale-110 shadow-md shadow-primary/30" : ""
        )}
      >
        <div className={cn(
          "h-2 w-2 rounded-full bg-white transition-all duration-300",
          isHovered ? "h-3 w-3" : ""
        )}></div>
      </div>
      
      {/* Content */}
      <div className="pt-1 transition-all duration-300">
        <span className={cn(
          "inline-block px-2 py-1 text-xs font-medium tracking-wider bg-primary/10 text-primary rounded mb-2 transition-all duration-300",
          isHovered ? "bg-primary/20 scale-[1.02]" : ""
        )}>
          {date}
        </span>
        <h3 className={cn(
          "text-base font-medium mb-1 transition-colors duration-300",
          isHovered ? "text-primary" : ""
        )}>{title}</h3>
        <p className={cn(
          "text-sm text-muted-foreground transition-opacity duration-300",
          isHovered ? "opacity-100" : "opacity-80"
        )}>{description}</p>
      </div>
    </div>
  );
}
