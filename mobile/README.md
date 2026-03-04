# LearnAI Mobile (Expo App)

This `mobile` directory contains the standalone Expo / React Native version of the LearnAI dashboard. It mirrors the web dashboard experience in a native-friendly layout, focused on AI learning progress and course discovery.

## What this app implements

- **Dashboard home screen** (`App.js`)
  - Renders a single `DashboardScreen` as the root of the app (registered from `index.js`).
  - Uses a static list of AI-focused courses (`initialCourses`) similar to the data shown on the web dashboard.
  - Shows a greeting hero card ("Welcome back, Demo Learner") with a **Resume** pill for the primary course.
  - Displays a **Weekly streak** panel and a **Thought of the day** card to encourage consistent learning.
  - Lists **"Your AI courses"** using a `FlatList`, each rendered as a rich course card.

- **Course cards**
  - Each course shows title, description, difficulty level, instructor, duration, lesson count, and progress.
  - Includes a visual thumbnail area with a gradient overlay and a level badge (Beginner/Intermediate, etc.).
  - Shows progress information via a label, percentage, and a horizontal progress bar whose width reflects `course.progress`.
  - Provides a "Start learning" pill-style button and instructor avatar placeholder.

- **Header bar and user state (UI-only)**
  - Top header bar contains the product name **LearnAI®**, simple nav labels (Dashboard, Courses), and user section.
  - User section shows "Logged in as Demo Learner" and a non-functional Logout pill.
  - All user identity and auth are **purely presentational**; there is no real authentication or persistence.

- **Light / Dark theme toggle (local UI state)**
  - The header includes a pill button that toggles between **Light Mode** and **Dark Mode**.
  - Clicking the button switches a local `theme` state between `light` and `dark`.
  - Styles across the screen (backgrounds, text colors, cards, pills, progress bar) change based on the `theme` value.
  - The theme is **not persisted** (no AsyncStorage); it resets when the app reloads.

- **Search input (non-functional placeholder)**
  - A search bar labeled "Search courses..." is rendered under the header.
  - Currently it does not filter the list; it is UI-only and meant as a future entry point for search.

- **Static data and local state**
  - Course data (`initialCourses`) is defined as a constant in `App.js` and loaded into component state via `useState`.
  - Each course also contains a small `lessons` array, but lesson-level navigation or completion toggling is not yet implemented.
  - Course progress values are currently all `0` and there is no API integration, persistence, or backend connection.

- **Styling approach**
  - Uses `StyleSheet.create` from React Native for all styles.
  - Light and dark variants are defined for most major text and background elements (e.g., `container` / `containerDark`, `heroCard` / `heroCardDark`).
  - Layout is optimized for a phone-sized viewport (single-column scrollable dashboard with cards).

## Tech stack

- **Expo** (managed workflow)
- **React Native** for the UI components
- **React** hooks (`useState`) for local state
- **expo-status-bar** for status bar appearance

Dependencies are declared in `package.json`:

- `expo`
- `expo-status-bar`
- `react`
- `react-native`
- `react-native-web` (used by Expo for web builds)

## Project structure (mobile)

- `App.js` – Main dashboard UI, all screens and styles live here.
- `index.js` – Registers the root component with Expo using `registerRootComponent`.
- `app.json` – Expo app configuration (name, slug, etc.).
- `assets/` – Static assets (icons, images) used by the mobile app.

## Running the mobile app

From the root of this `mobile` directory:

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

- No real authentication, user profile, or logout logic (UI only).
- No navigation to detailed course or lesson screens.
- No real progress tracking or backend integration; all course data is static.
- Search and course card taps are currently non-functional.

These areas are natural extension points if you want to evolve this demo into a production-ready LearnAI mobile app.
