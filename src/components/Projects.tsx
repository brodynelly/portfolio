
import AnimatedSection from './AnimatedSection';
import ProjectCard from './ProjectCard';
import { Button } from './ui/button';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { projects } from '@/data/projects';

export default function Projects() {
  return (
    <section id="projects" className="section-padding bg-secondary">
      <div className="container-width">
        <AnimatedSection animation="fade-in">
          <span className="inline-block px-3 py-1 text-xs font-medium tracking-wider uppercase bg-white rounded-full mb-4">
            Projects
          </span>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <h2 className="heading-lg">Featured Work</h2>
            <Link to="/projects">
              <Button variant="ghost" className="group mt-4 md:mt-0">
                View all projects
                <ChevronRight className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <AnimatedSection 
              key={project.title} 
              animation="slide-in-bottom" 
              delay={300 * index}
            >
              <ProjectCard {...project} />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
