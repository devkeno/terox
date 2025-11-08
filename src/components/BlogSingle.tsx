import { motion } from 'framer-motion';

import { Calendar, Clock, User, ArrowRight, ArrowLeft } from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';

// Mock blog data - in real app this would come from props/API
const blogPost = {
  title: 'AI in Marketing: The Future is Now',
  summary: 'Discover how artificial intelligence is revolutionizing marketing strategies, customer engagement, and the way brands connect with their audiences in the digital age.',
  category: 'AI & Automation',
  date: 'November 1, 2025',
  readTime: '8 min read',
  author: 'Sarah Johnson',
  image: 'https://images.unsplash.com/photo-1697577418970-95d99b5a55cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NjIzNDI0NzR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
};

const relatedPosts = [
  {
    title: 'Building with Headless CMS',
    description: 'Learn why headless CMS architecture is becoming the standard for modern web development.',
    image: 'https://images.unsplash.com/photo-1676792519027-7c42006d7b4a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWIlMjBkZXZlbG9wbWVudHxlbnwxfHx8fDE3NjIzMDEyMzd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    date: 'October 28, 2025',
    category: 'Development',
  },
  {
    title: 'The Future of Automation',
    description: 'Explore how workflow automation is transforming businesses and freeing up time for what matters.',
    image: 'https://images.unsplash.com/photo-1761195696590-3490ea770aa1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdXRvbWF0aW9uJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NjIzNjM5MDd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    date: 'October 25, 2025',
    category: 'Technology',
  },
  {
    title: 'Optimizing User Experience',
    description: 'Essential UX principles that drive engagement and conversions in modern web design.',
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1c2VyJTIwZXhwZXJpZW5jZSUyMGRlc2lnbnxlbnwxfHx8fDE3MzA4MzQ1OTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    date: 'October 20, 2025',
    category: 'Design',
  },
];

