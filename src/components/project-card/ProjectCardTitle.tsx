
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface ProjectCardTitleProps {
  title: string;
  projectUrl: string;
  isHovered: boolean;
}

export default function ProjectCardTitle({ 
  title, 
  projectUrl, 
  isHovered 
}: ProjectCardTitleProps) {
  return (
    <Link to={projectUrl}>
      <h3 className={cn(
        "heading-sm mb-3 transition-all duration-500",
        isHovered ? "text-primary translate-x-1" : ""
      )}>
        {title}
      </h3>
    </Link>
  );
}
