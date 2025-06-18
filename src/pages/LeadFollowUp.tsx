
import { ArrowRight, Clock, Zap, Target, Users, CheckCircle, Star, Bot, Brain, Sparkles } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
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
            <div className="max-w-4xl mx-auto text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-primary to-purple-600 rounded-2xl flex items-center justify-center">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 bg-gradient-to-r from-purple-400 via-violet-500 to-indigo-400 bg-clip-text text-transparent">
                Never Lose a Hot Lead Again.
              </h1>
              <div className="flex items-center justify-center space-x-2 mb-8">
                <Sparkles className="w-6 h-6 text-primary animate-pulse" />
                <h2 className="text-2xl md:text-3xl font-medium text-white/90">
                  Build a Follow-Up System That Works While You Sleep.
                </h2>
                <Sparkles className="w-6 h-6 text-primary animate-pulse" />
              </div>
              <p className="text-xl text-white/70 mb-10 max-w-3xl mx-auto leading-relaxed">
                I'll automate your lead follow-up within 72 hours so you close more deals and waste less time. 
                No missed leads. No manual chasing. Just more clients.
              </p>
              <Button 
                onClick={handleScrollToContact}
                className="bg-gradient-to-r from-primary via-purple-600 to-violet-600 hover:from-primary/90 hover:via-purple-600/90 hover:to-violet-600/90 text-white px-10 py-6 text-lg rounded-2xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl shadow-lg glow-border"
              >
                Let's Build Your Custom Follow-Up System
                <ArrowRight className="ml-2 transition-transform duration-500 group-hover:translate-x-2" />
              </Button>
            </div>
          </section>

          {/* Pain Section */}
          <section className="py-24 relative">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-purple-400 via-violet-500 to-indigo-400 bg-clip-text text-transparent">
                  The Real Reason You're Losing Sales?
                </h2>
                <div className="text-xl text-white/80 mb-12 space-y-4">
                  <p>It's not your offer.</p>
                  <p>It's not your content.</p>
                  <p>It's not even your ads.</p>
                </div>
                
                <div className="mb-12">
                  <p className="text-2xl font-semibold text-white mb-6">The real bottleneck is this:</p>
                  <p className="text-xl text-white/80 mb-8 leading-relaxed">
                    Your leads aren't getting followed up fast enough—and it's costing you more than you realize.
                  </p>
                  <p className="text-lg text-white/70 mb-12 max-w-3xl mx-auto leading-relaxed">
                    Even if you're running ads, getting DMs, or capturing inquiries through your forms, some of your 
                    warmest leads are quietly slipping through the cracks. No system, no process, no sale.
                  </p>
                  <p className="text-xl font-semibold bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent mb-12">
                    Let's break it down:
                  </p>
                </div>
                
                <div className="grid md:grid-cols-3 gap-8 mb-12">
                  <Card className="bg-white/5 border border-white/20 backdrop-blur-xl hover:bg-white/10 transition-all duration-300">
                    <CardContent className="p-8 text-center">
                      <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-r from-purple-500 to-violet-500 rounded-xl flex items-center justify-center">
                        <Clock className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-lg font-semibold text-purple-400 mb-4">Delayed Follow-Ups = Lost Revenue</h3>
                      <p className="text-white/70 leading-relaxed">
                        People don't wait around. Leads that aren't contacted within the first 5–10 minutes cool off fast—or worse, 
                        they go straight to your competitor. Every delayed response is a potential client walking away, unseen and unheard.
                      </p>
                    </CardContent>
                  </Card>
                  
                  <Card className="bg-white/5 border border-white/20 backdrop-blur-xl hover:bg-white/10 transition-all duration-300">
                    <CardContent className="p-8 text-center">
                      <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-r from-violet-500 to-indigo-500 rounded-xl flex items-center justify-center">
                        <Users className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-lg font-semibold text-violet-400 mb-4">Manual Chasing = Burnout</h3>
                      <p className="text-white/70 leading-relaxed">
                        Manually tracking leads across emails, DMs, forms, and spreadsheets? That's a full-time job in itself. 
                        And as your business grows, that mental load compounds—stealing your focus from higher-level work and draining your energy.
                      </p>
                    </CardContent>
                  </Card>
                  
                  <Card className="bg-white/5 border border-white/20 backdrop-blur-xl hover:bg-white/10 transition-all duration-300">
                    <CardContent className="p-8 text-center">
                      <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center">
                        <Target className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-lg font-semibold text-indigo-400 mb-4">Inconsistent Systems = Missed Growth</h3>
                      <p className="text-white/70 leading-relaxed">
                        If your backend depends on memory, reminders, or random tools, you'll always be patching leaks instead of building momentum. 
                        Without a system, there's no scale. Growth requires consistency—and consistency starts with automation.
                      </p>
                    </CardContent>
                  </Card>
                </div>
                
                <div className="mb-8">
                  <p className="text-lg text-white/80 mb-4">
                    If you want to stop losing leads, save hours every week, and finally feel confident in your follow-up process…
                  </p>
                  <p className="text-2xl font-semibold bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent">
                    Let's fix that. Fast.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* The Offer Section */}
          <section className="py-24 relative">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-16">
                  <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 via-emerald-500 to-teal-400 bg-clip-text text-transparent">
                    INTRODUCING: The Lead Follow-Up Fix
                  </h2>
                  <p className="text-xl text-white/80 mb-8 leading-relaxed">
                    A done-for-you automation system built in 72 hours that ensures every lead gets 
                    followed up with in under 5 minutes, automatically.
                  </p>
                  <p className="text-lg text-white/70 mb-12 leading-relaxed">
                    This isn't a bot. It's a revenue system that works 24/7 to move leads forward.
                  </p>
                </div>
                
                <Card className="bg-white/5 border border-white/20 backdrop-blur-xl">
                  <CardContent className="p-12">
                    <h3 className="text-2xl font-bold mb-8 text-center bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent">You'll walk away with:</h3>
                    <div className="space-y-6">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-violet-500 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Zap className="text-white" size={20} />
                        </div>
                        <div>
                          <h4 className="font-semibold text-lg text-white">Fully automated follow-up workflow</h4>
                          <p className="text-white/70">(email, SMS, or DM, your choice)</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-violet-500 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Target className="text-white" size={20} />
                        </div>
                        <div>
                          <h4 className="font-semibold text-lg text-white">Smart filters to prioritize high-quality leads</h4>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-violet-500 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Users className="text-white" size={20} />
                        </div>
                        <div>
                          <h4 className="font-semibold text-lg text-white">CRM tagging + lead tracking</h4>
                          <p className="text-white/70">(optional)</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-violet-500 rounded-lg flex items-center justify-center flex-shrink-0">
                          <CheckCircle className="text-white" size={20} />
                        </div>
                        <div>
                          <h4 className="font-semibold text-lg text-white">Reminder triggers or alerts for manual touchpoints</h4>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-violet-500 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Clock className="text-white" size={20} />
                        </div>
                        <div>
                          <h4 className="font-semibold text-lg text-white">Delivered + tested in 3 days, flat fee</h4>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Who It's For Section */}
          <section className="py-24 relative">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 bg-gradient-to-r from-purple-400 via-violet-500 to-indigo-400 bg-clip-text text-transparent">This is for you if:</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <Card className="bg-white/5 border border-white/20 backdrop-blur-xl hover:bg-white/10 transition-all duration-300">
                    <CardContent className="p-8">
                      <CheckCircle className="text-green-400 mx-auto mb-4" size={32} />
                      <p className="text-white/80">You're generating leads but not closing enough</p>
                    </CardContent>
                  </Card>
                  
                  <Card className="bg-white/5 border border-white/20 backdrop-blur-xl hover:bg-white/10 transition-all duration-300">
                    <CardContent className="p-8">
                      <CheckCircle className="text-green-400 mx-auto mb-4" size={32} />
                      <p className="text-white/80">You reply manually to every DM, email, or form entry</p>
                    </CardContent>
                  </Card>
                  
                  <Card className="bg-white/5 border border-white/20 backdrop-blur-xl hover:bg-white/10 transition-all duration-300">
                    <CardContent className="p-8">
                      <CheckCircle className="text-green-400 mx-auto mb-4" size={32} />
                      <p className="text-white/80">You feel like you're "leaving money on the table"</p>
                    </CardContent>
                  </Card>
                  
                  <Card className="bg-white/5 border border-white/20 backdrop-blur-xl hover:bg-white/10 transition-all duration-300">
                    <CardContent className="p-8">
                      <CheckCircle className="text-green-400 mx-auto mb-4" size={32} />
                      <p className="text-white/80">You want more consistency, less chaos</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </section>

          {/* Results Section */}
          <section className="py-24 relative">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 bg-gradient-to-r from-purple-400 via-violet-500 to-indigo-400 bg-clip-text text-transparent">Results Clients See</h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <Card className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/20 backdrop-blur-xl hover:from-green-500/20 hover:to-emerald-500/20 transition-all duration-300">
                    <CardContent className="p-8 text-center">
                      <div className="text-3xl font-bold text-green-400 mb-2">+40%</div>
                      <p className="text-white/80">increase in lead-to-call conversions</p>
                    </CardContent>
                  </Card>
                  
                  <Card className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20 backdrop-blur-xl hover:from-blue-500/20 hover:to-cyan-500/20 transition-all duration-300">
                    <CardContent className="p-8 text-center">
                      <div className="text-3xl font-bold text-blue-400 mb-2">5-10 hours</div>
                      <p className="text-white/80">saved every week</p>
                    </CardContent>
                  </Card>
                  
                  <Card className="bg-gradient-to-br from-purple-500/10 to-violet-500/10 border border-purple-500/20 backdrop-blur-xl hover:from-purple-500/20 hover:to-violet-500/20 transition-all duration-300">
                    <CardContent className="p-8 text-center">
                      <div className="text-2xl font-bold text-purple-400 mb-2">Increased</div>
                      <p className="text-white/80">client trust with fast, professional replies</p>
                    </CardContent>
                  </Card>
                  
                  <Card className="bg-gradient-to-br from-orange-500/10 to-red-500/10 border border-orange-500/20 backdrop-blur-xl hover:from-orange-500/20 hover:to-red-500/20 transition-all duration-300">
                    <CardContent className="p-8 text-center">
                      <div className="text-2xl font-bold text-orange-400 mb-2">Less pressure</div>
                      <p className="text-white/80">on you or your team</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </section>

          {/* Testimonials Section */}
          <section className="py-24 relative">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 via-violet-500 to-indigo-400 bg-clip-text text-transparent">What Clients Say</h2>
                <div className="grid md:grid-cols-3 gap-8">
                  <Card className="bg-white/5 border border-white/20 backdrop-blur-xl hover:bg-white/10 transition-all duration-300">
                    <CardContent className="p-8">
                      <div className="flex mb-4">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="text-yellow-400 fill-current" size={20} />
                        ))}
                      </div>
                      <p className="text-white/80 mb-6 italic leading-relaxed">
                        "I didn't realize how many leads we were missing until Nina set up the automation. 
                        We closed two new clients within a week."
                      </p>
                      <p className="text-purple-400 font-semibold">— Jordan, Agency Founder</p>
                    </CardContent>
                  </Card>
                  
                  <Card className="bg-white/5 border border-white/20 backdrop-blur-xl hover:bg-white/10 transition-all duration-300">
                    <CardContent className="p-8">
                      <div className="flex mb-4">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="text-yellow-400 fill-current" size={20} />
                        ))}
                      </div>
                      <p className="text-white/80 mb-6 italic leading-relaxed">
                        "This was the easiest ROI decision. Since the system was set up, we've been able to 
                        respond to leads faster and close deals more efficiently."
                      </p>
                      <p className="text-purple-400 font-semibold">— Nancy, Real Estate Business Owner</p>
                    </CardContent>
                  </Card>
                  
                  <Card className="bg-white/5 border border-white/20 backdrop-blur-xl hover:bg-white/10 transition-all duration-300">
                    <CardContent className="p-8">
                      <div className="flex mb-4">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="text-yellow-400 fill-current" size={20} />
                        ))}
                      </div>
                      <p className="text-white/80 mb-6 italic leading-relaxed">
                        "I used to miss DMs from potential clients all the time. After the follow-up system 
                        was set up, I booked three discovery calls in one week without lifting a finger."
                      </p>
                      <p className="text-purple-400 font-semibold">— Kristina, Holistic Wellness Coach</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </section>

          {/* Pricing Section */}
          <section className="py-24 relative">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-purple-400 via-violet-500 to-indigo-400 bg-clip-text text-transparent">Simple. Fast. Flat Fee.</h2>
                <Card className="bg-white/5 border border-white/20 backdrop-blur-xl">
                  <CardContent className="p-12">
                    <div className="text-6xl font-bold bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent mb-4">$500</div>
                    <p className="text-xl text-white/80 mb-8">Done-for-you setup starts at</p>
                    <div className="space-y-4 text-left max-w-md mx-auto">
                      <div className="flex items-center gap-3">
                        <div className="w-6 h-6 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full flex items-center justify-center">
                          <Clock className="text-white" size={14} />
                        </div>
                        <span className="text-white/90">Delivered in 72 hours</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-6 h-6 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full flex items-center justify-center">
                          <Target className="text-white" size={14} />
                        </div>
                        <span className="text-white/90">ROI in weeks (often days)</span>
                      </div>
                    </div>
                    <p className="text-white/70 mt-8 leading-relaxed">
                      Custom pricing available for multi-channel, CRM-integrated builds.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Why Work With Me Section */}
          <section className="py-24 relative">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 bg-gradient-to-r from-purple-400 via-violet-500 to-indigo-400 bg-clip-text text-transparent">Why Work With Me?</h2>
                <p className="text-xl text-white/80 mb-12 leading-relaxed">
                  You're not just hiring an automator. You're partnering with a Systems Engineer who:
                </p>
                <div className="grid md:grid-cols-3 gap-8 mb-12">
                  <Card className="bg-white/5 border border-white/20 backdrop-blur-xl hover:bg-white/10 transition-all duration-300">
                    <CardContent className="p-8 text-center">
                      <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-r from-purple-500 to-violet-500 rounded-xl flex items-center justify-center">
                        <Zap className="text-white" size={24} />
                      </div>
                      <p className="text-white/80 leading-relaxed">
                        Builds automations that grow businesses, not just connect tools
                      </p>
                    </CardContent>
                  </Card>
                  
                  <Card className="bg-white/5 border border-white/20 backdrop-blur-xl hover:bg-white/10 transition-all duration-300">
                    <CardContent className="p-8 text-center">
                      <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-r from-purple-500 to-violet-500 rounded-xl flex items-center justify-center">
                        <Users className="text-white" size={24} />
                      </div>
                      <p className="text-white/80 leading-relaxed">
                        Understands service-based founders (because I work with them daily)
                      </p>
                    </CardContent>
                  </Card>
                  
                  <Card className="bg-white/5 border border-white/20 backdrop-blur-xl hover:bg-white/10 transition-all duration-300">
                    <CardContent className="p-8 text-center">
                      <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-r from-purple-500 to-violet-500 rounded-xl flex items-center justify-center">
                        <Target className="text-white" size={24} />
                      </div>
                      <p className="text-white/80 leading-relaxed">
                        Values clarity, speed, and thoughtful strategy
                      </p>
                    </CardContent>
                  </Card>
                </div>
                <p className="text-lg bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent font-semibold">
                  This isn't my first Zap. It's my zone of genius.
                </p>
              </div>
            </div>
          </section>

          {/* Final CTA Section */}
          <section id="contact" className="py-24 relative">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto text-center">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-purple-600/10 to-violet-600/10 blur-3xl rounded-3xl"></div>
                  <div className="relative p-12 rounded-3xl bg-white/5 border border-white/20 backdrop-blur-xl">
                    <h2 className="text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-purple-400 via-violet-500 to-indigo-400 bg-clip-text text-transparent">Ready to Fix Your Follow-Up?</h2>
                    <p className="text-xl text-white/80 mb-8 leading-relaxed">
                      No more missed leads. No more second-guessing. Let's turn your traffic into clients, automatically.
                    </p>
                    <div className="bg-gradient-to-r from-red-500/10 to-orange-500/10 border border-red-500/30 rounded-lg p-6 mb-10 backdrop-blur-sm">
                      <div className="flex items-center justify-center gap-2 mb-2">
                        <Zap className="text-red-400" size={20} />
                        <p className="text-lg font-semibold text-red-400">Limited Availability</p>
                      </div>
                      <p className="text-white/80">Spots open this week. Limited to 2 builds only.</p>
                    </div>
                    <Button 
                      onClick={handleScrollToContact}
                      className="bg-gradient-to-r from-primary via-purple-600 to-violet-600 hover:from-primary/90 hover:via-purple-600/90 hover:to-violet-600/90 text-white px-10 py-6 text-lg rounded-2xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl shadow-lg glow-border"
                    >
                      Let's Build Your Custom Follow-Up System
                      <ArrowRight className="ml-2 transition-transform duration-500 group-hover:translate-x-2" />
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
