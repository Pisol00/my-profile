'use client';

import { useState, useEffect, useRef } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/sections/HeroSection';
import SkillsSection from '@/components/sections/SkillsSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import EducationSection from '@/components/sections/EducationSection';
import ContactSection from '@/components/sections/ContactSection';
import {useScrollToSection} from '@/hooks';

export default function HomePage() {
  const [isClient, setIsClient] = useState(false);
  const [animationsEnabled, setAnimationsEnabled] = useState(true);

  // ใช้ custom hook แทนการเขียนฟังก์ชันในไฟล์นี้
  const scrollToSection = useScrollToSection();

  // Refs สำหรับแต่ละส่วน
  const heroRef = useRef<HTMLElement>(null);
  const skillsRef = useRef<HTMLElement>(null);
  const projectsRef = useRef<HTMLElement>(null);
  const educationRef = useRef<HTMLElement>(null);
  const contactRef = useRef<HTMLElement>(null);

  // รวมทุก ref ไว้ใน object เดียว สำหรับส่งให้ Navbar และ Footer
  const sections = {
    hero: heroRef,
    skills: skillsRef,
    projects: projectsRef,
    education: educationRef,
    contact: contactRef,
  };

  // ตรวจสอบอุปกรณ์และตั้งค่าเริ่มต้น
  useEffect(() => {
    setIsClient(true);

    // ตรวจสอบว่าต้องการ animation หรือไม่
    const checkPerformance = () => {
      const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
      setAnimationsEnabled(!mediaQuery.matches);
      
      // ติดตามการเปลี่ยนแปลงการตั้งค่า reduced motion
      mediaQuery.addEventListener('change', (e) => {
        setAnimationsEnabled(!e.matches);
      });
      
      return () => {
        mediaQuery.removeEventListener('change', (e) => {
          setAnimationsEnabled(!e.matches);
        });
      };
    };

    checkPerformance();
  }, []);

  if (!isClient) {
    // Server-side หรือก่อน hydration
    return null;
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Navbar - fixed */}
      <Navbar 
        scrollToSection={scrollToSection} 
        sections={sections} 
      />

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
      <Footer 
        scrollToSection={scrollToSection} 
        sections={sections} 
      />
    </div>
  );
}