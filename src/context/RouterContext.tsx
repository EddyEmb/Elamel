import React, { createContext, useContext, useState, useEffect, useMemo, ReactNode } from 'react';
import { BreadcrumbItem } from '../types';

interface RouterContextType {
  currentPath: string;
  navigate: (path: string) => void;
  breadcrumbs: BreadcrumbItem[];
  selectedProductId: string | null;
  openProductModal: (productId: string) => void;
  closeProductModal: () => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

const RouterContext = createContext<RouterContextType | undefined>(undefined);

export const RouterProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const getInitialPath = (): string => {
    if (typeof window === 'undefined') return '/';
    const hash = window.location.hash.replace(/^#/, '');
    if (hash && hash.startsWith('/')) {
      return hash;
    }
    const path = window.location.pathname;
    return path || '/';
  };

  const [currentPath, setCurrentPath] = useState<string>(getInitialPath);
  const [selectedProductId, setSelectedProductId] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');

  useEffect(() => {
    const handlePopState = () => {
      const hash = window.location.hash.replace(/^#/, '');
      if (hash && hash.startsWith('/')) {
        setCurrentPath(hash);
      } else {
        setCurrentPath(window.location.pathname || '/');
      }
    };

    window.addEventListener('popstate', handlePopState);
    window.addEventListener('hashchange', handlePopState);
    return () => {
      window.removeEventListener('popstate', handlePopState);
      window.removeEventListener('hashchange', handlePopState);
    };
  }, []);

  const navigate = (path: string) => {
    if (path === currentPath) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    window.location.hash = path;
    setCurrentPath(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openProductModal = (productId: string) => {
    setSelectedProductId(productId);
  };

  const closeProductModal = () => {
    setSelectedProductId(null);
  };

  // Derive breadcrumbs from path
  const breadcrumbs = useMemo((): BreadcrumbItem[] => {
    const cleanPath = currentPath.split('?')[0];
    if (cleanPath === '/' || cleanPath === '') {
      return [{ label: 'Home', href: '/' }];
    }

    const items: BreadcrumbItem[] = [{ label: 'Home', href: '/' }];

    if (cleanPath.startsWith('/colors')) {
      items.push({ label: 'Elamel Colors', href: '/colors' });
    } else if (cleanPath.startsWith('/goodies')) {
      items.push({ label: 'Elamel Goodies', href: '/goodies' });
    } else if (cleanPath.startsWith('/moments-souvenirs') || cleanPath.startsWith('/moments')) {
      items.push({ label: 'Moments & Souvenirs', href: '/moments-souvenirs' });
    } else if (cleanPath.startsWith('/about')) {
      items.push({ label: 'About Elamel', href: '/about' });
    } else if (cleanPath.startsWith('/contact')) {
      items.push({ label: 'Contact & Orders', href: '/contact' });
    } else if (cleanPath.startsWith('/search')) {
      items.push({ label: 'Search Results', href: '/search' });
    } else if (cleanPath.startsWith('/sitemap')) {
      items.push({ label: 'Sitemap', href: '/sitemap' });
    } else if (cleanPath.startsWith('/privacy')) {
      items.push({ label: 'Privacy Policy', href: '/privacy' });
    } else if (cleanPath.startsWith('/terms')) {
      items.push({ label: 'Terms of Use', href: '/terms' });
    } else if (cleanPath.startsWith('/accessibility')) {
      items.push({ label: 'Accessibility Statement', href: '/accessibility' });
    }

    return items;
  }, [currentPath]);

  return (
    <RouterContext.Provider
      value={{
        currentPath,
        navigate,
        breadcrumbs,
        selectedProductId,
        openProductModal,
        closeProductModal,
        searchQuery,
        setSearchQuery,
      }}
    >
      {children}
    </RouterContext.Provider>
  );
};

export const useRouter = (): RouterContextType => {
  const context = useContext(RouterContext);
  if (!context) {
    throw new Error('useRouter must be used within a RouterProvider');
  }
  return context;
};
