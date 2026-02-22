'use client';

import { motion } from 'motion/react';

interface ProgressBarProps {
  progress: number;
  size?: 'sm' | 'md' | 'lg';
}

export function ProgressBar({ progress, size = 'md' }: ProgressBarProps) {
  const heightClasses = {
    sm: 'h-1',
    md: 'h-2',
    lg: 'h-3',
  };

  return (
    <div className={`w-full bg-secondary rounded-full overflow-hidden ${heightClasses[size]}`}>
      <motion.div
        className="h-full bg-gradient-to-r from-primary to-primary/80 rounded-full"
        initial={{ width: 0 }}
        animate={{ width: `${progress}%` }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      />
    </div>
  );
}
