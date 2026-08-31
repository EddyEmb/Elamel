import { ColorProduct, GoodiesProduct, PersonalisationItem, Product } from '../types';

export const COLOR_PRODUCTS_EN: ColorProduct[] = [
  {
    id: 'color-1',
    name: 'Family Gathering Dinner Plate Kit',
    category: 'colors',
    subcategory: 'Tableware Colors',
    price: 34.50,
    description: 'A smooth, food-safe porcelain dinner plate with 8 vibrant non-toxic pastel glazes and artist brushes.',
    longDescription: 'Bring the entire family together for a heartwarming craft session! This kit includes a premium unglazed bisque porcelain dinner plate with an embossed botanical rim. Once painted with our specialized non-toxic, lead-free glazes, the plate can be oven-cured at home or clear-glazed to become a daily family treasure.',
    image: './images/product_plate_kit.jpg',
    rating: 4.9,
    reviewCount: 42,
    isFeatured: true,
    tags: ['Family Favorite', 'Food-Safe', 'Non-Toxic', 'Beginner Friendly'],
    dimensions: '27 cm diameter × 2.8 cm depth',
    materials: ['Unglazed white bisque porcelain', '8× 20ml water-based mineral glazes', '3 synthetic fine-tip brushes', 'Natural sea sponge', 'Stencil booklet'],
    careInstructions: [
      'Hand wash with mild soap recommended for painted surfaces',
      'Food-safe when cured according to included simple baking guide',
      'Avoid abrasive scouring pads to maintain vibrant color sheen'
    ],
    safetyInfo: '100% Non-toxic, lead-free, and cadmium-free glazes. Conforms to EN71-3 and ASTM D-4236 standards.',
    recommendedAge: 'Ages 4 and above (with adult supervision for young artists)',
    familyMomentTip: 'Each family member can paint one flower petal or sign their name along the plate rim during Sunday brunch!',
    glazeCount: 8,
    brushCount: 3,
    difficulty: 'Beginner'
  },
  {
    id: 'color-2',
    name: 'Cozy Morning Ceramic Mug Duo Kit',
    category: 'colors',
    subcategory: 'Gift Sets',
    price: 29.00,
    description: 'Set of two handcrafted ceramic mugs with warm pastel paints, perfect for couples and parent-child duos.',
    longDescription: 'Design your own signature morning coffee or hot chocolate mugs! Handcrafted from natural stoneware, these mugs feature smooth ergonomic handles that fit comfortably in both adult and children hands. Comes with 6 rainbow-inspired mixable colors.',
    image: './images/ceramic_kits.jpg',
    rating: 4.8,
    reviewCount: 38,
    isFeatured: true,
    tags: ['Gift Set', 'Couples & Duos', 'Dishwasher Safe', 'Non-Toxic'],
    dimensions: '10 cm height × 8.5 cm diameter (350ml capacity)',
    materials: ['2× Handcrafted stoneware mugs', '6× 25ml creamy ceramic glazes', '2 ergonomic detail brushes', 'Palette mixing tray'],
    careInstructions: [
      'Top-rack dishwasher safe after full oven cure',
      'Microwave safe for hot cocoa and herbal teas',
      'Handle with care when hot'
    ],
    safetyInfo: 'Non-toxic, hypoallergenic water-based formulation. Safe for all beverage contact.',
    recommendedAge: 'All ages (safe for toddlers to make finger-paint handprints)',
    familyMomentTip: 'Create matching morning mugs with sweet hidden messages at the bottom of the cup!',
    glazeCount: 6,
    brushCount: 2,
    difficulty: 'All Ages'
  },
  {
    id: 'color-3',
    name: 'Spring Blossom Pastel Vase Kit',
    category: 'colors',
    subcategory: 'Decorative Pieces',
    price: 38.00,
    description: 'An elegant ribbed ceramic flower vase with gentle pastel glaze paints, golden accent paste, and sponges.',
    longDescription: 'Turn fresh garden flowers into a centerpiece masterpiece. This sculptural ceramic vase has subtle grooved ridges that guide paint blending, making it easy to achieve soft ombre gradients and floral motifs.',
    image: './images/ceramic_kits.jpg',
    rating: 4.9,
    reviewCount: 29,
    isFeatured: false,
    tags: ['Decorative', 'Ombre Blending', 'Home Decor', 'Gift Ready'],
    dimensions: '18 cm height × 11 cm diameter',
    materials: ['Ribbed white bisque vase', '6 pastel mineral glazes', 'Metallic gold ceramic accent paste', 'Foam blending dabbers', 'Design template sheet'],
    careInstructions: [
      'Wipe clean with a damp microfiber cloth',
      'Holds fresh water safely after oven curing',
      'Not intended for dishwasher use'
    ],
    safetyInfo: 'Certified child-safe and non-toxic materials. Contains no harsh solvents or odors.',
    recommendedAge: 'Ages 6 and above',
    familyMomentTip: 'Paint this vase with wildflowers picked on your family Sunday countryside walk.',
    glazeCount: 6,
    brushCount: 2,
    difficulty: 'Intermediate'
  },
  {
    id: 'color-4',
    name: 'Woodland Animal Friends Bisque Set',
    category: 'colors',
    subcategory: 'Kids & Animals',
    price: 26.50,
    description: 'Adorable bisque pottery animal figures (bunny, turtle, bear) with washable child-safe vibrant paints.',
    longDescription: 'Designed specifically for younger children, this set features 3 smooth, sturdy bisque animal figurines with rounded edges and easy-grip surfaces. Includes vibrant washable paints and chunky sponge brushes.',
    image: './images/hero_family.jpg',
    rating: 5.0,
    reviewCount: 56,
    isFeatured: true,
    tags: ['Best for Toddlers', 'Chunky Brushes', 'Washable', 'Safe Fun'],
    dimensions: 'Approx 8 cm height each (3 figures)',
    materials: ['3 smooth bisque animal figures (Bear, Bunny, Turtle)', '6 vibrant washable color pots', '2 chunky soft grip brushes', 'Mess-free craft mat'],
    careInstructions: [
      'Can be wiped clean or sealed with child-safe clear craft glaze',
      'Keep indoors away from harsh outdoor frost'
    ],
    safetyInfo: 'Meets highest European EN71 safety standards for toddler craft toys. Gluten-free, allergen-free paints.',
    recommendedAge: 'Ages 2 to 7 (fun for parents to paint together with toddlers)',
    familyMomentTip: 'Let your toddler pick their favorite animal and tell a bedtime story about the colored character they created!',
    glazeCount: 6,
    brushCount: 2,
    difficulty: 'Easy'
  },
  {
    id: 'color-5',
    name: 'Tapas & Condiment Trio Bowls Kit',
    category: 'colors',
    subcategory: 'Tableware Colors',
    price: 32.00,
    description: 'Set of 3 nesting ceramic condiment & dipping bowls with vibrant Mediterranean-inspired color pots.',
    longDescription: 'Ideal for family taco nights, dipping oils, snacks, and dessert toppings. Paint geometric Mediterranean patterns or bright solid pastels with our high-coverage glaze kit.',
    image: './images/product_plate_kit.jpg',
    rating: 4.7,
    reviewCount: 22,
    isFeatured: false,
    tags: ['Tableware', 'Entertaining', 'Family Snacks', 'Food Safe'],
    dimensions: '12 cm, 10 cm, and 8 cm nesting diameters',
    materials: ['3 bisque stoneware pinch bowls', '6 Mediterranean glazes', 'Fine detail liner brush', 'Pattern stencil sheet'],
    careInstructions: [
      'Dishwasher safe (top rack) once baked',
      'Food-safe for dips, olive oils, and fruit bowls'
    ],
    safetyInfo: 'Food contact safe glazes certified lead and cadmium free.',
    recommendedAge: 'Ages 5 and above',
    familyMomentTip: 'Assign one bowl to each child to paint their favorite family snack symbol.',
    glazeCount: 6,
    brushCount: 2,
    difficulty: 'Beginner'
  },
  {
    id: 'color-6',
    name: 'Grand Family Celebration Platter Kit',
    category: 'colors',
    subcategory: 'Tableware Colors',
    price: 45.00,
    description: 'Extra-large 34cm oval serving platter kit with custom lettering pens, full rainbow glaze set, and display stand.',
    longDescription: 'Our signature family gathering platter! Large enough to fit handprints of grandparents, parents, and children, along with commemorative dates and recipes. Includes a sturdy natural wooden display easel.',
    image: './images/moments_gifts.jpg',
    rating: 4.9,
    reviewCount: 64,
    isFeatured: true,
    tags: ['Heirloom Craft', 'Handprint Memory', 'Extra Large', 'Display Easel Included'],
    dimensions: '34 cm length × 25 cm width × 3.5 cm depth',
    materials: ['Large bisque ceramic oval platter', '10 mineral rainbow glazes', 'Ceramic lettering marker', '4 premium brushes', 'Solid beechwood easel stand'],
    careInstructions: [
      'Gentle hand washing preserves detailed family lettering for decades',
      'Oven cure at 150°C for 35 minutes for permanent food-safe seal'
    ],
    safetyInfo: '100% non-toxic, skin-safe for pressed handprints of babies and toddlers.',
    recommendedAge: 'All ages (intergenerational family project)',
    familyMomentTip: 'Capture the tiny handprint of a new baby surrounded by colorful signatures of the whole family on Thanksgiving or Christmas.',
    glazeCount: 10,
    brushCount: 4,
    difficulty: 'Family Project'
  }
];

