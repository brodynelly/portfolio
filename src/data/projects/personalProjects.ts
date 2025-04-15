
import { Project } from './types';

export const personalProjects: Project[] = [
  {
    title: "Journaling Application",
    description: "A personal project to help users maintain and organize their daily journal entries with secure and efficient storage using MongoDB.",
    tech: [
      { name: "React", category: "frontend" },
      { name: "TypeScript", category: "language" },
      { name: "Tailwind CSS", category: "frontend" },
      { name: "Vite", category: "deployment" },
      { name: "Supabase", category: "database" },
      { name: "Lucide Icons", category: "frontend" }, 
    ],
    challenges: [
      "Implemented a responsive, iOS-style interface with smooth animations and transitions",
      "Created a flexible handwriting canvas with pressure sensitivity and tool selection",
      "Built an intelligent prompt system for daily writing inspiration",
      "Developed a comprehensive mood tracking system with visual feedback",
      "Integrated multimedia support for images, voice notes, and handwritten content",
      "Designed an intuitive timeline view for journal entries with rich metadata"
    ],
    images: [
      "https://sdmntprwestus.oaiusercontent.com/files/00000000-4b38-6230-96fe-258b438beb8a/raw?se=2025-04-14T21%3A05%3A33Z&sp=r&sv=2024-08-04&sr=b&scid=f5ed274c-e76d-5e98-b66a-3f27308e2752&skoid=51916beb-8d6a-49b8-8b29-ca48ed86557e&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-04-14T11%3A52%3A14Z&ske=2025-04-15T11%3A52%3A14Z&sks=b&skv=2024-08-04&sig=tWt7xI1miekis3biFOh4TpXz0jdUu46QFtBsrEyuLUY%3D", 
      "https://private-user-images.githubusercontent.com/127979848/427188707-aacea867-a493-4fbd-b876-1e81d7732b3f.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDQ2NjExNDUsIm5iZiI6MTc0NDY2MDg0NSwicGF0aCI6Ii8xMjc5Nzk4NDgvNDI3MTg4NzA3LWFhY2VhODY3LWE0OTMtNGZiZC1iODc2LTFlODFkNzczMmIzZi5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwNDE0JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDQxNFQyMDAwNDVaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT0zNjZkMGQwODBkY2EyYTUwZmFkZTIzNzdlNGQ1OWM0NjhjMDU3YzAwNjViMjZhYThkYjQzOWI2ZjdjODMzYWY5JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.T09u0THj99UBcjGpdi8McXtaALmASZJkY62m6VrZpZE",
      "https://private-user-images.githubusercontent.com/127979848/427188853-aadcc4e3-45ca-4edc-9f45-f5e7e824e797.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDQ2NjExNDUsIm5iZiI6MTc0NDY2MDg0NSwicGF0aCI6Ii8xMjc5Nzk4NDgvNDI3MTg4ODUzLWFhZGNjNGUzLTQ1Y2EtNGVkYy05ZjQ1LWY1ZTdlODI0ZTc5Ny5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwNDE0JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDQxNFQyMDAwNDVaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT00N2EyMzQwNjdlYTI3NzI2MWY3ZGM3NTkwNDVmN2E0NDIwZmEzZjU0OTQyMDhkYmQ2ZGViNjk3YTdkMTExYzNmJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.u5kz1qSwnqrCutvKCMBa2HZIrc01nEx5_bH4GO3qkRo", 
      "https://private-user-images.githubusercontent.com/127979848/427188980-67c3b4cf-c432-4845-8118-fb4fc54c1d29.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDQ2NjExNDUsIm5iZiI6MTc0NDY2MDg0NSwicGF0aCI6Ii8xMjc5Nzk4NDgvNDI3MTg4OTgwLTY3YzNiNGNmLWM0MzItNDg0NS04MTE4LWZiNGZjNTRjMWQyOS5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwNDE0JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDQxNFQyMDAwNDVaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT0zMTU0NTBiMjg4ZmFkYWMxMzRmY2JiZTRhZjQ3YjczNDQxNWU2YjUzZTcxODExNGJlYmQ1ZTc0ZDk5NzQ5ZmFkJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.0b9guxSASbIhxtf4hd14Y1xHIguFTX3wPYnonWTzm00", 
      "https://private-user-images.githubusercontent.com/127979848/427189142-1b0c646b-479e-4f25-b3e3-36bcb7eb24f6.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDQ2NjExNDUsIm5iZiI6MTc0NDY2MDg0NSwicGF0aCI6Ii8xMjc5Nzk4NDgvNDI3MTg5MTQyLTFiMGM2NDZiLTQ3OWUtNGYyNS1iM2UzLTM2YmNiN2ViMjRmNi5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwNDE0JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDQxNFQyMDAwNDVaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT0xMWNiYTU0MmFhNWY3NmJiMzg4ZmRmOWY5NTI2NGY5Mjg1YjZkODY1ODllMzcxMjc1Mjg4ZWZiZjk4ZmRiY2IxJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.NoO-ewlHXivvLnpqjhK1uY1k9hqzsjvOmlvenwYrIhs", 
      "https://private-user-images.githubusercontent.com/127979848/427189387-8971540b-1547-497c-8495-36f90142d60b.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDQ2NjExNDUsIm5iZiI6MTc0NDY2MDg0NSwicGF0aCI6Ii8xMjc5Nzk4NDgvNDI3MTg5Mzg3LTg5NzE1NDBiLTE1NDctNDk3Yy04NDk1LTM2ZjkwMTQyZDYwYi5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwNDE0JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDQxNFQyMDAwNDVaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1hMDgyZjhiYzc1YWU1OTlhMGIzMTBiYzM0ZGFhNmY1ZDIxZTIyNjA5NWU1ZTNhZTZkMjBiMzBkMTc5ZWMzODExJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.g4QWFItBbWZL4-cHRIQWoroHl844NJxnRBrZpq9VEvk",
    ],
    image: "https://images.unsplash.com/photo-1517842645767-c639042777db?q=80&w=1470&auto=format&fit=crop",
    githubUrl: "https://github.com/brodynelly/Web-Journaling-Application-",
    liveUrl: " https://marvelous-kelpie-866eb4.netlify.app/",
    documentation: [
      {
        title: "Overview",
        content: `# Modern Journaling Application
  
  This application provides a premium journaling experience inspired by Apple's iOS Journal app, combining beautiful design with powerful features.
  
  # Key Features
  
  - **Rich Entry Creation**: Support for text, handwriting, images, and voice notes
  - **Intelligent Prompts**: Daily writing suggestions to inspire reflection
  - **Mood Tracking**: Visual mood tracking with emoji and color indicators
  - **Timeline View**: Chronological organization of entries with metadata
  - **Handwriting Support**: Canvas-based handwriting with pressure sensitivity
  - **Location Tagging**: Add location context to your entries
  - **Activity Tracking**: Record activities and steps associated with entries
  - **End-to-End Encryption**: Secure storage of all journal content`
      },
      {
        title: "Architecture",
        content: `#System Architecture \n\n  ## Frontend \n\n Built with React and TypeScript, utilizing modern web technologies:
  
  - Vite for fast development and optimized builds
  - Tailwind CSS for responsive styling
  - Canvas API for handwriting support
  - Web Audio API for voice recording
  - Service Workers for offline capability
  
  ## Database
  Supabase provides a secure and scalable backend:
  
  \`\`\`typescript
  // Example Entry Type
  interface Entry {
    id: string;
    title: string;
    content: string;
    date: Date;
    mood: string;
    images: string[];
    tags: string[];
    audioUrl?: string;
    handwritingData?: string;
    location?: string;
    activity?: {
      type: string;
      duration?: number;
      steps?: number;
      icon: string;
    };
    music?: {
      track: string;
      artist: string;
      icon: string;
    };
  }
  \`\`\``
      },
      {
        title: "Implementation",
        content: `## Implementation Details
  
  ### Handwriting Support
  The application implements a sophisticated handwriting system:
  
  \`\`\`typescript
  const HandwritingCanvas: React.FC<HandwritingCanvasProps> = ({ onSave, initialData }) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [isDrawing, setIsDrawing] = useState(false);
    const [tool, setTool] = useState<'pen' | 'eraser'>('pen');
    const [color, setColor] = useState('#000000');
    const [lineWidth, setLineWidth] = useState(2);
  
    // Canvas initialization and drawing logic
    useEffect(() => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      
      const ctx = canvas.getContext('2d');
      if (!ctx) return;
      
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';
      ctx.strokeStyle = color;
      ctx.lineWidth = lineWidth;
    }, [color, lineWidth]);
  };
  \`\`\`
  
  ### Mood Tracking
  Comprehensive mood tracking with visual feedback:
  
  \`\`\`typescript
  function getMoodColor(mood: string): string {
    switch (mood.toLowerCase()) {
      case 'happy': return 'bg-yellow-400';
      case 'peaceful': return 'bg-blue-400';
      case 'thoughtful': return 'bg-purple-400';
      case 'neutral': return 'bg-gray-400';
      case 'sad': return 'bg-blue-300';
      case 'anxious': return 'bg-orange-400';
      default: return 'bg-gray-400';
    }
  }`
      },
      {
        title: "User Guide",
        content: `## User Guide
  
  ### Getting Started
  
  1. **Welcome Screen**: Introduction to key features
  2. **Timeline View**: Chronological display of journal entries
  3. **New Entry**: Multiple ways to capture your thoughts
     - Text entry with formatting
     - Handwriting with pressure sensitivity
     - Voice notes
     - Image attachments
     - Location tagging
     - Mood selection
  
  ### Writing Features
  
  - **Daily Prompts**: Intelligent suggestions for writing topics
  - **Rich Media**: Support for images, audio, and handwriting
  - **Mood Tracking**: Visual mood selection with emoji
  - **Tags**: Organize entries with custom tags
  - **Location**: Add location context to entries
  
  ### Privacy & Security
  
  - End-to-end encryption for all entries
  - Biometric authentication support
  - Private by default with no sharing features
  - Secure cloud backup with Supabase`
      }
    ]
  }, 
  {
    title: "iCARE Health Management Systems",
    description: "A comprehensive healthcare management system built with Django that streamlines patient care, document management, and healthcare provider workflows. Features role-based access control, customizable medical documents, and PDF generation capabilities.",
    tech: [
      { name: "Django", category: "backend" },
      { name: "PostGresSQL", category: "database" },
      { name: "Bootstrap", category: "frontend" },
      { name: "Docker", category: "deployment" },
      { name: "jQuery", category: "frontend" },
    ],
    challenges: [
      "Implemented complex role-based access control for doctors, nurses, and administrators",
      "Developed a flexible document system with customizable fields and PDF generation",
      "Created a geocode-based organization system for patient and provider management",
      "Integrated multiple Django apps for modular functionality while maintaining data consistency", 
    ],
images: [
      "https://private-user-images.githubusercontent.com/127979848/433532753-3e47f786-4a8e-4b22-8a82-9ca337fad865.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDQ2NjA2MDksIm5iZiI6MTc0NDY2MDMwOSwicGF0aCI6Ii8xMjc5Nzk4NDgvNDMzNTMyNzUzLTNlNDdmNzg2LTRhOGUtNGIyMi04YTgyLTljYTMzN2ZhZDg2NS5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwNDE0JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDQxNFQxOTUxNDlaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1mNGU5NTFmNGI1YmQ0MTZlNGMzNTI0ZWJhYWEwOGZlZGQ0ODZlZWE1YTQzZjM4YmRlODZkMGJlMzZlMTc5OWIyJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.57ej8OFd4NhiXrC-lpuxTfbbhXeRznlO3EK-9ZeSRMg",
      "https://private-user-images.githubusercontent.com/127979848/433514158-06b74985-378c-4dd2-8515-770670809478.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDQ2NTkyNDMsIm5iZiI6MTc0NDY1ODk0MywicGF0aCI6Ii8xMjc5Nzk4NDgvNDMzNTE0MTU4LTA2Yjc0OTg1LTM3OGMtNGRkMi04NTE1LTc3MDY3MDgwOTQ3OC5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwNDE0JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDQxNFQxOTI5MDNaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT0xMmFiMmRkNTZlZjU4NjRkMjA4MzlkODEzYWUyNzIyOWE2MjYwOGViN2RjNTZhYjI2NTYxOWU1MjcwMWM5ODEzJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.e8vzYQNOw3n4PENpyBCWiSbmKyqoVViBtn5JateSyVM",
      "https://private-user-images.githubusercontent.com/127979848/433514499-468f9897-7297-42f1-be9a-0ed71b471509.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDQ2NTkyNDMsIm5iZiI6MTc0NDY1ODk0MywicGF0aCI6Ii8xMjc5Nzk4NDgvNDMzNTE0NDk5LTQ2OGY5ODk3LTcyOTctNDJmMS1iZTlhLTBlZDcxYjQ3MTUwOS5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwNDE0JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDQxNFQxOTI5MDNaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT0yZTkxM2YxNzEwY2EyNzQ3M2E2ZWIxNWM5NGQwYmRmMjk2ZDgxNTJmODk1NzJiYTFhOWU5ZTgxYTE3MDFmYTNmJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.2lY4gdsxRwGw-l3mA1XOuH6bTGd8NFGF-j0fKbXF0uQ", 
      "https://private-user-images.githubusercontent.com/127979848/433514662-4f7696fd-9510-4fc5-93d3-190f70434e08.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDQ2NTkyNDMsIm5iZiI6MTc0NDY1ODk0MywicGF0aCI6Ii8xMjc5Nzk4NDgvNDMzNTE0NjYyLTRmNzY5NmZkLTk1MTAtNGZjNS05M2QzLTE5MGY3MDQzNGUwOC5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwNDE0JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDQxNFQxOTI5MDNaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT03ZDYyNmU3NzM2NThkNzNhMjBkMmM0ZjVlZWFkNmMwNjY4ZDI3MDVlMjA3MmZjNzQ3Y2QyODNhYzE0NGY3ZDdkJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.8AfmkTAcaiaZ8nXCCb8sD1HY6MHn4gVHYQvoN6kT9ao", 
      "https://private-user-images.githubusercontent.com/127979848/433514872-84e5d6c9-70d3-44fd-b6d8-2d48264a3e38.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDQ2NTkyNDMsIm5iZiI6MTc0NDY1ODk0MywicGF0aCI6Ii8xMjc5Nzk4NDgvNDMzNTE0ODcyLTg0ZTVkNmM5LTcwZDMtNDRmZC1iNmQ4LTJkNDgyNjRhM2UzOC5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwNDE0JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDQxNFQxOTI5MDNaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1lOWM1ZTkwMmQ1ZTc4ZGQyNzhiMzg1ZGM1MDM4ZTIzMjA2OTIyZDNjZTk1NDEwNjgyZTFhMzliNDQ4OGY1NmRkJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.dZn6lINRQB5Zz4PstU_EoPLjmJvRJExVnOevB8glsAE", 
      "https://private-user-images.githubusercontent.com/127979848/433515126-89691628-a70f-4d0f-b817-26ec13caaed1.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDQ2NTkyNDMsIm5iZiI6MTc0NDY1ODk0MywicGF0aCI6Ii8xMjc5Nzk4NDgvNDMzNTE1MTI2LTg5NjkxNjI4LWE3MGYtNGQwZi1iODE3LTI2ZWMxM2NhYWVkMS5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwNDE0JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDQxNFQxOTI5MDNaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT0zODhhNGM5MTgxN2NmMWY3YTljYTg4YjFmOThjY2JmNTY5ODkzZTRkYzk3MjY4ZTk1YjdmNjc4MzY2MTg0Y2E3JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.SrOXlvGe9vny_fpzW_K3n-8HvJ-mB6D1O8gz0hXXl_Y"
   
    ], 
    image: "https://sdmntpreastus2.oaiusercontent.com/files/00000000-bdf0-61f6-bd6a-72eaa06cad91/raw?se=2025-04-14T20%3A45%3A57Z&sp=r&sv=2024-08-04&sr=b&scid=1e42519b-139b-538a-98fb-7378ae1064c0&skoid=3f3a9132-9530-48ef-96b7-fee5a811733f&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-04-14T11%3A30%3A06Z&ske=2025-04-15T11%3A30%3A06Z&sks=b&skv=2024-08-04&sig=E%2BljvvrCUVD3ftVTJh492pOWDTz5nSQR7o%2BxUACQBTI%3D",

    githubUrl: "https://github.com/brodynelly/iCAREProject-Public",
    // liveUrl: "https://example.com",
    documentation: [
      {
        title: "Overview",
        content: "# iCARE System\n\niCARE is a healthcare management platform that provides a unified interface for patient care coordination. The system follows Django's MTV architecture pattern and uses Docker for consistent deployment.\n\n## Key Features\n\n- **User Role Management**: Separate interfaces for doctors, nurses, and administrators\n- **Patient Management**: Comprehensive patient profiles and provider assignments\n- **Document System**: Customizable medical document types with PDF generation\n- **Geocode Organization**: Location-based grouping of patients and providers\n- **Interactive Dashboards**: Role-specific views for patient management\n- **Drug Database**: Medication prescriptions with autocomplete functionality"
      },
      {
        title: "Architecture",
        content: "## System Architecture\n\n### Core Components\n- **accounts**: User authentication and profile management\n- **patients**: Patient data and provider assignment handling\n- **documents**: Document creation and PDF generation\n- **pages**: Static content and dashboard interfaces\n\n### Technology Stack\n- Django backend with MTV pattern\n- PostgreSQL database\n- Bootstrap 5 frontend\n- Docker containerization\n- Various Django extensions for enhanced functionality\n\n### Authentication Flow\n- Email-based authentication using django-allauth\n- Role-based access control\n- Session management and security features"
      },
      {
        title: "Implementation",
        content: "## Implementation Details\n\n### Document System\n- Flexible document type definitions\n- Custom field configurations\n- PDF generation using xhtml2pdf\n- Document ownership and access control\n\n### Patient Assignment\n- Maximum 3 nurses per patient\n- Single doctor assignment\n- Nurse requirement before doctor assignment\n- Geocode-based organization\n\n### Data Models\n- CustomUser model with role integration\n- Patient-Provider relationships\n- Document type and field definitions\n- Treatment record tracking"
      },
      {
        title: "User Guide",
        content: "## User Guide\n\n### Getting Started\n1. Access the system at localhost:8000\n2. Log in with role-specific credentials\n3. Navigate using the sidebar menu\n\n### Key Workflows\n- **Patient Management**: View and manage assigned patients\n- **Document Creation**: Create and edit medical documents\n- **PDF Generation**: Convert documents to PDF format\n- **Dashboard Usage**: Access role-specific views\n\n### User Roles\n- **Admin**: Full system management\n- **Doctor**: Patient care and document creation\n- **Nurse**: Patient care and documentation\n\n### Tips\n- Use the iCARE Board for location-based patient overview\n- Utilize document templates for consistent recording\n- Monitor assigned patients through My Board"
      }
    ]
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
    documentation: [
      {
        title: "Overview",
        content: "# Web Journaling Application Concept\n\nThis project presents a conceptual design for a digital journaling application specifically optimized for iPad with Apple Pencil support. It explores the intersection of traditional journaling practices and modern digital capabilities.\n\n## Key Features\n\n- **Drawable Entries**: Create journal entries using Apple Pencil with natural writing feel\n- **Guided Prompts**: Daily journaling prompts to inspire reflection and consistency\n- **Template Library**: Various page layouts for different journaling styles\n- **Handwriting Recognition**: Optional conversion of handwritten text to digital text\n- **Mixed Media Support**: Combine handwriting, typing, photos, and sketches\n- **Calendar Integration**: Track journaling streaks and build consistency"
      },
      {
        title: "Design Philosophy",
        content: "## Design Philosophy\n\n### User Experience Principles\n\nThe design of this journaling application is guided by several core principles:\n\n1. **Minimal Friction**: The interface should disappear, allowing users to focus on their thoughts\n2. **Natural Writing Experience**: Digital writing should feel as natural as pen on paper\n3. **Guided but Flexible**: Provide structure for those who need it, freedom for those who don't\n4. **Calm Aesthetics**: Visual design that promotes reflection and mindfulness\n\n### Design Inspirations\n\nThe visual and interaction design draws inspiration from:\n\n- Traditional paper journals and notebooks\n- Minimalist iOS applications\n- Mindfulness and meditation apps\n- Physical journaling tools and techniques\n\n### Color Palette\n\nThe application uses a carefully selected color palette:\n\n- Primary background: Soft off-white (#F8F7F4)\n- Accent colors: Muted earth tones\n- Text: Dark charcoal (#2A2A2A)\n- Highlights: Subtle pastels for categorization\n\nThis palette creates a calm, distraction-free environment that mimics high-quality paper while maintaining good readability and contrast."
      },
      {
        title: "UI Components",
        content: "## UI Components\n\n### Main Interface Elements\n\nThe application features several key interface components designed for optimal journaling experience:\n\n- **Drawing Canvas**: High-resolution canvas optimized for Apple Pencil input\n- **Tool Palette**: Minimalist set of drawing and writing tools\n- **Template Selector**: Quick access to different page layouts\n- **Navigation Bar**: Simple controls for moving between entries\n\n### Key Screens\n\n1. **Home Dashboard**:\n   - Calendar view showing journaling streak\n   - Quick access to today's entry\n   - Recent entries preview\n   - Daily prompt suggestion\n\n2. **Entry Editor**:\n   - Full-screen canvas for writing/drawing\n   - Minimal toolbar with essential tools\n   - Template selector\n   - Media insertion options\n\n3. **Template Gallery**:\n   - Various page layouts (blank, lined, dot grid, etc.)\n   - Guided prompt templates\n   - Mood tracking templates\n   - Goal setting frameworks\n\n4. **Settings**:\n   - Personalization options\n   - Backup and sync settings\n   - Notification preferences\n   - Handwriting recognition settings"
      },
      {
        title: "User Research",
        content: "## User Research\n\n### Target Audience\n\nThe application is designed primarily for:\n\n1. **Digital Journalers**: Users who already keep journals but want the flexibility of digital tools\n2. **iPad Owners**: Users who own an iPad and Apple Pencil and want to maximize their utility\n3. **Mindfulness Practitioners**: People who journal as part of mindfulness or mental health practices\n4. **Creative Writers**: Those who use journaling for creative expression and ideation\n\n### User Testing Insights\n\nPreliminary user testing revealed several key insights:\n\n- Users strongly prefer minimal UI that doesn't distract from the writing experience\n- The feeling of pen on screen is crucial - any latency or unnatural behavior breaks immersion\n- Many users want structure (prompts, templates) but don't want to feel constrained by it\n- Privacy features are essential, as journals often contain personal thoughts\n- The ability to mix media types (writing, typing, photos) in a single entry is highly valued\n\n### Persona: Maya, 34\n\n**Background**: Graphic designer who has kept paper journals for years but wants the convenience of digital\n\n**Goals**:\n- Maintain her journaling habit while reducing physical clutter\n- Have her journal accessible across devices\n- Preserve the creative, free-form nature of her paper journaling\n\n**Pain Points**:\n- Most digital journaling apps feel too rigid and text-focused\n- Wants to draw and sketch alongside writing\n- Needs an intuitive interface that doesn't require learning complex tools"
      },
      {
        title: "Future Directions",
        content: "## Future Directions\n\n### Planned Enhancements\n\n1. **AI-Powered Insights**:\n   - Analysis of journaling patterns and mood trends\n   - Personalized prompt suggestions based on previous entries\n   - Optional sentiment analysis to track emotional well-being\n\n2. **Advanced Media Integration**:\n   - Voice memo recording and transcription\n   - Video journal entries\n   - Location tagging and weather information\n\n3. **Collaboration Features**:\n   - Shared journals for partners or families\n   - Guided group journaling for teams or classes\n   - Private sharing of selected entries with trusted contacts\n\n4. **Extended Platform Support**:\n   - Native applications for iPhone and Mac\n   - Web-based viewer with limited editing capabilities\n   - Cross-device synchronization\n\n### Technical Roadmap\n\n**Phase 1: Core Experience**\n- Perfecting the drawing experience\n- Implementing basic templates and prompts\n- Building the calendar and streak tracking\n\n**Phase 2: Enhanced Functionality**\n- Adding handwriting recognition\n- Implementing search capabilities\n- Creating advanced templates and guides\n\n**Phase 3: Ecosystem Development**\n- Building cross-platform synchronization\n- Developing companion applications\n- Implementing AI-powered features\n\n**Phase 4: Community Features**\n- Adding optional sharing capabilities\n- Creating guided group journaling tools\n- Developing journaling challenges and programs"
      }
    ]
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
      "https://private-user-images.githubusercontent.com/127979848/433564426-90df8e67-0660-4c98-b995-f39477c5095e.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDQ2NjczNTAsIm5iZiI6MTc0NDY2NzA1MCwicGF0aCI6Ii8xMjc5Nzk4NDgvNDMzNTY0NDI2LTkwZGY4ZTY3LTA2NjAtNGM5OC1iOTk1LWYzOTQ3N2M1MDk1ZS5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwNDE0JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDQxNFQyMTQ0MTBaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT0wMjBkYWE2NzI3ZjAxMWFiM2ZhZWQwNGJlMmYwNTYxN2JlNWMyNjAyMDFiNzVhZmY2OTVmZGViNTFhNTUxM2FjJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.QZQwKNnwBKbKfm9qWype1Ly1NMEk4Z1uoL0_vrhxQyw",
      "https://images.unsplash.com/photo-1623946724421-364fd73e811b?q=80&w=1470&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1541752177894-e6dae16ad3e6?q=80&w=1348&auto=format&fit=crop"
    ],
    image: "https://private-user-images.githubusercontent.com/127979848/433564426-90df8e67-0660-4c98-b995-f39477c5095e.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDQ2NjczNTAsIm5iZiI6MTc0NDY2NzA1MCwicGF0aCI6Ii8xMjc5Nzk4NDgvNDMzNTY0NDI2LTkwZGY4ZTY3LTA2NjAtNGM5OC1iOTk1LWYzOTQ3N2M1MDk1ZS5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwNDE0JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDQxNFQyMTQ0MTBaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT0wMjBkYWE2NzI3ZjAxMWFiM2ZhZWQwNGJlMmYwNTYxN2JlNWMyNjAyMDFiNzVhZmY2OTVmZGViNTFhNTUxM2FjJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.QZQwKNnwBKbKfm9qWype1Ly1NMEk4Z1uoL0_vrhxQyw",
    githubUrl: "https://github.com",
    liveUrl: "https://stalwart-kelpie-24b105.netlify.app/",
    documentation: [
      {
        title: "Overview",
        content: "# ThreeJS Graphics Demonstration\n\nThis project showcases the capabilities of ThreeJS, a powerful JavaScript library for creating and displaying 3D computer graphics in web browsers. It serves as both a learning tool and a demonstration of what's possible with modern web-based 3D rendering.\n\n## Key Features\n\n- **Interactive 3D Models**: Manipulable objects with realistic lighting and textures\n- **Camera Controls**: Orbit, pan, and zoom functionality for exploring 3D scenes\n- **Physics Simulation**: Basic physics interactions between objects\n- **Particle Systems**: Dynamic particle effects for visual enhancement\n- **Responsive Design**: Adapts to different screen sizes while maintaining performance\n- **Custom Shaders**: Advanced visual effects using GLSL shader programming"
      },
      {
        title: "Technical Architecture",
        content: "## Technical Architecture\n\n### Core Components\n\n1. **Scene Setup**:\n   - Scene initialization and management\n   - Camera configuration (perspective and orthographic)\n   - Lighting setup (ambient, directional, point, and spot lights)\n   - Renderer configuration with WebGL\n\n2. **Asset Management**:\n   - 3D model loading and optimization\n   - Texture and material handling\n   - Custom geometry creation\n\n3. **Interaction Layer**:\n   - Mouse and touch controls\n   - Camera movement constraints\n   - Object selection and manipulation\n\n4. **Performance Optimization**:\n   - Level of detail (LOD) implementation\n   - Frustum culling\n   - Texture compression\n   - Shader optimization"
      },
      {
        title: "Implementation Details",
        content: "## Implementation Details\n\n### Custom Shader Implementation\n\nThe project uses custom GLSL shaders for advanced visual effects:\n\n- **Vertex Shaders**: Handle position calculations and pass data to fragment shaders\n- **Fragment Shaders**: Create visual effects like pulsing glow, color transitions, and texture manipulation\n- **Uniform Variables**: Pass time and other parameters to create dynamic animations\n\n### Physics Integration\n\nThe demonstration incorporates basic physics using the Cannon.js physics engine:\n\n- **World Setup**: Physics world with gravity and collision detection\n- **Rigid Bodies**: Physical representations of visual objects\n- **Constraints**: Connections between objects like hinges and springs\n- **Collision Detection**: Accurate interaction between objects\n\n### Particle System\n\nThe project features a dynamic particle system for visual effects:\n\n- **Particle Generation**: Thousands of small points with individual properties\n- **Movement Patterns**: Particles follow programmed behaviors and respond to forces\n- **Visual Effects**: Glow, trails, and color changes create atmospheric effects\n- **Performance Optimization**: Efficient handling of large numbers of particles"
      },
      {
        title: "Performance Optimization",
        content: "## Performance Optimization\n\n### Rendering Efficiency\n\nThe demonstration implements several techniques to maintain high performance:\n\n1. **Frustum Culling**:\n   Objects outside the camera's view are not rendered, reducing GPU load.\n\n2. **Level of Detail (LOD)**:\n   Models switch to simpler versions when far from the camera.\n\n3. **Instanced Rendering**:\n   For repeated objects, instanced rendering significantly reduces draw calls.\n\n4. **Texture Optimization**:\n   - Texture atlasing to reduce draw calls\n   - Mipmap generation for distance-appropriate textures\n   - Texture compression (DXT/ETC) for reduced memory usage\n\n5. **Post-processing Pipeline**:\n   Efficient post-processing using WebGL render targets and custom shaders."
      },
      {
        title: "User Interaction",
        content: "## User Interaction\n\n### Camera Controls\n\nThe demonstration provides intuitive camera controls for exploring the 3D scene:\n\n- **Orbit**: Click and drag to rotate the camera around the scene\n- **Pan**: Right-click and drag (or two-finger drag) to move the camera parallel to the view plane\n- **Zoom**: Mouse wheel or pinch gesture to zoom in and out\n- **Reset**: Double-click to return to the default camera position\n\n### Object Interaction\n\nUsers can interact with objects in the scene:\n\n1. **Selection**: Click on objects to select them\n2. **Transformation**: Drag handles to move, rotate, or scale selected objects\n3. **Properties**: Adjust material properties, physics behavior, and effects through the UI panel\n\n### UI Controls\n\nThe interface includes a control panel for adjusting scene parameters:\n\n- **Lighting**: Adjust light intensity, color, and position\n- **Effects**: Toggle post-processing effects like bloom, ambient occlusion, and depth of field\n- **Physics**: Modify gravity, friction, and restitution values\n- **Animation**: Control animation speed and transitions\n\n### Mobile Optimization\n\nThe controls are optimized for both desktop and mobile devices:\n\n- **Touch Controls**: Specialized handling for touch gestures\n- **Responsive UI**: Control panels that adapt to screen size\n- **Performance Scaling**: Automatic quality adjustments based on device capabilities\n- **Gesture Recognition**: Intuitive touch interactions for camera and object manipulation"
      }
    ]
  },
  {
    title: "Precision Automated Agricultural Lab Web application",
    description: "PAAL (Precision Agriculture and Animal Livestock) Monitoring System is a comprehensive web application designed for agricultural operations management. This system provides real-time monitoring, data analytics, and management tools for farms, barns, stalls, and livestock.",
    tech: [
      { name: "Next.js", category: "frontend" },
      { name: "Node.js", category: "backend" },
      { name: "Express.js", category: "backend" },
      { name: "MongoDB", category: "database" },
    ],
    challenges: [
      "Implemented a real-time monitoring system for farm operations",
      "Developed a user-friendly interface for livestock management",
      "Integrated data analytics for informed decision-making",
      "Ensured secure data handling and compliance with agricultural regulations",
    ],
    images: [
      "https://private-user-images.githubusercontent.com/127979848/433558697-da037532-0020-4eb0-9b76-4258d6ba896f.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDQ2NjU5NjEsIm5iZiI6MTc0NDY2NTY2MSwicGF0aCI6Ii8xMjc5Nzk4NDgvNDMzNTU4Njk3LWRhMDM3NTMyLTAwMjAtNGViMC05Yjc2LTQyNThkNmJhODk2Zi5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwNDE0JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDQxNFQyMTIxMDFaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1lYzVjMGZmNWE3MjBjMWIzMjhhOWNiZDgxZjU0MzEzMTE3NzI0OTM0M2YyY2MzNmFlZGNhZTE2YjM2ZWQwODA1JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.IBaq02t30OslpacnbTGguP0FDjqXaV2_kGjVKjAdy5U",
      "https://private-user-images.githubusercontent.com/127979848/433501752-e4a53ab5-0ae9-4c91-9c1c-99a66e07fc44.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDQ2NjU5NjEsIm5iZiI6MTc0NDY2NTY2MSwicGF0aCI6Ii8xMjc5Nzk4NDgvNDMzNTAxNzUyLWU0YTUzYWI1LTBhZTktNGM5MS05YzFjLTk5YTY2ZTA3ZmM0NC5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwNDE0JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDQxNFQyMTIxMDFaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT04MThiMmY2OGFiZDJmNjg2YTc2ZWFmNzljOTM5Njg0Y2I0MDAyZTc4MTI5Yjg4MWUzMmE3ZGQwM2Q1MmMwN2I5JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.z2Fu5JQoGYNl-s2QiJDbKjVjMI8b4GdXtBU-DZC0Aro", 
      "https://private-user-images.githubusercontent.com/127979848/433501938-9de3e31f-11f5-4f76-aa04-0e9f52bd9029.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDQ2NjU5NjEsIm5iZiI6MTc0NDY2NTY2MSwicGF0aCI6Ii8xMjc5Nzk4NDgvNDMzNTAxOTM4LTlkZTNlMzFmLTExZjUtNGY3Ni1hYTA0LTBlOWY1MmJkOTAyOS5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwNDE0JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDQxNFQyMTIxMDFaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1kYWRmOWY1Zjg2NDM1NzQ4NTg0ZjY3ZTM2Y2I1YTY1ODYzYmU3MjFmMjVjOTkzODIwNzUxMTJjODcyZGNiMmZkJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.ut1NQ-0-EhLGlsuQRCk5qWzOPwVGAN1Pq5ef0zueH6I", 
      "https://private-user-images.githubusercontent.com/127979848/433502130-d9c74fbe-a29b-4ed4-92e1-c1dc08e64d3d.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDQ2NjU5NjEsIm5iZiI6MTc0NDY2NTY2MSwicGF0aCI6Ii8xMjc5Nzk4NDgvNDMzNTAyMTMwLWQ5Yzc0ZmJlLWEyOWItNGVkNC05MmUxLWMxZGMwOGU2NGQzZC5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwNDE0JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDQxNFQyMTIxMDFaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1hZGUwNDIyMzdmZjYyOWI4NDcyZjhiMGNkNDEwZGIwZjZmNjNmM2RlNjgxZjUxNTliZDNjMDZiODY1MjNkN2Q3JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.Z_W96CeBmNNxSkIyEk7BJe5K1Nxa6WHr29CrFyqPUw0", 
      "https://private-user-images.githubusercontent.com/127979848/433502223-4d24e899-e9cc-4e2d-b6dd-a62c105df1f3.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDQ2NjU5NjEsIm5iZiI6MTc0NDY2NTY2MSwicGF0aCI6Ii8xMjc5Nzk4NDgvNDMzNTAyMjIzLTRkMjRlODk5LWU5Y2MtNGUyZC1iNmRkLWE2MmMxMDVkZjFmMy5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwNDE0JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDQxNFQyMTIxMDFaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT00MzJiMWI5ODBmNTJkNzY4ODIyYTMxNjQ5ZWI2MDI2ZDI1ODgxMTZkNGE1NmY4MTE0YTRmODIzYWZjM2UzNzZiJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.YEJx0cp5Ta9dn7LO7tGUqWF6EuVRabGsuUlZdA3_r1o", 
      "https://private-user-images.githubusercontent.com/127979848/433502375-f939b86f-8c17-410b-aa9c-c1e560a06817.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDQ2NjU5NjEsIm5iZiI6MTc0NDY2NTY2MSwicGF0aCI6Ii8xMjc5Nzk4NDgvNDMzNTAyMzc1LWY5MzliODZmLThjMTctNDEwYi1hYTljLWMxZTU2MGEwNjgxNy5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwNDE0JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDQxNFQyMTIxMDFaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1iNjQzMDYxOTQ1NWJhNzdlZmQ2NTdkY2QyOTJiNjY5OWZkNDkxZmMxNjgyZDI0MjZhNjgxOGVmNzQ4MmY5NzBiJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.I7OkIo188Sh7S0JS2CAKkHGaZDuO3UWCsLF3JzsDgGs", 
      "https://private-user-images.githubusercontent.com/127979848/433502599-0f7e0674-d776-4f2f-b7a3-2727064a7a66.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDQ2NjU5NjEsIm5iZiI6MTc0NDY2NTY2MSwicGF0aCI6Ii8xMjc5Nzk4NDgvNDMzNTAyNTk5LTBmN2UwNjc0LWQ3NzYtNGYyZi1iN2EzLTI3MjcwNjRhN2E2Ni5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwNDE0JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDQxNFQyMTIxMDFaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT0wYWFlM2VlOWJjZTI0YjY3ZjdiM2EwZjc5N2Y5ZGU5NjEyOWM2NjY0ZjBmZWYwNmY1ZWFjNDRlNmE4ODc2YjE2JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.OPf3_ycLNmhbQe6S3XTFzHmTPB_IG34Agh3RXD82YpY", 
      "https://private-user-images.githubusercontent.com/127979848/433503168-b7c27691-75c7-4686-9700-345628a8ea93.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDQ2NjU5NjEsIm5iZiI6MTc0NDY2NTY2MSwicGF0aCI6Ii8xMjc5Nzk4NDgvNDMzNTAzMTY4LWI3YzI3NjkxLTc1YzctNDY4Ni05NzAwLTM0NTYyOGE4ZWE5My5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwNDE0JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDQxNFQyMTIxMDFaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT03MmMyMGQ2ZDQ4YjUxYzA0ZjAxYTJjMTc4NTgyNjI4MTYyZjIwYTMzMjVkMTk2ZGIwMTg2YzlhNTA3Y2I1Y2QzJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.2OpI2g_l_ZocJeBjzJTNLobVzqsY83Q8dQcovdGulIU", 
    ], 
    image: "https://private-user-images.githubusercontent.com/127979848/433558697-da037532-0020-4eb0-9b76-4258d6ba896f.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDQ2NjU5NjEsIm5iZiI6MTc0NDY2NTY2MSwicGF0aCI6Ii8xMjc5Nzk4NDgvNDMzNTU4Njk3LWRhMDM3NTMyLTAwMjAtNGViMC05Yjc2LTQyNThkNmJhODk2Zi5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwNDE0JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDQxNFQyMTIxMDFaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1lYzVjMGZmNWE3MjBjMWIzMjhhOWNiZDgxZjU0MzEzMTE3NzI0OTM0M2YyY2MzNmFlZGNhZTE2YjM2ZWQwODA1JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.IBaq02t30OslpacnbTGguP0FDjqXaV2_kGjVKjAdy5U",
    githubUrl: "https://github.com",
    documentation: [
      {
        title: "Overview",
        content: "## PAAL Monitoring System\n\nPAAL (Precision Agriculture and Animal Livestock) Monitoring System is a comprehensive web application designed for agricultural operations management. This system provides real-time monitoring, data analytics, and management tools for farms, barns, stalls, and livestock.\n\n**Features**\n\n- **Real-time Monitoring**: Track all your farm operations with real-time data and analytics\n- **Enterprise Security**: Industry-leading security protocols to protect your data\n- **Advanced Analytics**: Make data-driven decisions with comprehensive analytics\n- **Role-Based Access Control**: Admin and Farmer user roles with appropriate permissions\n- **Farm Management**: View and edit farm details, barns, stalls, and livestock\n- **System Administration**: Backup & restore, maintenance, and system logs"
      },
      {
        title: "Architecture",
        content: "## System Architecture\n\n**Frontend**\n- Next.js 14\n- React\n- TailwindCSS\n- Recharts (data visualization)\n- Radix UI (accessible components)\n\n**Backend**\n- Node.js\n- Express\n- MongoDB (replica set, internal auth)\n- Mongoose"
      },
      {
        title: "Implementation Details",
        content: "## Implementation Details\n\n**Livestock Monitoring Infrastructure**\n- **Posture Schema**: Flexible data structure for storing per-pig time-series posture scores\n- **Batch Segmentation**: Pigs are grouped by batch ID for comparative analysis\n- **Historical Data Indexing**: Each pig’s metrics are indexed by timestamp for fast querying\n- **Graph Integration**: Posture scores rendered using dynamic charts within the dashboard\n\n**Database Automation**\n- **Seed Scripts**: Populate your database with default test records and posture data\n- **Backup Strategy**: Git-integrated dump and restore scripts for portable development\n- **Replica Set Configuration**: rs0 initialized for high-availability and authentication\n\n**API Interaction Layer**\n- **RESTful Routes**: Fully documented endpoints for pig management, batch uploading, and posture analytics\n- **File Upload Support**: Accepts ZIPs of CSVs through a dedicated upload route\n- **Multer Integration**: Handles multipart/form-data for ZIP processing on the server\n- **Batch Insertions**: Optimized MongoDB bulk insert for large CSV files"
      },
      {
        title: "Admin Dashboard",
        content: "## Admin Dashboard\n\n**Dashboard Overview**\n\nThe Admin Dashboard is the primary control center for system administrators to view, manage, and interact with all facets of the application environment.\n\n1. **System Analytics**:\n   - Visualized metrics including farm count, active users, and recent database events\n   - Admin-only access to global configuration statistics and update logs\n\n2. **Farm Oversight**:\n   - Global view of all registered farms\n   - View/edit barn and stall metadata per farm\n   - Assign pigs to stalls and monitor posture activity\n\n3. **User Management**:\n   - Create and manage Farmer accounts\n   - Assign Farmers to specific farms\n   - Role control and user permissions for safe delegation\n\n4. **System Tools**:\n   - Access the automated backup interface\n   - View real-time logs from system services\n   - Trigger restore operations when needed\n\n**Administrative Interface**\n- **Modular Layout**: Cards, tables, and dropdowns allow for intuitive navigation\n- **Real-Time Insights**: Automatically refreshed components reflect database state\n- **Scoped Access**: All Admin tools are protected via authentication guardrails"
      },
      {
        title: "User Experience",
        content: "## User Experience\n\n**Farmer Workflow**\n\n1. **Onboarding Experience**:\n   - Farmers are guided through a multi-step wizard to register their first farm, barn, and stall\n   - Smart prompts and validations ensure required metadata is complete\n\n2. **Daily Dashboard**:\n   - Displays live updates of pig posture data\n   - Aggregated analytics show average health scores, anomalies, and activity spikes\n\n3. **Data Interaction**:\n   - Users can filter posture data by time (7/30/90/180/365 days)\n   - Graphs support toggling pigs by ID and viewing historical posture trends\n\n4. **Mobile Optimization**:\n   - Touch-friendly chart views for quick scroll and swipe-based filtering\n   - Responsive cards and modals adjust to smaller devices\n   - Mobile-first workflows for farmers on the move\n\n**Performance & UX Optimizations**\n- Lazy loading of heavy data components\n- Indexed queries for all posture retrieval\n- CDN usage for static asset distribution\n- Dedicated WebSocket channels (future) for live posture event streams"
      }
    ]
    
  },
];
