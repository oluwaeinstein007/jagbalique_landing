'use client';
import React, { useState } from 'react';
import { 
  Menu, X, ChevronDown, MapPin, Clock, Phone, 
  Linkedin, Youtube, Instagram, Twitter, ArrowRight,
  Zap, Package, Wrench, Truck, Factory, Leaf, 
  Droplet, Building2, Sprout, Server, Home as HomeIcon, Hotel // Alias to avoid naming conflict
} from 'lucide-react';
// Import data structures for props
// import { 
//   partners, services, sectors, timeline, team, newsArticles 
// } from './data'; // Assume data is in a separate file

// Import all section components
import Header from './components/Header';
import Footer from './components/Footer';
import HeroSection from './components/Hero';
import WhoWeAreSection from './components/AboutUs';
import MissionVisionSection from './components/MissionVision';
import LeadershipHighlightSection from './components/Leadership';
import CompanyTimelineSection from './components/Timeline';
import ServicesSection from './components/Services';
import SectorsServeSection from './components/Sectors';
import PartnersSection from './components/Partners';
import AfricanFootprintSection from './components/ProjectsFootprint';
import ContactEnquiriesSection from './components/Contact';
import NewsPressReleasesSection from './components/News';

export default function Home() {
  // State for mobile menu and contact form
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'General Inquiry',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Message sent! We will get back to you soon.');
    setFormData({ name: '', email: '', subject: 'General Inquiry', message: '' });
  };
  
  return (
    <div className="font-sans antialiased min-h-screen bg-white">
      <Header 
        mobileMenuOpen={mobileMenuOpen} 
        setMobileMenuOpen={setMobileMenuOpen} 
        MenuIcon={Menu} 
        XIcon={X}
      />
      
      <HeroSection />
      
      <WhoWeAreSection />
      
      <MissionVisionSection FactoryIcon={Factory} />
      
      <LeadershipHighlightSection />
      
      <CompanyTimelineSection />
      
      <ServicesSection ArrowRightIcon={ArrowRight} PackageIcon={Package} FactoryIcon={Factory} WrenchIcon={Wrench} TruckIcon={Truck} />
      
      <SectorsServeSection ArrowRightIcon={ArrowRight} ZapIcon={Zap} DropletIcon={Droplet} Building2Icon={Building2} SproutIcon={Sprout} ServerIcon={Server} HomeIcon={HomeIcon} HotelIcon={Hotel} />
      
      <PartnersSection />
      
      <AfricanFootprintSection MapPinIcon={MapPin} />
      
      <ContactEnquiriesSection 
        formData={formData} 
        setFormData={setFormData} 
        handleSubmit={handleSubmit}
        MapPinIcon={MapPin} 
        ClockIcon={Clock}
      />
      
      <NewsPressReleasesSection />
      
      <Footer MapPinIcon={MapPin} Phone={Phone} Linkedin={Linkedin} Youtube={Youtube} Instagram={Instagram} Twitter={Twitter} />
    </div>
  );
}

// Note: For brevity, the full content of the data.js file is omitted here, 
// but it should contain all the constant arrays (partners, services, etc.).
