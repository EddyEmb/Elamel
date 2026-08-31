import React from 'react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { useI18n } from '../context/I18nContext';
import { FileText, Scale } from 'lucide-react';

export const TermsPage: React.FC = () => {
  const { locale } = useI18n();

  return (
    <div className="policy-page">
      <Breadcrumbs />

      <section className="category-hero-header terms-hero">
        <div className="container">
          <div className="cat-hero-inner">
            <span className="section-eyebrow">
              <Scale size={14} /> {locale === 'pt' ? 'Termos de Serviço' : 'Service Terms'}
            </span>
            <h1 className="cat-page-title">{locale === 'pt' ? 'Termos de Utilização & Garantias Familiares' : 'Terms of Use & Family Guarantees'}</h1>
            <p className="cat-page-lead">
              {locale === 'pt'
                ? 'Directrizes transparentes e claras sobre o fabrico dos nossos conjuntos de cerâmica, confecção de pastelaria fresca e compromisso com a satisfação da sua família.'
                : 'Clear, transparent guidelines on how we craft your ceramic kits, bake your celebration goodies, and protect your satisfaction.'}
            </p>
          </div>
        </div>
      </section>

      <section className="section policy-content-section">
        <div className="container">
          <div className="policy-card">
            <div className="policy-header-badge">
              <FileText size={18} color="#0284C7" />
              <span>{locale === 'pt' ? 'Termos de Serviço • Actualizado em 2026' : 'Terms of Service • Last Updated: 2026'}</span>
            </div>

            <article className="policy-article">
              <h2>{locale === 'pt' ? '1. Bem-vindo à Elamel' : '1. Welcome to Elamel'}</h2>
              <p>
                {locale === 'pt'
                  ? 'Ao utilizar a nossa plataforma, encomendar os nossos conjuntos de cerâmica criativa ou requisitar iguarias de pastelaria, aceita as presentes condições. Mantemos as nossas regras simples, transparentes e justas para todas as famílias.'
                  : 'By using our website, purchasing our ceramic craft kits, or ordering our bakery treats, you agree to the following terms. We keep our terms straightforward, transparent, and fair to all family members.'}
              </p>

              <h2>{locale === 'pt' ? '2. Segurança dos Produtos & Utilização Prevista' : '2. Product Safety & Intended Use'}</h2>
              <p>
                <strong>{locale === 'pt' ? 'Elamel Colors:' : 'Elamel Colors:'}</strong> {locale === 'pt'
                  ? 'Todos os vidrados incluídos são estritamente não-tóxicos, isentos de chumbo e seguros para brinquedos. A loiça deve ser cozida no forno doméstico de acordo com o guia incluído para garantir durabilidade e aptidão alimentar. A supervisão de adultos é recomendada para crianças de tenra idade.'
                  : 'All included glazes are strictly non-toxic, lead-free, and toy-safe. Ceramics must be oven-cured according to included guidelines to achieve durable, food-safe finishes. Adult supervision is recommended when crafting with young children.'}
              </p>
              <p>
                <strong>{locale === 'pt' ? 'Elamel Goodies:' : 'Elamel Goodies:'}</strong> {locale === 'pt'
                  ? 'Todos os produtos de pastelaria são confecionados no próprio dia com informação detalhada de ingredientes e alergénios. Como contêm manteiga nobre e não possuem conservantes artificiais, devem ser conservados conforme as instruções de frescura indicadas.'
                  : 'All bakery items are made fresh with clear allergen disclosures. Because treats contain real butter and no synthetic preservatives, please observe the indicated storage guidelines and consume within the recommended freshness window.'}
              </p>

              <h2>{locale === 'pt' ? '3. Personalizações & Encomendas à Medida' : '3. Custom Personalisation & Orders'}</h2>
              <p>
                {locale === 'pt' ? 'Ao submeter textos ou nomes para gravação em pratos, canecas ou caixas de biscoitos:' : 'When submitting personalized text for heirloom plates, mugs, or message cookie crates:'}
              </p>
              <ul>
                <li>{locale === 'pt' ? 'Verifique atentamente a ortografia dos nomes e datas durante a pré-visualização no estúdio interactivo.' : 'Please double-check the spelling of names, anniversary dates, and messages during your live studio preview.'}</li>
                <li>{locale === 'pt' ? 'Reservamo-nos o direito de recusar dedicatórias com linguagem ofensiva ou discriminatória, em respeito pelo espírito familiar da nossa marca.' : 'We reserve the right to decline text submissions that contain profane, abusive, or discriminatory language in accordance with our family-friendly ethos.'}</li>
                <li>{locale === 'pt' ? 'As peças personalizadas requerem entre 2 a 4 dias úteis de trabalho artesanal em forno antes da expedição.' : 'Customized items undergo a 2-4 business day artisan preparation and kiln cure process before dispatch.'}</li>
              </ul>

              <h2>{locale === 'pt' ? '4. Garantia de Qualidade & Satisfação' : '4. Quality & Happiness Guarantee'}</h2>
              <p>
                {locale === 'pt'
                  ? 'Caso a sua encomenda de cerâmica sofra algum dano durante o transporte, ou caso um artigo de pastelaria não corresponda aos nossos elevados padrões de frescura, contacte-nos nas primeiras 48 horas após a recepção com fotografia da embalagem. Procederemos de imediato ao reenvio de nova unidade ou à devolução integral do valor.'
                  : 'If your ceramic kit arrives with any damage during transit, or if a bakery item does not meet our high freshness standards, please contact us within 48 hours of receipt with a photo, and we will happily dispatch a complimentary replacement or provide a full refund.'}
              </p>

              <h2>{locale === 'pt' ? '5. Workshops & Eventos Presenciais' : '5. Studio Workshops & Bookings'}</h2>
              <p>
                {locale === 'pt'
                  ? 'As reservas para workshops no atelier podem ser remarcadas gratuitamente até 48 horas antes da data marcada. Crianças com idade inferior a 12 anos devem ser acompanhadas por um adulto responsável.'
                  : 'Workshop reservations can be rescheduled up to 48 hours prior to the event time free of charge. Children attending workshops must be accompanied by a participating adult.'}
              </p>

              <h2>{locale === 'pt' ? '6. Contacto & Resolução de Questões' : '6. Contact & Disputes'}</h2>
              <p>
                {locale === 'pt'
                  ? 'Acreditamos no diálogo próximo e acolhedor para resolver qualquer situação. Envie-nos as suas dúvidas ou sugestões através de support@elamel-family.com.'
                  : 'We believe in resolving any concern with warmth and fairness. Please reach out to support@elamel-family.com with any feedback or questions.'}
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
