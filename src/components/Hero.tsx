
import { ArrowDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useEffect, useState } from 'react';

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-secondary/60 z-0" />
      
      {/* Moving background elements with enhanced animations */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute -top-20 -left-20 w-64 h-64 bg-primary/5 rounded-full filter blur-3xl animate-floating" style={{ animationDelay: '0s' }} />
        <div className="absolute top-1/3 -right-20 w-80 h-80 bg-primary/5 rounded-full filter blur-3xl animate-floating" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-20 left-1/4 w-48 h-48 bg-primary/5 rounded-full filter blur-3xl animate-floating" style={{ animationDelay: '2s' }} />
        
        {/* Adding more animated elements */}
        <div className="absolute top-40 left-1/3 w-24 h-24 bg-blue-400/10 rounded-full filter blur-xl animate-pulse" />
        <div className="absolute bottom-40 right-1/4 w-32 h-32 bg-purple-400/10 rounded-full filter blur-xl animate-pulse" style={{ animationDelay: '1.5s' }} />
        <div className="absolute top-1/2 left-10 w-16 h-16 bg-yellow-400/10 rounded-full filter blur-lg animate-spin-slow" />
      </div>
      
      {/* Content with staggered animations */}
      <div className="container max-w-5xl mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col items-center text-center">
          <span 
            className={cn(
              "inline-block px-4 py-1.5 mb-6 text-xs font-medium tracking-wider uppercase bg-secondary rounded-full transition-all duration-700 transform",
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
            )}
            style={{ transitionDelay: '300ms' }}
          >
            Full-Stack Developer
          </span>
          
          <h1 
            className={cn(
              "heading-xl mb-6 transition-all duration-700 transform",
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
            )}
            style={{ transitionDelay: '600ms' }}
          >
            Hi, I'm <span className="text-primary font-bold relative">
              Brody
              <span className="absolute -bottom-1 left-0 w-full h-1 bg-primary transform scale-x-0 origin-left transition-transform duration-500" style={{ transitionDelay: '1.2s', transform: isLoaded ? 'scaleX(1)' : 'scaleX(0)' }}></span>
            </span>
          </h1>
          
          <p 
            className={cn(
              "text-lg md:text-xl text-muted-foreground max-w-2xl mb-10 transition-all duration-700 transform",
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
            )}
            style={{ transitionDelay: '900ms' }}
          >
            I build modern, scalable web applications with meticulous attention to detail. Specializing in React, TypeScript, and advanced backend systems.
          </p>
          
          <div 
            className={cn(
              "flex flex-col sm:flex-row gap-4 transition-all duration-700 transform",
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
            )}
            style={{ transitionDelay: '1200ms' }}
          >
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
      
      {/* Scroll indicator with enhanced animation */}
      <div 
        className={cn(
          "absolute bottom-10 left-1/2 transform -translate-x-1/2 transition-all duration-700",
          isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        )}
        style={{ transitionDelay: '1500ms' }}
      >
        <a href="#about" aria-label="Scroll down" className="flex flex-col items-center gap-2 transition-transform hover:translate-y-1">
          <span className="text-xs font-medium text-muted-foreground">Scroll Down</span>
          <ArrowDown className="text-muted-foreground h-6 w-6 animate-bounce" />
        </a>
      </div>
    </section>
  );
}
