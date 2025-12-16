import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion } from 'framer-motion';

const TypewriterText = ({ 
  text, 
  speed = 50,
  delay = 0,
  cursor = true,
  loop = false,
  repeatDelay = 1000,
  className = '' 
}) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const isResettingRef = useRef(false);

  useEffect(() => {
    // Animation complete, reset if loop is enabled
    if (loop && currentIndex === text.length && !isResettingRef.current) {
      isResettingRef.current = true;
      const resetTimeout = setTimeout(() => {
        setDisplayText('');
        setCurrentIndex(0);
        isResettingRef.current = false;
      }, repeatDelay);
      return () => clearTimeout(resetTimeout);
    }

    // Type out text character by character
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, currentIndex === 0 ? delay * 1000 : speed);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text, speed, delay, loop, repeatDelay]);

  return (
    <div className={`inline-block ${className}`}>
      {displayText}
      {cursor && (
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.5, repeat: Infinity }}
          className="inline-block w-0.5 h-5 bg-current ml-1"
        />
      )}
    </div>
  );
};

export default TypewriterText;