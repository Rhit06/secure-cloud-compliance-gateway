
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { MailIcon, PhoneIcon, MapPinIcon, CheckCircle } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const Contact = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formState);
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitted(true);
    }, 1000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contact" className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block px-3 py-1 mb-4 text-xs font-medium bg-primary/10 text-primary rounded-full">
              Get In Touch
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Start Your AI Compliance Journey
            </h2>
            <p className="text-lg text-muted-foreground text-balance">
              Contact our team to learn how Secure Cloud can transform your financial compliance operations.
            </p>
          </div>
        </ScrollReveal>

        <div className="glass-card rounded-xl overflow-hidden shadow-xl">
          <div className="grid md:grid-cols-2">
            <div className="bg-gradient-to-br from-primary to-primary/70 text-white p-8 md:p-12">
              <ScrollReveal animation="fade-in-left">
                <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
                <p className="text-white/80 mb-8 max-w-md">
                  Fill out the form and our team will get back to you within 24 hours.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                      <PhoneIcon size={20} />
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-white/70">Call Us</h4>
                      <p className="text-lg">+1 (555) 000-0000</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                      <MailIcon size={20} />
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-white/70">Email Us</h4>
                      <p className="text-lg">contact@securecloud.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                      <MapPinIcon size={20} />
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-white/70">Visit Us</h4>
                      <p className="text-lg">123 Finance Street, New York, NY 10001</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-12">
                  <div className="flex space-x-4">
                    {['linkedin', 'twitter', 'facebook'].map((social) => (
                      <a
                        key={social}
                        href="#"
                        className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                      >
                        <span className="sr-only">{social}</span>
                      </a>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            </div>
            
            <div className="p-8 md:p-12">
              <ScrollReveal animation="fade-in-right">
                {isSubmitted ? (
                  <div className="h-full flex flex-col items-center justify-center text-center py-8">
                    <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center text-green-600 mb-6">
                      <CheckCircle size={32} />
                    </div>
                    <h3 className="text-2xl font-semibold mb-3">Thank You!</h3>
                    <p className="text-muted-foreground mb-6 max-w-md">
                      Your message has been received. Our team will get back to you within 24 hours.
                    </p>
                    <Button 
                      variant="outline" 
                      onClick={() => setIsSubmitted(false)}
                      className="border-primary text-primary hover:bg-primary/5"
                    >
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium">
                          Full Name
                        </label>
                        <Input
                          id="name"
                          name="name"
                          value={formState.name}
                          onChange={handleInputChange}
                          placeholder="John Doe"
                          required
                          className="w-full"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium">
                          Email Address
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formState.email}
                          onChange={handleInputChange}
                          placeholder="john@example.com"
                          required
                          className="w-full"
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="company" className="text-sm font-medium">
                        Company
                      </label>
                      <Input
                        id="company"
                        name="company"
                        value={formState.company}
                        onChange={handleInputChange}
                        placeholder="Your Company Ltd."
                        className="w-full"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium">
                        Message
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formState.message}
                        onChange={handleInputChange}
                        placeholder="How can we help you?"
                        rows={5}
                        required
                        className="w-full"
                      />
                    </div>
                    
                    <Button type="submit" className="btn-primary w-full md:w-auto">
                      Send Message
                    </Button>
                  </form>
                )}
              </ScrollReveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
