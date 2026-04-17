import type {
  ActivityItem,
  AdminMember,
  AppState,
  Conversation,
  GiftItem,
  UserProfile,
  WalletEntry,
} from '../types/domain';

export const profilePool: UserProfile[] = [
  {
    id: 'p-1',
    name: 'น้ำฟ้า',
    age: 24,
    city: 'กรุงเทพมหานคร',
    distanceKm: 2,
    verified: true,
    online: true,
    bio: 'ชอบเดินทาง คาเฟ่ และบทสนทนาที่มีความหมาย',
    interests: ['ท่องเที่ยว', 'กาแฟ', 'ดนตรีสด'],
    matchScore: 95,
    plan: 'premium',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBNCsOWjIU2mj5xKnBJ8mK-jk0B-wXLDt4W9qkQKvzS00KOAoFst3VHsLPnXDE74oHBt-Enqt-LUnbkZ7uAO0aF1hou4T_szR_ASMu4QFxG6EPPSKUuwYDzr9wjgnxUG9D_rSM11ezBUjSptWTSv4pEyzzo-uXlSC8ZqkUmJYFHpmjJ-Bww-ODSf2epSGKENMCaHckK9l4j1fu58Lfbr8SnnTV_-57fEXAaGlDA99vki49MKXEia4BRT0iEfdf3f6eswA55sxP7Ld8',
  },
  {
    id: 'p-2',
    name: 'ชวิน',
    age: 28,
    city: 'กรุงเทพฯ',
    distanceKm: 4,
    verified: true,
    online: false,
    bio: 'นักออกแบบที่เชื่อว่าความสัมพันธ์ดีเริ่มจากความจริงใจ',
    interests: ['ศิลปะ', 'วิ่ง', 'คาเฟ่'],
    matchScore: 98,
    plan: 'vip',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuB5hgUTu4XFWn_-poNkA60_jCOChAQeYDsyfbPmEtWyfdBLpHhhX0j-aTm6As-LrRjlbGTCPRUPteHCCyKhFWDPhoMnepqOOgZYBM-7Mx1CCNJtl9QKm7LT1qEFqarWZ0hwDLE9Um3VeIphcmaZBaVcb5zAcOz-N7GaGqmA35jSODzJXHnntEVhm8GF6DN3d-mtfqkzVg_CDbP6vLZI3zo6VlnC0WwgyRMuTkfasOxHYf17SG9h9j_BnggEVkap9q1SJ6WT-zMYu2M',
  },
  {
    id: 'p-3',
    name: 'พิมพ์ตา',
    age: 25,
    city: 'เชียงใหม่',
    distanceKm: 13,
    verified: false,
    online: true,
    bio: 'สาย slow life ชอบอ่านหนังสือและเดินดูนิทรรศการ',
    interests: ['อ่านหนังสือ', 'แกลเลอรี', 'บรันช์'],
    matchScore: 95,
    plan: 'premium',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAHRXxbtZCaDau6xjWb2TS4rIJDYfW7IpUeJedxC2ti7x8sJGnMQU_-DftgeITQ0InkT1oMH1rWLXZMqKpWyF01gqAQsQpYtq0mK6IQCbFVh6A7nPrhz8S5CEocCOY367i_ooDgYIHCyvUq8oTgIkExvb_sDUsPsfhAmDtLk0Z5j7dd9KlxDQrnpJD0sThmT_IYpMkceaGeq2B9putM-cwClJ17CmyNceHQk-_TEfRWsk89a3AwNL7K89Yv0I_wJQN1aJLsh6AOdSU',
  },
  {
    id: 'p-4',
    name: 'กิตติพงษ์',
    age: 30,
    city: 'กรุงเทพฯ',
    distanceKm: 8,
    verified: false,
    online: false,
    bio: 'ทำงานสายการเงิน ชอบดินเนอร์เรียบง่ายและกาแฟดี ๆ',
    interests: ['กาแฟ', 'อาหาร', 'ฟิตเนส'],
    matchScore: 92,
    plan: 'free',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuD0VITg5nXDS9rLOqmzo9cJo7fT2Gs891I50uaziQ9VhUL9PuJ8CKlviz_yyxEZwo5bnD8J-6BdDpqjLwzcv4DFYSWbZ4PcC7JusWvfiLAN074vztUC7YwnBgzh01hzoxAf6HL8sCxg7Ku_K_rqmA7dLSPVKAmhTQQvauEIhgHxvpysvT8iARczrbpXZRimeG8JsH2G0CMxo7L3_vGm5k6WV0TFDlgdwvTVrzu-9A8QG12FnKLOsfMv7do6C-3PUeSnjByJ-hFXu-g',
  },
];

export const activityFeed: ActivityItem[] = [
  { id: 'a1', title: 'คุณ A กดถูกใจโปรไฟล์ของคุณ', detail: '2 นาทีที่แล้ว', icon: 'heart', timestamp: '2m' },
  { id: 'a2', title: 'คุณ B ส่งของขวัญ "กุหลาบทอง"', detail: '15 นาทีที่แล้ว', icon: 'gift', timestamp: '15m' },
  { id: 'a3', title: 'แมทช์ใหม่! คุณและคุณเอ เฟิร์สแมทช์กัน', detail: '1 ชั่วโมงที่แล้ว', icon: 'spark', timestamp: '1h' },
  { id: 'a4', title: 'โปรไฟล์ของคุณผ่านการยืนยันแล้ว', detail: 'วันนี้', icon: 'shield', timestamp: 'today' },
];

