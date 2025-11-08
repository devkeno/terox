import { motion } from 'framer-motion';


const technologies = [
  { name: 'Next.js', color: 'from-black to-gray-700' },
  { name: 'React', color: 'from-blue-400 to-blue-600' },
  { name: 'Shopify', color: 'from-green-400 to-green-600' },
  { name: 'WordPress', color: 'from-blue-500 to-blue-700' },
  { name: 'Webflow', color: 'from-[rgb(17,166,148)] to-[rgb(15,145,130)]' },
  { name: 'Strapi', color: 'from-indigo-400 to-indigo-600' },
  { name: 'Sanity', color: 'from-red-400 to-red-600' },
  { name: 'Contentful', color: 'from-yellow-400 to-yellow-600' },
  { name: 'Storyblok', color: 'from-teal-400 to-teal-600' },
  { name: 'Shopware', color: 'from-blue-600 to-blue-800' },
  { name: 'Node.js', color: 'from-green-500 to-green-700' },
  { name: 'ASP.NET', color: 'from-[rgb(17,166,148)] to-[rgb(15,145,130)]' },
];

export function TechStack() {
  return (
    <section id="tech" className="py-24 bg-[#0D0D0F] relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-blue-500/10 to-[rgb(17,166,148)]/10 rounded-full blur-[120px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
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

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{ scale: 1.05 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center hover:bg-white/10 transition-all duration-300 cursor-default"
            >
              <div className={`w-12 h-12 bg-gradient-to-br ${tech.color} rounded-lg mx-auto mb-4 flex items-center justify-center shadow-lg`}>
                <div className="w-6 h-6 bg-white/90 rounded"></div>
              </div>
              <p className="text-white">
                {tech.name}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
