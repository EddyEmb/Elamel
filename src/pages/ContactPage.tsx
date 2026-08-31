import React, { useState } from 'react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { FAQ_ITEMS } from '../data/mockData';
import { useToast } from '../context/ToastContext';
import {
  Mail,
  Phone,
  MapPin,
  MessageSquare,
  Send,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import confetti from 'canvas-confetti';

export const ContactPage: React.FC = () => {
  const { addToast } = useToast();

  // Form State
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [interest, setInterest] = useState<'Elamel Colors' | 'Elamel Goodies' | 'Moments & Souvenirs' | 'Studio Workshop' | 'General Inquiry'>('Elamel Colors');
  const [eventDate, setEventDate] = useState('');
  const [message, setMessage] = useState('');
  
  // Validation Errors State
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // FAQ Accordion State
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const validateForm = () => {
    const errs: { [key: string]: string } = {};

    if (!fullName.trim()) {
      errs.fullName = 'Please enter your name so we know how to address you.';
    }

    if (!email.trim()) {
      errs.email = 'Please add your email so we can reply.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errs.email = 'Please provide a valid email format (e.g., name@domain.com).';
    }

    if (!message.trim()) {
      errs.message = 'Please tell us a little about your family inquiry or celebration.';
    } else if (message.trim().length < 10) {
      errs.message = 'Please provide at least 10 characters so we can assist you thoroughly.';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) {
      addToast('Please check the form fields', 'Some required information is missing or incomplete.', 'dietary');
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);

      try {
        confetti({
          particleCount: 70,
          spread: 60,
          origin: { y: 0.65 },
          colors: ['#e1285b', '#f8971d', '#10b981', '#0284c7', '#8b5cf6']
        });
      } catch {
        // ignore
      }

      addToast(
        'Thank You!',
        'Your family request was received. We’ll contact you soon about your Elamel treat.',
        'success'
      );
    }, 600);
  };

  const handleReset = () => {
    setFullName('');
    setEmail('');
    setPhone('');
    setEventDate('');
    setMessage('');
    setErrors({});
    setIsSubmitted(false);
  };

  return (
    <div className="contact-page">
      <Breadcrumbs />

      {/* Hero Header */}
      <section className="category-hero-header contact-hero">
        <div className="container">
          <div className="cat-hero-inner">
            <span className="section-eyebrow">
              <MessageSquare size={14} /> Get in Touch
            </span>
            <h1 className="cat-page-title">Contact & Custom Order Inquiries</h1>
            <p className="cat-page-lead">
              Have a question about glaze non-toxicity, celebration cake flavors, or organizing a custom family workshop?
              We would love to hear from you and assist with your family gathering.
            </p>
          </div>
        </div>
      </section>

      {/* Main Grid: Form + Contact Info */}
      <section className="section contact-main-section">
        <div className="container">
          <div className="contact-layout-grid">
            {/* Left Form Column */}
            <div className="contact-form-card">
              {isSubmitted ? (
                <div className="contact-success-box" role="status" aria-live="polite">
                  <div className="success-icon-wrap">
                    <CheckCircle2 size={56} color="#10B981" />
                  </div>
                  <h3 className="success-heading">Thank You, {fullName}!</h3>
                  <p className="success-sub">
                    Your request regarding <strong>{interest}</strong> has been received by our studio team.
                  </p>
                  <p className="success-detail">
                    We will reply directly to <strong>{email}</strong> within 24 hours with product details, allergen confirmations, or scheduling options.
                  </p>
                  <button onClick={handleReset} className="btn btn-primary">
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate aria-label="Contact and Order Inquiry Form">
                  <h3 className="form-title">Send Us a Message or Pre-order Request</h3>
                  <p className="form-subtitle">Fill in the fields below and our friendly team will reply promptly.</p>

                  <div className="form-group">
                    <label htmlFor="contact-name" className="form-label">
                      Full Name <span className="required-star" aria-hidden="true">*</span>
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      value={fullName}
                      onChange={(e) => {
                        setFullName(e.target.value);
                        if (errors.fullName) setErrors({ ...errors, fullName: '' });
                      }}
                      placeholder="e.g. Elena Rostova"
                      className={`form-control ${errors.fullName ? 'has-error' : ''}`}
                      aria-required="true"
                      aria-describedby={errors.fullName ? 'name-error' : undefined}
                    />
                    {errors.fullName && (
                      <span id="name-error" className="form-error" role="alert">
                        {errors.fullName}
                      </span>
                    )}
                  </div>

                  <div className="form-row-2">
                    <div className="form-group">
                      <label htmlFor="contact-email" className="form-label">
                        Email Address <span className="required-star" aria-hidden="true">*</span>
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value);
                          if (errors.email) setErrors({ ...errors, email: '' });
                        }}
                        placeholder="e.g. elena@family.com"
                        className={`form-control ${errors.email ? 'has-error' : ''}`}
                        aria-required="true"
                        aria-describedby={errors.email ? 'email-error' : undefined}
                      />
                      {errors.email && (
                        <span id="email-error" className="form-error" role="alert">
                          {errors.email}
                        </span>
                      )}
                    </div>

                    <div className="form-group">
                      <label htmlFor="contact-phone" className="form-label">
                        Phone Number (Optional)
                      </label>
                      <input
                        id="contact-phone"
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="e.g. +1 (800) 555-0199"
                        className="form-control"
                      />
                    </div>
                  </div>

                  <div className="form-row-2">
                    <div className="form-group">
                      <label htmlFor="contact-interest" className="form-label">
                        I'm interested in:
                      </label>
                      <select
                        id="contact-interest"
                        value={interest}
                        onChange={(e) => setInterest(e.target.value as any)}
                        className="form-control"
                      >
                        <option value="Elamel Colors">Elamel Colors (Ceramic Kits)</option>
                        <option value="Elamel Goodies">Elamel Goodies (Cakes & Treats)</option>
                        <option value="Moments & Souvenirs">Moments & Souvenirs (Keepsakes)</option>
                        <option value="Studio Workshop">Studio Workshop Booking</option>
                        <option value="General Inquiry">General Family Inquiry</option>
                      </select>
                    </div>

                    <div className="form-group">
                      <label htmlFor="contact-date" className="form-label">
                        Target Celebration Date (Optional)
                      </label>
                      <input
                        id="contact-date"
                        type="date"
                        value={eventDate}
                        onChange={(e) => setEventDate(e.target.value)}
                        className="form-control"
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <div className="label-with-counter">
                      <label htmlFor="contact-message" className="form-label">
                        Message & Details <span className="required-star" aria-hidden="true">*</span>
                      </label>
                      <span className="char-counter" aria-live="polite">
                        {message.length}/500
                      </span>
                    </div>
                    <textarea
                      id="contact-message"
                      rows={4}
                      maxLength={500}
                      value={message}
                      onChange={(e) => {
                        setMessage(e.target.value);
                        if (errors.message) setErrors({ ...errors, message: '' });
                      }}
                      placeholder="Tell us about your event, dietary questions, or custom keepsake ideas..."
                      className={`form-control ${errors.message ? 'has-error' : ''}`}
                      aria-required="true"
                      aria-describedby={errors.message ? 'message-error' : undefined}
                    />
                    {errors.message && (
                      <span id="message-error" className="form-error" role="alert">
                        {errors.message}
                      </span>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn btn-primary btn-lg btn-full-width"
                  >
                    <Send size={18} /> {isSubmitting ? 'Sending Request...' : 'Send Message & Inquiry'}
                  </button>
                </form>
              )}
            </div>

            {/* Right Information & Channels Column */}
            <div className="contact-info-col">
              <div className="info-card">
                <h3 className="info-card-title">Direct Studio Channels</h3>

                <div className="info-channel-item">
                  <div className="channel-icon-circle">
                    <Mail size={20} color="#E1285B" />
                  </div>
                  <div>
                    <strong>Email Inquiries:</strong>
                    <a href="mailto:hello@elamel-family.com" className="channel-link">
                      hello@elamel-family.com
                    </a>
                    <span className="channel-sub">Typical response time: under 4 hours</span>
                  </div>
                </div>

                <div className="info-channel-item">
                  <div className="channel-icon-circle">
                    <Phone size={20} color="#0284C7" />
                  </div>
                  <div>
                    <strong>Phone Support:</strong>
                    <a href="tel:+18005553526" className="channel-link">
                      +1 (800) 555-ELAMEL
                    </a>
                    <span className="channel-sub">Tuesday – Sunday: 9:00 AM – 6:00 PM</span>
                  </div>
                </div>

                <div className="info-channel-item">
                  <div className="channel-icon-circle">
                    <MapPin size={20} color="#10B981" />
                  </div>
                  <div>
                    <strong>Studio & Bakery Location:</strong>
                    <address className="channel-address">
                      124 Rainbow Craft Lane<br />
                      Creative Arts District, Suite 102
                    </address>
                    <span className="channel-sub">Free family parking & stroller accessible</span>
                  </div>
                </div>
              </div>

              {/* Direct WhatsApp / Messaging Box */}
              <div className="messaging-card">
                <Sparkles size={24} color="#F8971D" />
                <div>
                  <h4 className="messaging-title">Need Fast Party Planning Advice?</h4>
                  <p className="messaging-sub">
                    Chat with our studio coordinator directly for urgent birthday cakes or weekend workshop questions.
                  </p>
                  <a
                    href="https://wa.me/18005553526"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary btn-sm"
                  >
                    Open Family WhatsApp Chat <ArrowRight size={14} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* FAQ Accordion Section */}
          <div className="contact-faq-section">
            <div className="section-title-wrap">
              <span className="section-eyebrow">
                <Sparkles size={14} /> Questions Answered
              </span>
              <h2 className="section-title">Frequently Asked Questions</h2>
              <p className="section-subtitle">
                Everything you need to know about our food-safe glazes, peanut-free kitchen, and shipping.
              </p>
            </div>

            <div className="faq-accordion-list">
              {FAQ_ITEMS.map((faq, index) => {
                const isOpen = openFaqIndex === index;
                return (
                  <div key={index} className={`faq-item-card ${isOpen ? 'open' : ''}`}>
                    <button
                      onClick={() => toggleFaq(index)}
                      className="faq-question-btn"
                      aria-expanded={isOpen}
                      aria-controls={`faq-answer-${index}`}
                    >
                      <span className="faq-q-text">{faq.question}</span>
                      {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                    </button>
                    {isOpen && (
                      <div id={`faq-answer-${index}`} className="faq-answer-panel">
                        <p>{faq.answer}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .contact-hero {
          background: linear-gradient(135deg, rgba(2, 132, 199, 0.08) 0%, rgba(225, 40, 91, 0.08) 50%, rgba(254, 242, 242, 0.6) 100%);
        }
        .contact-layout-grid {
          display: grid;
          grid-template-columns: 1.35fr 1fr;
          gap: 3.5rem;
          align-items: start;
        }
        .contact-form-card {
          background: #FFFFFF;
          border-radius: var(--radius-xl);
          border: 1px solid var(--color-border-light);
          padding: 3rem;
          box-shadow: var(--shadow-md);
        }
        .form-title {
          font-size: 1.85rem;
          margin-bottom: 0.4rem;
        }
        .form-subtitle {
          color: var(--color-text-muted);
          font-size: 0.95rem;
          margin-bottom: 2rem;
        }
        .form-row-2 {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.25rem;
        }
        .has-error {
          border-color: #DC2626 !important;
          background-color: #FEF2F2 !important;
        }
        .contact-success-box {
          text-align: center;
          padding: 2rem 1rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
        }
        .success-icon-wrap {
          margin-bottom: 0.5rem;
        }
        .success-heading {
          font-size: 2rem;
          color: #065F46;
        }
        .success-sub {
          font-size: 1.1rem;
          color: var(--color-text-main);
        }
        .success-detail {
          font-size: 0.9375rem;
          color: var(--color-text-muted);
          line-height: 1.6;
          max-width: 480px;
          margin-bottom: 1.5rem;
        }
        .contact-info-col {
          display: flex;
          flex-direction: column;
          gap: 1.75rem;
        }
        .info-card {
          background: #FFFFFF;
          border-radius: var(--radius-xl);
          border: 1px solid var(--color-border-light);
          padding: 2.5rem;
          box-shadow: var(--shadow-sm);
        }
        .info-card-title {
          font-size: 1.35rem;
          margin-bottom: 1.75rem;
        }
        .info-channel-item {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
          margin-bottom: 1.5rem;
        }
        .channel-icon-circle {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: var(--color-bg-subtle);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .info-channel-item strong {
          display: block;
          font-size: 0.95rem;
          color: var(--color-text-main);
          margin-bottom: 0.2rem;
        }
        .channel-link {
          color: var(--color-primary);
          font-weight: 600;
          font-size: 0.9375rem;
        }
        .channel-address {
          font-style: normal;
          color: var(--color-text-muted);
          font-size: 0.875rem;
          line-height: 1.5;
        }
        .channel-sub {
          display: block;
          font-size: 0.75rem;
          color: var(--color-text-light);
          margin-top: 0.25rem;
        }
        .messaging-card {
          background: var(--gradient-rainbow-subtle);
          border-radius: var(--radius-xl);
          border: 1px solid var(--color-border-light);
          padding: 2rem;
          display: flex;
          align-items: flex-start;
          gap: 1rem;
        }
        .messaging-title {
          font-size: 1.1rem;
          margin-bottom: 0.35rem;
        }
        .messaging-sub {
          font-size: 0.875rem;
          color: var(--color-text-muted);
          line-height: 1.5;
          margin-bottom: 1rem;
        }
        .contact-faq-section {
          margin-top: 5rem;
        }
        .faq-accordion-list {
          max-width: 820px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .faq-item-card {
          background: #FFFFFF;
          border: 1px solid var(--color-border-light);
          border-radius: var(--radius-lg);
          box-shadow: var(--shadow-sm);
          overflow: hidden;
          transition: border-color var(--transition-fast);
        }
        .faq-item-card.open {
          border-color: var(--color-primary);
        }
        .faq-question-btn {
          width: 100%;
          padding: 1.25rem 1.5rem;
          background: none;
          border: none;
          display: flex;
          align-items: center;
          justify-content: space-between;
          text-align: left;
          cursor: pointer;
          font-family: var(--font-heading);
          font-size: 1.05rem;
          font-weight: 700;
          color: var(--color-text-main);
        }
        .faq-q-text {
          padding-right: 1rem;
        }
        .faq-answer-panel {
          padding: 0 1.5rem 1.5rem 1.5rem;
          font-size: 0.9375rem;
          color: var(--color-text-muted);
          line-height: 1.65;
        }

        @media (max-width: 992px) {
          .contact-layout-grid { grid-template-columns: 1fr; }
          .contact-form-card { padding: 1.75rem; }
          .form-row-2 { grid-template-columns: 1fr; }
        }
      `}</style>
    </div>
  );
};
