
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';

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
        highlight: true
    },
    {
        name: "CRM BUILD-OUT",
        description: "Complete CRM setup and optimization",
        features: [
            "CRM platform selection consulting",
            "Advanced setup with custom workflows",
            "Full data migration & cleaning",
            "System Handover with Documentation",
            "End-to-end implementation",
            "Custom integrations & automations",
        ],
        ctaText: "Get started",
        ctaHref: "#contact",
        highlight: false
    },
];

const MyServices = () => {
    return (
        <section id="my-services" className="py-20 relative overflow-hidden backdrop-blur-sm bg-black/10">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto mb-16 text-center">
                    <h2 className="font-inter text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-white leading-tight mb-6 reveal">
                        My <span className="bg-gradient-to-r from-[#9b87f5] via-[#7E69AB] to-[#8B5CF6] bg-clip-text text-transparent">Services</span>
                    </h2>
                    <div className="flex items-center justify-center mb-8">
                        <div className="w-12 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>
                        <div className="mx-4 w-1.5 h-1.5 rounded-full bg-white/60"></div>
                        <div className="w-12 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>
                    </div>
                    <p className="text-lg text-white/80 max-w-2xl mx-auto mb-16 reveal">
                        I specialize in implementing AI automation solutions and optimizing CRM systems to streamline your business operations
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {services.map((service, index) => (
                        <div 
                            key={index}
                            className={`relative group rounded-2xl border transition-all duration-500 ${
                                service.highlight 
                                    ? "bg-black/20 backdrop-blur-lg border-purple-500/30 hover:border-purple-400/50" 
                                    : "bg-accent/20 backdrop-blur-lg border-white/10"
                            } hover:border-primary/30 hover:shadow-[0_8px_40px_-12px_rgba(139,92,246,0.3)]`}
                        >
                            <div className="p-10 flex flex-col h-full">
                                <div className="space-y-4">
                                    <h3 className="text-lg uppercase tracking-wider font-medium text-white">
                                        {service.name}
                                    </h3>
                                    <p className={`text-sm pb-6 border-b ${
                                        service.highlight
                                            ? "text-white/70 border-purple-500/20"
                                            : "text-white/70 border-white/10"
                                    }`}>
                                        {service.description}
                                    </p>
                                </div>

                                <div className="mt-8 space-y-4 flex-grow">
                                    {service.features.map((feature, featureIndex) => (
                                        <div
                                            key={featureIndex}
                                            className="flex items-center gap-3"
                                        >
                                            <div className={
                                                service.highlight
                                                    ? "text-purple-400"
                                                    : "text-white"
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
                                                ? "bg-gradient-to-r from-purple-600/20 via-violet-600/20 to-indigo-600/20 border border-purple-400/40 text-white backdrop-blur-sm hover:from-purple-600/30 hover:via-violet-600/30 hover:to-indigo-600/30 hover:border-purple-300/60"
                                                : "bg-white/10 hover:bg-white/20 text-white border border-white/10"
                                        } transition-all duration-300`}
                                        asChild
                                    >
                                        <a href={service.ctaHref}>
                                            <span className="relative z-10 flex items-center justify-center gap-2 font-medium tracking-wide">
                                                {service.ctaText}
                                                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                                            </span>
                                        </a>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                
                {/* Background elements - using subtle glows that complement the new background */}
                <div className="absolute left-0 top-1/4 w-64 h-64 bg-primary/10 rounded-full filter blur-3xl"></div>
                <div className="absolute right-0 bottom-1/4 w-80 h-80 bg-accent-blue/10 rounded-full filter blur-3xl"></div>
            </div>
        </section>
    );
};

export default MyServices;
