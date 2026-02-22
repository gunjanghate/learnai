'use client';

import { motion } from 'motion/react';

export function CourseCardSkeleton() {
  return (
    <div className="bg-card border border-border rounded-xl overflow-hidden h-full">
      {/* Skeleton Thumbnail */}
      <div className="h-48 bg-gradient-to-r from-muted via-muted/70 to-muted animate-pulse" />

      {/* Skeleton Content */}
      <div className="p-6 space-y-4">
        {/* Title skeleton */}
        <motion.div
          animate={{ backgroundPosition: ['0% 0%', '100% 0%', '0% 0%'] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="h-6 bg-gradient-to-r from-muted via-muted/70 to-muted rounded-lg"
          style={{ backgroundSize: '200% 100%' }}
        />

        {/* Description skeleton lines */}
        <div className="space-y-2">
          <motion.div
            animate={{ backgroundPosition: ['0% 0%', '100% 0%', '0% 0%'] }}
            transition={{ duration: 1.5, repeat: Infinity, delay: 0.1 }}
            className="h-3 bg-gradient-to-r from-muted via-muted/70 to-muted rounded-lg w-5/6"
            style={{ backgroundSize: '200% 100%' }}
          />
          <motion.div
            animate={{ backgroundPosition: ['0% 0%', '100% 0%', '0% 0%'] }}
            transition={{ duration: 1.5, repeat: Infinity, delay: 0.2 }}
            className="h-3 bg-gradient-to-r from-muted via-muted/70 to-muted rounded-lg w-4/6"
            style={{ backgroundSize: '200% 100%' }}
          />
        </div>

        {/* Progress bar skeleton */}
        <motion.div
          animate={{ backgroundPosition: ['0% 0%', '100% 0%', '0% 0%'] }}
          transition={{ duration: 1.5, repeat: Infinity, delay: 0.3 }}
          className="h-2 bg-gradient-to-r from-muted via-muted/70 to-muted rounded-full"
          style={{ backgroundSize: '200% 100%' }}
        />

        {/* Footer skeleton */}
        <div className="pt-4 border-t border-border flex items-center justify-between">
          <motion.div
            animate={{ backgroundPosition: ['0% 0%', '100% 0%', '0% 0%'] }}
            transition={{ duration: 1.5, repeat: Infinity, delay: 0.4 }}
            className="h-6 w-24 bg-gradient-to-r from-muted via-muted/70 to-muted rounded-lg"
            style={{ backgroundSize: '200% 100%' }}
          />
          <motion.div
            animate={{ backgroundPosition: ['0% 0%', '100% 0%', '0% 0%'] }}
            transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
            className="h-8 w-32 bg-gradient-to-r from-muted via-muted/70 to-muted rounded-lg"
            style={{ backgroundSize: '200% 100%' }}
          />
        </div>
      </div>
    </div>
  );
}