export const COLOR_PRODUCTS_PT: ColorProduct[] = [
  {
    id: 'color-1',
    name: 'Kit Prato de Jantar Familiar Botânico',
    category: 'colors',
    subcategory: 'Loiça em Cerâmica',
    price: 34.50,
    description: 'Prato de jantar em faiança fina porosa, com 8 vidrados minerais não-tóxicos e pincéis de precisão.',
    longDescription: 'Reúna toda a família para um momento artístico inesquecível! Este conjunto inclui um prato em faiança fina pronta a pintar com rebordo botânico em relevo. Após a pintura com os nossos vidrados minerais isentos de chumbo, a peça pode ser fixada no forno doméstico para utilização diária à mesa.',
    image: './images/product_plate_kit.jpg',
    rating: 4.9,
    reviewCount: 42,
    isFeatured: true,
    tags: ['Favorito da Família', 'Uso Alimentar', 'Não-Tóxico', 'Iniciação Fácil'],
    dimensions: '27 cm diâmetro × 2.8 cm profundidade',
    materials: ['Faiança fina em biscoito poroso', '8× frascos de 20ml de vidrados minerais à base de água', '3 pincéis sintéticos finos', 'Esponja marinha natural', 'Caderno de moldes e stencils'],
    careInstructions: [
      'Lavagem manual com detergente suave recomendada para preservar a pintura',
      'Apropriado para uso alimentar após cura simples no forno doméstico',
      'Evitar esfregões abrasivos para manter o brilho do vidrado'
    ],
    safetyInfo: 'Vidrados 100% não-tóxicos, isentos de chumbo e cádmio. Certificados segundo as normas EN71-3 e ASTM D-4236.',
    recommendedAge: 'A partir dos 4 anos (com acompanhamento de adultos para os mais pequenos)',
    familyMomentTip: 'Cada membro da família pode pintar uma pétala de flor ou assinar o seu nome no rebordo do prato durante o almoço de domingo!',
    glazeCount: 8,
    brushCount: 3,
    difficulty: 'Iniciação'
  },
  {
    id: 'color-2',
    name: 'Kit Dupla de Canecas Aconchegantes',
    category: 'colors',
    subcategory: 'Conjuntos Presente',
    price: 29.00,
    description: 'Conjunto de duas canecas cerâmicas feitas à mão com tintas pastel quentes, ideais para casais ou pais e filhos.',
    longDescription: 'Crie as suas próprias canecas para o café da manhã ou chocolate quente da tarde! Moldadas à mão em grés natural, apresentam pegas ergonómicas confortáveis para mãos de adultos e crianças. Acompanhadas por 6 vidrados luminosos misturáveis.',
    image: './images/ceramic_kits.jpg',
    rating: 4.8,
    reviewCount: 38,
    isFeatured: true,
    tags: ['Conjunto Presente', 'Casais e Duplas', 'Lavável na Máquina', 'Não-Tóxico'],
    dimensions: '10 cm altura × 8.5 cm diâmetro (Capacidade 350ml)',
    materials: ['2× Canecas em faiança feitas à mão', '6× frascos de 25ml de vidrados cremosos', '2 pincéis ergonómicos', 'Paleta misturadora'],
    careInstructions: [
      'Apto para máquina de lavar loiça no tabuleiro superior após cura no forno',
      'Pode ir ao micro-ondas com chá quente ou leite com chocolate',
      'Manipular com cuidado quando contiver líquidos a ferver'
    ],
    safetyInfo: 'Formulação hipoalergénica à base de água, 100% inócua para contacto directo com bebidas.',
    recommendedAge: 'Todas as idades (seguro para bebés deixarem impressões digitais)',
    familyMomentTip: 'Pintem canecas a condizer com pequenas mensagens de carinho escondidas no fundo da chávena!',
    glazeCount: 6,
    brushCount: 2,
    difficulty: 'Todas as Idades'
  },
  {
    id: 'color-3',
    name: 'Kit Vaso Flor de Primavera em Pastel',
    category: 'colors',
    subcategory: 'Peças Decorativas',
    price: 38.00,
    description: 'Vaso cerâmico canelado para flores com vidrados pastel, pasta de relevo dourada e esponjas de textura.',
    longDescription: 'Transforme flores colhidas no campo no centro de mesa mais bonito da casa. Este vaso escultórico em faiança possui estrias suaves que facilitam a criação de transições em degradé e motivos florais delicados.',
    image: './images/ceramic_kits.jpg',
    rating: 4.9,
    reviewCount: 29,
    isFeatured: false,
    tags: ['Decorativo', 'Efeito Degradé', 'Decoração de Lar', 'Pronto a Oferecer'],
    dimensions: '18 cm altura × 11 cm diâmetro',
    materials: ['Vaso canelado em biscoito cerâmico', '6 vidrados minerais pastel', 'Pasta de realce metálico dourado', 'Esponjas para esbater', 'Folha com sugestões gráficas'],
    careInstructions: [
      'Limpar suavemente com pano de microfibras húmido',
      'Suporta água fresca sem infiltrações após a cozedura no forno',
      'Não indicado para máquina de lavar loiça'
    ],
    safetyInfo: 'Materiais certificados e seguros para o ambiente familiar. Sem solventes químicos ou odores fortes.',
    recommendedAge: 'A partir dos 6 anos',
    familyMomentTip: 'Pinte este vaso para colocar as flores silvestres colhidas no passeio familiar de fim de semana.',
    glazeCount: 6,
    brushCount: 2,
    difficulty: 'Intermédio'
  },
  {
    id: 'color-4',
    name: 'Conjunto Animais da Floresta em Faiança',
    category: 'colors',
    subcategory: 'Infantil & Figuras',
    price: 26.50,
    description: 'Figuras adoráveis de animais (coelho, tartaruga, urso) com tintas minerais laváveis para crianças.',
    longDescription: 'Concebido especificamente para mãos pequeninas, este conjunto inclui 3 estatuetas robustas de contornos suaves e fáceis de segurar. Acompanhado por tintas laváveis com água e pincéis de cabo largo.',
    image: './images/hero_family.jpg',
    rating: 5.0,
    reviewCount: 56,
    isFeatured: true,
    tags: ['Ideal para Crianças Pequenas', 'Pincéis de Cabo Largo', 'Lavável', 'Segurança Total'],
    dimensions: 'Cerca de 8 cm de altura cada (3 figuras)',
    materials: ['3 figuras em biscoito cerâmico macio (Urso, Coelho, Tartaruga)', '6 potes de cores laváveis vivas', '2 pincéis ergonómicos infantis', 'Base impermeável de protecção'],
    careInstructions: [
      'Pode ser limpo com água ou selado com verniz transparente não-tóxico',
      'Manter no interior protegido de geadas fortes'
    ],
    safetyInfo: 'Cumpre integralmente as normas europeias EN71 para brinquedos de crianças pequenas. Sem glúten nem alergénios.',
    recommendedAge: 'Dos 2 aos 7 anos (perfeito para partilha entre pais e filhos)',
    familyMomentTip: 'Deixe o seu filho escolher o animal favorito e inventem juntos uma história para adormecer sobre a personagem que pintaram!',
    glazeCount: 6,
    brushCount: 2,
    difficulty: 'Fácil'
  },
  {
    id: 'color-5',
    name: 'Kit Trio de Taças para Petiscos e Molhos',
    category: 'colors',
    subcategory: 'Loiça em Cerâmica',
    price: 32.00,
    description: 'Conjunto de 3 taças empilháveis para petiscos, azeite e tapas com cores de inspiração mediterrânica.',
    longDescription: 'Excelente para noites de petiscos, azeite com pão fresco, frutos secos e sobremesas. Pinte padrões geométricos tradicionais ou tons lisos vibrantes com a nossa paleta de vidrados de alta cobertura.',
    image: './images/product_plate_kit.jpg',
    rating: 4.7,
    reviewCount: 22,
    isFeatured: false,
    tags: ['Loiça de Mesa', 'Petiscos em Família', 'Uso Alimentar', 'Resistente'],
    dimensions: '12 cm, 10 cm e 8 cm de diâmetro empilháveis',
    materials: ['3 taças em grés cerâmico cru', '6 vidrados minerais mediterrânicos', 'Pincel de traço fino', 'Moldes com motivos geométricos'],
    careInstructions: [
      'Lavável na máquina de lavar loiça no tabuleiro superior após cozedura',
      'Adequado para molhos frios, azeites e azeitonas'
    ],
    safetyInfo: 'Vidrados certificados para contacto com alimentos, isentos de metais pesados.',
    recommendedAge: 'A partir dos 5 anos',
    familyMomentTip: 'Atribua uma taça a cada elemento da família para pintar o seu petisco ou símbolo preferido.',
    glazeCount: 6,
    brushCount: 2,
    difficulty: 'Iniciação'
  },
  {
    id: 'color-6',
    name: 'Kit Grande Travessa Familiar de Celebração',
    category: 'colors',
    subcategory: 'Loiça em Cerâmica',
    price: 45.00,
    description: 'Travessa oval de 34cm com canetas cerâmicas para caligrafia, paleta completa arco-íris e cavalete em madeira.',
    longDescription: 'A nossa peça nobre para reuniões de família! Suficientemente ampla para acolher as impressões das mãos de avós, pais e netos, bem como datas marcantes e receitas queridas. Inclui suporte em madeira de faia natural.',
    image: './images/moments_gifts.jpg',
    rating: 4.9,
    reviewCount: 64,
    isFeatured: true,
    tags: ['Peça de Família', 'Memória com Mãos', 'Formato Nobre', 'Suporte Incluído'],
    dimensions: '34 cm comprimento × 25 cm largura × 3.5 cm profundidade',
    materials: ['Travessa oval de cerâmica em biscoito', '10 vidrados minerais arco-íris', 'Caneta cerâmica para caligrafia', '4 pincéis de precisão', 'Cavalete de exposição em madeira nobre'],
    careInstructions: [
      'Lavagem suave à mão preserva a caligrafia e assinaturas durante décadas',
      'Cozedura no forno a 150°C durante 35 minutos para selagem alimentar definitiva'
    ],
    safetyInfo: 'Vidrados 100% seguros para a pele de recém-nascidos e crianças ao imprimir mãos ou pezinhos.',
    recommendedAge: 'Todas as idades (projecto intergeracional)',
    familyMomentTip: 'Grave a mãozinha pequenina de um bebé recém-chegado rodeada pelas assinaturas carinhosas de toda a família num aniversário especial.',
    glazeCount: 10,
    brushCount: 4,
    difficulty: 'Projecto Familiar'
  }
];

