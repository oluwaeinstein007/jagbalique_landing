import React from 'react';
import Image from 'next/image';
import JagbaliqueLogo from '../images/JagbaliqueLogo.png';

export default function Footer({ MapPinIcon, Phone, Linkedin, Youtube, Instagram, Twitter }) {
  // ... JSX for the Footer component (lines 585-603+)
  return (
    <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12 mb-8">
            <div>
              <Image src={JagbaliqueLogo} alt="Jagbalique Logo" width={200} height={60} className="mb-4" />
              <p className="text-gray-400 text-sm mb-4">
                Technical Sourcing | Procurement | Logistics | Engineering
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <MapPinIcon className="w-5 h-5 text-purple-400 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold mb-1">Office Address:</p>
                    <p className="text-gray-400 text-sm">
                      12 Obasa Odelusi Street, Victoria Island, Lagos,<br />
                      Lagos State, Nigeria
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-purple-400" />
                  <p className="text-sm">+234 901 234 5678</p>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#about-us" className="hover:text-white transition">About Us</a></li>
                <li><a href="#our-services" className="hover:text-white transition">Services</a></li>
                <li><a href="#projects-footprint" className="hover:text-white transition">Projects & Footprint</a></li>
                <li><a href="#news-updates" className="hover:text-white transition">News & Press</a></li>
                <li><a href="#contact-us" className="hover:text-white transition">Contact</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Social Media</h4>
              <div className="space-y-3">
                <a href="#" className="flex items-center gap-3 text-gray-400 hover:text-white transition">
                  <Linkedin className="w-5 h-5" />
                  <span className="text-sm">LinkedIn</span>
                </a>
                <a href="#" className="flex items-center gap-3 text-gray-400 hover:text-white transition">
                  <Youtube className="w-5 h-5" />
                  <span className="text-sm">YouTube</span>
                </a>
                <a href="#" className="flex items-center gap-3 text-gray-400 hover:text-white transition">
                  <Instagram className="w-5 h-5" />
                  <span className="text-sm">Instagram</span>
                </a>
                <a href="#" className="flex items-center gap-3 text-gray-400 hover:text-white transition">
                  <Twitter className="w-5 h-5" />
                  <span className="text-sm">Twitter</span>
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-gray-400 text-sm">
              © 2025 Jagbalique. All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
  );
}