
import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface SkillCardProps {
  title: string;
  icon: ReactNode;
  items: string[];
  className?: string;
}

export default function SkillCard({ title, icon, items, className }: SkillCardProps) {
  return (
    <div 
      className={cn(
        "bg-white rounded-xl p-6 shadow-sm transition-all hover:shadow-md",
        className
      )}
    >
      <div className="flex items-start mb-4">
        <div className="rounded-lg p-2 bg-secondary mr-4">
          {icon}
        </div>
        <h3 className="heading-sm">{title}</h3>
      </div>
      
      <ul className="space-y-2">
        {items.map((item, index) => (
          <li key={index} className="flex items-center text-muted-foreground">
            <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
