import React from 'react';

export default function WhoWeAreSection() {
    return (
        <section id="about-us" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">Who We Are</h2>
          
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h3 className="text-2xl font-bold text-blue-900 mb-4">Company Overview</h3>
                <p className="text-gray-700 mb-4">
                  Jagbalique Industrial Company Ltd is a Nigeria-based project and technical sourcing company representing over 20 international 
                  Original Equipment Manufacturers (OEMs) across Africa.
                </p>
                <p className="text-gray-700 mb-4">
                  We specialize in needs assessment, business sourcing, and full project execution providing tailor-made engineering solutions that 
                  deliver measurable value to clients across diverse industries.
                </p>
                <p className="text-gray-700">
                  With a strong focus on value, precision, and efficiency, our team of skilled engineers and sourcing experts deliver projects built to 
                  international standards, ensuring clients receive the right product, at the right time, and within budget.
                </p>
              </div>
  
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h3 className="text-2xl font-bold text-blue-900 mb-4">Our History & Growth in Africa</h3>
                <p className="text-gray-700 mb-4">
                  Founded in Nigeria as an indigenous subsidiary of Barham Global Ltd (UK), Jagbalique began by supplying maintenance goods and 
                  technical services to local manufacturers.
                </p>
                <p className="text-gray-700 mb-4">
                  Over the years, our commitment to quality and operational excellence has seen us expand our OEM portfolio and geographical 
                  footprint to over 15 African countries, building long-term relationships with clients across energy, oil & gas, manufacturing, 
                  and infrastructure sectors.
                </p>
                <p className="text-gray-700">
                  Today, Jagbalique stands as one of Africa's trusted partners in industrial sourcing and project execution connecting global OEMs 
                  with African industries.
                </p>
              </div>
            </div>
  
            <div className="bg-gradient-to-br from-blue-900 to-slate-800 rounded-lg p-12 text-white relative overflow-hidden">
              <div className="absolute inset-0 opacity-10">
                <svg viewBox="0 0 300 500" className="w-full h-full">
                  <circle cx="150" cy="100" r="8" fill="currentColor"/>
                  <circle cx="200" cy="150" r="8" fill="currentColor"/>
                  <circle cx="180" cy="220" r="8" fill="currentColor"/>
                  <circle cx="220" cy="280" r="8" fill="currentColor"/>
                  <circle cx="160" cy="330" r="8" fill="currentColor"/>
                  <circle cx="190" cy="390" r="8" fill="currentColor"/>
                  <circle cx="140" cy="450" r="8" fill="currentColor"/>
                </svg>
              </div>
              <div className="relative z-10">
                <div className="h-64 flex items-center justify-center mb-8">
                  <svg viewBox="0 0 300 400" className="w-full h-full max-w-sm">
                    <path d="M150,50 Q200,80 220,120 T240,200 Q240,250 220,290 T180,350 Q160,370 140,370 T100,350 Q80,330 70,290 T60,200 Q60,150 80,120 T150,50 Z" 
                          fill="none" stroke="currentColor" strokeWidth="2" opacity="0.5"/>
                    <circle cx="150" cy="150" r="6" fill="#60A5FA"/>
                    <circle cx="130" cy="200" r="6" fill="#60A5FA"/>
                    <circle cx="170" cy="200" r="6" fill="#60A5FA"/>
                    <circle cx="150" cy="250" r="6" fill="#60A5FA"/>
                    <circle cx="180" cy="280" r="6" fill="#60A5FA"/>
                    <circle cx="150" cy="320" r="6" fill="#60A5FA"/>
                  </svg>
                </div>
                <p className="text-center text-sm text-gray-300">
                  Connecting industries across 15+ African countries with world-class engineering solutions
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }