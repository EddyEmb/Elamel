import React, { useState } from 'react';
import { useRouter } from '../context/RouterContext';
import { useToast } from '../context/ToastContext';
import { Heart, Sparkles, Mail, Phone, MapPin, CheckCircle2, ShieldCheck } from 'lucide-react';

export const Footer: React.FC = () => {
  const { navigate } = useRouter();
  const { addToast } = useToast();
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail || !newsletterEmail.includes('@')) {
      addToast('Please enter a valid email', 'We need a valid email to send our family craft guides.', 'dietary');
      return;
    }
    setIsSubscribed(true);
    addToast('Welcome to the Family Club!', 'Thank you! You will receive free weekend craft stencils & seasonal treat recipes.', 'success');
  };

  return (
    <footer className="site-footer" role="contentinfo" aria-label="Site Footer">
      {/* Newsletter / Family Club Banner */}
      <div className="footer-newsletter-banner">
        <div className="container newsletter-inner">
          <div className="newsletter-text">
            <span className="section-eyebrow">
              <Sparkles size={14} /> Join The Elamel Family Club
            </span>
            <h3 className="newsletter-heading">Receive free weekend painting stencils & seasonal treat recipes</h3>
            <p className="newsletter-sub">No spam, ever. Only wholesome family activities and celebratory seasonal treats.</p>
          </div>

          <div className="newsletter-form-wrap">
            {isSubscribed ? (
              <div className="newsletter-success">
                <CheckCircle2 size={24} color="#10B981" />
                <div>
                  <strong>You're part of the club!</strong>
                  <p>Check your inbox for our welcome bundle of printable family stencils.</p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="newsletter-form">
                <input
                  type="email"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="Enter your family email address..."
                  className="newsletter-input"
                  aria-label="Email address for family newsletter"
                  required
                />
                <button type="submit" className="btn btn-primary">
                  Join Club
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
              Joyful, food-safe ceramic painting kits, artisanal bakery treats, and treasured family keepsakes.
            </p>
            <div className="safety-badge">
              <ShieldCheck size={18} color="#10B981" />
              <span>100% Non-Toxic & Dedicated Peanut-Free Bakery</span>
            </div>
          </div>

          {/* Quick Links: Subbrands */}
          <div className="footer-col">
            <h4 className="footer-col-title">Our Offerings</h4>
            <ul className="footer-nav-list">
              <li>
                <button onClick={() => navigate('/colors')} className="footer-link">
                  Elamel Colors (Ceramic Kits)
                </button>
              </li>
              <li>
                <button onClick={() => navigate('/goodies')} className="footer-link">
                  Elamel Goodies (Cakes & Treats)
                </button>
              </li>
              <li>
                <button onClick={() => navigate('/moments-souvenirs')} className="footer-link">
                  Moments & Souvenirs (Keepsakes)
                </button>
              </li>
              <li>
                <button onClick={() => navigate('/colors')} className="footer-link">
                  Kids & Family Kits
                </button>
              </li>
              <li>
                <button onClick={() => navigate('/goodies')} className="footer-link">
                  Treat Box Assortments
                </button>
              </li>
            </ul>
          </div>

          {/* Company & Support */}
          <div className="footer-col">
            <h4 className="footer-col-title">About & Help</h4>
            <ul className="footer-nav-list">
              <li>
                <button onClick={() => navigate('/about')} className="footer-link">
                  Our Story & Values
                </button>
              </li>
              <li>
                <button onClick={() => navigate('/contact')} className="footer-link">
                  Contact & Inquiries
                </button>
              </li>
              <li>
                <button onClick={() => navigate('/search')} className="footer-link">
                  Search Catalog
                </button>
              </li>
              <li>
                <button onClick={() => navigate('/accessibility')} className="footer-link">
                  Accessibility Statement
                </button>
              </li>
              <li>
                <button onClick={() => navigate('/sitemap')} className="footer-link">
                  Website Sitemap
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="footer-col">
            <h4 className="footer-col-title">Studio & Contact</h4>
            <div className="footer-contact-item">
              <MapPin size={18} className="footer-contact-icon" />
              <span>124 Rainbow Craft Lane, Creative District</span>
            </div>
            <div className="footer-contact-item">
              <Phone size={18} className="footer-contact-icon" />
              <span>+1 (800) 555-ELAMEL</span>
            </div>
            <div className="footer-contact-item">
              <Mail size={18} className="footer-contact-icon" />
              <span>hello@elamel-family.com</span>
            </div>
            <div className="footer-hours">
              <strong>Studio Hours:</strong><br />
              Tuesday – Sunday: 9:00 AM – 6:00 PM
            </div>
          </div>
        </div>

        {/* Bottom Legal & Accessibility Bar */}
        <div className="footer-bottom">
          <p className="copyright-text">
            © {new Date().getFullYear()} <strong>elamel</strong>. All rights reserved. Made with{' '}
            <Heart size={14} color="#E1285B" style={{ display: 'inline', verticalAlign: 'middle' }} /> for families everywhere.
          </p>
          <div className="footer-legal-links">
            <button onClick={() => navigate('/privacy')} className="footer-legal-btn">
              Privacy Policy
            </button>
            <span aria-hidden="true">•</span>
            <button onClick={() => navigate('/terms')} className="footer-legal-btn">
              Terms of Use
            </button>
            <span aria-hidden="true">•</span>
            <button onClick={() => navigate('/accessibility')} className="footer-legal-btn">
              Accessibility
            </button>
            <span aria-hidden="true">•</span>
            <button onClick={() => navigate('/sitemap')} className="footer-legal-btn">
              Sitemap
            </button>
          </div>
        </div>
      </div>

      <style>{`
        .site-footer {
          background-color: #FFFFFF;
          border-top: 1px solid var(--color-border-light);
          margin-top: 5rem;
        }
        .footer-newsletter-banner {
          background: var(--gradient-rainbow-subtle);
          border-bottom: 1px solid var(--color-border-light);
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
          font-size: 1.5rem;
          margin-bottom: 0.5rem;
        }
        .newsletter-sub {
          color: var(--color-text-muted);
          font-size: 0.9375rem;
          margin: 0;
        }
        .newsletter-form-wrap {
          flex-grow: 1;
          max-width: 480px;
        }
        .newsletter-form {
          display: flex;
          gap: 0.75rem;
        }
        .newsletter-input {
          flex-grow: 1;
          padding: 0.85rem 1.25rem;
          border-radius: var(--radius-full);
          border: 1.5px solid var(--color-border);
          font-family: var(--font-body);
          font-size: 0.9375rem;
        }
        .newsletter-input:focus {
          border-color: var(--color-primary);
          outline: none;
          box-shadow: 0 0 0 3px rgba(225, 40, 91, 0.15);
        }
        .newsletter-success {
          display: flex;
          align-items: center;
          gap: 1rem;
          background: #ECFDF5;
          border: 1px solid #A7F3D0;
          padding: 1rem 1.25rem;
          border-radius: var(--radius-md);
          color: #065F46;
          font-size: 0.875rem;
        }
        .footer-main {
          padding: 4rem 1.5rem 2rem 1.5rem;
        }
        .footer-grid {
          display: grid;
          grid-template-columns: 1.5fr 1fr 1fr 1.2fr;
          gap: 3rem;
          margin-bottom: 3.5rem;
        }
        .footer-logo-img {
          height: 48px;
          margin-bottom: 1.25rem;
        }
        .footer-tagline {
          font-size: 0.9375rem;
          color: var(--color-text-muted);
          line-height: 1.6;
          margin-bottom: 1.25rem;
        }
        .safety-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.8125rem;
          font-weight: 600;
          color: #065F46;
          background: #ECFDF5;
          padding: 0.4rem 0.8rem;
          border-radius: var(--radius-md);
          border: 1px solid #A7F3D0;
        }
        .footer-col-title {
          font-size: 1.1rem;
          margin-bottom: 1.25rem;
          color: var(--color-text-main);
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
          color: var(--color-text-muted);
          font-family: var(--font-body);
          font-size: 0.9375rem;
          cursor: pointer;
          text-align: left;
          padding: 0;
          transition: color var(--transition-fast);
        }
        .footer-link:hover {
          color: var(--color-primary);
          text-decoration: underline;
        }
        .footer-contact-item {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
          margin-bottom: 0.75rem;
          font-size: 0.9375rem;
          color: var(--color-text-muted);
        }
        .footer-contact-icon {
          color: var(--color-primary);
          flex-shrink: 0;
          margin-top: 0.2rem;
        }
        .footer-hours {
          margin-top: 1rem;
          font-size: 0.875rem;
          color: var(--color-text-light);
          padding-top: 0.75rem;
          border-top: 1px dashed var(--color-border);
        }
        .footer-bottom {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 2rem;
          border-top: 1px solid var(--color-border-light);
          font-size: 0.875rem;
          color: var(--color-text-light);
          flex-wrap: wrap;
          gap: 1rem;
        }
        .footer-legal-links {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }
        .footer-legal-btn {
          background: none;
          border: none;
          color: var(--color-text-light);
          font-size: 0.875rem;
          cursor: pointer;
          font-family: inherit;
        }
        .footer-legal-btn:hover {
          color: var(--color-primary);
          text-decoration: underline;
        }

        @media (max-width: 992px) {
          .footer-grid { grid-template-columns: 1fr 1fr; gap: 2rem; }
        }
        @media (max-width: 640px) {
          .footer-grid { grid-template-columns: 1fr; }
          .footer-bottom { flex-direction: column; text-align: center; }
          .footer-legal-links { justify-content: center; }
          .newsletter-form { flex-direction: column; }
        }
      `}</style>
    </footer>
  );
};
