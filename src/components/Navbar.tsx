
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const navItems = [
    { label: 'Home', href: '#' },
    { label: 'Services', href: '#services' },
    { label: 'Solutions', href: '#solutions' },
    { label: 'Benefits', href: '#benefits' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header 
      className={cn(
        'fixed top-0 left-0 w-full z-50 transition-all duration-300',
        scrolled 
          ? 'bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-200/50' 
          : 'bg-transparent'
      )}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <a href="#" className="text-2xl font-bold text-foreground">
            Secure Cloud
          </a>
          
          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a 
                key={item.label}
                href={item.href}
                className="text-foreground/80 hover:text-primary transition-colors duration-200 font-medium"
              >
                {item.label}
              </a>
            ))}
            <Button className="btn-primary">Get Started</Button>
          </nav>
          
          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-foreground focus:outline-none"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div 
        className={cn(
          'md:hidden fixed inset-0 bg-background z-40 transition-transform duration-300 ease-in-out',
          isOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <div className="flex flex-col h-full pt-20 px-6">
          {navItems.map((item) => (
            <a 
              key={item.label}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="py-4 text-lg font-medium border-b border-border text-foreground/80 hover:text-primary transition-colors"
            >
              {item.label}
            </a>
          ))}
          <div className="mt-8">
            <Button className="btn-primary w-full" onClick={() => setIsOpen(false)}>
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
