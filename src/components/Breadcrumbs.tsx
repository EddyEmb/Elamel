import React from 'react';
import { useRouter } from '../context/RouterContext';
import { useI18n } from '../context/I18nContext';
import { ChevronRight, Home } from 'lucide-react';

export const Breadcrumbs: React.FC = () => {
  const { breadcrumbs, navigate } = useRouter();
  const { t } = useI18n();

  if (breadcrumbs.length <= 1) {
    return null;
  }

  const getCrumbLabel = (crumb: { label: string; href: string }) => {
    if (crumb.href === '/') return t('nav.home');
    if (crumb.href.startsWith('/colors')) return t('brand.subbrands.colors');
    if (crumb.href.startsWith('/goodies')) return t('brand.subbrands.goodies');
    if (crumb.href.startsWith('/moments')) return t('brand.subbrands.moments');
    if (crumb.href.startsWith('/about')) return t('nav.about');
    if (crumb.href.startsWith('/contact')) return t('nav.contact');
    if (crumb.href.startsWith('/search')) return t('nav.search');
    if (crumb.href.startsWith('/accessibility')) return t('nav.accessibility');
    if (crumb.href.startsWith('/privacy')) return t('footer.links.privacy');
    if (crumb.href.startsWith('/terms')) return t('footer.links.terms');
    if (crumb.href.startsWith('/sitemap')) return t('footer.links.sitemap');
    return crumb.label;
  };

  return (
    <nav className="breadcrumbs-nav" aria-label="Breadcrumbs navigation">
      <div className="container">
        <ol className="breadcrumbs-list">
          {breadcrumbs.map((crumb, idx) => {
            const isLast = idx === breadcrumbs.length - 1;
            const label = getCrumbLabel(crumb);

            return (
              <li key={crumb.href} className="breadcrumbs-item">
                {idx === 0 ? (
                  <button
                    onClick={() => navigate(crumb.href)}
                    className="breadcrumb-home-btn"
                    aria-label={t('nav.home')}
                  >
                    <Home size={15} />
                    <span>{t('nav.home')}</span>
                  </button>
                ) : isLast ? (
                  <span className="breadcrumbs-current" aria-current="page">
                    {label}
                  </span>
                ) : (
                  <button
                    onClick={() => navigate(crumb.href)}
                    className="breadcrumb-btn"
                  >
                    {label}
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
