import { useState } from 'react';
import { AppSidebar } from '../../components/layout/AppSidebar';
import { EmptyState } from '../../components/shared/EmptyState';
import { useLoveMatch } from '../../context/LoveMatchContext';

export function AdminMembersPage() {
  const { state, reviewMember } = useLoveMatch();
  const [query, setQuery] = useState('');
  const [verification, setVerification] = useState('ทั้งหมด');

  const filteredMembers = state.members.filter((member) => {
    const byQuery = !query || member.name.includes(query) || member.email.includes(query);
    const byVerification = verification === 'ทั้งหมด' || member.verification === verification;
    return byQuery && byVerification;
  });

  return (
    <div className="app-shell">
      <AppSidebar mode="admin" />
      <main className="app-main">
        <section className="section-heading">
          <div>
            <h1>จัดการสมาชิก</h1>
            <p>ดูแลความเรียบร้อยและตรวจสอบสมาชิกของชุมชน LoveMatch</p>
          </div>
        </section>
        <section className="dashboard-layout">
          <div>
            <div className="panel filters-panel">
              <input className="search-input" placeholder="ชื่อ หรือ อีเมล" value={query} onChange={(event) => setQuery(event.target.value)} />
              <select value={verification} onChange={(event) => setVerification(event.target.value)}>
                <option>ทั้งหมด</option>
                <option value="verified">verified</option>
                <option value="pending">pending</option>
                <option value="rejected">rejected</option>
              </select>
            </div>
            <div className="panel">
              {filteredMembers.length > 0 ? (
                <div className="table-wrap">
                  <table>
                    <thead>
                      <tr>
                        <th>สมาชิก</th>
                        <th>วันที่สมัคร</th>
                        <th>แพ็กเกจ</th>
                        <th>การยืนยัน</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredMembers.map((member) => (
                        <tr key={member.id}>
                          <td>{member.name}</td>
                          <td>{member.joinedAt}</td>
                          <td>{member.plan}</td>
                          <td>{member.verification}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : (
                <EmptyState title="ไม่พบสมาชิก" description="ลองเปลี่ยนคำค้นหาหรือสถานะเพื่อดูรายการอื่น" />
              )}
            </div>
          </div>
          <aside className="right-rail">
            <div className="panel">
              <div className="section-heading">
                <h3>คิวยืนยันตัวตน</h3>
                <span className="chip">{state.pendingVerifications.length} รอตรวจ</span>
              </div>
              {state.pendingVerifications.length > 0 ? (
                state.pendingVerifications.map((member) => (
                  <article key={member.id} className="verification-card">
                    <img src={member.idCardImage} alt={member.name} />
                    <div>
                      <strong>{member.name}</strong>
                      <p>ส่งเมื่อ 10 นาทีที่แล้ว</p>
                    </div>
                    <div className="split-actions">
                      <button onClick={() => reviewMember(member.id, 'failed')}>ปฏิเสธ</button>
                      <button className="is-primary" onClick={() => reviewMember(member.id, 'approved')}>
                        อนุมัติ
                      </button>
                    </div>
                  </article>
                ))
              ) : (
                <EmptyState title="ไม่มีรายการค้างตรวจ" description="ระบบผ่านการ review ล่าสุดเรียบร้อยแล้ว" />
              )}
            </div>
          </aside>
        </section>
      </main>
    </div>
  );
}
