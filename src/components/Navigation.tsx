'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/#about' },
  { name: 'Services', href: '/#services' },
  { name: 'Projects', href: '/projects' },
  { name: 'Tech Stack', href: '/#tech' },
  { name: 'Testimonials', href: '/#testimonials' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/#contact' },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const router = useRouter();

  // Detect scroll for navbar background
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigation = (href: string) => {
    setIsMobileMenuOpen(false);

    if (href.startsWith('/#')) {
      // Navigacija unutar iste stranice
      const id = href.replace('/#', '#');
      const element = document.querySelector(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      } else {
        // Ako si na drugoj stranici
        router.push('/');
        setTimeout(() => {
          const section = document.querySelector(id);
          if (section) section.scrollIntoView({ behavior: 'smooth' });
        }, 400);
      }
    } else {
      // Navigacija između stranica
      router.push(href);
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0D0D0F]/95 backdrop-blur-xl border-b border-white/10 shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link
            href="/"
            onClick={(e) => {
              e.preventDefault();
              handleNavigation('/#home');
            }}
            className="text-2xl text-white bg-clip-text text-transparent font-semibold"
          >
            Terox Solutions
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavigation(link.href)}
                className="text-gray-300 hover:text-white transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-[rgb(17,166,148)] group-hover:w-full transition-all duration-300"></span>
              </button>
            ))}
            <Button
              size="sm"
              className="bg-[rgb(17,166,148)] hover:bg-[rgb(15,145,130)] text-white"
              onClick={() => handleNavigation('/#contact')}
            >
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-white p-2"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="lg:hidden bg-[#0D0D0F]/98 backdrop-blur-xl border-t border-white/10"
        >
          <div className="px-6 py-4 space-y-4">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavigation(link.href)}
                className="block w-full text-left text-gray-300 hover:text-white transition-colors py-2"
              >
                {link.name}
              </button>
            ))}
            <Button
              size="sm"
              className="w-full bg-[rgb(17,166,148)] hover:bg-[rgb(15,145,130)] text-white"
              onClick={() => handleNavigation('/#booking')}
            >
              Get Started
            </Button>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
