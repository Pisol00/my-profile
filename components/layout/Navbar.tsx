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
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/80 border-b border-border/30">
      <div className="container mx-auto max-w-7xl px-4 py-3 sm:py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="relative h-7 w-7 sm:h-8 sm:w-8 overflow-hidden rounded-md bg-primary/10 flex items-center justify-center">
            <span className="font-bold text-primary text-base sm:text-lg">P</span>
            <div className="absolute inset-0 bg-primary/5 rounded-md"></div>
          </div>
          <span className="font-bold text-base sm:text-lg bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            Pisol Uattankanjana
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
            className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border-border/50 hover:bg-primary/5 transition-all cursor-pointer"
          >
            {isDarkMode ? (
              <Sun size={16} className="sm:w-[18px] sm:h-[18px] text-primary" />
            ) : (
              <MoonStar size={16} className="sm:w-[18px] sm:h-[18px] text-primary" />
            )}
          </Button>

          <Button
            variant="outline"
            size="sm"
            onClick={toggleLanguage}
            className="h-8 sm:h-9 rounded-full border-border/50 hover:bg-primary/5 transition-all font-medium gap-1.5 cursor-pointer text-xs sm:text-sm px-2.5 sm:px-3"
          >
            <Languages size={14} className="sm:w-4 sm:h-4 text-primary" />
            {currentLang === "en" ? "TH" : "EN"}
          </Button>

          {/* Mobile menu button - improved touch target */}
          <Button
            variant="outline"
            size="icon"
            className="md:hidden w-8 h-8 sm:w-9 sm:h-9 rounded-full border-border/50 hover:bg-primary/5"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <X size={18} className="sm:w-5 sm:h-5 text-primary" />
            ) : (
              <Menu size={18} className="sm:w-5 sm:h-5 text-primary" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile menu - better touch targets and display */}
      {mobileMenuOpen && (
        <div className="">
          <div className="flex flex-col space-y-0.5">
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
      )}
    </nav>
  );
}