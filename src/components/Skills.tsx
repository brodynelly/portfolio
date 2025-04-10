
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
      title: "Systems Programming",
      icon: <Code className="h-5 w-5" />,
      items: [
        "C/C++ for performance-critical applications",
        "Memory management and optimization",
        "Multi-threading and parallel processing",
        "Low-level system architecture design"
      ]
    },
    {
      title: "Web Development",
      icon: <Terminal className="h-5 w-5" />,
      items: [
        "Frontend development with React and Vue",
        "Backend development with Node.js and Express",
        "Database design and optimization",
        "Web application architecture and design"
      ]
    },
    {
      title: "Software Development",
      icon: <Laptop className="h-5 w-5" />,
      items: [
        "Object-oriented design patterns",
        "Cross-platform application development",
        "Test-driven development methodologies",
        "Performance profiling and optimization"
      ]
    },
    {
      title: "Languages & Frameworks",
      icon: <Code className="h-5 w-5" />,
      items: [
        "C/C++/C# for systems and applications",
        "Python for data analysis and automation",
        "JavaScript/TypeScript for web/mobile applications",
        "SQL for database management"
      ]
    },
    {
      title: "Data Engineering",
      icon: <Database className="h-5 w-5" />,
      items: [
        "Database design and optimization",
        "ETL pipeline development",
        "Data modeling and schema design",
        "Query optimization techniques"
      ]
    },
    {
      title: "Agricultural Technology",
      icon: <BarChart className="h-5 w-5" />,
      items: [
        "Precision agriculture data systems",
        "Sensor integration and IoT networks",
        "Geospatial data analysis",
        "Machine learning for crop analytics"
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
            My technical foundation spans systems programming, embedded development, and software engineering, with specialized experience in agricultural technology, data engineering, and low-level optimization.
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
