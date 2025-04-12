'use client';

import { forwardRef } from 'react';
import { GraduationCap, Calendar, CheckCircle, BookOpen, MapPin } from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';
import { useLanguage } from '@/context/LanguageContext';
import { localizedData } from '@/translations';

type EducationSectionProps = {
  animationsEnabled: boolean;
};

const EducationSection = forwardRef<HTMLElement, EducationSectionProps>(
  ({ animationsEnabled }, ref) => {
    const { currentLang, t } = useLanguage();

    // Get education data from localized data
    const allEducation = localizedData[currentLang].education;

    return (
      <section 
        ref={ref} 
        className="py-24 relative overflow-hidden bg-gradient-to-b from-blue-50 to-white dark:from-blue-950/20 dark:to-gray-900"
      >
        {/* Decorative elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {/* Blue gradient accents */}
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-blue-100 dark:bg-blue-900/20 rounded-full blur-3xl opacity-70 transform -translate-x-1/2"></div>
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-blue-100 dark:bg-blue-900/20 rounded-full blur-3xl opacity-70 transform translate-x-1/2"></div>
          
          {/* Subtle patterns */}
          <div className="absolute inset-0 opacity-5">
            <svg width="100%" height="100%">
              <pattern id="dots-pattern" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle cx="2" cy="2" r="1" fill="currentColor" className="text-blue-500 dark:text-blue-400" />
              </pattern>
              <rect width="100%" height="100%" fill="url(#dots-pattern)" />
            </svg>
          </div>
        </div>

        <div className="container mx-auto max-w-7xl px-4 relative z-10">
          <AnimatedSection animation="fade-in" disabled={!animationsEnabled} className="mb-16 text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-6">
              {t.education}
            </h2>
            <p className="text-center text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-lg">
              {currentLang === "en"
                ? "My academic journey and qualifications"
                : "เส้นทางการศึกษาและคุณสมบัติของฉัน"}
            </p>
          </AnimatedSection>

          {/* Education Timeline with modern design */}
          <div className="max-w-4xl mx-auto">
            {allEducation.map((edu, index) => (
              <AnimatedSection
                key={index}
                animation="fade-in"
                delay={100 + index * 100}
                disabled={!animationsEnabled}
                className="mb-14 relative"
              >
                
                
                <div className="flex items-start gap-8">
                  {/* Left side - icon and year */}
                  <div className="flex flex-col items-center">
                    <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/50 border-4 border-white dark:border-gray-900 flex items-center justify-center text-blue-600 dark:text-blue-300 z-10">
                      <GraduationCap size={16} />
                    </div>
                    <span className="mt-3 px-3 py-1 rounded-full text-xs font-medium bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border border-blue-100 dark:border-blue-800/50">
                      {edu.duration}
                    </span>
                  </div>
                  
                  {/* Right side - education card */}
                  <div className="flex-1 bg-white dark:bg-gray-800 rounded-2xl shadow-md border border-blue-100 dark:border-blue-900/50 overflow-hidden hover:shadow-lg transition-all duration-300">
                    {/* Card header with institution logo */}
                    <div className="border-b border-blue-50 dark:border-blue-900/50 p-6 flex items-center gap-6">
                      <div className="w-20 h-20 bg-white rounded-lg overflow-hidden flex items-center justify-center p-2 border border-blue-50 dark:border-blue-900/50">
                        <img
                          src={index === 0 
                            ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_wx9ytkWpaORplO5wMqeYtEtP23Wb3bSigw&s"
                            : "https://upload.wikimedia.org/wikipedia/commons/9/90/Streesmutprakan_School_logo.png"}
                          alt={edu.institution}
                          className="w-full h-auto object-contain"
                        />
                      </div>
                      
                      <div>
                        <h3 className="text-xl font-bold">{edu.institution}</h3>
                        <div className="flex items-center gap-2 mt-2 text-sm text-gray-600 dark:text-gray-300">
                          <BookOpen size={14} className="text-blue-500" />
                          <span>{edu.degree}</span>
                        </div>
                        <div className="flex items-center gap-2 mt-1 text-sm text-gray-600 dark:text-gray-300">
                          <MapPin size={14} className="text-blue-500" />
                          <span>
                            {currentLang === "en" 
                              ? "Samut Prakan, Thailand" 
                              : "สมุทรปราการ, ประเทศไทย"}
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Card content with highlights */}
                    <div className="p-6">
                      {index === 0 ? (
                        // University content
                        <>
                          <h4 className="font-medium text-gray-800 dark:text-gray-200 mb-4">
                            {currentLang === "en" 
                              ? "Program Highlights" 
                              : "จุดเด่นของหลักสูตร"}
                          </h4>
                          
                          <div className="space-y-3">
                            <div className="flex items-start gap-3">
                              <CheckCircle size={18} className="text-blue-500 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-600 dark:text-gray-300 text-sm">
                                {currentLang === "en" 
                                  ? "Focus on software development and modern web technologies" 
                                  : "เน้นการพัฒนาซอฟต์แวร์และเทคโนโลยีเว็บสมัยใหม่"}
                              </span>
                            </div>
                            <div className="flex items-start gap-3">
                              <CheckCircle size={18} className="text-blue-500 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-600 dark:text-gray-300 text-sm">
                                {currentLang === "en" 
                                  ? "Project-based curriculum with real-world applications" 
                                  : "หลักสูตรที่เน้นโปรเจกต์จริงและการประยุกต์ใช้งานในโลกจริง"}
                              </span>
                            </div>
                            <div className="flex items-start gap-3">
                              <CheckCircle size={18} className="text-blue-500 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-600 dark:text-gray-300 text-sm">
                                {currentLang === "en" 
                                  ? "Collaborative environment with industry partnerships" 
                                  : "สภาพแวดล้อมการทำงานร่วมกันกับพันธมิตรในอุตสาหกรรม"}
                              </span>
                            </div>
                          </div>
                          
                          {/* Key courses */}
                          <div className="mt-6">
                            <h4 className="font-medium text-gray-800 dark:text-gray-200 mb-3">
                              {currentLang === "en" 
                                ? "Key Courses" 
                                : "วิชาหลัก"}
                            </h4>
                            <div className="flex flex-wrap gap-2">
                              {[
                                currentLang === "en" ? "Software Engineering" : "วิศวกรรมซอฟต์แวร์",
                                currentLang === "en" ? "Web Development" : "การพัฒนาเว็บ",
                                currentLang === "en" ? "Database Systems" : "ระบบฐานข้อมูล",
                                currentLang === "en" ? "Cloud Computing" : "การประมวลผลคลาวด์",
                                currentLang === "en" ? "Algorithm Design" : "การออกแบบอัลกอริทึม"
                              ].map((course, courseIndex) => (
                                <span 
                                  key={courseIndex}
                                  className="px-3 py-1 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 rounded-full text-xs font-medium border border-blue-100 dark:border-blue-800/50"
                                >
                                  {course}
                                </span>
                              ))}
                            </div>
                          </div>
                        </>
                      ) : (
                        // High School content
                        <>
                          <h4 className="font-medium text-gray-800 dark:text-gray-200 mb-4">
                            {currentLang === "en" 
                              ? "Program Description" 
                              : "รายละเอียดโครงการ"}
                          </h4>
                          
                          <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                            {edu.description}
                          </p>
                          
                          <div className="space-y-3">
                            <div className="flex items-start gap-3">
                              <CheckCircle size={18} className="text-blue-500 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-600 dark:text-gray-300 text-sm">
                                {currentLang === "en" 
                                  ? "Advanced curriculum in Science and Mathematics" 
                                  : "หลักสูตรขั้นสูงในวิชาวิทยาศาสตร์และคณิตศาสตร์"}
                              </span>
                            </div>
                            <div className="flex items-start gap-3">
                              <CheckCircle size={18} className="text-blue-500 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-600 dark:text-gray-300 text-sm">
                                {currentLang === "en" 
                                  ? "Specialized laboratory training and research projects" 
                                  : "การฝึกปฏิบัติในห้องปฏิบัติการและโครงงานวิจัยเฉพาะทาง"}
                              </span>
                            </div>
                            <div className="flex items-start gap-3">
                              <CheckCircle size={18} className="text-blue-500 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-600 dark:text-gray-300 text-sm">
                                {currentLang === "en" 
                                  ? "Focus on developing scientific methodology and critical thinking" 
                                  : "เน้นการพัฒนาวิธีการทางวิทยาศาสตร์และการคิดวิเคราะห์"}
                              </span>
                            </div>
                          </div>
                        </>
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