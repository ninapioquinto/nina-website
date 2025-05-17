
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { ArrowRight, Crown, Gem } from 'lucide-react';

const services = [
    {
        name: "AI AUTOMATION",
        description: "Comprehensive AI automation solutions for your business",
        features: [
            "Lead qualification automation",
            "Full email & communication AI",
            "Smart scheduling & calendar optimization",
            "Multi-channel follow-up sequences",
            "Advanced analytics & reporting",
            "Custom AI workflows & integrations",
        ],
        ctaText: "Contact me",
        ctaHref: "#contact",
        highlight: true,
        icon: <Crown className="w-6 h-6 text-primary" />
    },
    {
        name: "CRM OPTIMIZATION",
        description: "Complete CRM setup, optimization and training",
        features: [
            "CRM platform selection consulting",
            "Advanced setup with custom workflows",
            "Full data migration & cleaning",
            "Comprehensive team training",
            "90 days of priority support",
            "Custom integrations & automations",
        ],
        ctaText: "Get started",
        ctaHref: "#contact",
        highlight: false,
        icon: <Gem className="w-6 h-6 text-primary" />
    },
];

const MyServices = () => {
    return (
        <section id="my-services" className="py-20 relative overflow-hidden backdrop-blur-sm bg-black/30">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto mb-16 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 reveal">
                        My <span className="bg-gradient-to-r from-[#9b87f5] via-[#7E69AB] to-[#8B5CF6] bg-clip-text text-transparent glow-text">Services</span>
                    </h2>
                    <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8 reveal">
                        I specialize in implementing AI automation solutions and optimizing CRM systems to streamline your business operations
                    </p>
                    
                    <div className="luxury-divider mx-auto w-32 mb-16"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {services.map((service, index) => (
                        <div 
                            key={index}
                            className={`relative group rounded-2xl border transition-all duration-500 luxury-card ${
                                service.highlight 
                                    ? "bg-gradient-to-b from-black/60 to-black/40 backdrop-blur-xl border-primary/20" 
                                    : "bg-black/40 backdrop-blur-xl border-white/10"
                            } hover:border-primary/30 hover:shadow-[0_8px_40px_-12px_rgba(139,92,246,0.3)]`}
                        >
                            <div className="p-10 flex flex-col h-full">
                                <div className="flex items-center space-x-3 mb-6">
                                    <div className="h-12 w-12 rounded-full bg-black/50 border border-primary/20 flex items-center justify-center">
                                        {service.icon}
                                    </div>
                                    <div>
                                        <h3 className={`text-lg uppercase tracking-wider font-medium ${
                                            service.highlight ? "text-gradient" : "text-white"
                                        }`}>
                                            {service.name}
                                        </h3>
                                        <p className={`text-sm ${
                                            service.highlight
                                                ? "text-white/70"
                                                : "text-white/60"
                                        }`}>
                                            {service.description}
                                        </p>
                                    </div>
                                </div>
                                
                                <div className={`h-px w-full mb-8 ${
                                    service.highlight
                                        ? "bg-gradient-to-r from-transparent via-primary/30 to-transparent"
                                        : "bg-white/10"
                                }`}></div>

                                <div className="mt-2 space-y-4 flex-grow">
                                    {service.features.map((feature, featureIndex) => (
                                        <div
                                            key={featureIndex}
                                            className="flex items-center gap-3"
                                        >
                                            <div className={
                                                service.highlight
                                                    ? "text-primary"
                                                    : "text-primary/80"
                                            }>
                                                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5">
                                                    <path d="M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path>
                                                </svg>
                                            </div>
                                            <span className={
                                                service.highlight
                                                    ? "text-white/90"
                                                    : "text-white/80"
                                            }>
                                                {feature}
                                            </span>
                                        </div>
                                    ))}
                                </div>

                                <div className="mt-8">
                                    <Button
                                        className={`w-full h-12 group relative ${
                                            service.highlight
                                                ? "bg-primary/20 hover:bg-primary/30 text-white border border-primary/30"
                                                : "bg-white/10 hover:bg-white/20 text-white border border-white/10"
                                        } transition-all duration-300`}
                                        asChild
                                    >
                                        <a href={service.ctaHref}>
                                            <span className="relative z-10 flex items-center justify-center gap-2 font-medium tracking-wide">
                                                {service.ctaText}
                                                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                                            </span>
                                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full"></div>
                                        </a>
                                    </Button>
                                </div>
                            </div>
                            
                            {service.highlight && (
                                <div className="absolute -top-4 -right-4 h-24 w-24 bg-gradient-to-br from-primary/20 to-transparent rounded-full blur-2xl"></div>
                            )}
                        </div>
                    ))}
                </div>
                
                {/* Enhanced background elements */}
                <div className="absolute left-0 top-1/4 w-64 h-64 bg-primary/10 rounded-full filter blur-[100px]"></div>
                <div className="absolute right-0 bottom-1/4 w-80 h-80 bg-accent-blue/10 rounded-full filter blur-[100px]"></div>
            </div>
        </section>
    );
};

export default MyServices;
