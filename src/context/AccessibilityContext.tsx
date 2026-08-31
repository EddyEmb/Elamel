import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { UserAccessibilitySettings } from '../types';

interface AccessibilityContextType {
  settings: UserAccessibilitySettings;
  setFontSize: (size: UserAccessibilitySettings['fontSize']) => void;
  toggleHighContrast: () => void;
  toggleReducedMotion: () => void;
  resetSettings: () => void;
}

const defaultSettings: UserAccessibilitySettings = {
  fontSize: 'normal',
  highContrast: false,
  reducedMotion: false,
};

const AccessibilityContext = createContext<AccessibilityContextType | undefined>(undefined);

export const AccessibilityProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [settings, setSettings] = useState<UserAccessibilitySettings>(() => {
    if (typeof window === 'undefined') return defaultSettings;
    try {
      const saved = localStorage.getItem('elamel_a11y_settings');
      if (saved) {
        return JSON.parse(saved);
      }
    } catch {
      // ignore
    }
    return defaultSettings;
  });

  useEffect(() => {
    try {
      localStorage.setItem('elamel_a11y_settings', JSON.stringify(settings));
    } catch {
      // ignore
    }

    const root = document.documentElement;

    // Apply font size
    root.classList.remove('font-size-normal', 'font-size-large', 'font-size-xlarge');
    root.classList.add(`font-size-${settings.fontSize}`);

    // Apply high contrast
    if (settings.highContrast) {
      root.classList.add('high-contrast-mode');
    } else {
      root.classList.remove('high-contrast-mode');
    }

    // Apply reduced motion
    if (settings.reducedMotion) {
      root.classList.add('reduced-motion-mode');
    } else {
      root.classList.remove('reduced-motion-mode');
    }
  }, [settings]);

  const setFontSize = (fontSize: UserAccessibilitySettings['fontSize']) => {
    setSettings((prev) => ({ ...prev, fontSize }));
  };

  const toggleHighContrast = () => {
    setSettings((prev) => ({ ...prev, highContrast: !prev.highContrast }));
  };

  const toggleReducedMotion = () => {
    setSettings((prev) => ({ ...prev, reducedMotion: !prev.reducedMotion }));
  };

  const resetSettings = () => {
    setSettings(defaultSettings);
  };

  return (
    <AccessibilityContext.Provider
      value={{
        settings,
        setFontSize,
        toggleHighContrast,
        toggleReducedMotion,
        resetSettings,
      }}
    >
      {children}
    </AccessibilityContext.Provider>
  );
};

export const useAccessibility = (): AccessibilityContextType => {
  const context = useContext(AccessibilityContext);
  if (!context) {
    throw new Error('useAccessibility must be used within an AccessibilityProvider');
  }
  return context;
};
