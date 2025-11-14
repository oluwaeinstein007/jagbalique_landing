import React from 'react';
import Image from 'next/image';
import Engineers from '../images/Engineers.png';
import AIConstruction from '../images/AIConstruction.png';
import Factory from '../images/Factory.png';
import RenewableEnergy from '../images/RenewableEnergy.png';

export default function NewsPressReleasesSection({ }) {
    const newsArticles = [
        {
          title: 'Company expands supply chain across africa...',
          image: Factory,
          excerpt: 'Jagbalique expands supply chain across africa. Jagbalique expands supply chain across africa...',
          date: 'Nov 11, 2025',
          category: 'Supply Chain'
        },
        {
          title: 'New Partnership Strengthens Logistic Operations.',
          image: Engineers,
          excerpt: 'Jagbalique expands supply chain across africa. Jagbalique expands supply chain across africa...',
          date: 'Nov 11, 2025',
          category: 'Partnership'
        },
        {
          title: 'Company expands supply chain across africa...',
          image: AIConstruction,
          excerpt: 'Jagbalique expands supply chain across africa. Jagbalique expands supply chain across africa...',
          date: 'Nov 11, 2025',
          category: 'Supply Chain'
        },
        {
          title: 'Company expands supply chain across africa...',
          image: RenewableEnergy,
          excerpt: 'Jagbalique expands supply chain across africa. Jagbalique expands supply chain across africa...',
          date: 'Nov 11, 2025',
          category: 'Supply Chain'
        }
      ];

  return (
    <section id="news-updates" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">News & Press Releases</h2>
          <p className="text-center text-gray-600 mb-16">Stay updated with our latest announcements, partnerships, and industry insights.</p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {newsArticles.map((article, idx) => (
              <div key={idx} className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition">
                <div className="bg-gradient-to-br from-gray-700 to-gray-900 h-48 flex items-center justify-center">
                  <Image src={article.image} alt={article.title} className="w-100% h-100% text-white"/>
                </div>
                <div className="p-6">
                  <span className="inline-block bg-green-100 text-green-700 text-xs px-3 py-1 rounded-full mb-3">
                    {article.category}
                  </span>
                  <h3 className="font-bold text-gray-900 mb-2 text-sm">{article.title}</h3>
                  <p className="text-gray-600 text-xs mb-4">{article.excerpt}</p>
                  <div className="flex justify-between items-center">
                    <button className="text-blue-600 hover:text-blue-700 text-xs font-semibold">
                      Read More
                    </button>
                    <span className="text-gray-500 text-xs">{article.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center gap-2 mt-8">
            <button className="w-10 h-10 border border-gray-300 rounded flex items-center justify-center hover:bg-gray-100">
              ←
            </button>
            <button className="w-10 h-10 border border-gray-300 rounded flex items-center justify-center hover:bg-gray-100">
              →
            </button>
          </div>

          <div className="text-center mt-4 text-sm text-gray-600">
            1/2
          </div>
        </div>
      </section>
  );
}