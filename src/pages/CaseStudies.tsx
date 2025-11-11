import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, Calendar, TrendingUp, Users, Globe } from 'lucide-react';

const CaseStudies = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Web Development', 'Digital Marketing', 'E-commerce', 'Branding', 'AI Automation'];

  const caseStudies = [
    {
      id: 1,
      title: 'E-commerce Platform Transformation',
      client: 'Fashion Forward Boutique',
      category: 'E-commerce',
      image: 'https://images.pexels.com/photos/3965545/pexels-photo-3965545.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Complete e-commerce platform redesign resulting in 400% increase in online sales.',
      results: [
        '400% increase in online sales',
        '250% improvement in conversion rate',
        '60% reduction in cart abandonment'
      ],
      duration: '4 months',
      technologies: ['Shopify', 'React', 'Google Analytics', 'Facebook Pixel'],
      challenge: 'The client had an outdated e-commerce platform with poor user experience and low conversion rates.',
      solution: 'We redesigned the entire platform with modern UX/UI principles and implemented advanced analytics.',
      outcome: 'The new platform delivered exceptional results with significant improvements in all key metrics.'
    },
    {
      id: 2,
      title: 'Digital Marketing Campaign Success',
      client: 'TechStart Solutions',
      category: 'Digital Marketing',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Multi-channel digital marketing campaign that generated 500+ qualified leads in 3 months.',
      results: [
        '500+ qualified leads generated',
        '300% increase in website traffic',
        '150% improvement in brand awareness'
      ],
      duration: '3 months',
      technologies: ['Google Ads', 'Facebook Ads', 'HubSpot', 'Google Analytics'],
      challenge: 'The startup needed to establish market presence and generate qualified leads quickly.',
      solution: 'We developed a comprehensive digital marketing strategy across multiple channels.',
      outcome: 'The campaign exceeded expectations and established the client as a market leader.'
    },
    {
      id: 3,
      title: 'Corporate Website Redesign',
      client: 'Global Manufacturing Corp',
      category: 'Web Development',
      image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Modern corporate website with improved user experience and mobile optimization.',
      results: [
        '200% increase in mobile traffic',
        '180% improvement in page load speed',
        '90% increase in contact form submissions'
      ],
      duration: '6 months',
      technologies: ['React', 'Node.js', 'AWS', 'MongoDB'],
      challenge: 'The existing website was outdated, slow, and not mobile-friendly.',
      solution: 'We built a modern, responsive website with optimized performance and user experience.',
      outcome: 'The new website significantly improved user engagement and lead generation.'
    },
    {
      id: 4,
      title: 'Brand Identity & Marketing Strategy',
      client: 'Innovative Health Solutions',
      category: 'Branding',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Complete brand identity redesign with integrated marketing strategy.',
      results: [
        '250% increase in brand recognition',
        '180% growth in social media following',
        '120% increase in customer engagement'
      ],
      duration: '5 months',
      technologies: ['Adobe Creative Suite', 'Figma', 'Social Media Platforms'],
      challenge: 'The client needed a complete brand overhaul to compete in the healthcare market.',
      solution: 'We developed a comprehensive brand identity and marketing strategy.',
      outcome: 'The new brand positioning significantly improved market presence and customer engagement.'
    },
    {
      id: 5,
      title: 'AI-Powered Customer Service Automation',
      client: 'Customer Care Plus',
      category: 'AI Automation',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Implementation of AI chatbot system reducing customer service costs by 60%.',
      results: [
        '60% reduction in customer service costs',
        '24/7 customer support availability',
        '85% customer satisfaction rate'
      ],
      duration: '3 months',
      technologies: ['OpenAI', 'Python', 'React', 'AWS Lambda'],
      challenge: 'High customer service costs and limited availability were impacting customer satisfaction.',
      solution: 'We implemented an AI-powered chatbot system with natural language processing.',
      outcome: 'The automation significantly reduced costs while improving customer satisfaction.'
    },
    {
      id: 6,
      title: 'SEO & Content Marketing Success',
      client: 'Professional Services Group',
      category: 'Digital Marketing',
      image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Comprehensive SEO strategy resulting in first-page rankings for 50+ keywords.',
      results: [
        'First-page rankings for 50+ keywords',
        '350% increase in organic traffic',
        '200% improvement in lead quality'
      ],
      duration: '8 months',
      technologies: ['SEMrush', 'Google Search Console', 'WordPress', 'Google Analytics'],
      challenge: 'Poor search engine visibility was limiting the client\'s online presence.',
      solution: 'We developed a comprehensive SEO and content marketing strategy.',
      outcome: 'The client achieved dominant search engine presence in their industry.'
    }
  ];

  const filteredCaseStudies = selectedCategory === 'All' 
    ? caseStudies 
    : caseStudies.filter(study => study.category === selectedCategory);

  return (
    <div className="pt-32">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0">
          <video 
            autoPlay 
            muted 
            loop 
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="https://videos.pexels.com/video-files/3209828/3209828-uhd_2560_1440_25fps.mp4" type="video/mp4" />
            {/* Fallback background */}
            <div className="w-full h-full bg-gradient-to-br from-[#000080] to-[#007BFF]"></div>
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-[#000080]/70 to-[#007BFF]/70"></div>
        </div>
        
        {/* Success Metrics Floating */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-12 animate-float">
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3 border border-white/30">
              <div className="text-white font-bold text-lg">500+</div>
              <div className="text-white/80 text-xs">Projects</div>
            </div>
          </div>
          <div className="absolute top-32 right-16 animate-float" style={{animationDelay: '1s'}}>
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3 border border-white/30">
              <div className="text-white font-bold text-lg">98%</div>
              <div className="text-white/80 text-xs">Success</div>
            </div>
          </div>
          <div className="absolute bottom-32 left-1/4 animate-float" style={{animationDelay: '2s'}}>
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3 border border-white/30">
              <div className="text-white font-bold text-lg">300%</div>
              <div className="text-white/80 text-xs">Avg ROI</div>
            </div>
          </div>
        </div>
        
        {/* Glass Overlay Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-3xl p-12 text-center text-white hover:bg-white/15 transition-all duration-500">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-shadow-lg animate-fadeInUp">
              Case Studies
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto text-white/90 animate-slideInLeft" style={{animationDelay: '0.3s'}}>
              Real results from real businesses. Discover how we've helped companies transform and grow.
            </p>
            <div className="mt-8 animate-slideInRight" style={{animationDelay: '0.6s'}}>
              <div className="inline-flex items-center space-x-2 px-6 py-3 bg-white/20 rounded-full backdrop-blur-sm">
                <TrendingUp className="w-5 h-5 text-green-400" />
                <span className="text-white font-medium">Proven Success Stories</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-[#007BFF] mb-2">500+</div>
              <p className="text-[#666666]">Projects Completed</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#007BFF] mb-2">98%</div>
              <p className="text-[#666666]">Client Satisfaction</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#007BFF] mb-2">300%</div>
              <p className="text-[#666666]">Average ROI Increase</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#007BFF] mb-2">50+</div>
              <p className="text-[#666666]">Industries Served</p>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-[#F8F8F8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-[#007BFF] text-white shadow-lg'
                    : 'bg-white text-[#666666] hover:bg-[#007BFF] hover:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCaseStudies.map((study) => (
              <div 
                key={study.id} 
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden group"
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={study.image} 
                    alt={study.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-[#000080]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-[#007BFF] text-white text-sm rounded-full">
                      {study.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-[#333333] mb-2">{study.title}</h3>
                  <p className="text-[#007BFF] font-medium mb-3">{study.client}</p>
                  <p className="text-[#666666] mb-4">{study.description}</p>
                  
                  <div className="space-y-2 mb-4">
                    {study.results.slice(0, 2).map((result, index) => (
                      <div key={index} className="flex items-center text-sm text-[#666666]">
                        <TrendingUp className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {result}
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="flex items-center text-sm text-[#666666]">
                      <Calendar className="w-4 h-4 mr-1" />
                      {study.duration}
                    </div>
                    <button className="inline-flex items-center text-[#007BFF] font-medium hover:text-[#0056b3] transition-colors">
                      View Details <ExternalLink className="w-4 h-4 ml-1" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ready to Transform Section with Glassmorphism */}
      <section className="relative py-20 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1600" 
            alt="Case studies" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#000080]/70 to-[#007BFF]/70"></div>
        </div>
        
        {/* Glass Overlay */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-12 hover:bg-white/20 transition-all duration-500 hover:scale-105 hover:shadow-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Your Success Story Awaits
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Join our portfolio of successful clients and let us help you achieve remarkable results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="px-8 py-4 bg-[#DC3545] text-white rounded-lg hover:bg-[#c82333] transition-all duration-300 font-semibold text-lg hover:scale-105"
              >
                Start Your Project
              </Link>
              <Link 
                to="/services" 
                className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-[#007BFF] transition-all duration-300 font-semibold text-lg"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default CaseStudies;