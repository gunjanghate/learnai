import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ThemeProvider } from '@/components/theme-provider'
import { UserProvider } from '@/components/user-provider'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: 'LearnAI – AI Learning Dashboard',
    template: '%s | LearnAI',
  },
  description:
    'LearnAI is a modern learning dashboard for AI and web3 courses, helping you track progress, continue where you left off, and stay motivated.',
  keywords: [
    'LearnAI',
    'AI courses',
    'machine learning courses',
    'web3 courses',
    'online learning dashboard',
    'course progress tracking',
  ],
  authors: [{ name: 'LearnAI' }],
  creator: 'LearnAI',
  publisher: 'LearnAI',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'LearnAI – AI Learning Dashboard',
    description:
      'Discover and track AI and web3 courses with an intuitive learning dashboard that keeps your progress in sync.',
    url: '/',
    siteName: 'LearnAI',
    images: [
      {
        url: '/og.png',
        width: 1200,
        height: 630,
        alt: 'LearnAI dashboard preview',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'LearnAI – AI Learning Dashboard',
    description:
      'Track your AI and web3 course progress in one beautiful learning dashboard.',
    images: ['/og.png'],
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans antialiased">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <UserProvider>
            {children}
            <Analytics />
          </UserProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
