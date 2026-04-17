import { AuthForms } from '../../components/forms/AuthForms';

export function AuthPage() {
  return (
    <main className="auth-page">
      <section className="auth-visual">
        <div className="auth-overlay">
          <div>
            <h1>เริ่มต้นการเดินทางตามหารักแท้</h1>
            <p>ให้ LoveMatch เป็นกุญแจสำคัญที่จะเปิดประตูสู่ความสัมพันธ์ที่ยั่งยืนและมีความหมายสำหรับคุณ</p>
          </div>
          <div className="floating-proof">
            <div className="avatar-stack">
              <span />
              <span />
              <span />
            </div>
            <strong>กว่า 10,000+ คู่ที่พบกันผ่านเรา</strong>
          </div>
        </div>
      </section>
      <section className="auth-panel">
        <AuthForms />
      </section>
    </main>
  );
}
