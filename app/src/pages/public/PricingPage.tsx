import { CheckCircle2, ShieldCheck } from 'lucide-react';
import { PublicHeader } from '../../components/layout/PublicHeader';
import { Button } from '../../components/shared/Button';
import { useLoveMatch } from '../../context/LoveMatchContext';

const plans = [
  { id: 'free', title: 'Free', price: '฿0', features: ['ไลก์ได้ 10 ครั้ง/วัน', 'แชทได้เมื่อแมทช์'] },
  { id: 'premium', title: 'Premium', price: '฿499', features: ['ไลก์ไม่จำกัด', 'แชทก่อนแมทช์ได้', 'เห็นคนกดไลก์'] },
  { id: 'vip', title: 'VIP', price: '฿1,999', features: ['Boost โปรไฟล์', 'AI Anti-Scam', 'ที่ปรึกษาแมทช์ส่วนตัว'] },
] as const;

export function PricingPage() {
  const { updatePlan } = useLoveMatch();

  return (
    <main className="marketing-page">
      <PublicHeader />
      <section className="pricing-hero">
        <h1>
          ยกระดับความรักของคุณ
          <br />
          ด้วยแพ็กเกจพรีเมียม
        </h1>
        <p>ค้นพบประสบการณ์การหาคู่ที่ลึกขึ้น พร้อม features ที่ช่วยให้คุยกับคนที่ใช่ได้รวดเร็วและปลอดภัยยิ่งขึ้น</p>
      </section>

      <section className="pricing-grid">
        {plans.map((plan) => (
          <article className={`pricing-card${plan.id === 'premium' ? ' pricing-card--featured' : ''}`} key={plan.id}>
            <p>{plan.title}</p>
            <strong>{plan.price}</strong>
            <span>ต่อเดือน</span>
            <ul>
              {plan.features.map((feature) => (
                <li key={feature}>
                  <CheckCircle2 size={16} />
                  {feature}
                </li>
              ))}
            </ul>
            <Button fullWidth onClick={() => updatePlan(plan.id)}>
              {plan.id === 'free' ? 'ใช้งานฟรีต่อ' : 'อัปเกรดเลย'}
            </Button>
          </article>
        ))}
      </section>

      <section className="security-strip">
        <div className="feature-box">
          <ShieldCheck />
          <h3>ชำระเงินปลอดภัย</h3>
          <p>รองรับบัตรเครดิต PromptPay และ wallet พร้อมสำหรับต่อ payment provider ภายหลัง</p>
        </div>
        <div className="feature-box feature-box--dark">
          <h3>ยังมีข้อสงสัย?</h3>
          <p>ทีมงานสามารถต่อยอดหน้า pricing นี้เป็น paywall จริงและเชื่อม webhook หลังบ้านได้ทันที</p>
        </div>
      </section>
    </main>
  );
}
