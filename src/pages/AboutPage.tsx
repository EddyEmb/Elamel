import React from 'react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { useRouter } from '../context/RouterContext';
import { Sparkles, Heart, ShieldCheck, Users, Calendar, Award, CheckCircle2, ArrowRight, Clock, MapPin } from 'lucide-react';

export const AboutPage: React.FC = () => {
  const { navigate } = useRouter();

  const workshops = [
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
              <Sparkles size={14} /> Our Story & Heart
            </span>
            <h1 className="about-main-title">Crafting Colors, Baking Joy, Celebrating Families</h1>
            <p className="about-lead">
              <strong>elamel</strong> was born from a simple kitchen table dream: that the most precious family memories are created when hands are busy making art and hearts are gathered around delicious treats.
            </p>
          </div>

          <div className="about-hero-logo-box">
            <img
              src="/logowith-text.png"
              alt="elamel Colors - Pinte • Crie • Desfrute"
              className="about-hero-logo-img"
            />
            <span className="about-logo-caption">Pinte • Crie • Desfrute</span>
          </div>
        </div>
      </section>

      {/* 1. OUR STORY & STUDIO PHOTO */}
      <section className="section our-story-section">
        <div className="container">
          <div className="story-split-grid">
            <div className="story-media-wrap">
              <img
                src="/images/about_studio.jpg"
                alt="The Elamel welcoming artisan craft studio and fresh bakery counter"
                className="story-studio-img"
              />
              <div className="story-experience-tag">
                <Heart size={20} color="#E1285B" />
                <div>
                  <strong>A Home for Every Generation</strong>
                  <span>Pottery studio & bakery under one roof</span>
                </div>
              </div>
            </div>

            <div className="story-content-wrap">
              <span className="section-eyebrow">
                <Heart size={14} /> How It All Began
              </span>
              <h2 className="story-heading">Where Ceramic Glazes Meet Sweet Oven Aromas</h2>
              <p>
                A few years ago, our founders—a ceramicist mother and an artisan pastry chef father—noticed how traditional craft kits felt complicated and generic, while store-bought bakery celebrations lacked personal soul.
              </p>
              <p>
                They set out to unite both worlds into a warm, inclusive sanctuary called <strong>elamel</strong>. Every ceramic piece is designed with ergonomic comfort and food-safe certification, while every cake and cookie is baked from wholesome, certified peanut-free ingredients.
              </p>
              <p>
                Today, Elamel serves thousands of families, schools, and couples across the country, providing home-delivered craft kits, celebration treat crates, and in-studio workshops where generations laugh and create side by side.
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
              <Award size={14} /> Guiding Principles
            </span>
            <h2 className="section-title">Our Values in Everything We Make</h2>
            <p className="section-subtitle">
              Every glaze pot, cookie recipe, and personalized plate is created under strict standards of safety, inclusivity, and joy.
            </p>
          </div>

          <div className="values-grid-4">
            <div className="value-card">
              <div className="value-icon-box bg-rose">
                <ShieldCheck size={28} color="#E1285B" />
              </div>
              <h3 className="value-title">1. Absolute Safety & Health</h3>
              <p className="value-desc">
                Certified 100% lead-free, non-toxic mineral glazes and a dedicated peanut-free bakery environment with rigorous dietary segregation.
              </p>
            </div>

            <div className="value-card">
              <div className="value-icon-box bg-orange">
                <Sparkles size={28} color="#F8971D" />
              </div>
              <h3 className="value-title">2. Artisan Craft Quality</h3>
              <p className="value-desc">
                High-fired white bisque porcelain, European grass-fed butter, real Madagascar vanilla beans, and hand-inspected packaging.
              </p>
            </div>

            <div className="value-card">
              <div className="value-icon-box bg-green">
                <Users size={28} color="#10B981" />
              </div>
              <h3 className="value-title">3. Warm Inclusivity</h3>
              <p className="value-desc">
                Everyone is welcomed as an artist and baker. Accessible web navigation, inclusive sensory pacing, and language suited for all ages.
              </p>
            </div>

            <div className="value-card">
              <div className="value-icon-box bg-cyan">
                <Heart size={28} color="#0284C7" />
              </div>
              <h3 className="value-title">4. Wholesome Joy</h3>
              <p className="value-desc">
                Encouraging shared laughter over perfection. There are no mistakes in painting or cookie decorating—only sweet memories!
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
                <ShieldCheck size={14} /> Certified Standards
              </span>
              <h2 className="safety-banner-title">Our Rigorous Quality & Safety Protocols</h2>
              <p className="safety-banner-text">
                Because our products enter family kitchens and touch children’s hands, we hold ourselves to the highest independent certifications.
              </p>
              <div className="safety-badges-list">
                <div className="safety-badge-row">
                  <CheckCircle2 size={20} color="#10B981" />
                  <span><strong>EN71-3 & ASTM D-4236 Toy Safety:</strong> Glazes are certified water-based and zero VOCs.</span>
                </div>
                <div className="safety-badge-row">
                  <CheckCircle2 size={20} color="#10B981" />
                  <span><strong>Food Contact Approval:</strong> Tableware glazes are oven-cured into non-porous, food-safe glass sheen.</span>
                </div>
                <div className="safety-badge-row">
                  <CheckCircle2 size={20} color="#10B981" />
                  <span><strong>Segregated Bakery Kitchen:</strong> Dedicated peanut-free facility with air filtration and strict batch testing.</span>
                </div>
              </div>
            </div>

            <div className="safety-banner-right">
              <div className="craft-safety-quote-box">
                <Heart size={32} color="#E1285B" />
                <p>
                  "As parents ourselves, we never ship a ceramic kit or bake a treat that we wouldn’t proudly give to our own toddlers and grandparents."
                </p>
                <div className="quote-signer">— The Elamel Craft & Kitchen Team</div>
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
              <Calendar size={14} /> Join Us In Person
            </span>
            <h2 className="section-title">Studio Family Workshops & Community Events</h2>
            <p className="section-subtitle">
              Come visit our studio for guided painting sessions, afternoon tea masterclasses, and school holiday celebrations.
            </p>
          </div>

          <div className="workshops-list-grid">
            {workshops.map((ws) => (
              <div key={ws.id} className="workshop-card">
                <div className="workshop-badge-row">
                  <span className="badge badge-primary">{ws.age}</span>
                  <span className="workshop-spots">{ws.spotsLeft} spots available</span>
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
                    <span>Elamel Studio Workshop, Room 102</span>
                  </div>
                </div>

                <button
                  onClick={() => navigate('/contact')}
                  className="btn btn-secondary btn-full-width"
                >
                  Inquire & Reserve Seats <ArrowRight size={15} />
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
          grid-template-columns: repeat(4, 1fr);
          gap: 1.75rem;
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

        @media (max-width: 992px) {
          .about-hero-container { grid-template-columns: 1fr; }
          .story-split-grid { grid-template-columns: 1fr; }
          .values-grid-4 { grid-template-columns: 1fr 1fr; }
          .safety-standards-banner { grid-template-columns: 1fr; }
          .workshops-list-grid { grid-template-columns: 1fr; }
        }
        @media (max-width: 640px) {
          .values-grid-4 { grid-template-columns: 1fr; }
          .about-main-title { font-size: 2.1rem; }
        }
      `}</style>
    </div>
  );
};
