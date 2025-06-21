
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';
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
      className="group hover:shadow-2xl transition-all duration-500 overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm cursor-pointer relative
      hover:bg-white/10 hover:border-purple-400/50 
      hover:shadow-[0_0_30px_rgba(139,92,246,0.5),0_0_60px_rgba(139,92,246,0.3),0_0_90px_rgba(139,92,246,0.1)]
      hover:scale-[1.02] transform-gpu"
      onClick={handleCardClick}
    >
      {/* Glow effect overlay */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-violet-500/10 to-indigo-500/10 blur-xl"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-purple-400/5 to-indigo-400/5"></div>
      </div>

      {/* Project Image */}
      <div className="relative overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-4 left-4">
          <Badge variant="secondary" className="bg-purple-500/20 text-purple-200 border-purple-400/20 group-hover:bg-purple-500/30 group-hover:border-purple-400/40 transition-all duration-300">
            {category}
          </Badge>
        </div>
        <div className="absolute top-4 right-4">
          <div className="w-8 h-8 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center group-hover:bg-purple-500/30 group-hover:border-purple-400/50 group-hover:shadow-lg group-hover:shadow-purple-500/25 transition-all duration-500">
            <ArrowUpRight className="w-4 h-4 text-white group-hover:text-purple-200 transition-colors duration-300" />
          </div>
        </div>
      </div>

      <CardHeader className="pb-3 relative z-10">
        <CardTitle className="text-xl font-bold text-white group-hover:text-purple-100 transition-colors duration-300 line-clamp-2">
          {title}
        </CardTitle>
        <CardDescription className="text-white/70 group-hover:text-white/90 transition-colors duration-300 line-clamp-3">
          {description}
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-4 relative z-10">
        {/* Technologies */}
        <div>
          <h4 className="text-sm font-medium text-white/80 mb-2 group-hover:text-white/90 transition-colors duration-300">Technologies Used</h4>
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, index) => (
              <span 
                key={index}
                className="px-2 py-1 text-xs rounded-md bg-gradient-to-r from-purple-500/20 to-violet-500/20 text-purple-200 border border-purple-400/20 group-hover:from-purple-500/30 group-hover:to-violet-500/30 group-hover:border-purple-400/40 group-hover:text-purple-100 transition-all duration-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Results & Client */}
        <div className="grid grid-cols-1 gap-3">
          <div className="flex items-center gap-2 text-sm">
            <Target className="w-4 h-4 text-green-400 group-hover:text-green-300 group-hover:drop-shadow-[0_0_4px_rgba(34,197,94,0.5)] transition-all duration-300" />
            <span className="text-white/80 group-hover:text-white/90 transition-colors duration-300">Result: </span>
            <span className="text-green-400 font-medium group-hover:text-green-300 transition-colors duration-300">{results}</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Users className="w-4 h-4 text-blue-400 group-hover:text-blue-300 group-hover:drop-shadow-[0_0_4px_rgba(59,130,246,0.5)] transition-all duration-300" />
            <span className="text-white/80 group-hover:text-white/90 transition-colors duration-300">Client: </span>
            <span className="text-blue-400 font-medium group-hover:text-blue-300 transition-colors duration-300">{client}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PortfolioCard;
