"use client";

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useUser } from '@/components/user-provider';

export function DashboardNavbar() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const router = useRouter();
  const { user, isHydrated, logout } = useUser();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const isDark = resolvedTheme === 'dark';

  return (
    <nav className="bg-card border-b border-border sticky top-0 z-40 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Left: Logo and Nav Links */}
        <div className="flex items-center gap-8">
          <Link href="/dashboard" className="flex items-center gap-2">
            <span className="text-2xl font-bold bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent">
              LearnAI®
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/dashboard"
              className="text-foreground font-semibold hover:text-primary transition-colors"
            >
              Dashboard
            </Link>
            <Link
              href="/courses"
              className="text-muted-foreground font-medium hover:text-foreground transition-colors"
            >
              Courses
            </Link>
            {/* <Link
              href="#settings"
              className="text-muted-foreground font-medium hover:text-foreground transition-colors"
            >
              Settings
            </Link> */}
          </div>
        </div>

        {/* Right: Theme toggle, user info, logout */}
        <div className="flex items-center gap-4">
          {isHydrated && user && (
            <div className="hidden md:flex items-center gap-2 text-sm text-muted-foreground">
              <span>Logged in as</span>
              <span className="font-semibold text-foreground">{user.username}</span>
            </div>
          )}

          <button
            onClick={() => setTheme(isDark ? 'light' : 'dark')}
            className="px-4 py-2 bg-foreground text-background rounded-full font-semibold flex items-center gap-2 hover:opacity-80 transition-all duration-300 border border-border dark:bg-background dark:text-foreground dark:border-border"
          >
            {isDark ? (
              <>
                <Sun size={18} />
                <span className="hidden sm:inline">Light Mode</span>
              </>
            ) : (
              <>
                <Moon size={18} />
                <span className="hidden sm:inline">Dark Mode</span>
              </>
            )}
          </button>

          {isHydrated && user && (
            <button
              onClick={() => {
                logout();
                router.push('/');
              }}
              className="px-3 py-1.5 border border-border rounded-full text-xs font-medium text-muted-foreground hover:bg-muted/60 transition-colors"
            >
              Logout
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}
