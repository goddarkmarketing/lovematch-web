import { Heart, Mail, Sparkles, Wallet } from 'lucide-react';
import { Link } from 'react-router-dom';
import { AppSidebar } from '../../components/layout/AppSidebar';
import { activityFeed, profilePool } from '../../data/mockData';
import { useLoveMatch } from '../../context/LoveMatchContext';

export function UserDashboardPage() {
  const { state } = useLoveMatch();

  return (
    <div className="app-shell">
      <AppSidebar mode="user" />
      <main className="app-main">
        <section className="hero-banner">
          <p className="chip">ยินดีต้อนรับกลับมา</p>
          <p className="chip chip--gold">ยืนยันตัวตนแล้ว</p>
          <h1>สวัสดีคุณ {state.currentUser?.name ?? 'เมริซา'}, พร้อมหาแมตช์วันนี้หรือยัง?</h1>
        </section>

        <section className="stats-grid">
          <article className="stat-card">
            <Heart />
            <strong>{state.stats.likes}</strong>
            <p>คนที่ถูกใจเรา</p>
          </article>
          <article className="stat-card">
            <Sparkles />
            <strong>{state.stats.newMatches}</strong>
            <p>แมตช์ใหม่</p>
          </article>
          <article className="stat-card">
            <Mail />
            <strong>{state.stats.unreadMessages}</strong>
            <p>ข้อความใหม่</p>
          </article>
          <article className="stat-card">
            <Wallet />
            <strong>{state.stats.credits}</strong>
            <p>เครดิตที่มี</p>
          </article>
        </section>

        <section className="dashboard-layout">
          <div>
            <div className="quick-actions">
              <Link to="/app/discover">
                <button>ค้นหาคู่</button>
              </Link>
              <Link to="/app/chat">
                <button>แชท</button>
              </Link>
              <Link to="/app/wallet">
                <button>เติมเครดิต</button>
              </Link>
              <Link to="/app/chat">
                <button>ส่งของขวัญ</button>
              </Link>
            </div>

            <div className="section-heading">
              <h2>โปรไฟล์แนะนำโดย AI</h2>
            </div>
            <div className="profile-grid">
              {profilePool.slice(0, 3).map((profile) => (
                <article key={profile.id} className="profile-card compact">
                  <img src={profile.image} alt={profile.name} />
                  <div className="profile-card__body">
                    <div>
                      <span className="match-pill">MATCH {profile.matchScore}%</span>
                      <strong>
                        {profile.name}, {profile.age}
                      </strong>
                      <p>
                        {profile.city} • {profile.interests[0]}
                      </p>
                    </div>
                    <Link className="chip-action" to="/app/discover">
                      ดูโปรไฟล์
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <aside className="right-rail">
            <div className="panel">
              <h3>กิจกรรมล่าสุด</h3>
              <div className="activity-list">
                {activityFeed.map((activity) => (
                  <article key={activity.id} className="activity-item">
                    <div className={`activity-icon activity-icon--${activity.icon}`} />
                    <div>
                      <strong>{activity.title}</strong>
                      <p>{activity.detail}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
            <div className="panel panel--gradient">
              <h3>อัปเกรดเป็น VIP</h3>
              <p>ดูว่าใครกดถูกใจคุณ ย้อนกลับการปัด และส่งข้อความหากันได้ทันทีโดยไม่ต้องรอแมตช์</p>
              <Link className="mini-cta" to="/pricing">
                เริ่มเลยเพียง 199.-
              </Link>
            </div>
          </aside>
        </section>
      </main>
    </div>
  );
}
