'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { Mail, Github, MapPin, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import AnimatedSection from '@/components/AnimatedSection';
import InfoBadge from '@/components/common/InfoBadge';
import { useLanguage } from '@/context/LanguageContext';
import { profileData } from '@/translations';

type HeroSectionProps = {
  animationsEnabled: boolean;
  onScrollToNext: () => void;
};

export default function HeroSection({ animationsEnabled, onScrollToNext }: HeroSectionProps) {
  const { currentLang, t } = useLanguage();
  
  // ข้อมูลโปรไฟล์ปัจจุบัน (ตามภาษา)
  const profile = {
    ...profileData,
    name: currentLang === "en" ? profileData.name : t.name,
    title: currentLang === "en" ? profileData.title : t.title,
    bio: currentLang === "en" ? profileData.bio : t.bio,
    location: currentLang === "en" ? profileData.location : t.location,
  };

  return (
    <section className="relative min-h-screen pt-28 pb-20 overflow-hidden">
      {/* Abstract Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 -left-56 w-96 h-96 rounded-full bg-primary/10 blur-3xl"></div>
        <div className="absolute top-1/3 -right-56 w-96 h-96 rounded-full bg-primary/5 blur-3xl"></div>
        <div className="absolute bottom-0 left-1/3 w-96 h-96 rounded-full bg-primary/5 blur-3xl transform rotate-45"></div>
      </div>

      <div className="container mx-auto max-w-7xl px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          {/* Content Side */}
          <AnimatedSection
            animation="slide-up"
            className="lg:w-3/5 text-center lg:text-left"
            disabled={!animationsEnabled}
          >
            {/* Status Badge */}
            <div className="relative inline-block mb-6">
              <span className="animate-pulse absolute inset-0 rounded-full bg-primary/20 blur-md"></span>
              <span className="relative inline-flex items-center px-4 py-1.5 rounded-full bg-background/80 text-primary text-sm font-medium border border-primary/20 backdrop-blur-sm gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                {currentLang === "en"
                  ? "Available for Internship"
                  : "พร้อมรับการฝึกงาน"}
              </span>
            </div>

            {/* Name and Title */}
            <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight">
              <span className="block leading-tight">
                {profile.name.split(" ")[0]}
              </span>
              <span className="block text-primary leading-tight">
                {profile.name.split(" ")[1]}
              </span>
            </h1>

            <h2 className="text-xl md:text-2xl font-semibold mb-6 text-muted-foreground">
              {profile.title}
            </h2>

            {/* Bio */}
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl leading-relaxed">
              {profile.bio}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <Button
                asChild
                size="lg"
                className="gap-2 bg-primary hover:bg-primary/90 text-white rounded-lg shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all"
              >
                <a href={`mailto:${profile.email}`}>
                  <Mail size={18} />
                  {t.contactMe}
                </a>
              </Button>
              <Button
                variant="outline"
                asChild
                size="lg"
                className="gap-2 border-primary/20 hover:bg-primary/5 hover:border-primary/30 rounded-lg transition-all"
              >
                <a
                  href={`https://github.com/${profile.github}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github size={18} />
                  GitHub
                </a>
              </Button>
            </div>

            {/* Quick Info */}
            <div className="flex flex-wrap gap-3 mt-8 justify-center lg:justify-start">
              <InfoBadge icon={<MapPin size={14} />} text={profile.location} />
              <InfoBadge icon={<Phone size={14} />} text={profileData.phone} />
              <InfoBadge
                icon={<Mail size={14} />}
                text={profileData.email}
              />
            </div>
          </AnimatedSection>

          {/* Profile Image Side */}
          <AnimatedSection
            animation="fade-in"
            delay={300}
            className="lg:w-2/5 flex justify-center"
            disabled={!animationsEnabled}
          >
            <div className="relative">
              {/* Main Image Container */}
              <div className="relative w-72 h-72 md:w-80 md:h-80 overflow-hidden rounded-2xl border-4 border-background shadow-xl">
                <Image
                  src={profile.avatar}
                  alt={profile.name}
                  fill
                  sizes="(max-width: 768px) 288px, 320px"
                  priority
                  className="object-cover hover:scale-105 transition-transform duration-700"
                  style={{ objectPosition: "center top" }}
                />
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* Scroll Indicator */}
        <div className="flex justify-center mt-16">
          <button
            onClick={onScrollToNext}
            aria-label="Scroll to skills section"
            className="group relative bg-background/50 p-3 rounded-full border border-primary/10 backdrop-blur-sm hover:bg-primary/5 transition-all hover:shadow-md"
          >
            <div className="w-8 h-12 rounded-full border-2 border-primary/30 flex items-start justify-center p-1.5">
              <div className="w-1 h-3 bg-primary/50 rounded-full animate-bounce-slow group-hover:bg-primary transition-colors"></div>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
}