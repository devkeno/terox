import { motion } from 'framer-motion';

import { Code, Database, ShoppingCart, Sparkles, TrendingUp, Palette } from 'lucide-react';
import { Card } from './ui/card';

const services = [
  {
    icon: Code,
    title: 'Web Design & Development',
    description: 'Custom, fast, SEO-optimized websites built with modern frameworks and best practices.',
  },
  {
    icon: Database,
    title: 'Headless CMS Solutions',
    description: 'Scalable content architecture using modern stacks like Next.js, Strapi, Sanity, and more.',
  },
  {
    icon: ShoppingCart,
    title: 'E-Commerce & Shopify',
    description: 'Tailored eCommerce experiences that convert visitors into loyal customers.',
  },
  {
    icon: Sparkles,
    title: 'AI & Automation',
    description: 'Workflow automation, AI chatbots, and smart integrations that save time and boost efficiency.',
  },
  {
    icon: TrendingUp,
    title: 'Digital Marketing',
    description: 'SEO, Google Ads, analytics, and social media strategies that drive real results.',
  },
  {
    icon: Palette,
    title: 'Branding & Strategy',
    description: 'Visual identity, messaging, and positioning that makes your brand unforgettable.',
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 bg-[#0D0D0F] relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[rgb(17,166,148)]/10 rounded-full blur-[120px]"></div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="mb-4 text-white text-3xl font-extrabold sm:text-4xl">
            Our Services
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Comprehensive digital solutions designed to transform your business and accelerate growth.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="bg-white/5 backdrop-blur-sm border-white/10 p-8 hover:bg-white/10 transition-all duration-300 group h-full">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-[rgb(17,166,148)] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="mb-3 text-white">
                  {service.title}
                </h3>
                <p className="text-gray-400">
                  {service.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
