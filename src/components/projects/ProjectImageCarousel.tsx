
import { useState, useEffect } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import { SingleImage } from './carousel/SingleImage';
import { ThumbnailNavigation } from './carousel/ThumbnailNavigation';
import { Loader2, ChevronRight } from 'lucide-react';
import { useIsMobile } from "@/hooks/use-mobile";

interface ProjectImageCarouselProps {
  images: string[];
  title: string;
}

export default function ProjectImageCarousel({ images, title }: ProjectImageCarouselProps) {
  const [api, setApi] = useState<CarouselApi>();
  const [activeIndex, setActiveIndex] = useState(0);
  const isMobile = useIsMobile();
  const [showScrollHint, setShowScrollHint] = useState(true);

  // Handle API changes and update active index
  useEffect(() => {
    if (!api) return;

    const onSelect = () => {
      setActiveIndex(api.selectedScrollSnap());
    };

    api.on("select", onSelect);

    // Initial index
    onSelect();

    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  // Hide scroll hint after a delay
  useEffect(() => {
    if (isMobile && images.length > 3) {
      const timer = setTimeout(() => {
        setShowScrollHint(false);
      }, 3000);
      
      return () => clearTimeout(timer);
    }
  }, [isMobile, images.length]);

  // Edge cases handling
  if (!images || images.length === 0) {
    return null;
  }

  // For single image, use a simpler component
  if (images.length === 1) {
    return <SingleImage image={images[0]} title={title} />;
  }

  return (
    <div className="space-y-4">
      <Carousel
        className="w-full"
        setApi={setApi}
      >
        <CarouselContent>
          {images.map((image, index) => {
            const [isLoading, setIsLoading] = useState(true);
            const [hasError, setHasError] = useState(false);

            return (
              <CarouselItem key={index}>
                <div className="aspect-video rounded-xl overflow-hidden shadow-lg relative bg-muted/30">
                  {isLoading && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
                    </div>
                  )}

                  {hasError ? (
                    <div className="absolute inset-0 flex items-center justify-center flex-col p-4">
                      <p className="text-muted-foreground text-sm text-center">Unable to load image</p>
                    </div>
                  ) : (
                    <img
                      src={image}
                      alt={`${title} screenshot ${index + 1}`}
                      className="w-full h-full object-contain md:object-cover"
                      onLoad={() => setIsLoading(false)}
                      onError={() => {
                        setIsLoading(false);
                        setHasError(true);
                      }}
                      style={{ 
                        display: isLoading ? 'none' : 'block',
                        maxHeight: '70vh'
                      }}
                    />
                  )}
                </div>
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <CarouselPrevious className={isMobile ? "" : "bg-white"} />
        <CarouselNext className={isMobile ? "" : "bg-white"} />
      </Carousel>

      {/* Thumbnail navigation section */}
      {images.length > 1 && (
        <div className="relative">
          <ThumbnailNavigation
            images={images}
            activeIndex={activeIndex}
            onThumbnailClick={(index) => {
              if (api) api.scrollTo(index);
              setActiveIndex(index);
            }}
          />
          
          {/* Scroll hint for mobile */}
          {isMobile && images.length > 3 && showScrollHint && (
            <div className="absolute right-0 top-1/2 -translate-y-1/2 bg-black/30 backdrop-blur-sm text-white rounded-l-md px-2 py-1 flex items-center text-xs animate-pulse">
              <span className="mr-1">Scroll</span>
              <ChevronRight className="h-3 w-3" />
            </div>
          )}
        </div>
      )}
    </div>
  );
}
