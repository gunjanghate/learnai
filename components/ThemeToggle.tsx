'use client';

import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { Moon, Sun } from 'lucide-react';

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const isDark = resolvedTheme === 'dark';

  return (
    <button
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-primary text-primary-foreground font-medium transition-colors hover:opacity-90"
    >
      {isDark ? (
        <>
          <Sun className="w-4 h-4 mr-2" />
          <span>Light Mode</span>
        </>
      ) : (
        <>
          <Moon className="w-4 h-4 mr-2" />
          <span>Dark Mode</span>
        </>
      )}
    </button>
  );
}
