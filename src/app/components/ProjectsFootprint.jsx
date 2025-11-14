import React from 'react';

export default function AfricanFootprintSection({ MapPinIcon }) {
  // ... JSX for the Footprint section component (lines 390-417)
  return (
    <section id="project-footprint" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">Our Projects & African Footprint</h2>
        <p className="text-center text-gray-600 mb-16">Showcasing the impact of our work across Africa.</p>

        <p className="text-center text-gray-700 mb-16 max-w-4xl mx-auto">
          From Nigeria to 15 African Countries, Jagbalique has established a strong industrial presence across the African 
          continent. We've successfully delivered projects, supplied equipment, and provided engineering support in over 
          15 African countries serving clients in energy, oil & gas, manufacturing, infrastructure, and logistics sectors.
        </p>

        <div className="relative bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg p-12 min-h-96">
          <div className="absolute inset-0 flex items-center justify-center opacity-20">
            <svg viewBox="0 0 400 500" className="w-full h-full max-w-2xl">
              <ellipse cx="200" cy="250" rx="120" ry="180" fill="none" stroke="currentColor" strokeWidth="1"/>
              <circle cx="140" cy="180" r="8" fill="#3B82F6"/>
              <circle cx="180" cy="200" r="8" fill="#3B82F6"/>
              <circle cx="160" cy="240" r="8" fill="#8B5CF6"/>
              <circle cx="200" cy="220" r="8" fill="#8B5CF6"/>
              <circle cx="220" cy="270" r="8" fill="#8B5CF6"/>
              <circle cx="190" cy="300" r="8" fill="#3B82F6"/>
              <circle cx="170" cy="350" r="8" fill="#8B5CF6"/>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}