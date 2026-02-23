# LearnAI – AI Learning Dashboard

LearnAI is an AI‑first learning dashboard built with Next.js on web and a matching React Native mobile experience. It focuses on AI and ML courses (LLMs, computer vision, MLOps, GenAI apps) and provides a clean, motivating workspace across devices.

## What’s Implemented

### Web app (Next.js)

- **Authentication & demo login**
  - Split hero/login page with LearnAI branding and edtech imagery.
  - One‑click demo login that takes users straight to the dashboard.

- **AI course catalog**
  - Mock data in `lib/mockData.ts` with 6 AI‑focused courses:
    - Intro to AI & ML
    - Deep Learning with PyTorch
    - Applied Computer Vision
    - Advanced LLMs & Prompt Engineering
    - MLOps & ML Systems Design
    - End‑to‑End GenAI Applications
  - Each course has lessons, duration, level, instructor, and progress fields.

- **Dashboard layout**
  - Structured sections inspired by production learning platforms:
    - Greeting hero: “Welcome back” with stats (active courses, total lessons, avg. progress) and a primary “Resume course” pill.
    - Weekly streak card: weekday dots and streak copy (ready for real streak logic).
    - Thought of the day: motivational quote encouraging short, focused AI practice.
    - “Pick up where you left off” grid for enrolled courses with animated progress bars.
    - “Recommended for you” row showing additional AI courses with level, lessons, and duration.
  - Global `DashboardNavbar` with theme toggle and user info.
  - Global `SiteFooter` with product, company, and resources links.

- **Course detail experience**
  - `/course/[id]` page with:
    - Hero section, instructor, duration, lesson count, and primary CTA.
    - Lesson list where completion updates course progress.
    - Progress card and completion celebration at 100%.

- **SEO & metadata**
  - Nested `app/course/[id]/layout.tsx` implements `generateMetadata`.
  - Per‑course title, description, keywords, Open Graph and Twitter cards, and canonical URLs.

- **Theming & UX**
  - Dark/light mode using `next-themes`.
  - Motion‑based animations for card entry and progress bars using `motion/react` (Framer Motion API).

### Mobile app (Expo + React Native)

- **Dashboard screen** in `mobile/App.js` that mirrors the web:
  - LearnAI header with nav labels, theme pill, user info, and logout pill.
  - Search bar.
  - Greeting hero card with “Resume” pill for the primary AI course.
  - Weekly streak and thought‑of‑the‑day cards, styled to match the web layout.
  - “Your AI courses” list with cards showing level badge, duration, lessons, progress bar, and instructor.
- **Dark / light mode**
  - Local `theme` state toggled from the header.
  - Alternate color styles for backgrounds, text, chips, and progress bars.

## Tech Stack

- **Web**: Next.js App Router, React, TypeScript, Tailwind‑style utility classes, `next-themes`, `motion/react`.
- **Mobile**: Expo (React Native), `StatusBar`, `FlatList`, `StyleSheet`‑based styling.

## Project Structure (high level)

- `app/`
  - `page.tsx` – Login screen.
  - `dashboard/page.tsx` – Main AI dashboard with sections & recommendations.
  - `course/[id]/page.tsx` – Course detail with lessons and progress.
  - `course/[id]/layout.tsx` – Dynamic per‑course metadata.
  - `layout.tsx` – Root layout, providers, and global footer.
- `components/`
  - `DashboardNavbar.tsx`, `CourseCardSkeleton.tsx`, `SiteFooter.tsx`, theme & user providers, UI primitives.
- `lib/mockData.ts` – AI course and lesson data.
- `mobile/App.js` – Expo app with LearnAI mobile dashboard.

## How AI Tools Were Used

This project intentionally used multiple AI tools with clear roles:

- **v0 (Vercel v0)** – _Boilerplate & initial UI_
  - Generated the initial Next.js app structure and base pages.
  - Provided the first pass of layout and component scaffolding for the dashboard, auth page, and shared UI patterns.

- **GitHub Copilot (GPT‑5.1)** – _Iterative enhancements inside VS Code_
  - Refined the login screen into a split layout with demo login.
  - Re‑designed the dashboard into structured sections (greeting, streak, thought, recommendations).
  - Converted the course catalog from web3 to AI‑focused content.
  - Implemented per‑course SEO metadata and fixed edge cases with dynamic routes.
  - Built the React Native dashboard screen and mapped web styles to RN `StyleSheet` styles.
  - Added dark/light mode behavior on both web and mobile and polished micro‑interactions.

## Challenges Faced

- **React Native parity & platform limits** – On the mobile side, only the light/dark theme toggle and basic dashboard layout are fully wired today. Other flows (navigation to course detail, real data sync, etc.) are still to be implemented, and there were issues running the Expo app reliably on web, so the focus stayed on native devices.
- **Keeping web and mobile UIs in sync** – Ensuring the React Native dashboard closely mirrors the Next.js design without Tailwind required careful manual styling.
- **Mapping Tailwind utilities to React Native** – Colors, spacing, and gradients had to be translated into RN style objects while preserving the LearnAI look.
- **Next.js metadata with dynamic routes** – Getting `generateMetadata` for `/course/[id]` correct required handling param types and the “course not found” case.
- **Making the dashboard feel full, not empty** – Balancing stats, CTAs, streaks, and recommendations without overwhelming the user.

## Improvements Possible With More Time

- **Real backend & auth**
  - Replace mock data with a database and API.
  - Proper user accounts, secure auth, and persisted progress.

- **True streaks & analytics**
  - Track lesson completions by day and calculate real streaks.
  - Add time‑spent, completion funnels, and cohort analytics.

- **Smarter recommendations**
  - Use embeddings or rules to recommend AI courses based on history and skill level.

- **Deeper AI integration**
  - In‑app AI coach/copilot for each course (question answering, hints, code review).
  - Content generation tools for instructors (auto‑draft quizzes, explanations, summaries).

- **Richer mobile experience**
  - Add a mobile course detail screen and navigation.
  - Sync web and mobile via a shared API so progress stays consistent across devices.

## Getting Started (Web)

```bash
pnpm install
pnpm dev
```

Then open http://localhost:3000 and use the demo login to explore the dashboard.

## Getting Started (Mobile)

```bash
cd mobile
npm install
npm start
```

Use the Expo app or emulator to open the project and view the LearnAI mobile dashboard.

## Support

For issues or questions:

1. Check the component files for implementation details
2. Review the mock data structure in `/lib/mockData.ts`
3. Inspect Framer Motion animations in component files
4. Review Tailwind CSS configuration in `tailwind.config.ts`
