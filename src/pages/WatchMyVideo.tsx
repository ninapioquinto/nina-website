
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
          <div className="container mx-auto px-4 max-w-4xl">
            {/* Header Section */}
            <div className="mb-12">
              <Link 
                to="/" 
                className="inline-flex items-center text-primary hover:text-primary/80 transition-colors mb-6 group"
              >
                <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                Back to Home
              </Link>
              
              <div className="text-center">
                <div className="text-4xl mb-4">👔</div>
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-violet-500 to-indigo-400 bg-clip-text text-transparent">
                  Meet Your New Right Hand: The Executive Assistant AI Agent
                </h1>
                <p className="text-xl text-white/80 mb-8 leading-relaxed">
                  Automate Your Admin Right From Telegram (Built with n8n + AI)
                </p>
                <p className="text-lg text-white/70 mb-8 max-w-3xl mx-auto">
                  This AI-powered assistant transforms Telegram messages into business actions. Emails, meetings, blog posts, and contact lookups are all handled for you so you can stay focused on what matters.
                </p>
                
                <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg mb-4">
                  <Download className="w-5 h-5 mr-2" />
                  Download the automation workflow + setup guide
                </Button>
              </div>
            </div>

            {/* What It Does Section */}
            <Card className="bg-gradient-to-r from-purple-600/20 via-violet-600/20 to-indigo-600/20 border border-purple-400/40 rounded-2xl mb-12 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-white mb-4 flex items-center">
                  🔧 What the Executive Assistant AI Agent Does
                </CardTitle>
                <p className="text-white/80 text-lg">Your Executive Assistant doesn't just listen. It takes action.</p>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <feature.icon className="w-5 h-5 text-purple-300 flex-shrink-0" />
                      <span className="text-white">{feature.text}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 text-center">
                  <p className="text-xl font-semibold text-primary">You speak. It works. You move forward.</p>
                </div>
              </CardContent>
            </Card>

            {/* Setup Guide Section */}
            <Card className="bg-white/5 border-white/10 backdrop-blur-sm mb-12">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-white mb-4">
                  📘 Step-by-Step Setup Guide
                </CardTitle>
                <p className="text-white/80">Getting started is fast and easy with no technical headaches.</p>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {setupSteps.map((step, index) => (
                    <div key={index} className="flex items-start space-x-3 p-4 rounded-lg bg-white/5 border border-white/10">
                      <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
                        {index + 1}
                      </div>
                      <span className="text-white">{step}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 text-center">
                  <p className="text-lg font-semibold text-primary">You'll go from download to delegation in under 30 minutes.</p>
                </div>
              </CardContent>
            </Card>

            {/* Target Audience Section */}
            <Card className="bg-white/5 border-white/10 backdrop-blur-sm mb-12">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-white mb-4">
                  👥 Designed for Business Leaders and Lean Teams
                </CardTitle>
                <p className="text-white/80">This is for you if you're:</p>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {targetAudience.map((audience, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-white">{audience}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Use Cases Section */}
            <Card className="bg-white/5 border-white/10 backdrop-blur-sm mb-12">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-white mb-4">
                  💼 Use Case Examples
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full text-left">
                    <thead>
                      <tr className="border-b border-white/20">
                        <th className="text-white font-semibold p-3">Role / Industry</th>
                        <th className="text-white font-semibold p-3">Prompt Example</th>
                        <th className="text-white font-semibold p-3">Result</th>
                      </tr>
                    </thead>
                    <tbody>
                      {useCases.map((useCase, index) => (
                        <tr key={index} className="border-b border-white/10">
                          <td className="text-white p-3 font-medium">{useCase.role}</td>
                          <td className="text-white/80 p-3 italic">"{useCase.prompt}"</td>
                          <td className="text-white/80 p-3">{useCase.result}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>

            {/* Limitations Section */}
            <Card className="bg-white/5 border-white/10 backdrop-blur-sm mb-12">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-white mb-4">
                  ⚠️ What It Doesn't Do (Yet)
                </CardTitle>
                <p className="text-white/80">The Executive Assistant AI Agent is powerful, but it's still a starter kit. It doesn't include:</p>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {limitations.map((limitation, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <X className="w-5 h-5 text-red-400 flex-shrink-0" />
                      <span className="text-white/80">{limitation}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Custom Solution Section */}
            <Card className="bg-gradient-to-r from-purple-600/20 via-violet-600/20 to-indigo-600/20 border border-purple-400/40 rounded-2xl mb-12 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-white mb-4">
                  🧠 Ready for a Fully Integrated System?
                </CardTitle>
                <p className="text-white/80">I help founders and teams build customized automation layers using tools like:</p>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  {tools.map((tool, index) => (
                    <div key={index} className="flex items-center space-x-3 p-3 rounded-lg bg-white/5 border border-white/10">
                      <Zap className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-white">{tool}</span>
                    </div>
                  ))}
                </div>
                <p className="text-white/80 mb-6">
                  If you need a business-grade solution that grows with your ops — not just a starter template — let's talk.
                </p>
                <div className="text-center">
                  <Link 
                    to="/work-with-me" 
                    className="inline-block bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg"
                  >
                    <Calendar className="w-5 h-5 mr-2 inline" />
                    Book a Discovery Call
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* Final CTA Section */}
            <Card className="bg-gradient-to-r from-purple-600/30 via-violet-600/30 to-indigo-600/30 border border-purple-400/50 rounded-2xl backdrop-blur-sm">
              <CardContent className="p-8 text-center">
                <h3 className="text-3xl font-bold text-white mb-6">
                  ✅ Get the Executive Assistant AI Agent
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-white">🚀 Fully customizable</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-white">📘 Setup guide included</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-white">🔗 Telegram bot integration instructions provided</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-white">📥 Instant download</span>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg">
                    <Download className="w-5 h-5 mr-2" />
                    Download the Executive Assistant AI Agent + Guide
                  </Button>
                  <Link 
                    to="/work-with-me"
                    className="inline-flex items-center justify-center bg-white/10 hover:bg-white/20 text-white border border-white/30 px-8 py-4 text-lg rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg"
                  >
                    <Calendar className="w-5 h-5 mr-2" />
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
