'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';
import Link from 'next/link';

export function DashboardNavbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <nav className="bg-card border-b border-border sticky top-0 z-40 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Left: Logo and Nav Links */}
        <div className="flex items-center gap-8">
          <Link href="/dashboard" className="flex items-center gap-2">
            <span className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
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
              href="/dashboard"
              className="text-muted-foreground font-medium hover:text-foreground transition-colors"
            >
              Courses
            </Link>
            <Link
              href="#settings"
              className="text-muted-foreground font-medium hover:text-foreground transition-colors"
            >
              Settings
            </Link>
          </div>
        </div>

        {/* Right: Dark Mode Toggle */}
        <button
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          className="px-4 py-2 bg-foreground text-background rounded-full font-semibold flex items-center gap-2 hover:opacity-80 transition-all duration-300 border border-border dark:bg-background dark:text-foreground dark:border-border"
        >
          {theme === 'dark' ? (
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
      </div>
    </nav>
  );
}
