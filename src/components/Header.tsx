import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Phone, Facebook, Linkedin, Instagram, Twitter, MessageCircle, Mail } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    'Web Development & SEO',
    'Digital Marketing',
    'Meta & Google Ads',
    'Sales Training',
    'Graphic Design & Video Editing',
    'Branding & AI Automations'
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'shadow-lg' : ''
    }`}>
      {/* Top Bar - Blue Background */}
      <div className="bg-[#000080] text-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Social Media Icons - Left */}
            <div className="flex items-center space-x-4">
              <a href="#" className="text-white hover:text-gray-200 transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="text-white hover:text-gray-200 transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="text-white hover:text-gray-200 transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="text-white hover:text-gray-200 transition-colors">
                <MessageCircle className="w-4 h-4" />
              </a>
              <a href="#" className="text-white hover:text-gray-200 transition-colors">
                <Mail className="w-4 h-4" />
              </a>
            </div>

            {/* Book An Appointment - Right */}
            <Link 
              to="/contact" 
              onClick={scrollToTop}
              className="text-white font-medium text-sm hover:text-gray-200 transition-colors"
            >
              Book An Appointment
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navigation - White Background */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-12 h-12 bg-[#000080] rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">M</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-[#DC3545]">MERKELL</span>
                <span className="text-xs text-[#666666] -mt-1">Helping top brands thrive globally.</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <Link 
                to="/" 
                onClick={scrollToTop}
                className={`text-base font-bold transition-colors hover:text-[#007BFF] relative ${
                  location.pathname === '/' ? 'text-black border-b-2 border-[#007BFF] pb-1' : 'text-black'
                }`}
              >
                Home
              </Link>
              <Link 
                to="/about" 
                onClick={scrollToTop}
                className={`text-base font-bold transition-colors hover:text-[#007BFF] relative ${
                  location.pathname === '/about' ? 'text-black border-b-2 border-[#007BFF] pb-1' : 'text-black'
                }`}
              >
                About
              </Link>
              <Link 
                to="/case-studies" 
                onClick={scrollToTop}
                className={`text-base font-bold transition-colors hover:text-[#007BFF] relative ${
                  location.pathname === '/case-studies' ? 'text-black border-b-2 border-[#007BFF] pb-1' : 'text-black'
                }`}
              >
                Case Studies
              </Link>
              
              {/* Services Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                <Link 
                  to="/services" 
                  onClick={scrollToTop}
                  className={`flex items-center space-x-1 text-base font-bold transition-colors hover:text-[#007BFF] relative ${
                    location.pathname === '/services' ? 'text-black border-b-2 border-[#007BFF] pb-1' : 'text-black'
                  }`}
                >
                  <span>Services</span>
                  <ChevronDown className="w-4 h-4" />
                </Link>
                
                {isServicesOpen && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-100 py-2">
                    {services.map((service, index) => (
                      <Link
                        key={index}
                        to="/services"
                        onClick={scrollToTop}
                        className="block px-4 py-2 text-sm font-medium text-[#333333] hover:bg-gray-50 hover:text-[#007BFF] transition-colors"
                      >
                        {service}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link 
                to="/insights" 
                onClick={scrollToTop}
                className={`text-base font-bold transition-colors hover:text-[#007BFF] relative ${
                  location.pathname === '/insights' ? 'text-black border-b-2 border-[#007BFF] pb-1' : 'text-black'
                }`}
              >
                News & Insights
              </Link>
              <Link 
                to="/contact" 
                onClick={scrollToTop}
                className={`text-base font-bold transition-colors hover:text-[#007BFF] relative ${
                  location.pathname === '/contact' ? 'text-black border-b-2 border-[#007BFF] pb-1' : 'text-black'
                }`}
              >
                Contacts
              </Link>
            </nav>

            {/* Call Us Button */}
            <div className="hidden lg:flex items-center">
              <Link 
                to="/contact" 
                onClick={scrollToTop}
                className="flex items-center space-x-2 px-6 py-3 bg-[#DC3545] text-white rounded-full hover:bg-[#c82333] transition-colors font-bold"
              >
                <Phone className="w-4 h-4" />
                <span>Call Us</span>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 text-[#333333] hover:text-[#007BFF] transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="lg:hidden border-t border-gray-100">
              <nav className="px-4 py-4 space-y-4">
                <Link to="/" onClick={scrollToTop} className="block text-black hover:text-[#007BFF] transition-colors font-bold">Home</Link>
                <Link to="/about" onClick={scrollToTop} className="block text-black hover:text-[#007BFF] transition-colors font-bold">About</Link>
                <Link to="/case-studies" onClick={scrollToTop} className="block text-black hover:text-[#007BFF] transition-colors font-bold">Case Studies</Link>
                <Link to="/services" onClick={scrollToTop} className="block text-black hover:text-[#007BFF] transition-colors font-bold">Services</Link>
                <Link to="/insights" onClick={scrollToTop} className="block text-black hover:text-[#007BFF] transition-colors font-bold">News & Insights</Link>
                <Link to="/contact" onClick={scrollToTop} className="block text-black hover:text-[#007BFF] transition-colors font-bold">Contacts</Link>
                
                <div className="pt-4 border-t border-gray-100">
                  <Link 
                    to="/contact" 
                    onClick={scrollToTop}
                    className="flex items-center justify-center space-x-2 w-full px-4 py-3 bg-[#DC3545] text-white rounded-full hover:bg-[#c82333] transition-colors font-bold"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Call Us</span>
                  </Link>
                </div>
              </nav>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;