import React from 'react';
import { motion } from 'framer-motion';

const FadeText = ({ 
  text, 
  duration = 1, 
  delay = 0,
  direction = 'up',
  loop = false,
  repeatDelay = 0,
  className = '' 
}) => {
  const directionOffset = {
    up: { y: 20 },
    down: { y: -20 },
    left: { x: 20 },
    right: { x: -20 }
  };

  return (
    <motion.div
      initial={{ 
        opacity: 0,
        ...directionOffset[direction]
      }}
      animate={{ 
        opacity: 1,
        x: 0,
        y: 0
      }}
      transition={{ 
        duration,
        delay,
        ease: 'easeOut',
        ...(loop && { repeat: Infinity, repeatDelay })
      }}
      className={className}
    >
      {text}
    </motion.div>
  );
};

export default FadeText;