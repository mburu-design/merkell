import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Linkedin, Instagram, Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* CTA Section with Video Background */}
      <section className="relative py-20 overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0">
          <video 
            autoPlay 
            muted 
            loop 
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/universeVideo.mp4" type="video/mp4" />
            <div className="w-full h-full bg-[#000080]"></div>
          </video>
          <div className="absolute inset-0 bg-[#000080]/70"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-8">
            Let's tackle your challenge!
          </h2>
          <Link 
            to="/contact" 
            className="inline-block px-12 py-4 bg-[#DC3545] text-white rounded-full hover:bg-[#c82333] transition-all duration-300 font-body font-bold text-lg uppercase tracking-wider hover:scale-105"
          >
            Work With Us
          </Link>
        </div>
      </section>

      {/* Main Footer */}
      <footer className="relative bg-black text-white overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Logo & CTA Section */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                  <span className="text-[#000080] font-heading font-bold text-xl">M</span>
                </div>
                <span className="font-heading text-2xl font-bold">Merkell Group</span>
              </div>
              
              <h3 className="font-heading text-3xl font-bold mb-4">Every campaign, a launch. Every brand, unforgettable.</h3>
              <p className="font-body text-gray-300 mb-6 max-w-md">
                At Merkell Group, we combine strategy, creativity, and professionalism to build brands that dominate their markets.
              </p>
              
              <Link 
                to="/contact" 
                className="inline-block px-6 py-3 bg-[#DC3545] text-white rounded-lg hover:bg-[#c82333] transition-colors font-body font-bold uppercase tracking-wider mb-8"
              >
                Contact Us
              </Link>

              {/* Contact Info */}
              <div className="space-y-3 font-body">
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-[#DC3545]" />
                  <span className="text-gray-300">0748 324 896 / 0113 528 252</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-[#DC3545]" />
                  <span className="text-gray-300">merccykmwende@gmail.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-[#DC3545]" />
                  <span className="text-gray-300">Nairobi, Kenya</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-heading text-xl font-bold mb-6">Quick Links</h4>
              <nav className="space-y-3 font-body">
                <Link to="/" onClick={scrollToTop} className="block text-gray-300 hover:text-[#DC3545] transition-colors">Home</Link>
                <Link to="/about" onClick={scrollToTop} className="block text-gray-300 hover:text-[#DC3545] transition-colors">About Us</Link>
                <Link to="/services" onClick={scrollToTop} className="block text-gray-300 hover:text-[#DC3545] transition-colors">Services</Link>
                <Link to="/case-studies" onClick={scrollToTop} className="block text-gray-300 hover:text-[#DC3545] transition-colors">Case Studies</Link>
                <Link to="/insights" onClick={scrollToTop} className="block text-gray-300 hover:text-[#DC3545] transition-colors">Insights</Link>
                <Link to="/contact" onClick={scrollToTop} className="block text-gray-300 hover:text-[#DC3545] transition-colors">Contact</Link>
              </nav>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-heading text-xl font-bold mb-6">Our Services</h4>
              <nav className="space-y-3 font-body">
                <Link to="/services" onClick={scrollToTop} className="block text-gray-300 hover:text-[#DC3545] transition-colors">Web Development & SEO</Link>
                <Link to="/services" onClick={scrollToTop} className="block text-gray-300 hover:text-[#DC3545] transition-colors">Digital Marketing</Link>
                <Link to="/services" onClick={scrollToTop} className="block text-gray-300 hover:text-[#DC3545] transition-colors">Meta & Google Ads</Link>
                <Link to="/services" onClick={scrollToTop} className="block text-gray-300 hover:text-[#DC3545] transition-colors">Sales Training</Link>
                <Link to="/services" onClick={scrollToTop} className="block text-gray-300 hover:text-[#DC3545] transition-colors">Graphic Design</Link>
                <Link to="/services" onClick={scrollToTop} className="block text-gray-300 hover:text-[#DC3545] transition-colors">Branding & AI</Link>
              </nav>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="font-body text-gray-300 text-sm mb-4 md:mb-0">
              © 2024 Merkell Group. All rights reserved.
            </p>
            
            {/* Social Media Icons */}
            <div className="flex items-center space-x-4">
              <a href="#" className="text-gray-300 hover:text-[#DC3545] transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-[#DC3545] transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-[#DC3545] transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;