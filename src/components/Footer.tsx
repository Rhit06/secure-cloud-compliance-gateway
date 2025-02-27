
import { Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = [
    {
      title: 'Company',
      links: [
        { label: 'About', href: '#' },
        { label: 'Team', href: '#' },
        { label: 'Careers', href: '#' },
        { label: 'Press', href: '#' }
      ]
    },
    {
      title: 'Services',
      links: [
        { label: 'AI Compliance', href: '#' },
        { label: 'Risk Assessment', href: '#' },
        { label: 'Fraud Detection', href: '#' },
        { label: 'Regulatory Reporting', href: '#' }
      ]
    },
    {
      title: 'Resources',
      links: [
        { label: 'Blog', href: '#' },
        { label: 'Whitepapers', href: '#' },
        { label: 'Case Studies', href: '#' },
        { label: 'Documentation', href: '#' }
      ]
    },
    {
      title: 'Legal',
      links: [
        { label: 'Privacy Policy', href: '#' },
        { label: 'Terms of Service', href: '#' },
        { label: 'Compliance', href: '#' },
        { label: 'Security', href: '#' }
      ]
    }
  ];

  return (
    <footer className="bg-secondary text-foreground">
      <div className="container mx-auto px-4">
        <div className="pt-16 pb-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
            <div className="lg:col-span-2">
              <div className="mb-6">
                <a href="#" className="text-2xl font-bold">Secure Cloud</a>
              </div>
              <p className="text-muted-foreground mb-6 max-w-md">
                Transforming financial compliance with AI-powered solutions that streamline regulatory processes, mitigate risks, and enhance decision-making.
              </p>
              <div className="flex space-x-4">
                {['linkedin', 'twitter', 'facebook', 'instagram'].map((social) => (
                  <a
                    key={social}
                    href="#"
                    className="w-10 h-10 rounded-full bg-foreground/5 flex items-center justify-center hover:bg-primary/10 hover:text-primary transition-colors"
                    aria-label={`${social} link`}
                  >
                    <span className="sr-only">{social}</span>
                  </a>
                ))}
              </div>
            </div>

            {footerLinks.map((group) => (
              <div key={group.title}>
                <h3 className="text-lg font-semibold mb-4">{group.title}</h3>
                <ul className="space-y-3">
                  {group.links.map((link) => (
                    <li key={link.label}>
                      <a 
                        href={link.href}
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground text-sm mb-4 md:mb-0">
              © {currentYear} Secure Cloud. All rights reserved.
            </p>
            <p className="text-muted-foreground text-sm flex items-center">
              Made with <Heart size={14} className="mx-1 text-red-500" /> by Secure Cloud
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
