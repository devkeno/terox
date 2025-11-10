"use client";
import { motion } from "framer-motion";
import { Calendar, Clock, User, ArrowRight, ArrowLeft } from "lucide-react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { blogPosts } from "@/../data/Articles";
import SeoHead from "./SEO";

export function BlogSingle3() {
  const blogPost = blogPosts[2]; // Featured post

  const handleBackToBlog = () => {
    window.location.hash = `${blogPost.link}`;
  };

  const handleContactClick = () => {
    window.location.hash = "/#contact";
  };

  return (
    <div className="min-h-screen bg-white">
      <SeoHead
        title="E-commerce Trends 2025 — AI, Sustainability & the Future of Online Shopping"
        description="Explore the top e-commerce trends of 2025 — from AI-driven personalization and sustainability to social commerce, omnichannel experiences, and next-gen logistics."
        url="https://terox-solutions.com/blog/ecommerce-trends-2025"
        image="https://terox-solutions.com/_assets/blog/ecommerce-trends-2025.jpg"
        type="article"
        publishedTime="2025-11-10T10:00:00+01:00"
        modifiedTime="2025-11-10T10:00:00+01:00"
        author="Terox Solutions"
        canonical="https://terox-solutions.com/blog/ecommerce-trends-2025"
        noindex={false}
      />

      {/* HERO SECTION */}
      <section className="relative bg-[#0D0D0F] py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-transparent to-[rgb(17,166,148)]/20"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[rgb(17,166,148)]/30 rounded-full blur-3xl"></div>

        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
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

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-6 text-white text-4xl font-bold"
          >
            {blogPost.title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-gray-300 mb-8 text-lg"
          >
            {blogPost.description}
          </motion.p>

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

      {/* FEATURED IMAGE */}
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

      {/* BLOG CONTENT */}
      <section className="py-16 bg-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12"
        >
          <article className="prose lg:prose-lg max-w-none text-gray-700">


            <h2 className="text-2xl font-semibold mt-10 mb-4">Introduction</h2>
            <p>
              The e-commerce landscape continues to evolve rapidly. With new technologies, shifting consumer
              expectations, and growing competition, online retailers in 2025 must stay agile and innovative.
              From AI-driven personalization to sustainability and social commerce, here are the key trends
              shaping the future of online shopping.
            </p>

            <h2 className="text-2xl font-semibold mt-10 mb-4">1. AI-Driven Personalization</h2>
            <p>
              Artificial intelligence is no longer a luxury—it’s a necessity for modern online retailers. In
              2025, AI tools are powering product recommendations, personalized marketing campaigns, and
              predictive inventory management. E-commerce platforms are learning from customer behavior in
              real time to deliver tailor-made experiences that drive conversions.
            </p>
            <ul className="list-disc pl-6">
              <li>Dynamic product recommendations based on browsing history</li>
              <li>Smart chatbots that handle complex queries</li>
              <li>Personalized email campaigns with adaptive content</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-10 mb-4">2. Sustainability and Ethical Shopping</h2>
            <p>
              Consumers in 2025 are more environmentally conscious than ever. Shoppers now expect brands to
              prioritize ethical sourcing, eco-friendly packaging, and transparent supply chains. Businesses
              that demonstrate real commitment to sustainability will gain customer trust and long-term loyalty.
            </p>
            <p>
              Many retailers are introducing carbon-neutral shipping options and using AI to optimize
              logistics, reducing waste and emissions. Sustainability has moved from a “nice-to-have” to a
              business requirement.
            </p>

            <h2 className="text-2xl font-semibold mt-10 mb-4">3. Social Commerce and Live Shopping</h2>
            <p>
              Platforms like TikTok, Instagram, and YouTube are becoming major sales channels. Social commerce
              allows users to discover, review, and purchase products without leaving the app. Live shopping
              events—where influencers or brand ambassadors present products in real time—are driving high
              engagement and instant sales.
            </p>
            <ul className="list-disc pl-6">
              <li>Seamless checkout integrations on social platforms</li>
              <li>Interactive product demos and influencer-hosted live streams</li>
              <li>Community-driven marketing and authentic storytelling</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-10 mb-4">4. Subscription and Loyalty Models</h2>
            <p>
              Subscription-based e-commerce continues to grow. From curated monthly boxes to automatic
              reorders for household items, these models offer predictable revenue for brands and convenience
              for customers. In parallel, loyalty programs are evolving with gamification and rewards that go
              beyond discounts.
            </p>
            <p>
              Customers now expect personalized loyalty experiences—such as early access to new products,
              birthday perks, or points for social engagement.
            </p>

            <h2 className="text-2xl font-semibold mt-10 mb-4">5. Omnichannel and Hybrid Experiences</h2>
            <p>
              The line between online and offline shopping continues to blur. Click-and-collect options,
              virtual try-ons, and AR-powered product previews are making e-commerce more immersive. Retailers
              who integrate digital and physical experiences provide the seamless convenience that customers
              crave.
            </p>
            <ul className="list-disc pl-6">
              <li>AR tools for furniture and fashion visualization</li>
              <li>In-store kiosks for online order pickups</li>
              <li>Unified customer data across all sales channels</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-10 mb-4">6. Faster, Smarter Logistics</h2>
            <p>
              Delivery expectations keep rising. In 2025, consumers want same-day or even one-hour deliveries.
              To meet these demands, retailers are investing in AI-driven inventory systems, local fulfillment
              hubs, and drone delivery pilots.
            </p>
            <p>
              Automation in logistics not only speeds up operations but also reduces errors and costs—key for
              maintaining margins in a competitive marketplace.
            </p>

            <h2 className="text-2xl font-semibold mt-10 mb-4">7. The Rise of Voice and Visual Search</h2>
            <p>
              With the widespread use of smart speakers and visual recognition technology, voice and visual
              search are becoming integral to online shopping. Customers can now say or show what they want—and
              get instant, accurate results.
            </p>
            <p>
              Optimizing product data for these search methods is crucial for visibility and conversions in the
              next generation of e-commerce.
            </p>

            <h2 className="text-2xl font-semibold mt-10 mb-4">Conclusion</h2>
            <p>
              The e-commerce industry in 2025 is fast, intelligent, and customer-centric. Retailers that
              embrace AI, sustainability, and innovative shopping experiences will lead the market. The brands
              that thrive won’t just sell products—they’ll build lasting, trusted relationships with their
              customers through authenticity and innovation.
            </p>
          </article>



        </motion.div>
      </section>

      {/* RELATED POSTS */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <h2 className="text-gray-900 text-center mb-4">
            Related Articles
          </h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
            Continue exploring insights on technology and digital innovation
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {blogPosts.slice(1, 4).map((post, index) => (
              <motion.div
                key={post.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="bg-white border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 group cursor-pointer h-full flex flex-col">
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
                    <h3 className="mb-3 text-gray-900">{post.title}</h3>
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

      {/* CTA */}
      <section className="relative bg-[#0D0D0F] py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-transparent to-[rgb(17,166,148)]/20"></div>
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
            Let’s discuss how AI and cutting-edge technology can elevate your
            brand and drive real business results.
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
