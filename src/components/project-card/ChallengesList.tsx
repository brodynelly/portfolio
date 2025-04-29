
import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';

interface ChallengesListProps {
  challenges: string[];
  isHovered: boolean;
}

export default function ChallengesList({ challenges, isHovered }: ChallengesListProps) {
  const [expanded, setExpanded] = useState(false);
  const isMobile = useIsMobile();
  
  const toggleExpanded = () => setExpanded(!expanded);

  return (
    <div className="mb-4">
      <button
        className={cn(
          "flex items-center justify-between w-full text-sm font-medium text-left focus:outline-none transition-all duration-300",
          isHovered ? "text-primary" : ""
        )}
        onClick={toggleExpanded}
      >
        <span>Technical Challenges</span>
        {expanded ? 
          <ChevronUp size={16} className={cn(
            "transition-transform duration-300",
            isHovered ? "rotate-[-10deg]" : ""
          )} /> : 
          <ChevronDown size={16} className={cn(
            "transition-transform duration-300",
            isHovered ? "rotate-[10deg]" : ""
          )} />
        }
      </button>

      <div 
        className={cn(
          "overflow-hidden transition-all duration-700",
          expanded ? "max-h-96 opacity-100 mt-2" : "max-h-0 opacity-0"
        )}
      >
        <ul className={cn(
          "space-y-2 text-sm text-muted-foreground",
          isMobile && "pr-2"
        )}>
          {challenges.map((challenge, index) => (
            <li 
              key={index} 
              className={cn(
                "flex items-start transition-all duration-500",
                isMobile && "text-xs flex-wrap"
              )}
              style={{ 
                transitionDelay: `${index * 150}ms`,
                transform: expanded ? 'translateX(0)' : 'translateX(-20px)',
                opacity: expanded ? 1 : 0
              }}
            >
              <span className={cn(
                "mr-2 text-primary animate-pulse",
                isMobile && "mt-1"
              )}>•</span>
              {challenge}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
