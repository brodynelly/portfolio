
import * as React from "react"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { useCarousel } from "./carousel-context"
import { useIsMobile } from "@/hooks/use-mobile"

const CarouselPrevious = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<typeof Button>
>(({ className, variant = "outline", size = "icon", ...props }, ref) => {
  const { orientation, scrollPrev, canScrollPrev } = useCarousel()
  const isMobile = useIsMobile()

  return (
    <Button
      ref={ref}
      variant={isMobile ? "secondary" : variant}
      size={size}
      className={cn(
        "absolute rounded-full",
        isMobile
          ? "h-7 w-7 bg-black/50 backdrop-blur-sm text-white hover:bg-black/70 border-0"
          : "h-8 w-8",
        orientation === "horizontal"
          ? "left-2 top-1/2 -translate-y-1/2"
          : "-top-12 left-1/2 -translate-x-1/2 rotate-90",
        className
      )}
      disabled={!canScrollPrev}
      onClick={scrollPrev}
      {...props}
    >
      <ArrowLeft className={cn("h-4 w-4", isMobile && "h-3.5 w-3.5")} />
      <span className="sr-only">Previous slide</span>
    </Button>
  )
})
CarouselPrevious.displayName = "CarouselPrevious"

const CarouselNext = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<typeof Button>
>(({ className, variant = "outline", size = "icon", ...props }, ref) => {
  const { orientation, scrollNext, canScrollNext } = useCarousel()
  const isMobile = useIsMobile()

  return (
    <Button
      ref={ref}
      variant={isMobile ? "secondary" : variant}
      size={size}
      className={cn(
        "absolute rounded-full",
        isMobile
          ? "h-7 w-7 bg-black/50 backdrop-blur-sm text-white hover:bg-black/70 border-0"
          : "h-8 w-8",
        orientation === "horizontal"
          ? "right-2 top-1/2 -translate-y-1/2"
          : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90",
        className
      )}
      disabled={!canScrollNext}
      onClick={scrollNext}
      {...props}
    >
      <ArrowRight className={cn("h-4 w-4", isMobile && "h-3.5 w-3.5")} />
      <span className="sr-only">Next slide</span>
    </Button>
  )
})
CarouselNext.displayName = "CarouselNext"

export { CarouselPrevious, CarouselNext }
