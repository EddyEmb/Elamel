import React, { useState } from 'react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { useToast } from '../context/ToastContext';
import { useI18n } from '../context/I18nContext';
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
  const { t, locale } = useI18n();

  // Form State
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [interest, setInterest] = useState<string>('Elamel Colors');
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

  const faqItems = locale === 'pt' ? [
    {
      question: 'Os vidrados cerâmicos são realmente seguros para refeições diárias de crianças e bebés?',
      answer: 'Sim, categoricamente. Todos os nossos vidrados minerais são certificados como 100% não-tóxicos, isentos de chumbo e cádmio, em conformidade com as normas europeias EN71-3 e ASTM D-4236. Após a cozedura simples no forno doméstico, a superfície vitrificada é impermeável e totalmente segura para contacto directo com alimentos quentes ou frios.'
    },
    {
      question: 'Como funciona o processo de cozedura dos pratos e canecas em casa?',
      answer: 'É extremamente simples e não requer fornos industriais! Após pintar a sua peça de loiça e deixá-la secar durante 24 horas, basta colocá-la no forno doméstico convencional a 150°C durante 35 minutos. Deixe arrefecer no interior do forno. O vidrado fica permanentemente vitrificado e resistente à lavagem.'
    },
    {
      question: 'A pastelaria Elamel tem garantia de segurança para pessoas alérgicas a amendoins?',
      answer: 'Sim. A nossa cozinha opera com protocolo de exclusão total de amendoins. Todos os fornecedores de farinha, manteiga pura e ovos são auditados. Para itens específicos que contêm frutos de casca rija (como amêndoa moída no bolo fudge), a preparação é efectuada em bancadas estanques e segregadas com identificação destacada.'
    },
    {
      question: 'Qual é o prazo de entrega para as caixas de biscoitos com dedicatória personalizada?',
      answer: 'As caixas com dedicatória personalizada são gravadas e cozinhadas no próprio dia do envio para assegurar a máxima frescura e crocância. O tempo habitual de confecção em atelier é de 2 a 3 dias úteis, seguindo de imediato para entrega expresso climatizada.'
    },
    {
      question: 'Como posso reservar um workshop presencial para a minha família ou festa de anos?',
      answer: 'Pode preencher o formulário nesta página seleccionando "Reserva de Workshop no Atelier" ou contactar o nosso coordenador de eventos através do WhatsApp directo. Recomendamos a reserva com 1 a 2 semanas de antecedência para garantir lugares nos fins de semana.'
    }
  ] : [
    {
      question: 'Are the ceramic glazes truly safe for toddlers and daily family dining?',
      answer: 'Yes, absolutely. All our mineral glazes are certified 100% non-toxic, lead-free, and cadmium-free, complying with European EN71-3 and ASTM D-4236 standards. Once baked in your home oven, the painted surface becomes fully food-safe and dishwasher-safe on the top rack.'
    },
    {
      question: 'How does home oven curing work for painted ceramics?',
      answer: 'It is very simple! After painting your bisque piece and allowing it to air-dry for 24 hours, place it in your standard kitchen oven at 150°C (300°F) for 35 minutes, then let it cool inside. The colors permanently vitrify into a shiny food-safe glaze.'
    },
    {
      question: 'How do you prevent nut and allergen cross-contamination in the bakery?',
      answer: 'Our bakery facility is 100% peanut-free. For items containing tree nuts (such as almond flour in our fudge cake), we use dedicated, air-segregated prep zones with separate tools and thorough sanitization protocols.'
    },
    {
      question: 'What is the turnaround time for personalized message cookie crates and plates?',
      answer: 'Personalized cookie crates take 2 business days to hand-pipe and bake fresh on the morning of dispatch. Hand-lettered heirloom ceramic plates take 3 to 4 days for in-studio painting and kiln firing.'
    },
    {
      question: 'How do I book a private family workshop or birthday celebration?',
      answer: 'You can select "Studio Workshop Booking" in the contact form below or reach out via our studio WhatsApp chat. We recommend reserving 1 to 2 weeks in advance for weekend family sessions.'
    }
  ];

  const validateForm = () => {
    const errs: { [key: string]: string } = {};

    if (!fullName.trim()) {
      errs.fullName = locale === 'pt' ? 'Por favor indique o seu nome completo.' : 'Please enter your name so we know how to address you.';
    }

    if (!email.trim()) {
      errs.email = locale === 'pt' ? 'Por favor introduza o seu correio electrónico para resposta.' : 'Please add your email so we can reply.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errs.email = locale === 'pt' ? 'Por favor introduza um formato de correio electrónico válido.' : 'Please provide a valid email format (e.g., name@domain.com).';
    }

    if (!message.trim()) {
      errs.message = locale === 'pt' ? 'Por favor escreva uma breve mensagem sobre o seu pedido.' : 'Please tell us a little about your family inquiry or celebration.';
    } else if (message.trim().length < 10) {
      errs.message = locale === 'pt' ? 'A sua mensagem deve conter pelo menos 10 caracteres.' : 'Please provide at least 10 characters so we can assist you thoroughly.';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) {
      addToast(
        locale === 'pt' ? 'Verifique os campos do formulário' : 'Please check the form fields',
        locale === 'pt' ? 'Algumas informações obrigatórias estão por preencher.' : 'Some required information is missing or incomplete.',
        'dietary'
      );
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
        locale === 'pt' ? 'Mensagem Enviada com Sucesso!' : 'Thank You!',
        locale === 'pt' ? 'O seu pedido familiar foi recebido. Responderemos com brevidade.' : 'Your family request was received. We’ll contact you soon about your Elamel treat.',
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
              <MessageSquare size={14} /> {t('contact.title')}
            </span>
            <h1 className="cat-page-title">{t('contact.form.title')}</h1>
            <p className="cat-page-lead">
              {t('contact.subtitle')}
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
                  <h3 className="success-heading">{t('contact.form.thankYou', { name: fullName })}</h3>
                  <p className="success-sub">
                    {locale === 'pt' ? `O seu pedido relativo a ` : `Your request regarding `}
                    <strong>{interest}</strong>
                    {locale === 'pt' ? ` foi recebido com sucesso pela nossa equipa de atelier.` : ` has been received by our studio team.`}
                  </p>
                  <p className="success-detail">
                    {locale === 'pt'
                      ? `Responderemos directamente para ${email} dentro de 24 horas úteis com esclarecimentos detalhados.`
                      : `We will reply directly to ${email} within 24 hours with product details, allergen confirmations, or scheduling options.`}
                  </p>
                  <button onClick={handleReset} className="btn btn-primary">
                    {locale === 'pt' ? 'Enviar Nova Mensagem' : 'Send Another Message'}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate aria-label="Formulário de Contacto e Encomendas">
                  <h3 className="form-title">{t('contact.form.title')}</h3>
                  <p className="form-subtitle">{locale === 'pt' ? 'Preencha os campos abaixo e a nossa equipa entrará em contacto com a maior brevidade.' : 'Fill in the fields below and our friendly team will reply promptly.'}</p>

                  <div className="form-group">
                    <label htmlFor="contact-name" className="form-label">
                      {t('contact.form.name')} <span className="required-star" aria-hidden="true">*</span>
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      value={fullName}
                      onChange={(e) => {
                        setFullName(e.target.value);
                        if (errors.fullName) setErrors({ ...errors, fullName: '' });
                      }}
                      placeholder={locale === 'pt' ? 'ex.: Maria Ferreira Pinto' : 'e.g. Elena Rostova'}
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
                        {t('contact.form.email')} <span className="required-star" aria-hidden="true">*</span>
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value);
                          if (errors.email) setErrors({ ...errors, email: '' });
                        }}
                        placeholder={locale === 'pt' ? 'ex.: maria@familia.pt' : 'e.g. elena@family.com'}
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
                        {t('contact.form.phone')} ({locale === 'pt' ? 'Opcional' : 'Optional'})
                      </label>
                      <input
                        id="contact-phone"
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder={locale === 'pt' ? 'ex.: +351 912 345 678' : 'e.g. +1 (800) 555-0199'}
                        className="form-control"
                      />
                    </div>
                  </div>

                  <div className="form-row-2">
                    <div className="form-group">
                      <label htmlFor="contact-interest" className="form-label">
                        {t('contact.form.interest')}
                      </label>
                      <select
                        id="contact-interest"
                        value={interest}
                        onChange={(e) => setInterest(e.target.value)}
                        className="form-control"
                      >
                        <option value="Elamel Colors">{locale === 'pt' ? 'Elamel Colors (Kits de Cerâmica)' : 'Elamel Colors (Ceramic Kits)'}</option>
                        <option value="Elamel Goodies">{locale === 'pt' ? 'Elamel Goodies (Bolos & Biscoitos)' : 'Elamel Goodies (Cakes & Treats)'}</option>
                        <option value="Moments & Souvenirs">{locale === 'pt' ? 'Moments & Souvenirs (Lembranças Personalizadas)' : 'Moments & Souvenirs (Keepsakes)'}</option>
                        <option value="Studio Workshop">{locale === 'pt' ? 'Reserva de Workshop no Atelier' : 'Studio Workshop Booking'}</option>
                        <option value="General Inquiry">{locale === 'pt' ? 'Informação Geral de Família' : 'General Family Inquiry'}</option>
                      </select>
                    </div>

                    <div className="form-group">
                      <label htmlFor="contact-date" className="form-label">
                        {t('contact.form.eventDate')} ({locale === 'pt' ? 'Opcional' : 'Optional'})
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
                        {t('contact.form.message')} <span className="required-star" aria-hidden="true">*</span>
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
                      placeholder={locale === 'pt' ? 'Conte-nos sobre a sua celebração, evento de família ou dúvidas sobre vidrados e alergénios...' : 'Tell us about your event, dietary questions, or custom keepsake ideas...'}
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
                    <Send size={18} /> {isSubmitting ? (locale === 'pt' ? 'A Enviar Pedido...' : 'Sending Request...') : t('contact.form.send')}
                  </button>
                </form>
              )}
            </div>

            {/* Right Information & Channels Column */}
            <div className="contact-info-col">
              <div className="info-card">
                <h3 className="info-card-title">{locale === 'pt' ? 'Canais Directos do Atelier' : 'Direct Studio Channels'}</h3>

                <div className="info-channel-item">
                  <div className="channel-icon-circle">
                    <Mail size={20} color="#E1285B" />
                  </div>
                  <div>
                    <strong>{locale === 'pt' ? 'Correio Electrónico:' : 'Email Inquiries:'}</strong>
                    <a href="mailto:hello@elamel-family.com" className="channel-link">
                      hello@elamel-family.com
                    </a>
                    <span className="channel-sub">{locale === 'pt' ? 'Tempo habitual de resposta: menos de 4 horas' : 'Typical response time: under 4 hours'}</span>
                  </div>
                </div>

                <div className="info-channel-item">
                  <div className="channel-icon-circle">
                    <Phone size={20} color="#0284C7" />
                  </div>
                  <div>
                    <strong>{locale === 'pt' ? 'Atendimento Telefónico:' : 'Phone Support:'}</strong>
                    <a href="tel:+351210000000" className="channel-link">
                      +351 210 000 000
                    </a>
                    <span className="channel-sub">{locale === 'pt' ? 'Terça a Domingo: 09:00 – 18:00' : 'Tuesday – Sunday: 9:00 AM – 6:00 PM'}</span>
                  </div>
                </div>

                <div className="info-channel-item">
                  <div className="channel-icon-circle">
                    <MapPin size={20} color="#10B981" />
                  </div>
                  <div>
                    <strong>{locale === 'pt' ? 'Localização do Atelier & Pastelaria:' : 'Studio & Bakery Location:'}</strong>
                    <address className="channel-address">
                      {locale === 'pt' ? 'Rua das Flores Criativas, 124' : '124 Rainbow Craft Lane'}<br />
                      {locale === 'pt' ? 'Bairro das Artes, Atelier 102' : 'Creative Arts District, Suite 102'}
                    </address>
                    <span className="channel-sub">{locale === 'pt' ? 'Parque familiar e acesso para carrinhos de bebé' : 'Free family parking & stroller accessible'}</span>
                  </div>
                </div>
              </div>

              {/* Direct WhatsApp / Messaging Box */}
              <div className="messaging-card">
                <Sparkles size={24} color="#F8971D" />
                <div>
                  <h4 className="messaging-title">{locale === 'pt' ? 'Precisa de Aconselhamento Rápido para a Festa?' : 'Need Fast Party Planning Advice?'}</h4>
                  <p className="messaging-sub">
                    {locale === 'pt'
                      ? 'Converse directamente com o nosso coordenador de atelier para bolos de aniversário urgentes ou dúvidas sobre workshops.'
                      : 'Chat with our studio coordinator directly for urgent birthday cakes or weekend workshop questions.'}
                  </p>
                  <a
                    href="https://wa.me/351210000000"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary btn-sm"
                  >
                    {locale === 'pt' ? 'Abrir Conversa de WhatsApp' : 'Open Family WhatsApp Chat'} <ArrowRight size={14} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* FAQ Accordion Section */}
          <div className="contact-faq-section">
            <div className="section-title-wrap">
              <span className="section-eyebrow">
                <Sparkles size={14} /> {locale === 'pt' ? 'Perguntas Frequentes' : 'Questions Answered'}
              </span>
              <h2 className="section-title">{locale === 'pt' ? 'Dúvidas & Respostas Mais Comuns' : 'Frequently Asked Questions'}</h2>
              <p className="section-subtitle">
                {locale === 'pt' ? 'Tudo o que precisa de saber sobre vidrados não-tóxicos, cozinha sem amendoins e encomendas familiares.' : 'Everything you need to know about our food-safe glazes, peanut-free kitchen, and shipping.'}
              </p>
            </div>

            <div className="faq-accordion-list">
              {faqItems.map((faq, index) => {
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
          font-size: 0.95rem;
          color: var(--color-text-muted);
          max-width: 480px;
          line-height: 1.5;
        }
        .label-with-counter {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .char-counter {
          font-size: 0.75rem;
          color: var(--color-text-light);
        }
        .contact-info-col {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }
        .info-card {
          background: #FFFFFF;
          border-radius: var(--radius-xl);
          border: 1px solid var(--color-border-light);
          padding: 2.5rem;
          box-shadow: var(--shadow-sm);
          display: flex;
          flex-direction: column;
          gap: 1.75rem;
        }
        .info-card-title {
          font-size: 1.35rem;
          margin-bottom: 0.25rem;
        }
        .info-channel-item {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
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
          font-size: 0.9375rem;
          color: var(--color-text-main);
          margin-bottom: 0.2rem;
        }
        .channel-link {
          display: block;
          font-size: 0.95rem;
          font-weight: 600;
          color: var(--color-primary);
          text-decoration: none;
          margin-bottom: 0.2rem;
        }
        .channel-link:hover {
          text-decoration: underline;
        }
        .channel-address {
          font-style: normal;
          font-size: 0.9375rem;
          color: var(--color-text-muted);
          line-height: 1.4;
          margin-bottom: 0.2rem;
        }
        .channel-sub {
          display: block;
          font-size: 0.75rem;
          color: var(--color-text-light);
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
          font-size: 1.15rem;
          margin-bottom: 0.4rem;
        }
        .messaging-sub {
          font-size: 0.875rem;
          color: var(--color-text-muted);
          line-height: 1.5;
          margin-bottom: 1.25rem;
        }
        .contact-faq-section {
          margin-top: 5rem;
        }
        .faq-accordion-list {
          max-width: 800px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .faq-item-card {
          background: #FFFFFF;
          border-radius: var(--radius-lg);
          border: 1px solid var(--color-border-light);
          overflow: hidden;
          box-shadow: var(--shadow-xs);
          transition: border-color var(--transition-fast);
        }
        .faq-item-card.open {
          border-color: var(--color-primary);
          box-shadow: var(--shadow-sm);
        }
        .faq-question-btn {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1.25rem 1.5rem;
          background: none;
          border: none;
          text-align: left;
          cursor: pointer;
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: 1.05rem;
          color: var(--color-text-main);
          gap: 1rem;
        }
        .faq-item-card.open .faq-question-btn {
          color: var(--color-primary);
        }
        .faq-answer-panel {
          padding: 0 1.5rem 1.5rem 1.5rem;
          font-size: 0.9375rem;
          color: var(--color-text-muted);
          line-height: 1.6;
        }

        @media (max-width: 992px) {
          .contact-layout-grid { grid-template-columns: 1fr; }
        }
        @media (max-width: 640px) {
          .form-row-2 { grid-template-columns: 1fr; }
          .contact-form-card { padding: 1.75rem; }
        }
      `}</style>
    </div>
  );
};
