import { ColorProduct, GoodiesProduct, PersonalisationItem, Product } from '../types';

export const COLOR_PRODUCTS: ColorProduct[] = [
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
    dimensions: '22 cm height × 12 cm width',
    materials: ['1× Ribbed terracotta-white bisque vase', '6× 30ml satin finish glazes', '1× Non-toxic metallic gold luster pot', '2 sponge dabbers', '1 liner brush'],
    careInstructions: [
      'Wipe clean with a damp microfiber cloth',
      'Waterproof interior coating allows holding real fresh floral arrangements',
      'Do not soak in harsh detergents'
    ],
    safetyInfo: 'Fragile ceramicware. Keep on stable surfaces out of reach of unattended toddlers.',
    recommendedAge: 'Ages 8+ or younger with family collaboration',
    familyMomentTip: 'Pick wildflowers on a weekend walk and paint matching floral silhouettes on the vase together.',
    glazeCount: 7,
    brushCount: 3,
    difficulty: 'Intermediate'
  },
  {
    id: 'color-4',
    name: 'Little Explorers Animal Pottery Set',
    category: 'colors',
    subcategory: 'Kids & Family Kits',
    price: 26.50,
    description: 'Adorable bisque pottery animal figures (bunny, turtle, bear) with washable child-safe vibrant paints.',
    longDescription: 'Designed specifically for younger children, this set features 3 smooth, sturdy bisque animal figurines with rounded edges and easy-grip surfaces. Includes vibrant washable paints and chunky sponge brushes.',
    image: './images/hero_family.jpg',
    rating: 5.0,
    reviewCount: 56,
    isFeatured: true,
    tags: ['Kids Best Seller', 'Washable', 'Sturdy Bisque', 'Toddler Safe'],
    dimensions: 'Approx 9 cm × 7 cm each figurine (set of 3)',
    materials: ['3× Thick-walled ceramic animal figures', '6× Easy-wash kid-safe tempera glazes', '3 chunky wooden-handle brushes', 'Protective craft mat'],
    careInstructions: [
      'Can be wiped and repainted with tempera or oven-cured for permanence',
      'Clean hands and surfaces easily with warm water and soap'
    ],
    safetyInfo: 'Extra sturdy ceramic with no sharp edges. 100% non-toxic, child-safe certification.',
    recommendedAge: 'Ages 3 to 10',
    familyMomentTip: 'Children love giving names to their painted animal friends and creating bedtime story adventures!',
    glazeCount: 6,
    brushCount: 3,
    difficulty: 'Beginner'
  },
  {
    id: 'color-5',
    name: 'Sunlit Tapas & Dipping Bowls Trio',
    category: 'colors',
    subcategory: 'Tableware Colors',
    price: 32.00,
    description: 'Set of 3 nesting ceramic condiment & dipping bowls with vibrant Mediterranean-inspired color pots.',
    longDescription: 'Ideal for family taco nights, dipping oils, snacks, and dessert toppings. Paint geometric Mediterranean patterns or bright solid pastels with our high-coverage glaze kit.',
    image: './images/product_plate_kit.jpg',
    rating: 4.7,
    reviewCount: 22,
    isFeatured: false,
    tags: ['Tableware', 'Nesting Set', 'Food-Safe', 'Everyday Use'],
    dimensions: 'Small: 8 cm, Medium: 10 cm, Large: 12 cm diameter',
    materials: ['3× Bisque earthenware dipping bowls', '5× High-gloss food-safe glaze pots', '2 detailing brushes', 'Pattern transfer sheets'],
    careInstructions: [
      'Dishwasher safe (gentle cycle)',
      'Oven-cure ensures food and oil resistance'
    ],
    safetyInfo: 'Food contact certified glazes, zero toxic fumes during oven curing.',
    recommendedAge: 'Ages 6 and up',
    familyMomentTip: 'Paint each bowl for a different family snack—one for berries, one for nuts, one for sweet treats!',
    glazeCount: 5,
    brushCount: 2,
    difficulty: 'Beginner'
  },
  {
    id: 'color-6',
    name: 'Grand Family Keepsake Platter Kit',
    category: 'colors',
    subcategory: 'Gift Sets',
    price: 45.00,
    description: 'Extra-large 34cm oval serving platter kit with custom lettering pens, full rainbow glaze set, and display stand.',
    longDescription: 'Our signature family gathering platter! Large enough to fit handprints of grandparents, parents, and children, along with commemorative dates and recipes. Includes a sturdy natural wooden display easel.',
    image: './images/moments_gifts.jpg',
    rating: 4.9,
    reviewCount: 64,
    isFeatured: true,
    tags: ['Generational Gift', 'Handprint Memory', 'Display Easel', 'Premium Bisque'],
    dimensions: '34 cm length × 24 cm width × 3.5 cm depth',
    materials: ['1× Extra-large stoneware oval platter', '10× Rainbow mineral glazes', '2 fine ceramic lettering pens', 'Natural beechwood display stand', 'Detailed family project guide'],
    careInstructions: [
      'Hand wash with soft sponge',
      'Display on wooden easel when not serving holiday roasts or pastries'
    ],
    safetyInfo: 'Heavy stoneware—handle with two hands. Non-toxic glazes.',
    recommendedAge: 'All generations (from newborn handprints to great-grandparent signatures)',
    familyMomentTip: 'Create an annual holiday tradition by adding new symbols or signatures every family reunion!',
    glazeCount: 10,
    brushCount: 4,
    difficulty: 'Beginner'
  }
];

