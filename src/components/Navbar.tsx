
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Link, useLocation } from 'react-router-dom';
import { ScrollToTopLink } from '@/components/ui/scroll-to-top-link';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const offset = window.scrollY;

      // Check if scrolled past threshold
      setScrolled(offset > 50);

      // Hide/show navbar based on scroll direction
      if (currentScrollY > 300) {
        setIsVisible(currentScrollY < lastScrollY);
      } else {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  const scrollToSection = (sectionId: string) => {
    setIsMenuOpen(false);

    // Check if we're on the homepage
    if (location.pathname !== '/') {
      // Navigate to homepage with the hash
      window.location.href = `/${sectionId}`;
      return;
    }

    // If we're already on homepage, just scroll to the section
    const element = document.getElementById(sectionId.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '/projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 ease-in-out",
        scrolled
          ? "bg-white/80 backdrop-blur-md py-4 shadow-sm"
          : "bg-transparent py-6",
        isVisible ? "translate-y-0" : "-translate-y-full"
      )}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold tracking-tighter transition-transform hover:scale-105">Brody</Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-10">
          {navItems.map((item, index) => (
            item.href.startsWith('#') ? (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className="hover-link text-sm font-medium tracking-wide transition-colors cursor-pointer relative group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </button>
            ) : (
              item.href === '/projects' ? (
                <ScrollToTopLink
                  key={item.label}
                  to={item.href}
                  className="hover-link text-sm font-medium tracking-wide transition-colors relative group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                </ScrollToTopLink>
              ) : (
                <Link
                  key={item.label}
                  to={item.href}
                  className="hover-link text-sm font-medium tracking-wide transition-colors relative group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                </Link>
              )
            )
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden focus:outline-none transition-transform hover:scale-110"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <nav
        className={cn(
          "md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-md transition-transform duration-300 ease-in-out transform shadow-md",
          isMenuOpen ? "translate-y-0" : "-translate-y-full"
        )}
      >
        <div className="container mx-auto px-6 py-6 flex flex-col space-y-4">
          {navItems.map((item, index) => (
            item.href.startsWith('#') ? (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className="text-lg font-medium py-2 text-left transform transition-transform hover:translate-x-2"
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                {item.label}
              </button>
            ) : (
              item.href === '/projects' ? (
                <ScrollToTopLink
                  key={item.label}
                  to={item.href}
                  className="text-lg font-medium py-2 transform transition-transform hover:translate-x-2"
                  onClick={() => setIsMenuOpen(false)}
                  style={{ transitionDelay: `${index * 50}ms` }}
                >
                  {item.label}
                </ScrollToTopLink>
              ) : (
                <Link
                  key={item.label}
                  to={item.href}
                  className="text-lg font-medium py-2 transform transition-transform hover:translate-x-2"
                  onClick={() => setIsMenuOpen(false)}
                  style={{ transitionDelay: `${index * 50}ms` }}
                >
                  {item.label}
                </Link>
              )
            )
          ))}
        </div>
      </nav>
    </header>
  );
}
