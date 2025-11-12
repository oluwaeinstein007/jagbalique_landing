import React from 'react';

export default function CompanyTimelineSection({ }) {
    const timeline = [
        {
          year: '2010',
          title: 'Our Foundation',
          description: 'Jagbalique Industrial Company Ltd was established in Nigeria as an indigenous subsidiary of Barham Global Ltd (UK), with a focus on providing reliable maintenance goods and technical services to local manufacturers.'
        },
        {
          year: '2013',
          title: 'Building Local Partnerships',
          description: 'We began forming strategic alliances with international OEMs, enabling us to bring world-class engineering and project sourcing solutions to the Nigerian market.'
        },
        {
          year: '2016',
          title: 'Regional Expansion',
          description: 'Our consistent performance and trusted delivery led to expansion into other African markets, including Ghana, Kenya, South Sudan, and Tanzania, establishing Jagbalique as a continental partner in industrial sourcing.'
        },
        {
          year: '2020',
          title: 'Strengthening Global Presence',
          description: 'Jagbalique grew its OEM representation to over 20 international partners, broadening our product portfolio and technical service capacity across multiple sectors.'
        },
        {
          year: '2025',
          title: 'Pan-African Reach',
          description: 'Today, we have delivered projects and supplied products to clients in 15 African countries, connecting industries across the continent with quality materials, technology, and engineering excellence.'
        }
      ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">Company Timeline</h2>
        <p className="text-center text-gray-600 mb-16">Over a decade of powering Africa's industrial growth.</p>

        <div className="space-y-8">
          {timeline.map((item, idx) => (
            <div key={idx} className="flex gap-6">
              <div className="flex flex-col items-center">
                <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                {idx < timeline.length - 1 && <div className="w-0.5 flex-1 bg-gray-300 mt-2"></div>}
              </div>
              <div className="pb-8 flex-1">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-blue-900 mb-2">{item.year} – {item.title}</h3>
                  <p className="text-gray-700">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}