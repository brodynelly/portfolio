
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
  images?: string[];
  githubUrl: string;
  liveUrl?: string;
}

export interface ProjectWithClass extends Project {
  classId?: string;
}
