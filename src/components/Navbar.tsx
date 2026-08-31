import React, { useState } from 'react';
import { useRouter } from '../context/RouterContext';
import { useCart } from '../context/CartContext';
import { useI18n } from '../context/I18nContext';
import { Search, ShoppingBag, Sliders, Menu, X, Sparkles, Globe } from 'lucide-react';

interface NavbarProps {
  onOpenSearch: () => void;
  onOpenAccessibility: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenSearch, onOpenAccessibility }) => {
  const { currentPath, navigate } = useRouter();
  const { totalItemsCount, openCart } = useCart();
  const { locale, setLocale, t } = useI18n();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: t('nav.home'), path: '/' },
    { label: t('nav.colors'), path: '/colors' },
    { label: t('nav.goodies'), path: '/goodies' },
    { label: t('nav.moments'), path: '/moments-souvenirs' },
    { label: t('nav.about'), path: '/about' },
    { label: t('nav.contact'), path: '/contact' },
  ];

  const handleNavClick = (path: string) => {
    navigate(path);
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="site-header">
      {/* Top Welcome Notification Ribbon */}
      <div className="top-ribbon" role="region" aria-label="Brand Announcement">
        <div className="container top-ribbon-content">
          <span className="top-ribbon-text">
            <Sparkles size={14} className="icon-pulse" />
            {locale === 'pt' ? (
              <>Bem-vindo à <strong>elamel</strong> • Kits de cerâmica seguros, pastelaria de família e lembranças personalizadas</>
            ) : (
              <>Welcome to <strong>elamel</strong> • Safe ceramic kits, family bakery goodies & treasured keepsakes</>
            )}
          </span>
          <div className="top-ribbon-links">
            <button 
              onClick={() => handleNavClick('/accessibility')} 
              className="top-ribbon-btn"
              aria-label="Accessibility statement and controls"
            >
              {t('nav.accessibility')}
            </button>
            <span className="top-ribbon-divider" aria-hidden="true">•</span>
            <button 
              onClick={() => handleNavClick('/contact')} 
              className="top-ribbon-btn"
            >
              {t('nav.contact')}
            </button>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="navbar-container">
        <div className="container navbar-inner">
          {/* Brand Logo Link */}
          <a
            href="#/"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('/');
            }}
            className="navbar-brand"
            aria-label="Elamel Home - Return to main page"
          >
            <img
              src="./logowith-text.png"
              alt="elamel Colors - Pinte • Crie • Desfrute logo"
              className="navbar-logo-img"
            />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="desktop-nav" aria-label="Main Navigation">
            <ul className="nav-list">
              {navLinks.map((link) => {
                const isActive =
                  link.path === '/'
                    ? currentPath === '/'
                    : currentPath.startsWith(link.path);

                return (
                  <li key={link.path} className="nav-item">
                    <button
                      onClick={() => handleNavClick(link.path)}
                      className={`nav-link ${isActive ? 'active' : ''}`}
                      aria-current={isActive ? 'page' : undefined}
                    >
                      {link.label}
                      {isActive && <span className="active-dot" aria-hidden="true" />}
                    </button>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Utility Controls */}
          <div className="navbar-utilities">
            {/* Language Switcher Pill */}
            <div className="lang-switcher-pill" role="group" aria-label="Language Selector">
              <button
                onClick={() => setLocale('pt')}
                className={`lang-btn ${locale === 'pt' ? 'active' : ''}`}
                aria-pressed={locale === 'pt'}
                title="Português de Portugal (Pré-Acordo Ortográfico)"
              >
                🇵🇹 PT
              </button>
              <span className="lang-divider" aria-hidden="true">|</span>
              <button
                onClick={() => setLocale('en')}
                className={`lang-btn ${locale === 'en' ? 'active' : ''}`}
                aria-pressed={locale === 'en'}
                title="English"
              >
                🇬🇧 EN
              </button>
            </div>

            {/* Search Trigger */}
            <button
              onClick={onOpenSearch}
              className="btn-icon"
              title={t('common.searchPlaceholder')}
              aria-label={t('nav.search')}
            >
              <Search size={19} />
            </button>

            {/* Accessibility Settings Trigger */}
            <button
              onClick={onOpenAccessibility}
              className="btn-icon"
              title={t('accessibility.controlsTitle')}
              aria-label={t('nav.accessibility')}
            >
              <Sliders size={19} />
            </button>

            {/* Treat Box (Bag) Trigger */}
            <button
              onClick={openCart}
              className="btn-cart-trigger"
              title={t('cart.title')}
              aria-label={`${t('cart.title')}, ${totalItemsCount} ${t('common.reviews')}`}
            >
              <ShoppingBag size={20} />
              <span className="cart-label">{locale === 'pt' ? 'Cesto' : 'Treat Box'}</span>
              {totalItemsCount > 0 && (
                <span className="cart-badge" aria-hidden="true">
                  {totalItemsCount}
                </span>
              )}
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="btn-icon mobile-menu-toggle"
              aria-label={isMobileMenuOpen ? t('nav.closeMenu') : t('nav.menu')}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {isMobileMenuOpen && (
        <div className="mobile-nav-drawer" role="dialog" aria-modal="true" aria-label="Mobile Navigation">
          <div className="mobile-nav-backdrop" onClick={() => setIsMobileMenuOpen(false)} />
          <div className="mobile-nav-panel">
            <div className="mobile-nav-header">
              <img src="./logowith-text.png" alt="elamel" className="mobile-nav-logo" />
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="btn-icon"
                aria-label={t('nav.closeMenu')}
              >
                <X size={20} />
              </button>
            </div>

            {/* Mobile Language Switcher */}
            <div className="mobile-lang-row">
              <span className="mobile-lang-title">
                <Globe size={16} /> {locale === 'pt' ? 'Idioma' : 'Language'}:
              </span>
              <div className="lang-switcher-pill">
                <button
                  onClick={() => setLocale('pt')}
                  className={`lang-btn ${locale === 'pt' ? 'active' : ''}`}
                >
                  🇵🇹 Português
                </button>
                <span className="lang-divider" aria-hidden="true">|</span>
                <button
                  onClick={() => setLocale('en')}
                  className={`lang-btn ${locale === 'en' ? 'active' : ''}`}
                >
                  🇬🇧 English
                </button>
              </div>
            </div>

            <nav className="mobile-nav-links">
              <ul>
                {navLinks.map((link) => {
                  const isActive =
                    link.path === '/'
                      ? currentPath === '/'
                      : currentPath.startsWith(link.path);

                  return (
                    <li key={link.path}>
                      <button
                        onClick={() => handleNavClick(link.path)}
                        className={`mobile-nav-item ${isActive ? 'active' : ''}`}
                      >
                        {link.label}
                      </button>
                    </li>
                  );
                })}
              </ul>
            </nav>

            <div className="mobile-nav-footer">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenSearch();
                }}
                className="btn btn-secondary btn-full"
              >
                <Search size={18} /> {t('nav.search')}
              </button>
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  openCart();
                }}
                className="btn btn-primary btn-full"
              >
                <ShoppingBag size={18} /> {t('cart.title')} ({totalItemsCount})
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Embedded Component CSS */}
      <style>{`
        .site-header {
          position: sticky;
          top: 0;
          z-index: 900;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(8px);
          border-bottom: 1px solid var(--color-border-light);
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.03);
        }
        .top-ribbon {
          background: var(--gradient-rainbow-subtle);
          border-bottom: 1px solid var(--color-border-light);
          font-size: 0.8125rem;
          padding: 0.35rem 0;
          color: var(--color-text-muted);
        }
        .top-ribbon-content {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
        }
        .top-ribbon-text {
          display: flex;
          align-items: center;
          gap: 0.4rem;
        }
        .top-ribbon-links {
          display: flex;
          align-items: center;
          gap: 0.6rem;
        }
        .top-ribbon-btn {
          background: none;
          border: none;
          color: var(--color-text-muted);
          font-size: 0.8125rem;
          cursor: pointer;
          font-family: inherit;
        }
        .top-ribbon-btn:hover {
          color: var(--color-primary);
          text-decoration: underline;
        }
        .top-ribbon-divider {
          color: var(--color-border);
        }
        .navbar-container {
          padding: 0.75rem 0;
        }
        .navbar-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1.5rem;
        }
        .navbar-brand {
          display: flex;
          align-items: center;
          flex-shrink: 0;
        }
        .navbar-logo-img {
          height: 52px;
          width: auto;
          object-fit: contain;
          transition: transform var(--transition-fast);
        }
        .navbar-brand:hover .navbar-logo-img {
          transform: scale(1.03);
        }
        .desktop-nav {
          display: flex;
          align-items: center;
        }
        .nav-list {
          display: flex;
          align-items: center;
          gap: 0.35rem;
          list-style: none;
        }
        .nav-link {
          background: transparent;
          border: none;
          font-family: var(--font-heading);
          font-size: 0.9375rem;
          font-weight: 600;
          color: var(--color-text-muted);
          padding: 0.6rem 0.9rem;
          border-radius: var(--radius-full);
          cursor: pointer;
          position: relative;
          transition: all var(--transition-fast);
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .nav-link:hover {
          color: var(--color-primary);
          background: var(--color-primary-light);
        }
        .nav-link.active {
          color: var(--color-primary);
          font-weight: 700;
        }
        .active-dot {
          position: absolute;
          bottom: 2px;
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background-color: var(--color-primary);
        }
        .navbar-utilities {
          display: flex;
          align-items: center;
          gap: 0.6rem;
        }
        .lang-switcher-pill {
          display: inline-flex;
          align-items: center;
          background: var(--color-surface);
          border: 1px solid var(--color-border);
          border-radius: var(--radius-full);
          padding: 0.2rem 0.45rem;
          gap: 0.35rem;
          flex-shrink: 0;
          white-space: nowrap;
        }
        .lang-btn {
          background: none;
          border: none;
          font-size: 0.8125rem;
          font-weight: 600;
          color: var(--color-text-muted);
          cursor: pointer;
          padding: 0.2rem 0.45rem;
          border-radius: var(--radius-full);
          transition: all var(--transition-fast);
          font-family: var(--font-heading);
        }
        .lang-btn:hover {
          color: var(--color-primary);
        }
        .lang-btn.active {
          background: var(--color-primary);
          color: #FFFFFF;
        }
        .lang-divider {
          color: var(--color-border);
          font-size: 0.75rem;
        }
        .btn-cart-trigger {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: var(--color-primary);
          color: #FFFFFF;
          font-family: var(--font-heading);
          font-weight: 600;
          font-size: 0.9375rem;
          padding: 0.6rem 1.1rem;
          border-radius: var(--radius-full);
          border: none;
          cursor: pointer;
          position: relative;
          box-shadow: 0 3px 10px rgba(225, 40, 91, 0.25);
          transition: all var(--transition-fast);
        }
        .btn-cart-trigger:hover {
          background: var(--color-primary-dark);
          transform: translateY(-1px);
        }
        .cart-badge {
          background: var(--color-amber);
          color: var(--color-text-main);
          font-size: 0.75rem;
          font-weight: 800;
          padding: 0.15rem 0.5rem;
          border-radius: var(--radius-full);
          margin-left: 0.2rem;
        }
        .mobile-menu-toggle {
          display: none;
        }
        .mobile-nav-drawer {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: 1000;
          display: flex;
        }
        .mobile-nav-backdrop {
          position: absolute;
          inset: 0;
          background: rgba(0, 0, 0, 0.5);
          backdrop-filter: blur(4px);
        }
        .mobile-nav-panel {
          position: relative;
          width: 85%;
          max-width: 340px;
          background: #FFFFFF;
          height: 100%;
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          box-shadow: 4px 0 20px rgba(0, 0, 0, 0.15);
          z-index: 2;
        }
        .mobile-nav-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-bottom: 1rem;
          border-bottom: 1px solid var(--color-border-light);
        }
        .mobile-nav-logo {
          height: 42px;
        }
        .mobile-lang-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0.9rem 0;
          border-bottom: 1px solid var(--color-border-light);
        }
        .mobile-lang-title {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.875rem;
          font-weight: 600;
          color: var(--color-text-muted);
        }
        .mobile-nav-links {
          flex: 1;
          overflow-y: auto;
          padding: 1rem 0;
        }
        .mobile-nav-links ul {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        .mobile-nav-item {
          width: 100%;
          text-align: left;
          background: transparent;
          border: none;
          padding: 0.85rem 1rem;
          font-family: var(--font-heading);
          font-size: 1.05rem;
          font-weight: 600;
          color: var(--color-text-main);
          border-radius: var(--radius-md);
          cursor: pointer;
          transition: background var(--transition-fast);
        }
        .mobile-nav-item:hover, .mobile-nav-item.active {
          background: var(--color-primary-light);
          color: var(--color-primary);
        }
        .mobile-nav-footer {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          padding-top: 1rem;
          border-top: 1px solid var(--color-border-light);
        }
        .btn-full {
          width: 100%;
          justify-content: center;
        }

        @media (max-width: 1080px) {
          .desktop-nav {
            display: none;
          }
          .mobile-menu-toggle {
            display: inline-flex;
          }
          .cart-label {
            display: none;
          }
        }
      `}</style>
    </header>
  );
};
