
import { useState } from 'react';
import { ExternalLink, Github, ChevronDown, ChevronUp } from 'lucide-react';
import { cn } from '@/lib/utils';

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

  return (
    <div className="overflow-hidden rounded-xl bg-white shadow-md transition-all hover:shadow-lg">
      {/* Project Image */}
      <div className="relative aspect-video overflow-hidden bg-muted">
        <img
          src={image}
          alt={title}
          className={cn(
            "object-cover w-full h-full transition-opacity duration-700",
            imageLoaded ? "opacity-100" : "opacity-0"
          )}
          onLoad={() => setImageLoaded(true)}
        />
        {!imageLoaded && (
          <div className="absolute inset-0 flex items-center justify-center bg-muted">
            <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="heading-sm mb-3">{title}</h3>
        <p className="text-muted-foreground mb-4">{description}</p>

        {/* Tech Stack */}
        <div className="mb-4">
          <h4 className="text-sm font-medium mb-2">Tech Stack</h4>
          <div className="flex flex-wrap gap-2">
            {tech.slice(0, 5).map((item) => (
              <span 
                key={item.name}
                className={cn(
                  "text-xs px-2 py-1 rounded-full",
                  getCategoryColor(item.category)
                )}
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
            className="flex items-center justify-between w-full text-sm font-medium text-left focus:outline-none"
            onClick={toggleExpanded}
          >
            <span>Technical Challenges</span>
            {expanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </button>

          <div 
            className={cn(
              "overflow-hidden transition-all duration-300",
              expanded ? "max-h-96 opacity-100 mt-2" : "max-h-0 opacity-0"
            )}
          >
            <ul className="space-y-2 text-sm text-muted-foreground">
              {challenges.map((challenge, index) => (
                <li key={index} className="flex items-start">
                  <span className="mr-2 text-primary">•</span>
                  {challenge}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Links */}
        <div className="flex space-x-3">
          <a 
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-1 text-sm font-medium text-primary hover:underline"
          >
            <Github size={16} />
            <span>Repository</span>
          </a>
          
          {liveUrl && (
            <a 
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-1 text-sm font-medium text-primary hover:underline"
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
