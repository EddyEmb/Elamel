import React from 'react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { FileText, Scale } from 'lucide-react';

export const TermsPage: React.FC = () => {
  return (
    <div className="policy-page">
      <Breadcrumbs />

      <section className="category-hero-header terms-hero">
        <div className="container">
          <div className="cat-hero-inner">
            <span className="section-eyebrow">
              <Scale size={14} /> Service Terms
            </span>
            <h1 className="cat-page-title">Terms of Use & Family Guarantees</h1>
            <p className="cat-page-lead">
              Clear, transparent guidelines on how we craft your ceramic kits, bake your celebration goodies, and protect your satisfaction.
            </p>
          </div>
        </div>
      </section>

      <section className="section policy-content-section">
        <div className="container">
          <div className="policy-card">
            <div className="policy-header-badge">
              <FileText size={18} color="#0284C7" />
              <span>Terms of Service • Last Updated: 2026</span>
            </div>

            <article className="policy-article">
              <h2>1. Welcome to Elamel</h2>
              <p>
                By using our website, purchasing our ceramic craft kits, or ordering our bakery treats, you agree to the following terms. We keep our terms straightforward, transparent, and fair to all family members.
              </p>

              <h2>2. Product Safety & Intended Use</h2>
              <p>
                <strong>Elamel Colors:</strong> All included glazes are strictly non-toxic, lead-free, and toy-safe. Ceramics must be oven-cured according to included guidelines to achieve durable, food-safe finishes. Adult supervision is recommended when crafting with young children.
              </p>
              <p>
                <strong>Elamel Goodies:</strong> All bakery items are made fresh with clear allergen disclosures. Because treats contain real butter and no synthetic preservatives, please observe the indicated storage guidelines and consume within the recommended freshness window.
              </p>

              <h2>3. Custom Personalisation & Orders</h2>
              <p>
                When submitting personalized text for heirloom plates, mugs, or message cookie crates:
              </p>
              <ul>
                <li>Please double-check the spelling of names, anniversary dates, and messages during your live studio preview.</li>
                <li>We reserve the right to decline text submissions that contain profane, abusive, or discriminatory language in accordance with our family-friendly ethos.</li>
                <li>Customized items undergo a 2-4 business day artisan preparation and kiln cure process before dispatch.</li>
              </ul>

              <h2>4. Quality & Happiness Guarantee</h2>
              <p>
                If your ceramic kit arrives with any damage during transit, or if a bakery item does not meet our high freshness standards, please contact us within 48 hours of receipt with a photo, and we will happily dispatch a complimentary replacement or provide a full refund.
              </p>

              <h2>5. Studio Workshops & Bookings</h2>
              <p>
                Workshop reservations can be rescheduled up to 48 hours prior to the event time free of charge. Children attending workshops must be accompanied by a participating adult.
              </p>

              <h2>6. Contact & Disputes</h2>
              <p>
                We believe in resolving any concern with warmth and fairness. Please reach out to <a href="mailto:support@elamel-family.com">support@elamel-family.com</a> with any feedback or questions.
              </p>
            </article>
          </div>
        </div>
      </section>

      <style>{`
        .terms-hero {
          background: linear-gradient(135deg, rgba(2, 132, 199, 0.08) 0%, rgba(248, 151, 29, 0.08) 50%, rgba(254, 242, 242, 0.5) 100%);
        }
      `}</style>
    </div>
  );
};
