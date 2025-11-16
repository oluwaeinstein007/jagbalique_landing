import dAfricaMap from '../images/3dAfricaMap.png';
import Image from 'next/image';

export default function AfricanFootprintSection({ MapPinIcon }) {
  return (
    <section id="project-footprint" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">
          Our Projects & African Footprint
        </h2>
        <p className="text-center text-gray-600 mb-16">
          Showcasing the impact of our work across Africa.
        </p>
        <p className="text-center text-gray-700 mb-16 max-w-4xl mx-auto">
          From Nigeria to 15 African Countries, Jagbalique has established a strong industrial presence across the African 
          continent. We've successfully delivered projects, supplied equipment, and provided engineering support in over 
          15 African countries serving clients in energy, oil & gas, manufacturing, infrastructure, and logistics sectors.
        </p>
        <div className="relative bg-gradient-to-br rounded-lg p-4 sm:p-8 md:p-12 flex items-center justify-center">
          <Image 
            src={dAfricaMap} 
            alt="3D Africa Map" 
            className="w-full sm:w-11/12 md:w-10/12 lg:w-3/4 h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
}