import React from 'react';
import { motion } from 'framer-motion';

const WaveText = ({ 
  text, 
  delay = 0,
  duration = 0.05,
  loop = false,
  repeatDelay = 0,
  className = '' 
}) => {
  const letters = Array.from(text);

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: duration, delayChildren: delay }
    })
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 200
      }
    },
    hidden: {
      opacity: 0,
      y: 20
    },
    ...(loop && {
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          type: 'spring',
          damping: 12,
          stiffness: 200,
          repeat: Infinity,
          repeatDelay
        }
      }
    })
  };

  return (
    <motion.div
      className={`flex ${className}`}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {letters.map((letter, index) => (
        <motion.span key={index} variants={child}>
          {letter === ' ' ? '\u00A0' : letter}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default WaveText;