'use client';

import { forwardRef, useState } from 'react';
import { GraduationCap, CheckCircle, BookOpen, MapPin, ChevronDown, ChevronUp } from 'lucide-react';
import Image from 'next/image';
import AnimatedSection from '@/components/common/animations/AnimatedSection';
import { useLanguage } from '@/contexts';
import { localizedData } from '@/translations';

type EducationSectionProps = {
  animationsEnabled: boolean;
};

const EducationSection = forwardRef<HTMLElement, EducationSectionProps>(
  ({ animationsEnabled }, ref) => {
    const { currentLang, t } = useLanguage();
    const [expandedItems, setExpandedItems] = useState<{[key: number]: boolean}>({});

    // Get education data from localized data
    const allEducation = localizedData[currentLang].education;

    // Toggle expanded state - สำหรับมือถือเท่านั้น
    const toggleExpand = (index: number) => {
      setExpandedItems(prev => ({
        ...prev,
        [index]: !prev[index]
      }));
    };

    return (
      <section 
        ref={ref} 
        className="py-16 sm:py-20 md:py-24 relative overflow-hidden bg-gradient-to-b from-blue-50 to-white dark:from-blue-950/20 dark:to-gray-900"
      >
        {/* Decorative elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {/* Blue gradient accents - ตำแหน่งต่างกันระหว่างมือถือและคอมพิวเตอร์ */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 md:left-1/4 md:translate-x-0 
                         w-72 md:w-64 h-72 md:h-64 
                         bg-blue-100/40 dark:bg-blue-900/20 rounded-full blur-3xl opacity-50"></div>
                         
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 md:right-1/4 md:left-auto md:translate-x-0 
                        w-72 md:w-64 h-72 md:h-64 
                        bg-blue-100/40 dark:bg-blue-900/20 rounded-full blur-3xl opacity-50"></div>
        </div>

        <div className="container mx-auto px-5 sm:px-6 relative z-10">
          <AnimatedSection animation="fade-in" disabled={!animationsEnabled} className="mb-10 sm:mb-16 text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-3 sm:mb-6">
              {t.education}
            </h2>
            <p className="text-center text-gray-600 dark:text-gray-300 mx-auto text-sm sm:text-base md:text-lg max-w-2xl">
              {currentLang === "en"
                ? "My academic journey and qualifications"
                : "เส้นทางการศึกษาและคุณสมบัติของฉัน"}
            </p>
          </AnimatedSection>

          {/* แยกการแสดงผลระหว่างมือถือ/แท็บเล็ต และคอมพิวเตอร์ */}
          <div className="md:hidden">
            {/* มือถือและแท็บเล็ต: การ์ดแบบพับเก็บได้ */}
            <div className="space-y-6">
              {allEducation.map((edu, index) => (
                <AnimatedSection
                  key={index}
                  animation="fade-in"
                  delay={100 + index * 100}
                  disabled={!animationsEnabled}
                  className="bg-white dark:bg-gray-800 rounded-xl shadow-md border border-blue-100 dark:border-blue-900/50 overflow-hidden"
                >
                  {/* ส่วนหัวของการ์ด - แสดงข้อมูลหลัก */}
                  <div className="p-4 flex items-center gap-3">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-blue-50 dark:bg-blue-900/30 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-300 border border-blue-100 dark:border-blue-900/50">
                      <GraduationCap size={20} className="sm:w-6 sm:h-6" />
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold text-base sm:text-lg truncate">{edu.institution}</h3>
                      <div className="text-blue-600 dark:text-blue-300 text-xs sm:text-sm font-medium">
                        {edu.duration}
                      </div>
                    </div>
                    
                    {/* ปุ่มแสดง/ซ่อนข้อมูลเพิ่มเติม */}
                    <button 
                      onClick={() => toggleExpand(index)}
                      className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400"
                      aria-label={expandedItems[index] ? "Show less" : "Show more"}
                    >
                      {expandedItems[index] ? 
                        <ChevronUp size={18} className="sm:w-5 sm:h-5" /> : 
                        <ChevronDown size={18} className="sm:w-5 sm:h-5" />
                      }
                    </button>
                  </div>
                  
                  {/* ส่วนรายละเอียด - แสดงเฉพาะเมื่อกดขยาย */}
                  {expandedItems[index] && (
                    <div className="border-t border-blue-100 dark:border-blue-900/50">
                      {/* ข้อมูลพื้นฐาน */}
                      <div className="p-4 bg-blue-50/50 dark:bg-blue-900/20">
                        <div className="flex items-center gap-2 mb-2">
                          <BookOpen size={14} className="sm:w-4 sm:h-4 text-blue-500" />
                          <span className="text-xs sm:text-sm">{edu.degree}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin size={14} className="sm:w-4 sm:h-4 text-blue-500" />
                          <span className="text-xs sm:text-sm">
                            {currentLang === "en" 
                              ? "Samut Prakan, Thailand" 
                              : "สมุทรปราการ, ประเทศไทย"}
                          </span>
                        </div>
                      </div>
                      
                      {/* ข้อมูลสถาบัน */}
                      <div className="p-4 flex items-center gap-4 border-b border-blue-100 dark:border-blue-900/20">
                        <div className="w-16 h-16 bg-white rounded-lg overflow-hidden flex items-center justify-center p-1 border border-blue-50 dark:border-blue-900/50 relative">
                          <Image
                            src={index === 0 
                              ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_wx9ytkWpaORplO5wMqeYtEtP23Wb3bSigw&s"
                              : "https://upload.wikimedia.org/wikipedia/commons/9/90/Streesmutprakan_School_logo.png"}
                            alt={edu.institution}
                            fill
                            sizes="64px"
                            className="object-contain p-1"
                          />
                        </div>
                        
                        {index === 1 && edu.description && (
                          <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 flex-1">
                            {edu.description.substring(0, 120)}
                            {edu.description.length > 120 ? '...' : ''}
                          </p>
                        )}
                      </div>
                      
                      {/* จุดเด่นของหลักสูตร */}
                      <div className="p-4">
                        <h4 className="font-medium text-sm sm:text-base mb-3">
                          {index === 0 ? 
                            (currentLang === "en" ? "Program Highlights" : "จุดเด่นของหลักสูตร") :
                            (currentLang === "en" ? "Key Features" : "ลักษณะเด่น")
                          }
                        </h4>
                        
                        <div className="space-y-2">
                          {index === 0 ? (
                            // สำหรับมหาวิทยาลัย
                            <>
                              <div className="flex items-start gap-2">
                                <CheckCircle size={14} className="sm:w-4 sm:h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                                <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">
                                  {currentLang === "en" 
                                    ? "Focus on software development and modern web technologies" 
                                    : "เน้นการพัฒนาซอฟต์แวร์และเทคโนโลยีเว็บสมัยใหม่"}
                                </span>
                              </div>
                              <div className="flex items-start gap-2">
                                <CheckCircle size={14} className="sm:w-4 sm:h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                                <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">
                                  {currentLang === "en" 
                                    ? "Project-based curriculum with real-world applications" 
                                    : "หลักสูตรที่เน้นโปรเจกต์จริงและการประยุกต์ใช้งานในโลกจริง"}
                                </span>
                              </div>
                              
                              {/* วิชาหลัก */}
                              <div className="mt-3 pt-3 border-t border-blue-100/50 dark:border-blue-900/30">
                                <div className="text-xs sm:text-sm font-medium mb-2">
                                  {currentLang === "en" ? "Key Courses" : "วิชาหลัก"}:
                                </div>
                                <div className="flex flex-wrap gap-1.5">
                                  {[
                                    currentLang === "en" ? "Software Engineering" : "วิศวกรรมซอฟต์แวร์",
                                    currentLang === "en" ? "Web Development" : "การพัฒนาเว็บ",
                                    currentLang === "en" ? "Database" : "ฐานข้อมูล"
                                  ].map((course, i) => (
                                    <span key={i} className="inline-block px-2 py-1 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 rounded-full text-[10px] sm:text-xs border border-blue-100 dark:border-blue-800/50">
                                      {course}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            </>
                          ) : (
                            // สำหรับโรงเรียน
                            <>
                              <div className="flex items-start gap-2">
                                <CheckCircle size={14} className="sm:w-4 sm:h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                                <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">
                                  {currentLang === "en" 
                                    ? "Advanced curriculum in Science and Mathematics" 
                                    : "หลักสูตรขั้นสูงในวิชาวิทยาศาสตร์และคณิตศาสตร์"}
                                </span>
                              </div>
                              <div className="flex items-start gap-2">
                                <CheckCircle size={14} className="sm:w-4 sm:h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                                <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">
                                  {currentLang === "en" 
                                    ? "Specialized laboratory training" 
                                    : "การฝึกปฏิบัติในห้องปฏิบัติการเฉพาะทาง"}
                                </span>
                              </div>
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                  )}
                </AnimatedSection>
              ))}
            </div>
          </div>

          {/* แสดงเฉพาะบนคอมพิวเตอร์ - Education Timeline แบบดั้งเดิม */}
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
                      <div className="w-20 h-20 bg-white rounded-lg overflow-hidden flex items-center justify-center p-2 border border-blue-50 dark:border-blue-900/50 relative">
                        <Image
                          src={index === 0 
                            ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_wx9ytkWpaORplO5wMqeYtEtP23Wb3bSigw&s"
                            : "https://upload.wikimedia.org/wikipedia/commons/9/90/Streesmutprakan_School_logo.png"}
                          alt={edu.institution}
                          fill
                          sizes="80px"
                          className="object-contain p-1"
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