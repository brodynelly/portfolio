
import AnimatedSection from '@/components/AnimatedSection';
import ProjectCard from '@/components/ProjectCard';
import { ProjectWithClass } from '@/data/projects';

interface ProjectsGridProps {
  projects: ProjectWithClass[];
}

export default function ProjectsGrid({ projects }: ProjectsGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project, index) => (
        <AnimatedSection 
          key={project.title} 
          animation="fade-in-right" 
          delay={150 * index}
        >
          <ProjectCard {...project} />
        </AnimatedSection>
      ))}
    </div>
  );
}
