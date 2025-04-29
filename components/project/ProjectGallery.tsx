'use client';

import { useState, ReactNode } from 'react';
import { Images, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import AnimatedSection from '@/components/common/animations/AnimatedSection';

interface Screenshot {
  label: string;
  desc: string;
  icon?: ReactNode;
}

interface ProjectGalleryProps {
  title: string;
  screenshots: Screenshot[];
  nextImageLabel?: string;
  prevImageLabel?: string;
  animationsEnabled?: boolean;
}

export default function ProjectGallery({
  title,
  screenshots,
  nextImageLabel = "Next Image",
  prevImageLabel = "Previous Image",
  animationsEnabled = true
}: ProjectGalleryProps) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const nextImage = () => {
    if (screenshots.length > 0) {
      setActiveImageIndex((prev) => (prev + 1) % screenshots.length);
    }
  };

  const prevImage = () => {
    if (screenshots.length > 0) {
      setActiveImageIndex((prev) => (prev - 1 + screenshots.length) % screenshots.length);
    }
  };

  return (
    <AnimatedSection
      animation="fade-in"
      disabled={!animationsEnabled}
      className="mb-12"
    >
      <div className="bg-white dark:bg-gray-900 rounded-lg border border-gray-100 dark:border-gray-800 p-6 shadow-md">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
          <Images size={20} className="mr-3 text-gray-500 dark:text-gray-400" />
          {title}
        </h3>
        
        {/* Image Carousel */}
        <div className="relative">
          {/* Active Image */}
          <div className="aspect-video bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md overflow-hidden mb-4 relative">
            <div className="absolute inset-0 flex flex-col items-center justify-center text-gray-500 dark:text-gray-400 p-4">
              {/* Placeholder Icon or Custom Icon */}
              {screenshots[activeImageIndex].icon || (
                <>
                  {activeImageIndex === 0 && <Images size={28} className="mb-3 opacity-50" />}
                  {activeImageIndex === 1 && <Images size={28} className="mb-3 opacity-50" />}
                  {activeImageIndex === 2 && <Images size={28} className="mb-3 opacity-50" />}
                  {activeImageIndex === 3 && <Images size={28} className="mb-3 opacity-50" />}
                </>
              )}
              
              {/* Caption */}
              <span className="font-medium text-lg">{screenshots[activeImageIndex].label}</span>
              <p className="text-sm text-gray-400 dark:text-gray-500 text-center mt-2">
                {screenshots[activeImageIndex].desc}
              </p>
              
              {/* Placeholder image dimensions */}
              <div className="absolute bottom-3 right-3 bg-gray-200 dark:bg-gray-700 rounded-full px-2 py-0.5 text-xs">
                1920 × 1080
              </div>
            </div>
          </div>
          
          {/* Navigation Buttons */}
          <div className="absolute top-1/2 left-2 -translate-y-1/2">
            <Button
              variant="outline"
              size="icon"
              onClick={prevImage}
              className="rounded-full w-8 h-8 bg-white/80 dark:bg-gray-900/80 border-gray-200 dark:border-gray-700 cursor-pointer"
              aria-label={prevImageLabel}
            >
              <ChevronLeft size={16} className="text-gray-600 dark:text-gray-300" />
            </Button>
          </div>
          
          <div className="absolute top-1/2 right-2 -translate-y-1/2">
            <Button
              variant="outline"
              size="icon"
              onClick={nextImage}
              className="rounded-full w-8 h-8 bg-white/80 dark:bg-gray-900/80 border-gray-200 dark:border-gray-700 cursor-pointer"
              aria-label={nextImageLabel}
            >
              <ChevronRight size={16} className="text-gray-600 dark:text-gray-300" />
            </Button>
          </div>
        </div>
        
        {/* Thumbnails */}
        <div className="grid grid-cols-4 gap-2 mt-4">
          {screenshots.map((screenshot, index) => (
            <div 
              key={index} 
              className={`aspect-video bg-gray-100 dark:bg-gray-800 rounded-md cursor-pointer flex items-center justify-center p-2 transition-all ${
                activeImageIndex === index 
                  ? 'ring-2 ring-gray-900 dark:ring-white' 
                  : 'opacity-70 hover:opacity-100'
              }`}
              onClick={() => setActiveImageIndex(index)}
            >
              <span className="text-xs text-center text-gray-600 dark:text-gray-300 font-medium">
                {screenshot.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}