import React from 'react';

export default function PartnersSection({ }) {
    const partners = ['ABB', 'Schneider Electric', 'SIEMENS', 'FESTO', 'Rockwell Automation'];
  return (
    <section id="oem-partners" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-center text-gray-700 mb-12">
          At Jagbalique, our strength lies in our strategic alliances with over 20 original equipment manufacturers across the world.
        </p>

        <div className="flex flex-wrap justify-center items-center gap-12">
          {partners.map((partner, idx) => (
            <div key={idx} className="text-3xl font-bold text-gray-400 hover:text-gray-600 transition">
              {partner}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}