
import { ArrowRight, Clock, Zap, Target, Users, CheckCircle, Star, Bot, Brain, Sparkles, TrendingUp, Shield, Rocket } from 'lucide-react';
import { Button } from '../components/ui/button';
import Particles from '../components/Particles';
import StarryBackground from '../components/StarryBackground';

const LeadFollowUp = () => {
  const handleScrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <StarryBackground />
      <Particles />
      <div className="relative z-10">
        <div className="min-h-screen">
          {/* Hero Section */}
          <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-4">
            <div className="max-w-6xl mx-auto text-center">
              <div className="relative mb-8">
                <div className="w-20 h-20 mx-auto bg-gradient-to-r from-purple-500 via-violet-500 to-indigo-500 rounded-3xl flex items-center justify-center shadow-2xl shadow-purple-500/25 mb-6 animate-float">
                  <Target className="w-10 h-10 text-white" />
                </div>
                <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/20 via-violet-500/20 to-indigo-500/20 blur-xl rounded-full"></div>
              </div>
              
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-8 bg-gradient-to-r from-white via-purple-200 to-violet-300 bg-clip-text text-transparent animate-fade-in">
                Never Lose a Hot Lead Again.
              </h1>
              
              <div className="flex items-center justify-center space-x-3 mb-10 animate-fade-in-right">
                <div className="h-px w-12 bg-gradient-to-r from-transparent to-purple-500"></div>
                <Sparkles className="w-6 h-6 text-purple-400 animate-pulse" />
                <h2 className="text-2xl md:text-4xl font-medium text-white/90">
                  Build a Follow-Up System That Works While You Sleep
                </h2>
                <Sparkles className="w-6 h-6 text-purple-400 animate-pulse" />
                <div className="h-px w-12 bg-gradient-to-l from-transparent to-purple-500"></div>
              </div>
              
              <p className="text-xl md:text-2xl text-white/70 mb-12 max-w-4xl mx-auto leading-relaxed animate-fade-in-left">
                I'll automate your lead follow-up within 72 hours so you close more deals and waste less time. 
                No missed leads. No manual chasing. Just more clients.
              </p>
              
              <Button 
                onClick={handleScrollToContact}
                className="bg-gradient-to-r from-purple-600 via-violet-600 to-indigo-600 hover:from-purple-500 hover:via-violet-500 hover:to-indigo-500 text-white px-12 py-8 text-xl rounded-2xl font-semibold transition-all duration-500 hover:scale-110 hover:shadow-2xl shadow-xl glow-border group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                Let's Build Your Custom Follow-Up System
                <ArrowRight className="ml-3 transition-transform duration-500 group-hover:translate-x-2" />
              </Button>
            </div>
          </section>

          {/* Pain Section - Redesigned without boxes */}
          <section className="py-32 relative">
            <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 via-transparent to-violet-900/20"></div>
            <div className="container mx-auto px-4 relative">
              <div className="max-w-5xl mx-auto">
                <div className="text-center mb-20">
                  <div className="inline-flex items-center gap-3 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full px-6 py-3 mb-8">
                    <Brain className="w-5 h-5 text-purple-400" />
                    <span className="text-purple-300 font-medium">The Real Problem</span>
                  </div>
                  
                  <h2 className="text-4xl md:text-6xl font-bold mb-12 bg-gradient-to-r from-white via-purple-200 to-violet-300 bg-clip-text text-transparent">
                    The Real Reason You're Losing Sales?
                  </h2>
                  
                  <div className="space-y-6 text-2xl md:text-3xl text-white/80 mb-16">
                    <p className="animate-fade-in" style={{animationDelay: '0.2s'}}>It's not your offer.</p>
                    <p className="animate-fade-in" style={{animationDelay: '0.4s'}}>It's not your content.</p>
                    <p className="animate-fade-in" style={{animationDelay: '0.6s'}}>It's not even your ads.</p>
                  </div>
                  
                  <div className="bg-gradient-to-r from-purple-500/10 via-violet-500/5 to-indigo-500/10 backdrop-blur-xl border border-purple-500/20 rounded-3xl p-12 mb-16">
                    <h3 className="text-3xl font-bold text-white mb-6">The real bottleneck is this:</h3>
                    <p className="text-xl md:text-2xl text-purple-200 leading-relaxed">
                      Your leads aren't getting followed up fast enough—and it's costing you more than you realize.
                    </p>
                  </div>
                  
                  <p className="text-lg md:text-xl text-white/70 mb-16 max-w-4xl mx-auto leading-relaxed">
                    Even if you're running ads, getting DMs, or capturing inquiries through your forms, some of your 
                    warmest leads are quietly slipping through the cracks. No system, no process, no sale.
                  </p>
                </div>
                
                {/* Pain Points - Modern Layout */}
                <div className="grid md:grid-cols-3 gap-12 mb-20">
                  <div className="text-center group">
                    <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-red-500 to-orange-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-red-500/25 transition-all duration-300 group-hover:scale-110">
                      <Clock className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">Delayed Follow-Ups = Lost Revenue</h3>
                    <p className="text-white/70 leading-relaxed">
                      People don't wait around. Leads that aren't contacted within the first 5–10 minutes cool off fast—or worse, 
                      they go straight to your competitor. Every delayed response is a potential client walking away, unseen and unheard.
                    </p>
                  </div>
                  
                  <div className="text-center group">
                    <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-orange-500/25 transition-all duration-300 group-hover:scale-110">
                      <Users className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">Manual Chasing = Burnout</h3>
                    <p className="text-white/70 leading-relaxed">
                      Manually tracking leads across emails, DMs, forms, and spreadsheets? That's a full-time job in itself. 
                      And as your business grows, that mental load compounds—stealing your focus from higher-level work and draining your energy.
                    </p>
                  </div>
                  
                  <div className="text-center group">
                    <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-yellow-500 to-red-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-yellow-500/25 transition-all duration-300 group-hover:scale-110">
                      <TrendingUp className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">Inconsistent Systems = Missed Growth</h3>
                    <p className="text-white/70 leading-relaxed">
                      If your backend depends on memory, reminders, or random tools, you'll always be patching leaks instead of building momentum. 
                      Without a system, there's no scale. Growth requires consistency—and consistency starts with automation.
                    </p>
                  </div>
                </div>
                
                <div className="text-center">
                  <p className="text-xl text-white/80 mb-6">
                    If you want to stop losing leads, save hours every week, and finally feel confident in your follow-up process…
                  </p>
                  <p className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent">
                    Let's fix that. Fast.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* The Offer Section - Redesigned */}
          <section className="py-32 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-green-900/10 via-emerald-900/5 to-teal-900/10"></div>
            <div className="container mx-auto px-4 relative">
              <div className="max-w-5xl mx-auto">
                <div className="text-center mb-20">
                  <div className="inline-flex items-center gap-3 bg-green-500/10 backdrop-blur-xl border border-green-500/20 rounded-full px-6 py-3 mb-8">
                    <Rocket className="w-5 h-5 text-green-400" />
                    <span className="text-green-300 font-medium">The Solution</span>
                  </div>
                  
                  <h2 className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-green-400 via-emerald-300 to-teal-400 bg-clip-text text-transparent">
                    The Lead Follow-Up Fix
                  </h2>
                  
                  <p className="text-xl md:text-2xl text-white/80 mb-8 leading-relaxed max-w-4xl mx-auto">
                    A done-for-you automation system built in 72 hours that ensures every lead gets 
                    followed up with in under 5 minutes, automatically.
                  </p>
                  
                  <p className="text-lg text-white/70 mb-16 leading-relaxed">
                    This isn't a bot. It's a revenue system that works 24/7 to move leads forward.
                  </p>
                </div>
                
                <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl p-12 shadow-2xl">
                  <h3 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent">
                    You'll walk away with:
                  </h3>
                  
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="flex items-start gap-6 group">
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-violet-500 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <Zap className="text-white" size={24} />
                      </div>
                      <div>
                        <h4 className="font-bold text-xl text-white mb-2">Fully automated follow-up workflow</h4>
                        <p className="text-white/70">(email, SMS, or DM, your choice)</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-6 group">
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-violet-500 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <Target className="text-white" size={24} />
                      </div>
                      <div>
                        <h4 className="font-bold text-xl text-white mb-2">Smart filters to prioritize high-quality leads</h4>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-6 group">
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-violet-500 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <Users className="text-white" size={24} />
                      </div>
                      <div>
                        <h4 className="font-bold text-xl text-white mb-2">CRM tagging + lead tracking</h4>
                        <p className="text-white/70">(optional)</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-6 group">
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-violet-500 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <CheckCircle className="text-white" size={24} />
                      </div>
                      <div>
                        <h4 className="font-bold text-xl text-white mb-2">Reminder triggers or alerts for manual touchpoints</h4>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-12 p-8 bg-gradient-to-r from-purple-500/10 to-violet-500/10 rounded-2xl border border-purple-500/20">
                    <div className="flex items-center gap-4 text-center justify-center">
                      <Clock className="w-8 h-8 text-purple-400" />
                      <span className="text-2xl font-bold text-white">Delivered + tested in 3 days, flat fee</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Who It's For Section - Simplified */}
          <section className="py-32 relative">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-4xl md:text-5xl font-bold mb-16 bg-gradient-to-r from-white via-purple-200 to-violet-300 bg-clip-text text-transparent">
                  This is for you if:
                </h2>
                
                <div className="grid md:grid-cols-2 gap-8 text-left">
                  {[
                    "You're generating leads but not closing enough",
                    "You reply manually to every DM, email, or form entry",
                    "You feel like you're 'leaving money on the table'",
                    "You want more consistency, less chaos"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-4 p-6 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl hover:bg-white/10 transition-all duration-300">
                      <CheckCircle className="text-green-400 flex-shrink-0" size={24} />
                      <p className="text-white/90 text-lg">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Results Section - Enhanced */}
          <section className="py-32 relative">
            <div className="absolute inset-0 bg-gradient-to-b from-blue-900/10 via-transparent to-purple-900/10"></div>
            <div className="container mx-auto px-4 relative">
              <div className="max-w-5xl mx-auto text-center">
                <h2 className="text-4xl md:text-5xl font-bold mb-20 bg-gradient-to-r from-white via-purple-200 to-violet-300 bg-clip-text text-transparent">
                  Results Clients See
                </h2>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {[
                    { number: "+40%", text: "increase in lead-to-call conversions", gradient: "from-green-500 to-emerald-500", color: "green" },
                    { number: "5-10 hours", text: "saved every week", gradient: "from-blue-500 to-cyan-500", color: "blue" },
                    { number: "Increased", text: "client trust with fast, professional replies", gradient: "from-purple-500 to-violet-500", color: "purple" },
                    { number: "Less pressure", text: "on you or your team", gradient: "from-orange-500 to-red-500", color: "orange" }
                  ].map((result, index) => (
                    <div key={index} className="text-center group hover:scale-105 transition-transform duration-300">
                      <div className={`text-4xl md:text-5xl font-bold bg-gradient-to-r ${result.gradient} bg-clip-text text-transparent mb-4`}>
                        {result.number}
                      </div>
                      <p className="text-white/80">{result.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Testimonials Section - Modern Cards */}
          <section className="py-32 relative">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-20 bg-gradient-to-r from-white via-purple-200 to-violet-300 bg-clip-text text-transparent">
                  What Clients Say
                </h2>
                
                <div className="grid md:grid-cols-3 gap-8">
                  {[
                    {
                      quote: "I didn't realize how many leads we were missing until Nina set up the automation. We closed two new clients within a week.",
                      author: "Jordan, Agency Founder"
                    },
                    {
                      quote: "This was the easiest ROI decision. Since the system was set up, we've been able to respond to leads faster and close deals more efficiently.",
                      author: "Nancy, Real Estate Business Owner"
                    },
                    {
                      quote: "I used to miss DMs from potential clients all the time. After the follow-up system was set up, I booked three discovery calls in one week without lifting a finger.",
                      author: "Kristina, Holistic Wellness Coach"
                    }
                  ].map((testimonial, index) => (
                    <div key={index} className="bg-white/5 backdrop-blur-2xl border border-white/20 rounded-3xl p-8 hover:bg-white/10 transition-all duration-500 hover:scale-105">
                      <div className="flex mb-6">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="text-yellow-400 fill-current" size={20} />
                        ))}
                      </div>
                      <p className="text-white/80 mb-8 italic leading-relaxed text-lg">
                        "{testimonial.quote}"
                      </p>
                      <p className="text-purple-400 font-semibold">— {testimonial.author}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Pricing Section - Enhanced */}
          <section className="py-32 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 via-transparent to-violet-900/20"></div>
            <div className="container mx-auto px-4 relative">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-4xl md:text-5xl font-bold mb-12 bg-gradient-to-r from-white via-purple-200 to-violet-300 bg-clip-text text-transparent">
                  Simple. Fast. Flat Fee.
                </h2>
                
                <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-2xl border border-white/20 rounded-3xl p-16 shadow-2xl">
                  <div className="text-8xl font-bold bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent mb-6">
                    $500
                  </div>
                  <p className="text-2xl text-white/80 mb-12">Done-for-you setup starts at</p>
                  
                  <div className="flex flex-col md:flex-row items-center justify-center gap-12 mb-12">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full flex items-center justify-center">
                        <Clock className="text-white" size={20} />
                      </div>
                      <span className="text-white/90 text-xl">Delivered in 72 hours</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full flex items-center justify-center">
                        <Target className="text-white" size={20} />
                      </div>
                      <span className="text-white/90 text-xl">ROI in weeks (often days)</span>
                    </div>
                  </div>
                  
                  <p className="text-white/70 leading-relaxed text-lg">
                    Custom pricing available for multi-channel, CRM-integrated builds.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Why Work With Me Section */}
          <section className="py-32 relative">
            <div className="container mx-auto px-4">
              <div className="max-w-5xl mx-auto text-center">
                <h2 className="text-4xl md:text-5xl font-bold mb-12 bg-gradient-to-r from-white via-purple-200 to-violet-300 bg-clip-text text-transparent">
                  Why Work With Me?
                </h2>
                <p className="text-xl md:text-2xl text-white/80 mb-16 leading-relaxed">
                  You're not just hiring an automator. You're partnering with a Systems Engineer who:
                </p>
                
                <div className="grid md:grid-cols-3 gap-12 mb-16">
                  {[
                    { icon: Zap, text: "Builds automations that grow businesses, not just connect tools" },
                    { icon: Users, text: "Understands service-based founders (because I work with them daily)" },
                    { icon: Target, text: "Values clarity, speed, and thoughtful strategy" }
                  ].map((item, index) => (
                    <div key={index} className="text-center group">
                      <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-purple-500 to-violet-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-purple-500/25 transition-all duration-300 group-hover:scale-110">
                        <item.icon className="text-white" size={28} />
                      </div>
                      <p className="text-white/80 leading-relaxed text-lg">{item.text}</p>
                    </div>
                  ))}
                </div>
                
                <p className="text-2xl bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent font-bold">
                  This isn't my first Zap. It's my zone of genius.
                </p>
              </div>
            </div>
          </section>

          {/* Final CTA Section */}
          <section id="contact" className="py-32 relative">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-violet-500/20 to-indigo-500/20 blur-3xl rounded-3xl"></div>
                  <div className="relative p-16 rounded-3xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 backdrop-blur-2xl shadow-2xl">
                    <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-white via-purple-200 to-violet-300 bg-clip-text text-transparent">
                      Ready to Fix Your Follow-Up?
                    </h2>
                    <p className="text-xl md:text-2xl text-white/80 mb-12 leading-relaxed">
                      No more missed leads. No more second-guessing. Let's turn your traffic into clients, automatically.
                    </p>
                    
                    <div className="bg-gradient-to-r from-orange-500/10 to-red-500/10 border border-orange-500/30 rounded-2xl p-8 mb-12 backdrop-blur-sm">
                      <div className="flex items-center justify-center gap-3 mb-3">
                        <Shield className="text-orange-400" size={24} />
                        <p className="text-xl font-bold text-orange-400">Limited Availability</p>
                      </div>
                      <p className="text-white/80 text-lg">Spots open this week. Limited to 2 builds only.</p>
                    </div>
                    
                    <Button 
                      onClick={handleScrollToContact}
                      className="bg-gradient-to-r from-purple-600 via-violet-600 to-indigo-600 hover:from-purple-500 hover:via-violet-500 hover:to-indigo-500 text-white px-12 py-8 text-xl rounded-2xl font-semibold transition-all duration-500 hover:scale-110 hover:shadow-2xl shadow-xl glow-border group relative overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      Let's Build Your Custom Follow-Up System
                      <ArrowRight className="ml-3 transition-transform duration-500 group-hover:translate-x-2" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default LeadFollowUp;
