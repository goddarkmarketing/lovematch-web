import { useState } from 'react';
import { AppSidebar } from '../../components/layout/AppSidebar';
import { Button } from '../../components/shared/Button';

export function SettingsPage() {
  const [notifications, setNotifications] = useState(true);
  const [showOnline, setShowOnline] = useState(true);
  const [translation, setTranslation] = useState(false);

  return (
    <div className="app-shell">
      <AppSidebar mode="user" />
      <main className="app-main">
        <section className="section-heading">
          <div>
            <h1>ตั้งค่าบัญชี</h1>
            <p>จัดการความเป็นส่วนตัว การแจ้งเตือน และ preference สำหรับการค้นหาคู่</p>
          </div>
        </section>

        <section className="settings-grid">
          <article className="panel">
            <h2>ความเป็นส่วนตัว</h2>
            <label className="switch-row">
              <span>แสดงสถานะออนไลน์</span>
              <input type="checkbox" checked={showOnline} onChange={(event) => setShowOnline(event.target.checked)} />
            </label>
            <label className="switch-row">
              <span>การแจ้งเตือนข้อความใหม่</span>
              <input type="checkbox" checked={notifications} onChange={(event) => setNotifications(event.target.checked)} />
            </label>
            <label className="switch-row">
              <span>เปิดแปลอัตโนมัติในแชท</span>
              <input type="checkbox" checked={translation} onChange={(event) => setTranslation(event.target.checked)} />
            </label>
            <Button>บันทึกการตั้งค่า</Button>
          </article>
          <article className="panel panel--gradient">
            <h2>บัญชีของคุณปลอดภัย 100%</h2>
            <p>โปรไฟล์ของคุณผ่านการยืนยันแล้ว สมาชิกคนอื่นสามารถเชื่อถือคุณได้มากขึ้น</p>
          </article>
        </section>
      </main>
    </div>
  );
}
