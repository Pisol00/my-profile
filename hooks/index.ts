import { useState, useEffect, useCallback, useRef } from 'react';

/**
 * useScrollToSection - Smoothly scrolls to a section when ref is provided
 * @returns A callback function that accepts a ref and scrolls to it
 */
export function useScrollToSection() {
  return useCallback((ref: React.RefObject<HTMLElement | null>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);
}

/**
 * useLocalStorage - Syncs React state with localStorage
 * @param key - The localStorage key
 * @param initialValue - The initial value if no value exists in localStorage
 * @returns A tuple of [storedValue, setValue] similar to useState
 */
export function useLocalStorage<T>(key: string, initialValue: T): [T, (value: T) => void] {
  // State to store the current value
  const [storedValue, setStoredValue] = useState<T>(initialValue);

  // Initialize from localStorage on mount
  useEffect(() => {
    try {
      const item = window.localStorage.getItem(key);
      const value = item ? JSON.parse(item) : initialValue;
      setStoredValue(value);
    } catch (error) {
      console.error(`Error reading localStorage key "${key}":`, error);
      setStoredValue(initialValue);
    }
  }, [key, initialValue]);

  // Update function that syncs localStorage and state
  const setValue = useCallback((value: T) => {
    try {
      setStoredValue(value);
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error(`Error setting localStorage key "${key}":`, error);
    }
  }, [key]);

  return [storedValue, setValue];
}

/**
 * useMediaQuery - Tracks whether a media query matches
 * @param query - The media query to track
 * @returns Boolean indicating if the media query matches
 */
export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    // Return early during SSR
    if (typeof window === 'undefined') {
      return;
    }

    const media = window.matchMedia(query);
    setMatches(media.matches);

    // Update state when media query changes
    const listener = (e: MediaQueryListEvent) => {
      setMatches(e.matches);
    };

    media.addEventListener('change', listener);

    return () => {
      media.removeEventListener('change', listener);
    };
  }, [query]);

  return matches;
}

/**
 * useScrollPosition - Tracks window scroll position
 * @returns Current scroll position (scrollY)
 */
export function useScrollPosition() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return scrollPosition;
}

/**
 * useIsVisible - Tracks if an element is visible in the viewport
 * @param threshold - Percentage of element that must be visible (0-1)
 * @returns [ref, isVisible] - Ref to attach to element and boolean for visibility
 */
export function useIsVisible<T extends HTMLElement = HTMLElement>(threshold = 0.1) {
  const ref = useRef<T>(null);
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
  }, [threshold]);

  return [ref, isVisible] as const;
}

/**
 * useReducedMotion - Detects if user prefers reduced motion
 * @returns Boolean indicating if reduced motion is preferred
 */
export function useReducedMotion() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    
    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };
    
    mediaQuery.addEventListener('change', handleChange);
    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, []);
  
  return prefersReducedMotion;
}

// Export all hooks as a single object for convenience
export default {
  useScrollToSection,
  useLocalStorage,
  useMediaQuery,
  useScrollPosition,
  useIsVisible,
  useReducedMotion
};