'use client';

import { forwardRef } from 'react';
import { 
  Code2, 
  Database, 
  Server,
  Languages as LanguagesIcon, 
  Check,
  Globe,
  User
} from 'lucide-react';
import AnimatedSection from '@/components/common/AnimatedSection';
import { useLanguage } from '@/contexts';
import { profileData } from '@/translations';
import { SkillCard } from '@/components/common/cards';

type SkillsSectionProps = {
  animationsEnabled: boolean;
};

const SkillsSection = forwardRef<HTMLElement, SkillsSectionProps>(
  ({ animationsEnabled }, ref) => {
    const { currentLang, t } = useLanguage();

    // All skills from profile data
    const { frontend, backend, tools, other } = profileData.skills;

    // Skill category with icon mapping
    const skillCategories = [
      {
        name: t.frontend,
        icon: <Code2 size={24} />,
        skills: frontend,
        color: 'text-blue-500',
        bgLight: 'bg-blue-50/50',
        bgDark: 'dark:bg-blue-900/10',
      },
      {
        name: t.backend,
        icon: <Database size={24} />,
        skills: backend,
        color: 'text-blue-500',
        bgLight: 'bg-blue-50/50',
        bgDark: 'dark:bg-blue-900/10',
      },
      {
        name: t.toolsTech,
        icon: <Server size={24} />,
        skills: tools,
        color: 'text-blue-500',
        bgLight: 'bg-blue-50/50',
        bgDark: 'dark:bg-blue-900/10',
      },
      {
        name: t.otherLang,
        icon: <Code2 size={24} />,
        skills: other,
        color: 'text-blue-500',
        bgLight: 'bg-blue-50/50',
        bgDark: 'dark:bg-blue-900/10',
      },
    ];

    // แก้ไขการดึงข้อมูลภาษา
    const languageData = profileData.languages.map(lang => ({
      language: lang.language[currentLang],
      level: lang.level[currentLang]
    }));

    // แก้ไขการดึงข้อมูล soft skills
    const softSkillsWithIcons = profileData.softSkills.map((skill, index) => ({
      skill: skill[currentLang],
      icon: <User size={24} />
    }));

    return (
      <section 
        ref={ref} 
        className="py-24 bg-gradient-to-b from-white to-blue-50 dark:from-gray-900 dark:to-blue-950/20 relative overflow-hidden"
      >
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden opacity-10">
          <div className="absolute h-64 w-64 -top-20 -right-20 rounded-full bg-blue-200 dark:bg-blue-600 blur-3xl"></div>
          <div className="absolute h-64 w-64 -bottom-20 -left-20 rounded-full bg-blue-200 dark:bg-blue-600 blur-3xl"></div>
        </div>

        <div className="container relative z-10 mx-auto max-w-7xl px-4">
          {/* Section header */}
          <AnimatedSection 
            animation="fade-in" 
            disabled={!animationsEnabled} 
            className="mb-16 text-center"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              {t.technicalSkills}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              {currentLang === "en"
                ? "Technology stack and areas of expertise"
                : "สแตคเทคโนโลยีและความเชี่ยวชาญของฉัน"}
            </p>
          </AnimatedSection>

          {/* Main technical skills - card layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {skillCategories.map((category, categoryIndex) => (
              <SkillCard
                key={category.name}
                title={category.name}
                icon={category.icon}
                skills={category.skills}
                animationsEnabled={animationsEnabled}
                delay={100 + categoryIndex * 50}
              />
            ))}
          </div>

          {/* Languages and Soft Skills - Two Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Languages Card */}
            <AnimatedSection
              animation="fade-in"
              delay={200}
              disabled={!animationsEnabled}
            >
              <div className="bg-white dark:bg-gray-800 rounded-xl border border-blue-100 dark:border-blue-900/30 shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden h-full">
                {/* Header */}
                <div className="p-6 border-b border-blue-100 dark:border-blue-900/30 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center text-blue-600 dark:text-blue-300">
                    <LanguagesIcon size={24} />
                  </div>
                  <h3 className="text-xl font-bold">{t.languages}</h3>
                </div>

                {/* Languages Content */}
                <div className="p-6 space-y-6">
                  {languageData.map((language, index) => (
                    <div key={index} className="flex items-center space-x-4">
                      <div className="w-14 h-14 rounded-full bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center text-blue-600 dark:text-blue-300 text-lg font-bold border-2 border-blue-100 dark:border-blue-800">
                        {language.language === "Thai" || language.language === "ไทย" ? "TH" : "EN"}
                      </div>
                      <div>
                        <div className="font-bold text-lg">{language.language}</div>
                        <div className="text-blue-600 dark:text-blue-300 text-sm mt-1 bg-blue-50 dark:bg-blue-900/20 px-3 py-1 rounded-full inline-block">
                          {language.level}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            {/* Soft Skills Card */}
            <AnimatedSection
              animation="fade-in"
              delay={250}
              disabled={!animationsEnabled}
            >
              <div className="bg-white dark:bg-gray-800 rounded-xl border border-blue-100 dark:border-blue-900/30 shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden h-full">
                {/* Header */}
                <div className="p-6 border-b border-blue-100 dark:border-blue-900/30 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center text-blue-600 dark:text-blue-300">
                    <User size={24} />
                  </div>
                  <h3 className="text-xl font-bold">{t.softSkills}</h3>
                </div>

                {/* Soft Skills Content */}
                <div className="p-6">
                  <div className="grid grid-cols-1 gap-4">
                    {softSkillsWithIcons.map((item, index) => (
                      <div 
                        key={index}
                        className="flex items-center gap-4 p-3 rounded-lg bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800/50"
                      >
                        <div className="w-10 h-10 rounded-full bg-white dark:bg-gray-800 border border-blue-200 dark:border-blue-700 flex items-center justify-center text-blue-600 dark:text-blue-300">
                          {item.icon}
                        </div>
                        <span className="font-medium">{item.skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    );
  }
);

SkillsSection.displayName = 'SkillsSection';

export default SkillsSection;