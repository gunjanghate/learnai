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

// Minimal data types
const initialCourses = [
  {
    id: '1',
    title: 'Blockchain Basics',
    description:
      "Master blockchain's core concepts: transactions, wallets, consensus, scalability, and more.",
    level: 'Beginner',
    instructor: 'Ciara Nightingale',
    duration: '6hrs',
    lessonCount: 58,
    progress: 12,
    lessons: [
      { id: '1-1', title: 'Introduction to Blockchain', completed: true },
      { id: '1-2', title: 'Understanding Transactions', completed: false },
      { id: '1-3', title: 'Wallet Fundamentals', completed: false },
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
        <Text style={[styles.sectionTitle, isDark && styles.sectionTitleDark]}>Your courses</Text>
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
