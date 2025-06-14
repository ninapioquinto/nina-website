
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Instagram, Github, ArrowRight } from "lucide-react";
import React from "react";
import StarryBackground from "@/components/StarryBackground";
import Particles from "@/components/Particles";

const TiktokIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M9 12a4 4 0 1 0 4 4v-12a5 5 0 0 0 5 5" />
  </svg>
);

const LinkTree = () => {
  return (
    <>
      <StarryBackground />
      <Particles />
      <div className="relative z-10 flex items-center justify-center min-h-screen p-4">
        <div className="w-full max-w-md flex flex-col items-center gap-7 p-8 rounded-3xl bg-violet-950/30 border border-violet-400/20 shadow-xl backdrop-blur-lg animate-glow">
          {/* Avatar and username */}
          <Avatar className="w-24 h-24 mb-3 shadow-lg border-2 border-violet-600/30 bg-gradient-to-tr from-violet-700/40 via-background to-indigo-900/30">
            <AvatarImage src="/lovable-uploads/f33f1f05-555a-4043-8f47-babb6b1a2f95.png" alt="Nina Pioquinto" />
            <AvatarFallback className="text-4xl font-bold tracking-tight text-violet-300 bg-violet-800/50">N</AvatarFallback>
          </Avatar>
          <div className="text-center">
            <span className="block text-2xl font-semibold bg-gradient-to-r from-purple-400 via-violet-400 to-indigo-400 bg-clip-text text-transparent glow-text">Nina Pioquinto</span>
            <span className="block text-sm text-muted-foreground mt-1 tracking-wide">@automationcrmexpert</span>
          </div>
          {/* Socials row */}
          <div className="flex flex-row gap-8 mt-1 mb-1">
            {/* Instagram */}
            <a
              href="https://www.instagram.com/automationcrmexpert"
              target="_blank"
              rel="noopener noreferrer"
              className="text-violet-400 hover:text-violet-200 hover:scale-110 transition-all duration-300"
              aria-label="Instagram"
            >
              <Instagram className="w-7 h-7" />
            </a>
            {/* TikTok */}
            <a
              href="https://www.tiktok.com/@automationcrmexpert"
              target="_blank"
              rel="noopener noreferrer"
              className="text-violet-400 hover:text-violet-200 hover:scale-110 transition-all duration-300"
              aria-label="TikTok"
            >
              <TiktokIcon className="w-7 h-7" />
            </a>
            {/* GitHub */}
            <a
              href="https://github.com/ninapioquinto"
              target="_blank"
              rel="noopener noreferrer"
              className="text-violet-400 hover:text-violet-200 hover:scale-110 transition-all duration-300"
              aria-label="GitHub"
            >
              <Github className="w-7 h-7" />
            </a>
          </div>
          {/* Action buttons */}
          <div className="flex flex-col w-full gap-4 mt-1">
            <Button
              asChild
              className="
                w-full text-base font-medium py-3 rounded-lg
                shadow-lg shadow-primary/20 hover:shadow-primary/40
                transition-transform duration-300 hover:scale-105
              "
            >
              <a
                href="/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit My Website
                <ArrowRight className="h-5 w-5" />
              </a>
            </Button>
            <Button
              asChild
              className="
              w-full text-base font-medium py-4 px-4 rounded-full
              border-2 border-violet-400/40
              bg-black/40 hover:bg-violet-900/80
              text-violet-200 shadow hover:text-white
              transition hover:scale-105 luxury-button
            "
              variant="outline"
            >
              <a href="mailto:nina@automationcrmexpert.com">Contact Me</a>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default LinkTree;
