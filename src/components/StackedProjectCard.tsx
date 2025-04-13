import { useState } from 'react';
import { cn } from '@/lib/utils';
import StackedProjectCardImage from './project-card/StackedProjectCardImage';
import StackedProjectCardTitle from './project-card/StackedProjectCardTitle';
import TechStack from './project-card/TechStack';
import ChallengesList from './project-card/ChallengesList';
import ProjectLinks from './project-card/ProjectLinks';

interface TechItem {
  name: string;
  category: 'frontend' | 'backend' | 'database' | 'deployment' | 'language';
}

interface StackedProjectCardProps {
  title: string;
  description: string;
  tech: TechItem[];
  challenges: string[];
  image: string;
  images?: string[];
  githubUrl: string;
  liveUrl?: string;
}

export default function StackedProjectCard({
  title,
  description,
  tech,
  challenges,
  image,
  images,
  githubUrl,
  liveUrl
}: StackedProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  const projectUrl = `/projects/${title.replace(/\s+/g, '-').toLowerCase()}`;

  return (
    <div
      className={cn(
        "overflow-hidden rounded-xl bg-white shadow-md w-full",
        isHovered ? "transform transition-all duration-300 shadow-lg scale-[1.02] -translate-y-0" : ""
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        boxShadow: isHovered ? '0 5px 20px rgba(0, 0, 0, 0.12)' : ''
      }}
    >
      {/* Project Image */}
      <StackedProjectCardImage
        title={title}
        image={image}
        images={images}
        projectUrl={projectUrl}
        isHovered={isHovered}
      />

      {/* Content */}
      <div className="p-6">
        {/* Title - Not clickable */}
        <StackedProjectCardTitle
          title={title}
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
