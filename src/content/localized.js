/*
 * Localized marketing copy for the core pages (Home, How-it-works, the
 * food-waste pillar) — the Phase 3 i18n deliverable from the SEO/GEO plan.
 *
 * One reviewable file for all translations. Language is driven by the URL
 * prefix (/fr, /it, /es, /pt); English lives at the root with no prefix.
 * `pick(obj, lng)` falls back to English for any missing locale.
 *
 * Shared UI chrome (nav, footer, buttons, CTA) lives in UI so localized routes
 * are fully coherent, not half-translated. Brand names (App Store, Google Play,
 * Copantry, MCP) and legal text are intentionally left untranslated.
 */

import { FEATURES } from "./pages.js";
import { FAQS } from "./faqs.js";

/**
 * Locales we publish prefixed, localized routes for (English is the unprefixed
 * default). "us" is the US-English variant: same English copy as the root, but
 * with US currency (dollars) and a US-typical dinner — served at /us.
 */
export const LOCALES = ["fr", "it", "es", "pt", "de", "us"];
/** All languages with hreflang alternates (English included as x-default). */
export const HREFLANG_LANGS = ["en", ...LOCALES];

/**
 * Map an internal locale code to a valid BCP-47 hreflang / html-lang value.
 * "us" is an English variant, so it must advertise as "en-US" (not "us").
 */
export const LOCALE_HREFLANG = { us: "en-US" };
export const hreflangFor = (code) => LOCALE_HREFLANG[code] || code;

/**
 * Typical amount of food a single dinner suggestion rescues from the bin,
 * shown on the homepage proof strip and the hero hook card. Converted (not just
 * re-symbolised) per currency zone: £8 (UK) ≈ €9 (EU) ≈ $10 (US).
 */
export const RESCUE_AMOUNT = {
  en: "£8",
  us: "$10",
  fr: "9 €",
  it: "9 €",
  es: "9 €",
  pt: "9 €",
  de: "9 €",
};

export const LOCALE_LABEL = {
  en: "English",
  fr: "Français",
  it: "Italiano",
  es: "Español",
  pt: "Português",
  de: "Deutsch",
  us: "English (US)",
};

/** Pages that have localized, prefixed versions (logical path -> localizable). */
export const LOCALIZED_PAGES = [
  "/",
  "/how-it-works",
  "/features/reduce-food-waste",
];

export const pick = (obj, lng) => obj[lng] || obj.en;

/** Prefix a logical path for a locale (en -> unprefixed). */
export function localizePath(path, lng) {
  if (lng === "en" || !LOCALES.includes(lng)) return path;
  if (!LOCALIZED_PAGES.includes(path)) return path;
  return path === "/" ? `/${lng}` : `/${lng}${path}`;
}

/* ── Shared UI / chrome ─────────────────────────────────────────────────── */
export const UI = {
  en: {
    nav: {
      howItWorks: "How it works",
      why: "Why Copantry",
      learn: "Learn",
      blog: "Blog",
      signin: "Sign in",
      getStarted: "Get started free",
    },
    ctaPrimary: "See what your kitchen can cook tonight",
    getStartedFree: "Get started free",
    howItWorks: "How it works",
    appsNote:
      "Native iOS & Android apps are coming soon. Use Copantry in any browser today.",
    appSoon: "Soon",
    faqEyebrow: "Good to know",
    faqTitle: "Frequently asked questions",
    breadcrumbHome: "Home",
    breadcrumbFeatures: "Features",
    keepExploring: "Keep exploring",
    cta: {
      title: "Start cooking what you already have",
      subtitle:
        "Free to use · no card needed · works in any browser. Set up your kitchen in minutes and see what tonight could be.",
    },
    footer: {
      tagline:
        "Cook what you have before it goes to waste, and shop only for what you’re missing.",
      product: "Product",
      audience: "Who it’s for",
      learn: "Learn",
      company: "Company",
      rights: "All rights reserved.",
    },
  },
  fr: {
    nav: {
      howItWorks: "Comment ça marche",
      why: "Pourquoi Copantry",
      learn: "Guides",
      blog: "Blog",
      signin: "Se connecter",
      getStarted: "Commencer gratuitement",
    },
    ctaPrimary: "Voir ce que votre cuisine peut préparer ce soir",
    getStartedFree: "Commencer gratuitement",
    howItWorks: "Comment ça marche",
    appsNote:
      "Les applis natives iOS et Android arrivent bientôt. Utilisez Copantry dans n’importe quel navigateur dès aujourd’hui.",
    appSoon: "Bientôt",
    faqEyebrow: "Bon à savoir",
    faqTitle: "Questions fréquentes",
    breadcrumbHome: "Accueil",
    breadcrumbFeatures: "Fonctionnalités",
    keepExploring: "À découvrir aussi",
    cta: {
      title: "Commencez à cuisiner ce que vous avez déjà",
      subtitle:
        "Gratuit · sans carte · dans n’importe quel navigateur. Configurez votre cuisine en quelques minutes et voyez ce que ce soir pourrait être.",
    },
    footer: {
      tagline:
        "Cuisinez ce que vous avez avant que ça ne se gâte, et n’achetez que ce qui vous manque.",
      product: "Produit",
      audience: "Pour qui",
      learn: "Guides",
      company: "Entreprise",
      rights: "Tous droits réservés.",
    },
  },
  it: {
    nav: {
      howItWorks: "Come funziona",
      why: "Perché Copantry",
      learn: "Guide",
      blog: "Blog",
      signin: "Accedi",
      getStarted: "Inizia gratis",
    },
    ctaPrimary: "Scopri cosa puoi cucinare stasera con quello che hai",
    getStartedFree: "Inizia gratis",
    howItWorks: "Come funziona",
    appsNote:
      "Le app native iOS e Android arrivano presto. Usa Copantry in qualsiasi browser già da oggi.",
    appSoon: "Presto",
    faqEyebrow: "Buono a sapersi",
    faqTitle: "Domande frequenti",
    breadcrumbHome: "Home",
    breadcrumbFeatures: "Funzioni",
    keepExploring: "Continua a esplorare",
    cta: {
      title: "Inizia a cucinare ciò che hai già",
      subtitle:
        "Gratis · nessuna carta · funziona in qualsiasi browser. Imposta la tua cucina in pochi minuti e scopri cosa potresti cucinare stasera.",
    },
    footer: {
      tagline:
        "Cucina ciò che hai prima che vada a male e compra solo ciò che ti manca.",
      product: "Prodotto",
      audience: "Per chi",
      learn: "Guide",
      company: "Azienda",
      rights: "Tutti i diritti riservati.",
    },
  },
  es: {
    nav: {
      howItWorks: "Cómo funciona",
      why: "Por qué Copantry",
      learn: "Guías",
      blog: "Blog",
      signin: "Iniciar sesión",
      getStarted: "Empezar gratis",
    },
    ctaPrimary: "Descubre qué puedes cocinar esta noche con lo que tienes",
    getStartedFree: "Empezar gratis",
    howItWorks: "Cómo funciona",
    appsNote:
      "Las apps nativas de iOS y Android llegan pronto. Usa Copantry en cualquier navegador hoy mismo.",
    appSoon: "Pronto",
    faqEyebrow: "Bueno saberlo",
    faqTitle: "Preguntas frecuentes",
    breadcrumbHome: "Inicio",
    breadcrumbFeatures: "Funciones",
    keepExploring: "Sigue explorando",
    cta: {
      title: "Empieza a cocinar lo que ya tienes",
      subtitle:
        "Gratis · sin tarjeta · funciona en cualquier navegador. Configura tu cocina en minutos y descubre qué podrías cenar hoy.",
    },
    footer: {
      tagline:
        "Cocina lo que tienes antes de que se estropee y compra solo lo que te falta.",
      product: "Producto",
      audience: "Para quién",
      learn: "Guías",
      company: "Empresa",
      rights: "Todos los derechos reservados.",
    },
  },
  pt: {
    nav: {
      howItWorks: "Como funciona",
      why: "Porquê o Copantry",
      learn: "Guias",
      blog: "Blog",
      signin: "Entrar",
      getStarted: "Começar grátis",
    },
    ctaPrimary: "Veja o que a sua cozinha pode fazer hoje à noite",
    getStartedFree: "Começar grátis",
    howItWorks: "Como funciona",
    appsNote:
      "As apps nativas para iOS e Android chegam em breve. Use o Copantry em qualquer navegador hoje mesmo.",
    appSoon: "Em breve",
    faqEyebrow: "Bom saber",
    faqTitle: "Perguntas frequentes",
    breadcrumbHome: "Início",
    breadcrumbFeatures: "Funcionalidades",
    keepExploring: "Continue a explorar",
    cta: {
      title: "Comece a cozinhar o que já tem",
      subtitle:
        "Grátis · sem cartão · funciona em qualquer navegador. Configure a sua cozinha em minutos e veja o que pode ser o jantar de hoje.",
    },
    footer: {
      tagline:
        "Cozinhe o que tem antes que estrague e compre apenas o que lhe falta.",
      product: "Produto",
      audience: "Para quem",
      learn: "Guias",
      company: "Empresa",
      rights: "Todos os direitos reservados.",
    },
  },
  de: {
    nav: {
      howItWorks: "So funktioniert’s",
      why: "Warum Copantry",
      learn: "Ratgeber",
      blog: "Blog",
      signin: "Anmelden",
      getStarted: "Kostenlos starten",
    },
    ctaPrimary: "Sehen Sie, was Ihre Küche heute Abend kochen kann",
    getStartedFree: "Kostenlos starten",
    howItWorks: "So funktioniert’s",
    appsNote:
      "Native iOS- und Android-Apps kommen bald. Nutzen Sie Copantry schon heute in jedem Browser.",
    appSoon: "Bald",
    faqEyebrow: "Gut zu wissen",
    faqTitle: "Häufige Fragen",
    breadcrumbHome: "Start",
    breadcrumbFeatures: "Funktionen",
    keepExploring: "Weiter entdecken",
    cta: {
      title: "Kochen Sie, was Sie schon haben",
      subtitle:
        "Kostenlos · keine Karte nötig · funktioniert in jedem Browser. Richten Sie Ihre Küche in wenigen Minuten ein und sehen Sie, was heute Abend möglich ist.",
    },
    footer: {
      tagline:
        "Kochen Sie, was Sie haben, bevor es verdirbt – und kaufen Sie nur, was fehlt.",
      product: "Produkt",
      audience: "Für wen",
      learn: "Ratgeber",
      company: "Unternehmen",
      rights: "Alle Rechte vorbehalten.",
    },
  },
};

