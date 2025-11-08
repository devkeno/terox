import { motion } from 'framer-motion';

import { AspectRatio } from './ui/aspect-ratio';
import { Badge } from './ui/badge';
import { Calendar } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const projects = [
  {
    id: 1,
    title: 'Modern E-Commerce Platform',
    description: 'A cutting-edge e-commerce solution built with Next.js and Shopify, featuring real-time inventory management, AI-powered product recommendations, and seamless checkout experience. Achieved 45% increase in conversion rates.',
    tech: ['Next.js', 'Shopify', 'React', 'Node.js'],
    date: 'October 2024',
    image: 'https://images.unsplash.com/photo-1658953229625-aad99d7603b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzYyMzE3NDQ2fDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 2,
    title: 'Corporate Website Redesign',
    description: 'Complete redesign and development of a corporate website using Webflow and custom integrations. Implemented modern animations, responsive design, and optimized performance resulting in 60% faster load times.',
    tech: ['Webflow', 'WordPress', 'Contentful'],
    date: 'September 2024',
    image: 'https://images.unsplash.com/photo-1658953229625-aad99d7603b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzYyMzE3NDQ2fDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 3,
    title: 'Mobile-First SaaS Dashboard',
    description: 'Developed a comprehensive analytics dashboard with real-time data visualization, custom reporting tools, and mobile-first responsive design. Integrated with multiple APIs for seamless data synchronization.',
    tech: ['React', 'Node.js', 'ASP.NET', 'Sanity'],
    date: 'August 2024',
    image: 'https://images.unsplash.com/photo-1658953229625-aad99d7603b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzYyMzE3NDQ2fDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 4,
    title: 'B2B Marketplace Platform',
    description: 'Built a robust B2B marketplace connecting suppliers with businesses worldwide. Features include automated order processing, multi-currency support, advanced search filters, and vendor management system.',
    tech: ['Shopware', 'Storyblok', 'Next.js'],
    date: 'July 2024',
    image: 'https://images.unsplash.com/photo-1658953229625-aad99d7603b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzYyMzE3NDQ2fDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
];

export function Projects() {
  return (
    <section className="min-h-screen bg-[#0D0D0F] pt-28 pb-16 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-[rgb(17,166,148)]/10 to-blue-600/10"></div>
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[rgb(17,166,148)]/20 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-[120px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl">
            Our <span className="bg-gradient-to-r from-blue-400 to-[rgb(17,166,148)] bg-clip-text text-transparent">Projects</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Explore our portfolio of successful digital solutions that have transformed businesses and delivered exceptional results.
          </p>
        </motion.div>

        {/* Projects List */}
        <div className="space-y-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}

            >
                <div style={{maxHeight:'550px', height:'auto'}} className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl h-full w-full overflow-hidden group hover:border-[rgb(17,166,148)]/50 transition-all duration-300" >
                  <div className="h-full flex flex-col lg:flex-row">
                    {/* Image Section */}
                    <div className="lg:w-2/5 h-48 lg:h-full relative overflow-hidden">
                      <ImageWithFallback
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-[rgb(17,166,148)]/20 to-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>

                    {/* Content Section */}
                    <div className="lg:w-3/5 p-6 sm:p-8 lg:p-12 flex flex-col justify-center">
                      <div className="flex items-center gap-3 mb-4">
                        <Calendar className="w-5 h-5 text-[rgb(17,166,148)]" />
                        <span className="text-gray-400">{project.date}</span>
                      </div>
                      
                      <h2 className="text-white mb-4 text-2xl sm:text-3xl lg:text-4xl">
                        {project.title}
                      </h2>
                      
                      <p className="text-gray-300 mb-6 text-sm sm:text-base lg:text-lg leading-relaxed">
                        {project.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech) => (
                          <Badge
                            key={tech}
                            variant="outline"
                            className="border-[rgb(17,166,148)]/30 text-[rgb(17,166,148)] bg-[rgb(17,166,148)]/10 hover:bg-[rgb(17,166,148)]/20 px-3 py-1"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
