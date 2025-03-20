
import AnimatedSection from './AnimatedSection';
import ProjectCard from './ProjectCard';

export default function Projects() {
  const projects = [
    {
      title: "IoT Pig Data Visualization Application",
      description: "A comprehensive dashboard for visualizing and analyzing IoT data from pig monitoring sensors.",
      tech: [
        { name: "Next.js", category: "frontend" as const },
        { name: "React", category: "frontend" as const },
        { name: "Express.js", category: "backend" as const },
        { name: "PostgreSQL", category: "database" as const },
        { name: "TypeScript", category: "language" as const },
        { name: "Docker", category: "deployment" as const },
        { name: "Chart.js", category: "frontend" as const },
        { name: "Multer", category: "backend" as const },
      ],
      challenges: [
        "Implemented efficient batch processing for large CSV data imports",
        "Designed real-time data visualization components with optimized rendering",
        "Created custom PostgreSQL queries for complex time-series analytics",
      ],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1470&auto=format&fit=crop",
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
    },
    {
      title: "Assembly Language Microcontroller Project",
      description: "Interactive lab assignment demonstrating ASM programming for the M68HC11 microcontroller with detailed documentation.",
      tech: [
        { name: "Assembly", category: "language" as const },
        { name: "M68HC11", category: "language" as const },
        { name: "C", category: "language" as const },
        { name: "Hardware Interfacing", category: "backend" as const },
      ],
      challenges: [
        "Optimized polling routines for real-time sensor data acquisition",
        "Implemented memory-efficient algorithms within strict hardware constraints",
        "Created detailed documentation with pseudocode for complex operations",
      ],
      image: "https://images.unsplash.com/photo-1517420704952-d9f39e95b43e?q=80&w=1470&auto=format&fit=crop",
      githubUrl: "https://github.com",
    },
    {
      title: "Django Healthcare Management System",
      description: "A comprehensive healthcare management platform built with Django, featuring patient records, scheduling, and analytics.",
      tech: [
        { name: "Django", category: "backend" as const },
        { name: "Python", category: "language" as const },
        { name: "PostgreSQL", category: "database" as const },
        { name: "Bootstrap", category: "frontend" as const },
        { name: "Docker", category: "deployment" as const },
        { name: "AWS", category: "deployment" as const },
      ],
      challenges: [
        "Implemented HIPAA-compliant data storage and access controls",
        "Designed a complex relational database schema for medical records",
        "Created an intuitive UI for healthcare practitioners with varying technical skills",
      ],
      image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=1476&auto=format&fit=crop",
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
    },
  ];

  return (
    <section id="projects" className="section-padding bg-secondary">
      <div className="container-width">
        <AnimatedSection animation="fade-in">
          <span className="inline-block px-3 py-1 text-xs font-medium tracking-wider uppercase bg-white rounded-full mb-4">
            Projects
          </span>
          <h2 className="heading-lg mb-12">Featured Work</h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <AnimatedSection 
              key={project.title} 
              animation="slide-in-bottom" 
              delay={300 * index}
            >
              <ProjectCard {...project} />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
