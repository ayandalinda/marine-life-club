import { useEffect } from 'react';
import { X } from 'lucide-react';

export default function Modal({ open, onClose, title, maxWidth = 520, children, labelledBy }) {
  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  if (!open) return null;

  return (
    <div
      className="overlay show"
      role="dialog"
      aria-modal="true"
      aria-labelledby={labelledBy}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="modal" style={{ maxWidth }}>
        <div className="modal-head">
          <h2 id={labelledBy}>{title}</h2>
          <button className="close-x" onClick={onClose} aria-label="Close">
            <X size={18} />
          </button>
        </div>
        <div className="modal-body">{children}</div>
      </div>
    </div>
  );
}
