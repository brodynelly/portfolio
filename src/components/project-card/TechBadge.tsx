
import { cn } from '@/lib/utils';

interface TechItem {
  name: string;
  category: 'frontend' | 'backend' | 'database' | 'deployment' | 'language';
}

interface TechBadgeProps {
  item: TechItem;
  index: number;
  isHovered: boolean;
}

export default function TechBadge({ item, index, isHovered }: TechBadgeProps) {
  const getCategoryColor = (category: TechItem['category']) => {
    switch (category) {
      case 'frontend': return 'bg-blue-50 text-blue-700';
      case 'backend': return 'bg-green-50 text-green-700';
      case 'database': return 'bg-purple-50 text-purple-700';
      case 'deployment': return 'bg-orange-50 text-orange-700';
      case 'language': return 'bg-gray-50 text-gray-700';
      default: return 'bg-gray-50 text-gray-700';
    }
  };

  return (
    <span 
      className={cn(
        "text-xs px-2 py-1 rounded-full transition-all duration-500",
        getCategoryColor(item.category)
      )}
      style={{ 
        transitionDelay: `${(index * 50) + 100}ms`,
        transform: isHovered ? 'translateY(-5px)' : 'translateY(0)',
        boxShadow: isHovered ? '0 4px 6px rgba(0,0,0,0.1)' : 'none'
      }}
    >
      {item.name}
    </span>
  );
}
