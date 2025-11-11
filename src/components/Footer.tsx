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
            <source src="https://videos.pexels.com/video-files/3196284/3196284-uhd_2560_1440_25fps.mp4" type="video/mp4" />
            {/* Fallback background */}
            <div className="w-full h-full bg-gradient-to-br from-[#000080] to-[#007BFF]"></div>
          </video>
          <div className="absolute inset-0 bg-[#000080]/60"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Let's tackle your challenge!
          </h2>
          <Link 
            to="/contact" 
            className="inline-block px-12 py-4 bg-white text-[#000080] rounded-full hover:bg-gray-100 transition-all duration-300 font-bold text-lg hover:scale-105"
          >
            Work With Us
          </Link>
        </div>
      </section>

      {/* Main Footer */}
      <footer className="relative bg-black text-white overflow-hidden">
        {/* Textured Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3Ccircle cx='10' cy='10' r='1'/%3E%3Ccircle cx='50' cy='10' r='1'/%3E%3Ccircle cx='10' cy='50' r='1'/%3E%3Ccircle cx='50' cy='50' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px'
          }}></div>
          
          {/* Additional texture elements */}
          <div className="absolute top-10 left-10 w-32 h-32 border border-white/5 rounded-full"></div>
          <div className="absolute top-32 right-20 w-24 h-24 border border-white/5 rounded-lg rotate-45"></div>
          <div className="absolute bottom-20 left-1/4 w-16 h-16 border border-white/5 rounded-full"></div>
          <div className="absolute bottom-32 right-1/3 w-40 h-40 border border-white/5 rounded-lg rotate-12"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Logo & CTA Section */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                  <span className="text-[#000080] font-bold text-xl">M</span>
                </div>
                <span className="text-xl font-bold">Merkell Group</span>
              </div>
              
              <h3 className="text-3xl font-bold mb-4">Let's create the next success story</h3>
              <p className="text-gray-300 mb-6 max-w-md">
                Transform your business with our comprehensive digital solutions.
              </p>
              
              <Link 
                to="/contact" 
                className="inline-block px-6 py-3 bg-[#DC3545] text-white rounded-lg hover:bg-[#c82333] transition-colors font-medium mb-8"
              >
                Contact Us
              </Link>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-gray-300" />
                  <span className="text-gray-300">+254701403428</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-gray-300" />
                  <span className="text-gray-300">info@merkellgroup.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-gray-300" />
                  <span className="text-gray-300">84, Muthithi Road, Westlands, Nairobi</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
              <nav className="space-y-3">
                <Link to="/" onClick={scrollToTop} className="block text-gray-300 hover:text-white transition-colors">Home</Link>
                <Link to="/about" onClick={scrollToTop} className="block text-gray-300 hover:text-white transition-colors">About Us</Link>
                <Link to="/services" onClick={scrollToTop} className="block text-gray-300 hover:text-white transition-colors">Services</Link>
                <Link to="/case-studies" onClick={scrollToTop} className="block text-gray-300 hover:text-white transition-colors">Case Studies</Link>
                <Link to="/insights" onClick={scrollToTop} className="block text-gray-300 hover:text-white transition-colors">News & Insights</Link>
                <Link to="/contact" onClick={scrollToTop} className="block text-gray-300 hover:text-white transition-colors">Contact</Link>
              </nav>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Our Services</h4>
              <nav className="space-y-3">
                <Link to="/services" onClick={scrollToTop} className="block text-gray-300 hover:text-white transition-colors">Web Development & SEO</Link>
                <Link to="/services" onClick={scrollToTop} className="block text-gray-300 hover:text-white transition-colors">Digital Marketing</Link>
                <Link to="/services" onClick={scrollToTop} className="block text-gray-300 hover:text-white transition-colors">Meta & Google Ads</Link>
                <Link to="/services" onClick={scrollToTop} className="block text-gray-300 hover:text-white transition-colors">Sales Training</Link>
                <Link to="/services" onClick={scrollToTop} className="block text-gray-300 hover:text-white transition-colors">Graphic Design</Link>
                <Link to="/services" onClick={scrollToTop} className="block text-gray-300 hover:text-white transition-colors">Branding & AI</Link>
              </nav>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 text-sm mb-4 md:mb-0">
              © 2024 Merkell Group. All rights reserved.
            </p>
            
            {/* Social Media Icons */}
            <div className="flex items-center space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
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