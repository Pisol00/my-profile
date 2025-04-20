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

// Extracted animation styles into a separate object for better organization
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
 * A component that animates its children when they enter the viewport
 * Can be disabled for performance or accessibility reasons
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
    // Skip animation if disabled
    if (disabled) {
      setIsVisible(true);
      return () => {};
    }
    
    const section = sectionRef.current;
    if (!section) return () => {};
    
    // Create intersection observer to detect when element enters viewport
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Small delay to ensure browser has handled layout tasks
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

  // If animations are disabled, render without animation styles
  if (disabled) {
    return <div id={id} className={className}>{children}</div>;
  }

  // Get the appropriate styles for the selected animation
  const { initial, visible } = animationStyles[animation];
  
  // Create transition styles - same for all animations
  const transitionStyle: CSSProperties = {
    transition: `opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, transform 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
    willChange: 'opacity, transform',
    backfaceVisibility: 'hidden',
    WebkitBackfaceVisibility: 'hidden',
  };
  
  // Combine all styles
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