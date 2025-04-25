
import React, { useState, useEffect } from 'react';
import { 
  Phone, FileText, ClipboardList, Receipt, Home, 
  UserPlus, RefreshCw, Calendar, Send, Check, Mail, Box 
} from 'lucide-react';
import { Card, CardContent } from './ui/card';

interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
  actions: string[];
}

const services: Service[] = [
  {
    icon: <Phone className="w-6 h-6 text-green-400" />,
    title: "Lead Qualification",
    description: "Qualify leads instantly",
    actions: ["Ask pre-screening questions", "Send follow-up email", "Book calendar event"]
  },
  {
    icon: <Box className="w-6 h-6 text-blue-400" />,
    title: "Order Support",
    description: "Handle order status inquiries",
    actions: ["Track order via API", "Send order updates", "Escalate to human agent if needed"]
  },
  {
    icon: <ClipboardList className="w-6 h-6 text-purple-400" />,
    title: "Intake Automation",
    description: "Collect client details with ease",
    actions: ["Gather form responses", "Sync with CRM", "Create new record"]
  },
  {
    icon: <Receipt className="w-6 h-6 text-yellow-400" />,
    title: "Invoice Follow-Up",
    description: "Recover unpaid invoices",
    actions: ["Detect overdue payments", "Send payment reminders", "Schedule next follow-up"]
  },
  {
    icon: <Home className="w-6 h-6 text-pink-400" />,
    title: "Real Estate Inquiry",
    description: "Respond to property questions",
    actions: ["Share property info", "Schedule viewings", "Send agent intro email"]
  },
  {
    icon: <UserPlus className="w-6 h-6 text-indigo-400" />,
    title: "Onboarding Assistant",
    description: "Welcome new users",
    actions: ["Provide onboarding guide", "Create CRM entry", "Send custom welcome email"]
  },
  {
    icon: <RefreshCw className="w-6 h-6 text-cyan-400" />,
    title: "Subscription Renewal",
    description: "Automate renewals & reminders",
    actions: ["Track subscription end dates", "Send renewal reminders", "Link to payment"]
  },
  {
    icon: <Calendar className="w-6 h-6 text-rose-400" />,
    title: "Event Registration Bot",
    description: "Manage event sign-ups",
    actions: ["Register attendees", "Send confirmation", "Add to calendar"]
  }
];

const Services = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('services-section');
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  const firstRow = services.slice(0, 4);
  const secondRow = services.slice(4);

  return (
    <section id="services-section" className="py-24 bg-black/30 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center reveal">
            Grow Smarter, <span className="text-gradient">Not Harder</span>
          </h2>
          <p className="text-center text-lg text-white/70 mb-16 max-w-2xl mx-auto reveal">
            AI agents designed to automate your operations and elevate the customer experience
          </p>

          <div className="space-y-12 relative">
            {/* First Row - Moving Left */}
            <div className={`flex gap-6 transition-all duration-1000 ${isVisible ? 'animate-slide-left' : 'opacity-0'}`}>
              <div className="flex gap-6 animate-scroll-left">
                {[...firstRow, ...firstRow].map((service, index) => (
                  <Card key={index} className="min-w-[300px] flex-shrink-0 bg-accent/20 border border-white/10 backdrop-blur-sm">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4 mb-4">
                        {service.icon}
                        <div>
                          <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                          <p className="text-white/70">{service.description}</p>
                        </div>
                      </div>
                      <div className="flex flex-col gap-2">
                        {service.actions.map((action, i) => (
                          <button
                            key={i}
                            className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 transition-colors text-sm text-white/70 hover:text-white"
                          >
                            {i === 0 ? <Check className="w-4 h-4" /> : 
                             i === 1 ? <Mail className="w-4 h-4" /> :
                             <Send className="w-4 h-4" />}
                            {action}
                          </button>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Second Row - Moving Right */}
            <div className={`flex gap-6 transition-all duration-1000 ${isVisible ? 'animate-slide-right' : 'opacity-0'}`}>
              <div className="flex gap-6 animate-scroll-right">
                {[...secondRow, ...secondRow].map((service, index) => (
                  <Card key={index} className="min-w-[300px] flex-shrink-0 bg-accent/20 border border-white/10 backdrop-blur-sm">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4 mb-4">
                        {service.icon}
                        <div>
                          <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                          <p className="text-white/70">{service.description}</p>
                        </div>
                      </div>
                      <div className="flex flex-col gap-2">
                        {service.actions.map((action, i) => (
                          <button
                            key={i}
                            className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 transition-colors text-sm text-white/70 hover:text-white"
                          >
                            {i === 0 ? <Check className="w-4 h-4" /> : 
                             i === 1 ? <Mail className="w-4 h-4" /> :
                             <Send className="w-4 h-4" />}
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
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll-left {
          from { transform: translateX(0); }
          to { transform: translateX(calc(-300px * 4 - 1.5rem * 4)); }
        }

        @keyframes scroll-right {
          from { transform: translateX(calc(-300px * 4 - 1.5rem * 4)); }
          to { transform: translateX(0); }
        }

        .animate-scroll-left {
          animation: scroll-left 20s linear infinite;
        }

        .animate-scroll-right {
          animation: scroll-right 20s linear infinite;
        }

        .animate-slide-left {
          transform: translateX(0);
          opacity: 1;
        }

        .animate-slide-right {
          transform: translateX(0);
          opacity: 1;
        }
      `}</style>
    </section>
  );
};

export default Services;
