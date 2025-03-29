
import TechBadge from './TechBadge';

interface TechItem {
  name: string;
  category: 'frontend' | 'backend' | 'database' | 'deployment' | 'language';
}

interface TechStackProps {
  tech: TechItem[];
  isHovered: boolean;
}

export default function TechStack({ tech, isHovered }: TechStackProps) {
  return (
    <div className="mb-4">
      <h4 className="text-sm font-medium mb-2">Tech Stack</h4>
      <div className="flex flex-wrap gap-2">
        {tech.slice(0, 5).map((item, index) => (
          <TechBadge 
            key={item.name}
            item={item}
            index={index}
            isHovered={isHovered}
          />
        ))}
        {tech.length > 5 && (
          <span className="text-xs px-2 py-1 rounded-full bg-gray-50 text-gray-700 transition-all duration-500"
            style={{
              transitionDelay: '350ms',
              transform: isHovered ? 'translateY(-5px)' : 'translateY(0)'
            }}
          >
            +{tech.length - 5} more
          </span>
        )}
      </div>
    </div>
  );
}
