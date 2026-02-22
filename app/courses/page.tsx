"use client";

import { useMemo } from "react";
import { useRouter } from "next/navigation";
import { motion } from "motion/react";
import { Lock, CheckCircle2 } from "lucide-react";
import { courses } from "@/lib/mockData";
import { DashboardNavbar } from "@/components/DashboardNavbar";
import { useUser } from "@/components/user-provider";

export default function CoursesPage() {
    const router = useRouter();
    const { user, isHydrated, isEnrolled, enrollInCourse } = useUser();

    const sortedCourses = useMemo(() => {
        return [...courses].sort((a, b) => a.title.localeCompare(b.title));
    }, []);

    const handlePrimaryAction = (courseId: string) => {
        if (!isHydrated) return;

        if (!user) {
            router.push("/");
            return;
        }

        if (!isEnrolled(courseId)) {
            enrollInCourse(courseId);
            return;
        }

        router.push(`/course/${courseId}`);
    };

    return (
        <div className="min-h-screen bg-background">
            <DashboardNavbar />

            <div className="max-w-7xl mx-auto px-6 py-10">
                <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
                    <div>
                        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">All Courses</h1>
                        <p className="text-muted-foreground max-w-2xl">
                            Browse the full LearnAI catalog. Enroll in a course to have it
                            appear in your dashboard and unlock its lessons.
                        </p>
                    </div>
                    <div className="text-sm text-muted-foreground">
                        {isHydrated && user ? (
                            <span>
                                Signed in as <span className="font-semibold text-foreground">{user.username}</span>
                            </span>
                        ) : (
                            <span>Sign in to enroll and track your progress.</span>
                        )}
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {sortedCourses.map((course, index) => {
                        const enrolled = isHydrated && !!user && isEnrolled(course.id);
                        const primaryLabel = !isHydrated
                            ? "Loading..."
                            : !user
                                ? "Login to enroll"
                                : enrolled
                                    ? "Continue learning"
                                    : "Enroll";

                        return (
                            <motion.div
                                key={course.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: index * 0.05 }}
                                className="h-full"
                            >
                                <div className="group h-full flex flex-col overflow-hidden rounded-xl border border-border bg-card hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10 transition-all">
                                    <div
                                        className={`h-40 bg-linear-to-br ${course.thumbnail} relative overflow-hidden`}
                                    >
                                        <div className="absolute inset-0 bg-linear-to-b from-black/10 to-card/0" />
                                        {enrolled && (
                                            <div className="absolute top-4 left-4 inline-flex items-center gap-1 rounded-full bg-primary/90 px-3 py-1 text-xs font-semibold text-primary-foreground shadow-sm">
                                                <CheckCircle2 className="h-3.5 w-3.5" />
                                                <span>Enrolled</span>
                                            </div>
                                        )}
                                    </div>

                                    <div className="flex flex-1 flex-col p-6">
                                        <h2 className="mb-2 text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                                            {course.title}
                                        </h2>
                                        <p className="mb-4 line-clamp-3 text-sm text-muted-foreground">
                                            {course.description}
                                        </p>

                                        <div className="mt-auto flex items-center justify-between pt-4 border-t border-border">
                                            <div className="text-xs text-muted-foreground">
                                                <p>{course.duration} • {course.lessonCount} lessons</p>
                                                <p>By {course.instructor}</p>
                                            </div>
                                            <button
                                                type="button"
                                                onClick={() => handlePrimaryAction(course.id)}
                                                disabled={!isHydrated}
                                                className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 disabled:opacity-60"
                                            >
                                                {!user && <Lock className="h-3.5 w-3.5" />}
                                                <span>{primaryLabel}</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
