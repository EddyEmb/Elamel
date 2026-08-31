import React, { useState } from 'react';
import { useRouter } from '../context/RouterContext';
import { useToast } from '../context/ToastContext';
import { useI18n } from '../context/I18nContext';
import { Heart, Sparkles, Mail, Phone, MapPin, CheckCircle2, ShieldCheck } from 'lucide-react';

export const Footer: React.FC = () => {
  const { navigate } = useRouter();
  const { addToast } = useToast();
  const { t, locale } = useI18n();
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail || !newsletterEmail.includes('@')) {
      addToast(
        locale === 'pt' ? 'Endereço Inválido' : 'Please enter a valid email',
        locale === 'pt' ? 'Por favor insira um correio electrónico válido.' : 'We need a valid email to send our family craft guides.',
        'dietary'
      );
      return;
    }
    setIsSubscribed(true);
    addToast(
      locale === 'pt' ? 'Bem-vindo ao Clube Familiar!' : 'Welcome to the Family Club!',
      locale === 'pt' ? 'Subscrição confirmada com sucesso. Receberá em breve as nossas novidades.' : 'Thank you! You will receive free weekend craft stencils & seasonal treat recipes.',
      'success'
    );
  };

  return (
    <footer className="site-footer" role="contentinfo" aria-label="Site Footer">
      {/* Newsletter / Family Club Banner */}
      <div className="footer-newsletter-banner">
        <div className="container newsletter-inner">
          <div className="newsletter-text">
            <span className="section-eyebrow">
              <Sparkles size={14} /> {t('footer.newsletterTitle')}
            </span>
            <h3 className="newsletter-heading">{t('footer.newsletterSubtitle')}</h3>
            <p className="newsletter-sub">{t('footer.privacyNotice')}</p>
          </div>

          <div className="newsletter-form-wrap">
            {isSubscribed ? (
              <div className="newsletter-success">
                <CheckCircle2 size={24} color="#10B981" />
                <div>
                  <strong>{locale === 'pt' ? 'Já faz parte do clube!' : "You're part of the club!"}</strong>
                  <p>{locale === 'pt' ? 'Consulte a sua caixa de correio para descarregar o guia de boas-vindas.' : 'Check your inbox for our welcome bundle of printable family stencils.'}</p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="newsletter-form">
                <input
                  type="email"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder={t('footer.newsletterPlaceholder')}
                  className="newsletter-input"
                  aria-label="Email address for family newsletter"
                  required
                />
                <button type="submit" className="btn btn-primary">
                  {t('footer.subscribe')}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="container footer-main">
        <div className="footer-grid">
          {/* Brand Column */}
          <div className="footer-col footer-brand-col">
            <a
              href="#/"
              onClick={(e) => {
                e.preventDefault();
                navigate('/');
              }}
              className="footer-logo-link"
              aria-label="Elamel Home"
            >
              <img src="./logowith-text.png" alt="elamel" className="footer-logo-img" />
            </a>
            <p className="footer-tagline">
              Pinte • Crie • Desfrute<br />
              {t('brand.description')}
            </p>
            <div className="safety-badge">
              <ShieldCheck size={18} color="#10B981" />
              <span>{locale === 'pt' ? '100% Não-Tóxico & Pastelaria Isenta de Amendoins' : '100% Non-Toxic & Dedicated Peanut-Free Bakery'}</span>
            </div>
          </div>

          {/* Quick Links: Subbrands */}
          <div className="footer-col">
            <h4 className="footer-col-title">{locale === 'pt' ? 'As Nossas Criações' : 'Our Offerings'}</h4>
            <ul className="footer-nav-list">
              <li>
                <button onClick={() => navigate('/colors')} className="footer-link">
                  {t('brand.subbrands.colors')}
                </button>
              </li>
              <li>
                <button onClick={() => navigate('/goodies')} className="footer-link">
                  {t('brand.subbrands.goodies')}
                </button>
              </li>
              <li>
                <button onClick={() => navigate('/moments-souvenirs')} className="footer-link">
                  {t('brand.subbrands.moments')}
                </button>
              </li>
              <li>
                <button onClick={() => navigate('/colors')} className="footer-link">
                  {locale === 'pt' ? 'Kits para Crianças e Famílias' : 'Kids & Family Kits'}
                </button>
              </li>
              <li>
                <button onClick={() => navigate('/goodies')} className="footer-link">
                  {locale === 'pt' ? 'Caixas de Iguarias Sortidas' : 'Treat Box Assortments'}
                </button>
              </li>
            </ul>
          </div>

          {/* Company & Support */}
          <div className="footer-col">
            <h4 className="footer-col-title">{locale === 'pt' ? 'Sobre & Ajuda' : 'About & Help'}</h4>
            <ul className="footer-nav-list">
              <li>
                <button onClick={() => navigate('/about')} className="footer-link">
                  {t('nav.about')}
                </button>
              </li>
              <li>
                <button onClick={() => navigate('/contact')} className="footer-link">
                  {t('nav.contact')}
                </button>
              </li>
              <li>
                <button onClick={() => navigate('/search')} className="footer-link">
                  {t('nav.search')}
                </button>
              </li>
              <li>
                <button onClick={() => navigate('/accessibility')} className="footer-link">
                  {t('footer.links.accessibility')}
                </button>
              </li>
              <li>
                <button onClick={() => navigate('/sitemap')} className="footer-link">
                  {t('footer.links.sitemap')}
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="footer-col">
            <h4 className="footer-col-title">{t('contact.addressTitle')}</h4>
            <div className="footer-contact-item">
              <MapPin size={18} className="footer-contact-icon" />
              <span>{t('contact.addressValue')}</span>
            </div>
            <div className="footer-contact-item">
              <Phone size={18} className="footer-contact-icon" />
              <span>{t('contact.phoneValue')}</span>
            </div>
            <div className="footer-contact-item">
              <Mail size={18} className="footer-contact-icon" />
              <span>{t('contact.emailValue')}</span>
            </div>
            <div className="footer-hours">
              <strong>{t('contact.hoursTitle')}:</strong><br />
              <span>{t('contact.hoursValue')}</span>
            </div>
          </div>
        </div>

        {/* Bottom Legal & Accessibility Bar */}
        <div className="footer-bottom">
          <p className="copyright-text">
            © {new Date().getFullYear()} <strong>elamel</strong>. {t('footer.rights')} Made with{' '}
            <Heart size={14} color="#E1285B" style={{ display: 'inline', verticalAlign: 'middle' }} /> {locale === 'pt' ? 'para todas as famílias.' : 'for families everywhere.'}
          </p>
          <div className="footer-legal-links">
            <button onClick={() => navigate('/privacy')} className="footer-legal-btn">
              {t('footer.links.privacy')}
            </button>
            <span aria-hidden="true">•</span>
            <button onClick={() => navigate('/terms')} className="footer-legal-btn">
              {t('footer.links.terms')}
            </button>
            <span aria-hidden="true">•</span>
            <button onClick={() => navigate('/accessibility')} className="footer-legal-btn">
              {t('footer.links.accessibility')}
            </button>
            <span aria-hidden="true">•</span>
            <button onClick={() => navigate('/sitemap')} className="footer-legal-btn">
              {t('footer.links.sitemap')}
            </button>
          </div>
        </div>
      </div>

      {/* Embedded Component CSS */}
      <style>{`
        .site-footer {
          background: #201C1D;
          color: #E2DEDF;
          font-family: var(--font-body);
        }
        .footer-newsletter-banner {
          background: linear-gradient(135deg, rgba(225, 40, 91, 0.15) 0%, rgba(254, 209, 65, 0.1) 100%);
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          padding: 3rem 0;
        }
        .newsletter-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 2.5rem;
          flex-wrap: wrap;
        }
        .newsletter-text {
          max-width: 540px;
        }
        .newsletter-heading {
          font-family: var(--font-heading);
          color: #FFFFFF;
          font-size: 1.5rem;
          font-weight: 700;
          margin: 0.5rem 0 0.4rem 0;
        }
        .newsletter-sub {
          color: #A0989A;
          font-size: 0.9375rem;
          margin: 0;
        }
        .newsletter-form-wrap {
          flex: 1;
          min-width: 280px;
          max-width: 480px;
        }
        .newsletter-form {
          display: flex;
          gap: 0.5rem;
        }
        .newsletter-input {
          flex: 1;
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.18);
          border-radius: var(--radius-full);
          padding: 0.75rem 1.25rem;
          color: #FFFFFF;
          font-family: inherit;
          font-size: 0.9375rem;
          outline: none;
          transition: border-color var(--transition-fast);
        }
        .newsletter-input:focus {
          border-color: var(--color-primary);
          background: rgba(255, 255, 255, 0.12);
        }
        .newsletter-success {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          background: rgba(16, 185, 129, 0.15);
          border: 1px solid rgba(16, 185, 129, 0.3);
          border-radius: var(--radius-md);
          padding: 0.75rem 1.25rem;
          color: #FFFFFF;
          font-size: 0.875rem;
        }
        .footer-main {
          padding: 4rem 1.5rem 2rem 1.5rem;
        }
        .footer-grid {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1.5fr;
          gap: 3rem;
          margin-bottom: 3.5rem;
        }
        .footer-logo-img {
          height: 48px;
          filter: brightness(0) invert(1);
          margin-bottom: 1rem;
        }
        .footer-tagline {
          font-size: 0.9375rem;
          line-height: 1.6;
          color: #A0989A;
          margin-bottom: 1.5rem;
        }
        .safety-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(16, 185, 129, 0.12);
          border: 1px solid rgba(16, 185, 129, 0.25);
          color: #34D399;
          font-size: 0.8125rem;
          font-weight: 600;
          padding: 0.4rem 0.75rem;
          border-radius: var(--radius-full);
        }
        .footer-col-title {
          font-family: var(--font-heading);
          color: #FFFFFF;
          font-size: 1.05rem;
          font-weight: 700;
          margin-bottom: 1.25rem;
          letter-spacing: -0.01em;
        }
        .footer-nav-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.65rem;
        }
        .footer-link {
          background: none;
          border: none;
          color: #A0989A;
          font-family: inherit;
          font-size: 0.9375rem;
          cursor: pointer;
          padding: 0;
          text-align: left;
          transition: color var(--transition-fast);
        }
        .footer-link:hover {
          color: #FFFFFF;
          text-decoration: underline;
        }
        .footer-contact-item {
          display: flex;
          align-items: flex-start;
          gap: 0.65rem;
          font-size: 0.875rem;
          color: #A0989A;
          margin-bottom: 0.65rem;
          line-height: 1.4;
        }
        .footer-contact-icon {
          color: var(--color-primary);
          flex-shrink: 0;
          margin-top: 0.15rem;
        }
        .footer-hours {
          margin-top: 1rem;
          font-size: 0.8125rem;
          color: #A0989A;
          line-height: 1.5;
          padding-top: 0.75rem;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
        }
        .footer-bottom {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1.5rem;
          padding-top: 2rem;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          font-size: 0.875rem;
          color: #80787A;
          flex-wrap: wrap;
        }
        .copyright-text {
          margin: 0;
        }
        .footer-legal-links {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }
        .footer-legal-btn {
          background: none;
          border: none;
          color: #80787A;
          font-size: 0.875rem;
          cursor: pointer;
          padding: 0;
          font-family: inherit;
          transition: color var(--transition-fast);
        }
        .footer-legal-btn:hover {
          color: #FFFFFF;
          text-decoration: underline;
        }

        @media (max-width: 900px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr;
            gap: 2rem;
          }
          .footer-brand-col {
            grid-column: span 2;
          }
        }
        @media (max-width: 600px) {
          .footer-grid {
            grid-template-columns: 1fr;
          }
          .footer-brand-col {
            grid-column: span 1;
          }
          .newsletter-form {
            flex-direction: column;
          }
          .footer-bottom {
            flex-direction: column;
            text-align: center;
          }
        }
      `}</style>
    </footer>
  );
};
