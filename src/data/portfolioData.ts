export interface WorkflowStep {
  step: string;
  description: string;
  bullets?: string[];
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
  role: string;
  challenge: string;
  workflowSteps?: WorkflowStep[];
  outcomes?: string[];
  projectSummary?: string;
  supportingAutomations?: {
    title: string;
    sections: {
      title: string;
      bullets: string[];
    }[];
  };
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
    role: "Automation Systems Engineer",
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
        description: "Each platform uses a custom Apify actor to gather public post-level data:",
        bullets: [
          "LinkedIn: Author details, post content, reactions",
          "Instagram: Reels metadata, captions, hashtags, view counts",
          "YouTube: Video titles, channels, stats, thumbnails",
          "X: Tweet text, author profiles, follower counts, engagement"
        ]
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
    title: "Coaching Client Journey – Streamlined Lead-to-Client Pipeline",
    description: "Built a comprehensive end-to-end pipeline system in GoHighLevel that transforms scattered lead management into a streamlined, automated client journey from first contact to program completion.",
    fullDescription: "This Coaching Client Journey pipeline was built inside GoHighLevel to systematize every step, from first contact to client transformation. Each stage in the pipeline represents a specific moment in the buyer journey, backed by workflows, conditional logic, and lightweight team intervention only where necessary. Leads were coming in from Instagram, Facebook ads, referrals, and podcasts. But nothing was centralized. Conversations happened in DMs, follow-ups were missed, and onboarding lacked structure. Manual tracking created bottlenecks and made it hard to scale the client experience.",
    image: "/lovable-uploads/c50fef96-b7a7-4856-a6ef-c8e0baf975e1.png",
    category: "CRM Automation",
    technologies: ["GoHighLevel", "Stripe", "Airtable", "SMS Automation", "Email Sequences"],
    results: "Streamlined client journey with automated follow-ups",
    client: "Business Coach",
    role: "Automation Systems Engineer",
    challenge: "Leads were coming in from Instagram, Facebook ads, referrals, and podcasts. But nothing was centralized. Conversations happened in DMs, follow-ups were missed, and onboarding lacked structure. Manual tracking created bottlenecks and made it hard to scale the client experience.",
    workflowSteps: [
      {
        step: "1. New Lead Captured",
        description: "Trigger: Opt-in form, funnel, DM, or lead magnet\nAction: Tag based on lead source (Instagram, Facebook ad, referral, podcast)\nAutomation: Add to nurture sequence and notify the coach's team"
      },
      {
        step: "2. Qualified Lead",
        description: "Trigger: Application submitted\nAction: Assign lead score, tag as qualified, and capture estimated deal value\nAutomation: Send email and SMS with booking link for a strategy call"
      },
      {
        step: "3. Call Booked",
        description: "Trigger: Discovery call scheduled via GoHighLevel calendar\nAction: Trigger automated email and SMS reminders\nAutomation: Move lead to this stage and apply booking tag in the CRM"
      },
      {
        step: "4. Discovery Call Completed",
        description: "Trigger: Manual move after the call\nAction: Log outcome (Fit, Not Fit, or Needs Nurture) in internal form\nAutomation:",
        bullets: [
          "If marked Fit → trigger proposal sequence",
          "If Needs Nurture → add to warm re-engagement workflow",
          "If Not Fit → tag and remove from pipeline",
          "Notify the coach's team when action is needed"
        ]
      },
      {
        step: "5. Offer Sent or Proposal Out",
        description: "Trigger: Proposal, program link, or payment option sent\nAction: Send customized offer page (GoHighLevel form, video sales page, or Stripe checkout link)\nAutomation:",
        bullets: [
          "Move lead to this stage automatically",
          "Trigger follow-up if payment isn't completed within 48–72 hours"
        ]
      },
      {
        step: "6. Enrolled – Payment Received",
        description: "Trigger: Payment completed via webhook or order form\nAutomation:",
        bullets: [
          "Send welcome email sequence",
          "Trigger onboarding form",
          "Grant portal or membership access",
          "Create internal onboarding task and notify the team"
        ]
      },
      {
        step: "7. Onboarding in Progress",
        description: "Trigger: Onboarding form submitted or call booked\nAction: Tag as \"Active Client\"\nAutomation:",
        bullets: [
          "Schedule kickoff call via calendar",
          "Optional: add to Slack for communication"
        ]
      },
      {
        step: "8. Active Client – In Program",
        description: "Trigger: Kickoff call completed\nAction: Log session schedule, assign accountability coach if applicable\nAutomation: Trigger milestone check-in workflows (Week 3, Week 6, Week 8)"
      },
      {
        step: "9. Testimonial or Case Study Stage",
        description: "Trigger: Client hits a milestone or shares a win\nAction: Prompt for testimonial or book a feedback call\nAutomation: Submit form and route responses to Airtable for storage"
      },
      {
        step: "10. Upsell, Renewal, or Referral",
        description: "Trigger: Program nearing completion or client expresses interest\nAction: Offer long-term coaching, invite to group program, or request referrals\nAutomation: Apply re-engagement or referral reward tags"
      }
    ],
    supportingAutomations: {
      title: "Supporting Automations Included",
      sections: [
        {
          title: "Funnel & Calendar Integration",
          bullets: [
            "Funnel opt-ins push leads into Stage One with correct source tagging",
            "Calendar bookings move contacts to Stage Three and update CRM tags"
          ]
        },
        {
          title: "Payment & Proposal Tracking",
          bullets: [
            "GoHighLevel and Stripe webhooks automatically transition leads to Stage Six upon payment",
            "Smart reminder flow runs at Stage Five if payment hasn't been completed in time"
          ]
        },
        {
          title: "Lead Nurture & Follow-Up",
          bullets: [
            "Post-opt-in nurture workflows (email + SMS) with conditional logic",
            "No-show reminders and automated rebooking sequences",
            "Smart segmentation with tags like \"Hot Lead,\" \"Needs Nurture,\" and \"Inactive\""
          ]
        },
        {
          title: "Seamless Onboarding Experience",
          bullets: [
            "Onboarding workflow triggers when form or payment is received",
            "Client tagging, portal access, Slack setup, and kickoff scheduling handled automatically",
            "Built-in check-in messages at strategic points in the program"
          ]
        },
        {
          title: "Testimonial, Retention & Referral Flows",
          bullets: [
            "Testimonial requests triggered by internal tags or milestone events",
            "Responses submitted through feedback forms and stored in Airtable",
            "Referral or renewal offers delivered based on tags or program timeline"
          ]
        }
      ]
    },
    outcomes: [
      "Transformed scattered sales process into streamlined, automated experience",
      "Eliminated manual follow-up tasks while maintaining personal touch",
      "Created real-time visibility of every lead and client stage",
      "Built scalable system ready for growth without team overwhelm",
      "Achieved seamless onboarding and client success tracking",
      "Integrated payment processing with automatic stage progression",
      "Delivered funnel & calendar integration with correct source tagging",
      "Implemented smart reminder flows and no-show rebooking sequences",
      "Created testimonial collection and referral reward systems"
    ],
    projectSummary: "This Coaching Client Journey pipeline transformed a scattered, high-touch sales process into a streamlined experience that still feels personal. The team is only looped in where human decision-making matters: discovery call outcomes, onboarding, and client success points. Follow-up is now fully automated, proposals are tracked with precision, and onboarding is a frictionless handoff. The coach has a real-time view of every lead and client stage, and the system is ready to scale without creating overwhelm."
  },
  {
    id: "8",
    title: "Florida Realty CRM: Custom CRM System for Real Estate Deal Flow",
    description: "Developed a fully customized CRM tailored to the daily operations of a Florida-based real estate business. Using Lovable.dev for the client-facing interface, Airtable for structured data and dynamic views, and n8n for backend automation, the system handles everything from lead intake to commission tracking.",
    fullDescription: "I developed a fully customized CRM tailored to the daily operations of a Florida-based real estate business. Using Lovable.dev for the client-facing interface, Airtable for structured data and dynamic views, and n8n for backend automation, the system handles everything from lead intake to commission tracking. Key workflows like follow-ups, appointment scheduling, and document handling are now automated. Agents work from one centralized platform without the complexity of traditional CRM tools.",
    image: "/lovable-uploads/757bfbe1-b164-438c-bc9e-77779e3d4cfb.png",
    category: "CRM Development",
    technologies: ["Lovable.dev", "Airtable", "n8n"],
    results: "Agents save several hours each week with streamlined workflows",
    client: "Florida Real Estate Team",
    role: "Automation Systems Engineer",
    challenge: "The real estate team was managing client relationships using spreadsheets, calendars, and scattered chat threads. Follow-ups were often missed, deal tracking lacked structure, and leadership had no real-time visibility into pipeline activity or agent performance. Manual processes slowed down agents and made growth difficult to manage.",
    workflowSteps: [
      {
        step: "1. Leads & Contacts",
        description: "Organized lead capture, nurturing, and qualification.",
        bullets: [
          "Multi-channel lead source tracking (Website, Instagram, Referral, listing platforms, etc.)",
          "Sales pipeline stages: New → Contacted → Site Visit → Offer → Closed",
          "Smart tagging: Hot / Warm / Cold",
          "Auto-updated \"Last Contacted\"",
          "Follow-up reminders via email, SMS, or WhatsApp"
        ]
      },
      {
        step: "2. Property Listings",
        description: "Manage private/internal listing data and status tracking.",
        bullets: [
          "Location, Price, Status (Available, Under Offer, Sold, Rented)",
          "Media support (photos, videos, walkthrough links)",
          "Assigned agents and listing dates",
          "Owner contact details (kept private)"
        ]
      },
      {
        step: "3. Activities & Follow-Ups",
        description: "Track every touchpoint with built-in automation.",
        bullets: [
          "Communication logs (call, email, SMS)",
          "Scheduled viewings or meetings (calendar synced)",
          "Auto-reminders and overdue alerts",
          "Notes organized by lead or property"
        ]
      },
      {
        step: "4. Deals & Transactions",
        description: "Real-time deal visibility and agent commission tracking.",
        bullets: [
          "Deal stages: Negotiation → Contract Sent → Deposit Paid → Closed",
          "Linked buyer and property records",
          "Commission calculator by agent",
          "Expected close date",
          "Document uploads (contracts, IDs, deposit slips)"
        ]
      }
    ],
    supportingAutomations: {
      title: "Automation and Dashboard Highlights",
      sections: [
        {
          title: "Lead Management",
          bullets: [
            "Auto-capture leads from listing platforms, ads, and web forms",
            "Auto-capture of leads from forms and DMs",
            "Duplicate contact detection"
          ]
        },
        {
          title: "Communication & Follow-Up",
          bullets: [
            "Email sequence follow-ups based on lead status",
            "WhatsApp and SMS reminders for upcoming tasks",
            "Calendar sync for viewings and appointments"
          ]
        },
        {
          title: "Performance Tracking",
          bullets: [
            "Real-time commission tracking per agent and deal"
          ]
        },
        {
          title: "Client-Facing Dashboard (Lovable)",
          bullets: [
            "Role-based access (agents see only their leads)",
            "Visual summaries: lead stages, listing status, deal pipeline",
            "Leaderboard by deals closed",
            "Quick actions: Add new lead, property, or transaction",
            "Forecast and overdue task alerts"
          ]
        }
      ]
    },
    outcomes: [
      "Significantly improved efficiency across the business",
      "Automated follow-ups reduced lead response time",
      "Synced calendars prevented scheduling conflicts",
      "Centralized data replaced fragmented tools",
      "Made it easier to manage deals and track agent performance",
      "Overdue tasks surfaced automatically, keeping lead engagement consistent",
      "Agents save several hours each week by working in one streamlined system"
    ],
    projectSummary: "The CRM significantly improved efficiency across the business. Automated follow-ups reduced lead response time, while synced calendars prevented scheduling conflicts. Centralized data replaced fragmented tools, making it easier to manage deals and track agent performance. Overdue tasks surfaced automatically, keeping lead engagement consistent. Agents now save several hours each week by working in one streamlined system instead of juggling multiple apps and updates."
  },
  {
    id: "9",
    title: "Tool Experience Gallery",
    description: "Collection of automation workflows designed for clients using Zapier, GoHighLevel, Airtable, and ClickUp. These builds reflect practical, system-driven solutions that enhance operational efficiency, reduce repetitive manual work, and create smoother internal processes.",
    fullDescription: "This section showcases a collection of automation workflows I've designed and delivered for clients. These builds reflect practical, system-driven solutions that enhance operational efficiency, reduce repetitive manual work, and create smoother internal processes across CRM, task management, lead handling, and data coordination.",
    image: "/lovable-uploads/757bfbe1-b164-438c-bc9e-77779e3d4cfb.png",
    category: "Workflow Automation",
    technologies: ["Make.com", "Zapier", "n8n", "GoHighLevel", "ClickUp", "Airtable"],
    results: "Faster internal processes and reduced manual delays",
    client: "Various Clients",
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
  },
  {
    id: "10",
    title: "Luxury Medspa CRM – Custom Built Client Experience System",
    description: "Developed a fully customized CRM aligned with the medspa's exact workflow. The system handled every step of the client journey — from digital intake to post-treatment automation — with modules tailored to clinical, operational, and marketing needs.",
    fullDescription: "A luxury medspa was managing clients through a patchwork of spreadsheets, paper forms, and manual reminders. With rising client volume and a need for personalized care, the team needed a secure and unified system to manage client records, track treatments, automate follow-ups, and coordinate staff roles — all while delivering a high-end experience.",
    image: "/lovable-uploads/photo-1649972904349-6e44c42644a7",
    category: "CRM Development",
    technologies: ["Airtable", "Make.com", "Twilio", "Lovable.dev", "Custom Scheduling Widget"],
    results: "Enhanced client experience with streamlined workflows",
    client: "Luxury Medspa",
    role: "MVP App Engineer",
    challenge: "A luxury medspa was managing clients through a patchwork of spreadsheets, paper forms, and manual reminders. With rising client volume and a need for personalized care, the team needed a secure and unified system to manage client records, track treatments, automate follow-ups, and coordinate staff roles — all while delivering a high-end experience.",
    workflowSteps: [
      {
        step: "1. Client Management",
        description: "Centralized client profiles and digital documentation.",
        bullets: [
          "Centralized profiles with contact details, birthdays, skin concerns, and treatment history",
          "Photo uploads for before-and-after tracking and visual documentation",
          "Digital intake and consent forms sent via secure links or completed in-clinic",
          "Medical notes per appointment including treatment plans and attached visuals"
        ]
      },
      {
        step: "2. Appointment Management",
        description: "Streamlined booking and scheduling system.",
        bullets: [
          "Integrated calendar showing upcoming and past appointments, color-coded by status",
          "Automated SMS and email reminders with options to confirm or reschedule",
          "Waitlist and walk-in tracker to optimize appointment flow during busy hours"
        ]
      },
      {
        step: "3. Service and Sales Tracking",
        description: "Comprehensive service history and sales optimization.",
        bullets: [
          "Complete service history per client",
          "Product purchase tracking for upsell opportunities and personalized care"
        ]
      },
      {
        step: "4. Automation and Follow-Ups",
        description: "Intelligent client engagement and retention automation.",
        bullets: [
          "Scheduled check-ins at 3, 7, and 30 days after treatment via SMS or email",
          "Review request flows with automated outreach",
          "Client reactivation based on inactivity (30, 60, 90 days) with custom promos or messages"
        ]
      },
      {
        step: "5. Dashboard and Reporting",
        description: "Real-time business intelligence and performance tracking.",
        bullets: [
          "Daily appointment summaries by practitioner or treatment room",
          "Revenue tracking by service type and client profile",
          "Client retention and visit frequency metrics for ongoing performance review"
        ]
      },
      {
        step: "6. Staff and Role Management",
        description: "Secure access control and team coordination.",
        bullets: [
          "Role-based access controls for Admin, Therapist, and Receptionist accounts",
          "Internal staff notes to support coordination without exposing client-facing data"
        ]
      }
    ],
    outcomes: [
      "Enhanced client experience with personalized care tracking",
      "Streamlined operations with automated appointment management",
      "Improved staff coordination with role-based access controls",
      "Increased revenue through intelligent upsell tracking",
      "Better client retention through automated follow-up flows",
      "Comprehensive reporting for data-driven business decisions"
    ],
    projectSummary: "This MedSpa CRM solution delivers a highly customized, secure, and efficient platform that enhances client experience, optimizes staff workflows, and drives business growth for luxury medspa operations. It balances rich features with simplicity to enable rapid deployment and iterative improvements based on real user feedback."
  },
  {
    id: "11",
    title: "Credit & Business Funding CRM Build Out",
    description: "Migrated an entire credit repair and funding business into GoHighLevel and designed a custom CRM tailored to the real flow of the business. The system centralizes all activity and automates repetitive tasks, creating a smooth, scalable infrastructure.",
    fullDescription: "This growing credit repair and funding business was in the early stages of expansion, eager to scale. But their fragmented setup was slowing them down. Managing operations across a basic website, SuiteDash CRM, Typeform, and manual processes created unnecessary friction. As new leads increased and client needs evolved, the lack of a streamlined system led to missed opportunities, inconsistent follow-ups, and administrative overwhelm.",
    image: "/lovable-uploads/757bfbe1-b164-438c-bc9e-77779e3d4cfb.png",
    category: "CRM Development",
    technologies: ["GoHighLevel", "Make.com"],
    results: "$112,000 opportunity value captured, $53,000 revenue generated, 45% win rate",
    client: "Credit Repair & Funding Business",
    role: "Automation Systems Engineer",
    challenge: "The business was ready to grow, but their systems were not. Their lead capture process required juggling multiple tools that didn't speak to each other. Onboarding was inconsistent, client communication was delayed, and tracking funding stages was difficult. They needed more than just a CRM. They needed a centralized, intelligent system to run their operations, manage leads, track funding, and deliver a better experience for their clients from start to finish.",
    workflowSteps: [
      {
        step: "Centralized CRM Dashboard",
        description: "Every lead, client, and stage of the funding journey is visible in one place. The dashboard provides a clear overview of all activity, updated in real-time."
      },
      {
        step: "Automated Lead Capture & Nurture",
        description: "When a new lead comes in, the system automatically qualifies and tags them. They receive an email and SMS sequence designed to educate and convert, while the team is instantly notified to follow up."
      },
      {
        step: "Smart Client Portal",
        description: "Clients can securely access their portal to track credit repair progress, view funding milestones, and complete onboarding steps with ease."
      },
      {
        step: "Course Delivery System",
        description: "An integrated course hub allows clients to access learning material at their own pace, reducing support requests and increasing self-serve value."
      },
      {
        step: "Pipeline & Task Automation",
        description: "Each stage of the client journey is automated with smart triggers, from application to funding. Tasks are assigned to team members automatically, ensuring nothing falls through the cracks."
      },
      {
        step: "Funding Tracker",
        description: "A live dashboard tracks the stages of funding for each client, giving both the team and the client complete transparency on the progress."
      }
    ],
    outcomes: [
      "$112,000 opportunity value captured through improved visibility and timely follow-ups",
      "$53,000 revenue generated from newly closed deals",
      "45% win rate across qualified leads",
      "Faster onboarding process with consistent nurturing",
      "Smarter tracking and pipeline management",
      "Eliminated operational overwhelm and administrative bottlenecks",
      "Centralized operations with enhanced client experience"
    ],
    projectSummary: "This project gave the client more than automation. It gave them control. By thoughtfully designing a tailored GoHighLevel CRM, I helped this credit repair and funding team eliminate overwhelm, centralize their operations, and build a business model that scales without chaos. They now operate with clarity and confidence, supported by a system that aligns with their growth goals and enhances every step of the client journey."
  },
  {
    id: "12",
    title: "Texas Roofing CRM – Custom CRM for a Roofing Company",
    description: "Developed a custom CRM built specifically for the roofing industry using Lovable.dev, Airtable, and n8n to streamline everything from lead capture to job completion with built-in roofing tools.",
    fullDescription: "A Texas-based roofing company needed a centralized system to manage leads, job sites, inspections, and client communications. Their process relied on spreadsheets, manual updates, and fragmented tools that caused delays, missed follow-ups, and internal misalignment. They needed a lightweight CRM that could reflect their real-world operations, support both office and field teams, and allow for future expansion.",
    image: "/lovable-uploads/ac40fb5e-7919-485c-8dce-b2f92ec7d489.png",
    category: "CRM Development",
    technologies: ["Lovable.dev", "Airtable", "n8n", "Custom Forms", "Google Calendar"],
    results: "Streamlined operations with reduced manual work and improved response times",
    client: "Texas Roofing Company",
    role: "App Developer",
    challenge: "A Texas-based roofing company needed a centralized system to manage leads, job sites, inspections, and client communications. Their process relied on spreadsheets, manual updates, and fragmented tools that caused delays, missed follow-ups, and internal misalignment. They needed a lightweight CRM that could reflect their real-world operations, support both office and field teams, and allow for future expansion.",
    workflowSteps: [
      {
        step: "Lead and Contact Management",
        description: "Centralized database with comprehensive lead tracking and segmentation.",
        bullets: [
          "Centralized database of leads and clients",
          "Tracks names, property addresses, contact details, and lead sources",
          "Lead tagging and segmentation by ZIP code or service type"
        ]
      },
      {
        step: "Sales and Job Pipeline",
        description: "Visual Kanban board system for managing job progression.",
        bullets: [
          "Visual Kanban board with clear stages: Lead In, Inspection Scheduled, Quote Sent, Approved, Job Scheduled, Completed, Closed or Lost",
          "Each job record includes notes, team comments, and file uploads"
        ]
      },
      {
        step: "Quote and Proposal Tracking",
        description: "Comprehensive quote management with status tracking.",
        bullets: [
          "Upload or generate quote documents",
          "Track status including Drafted, Sent, Viewed, and Accepted",
          "Optional integration with e-signature tools like Tally or PandaDoc"
        ]
      },
      {
        step: "Calendar and Scheduling",
        description: "Integrated scheduling system with team coordination.",
        bullets: [
          "Book inspections and job schedules",
          "Sync with Google Calendar",
          "View by day, week, or month",
          "Assign events to staff or subcontractors"
        ]
      },
      {
        step: "Built-In Roofing Tools",
        description: "Industry-specific calculators and safety tools.",
        bullets: [
          "Roofing Calculator – Computes roof area, square footage, and cost estimates",
          "Pitch Measurement Tool – Calculates slope using angle input or mobile photo",
          "Material Estimator – Estimates shingles, underlayment, nails, flashing, and more",
          "Safety Checklist – Mobile-friendly checklist for PPE, ladder setup, and job site safety"
        ]
      }
    ],
    supportingAutomations: {
      title: "Key Features and Automation",
      sections: [
        {
          title: "Task Management & Documentation",
          bullets: [
            "Add tasks to any lead or job with owners, due dates, and priorities",
            "Upload permits, contracts, inspection reports, and job site photos",
            "Mobile upload support for field teams",
            "Organized by client or job ID"
          ]
        },
        {
          title: "Automation Triggers",
          bullets: [
            "Auto-tag new leads based on form inputs",
            "Automatically advance pipeline stages after quote approval",
            "Set up automated reminders and follow-ups via email or SMS"
          ]
        },
        {
          title: "Dashboard and Reporting",
          bullets: [
            "Real-time KPIs including new leads, quotes sent, deals won, and job progress",
            "Optional map view of active and completed jobs by ZIP code",
            "Filter by lead source, job type, or date range"
          ]
        },
        {
          title: "Client-Facing Portal",
          bullets: [
            "Read-only dashboard for clients to view project updates",
            "Includes job status, photos, and shared documents"
          ]
        }
      ]
    },
    outcomes: [
      "Significantly reduced manual work across all operations",
      "Improved response time on quotes and client communications",
      "Eliminated missed follow-ups through intelligent automation",
      "Enhanced collaboration between office and field teams",
      "Delivered single source of truth for all company operations",
      "Enabled scaling operations with better organization",
      "Created more professional customer experience",
      "Provided full visibility into pipeline and task assignments"
    ],
    projectSummary: "This CRM gave the roofing company a single source of truth for all operations. It significantly reduced manual work, improved response time on quotes, and eliminated missed follow-ups through automation. With full visibility into the pipeline and task assignments, the office and field teams now collaborate more effectively. The client was able to scale operations with better organization, faster communication, and a more professional customer experience."
  }
];
