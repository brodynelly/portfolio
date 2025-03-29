
import AnimatedSection from './AnimatedSection';
import SkillCard from './SkillCard';
import { Code, Server, Database, Terminal, BarChart, Laptop } from 'lucide-react';

export default function Skills() {
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
          threshold={0.2}
        >
          <span className="inline-block px-3 py-1 text-xs font-medium tracking-wider uppercase bg-secondary rounded-full mb-4">
            Skills
          </span>
          <h2 className="heading-lg mb-6">Technical Expertise</h2>
          <p className="text-muted-foreground max-w-3xl mb-12">
            My technical foundation spans frontend and backend development, with specialized experience in data visualization, embedded systems, and database optimization.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <AnimatedSection 
              key={skill.title} 
              animation={index % 2 === 0 ? "fade-in-right" : "fade-in-left"} 
              delay={150 * index}
              threshold={0.1}
              className="transform-gpu"
            >
              <SkillCard {...skill} />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
