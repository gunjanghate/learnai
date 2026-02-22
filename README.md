# LearnAI Dashboard

A beautiful, production-ready learning management dashboard built with Next.js 16, React 19, Tailwind CSS, and Framer Motion. Features smooth animations, dark mode support, responsive design, and interactive course management.

## Features

- **Authentication Page** - Professional login screen with smooth animations and form validation
- **Dashboard** - Beautiful course grid with search filtering and progress tracking
- **Course Details** - Interactive course pages with lesson management and progress calculation
- **Dark Mode** - Full dark mode support with theme persistence using next-themes
- **Smooth Animations** - Professional animations powered by Framer Motion including page transitions, staggered card loading, and interactive elements
- **Responsive Design** - Mobile-first design that works perfectly on all screen sizes (mobile, tablet, desktop)
- **Mock Data** - Pre-loaded with 6 courses containing 5-6 lessons each for demonstration
- **React Native Component** - Minimal component structure demonstrating mobile app architecture

## Tech Stack

- **Next.js 16** - React framework with App Router
- **React 19** - UI library with latest features
- **Tailwind CSS 4** - Utility-first CSS framework
- **Framer Motion 11** - Animation library for smooth transitions
- **next-themes** - Dark mode support with persistence
- **TypeScript** - Type safety throughout the application
- **Lucide React** - Beautiful icon library

## Project Structure

```
/app
  /course
    /[id]
      page.tsx           # Course detail page with lesson management
  /dashboard
    page.tsx            # Dashboard with course grid and search
  layout.tsx            # Root layout with theme provider
  page.tsx              # Login/authentication page
  globals.css           # Global styles with design tokens

/components
  Navbar.tsx            # Navigation header with search
  CourseCard.tsx        # Course card component with progress
  LessonItem.tsx        # Individual lesson item with checkbox
  ProgressBar.tsx       # Animated progress bar
  SkeletonCard.tsx      # Loading skeleton
  ThemeToggle.tsx       # Dark mode toggle button
  MobileScreen.native.tsx  # React Native component structure
  theme-provider.tsx    # Theme provider wrapper

/lib
  mockData.ts           # Mock courses and lessons data
```

## Getting Started

### Installation

```bash
# Clone or download the project
cd learnai-dashboard

# Install dependencies
pnpm install

# Run development server
pnpm dev
```

The app will be available at `http://localhost:3000`

### Demo Credentials

The login page accepts any email and password combination for demo purposes. Just enter:
- Email: `demo@example.com`
- Password: `password`

Or any other values - all will work!

## Design System

### Color Scheme

The dashboard uses an indigo-based color palette optimized for both light and dark modes:

