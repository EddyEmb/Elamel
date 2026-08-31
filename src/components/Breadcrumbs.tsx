import React from 'react';
import { useRouter } from '../context/RouterContext';
import { ChevronRight, Home } from 'lucide-react';

export const Breadcrumbs: React.FC = () => {
  const { breadcrumbs, navigate } = useRouter();

  if (breadcrumbs.length <= 1) {
    return null;
  }

  return (
    <nav className="breadcrumbs-nav" aria-label="Breadcrumbs navigation">
      <div className="container">
        <ol className="breadcrumbs-list">
          {breadcrumbs.map((crumb, idx) => {
            const isLast = idx === breadcrumbs.length - 1;

            return (
              <li key={crumb.href} className="breadcrumbs-item">
                {idx === 0 ? (
                  <button
                    onClick={() => navigate(crumb.href)}
                    className="breadcrumb-home-btn"
                    aria-label="Return to Home"
                  >
                    <Home size={15} />
                    <span>Home</span>
                  </button>
                ) : isLast ? (
                  <span className="breadcrumbs-current" aria-current="page">
                    {crumb.label}
                  </span>
                ) : (
                  <button
                    onClick={() => navigate(crumb.href)}
                    className="breadcrumb-btn"
                  >
                    {crumb.label}
                  </button>
                )}

                {!isLast && <ChevronRight size={14} className="breadcrumb-separator" aria-hidden="true" />}
              </li>
            );
          })}
        </ol>
      </div>

      <style>{`
        .breadcrumb-home-btn,
        .breadcrumb-btn {
          background: none;
          border: none;
          color: var(--color-text-muted);
          font-family: var(--font-body);
          font-size: 0.875rem;
          cursor: pointer;
          padding: 0.2rem 0.4rem;
          border-radius: var(--radius-sm);
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          transition: color var(--transition-fast);
        }
        .breadcrumb-home-btn:hover,
        .breadcrumb-btn:hover {
          color: var(--color-primary);
          text-decoration: underline;
        }
        .breadcrumb-separator {
          color: var(--color-text-light);
        }
      `}</style>
    </nav>
  );
};
