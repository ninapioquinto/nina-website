
import React from 'react';
import { Check, Award, Users, Globe, Target, Handshake, Star } from 'lucide-react';

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
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-transparent to-blue-900/10" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16 reveal">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Why Clients <span className="text-gradient">Choose Me</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Delivering exceptional results through certified expertise, strategic thinking, and unwavering commitment to your success.
          </p>
        </div>

        <div className="space-y-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className={`luxury-card-wrapper reveal luxury-delay-${(index + 1) * 100}`}
            >
              <div className="luxury-card bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-700">
                <div className="flex flex-col md:flex-row items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-xl flex items-center justify-center text-white">
                      <Check className="w-8 h-8" />
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="text-purple-400 mt-1">
                        {feature.icon}
                      </div>
                      <h3 className="text-xl md:text-2xl font-semibold text-white">
                        {feature.title}
                      </h3>
                    </div>
                    <p className="text-gray-300 leading-relaxed text-lg">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16 reveal">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-500/20 to-blue-500/20 backdrop-blur-md border border-white/10 rounded-full px-8 py-4">
            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-white font-medium">Ready to transform your business operations</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseMe;
