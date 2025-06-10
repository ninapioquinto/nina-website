
import { ArrowLeft, Download, Calendar, CheckCircle, X, Bot, MessageSquare, Mail, Clock, Target, Users, Zap, Brain, Cpu, Network, Code, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Particles from '../components/Particles';
import StarryBackground from '../components/StarryBackground';

const WatchMyVideo = () => {
  const features = [
    { icon: MessageSquare, text: "Understands voice or text input from Telegram", gradient: "from-blue-400 to-cyan-400" },
    { icon: Target, text: "Chooses the correct task (email, meeting, blog, search, contact)", gradient: "from-purple-400 to-pink-400" },
    { icon: Zap, text: "Triggers prebuilt automation using LangChain + n8n tools", gradient: "from-yellow-400 to-orange-400" },
    { icon: Bot, text: "Delivers results in Telegram with smart, contextual responses", gradient: "from-green-400 to-emerald-400" },
    { icon: Clock, text: "Remembers conversations for multi-step workflows", gradient: "from-indigo-400 to-purple-400" }
  ];

  const setupSteps = [
    { step: "Import the JSON into your n8n instance", icon: Download },
    { step: "Connect your Telegram bot (instructions included in the guide)", icon: Bot },
    { step: "Add your OpenAI API Key", icon: Brain },
    { step: "Link your email, calendar, and contact workflows", icon: Network },
    { step: "Customize behavior with simple prompt updates", icon: Code },
    { step: "Test with your own text or voice messages in Telegram", icon: MessageSquare }
  ];

  const targetAudience = [
    "A founder juggling ops, outreach, and scheduling",
    "A consultant who needs to respond fast and stay organized",
    "A creator or exec tired of jumping between inbox, calendar, and tasks",
    "Looking to delegate the repetitive without hiring more help"
  ];

  const useCases = [
    {
      role: "📩 Founder",
      prompt: "Email Sarah to confirm tomorrow's pitch",
      result: "Looks up contact, sends email, replies with status",
      color: "from-blue-500/20 to-cyan-500/20"
    },
    {
      role: "📅 Executive Coach", 
      prompt: "Book meeting with Josh at 2pm Friday",
      result: "Finds contact, adds to calendar, confirms back",
      color: "from-purple-500/20 to-pink-500/20"
    },
    {
      role: "✍️ Content Marketer",
      prompt: "Write a post about productivity hacks", 
      result: "AI-generated blog post delivered via Telegram",
      color: "from-green-500/20 to-emerald-500/20"
    },
    {
      role: "🔎 Business Analyst",
      prompt: "Summarize Apple's latest keynote",
      result: "Searches the web (via Tavily), sends concise summary",
      color: "from-orange-500/20 to-yellow-500/20"
    }
  ];

  const limitations = [
    "Multi-user permissions or role logic",
    "Slack, WhatsApp, or multichannel support", 
    "Custom business logic or fallback workflows",
    "Deep CRM integrations or pipeline tracking",
    "Enterprise-level error handling or scalability"
  ];

  const tools = [
    { name: "n8n + OpenAI + LangChain", icon: Brain },
    { name: "Telegram, Slack, WhatsApp", icon: MessageSquare },
    { name: "CRM platforms, custom APIs, internal databases", icon: Network }, 
    { name: "Voice agents, web search, analytics, and more", icon: Cpu }
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      <StarryBackground />
      <Particles />
      <div className="relative z-10">
        <Navbar />
        
        <main className="pt-24 pb-16">
          <div className="container mx-auto px-4 max-w-6xl">
            {/* Header Section */}
            <div className="mb-20">
              <Link 
                to="/" 
                className="inline-flex items-center text-white/80 hover:text-primary transition-all duration-300 mb-8 group"
              >
                <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                Back to Home
              </Link>
              
              <div className="text-center mb-12 relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-purple-600/20 to-violet-600/20 blur-3xl rounded-full"></div>
                <div className="relative">
                  <div className="text-6xl mb-6 animate-float">🤖</div>
                  <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-violet-500 to-indigo-400 bg-clip-text text-transparent leading-tight">
                    Meet Your AI Executive Assistant
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
                    Download the AI Assistant + Setup Guide
                  </Button>
                </div>
              </div>
            </div>

            {/* What It Does Section - Hexagonal Layout */}
            <div className="mb-20 relative">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-white mb-4 flex items-center justify-center">
                  <Brain className="w-10 h-10 mr-4 text-primary" />
                  AI-Powered Automation Flow
                </h2>
                <p className="text-white/80 text-xl">Your Executive Assistant doesn't just listen. It takes action.</p>
              </div>
              
              <div className="relative">
                {/* Central AI Brain */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-r from-primary to-purple-600 flex items-center justify-center animate-pulse">
                    <Bot className="w-12 h-12 text-white" />
                  </div>
                </div>

                {/* Feature Cards in Circular Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-16">
                  {features.map((feature, index) => (
                    <div key={index} className="relative group">
                      <div className={`p-6 rounded-2xl bg-gradient-to-br ${feature.gradient}/10 border border-white/20 backdrop-blur-sm hover:border-primary/30 transition-all duration-500 hover:scale-105`}>
                        <div className="flex items-start space-x-4">
                          <div className={`p-3 rounded-xl bg-gradient-to-r ${feature.gradient} bg-opacity-20`}>
                            <feature.icon className="w-6 h-6 text-white" />
                          </div>
                          <span className="text-white/90 leading-relaxed flex-1">{feature.text}</span>
                        </div>
                      </div>
                      {/* Connection Line to Center */}
                      <div className="absolute top-1/2 left-1/2 w-16 h-0.5 bg-gradient-to-r from-primary/50 to-transparent transform -translate-y-1/2 opacity-30"></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Setup Guide - Timeline Style */}
            <div className="mb-20">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-white mb-4 flex items-center justify-center">
                  <Cpu className="w-10 h-10 mr-4 text-primary" />
                  Quick Setup Protocol
                </h2>
                <p className="text-white/80 text-xl">From download to delegation in under 30 minutes</p>
              </div>
              
              <div className="relative">
                {/* Timeline Line */}
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
                      
                      {/* Timeline Node */}
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

            {/* Target Audience - Card Grid */}
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

            {/* Use Cases - Interactive Cards */}
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
                      <div className="text-white font-bold text-xl">{useCase.role}</div>
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

            {/* Limitations - Warning Style */}
            <div className="mb-20">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-white mb-4 flex items-center justify-center">
                  <X className="w-10 h-10 mr-4 text-red-400" />
                  Current Limitations
                </h2>
                <p className="text-white/80 text-xl">The Executive Assistant AI Agent is powerful, but it's still a starter kit</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {limitations.map((limitation, index) => (
                  <div key={index} className="p-4 rounded-xl bg-red-500/5 border border-red-400/20 hover:bg-red-500/10 transition-all duration-300">
                    <div className="flex items-center space-x-3">
                      <X className="w-5 h-5 text-red-400 flex-shrink-0" />
                      <span className="text-white/80">{limitation}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Custom Solution - Tech Grid */}
            <div className="mb-20">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-white mb-4 flex items-center justify-center">
                  <Network className="w-10 h-10 mr-4 text-primary" />
                  Enterprise-Grade Solutions
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
                  If you need a business-grade solution that grows with your ops — not just a starter template — let's talk.
                </p>
                <Link 
                  to="/work-with-me" 
                  className="inline-flex items-center bg-gradient-to-r from-primary via-purple-600 to-violet-600 hover:from-primary/90 hover:via-purple-600/90 hover:to-violet-600/90 text-white px-8 py-4 rounded-2xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl glow-border"
                >
                  <Calendar className="w-5 h-5 mr-3" />
                  Book a Discovery Call
                </Link>
              </div>
            </div>

            {/* Final CTA - Futuristic Design */}
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
                      <span className="text-white/90 font-medium">🚀 Fully customizable</span>
                    </div>
                    <div className="p-4 rounded-xl bg-white/10 border border-white/20 hover:bg-white/15 transition-all duration-300">
                      <CheckCircle className="w-6 h-6 text-primary mb-2" />
                      <span className="text-white/90 font-medium">📘 Setup guide included</span>
                    </div>
                    <div className="p-4 rounded-xl bg-white/10 border border-white/20 hover:bg-white/15 transition-all duration-300">
                      <CheckCircle className="w-6 h-6 text-primary mb-2" />
                      <span className="text-white/90 font-medium">🔗 Telegram integration</span>
                    </div>
                    <div className="p-4 rounded-xl bg-white/10 border border-white/20 hover:bg-white/15 transition-all duration-300">
                      <CheckCircle className="w-6 h-6 text-primary mb-2" />
                      <span className="text-white/90 font-medium">📥 Instant download</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-6 justify-center">
                    <Button className="bg-gradient-to-r from-primary via-purple-600 to-violet-600 hover:from-primary/90 hover:via-purple-600/90 hover:to-violet-600/90 text-white px-10 py-6 text-lg rounded-2xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl glow-border">
                      <Download className="w-6 h-6 mr-3" />
                      Download the AI Assistant + Guide
                    </Button>
                    <Link 
                      to="/work-with-me"
                      className="inline-flex items-center justify-center bg-white/10 hover:bg-white/20 text-white border border-white/30 hover:border-primary/50 px-10 py-6 text-lg rounded-2xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl backdrop-blur-sm"
                    >
                      <Calendar className="w-6 h-6 mr-3" />
                      Book a Discovery Call
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
        
        <Footer />
      </div>
    </div>
  );
};

export default WatchMyVideo;
