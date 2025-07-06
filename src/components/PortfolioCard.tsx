
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { ArrowUpRight, Target, Users } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface PortfolioCardProps {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  technologies: string[];
  results: string;
  client: string;
}

const PortfolioCard = ({ 
  id,
  title, 
  description, 
  image, 
  category, 
  technologies, 
  results, 
  client 
}: PortfolioCardProps) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/portfolio/${id}`);
  };

  return (
    <Card 
      className="group hover:shadow-xl transition-all duration-300 overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:border-navy-400/30 cursor-pointer h-full"
      onClick={handleCardClick}
    >
      {/* Project Image - Reduced height */}
      <div className="relative overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-2 left-2">
          <Badge variant="secondary" className="bg-navy-500/20 text-navy-200 border-navy-400/20 text-xs">
            {category}
          </Badge>
        </div>
        <div className="absolute top-2 right-2">
          <div className="w-6 h-6 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center group-hover:bg-navy-500/20 group-hover:border-navy-400/40 transition-all duration-300">
            <ArrowUpRight className="w-3 h-3 text-white" />
          </div>
        </div>
      </div>

      <CardHeader className="pb-2 pt-3">
        <CardTitle className="text-lg font-bold text-white group-hover:text-navy-100 transition-colors line-clamp-2 leading-tight">
          {title}
        </CardTitle>
        <CardDescription className="text-white/70 group-hover:text-white/90 transition-colors line-clamp-2 text-sm">
          {description}
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-3 pt-0">
        {/* Technologies - Show only first 3 */}
        <div>
          <h4 className="text-xs font-medium text-white/80 mb-1">Tech Stack</h4>
          <div className="flex flex-wrap gap-1">
            {technologies.slice(0, 3).map((tech, index) => (
              <span 
                key={index}
                className="px-1.5 py-0.5 text-xs rounded-md bg-gradient-to-r from-navy-500/20 to-navy-600/20 text-navy-200 border border-navy-400/20"
              >
                {tech}
              </span>
            ))}
            {technologies.length > 3 && (
              <span className="px-1.5 py-0.5 text-xs rounded-md bg-gradient-to-r from-navy-500/20 to-navy-600/20 text-navy-200 border border-navy-400/20">
                +{technologies.length - 3}
              </span>
            )}
          </div>
        </div>

        {/* Results & Client - Compact */}
        <div className="space-y-1">
          <div className="flex items-center gap-1 text-xs">
            <Target className="w-3 h-3 text-accent-gold" />
            <span className="text-accent-gold font-medium truncate">{results}</span>
          </div>
          <div className="flex items-center gap-1 text-xs">
            <Users className="w-3 h-3 text-navy-400" />
            <span className="text-navy-400 font-medium truncate">{client}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PortfolioCard;
