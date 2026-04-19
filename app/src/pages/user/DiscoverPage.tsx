import { Heart, MapPin, ShieldCheck, Sparkles, Star, Users, X } from 'lucide-react';
import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { AppSidebar } from '../../components/layout/AppSidebar';
import { EmptyState } from '../../components/shared/EmptyState';
import { useLoveMatch } from '../../context/LoveMatchContext';

const cityOptions = ['กรุงเทพมหานคร', 'เชียงใหม่', 'ทั้งหมด'] as const;

export function DiscoverPage() {
  const { state, likeProfile, passProfile } = useLoveMatch();
  const [ageRange, setAgeRange] = useState<[number, number]>([18, 35]);
  const [city, setCity] = useState<(typeof cityOptions)[number]>('กรุงเทพมหานคร');
  const [onlineOnly, setOnlineOnly] = useState(true);
  const [verifiedOnly, setVerifiedOnly] = useState(false);
  const [viewMode, setViewMode] = useState<'stack' | 'grid'>('stack');

  const hiddenIds = useMemo(() => new Set([...state.likedProfileIds, ...state.passedProfileIds]), [state.likedProfileIds, state.passedProfileIds]);

  const filtered = state.profiles.filter((profile) => {
    if (hiddenIds.has(profile.id)) return false;
    if (profile.age < ageRange[0] || profile.age > ageRange[1]) return false;
    if (city !== 'ทั้งหมด' && profile.city !== city) return false;
    if (onlineOnly && !profile.online) return false;
    if (verifiedOnly && !profile.verified) return false;
    return true;
  });

  const current = filtered[0];
  const verifiedCount = state.profiles.filter((profile) => profile.verified).length;
  const onlineCount = state.profiles.filter((profile) => profile.online).length;

  return (
    <div className="app-shell app-shell--discover">
      <AppSidebar mode="user" />
      <main className="app-main discover-page">
        <div className="discover-toolbar discover-toolbar--modern">
          <div>
            <p className="eyebrow">Discover</p>
            <h1>คัดแมตช์ที่ใช่ด้วยตัวกรองที่ดูดีและใช้งานเร็ว</h1>
          </div>
          <div className="toggle-group discover-view-toggle">
            <button className={viewMode === 'stack' ? 'is-active' : ''} onClick={() => setViewMode('stack')}>
              Card Stack
            </button>
            <button className={viewMode === 'grid' ? 'is-active' : ''} onClick={() => setViewMode('grid')}>
              Grid View
            </button>
          </div>
        </div>

        <section className="discover-summary">
          <article className="discover-summary__card">
            <Users size={20} />
            <div>
              <strong>{filtered.length}</strong>
              <span>โปรไฟล์ตามตัวกรอง</span>
            </div>
          </article>
          <article className="discover-summary__card">
            <Sparkles size={20} />
            <div>
              <strong>{onlineCount}</strong>
              <span>ออนไลน์ตอนนี้</span>
            </div>
          </article>
          <article className="discover-summary__card">
            <ShieldCheck size={20} />
            <div>
              <strong>{verifiedCount}</strong>
              <span>ยืนยันตัวตนแล้ว</span>
            </div>
          </article>
          <article className="discover-summary__card discover-summary__card--location">
            <MapPin size={20} />
            <div>
              <strong>{city}</strong>
              <span>พื้นที่ที่กำลังค้นหา</span>
            </div>
          </article>
        </section>

        <div className="discover-layout">
          <section className="discover-stage">
            {filtered.length > 0 ? (
              viewMode === 'stack' ? (
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
                    <button className="round-action" onClick={() => likeProfile(current.id)} aria-label="super like">
                      <Star />
                    </button>
                  </div>
                </>
              ) : (
                <div className="profile-grid discover-grid">
                  {filtered.map((profile) => (
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
                        <div className="discover-grid__actions">
                          <button className="chip-action" onClick={() => passProfile(profile.id)}>
                            ผ่าน
                          </button>
                          <button className="chip-action chip-action--strong" onClick={() => likeProfile(profile.id)}>
                            ถูกใจ
                          </button>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              )
            ) : (
              <EmptyState title="ไม่พบโปรไฟล์ที่ตรงกับตัวกรอง" description="ลองขยายช่วงอายุหรือปิดตัวกรองออนไลน์เพื่อดูผลลัพธ์เพิ่มเติม" />
            )}
          </section>

          <aside className="filter-panel filter-panel--modern">
            <div className="filter-panel__header">
              <div>
                <p className="eyebrow">Smart Filters</p>
                <h2>ตัวกรอง</h2>
              </div>
              <span className="chip">สดใหม่</span>
            </div>

            <div className="filter-panel__section">
              <label className="filter-field">
                <span className="filter-field__label">ช่วงอายุ</span>
                <input
                  className="filter-range"
                  type="range"
                  min="18"
                  max="50"
                  value={ageRange[1]}
                  onChange={(event) => setAgeRange([18, Number(event.target.value)])}
                />
                <div className="filter-range__meta">
                  <strong>
                    {ageRange[0]} - {ageRange[1]} ปี
                  </strong>
                  <span>โฟกัสกลุ่มที่มีโอกาสคุยต่อได้จริง</span>
                </div>
              </label>

              <label className="filter-field">
                <span className="filter-field__label">จังหวัด</span>
                <select value={city} onChange={(event) => setCity(event.target.value as (typeof cityOptions)[number])}>
                  {cityOptions.map((option) => (
                    <option key={option}>{option}</option>
                  ))}
                </select>
              </label>
            </div>

            <div className="filter-panel__section">
              <label className="switch-card">
                <div>
                  <span className="switch-card__title">สถานะออนไลน์</span>
                  <small>เน้นโปรไฟล์ที่พร้อมเริ่มคุยตอนนี้</small>
                </div>
                <span className="switch-control">
                  <input type="checkbox" checked={onlineOnly} onChange={(event) => setOnlineOnly(event.target.checked)} />
                  <span className="switch-slider" />
                </span>
              </label>

              <label className="switch-card">
                <div>
                  <span className="switch-card__title">ยืนยันตัวตนแล้ว</span>
                  <small>คัดเฉพาะโปรไฟล์ที่ผ่านการตรวจสอบ</small>
                </div>
                <span className="switch-control">
                  <input type="checkbox" checked={verifiedOnly} onChange={(event) => setVerifiedOnly(event.target.checked)} />
                  <span className="switch-slider" />
                </span>
              </label>
            </div>

            <div className="premium-box premium-box--discover">
              <p>PREMIUM FEATURE</p>
              <h3>ดูว่าใครกำลังแอบชอบคุณบ้าง!</h3>
              <span>ปลดล็อก insight, priority boost และตัวกรองเชิงลึกในหน้าเดียว</span>
              <Link to="/pricing">อัปเกรดตอนนี้</Link>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}
