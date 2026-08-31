import React from 'react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { useAccessibility } from '../context/AccessibilityContext';
import { Eye, Type, Zap, ShieldCheck, Keyboard, Volume2, Sparkles } from 'lucide-react';

export const AccessibilityPage: React.FC = () => {
  const { settings, setFontSize, toggleHighContrast, toggleReducedMotion } = useAccessibility();

  return (
    <div className="accessibility-page">
      <Breadcrumbs />

      <section className="category-hero-header a11y-hero">
        <div className="container">
          <div className="cat-hero-inner">
            <span className="section-eyebrow">
              <Eye size={14} /> Inclusive by Design
            </span>
            <h1 className="cat-page-title">Accessibility Statement & Preferences</h1>
            <p className="cat-page-lead">
              We are committed to ensuring digital accessibility for all family members, children, and adults of varying abilities.
              Our website is built adhering to the <strong>WCAG 2.2 Level AA</strong> guidelines.
            </p>
          </div>
        </div>
      </section>

      <section className="section a11y-main-section">
        <div className="container">
          {/* Interactive Live Preferences Tester on Page */}
          <div className="a11y-tester-card">
            <div className="tester-header">
              <Sparkles size={24} color="#E1285B" />
              <div>
                <h2 className="tester-title">Interactive Display & Reading Preferences</h2>
                <p className="tester-sub">Customize your display settings across the entire website in real time.</p>
              </div>
            </div>

            <div className="tester-controls-grid">
              {/* Font Size Scaling */}
              <div className="tester-control-box">
                <div className="tester-box-head">
                  <Type size={20} color="#0284C7" />
                  <strong>Text Size Adjustment</strong>
                </div>
                <p className="tester-box-desc">Scale typography for comfortable reading:</p>
                <div className="tester-btn-group">
                  <button
                    onClick={() => setFontSize('normal')}
                    className={`tester-choice-btn ${settings.fontSize === 'normal' ? 'active' : ''}`}
                  >
                    Standard (100%)
                  </button>
                  <button
                    onClick={() => setFontSize('large')}
                    className={`tester-choice-btn ${settings.fontSize === 'large' ? 'active' : ''}`}
                  >
                    Large (115%)
                  </button>
                  <button
                    onClick={() => setFontSize('xlarge')}
                    className={`tester-choice-btn ${settings.fontSize === 'xlarge' ? 'active' : ''}`}
                  >
                    Extra Large (130%)
                  </button>
                </div>
              </div>

              {/* High Contrast Mode */}
              <div className="tester-control-box">
                <div className="tester-box-head">
                  <Eye size={20} color="#F8971D" />
                  <strong>High Contrast Palette</strong>
                </div>
                <p className="tester-box-desc">Enforces black-on-white text with 14:1+ luminance:</p>
                <button
                  onClick={toggleHighContrast}
                  className={`btn ${settings.highContrast ? 'btn-primary' : 'btn-secondary'} btn-full-width`}
                >
                  {settings.highContrast ? 'High Contrast is ON' : 'Enable High Contrast'}
                </button>
              </div>

              {/* Reduced Motion Mode */}
              <div className="tester-control-box">
                <div className="tester-box-head">
                  <Zap size={20} color="#10B981" />
                  <strong>Animation & Motion Control</strong>
                </div>
                <p className="tester-box-desc">Eliminates sliding panels and celebratory effects:</p>
                <button
                  onClick={toggleReducedMotion}
                  className={`btn ${settings.reducedMotion ? 'btn-primary' : 'btn-secondary'} btn-full-width`}
                >
                  {settings.reducedMotion ? 'Reduced Motion is ON' : 'Enable Reduced Motion'}
                </button>
              </div>
            </div>
          </div>

          {/* Detailed WCAG 2.2 Principles Breakdown */}
          <div className="a11y-details-card">
            <h2 className="a11y-section-heading">How We Implement WCAG 2.2 Principles (POUR)</h2>

            <div className="pour-grid">
              <div className="pour-card">
                <div className="pour-header">
                  <Eye size={22} color="#E1285B" />
                  <h3>1. Perceivable</h3>
                </div>
                <ul>
                  <li><strong>Text Contrast:</strong> Minimum 4.5:1 ratio for body text and 3:1 for large headers against light backgrounds.</li>
                  <li><strong>Alt Text:</strong> All meaningful images include descriptive alternative text detailing item type and use.</li>
                  <li><strong>Sensory Independence:</strong> Instructions do not rely solely on shape, size, or color alone.</li>
                </ul>
              </div>

              <div className="pour-card">
                <div className="pour-header">
                  <Keyboard size={22} color="#F8971D" />
                  <h3>2. Operable</h3>
                </div>
                <ul>
                  <li><strong>Full Keyboard Navigation:</strong> Every button, filter, and modal is reachable via <code>Tab</code> and <code>Shift+Tab</code>.</li>
                  <li><strong>Visible Focus Indicators:</strong> High-visibility outline (<code>3px solid #E1285B</code>) on active elements.</li>
                  <li><strong>Controllable Motion:</strong> Carousels feature visible pause/play controls.</li>
                  <li><strong>Skip Link:</strong> Direct "Skip to main content" link for keyboard users.</li>
                </ul>
              </div>

              <div className="pour-card">
                <div className="pour-header">
                  <Volume2 size={22} color="#0284C7" />
                  <h3>3. Understandable</h3>
                </div>
                <ul>
                  <li><strong>Predictable Layout:</strong> Consistent navigation, header, and footer positions on every single page.</li>
                  <li><strong>Clear Error Feedback:</strong> Friendly inline validation messages explaining how to fix issues.</li>
                  <li><strong>Plain Language:</strong> Jargon-free copy respectful of both children and adults.</li>
                </ul>
              </div>

              <div className="pour-card">
                <div className="pour-header">
                  <ShieldCheck size={22} color="#10B981" />
                  <h3>4. Robust</h3>
                </div>
                <ul>
                  <li><strong>Semantic HTML5:</strong> Native <code>&lt;header&gt;</code>, <code>&lt;nav&gt;</code>, <code>&lt;main&gt;</code>, <code>&lt;section&gt;</code>, and <code>&lt;footer&gt;</code> tags.</li>
                  <li><strong>ARIA Landmarks & Live Regions:</strong> Dynamic shopping bag and toast updates are announced automatically.</li>
                  <li><strong>Cross-Browser Reliability:</strong> Functions seamlessly without requiring external plugins.</li>
                </ul>
              </div>
            </div>

            {/* Keyboard Shortcuts Reference */}
            <div className="keyboard-shortcuts-table-wrap">
              <h3 className="sub-heading">Keyboard Navigation Guide</h3>
              <table className="shortcuts-table">
                <thead>
                  <tr>
                    <th>Key</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><kbd>Tab</kbd></td>
                    <td>Move focus to the next interactive link, button, or input</td>
                  </tr>
                  <tr>
                    <td><kbd>Shift</kbd> + <kbd>Tab</kbd></td>
                    <td>Move focus to the previous interactive element</td>
                  </tr>
                  <tr>
                    <td><kbd>Enter</kbd> / <kbd>Space</kbd></td>
                    <td>Activate buttons, links, or toggle checkboxes</td>
                  </tr>
                  <tr>
                    <td><kbd>Esc</kbd></td>
                    <td>Close open modals, search overlay, or Treat Box drawer</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .a11y-hero {
          background: linear-gradient(135deg, rgba(225, 40, 91, 0.08) 0%, rgba(2, 132, 199, 0.08) 50%, rgba(240, 253, 244, 0.6) 100%);
        }
        .a11y-tester-card {
          background: #FFFFFF;
          border-radius: var(--radius-xl);
          border: 1px solid var(--color-border-light);
          padding: 3rem;
          box-shadow: var(--shadow-md);
          margin-bottom: 3.5rem;
        }
        .tester-header {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 2rem;
        }
        .tester-title {
          font-size: 1.6rem;
          margin-bottom: 0.25rem;
        }
        .tester-sub {
          color: var(--color-text-muted);
          font-size: 0.95rem;
          margin: 0;
        }
        .tester-controls-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
        }
        .tester-control-box {
          background: var(--color-bg-subtle);
          border-radius: var(--radius-lg);
          padding: 1.5rem;
          border: 1px solid var(--color-border-light);
          display: flex;
          flex-direction: column;
        }
        .tester-box-head {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-family: var(--font-heading);
          font-size: 1.05rem;
          margin-bottom: 0.4rem;
        }
        .tester-box-desc {
          font-size: 0.8125rem;
          color: var(--color-text-muted);
          margin-bottom: 1.25rem;
          flex-grow: 1;
        }
        .tester-btn-group {
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
        }
        .tester-choice-btn {
          padding: 0.55rem 0.85rem;
          background: #FFFFFF;
          border: 1px solid var(--color-border);
          border-radius: var(--radius-md);
          font-family: var(--font-heading);
          font-size: 0.8125rem;
          font-weight: 600;
          color: var(--color-text-main);
          cursor: pointer;
          transition: all var(--transition-fast);
          text-align: left;
        }
        .tester-choice-btn:hover {
          border-color: var(--color-primary);
        }
        .tester-choice-btn.active {
          background: var(--color-primary-light);
          border-color: var(--color-primary);
          color: var(--color-primary);
          font-weight: 700;
        }
        .a11y-details-card {
          background: #FFFFFF;
          border-radius: var(--radius-xl);
          border: 1px solid var(--color-border-light);
          padding: 3.5rem;
          box-shadow: var(--shadow-sm);
        }
        .a11y-section-heading {
          font-size: 1.85rem;
          margin-bottom: 2.5rem;
          text-align: center;
        }
        .pour-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2.5rem;
          margin-bottom: 3.5rem;
        }
        .pour-card {
          background: var(--color-bg-subtle);
          border-radius: var(--radius-lg);
          padding: 2rem;
          border: 1px solid var(--color-border-light);
        }
        .pour-header {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 1.25rem;
        }
        .pour-header h3 {
          font-size: 1.35rem;
        }
        .pour-card ul {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.85rem;
        }
        .pour-card li {
          font-size: 0.9375rem;
          color: var(--color-text-muted);
          line-height: 1.55;
        }
        .keyboard-shortcuts-table-wrap {
          padding-top: 2rem;
          border-top: 1px solid var(--color-border-light);
        }
        .sub-heading {
          font-size: 1.35rem;
          margin-bottom: 1.25rem;
        }
        .shortcuts-table {
          width: 100%;
          border-collapse: collapse;
        }
        .shortcuts-table th,
        .shortcuts-table td {
          padding: 0.85rem 1.25rem;
          text-align: left;
          border-bottom: 1px solid var(--color-border-light);
          font-size: 0.9375rem;
        }
        .shortcuts-table th {
          font-family: var(--font-heading);
          color: var(--color-text-main);
          background: var(--color-bg-subtle);
        }
        kbd {
          background: #F1F5F9;
          border: 1px solid #CBD5E1;
          border-radius: var(--radius-sm);
          padding: 0.2rem 0.5rem;
          font-family: monospace;
          font-size: 0.8125rem;
          box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
        }

        @media (max-width: 992px) {
          .tester-controls-grid { grid-template-columns: 1fr; }
          .pour-grid { grid-template-columns: 1fr; }
          .a11y-tester-card, .a11y-details-card { padding: 1.75rem; }
        }
      `}</style>
    </div>
  );
};
