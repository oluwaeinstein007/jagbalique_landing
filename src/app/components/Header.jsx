import React from 'react';
import Image from 'next/image';
import JagbaliqueLogo from '../images/JagbaliqueLogo.png';

  // Receives state and icons from Home
  export default function Header({ mobileMenuOpen, setMobileMenuOpen, MenuIcon, XIcon }) {
    const navItems = ['Home', 'About Us', 'Our Services', 'Sectors We Serve', 'OEM Partners', 'Projects / Footprint', 'Contact Us', 'News / Updates'];
    return (
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="bg-white px-6 py-4">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <Image src={JagbaliqueLogo} alt="Jagbalique Logo" width={150} height={50} />
            <button 
              className="lg:hidden text-black"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <XIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>
        
        <nav className={`bg-blue-700 ${mobileMenuOpen ? 'block' : 'hidden'} lg:block`}>
          <div className="max-w-7xl mx-auto px-6">
            <ul className="flex flex-col lg:flex-row lg:space-x-1 text-white text-sm">
              {['Home', 'About Us', 'Our Services', 'Sectors We Serve', 'OEM Partners', 'Project Footprint', 'Contact Us', 'News Updates'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase().replace(/\s+/g, '-')}`} className="block px-4 py-3 hover:bg-blue-800 transition">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </header>
    );
  }