export const GOODIES_PRODUCTS_EN: GoodiesProduct[] = [
  {
    id: 'goodies-1',
    name: 'Signature Forest Berry Sponge Cake',
    category: 'goodies',
    subcategory: 'Family Cakes',
    price: 42.00,
    description: 'Soft vanilla sponge layered with organic raspberry compote, whipped mascarpone cream, and fresh forest berries.',
    longDescription: 'Baked fresh daily with pure French butter, unbleached flour, and fresh hand-picked berries. Light, airy, and gently sweetened so children and grandparents alike can enjoy every bite without heavy sugar overload.',
    image: './images/product_berry_cake.jpg',
    rating: 5.0,
    reviewCount: 88,
    isFeatured: true,
    tags: ['Low Sugar', 'Fresh Berries', 'Celebration', 'Nut-Free Facility'],
    flavorProfile: 'Madagascar vanilla, wild raspberry compote, sweet mascarpone, fresh blueberries',
    portionSize: '8-inch cake (Serves 10–12 slices)',
    servings: 12,
    dietaryTags: ['Vegetarian', 'Nut-Free', 'Low Sugar'],
    ingredients: ['Unbleached wheat flour', 'European butter', 'Pasture-raised eggs', 'Organic raspberries & blueberries', 'Mascarpone cheese', 'Madagascar vanilla bean', 'Cane sugar (low ratio)'],
    allergenWarning: 'Contains Dairy, Wheat (Gluten), and Eggs. Produced in a dedicated peanut-free and tree nut-free kitchen.',
    storageInstructions: 'Keep refrigerated between 2°C – 5°C. Remove 20 minutes before serving for optimal soft texture.',
    servingTemperature: 'Serve chilled or lightly brought to room temperature with fresh tea.'
  },
  {
    id: 'goodies-2',
    name: 'Rainbow Swirl Vanilla Butter Shortbread',
    category: 'goodies',
    subcategory: 'Cookies & Biscuits',
    price: 24.00,
    description: 'Box of 12 melt-in-your-mouth artisanal butter shortbread cookies with pastel royal icing and celebratory swirl art.',
    longDescription: 'Hand-piped by our master bakers, these cookies celebrate the playful rainbow swirl of the Elamel logo. Made with real European butter, a hint of lemon zest, and soft royal icing that provides a crisp bite with a buttery melt.',
    image: './images/goodies_assortment.jpg',
    rating: 4.9,
    reviewCount: 94,
    isFeatured: true,
    tags: ['Hand-Decorated', 'Gift Ready Box', 'Melt-in-Mouth', 'Kids Party'],
    flavorProfile: 'Sweet European butter, hint of natural lemon zest, vanilla icing',
    portionSize: 'Box of 12 cookies (Approx. 450g)',
    servings: 12,
    dietaryTags: ['Vegetarian', 'Nut-Free'],
    ingredients: ['Grade-AA butter', 'Unbleached flour', 'Powdered sugar', 'Natural vegetable colorings (beetroot, turmeric, spirulina)', 'Egg whites', 'Lemon zest'],
    allergenWarning: 'Contains Dairy, Gluten, and Eggs. 100% Peanut-Free guaranteed.',
    storageInstructions: 'Store in airtight box at cool room temperature for up to 14 days.',
    servingTemperature: 'Room temperature with morning coffee or afternoon milk.'
  },
  {
    id: 'goodies-3',
    name: 'Wholesome Little Bear Honey Biscuits',
    category: 'goodies',
    subcategory: 'Cookies & Biscuits',
    price: 16.50,
    description: 'Crunchy, naturally sweetened honey and Ceylon cinnamon biscuits in playful animal shapes with zero refined sugar.',
    longDescription: 'A wholesome, joyful snack created for toddlers and young children. Sweetened exclusively with raw wildflower honey and loaded with whole oats and prebiotic fiber. Comes in a resealable family snack tin.',
    image: './images/goodies_assortment.jpg',
    rating: 4.8,
    reviewCount: 45,
    isFeatured: false,
    tags: ['Zero Refined Sugar', 'Toddler Friendly', 'Whole Oats', 'High Fiber'],
    flavorProfile: 'Wildflower honey, toasted rolled oats, delicate Ceylon cinnamon',
    portionSize: '250g family tin (Approx. 24 mini biscuits)',
    servings: 8,
    dietaryTags: ['Vegetarian', 'Refined Sugar-Free', 'Nut-Free'],
    ingredients: ['Whole rolled oats', 'Spelt flour', 'Raw wildflower honey', 'Cold-pressed coconut oil', 'Ceylon cinnamon', 'Baking soda', 'Sea salt'],
    allergenWarning: 'Contains Gluten (Spelt & Oats). Free from refined sugars, peanuts, and dairy.',
    storageInstructions: 'Store in airtight family tin in a cool, dry pantry for up to 3 weeks.',
    servingTemperature: 'Crunchy at room temperature.'
  },
  {
    id: 'goodies-4',
    name: 'Gluten-Free Belgian Fudge Birthday Cake',
    category: 'goodies',
    subcategory: 'Family Cakes',
    price: 44.00,
    description: 'Decadent 70% dark Belgian chocolate fudge cake with Maldon sea salt flakes and almond flour sponge.',
    longDescription: 'For chocolate lovers with gluten sensitivities! We use premium almond flour and single-origin dark chocolate to achieve an ultra-fudgy texture that rivals any traditional cake.',
    image: './images/goodies_assortment.jpg',
    rating: 4.9,
    reviewCount: 31,
    isFeatured: false,
    tags: ['Gluten-Free', '70% Dark Chocolate', 'Rich Fudge', 'Birthday Choice'],
    flavorProfile: 'Deep Belgian dark chocolate, salted butter caramel, subtle almond note',
    portionSize: '8-inch cake (Serves 10 slices)',
    servings: 10,
    dietaryTags: ['Gluten-Free', 'Vegetarian'],
    ingredients: ['70% Belgian dark chocolate', 'Almond flour', 'Organic butter', 'Pasture-raised eggs', 'Cane sugar', 'Maldon sea salt', 'Pure vanilla extract'],
    allergenWarning: 'Contains Tree Nuts (Almonds), Dairy, and Eggs. Certified Gluten-Free.',
    storageInstructions: 'Keep chilled. Microwave individual slices for 10 seconds for a molten fudge core!',
    servingTemperature: 'Warm or room temperature.'
  },
  {
    id: 'goodies-5',
    name: 'Citrus Meyer Lemon & Poppyseed Loaf',
    category: 'goodies',
    subcategory: 'Family Cakes',
    price: 18.50,
    description: 'Moist Meyer lemon and orange blossom loaf cake drizzled with tangy citrus glaze and crunchy poppyseeds.',
    longDescription: 'The perfect companion for morning coffee or afternoon family tea time. Freshly squeezed Meyer lemons provide a bright sunshine flavor that balances the tender crumb.',
    image: './images/product_berry_cake.jpg',
    rating: 4.7,
    reviewCount: 27,
    isFeatured: false,
    tags: ['Tea Time', 'Citrus Fresh', 'Nut-Free', 'Breakfast Treat'],
    flavorProfile: 'Bright Meyer lemon, floral orange blossom, crunchy poppyseed',
    portionSize: 'Standard loaf (Approx. 8 thick slices)',
    servings: 8,
    dietaryTags: ['Vegetarian', 'Nut-Free'],
    ingredients: ['Flour', 'Butter', 'Fresh Meyer lemon juice & zest', 'Orange blossom water', 'Blue poppyseeds', 'Sugar', 'Eggs', 'Greek yogurt'],
    allergenWarning: 'Contains Dairy, Wheat (Gluten), and Eggs. Nut-free.',
    storageInstructions: 'Wrap in foil or parchment at room temperature for up to 5 days.',
    servingTemperature: 'Room temperature or lightly toasted with butter.'
  },
  {
    id: 'goodies-6',
    name: 'Garden Blossom Pastel Cupcake Box',
    category: 'goodies',
    subcategory: 'Celebration Treats',
    price: 28.00,
    description: 'Assortment of 6 artisan cupcakes decorated like blooming pastel garden roses and hydrangeas in gift presentation.',
    longDescription: 'An edible bouquet! Includes 2 Madagascar Vanilla, 2 Strawberry Cream, and 2 Salted Caramel cupcakes, each hand-piped with intricate floral buttercream petals in soft pastel hues.',
    image: './images/goodies_assortment.jpg',
    rating: 5.0,
    reviewCount: 72,
    isFeatured: true,
    tags: ['Edible Floral Art', 'Gift Box', 'Celebration', 'Nut-Free'],
    flavorProfile: 'Vanilla bean, strawberry compote, salted butter caramel buttercream',
    portionSize: 'Gift box of 6 cupcakes',
    servings: 6,
    dietaryTags: ['Vegetarian', 'Nut-Free'],
    ingredients: ['Cake flour', 'Butter', 'Eggs', 'Sugar', 'Strawberry reduction', 'Vanilla bean', 'Cream cheese', 'Natural food colorings'],
    allergenWarning: 'Contains Dairy, Gluten, and Eggs. Peanut-free.',
    storageInstructions: 'Refrigerate in presentation box. Serve within 48 hours for freshest cream texture.',
    servingTemperature: 'Slightly chilled or room temperature.'
  }
];

