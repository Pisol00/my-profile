'use client';

import { forwardRef, useState, useMemo } from 'react';
import { Badge } from '@/components/ui/badge';
import { Github, ExternalLink, Code2, FolderGit2 } from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';
import { useLanguage } from '@/context/LanguageContext';
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

    return (
      <section 
        ref={ref} 
        className="py-24 relative overflow-hidden bg-white dark:bg-gray-900"
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
          <div className="absolute top-1/4 -right-20 w-80 h-80 rounded-full bg-blue-50 dark:bg-blue-900/20 blur-3xl opacity-70"></div>
          <div className="absolute bottom-1/4 -left-20 w-80 h-80 rounded-full bg-blue-50 dark:bg-blue-900/20 blur-3xl opacity-70"></div>
        </div>

        <div className="container mx-auto max-w-7xl px-4 relative z-10">
          <AnimatedSection animation="fade-in" disabled={!animationsEnabled} className="mb-16 text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-6">
              {t.projectsHighlight}
            </h2>
            <p className="text-center text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-lg">
              {currentLang === "en"
                ? "Featured projects showcasing my skills and experience"
                : "โปรเจกต์เด่นที่แสดงให้เห็นถึงทักษะและประสบการณ์ของฉัน"}
            </p>
          </AnimatedSection>

          {/* Project Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {projectCategories.map((category, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(category)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
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

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <AnimatedSection
                key={index}
                delay={100 + index * 50}
                animation="fade-in"
                disabled={!animationsEnabled}
              >
                <div className="group relative bg-white dark:bg-gray-800 rounded-xl overflow-hidden border border-blue-100 dark:border-blue-900/50 hover:border-blue-300 dark:hover:border-blue-700 shadow-md hover:shadow-xl hover:shadow-blue-100 dark:hover:shadow-blue-900/10 transition-all duration-300 h-full flex flex-col">
                  {/* Project Header */}
                  <div className="flex items-center justify-between p-6 border-b border-blue-50 dark:border-blue-900/50">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center text-blue-600 dark:text-blue-300">
                        <FolderGit2 size={20} />
                      </div>
                      <h3 className="font-bold text-xl">{project.title}</h3>
                    </div>
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-blue-50 dark:bg-blue-900/30 hover:bg-blue-100 dark:hover:bg-blue-800/50 text-blue-600 dark:text-blue-400 p-2 rounded-full transition-colors"
                      aria-label={`View ${project.title} on GitHub`}
                    >
                      <Github size={18} />
                    </a>
                  </div>

                  {/* Project Content */}
                  <div className="p-6 flex-1 flex flex-col">
                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-6 flex-1">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge 
                          key={techIndex} 
                          variant="outline" 
                          className="bg-blue-50/50 dark:bg-blue-900/10 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-800/50 hover:bg-blue-100 dark:hover:bg-blue-800/30 py-1"
                        >
                          <Code2 size={12} className="mr-1" />
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    {/* Project Link */}
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors font-medium"
                    >
                      <span>{t.viewProject}</span>
                      <ExternalLink size={14} />
                    </a>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* "View More Projects" button at the bottom */}
          <div className="flex justify-center mt-12">
            <a
              href={`https://github.com/${localizedData[currentLang].github}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white dark:bg-gray-800 border border-blue-200 dark:border-blue-800 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all shadow-md hover:shadow-lg font-medium"
            >
              <Github size={18} />
              {currentLang === "en" ? "View More Projects on GitHub" : "ดูโปรเจกต์เพิ่มเติมบน GitHub"}
            </a>
          </div>
        </div>
      </section>
    );
  }
);

ProjectsSection.displayName = 'ProjectsSection';

export default ProjectsSection;