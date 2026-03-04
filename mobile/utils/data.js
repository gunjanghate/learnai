export const initialCourses = [
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