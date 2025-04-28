'use client';

import { forwardRef, useState } from 'react';
import { GraduationCap, CheckCircle, BookOpen, MapPin, ChevronDown, ChevronUp } from 'lucide-react';
import Image from 'next/image';
import AnimatedSection from '@/components/common/animations/AnimatedSection';
import { useLanguage } from '@/contexts';

type EducationSectionProps = {
  animationsEnabled: boolean;
};

const EducationSection = forwardRef<HTMLElement, EducationSectionProps>(
  ({ animationsEnabled }, ref) => {
    const { t, getLocalizedEducation } = useLanguage();
    const [expandedItems, setExpandedItems] = useState<{[key: number]: boolean}>({});

    // Get education data using the localized helper
    const allEducation = getLocalizedEducation();

    // Toggle expanded state for mobile only
    const toggleExpand = (index: number) => {
      setExpandedItems(prev => ({
        ...prev,
        [index]: !prev[index]
      }));
    };

    return (
      <section 
        ref={ref} 
        className="py-16 sm:py-20 md:py-24 relative overflow-hidden bg-white dark:bg-black"
      >
        {/* Decorative elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {/* Gradient accents - positioned differently for mobile vs desktop */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 md:left-1/4 md:translate-x-0 
                         w-72 md:w-64 h-72 md:h-64 
                         bg-gray-100/40 dark:bg-gray-800/20 rounded-full blur-3xl opacity-50"></div>
                         
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 md:right-1/4 md:left-auto md:translate-x-0 
                        w-72 md:w-64 h-72 md:h-64 
                        bg-gray-100/40 dark:bg-gray-800/20 rounded-full blur-3xl opacity-50"></div>
        </div>

        <div className="container mx-auto px-5 sm:px-6 relative z-10">
          <AnimatedSection animation="fade-in" disabled={!animationsEnabled} className="mb-10 sm:mb-16 text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-3 sm:mb-6 text-gray-900 dark:text-white">
              {t.education}
            </h2>
            <p className="text-center text-gray-600 dark:text-gray-300 mx-auto text-sm sm:text-base md:text-lg max-w-2xl">
              {t.academicJourney}
            </p>
          </AnimatedSection>

          {/* Mobile/tablet view */}
          <div className="md:hidden max-w-md mx-auto">
            {/* Collapsible cards for mobile */}
            <div className="space-y-6">
              {allEducation.map((edu, index) => (
                <AnimatedSection
                  key={index}
                  animation="fade-in"
                  delay={100 + index * 100}
                  disabled={!animationsEnabled}
                  className="bg-white dark:bg-gray-900 rounded-xl shadow-md border border-gray-100 dark:border-gray-800 overflow-hidden luxury-card"
                >
                  {/* Card header - always visible, clickable to expand */}
                  <div 
                    className="p-4 flex items-center gap-3 cursor-pointer"
                    onClick={() => toggleExpand(index)}
                  >
                    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gray-50 dark:bg-gray-800 rounded-full flex items-center justify-center text-gray-600 dark:text-gray-300 border border-gray-100 dark:border-gray-700">
                      <GraduationCap size={20} className="sm:w-6 sm:h-6" />
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold text-base sm:text-lg truncate">{edu.institution}</h3>
                      <div className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm font-medium">
                        {edu.duration}
                      </div>
                    </div>
                    
                    {/* Expand/collapse button with animation */}
                    <div 
                      className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full bg-gray-50 dark:bg-gray-800 text-gray-600 dark:text-gray-400 transition-transform duration-300"
                    >
                      {expandedItems[index] ? 
                        <ChevronUp size={18} className="sm:w-5 sm:h-5 transition-transform duration-300" /> : 
                        <ChevronDown size={18} className="sm:w-5 sm:h-5 transition-transform duration-300" />
                      }
                    </div>
                  </div>
                  
                  {/* Expandable content - shown when toggled */}
                  <div 
                    className={`border-t border-gray-100 dark:border-gray-800 transition-all duration-300 ease-in-out overflow-hidden ${
                      expandedItems[index] ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    {/* Basic info */}
                    <div className="p-4 bg-gray-50/50 dark:bg-gray-800/50">
                      <div className="flex items-center gap-2 mb-2">
                        <BookOpen size={14} className="sm:w-4 sm:h-4 text-gray-500" />
                        <span className="text-xs sm:text-sm">{edu.degree}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin size={14} className="sm:w-4 sm:h-4 text-gray-500" />
                        <span className="text-xs sm:text-sm">{edu.location}</span>
                      </div>
                    </div>
                    
                    {/* Institution info */}
                    <div className="p-4 flex items-center gap-4 border-b border-gray-100 dark:border-gray-800">
                      <div className="w-16 h-16 bg-white dark:bg-gray-900 rounded-lg overflow-hidden flex items-center justify-center p-1 border border-gray-100 dark:border-gray-800 relative">
                        <Image
                          src={edu.logo}
                          alt={edu.institution}
                          fill
                          sizes="64px"
                          className="object-contain p-1"
                        />
                      </div>
                      
                      {edu.description && (
                        <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 flex-1">
                          {edu.description.substring(0, 120)}
                          {edu.description.length > 120 ? '...' : ''}
                        </p>
                      )}
                    </div>
                    
                    {/* Program highlights */}
                    <div className="p-4">
                      <h4 className="font-medium text-sm sm:text-base mb-3 text-gray-900 dark:text-white">
                        {t.programHighlights}
                      </h4>
                      
                      <div className="space-y-2">
                        {edu.highlights?.map((highlight, idx) => (
                          <div key={idx} className="flex items-start gap-2">
                            <CheckCircle size={14} className="sm:w-4 sm:h-4 text-gray-500 mt-0.5 flex-shrink-0" />
                            <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">
                              {highlight}
                            </span>
                          </div>
                        ))}
                        
                        {/* Key courses */}
                        {edu.courses && edu.courses.length > 0 && (
                          <div className="mt-3 pt-3 border-t border-gray-100/50 dark:border-gray-800/30">
                            <div className="text-xs sm:text-sm font-medium mb-2 text-gray-900 dark:text-white">
                              {t.keyCourses}:
                            </div>
                            <div className="flex flex-wrap gap-1.5">
                              {edu.courses.map((course, i) => (
                                <span key={i} className="inline-block px-2 py-1 bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-[10px] sm:text-xs border border-gray-100 dark:border-gray-700">
                                  {course}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>

          {/* Desktop view - Timeline style */}
          <div className="hidden md:block max-w-4xl mx-auto">
            {allEducation.map((edu, index) => (
              <AnimatedSection
                key={index}
                animation="fade-in"
                delay={100 + index * 100}
                disabled={!animationsEnabled}
                className="mb-14 relative"
              >
                <div className="flex items-start gap-8">
                  {/* Left side - timeline indicator */}
                  <div className="flex flex-col items-center">
                    <div className="w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-800 border-4 border-white dark:border-black flex items-center justify-center text-gray-600 dark:text-gray-300 z-10">
                      <GraduationCap size={16} />
                    </div>
                    <span className="mt-3 px-3 py-1 rounded-full text-xs font-medium bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-100 dark:border-gray-700">
                      {edu.duration}
                    </span>
                  </div>
                  
                  {/* Right side - education card */}
                  <div className="flex-1 bg-white dark:bg-gray-900 rounded-2xl shadow-md border border-gray-100 dark:border-gray-800 overflow-hidden hover:shadow-lg transition-all duration-300 luxury-card">
                    {/* Card header with institution logo */}
                    <div className="border-b border-gray-100 dark:border-gray-800 p-6 flex items-center gap-6">
                      <div className="w-20 h-20 bg-white dark:bg-gray-900 rounded-lg overflow-hidden flex items-center justify-center p-2 border border-gray-100 dark:border-gray-800 relative">
                        <Image
                          src={edu.logo}
                          alt={edu.institution}
                          fill
                          sizes="80px"
                          className="object-contain p-1"
                        />
                      </div>
                      
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">{edu.institution}</h3>
                        <div className="flex items-center gap-2 mt-2 text-sm text-gray-600 dark:text-gray-300">
                          <BookOpen size={14} className="text-gray-500" />
                          <span>{edu.degree}</span>
                        </div>
                        <div className="flex items-center gap-2 mt-1 text-sm text-gray-600 dark:text-gray-300">
                          <MapPin size={14} className="text-gray-500" />
                          <span>{edu.location}</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Card content with highlights */}
                    <div className="p-6">
                      {edu.description && (
                        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                          {edu.description}
                        </p>
                      )}
                      
                      {edu.highlights && edu.highlights.length > 0 && (
                        <>
                          <h4 className="font-medium text-gray-900 dark:text-white mb-4">
                            {t.programHighlights}
                          </h4>
                          
                          <div className="space-y-3">
                            {edu.highlights.map((highlight, idx) => (
                              <div key={idx} className="flex items-start gap-3">
                                <CheckCircle size={18} className="text-gray-500 mt-0.5 flex-shrink-0" />
                                <span className="text-gray-600 dark:text-gray-300 text-sm">
                                  {highlight}
                                </span>
                              </div>
                            ))}
                          </div>
                        </>
                      )}
                      
                      {/* Key courses */}
                      {edu.courses && edu.courses.length > 0 && (
                        <div className="mt-6">
                          <h4 className="font-medium text-gray-900 dark:text-white mb-3">
                            {t.keyCourses}
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {edu.courses.map((course, courseIndex) => (
                              <span 
                                key={courseIndex}
                                className="px-3 py-1 bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-xs font-medium border border-gray-100 dark:border-gray-700"
                              >
                                {course}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
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