"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";

interface User {
    email: string;
    username: string;
}

interface UserContextValue {
    user: User | null;
    isHydrated: boolean;
    enrolledCourseIds: string[];
    login: (email: string, username: string) => void;
    logout: () => void;
    enrollInCourse: (courseId: string) => void;
    unenrollFromCourse: (courseId: string) => void;
    isEnrolled: (courseId: string) => boolean;
}

const UserContext = createContext<UserContextValue | undefined>(undefined);

const USER_KEY = "learnai-user";

function getEnrollmentsKey(email: string) {
    return `learnai-enrollments-${email}`;
}

export function UserProvider({ children }: { children: React.ReactNode }) {
    const [user, setUser] = useState<User | null>(null);
    const [enrolledCourseIds, setEnrolledCourseIds] = useState<string[]>([]);
    const [isHydrated, setIsHydrated] = useState(false);

    // Hydrate from localStorage on first mount
    useEffect(() => {
        if (typeof window === "undefined") return;

        try {
            const raw = window.localStorage.getItem(USER_KEY);
            if (raw) {
                let hydratedUser: User | null = null;

                // Backwards compatibility: older versions stored just the email string
                try {
                    const parsed = JSON.parse(raw) as Partial<User> | string;
                    if (typeof parsed === "string") {
                        const email = parsed;
                        hydratedUser = { email, username: email.split("@")[0] };
                    } else if (parsed && typeof parsed === "object" && typeof parsed.email === "string") {
                        const email = parsed.email;
                        const username = typeof parsed.username === "string" && parsed.username
                            ? parsed.username
                            : email.split("@")[0];
                        hydratedUser = { email, username };
                    }
                } catch {
                    const email = raw;
                    hydratedUser = { email, username: raw.split("@")[0] };
                }

                if (hydratedUser) {
                    setUser(hydratedUser);

                    const enrollmentsRaw = window.localStorage.getItem(
                        getEnrollmentsKey(hydratedUser.email)
                    );
                    if (enrollmentsRaw) {
                        const parsed = JSON.parse(enrollmentsRaw) as string[];
                        if (Array.isArray(parsed)) {
                            setEnrolledCourseIds(parsed);
                        }
                    }
                }
            }
        } catch (error) {
            console.error("Failed to hydrate user from localStorage", error);
        } finally {
            setIsHydrated(true);
        }
    }, []);

    // Persist user and enrollments when they change
    useEffect(() => {
        if (!isHydrated || typeof window === "undefined") return;

        try {
            if (user) {
                window.localStorage.setItem(USER_KEY, JSON.stringify(user));
                window.localStorage.setItem(
                    getEnrollmentsKey(user.email),
                    JSON.stringify(enrolledCourseIds)
                );
            } else {
                window.localStorage.removeItem(USER_KEY);
            }
        } catch (error) {
            console.error("Failed to persist user to localStorage", error);
        }
    }, [user, enrolledCourseIds, isHydrated]);

    const login = (email: string, username: string) => {
        const normalizedEmail = email.trim().toLowerCase();
        const finalUsername = username.trim() || normalizedEmail.split("@")[0];
        const nextUser: User = { email: normalizedEmail, username: finalUsername };

        setUser(nextUser);

        // Load any existing enrollments for this email
        if (typeof window !== "undefined") {
            try {
                const enrollmentsRaw = window.localStorage.getItem(getEnrollmentsKey(normalizedEmail));
                if (enrollmentsRaw) {
                    const parsed = JSON.parse(enrollmentsRaw) as string[];
                    if (Array.isArray(parsed)) {
                        setEnrolledCourseIds(parsed);
                    } else {
                        setEnrolledCourseIds([]);
                    }
                } else {
                    setEnrolledCourseIds([]);
                }
            } catch {
                setEnrolledCourseIds([]);
            }
        }
    };

    const logout = () => {
        setUser(null);
        setEnrolledCourseIds([]);
    };

    const enrollInCourse = (courseId: string) => {
        setEnrolledCourseIds((prev) =>
            prev.includes(courseId) ? prev : [...prev, courseId]
        );
    };

    const unenrollFromCourse = (courseId: string) => {
        setEnrolledCourseIds((prev) => prev.filter((id) => id !== courseId));
    };

    const isEnrolled = (courseId: string) => {
        return enrolledCourseIds.includes(courseId);
    };

    const value: UserContextValue = useMemo(
        () => ({
            user,
            isHydrated,
            enrolledCourseIds,
            login,
            logout,
            enrollInCourse,
            unenrollFromCourse,
            isEnrolled,
        }),
        [user, isHydrated, enrolledCourseIds]
    );

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

export function useUser() {
    const ctx = useContext(UserContext);
    if (!ctx) {
        throw new Error("useUser must be used within a UserProvider");
    }
    return ctx;
}
