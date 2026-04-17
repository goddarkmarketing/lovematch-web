/* eslint-disable react-refresh/only-export-components */
import { createContext, type PropsWithChildren, useContext, useState } from 'react';
import { initialState } from '../data/mockData';
import type { AdminMember, AppState, GiftItem, PlanTier, Role, TransactionStatus } from '../types/domain';

interface RegisterInput {
  name: string;
  email: string;
  password: string;
}

interface LoginInput {
  email: string;
  password: string;
  role: Exclude<Role, 'guest'>;
}

interface GiftInput {
  id?: string;
  name: string;
  category: GiftItem['category'];
  price: number;
  image: string;
  badge?: GiftItem['badge'];
}

interface LoveMatchContextValue {
  state: AppState;
  login: (input: LoginInput) => Promise<void>;
  logout: () => void;
  register: (input: RegisterInput) => Promise<void>;
  likeProfile: (profileId: string) => void;
  passProfile: (profileId: string) => void;
  selectConversation: (conversationId: string) => void;
  sendMessage: (body: string) => void;
  updatePlan: (plan: PlanTier) => void;
  upsertGift: (input: GiftInput) => void;
  deleteGift: (giftId: string) => void;
  reviewMember: (memberId: string, status: TransactionStatus | 'approved') => void;
}

const LoveMatchContext = createContext<LoveMatchContextValue | null>(null);
const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export function LoveMatchProvider({ children }: PropsWithChildren) {
  const [state, setState] = useState<AppState>(initialState);

  const value: LoveMatchContextValue = {
    state,
    login: async ({ email, password, role }) => {
      await wait(900);
      if (role === 'admin' && (email !== 'admin' || password !== '1234')) {
        throw new Error('INVALID_ADMIN_CREDENTIALS');
      }
      setState((current) => ({
        ...current,
        role,
        currentUser: {
          name: role === 'admin' ? 'Admin User' : 'เมริซา',
          email,
          plan: role === 'admin' ? 'vip' : 'premium',
        },
      }));
    },
    logout: () => setState((current) => ({ ...current, role: 'guest', currentUser: null })),
    register: async ({ name, email }) => {
      await wait(900);
      setState((current) => ({ ...current, role: 'user', currentUser: { name, email, plan: 'free' } }));
    },
    likeProfile: (profileId) => {
      setState((current) => ({
        ...current,
        likedProfileIds: Array.from(new Set([...current.likedProfileIds, profileId])),
        stats: { ...current.stats, likes: current.stats.likes + 1 },
      }));
    },
    passProfile: (profileId) => {
      setState((current) => ({
        ...current,
        passedProfileIds: Array.from(new Set([...current.passedProfileIds, profileId])),
      }));
    },
    selectConversation: (conversationId) => {
      setState((current) => ({
        ...current,
        selectedConversationId: conversationId,
        conversations: current.conversations.map((conversation) =>
          conversation.id === conversationId ? { ...conversation, unread: 0, typing: false } : conversation,
        ),
      }));
    },
    sendMessage: (body) => {
      if (!body.trim()) return;
      setState((current) => ({
        ...current,
        conversations: current.conversations.map((conversation) =>
          conversation.id === current.selectedConversationId
            ? {
                ...conversation,
                lastMessage: body,
                messages: [...conversation.messages, { id: `m-${Date.now()}`, sender: 'self', body, timestamp: 'ตอนนี้' }],
              }
            : conversation,
        ),
      }));
    },
    updatePlan: (plan) => {
      setState((current) => ({
        ...current,
        currentUser: current.currentUser ? { ...current.currentUser, plan } : current.currentUser,
      }));
    },
    upsertGift: (input) => {
      setState((current) => {
        const nextGift: GiftItem = { id: input.id ?? `g-${Date.now()}`, ...input };
        return {
          ...current,
          gifts: input.id ? current.gifts.map((gift) => (gift.id === input.id ? nextGift : gift)) : [nextGift, ...current.gifts],
        };
      });
    },
    deleteGift: (giftId) => setState((current) => ({ ...current, gifts: current.gifts.filter((gift) => gift.id !== giftId) })),
    reviewMember: (memberId, status) => {
      setState((current) => {
        const members = current.members.map((member) => {
          if (member.id !== memberId) return member;
          const verification: AdminMember['verification'] =
            status === 'approved' ? 'verified' : status === 'failed' ? 'rejected' : member.verification;
          return { ...member, verification };
        });
        return { ...current, members, pendingVerifications: members.filter((member) => member.verification === 'pending') };
      });
    },
  };

  return <LoveMatchContext.Provider value={value}>{children}</LoveMatchContext.Provider>;
}

export function useLoveMatch() {
  const context = useContext(LoveMatchContext);
  if (!context) throw new Error('useLoveMatch must be used within LoveMatchProvider');
  return context;
}
