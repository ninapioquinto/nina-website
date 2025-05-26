
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  const links = [
    { href: 'about', label: 'About' },
    { href: 'my-process', label: 'My Process' },
    { href: 'portfolio', label: 'Work' },
    { href: 'case-study', label: 'Case Study' },
    { href: 'faq', label: 'FAQ' },
    { href: 'contact', label: 'Contact' }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled ? 'bg-background/80 backdrop-blur-md py-2 sm:py-3 shadow-md' : 'bg-transparent py-4 sm:py-6'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <a 
            href="#" 
            className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-[#9b87f5] via-[#7E69AB] to-[#8B5CF6] bg-clip-text text-transparent"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            Nina
          </a>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {links.map((link) => (
              <button
                key={link.label}
                onClick={() => scrollToSection(link.href)}
                className="text-sm font-medium text-white/80 hover:text-white hover:text-glow transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-primary after:transition-all hover:after:w-full"
              >
                {link.label}
              </button>
            ))}
            <Button 
              onClick={() => scrollToSection('contact')}
              className="bg-transparent border border-primary/50 text-white hover:bg-primary/10 glow-border text-sm px-4 py-2"
            >
              Let's Connect
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-4 bg-accent/90 backdrop-blur-md mt-2 rounded-md border border-white/10">
            {links.map((link) => (
              <button
                key={link.label}
                onClick={() => scrollToSection(link.href)}
                className="block w-full text-left py-3 px-4 text-sm font-medium text-white/80 hover:text-white hover:bg-primary/10 transition-colors"
              >
                {link.label}
              </button>
            ))}
            <div className="px-4 pt-3">
              <Button 
                onClick={() => scrollToSection('contact')}
                className="w-full bg-transparent border border-primary/50 text-white hover:bg-primary/10"
              >
                Let's Connect
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
