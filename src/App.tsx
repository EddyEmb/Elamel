import React, { useState } from 'react';
import { RouterProvider, useRouter } from './context/RouterContext';
import { CartProvider } from './context/CartContext';
import { ToastProvider } from './context/ToastContext';
import { AccessibilityProvider } from './context/AccessibilityContext';

import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ProductModal } from './components/ProductModal';
import { CartDrawer } from './components/CartDrawer';
import { SearchModal } from './components/SearchModal';
import { AccessibilityModal } from './components/AccessibilityModal';
import { ToastContainer } from './components/ToastContainer';

// Pages
import { HomePage } from './pages/HomePage';
import { ColorsPage } from './pages/ColorsPage';
import { GoodiesPage } from './pages/GoodiesPage';
import { MomentsPage } from './pages/MomentsPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { SearchPage } from './pages/SearchPage';
import { SitemapPage } from './pages/SitemapPage';
import { PrivacyPage } from './pages/PrivacyPage';
import { TermsPage } from './pages/TermsPage';
import { AccessibilityPage } from './pages/AccessibilityPage';

const AppContent: React.FC = () => {
  const { currentPath } = useRouter();
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);
  const [isA11yModalOpen, setIsA11yModalOpen] = useState(false);

  // Determine which page to render based on path
  const renderCurrentPage = () => {
    const cleanPath = currentPath.split('?')[0];

    switch (cleanPath) {
      case '/':
      case '':
        return <HomePage />;
      case '/colors':
        return <ColorsPage />;
      case '/goodies':
        return <GoodiesPage />;
      case '/moments-souvenirs':
      case '/moments':
        return <MomentsPage />;
      case '/about':
        return <AboutPage />;
      case '/contact':
        return <ContactPage />;
      case '/search':
        return <SearchPage />;
      case '/sitemap':
        return <SitemapPage />;
      case '/privacy':
        return <PrivacyPage />;
      case '/terms':
        return <TermsPage />;
      case '/accessibility':
        return <AccessibilityPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="app-shell">
      {/* Skip link for keyboard accessibility */}
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      {/* Main Header */}
      <Navbar
        onOpenSearch={() => setIsSearchModalOpen(true)}
        onOpenAccessibility={() => setIsA11yModalOpen(true)}
      />

      {/* Main Landmark Container */}
      <main id="main-content" className="main-landmark" role="main" tabIndex={-1}>
        {renderCurrentPage()}
      </main>

      {/* Global Footer */}
      <Footer />

      {/* Global Modals & Drawers */}
      <ProductModal />
      <CartDrawer />
      <SearchModal
        isOpen={isSearchModalOpen}
        onClose={() => setIsSearchModalOpen(false)}
      />
      <AccessibilityModal
        isOpen={isA11yModalOpen}
        onClose={() => setIsA11yModalOpen(false)}
      />
      <ToastContainer />
    </div>
  );
};

export const App: React.FC = () => {
  return (
    <AccessibilityProvider>
      <ToastProvider>
        <RouterProvider>
          <CartProvider>
            <AppContent />
          </CartProvider>
        </RouterProvider>
      </ToastProvider>
    </AccessibilityProvider>
  );
};
