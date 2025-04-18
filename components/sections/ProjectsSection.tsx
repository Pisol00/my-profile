'use client';

import { forwardRef, useState, useMemo } from 'react';
import { Badge } from '@/components/ui/badge';
import { Github, ExternalLink, Code2, FolderGit2 } from 'lucide-react';
import Link from 'next/link'; // เพิ่ม Next.js Link
import AnimatedSection from '@/components/common/AnimatedSection';
import { useLanguage } from '@/contexts';
import { localizedData } from '@/translations';

type ProjectsSectionProps = {
  animationsEnabled: boolean;
};

const ProjectsSection = forwardRef<HTMLElement, ProjectsSectionProps>(
  ({ animationsEnabled }, ref) => {
    const { currentLang, t } = useLanguage();
    const [activeTab, setActiveTab] = useState("all"); // For projects filtering

    // Get the projects data directly from localizedData
    const projects = localizedData[currentLang].projects;

    // Filter projects by technology
    const filteredProjects = useMemo(() => {
      if (activeTab === "all") return projects;
      return projects.filter(project => 
        project.technologies.some(tech => 
          tech.toLowerCase().includes(activeTab.toLowerCase())
        )
      );
    }, [projects, activeTab]);

    // Get unique technology categories
    const projectCategories = useMemo(() => {
      const categories = new Set<string>();
      categories.add("all");
      
      projects.forEach(project => {
        project.technologies.forEach(tech => {
          if (tech.includes("React")) categories.add("React");
          else if (tech.includes("Node")) categories.add("Node.js");
          else if (tech.includes("Django") || tech.includes("Flask")) categories.add("Python");
          else if (tech.includes("Java")) categories.add("Java");
          else if (tech.includes("Docker") || tech.includes("AWS") || tech.includes("Cloud")) categories.add("DevOps");
        });
      });
      
      return Array.from(categories);
    }, [projects]);

    // สร้าง custom component สำหรับ external link ที่ใช้ Link component ของ Next.js
    const ExternalLinkWrapper = ({ href, children, className }: { href: string; children: React.ReactNode; className?: string }) => {
      // ถ้าเป็น external link ให้ใช้ <a> tag
      if (href.startsWith('http')) {
        return (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={className}
          >
            {children}
          </a>
        );
      }
      
      // ถ้าเป็น internal link ให้ใช้ Next.js Link
      return (
        <Link href={href} className={className}>
          {children}
        </Link>
      );
    };

    return (
      <section 
        ref={ref} 
        className="py-16 sm:py-20 md:py-24 relative overflow-hidden bg-white dark:bg-gray-900"
      >
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Grid pattern background */}
          <div className="absolute inset-0 opacity-5">
            <svg width="100%" height="100%">
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" className="text-blue-500 dark:text-blue-400" />
              </pattern>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>
          
          {/* Decorative circles */}
          <div className="absolute top-1/4 -right-20 w-60 sm:w-80 h-60 sm:h-80 rounded-full bg-blue-50 dark:bg-blue-900/20 blur-3xl opacity-70"></div>
          <div className="absolute bottom-1/4 -left-20 w-60 sm:w-80 h-60 sm:h-80 rounded-full bg-blue-50 dark:bg-blue-900/20 blur-3xl opacity-70"></div>
        </div>

        <div className="container mx-auto max-w-7xl px-4 sm:px-6 relative z-10">
          <AnimatedSection animation="fade-in" disabled={!animationsEnabled} className="mb-10 sm:mb-16 text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4 sm:mb-6">
              {t.projectsHighlight}
            </h2>
            <p className="text-center text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-base sm:text-lg">
              {currentLang === "en"
                ? "Featured projects showcasing my skills and experience"
                : "โปรเจกต์เด่นที่แสดงให้เห็นถึงทักษะและประสบการณ์ของฉัน"}
            </p>
          </AnimatedSection>

          {/* Project Category Filter - Responsive scrollable on mobile */}
          <div className="flex flex-wrap justify-center gap-2 mb-8 sm:mb-12 overflow-x-auto pb-2 -mx-2 px-2">
            {projectCategories.map((category, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(category)}
                className={`px-3 sm:px-5 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-all cursor-pointer flex-shrink-0 ${
                  activeTab === category 
                    ? "bg-blue-600 text-white shadow-md shadow-blue-200 dark:shadow-blue-900/20" 
                    : "bg-blue-50 dark:bg-blue-900/20 text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-blue-800/30"
                }`}
              >
                {category === "all" 
                  ? currentLang === "en" ? "All Projects" : "ทั้งหมด"
                  : category}
              </button>
            ))}
          </div>

          {/* Projects Grid - Responsive */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {filteredProjects.map((project, index) => (
              <AnimatedSection
                key={index}
                delay={100 + index * 50}
                animation="fade-in"
                disabled={!animationsEnabled}
              >
                <div className="group relative bg-white dark:bg-gray-800 rounded-xl overflow-hidden border border-blue-100 dark:border-blue-900/50 hover:border-blue-300 dark:hover:border-blue-700 shadow-md hover:shadow-xl hover:shadow-blue-100 dark:hover:shadow-blue-900/10 transition-all duration-300 h-full flex flex-col">
                  {/* Project Header */}
                  <div className="flex items-center justify-between p-4 sm:p-6 border-b border-blue-50 dark:border-blue-900/50 card-adjust-padding">
                    <div className="flex items-center gap-2 sm:gap-3">
                      <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center text-blue-600 dark:text-blue-300">
                        <FolderGit2 size={18} className="sm:w-5 sm:h-5" />
                      </div>
                      <h3 className="font-bold text-base sm:text-xl truncate">{project.title}</h3>
                    </div>
                    <ExternalLinkWrapper 
                      href={project.link}
                      className="bg-blue-50 dark:bg-blue-900/30 hover:bg-blue-100 dark:hover:bg-blue-800/50 text-blue-600 dark:text-blue-400 p-1.5 sm:p-2 rounded-full transition-colors"
                    >
                      <Github size={16} className="sm:w-[18px] sm:h-[18px]" aria-label={`View ${project.title} on GitHub`} />
                    </ExternalLinkWrapper>
                  </div>

                  {/* Project Content */}
                  <div className="p-4 sm:p-6 flex-1 flex flex-col card-adjust-padding">
                    <p className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm mb-4 sm:mb-6 flex-1 line-clamp-3 sm:line-clamp-4">
                      {project.description}
                    </p>

                    {/* Technologies - responsive badge sizes */}
                    <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-6 card-adjust-gap">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge 
                          key={techIndex} 
                          variant="outline" 
                          className="bg-blue-50/50 dark:bg-blue-900/10 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-800/50 hover:bg-blue-100 dark:hover:bg-blue-800/30 py-0.5 text-xs truncate max-w-[120px] sm:max-w-none"
                        >
                          <Code2 size={10} className="sm:w-3 sm:h-3 mr-1 flex-shrink-0" />
                          <span className="truncate">{tech}</span>
                        </Badge>
                      ))}
                    </div>

                    {/* Project Link */}
                    <ExternalLinkWrapper
                      href={project.link}
                      className="inline-flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors font-medium mt-auto"
                    >
                      <span>{t.viewProject}</span>
                      <ExternalLink size={12} className="sm:w-3.5 sm:h-3.5 flex-shrink-0" />
                    </ExternalLinkWrapper>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* "View More Projects" button at the bottom */}
          <div className="flex justify-center mt-10 sm:mt-12">
            <ExternalLinkWrapper
              href={`https://github.com/${localizedData[currentLang].github}`}
              className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 rounded-lg bg-white dark:bg-gray-800 border border-blue-200 dark:border-blue-800 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all shadow-md hover:shadow-lg font-medium text-sm sm:text-base"
            >
              <Github size={16} className="sm:w-[18px] sm:h-[18px]" />
              {currentLang === "en" ? "View More Projects on GitHub" : "ดูโปรเจกต์เพิ่มเติมบน GitHub"}
            </ExternalLinkWrapper>
          </div>
        </div>
      </section>
    );
  }
);

ProjectsSection.displayName = 'ProjectsSection';

export default ProjectsSection;