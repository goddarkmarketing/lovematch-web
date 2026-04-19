import { Briefcase, Building2, CalendarHeart, Landmark, MessageSquareHeart, Plane, School, Sparkles, Waves, HeartHandshake } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PublicFooter } from '../../components/layout/PublicFooter';
import { PublicHeader } from '../../components/layout/PublicHeader';
import { Button } from '../../components/shared/Button';

const serviceGroups = [
  {
    eyebrow: 'Dating Services',
    title: 'บริการเดทและแมตช์เมคเกอร์',
    description:
      'ออกแบบมาสำหรับลูกค้าที่อยากเปลี่ยนจากการคุยออนไลน์ ไปสู่การพบกันจริงอย่างมีคลาสและมีคนดูแลทุกจังหวะ',
    icon: CalendarHeart,
    items: [
      'นัดพบตัวจริง',
      'ปรึกษาแมตช์เมคเกอร์ลิษา',
      'จองเดทบนปาร์ตี้หรือยอร์ช',
      'ชุดเดทและการเตรียมลุคสำหรับวันสำคัญ',
    ],
  },
  {
    eyebrow: 'Thailand Life Services',
    title: 'วีซ่า การใช้ชีวิต และการตั้งตัวในไทย',
    description:
      'เหมาะสำหรับลูกค้าต่างชาติหรือคู่รักที่ต้องการทีมช่วยจัดการเอกสาร การเรียน และการเริ่มต้นใช้ชีวิตในประเทศไทย',
    icon: Plane,
    items: [
      'รับทำวีซ่าอยู่ไทย / โปรวีซ่า 1 ปี',
      'จดทะเบียนสมรส',
      'เปิดบัญชีธนาคารในไทย',
      'จดทะเบียนบริษัทและวีซ่านักลงทุน',
      'เรียนภาษาไทย พร้อมวีซ่า',
      'เรียนทำอาหาร / เรียนมวย พร้อมวีซ่า',
    ],
  },
  {
    eyebrow: 'Property & Business',
    title: 'อสังหา ธุรกิจ และดีลพิเศษ',
    description:
      'รวมบริการฝั่งทรัพย์สินและธุรกิจสำหรับลูกค้าที่ต้องการพาร์ตเนอร์ช่วยดูภาพใหญ่ ไม่ว่าจะซื้อ ลงทุน หรือเซ้งกิจการ',
    icon: Building2,
    items: [
      'ชุดอสังหาริมทรัพย์ / ซื้ออัสังหากับทีมงาน',
      'บริการที่พัก โรงแรม คอนโด พลูวิลล่า',
      'รับจำนำ / ขายฝาก บ้าน รถ ที่ดิน',
      'รับเซ้งธุรกิจและอุปกรณ์',
    ],
  },
] as const;

const featuredServices = [
  {
    title: 'Matchmaker Lisa Concierge',
    description: 'บริการคัดคู่ นัดหมาย และวางแผนเดทแบบมีผู้ช่วยส่วนตัวดูแล',
    icon: MessageSquareHeart,
  },
  {
    title: 'Visa & Marriage Setup',
    description: 'รวมงานเอกสาร วีซ่า อยู่ไทย จดทะเบียนสมรส และการเริ่มต้นชีวิตคู่',
    icon: Landmark,
  },
  {
    title: 'Lifestyle & Experience',
    description: 'ที่พัก อีเวนต์ ชุดเดท เรียนภาษาไทย ทำอาหาร หรือมวยไทยในแพ็กเกจเดียว',
    icon: Waves,
  },
] as const;

const processSteps = [
  {
    title: 'คุยโจทย์กับทีม',
    description: 'บอกเป้าหมาย งบประมาณ ระยะเวลา และสิ่งที่อยากให้ทีมช่วยจัดการ',
  },
  {
    title: 'ทีมออกแพ็กเกจที่เหมาะ',
    description: 'สรุปบริการที่เกี่ยวข้องเป็นชุดเดียว เพื่อให้ลูกค้าเห็นภาพและตัดสินใจง่าย',
  },
  {
    title: 'เริ่มดำเนินการแบบมีผู้ดูแล',
    description: 'มีทีมตามงาน นัดหมาย และประสานพาร์ตเนอร์ให้จนจบกระบวนการ',
  },
] as const;

