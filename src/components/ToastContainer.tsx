import React from 'react';
import { useToast } from '../context/ToastContext';
import { CheckCircle2, Info, AlertTriangle, X } from 'lucide-react';

export const ToastContainer: React.FC = () => {
  const { toasts, removeToast } = useToast();

  if (toasts.length === 0) return null;

  return (
    <div
      className="toast-container"
      role="region"
      aria-label="Notification alerts"
      aria-live="polite"
    >
      {toasts.map((t) => {
        return (
          <div
            key={t.id}
            className={`toast-card toast-card-${t.type || 'success'}`}
            role="status"
          >
            <div className="toast-icon-wrap">
              {t.type === 'success' && <CheckCircle2 size={20} color="#10B981" />}
              {t.type === 'dietary' && <AlertTriangle size={20} color="#D97706" />}
              {t.type === 'info' && <Info size={20} color="#0284C7" />}
              {(!t.type || t.type === 'warning') && <AlertTriangle size={20} color="#D97706" />}
            </div>

            <div className="toast-text-wrap">
              <strong className="toast-title">{t.title}</strong>
              <p className="toast-message">{t.message}</p>
            </div>

            <button
              onClick={() => removeToast(t.id)}
              className="toast-close-btn"
              aria-label="Dismiss notification"
            >
              <X size={15} />
            </button>
          </div>
        );
      })}

      <style>{`
        .toast-icon-wrap {
          flex-shrink: 0;
          margin-top: 0.1rem;
        }
        .toast-text-wrap {
          flex-grow: 1;
        }
        .toast-title {
          display: block;
          font-family: var(--font-heading);
          font-size: 0.9375rem;
          color: var(--color-text-main);
          margin-bottom: 0.15rem;
        }
        .toast-message {
          font-size: 0.8125rem;
          color: var(--color-text-muted);
          line-height: 1.4;
          margin: 0;
        }
        .toast-close-btn {
          background: none;
          border: none;
          color: var(--color-text-light);
          cursor: pointer;
          padding: 0.2rem;
          border-radius: var(--radius-sm);
        }
        .toast-close-btn:hover {
          color: var(--color-text-main);
        }
      `}</style>
    </div>
  );
};
