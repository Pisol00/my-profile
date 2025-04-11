import { useCallback } from 'react';

/**
 * Custom hook สำหรับการเลื่อนไปยังส่วนต่างๆ ของหน้าเว็บ
 */
export function useScrollToSection() {
  const scrollToSection = useCallback((ref: React.RefObject<HTMLElement>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return scrollToSection;
}