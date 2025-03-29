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
            
          </AnimatedSection>
        </div>
      </div>
    </section>;
}