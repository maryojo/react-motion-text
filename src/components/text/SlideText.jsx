import React from 'react';
import { motion } from 'framer-motion';

const SlideText = ({ 
  text, 
  direction = 'left',
  duration = 0.8, 
  delay = 0,
  loop = false,
  repeatDelay = 0,
  className = '' 
}) => {
  const directions = {
    left: { x: -100 },
    right: { x: 100 },
    up: { y: -100 },
    down: { y: 100 }
  };

  return (
    <motion.div
      initial={directions[direction]}
      animate={{ x: 0, y: 0 }}
      transition={{ 
        duration,
        delay,
        type: 'spring',
        stiffness: 100,
        ...(loop && { repeat: Infinity, repeatDelay })
      }}
      className={className}
    >
      {text}
    </motion.div>
  );
};

export default SlideText;