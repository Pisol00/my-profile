'use client';

import React, { createContext, useState, useEffect, useContext, ReactNode, useMemo } from 'react';
import { Language, translations } from '@/translations';

// =============================
// Theme Context
// =============================
type ThemeContextType = {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

function ThemeProvider({ children }: { children: ReactNode }) {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    
    // ตรวจสอบ preference ของระบบ
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    // ใช้ค่าจาก localStorage หรือถ้าไม่มีให้ใช้ค่าจากระบบ
    const savedTheme = localStorage.getItem('darkMode');
    const initialDarkMode = savedTheme !== null ? savedTheme === 'true' : systemPrefersDark;
    
    setIsDarkMode(initialDarkMode);

    if (initialDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    
    // ติดตามการเปลี่ยนแปลง system preference
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e: MediaQueryListEvent) => {
      // เปลี่ยนเฉพาะกรณีที่ผู้ใช้ไม่ได้ตั้งค่าไว้เอง
      if (localStorage.getItem('darkMode') === null) {
        setIsDarkMode(e.matches);
        if (e.matches) {
          document.documentElement.classList.add('dark');
        } else {
          document.documentElement.classList.remove('dark');
        }
      }
    };
    
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !isDarkMode;
    setIsDarkMode(newDarkMode);
    localStorage.setItem('darkMode', String(newDarkMode));

    if (newDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  // ส่งค่า undefined ถ้าอยู่ฝั่ง server เพื่อหลีกเลี่ยงปัญหา hydration
  const value = useMemo(() => 
    isClient ? { isDarkMode, toggleDarkMode } : undefined
  , [isClient, isDarkMode]);

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}

// Custom hook สำหรับใช้งาน theme
function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined && typeof window !== 'undefined') {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context || { isDarkMode: false, toggleDarkMode: () => {} };
}

// =============================
// Language Context
// =============================
type LanguageContextType = {
  currentLang: Language;
  t: Record<string, string>;
  toggleLanguage: () => void;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

function LanguageProvider({ children }: { children: ReactNode }) {
  const [currentLang, setCurrentLang] = useState<Language>('en');
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    
    // ใช้ค่าภาษาจาก localStorage หรือ browser language
    const browserLang = navigator.language.startsWith('th') ? 'th' : 'en';
    const savedLang = (localStorage.getItem('preferredLanguage') as Language) || browserLang;
    
    setCurrentLang(savedLang);
    document.documentElement.lang = savedLang;
  }, []);

  const toggleLanguage = () => {
    const newLang = currentLang === 'en' ? 'th' : 'en';
    setCurrentLang(newLang);
    localStorage.setItem('preferredLanguage', newLang);
    document.documentElement.lang = newLang;
  };

  // คำแปลภาษาปัจจุบัน - ใช้ useMemo เพื่อไม่ให้ re-render บ่อย
  const t = useMemo(() => translations[currentLang], [currentLang]);

  // ส่งค่า undefined ถ้าอยู่ฝั่ง server เพื่อหลีกเลี่ยงปัญหา hydration
  const value = useMemo(() => 
    isClient ? { currentLang, t, toggleLanguage } : undefined
  , [isClient, currentLang, t]);

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

// Custom hook สำหรับใช้งานภาษา
function useLanguage() {
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

// =============================
// Combined Provider
// =============================

/**
 * AppProviders - รวม Provider ทั้งหมดไว้ในที่เดียว
 * ทำให้สะดวกในการใช้งานและลดความซ้ำซ้อน
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

export { useTheme, useLanguage };