
import { useState } from 'react';
import { ExternalLink, Github, ChevronDown, ChevronUp } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';

interface TechItem {
  name: string;
  category: 'frontend' | 'backend' | 'database' | 'deployment' | 'language';
}

interface ProjectCardProps {
  title: string;
  description: string;
  tech: TechItem[];
  challenges: string[];
  image: string;
  githubUrl: string;
  liveUrl?: string;
}

export default function ProjectCard({
  title,
  description,
  tech,
  challenges,
  image,
  githubUrl,
  liveUrl
}: ProjectCardProps) {
  const [expanded, setExpanded] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const toggleExpanded = () => setExpanded(!expanded);

  const getCategoryColor = (category: TechItem['category']) => {
    switch (category) {
      case 'frontend': return 'bg-blue-50 text-blue-700';
      case 'backend': return 'bg-green-50 text-green-700';
      case 'database': return 'bg-purple-50 text-purple-700';
      case 'deployment': return 'bg-orange-50 text-orange-700';
      case 'language': return 'bg-gray-50 text-gray-700';
      default: return 'bg-gray-50 text-gray-700';
    }
  };

  const projectUrl = `/projects/${title.replace(/\s+/g, '-').toLowerCase()}`;

  return (
    <div 
      className="overflow-hidden rounded-xl bg-white shadow-md transition-all duration-300 hover:shadow-lg transform hover:-translate-y-2"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Project Image - Make it clickable */}
      <Link to={projectUrl} className="block">
        <div className="relative aspect-video overflow-hidden bg-muted">
          <img
            src={image}
            alt={title}
            className={cn(
              "object-cover w-full h-full transition-all duration-700",
              imageLoaded ? "opacity-100 scale-100" : "opacity-0 scale-105",
              isHovered ? "scale-105" : "scale-100"
            )}
            onLoad={() => setImageLoaded(true)}
          />
          {!imageLoaded && (
            <div className="absolute inset-0 flex items-center justify-center bg-muted">
              <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
            </div>
          )}
        </div>
      </Link>

      {/* Content */}
      <div className="p-6">
        {/* Title - Make it clickable */}
        <Link to={projectUrl}>
          <h3 className="heading-sm mb-3 hover:text-primary transition-colors">{title}</h3>
        </Link>
        <p className="text-muted-foreground mb-4">{description}</p>

        {/* Tech Stack */}
        <div className="mb-4">
          <h4 className="text-sm font-medium mb-2">Tech Stack</h4>
          <div className="flex flex-wrap gap-2">
            {tech.slice(0, 5).map((item, index) => (
              <span 
                key={item.name}
                className={cn(
                  "text-xs px-2 py-1 rounded-full transition-all",
                  getCategoryColor(item.category)
                )}
                style={{ 
                  transitionDelay: `${index * 50}ms`,
                  transform: isHovered ? 'translateY(-2px)' : 'translateY(0)',
                  boxShadow: isHovered ? '0 2px 4px rgba(0,0,0,0.1)' : 'none'
                }}
              >
                {item.name}
              </span>
            ))}
            {tech.length > 5 && (
              <span className="text-xs px-2 py-1 rounded-full bg-gray-50 text-gray-700">
                +{tech.length - 5} more
              </span>
            )}
          </div>
        </div>

        {/* Collapsible Challenges Section */}
        <div className="mb-4">
          <button
            className="flex items-center justify-between w-full text-sm font-medium text-left focus:outline-none hover:text-primary transition-colors"
            onClick={toggleExpanded}
          >
            <span>Technical Challenges</span>
            {expanded ? <ChevronUp size={16} className="transition-transform" /> : <ChevronDown size={16} className="transition-transform" />}
          </button>

          <div 
            className={cn(
              "overflow-hidden transition-all duration-300",
              expanded ? "max-h-96 opacity-100 mt-2" : "max-h-0 opacity-0"
            )}
          >
            <ul className="space-y-2 text-sm text-muted-foreground">
              {challenges.map((challenge, index) => (
                <li 
                  key={index} 
                  className="flex items-start transition-all"
                  style={{ 
                    transitionDelay: `${index * 100}ms`,
                    transform: expanded ? 'translateX(0)' : 'translateX(-10px)',
                    opacity: expanded ? 1 : 0
                  }}
                >
                  <span className="mr-2 text-primary">•</span>
                  {challenge}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* View Details Button */}
        <div className="flex space-x-3">
          <Link 
            to={projectUrl}
            className="inline-flex items-center space-x-1 text-sm font-medium text-primary hover:underline transition-transform hover:translate-x-1"
          >
            <span>View Details</span>
          </Link>
          
          <a 
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-1 text-sm font-medium text-primary hover:underline transition-transform hover:translate-x-1"
          >
            <Github size={16} />
            <span>Repository</span>
          </a>
          
          {liveUrl && (
            <a 
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-1 text-sm font-medium text-primary hover:underline transition-transform hover:translate-x-1"
            >
              <ExternalLink size={16} />
              <span>Live Demo</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
