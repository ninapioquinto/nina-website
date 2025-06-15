
const ResultsSection = () => {
  const revenueResults = [
    {
      value: "$112,000",
      title: "Opportunity Value Captured",
      description: "Through improved visibility and timely follow-ups"
    },
    {
      value: "$53,000",
      title: "Revenue Generated",
      description: "From newly closed deals"
    },
    {
      value: "45%",
      title: "Win Rate",
      description: "Across qualified leads, this was made possible through faster onboarding, consistent nurturing, and smarter tracking."
    }
  ];

  const outcomes = [
    {
      value: "45%",
      title: "Faster client onboarding",
      description: "New clients complete setup and begin their journey almost twice as fast as before."
    },
    {
      value: "60%",
      title: "Reduction in manual admin work",
      description: "Automated workflows replaced repetitive tasks and form handoffs, freeing up valuable team hours."
    },
    {
      value: "30%",
      title: "Increase in lead response time",
      description: "Faster responses led to more conversions and a smoother first impression for potential clients."
    },
    {
      value: "Streamlined",
      title: "Communication",
      description: "All client messages, updates, and documents now flow through a single system, eliminating scattered inboxes and lost threads."
    }
  ];

  return (
    <>
      <div className="reveal">
        <h4 className="text-xl font-semibold mb-3 bg-gradient-to-r from-purple-400 to-violet-500 bg-clip-text text-transparent">Revenue Results Unlocked</h4>
        <p className="text-lg mb-6">
          In just 30 days of using the new system:
        </p>
        
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {revenueResults.map((result, index) => (
            <div key={index} className="bg-gradient-to-br from-purple-900/20 to-violet-900/10 rounded-lg p-6 border border-purple-400/20 text-center">
              <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-violet-500 bg-clip-text text-transparent mb-2">{result.value}</div>
              <p className="text-white/80 font-medium mb-2">{result.title}</p>
              <p className="text-white/60 text-sm">{result.description}</p>
            </div>
          ))}
        </div>

        {/* Dashboard Image */}
        <div className="mb-8">
          <div className="relative rounded-xl overflow-hidden border border-purple-400/20 bg-gradient-to-br from-purple-900/10 to-violet-900/5">
            <img 
              src="/lovable-uploads/757bfbe1-b164-438c-bc9e-77779e3d4cfb.png" 
              alt="GoHighLevel CRM Dashboard showing $112K opportunity value, $53K revenue generated, and detailed analytics"
              className="w-full h-auto"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
          </div>
          <p className="text-sm text-white/60 text-center mt-3">
            Live dashboard view showing real-time opportunity tracking, revenue metrics, and pipeline analytics
          </p>
        </div>
      </div>
      
      <div className="reveal">
        <h4 className="text-xl font-semibold mb-3 bg-gradient-to-r from-purple-400 to-violet-500 bg-clip-text text-transparent">Outcomes in 30 Days</h4>
        
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          {outcomes.map((outcome, index) => (
            <div key={index} className="bg-gradient-to-br from-purple-900/20 to-violet-900/10 rounded-lg p-6 border border-purple-400/20">
              <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-violet-500 bg-clip-text text-transparent mb-2">{outcome.value}</div>
              <p className="text-white/80 font-medium mb-2">{outcome.title}</p>
              <p className="text-white/60 text-sm">{outcome.description}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ResultsSection;
