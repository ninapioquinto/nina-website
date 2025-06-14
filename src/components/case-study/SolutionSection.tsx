
const SolutionSection = () => {
  const customSystems = [
    {
      title: "Centralized CRM Dashboard",
      description: "Every lead, client, and stage of the funding journey is visible in one place. The dashboard provides a clear overview of all activity, updated in real-time."
    },
    {
      title: "Automated Lead Capture & Nurture",
      description: "When a new lead comes in, the system automatically qualifies and tags them. They receive an email and SMS sequence designed to educate and convert, while the team is instantly notified to follow up."
    },
    {
      title: "Smart Client Portal",
      description: "Clients can securely access their portal to track credit repair progress, view funding milestones, and complete onboarding steps with ease."
    },
    {
      title: "Course Delivery System",
      description: "An integrated course hub allows clients to access learning material at their own pace, reducing support requests and increasing self-serve value."
    },
    {
      title: "Pipeline & Task Automation",
      description: "Each stage of the client journey is automated with smart triggers, from application to funding. Tasks are assigned to team members automatically, ensuring nothing falls through the cracks."
    },
    {
      title: "Funding Tracker",
      description: "A live dashboard tracks the stages of funding for each client, giving both the team and the client complete transparency on the progress."
    }
  ];

  return (
    <div className="reveal">
      <h4 className="text-xl font-semibold mb-3 bg-gradient-to-r from-purple-400 to-violet-500 bg-clip-text text-transparent">My Solution</h4>
      <p className="text-lg mb-4">
        I migrated their entire system into GoHighLevel and designed a custom CRM tailored to the real flow of a credit repair and funding business. Every feature was purpose-built to reduce bottlenecks, automate repetitive tasks, and centralize all activity in one place.
      </p>
      <p className="text-lg mb-6">
        Using Make, I integrated backend logic to connect tools and create seamless data flow. The system was intuitive for the team and professional for the client, creating a smooth, scalable infrastructure from day one.
      </p>
      
      <h5 className="text-lg font-medium mb-4 bg-gradient-to-r from-purple-400 to-violet-500 bg-clip-text text-transparent">Custom Systems Built</h5>
      
      <div className="space-y-6">
        {customSystems.map((system, index) => (
          <div key={index} className="bg-gradient-to-br from-purple-900/20 to-violet-900/10 rounded-lg p-6 border border-purple-400/20">
            <h6 className="text-lg font-medium mb-3 text-white">{system.title}</h6>
            <p className="text-white/80">{system.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SolutionSection;
