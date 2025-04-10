
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import ProjectCardImage from './project-card/ProjectCardImage';
import ProjectCardTitle from './project-card/ProjectCardTitle';
import TechStack from './project-card/TechStack';
import ChallengesList from './project-card/ChallengesList';
import ProjectLinks from './project-card/ProjectLinks';

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
  images?: string[];
  githubUrl: string;
  liveUrl?: string;
}

export default function ProjectCard({
  title,
  description,
  tech,
  challenges,
  image,
  images,
  githubUrl,
  liveUrl
}: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  
  const projectUrl = `/projects/${title.replace(/\s+/g, '-').toLowerCase()}`;

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

  return (
    <div 
      id={`project-${title.replace(/\s+/g, '-').toLowerCase()}`}
      className={cn(
        "overflow-hidden rounded-xl bg-white shadow-md ",
        isVisible ? "transform transition-all duration-300 opacity-100 translate-y-0" : "opacity-0 translate-y-20",
        isHovered ? "transform transition-all duration-300 shadow-lg scale-[1.02] -translate-y-0" : ""
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        transitionDelay: isVisible ? '150ms' : '0ms',
        boxShadow: isHovered ? '0 5px 20px rgba(0, 0, 0, 0.12)' : ''
      }}
    >
      {/* Project Image */}
      <ProjectCardImage 
        title={title}
        image={image}
        images={images}
        projectUrl={projectUrl}
        isHovered={isHovered}
      />

      {/* Content */}
      <div className="p-6">
        {/* Title */}
        <ProjectCardTitle 
          title={title}
          projectUrl={projectUrl}
          isHovered={isHovered}
        />
        
        <p className={cn(
          "text-muted-foreground mb-4 transition-opacity duration-500",
          isHovered ? "opacity-90" : "opacity-80"
        )}>
          {description}
        </p>

        {/* Tech Stack */}
        <TechStack tech={tech} isHovered={isHovered} />

        {/* Challenges */}
        <ChallengesList challenges={challenges} isHovered={isHovered} />

        {/* Links */}
        <ProjectLinks 
          projectUrl={projectUrl}
          githubUrl={githubUrl}
          liveUrl={liveUrl}
          isHovered={isHovered}
        />
      </div>
    </div>
  );
}
