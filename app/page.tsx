"use client";
import Image from "next/image";
import { useState, useEffect, useRef, useMemo, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Github,
  Mail,
  Linkedin,
  Globe,
  MapPin,
  Briefcase,
  GraduationCap,
  User,
  Languages,
  Phone,
  Home,
  ChevronDown,
  Menu,
  X,
  MoonStar,
  Sun,
  ExternalLink,
  MessageSquare,
  CheckCircle2,
  Code2,
  Layout,
  Database,
  Wrench,
  Star,
  Terminal,
} from "lucide-react";
import {
  Language,
  translations,
  profileData,
  thProjects,
  thEducation,
} from "@/translations";
import AnimatedSection from "@/components/AnimatedSection";
import "./animations.css";
import "./theme.css";

export default function ProfilePage() {
  const [currentLang, setCurrentLang] = useState<Language>("en");
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
  const [isClient, setIsClient] = useState(false);
  const [animationsEnabled, setAnimationsEnabled] = useState(true);
  const [activeTab, setActiveTab] = useState("all"); // For projects filtering

  // Refs for each section for smooth scrolling
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
      const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
      setAnimationsEnabled(!mediaQuery.matches);
    };

    checkPerformance();

    // ตั้งค่าโหมดสีและภาษา
    const savedLang =
      (localStorage.getItem("preferredLanguage") as Language) || "en";
    const savedTheme = localStorage.getItem("darkMode") === "true";

    setCurrentLang(savedLang);
    setIsDarkMode(savedTheme);

    // Change lang attribute based on saved language
    document.documentElement.lang = savedLang;

    // Apply dark mode if saved
    if (savedTheme) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const t = translations[currentLang];

  // Get the correct data based on language
  const profile = useMemo(
    () => ({
      ...profileData,
      name: currentLang === "en" ? profileData.name : t.name,
      title: currentLang === "en" ? profileData.title : t.title,
      bio: currentLang === "en" ? profileData.bio : t.bio,
      location: currentLang === "en" ? profileData.location : t.location,
      projects: currentLang === "en" ? profileData.projects : thProjects,
      education: currentLang === "en" ? profileData.education : thEducation,
    }),
    [currentLang, t]
  );

  const toggleLanguage = useCallback(() => {
    const newLang = currentLang === "en" ? "th" : "en";
    setCurrentLang(newLang);
    localStorage.setItem("preferredLanguage", newLang);

    // Change lang attribute when toggling language
    document.documentElement.lang = newLang;
  }, [currentLang]);

  const toggleDarkMode = useCallback(() => {
    const newDarkMode = !isDarkMode;
    setIsDarkMode(newDarkMode);
    localStorage.setItem("darkMode", String(newDarkMode));

    if (newDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  const scrollToSection = useCallback((ref: React.RefObject<HTMLElement>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  }, []);

  // Filter projects by technology
  const filteredProjects = useMemo(() => {
    if (activeTab === "all") return profile.projects;
    return profile.projects.filter(project => 
      project.technologies.some(tech => 
        tech.toLowerCase().includes(activeTab.toLowerCase())
      )
    );
  }, [profile.projects, activeTab]);

  // Get unique technology categories
  const projectCategories = useMemo(() => {
    const categories = new Set<string>();
    categories.add("all");
    
    profile.projects.forEach(project => {
      project.technologies.forEach(tech => {
        if (tech.includes("React")) categories.add("React");
        else if (tech.includes("Node")) categories.add("Node.js");
        else if (tech.includes("Django") || tech.includes("Flask")) categories.add("Python");
        else if (tech.includes("Java")) categories.add("Java");
        else if (tech.includes("Docker") || tech.includes("AWS") || tech.includes("Cloud")) categories.add("DevOps");
      });
    });
    
    return Array.from(categories);
  }, [profile.projects]);

  if (!isClient) {
    // Server-side or before hydration
    return null;
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation Bar - Enhanced with glassmorphism */}
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
              onClick={() => scrollToSection(heroRef)}
              icon={<Home size={14} />}
            />
            <NavItem
              label={t.skills}
              onClick={() => scrollToSection(skillsRef)}
              icon={<Star size={14} />}
            />
            <NavItem
              label={t.projects}
              onClick={() => scrollToSection(projectsRef)}
              icon={<Code2 size={14} />}
            />
            <NavItem
              label={t.education}
              onClick={() => scrollToSection(educationRef)}
              icon={<GraduationCap size={14} />}
            />
            <NavItem
              label={t.contact}
              onClick={() => scrollToSection(contactRef)}
              icon={<MessageSquare size={14} />}
            />
          </div>

          <div className="flex items-center gap-3">
            <Button
              variant="outline"
              size="icon"
              onClick={toggleDarkMode}
              className="rounded-full border-border/50 hover:bg-primary/5 transition-all"
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
              className="rounded-full border-border/50 hover:bg-primary/5 transition-all font-medium gap-2"
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

        {/* Mobile menu - Redesigned */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 backdrop-blur-xl bg-background/90 py-4 px-4 border-b border-border/30">
            <div className="flex flex-col space-y-1">
              <MobileNavItem
                label={t.home}
                onClick={() => scrollToSection(heroRef)}
                icon={<Home size={16} />}
              />
              <MobileNavItem
                label={t.skills}
                onClick={() => scrollToSection(skillsRef)}
                icon={<Star size={16} />}
              />
              <MobileNavItem
                label={t.projects}
                onClick={() => scrollToSection(projectsRef)}
                icon={<Code2 size={16} />}
              />
              <MobileNavItem
                label={t.education}
                onClick={() => scrollToSection(educationRef)}
                icon={<GraduationCap size={16} />}
              />
              <MobileNavItem
                label={t.contact}
                onClick={() => scrollToSection(contactRef)}
                icon={<MessageSquare size={16} />}
              />
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section - Redesigned */}
      <section
        ref={heroRef}
        className="relative min-h-screen pt-28 pb-20 overflow-hidden"
      >
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
              onClick={() => scrollToSection(skillsRef)}
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

      {/* Skills Section - Redesigned */}
      <section 
        ref={skillsRef} 
        className="py-24 relative overflow-hidden"
        style={{
          background: `linear-gradient(135deg, 
            var(--background) 0%, 
            color-mix(in oklch, var(--primary), var(--background) 90%) 100%)`
        }}
      >
        {/* Decorative background elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
          <div className="absolute top-10 left-10 w-64 h-64 rounded-full bg-primary/30 blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-80 h-80 rounded-full bg-primary/20 blur-3xl"></div>
        </div>

        <div className="container mx-auto max-w-7xl px-4 relative z-10">
          <AnimatedSection 
            animation="fade-in" 
            disabled={!animationsEnabled} 
            className="mb-16"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/20 text-primary text-sm font-semibold mb-4 shadow-sm border border-primary/10 backdrop-blur-sm mx-auto text-center block w-fit">
              {currentLang === "en" ? "Technology Stack" : "เทคโนโลยีที่ใช้"}
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-6">
              {t.technicalSkills}
            </h2>
            <p className="text-center text-muted-foreground max-w-2xl mx-auto text-lg">
              {currentLang === "en"
                ? "My technical skills and areas of expertise that I've developed through education and projects"
                : "ทักษะทางเทคนิคและความเชี่ยวชาญของฉันที่ได้พัฒนาผ่านการศึกษาและโครงการต่างๆ"}
            </p>
          </AnimatedSection>

          {/* Main technical skills */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {/* Frontend Development */}
            <AnimatedSection
              delay={100}
              animation="zoom-in"
              disabled={!animationsEnabled}
            >
              <div className="glass-card p-8 rounded-xl transition-all duration-300 h-full flex flex-col border border-white/10 hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary ring-1 ring-primary/20">
                    <Layout size={24} />
                  </div>
                  <h3 className="text-xl font-bold gradient-text">{t.frontend}</h3>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {profileData.skills.frontend.map((skill) => (
                    <Badge 
                      key={skill} 
                      variant="secondary"
                      className="py-1.5 px-3 text-sm transition-all duration-300 hover:bg-primary/10 hover:text-primary cursor-default"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>

                <div className="mt-auto pt-6 border-t border-border/30">
                  <div className="text-sm text-muted-foreground">
                    {currentLang === "en" 
                      ? "Creating responsive and interactive user interfaces" 
                      : "สร้างส่วนติดต่อผู้ใช้ที่ตอบสนองและโต้ตอบได้"}
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Backend Development */}
            <AnimatedSection
              delay={150}
              animation="zoom-in"
              disabled={!animationsEnabled}
            >
              <div className="glass-card p-8 rounded-xl transition-all duration-300 h-full flex flex-col border border-white/10 hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary ring-1 ring-primary/20">
                    <Database size={24} />
                  </div>
                  <h3 className="text-xl font-bold gradient-text">{t.backend}</h3>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {profileData.skills.backend.map((skill) => (
                    <Badge 
                      key={skill} 
                      variant="secondary"
                      className="py-1.5 px-3 text-sm transition-all duration-300 hover:bg-primary/10 hover:text-primary cursor-default"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>

                <div className="mt-auto pt-6 border-t border-border/30">
                  <div className="text-sm text-muted-foreground">
                    {currentLang === "en" 
                      ? "Building robust server-side applications and APIs" 
                      : "สร้างแอปพลิเคชันฝั่งเซิร์ฟเวอร์และ API ที่แข็งแกร่ง"}
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Wrench & Technologies */}
            <AnimatedSection
              delay={200}
              animation="zoom-in"
              disabled={!animationsEnabled}
            >
              <div className="glass-card p-8 rounded-xl transition-all duration-300 h-full flex flex-col border border-white/10 hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary ring-1 ring-primary/20">
                    <Wrench size={24} />
                  </div>
                  <h3 className="text-xl font-bold gradient-text">{t.toolsTech}</h3>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {profileData.skills.tools.map((skill) => (
                    <Badge 
                      key={skill} 
                      variant="secondary"
                      className="py-1.5 px-3 text-sm transition-all duration-300 hover:bg-primary/10 hover:text-primary cursor-default"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>

                <div className="mt-auto pt-6 border-t border-border/30">
                  <div className="text-sm text-muted-foreground">
                    {currentLang === "en" 
                      ? "DevOps, CI/CD, and cloud infrastructure Wrench" 
                      : "เครื่องมือ DevOps, CI/CD และโครงสร้างพื้นฐานคลาวด์"}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* Additional skills and languages - 2 column layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
            {/* Programming Languages */}
            <AnimatedSection
              delay={250}
              animation="slide-left"
              disabled={!animationsEnabled}
            >
              <div className="glass-card p-8 rounded-xl transition-all duration-300 border border-white/10 hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary ring-1 ring-primary/20">
                    <Terminal size={24} />
                  </div>
                  <h3 className="text-xl font-bold gradient-text">{t.otherLang}</h3>
                </div>

                <div className="grid grid-cols-2 gap-4 items-center mb-4">
                  {profileData.skills.other.map((skill) => (
                    <div 
                      key={skill} 
                      className="flex items-center gap-3 p-3 rounded-lg transition-all hover:bg-primary/5"
                    >
                      <div className="w-2 h-2 rounded-full bg-primary"></div>
                      <span className="font-medium">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            {/* Soft Skills */}
            <AnimatedSection
              delay={300}
              animation="slide-right"
              disabled={!animationsEnabled}
            >
              <div className="glass-card p-8 rounded-xl transition-all duration-300 border border-white/10 hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary ring-1 ring-primary/20">
                    <User size={24} />
                  </div>
                  <h3 className="text-xl font-bold gradient-text">{t.softSkills}</h3>
                </div>

                <div className="space-y-3">
                  {profileData.softSkills.map((skill, index) => (
                    <div 
                      key={index} 
                      className="flex items-center gap-3 p-3 rounded-lg transition-all hover:bg-primary/5"
                    >
                      <div className="w-2 h-2 rounded-full bg-primary"></div>
                      <span className="font-medium">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* Languages Proficiency - Full width with visual representation */}
          <AnimatedSection
            delay={350}
            animation="fade-in"
            disabled={!animationsEnabled}
            className="mt-8"
          >
            <div className="glass-card p-8 rounded-xl transition-all duration-300 border border-white/10 hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary ring-1 ring-primary/20">
                  <Languages size={24} />
                </div>
                <h3 className="text-xl font-bold gradient-text">{t.languages}</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {profileData.languages.map((lang, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary ring-1 ring-primary/20">
                          {lang.language === "Thai" ? "TH" : "EN"}
                        </div>
                        <span className="font-semibold text-lg">{lang.language}</span>
                      </div>
                      <span className="text-sm font-medium px-3 py-1 bg-primary/10 rounded-full text-primary">
                        {lang.level}
                      </span>
                    </div>
                    
                    <div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
                      <div
                        className="h-full bg-primary rounded-full"
                        style={{
                          width:
                            lang.level === "Native"
                              ? "100%"
                              : lang.level === "Fluent"
                              ? "90%"
                              : lang.level === "Advanced"
                              ? "80%"
                              : lang.level === "Intermediate"
                              ? "60%"
                              : "40%",
                          transition: "width 1.5s cubic-bezier(0.16, 1, 0.3, 1)",
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Projects Section - Completely Redesigned */}
      <section 
        ref={projectsRef} 
        className="py-24 relative overflow-hidden bg-background"
      >
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden opacity-30 pointer-events-none">
          <div className="absolute h-full w-1 left-1/3 bg-gradient-to-b from-transparent via-primary/10 to-transparent"></div>
          <div className="absolute h-1 w-full top-1/3 bg-gradient-to-r from-transparent via-primary/10 to-transparent"></div>
          <div className="absolute h-full w-1 right-1/3 bg-gradient-to-b from-transparent via-primary/10 to-transparent"></div>
          <div className="absolute h-1 w-full bottom-1/3 bg-gradient-to-r from-transparent via-primary/10 to-transparent"></div>
        </div>

        <div className="container mx-auto max-w-7xl px-4 relative z-10">
          <AnimatedSection animation="fade-in" disabled={!animationsEnabled} className="mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/20 text-primary text-sm font-semibold mb-4 shadow-sm border border-primary/10 backdrop-blur-sm mx-auto text-center block w-fit">
              {currentLang === "en" ? "Portfolio" : "ผลงาน"}
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-6">
              {t.projectsHighlight}
            </h2>
            <p className="text-center text-muted-foreground max-w-2xl mx-auto text-lg">
              {currentLang === "en"
                ? "Featured projects I've developed that showcase my skills and experience"
                : "โปรเจกต์เด่นที่ฉันได้พัฒนาที่แสดงให้เห็นถึงทักษะและประสบการณ์ของฉัน"}
            </p>
          </AnimatedSection>

          {/* Project Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {projectCategories.map((category, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all 
                  ${activeTab === category 
                    ? "bg-primary text-white shadow-md shadow-primary/20" 
                    : "bg-secondary/50 text-secondary-foreground hover:bg-secondary"}`}
              >
                {category === "all" 
                  ? currentLang === "en" ? "All Projects" : "ทั้งหมด"
                  : category}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <AnimatedSection
                key={index}
                delay={100 + index * 50}
                animation="zoom-in"
                disabled={!animationsEnabled}
              >
                <div className="group relative bg-card rounded-xl overflow-hidden border border-border/50 hover:border-primary/20 shadow-lg hover:shadow-xl hover:shadow-primary/5 transition-all duration-300">
                  {/* Project Header with Gradient Overlay */}
                  <div className="h-32 w-full bg-gradient-to-br from-primary/20 to-primary/5 p-6 flex items-end">
                    <div className="absolute top-4 right-4">
                      <a 
                        href={project.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="bg-background/50 hover:bg-background/80 text-primary p-2 rounded-full transition-all backdrop-blur-sm"
                        aria-label={`View ${project.title} on GitHub`}
                      >
                        <Github size={16} />
                      </a>
                    </div>
                    <h3 className="font-bold text-xl">{project.title}</h3>
                  </div>

                  {/* Project Content */}
                  <div className="p-6">
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge 
                          key={techIndex} 
                          variant="outline" 
                          className="text-xs bg-secondary/30 border-secondary/50"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    {/* Project Link */}
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-sm text-primary hover:text-primary/80 transition-colors"
                    >
                      <span>{t.viewProject}</span>
                      <ExternalLink size={14} />
                    </a>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section - Redesigned */}
      <section 
        ref={educationRef} 
        className="py-24 relative overflow-hidden"
        style={{
          background: `linear-gradient(135deg, 
            var(--background) 0%, 
            color-mix(in oklch, var(--primary), var(--background) 95%) 100%)`
        }}
      >
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden opacity-10 pointer-events-none">
          <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-primary/30 blur-3xl"></div>
          <div className="absolute -bottom-20 -left-20 w-96 h-96 rounded-full bg-primary/20 blur-3xl"></div>
        </div>

        <div className="container mx-auto max-w-7xl px-4 relative z-10">
          <AnimatedSection animation="fade-in" disabled={!animationsEnabled} className="mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/20 text-primary text-sm font-semibold mb-4 shadow-sm border border-primary/10 backdrop-blur-sm mx-auto text-center block w-fit">
              {currentLang === "en" ? "Academic Background" : "ประวัติการศึกษา"}
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-6">
              {t.education}
            </h2>
            <p className="text-center text-muted-foreground max-w-2xl mx-auto text-lg">
              {currentLang === "en"
                ? "My academic journey and qualifications"
                : "เส้นทางการศึกษาและคุณสมบัติของฉัน"}
            </p>
          </AnimatedSection>

          {/* Education Timeline */}
          <div className="max-w-4xl mx-auto">
            {profile.education.map((edu, index) => (
              <AnimatedSection
                key={index}
                animation="slide-up"
                delay={100 + index * 100}
                disabled={!animationsEnabled}
                className="mb-10"
              >
                <div className="relative flex flex-col md:flex-row glass-card p-8 rounded-xl border border-white/10 hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300">
                  <div className="absolute top-0 right-0 md:left-0 px-4 py-1 -mt-3 mx-4 rounded-full bg-primary/20 text-primary text-sm font-medium backdrop-blur-sm border border-primary/10">
                    {edu.duration}
                  </div>

                  {/* Logo/Image */}
                  <div className="mb-6 md:mb-0 md:mr-8 w-full md:w-40 h-24 flex items-center justify-center bg-white/5 rounded-lg overflow-hidden">
                    <img
                      src="https://www.it.kmitl.ac.th/wp-content/themes/itkmitl2017wp/img/ogimage.png"
                      alt="KMITL IT Logo"
                      className="h-20 w-auto object-contain"
                    />
                  </div>

                  {/* Education Details */}
                  <div className="flex-1 pt-4">
                    <h3 className="text-xl font-bold mb-2">{edu.institution}</h3>
                    <p className="text-muted-foreground">{edu.degree}</p>
                    
                    {/* Education highlights */}
                    <div className="mt-6 space-y-2">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 size={16} className="text-primary" />
                        <span>
                          {currentLang === "en" 
                            ? "Focus on software development and modern web technologies" 
                            : "เน้นการพัฒนาซอฟต์แวร์และเทคโนโลยีเว็บสมัยใหม่"}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 size={16} className="text-primary" />
                        <span>
                          {currentLang === "en" 
                            ? "Project-based curriculum with real-world applications" 
                            : "หลักสูตรที่เน้นโปรเจกต์จริงและการประยุกต์ใช้งานในโลกจริง"}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section - Redesigned */}
      <section ref={contactRef} className="py-24 bg-background relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-primary/5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        <div className="container mx-auto max-w-7xl px-4 relative z-10">
          <AnimatedSection animation="fade-in" disabled={!animationsEnabled} className="mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/20 text-primary text-sm font-semibold mb-4 shadow-sm border border-primary/10 backdrop-blur-sm mx-auto text-center block w-fit">
              {currentLang === "en" ? "Get In Touch" : "ติดต่อ"}
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-6">
              {t.contact}
            </h2>
            <p className="text-center text-muted-foreground max-w-2xl mx-auto text-lg">
              {currentLang === "en"
                ? "Feel free to reach out for collaborations, internship opportunities, or just to say hello"
                : "อย่าลังเลที่จะติดต่อเพื่อความร่วมมือ โอกาสในการฝึกงาน หรือเพียงแค่ทักทาย"}
            </p>
          </AnimatedSection>

          {/* Contact Cards */}
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Email Contact */}
            <AnimatedSection
              animation="slide-up"
              delay={100}
              disabled={!animationsEnabled}
            >
              <a href={`mailto:${profile.email}`} className="block">
                <ContactCard 
                  icon={<Mail size={24} />} 
                  title={currentLang === "en" ? "Email" : "อีเมล"}
                  value={profile.email}
                  hint={currentLang === "en" ? "Click to send email" : "คลิกเพื่อส่งอีเมล"}
                />
              </a>
            </AnimatedSection>

            {/* Phone Contact */}
            <AnimatedSection
              animation="slide-up"
              delay={150}
              disabled={!animationsEnabled}
            >
              <a href={`tel:${profileData.phone}`} className="block">
                <ContactCard 
                  icon={<Phone size={24} />} 
                  title={t.phone}
                  value={profileData.phone}
                  hint={currentLang === "en" ? "Click to call" : "คลิกเพื่อโทร"}
                />
              </a>
            </AnimatedSection>

            {/* GitHub Contact */}
            <AnimatedSection
              animation="slide-up"
              delay={200}
              disabled={!animationsEnabled}
            >
              <a href={`https://github.com/${profileData.github}`} target="_blank" rel="noopener noreferrer" className="block">
                <ContactCard 
                  icon={<Github size={24} />} 
                  title="GitHub"
                  value={`github.com/${profileData.github}`}
                  hint={currentLang === "en" ? "View GitHub profile" : "ดูโปรไฟล์ GitHub"}
                />
              </a>
            </AnimatedSection>
          </div>

          {/* Contact Form - Optional */}
          <AnimatedSection
            animation="fade-in"
            delay={300}
            disabled={!animationsEnabled}
            className="mt-16 max-w-2xl mx-auto glass-card p-8 rounded-xl border border-white/10"
          >
            <h3 className="text-2xl font-bold mb-6 text-center">
              {currentLang === "en" ? "Ready to Work Together?" : "พร้อมที่จะทำงานร่วมกัน?"}
            </h3>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="gap-2 bg-primary hover:bg-primary/90 text-white rounded-lg shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all"
              >
                <a href={`mailto:${profile.email}`}>
                  <Mail size={18} />
                  {currentLang === "en" ? "Send Message" : "ส่งข้อความ"}
                </a>
              </Button>
              <Button
                variant="outline"
                asChild
                size="lg"
                className="gap-2 border-primary/20 hover:bg-primary/5 hover:border-primary/30 rounded-lg transition-all"
              >
                <a href={`https://github.com/${profile.github}`} target="_blank" rel="noopener noreferrer">
                  <Github size={18} />
                  {currentLang === "en" ? "View Projects" : "ดูโปรเจกต์"}
                </a>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Footer - Redesigned */}
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
              <FooterLink label={t.home} onClick={() => scrollToSection(heroRef)} />
              <FooterLink label={t.skills} onClick={() => scrollToSection(skillsRef)} />
              <FooterLink label={t.projects} onClick={() => scrollToSection(projectsRef)} />
              <FooterLink label={t.education} onClick={() => scrollToSection(educationRef)} />
              <FooterLink label={t.contact} onClick={() => scrollToSection(contactRef)} />
            </div>

            {/* Social Links */}
            <div className="flex justify-center gap-4 mb-8">
              <SocialLink href={`mailto:${profile.email}`} icon={<Mail size={20} />} label="Email" />
              <SocialLink href={`tel:${profileData.phone}`} icon={<Phone size={20} />} label="Phone" />
              <SocialLink href={`https://github.com/${profile.github}`} icon={<Github size={20} />} label="GitHub" />
            </div>

            {/* Copyright */}
            <div className="text-sm text-muted-foreground text-center">
              <p>© {new Date().getFullYear()} {profile.name}. {t.allRightsReserved}</p>
              <p className="mt-2">
                {currentLang === "en" 
                  ? "Built with React, Next.js, and Tailwind CSS" 
                  : "สร้างด้วย React, Next.js และ Tailwind CSS"}
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* CSS Utility Components */}
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

// Component: NavItem
const NavItem = ({ label, onClick, icon }) => (
  <button
    onClick={onClick}
    className="text-sm font-medium transition-colors relative group"
  >
    <span className="flex items-center gap-1.5">
      {icon}
      <span>{label}</span>
    </span>
    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
  </button>
);

// Component: MobileNavItem
const MobileNavItem = ({ label, onClick, icon }) => (
  <button
    onClick={onClick}
    className="w-full text-left px-4 py-3 flex items-center gap-2 hover:bg-primary/5 rounded-lg transition-colors"
  >
    {icon}
    <span>{label}</span>
  </button>
);

// Component: InfoBadge
const InfoBadge = ({ icon, text }) => (
  <div className="flex items-center gap-2 py-1.5 px-4 rounded-full bg-background/50 backdrop-blur-sm shadow-sm border border-border/30 text-sm font-medium">
    <span className="text-primary">{icon}</span>
    <span>{text}</span>
  </div>
);

// Component: ContactCard
const ContactCard = ({ icon, title, value, hint }) => (
  <div className="glass-card p-6 rounded-xl h-full flex flex-col items-center text-center border border-white/10 hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 group">
    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4 group-hover:bg-primary/20 transition-all">
      {icon}
    </div>
    <h3 className="font-bold mb-2">{title}</h3>
    <p className="text-muted-foreground mb-4 break-all">{value}</p>
    <span className="text-xs text-primary opacity-0 group-hover:opacity-100 transition-opacity">
      {hint}
    </span>
  </div>
);

// Component: FooterLink
const FooterLink = ({ label, onClick }) => (
  <button
    onClick={onClick}
    className="text-muted-foreground hover:text-primary transition-colors"
  >
    {label}
  </button>
);

// Component: SocialLink
const SocialLink = ({ href, icon, label }) => (
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