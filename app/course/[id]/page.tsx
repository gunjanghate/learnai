"use client";

import { useEffect, useState } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { courses } from '@/lib/mockData';
import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import { useUser } from '@/components/user-provider';
import { DashboardNavbar } from '@/components/DashboardNavbar';

export default function CourseDetailPage() {
  const router = useRouter();
  const params = useParams();
  const courseId = params?.id as string;
  const course = courses.find((c) => c.id === courseId);
  const [expandedLesson, setExpandedLesson] = useState<string | null>(null);
  const [courseLessons, setCourseLessons] = useState(course?.lessons || []);

  const { user, isHydrated, isEnrolled } = useUser();

  useEffect(() => {
    if (!isHydrated) return;

    if (!user) {
      router.replace('/');
      return;
    }

    if (!isEnrolled(courseId)) {
      router.replace('/courses');
    }
  }, [user, isHydrated, isEnrolled, courseId, router]);

  if (!isHydrated) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <p className="text-muted-foreground">Loading course...</p>
      </div>
    );
  }

  if (!user || !isEnrolled(courseId)) {
    return null;
  }

  if (!course) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-2">Course not found</h1>
        </div>
      </div>
    );
  }

  const completedLessons = courseLessons.filter((l) => l.completed).length;
  const progress = Math.round((completedLessons / courseLessons.length) * 100);

  const handleToggleLesson = (lessonId: string) => {
    setCourseLessons((prev) =>
      prev.map((lesson) =>
        lesson.id === lessonId ? { ...lesson, completed: !lesson.completed } : lesson
      )
    );
  };

  return (
    <div className="min-h-screen bg-background">
      <DashboardNavbar />

      {/* Hero Section */}
      <div className="bg-linear-to-b from-card to-background border-b border-border py-10 md:py-14">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-6 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <motion.button
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              onClick={() => router.back()}
              className="text-primary hover:text-primary/80 font-medium inline-flex items-center gap-2 w-max"
            >
              ← Back to courses
            </motion.button>

            <div className="flex items-center gap-3 text-xs text-muted-foreground">
              <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 font-medium text-primary">
                LearnAI course workspace
              </span>
              <span className="hidden sm:inline">
                Track your progress, lessons, and achievements in one place.
              </span>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="flex flex-col md:flex-row gap-8"
          >
            {/* Hero Image */}
            <div className="hidden md:flex w-64 h-48 rounded-xl shrink-0 overflow-hidden relative">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?auto=format&fit=crop&w=1200&q=80')] bg-cover bg-center" />
              <div className="absolute inset-0 bg-linear-to-br from-primary/70 via-primary/40 to-transparent" />
            </div>

            {/* Content */}
            <div className="flex-1">
              <p className="text-xs uppercase tracking-[0.18em] text-primary mb-2">Course overview</p>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                {course.title}
              </h1>
              <p className="text-muted-foreground text-base md:text-lg mb-6 max-w-2xl">{course.description}</p>

              <div className="flex flex-wrap items-center gap-6">
                <div>
                  <p className="text-muted-foreground text-xs uppercase tracking-wide">Duration</p>
                  <p className="text-foreground font-semibold">{course.duration}</p>
                </div>
                <div>
                  <p className="text-muted-foreground text-xs uppercase tracking-wide">Lessons</p>
                  <p className="text-foreground font-semibold">{course.lessonCount}</p>
                </div>
                <div>
                  <p className="text-muted-foreground text-xs uppercase tracking-wide">Instructor</p>
                  <p className="text-foreground font-semibold">{course.instructor}</p>
                </div>
                <button className="px-6 py-3 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-lg transition-all shadow-md shadow-primary/20">
                  Start learning now
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* What you'll learn */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="mb-12"
            >
              <h2 className="text-2xl font-bold text-foreground mb-6">What you'll learn</h2>
              <p className="text-muted-foreground mb-4">This course will help you learn:</p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  'Core blockchain concepts',
                  'Smart contract basics',
                  'DeFi fundamentals',
                  'Web3 best practices',
                  'Security essentials',
                  'Real-world applications'
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center shrink-0 mt-1">
                      <span className="text-primary-foreground text-sm">✓</span>
                    </div>
                    <span className="text-foreground/80">{item}</span>
                  </div>
                ))}
              </div>
            </motion.section>

            {/* Syllabus */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
            >
              <h2 className="text-2xl font-bold text-foreground mb-6">Syllabus</h2>
              <div className="space-y-2">
                {courseLessons.map((lesson, index) => (
                  <motion.div
                    key={lesson.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.3 + index * 0.05 }}
                  >
                    <button
                      onClick={() => setExpandedLesson(expandedLesson === lesson.id ? null : lesson.id)}
                      className="w-full bg-card border border-border hover:border-primary/30 rounded-lg p-4 flex items-center justify-between transition-all hover:shadow-lg hover:shadow-primary/10"
                    >
                      <div className="flex items-center gap-4 text-left flex-1">
                        <div className="flex items-center justify-center w-6 h-6 rounded border border-border">
                          {lesson.completed ? (
                            <span className="text-primary text-sm">✓</span>
                          ) : (
                            <span className="text-muted-foreground text-sm">{index + 1}</span>
                          )}
                        </div>
                        <div>
                          <p className={`font-semibold ${lesson.completed ? 'text-muted-foreground line-through' : 'text-foreground'}`}>
                            {lesson.title}
                          </p>
                          <p className="text-muted-foreground text-sm">{lesson.duration}</p>
                        </div>
                      </div>
                      <motion.div
                        animate={{ rotate: expandedLesson === lesson.id ? 180 : 0 }}
                        className="text-muted-foreground"
                      >
                        <ChevronDown size={20} />
                      </motion.div>
                    </button>

                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: expandedLesson === lesson.id ? 1 : 0, height: expandedLesson === lesson.id ? 'auto' : 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <div className="bg-muted border-x border-b border-border p-4">
                        <div className="flex items-center gap-3 mb-3">
                          <input
                            type="checkbox"
                            checked={lesson.completed}
                            onChange={() => handleToggleLesson(lesson.id)}
                            className="w-5 h-5 cursor-pointer"
                          />
                          <span className="text-muted-foreground">Mark as complete</span>
                        </div>
                        <p className="text-muted-foreground text-sm">
                          Learn about {lesson.title.toLowerCase()} in this lesson. Duration: {lesson.duration}
                        </p>
                        <button className="mt-3 px-4 py-2 bg-primary hover:bg-primary/90 text-primary-foreground text-sm font-semibold rounded-lg transition-all">
                          Watch lesson
                        </button>
                      </div>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </motion.section>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Progress */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="bg-card border border-border rounded-xl p-6"
            >
              <h3 className="font-semibold text-foreground mb-4">Your Progress</h3>
              <div className="mb-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-muted-foreground text-sm">Completion</span>
                  <span className="text-primary font-semibold">{progress}%</span>
                </div>
                <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0.8 }}
                    className="h-full bg-linear-to-r from-primary to-primary/80"
                  />
                </div>
              </div>
              <p className="text-muted-foreground text-sm">
                {completedLessons} of {courseLessons.length} lessons completed
              </p>
            </motion.div>

            {/* Instructor */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="bg-card border border-border rounded-xl p-6"
            >
              <h3 className="font-semibold text-foreground mb-4">Instructor</h3>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-secondary" />
                <div>
                  <p className="text-foreground font-medium">{course.instructor}</p>
                  <p className="text-muted-foreground text-sm">Course Creator</p>
                </div>
              </div>
            </motion.div>

            {/* Achievement */}
            {progress === 100 && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-linear-to-br from-primary/20 to-primary/5 border border-primary/30 rounded-xl p-6 text-center"
              >
                <p className="text-3xl mb-2">🎉</p>
                <p className="text-primary font-semibold">Course Complete!</p>
                <p className="text-muted-foreground text-sm mt-2">You've earned the achievement for this course</p>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
