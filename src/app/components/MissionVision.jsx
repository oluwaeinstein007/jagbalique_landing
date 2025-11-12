import React from 'react';

export default function MissionVisionSection({ FactoryIcon }) {
return (
    <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">Our Mission & Vision</h2>
          <p className="text-center text-gray-600 mb-16">Our Commitment to Africa's Industrial Future</p>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="bg-gradient-to-br from-gray-400 to-gray-600 rounded-lg overflow-hidden h-96">
                <div className="absolute inset-0 flex items-center justify-center">
                  <FactoryIcon className="w-32 h-32 text-white opacity-50" />
                </div>
              </div>
            </div>
  
            <div className="space-y-8">
              <div className="bg-blue-50 p-8 rounded-lg border-l-4 border-blue-600">
                <h3 className="text-xl font-bold text-blue-900 mb-3">Vision:</h3>
                <p className="text-gray-700">
                  To be Africa's most trusted project sourcing and MRO partner, bridging the gap between international OEMs and the continent's 
                  industries and businesses.
                </p>
              </div>
  
              <div className="bg-green-50 p-8 rounded-lg border-l-4 border-green-600">
                <h3 className="text-xl font-bold text-green-900 mb-3">Mission:</h3>
                <p className="text-gray-700">
                  To deliver end-to-end industrial and technical sourcing solutions that empower African businesses with global quality standards and 
                  reliable engineering expertise.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
);
}