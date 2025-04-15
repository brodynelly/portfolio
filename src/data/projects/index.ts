
import { Project, ProjectWithClass } from './types';
import { personalProjects } from './personalProjects';
import { healthcareProjects } from './healthcareProjects';
import { academicProjects } from './academicProjects';

// Combine all projects
export const projects: Project[] = [
  // ...healthcareProjects,
  ...personalProjects.slice(0, 3),  // Take only the first 3 personal projects for the main list
  ...academicProjects.slice(0, 3),   // Take only the first 3 academic projects for the main list
];

// Create mapped projects with class info
export const projectsWithClassInfo: ProjectWithClass[] = [
  // Healthcare project
  // { ...healthcareProjects[0], classId: "cs3380" },
  
  // Personal projects
  ...personalProjects.map(project => ({ ...project, classId: "personal" })),
  
  // Academic projects with specific class IDs
  { ...academicProjects[0], classId: "cs4320" },  // Calculator
  { ...academicProjects[1], classId: "cs3380" },  // Library Management
  
  // Algorithm courses projects
  { ...academicProjects[2], classId: "cs3050" },  // Priority Queue
  { ...academicProjects[3], classId: "cs3050" },  // BST
  { ...academicProjects[4], classId: "cs3050" },  // Linked List
  { ...academicProjects[5], classId: "cs3050" },  // String Toolkit
  
  // Web development courses
  { ...academicProjects[6], classId: "cs4830" },  // Weather Dashboard
  { ...academicProjects[7], classId: "cs4830" },  // Task Management
  { ...academicProjects[8], classId: "cs3050" },  // Algorithm Visualization
];

// Export types
export type { Project, ProjectWithClass, TechItem } from './types';
