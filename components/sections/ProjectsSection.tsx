'use client';

import { forwardRef, useState, useMemo } from 'react';
import { Github, ExternalLink, ArrowRight, Code, ChevronRight, ChevronLeft } from 'lucide-react';
import Link from 'next/link';
import AnimatedSection from '@/components/common/animations/AnimatedSection';
import { useLanguage } from '@/contexts';
import { localizedData } from '@/translations';
import { ProjectCard } from '@/components/common/cards';
import { Button } from '@/components/ui/button';

type ProjectsSectionProps = {
  animationsEnabled: boolean;
};

const ProjectsSection = forwardRef<HTMLElement, ProjectsSectionProps>(
  ({ animationsEnabled }, ref) => {
    const { currentLang, t } = useLanguage();
    const [activeTab, setActiveTab] = useState("all"); // For projects filtering
    const [activeMobileIndex, setActiveMobileIndex] = useState(0); // For mobile carousel

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
          else if (tech.includes("Django") || tech.includes("Flask") || tech.includes("Python")) categories.add("Python");
          else if (tech.includes("Java")) categories.add("Java");
          else if (tech.includes("Docker") || tech.includes("AWS") || tech.includes("Cloud")) categories.add("DevOps");
        });
      });

      return Array.from(categories);
    }, [projects]);

    // Mobile carousel navigation
    const nextProject = () => {
      if (filteredProjects.length > 0) {
        setActiveMobileIndex(prev =>
          prev === filteredProjects.length - 1 ? 0 : prev + 1
        );
      }
    };

    const prevProject = () => {
      if (filteredProjects.length > 0) {
        setActiveMobileIndex(prev =>
          prev === 0 ? filteredProjects.length - 1 : prev - 1
        );
      }
    };

    return (
      <section
        ref={ref}
        className="py-16 sm:py-20 md:py-24 relative overflow-hidden bg-white dark:bg-black"
      >
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Grid pattern background */}
          <div className="absolute inset-0 opacity-5">
            <svg width="100%" height="100%">
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" className="text-gray-500 dark:text-gray-400" />
              </pattern>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>

          {/* Decorative circles */}
          <div className="absolute top-1/4 -right-20 w-60 sm:w-80 h-60 sm:h-80 rounded-full bg-gray-50 dark:bg-gray-900/20 blur-3xl opacity-70"></div>
          <div className="absolute bottom-1/4 -left-20 w-60 sm:w-80 h-60 sm:h-80 rounded-full bg-gray-50 dark:bg-gray-900/20 blur-3xl opacity-70"></div>
        </div>

        <div className="container mx-auto max-w-7xl px-4 sm:px-6 relative z-10">
          <AnimatedSection animation="fade-in" disabled={!animationsEnabled} className="mb-10 sm:mb-16 text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4 sm:mb-6 text-gray-900 dark:text-white">
              {t.projectsHighlight}
            </h2>
            <p className="text-center text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-base sm:text-lg">
              {currentLang === "en"
                ? "Featured projects showcasing my skills and experience"
                : "โปรเจกต์เด่นที่แสดงให้เห็นถึงทักษะและประสบการณ์ของฉัน"}
            </p>
          </AnimatedSection>

          {/* Desktop View */}
          <div className="hidden md:block">
            {/* Project Category Filter - Responsive scrollable on tablet/desktop */}
            <div className="flex flex-wrap justify-center gap-2 mb-8 sm:mb-12 overflow-x-auto pb-2 -mx-2 px-2">
              {projectCategories.map((category, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTab(category)}
                  className={`px-3 sm:px-5 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-all cursor-pointer flex-shrink-0 ${activeTab === category
                      ? "bg-gray-900 text-white dark:bg-white dark:text-black shadow-md shadow-gray-200 dark:shadow-gray-900/20"
                      : "bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                    }`}
                >
                  {category === "all"
                    ? currentLang === "en" ? "All Projects" : "ทั้งหมด"
                    : category}
                </button>
              ))}
            </div>

            {/* Projects Grid - Desktop */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {filteredProjects.map((project, index) => (
                <ProjectCard
                  key={index}
                  title={project.title}
                  description={project.description}
                  technologies={project.technologies}
                  link={project.link}
                  viewProjectText={t.viewProject}
                  animationsEnabled={animationsEnabled}
                  delay={100 + index * 50}
                />
              ))}
            </div>
          </div>

          {/* Mobile View - Carousel Style */}
          <div className="md:hidden">
            {/* Mobile Category Filter */}
            <div className="mb-8">
              <div className="flex flex-wrap justify-center gap-2 overflow-x-auto pb-2">
                {projectCategories.map((category, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setActiveTab(category);
                      setActiveMobileIndex(0); // Reset to first project when changing category
                    }}
                    className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer flex-shrink-0 ${activeTab === category
                        ? "bg-gray-900 text-white dark:bg-white dark:text-black shadow-sm"
                        : "bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
                      }`}
                  >
                    {category === "all"
                      ? currentLang === "en" ? "All" : "ทั้งหมด"
                      : category}
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile Carousel */}
            <div className="mb-12">
              {filteredProjects.length > 0 && (
                <div className="relative">
                  {/* Current Project Card */}
                  <div className="transition-all duration-500 ease-in-out px-1">
                    <ProjectCard
                      title={filteredProjects[activeMobileIndex].title}
                      description={filteredProjects[activeMobileIndex].description}
                      technologies={filteredProjects[activeMobileIndex].technologies}
                      link={filteredProjects[activeMobileIndex].link}
                      viewProjectText={t.viewProject}
                      animationsEnabled={animationsEnabled}
                    />
                  </div>

                  {/* Navigation Buttons */}
                  <div className="flex justify-between items-center mt-6">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={prevProject}
                      className="rounded-full w-9 h-9 border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all"
                    >
                      <ChevronLeft size={18} className="text-gray-600 dark:text-gray-300" />
                    </Button>

                    {/* Pagination Indicator */}
                    <div className="flex items-center gap-1">
                      {filteredProjects.map((_, index) => (
                        <div
                          key={index}
                          className={`w-2 h-2 rounded-full transition-all ${index === activeMobileIndex
                              ? "w-4 bg-gray-900 dark:bg-white"
                              : "bg-gray-300 dark:bg-gray-700"
                            }`}
                        ></div>
                      ))}
                    </div>

                    <Button
                      variant="outline"
                      size="icon"
                      onClick={nextProject}
                      className="rounded-full w-9 h-9 border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all"
                    >
                      <ChevronRight size={18} className="text-gray-600 dark:text-gray-300" />
                    </Button>
                  </div>
                </div>
              )}
            </div>


          </div>

          {/* "View More Projects" button at the bottom - for both mobile and desktop */}
          <div className="flex justify-center mt-10 sm:mt-12">
            <Link
              href={`https://github.com/${localizedData[currentLang].github}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 rounded-lg bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all shadow-md hover:shadow-lg font-medium text-sm sm:text-base"
            >
              <Github size={16} className="sm:w-[18px] sm:h-[18px]" />
              {currentLang === "en" ? "View More Projects on GitHub" : "ดูโปรเจกต์เพิ่มเติมบน GitHub"}
            </Link>
          </div>
        </div>
      </section>
    );
  }
);

ProjectsSection.displayName = 'ProjectsSection';

export default ProjectsSection;