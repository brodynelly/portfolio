
interface SingleImageProps {
  image: string;
  title: string;
}

export function SingleImage({ image, title }: SingleImageProps) {
  return (
    <div className="aspect-video rounded-xl overflow-hidden shadow-lg mb-8">
      <img 
        src={image} 
        alt={`${title} screenshot`}
        className="w-full h-full object-cover"
      />
    </div>
  );
}
