
interface ChallengesSolutionsProps {
  challenges: string[];
  solutions: string[];
}

const ChallengesSolutions = ({ challenges, solutions }: ChallengesSolutionsProps) => {
  return (
    <div className="grid md:grid-cols-2 gap-8">
      <section>
        <h2 className="text-2xl font-bold text-white mb-6">Challenges</h2>
        <ul className="space-y-3">
          {challenges.map((challenge, index) => (
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
          {solutions.map((solution, index) => (
            <li key={index} className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-accent-gold mt-2 flex-shrink-0"></div>
              <p className="text-white/80">{solution}</p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default ChallengesSolutions;
