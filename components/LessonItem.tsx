'use client';

import { motion } from 'motion/react';
import { Lesson } from '@/lib/mockData';
import { CheckCircle2, Circle } from 'lucide-react';

interface LessonItemProps {
  lesson: Lesson;
  onToggle: (lessonId: string) => void;
  index?: number;
}

export function LessonItem({ lesson, onToggle, index = 0 }: LessonItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      className="flex items-center gap-4 p-4 rounded-lg hover:bg-secondary/50 transition-colors group cursor-pointer"
      onClick={() => onToggle(lesson.id)}
    >
      {/* Checkbox */}
      <motion.div
        animate={{ scale: lesson.completed ? 1 : 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="flex-shrink-0"
      >
        {lesson.completed ? (
          <CheckCircle2 className="w-6 h-6 text-primary" />
        ) : (
          <Circle className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
        )}
      </motion.div>

      {/* Lesson title */}
      <motion.span
        animate={{
          opacity: lesson.completed ? 0.6 : 1,
          textDecoration: lesson.completed ? 'line-through' : 'none',
        }}
        transition={{ duration: 0.2 }}
        className="flex-1 font-medium text-foreground"
      >
        {lesson.title}
      </motion.span>

      {/* Completion badge */}
      {lesson.completed && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.2 }}
          className="flex-shrink-0 px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full"
        >
          Done
        </motion.div>
      )}
    </motion.div>
  );
}
