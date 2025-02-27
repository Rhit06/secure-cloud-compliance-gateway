
import React from 'react';
import { Button } from '@/components/ui/button';
import ScrollReveal from './ScrollReveal';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-b from-white to-gray-50 pt-16">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] right-[5%] w-64 h-64 bg-primary/5 rounded-full animate-float" />
        <div className="absolute top-[60%] left-[10%] w-96 h-96 bg-primary/3 rounded-full animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute -top-[5%] -left-[5%] w-72 h-72 bg-primary/5 rounded-full animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute opacity-20 top-[30%] right-[15%] w-full max-w-xs h-60 bg-gradient-to-r from-primary/30 to-primary/5 blur-3xl" />
      </div>
      
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <ScrollReveal animation="fade-in-left" className="mb-1">
              <div className="inline-block px-3 py-1 mb-4 text-xs font-medium bg-primary/10 text-primary rounded-full">
                Next-Generation Solutions
              </div>
            </ScrollReveal>
            
            <ScrollReveal animation="fade-in-left" delay={100}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-balance mb-6">
                AI in Financial Compliance
              </h1>
            </ScrollReveal>
            
            <ScrollReveal animation="fade-in-left" delay={200}>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl text-balance">
                Secure Cloud transforms financial compliance with advanced AI solutions that streamline regulatory processes, mitigate risks, and enhance decision-making.
              </p>
            </ScrollReveal>
            
            <ScrollReveal animation="fade-in-left" delay={300}>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="btn-primary">Request Consultation</Button>
                <Button variant="outline" className="border-primary text-primary hover:bg-primary/5">
                  Learn More
                </Button>
              </div>
            </ScrollReveal>
            
            <ScrollReveal animation="fade-in" delay={500}>
              <div className="mt-12 flex items-center space-x-6">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-gray-200"></div>
                  ))}
                </div>
                <div>
                  <div className="font-medium">Trusted by 1000+ companies</div>
                  <div className="text-sm text-muted-foreground">across financial services</div>
                </div>
              </div>
            </ScrollReveal>
          </div>
          
          <ScrollReveal animation="fade-in-right" delay={300} className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-primary rounded-2xl transform -rotate-2 scale-105" />
              <div className="glass-card relative p-2 rounded-2xl overflow-hidden transform rotate-2">
                <img 
                  src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=1920" 
                  alt="AI in Financial Compliance" 
                  className="w-full h-auto rounded-xl shadow-lg"
                />
              </div>
              <div className="absolute -right-4 -bottom-4 glass-card p-4 rounded-xl shadow-lg transform rotate-3 max-w-[180px]">
                <div className="text-sm font-semibold">100% Compliance</div>
                <div className="text-xs text-muted-foreground">Advanced Risk Detection</div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default Hero;
