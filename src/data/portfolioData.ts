
export interface WorkflowStep {
  step: string;
  description: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  description: string;
  fullDescription: string;
  image: string;
  category: string;
  technologies: string[];
  results: string;
  client: string;
  duration: string;
  role: string;
  challenge: string;
  workflowSteps?: WorkflowStep[];
  outcomes?: string[];
  projectSummary?: string;
}

export const portfolioItems: PortfolioItem[] = [
  {
    id: "1",
    title: "AutoSupport AI – Intelligent Email Triage",
    description: "Designed an intelligent email triage system using AI to automatically identify, prioritize, and route customer emails in real time, saving 90% of manual sorting time.",
    fullDescription: "Customer support inboxes can easily become overloaded. Important requests get buried under general inquiries or irrelevant messages. The client needed a solution to filter, classify, and prioritize incoming emails with precision and speed. I designed an intelligent email triage system that uses AI to automatically identify, prioritize, and route customer emails in real time.",
    image: "/lovable-uploads/c33e6ee7-cfe0-4654-af4d-14c950e0a46a.png",
    category: "AI Automation",
    technologies: ["Make (Integromat)", "OpenAI GPT-4o-mini", "Google Mail", "Slack", "Relevance AI"],
    results: "90% time saved on email sorting",
    client: "Customer Support Team",
    duration: "2 months",
    role: "Automation Systems Engineer",
    challenge: "Customer support inboxes can easily become overloaded. Important requests get buried under general inquiries or irrelevant messages. The client needed a solution to filter, classify, and prioritize incoming emails with precision and speed.",
    workflowSteps: [
      {
        step: "Trigger & Intake",
        description: "The workflow watches the client's support inbox and detects new unread emails from specific senders."
      },
      {
        step: "Classification Using GPT-4o",
        description: "Each email is analyzed to determine if it's a legitimate customer support message. If not, it's discarded from the flow."
      },
      {
        step: "Priority Tagging",
        description: "Relevant support emails are classified into three levels: High Priority (Escalations and urgent concerns), Medium Priority (Standard questions or neutral tone inquiries), Low Priority (Positive sentiments like compliments or follow-ups)."
      },
      {
        step: "Automated Routing",
        description: "For high priority messages, the system checks if the customer needs information from the knowledge base or if the message should be escalated internally. Based on that, the message is either routed to a Slack channel for immediate internal action or sent to Relevance AI for an answer and formatted into a branded HTML email using GPT."
      },
      {
        step: "Customer Acknowledgment",
        description: "A clean, professional email response is sent back to the customer. It confirms receipt, sets expectations, and either provides answers or lets them know a support agent is handling the case."
      }
    ],
    outcomes: [
      "Saved approximately 90% of time previously spent manually sorting support emails",
      "Escalated critical issues instantly through Slack",
      "Responded faster using AI-generated, well-formatted replies",
      "Delivered consistent customer experiences with less team involvement"
    ],
    projectSummary: "This project demonstrates how AI can handle repetitive support operations while maintaining a high standard of care."
  },
  {
    id: "2",
    title: "GHL Voice AI Agent – AI-Powered Voice Booking and Contact Sync",
    description: "Created a fully automated voice-to-booking workflow that connects incoming calls to CRM actions using AI, enabling 24/7 voice-to-calendar bookings without manual appointment setters.",
    fullDescription: "The client needed a way to automate appointment bookings from voice calls. Their goal was to eliminate the need for manual appointment setters and ensure that every lead interaction was captured accurately in GoHighLevel. They wanted a system that could understand natural speech, extract booking details, and sync everything with their CRM.",
    image: "/lovable-uploads/4b10e90b-41e5-44e0-8e3b-68b2fa8cd602.png",
    category: "Voice Automation",
    technologies: ["Make (Integromat)", "OpenAI GPT-4o", "GoHighLevel", "Retell AI"],
    results: "24/7 automated voice bookings",
    client: "GoHighLevel Users",
    duration: "3 months",
    role: "Automation Systems Engineer",
    challenge: "The client needed a way to automate appointment bookings from voice calls. Their goal was to eliminate the need for manual appointment setters and ensure that every lead interaction was captured accurately in GoHighLevel. They wanted a system that could understand natural speech, extract booking details, and sync everything with their CRM.",
    workflowSteps: [
      {
        step: "Webhook Voice Trigger",
        description: "Listens for incoming calls via Retell AI and captures caller data including email, phone number, and spoken booking preferences."
      },
      {
        step: "AI Time Extraction with GPT-4o",
        description: "GPT-4o interprets the caller's preferred time using natural language and converts phrases like 'next Tuesday at 3 PM' into precise ISO 8601 format for scheduling."
      },
      {
        step: "GoHighLevel Contact Lookup",
        description: "Searches the GHL database for existing contacts by email or phone. If a contact exists, it updates the record. If not, it creates a new contact with enriched data like company name and website."
      },
      {
        step: "CRM Enrichment and Custom Fields",
        description: "Maps relevant information such as WhatsApp replies, service interests, and other qualifying data into GHL custom fields. Prepares the contact record for pipeline automation, segmentation, or nurture flows."
      }
    ],
    outcomes: [
      "Enables voice-to-calendar bookings 24/7",
      "Automatically creates or updates GHL contacts with clean data",
      "Delivers precise booking times without manual interpretation",
      "Removes the need for human appointment setters completely"
    ],
    projectSummary: "This solution gives the client a scalable and intelligent front line for lead handling, turning voice conversations into revenue-ready opportunities."
  },
  {
    id: "3",
    title: "Social Media AutoPilot – AI-Powered Content Distribution Engine",
    description: "Built a fully automated system that transforms any article link into a complete multi-platform content campaign, eliminating manual repurposing and enabling consistent weekly publishing.",
    fullDescription: "Publishing consistently across multiple platforms was draining time and energy. My client wanted to turn long-form articles into engaging social content, but the manual effort required for writing summaries, designing visuals, and customizing posts for each platform made it unsustainable.",
    image: "/lovable-uploads/58da3295-08c3-4d16-9214-f7d1bd815361.png",
    category: "Content Automation",
    technologies: ["Make.com", "OpenAI GPT-4o", "Perplexity AI", "DALL·E 3", "Google Sheets"],
    results: "Consistent weekly publishing across 4 platforms",
    client: "Content Creator",
    duration: "2.5 months",
    role: "Automation Systems Engineer",
    challenge: "Publishing consistently across multiple platforms was draining time and energy. My client wanted to turn long-form articles into engaging social content, but the manual effort required for writing summaries, designing visuals, and customizing posts for each platform made it unsustainable.",
    workflowSteps: [
      {
        step: "Trigger and Intake",
        description: "The workflow monitors a Google Sheet. When a new link is added, the automation starts instantly."
      },
      {
        step: "Summarization with Perplexity AI",
        description: "The article is summarized into a clear, concise format used as the base for all content."
      },
      {
        step: "Visual Creation with DALL·E 3",
        description: "A custom image is generated from the summary. It is designed to match the article's tone and style, without using text or overlays."
      },
      {
        step: "Content Writing with GPT-4o",
        description: "Each platform receives tailored content: Medium (Full article with a strong, clickable title), LinkedIn (Professional post with context and a call to action), Instagram (Captivating caption with emojis and hashtags), Facebook (Relatable short-form post linking back to the article)."
      },
      {
        step: "Automated Publishing",
        description: "The posts and images are instantly published across all connected platforms using Make.com."
      }
    ],
    outcomes: [
      "Eliminated the need for manual repurposing",
      "Enabled consistent weekly publishing across four platforms",
      "Delivered custom-tailored content with minimal team input",
      "Created a scalable system that turns articles into branded campaigns"
    ],
    projectSummary: "This project shows how AI automation can streamline content workflows while keeping quality and engagement high."
  },
  {
    id: "4",
    title: "SalesFlow AI Agent – Instant Personalized Follow-Ups for Sales Calls",
    description: "Built an AI-powered workflow that generates personalized follow-ups seconds after a prospect books a call, using real company insights and testimonials to deliver high-quality messages.",
    fullDescription: "Sales teams were spending too much time writing follow-up emails after discovery calls. The messages often felt templated or lacked relevance. The client needed a way to instantly deliver personalized, high-quality messages using real company insights and testimonials.",
    image: "/lovable-uploads/f33f1f05-555a-4043-8f47-babb6b1a2f95.png",
    category: "Sales Automation",
    technologies: ["n8n", "GPT-4.1", "Google Sheets", "Tavily", "LangChain", "Agent Stack"],
    results: "Instant personalized follow-ups in seconds",
    client: "Sales Team",
    duration: "2.5 months",
    role: "Automation Systems Engineer",
    challenge: "Sales teams were spending too much time writing follow-up emails after discovery calls. The messages often felt templated or lacked relevance. The client needed a way to instantly deliver personalized, high-quality messages using real company insights and testimonials.",
    workflowSteps: [
      {
        step: "Trigger and Data Collection",
        description: "The workflow starts when a call is booked. It pulls prospect details from Google Sheets, including name, company, and project info."
      },
      {
        step: "Company Research with AI",
        description: "Using Tavily, the system gathers a brief company overview, current tech stack, and recent updates based on the prospect's website and business type."
      },
      {
        step: "Smart Product Recommendations",
        description: "The business type and project goals are matched to relevant products using a structured product sheet, identifying up to three fitting solutions."
      },
      {
        step: "Personalized Messaging with GPT-4",
        description: "A sales writing AI crafts a short email, subject line, and SMS using the data and a testimonial from a similar company. Email: Friendly, relevant, and backed by proof. Subject: Casual and direct. SMS: Conversational and timely."
      },
      {
        step: "CRM Sync and Team Visibility",
        description: "All outputs are saved back into the team's Google Sheet for use in outreach or syncing with the CRM."
      }
    ],
    outcomes: [
      "Removed the need for manual follow-up writing",
      "Improved message quality through personalized AI copy",
      "Reduced response time to seconds after booking",
      "Maintained a consistent, high-touch sales experience at scale"
    ],
    projectSummary: "This workflow shows how automation and AI can streamline outbound efforts without losing the human touch."
  },
  {
    id: "5",
    title: "AI Email Concierge – Intelligent Inbox Management for Busy Teams",
    description: "Designed a fully automated email management system that intelligently classifies incoming messages, drafts context-aware responses, and notifies the right people without delay.",
    fullDescription: "Managing a shared inbox across multiple departments often leads to chaos. Important emails from customers, sales leads, or finance teams can easily be buried under newsletters, promotional offers, and internal back-and-forth. The client needed an automated way to sort, label, and respond to emails quickly while keeping key messages visible to the right teams.",
    image: "/lovable-uploads/ab61576f-da73-4131-bed5-4674c92cee7f.png",
    category: "Email Automation",
    technologies: ["n8n", "OpenAI GPT-4o", "Gmail", "Slack"],
    results: "Reduced manual inbox management time significantly",
    client: "Busy Teams",
    duration: "2 months",
    role: "Automation Systems Engineer",
    challenge: "Managing a shared inbox across multiple departments often leads to chaos. Important emails from customers, sales leads, or finance teams can easily be buried under newsletters, promotional offers, and internal back-and-forth. The client needed an automated way to sort, label, and respond to emails quickly while keeping key messages visible to the right teams.",
    workflowSteps: [
      {
        step: "Real-Time Email Trigger",
        description: "The workflow checks for new unread Gmail messages every minute and starts processing them immediately."
      },
      {
        step: "AI Classification",
        description: "Using a GPT-powered classifier, each email is sorted into one of five categories: Internal, Customer Support, Promotions, Admin and Finance, Sales Opportunities."
      },
      {
        step: "Smart Response Handling",
        description: "Based on category, the system routes each email to a dedicated AI agent that performs tasks such as writing internal team replies, responding to support questions or escalating to human agents, summarizing promotions and evaluating relevance, extracting and summarizing finance-related data, drafting replies for sales leads and alerting the sales team via Slack."
      },
      {
        step: "Automated Labeling and Drafting",
        description: "Each message is labeled in Gmail and, if a reply is needed, a draft is created automatically with a structured, professional tone."
      },
      {
        step: "Slack Notifications",
        description: "Sales inquiries and high-value opportunities are sent to Slack to ensure fast internal response and follow-up."
      }
    ],
    outcomes: [
      "Reduced time spent manually managing the inbox",
      "Ensured high-priority emails were surfaced to the right team members",
      "Delivered consistent, professional replies using AI",
      "Allowed internal teams to stay focused while inbox operations ran in the background"
    ],
    projectSummary: "This automation is a strong example of how AI can support operational efficiency by handling repetitive communication tasks with accuracy and intelligence."
  },
  {
    id: "6",
    title: "LeadGen AI (Social Edition) – Intelligent Social Content Extraction and Analysis",
    description: "Developed a content automation system that processes social media URLs, gathers public post and profile information, enriches it with AI-generated transcripts, and logs everything in Google Sheets.",
    fullDescription: "Marketing and research teams were spending too much time manually collecting content and engagement data from LinkedIn, Instagram, YouTube, and X. Visiting each link, copying data, and updating spreadsheets slowed down workflows and limited how quickly teams could act on insights. The client needed a fast and reliable way to turn social media links into structured data automatically.",
    image: "/lovable-uploads/cc9d382f-4232-40fb-9355-3cf96bcbc0d8.png",
    category: "Content Intelligence",
    technologies: ["n8n", "OpenAI GPT-4o-mini", "Apify", "Google Sheets", "LangChain"],
    results: "Reduced turnaround time from hours to under a minute",
    client: "Marketing Teams",
    duration: "2 months",
    role: "AI Automation Developer",
    challenge: "Marketing and research teams were spending too much time manually collecting content and engagement data from LinkedIn, Instagram, YouTube, and X. Visiting each link, copying data, and updating spreadsheets slowed down workflows and limited how quickly teams could act on insights. The client needed a fast and reliable way to turn social media links into structured data automatically.",
    workflowSteps: [
      {
        step: "Chat-Based Trigger",
        description: "The workflow begins when a user submits a social media link through chat."
      },
      {
        step: "Platform Detection with GPT-4o",
        description: "The system identifies whether the link is from LinkedIn, Instagram, YouTube, or X and sends it to the matching workflow."
      },
      {
        step: "Content Collection via Apify",
        description: "Each platform uses a custom Apify actor to gather public post-level data: LinkedIn (Author details, post content, reactions), Instagram (Reels metadata, captions, hashtags, view counts), YouTube (Video titles, channels, stats, thumbnails), X (Tweet text, author profiles, follower counts, engagement)."
      },
      {
        step: "AI Transcription and Enrichment",
        description: "If the content is a video or audio clip, it is processed using GPT-4o to generate a readable transcript that is saved alongside other metadata."
      },
      {
        step: "Real-Time Logging to Google Sheets",
        description: "Data is sent to a shared Google Sheet with platform-specific tabs. The system checks for existing entries and updates them, ensuring clean and accurate records."
      }
    ],
    outcomes: [
      "Eliminated manual data collection and formatting",
      "Centralized content across four major social platforms in one workspace",
      "Enabled teams to access post-level data and video transcripts with a single link",
      "Reduced turnaround time from hours to under a minute",
      "Supported influencer research, brand monitoring, and competitive analysis"
    ],
    projectSummary: "This build highlights how automation and AI can turn social content into structured intelligence without manual effort."
  },
  {
    id: "7",
    title: "Tool Experience Gallery",
    description: "Collection of automation workflows designed for clients using Zapier, GoHighLevel, Airtable, and ClickUp. These builds reflect practical, system-driven solutions that enhance operational efficiency, reduce repetitive manual work, and create smoother internal processes.",
    fullDescription: "This section showcases a collection of automation workflows I've designed and delivered for clients. These builds reflect practical, system-driven solutions that enhance operational efficiency, reduce repetitive manual work, and create smoother internal processes across CRM, task management, lead handling, and data coordination.",
    image: "/lovable-uploads/757bfbe1-b164-438c-bc9e-77779e3d4cfb.png",
    category: "Workflow Automation",
    technologies: ["Make.com", "Zapier", "n8n", "GoHighLevel", "ClickUp", "Airtable"],
    results: "Faster internal processes and reduced manual delays",
    client: "Various Clients",
    duration: "Ongoing",
    role: "Automation Systems Engineer",
    challenge: "Clients across different industries were facing common operational challenges: repetitive manual tasks, disconnected systems, inefficient lead handling processes, and lack of visibility across their operations. They needed practical automation solutions that could integrate with their existing tools and workflows.",
    workflowSteps: [
      {
        step: "CRM Buildouts and Automation Pipelines",
        description: "Designed comprehensive CRM systems with automated lead routing, scoring, and nurture sequences that seamlessly integrate with existing business processes."
      },
      {
        step: "Multi-Step Lead Intake and Segmentation",
        description: "Created intelligent lead capture workflows that automatically segment prospects based on their responses, behavior, and demographic data for targeted follow-up campaigns."
      },
      {
        step: "Auto-Task Creation and Internal Coordination",
        description: "Built systems that automatically generate tasks, assign responsibilities, and coordinate team activities based on triggers from various platforms and customer interactions."
      },
      {
        step: "Cross-Platform Data Syncing",
        description: "Implemented seamless data synchronization between different tools and platforms, ensuring consistent information across all systems without manual data entry."
      },
      {
        step: "Status Updates and Workflow Triggers",
        description: "Developed automated status reporting and workflow triggers that keep teams informed and processes moving forward without constant manual oversight."
      },
      {
        step: "Notification Systems Across Teams",
        description: "Created intelligent notification systems that alert the right people at the right time, reducing response delays and improving team coordination."
      }
    ],
    outcomes: [
      "Faster internal processes with reduced bottlenecks",
      "More consistent lead handling and follow-up",
      "Centralized and connected systems eliminating data silos",
      "Reduced manual steps and operational delays",
      "Better visibility across operations and team activities",
      "Improved client satisfaction through faster response times"
    ],
    projectSummary: "This collection demonstrates how strategic automation can transform business operations across multiple industries and use cases, creating scalable solutions that grow with the business."
  }
];
