import { motion } from 'framer-motion';
import { Card } from './ui/card';
import { ArrowRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { blogPosts } from '@/../data/Articles';
import Link from 'next/link';

export function Blog() {
  return (
    <section id="blog" className="py-24 bg-gradient-to-br from-blue-50 to-teal-50 relative overflow-hidden">


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
          {blogPosts.slice(0, 3).map((post, index) => (
            <motion.div
              key={post.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card 
                className="bg-white border-gray-200 overflow-hidden hover:shadow-2xl hover:border-[rgb(17,166,148)]/30 transition-all duration-300 group cursor-pointer h-full flex flex-col"
                onClick={() => window.location.href = post.link}
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
                    <Link className="mr-2" href={post.link}>Read More</Link>
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