export const GOODIES_PRODUCTS: GoodiesProduct[] = [
  {
    id: 'goodies-1',
    name: 'Elamel Velvet Berry Celebration Cake',
    category: 'goodies',
    subcategory: 'Family Cakes',
    price: 42.00,
    description: 'Soft vanilla sponge layered with organic raspberry compote, whipped mascarpone cream, and fresh forest berries.',
    longDescription: 'Baked fresh daily with pure French butter, unbleached flour, and fresh hand-picked berries. Light, airy, and gently sweetened so children and grandparents alike can enjoy every bite without heavy sugar overload.',
    image: './images/product_berry_cake.jpg',
    rating: 5.0,
    reviewCount: 88,
    isFeatured: true,
    tags: ['Bestseller', 'Fresh Berries', 'Low Sugar', 'Family Celebrations'],
    flavorProfile: 'Madagascar vanilla sponge, tart strawberry-raspberry compote, fluffy sweet cream',
    portionSize: '20 cm round, 3 tall layers (Serves 8–10 family members)',
    servings: 10,
    dietaryTags: ['Vegetarian', 'Nut-Free', 'Organic'],
    ingredients: ['Organic unbleached wheat flour', 'Farm-fresh eggs', 'Grass-fed butter', 'Cane sugar', 'Fresh raspberries & strawberries', 'Mascarpone cream', 'Madagascar bourbon vanilla beans'],
    allergenWarning: 'Contains Wheat (Gluten), Dairy (Milk/Butter), and Eggs. Produced in a 100% dedicated peanut-free kitchen.',
    storageInstructions: 'Keep refrigerated between 2°C to 5°C. Best enjoyed within 3 days of delivery.',
    servingTemperature: 'Remove from refrigerator 20 minutes before serving for optimal sponge tenderness.'
  },
  {
    id: 'goodies-2',
    name: 'Rainbow Swirl Butter Sugar Cookie Box',
    category: 'goodies',
    subcategory: 'Cookies & Biscuits',
    price: 24.00,
    description: 'Box of 12 melt-in-your-mouth artisanal butter shortbread cookies with pastel royal icing and celebratory swirl art.',
    longDescription: 'Hand-piped by our master bakers, these cookies celebrate the playful rainbow swirl of the Elamel logo. Made with real European butter, a hint of lemon zest, and soft royal icing that provides a crisp bite with a buttery melt.',
    image: './images/goodies_assortment.jpg',
    rating: 4.9,
    reviewCount: 94,
    isFeatured: true,
    tags: ['Kids Favorite', 'Gift Boxed', 'Crisp & Buttery', 'Hand Piped'],
    flavorProfile: 'Rich European butter shortbread with delicate citrus vanilla icing',
    portionSize: '12 large cookies individually sealed in protective parchment (Serves 6–12)',
    servings: 12,
    dietaryTags: ['Vegetarian', 'Nut-Free'],
    ingredients: ['Pasture-raised butter', 'Wheat flour', 'Powdered sugar', 'Cage-free egg whites', 'Natural lemon extract', 'Plant-derived food colorings (spirulina, turmeric, beetroot)'],
    allergenWarning: 'Contains Gluten and Dairy. 100% Nut-Free recipe.',
    storageInstructions: 'Store in a cool, dry place in airtight container. Stays crisp for up to 14 days.',
    servingTemperature: 'Serve at room temperature with tea, milk, or hot cocoa.'
  },
  {
    id: 'goodies-3',
    name: 'Golden Honey Cinnamon Animal Biscuits',
    category: 'goodies',
    subcategory: 'Kids-Friendly Options',
    price: 16.50,
    description: 'Crunchy, naturally sweetened honey and Ceylon cinnamon biscuits in playful animal shapes with zero refined sugar.',
    longDescription: 'A wholesome, joyful snack created for toddlers and young children. Sweetened exclusively with raw wildflower honey and loaded with whole oats and prebiotic fiber. Comes in a resealable family snack tin.',
    image: './images/goodies_assortment.jpg',
    rating: 4.8,
    reviewCount: 45,
    isFeatured: false,
    tags: ['Toddler Friendly', 'No Refined Sugar', 'Raw Honey', 'Whole Grain'],
    flavorProfile: 'Warm aromatic Ceylon cinnamon with gentle floral honey sweetness',
    portionSize: '250g snack tin (~30 mini animal biscuits, Serves 4–6 snacks)',
    servings: 6,
    dietaryTags: ['Vegetarian', 'Nut-Free', 'Organic'],
    ingredients: ['Whole rolled oats', 'Spelt flour', 'Raw wildflower honey', 'Coconut oil', 'Ceylon cinnamon', 'Baking soda', 'Sea salt'],
    allergenWarning: 'Contains Spelt (Gluten). Free from refined sugars, dairy, eggs, and nuts.',
    storageInstructions: 'Keep tin sealed in pantry. Fresh for up to 4 weeks.',
    servingTemperature: 'Delicious with warm oat milk or as an on-the-go park snack.'
  },
  {
    id: 'goodies-4',
    name: 'Gluten-Free Chocolate Sea Salt Fudge Cake',
    category: 'goodies',
    subcategory: 'Occasion Treats',
    price: 44.00,
    description: 'Decadent 70% dark Belgian chocolate fudge cake with Maldon sea salt flakes and almond flour sponge.',
    longDescription: 'For chocolate lovers with gluten sensitivities! We use premium almond flour and single-origin dark chocolate to achieve an ultra-fudgy texture that rivals any traditional cake.',
    image: './images/goodies_assortment.jpg',
    rating: 4.9,
    reviewCount: 31,
    isFeatured: false,
    tags: ['Gluten-Free', 'Belgian Chocolate', 'Rich Fudge', 'Birthday Special'],
    flavorProfile: 'Deep cocoa, velvety chocolate ganache, gentle mineral sea salt crunch',
    portionSize: '18 cm round (Serves 8 generous slices)',
    servings: 8,
    dietaryTags: ['Gluten-Free', 'Vegetarian', 'Contains Nuts'],
    ingredients: ['70% Belgian dark chocolate', 'Blanched almond flour', 'Grass-fed butter', 'Brown sugar', 'Organic eggs', 'Maldon sea salt flakes', 'Dutch cocoa powder'],
    allergenWarning: 'Contains Almonds (Nuts), Dairy, and Eggs. Certified Gluten-Free preparation.',
    storageInstructions: 'Refrigerate. Can be warmed slightly for a molten lava effect.',
    servingTemperature: 'Best served slightly warm (10 seconds microwave) with a scoop of vanilla gelato.'
  },
  {
    id: 'goodies-5',
    name: 'Sunshine Citrus & Poppyseed Family Loaf',
    category: 'goodies',
    subcategory: 'Family Cakes',
    price: 18.50,
    description: 'Moist Meyer lemon and orange blossom loaf cake drizzled with tangy citrus glaze and crunchy poppyseeds.',
    longDescription: 'The perfect companion for morning coffee or afternoon family tea time. Freshly squeezed Meyer lemons provide a bright sunshine flavor that balances the tender crumb.',
    image: './images/product_berry_cake.jpg',
    rating: 4.7,
    reviewCount: 27,
    isFeatured: false,
    tags: ['Breakfast & Tea', 'Citrus Glaze', 'Nut-Free', 'Family Loaf'],
    flavorProfile: 'Zesty Meyer lemon, sweet orange blossom, nutty poppyseeds',
    portionSize: 'Loaf (8 thick slices, Serves 6–8)',
    servings: 8,
    dietaryTags: ['Vegetarian', 'Nut-Free'],
    ingredients: ['Unbleached wheat flour', 'Meyer lemon juice & zest', 'Greek yogurt', 'Sugar', 'Butter', 'Eggs', 'Blue poppyseeds'],
    allergenWarning: 'Contains Gluten, Dairy, and Eggs.',
    storageInstructions: 'Store wrapped at room temperature for up to 5 days.',
    servingTemperature: 'Slice at room temperature, lightly toasted with salted butter if desired.'
  },
  {
    id: 'goodies-6',
    name: 'Petite Floral Pastel Cupcake Bouquet (Set of 6)',
    category: 'goodies',
    subcategory: 'Occasion Treats',
    price: 28.00,
    description: 'Assortment of 6 artisan cupcakes decorated like blooming pastel garden roses and hydrangeas in gift presentation.',
    longDescription: 'An edible bouquet! Includes 2 Madagascar Vanilla, 2 Strawberry Cream, and 2 Salted Caramel cupcakes, each hand-piped with intricate floral buttercream petals in soft pastel hues.',
    image: './images/goodies_assortment.jpg',
    rating: 5.0,
    reviewCount: 72,
    isFeatured: true,
    tags: ['Floral Bouquet', 'Gift Set', '6 Flavors', 'Hand-Crafted'],
    flavorProfile: 'Trio of vanilla, fresh strawberry, and golden caramel with silky buttercream',
    portionSize: '6 standard gourmet cupcakes in a clear-window presentation box (Serves 6)',
    servings: 6,
    dietaryTags: ['Vegetarian', 'Nut-Free'],
    ingredients: ['Wheat flour', 'Organic sugar', 'Butter', 'Cream', 'Natural fruit purees', 'Vanilla extract', 'Cocoa butter'],
    allergenWarning: 'Contains Gluten, Milk, and Eggs. Nut-free recipe.',
    storageInstructions: 'Keep in box at room temperature away from direct sun. Consume within 48 hours.',
    servingTemperature: 'Enjoy at room temperature for the creamiest frosting texture.'
  }
];

