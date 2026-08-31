import React from 'react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { ShieldCheck, Lock, Mail } from 'lucide-react';

export const PrivacyPage: React.FC = () => {
  return (
    <div className="policy-page">
      <Breadcrumbs />

      <section className="category-hero-header privacy-hero">
        <div className="container">
          <div className="cat-hero-inner">
            <span className="section-eyebrow">
              <ShieldCheck size={14} /> Trust & Transparency
            </span>
            <h1 className="cat-page-title">Privacy Policy & Family Data Protection</h1>
            <p className="cat-page-lead">
              At <strong>elamel</strong>, we treat your family’s privacy with the highest respect. We operate with zero dark patterns, no third-party data selling, and strict child privacy protections.
            </p>
          </div>
        </div>
      </section>

      <section className="section policy-content-section">
        <div className="container">
          <div className="policy-card">
            <div className="policy-header-badge">
              <Lock size={18} color="#10B981" />
              <span>Effective Date: Updated for 2026 Season • GDPR & COPPA Compliant</span>
            </div>

            <article className="policy-article">
              <h2>1. Our Commitment to Families and Children</h2>
              <p>
                We recognize that children and families use our platform to explore craft kits and bakery treats. We do not intentionally collect personal information directly from children under 13 without verifiable parental consent. All ordering inquiries, workshop bookings, and personalization requests must be completed by an adult.
              </p>

              <h2>2. Information We Collect</h2>
              <p>
                We only collect the minimum information necessary to fulfill your orders, craft inquiries, and provide customer support:
              </p>
              <ul>
                <li><strong>Contact Details:</strong> Your name, email address, phone number, and optional delivery address when submitting a pre-order request.</li>
                <li><strong>Personalization Information:</strong> Family names, dates, or messages you submit for custom engraved ceramics or message cookies.</li>
                <li><strong>Browsing & Accessibility Preferences:</strong> User settings such as font scaling, high contrast mode, and reduced motion stored locally in your browser.</li>
              </ul>

              <h2>3. How We Use Your Information</h2>
              <p>
                Your information is used strictly for:
              </p>
              <ul>
                <li>Processing and fulfilling your ceramic kits and bakery orders.</li>
                <li>Communicating updates regarding pre-orders, custom engravings, and workshop reservations.</li>
                <li>Sending our optional Family Club newsletter (which you can unsubscribe from at any time with one click).</li>
              </ul>

              <h2>4. Zero Dark Patterns & No Data Selling</h2>
              <p>
                We pledge that we <strong>never</strong> sell, rent, or trade your family data to third-party advertisers. There are no deceptive countdown timers, hidden opt-ins, or confusing unsubscribe processes on our website.
              </p>

              <h2>5. Data Storage and Security</h2>
              <p>
                All data transmitted through our website is encrypted using industry-standard SSL/TLS protocols. Personalization details are kept only for the duration required to manufacture your custom heirloom pieces and maintain customer warranty records.
              </p>

              <h2>6. Your Privacy Rights</h2>
              <p>
                You have the full right to access, update, or permanently delete your personal information from our systems at any time. Simply reach out to our privacy coordinator at <a href="mailto:privacy@elamel-family.com">privacy@elamel-family.com</a>.
              </p>

              <div className="policy-contact-box">
                <Mail size={24} color="#E1285B" />
                <div>
                  <strong>Questions about our privacy practices?</strong>
                  <p>Contact our Data Protection Officer at <em>privacy@elamel-family.com</em> or call +1 (800) 555-ELAMEL.</p>
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
