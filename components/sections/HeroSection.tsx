'use client';

import { forwardRef } from 'react';
import Image from 'next/image';
import { Mail, Github, MapPin, Phone, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import AnimatedSection from '@/components/common/AnimatedSection';
import InfoBadge from '@/components/common/InfoBadge';
import { useLanguage } from '@/contexts';
import { profileData, localizedData } from '@/translations';

type HeroSectionProps = {
  animationsEnabled: boolean;
  onScrollToNext: () => void;
};

const HeroSection = forwardRef<HTMLElement, HeroSectionProps>(
  ({ animationsEnabled, onScrollToNext }, ref) => {
    const { currentLang, t } = useLanguage();
    
    // ข้อมูลโปรไฟล์ปัจจุบัน (ตามภาษา)
    const profile = {
      ...profileData,
      name: t.name,
      title: t.title,
      bio: t.bio,
      location: t.location,
      ...localizedData[currentLang]
    };
    
    // แยกชื่อออกเป็นส่วน
    const nameParts = profile.name.split(" ");
    const firstName = nameParts[0] || "";
    const lastName = nameParts.length > 1 ? nameParts[1] : "";

    return (
      <section 
        ref={ref} 
        className="min-h-screen pt-20 sm:pt-24 md:pt-28 pb-12 sm:pb-16 md:pb-20 relative overflow-hidden bg-gradient-to-b from-white to-blue-50 dark:from-gray-900 dark:to-blue-950/30 hero-adjust-height"
      >
        {/* พื้นหลังแบบวงกลมเรืองแสง - รองรับทุกขนาดหน้าจอ */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-70">
          {/* Mobile & Tablet: กลางหน้าจอ, Desktop: ซ้าย-ขวา */}
          <div className="absolute top-1/4 
                         sm:left-1/2 sm:-translate-x-1/2
                         md:left-auto md:translate-x-0 md:-right-20 
                         w-60 sm:w-80 md:w-72 lg:w-80
                         h-60 sm:h-80 md:h-72 lg:h-80
                         rounded-full bg-blue-100 dark:bg-blue-800/30 blur-3xl"></div>
          
          <div className="absolute top-2/3 
                         sm:left-1/2 sm:-translate-x-1/2 
                         md:left-auto md:translate-x-0 md:top-1/3 md:-left-20 
                         w-60 sm:w-80 md:w-72 lg:w-80
                         h-60 sm:h-80 md:h-72 lg:h-80
                         rounded-full bg-blue-200/50 dark:bg-blue-800/20 blur-3xl"></div>
          
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

        <div className="container mx-auto px-5 sm:px-6 relative z-10">
          {/* แยกการแสดงผลระหว่างมือถือ/แท็บเล็ต กับ desktop */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between md:gap-12">
            
            {/* ส่วนรูปโปรไฟล์ - บนมือถือและแท็บเล็ตวางด้านบน, บน desktop วางด้านขวา */}
            <div className="md:order-2 md:w-2/5 mb-8 md:mb-0 flex justify-center">
              <AnimatedSection
                animation="fade-in"
                delay={300}
                disabled={!animationsEnabled}
                className="relative"
              >
                {/* Background decoration for image */}
                <div className="absolute -inset-3 sm:-inset-4 rounded-full bg-blue-100 dark:bg-blue-900/30 blur-md"></div>
                
                {/* Border decoration */}
                <div className="absolute -inset-1 rounded-full border-2 border-blue-200 dark:border-blue-800"></div>
                
                {/* Main Image Container - responsive sizes */}
                <div className="relative w-44 h-44 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-80 lg:h-80 overflow-hidden rounded-full border-4 border-white dark:border-gray-800 shadow-xl">
                  <Image
                    src="/profile-image.jpg"
                    alt={profile.name}
                    fill
                    sizes="(max-width: 640px) 176px, (max-width: 768px) 224px, (max-width: 1024px) 256px, 320px"
                    priority
                    className="object-cover hover:scale-105 transition-transform duration-700"
                    style={{ objectPosition: "center top" }}
                  />
                </div>
                
                {/* Floating decoration elements - responsive sizes */}
                <div className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 w-14 h-14 sm:w-16 sm:h-16 md:w-18 md:h-18 lg:w-20 lg:h-20 bg-white dark:bg-gray-800 rounded-full border border-blue-200 dark:border-blue-800 shadow-md flex items-center justify-center animate-float">
                  <span className="text-xl sm:text-2xl md:text-2xl lg:text-3xl">👨‍💻</span>
                </div>
                
                <div className="absolute -bottom-3 -left-3 sm:-bottom-4 sm:-left-4 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 bg-white dark:bg-gray-800 rounded-full border border-blue-200 dark:border-blue-800 shadow-md flex items-center justify-center animate-float" style={{animationDelay: "1s"}}>
                  <span className="text-lg sm:text-xl md:text-xl lg:text-2xl">🚀</span>
                </div>
                
                {/* แถบสถานะ Mobile Only - คำว่า "Available for Internship" */}
                <div className="md:hidden absolute -bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap">
                  {/* <span className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-300 text-xs font-medium border border-blue-200 dark:border-blue-800 gap-1.5 shadow-md">
                    <span className="relative flex h-1.5 w-1.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-blue-600"></span>
                    </span>
                    {currentLang === "en"
                      ? "Available for Internship"
                      : "พร้อมรับการฝึกงาน"}
                  </span> */}
                </div>
              </AnimatedSection>
            </div>

            {/* ส่วนเนื้อหา - บนมือถือและแท็บเล็ตวางด้านล่าง, บน desktop วางด้านซ้าย */}
            <div className="md:order-1 md:w-3/5">
              <AnimatedSection
                animation="fade-in"
                disabled={!animationsEnabled}
                className="text-center md:text-left"
              >
                {/* Status Badge - Desktop Only */}
                <div className="hidden md:inline-block mb-6">
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

                {/* ชื่อและตำแหน่ง */}
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-2 sm:mb-3 md:mb-4 tracking-tight">
                  <span className="block leading-tight">
                    {firstName}
                  </span>
                  <span className="block text-blue-600 dark:text-blue-400 leading-tight">
                    {lastName}
                  </span>
                </h1>

                <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3 sm:mb-4 md:mb-6 text-gray-600 dark:text-gray-300">
                  {profile.title}
                </h2>

                {/* Bio */}
                <p className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-300 mb-6 md:mb-8 max-w-2xl mx-auto md:mx-0 leading-relaxed">
                  {profile.bio}
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6 md:mb-8 justify-center md:justify-start">
                  <Button
                    asChild
                    size="lg"
                    className="bg-blue-600 hover:bg-blue-700 text-white border-none gap-2 shadow-lg shadow-blue-200 dark:shadow-blue-900/20 w-full sm:w-auto"
                  >
                    <Link href={`mailto:${profile.email}`}>
                      <Mail size={16} className="sm:w-[18px] sm:h-[18px]" />
                      {t.contactMe}
                    </Link>
                  </Button>
                  
                  <Button
                    variant="outline"
                    asChild
                    size="lg"
                    className="border-blue-200 dark:border-blue-800 hover:bg-blue-50 dark:hover:bg-blue-900/20 text-blue-600 dark:text-blue-400 gap-2 w-full sm:w-auto"
                  >
                    <Link
                      href={`https://github.com/${profile.github}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github size={16} className="sm:w-[18px] sm:h-[18px]" />
                      GitHub
                    </Link>
                  </Button>
                </div>

                {/* Quick Info - ปรับแต่งการแสดงผลตามหน้าจอ */}
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 mb-6 md:mb-0 justify-center md:justify-start">
                  {/* Mobile - Card Style */}
                  <div className="sm:hidden grid grid-cols-1 gap-3 w-full">
                    <div className="flex items-center justify-center gap-2 p-3 bg-white/80 dark:bg-gray-800/80 rounded-lg shadow-sm border border-blue-100 dark:border-blue-900/30">
                      <MapPin size={16} className="text-blue-500 flex-shrink-0" />
                      <span className="text-sm">{profile.location}</span>
                    </div>
                    
                    <div className="flex items-center justify-center gap-2 p-3 bg-white/80 dark:bg-gray-800/80 rounded-lg shadow-sm border border-blue-100 dark:border-blue-900/30">
                      <Phone size={16} className="text-blue-500 flex-shrink-0" />
                      <span className="text-sm">{profileData.phone}</span>
                    </div>
                    
                    <div className="flex items-center justify-center gap-2 p-3 bg-white/80 dark:bg-gray-800/80 rounded-lg shadow-sm border border-blue-100 dark:border-blue-900/30">
                      <Mail size={16} className="text-blue-500 flex-shrink-0" />
                      <span className="text-sm truncate">{profileData.email}</span>
                    </div>
                  </div>
                  
                  {/* Tablet & Desktop - Badge Style */}
                  <div className="hidden sm:flex flex-wrap gap-3 justify-center md:justify-start">
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
                </div>
              </AnimatedSection>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="flex justify-center mt-8 md:mt-12">
            <button
              onClick={onScrollToNext}
              aria-label="Scroll to skills section"
              className="cursor-pointer bg-white dark:bg-gray-800 p-2.5 sm:p-3 rounded-full border border-blue-200 dark:border-blue-800 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all shadow-md animate-bounce-slow"
            >
              <ChevronDown size={20} className="sm:w-6 sm:h-6 text-blue-600 dark:text-blue-400" />
            </button>
          </div>
        </div>
      </section>
    );
  }
);

HeroSection.displayName = 'HeroSection';

export default HeroSection;