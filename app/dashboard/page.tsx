"use client";

import { useState, useMemo, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { motion } from 'motion/react';
import { courses } from '@/lib/mockData';
import { DashboardNavbar } from '@/components/DashboardNavbar';
import { CourseCardSkeleton } from '@/components/CourseCardSkeleton';
import { useUser } from '@/components/user-provider';

const getLevelBadgeColor = (level: string) => {
  switch (level) {
    case 'Beginner':
      return 'bg-green-500/20 text-green-300 border-green-500/30';
    case 'Intermediate':
      return 'bg-blue-500/20 text-blue-300 border-blue-500/30';
    case 'Advanced':
      return 'bg-purple-500/20 text-purple-300 border-purple-500/30';
    default:
      return 'bg-gray-500/20 text-gray-300 border-gray-500/30';
  }
};

const getThumbnailGradient = (gradient: string) => {
  return `bg-gradient-to-br ${gradient}`;
};

export default function DashboardPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All courses');
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();
  const { user, isHydrated, enrolledCourseIds } = useUser();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isHydrated) return;
    if (!user) {
      router.replace('/');
    }
  }, [user, isHydrated, router]);

  const myCourses = useMemo(
    () => courses.filter((course) => enrolledCourseIds.includes(course.id)),
    [enrolledCourseIds]
  );

  const filteredCourses = useMemo(() => {
    return myCourses.filter((course) =>
      course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.description.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery, myCourses]);

  const hasAnyEnrolled = enrolledCourseIds.length > 0;

  const totalLessons = useMemo(
    () => myCourses.reduce((sum, course) => sum + course.lessonCount, 0),
    [myCourses]
  );

  const averageProgress = useMemo(() => {
    if (myCourses.length === 0) return 0;
    const totalProgress = myCourses.reduce((sum, course) => sum + (course.progress || 0), 0);
    return Math.round(totalProgress / myCourses.length);
  }, [myCourses]);

  const primaryCourse = myCourses[0];

  const recommendedCourses = useMemo(
    () => courses.filter((course) => !enrolledCourseIds.includes(course.id)).slice(0, 3),
    [enrolledCourseIds]
  );

  const weeklyDays = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];
  const todayIndex = new Date().getDay(); // 0 = Sunday
  const currentStreak = 0;

  const categories = ['All courses', 'DeFi', 'Security', 'Solidity', 'Basics', 'Zero-Knowledge'];

  if (!isHydrated) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <p className="text-muted-foreground">Loading your dashboard...</p>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  return (
    <div className="min-h-screen bg-background">
      <DashboardNavbar />

      {/* Search Bar */}
      <div className="bg-card border-b border-border sticky top-16 z-30 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center gap-4">
          <div className="flex-1">
            <input
              type="text"
              placeholder="Search courses..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-2 bg-input border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
            />
          </div>
          {/* <button className="hidden md:block px-6 py-2 bg-muted border border-border text-foreground font-semibold rounded-lg hover:bg-muted/80 transition-all">
            Sort
          </button> */}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Overview / Welcome */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-10 grid gap-6 md:grid-cols-[minmax(0,2fr)_minmax(0,1.2fr)]"
        >
          {/* Welcome + primary CTA */}
          <div className="relative overflow-hidden rounded-2xl bg-linear-to-r from-primary/10 via-primary/5 to-secondary/10 border border-border/60 p-6 md:p-7">
            <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-primary/15 blur-3xl" />
            <div className="absolute -left-12 bottom-0 h-32 w-32 rounded-full bg-secondary/10 blur-3xl" />

            <div className="relative z-10 flex flex-col gap-6">
              {/* Top row: copy + primary actions */}
              <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.18em] text-primary mb-1">
                    LearnAI dashboard
                  </p>
                  <h1 className="text-2xl md:text-3xl font-semibold text-foreground mb-1">
                    Welcome back{user?.username ? `, ${user.username}` : ''}
                  </h1>
                  <p className="text-sm text-muted-foreground max-w-xl">
                    Pick up where you left off, track your progress across courses, and discover new topics to explore.
                  </p>
                </div>

                <div className="flex flex-col items-stretch gap-3 md:items-end md:min-w-[260px]">
                  {primaryCourse && (
                    <button
                      onClick={() => router.push(`/course/${primaryCourse.id}`)}
                      className="inline-flex w-full md:w-auto items-center justify-between gap-3 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-md shadow-primary/30 hover:bg-primary/90 transition-all"
                    >
                      <span className="truncate">Resume {primaryCourse.title.length > 10 ? primaryCourse.title.substring(0, 10) + '..' : primaryCourse.title}</span>
                      <span className="text-xs font-normal text-primary-foreground/80 whitespace-nowrap">
                        {primaryCourse.progress}% complete
                      </span>
                    </button>
                  )}
                  <button
                    onClick={() => router.push('/courses')}
                    className="inline-flex w-full md:w-auto items-center justify-center gap-2 rounded-full border border-border bg-background/70 px-4 py-2 text-xs font-medium text-muted-foreground hover:bg-muted/70 transition-colors"
                  >
                    Explore more courses
                    <span className="text-lg leading-none">↗</span>
                  </button>
                </div>
              </div>

              {/* Bottom row: compact stats bar */}
              <div className="grid grid-cols-1 gap-4 pt-2 text-xs text-muted-foreground sm:grid-cols-3 sm:border-t sm:border-white/20 sm:pt-4">
                <div>
                  <p className="uppercase tracking-[0.18em] mb-1">Active courses</p>
                  <p className="text-sm font-semibold text-foreground">{myCourses.length}</p>
                </div>
                <div>
                  <p className="uppercase tracking-[0.18em] mb-1">Total lessons</p>
                  <p className="text-sm font-semibold text-foreground">{totalLessons}</p>
                </div>
                <div>
                  <p className="uppercase tracking-[0.18em] mb-1">Avg. progress</p>
                  <p className="text-sm font-semibold text-primary">{averageProgress}%</p>
                </div>
              </div>
            </div>
          </div>

          {/* Weekly streak + thought of the day */}
          <div className="grid h-full gap-4 md:grid-rows-[auto_minmax(0,1fr)]">
            <div className="rounded-2xl bg-card border border-border p-4 flex flex-col justify-between">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground mb-1">Weekly streak</p>
                  <p className="text-sm text-muted-foreground">Stay consistent this week</p>
                </div>
                <div className="text-right text-xs">
                  <p className="text-muted-foreground">Current streak</p>
                  <p className="text-sm font-semibold text-primary">{currentStreak} days</p>
                </div>
              </div>
              <div className="flex items-center justify-between gap-2 mb-4">
                {weeklyDays.map((day, index) => {
                  const mappedIndex = (index + 1) % 7; // align Monday-first with Date.getDay()
                  const isToday = mappedIndex === todayIndex;
                  return (
                    <div key={day} className="flex flex-col items-center gap-1 text-[10px] text-muted-foreground">
                      <div
                        className={`h-7 w-7 rounded-full border flex items-center justify-center transition-colors ${isToday
                          ? 'bg-primary/20 border-primary/60 text-primary'
                          : 'bg-muted border-border'
                          }`}
                      >
                        {day}
                      </div>
                      <span className="uppercase">{day}</span>
                    </div>
                  );
                })}
              </div>
              <p className="text-xs text-muted-foreground">
                Complete at least one lesson a day to build your streak.
              </p>
            </div>

            <div className="rounded-2xl bg-linear-to-br from-primary/10 via-background to-background border border-border/80 p-4 flex flex-col justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-primary mb-2">Thought of the day</p>
                <p className="text-sm text-foreground mb-2">
                  "Consistency beats intensity. 30 focused minutes today moves you further than 3 hours someday."
                </p>
                <p className="text-xs text-muted-foreground">Keep your streak by completing at least one lesson today.</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Categories */}
        {/* <div className="flex gap-3 mb-12 overflow-x-auto pb-4 scrollbar-hide">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-lg font-medium whitespace-nowrap transition-all ${selectedCategory === category
                  ? 'bg-primary/20 text-primary border border-primary/30'
                  : 'bg-muted text-muted-foreground border border-border hover:bg-muted/80'
                }`}
            >
              {category}
            </button>
          ))}
        </div> */}

        {/* Courses Grid - pick up where you left off */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-foreground mb-1">Pick up where you left off</h2>
          <p className="text-sm text-muted-foreground">
            Continue learning from your active courses. Your progress and streaks stay in sync.
          </p>
        </div>

        {/* Enrolled courses */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {isLoading ? (
            Array.from({ length: 6 }).map((_, index) => (
              <motion.div
                key={`skeleton-${index}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
              >
                <CourseCardSkeleton />
              </motion.div>
            ))
          ) : !hasAnyEnrolled ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="col-span-full text-center py-12"
            >
              <div className="text-6xl mb-4">📚</div>
              <h3 className="text-xl font-semibold text-foreground mb-2">No enrolled courses yet</h3>
              <p className="text-muted-foreground mb-4">
                Enroll in a course to have it appear in your dashboard.
              </p>
              <button
                onClick={() => router.push('/courses')}
                className="px-6 py-2 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-lg transition-all"
              >
                Browse courses
              </button>
            </motion.div>
          ) : filteredCourses.length > 0 ? (
            filteredCourses.map((course, index) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link href={`/course/${course.id}`}>
                  <div className="group cursor-pointer bg-card border border-border rounded-xl overflow-hidden hover:border-primary/30 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 h-full flex flex-col">
                    {/* Thumbnail */}
                    <div className={`h-48 ${getThumbnailGradient(course.thumbnail)} relative overflow-hidden`}>
                      <div className="absolute inset-0 bg-linear-to-b from-transparent to-card" />
                      <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold border ${getLevelBadgeColor(course.level)}`}>
                        {course.level}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 flex-1 flex flex-col">
                      <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {course.title}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-4 flex-1">
                        {course.description.slice(0, 120)}...
                      </p>

                      {/* Progress Bar */}
                      <div className="mb-4">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-xs text-muted-foreground">Progress</span>
                          <span className="text-xs font-semibold text-primary">{course.progress}%</span>
                        </div>
                        <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${course.progress}%` }}
                            transition={{ duration: 0.8, ease: 'easeOut' }}
                            className="h-full bg-linear-to-r from-primary to-primary/80 rounded-full"
                          />
                        </div>
                      </div>

                      {/* Footer */}
                      <div className="flex items-center justify-between pt-4 border-t border-border">
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 rounded-full bg-secondary" />
                          <span className="text-xs text-muted-foreground">{course.instructor}</span>
                        </div>
                        <button className="px-4 py-2 bg-primary hover:bg-primary/90 text-primary-foreground text-xs font-semibold rounded-lg transition-all">
                          Start learning
                        </button>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="col-span-full text-center py-12"
            >
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold text-foreground mb-2">No courses found</h3>
              <p className="text-muted-foreground">Try adjusting your search query</p>
            </motion.div>
          )}
        </div>

        {/* Recommended courses */}
        {recommendedCourses.length > 0 && (
          <section className="mt-12">
            <div className="mb-4 flex items-center justify-between">
              <div>
                <h2 className="text-lg font-semibold text-foreground">Recommended for you</h2>
                <p className="text-sm text-muted-foreground">
                  Explore more courses to expand your learning track.
                </p>
              </div>
              <button
                onClick={() => router.push('/courses')}
                className="hidden md:inline-flex items-center gap-2 rounded-full border border-border bg-background/60 px-4 py-2 text-xs font-medium text-muted-foreground hover:bg-muted/70 transition-colors"
              >
                View all courses
                <span className="text-lg leading-none">↗</span>
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {recommendedCourses.map((course) => (
                <Link key={course.id} href={`/course/${course.id}`}>
                  <div className="group h-full cursor-pointer rounded-xl border border-border bg-card hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10 transition-all overflow-hidden flex flex-col">
                    <div className={`h-28 ${getThumbnailGradient(course.thumbnail)} relative`}>
                      <div className="absolute inset-0 bg-linear-to-b from-transparent to-card/95" />
                      <div
                        className={`absolute top-3 right-3 px-3 py-1 rounded-full text-[11px] font-semibold border ${getLevelBadgeColor(
                          course.level
                        )}`}
                      >
                        {course.level}
                      </div>
                    </div>
                    <div className="p-4 flex-1 flex flex-col">
                      <h3 className="text-sm font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                        {course.title}
                      </h3>
                      <p className="text-xs text-muted-foreground mb-3 flex-1">
                        {course.description.slice(0, 110)}...
                      </p>
                      <div className="flex items-center justify-between text-[11px] text-muted-foreground mt-auto pt-2 border-t border-border">
                        <span>{course.lessonCount} lessons</span>
                        <span>{course.duration}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
