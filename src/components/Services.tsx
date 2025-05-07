
import { ArrowRight } from 'lucide-react';
import { PricingCards } from './ui/pricing-cards';

const aiAutomationFeatures = [
  { name: "Custom AI workflow design", included: true },
  { name: "GPT integration & prompt engineering", included: true },
  { name: "Document processing automation", included: true },
  { name: "Intelligent data extraction", included: true },
  { name: "Natural language processing", included: true },
  { name: "Automated reporting & insights", included: true },
];

const crmOptimizationFeatures = [
  { name: "Custom CRM setup & configuration", included: true },
  { name: "Workflow automation", included: true },
  { name: "Data migration & integration", included: true },
  { name: "Lead scoring & segmentation", included: true },
  { name: "Analytics & reporting", included: true },
  { name: "Training & support", included: true },
];

const serviceTiers = [
  {
    name: "AI AUTOMATION",
    price: 0,
    description: "Leverage cutting-edge AI technologies to automate your business processes and enhance productivity",
    features: aiAutomationFeatures,
    highlight: true,
    cta: {
      text: "Get Started with AI",
      href: "#contact",
    },
  },
  {
    name: "CRM OPTIMIZATION",
    price: 0,
    description: "Streamline your customer relationship management with powerful automation and integration solutions",
    features: crmOptimizationFeatures,
    cta: {
      text: "Optimize Your CRM",
      href: "#contact",
    },
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-gradient-to-b from-black to-[#0a0a0c] relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center reveal">
            My <span className="text-gradient">Services</span>
          </h2>
          <p className="text-center text-lg text-white/70 mb-16 max-w-2xl mx-auto reveal">
            Expert solutions tailored to your business needs
          </p>
        </div>
        
        <PricingCards 
          tiers={serviceTiers}
          className="gap-8"
          containerClassName="py-0"
          sectionClassName="py-0 bg-transparent"
          cardClassName="bg-opacity-10 backdrop-blur-sm dark:bg-opacity-10"
        />

        {/* Ambient glow effect */}
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[300px] rounded-full bg-primary/5 blur-[100px] -z-10 opacity-60"></div>
        <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] rounded-full bg-accent-blue/5 blur-[100px] -z-10 opacity-60"></div>
      </div>
    </section>
  );
};

export default Services;
