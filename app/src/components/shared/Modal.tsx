import type { PropsWithChildren } from 'react';

interface ModalProps {
  open: boolean;
  title: string;
  onClose: () => void;
}

export function Modal({ open, title, onClose, children }: PropsWithChildren<ModalProps>) {
  if (!open) return null;
  return (
    <div className="lm-modal-backdrop" role="presentation" onClick={onClose}>
      <div className="lm-modal" role="dialog" aria-modal="true" aria-label={title} onClick={(event) => event.stopPropagation()}>
        <div className="lm-modal__header">
          <h3>{title}</h3>
          <button className="lm-icon-button" onClick={onClose} aria-label="ปิดหน้าต่าง">
            ×
          </button>
        </div>
        {children}
      </div>
    </div>
  );
}
