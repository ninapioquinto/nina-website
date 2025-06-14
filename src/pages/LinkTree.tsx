import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Instagram, Github } from "lucide-react";
import React from "react";

const tiktokSvg = (
  <svg viewBox="0 0 20 20" fill="none" className="w-6 h-6">
    <circle cx="10" cy="10" r="10" fill="#000" />
    <path d="M13.5 7.5V12a3.5 3.5 0 11-3.5-3.45V7.11a5 5 0 105 4.89V7.5h-1.5z" fill="#fff"/>
    <path d="M13.5 3V12a3.5 3.5 0 01-7 0V8a1 1 0 012 0v4a1.5 1.5 0 003 0V3h2z" fill="#25F4EE"/>
    <path d="M13.5 5.5V12a3.5 3.5 0 01-7 0V8a1 1 0 012 0v4a1.5 1.5 0 003 0V5.5h2z" fill="#FE2C55"/>
  </svg>
);

const LinkTree = () => {
  return (
    <div className="flex justify-center px-4">
      <div className="w-full max-w-md flex flex-col items-center gap-7 p-8 rounded-3xl bg-background/80 border border-white/10 shadow-xl backdrop-blur-lg">
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
        <div className="flex flex-row gap-6 mt-1 mb-1">
          {/* Instagram */}
          <a
            href="https://www.instagram.com/automationcrmexpert"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-gradient-to-br from-pink-500/80 to-purple-700/80 hover:scale-110 transition-transform shadow hover:shadow-pink-400/40 p-2"
            aria-label="Instagram"
          >
            <Instagram className="w-6 h-6 text-white drop-shadow" />
          </a>
          {/* TikTok */}
          <a
            href="https://www.tiktok.com/@automationcrmexpert"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-gradient-to-br from-black/80 to-violet-950/90 hover:scale-110 transition-transform shadow hover:shadow-white/20 p-2"
            aria-label="TikTok"
          >
            {tiktokSvg}
          </a>
          {/* GitHub */}
          <a
            href="https://github.com/ninapioquinto"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-gradient-to-br from-gray-600/90 to-zinc-900/80 hover:scale-110 transition-transform shadow hover:shadow-indigo-400/30 p-2"
            aria-label="GitHub"
          >
            <Github className="w-6 h-6 text-white drop-shadow" />
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
  );
};

export default LinkTree;
