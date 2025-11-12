import React from 'react';

// Receives sectors data and necessary icons as props
export default function SectorsServeSection({ ArrowRightIcon, ZapIcon, DropletIcon, Building2Icon, SproutIcon, ServerIcon, HomeIcon }) {
    const sectors = [
        {
          icon: <Zap className="w-8 h-8 text-yellow-500" />,
          title: 'Power & Renewable Energy',
          description: 'We provide solutions for power generation, transmission, and distribution for energy projects.'
        },
        {
          icon: <Droplet className="w-8 h-8 text-blue-500" />,
          title: 'Oil, Gas & Energy',
          description: 'Technical sourcing, procurement, and project support for oil and gas facilities and energy operations.'
        },
        {
          icon: <Building2 className="w-8 h-8 text-gray-600" />,
          title: 'Manufacturing & Industrial',
          description: 'End-to-end industrial solutions including MRO supplies, machinery sourcing, and operational support.'
        },
        {
          icon: <Sprout className="w-8 h-8 text-green-600" />,
          title: 'Agriculture & Agribusiness',
          description: 'Technical sourcing, engineering solutions, and logistics for farming, processing, and agribusiness projects.'
        },
        {
          icon: <Server className="w-8 h-8 text-indigo-500" />,
          title: 'Information Technology (ICT)',
          description: 'Providing reliable hardware, software, and technical solutions for ICT projects across sectors.'
        },
        {
          icon: <Home className="w-8 h-8 text-orange-500" />,
          title: 'Engineering, Construction & Real Estate',
          description: 'Comprehensive solutions, project design and planning for construction projects with sourcing and technical expertise.'
        }
    ];

  return (
    <section id="sectors-we-serve" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">Sectors We Serve</h2>
        <p className="text-center text-gray-600 mb-12">These are the industries we empower</p>

        <p className="text-center text-gray-700 mb-16 max-w-4xl mx-auto">
          Jagbalique delivers tailor-made technical and sourcing solutions across multiple sectors in Africa. 
          Our expertise ensures that each industry benefits from reliable, certified products, efficient procurement and end 
          to end project execution, backed by global OEM partnerships.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sectors.map((sector, idx) => (
            <div key={idx} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition">
              <div className="mb-4">{sector.icon}</div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">{sector.title}</h3>
              <p className="text-gray-600 text-sm mb-4">{sector.description}</p>
              <button className="text-green-600 hover:text-green-700 text-sm font-semibold flex items-center gap-1">
                See Case Study <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}