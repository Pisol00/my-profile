'use client';

import { forwardRef } from 'react';
import { CheckCircle2 } from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';
import { useLanguage } from '@/context/LanguageContext';
import { profileData, thEducation } from '@/translations';

type EducationSectionProps = {
  animationsEnabled: boolean;
};

const EducationSection = forwardRef<HTMLElement, EducationSectionProps>(
  ({ animationsEnabled }, ref) => {
    const { currentLang, t } = useLanguage();

    // Get the correct education data based on language
    const education = currentLang === "en" ? profileData.education : thEducation;

    return (
      <section 
        ref={ref} 
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
            {education.map((edu, index) => (
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
    );
  }
);

EducationSection.displayName = 'EducationSection';

export default EducationSection;