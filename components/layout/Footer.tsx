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
    className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors cursor-pointer text-sm sm:text-base py-1.5"
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
    className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gray-50 dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 hover:shadow-md transition-all border border-gray-100 dark:border-gray-700"
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
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-black py-12 sm:py-16 border-t border-gray-100 dark:border-gray-800 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -right-40 w-60 sm:w-80 h-60 sm:h-80 rounded-full bg-gray-50 dark:bg-gray-900/20 blur-3xl opacity-70"></div>
        <div className="absolute -bottom-40 -left-40 w-60 sm:w-80 h-60 sm:h-80 rounded-full bg-gray-50 dark:bg-gray-900/20 blur-3xl opacity-70"></div>
      </div>
      
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 relative z-10">
        <div className="flex flex-col items-center justify-center">
          {/* Logo */}
          <div className="mb-6 sm:mb-8">
            <div className="relative h-14 w-14 sm:h-16 sm:w-16 overflow-hidden rounded-xl bg-gray-100 dark:bg-gray-800 flex items-center justify-center shadow-md">
              <span className="font-bold text-gray-600 dark:text-gray-400 text-xl sm:text-2xl">P</span>
              <div className="absolute inset-0 bg-gray-50/50 dark:bg-gray-800/20 rounded-xl"></div>
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
              label={t.email || "Email"} 
            />
            <SocialLink 
              href={`tel:${profileData.phone}`} 
              icon={<Phone size={18} className="sm:w-5 sm:h-5" />} 
              label={t.phone || "Phone"} 
            />
            <SocialLink 
              href={`https://github.com/${profileData.github}`} 
              icon={<Github size={18} className="sm:w-5 sm:h-5" />} 
              label="GitHub" 
            />
          </div>
          
          {/* Divider with gradient */}
          <div className="w-full max-w-xs h-px mb-6 sm:mb-8 bg-gradient-to-r from-transparent via-gray-200 dark:via-gray-700 to-transparent"></div>

          {/* Copyright */}
          <div className="text-center">
            <p className="text-gray-500 dark:text-gray-400 mb-2 text-sm sm:text-base">
              © {currentYear} {t.name}. {t.allRightsReserved}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}