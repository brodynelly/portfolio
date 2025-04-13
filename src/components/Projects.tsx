
import AnimatedSection from './AnimatedSection';
import { Button } from './ui/button';
import { ChevronRight } from 'lucide-react';
import { ScrollToTopLink } from '@/components/ui/scroll-to-top-link';
import { projects } from '@/data/projects';
import ProjectCardStack from './ProjectCardStack';

export default function Projects() {
  return (
    <section id="projects" className="section-padding bg-secondary relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-white to-transparent opacity-50"></div>
      <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-primary/5 blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-primary/5 blur-3xl"></div>

      <div className="container-width relative z-10">
        <AnimatedSection animation="fade-in">
          <span className="inline-block px-3 py-1 text-xs font-medium tracking-wider uppercase bg-white rounded-full mb-4 shadow-sm">
            Projects
          </span>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <h2 className="heading-lg">Featured Work</h2>
            <ScrollToTopLink to="/projects">
              <Button variant="ghost" className="group mt-4 md:mt-0 transition-all duration-300 hover:bg-white hover:scale-105">
                View all projects
                <ChevronRight className="h-4 w-4 ml-1 transition-transform duration-300 group-hover:translate-x-2" />
              </Button>
            </ScrollToTopLink>
          </div>
        </AnimatedSection>

        <AnimatedSection animation="fade-in" delay={300}>
          <div className="w-full max-w-md mx-auto">
            <ProjectCardStack projects={projects} maxCards={5} />
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
