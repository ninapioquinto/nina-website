
interface WorkflowStep {
  step: string;
  description: string;
}

interface WorkflowStepsProps {
  steps: WorkflowStep[];
}

const WorkflowSteps = ({ steps }: WorkflowStepsProps) => {
  return (
    <section>
      <h2 className="text-3xl font-bold text-white mb-6">The Solution: How the System Works</h2>
      <div className="space-y-6">
        {steps.map((step, index) => (
          <div key={index} className="border-l-4 border-purple-400/40 pl-6 py-4 bg-gradient-to-r from-purple-900/10 to-transparent rounded-r-lg">
            <h3 className="text-xl font-bold text-white mb-3">
              {index + 1}. {step.step}
            </h3>
            <p className="text-white/80 leading-relaxed">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorkflowSteps;
