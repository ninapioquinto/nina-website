
import { Hash } from 'lucide-react';

interface SetupStep {
    step: string;
    icon: React.ElementType;
}

interface SetupGuideProps {
    setupSteps: SetupStep[];
}

export const SetupGuide = ({ setupSteps }: SetupGuideProps) => {
    return (
        <div className="mb-20">
            <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-white mb-4 flex items-center justify-center">
                    <Hash className="w-10 h-10 mr-4 text-primary" />
                    Quick Setup Protocol
                </h2>
                <p className="text-white/80 text-xl">Get set up and delegating in no time</p>
            </div>
            
            <div className="relative">
                <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-primary via-purple-600 to-violet-600"></div>
                
                <div className="space-y-12">
                    {setupSteps.map((item, index) => (
                        <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                            <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                                <div className="p-6 rounded-2xl bg-white/5 border border-white/20 backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                                    <div className="flex items-center space-x-3">
                                        <item.icon className="w-6 h-6 text-primary" />
                                        <span className="text-white/90 font-medium">{item.step}</span>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="relative z-10">
                                <div className="w-8 h-8 bg-gradient-to-r from-primary to-purple-600 rounded-full flex items-center justify-center text-white text-sm font-bold">
                                    {index + 1}
                                </div>
                            </div>
                            
                            <div className="w-1/2"></div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
