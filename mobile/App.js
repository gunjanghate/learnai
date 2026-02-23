import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
} from 'react-native';

// Minimal data - AI focused, matching web dashboard
const initialCourses = [
  {
    id: '1',
    title: 'Intro to AI & ML',
    description:
      'Get a hands-on, beginner-friendly overview of artificial intelligence and machine learning fundamentals.',
    level: 'Beginner',
    instructor: 'Dr. Ananya Mehta',
    duration: '5hrs',
    lessonCount: 36,
    progress: 0,
    lessons: [
      { id: '1-1', title: 'What is AI?', completed: false },
      { id: '1-2', title: 'ML vs. Deep Learning', completed: false },
      { id: '1-3', title: 'Datasets & Features', completed: false },
    ],
  },
  {
    id: '2',
    title: 'Deep Learning with PyTorch',
    description:
      'Build, train and evaluate deep neural networks using PyTorch tensors, autograd and modern training tricks.',
    level: 'Intermediate',
    instructor: 'Marcus Liu',
    duration: '8hrs',
    lessonCount: 44,
    progress: 0,
    lessons: [
      { id: '2-1', title: 'Tensors & Autograd', completed: false },
      { id: '2-2', title: 'Your First Network', completed: false },
      { id: '2-3', title: 'Training Loops & Schedulers', completed: false },
    ],
  },
  {
    id: '3',
    title: 'Applied Computer Vision',
    description:
      'Ship real-world computer vision projects with CNNs, transfer learning and production-ready pipelines.',
    level: 'Intermediate',
    instructor: 'Sara Kovács',
    duration: '9hrs',
    lessonCount: 40,
    progress: 0,
    lessons: [
      { id: '3-1', title: 'Intro to CV', completed: false },
      { id: '3-2', title: 'Preparing Image Data', completed: false },
      { id: '3-3', title: 'Deploying CV Models', completed: false },
    ],
  },
];

