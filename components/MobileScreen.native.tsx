/**
 * React Native Component for LearnAI Mobile App
 * 
 * This is a minimal functional component demonstrating the structure
 * for a React Native version of the LearnAI dashboard. It shows how
 * the key screens and features would be organized on mobile.
 * 
 * Note: This is component structure only and not an executable React Native app.
 * To use this, you would need to set up a React Native project with Expo or RN CLI.
 */

import React, { useState } from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
} from 'react-native';

interface Lesson {
  id: string;
  title: string;
  completed: boolean;
}

interface Course {
  id: string;
  title: string;
  progress: number;
  lessons: Lesson[];
  description: string;
}

interface MobileScreenProps {
  course?: Course;
  onCoursePress?: (courseId: string) => void;
  onLessonToggle?: (courseId: string, lessonId: string) => void;
}

/**
 * Header Component with LearnAI branding and search
 */
const Header: React.FC = () => {
  return (
    <View style={styles.header}>
      <View style={styles.headerLeft}>
        <View style={styles.logo}>
          <Text style={styles.logoText}>AI</Text>
        </View>
        <Text style={styles.appTitle}>LearnAI</Text>
      </View>
      <TextInput
        style={styles.searchInput}
        placeholder="Search courses"
        placeholderTextColor="#999"
      />
    </View>
  );
};

/**
 * Course Card Component showing progress and details
 */
const CourseCard: React.FC<{ course: Course; onPress: () => void }> = ({
  course,
  onPress,
}) => {
  return (
    <TouchableOpacity style={styles.courseCard} onPress={onPress}>
      <Text style={styles.courseTitle}>{course.title}</Text>
      <Text style={styles.courseDescription}>{course.description}</Text>
      <View style={styles.progressContainer}>
        <Text style={styles.progressLabel}>Progress</Text>
        <Text style={styles.progressPercent}>{course.progress}%</Text>
      </View>
      <View style={styles.progressBar}>
        <View
          style={[
            styles.progressFill,
            { width: `${course.progress}%` },
          ]}
        />
      </View>
      <Text style={styles.lessonCount}>
        {course.lessons.filter((l) => l.completed).length} of{' '}
        {course.lessons.length} lessons completed
      </Text>
    </TouchableOpacity>
  );
};

/**
 * Lesson Item Component with checkbox toggle
 */
const LessonItem: React.FC<{
  lesson: Lesson;
  onToggle: () => void;
}> = ({ lesson, onToggle }) => {
  return (
    <TouchableOpacity style={styles.lessonItem} onPress={onToggle}>
      <View style={styles.checkbox}>
        {lesson.completed && <Text style={styles.checkmark}>✓</Text>}
      </View>
      <Text
        style={[
          styles.lessonTitle,
          lesson.completed && styles.completedLesson,
        ]}
      >
        {lesson.title}
      </Text>
      {lesson.completed && (
        <View style={styles.doneBadge}>
          <Text style={styles.doneText}>Done</Text>
        </View>
      )}
    </TouchableOpacity>
  );
};

/**
 * Main Dashboard Screen Component
 */
export const DashboardScreen: React.FC<MobileScreenProps> = ({
  onCoursePress,
}) => {
  const [courses] = useState<Course[]>([
    {
      id: '1',
      title: 'React Fundamentals',
      description: 'Learn React basics',
      progress: 75,
      lessons: [
        { id: '1-1', title: 'JSX and Components', completed: true },
        { id: '1-2', title: 'Props and State', completed: true },
        { id: '1-3', title: 'Hooks Basics', completed: false },
      ],
    },
  ]);

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <View style={styles.contentContainer}>
        <Text style={styles.sectionTitle}>Your Courses</Text>
        <FlatList
          data={courses}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <CourseCard
              course={item}
              onPress={() => onCoursePress?.(item.id)}
            />
          )}
          scrollEnabled={false}
        />
      </View>
    </SafeAreaView>
  );
};

/**
 * Course Detail Screen Component
 */
export const CourseDetailScreen: React.FC<MobileScreenProps> = ({
  course,
  onLessonToggle,
}) => {
  const [lessons, setLessons] = useState<Lesson[]>(
    course?.lessons || []
  );

  const handleToggle = (lessonId: string) => {
    setLessons((prev) =>
      prev.map((lesson) =>
        lesson.id === lessonId
          ? { ...lesson, completed: !lesson.completed }
          : lesson
      )
    );
    onLessonToggle?.(course?.id || '', lessonId);
  };

  if (!course) return null;

  const completedCount = lessons.filter((l) => l.completed).length;
  const progress = Math.round((completedCount / lessons.length) * 100);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.courseHeader}>
        <Text style={styles.courseTitle}>{course.title}</Text>
        <Text style={styles.courseDescription}>{course.description}</Text>
        <View style={styles.progressContainer}>
          <Text style={styles.progressLabel}>Progress</Text>
          <Text style={styles.progressPercent}>{progress}%</Text>
        </View>
        <View style={styles.progressBar}>
          <View style={[styles.progressFill, { width: `${progress}%` }]} />
        </View>
      </View>

      <View style={styles.contentContainer}>
        <Text style={styles.sectionTitle}>Lessons</Text>
        <FlatList
          data={lessons}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <LessonItem
              lesson={item}
              onToggle={() => handleToggle(item.id)}
            />
          )}
          scrollEnabled={true}
        />
      </View>
    </SafeAreaView>
  );
};

/**
 * Tab Navigation Component
 */
export const TabNavigation: React.FC = () => {
  return (
    <View style={styles.tabBar}>
      <TouchableOpacity style={styles.tab}>
        <Text style={styles.tabLabel}>Courses</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.tab}>
        <Text style={styles.tabLabel}>Downloads</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.tab}>
        <Text style={styles.tabLabel}>Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#e5e5e5',
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
    backgroundColor: '#6366f1',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  appTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#000',
    marginLeft: 8,
  },
  searchInput: {
    flex: 1,
    paddingHorizontal: 12,
    paddingVertical: 8,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    color: '#000',
  },
  contentContainer: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 16,
  },
  courseCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#e5e5e5',
  },
  courseTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
    marginBottom: 4,
  },
  courseDescription: {
    fontSize: 14,
    color: '#666',
    marginBottom: 12,
  },
  progressContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  progressLabel: {
    fontSize: 12,
    color: '#999',
    fontWeight: '500',
  },
  progressPercent: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#6366f1',
  },
  progressBar: {
    height: 8,
    backgroundColor: '#e5e5e5',
    borderRadius: 4,
    overflow: 'hidden',
    marginBottom: 8,
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#6366f1',
  },
  lessonCount: {
    fontSize: 12,
    color: '#999',
  },
  courseHeader: {
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#e5e5e5',
  },
  lessonItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  checkbox: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#ddd',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  checkmark: {
    color: '#6366f1',
    fontSize: 16,
    fontWeight: 'bold',
  },
  lessonTitle: {
    flex: 1,
    fontSize: 16,
    color: '#000',
    fontWeight: '500',
  },
  completedLesson: {
    opacity: 0.6,
    textDecorationLine: 'line-through',
  },
  doneBadge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    backgroundColor: '#e8e8ff',
    borderRadius: 12,
  },
  doneText: {
    fontSize: 12,
    color: '#6366f1',
    fontWeight: '600',
  },
  tabBar: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#e5e5e5',
  },
  tab: {
    flex: 1,
    paddingVertical: 12,
    alignItems: 'center',
  },
  tabLabel: {
    fontSize: 14,
    color: '#999',
    fontWeight: '500',
  },
});
