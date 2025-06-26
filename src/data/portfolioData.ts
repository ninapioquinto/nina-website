
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
    title: "E-commerce Automation Suite",
    description: "Complete order processing and inventory management automation for a growing online retailer.",
    fullDescription: "Built a comprehensive automation system that handles order processing, inventory updates, customer notifications, and supplier communications. The system reduced manual processing time by 85% and eliminated order fulfillment errors.",
    image: "/lovable-uploads/e326ff7f-0cb0-4f44-84c8-c05a22677deb.png",
    category: "E-commerce",
    technologies: ["Zapier", "Shopify", "Google Sheets", "Slack"],
    results: "85% reduction in processing time",
    client: "Online Retailer",
    role: "Automation Specialist"
  },
  {
    id: "2",
    title: "Real Estate Lead Management",
    description: "Automated lead capture and nurturing system for a real estate agency with multi-channel integration.",
    fullDescription: "Developed an automated lead management system that captures leads from multiple sources, scores them based on engagement, and nurtures them through personalized email sequences. The system increased conversion rates by 40%.",
    image: "/lovable-uploads/757bfbe1-b164-438c-bc9e-77779e3d4cfb.png",
    category: "Real Estate",
    technologies: ["HubSpot", "Facebook Ads", "Mailchimp", "Calendly"],
    results: "40% increase in conversions",
    client: "Metro Realty Group",
    role: "Marketing Automation Consultant"
  },
  {
    id: "3",
    title: "Healthcare Patient Portal",
    description: "Streamlined patient communication and appointment scheduling system for a medical practice.",
    fullDescription: "Created an integrated patient portal that automates appointment scheduling, sends automated reminders, manages patient forms, and facilitates secure communication between patients and healthcare providers.",
    image: "/lovable-uploads/ac40fb5e-7919-485c-8dce-b2f92ec7d489.png",
    category: "Healthcare",
    technologies: ["Typeform", "Google Calendar", "Twilio", "Airtable"],
    results: "60% reduction in no-shows",
    client: "Family Medical Center",
    role: "Healthcare IT Consultant"
  },
  {
    id: "4",
    title: "Manufacturing Quality Control",
    description: "Automated quality assurance tracking and reporting system for a manufacturing company.",
    fullDescription: "Implemented a comprehensive quality control system that tracks production metrics, automatically flags quality issues, generates reports, and notifies relevant stakeholders. The system improved product quality by 30%.",
    image: "/lovable-uploads/c50fef96-b7a7-4856-a6ef-c8e0baf975e1.png",
    category: "Manufacturing",
    technologies: ["Power Automate", "SharePoint", "Power BI", "Teams"],
    results: "30% improvement in quality metrics",
    client: "Industrial Solutions Inc",
    role: "Process Automation Engineer"
  },
  {
    id: "5",
    title: "Educational Content Management",
    description: "Automated course delivery and student progress tracking system for an online education platform.",
    fullDescription: "Built an automated system that manages course enrollment, delivers content based on student progress, tracks completion rates, and provides personalized learning recommendations.",
    image: "/lovable-uploads/4b10e90b-41e5-44e0-8e3b-68b2fa8cd602.png",
    category: "Education",
    technologies: ["Teachable", "Zapier", "Google Analytics", "Slack"],
    results: "50% increase in course completion",
    client: "Digital Learning Academy",
    role: "EdTech Automation Specialist"
  },
  {
    id: "6",
    title: "Financial Services Compliance",
    description: "Automated compliance monitoring and reporting system for a financial advisory firm.",
    fullDescription: "Developed a comprehensive compliance system that monitors client communications, tracks regulatory requirements, generates compliance reports, and alerts staff to potential issues before they become problems.",
    image: "/lovable-uploads/c8e73d17-1196-4860-8426-c39f2a31cb45.png",
    category: "Financial Services",
    technologies: ["Microsoft Power Platform", "SharePoint", "Outlook", "Power BI"],
    results: "100% compliance audit success",
    client: "Premier Financial Advisors",
    role: "Compliance Automation Consultant"
  },
  {
    id: "7",
    title: "Restaurant Operations Hub",
    description: "Integrated ordering, inventory, and staff management system for a restaurant chain.",
    fullDescription: "Created a centralized operations system that manages online orders, tracks inventory levels, schedules staff, and provides real-time analytics. The system improved operational efficiency by 45%.",
    image: "/lovable-uploads/584203bb-b312-4f99-bf5d-2da86ad9e200.png",
    category: "Food Service",
    technologies: ["Square", "Toast POS", "Google Sheets", "Slack"],
    results: "45% operational efficiency gain",
    client: "Urban Eats Restaurant Group",
    role: "Restaurant Technology Consultant"
  },
  {
    id: "8",
    title: "Real Estate CRM Integration",
    description: "Custom CRM solution integrating Lovable.dev, Airtable, and n8n for comprehensive real estate management.",
    fullDescription: "Built a comprehensive CRM solution that integrates three core technologies: Lovable.dev for an intuitive client-facing dashboard, Airtable for flexible data management with dynamic views and relationships, and n8n for seamless backend automation. This tech stack enables the real estate team to manage their entire sales pipeline from a centralized platform while automating repetitive tasks like follow-ups, lead scoring, and performance tracking.",
    image: "/lovable-uploads/f7286aae-2fbc-412b-bca6-9b66f6c00429.png",
    category: "Real Estate CRM",
    technologies: ["Lovable.dev", "Airtable", "n8n", "Custom Integration"],
    results: "Streamlined pipeline management with automated workflows",
    client: "Premier Real Estate Group",
    role: "CRM Developer",
    challenge: "The real estate team was struggling with fragmented tools and manual processes that led to missed opportunities and inefficient lead management. They needed a unified system that could handle complex real estate workflows while providing automation capabilities.",
    workflowSteps: [
      {
        title: "Lead Capture & Qualification",
        description: "Automated lead intake from multiple sources with intelligent scoring.",
        bullets: [
          "Multi-channel lead capture from website forms, social media, and referrals",
          "Automated lead scoring based on engagement and property preferences",
          "Instant notifications to assigned agents with lead details"
        ]
      },
      {
        title: "Client Relationship Management",
        description: "Comprehensive client profiles with interaction tracking.",
        bullets: [
          "Detailed client profiles with property preferences and history",
          "Automated follow-up sequences based on client stage",
          "Communication history tracking across all touchpoints"
        ]
      },
      {
        title: "Property & Listing Management",
        description: "Centralized property database with automated updates.",
        bullets: [
          "Property database with photos, details, and market analysis",
          "Automated listing syndication to multiple platforms",
          "Price change alerts and market trend notifications"
        ]
      },
      {
        title: "Transaction Pipeline",
        description: "Visual pipeline management with automated stage progression.",
        bullets: [
          "Kanban-style pipeline from lead to closing",
          "Automated task creation for each transaction stage",
          "Document management with e-signature integration"
        ]
      }
    ],
    supportingAutomations: [
      "Automated lead assignment based on agent availability and expertise",
      "Follow-up email sequences triggered by client actions",
      "Market report generation and distribution",
      "Commission calculations and reporting"
    ],
    outcomes: [
      "50% reduction in lead response time",
      "35% increase in lead conversion rates",
      "Eliminated manual data entry across platforms",
      "Improved client satisfaction through consistent communication",
      "Enhanced team collaboration and accountability"
    ],
    projectSummary: "This integrated CRM solution transformed the real estate team's operations by providing a single source of truth for all client and property data, while automating routine tasks that previously consumed hours of manual work each day."
  },
  {
    id: "9",
    title: "Nonprofit Donor Management",
    description: "Automated donor engagement and fundraising campaign management system for a nonprofit organization.",
    fullDescription: "Developed a comprehensive donor management system that tracks donor interactions, automates thank-you communications, manages fundraising campaigns, and provides detailed analytics on donation patterns and campaign effectiveness.",
    image: "/lovable-uploads/d256a201-95cd-4943-8289-22321c38e900.png",
    category: "Nonprofit",
    technologies: ["Salesforce Nonprofit Cloud", "Mailchimp", "PayPal", "Google Analytics"],
    results: "25% increase in donor retention",
    client: "Community Hope Foundation",
    role: "Nonprofit Technology Consultant"
  },
  {
    id: "10",
    title: "Legal Case Management",
    description: "Automated case tracking and document management system for a law firm.",
    fullDescription: "Built a comprehensive case management system that tracks case progress, manages deadlines, automates document generation, and facilitates client communication. The system improved case handling efficiency by 40%.",
    image: "/lovable-uploads/c33e6ee7-cfe0-4654-af4d-14c950e0a46a.png",
    category: "Legal Services",
    technologies: ["Clio", "DocuSign", "Google Workspace", "Calendly"],
    results: "40% improvement in case efficiency",
    client: "Johnson & Associates Law Firm",
    role: "Legal Technology Consultant"
  },
  {
    id: "11",
    title: "Fitness Studio Management",
    description: "Integrated class scheduling, membership management, and payment processing system for fitness studios.",
    fullDescription: "Created a comprehensive studio management system that handles class bookings, membership renewals, payment processing, and member communication. The system increased member retention by 30% and reduced administrative overhead.",
    image: "/lovable-uploads/cc9d382f-4232-40fb-9355-3cf96bcbc0d8.png",
    category: "Fitness & Wellness",
    technologies: ["Mindbody", "Stripe", "Mailchimp", "Google Calendar"],
    results: "30% increase in member retention",
    client: "FitLife Studios",
    role: "Fitness Technology Consultant"
  },
  {
    id: "12",
    title: "Texas Roofing CRM – Custom CRM for a Roofing Company",
    description: "Developed a custom CRM built specifically for the roofing industry using Lovable.dev, Airtable, and n8n to streamline everything from lead capture to job completion with built-in roofing tools.",
    fullDescription: "A Texas-based roofing company needed a centralized system to manage leads, job sites, inspections, and client communications. Their process relied on spreadsheets, manual updates, and fragmented tools that caused delays, missed follow-ups, and internal misalignment. They needed a lightweight CRM that could reflect their real-world operations, support both office and field teams, and allow for future expansion.",
    image: "/lovable-uploads/fbe22c40-807e-431b-9463-0fbc45ec562e.png",
    category: "CRM Development",
    technologies: ["Lovable.dev", "Airtable", "n8n", "Custom Forms"],
    results: "Streamlined operations with reduced manual work and improved response times",
    client: "Texas Roofing Company",
    role: "App Developer",
    challenge: "A Texas-based roofing company needed a centralized system to manage leads, job sites, inspections, and client communications. Their process relied on spreadsheets, manual updates, and fragmented tools that caused delays, missed follow-ups, and internal misalignment. They needed a lightweight CRM that could reflect their real-world operations, support both office and field teams, and allow for future expansion.",
    workflowSteps: [
      {
        title: "Lead and Contact Management",
        description: "Centralized database with comprehensive tracking capabilities.",
        bullets: [
          "Centralized database of leads and clients",
          "Tracks names, property addresses, contact details, and lead sources",
          "Lead tagging and segmentation by ZIP code or service type"
        ]
      },
      {
        title: "Sales and Job Pipeline",
        description: "Visual workflow management for all job stages.",
        bullets: [
          "Visual Kanban board with clear stages: Lead In, Inspection Scheduled, Quote Sent, Approved, Job Scheduled, Completed, Closed or Lost",
          "Each job record includes notes, team comments, and file uploads"
        ]
      },
      {
        title: "Quote and Proposal Tracking",
        description: "Comprehensive quote management system.",
        bullets: [
          "Upload or generate quote documents",
          "Track status including Drafted, Sent, Viewed, and Accepted",
          "Optional integration with e-signature tools like Tally or PandaDoc"
        ]
      },
      {
        title: "Calendar and Scheduling",
        description: "Integrated scheduling system with team coordination.",
        bullets: [
          "Book inspections and job schedules",
          "Sync with calendar systems",
          "View by day, week, or month",
          "Assign events to staff or subcontractors"
        ]
      },
      {
        title: "Built-In Roofing Tools",
        description: "Specialized calculators and tools for roofing professionals.",
        bullets: [
          "Roofing Calculator – Computes roof area, square footage, and cost estimates",
          "Pitch Measurement Tool – Calculates slope using angle input or mobile photo",
          "Material Estimator – Estimates shingles, underlayment, nails, flashing, and more",
          "Safety Checklist – Mobile-friendly checklist for PPE, ladder setup, and job site safety"
        ]
      }
    ],
    supportingAutomations: [
      "Auto-tag new leads based on form inputs",
      "Automatically advance pipeline stages after quote approval",
      "Set up automated reminders and follow-ups via email or SMS",
      "Real-time KPIs including new leads, quotes sent, deals won, and job progress"
    ],
    outcomes: [
      "Single source of truth for all roofing operations",
      "Significantly reduced manual work and administrative overhead",
      "Improved response time on quotes and customer communications",
      "Eliminated missed follow-ups through intelligent automation",
      "Enhanced collaboration between office and field teams",
      "Enabled scalable operations with better organization",
      "More professional customer experience and communication"
    ],
    projectSummary: "This comprehensive CRM solution transformed the roofing company's operations by providing a centralized platform that streamlined everything from lead capture to job completion. The integration of industry-specific tools like roofing calculators and safety checklists, combined with powerful automation features, enabled the company to scale their operations while improving both internal efficiency and customer satisfaction."
  }
];
