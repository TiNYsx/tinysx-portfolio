
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, toggleLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { name: t('nav.home'), id: 'hero' },
    { name: t('nav.about'), id: 'about' },
    { name: t('nav.projects'), id: 'projects' },
    { name: t('nav.skills'), id: 'skills' },
    { name: t('nav.contact'), id: 'contact' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-dark-bg-900/95 backdrop-blur-sm border-b border-hacker-green-400/20' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16">
          <div className="font-mono text-hacker-green-400 text-lg sm:text-xl font-semibold">
            {'<JT />'}
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="nav-link hover:text-hacker-green-400 transition-colors cursor-hover-effect text-sm lg:text-base"
              >
                {link.name}
              </button>
            ))}
            
            <button
              onClick={toggleLanguage}
              className="px-2 sm:px-3 py-1 border border-hacker-green-400/40 rounded text-hacker-green-400 hover:bg-hacker-green-400 hover:text-dark-bg-900 transition-all duration-300 font-mono text-xs sm:text-sm cursor-hover-effect"
            >
              {language === 'th' ? 'EN' : 'TH'}
            </button>
          </div>

          {/* Mobile Navigation Button */}
          <div className="md:hidden flex items-center space-x-3 sm:space-x-4">
            <button
              onClick={toggleLanguage}
              className="px-2 py-1 border border-hacker-green-400/40 rounded text-hacker-green-400 hover:bg-hacker-green-400 hover:text-dark-bg-900 transition-all duration-300 font-mono text-xs cursor-hover-effect"
            >
              {language === 'th' ? 'EN' : 'TH'}
            </button>
            
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-foreground hover:text-hacker-green-400 transition-colors cursor-hover-effect"
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-14 sm:top-16 left-0 w-full bg-dark-bg-900/95 backdrop-blur-sm border-b border-hacker-green-400/20">
            <div className="px-4 py-4 space-y-3">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="block nav-link hover:text-hacker-green-400 transition-colors w-full text-left cursor-hover-effect text-sm"
                >
                  {link.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
