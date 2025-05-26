
import { Facebook, Instagram, Github } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-8 sm:py-12 border-t border-white/5 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col items-center gap-6 sm:gap-8">
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 lg:gap-8">
            <a
              href="mailto:nina@automationcrmexpert.com"
              className="text-white/70 hover:text-white transition-colors flex items-center gap-2 group"
            >
              <span className="h-7 w-7 sm:h-8 sm:w-8 flex items-center justify-center rounded-full bg-primary/10 border border-primary/20 group-hover:bg-primary/20 transition-colors">
                <Instagram className="h-3 w-3 sm:h-4 sm:w-4" />
              </span>
              <span className="text-sm sm:text-base">Instagram</span>
            </a>
            <a
              href="#"
              className="text-white/70 hover:text-white transition-colors flex items-center gap-2 group"
            >
              <span className="h-7 w-7 sm:h-8 sm:w-8 flex items-center justify-center rounded-full bg-primary/10 border border-primary/20 group-hover:bg-primary/20 transition-colors">
                <Facebook className="h-3 w-3 sm:h-4 sm:w-4" />
              </span>
              <span className="text-sm sm:text-base">Facebook</span>
            </a>
            <a
              href="#"
              className="text-white/70 hover:text-white transition-colors flex items-center gap-2 group"
            >
              <span className="h-7 w-7 sm:h-8 sm:w-8 flex items-center justify-center rounded-full bg-primary/10 border border-primary/20 group-hover:bg-primary/20 transition-colors">
                <Github className="h-3 w-3 sm:h-4 sm:w-4" />
              </span>
              <span className="text-sm sm:text-base">GitHub</span>
            </a>
          </div>
          <div className="flex flex-col items-center gap-2 text-center">
            <div className="text-white/50 text-xs sm:text-sm">
              © 2025 Nina Pioquinto
            </div>
            <div className="text-white/50 text-xs sm:text-sm">
              Designed & Built with 💜
            </div>
          </div>
        </div>
      </div>
      
      {/* Ambient glow effect */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[300px] sm:w-[500px] h-[200px] sm:h-[300px] rounded-full bg-primary/5 blur-[100px] -z-10 opacity-60"></div>
    </footer>
  );
};

export default Footer;
