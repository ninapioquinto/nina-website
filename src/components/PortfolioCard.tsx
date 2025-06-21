
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
      className="group hover:shadow-xl transition-all duration-300 overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:border-purple-400/30 cursor-pointer"
      onClick={handleCardClick}
    >
      {/* Project Image */}
      <div className="relative overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 left-4">
          <Badge variant="secondary" className="bg-purple-500/20 text-purple-200 border-purple-400/20">
            {category}
          </Badge>
        </div>
        <div className="absolute top-4 right-4">
          <div className="w-8 h-8 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center group-hover:bg-purple-500/20 group-hover:border-purple-400/40 transition-all duration-300">
            <ArrowUpRight className="w-4 h-4 text-white" />
          </div>
        </div>
      </div>

      <CardHeader className="pb-3">
        <CardTitle className="text-xl font-bold text-white group-hover:text-purple-100 transition-colors line-clamp-2">
          {title}
        </CardTitle>
        <CardDescription className="text-white/70 group-hover:text-white/90 transition-colors line-clamp-3">
          {description}
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-4">
        {/* Technologies */}
        <div>
          <h4 className="text-sm font-medium text-white/80 mb-2">Technologies Used</h4>
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, index) => (
              <span 
                key={index}
                className="px-2 py-1 text-xs rounded-md bg-gradient-to-r from-purple-500/20 to-violet-500/20 text-purple-200 border border-purple-400/20"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Results & Client */}
        <div className="grid grid-cols-1 gap-3">
          <div className="flex items-center gap-2 text-sm">
            <Target className="w-4 h-4 text-green-400" />
            <span className="text-white/80">Result: </span>
            <span className="text-green-400 font-medium">{results}</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Users className="w-4 h-4 text-blue-400" />
            <span className="text-white/80">Client: </span>
            <span className="text-blue-400 font-medium">{client}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PortfolioCard;
