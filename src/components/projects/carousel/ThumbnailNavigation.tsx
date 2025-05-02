
import { useState, useRef, useEffect } from 'react';
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import { Loader2 } from 'lucide-react';
import { useIsMobile } from "@/hooks/use-mobile";

interface ThumbnailNavigationProps {
  images: string[];
  activeIndex: number;
  onThumbnailClick: (index: number) => void;
}

export function ThumbnailNavigation({
  images,
  activeIndex,
  onThumbnailClick
}: ThumbnailNavigationProps) {
  const isMobile = useIsMobile();
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  
  // Scroll to active thumbnail when it changes
  useEffect(() => {
    if (scrollContainerRef.current && isMobile) {
      const container = scrollContainerRef.current;
      const thumbnailWidth = 16 + 8; // width + gap (16px + 8px)
      const scrollPosition = activeIndex * thumbnailWidth;
      
      container.scrollTo({
        left: scrollPosition,
        behavior: 'smooth'
      });
    }
  }, [activeIndex, isMobile]);

  return (
    <ScrollArea className="w-full">
      <div 
        ref={scrollContainerRef} 
        className={cn(
          "flex gap-2 py-2",
          isMobile && "px-1"
        )}
        style={isMobile ? { maxWidth: '100%', overflowX: 'auto', scrollbarWidth: 'none', msOverflowStyle: 'none' } : {}}
      >
        {images.map((image, index) => {
          const [isLoading, setIsLoading] = useState(true);
          const [hasError, setHasError] = useState(false);

          return (
            <button
              key={index}
              onClick={() => onThumbnailClick(index)}
              className={cn(
                "overflow-hidden flex-shrink-0 transition-all duration-200 opacity-70 hover:opacity-100 relative bg-muted/30",
                activeIndex === index && "ring-2 ring-primary opacity-100",
                isMobile ? "h-12 w-16 rounded-sm" : "h-16 w-24 rounded-md"
              )}
              style={isMobile ? { flexShrink: 0 } : {}}
            >
              {isLoading && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <Loader2 className="h-4 w-4 animate-spin text-muted-foreground" />
                </div>
              )}

              {!hasError && (
                <img
                  src={image}
                  alt={`Thumbnail ${index + 1}`}
                  className="h-full w-full object-cover"
                  onLoad={() => setIsLoading(false)}
                  onError={() => {
                    setIsLoading(false);
                    setHasError(true);
                  }}
                  style={{ display: isLoading ? 'none' : 'block' }}
                />
              )}

              {/* Image number indicator for mobile */}
              {isMobile && (
                <span className="absolute bottom-0 right-0 text-[10px] bg-black/50 text-white px-1 rounded-tl-sm">
                  {index + 1}
                </span>
              )}
            </button>
          );
        })}
      </div>
    </ScrollArea>
  );
}
