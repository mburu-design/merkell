import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight, Search, Tag } from 'lucide-react';

const Insights = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = ['All', 'Digital Marketing', 'Web Development', 'SEO', 'AI & Automation', 'Business Strategy'];

  const articles = [
    {
      id: 1,
      title: 'The Future of AI in Digital Marketing: Trends to Watch in 2024',
      excerpt: 'Discover how artificial intelligence is revolutionizing digital marketing strategies and what businesses need to know to stay competitive.',
      category: 'AI & Automation',
      author: 'Sarah Chen',
      date: '2024-01-15',
      readTime: '8 min read',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['AI', 'Marketing', 'Automation', 'Trends']
    },
    {
      id: 2,
      title: 'Complete Guide to SEO in 2024: Strategies That Actually Work',
      excerpt: 'Learn the latest SEO techniques and best practices that will help your website rank higher in search engine results.',
      category: 'SEO',
      author: 'Michael Rodriguez',
      date: '2024-01-12',
      readTime: '12 min read',
      image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['SEO', 'Google', 'Rankings', 'Content']
    },
    {
      id: 3,
      title: 'Building High-Converting Landing Pages: A Designer\'s Perspective',
      excerpt: 'Explore the key design principles and psychological triggers that make landing pages convert visitors into customers.',
      category: 'Web Development',
      author: 'Emily Johnson',
      date: '2024-01-10',
      readTime: '6 min read',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Design', 'Conversion', 'UX', 'Landing Pages']
    },
    {
      id: 4,
      title: 'Social Media Marketing Trends: What\'s Working in 2024',
      excerpt: 'Stay ahead of the curve with the latest social media marketing trends and strategies that drive engagement and conversions.',
      category: 'Digital Marketing',
      author: 'David Thompson',
      date: '2024-01-08',
      readTime: '10 min read',
      image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Social Media', 'Marketing', 'Engagement', 'Strategy']
    },
    {
      id: 5,
      title: 'The ROI of Digital Transformation: Measuring Success',
      excerpt: 'Learn how to measure and maximize the return on investment from your digital transformation initiatives.',
      category: 'Business Strategy',
      author: 'Lisa Martinez',
      date: '2024-01-05',
      readTime: '9 min read',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['ROI', 'Digital Transformation', 'Analytics', 'Business']
    },
    {
      id: 6,
      title: 'E-commerce Optimization: Converting Browsers into Buyers',
      excerpt: 'Discover proven strategies to optimize your e-commerce website and increase conversion rates.',
      category: 'Web Development',
      author: 'Robert Kim',
      date: '2024-01-03',
      readTime: '7 min read',
      image: 'https://images.pexels.com/photos/3965545/pexels-photo-3965545.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['E-commerce', 'Conversion', 'Optimization', 'Sales']
    },
    {
      id: 7,
      title: 'Content Marketing Strategy: Creating Content That Converts',
      excerpt: 'Master the art of content marketing with strategies that attract, engage, and convert your target audience.',
      category: 'Digital Marketing',
      author: 'Jennifer Wilson',
      date: '2024-01-01',
      readTime: '11 min read',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Content Marketing', 'Strategy', 'Conversion', 'Audience']
    },
    {
      id: 8,
      title: 'Voice Search Optimization: Preparing for the Future of Search',
      excerpt: 'Learn how to optimize your content for voice search and stay ahead in the evolving search landscape.',
      category: 'SEO',
      author: 'Alex Chen',
      date: '2023-12-28',
      readTime: '8 min read',
      image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Voice Search', 'SEO', 'Future', 'Optimization']
    },
    {
      id: 9,
      title: 'Marketing Automation: Streamlining Your Customer Journey',
      excerpt: 'Discover how marketing automation can help you nurture leads and improve customer experience.',
      category: 'AI & Automation',
      author: 'Maria Garcia',
      date: '2023-12-25',
      readTime: '9 min read',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Automation', 'Customer Journey', 'Lead Nurturing', 'CRM']
    }
  ];

  const filteredArticles = articles.filter(article => {
    const matchesCategory = selectedCategory === 'All' || article.category === selectedCategory;
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const featuredArticle = articles[0];

  return (
    <div className="pt-32">
      {/* Hero Section */}
      <section className="relative py-32 bg-[#000080]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Insights & Resources
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto text-white/90">
              Stay ahead with the latest trends, strategies, and insights in digital marketing and business growth.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <div className="px-4 py-2 bg-[#DC3545] rounded-full">
                <span className="text-white font-medium">Latest Trends</span>
              </div>
              <div className="px-4 py-2 bg-[#007BFF] rounded-full">
                <span className="text-white font-medium">Expert Insights</span>
              </div>
              <div className="px-4 py-2 bg-[#333333] rounded-full">
                <span className="text-white font-medium">Industry News</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#333333] mb-4">Featured Article</h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img 
                src={featuredArticle.image} 
                alt={featuredArticle.title}
                className="w-full h-80 object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute top-6 left-6">
                <span className="px-4 py-2 bg-[#007BFF] text-white rounded-full text-sm font-medium">
                  {featuredArticle.category}
                </span>
              </div>
            </div>
            
            <div>
              <h3 className="text-3xl font-bold text-[#333333] mb-4">{featuredArticle.title}</h3>
              <p className="text-lg text-[#666666] mb-6">{featuredArticle.excerpt}</p>
              
              <div className="flex items-center space-x-6 mb-6 text-sm text-[#666666]">
                <div className="flex items-center">
                  <User className="w-4 h-4 mr-2" />
                  {featuredArticle.author}
                </div>
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-2" />
                  {new Date(featuredArticle.date).toLocaleDateString()}
                </div>
                <span>{featuredArticle.readTime}</span>
              </div>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {featuredArticle.tags.map((tag, index) => (
                  <span key={index} className="px-3 py-1 bg-gray-100 text-[#666666] rounded-full text-sm">
                    {tag}
                  </span>
                ))}
              </div>
              
              <button className="inline-flex items-center px-6 py-3 bg-[#007BFF] text-white rounded-lg hover:bg-[#0056b3] transition-colors font-medium">
                Read Full Article <ArrowRight className="w-4 h-4 ml-2" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-12 bg-[#F8F8F8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#666666] w-5 h-5" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#007BFF] focus:border-transparent"
              />
            </div>
            
            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
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
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.slice(1).map((article) => (
              <article 
                key={article.id} 
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden group"
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={article.image} 
                    alt={article.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-[#000080]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-[#007BFF] text-white text-sm rounded-full">
                      {article.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-[#333333] mb-3 line-clamp-2">{article.title}</h3>
                  <p className="text-[#666666] mb-4 line-clamp-3">{article.excerpt}</p>
                  
                  <div className="flex items-center space-x-4 mb-4 text-sm text-[#666666]">
                    <div className="flex items-center">
                      <User className="w-4 h-4 mr-1" />
                      {article.author}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {new Date(article.date).toLocaleDateString()}
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-1 mb-4">
                    {article.tags.slice(0, 3).map((tag, index) => (
                      <span key={index} className="px-2 py-1 bg-gray-100 text-[#666666] rounded text-xs">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <span className="text-sm text-[#666666]">{article.readTime}</span>
                    <button className="inline-flex items-center text-[#007BFF] font-medium hover:text-[#0056b3] transition-colors">
                      Read More <ArrowRight className="w-4 h-4 ml-1" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
          
          {filteredArticles.length === 0 && (
            <div className="text-center py-12">
              <p className="text-xl text-[#666666]">No articles found matching your criteria.</p>
            </div>
          )}
        </div>
      </section>

      {/* Ready to Transform Section with Glassmorphism */}
      <section className="relative py-20 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="https://images.pexels.com/photos/3965545/pexels-photo-3965545.jpeg?auto=compress&cs=tinysrgb&w=1600" 
            alt="Insights and resources" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#000080]/70 to-[#007BFF]/70"></div>
        </div>
        
        {/* Glass Overlay */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-12 hover:bg-white/20 transition-all duration-500 hover:scale-105 hover:shadow-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Apply These Insights?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Turn knowledge into action. Let us help you implement these strategies for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="px-8 py-4 bg-[#DC3545] text-white rounded-lg hover:bg-[#c82333] transition-all duration-300 font-semibold text-lg hover:scale-105"
              >
                Get Consultation
              </Link>
              <Link 
                to="/services" 
                className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-[#007BFF] transition-all duration-300 font-semibold text-lg"
              >
                Our Solutions
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-[#F8F8F8]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#333333] mb-6">
            Stay Updated with Our Latest Insights
          </h2>
          <p className="text-xl text-[#666666] mb-8">
            Subscribe to our newsletter and get the latest articles, trends, and strategies delivered to your inbox.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#007BFF] focus:border-transparent"
            />
            <button className="px-6 py-3 bg-[#007BFF] text-white rounded-lg hover:bg-[#0056b3] transition-colors font-medium">
              Subscribe
            </button>
          </div>
          
          <p className="text-sm text-[#666666] mt-4">
            No spam, unsubscribe at any time. We respect your privacy.
          </p>
        </div>
      </section>

    </div>
  );
};

export default Insights;