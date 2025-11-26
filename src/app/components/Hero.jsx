import React from 'react';
import Image from 'next/image';
import HeroImage from '../images/HeroImage.png';

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white py-12 md:py-24 overflow-hidden min-h-screen md:min-h-0">
      <div className="absolute inset-0 opacity-90">
        <Image src={HeroImage} alt="Hero Image" className="w-full h-full object-cover"/>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-2xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6 leading-tight">
            Driving Africa's Industrial Growth Through Smart Technical Sourcing
          </h1>
          <p className="text-sm sm:text-base md:text-lg mb-6 md:mb-8 text-gray-200 leading-relaxed">
            Jagbalique Industrial Company Ltd partners with over 20 international OEMs to deliver 
            end-to-end project and equipment sourcing solutions across Africa empowering industries, 
            governments, and enterprises with reliable engineering expertise.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded font-semibold transition w-full sm:w-auto">
              Request a Quote
            </button>
            <button className="bg-white hover:bg-gray-100 text-blue-900 px-6 py-3 rounded font-semibold transition w-full sm:w-auto">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}