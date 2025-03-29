
import { useState } from 'react';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from "@/components/ui/carousel";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";

interface ProjectImageCarouselProps {
  images: string[];
  title: string;
}

export default function ProjectImageCarousel({ images, title }: ProjectImageCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  if (!images || images.length === 0) {
    return null;
  }

  // If there's only one image, just show it without carousel controls
  if (images.length === 1) {
    return (
      <div className="aspect-video rounded-xl overflow-hidden shadow-lg mb-8">
        <img 
          src={images[0]} 
          alt={`${title} screenshot`}
          className="w-full h-full object-cover"
        />
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <Carousel
        className="w-full"
        onSelect={setActiveIndex}
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
        <ScrollArea className="w-full">
          <div className="flex gap-2 py-2">
            {images.map((image, index) => (
              <button
                key={index}
                onClick={() => {
                  const carouselElement = document.querySelector('[aria-roledescription="carousel"]');
                  if (carouselElement) {
                    const slides = carouselElement.querySelectorAll('[aria-roledescription="slide"]');
                    if (slides && slides.length > index) {
                      (slides[index] as HTMLElement).click();
                    }
                  }
                  setActiveIndex(index);
                }}
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
      )}
    </div>
  );
}
