
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AnimatedSection from '@/components/AnimatedSection';
import { projectsWithClassInfo } from '@/data/projects';
import ProjectsHeader from '@/components/projects/ProjectsHeader';
import ProjectsGrid from '@/components/projects/ProjectsGrid';
import ProjectsList from '@/components/projects/ProjectsList';
import FilterInfo from '@/components/projects/FilterInfo';
import EmptyState from '@/components/projects/EmptyState';

export default function AllProjects() {
  const [view, setView] = useState<'grid' | 'list'>('grid');
  const [selectedClass, setSelectedClass] = useState<string>('all');
  
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
            
            {filteredProjects.length > 0 ? (
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
