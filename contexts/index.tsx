'use client';

import React, { createContext, useState, useEffect, useContext, ReactNode, useMemo } from 'react';
import { Language, translations } from '@/translations';

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
  }, []);

  // Apply theme to document
  const applyTheme = (dark: boolean) => {
    if (dark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  // Toggle theme function
  const toggleDarkMode = () => {
    const newDarkMode = !isDarkMode;
    setIsDarkMode(newDarkMode);
    localStorage.setItem('darkMode', String(newDarkMode));
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
  toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

/**
 * Custom hook for accessing language context
 */
export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined && typeof window !== 'undefined') {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context || { 
    currentLang: 'en', 
    t: translations.en, 
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
    
    // Use language from localStorage or browser preference
    const browserLang = navigator.language.startsWith('th') ? 'th' : 'en';
    const savedLang = (localStorage.getItem('preferredLanguage') as Language) || browserLang;
    
    setCurrentLang(savedLang);
    document.documentElement.lang = savedLang;
  }, []);

  // Toggle language function
  const toggleLanguage = () => {
    const newLang = currentLang === 'en' ? 'th' : 'en';
    setCurrentLang(newLang);
    localStorage.setItem('preferredLanguage', newLang);
    document.documentElement.lang = newLang;
  };

  // Get current translations using memoization
  const t = useMemo(() => translations[currentLang], [currentLang]);

  // Return undefined during SSR to avoid hydration issues
  const value = useMemo(() => 
    isClient ? { currentLang, t, toggleLanguage } : undefined
  , [isClient, currentLang, t]);

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