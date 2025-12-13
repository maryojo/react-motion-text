import React from 'react';
import { motion } from 'framer-motion';

const GlitchText = ({ 
  text, 
  loop = true,
  repeatDelay = 3,
  className = '' 
}) => {
  return (
    <motion.div
      className={`relative inline-block ${className}`}
      animate={{
        x: [0, -2, 2, -2, 2, 0],
        y: [0, 2, -2, 2, -2, 0]
      }}
      transition={{
        duration: 0.5,
        ...(loop && { repeat: Infinity, repeatDelay })
      }}
    >
      <span className="relative z-10">{text}</span>
      <motion.span
        className="absolute top-0 left-0 text-red-500 mix-blend-screen"
        animate={{
          x: [0, -2, 2, 0],
          y: [0, 2, -2, 0]
        }}
        transition={{
          duration: 0.3,
          ...(loop && { repeat: Infinity, repeatDelay })
        }}
      >
        {text}
      </motion.span>
      <motion.span
        className="absolute top-0 left-0 text-blue-500 mix-blend-screen"
        animate={{
          x: [0, 2, -2, 0],
          y: [0, -2, 2, 0]
        }}
        transition={{
          duration: 0.3,
          ...(loop && { repeat: Infinity, repeatDelay }),
          delay: 0.1
        }}
      >
        {text}
      </motion.span>
    </motion.div>
  );
};

export default GlitchText;