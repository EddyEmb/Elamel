import React from 'react';
import { useAccessibility } from '../context/AccessibilityContext';
import { useRouter } from '../context/RouterContext';
import { useI18n } from '../context/I18nContext';
import { X, Type, Eye, Zap, RotateCcw, Check, ExternalLink } from 'lucide-react';

interface AccessibilityModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AccessibilityModal: React.FC<AccessibilityModalProps> = ({ isOpen, onClose }) => {
  const { settings, setFontSize, toggleHighContrast, toggleReducedMotion, resetSettings } = useAccessibility();
  const { navigate } = useRouter();
  const { t, locale } = useI18n();

  if (!isOpen) return null;

  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true" aria-labelledby="a11y-modal-title">
      <div className="modal-dialog a11y-modal-dialog" onClick={(e) => e.stopPropagation()}>
        <div className="a11y-modal-header">
          <div className="a11y-title-wrap">
            <Eye size={22} color="#E1285B" />
            <h3 id="a11y-modal-title" className="a11y-modal-title">{t('accessibility.controlsTitle')}</h3>
          </div>
          <button onClick={onClose} className="btn-icon" aria-label={t('common.close')}>
            <X size={20} />
          </button>
        </div>

        <div className="a11y-modal-body">
          <p className="a11y-intro-text">
            {locale === 'pt'
              ? 'Dedicamo-nos a proporcionar uma experiência confortável, familiar e acessível a todos os visitantes. Ajuste as suas preferências abaixo:'
              : 'We are dedicated to providing a comfortable, family-friendly, and accessible experience for all visitors. Adjust your viewing preferences below:'}
          </p>

          {/* Font Scaling Control */}
          <div className="a11y-control-card">
            <div className="a11y-card-header">
              <Type size={20} color="#0284C7" />
              <div>
                <strong className="a11y-control-name">{t('accessibility.textSize')}</strong>
                <p className="a11y-control-desc">
                  {locale === 'pt' ? 'Aumente o tamanho da letra para uma leitura confortável em qualquer dispositivo.' : 'Increase font size for comfortable reading across all devices.'}
                </p>
              </div>
            </div>

            <div className="font-size-buttons-row">
              <button
                onClick={() => setFontSize('normal')}
                className={`font-size-choice-btn ${settings.fontSize === 'normal' ? 'active' : ''}`}
              >
                <span>A</span>
                <small>{t('accessibility.textSizeNormal')}</small>
                {settings.fontSize === 'normal' && <Check size={14} />}
              </button>

              <button
                onClick={() => setFontSize('large')}
                className={`font-size-choice-btn ${settings.fontSize === 'large' ? 'active' : ''}`}
              >
                <span style={{ fontSize: '1.2rem' }}>A</span>
                <small>{t('accessibility.textSizeLarge')}</small>
                {settings.fontSize === 'large' && <Check size={14} />}
              </button>

              <button
                onClick={() => setFontSize('xlarge')}
                className={`font-size-choice-btn ${settings.fontSize === 'xlarge' ? 'active' : ''}`}
              >
                <span style={{ fontSize: '1.4rem' }}>A</span>
                <small>{t('accessibility.textSizeXLarge')}</small>
                {settings.fontSize === 'xlarge' && <Check size={14} />}
              </button>
            </div>
          </div>

          {/* High Contrast Mode */}
          <div className="a11y-control-card">
            <div className="a11y-card-header">
              <Eye size={20} color="#F8971D" />
              <div>
                <strong className="a11y-control-name">{t('accessibility.contrast')}</strong>
                <p className="a11y-control-desc">{t('accessibility.contrastHelp')}</p>
              </div>
            </div>

            <button
              onClick={toggleHighContrast}
              className={`a11y-toggle-btn ${settings.highContrast ? 'active' : ''}`}
              aria-pressed={settings.highContrast}
            >
              <span>{settings.highContrast ? (locale === 'pt' ? 'Alto Contraste Activado' : 'High Contrast Enabled') : (locale === 'pt' ? 'Cores Padrão' : 'Standard Warm Colors')}</span>
              <span className="toggle-switch-pill" />
            </button>
          </div>

          {/* Reduced Motion Mode */}
          <div className="a11y-control-card">
            <div className="a11y-card-header">
              <Zap size={20} color="#10B981" />
              <div>
                <strong className="a11y-control-name">{t('accessibility.motion')}</strong>
                <p className="a11y-control-desc">{t('accessibility.motionHelp')}</p>
              </div>
            </div>

