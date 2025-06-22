
interface OutcomesSectionProps {
  outcomes: string[];
  projectSummary?: string;
}

const OutcomesSection = ({ outcomes, projectSummary }: OutcomesSectionProps) => {
  return (
    <section>
      <h2 className="text-3xl font-bold text-white mb-6">Outcome</h2>
      <ul className="space-y-3">
        {outcomes.map((outcome, index) => (
          <li key={index} className="flex items-start gap-3">
            <div className="w-2 h-2 rounded-full bg-violet-400 mt-2 flex-shrink-0"></div>
            <p className="text-white/80">{outcome}</p>
          </li>
        ))}
      </ul>
      {projectSummary && (
        <div className="mt-6 p-6 bg-gradient-to-r from-purple-900/20 to-violet-900/20 border border-purple-400/20 rounded-xl">
          <p className="text-purple-200 font-medium italic">
            {projectSummary}
          </p>
        </div>
      )}
    </section>
  );
};

export default OutcomesSection;
