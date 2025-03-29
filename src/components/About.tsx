
import AnimatedSection from './AnimatedSection';
import { Github, Linkedin, Mail } from 'lucide-react';
import TimelineItem from './TimelineItem';

export default function About() {
  const socialLinks = [
    { icon: Github, href: "https://github.com", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: Mail, href: "mailto:brody@example.com", label: "Email" },
  ];

  const timelineItems = [
    {
      date: "2022 - Present",
      title: "Lab Research Assistant",
      description: "Developing a full-stack application for IoT device data processing and visualization."
    },
    {
      date: "2021 - 2022",
      title: "Study Abroad - London",
      description: "International academic experience focusing on global software development practices."
    },
    {
      date: "2020 - Present",
      title: "Computer Science, University of Missouri",
      description: "Focusing on software engineering, algorithms, and distributed systems."
    },
    {
      date: "2019 - 2020",
      title: "Freelance Web Developer",
      description: "Designed and implemented responsive websites for local businesses."
    },
  ];

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-width">
        <AnimatedSection animation="fade-in">
          <span className="inline-block px-3 py-1 text-xs font-medium tracking-wider uppercase bg-secondary rounded-full mb-4">
            About Me
          </span>
          <h2 className="heading-lg mb-12">Get to know me</h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <AnimatedSection 
            animation="fade-in-right" 
            delay={300}
            className="space-y-6"
          >
            <h3 className="heading-sm text-primary">Professional Journey</h3>
            <AnimatedSection animation="fade-in" delay={400} className="text-muted-foreground leading-relaxed">
              I'm a Full-Stack Developer with a passion for crafting scalable web solutions. Currently pursuing a degree in Computer Science at the University of Missouri, including a valuable study abroad experience in London.
            </AnimatedSection>
            <AnimatedSection animation="fade-in" delay={500} className="text-muted-foreground leading-relaxed">
              In my laboratory role, I'm developing a comprehensive full-stack application handling AI-driven data for IoT devices. This project integrates real-time data processing with interactive visualizations.
            </AnimatedSection>
            <AnimatedSection animation="fade-in" delay={600} className="text-muted-foreground leading-relaxed">
              My approach to development focuses on clean code, performance optimization, and thoughtful user experiences. I'm continuously expanding my knowledge in modern web technologies and software architecture.
            </AnimatedSection>
            
            <div className="flex items-center space-x-4 pt-4">
              {socialLinks.map((link, index) => (
                <AnimatedSection 
                  key={link.label}
                  animation="scale-in" 
                  delay={700 + (index * 100)}
                >
                  <a 
                    href={link.href}
                    aria-label={link.label}
                    className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center transition-transform hover:scale-110"
                  >
                    <link.icon className="h-5 w-5" />
                  </a>
                </AnimatedSection>
              ))}
            </div>

            <AnimatedSection animation="fade-in" delay={1000}>
              <div className="pt-6">
                <h3 className="heading-sm text-primary mb-4">Experience Timeline</h3>
                <div className="mt-6">
                  {timelineItems.map((item, index) => (
                    <AnimatedSection 
                      key={item.title}
                      animation="slide-in-bottom" 
                      delay={1100 + (index * 150)}
                    >
                      <TimelineItem 
                        date={item.date}
                        title={item.title}
                        description={item.description}
                        isLast={index === timelineItems.length - 1}
                      />
                    </AnimatedSection>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </AnimatedSection>
          
          <AnimatedSection 
            animation="fade-in-left" 
            delay={600}
          >
            <div className="bg-secondary p-8 rounded-lg">
              <h3 className="heading-sm mb-6 text-primary">Tech Expertise</h3>
              
              <div className="space-y-6">
                {[
                  { title: 'Languages', skills: ['JavaScript', 'TypeScript', 'Python', 'Assembly'] },
                  { title: 'Frontend', skills: ['React', 'Next.js', 'TailwindCSS', 'Framer Motion'] },
                  { title: 'Backend', skills: ['Node.js', 'Express.js', 'PostgreSQL', 'Docker', 'Django'] },
                  { title: 'Tools & Services', skills: ['Git', 'AWS', 'Vercel', 'CI/CD', 'REST APIs'] }
                ].map((category, categoryIndex) => (
                  <AnimatedSection 
                    key={category.title}
                    animation="fade-in" 
                    delay={800 + (categoryIndex * 150)}
                  >
                    <div>
                      <h4 className="font-semibold mb-2">{category.title}</h4>
                      <div className="flex flex-wrap gap-2">
                        {category.skills.map((skill, skillIndex) => (
                          <AnimatedSection 
                            key={skill}
                            animation="scale-in" 
                            delay={1000 + (categoryIndex * 100) + (skillIndex * 50)}
                          >
                            <span className="px-3 py-1 bg-white rounded-full text-sm hover:bg-primary hover:text-white transition-colors duration-300">
                              {skill}
                            </span>
                          </AnimatedSection>
                        ))}
                      </div>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
