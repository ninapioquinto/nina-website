
import React from 'react';

const ChatConversation = () => {
  return (
    <div className="relative h-64 sm:h-80 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none z-10" />
      
      <div className="space-y-3 sm:space-y-4">
        {/* Client message */}
        <div className="flex justify-start">
          <div className="max-w-xs bg-navy-500/20 backdrop-blur-sm rounded-2xl px-3 sm:px-4 py-2 sm:py-3 border border-navy-400/30">
            <div className="flex items-center gap-2 mb-1">
              <div className="w-2 h-2 bg-navy-400 rounded-full"></div>
              <span className="text-xs text-navy-300">Mon 28 May</span>
            </div>
            <p className="text-white text-xs sm:text-sm">
              I need help streamlining my lead management process.
            </p>
          </div>
        </div>

        {/* Nina's response */}
        <div className="flex justify-end">
          <div className="max-w-xs bg-gradient-to-r from-navy-600/30 to-accent-gold/20 backdrop-blur-sm rounded-2xl px-3 sm:px-4 py-2 sm:py-3 border border-navy-400/40">
            <p className="text-white text-xs sm:text-sm">
              I'll design a custom workflow that automates your lead capture, scoring, and follow-up sequence. This will save you hours weekly and improve conversion rates.
            </p>
            <div className="text-right mt-1">
              <span className="text-xs text-navy-300">Now</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatConversation;
