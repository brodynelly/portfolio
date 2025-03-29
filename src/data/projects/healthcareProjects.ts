
import { Project } from './types';

export const healthcareProjects: Project[] = [
  {
    title: "iCARE Health Management System",
    description: "A comprehensive healthcare management system designed to streamline patient records, appointments, and staff workflows with an emphasis on security and user experience.",
    tech: [
      { name: "Django", category: "backend" },
      { name: "Python", category: "language" },
      { name: "Docker", category: "deployment" },
      { name: "Bootstrap", category: "frontend" },
      { name: "CSS", category: "frontend" },
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
];
