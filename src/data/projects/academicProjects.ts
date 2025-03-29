
import { Project } from './types';

export const academicProjects: Project[] = [
  {
    title: "Calculator App (C# & WPF)",
    description: "A calculator application built with C# and displayed using Windows Presentation Foundation (WPF). This project was completed for a .NET/C# class.",
    tech: [
      { name: "C#", category: "language" },
      { name: "WPF", category: "frontend" },
      { name: ".NET", category: "backend" },
    ],
    challenges: [
      "Created a responsive calculator interface using WPF controls",
      "Implemented mathematical operations with proper order of operations",
      "Designed a user-friendly layout with keyboard shortcuts",
    ],
    images: [
      "https://images.unsplash.com/photo-1587145820266-a5951ee6f620?q=80&w=1740&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1594980596870-8aa52a78d8cd?q=80&w=1470&auto=format&fit=crop"
    ],
    image: "https://images.unsplash.com/photo-1587145820266-a5951ee6f620?q=80&w=1740&auto=format&fit=crop",
    githubUrl: "https://github.com",
  },
  {
    title: "Library Management System",
    description: "A comprehensive library management system for storing book records, tracking librarians and patrons, and recording book transactions. Utilizes MySQL for the database and Python for the backend.",
    tech: [
      { name: "Python", category: "language" },
      { name: "MySQL", category: "database" },
      { name: "SQL", category: "language" },
    ],
    challenges: [
      "Designed a normalized database schema for efficient data storage and retrieval",
      "Implemented Python backend to handle complex SQL queries",
      "Created user-friendly interfaces for different roles (librarians, patrons)",
      "Developed a transaction system for tracking book checkouts and returns",
    ],
    images: [
      "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?q=80&w=1528&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=1528&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1583468982228-19f19271fdd3?q=80&w=1470&auto=format&fit=crop"
    ],
    image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?q=80&w=1528&auto=format&fit=crop",
    githubUrl: "https://github.com",
  },
  {
    title: "Advanced Priority Queue Management in C",
    description: "An advanced implementation of a Priority Queue in C, showcasing skills in creating efficient, scalable data structures.",
    tech: [
      { name: "C", category: "language" },
      { name: "Data Structures", category: "language" },
      { name: "Algorithms", category: "language" },
    ],
    challenges: [
      "Implemented priority-based insertion and extraction with optimal time complexity",
      "Designed dynamic resizing capabilities to handle varying workloads",
      "Optimized memory allocation and deallocation to prevent memory leaks",
    ],
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=1470&auto=format&fit=crop",
    githubUrl: "https://github.com",
  },
  {
    title: "Optimized Binary Search Tree Implementation in C",
    description: "A robust implementation of a Binary Search Tree (BST) in C, highlighting expertise in efficient data structures.",
    tech: [
      { name: "C", category: "language" },
      { name: "Data Structures", category: "language" },
      { name: "Algorithms", category: "language" },
    ],
    challenges: [
      "Developed efficient node insertion and deletion algorithms",
      "Implemented balanced tree operations to maintain optimal search performance",
      "Created comprehensive traversal methods for different use cases",
    ],
    image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1469&auto=format&fit=crop",
    githubUrl: "https://github.com",
  },
  {
    title: "Efficient Linked List Operations in C",
    description: "A range of advanced linked list operations in C, showcasing deep understanding of data structures and pointer manipulation.",
    tech: [
      { name: "C", category: "language" },
      { name: "Data Structures", category: "language" },
      { name: "Memory Management", category: "language" },
    ],
    challenges: [
      "Implemented various linked list operations with optimal time complexity",
      "Designed memory-efficient node structures to minimize resource usage",
      "Created robust error handling for edge cases in list manipulation",
    ],
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1470&auto=format&fit=crop",
    githubUrl: "https://github.com",
  },
  {
    title: "Advanced String Utility Toolkit in C",
    description: "A suite of string utility functions in C, demonstrating proficiency in low-level programming and string manipulation.",
    tech: [
      { name: "C", category: "language" },
      { name: "String Processing", category: "language" },
      { name: "Memory Management", category: "language" },
    ],
    challenges: [
      "Developed memory-safe string duplication and concatenation functions",
      "Implemented efficient case-insensitive comparison algorithms",
      "Created robust tokenization utilities for complex string parsing",
    ],
    image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=1470&auto=format&fit=crop",
    githubUrl: "https://github.com",
  },
  {
    title: "Weather Dashboard",
    description: "A weather application that displays current conditions and forecasts for multiple locations.",
    tech: [
      { name: "JavaScript", category: "language" },
      { name: "HTML/CSS", category: "frontend" },
      { name: "OpenWeather API", category: "backend" },
    ],
    challenges: [
      "Integrated multiple weather APIs to ensure data accuracy",
      "Implemented geolocation features for automatic weather detection",
      "Created a responsive design with interactive weather maps",
    ],
    image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?q=80&w=1470&auto=format&fit=crop",
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
  },
  {
    title: "Task Management System",
    description: "A collaborative task management application with real-time updates and team features.",
    tech: [
      { name: "Vue.js", category: "frontend" },
      { name: "Firebase", category: "database" },
      { name: "Tailwind CSS", category: "frontend" },
    ],
    challenges: [
      "Implemented real-time updates using Firebase Firestore",
      "Created a drag-and-drop interface for task prioritization",
      "Built comprehensive team permission system",
    ],
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=1472&auto=format&fit=crop",
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
  },
  {
    title: "Algorithm Visualization Tool",
    description: "An educational web application that visually demonstrates common sorting and searching algorithms.",
    tech: [
      { name: "React", category: "frontend" },
      { name: "D3.js", category: "frontend" },
      { name: "TypeScript", category: "language" },
    ],
    challenges: [
      "Created smooth animations to visualize algorithm execution steps",
      "Implemented speed controls for algorithm demonstrations",
      "Designed an intuitive UI for educational purposes",
    ],
    image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?q=80&w=1421&auto=format&fit=crop",
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
  },
];
