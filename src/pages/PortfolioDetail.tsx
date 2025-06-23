import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Button } from '../components/ui/button';
import StarryBackground from '../components/StarryBackground';
import Particles from '../components/Particles';
import PortfolioHeader from '../components/portfolio-detail/PortfolioHeader';
import ProjectMeta from '../components/portfolio-detail/ProjectMeta';
import WorkflowSteps from '../components/portfolio-detail/WorkflowSteps';
import TechnologiesSection from '../components/portfolio-detail/TechnologiesSection';
import OutcomesSection from '../components/portfolio-detail/OutcomesSection';
import CallToAction from '../components/portfolio-detail/CallToAction';
import { portfolioItems } from '../data/portfolioData';
const PortfolioDetail = () => {
  const {
    id
  } = useParams();
  const navigate = useNavigate();
  const project = portfolioItems.find(item => item.id === id);
  if (!project) {
    return <div className="min-h-screen relative flex items-center justify-center">
        <StarryBackground />
        <Particles />
        <div className="relative z-10 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Portfolio Not Found</h1>
          <Button onClick={() => navigate('/portfolio')} className="bg-primary hover:bg-primary/90">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Portfolio
          </Button>
        </div>
      </div>;
  }
  return <div className="min-h-screen relative">
      <StarryBackground />
      <Particles />
      
      <div className="relative z-10 pt-12 pb-20 px-4">
        <div className="container mx-auto max-w-4xl">
          {/* Back Button */}
          <Button onClick={() => navigate('/portfolio')} variant="outline" className="mb-8 border-purple-400/20 text-purple-200 hover:bg-purple-500/10 hover:border-purple-300/30">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Portfolio
          </Button>

          {/* Project Header */}
          <PortfolioHeader category={project.category} title={project.title} description={project.description} role={project.role} />

          {/* Project Meta */}
          <ProjectMeta client={project.client} results={project.results} duration={project.duration} />

          {/* Project Image */}
          <div className="mb-12">
            <img src={project.image} alt={project.title} className="w-full h-64 md:h-96 object-cover rounded-2xl border border-white/10" />
          </div>

          {/* Project Details */}
          <div className="space-y-12">
            {/* Challenge Section */}
            {project.challenge && <section>
                <h2 className="text-3xl font-bold text-white mb-6">The Challenge</h2>
                <p className="text-white/80 text-lg leading-relaxed">
                  {project.challenge}
                </p>
              </section>}

            {/* Solution Section */}
            {project.id === "8" && <section>
                
                
              </section>}

            {/* Solution/Workflow Steps */}
            {project.workflowSteps ? <WorkflowSteps steps={project.workflowSteps} supportingAutomations={project.supportingAutomations} /> : <section>
                <h2 className="text-3xl font-bold text-white mb-6">Project Overview</h2>
                <p className="text-white/80 text-lg leading-relaxed">
                  {project.fullDescription}
                </p>
              </section>}

            {/* Technologies */}
            <TechnologiesSection technologies={project.technologies} />

            {/* Outcomes */}
            {project.outcomes && <OutcomesSection outcomes={project.outcomes} projectSummary={project.projectSummary} />}

            {/* Call to Action */}
            <CallToAction />
          </div>
        </div>
      </div>
    </div>;
};
export default PortfolioDetail;