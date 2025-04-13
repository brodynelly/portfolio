import { cn } from '@/lib/utils';

interface StackedProjectCardTitleProps {
  title: string;
  isHovered: boolean;
}

export default function StackedProjectCardTitle({ 
  title, 
  isHovered 
}: StackedProjectCardTitleProps) {
  return (
    <h3 className={cn(
      "heading-sm mb-3 transition-all duration-300",
      isHovered ? "text-primary translate-x-0.5" : ""
    )}>
      {title}
    </h3>
  );
}
