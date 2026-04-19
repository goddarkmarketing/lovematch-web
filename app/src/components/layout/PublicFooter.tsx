import { NavLink } from 'react-router-dom';

const footerGroups = [
  {
    title: 'แพลตฟอร์ม',
    links: [
      { label: 'หน้าแรก', to: '/' },
      { label: 'แพ็กเกจ', to: '/pricing' },
      { label: 'บริการพรีเมียม', to: '/services' },
    ],
  },
  {
    title: 'การใช้งาน',
    links: [
      { label: 'สมัครสมาชิก', to: '/auth?tab=register' },
      { label: 'ค้นหาแมตช์', to: '/app/discover' },
      { label: 'แอดมิน', to: '/admin/overview' },
    ],
  },
  {
    title: 'ความเชื่อมั่น',
    links: [
      { label: 'ความปลอดภัย', to: '/pricing' },
      { label: 'บริการวีซ่าและใช้ชีวิตในไทย', to: '/services' },
      { label: 'เริ่มต้นใช้งาน', to: '/auth?tab=register' },
    ],
  },
] as const;

export function PublicFooter() {
  return (
    <footer className="public-footer">
      <div className="public-footer__inner">
        <div className="public-footer__brand">
          <NavLink to="/" className="brand">
            LoveMatch
          </NavLink>
          <p>แพลตฟอร์มหาคู่ที่ต่อยอดได้ทั้งบริการเดท วีซ่า การตั้งตัวในไทย และดีลพรีเมียมสำหรับลูกค้าที่ต้องการความช่วยเหลือแบบครบด้าน</p>
        </div>

        <div className="public-footer__grid">
          {footerGroups.map((group) => (
            <div className="public-footer__group" key={group.title}>
              <h3>{group.title}</h3>
              {group.links.map((link) => (
                <NavLink key={link.label} to={link.to}>
                  {link.label}
                </NavLink>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="public-footer__meta">
        <span>© 2026 LoveMatch. All rights reserved.</span>
        <div className="public-footer__meta-links">
          <span>Privacy-ready</span>
          <span>Verified profiles</span>
          <span>Concierge services</span>
        </div>
      </div>
    </footer>
  );
}
