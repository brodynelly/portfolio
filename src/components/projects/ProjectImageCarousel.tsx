import { useState, useEffect } from 'react';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious,
  type CarouselApi
} from "@/components/ui/carousel";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import { SingleImage } from './carousel/SingleImage';
import { ThumbnailNavigation } from './carousel/ThumbnailNavigation';

interface ProjectImageCarouselProps {
  images: string[];
  title: string;
}

export default function ProjectImageCarousel({ images, title }: ProjectImageCarouselProps) {
  const [api, setApi] = useState<CarouselApi>();
  const [activeIndex, setActiveIndex] = useState(0);

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
          {images.map((image, index) => (
            <CarouselItem key={index}>
              <div className="aspect-video rounded-xl overflow-hidden shadow-lg">
                <img 
                  src={image} 
                  alt={`${title} screenshot ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="bg-white" />
        <CarouselNext className="bg-white" />
      </Carousel>
      
      {/* Thumbnail navigation */}
      {images.length > 1 && (
        <ThumbnailNavigation 
          images={images} 
          activeIndex={activeIndex} 
          onThumbnailClick={(index) => {
            if (api) api.scrollTo(index);
            setActiveIndex(index);
          }} 
        />
      )}
    </div>
  );
}
