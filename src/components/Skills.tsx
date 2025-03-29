
import AnimatedSection from './AnimatedSection';
import SkillCard from './SkillCard';
import { Code, Server, Database, Terminal, BarChart, Laptop } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Skills() {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    setIsLoaded(true);
  }, []);
  
  const skills = [
    {
      title: "Frontend Development",
      icon: <Laptop className="h-5 w-5" />,
      items: [
        "React & Next.js for interactive UIs",
        "TypeScript for type-safe code",
        "TailwindCSS for responsive design",
        "Data visualization with D3.js and Chart.js"
      ]
    },
    {
      title: "Backend Systems",
      icon: <Server className="h-5 w-5" />,
      items: [
        "Express.js & Node.js APIs",
        "Django for Python applications",
        "RESTful API design principles",
        "Middleware & authentication systems"
      ]
    },
    {
      title: "Database Management",
      icon: <Database className="h-5 w-5" />,
      items: [
        "PostgreSQL schema design",
        "Query optimization techniques",
        "Data modeling best practices",
        "Migration strategies"
      ]
    },
    {
      title: "Languages",
      icon: <Code className="h-5 w-5" />,
      items: [
        "JavaScript/TypeScript",
        "Python for web and data analysis",
        "Assembly for embedded systems",
        "SQL for database interactions"
      ]
    },
    {
      title: "Developer Tools",
      icon: <Terminal className="h-5 w-5" />,
      items: [
        "Git & GitHub workflows",
        "Docker containerization",
        "CI/CD pipeline configuration",
        "AWS & Vercel cloud deployments"
      ]
    },
    {
      title: "Data Analysis",
      icon: <BarChart className="h-5 w-5" />,
      items: [
        "Data processing pipelines",
        "CSV parsing and transformation",
        "Statistical analysis with Python",
        "Interactive visualization dashboards"
      ]
    }
  ];

  return (
    <section id="skills" className="section-padding bg-white">
      <div className="container-width">
        <AnimatedSection 
          animation="fade-in" 
          className="mb-12"
        >
          <span className={`inline-block px-3 py-1 text-xs font-medium tracking-wider uppercase bg-secondary rounded-full mb-4 transition-all duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
            Skills
          </span>
          <h2 className={`heading-lg mb-6 transition-all duration-700 delay-100 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            Technical Expertise
          </h2>
          <p className={`text-muted-foreground max-w-3xl mb-12 transition-all duration-700 delay-200 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            My technical foundation spans frontend and backend development, with specialized experience in data visualization, embedded systems, and database optimization.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <AnimatedSection 
              key={skill.title} 
              animation="scale-in" 
              delay={150 * index}
              threshold={0.15}
              className="transition-all duration-500"
            >
              <SkillCard {...skill} />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
