import { useState, useEffect, useCallback } from 'react';

/**
 * useScrollToSection - สำหรับการเลื่อนไปยังส่วนต่างๆ ของหน้าเว็บ
 */
export function useScrollToSection() {
  return useCallback((ref: React.RefObject<HTMLElement>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);
}

/**
 * useLocalStorage - จัดการข้อมูลใน localStorage พร้อมทั้ง sync กับ state ของ React
 */
export function useLocalStorage<T>(key: string, initialValue: T): [T, (value: T) => void] {
  // สร้าง state เพื่อจัดเก็บข้อมูลปัจจุบัน
  const [storedValue, setStoredValue] = useState<T>(initialValue);

  // ดึงข้อมูลจาก localStorage เมื่อ component ถูกเรนเดอร์ครั้งแรก
  useEffect(() => {
    try {
      // ดึงข้อมูลจาก localStorage โดยใช้ key
      const item = window.localStorage.getItem(key);
      // แปลงค่าที่ได้เป็น json หรือใช้ค่า initialValue หากไม่มีข้อมูล
      const value = item ? JSON.parse(item) : initialValue;
      setStoredValue(value);
    } catch (error) {
      // ถ้าเกิดข้อผิดพลาด (เช่น localStorage ไม่รองรับ) ใช้ค่า initialValue
      console.error(`Error reading localStorage key "${key}":`, error);
      setStoredValue(initialValue);
    }
  }, [key, initialValue]);

  // ฟังก์ชันสำหรับอัพเดทค่าใน state และ localStorage
  const setValue = useCallback((value: T) => {
    try {
      // บันทึกค่าลงใน state
      setStoredValue(value);
      // บันทึกค่าใน localStorage
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error(`Error setting localStorage key "${key}":`, error);
    }
  }, [key]);

  return [storedValue, setValue];
}

/**
 * useMediaQuery - ตรวจสอบ media query และอัพเดท state เมื่อมีการเปลี่ยนแปลง
 */
export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    // ตรวจสอบ browser environment
    if (typeof window === 'undefined') {
      return;
    }

    // ตั้งค่าเริ่มต้น
    const media = window.matchMedia(query);
    setMatches(media.matches);

    // ฟังก์ชันสำหรับอัพเดท state เมื่อ media query เปลี่ยนแปลง
    const listener = (e: MediaQueryListEvent) => {
      setMatches(e.matches);
    };

    // ลงทะเบียน listener
    media.addEventListener('change', listener);

    // cleanup เมื่อ component unmount
    return () => {
      media.removeEventListener('change', listener);
    };
  }, [query]);

  return matches;
}

/**
 * useScrollPosition - ติดตามตำแหน่งการเลื่อนหน้าเว็บ
 */
export function useScrollPosition() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    function handleScroll() {
      setScrollPosition(window.scrollY);
    }

    // ลงทะเบียน event listener
    window.addEventListener('scroll', handleScroll);

    // เรียกใช้ครั้งแรกเพื่อตั้งค่าเริ่มต้น
    handleScroll();

    // cleanup เมื่อ component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return scrollPosition;
}

/**
 * useIsVisible - ตรวจสอบว่า element อยู่ในพื้นที่มองเห็นหรือไม่
 */
export function useIsVisible(ref: React.RefObject<HTMLElement>, threshold = 0.1) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [ref, threshold]);

  return isVisible;
}

export default {
  useScrollToSection,
  useLocalStorage,
  useMediaQuery,
  useScrollPosition,
  useIsVisible
};