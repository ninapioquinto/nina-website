
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Target, Users, Calendar, ExternalLink } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import StarryBackground from '../components/StarryBackground';
import Particles from '../components/Particles';

const PortfolioDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Portfolio data (same as in Portfolio.tsx for consistency)
  const portfolioItems = [
    {
      id: "1",
      title: "Custom CRM System Implementation",
      description: "Built a comprehensive CRM system for a service-based business that reduced manual work by 15 hours per week and streamlined client management processes.",
      fullDescription: "This project involved creating a complete customer relationship management system from scratch, integrating multiple third-party tools and creating custom workflows. The solution included automated lead capture, client onboarding processes, and comprehensive reporting dashboards. The system was designed to scale with the business and included advanced features like automated follow-ups, task management, and integration with existing business tools.",
      image: "/lovable-uploads/c33e6ee7-cfe0-4654-af4d-14c950e0a46a.png",
      category: "CRM Systems",
      technologies: ["GoHighLevel", "Zapier", "Custom Workflows"],
      results: "15 hours saved per week",
      client: "Service Business",
      duration: "3 months",
      challenges: ["Integrating multiple disconnected systems", "Maintaining data integrity during migration", "Training staff on new processes"],
      solutions: ["Custom API integrations", "Phased migration approach", "Comprehensive training program"]
    },
    {
      id: "2",
      title: "AI Automation Workflow",
      description: "Automated a complete client onboarding process using AI tools and workflow automation, eliminating manual data entry and reducing onboarding time from 2 weeks to 2 days.",
      fullDescription: "This automation project revolutionized the client onboarding experience by implementing AI-driven document processing, automated data validation, and intelligent workflow routing. The system uses machine learning to extract information from various document types and automatically populates client profiles, generates contracts, and initiates appropriate workflows based on client type and requirements.",
      image: "/lovable-uploads/4b10e90b-41e5-44e0-8e3b-68b2fa8cd602.png",
      category: "Automation",
      technologies: ["Make", "OpenAI", "Airtable"],
      results: "2 weeks to 2 days onboarding",
      client: "Growing Consultancy",
      duration: "2 months",
      challenges: ["Complex document processing requirements", "Variable client data formats", "Ensuring accuracy in automated processes"],
      solutions: ["AI-powered OCR and NLP", "Flexible data mapping system", "Multi-stage validation process"]
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
            className="mb-8 border-white/20 text-white hover:bg-white/10"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Portfolio
          </Button>

          {/* Project Header */}
          <div className="mb-12">
            <div className="mb-6">
              <Badge variant="secondary" className="bg-purple-500/20 text-purple-200 border-purple-400/20 mb-4">
                {project.category}
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
                {project.title}
              </h1>
              <p className="text-xl text-white/80 leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Project Meta */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="flex items-center gap-3">
                <Users className="w-5 h-5 text-blue-400" />
                <div>
                  <p className="text-white/60 text-sm">Client</p>
                  <p className="text-blue-400 font-medium">{project.client}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Target className="w-5 h-5 text-green-400" />
                <div>
                  <p className="text-white/60 text-sm">Result</p>
                  <p className="text-green-400 font-medium">{project.results}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Calendar className="w-5 h-5 text-purple-400" />
                <div>
                  <p className="text-white/60 text-sm">Duration</p>
                  <p className="text-purple-400 font-medium">{project.duration}</p>
                </div>
              </div>
            </div>
          </div>

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
            {/* Full Description */}
            <section>
              <h2 className="text-3xl font-bold text-white mb-6">Project Overview</h2>
              <p className="text-white/80 text-lg leading-relaxed">
                {project.fullDescription}
              </p>
            </section>

            {/* Technologies */}
            <section>
              <h2 className="text-3xl font-bold text-white mb-6">Technologies Used</h2>
              <div className="flex flex-wrap gap-3">
                {project.technologies.map((tech, index) => (
                  <span 
                    key={index}
                    className="px-4 py-2 text-sm font-medium rounded-lg bg-gradient-to-r from-purple-500/20 to-violet-500/20 text-purple-200 border border-purple-400/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </section>

            {/* Challenges & Solutions */}
            <div className="grid md:grid-cols-2 gap-8">
              <section>
                <h2 className="text-2xl font-bold text-white mb-6">Challenges</h2>
                <ul className="space-y-3">
                  {project.challenges.map((challenge, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-red-400 mt-2 flex-shrink-0"></div>
                      <p className="text-white/80">{challenge}</p>
                    </li>
                  ))}
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-6">Solutions</h2>
                <ul className="space-y-3">
                  {project.solutions.map((solution, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-green-400 mt-2 flex-shrink-0"></div>
                      <p className="text-white/80">{solution}</p>
                    </li>
                  ))}
                </ul>
              </section>
            </div>

            {/* Call to Action */}
            <section className="text-center bg-gradient-to-r from-purple-900/20 to-indigo-900/20 border border-purple-400/20 rounded-3xl p-8">
              <h2 className="text-2xl font-bold text-white mb-4">
                Interested in Similar Results?
              </h2>
              <p className="text-white/80 mb-6">
                Let's discuss how I can build custom solutions for your specific needs.
              </p>
              <Button 
                onClick={() => {
                  const element = document.getElementById('contact');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  } else {
                    window.location.href = '/#contact';
                  }
                }}
                className="bg-primary hover:bg-primary/90"
              >
                Get Started
                <ExternalLink className="w-4 h-4 ml-2" />
              </Button>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioDetail;
