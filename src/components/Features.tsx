
import { Shield, Search, BarChart3, Brain, Clock, Award } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const features = [
  {
    icon: Shield,
    title: 'Regulatory Compliance',
    description: 'Automatically stay compliant with changing financial regulations through AI-powered monitoring and updates.'
  },
  {
    icon: Search,
    title: 'Fraud Detection',
    description: 'Identify suspicious patterns and potential fraud with advanced machine learning algorithms.'
  },
  {
    icon: BarChart3,
    title: 'Risk Assessment',
    description: 'Quantify and visualize risks across your organization with comprehensive AI-driven assessments.'
  },
  {
    icon: Brain,
    title: 'Intelligent Automation',
    description: 'Streamline repetitive compliance tasks with smart automation that adapts to your workflow.'
  },
  {
    icon: Clock,
    title: 'Real-time Monitoring',
    description: 'Monitor transactions and activities in real-time to catch compliance issues as they happen.'
  },
  {
    icon: Award,
    title: 'Audit-Ready Reporting',
    description: 'Generate comprehensive, audit-ready reports with a single click, saving hours of preparation.'
  }
];

const Features = () => {
  return (
    <section id="services" className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block px-3 py-1 mb-4 text-xs font-medium bg-primary/10 text-primary rounded-full">
              Our Services
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Elevate Financial Compliance with AI
            </h2>
            <p className="text-lg text-muted-foreground text-balance">
              Secure Cloud's AI-powered solutions transform how financial institutions approach compliance, reducing costs while enhancing accuracy and efficiency.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <ScrollReveal 
              key={feature.title} 
              animation="scale-up" 
              delay={100 * index}
              className="h-full"
            >
              <div className="h-full glass-card rounded-xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary mb-6">
                  <feature.icon size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
