
export interface PortfolioItem {
  id: string;
  title: string;
  description: string;
  fullDescription?: string;
  image: string;
  category: string;
  technologies: string[];
  results: string;
  client: string;
  role?: string;
  challenge?: string;
  workflowSteps?: {
    title: string;
    description: string;
    bullets: string[];
  }[];
  supportingAutomations?: string[];
  outcomes?: string[];
  projectSummary?: string;
}

export const portfolioItems: PortfolioItem[] = [
  {
    id: "1",
    title: "Coaching Client Journey – Streamlined Lead-to-Client Pipeline",
    description: "Built a comprehensive end-to-end pipeline system in GoHighLevel that transforms scattered lead management...",
    fullDescription: "Built a comprehensive end-to-end pipeline system in GoHighLevel that transforms scattered lead management into a streamlined client journey with automated follow-ups.",
    image: "/lovable-uploads/7657234a-dd92-4d99-b33f-0708e3ca8559.png",
    category: "CRM Automation",
    technologies: ["GoHighLevel", "Stripe", "Airtable", "+2"],
    results: "Streamlined client journey with automated follow-ups",
    client: "Business Coach"
  },
  {
    id: "2",
    title: "Florida Realty CRM: Custom CRM System for Real Estate Deal Flow",
    description: "Developed a fully customized CRM tailored to the daily operations of a Florida-based real estate business. Using...",
    fullDescription: "Developed a fully customized CRM tailored to the daily operations of a Florida-based real estate business. Using advanced automation workflows to streamline deal management.",
    image: "/lovable-uploads/7657234a-dd92-4d99-b33f-0708e3ca8559.png",
    category: "CRM Development",
    technologies: ["Lovable.dev", "Airtable", "n8n"],
    results: "Agents save several hours each week with streamlined workflow",
    client: "Florida Real Estate Team"
  },
  {
    id: "3",
    title: "Tool Experience Gallery",
    description: "Collection of automation workflows designed for clients using Zapier, GoHighLevel, Airtable, and ClickUp. These...",
    fullDescription: "Collection of automation workflows designed for clients using Zapier, GoHighLevel, Airtable, and ClickUp. These tools demonstrate various automation capabilities.",
    image: "/lovable-uploads/7657234a-dd92-4d99-b33f-0708e3ca8559.png",
    category: "Workflow Automation",
    technologies: ["Make.com", "Zapier", "n8n", "+3"],
    results: "Faster internal processes and reduced manual delays",
    client: "Various Clients"
  },
  {
    id: "4",
    title: "Luxury Medspa CRM – Custom Built Client Experience System",
    description: "Developed a fully customized CRM aligned with the medspa's exact workflow. The system handled every...",
    fullDescription: "Developed a fully customized CRM aligned with the medspa's exact workflow. The system handled every aspect of client management from booking to follow-up care.",
    image: "/lovable-uploads/7657234a-dd92-4d99-b33f-0708e3ca8559.png",
    category: "CRM Development",
    technologies: ["Airtable", "Make.com", "Twilio", "+2"],
    results: "Enhanced client experience with streamlined workflows",
    client: "Luxury Medspa"
  },
  {
    id: "5",
    title: "Credit & Business Funding CRM Build Out",
    description: "Migrated an entire credit repair and funding business into GoHighLevel and designed a custom CRM tailored to th...",
    fullDescription: "Migrated an entire credit repair and funding business into GoHighLevel and designed a custom CRM tailored to their unique workflow and client management needs.",
    image: "/lovable-uploads/7657234a-dd92-4d99-b33f-0708e3ca8559.png",
    category: "CRM Development",
    technologies: ["GoHighLevel", "Make.com"],
    results: "$112,000 opportunity value captured, $53,000 revenue generated",
    client: "Credit Repair & Funding Business"
  },
  {
    id: "6",
    title: "Texas Roofing CRM – Custom CRM for a Roofing Company",
    description: "Developed a custom CRM built specifically for the roofing industry using Lovable.dev, Airtable, and n8n to...",
    fullDescription: "Developed a custom CRM built specifically for the roofing industry using Lovable.dev, Airtable, and n8n to streamline operations with reduced manual work and improved response times.",
    image: "/lovable-uploads/fbe22c40-807e-431b-9463-0fbc45ec562e.png",
    category: "CRM Development",
    technologies: ["Lovable.dev", "Airtable", "n8n", "+2"],
    results: "Streamlined operations with reduced manual work and improved response times",
    client: "Texas Roofing Company"
  },
  {
    id: "7",
    title: "AutoSupport AI – Intelligent Email Triage",
    description: "Designed an intelligent email triage system using AI to automatically identify, prioritize, and route customer...",
    fullDescription: "Designed an intelligent email triage system using AI to automatically identify, prioritize, and route customer support requests, reducing response times and improving customer satisfaction.",
    image: "/lovable-uploads/92d5ed88-9ee4-4393-a690-ea88b88e92a1.png",
    category: "AI Automation",
    technologies: ["Make (Integromat)", "OpenAI GPT-4o-mini", "Google Mail", "+2"],
    results: "90% time saved on email sorting",
    client: "Customer Support Team"
  },
  {
    id: "8",
    title: "GHL Voice AI Agent – AI-Powered Voice Booking and Contact Sync",
    description: "Created a fully automated voice-to-booking workflow that connects incoming calls to CRM actions using AI...",
    fullDescription: "Created a fully automated voice-to-booking workflow that connects incoming calls to CRM actions using AI-powered voice recognition and automated booking systems.",
    image: "/lovable-uploads/92d5ed88-9ee4-4393-a690-ea88b88e92a1.png",
    category: "Voice Automation",
    technologies: ["Make (Integromat)", "OpenAI GPT-4o", "GoHighLevel", "+1"],
    results: "24/7 automated voice bookings",
    client: "GoHighLevel Users"
  },
  {
    id: "9",
    title: "Social Media AutoPilot – AI-Powered Content Distribution Engine",
    description: "Built a fully automated system that transforms any article link into a complete multi-platform content campaign...",
    fullDescription: "Built a fully automated system that transforms any article link into a complete multi-platform content campaign, automatically generating and distributing content across multiple social media platforms.",
    image: "/lovable-uploads/92d5ed88-9ee4-4393-a690-ea88b88e92a1.png",
    category: "Content Automation",
    technologies: ["Make.com", "OpenAI GPT-4o", "Perplexity AI", "+2"],
    results: "Consistent weekly publishing across 4 platforms",
    client: "Content Creator"
  },
  {
    id: "10",
    title: "SalesFlow AI Agent – Instant Personalized Follow-Ups for Sales Calls",
    description: "Built an AI-powered workflow that generates personalized follow-ups seconds after a prospect books...",
    fullDescription: "Built an AI-powered workflow that generates personalized follow-ups seconds after a prospect books a sales call, using intelligent automation to improve conversion rates.",
    image: "/lovable-uploads/92d5ed88-9ee4-4393-a690-ea88b88e92a1.png",
    category: "Sales Automation",
    technologies: ["n8n", "GPT-4.1", "Google Sheets", "+3"],
    results: "Instant personalized follow-ups in seconds",
    client: "Sales Team"
  },
  {
    id: "11",
    title: "AI Email Concierge – Intelligent Inbox Management for Busy Teams",
    description: "Designed a fully automated email management system that intelligently classifies incoming messages, drafts...",
    fullDescription: "Designed a fully automated email management system that intelligently classifies incoming messages, drafts responses, and manages follow-ups for busy teams.",
    image: "/lovable-uploads/92d5ed88-9ee4-4393-a690-ea88b88e92a1.png",
    category: "Email Automation",
    technologies: ["n8n", "OpenAI GPT-4o", "Gmail", "+1"],
    results: "Reduced manual inbox management time significantly",
    client: "Busy Teams"
  },
  {
    id: "12",
    title: "LeadGen AI (Social Edition) – Intelligent Social Content Extraction and Analysis",
    description: "Developed a content automation system that processes social media URLs, gathers public post and profile...",
    fullDescription: "Developed a content automation system that processes social media URLs, gathers public post and profile data, and generates intelligent lead generation insights.",
    image: "/lovable-uploads/92d5ed88-9ee4-4393-a690-ea88b88e92a1.png",
    category: "Content Intelligence",
    technologies: ["n8n", "OpenAI GPT-4o-mini", "Apify", "+2"],
    results: "Reduced turnaround time from hours to under 20 minutes",
    client: "Marketing Teams"
  }
];
