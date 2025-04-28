'use client';

import { forwardRef, useState } from 'react';
import {
  Code,
  Server,
  Languages as LanguagesIcon,
  User,
  ChevronDown,
  ChevronUp,
  Layers
} from 'lucide-react';
import AnimatedSection from '@/components/common/animations/AnimatedSection';
import { useLanguage } from '@/contexts';
import { profileData } from '@/translations';

type SkillsSectionProps = {
  animationsEnabled: boolean;
};

const SkillsSection = forwardRef<HTMLElement, SkillsSectionProps>(
  ({ animationsEnabled }, ref) => {
    const { t } = useLanguage();

    // State for expandable mobile sections
    const [expandedCategory, setExpandedCategory] = useState<string | null>("development");

    // Toggle expanded category on mobile
    const toggleCategory = (category: string) => {
      if (expandedCategory === category) {
        setExpandedCategory(null);
      } else {
        setExpandedCategory(category);
      }
    };

    // Front-end skills from profileData
    const frontendSkills = profileData.skills.frontend;

    // Back-end skills from profileData
    const backendSkills = profileData.skills.backend;

    // Other programming languages from profileData
    const otherLanguages = profileData.skills.other;

    // Tools and technologies from profileData
    const toolsAndTech = profileData.skills.tools;

    // Reorganized skill categories
    const skillCategories = [
      {
        id: "development",
        name: t.technicalSkills,
        icon: <Code size={22} className="sm:w-6 sm:h-6" />,
        skillGroups: [
          {
            title: t.frontend,
            skills: frontendSkills
          },
          {
            title: t.backend,
            skills: backendSkills
          },
          {
            title: t.otherLang,
            skills: otherLanguages
          }
        ]
      },
      {
        id: "technologies",
        name: t.toolsTech,
        icon: <Server size={22} className="sm:w-6 sm:h-6" />,
        skillGroups: [
          {
            title: "",
            skills: toolsAndTech
          }
        ]
      }
    ];

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
              {t.skills}
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-base sm:text-lg">
              {t.skillsSubtitle || "Technical skills, tools, and areas of expertise"}
            </p>
          </AnimatedSection>

          {/* Desktop View - Card Layout */}
          <div className="hidden md:block">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
              {skillCategories.map((category, categoryIndex) => (
                <AnimatedSection
                  key={category.id}
                  animation="fade-in"
                  delay={100 + categoryIndex * 50}
                  disabled={!animationsEnabled}
                >
                  <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden h-full luxury-card">
                    {/* Header */}
                    <div className="p-4 sm:p-6 border-b border-gray-100 dark:border-gray-800 flex items-center gap-3 sm:gap-4">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gray-50 dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-300">
                        {category.icon}
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold">{category.name}</h3>
                    </div>

                    {/* Skills Content */}
                    <div className="p-4 sm:p-6">
                      {category.skillGroups.map((group, groupIndex) => (
                        <div key={groupIndex} className={groupIndex > 0 ? "mt-5" : ""}>
                          {group.title && (
                            <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                              {group.title}
                            </h4>
                          )}
                          <div className="flex flex-wrap gap-2">
                            {group.skills.map((skill, idx) => (
                              <div
                                key={idx}
                                className="flex flex-col bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-300 py-2 px-3 rounded-lg border border-gray-100 dark:border-gray-700"
                              >
                                <span className="text-sm font-medium">{skill}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>

          {/* Mobile View - Accordion Layout */}
          <div className="md:hidden">
            {/* Skill Accordions */}
            <div className="space-y-4">
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
                      className={`transition-all duration-300 ease-in-out overflow-hidden ${expandedCategory === category.id ? 'max-h-[800px]' : 'max-h-0'
                        }`}
                    >
                      <div className="p-4 border-t border-gray-100 dark:border-gray-800">
                        {category.skillGroups.map((group, groupIndex) => (
                          <div key={groupIndex} className={groupIndex > 0 ? "mt-4" : ""}>
                            {group.title && (
                              <h4 className="text-xs font-semibold text-gray-700 dark:text-gray-300 mb-2">
                                {group.title}
                              </h4>
                            )}
                            <div className="flex flex-wrap gap-2">
                              {group.skills.map((skill, idx) => (
                                <div
                                  key={idx}
                                  className="flex flex-col bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-300 py-1.5 px-2.5 rounded-lg border border-gray-100 dark:border-gray-700"
                                >
                                  <span className="text-xs font-medium">{skill}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }
);

SkillsSection.displayName = 'SkillsSection';

export default SkillsSection;