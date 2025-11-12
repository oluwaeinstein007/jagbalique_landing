import React from 'react';

export default function LeadershipHighlightSection({ }) {
  const team = [
    { name: 'John Philip', role: 'Managing Director' },
    { name: 'John Philip', role: 'Head of Operations' },
    { name: 'John Philip', role: 'Head of Operations' }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">Leadership Highlight</h2>
        <p className="text-center text-gray-600 mb-16 max-w-3xl mx-auto">
          Behind Jagbalique's success is a leadership team driven by integrity, diligence, and technical excellence. 
          Their combined experience in engineering, procurement, and international business partnerships 
          ensures every project meets global best practices.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {team.map((member, idx) => (
            <div key={idx} className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="bg-gradient-to-br from-gray-700 to-gray-900 h-64 flex items-center justify-center">
                <div className="w-24 h-24 bg-gray-600 rounded-full"></div>
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}