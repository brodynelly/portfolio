
import { useState, useEffect } from 'react';
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
  const [isVisible, setIsVisible] = useState(false);

  const toggleExpanded = () => setExpanded(!expanded);

  // Add intersection observer to detect when card is in viewport
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.3 });

    const element = document.getElementById(`project-${title.replace(/\s+/g, '-').toLowerCase()}`);
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [title]);

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
      id={`project-${title.replace(/\s+/g, '-').toLowerCase()}`}
      className={cn(
        "overflow-hidden rounded-xl bg-white shadow-md transition-all duration-700 transform",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20",
        isHovered ? "shadow-xl scale-[1.03] -translate-y-3" : ""
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        transitionDelay: isVisible ? '150ms' : '0ms',
        boxShadow: isHovered ? '0 10px 40px rgba(0, 0, 0, 0.12)' : ''
      }}
    >
      {/* Project Image - Make it clickable */}
      <Link to={projectUrl} className="block">
        <div className="relative aspect-video overflow-hidden bg-muted">
          <img
            src={image}
            alt={title}
            className={cn(
              "object-cover w-full h-full transition-all duration-1000",
              imageLoaded ? "opacity-100" : "opacity-0",
              isHovered ? "scale-110 blur-[1px]" : "scale-100"
            )}
            onLoad={() => setImageLoaded(true)}
          />
          
          {!imageLoaded && (
            <div className="absolute inset-0 flex items-center justify-center bg-muted">
              <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
            </div>
          )}
          
          <div 
            className={cn(
              "absolute inset-0 bg-primary/10 backdrop-blur-sm transition-opacity duration-500 flex items-center justify-center",
              isHovered ? "opacity-100" : "opacity-0"
            )}
          >
            <span className="px-4 py-2 bg-white/90 rounded-full text-primary font-medium transform transition-transform duration-500 scale-90">
              View Project
            </span>
          </div>
        </div>
      </Link>

      {/* Content */}
      <div className="p-6">
        {/* Title - Make it clickable */}
        <Link to={projectUrl}>
          <h3 className={cn(
            "heading-sm mb-3 transition-all duration-500",
            isHovered ? "text-primary translate-x-1" : ""
          )}>
            {title}
          </h3>
        </Link>
        <p className={cn(
          "text-muted-foreground mb-4 transition-opacity duration-500",
          isHovered ? "opacity-90" : "opacity-80"
        )}>
          {description}
        </p>

        {/* Tech Stack */}
        <div className="mb-4">
          <h4 className="text-sm font-medium mb-2">Tech Stack</h4>
          <div className="flex flex-wrap gap-2">
            {tech.slice(0, 5).map((item, index) => (
              <span 
                key={item.name}
                className={cn(
                  "text-xs px-2 py-1 rounded-full transition-all duration-500",
                  getCategoryColor(item.category)
                )}
                style={{ 
                  transitionDelay: `${(index * 50) + 100}ms`,
                  transform: isHovered ? 'translateY(-5px)' : 'translateY(0)',
                  boxShadow: isHovered ? '0 4px 6px rgba(0,0,0,0.1)' : 'none'
                }}
              >
                {item.name}
              </span>
            ))}
            {tech.length > 5 && (
              <span className="text-xs px-2 py-1 rounded-full bg-gray-50 text-gray-700 transition-all duration-500"
                style={{
                  transitionDelay: '350ms',
                  transform: isHovered ? 'translateY(-5px)' : 'translateY(0)'
                }}
              >
                +{tech.length - 5} more
              </span>
            )}
          </div>
        </div>

        {/* Collapsible Challenges Section */}
        <div className="mb-4">
          <button
            className={cn(
              "flex items-center justify-between w-full text-sm font-medium text-left focus:outline-none transition-all duration-300",
              isHovered ? "text-primary" : ""
            )}
            onClick={toggleExpanded}
          >
            <span>Technical Challenges</span>
            {expanded ? 
              <ChevronUp size={16} className={cn(
                "transition-transform duration-300",
                isHovered ? "rotate-[-10deg]" : ""
              )} /> : 
              <ChevronDown size={16} className={cn(
                "transition-transform duration-300",
                isHovered ? "rotate-[10deg]" : ""
              )} />
            }
          </button>

          <div 
            className={cn(
              "overflow-hidden transition-all duration-700",
              expanded ? "max-h-96 opacity-100 mt-2" : "max-h-0 opacity-0"
            )}
          >
            <ul className="space-y-2 text-sm text-muted-foreground">
              {challenges.map((challenge, index) => (
                <li 
                  key={index} 
                  className="flex items-start transition-all duration-500"
                  style={{ 
                    transitionDelay: `${index * 150}ms`,
                    transform: expanded ? 'translateX(0)' : 'translateX(-20px)',
                    opacity: expanded ? 1 : 0
                  }}
                >
                  <span className="mr-2 text-primary animate-pulse">•</span>
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
            className={cn(
              "inline-flex items-center space-x-1 text-sm font-medium text-primary hover:underline transition-all duration-500",
              isHovered ? "translate-x-2" : "translate-x-0"
            )}
          >
            <span>View Details</span>
          </Link>
          
          <a 
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "inline-flex items-center space-x-1 text-sm font-medium text-primary hover:underline transition-all duration-500",
              isHovered ? "translate-x-2" : "translate-x-0"
            )}
            style={{
              transitionDelay: isHovered ? '100ms' : '0ms'
            }}
          >
            <Github size={16} />
            <span>Repository</span>
          </a>
          
          {liveUrl && (
            <a 
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "inline-flex items-center space-x-1 text-sm font-medium text-primary hover:underline transition-all duration-500",
                isHovered ? "translate-x-2" : "translate-x-0"
              )}
              style={{
                transitionDelay: isHovered ? '200ms' : '0ms'
              }}
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
