'use client';

import Link from 'next/link';
import { motion } from 'motion/react';
import { ProgressBar } from './ProgressBar';
import { Course } from '@/lib/mockData';
import { ChevronRight } from 'lucide-react';

interface CourseCardProps {
  course: Course;
  delay?: number;
}

export function CourseCard({ course, delay = 0 }: CourseCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay }}
      whileHover={{ scale: 1.02, y: -5 }}
    >
      <Link href={`/course/${course.id}`}>
        <div className="group h-full bg-card border border-border rounded-xl p-6 hover:border-primary/50 hover:shadow-lg transition-all cursor-pointer">
          {/* Header */}
          <div className="flex items-start justify-between mb-4">
            <h3 className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors line-clamp-2">
              {course.title}
            </h3>
            <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all flex-shrink-0 ml-2" />
          </div>

          {/* Description */}
          <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
            {course.description}
          </p>

          {/* Progress Section */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-medium text-muted-foreground">Progress</span>
              <span className="text-sm font-bold text-primary">{course.progress}%</span>
            </div>
            <ProgressBar progress={course.progress} size="md" />
          </div>

          {/* Footer */}
          <div className="mt-4 pt-4 border-t border-border">
            <p className="text-xs text-muted-foreground">
              {course.lessons.filter((l) => l.completed).length} of {course.lessons.length} lessons completed
            </p>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
