import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import EdStreamLogo from "@/components/EdStreamLogo";
import ThemeToggle from "@/components/ThemeToggle";
import { Menu, X, ExternalLink } from "lucide-react";

type NavItem =
  | { name: string; type: "hash"; hash: string }
  | { name: string; type: "route"; href: string; newTab?: boolean };

const navigation: NavItem[] = [
  { name: "Home", type: "hash", hash: "home" },
  { name: "Features", type: "hash", hash: "features" },
  { name: "About", type: "hash", hash: "about" },
  { name: "FAQ", type: "hash", hash: "faq" },
  { name: "Contact", type: "hash", hash: "contact" },
  { name: "Guides", type: "route", href: "/guides", newTab: true },
];

const guidesHref = `${import.meta.env.BASE_URL}guides`.replace(/([^:]\/)\/+/g, "$1");

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeHash, setActiveHash] = useState("home");
  const location = useLocation();
  const onHome = location.pathname === "/" || location.pathname === "";

  useEffect(() => {
    if (!onHome) return;

    const sectionIds = navigation
      .filter((item): item is Extract<NavItem, { type: "hash" }> => item.type === "hash")
      .map((item) => item.hash);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]?.target.id) {
          setActiveHash(visible[0].target.id);
        }
      },
      { rootMargin: "-20% 0px -55% 0px", threshold: [0, 0.25, 0.5, 1] }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [onHome]);

  const scrollToHash = (hash: string) => {
    setIsMenuOpen(false);
    if (onHome) {
      const el = document.getElementById(hash);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
        window.history.replaceState(null, "", `#${hash}`);
        setActiveHash(hash);
      }
    }
  };

  const isActive = (item: NavItem) => {
    if (item.type === "route") {
      return location.pathname.startsWith(item.href);
    }
    if (!onHome) return false;
    return activeHash === item.hash;
  };

  const navClass = (active: boolean) =>
    `font-bold text-lg px-4 py-2 no-underline transition-colors duration-200 ${
      active
        ? "text-blue-600 dark:text-blue-400"
        : "text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400"
    }`;

  const renderNavItem = (item: NavItem, mobile = false) => {
    const active = isActive(item);
    const className = mobile
      ? `block ${navClass(active)} py-3`
      : navClass(active);

    if (item.type === "route") {
      if (item.newTab) {
        return (
          <a
            key={item.name}
            href={guidesHref}
            target="_blank"
            rel="noopener noreferrer"
            className={`${className} inline-flex items-center gap-1.5`}
            onClick={() => setIsMenuOpen(false)}
          >
            {item.name}
            <ExternalLink className="h-3.5 w-3.5 opacity-70" aria-hidden />
          </a>
        );
      }
      return (
        <Link
          key={item.name}
          to={item.href}
          className={className}
          onClick={() => setIsMenuOpen(false)}
        >
          {item.name}
        </Link>
      );
    }

    if (onHome) {
      return (
        <a
          key={item.name}
          href={`#${item.hash}`}
          className={className}
          onClick={(e) => {
            e.preventDefault();
            scrollToHash(item.hash);
          }}
        >
          {item.name}
        </a>
      );
    }

    return (
      <Link
        key={item.name}
        to={`/#${item.hash}`}
        className={className}
        onClick={() => setIsMenuOpen(false)}
      >
        {item.name}
      </Link>
    );
  };

  return (
    <header className="bg-white/70 dark:bg-gray-900/90 backdrop-blur-lg shadow-lg border-b border-gray-100 dark:border-gray-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link
              to="/"
              className="flex items-center space-x-3 hover:opacity-90 transition-all duration-300 hover:scale-105 no-underline"
              onClick={() => {
                if (onHome) {
                  scrollToHash("home");
                }
              }}
            >
              <EdStreamLogo />
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-700 dark:from-blue-300 dark:to-blue-400 bg-clip-text text-transparent">
                EdStream
              </span>
            </Link>
          </div>

          <nav className="hidden md:flex space-x-2">
            {navigation.map((item) => renderNavItem(item))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <ThemeToggle />
            <Button
              asChild
              className="bg-gradient-to-r from-orange-500 to-orange-600 dark:from-orange-500 dark:to-orange-600 text-white hover:from-orange-600 hover:to-orange-700 dark:hover:from-orange-400 dark:hover:to-orange-500 transition-all duration-200 font-bold px-6 py-2 rounded-lg shadow-lg hover:shadow-xl border-2 border-transparent dark:border-orange-400/50 hover:scale-105 transform [&_a]:text-white [&_a]:visited:text-white [&_a]:active:text-white [&_a]:focus:text-white"
            >
              <a href="https://app.edstream.io/login" target="_blank" rel="noopener noreferrer">
                Login
              </a>
            </Button>
          </div>

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

        {isMenuOpen && (
          <div className="md:hidden bg-white dark:bg-gray-900/95 shadow-lg rounded-lg mx-4 mb-4 border border-gray-200 dark:border-gray-700 backdrop-blur-sm">
            <div className="px-4 py-4 space-y-2">
              {navigation.map((item) => renderNavItem(item, true))}
              <div className="pt-2">
                <Button
                  asChild
                  className="w-full bg-gradient-to-r from-orange-500 to-orange-600 dark:from-orange-500 dark:to-orange-600 text-white hover:from-orange-600 hover:to-orange-700 dark:hover:from-orange-400 dark:hover:to-orange-500 font-bold py-3 rounded-lg shadow-lg border-2 border-transparent dark:border-orange-400/50 hover:scale-105 transform transition-all duration-200 [&_a]:text-white [&_a]:visited:text-white [&_a]:active:text-white [&_a]:focus:text-white"
                >
                  <a href="https://app.edstream.io/login" target="_blank" rel="noopener noreferrer">
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
