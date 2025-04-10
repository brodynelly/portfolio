
import AnimatedSection from './AnimatedSection';
import { GithubIcon, LinkedinIcon, Mail } from 'lucide-react';
import TimelineItem from './TimelineItem';

export default function About() {
  const socialLinks = [
    { icon: GithubIcon, href: "https://github.com/brodynelly", label: "GitHub" },
    { icon: LinkedinIcon, href: "https://www.linkedin.com/in/brody-nelson/", label: "LinkedIn" },
    { icon: Mail, href: "mailto:bsn3g9@umsystem.edu", label: "Email" },
  ];

  const timelineItems = [
    {
      date: "2025 - Present",
      title: "Co-Presedent of The Mizzou Satellite Club",
      description: "The active co-presedint of the Mizzou Satellite Club, where I am responsible for leading the development of the Ground Station Controll Interface and Web Development."
    },
    {
      date: "2025 - Present",
      title: "Micro-Credential in AI-empowered Spacial Computing",
      description: "Awarded from UMKC Data Science and Innovation Center for the completion of a specialized course focused on AI-empowered spacial computing."
    },
    {
      date: "2024 - Present",
      title: "Software Engineer, Precision Digital Agriculture Research Lab",
      description: "Where I am leading the development of a full-stack web app integrating AI to enhance analytics for agricultural research."
    },
    {
      date: "2023 - 2024",
      title: "Study Abroad - Westminster, London",
      description: "International academic experience where I spent 3 months studying at the University of Westminster in the heart of london."
    },
    {
      date: "2022 - Present",
      title: "Bachelor of Science in Computer Science, University of Missouri",
      description: "Focused on systems and application development using C, C#/.NET, JavaScript, Node.js, and Python."
    },
  ];

  return (
    <section id="about" className="section-padding bg-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute -bottom-32 -right-32 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute -top-32 -left-32 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>

      <div className="container-width relative z-10">
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
            I'm currently pursuing a Bachelor of Science in Computer Science at the University of Missouri, with a semester abroad completed at the University of Westminster in London. My focus lies in systems and application development using languages and frameworks such as C, C#/.NET, JavaScript, Node.js, and Python. This technical foundation supports a professional mindset driven by curiosity, problem-solving, and a commitment to pushing the boundaries of agricultural technology through continuous learning and innovation.            </AnimatedSection>
            <AnimatedSection animation="fade-in" delay={500} className="text-muted-foreground leading-relaxed">
            As a Software Engineer with the Percision Digital Agriculture Research Lab at Mizzou CAFNR, I’m leading the development of a full-stack web app integrating AI to enhance analytics for agricultural research, contributing to the advancement of data-driven decision-making in farming. on developing cutting-edge applications to revolutionize agricultural research.
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
                    className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center transition-all duration-300 hover:scale-125 hover:shadow-lg hover:shadow-primary/20 hover:bg-primary hover:text-white"
                  >
                    <link.icon className="h-5 w-5" />
                  </a>
                </AnimatedSection>
              ))}
            </div>

            <AnimatedSection animation="fade-in" delay={1000}>
              <div className="pt-6">
                <h3 className="heading-sm text-primary mb-4 relative">
                  <span className="relative z-10">Experience Timeline</span>
                  <span className="absolute bottom-0 left-0 h-2 w-0 bg-secondary transition-all duration-1000 animate-[width_1s_ease-in-out_forwards]" style={{ animationDelay: '1.2s', width: '30%' }}></span>
                </h3>
                <div className="mt-6 relative">
                  {/* Timeline highlight effect that follows scroll */}
                  <div className="absolute left-3 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-primary to-transparent h-full"></div>

                  {timelineItems.map((item, index) => (
                    <AnimatedSection
                      key={item.title}
                      animation="slide-in-bottom"
                      delay={1100 + (index * 200)}
                      className="transform transition-all duration-500 hover:translate-x-[-3px]"
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
            <div className="bg-secondary p-8 rounded-lg shadow-lg transform transition-all duration-500 hover:shadow-lg hover:scale-[1.01]">
              <h3 className="heading-sm mb-6 text-primary">Tech Expertise</h3>

              <div className="space-y-6">
                {[
                  { title: 'Languages', skills: ['C/C++/C#', 'Assembly', 'Python', 'Java', 'JavaScript', 'TypeScript', 'SQL'] },
                  { title: 'Systems & Embedded', skills: ['ARM', 'AVR', 'RTOS', 'Microcontrollers', 'IoT', 'Hardware Interfaces'] },
                  { title: 'Software & Applications', skills: ['OOP', 'Design Patterns', 'TDD', 'Cross-Platform', 'Performance Optimization'] },
                  { title: 'Agricultural Tech', skills: ['Precision Agriculture', 'Geospatial Analysis', 'Sensor Networks', 'ML for Crops'] }
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
                            <span className="px-3 py-1 bg-white rounded-full text-sm transition-all duration-500 hover:bg-primary hover:text-white hover:scale-110 hover:shadow-md">
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
