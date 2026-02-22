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
    title: "Blockchain Basics",
    description: "Master blockchain's core concepts: transactions, wallets, consensus, scalability, and more. Non-technical, foundation course for devs and web3 professionals.",
    progress: 60,
    level: 'Beginner',
    instructor: "Ciara Nightingale",
    thumbnail: 'from-purple-500 to-blue-500',
    duration: "6hrs",
    lessonCount: 58,
    lessons: [
      { id: "1-1", title: "Introduction to Blockchain", duration: "15 min", completed: true },
      { id: "1-2", title: "Understanding Transactions", duration: "20 min", completed: true },
      { id: "1-3", title: "Wallet Fundamentals", duration: "18 min", completed: true },
      { id: "1-4", title: "Consensus Mechanisms", duration: "25 min", completed: false },
      { id: "1-5", title: "Scalability Solutions", duration: "22 min", completed: false },
      { id: "1-6", title: "Security Best Practices", duration: "20 min", completed: false },
    ],
  },
  {
    id: "2",
    title: "Solidity Smart Contract Development",
    description: "Solidity Programming is your door to web3 development in Ethereum compatible ecosystems. Learn to build dApps and deploy smart contracts, Learn Solidity today!",
    progress: 45,
    level: 'Intermediate',
    instructor: "Patrick Collins",
    thumbnail: 'from-amber-500 to-orange-500',
    duration: "8hrs",
    lessonCount: 52,
    lessons: [
      { id: "2-1", title: "Solidity Basics", duration: "25 min", completed: true },
      { id: "2-2", title: "Smart Contract Structure", duration: "20 min", completed: true },
      { id: "2-3", title: "Functions and State Variables", duration: "30 min", completed: false },
      { id: "2-4", title: "Gas Optimization", duration: "25 min", completed: false },
      { id: "2-5", title: "Testing & Deployment", duration: "22 min", completed: false },
    ],
  },
  {
    id: "3",
    title: "Foundry Fundamentals",
    description: "Level up your Solidity skills with Foundry. Learn advanced web3 development, teaching Foundry Forge, Anvil, Chainlink oracles, smart contract testing, and local deployment.",
    progress: 70,
    level: 'Intermediate',
    instructor: "Patrick Collins",
    thumbnail: 'from-teal-500 to-cyan-500',
    duration: "10hrs",
    lessonCount: 48,
    lessons: [
      { id: "3-1", title: "Foundry Setup", duration: "15 min", completed: true },
      { id: "3-2", title: "Writing Tests", duration: "30 min", completed: true },
      { id: "3-3", title: "Anvil Local Node", duration: "20 min", completed: true },
      { id: "3-4", title: "Advanced Testing", duration: "28 min", completed: false },
      { id: "3-5", title: "Integration Testing", duration: "25 min", completed: false },
    ],
  },
  {
    id: "4",
    title: "Advanced Foundry",
    description: "Master web3 development with Advanced Foundry for Solidity smart contracts. Learn to write, test, and deploy contracts using industry-standard tools.",
    progress: 80,
    level: 'Advanced',
    instructor: "Patrick Collins",
    thumbnail: 'from-orange-500 to-yellow-500',
    duration: "12hrs",
    lessonCount: 55,
    lessons: [
      { id: "4-1", title: "Advanced Patterns", duration: "35 min", completed: true },
      { id: "4-2", title: "Optimization Techniques", duration: "30 min", completed: true },
      { id: "4-3", title: "Security Auditing", duration: "40 min", completed: true },
      { id: "4-4", title: "Complex Deployments", duration: "32 min", completed: false },
      { id: "4-5", title: "Production Readiness", duration: "28 min", completed: false },
    ],
  },
  {
    id: "5",
    title: "Uniswap v4",
    description: "Dive into Uniswap v4 and PoolManager, hooks, Singleton architecture, PositionManager, Universal Router, build your own swap router from scratch, and more!",
    progress: 35,
    level: 'Advanced',
    instructor: "Tasuku Nakamura",
    thumbnail: 'from-pink-500 to-rose-500',
    duration: "9hrs",
    lessonCount: 42,
    lessons: [
      { id: "5-1", title: "Uniswap V4 Overview", duration: "20 min", completed: true },
      { id: "5-2", title: "Hooks Architecture", duration: "30 min", completed: false },
      { id: "5-3", title: "Pool Implementation", duration: "28 min", completed: false },
      { id: "5-4", title: "Router Design", duration: "25 min", completed: false },
      { id: "5-5", title: "Custom AMM", duration: "35 min", completed: false },
    ],
  },
  {
    id: "6",
    title: "Full-Stack Web3 Development Crash Course",
    description: "Master full-stack web3 development with our comprehensive course. Learn to build blockchain-powered apps, connect wallets, and implement smart contracts.",
    progress: 55,
    level: 'Intermediate',
    instructor: "Patrick Collins",
    thumbnail: 'from-purple-500 to-pink-500',
    duration: "14hrs",
    lessonCount: 60,
    lessons: [
      { id: "6-1", title: "Web3 Fundamentals", duration: "25 min", completed: true },
      { id: "6-2", title: "Frontend Setup", duration: "20 min", completed: true },
      { id: "6-3", title: "Contract Interaction", duration: "30 min", completed: false },
      { id: "6-4", title: "Wallet Integration", duration: "22 min", completed: false },
      { id: "6-5", title: "Deployment & Testing", duration: "28 min", completed: false },
      { id: "6-6", title: "Production Deployment", duration: "25 min", completed: false },
    ],
  },
];
