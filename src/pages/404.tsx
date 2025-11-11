import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Home, Compass, Ghost } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Footer } from "@/components/Footer";
import { Navigation } from "@/components/Navigation";

export default function NotFound() {
      const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 150]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <>
    <Navigation />
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0D0D0F] py-20">
      {/* Animated gradient background */}
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

      {/* Glass overlay */}
      <div className="absolute inset-0 backdrop-blur-[1px]"></div>

      {/* Main content */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 text-center w-full"
      >
        <AspectRatio ratio={16 / 9}>
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl h-full flex flex-col items-center justify-center p-8 sm:p-12 lg:p-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="flex flex-col items-center justify-center h-full"
            >
              <Ghost className="w-16 h-16 sm:w-20 sm:h-20 text-[rgb(17,166,148)] mb-6 animate-bounce" />

              <motion.h1
                className="text-white text-5xl sm:text-6xl md:text-7xl font-bold mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                404
              </motion.h1>

              <motion.p
                className="text-gray-300 text-lg sm:text-xl mb-6 max-w-xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                Looks like you've wandered off the map.
                <br />
                The page you’re looking for doesn’t exist.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              >
                <Button
                  size="lg"
                  className="bg-[rgb(17,166,148)] hover:bg-[rgb(15,145,130)] text-white px-8 py-5 text-lg shadow-lg shadow-[rgb(17,166,148)]/50 flex items-center gap-2"
                  onClick={() => (window.location.href = "/")}
                >
                  <Home className="w-5 h-5" />
                  Go Home
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </AspectRatio>
      </motion.div>
    </section>
    <Footer />
    </>
  );
}
