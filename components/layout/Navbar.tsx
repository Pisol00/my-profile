'use client';

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Languages, Home, Star, Code2, GraduationCap, MessageSquare, MoonStar, Sun, Menu, X } from "lucide-react";
import { useLanguage, useTheme } from '@/contexts';
import NavItem from '@/components/common/NavItem';
import MobileNavItem from '@/components/common/MobileNavItem';

type NavbarProps = {
  scrollToSection: (ref: React.RefObject<HTMLElement>) => void;
  sections: {
    hero: React.RefObject<HTMLElement>;
    skills: React.RefObject<HTMLElement>;
    projects: React.RefObject<HTMLElement>;
    education: React.RefObject<HTMLElement>;
    contact: React.RefObject<HTMLElement>;
  };
};

export default function Navbar({ scrollToSection, sections }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const { isDarkMode, toggleDarkMode } = useTheme();
  const { currentLang, t, toggleLanguage } = useLanguage();

  const handleSectionClick = (ref: React.RefObject<HTMLElement>) => {
    scrollToSection(ref);
    setMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/80 border-b border-border/30">
      <div className="container mx-auto max-w-7xl px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="relative h-8 w-8 overflow-hidden rounded-md bg-primary/10 flex items-center justify-center">
            <span className="font-bold text-primary text-lg">P</span>
            <div className="absolute inset-0 bg-primary/5 rounded-md"></div>
          </div>
          <span className="font-bold text-lg bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            Pisol Uattankanjana
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
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

        <div className="flex items-center gap-3">
          <Button
            variant="outline"
            size="icon"
            onClick={toggleDarkMode}
            className="rounded-full border-border/50 hover:bg-primary/5 transition-all cursor-pointer"
          >
            {isDarkMode ? (
              <Sun size={18} className="text-primary" />
            ) : (
              <MoonStar size={18} className="text-primary" />
            )}
          </Button>

          <Button
            variant="outline"
            size="sm"
            onClick={toggleLanguage}
            className="rounded-full border-border/50 hover:bg-primary/5 transition-all font-medium gap-2 cursor-pointer"
          >
            <Languages size={16} className="text-primary" />
            {currentLang === "en" ? "TH" : "EN"}
          </Button>

          {/* Mobile menu button */}
          <Button
            variant="outline"
            size="icon"
            className="md:hidden rounded-full border-border/50 hover:bg-primary/5"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X size={20} className="text-primary" />
            ) : (
              <Menu size={20} className="text-primary" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 backdrop-blur-xl bg-background/90 py-4 px-4 border-b border-border/30">
          <div className="flex flex-col space-y-1">
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