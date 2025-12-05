// src/components/Footer.jsx
import React from "react";
import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Twitter,
  Mail,
  ArrowUp,
  Code2,
  Heart,
} from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const socialLinks = [
    {
      name: "GitHub",
      url: "#",
      icon: Github,
      color: "hover:text-gray-900 dark:hover:text-gray-100",
    },
    {
      name: "LinkedIn",
      url: "#",
      icon: Linkedin,
      color: "hover:text-blue-500",
    },
    {
      name: "Twitter",
      url: "#",
      icon: Twitter,
      color: "hover:text-sky-400",
    },
    {
      name: "Email",
      url: "#",
      icon: Mail,
      color: "#",
    },
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900 border-t border-gray-200 dark:border-gray-800 overflow-hidden">
      {/* Background animation overlay */}
      <div className="absolute inset-0 opacity-[0.07] bg-[url('/grid.svg')] bg-center bg-repeat" />

      <div className="relative container mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16">
          {/* Branding */}
          <div className="space-y-4">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-3"
            >
              <div className="p-2 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg">
                <Code2 className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-500 bg-clip-text text-transparent">
                Sohail Sardar
              </h2>
            </motion.div>

            <p className="text-gray-600 dark:text-gray-400 max-w-md leading-relaxed">
              Full Stack Developer crafting high-quality web solutions that
              merge performance, scalability, and beautiful design. Passionate
              about clean code, elegant architectures, and problem solving.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {[
                { label: "About", href: "#about" },
                { label: "Projects", href: "#projects" },
                { label: "Skills", href: "#skills" },
                { label: "Contact", href: "#contact" },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-cyan-400 transition-all duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">
              Connect With Me
            </h3>
            <div className="flex flex-wrap gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className={`p-3 rounded-xl backdrop-blur-md border border-gray-200/60 dark:border-gray-700/40 shadow-sm hover:shadow-lg bg-white/70 dark:bg-gray-800/60 transition-all duration-300 ${social.color}`}
                  whileHover={{ scale: 1.12, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 dark:border-gray-800 mt-12 mb-6"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between text-center md:text-left gap-4">
          <div className="flex items-center justify-center md:justify-start space-x-2 text-gray-600 dark:text-gray-400 text-sm">
            <span>© {currentYear} Sohail Sardar. All rights reserved.</span>
            <span className="flex items-center space-x-1">
              <span>Made with</span>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1.2, repeat: Infinity }}
              >
                <Heart className="w-4 h-4 text-red-500" />
              </motion.div>
              <span>& code ☕</span>
            </span>
          </div>

          <motion.button
            onClick={scrollToTop}
            className="flex items-center space-x-2 px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 hover:bg-gradient-to-r hover:from-blue-600 hover:to-indigo-500 hover:text-white text-gray-700 dark:text-gray-300 transition-all duration-300 shadow-sm"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="text-sm">Back to Top</span>
            <ArrowUp className="w-4 h-4" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
