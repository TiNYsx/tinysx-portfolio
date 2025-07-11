
import { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const HeroSection = () => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  const { t } = useLanguage();
  
  const fullName = 'Jirawat Thipphinit';

  useEffect(() => {
    if (currentIndex < fullName.length) {
      const timer = setTimeout(() => {
        setDisplayedText(fullName.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, 150);
      return () => clearTimeout(timer);
    }
  }, [currentIndex, fullName]);

  useEffect(() => {
    const cursorTimer = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);
    return () => clearInterval(cursorTimer);
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Matrix rain background effect */}
      <div className="absolute inset-0 opacity-5">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute text-hacker-green-400 text-xs font-mono animate-matrix-rain hidden sm:block"
            style={{
              left: `${i * 5}%`,
              animationDelay: `${i * 0.1}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          >
            {Array.from({ length: 20 }, () => 
              String.fromCharCode(0x30A0 + Math.random() * 96)
            ).join('')}
          </div>
        ))}
      </div>

      <div className="text-center z-10 px-4 w-full max-w-4xl mx-auto">
        <div className="mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-mono font-bold text-hacker-green-400 mb-4 sm:mb-8 break-words">
            {displayedText}
            <span className={`border-r-2 border-hacker-green-400 ${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity`}>
              &nbsp;
            </span>
          </h1>
        </div>

        <button
          onClick={scrollToAbout}
          className="mt-8 sm:mt-12 animate-bounce p-2 rounded-full border border-hacker-green-400/30 hover:border-hacker-green-400 transition-colors duration-300 cursor-hover-effect"
          style={{ animationDelay: '4s' }}
        >
          <ChevronDown className="w-5 h-5 sm:w-6 sm:h-6 text-hacker-green-400" />
        </button>
      </div>

      {/* Glitch overlay effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-hacker-green-400/5 to-transparent animate-pulse opacity-30"></div>
    </section>
  );
};

export default HeroSection;
