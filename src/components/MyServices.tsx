
import { PricingCards } from './ui/pricing-cards';

const aiAutomationTiers = [
    {
        name: "BASIC AUTOMATION",
        price: 1499,
        description: "Perfect for small businesses looking to automate routine tasks",
        features: [
            { name: "Lead qualification automation", included: true },
            { name: "Email response handling", included: true },
            { name: "Basic appointment scheduling", included: true },
            { name: "Customer follow-up sequences", included: true },
            { name: "Basic analytics dashboard", included: true },
            { name: "Custom AI workflows", included: false },
        ],
        cta: {
            text: "Get started",
            href: "#contact",
        }
    },
    {
        name: "ADVANCED AI SUITE",
        price: 2999,
        interval: "quarterly",
        description: "Comprehensive AI automation for growing businesses",
        highlight: true,
        features: [
            { name: "Full lead management automation", included: true },
            { name: "Advanced email & communication AI", included: true },
            { name: "Smart scheduling & calendar optimizations", included: true },
            { name: "Multi-channel follow-up sequences", included: true },
            { name: "Advanced analytics & reporting", included: true },
            { name: "Custom AI workflows & integrations", included: true },
        ],
        cta: {
            text: "Contact me",
            href: "#contact",
        }
    },
];

const crmOptimizationTiers = [
    {
        name: "CRM SETUP",
        price: 1299,
        description: "Get your CRM properly configured and optimized",
        features: [
            { name: "CRM platform selection consulting", included: true },
            { name: "Basic setup and configuration", included: true },
            { name: "Data migration assistance", included: true },
            { name: "User training (2 sessions)", included: true },
            { name: "30 days of support", included: true },
            { name: "Custom integrations", included: false },
        ],
        cta: {
            text: "Learn more",
            href: "#contact",
        }
    },
    {
        name: "FULL CRM OPTIMIZATION",
        price: 3499,
        interval: "project",
        description: "Comprehensive CRM strategy and implementation",
        highlight: true,
        features: [
            { name: "Complete CRM strategy development", included: true },
            { name: "Advanced setup with custom workflows", included: true },
            { name: "Full data migration & cleaning", included: true },
            { name: "Comprehensive team training", included: true },
            { name: "90 days of priority support", included: true },
            { name: "Custom integrations & automations", included: true },
        ],
        cta: {
            text: "Contact me",
            href: "#contact",
        }
    },
];

const MyServices = () => {
    return (
        <section id="my-services" className="py-20 relative overflow-hidden bg-black/20 backdrop-blur-sm">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto mb-16 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 reveal">
                        My <span className="text-gradient">Services</span>
                    </h2>
                    <p className="text-lg text-white/70 max-w-2xl mx-auto mb-16 reveal">
                        I specialize in implementing AI automation solutions and optimizing CRM systems to streamline your business operations
                    </p>
                </div>

                <div className="mb-20">
                    <h3 className="text-2xl font-semibold mb-8 text-center reveal">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-accent-blue to-primary">AI Automation</span>
                    </h3>
                    <PricingCards 
                        tiers={aiAutomationTiers}
                        className="gap-6"
                        containerClassName="py-6"
                        sectionClassName="py-8"
                    />
                </div>
                
                <div>
                    <h3 className="text-2xl font-semibold mb-8 text-center reveal">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-accent-pink to-primary">CRM Optimization</span>
                    </h3>
                    <PricingCards 
                        tiers={crmOptimizationTiers}
                        className="gap-6"
                        containerClassName="py-6"
                        sectionClassName="py-8"
                    />
                </div>
                
                {/* Background elements */}
                <div className="absolute left-0 top-1/4 w-64 h-64 bg-primary/5 rounded-full filter blur-3xl"></div>
                <div className="absolute right-0 bottom-1/4 w-80 h-80 bg-accent-blue/5 rounded-full filter blur-3xl"></div>
            </div>
        </section>
    );
};

export default MyServices;
