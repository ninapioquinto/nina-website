
interface WorkflowStep {
  title: string;
  description: string;
  bullets?: string[];
}

interface WorkflowStepsProps {
  steps: WorkflowStep[];
  supportingAutomations?: string[];
}

const WorkflowSteps = ({ steps, supportingAutomations }: WorkflowStepsProps) => {
  return (
    <section>
      <h2 className="text-3xl font-bold text-white mb-6">The Solution</h2>
      <div className="space-y-8">
        {steps.map((step, index) => (
          <div key={index} className="border-l-4 border-purple-400/40 pl-6 py-4 bg-gradient-to-r from-purple-900/10 to-transparent rounded-r-lg">
            <h3 className="text-xl font-bold text-white mb-4">
              {index + 1}. {step.title}
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

      {supportingAutomations && supportingAutomations.length > 0 && (
        <div className="mt-12">
          <h2 className="text-3xl font-bold text-white mb-6">Supporting Automations</h2>
          <div className="bg-gradient-to-r from-purple-900/10 to-transparent rounded-lg p-6 border border-purple-400/20">
            <ul className="list-disc list-inside space-y-2 ml-4">
              {supportingAutomations.map((automation, index) => (
                <li key={index} className="text-white/80 leading-relaxed">
                  {automation}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </section>
  );
};

export default WorkflowSteps;
