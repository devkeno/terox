import { motion } from 'framer-motion';
import { Card } from './ui/card';
import { ArrowRight, Search, Calendar, Tag } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useState } from 'react';
import {blogPosts, featuredPost, categories} from '@/../data/Articles';
import Link from 'next/link';

export function BlogLanding() {
  const [selectedCategory, setSelectedCategory] = useState('All Posts');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'All Posts' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          post.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-blue-500">
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-blue-600 to-blue-700 relative overflow-hidden">
        
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <div className="inline-block mb-4">
              <span className="bg-gradient-to-r from-blue-500 to-[rgb(17,166,148)] text-white px-4 py-2 rounded-full">
                Our Blog
              </span>
            </div>
            <h1 className="mb-6 text-white">
              Insights & Resources
            </h1>
            <p className="text-white/90 max-w-2xl mx-auto mb-8">
              Stay ahead with insights on technology, digital marketing, automation, and innovation. Learn from our experts and discover what's shaping the digital landscape.
            </p>

            {/* Search Bar */}
            <div className="max-w-xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 rounded-xl border-2 border-white/20 bg-white/10 backdrop-blur-sm text-white placeholder-white/70 focus:border-white/40 focus:outline-none transition-colors"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="mb-6">
              <h2 className="text-gray-900">Featured Article</h2>
            </div>
            <Card 
              className="bg-white border-gray-200 overflow-hidden hover:shadow-2xl hover:border-[rgb(17,166,148)]/30 transition-all duration-300 group cursor-pointer"
              onClick={() => window.location.hash = '#blog-single'}
            >
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="relative overflow-hidden aspect-[16/10] lg:aspect-auto">
                  <ImageWithFallback
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent lg:hidden"></div>
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="bg-gradient-to-r from-blue-500 to-[rgb(17,166,148)] text-white px-3 py-1 rounded-full">
                      {featuredPost.category}
                    </span>
                    <span className="text-gray-500 flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      {featuredPost.date}
                    </span>
                  </div>
                  <h3 className="mb-4 text-gray-900 group-hover:text-[rgb(17,166,148)] transition-colors">
                    {featuredPost.title}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {featuredPost.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-500">{featuredPost.readTime}</span>
                    <div className="flex items-center text-blue-500 group-hover:text-[rgb(17,166,148)] transition-colors">
                      <Link className="mr-2" href={featuredPost.link}>Read Article</Link>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-12">
            {/* Main Blog Posts */}
            <div className="lg:col-span-8">
              {/* Category Filter */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="mb-8 flex flex-wrap gap-3"
              >
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full transition-all duration-300 ${
                      selectedCategory === category
                        ? 'bg-gradient-to-r from-blue-500 to-[rgb(17,166,148)] text-white shadow-lg'
                        : 'bg-white text-gray-700 border-2 border-gray-200 hover:border-[rgb(17,166,148)]/30'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </motion.div>

              {/* Blog Posts Grid */}
              <div className="grid sm:grid-cols-2 gap-8">
                {filteredPosts.map((post, index) => (
                  <motion.div
                    key={post.title}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  >
                    <Card 
                      className="bg-white border-gray-200 overflow-hidden hover:shadow-2xl hover:border-[rgb(17,166,148)]/30 transition-all duration-300 group cursor-pointer h-full flex flex-col"
                      onClick={() => window.location.hash = '#blog-single'}
                    >
                      <div className="relative overflow-hidden aspect-video">
                        <ImageWithFallback
                          src={post.image}
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute top-4 left-4">
                          <span className="bg-gradient-to-r from-blue-500 to-[rgb(17,166,148)] text-white px-3 py-1 rounded-full shadow-lg">
                            {post.category}
                          </span>
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-[rgb(17,166,148)]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>
                      <div className="p-6 flex-1 flex flex-col">
                        <div className="flex items-center gap-3 text-gray-500 mb-3">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {post.date}
                          </span>
                          <span>•</span>
                          <span>{post.readTime}</span>
                        </div>
                        <h3 className="mb-3 text-gray-900 group-hover:text-[rgb(17,166,148)] transition-colors">
                          {post.title}
                        </h3>
                        <p className="text-gray-600 mb-6 flex-1">
                          {post.description}
                        </p>
                        <div className="flex items-center text-blue-500 group-hover:text-[rgb(17,166,148)] transition-colors">
                          <Link className="mr-2" href={post.link}>Read More</Link>
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>

              {/* Load More Button */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="mt-12 text-center"
              >
                <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-[rgb(17,166,148)] text-white rounded-xl hover:shadow-xl transition-all duration-300 hover:scale-105">
                  Load More Articles
                </button>
              </motion.div>
            </div>

            {/* Sidebar */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="lg:col-span-4"
            >
              <div className="sticky top-24 space-y-8">
          

                {/* Categories */}
                <Card className="p-6 bg-white border-gray-200">
                  <h4 className="mb-4 text-gray-900 flex items-center gap-2">
                    <Tag className="w-5 h-5" />
                    Categories
                  </h4>
                  <div className="space-y-2">
                    {categories.filter(cat => cat !== 'All Posts').map((category) => (
                      <button
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        className={`w-full text-left px-4 py-2 rounded-lg transition-all duration-300 ${
                          selectedCategory === category
                            ? 'bg-gradient-to-r from-blue-500 to-[rgb(17,166,148)] text-white'
                            : 'text-gray-700 hover:bg-gray-50'
                        }`}
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                </Card>


              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}