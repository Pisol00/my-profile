'use client';

import { forwardRef, useState } from 'react';
import { 
  Code2, 
  Database, 
  Server,
  Languages as LanguagesIcon, 
  User,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import AnimatedSection from '@/components/common/animations/AnimatedSection';
import { useLanguage } from '@/contexts';
import { profileData } from '@/translations';
import { SkillCard } from '@/components/common/cards';

type SkillsSectionProps = {
  animationsEnabled: boolean;
};

const SkillsSection = forwardRef<HTMLElement, SkillsSectionProps>(
  ({ animationsEnabled }, ref) => {
    const { currentLang, t } = useLanguage();
    
    // State for expandable mobile sections
    const [expandedCategory, setExpandedCategory] = useState<string | null>("frontend");

    // Toggle expanded category on mobile
    const toggleCategory = (category: string) => {
      if (expandedCategory === category) {
        setExpandedCategory(null);
      } else {
        setExpandedCategory(category);
      }
    };

    // All skills from profile data
    const { frontend, backend, tools, other } = profileData.skills;

    // Skill category with icon mapping
    const skillCategories = [
      {
        id: "frontend",
        name: t.frontend,
        icon: <Code2 size={22} className="sm:w-6 sm:h-6" />,
        skills: frontend
      },
      {
        id: "backend",
        name: t.backend,
        icon: <Database size={22} className="sm:w-6 sm:h-6" />,
        skills: backend
      },
      {
        id: "toolsTech",
        name: t.toolsTech,
        icon: <Server size={22} className="sm:w-6 sm:h-6" />,
        skills: tools
      },
      {
        id: "otherLang",
        name: t.otherLang,
        icon: <Code2 size={22} className="sm:w-6 sm:h-6" />,
        skills: other
      },
    ];

    // Language data
    const languageData = profileData.languages.map(lang => ({
      language: lang.language[currentLang],
      level: lang.level[currentLang]
    }));

    // Soft skills
    const softSkillsWithIcons = profileData.softSkills.map((skill, index) => ({
      skill: skill[currentLang],
      icon: <User size={22} className="sm:w-6 sm:h-6" />
    }));

    return (
      <section 
        ref={ref} 
        className="py-16 sm:py-20 md:py-24 bg-white dark:bg-black relative overflow-hidden"
      >
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden opacity-10">
          <div className="absolute h-64 w-64 -top-20 -right-20 rounded-full bg-gray-200 dark:bg-gray-700 blur-3xl"></div>
          <div className="absolute h-64 w-64 -bottom-20 -left-20 rounded-full bg-gray-200 dark:bg-gray-700 blur-3xl"></div>
        </div>

        <div className="container relative z-10 mx-auto max-w-7xl px-4 sm:px-6">
          {/* Section header */}
          <AnimatedSection 
            animation="fade-in" 
            disabled={!animationsEnabled} 
            className="mb-12 sm:mb-16 text-center"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-gray-900 dark:text-white">
              {t.technicalSkills}
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-base sm:text-lg">
              {currentLang === "en"
                ? "Technology stack and areas of expertise"
                : "สแตคเทคโนโลยีและความเชี่ยวชาญของฉัน"}
            </p>
          </AnimatedSection>

          {/* Desktop View - Grid Layout */}
          <div className="hidden md:block">
            {/* Main technical skills - responsive card layout */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 mb-12 md:mb-16">
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

            {/* Languages and Soft Skills - Responsive Two Column Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
              {/* Languages Card */}
              <AnimatedSection
                animation="fade-in"
                delay={200}
                disabled={!animationsEnabled}
              >
                <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden h-full luxury-card">
                  {/* Header */}
                  <div className="p-4 sm:p-6 border-b border-gray-100 dark:border-gray-800 flex items-center gap-3 sm:gap-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gray-50 dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-300">
                      <LanguagesIcon size={22} className="sm:w-6 sm:h-6" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold">{t.languages}</h3>
                  </div>

                  {/* Languages Content */}
                  <div className="p-4 sm:p-6 space-y-4 sm:space-y-6">
                    {languageData.map((language, index) => (
                      <div key={index} className="flex items-center space-x-3 sm:space-x-4">
                        <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gray-50 dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-300 text-base sm:text-lg font-bold border-2 border-gray-100 dark:border-gray-700">
                          {language.language === "Thai" || language.language === "ไทย" ? "TH" : "EN"}
                        </div>
                        <div>
                          <div className="font-bold text-base sm:text-lg">{language.language}</div>
                          <div className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm mt-1 bg-gray-50 dark:bg-gray-800 px-2 sm:px-3 py-1 rounded-full inline-block">
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
                <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden h-full luxury-card">
                  {/* Header */}
                  <div className="p-4 sm:p-6 border-b border-gray-100 dark:border-gray-800 flex items-center gap-3 sm:gap-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gray-50 dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-300">
                      <User size={22} className="sm:w-6 sm:h-6" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold">{t.softSkills}</h3>
                  </div>

                  {/* Soft Skills Content */}
                  <div className="p-4 sm:p-6">
                    <div className="grid grid-cols-1 gap-3 sm:gap-4">
                      {softSkillsWithIcons.map((item, index) => (
                        <div 
                          key={index}
                          className="flex items-center gap-3 sm:gap-4 p-2 sm:p-3 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700"
                        >
                          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 flex items-center justify-center text-gray-600 dark:text-gray-300">
                            {item.icon}
                          </div>
                          <span className="text-sm sm:text-base font-medium">{item.skill}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>

          {/* Mobile View - Accordion Layout */}
          <div className="md:hidden">
            {/* Technical Skills Accordion */}
            <div className="space-y-4 mb-8">
              {skillCategories.map((category, index) => (
                <AnimatedSection
                  key={category.id}
                  animation="fade-in"
                  delay={100 + index * 50}
                  disabled={!animationsEnabled}
                >
                  <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-100 dark:border-gray-800 overflow-hidden shadow-sm luxury-card">
                    {/* Accordion Header */}
                    <div 
                      className="p-4 flex items-center justify-between cursor-pointer"
                      onClick={() => toggleCategory(category.id)}
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-gray-50 dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-300">
                          {category.icon}
                        </div>
                        <h3 className="font-bold text-base">{category.name}</h3>
                      </div>

                      <div className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-50 dark:bg-gray-800 text-gray-600 dark:text-gray-400">
                        {expandedCategory === category.id ? 
                          <ChevronUp size={18} /> : 
                          <ChevronDown size={18} />
                        }
                      </div>
                    </div>

                    {/* Accordion Content */}
                    <div 
                      className={`transition-all duration-300 ease-in-out overflow-hidden ${
                        expandedCategory === category.id ? 'max-h-[500px]' : 'max-h-0'
                      }`}
                    >
                      <div className="p-4 border-t border-gray-100 dark:border-gray-800">
                        <div className="flex flex-wrap gap-2">
                          {category.skills.map((skill, idx) => (
                            <div 
                              key={idx} 
                              className="flex items-center gap-2 bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-300 py-2 px-3 rounded-lg border border-gray-100 dark:border-gray-700"
                            >
                              <Code2 size={12} className="text-gray-500 dark:text-gray-400" />
                              <span className="text-xs font-medium">{skill}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>

            {/* Languages Card - Mobile */}
            <AnimatedSection
              animation="fade-in"
              delay={300}
              disabled={!animationsEnabled}
              className="mb-6"
            >
              <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-100 dark:border-gray-800 overflow-hidden shadow-sm luxury-card">
                <div 
                  className="p-4 flex items-center justify-between cursor-pointer"
                  onClick={() => toggleCategory('languages')}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gray-50 dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-300">
                      <LanguagesIcon size={20} />
                    </div>
                    <h3 className="font-bold text-base">{t.languages}</h3>
                  </div>

                  <div className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-50 dark:bg-gray-800 text-gray-600 dark:text-gray-400">
                    {expandedCategory === 'languages' ? 
                      <ChevronUp size={18} /> : 
                      <ChevronDown size={18} />
                    }
                  </div>
                </div>

                <div 
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    expandedCategory === 'languages' ? 'max-h-[300px]' : 'max-h-0'
                  }`}
                >
                  <div className="p-4 border-t border-gray-100 dark:border-gray-800 space-y-4">
                    {languageData.map((language, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <div className="w-10 h-10 rounded-full bg-gray-50 dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-300 text-sm font-bold border border-gray-100 dark:border-gray-700">
                          {language.language === "Thai" || language.language === "ไทย" ? "TH" : "EN"}
                        </div>
                        <div>
                          <div className="font-bold text-sm">{language.language}</div>
                          <div className="text-gray-600 dark:text-gray-300 text-xs mt-1 bg-gray-50 dark:bg-gray-800 px-2 py-0.5 rounded-full inline-block">
                            {language.level}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Soft Skills Card - Mobile */}
            <AnimatedSection
              animation="fade-in"
              delay={350}
              disabled={!animationsEnabled}
            >
              <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-100 dark:border-gray-800 overflow-hidden shadow-sm luxury-card">
                <div 
                  className="p-4 flex items-center justify-between cursor-pointer"
                  onClick={() => toggleCategory('softSkills')}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gray-50 dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-300">
                      <User size={20} />
                    </div>
                    <h3 className="font-bold text-base">{t.softSkills}</h3>
                  </div>

                  <div className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-50 dark:bg-gray-800 text-gray-600 dark:text-gray-400">
                    {expandedCategory === 'softSkills' ? 
                      <ChevronUp size={18} /> : 
                      <ChevronDown size={18} />
                    }
                  </div>
                </div>

                <div 
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    expandedCategory === 'softSkills' ? 'max-h-[500px]' : 'max-h-0'
                  }`}
                >
                  <div className="p-4 border-t border-gray-100 dark:border-gray-800">
                    <div className="space-y-3">
                      {softSkillsWithIcons.map((item, index) => (
                        <div 
                          key={index}
                          className="flex items-center gap-3 p-2 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700"
                        >
                          <div className="w-8 h-8 rounded-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 flex items-center justify-center text-gray-600 dark:text-gray-300">
                            {item.icon}
                          </div>
                          <span className="text-xs font-medium">{item.skill}</span>
                        </div>
                      ))}
                    </div>
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