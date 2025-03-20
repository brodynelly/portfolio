
import { cn } from '@/lib/utils';
import React from 'react';

interface TimelineItemProps {
  date: string;
  title: string;
  description: string;
  isLast?: boolean;
}

export default function TimelineItem({ date, title, description, isLast = false }: TimelineItemProps) {
  return (
    <div className="relative pl-8 pb-6">
      {/* Timeline connector */}
      {!isLast && (
        <div className="absolute left-3 top-5 bottom-0 w-px bg-gray-200"></div>
      )}
      
      {/* Timeline dot */}
      <div className="absolute left-0 top-2 h-6 w-6 rounded-full bg-primary flex items-center justify-center">
        <div className="h-2 w-2 rounded-full bg-white"></div>
      </div>
      
      {/* Content */}
      <div className="pt-1">
        <span className="inline-block px-2 py-1 text-xs font-medium tracking-wider bg-primary/10 text-primary rounded mb-2">
          {date}
        </span>
        <h3 className="text-base font-medium mb-1">{title}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </div>
  );
}
