
import { CheckCircle, Zap, DollarSign, Lock, Clock, Users, Activity } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const benefits = [
  {
    icon: Zap,
    title: '80% Faster Compliance Processes',
    description: 'Reduce time spent on compliance tasks by up to 80% with intelligent automation.'
  },
  {
    icon: DollarSign,
    title: '40% Reduction in Compliance Costs',
    description: 'Lower operational costs while improving compliance quality and coverage.'
  },
  {
    icon: CheckCircle,
    title: '99.9% Accuracy Rate',
    description: 'Our AI systems achieve near-perfect accuracy in regulatory reporting and monitoring.'
  },
  {
    icon: Lock,
    title: 'Enhanced Risk Management',
    description: 'Identify and address compliance risks before they become regulatory issues.'
  },
  {
    icon: Clock,
    title: 'Real-Time Compliance Monitoring',
    description: 'Continuously monitor transactions and activities for compliance in real-time.'
  },
  {
    icon: Users,
    title: 'Improved Customer Experience',
    description: 'Streamline KYC and onboarding without compromising on compliance.'
  },
  {
    icon: Activity,
    title: 'Adaptive Learning Systems',
    description: 'Our AI continuously improves based on your specific compliance patterns and needs.'
  }
];

const Benefits = () => {
  return (
    <section id="benefits" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block px-3 py-1 mb-4 text-xs font-medium bg-primary/10 text-primary rounded-full">
              Key Benefits
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Why Choose Our AI Compliance Solutions
            </h2>
            <p className="text-lg text-muted-foreground text-balance">
              Secure Cloud's AI-powered compliance platform delivers measurable improvements across your financial operations.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <ScrollReveal 
              key={benefit.title} 
              animation="fade-in" 
              delay={100 * index}
              className="h-full"
            >
              <div className="h-full glass-card rounded-xl p-8 hover:shadow-xl transition-all duration-300">
                <div className="flex items-start space-x-5">
                  <div className="flex-shrink-0 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary">
                    <benefit.icon size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal animation="scale-up" delay={300}>
          <div className="mt-16 bg-gradient-to-r from-primary/20 to-primary/5 rounded-xl p-8 md:p-12">
            <div className="grid md:grid-cols-5 gap-8 items-center">
              <div className="md:col-span-3">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">Ready to transform your financial compliance?</h3>
                <p className="text-lg mb-0">Join hundreds of financial institutions that have revolutionized their compliance processes with Secure Cloud's AI solutions.</p>
              </div>
              <div className="md:col-span-2 flex justify-center md:justify-end">
                <button className="btn-primary">Schedule a Demo</button>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Benefits;
