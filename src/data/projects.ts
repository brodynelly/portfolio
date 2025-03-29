
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
    title: "iCARE Health Management System",
    description: "A comprehensive healthcare management system designed to streamline patient records, appointments, and staff workflows with an emphasis on security and user experience.",
    tech: [
      { name: "Django", category: "backend" as const },
      { name: "Python", category: "language" as const },
      { name: "Docker", category: "deployment" as const },
      { name: "Bootstrap", category: "frontend" as const },
      { name: "CSS", category: "frontend" as const },
    ],
    challenges: [
      "Implemented secure authentication and authorization for sensitive patient data",
      "Designed an intuitive appointment scheduling system with conflict resolution",
      "Created a containerized deployment workflow for easy scaling and maintenance",
    ],
    image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=1476&auto=format&fit=crop",
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
  },
  {
    title: "Journaling Application",
    description: "A personal project to help users maintain and organize their daily journal entries with secure and efficient storage using MongoDB.",
    tech: [
      { name: "MongoDB", category: "database" as const },
      { name: "Express.js", category: "backend" as const },
      { name: "Node.js", category: "backend" as const },
      { name: "JavaScript", category: "language" as const },
      { name: "CSS", category: "frontend" as const },
    ],
    challenges: [
      "Designed flexible document schemas to accommodate various journal entry formats",
      "Implemented secure user authentication to protect private journal content",
      "Created an intuitive UI for efficient journal entry management",
    ],
    image: "https://images.unsplash.com/photo-1517842645767-c639042777db?q=80&w=1470&auto=format&fit=crop",
    githubUrl: "https://github.com",
    liveUrl: "https://www.youtube.com",
  },
  {
    title: "Article Translator",
    description: "A website for learning Spanish by reading and translating articles using Google Translate API, featuring priority-driven selection and text-to-speech functionality.",
    tech: [
      { name: "React", category: "frontend" as const },
      { name: "Node.js", category: "backend" as const },
      { name: "HTML/CSS", category: "frontend" as const },
      { name: "Google Translate API", category: "backend" as const },
      { name: "npm", category: "deployment" as const },
    ],
    challenges: [
      "Integrated Google Translate API for accurate and contextual translations",
      "Implemented text-to-speech functionality for pronunciation assistance",
      "Created a responsive design that works seamlessly across devices",
    ],
    image: "https://images.unsplash.com/photo-1523731407965-2430cd12f5e4?q=80&w=1470&auto=format&fit=crop",
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
  },
];

// Extended project data with class information
export const projectsWithClassInfo: ProjectWithClass[] = [
  {
    ...projects[0],
    classId: "cs3380",
  },
  {
    ...projects[1],
    classId: "personal",
  },
  {
    ...projects[2],
    classId: "personal",
  },
  {
    title: "Advanced Priority Queue Management in C",
    description: "An advanced implementation of a Priority Queue in C, showcasing skills in creating efficient, scalable data structures.",
    tech: [
      { name: "C", category: "language" as const },
      { name: "Data Structures", category: "language" as const },
      { name: "Algorithms", category: "language" as const },
    ],
    challenges: [
      "Implemented priority-based insertion and extraction with optimal time complexity",
      "Designed dynamic resizing capabilities to handle varying workloads",
      "Optimized memory allocation and deallocation to prevent memory leaks",
    ],
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=1470&auto=format&fit=crop",
    githubUrl: "https://github.com",
    classId: "cs3050",
  },
  {
    title: "Optimized Binary Search Tree Implementation in C",
    description: "A robust implementation of a Binary Search Tree (BST) in C, highlighting expertise in efficient data structures.",
    tech: [
      { name: "C", category: "language" as const },
      { name: "Data Structures", category: "language" as const },
      { name: "Algorithms", category: "language" as const },
    ],
    challenges: [
      "Developed efficient node insertion and deletion algorithms",
      "Implemented balanced tree operations to maintain optimal search performance",
      "Created comprehensive traversal methods for different use cases",
    ],
    image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1469&auto=format&fit=crop",
    githubUrl: "https://github.com",
    classId: "cs3050",
  },
  {
    title: "Efficient Linked List Operations in C",
    description: "A range of advanced linked list operations in C, showcasing deep understanding of data structures and pointer manipulation.",
    tech: [
      { name: "C", category: "language" as const },
      { name: "Data Structures", category: "language" as const },
      { name: "Memory Management", category: "language" as const },
    ],
    challenges: [
      "Implemented various linked list operations with optimal time complexity",
      "Designed memory-efficient node structures to minimize resource usage",
      "Created robust error handling for edge cases in list manipulation",
    ],
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1470&auto=format&fit=crop",
    githubUrl: "https://github.com",
    classId: "cs3050",
  },
  {
    title: "Advanced String Utility Toolkit in C",
    description: "A suite of string utility functions in C, demonstrating proficiency in low-level programming and string manipulation.",
    tech: [
      { name: "C", category: "language" as const },
      { name: "String Processing", category: "language" as const },
      { name: "Memory Management", category: "language" as const },
    ],
    challenges: [
      "Developed memory-safe string duplication and concatenation functions",
      "Implemented efficient case-insensitive comparison algorithms",
      "Created robust tokenization utilities for complex string parsing",
    ],
    image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=1470&auto=format&fit=crop",
    githubUrl: "https://github.com",
    classId: "cs3050",
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

