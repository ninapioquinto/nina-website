
import React from 'react';

const AboutContent = () => {
  return (
    <div className="reveal space-y-8">
      <div>
        <h3 className="text-2xl font-bold mb-4 text-white">
          Nina Pioquinto
        </h3>
        <div className="h-1 w-16 bg-gradient-to-r from-purple-400 to-violet-400 rounded-full mb-6"></div>
        <p className="text-lg text-gray-200 leading-relaxed mb-6">
          Automation Systems Engineer specializing in strategic automation for businesses ready to simplify operations and scale with confidence.
        </p>
      </div>

      <div className="space-y-6">
        <div>
          <h4 className="text-lg font-semibold text-purple-300 mb-3">My Approach</h4>
          <ul className="space-y-2 text-gray-300">
            <li className="flex items-start">
              <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <span>Leveraging AI, data intelligence, and CRM optimization</span>
            </li>
            <li className="flex items-start">
              <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <span>Creating tailored solutions aligned with your unique goals</span>
            </li>
            <li className="flex items-start">
              <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <span>Building scalable systems that deliver measurable outcomes</span>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold text-purple-300 mb-3">Strategic Process</h4>
          <ul className="space-y-2 text-gray-300">
            <li className="flex items-start">
              <div className="w-2 h-2 bg-violet-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <span>Deep understanding of your current workflows</span>
            </li>
            <li className="flex items-start">
              <div className="w-2 h-2 bg-violet-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <span>Seamless integration into existing operations</span>
            </li>
            <li className="flex items-start">
              <div className="w-2 h-2 bg-violet-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <span>Foundation for growth without chaos</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
