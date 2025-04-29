
import AnimatedSection from '@/components/AnimatedSection';
import ProjectCard from '@/components/ProjectCard';
import { ProjectWithClass } from '@/data/projects';
import { useIsMobile } from '@/hooks/use-mobile';

interface ProjectsGridProps {
  projects: ProjectWithClass[];
}

export default function ProjectsGrid({ projects }: ProjectsGridProps) {
  const isMobile = useIsMobile();
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project, index) => (
        <AnimatedSection 
          key={project.title} 
          animation="fade-in"
          // No delay on mobile for immediate rendering
          delay={isMobile ? 0 : 150 * index}
          className="h-full"
        >
          <ProjectCard {...project} />
        </AnimatedSection>
      ))}
    </div>
  );
}
