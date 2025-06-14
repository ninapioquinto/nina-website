
import { Bot, CheckCircle, Download, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../../components/ui/button';

export const FinalCTA = () => {
    return (
        <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-purple-600/10 to-violet-600/10 blur-3xl rounded-3xl"></div>
            <div className="relative p-12 rounded-3xl bg-white/5 border border-white/20 backdrop-blur-xl">
                <div className="text-center">
                    <div className="flex items-center justify-center mb-8">
                        <div className="p-4 rounded-full bg-gradient-to-r from-primary to-purple-600 mr-4">
                            <Bot className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-4xl font-bold text-white">
                            Deploy Your AI Assistant Today
                        </h3>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                        <div className="p-4 rounded-xl bg-white/10 border border-white/20 hover:bg-white/15 transition-all duration-300">
                            <CheckCircle className="w-6 h-6 text-primary mb-2" />
                            <span className="text-white/90 font-medium">Fully customizable</span>
                        </div>
                        <div className="p-4 rounded-xl bg-white/10 border border-white/20 hover:bg-white/15 transition-all duration-300">
                            <CheckCircle className="w-6 h-6 text-primary mb-2" />
                            <span className="text-white/90 font-medium">Setup guide included</span>
                        </div>
                        <div className="p-4 rounded-xl bg-white/10 border border-white/20 hover:bg-white/15 transition-all duration-300">
                            <CheckCircle className="w-6 h-6 text-primary mb-2" />
                            <span className="text-white/90 font-medium">Telegram integration</span>
                        </div>
                        <div className="p-4 rounded-xl bg-white/10 border border-white/20 hover:bg-white/15 transition-all duration-300">
                            <CheckCircle className="w-6 h-6 text-primary mb-2" />
                            <span className="text-white/90 font-medium">Instant download</span>
                        </div>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                        <Button className="bg-gradient-to-r from-primary via-purple-600 to-violet-600 hover:from-primary/90 hover:via-purple-600/90 hover:to-violet-600/90 text-white px-10 py-6 text-lg rounded-2xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl shadow-lg glow-border">
                            <Download className="w-6 h-6 mr-3" />
                            Download the AI Assistant + Guide
                        </Button>
                        <Link to="/work-with-me" className="inline-flex items-center justify-center bg-white/10 hover:bg-white/20 text-white border border-white/30 hover:border-primary/50 px-10 py-6 text-lg rounded-2xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl backdrop-blur-sm">
                            <Calendar className="w-6 h-6 mr-3" />
                            Book a Discovery Call
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
