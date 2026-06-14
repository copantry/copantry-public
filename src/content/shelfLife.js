/*
 * Curated shelf-life dataset for the programmatic /learn/* pages.
 *
 * The marketing site is deployed independently and has no runtime access to the
 * backend ShelfLife table (see public/CLAUDE.md), so this is a self-contained,
 * editorial dataset. Numbers are *general guides* for fridge storage of a
 * typical item — every page says so and tells readers to trust their senses.
 *
 * Each ingredient becomes a page at /learn/how-long-does-<slug>-last that
 * answers the long-tail query and links back to the food-waste pillar. Add an
 * item here and it is automatically prerendered, sitemapped and listed on /learn.
 *
 * GUARDRAIL (plan §8.2): keep every entry genuinely useful and distinct — no
 * thin pages. Each carries real storage, spoilage and use-it-up guidance.
 */

export const SHELF_LIFE = [
  { slug: 'spinach', name: 'Spinach', emoji: '🥬', category: 'Vegetables', min: 3, max: 5,
    why: 'Spinach has thin, delicate leaves with a high water content, so it wilts and turns slimy quickly once cut and chilled.',
    store: 'Keep it dry in a loosely closed bag or box lined with kitchen paper to absorb moisture, in the fridge crisper drawer.',
    cook: 'Wilt it into a pasta, curry, omelette or soup at the first sign of softening — cooked spinach keeps longer than raw.' },
  { slug: 'chicken', name: 'Raw chicken', emoji: '🍗', category: 'Meat & fish', min: 1, max: 2,
    why: 'Raw poultry is a moist, protein-rich food that bacteria multiply on fast, which is why it carries a strict use-by date.',
    store: 'Keep it in the coldest part of the fridge (usually the bottom shelf), sealed, and below other foods so it cannot drip.',
    cook: 'Cook within a day or two, or freeze it on the day of purchase. Once cooked, eat within 2–3 days.' },
  { slug: 'milk', name: 'Milk', emoji: '🥛', category: 'Dairy', min: 4, max: 7,
    why: 'Even pasteurised milk contains bacteria that slowly multiply and sour it, faster once opened and exposed to warmth.',
    store: 'Store it on a fridge shelf, not the door, where the temperature is steadier and colder.',
    cook: 'Use it up in porridge, pancakes, béchamel or a soup; milk close to its date is often still fine — smell it first.' },
  { slug: 'avocado', name: 'Avocado', emoji: '🥑', category: 'Fruit', min: 2, max: 4,
    why: 'Avocados release ethylene and ripen fast; once ripe the flesh browns and softens within a couple of days.',
    store: 'Ripen at room temperature, then move to the fridge to slow it down. Keep a cut half with the stone in and lemon on top.',
    cook: 'Once ripe, use it quickly in guacamole, on toast, blended into a smoothie or a dressing.' },
  { slug: 'bananas', name: 'Bananas', emoji: '🍌', category: 'Fruit', min: 3, max: 6,
    why: 'Bananas are big ethylene producers, so they keep ripening on the counter and brown within days.',
    store: 'Keep them out of the fridge until ripe; separating them slows ripening. Very ripe bananas freeze well.',
    cook: 'Turn spotty bananas into banana bread, pancakes or a smoothie rather than binning them.' },
  { slug: 'strawberries', name: 'Strawberries', emoji: '🍓', category: 'Fruit', min: 2, max: 4,
    why: 'Berries bruise easily and grow mould fast because of their soft, moist skin.',
    store: 'Keep them dry and unwashed in the fridge; only wash just before eating. Remove any mouldy ones immediately.',
    cook: 'Use soft berries in a compote, jam, smoothie or baked into muffins.' },
  { slug: 'bread', name: 'Bread', emoji: '🍞', category: 'Bakery', min: 3, max: 5,
    why: 'Bread dries out and grows mould; the fridge actually makes it go stale faster, not slower.',
    store: 'Keep it in a bread bin at room temperature, or slice and freeze what you will not eat in a few days.',
    cook: 'Turn stale bread into toast, croutons, breadcrumbs, French toast or a bread-and-butter pudding.' },
  { slug: 'eggs', name: 'Eggs', emoji: '🥚', category: 'Dairy', min: 21, max: 28,
    why: 'Eggs keep relatively well but slowly lose moisture and freshness through the shell over weeks.',
    store: 'Store them in the fridge in their box, pointed end down. A fresh egg sinks in water; a stale one floats.',
    cook: 'Use older eggs for baking, frittatas or hard-boiling. When in doubt, do the float test.' },
  { slug: 'tomatoes', name: 'Tomatoes', emoji: '🍅', category: 'Vegetables', min: 4, max: 7,
    why: 'Tomatoes keep ripening after picking and go soft and mealy, especially if chilled too early.',
    store: 'Keep them at room temperature out of the sun for best flavour; refrigerate only very ripe ones to buy a day or two.',
    cook: 'Roast soft tomatoes for a sauce, soup or traybake.' },
  { slug: 'carrots', name: 'Carrots', emoji: '🥕', category: 'Vegetables', min: 14, max: 28,
    why: 'Carrots are hardy roots but go rubbery as they lose moisture.',
    store: 'Keep them in the fridge crisper, ideally in a bag; remove leafy tops, which draw out moisture.',
    cook: 'Use bendy carrots in soups, stews, roasts or a grated salad — they are perfectly good cooked.' },
  { slug: 'potatoes', name: 'Potatoes', emoji: '🥔', category: 'Vegetables', min: 21, max: 60,
    why: 'Potatoes sprout and turn green when exposed to light and warmth.',
    store: 'Keep them in a cool, dark, airy place — not the fridge, which turns their starch to sugar. Away from onions.',
    cook: 'Use softening potatoes in mash, soup, a gratin or roasties.' },
  { slug: 'onions', name: 'Onions', emoji: '🧅', category: 'Vegetables', min: 30, max: 60,
    why: 'Whole onions keep for weeks but sprout or soften in damp, warm conditions.',
    store: 'Store whole onions in a cool, dry, ventilated spot away from potatoes. Keep cut onions wrapped in the fridge.',
    cook: 'Caramelise softening onions, or use them as the base of almost any soup, stew or sauce.' },
  { slug: 'cheese', name: 'Hard cheese', emoji: '🧀', category: 'Dairy', min: 14, max: 28,
    why: 'Hard cheeses keep well but can dry out or grow surface mould.',
    store: 'Wrap in baking paper then loosely in foil, in the fridge; this lets it breathe without drying out.',
    cook: 'Grate firming cheese over pasta, into a sauce, or onto a gratin. Cut small surface mould off hard cheese.' },
  { slug: 'yoghurt', name: 'Yoghurt', emoji: '🥣', category: 'Dairy', min: 7, max: 14,
    why: 'Yoghurt is cultured and fairly stable, but eventually separates and sours past its best.',
    store: 'Keep it on a cold fridge shelf and use a clean spoon to avoid introducing bacteria.',
    cook: 'Use yoghurt near its date in marinades, smoothies, baking or a curry.' },
  { slug: 'mushrooms', name: 'Mushrooms', emoji: '🍄', category: 'Vegetables', min: 4, max: 7,
    why: 'Mushrooms are sponge-like and turn slimy or dry as they lose or absorb moisture.',
    store: 'Keep them in a paper bag in the fridge, not sealed plastic, so they can breathe.',
    cook: 'Sauté ageing mushrooms with garlic and add to pasta, risotto, omelettes or on toast.' },
  { slug: 'lettuce', name: 'Lettuce', emoji: '🥗', category: 'Vegetables', min: 5, max: 7,
    why: 'Leafy salad wilts and browns at the cut edges as it loses moisture.',
    store: 'Keep it dry and loosely wrapped with kitchen paper in the crisper drawer.',
    cook: 'Wilt tired lettuce into a soup or stir-fry — gem and romaine are good braised or grilled.' },
  { slug: 'bell-peppers', name: 'Bell peppers', emoji: '🫑', category: 'Vegetables', min: 7, max: 14,
    why: 'Peppers slowly wrinkle and soften as they dehydrate.',
    store: 'Keep them whole and dry in the fridge crisper; once cut, wrap and use within a few days.',
    cook: 'Roast softening peppers for a sauce, soup, fajitas or a traybake.' },
  { slug: 'broccoli', name: 'Broccoli', emoji: '🥦', category: 'Vegetables', min: 5, max: 7,
    why: 'Broccoli yellows and softens as the florets age.',
    store: 'Keep it unwashed in the fridge, loosely bagged; a damp paper towel helps it stay crisp.',
    cook: 'Roast or stir-fry ageing broccoli, or blitz it into a soup — stalks included.' },
  { slug: 'apples', name: 'Apples', emoji: '🍎', category: 'Fruit', min: 21, max: 42,
    why: 'Apples keep for weeks but go mealy and wrinkled as they lose crispness, and they speed up nearby produce.',
    store: 'Keep them in the fridge crisper, away from other fruit and veg they would over-ripen.',
    cook: 'Stew soft apples into a compote, crumble or porridge topping.' },
  { slug: 'fish', name: 'Fresh fish', emoji: '🐟', category: 'Meat & fish', min: 1, max: 2,
    why: 'Fresh fish is highly perishable and degrades quickly even when chilled.',
    store: 'Keep it on ice or in the coldest part of the fridge and cook it the day of, or day after, purchase.',
    cook: 'Cook within a day, or freeze it the day you buy it. Trust your nose — fresh fish smells of the sea, not "fishy".' },
  { slug: 'herbs', name: 'Fresh herbs', emoji: '🌿', category: 'Vegetables', min: 4, max: 7,
    why: 'Soft herbs like coriander and basil wilt fast; they are mostly water in thin leaves.',
    store: 'Stand soft herbs in a glass of water like flowers, loosely covered, in the fridge (basil prefers the counter).',
    cook: 'Blitz tired herbs into pesto, salsa verde or a marinade, or freeze them in oil in an ice-cube tray.' },
  { slug: 'butter', name: 'Butter', emoji: '🧈', category: 'Dairy', min: 30, max: 60,
    why: 'Butter is high in fat and keeps well, but can pick up fridge odours and eventually turns rancid.',
    store: 'Keep it wrapped in the fridge; freeze spare blocks. A little in a covered dish at room temp is fine for daily use.',
    cook: 'Use butter close to its date in baking, sauces or browned butter.' },
  { slug: 'leftovers', name: 'Cooked leftovers', emoji: '🍲', category: 'Cooked food', min: 2, max: 3,
    why: 'Cooked dishes can grow bacteria once cooled, so they have a short safe window in the fridge.',
    store: 'Cool within two hours, store in a sealed container, and keep no more than 2–3 days — or freeze for later.',
    cook: 'Reheat leftovers until piping hot, just once. Copantry tracks your leftover portions so they do not get forgotten.' },
]

const PREFIX = 'how-long-does-'
const SUFFIX = '-last'

/** Page slug for an ingredient, e.g. "spinach" -> "how-long-does-spinach-last". */
export const learnSlug = (slug) => `${PREFIX}${slug}${SUFFIX}`
/** URL path for an ingredient's page. */
export const learnPath = (slug) => `/learn/${learnSlug(slug)}`

/** Resolve a route :slug (the full "how-long-does-x-last") back to its ingredient. */
export function findByPageSlug(pageSlug = '') {
  if (!pageSlug.startsWith(PREFIX) || !pageSlug.endsWith(SUFFIX)) return null
  const id = pageSlug.slice(PREFIX.length, pageSlug.length - SUFFIX.length)
  return SHELF_LIFE.find((x) => x.slug === id) ?? null
}
