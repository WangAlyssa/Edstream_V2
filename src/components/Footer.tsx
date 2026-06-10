
import { Link } from "react-router-dom";
import { Mail, ExternalLink, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const quickLinks = [
    { name: "Features", href: "/features" },
    { name: "About", href: "/about" },
    { name: "FAQ", href: "/faq" },
    { name: "Guides", href: "/guides" },
    { name: "Contact", href: "/contact" },
  ];

  const legalLinks = [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Documentation", href: "https://mintlify.com", external: true },
  ];

  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div className="lg:col-span-2">
              <Link to="/" className="inline-flex items-center space-x-3 mb-6 hover:opacity-80 transition-all duration-300 hover:scale-105">
                <img
                  src="/Edstream_V2/logo.svg"
                  alt="EdStream Logo"
                  className="logo-image w-10 h-10 transition-transform duration-300"
                />
                <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-700 dark:from-blue-300 dark:to-blue-400 bg-clip-text text-transparent">EdStream</span>
              </Link>

              <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-md text-lg leading-relaxed">
                Cultivating Campus Communities through integrated messaging and collaboration tools for Canvas LMS.
              </p>

              <div className="flex items-center space-x-3 group">
                <div className="p-2 bg-orange-100 dark:bg-orange-900/50 rounded-lg group-hover:bg-orange-200 dark:group-hover:bg-orange-800/70 transition-colors duration-300">
                  <Mail className="h-5 w-5 text-orange-600 dark:text-orange-400" />
                </div>
                <a
                  href="mailto:info@edstream.io"
                  className="text-gray-600 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-400 transition-colors text-lg font-medium"
                >
                  info@edstream.io
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-6">
                Quick Links
              </h3>
              <ul className="space-y-4">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center group"
                    >
                      <ArrowRight className="h-4 w-4 text-orange-500 mr-2 opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-1 transition-all duration-200" />
                      <span className="group-hover:translate-x-1 transition-transform duration-200">{link.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-6">
                Legal & Support
              </h3>
              <ul className="space-y-4">
                {legalLinks.map((link) => (
                  <li key={link.name}>
                    {link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center group"
                      >
                        <ArrowRight className="h-4 w-4 text-orange-500 mr-2 opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-1 transition-all duration-200" />
                        <span className="group-hover:translate-x-1 transition-transform duration-200">{link.name}</span>
                        <ExternalLink className="h-3 w-3 ml-1 opacity-60" />
                      </a>
                    ) : (
                      <Link
                        to={link.href}
                        className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center group"
                      >
                        <ArrowRight className="h-4 w-4 text-orange-500 mr-2 opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-1 transition-all duration-200" />
                        <span className="group-hover:translate-x-1 transition-transform duration-200">{link.name}</span>
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="py-8 border-t border-gray-200 dark:border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-gray-500 dark:text-gray-400 text-base">
                © Copyright 2025 EdStream @ University of Florida Research Foundation, Inc.
              </p>
              <p className="text-gray-500 dark:text-gray-400 text-base">
                All Commercial Rights Reserved.
              </p>
            </div>

            <div className="flex space-x-4">
              <Button
                asChild
                className="bg-gradient-to-r from-orange-500 to-orange-600 dark:from-orange-500 dark:to-orange-600 text-white hover:from-orange-600 hover:to-orange-700 dark:hover:from-orange-400 dark:hover:to-orange-500 transition-all duration-200 font-medium px-6 py-2 rounded-lg shadow-sm hover:shadow-md hover:scale-105 transform"
              >
                <a href="https://forms.gle/LM3stfsN3DfZecSd8" target="_blank" rel="noopener noreferrer">
                  Get Started
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
