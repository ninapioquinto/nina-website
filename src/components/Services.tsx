
import React, { useState, useEffect } from 'react';
import { PricingCard } from './ui/pricing-card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';

const AI_AUTOMATION_TIERS = [
  {
    name: "Basic Automation",
    price: {
      monthly: 49,
      yearly: 490,
    },
    description: "Essential AI tools for small businesses",
    features: [
      "Email response automation",
      "Basic customer inquiries",
      "Lead qualification",
      "3 AI workflows",
      "Standard support"
    ],
    cta: "Start Automating",
  },
  {
    name: "Advanced AI Suite",
    price: {
      monthly: 129,
      yearly: 1290,
    },
    description: "Comprehensive AI automation for growing teams",
    features: [
      "All Basic features",
      "Custom AI workflows",
      "API integrations",
      "Advanced analytics",
      "Intelligent handoff to humans",
      "Priority support"
    ],
    cta: "Get Advanced AI",
    highlighted: true,
    popular: true,
  },
];

const CRM_OPTIMIZATION_TIERS = [
  {
    name: "CRM Essentials",
    price: {
      monthly: 59,
      yearly: 590,
    },
    description: "Streamline your customer relationships",
    features: [
      "Data migration & cleanup",
      "Basic automation rules",
      "Standard reporting",
      "Email templates",
      "Training resources"
    ],
    cta: "Optimize Your CRM",
  },
  {
    name: "CRM Enterprise",
    price: {
      monthly: 149,
      yearly: 1490,
    },
    description: "Complete CRM transformation for maximum efficiency",
    features: [
      "All Essentials features",
      "Custom workflows & fields",
      "Advanced integrations",
      "AI recommendations",
      "Dedicated success manager",
      "24/7 priority support"
    ],
    cta: "Transform Your CRM",
    highlighted: true,
    popular: true,
  },
];

const Services = () => {
  const [paymentFrequency, setPaymentFrequency] = useState("monthly");
  const [activeService, setActiveService] = useState("ai");
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

  const toggleService = (service: string) => {
    setActiveService(service);
  };

  const toggleFrequency = (frequency: string) => {
    setPaymentFrequency(frequency);
  };

  return (
    <section id="services-section" className="py-24 bg-black/30 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center reveal">
            Elevate Your Business with <span className="text-gradient">Smart Solutions</span>
          </h2>
          <p className="text-center text-lg text-white/70 mb-12 max-w-2xl mx-auto reveal">
            Choose the service that aligns with your business needs and growth objectives
          </p>

          <div className={`space-y-8 relative transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            {/* Service Type Selector */}
            <Tabs defaultValue="ai" className="w-full" onValueChange={toggleService}>
              <div className="flex justify-center mb-8">
                <TabsList className="bg-accent/20 border border-white/10 backdrop-blur-sm">
                  <TabsTrigger 
                    value="ai"
                    className={`${activeService === 'ai' ? 'data-[state=active]:bg-primary' : ''} px-6 py-3`}
                  >
                    AI Automation
                  </TabsTrigger>
                  <TabsTrigger 
                    value="crm"
                    className={`${activeService === 'crm' ? 'data-[state=active]:bg-primary' : ''} px-6 py-3`}
                  >
                    CRM Optimization
                  </TabsTrigger>
                </TabsList>
              </div>

              {/* Payment Frequency Selector */}
              <div className="flex justify-center mb-10">
                <div className="flex items-center gap-4 bg-accent/10 p-2 rounded-full">
                  <button
                    onClick={() => toggleFrequency("monthly")}
                    className={`px-4 py-2 rounded-full transition-all ${
                      paymentFrequency === "monthly"
                        ? "bg-primary text-white"
                        : "text-white/70"
                    }`}
                  >
                    Monthly
                  </button>
                  <button
                    onClick={() => toggleFrequency("yearly")}
                    className={`px-4 py-2 rounded-full transition-all ${
                      paymentFrequency === "yearly"
                        ? "bg-primary text-white"
                        : "text-white/70"
                    }`}
                  >
                    Yearly (10% off)
                  </button>
                </div>
              </div>

              <TabsContent value="ai" className="mt-0">
                <div className="grid gap-6 md:grid-cols-2">
                  {AI_AUTOMATION_TIERS.map((tier) => (
                    <PricingCard key={tier.name} tier={tier} paymentFrequency={paymentFrequency} />
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="crm" className="mt-0">
                <div className="grid gap-6 md:grid-cols-2">
                  {CRM_OPTIMIZATION_TIERS.map((tier) => (
                    <PricingCard key={tier.name} tier={tier} paymentFrequency={paymentFrequency} />
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>

      {/* Background gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.15),rgba(255,255,255,0))]"></div>
    </section>
  );
};

export default Services;
