
import { Project } from './types';

export const personalProjects: Project[] = [
  {
    title: "Journaling Application",
    description: "A personal project to help users maintain and organize their daily journal entries with secure and efficient storage using MongoDB.",
    tech: [
      { name: "MongoDB", category: "database" },
      { name: "Express.js", category: "backend" },
      { name: "Node.js", category: "backend" },
      { name: "JavaScript", category: "language" },
      { name: "CSS", category: "frontend" },
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
      { name: "React", category: "frontend" },
      { name: "Node.js", category: "backend" },
      { name: "HTML/CSS", category: "frontend" },
      { name: "Google Translate API", category: "backend" },
      { name: "npm", category: "deployment" },
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
  {
    title: "Web Journaling Application Concept",
    description: "A mock-up design for a daily journaling application with drawable entries for iPad pencil. This concept explores layout design and UI decisions for a guided journaling app.",
    tech: [
      { name: "React", category: "frontend" },
      { name: "JavaScript", category: "language" },
      { name: "CSS", category: "frontend" },
      { name: "Netlify", category: "deployment" },
    ],
    challenges: [
      "Designed an intuitive interface for digital journaling with Apple Pencil support",
      "Created a guided journaling experience to help users build a consistent routine",
      "Implemented drawable entry capabilities that mimic writing on paper",
    ],
    images: [
      "https://images.unsplash.com/photo-1517842645767-c639042777db?q=80&w=1470&auto=format&fit=crop", 
      "https://images.unsplash.com/photo-1517842536804-bf6629e2c291?q=80&w=1470&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1544164559-2e84642d931c?q=80&w=1470&auto=format&fit=crop"
    ],
    image: "https://images.unsplash.com/photo-1517842645767-c639042777db?q=80&w=1470&auto=format&fit=crop",
    githubUrl: "https://github.com",
    liveUrl: "https://marvelous-kelpie-866eb4.netlify.app/",
  },
  {
    title: "ThreeJS Graphics Demonstration",
    description: "A graphical demonstration using ThreeJS to visualize 3D graphics in JavaScript. This project was created to learn and explore ThreeJS capabilities.",
    tech: [
      { name: "ThreeJS", category: "frontend" },
      { name: "JavaScript", category: "language" },
      { name: "HTML5", category: "frontend" },
      { name: "CSS", category: "frontend" },
    ],
    challenges: [
      "Implemented 3D rendering with ThreeJS for interactive graphics",
      "Created optimized models and scenes for web-based 3D visualization",
      "Built responsive controls for camera manipulation and object interaction",
    ],
    images: [
      "https://images.unsplash.com/photo-1544164559-2e84642d931c?q=80&w=1470&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1623946724421-364fd73e811b?q=80&w=1470&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1541752177894-e6dae16ad3e6?q=80&w=1348&auto=format&fit=crop"
    ],
    image: "https://images.unsplash.com/photo-1544164559-2e84642d931c?q=80&w=1470&auto=format&fit=crop",
    githubUrl: "https://github.com",
    liveUrl: "https://stalwart-kelpie-24b105.netlify.app/",
  },
  {
    title: "E-Commerce Platform",
    description: "A full-featured online store with product management, cart functionality, and payment processing.",
    tech: [
      { name: "React", category: "frontend" },
      { name: "Node.js", category: "backend" },
      { name: "Express.js", category: "backend" },
      { name: "MongoDB", category: "database" },
      { name: "Stripe", category: "backend" },
    ],
    challenges: [
      "Implemented secure payment processing with Stripe",
      "Created a responsive design that works across all devices",
      "Built a custom CMS for product management",
    ],
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1470&auto=format&fit=crop",
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
  },
];
