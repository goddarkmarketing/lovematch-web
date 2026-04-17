import { Lock, MessageCircleHeart, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PublicHeader } from '../../components/layout/PublicHeader';
import { Button } from '../../components/shared/Button';
import { profilePool } from '../../data/mockData';

export function LandingPage() {
  return (
    <main className="marketing-page">
      <PublicHeader />
      <section className="hero-section">
        <div className="hero-copy">
          <p className="eyebrow">หน้าหลัก</p>
          <h1>
            ค้นหารักแท้
            <br />
            พรีเมียมและปลอดภัย
          </h1>
          <p>ระบบหาคู่ที่ออกแบบประสบการณ์ตั้งแต่ onboarding ถึง chat และ admin workflow ให้พร้อมต่อยอด backend จริงได้ทันที</p>
          <div className="hero-actions">
            <Link to="/auth">
              <Button>เข้าสู่ระบบ</Button>
            </Link>
            <Link to="/pricing">
              <Button variant="secondary">สมัครวันนี้เลย</Button>
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
          <p>ใช้คะแนน match และพฤติกรรมเพื่อดันโปรไฟล์ที่น่าคุยจริงขึ้นมาให้ก่อน</p>
        </div>
        <div className="feature-box">
          <MessageCircleHeart />
          <h3>แชทแบบลื่นไหล</h3>
          <p>รองรับ gifting, read states, conversation list และต่อ API/Realtime ได้ง่าย</p>
        </div>
        <div className="feature-box">
          <Lock />
          <h3>ความปลอดภัยเชิงระบบ</h3>
          <p>มี flow ยืนยันตัวตน, admin moderation และสถานะโปรไฟล์ที่ตรวจสอบได้</p>
        </div>
      </section>

      <section className="profiles-strip">
        <div className="section-heading">
          <div>
            <p className="eyebrow">สมาชิกเด่น</p>
            <h2>สมาชิกพรีเมียมในสัปดาห์นี้</h2>
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
    </main>
  );
}
