'use client';

import React from 'react';
import { Activity, MessageCircle } from 'lucide-react';
import TechMap from './TechMap';
import SuccessChart from './SuccessChart';
import ChatConversation from './ChatConversation';

const WhyChooseMe = () => {
  return (
    <section className="px-4 py-8 sm:py-16 md:py-32 relative overflow-hidden">
      {/* Tech grid background */}
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-blue-900/20" />
      
      <div className="mx-auto grid max-w-5xl border border-purple-500/20 backdrop-blur-xl bg-black/20 rounded-2xl grid-cols-1 md:grid-cols-2 relative z-10 overflow-hidden">
        <div className="relative">
          <div className="p-4 sm:p-6 md:p-12">
            <span className="text-purple-300 flex items-center gap-2 text-sm sm:text-base">
              <Activity className="size-3 sm:size-4" />
              Certified Expert Delivering Real Results
            </span>

            <p className="mt-4 sm:mt-8 text-lg sm:text-xl md:text-2xl font-semibold text-white leading-relaxed">
              I bring a rare combination of certifications in AI automation, generative AI for data engineering, Make, and Airtable.
            </p>
          </div>

          <div aria-hidden className="relative px-4 sm:px-6 md:px-12 pb-4 sm:pb-6 md:pb-12">
            <div className="absolute inset-0 z-10 m-auto size-fit">
              <div className="rounded-xl bg-black/40 backdrop-blur-xl z-[1] relative flex size-fit w-fit items-center gap-2 border border-purple-500/30 px-2 sm:px-3 py-1 text-xs font-medium shadow-md shadow-purple-500/20 mx-auto">
                <span className="text-base sm:text-lg">🚀</span> 
                <span className="text-white text-xs sm:text-sm">Advanced Automation Systems</span>
              </div>
              <div className="rounded-xl bg-black/20 absolute inset-2 -bottom-2 mx-auto border border-purple-500/20 px-3 py-4 text-xs font-medium shadow-md shadow-purple-500/10"></div>
            </div>

            <div className="relative overflow-hidden h-32 sm:h-40">
              <div className="[background-image:radial-gradient(var(--tw-gradient-stops))] z-1 to-black/40 absolute inset-0 from-transparent to-75%"></div>
              <TechMap />
            </div>
          </div>
        </div>

        <div className="border-t md:border-t-0 border-purple-500/20 bg-black/10 p-4 sm:p-6 md:p-12 md:border-l">
          <div className="relative z-10">
            <span className="text-purple-300 flex items-center gap-2 text-sm sm:text-base">
              <MessageCircle className="size-3 sm:size-4" />
              Clear and Supportive Collaboration
            </span>

            <p className="my-4 sm:my-8 text-lg sm:text-xl md:text-2xl font-semibold text-white leading-relaxed">
              Working with me means you will never be left guessing. I communicate complex automation strategies in a straightforward way.
            </p>
          </div>
          <ChatConversation />
        </div>

        <div className="col-span-full border-t border-purple-500/20 p-6 sm:p-8 md:p-12 bg-black/10">
          <div className="text-center mb-8">
            <h2 className="font-inter text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-white leading-tight reveal">
              <span className="text-gradient">Trusted partner</span> for clients worldwide
            </h2>
            <div className="flex items-center justify-center mt-6">
              <div className="w-12 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>
              <div className="mx-4 w-1.5 h-1.5 rounded-full bg-white/60"></div>
              <div className="w-12 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>
            </div>
          </div>
        </div>

        <div className="relative col-span-full">
          {/* Fixed positioning for text content */}
          <div className="relative z-10 p-4 sm:p-6 md:p-8 lg:p-12 bg-gradient-to-r from-black/60 via-black/40 to-transparent">
            <span className="text-purple-300 flex items-center gap-2 text-sm sm:text-base mb-3 sm:mb-4">
              <Activity className="size-3 sm:size-4" />
              Proven Success Across Industries
            </span>

            <div className="max-w-lg">
              <p className="text-lg sm:text-xl md:text-2xl font-semibold text-white leading-relaxed mb-2">
                I have optimized lead management for real estate teams and streamlined operations for business owners.
              </p>
              <p className="text-gray-300 text-sm sm:text-base">
                Clients consistently reclaim hours in their week and gain clarity in their workflows.
              </p>
            </div>
          </div>
          <SuccessChart />
        </div>
      </div>
    </section>
  );
};

export default WhyChooseMe;
