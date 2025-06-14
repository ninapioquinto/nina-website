
const ClientOverview = () => {
  return (
    <div className="lg:col-span-5 reveal">
      <div className="sticky top-32">
        <h3 className="text-2xl font-bold mb-4">The Client</h3>
        <p className="text-white/70 mb-6">
          This growing credit repair and funding business was in the early stages of expansion, eager to scale. But their fragmented setup was slowing them down. Managing operations across a basic website, SuiteDash CRM, Typeform, and manual processes created unnecessary friction.
        </p>
        <p className="text-white/70 mb-6">
          As new leads increased and client needs evolved, the lack of a streamlined system led to missed opportunities, inconsistent follow-ups, and administrative overwhelm.
        </p>
        
        <div className="space-y-6">
          <div className="bg-gradient-to-br from-purple-900/30 to-violet-900/20 border border-purple-400/30 rounded-lg p-6 backdrop-blur-sm">
            <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-violet-500 bg-clip-text text-transparent mb-2">45%</div>
            <div className="text-sm text-white/70">Faster client onboarding</div>
          </div>
          
          <div className="bg-gradient-to-br from-purple-900/30 to-violet-900/20 border border-purple-400/30 rounded-lg p-6 backdrop-blur-sm">
            <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-violet-500 bg-clip-text text-transparent mb-2">60%</div>
            <div className="text-sm text-white/70">Reduction in manual admin work</div>
          </div>
          
          <div className="bg-gradient-to-br from-purple-900/30 to-violet-900/20 border border-purple-400/30 rounded-lg p-6 backdrop-blur-sm">
            <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-violet-500 bg-clip-text text-transparent mb-2">30%</div>
            <div className="text-sm text-white/70">Increase in lead response time</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientOverview;