export const walletEntries: WalletEntry[] = [
  { id: 't1', title: 'LoveMatch Premium (12 เดือน)', amount: 2490, channel: 'บัตรเครดิต', status: 'success', createdAt: '24 พ.ค. 2024 14:22' },
  { id: 't2', title: 'เติม 500 เครดิต', amount: 500, channel: 'PromptPay', status: 'pending', createdAt: '24 พ.ค. 2024 14:15' },
  { id: 't3', title: 'LoveMatch Premium (1 เดือน)', amount: 399, channel: 'โอนผ่านธนาคาร', status: 'failed', createdAt: '24 พ.ค. 2024 13:58' },
  { id: 't4', title: 'Super Like Pack', amount: 150, channel: 'TrueMoney', status: 'success', createdAt: '24 พ.ค. 2024 13:40' },
];

export const conversations: Conversation[] = [
  {
    id: 'c1',
    profile: profilePool[0],
    unread: 2,
    typing: true,
    lastMessage: 'กำลังพิมพ์...',
    messages: [
      { id: 'm1', sender: 'other', body: 'สวัสดีค่ะ สบายดีมั้ยคะ? ขอบคุณที่ทักมานะคะ 😊', timestamp: '10:30' },
      { id: 'm2', sender: 'system', body: 'คุณได้ส่งของขวัญ "ช่อดอกไม้" จากคุณ น้ำฟ้า', timestamp: '10:38', type: 'gift' },
      { id: 'm3', sender: 'self', body: 'ยินดีที่ได้รู้จักครับ ถ้ามีเวลาอยากชวนไปทานข้าวกันนะครับ', timestamp: '10:42' },
      { id: 'm4', sender: 'other', body: 'ได้เลยค่ะ มีร้านไหนแนะนำมั้ยคะ?', timestamp: '10:44' },
    ],
  },
  {
    id: 'c2',
    profile: profilePool[2],
    unread: 0,
    typing: false,
    lastMessage: 'ขอบคุณสำหรับเพลงที่แชร์มานะ',
    messages: [{ id: 'm5', sender: 'other', body: 'ขอบคุณสำหรับเพลงที่แชร์มานะ', timestamp: '09:12' }],
  },
  {
    id: 'c3',
    profile: profilePool[3],
    unread: 0,
    typing: false,
    lastMessage: 'พรุ่งนี้ไปทานข้าวกันมั้ย?',
    messages: [{ id: 'm6', sender: 'other', body: 'พรุ่งนี้ไปทานข้าวกันมั้ย?', timestamp: 'เมื่อวานนี้' }],
  },
];

export const gifts: GiftItem[] = [
  {
    id: 'g1',
    name: 'ช่อกุหลาบอมตะ',
    category: 'flowers',
    price: 299,
    image: 'https://images.unsplash.com/photo-1518895949257-7621c3c786d7?auto=format&fit=crop&w=800&q=80',
    badge: 'popular',
  },
  {
    id: 'g2',
    name: 'ช็อกโกแลตพรีเมียม',
    category: 'food',
    price: 150,
    image: 'https://images.unsplash.com/photo-1549007994-cb92caebd54b?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'g3',
    name: 'สร้อยเพชรล้ำค่า',
    category: 'jewelry',
    price: 999,
    image: 'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?auto=format&fit=crop&w=800&q=80',
    badge: 'premium',
  },
];

export const adminMembers: AdminMember[] = [
  {
    id: 'u1',
    name: 'นันทินี ใจดี',
    email: 'nanth.j@email.com',
    joinedAt: '12 พ.ค. 2024',
    plan: 'premium',
    verification: 'verified',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&q=80',
    idCardImage: 'https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'u2',
    name: 'ธนาวุฒิ สมบัติ',
    email: 'tanawut.s@email.com',
    joinedAt: '15 พ.ค. 2024',
    plan: 'free',
    verification: 'pending',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80',
    idCardImage: 'https://images.unsplash.com/photo-1587614382346-4ec70e388b28?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'u3',
    name: 'วิภาดา รักดี',
    email: 'vipada.r@email.com',
    joinedAt: '10 พ.ค. 2024',
    plan: 'free',
    verification: 'rejected',
    avatar: 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=300&q=80',
    idCardImage: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80',
  },
];

export const initialState: AppState = {
  role: 'guest',
  currentUser: null,
  stats: { likes: 12, newMatches: 3, unreadMessages: 5, credits: 500 },
  profiles: profilePool,
  likedProfileIds: [],
  passedProfileIds: [],
  selectedConversationId: conversations[0].id,
  conversations,
  walletEntries,
  gifts,
  members: adminMembers,
  transactions: walletEntries,
  pendingVerifications: adminMembers.filter((member) => member.verification === 'pending'),
};