            <button
              onClick={toggleReducedMotion}
              className={`a11y-toggle-btn ${settings.reducedMotion ? 'active' : ''}`}
              aria-pressed={settings.reducedMotion}
            >
              <span>{settings.reducedMotion ? (locale === 'pt' ? 'Animações Reduzidas' : 'Reduced Motion Active') : (locale === 'pt' ? 'Animações Padrão' : 'Subtle Animations Enabled')}</span>
              <span className="toggle-switch-pill" />
            </button>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="a11y-modal-footer">
          <button onClick={resetSettings} className="btn btn-secondary btn-sm">
            <RotateCcw size={14} /> {locale === 'pt' ? 'Repor Predefinições' : 'Reset to Defaults'}
          </button>
          <button
            onClick={() => {
              onClose();
              navigate('/accessibility');
            }}
            className="btn btn-outline-primary btn-sm"
          >
            <ExternalLink size={14} /> {locale === 'pt' ? 'Ler Declaração Completa' : 'Read Full Statement'}
          </button>
        </div>
      </div>

      <style>{`
        .a11y-modal-dialog {
          max-width: 580px;
          border-radius: var(--radius-xl);
        }
        .a11y-modal-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1.5rem;
          border-bottom: 1px solid var(--color-border-light);
        }
        .a11y-title-wrap {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }
        .a11y-modal-title {
          font-size: 1.35rem;
        }
        .a11y-modal-body {
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }
        .a11y-intro-text {
          font-size: 0.9375rem;
          color: var(--color-text-muted);
          line-height: 1.5;
          margin-bottom: 0.5rem;
        }
        .a11y-control-card {
          background: var(--color-bg-subtle);
          border: 1px solid var(--color-border-light);
          border-radius: var(--radius-lg);
          padding: 1.25rem;
        }
        .a11y-card-header {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
          margin-bottom: 1rem;
        }
        .a11y-control-name {
          display: block;
          font-size: 1rem;
          color: var(--color-text-main);
          margin-bottom: 0.2rem;
        }
        .a11y-control-desc {
          font-size: 0.8125rem;
          color: var(--color-text-light);
          margin: 0;
        }
        .font-size-buttons-row {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          gap: 0.5rem;
        }
        .font-size-choice-btn {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 0.25rem;
          padding: 0.75rem 0.5rem;
          background: #FFFFFF;
          border: 1.5px solid var(--color-border);
          border-radius: var(--radius-md);
          cursor: pointer;
          font-family: var(--font-heading);
          font-weight: 700;
          color: var(--color-text-main);
          transition: all var(--transition-fast);
        }
        .font-size-choice-btn small {
          font-size: 0.75rem;
          font-weight: 500;
          color: var(--color-text-light);
        }
        .font-size-choice-btn:hover {
          border-color: var(--color-primary);
        }
        .font-size-choice-btn.active {
          border-color: var(--color-primary);
          background: var(--color-primary-light);
          color: var(--color-primary);
        }
        .font-size-choice-btn.active small {
          color: var(--color-primary);
        }
        .a11y-toggle-btn {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0.75rem 1rem;
          background: #FFFFFF;
          border: 1.5px solid var(--color-border);
          border-radius: var(--radius-md);
          cursor: pointer;
          font-family: var(--font-heading);
          font-weight: 600;
          font-size: 0.9375rem;
          color: var(--color-text-main);
          transition: all var(--transition-fast);
        }
        .toggle-switch-pill {
          width: 42px;
          height: 24px;
          background: #CBD5E1;
          border-radius: var(--radius-full);
          position: relative;
          transition: background 0.2s ease;
        }
        .toggle-switch-pill::after {
          content: '';
          position: absolute;
          left: 3px;
          top: 3px;
          width: 18px;
          height: 18px;
          background: #FFFFFF;
          border-radius: 50%;
          transition: transform 0.2s ease;
        }
        .a11y-toggle-btn.active {
          border-color: var(--color-primary);
          background: var(--color-primary-light);
          color: var(--color-primary);
        }
        .a11y-toggle-btn.active .toggle-switch-pill {
          background: var(--color-primary);
        }
        .a11y-toggle-btn.active .toggle-switch-pill::after {
          transform: translateX(18px);
        }
        .a11y-modal-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1rem 1.5rem;
          background: var(--color-bg-subtle);
          border-top: 1px solid var(--color-border-light);
        }
      `}</style>
    </div>
  );
};
