export type Role = 'guest' | 'user' | 'admin';
export type PlanTier = 'free' | 'premium' | 'vip';
export type VerificationStatus = 'verified' | 'pending' | 'rejected';
export type TransactionStatus = 'success' | 'pending' | 'failed';
export type GiftCategory = 'flowers' | 'food' | 'jewelry' | 'drinks';

export interface UserProfile {
  id: string;
  name: string;
  age: number;
  city: string;
  distanceKm: number;
  verified: boolean;
  online: boolean;
  bio: string;
  interests: string[];
  matchScore: number;
  plan: PlanTier;
  image: string;
}

export interface ActivityItem {
  id: string;
  title: string;
  detail: string;
  icon: 'heart' | 'gift' | 'spark' | 'shield';
  timestamp: string;
}

export interface ChatMessage {
  id: string;
  sender: 'self' | 'other' | 'system';
  body: string;
  timestamp: string;
  type?: 'text' | 'gift' | 'image';
}

export interface Conversation {
  id: string;
  profile: UserProfile;
  unread: number;
  typing: boolean;
  lastMessage: string;
  messages: ChatMessage[];
}

export interface WalletEntry {
  id: string;
  title: string;
  amount: number;
  channel: string;
  status: TransactionStatus;
  createdAt: string;
}

export interface GiftItem {
  id: string;
  name: string;
  category: GiftCategory;
  price: number;
  image: string;
  badge?: 'popular' | 'premium';
}

export interface AdminMember {
  id: string;
  name: string;
  email: string;
  joinedAt: string;
  plan: PlanTier;
  verification: VerificationStatus;
  avatar: string;
  idCardImage: string;
}

export interface DashboardStats {
  likes: number;
  newMatches: number;
  unreadMessages: number;
  credits: number;
}

export interface AppState {
  role: Role;
  currentUser: {
    name: string;
    email: string;
    plan: PlanTier;
  } | null;
  stats: DashboardStats;
  profiles: UserProfile[];
  likedProfileIds: string[];
  passedProfileIds: string[];
  selectedConversationId: string;
  conversations: Conversation[];
  walletEntries: WalletEntry[];
  gifts: GiftItem[];
  members: AdminMember[];
  transactions: WalletEntry[];
  pendingVerifications: AdminMember[];
}
