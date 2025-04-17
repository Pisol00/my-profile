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
    className="text-gray-500 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors cursor-pointer"
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
    className="w-10 h-10 rounded-full bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 hover:bg-blue-100 dark:hover:bg-blue-800/50 hover:shadow-md transition-all border border-blue-100 dark:border-blue-800"
  >
    {icon}
  </a>
);

type FooterProps = {
  scrollToSection: (ref: React.RefObject<HTMLElement>) => void;
  sections: {
    hero: React.RefObject<HTMLElement>;
    skills: React.RefObject<HTMLElement>;
    projects: React.RefObject<HTMLElement>;
    education: React.RefObject<HTMLElement>;
    contact: React.RefObject<HTMLElement>;
  };
};

export default function Footer({ scrollToSection, sections }: FooterProps) {
  const { currentLang, t } = useLanguage();

  return (
    <footer className="bg-white dark:bg-gray-900 py-16 border-t border-blue-100 dark:border-blue-900/30 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-blue-50 dark:bg-blue-900/20 blur-3xl opacity-70"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-blue-50 dark:bg-blue-900/20 blur-3xl opacity-70"></div>
      </div>
      
      <div className="container mx-auto max-w-7xl px-4 relative z-10">
        <div className="flex flex-col items-center justify-center">
          {/* Logo */}
          <div className="mb-8">
            <div className="relative h-16 w-16 overflow-hidden rounded-xl bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center shadow-md">
              <span className="font-bold text-blue-600 dark:text-blue-400 text-2xl">P</span>
              <div className="absolute inset-0 bg-blue-50/50 dark:bg-blue-900/20 rounded-xl"></div>
            </div>
          </div>

          {/* Footer Links */}
          <div className="flex flex-wrap justify-center gap-8 mb-8">
            <FooterLink label={t.home} onClick={() => scrollToSection(sections.hero)} />
            <FooterLink label={t.skills} onClick={() => scrollToSection(sections.skills)} />
            <FooterLink label={t.projects} onClick={() => scrollToSection(sections.projects)} />
            <FooterLink label={t.education} onClick={() => scrollToSection(sections.education)} />
            <FooterLink label={t.contact} onClick={() => scrollToSection(sections.contact)} />
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-4 mb-10">
            <SocialLink href={`mailto:${profileData.email}`} icon={<Mail size={20} />} label="Email" />
            <SocialLink href={`tel:${profileData.phone}`} icon={<Phone size={20} />} label="Phone" />
            <SocialLink href={`https://github.com/${profileData.github}`} icon={<Github size={20} />} label="GitHub" />
          </div>
          
          {/* Divider with gradient */}
          <div className="w-full max-w-xs h-px mb-8 bg-gradient-to-r from-transparent via-blue-200 dark:via-blue-800 to-transparent"></div>

          {/* Copyright */}
          <div className="text-center">
            <p className="text-gray-500 dark:text-gray-400 mb-2">
              © {new Date().getFullYear()} {currentLang === "en" ? profileData.name : t.name}. {t.allRightsReserved}
            </p>
            <p className="text-gray-500 dark:text-gray-400 flex items-center justify-center gap-1">
              {currentLang === "en" 
                ? "Built with" 
                : "สร้างด้วย"} 
              <Heart size={16} className="text-red-500 mx-1" fill="currentColor" /> 
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