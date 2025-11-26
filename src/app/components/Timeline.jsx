

export default function CompanyTimelineSection({ }) {
    const timeline = [
        {
          year: '1980',
          title: 'Foundation of Barham Global Ltd',
          description: 'Barham Global Ltd was established in Kenya with a clear mission: to supply high-quality technical equipment to local manufacturers and industrial operators. From inception, the company built a reputation for reliability, innovation, and strong OEM partnerships.'
        },
        {
          year: '2000',
          title: 'Strategic Expansion to the United Kingdom',
          description: 'To strengthen global sourcing capabilities and position itself closer to Original Equipment Manufacturers (OEMs), Barham Global expanded its operations to the United Kingdom. This move enhanced its ability to serve a broader African market with faster response times and improved supply-chain efficiency.'
        },
        {
          year: '2002',
          title: 'Growth Across Africa',
          description: 'Building on its strong foundation, Barham Global extended its sales operations to multiple African countries. This strategic expansion deepened the company’s continental footprint and cemented its role as a trusted partner for industrial and technical solutions across Africa.'
        },
        {
          year: '2020',
          title: 'Establishment of Jagbalique Industrial Company',
          description: 'In line with its long-term growth strategy, Barham Global launched Jagbalique Industrial Company—a wholly owned indigenous entity—dedicated to serving the Nigerian market. Jagbalique quickly emerged as a key player in technical equipment supply, marine solutions, and industrial support services nationwide.'
        },
        {
          year: '2023',
          title: 'Acquisition of A-Typify Ltd',
          description: 'To further consolidate its Nigerian operations and strengthen its public-sector capabilities, Jagbalique Industrial Company acquired A-Typify Ltd. This acquisition expanded the Group’s mandate to include a full public-sector engagement arm, enabling the company to deliver high-impact solutions to federal and state institutions.'
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