const Header = ({ theme, onToggleTheme }) => (
  <View style={styles.headerWrapper}>
    <View style={[styles.header, theme === 'dark' && styles.headerDark]}>
      {/* Left: Logo + nav links */}
      <View style={styles.headerLeft}>
        {/* <View style={styles.logo}>
          <Text style={styles.logoText}>AI</Text>
        </View> */}
        <View>
          <Text style={[styles.appTitle, theme === 'dark' && styles.appTitleDark]}>LearnAI®</Text>
          <View style={styles.navRow}>
            <Text
              style={[
                styles.navLink,
                styles.navLinkActive,
                theme === 'dark' && styles.navLinkActiveDark,
              ]}
            >
              Dashboard
            </Text>
            <Text style={[styles.navLink, theme === 'dark' && styles.navLinkDark]}>Courses</Text>
          </View>
        </View>
      </View>

      {/* Right: mode pill + user + logout */}
      <View style={styles.headerRight}>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={onToggleTheme}
          style={[styles.modePill, theme === 'dark' && styles.modePillDark]}
        >
          <Text style={[styles.modePillText, theme === 'dark' && styles.modePillTextDark]}>
            {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
          </Text>
        </TouchableOpacity>
        <Text style={[styles.loggedInAs, theme === 'dark' && styles.loggedInAsDark]}>
          Logged in as
        </Text>
        <Text style={[styles.userName, theme === 'dark' && styles.userNameDark]}>Demo Learner</Text>
        <View style={[styles.logoutPill, theme === 'dark' && styles.logoutPillDark]}>
          <Text style={[styles.logoutText, theme === 'dark' && styles.logoutTextDark]}>Logout</Text>
        </View>
      </View>
    </View>
  </View>
);

const CourseCard = ({ course, theme, onPress }) => (
  <TouchableOpacity
    style={[styles.courseCard, theme === 'dark' && styles.courseCardDark]}
    onPress={onPress}
    activeOpacity={0.9}
  >
    {/* Thumbnail / gradient top like web card */}
    <View style={styles.cardThumbnail}>
      <View style={styles.cardThumbnailOverlay} />
      <View style={styles.levelBadge}>
        <Text style={styles.levelBadgeText}>{course.level}</Text>
      </View>
    </View>

    {/* Content area */}
    <View style={styles.cardBody}>
      <Text style={[styles.courseTitle, theme === 'dark' && styles.courseTitleDark]}>
        {course.title}
      </Text>
      <Text
        style={[styles.courseDescription, theme === 'dark' && styles.courseDescriptionDark]}
        numberOfLines={2}
      >
        {course.description}
      </Text>

      <View style={styles.metaRow}>
        <Text style={[styles.metaText, theme === 'dark' && styles.metaTextDark]}>
          {course.duration}
        </Text>
        <Text style={[styles.metaDot, theme === 'dark' && styles.metaDotDark]}>•</Text>
        <Text style={[styles.metaText, theme === 'dark' && styles.metaTextDark]}>
          {course.lessonCount} lessons
        </Text>
      </View>

      <View style={styles.progressContainer}>
        <Text style={[styles.progressLabel, theme === 'dark' && styles.progressLabelDark]}>
          Progress
        </Text>
        <Text style={styles.progressPercent}>{course.progress}%</Text>
      </View>
      <View style={[styles.progressBar, theme === 'dark' && styles.progressBarDark]}>
        <View style={[styles.progressFill, theme === 'dark' && styles.progressFillDark, { width: `${course.progress}%` }]} />
      </View>
      <View style={styles.cardFooter}>
        <View style={styles.instructorAvatar} />
        <Text style={[styles.instructorText, theme === 'dark' && styles.instructorTextDark]}>
          {course.instructor}
        </Text>
        <View style={{ flex: 1 }} />
        <View style={styles.primaryPill}>
          <Text style={styles.primaryPillText}>Start learning</Text>
        </View>
      </View>
    </View>
  </TouchableOpacity>
);

// Dashboard-style screen
function DashboardScreen() {
  const [courses] = useState(initialCourses);
  const [theme, setTheme] = useState('light');
  const isDark = theme === 'dark';
  const primaryCourse = courses[0];

  const weeklyDays = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];

  return (
    <SafeAreaView style={[styles.container, isDark && styles.containerDark]}>
      <Header theme={theme} onToggleTheme={() => setTheme(isDark ? 'light' : 'dark')} />
      <View style={[styles.searchRow, isDark && styles.searchRowDark]}>
        <TextInput
          style={[styles.searchInput, isDark && styles.searchInputDark]}
          placeholder="Search courses..."
          placeholderTextColor="#9ca3af"
        />
      </View>
      <View style={styles.contentContainer}>
        {/* Greeting hero */}
        <View style={[styles.heroCard, isDark && styles.heroCardDark]}>
          <Text style={[styles.heroLabel, isDark && styles.heroLabelDark]}>LEARNAI DASHBOARD</Text>
          <Text style={[styles.heroTitle, isDark && styles.heroTitleDark]}>Welcome back, Demo Learner</Text>
          <Text style={[styles.heroSubtitle, isDark && styles.heroSubtitleDark]}>
            Pick up where you left off, track your progress across AI courses, and discover new topics to explore.
          </Text>
          {primaryCourse && (
            <View style={styles.heroActionsRow}>
              <View style={[styles.heroResumePill, isDark && styles.heroResumePillDark]}>
                <Text style={styles.heroResumeLabel}>Resume</Text>
                <Text style={styles.heroResumeTitle}>{primaryCourse.title}</Text>
                <Text style={styles.heroResumeMeta}>0% complete</Text>
              </View>
            </View>
          )}
        </View>

        {/* Weekly streak + thought of the day */}
        <View style={styles.weekAndThoughtRow}>
          <View style={[styles.weekCard, isDark && styles.weekCardDark]}>
            <View style={styles.weekHeaderRow}>
              <View>
                <Text style={[styles.weekLabel, isDark && styles.weekLabelDark]}>Weekly streak</Text>
                <Text style={[styles.weekSubtitle, isDark && styles.weekSubtitleDark]}>
                  Stay consistent this week
                </Text>
              </View>
              <View style={styles.weekStreakMeta}>
                <Text style={[styles.weekStreakLabel, isDark && styles.weekStreakLabelDark]}>Current streak</Text>
                <Text style={styles.weekStreakValue}>0 days</Text>
              </View>
            </View>
            <View style={styles.weekDaysRow}>
              {weeklyDays.map((day) => (
                <View key={day} style={styles.weekDayItem}>
                  <View style={[styles.weekDayCircle, isDark && styles.weekDayCircleDark]}>
                    <Text style={[styles.weekDayText, isDark && styles.weekDayTextDark]}>{day}</Text>
                  </View>
                  <Text style={[styles.weekDayLabel, isDark && styles.weekDayLabelDark]}>{day}</Text>
                </View>
              ))}
            </View>
          </View>

          <View style={[styles.thoughtCard, isDark && styles.thoughtCardDark]}>
            <Text style={[styles.thoughtLabel, isDark && styles.thoughtLabelDark]}>THOUGHT OF THE DAY</Text>
            <Text style={[styles.thoughtQuote, isDark && styles.thoughtQuoteDark]}>
              "Consistency beats intensity. 30 focused minutes today moves you further than 3 hours someday."
            </Text>
            <Text style={[styles.thoughtHint, isDark && styles.thoughtHintDark]}>
              Keep your streak by completing at least one AI lesson today.
            </Text>
          </View>
        </View>

        <Text style={[styles.sectionTitle, isDark && styles.sectionTitleDark]}>Your AI courses</Text>
        <FlatList
          data={courses}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <CourseCard course={item} theme={theme} onPress={() => { }} />
          )}
        />
      </View>
      <StatusBar style={isDark ? 'light' : 'dark'} />
    </SafeAreaView>
  );
}

