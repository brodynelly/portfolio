
import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AnimatedSection from '@/components/AnimatedSection';
import { projectsWithClassInfo } from '@/data/projects';
import ProjectsHeader from '@/components/projects/ProjectsHeader';
import ProjectsGrid from '@/components/projects/ProjectsGrid';
import ProjectsList from '@/components/projects/ProjectsList';
import FilterInfo from '@/components/projects/FilterInfo';
import EmptyState from '@/components/projects/EmptyState';
import { useIsMobile } from '@/hooks/use-mobile';

export default function AllProjects() {
  const [view, setView] = useState<'grid' | 'list'>('grid');
  const [selectedClass, setSelectedClass] = useState<string>('all');
  const [isLoading, setIsLoading] = useState(true);
  const [projectsReady, setProjectsReady] = useState(false);
  const isMobile = useIsMobile();

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Set projects ready immediately to avoid waiting for loading state
    setProjectsReady(true);
    
    // Set a small delay to ensure all components are properly loaded
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 300); // Reduced from 500ms to 300ms for faster loading
    
    return () => clearTimeout(timer);
  }, []);

  const classes = [
    { id: 'all', name: 'All Projects' },
    { id: 'cs4320', name: 'CS4320 - Software Engineering' },
    { id: 'cs4830', name: 'CS4830 - Web Development' },
    { id: 'cs3380', name: 'CS3380 - Database Applications' },
    { id: 'cs3050', name: 'CS3050 - Advanced Algorithm Design' },
    { id: 'personal', name: 'Personal Projects' },
  ];

  const filteredProjects = selectedClass === 'all'
    ? projectsWithClassInfo
    : projectsWithClassInfo.filter(project => project.classId === selectedClass);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="animate-pulse text-center">
          <div className="h-8 w-48 bg-gray-200 rounded mb-4 mx-auto"></div>
          <div className="h-4 w-64 bg-gray-200 rounded mx-auto"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-28 pb-16">
        <section className="container-width">
          <ProjectsHeader
            selectedClass={selectedClass}
            setSelectedClass={setSelectedClass}
            setView={setView}
            classes={classes}
          />

          <AnimatedSection animation="fade-in" delay={300}>
            <FilterInfo
              selectedClass={selectedClass}
              classes={classes}
              projectCount={filteredProjects.length}
            />

            {projectsReady && filteredProjects.length > 0 ? (
              view === 'grid' ? (
                <ProjectsGrid projects={filteredProjects} />
              ) : (
                <ProjectsList projects={filteredProjects} classes={classes} />
              )
            ) : (
              <EmptyState />
            )}
          </AnimatedSection>
        </section>
      </main>

      <Footer />
    </div>
  );
}
