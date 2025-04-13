import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import StackedProjectCard from './StackedProjectCard';
import { Project } from '@/data/projects/types';
import { ChevronRight } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

interface ProjectCardStackProps {
  projects: Project[];
  maxCards?: number;
}

export default function ProjectCardStack({ projects, maxCards = 3 }: ProjectCardStackProps) {
  // Add a special "View All Projects" card
  const viewAllCard: Project = {
    title: "view-all-projects",
    description: "View all projects in the portfolio",
    tech: [],
    challenges: [],
    image: "",
    githubUrl: "",
    isViewAllCard: true
  };

  const [cards, setCards] = useState([...projects.slice(0, maxCards - 1), viewAllCard]);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [usedProjects, setUsedProjects] = useState<Set<string>>(new Set(projects.slice(0, maxCards - 1).map(p => p.title)));

  // Auto-rotate cards every 8 seconds until View All card is at the top
  useEffect(() => {
    const rotationInterval = setInterval(() => {
      if (cards.length > 0 && activeIndex === null) {
        // Check if the top card is the View All card
        const topCard = cards[0];
        if (topCard.isViewAllCard) {
          // Stop rotation when View All card is at the top
          clearInterval(rotationInterval);
          return;
        }
        // Remove the top card and add it to the end of the stack
        removeCard(topCard.title);
      }
    }, 8000);

    return () => clearInterval(rotationInterval);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cards, activeIndex]);

  const handleCardClick = (index: number) => {
    // If it's the View All card, don't set it as active
    if (cards[index].isViewAllCard) return;
    setActiveIndex(activeIndex === index ? null : index);
  };

  // Function to get a new project that hasn't been used yet
  const getNextProject = () => {
    const availableProjects = projects.filter(p => !usedProjects.has(p.title));

    // If we've used all projects, reset the used projects set (except for current cards)
    if (availableProjects.length === 0) {
      const currentTitles = new Set(cards.filter(c => !c.isViewAllCard).map(c => c.title));
      setUsedProjects(currentTitles);
      return projects.find(p => !currentTitles.has(p.title)) || projects[0];
    }

    return availableProjects[0];
  };

  const removeCard = (id: string) => {
    setCards((prevCards) => {
      // Remove the card
      const newCards = prevCards.filter((card) => card.title !== id);

      // Remove the View All card if it exists (we'll add it back at the end)
      const cardsWithoutViewAll = newCards.filter(card => !card.isViewAllCard);

      // Get a new project to add
      const newProject = getNextProject();

      if (newProject) {
        setUsedProjects(prev => new Set([...prev, newProject.title]));

        // Always ensure View All card is at the end
        return [...cardsWithoutViewAll, newProject, viewAllCard];
      }

      // If no new project, just ensure View All card is at the end
      return [...cardsWithoutViewAll, viewAllCard];
    });
  };

  return (
    <div className="relative h-[650px] md:h-[550px] lg:h-[500px] w-full">
      <AnimatePresence mode="popLayout">
        {cards.map((project, index) => (
          <Card
            key={project.title}
            project={project}
            index={index}
            isActive={activeIndex === index}
            handleCardClick={handleCardClick}
            removeCard={removeCard}
            totalCards={cards.length}
          />
        ))}
      </AnimatePresence>
    </div>
  );
}

interface CardProps {
  project: Project;
  index: number;
  isActive: boolean;
  handleCardClick: (index: number) => void;
  removeCard: (id: string) => void;
  totalCards: number;
}

function Card({ project, index, handleCardClick, removeCard, totalCards }: CardProps) {
  const navigate = useNavigate();
  const zIndex = totalCards - index;
  const yOffset = index * 30; // Vertical offset for stacking
  const xOffset = index * 5; // Horizontal offset for stacking

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 100, x: xOffset }}
      animate={{
        opacity: 1,
        y: yOffset,
        x: xOffset,
        scale: 1 - index * 0.04, // Scale for stacking
        rotateZ: index * -3, // Slight rotation for each card
      }}
      exit={{
        opacity: 0,
        transition: { duration: 0.2 },
      }}
      transition={{
        type: "spring",
        stiffness: 500,
        damping: 50,
        mass: 1,
      }}
      style={{
        zIndex,
        position: 'absolute',
        width: '100%',
        maxWidth: '340px',
        boxShadow: `0 ${10 + index * 5}px ${30 + index * 10}px rgba(0, 0, 0, ${0.1 - index * 0.02})`,
        backgroundColor: 'white',
        left: 0,
        top: 0,
      }}
      className="cursor-grab overflow-hidden rounded-xl active:cursor-grabbing h-full w-full"
      drag={index === 0} // Allow drag only for the top card
      dragConstraints={{ top: 0, bottom: 0, left: 0, right: 0 }}
      dragElastic={0.6}
      onDragEnd={(_, info) => {
        if (index === 0) {
          const distance = Math.sqrt(Math.pow(info.offset.x, 2) + Math.pow(info.offset.y, 2));
          if (distance > 150) {
            removeCard(project.title);
          }
        }
      }}
      whileDrag={{
        scale: 0.95, // Slightly larger than base scale but still smaller than original
        boxShadow: `0 ${15 + index * 5}px ${40 + index * 10}px rgba(0, 0, 0, ${0.15 - index * 0.02})`,
      }}
      onClick={() => {
        if (project.isViewAllCard) {
          // Navigate to projects page when View All card is clicked
          navigate('/projects');
        } else if (index !== 0) {
          handleCardClick(index);
        }
      }}
    >
      <div className="relative">
        {project.isViewAllCard ? (
          <div className="overflow-hidden rounded-xl bg-white shadow-md h-full">
            <div className="flex flex-col items-center justify-center h-full p-8 text-center">
              <div className="mb-6 bg-primary/10 p-4 rounded-full">
                <ChevronRight className="h-8 w-8 text-primary" />
              </div>

              <h3 className="text-xl md:text-2xl font-semibold mb-4">View All Projects</h3>

              <p className="text-muted-foreground mb-8">
                Explore the complete collection of projects in my portfolio
              </p>

              <Link
                to="/projects"
                className="inline-flex items-center justify-center px-6 py-3 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors"
              >
                Browse All Projects
                <ChevronRight className="h-4 w-4 ml-2" />
              </Link>
            </div>
          </div>
        ) : (
          <StackedProjectCard {...project} />
        )}

        {/* Drag indicator for the top card */}
        {index === 0 && (
          <div className="absolute bottom-2 left-1/2 flex -translate-x-1/2 flex-col items-center">
            <motion.div
              className="h-1 w-10 rounded-full bg-primary/20"
              animate={{ y: [0, 5, 0] }}
              transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
            />
          </div>
        )}
      </div>
    </motion.div>
  );
}