export const GOODIES_PRODUCTS_PT: GoodiesProduct[] = [
  {
    id: 'goodies-1',
    name: 'Bolo de Baunilha e Frutos Silvestres do Bosque',
    category: 'goodies',
    subcategory: 'Bolos de Família',
    price: 42.00,
    description: 'Pão-de-ló leve de baunilha com compota artesanal de framboesa, creme mascarpone suave e frutos frescos.',
    longDescription: 'Confeccionado diariamente com manteiga pura, farinha não branqueada e bagas frescas apanhadas à mão. Leve, arejado e com teor moderado de açúcar para que miúdos e graúdos possam desfrutar de cada fatia sem excessos.',
    image: './images/product_berry_cake.jpg',
    rating: 5.0,
    reviewCount: 88,
    isFeatured: true,
    tags: ['Pouco Açúcar', 'Frutos Frescos', 'Celebração', 'Cozinha Sem Amendoins'],
    flavorProfile: 'Baunilha de Madagáscar, compota de framboesa, mascarpone aveludado e mirtilos frescos',
    portionSize: 'Bolo de 20 cm (Serve 10 a 12 fatias generosas)',
    servings: 12,
    dietaryTags: ['Vegetariano', 'Sem Amendoins', 'Baixo Açúcar'],
    ingredients: ['Farinha de trigo não branqueada', 'Manteiga pura europeia', 'Ovos de galinhas criadas ao ar livre', 'Framboesas e mirtilos biológicos', 'Queijo mascarpone', 'Vagem de baunilha', 'Açúcar de cana integral'],
    allergenWarning: 'Contém lacticínios, trigo (glúten) e ovos. Preparado em cozinha estritamente isenta de amendoins e frutos secos.',
    storageInstructions: 'Conservar no frigorífico entre 2°C e 5°C. Retirar 20 minutos antes de servir para textura aveludada.',
    servingTemperature: 'Servir fresco ou ligeiramente à temperatura ambiente com chá aromático.'
  },
  {
    id: 'goodies-2',
    name: 'Biscoitos Amanteigados Espiral do Arco-Íris',
    category: 'goodies',
    subcategory: 'Biscoitos & Bolachas',
    price: 24.00,
    description: 'Caixa de 12 biscoitos estaladiços de manteiga pura com glacê real em tons pastel e o logótipo em espiral.',
    longDescription: 'Decorados à mão com manga de pasteleiro pelos nossos mestres artesãos. Feitos com manteiga europeia de primeira qualidade, raspas de limão fresco e glacê real que derrete deliciosamente na boca.',
    image: './images/goodies_assortment.jpg',
    rating: 4.9,
    reviewCount: 94,
    isFeatured: true,
    tags: ['Decorado à Mão', 'Caixa Presente', 'Derrete na Boca', 'Festas de Crianças'],
    flavorProfile: 'Manteiga nobre, toque subtil de limão natural, glacê de baunilha',
    portionSize: 'Caixa de 12 biscoitos artesanais (Aprox. 450g)',
    servings: 12,
    dietaryTags: ['Vegetariano', 'Sem Amendoins'],
    ingredients: ['Manteiga pura', 'Farinha de trigo', 'Açúcar em pó', 'Corantes vegetais naturais (beterraba, curcuma, espirulina)', 'Claras de ovos', 'Raspa de limão'],
    allergenWarning: 'Contém lacticínios, glúten e ovos. Garantia de 100% livre de amendoins.',
    storageInstructions: 'Guardar em recipiente hermético em local fresco durante até 14 dias.',
    servingTemperature: 'À temperatura ambiente com leite fresco ou café.'
  },
  {
    id: 'goodies-3',
    name: 'Bolachinhas Nutritivas de Mel e Aveia',
    category: 'goodies',
    subcategory: 'Biscoitos & Bolachas',
    price: 16.50,
    description: 'Bolachas estaladiças de mel silvestre e canela de Ceilão em formatos de animais, sem açúcares refinados.',
    longDescription: 'Um lanche saudável e alegre pensado para bebés e crianças em crescimento. Adoçadas unicamente com mel puro de flores silvestres e ricas em aveia integral e fibra prebiótica. Apresentadas em lata familiar reutilizável.',
    image: './images/goodies_assortment.jpg',
    rating: 4.8,
    reviewCount: 45,
    isFeatured: false,
    tags: ['Sem Açúcar Refinado', 'Para Bebés e Crianças', 'Aveia Integral', 'Rico em Fibra'],
    flavorProfile: 'Mel silvestre de montanha, aveia tostada, canela de Ceilão aromática',
    portionSize: 'Lata familiar de 250g (Cerca de 24 bolachinhas)',
    servings: 8,
    dietaryTags: ['Vegetariano', 'Sem Açúcar Refinado', 'Sem Amendoins'],
    ingredients: ['Flocos de aveia integral', 'Farinha de espelta', 'Mel silvestre cru', 'Óleo de coco virgem', 'Canela de Ceilão', 'Bicarbonato de sódio', 'Flor de sal'],
    allergenWarning: 'Contém glúten (espelta e aveia). Isento de açúcares refinados, amendoins e leite.',
    storageInstructions: 'Conservar na lata hermética em despensa fresca e seca durante até 3 semanas.',
    servingTemperature: 'Estaladiças à temperatura ambiente.'
  },
  {
    id: 'goodies-4',
    name: 'Bolo Cremoso de Chocolate Belga Sem Glúten',
    category: 'goodies',
    subcategory: 'Bolos de Família',
    price: 44.00,
    description: 'Bolo farto de chocolate negro belga a 70% com flor de sal e farinha de amêndoa, sem glúten.',
    longDescription: 'Para quem adora chocolate e tem intolerância ao glúten! Utilizamos farinha de amêndoa fina e chocolate negro de origem seleccionada para atingir uma consistência aveludada e irresistível.',
    image: './images/goodies_assortment.jpg',
    rating: 4.9,
    reviewCount: 31,
    isFeatured: false,
    tags: ['Sem Glúten', 'Chocolate Negro 70%', 'Textura Fudge', 'Ideal para Aniversário'],
    flavorProfile: 'Chocolate negro belga intenso, caramelo salgado, notas quentes de amêndoa',
    portionSize: 'Bolo de 20 cm (Serve 10 fatias ricas)',
    servings: 10,
    dietaryTags: ['Sem Glúten', 'Vegetariano'],
    ingredients: ['Chocolate negro 70% belga', 'Farinha de amêndoa', 'Manteiga biológica', 'Ovos frescos', 'Açúcar de cana', 'Flor de sal de Tavira', 'Extracto de baunilha pura'],
    allergenWarning: 'Contém frutos de casca rija (amêndoa), lacticínios e ovos. Certificado sem glúten.',
    storageInstructions: 'Conservar no frio. Aqueça a sua fatia 10 segundos no micro-ondas para um coração derretido!',
    servingTemperature: 'Morno ou à temperatura ambiente.'
  },
  {
    id: 'goodies-5',
    name: 'Bolo Húmido de Limão Meyer e Papoila',
    category: 'goodies',
    subcategory: 'Bolos de Família',
    price: 18.50,
    description: 'Bolo inglês húmido de limão Meyer e água de flor de laranjeira com vidrado cítrico e sementes de papoila.',
    longDescription: 'O companheiro perfeito para a chávena de chá da tarde ou pequeno-almoço em família. Limões Meyer sumarentos conferem uma luminosidade aromática que harmoniza na perfeição com o miolo fofo.',
    image: './images/product_berry_cake.jpg',
    rating: 4.7,
    reviewCount: 27,
    isFeatured: false,
    tags: ['Hora do Chá', 'Cítrico Refrescante', 'Sem Frutos Secos', 'Pequeno-Almoço'],
    flavorProfile: 'Limão Meyer perfumado, flor de laranjeira, sementes de papoila estaladiças',
    portionSize: 'Forma inglesa standard (Rende cerca de 8 fatias grossas)',
    servings: 8,
    dietaryTags: ['Vegetariano', 'Sem Amendoins'],
    ingredients: ['Farinha de trigo', 'Manteiga', 'Sumo e raspas de limão Meyer', 'Água de flor de laranjeira', 'Sementes de papoila azul', 'Açúcar', 'Ovos', 'Iogurte grego natural'],
    allergenWarning: 'Contém lacticínios, trigo (glúten) e ovos. Isento de amendoins.',
    storageInstructions: 'Conservar embrulhado em papel vegetal ou folha de alumínio durante até 5 dias.',
    servingTemperature: 'À temperatura ambiente ou ligeiramente tostado com manteiga fresca.'
  },
  {
    id: 'goodies-6',
    name: 'Caixa Bouquet de 6 Cupcakes Florais',
    category: 'goodies',
    subcategory: 'Celebrações & Caixas',
    price: 28.00,
    description: 'Sortido de 6 cupcakes decorados como rosas e hortênsias em tons pastel numa caixa de apresentação requintada.',
    longDescription: 'Um autêntico bouquet comestível! Inclui 2 de Baunilha de Madagáscar, 2 de Creme de Morango e 2 de Caramelo Salgado, cada um decorado com pétalas de creme de manteiga em tons pastel suaves.',
    image: './images/goodies_assortment.jpg',
    rating: 5.0,
    reviewCount: 72,
    isFeatured: true,
    tags: ['Arte Floral Comestível', 'Caixa Presente', 'Celebração', 'Sem Amendoins'],
    flavorProfile: 'Baunilha em vagem, compota de morango fresco, creme de manteiga com caramelo salgado',
    portionSize: 'Caixa de presente com 6 cupcakes artesanais',
    servings: 6,
    dietaryTags: ['Vegetariano', 'Sem Amendoins'],
    ingredients: ['Farinha especial para pastelaria', 'Manteiga', 'Ovos', 'Açúcar', 'Redução de morangos', 'Vagem de baunilha', 'Creme de queijo', 'Corantes vegetais'],
    allergenWarning: 'Contém lacticínios, glúten e ovos. Sem amendoins.',
    storageInstructions: 'Refrigerar na caixa original. Consumir nas 48 horas seguintes para a máxima frescura do creme.',
    servingTemperature: 'Ligeiramente fresco ou à temperatura ambiente.'
  }
];

