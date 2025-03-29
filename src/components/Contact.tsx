
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Send } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

interface FormData {
  name: string;
  email: string;
  message: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {
      name,
      value
    } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setIsSubmitting(false);
      setSubmitSuccess(true);

      // Reset form
      setFormData({
        name: '',
        email: '',
        message: ''
      });

      // Reset success message after 5 seconds
      setTimeout(() => setSubmitSuccess(false), 5000);
    }, 1500);
  };

  return <section id="contact" className="section-padding">
      <div className="container-width max-w-5xl mx-auto">
        <AnimatedSection animation="fade-in">
          <span className="inline-block px-3 py-1 text-xs font-medium tracking-wider uppercase bg-primary/10 rounded-full mb-4 text-primary">
            Contact Me
          </span>
          <h2 className="heading-lg mb-12">
            Let's Work Together!
          </h2>
        </AnimatedSection>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <AnimatedSection animation="fade-in-right" delay={300}>
            {/* Content inside AnimatedSection */}
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
            {/* Contact form inside AnimatedSection */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-4">
                <div>
                  <Input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full"
                  />
                </div>
                
                <div>
                  <Input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full"
                  />
                </div>
                
                <div>
                  <Textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full min-h-[150px]"
                  />
                </div>
              </div>
              
              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full"
              >
                {isSubmitting ? (
                  <span className="inline-flex items-center">
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </span>
                ) : (
                  <span className="inline-flex items-center">
                    Send Message
                    <Send className="ml-2 h-4 w-4" />
                  </span>
                )}
              </Button>
              
              {submitSuccess && (
                <div className="bg-green-50 text-green-700 p-3 rounded-md text-center animate-fade-in">
                  Message sent successfully! I'll get back to you soon.
                </div>
              )}
            </form>
          </AnimatedSection>
        </div>
      </div>
    </section>;
}
