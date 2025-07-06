
import { Network, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Tool {
    name: string;
    icon: React.ElementType;
}

interface EnterpriseSolutionsProps {
    tools: Tool[];
}

export const EnterpriseSolutions = ({ tools }: EnterpriseSolutionsProps) => {
    return (
        <div className="mb-20">
            <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-white mb-4 flex items-center justify-center">
                    <Network className="w-10 h-10 mr-4 text-primary" />
                    Scalable AI Automation & CRM Solutions
                </h2>
                <p className="text-white text-xl leading-relaxed mb-8">
                    Need more than a starter kit? I build custom automation systems using:
                </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                {tools.map((tool, index) => (
                    <div key={index} className="p-6 rounded-2xl bg-gradient-to-br from-white/5 via-white/10 to-white/5 border border-white/20 hover:border-primary/30 transition-all duration-300 hover:scale-105 text-center group">
                        <tool.icon className="w-12 h-12 text-primary mx-auto mb-4 group-hover:animate-pulse" />
                        <span className="text-white font-medium block">{tool.name}</span>
                    </div>
                ))}
            </div>
            
            <div className="text-center">
                <p className="text-white/90 mb-8 text-lg leading-relaxed max-w-3xl mx-auto">
                    When your business demands clarity, efficiency, and scale, your systems should deliver.
                </p>
                <Link to="/#contact" className="inline-flex items-center bg-gradient-to-r from-primary via-navy-600 to-navy-700 hover:from-primary/90 hover:via-navy-600/90 hover:to-navy-700/90 text-white px-8 py-4 rounded-2xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl glow-border">
                    <Calendar className="w-5 h-5 mr-3" />
                    Book a Discovery Call
                </Link>
            </div>
        </div>
    )
}
