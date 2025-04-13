import { useState } from 'react';
import { Image } from 'lucide-react';
import { cn } from '@/lib/utils';

interface StackedProjectCardImageProps {
  title: string;
  image: string;
  images?: string[];
  projectUrl: string;
  isHovered: boolean;
}

export default function StackedProjectCardImage({ 
  title, 
  image, 
  images,
  projectUrl, 
  isHovered 
}: StackedProjectCardImageProps) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const hasMultipleImages = images && images.length > 1;
  const displayImage = images && images.length > 0 ? images[0] : image;

  return (
    <div className="block">
      <div className="relative aspect-video overflow-hidden bg-muted">
        <img
          src={displayImage}
          alt={title}
          className={cn(
            "object-cover w-full h-full transition-all duration-300",
            imageLoaded ? "opacity-100" : "opacity-0",
            isHovered ? "scale-110 blur-[0.1px]" : "scale-100"
          )}
          onLoad={() => setImageLoaded(true)}
        />
        
        {!imageLoaded && (
          <div className="absolute inset-0 flex items-center justify-center bg-muted">
            <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
          </div>
        )}
        
        {/* Multiple images indicator */}
        {hasMultipleImages && (
          <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded-md flex items-center z-10">
            <Image className="w-3 h-3 mr-1" />
            {images.length}
          </div>
        )}
      </div>
    </div>
  );
}
