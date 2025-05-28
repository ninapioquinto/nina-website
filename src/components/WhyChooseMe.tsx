
import React from 'react';
import { Check, Award, Users, Globe, Target, Handshake, Star, Zap } from 'lucide-react';

const WhyChooseMe = () => {
  const features = [
    {
      icon: <Award className="w-6 h-6" />,
      title: "Certified expert delivering real results",
      description: "I bring a rare combination of certifications in AI automation, generative AI for data engineering, Make, and Airtable. Leveraging top no-code platforms like Zapier, Make, GoHighLevel, Airtable, and n8n, I create custom, scalable systems that streamline your operations and unlock your business's full potential without writing a single line of code."
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Strategic partner who sees the bigger picture",
      description: "I do more than execute tasks. I identify hidden bottlenecks and design workflows that future-proof your business. Clients regularly tell me I uncover opportunities they did not even realize existed, helping them save time and boost revenue."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Clear and supportive collaboration from start to finish",
      description: "Working with me means you will never be left guessing. I communicate complex automation strategies in a straightforward way, keeping you informed and confident throughout the process. My steady and thoughtful approach ensures your project runs smoothly and stress-free."
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: "Proven success across diverse industries",
      description: "I have optimized lead management for real estate teams and streamlined operations for coaches and business owners. My systems deliver measurable improvements in efficiency and growth. Clients consistently reclaim hours in their week and gain clarity in their workflows so they can focus on scaling their business."
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Experienced partner for clients worldwide",
      description: "I have worked with clients across the US, UK, Australia, and Canada who value my integrity, speed, and dedication to quality. When you work with me, you get a reliable partner committed to delivering clean and user-friendly systems that make your life easier."
    }
  ];

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Tech grid background */}
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-blue-900/20" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20 reveal">
          <div className="inline-flex items-center gap-2 bg-purple-500/10 backdrop-blur-md border border-purple-500/20 rounded-full px-6 py-2 mb-6">
            <Zap className="w-4 h-4 text-purple-400" />
            <span className="text-purple-300 text-sm font-medium">Why Choose Me</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Built for <span className="text-gradient">Excellence</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Delivering exceptional results through certified expertise, strategic thinking, and unwavering commitment to your success.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className={`luxury-card-wrapper reveal luxury-delay-${(index + 1) * 100}`}
            >
              <div className="group relative h-full">
                {/* Animated border */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-blue-500/20 to-purple-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-700 opacity-0 group-hover:opacity-100" />
                
                {/* Main card */}
                <div className="relative h-full bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:border-purple-500/30 transition-all duration-700 group-hover:bg-black/60">
                  {/* Icon with tech styling */}
                  <div className="relative mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500/20 to-blue-500/20 backdrop-blur-md border border-purple-500/30 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                      <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-blue-500 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
                      <Check className="w-8 h-8 text-purple-400 relative z-10" />
                    </div>
                    
                    {/* Floating icon */}
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg flex items-center justify-center group-hover:rotate-12 transition-transform duration-500">
                      {feature.icon}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-purple-300 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                    {feature.description}
                  </p>

                  {/* Tech accent line */}
                  <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-b-2xl scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA with tech styling */}
        <div className="text-center mt-20 reveal">
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full blur-xl animate-pulse-glow" />
            <div className="relative bg-black/60 backdrop-blur-xl border border-purple-500/30 rounded-full px-8 py-4 flex items-center gap-4">
              <div className="w-3 h-3 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full animate-pulse shadow-lg shadow-green-400/50" />
              <span className="text-white font-medium">Ready to transform your business operations</span>
              <div className="w-12 h-0.5 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseMe;
