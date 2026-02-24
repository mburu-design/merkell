import React from 'react';
import { Link } from 'react-router-dom';
import { Target, Eye, Heart, Users, Award, Globe, ChevronLeft, ChevronRight } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Target,
      title: 'Strategic Thinking',
      description: 'Every campaign is planned with measurable goals and long-term brand growth in mind.'
    },
    {
      icon: Heart,
      title: 'Timeless Impact',
      description: 'Not chasing trends, but creating messaging, visuals, and experiences that remain relevant for years.'
    },
    {
      icon: Award,
      title: 'Professional Excellence',
      description: 'Upholding the highest standards in client service and execution.'
    },
    {
      icon: Globe,
      title: 'Launch Mentality',
      description: 'Treat every day, campaign, or activation like a major product launch—attention to detail, excitement, and impact.'
    },
    {
      icon: Users,
      title: 'Results-Oriented',
      description: 'Visibility, engagement, and sales growth are always the bottom line.'
    },
    {
      icon: Eye,
      title: 'Timeless Brand Building',
      description: 'We build brands that audiences remember for years, turning visibility into influence and influence into growth.'
    }
  ];

  const partnerships = [
    {
      category: 'Technology Partners',
      partners: ['Google', 'Microsoft', 'Adobe', 'Salesforce']
    },
    {
      category: 'Marketing Partners',
      partners: ['Facebook', 'LinkedIn', 'HubSpot', 'Mailchimp']
    },
    {
      category: 'Development Partners',
      partners: ['AWS', 'Vercel', 'GitHub', 'Stripe']
    }
  ];

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
            <source src="https://videos.pexels.com/video-files/3196284/3196284-uhd_2560_1440_25fps.mp4" type="video/mp4" />
            {/* Fallback background */}
            <div className="w-full h-full bg-gradient-to-br from-[#000080] to-[#007BFF]"></div>
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-[#000080]/80 to-[#007BFF]/60"></div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-20 h-20 border-2 border-white/20 rounded-full animate-float"></div>
          <div className="absolute top-40 right-20 w-16 h-16 border-2 border-white/20 rounded-lg rotate-45 animate-float" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-32 left-1/4 w-12 h-12 border-2 border-white/20 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
          <div className="absolute bottom-20 right-1/3 w-24 h-24 border-2 border-white/20 rounded-lg rotate-12 animate-float" style={{animationDelay: '0.5s'}}></div>
        </div>
        
        {/* Glass Overlay Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-3xl p-12 text-center text-white hover:bg-white/15 transition-all duration-500">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-shadow-lg animate-fadeInUp">
              About Merkell Group
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto text-white/90 animate-slideInLeft" style={{animationDelay: '0.3s'}}>
              Empowering businesses through innovative digital solutions and strategic consulting since 2015.
            </p>
            <div className="mt-8 animate-slideInRight" style={{animationDelay: '0.6s'}}>
              <div className="inline-flex items-center space-x-2 px-6 py-3 bg-white/20 rounded-full backdrop-blur-sm">
                <span className="w-3 h-3 bg-green-400 rounded-full animate-pulse-slow"></span>
                <span className="text-white font-medium">Transforming Businesses Since 2015</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="mb-12">
                <div className="flex items-center mb-4">
                  <Target className="w-8 h-8 text-[#007BFF] mr-3" />
                  <h2 className="text-3xl font-bold text-[#333333]">Our Mission</h2>
                </div>
                <p className="text-lg text-[#666666] leading-relaxed">
                  Turning marketing into unforgettable results and lasting impact worldwide. We craft strategic marketing that delivers measurable results while combining professionalism, creativity, and precision to build brands that audiences remember for years.
                </p>
              </div>

              <div>
                <div className="flex items-center mb-4">
                  <Eye className="w-8 h-8 text-[#007BFF] mr-3" />
                  <h2 className="text-3xl font-bold text-[#333333]">Our Vision</h2>
                </div>
                <p className="text-lg text-[#666666] leading-relaxed">
                  Helping brands thrive, inspire, and dominate globally. We turn visibility into influence, and influence into growth, creating timeless impact that transcends trends.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Team collaboration" 
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-[#007BFF] rounded-full flex items-center justify-center">
                <Award className="w-12 h-12 text-white" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-[#F8F8F8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#333333] mb-6">
              Our Story
            </h2>
            <p className="text-xl text-[#666666] max-w-3xl mx-auto">
              From a small startup to a global consulting firm, our journey has been driven by passion, 
              innovation, and an unwavering commitment to client success.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#007BFF] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">2015</span>
              </div>
              <h3 className="text-lg font-semibold text-[#333333] mb-2">Founded</h3>
              <p className="text-[#666666]">Started with a vision to help businesses thrive in the digital age.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-[#007BFF] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">2018</span>
              </div>
              <h3 className="text-lg font-semibold text-[#333333] mb-2">Expansion</h3>
              <p className="text-[#666666]">Expanded services to include AI automation and advanced analytics.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-[#007BFF] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">2021</span>
              </div>
              <h3 className="text-lg font-semibold text-[#333333] mb-2">Global Reach</h3>
              <p className="text-[#666666]">Achieved global presence serving clients across 50+ countries.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-[#007BFF] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">2024</span>
              </div>
              <h3 className="text-lg font-semibold text-[#333333] mb-2">Innovation</h3>
              <p className="text-[#666666]">Leading the industry with cutting-edge AI and automation solutions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-[#000080] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-9xl font-bold">
            M
          </div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              These principles guide everything we do and shape our relationships with clients, 
              partners, and each other.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{value.title}</h3>
                  <p className="text-gray-300">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Partnership Categories */}
      <section className="py-20 bg-[#F8F8F8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#333333] mb-6">
              Our Strategic Partnerships
            </h2>
            <p className="text-xl text-[#666666] max-w-3xl mx-auto">
              We collaborate with industry leaders to provide our clients with the best tools, 
              technologies, and expertise available.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {partnerships.map((category, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-xl font-semibold text-[#333333] mb-6 text-center">{category.category}</h3>
                <div className="space-y-4">
                  {category.partners.map((partner, partnerIndex) => (
                    <div key={partnerIndex} className="flex items-center justify-center p-3 bg-gray-50 rounded-lg">
                      <span className="font-medium text-[#666666]">{partner}</span>
                    </div>
                  ))}
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
            src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1600" 
            alt="About us" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#000080]/70 to-[#007BFF]/70"></div>
        </div>
        
        {/* Glass Overlay */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-12 hover:bg-white/20 transition-all duration-500 hover:scale-105 hover:shadow-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Partner with Excellence
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Experience the difference of working with a team that truly understands your business goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="px-8 py-4 bg-[#DC3545] text-white rounded-lg hover:bg-[#c82333] transition-all duration-300 font-semibold text-lg hover:scale-105"
              >
                Get Started
              </Link>
              <Link 
                to="/services" 
                className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-[#007BFF] transition-all duration-300 font-semibold text-lg"
              >
                Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;