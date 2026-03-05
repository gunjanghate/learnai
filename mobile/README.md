# LearnAI Mobile (Expo App)

This mobile directory contains the standalone Expo / React Native version of the LearnAI dashboard. It mirrors the web dashboard experience in a native-friendly layout, focused on AI learning progress, course discovery, and a simple enrollment flow.

## What this app implements

- **Tabbed dashboard experience (Dashboard / Courses)**
  - Renders a single DashboardScreen from App.js (registered from index.js).
  - The header shows the product name **LearnAI®** and two tabs: **Dashboard** and **Courses**.
  - The active tab is controlled by local state and changes the main content area.

- **Dashboard tab**
  - Greeting hero card ("Welcome back, Demo Learner") with a **Resume** pill for the primary course.
  - **Weekly streak** panel showing a 7‑day streak row (currently always 0 days, UI only).
  - **Thought of the day** card encouraging consistent learning.
  - "Your AI courses" section that shows only courses the user has started (enrolled).

- **Courses tab**
  - "All AI courses" list backed by the static initialCourses data.
  - Each course is rendered with the same rich card UI as on the dashboard.
  - Tapping **Start learning** marks a course as started, which then makes it appear under "Your AI courses" on the Dashboard tab.

- **Course cards**
  - Each course shows title, description, difficulty level, instructor, duration, lesson count, and progress.
  - Includes a visual thumbnail area with a gradient overlay and a level badge (Beginner / Intermediate, etc.).
  - Shows progress information using a label, percentage, and horizontal progress bar whose width reflects course.progress.
  - Shows a pill-style primary action button:
    - On the Dashboard tab, started courses can show an **Unenroll** button (local-only reset).
    - On the Courses tab, not‑yet‑started courses show **Start learning**.

- **Light / Dark theme toggle (local UI state)**
  - The header includes a pill button that toggles between **Light Mode** and **Dark Mode**.
  - Clicking the button switches local theme state between light and dark.
  - Styles across the screen (backgrounds, text colors, cards, pills, progress bar) change based on the theme value.
  - The theme is not persisted (no AsyncStorage); it resets whenever the app reloads.

- **Functional course search (Courses tab)**
  - When the Courses tab is active, a search bar labeled "Search courses..." appears under the header.
  - Input is debounced with useEffect so filtering runs a short time after typing stops.
  - Filters courses by title, description, level, or instructor (case-insensitive text search).
  - If no courses match the query, a simple empty state message is shown.

- **Static data and local state**
  - Course data (initialCourses) is defined in utils/data.js and imported into App.js.
  - App-level state tracks theme, active tab, the list of courses with a local started flag, and search text.
  - Each course has a lessons array, but lesson-level navigation or completion toggling is not yet implemented.
  - Progress values are currently static (all 0) and not updated by any in-app actions.

- **Styling and layout**
  - Uses StyleSheet.create from React Native for all styles (see styles.js).
  - Light and dark variants are defined for most major text and background elements (for example, container / containerDark, heroCard / heroCardDark).
  - Uses SafeAreaView and SafeAreaProvider from react-native-safe-area-context for proper layout on modern devices.
  - Layout is optimized for a phone-sized viewport: a single-column, scrollable dashboard with cards.

## Tech stack

- **Expo** (managed workflow)
- **React Native** for the UI components
- **React** hooks (useState, useEffect) for local state
- **expo-status-bar** for status bar appearance
- **react-native-safe-area-context** for safe area handling

Additional dependencies are installed in package.json (for example React Navigation, nativewind, tailwindcss, and animation helpers), but the current version of this app uses a single-screen layout and does not yet wire up navigation stacks or Tailwind-style styling.

## Project structure (mobile)

- App.js – Main dashboard UI (header, tabs, search, course lists, theme toggle).
- index.js – Registers the root component with Expo using registerRootComponent.
- utils/data.js – Static initialCourses seed data for the app.
- styles.js – Centralized StyleSheet-based styles, including light/dark variants.
- app.json – Expo app configuration (name, slug, etc.).
- assets/ – Static assets (icons, images) used by the mobile app.

## Running the mobile app

From the root of the mobile directory:

```bash
# Install dependencies (if not already installed)
npm install

# Start the Expo development server
npm run start

# Optional platform-specific shortcuts
npm run android
npm run ios
npm run web
```

Then:

- Use the QR code or Expo Go on your device to open the app, **or**
- Run it in an Android/iOS emulator, **or**
- Open it in a web browser via the Expo web target.

## Current limitations / next steps

- No real authentication, user profile, or logout logic (all user state is local-only UI).
- No navigation to detailed course or lesson screens yet (single-screen dashboard layout).
- No real progress tracking or backend integration; all course and streak data is static.
- Course state (started / unenrolled) and theme are not persisted between app reloads.
- Tapping a course card surface does not yet navigate anywhere (only the primary pill triggers local actions).

These areas are natural extension points if you want to evolve this demo into a production-ready LearnAI mobile app.
