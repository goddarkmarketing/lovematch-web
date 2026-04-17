import { useState } from 'react';
import { AppSidebar } from '../../components/layout/AppSidebar';
import { GiftForm } from '../../components/forms/GiftForm';
import { Button } from '../../components/shared/Button';
import { Modal } from '../../components/shared/Modal';
import { useLoveMatch } from '../../context/LoveMatchContext';
import type { GiftItem } from '../../types/domain';

export function AdminGiftsPage() {
  const { state, upsertGift, deleteGift } = useLoveMatch();
  const [open, setOpen] = useState(false);
  const [editing, setEditing] = useState<GiftItem | null>(null);

  return (
    <div className="app-shell">
      <AppSidebar mode="admin" />
      <main className="app-main">
        <section className="section-heading">
          <div>
            <h1>จัดการของขวัญ</h1>
            <p>ดูแลและจัดการคลังของขวัญดิจิทัลทั้งหมดของ LoveMatch</p>
          </div>
          <Button
            onClick={() => {
              setEditing(null);
              setOpen(true);
            }}
          >
            เพิ่มของขวัญใหม่
          </Button>
        </section>

        <section className="dashboard-layout">
          <div className="panel chart-panel">
            <h2>สถิติของขวัญยอดนิยม</h2>
            <div className="chart-placeholder">
              {[60, 95, 140, 80, 110, 70].map((value, index) => (
                <span key={index} style={{ height: `${value * 2}px` }} />
              ))}
            </div>
          </div>
          <aside className="stat-card">
            <strong>1,284</strong>
            <p>ส่งแล้ววันนี้</p>
          </aside>
        </section>

        <section className="gift-grid">
          {state.gifts.map((gift) => (
            <article className="gift-card" key={gift.id}>
              <img src={gift.image} alt={gift.name} />
              <div className="gift-card__body">
                <div>
                  <strong>{gift.name}</strong>
                  <p>{gift.category}</p>
                </div>
                <span>฿ {gift.price}</span>
              </div>
              <div className="split-actions">
                <button
                  onClick={() => {
                    setEditing(gift);
                    setOpen(true);
                  }}
                >
                  แก้ไข
                </button>
                <button onClick={() => deleteGift(gift.id)}>ลบ</button>
              </div>
            </article>
          ))}
          <article className="gift-card gift-card--empty">
            <button
              className="add-card"
              onClick={() => {
                setEditing(null);
                setOpen(true);
              }}
            >
              + เพิ่มรายการใหม่
            </button>
          </article>
        </section>

        <Modal open={open} title={editing ? 'แก้ไขของขวัญ' : 'เพิ่มของขวัญใหม่'} onClose={() => setOpen(false)}>
          <GiftForm
            gift={editing}
            onSubmit={(value) => {
              upsertGift(value);
              setOpen(false);
            }}
          />
        </Modal>
      </main>
    </div>
  );
}
