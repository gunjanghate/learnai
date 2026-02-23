export interface Lesson {
  id: string;
  title: string;
  duration: string;
  completed: boolean;
}

export interface Course {
  id: string;
  title: string;
  description: string;
  progress: number;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  lessons: Lesson[];
  instructor: string;
  thumbnail: string;
  duration: string;
  lessonCount: number;
}

export const courses: Course[] = [
  {
    id: "1",
    title: "Introduction to AI & Machine Learning",
    description: "Get a practical, beginner-friendly overview of artificial intelligence and machine learning. Understand core concepts, real-world use cases, and how models learn from data.",
    progress: 0,
    level: 'Beginner',
    instructor: "Dr. Ananya Mehta",
    thumbnail: 'from-purple-500 to-blue-500',
    duration: "5hrs",
    lessonCount: 36,
    lessons: [
      { id: "1-1", title: "What is AI?", duration: "12 min", completed: false },
      { id: "1-2", title: "Machine Learning vs. Deep Learning", duration: "18 min", completed: false },
      { id: "1-3", title: "Datasets, Features & Labels", duration: "20 min", completed: false },
      { id: "1-4", title: "Training, Validation & Testing", duration: "22 min", completed: false },
      { id: "1-5", title: "Common ML Algorithms", duration: "24 min", completed: false },
      { id: "1-6", title: "AI in the Real World", duration: "18 min", completed: false },
    ],
  },
  {
    id: "2",
    title: "Hands-on Deep Learning with PyTorch",
    description: "Learn how to build, train, and evaluate deep neural networks using PyTorch. Go from tensors and autograd to CNNs, RNNs, and practical training tricks.",
    progress: 0,
    level: 'Intermediate',
    instructor: "Marcus Liu",
    thumbnail: 'from-amber-500 to-orange-500',
    duration: "8hrs",
    lessonCount: 44,
    lessons: [
      { id: "2-1", title: "PyTorch Tensors & Autograd", duration: "24 min", completed: false },
      { id: "2-2", title: "Building Your First Neural Network", duration: "28 min", completed: false },
      { id: "2-3", title: "Training Loops, Optimizers & Schedulers", duration: "32 min", completed: false },
      { id: "2-4", title: "Convolutional Networks for Images", duration: "30 min", completed: false },
      { id: "2-5", title: "Overfitting, Regularization & Callbacks", duration: "26 min", completed: false },
    ],
  },
  {
    id: "3",
    title: "Applied Computer Vision",
    description: "Build practical computer vision projects using modern deep learning techniques. Learn image classification, object detection, and data pipelines for real-world datasets.",
    progress: 0,
    level: 'Intermediate',
    instructor: "Sara Kovács",
    thumbnail: 'from-teal-500 to-cyan-500',
    duration: "9hrs",
    lessonCount: 40,
    lessons: [
      { id: "3-1", title: "Intro to Computer Vision", duration: "18 min", completed: false },
      { id: "3-2", title: "Preparing Image Datasets", duration: "24 min", completed: false },
      { id: "3-3", title: "CNN Architectures (ResNet, EfficientNet)", duration: "32 min", completed: false },
      { id: "3-4", title: "Transfer Learning & Fine-tuning", duration: "30 min", completed: false },
      { id: "3-5", title: "Deploying CV Models to Production", duration: "26 min", completed: false },
    ],
  },
  {
    id: "4",
    title: "Advanced LLMs & Prompt Engineering",
    description: "Go deep into large language models: tokenization, embeddings, prompt engineering patterns, retrieval-augmented generation (RAG), and safety considerations.",
    progress: 0,
    level: 'Advanced',
    instructor: "Dr. Elena Rossi",
    thumbnail: 'from-orange-500 to-yellow-500',
    duration: "11hrs",
    lessonCount: 46,
    lessons: [
      { id: "4-1", title: "How Large Language Models Work", duration: "30 min", completed: false },
      { id: "4-2", title: "Prompt Design Patterns", duration: "28 min", completed: false },
      { id: "4-3", title: "Tools, Function Calling & Agents", duration: "34 min", completed: false },
      { id: "4-4", title: "Building RAG Pipelines", duration: "36 min", completed: false },
      { id: "4-5", title: "Evaluating & Hardening LLM Systems", duration: "32 min", completed: false },
    ],
  },
  {
    id: "5",
    title: "MLOps & ML Systems Design",
    description: "Learn how to take models from notebook to production. Cover experiment tracking, model versioning, deployment patterns, monitoring, and failure scenarios.",
    progress: 0,
    level: 'Advanced',
    instructor: "Rahul Iyer",
    thumbnail: 'from-pink-500 to-rose-500',
    duration: "9hrs",
    lessonCount: 38,
    lessons: [
      { id: "5-1", title: "From Model to Service", duration: "24 min", completed: false },
      { id: "5-2", title: "Experiment Tracking & Reproducibility", duration: "28 min", completed: false },
      { id: "5-3", title: "Deployment Patterns (Batch, Online, Streaming)", duration: "32 min", completed: false },
      { id: "5-4", title: "Monitoring Drift & Failures", duration: "30 min", completed: false },
      { id: "5-5", title: "Designing ML Systems for Scale", duration: "34 min", completed: false },
    ],
  },
  {
    id: "6",
    title: "End-to-End GenAI Applications",
    description: "Build complete generative AI products using LLMs, vector databases, and modern frontend stacks. Ship chatbots, copilots, and content tools end to end.",
    progress: 0,
    level: 'Intermediate',
    instructor: "Noah Williams",
    thumbnail: 'from-purple-500 to-pink-500',
    duration: "12hrs",
    lessonCount: 50,
    lessons: [
      { id: "6-1", title: "GenAI Product Patterns", duration: "26 min", completed: false },
      { id: "6-2", title: "Choosing & Orchestrating LLMs", duration: "30 min", completed: false },
      { id: "6-3", title: "Retrieval with Vector Databases", duration: "34 min", completed: false },
      { id: "6-4", title: "Frontend for Chat & Copilot UIs", duration: "28 min", completed: false },
      { id: "6-5", title: "Evaluation, Logging & Analytics", duration: "32 min", completed: false },
      { id: "6-6", title: "Shipping & Maintaining GenAI Apps", duration: "30 min", completed: false },
    ],
  },
];
