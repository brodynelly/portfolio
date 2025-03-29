
import { Filter, Grid3X3, ListFilter } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import AnimatedSection from '@/components/AnimatedSection';

interface ProjectsHeaderProps {
  selectedClass: string;
  setSelectedClass: (value: string) => void;
  setView: (value: 'grid' | 'list') => void;
  classes: { id: string; name: string }[];
}

export default function ProjectsHeader({
  selectedClass,
  setSelectedClass,
  setView,
  classes
}: ProjectsHeaderProps) {
  return (
    <AnimatedSection animation="fade-in">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
        <div>
          <span className="inline-block px-3 py-1 text-xs font-medium tracking-wider uppercase bg-secondary rounded-full mb-2">
            Portfolio
          </span>
          <h1 className="heading-lg">All Projects</h1>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Filter className="h-4 w-4 text-muted-foreground" />
            <Select value={selectedClass} onValueChange={setSelectedClass}>
              <SelectTrigger className="w-[220px]">
                <SelectValue placeholder="Filter by class" />
              </SelectTrigger>
              <SelectContent>
                {classes.map((classItem) => (
                  <SelectItem key={classItem.id} value={classItem.id}>
                    {classItem.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          
          <Tabs defaultValue="grid" className="w-auto">
            <TabsList className="grid w-[100px] grid-cols-2">
              <TabsTrigger 
                value="grid" 
                onClick={() => setView('grid')}
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                <Grid3X3 className="h-4 w-4" />
              </TabsTrigger>
              <TabsTrigger 
                value="list" 
                onClick={() => setView('list')}
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                <ListFilter className="h-4 w-4" />
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </div>
    </AnimatedSection>
  );
}
