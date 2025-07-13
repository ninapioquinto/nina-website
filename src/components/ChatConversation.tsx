
'use client'
import React from 'react';

const ChatConversation = () => {
  return (
    <div aria-hidden className="flex flex-col gap-4 sm:gap-8">
      <div>
        <div className="flex items-center gap-2">
          <span className="flex justify-center items-center size-4 sm:size-5 rounded-full border border-purple-500/30">
            <span className="size-2 sm:size-3 rounded-full bg-purple-500"/>
          </span>
          <span className="text-gray-400 text-xs">Mon 28 May</span>
        </div>
        <div className="rounded-xl bg-black/30 backdrop-blur-xl mt-1.5 w-4/5 sm:w-3/5 border border-purple-500/20 p-2 sm:p-3 text-xs text-white">
          I need help streamlining my lead management process.
        </div>
      </div>

      <div>
        <div className="rounded-xl mb-1 ml-auto w-4/5 sm:w-3/5 bg-gradient-to-r from-purple-600 to-blue-600 p-2 sm:p-3 text-xs text-white">
          I'll design a custom workflow that automates your lead capture, scoring, and follow-up sequence. This will save you hours weekly and improve conversion rates.
        </div>
        <span className="text-gray-400 block text-right text-xs">Now</span>
      </div>
    </div>
  );
};

export default ChatConversation;
