import { motion, useScroll, useTransform } from 'framer-motion';
import { Button } from './ui/button';
import { ArrowRight, Sparkles, Zap, Target } from 'lucide-react';
import { AspectRatio } from './ui/aspect-ratio';

export function Hero() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 150]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0D0D0F] pt-20 py-12">
      {/* Animated gradient background with parallax */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-[rgb(17,166,148)]/20 to-blue-600/20 animate-gradient"></div>
        <motion.div
          style={{ y: y1 }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/30 rounded-full blur-[120px] animate-pulse"
        ></motion.div>
        <motion.div
          style={{ y: y2 }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[rgb(17,166,148)]/30 rounded-full blur-[120px] animate-pulse delay-1000"
        ></motion.div>
      </div>

      {/* Glass morphism overlay */}
      <div className="absolute inset-0 backdrop-blur-[1px]"></div>

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center w-full"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full"
        >
          {/* Glass card container with 16:9 aspect ratio */}
          <AspectRatio ratio={16 / 9}>
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl h-full w-full flex flex-col items-center justify-center p-6 sm:p-8 lg:p-12 xl:p-16 overflow-auto">
              <div className="flex flex-col items-center justify-center h-full w-full">
                <motion.h1
                  className="mb-3 sm:mb-4 lg:mb-6 text-white tracking-tight text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  We Build Digital Solutions <br />
                  <span className="bg-gradient-to-r from-blue-400 via-[rgb(17,166,148)] to-blue-400 bg-clip-text text-transparent">
                    That Work Smarter.
                  </span>
                </motion.h1>

                <motion.p
                  className="text-gray-300 text-sm sm:text-base md:text-lg lg:text-xl max-w-4xl mx-auto mb-3 sm:mb-4 lg:mb-6 leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  From design to automation. Terox Solutions helps your business grow through modern tech and creative marketing. We transform ideas into powerful digital experiences that drive real results.
                </motion.p>

                <motion.p
                  className="text-gray-400 text-xs sm:text-sm md:text-base max-w-3xl mx-auto mb-4 sm:mb-6 lg:mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                >
                  Specializing in cutting-edge web development, AI-powered automation, and data-driven marketing strategies that scale with your ambitions.
                </motion.p>

                {/* Feature highlights */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="grid grid-cols-3 gap-3 sm:gap-4 lg:gap-6 mb-4 sm:mb-6 lg:mb-8 max-w-3xl mx-auto"
                >
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-2 text-gray-300">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-blue-500 to-[rgb(17,166,148)] rounded-lg flex items-center justify-center flex-shrink-0">
                      <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                    </div>
                    <span className="text-xs sm:text-sm lg:text-base">AI-Powered</span>
                  </div>
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-2 text-gray-300">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-blue-500 to-[rgb(17,166,148)] rounded-lg flex items-center justify-center flex-shrink-0">
                      <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                    </div>
                    <span className="text-xs sm:text-sm lg:text-base">Lightning Fast</span>
                  </div>
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-2 text-gray-300">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-blue-500 to-[rgb(17,166,148)] rounded-lg flex items-center justify-center flex-shrink-0">
                      <Target className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                    </div>
                    <span className="text-xs sm:text-sm lg:text-base">Results-Focused</span>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.7 }}
                  className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center"
                >
                  <Button
                    size="lg"
                    className="bg-[rgb(17,166,148)] hover:bg-[rgb(15,145,130)] text-white px-6 sm:px-8 lg:px-10 py-4 sm:py-5 lg:py-6 group shadow-lg shadow-[rgb(17,166,148)]/50 text-sm sm:text-base lg:text-lg"
                  >
                    Let's Build Together
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform w-4 h-4 sm:w-5 sm:h-5" />
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="bg-transparent border-2 border-[rgb(17,166,148)] text-[rgb(17,166,148)] hover:bg-[rgb(17,166,148)]/10 hover:text-white px-6 sm:px-8 lg:px-10 py-4 sm:py-5 lg:py-6 backdrop-blur-sm text-sm sm:text-base lg:text-lg transition-colors duration-300"
                  >
                    View Our Work
                  </Button>
                </motion.div>
              </div>
            </div>
          </AspectRatio>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-1.5 bg-white/50 rounded-full"></div>
        </div>
      </motion.div>
    </section>
  );
}
