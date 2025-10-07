"use client";
import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface SmoothScrollWrapperProps {
  children: ReactNode;
  className?: string;
}

const SmoothScrollWrapper = ({ children, className = "" }: SmoothScrollWrapperProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 1, 
        ease: [0.25, 0.46, 0.45, 0.94], // Custom easing similar to Framer
        delay: 0.1
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default SmoothScrollWrapper;
