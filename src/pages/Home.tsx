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
      name: 'Bonville Energy',
      company: 'Energy Sector',
      content: 'Merkell Group\'s strategic marketing transformed our brand visibility. Their commitment to measurable results and professional excellence has been invaluable to our growth.',
      rating: 5
    },
    {
      name: 'Wisepaths Tax Consultants',
      company: 'Professional Services',
      content: 'Working with Merkell Group was exceptional. They treated every campaign like a major launch, delivering unforgettable results that resonate with our audience.',
      rating: 5
    },
    {
      name: 'Mila Honey & Peanut Butter',
      company: 'Food & Beverage',
      content: 'Merkell Group turned our visibility into influence and influence into tangible growth. Their precision and creativity are unmatched.',
      rating: 5
    },
    {
      name: 'Usahili Arts',
      company: 'Creative Industry',
      content: 'The team at Merkell Group combines strategy, creativity, and professionalism seamlessly. Our brand now dominates our market.',
      rating: 5
    },
    {
      name: 'Melina Business & Tax Consultants',
      company: 'Professional Services',
      content: 'Exceptional service and lasting impact. Merkell Group\'s results-oriented approach has significantly boosted our engagement and sales.',
      rating: 5
    },
    {
      name: 'Ochwada Financial Consultants',
      company: 'Financial Services',
      content: 'Every interaction with Merkell Group feels like a major product launch. Their attention to detail and commitment to excellence is remarkable.',
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
    'Bonville Energy', 'Wisepaths Tax Consultants', 'Mila Honey & Peanut Butter', 'Usahili Arts', 'Melina Business & Tax Consultants', 'Ochwada Financial Consultants'
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="pt-20 pb-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[90%] mx-auto">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl" style={{ height: '80vh', minHeight: '500px' }}>
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
              <div className="absolute inset-0 bg-[#000080]/60"></div>
            </div>
            
            <div className="relative z-10 h-full flex items-center justify-center px-6 text-center text-white">
              <div>
                <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight tracking-tight">
                  Helping brands <span className="text-[#DC3545] font-black italic">thrive</span>, <span className="text-[#DC3545] font-black italic">inspire</span>, and <span className="text-[#DC3545] font-black italic">dominate</span> globally
                </h1>
                <p className="font-body text-lg md:text-xl mb-8 max-w-2xl mx-auto text-gray-200 font-medium tracking-wide">
                  Turning marketing into unforgettable results and lasting impact worldwide.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    to="/contact" 
                    className="font-body px-8 py-4 bg-[#DC3545] text-white rounded-lg hover:bg-[#c82333] transition-all duration-300 font-bold text-lg uppercase tracking-wider hover:scale-105"
                  >
                    Get Started
                  </Link>
                  <Link 
                    to="/services" 
                    className="font-body px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-[#000080] transition-all duration-300 font-bold text-lg uppercase tracking-wider"
                  >
                    Our Services
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
                <div key={`first-${index}`} className="mx-4 flex-shrink-0">
                  <div className="h-20 px-6 bg-white rounded-lg shadow-md flex items-center justify-center border border-gray-200">
                    <span className="text-[#666666] font-semibold text-sm whitespace-nowrap">{logo}</span>
                  </div>
                </div>
              ))}
              {/* Duplicate set for seamless loop */}
              {clientLogos.map((logo, index) => (
                <div key={`second-${index}`} className="mx-4 flex-shrink-0">
                  <div className="h-20 px-6 bg-white rounded-lg shadow-md flex items-center justify-center border border-gray-200">
                    <span className="text-[#666666] font-semibold text-sm whitespace-nowrap">{logo}</span>
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
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-[#333333] mb-6">
              Your Partner in Digital Excellence
            </h2>
            <p className="font-body text-lg text-[#666666] max-w-3xl mx-auto leading-relaxed">
              At Merkell Group, we combine strategic thinking with innovative technology to help businesses thrive in the digital age. Our comprehensive approach ensures sustainable growth and measurable results.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-[#007BFF] rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-heading text-2xl font-bold text-[#333333] mb-3">Proven Results</h3>
              <p className="font-body text-[#666666]">Over 500+ successful projects with measurable ROI improvements for our clients.</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-[#007BFF] rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-heading text-2xl font-bold text-[#333333] mb-3">Expert Team</h3>
              <p className="font-body text-[#666666]">Certified professionals with years of experience in digital transformation.</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-[#007BFF] rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-heading text-2xl font-bold text-[#333333] mb-3">Tailored Solutions</h3>
              <p className="font-body text-[#666666]">Custom strategies designed specifically for your business goals and industry.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section className="py-20 bg-[#000080] text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-6">
              What We Do
            </h2>
            <p className="font-body text-lg text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Comprehensive digital solutions designed to accelerate your business growth and maximize your online potential.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div 
                  key={index} 
                  className="relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 transition-all duration-300 hover:-translate-y-2 group overflow-hidden"
                >
                  {/* Service Image */}
                  <div className="relative mb-4 overflow-hidden rounded-lg">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-40 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  
                  <div className="relative z-10">
                    <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-4">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-heading text-xl font-bold text-white mb-2">{service.title}</h3>
                    <p className="font-body text-gray-300 text-sm mb-4">{service.description}</p>
                    <Link 
                      to="/services" 
                      className="inline-flex items-center text-sm text-white font-body font-semibold uppercase tracking-wider hover:text-[#DC3545] transition-colors"
                    >
                      Learn More <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
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
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-[#333333] mb-6">
              Client Success Stories
            </h2>
            <p className="font-body text-lg text-[#666666] max-w-3xl mx-auto leading-relaxed">
              See how we've helped businesses like yours achieve remarkable growth and digital transformation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-[#F8F8F8] rounded-xl p-8 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="font-body text-[#666666] mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <p className="font-heading font-bold text-[#333333]">{testimonial.name}</p>
                  <p className="font-body text-[#666666] text-sm">{testimonial.company}</p>
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
          <div className="absolute inset-0 bg-[#000080]/80"></div>
        </div>
        
        {/* Glass Overlay */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-12 hover:bg-white/20 transition-all duration-500 hover:scale-105 hover:shadow-2xl">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="font-body text-lg text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
              Join hundreds of successful businesses that have partnered with us to achieve digital excellence and sustainable growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="font-body px-8 py-4 bg-[#DC3545] text-white rounded-lg hover:bg-[#c82333] transition-all duration-300 font-bold uppercase tracking-wider hover:scale-105"
              >
                Start Your Journey
              </Link>
              <Link 
                to="/case-studies" 
                className="font-body px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-[#007BFF] transition-all duration-300 font-bold uppercase tracking-wider"
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
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-[#333333] mb-6">
              Our Impact
            </h2>
            <p className="font-body text-lg text-[#666666] max-w-3xl mx-auto leading-relaxed">
              Delivering measurable results for businesses across Kenya and beyond.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="font-heading text-5xl font-bold text-[#DC3545] mb-2">500+</div>
              <p className="font-body text-[#666666] font-medium uppercase tracking-wider">Projects Completed</p>
            </div>
            <div>
              <div className="font-heading text-5xl font-bold text-[#DC3545] mb-2">200+</div>
              <p className="font-body text-[#666666] font-medium uppercase tracking-wider">Happy Clients</p>
            </div>
            <div>
              <div className="font-heading text-5xl font-bold text-[#DC3545] mb-2">98%</div>
              <p className="font-body text-[#666666] font-medium uppercase tracking-wider">Client Satisfaction</p>
            </div>
            <div>
              <div className="font-heading text-5xl font-bold text-[#DC3545] mb-2">24/7</div>
              <p className="font-body text-[#666666] font-medium uppercase tracking-wider">Support Available</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-[#333333] mb-6">
              Frequently Asked Questions
            </h2>
            <p className="font-body text-lg text-[#666666]">
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
                  <span className="font-heading font-bold text-[#333333]">{faq.question}</span>
                  {activeAccordion === index ? (
                    <ChevronUp className="w-5 h-5 text-[#DC3545]" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-[#666666]" />
                  )}
                </button>
                {activeAccordion === index && (
                  <div className="px-6 pb-4">
                    <p className="font-body text-[#666666]">{faq.answer}</p>
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