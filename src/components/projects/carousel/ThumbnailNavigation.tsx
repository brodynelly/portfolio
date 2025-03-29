
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";

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
  return (
    <ScrollArea className="w-full">
      <div className="flex gap-2 py-2">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => onThumbnailClick(index)}
            className={cn(
              "h-16 w-24 rounded-md overflow-hidden flex-shrink-0 transition-all duration-200 opacity-70 hover:opacity-100",
              activeIndex === index && "ring-2 ring-primary opacity-100"
            )}
          >
            <img 
              src={image} 
              alt={`Thumbnail ${index + 1}`}
              className="h-full w-full object-cover"
            />
          </button>
        ))}
      </div>
    </ScrollArea>
  );
}
