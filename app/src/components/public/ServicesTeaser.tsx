import { Building2, CalendarHeart, Plane } from 'lucide-react';
import { Link } from 'react-router-dom';

const teaserItems = [
  {
    title: 'นัดพบตัวจริงและแมตช์เมคเกอร์',
    description: 'จากนัดเดทจริงไปจนถึงการมีผู้ช่วยดูแลการพบกันแบบพรีเมียม',
    icon: CalendarHeart,
  },
  {
    title: 'วีซ่าและการใช้ชีวิตในไทย',
    description: 'ช่วยเรื่องอยู่ไทย สมรส เปิดบัญชี เรียนภาษา และวีซ่าหลายรูปแบบ',
    icon: Plane,
  },
  {
    title: 'อสังหาและดีลธุรกิจ',
    description: 'ซื้ออสังหา ที่พัก เซ้งกิจการ หรือดีลทรัพย์สินพร้อมทีมดูแล',
    icon: Building2,
  },
] as const;

export function ServicesTeaser() {
  return (
    <section className="services-teaser">
      <div className="section-heading">
        <div>
          <p className="eyebrow">บริการพรีเมียม</p>
          <h2>ขยายจากเว็บหาคู่ไปสู่บริการที่ลูกค้าต้องการจริง</h2>
        </div>
        <Link to="/services">ดูบริการทั้งหมด</Link>
      </div>
      <div className="services-teaser__grid">
        {teaserItems.map((item) => {
          const Icon = item.icon;
          return (
            <article className="feature-box" key={item.title}>
              <Icon />
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
