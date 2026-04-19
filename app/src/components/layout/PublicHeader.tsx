import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from '../shared/Button';

const navItems = [
  { to: '/', label: 'หน้าแรก' },
  { to: '/pricing', label: 'Premium' },
  { to: '/services', label: 'บริการพรีเมียม' },
] as const;

export function PublicHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="public-header">
      <div className={`public-header__inner${menuOpen ? ' is-open' : ''}`}>
        <div className="public-header__top">
          <NavLink to="/" className="brand" onClick={closeMenu}>
            LoveMatch
          </NavLink>

          <button
            type="button"
            className="public-header__menu-toggle"
            aria-label={menuOpen ? 'ปิดเมนู' : 'เปิดเมนู'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        <nav className={`public-header__nav${menuOpen ? ' is-open' : ''}`}>
          {navItems.map((item) => (
            <NavLink key={item.to} to={item.to} onClick={closeMenu}>
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className={`public-header__actions${menuOpen ? ' is-open' : ''}`}>
          <NavLink to="/auth" className="public-link" onClick={closeMenu}>
            เข้าสู่ระบบ
          </NavLink>
          <NavLink to="/auth?tab=register" onClick={closeMenu}>
            <Button>สมัครสมาชิก</Button>
          </NavLink>
        </div>
      </div>
    </header>
  );
}
