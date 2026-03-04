import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { styles } from './styles';
import { initialCourses } from './utils/data';


const Header = ({ theme, onToggleTheme, activeTab, onTabChange }) => (
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
            <TouchableOpacity onPress={() => onTabChange('dashboard')} activeOpacity={0.7}>
              <Text
                style={[
                  styles.navLink,
                  activeTab === 'dashboard' && styles.navLinkActive,
                  theme === 'dark' && styles.navLinkDark,
                  theme === 'dark' && activeTab === 'dashboard' && styles.navLinkActiveDark,
                ]}
              >
                Dashboard
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => onTabChange('courses')} activeOpacity={0.7}>
              <Text
                style={[
                  styles.navLink,
                  theme === 'dark' && styles.navLinkDark,
                  activeTab === 'courses' && styles.navLinkActive,
                  theme === 'dark' && activeTab === 'courses' && styles.navLinkActiveDark,
                ]}
              >
                Courses
              </Text>
            </TouchableOpacity>
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
        {/* <Text style={[styles.loggedInAs, theme === 'dark' && styles.loggedInAsDark]}>
          Logged in as
        </Text>
        <Text style={[styles.userName, theme === 'dark' && styles.userNameDark]}>Demo Learner</Text>
        <View style={[styles.logoutPill, theme === 'dark' && styles.logoutPillDark]}>
          <Text style={[styles.logoutText, theme === 'dark' && styles.logoutTextDark]}>Logout</Text>
        </View> */}
      </View>
    </View>
  </View>
);

const CourseCard = ({ course, theme, onPress, onStartLearning, onUnenroll }) => (
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
        <TouchableOpacity
          style={styles.primaryPill}
          activeOpacity={0.85}
          onPress={() => {
            if (course.started && onUnenroll) {
              onUnenroll(course.id);
            } else if (!course.started && onStartLearning) {
              onStartLearning(course.id);
            }
          }}
        >
          <Text style={styles.primaryPillText}>
            {course.started ? (onUnenroll ? 'Unenroll' : 'Continue') : 'Start learning'}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  </TouchableOpacity>
);

// Dashboard-style screen
function DashboardScreen() {
  const [courses, setCourses] = useState(
    initialCourses.map((course) => ({ ...course, started: false }))
  );
  const [theme, setTheme] = useState('light');
  const [activeTab, setActiveTab] = useState('dashboard');
  const [searchText, setSearchText] = useState('');
  const [debouncedSearch, setDebouncedSearch] = useState('');
  const isDark = theme === 'dark';
  const primaryCourse = courses[0];
  const startedCourses = courses.filter((course) => course.started);

  const weeklyDays = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDebouncedSearch(searchText.trim());
    }, 300);

    return () => clearTimeout(timeoutId);
  }, [searchText]);

  const filteredCourses = debouncedSearch
    ? courses.filter((course) => {
      const query = debouncedSearch.toLowerCase();
      return (
        course.title.toLowerCase().includes(query) ||
        course.description.toLowerCase().includes(query) ||
        course.level.toLowerCase().includes(query) ||
        course.instructor.toLowerCase().includes(query)
      );
    })
    : courses;

  const handleStartLearning = (courseId) => {
    setCourses((prevCourses) =>
      prevCourses.map((course) =>
        course.id === courseId ? { ...course, started: true } : course
      )
    );
  };

  const handleUnenroll = (courseId) => {
    setCourses((prevCourses) =>
      prevCourses.map((course) =>
        course.id === courseId ? { ...course, started: false } : course
      )
    );
  };

  return (
    <SafeAreaView style={[styles.container, isDark && styles.containerDark]}>
      <Header
        theme={theme}
        onToggleTheme={() => setTheme(isDark ? 'light' : 'dark')}
        activeTab={activeTab}
        onTabChange={setActiveTab}
      />
      {activeTab === 'courses' ? (
        <View style={[styles.searchRow, isDark && styles.searchRowDark]}>
          <TextInput
            style={[styles.searchInput, isDark && styles.searchInputDark]}
            placeholder="Search courses..."
            placeholderTextColor="#9ca3af"
            value={searchText}
            onChangeText={setSearchText}
            returnKeyType="search"
          />
        </View>
      ) : (
      <View />
      )}

      <ScrollView style={styles.contentContainer} showsVerticalScrollIndicator={false}>
        {activeTab === 'dashboard' ? (
          <>
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
                    <Text style={[styles.weekStreakLabel, isDark && styles.weekStreakLabelDark]}>Current streak -</Text>
                    <Text style={styles.weekStreakValue}>0 days</Text>
                  </View>
                </View>
                <View style={styles.weekDaysRow}>
                  {weeklyDays.map((day, index) => (
                    <View key={`${day}-${index}`} style={styles.weekDayItem}>
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
              data={startedCourses}
              keyExtractor={(item) => item.id}
              scrollEnabled={false}
              ListEmptyComponent={
                <Text style={styles.emptyStateText}>
                  You haven&apos;t enrolled in any courses yet. Switch to the Courses tab and tap "Start learning" to add one here.
                </Text>
              }
              renderItem={({ item }) => (
                <CourseCard
                  course={item}
                  theme={theme}
                  onPress={() => { }}
                  onUnenroll={handleUnenroll}
                />
              )}
            />
          </>
        ) : (
          <>
            <Text style={[styles.sectionTitle, isDark && styles.sectionTitleDark]}>All AI courses</Text>
            <FlatList
              data={filteredCourses}
              keyExtractor={(item) => item.id}
              scrollEnabled={false}
              ListEmptyComponent={
                <Text style={styles.emptyStateText}>No courses match your search.</Text>
              }
              renderItem={({ item }) => (
                <CourseCard
                  course={item}
                  theme={theme}
                  onPress={() => { }}
                  onStartLearning={handleStartLearning}
                />
              )}
            />
          </>
        )}
      </ScrollView>
      <StatusBar style={isDark ? 'light' : 'dark'} />
    </SafeAreaView>
  );
}

export default function App() {
  return (
    <SafeAreaProvider>
      <DashboardScreen />
    </SafeAreaProvider>
  );
}
