
import AnimatedSection from '@/components/AnimatedSection';

interface FilterInfoProps {
  selectedClass: string;
  classes: { id: string; name: string }[];
  projectCount: number;
}

export default function FilterInfo({ selectedClass, classes, projectCount }: FilterInfoProps) {
  if (selectedClass === 'all') return null;
  
  return (
    <div className="mb-8">
      <h2 className="text-xl font-semibold mb-2">
        {classes.find(c => c.id === selectedClass)?.name}
      </h2>
      <p className="text-muted-foreground">
        Showing {projectCount} project{projectCount !== 1 ? 's' : ''} for this class.
      </p>
    </div>
  );
}
