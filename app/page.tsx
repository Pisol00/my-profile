'use client';

import { useState, useEffect, useRef } from 'react';

// Components
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/sections/HeroSection';
import SkillsSection from '@/components/sections/SkillsSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import EducationSection from '@/components/sections/EducationSection';
import ContactSection from '@/components/sections/ContactSection';

export default function ProfilePage() {
  const [isClient, setIsClient] = useState(false);
  const [animationsEnabled, setAnimationsEnabled] = useState(true);

  // Refs สำหรับแต่ละส่วน
  const heroRef = useRef<HTMLElement>(null);
  const skillsRef = useRef<HTMLElement>(null);
  const projectsRef = useRef<HTMLElement>(null);
  const educationRef = useRef<HTMLElement>(null);
  const contactRef = useRef<HTMLElement>(null);

  // ตรวจสอบอุปกรณ์และตั้งค่าเริ่มต้น
  useEffect(() => {
    setIsClient(true);

    // ตรวจสอบว่าต้องการ animation หรือไม่
    const checkPerformance = () => {
      const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
      setAnimationsEnabled(!mediaQuery.matches);
    };

    checkPerformance();
  }, []);

  // เลื่อนไปยังส่วนที่ต้องการ
  const scrollToSection = (ref: React.RefObject<HTMLElement>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // รวมทุก ref ไว้ใน object เดียว สำหรับส่งให้ Navbar และ Footer
  const sections = {
    hero: heroRef,
    skills: skillsRef,
    projects: projectsRef,
    education: educationRef,
    contact: contactRef,
  };

  if (!isClient) {
    // Server-side หรือก่อน hydration
    return null;
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Navbar */}
      <Navbar scrollToSection={scrollToSection} sections={sections} />

      {/* Hero Section */}
      <HeroSection 
        ref={heroRef}
        animationsEnabled={animationsEnabled} 
        onScrollToNext={() => scrollToSection(skillsRef)} 
      />

      {/* Skills Section */}
      <SkillsSection 
        ref={skillsRef}
        animationsEnabled={animationsEnabled} 
      />

      {/* Projects Section */}
      <ProjectsSection 
        ref={projectsRef}
        animationsEnabled={animationsEnabled} 
      />

      {/* Education Section */}
      <EducationSection 
        ref={educationRef}
        animationsEnabled={animationsEnabled} 
      />

      {/* Contact Section */}
      <ContactSection 
        ref={contactRef}
        animationsEnabled={animationsEnabled} 
      />

      {/* Footer */}
      <Footer scrollToSection={scrollToSection} sections={sections} />

      {/* CSS Utility Styles ที่จำเป็น */}
      <style jsx>{`
        /* Glass card effect */
        .glass-card {
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(10px);
        }
        
        .dark .glass-card {
          background: rgba(20, 20, 70, 0.1);
        }

        /* Slow bounce animation */
        .animate-bounce-slow {
          animation: bounce 2s infinite;
        }

        @keyframes bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(4px);
          }
        }
      `}</style>
    </div>
  );
}