export const MOMENTS_PRODUCTS_EN: PersonalisationItem[] = [
  {
    id: 'moment-1',
    name: 'Family Roots Heirloom Ceramic Plate',
    category: 'moments',
    subcategory: 'Heirloom Tableware',
    price: 49.00,
    description: 'Handcrafted ceramic heirloom plate personalized with your family name, established year, and member names.',
    longDescription: 'Celebrate your family roots with our signature heirloom plate. Hand-thrown in our studio, carefully lettered with your chosen family name, year, and names of up to 8 family members around the illustrated branches. Finished with a food-safe glossy protective glaze.',
    image: './images/moments_gifts.jpg',
    rating: 5.0,
    reviewCount: 112,
    isFeatured: true,
    tags: ['Signature Heirloom', 'Hand-Lettered', 'Food Safe', 'Gift Boxed'],
    materials: ['Hand-thrown earthenware clay', 'High-fire mineral underglazes', 'Food-safe clear glossy glaze', 'Velvet gift pouch', 'Natural wood display stand'],
    charLimit: 80,
    turnaroundDays: 4,
    personalisationFields: ['Family / Last Name', 'Established Year', 'Family Member Names', 'Special Message or Motto'],
    customizationSteps: [
      'Enter your family surname and commemorative year',
      'List the names of family members (children, parents, grandparents)',
      'Choose your accent glaze color theme',
      'Our studio artisans hand-letter and kiln-fire your plate over 48 hours'
    ],
    sampleStories: [
      {
        family: 'The Miller Family, Portland',
        quote: 'We gave this to my parents for their 40th wedding anniversary with all 6 grandchildren names. Mom cried happy tears!',
        title: '40th Wedding Anniversary'
      },
      {
        family: 'The Santos-Silva Duo, Lisbon',
        quote: 'Our wedding date and favorite quote permanently sealed in lovely ceramic. It sits proudly on our kitchen mantel.',
        title: 'New Home Keepsake'
      }
    ]
  },
  {
    id: 'moment-2',
    name: 'Celebration Message Artisan Cookie Crate',
    category: 'moments',
    subcategory: 'Celebration Gifts',
    price: 36.00,
    description: 'Luxury wooden craft crate with 12 gourmet shortbread cookies custom lettered with your heartfelt family messages.',
    longDescription: 'Send delicious edible letters! Each artisanal butter cookie is piped with your chosen phrases—such as "Welcome Home Baby Liam", "Happy 10th Anniversary Mom & Dad", or "Best Family Ever". Packaged in a reusable wooden keepsake box with dried floral sprigs.',
    image: './images/product_custom_cookies.jpg',
    rating: 4.9,
    reviewCount: 83,
    isFeatured: true,
    tags: ['Custom Edible Letters', 'Wooden Keepsake Crate', 'Fresh Baked', 'Express Prep'],
    materials: ['12 artisanal butter cookies', 'Natural royal icing lettering', 'FSC-certified reusable pine crate', 'Hand-tied ribbon', 'Gift card'],
    charLimit: 60,
    turnaroundDays: 2,
    personalisationFields: ['Custom Phrase (Up to 4 lines)', 'Recipient Family Name', 'Gift Note Message'],
    customizationSteps: [
      'Type your message (e.g., anniversary wishes, new baby congratulations)',
      'Select your pastel lettering color palette',
      'Bakers pipe and package fresh on the day of dispatch'
    ],
    sampleStories: [
      {
        family: 'Grandma Elena, Chicago',
        quote: 'Received this from my daughter across the country. The cookies were buttery and fresh, and the wooden box now holds my recipe cards.',
        title: 'Mother\'s Day Surprise'
      }
    ]
  },
  {
    id: 'moment-3',
    name: 'Intertwined Botanic Couples Mug Set',
    category: 'moments',
    subcategory: 'Couples & Duos',
    price: 38.00,
    description: 'Pair of matching ceramic mugs with intertwining botanical crests, names, and special commemorative date.',
    longDescription: 'Designed to symbolize shared journeys. These heavy ceramic mugs feature warm earthy glaze, hand-brushed rims, and custom lettering baked permanently into the glaze. A timeless gift for weddings, anniversaries, or parent-child pairs.',
    image: './images/moments_gifts.jpg',
    rating: 4.9,
    reviewCount: 67,
    isFeatured: true,
    tags: ['Couples Gift', 'Intertwined Design', 'Microwave & Dishwasher Safe', 'Permanent Glaze'],
    materials: ['2× Handcrafted stoneware mugs (380ml)', 'Lead-free permanent mineral glazes', 'Custom hand-lettering', 'Kraft gift packaging'],
    charLimit: 50,
    turnaroundDays: 3,
    personalisationFields: ['Name 1', 'Name 2', 'Special Date or Place', 'Hidden Rim Note'],
    customizationSteps: [
      'Provide the two names (e.g., Elena & Marco)',
      'Add your memorable date or anniversary',
      'Optional secret note lettered inside the bottom rim'
    ],
    sampleStories: [
      {
        family: 'Clara & David, Seattle',
        quote: 'Our morning coffee ritual feels so meaningful with our names on these sturdy mugs. Quality is outstanding.',
        title: 'Wedding Keepsake'
      }
    ]
  },
  {
    id: 'moment-4',
    name: 'Golden Family Name Ribbon Ornaments',
    category: 'moments',
    subcategory: 'Holiday & Seasonal',
    price: 29.00,
    description: 'Set of 4 hanging ceramic stars and baubles with custom embossed names and festive rainbow pastel ribbons.',
    longDescription: 'Capture the magic of holiday gatherings with hanging ceramic keepsakes. Each ornament is custom stamped with a family member’s name and year, tied with luxurious rainbow grosgrain ribbon.',
    image: './images/moments_gifts.jpg',
    rating: 4.8,
    reviewCount: 49,
    isFeatured: false,
    tags: ['Set of 4', 'Holiday Keepsake', 'Hand-Stamped', 'Yearly Tradition'],
    materials: ['4 porcelain bisque hanging shapes (Stars & Baubles)', '24k gold luster script accent', 'Rainbow pastel grosgrain ribbons', 'Velvet keepsake box'],
    charLimit: 40,
    turnaroundDays: 3,
    personalisationFields: ['4 Names (One per ornament)', 'Commemorative Year'],
    customizationSteps: [
      'Enter up to 4 names for the ornaments',
      'Choose year stamp (e.g. 2026)',
      'Individually packaged in velvet slots'
    ],
    sampleStories: [
      {
        family: 'The Henderson Clan, Denver',
        quote: 'We add a new ceramic star every year when our family grows. The tree looks gorgeous with these!',
        title: 'Holiday Family Tradition'
      }
    ]
  }
];

