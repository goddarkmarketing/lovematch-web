import { CheckCircle2, Lock, MessageCircleHeart, ShieldCheck, Sparkles, Star, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PublicFooter } from '../../components/layout/PublicFooter';
import { ServicesTeaser } from '../../components/public/ServicesTeaser';
import { PublicHeader } from '../../components/layout/PublicHeader';
import { Button } from '../../components/shared/Button';
import { profilePool } from '../../data/mockData';

export function LandingPage() {
  const onboardingSteps = [
    {
      title: 'สมัครและสร้างโปรไฟล์',
      description: 'เพิ่มรูปภาพ ข้อมูลแนะนำตัว ความสนใจ และเป้าหมายความสัมพันธ์เพื่อให้ระบบแนะนำคู่ที่ตรงใจได้แม่นยำขึ้น',
    },
    {
      title: 'ยืนยันตัวตนและตั้งค่าความปลอดภัย',
      description: 'ตั้งค่าความเป็นส่วนตัว เลือกคนที่อยากให้มองเห็นโปรไฟล์ และเพิ่มความเชื่อมั่นก่อนเริ่มพูดคุย',
    },
    {
      title: 'เริ่มแมตช์และพูดคุย',
      description: 'ดูโปรไฟล์ที่น่าสนใจ ส่งข้อความแรก มอบของขวัญ และติดตามบทสนทนาได้ในที่เดียว',
    },
  ];

  const trustStats = [
    { value: '12K+', label: 'สมาชิกที่สมัครใช้งาน' },
    { value: '86%', label: 'โปรไฟล์ผ่านการยืนยัน' },
    { value: '4.8/5', label: 'คะแนนความพึงพอใจ' },
    { value: '24/7', label: 'ทีมดูแลและ moderation' },
  ];

  const safetyItems = [
    'ยืนยันตัวตนหลายชั้นก่อนปลดล็อกฟีเจอร์สำคัญ',
    'ระบบรายงาน บล็อก และตรวจสอบบัญชีต้องสงสัย',
    'ทีมแอดมินติดตามเคส moderation และธุรกรรม',
  ];

  const pricingPlans = [
    {
      plan: 'Free',
      price: '฿0',
      period: '/เดือน',
      description: 'เหมาะสำหรับผู้เริ่มต้นที่อยากลองใช้งานและสำรวจสมาชิกก่อน',
      features: ['กดไลก์ได้ 10 ครั้ง/วัน', 'แชตได้เมื่อแมตช์แล้ว', 'เริ่มสร้างโปรไฟล์ได้ทันที'],
      cta: 'เริ่มฟรี',
    },
    {
      plan: 'Premium',
      price: '฿499',
      period: '/เดือน',
      description: 'ปลดล็อกการคุยและมองเห็นโอกาสแมตช์ได้มากขึ้นแบบชัดเจน',
      features: ['กดไลก์ไม่จำกัด', 'ส่งข้อความก่อนแมตช์ได้', 'เห็นคนที่สนใจคุณ'],
      cta: 'อัปเกรด Premium',
    },
    {
      plan: 'VIP',
      price: '฿1,999',
      period: '/เดือน',
      description: 'สำหรับคนที่จริงจังและอยากได้ประสบการณ์โดดเด่นที่สุดบนแพลตฟอร์ม',
      features: ['Boost โปรไฟล์', 'AI Anti-Scam', 'ที่ปรึกษาแมตช์ส่วนตัว'],
      cta: 'เลือก VIP',
    },
  ];

  const faqs = [
    {
      question: 'สมัครใช้งานฟรีไหม',
      answer: 'สมัครและเริ่มสร้างโปรไฟล์ได้ฟรี ก่อนค่อยอัปเกรดเมื่ออยากใช้ฟีเจอร์เชิงลึกเพิ่มเติม',
    },
    {
      question: 'ต้องยืนยันตัวตนหรือไม่',
      answer: 'แนะนำให้ยืนยันตัวตนเพื่อเพิ่มความน่าเชื่อถือและปลดล็อกสิทธิ์การใช้งานบางส่วน',
    },
    {
      question: 'ข้อมูลส่วนตัวปลอดภัยแค่ไหน',
      answer: 'คุณควบคุมการมองเห็นโปรไฟล์ได้ และมีทีมดูแลช่วยตรวจสอบบัญชีหรือพฤติกรรมที่ผิดปกติ',
    },
    {
      question: 'ถ้าเจอผู้ใช้ไม่เหมาะสมทำอย่างไร',
      answer: 'สามารถบล็อก รายงาน และส่งรายละเอียดให้ทีมแอดมินตรวจสอบได้ทันทีจากในระบบ',
    },
  ];

  return (
    <main className="marketing-page">
      <PublicHeader />

      <section className="hero-section">
        <div className="hero-copy">
          <p className="eyebrow">หน้าแรก</p>
          <h1>
            ค้นหารักแท้
            <br />
            พรีเมียมและปลอดภัย
          </h1>
          <p>แพลตฟอร์มหาคู่ที่ออกแบบตั้งแต่ onboarding ถึง chat และ admin workflow พร้อมต่อยอด backend จริงได้ทันที</p>
          <div className="hero-actions">
            <Link to="/auth">
              <Button>เข้าสู่ระบบ</Button>
            </Link>
            <Link to="/auth?tab=register">
              <Button variant="secondary">สมัครสมาชิกวันนี้</Button>
            </Link>
          </div>
        </div>
        <div className="hero-poster">
          <div className="hero-poster__card">
            <span>Premium Dating Experience</span>
          </div>
        </div>
      </section>

      <section className="marketing-strip">
        <div className="feature-box">
          <Sparkles />
          <h3>AI ช่วยจัดลำดับคู่ที่เหมาะ</h3>
          <p>ใช้คะแนน match และพฤติกรรมเพื่อดันโปรไฟล์ที่น่าคุยจริงขึ้นมาก่อน</p>
        </div>
        <div className="feature-box">
          <MessageCircleHeart />
          <h3>แชตแบบลื่นไหล</h3>
          <p>รองรับ gifting, read states, conversation list และต่อ API หรือ realtime ได้ง่าย</p>
        </div>
        <div className="feature-box">
          <Lock />
          <h3>ความปลอดภัยเชิงระบบ</h3>
          <p>มี flow ยืนยันตัวตน ระบบ moderation และสถานะโปรไฟล์ที่ตรวจสอบได้</p>
        </div>
      </section>

      <section className="trust-strip">
        {trustStats.map((stat) => (
          <article className="stat-card" key={stat.label}>
            <strong>{stat.value}</strong>
            <p>{stat.label}</p>
          </article>
        ))}
      </section>

      <section className="how-strip">
        <div className="section-heading">
          <div>
            <p className="eyebrow">เริ่มต้นใช้งาน</p>
            <h2>เริ่มหาคู่ได้ใน 3 ขั้นตอน</h2>
          </div>
        </div>
        <div className="steps-grid">
          {onboardingSteps.map((step, index) => (
            <article className="feature-box step-card" key={step.title}>
              <span className="step-index">0{index + 1}</span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="pricing-preview">
        <div className="section-heading">
          <div>
            <p className="eyebrow">แพ็กเกจราคา</p>
            <h2>เลือกแพ็กเกจที่ตรงกับจังหวะความสัมพันธ์ของคุณ</h2>
          </div>
          <Link to="/pricing">ดูรายละเอียดทั้งหมด</Link>
        </div>
        <div className="pricing-preview__grid">
          {pricingPlans.map((plan) => (
            <article className={`pricing-card${plan.plan === 'Premium' ? ' pricing-card--featured' : ''}`} key={plan.plan}>
              <p className="eyebrow">{plan.plan}</p>
              <strong>{plan.price}</strong>
              <span>{plan.period}</span>
              <p>{plan.description}</p>
              <ul>
                {plan.features.map((feature) => (
                  <li key={feature}>
                    <CheckCircle2 size={16} />
                    {feature}
                  </li>
                ))}
              </ul>
              <Link to="/pricing">
                <Button fullWidth variant={plan.plan === 'Premium' ? 'primary' : 'secondary'}>
                  {plan.cta}
                </Button>
              </Link>
            </article>
          ))}
        </div>
      </section>

      <ServicesTeaser />

      <section className="profiles-strip">
        <div className="section-heading">
          <div>
            <p className="eyebrow">สมาชิกเด่น</p>
            <h2>สมาชิกพรีเมียมที่น่าสนใจในสัปดาห์นี้</h2>
          </div>
          <Link to="/app/discover">ดูทั้งหมด</Link>
        </div>
        <div className="profile-grid marketing-profiles">
          {profilePool.map((profile) => (
            <article className="profile-card compact" key={profile.id}>
              <img src={profile.image} alt={profile.name} />
              <div className="profile-card__body">
                <div>
                  <strong>
                    {profile.name}, {profile.age}
                  </strong>
                  <p>{profile.city}</p>
                </div>
                <button className="chip-action">ดูโปรไฟล์</button>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="security-strip">
        <div className="feature-box feature-box--dark">
          <ShieldCheck />
          <h3>ให้ความปลอดภัยเป็นจุดขายหลัก</h3>
          <p>สมาชิกตัดสินใจสมัครง่ายขึ้นเมื่อรู้ว่ามีทั้งการยืนยันตัวตน การตรวจสอบโปรไฟล์ และทีมดูแลที่เข้าถึงได้จริง</p>
        </div>
        <div className="feature-box">
          <Lock />
          <h3>สิ่งที่ช่วยสร้างความเชื่อใจ</h3>
          <div className="check-list">
            {safetyItems.map((item) => (
              <div className="check-list__item" key={item}>
                <CheckCircle2 size={18} />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="feature-box">
          <Users />
          <h3>เหมาะกับผู้ใช้ที่จริงจัง</h3>
          <p>ที่นี่ไม่ใช่แค่ปัดผ่านไปมา แต่เป็นแพลตฟอร์มที่ช่วยให้คนตรงเป้าหมายมาเจอกันได้ง่ายขึ้น</p>
        </div>
      </section>

      <section className="faq-strip">
        <div className="section-heading">
          <div>
            <p className="eyebrow">คำถามที่พบบ่อย</p>
            <h2>ตอบข้อกังวลก่อนเริ่มใช้งาน</h2>
          </div>
        </div>
        <div className="faq-grid">
          {faqs.map((faq) => (
            <article className="panel faq-card" key={faq.question}>
              <div className="faq-card__title">
                <Star size={18} />
                <h3>{faq.question}</h3>
              </div>
              <p>{faq.answer}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="closing-cta">
        <div className="panel panel--gradient">
          <p className="eyebrow">พร้อมเริ่มแล้ว</p>
          <h2>เลือกแพ็กเกจที่ใช่ แล้วเริ่มคุยกับคนที่ตรงใจได้ทันที</h2>
          <p>เริ่มจากแผนฟรี หรืออัปเกรดเพื่อปลดล็อกโอกาสในการแมตช์ที่มากขึ้นตั้งแต่วันนี้</p>
          <div className="hero-actions">
            <Link to="/auth?tab=register">
              <Button>สมัครสมาชิก</Button>
            </Link>
            <Link to="/pricing">
              <Button variant="secondary">ดูแพ็กเกจทั้งหมด</Button>
            </Link>
          </div>
        </div>
      </section>

      <PublicFooter />
    </main>
  );
}
