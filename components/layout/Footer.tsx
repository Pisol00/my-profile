'use client';

import { Mail, Phone, Github, Heart } from 'lucide-react';
import { useLanguage, useTheme } from '@/contexts';
import { profileData } from '@/translations';

// FooterLink Component
type FooterLinkProps = {
  label: string;
  onClick: () => void;
};

const FooterLink = ({ label, onClick }: FooterLinkProps) => (
  <button
    onClick={onClick}
    className="text-gray-500 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors cursor-pointer text-sm sm:text-base py-1.5"
  >
    {label}
  </button>
);

// SocialLink Component
type SocialLinkProps = {
  href: string;
  icon: React.ReactNode;
  label: string;
};

const SocialLink = ({ href, icon, label }: SocialLinkProps) => (
  <a
    href={href}
    aria-label={label}
    target={href.startsWith("http") ? "_blank" : undefined}
    rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
    className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 hover:bg-blue-100 dark:hover:bg-blue-800/50 hover:shadow-md transition-all border border-blue-100 dark:border-blue-800"
  >
    {icon}
  </a>
);

type FooterProps = {
  scrollToSection: (ref: React.RefObject<HTMLElement | null>) => void;
  sections: {
    hero: React.RefObject<HTMLElement | null>;
    skills: React.RefObject<HTMLElement | null>;
    projects: React.RefObject<HTMLElement | null>;
    education: React.RefObject<HTMLElement | null>;
    contact: React.RefObject<HTMLElement | null>;
  };
};

export default function Footer({ scrollToSection, sections }: FooterProps) {
  const { currentLang, t } = useLanguage();

  return (
    <footer className="bg-white dark:bg-gray-900 py-12 sm:py-16 border-t border-blue-100 dark:border-blue-900/30 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -right-40 w-60 sm:w-80 h-60 sm:h-80 rounded-full bg-blue-50 dark:bg-blue-900/20 blur-3xl opacity-70"></div>
        <div className="absolute -bottom-40 -left-40 w-60 sm:w-80 h-60 sm:h-80 rounded-full bg-blue-50 dark:bg-blue-900/20 blur-3xl opacity-70"></div>
      </div>
      
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 relative z-10">
        <div className="flex flex-col items-center justify-center">
          {/* Logo */}
          <div className="mb-6 sm:mb-8">
            <div className="relative h-14 w-14 sm:h-16 sm:w-16 overflow-hidden rounded-xl bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center shadow-md">
              <span className="font-bold text-blue-600 dark:text-blue-400 text-xl sm:text-2xl">P</span>
              <div className="absolute inset-0 bg-blue-50/50 dark:bg-blue-900/20 rounded-xl"></div>
            </div>
          </div>

          {/* Footer Links - Responsive grid for mobile */}
          <div className="flex flex-wrap justify-center gap-4 sm:gap-8 mb-6 sm:mb-8">
            <FooterLink label={t.home} onClick={() => scrollToSection(sections.hero)} />
            <FooterLink label={t.skills} onClick={() => scrollToSection(sections.skills)} />
            <FooterLink label={t.projects} onClick={() => scrollToSection(sections.projects)} />
            <FooterLink label={t.education} onClick={() => scrollToSection(sections.education)} />
            <FooterLink label={t.contact} onClick={() => scrollToSection(sections.contact)} />
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-3 sm:gap-4 mb-8 sm:mb-10">
            <SocialLink 
              href={`mailto:${profileData.email}`} 
              icon={<Mail size={18} className="sm:w-5 sm:h-5" />} 
              label="Email" 
            />
            <SocialLink 
              href={`tel:${profileData.phone}`} 
              icon={<Phone size={18} className="sm:w-5 sm:h-5" />} 
              label="Phone" 
            />
            <SocialLink 
              href={`https://github.com/${profileData.github}`} 
              icon={<Github size={18} className="sm:w-5 sm:h-5" />} 
              label="GitHub" 
            />
          </div>
          
          {/* Divider with gradient */}
          <div className="w-full max-w-xs h-px mb-6 sm:mb-8 bg-gradient-to-r from-transparent via-blue-200 dark:via-blue-800 to-transparent"></div>

          {/* Copyright */}
          <div className="text-center">
            <p className="text-gray-500 dark:text-gray-400 mb-2 text-sm sm:text-base">
              © {new Date().getFullYear()} {t.name}. {t.allRightsReserved}
            </p>
            <p className="text-gray-500 dark:text-gray-400 flex items-center justify-center gap-1 text-xs sm:text-sm">
              {currentLang === "en" 
                ? "Built with" 
                : "สร้างด้วย"} 
              <Heart size={14} className="text-red-500 mx-1" fill="currentColor" /> 
              <span>
                React, Next.js, {currentLang === "en" ? "and" : "และ"} Tailwind CSS
              </span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}