
import { ArrowDown } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-secondary/60 z-0" />
      
      {/* Moving background elements */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute -top-20 -left-20 w-64 h-64 bg-primary/5 rounded-full filter blur-3xl animate-floating" style={{ animationDelay: '0s' }} />
        <div className="absolute top-1/3 -right-20 w-80 h-80 bg-primary/5 rounded-full filter blur-3xl animate-floating" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-20 left-1/4 w-48 h-48 bg-primary/5 rounded-full filter blur-3xl animate-floating" style={{ animationDelay: '2s' }} />
      </div>
      
      {/* Content */}
      <div className="container max-w-5xl mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col items-center text-center">
          <span className="inline-block px-4 py-1.5 mb-6 text-xs font-medium tracking-wider uppercase bg-secondary rounded-full animate-fade-in" style={{ animationDelay: '300ms' }}>
            Full-Stack Developer
          </span>
          
          <h1 className="heading-xl mb-6 animate-fade-in" style={{ animationDelay: '600ms' }}>
            Hi, I'm <span className="text-primary font-bold">Brody</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10 animate-fade-in" style={{ animationDelay: '900ms' }}>
            I build modern, scalable web applications with meticulous attention to detail. Specializing in React, TypeScript, and advanced backend systems.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: '1200ms' }}>
            <a 
              href="#projects" 
              className="px-8 py-3 bg-primary text-primary-foreground rounded-md font-medium transition-all hover:translate-y-[-2px] hover:shadow-lg"
            >
              View Projects
            </a>
            <a 
              href="#contact" 
              className="px-8 py-3 bg-secondary text-secondary-foreground rounded-md font-medium transition-all hover:translate-y-[-2px]"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" aria-label="Scroll down">
          <ArrowDown className="text-muted-foreground h-6 w-6" />
        </a>
      </div>
    </section>
  );
}