/* ── Hero "hook card" labels ────────────────────────────────────────────── */
export const HOOK = {
  // Each locale's "tonight's dinner" is a dish typical of that country, built
  // from three items about to expire. Saved amount is currency-converted, not
  // just re-symbolised (£8 ≈ €9 ≈ $10) — see RESCUE_AMOUNT.
  en: {
    firstToGo: "First to go",
    tonight: "Tonight's dinner",
    items: [
      { emoji: "🥬", name: "Spinach", left: "Use today" },
      { emoji: "🍗", name: "Chicken thighs", left: "1 day left" },
      { emoji: "🍋", name: "Lemon", left: "2 days left" },
    ],
    dish: "Lemon & spinach chicken traybake 🍗",
    dishMeta: "Uses 3 items before they go off · 35 min",
    saved: "£8 of food rescued, not binned",
  },
  us: {
    firstToGo: "First to go",
    tonight: "Tonight's dinner",
    items: [
      { emoji: "🥩", name: "Ground beef", left: "Use today" },
      { emoji: "🫑", name: "Bell peppers", left: "1 day left" },
      { emoji: "🧅", name: "Onion", left: "2 days left" },
    ],
    dish: "Loaded beef taco skillet 🌮",
    dishMeta: "Uses 3 items before they go off · 30 min",
    saved: "$10 of food rescued, not thrown out",
  },
  fr: {
    firstToGo: "À finir en premier",
    tonight: "Le dîner de ce soir",
    items: [
      { emoji: "🥬", name: "Poireaux", left: "À finir aujourd’hui" },
      { emoji: "🥚", name: "Œufs", left: "J–1" },
      { emoji: "🥛", name: "Crème fraîche", left: "J–2" },
    ],
    dish: "Quiche aux poireaux 🥧",
    dishMeta: "Utilise 3 aliments avant qu’ils ne se gâtent · 40 min",
    saved: "9 € de nourriture sauvée, pas jetée",
  },
  it: {
    firstToGo: "Da finire prima",
    tonight: "La cena di stasera",
    items: [
      { emoji: "🥒", name: "Zucchine", left: "Da finire oggi" },
      { emoji: "🥚", name: "Uova", left: "1 giorno" },
      { emoji: "🧀", name: "Parmigiano", left: "2 giorni" },
    ],
    dish: "Frittata di zucchine 🍳",
    dishMeta: "Usa 3 ingredienti prima che scadano · 20 min",
    saved: "9 € di cibo salvato, non buttato",
  },
  es: {
    firstToGo: "Aprovechar primero",
    tonight: "La cena de hoy",
    items: [
      { emoji: "🥔", name: "Patatas", left: "Usar hoy" },
      { emoji: "🥚", name: "Huevos", left: "1 día" },
      { emoji: "🧅", name: "Cebolla", left: "2 días" },
    ],
    dish: "Tortilla de patatas 🥘",
    dishMeta: "Usa 3 ingredientes antes de que caduquen · 30 min",
    saved: "9 € de comida salvada, no tirada",
  },
  pt: {
    firstToGo: "Aproveitar primeiro",
    tonight: "O jantar de hoje",
    items: [
      { emoji: "🥬", name: "Couve", left: "Usar hoje" },
      { emoji: "🥔", name: "Batata", left: "1 dia" },
      { emoji: "🌭", name: "Chouriço", left: "2 dias" },
    ],
    dish: "Caldo verde 🍲",
    dishMeta: "Usa 3 ingredientes antes que estraguem · 35 min",
    saved: "9 € de comida salva, não deitada fora",
  },
  de: {
    firstToGo: "Zuerst verbrauchen",
    tonight: "Das Abendessen heute",
    items: [
      { emoji: "🥔", name: "Kartoffeln", left: "Heute verbrauchen" },
      { emoji: "🥚", name: "Eier", left: "Noch 1 Tag" },
      { emoji: "🥓", name: "Speck", left: "Noch 2 Tage" },
    ],
    dish: "Bauernfrühstück 🍳",
    dishMeta: "Nutzt 3 Produkte, bevor sie verderben · 25 Min.",
    saved: "9 € Lebensmittel gerettet, nicht weggeworfen",
  },
};

