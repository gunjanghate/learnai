import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { courses } from '@/lib/mockData';

interface CourseLayoutProps {
    children: ReactNode;
}

interface CourseMetadataParams {
    params: Promise<{
        id: string | string[];
    }>;
}

export async function generateMetadata({ params }: CourseMetadataParams): Promise<Metadata> {
    const { id: rawId } = await params;
    const id = Array.isArray(rawId) ? rawId[0] : rawId;
    console.log('Generating metadata for course ID:', id);

    if (!id) {
        return {
            title: 'Course not found • LearnAI',
            description: 'The requested course could not be found on LearnAI.',
            alternates: {
                canonical: '/courses',
            },
            openGraph: {
                title: 'Course not found • LearnAI',
                description: 'The requested course could not be found on LearnAI.',
                type: 'website',
                url: '/courses',
                siteName: 'LearnAI',
            },
            twitter: {
                card: 'summary_large_image',
                title: 'Course not found • LearnAI',
                description: 'The requested course could not be found on LearnAI.',
            },
        };
    }

    const course = courses.find((c) => c.id === id);

    if (!course) {
        return {
            title: 'Course not found • LearnAI',
            description: 'The requested course could not be found on LearnAI.',
            alternates: {
                canonical: '/courses',
            },
            openGraph: {
                title: 'Course not found • LearnAI',
                description: 'The requested course could not be found on LearnAI.',
                type: 'website',
                url: '/courses',
                siteName: 'LearnAI',
            },
            twitter: {
                card: 'summary_large_image',
                title: 'Course not found • LearnAI',
                description: 'The requested course could not be found on LearnAI.',
            },
        };
    }

    const title = `${course.title} • LearnAI course`;
    const description = course.description;

    return {
        title,
        description,
        keywords: [
            'LearnAI',
            'web3 course',
            'blockchain course',
            'online learning',
            course.title,
            course.level,
            course.instructor,
        ],
        alternates: {
            canonical: `/course/${course.id}`,
        },
        openGraph: {
            title,
            description,
            type: 'article',
            url: `/course/${course.id}`,
            siteName: 'LearnAI',
        },
        twitter: {
            card: 'summary_large_image',
            title,
            description,
        },
    };
}

export default function CourseLayout({ children }: CourseLayoutProps) {
    return children;
}
