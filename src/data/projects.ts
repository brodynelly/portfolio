
export interface TechItem {
  name: string;
  category: "frontend" | "backend" | "database" | "deployment" | "language";
}

export interface Project {
  title: string;
  description: string;
  tech: TechItem[];
  challenges: string[];
  image: string;
  githubUrl: string;
  liveUrl?: string;
}

export interface ProjectWithClass extends Project {
  classId?: string;
}

export const projects: Project[] = [
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

// Extended project data with class information
export const projectsWithClassInfo: ProjectWithClass[] = [
  {
    ...projects[0],
    classId: "cs4320",
  },
  {
    ...projects[1],
    classId: "cs3050",
  },
  {
    ...projects[2],
    classId: "cs3380",
  },
  {
    title: "E-Commerce Platform",
    description: "A full-featured online store with product management, cart functionality, and payment processing.",
    tech: [
      { name: "React", category: "frontend" as const },
      { name: "Node.js", category: "backend" as const },
      { name: "Express.js", category: "backend" as const },
      { name: "MongoDB", category: "database" as const },
      { name: "Stripe", category: "backend" as const },
    ],
    challenges: [
      "Implemented secure payment processing with Stripe",
      "Created a responsive design that works across all devices",
      "Built a custom CMS for product management",
    ],
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1470&auto=format&fit=crop",
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    classId: "personal",
  },
  {
    title: "Weather Dashboard",
    description: "A weather application that displays current conditions and forecasts for multiple locations.",
    tech: [
      { name: "JavaScript", category: "language" as const },
      { name: "HTML/CSS", category: "frontend" as const },
      { name: "OpenWeather API", category: "backend" as const },
    ],
    challenges: [
      "Integrated multiple weather APIs to ensure data accuracy",
      "Implemented geolocation features for automatic weather detection",
      "Created a responsive design with interactive weather maps",
    ],
    image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?q=80&w=1470&auto=format&fit=crop",
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    classId: "cs4830",
  },
  {
    title: "Task Management System",
    description: "A collaborative task management application with real-time updates and team features.",
    tech: [
      { name: "Vue.js", category: "frontend" as const },
      { name: "Firebase", category: "database" as const },
      { name: "Tailwind CSS", category: "frontend" as const },
    ],
    challenges: [
      "Implemented real-time updates using Firebase Firestore",
      "Created a drag-and-drop interface for task prioritization",
      "Built comprehensive team permission system",
    ],
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=1472&auto=format&fit=crop",
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    classId: "cs4830",
  },
  {
    title: "Algorithm Visualization Tool",
    description: "An educational web application that visually demonstrates common sorting and searching algorithms.",
    tech: [
      { name: "React", category: "frontend" as const },
      { name: "D3.js", category: "frontend" as const },
      { name: "TypeScript", category: "language" as const },
    ],
    challenges: [
      "Created smooth animations to visualize algorithm execution steps",
      "Implemented speed controls for algorithm demonstrations",
      "Designed an intuitive UI for educational purposes",
    ],
    image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?q=80&w=1421&auto=format&fit=crop",
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    classId: "cs3050",
  },
];
