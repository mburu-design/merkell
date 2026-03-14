import React from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, Target, Users, Award, CheckCircle, ExternalLink, Calendar, BookOpen, TrendingUp } from 'lucide-react';

const CSR = () => {
  const eligibilityCriteria = [
    'Currently enrolled in university/college',
    'Ages 19–24',
    'Have been in business for at least 6 months',
    'Ready to operate at a higher level',
    'Campus-based founders',
    'Committed to full six-month journey'
  ];

  const programBenefits = [
    {
      icon: BookOpen,
      title: 'Strategic Growth Training',
      description: 'Learn proven strategies to scale your business sustainably and build long-term wealth.'
    },
    {
      icon: Target,
      title: 'Operational Discipline',
      description: 'Master the systems and processes that separate successful enterprises from struggling startups.'
    },
    {
      icon: TrendingUp,
      title: 'Legacy Building',
      description: 'Position yourself as a globally competitive founder with strategic grounding for scale.'
    },
    {
      icon: Users,
      title: 'Expert Mentorship',
      description: 'Access to experienced business leaders and mentors throughout your journey.'
    }
  ];

  return (
    <div className="pt-32">
      {/* Hero Section */}
      <section className="relative py-32 bg-[#000080]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            {/* RothMark Logo */}
            <div className="flex justify-center mb-8">
              <img 
                src="/RothMark.svg" 
                alt="RothMark Business School" 
                className="h-24 md:h-32 lg:h-40 w-auto"
              />
            </div>
            
            <h1 className="font-heading text-4xl md:text-6xl font-bold mb-6">
              RothMark Business School
            </h1>
            <p className="font-body text-xl md:text-2xl max-w-3xl mx-auto text-white/90 leading-relaxed">
              Shaping the future of African enterprise through education, mentorship, and strategic business development.
            </p>
          </div>
        </div>
      </section>

      {/* Program Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-[#333333] mb-6">
                6-Month Online Business Management Program
              </h2>
              <p className="font-body text-lg text-[#666666] leading-relaxed mb-6">
                At Merkell Group, we are committed to shaping the future of African enterprise. Through our Corporate Social Responsibility initiative, RothMark Business School, we are launching a fully sponsored 6-Month Online Business Management Program designed for student founders who are serious about scaling and building sustainable wealth.
              </p>
              <p className="font-body text-lg text-[#666666] leading-relaxed mb-6">
                This is not just a training program. It is a structured pathway to strategic growth, operational discipline, and long-term legacy building.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <a 
                  href="https://forms.gle/vaYDzoLPgSSGyxeL9" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-4 bg-[#DC3545] text-white rounded-lg hover:bg-[#c82333] transition-all duration-300 font-body font-bold text-lg uppercase tracking-wider hover:scale-105"
                >
                  Apply Now <ExternalLink className="w-5 h-5 ml-2" />
                </a>
                <Link 
                  to="/contact" 
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-[#000080] text-[#000080] rounded-lg hover:bg-[#000080] hover:text-white transition-all duration-300 font-body font-bold text-lg uppercase tracking-wider"
                >
                  Learn More
                </Link>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="/merkell_csr-poster.jpeg" 
                alt="RothMark Business School Program" 
                className="rounded-2xl shadow-2xl w-full"
              />
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-[#DC3545] rounded-full flex items-center justify-center">
                <Award className="w-12 h-12 text-white" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Program Benefits */}
      <section className="py-20 bg-[#F8F8F8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-[#333333] mb-6">
              What You'll Gain
            </h2>
            <p className="font-body text-xl text-[#666666] max-w-3xl mx-auto">
              A comprehensive program designed to transform student founders into globally competitive business leaders.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {programBenefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="w-16 h-16 bg-[#DC3545] rounded-full flex items-center justify-center mb-6">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-heading text-2xl font-bold text-[#333333] mb-4">{benefit.title}</h3>
                  <p className="font-body text-[#666666] leading-relaxed">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Eligibility Criteria */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-[#333333] mb-6">
              Who We're Looking For
            </h2>
            <p className="font-body text-xl text-[#666666]">
              We are seeking campus-based founders who are ready to take their business to the next level.
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-[#000080] to-[#0056b3] rounded-2xl p-10 shadow-2xl">
            <h3 className="font-heading text-2xl font-bold text-white mb-8 text-center">Eligibility Requirements</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {eligibilityCriteria.map((criteria, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-[#DC3545] flex-shrink-0 mt-1" />
                  <span className="font-body text-white text-lg">{criteria}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Program Details */}
      <section className="py-20 bg-[#F8F8F8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-[#DC3545] rounded-full flex items-center justify-center mx-auto mb-6">
                <Calendar className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-heading text-2xl font-bold text-[#333333] mb-4">Duration</h3>
              <p className="font-body text-[#666666] text-lg">6 Months</p>
              <p className="font-body text-[#666666] text-sm mt-2">Full-time commitment required</p>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-[#DC3545] rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-heading text-2xl font-bold text-[#333333] mb-4">Investment</h3>
              <p className="font-body text-[#666666] text-lg">Fully Sponsored</p>
              <p className="font-body text-[#666666] text-sm mt-2">100% funded by Merkell Group</p>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-[#DC3545] rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-heading text-2xl font-bold text-[#333333] mb-4">Format</h3>
              <p className="font-body text-[#666666] text-lg">Online</p>
              <p className="font-body text-[#666666] text-sm mt-2">Learn from anywhere</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="relative py-20 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#DC3545] to-[#c82333]"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">
            Building the Next Generation of African Founders
          </h2>
          <p className="font-body text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
            We are building the next generation of African founders — globally competitive, strategically grounded, and positioned for scale.
          </p>
          <p className="font-body text-lg mb-8 italic">
            Kindly share with any promising young entrepreneur within your network.
          </p>
          <a 
            href="https://forms.gle/vaYDzoLPgSSGyxeL9" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-12 py-4 bg-white text-[#DC3545] rounded-full hover:bg-gray-100 transition-all duration-300 font-body font-bold text-lg uppercase tracking-wider hover:scale-105"
          >
            Apply Now <ExternalLink className="w-5 h-5 ml-2" />
          </a>
        </div>
      </section>

    </div>
  );
};

export default CSR;
