
import { Target } from 'lucide-react';

interface UseCase {
    role: string;
    icon: React.ElementType;
    prompt: string;
    result: string;
    color: string;
}

interface UseCasesProps {
    useCases: UseCase[];
}

export const UseCases = ({ useCases }: UseCasesProps) => {
    return (
        <div className="mb-20">
            <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-white mb-4 flex items-center justify-center">
                    <Target className="w-10 h-10 mr-4 text-primary" />
                    Real-World Applications
                </h2>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {useCases.map((useCase, index) => (
                    <div key={index} className={`p-8 rounded-3xl bg-gradient-to-br ${useCase.color} border border-white/20 hover:border-primary/40 transition-all duration-500 hover:scale-105 group`}>
                        <div className="space-y-4">
                            <div className="flex items-center space-x-3">
                                <useCase.icon className="w-8 h-8 text-primary" />
                                <div className="text-white font-bold text-xl">{useCase.role}</div>
                            </div>
                            <div className="p-4 rounded-xl bg-white/10 backdrop-blur-sm">
                                <div className="text-white/70 text-sm mb-2">Input:</div>
                                <div className="text-white italic">"{useCase.prompt}"</div>
                            </div>
                            <div className="p-4 rounded-xl bg-primary/20 backdrop-blur-sm">
                                <div className="text-white/70 text-sm mb-2">Output:</div>
                                <div className="text-white font-medium">{useCase.result}</div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
