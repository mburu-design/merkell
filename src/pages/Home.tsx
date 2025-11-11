import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Globe, 
  Smartphone, 
  Target, 
  Users, 
  Palette, 
  Bot,
  ChevronDown,
  ChevronUp,
  Play,
  Star,
  ArrowRight,
  CheckCircle
} from 'lucide-react';

const Home = () => {
  const [activeAccordion, setActiveAccordion] = useState<number | null>(null);

  const services = [
    {
      icon: Globe,
      title: 'Web Development & SEO',
      description: 'Custom websites optimized for search engines and user experience.',
      color: 'bg-blue-50 text-blue-600',
      image: 'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      icon: Smartphone,
      title: 'Digital Marketing',
      description: 'Comprehensive digital strategies to grow your online presence.',
      color: 'bg-green-50 text-green-600',
      image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      icon: Target,
      title: 'Meta & Google Ads',
      description: 'Targeted advertising campaigns that deliver measurable results.',
      color: 'bg-purple-50 text-purple-600',
      image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      icon: Users,
      title: 'Sales Training',
      description: 'Professional training programs to boost your sales performance.',
      color: 'bg-orange-50 text-orange-600',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      icon: Palette,
      title: 'Graphic Design & Video Editing',
      description: 'Creative visual content that captures your brand essence.',
      color: 'bg-pink-50 text-pink-600',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      icon: Bot,
      title: 'Branding & AI Automations',
      description: 'Modern branding solutions powered by AI technology.',
      color: 'bg-indigo-50 text-indigo-600',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'TechStart Inc.',
      content: 'Merkel Consulting transformed our digital presence completely. Our revenue increased by 300% in just 6 months.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      company: 'Global Retail Co.',
      content: 'The team\'s expertise in digital marketing helped us reach new markets we never thought possible.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      company: 'Creative Agency',
      content: 'Outstanding service and results. They truly understand what it takes to succeed in today\'s digital landscape.',
      rating: 5
    }
  ];

  const faqs = [
    {
      question: 'What makes Merkel Consulting different from other agencies?',
      answer: 'We combine strategic thinking with cutting-edge technology to deliver measurable results. Our team has extensive experience across multiple industries and we provide personalized solutions tailored to your specific business needs.'
    },
    {
      question: 'How long does it typically take to see results?',
      answer: 'Results vary depending on the service and your specific goals. For digital marketing campaigns, you can expect to see initial results within 30-60 days, while comprehensive digital transformations may take 3-6 months to show full impact.'
    },
    {
      question: 'Do you work with businesses of all sizes?',
      answer: 'Yes, we work with startups, small businesses, and large enterprises. Our solutions are scalable and can be customized to fit any budget and business size.'
    },
    {
      question: 'What industries do you specialize in?',
      answer: 'We have experience across various industries including technology, healthcare, retail, finance, and professional services. Our diverse expertise allows us to adapt our strategies to any sector.'
    },
    {
      question: 'How do you measure success?',
      answer: 'We use data-driven metrics specific to your goals, including ROI, conversion rates, traffic growth, lead generation, and revenue increase. We provide regular reports and transparent communication about your campaign performance.'
    }
  ];

  const clientLogos = [
    'TechCorp', 'InnovateCo', 'GlobalTech', 'FutureSoft', 'NextGen'
  ];

  return (
    <div className="pt-32">
      {/* Hero Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            {/* Video Background */}
            <div className="absolute inset-0">
              <video 
                autoPlay 
                muted 
                loop 
                playsInline
                className="w-full h-full object-cover"
              >
                <source src="https://videos.pexels.com/video-files/1851190/1851190-uhd_2560_1440_25fps.mp4" type="video/mp4" />
                {/* Fallback background */}
                <div className="w-full h-full bg-gradient-to-br from-[#000080] via-[#007BFF] to-[#000080]"></div>
              </video>
              <div className="absolute inset-0 bg-[#000080]/60"></div>
            </div>
            
            <div className="relative z-10 py-32 px-8 text-center text-white">
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Merkell Group helps
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
                <span className="text-[#DC3545]">top brands thrive globally.</span>
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-gray-200">
              We help businesses grow through strategic digital solutions, innovative marketing, and cutting-edge technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="px-8 py-4 bg-[#DC3545] text-white rounded-lg hover:bg-[#c82333] transition-all duration-300 font-semibold text-lg hover:scale-105"
              >
                Get Started Today
              </Link>
              <Link 
                to="/services" 
                className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-[#000080] transition-all duration-300 font-semibold text-lg"
              >
                Explore Services
              </Link>
            </div>
          </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Logos */}
      <section className="py-16 bg-[#F8F8F8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-[#666666] mb-8 font-medium text-lg">Trusted by leading companies worldwide</p>
          
          {/* Marquee Container */}
          <div className="relative overflow-hidden">
            <div className="flex animate-marquee whitespace-nowrap">
              {/* First set of logos */}
              {clientLogos.map((logo, index) => (
                <div key={`first-${index}`} className="mx-8 flex-shrink-0">
                  <div className="h-16 w-32 bg-white rounded-lg shadow-md flex items-center justify-center border border-gray-200">
                    <span className="text-[#666666] font-semibold text-lg">{logo}</span>
                  </div>
                </div>
              ))}
              {/* Duplicate set for seamless loop */}
              {clientLogos.map((logo, index) => (
                <div key={`second-${index}`} className="mx-8 flex-shrink-0">
                  <div className="h-16 w-32 bg-white rounded-lg shadow-md flex items-center justify-center border border-gray-200">
                    <span className="text-[#666666] font-semibold text-lg">{logo}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#333333] mb-6">
              Your Partner in Digital Excellence
            </h2>
            <p className="text-xl text-[#666666] max-w-3xl mx-auto">
              At Merkel Consulting, we combine strategic thinking with innovative technology to help businesses thrive in the digital age. Our comprehensive approach ensures sustainable growth and measurable results.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-[#007BFF] rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-[#333333] mb-3">Proven Results</h3>
              <p className="text-[#666666]">Over 500+ successful projects with measurable ROI improvements for our clients.</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-[#007BFF] rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-[#333333] mb-3">Expert Team</h3>
              <p className="text-[#666666]">Certified professionals with years of experience in digital transformation.</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-[#007BFF] rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-[#333333] mb-3">Tailored Solutions</h3>
              <p className="text-[#666666]">Custom strategies designed specifically for your business goals and industry.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section className="py-20 bg-gradient-to-br from-[#000080] via-[#007BFF] to-[#8B5CF6] text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-20 h-20 border-2 border-white rounded-full"></div>
          <div className="absolute top-32 right-20 w-16 h-16 border-2 border-white rounded-lg rotate-45"></div>
          <div className="absolute bottom-20 left-1/4 w-12 h-12 border-2 border-white rounded-full"></div>
          <div className="absolute bottom-32 right-1/3 w-24 h-24 border-2 border-white rounded-lg rotate-12"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#333333] mb-6">
              What We Do
            </h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Comprehensive digital solutions designed to accelerate your business growth and maximize your online potential.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div 
                  key={index} 
                  className="relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-8 transition-all duration-500 hover:-translate-y-4 group overflow-hidden animate-in slide-in-from-bottom-8 fade-in"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  {/* Service Image */}
                  <div className="relative mb-6 overflow-hidden rounded-lg">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  </div>
                  
                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-white/20 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                    <h3 className="text-xl font-semibold text-white mb-4">{service.title}</h3>
                    <p className="text-gray-200 mb-6">{service.description}</p>
                  </div>
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-[#DC3545] opacity-0 group-hover:opacity-95 transition-all duration-500 flex items-center justify-center rounded-xl">
                    <div className="text-center text-white p-6">
                      <IconComponent className="w-12 h-12 text-white mx-auto mb-4" />
                      <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                      <p className="text-white/90 mb-6">{service.description}</p>
                      <Link 
                        to="/services" 
                        className="inline-flex items-center px-6 py-3 bg-white text-[#DC3545] rounded-full font-semibold hover:bg-gray-100 transition-colors"
                      >
                        Learn More <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Client Success Stories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#333333] mb-6">
              Client Success Stories
            </h2>
            <p className="text-xl text-[#666666] max-w-3xl mx-auto">
              See how we've helped businesses like yours achieve remarkable growth and digital transformation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-[#F8F8F8] rounded-xl p-8 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-[#666666] mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <p className="font-semibold text-[#333333]">{testimonial.name}</p>
                  <p className="text-[#666666] text-sm">{testimonial.company}</p>
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
            src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1600" 
            alt="Business transformation" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#000080]/70 to-[#007BFF]/70"></div>
        </div>
        
        {/* Glass Overlay */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-12 hover:bg-white/20 transition-all duration-500 hover:scale-105 hover:shadow-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Join hundreds of successful businesses that have partnered with us to achieve digital excellence and sustainable growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="px-8 py-4 bg-[#DC3545] text-white rounded-lg hover:bg-[#c82333] transition-all duration-300 font-semibold text-lg hover:scale-105"
              >
                Start Your Journey
              </Link>
              <Link 
                to="/case-studies" 
                className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-[#007BFF] transition-all duration-300 font-semibold text-lg"
              >
                View Case Studies
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#333333] mb-6">
              Our Impact
            </h2>
            <p className="text-xl text-[#666666] max-w-3xl mx-auto">
              Delivering measurable results for businesses across Kenya and beyond.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-[#007BFF] mb-2">500+</div>
              <p className="text-[#666666]">Projects Completed</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#007BFF] mb-2">200+</div>
              <p className="text-[#666666]">Happy Clients</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#007BFF] mb-2">98%</div>
              <p className="text-[#666666]">Client Satisfaction</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#007BFF] mb-2">24/7</div>
              <p className="text-[#666666]">Support Available</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#333333] mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-[#666666]">
              Get answers to common questions about our services and approach.
            </p>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-lg">
                <button
                  onClick={() => setActiveAccordion(activeAccordion === index ? null : index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <span className="font-semibold text-[#333333]">{faq.question}</span>
                  {activeAccordion === index ? (
                    <ChevronUp className="w-5 h-5 text-[#007BFF]" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-[#666666]" />
                  )}
                </button>
                {activeAccordion === index && (
                  <div className="px-6 pb-4">
                    <p className="text-[#666666]">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;