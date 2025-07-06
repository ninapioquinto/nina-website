
interface WorkflowStep {
  step: string;
  description: string;
  bullets?: string[];
}

interface WorkflowStepsProps {
  steps: WorkflowStep[];
  supportingAutomations?: {
    title: string;
    sections: {
      title: string;
      bullets: string[];
    }[];
  };
}

const WorkflowSteps = ({ steps, supportingAutomations }: WorkflowStepsProps) => {
  return (
    <section>
      <h2 className="text-3xl font-bold text-white mb-6">The Solution</h2>
      <div className="space-y-8">
        {steps.map((step, index) => (
          <div key={index} className="border-l-4 border-navy-400/40 pl-6 py-4 bg-gradient-to-r from-navy-900/10 to-transparent rounded-r-lg">
            <h3 className="text-xl font-bold text-white mb-4">
              {index + 1}. {step.step}
            </h3>
            <div className="text-white/80 leading-relaxed space-y-3">
              <div className="whitespace-pre-line">{step.description}</div>
              {step.bullets && (
                <ul className="list-disc list-inside space-y-1 ml-4">
                  {step.bullets.map((bullet, bulletIndex) => (
                    <li key={bulletIndex} className="text-white/80">
                      {bullet}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        ))}
      </div>

      {supportingAutomations && (
        <div className="mt-12">
          <h2 className="text-3xl font-bold text-white mb-6">{supportingAutomations.title}</h2>
          <div className="space-y-6">
            {supportingAutomations.sections.map((section, index) => (
              <div key={index} className="bg-gradient-to-r from-navy-900/10 to-transparent rounded-lg p-6 border border-navy-400/20">
                <h3 className="text-xl font-bold text-white mb-4">{section.title}</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  {section.bullets.map((bullet, bulletIndex) => (
                    <li key={bulletIndex} className="text-white/80 leading-relaxed">
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default WorkflowSteps;
