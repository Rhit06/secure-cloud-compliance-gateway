
import { ArrowRight, AlertCircle, LineChart, ShieldCheck, Database, Fingerprint } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ScrollReveal from './ScrollReveal';

const solutions = [
  {
    icon: AlertCircle,
    title: 'AI-Powered Anomaly Detection',
    description: 'Our advanced algorithms identify unusual patterns and potential compliance issues before they become problems.',
    features: [
      'Real-time transaction monitoring',
      'Custom anomaly thresholds',
      'Automated alert escalation',
      'Historical pattern analysis'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&q=80&w=600'
  },
  {
    icon: LineChart,
    title: 'Predictive Compliance Analysis',
    description: 'Stay ahead of regulatory changes with predictive analytics that forecast compliance requirements.',
    features: [
      'Regulatory change forecasting',
      'Impact assessment automation',
      'Implementation roadmapping',
      'Compliance readiness scoring'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=600'
  },
  {
    icon: ShieldCheck,
    title: 'Enhanced KYC/AML Solutions',
    description: 'Streamline Know Your Customer and Anti-Money Laundering processes with intelligent verification.',
    features: [
      'Biometric identity verification',
      'Document authenticity checks',
      'Automated sanctions screening',
      'Ongoing customer monitoring'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?auto=format&fit=crop&q=80&w=600'
  },
  {
    icon: Database,
    title: 'Regulatory Reporting Automation',
    description: 'Transform complex regulatory reporting into an effortless process with AI-driven data collection and formatting.',
    features: [
      'Automated data aggregation',
      'Report template generation',
      'Validation and error detection',
      'Regulatory submission tracking'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=600'
  }
];

const Solutions = () => {
  return (
    <section id="solutions" className="py-20">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block px-3 py-1 mb-4 text-xs font-medium bg-primary/10 text-primary rounded-full">
              Our Solutions
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Comprehensive AI Solutions for Financial Compliance
            </h2>
            <p className="text-lg text-muted-foreground text-balance">
              Secure Cloud offers tailored AI solutions designed specifically for the unique challenges of financial compliance.
            </p>
          </div>
        </ScrollReveal>

        <div className="space-y-12">
          {solutions.map((solution, index) => (
            <ScrollReveal 
              key={solution.title} 
              animation={index % 2 === 0 ? "fade-in-left" : "fade-in-right"}
              className="relative"
            >
              <div className="glass-card rounded-xl overflow-hidden">
                <div className="grid md:grid-cols-2 items-center">
                  <div className="p-8 md:p-12">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary mb-6">
                      <solution.icon size={24} />
                    </div>
                    <h3 className="text-2xl font-semibold mb-4">{solution.title}</h3>
                    <p className="text-muted-foreground mb-6 text-balance">{solution.description}</p>
                    
                    <ul className="space-y-3 mb-8">
                      {solution.features.map((feature) => (
                        <li key={feature} className="flex items-start">
                          <div className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/20 text-primary flex items-center justify-center mt-1">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                          </div>
                          <span className="ml-3">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <Button variant="outline" className="group border-primary text-primary hover:bg-primary/5">
                      Learn more
                      <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                  
                  <div className="bg-gradient-to-br from-primary/10 to-primary/30 p-8 md:p-12 h-full flex items-center justify-center">
                    <div className="glass-card p-1 rounded-xl shadow-lg transform rotate-2 overflow-hidden">
                      <img 
                        src={solution.imageUrl} 
                        alt={solution.title} 
                        className="w-full h-auto rounded-lg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;
