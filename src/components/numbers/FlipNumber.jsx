import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FlipNumber = ({
  value,
  duration = 0.6,
  className = ''
}) => {
  const digits = String(value).split('');

  return (
    <div className={`inline-flex gap-1 ${className}`}>
      {digits.map((digit, index) => (
        <div key={index} className="relative" style={{ perspective: '1000px' }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={digit}
              initial={{ rotateX: -90, opacity: 0 }}
              animate={{ rotateX: 0, opacity: 1 }}
              exit={{ rotateX: 90, opacity: 0 }}
              transition={{ duration }}
              className="inline-block tabular-nums"
              style={{ transformStyle: 'preserve-3d' }}
            >
              {digit}
            </motion.div>
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
};

export default FlipNumber;