export const MOMENTS_PRODUCTS_PT: PersonalisationItem[] = [
  {
    id: 'moment-1',
    name: 'Prato Heráldico da Árvore Genealógica Familiar',
    category: 'moments',
    subcategory: 'Loiça de Família',
    price: 49.00,
    description: 'Prato cerâmico nobre gravado à mão com o apelido da família, ano de casamento e nomes dos familiares.',
    longDescription: 'Celebre as raízes da sua família com a nossa peça nobre de assinatura. Moldado à mão no nosso estúdio, cuidadosamente gravado com o apelido, ano e os nomes de até 8 familiares ao longo dos ramos ilustrados. Finalizado com vidrado transparente de alto brilho e protecção alimentar.',
    image: './images/moments_gifts.jpg',
    rating: 5.0,
    reviewCount: 112,
    isFeatured: true,
    tags: ['Peça de Família Nobre', 'Caligrafia Manual', 'Seguro para Alimentos', 'Caixa de Oferta'],
    materials: ['Faiança fina moldada à mão', 'Vidrados minerais de alta temperatura', 'Vidrado transparente brilhante alimentar', 'Bolsa de veludo', 'Cavalete de suporte em madeira natural'],
    charLimit: 80,
    turnaroundDays: 4,
    personalisationFields: ['Apelido / Nome da Família', 'Ano de Fundação / Casamento', 'Nomes dos Familiares', 'Mensagem Especial ou Lema'],
    customizationSteps: [
      'Indique o apelido da família e o ano comemorativo',
      'Enumere os nomes dos familiares (filhos, pais, avós)',
      'Seleccione a paleta de vidrados para os apontamentos gráficos',
      'Os nossos mestres ceramistas gravam e cozem a peça no forno durante 48 horas'
    ],
    sampleStories: [
      {
        family: 'Família Ferreira Pinto, Porto',
        quote: 'Oferecemos este prato aos meus pais nas Bodas de Rubi com o nome dos 6 netos. Foi o momento mais emocionante da festa!',
        title: 'Bodas de Rubi (40 Anos)'
      },
      {
        family: 'Mariana & Tiago, Lisboa',
        quote: 'A data do nosso casamento gravada para sempre nesta faiança magnífica. Fica em lugar de destaque na nossa sala.',
        title: 'Lembrança do Novo Lar'
      }
    ]
  },
  {
    id: 'moment-2',
    name: 'Caixa de Biscoitos com Mensagens Gravadas',
    category: 'moments',
    subcategory: 'Lembranças de Celebração',
    price: 36.00,
    description: 'Caixa em madeira maciça com 12 biscoitos gourmet decorados com frases e dedicatórias à sua escolha.',
    longDescription: 'Envie cartas comestíveis inesquecíveis! Cada biscoito amanteigado é decorado com as suas palavras especiais — como "Bem-vindo Bebé Tomás", "Parabéns aos Melhores Pais do Mundo" ou "Família Unida Sempre". Embalados em caixa de madeira reutilizável com flores secas aromáticas.',
    image: './images/product_custom_cookies.jpg',
    rating: 4.9,
    reviewCount: 83,
    isFeatured: true,
    tags: ['Letras Comestíveis', 'Caixa em Madeira Nobre', 'Fresco do Dia', 'Preparação Expressa'],
    materials: ['12 biscoitos amanteigados de pastelaria', 'Glacê real com corantes naturais', 'Caixa em madeira de pinho certificada FSC', 'Fita de gorgorão', 'Cartão personalizado'],
    charLimit: 60,
    turnaroundDays: 2,
    personalisationFields: ['Frase Personalizada (Até 4 linhas)', 'Nome da Família ou Destinatário', 'Dedicatória do Cartão'],
    customizationSteps: [
      'Escreva a sua mensagem personalizada (aniversários, boas-vindas, agradecimentos)',
      'Seleccione a combinação de cores do glacê',
      'Os pasteleiros decoram e embalam no próprio dia do envio'
    ],
    sampleStories: [
      {
        family: 'Avó Luísa, Coimbra',
        quote: 'Recebi esta caixa de surpresa dos meus netos. Os biscoitos eram deliciosos e a caixa de madeira guarda agora as minhas receitas.',
        title: 'Surpresa de Dia da Mãe'
      }
    ]
  },
  {
    id: 'moment-3',
    name: 'Par de Canecas para Casal com Crista Botânica',
    category: 'moments',
    subcategory: 'Casais & Duplas',
    price: 38.00,
    description: 'Conjunto de duas canecas cerâmicas com motivos botânicos entrelaçados, nomes e data comemorativa gravada.',
    longDescription: 'Concebidas para simbolizar caminhos partilhados. Estas canecas robustas em grés apresentam vidrado acolhedor, rebordos pintados à mão e caligrafia personalizada vitrificada permanentemente no forno.',
    image: './images/moments_gifts.jpg',
    rating: 4.9,
    reviewCount: 67,
    isFeatured: true,
    tags: ['Presente para Casais', 'Desenho Entrelaçado', 'Micro-ondas e Máquina', 'Vidrado Permanente'],
    materials: ['2× Canecas em grés artesanal (380ml)', 'Vidrados minerais permanentes sem chumbo', 'Caligrafia manual personalizada', 'Embalagem de presente em cartão kraft'],
    charLimit: 50,
    turnaroundDays: 3,
    personalisationFields: ['Nome 1', 'Nome 2', 'Data Especial ou Lugar', 'Mensagem no Fundo da Caneca'],
    customizationSteps: [
      'Indique os dois nomes do casal ou dupla',
      'Adicione a data marcante ou aniversário',
      'Opção de mensagem secreta gravada no rebordo interior'
    ],
    sampleStories: [
      {
        family: 'Clara & David, Braga',
        quote: 'O nosso café da manhã tem outro encanto com estas canecas tão robustas e bonitas. A qualidade é excepcional.',
        title: 'Lembrança de Casamento'
      }
    ]
  },
  {
    id: 'moment-4',
    name: 'Conjunto de 4 Ornamentos de Natal Gravados',
    category: 'moments',
    subcategory: 'Épocas Especiais',
    price: 29.00,
    description: 'Conjunto de 4 enfeites em faiança com nomes gravados em relevo e fitas de gorgorão em tons arco-íris.',
    longDescription: 'Guarde a magia das festas de fim de ano com lembranças em cerâmica para pendurar. Cada enfeite é gravado com o nome de um familiar e o ano, atado com fita de gorgorão em cores suaves.',
    image: './images/moments_gifts.jpg',
    rating: 4.8,
    reviewCount: 49,
    isFeatured: false,
    tags: ['Conjunto de 4 Peças', 'Recordação de Natal', 'Gravado à Mão', 'Tradição Anual'],
    materials: ['4 formas suspensas em faiança fina (Estrelas e Globos)', 'Pormenores em ouro de 24k', 'Fitas de gorgorão coloridas', 'Caixa com divisórias em veludo'],
    charLimit: 40,
    turnaroundDays: 3,
    personalisationFields: ['4 Nomes (Um por ornamento)', 'Ano Comemorativo'],
    customizationSteps: [
      'Insira os nomes a gravar em cada peça',
      'Escolha o ano (ex: 2026)',
      'Embalados individualmente em bolsa de veludo'
    ],
    sampleStories: [
      {
        family: 'Família Mendonça, Guimarães',
        quote: 'Acrescentamos uma nova estrela de cerâmica todos os anos quando a família cresce. A árvore fica maravilhosa!',
        title: 'Tradição Familiar de Natal'
      }
    ]
  }
];

