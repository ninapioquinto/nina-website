
import React from 'react';
import { CheckCircle, Award, Users, Zap } from 'lucide-react';

const AboutContent = () => {
  const credentials = [
    'IBM Generative AI for Data Engineers',
    'AI Engineering Certified', 
    'Google Generative AI Leader',
    'Airtable Builder Certified',
    'Make.com Expert',
    'ClickUp Advanced User'
  ];

  const approach = [
    {
      icon: Zap,
      title: 'AI-Powered Solutions',
      description: 'Leveraging AI, data intelligence, and CRM optimization'
    },
    {
      icon: Users, 
      title: 'Tailored Strategy',
      description: 'Designing solutions aligned with your unique business goals'
    },
    {
      icon: CheckCircle,
      title: 'Scalable Systems', 
      description: 'Building systems that drive measurable, sustainable growth'
    }
  ];

  const process = [
    'Deep analysis of your current workflows and pain points',
    'Seamless integration into your existing business operations', 
    'Strategic foundation for sustainable, chaos-free growth'
  ];

  return (
    <div className="reveal space-y-16">
      {/* Main Profile Section */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-navy-600/10 via-navy-500/10 to-navy-700/10 rounded-3xl blur-xl"></div>
        <div className="relative bg-gradient-to-br from-slate-800/60 via-navy-900/30 to-navy-800/40 backdrop-blur-xl rounded-3xl border border-white/20 p-10">
          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8">
            <div className="flex-shrink-0">
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-navy-500/30 to-navy-600/30 border-2 border-navy-400/40 flex items-center justify-center shadow-2xl">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-navy-400/90 to-accent-light/90 flex items-center justify-center">
                  <Award className="w-8 h-8 text-white" />
                </div>
              </div>
            </div>
            
            <div className="flex-1 text-center lg:text-left">
              <h3 className="text-3xl lg:text-4xl font-bold mb-4 text-white">
                Nina Pioquinto
              </h3>
              
              <div className="h-1 w-20 bg-gradient-to-r from-navy-400 to-accent-light rounded-full mb-6 mx-auto lg:mx-0"></div>
              
              <p className="text-gray-200 text-lg leading-relaxed max-w-2xl">
                Specializing in strategic automation and custom app development for businesses ready to simplify operations and scale with clarity and confidence.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Credentials and Process Grid */}
      <div className="grid lg:grid-cols-2 gap-8">
        <div className="bg-gradient-to-br from-slate-800/60 via-navy-900/30 to-navy-800/40 backdrop-blur-xl rounded-2xl border border-white/20 p-8">
          <h4 className="text-xl font-semibold text-navy-300 mb-6 flex items-center gap-3">
            <div className="w-8 h-8 bg-navy-500/20 rounded-lg flex items-center justify-center">
              <Award className="w-5 h-5" />
            </div>
            Credentials & Certifications
          </h4>
          <div className="space-y-3">
            {credentials.map((credential, index) => (
              <div key={index} className="flex items-center gap-3 group">
                <div className="w-2 h-2 bg-navy-400 rounded-full group-hover:scale-125 transition-transform duration-200"></div>
                <span className="text-gray-300 text-sm group-hover:text-white transition-colors duration-200">
                  {credential}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-br from-slate-800/60 via-navy-900/30 to-navy-800/40 backdrop-blur-xl rounded-2xl border border-white/20 p-8">
          <h4 className="text-xl font-semibold text-navy-300 mb-6 flex items-center gap-3">
            <div className="w-8 h-8 bg-navy-500/20 rounded-lg flex items-center justify-center">
              <Zap className="w-5 h-5" />
            </div>
            Strategic Process
          </h4>
          <div className="space-y-4">
            {process.map((step, index) => (
              <div key={index} className="flex items-start gap-4 group">
                <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-navy-500/30 to-accent-light/30 rounded-full border border-navy-400/40 flex items-center justify-center text-sm font-bold text-navy-300 group-hover:scale-110 transition-transform duration-200">
                  {index + 1}
                </div>
                <span className="text-gray-300 text-sm leading-relaxed group-hover:text-white transition-colors duration-200">
                  {step}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Approach Cards */}
      <div className="space-y-8">
        <div className="text-center">
          <h4 className="text-2xl font-semibold text-white mb-2">My Approach</h4>
          <div className="h-1 w-16 bg-gradient-to-r from-navy-400 to-accent-light rounded-full mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {approach.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="group">
                <div className="bg-gradient-to-br from-slate-800/60 via-navy-900/30 to-navy-800/40 backdrop-blur-xl rounded-2xl border border-white/20 p-8 h-full transition-all duration-300 group-hover:border-navy-400/40 group-hover:bg-white/5 group-hover:transform group-hover:scale-105">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-navy-500/30 to-accent-light/30 rounded-2xl border border-navy-400/40 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <Icon className="w-8 h-8 text-navy-300" />
                    </div>
                    <h5 className="text-xl font-semibold text-white mb-3">{item.title}</h5>
                    <p className="text-gray-300 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