**Light Mode:**
- Background: Off-white with slight blue tint
- Cards: Pure white
- Primary: Indigo (#6366f1)
- Text: Dark blue-gray

**Dark Mode:**
- Background: Deep blue-gray (#1e293b)
- Cards: Slightly lighter blue-gray (#334155)
- Primary: Bright indigo (#818cf8)
- Text: Light gray-blue

### Typography

- **Heading Font**: Geist (sans-serif)
- **Body Font**: Geist (sans-serif)
- **Mono Font**: Geist Mono

### Spacing & Layout

- Uses Tailwind CSS spacing scale (4px base unit)
- Responsive breakpoints: mobile-first, md (768px), lg (1024px)
- Primary layout: Flexbox for navigation and cards, CSS Grid for responsive layouts

## Key Features

### 1. Authentication
- Clean login interface with email and password fields
- Smooth fade-in and scale animations on mount
- Loading state with animated spinner during submission
- Redirects to dashboard on successful login

### 2. Dashboard
- Displays all available courses in a responsive grid
- Shows overall progress statistics
- Real-time search filtering of courses
- Loading skeleton cards with staggered animation
- Each course card shows:
  - Course title and description
  - Progress percentage and animated progress bar
  - Completed lessons count

### 3. Course Detail Page
- Back navigation to dashboard
- Course information and progress tracking
- Interactive lesson list with checkbox toggles
- Lesson completion persists during session
- Celebrates 100% completion with congratulations message
- Animated transitions for lesson completion

### 4. Dark Mode
- Toggle button in navbar
- Persists preference using next-themes
- Smooth CSS transitions between themes
- Optimized color palette for both modes

### 5. Animations
- **Page Transitions**: Fade-in + scale on mount
- **Card Loading**: Staggered cascade animation
- **Progress Bars**: Smooth animated width transitions
- **Lesson Checkboxes**: Scale and opacity animations
- **Hover Effects**: Subtle scale and color transitions
- **Theme Toggle**: Instant theme switch with CSS transitions

## Usage Examples

### Login
1. Navigate to `http://localhost:3000`
2. Enter any email and password
3. Click "Sign In"
4. You'll be redirected to the dashboard

### Browse Courses
1. View all courses in the grid layout
2. Use the search bar to filter courses
3. Cards respond to hover with subtle scale effect
4. Click any course to view details

### Manage Lessons
1. Click on a course to view its lessons
2. Click the checkbox to mark lessons as complete
3. See the progress bar update in real-time
4. Progress is calculated and displayed
5. Completion count updates as you check items off

### Toggle Dark Mode
1. Click the theme toggle button in the top-right corner
2. Your preference is saved and persists on reload

## Mock Data

The dashboard comes with 6 pre-loaded courses:

1. **React Fundamentals** - 6 lessons, 75% complete
2. **TypeScript Essentials** - 5 lessons, 60% complete
3. **Web Design with Tailwind** - 6 lessons, 85% complete
4. **Next.js 16 Advanced** - 5 lessons, 40% complete
5. **JavaScript ES6+** - 6 lessons, 90% complete
6. **API Development Patterns** - 5 lessons, 50% complete

Each course has:
- Title and description
- 5-6 lessons with varied completion states
- Progress percentage calculated from lessons
- Detailed lesson information

## Performance Optimizations

- Skeleton loading states instead of spinners
- Framer Motion for GPU-accelerated animations
- Responsive images and proper sizing
- CSS-in-JS with Tailwind for minimal CSS
- Lazy component loading where appropriate

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- Dark mode preference detection via `prefers-color-scheme`

## Deployment

### Deploy to Vercel

```bash
# Push to GitHub first
git push origin main

# Deploy from Vercel dashboard
# Select your GitHub repository
# Vercel will automatically detect Next.js and configure build settings
```

### Environment Variables

No environment variables required for the demo. The app uses mock data only.

## Future Enhancements

- Backend API integration for real data persistence
- User authentication with database
- Lesson content with videos and interactive challenges
- Course completion certificates
- Progress analytics and reports
- Student forum and community features
- Instructor dashboard
- Course creation and management tools

## React Native Component

The project includes a minimal `MobileScreen.native.tsx` component demonstrating how the dashboard would be structured in React Native. This shows:

- Header with search functionality
- Course cards with progress bars
- Lesson list with checkboxes
- Tab navigation structure
- Responsive styling patterns

To use this in a real React Native project, set up Expo or React Native CLI and import the component structure as reference.

## Troubleshooting

### Theme not persisting
- Ensure cookies are enabled in your browser
- Check that next-themes is properly initialized in layout.tsx

### Animations not smooth
- Update Framer Motion to latest version: `pnpm add framer-motion@latest`
- Check browser hardware acceleration is enabled

### Search not working
- Search is case-insensitive
- Searches both course title and description
- Clear the search field to show all courses

## License

Open source - feel free to use and modify as needed for your projects!

## Support

For issues or questions:
1. Check the component files for implementation details
2. Review the mock data structure in `/lib/mockData.ts`
3. Inspect Framer Motion animations in component files
4. Review Tailwind CSS configuration in `tailwind.config.ts`
