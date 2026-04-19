import type { ReactElement } from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { useLoveMatch } from '../context/LoveMatchContext';
import { AdminGiftsPage } from '../pages/admin/AdminGiftsPage';
import { AdminMembersPage } from '../pages/admin/AdminMembersPage';
import { AdminOverviewPage } from '../pages/admin/AdminOverviewPage';
import { AdminTransactionsPage } from '../pages/admin/AdminTransactionsPage';
import { AuthPage } from '../pages/auth/AuthPage';
import { LandingPage } from '../pages/public/LandingPage';
import { PricingPage } from '../pages/public/PricingPage';
import { ServicesPage } from '../pages/public/ServicesPage';
import { ChatPage } from '../pages/user/ChatPage';
import { DiscoverPage } from '../pages/user/DiscoverPage';
import { SettingsPage } from '../pages/user/SettingsPage';
import { UserDashboardPage } from '../pages/user/UserDashboardPage';
import { WalletPage } from '../pages/user/WalletPage';

function RequireRole({ children, allowed }: { children: ReactElement; allowed: Array<'user' | 'admin'> }) {
  const { state } = useLoveMatch();
  const location = useLocation();
  if (!allowed.includes(state.role as 'user' | 'admin')) {
    return <Navigate to={`/auth?redirect=${encodeURIComponent(location.pathname)}`} replace />;
  }
  return children;
}

export function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/auth" element={<AuthPage />} />
      <Route path="/pricing" element={<PricingPage />} />
      <Route path="/services" element={<ServicesPage />} />
      <Route path="/app/dashboard" element={<RequireRole allowed={['user']}><UserDashboardPage /></RequireRole>} />
      <Route path="/app/discover" element={<RequireRole allowed={['user']}><DiscoverPage /></RequireRole>} />
      <Route path="/app/chat" element={<RequireRole allowed={['user']}><ChatPage /></RequireRole>} />
      <Route path="/app/wallet" element={<RequireRole allowed={['user']}><WalletPage /></RequireRole>} />
      <Route path="/app/settings" element={<RequireRole allowed={['user']}><SettingsPage /></RequireRole>} />
      <Route path="/admin/overview" element={<RequireRole allowed={['admin']}><AdminOverviewPage /></RequireRole>} />
      <Route path="/admin/members" element={<RequireRole allowed={['admin']}><AdminMembersPage /></RequireRole>} />
      <Route path="/admin/gifts" element={<RequireRole allowed={['admin']}><AdminGiftsPage /></RequireRole>} />
      <Route path="/admin/transactions" element={<RequireRole allowed={['admin']}><AdminTransactionsPage /></RequireRole>} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
