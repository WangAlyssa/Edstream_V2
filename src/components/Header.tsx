
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ThemeToggle from "@/components/ThemeToggle";
import { Menu, X } from "lucide-react";

const LOGO_SRC = `${import.meta.env.BASE_URL}lovable-uploads/8f4a6de0-da43-4b0b-8550-2d2f9c1c4e5b.png`;

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Features", href: "/features" },
    { name: "About", href: "/about" },
    { name: "FAQ", href: "/faq" },
    { name: "Guides", href: "/guides" },
    { name: "Contact", href: "/contact" },
  ];

  const isActivePage = (href: string) => {
    if (href === "/" && location.pathname === "/") return true;
    if (href !== "/" && location.pathname === href) return true;
    if (href === "/guides" && location.pathname.startsWith("/guides")) return true;
    return false;
  };

  return (
    <header className="bg-white/70 dark:bg-gray-900/90 backdrop-blur-lg shadow-lg border-b border-gray-100 dark:border-gray-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-3 hover:opacity-90 transition-all duration-300 hover:scale-105">
              <img
                src={LOGO_SRC}
                alt="EdStream Logo"
                className="w-12 h-12 dark:brightness-0 dark:invert transition-transform duration-300"
              />
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-700 dark:from-blue-300 dark:to-blue-400 bg-clip-text text-transparent">EdStream</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`font-bold text-lg px-4 py-2 rounded-lg transition-all duration-200 ${
                  isActivePage(item.href)
                    ? 'text-blue-600 dark:text-blue-400 bg-blue-50/80 dark:bg-blue-900/50 border border-blue-200 dark:border-blue-700'
                    : 'text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800/50'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Theme toggle + Login */}
          <div className="hidden md:flex items-center gap-3">
            <ThemeToggle />
            <Button 
              asChild
              className="bg-gradient-to-r from-orange-500 to-orange-600 dark:from-orange-500 dark:to-orange-600 text-white hover:from-orange-600 hover:to-orange-700 dark:hover:from-orange-400 dark:hover:to-orange-500 transition-all duration-200 font-bold px-6 py-2 rounded-lg shadow-lg hover:shadow-xl border-2 border-transparent dark:border-orange-400/50 hover:scale-105 transform"
            >
              <a href="https://app.edstream.io" target="_blank" rel="noopener noreferrer">
                Login
              </a>
            </Button>
          </div>

          {/* Mobile theme toggle + menu button */}
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <Button
              variant="ghost"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800/50 rounded-lg"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white dark:bg-gray-900/95 shadow-lg rounded-lg mx-4 mb-4 border border-gray-200 dark:border-gray-700 backdrop-blur-sm">
            <div className="px-4 py-4 space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block px-4 py-3 font-bold text-lg rounded-lg transition-all duration-200 ${
                    isActivePage(item.href)
                      ? 'text-blue-600 dark:text-blue-400 bg-blue-50/80 dark:bg-blue-900/50 border-l-4 border-orange-500 dark:border-orange-400'
                      : 'text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800/50'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-2">
                <Button 
                  asChild 
                  className="w-full bg-gradient-to-r from-orange-500 to-orange-600 dark:from-orange-500 dark:to-orange-600 text-white hover:from-orange-600 hover:to-orange-700 dark:hover:from-orange-400 dark:hover:to-orange-500 font-bold py-3 rounded-lg shadow-lg border-2 border-transparent dark:border-orange-400/50 hover:scale-105 transform transition-all duration-200"
                >
                  <a href="https://app.edstream.io" target="_blank" rel="noopener noreferrer">
                    Login
                  </a>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
