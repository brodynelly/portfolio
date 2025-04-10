import { useState } from 'react';
import { Loader2 } from 'lucide-react';

interface SingleImageProps {
  image: string;
  title: string;
}

export function SingleImage({ image, title }: SingleImageProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  return (
    <div className="aspect-video rounded-xl overflow-hidden shadow-lg mb-8 relative bg-muted/30">
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
          alt={`${title} screenshot`}
          className="w-full h-full object-cover"
          onLoad={() => setIsLoading(false)}
          onError={() => {
            setIsLoading(false);
            setHasError(true);
          }}
          style={{ display: isLoading ? 'none' : 'block' }}
        />
      )}
    </div>
  );
}
