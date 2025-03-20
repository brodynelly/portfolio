
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProjectCard from '@/components/ProjectCard';
import AnimatedSection from '@/components/AnimatedSection';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';
import { Filter, Grid3X3, ListFilter, ExternalLink, Github } from 'lucide-react';

// Import project data
import { projects, projectsWithClassInfo } from '@/data/projects';

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
          
          <AnimatedSection animation="fade-in" delay={300}>
            {selectedClass !== 'all' && (
              <div className="mb-8">
                <h2 className="text-xl font-semibold mb-2">
                  {classes.find(c => c.id === selectedClass)?.name}
                </h2>
                <p className="text-muted-foreground">
                  Showing {filteredProjects.length} project{filteredProjects.length !== 1 ? 's' : ''} for this class.
                </p>
              </div>
            )}
            
            {view === 'grid' ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProjects.map((project, index) => (
                  <AnimatedSection 
                    key={project.title} 
                    animation="slide-in-bottom" 
                    delay={150 * index}
                  >
                    <ProjectCard {...project} />
                  </AnimatedSection>
                ))}
              </div>
            ) : (
              <div className="space-y-6">
                {filteredProjects.map((project, index) => (
                  <AnimatedSection 
                    key={project.title} 
                    animation="fade-in" 
                    delay={150 * index}
                  >
                    <div className="flex flex-col md:flex-row gap-6 bg-white p-6 rounded-xl shadow-sm">
                      <Link 
                        to={`/projects/${project.title.replace(/\s+/g, '-').toLowerCase()}`}
                        className="md:w-1/3 aspect-video overflow-hidden rounded-md"
                      >
                        <img 
                          src={project.image} 
                          alt={project.title}
                          className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
                        />
                      </Link>
                      <div className="md:w-2/3">
                        <Link 
                          to={`/projects/${project.title.replace(/\s+/g, '-').toLowerCase()}`}
                          className="block"
                        >
                          <h3 className="heading-sm mb-2 hover:text-primary transition-colors">{project.title}</h3>
                        </Link>
                        <p className="text-muted-foreground mb-4">{project.description}</p>
                        
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.tech.slice(0, 4).map((item) => (
                            <span 
                              key={item.name}
                              className="text-xs px-2 py-1 rounded-full bg-gray-50 text-gray-700"
                            >
                              {item.name}
                            </span>
                          ))}
                          {project.tech.length > 4 && (
                            <span className="text-xs px-2 py-1 rounded-full bg-gray-50 text-gray-700">
                              +{project.tech.length - 4} more
                            </span>
                          )}
                        </div>
                        
                        {project.classId && (
                          <span className="inline-block px-2 py-1 text-xs font-medium bg-blue-50 text-blue-700 rounded mb-4">
                            {classes.find(c => c.id === project.classId)?.name || project.classId}
                          </span>
                        )}
                        
                        <div className="flex space-x-4">
                          <Link
                            to={`/projects/${project.title.replace(/\s+/g, '-').toLowerCase()}`}
                            className="text-sm font-medium text-primary hover:underline"
                          >
                            View Details
                          </Link>
                          
                          <a 
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center space-x-1 text-sm font-medium text-primary hover:underline"
                          >
                            <Github size={16} className="mr-1" />
                            <span>Repository</span>
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
                      </div>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            )}
            
            {filteredProjects.length === 0 && (
              <div className="text-center py-16">
                <p className="text-lg text-muted-foreground">No projects found for this class.</p>
              </div>
            )}
          </AnimatedSection>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
