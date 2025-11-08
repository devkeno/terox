import { motion } from 'framer-motion';

import { ImageWithFallback } from './figma/ImageWithFallback';
import { Zap, Users, Lightbulb, TrendingUp } from 'lucide-react';

const values = [
  { icon: Zap, title: 'Fast & Agile', description: 'Quick turnarounds without compromising quality' },
  { icon: Users, title: 'Client-Focused', description: 'Your success is our top priority' },
  { icon: Lightbulb, title: 'Innovation Driven', description: 'Always exploring cutting-edge solutions' },
  { icon: TrendingUp, title: 'Growth Oriented', description: 'Building for scale and long-term success' },
];

export function WhoWeAre() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-4">
            <span className="bg-gradient-to-r from-blue-500 to-[rgb(17,166,148)] text-white px-4 py-2 rounded-full">
              About Us
            </span>
          </div>
          <h2 className="mb-6 text-gray-900 text-3xl font-extrabold sm:text-4xl">
            Who We Are
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Terox Solutions is a full-service digital agency focused on building intelligent online experiences. We combine creativity, data, and technology to help brands grow, automate, and scale.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Image side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <div className="aspect-[4/3]">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwd29ya2luZyUyMHRvZ2V0aGVyfGVufDF8fHx8MTczMDgzNDU5OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Team collaboration"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-[rgb(17,166,148)]/20"></div>
            </div>
            
            {/* Decorative floating element */}
            <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-gradient-to-br from-blue-500 to-[rgb(17,166,148)] rounded-3xl -z-10 blur-2xl opacity-60"></div>
          </motion.div>

          {/* Content side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="mb-4 text-gray-900 text-2xl">
              Building Digital Excellence Since Day One
            </h3>
            <p className="text-gray-600 mb-6">
              Our team of experts brings together cutting-edge development, strategic marketing, and innovative design to deliver solutions that don't just look good, they perform exceptionally.
            </p>
            <p className="text-gray-600">
              We believe in building digital experiences that are not only visually stunning but also drive real business results. Every project is an opportunity to innovate and push boundaries.
            </p>
          </motion.div>
        </div>

        {/* Values Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gradient-to-br from-gray-50 to-blue-50/50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-[rgb(17,166,148)]/30"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-[rgb(17,166,148)] rounded-xl flex items-center justify-center mb-4">
                <value.icon className="w-6 h-6 text-white" />
              </div>
              <h4 className="mb-2 text-gray-900">
                {value.title}
              </h4>
              <p className="text-gray-600">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
