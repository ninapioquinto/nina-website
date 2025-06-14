
import { Button } from "@/components/ui/button";
import { Instagram, Github } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";

const LinkTree = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-violet-900/90 via-indigo-900/90 to-zinc-900/95 px-4">
      <div className="w-full max-w-xs flex flex-col gap-7 items-center bg-background/80 p-6 rounded-xl border border-white/10 shadow-lg backdrop-blur">
        <div className="flex flex-col items-center gap-2">
          {/* Avatar or name could be added here */}
          <div className="text-lg font-semibold text-foreground mb-1">Nina Pioquinto</div>
          <div className="text-xs text-muted-foreground">@automationcrmexpert</div>
        </div>

        <Button 
          className="w-full text-base gap-2" 
          asChild
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
          className="w-full text-base gap-2"
          variant="default"
          onClick={() => {
            // scroll to contact section if present on homepage, otherwise go home
            if (window.location.pathname === "/") {
              const contactSection = document.getElementById("contact");
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: "smooth" });
              } else {
                navigate("/");
                setTimeout(() => {
                  const el = document.getElementById("contact");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }, 500);
              }
            } else {
              navigate("/#contact");
            }
          }}
        >
          Contact Me
        </Button>

        <div className="flex gap-5 mt-2 justify-center items-center">
          {/* Instagram */}
          <a
            href="https://www.instagram.com/automationcrmexpert"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <Instagram className="h-6 w-6 text-pink-500 hover:scale-110 transition-transform" />
          </a>
          {/* TikTok Placeholder */}
          <a
            href="https://www.tiktok.com/@automationcrmexpert"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="TikTok"
            className="flex items-center justify-center"
          >
            <span 
              className="inline-block align-middle"
              title="TikTok"
              // Minimal TikTok logo using SVG
            >
              <svg viewBox="0 0 20 20" fill="none" className="w-6 h-6">
                <circle cx="10" cy="10" r="10" fill="#000" />
                <path d="M13.5 7.5V12a3.5 3.5 0 11-3.5-3.45V7.11a5 5 0 105 4.89V7.5h-1.5z" fill="#fff"/>
                <path d="M13.5 3V12a3.5 3.5 0 01-7 0V8a1 1 0 012 0v4a1.5 1.5 0 003 0V3h2z" fill="#25F4EE"/>
                <path d="M13.5 5.5V12a3.5 3.5 0 01-7 0V8a1 1 0 012 0v4a1.5 1.5 0 003 0V5.5h2z" fill="#FE2C55"/>
              </svg>
            </span>
          </a>
          {/* GitHub */}
          <a
            href="https://github.com/ninapioquinto"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <Github className="h-6 w-6 text-gray-300 hover:scale-110 transition-transform" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default LinkTree;
