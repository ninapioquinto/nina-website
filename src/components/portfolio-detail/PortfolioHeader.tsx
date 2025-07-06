
import { Badge } from '../ui/badge';

interface PortfolioHeaderProps {
  category: string;
  title: string;
  description: string;
  role?: string;
}

const PortfolioHeader = ({ category, title, description, role }: PortfolioHeaderProps) => {
  return (
    <div className="mb-12">
      <div className="mb-6">
        <Badge variant="secondary" className="bg-navy-500/20 text-navy-200 border-navy-400/20 mb-4">
          {category}
        </Badge>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
          {title}
        </h1>
        <p className="text-xl text-white/80 leading-relaxed">
          {description}
        </p>
        {role && (
          <p className="text-lg text-navy-300 mt-2 font-medium">
            Role: {role}
          </p>
        )}
      </div>
    </div>
  );
};

export default PortfolioHeader;
