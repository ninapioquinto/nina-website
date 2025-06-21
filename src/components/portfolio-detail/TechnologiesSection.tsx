
interface TechnologiesSectionProps {
  technologies: string[];
}

const TechnologiesSection = ({ technologies }: TechnologiesSectionProps) => {
  return (
    <section>
      <h2 className="text-3xl font-bold text-white mb-6">Technologies Used</h2>
      <div className="flex flex-wrap gap-3">
        {technologies.map((tech, index) => (
          <span 
            key={index}
            className="px-4 py-2 text-sm font-medium rounded-lg bg-gradient-to-r from-purple-500/20 to-violet-500/20 text-purple-200 border border-purple-400/20"
          >
            {tech}
          </span>
        ))}
      </div>
    </section>
  );
};

export default TechnologiesSection;
