
import { PricingCards } from './ui/pricing-cards';

const serviceTiers = [
    {
        name: "AI AUTOMATION",
        price: 2999,
        interval: "quarterly",
        description: "Comprehensive AI automation solutions for your business",
        highlight: true,
        features: [
            { name: "Lead qualification automation", included: true },
            { name: "Full email & communication AI", included: true },
            { name: "Smart scheduling & calendar optimization", included: true },
            { name: "Multi-channel follow-up sequences", included: true },
            { name: "Advanced analytics & reporting", included: true },
            { name: "Custom AI workflows & integrations", included: true },
        ],
        cta: {
            text: "Contact me",
            href: "#contact",
        }
    },
    {
        name: "CRM OPTIMIZATION",
        price: 3499,
        interval: "project",
        description: "Complete CRM setup, optimization and training",
        highlight: false,
        features: [
            { name: "CRM platform selection consulting", included: true },
            { name: "Advanced setup with custom workflows", included: true },
            { name: "Full data migration & cleaning", included: true },
            { name: "Comprehensive team training", included: true },
            { name: "90 days of priority support", included: true },
            { name: "Custom integrations & automations", included: true },
        ],
        cta: {
            text: "Get started",
            href: "#contact",
        }
    },
];

const MyServices = () => {
    return (
        <section id="my-services" className="py-20 relative overflow-hidden backdrop-blur-sm bg-black/10">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto mb-16 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 reveal">
                        My <span className="text-gradient">Services</span>
                    </h2>
                    <p className="text-lg text-white/80 max-w-2xl mx-auto mb-16 reveal">
                        I specialize in implementing AI automation solutions and optimizing CRM systems to streamline your business operations
                    </p>
                </div>

                <PricingCards 
                    tiers={serviceTiers}
                    className="gap-8"
                    containerClassName="py-6"
                    sectionClassName="py-8 bg-transparent"
                />
                
                {/* Background elements - using subtle glows that complement the new background */}
                <div className="absolute left-0 top-1/4 w-64 h-64 bg-primary/10 rounded-full filter blur-3xl"></div>
                <div className="absolute right-0 bottom-1/4 w-80 h-80 bg-accent-blue/10 rounded-full filter blur-3xl"></div>
            </div>
        </section>
    );
};

export default MyServices;
