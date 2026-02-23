'use client';

import { type FormEvent, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'motion/react';
import { useUser } from '@/components/user-provider';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const { login, user, isHydrated } = useUser();

  useEffect(() => {
    if (!isHydrated) return;
    if (user) {
      router.replace('/dashboard');
    }
  }, [user, isHydrated, router]);

  const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email || !password || !username) return;

    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 800));
    login(email, username);
    router.push('/dashboard');
    setIsLoading(false);
  };

  const handleDemoLogin = async () => {
    if (isLoading) return;

    const demoEmail = 'demo@student.learnai.app';
    const demoUsername = 'Demo Learner';
    const demoPassword = 'password123';

    setEmail(demoEmail);
    setUsername(demoUsername);
    setPassword(demoPassword);

    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 600));
    login(demoEmail, demoUsername);
    router.push('/dashboard');
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col lg:flex-row">
      {/* Left: Login panel */}
      <div className="relative flex-1 flex items-center justify-center px-6 py-10 lg:px-16 overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-linear-to-br from-emerald-500/10 via-emerald-500/0 to-slate-900/20 dark:to-slate-900/80" />
        <div className="absolute -left-40 -top-40 h-80 w-80 rounded-full bg-emerald-500/10 blur-3xl" />
        <div className="absolute -right-32 -bottom-32 h-80 w-80 rounded-full bg-emerald-400/10 blur-3xl" />

        <motion.div
          initial={{ opacity: 0, x: -24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="relative z-10 w-full max-w-md"
        >
          {/* Logo & workspace label */}
          <div className="mb-8">
            <div className="flex items-center gap-2 text-sm font-medium text-emerald-600 dark:text-emerald-400 mb-4">
              <span className="inline-flex h-6 items-center rounded-full bg-emerald-500/10 px-3 py-0.5">
                <span className="mr-2 h-1.5 w-1.5 rounded-full bg-emerald-500 dark:bg-emerald-400" />
                Secure learning workspace
              </span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <h1 className="flex items-center gap-2">
                <span className="text-3xl font-bold bg-linear-to-r from-emerald-600 dark:from-primary to-emerald-500 dark:to-secondary bg-clip-text text-transparent">
                  LearnAI®
                </span>
              </h1>
              <span className="h-1 w-1 rounded-full bg-muted-foreground" />
              <span>Student learning portal</span>
            </div>
          </div>

          {/* Heading */}
          <div className="mb-8">
            <h1 className="text-3xl font-semibold tracking-tight mb-2">Welcome back</h1>
            <p className="text-sm text-muted-foreground max-w-sm">
              Sign in with your academy email to continue your courses, track progress, and pick up where you left off.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleLogin} className="space-y-5">
            {/* Email */}
            <div className="space-y-1">
              <label htmlFor="email" className="block text-xs font-medium text-muted-foreground uppercase tracking-wide">
                Email address
              </label>
              <div className="relative flex items-center rounded-lg bg-input border border-border focus-within:ring-2 focus-within:ring-emerald-500/60 focus-within:border-emerald-600 dark:focus-within:border-emerald-500 transition-all">
                <span className="pl-3 pr-2 text-muted-foreground/80">
                  <svg
                    aria-hidden="true"
                    className="h-4 w-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4 6.75C4 5.7835 4.7835 5 5.75 5H18.25C19.2165 5 20 5.7835 20 6.75V17.25C20 18.2165 19.2165 19 18.25 19H5.75C4.7835 19 4 18.2165 4 17.25V6.75Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M5 7L10.7639 10.5093C11.5013 10.9569 12.4987 10.9569 13.2361 10.5093L19 7"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@academy.com"
                  className="flex-1 bg-transparent py-3 pr-3 text-sm outline-none placeholder:text-muted-foreground/60"
                  required
                />
              </div>
            </div>

            {/* Username */}
            <div className="space-y-1">
              <label htmlFor="username" className="block text-xs font-medium text-muted-foreground uppercase tracking-wide">
                Display name
              </label>
              <div className="relative flex items-center rounded-lg bg-input border border-border focus-within:ring-2 focus-within:ring-emerald-500/60 focus-within:border-emerald-600 dark:focus-within:border-emerald-500 transition-all">
                <span className="pl-3 pr-2 text-muted-foreground/80">
                  <svg
                    aria-hidden="true"
                    className="h-4 w-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 12C14.0711 12 15.75 10.3211 15.75 8.25C15.75 6.17893 14.0711 4.5 12 4.5C9.92893 4.5 8.25 6.17893 8.25 8.25C8.25 10.3211 9.92893 12 12 12Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M6.75 19.5C6.75 16.8766 9.07107 14.75 12 14.75C14.9289 14.75 17.25 16.8766 17.25 19.5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <input
                  id="username"
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Your name in class"
                  className="flex-1 bg-transparent py-3 pr-3 text-sm outline-none placeholder:text-muted-foreground/60"
                  required
                />
              </div>
            </div>

            {/* Password */}
            <div className="space-y-1">
              <label htmlFor="password" className="block text-xs font-medium text-muted-foreground uppercase tracking-wide">
                Password
              </label>
              <div className="relative flex items-center rounded-lg bg-input border border-border focus-within:ring-2 focus-within:ring-emerald-500/60 focus-within:border-emerald-600 dark:focus-within:border-emerald-500 transition-all">
                <span className="pl-3 pr-2 text-muted-foreground/80">
                  <svg
                    aria-hidden="true"
                    className="h-4 w-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="4.75"
                      y="10.25"
                      width="14.5"
                      height="9"
                      rx="2.25"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M8 10V8.5C8 6.29086 9.79086 4.5 12 4.5C14.2091 4.5 16 6.29086 16 8.5V10"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  className="flex-1 bg-transparent py-3 pr-3 text-sm outline-none placeholder:text-muted-foreground/60"
                  required
                />
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center justify-between text-xs text-muted-foreground">
              <span>Forgot password?</span>
              <button
                type="button"
                onClick={handleDemoLogin}
                className="text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 font-medium"
                disabled={isLoading}
              >
                One-click demo login
              </button>
            </div>

            {/* Primary button */}
            <motion.button
              type="submit"
              disabled={isLoading}
              whileHover={{ scale: isLoading ? 1 : 1.01 }}
              whileTap={{ scale: isLoading ? 1 : 0.99 }}
              className="mt-1 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-emerald-600 dark:bg-emerald-500 px-4 py-3 text-lg font-semibold text-white dark:text-emerald-950 transition-colors hover:bg-emerald-700 dark:hover:bg-emerald-400 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <>
                  <motion.span
                    className="inline-block text-xl h-4 w-4 rounded-full border-2 border-white/40 dark:border-emerald-950/40 border-t-white dark:border-t-emerald-950"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 0.8, repeat: Infinity, ease: 'linear' }}
                  />
                  Signing you in...
                </>
              ) : (
                'Sign in'
              )}
            </motion.button>
          </form>

          {/* Footer */}
          <div className="mt-6 flex items-center justify-between text-[11px] text-muted-foreground">
            <span>Need access? Ask your program admin.</span>
            <span className="hidden sm:inline">Demo: instantly explore a sample student workspace.</span>
          </div>

          <div className="mt-10 text-[10px] text-muted-foreground/80">
            © {new Date().getFullYear()} LearnAI. All rights reserved.
          </div>
        </motion.div>
      </div>

      {/* Right: Image + marketing panel */}
      <div className="relative hidden lg:block w-[52%] overflow-hidden bg-emerald-50 dark:bg-emerald-950">
        <div className="absolute inset-0">
          <div
            className="h-full w-full bg-cover bg-center opacity-40 dark:opacity-60"
            style={{
              backgroundImage:
                'url("https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?auto=format&fit=crop&w=1600&q=80")',
            }}
          />
          <div className="absolute inset-0 bg-linear-to-br from-emerald-100/80 dark:from-emerald-900/95 via-emerald-100/70 dark:via-emerald-900/80 to-emerald-200/60 dark:to-emerald-700/70 mix-blend-multiply" />
        </div>

        <div className="relative z-10 flex h-full flex-col justify-between px-12 py-10 text-emerald-950 dark:text-emerald-50">
          <div className="flex items-center justify-between text-xs uppercase tracking-[0.18em] text-emerald-700 dark:text-emerald-200/80">
            <span>Real-time learning visibility</span>
            <span className="hidden md:inline">Built for modern edtech teams</span>
          </div>

          <div className="space-y-8 max-w-xl">
            <div>
              <h2 className="text-3xl font-semibold leading-tight mb-3">
                Get everything you need to keep learners engaged and on track.
              </h2>
              <p className="text-sm text-emerald-800 dark:text-emerald-100/80">
                Track cohort progress, surface at-risk learners, and deliver personalized learning journeys from a single, secure portal.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="rounded-xl bg-emerald-50/50 dark:bg-emerald-900/70 border border-emerald-200 dark:border-emerald-700/60 p-4 backdrop-blur-sm">
                <p className="font-medium mb-1 text-emerald-900 dark:text-emerald-50">Cohort analytics</p>
                <p className="text-emerald-700 dark:text-emerald-100/80 text-xs">
                  Monitor completion rates, quiz performance, and engagement in real time.
                </p>
              </div>
              <div className="rounded-xl bg-emerald-50/50 dark:bg-emerald-900/70 border border-emerald-200 dark:border-emerald-700/60 p-4 backdrop-blur-sm">
                <p className="font-medium mb-1 text-emerald-900 dark:text-emerald-50">Skills visibility</p>
                <p className="text-emerald-700 dark:text-emerald-100/80 text-xs">
                  Map learner progress to skills and certifications that matter.
                </p>
              </div>
              <div className="rounded-xl bg-emerald-50/50 dark:bg-emerald-900/70 border border-emerald-200 dark:border-emerald-700/60 p-4 backdrop-blur-sm">
                <p className="font-medium mb-1 text-emerald-900 dark:text-emerald-50">Automated nudges</p>
                <p className="text-emerald-700 dark:text-emerald-100/80 text-xs">
                  Trigger reminders and check-ins when learners fall behind.
                </p>
              </div>
              <div className="rounded-xl bg-emerald-50/50 dark:bg-emerald-900/70 border border-emerald-200 dark:border-emerald-700/60 p-4 backdrop-blur-sm">
                <p className="font-medium mb-1 text-emerald-900 dark:text-emerald-50">Team-ready</p>
                <p className="text-emerald-700 dark:text-emerald-100/80 text-xs">
                  Invite instructors, mentors, and program staff in one workspace.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
