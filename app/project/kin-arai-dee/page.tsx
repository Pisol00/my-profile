'use client';

import { useState, useEffect } from 'react';
import { kinAraiDeeProject } from '@/data/projects/kinAraiDee';
import { ShoppingBag, Users, Server, Layout, Database } from 'lucide-react';
import { useLanguage } from '@/contexts';

// Project components
import ProjectLayout from '@/components/project/ProjectLayout';
import ProjectHero from '@/components/project/ProjectHero';
import ProjectOverview from '@/components/project/ProjectOverview';
import ProjectFeatures from '@/components/project/ProjectFeatures';
import ProjectStructure from '@/components/project/ProjectStructure';
import ProjectDataDisplay from '@/components/project/ProjectDataDisplay';
import ProjectTechnologies from '@/components/project/ProjectTechnologies';
import ProjectGallery from '@/components/project/ProjectGallery';

export default function KinAraiDeePage() {
  const [animationsEnabled, setAnimationsEnabled] = useState(true);
  const { currentLang } = useLanguage();
  
  // Check if animations should be enabled
  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setAnimationsEnabled(!mediaQuery.matches);
    
    const handleMediaQueryChange = (e: MediaQueryListEvent) => {
      setAnimationsEnabled(!e.matches);
    };
    
    mediaQuery.addEventListener('change', handleMediaQueryChange);
    
    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    };
  }, []);

  // Prepare data based on current language
  const project = kinAraiDeeProject;
  const lang = currentLang as keyof typeof project.subtitle;

  // Map key facts with translations
  const keyFacts = project.keyFacts.map(fact => ({
    icon: fact.icon,
    label: typeof fact.label === 'string' ? fact.label : fact.label[lang],
    value: typeof fact.value === 'string' ? fact.value : fact.value[lang],
  }));

  // Map features with translations
  const features = project.features.items.map(feature => ({
    icon: feature.icon,
    title: typeof feature.title === 'string' ? feature.title : feature.title[lang],
    description: typeof feature.description === 'string' ? feature.description : feature.description[lang],
  }));

  // Map workflow steps with translations
  const workflowSteps = project.features.workflow.steps.map(step => ({
    ...step,
    label: typeof step.label === 'string' ? step.label : step.label[lang],
  }));

  // Map structure apps with translations
  const structureApps = project.structure.apps.map(app => ({
    name: app.name,
    description: typeof app.description === 'string' ? app.description : app.description[lang],
  }));

  // Map data structure items with translations
  const dataStructureItems = project.dataSections.dataStructure.items.map(item => 
    typeof item === 'string' ? item : item[lang]
  );

  // Map display system items with translations
  const displaySystemItems = project.dataSections.displaySystem.items.map(item => 
    typeof item === 'string' ? item : item[lang]
  );

  // Map technology categories with translations
  const technologies = project.technologies.categories.map(category => ({
    category: typeof category.category === 'string' ? category.category : category.category[lang],
    items: category.items,
  }));

  // Map screenshots with translations
  const screenshots = project.gallery.screenshots.map(screenshot => ({
    label: typeof screenshot.label === 'string' ? screenshot.label : screenshot.label[lang],
    desc: typeof screenshot.desc === 'string' ? screenshot.desc : screenshot.desc[lang],
    icon: screenshot.icon,
  }));

  return (
    <ProjectLayout
      githubUrl={project.githubUrl}
      demoUrl={project.demoUrl}
      animationsEnabled={animationsEnabled}
    >
      {/* Hero Section */}
      <ProjectHero
        title={project.title}
        subtitle={project.subtitle[lang]}
        platformDescription={project.platformDescription[lang]}
        icon={project.icon}
        badges={project.badges}
        keyFacts={keyFacts}
        animationsEnabled={animationsEnabled}
        bgGradient={project.bgGradient}
      />

      {/* Project Overview */}
      <ProjectOverview
        title={project.overview.title[lang]}
        description={project.overview.description[lang]}
        quickStats={project.overview.quickStats}
        animationsEnabled={animationsEnabled}
      />

      {/* Key Features Section */}
      <ProjectFeatures
        title={project.features.title[lang]}
        features={features}
        workflowTitle={project.features.workflow.title[lang]}
        workflowSteps={workflowSteps}
        workflowDescription={project.features.workflow.description[lang]}
        animationsEnabled={animationsEnabled}
      />

      {/* Project Structure Section */}
      <ProjectStructure
        title={project.structure.title[lang]}
        apps={structureApps}
        animationsEnabled={animationsEnabled}
      />

      {/* Data Structure */}
      <ProjectDataDisplay
        title={project.dataSections.dataStructure.title[lang]}
        icon={project.dataSections.dataStructure.icon}
        items={dataStructureItems}
        animationsEnabled={animationsEnabled}
      />

      {/* Display System */}
      <ProjectDataDisplay
        title={project.dataSections.displaySystem.title[lang]}
        icon={project.dataSections.displaySystem.icon}
        items={displaySystemItems}
        animationsEnabled={animationsEnabled}
      />

      {/* Technologies Section */}
      <ProjectTechnologies
        title={project.technologies.title[lang]}
        technologies={technologies}
        animationsEnabled={animationsEnabled}
      />

      {/* Gallery Section */}
      <ProjectGallery
        title={project.gallery.title[lang]}
        screenshots={screenshots}
        nextImageLabel={project.gallery.nextImageLabel[lang]}
        prevImageLabel={project.gallery.prevImageLabel[lang]}
        animationsEnabled={animationsEnabled}
      />
    </ProjectLayout>
  );
}