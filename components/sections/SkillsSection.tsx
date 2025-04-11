'use client';

import { forwardRef } from 'react';
import { Layout, Database, Wrench, Terminal, User, Languages } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import AnimatedSection from '@/components/AnimatedSection';
import { useLanguage } from '@/context/LanguageContext';
import { profileData } from '@/translations';

type SkillsSectionProps = {
  animationsEnabled: boolean;
};

// ใช้ forwardRef เพื่อรับ ref จาก parent component
const SkillsSection = forwardRef<HTMLElement, SkillsSectionProps>(
  ({ animationsEnabled }, ref) => {
    const { currentLang, t } = useLanguage();

    return (
      <section 
        ref={ref} 
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
    );
  }
);

SkillsSection.displayName = 'SkillsSection';

export default SkillsSection;