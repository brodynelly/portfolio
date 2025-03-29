
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AnimatedSection from '@/components/AnimatedSection';
import { projectsWithClassInfo } from '@/data/projects';
import ProjectsHeader from '@/components/projects/ProjectsHeader';
import ProjectsGrid from '@/components/projects/ProjectsGrid';
import ProjectsList from '@/components/projects/ProjectsList';
import FilterInfo from '@/components/projects/FilterInfo';
import EmptyState from '@/components/projects/EmptyState';
import { Code, Database, FileCode, Laptop, Terminal } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

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

  const classIcons = {
    'cs4320': <Code className="h-5 w-5 text-blue-500" />,
    'cs4830': <Laptop className="h-5 w-5 text-green-500" />,
    'cs3380': <Database className="h-5 w-5 text-purple-500" />,
    'cs3050': <FileCode className="h-5 w-5 text-orange-500" />,
    'personal': <Terminal className="h-5 w-5 text-rose-500" />,
  };

  // Count projects per class
  const projectCountByClass = classes.reduce((acc, cls) => {
    if (cls.id === 'all') {
      acc[cls.id] = projectsWithClassInfo.length;
    } else {
      acc[cls.id] = projectsWithClassInfo.filter(p => p.classId === cls.id).length;
    }
    return acc;
  }, {} as Record<string, number>);

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
          
          {selectedClass === 'all' ? (
            <AnimatedSection animation="fade-in" delay={300}>
              <h2 className="text-2xl font-bold mb-6">Browse by Class</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                {classes.filter(c => c.id !== 'all').map((classItem, index) => (
                  <AnimatedSection 
                    key={classItem.id} 
                    animation="fade-in-right" 
                    delay={150 * index}
                  >
                    <Link to={`/class/${classItem.id}`}>
                      <Card className="hover:shadow-md transition-all duration-300 hover:-translate-y-1 h-full">
                        <CardHeader>
                          <div className="flex items-center gap-3">
                            {classItem.id in classIcons && classIcons[classItem.id as keyof typeof classIcons]}
                            <CardTitle>{classItem.name}</CardTitle>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <CardDescription className="mb-4">
                            View all projects related to {classItem.name}
                          </CardDescription>
                          <div className="text-sm text-muted-foreground">
                            {projectCountByClass[classItem.id]} project{projectCountByClass[classItem.id] !== 1 ? 's' : ''}
                          </div>
                        </CardContent>
                      </Card>
                    </Link>
                  </AnimatedSection>
                ))}
              </div>
              
              <h2 className="text-2xl font-bold mb-6">All Projects</h2>
              {view === 'grid' ? (
                <ProjectsGrid projects={filteredProjects} />
              ) : (
                <ProjectsList projects={filteredProjects} classes={classes} />
              )}
            </AnimatedSection>
          ) : (
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
          )}
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
