'use client'

import { useRef, useState, useEffect, ReactNode, memo, CSSProperties } from 'react'

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

// animations style map - แยกส่วน styles ออกมาเพื่อความเป็นระเบียบ
const animationStyles: Record<AnimationType, { initial: CSSProperties, visible: CSSProperties }> = {
  'fade-in': {
    initial: { opacity: 0, transform: 'translateY(10px)' },
    visible: { opacity: 1, transform: 'translateY(0)' }
  },
  'slide-left': {
    initial: { opacity: 0, transform: 'translateX(-20px)' },
    visible: { opacity: 1, transform: 'translateX(0)' }
  },
  'slide-right': {
    initial: { opacity: 0, transform: 'translateX(20px)' },
    visible: { opacity: 1, transform: 'translateX(0)' }
  },
  'zoom-in': {
    initial: { opacity: 0, transform: 'scale(0.98)' },
    visible: { opacity: 1, transform: 'scale(1)' }
  },
  'none': {
    initial: {},
    visible: {}
  }
};

/**
 * AnimatedSection Component
 * 
 * ใช้สำหรับสร้าง section ที่มี animation เมื่อเลื่อนมาถึง
 * ปรับปรุงประสิทธิภาพด้วย memo และการแยกส่วน styles
 */
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
      return () => {};
    }
    
    const section = sectionRef.current;
    if (!section) return () => {};
    
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

  // เลือก styles ตาม animation type
  const { initial, visible } = animationStyles[animation];
  
  // สร้าง transition style ที่ใช้สำหรับทุก animation
  const transitionStyle: CSSProperties = {
    transition: `opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, transform 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
    willChange: 'opacity, transform',
    backfaceVisibility: 'hidden',
    WebkitBackfaceVisibility: 'hidden',
  };
  
  // รวม styles ต่างๆ
  const styles: CSSProperties = {
    ...initial,
    ...(isVisible ? visible : {}),
    ...transitionStyle
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