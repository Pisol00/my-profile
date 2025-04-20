'use client';

import { useState, useEffect, useRef } from 'react';

type TypedTextProps = {
  texts: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  delayBetweenTexts?: number;
  className?: string;
  loop?: boolean;
};

const TypedText = ({
  texts,
  typingSpeed = 100,
  deletingSpeed = 50,
  delayBetweenTexts = 1500,
  className = '',
  loop = true
}: TypedTextProps) => {
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [textIndex, setTextIndex] = useState(0);
  const [isWaiting, setIsWaiting] = useState(false);
  
  // Keep track of the current timeout so we can clear it when needed
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (texts.length === 0) return;
    
    // Clear any existing timeouts when effect runs again
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    
    // When waiting, do nothing until the wait is over
    if (isWaiting) {
      timeoutRef.current = setTimeout(() => {
        setIsWaiting(false);
        setIsDeleting(true);
      }, delayBetweenTexts);
      return;
    }
    
    const currentText = texts[textIndex];
    
    // Deleting phase
    if (isDeleting) {
      if (displayedText) {
        timeoutRef.current = setTimeout(() => {
          setDisplayedText(prev => prev.slice(0, -1));
        }, deletingSpeed);
      } else {
        setIsDeleting(false);
        // Move to the next text when deletion is complete
        setTextIndex(prevIndex => (prevIndex + 1) % texts.length);
      }
      return;
    }
    
    // Typing phase
    if (displayedText.length < currentText.length) {
      timeoutRef.current = setTimeout(() => {
        setDisplayedText(currentText.slice(0, displayedText.length + 1));
      }, typingSpeed);
    } else {
      // Pause after typing is complete
      setIsWaiting(true);
    }
    
    // Clean up timeouts when component unmounts
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [
    texts, 
    displayedText, 
    isDeleting, 
    textIndex, 
    isWaiting, 
    typingSpeed, 
    deletingSpeed, 
    delayBetweenTexts,
    loop
  ]);
  
  return (
    <span className={className}>
      {displayedText}
      <span className="animate-pulse opacity-100">|</span>
    </span>
  );
};

export default TypedText;