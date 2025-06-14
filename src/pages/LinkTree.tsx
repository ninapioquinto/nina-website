
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Instagram, Github, Tiktok } from "lucide-react";
import React from "react";
import StarryBackground from "@/components/StarryBackground";
import Particles from "@/components/Particles";

const LinkTree = () => {
  return (
    <>
      <StarryBackground />
      <Particles />
      <div className="relative z-10 flex items-center justify-center min-h-screen p-4">
        <div className="w-full max-w-md flex flex-col items-center gap-7 p-8 rounded-3xl bg-violet-950/30 border border-violet-400/20 shadow-xl backdrop-blur-lg animate-glow">
          {/* Avatar and username */}
          <Avatar className="w-24 h-24 mb-3 shadow-lg border-2 border-violet-600/30 bg-gradient-to-tr from-violet-700/40 via-background to-indigo-900/30">
            {/* <AvatarImage src="/lovable-uploads/your-avatar.png" alt="Nina Pioquinto" /> */}
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
              <Tiktok className="w-7 h-7" />
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
              w-full text-base font-medium py-4 px-4 rounded-full
              bg-gradient-to-r from-violet-600/80 via-blue-700/70 to-indigo-800/80
              text-white shadow hover:brightness-110 hover:scale-105 transition
              border border-violet-400/40 hover:border-violet-400/80
              backdrop-blur-md luxury-button
            "
              variant="secondary"
            >
              <a
                href="/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit My Website
              </a>
            </Button>
            <Button
              className="
              w-full text-base font-medium py-4 px-4 rounded-full
              border-2 border-violet-400/40
              bg-black/40 hover:bg-violet-900/80
              text-violet-200 shadow hover:text-white
              transition hover:scale-105 luxury-button
            "
              variant="outline"
              onClick={() => {
                if (window.location.pathname === "/") {
                  const contactSection = document.getElementById("contact");
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: "smooth" });
                  } else {
                    window.location.href = "/#contact";
                  }
                } else {
                  window.location.href = "/#contact";
                }
              }}
            >
              Contact Me
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default LinkTree;
