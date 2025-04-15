
import { Link } from 'react-router-dom';
import { ExternalLink, Github, Image } from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';
import { ProjectWithClass } from '@/data/projects';

interface ProjectsListProps {
  projects: ProjectWithClass[];
  classes: { id: string; name: string }[];
}



export default function ProjectsList({ projects, classes }: ProjectsListProps) {
  return (
    <div className="space-y-6">
      {projects.map((project, index) => (
        <AnimatedSection
          key={project.title}
          animation="fade-in-right"
          delay={150 * index}
        >
          <div className="flex flex-col md:flex-row gap-6 bg-white p-6 rounded-xl shadow-sm">
            <Link
              to={`/projects/${project.title.replace(/\s+/g, '-').toLowerCase()}`}
              className="md:w-1/3 aspect-video overflow-hidden rounded-md relative group"
            >
              <img
                src={project.images && project.images.length > 0 ? project.images[0] : project.image}
                alt={project.title}
                className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
              />

              {/* Multiple images indicator */}
              {project.images && project.images.length > 1 && (
                <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded-md flex items-center">
                  <Image className="w-3 h-3 mr-1" />
                  {project.images.length}
                </div>
              )}
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
  );
}
