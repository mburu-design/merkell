import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Globe, 
  Smartphone, 
  Target, 
  Users, 
  Palette, 
  Bot,
  ArrowRight,
  CheckCircle,
  Star
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Globe,
      title: 'Web Development & SEO',
      description: 'Custom websites optimized for search engines and user experience.',
      features: [
        'Responsive Web Design',
        'E-commerce Development',
        'SEO Optimization',
        'Performance Optimization',
        'Content Management Systems',
        'Technical SEO Audits'
      ],
      color: 'bg-blue-50 text-blue-600',
      borderColor: 'border-blue-200'
    },
    {
      icon: Smartphone,
      title: 'Digital Marketing',
      description: 'Comprehensive digital strategies to grow your online presence.',
      features: [
        'Social Media Marketing',
        'Content Marketing',
        'Email Marketing',
        'Influencer Marketing',
        'Marketing Automation',
        'Analytics & Reporting'
      ],
      color: 'bg-green-50 text-green-600',
      borderColor: 'border-green-200'
    },
    {
      icon: Target,
      title: 'Meta & Google Ads',
      description: 'Targeted advertising campaigns that deliver measurable results.',
      features: [
        'Google Ads Management',
        'Facebook & Instagram Ads',
        'LinkedIn Advertising',
        'YouTube Advertising',
        'Conversion Tracking',
        'A/B Testing & Optimization'
      ],
      color: 'bg-purple-50 text-purple-600',
      borderColor: 'border-purple-200'
    },
    {
      icon: Users,
      title: 'Sales Training',
      description: 'Professional training programs to boost your sales performance.',
      features: [
        'Sales Process Optimization',
        'Team Training Programs',
        'CRM Implementation',
        'Lead Generation Strategies',
        'Sales Funnel Development',
        'Performance Analytics'
      ],
      color: 'bg-orange-50 text-orange-600',
      borderColor: 'border-orange-200'
    },
    {
      icon: Palette,
      title: 'Graphic Design & Video Editing',
      description: 'Creative visual content that captures your brand essence.',
      features: [
        'Logo & Brand Design',
        'Marketing Materials',
        'Video Production',
        'Motion Graphics',
        'Social Media Graphics',
        'Print Design'
      ],
      color: 'bg-pink-50 text-pink-600',
      borderColor: 'border-pink-200'
    },
    {
      icon: Bot,
      title: 'Branding & AI Automations',
      description: 'Modern branding solutions powered by AI technology.',
      features: [
        'Brand Strategy Development',
        'AI Chatbot Implementation',
        'Process Automation',
        'Customer Service Automation',
        'Data Analysis & Insights',
        'Workflow Optimization'
      ],
      color: 'bg-indigo-50 text-indigo-600',
      borderColor: 'border-indigo-200'
    }
  ];

  const benefits = [
    'Free initial consultation',
    '24/7 customer support',
    'Dedicated project manager',
    'Regular progress reports',
    'Money-back guarantee',
    'Ongoing maintenance & support'
  ];

  const testimonials = [
    {
      name: 'David Thompson',
      company: 'TechStart Solutions',
      service: 'Web Development & SEO',
      content: 'Our website traffic increased by 400% within 3 months of working with Merkel Consulting.',
      rating: 5
    },
    {
      name: 'Lisa Martinez',
      company: 'Fashion Forward',
      service: 'Digital Marketing',
      content: 'Their digital marketing strategies helped us reach a completely new audience and boost sales.',
      rating: 5
    },
    {
      name: 'Robert Kim',
      company: 'Global Manufacturing',
      service: 'Sales Training',
      content: 'The sales training program transformed our team\'s performance. Revenue increased by 250%.',
      rating: 5
    }
  ];

  return (
    <div className="pt-32">
      {/* Hero Section */}
      <section className="relative py-32 bg-[#000080]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h1 className="font-heading text-4xl md:text-6xl font-bold mb-6">
              Our Services
            </h1>
            <p className="font-body text-xl md:text-2xl max-w-3xl mx-auto text-white/90">
              Comprehensive digital solutions designed to accelerate your business growth and maximize your online potential.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <div className="px-4 py-2 bg-[#DC3545] rounded-full">
                <span className="font-body text-white font-medium">6 Core Services</span>
              </div>
              <div className="px-4 py-2 bg-[#007BFF] rounded-full">
                <span className="font-body text-white font-medium">500+ Projects</span>
              </div>
              <div className="px-4 py-2 bg-[#333333] rounded-full">
                <span className="font-body text-white font-medium">98% Success Rate</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div 
                  key={index} 
                  className={`bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 ${service.borderColor} group`}
                >
                  <div className={`w-16 h-16 ${service.color} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-8 h-8" />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-[#333333] mb-4">{service.title}</h3>
                  <p className="text-[#666666] mb-6">{service.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-[#333333] mb-3">What's Included:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-[#666666]">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="border-t border-gray-100 pt-6">
                    <Link 
                      to="/contact" 
                      className="inline-flex items-center justify-center w-full px-6 py-3 bg-[#007BFF] text-white rounded-lg hover:bg-[#0056b3] transition-colors font-medium"
                    >
                      Get Started <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-[#F8F8F8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#333333] mb-6">
              Why Choose Merkell Group?
            </h2>
            <p className="text-xl text-[#666666] max-w-3xl mx-auto">
              We go beyond just delivering services – we build partnerships that drive long-term success.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <CheckCircle className="w-6 h-6 text-green-500 mr-4 flex-shrink-0" />
                <span className="text-[#333333] font-medium">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#333333] mb-6">
              Our Process
            </h2>
            <p className="text-xl text-[#666666] max-w-3xl mx-auto">
              A proven methodology that ensures successful project delivery and exceptional results.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#007BFF] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className="text-lg font-semibold text-[#333333] mb-3">Discovery</h3>
              <p className="text-[#666666]">We analyze your business, goals, and challenges to create a tailored strategy.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-[#007BFF] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="text-lg font-semibold text-[#333333] mb-3">Strategy</h3>
              <p className="text-[#666666]">We develop a comprehensive plan with clear objectives and measurable outcomes.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-[#007BFF] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h3 className="text-lg font-semibold text-[#333333] mb-3">Execution</h3>
              <p className="text-[#666666]">Our expert team implements the solution with precision and attention to detail.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-[#007BFF] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">4</span>
              </div>
              <h3 className="text-lg font-semibold text-[#333333] mb-3">Optimization</h3>
              <p className="text-[#666666]">We continuously monitor and optimize performance to maximize results.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-[#F8F8F8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#333333] mb-6">
              What Our Clients Say
            </h2>
            <p className="text-xl text-[#666666] max-w-3xl mx-auto">
              Real results from real businesses that have transformed with our services.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-[#666666] mb-6 italic">"{testimonial.content}"</p>
                <div className="border-t border-gray-100 pt-4">
                  <p className="font-semibold text-[#333333]">{testimonial.name}</p>
                  <p className="text-[#666666] text-sm">{testimonial.company}</p>
                  <p className="text-[#007BFF] text-sm font-medium">{testimonial.service}</p>
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
            src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1600" 
            alt="Our services" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#000080]/70 to-[#007BFF]/70"></div>
        </div>
        
        {/* Glass Overlay */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-12 hover:bg-white/20 transition-all duration-500 hover:scale-105 hover:shadow-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Choose the perfect service package for your business and start your transformation today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="px-8 py-4 bg-[#DC3545] text-white rounded-lg hover:bg-[#c82333] transition-all duration-300 font-semibold text-lg hover:scale-105"
              >
                Contact Us
              </Link>
              <Link 
                to="/case-studies" 
                className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-[#007BFF] transition-all duration-300 font-semibold text-lg"
              >
                View Results
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Services;