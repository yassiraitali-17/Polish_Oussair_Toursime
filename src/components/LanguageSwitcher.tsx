import { useState, useRef, useEffect } from 'react';
import { useLanguage, type Language } from '@/contexts/LanguageContext';

const LanguageSwitcher = ({ isScrolled, isHomePage }: { isScrolled: boolean; isHomePage: boolean }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { language, setLanguage } = useLanguage();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const languages: { code: Language; name: string }[] = [
    { code: 'en', name: 'English' },
    { code: 'fr', name: 'Français' },
  ];

  const handleLanguageChange = (lang: Language) => {
    setLanguage(lang);
    setIsOpen(false);
  };

  const textColor = isScrolled || !isHomePage ? 'text-secondary' : 'text-white';
  const hoverTextColor = isScrolled || !isHomePage ? 'hover:text-primary' : 'hover:text-primary';

  return (
    <div ref={dropdownRef} className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`font-medium transition-colors flex items-center gap-2 px-3 py-2 rounded-lg ${textColor} ${hoverTextColor}`}
        aria-label="Language selector"
        aria-expanded={isOpen}
      >
        <span className="text-sm font-semibold">{language.toUpperCase()}</span>
        <svg
          className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </button>

      {isOpen && (
        <div className={`absolute top-full right-0 mt-2 min-w-max rounded-lg shadow-lg border backdrop-blur-sm animate-in fade-in slide-in-from-top-2 duration-200 z-50 ${
          isScrolled || !isHomePage
            ? 'bg-white border-gray-200'
            : 'bg-white/95 border-white/20'
        }`}>
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => handleLanguageChange(lang.code)}
              className={`w-full text-left px-4 py-3 text-sm font-medium transition-colors ${
                language === lang.code
                  ? 'text-primary bg-primary/10'
                  : 'text-gray-700 hover:text-primary hover:bg-primary/5'
              } ${lang.code === 'en' ? 'border-b border-gray-100' : ''}`}
              role="menuitem"
            >
              {lang.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
