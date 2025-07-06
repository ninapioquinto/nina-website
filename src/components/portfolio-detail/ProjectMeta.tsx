
import { Users, Target } from 'lucide-react';

interface ProjectMetaProps {
  client: string;
  results: string;
}

const ProjectMeta = ({ client, results }: ProjectMetaProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
      <div className="flex items-center gap-3">
        <Users className="w-5 h-5 text-navy-400" />
        <div>
          <p className="text-white/60 text-sm">Client</p>
          <p className="text-navy-400 font-medium">{client}</p>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <Target className="w-5 h-5 text-accent-gold" />
        <div>
          <p className="text-white/60 text-sm">Result</p>
          <p className="text-accent-gold font-medium">{results}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectMeta;
