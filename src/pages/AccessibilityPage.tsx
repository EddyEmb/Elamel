import React from 'react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { useAccessibility } from '../context/AccessibilityContext';
import { useI18n } from '../context/I18nContext';
import { Eye, Type, Zap, ShieldCheck, Keyboard, Volume2, Sparkles } from 'lucide-react';

export const AccessibilityPage: React.FC = () => {
  const { settings, setFontSize, toggleHighContrast, toggleReducedMotion } = useAccessibility();
  const { t, locale } = useI18n();

  return (
    <div className="accessibility-page">
      <Breadcrumbs />

      <section className="category-hero-header a11y-hero">
        <div className="container">
          <div className="cat-hero-inner">
            <span className="section-eyebrow">
              <Eye size={14} /> {locale === 'pt' ? 'Inclusivo por Natureza' : 'Inclusive by Design'}
            </span>
            <h1 className="cat-page-title">{locale === 'pt' ? 'Declaração de Acessibilidade & Preferências de Visualização' : 'Accessibility Statement & Preferences'}</h1>
            <p className="cat-page-lead">
              {locale === 'pt'
                ? 'Assumimos o compromisso de garantir uma experiência digital acolhedora a todos os elementos da família, crianças e adultos. A nossa plataforma foi desenvolvida em conformidade rigorosa com as directrizes europeias e internacionais WCAG 2.2 Nível AA.'
                : 'We are committed to ensuring digital accessibility for all family members, children, and adults of varying abilities. Our website is built adhering to the WCAG 2.2 Level AA guidelines.'}
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
                <h2 className="tester-title">{t('accessibility.controlsTitle')}</h2>
                <p className="tester-sub">{locale === 'pt' ? 'Personalize o aspecto visual e o tamanho do texto em tempo real em todas as páginas.' : 'Customize your display settings across the entire website in real time.'}</p>
              </div>
            </div>

            <div className="tester-controls-grid">
              {/* Font Size Scaling */}
              <div className="tester-control-box">
                <div className="tester-box-head">
                  <Type size={20} color="#0284C7" />
                  <strong>{t('accessibility.textSize')}</strong>
                </div>
                <p className="tester-box-desc">{locale === 'pt' ? 'Ajuste a escala tipográfica para uma leitura sem esforço:' : 'Scale typography for comfortable reading:'}</p>
                <div className="tester-btn-group">
                  <button
                    onClick={() => setFontSize('normal')}
                    className={`tester-choice-btn ${settings.fontSize === 'normal' ? 'active' : ''}`}
                  >
                    {t('accessibility.textSizeNormal')}
                  </button>
                  <button
                    onClick={() => setFontSize('large')}
                    className={`tester-choice-btn ${settings.fontSize === 'large' ? 'active' : ''}`}
                  >
                    {t('accessibility.textSizeLarge')}
                  </button>
                  <button
                    onClick={() => setFontSize('xlarge')}
                    className={`tester-choice-btn ${settings.fontSize === 'xlarge' ? 'active' : ''}`}
                  >
                    {t('accessibility.textSizeXLarge')}
                  </button>
                </div>
              </div>

              {/* High Contrast Mode */}
              <div className="tester-control-box">
                <div className="tester-box-head">
                  <Eye size={20} color="#F8971D" />
                  <strong>{t('accessibility.contrast')}</strong>
                </div>
                <p className="tester-box-desc">{t('accessibility.contrastHelp')}</p>
                <button
                  onClick={toggleHighContrast}
                  className={`btn ${settings.highContrast ? 'btn-primary' : 'btn-secondary'} btn-full-width`}
                >
                  {settings.highContrast ? (locale === 'pt' ? 'Alto Contraste Activado' : 'High Contrast is ON') : (locale === 'pt' ? 'Activar Alto Contraste' : 'Enable High Contrast')}
                </button>
              </div>

              {/* Reduced Motion Mode */}
              <div className="tester-control-box">
                <div className="tester-box-head">
                  <Zap size={20} color="#10B981" />
                  <strong>{t('accessibility.motion')}</strong>
                </div>
                <p className="tester-box-desc">{t('accessibility.motionHelp')}</p>
                <button
                  onClick={toggleReducedMotion}
                  className={`btn ${settings.reducedMotion ? 'btn-primary' : 'btn-secondary'} btn-full-width`}
                >
                  {settings.reducedMotion ? (locale === 'pt' ? 'Animações Reduzidas' : 'Reduced Motion is ON') : (locale === 'pt' ? 'Reduzir Animações' : 'Enable Reduced Motion')}
                </button>
              </div>
            </div>
          </div>

          {/* Detailed WCAG 2.2 Principles Breakdown */}
          <div className="a11y-details-card">
            <h2 className="a11y-section-heading">{locale === 'pt' ? 'Como Cumprimos os 4 Princípios WCAG 2.2 (POUR)' : 'How We Implement WCAG 2.2 Principles (POUR)'}</h2>

            <div className="pour-grid">
              <div className="pour-card">
                <div className="pour-header">
                  <Eye size={22} color="#E1285B" />
                  <h3>{locale === 'pt' ? '1. Perceptível (Perceivable)' : '1. Perceivable'}</h3>
                </div>
                <ul>
                  <li><strong>{locale === 'pt' ? 'Contraste de Texto:' : 'Text Contrast:'}</strong> {locale === 'pt' ? 'Rácio mínimo de 4.5:1 para texto corrente e 3:1 para títulos sobre fundos claros.' : 'Minimum 4.5:1 ratio for body text and 3:1 for large headers against light backgrounds.'}</li>
                  <li><strong>{locale === 'pt' ? 'Texto Alternativo (Alt):' : 'Alt Text:'}</strong> {locale === 'pt' ? 'Todas as imagens relevantes contêm descrições detalhadas da peça e dos materiais.' : 'All meaningful images include descriptive alternative text detailing item type and use.'}</li>
                  <li><strong>{locale === 'pt' ? 'Independência Sensorial:' : 'Sensory Independence:'}</strong> {locale === 'pt' ? 'Nenhuma instrução depende unicamente de cores ou formatos visuais isolados.' : 'Instructions do not rely solely on shape, size, or color alone.'}</li>
                </ul>
              </div>

              <div className="pour-card">
                <div className="pour-header">
                  <Keyboard size={22} color="#F8971D" />
                  <h3>{locale === 'pt' ? '2. Operável (Operable)' : '2. Operable'}</h3>
                </div>
                <ul>
                  <li><strong>{locale === 'pt' ? 'Navegação por Teclado:' : 'Full Keyboard Navigation:'}</strong> {locale === 'pt' ? 'Todos os botões, filtros e janelas modais são navegáveis via Tab e Shift+Tab.' : 'Every button, filter, and modal is reachable via Tab and Shift+Tab.'}</li>
                  <li><strong>{locale === 'pt' ? 'Foco Visual Destacado:' : 'Visible Focus Indicators:'}</strong> {locale === 'pt' ? 'Contornos de foco bem nítidos em elementos activos.' : 'High-visibility outline on active elements.'}</li>
                  <li><strong>{locale === 'pt' ? 'Controlo de Movimento:' : 'Controllable Motion:'}</strong> {locale === 'pt' ? 'Os carrosséis possuem botões de Pausa e Reprodução.' : 'Carousels feature visible pause/play controls.'}</li>
                  <li><strong>{locale === 'pt' ? 'Ligação de Atalho Directo:' : 'Skip Link:'}</strong> {locale === 'pt' ? 'Ligação para saltar directamente para o conteúdo principal.' : 'Direct "Skip to main content" link for keyboard users.'}</li>
                </ul>
              </div>

              <div className="pour-card">
                <div className="pour-header">
                  <Volume2 size={22} color="#0284C7" />
                  <h3>{locale === 'pt' ? '3. Compreensível (Understandable)' : '3. Understandable'}</h3>
                </div>
                <ul>
                  <li><strong>{locale === 'pt' ? 'Estrutura Previsível:' : 'Predictable Layout:'}</strong> {locale === 'pt' ? 'Barra de navegação, cabeçalhos e rodapé consistentes em todas as páginas.' : 'Consistent navigation, header, and footer positions on every single page.'}</li>
                  <li><strong>{locale === 'pt' ? 'Validação Construtiva:' : 'Clear Error Feedback:'}</strong> {locale === 'pt' ? 'Mensagens de ajuda claras a indicar como corrigir campos incompletos.' : 'Friendly inline validation messages explaining how to fix issues.'}</li>
                  <li><strong>{locale === 'pt' ? 'Linguagem Simples:' : 'Plain Language:'}</strong> {locale === 'pt' ? 'Textos claros e acessíveis para crianças, pais e avós.' : 'Plain language copy respectful of both children and adults.'}</li>
                </ul>
              </div>

              <div className="pour-card">
                <div className="pour-header">
                  <ShieldCheck size={22} color="#10B981" />
                  <h3>{locale === 'pt' ? '4. Robusto (Robust)' : '4. Robust'}</h3>
                </div>
                <ul>
                  <li><strong>{locale === 'pt' ? 'HTML5 Semântico:' : 'Semantic HTML5:'}</strong> {locale === 'pt' ? 'Utilização de elementos padrão <header>, <nav>, <main>, <section> e <footer>.' : 'Native <header>, <nav>, <main>, <section>, and <footer> tags.'}</li>
                  <li><strong>{locale === 'pt' ? 'Suporte para Leitores de Ecrã:' : 'ARIA Landmarks & Live Regions:'}</strong> {locale === 'pt' ? 'As notificações do cesto e avisos são anunciados via atributos aria-live.' : 'Dynamic shopping bag and toast updates are announced automatically.'}</li>
                  <li><strong>{locale === 'pt' ? 'Compatibilidade Ampla:' : 'Cross-Browser Reliability:'}</strong> {locale === 'pt' ? 'Funcionamento uniforme em computadores, tablets e telemóveis sem necessidade de extensões.' : 'Functions seamlessly without requiring external plugins.'}</li>
                </ul>
              </div>
            </div>

            {/* Keyboard Shortcuts Reference */}
            <div className="keyboard-shortcuts-table-wrap">
              <h3 className="sub-heading">{locale === 'pt' ? 'Guia de Navegação Rápida por Teclado' : 'Keyboard Navigation Guide'}</h3>
              <table className="shortcuts-table">
                <thead>
                  <tr>
                    <th>{locale === 'pt' ? 'Tecla' : 'Key'}</th>
                    <th>{locale === 'pt' ? 'Acção' : 'Action'}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><kbd>Tab</kbd></td>
                    <td>{locale === 'pt' ? 'Avança o foco para a próxima ligação, botão ou campo' : 'Move focus to the next interactive link, button, or input'}</td>
                  </tr>
                  <tr>
                    <td><kbd>Shift</kbd> + <kbd>Tab</kbd></td>
                    <td>{locale === 'pt' ? 'Recua o foco para o elemento interactivo anterior' : 'Move focus to the previous interactive element'}</td>
                  </tr>
                  <tr>
                    <td><kbd>Enter</kbd> / <kbd>Espaço</kbd></td>
                    <td>{locale === 'pt' ? 'Activa botões, abre produtos e acciona caixas de selecção' : 'Activate buttons, links, or toggle checkboxes'}</td>
                  </tr>
                  <tr>
                    <td><kbd>Esc</kbd></td>
                    <td>{locale === 'pt' ? 'Fecha janelas modais abertas, pesquisa e gaveta de compras' : 'Close open modals, search overlay, or Treat Box drawer'}</td>
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
