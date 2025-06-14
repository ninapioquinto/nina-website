
import { Users } from 'lucide-react';

interface TargetAudienceProps {
    targetAudience: string[];
}

export const TargetAudience = ({ targetAudience }: TargetAudienceProps) => {
    return (
        <div className="mb-20">
            <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-white mb-4 flex items-center justify-center">
                    <Users className="w-10 h-10 mr-4 text-primary" />
                    Built for Modern Professionals
                </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {targetAudience.map((audience, index) => (
                    <div key={index} className="p-6 rounded-2xl bg-gradient-to-br from-white/5 via-white/10 to-white/5 border border-white/20 hover:border-primary/30 transition-all duration-300 hover:scale-105">
                        <div className="flex items-center space-x-4">
                            <div className="w-3 h-3 rounded-full bg-gradient-to-r from-primary to-purple-600"></div>
                            <span className="text-white/90 font-medium">{audience}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
