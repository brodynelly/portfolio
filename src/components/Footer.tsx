
import { Github, Linkedin, Mail } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-white py-12 px-6 md:px-12">
      <div className="container-width">
        <AnimatedSection animation="fade-in">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <span className="text-xl font-bold relative group">
                Brody
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </span>
              <p className="text-muted-foreground mt-2 text-sm">
                Full-Stack Developer
              </p>
            </div>
            
            <div className="flex space-x-4">
              {[
                { icon: Github, href: "https://github.com", label: "GitHub" },
                { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
                { icon: Mail, href: "mailto:brody@example.com", label: "Email" }
              ].map((social, index) => (
                <AnimatedSection 
                  key={social.label} 
                  animation="scale-in" 
                  delay={100 * index}
                >
                  <a 
                    href={social.href} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="p-2 rounded-full text-muted-foreground hover:text-primary transition-colors hover:bg-secondary transform hover:scale-110 transition-transform"
                  >
                    <social.icon className="h-5 w-5" />
                  </a>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </AnimatedSection>
        
        <AnimatedSection animation="fade-in" delay={300}>
          <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground text-sm mb-4 md:mb-0">
              © {currentYear} Brody. All rights reserved.
            </p>
            
            <div className="flex space-x-6">
              {[
                { label: "Privacy Policy", href: "#" },
                { label: "Terms of Service", href: "#" }
              ].map((link, index) => (
                <AnimatedSection
                  key={link.label}
                  animation="slide-in-bottom"
                  delay={200 * index}
                >
                  <a href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors relative group">
                    {link.label}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                  </a>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </footer>
  );
}
