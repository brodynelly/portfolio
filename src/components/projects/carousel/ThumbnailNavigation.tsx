
import { useState } from 'react';
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
  
  return (
    <ScrollArea className="w-full">
      <div className="flex gap-2 py-2">
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
            </button>
          );
        })}
      </div>
    </ScrollArea>
  );
}