export const MOMENTS_PRODUCTS: PersonalisationItem[] = [
  {
    id: 'moment-1',
    name: 'Custom Engraved Family Tree Ceramic Plate',
    category: 'moments',
    subcategory: 'Family Celebrations',
    price: 49.00,
    description: 'Handcrafted ceramic heirloom plate personalized with your family name, established year, and member names.',
    longDescription: 'Celebrate your family roots with our signature heirloom plate. Hand-thrown in our studio, carefully lettered with your chosen family name, year, and names of up to 8 family members around the illustrated branches. Finished with a food-safe glossy protective glaze.',
    image: './images/moments_gifts.jpg',
    rating: 5.0,
    reviewCount: 112,
    isFeatured: true,
    tags: ['Heirloom Keepsake', 'Custom Engraving', 'Family Tree', 'Most Cherished Gift'],
    baseItemType: 'ceramic_plate',
    charLimit: 60,
    leadTimeDays: 4,
    customizationSteps: [
      'Enter Family Surname & Established Year',
      'Add individual family member names',
      'Choose custom rim inscription or heartfelt quote',
      'Select gift presentation box and greeting card'
    ],
    sampleStories: [
      {
        title: 'Three Generations at Grandma\'s 80th',
        family: 'The Miller Family',
        quote: 'Seeing Grandma’s tears of joy when she read all her grandchildren’s names on the plate made our gathering unforgettable.',
        occasion: 'Grandmother’s 80th Birthday'
      },
      {
        title: 'New Roots in Our First Home',
        family: 'Sara & Thomas K.',
        quote: 'It now hangs proudly above our dining table, welcoming everyone to our home.',
        occasion: 'Housewarming 2026'
      }
    ]
  },
  {
    id: 'moment-2',
    name: 'Personalized Message Butter Cookie Crate',
    category: 'moments',
    subcategory: 'Family Celebrations',
    price: 36.00,
    description: 'Luxury wooden craft crate with 12 gourmet shortbread cookies custom lettered with your heartfelt family messages.',
    longDescription: 'Send delicious edible letters! Each artisanal butter cookie is piped with your chosen phrases—such as "Welcome Home Baby Liam", "Happy 10th Anniversary Mom & Dad", or "Best Family Ever". Packaged in a reusable wooden keepsake box with dried floral sprigs.',
    image: './images/product_custom_cookies.jpg',
    rating: 4.9,
    reviewCount: 83,
    isFeatured: true,
    tags: ['Edible Keepsake', 'Custom Lettering', 'Wooden Crate', 'Express Joy'],
    baseItemType: 'cookie_crate',
    charLimit: 45,
    leadTimeDays: 2,
    customizationSteps: [
      'Enter 3 to 4 custom phrases (up to 45 chars total)',
      'Choose pastel color theme (Rainbow Swirl, Rose Garden, Ocean Breeze)',
      'Add recipient name and personal gift note'
    ],
    sampleStories: [
      {
        title: 'Anniversary Breakfast Surprise',
        family: 'Carlos & Helena M.',
        quote: 'My husband surprised me with cookies written with our wedding song lyrics. We laughed and savored every single bite!',
        occasion: '15th Wedding Anniversary'
      }
    ]
  },
  {
    id: 'moment-3',
    name: 'Couples & Duos Hand-Lettered Mug Set',
    category: 'moments',
    subcategory: 'Anniversary Moments',
    price: 38.00,
    description: 'Pair of matching ceramic mugs with intertwining botanical crests, names, and special commemorative date.',
    longDescription: 'Designed to symbolize shared journeys. These heavy ceramic mugs feature warm earthy glaze, hand-brushed rims, and custom lettering baked permanently into the glaze. A timeless gift for weddings, anniversaries, or parent-child pairs.',
    image: './images/moments_gifts.jpg',
    rating: 4.9,
    reviewCount: 67,
    isFeatured: true,
    tags: ['Anniversary', 'Couples Pair', 'Hand-Lettered', 'Dishwasher Safe'],
    baseItemType: 'ceramic_mug',
    charLimit: 30,
    leadTimeDays: 3,
    customizationSteps: [
      'Enter First Names (e.g., "David & Sarah")',
      'Enter Anniversary / Memorable Date',
      'Select handle style and glaze undertone'
    ],
    sampleStories: [
      {
        title: 'Morning Coffee Tradition',
        family: 'Sophie & Marc D.',
        quote: 'Five years of marriage, and we start every single day with these mugs. They still look brand new.',
        occasion: '5th Anniversary'
      }
    ]
  },
  {
    id: 'moment-4',
    name: 'Holiday Souvenir Ceramic Ornament Set',
    category: 'moments',
    subcategory: 'Holiday Souvenirs',
    price: 29.00,
    description: 'Set of 4 hanging ceramic stars and baubles with custom embossed names and festive rainbow pastel ribbons.',
    longDescription: 'Capture the magic of holiday gatherings with hanging ceramic keepsakes. Each ornament is custom stamped with a family member’s name and year, tied with luxurious rainbow grosgrain ribbon.',
    image: './images/moments_gifts.jpg',
    rating: 4.8,
    reviewCount: 49,
    isFeatured: false,
    tags: ['Holiday Souvenir', 'Set of 4', 'Ribbon Attached', 'Yearly Tradition'],
    baseItemType: 'ceramic_plate',
    charLimit: 20,
    leadTimeDays: 3,
    customizationSteps: [
      'Enter 4 names for the individual ornaments',
      'Choose year stamp (e.g., "2026")',
      'Select ribbon color theme'
    ],
    sampleStories: [
      {
        title: 'Trimming the Tree with Joy',
        family: 'The Henderson Clan',
        quote: 'We add a new Elamel ornament every holiday season. The kids love finding their names on the branches.',
        occasion: 'Holiday Family Tradition'
      }
    ]
  }
];

