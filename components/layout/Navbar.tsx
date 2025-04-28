'use client';

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Languages, Home, Star, Code2, GraduationCap, MessageSquare, MoonStar, Sun, Menu, X } from "lucide-react";
import { useLanguage, useTheme } from '@/contexts';
import NavItem from '@/components/common/ui/NavItem';
import MobileNavItem from '@/components/common/ui/MobileNavItem';

type NavbarProps = {
  scrollToSection: (ref: React.RefObject<HTMLElement | null>) => void;
  sections: {
    hero: React.RefObject<HTMLElement | null>;
    skills: React.RefObject<HTMLElement | null>;
    projects: React.RefObject<HTMLElement | null>;
    education: React.RefObject<HTMLElement | null>;
    contact: React.RefObject<HTMLElement | null>;
  };
};

export default function Navbar({ scrollToSection, sections }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const { isDarkMode, toggleDarkMode } = useTheme();
  const { currentLang, t, toggleLanguage } = useLanguage();

  const handleSectionClick = (ref: React.RefObject<HTMLElement | null>) => {
    scrollToSection(ref);
    setMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/80 dark:bg-black/80 border-b border-gray-200/30 dark:border-gray-800/30">
      <div className="container mx-auto max-w-7xl px-4 py-3 sm:py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="relative h-7 w-7 sm:h-8 sm:w-8 overflow-hidden rounded-md bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
            <span className="font-bold text-gray-700 dark:text-gray-300 text-base sm:text-lg">P</span>
            <div className="absolute inset-0 bg-gray-100/50 dark:bg-gray-800/50 rounded-md"></div>
          </div>
          <span className="font-bold text-base sm:text-lg bg-gradient-to-r from-gray-800 to-gray-600 dark:from-white dark:to-gray-400 bg-clip-text text-transparent">
            {t.name}
          </span>
        </div>

        {/* Desktop Menu - hidden on mobile */}
        <div className="hidden md:flex items-center gap-4 lg:gap-6">
          <NavItem
            label={t.home}
            onClick={() => handleSectionClick(sections.hero)}
            icon={<Home size={14} />}
          />
          <NavItem
            label={t.skills}
            onClick={() => handleSectionClick(sections.skills)}
            icon={<Star size={14} />}
          />
          <NavItem
            label={t.projects}
            onClick={() => handleSectionClick(sections.projects)}
            icon={<Code2 size={14} />}
          />
          <NavItem
            label={t.education}
            onClick={() => handleSectionClick(sections.education)}
            icon={<GraduationCap size={14} />}
          />
          <NavItem
            label={t.contact}
            onClick={() => handleSectionClick(sections.contact)}
            icon={<MessageSquare size={14} />}
          />
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <Button
            variant="outline"
            size="icon"
            onClick={toggleDarkMode}
            className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all cursor-pointer"
          >
            {isDarkMode ? (
              <Sun size={16} className="sm:w-[18px] sm:h-[18px] text-gray-600 dark:text-gray-300" />
            ) : (
              <MoonStar size={16} className="sm:w-[18px] sm:h-[18px] text-gray-600 dark:text-gray-300" />
            )}
          </Button>

          <Button
            variant="outline"
            size="sm"
            onClick={toggleLanguage}
            className="h-8 sm:h-9 rounded-full border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all font-medium gap-1.5 cursor-pointer text-xs sm:text-sm px-2.5 sm:px-3"
          >
            <Languages size={14} className="sm:w-4 sm:h-4 text-gray-600 dark:text-gray-300" />
            {currentLang === "en" ? "TH" : "EN"}
          </Button>

          {/* Mobile menu button - improved touch target */}
          <Button
            variant="outline"
            size="icon"
            className="md:hidden w-8 h-8 sm:w-9 sm:h-9 rounded-full border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? t.closeMenu || "Close menu" : t.openMenu || "Open menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <X size={18} className="sm:w-5 sm:h-5 text-gray-600 dark:text-gray-300" />
            ) : (
              <Menu size={18} className="sm:w-5 sm:h-5 text-gray-600 dark:text-gray-300" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile menu - with animation */}
      <div 
        className={`md:hidden bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800 overflow-hidden transition-all duration-300 ease-in-out ${
          mobileMenuOpen ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className={`flex flex-col space-y-0.5 p-2 transition-all duration-300 ease-in-out ${
          mobileMenuOpen ? 'translate-y-0' : '-translate-y-4'
        }`}>
          <MobileNavItem
            label={t.home}
            onClick={() => handleSectionClick(sections.hero)}
            icon={<Home size={16} />}
          />
          <MobileNavItem
            label={t.skills}
            onClick={() => handleSectionClick(sections.skills)}
            icon={<Star size={16} />}
          />
          <MobileNavItem
            label={t.projects}
            onClick={() => handleSectionClick(sections.projects)}
            icon={<Code2 size={16} />}
          />
          <MobileNavItem
            label={t.education}
            onClick={() => handleSectionClick(sections.education)}
            icon={<GraduationCap size={16} />}
          />
          <MobileNavItem
            label={t.contact}
            onClick={() => handleSectionClick(sections.contact)}
            icon={<MessageSquare size={16} />}
          />
        </div>
      </div>
    </nav>
  );
}