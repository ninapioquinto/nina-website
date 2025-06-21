import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Button } from '../components/ui/button';
import StarryBackground from '../components/StarryBackground';
import Particles from '../components/Particles';
import PortfolioHeader from '../components/portfolio-detail/PortfolioHeader';
import ProjectMeta from '../components/portfolio-detail/ProjectMeta';
import WorkflowSteps from '../components/portfolio-detail/WorkflowSteps';
import TechnologiesSection from '../components/portfolio-detail/TechnologiesSection';
import OutcomesSection from '../components/portfolio-detail/OutcomesSection';
import ChallengesSolutions from '../components/portfolio-detail/ChallengesSolutions';
import CallToAction from '../components/portfolio-detail/CallToAction';

const PortfolioDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Portfolio data (same as in PortfolioShowcase.tsx for consistency)
  const portfolioItems = [
    {
      id: "1",
      title: "AutoSupport AI – Intelligent Email Triage",
      description: "Designed an intelligent email triage system using AI to automatically identify, prioritize, and route customer emails in real time, saving 90% of manual sorting time.",
      fullDescription: "Customer support inboxes can easily become overloaded. Important requests get buried under general inquiries or irrelevant messages. The client needed a solution to filter, classify, and prioritize incoming emails with precision and speed. I designed an intelligent email triage system that uses AI to automatically identify, prioritize, and route customer emails in real time.",
      image: "/lovable-uploads/c33e6ee7-cfe0-4654-af4d-14c950e0a46a.png",
      category: "AI Automation",
      technologies: ["n8n", "OpenAI GPT-4o-mini", "Google Mail", "Slack", "Relevance AI"],
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
      title: "Business Process Optimization",
      description: "Streamlined operations for a growing consulting firm by implementing automated workflows and data management systems that improved efficiency and client satisfaction.",
      fullDescription: "A comprehensive business process overhaul that analyzed existing workflows, identified bottlenecks, and implemented automated solutions across multiple departments. The project included redesigning client communication processes, automating project management workflows, and creating unified reporting systems that provide real-time insights into business performance.",
      image: "/lovable-uploads/58da3295-08c3-4d16-9214-f7d1bd815361.png",
      category: "Process Optimization",
      technologies: ["Zoho", "Custom APIs", "Workflow Design"],
      results: "40% efficiency increase",
      client: "Consulting Firm",
      duration: "4 months",
      challenges: ["Resistance to change from staff", "Complex interdepartmental dependencies", "Maintaining service quality during transition"],
      solutions: ["Gradual implementation approach", "Cross-departmental workshops", "Continuous monitoring and adjustment"]
    },
    {
      id: "4",
      title: "GoHighLevel Integration Solution",
      description: "Developed custom integrations with GoHighLevel for better client management, including automated lead scoring and nurture campaigns that increased qualified leads by 55%.",
      fullDescription: "This project focused on maximizing the potential of GoHighLevel by creating sophisticated automation workflows, custom fields, and advanced segmentation strategies. The solution included predictive lead scoring algorithms, personalized nurture sequences, and comprehensive analytics dashboards that provide actionable insights for sales and marketing teams.",
      image: "/lovable-uploads/f33f1f05-555a-4043-8f47-babb6b1a2f95.png",
      category: "Integrations",
      technologies: ["GoHighLevel", "API Integration", "Custom Fields"],
      results: "55% increase in qualified leads",
      client: "Marketing Agency",
      duration: "2.5 months",
      challenges: ["Complex lead qualification criteria", "Integration with existing marketing tools", "Scaling personalization efforts"],
      solutions: ["Machine learning-based scoring", "Unified API architecture", "Template-based personalization system"]
    },
    {
      id: "5",
      title: "Data Migration & System Unification",
      description: "Successfully migrated a business from multiple spreadsheets and disconnected tools to a unified system without losing any data, creating a single source of truth.",
      fullDescription: "A critical data migration project that consolidated information from over 15 different systems and spreadsheets into a centralized platform. The project required careful data mapping, extensive validation processes, and the creation of new data governance policies to ensure ongoing data quality and consistency across the organization.",
      image: "/lovable-uploads/ab61576f-da73-4131-bed5-4674c92cee7f.png",
      category: "Data Management",
      technologies: ["Airtable", "Data Migration Tools", "API Connectors"],
      results: "100% data integrity maintained",
      client: "E-commerce Business",
      duration: "3.5 months",
      challenges: ["Inconsistent data formats", "Legacy system limitations", "Minimizing business disruption"],
      solutions: ["Advanced data cleaning algorithms", "Parallel system operation", "Staged migration approach"]
    },
    {
      id: "6",
      title: "Automated Sales Pipeline",
      description: "Created an intelligent sales pipeline with automated follow-ups and lead qualification that resulted in 20 hours saved weekly and improved conversion rates.",
      fullDescription: "This comprehensive sales automation solution transformed the entire sales process from lead capture to deal closure. The system includes intelligent lead routing, automated follow-up sequences, dynamic content personalization, and advanced analytics that help sales teams focus on high-value activities while ensuring no leads fall through the cracks.",
      image: "/lovable-uploads/cc9d382f-4232-40fb-9355-3cf96bcbc0d8.png",
      category: "Sales Automation",
      technologies: ["n8n", "CRM Integration", "Email Automation"],
      results: "20 hours saved weekly",
      client: "SaaS Startup",
      duration: "2 months",
      challenges: ["Complex sales process requirements", "Multiple stakeholder involvement", "Integration with existing tech stack"],
      solutions: ["Modular automation design", "Stakeholder workflow mapping", "API-first integration approach"]
    }
  ];

  const project = portfolioItems.find(item => item.id === id);

  if (!project) {
    return (
      <div className="min-h-screen relative flex items-center justify-center">
        <StarryBackground />
        <Particles />
        <div className="relative z-10 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Portfolio Not Found</h1>
          <Button onClick={() => navigate('/portfolio')} className="bg-primary hover:bg-primary/90">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Portfolio
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen relative">
      <StarryBackground />
      <Particles />
      
      <div className="relative z-10 pt-12 pb-20 px-4">
        <div className="container mx-auto max-w-4xl">
          {/* Back Button */}
          <Button 
            onClick={() => navigate('/portfolio')} 
            variant="outline" 
            className="mb-8 border-purple-400/20 text-purple-200 hover:bg-purple-500/10 hover:border-purple-300/30"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Portfolio
          </Button>

          {/* Project Header */}
          <PortfolioHeader 
            category={project.category}
            title={project.title}
            description={project.description}
            role={project.role}
          />

          {/* Project Meta */}
          <ProjectMeta 
            client={project.client}
            results={project.results}
            duration={project.duration}
          />

          {/* Project Image */}
          <div className="mb-12">
            <img 
              src={project.image} 
              alt={project.title}
              className="w-full h-64 md:h-96 object-cover rounded-2xl border border-white/10"
            />
          </div>

          {/* Project Details */}
          <div className="space-y-12">
            {/* Challenge Section */}
            {project.challenge && (
              <section>
                <h2 className="text-3xl font-bold text-white mb-6">The Challenge</h2>
                <p className="text-white/80 text-lg leading-relaxed">
                  {project.challenge}
                </p>
              </section>
            )}

            {/* Solution/Workflow Steps */}
            {project.workflowSteps ? (
              <WorkflowSteps steps={project.workflowSteps} />
            ) : (
              <section>
                <h2 className="text-3xl font-bold text-white mb-6">Project Overview</h2>
                <p className="text-white/80 text-lg leading-relaxed">
                  {project.fullDescription}
                </p>
              </section>
            )}

            {/* Technologies */}
            <TechnologiesSection technologies={project.technologies} />

            {/* Outcomes */}
            {project.outcomes && (
              <OutcomesSection 
                outcomes={project.outcomes}
                projectSummary={project.projectSummary}
              />
            )}

            {/* Challenges & Solutions (for other projects) */}
            {!project.workflowSteps && project.challenges && project.solutions && (
              <ChallengesSolutions 
                challenges={project.challenges}
                solutions={project.solutions}
              />
            )}

            {/* Call to Action */}
            <CallToAction />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioDetail;
