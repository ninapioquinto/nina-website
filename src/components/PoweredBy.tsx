
import { useEffect, useRef } from 'react';

const LOGOS = [
  { name: 'Make (Integromat)', url: '/tools/make-logo.svg' },
  { name: 'Zapier', url: '/tools/zapier-logo.svg' },
  { name: 'GoHighLevel', url: '/tools/gohighlevel-logo.svg' },
  { name: 'Airtable', url: '/tools/airtable-logo.svg' },
  { name: 'n8n', url: '/tools/n8n-logo.svg' },
  { name: 'Monday.com', url: '/tools/monday-logo.svg' },
  { name: 'OpenAI', url: '/tools/openai-logo.svg' },
  { name: 'Notion', url: '/tools/notion-logo.svg' },
  { name: 'ClickUp', url: '/tools/clickup-logo.svg' },
];

const PoweredBy = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const scroll = () => {
      if (scrollContainer.scrollLeft + scrollContainer.clientWidth >= scrollContainer.scrollWidth) {
        scrollContainer.scrollLeft = 0;
      } else {
        scrollContainer.scrollLeft += 1;
      }
    };

    const interval = setInterval(scroll, 30);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full py-12 bg-background/50 backdrop-blur-sm border-y border-white/5">
      <div className="container mx-auto px-4">
        <h3 className="text-center text-sm text-white/60 mb-8 font-light tracking-wider">
          Powered by the Industry's Leading Tools
        </h3>
        
        <div className="relative">
          {/* Gradient Masks */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
          
          {/* Scrolling Container */}
          <div 
            ref={scrollRef}
            className="flex gap-16 overflow-x-hidden whitespace-nowrap py-4 items-center"
          >
            {/* Double the logos for seamless loop */}
            {[...LOGOS, ...LOGOS].map((logo, index) => (
              <div
                key={`${logo.name}-${index}`}
                className="inline-flex flex-none items-center justify-center group"
              >
                <div className="w-24 h-12 flex items-center justify-center opacity-60 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300">
                  <img
                    src={logo.url}
                    alt={logo.name}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PoweredBy;
