/**
 * translations/types.ts
 * TypeScript type definitions for translations
 */

export type Language = 'th' | 'en';

/**
 * Common translation strings
 */
export interface CommonTranslations {
  // General text
  name: string;
  title: string;
  bio: string;
  location: string;
  allRightsReserved: string;
  contactMe: string;
  phone: string;
}

/**
 * Navigation menu translations
 */
export interface NavTranslations {
  home: string;
  skills: string;
  projects: string;
  education: string;
  contact: string;
}

/**
 * Skills section translations
 */
export interface SkillsTranslations {
  technicalSkills: string;
  frontend: string;
  backend: string;
  toolsTech: string;
  otherLang: string;
  softSkills: string;
  languages: string;
}

/**
 * Projects section translations
 */
export interface ProjectsTranslations {
  projectsHighlight: string;
  viewProject: string;
  viewMoreProjects: string;
}

/**
 * Education section translations
 */
export interface EducationTranslations {
  education: string;
  academicJourney: string;
  degree: string;
  programHighlights: string;
  keyCourses: string;
}

/**
 * Contact section translations
 */
export interface ContactTranslations {
  contact: string;
  contactIntro: string;
  yourName: string;
  yourEmail: string;
  subject: string;
  message: string;
  sendMessage: string;
  contactVia: string;
  call: string;
  email: string;
  github: string;
  directApproach: string;
}

/**
 * Represents an experience item with translated content
 */
export interface ExperienceItem {
  company: string;
  position: string;
  duration: string;
  description: string;
  technologies: string[];
}

/**
 * Combined translation type for all sections
 */
export type TranslationType = CommonTranslations & 
  NavTranslations & 
  SkillsTranslations & 
  ProjectsTranslations & 
  EducationTranslations & 
  ContactTranslations;

/**
 * Translation data for multi-language content
 */
export interface MultiLanguageText {
  en: string;
  th: string;
}

/**
 * Profile data structure with all info for the portfolio
 */
export interface ProfileData {
  name: string;
  title: string;
  bio: string;
  avatar: string;
  location: string;
  email: string;
  github: string;
  phone: string;
  address?: string;
  skills: {
    frontend: string[];
    backend: string[];
    tools: string[];
    other: string[];
  };
  softSkills: string[];
  languages: {
    language: string;
    level: string;
  }[];
  experience: ExperienceItem[];
  education: {
    institution: string;
    degree: string;
    duration: string;
    description?: string;
  }[];
  projects: {
    title: string;
    description: string;
    technologies: string[];
    link: string;
  }[];
}