/* ── Homepage ───────────────────────────────────────────────────────────── */
export const HOME = {
  en: {
    badge: "Cook more · waste less · shop smarter",
    h1a: "Cook it before",
    h1b: "you",
    h1accent: "bin it.",
    heroLede:
      "Copantry tells you what to cook before food goes to waste and builds your shopping list around what you already have. Less thrown away, less spent, less “what’s for dinner?”.",
    trustLine: "Free to use · no card · web today, apps soon",
    proof:
      "UK households throw away around 6.4 million tonnes of food a year — roughly £1,000 for an average family with children, according to WRAP. Most of it could have been eaten. Copantry exists to keep that food on your plate.",
    proofStat: "of food a typical dinner suggestion rescues from the bin",
    pillarsEyebrow: "The whole loop, in one app",
    pillarsTitle: "It knows your kitchen, so it can actually help",
    pillarsLede:
      "Most apps do one piece. Copantry connects what you have, what to cook, and what to buy — so nothing falls through the gaps.",
    pillars: [
      {
        title: "Knows what you have",
        desc: "Add groceries by photo, receipt or voice. Copantry keeps a live pantry sorted by what runs out first — no more forgotten food at the back of the fridge.",
      },
      {
        title: "Tells you what to cook",
        desc: "It suggests real meals built around what is about to expire, so dinner uses up what you already own instead of sending you back to the shop.",
      },
      {
        title: "Buys only what is missing",
        desc: "Your shopping list builds itself from your plan minus your pantry — organised by aisle, shared with the household, never a duplicate.",
      },
    ],
    howEyebrow: "How it works",
    howTitle: "Three steps to a fuller fridge and a smaller bill",
    steps: [
      {
        title: "Stock your kitchen",
        desc: "Snap a photo of your shop or a receipt — Copantry adds everything and dates it for you.",
      },
      {
        title: "See tonight’s options",
        desc: "Get meals that use what is about to expire first, scaled to how many you are feeding.",
      },
      {
        title: "Shop only the gaps",
        desc: "Plan your week and Copantry builds an aisle-sorted list of just what you are missing.",
      },
    ],
    howMore: "See the full walk-through",
    diffEyebrow: "Why Copantry",
    diffTitle: "Built around food waste, not around an empty calendar",
    diffLede:
      "A few things you will notice quickly — and one you probably won’t find anywhere else.",
    differentiators: [
      {
        title: "A real waste engine",
        desc: "Expiry tracking and use-it-up suggestions are the core of the app, not an afterthought.",
      },
      {
        title: "Auto meal planning",
        desc: "Generate a full week that prioritises expiring food, adds variety, and respects what is in season.",
      },
      {
        title: "Truly multilingual",
        desc: "Use the app in six languages; recipes stay in their original language. Built for mixed-language homes.",
      },
      {
        title: "From plan to checkout",
        desc: "Aisle-sorted lists that work towards ordering the gaps from your supermarket.",
      },
      {
        title: "Made for households",
        desc: "One shared pantry, plan and list for couples and families — in real time, on every device.",
      },
      {
        title: "Plan from ChatGPT or Claude",
        desc: "Connect your AI assistant and just ask it to plan a waste-free week. You may not find this anywhere else.",
      },
    ],
    whyTeaser: "How Copantry compares to other kinds of apps",
  },
  fr: {
    badge: "Cuisinez plus · gaspillez moins · achetez malin",
    h1a: "Cuisinez-le avant",
    h1b: "de le",
    h1accent: "jeter.",
    heroLede:
      "Copantry vous dit quoi cuisiner avant que les aliments ne se gâtent et construit votre liste de courses autour de ce que vous avez déjà. Moins de gaspillage, moins de dépenses, moins de « qu’est-ce qu’on mange ce soir ? ».",
    trustLine: "Gratuit · sans carte · web aujourd’hui, applis bientôt",
    proof:
      "En France, chaque foyer jette en moyenne des dizaines de kilos de nourriture par an — l’équivalent de centaines d’euros, selon l’ADEME. La plus grande partie aurait pu être mangée. Copantry existe pour garder cette nourriture dans votre assiette.",
    proofStat:
      "de nourriture sauvée de la poubelle par une suggestion de dîner type",
    pillarsEyebrow: "Toute la boucle, dans une seule appli",
    pillarsTitle: "Elle connaît votre cuisine, donc elle peut vraiment aider",
    pillarsLede:
      "La plupart des applis ne font qu’une partie. Copantry relie ce que vous avez, quoi cuisiner et quoi acheter — pour que rien ne passe à la trappe.",
    pillars: [
      {
        title: "Sait ce que vous avez",
        desc: "Ajoutez vos courses par photo, ticket de caisse ou voix. Copantry tient un garde-manger à jour, trié par ce qui s’épuise en premier — fini les aliments oubliés au fond du frigo.",
      },
      {
        title: "Vous dit quoi cuisiner",
        desc: "Elle suggère de vrais plats autour de ce qui va bientôt périmer, pour que le dîner utilise ce que vous avez déjà au lieu de vous renvoyer au magasin.",
      },
      {
        title: "N’achète que ce qui manque",
        desc: "Votre liste de courses se construit toute seule à partir de votre plan moins votre garde-manger — classée par rayon, partagée avec le foyer, jamais en double.",
      },
    ],
    howEyebrow: "Comment ça marche",
    howTitle:
      "Trois étapes vers un frigo plus plein et une facture plus légère",
    steps: [
      {
        title: "Remplissez votre cuisine",
        desc: "Prenez en photo vos courses ou un ticket — Copantry ajoute tout et le date pour vous.",
      },
      {
        title: "Voyez les options du soir",
        desc: "Obtenez des plats qui utilisent d’abord ce qui va périmer, ajustés au nombre de convives.",
      },
      {
        title: "N’achetez que le manque",
        desc: "Planifiez votre semaine et Copantry crée une liste classée par rayon de ce qui vous manque seulement.",
      },
    ],
    howMore: "Voir le parcours complet",
    diffEyebrow: "Pourquoi Copantry",
    diffTitle:
      "Conçu autour du gaspillage alimentaire, pas autour d’un calendrier vide",
    diffLede:
      "Quelques points que vous remarquerez vite — et un que vous ne trouverez sans doute nulle part ailleurs.",
    differentiators: [
      {
        title: "Un vrai moteur anti-gaspi",
        desc: "Le suivi des dates et les suggestions « à finir » sont le cœur de l’appli, pas une option.",
      },
      {
        title: "Planification automatique",
        desc: "Générez une semaine complète qui priorise les aliments à finir, varie les plats et respecte la saison.",
      },
      {
        title: "Vraiment multilingue",
        desc: "Utilisez l’appli en six langues ; les recettes restent dans leur langue d’origine. Pensée pour les foyers multilingues.",
      },
      {
        title: "Du plan au paiement",
        desc: "Des listes classées par rayon, jusqu’à commander ce qui manque dans votre supermarché.",
      },
      {
        title: "Pensé pour les foyers",
        desc: "Un garde-manger, un plan et une liste partagés pour couples et familles — en temps réel, sur tous les appareils.",
      },
      {
        title: "Planifiez depuis ChatGPT ou Claude",
        desc: "Connectez votre assistant IA et demandez-lui simplement de planifier une semaine zéro gaspi. Vous ne trouverez ça presque nulle part ailleurs.",
      },
    ],
    whyTeaser: "Comment Copantry se compare aux autres types d’applis",
  },
  it: {
    badge: "Cucina di più · spreca meno · fai la spesa furba",
    h1a: "Cucinalo prima",
    h1b: "di",
    h1accent: "buttarlo.",
    heroLede:
      "Copantry ti dice cosa cucinare prima che il cibo vada a male e costruisce la lista della spesa intorno a ciò che hai già. Meno sprechi, meno spese, meno « cosa si mangia stasera? ».",
    trustLine: "Gratis · senza carta · web oggi, app presto",
    proof:
      "In Italia ogni famiglia getta in media decine di chili di cibo all’anno — centinaia di euro. La maggior parte si sarebbe potuta mangiare. Copantry esiste per tenere quel cibo nel tuo piatto.",
    proofStat: "di cibo che una tipica proposta di cena salva dalla pattumiera",
    pillarsEyebrow: "Tutto il ciclo, in un’unica app",
    pillarsTitle: "Conosce la tua cucina, così può aiutarti davvero",
    pillarsLede:
      "La maggior parte delle app fa solo un pezzo. Copantry collega ciò che hai, cosa cucinare e cosa comprare — così niente sfugge.",
    pillars: [
      {
        title: "Sa cosa hai",
        desc: "Aggiungi la spesa con foto, scontrino o voce. Copantry tiene una dispensa aggiornata, ordinata per ciò che finisce prima — basta cibo dimenticato in fondo al frigo.",
      },
      {
        title: "Ti dice cosa cucinare",
        desc: "Suggerisce piatti veri intorno a ciò che sta per scadere, così la cena usa ciò che hai già invece di rimandarti al negozio.",
      },
      {
        title: "Compra solo ciò che manca",
        desc: "La lista della spesa si costruisce da sola dal tuo piano meno la dispensa — ordinata per reparto, condivisa con la famiglia, mai un doppione.",
      },
    ],
    howEyebrow: "Come funziona",
    howTitle: "Tre passi verso un frigo più pieno e una spesa più leggera",
    steps: [
      {
        title: "Rifornisci la cucina",
        desc: "Fotografa la spesa o uno scontrino — Copantry aggiunge tutto e gli assegna una data.",
      },
      {
        title: "Vedi le opzioni di stasera",
        desc: "Ottieni piatti che usano prima ciò che sta per scadere, in base a quante persone servi.",
      },
      {
        title: "Compra solo ciò che manca",
        desc: "Pianifica la settimana e Copantry crea una lista per reparto solo di ciò che ti manca.",
      },
    ],
    howMore: "Guarda il percorso completo",
    diffEyebrow: "Perché Copantry",
    diffTitle:
      "Costruito intorno allo spreco alimentare, non intorno a un calendario vuoto",
    diffLede:
      "Alcune cose le noterai subito — e una probabilmente non la troverai altrove.",
    differentiators: [
      {
        title: "Un vero motore anti-spreco",
        desc: "Il monitoraggio delle scadenze e i suggerimenti « da finire » sono il cuore dell’app, non un extra.",
      },
      {
        title: "Pianificazione automatica",
        desc: "Genera una settimana intera che dà priorità al cibo in scadenza, aggiunge varietà e rispetta la stagione.",
      },
      {
        title: "Davvero multilingue",
        desc: "Usa l’app in sei lingue; le ricette restano nella lingua originale. Pensata per case multilingue.",
      },
      {
        title: "Dal piano alla cassa",
        desc: "Liste ordinate per reparto, fino a ordinare ciò che manca dal tuo supermercato.",
      },
      {
        title: "Fatta per le famiglie",
        desc: "Una dispensa, un piano e una lista condivisi per coppie e famiglie — in tempo reale, su ogni dispositivo.",
      },
      {
        title: "Pianifica da ChatGPT o Claude",
        desc: "Collega il tuo assistente IA e chiedigli di pianificare una settimana senza sprechi. Difficile trovarlo altrove.",
      },
    ],
    whyTeaser: "Come Copantry si confronta con gli altri tipi di app",
  },
  es: {
    badge: "Cocina más · desperdicia menos · compra mejor",
    h1a: "Cocínalo antes",
    h1b: "de",
    h1accent: "tirarlo.",
    heroLede:
      "Copantry te dice qué cocinar antes de que la comida se estropee y arma tu lista de la compra en torno a lo que ya tienes. Menos desperdicio, menos gasto, menos « ¿qué cenamos hoy? ».",
    trustLine: "Gratis · sin tarjeta · web hoy, apps pronto",
    proof:
      "En España cada hogar tira de media decenas de kilos de comida al año — cientos de euros. La mayor parte se podría haber comido. Copantry existe para mantener esa comida en tu plato.",
    proofStat: "de comida que una sugerencia de cena típica salva de la basura",
    pillarsEyebrow: "Todo el ciclo, en una sola app",
    pillarsTitle: "Conoce tu cocina, así que puede ayudarte de verdad",
    pillarsLede:
      "La mayoría de apps hacen solo una parte. Copantry conecta lo que tienes, qué cocinar y qué comprar — para que nada se pierda.",
    pillars: [
      {
        title: "Sabe lo que tienes",
        desc: "Añade la compra por foto, ticket o voz. Copantry mantiene una despensa al día, ordenada por lo que se acaba antes — se acabó la comida olvidada al fondo de la nevera.",
      },
      {
        title: "Te dice qué cocinar",
        desc: "Sugiere platos reales en torno a lo que está por caducar, para que la cena use lo que ya tienes en vez de mandarte a la tienda.",
      },
      {
        title: "Compra solo lo que falta",
        desc: "Tu lista de la compra se arma sola a partir de tu plan menos tu despensa — ordenada por pasillo, compartida con el hogar, nunca repetida.",
      },
    ],
    howEyebrow: "Cómo funciona",
    howTitle: "Tres pasos hacia una nevera más llena y una factura más baja",
    steps: [
      {
        title: "Llena tu cocina",
        desc: "Haz una foto de tu compra o de un ticket — Copantry lo añade todo y le pone fecha.",
      },
      {
        title: "Ve las opciones de hoy",
        desc: "Recibe platos que usan primero lo que está por caducar, ajustados a cuántos coméis.",
      },
      {
        title: "Compra solo lo que falta",
        desc: "Planifica tu semana y Copantry crea una lista por pasillo solo de lo que te falta.",
      },
    ],
    howMore: "Ver el recorrido completo",
    diffEyebrow: "Por qué Copantry",
    diffTitle:
      "Construido en torno al desperdicio de comida, no en torno a un calendario vacío",
    diffLede:
      "Algunas cosas las notarás enseguida — y una probablemente no la encuentres en ningún otro sitio.",
    differentiators: [
      {
        title: "Un motor antidesperdicio real",
        desc: "El control de caducidades y las sugerencias para aprovechar son el corazón de la app, no un añadido.",
      },
      {
        title: "Planificación automática",
        desc: "Genera una semana entera que prioriza la comida por caducar, añade variedad y respeta la temporada.",
      },
      {
        title: "Realmente multilingüe",
        desc: "Usa la app en seis idiomas; las recetas se quedan en su idioma original. Pensada para hogares multilingües.",
      },
      {
        title: "Del plan a la caja",
        desc: "Listas por pasillo, hasta pedir lo que falta en tu supermercado.",
      },
      {
        title: "Hecha para hogares",
        desc: "Una despensa, un plan y una lista compartidos para parejas y familias — en tiempo real, en todos los dispositivos.",
      },
      {
        title: "Planifica desde ChatGPT o Claude",
        desc: "Conecta tu asistente de IA y solo pídele que planifique una semana sin desperdicio. Difícil de encontrar en otro sitio.",
      },
    ],
    whyTeaser: "Cómo se compara Copantry con otros tipos de apps",
  },
  pt: {
    badge: "Cozinhe mais · desperdice menos · compre melhor",
    h1a: "Cozinhe antes",
    h1b: "de",
    h1accent: "deitar fora.",
    heroLede:
      "O Copantry diz-lhe o que cozinhar antes que a comida estrague e monta a sua lista de compras à volta do que já tem. Menos desperdício, menos gastos, menos « o que se janta hoje? ».",
    trustLine: "Grátis · sem cartão · web hoje, apps em breve",
    proof:
      "Em Portugal cada agregado deita fora, em média, dezenas de quilos de comida por ano — centenas de euros. A maior parte podia ter sido comida. O Copantry existe para manter essa comida no seu prato.",
    proofStat: "de comida que uma sugestão de jantar típica salva do lixo",
    pillarsEyebrow: "Todo o ciclo, numa só app",
    pillarsTitle: "Conhece a sua cozinha, por isso pode mesmo ajudar",
    pillarsLede:
      "A maioria das apps faz só uma parte. O Copantry liga o que tem, o que cozinhar e o que comprar — para que nada se perca.",
    pillars: [
      {
        title: "Sabe o que tem",
        desc: "Adicione as compras por foto, talão ou voz. O Copantry mantém uma despensa atualizada, ordenada pelo que acaba primeiro — sem comida esquecida no fundo do frigorífico.",
      },
      {
        title: "Diz-lhe o que cozinhar",
        desc: "Sugere pratos reais à volta do que está prestes a expirar, para que o jantar use o que já tem em vez de o mandar à loja.",
      },
      {
        title: "Compra só o que falta",
        desc: "A sua lista de compras monta-se sozinha a partir do plano menos a despensa — organizada por corredor, partilhada com a casa, nunca repetida.",
      },
    ],
    howEyebrow: "Como funciona",
    howTitle:
      "Três passos para um frigorífico mais cheio e uma conta mais leve",
    steps: [
      {
        title: "Abasteça a cozinha",
        desc: "Fotografe as compras ou um talão — o Copantry adiciona tudo e atribui-lhe uma data.",
      },
      {
        title: "Veja as opções de hoje",
        desc: "Receba pratos que usam primeiro o que está a expirar, ajustados a quantos vai servir.",
      },
      {
        title: "Compre só o que falta",
        desc: "Planeie a semana e o Copantry cria uma lista por corredor só do que lhe falta.",
      },
    ],
    howMore: "Ver o percurso completo",
    diffEyebrow: "Porquê o Copantry",
    diffTitle:
      "Feito à volta do desperdício alimentar, não à volta de um calendário vazio",
    diffLede:
      "Algumas coisas vai notar depressa — e uma provavelmente não encontra em mais lado nenhum.",
    differentiators: [
      {
        title: "Um verdadeiro motor anti-desperdício",
        desc: "O controlo de validades e as sugestões para aproveitar são o centro da app, não um extra.",
      },
      {
        title: "Planeamento automático",
        desc: "Gere uma semana inteira que prioriza a comida a expirar, acrescenta variedade e respeita a época.",
      },
      {
        title: "Verdadeiramente multilingue",
        desc: "Use a app em seis idiomas; as receitas ficam no idioma original. Pensada para casas multilingues.",
      },
      {
        title: "Do plano à caixa",
        desc: "Listas por corredor, até encomendar o que falta no seu supermercado.",
      },
      {
        title: "Feita para a casa toda",
        desc: "Uma despensa, um plano e uma lista partilhados para casais e famílias — em tempo real, em todos os dispositivos.",
      },
      {
        title: "Planeie a partir do ChatGPT ou Claude",
        desc: "Ligue o seu assistente de IA e peça-lhe para planear uma semana sem desperdício. Dificilmente encontra isto noutro lado.",
      },
    ],
    whyTeaser: "Como o Copantry se compara com outros tipos de apps",
  },
  de: {
    badge: "Mehr kochen · weniger wegwerfen · klüger einkaufen",
    h1a: "Kochen Sie es, bevor",
    h1b: "Sie es",
    h1accent: "wegwerfen.",
    heroLede:
      "Copantry sagt Ihnen, was Sie kochen sollten, bevor Lebensmittel verderben, und baut Ihre Einkaufsliste rund um das auf, was Sie schon haben. Weniger weggeworfen, weniger ausgegeben, weniger „Was gibt’s heute zu essen?“.",
    trustLine: "Kostenlos · keine Karte · Web heute, Apps bald",
    proof:
      "In Deutschland wirft jeder Haushalt im Schnitt etliche Kilogramm Lebensmittel pro Jahr weg — Hunderte von Euro. Das meiste hätte man essen können. Copantry sorgt dafür, dass dieses Essen auf Ihrem Teller landet.",
    proofStat:
      "an Lebensmitteln, die ein typischer Abendessen-Vorschlag vor der Tonne rettet",
    pillarsEyebrow: "Der ganze Kreislauf, in einer App",
    pillarsTitle: "Sie kennt Ihre Küche – und kann deshalb wirklich helfen",
    pillarsLede:
      "Die meisten Apps machen nur einen Teil. Copantry verbindet, was Sie haben, was Sie kochen und was Sie kaufen – damit nichts durchrutscht.",
    pillars: [
      {
        title: "Weiß, was Sie haben",
        desc: "Fügen Sie Einkäufe per Foto, Kassenbon oder Sprache hinzu. Copantry führt einen aktuellen Vorrat, sortiert nach dem, was zuerst aufgebraucht werden muss – kein vergessenes Essen mehr hinten im Kühlschrank.",
      },
      {
        title: "Sagt Ihnen, was Sie kochen sollen",
        desc: "Sie schlägt echte Gerichte rund um das vor, was bald abläuft, damit das Abendessen nutzt, was Sie schon haben, statt Sie wieder in den Laden zu schicken.",
      },
      {
        title: "Kauft nur, was fehlt",
        desc: "Ihre Einkaufsliste baut sich selbst aus Ihrem Plan minus Vorrat auf – nach Gang sortiert, mit dem Haushalt geteilt, nie doppelt.",
      },
    ],
    howEyebrow: "So funktioniert’s",
    howTitle:
      "Drei Schritte zu einem volleren Kühlschrank und einer kleineren Rechnung",
    steps: [
      {
        title: "Füllen Sie Ihre Küche",
        desc: "Fotografieren Sie Ihren Einkauf oder einen Kassenbon – Copantry fügt alles hinzu und datiert es für Sie.",
      },
      {
        title: "Sehen Sie die Optionen für heute",
        desc: "Erhalten Sie Gerichte, die zuerst das Ablaufende nutzen, passend zur Anzahl der Esser.",
      },
      {
        title: "Kaufen Sie nur, was fehlt",
        desc: "Planen Sie Ihre Woche und Copantry erstellt eine nach Gang sortierte Liste nur dessen, was Ihnen fehlt.",
      },
    ],
    howMore: "Den ganzen Ablauf ansehen",
    diffEyebrow: "Warum Copantry",
    diffTitle:
      "Rund um Lebensmittelverschwendung gebaut, nicht um einen leeren Kalender",
    diffLede:
      "Ein paar Dinge merken Sie schnell – und eines finden Sie wahrscheinlich nirgends sonst.",
    differentiators: [
      {
        title: "Ein echter Anti-Verschwendungs-Motor",
        desc: "Ablaufdaten-Tracking und Reste-Vorschläge sind der Kern der App, kein Beiwerk.",
      },
      {
        title: "Automatische Essensplanung",
        desc: "Erzeugen Sie eine ganze Woche, die ablaufende Lebensmittel priorisiert, Abwechslung bringt und die Saison berücksichtigt.",
      },
      {
        title: "Wirklich mehrsprachig",
        desc: "Nutzen Sie die App in sechs Sprachen; Rezepte bleiben in ihrer Originalsprache. Für mehrsprachige Haushalte gemacht.",
      },
      {
        title: "Vom Plan zur Kasse",
        desc: "Nach Gang sortierte Listen, bis hin zum Bestellen des Fehlenden bei Ihrem Supermarkt.",
      },
      {
        title: "Für Haushalte gemacht",
        desc: "Ein geteilter Vorrat, Plan und Liste für Paare und Familien – in Echtzeit, auf jedem Gerät.",
      },
      {
        title: "Planen Sie aus ChatGPT oder Claude",
        desc: "Verbinden Sie Ihren KI-Assistenten und bitten Sie ihn einfach, eine verschwendungsfreie Woche zu planen. Das finden Sie fast nirgends sonst.",
      },
    ],
    whyTeaser: "Wie sich Copantry mit anderen Arten von Apps vergleicht",
  },
};