export const ALL_PRODUCTS: Product[] = [
  ...COLOR_PRODUCTS,
  ...GOODIES_PRODUCTS,
  ...MOMENTS_PRODUCTS
];

export const FAQ_ITEMS = [
  {
    question: 'Are Elamel ceramic glazes safe for children and food use?',
    answer: 'Yes, 100%! All glazes in our Elamel Colors kits are certified water-based, non-toxic, lead-free, and cadmium-free (complying with EN71-3 and ASTM D-4236). When cured according to our simple home oven instructions or studio kiln-glazed, tableware items are fully food-safe and easy to wash.'
  },
  {
    question: 'How do allergen controls work for Elamel Goodies bakery treats?',
    answer: 'We take food safety with utmost seriousness. Every Goodies item features clear allergen badges right on the card and detail page (such as Gluten-Free, Dairy-Free, Nut-Free). Our bakery operates in strictly segregated preparation zones, and we never use artificial preservatives.'
  },
  {
    question: 'How does the custom personalization process work?',
    answer: 'You can use our Live Personalisation Studio on the Moments & Souvenirs page! You type your family name, special date, and custom message, choose your preferred color theme, and see a live visual preview in real time before submitting your order.'
  },
  {
    question: 'What is the standard delivery and preparation time?',
    answer: 'Standard non-custom kits and treats ship within 24–48 hours. Personalized ceramics and custom engraved cookie crates require 2 to 4 days of artisan preparation in our studio to ensure perfect cure and packaging before dispatch.'
  },
  {
    question: 'Do you offer family workshops and group craft sessions?',
    answer: 'Yes! We host weekly weekend family craft mornings and afternoon tea decorating sessions at our studio. You can view upcoming dates on our About page or reach out via our Contact form to book a private family celebration.'
  }
];
