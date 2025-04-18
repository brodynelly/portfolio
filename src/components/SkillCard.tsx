
import { ReactNode, useState } from 'react';
import { cn } from '@/lib/utils';

interface SkillCardProps {
  title: string;
  icon: ReactNode;
  items: string[];
  className?: string;
}

export default function SkillCard({ title, icon, items, className }: SkillCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className={cn(
        "bg-white rounded-xl p-6 shadow-sm transition-all duration-300 hover:shadow-md",
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-start mb-4">
        <div className={cn(
          "rounded-lg p-2 mr-4 transition-all duration-300",
          isHovered ? "bg-primary/10 rotate-3 scale-110" : "bg-secondary"
        )}>
          {icon}
        </div>
        <h3 className={cn(
          "heading-sm transition-all duration-300",
          isHovered ? "text-primary translate-x-1" : ""
        )}>
          {title}
        </h3>
      </div>
      
      <ul className="space-y-2">
        {items.map((item, index) => (
          <li 
            key={index} 
            className="flex items-center text-muted-foreground transition-all duration-300"
            style={{ 
              transform: isHovered ? `translateX(${index % 2 === 0 ? 6 : 4}px)` : 'translateX(0)',
              transitionDelay: `${index * 50}ms`
            }}
          >
            <span className={cn(
              "w-1.5 h-1.5 bg-primary rounded-full mr-2 transition-all duration-300",
              isHovered ? "scale-150" : ""
            )} />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