// US English: identical copy to the root English homepage, but with a
// US-relevant food-waste figure (dollars) instead of the UK WRAP stat.
HOME.us = {
  ...HOME.en,
  proof:
    "US households throw away tens of millions of tons of food a year — around $1,500 for the average family, according to the USDA. Most of it could have been eaten. Copantry exists to keep that food on your plate.",
};

/* ── How it works ───────────────────────────────────────────────────────── */
export const HOW_IT_WORKS = {
  en: {
    eyebrow: "How it works",
    h1: "From a full fridge to dinner, in four simple steps",
    lede: "Copantry works in a simple loop: it learns what is in your kitchen, tells you what to cook before it expires, builds a shopping list of only what you are missing, and keeps everything in sync as you cook. Here is exactly how.",
    stepLabel: "Step",
    steps: [
      {
        title: "Tell Copantry what you have",
        desc: "Snap a photo of your shop, a receipt or a cupboard shelf — or use voice or text. Copantry reads it with AI and builds a live pantry, dating each item so you know what to use first.",
      },
      {
        title: "See what to cook tonight",
        desc: "Copantry suggests real meals built around what is about to expire, scaled to how many you are feeding. Plan a single dinner or let it generate a varied, waste-free week.",
      },
      {
        title: "Shop only for the gaps",
        desc: "Copantry compares your plan to your pantry and builds an aisle-sorted shopping list of only what you are missing — shared with the whole household in real time.",
      },
      {
        title: "Cook, and it stays in sync",
        desc: "Mark a meal cooked and Copantry deducts what you used, tracks the leftovers, and keeps your pantry accurate for next time. The loop closes itself.",
      },
    ],
    tryCta: "Try it with your kitchen",
    exploreEyebrow: "Go deeper",
    exploreTitle: "Explore what Copantry can do",
  },
  fr: {
    eyebrow: "Comment ça marche",
    h1: "D’un frigo plein au dîner, en quatre étapes simples",
    lede: "Copantry fonctionne en boucle : il apprend ce qu’il y a dans votre cuisine, vous dit quoi cuisiner avant que ça ne périme, crée une liste de courses du seul manque, et garde tout synchronisé au fil de vos repas. Voici exactement comment.",
    stepLabel: "Étape",
    steps: [
      {
        title: "Dites à Copantry ce que vous avez",
        desc: "Photographiez vos courses, un ticket ou une étagère — ou utilisez la voix ou le texte. Copantry le lit avec l’IA et crée un garde-manger à jour, en datant chaque article pour savoir quoi utiliser en premier.",
      },
      {
        title: "Voyez quoi cuisiner ce soir",
        desc: "Copantry suggère de vrais plats autour de ce qui va périmer, ajustés au nombre de convives. Planifiez un seul dîner ou laissez-le générer une semaine variée et zéro gaspi.",
      },
      {
        title: "N’achetez que le manque",
        desc: "Copantry compare votre plan à votre garde-manger et crée une liste classée par rayon du seul manque — partagée avec tout le foyer en temps réel.",
      },
      {
        title: "Cuisinez, et tout reste synchro",
        desc: "Marquez un plat comme cuisiné et Copantry déduit ce que vous avez utilisé, suit les restes et garde votre garde-manger à jour. La boucle se referme d’elle-même.",
      },
    ],
    tryCta: "Essayez avec votre cuisine",
    exploreEyebrow: "Aller plus loin",
    exploreTitle: "Découvrez tout ce que Copantry peut faire",
  },
  it: {
    eyebrow: "Come funziona",
    h1: "Da un frigo pieno alla cena, in quattro semplici passi",
    lede: "Copantry funziona a ciclo: impara cosa c’è nella tua cucina, ti dice cosa cucinare prima che scada, crea una lista della spesa solo di ciò che manca e tiene tutto sincronizzato mentre cucini. Ecco esattamente come.",
    stepLabel: "Passo",
    steps: [
      {
        title: "Dì a Copantry cosa hai",
        desc: "Fotografa la spesa, uno scontrino o uno scaffale — oppure usa voce o testo. Copantry lo legge con l’IA e crea una dispensa aggiornata, datando ogni articolo per sapere cosa usare prima.",
      },
      {
        title: "Vedi cosa cucinare stasera",
        desc: "Copantry suggerisce piatti veri intorno a ciò che sta per scadere, in base a quante persone servi. Pianifica una sola cena o lascia che generi una settimana varia e senza sprechi.",
      },
      {
        title: "Compra solo ciò che manca",
        desc: "Copantry confronta il piano con la dispensa e crea una lista per reparto solo di ciò che manca — condivisa con tutta la famiglia in tempo reale.",
      },
      {
        title: "Cucina, e resta tutto sincronizzato",
        desc: "Segna un piatto come cucinato e Copantry scala ciò che hai usato, tiene traccia degli avanzi e mantiene la dispensa aggiornata. Il ciclo si chiude da solo.",
      },
    ],
    tryCta: "Provalo con la tua cucina",
    exploreEyebrow: "Approfondisci",
    exploreTitle: "Scopri cosa può fare Copantry",
  },
  es: {
    eyebrow: "Cómo funciona",
    h1: "De una nevera llena a la cena, en cuatro pasos sencillos",
    lede: "Copantry funciona en un ciclo: aprende qué hay en tu cocina, te dice qué cocinar antes de que caduque, crea una lista de la compra solo de lo que falta y lo mantiene todo sincronizado mientras cocinas. Así es exactamente.",
    stepLabel: "Paso",
    steps: [
      {
        title: "Dile a Copantry lo que tienes",
        desc: "Haz una foto de tu compra, un ticket o un estante — o usa voz o texto. Copantry lo lee con IA y crea una despensa al día, poniendo fecha a cada artículo para saber qué usar primero.",
      },
      {
        title: "Ve qué cocinar hoy",
        desc: "Copantry sugiere platos reales en torno a lo que está por caducar, ajustados a cuántos coméis. Planifica una sola cena o deja que genere una semana variada y sin desperdicio.",
      },
      {
        title: "Compra solo lo que falta",
        desc: "Copantry compara tu plan con tu despensa y crea una lista por pasillo solo de lo que falta — compartida con todo el hogar en tiempo real.",
      },
      {
        title: "Cocina, y todo sigue sincronizado",
        desc: "Marca un plato como cocinado y Copantry descuenta lo que usaste, controla las sobras y mantiene tu despensa al día. El ciclo se cierra solo.",
      },
    ],
    tryCta: "Pruébalo con tu cocina",
    exploreEyebrow: "Profundiza",
    exploreTitle: "Descubre todo lo que Copantry puede hacer",
  },
  pt: {
    eyebrow: "Como funciona",
    h1: "De um frigorífico cheio ao jantar, em quatro passos simples",
    lede: "O Copantry funciona em ciclo: aprende o que há na sua cozinha, diz-lhe o que cozinhar antes que expire, cria uma lista de compras só do que falta e mantém tudo sincronizado enquanto cozinha. Eis exatamente como.",
    stepLabel: "Passo",
    steps: [
      {
        title: "Diga ao Copantry o que tem",
        desc: "Fotografe as compras, um talão ou uma prateleira — ou use voz ou texto. O Copantry lê com IA e cria uma despensa atualizada, datando cada item para saber o que usar primeiro.",
      },
      {
        title: "Veja o que cozinhar hoje",
        desc: "O Copantry sugere pratos reais à volta do que está a expirar, ajustados a quantos vai servir. Planeie um único jantar ou deixe-o gerar uma semana variada e sem desperdício.",
      },
      {
        title: "Compre só o que falta",
        desc: "O Copantry compara o seu plano com a despensa e cria uma lista por corredor só do que falta — partilhada com a casa toda em tempo real.",
      },
      {
        title: "Cozinhe, e fica tudo sincronizado",
        desc: "Marque um prato como cozinhado e o Copantry desconta o que usou, acompanha as sobras e mantém a despensa atualizada. O ciclo fecha-se sozinho.",
      },
    ],
    tryCta: "Experimente com a sua cozinha",
    exploreEyebrow: "Vá mais fundo",
    exploreTitle: "Descubra tudo o que o Copantry pode fazer",
  },
  de: {
    eyebrow: "So funktioniert’s",
    h1: "Vom vollen Kühlschrank zum Abendessen in vier Schritten",
    lede: "Copantry arbeitet in einem einfachen Kreislauf: Es lernt, was in Ihrer Küche ist, sagt Ihnen, was Sie kochen sollten, bevor es abläuft, erstellt eine Einkaufsliste nur des Fehlenden und hält alles synchron, während Sie kochen. So genau geht das.",
    stepLabel: "Schritt",
    steps: [
      {
        title: "Sagen Sie Copantry, was Sie haben",
        desc: "Fotografieren Sie Ihren Einkauf, einen Kassenbon oder ein Regal – oder nutzen Sie Sprache oder Text. Copantry liest es mit KI und baut einen aktuellen Vorrat auf, mit Datum für jedes Produkt, damit Sie wissen, was zuerst zu verbrauchen ist.",
      },
      {
        title: "Sehen Sie, was Sie heute Abend kochen",
        desc: "Copantry schlägt echte Gerichte rund um das bald Ablaufende vor, passend zur Anzahl der Esser. Planen Sie ein einzelnes Abendessen oder lassen Sie eine abwechslungsreiche, verschwendungsfreie Woche erzeugen.",
      },
      {
        title: "Kaufen Sie nur, was fehlt",
        desc: "Copantry vergleicht Ihren Plan mit Ihrem Vorrat und erstellt eine nach Gang sortierte Einkaufsliste nur des Fehlenden – mit dem ganzen Haushalt in Echtzeit geteilt.",
      },
      {
        title: "Kochen Sie, und alles bleibt synchron",
        desc: "Markieren Sie ein Gericht als gekocht und Copantry zieht das Verbrauchte ab, verfolgt die Reste und hält Ihren Vorrat aktuell. Der Kreislauf schließt sich von selbst.",
      },
    ],
    tryCta: "Probieren Sie es mit Ihrer Küche",
    exploreEyebrow: "Tiefer eintauchen",
    exploreTitle: "Entdecken Sie, was Copantry kann",
  },
};

