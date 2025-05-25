
import { useEffect, useRef } from 'react';

const LOGOS = [
  { name: 'Make (Integromat)', url: '/lovable-uploads/4b10e90b-41e5-44e0-8e3b-68b2fa8cd602.png' },
  { name: 'Zapier', url: '/lovable-uploads/1c7d3271-99e0-4c12-b3f9-0b9e16b4271e.png' },
  { name: 'GoHighLevel', url: '/lovable-uploads/ad381596-e264-4e66-b4a3-54b2ee7d3d58.png' },
  { name: 'Airtable', url: '/lovable-uploads/c33e6ee7-cfe0-4654-af4d-14c950e0a46a.png' },
  { name: 'n8n', url: '/lovable-uploads/51fbf942-8f61-45e4-ab98-8cb2b5b9f7ff.png' },
  { name: 'Monday.com', url: '/lovable-uploads/f453d086-abac-470e-bda5-4137a7c03ffc.png' },
  { name: 'ClickUp', url: '/lovable-uploads/1fffe66c-3cf3-4354-961f-584a332d76ec.png' },
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
