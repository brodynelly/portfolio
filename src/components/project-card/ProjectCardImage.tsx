
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface ProjectCardImageProps {
  title: string;
  image: string;
  projectUrl: string;
  isHovered: boolean;
}

export default function ProjectCardImage({ 
  title, 
  image, 
  projectUrl, 
  isHovered 
}: ProjectCardImageProps) {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <Link to={projectUrl} className="block">
      <div className="relative aspect-video overflow-hidden bg-muted">
        <img
          src={image}
          alt={title}
          className={cn(
            "object-cover w-full h-full transition-all duration-1000",
            imageLoaded ? "opacity-100" : "opacity-0",
            isHovered ? "scale-110 blur-[1px]" : "scale-100"
          )}
          onLoad={() => setImageLoaded(true)}
        />
        
        {!imageLoaded && (
          <div className="absolute inset-0 flex items-center justify-center bg-muted">
            <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
          </div>
        )}
        
        <div 
          className={cn(
            "absolute inset-0 bg-primary/10 backdrop-blur-sm transition-opacity duration-500 flex items-center justify-center",
            isHovered ? "opacity-100" : "opacity-0"
          )}
        >
          <span className="px-4 py-2 bg-white/90 rounded-full text-primary font-medium transform transition-transform duration-500 scale-90">
            View Project
          </span>
        </div>
      </div>
    </Link>
  );
}