/* ── Reduce food waste (pillar) — ContentPage-shaped ────────────────────── */
export const REDUCE_WASTE = {
  // English reuses the canonical feature content + its FAQ (no duplication).
  en: { ...FEATURES["reduce-food-waste"], faqItems: FAQS.reduceFoodWaste },
  fr: {
    accent: "green",
    heroEmoji: "🥬",
    eyebrow: "Réduire le gaspillage",
    crumb: "Réduire le gaspillage",
    h1: "Utilisez vos aliments avant qu’ils ne se gâtent",
    lede: "Copantry suit le temps qu’il reste à chaque aliment de votre cuisine et suggère des plats qui utilisent d’abord ce qui va bientôt périmer — pour que la nourriture finisse dans votre assiette plutôt qu’à la poubelle. C’est le cœur du fonctionnement de Copantry, pas une option.",
    sections: [
      {
        h2: "Voyez ce qu’il faut finir — d’un coup d’œil",
        body: "Votre garde-manger est toujours trié du plus proche au plus lointain de la péremption, donc ce qu’il faut cuisiner en premier est tout en haut. Fini de découvrir un sachet d’épinards liquéfié derrière le lait.",
        bullets: [
          {
            title: "Suivi des dates en direct",
            desc: "Chaque article a une date limite ajustable. Copantry signale ce qui approche.",
          },
          {
            title: "DLC vs DDM",
            desc: "Suivez les deux, pour consommer au bon moment au lieu de jeter trop tôt.",
          },
          {
            title: "Rien d’oublié",
            desc: "Les articles remontent à mesure que la date approche — le frigo ne cache plus rien.",
          },
        ],
      },
      {
        h2: "Transformez « bientôt périmé » en dîner de ce soir",
        body: "Au lieu de partir d’une recette et de faire les courses, Copantry part de ce que vous avez déjà. Il suggère de vrais plats autour de vos ingrédients à finir, ajustés au nombre de convives.",
      },
      {
        h2: "Gaspillez moins d’argent, aussi",
        body: "Le gaspillage alimentaire représente des centaines d’euros par foyer et par an (ADEME). Cuisiner ce que vous avez et n’acheter que ce qui manque est l’un des moyens les plus simples de réduire à la fois le gaspillage et la facture.",
      },
    ],
    howTo: {
      title:
        "Comment planifier les repas autour des dates plutôt que des recettes",
      steps: [
        "Ajoutez vos courses — photographiez vos achats ou un ticket et Copantry date chaque article pour vous.",
        "Ouvrez votre garde-manger pour voir ce qui périme le plus tôt, trié automatiquement en haut.",
        "Choisissez un plat suggéré autour de ces articles et planifiez-le dans votre semaine.",
        "Cuisinez — Copantry déduit ce que vous avez utilisé, pour garder garde-manger et prochaine liste à jour.",
      ],
    },
    related: [
      { label: "Combien de temps se conservent les aliments ?", to: "/learn" },
      { label: "Planification des repas", to: "/features/meal-planning" },
      { label: "Suivi du garde-manger", to: "/features/pantry-tracking" },
    ],
    cta: {
      title: "Commencez à sauver des aliments dès ce soir",
      subtitle:
        "Gratuit · sans carte. Ajoutez votre cuisine et voyez quoi cuisiner avant que quoi que ce soit ne se gâte.",
    },
    faqItems: [
      {
        q: "Quels aliments dois-je finir avant qu’ils ne se gâtent ?",
        a: "Copantry tient à jour une liste de ce qui est dans votre cuisine, triée selon la date de péremption, donc les aliments à finir en premier sont toujours en haut. Il suggère ensuite des recettes autour de ces articles.",
      },
      {
        q: "Comment arrêter de gaspiller de la nourriture à la maison ?",
        a: "Le moyen le plus efficace est de cuisiner ce que vous avez déjà avant que ça ne périme et de n’acheter que le nécessaire. Copantry fait les deux : il suit les dates, suggère des plats « à finir » et crée une liste de courses du seul manque.",
      },
      {
        q: "Quelle quantité de nourriture un foyer gaspille-t-il ?",
        a: "Selon l’ADEME, le gaspillage alimentaire en France représente des dizaines de kilos par personne et par an. Réduire le gaspillage à la maison est l’un des moyens les plus simples d’économiser et de réduire son empreinte carbone.",
      },
      {
        q: "Quelle différence entre DLC et DDM ?",
        a: "La DLC (date limite de consommation) concerne la sécurité — ne consommez pas après. La DDM (date de durabilité minimale) concerne la qualité — l’aliment reste généralement sûr ensuite. Copantry permet de suivre les deux pour consommer au bon moment.",
      },
      {
        q: "Puis-je planifier les repas autour des dates plutôt que des recettes ?",
        a: "Oui. C’est exactement ce pour quoi Copantry est conçu. Au lieu de partir d’une recette, vous partez de ce qui va périmer et Copantry suggère des plats qui utilisent ces ingrédients en premier.",
      },
    ],
  },
  it: {
    accent: "green",
    heroEmoji: "🥬",
    eyebrow: "Riduci gli sprechi",
    crumb: "Riduci gli sprechi",
    h1: "Usa il cibo prima che vada a male",
    lede: "Copantry tiene traccia di quanto tempo resta a tutto ciò che hai in cucina e suggerisce piatti che usano prima ciò che sta per scadere — così il cibo finisce nel piatto invece che nella pattumiera. È il cuore di come funziona Copantry, non un’aggiunta.",
    sections: [
      {
        h2: "Vedi cosa finire — a colpo d’occhio",
        body: "La tua dispensa è sempre ordinata dal più vicino al più lontano dalla scadenza, così ciò da cucinare prima è in cima. Basta scoprire un sacchetto di spinaci liquefatto dietro il latte.",
        bullets: [
          {
            title: "Scadenze in tempo reale",
            desc: "Ogni articolo ha una data regolabile. Copantry segnala ciò che si avvicina.",
          },
          {
            title: "Consumare entro vs preferibilmente entro",
            desc: "Tieni traccia di entrambe, per consumare al momento giusto invece di buttare presto.",
          },
          {
            title: "Niente dimenticato",
            desc: "Gli articoli salgono man mano che la data si avvicina — il frigo non nasconde più nulla.",
          },
        ],
      },
      {
        h2: "Trasforma « in scadenza » nella cena di stasera",
        body: "Invece di partire da una ricetta e fare la spesa, Copantry parte da ciò che hai già. Suggerisce piatti veri intorno ai tuoi ingredienti da finire, in base a quante persone servi.",
      },
      {
        h2: "Spreca anche meno denaro",
        body: "Lo spreco alimentare vale centinaia di euro per famiglia all’anno. Cucinare ciò che hai e comprare solo ciò che manca è uno dei modi più semplici per ridurre sia lo spreco sia la spesa.",
      },
    ],
    howTo: {
      title:
        "Come pianificare i pasti in base alle scadenze invece che alle ricette",
      steps: [
        "Aggiungi la spesa — fotografa gli acquisti o uno scontrino e Copantry data ogni articolo per te.",
        "Apri la dispensa per vedere cosa scade prima, ordinato automaticamente in cima.",
        "Scegli un piatto suggerito intorno a quegli articoli e pianificalo nella settimana.",
        "Cucina — Copantry scala ciò che hai usato, per tenere aggiornati dispensa e prossima spesa.",
      ],
    },
    related: [
      { label: "Quanto durano gli alimenti?", to: "/learn" },
      { label: "Pianificazione dei pasti", to: "/features/meal-planning" },
      { label: "Gestione della dispensa", to: "/features/pantry-tracking" },
    ],
    cta: {
      title: "Inizia a salvare cibo già stasera",
      subtitle:
        "Gratis · senza carta. Aggiungi la tua cucina e scopri cosa cucinare prima che qualcosa vada a male.",
    },
    faqItems: [
      {
        q: "Quali alimenti devo finire prima che vadano a male?",
        a: "Copantry tiene un elenco aggiornato di ciò che hai in cucina, ordinato per scadenza, così gli alimenti da finire prima sono sempre in cima. Poi suggerisce ricette intorno a quegli articoli.",
      },
      {
        q: "Come smettere di sprecare cibo a casa?",
        a: "Il modo più efficace è cucinare ciò che hai già prima che scada e comprare solo il necessario. Copantry fa entrambe le cose: monitora le scadenze, suggerisce piatti « da finire » e crea una lista solo di ciò che manca.",
      },
      {
        q: "Quanto cibo spreca una famiglia media?",
        a: "Lo spreco alimentare vale decine di chili per persona all’anno. Ridurlo a casa è uno dei modi più semplici per risparmiare e ridurre la propria impronta di carbonio.",
      },
      {
        q: "Che differenza c’è tra « consumare entro » e « preferibilmente entro »?",
        a: "« Consumare entro » riguarda la sicurezza — non mangiare dopo. « Preferibilmente entro » riguarda la qualità — di solito l’alimento è ancora sicuro dopo. Copantry permette di tracciare entrambe.",
      },
      {
        q: "Posso pianificare i pasti in base alle scadenze invece che alle ricette?",
        a: "Sì. È esattamente ciò per cui Copantry è pensato. Invece di partire da una ricetta, parti da ciò che sta per scadere e Copantry suggerisce piatti che usano prima quegli ingredienti.",
      },
    ],
  },
  es: {
    accent: "green",
    heroEmoji: "🥬",
    eyebrow: "Reduce el desperdicio",
    crumb: "Reduce el desperdicio",
    h1: "Aprovecha tu comida antes de que se estropee",
    lede: "Copantry controla cuánto tiempo le queda a todo lo que hay en tu cocina y sugiere platos que usan primero lo que está por caducar — para que la comida acabe en tu plato y no en la basura. Es el corazón de cómo funciona Copantry, no un añadido.",
    sections: [
      {
        h2: "Ve qué hay que aprovechar — de un vistazo",
        body: "Tu despensa siempre está ordenada de lo más próximo a caducar a lo más lejano, así que lo que hay que cocinar primero está arriba. Se acabó descubrir una bolsa de espinacas licuada detrás de la leche.",
        bullets: [
          {
            title: "Caducidades en tiempo real",
            desc: "Cada artículo tiene una fecha ajustable. Copantry avisa de lo que se acerca.",
          },
          {
            title: "Fecha de caducidad vs consumo preferente",
            desc: "Controla ambas, para consumir en el momento justo en vez de tirar pronto.",
          },
          {
            title: "Nada olvidado",
            desc: "Los artículos suben a medida que se acerca la fecha — la nevera ya no esconde nada.",
          },
        ],
      },
      {
        h2: "Convierte « por caducar » en la cena de hoy",
        body: "En vez de partir de una receta e ir a comprar, Copantry parte de lo que ya tienes. Sugiere platos reales en torno a tus ingredientes por aprovechar, ajustados a cuántos coméis.",
      },
      {
        h2: "Desperdicia también menos dinero",
        body: "El desperdicio de comida supone cientos de euros por hogar al año. Cocinar lo que tienes y comprar solo lo que falta es una de las formas más sencillas de reducir tanto el desperdicio como la factura.",
      },
    ],
    howTo: {
      title:
        "Cómo planificar comidas según las caducidades en vez de las recetas",
      steps: [
        "Añade tu compra — haz una foto de lo comprado o de un ticket y Copantry pone fecha a cada artículo.",
        "Abre tu despensa para ver qué caduca antes, ordenado automáticamente arriba.",
        "Elige un plato sugerido en torno a esos artículos y planifícalo en tu semana.",
        "Cocina — Copantry descuenta lo que usaste, para mantener al día la despensa y la próxima compra.",
      ],
    },
    related: [
      { label: "¿Cuánto dura la comida?", to: "/learn" },
      { label: "Planificación de comidas", to: "/features/meal-planning" },
      { label: "Control de la despensa", to: "/features/pantry-tracking" },
    ],
    cta: {
      title: "Empieza a salvar comida esta misma noche",
      subtitle:
        "Gratis · sin tarjeta. Añade tu cocina y descubre qué cocinar antes de que algo se estropee.",
    },
    faqItems: [
      {
        q: "¿Qué comida debo aprovechar antes de que se estropee?",
        a: "Copantry mantiene una lista al día de lo que hay en tu cocina, ordenada por caducidad, así que lo que hay que aprovechar primero siempre está arriba. Luego sugiere recetas en torno a esos artículos.",
      },
      {
        q: "¿Cómo dejo de desperdiciar comida en casa?",
        a: "La forma más eficaz es cocinar lo que ya tienes antes de que caduque y comprar solo lo necesario. Copantry hace ambas cosas: controla las fechas, sugiere platos para aprovechar y crea una lista solo de lo que falta.",
      },
      {
        q: "¿Cuánta comida desperdicia un hogar medio?",
        a: "El desperdicio de comida supone decenas de kilos por persona al año. Reducirlo en casa es una de las formas más sencillas de ahorrar y reducir tu huella de carbono.",
      },
      {
        q: "¿Qué diferencia hay entre fecha de caducidad y consumo preferente?",
        a: "La fecha de caducidad es de seguridad — no comas después. El consumo preferente es de calidad — el alimento suele seguir siendo seguro después. Copantry te permite controlar ambas.",
      },
      {
        q: "¿Puedo planificar comidas según las caducidades en vez de las recetas?",
        a: "Sí. Es exactamente para lo que está hecho Copantry. En vez de partir de una receta, partes de lo que está por caducar y Copantry sugiere platos que usan primero esos ingredientes.",
      },
    ],
  },
  pt: {
    accent: "green",
    heroEmoji: "🥬",
    eyebrow: "Reduzir o desperdício",
    crumb: "Reduzir o desperdício",
    h1: "Aproveite os seus alimentos antes que estraguem",
    lede: "O Copantry acompanha quanto tempo resta a tudo o que tem na cozinha e sugere pratos que usam primeiro o que está prestes a expirar — para que a comida vá parar ao prato e não ao lixo. É o centro de como o Copantry funciona, não um extra.",
    sections: [
      {
        h2: "Veja o que aproveitar — num relance",
        body: "A sua despensa está sempre ordenada do mais próximo ao mais distante da validade, por isso o que cozinhar primeiro está no topo. Acabou descobrir um saco de espinafres liquefeito atrás do leite.",
        bullets: [
          {
            title: "Validades em tempo real",
            desc: "Cada item tem uma data ajustável. O Copantry assinala o que está a aproximar-se.",
          },
          {
            title: "Consumir até vs durar até",
            desc: "Acompanhe ambas, para consumir na altura certa em vez de deitar fora cedo.",
          },
          {
            title: "Nada esquecido",
            desc: "Os itens sobem à medida que a data se aproxima — o frigorífico já não esconde nada.",
          },
        ],
      },
      {
        h2: "Transforme « quase a expirar » no jantar de hoje",
        body: "Em vez de partir de uma receita e ir às compras, o Copantry parte do que já tem. Sugere pratos reais à volta dos seus ingredientes a aproveitar, ajustados a quantos vai servir.",
      },
      {
        h2: "Desperdice também menos dinheiro",
        body: "O desperdício alimentar vale centenas de euros por agregado por ano. Cozinhar o que tem e comprar só o que falta é uma das formas mais simples de reduzir tanto o desperdício como a conta.",
      },
    ],
    howTo: {
      title:
        "Como planear refeições com base nas validades em vez das receitas",
      steps: [
        "Adicione as compras — fotografe o que comprou ou um talão e o Copantry data cada item por si.",
        "Abra a despensa para ver o que expira primeiro, ordenado automaticamente no topo.",
        "Escolha um prato sugerido à volta desses itens e planeie-o na sua semana.",
        "Cozinhe — o Copantry desconta o que usou, para manter a despensa e a próxima lista atualizadas.",
      ],
    },
    related: [
      { label: "Quanto tempo duram os alimentos?", to: "/learn" },
      { label: "Planeamento de refeições", to: "/features/meal-planning" },
      { label: "Gestão da despensa", to: "/features/pantry-tracking" },
    ],
    cta: {
      title: "Comece a salvar comida já hoje à noite",
      subtitle:
        "Grátis · sem cartão. Adicione a sua cozinha e veja o que cozinhar antes que algo estrague.",
    },
    faqItems: [
      {
        q: "Que alimentos devo aproveitar antes que estraguem?",
        a: "O Copantry mantém uma lista atualizada do que tem na cozinha, ordenada por validade, por isso o que aproveitar primeiro está sempre no topo. Depois sugere receitas à volta desses itens.",
      },
      {
        q: "Como deixo de desperdiçar comida em casa?",
        a: "A forma mais eficaz é cozinhar o que já tem antes que expire e comprar apenas o necessário. O Copantry faz as duas coisas: acompanha as validades, sugere pratos para aproveitar e cria uma lista só do que falta.",
      },
      {
        q: "Quanta comida desperdiça um agregado médio?",
        a: "O desperdício alimentar representa dezenas de quilos por pessoa por ano. Reduzi-lo em casa é uma das formas mais simples de poupar e reduzir a sua pegada de carbono.",
      },
      {
        q: "Qual a diferença entre « consumir até » e « durar até »?",
        a: "« Consumir até » é sobre segurança — não coma depois. « Durar até » é sobre qualidade — normalmente o alimento ainda é seguro depois. O Copantry deixa-o acompanhar ambas.",
      },
      {
        q: "Posso planear refeições com base nas validades em vez das receitas?",
        a: "Sim. É exatamente para isso que o Copantry foi feito. Em vez de partir de uma receita, parte do que está a expirar e o Copantry sugere pratos que usam primeiro esses ingredientes.",
      },
    ],
  },
  de: {
    accent: "green",
    heroEmoji: "🥬",
    eyebrow: "Verschwendung reduzieren",
    crumb: "Verschwendung reduzieren",
    h1: "Verbrauchen Sie Ihre Lebensmittel, bevor sie verderben",
    lede: "Copantry verfolgt, wie lange alles in Ihrer Küche noch hält, und schlägt Gerichte vor, die zuerst das bald Ablaufende nutzen – damit Essen auf Ihrem Teller landet statt in der Tonne. Das ist der Kern, wie Copantry funktioniert, kein Zusatz.",
    sections: [
      {
        h2: "Sehen Sie auf einen Blick, was verbraucht werden muss",
        body: "Ihr Vorrat ist immer vom nächsten bis zum fernsten Ablaufdatum sortiert, sodass das zuerst zu Kochende ganz oben steht. Schluss damit, einen zerlaufenen Beutel Spinat hinter der Milch zu entdecken.",
        bullets: [
          {
            title: "Ablaufdaten in Echtzeit",
            desc: "Jedes Produkt hat ein anpassbares Datum. Copantry markiert, was näher rückt.",
          },
          {
            title: "Verbrauchsdatum vs. Mindesthaltbarkeit",
            desc: "Verfolgen Sie beide, um zur richtigen Zeit zu verbrauchen statt zu früh wegzuwerfen.",
          },
          {
            title: "Nichts vergessen",
            desc: "Produkte rücken nach oben, je näher das Datum kommt – der Kühlschrank versteckt nichts mehr.",
          },
        ],
      },
      {
        h2: "Machen Sie aus „bald abgelaufen“ das heutige Abendessen",
        body: "Statt von einem Rezept auszugehen und einkaufen zu gehen, geht Copantry von dem aus, was Sie schon haben. Es schlägt echte Gerichte rund um Ihre zu verbrauchenden Zutaten vor, passend zur Anzahl der Esser.",
      },
      {
        h2: "Verschwenden Sie auch weniger Geld",
        body: "Lebensmittelverschwendung kostet Hunderte Euro pro Haushalt und Jahr. Das zu kochen, was Sie haben, und nur das Fehlende zu kaufen, ist eine der einfachsten Möglichkeiten, sowohl Verschwendung als auch Rechnung zu senken.",
      },
    ],
    howTo: {
      title: "So planen Sie Mahlzeiten nach Ablaufdaten statt nach Rezepten",
      steps: [
        "Fügen Sie Ihren Einkauf hinzu – fotografieren Sie Ihre Einkäufe oder einen Kassenbon und Copantry datiert jedes Produkt für Sie.",
        "Öffnen Sie Ihren Vorrat, um zu sehen, was am ehesten abläuft, automatisch oben sortiert.",
        "Wählen Sie ein vorgeschlagenes Gericht rund um diese Produkte und planen Sie es in Ihre Woche ein.",
        "Kochen Sie – Copantry zieht das Verbrauchte ab, damit Vorrat und nächster Einkauf aktuell bleiben.",
      ],
    },
    related: [
      { label: "Wie lange halten Lebensmittel?", to: "/learn" },
      { label: "Essensplanung", to: "/features/meal-planning" },
      { label: "Vorratsverwaltung", to: "/features/pantry-tracking" },
    ],
    cta: {
      title: "Beginnen Sie noch heute Abend, Lebensmittel zu retten",
      subtitle:
        "Kostenlos · keine Karte. Fügen Sie Ihre Küche hinzu und sehen Sie, was zu kochen ist, bevor etwas verdirbt.",
    },
    faqItems: [
      {
        q: "Welche Lebensmittel sollte ich verbrauchen, bevor sie verderben?",
        a: "Copantry führt eine aktuelle Liste dessen, was in Ihrer Küche ist, sortiert nach Ablaufdatum, sodass das zuerst zu Verbrauchende immer oben steht. Dann schlägt es Rezepte rund um diese Produkte vor.",
      },
      {
        q: "Wie höre ich auf, zu Hause Lebensmittel zu verschwenden?",
        a: "Am wirksamsten ist es, das zu kochen, was Sie schon haben, bevor es abläuft, und nur das Nötige zu kaufen. Copantry macht beides: Es verfolgt Ablaufdaten, schlägt Reste-Gerichte vor und erstellt eine Liste nur des Fehlenden.",
      },
      {
        q: "Wie viele Lebensmittel verschwendet ein durchschnittlicher Haushalt?",
        a: "Lebensmittelverschwendung beläuft sich auf Dutzende Kilogramm pro Person und Jahr. Sie zu Hause zu reduzieren ist eine der einfachsten Möglichkeiten, Geld zu sparen und den CO₂-Fußabdruck zu senken.",
      },
      {
        q: "Was ist der Unterschied zwischen Verbrauchsdatum und Mindesthaltbarkeitsdatum?",
        a: "Das Verbrauchsdatum betrifft die Sicherheit – essen Sie es danach nicht. Das Mindesthaltbarkeitsdatum betrifft die Qualität – das Lebensmittel ist danach meist noch sicher. Copantry lässt Sie beide verfolgen.",
      },
      {
        q: "Kann ich Mahlzeiten nach Ablaufdaten statt nach Rezepten planen?",
        a: "Ja. Genau dafür ist Copantry gemacht. Statt von einem Rezept auszugehen, gehen Sie von dem aus, was bald abläuft, und Copantry schlägt Gerichte vor, die diese Zutaten zuerst nutzen.",
      },
    ],
  },
};

