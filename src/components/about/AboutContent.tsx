
import React from 'react';

const AboutContent = () => {
  return (
    <div className="reveal space-y-8">
      <div>
        <h3 className="text-2xl font-bold mb-4 text-white">
          Nina Pioquinto<br />
          Certified Automation Systems Engineer
        </h3>
        <div className="h-1 w-16 bg-gradient-to-r from-purple-400 to-violet-400 rounded-full mb-6"></div>
        <p className="text-lg text-gray-200 leading-relaxed mb-6">
          Specializing in strategic automation for businesses ready to simplify operations and scale with clarity and confidence.
        </p>
      </div>

      <div className="space-y-6">
        <div>
          <h4 className="text-lg font-semibold text-purple-300 mb-3">Credentials</h4>
          <p className="text-gray-300 leading-relaxed">
            IBM Generative AI for Data Engineers · AI Engineering · Google Generative AI Leader<br />
            Airtable Builder · Make Certified · ClickUp Expert
          </p>
        </div>

        <div>
          <h4 className="text-lg font-semibold text-purple-300 mb-3">My Approach</h4>
          <ul className="space-y-2 text-gray-300">
            <li className="flex items-start">
              <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <span>Leveraging AI, data intelligence, and CRM optimization</span>
            </li>
            <li className="flex items-start">
              <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <span>Designing tailored solutions aligned with your unique goals</span>
            </li>
            <li className="flex items-start">
              <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <span>Building scalable systems that drive measurable growth</span>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold text-purple-300 mb-3">Strategic Process</h4>
          <ul className="space-y-2 text-gray-300">
            <li className="flex items-start">
              <div className="w-2 h-2 bg-violet-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <span>In-depth analysis of your current workflows</span>
            </li>
            <li className="flex items-start">
              <div className="w-2 h-2 bg-violet-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <span>Seamless integration into your existing operations</span>
            </li>
            <li className="flex items-start">
              <div className="w-2 h-2 bg-violet-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <span>Laying the foundation for sustainable, chaos-free growth</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
