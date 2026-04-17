import { useState } from 'react';
import { AppSidebar } from '../../components/layout/AppSidebar';
import { EmptyState } from '../../components/shared/EmptyState';
import { useLoveMatch } from '../../context/LoveMatchContext';

export function AdminTransactionsPage() {
  const { state } = useLoveMatch();
  const [query, setQuery] = useState('');
  const [status, setStatus] = useState('ทั้งหมด');

  const filtered = state.transactions.filter((item) => {
    const byQuery = !query || item.title.includes(query) || item.id.includes(query);
    const byStatus = status === 'ทั้งหมด' || item.status === status;
    return byQuery && byStatus;
  });

  return (
    <div className="app-shell">
      <AppSidebar mode="admin" />
      <main className="app-main">
        <section className="section-heading">
          <div>
            <h1>รายงานธุรกรรม</h1>
            <p>ตรวจสอบและจัดการประวัติการชำระเงินทั้งหมดในระบบ</p>
          </div>
        </section>
        <section className="panel filters-panel">
          <input className="search-input" placeholder="ค้นหาเลขที่คำสั่งซื้อ..." value={query} onChange={(event) => setQuery(event.target.value)} />
          <select value={status} onChange={(event) => setStatus(event.target.value)}>
            <option>ทั้งหมด</option>
            <option value="success">success</option>
            <option value="pending">pending</option>
            <option value="failed">failed</option>
          </select>
        </section>
        <section className="panel">
          {filtered.length > 0 ? (
            <div className="table-wrap">
              <table>
                <thead>
                  <tr>
                    <th>เลขที่</th>
                    <th>รายการ</th>
                    <th>จำนวนเงิน</th>
                    <th>ช่องทาง</th>
                    <th>สถานะ</th>
                    <th>วันที่</th>
                  </tr>
                </thead>
                <tbody>
                  {filtered.map((entry) => (
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
          ) : (
            <EmptyState title="ไม่พบธุรกรรมที่ตรงเงื่อนไข" description="ลองเปลี่ยนคำค้นหาหรือสถานะเพื่อดูข้อมูลเพิ่มเติม" />
          )}
        </section>
      </main>
    </div>
  );
}
