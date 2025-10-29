import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import { useTranslate } from '@/hooks/useTranslate';
import logoIcon from '@/assets/logo-icon.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const { t } = useTranslate();
  const [ticking, setTicking] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 50);
          setTicking(false);
        });
        setTicking(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [ticking]);

  // Close menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: t('navbar.home'), path: '/' },
    { name: t('navbar.services'), path: '/services' },
    { name: t('navbar.about'), path: '/about' },
    { name: t('navbar.contact'), path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  const isHomePage = location.pathname === '/';

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-lg' : isHomePage ? 'bg-transparent' : 'bg-white/95 backdrop-blur-sm shadow-md'
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <Link to="/" className="flex items-center gap-3 transition-transform hover:scale-105">
              <img src={logoIcon} alt="Oussaid Tourism Icon" className="h-12 w-auto" decoding="async" />
              <div className="flex flex-col leading-tight">
                <span className={`text-2xl font-bold tracking-tight transition-colors ${
                  (isScrolled || !isHomePage) ? 'text-primary' : 'text-white'
                }`}>OUSSAID</span>
                <span className={`text-sm font-medium tracking-widest transition-colors ${
                  (isScrolled || !isHomePage) ? 'text-secondary' : 'text-white'
                }`}>TOURISME</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`font-medium transition-colors relative group ${
                    isActive(link.path)
                      ? 'text-primary'
                      : (isScrolled || !isHomePage)
                      ? 'text-secondary hover:text-primary'
                      : 'text-white hover:text-primary'
                  }`}
                >
                  {link.name}
                  <span className={`absolute -bottom-1 left-0 w-full h-0.5 bg-primary transform transition-transform origin-left ${
                    isActive(link.path) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                  }`} />
                </Link>
              ))}
              <LanguageSwitcher isScrolled={isScrolled} isHomePage={isHomePage} />
              <Link to="/contact">
                <Button
                  variant={(isScrolled || !isHomePage) ? "default" : "hero"}
                  size="default"
                  className="ml-4"
                >
                  {t('navbar.bookNow')}
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className={`md:hidden p-2 transition-colors z-50 ${
                (isScrolled || !isHomePage) ? 'text-secondary hover:text-primary' : 'text-white hover:text-primary'
              }`}
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay - Separate from Navbar */}
      {isOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/50 animate-fade-in"
            onClick={() => setIsOpen(false)}
          />
          
          {/* Sliding Menu */}
          <div className={`absolute top-0 right-0 h-full w-80 max-w-[85vw] bg-white shadow-2xl flex flex-col ${
            isOpen ? 'animate-slide-in-right' : 'animate-slide-out-right'
          }`}>
            {/* Header with Logo and Close Button */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <div className="flex items-center gap-3">
                <img src={logoIcon} alt="Oussaid Tourism Icon" className="h-10 w-auto" decoding="async" />
                <div className="flex flex-col leading-tight">
                  <span className="text-xl font-bold tracking-tight text-primary">OUSSAID</span>
                  <span className="text-xs font-medium tracking-widest text-secondary">TOURISME</span>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 text-gray-600 hover:text-primary transition-colors rounded-lg hover:bg-gray-100"
                aria-label="Close menu"
              >
                <X size={24} />
              </button>
            </div>

            {/* Navigation Links */}
            <nav className="px-4 py-6 flex-1">
              {navLinks.map((link, index) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`block py-4 px-4 font-medium transition-all rounded-lg mb-2 ${
                    isActive(link.path)
                      ? 'text-primary bg-primary/10'
                      : 'text-gray-700 hover:text-primary hover:bg-gray-100'
                  }`}
                  style={{
                    animationDelay: `${index * 50}ms`,
                    animation: isOpen ? 'fade-in 0.3s ease-out forwards' : 'none'
                  }}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <div className="py-4 px-4">
                <LanguageSwitcher isScrolled={true} isHomePage={false} />
              </div>
            </nav>

            {/* Book Now Button in Mobile Menu */}
            <div className="px-4 pb-6 border-t border-gray-200 pt-4">
              <Link to="/contact" onClick={() => setIsOpen(false)}>
                <Button variant="default" size="lg" className="w-full">
                  {t('navbar.bookNow')}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
