import React, { useState } from 'react';
import { useRouter } from '../context/RouterContext';
import { useCart } from '../context/CartContext';
import { Search, ShoppingBag, Sliders, Menu, X, Sparkles } from 'lucide-react';

interface NavbarProps {
  onOpenSearch: () => void;
  onOpenAccessibility: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenSearch, onOpenAccessibility }) => {
  const { currentPath, navigate } = useRouter();
  const { totalItemsCount, openCart } = useCart();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'Elamel Colors', path: '/colors' },
    { label: 'Elamel Goodies', path: '/goodies' },
    { label: 'Moments & Souvenirs', path: '/moments-souvenirs' },
    { label: 'About Elamel', path: '/about' },
    { label: 'Contact & Orders', path: '/contact' },
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
            Welcome to <strong>elamel</strong> • Safe, joyful ceramic kits, bakery goodies & family keepsakes
          </span>
          <div className="top-ribbon-links">
            <button 
              onClick={() => handleNavClick('/accessibility')} 
              className="top-ribbon-btn"
              aria-label="Accessibility statement and controls"
            >
              Accessibility Options
            </button>
            <span className="top-ribbon-divider" aria-hidden="true">•</span>
            <button 
              onClick={() => handleNavClick('/contact')} 
              className="top-ribbon-btn"
            >
              Order Inquiries
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
            {/* Search Trigger */}
            <button
              onClick={onOpenSearch}
              className="btn-icon"
              title="Search products and stories"
              aria-label="Search products, kits, and treats"
            >
              <Search size={19} />
            </button>

            {/* Accessibility Settings Trigger */}
            <button
              onClick={onOpenAccessibility}
              className="btn-icon"
              title="Adjust text size, contrast, and motion"
              aria-label="Accessibility settings and display options"
            >
              <Sliders size={19} />
            </button>

            {/* Treat Box (Bag) Trigger */}
            <button
              onClick={openCart}
              className="btn-cart-trigger"
              title="View your Treat Box selection"
              aria-label={`View Treat Box, ${totalItemsCount} items selected`}
            >
              <ShoppingBag size={20} />
              <span className="cart-label">Treat Box</span>
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
              aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
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
                aria-label="Close menu"
              >
                <X size={20} />
              </button>
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
                <Search size={18} /> Search Catalog
              </button>
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  openCart();
                }}
                className="btn btn-primary btn-full"
              >
                <ShoppingBag size={18} /> View Treat Box ({totalItemsCount})
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
          background: var(--color-primary-hover);
          transform: translateY(-1px);
          box-shadow: 0 5px 14px rgba(225, 40, 91, 0.35);
        }
        .cart-badge {
          background: #FFFFFF;
          color: var(--color-primary);
          font-size: 0.75rem;
          font-weight: 800;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          display: inline-flex;
          align-items: center;
          justify-content: center;
        }
        .mobile-menu-toggle {
          display: none;
        }
        .mobile-nav-drawer {
          position: fixed;
          inset: 0;
          z-index: 1000;
          display: flex;
        }
        .mobile-nav-backdrop {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.4);
        }
        .mobile-nav-panel {
          position: relative;
          width: 85%;
          max-width: 320px;
          background: #FFFFFF;
          height: 100%;
          display: flex;
          flex-direction: column;
          padding: 1.5rem;
          box-shadow: var(--shadow-xl);
          animation: slideInLeft 0.3s ease;
          z-index: 1001;
        }
        .mobile-nav-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 2rem;
          padding-bottom: 1rem;
          border-bottom: 1px solid var(--color-border-light);
        }
        .mobile-nav-logo {
          height: 42px;
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
          padding: 0.8rem 1rem;
          border: none;
          background: none;
          font-family: var(--font-heading);
          font-size: 1.05rem;
          font-weight: 600;
          color: var(--color-text-main);
          border-radius: var(--radius-md);
          cursor: pointer;
        }
        .mobile-nav-item.active {
          background: var(--color-primary-light);
          color: var(--color-primary);
        }
        .mobile-nav-footer {
          margin-top: auto;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          padding-top: 1.5rem;
          border-top: 1px solid var(--color-border-light);
        }
        .btn-full {
          width: 100%;
        }

        @keyframes slideInLeft {
          from { transform: translateX(-100%); }
          to { transform: translateX(0); }
        }

        @media (max-width: 992px) {
          .desktop-nav { display: none; }
          .mobile-menu-toggle { display: inline-flex; }
          .cart-label { display: none; }
          .btn-cart-trigger { padding: 0.6rem; width: 42px; height: 42px; justify-content: center; }
          .top-ribbon-links { display: none; }
        }
      `}</style>
    </header>
  );
};
