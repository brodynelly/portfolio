
import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AnimatedSection from '@/components/AnimatedSection';
import { ArrowLeft, Github, ExternalLink } from 'lucide-react';
import { projectsWithClassInfo } from '@/data/projects';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function ClassDetail() {
  const { classId } = useParams<{ classId: string }>();
  const [isLoading, setIsLoading] = useState(true);

  // Find the class information
  const classes = [
    { id: 'all', name: 'All Projects' },
    { id: 'cs4320', name: 'CS4320 - Software Engineering' },
    { id: 'cs4830', name: 'CS4830 - Web Development' },
    { id: 'cs3380', name: 'CS3380 - Database Applications' },
    { id: 'cs3050', name: 'CS3050 - Advanced Algorithm Design' },
    { id: 'personal', name: 'Personal Projects' },
  ];
  
  const currentClass = classes.find(c => c.id === classId);
  
  // Filter projects by class
  const classProjects = projectsWithClassInfo.filter(project => project.classId === classId);

  // Simulate loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);

  if (!currentClass) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="pt-28 pb-16 container-width">
          <h1 className="heading-lg mb-4">Class Not Found</h1>
          <p className="mb-4">Sorry, we couldn't find the class you're looking for.</p>
          <Button asChild>
            <Link to="/projects">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Projects
            </Link>
          </Button>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-28 pb-16">
        <div className="container-width">
          <AnimatedSection animation="fade-in">
            <Link to="/projects" className="inline-flex items-center text-primary hover:underline mb-6">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to All Projects
            </Link>
            
            <h1 className="heading-lg mb-2">{currentClass.name}</h1>
            <p className="text-muted-foreground mb-8">
              Showing {classProjects.length} project{classProjects.length !== 1 ? 's' : ''} for this class.
            </p>
          </AnimatedSection>

          {isLoading ? (
            <div className="flex items-center justify-center h-64">
              <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
            </div>
          ) : (
            <div className="space-y-10">
              {classProjects.map((project, index) => (
                <AnimatedSection 
                  key={project.title} 
                  animation="fade-in-left" 
                  delay={150 * index}
                >
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-2xl font-bold">{project.title}</CardTitle>
                      <CardDescription>Made With:</CardDescription>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {project.tech.map((tech) => (
                          <span 
                            key={tech.name}
                            className="text-xs px-2 py-1 rounded-full bg-secondary text-secondary-foreground"
                          >
                            {tech.name}
                          </span>
                        ))}
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="mb-6">{project.description}</p>
                      
                      <h3 className="text-lg font-semibold mb-3">Key Challenges:</h3>
                      <ul className="space-y-2 mb-6">
                        {project.challenges.map((challenge, i) => (
                          <li key={i} className="flex items-start">
                            <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-2" />
                            <span>{challenge}</span>
                          </li>
                        ))}
                      </ul>
                      
                      <div className="flex space-x-4">
                        <a 
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center space-x-1 text-sm font-medium text-primary hover:underline"
                        >
                          <Github size={16} className="mr-1" />
                          <span>View on Github</span>
                        </a>
                        
                        {project.liveUrl && (
                          <a 
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center space-x-1 text-sm font-medium text-primary hover:underline"
                          >
                            <ExternalLink size={16} className="mr-1" />
                            <span>Live Demo</span>
                          </a>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </AnimatedSection>
              ))}
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
