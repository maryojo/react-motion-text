import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const RollingNumber = ({
  value,
  duration = 0.5,
  className = ''
}) => {
  const digits = String(value).split('');

  return (
    <div className={`inline-flex overflow-hidden ${className}`}>
      <AnimatePresence mode="popLayout">
        {digits.map((digit, index) => (
          <motion.div
            key={`${digit}-${index}`}
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 20, opacity: 0 }}
            transition={{ duration }}
            className="inline-block tabular-nums"
          >
            {digit}
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default RollingNumber;