import PortfolioCard from './PortfolioCard';

const PortfolioShowcase = () => {
  const portfolioItems = [
    {
      id: "1",
      title: "Custom CRM System Implementation",
      description: "Built a comprehensive CRM system for a service-based business that reduced manual work by 15 hours per week and streamlined client management processes.",
      image: "/lovable-uploads/c33e6ee7-cfe0-4654-af4d-14c950e0a46a.png",
      category: "CRM Systems",
      technologies: ["GoHighLevel", "Zapier", "Custom Workflows"],
      results: "15 hours saved per week",
      client: "Service Business"
    },
    {
      id: "2",
      title: "AI Automation Workflow",
      description: "Automated a complete client onboarding process using AI tools and workflow automation, eliminating manual data entry and reducing onboarding time from 2 weeks to 2 days.",
      image: "/lovable-uploads/4b10e90b-41e5-44e0-8e3b-68b2fa8cd602.png",
      category: "Automation",
      technologies: ["Make", "OpenAI", "Airtable"],
      results: "2 weeks to 2 days onboarding",
      client: "Growing Consultancy"
    },
    {
      id: "3",
      title: "Business Process Optimization",
      description: "Streamlined operations for a growing consulting firm by implementing automated workflows and data management systems that improved efficiency and client satisfaction.",
      image: "/lovable-uploads/58da3295-08c3-4d16-9214-f7d1bd815361.png",
      category: "Process Optimization",
      technologies: ["Zoho", "Custom APIs", "Workflow Design"],
      results: "40% efficiency increase",
      client: "Consulting Firm"
    },
    {
      id: "4",
      title: "GoHighLevel Integration Solution",
      description: "Developed custom integrations with GoHighLevel for better client management, including automated lead scoring and nurture campaigns that increased qualified leads by 55%.",
      image: "/lovable-uploads/f33f1f05-555a-4043-8f47-babb6b1a2f95.png",
      category: "Integrations",
      technologies: ["GoHighLevel", "API Integration", "Custom Fields"],
      results: "55% increase in qualified leads",
      client: "Marketing Agency"
    },
    {
      id: "5",
      title: "Data Migration & System Unification",
      description: "Successfully migrated a business from multiple spreadsheets and disconnected tools to a unified system without losing any data, creating a single source of truth.",
      image: "/lovable-uploads/ab61576f-da73-4131-bed5-4674c92cee7f.png",
      category: "Data Management",
      technologies: ["Airtable", "Data Migration Tools", "API Connectors"],
      results: "100% data integrity maintained",
      client: "E-commerce Business"
    },
    {
      id: "6",
      title: "Automated Sales Pipeline",
      description: "Created an intelligent sales pipeline with automated follow-ups and lead qualification that resulted in 20 hours saved weekly and improved conversion rates.",
      image: "/lovable-uploads/cc9d382f-4232-40fb-9355-3cf96bcbc0d8.png",
      category: "Sales Automation",
      technologies: ["n8n", "CRM Integration", "Email Automation"],
      results: "20 hours saved weekly",
      client: "SaaS Startup"
    }
  ];

  return (
    <section id="portfolio" className="py-32 relative">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-20">
            <div className="relative inline-block">
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-16 h-px bg-gradient-to-r from-transparent via-purple-400/60 to-transparent"></div>
              
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight tracking-tight mb-3 sm:mb-4 reveal">
                Portfolio{' '}
                <span className="bg-gradient-to-r from-purple-300 via-violet-200 to-indigo-300 bg-clip-text text-transparent">
                  Showcase
                </span>
              </h2>
              
              <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-24 h-px bg-gradient-to-r from-transparent via-purple-400/40 to-transparent"></div>
            </div>
            
            <p className="text-xl text-white/80 mb-16 max-w-3xl mx-auto leading-relaxed reveal">
              Real implementations and case studies showcasing how I build systems that save time, streamline operations, and drive business growth.
            </p>
          </div>

          {/* Portfolio Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
            {portfolioItems.map((item) => (
              <PortfolioCard
                key={item.id}
                {...item}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioShowcase;
