import { motion } from 'framer-motion';
import Image from 'next/image';

const technologies = [
  { name: 'AI Development', color: '/assets/AI.png' },
  { name: 'Next.js', color: '/assets/Next.js.svg' },
  { name: 'React', color: '/assets/React.svg' },
  { name: 'Shopify', color: '/assets/Shopify2.png' },
  { name: 'WordPress', color: '/assets/WordPress.svg' },
  { name: 'Webflow', color: '/assets/Webflow.svg' },
  { name: 'Strapi', color: '/assets/Strapi.webp' },
  { name: 'Contentful', color: '/assets/Contentful.png' },
  { name: 'Storybook', color: '/assets/Storybook.svg' },
  { name: 'Shopware', color: '/assets/Shopware.svg' },
  { name: 'Node.js', color: '/assets/Node.js.svg' },
  { name: 'Sanity', color: '/assets/Sanity.svg' },
];

export function TechStack() {
  // Variants for staggered child animation
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <section id="tech" className="py-24 bg-[#0D0D0F] relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-blue-500/10 to-[rgb(17,166,148)]/10 rounded-full blur-[120px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Section title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="mb-4 text-white text-3xl font-extrabold sm:text-4xl">
            Tech Stack & Expertise
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            We build with tools that power the web's future.
          </p>
        </motion.div>

        {/* Tech grid with staggered animation */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          {technologies.map((tech) => (
            <motion.div
              key={tech.name}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center hover:bg-white/10 transition-all duration-300 cursor-default"
            >
              <div className="w-12 h-12 bg-gradient-to-br rounded-lg mx-auto mb-4 flex items-center justify-center shadow-lg">
                <Image
                  src={tech.color}
                  alt={tech.name}
                  width={44}
                  height={44}
                  placeholder="blur"
                  blurDataURL={tech.color} // Optional, uses same image for placeholder
                />
              </div>
              <p className="text-white">{tech.name}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
