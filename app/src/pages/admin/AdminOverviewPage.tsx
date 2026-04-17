import { AppSidebar } from '../../components/layout/AppSidebar';
import { useLoveMatch } from '../../context/LoveMatchContext';

export function AdminOverviewPage() {
  const { state } = useLoveMatch();
  return (
    <div className="app-shell">
      <AppSidebar mode="admin" />
      <main className="app-main">
        <section className="section-heading">
          <div>
            <h1>ภาพรวมระบบ</h1>
            <p>ยินดีต้อนรับกลับ นี่คือข้อมูลสรุปประจำวันของคุณ</p>
          </div>
          <div className="toolbar-actions">
            <button className="chip-action">วันที่: 24 พ.ค. 2024</button>
            <button className="chip-action chip-action--strong">ส่งออกรายงาน</button>
          </div>
        </section>
        <section className="alert-row">
          <article className="alert alert--danger">พบการใช้งานผิดปกติจาก IP: 192.168.x.x ระบบทำการระงับชั่วคราว</article>
          <article className="alert alert--warning">มียอดการเงินรอตรวจสอบ 5 รายการ สำหรับแพ็กเกจ VIP รายปี</article>
        </section>
        <section className="stats-grid">
          <article className="stat-card">
            <strong>15,420</strong>
            <p>สมาชิกทั้งหมด</p>
          </article>
          <article className="stat-card">
            <strong>฿1.2M</strong>
            <p>รายได้เดือนนี้</p>
          </article>
          <article className="stat-card">
            <strong>842</strong>
            <p>สมาชิกออนไลน์</p>
          </article>
          <article className="stat-card">
            <strong>{state.pendingVerifications.length}</strong>
            <p>เคสรอตรวจสอบ</p>
          </article>
        </section>
        <section className="dashboard-layout">
          <div className="panel chart-panel">
            <div className="section-heading">
              <h2>สถิติรายได้ย้อนหลัง 7 วัน</h2>
              <button className="chip-action">พฤษภาคม 2024</button>
            </div>
            <div className="chart-placeholder">
              {[120, 180, 240, 160, 210, 140, 230].map((value, index) => (
                <span key={index} style={{ height: `${value}px` }} />
              ))}
            </div>
          </div>
          <aside className="panel donut-panel">
            <h2>ประเภทสมาชิก</h2>
            <div className="donut">100%</div>
            <ul className="legend">
              <li>Free 60%</li>
              <li>Premium 25%</li>
              <li>VIP 15%</li>
            </ul>
          </aside>
        </section>
        <section className="panel">
          <div className="section-heading">
            <h2>รายการสมาชิกสมัครใหม่ล่าสุด</h2>
          </div>
          <div className="table-wrap">
            <table>
              <thead>
                <tr>
                  <th>สมาชิก</th>
                  <th>แพ็กเกจ</th>
                  <th>สถานะ</th>
                  <th>วันที่สมัคร</th>
                </tr>
              </thead>
              <tbody>
                {state.members.map((member) => (
                  <tr key={member.id}>
                    <td>{member.name}</td>
                    <td>{member.plan}</td>
                    <td>{member.verification}</td>
                    <td>{member.joinedAt}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </div>
  );
}
