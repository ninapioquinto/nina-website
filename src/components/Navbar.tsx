
import { useState } from 'react';
import { Menu } from 'lucide-react';
import { Button } from './ui/button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: '#solutions', label: 'Solutions' },
    { href: '#approach', label: 'Our Approach' },
    { href: '#about', label: 'About Us' },
    { href: '#careers', label: 'Careers' }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-background/80 backdrop-blur-md z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <a href="/" className="text-2xl font-bold text-primary">lemni</a>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
            <Button>Get Started</Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="block py-2 text-sm font-medium text-foreground hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <Button className="w-full mt-4">Get Started</Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
