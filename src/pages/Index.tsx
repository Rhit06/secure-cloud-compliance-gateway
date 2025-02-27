
import { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Solutions from '@/components/Solutions';
import Benefits from '@/components/Benefits';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { ArrowUp } from 'lucide-react';
import { cn } from '@/lib/utils';

const Index = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Features />
      <Solutions />
      <Benefits />
      <Contact />
      <Footer />

      <button
        onClick={scrollToTop}
        className={cn(
          'fixed bottom-8 right-8 w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center shadow-lg transform transition-all duration-300 z-50',
          showScrollTop 
            ? 'translate-y-0 opacity-100' 
            : 'translate-y-16 opacity-0 pointer-events-none'
        )}
        aria-label="Scroll to top"
      >
        <ArrowUp size={20} />
      </button>
    </div>
  );
};

export default Index;
