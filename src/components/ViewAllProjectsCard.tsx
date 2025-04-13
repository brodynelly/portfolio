import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface ViewAllProjectsCardProps {
  isHovered?: boolean;
}

export default function ViewAllProjectsCard({ isHovered = false }: ViewAllProjectsCardProps) {
  return (
    <div 
      className={cn(
        "overflow-hidden rounded-xl bg-white shadow-md h-full",
        isHovered ? "transform transition-all duration-300 shadow-lg scale-[1.02]" : ""
      )}
      style={{
        boxShadow: isHovered ? '0 5px 20px rgba(0, 0, 0, 0.12)' : ''
      }}
    >
      <div className="flex flex-col items-center justify-center h-full p-8 text-center">
        <div className="mb-6 bg-primary/10 p-4 rounded-full">
          <ChevronRight className="h-8 w-8 text-primary" />
        </div>
        
        <h3 className="heading-sm mb-4">View All Projects</h3>
        
        <p className="text-muted-foreground mb-8">
          Explore the complete collection of projects in my portfolio
        </p>
        
        <Link 
          to="/projects" 
          className="inline-flex items-center justify-center px-6 py-3 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors"
        >
          Browse All Projects
          <ChevronRight className="h-4 w-4 ml-2" />
        </Link>
      </div>
    </div>
  );
}
