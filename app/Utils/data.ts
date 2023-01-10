import {
  money,
  user,
  Vector,
  multiUser,
  wallet,
  rotateRight,
} from '../Utils/images';

export const Dots = [
  { title: '.', active: false },
  { title: '.', active: false },
  { title: '.', active: true },
];

export const HomeDots = [
  { title: '.', active: false },
  { title: '.', active: true },
  { title: '.', active: true },
  { title: '.', active: true },
];

export const SavingData = [
  { title: 'FamilyPlus Savings', img: money },
  { title: 'Invest in Stocks', img: Vector },
  { title: 'Early for kids', img: user },
];

export const PortFolioData = [
  { title: 'Portfolio', subTitle: 'Aggressive ', navigate: 'PortFolio' },
  { title: 'Round-Up Settings', subTitle: 'Automatic ', navigate: '' },
  { title: 'Recurring', subTitle: '$20/Monthly', navigate: '' },
  { title: 'Beneficiary', subTitle: '1 Child', navigate: '' },
  { title: 'One-time Investment', subTitle: ' ', navigate: '' },
];

export const RecentTransactions = [
  { title: 'One Time Investment', subTitle: 'Processing', price: 20 },
  { title: 'Withdrawal', subTitle: 'Processing', price: 8.0 },
  { title: 'Round-Up Investment', subTitle: 'Processing', price: 10.36 },
];

export const KnowledgeData = [
  { title: 'What is Family Plus?', img: multiUser },
  { title: 'How do Round-Ups work?', img: rotateRight },
  { title: 'What is FamilyPlus Savings?', img: money },
  { title: 'How can I withdraw my money?', img: wallet },
];

export const AggressivePortfolio = [
  { title: 'Large Company Stocks(VOO)', percentage:55 },
  { title: 'Medium Company Stocks (IJH)', percentage:10 },
  { title: 'Small Company Stocks(IJR)', percentage:5 },
  { title: 'International Company Stocks (IXUS) ', percentage:30 },
];

export const chatData = [0, 5, 10, 15, 20, 25, 30, 35, 40, 0, 5, 10];
