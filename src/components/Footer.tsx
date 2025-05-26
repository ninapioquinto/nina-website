
import { Facebook, Instagram, Github } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-12 border-t border-white/5 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-8 mb-8 md:mb-0">
            <a
              href="mailto:nina@automationcrmexpert.com"
              className="text-white/70 hover:text-white transition-colors flex items-center gap-2 group"
            >
              <span className="h-8 w-8 flex items-center justify-center rounded-full bg-primary/10 border border-primary/20 group-hover:bg-primary/20 transition-colors">
                <Instagram className="h-4 w-4" />
              </span>
              <span>Instagram</span>
            </a>
            <a
              href="#"
              className="text-white/70 hover:text-white transition-colors flex items-center gap-2 group"
            >
              <span className="h-8 w-8 flex items-center justify-center rounded-full bg-primary/10 border border-primary/20 group-hover:bg-primary/20 transition-colors">
                <Facebook className="h-4 w-4" />
              </span>
              <span>Facebook</span>
            </a>
            <a
              href="#"
              className="text-white/70 hover:text-white transition-colors flex items-center gap-2 group"
            >
              <span className="h-8 w-8 flex items-center justify-center rounded-full bg-primary/10 border border-primary/20 group-hover:bg-primary/20 transition-colors">
                <Github className="h-4 w-4" />
              </span>
              <span>GitHub</span>
            </a>
          </div>
          <div className="flex flex-col items-center md:items-end gap-2">
            <div className="text-white/50 text-sm">
              © 2025 Nina Pioquinto
            </div>
            <div className="text-white/50 text-sm">
              Designed & Built with 💜
            </div>
          </div>
        </div>
      </div>
      
      {/* Ambient glow effect */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] rounded-full bg-primary/5 blur-[100px] -z-10 opacity-60"></div>
    </footer>
  );
};

export default Footer;
