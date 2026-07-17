import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Phone, Sun, Moon } from 'lucide-react';
import Logo from './Logo';

interface NavbarProps {
  currentView: string;
  setCurrentView: (view: string) => void;
}

export default function Navbar({ currentView, setCurrentView }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      return document.documentElement.classList.contains('dark') || 
        (localStorage.theme === 'dark') ||
        (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);
    }
    return false;
  });

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
    }
  }, [isDark]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => setIsDark(!isDark);

  const menuItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'courses', label: 'Courses' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'reviews', label: 'Student Reviews' },
    { id: 'certificate', label: 'Certificates' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (viewId: string) => {
    setCurrentView(viewId);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openWhatsApp = () => {
    const message = encodeURIComponent("Hello दaksh Computers, I would like to know more about your computer courses.");
    window.open(`https://wa.me/919827241646?text=${message}`, '_blank');
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/80 dark:bg-slate-900/80 backdrop-blur-md shadow-md py-3 border-b border-blue-100'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo on Left */}
            <button
              onClick={() => handleNavClick('home')}
              className="flex items-center space-x-3 group text-left cursor-pointer"
            >
              <Logo size={46} emblemOnly={true} className="transform transition-transform duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_0_8px_rgba(60,225,176,0.4)]" />
              <div>
                <span className="block font-sans font-bold text-lg text-primary-blue tracking-tight leading-none">
                  दaksh Computers
                </span>
                <span className="block font-inter font-medium text-[10px] text-text-secondary tracking-widest uppercase mt-1">
                  We Trust in Quality Education
                </span>
              </div>
            </button>

            {/* Desktop Center Menu */}
            <nav className="hidden lg:flex items-center space-x-1">
              {menuItems.map((item) => {
                const isActive = currentView === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`relative px-4 py-2 rounded-lg font-sans text-sm font-medium transition-all duration-200 cursor-pointer ${
                      isActive
                        ? 'text-primary-blue'
                        : 'text-text-secondary hover:text-primary-blue hover:bg-blue-50/50'
                    }`}
                  >
                    {item.label}
                    {isActive && (
                      <motion.div
                        layoutId="activeNavIndicator"
                        className="absolute bottom-0 left-4 right-4 h-[2px] bg-primary-blue rounded-full"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                  </button>
                );
              })}
            </nav>

            {/* Right Side Buttons (WhatsApp) */}
            <div className="hidden lg:flex items-center space-x-3">
              <button
                onClick={toggleTheme}
                className="p-2 text-text-primary hover:text-primary-blue bg-slate-50 dark:bg-slate-900 hover:bg-blue-50 dark:hover:bg-slate-800 dark:text-slate-300 dark:hover:text-blue-400 rounded-xl border border-slate-100 dark:border-slate-700 transition-colors cursor-pointer"
                aria-label="Toggle theme"
              >
                {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
              <button
                onClick={openWhatsApp}
                className="flex items-center space-x-2 border border-emerald-200 hover:border-emerald-400 bg-emerald-50 hover:bg-emerald-100/70 text-emerald-700 px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-300 hover:scale-[1.03] cursor-pointer"
              >
                <Phone className="w-4 h-4 fill-current" />
                <span>WhatsApp</span>
              </button>
            </div>

            {/* Mobile Hamburger Trigger */}
            <div className="flex lg:hidden items-center space-x-2">
              <button
                onClick={toggleTheme}
                className="p-2 text-text-primary hover:text-primary-blue bg-slate-50 dark:bg-slate-900 hover:bg-blue-50 dark:hover:bg-slate-800 dark:text-slate-300 dark:hover:text-blue-400 rounded-xl border border-slate-100 dark:border-slate-700 cursor-pointer"
                aria-label="Toggle theme"
              >
                {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
              <button
                onClick={openWhatsApp}
                className="p-2 text-emerald-600 bg-emerald-50 rounded-xl border border-emerald-100 cursor-pointer"
                aria-label="WhatsApp"
              >
                <Phone className="w-5 h-5 fill-current" />
              </button>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 text-text-primary hover:text-primary-blue hover:bg-blue-50 dark:text-slate-300 dark:hover:text-blue-400 rounded-xl border border-blue-50 dark:border-slate-700 cursor-pointer"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Glassmorphic Dropdown Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[70px] z-40 lg:hidden p-4 bg-white/95 dark:bg-slate-900/95 backdrop-blur-lg border-b border-blue-50 shadow-xl"
          >
            <div className="space-y-1.5 pb-4">
              {/* Branded Header inside Mobile Menu */}
              <div className="flex items-center space-x-3 px-4 py-3 mb-2 bg-blue-50/30 rounded-2xl border border-blue-50/50">
                <Logo size={34} emblemOnly={true} className="shrink-0" />
                <div>
                  <span className="block font-sans font-bold text-sm text-primary-blue leading-none">
                    दaksh Computers
                  </span>
                  <span className="block font-inter font-medium text-[8px] text-text-secondary tracking-wider uppercase mt-1">
                    Quality Computer Education
                  </span>
                </div>
              </div>
              {menuItems.map((item) => {
                const isActive = currentView === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`block w-full text-left px-4 py-2.5 rounded-xl font-sans text-base font-semibold transition-all duration-200 cursor-pointer ${
                      isActive
                        ? 'bg-blue-50 text-primary-blue'
                        : 'text-text-secondary hover:text-primary-blue hover:bg-blue-50/50'
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
