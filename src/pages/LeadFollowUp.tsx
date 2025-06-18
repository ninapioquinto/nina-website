import { ArrowRight, Clock, Zap, Target, Users, CheckCircle, Star } from 'lucide-react';
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
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
                Never Lose a <span className="bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent">Hot Lead</span> Again.
              </h1>
              <h2 className="text-2xl md:text-3xl font-medium mb-6 text-white/90">
                Build a Follow-Up System That Works While You Sleep.
              </h2>
              <p className="text-xl text-white/80 mb-10 max-w-3xl mx-auto">
                I'll automate your lead follow-up within 72 hours so you close more deals and waste less time. 
                No missed leads. No manual chasing. Just more clients.
              </p>
              <Button 
                onClick={handleScrollToContact}
                size="lg" 
                className="luxury-button text-lg px-10 py-6 bg-gradient-to-r from-purple-600/20 via-violet-600/20 to-indigo-600/20 
                           border border-purple-400/40 text-white backdrop-blur-sm
                           hover:from-purple-600/30 hover:via-violet-600/30 hover:to-indigo-600/30 
                           hover:border-purple-300/60 hover:shadow-[0_0_40px_rgba(139,92,246,0.4)]
                           transition-all duration-700 group"
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
                <h2 className="text-3xl md:text-5xl font-bold mb-8">
                  The Real Reason You're <span className="text-red-400">Losing Sales?</span>
                </h2>
                <p className="text-xl text-white/80 mb-12">
                  Your leads aren't getting followed up fast enough.
                </p>
                <p className="text-lg text-white/70 mb-12 max-w-3xl mx-auto">
                  Even if you're running ads, getting DMs, or capturing inquiries, chances are some of your 
                  hottest leads are quietly slipping through the cracks.
                </p>
                
                <div className="grid md:grid-cols-3 gap-8 mb-12">
                  <Card className="luxury-card bg-accent/20 border-red-500/20 backdrop-blur-sm">
                    <CardContent className="p-8 text-center">
                      <div className="text-4xl mb-4">💸</div>
                      <h3 className="text-lg font-semibold text-red-400 mb-2">Delayed follow-ups</h3>
                      <p className="text-white/70">Lost revenue</p>
                    </CardContent>
                  </Card>
                  
                  <Card className="luxury-card bg-accent/20 border-red-500/20 backdrop-blur-sm">
                    <CardContent className="p-8 text-center">
                      <div className="text-4xl mb-4">😓</div>
                      <h3 className="text-lg font-semibold text-red-400 mb-2">Manual chasing</h3>
                      <p className="text-white/70">Burnout</p>
                    </CardContent>
                  </Card>
                  
                  <Card className="luxury-card bg-accent/20 border-red-500/20 backdrop-blur-sm">
                    <CardContent className="p-8 text-center">
                      <div className="text-4xl mb-4">📉</div>
                      <h3 className="text-lg font-semibold text-red-400 mb-2">Inconsistent systems</h3>
                      <p className="text-white/70">Missed growth</p>
                    </CardContent>
                  </Card>
                </div>
                
                <p className="text-2xl font-semibold text-purple-400">Let's fix that. Fast.</p>
              </div>
            </div>
          </section>

          {/* The Offer Section */}
          <section className="py-24 relative">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-16">
                  <h2 className="text-4xl md:text-5xl font-bold mb-6">
                    <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                      INTRODUCING: The Lead Follow-Up Fix
                    </span>
                  </h2>
                  <p className="text-xl text-white/80 mb-8">
                    A done-for-you automation system built in 72 hours that ensures every lead gets 
                    followed up with in under 5 minutes, automatically.
                  </p>
                  <p className="text-lg text-white/70 mb-12">
                    This isn't a bot. It's a revenue system that works 24/7 to move leads forward.
                  </p>
                </div>
                
                <Card className="luxury-card bg-accent/20 border-purple-500/20 backdrop-blur-sm">
                  <CardContent className="p-12">
                    <h3 className="text-2xl font-bold mb-8 text-center">You'll walk away with:</h3>
                    <div className="space-y-6">
                      <div className="flex items-start gap-4">
                        <Zap className="text-purple-400 mt-1 flex-shrink-0" size={24} />
                        <div>
                          <h4 className="font-semibold text-lg">Fully automated follow-up workflow</h4>
                          <p className="text-white/70">(email, SMS, or DM, your choice)</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-4">
                        <Target className="text-purple-400 mt-1 flex-shrink-0" size={24} />
                        <div>
                          <h4 className="font-semibold text-lg">Smart filters to prioritize high-quality leads</h4>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-4">
                        <Users className="text-purple-400 mt-1 flex-shrink-0" size={24} />
                        <div>
                          <h4 className="font-semibold text-lg">CRM tagging + lead tracking</h4>
                          <p className="text-white/70">(optional)</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-4">
                        <CheckCircle className="text-purple-400 mt-1 flex-shrink-0" size={24} />
                        <div>
                          <h4 className="font-semibold text-lg">Reminder triggers or alerts for manual touchpoints</h4>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-4">
                        <Clock className="text-purple-400 mt-1 flex-shrink-0" size={24} />
                        <div>
                          <h4 className="font-semibold text-lg">Delivered + tested in 3 days, flat fee</h4>
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
                <h2 className="text-3xl md:text-4xl font-bold mb-12">This is for you if:</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <Card className="luxury-card bg-accent/20 border-purple-500/20 backdrop-blur-sm">
                    <CardContent className="p-8">
                      <CheckCircle className="text-green-400 mx-auto mb-4" size={32} />
                      <p className="text-white/80">You're generating leads but not closing enough</p>
                    </CardContent>
                  </Card>
                  
                  <Card className="luxury-card bg-accent/20 border-purple-500/20 backdrop-blur-sm">
                    <CardContent className="p-8">
                      <CheckCircle className="text-green-400 mx-auto mb-4" size={32} />
                      <p className="text-white/80">You reply manually to every DM, email, or form entry</p>
                    </CardContent>
                  </Card>
                  
                  <Card className="luxury-card bg-accent/20 border-purple-500/20 backdrop-blur-sm">
                    <CardContent className="p-8">
                      <CheckCircle className="text-green-400 mx-auto mb-4" size={32} />
                      <p className="text-white/80">You feel like you're "leaving money on the table"</p>
                    </CardContent>
                  </Card>
                  
                  <Card className="luxury-card bg-accent/20 border-purple-500/20 backdrop-blur-sm">
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
                <h2 className="text-3xl md:text-4xl font-bold mb-12">Results Clients See</h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <Card className="luxury-card bg-gradient-to-br from-green-500/20 to-emerald-500/20 border-green-500/20 backdrop-blur-sm">
                    <CardContent className="p-8 text-center">
                      <div className="text-3xl font-bold text-green-400 mb-2">+40%</div>
                      <p className="text-white/80">increase in lead-to-call conversions</p>
                    </CardContent>
                  </Card>
                  
                  <Card className="luxury-card bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border-blue-500/20 backdrop-blur-sm">
                    <CardContent className="p-8 text-center">
                      <div className="text-3xl font-bold text-blue-400 mb-2">5-10 hours</div>
                      <p className="text-white/80">saved every week</p>
                    </CardContent>
                  </Card>
                  
                  <Card className="luxury-card bg-gradient-to-br from-purple-500/20 to-violet-500/20 border-purple-500/20 backdrop-blur-sm">
                    <CardContent className="p-8 text-center">
                      <div className="text-2xl font-bold text-purple-400 mb-2">Increased</div>
                      <p className="text-white/80">client trust with fast, professional replies</p>
                    </CardContent>
                  </Card>
                  
                  <Card className="luxury-card bg-gradient-to-br from-orange-500/20 to-red-500/20 border-orange-500/20 backdrop-blur-sm">
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
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">What Clients Say</h2>
                <div className="grid md:grid-cols-3 gap-8">
                  <Card className="luxury-card bg-accent/20 border-purple-500/20 backdrop-blur-sm">
                    <CardContent className="p-8">
                      <div className="flex mb-4">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="text-yellow-400 fill-current" size={20} />
                        ))}
                      </div>
                      <p className="text-white/80 mb-6 italic">
                        "I didn't realize how many leads we were missing until Nina set up the automation. 
                        We closed two new clients within a week."
                      </p>
                      <p className="text-purple-400 font-semibold">— Jordan, Agency Founder</p>
                    </CardContent>
                  </Card>
                  
                  <Card className="luxury-card bg-accent/20 border-purple-500/20 backdrop-blur-sm">
                    <CardContent className="p-8">
                      <div className="flex mb-4">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="text-yellow-400 fill-current" size={20} />
                        ))}
                      </div>
                      <p className="text-white/80 mb-6 italic">
                        "This was the easiest ROI decision. Since the system was set up, we've been able to 
                        respond to leads faster and close deals more efficiently."
                      </p>
                      <p className="text-purple-400 font-semibold">— Nancy, Real Estate Business Owner</p>
                    </CardContent>
                  </Card>
                  
                  <Card className="luxury-card bg-accent/20 border-purple-500/20 backdrop-blur-sm">
                    <CardContent className="p-8">
                      <div className="flex mb-4">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="text-yellow-400 fill-current" size={20} />
                        ))}
                      </div>
                      <p className="text-white/80 mb-6 italic">
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
                <h2 className="text-3xl md:text-4xl font-bold mb-8">Simple. Fast. Flat Fee.</h2>
                <Card className="luxury-card bg-gradient-to-br from-purple-500/20 to-violet-500/20 border-purple-500/30 backdrop-blur-sm">
                  <CardContent className="p-12">
                    <div className="text-6xl font-bold text-purple-400 mb-4">$500</div>
                    <p className="text-xl text-white/80 mb-8">Done-for-you setup starts at</p>
                    <div className="space-y-4 text-left max-w-md mx-auto">
                      <div className="flex items-center gap-3">
                        <Clock className="text-green-400" size={20} />
                        <span>Delivered in 72 hours</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Target className="text-green-400" size={20} />
                        <span>ROI in weeks (often days)</span>
                      </div>
                    </div>
                    <p className="text-white/70 mt-8">
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
                <h2 className="text-3xl md:text-4xl font-bold mb-12">Why Work With Me?</h2>
                <p className="text-xl text-white/80 mb-12">
                  You're not just hiring an automator. You're partnering with a Systems Engineer who:
                </p>
                <div className="grid md:grid-cols-3 gap-8 mb-12">
                  <Card className="luxury-card bg-accent/20 border-purple-500/20 backdrop-blur-sm">
                    <CardContent className="p-8 text-center">
                      <Zap className="text-purple-400 mx-auto mb-4" size={32} />
                      <p className="text-white/80">
                        Builds automations that grow businesses, not just connect tools
                      </p>
                    </CardContent>
                  </Card>
                  
                  <Card className="luxury-card bg-accent/20 border-purple-500/20 backdrop-blur-sm">
                    <CardContent className="p-8 text-center">
                      <Users className="text-purple-400 mx-auto mb-4" size={32} />
                      <p className="text-white/80">
                        Understands service-based founders (because I work with them daily)
                      </p>
                    </CardContent>
                  </Card>
                  
                  <Card className="luxury-card bg-accent/20 border-purple-500/20 backdrop-blur-sm">
                    <CardContent className="p-8 text-center">
                      <Target className="text-purple-400 mx-auto mb-4" size={32} />
                      <p className="text-white/80">
                        Values clarity, speed, and thoughtful strategy
                      </p>
                    </CardContent>
                  </Card>
                </div>
                <p className="text-lg text-purple-400 font-semibold">
                  This isn't my first Zap. It's my zone of genius.
                </p>
              </div>
            </div>
          </section>

          {/* Final CTA Section */}
          <section id="contact" className="py-24 relative">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-8">Ready to Fix Your Follow-Up?</h2>
                <p className="text-xl text-white/80 mb-8">
                  No more missed leads. No more second-guessing. Let's turn your traffic into clients, automatically.
                </p>
                <div className="bg-gradient-to-r from-red-500/20 to-orange-500/20 border border-red-500/30 rounded-lg p-6 mb-10 backdrop-blur-sm">
                  <p className="text-lg font-semibold text-red-400 mb-2">⚡ Limited Availability</p>
                  <p className="text-white/80">Spots open this week. Limited to 2 builds only.</p>
                </div>
                <Button 
                  onClick={handleScrollToContact}
                  size="lg" 
                  className="luxury-button text-lg px-10 py-6 bg-gradient-to-r from-purple-600 via-violet-600 to-indigo-600
                             text-white
                             hover:from-purple-500 hover:via-violet-500 hover:to-indigo-500 
                             hover:shadow-[0_0_40px_rgba(139,92,246,0.6)]
                             transition-all duration-700 group"
                >
                  Let's Build Your Custom Follow-Up System
                  <ArrowRight className="ml-2 transition-transform duration-500 group-hover:translate-x-2" />
                </Button>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default LeadFollowUp;
