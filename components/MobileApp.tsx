/**
 * React Native Mobile App Example
 * This is a demonstration of how the LearnAI dashboard would look as a React Native mobile app.
 * This file is NOT executable as a React Native component but serves as documentation and reference.
 * To use in a real React Native project, you would:
 * 1. Replace React imports with React Native equivalents
 * 2. Use React Native components (View, ScrollView, FlatList, etc.)
 * 3. Use React Native Animated API or Reanimated for animations
 * 4. Replace Tailwind with StyleSheet or NativeWind
 */

import React, { useState } from 'react';

// Example demonstrating the structure and layout patterns
export const MobileAppExample = () => {
  const [courses, setCourses] = useState([
    {
      id: '1',
      title: 'Blockchain Basics',
      description: 'Master blockchain fundamentals',
      progress: 60,
      level: 'Beginner',
      instructor: 'Ciara Nightingale',
    },
    {
      id: '2',
      title: 'Solidity Development',
      description: 'Learn to build smart contracts',
      progress: 45,
      level: 'Intermediate',
      instructor: 'Patrick Collins',
    },
    {
      id: '3',
      title: 'Advanced Foundry',
      description: 'Master web3 development',
      progress: 80,
      level: 'Advanced',
      instructor: 'Patrick Collins',
    },
  ]);

  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState<'courses' | 'profile' | 'settings'>('courses');

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Beginner':
        return '#22C55E';
      case 'Intermediate':
        return '#3B82F6';
      case 'Advanced':
        return '#A855F7';
      default:
        return '#6B7280';
    }
  };

  return {
    screenLayout: `
    MOBILE SCREEN STRUCTURE
    
    ┌─────────────────────────────────────┐
    │  Header                             │
    │  LearnAI Dashboard                  │
    │  ${new Date().toLocaleDateString()}                  │
    └─────────────────────────────────────┘
    
    ┌─────────────────────────────────────┐
    │ Search Bar                          │
    │ ┌─────────────────────────────────┐ │
    │ │ 🔍 Search courses...            │ │
    │ └─────────────────────────────────┘ │
    └─────────────────────────────────────┘
    
    ┌─────────────────────────────────────┐
    │ Stats Cards (Horizontal Scroll)     │
    │ ┌─────────────┐ ┌─────────────┐    │
    │ │ Progress    │ │ Active      │    │
    │ │ 67%         │ │ 6 courses   │    │
    │ └─────────────┘ └─────────────┘    │
    └─────────────────────────────────────┘
    
    ┌─────────────────────────────────────┐
    │ Course List (FlatList)              │
    │                                     │
    │ ┌─────────────────────────────────┐ │
    │ │ [GRADIENT]    Blockchain Basics │ │
    │ │               60% progress      │ │
    │ │ 🎓 Beginner   Start →           │ │
    │ └─────────────────────────────────┘ │
    │                                     │
    │ ┌─────────────────────────────────┐ │
    │ │ [GRADIENT]    Solidity Dev      │ │
    │ │               45% progress      │ │
    │ │ 🎓 Intermediate Start →         │ │
    │ └─────────────────────────────────┘ │
    │                                     │
    │ ┌─────────────────────────────────┐ │
    │ │ [GRADIENT]    Advanced Foundry  │ │
    │ │               80% progress      │ │
    │ │ 🎓 Advanced   Start →           │ │
    │ └─────────────────────────────────┘ │
    └─────────────────────────────────────┘
    
    ┌─────────────────────────────────────┐
    │ Bottom Tab Navigation               │
    │ [Courses] [Profile] [Settings]      │
    └─────────────────────────────────────┘
    `,

    // Example React Native pseudo-code for the component structure
    pseudoCode: `
    // App.tsx
    import React, { useState } from 'react';
    import {
      View,
      ScrollView,
      FlatList,
      TextInput,
      TouchableOpacity,
      Text,
      StyleSheet,
      SafeAreaView,
    } from 'react-native';
    import { LinearGradient } from 'expo-linear-gradient';
    import Animated, {
      FadeInDown,
      FadeInUp,
    } from 'react-native-reanimated';

    const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: '#0B1220',
      },
      header: {
        paddingHorizontal: 16,
        paddingTop: 16,
        paddingBottom: 12,
      },
      headerTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#ffffff',
      },
      searchBar: {
        backgroundColor: '#1F2937',
        borderRadius: 8,
        paddingHorizontal: 12,
        paddingVertical: 10,
        marginHorizontal: 16,
        marginBottom: 16,
        color: '#ffffff',
        borderWidth: 1,
        borderColor: 'rgba(255,255,255,0.1)',
      },
      courseCard: {
        backgroundColor: '#111827',
        borderRadius: 12,
        borderWidth: 1,
        borderColor: 'rgba(255,255,255,0.06)',
        marginHorizontal: 16,
        marginBottom: 12,
        overflow: 'hidden',
      },
      courseImage: {
        height: 150,
        justifyContent: 'flex-end',
      },
      courseContent: {
        padding: 16,
      },
      courseTitle: {
        fontSize: 18,
        fontWeight: '600',
        color: '#ffffff',
        marginBottom: 8,
      },
      courseDescription: {
        fontSize: 13,
        color: '#9CA3AF',
        marginBottom: 12,
      },
      progressBar: {
        height: 6,
        backgroundColor: '#374151',
        borderRadius: 3,
        marginBottom: 8,
        overflow: 'hidden',
      },
      progressFill: {
        height: '100%',
        backgroundColor: '#22C55E',
        borderRadius: 3,
      },
      courseMeta: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: 12,
        borderTopWidth: 1,
        borderTopColor: 'rgba(255,255,255,0.05)',
      },
      levelBadge: {
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 12,
        backgroundColor: 'rgba(34,197,94,0.2)',
      },
      levelText: {
        fontSize: 12,
        fontWeight: '500',
        color: '#86EFAC',
      },
      ctaButton: {
        backgroundColor: '#22C55E',
        paddingHorizontal: 12,
        paddingVertical: 8,
        borderRadius: 6,
      },
      ctaButtonText: {
        color: '#000000',
        fontSize: 12,
        fontWeight: '600',
      },
      bottomNav: {
        flexDirection: 'row',
        backgroundColor: '#111827',
        borderTopWidth: 1,
        borderTopColor: 'rgba(255,255,255,0.06)',
        paddingBottom: 20,
      },
      navItem: {
        flex: 1,
        alignItems: 'center',
        paddingTop: 12,
      },
      navLabel: {
        fontSize: 12,
        color: '#6B7280',
        marginTop: 4,
      },
      navLabelActive: {
        color: '#22C55E',
      },
    });

    export const MobileApp = () => {
      const [searchQuery, setSearchQuery] = useState('');
      const [activeTab, setActiveTab] = useState('courses');

      const courses = [
        {
          id: '1',
          title: 'Blockchain Basics',
          description: 'Master blockchain fundamentals and concepts',
          progress: 60,
          level: 'Beginner',
          instructor: 'Ciara Nightingale',
        },
        {
          id: '2',
          title: 'Solidity Development',
          description: 'Learn to build smart contracts with Solidity',
          progress: 45,
          level: 'Intermediate',
          instructor: 'Patrick Collins',
        },
        {
          id: '3',
          title: 'Advanced Foundry',
          description: 'Master web3 development with Foundry framework',
          progress: 80,
          level: 'Advanced',
          instructor: 'Patrick Collins',
        },
      ];

      return (
        <SafeAreaView style={styles.container}>
          {/* Header */}
          <Animated.View
            entering={FadeInDown}
            style={styles.header}
          >
            <Text style={styles.headerTitle}>Courses</Text>
          </Animated.View>

          {/* Search Bar */}
          <TextInput
            style={styles.searchBar}
            placeholder="Search courses..."
            placeholderTextColor="#6B7280"
            value={searchQuery}
            onChangeText={setSearchQuery}
          />

          {/* Course List */}
          <FlatList
            data={courses}
            keyExtractor={(item) => item.id}
            renderItem={({ item, index }) => (
              <Animated.View
                entering={FadeInUp.delay(index * 100)}
                style={styles.courseCard}
              >
                {/* Gradient Thumbnail */}
                <LinearGradient
                  colors={['#9333EA', '#3B82F6']}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 1 }}
                  style={styles.courseImage}
                >
                  <View style={{
                    backgroundColor: 'rgba(0,0,0,0.3)',
                    padding: 12,
                    alignSelf: 'flex-end',
                  }}>
                    <Text style={{
                      backgroundColor: 'rgba(34,197,94,0.2)',
                      color: '#86EFAC',
                      paddingHorizontal: 8,
                      paddingVertical: 4,
                      borderRadius: 4,
                      fontSize: 11,
                      fontWeight: '600',
                    }}>
                      {item.level}
                    </Text>
                  </View>
                </LinearGradient>

                {/* Course Info */}
                <View style={styles.courseContent}>
                  <Text style={styles.courseTitle}>{item.title}</Text>
                  <Text style={styles.courseDescription} numberOfLines={2}>
                    {item.description}
                  </Text>

                  {/* Progress Bar */}
                  <View style={styles.progressBar}>
                    <View
                      style={[
                        styles.progressFill,
                        { width: \`\${item.progress}%\` },
                      ]}
                    />
                  </View>
                  <Text style={{ fontSize: 12, color: '#9CA3AF' }}>
                    {item.progress}% Complete
                  </Text>

                  {/* Metadata & CTA */}
                  <View style={styles.courseMeta}>
                    <Text style={{ fontSize: 12, color: '#6B7280' }}>
                      👤 {item.instructor}
                    </Text>
                    <TouchableOpacity style={styles.ctaButton}>
                      <Text style={styles.ctaButtonText}>Start</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </Animated.View>
            )}
            scrollEnabled={true}
            contentContainerStyle={{ paddingBottom: 80 }}
          />

          {/* Bottom Tab Navigation */}
          <View style={styles.bottomNav}>
            {['Courses', 'Profile', 'Settings'].map((tab) => (
              <TouchableOpacity
                key={tab}
                style={styles.navItem}
                onPress={() => setActiveTab(tab)}
              >
                <Text style={{
                  fontSize: 20,
                  color: activeTab === tab ? '#22C55E' : '#6B7280',
                }}>
                  {tab === 'Courses' ? '📚' : tab === 'Profile' ? '👤' : '⚙️'}
                </Text>
                <Text style={[
                  styles.navLabel,
                  activeTab === tab && styles.navLabelActive,
                ]}>
                  {tab}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </SafeAreaView>
      );
    };
    `,

    description: 'This React Native example demonstrates the structure and layout of the LearnAI mobile app. To use this in production, install React Native and the required dependencies (react-native-reanimated, expo-linear-gradient) and convert the pseudo-code to actual React Native components.',
  };
};

export default MobileAppExample;
