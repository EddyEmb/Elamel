import React from 'react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { useRouter } from '../context/RouterContext';
import { useI18n } from '../context/I18nContext';
import { Network, ChevronRight, Home, Palette, Shield } from 'lucide-react';

export const SitemapPage: React.FC = () => {
  const { navigate } = useRouter();
  const { locale } = useI18n();

  const siteSections = locale === 'pt' ? [
    {
      title: 'Navegação Principal & Submarcas',
      icon: <Home size={20} color="#E1285B" />,
      links: [
        { label: 'Página Inicial', path: '/', desc: 'Apresentação da marca, destaques das 3 colecções, testemunhos e produtos em destaque' },
        { label: 'Elamel Colors', path: '/colors', desc: 'Kits de cerâmica: Loiça de jantar, Peças decorativas, Conjuntos de oferta, Loiça infantil e Estúdio de vidrados' },
        { label: 'Elamel Goodies', path: '/goodies', desc: 'Pastelaria artesanal: Bolos de família, Biscoitos e bolachas, Celebrações e Criador de Caixas de Iguarias' },
        { label: 'Moments & Souvenirs', path: '/moments-souvenirs', desc: 'Lembranças personalizadas: Pratos heráldicos, caixas de biscoitos com dedicatória, canecas de casal' },
        { label: 'Sobre a Elamel', path: '/about', desc: 'A nossa história, valores fundamentais, normas de segurança alimentar e workshops no atelier' },
        { label: 'Contacto & Encomendas', path: '/contact', desc: 'Formulário de encomenda e contacto, localização do atelier, telefone, correio electrónico e perguntas frequentes' }
      ]
    },
    {
      title: 'Experiências & Ferramentas Interactivas',
      icon: <Palette size={20} color="#F8971D" />,
      links: [
        { label: 'Estúdio de Personalização em Directo', path: '/moments-souvenirs', desc: 'Ferramenta de pré-visualização interactiva de gravação em cerâmica e caixas de madeira' },
        { label: 'Estúdio de Vidrados e Cores', path: '/colors', desc: 'Simulador 2D interactivo para experimentar vidrados e combinações na cerâmica' },
        { label: 'Criador Familiar de Caixas de Iguarias', path: '/goodies', desc: 'Compositor interactivo de caixas de 4 e 6 unidades com monitor em tempo real de alergénios' },
        { label: 'Pesquisa Global do Catálogo', path: '/search', desc: 'Pesquisa avançada com filtros por preço, categoria e ingredientes' }
      ]
    },
    {
      title: 'Acessibilidade, Confiança & Informação Legal',
      icon: <Shield size={20} color="#10B981" />,
      links: [
        { label: 'Declaração de Acessibilidade', path: '/accessibility', desc: 'Conformidade WCAG 2.2 AA, escala de letra, modo de alto contraste e navegação por teclado' },
        { label: 'Política de Privacidade', path: '/privacy', desc: 'Protecção da privacidade familiar e infantil, ausência de padrões obscuros e conformidade RGPD' },
        { label: 'Termos de Utilização', path: '/terms', desc: 'Condições gerais de serviço, expedição segura de loiça e pastelaria' },
        { label: 'Mapa do Sítio', path: '/sitemap', desc: 'Estrutura hierárquica completa de todas as páginas públicas e ferramentas' }
      ]
    }
  ] : [
    {
      title: 'Main Navigation & Subbrands',
      icon: <Home size={20} color="#E1285B" />,
      links: [
        { label: 'Home Page', path: '/', desc: 'Brand intro, category highlights, why families love us, and featured items' },
        { label: 'Elamel Colors', path: '/colors', desc: 'Ceramic kits: Tableware, Decorative pieces, Gift sets, Kids pottery, Glaze studio' },
        { label: 'Elamel Goodies', path: '/goodies', desc: 'Bakery treats: Family cakes, Cookies, Occasion treats, Treat Box builder' },
        { label: 'Moments & Souvenirs', path: '/moments-souvenirs', desc: 'Personalised keepsakes: Heirloom plates, custom cookie crates, couple mugs' },
        { label: 'About Elamel', path: '/about', desc: 'Brand origin story, values, food & glaze safety standards, community workshops' },
        { label: 'Contact & Orders', path: '/contact', desc: 'Pre-order inquiry form, studio location, phone/email, and FAQ accordion' }
      ]
    },
    {
      title: 'Interactive Experiences & Tools',
      icon: <Palette size={20} color="#F8971D" />,
      links: [
        { label: 'Live Personalisation Studio', path: '/moments-souvenirs', desc: 'Interactive live engraving & message cookie visual preview tool' },
        { label: 'Interactive Glaze Studio', path: '/colors', desc: '2D pottery color palette tester and simulator' },
        { label: 'Family Treat Box Builder', path: '/goodies', desc: '4-pack and 6-pack assortment custom builder with dietary monitor' },
        { label: 'Global Catalog Search', path: '/search', desc: 'Search all kits, bakery treats, and stories with advanced filters' }
      ]
    },
    {
      title: 'Trust, Accessibility & Legal',
      icon: <Shield size={20} color="#10B981" />,
      links: [
        { label: 'Accessibility Statement', path: '/accessibility', desc: 'WCAG 2.2 AA compliance, font scaling, high contrast toggle, keyboard guide' },
        { label: 'Privacy Policy', path: '/privacy', desc: 'Child privacy protection, zero dark patterns, GDPR & data handling' },
        { label: 'Terms of Use', path: '/terms', desc: 'Safe family service terms, delivery standards, ceramic & bakery policies' },
        { label: 'Sitemap Index', path: '/sitemap', desc: 'Hierarchical navigation map of all public pages and interactive tools' }
      ]
    }
  ];

  return (
    <div className="sitemap-page">
      <Breadcrumbs />

      <section className="category-hero-header sitemap-hero">
        <div className="container">
          <div className="cat-hero-inner">
            <span className="section-eyebrow">
              <Network size={14} /> {locale === 'pt' ? 'Arquitectura de Informação' : 'Information Architecture'}
            </span>
            <h1 className="cat-page-title">{locale === 'pt' ? 'Mapa do Sítio & Directório de Páginas' : 'Website Sitemap & Page Directory'}</h1>
            <p className="cat-page-lead">
              {locale === 'pt'
                ? 'Visão hierárquica e detalhada de todas as secções, ferramentas interactivas, submarcas e páginas informativas da plataforma Elamel.'
                : 'A comprehensive hierarchical overview of all pages, interactive tools, subbrands, and legal policies on the Elamel website.'}
            </p>
          </div>
        </div>
      </section>

      <section className="section sitemap-main-section">
        <div className="container">
          <div className="sitemap-sections-grid">
            {siteSections.map((sec, idx) => (
              <div key={idx} className="sitemap-card">
                <div className="sitemap-card-header">
                  <div className="sitemap-icon-box">{sec.icon}</div>
                  <h2 className="sitemap-section-title">{sec.title}</h2>
                </div>

                <ul className="sitemap-links-list">
                  {sec.links.map((link, lIdx) => (
                    <li key={lIdx} className="sitemap-link-item">
                      <button
                        onClick={() => navigate(link.path)}
                        className="sitemap-btn-link"
                      >
                        <div className="sitemap-link-content">
                          <span className="link-title-text">
                            {link.label} <code className="link-path-code">{link.path}</code>
                          </span>
                          <span className="link-desc-text">{link.desc}</span>
                        </div>
                        <ChevronRight size={16} className="link-chevron" />
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        .sitemap-hero {
          background: linear-gradient(135deg, rgba(16, 185, 129, 0.08) 0%, rgba(2, 132, 199, 0.08) 50%, rgba(225, 40, 91, 0.08) 100%);
        }
        .sitemap-sections-grid {
          display: flex;
          flex-direction: column;
          gap: 2.5rem;
          max-width: 900px;
          margin: 0 auto;
        }
        .sitemap-card {
          background: #FFFFFF;
          border-radius: var(--radius-xl);
          border: 1px solid var(--color-border-light);
          padding: 2.5rem;
          box-shadow: var(--shadow-sm);
        }
        .sitemap-card-header {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1.75rem;
          padding-bottom: 1.25rem;
          border-bottom: 1px solid var(--color-border-light);
        }
        .sitemap-icon-box {
          width: 44px;
          height: 44px;
          border-radius: var(--radius-md);
          background: var(--color-bg-subtle);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .sitemap-section-title {
          font-size: 1.4rem;
          color: var(--color-text-main);
        }
        .sitemap-links-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }
        .sitemap-link-item {
          border-radius: var(--radius-md);
          overflow: hidden;
        }
        .sitemap-btn-link {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1rem 1.25rem;
          background: var(--color-bg-subtle);
          border: 1px solid var(--color-border-light);
          border-radius: var(--radius-md);
          cursor: pointer;
          text-align: left;
          transition: all var(--transition-fast);
        }
        .sitemap-btn-link:hover {
          background: var(--color-primary-light);
          border-color: rgba(225, 40, 91, 0.3);
          transform: translateX(4px);
        }
        .sitemap-link-content {
          display: flex;
          flex-direction: column;
          gap: 0.2rem;
        }
        .link-title-text {
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: 1.05rem;
          color: var(--color-text-main);
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }
        .link-path-code {
          font-family: monospace;
          font-size: 0.8125rem;
          font-weight: 500;
          color: var(--color-primary);
          background: #FFFFFF;
          padding: 0.15rem 0.45rem;
          border-radius: var(--radius-sm);
          border: 1px solid var(--color-border);
        }
        .link-desc-text {
          font-size: 0.875rem;
          color: var(--color-text-muted);
        }
        .link-chevron {
          color: var(--color-text-light);
          flex-shrink: 0;
        }
      `}</style>
    </div>
  );
};
