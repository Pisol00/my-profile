'use client';

import { forwardRef, useState, useMemo } from 'react';
import { Badge } from '@/components/ui/badge';
import { Github, ExternalLink } from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';
import { useLanguage } from '@/context/LanguageContext';
import { profileData, thProjects } from '@/translations';

type ProjectsSectionProps = {
  animationsEnabled: boolean;
};

const ProjectsSection = forwardRef<HTMLElement, ProjectsSectionProps>(
  ({ animationsEnabled }, ref) => {
    const { currentLang, t } = useLanguage();
    const [activeTab, setActiveTab] = useState("all"); // For projects filtering

    // Get the correct data based on language
    const projects = currentLang === "en" ? profileData.projects : thProjects;

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
        className="py-24 relative overflow-hidden bg-background"
      >
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden opacity-30 pointer-events-none">
          <div className="absolute h-full w-1 left-1/3 bg-gradient-to-b from-transparent via-primary/10 to-transparent"></div>
          <div className="absolute h-1 w-full top-1/3 bg-gradient-to-r from-transparent via-primary/10 to-transparent"></div>
          <div className="absolute h-full w-1 right-1/3 bg-gradient-to-b from-transparent via-primary/10 to-transparent"></div>
          <div className="absolute h-1 w-full bottom-1/3 bg-gradient-to-r from-transparent via-primary/10 to-transparent"></div>
        </div>

        <div className="container mx-auto max-w-7xl px-4 relative z-10">
          <AnimatedSection animation="fade-in" disabled={!animationsEnabled} className="mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/20 text-primary text-sm font-semibold mb-4 shadow-sm border border-primary/10 backdrop-blur-sm mx-auto text-center block w-fit">
              {currentLang === "en" ? "Portfolio" : "ผลงาน"}
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-6">
              {t.projectsHighlight}
            </h2>
            <p className="text-center text-muted-foreground max-w-2xl mx-auto text-lg">
              {currentLang === "en"
                ? "Featured projects I've developed that showcase my skills and experience"
                : "โปรเจกต์เด่นที่ฉันได้พัฒนาที่แสดงให้เห็นถึงทักษะและประสบการณ์ของฉัน"}
            </p>
          </AnimatedSection>

          {/* Project Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {projectCategories.map((category, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all 
                  ${activeTab === category 
                    ? "bg-primary text-white shadow-md shadow-primary/20" 
                    : "bg-secondary/50 text-secondary-foreground hover:bg-secondary"}`}
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
                animation="zoom-in"
                disabled={!animationsEnabled}
              >
                <div className="group relative bg-card rounded-xl overflow-hidden border border-border/50 hover:border-primary/20 shadow-lg hover:shadow-xl hover:shadow-primary/5 transition-all duration-300">
                  {/* Project Header with Gradient Overlay */}
                  <div className="h-32 w-full bg-gradient-to-br from-primary/20 to-primary/5 p-6 flex items-end">
                    <div className="absolute top-4 right-4">
                      <a 
                        href={project.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="bg-background/50 hover:bg-background/80 text-primary p-2 rounded-full transition-all backdrop-blur-sm"
                        aria-label={`View ${project.title} on GitHub`}
                      >
                        <Github size={16} />
                      </a>
                    </div>
                    <h3 className="font-bold text-xl">{project.title}</h3>
                  </div>

                  {/* Project Content */}
                  <div className="p-6">
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge 
                          key={techIndex} 
                          variant="outline" 
                          className="text-xs bg-secondary/30 border-secondary/50"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    {/* Project Link */}
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-sm text-primary hover:text-primary/80 transition-colors"
                    >
                      <span>{t.viewProject}</span>
                      <ExternalLink size={14} />
                    </a>
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

ProjectsSection.displayName = 'ProjectsSection';

export default ProjectsSection;