export default function App() {
  return <DashboardScreen />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
  containerDark: {
    backgroundColor: '#020617',
  },
  headerWrapper: {
    marginTop: 40,
    backgroundColor: '#f9fafb',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#e5e7eb',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 14,
    backgroundColor: '#f9fafb',
  },
  headerDark: {
    backgroundColor: '#020617',
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 12,
  },
  logo: {
    width: 32,
    height: 32,
    borderRadius: 8,
    backgroundColor: '#10b981',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
  },
  logoText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  appTitle: {
    fontSize: 18,
    fontWeight: '900',
    color: '#111827',
  },
  appTitleDark: {
    color: '#f9fafb',
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  navRow: {
    flexDirection: 'row',
    marginTop: 4,
  },
  navLink: {
    fontSize: 13,
    color: '#6b7280',
    marginRight: 16,
  },
  navLinkActive: {
    color: '#111827',
    fontWeight: '600',
  },
  navLinkDark: {
    color: '#9ca3af',
  },
  navLinkActiveDark: {
    color: '#f9fafb',
  },
  modePill: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 999,
    backgroundColor: '#111827',
    marginRight: 10,
  },
  modePillDark: {
    backgroundColor: '#f9fafb',
  },
  modePillText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#f9fafb',
  },
  modePillTextDark: {
    color: '#020617',
  },
  loggedInAs: {
    fontSize: 11,
    color: '#6b7280',
    marginRight: 4,
  },
  userName: {
    fontSize: 12,
    color: '#111827',
    fontWeight: '600',
    marginRight: 8,
  },
  loggedInAsDark: {
    color: '#9ca3af',
  },
  userNameDark: {
    color: '#f9fafb',
  },
  logoutPill: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 999,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#d1d5db',
    backgroundColor: '#ffffff',
  },
  logoutText: {
    fontSize: 11,
    color: '#6b7280',
    fontWeight: '500',
  },
  logoutPillDark: {
    backgroundColor: '#020617',
    borderColor: '#4b5563',
  },
  logoutTextDark: {
    color: '#e5e7eb',
  },
  searchRow: {
    paddingHorizontal: 16,
    paddingTop: 10,
    paddingBottom: 8,
    backgroundColor: '#ffffff',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#e5e7eb',
  },
  searchRowDark: {
    backgroundColor: '#020617',
    borderBottomColor: '#1f2937',
  },
  searchInput: {
    width: '100%',
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderRadius: 10,
    backgroundColor: '#f3f4f6',
    fontSize: 14,
    color: '#111827',
  },
  searchInputDark: {
    backgroundColor: '#020617',
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#374151',
    color: '#e5e7eb',
  },
  contentContainer: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  heroCard: {
    borderRadius: 16,
    paddingHorizontal: 16,
    paddingVertical: 16,
    backgroundColor: '#ecfdf5',
    marginBottom: 16,
  },
  heroCardDark: {
    backgroundColor: '#022c22',
  },
  heroLabel: {
    fontSize: 11,
    letterSpacing: 2,
    textTransform: 'uppercase',
    color: '#10b981',
    marginBottom: 4,
  },
  heroLabelDark: {
    color: '#6ee7b7',
  },
  heroTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#022c22',
    marginBottom: 4,
  },
  heroTitleDark: {
    color: '#ecfdf5',
  },
  heroSubtitle: {
    fontSize: 13,
    color: '#047857',
    marginBottom: 12,
  },
  heroSubtitleDark: {
    color: '#a7f3d0',
  },
  heroActionsRow: {
    flexDirection: 'row',
    marginTop: 4,
  },
  heroResumePill: {
    flex: 1,
    borderRadius: 999,
    backgroundColor: '#10b981',
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  heroResumePillDark: {
    backgroundColor: '#22c55e',
  },
  heroResumeLabel: {
    fontSize: 10,
    textTransform: 'uppercase',
    letterSpacing: 1,
    color: '#bbf7d0',
  },
  heroResumeTitle: {
    fontSize: 13,
    fontWeight: '700',
    color: '#ecfdf5',
  },
  heroResumeMeta: {
    fontSize: 11,
    color: '#d1fae5',
  },
  weekAndThoughtRow: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  weekCard: {
    flex: 1,
    borderRadius: 16,
    backgroundColor: '#ffffff',
    padding: 12,
    marginRight: 8,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#e5e7eb',
  },
  weekCardDark: {
    backgroundColor: '#020617',
    borderColor: '#111827',
  },
  weekHeaderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  weekLabel: {
    fontSize: 11,
    letterSpacing: 2,
    textTransform: 'uppercase',
    color: '#6b7280',
  },
  weekLabelDark: {
    color: '#9ca3af',
  },
  weekSubtitle: {
    fontSize: 12,
    color: '#6b7280',
  },
  weekSubtitleDark: {
    color: '#9ca3af',
  },
  weekStreakMeta: {
    alignItems: 'flex-end',
  },
  weekStreakLabel: {
    fontSize: 10,
    color: '#6b7280',
  },
  weekStreakLabelDark: {
    color: '#9ca3af',
  },
  weekStreakValue: {
    fontSize: 12,
    fontWeight: '600',
    color: '#10b981',
  },
  weekDaysRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 6,
  },
  weekDayItem: {
    alignItems: 'center',
  },
  weekDayCircle: {
    width: 24,
    height: 24,
    borderRadius: 999,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#e5e7eb',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f9fafb',
  },
  weekDayCircleDark: {
    borderColor: '#1f2937',
    backgroundColor: '#020617',
  },
  weekDayText: {
    fontSize: 11,
    color: '#6b7280',
  },
  weekDayTextDark: {
    color: '#e5e7eb',
  },
  weekDayLabel: {
    fontSize: 10,
    color: '#9ca3af',
    marginTop: 2,
  },
  weekDayLabelDark: {
    color: '#6b7280',
  },
  thoughtCard: {
    flex: 1,
    borderRadius: 16,
    backgroundColor: '#ecfdf5',
    padding: 12,
    marginLeft: 8,
  },
  thoughtCardDark: {
    backgroundColor: '#022c22',
  },
  thoughtLabel: {
    fontSize: 11,
    letterSpacing: 2,
    textTransform: 'uppercase',
    color: '#10b981',
    marginBottom: 4,
  },
  thoughtLabelDark: {
    color: '#6ee7b7',
  },
  thoughtQuote: {
    fontSize: 13,
    color: '#022c22',
    marginBottom: 6,
  },
  thoughtQuoteDark: {
    color: '#ecfdf5',
  },
  thoughtHint: {
    fontSize: 11,
    color: '#047857',
  },
  thoughtHintDark: {
    color: '#a7f3d0',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 12,
    color: '#111827',
  },
  sectionTitleDark: {
    color: '#f9fafb',
  },
  courseCard: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    marginBottom: 16,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
    elevation: 3,
  },
  courseCardDark: {
    backgroundColor: '#020617',
  },
  cardThumbnail: {
    height: 120,
    backgroundColor: '#4f46e5',
    overflow: 'hidden',
  },
  cardThumbnailOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(15,118,110,0.65)',
  },
  levelBadge: {
    position: 'absolute',
    right: 12,
    top: 12,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 999,
    borderWidth: 1,
    borderColor: 'rgba(74,222,128,0.4)',
    backgroundColor: 'rgba(22,163,74,0.2)',
  },
  levelBadgeText: {
    fontSize: 11,
    fontWeight: '600',
    color: '#bbf7d0',
  },
  cardBody: {
    paddingHorizontal: 16,
    paddingVertical: 14,
  },
  courseTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 4,
    color: '#111827',
  },
  courseTitleDark: {
    color: '#f9fafb',
  },
  courseDescription: {
    fontSize: 13,
    color: '#6b7280',
    marginBottom: 12,
  },
  courseDescriptionDark: {
    color: '#9ca3af',
  },
  progressContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 4,
  },
  progressLabel: {
    fontSize: 12,
    color: '#6b7280',
  },
  progressPercent: {
    fontSize: 12,
    fontWeight: '600',
    color: '#10b981',
  },
  progressBar: {
    height: 6,
    backgroundColor: '#e5e7eb',
    borderRadius: 999,
    overflow: 'hidden',
    marginBottom: 8,
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#10b981',
  },
  lessonCount: {
    fontSize: 12,
    color: '#6b7280',
  },
  metaRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  metaText: {
    fontSize: 12,
    color: '#6b7280',
  },
  metaDot: {
    fontSize: 12,
    color: '#9ca3af',
    marginHorizontal: 4,
  },
  metaTextDark: {
    color: '#9ca3af',
  },
  metaDotDark: {
    color: '#6b7280',
  },
  cardFooter: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    paddingTop: 10,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: '#e5e7eb',
  },
  instructorAvatar: {
    width: 24,
    height: 24,
    borderRadius: 999,
    backgroundColor: '#e5e7eb',
    marginRight: 8,
  },
  instructorText: {
    fontSize: 12,
    color: '#6b7280',
  },
  primaryPill: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 999,
    backgroundColor: '#10b981',
  },
  primaryPillText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#ecfdf5',
  },
  progressLabelDark: {
    color: '#9ca3af',
  },
  progressBarDark: {
    backgroundColor: '#1f2937',
  },
  progressFillDark: {
    backgroundColor: '#22c55e',
  },
  instructorTextDark: {
    color: '#9ca3af',
  },
});
