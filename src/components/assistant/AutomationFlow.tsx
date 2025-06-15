
import { Brain, Cpu } from 'lucide-react';

interface Feature {
    icon: React.ElementType;
    text: string;
    gradient: string;
    glow?: string;
}

interface AutomationFlowProps {
    features: Feature[];
}

export const AutomationFlow = ({ features }: AutomationFlowProps) => {
    return (
        <div className="mb-20 relative">
            <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-white mb-4 flex items-center justify-center">
                    <Brain className="w-10 h-10 mr-4 text-primary" />
                    AI-Powered Automation Flow
                </h2>
                <p className="text-white/80 text-xl">Your Executive Assistant doesn't just listen. It takes action.</p>
            </div>
            
            <div className="relative max-w-6xl mx-auto">
                {/* Central Hub */}
                <div className="flex items-center justify-center mb-16">
                    <div className="relative">
                        {/* Central AI Brain */}
                        <div className="w-32 h-32 rounded-full bg-gradient-to-r from-primary via-purple-600 to-violet-600 flex items-center justify-center shadow-2xl border-4 border-white/20 backdrop-blur-sm">
                            <div className="w-24 h-24 rounded-full bg-black/20 flex items-center justify-center">
                                <Cpu className="w-12 h-12 text-white animate-pulse" />
                            </div>
                        </div>
                        
                        {/* Orbiting Connection Lines */}
                        <div className="absolute inset-0 animate-spin" style={{ animationDuration: '20s' }}>
                            <div className="w-full h-full border-2 border-dashed border-primary/30 rounded-full"></div>
                        </div>
                        <div className="absolute inset-4 animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }}>
                            <div className="w-full h-full border border-dashed border-purple-400/20 rounded-full"></div>
                        </div>
                    </div>
                </div>

                {/* Feature Cards in Clean Grid - NO OVERLAP */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                    {features.slice(0, 3).map((feature, index) => (
                        <div key={index} className="relative group transform hover:scale-105 transition-all duration-500">
                            <div className={`absolute inset-0 bg-gradient-to-r ${
                                index === 2 
                                    ? 'from-yellow-400/40 via-orange-400/40 to-red-400/40' 
                                    : feature.glow || feature.gradient.replace('400', '500/20')
                            } rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500`}></div>
                            <div className="relative p-8 rounded-2xl bg-black/40 border border-white/20 backdrop-blur-xl hover:border-primary/50 transition-all duration-500 h-full">
                                <div className="flex items-center space-x-4 mb-4">
                                    <div className={`p-4 rounded-xl bg-gradient-to-r ${feature.gradient} bg-opacity-20 border border-white/30`}>
                                        <feature.icon className="w-8 h-8 text-white" />
                                    </div>
                                    <div className={`w-2 h-2 rounded-full animate-pulse ${
                                        index === 2 ? 'bg-yellow-400' : 'bg-primary'
                                    }`}></div>
                                </div>
                                <p className="text-white/90 leading-relaxed font-medium">
                                    {feature.text}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {features.slice(3, 5).map((feature, index) => (
                        <div key={index + 3} className="relative group transform hover:scale-105 transition-all duration-500">
                            <div className={`absolute inset-0 bg-gradient-to-r ${feature.glow || feature.gradient.replace('400', '500/20')} rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500`}></div>
                            <div className="relative p-8 rounded-2xl bg-black/40 border border-white/20 backdrop-blur-xl hover:border-primary/50 transition-all duration-500 h-full">
                                <div className="flex items-center space-x-4 mb-4">
                                    <div className={`p-4 rounded-xl bg-gradient-to-r ${feature.gradient} bg-opacity-20 border border-white/30`}>
                                        <feature.icon className="w-8 h-8 text-white" />
                                    </div>
                                    <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                                </div>
                                <p className="text-white/90 leading-relaxed font-medium">
                                    {feature.text}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