// Helper functions to get localized datasets
export const getLocalizedColorProducts = (locale: 'pt' | 'en'): ColorProduct[] => {
  return locale === 'pt' ? COLOR_PRODUCTS_PT : COLOR_PRODUCTS_EN;
};

export const getLocalizedGoodiesProducts = (locale: 'pt' | 'en'): GoodiesProduct[] => {
  return locale === 'pt' ? GOODIES_PRODUCTS_PT : GOODIES_PRODUCTS_EN;
};

export const getLocalizedMomentsProducts = (locale: 'pt' | 'en'): PersonalisationItem[] => {
  return locale === 'pt' ? MOMENTS_PRODUCTS_PT : MOMENTS_PRODUCTS_EN;
};

export const getLocalizedAllProducts = (locale: 'pt' | 'en'): Product[] => {
  return [
    ...getLocalizedColorProducts(locale),
    ...getLocalizedGoodiesProducts(locale),
    ...getLocalizedMomentsProducts(locale)
  ];
};

// Default exports for backward compatibility (defaults to pre-reform PT)
export const COLOR_PRODUCTS = COLOR_PRODUCTS_PT;
export const GOODIES_PRODUCTS = GOODIES_PRODUCTS_PT;
export const MOMENTS_PRODUCTS = MOMENTS_PRODUCTS_PT;
export const ALL_PRODUCTS: Product[] = [
  ...COLOR_PRODUCTS,
  ...GOODIES_PRODUCTS,
  ...MOMENTS_PRODUCTS
];
