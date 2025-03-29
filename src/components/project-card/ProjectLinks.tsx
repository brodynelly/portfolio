
import { Link } from 'react-router-dom';
import { ExternalLink, Github } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ProjectLinksProps {
  projectUrl: string;
  githubUrl: string;
  liveUrl?: string;
  isHovered: boolean;
}

export default function ProjectLinks({ 
  projectUrl, 
  githubUrl, 
  liveUrl, 
  isHovered 
}: ProjectLinksProps) {
  return (
    <div className="flex space-x-3">
      <Link 
        to={projectUrl}
        className={cn(
          "inline-flex items-center space-x-1 text-sm font-medium text-primary hover:underline transition-all duration-500",
          isHovered ? "translate-x-2" : "translate-x-0"
        )}
      >
        <span>View Details</span>
      </Link>
      
      <a 
        href={githubUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          "inline-flex items-center space-x-1 text-sm font-medium text-primary hover:underline transition-all duration-500",
          isHovered ? "translate-x-2" : "translate-x-0"
        )}
        style={{
          transitionDelay: isHovered ? '100ms' : '0ms'
        }}
      >
        <Github size={16} />
        <span>Repository</span>
      </a>
      
      {liveUrl && (
        <a 
          href={liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            "inline-flex items-center space-x-1 text-sm font-medium text-primary hover:underline transition-all duration-500",
            isHovered ? "translate-x-2" : "translate-x-0"
          )}
          style={{
            transitionDelay: isHovered ? '200ms' : '0ms'
          }}
        >
          <ExternalLink size={16} />
          <span>Live Demo</span>
        </a>
      )}
    </div>
  );
}
