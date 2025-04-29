'use client';

import React, { createContext, useState, useEffect, useContext, ReactNode, useMemo } from 'react';
import { Language } from '@/translations/types';
import { createTranslationObject, getTranslation, getLocalizedProjects, getLocalizedEducation } from '@/translations';

// =============================
// Theme Context
// =============================
interface ThemeContextType {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

/**
 * Custom hook for accessing theme context
 */
export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined && typeof window !== 'undefined') {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context || { isDarkMode: false, toggleDarkMode: () => {} };
}

/**
 * ThemeProvider component
 * Manages dark/light mode state
 */
function ThemeProvider({ children }: { children: ReactNode }) {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    
    try {
      // Check system preference and localStorage
      const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      const savedTheme = localStorage.getItem('darkMode');
      const initialDarkMode = savedTheme !== null ? savedTheme === 'true' : systemPrefersDark;
      
      setIsDarkMode(initialDarkMode);
      applyTheme(initialDarkMode);
      
      // Listen for system preference changes
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      const handleChange = (e: MediaQueryListEvent) => {
        // Only change if user hasn't set a preference
        if (localStorage.getItem('darkMode') === null) {
          setIsDarkMode(e.matches);
          applyTheme(e.matches);
        }
      };
      
      mediaQuery.addEventListener('change', handleChange);
      return () => mediaQuery.removeEventListener('change', handleChange);
    } catch (error) {
      console.error('Error initializing theme:', error);
    }
  }, []);

  // Apply theme to document
  const applyTheme = (dark: boolean) => {
    if (typeof document !== 'undefined') {
      if (dark) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }
  };

  // Toggle theme function
  const toggleDarkMode = () => {
    const newDarkMode = !isDarkMode;
    setIsDarkMode(newDarkMode);
    try {
      localStorage.setItem('darkMode', String(newDarkMode));
    } catch (error) {
      console.error('Error saving theme preference:', error);
    }
    applyTheme(newDarkMode);
  };

  // Return undefined during SSR to avoid hydration issues
  const value = useMemo(() => 
    isClient ? { isDarkMode, toggleDarkMode } : undefined
  , [isClient, isDarkMode]);

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}

// =============================
// Language Context
// =============================
interface LanguageContextType {
  currentLang: Language;
  t: Record<string, string>;
  tr: (key: string, path?: string) => string;
  getLocalizedEducation: () => any[];
  getLocalizedProjects: () => any[];
  toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

/**
 * Custom hook for accessing language context
 */
export function useLanguage() {
  const context = useContext(LanguageContext);
  
  // ตรวจสอบว่าเราอยู่ฝั่ง client และไม่มี context
  if (context === undefined && typeof window !== 'undefined') {
    console.warn('useLanguage was called outside of LanguageProvider. Using fallback values.');
  }
  
  // ส่งค่า fallback กลับไปเมื่ออยู่ใน SSR หรือเมื่อไม่มี context
  return context || { 
    currentLang: 'en', 
    t: createTranslationObject('en'),
    tr: (key: string) => key, 
    getLocalizedEducation: () => [],
    getLocalizedProjects: () => [],
    toggleLanguage: () => {} 
  };
}

/**
 * LanguageProvider component
 * Manages language state and translations
 */
function LanguageProvider({ children }: { children: ReactNode }) {
  const [currentLang, setCurrentLang] = useState<Language>('en');
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    
    try {
      // Use language from localStorage or browser preference
      let savedLang = 'en' as Language;
      let browserLang = 'en' as Language;
      
      // ตรวจสอบว่าเราอยู่ฝั่ง browser ก่อนเรียกใช้ APIs
      if (typeof window !== 'undefined' && typeof navigator !== 'undefined') {
        browserLang = navigator.language.startsWith('th') ? 'th' : 'en';
        
        try {
          const storedLang = localStorage.getItem('preferredLanguage');
          if (storedLang === 'en' || storedLang === 'th') {
            savedLang = storedLang;
          }
        } catch (e) {
          console.error('Error accessing localStorage:', e);
        }
      }
      
      const finalLang = savedLang || browserLang;
      setCurrentLang(finalLang);
      
      if (typeof document !== 'undefined') {
        document.documentElement.lang = finalLang;
      }
    } catch (error) {
      console.error('Error initializing language:', error);
    }
  }, []);

  // Get current translations using memoization
  const t = useMemo(() => 
    createTranslationObject(currentLang)
  , [currentLang]);

  // Translation helper function
  const tr = (key: string, path?: string) => {
    // If path is provided, it's a nested translation in a dataset
    if (path) {
      // This would be used for dataset entries
      const datasetParts = key.split('.');
      const datasetName = datasetParts[0];
      const datasetKey = datasetParts[1];
      
      try {
        // Dynamic import of dataset (this is a simplified example)
        // In a real implementation, you'd use the imported datasets directly
        const dataset = require(`@/translations`)[datasetName] || [];
        const entry = dataset.find((item: any) => item.key === datasetKey);
        
        if (entry) {
          return getTranslation(entry, currentLang, path);
        }
      } catch (error) {
        console.error('Translation error:', error);
      }
      
      return '';
    }
    
    // Simple translation from the t object
    return t[key] || key;
  };

  // Get localized education data
  const getLocalizedEdu = () => {
    return getLocalizedEducation(currentLang);
  };

  // Get localized projects data
  const getLocalizedProj = () => {
    return getLocalizedProjects(currentLang);
  };

  // Toggle language function
  const toggleLanguage = () => {
    const newLang = currentLang === 'en' ? 'th' : 'en';
    setCurrentLang(newLang);
    
    try {
      if (typeof localStorage !== 'undefined') {
        localStorage.setItem('preferredLanguage', newLang);
      }
      
      if (typeof document !== 'undefined') {
        document.documentElement.lang = newLang;
      }
    } catch (error) {
      console.error('Error saving language preference:', error);
    }
  };

  // สร้าง context value ด้วย memoization 
  const value = useMemo(() => ({ 
    currentLang, 
    t, 
    tr, 
    getLocalizedEducation: getLocalizedEdu,
    getLocalizedProjects: getLocalizedProj,
    toggleLanguage 
  }), [currentLang, t]);

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

// =============================
// Combined Provider
// =============================

/**
 * AppProviders - combines all context providers
 * Makes it easier to wrap the app with all required providers
 */
export function AppProviders({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider>
      <LanguageProvider>
        {children}
      </LanguageProvider>
    </ThemeProvider>
  );
}