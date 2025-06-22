
import PortfolioCard from '../components/PortfolioCard';

const Portfolio = () => {
  const portfolioItems = [
    {
      id: "1",
      title: "AutoSupport AI – Intelligent Email Triage",
      description: "Designed an intelligent email triage system using AI to automatically identify, prioritize, and route customer emails in real time, saving 90% of manual sorting time.",
      image: "/lovable-uploads/c33e6ee7-cfe0-4654-af4d-14c950e0a46a.png",
      category: "AI Automation",
      technologies: ["Make (Integromat)", "OpenAI GPT-4o-mini", "Google Mail", "Slack", "Relevance AI"],
      results: "90% time saved on email sorting",
      client: "Customer Support Team"
    },
    {
      id: "2",
      title: "GHL Voice AI Agent – AI-Powered Voice Booking and Contact Sync",
      description: "Created a fully automated voice-to-booking workflow that connects incoming calls to CRM actions using AI, enabling 24/7 voice-to-calendar bookings without manual appointment setters.",
      image: "/lovable-uploads/4b10e90b-41e5-44e0-8e3b-68b2fa8cd602.png",
      category: "Voice Automation",
      technologies: ["Make (Integromat)", "OpenAI GPT-4o", "GoHighLevel", "Retell AI"],
      results: "24/7 automated voice bookings",
      client: "GoHighLevel Users"
    },
    {
      id: "3",
      title: "Social Media AutoPilot – AI-Powered Content Distribution Engine",
      description: "Built a fully automated system that transforms any article link into a complete multi-platform content campaign, eliminating manual repurposing and enabling consistent weekly publishing.",
      image: "/lovable-uploads/58da3295-08c3-4d16-9214-f7d1bd815361.png",
      category: "Content Automation",
      technologies: ["Make.com", "OpenAI GPT-4o", "Perplexity AI", "DALL·E 3", "Google Sheets"],
      results: "Consistent weekly publishing across 4 platforms",
      client: "Content Creator"
    },
    {
      id: "4",
      title: "SalesFlow AI Agent – Instant Personalized Follow-Ups for Sales Calls",
      description: "Built an AI-powered workflow that generates personalized follow-ups seconds after a prospect books a call, using real company insights and testimonials to deliver high-quality messages.",
      image: "/lovable-uploads/f33f1f05-555a-4043-8f47-babb6b1a2f95.png",
      category: "Sales Automation",
      technologies: ["n8n", "GPT-4.1", "Google Sheets", "Tavily", "LangChain", "Agent Stack"],
      results: "Instant personalized follow-ups in seconds",
      client: "Sales Team"
    },
    {
      id: "5",
      title: "AI Email Concierge – Intelligent Inbox Management for Busy Teams",
      description: "Designed a fully automated email management system that intelligently classifies incoming messages, drafts context-aware responses, and notifies the right people without delay.",
      image: "/lovable-uploads/ab61576f-da73-4131-bed5-4674c92cee7f.png",
      category: "Email Automation",
      technologies: ["n8n", "OpenAI GPT-4o", "Gmail", "Slack"],
      results: "Reduced manual inbox management time significantly",
      client: "Busy Teams"
    },
    {
      id: "6",
      title: "LeadGen AI (Social Edition) – Intelligent Social Content Extraction and Analysis",
      description: "Developed a content automation system that processes social media URLs, gathers public post and profile information, enriches it with AI-generated transcripts, and logs everything in Google Sheets.",
      image: "/lovable-uploads/cc9d382f-4232-40fb-9355-3cf96bcbc0d8.png",
      category: "Content Intelligence",
      technologies: ["n8n", "OpenAI GPT-4o-mini", "Apify", "Google Sheets", "LangChain"],
      results: "Reduced turnaround time from hours to under a minute",
      client: "Marketing Teams"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-12 pb-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-indigo-300 bg-clip-text text-transparent">
              Portfolio Showcase
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Real implementations and case studies showcasing how I build systems that save time, streamline operations, and drive business growth.
            </p>
          </div>

          {/* Portfolio Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {portfolioItems.map((item) => (
              <PortfolioCard
                key={item.id}
                {...item}
              />
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-20">
            <div className="bg-gradient-to-r from-purple-900/20 to-indigo-900/20 border border-purple-400/20 rounded-3xl p-8 max-w-2xl mx-auto">
              <h2 className="text-2xl font-bold text-white mb-4">
                Ready to Transform Your Business Operations?
              </h2>
              <p className="text-muted-foreground mb-6">
                These are just examples of what's possible. Let's discuss how I can build custom solutions for your specific needs.
              </p>
              <button 
                onClick={() => {
                  const element = document.getElementById('contact');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  } else {
                    window.location.href = '/#contact';
                  }
                }}
                className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-lg font-medium transition-colors"
              >
                Get Started Today
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
