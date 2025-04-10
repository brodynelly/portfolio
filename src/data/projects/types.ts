
export interface TechItem {
  name: string;
  category: "frontend" | "backend" | "database" | "deployment" | "language";
}

export interface DocSection {
  title: string;
  content: string;
}

export interface Project {
  title: string;
  description: string;
  tech: TechItem[];
  challenges: string[];
  image: string;
  images?: string[];
  githubUrl: string;
  liveUrl?: string;
  documentation?: DocSection[];
}

export interface ProjectWithClass extends Project {
  classId?: string;
}
