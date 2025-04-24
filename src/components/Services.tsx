
import React, { useState, useEffect } from 'react';
import { phone, home, user, calendar, send, MessageSquare } from 'lucide-react';
import { Card, CardContent } from './ui/card';

interface Service {
  icon: React.ReactNode;
  title: string;
  actions: string[];
}

const services: Service[] = [
  {
    icon: <phone className="w-6 h-6 text-green-400" />,
    title: "Phone Appointment",
    actions: ["Book Calendar Event", "Send Email"]
  },
  {
    icon: <home className="w-6 h-6 text-sky-400" />,
    title: "Airbnb Concierge",
    actions: ["Get House Info", "Send Email"]
  },
  {
    icon: <user className="w-6 h-6 text-violet-400" />,
    title: "Realtor",
    actions: ["Book Calendar Event", "Send Email"]
  },
  {
    icon: <MessageSquare className="w-6 h-6 text-pink-400" />,
    title: "Customer Intake",
    actions: ["Create Contact", "Book Calendar Event"]
  }
];

const Services = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % services.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 bg-black/30 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center reveal">
            Our <span className="text-gradient">Services</span>
          </h2>
          <p className="text-center text-lg text-white/70 mb-16 max-w-2xl mx-auto reveal">
            Streamlined solutions for modern businesses
          </p>

          <div className="relative h-[200px] reveal">
            {services.map((service, index) => (
              <Card
                key={service.title}
                className={`absolute w-full transition-all duration-500 ease-in-out 
                  ${index === activeIndex ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} 
                  bg-accent/20 border border-white/10 backdrop-blur-sm`}
              >
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    {service.icon}
                    <h3 className="text-xl font-semibold text-white">
                      {service.title}
                    </h3>
                  </div>
                  <div className="flex gap-4 items-center">
                    {service.actions.map((action, i) => (
                      <button
                        key={i}
                        className="flex items-center gap-2 px-4 py-2 rounded-full 
                        bg-white/5 hover:bg-white/10 border border-white/10 
                        transition-colors duration-300 text-sm text-white/70
                        hover:text-white group"
                      >
                        {i === 0 ? <calendar className="w-4 h-4" /> : <send className="w-4 h-4" />}
                        {action}
                      </button>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
