
import { ExternalLink, Code2 } from 'lucide-react';
import { cn } from '@/lib/utils';
import { ScrollToTopLink } from '@/components/ui/scroll-to-top-link';
import { useIsMobile } from '@/hooks/use-mobile';

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
  const isMobile = useIsMobile();

  return (
    <div className={cn(
      "flex",
      isMobile ? "flex-wrap gap-y-2" : "space-x-3"
    )}>
      <ScrollToTopLink
        to={projectUrl}
        className={cn(
          "inline-flex items-center space-x-1 text-sm font-medium text-primary hover:underline transition-all duration-500",
          isHovered ? "translate-x-2" : "translate-x-0",
          isMobile && "mr-3 mb-2"
        )}
      >
        <span>View Details</span>
      </ScrollToTopLink>

      <a
        href={githubUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          "inline-flex items-center space-x-1 text-sm font-medium text-primary hover:underline transition-all duration-500",
          isHovered ? "translate-x-2" : "translate-x-0",
          isMobile && "mr-3 mb-2"
        )}
        style={{
          transitionDelay: isHovered ? '100ms' : '0ms'
        }}
      >
        <Code2 size={16} />
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
