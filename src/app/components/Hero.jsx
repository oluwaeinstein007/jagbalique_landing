import React from 'react';

export default function HeroSection() {
return (
    <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 h-full">
            <svg viewBox="0 0 400 600" className="w-full h-full">
              <path d="M200,50 L350,150 L350,250 L300,300 L250,350 L200,400 L150,450 L100,500 L50,550" 
                    stroke="currentColor" strokeWidth="2" fill="none" opacity="0.3"/>
              <circle cx="150" cy="200" r="40" fill="currentColor" opacity="0.2"/>
              <circle cx="300" cy="150" r="30" fill="currentColor" opacity="0.3"/>
              <circle cx="250" cy="350" r="35" fill="currentColor" opacity="0.2"/>
            </svg>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-5xl font-bold mb-6 leading-tight">
              Driving Africa's Industrial Growth Through Smart Technical Sourcing
            </h1>
            <p className="text-lg mb-8 text-gray-200">
              Jagbalique Industrial Company Ltd partners with over 20 international OEMs to deliver 
              end-to-end project and equipment sourcing solutions across Africa empowering industries, 
              governments, and enterprises with reliable engineering expertise.
            </p>
            <div className="flex gap-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded font-semibold transition">
                Request a Quote
              </button>
              <button className="bg-white hover:bg-gray-100 text-blue-900 px-6 py-3 rounded font-semibold transition">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>
);
}