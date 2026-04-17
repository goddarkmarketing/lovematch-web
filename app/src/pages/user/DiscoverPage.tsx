import { Heart, Star, X } from 'lucide-react';
import { useState } from 'react';
import { AppSidebar } from '../../components/layout/AppSidebar';
import { EmptyState } from '../../components/shared/EmptyState';
import { useLoveMatch } from '../../context/LoveMatchContext';

export function DiscoverPage() {
  const { state, likeProfile, passProfile } = useLoveMatch();
  const [ageRange, setAgeRange] = useState<[number, number]>([18, 35]);
  const [city, setCity] = useState('กรุงเทพมหานคร');
  const [onlineOnly, setOnlineOnly] = useState(true);
  const [verifiedOnly, setVerifiedOnly] = useState(false);

  const filtered = state.profiles.filter((profile) => {
    if (profile.age < ageRange[0] || profile.age > ageRange[1]) return false;
    if (city !== 'ทั้งหมด' && profile.city !== city) return false;
    if (onlineOnly && !profile.online) return false;
    if (verifiedOnly && !profile.verified) return false;
    return true;
  });

  const current = filtered[0];

  return (
    <div className="app-shell app-shell--discover">
      <AppSidebar mode="user" />
      <main className="app-main">
        <div className="discover-toolbar">
          <div className="toggle-group">
            <button className="is-active">Card Stack</button>
            <button>Grid View</button>
          </div>
          <p>แสดงผลคนโสดใน{city}</p>
        </div>

        <div className="discover-layout">
          <section className="discover-stage">
            {current ? (
              <>
                <article className="profile-card feature-card">
                  <img src={current.image} alt={current.name} />
                  <div className="profile-card__overlay">
                    <div>
                      <h2>
                        {current.name}, {current.age}
                      </h2>
                      <p>
                        {current.city} • ห่างไป {current.distanceKm} กม.
                      </p>
                      <div className="tag-list">
                        {current.interests.map((interest) => (
                          <span key={interest}>{interest}</span>
                        ))}
                      </div>
                    </div>
                    <div className="match-badge">{current.matchScore}% AI Match</div>
                  </div>
                </article>
                <div className="action-bar">
                  <button className="round-action" onClick={() => passProfile(current.id)} aria-label="ไม่สนใจ">
                    <X />
                  </button>
                  <button className="round-action round-action--primary" onClick={() => likeProfile(current.id)} aria-label="ถูกใจ">
                    <Heart />
                  </button>
                  <button className="round-action" aria-label="super like">
                    <Star />
                  </button>
                </div>
              </>
            ) : (
              <EmptyState title="ไม่พบโปรไฟล์ที่ตรงกับตัวกรอง" description="ลองขยายช่วงอายุหรือปิดตัวกรองออนไลน์เพื่อดูผลลัพธ์เพิ่มเติม" />
            )}
          </section>

          <aside className="filter-panel">
            <h2>ตัวกรอง</h2>
            <label>
              ช่วงอายุ
              <input type="range" min="18" max="50" value={ageRange[1]} onChange={(event) => setAgeRange([18, Number(event.target.value)])} />
              <strong>
                {ageRange[0]} - {ageRange[1]} ปี
              </strong>
            </label>
            <label>
              จังหวัด
              <select value={city} onChange={(event) => setCity(event.target.value)}>
                <option>กรุงเทพมหานคร</option>
                <option>เชียงใหม่</option>
                <option>ทั้งหมด</option>
              </select>
            </label>
            <label className="switch-row">
              <span>สถานะออนไลน์</span>
              <input type="checkbox" checked={onlineOnly} onChange={(event) => setOnlineOnly(event.target.checked)} />
            </label>
            <label className="switch-row">
              <span>ยืนยันตัวตนแล้ว</span>
              <input type="checkbox" checked={verifiedOnly} onChange={(event) => setVerifiedOnly(event.target.checked)} />
            </label>
            <div className="premium-box">
              <p>PREMIUM FEATURE</p>
              <h3>ดูว่าใครกำลังแอบชอบคุณบ้าง!</h3>
              <button>อัปเกรดตอนนี้</button>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}
