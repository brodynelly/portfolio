
import { useState } from 'react';
import AnimatedSection from './AnimatedSection';
import { Mail, Phone, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="section-padding bg-secondary">
      <div className="container-width">
        <AnimatedSection animation="fade-in">
          <span className="inline-block px-3 py-1 text-xs font-medium tracking-wider uppercase bg-white rounded-full mb-4">
            Contact
          </span>
          <h2 className="heading-lg mb-6">Get In Touch</h2>
          <p className="text-muted-foreground max-w-2xl mb-12">
            I'm currently open to new opportunities and collaborations. Feel free to reach out if you'd like to discuss a project or potential position.
          </p>
        </AnimatedSection>

        <div className="gap-12 items-start">
          <AnimatedSection animation="fade-in-left" delay={600}>
            <div className="space-y-8">
              <div>
                <h3 className="heading-sm mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="mr-4 p-2 bg-white rounded-full">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium">Email</h4>
                      <a href="mailto:brody@example.com" className="text-muted-foreground hover:text-primary transition-colors">
                        brody@example.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="mr-4 p-2 bg-white rounded-full">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium">Phone</h4>
                      <a href="tel:+15551234567" className="text-muted-foreground hover:text-primary transition-colors">
                        (555) 123-4567
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="heading-sm mb-6">Resume</h3>
                <p className="text-muted-foreground mb-4">
                  Download my resume for a complete overview of my experience, education, and skills.
                </p>
                <a href="#" className="inline-flex items-center px-4 py-2 bg-white border border-primary text-primary rounded-md font-medium transition-colors hover:bg-primary hover:text-white">
                  Download Resume (PDF)
                </a>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
