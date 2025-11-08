import { motion } from 'framer-motion';

const partners = [
  { name: 'TechCorp', width: 'w-32' },
  { name: 'InnovateLab', width: 'w-36' },
  { name: 'NextGen Digital', width: 'w-40' },
  { name: 'CloudSync', width: 'w-32' },
  { name: 'DataFlow', width: 'w-36' },
  { name: 'BrandVision', width: 'w-32' },
];

export function Partners() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="mb-4 text-gray-900 text-3xl font-extrabold sm:text-4xl">
            Trusted By Brands Worldwide
          </h2>
          <p className="text-gray-600">
            Partnering with forward-thinking companies to build digital excellence.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-wrap items-center justify-center gap-12 lg:gap-16"
        >
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`${partner.width} h-12 bg-gradient-to-r from-gray-200 to-gray-300 rounded-lg flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 cursor-default`}
            >
              <span className="text-gray-600">{partner.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