export function ServicesPage() {
  return (
    <main className="marketing-page">
      <PublicHeader />

      <section className="services-hero">
        <div className="services-hero__copy">
          <p className="eyebrow">บริการพรีเมียม</p>
          <h1>
            มากกว่าการหาคู่
            <br />
            เราช่วยดูแลทั้งการเริ่มต้นความสัมพันธ์และการใช้ชีวิต
          </h1>
          <p>
            จากแมตช์เมคเกอร์และการนัดพบตัวจริง ไปจนถึงวีซ่า การลงทุน อสังหา และการตั้งตัวในไทย
            ลูกค้าสามารถเลือกเป็นรายบริการหรือออกแบบเป็นแพ็กเกจเฉพาะตัวได้
          </p>
          <div className="hero-actions">
            <Link to="/auth?tab=register">
              <Button>ปรึกษาทีมงาน</Button>
            </Link>
            <Link to="/pricing">
              <Button variant="secondary">ดูแพ็กเกจสมาชิก</Button>
            </Link>
          </div>
        </div>

        <div className="services-hero__rail">
          {featuredServices.map((service) => {
            const Icon = service.icon;
            return (
              <article className="feature-box services-highlight" key={service.title}>
                <Icon />
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="services-groups">
        {serviceGroups.map((group) => {
          const Icon = group.icon;
          return (
            <article className="panel services-group" key={group.title}>
              <div className="services-group__header">
                <div>
                  <p className="eyebrow">{group.eyebrow}</p>
                  <h2>{group.title}</h2>
                </div>
                <div className="services-group__icon">
                  <Icon />
                </div>
              </div>
              <p className="services-group__description">{group.description}</p>
              <div className="services-group__list">
                {group.items.map((item) => (
                  <div className="check-list__item" key={item}>
                    <Sparkles size={18} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </article>
          );
        })}
      </section>

      <section className="services-process">
        <div className="section-heading">
          <div>
            <p className="eyebrow">ทำงานอย่างไร</p>
            <h2>เริ่มจากโจทย์เดียว แล้วแตกเป็นแผนบริการที่ชัดเจน</h2>
          </div>
        </div>
        <div className="steps-grid">
          {processSteps.map((step, index) => (
            <article className="feature-box step-card" key={step.title}>
              <span className="step-index">0{index + 1}</span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="services-bundles">
        <div className="feature-box feature-box--dark">
          <HeartHandshake />
          <h3>ชุดเดทยันชุดชีวิตในไทย</h3>
          <p>ลูกค้าสามารถเริ่มจากนัดพบตัวจริง แล้วต่อยอดเป็นบริการวีซ่า สมรส ที่พัก หรือการตั้งบริษัทได้ใน flow เดียว</p>
        </div>
        <div className="feature-box">
          <School />
          <h3>บริการเสริมที่ขายเป็นแพ็กได้</h3>
          <p>เช่น เรียนภาษาไทยพร้อมวีซ่า, เรียนมวย, เรียนทำอาหาร หรือโปรย้ายมาอยู่ไทยแบบครบขั้นตอน</p>
        </div>
        <div className="feature-box">
          <Briefcase />
          <h3>เหมาะกับการแตกหน้าแยกในลำดับถัดไป</h3>
          <p>เมื่อหน้ารวมนี้ผ่านลูกค้าแล้ว เราสามารถแตกหน้าเฉพาะ เช่น Matchmaker, Visa, Marriage, Property ได้ต่อทันที</p>
        </div>
      </section>

      <section className="closing-cta">
        <div className="panel panel--gradient">
          <p className="eyebrow">พร้อมเริ่มแล้ว</p>
          <h2>ให้ทีมช่วยออกแบบแพ็กเกจที่เหมาะกับเป้าหมายของลูกค้าคุณ</h2>
          <p>เริ่มจากความสัมพันธ์ การใช้ชีวิตในไทย หรือดีลอสังหาและธุรกิจ แล้วค่อยรวมบริการที่ต้องใช้จริงเข้าด้วยกัน</p>
          <div className="hero-actions">
            <Link to="/auth?tab=register">
              <Button>ขอคำปรึกษา</Button>
            </Link>
            <Link to="/">
              <Button variant="secondary">กลับหน้าแรก</Button>
            </Link>
          </div>
        </div>
      </section>

      <PublicFooter />
    </main>
  );
}
