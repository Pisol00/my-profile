'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { Mail, Github, MapPin, Phone, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import AnimatedSection from '@/components/common/AnimatedSection';
import InfoBadge from '@/components/common/InfoBadge';
import { useLanguage } from '@/contexts';
import { profileData, localizedData } from '@/translations';

type HeroSectionProps = {
  animationsEnabled: boolean;
  onScrollToNext: () => void;
};

export default function HeroSection({ animationsEnabled, onScrollToNext }: HeroSectionProps) {
  const { currentLang, t } = useLanguage();
  
  // ข้อมูลโปรไฟล์ปัจจุบัน (ตามภาษา) - แก้ไขการดึงข้อมูล
  const profile = {
    ...profileData,
    name: t.name,
    title: t.title,
    bio: t.bio,
    location: t.location,
    // ใช้ข้อมูลจาก localizedData ที่เราสร้างขึ้นใหม่
    ...localizedData[currentLang]
  };
  
  // แยกชื่อออกเป็นส่วน ๆ อย่างปลอดภัย
  const nameParts = profile.name.split(" ");
  const firstName = nameParts[0] || "";
  const lastName = nameParts.length > 1 ? nameParts[1] : "";

  return (
    <section className="min-h-screen pt-24 pb-20 relative overflow-hidden bg-gradient-to-b from-white to-blue-50 dark:from-gray-900 dark:to-blue-950/30">
      {/* Decorative Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-70">
        {/* Blue gradient circles */}
        <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-blue-100 dark:bg-blue-800/30 blur-3xl"></div>
        <div className="absolute top-1/3 -left-20 w-72 h-72 rounded-full bg-blue-200/50 dark:bg-blue-800/20 blur-3xl"></div>
        
        {/* Grid pattern with dots */}
        <div className="absolute inset-0 opacity-20">
          <svg width="100%" height="100%">
            <pattern id="dots" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1" fill="currentColor" className="text-blue-400 dark:text-blue-300" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#dots)" />
          </svg>
        </div>
      </div>

      <div className="container mx-auto max-w-7xl px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          {/* Content Side */}
          <AnimatedSection
            animation="fade-in"
            className="lg:w-3/5 text-center lg:text-left"
            disabled={!animationsEnabled}
          >
            {/* Status Badge */}
            <div className="mb-6 inline-block">
              <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-300 text-sm font-medium border border-blue-200 dark:border-blue-800 gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
                </span>
                {currentLang === "en"
                  ? "Available for Internship"
                  : "พร้อมรับการฝึกงาน"}
              </span>
            </div>

            {/* Name and Title - แก้ไขการแสดงชื่อ */}
            <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight">
              <span className="block leading-tight">
                {firstName}
              </span>
              <span className="block text-blue-600 dark:text-blue-400 leading-tight">
                {lastName}
              </span>
            </h1>

            <h2 className="text-xl md:text-2xl font-semibold mb-6 text-gray-600 dark:text-gray-300">
              {profile.title}
            </h2>

            {/* Bio */}
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl leading-relaxed">
              {profile.bio}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <Button
                asChild
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white border-none gap-2 shadow-lg shadow-blue-200 dark:shadow-blue-900/20"
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
                className="border-blue-200 dark:border-blue-800 hover:bg-blue-50 dark:hover:bg-blue-900/20 text-blue-600 dark:text-blue-400 gap-2"
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
              <InfoBadge 
                icon={<MapPin size={14} className="text-blue-500" />} 
                text={profile.location} 
              />
              <InfoBadge 
                icon={<Phone size={14} className="text-blue-500" />} 
                text={profileData.phone} 
              />
              <InfoBadge
                icon={<Mail size={14} className="text-blue-500" />}
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
              {/* Background decoration for image */}
              <div className="absolute -inset-4 rounded-full bg-blue-100 dark:bg-blue-900/30 blur-md"></div>
              
              {/* Border decoration */}
              <div className="absolute -inset-1 rounded-full border-2 border-blue-200 dark:border-blue-800"></div>
              
              {/* Main Image Container */}
              <div className="relative w-72 h-72 md:w-80 md:h-80 overflow-hidden rounded-full border-4 border-white dark:border-gray-800 shadow-xl">
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
              
              {/* Floating decoration elements */}
              <div className="absolute -top-6 -right-6 w-20 h-20 bg-white dark:bg-gray-800 rounded-full border border-blue-200 dark:border-blue-800 shadow-md flex items-center justify-center animate-float">
                <span className="text-3xl">👨‍💻</span>
              </div>
              
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-white dark:bg-gray-800 rounded-full border border-blue-200 dark:border-blue-800 shadow-md flex items-center justify-center animate-float" style={{animationDelay: "1s"}}>
                <span className="text-2xl">🚀</span>
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* Scroll Indicator */}
        <div className="flex justify-center mt-16">
          <button
            onClick={onScrollToNext}
            aria-label="Scroll to skills section"
            className="group bg-white dark:bg-gray-800 p-3 rounded-full border border-blue-200 dark:border-blue-800 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all shadow-md"
          >
            <ChevronDown size={24} className="text-blue-600 dark:text-blue-400 animate-bounce-slow" />
          </button>
        </div>
      </div>
    </section>
  );
}