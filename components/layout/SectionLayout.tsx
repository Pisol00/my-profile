'use client';

import { ReactNode, forwardRef } from 'react';
import AnimatedSection from '@/components/common/animations/AnimatedSection';

interface SectionLayoutProps {
  children: ReactNode;
  title?: string;
  subtitle?: string;
  bgColor?: string;
  bgGradient?: string;
  bgImage?: string;
  blurAmount?: string;
  overlayOpacity?: number;
  id?: string;
  className?: string;
  animationsEnabled?: boolean;
  decorations?: boolean;
  titleClassName?: string;
  subtitleClassName?: string;
}

/**
 * SectionLayout Component
 * 
 * A consistent layout wrapper for all sections of the website
 * Handles common section elements like title, background, and decorations
 * Updated with elegant monochrome styling
 */
const SectionLayout = forwardRef<HTMLElement, SectionLayoutProps>(
  ({
    children,
    title,
    subtitle,
    bgColor = '',
    bgGradient = '',
    bgImage = '',
    blurAmount = '5px',
    overlayOpacity = 0.5,
    id,
    className = '',
    animationsEnabled = true,
    decorations = true,
    titleClassName = '',
    subtitleClassName = '',
  }, ref) => {
    // Determine background class based on props
    const bgClass = bgColor || bgGradient || 'bg-background';

    return (
      <section
        ref={ref}
        id={id}
        className={`relative py-24 overflow-hidden ${bgClass} ${className}`}
      >
        {/* Background image (if provided) */}
        {bgImage && (
          <div
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: `url(${bgImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              filter: `blur(${blurAmount})`,
              opacity: overlayOpacity,
              transform: 'scale(1.05)',
            }}
          />
        )}

        {/* Background overlay for text readability */}
        {bgImage && (
          <div className="absolute inset-0 z-0 bg-white/30 dark:bg-black/40" />
        )}

        {/* Decorative elements */}
        {decorations && (
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {/* Decorative circles */}
            <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-gray-100 dark:bg-gray-900/20 blur-3xl opacity-70"></div>
            <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-gray-100 dark:bg-gray-900/20 blur-3xl opacity-70"></div>
            
            {/* Grid pattern */}
            <div className="absolute inset-0 opacity-5">
              <svg width="100%" height="100%">
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" className="text-gray-500 dark:text-gray-400" />
                </pattern>
                <rect width="100%" height="100%" fill="url(#grid)" />
              </svg>
            </div>
          </div>
        )}

        {/* Content container */}
        <div className="container relative z-10 mx-auto max-w-7xl px-4">
          {/* Section header with title and subtitle */}
          {(title || subtitle) && (
            <AnimatedSection 
              disabled={!animationsEnabled} 
              className={`mb-16 text-center ${titleClassName}`}
            >
              {title && (
                <h2 className="text-3xl md:text-5xl font-bold text-center mb-6 text-gray-900 dark:text-white">
                  {title}
                </h2>
              )}
              {subtitle && (
                <p className={`text-center text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-lg ${subtitleClassName}`}>
                  {subtitle}
                </p>
              )}
            </AnimatedSection>
          )}

          {/* Main content */}
          {children}
        </div>
      </section>
    );
  }
);

SectionLayout.displayName = 'SectionLayout';

export default SectionLayout;