import React from 'react';
import { Link } from 'react-router-dom';
import { Target, Eye, Heart, Users, Award, Globe } from 'lucide-react';

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
      partners: [
        { name: 'Google', logo: 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png' },
        { name: 'Microsoft', logo: 'https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1Mu3b?ver=5c31' },
        { name: 'Adobe', logo: 'https://www.adobe.com/content/dam/cc/icons/Adobe_Corporate_Horizontal_Red_HEX.svg' },
        { name: 'Salesforce', logo: 'https://upload.wikimedia.org/wikipedia/commons/f/f9/Salesforce.com_logo.svg' }
      ]
    },
    {
      category: 'Marketing Partners',
      partners: [
        { name: 'Facebook', logo: 'https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png' },
        { name: 'LinkedIn', logo: 'https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png' },
        { name: 'HubSpot', logo: 'https://www.hubspot.com/hubfs/HubSpot_Logos/HubSpot-Inversed-Favicon.png' },
        { name: 'Mailchimp', logo: 'https://upload.wikimedia.org/wikipedia/commons/3/3e/Mailchimp_Logo.svg' }
      ]
    },
    {
      category: 'Development Partners',
      partners: [
        { name: 'AWS', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg' },
        { name: 'Vercel', logo: 'https://assets.vercel.com/image/upload/front/favicon/vercel/180x180.png' },
        { name: 'GitHub', logo: 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png' },
        { name: 'Stripe', logo: 'https://upload.wikimedia.org/wikipedia/commons/b/ba/Stripe_Logo%2C_revised_2016.svg' }
      ]
    }
  ];

  return (
    <div className="pt-32">
      {/* Hero Section */}
      <section className="relative py-32 bg-[#000080]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h1 className="font-heading text-4xl md:text-6xl font-bold mb-6">
              About Merkell Group
            </h1>
            <p className="font-body text-xl md:text-2xl max-w-3xl mx-auto text-white/90 leading-relaxed">
              At Merkell Group Consulting, we don't chase trends—we craft strategic marketing that delivers measurable results and lasting impact. Every campaign is treated like a launch, combining professionalism, creativity, and precision to build brands that audiences remember for years. We turn visibility into influence, and influence into growth.
            </p>
            <div className="mt-8">
              <div className="inline-flex items-center space-x-2 px-6 py-3 bg-[#DC3545] rounded-full">
                <span className="font-body text-white font-medium">Transforming Businesses Since 2024</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Mission Card */}
            <div className="relative bg-gradient-to-br from-[#DC3545] to-[#c82333] rounded-2xl p-10 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105">
              <div className="absolute top-6 right-6 w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                <Target className="w-8 h-8 text-white" />
              </div>
              
              <div className="relative z-10">
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-6">
                  Our Mission
                </h2>
                <p className="font-body text-xl text-white/95 leading-relaxed">
                  Turning marketing into unforgettable results and lasting impact worldwide.
                </p>
              </div>
              
              {/* Decorative Element */}
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-white/10 rounded-tl-full"></div>
            </div>

            {/* Vision Card */}
            <div className="relative bg-gradient-to-br from-[#000080] to-[#0056b3] rounded-2xl p-10 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105">
              <div className="absolute top-6 right-6 w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                <Eye className="w-8 h-8 text-white" />
              </div>
              
              <div className="relative z-10">
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-6">
                  Our Vision
                </h2>
                <p className="font-body text-xl text-white/95 leading-relaxed">
                  Helping brands <span className="font-black italic">thrive</span>, <span className="font-black italic">inspire</span>, and <span className="font-black italic">dominate</span> globally.
                </p>
              </div>
              
              {/* Decorative Element */}
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-white/10 rounded-tl-full"></div>
            </div>
          </div>

          {/* Additional Info Section */}
          <div className="mt-16 text-center">
            <div className="inline-flex items-center space-x-3 px-8 py-4 bg-[#F8F8F8] rounded-full shadow-md">
              <Award className="w-6 h-6 text-[#DC3545]" />
              <span className="font-body text-lg font-semibold text-[#333333]">
                Transforming Businesses Since 2024
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-[#F8F8F8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-[#333333] mb-6">
              Our Core Values
            </h2>
            <p className="font-body text-xl text-[#666666] max-w-3xl mx-auto">
              These principles guide everything we do and shape our relationships with clients, partners, and each other.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.slice(0, 5).map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="w-16 h-16 bg-[#DC3545] rounded-full flex items-center justify-center mb-6">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-heading text-2xl font-bold text-[#333333] mb-4">{value.title}</h3>
                  <p className="font-body text-[#666666] leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Partnership Categories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#333333] mb-6">
              Our Strategic Partnerships
            </h2>
            <p className="font-body text-xl text-[#666666] max-w-3xl mx-auto">
              We collaborate with industry leaders to provide our clients with the best tools, 
              technologies, and expertise available.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {partnerships.map((category, index) => (
              <div key={index} className="bg-[#F8F8F8] rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h3 className="font-heading text-xl font-bold text-[#333333] mb-8 text-center">{category.category}</h3>
                <div className="grid grid-cols-2 gap-6">
                  {category.partners.map((partner, partnerIndex) => (
                    <div key={partnerIndex} className="flex items-center justify-center p-4 bg-white rounded-lg hover:shadow-md transition-shadow duration-300 h-24">
                      <img 
                        src={partner.logo} 
                        alt={`${partner.name} logo`}
                        className="max-w-full max-h-full object-contain"
                        onError={(e) => {
                          // Fallback to text if image fails to load
                          e.currentTarget.style.display = 'none';
                          e.currentTarget.parentElement!.innerHTML = `<span class="font-body font-semibold text-[#666666]">${partner.name}</span>`;
                        }}
                      />
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