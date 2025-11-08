import { Mail, Linkedin, Twitter, Instagram, Github } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#0D0D0F] border-t border-white/10 py-12">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Logo and copyright */}
          <div className="text-center md:text-left">
            <h3 className="text-white bg-clip-text text-transparent mb-2">
              Terox Solutions LLC <br />
              30 N Gould ST STE R <br />
              Sheridan 82801 <br />
              Wyoming, USA
            </h3>
            <p className="text-gray-500">
              © 2025 Terox Solutions. All rights reserved.
            </p>
          </div>

          {/* Contact */}
          <div className="flex flex-col items-start gap-1">
            <div className="flex items-center gap-2">
              <Mail className="w-5 h-5 text-gray-400" />
              <span className="text-white">Contact us at:</span>
            </div>
            <a
              href="mailto:info@terox-solutions.com"
              className="text-gray-400 hover:text-blue-400 transition-colors"
            >
              info@terox-solutions.com
            </a>
          </div>


          {/* Social media */}
          <div className="flex gap-4">
            <a
              href="#"
              className="w-10 h-10 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center hover:bg-white/10 hover:border-blue-500 transition-all duration-300 group"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5 text-gray-400 group-hover:text-blue-400" />
            </a>
            <a
              href="#"
              className="w-10 h-10 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center hover:bg-white/10 hover:border-blue-500 transition-all duration-300 group"
              aria-label="Twitter"
            >
              <Twitter className="w-5 h-5 text-gray-400 group-hover:text-blue-400" />
            </a>
            <a
              href="#"
              className="w-10 h-10 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center hover:bg-white/10 hover:border-blue-500 transition-all duration-300 group"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5 text-gray-400 group-hover:text-blue-400" />
            </a>
            <a
              href="#"
              className="w-10 h-10 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center hover:bg-white/10 hover:border-blue-500 transition-all duration-300 group"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5 text-gray-400 group-hover:text-blue-400" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
