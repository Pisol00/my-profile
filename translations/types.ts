// translations/types.ts - Updated Type Definitions

export type Language = 'th' | 'en';

/**
 * Base type for a translation entry with supported languages
 */
export interface TranslationEntry {
  en: string;
  th: string;
}

/**
 * Type for flat translation data structure
 */
export type TranslationData = {
  [key: string]: TranslationEntry;
};

/**
 * Type for compiled translations for a specific language
 */
export type TranslationType = Record<string, string>;

/**
 * Interface for dataset items with translations
 */
export interface DatasetItemWithTranslations {
  key: string;
  translations: TranslationEntry | Record<string, TranslationEntry>;
  [key: string]: any;
}

/**
 * Interface for nested translation object
 */
export interface NestedTranslations {
  [key: string]: TranslationEntry | NestedTranslations;
}

/**
 * Profile data with translations
 */
export interface ProfileDataset {
  avatar: string;
  email: string;
  github: string;
  phone: string;
  skills: {
    frontend: string[];
    backend: string[];
    tools: string[];
    other: string[];
  };
  softSkills: Array<{
    key: string;
    translations: TranslationEntry;
  }>;
  languages: Array<{
    key: string;
    translations: {
      language: TranslationEntry;
      level: TranslationEntry;
    };
  }>;
}

/**
 * Education item with translations
 */
export interface EducationItem {
  key: string;
  translations: {
    institution: TranslationEntry;
    degree: TranslationEntry;
    duration: TranslationEntry;
    location: TranslationEntry;
    description?: TranslationEntry;
  };
  logo: string;
  highlights?: Array<{
    key: string;
    translations: TranslationEntry;
  }>;
  courses?: Array<{
    key: string;
    translations: TranslationEntry;
  }>;
}

/**
 * Project item with translations
 */
export interface ProjectItem {
  key: string;
  title: string;
  year?: string;
  translations: {
    description: TranslationEntry;
  };
  technologies: string[];
  link: string;
}

/**
 * Localized project data (after translation is applied)
 */
export interface LocalizedProject {
  title: string;
  description: string;
  technologies: string[];
  link: string;
  year?: string;
}

/**
 * Localized education data (after translation is applied)
 */
export interface LocalizedEducation {
  institution: string;
  degree: string;
  duration: string;
  location: string;
  description?: string;
  logo: string;
  highlights?: string[];
  courses?: string[];
}