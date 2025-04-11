'use client';

import React, { createContext, useState, useEffect, useContext, ReactNode } from 'react';
import { Language, translations } from '@/translations';

type LanguageContextType = {
  currentLang: Language;
  t: Record<string, string>;
  toggleLanguage: () => void;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [currentLang, setCurrentLang] = useState<Language>('en');
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const savedLang = (localStorage.getItem('preferredLanguage') as Language) || 'en';
    setCurrentLang(savedLang);
    document.documentElement.lang = savedLang;
  }, []);

  const toggleLanguage = () => {
    const newLang = currentLang === 'en' ? 'th' : 'en';
    setCurrentLang(newLang);
    localStorage.setItem('preferredLanguage', newLang);
    document.documentElement.lang = newLang;
  };

  // ค่าแปลภาษาปัจจุบัน
  const t = translations[currentLang];

  // ส่งค่า undefined ถ้าอยู่ฝั่ง server เพื่อหลีกเลี่ยงปัญหา hydration
  const value = isClient ? { currentLang, t, toggleLanguage } : undefined;

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

// Custom hook สำหรับใช้งานภาษา
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