import { useEffect, useRef } from 'react';

const LOGOS = [
  { name: 'Make (Integromat)', url: '/lovable-uploads/4b10e90b-41e5-44e0-8e3b-68b2fa8cd602.png' },
  { name: 'Zapier', url: '/lovable-uploads/1c7d3271-99e0-4c12-b3f9-0b9e16b4271e.png' },
  { name: 'GoHighLevel', url: '/lovable-uploads/ad381596-e264-4e66-b4a3-54b2ee7d3d58.png' },
  { name: 'Airtable', url: '/lovable-uploads/c33e6ee7-cfe0-4654-af4d-14c950e0a46a.png' },
  { name: 'n8n', url: '/lovable-uploads/4eb653f3-93b0-4ded-9590-31b023d045dd.png' },
  { name: 'Monday.com', url: '/lovable-uploads/f453d086-abac-470e-bda5-4137a7c03ffc.png' },
  { name: 'ClickUp', url: '/lovable-uploads/1fffe66c-3cf3-4354-961f-584a332d76ec.png' },
  { name: 'SuiteDash', url: '/lovable-uploads/f7286aae-2fbc-412b-bca6-9b66f6c00429.png' },
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
    <section className="w-full py-16 bg-white/5 backdrop-blur-lg border-y border-white/20 relative">
      <div className="container mx-auto px-4">
        <h3 className="text-center text-lg text-white font-medium mb-12 tracking-wide">
          Powered by the Industry's Leading Tools
        </h3>
        
        <div className="relative">
          {/* Enhanced Gradient Masks for better visibility */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white/5 to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white/5 to-transparent z-10" />
          
          {/* Scrolling Container with improved styling */}
          <div 
            ref={scrollRef}
            className="flex gap-12 overflow-x-hidden whitespace-nowrap py-6 items-center"
          >
            {/* Double the logos for seamless loop */}
            {[...LOGOS, ...LOGOS].map((logo, index) => (
              <div
                key={`${logo.name}-${index}`}
                className="inline-flex flex-none items-center justify-center group"
              >
                <div className="w-28 h-16 flex items-center justify-center bg-white/10 rounded-lg p-3 backdrop-blur-sm border border-white/10 opacity-80 hover:opacity-100 hover:bg-white/15 transition-all duration-300 hover:scale-105">
                  <img
                    src={logo.url}
                    alt={logo.name}
                    className="max-w-full max-h-full object-contain filter brightness-110 contrast-110"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Background decoration for better visual separation */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent-purple/5 pointer-events-none"></div>
    </section>
  );
};

export default PoweredBy;
