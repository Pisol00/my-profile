'use client'
import Image from "next/image";
import { useState, useEffect, useRef, useMemo, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github, Mail, Linkedin, Globe, MapPin, Briefcase, GraduationCap, User, Languages, Phone, Home, ChevronDown, Menu, X, MoonStar, Sun } from "lucide-react";
import { Language, translations, profileData, thProjects, thEducation } from "@/translations";
import AnimatedSection from "@/components/AnimatedSection";
import "./animations.css";
import "./theme.css";

export default function ProfilePage() {
  const [currentLang, setCurrentLang] = useState<Language>("en");
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
  const [isClient, setIsClient] = useState(false);
  const [animationsEnabled, setAnimationsEnabled] = useState(true);
  
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
    // คุณสามารถปรับค่าตรงนี้เป็น true เสมอถ้าต้องการให้มี animation 
    const checkPerformance = () => {
      const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
      setAnimationsEnabled(!mediaQuery.matches);
    };
    
    checkPerformance();

    // ตั้งค่าโหมดสีและภาษา
    const savedLang = localStorage.getItem('preferredLanguage') as Language || 'en';
    const savedTheme = localStorage.getItem('darkMode') === 'true';
    
    setCurrentLang(savedLang);
    setIsDarkMode(savedTheme);
    
    // Change lang attribute based on saved language
    document.documentElement.lang = savedLang;
    
    // Apply dark mode if saved
    if (savedTheme) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const t = translations[currentLang];

  // Get the correct data based on language
  const profile = useMemo(() => ({
    ...profileData,
    name: currentLang === "en" ? profileData.name : t.name,
    title: currentLang === "en" ? profileData.title : t.title,
    bio: currentLang === "en" ? profileData.bio : t.bio,
    location: currentLang === "en" ? profileData.location : t.location,
    projects: currentLang === "en" ? profileData.projects : thProjects,
    education: currentLang === "en" ? profileData.education : thEducation,
  }), [currentLang, t]);

  const toggleLanguage = useCallback(() => {
    const newLang = currentLang === "en" ? "th" : "en";
    setCurrentLang(newLang);
    localStorage.setItem('preferredLanguage', newLang);
    
    // Change lang attribute when toggling language
    document.documentElement.lang = newLang;
  }, [currentLang]);
  
  const toggleDarkMode = useCallback(() => {
    const newDarkMode = !isDarkMode;
    setIsDarkMode(newDarkMode);
    localStorage.setItem('darkMode', String(newDarkMode));
    
    if (newDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const scrollToSection = useCallback((ref: React.RefObject<HTMLElement>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  }, []);

  if (!isClient) {
    // Server-side or before hydration
    return null;
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass-effect shadow-custom">
        <div className="container mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="font-bold text-lg gradient-text">P.U.</span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            <button onClick={() => scrollToSection(heroRef)} className="text-sm font-medium hover:text-primary transition-colors">
              {t.home}
            </button>
            <button onClick={() => scrollToSection(skillsRef)} className="text-sm font-medium hover:text-primary transition-colors">
              {t.skills}
            </button>
            <button onClick={() => scrollToSection(projectsRef)} className="text-sm font-medium hover:text-primary transition-colors">
              {t.projects}
            </button>
            <button onClick={() => scrollToSection(educationRef)} className="text-sm font-medium hover:text-primary transition-colors">
              {t.education}
            </button>
            <button onClick={() => scrollToSection(contactRef)} className="text-sm font-medium hover:text-primary transition-colors">
              {t.contact}
            </button>
          </div>
          
          <div className="flex items-center gap-3">
            <Button
              variant="outline"
              size="icon"
              onClick={toggleDarkMode}
              className="rounded-full"
            >
              {isDarkMode ? <Sun size={18} /> : <MoonStar size={18} />}
            </Button>
            
            <Button
              variant="outline"
              size="sm"
              onClick={toggleLanguage}
              className="bg-primary text-primary-foreground hover:bg-primary/90 font-medium gradient-button"
            >
              <Languages size={16} className="mr-2" />
              {currentLang === "en" ? "TH" : "EN"}
            </Button>
            
            {/* Mobile menu button */}
            <Button 
              variant="ghost" 
              size="icon" 
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </Button>
          </div>
        </div>
        
        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 glass-effect py-4 px-4 shadow-custom">
            <div className="flex flex-col space-y-4">
              <button onClick={() => scrollToSection(heroRef)} className="text-sm font-medium hover:text-primary transition-colors py-2">
                {t.home}
              </button>
              <button onClick={() => scrollToSection(skillsRef)} className="text-sm font-medium hover:text-primary transition-colors py-2">
                {t.skills}
              </button>
              <button onClick={() => scrollToSection(projectsRef)} className="text-sm font-medium hover:text-primary transition-colors py-2">
                {t.projects}
              </button>
              <button onClick={() => scrollToSection(educationRef)} className="text-sm font-medium hover:text-primary transition-colors py-2">
                {t.education}
              </button>
              <button onClick={() => scrollToSection(contactRef)} className="text-sm font-medium hover:text-primary transition-colors py-2">
                {t.contact}
              </button>
            </div>
          </div>
        )}
      </nav>
      
      {/* Hero Section */}
      <section ref={heroRef} className="min-h-screen flex items-center pt-16 hero-bg">
        <div className="container mx-auto max-w-7xl px-4 py-24">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <AnimatedSection 
              animation="slide-left" 
              className="md:w-1/2 text-center md:text-left"
              disabled={!animationsEnabled}
            >
              <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                {currentLang === "en" ? "Full-Stack Developer" : "นักพัฒนาเว็บแบบ Full-Stack"}
              </span>
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-4">{profile.name}</h1>
              <p className="text-xl md:text-2xl text-primary mb-6 gradient-text">{profile.title}</p>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl">{profile.bio}</p>
              
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <Button asChild size="lg" className="gap-2 gradient-button shadow-custom button-hover">
                  <a href={`mailto:${profile.email}`}>
                    <Mail size={18} />
                    {t.contactMe}
                  </a>
                </Button>
                <Button variant="outline" asChild size="lg" className="gap-2 button-hover shadow-custom">
                  <a href={`https://github.com/${profile.github}`} target="_blank" rel="noopener noreferrer">
                    <Github size={18} />
                    GitHub
                  </a>
                </Button>
              </div>
              
              <div className="flex flex-wrap gap-4 mt-8 justify-center md:justify-start">
                <div className="flex items-center gap-2">
                  <MapPin size={18} className="text-primary" />
                  <span>{profile.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone size={18} className="text-primary" />
                  <span>{profileData.phone}</span>
                </div>
              </div>
            </AnimatedSection>
            
            <AnimatedSection 
              animation="slide-right" 
              className="md:w-1/2 flex justify-center md:justify-end"
              disabled={!animationsEnabled}
            >
              <div className={`relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/20 shadow-custom ${animationsEnabled ? 'animate-float' : ''}`}>
                <Image
                  src={profile.avatar}
                  alt={profile.name}
                  fill
                  style={{ objectFit: "cover" }}
                  priority
                />
              </div>
            </AnimatedSection>
          </div>
          
          <div className="flex justify-center mt-12">
            <Button 
              variant="ghost" 
              size="lg" 
              onClick={() => scrollToSection(skillsRef)}
              className="text-primary"
            >
              <ChevronDown size={24} />
            </Button>
          </div>
        </div>
      </section>
      
      {/* Skills Section */}
      <section ref={skillsRef} className="py-24 bg-background">
        <div className="container mx-auto max-w-7xl px-4">
          <AnimatedSection disabled={!animationsEnabled}>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">{t.technicalSkills}</h2>
            <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
              {currentLang === "en" 
                ? "My technical skills and areas of expertise" 
                : "ทักษะทางเทคนิคและความเชี่ยวชาญของฉัน"}
            </p>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Frontend Skills */}
            <AnimatedSection delay={100} animation="zoom-in" disabled={!animationsEnabled}>
              <Card className="border-none shadow-custom card-hover card-gradient-1">
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-primary">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-6 text-primary">{t.frontend}</h3>
                  <div className="flex flex-wrap gap-2">
                    {profileData.skills.frontend.map((skill) => (
                      <Badge key={skill} variant="secondary">{skill}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
            
            {/* Backend Skills */}
            <AnimatedSection delay={150} animation="zoom-in" disabled={!animationsEnabled}>
              <Card className="border-none shadow-custom card-hover card-gradient-2">
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-primary">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3m3 3a3 3 0 100 6h13.5a3 3 0 100-6m-16.5-3a3 3 0 013-3h13.5a3 3 0 013 3m-19.5 0a4.5 4.5 0 01.9-2.7L5.737 5.1a3.375 3.375 0 012.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 01.9 2.7m0 0a3 3 0 01-3 3m0 3h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008zm-3 6h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-6 text-primary">{t.backend}</h3>
                  <div className="flex flex-wrap gap-2">
                    {profileData.skills.backend.map((skill) => (
                      <Badge key={skill} variant="secondary">{skill}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
            
            {/* Tools & Technologies */}
            <AnimatedSection delay={200} animation="zoom-in" disabled={!animationsEnabled}>
              <Card className="border-none shadow-custom card-hover card-gradient-1">
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-primary">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-6 text-primary">{t.toolsTech}</h3>
                  <div className="flex flex-wrap gap-2">
                    {profileData.skills.tools.map((skill) => (
                      <Badge key={skill} variant="secondary">{skill}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
            
            {/* Other Languages */}
            <AnimatedSection delay={250} animation="zoom-in" disabled={!animationsEnabled}>
              <Card className="border-none shadow-custom card-hover card-gradient-2">
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-primary">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 9.75L16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-6 text-primary">{t.otherLang}</h3>
                  <div className="flex flex-wrap gap-2">
                    {profileData.skills.other.map((skill) => (
                      <Badge key={skill} variant="secondary">{skill}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
          
          {/* Soft Skills & Languages */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {/* Soft Skills */}
            <AnimatedSection delay={150} animation="slide-left" disabled={!animationsEnabled}>
              <Card className="border-none shadow-custom card-hover card-gradient-1">
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                    <User size={24} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-6 text-primary">{t.softSkills}</h3>
                  <ul className="space-y-3">
                    {profileData.softSkills.map((skill, index) => (
                      <li key={index} className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-primary"></div>
                        <span>{skill}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </AnimatedSection>
            
            {/* Languages */}
            <AnimatedSection delay={200} animation="slide-right" disabled={!animationsEnabled}>
              <Card className="border-none shadow-custom card-hover card-gradient-2">
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                    <Languages size={24} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-6 text-primary">{t.languages}</h3>
                  <div className="space-y-4">
                    {profileData.languages.map((lang, index) => (
                      <div key={index} className="space-y-1">
                        <div className="flex justify-between">
                          <span className="font-medium">{lang.language}</span>
                          <span className="text-muted-foreground">{lang.level}</span>
                        </div>
                        <div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-primary rounded-full"
                            style={{ 
                              width: lang.level === "Native" ? "100%" : 
                                  lang.level === "Fluent" ? "90%" : 
                                  lang.level === "Advanced" ? "80%" : 
                                  lang.level === "Intermediate" ? "60%" : "40%",
                              transition: "width 1s ease-in-out"
                            }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>
      
      {/* Projects Section */}
      <section ref={projectsRef} className="py-24 hero-bg">
        <div className="container mx-auto max-w-7xl px-4">
          <AnimatedSection disabled={!animationsEnabled}>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">{t.projectsHighlight}</h2>
            <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
              {currentLang === "en" 
                ? "Featured projects I've worked on during my academic journey" 
                : "โปรเจกต์เด่นที่ฉันทำในระหว่างการเรียน"}
            </p>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {profile.projects.map((project, index) => (
              <AnimatedSection key={index} delay={100 + (index * 50)} animation="zoom-in" disabled={!animationsEnabled}>
                <Card className="border-none shadow-custom card-hover bg-card">
                  <CardContent className="p-8">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-xl font-bold gradient-text">{project.title}</h3>
                      <Button variant="outline" asChild size="sm" className="gap-1 button-hover">
                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                          <Github size={14} />
                          {t.viewProject}
                        </a>
                      </Button>
                    </div>
                    
                    <p className="text-muted-foreground mb-6">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mt-4">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs">{tech}</Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
      
      {/* Education Section */}
      <section ref={educationRef} className="py-24 bg-background">
        <div className="container mx-auto max-w-7xl px-4">
          <AnimatedSection disabled={!animationsEnabled}>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">{t.education}</h2>
            <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
              {currentLang === "en" 
                ? "My academic background and qualifications" 
                : "ประวัติการศึกษาและคุณสมบัติของฉัน"}
            </p>
          </AnimatedSection>
          
          <div className="max-w-3xl mx-auto">
            {profile.education.map((edu, index) => (
              <AnimatedSection key={index} animation="slide-left" delay={100 + (index * 100)} disabled={!animationsEnabled}>
                <Card className="border-none shadow-custom card-hover card-gradient-1 mb-8">
                  <CardContent className="p-8">
                  <img src="https://www.it.kmitl.ac.th/wp-content/themes/itkmitl2017wp/img/ogimage.png" alt="" />
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                      <div>
                        <h3 className="text-xl font-bold gradient-text">{edu.institution}</h3>
                        <p className="text-muted-foreground mt-2">{edu.degree}</p>
                      </div>
                      <Badge variant="outline" className="text-sm py-1.5 px-3">
                        {edu.duration}
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section ref={contactRef} className="py-24 hero-bg">
        <div className="container mx-auto max-w-7xl px-4">
          <AnimatedSection disabled={!animationsEnabled}>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">{t.contact}</h2>
            <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
              {currentLang === "en" 
                ? "Feel free to reach out to me with any questions or opportunities" 
                : "อย่าลังเลที่จะติดต่อฉันหากมีคำถามหรือโอกาสในการทำงานร่วมกัน"}
            </p>
          </AnimatedSection>
          
          <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <AnimatedSection animation="slide-left" delay={100} disabled={!animationsEnabled}>
              <Card className="border-none shadow-custom card-hover bg-card">
                <CardContent className="p-8">
                  <div className="flex flex-col gap-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                        <Mail size={20} className="text-primary" />
                      </div>
                      <div>
                        <h3 className="font-bold mb-1">Email</h3>
                        <a href={`mailto:${profile.email}`} className="text-muted-foreground hover:text-primary transition-colors">{profile.email}</a>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                        <Phone size={20} className="text-primary" />
                      </div>
                      <div>
                        <h3 className="font-bold mb-1">{t.phone}</h3>
                        <a href={`tel:${profileData.phone}`} className="text-muted-foreground hover:text-primary transition-colors">{profileData.phone}</a>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                        <Github size={20} className="text-primary" />
                      </div>
                      <div>
                        <h3 className="font-bold mb-1">GitHub</h3>
                        <a href={`https://github.com/${profileData.github}`} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">github.com/{profileData.github}</a>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
            
            <AnimatedSection animation="slide-right" delay={150} disabled={!animationsEnabled}>
              <Card className="border-none shadow-custom card-hover bg-card">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <MapPin size={20} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">{t.location}</h3>
                      <p className="text-muted-foreground">{profileData.address}</p>
                    </div>
                  </div>
                  
                  <div className="mt-8">
                    <Button asChild size="lg" className="w-full gradient-button button-hover shadow-custom">
                      <a href={`mailto:${profile.email}`}>
                        {currentLang === "en" ? "Send me a message" : "ส่งข้อความถึงฉัน"}
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-background py-12 border-t border-border/40">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground">© {new Date().getFullYear()} {profile.name}. {t.allRightsReserved}</p>
            
            <div className="flex gap-4 mt-6 md:mt-0">
              <a href={`mailto:${profile.email}`} aria-label="Email" className="text-muted-foreground hover:text-primary transition-colors">
                <Mail size={20} />
              </a>
              <a href={`tel:${profileData.phone}`} aria-label="Phone" className="text-muted-foreground hover:text-primary transition-colors">
                <Phone size={20} />
              </a>
              <a href={`https://github.com/${profile.github}`} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-muted-foreground hover:text-primary transition-colors">
                <Github size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}