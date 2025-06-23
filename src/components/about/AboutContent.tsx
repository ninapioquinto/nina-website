
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
    <div className="reveal space-y-12">
      {/* Header Section */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 via-indigo-600/10 to-violet-600/10 rounded-2xl blur-xl"></div>
        <div className="relative bg-gradient-to-br from-slate-800/40 via-purple-900/20 to-indigo-900/30 backdrop-blur-xl rounded-2xl border border-white/10 p-8">
          <div className="flex items-start gap-6">
            <div className="flex-shrink-0">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-purple-500/20 to-indigo-500/20 border border-purple-400/30 flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-400/80 to-indigo-400/80 flex items-center justify-center">
                  <Award className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-2 text-white">
                Nina Pioquinto
              </h3>
              <p className="text-purple-300 font-medium mb-4">
                Certified Automation Systems Engineer
              </p>
              <div className="h-1 w-16 bg-gradient-to-r from-purple-400 to-violet-400 rounded-full mb-4"></div>
              <p className="text-gray-200 leading-relaxed">
                Specializing in strategic automation for businesses ready to simplify operations and scale with clarity and confidence.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Credentials Grid */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-gradient-to-br from-slate-800/40 via-purple-900/20 to-indigo-900/30 backdrop-blur-xl rounded-xl border border-white/10 p-6">
          <h4 className="text-lg font-semibold text-purple-300 mb-4 flex items-center gap-2">
            <Award className="w-5 h-5" />
            Credentials & Certifications
          </h4>
          <div className="grid gap-2">
            {credentials.map((credential, index) => (
              <div key={index} className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
                <span className="text-gray-300 text-sm">{credential}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-br from-slate-800/40 via-violet-900/20 to-purple-900/30 backdrop-blur-xl rounded-xl border border-white/10 p-6">
          <h4 className="text-lg font-semibold text-violet-300 mb-4 flex items-center gap-2">
            <Zap className="w-5 h-5" />
            Strategic Process
          </h4>
          <div className="space-y-3">
            {process.map((step, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-br from-violet-500/20 to-purple-500/20 rounded-full border border-violet-400/30 flex items-center justify-center text-xs font-bold text-violet-300">
                  {index + 1}
                </div>
                <span className="text-gray-300 text-sm leading-relaxed">{step}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Approach Cards */}
      <div>
        <h4 className="text-xl font-semibold text-white mb-6 text-center">My Approach</h4>
        <div className="grid md:grid-cols-3 gap-6">
          {approach.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="group">
                <div className="bg-gradient-to-br from-slate-800/40 via-purple-900/20 to-indigo-900/30 backdrop-blur-xl rounded-xl border border-white/10 p-6 h-full transition-all duration-300 group-hover:border-purple-400/30 group-hover:bg-white/5">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500/20 to-violet-500/20 rounded-full border border-purple-400/30 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-6 h-6 text-purple-300" />
                    </div>
                    <h5 className="text-lg font-semibold text-white mb-2">{item.title}</h5>
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
