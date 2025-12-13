import React, { useEffect } from 'react';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';

const CountUpNumber = ({
  end,
  start = 0,
  duration = 2,
  delay = 0,
  decimals = 0,
  separator = ',',
  prefix = '',
  suffix = '',
  className = ''
}) => {
  const count = useMotionValue(start);
  const rounded = useTransform(count, latest => {
    const value = latest.toFixed(decimals);
    const [integer, fraction] = value.split('.');
    const formattedInteger = integer.replace(/\B(?=(\d{3})+(?!\d))/g, separator);
    return fraction ? `${formattedInteger}.${fraction}` : formattedInteger;
  });

  useEffect(() => {
    const controls = animate(count, end, {
      duration,
      delay,
      ease: 'easeOut'
    });

    return controls.stop;
  }, [end, duration, delay, count]);

  return (
    <motion.span className={className}>
      {prefix}
      <motion.span>{rounded}</motion.span>
      {suffix}
    </motion.span>
  );
};

export default CountUpNumber;