'use client'

import { useRef, useState, useEffect, ReactNode, memo } from 'react'

type AnimationType = 'fade-in' | 'slide-left' | 'slide-right' | 'zoom-in' | 'none';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  animation?: AnimationType;
  delay?: number;
  threshold?: number;
  id?: string;
  disabled?: boolean;
}

// ใช้ inline styles แทน CSS animations เพื่อหลีกเลี่ยงการกระพริบ
const AnimatedSection = memo(({
  children,
  className = '',
  animation = 'fade-in',
  delay = 0,
  threshold = 0.2,
  id,
  disabled = false,
}: AnimatedSectionProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    // ถ้า disabled ให้แสดงผลทันทีโดยไม่มี animation
    if (disabled) {
      setIsVisible(true);
      return;
    }
    
    const section = sectionRef.current;
    if (!section) return;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // ให้เวลาสักนิดก่อนจะแสดง animation เพื่อให้ browser จัดการกับ layout ก่อน
          setTimeout(() => {
            setIsVisible(true);
          }, 50);
          observer.unobserve(section);
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold,
      }
    );
    
    observer.observe(section);
    
    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, [threshold, disabled]);

  // ถ้า disabled ให้แสดงผลโดยไม่มี style พิเศษ
  if (disabled) {
    return <div id={id} className={className}>{children}</div>;
  }

  // สร้าง inline styles แบบต่างๆ ตาม animation type
  let initialStyles = {};
  let visibleStyles = {};
  
  switch (animation) {
    case 'fade-in':
      initialStyles = { opacity: 0, transform: 'translateY(10px)' };
      visibleStyles = { opacity: 1, transform: 'translateY(0)' };
      break;
    case 'slide-left':
      initialStyles = { opacity: 0, transform: 'translateX(-20px)' };
      visibleStyles = { opacity: 1, transform: 'translateX(0)' };
      break;
    case 'slide-right':
      initialStyles = { opacity: 0, transform: 'translateX(20px)' };
      visibleStyles = { opacity: 1, transform: 'translateX(0)' };
      break;
    case 'zoom-in':
      initialStyles = { opacity: 0, transform: 'scale(0.98)' };
      visibleStyles = { opacity: 1, transform: 'scale(1)' };
      break;
    case 'none':
      initialStyles = {};
      visibleStyles = {};
      break;
  }

  // รวม styles ต่างๆ
  const styles = {
    ...initialStyles,
    ...(isVisible ? visibleStyles : {}),
    transition: `opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, transform 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
    willChange: 'opacity, transform', // ช่วยในการ optimize การเรนเดอร์
    backfaceVisibility: 'hidden', // ช่วยป้องกันการกระพริบใน animation บางชนิด
    WebkitBackfaceVisibility: 'hidden',
  };
  
  return (
    <div
      ref={sectionRef}
      id={id}
      className={className}
      style={styles}
    >
      {children}
    </div>
  );
});

AnimatedSection.displayName = 'AnimatedSection';

export default AnimatedSection;