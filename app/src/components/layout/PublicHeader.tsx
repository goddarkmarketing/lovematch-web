import { NavLink } from 'react-router-dom';
import { Button } from '../shared/Button';

export function PublicHeader() {
  return (
    <header className="public-header">
      <NavLink to="/" className="brand">
        LoveMatch
      </NavLink>
      <nav>
        <NavLink to="/">หน้าแรก</NavLink>
        <NavLink to="/pricing">Premium</NavLink>
        <NavLink to="/auth">เข้าสู่ระบบ</NavLink>
        <NavLink to="/admin/overview">Admin</NavLink>
      </nav>
      <div className="public-header__actions">
        <NavLink to="/auth" className="public-link">
          เข้าสู่ระบบ
        </NavLink>
        <NavLink to="/auth?tab=register">
          <Button>สมัครสมาชิก</Button>
        </NavLink>
      </div>
    </header>
  );
}
