import React from 'react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { useI18n } from '../context/I18nContext';
import { ShieldCheck, Lock, Mail } from 'lucide-react';

export const PrivacyPage: React.FC = () => {
  const { locale } = useI18n();

  return (
    <div className="policy-page">
      <Breadcrumbs />

      <section className="category-hero-header privacy-hero">
        <div className="container">
          <div className="cat-hero-inner">
            <span className="section-eyebrow">
              <ShieldCheck size={14} /> {locale === 'pt' ? 'Confiança & Transparência' : 'Trust & Transparency'}
            </span>
            <h1 className="cat-page-title">{locale === 'pt' ? 'Política de Privacidade & Protecção de Dados Familiares' : 'Privacy Policy & Family Data Protection'}</h1>
            <p className="cat-page-lead">
              {locale === 'pt'
                ? 'Na elamel, tratamos a privacidade da sua família com o mais escrupuloso respeito. Operamos com transparência total, sem venda de dados e com rigorosa protecção da privacidade infantil.'
                : 'At elamel, we treat your family’s privacy with the highest respect. We operate with zero dark patterns, no third-party data selling, and strict child privacy protections.'}
            </p>
          </div>
        </div>
      </section>

      <section className="section policy-content-section">
        <div className="container">
          <div className="policy-card">
            <div className="policy-header-badge">
              <Lock size={18} color="#10B981" />
              <span>{locale === 'pt' ? 'Data de Entrada em Vigor: 2026 • Em conformidade com o RGPD' : 'Effective Date: Updated for 2026 Season • GDPR & COPPA Compliant'}</span>
            </div>

            <article className="policy-article">
              <h2>{locale === 'pt' ? '1. O Nosso Compromisso com as Famílias e Crianças' : '1. Our Commitment to Families and Children'}</h2>
              <p>
                {locale === 'pt'
                  ? 'Reconhecemos que crianças e famílias utilizam a nossa plataforma para explorar kits artísticos e doces de celebração. Não recolhemos intencionalmente dados de menores de 16 anos sem o consentimento comprovado dos pais. Todas as reservas, encomendas e personalizações devem ser realizadas por adultos.'
                  : 'We recognize that children and families use our platform to explore craft kits and bakery treats. We do not intentionally collect personal information directly from children under 13 without verifiable parental consent. All ordering inquiries, workshop bookings, and personalization requests must be completed by an adult.'}
              </p>

              <h2>{locale === 'pt' ? '2. Informação que Recolhemos' : '2. Information We Collect'}</h2>
              <p>
                {locale === 'pt' ? 'Recolhemos unicamente os dados indispensáveis para o processamento das suas encomendas e atendimento ao cliente:' : 'We only collect the minimum information necessary to fulfill your orders, craft inquiries, and provide customer support:'}
              </p>
              <ul>
                <li><strong>{locale === 'pt' ? 'Dados de Contacto:' : 'Contact Details:'}</strong> {locale === 'pt' ? 'Nome completo, endereço de correio electrónico, telefone e morada de expedição para entrega ao domicílio.' : 'Your name, email address, phone number, and optional delivery address when submitting a pre-order request.'}</li>
                <li><strong>{locale === 'pt' ? 'Dados de Personalização:' : 'Personalization Information:'}</strong> {locale === 'pt' ? 'Nomes de família, datas comemorativas e dedicatórias enviadas para gravação em cerâmica ou caixas de madeira.' : 'Family names, dates, or messages you submit for custom engraved ceramics or message cookies.'}</li>
                <li><strong>{locale === 'pt' ? 'Preferências de Acessibilidade:' : 'Browsing & Accessibility Preferences:'}</strong> {locale === 'pt' ? 'Tamanho de letra seleccionado, modo de alto contraste e idioma preferido armazenados localmente no seu navegador.' : 'User settings such as font scaling, high contrast mode, and reduced motion stored locally in your browser.'}</li>
              </ul>

              <h2>{locale === 'pt' ? '3. Finalidade do Tratamento de Dados' : '3. How We Use Your Information'}</h2>
              <p>
                {locale === 'pt' ? 'Os seus dados são utilizados estritamente para:' : 'Your information is used strictly for:'}
              </p>
              <ul>
                <li>{locale === 'pt' ? 'Processamento e expedição das encomendas de cerâmica e pastelaria.' : 'Processing and fulfilling your ceramic kits and bakery orders.'}</li>
                <li>{locale === 'pt' ? 'Comunicação directa sobre o estado de gravação em forno e reservas de workshops.' : 'Communicating updates regarding pre-orders, custom engravings, and workshop reservations.'}</li>
                <li>{locale === 'pt' ? 'Envio da nossa publicação periódica informativa (da qual pode cancelar a subscrição a qualquer momento com um clique).' : 'Sending our optional Family Club newsletter (which you can unsubscribe from at any time with one click).'}</li>
              </ul>

              <h2>{locale === 'pt' ? '4. Ausência de Padrões Obscuros e Não Comercialização de Dados' : '4. Zero Dark Patterns & No Data Selling'}</h2>
              <p>
                {locale === 'pt'
                  ? 'Comprometemo-nos a nunca vender, alugar ou partilhar informações da sua família com empresas terceiras de publicidade. Não utilizamos contadores de pressão enganosos nem cobranças ocultas no nosso sítio.'
                  : 'We pledge that we never sell, rent, or trade your family data to third-party advertisers. There are no deceptive countdown timers, hidden opt-ins, or confusing unsubscribe processes on our website.'}
              </p>

              <h2>{locale === 'pt' ? '5. Conservação e Segurança da Informação' : '5. Data Storage and Security'}</h2>
              <p>
                {locale === 'pt'
                  ? 'Toda a comunicação nesta plataforma é encriptada através de protocolos seguros SSL/TLS. Os dados de personalização são conservados apenas durante o período necessário ao fabrico das peças de cerâmica e salvaguarda da garantia legal.'
                  : 'All data transmitted through our website is encrypted using industry-standard SSL/TLS protocols. Personalization details are kept only for the duration required to manufacture your custom heirloom pieces and maintain customer warranty records.'}
              </p>

              <h2>{locale === 'pt' ? '6. Os Seus Direitos de Privacidade' : '6. Your Privacy Rights'}</h2>
              <p>
                {locale === 'pt'
                  ? 'Tem o direito garantido de consultar, rectificar ou solicitar a eliminação definitiva dos seus dados pessoais em qualquer altura. Basta enviar uma mensagem para o nosso encarregado de protecção de dados através de privacy@elamel-family.com.'
                  : 'You have the full right to access, update, or permanently delete your personal information from our systems at any time. Simply reach out to our privacy coordinator at privacy@elamel-family.com.'}
              </p>

              <div className="policy-contact-box">
                <Mail size={24} color="#E1285B" />
                <div>
                  <strong>{locale === 'pt' ? 'Dúvidas sobre a nossa política de privacidade?' : 'Questions about our privacy practices?'}</strong>
                  <p>{locale === 'pt' ? 'Contacte o nosso responsável de protecção de dados em privacy@elamel-family.com ou ligue +351 210 000 000.' : 'Contact our Data Protection Officer at privacy@elamel-family.com or call +1 (800) 555-ELAMEL.'}</p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      <style>{`
        .privacy-hero {
          background: linear-gradient(135deg, rgba(16, 185, 129, 0.08) 0%, rgba(2, 132, 199, 0.08) 50%, rgba(254, 242, 242, 0.5) 100%);
        }
        .policy-card {
          background: #FFFFFF;
          border-radius: var(--radius-xl);
          border: 1px solid var(--color-border-light);
          padding: 3.5rem;
          box-shadow: var(--shadow-sm);
          max-width: 860px;
          margin: 0 auto;
        }
        .policy-header-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: #ECFDF5;
          border: 1px solid #A7F3D0;
          padding: 0.4rem 0.9rem;
          border-radius: var(--radius-md);
          font-size: 0.8125rem;
          font-weight: 600;
          color: #065F46;
          margin-bottom: 2rem;
        }
        .policy-article h2 {
          font-size: 1.45rem;
          margin-top: 2rem;
          margin-bottom: 0.75rem;
          color: var(--color-text-main);
        }
        .policy-article p {
          font-size: 1rem;
          line-height: 1.7;
          color: var(--color-text-muted);
          margin-bottom: 1rem;
        }
        .policy-article ul {
          margin-left: 1.5rem;
          margin-bottom: 1.5rem;
          color: var(--color-text-muted);
          line-height: 1.6;
        }
        .policy-article li {
          margin-bottom: 0.4rem;
        }
        .policy-contact-box {
          margin-top: 3rem;
          background: var(--color-bg-subtle);
          border-radius: var(--radius-lg);
          padding: 1.75rem;
          border: 1px solid var(--color-border-light);
          display: flex;
          align-items: center;
          gap: 1.25rem;
        }
        .policy-contact-box strong {
          display: block;
          font-size: 1rem;
          color: var(--color-text-main);
          margin-bottom: 0.25rem;
        }
        .policy-contact-box p {
          margin: 0;
          font-size: 0.875rem;
        }

        @media (max-width: 768px) {
          .policy-card { padding: 1.75rem; }
        }
      `}</style>
    </div>
  );
};
