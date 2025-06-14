
import { ArrowLeft, Download, Bot, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../../components/ui/button';

export const AssistantHeader = () => {
    return (
        <div className="mb-20">
            <Link to="/" className="inline-flex items-center text-white/80 hover:text-primary transition-all duration-300 mb-8 group">
                <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                Back to Home
            </Link>
            
            <div className="text-center mb-12 relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-purple-600/20 to-violet-600/20 blur-3xl rounded-full"></div>
                <div className="relative">
                    <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-primary to-purple-600 rounded-2xl flex items-center justify-center">
                        <Bot className="w-8 h-8 text-white" />
                    </div>
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-violet-500 to-indigo-400 bg-clip-text text-transparent leading-tight">
                        AI Executive Assistant
                    </h1>
                    <div className="flex items-center justify-center space-x-2 mb-8">
                        <Sparkles className="w-6 h-6 text-primary animate-pulse" />
                        <p className="text-xl text-white/90 font-medium">
                            Automate Your Admin Right From Telegram
                        </p>
                        <Sparkles className="w-6 h-6 text-primary animate-pulse" />
                    </div>
                    <p className="text-lg text-white/70 mb-10 max-w-4xl mx-auto leading-relaxed">
                        This AI-powered assistant transforms Telegram messages into business actions. Emails, meetings, blog posts, and contact lookups are all handled for you so you can stay focused on what matters.
                    </p>
                    
                    <Button className="bg-gradient-to-r from-primary via-purple-600 to-violet-600 hover:from-primary/90 hover:via-purple-600/90 hover:to-violet-600/90 text-white px-10 py-6 text-lg rounded-2xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl shadow-lg glow-border">
                        <Download className="w-5 h-5 mr-3" />
                        Download the AI Assistant
                    </Button>
                </div>
            </div>
        </div>
    )
}
