import { motion } from 'framer-motion';
import { Card } from './ui/card';
import { ArrowRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const blogPosts = [
  {
    title: 'AI in Marketing: The Future is Now',
    description: 'Discover how artificial intelligence is revolutionizing marketing strategies and customer engagement.',
    image: 'https://images.unsplash.com/photo-1697577418970-95d99b5a55cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NjIzNDI0NzR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    date: 'November 1, 2025',
    category: 'AI & Automation',
  },
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
];

export function Blog() {
  return (
    <section id="blog" className="py-24 bg-gradient-to-br from-blue-50 via-white to-teal-50/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-200/40 to-[rgb(17,166,148)]/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-[rgb(17,166,148)]/20 to-blue-200/40 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-4">
            <span className="bg-gradient-to-r from-blue-500 to-[rgb(17,166,148)] text-white px-4 py-2 rounded-full">
              Our Blog
            </span>
          </div>
          <h2 className="mb-4 text-gray-900 text-3xl font-extrabold sm:text-4xl">
            Latest Insights
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Stay ahead with insights on technology, digital marketing, and innovation.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
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
                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[rgb(17,166,148)]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <p className="text-gray-500 mb-3">{post.date}</p>
                  <h3 className="mb-3 text-gray-900 group-hover:text-[rgb(17,166,148)] transition-colors">
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
  );
}