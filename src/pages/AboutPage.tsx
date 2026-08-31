import React from 'react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { useRouter } from '../context/RouterContext';
import { useI18n } from '../context/I18nContext';
import { Sparkles, Heart, ShieldCheck, Users, Calendar, Award, CheckCircle2, ArrowRight, Clock, MapPin } from 'lucide-react';

export const AboutPage: React.FC = () => {
  const { navigate } = useRouter();
  const { t, locale } = useI18n();

  const workshops = locale === 'pt' ? [
    {
      id: 'ws-1',
      title: 'Manhã Familiar de Pintura de Pratos & Pequeno-Almoço',
      date: 'Todos os Sábados, 10:00 – 12:30',
      age: 'A partir dos 4 anos',
      desc: 'Pais e filhos pintam pratos de jantar a condizer enquanto saboreiam croissants frescos e refrescos de frutos silvestres.',
      spotsLeft: 4
    },
    {
      id: 'ws-2',
      title: 'Noite de Caligrafia em Canecas para Casais & Duplas',
      date: 'Todas as Quintas-feiras, 18:30 – 20:30',
      age: 'Jovens & Adultos',
      desc: 'Aprenda técnicas de caligrafia sobre cerâmica e pintura botânica com chá aromático e biscoitos estaladiços.',
      spotsLeft: 6
    },
    {
      id: 'ws-3',
      title: 'Masterclass de Pequenos Mestres Pasteleiros',
      date: 'Todos os Domingos, 14:00 – 15:30',
      age: 'Dos 3 aos 10 anos',
      desc: 'As crianças decoram biscoitos em formato de animais com glacê arco-íris e levam para casa numa lata personalizada.',
      spotsLeft: 3
    }
  ] : [
    {
      id: 'ws-1',
      title: 'Family Breakfast Plate & Paint Morning',
      date: 'Every Saturday, 10:00 AM – 12:30 PM',
      age: 'Ages 4+',
      desc: 'Parents and kids paint matching dinner plates while enjoying fresh croissants and seasonal berry spritzers.',
      spotsLeft: 4
    },
    {
      id: 'ws-2',
      title: 'Couples & Duos Mug Lettering Evening',
      date: 'Every Thursday, 6:30 PM – 8:30 PM',
      age: 'Teens & Adults',
      desc: 'Learn delicate ceramic calligraphy and botanical watercolor glaze techniques with herbal tea and warm biscuits.',
      spotsLeft: 6
    },
    {
      id: 'ws-3',
      title: 'Little Pastry Decorators Masterclass',
      date: 'Every Sunday, 2:00 PM – 3:30 PM',
      age: 'Ages 3–10',
      desc: 'Kids pipe rainbow royal icing and naturally colored sprinkles onto animal cookies to take home in a gift tin.',
      spotsLeft: 3
    }
  ];

  return (
    <div className="about-page">
      <Breadcrumbs />

      {/* Hero Section with Prominent Logo-With-Text */}
      <section className="about-hero-section">
        <div className="container about-hero-container">
          <div className="about-hero-text">
            <span className="section-eyebrow">
              <Sparkles size={14} /> {t('about.story.eyebrow')}
            </span>
            <h1 className="about-main-title">{t('about.story.title')}</h1>
            <p className="about-lead">
              <strong>elamel</strong> {locale === 'pt' ? 'nasceu do sonho de reunir a família à volta da mesa: acreditamos que as memórias mais preciosas se constroem quando as mãos criam arte e os corações partilham doces momentos.' : 'was born from a simple kitchen table dream: that the most precious family memories are created when hands are busy making art and hearts are gathered around delicious treats.'}
            </p>
          </div>

          <div className="about-hero-logo-box">
            <img
              src="./logowith-text.png"
              alt="elamel Colors - Pinte • Crie • Desfrute"
              className="about-hero-logo-img"
            />
            <span className="about-logo-caption">{t('brand.slogan')}</span>
          </div>
        </div>
      </section>

      {/* 1. OUR STORY & STUDIO PHOTO */}
      <section className="section our-story-section">
        <div className="container">
          <div className="story-split-grid">
            <div className="story-media-wrap">
              <img
                src="./images/about_studio.jpg"
                alt="O acolhedor estúdio de cerâmica e pastelaria artesanal Elamel"
                className="story-studio-img"
              />
              <div className="story-experience-tag">
                <Heart size={20} color="#E1285B" />
                <div>
                  <strong>{locale === 'pt' ? 'Um Lar para Cada Geração' : 'A Home for Every Generation'}</strong>
                  <span>{locale === 'pt' ? 'Estúdio de cerâmica & pastelaria sob o mesmo tecto' : 'Pottery studio & bakery under one roof'}</span>
                </div>
              </div>
            </div>

            <div className="story-content-wrap">
              <span className="section-eyebrow">
                <Heart size={14} /> {locale === 'pt' ? 'Como Tudo Começou' : 'How It All Began'}
              </span>
              <h2 className="story-heading">{locale === 'pt' ? 'Onde os Vidrados Cerâmicos se Cruzam com o Aroma a Fornada Doce' : 'Where Ceramic Glazes Meet Sweet Oven Aromas'}</h2>
              <p>
                {locale === 'pt'
                  ? 'Há alguns anos, os nossos fundadores — uma mãe ceramista e um pai mestre pasteleiro — repararam que a maioria dos conjuntos de trabalhos manuais eram complicados e impessoais, enquanto os doces de compra careciam de alma e significado.'
                  : 'A few years ago, our founders—a ceramicist mother and an artisan pastry chef father—noticed how traditional craft kits felt complicated and generic, while store-bought bakery celebrations lacked personal soul.'}
              </p>
              <p>
                {locale === 'pt'
                  ? 'Decidiram unir ambos os mundos num refúgio acolhedor e familiar chamado elamel. Cada peça de cerâmica foi concebida para ser ergonómica e certificada para uso alimentar, enquanto cada bolo e biscoito é confeccionado exclusivamente com ingredientes nobres e sem amendoins.'
                  : 'They set out to unite both worlds into a warm, inclusive sanctuary called elamel. Every ceramic piece is designed with ergonomic comfort and food-safe certification, while every cake and cookie is baked from wholesome, certified peanut-free ingredients.'}
              </p>
              <p>
                {locale === 'pt'
                  ? 'Hoje, a Elamel serve milhares de famílias, escolas e casais por todo o país, disponibilizando kits de pintura entregues ao domicílio, caixas comemorativas de doces e workshops no estúdio onde todas as gerações partilham sorrisos e criatividade.'
                  : 'Today, Elamel serves thousands of families, schools, and couples across the country, providing home-delivered craft kits, celebration treat crates, and in-studio workshops where generations laugh and create side by side.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. OUR FOUR CORE VALUES */}
      <section className="section values-section">
        <div className="container">
          <div className="section-title-wrap">
            <span className="section-eyebrow">
              <Award size={14} /> {t('about.values.eyebrow')}
            </span>
            <h2 className="section-title">{t('about.values.title')}</h2>
            <p className="section-subtitle">
              {t('about.values.subtitle')}
            </p>
          </div>

          <div className="values-grid-4">
            <div className="value-card">
              <div className="value-icon-box bg-rose">
                <ShieldCheck size={28} color="#E1285B" />
              </div>
              <h3 className="value-title">{t('about.values.safety.title')}</h3>
              <p className="value-desc">
                {t('about.values.safety.desc')}
              </p>
            </div>

            <div className="value-card">
              <div className="value-icon-box bg-orange">
                <Sparkles size={28} color="#F8971D" />
              </div>
              <h3 className="value-title">{t('about.values.artisan.title')}</h3>
              <p className="value-desc">
                {t('about.values.artisan.desc')}
              </p>
            </div>

            <div className="value-card">
              <div className="value-icon-box bg-green">
                <Users size={28} color="#10B981" />
              </div>
              <h3 className="value-title">{t('about.values.inclusivity.title')}</h3>
              <p className="value-desc">
                {t('about.values.inclusivity.desc')}
              </p>
            </div>

            <div className="value-card">
              <div className="value-icon-box bg-cyan">
                <Heart size={28} color="#0284C7" />
              </div>
              <h3 className="value-title">{t('about.values.joy.title')}</h3>
              <p className="value-desc">
                {t('about.values.joy.desc')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. QUALITY & SAFETY COMMITMENT */}
      <section className="section safety-standards-section">
        <div className="container">
          <div className="safety-standards-banner">
            <div className="safety-banner-left">
              <span className="section-eyebrow">
                <ShieldCheck size={14} /> {locale === 'pt' ? 'Normas Certificadas' : 'Certified Standards'}
              </span>
              <h2 className="safety-banner-title">{locale === 'pt' ? 'Os Nossos Rigorosos Protocolos de Qualidade & Segurança' : 'Our Rigorous Quality & Safety Protocols'}</h2>
              <p className="safety-banner-text">
                {locale === 'pt'
                  ? 'Como os nossos produtos entram nas cozinhas familiares e tocam nas mãos das crianças, exigimos de nós próprios as mais exigentes certificações independentes.'
                  : 'Because our products enter family kitchens and touch children’s hands, we hold ourselves to the highest independent certifications.'}
              </p>
              <div className="safety-badges-list">
                <div className="safety-badge-row">
                  <CheckCircle2 size={20} color="#10B981" />
                  <span><strong>{locale === 'pt' ? 'Segurança Europeia EN71-3 & ASTM D-4236:' : 'EN71-3 & ASTM D-4236 Toy Safety:'}</strong> {locale === 'pt' ? 'Vidrados minerais certificados à base de água, sem compostos orgânicos voláteis.' : 'Glazes are certified water-based and zero VOCs.'}</span>
                </div>
                <div className="safety-badge-row">
                  <CheckCircle2 size={20} color="#10B981" />
                  <span><strong>{locale === 'pt' ? 'Aptos para Contacto com Alimentos:' : 'Food Contact Approval:'}</strong> {locale === 'pt' ? 'A loiça pintada e cozida no forno ganha uma película vitrificada lisa e 100% inócua.' : 'Tableware glazes are oven-cured into non-porous, food-safe glass sheen.'}</span>
                </div>
                <div className="safety-badge-row">
                  <CheckCircle2 size={20} color="#10B981" />
                  <span><strong>{locale === 'pt' ? 'Pastelaria Sem Amendoins:' : 'Segregated Bakery Kitchen:'}</strong> {locale === 'pt' ? 'Instalações com controlo ambiental de alergénios e testes periódicos por lote.' : 'Dedicated peanut-free facility with air filtration and strict batch testing.'}</span>
                </div>
              </div>
            </div>

            <div className="safety-banner-right">
              <div className="craft-safety-quote-box">
                <Heart size={32} color="#E1285B" />
                <p>
                  {locale === 'pt'
                    ? '"Sendo nós próprios pais, nunca enviaríamos um conjunto de cerâmica nem confecionaríamos um doce que não oferecêssemos com orgulho aos nossos filhos e aos nossos avós."'
                    : '"As parents ourselves, we never ship a ceramic kit or bake a treat that we wouldn’t proudly give to our own toddlers and grandparents."'}
                </p>
                <div className="quote-signer">{locale === 'pt' ? '— A Equipa de Atelier & Cozinha Elamel' : '— The Elamel Craft & Kitchen Team'}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. COMMUNITY & FAMILY WORKSHOPS */}
      <section className="section community-workshops-section">
        <div className="container">
          <div className="section-title-wrap">
            <span className="section-eyebrow">
              <Calendar size={14} /> {t('about.workshops.eyebrow')}
            </span>
            <h2 className="section-title">{t('about.workshops.title')}</h2>
            <p className="section-subtitle">
              {t('about.workshops.subtitle')}
            </p>
          </div>

          <div className="workshops-list-grid">
            {workshops.map((ws) => (
              <div key={ws.id} className="workshop-card">
                <div className="workshop-badge-row">
                  <span className="badge badge-primary">{ws.age}</span>
                  <span className="workshop-spots">{t('about.workshops.spotsLeft', { count: ws.spotsLeft })}</span>
                </div>

                <h3 className="workshop-title">{ws.title}</h3>
                <p className="workshop-desc">{ws.desc}</p>

                <div className="workshop-meta">
                  <div className="meta-item">
                    <Clock size={15} color="#0284C7" />
                    <span>{ws.date}</span>
                  </div>
                  <div className="meta-item">
                    <MapPin size={15} color="#E1285B" />
                    <span>{locale === 'pt' ? 'Atelier Elamel, Sala Criativa' : 'Elamel Studio Workshop, Room 102'}</span>
                  </div>
                </div>

                <button
                  onClick={() => navigate('/contact')}
                  className="btn btn-secondary btn-full-width"
                >
                  {t('about.workshops.inquireAction')} <ArrowRight size={15} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        .about-hero-section {
          background: var(--gradient-rainbow-subtle);
          padding: 4rem 0 3rem 0;
          border-bottom: 1px solid var(--color-border-light);
        }
        .about-hero-container {
          display: grid;
          grid-template-columns: 1.25fr 1fr;
          gap: 3.5rem;
          align-items: center;
        }
        .about-main-title {
          font-size: 2.75rem;
          margin-bottom: 1rem;
        }
        .about-lead {
          font-size: 1.1rem;
          color: var(--color-text-muted);
          line-height: 1.6;
        }
        .about-hero-logo-box {
          background: #FFFFFF;
          border-radius: var(--radius-xl);
          padding: 2.5rem;
          box-shadow: var(--shadow-lg);
          border: 1px solid var(--color-border-light);
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }
        .about-hero-logo-img {
          max-height: 120px;
          margin-bottom: 0.75rem;
        }
        .about-logo-caption {
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: 1.1rem;
          color: var(--color-text-main);
          letter-spacing: 0.05em;
        }
        .story-split-grid {
          display: grid;
          grid-template-columns: 1fr 1.1fr;
          gap: 4rem;
          align-items: center;
        }
        .story-media-wrap {
          position: relative;
        }
        .story-studio-img {
          width: 100%;
          border-radius: var(--radius-xl);
          box-shadow: var(--shadow-xl);
          border: 4px solid #FFFFFF;
          aspect-ratio: 16 / 10;
          object-fit: cover;
        }
        .story-experience-tag {
          position: absolute;
          bottom: -15px;
          right: -15px;
          background: #FFFFFF;
          border-radius: var(--radius-lg);
          padding: 1rem 1.25rem;
          box-shadow: var(--shadow-lg);
          display: flex;
          align-items: center;
          gap: 0.75rem;
          border: 1px solid var(--color-border-light);
        }
        .story-experience-tag strong {
          display: block;
          font-size: 0.95rem;
          color: var(--color-text-main);
        }
        .story-experience-tag span {
          display: block;
          font-size: 0.75rem;
          color: var(--color-text-muted);
        }
        .story-heading {
          font-size: 2.15rem;
          margin-bottom: 1.25rem;
        }
        .story-content-wrap p {
          font-size: 1rem;
          line-height: 1.65;
          margin-bottom: 1.25rem;
        }
        .values-grid-4 {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 1.5rem;
          width: 100%;
        }
        .value-card {
          background: #FFFFFF;
          border-radius: var(--radius-xl);
          border: 1px solid var(--color-border-light);
          padding: 2rem 1.5rem;
          box-shadow: var(--shadow-sm);
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          min-width: 0;
          word-break: break-word;
          overflow-wrap: break-word;
          transition: transform var(--transition-normal);
        }
        .value-card:hover {
          transform: translateY(-5px);
          box-shadow: var(--shadow-lg);
        }
        .value-icon-box {
          width: 56px;
          height: 56px;
          border-radius: var(--radius-lg);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1.25rem;
        }
        .bg-rose { background: var(--color-primary-light); }
        .bg-orange { background: var(--color-orange-light); }
        .bg-green { background: var(--color-green-light); }
        .bg-cyan { background: var(--color-cyan-light); }
        .value-title {
          font-size: 1.2rem;
          margin-bottom: 0.6rem;
          color: var(--color-text-main);
        }
        .value-desc {
          font-size: 0.875rem;
          color: var(--color-text-muted);
          line-height: 1.55;
          margin: 0;
        }
        .safety-standards-banner {
          background: #FFFFFF;
          border-radius: var(--radius-xl);
          border: 1px solid var(--color-border-light);
          padding: 3.5rem;
          box-shadow: var(--shadow-md);
          display: grid;
          grid-template-columns: 1.3fr 1fr;
          gap: 3.5rem;
          align-items: center;
        }
        .safety-banner-title {
          font-size: 2rem;
          margin-bottom: 0.85rem;
        }
        .safety-banner-text {
          font-size: 1rem;
          color: var(--color-text-muted);
          margin-bottom: 1.75rem;
        }
        .safety-badges-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .safety-badge-row {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
          font-size: 0.9375rem;
          color: var(--color-text-muted);
        }
        .craft-safety-quote-box {
          background: var(--gradient-rainbow-subtle);
          border-radius: var(--radius-lg);
          padding: 2.25rem;
          border: 1px solid var(--color-border-light);
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
        }
        .craft-safety-quote-box p {
          font-style: italic;
          font-size: 1rem;
          color: var(--color-text-main);
          line-height: 1.6;
          margin: 0;
        }
        .quote-signer {
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: 0.875rem;
          color: var(--color-primary);
        }
        .workshops-list-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
        }
        .workshop-card {
          background: #FFFFFF;
          border-radius: var(--radius-xl);
          border: 1px solid var(--color-border-light);
          padding: 2rem;
          box-shadow: var(--shadow-sm);
          display: flex;
          flex-direction: column;
          transition: transform var(--transition-normal);
        }
        .workshop-card:hover {
          transform: translateY(-4px);
          box-shadow: var(--shadow-lg);
        }
        .workshop-badge-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 1rem;
        }
        .workshop-spots {
          font-size: 0.75rem;
          font-weight: 700;
          color: var(--color-orange);
          background: var(--color-orange-light);
          padding: 0.2rem 0.5rem;
          border-radius: var(--radius-sm);
        }
        .workshop-title {
          font-size: 1.25rem;
          margin-bottom: 0.6rem;
          color: var(--color-text-main);
        }
        .workshop-desc {
          font-size: 0.875rem;
          color: var(--color-text-muted);
          line-height: 1.5;
          margin-bottom: 1.25rem;
          flex-grow: 1;
        }
        .workshop-meta {
          display: flex;
          flex-direction: column;
          gap: 0.45rem;
          padding-top: 1rem;
          margin-bottom: 1.5rem;
          border-top: 1px solid var(--color-border-light);
          font-size: 0.8125rem;
          color: var(--color-text-muted);
        }
        .meta-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        @media (max-width: 1100px) {
          .values-grid-4 { grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 1.5rem; }
          .workshops-list-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
        }
        @media (max-width: 992px) {
          .about-hero-container { grid-template-columns: 1fr; }
          .story-split-grid { grid-template-columns: 1fr; }
          .safety-standards-banner { grid-template-columns: 1fr; }
        }
        @media (max-width: 640px) {
          .values-grid-4 { grid-template-columns: 1fr; }
          .workshops-list-grid { grid-template-columns: 1fr; }
          .about-main-title { font-size: 2.1rem; }
        }
      `}</style>
    </div>
  );
};
