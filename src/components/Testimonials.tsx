import { motion } from 'framer-motion';

import { Star, Quote } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const testimonials = [
  {
    name: 'Sarah Mitchell',
    position: 'CEO, TechFlow Inc.',
    image: 'https://images.unsplash.com/photo-1585554414787-09b821c321c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHdvbWFuJTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc2MjMwOTE1M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    rating: 5,
    text: 'Terox Solutions transformed our digital presence completely. Their expertise in headless CMS and automation saved us countless hours and dramatically improved our conversion rates.',
  },
  {
    name: 'Marcus Chen',
    position: 'Founder, InnovateLab',
    image: 'https://images.unsplash.com/photo-1425421669292-0c3da3b8f529?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMHBlcnNvbnxlbnwxfHx8fDE3NjIyNjYwNjR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    rating: 5,
    text: 'Working with Terox has been an absolute pleasure. They delivered a stunning e-commerce platform that exceeded our expectations. Our business grew 300% in just six months.',
  },
  {
    name: 'Emily Rodriguez',
    position: 'Marketing Director, BrandVision',
    image: 'https://images.unsplash.com/photo-1425421669292-0c3da3b8f529?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBleGVjdXRpdmV8ZW58MXx8fHwxNzYyMzcxNTg5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    rating: 5,
    text: 'The team at Terox brought our vision to life with incredible precision. Their AI-powered solutions have revolutionized how we engage with our customers.',
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="mb-4 text-gray-900 text-3xl font-extrabold sm:text-4xl">
            What Our Clients Say
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it, hear from businesses we've helped transform.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Featured large testimonial on left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-blue-500 to-[rgb(17,166,148)] rounded-3xl p-8 lg:p-10 text-white h-full flex flex-col justify-between shadow-2xl">
              {/* Large quote icon */}
              <div className="mb-6">
                <Quote className="w-16 h-16 text-white/30" />
              </div>

              {/* Testimonial text */}
              <p className="mb-8 flex-1">
                {testimonials[0].text}
              </p>

              {/* Rating */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonials[0].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-white text-white" />
                ))}
              </div>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-white/30">
                  <ImageWithFallback
                    src={testimonials[0].image}
                    alt={testimonials[0].name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-white">
                    {testimonials[0].name}
                  </h4>
                  <p className="text-white/80">
                    {testimonials[0].position}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Two smaller testimonials stacked on right */}
          <div className="flex flex-col gap-8">
            {testimonials.slice(1).map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-white border-2 border-gray-100 rounded-2xl p-6 lg:p-8 hover:border-[rgb(17,166,148)]/30 hover:shadow-xl transition-all duration-300 flex-1"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-gray-200 flex-shrink-0">
                    <ImageWithFallback
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-gray-900">
                      {testimonial.name}
                    </h4>
                    <p className="text-gray-600">
                      {testimonial.position}
                    </p>
                    {/* Rating */}
                    <div className="flex gap-1 mt-2">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Testimonial text */}
                <p className="text-gray-700">
                  "{testimonial.text}"
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
