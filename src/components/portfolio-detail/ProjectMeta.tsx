
import { Users, Target, Calendar } from 'lucide-react';

interface ProjectMetaProps {
  client: string;
  results: string;
  duration: string;
}

const ProjectMeta = ({ client, results, duration }: ProjectMetaProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      <div className="flex items-center gap-3">
        <Users className="w-5 h-5 text-purple-400" />
        <div>
          <p className="text-white/60 text-sm">Client</p>
          <p className="text-purple-400 font-medium">{client}</p>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <Target className="w-5 h-5 text-violet-400" />
        <div>
          <p className="text-white/60 text-sm">Result</p>
          <p className="text-violet-400 font-medium">{results}</p>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <Calendar className="w-5 h-5 text-indigo-400" />
        <div>
          <p className="text-white/60 text-sm">Duration</p>
          <p className="text-indigo-400 font-medium">{duration}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectMeta;
