import type { LucideIcon } from 'lucide-react';
import { Heart, LayoutDashboard, MessageSquareText, Search, Settings, Shield, Wallet } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { useLoveMatch } from '../../context/LoveMatchContext';
import { Button } from '../shared/Button';

interface NavItem {
  to: string;
  label: string;
  icon: LucideIcon;
}

const userItems: NavItem[] = [
  { to: '/app/dashboard', label: 'แดชบอร์ด', icon: LayoutDashboard },
  { to: '/app/discover', label: 'ค้นหาคู่', icon: Search },
  { to: '/app/chat', label: 'ข้อความ', icon: MessageSquareText },
  { to: '/app/wallet', label: 'กระเป๋าเงิน', icon: Wallet },
  { to: '/app/settings', label: 'ตั้งค่า', icon: Settings },
];

const adminItems: NavItem[] = [
  { to: '/admin/overview', label: 'แดชบอร์ด', icon: LayoutDashboard },
  { to: '/admin/members', label: 'จัดการสมาชิก', icon: Shield },
  { to: '/admin/gifts', label: 'ของขวัญ', icon: Heart },
  { to: '/admin/transactions', label: 'ธุรกรรม', icon: Wallet },
];

interface AppSidebarProps {
  mode: 'user' | 'admin';
}

export function AppSidebar({ mode }: AppSidebarProps) {
  const { state, logout } = useLoveMatch();
  const items = mode === 'admin' ? adminItems : userItems;
  return (
    <aside className="app-sidebar">
      <div>
        <div className="brand">{mode === 'admin' ? 'LoveMatch Admin' : 'LoveMatch'}</div>
        <div className="sidebar-user">
          <div className="sidebar-avatar">{(state.currentUser?.name ?? 'L').slice(0, 1)}</div>
          <div>
            <strong>{state.currentUser?.name ?? (mode === 'admin' ? 'Admin User' : 'ยินดีต้อนรับ')}</strong>
            <p>{mode === 'admin' ? 'Admin Dashboard' : 'ค้นหาคู่แท้ของคุณ'}</p>
          </div>
        </div>
        <nav className="sidebar-nav">
          {items.map((item) => {
            const Icon = item.icon;
            return (
              <NavLink key={item.to} to={item.to} className={({ isActive }) => `sidebar-link${isActive ? ' is-active' : ''}`}>
                <Icon size={20} />
                <span>{item.label}</span>
              </NavLink>
            );
          })}
        </nav>
      </div>
      <div className="sidebar-footer">
        <div className="sidebar-upgrade">
          <p>{mode === 'admin' ? 'จัดการภาพรวมระบบ' : 'อัปเกรดเป็น Premium'}</p>
          <Button variant="secondary" fullWidth>
            {mode === 'admin' ? 'ดูรายงาน' : 'อัปเกรดเลย'}
          </Button>
        </div>
        <Button variant="ghost" fullWidth onClick={logout}>
          ออกจากระบบ
        </Button>
      </div>
    </aside>
  );
}
