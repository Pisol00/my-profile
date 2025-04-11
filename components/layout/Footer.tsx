'use client';

import { Mail, Phone, Github } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { profileData } from '@/translations';

// FooterLink Component
type FooterLinkProps = {
  label: string;
  onClick: () => void;
};

const FooterLink = ({ label, onClick }: FooterLinkProps) => (
  <button
    onClick={onClick}
    className="text-muted-foreground hover:text-primary transition-colors"
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
    className="w-10 h-10 rounded-full bg-background/50 backdrop-blur-sm border border-border/30 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 hover:bg-primary/5 transition-all"
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
    <footer className="bg-card py-16 border-t border-border/30">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="flex flex-col items-center justify-center">
          {/* Logo */}
          <div className="mb-8">
            <div className="relative h-12 w-12 overflow-hidden rounded-xl bg-primary/10 flex items-center justify-center">
              <span className="font-bold text-primary text-2xl">P</span>
              <div className="absolute inset-0 bg-primary/5 rounded-xl"></div>
            </div>
          </div>

          {/* Footer Links */}
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <FooterLink label={t.home} onClick={() => scrollToSection(sections.hero)} />
            <FooterLink label={t.skills} onClick={() => scrollToSection(sections.skills)} />
            <FooterLink label={t.projects} onClick={() => scrollToSection(sections.projects)} />
            <FooterLink label={t.education} onClick={() => scrollToSection(sections.education)} />
            <FooterLink label={t.contact} onClick={() => scrollToSection(sections.contact)} />
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-4 mb-8">
            <SocialLink href={`mailto:${profileData.email}`} icon={<Mail size={20} />} label="Email" />
            <SocialLink href={`tel:${profileData.phone}`} icon={<Phone size={20} />} label="Phone" />
            <SocialLink href={`https://github.com/${profileData.github}`} icon={<Github size={20} />} label="GitHub" />
          </div>

          {/* Copyright */}
          <div className="text-sm text-muted-foreground text-center">
            <p>© {new Date().getFullYear()} {currentLang === "en" ? profileData.name : t.name}. {t.allRightsReserved}</p>
            <p className="mt-2">
              {currentLang === "en" 
                ? "Built with React, Next.js, and Tailwind CSS" 
                : "สร้างด้วย React, Next.js และ Tailwind CSS"}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}