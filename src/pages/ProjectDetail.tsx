
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Github, ExternalLink, Tag } from 'lucide-react';
import { projectsWithClassInfo } from '@/data/projects';
import AnimatedSection from '@/components/AnimatedSection';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { cn } from '@/lib/utils';

export default function ProjectDetail() {
  const { projectId } = useParams();
  const [project, setProject] = useState(
    projectsWithClassInfo.find(p => p.title.replace(/\s+/g, '-').toLowerCase() === projectId)
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="pt-28 pb-16">
          <div className="container-width text-center py-24">
            <h1 className="heading-lg mb-4">Project Not Found</h1>
            <p className="text-muted-foreground mb-8">
              Sorry, we couldn't find the project you're looking for.
            </p>
            <Link to="/projects">
              <Button>Back to Projects</Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'frontend': return 'bg-blue-50 text-blue-700';
      case 'backend': return 'bg-green-50 text-green-700';
      case 'database': return 'bg-purple-50 text-purple-700';
      case 'deployment': return 'bg-orange-50 text-orange-700';
      case 'language': return 'bg-gray-50 text-gray-700';
      default: return 'bg-gray-50 text-gray-700';
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-28 pb-16">
        <div className="container-width">
          <AnimatedSection animation="fade-in">
            <Link to="/projects" className="inline-flex items-center text-sm font-medium text-primary hover:underline mb-8">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Projects
            </Link>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Project Image and Basic Info */}
              <div className="lg:col-span-2">
                <div className="aspect-video rounded-xl overflow-hidden shadow-lg mb-8">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <h1 className="heading-lg mb-4">{project.title}</h1>
                <p className="text-lg text-muted-foreground mb-8">{project.description}</p>
                
                <div className="flex flex-wrap gap-3 mb-8">
                  {project.tech.map((item) => (
                    <span 
                      key={item.name}
                      className={cn(
                        "flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm",
                        getCategoryColor(item.category)
                      )}
                    >
                      <Tag className="w-3.5 h-3.5" />
                      {item.name}
                    </span>
                  ))}
                </div>
                
                <div className="flex flex-wrap gap-4 mb-12">
                  <Button asChild>
                    <a 
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center"
                    >
                      <Github className="mr-2 h-4 w-4" />
                      View Repository
                    </a>
                  </Button>
                  
                  {project.liveUrl && (
                    <Button asChild variant="outline">
                      <a 
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center"
                      >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live Demo
                      </a>
                    </Button>
                  )}
                </div>
              </div>
              
              {/* Project Details */}
              <div className="lg:col-span-1">
                <Tabs defaultValue="challenges" className="w-full">
                  <TabsList className="w-full grid grid-cols-2 mb-6">
                    <TabsTrigger value="challenges">Challenges</TabsTrigger>
                    <TabsTrigger value="details">Details</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="challenges" className="space-y-4">
                    <div className="bg-secondary/50 rounded-xl p-6">
                      <h3 className="text-lg font-semibold mb-4">Technical Challenges</h3>
                      <ul className="space-y-3">
                        {project.challenges.map((challenge, index) => (
                          <li key={index} className="flex items-start">
                            <span className="mr-2 text-primary">•</span>
                            <span>{challenge}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="details" className="space-y-4">
                    <div className="bg-secondary/50 rounded-xl p-6">
                      <h3 className="text-lg font-semibold mb-4">Project Details</h3>
                      
                      {project.classId && (
                        <div className="mb-4">
                          <h4 className="text-sm font-medium mb-1">Course</h4>
                          <p className="text-muted-foreground">
                            {project.classId === 'personal' 
                              ? 'Personal Project' 
                              : project.classId.toUpperCase()}
                          </p>
                        </div>
                      )}
                      
                      <div className="mb-4">
                        <h4 className="text-sm font-medium mb-1">Category</h4>
                        <div className="flex flex-wrap gap-2">
                          {Array.from(new Set(project.tech.map(t => t.category))).map(category => (
                            <span
                              key={category}
                              className={cn(
                                "inline-block px-2 py-1 text-xs rounded-full",
                                getCategoryColor(category)
                              )}
                            >
                              {category.charAt(0).toUpperCase() + category.slice(1)}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
