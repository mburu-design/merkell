import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, MessageCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    budget: '',
    message: '',
    preferredContact: 'email',
    timeline: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
  };

  const departments = [
    {
      title: 'General Inquiries',
      email: 'merccykmwende@gmail.com',
      phone: '0748 324 896',
      description: 'For general questions and information about our services.'
    },
    {
      title: 'Sales & Partnerships',
      email: 'kmwendwa692@gmail.com',
      phone: '0113 528 252',
      description: 'Ready to start a project or explore partnership opportunities.'
    },
    {
      title: 'Technical Support',
      email: 'merccykmwende@gmail.com',
      phone: '0748 324 896',
      description: 'Need help with an existing project or technical assistance.'
    }
  ];

  if (isSubmitted) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center bg-[#F8F8F8]">
        <div className="max-w-md mx-auto text-center p-8 bg-white rounded-xl shadow-lg">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-8 h-8 text-green-600" />
          </div>
          <h2 className="text-2xl font-bold text-[#333333] mb-4">Thank You!</h2>
          <p className="text-[#666666] mb-6">
            Your message has been sent successfully. We'll get back to you within 24 hours.
          </p>
          <button 
            onClick={() => setIsSubmitted(false)}
            className="px-6 py-3 bg-[#007BFF] text-white rounded-lg hover:bg-[#0056b3] transition-colors font-medium"
          >
            Send Another Message
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-32">
      {/* Hero Section */}
      <section className="relative py-32 bg-[#000080]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Get In Touch
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto text-white/90">
              Ready to transform your business? Let's discuss your project and create a custom solution that drives results.
            </p>
            <div className="mt-8">
              <div className="inline-flex items-center space-x-2 px-6 py-3 bg-[#DC3545] rounded-full">
                <span className="text-white font-medium">Available 24/7</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-[#333333] mb-8">Request a Callback</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-[#333333] mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#007BFF] focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-[#333333] mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#007BFF] focus:border-transparent"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-[#333333] mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#007BFF] focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-[#333333] mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#007BFF] focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-[#333333] mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#007BFF] focus:border-transparent"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-[#333333] mb-2">
                      Service Interested In *
                    </label>
                    <select
                      id="service"
                      name="service"
                      required
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#007BFF] focus:border-transparent"
                    >
                      <option value="">Select a service</option>
                      <option value="web-development">Web Development & SEO</option>
                      <option value="digital-marketing">Digital Marketing</option>
                      <option value="ads-management">Meta & Google Ads</option>
                      <option value="sales-training">Sales Training</option>
                      <option value="graphic-design">Graphic Design & Video Editing</option>
                      <option value="branding-ai">Branding & AI Automations</option>
                      <option value="multiple">Multiple Services</option>
                      <option value="consultation">General Consultation</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#333333] mb-2">
                      Preferred Contact Method
                    </label>
                    <div className="flex space-x-4 pt-2">
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="preferredContact"
                          value="email"
                          checked={formData.preferredContact === 'email'}
                          onChange={handleInputChange}
                          className="mr-2"
                        />
                        Email
                      </label>
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="preferredContact"
                          value="phone"
                          checked={formData.preferredContact === 'phone'}
                          onChange={handleInputChange}
                          className="mr-2"
                        />
                        Phone
                      </label>
                    </div>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-[#333333] mb-2">
                    Project Details *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us about your project, goals, and any specific requirements..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#007BFF] focus:border-transparent"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center px-8 py-4 bg-[#DC3545] text-white rounded-lg hover:bg-[#c82333] transition-colors font-semibold text-lg"
                >
                  Send Message <Send className="w-5 h-5 ml-2" />
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-[#333333] mb-8">Contact Information</h2>
              
              <div className="space-y-8">
                {departments.map((dept, index) => (
                  <div key={index} className="p-6 bg-[#F8F8F8] rounded-xl">
                    <h3 className="text-xl font-semibold text-[#333333] mb-3">{dept.title}</h3>
                    <p className="text-[#666666] mb-4">{dept.description}</p>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <Mail className="w-5 h-5 text-[#007BFF] mr-3" />
                        <a href={`mailto:${dept.email}`} className="text-[#007BFF] hover:underline">
                          {dept.email}
                        </a>
                      </div>
                      <div className="flex items-center">
                        <Phone className="w-5 h-5 text-[#007BFF] mr-3" />
                        <a href={`tel:${dept.phone}`} className="text-[#007BFF] hover:underline">
                          {dept.phone}
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
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
              Quick answers to common questions about working with us.
            </p>
          </div>
          
          <div className="space-y-6">
            <div className="p-6 bg-[#F8F8F8] rounded-xl">
              <h3 className="text-lg font-semibold text-[#333333] mb-3">How quickly can you start my project?</h3>
              <p className="text-[#666666]">We typically begin new projects within 1-2 weeks of contract signing, depending on our current workload and project complexity.</p>
            </div>
            
            <div className="p-6 bg-[#F8F8F8] rounded-xl">
              <h3 className="text-lg font-semibold text-[#333333] mb-3">Do you offer ongoing support after project completion?</h3>
              <p className="text-[#666666]">Yes, we provide ongoing maintenance and support packages to ensure your digital solutions continue to perform optimally.</p>
            </div>
            
            <div className="p-6 bg-[#F8F8F8] rounded-xl">
              <h3 className="text-lg font-semibold text-[#333333] mb-3">What is your typical project timeline?</h3>
              <p className="text-[#666666]">Project timelines vary based on scope and complexity. Simple websites take 4-6 weeks, while comprehensive digital transformations can take 3-6 months.</p>
            </div>
            
            <div className="p-6 bg-[#F8F8F8] rounded-xl">
              <h3 className="text-lg font-semibold text-[#333333] mb-3">Do you work with international clients?</h3>
              <p className="text-[#666666]">Absolutely! We serve clients globally and have experience working across different time zones and cultural contexts.</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Contact;