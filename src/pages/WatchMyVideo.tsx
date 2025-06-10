
import { ArrowLeft, Download, Calendar, CheckCircle, X, Bot, MessageSquare, Mail, Clock, Target, Users, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Particles from '../components/Particles';

const WatchMyVideo = () => {
  const features = [
    { icon: MessageSquare, text: "Understands voice or text input from Telegram" },
    { icon: Target, text: "Chooses the correct task (email, meeting, blog, search, contact)" },
    { icon: Zap, text: "Triggers prebuilt automation using LangChain + n8n tools" },
    { icon: Bot, text: "Delivers results in Telegram with smart, contextual responses" },
    { icon: Clock, text: "Remembers conversations for multi-step workflows" }
  ];

  const setupSteps = [
    "Import the JSON into your n8n instance",
    "Connect your Telegram bot (instructions included in the guide)",
    "Add your OpenAI API Key",
    "Link your email, calendar, and contact workflows",
    "Customize behavior with simple prompt updates",
    "Test with your own text or voice messages in Telegram"
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
      result: "Looks up contact, sends email, replies with status"
    },
    {
      role: "📅 Executive Coach", 
      prompt: "Book meeting with Josh at 2pm Friday",
      result: "Finds contact, adds to calendar, confirms back"
    },
    {
      role: "✍️ Content Marketer",
      prompt: "Write a post about productivity hacks", 
      result: "AI-generated blog post delivered via Telegram"
    },
    {
      role: "🔎 Business Analyst",
      prompt: "Summarize Apple's latest keynote",
      result: "Searches the web (via Tavily), sends concise summary"
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
    "n8n + OpenAI + LangChain",
    "Telegram, Slack, WhatsApp",
    "CRM platforms, custom APIs, internal databases", 
    "Voice agents, web search, analytics, and more"
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      <Particles />
      <div className="relative z-10">
        <Navbar />
        
        <main className="pt-24 pb-16">
          <div className="container mx-auto px-4 max-w-5xl">
            {/* Header Section */}
            <div className="mb-16">
              <Link 
                to="/" 
                className="inline-flex items-center text-white/80 hover:text-primary transition-all duration-300 mb-8 group"
              >
                <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                Back to Home
              </Link>
              
              <div className="text-center mb-12">
                <div className="text-6xl mb-6 animate-float">👔</div>
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-violet-500 to-indigo-400 bg-clip-text text-transparent leading-tight">
                  Meet Your New Right Hand: The Executive Assistant AI Agent
                </h1>
                <p className="text-xl text-white/90 mb-8 leading-relaxed font-medium">
                  Automate Your Admin Right From Telegram (Built with n8n + AI)
                </p>
                <p className="text-lg text-white/70 mb-10 max-w-3xl mx-auto leading-relaxed">
                  This AI-powered assistant transforms Telegram messages into business actions. Emails, meetings, blog posts, and contact lookups are all handled for you so you can stay focused on what matters.
                </p>
                
                <Button className="bg-gradient-to-r from-primary via-purple-600 to-violet-600 hover:from-primary/90 hover:via-purple-600/90 hover:to-violet-600/90 text-white px-10 py-6 text-lg rounded-2xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl shadow-lg glow-border">
                  <Download className="w-5 h-5 mr-3" />
                  Download the automation workflow + setup guide
                </Button>
              </div>
            </div>

            {/* What It Does Section */}
            <Card className="luxury-card bg-white/5 border-white/20 rounded-3xl mb-16 backdrop-blur-xl">
              <CardHeader className="pb-6">
                <CardTitle className="text-3xl font-bold text-white mb-4 flex items-center">
                  🔧 What the Executive Assistant AI Agent Does
                </CardTitle>
                <p className="text-white/80 text-xl leading-relaxed">Your Executive Assistant doesn't just listen. It takes action.</p>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-4 p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                      <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                      <feature.icon className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                      <span className="text-white/90 leading-relaxed">{feature.text}</span>
                    </div>
                  ))}
                </div>
                <div className="text-center p-6 rounded-2xl bg-gradient-to-r from-primary/20 via-purple-600/20 to-violet-600/20 border border-primary/30">
                  <p className="text-2xl font-bold text-primary">You speak. It works. You move forward.</p>
                </div>
              </CardContent>
            </Card>

            {/* Setup Guide Section */}
            <Card className="luxury-card bg-white/5 border-white/20 backdrop-blur-xl rounded-3xl mb-16">
              <CardHeader>
                <CardTitle className="text-3xl font-bold text-white mb-4">
                  📘 Step-by-Step Setup Guide
                </CardTitle>
                <p className="text-white/80 text-xl">Getting started is fast and easy with no technical headaches.</p>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  {setupSteps.map((step, index) => (
                    <div key={index} className="flex items-start space-x-4 p-6 rounded-2xl bg-gradient-to-br from-white/10 via-white/5 to-transparent border border-white/20 hover:border-primary/30 transition-all duration-300">
                      <div className="w-8 h-8 bg-gradient-to-r from-primary to-purple-600 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
                        {index + 1}
                      </div>
                      <span className="text-white/90 leading-relaxed">{step}</span>
                    </div>
                  ))}
                </div>
                <div className="text-center p-6 rounded-2xl bg-gradient-to-r from-green-500/20 via-emerald-500/20 to-teal-500/20 border border-green-400/30">
                  <p className="text-xl font-semibold text-green-300">You'll go from download to delegation in under 30 minutes.</p>
                </div>
              </CardContent>
            </Card>

            {/* Target Audience Section */}
            <Card className="luxury-card bg-white/5 border-white/20 backdrop-blur-xl rounded-3xl mb-16">
              <CardHeader>
                <CardTitle className="text-3xl font-bold text-white mb-4">
                  👥 Designed for Business Leaders and Lean Teams
                </CardTitle>
                <p className="text-white/80 text-xl">This is for you if you're:</p>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {targetAudience.map((audience, index) => (
                    <div key={index} className="flex items-center space-x-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300">
                      <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                      <span className="text-white/90">{audience}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Use Cases Section */}
            <Card className="luxury-card bg-white/5 border-white/20 backdrop-blur-xl rounded-3xl mb-16">
              <CardHeader>
                <CardTitle className="text-3xl font-bold text-white mb-4">
                  💼 Use Case Examples
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <div className="min-w-full">
                    <div className="grid grid-cols-1 gap-6">
                      {useCases.map((useCase, index) => (
                        <div key={index} className="p-6 rounded-2xl bg-gradient-to-r from-white/10 via-white/5 to-transparent border border-white/20 hover:border-primary/30 transition-all duration-300">
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
                            <div className="text-white font-semibold text-lg">{useCase.role}</div>
                            <div className="text-white/80 italic">"{useCase.prompt}"</div>
                            <div className="text-white/90">{useCase.result}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Limitations Section */}
            <Card className="luxury-card bg-white/5 border-white/20 backdrop-blur-xl rounded-3xl mb-16">
              <CardHeader>
                <CardTitle className="text-3xl font-bold text-white mb-4">
                  ⚠️ What It Doesn't Do (Yet)
                </CardTitle>
                <p className="text-white/80 text-xl">The Executive Assistant AI Agent is powerful, but it's still a starter kit. It doesn't include:</p>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {limitations.map((limitation, index) => (
                    <div key={index} className="flex items-center space-x-4 p-4 rounded-xl bg-red-500/10 border border-red-400/20 hover:bg-red-500/15 transition-all duration-300">
                      <X className="w-5 h-5 text-red-400 flex-shrink-0" />
                      <span className="text-white/80">{limitation}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Custom Solution Section */}
            <Card className="luxury-card bg-gradient-to-br from-purple-600/20 via-violet-600/20 to-indigo-600/20 border border-purple-400/40 rounded-3xl mb-16 backdrop-blur-xl">
              <CardHeader>
                <CardTitle className="text-3xl font-bold text-white mb-4">
                  🧠 Ready for a Fully Integrated System?
                </CardTitle>
                <p className="text-white/80 text-xl">I help founders and teams build customized automation layers using tools like:</p>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  {tools.map((tool, index) => (
                    <div key={index} className="flex items-center space-x-4 p-4 rounded-xl bg-white/10 border border-white/20 hover:bg-white/15 transition-all duration-300">
                      <Zap className="w-6 h-6 text-primary flex-shrink-0" />
                      <span className="text-white/90 font-medium">{tool}</span>
                    </div>
                  ))}
                </div>
                <p className="text-white/80 mb-8 text-lg leading-relaxed">
                  If you need a business-grade solution that grows with your ops — not just a starter template — let's talk.
                </p>
                <div className="text-center">
                  <Link 
                    to="/work-with-me" 
                    className="inline-flex items-center bg-gradient-to-r from-primary via-purple-600 to-violet-600 hover:from-primary/90 hover:via-purple-600/90 hover:to-violet-600/90 text-white px-8 py-4 rounded-2xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl glow-border"
                  >
                    <Calendar className="w-5 h-5 mr-3" />
                    Book a Discovery Call
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* Final CTA Section */}
            <Card className="luxury-card bg-gradient-to-br from-purple-600/30 via-violet-600/30 to-indigo-600/30 border border-purple-400/50 rounded-3xl backdrop-blur-xl">
              <CardContent className="p-12 text-center">
                <h3 className="text-4xl font-bold text-white mb-8">
                  ✅ Get the Executive Assistant AI Agent
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                  <div className="flex items-center space-x-4 p-4 rounded-xl bg-white/10 border border-white/20">
                    <CheckCircle className="w-6 h-6 text-green-400" />
                    <span className="text-white/90 font-medium">🚀 Fully customizable</span>
                  </div>
                  <div className="flex items-center space-x-4 p-4 rounded-xl bg-white/10 border border-white/20">
                    <CheckCircle className="w-6 h-6 text-green-400" />
                    <span className="text-white/90 font-medium">📘 Setup guide included</span>
                  </div>
                  <div className="flex items-center space-x-4 p-4 rounded-xl bg-white/10 border border-white/20">
                    <CheckCircle className="w-6 h-6 text-green-400" />
                    <span className="text-white/90 font-medium">🔗 Telegram bot integration instructions provided</span>
                  </div>
                  <div className="flex items-center space-x-4 p-4 rounded-xl bg-white/10 border border-white/20">
                    <CheckCircle className="w-6 h-6 text-green-400" />
                    <span className="text-white/90 font-medium">📥 Instant download</span>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <Button className="bg-gradient-to-r from-primary via-purple-600 to-violet-600 hover:from-primary/90 hover:via-purple-600/90 hover:to-violet-600/90 text-white px-10 py-6 text-lg rounded-2xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl glow-border">
                    <Download className="w-6 h-6 mr-3" />
                    Download the Executive Assistant AI Agent + Guide
                  </Button>
                  <Link 
                    to="/work-with-me"
                    className="inline-flex items-center justify-center bg-white/10 hover:bg-white/20 text-white border border-white/30 hover:border-primary/50 px-10 py-6 text-lg rounded-2xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl backdrop-blur-sm"
                  >
                    <Calendar className="w-6 h-6 mr-3" />
                    Book a Discovery Call
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
        
        <Footer />
      </div>
    </div>
  );
};

export default WatchMyVideo;
