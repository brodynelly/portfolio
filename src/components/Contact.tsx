
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { FileText, Download, ExternalLink } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import { Card, CardContent } from './ui/card';
import { Separator } from './ui/separator';

export default function Contact() {
  return (
    <section id="contact" className="section-padding">
      <div className="container-width max-w-5xl mx-auto">
        <AnimatedSection animation="fade-in">
          <span className="inline-block px-3 py-1 text-xs font-medium tracking-wider uppercase bg-primary/10 rounded-full mb-4 text-primary">
            Contact Me
          </span>
          <h2 className="heading-lg mb-12">
            Let's Connect!
          </h2>
        </AnimatedSection>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <AnimatedSection animation="fade-in-right" delay={300}>
            {/* Contact info inside AnimatedSection */}
            <div className="space-y-8">
              <div>
                <h3 className="heading-sm">Get in Touch</h3>
                <p className="text-muted-foreground mt-2">
                  Have a project in mind or want to discuss potential opportunities? I'd love to hear from you!
                </p>
              </div>
              
              <div>
                <h4 className="font-medium mb-1">Email</h4>
                <a href="mailto:contact@example.com" className="text-primary hover:underline">
                  contact@example.com
                </a>
              </div>
              
              <div>
                <h4 className="font-medium mb-1">Connect</h4>
                <div className="flex space-x-4">
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                    LinkedIn
                  </a>
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                    GitHub
                  </a>
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                    Twitter
                  </a>
                </div>
              </div>
            </div>
          </AnimatedSection>
          
          <AnimatedSection animation="fade-in-left" delay={500}>
            {/* Resume section inside AnimatedSection */}
            <Card className="overflow-hidden border border-border/50 transition-all hover:shadow-md">
              <CardContent className="p-6">
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="rounded-lg p-2 bg-primary/10">
                      <FileText className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="heading-sm">Resume</h3>
                  </div>
                  
                  <p className="text-muted-foreground">
                    Download my resume to learn more about my experience, education, and skills.
                  </p>
                  
                  <Separator />
                  
                  <div className="flex flex-col gap-4">
                    <Button className="w-full justify-between group" variant="outline">
                      <div className="flex items-center gap-2">
                        <Download className="h-4 w-4" />
                        <span>Download PDF</span>
                      </div>
                      <span className="text-xs text-muted-foreground group-hover:text-foreground transition-colors">
                        1.2 MB
                      </span>
                    </Button>
                    
                    <Button className="w-full justify-between" variant="default">
                      <span>View Online</span>
                      <ExternalLink className="h-4 w-4 ml-2" />
                    </Button>
                  </div>
                  
                  <div className="bg-secondary/50 rounded-lg p-4">
                    <h4 className="font-medium text-sm mb-2">Additional Documents</h4>
                    <div className="space-y-2 text-sm">
                      <a href="#" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                        <FileText className="h-4 w-4" />
                        <span>Cover Letter Template</span>
                      </a>
                      <a href="#" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                        <FileText className="h-4 w-4" />
                        <span>Project Portfolio</span>
                      </a>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
