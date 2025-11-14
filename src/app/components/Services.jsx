

export default function ServicesSection({ ArrowRightIcon, PackageIcon, FactoryIcon, WrenchIcon, TruckIcon }) {
    const services = [
        {
          icon: <PackageIcon className="w-6 h-6" />,
          title: 'Technical Sourcing',
          description: 'We identify, evaluate, and source high-quality industrial products, machinery, and spare parts directly from global OEMs.',
          brochure: 'Technical Sourcing Brochure'
        },
        {
          icon: <FactoryIcon className="w-6 h-6" />,
          title: 'Procurement Solutions',
          description: 'We manage the entire procurement cycle, from RFQ to purchase orders and vendor coordination, providing seamless access to global supply chains.',
          brochure: 'Procurement Brochure'
        },
        {
          icon: <WrenchIcon className="w-6 h-6" />,
          title: 'Engineering & Technical Support',
          description: 'Beyond supply, we deliver value through engineering design, equipment installation, commissioning, and maintenance support. Our experienced engineers ensure every solution meets operational standards and long term performance.',
          brochure: 'Engineering Brochure'
        },
        {
          icon: <TruckIcon className="w-6 h-6" />,
          title: 'Logistics & Supply Chain',
          description: 'We provide efficient, end-to-end logistics support from global freight coordination to customs clearance and last-mile delivery across Africa.',
          brochure: 'Logistics Brochure'
        }
    ];

  return (
    <section id="our-services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">Our Services</h2>
        <p className="text-center text-gray-600 mb-16">What We Do</p>

        <p className="text-center text-gray-700 mb-12 max-w-4xl mx-auto">
          At Jagbalique Industrial Company Ltd, we deliver end-to-end industrial sourcing, procurement, logistics, and 
          engineering solutions, connecting African industries with global OEM technologies and expertise. 
          Our approach is guided by precision, partnership, and performance ensuring every client gets reliable technical 
          solutions from needs assessment to project execution.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, idx) => (
            <div key={idx} className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4 text-green-600">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-700 mb-6">{service.description}</p>
              <div className="flex justify-between items-center">
                <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded text-sm font-semibold transition flex items-center gap-2">
                  Download {service.brochure.split(' ')[0]} Brochure
                  <ArrowRightIcon className="w-4 h-4" />
                </button>
                <button className="text-gray-600 hover:text-gray-900 text-sm font-semibold flex items-center gap-1">
                  View More <ArrowRightIcon className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}