/*
 * Localized home-page FAQ (display + per-locale FAQPage JSON-LD). English reuses the
 * canonical FAQS.home; the five locales are full translations of the same 6 Q&A. `us`
 * falls back to `en` via pick(). Keep the item order in lock-step with FAQS.home.
 */
export const HOME_FAQ = {
  en: FAQS.home,
  fr: [
    {
      q: "Existe-t-il une application qui vous dit quoi cuisiner avant que les aliments ne périment ?",
      a: "Oui. Copantry suit ce qui se trouve dans votre cuisine et le temps qu'il reste à chaque produit, puis suggère des recettes qui utilisent d'abord ce qui va bientôt périmer — et compose votre liste de courses uniquement avec ce qui vous manque.",
    },
    {
      q: "Existe-t-il un planificateur de repas qui s'organise autour de ce qu'il y a dans votre frigo ?",
      a: "Oui. Copantry part de votre garde-manger, pas d'un calendrier vide. Il regarde ce que vous avez déjà et ce qui va bientôt se gâter, puis planifie une semaine de repas qui utilisent d'abord ces ingrédients pour gaspiller moins et acheter moins.",
    },
    {
      q: "Comment Copantry m'aide-t-il à gaspiller moins de nourriture ?",
      a: "Copantry vous montre ce qui va bientôt périmer, suggère des plats qui utilisent ces produits en premier et n'ajoute à votre liste de courses que ce que vous n'avez pas déjà — vous arrêtez ainsi d'acheter en double et de jeter des aliments oubliés.",
    },
    {
      q: "Copantry est-il gratuit ?",
      a: "Copantry est gratuit, sans carte requise. Vous pouvez collecter des recettes, suivre votre garde-manger, planifier des repas et créer des listes de courses avec la version gratuite.",
    },
    {
      q: "Sur quels appareils Copantry fonctionne-t-il ?",
      a: "Copantry fonctionne dans votre navigateur web et sur Android, avec une application iOS à venir. Votre garde-manger, vos recettes et vos plans se synchronisent sur tous vos appareils.",
    },
    {
      q: "Mon ou ma partenaire et ma famille peuvent-ils partager le même plan et la même liste de courses ?",
      a: "Oui. Copantry est conçu pour les foyers : invitez votre famille à votre cuisine et vous partagez tous le même garde-manger, le même calendrier de repas et la même liste de courses, mise à jour en temps réel.",
    },
  ],
  it: [
    {
      q: "Esiste un'app che ti dice cosa cucinare prima che il cibo scada?",
      a: "Sì. Copantry tiene traccia di ciò che hai in cucina e di quanto manca alla scadenza di ogni prodotto, poi suggerisce ricette che usano per prime le cose in scadenza — e crea la lista della spesa solo con ciò che ti manca.",
    },
    {
      q: "Esiste un pianificatore di pasti che organizza in base a ciò che hai in frigo?",
      a: "Sì. Copantry parte dalla tua dispensa, non da un calendario vuoto. Guarda ciò che hai già e ciò che sta per andare a male, poi pianifica una settimana di pasti che usano prima quegli ingredienti, così sprechi meno e fai meno spesa.",
    },
    {
      q: "Come mi aiuta Copantry a sprecare meno cibo?",
      a: "Copantry ti mostra ciò che sta per scadere, suggerisce piatti che usano per primi quei prodotti e aggiunge alla lista della spesa solo ciò che non hai già — così smetti di comprare doppioni e di buttare cibo dimenticato.",
    },
    {
      q: "Copantry è gratuito?",
      a: "Copantry è gratuito da usare, senza carta richiesta. Puoi raccogliere ricette, gestire la dispensa, pianificare i pasti e creare liste della spesa con il piano gratuito.",
    },
    {
      q: "Su quali dispositivi funziona Copantry?",
      a: "Copantry funziona nel tuo browser web e su Android, con un'app per iOS in arrivo. La dispensa, le ricette e i piani si sincronizzano su tutti i tuoi dispositivi.",
    },
    {
      q: "Il mio partner e la mia famiglia possono condividere lo stesso piano e la stessa lista della spesa?",
      a: "Sì. Copantry è pensato per le famiglie: invita i tuoi cari nella tua cucina e condividerete tutti la stessa dispensa, lo stesso calendario dei pasti e la stessa lista della spesa, aggiornata in tempo reale.",
    },
  ],
  es: [
    {
      q: "¿Hay una app que te diga qué cocinar antes de que la comida caduque?",
      a: "Sí. Copantry controla lo que tienes en la cocina y cuánto le queda a cada producto, y luego sugiere recetas que usan primero lo que está a punto de caducar — y arma tu lista de la compra solo con lo que te falta.",
    },
    {
      q: "¿Hay un planificador de comidas que se organice según lo que tienes en la nevera?",
      a: "Sí. Copantry parte de tu despensa, no de un calendario vacío. Mira lo que ya tienes y lo que está por estropearse, y planifica una semana de comidas que usan primero esos ingredientes para desperdiciar menos y comprar menos.",
    },
    {
      q: "¿Cómo me ayuda Copantry a desperdiciar menos comida?",
      a: "Copantry te muestra lo que está por caducar, sugiere platos que usan primero esos productos y solo añade a tu lista de la compra lo que no tienes ya — así dejas de comprar duplicados y de tirar comida olvidada.",
    },
    {
      q: "¿Copantry es gratis?",
      a: "Copantry es gratis, sin tarjeta requerida. Puedes recopilar recetas, controlar tu despensa, planificar comidas y crear listas de la compra con la versión gratuita.",
    },
    {
      q: "¿En qué dispositivos funciona Copantry?",
      a: "Copantry funciona en tu navegador web y en Android, con una app para iOS en camino. Tu despensa, recetas y planes se sincronizan en todos tus dispositivos.",
    },
    {
      q: "¿Pueden mi pareja y mi familia compartir el mismo plan y la misma lista de la compra?",
      a: "Sí. Copantry está pensado para hogares: invita a tu familia a tu cocina y todos compartiréis la misma despensa, el mismo calendario de comidas y la misma lista de la compra, actualizada en tiempo real.",
    },
  ],
  pt: [
    {
      q: "Existe uma aplicação que diz o que cozinhar antes de a comida estragar?",
      a: "Sim. A Copantry acompanha o que tem na cozinha e quanto tempo falta a cada produto e, depois, sugere receitas que usam primeiro o que está prestes a expirar — e cria a sua lista de compras apenas com o que lhe falta.",
    },
    {
      q: "Existe um planeador de refeições que se organiza com base no que tem no frigorífico?",
      a: "Sim. A Copantry parte da sua despensa, não de um calendário vazio. Olha para o que já tem e para o que está prestes a estragar-se e planeia uma semana de refeições que usam primeiro esses ingredientes, para desperdiçar menos e comprar menos.",
    },
    {
      q: "Como é que a Copantry me ajuda a desperdiçar menos comida?",
      a: "A Copantry mostra-lhe o que está prestes a expirar, sugere pratos que usam primeiro esses produtos e só acrescenta à sua lista de compras o que ainda não tem — assim deixa de comprar duplicados e de deitar fora comida esquecida.",
    },
    {
      q: "A Copantry é gratuita?",
      a: "A Copantry é gratuita, sem cartão necessário. Pode reunir receitas, gerir a despensa, planear refeições e criar listas de compras na versão gratuita.",
    },
    {
      q: "Em que dispositivos funciona a Copantry?",
      a: "A Copantry funciona no seu navegador web e em Android, com uma aplicação para iOS a caminho. A sua despensa, receitas e planos sincronizam em todos os seus dispositivos.",
    },
    {
      q: "O meu/minha parceiro(a) e a minha família podem partilhar o mesmo plano e a mesma lista de compras?",
      a: "Sim. A Copantry foi pensada para famílias: convide os seus para a sua cozinha e partilham todos a mesma despensa, o mesmo calendário de refeições e a mesma lista de compras, atualizada em tempo real.",
    },
  ],
  de: [
    {
      q: "Gibt es eine App, die dir sagt, was du kochen sollst, bevor Lebensmittel ablaufen?",
      a: "Ja. Copantry verfolgt, was in deiner Küche ist und wie lange jedes Produkt noch haltbar ist, und schlägt dann Rezepte vor, die zuerst das verwenden, was bald abläuft — und erstellt deine Einkaufsliste nur aus dem, was dir fehlt.",
    },
    {
      q: "Gibt es einen Essensplaner, der sich nach dem richtet, was in deinem Kühlschrank ist?",
      a: "Ja. Copantry geht von deinem Vorrat aus, nicht von einem leeren Kalender. Es schaut, was du schon hast und was bald schlecht wird, und plant dann eine Woche mit Gerichten, die zuerst diese Zutaten verwenden, damit du weniger wegwirfst und weniger einkaufst.",
    },
    {
      q: "Wie hilft mir Copantry, weniger Lebensmittel zu verschwenden?",
      a: "Copantry zeigt dir, was bald abläuft, schlägt Gerichte vor, die zuerst diese Produkte verwenden, und setzt nur das auf deine Einkaufsliste, was du nicht schon hast — so kaufst du keine Dopplungen mehr und wirfst keine vergessenen Lebensmittel weg.",
    },
    {
      q: "Ist Copantry kostenlos?",
      a: "Copantry ist kostenlos nutzbar, ohne Karte. Du kannst Rezepte sammeln, deinen Vorrat verfolgen, Mahlzeiten planen und Einkaufslisten in der kostenlosen Version erstellen.",
    },
    {
      q: "Auf welchen Geräten funktioniert Copantry?",
      a: "Copantry läuft in deinem Webbrowser und auf Android, eine iOS-App ist in Arbeit. Dein Vorrat, deine Rezepte und Pläne werden auf all deinen Geräten synchronisiert.",
    },
    {
      q: "Können mein Partner und meine Familie denselben Plan und dieselbe Einkaufsliste teilen?",
      a: "Ja. Copantry ist für Haushalte gemacht: Lade deine Familie in deine Küche ein, und ihr teilt euch alle denselben Vorrat, denselben Essensplan und dieselbe Einkaufsliste, in Echtzeit aktualisiert.",
    },
  ],
};
