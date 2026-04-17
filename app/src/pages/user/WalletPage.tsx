import { AppSidebar } from '../../components/layout/AppSidebar';
import { useLoveMatch } from '../../context/LoveMatchContext';

export function WalletPage() {
  const { state } = useLoveMatch();
  return (
    <div className="app-shell">
      <AppSidebar mode="user" />
      <main className="app-main">
        <section className="section-heading">
          <div>
            <h1>รายงานธุรกรรม</h1>
            <p>ตรวจสอบและจัดการประวัติการชำระเงินทั้งหมดในระบบ</p>
          </div>
          <div className="toolbar-actions">
            <button className="chip-action">ส่งออกเป็น CSV</button>
            <button className="chip-action">พิมพ์ใบสรุป</button>
          </div>
        </section>

        <section className="stats-grid">
          <article className="stat-card stat-card--primary">
            <strong>฿142,500.00</strong>
            <p>ยอดขายรวมวันนี้</p>
          </article>
          <article className="stat-card">
            <strong>1,284</strong>
            <p>ธุรกรรมสำเร็จ</p>
          </article>
          <article className="stat-card">
            <strong>฿3,200</strong>
            <p>ยอดคืนเงิน</p>
          </article>
        </section>

        <section className="panel">
          <div className="table-toolbar">
            <input className="search-input" placeholder="ค้นหาเลขที่คำสั่งซื้อ หรือชื่อสมาชิก..." />
            <div className="table-filters">
              <button className="chip-action">7 วันล่าสุด</button>
              <button className="chip-action">ประเภท: ทั้งหมด</button>
            </div>
          </div>
          <div className="table-wrap">
            <table>
              <thead>
                <tr>
                  <th>เลขที่คำสั่งซื้อ</th>
                  <th>รายการ</th>
                  <th>จำนวนเงิน</th>
                  <th>ช่องทาง</th>
                  <th>สถานะ</th>
                  <th>วันที่</th>
                </tr>
              </thead>
              <tbody>
                {state.walletEntries.map((entry) => (
                  <tr key={entry.id}>
                    <td>{entry.id}</td>
                    <td>{entry.title}</td>
                    <td>฿{entry.amount.toLocaleString()}</td>
                    <td>{entry.channel}</td>
                    <td>
                      <span className={`status-pill status-pill--${entry.status}`}>{entry.status}</span>
                    </td>
                    <td>{entry.createdAt}</td>
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