export function BlogSingle() {
  const handleBackToBlog = () => {
    window.location.hash = '#blog';
  };

  const handleContactClick = () => {
    window.location.hash = '#contact';
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Title and Summary */}
      <section className="relative bg-[#0D0D0F] py-24 overflow-hidden">
        {/* Background gradient effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-transparent to-[rgb(17,166,148)]/20"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[rgb(17,166,148)]/30 rounded-full blur-3xl"></div>

        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
          {/* Back button */}
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            onClick={handleBackToBlog}
            className="flex items-center gap-2 text-gray-400 hover:text-[rgb(17,166,148)] transition-colors mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Blog
          </motion.button>

          {/* Category badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-6"
          >
            <span className="bg-gradient-to-r from-blue-500 to-[rgb(17,166,148)] text-white px-4 py-2 rounded-full">
              {blogPost.category}
            </span>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-6 text-white"
          >
            {blogPost.title}
          </motion.h1>

          {/* Summary */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-gray-300 mb-8"
          >
            {blogPost.summary}
          </motion.p>

          {/* Meta information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap items-center gap-6 text-gray-400"
          >
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span>{blogPost.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>{blogPost.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>{blogPost.readTime}</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="py-12 bg-gray-50">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12"
        >
          <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl">
            <ImageWithFallback
              src={blogPost.image}
              alt={blogPost.title}
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </section>

      {/* Blog Content */}
      <section className="py-16 bg-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12"
        >
          <article className="prose prose-lg max-w-none">
            <h2 className="text-gray-900">The Evolution of AI in Marketing</h2>
            <p className="text-gray-600">
              Artificial Intelligence has transformed from a futuristic concept to a practical tool that's reshaping how businesses approach marketing. Today's AI-powered solutions enable marketers to understand customer behavior, predict trends, and personalize experiences at a scale that was previously impossible.
            </p>

            <h3 className="text-gray-900">Understanding AI's Impact on Customer Engagement</h3>
            <p className="text-gray-600">
              Modern AI systems analyze millions of data points to create detailed customer profiles and predict preferences with remarkable accuracy. This allows brands to deliver personalized content, recommendations, and experiences that resonate with individual users. From chatbots that provide instant customer support to recommendation engines that suggest relevant products, AI is enhancing every touchpoint of the customer journey.
            </p>

            <h3 className="text-gray-900">Key Benefits of AI in Marketing</h3>
            <ul className="text-gray-600">
              <li><strong>Personalization at Scale:</strong> AI enables brands to deliver unique experiences to millions of users simultaneously.</li>
              <li><strong>Predictive Analytics:</strong> Machine learning models can forecast trends and customer behavior with increasing accuracy.</li>
              <li><strong>Automated Content Creation:</strong> AI tools can generate copy, images, and even video content tailored to specific audiences.</li>
              <li><strong>Enhanced Customer Service:</strong> Intelligent chatbots and virtual assistants provide 24/7 support and instant responses.</li>
              <li><strong>Optimized Ad Targeting:</strong> AI algorithms improve ad performance by identifying the most relevant audiences and optimal timing.</li>
            </ul>

            <h3 className="text-gray-900">Real-World Applications</h3>
            <p className="text-gray-600">
              Leading brands are already leveraging AI to revolutionize their marketing strategies. E-commerce platforms use recommendation engines to suggest products based on browsing history and purchase patterns. Social media companies employ AI to optimize content feeds and ad placements. Email marketing platforms utilize machine learning to determine the best send times and subject lines for maximum engagement.
            </p>

            <h3 className="text-gray-900">The Future of AI in Marketing</h3>
            <p className="text-gray-600">
              As AI technology continues to evolve, we can expect even more sophisticated applications. Voice-activated marketing, augmented reality experiences, and predictive customer service are just a few examples of what's on the horizon. The key for businesses is to embrace these technologies while maintaining the human touch that builds genuine connections with customers.
            </p>

            <p className="text-gray-600">
              The integration of AI in marketing isn't about replacing human creativity and intuition—it's about augmenting these qualities with data-driven insights and automation capabilities. Businesses that successfully blend AI technology with human expertise will be best positioned to thrive in the evolving digital landscape.
            </p>
          </article>
        </motion.div>
      </section>

      {/* Related Posts */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <h2 className="text-gray-900 text-center mb-4">
              Related Articles
            </h2>
            <p className="text-gray-600 text-center max-w-2xl mx-auto">
              Continue exploring insights on technology and digital innovation
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {relatedPosts.map((post, index) => (
              <motion.div
                key={post.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card 
                  className="bg-white border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 group cursor-pointer h-full flex flex-col"
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                >
                  <div className="relative overflow-hidden aspect-video">
                    <ImageWithFallback
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-gradient-to-r from-blue-500 to-[rgb(17,166,148)] text-white px-3 py-1 rounded-full">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <p className="text-gray-500 mb-3">{post.date}</p>
                    <h3 className="mb-3 text-gray-900">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-6 flex-1">
                      {post.description}
                    </p>
                    <div className="flex items-center text-blue-500 group-hover:text-[rgb(17,166,148)] transition-colors">
                      <span className="mr-2">Read More</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
    <section className="relative bg-[#0D0D0F] py-24 overflow-hidden">
        {/* Background gradient effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-transparent to-[rgb(17,166,148)]/20"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[rgb(17,166,148)]/30 rounded-full blur-3xl"></div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center relative z-10"
        >
          <h2 className="mb-6 text-white">
            Ready to Transform Your Digital Presence?
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss how AI and cutting-edge technology can elevate your brand and drive real business results. Our team is ready to bring your vision to life.
          </p>
          <Button
            onClick={handleContactClick}
            className="bg-gradient-to-r from-blue-500 to-[rgb(17,166,148)] hover:from-blue-600 hover:to-[rgb(17,166,148)]/90 text-white px-8 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
          >
            Get in Touch
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
      </section>
    </div>
  );
}