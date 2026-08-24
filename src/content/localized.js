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
 * Canonical marketing locale registry. Routing, fallback, labels, BCP-47 metadata and localized
 * proof values derive from this record so adding a locale cannot leave a parallel map incomplete.
 * The unprefixed English copy is British; account language storage remains the base code `en`.
 */
export const LOCALE_CONFIG = {
  en: {
    baseLanguage: "en",
    label: "English (UK)",
    hreflang: "en-GB",
    rescueAmount: "£8",
    flag: "GB",
  },
  fr: {
    baseLanguage: "fr",
    label: "Français",
    hreflang: "fr",
    rescueAmount: "9 €",
    flag: "FR",
  },
  it: {
    baseLanguage: "it",
    label: "Italiano",
    hreflang: "it",
    rescueAmount: "9 €",
    flag: "IT",
  },
  es: {
    baseLanguage: "es",
    label: "Español",
    hreflang: "es",
    rescueAmount: "9 €",
    flag: "ES",
  },
  pt: {
    baseLanguage: "pt",
    label: "Português",
    hreflang: "pt",
    rescueAmount: "9 €",
    flag: "PT",
  },
  de: {
    baseLanguage: "de",
    label: "Deutsch",
    hreflang: "de",
    rescueAmount: "9 €",
    flag: "DE",
  },
  nl: {
    baseLanguage: "nl",
    label: "Nederlands",
    hreflang: "nl",
    rescueAmount: "9 €",
    flag: "NL",
  },
  sv: {
    baseLanguage: "sv",
    label: "Svenska",
    hreflang: "sv",
    rescueAmount: "100 kr",
    flag: "SE",
  },
  pl: {
    baseLanguage: "pl",
    label: "Polski",
    hreflang: "pl",
    rescueAmount: "40 zł",
    flag: "PL",
  },
  da: {
    baseLanguage: "da",
    label: "Dansk",
    hreflang: "da",
    rescueAmount: "70 kr",
    flag: "DK",
  },
  fi: {
    baseLanguage: "fi",
    label: "Suomi",
    hreflang: "fi",
    rescueAmount: "9 €",
    flag: "FI",
  },
  no: {
    baseLanguage: "no",
    label: "Norsk bokmål",
    hreflang: "no",
    rescueAmount: "110 kr",
    flag: "NO",
  },
  "en-us": {
    baseLanguage: "en",
    label: "English (US)",
    hreflang: "en-US",
    rescueAmount: "$10",
    flag: "US",
    regionalCountry: "US",
  },
  "pt-br": {
    baseLanguage: "pt",
    label: "Português (Brasil)",
    hreflang: "pt-BR",
    rescueAmount: "9 €",
    flag: "BR",
    regionalCountry: "BR",
  },
  "es-419": {
    baseLanguage: "es",
    label: "Español (Latinoamérica)",
    hreflang: "es-419",
    rescueAmount: "9 €",
    flag: "ES",
  },
};

/** Return a complete registry entry, falling back to the British-English root entry. */
export const localeConfig = (code) => LOCALE_CONFIG[code] || LOCALE_CONFIG.en;
/** Locales with URL-prefixed routes; English remains canonical at the unprefixed root. */
export const LOCALES = Object.keys(LOCALE_CONFIG).filter(
  (code) => code !== "en",
);
/** All locale codes for hreflang alternates, including the unprefixed English root. */
export const HREFLANG_LANGS = Object.keys(LOCALE_CONFIG);
/** Resolve a route code to its standards-cased BCP-47 language tag. */
export const hreflangFor = (code) => localeConfig(code).hreflang;
/** Return the base-language catalogue used by a published route locale. */
export const baseLocaleOf = (code) => localeConfig(code).baseLanguage;

/*
 * Which logical paths have localized, URL-prefixed variants. Standalone pages are
 * listed exactly; whole sections are matched by prefix (every /features/* except
 * the MCP page, all /use-cases/*, and all /learn + /blog pages). `isLocalizedPath`
 * is the single source of truth for both `localizePath()` and the language switcher.
 */
const LOCALIZED_EXACT = new Set(["/", "/how-it-works", "/why-copantry"]);
const LOCALIZED_PREFIXES = ["/features/", "/use-cases/", "/learn", "/blog"];
// Pages under a localized prefix that are deliberately NOT localized.
const NOT_LOCALIZED = new Set(["/features/ai-assistant-mcp", "/mcp"]);

export function isLocalizedPath(path) {
  if (NOT_LOCALIZED.has(path)) return false;
  if (LOCALIZED_EXACT.has(path)) return true;
  return LOCALIZED_PREFIXES.some((p) => path === p || path.startsWith(p));
}

/** Back-compat: the standalone (non-section) localized pages. */
export const LOCALIZED_PAGES = [...LOCALIZED_EXACT];

/** Resolve regional copy through its base language before using English. */
export const pick = (obj, lng) => {
  if (obj[lng]) return obj[lng];
  const base = baseLocaleOf(lng);
  return (base && obj[base]) || obj.en;
};

/** Prefix a logical path for a locale (en -> unprefixed). */
export function localizePath(path, lng) {
  if (lng === "en" || !LOCALES.includes(lng)) return path;
  if (!isLocalizedPath(path)) return path;
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
    breadcrumbUseCases: "Use cases",
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
      links: {
        reduceFoodWaste: "Reduce food waste",
        mealPlanning: "Meal planning",
        pantryTracking: "Pantry tracking",
        shoppingLists: "Shopping lists",
        recipes: "Recipes",
        forFamilies: "For families",
        forCouples: "For couples",
        budgetCooking: "Budget cooking",
        aiAssistant: "Plan from ChatGPT or Claude",
        foodLasts: "How long does food last?",
        about: "About",
        forBusiness: "For Business",
        privacy: "Privacy",
        terms: "Terms",
        contact: "Contact",
        investors: "Investors",
      },
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
    breadcrumbUseCases: "Cas d’usage",
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
      links: {
        reduceFoodWaste: "Réduire le gaspillage",
        mealPlanning: "Planification des repas",
        pantryTracking: "Suivi du garde-manger",
        shoppingLists: "Listes de courses",
        recipes: "Recettes",
        forFamilies: "Pour les familles",
        forCouples: "Pour les couples",
        budgetCooking: "Cuisine économique",
        aiAssistant: "Planifier depuis ChatGPT ou Claude",
        foodLasts: "Combien de temps se conservent les aliments ?",
        about: "À propos",
        forBusiness: "Pour les entreprises",
        privacy: "Confidentialité",
        terms: "Conditions",
        contact: "Contact",
        investors: "Investisseurs",
      },
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
    breadcrumbUseCases: "Casi d’uso",
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
      links: {
        reduceFoodWaste: "Ridurre gli sprechi",
        mealPlanning: "Pianificazione dei pasti",
        pantryTracking: "Gestione della dispensa",
        shoppingLists: "Liste della spesa",
        recipes: "Ricette",
        forFamilies: "Per le famiglie",
        forCouples: "Per le coppie",
        budgetCooking: "Cucina economica",
        aiAssistant: "Pianifica da ChatGPT o Claude",
        foodLasts: "Quanto durano gli alimenti?",
        about: "Chi siamo",
        forBusiness: "Per le aziende",
        privacy: "Privacy",
        terms: "Termini",
        contact: "Contatti",
        investors: "Investitori",
      },
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
    breadcrumbUseCases: "Casos de uso",
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
      links: {
        reduceFoodWaste: "Reducir el desperdicio",
        mealPlanning: "Planificación de comidas",
        pantryTracking: "Control de la despensa",
        shoppingLists: "Listas de la compra",
        recipes: "Recetas",
        forFamilies: "Para familias",
        forCouples: "Para parejas",
        budgetCooking: "Cocina económica",
        aiAssistant: "Planifica desde ChatGPT o Claude",
        foodLasts: "¿Cuánto duran los alimentos?",
        about: "Acerca de",
        forBusiness: "Para empresas",
        privacy: "Privacidad",
        terms: "Términos",
        contact: "Contacto",
        investors: "Inversores",
      },
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
    breadcrumbUseCases: "Casos de uso",
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
      links: {
        reduceFoodWaste: "Reduzir o desperdício",
        mealPlanning: "Planeamento de refeições",
        pantryTracking: "Controlo da despensa",
        shoppingLists: "Listas de compras",
        recipes: "Receitas",
        forFamilies: "Para famílias",
        forCouples: "Para casais",
        budgetCooking: "Cozinha económica",
        aiAssistant: "Planeie a partir do ChatGPT ou Claude",
        foodLasts: "Quanto tempo duram os alimentos?",
        about: "Sobre",
        forBusiness: "Para empresas",
        privacy: "Privacidade",
        terms: "Termos",
        contact: "Contacto",
        investors: "Investidores",
      },
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
    breadcrumbUseCases: "Anwendungsfälle",
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
      links: {
        reduceFoodWaste: "Lebensmittel retten",
        mealPlanning: "Essensplanung",
        pantryTracking: "Vorratsverwaltung",
        shoppingLists: "Einkaufslisten",
        recipes: "Rezepte",
        forFamilies: "Für Familien",
        forCouples: "Für Paare",
        budgetCooking: "Günstig kochen",
        aiAssistant: "Aus ChatGPT oder Claude planen",
        foodLasts: "Wie lange halten Lebensmittel?",
        about: "Über uns",
        forBusiness: "Für Unternehmen",
        privacy: "Datenschutz",
        terms: "AGB",
        contact: "Kontakt",
        investors: "Investoren",
      },
    },
  },
  nl: {
    nav: {
      howItWorks: "Hoe het werkt",
      why: "Waarom Copantry",
      learn: "Gidsen",
      blog: "Blog",
      signin: "Inloggen",
      getStarted: "Gratis beginnen",
    },
    ctaPrimary: "Zie wat je keuken vanavond kan koken",
    getStartedFree: "Gratis beginnen",
    howItWorks: "Hoe het werkt",
    appsNote:
      "Native apps voor iOS en Android komen binnenkort. Gebruik Copantry vandaag al in elke browser.",
    appSoon: "Binnenkort",
    faqEyebrow: "Goed om te weten",
    faqTitle: "Veelgestelde vragen",
    breadcrumbHome: "Home",
    breadcrumbFeatures: "Functies",
    breadcrumbUseCases: "Toepassingen",
    keepExploring: "Verder ontdekken",
    cta: {
      title: "Begin te koken met wat je al hebt",
      subtitle:
        "Gratis · geen kaart nodig · werkt in elke browser. Richt je keuken in binnen enkele minuten en zie wat vanavond kan worden.",
    },
    footer: {
      tagline:
        "Kook wat je hebt voordat het bederft, en koop alleen wat je mist.",
      product: "Product",
      audience: "Voor wie",
      learn: "Gidsen",
      company: "Bedrijf",
      rights: "Alle rechten voorbehouden.",
      links: {
        reduceFoodWaste: "Voedselverspilling verminderen",
        mealPlanning: "Maaltijden plannen",
        pantryTracking: "Voorraadkast bijhouden",
        shoppingLists: "Boodschappenlijsten",
        recipes: "Recepten",
        forFamilies: "Voor gezinnen",
        forCouples: "Voor stellen",
        budgetCooking: "Koken met een budget",
        aiAssistant: "Plannen vanuit ChatGPT of Claude",
        foodLasts: "Hoe lang blijft voedsel goed?",
        about: "Over ons",
        forBusiness: "Voor bedrijven",
        privacy: "Privacy",
        terms: "Voorwaarden",
        contact: "Contact",
        investors: "Investeerders",
      },
    },
  },
  sv: {
    nav: {
      howItWorks: "Så fungerar det",
      why: "Varför Copantry",
      learn: "Guider",
      blog: "Blogg",
      signin: "Logga in",
      getStarted: "Kom igång gratis",
    },
    ctaPrimary: "Se vad ditt kök kan laga i kväll",
    getStartedFree: "Kom igång gratis",
    howItWorks: "Så fungerar det",
    appsNote:
      "Egna appar för iOS och Android kommer snart. Använd Copantry i vilken webbläsare som helst redan idag.",
    appSoon: "Snart",
    faqEyebrow: "Bra att veta",
    faqTitle: "Vanliga frågor",
    breadcrumbHome: "Hem",
    breadcrumbFeatures: "Funktioner",
    breadcrumbUseCases: "Användningsområden",
    keepExploring: "Fortsätt utforska",
    cta: {
      title: "Börja laga det du redan har",
      subtitle:
        "Gratis · inget kort behövs · fungerar i alla webbläsare. Ställ in ditt kök på några minuter och se vad kvällen kan bli.",
    },
    footer: {
      tagline:
        "Laga det du har innan det blir dåligt, och handla bara det du saknar.",
      product: "Produkt",
      audience: "För vem",
      learn: "Guider",
      company: "Företag",
      rights: "Med ensamrätt.",
      links: {
        reduceFoodWaste: "Minska matsvinnet",
        mealPlanning: "Måltidsplanering",
        pantryTracking: "Koll på skafferiet",
        shoppingLists: "Inköpslistor",
        recipes: "Recept",
        forFamilies: "För familjer",
        forCouples: "För par",
        budgetCooking: "Laga mat billigt",
        aiAssistant: "Planera från ChatGPT eller Claude",
        foodLasts: "Hur länge håller maten?",
        about: "Om oss",
        forBusiness: "För företag",
        privacy: "Integritet",
        terms: "Villkor",
        contact: "Kontakt",
        investors: "Investerare",
      },
    },
  },
  da: {
    nav: {
      howItWorks: "Sådan virker det",
      why: "Hvorfor Copantry",
      learn: "Guider",
      blog: "Blog",
      signin: "Log ind",
      getStarted: "Kom gratis i gang",
    },
    ctaPrimary: "Se, hvad dit køkken kan lave i aften",
    getStartedFree: "Kom gratis i gang",
    howItWorks: "Sådan virker det",
    appsNote:
      "Egne apps til iOS og Android er på vej. Brug Copantry i enhver browser allerede i dag.",
    appSoon: "Snart",
    faqEyebrow: "Godt at vide",
    faqTitle: "Ofte stillede spørgsmål",
    breadcrumbHome: "Forsiden",
    breadcrumbFeatures: "Funktioner",
    breadcrumbUseCases: "Anvendelser",
    keepExploring: "Bliv ved med at udforske",
    cta: {
      title: "Begynd at lave mad af det, du allerede har",
      subtitle:
        "Gratis · intet kort nødvendigt · virker i enhver browser. Sæt dit køkken op på få minutter, og se, hvad aftenen kan blive.",
    },
    footer: {
      tagline:
        "Lav mad af det, du har, før det bliver dårligt, og køb kun det, du mangler.",
      product: "Produkt",
      audience: "Hvem er det til",
      learn: "Guider",
      company: "Virksomhed",
      rights: "Alle rettigheder forbeholdes.",
      links: {
        reduceFoodWaste: "Reducér madspild",
        mealPlanning: "Måltidsplanlægning",
        pantryTracking: "Styr på spisekammeret",
        shoppingLists: "Indkøbslister",
        recipes: "Opskrifter",
        forFamilies: "Til familier",
        forCouples: "Til par",
        budgetCooking: "Madlavning på budget",
        aiAssistant: "Planlæg fra ChatGPT eller Claude",
        foodLasts: "Hvor længe holder mad?",
        about: "Om os",
        forBusiness: "For virksomheder",
        privacy: "Privatliv",
        terms: "Vilkår",
        contact: "Kontakt",
        investors: "Investorer",
      },
    },
  },
  fi: {
    nav: {
      howItWorks: "Näin se toimii",
      why: "Miksi Copantry",
      learn: "Oppaat",
      blog: "Blogi",
      signin: "Kirjaudu sisään",
      getStarted: "Aloita ilmaiseksi",
    },
    ctaPrimary: "Katso, mitä keittiösi voi tehdä tänä iltana",
    getStartedFree: "Aloita ilmaiseksi",
    howItWorks: "Näin se toimii",
    appsNote:
      "Omat iOS- ja Android-sovellukset ovat tulossa. Käytä Copantrya jo tänään millä tahansa selaimella.",
    appSoon: "Pian",
    faqEyebrow: "Hyvä tietää",
    faqTitle: "Usein kysyttyä",
    breadcrumbHome: "Etusivu",
    breadcrumbFeatures: "Ominaisuudet",
    breadcrumbUseCases: "Käyttötavat",
    keepExploring: "Jatka tutkimista",
    cta: {
      title: "Ala kokata siitä, mitä sinulla jo on",
      subtitle:
        "Ilmainen · ei korttia · toimii kaikissa selaimissa. Rakenna keittiösi muutamassa minuutissa ja katso, mitä illasta voi tulla.",
    },
    footer: {
      tagline:
        "Kokkaa se mitä sinulla on ennen kuin se pilaantuu, ja osta vain se mitä puuttuu.",
      product: "Tuote",
      audience: "Kenelle",
      learn: "Oppaat",
      company: "Yritys",
      rights: "Kaikki oikeudet pidätetään.",
      links: {
        reduceFoodWaste: "Vähennä ruokahävikkiä",
        mealPlanning: "Ateriasuunnittelu",
        pantryTracking: "Ruokakaapin seuranta",
        shoppingLists: "Ostoslistat",
        recipes: "Reseptit",
        forFamilies: "Perheille",
        forCouples: "Pariskunnille",
        budgetCooking: "Edullista ruoanlaittoa",
        aiAssistant: "Suunnittele ChatGPT:stä tai Claudesta",
        foodLasts: "Kuinka kauan ruoka säilyy?",
        about: "Tietoa meistä",
        forBusiness: "Yrityksille",
        privacy: "Tietosuoja",
        terms: "Ehdot",
        contact: "Yhteystiedot",
        investors: "Sijoittajat",
      },
    },
  },
  no: {
    nav: {
      howItWorks: "Slik fungerer det",
      why: "Hvorfor Copantry",
      learn: "Guider",
      blog: "Blogg",
      signin: "Logg inn",
      getStarted: "Kom i gang gratis",
    },
    ctaPrimary: "Se hva kjøkkenet ditt kan lage i kveld",
    getStartedFree: "Kom i gang gratis",
    howItWorks: "Slik fungerer det",
    appsNote:
      "Egne apper for iOS og Android kommer snart. Bruk Copantry i hvilken som helst nettleser allerede i dag.",
    appSoon: "Snart",
    faqEyebrow: "Greit å vite",
    faqTitle: "Ofte stilte spørsmål",
    breadcrumbHome: "Forsiden",
    breadcrumbFeatures: "Funksjoner",
    breadcrumbUseCases: "Bruksområder",
    keepExploring: "Fortsett å utforske",
    cta: {
      title: "Begynn å lage mat av det du allerede har",
      subtitle:
        "Gratis · ingen kort · fungerer i alle nettlesere. Sett opp kjøkkenet ditt på noen minutter, og se hva kvelden kan bli.",
    },
    footer: {
      tagline:
        "Lag mat av det du har før det blir dårlig, og handle bare det du mangler.",
      product: "Produkt",
      audience: "Hvem det er for",
      learn: "Guider",
      company: "Selskap",
      rights: "Alle rettigheter forbeholdt.",
      links: {
        reduceFoodWaste: "Reduser matsvinn",
        mealPlanning: "Måltidsplanlegging",
        pantryTracking: "Oversikt over spiskammeret",
        shoppingLists: "Handlelister",
        recipes: "Oppskrifter",
        forFamilies: "For familier",
        forCouples: "For par",
        budgetCooking: "Lage mat på budsjett",
        aiAssistant: "Planlegg fra ChatGPT eller Claude",
        foodLasts: "Hvor lenge holder maten?",
        about: "Om oss",
        forBusiness: "For bedrifter",
        privacy: "Personvern",
        terms: "Vilkår",
        contact: "Kontakt",
        investors: "Investorer",
      },
    },
  },
  pl: {
    nav: {
      howItWorks: "Jak to działa",
      why: "Dlaczego Copantry",
      learn: "Poradniki",
      blog: "Blog",
      signin: "Zaloguj się",
      getStarted: "Zacznij za darmo",
    },
    ctaPrimary: "Zobacz, co Twoja kuchnia może dziś ugotować",
    getStartedFree: "Zacznij za darmo",
    howItWorks: "Jak to działa",
    appsNote:
      "Natywne aplikacje na iOS i Androida są w drodze. Z Copantry skorzystasz już dziś w dowolnej przeglądarce.",
    appSoon: "Wkrótce",
    faqEyebrow: "Warto wiedzieć",
    faqTitle: "Najczęstsze pytania",
    breadcrumbHome: "Strona główna",
    breadcrumbFeatures: "Funkcje",
    breadcrumbUseCases: "Zastosowania",
    keepExploring: "Odkrywaj dalej",
    cta: {
      title: "Zacznij gotować z tego, co już masz",
      subtitle:
        "Za darmo · bez karty · działa w każdej przeglądarce. Urządź swoją kuchnię w kilka minut i zobacz, czym może być dzisiejszy wieczór.",
    },
    footer: {
      tagline:
        "Gotuj to, co masz, zanim się zepsuje, i dokupuj tylko to, czego brakuje.",
      product: "Produkt",
      audience: "Dla kogo",
      learn: "Poradniki",
      company: "Firma",
      rights: "Wszelkie prawa zastrzeżone.",
      links: {
        reduceFoodWaste: "Ogranicz marnowanie jedzenia",
        mealPlanning: "Planowanie posiłków",
        pantryTracking: "Kontrola spiżarni",
        shoppingLists: "Listy zakupów",
        recipes: "Przepisy",
        forFamilies: "Dla rodzin",
        forCouples: "Dla par",
        budgetCooking: "Gotowanie z budżetem",
        aiAssistant: "Planuj z ChatGPT lub Claude",
        foodLasts: "Jak długo wytrzyma jedzenie?",
        about: "O nas",
        forBusiness: "Dla firm",
        privacy: "Prywatność",
        terms: "Regulamin",
        contact: "Kontakt",
        investors: "Inwestorzy",
      },
    },
  },
};

/* ── Hero "hook card" labels ────────────────────────────────────────────── */
export const HOOK = {
  // Each locale's "tonight's dinner" is a dish typical of that country, built
  // from three items about to expire. Saved amount is currency-converted, not
  // just re-symbolised (£8 ≈ €9 ≈ $10) — see LOCALE_CONFIG.
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
  "en-us": {
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
  nl: {
    firstToGo: "Eerst opmaken",
    tonight: "Het avondeten van vandaag",
    items: [
      { emoji: "🥔", name: "Aardappelen", left: "Vandaag opmaken" },
      { emoji: "🥓", name: "Spekblokjes", left: "Nog 1 dag" },
      { emoji: "🧅", name: "Ui", left: "Nog 2 dagen" },
    ],
    dish: "Boerenkoolstamppot met spekjes 🥔",
    dishMeta: "Gebruikt 3 producten voordat ze bederven · 35 min",
    saved: "9 € aan eten gered, niet weggegooid",
  },
  sv: {
    firstToGo: "Använd först",
    tonight: "Kvällens middag",
    items: [
      { emoji: "🥩", name: "Köttfärs", left: "Använd idag" },
      { emoji: "🥔", name: "Potatis", left: "1 dag kvar" },
      { emoji: "🥛", name: "Grädde", left: "2 dagar kvar" },
    ],
    dish: "Köttbullar med potatismos 🍲",
    dishMeta: "Använder 3 varor innan de blir dåliga · 40 min",
    saved: "100 kr mat räddad, inte slängd",
  },
  da: {
    firstToGo: "Brug først",
    tonight: "Aftensmaden i dag",
    items: [
      { emoji: "🥩", name: "Hakket kød", left: "Brug i dag" },
      { emoji: "🥔", name: "Kartofler", left: "1 dag tilbage" },
      { emoji: "🧅", name: "Løg", left: "2 dage tilbage" },
    ],
    dish: "Frikadeller med kartofler 🍽️",
    dishMeta: "Bruger 3 varer, før de bliver dårlige · 35 min",
    saved: "70 kr mad reddet, ikke smidt ud",
  },
  fi: {
    firstToGo: "Käytä ensin",
    tonight: "Tämän illan päivällinen",
    items: [
      { emoji: "🐟", name: "Lohi", left: "Käytä tänään" },
      { emoji: "🥔", name: "Perunat", left: "1 päivä jäljellä" },
      { emoji: "🥛", name: "Kerma", left: "2 päivää jäljellä" },
    ],
    dish: "Lohikeitto 🍲",
    dishMeta: "Käyttää 3 raaka-ainetta ennen pilaantumista · 30 min",
    saved: "9 € ruokaa pelastettu, ei roskiin",
  },
  no: {
    firstToGo: "Bruk først",
    tonight: "Kveldens middag",
    items: [
      { emoji: "🐟", name: "Laks", left: "Bruk i dag" },
      { emoji: "🥔", name: "Poteter", left: "1 dag igjen" },
      { emoji: "🥦", name: "Brokkoli", left: "2 dager igjen" },
    ],
    dish: "Ovnsbakt laks med poteter 🐟",
    dishMeta: "Bruker 3 varer før de blir dårlige · 35 min",
    saved: "110 kr mat reddet, ikke kastet",
  },
  pl: {
    firstToGo: "Zużyj najpierw",
    tonight: "Dzisiejsza kolacja",
    items: [
      { emoji: "🥩", name: "Mięso mielone", left: "Zużyj dziś" },
      { emoji: "🥬", name: "Kapusta", left: "Został 1 dzień" },
      { emoji: "🧅", name: "Cebula", left: "Zostały 2 dni" },
    ],
    dish: "Gołąbki w sosie pomidorowym 🍅",
    dishMeta: "Zużywa 3 produkty, zanim się zepsują · 50 min",
    saved: "40 zł jedzenia uratowane, nie wyrzucone",
  },
};

/* ── Homepage ───────────────────────────────────────────────────────────── */
export const HOME = {
  en: {
    badge: "Dinner sorted · less waste · shared kitchen",
    h1a: "Never wonder",
    h1b: "what’s for",
    h1accent: "dinner.",
    heroLede:
      "Copantry plans your week around what’s already in your kitchen and writes the shopping list for you. Less “what do we eat?”, less waste, less spent — one shared app for the whole household.",
    trustLine: "Free to use · no card · web today, apps soon",
    proof:
      "An average family makes hundreds of “what’s for dinner?” decisions a year — and bins around £1,000 of food, according to WRAP. Copantry makes the call for you, from what you already have, so nothing goes to waste.",
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
    diffTitle: "Built to run your kitchen, not just fill a calendar",
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
        desc: "Use the app in twelve languages; recipes stay in their original language. Built for mixed-language homes.",
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
        desc: "Add Copantry as a custom connector in ChatGPT or Claude — no agent, no code — then just ask it to plan a waste-free week. Almost nowhere else lets you do that.",
      },
    ],
    whyTeaser: "How Copantry compares to other kinds of apps",
    households: {
      eyebrow: "Made for households",
      title: "One kitchen the whole house shares",
      lede: "Copantry keeps couples and families on one live plan, pantry and shopping list — so the “what’s for dinner?” and “did you get milk?” texts just stop.",
      cards: [
        {
          title: "For families",
          desc: "One shared plan and list, recipes scaled to your family, and weaning-friendly notes for the little ones.",
          cta: "See it for families",
        },
        {
          title: "For couples",
          desc: "The same kitchen on both phones in real time — even when each of you uses a different language.",
          cta: "See it for couples",
        },
      ],
    },
  },
  fr: {
    badge: "Dîner réglé · moins de gaspi · cuisine partagée",
    h1a: "Ne demandez plus",
    h1b: "ce qu’on",
    h1accent: "mange.",
    heroLede:
      "Copantry planifie votre semaine autour de ce que vous avez déjà et rédige la liste de courses pour vous. Moins de « qu’est-ce qu’on mange ? », moins de gaspillage, moins de dépenses — une seule appli partagée pour tout le foyer.",
    trustLine: "Gratuit · sans carte · web aujourd’hui, applis bientôt",
    proof:
      "Une famille moyenne se demande des centaines de fois par an « qu’est-ce qu’on mange ? » — et jette l’équivalent de centaines d’euros de nourriture, selon l’ADEME. Copantry décide pour vous, à partir de ce que vous avez déjà, pour que rien ne soit gaspillé.",
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
      "Conçu pour gérer votre cuisine, pas seulement remplir un calendrier",
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
        desc: "Utilisez l’appli en douze langues ; les recettes restent dans leur langue d’origine. Pensée pour les foyers multilingues.",
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
        desc: "Ajoutez Copantry comme connecteur personnalisé dans ChatGPT ou Claude — sans agent ni code — puis demandez-lui de planifier une semaine zéro gaspi. Vous ne trouverez ça presque nulle part ailleurs.",
      },
    ],
    whyTeaser: "Comment Copantry se compare aux autres types d’applis",
    households: {
      eyebrow: "Pensé pour les foyers",
      title: "Une cuisine que toute la maison partage",
      lede: "Copantry garde couples et familles sur un même plan, garde-manger et liste de courses en direct — fini les « qu’est-ce qu’on mange ? » et les « t’as pris du lait ? ».",
      cards: [
        {
          title: "Pour les familles",
          desc: "Un plan et une liste partagés, des recettes ajustées à votre famille et des notes pour la diversification des tout-petits.",
          cta: "Voir pour les familles",
        },
        {
          title: "Pour les couples",
          desc: "La même cuisine sur les deux téléphones, en temps réel — même si chacun utilise sa propre langue.",
          cta: "Voir pour les couples",
        },
      ],
    },
  },
  it: {
    badge: "Cena decisa · meno sprechi · cucina condivisa",
    h1a: "Mai più il dubbio",
    h1b: "su cosa",
    h1accent: "cucinare.",
    heroLede:
      "Copantry pianifica la tua settimana intorno a ciò che hai già e scrive la lista della spesa per te. Meno « cosa si mangia? », meno sprechi, meno spese — un’unica app condivisa per tutta la famiglia.",
    trustLine: "Gratis · senza carta · web oggi, app presto",
    proof:
      "Una famiglia media si chiede centinaia di volte all’anno « cosa si mangia stasera? » — e butta l’equivalente di centinaia di euro di cibo. Copantry decide per te, a partire da ciò che hai già, così niente va sprecato.",
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
      "Costruito per gestire la tua cucina, non solo per riempire un calendario",
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
        desc: "Usa l’app in dodici lingue; le ricette restano nella lingua originale. Pensata per case multilingue.",
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
        desc: "Aggiungi Copantry come connettore personalizzato in ChatGPT o Claude — senza agenti né codice — e chiedigli di pianificare una settimana senza sprechi. Difficile trovarlo altrove.",
      },
    ],
    whyTeaser: "Come Copantry si confronta con gli altri tipi di app",
    households: {
      eyebrow: "Fatta per le famiglie",
      title: "Una cucina condivisa da tutta la casa",
      lede: "Copantry tiene coppie e famiglie su un unico piano, dispensa e lista della spesa in tempo reale — così spariscono i « cosa si mangia? » e i « hai preso il latte? ».",
      cards: [
        {
          title: "Per le famiglie",
          desc: "Un piano e una lista condivisi, ricette in scala per la tua famiglia e note per lo svezzamento dei più piccoli.",
          cta: "Scopri per le famiglie",
        },
        {
          title: "Per le coppie",
          desc: "La stessa cucina su entrambi i telefoni in tempo reale — anche se ognuno usa la propria lingua.",
          cta: "Scopri per le coppie",
        },
      ],
    },
  },
  es: {
    badge: "Cena resuelta · menos desperdicio · cocina compartida",
    h1a: "No vuelvas a pensar",
    h1b: "qué hay de",
    h1accent: "cenar.",
    heroLede:
      "Copantry planifica tu semana en torno a lo que ya tienes y escribe tu lista de la compra por ti. Menos « ¿qué cenamos? », menos desperdicio, menos gasto — una sola app compartida para todo el hogar.",
    trustLine: "Gratis · sin tarjeta · web hoy, apps pronto",
    proof:
      "Una familia media se pregunta cientos de veces al año « ¿qué cenamos hoy? » — y tira el equivalente a cientos de euros de comida. Copantry lo decide por ti, a partir de lo que ya tienes, para que nada se desperdicie.",
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
      "Diseñado para gestionar tu cocina, no solo para llenar un calendario",
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
        desc: "Usa la app en doce idiomas; las recetas se quedan en su idioma original. Pensada para hogares multilingües.",
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
        desc: "Añade Copantry como conector personalizado en ChatGPT o Claude — sin agentes ni código — y pídele que planifique una semana sin desperdicio. Difícil de encontrar en otro sitio.",
      },
    ],
    whyTeaser: "Cómo se compara Copantry con otros tipos de apps",
    households: {
      eyebrow: "Hecha para hogares",
      title: "Una cocina que comparte toda la casa",
      lede: "Copantry mantiene a parejas y familias en un mismo plan, despensa y lista de la compra en tiempo real — para que se acaben los « ¿qué cenamos? » y los « ¿compraste leche? ».",
      cards: [
        {
          title: "Para familias",
          desc: "Un plan y una lista compartidos, recetas ajustadas a tu familia y notas para la alimentación de los más pequeños.",
          cta: "Verlo para familias",
        },
        {
          title: "Para parejas",
          desc: "La misma cocina en ambos móviles en tiempo real — aunque cada uno use su propio idioma.",
          cta: "Verlo para parejas",
        },
      ],
    },
  },
  pt: {
    badge: "Jantar resolvido · menos desperdício · cozinha partilhada",
    h1a: "Nunca mais pense",
    h1b: "no que há para",
    h1accent: "jantar.",
    heroLede:
      "O Copantry planeia a sua semana à volta do que já tem e escreve a lista de compras por si. Menos « o que se janta? », menos desperdício, menos gastos — uma só app partilhada para todo o agregado.",
    trustLine: "Grátis · sem cartão · web hoje, apps em breve",
    proof:
      "Uma família média pergunta-se centenas de vezes por ano « o que se janta hoje? » — e deita fora o equivalente a centenas de euros de comida. O Copantry decide por si, a partir do que já tem, para que nada se desperdice.",
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
      "Feito para gerir a sua cozinha, não apenas para encher um calendário",
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
        desc: "Use a app em doze idiomas; as receitas ficam no idioma original. Pensada para casas multilingues.",
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
        desc: "Adicione o Copantry como conector personalizado no ChatGPT ou no Claude — sem agentes nem código — e peça-lhe para planear uma semana sem desperdício. Dificilmente encontra isto noutro lado.",
      },
    ],
    whyTeaser: "Como o Copantry se compara com outros tipos de apps",
    households: {
      eyebrow: "Feita para a casa toda",
      title: "Uma cozinha que a casa toda partilha",
      lede: "O Copantry mantém casais e famílias num só plano, despensa e lista de compras em tempo real — para acabarem os « o que se janta? » e os « compraste leite? ».",
      cards: [
        {
          title: "Para famílias",
          desc: "Um plano e uma lista partilhados, receitas à escala da sua família e notas para a introdução alimentar dos mais pequenos.",
          cta: "Ver para famílias",
        },
        {
          title: "Para casais",
          desc: "A mesma cozinha nos dois telemóveis em tempo real — mesmo que cada um use a sua própria língua.",
          cta: "Ver para casais",
        },
      ],
    },
  },
  de: {
    badge: "Abendessen geklärt · weniger wegwerfen · geteilte Küche",
    h1a: "Nie mehr fragen,",
    h1b: "was es heute zu",
    h1accent: "essen gibt.",
    heroLede:
      "Copantry plant Ihre Woche rund um das, was Sie schon haben, und schreibt die Einkaufsliste für Sie. Weniger „Was essen wir?“, weniger Verschwendung, weniger Ausgaben — eine geteilte App für den ganzen Haushalt.",
    trustLine: "Kostenlos · keine Karte · Web heute, Apps bald",
    proof:
      "Eine durchschnittliche Familie fragt sich hunderte Male im Jahr „Was gibt’s heute zu essen?“ — und wirft Lebensmittel im Wert von hunderten Euro weg. Copantry entscheidet für Sie, aus dem, was Sie schon haben, damit nichts verdirbt.",
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
      "Gebaut, um Ihre Küche zu führen, nicht nur einen Kalender zu füllen",
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
        desc: "Nutzen Sie die App in zwölf Sprachen; Rezepte bleiben in ihrer Originalsprache. Für mehrsprachige Haushalte gemacht.",
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
        desc: "Fügen Sie Copantry in ChatGPT oder Claude als benutzerdefinierten Connector hinzu — ohne Agent und ohne Code — und bitten Sie einfach um eine verschwendungsfreie Woche. Das finden Sie fast nirgends sonst.",
      },
    ],
    whyTeaser: "Wie sich Copantry mit anderen Arten von Apps vergleicht",
    households: {
      eyebrow: "Für den ganzen Haushalt",
      title: "Eine Küche, die das ganze Haus teilt",
      lede: "Copantry hält Paare und Familien auf einem gemeinsamen Plan, Vorrat und einer Einkaufsliste in Echtzeit — Schluss mit „Was essen wir?“ und „Hast du Milch geholt?“.",
      cards: [
        {
          title: "Für Familien",
          desc: "Ein geteilter Plan und eine Liste, Rezepte passend zur Familiengröße und Notizen für die Beikost der Kleinen.",
          cta: "Für Familien ansehen",
        },
        {
          title: "Für Paare",
          desc: "Dieselbe Küche auf beiden Handys in Echtzeit — auch wenn jeder seine eigene Sprache nutzt.",
          cta: "Für Paare ansehen",
        },
      ],
    },
  },
  nl: {
    badge: "Avondeten geregeld · minder weggooien · gedeelde keuken",
    h1a: "Nooit meer de vraag",
    h1b: "wat we vanavond",
    h1accent: "gaan eten.",
    heroLede:
      "Copantry plant je week rond wat je al hebt en schrijft de boodschappenlijst voor je. Minder “wat eten we?”, minder verspilling, minder uitgaven — één gedeelde app voor het hele huishouden.",
    trustLine: "Gratis · geen creditcard · nu op het web, apps volgen",
    proof:
      "Een gemiddeld gezin vraagt zich honderden keren per jaar af “wat eten we vanavond?” — en gooit voor honderden euro's aan eten weg. Copantry beslist voor je, uit wat je al hebt, zodat er niets bederft.",
    proofStat:
      "aan eten dat één avondmaaltijdsuggestie uit de vuilnisbak houdt",
    pillarsEyebrow: "De hele kringloop, in één app",
    pillarsTitle: "Het kent je keuken — en kan daarom echt helpen",
    pillarsLede:
      "De meeste apps doen maar een deel. Copantry verbindt wat je hebt, wat je kookt en wat je koopt — zodat er niets tussenuit valt.",
    pillars: [
      {
        title: "Weet wat je hebt",
        desc: "Voeg boodschappen toe met een foto, een kassabon of je stem. Copantry houdt een actuele voorraadkast bij, gesorteerd op wat als eerste op moet — geen vergeten eten meer achter in de koelkast.",
      },
      {
        title: "Vertelt je wat je moet koken",
        desc: "Het stelt echte gerechten voor rond wat bijna over de datum is, zodat het avondeten gebruikt wat je al hebt in plaats van je opnieuw naar de winkel te sturen.",
      },
      {
        title: "Koopt alleen wat ontbreekt",
        desc: "Je boodschappenlijst bouwt zichzelf uit je planning min je voorraadkast — op schapvolgorde, gedeeld met het huishouden, nooit dubbel.",
      },
    ],
    howEyebrow: "Hoe het werkt",
    howTitle: "Drie stappen naar een vollere koelkast en een lagere rekening",
    steps: [
      {
        title: "Vul je keuken",
        desc: "Fotografeer je boodschappen of een kassabon — Copantry voegt alles toe en dateert het voor je.",
      },
      {
        title: "Zie de opties voor vandaag",
        desc: "Krijg gerechten die eerst het bijna-bedorven eten gebruiken, afgestemd op het aantal eters.",
      },
      {
        title: "Koop alleen wat ontbreekt",
        desc: "Plan je week en Copantry maakt een lijst op schapvolgorde van alleen wat je mist.",
      },
    ],
    howMore: "Bekijk de hele werkwijze",
    diffEyebrow: "Waarom Copantry",
    diffTitle: "Gebouwd om je keuken te runnen, niet om een agenda te vullen",
    diffLede:
      "Een paar dingen merk je meteen — en één daarvan vind je waarschijnlijk nergens anders.",
    differentiators: [
      {
        title: "Een echte motor tegen verspilling",
        desc: "Houdbaarheid bijhouden en restjes-suggesties zijn de kern van de app, geen bijzaak.",
      },
      {
        title: "Automatische maaltijdplanning",
        desc: "Genereer een hele week die bijna-bedorven eten voorrang geeft, afwisseling brengt en het seizoen meeneemt.",
      },
      {
        title: "Echt meertalig",
        desc: "Gebruik de app in twaalf talen; recepten blijven in hun oorspronkelijke taal. Gemaakt voor meertalige huishoudens.",
      },
      {
        title: "Van planning tot kassa",
        desc: "Lijsten op schapvolgorde, tot en met het bestellen van wat ontbreekt bij je supermarkt.",
      },
      {
        title: "Gemaakt voor huishoudens",
        desc: "Eén gedeelde voorraadkast, planning en lijst voor stellen en gezinnen — realtime, op elk apparaat.",
      },
      {
        title: "Plan vanuit ChatGPT of Claude",
        desc: "Voeg Copantry als aangepaste connector toe in ChatGPT of Claude — geen agent, geen code — en vraag gewoon om een week zonder verspilling. Dat vind je vrijwel nergens anders.",
      },
    ],
    whyTeaser: "Hoe Copantry zich verhoudt tot andere soorten apps",
    households: {
      eyebrow: "Voor het hele huishouden",
      title: "Eén keuken die het hele huis deelt",
      lede: "Copantry houdt stellen en gezinnen op één gedeelde planning, voorraadkast en boodschappenlijst, in realtime — einde aan “wat eten we?” en “heb jij melk gehaald?”.",
      cards: [
        {
          title: "Voor gezinnen",
          desc: "Eén gedeelde planning en lijst, recepten op maat van de gezinsgrootte en notities voor de hapjes van de kleintjes.",
          cta: "Bekijk voor gezinnen",
        },
        {
          title: "Voor stellen",
          desc: "Dezelfde keuken op beide telefoons, in realtime — ook als ieder zijn eigen taal gebruikt.",
          cta: "Bekijk voor stellen",
        },
      ],
    },
  },
  sv: {
    badge: "Middagen löst · släng mindre · delat kök",
    h1a: "Slipp fråga",
    h1b: "vad ni ska äta",
    h1accent: "i kväll.",
    heroLede:
      "Copantry planerar din vecka kring det du redan har och skriver inköpslistan åt dig. Mindre ”vad ska vi äta?”, mindre svinn, mindre utgifter — en delad app för hela hushållet.",
    trustLine: "Gratis · inget kort · webben i dag, appar snart",
    proof:
      "En vanlig familj undrar hundratals gånger om året ”vad ska vi äta i kväll?” — och slänger mat för tusentals kronor. Copantry bestämmer åt dig, utifrån det du redan har, så att inget blir dåligt.",
    proofStat: "mat som ett enda middagsförslag räddar från soporna",
    pillarsEyebrow: "Hela kretsloppet, i en app",
    pillarsTitle: "Den känner ditt kök — och kan därför verkligen hjälpa",
    pillarsLede:
      "De flesta appar gör bara en del. Copantry knyter ihop vad du har, vad du lagar och vad du handlar — så att inget faller mellan stolarna.",
    pillars: [
      {
        title: "Vet vad du har",
        desc: "Lägg till inköp med foto, kvitto eller rösten. Copantry håller ett levande skafferi, sorterat efter vad som måste användas först — ingen bortglömd mat längst in i kylen.",
      },
      {
        title: "Säger vad du ska laga",
        desc: "Den föreslår riktiga rätter kring det som snart går ut, så att middagen använder det du redan har i stället för att skicka dig till butiken igen.",
      },
      {
        title: "Handlar bara det som saknas",
        desc: "Din inköpslista bygger sig själv av din plan minus skafferiet — sorterad efter butiksgång, delad med hushållet, aldrig dubbelt.",
      },
    ],
    howEyebrow: "Så fungerar det",
    howTitle: "Tre steg till en fullare kyl och en mindre nota",
    steps: [
      {
        title: "Fyll ditt kök",
        desc: "Fotografera din handling eller ett kvitto — Copantry lägger till allt och daterar det åt dig.",
      },
      {
        title: "Se kvällens alternativ",
        desc: "Få rätter som använder det som snart går ut först, anpassade efter hur många ni är.",
      },
      {
        title: "Handla bara det som saknas",
        desc: "Planera veckan så gör Copantry en lista sorterad efter butiksgång med bara det du saknar.",
      },
    ],
    howMore: "Se hela flödet",
    diffEyebrow: "Varför Copantry",
    diffTitle: "Byggt för att sköta ditt kök, inte bara fylla en kalender",
    diffLede:
      "Några saker märker du direkt — och en av dem hittar du nog ingen annanstans.",
    differentiators: [
      {
        title: "En riktig motor mot matsvinn",
        desc: "Hållbarhetskoll och restförslag är appens kärna, inte en extrafunktion.",
      },
      {
        title: "Automatisk måltidsplanering",
        desc: "Skapa en hel vecka som prioriterar det som snart går ut, ger variation och tar hänsyn till säsongen.",
      },
      {
        title: "På riktigt flerspråkig",
        desc: "Använd appen på tolv språk; recepten stannar på sitt originalspråk. Byggt för flerspråkiga hem.",
      },
      {
        title: "Från plan till kassa",
        desc: "Listor sorterade efter butiksgång, ända fram till att beställa det som saknas hos din matbutik.",
      },
      {
        title: "Gjort för hushåll",
        desc: "Ett delat skafferi, en delad plan och en delad lista för par och familjer — i realtid, på alla enheter.",
      },
      {
        title: "Planera från ChatGPT eller Claude",
        desc: "Lägg till Copantry som en anpassad anslutning i ChatGPT eller Claude — ingen agent, ingen kod — och be den planera en vecka utan svinn. Det hittar du knappt någon annanstans.",
      },
    ],
    whyTeaser: "Så står sig Copantry mot andra typer av appar",
    households: {
      eyebrow: "För hela hushållet",
      title: "Ett kök som hela huset delar",
      lede: "Copantry håller par och familjer på samma plan, skafferi och inköpslista i realtid — slut på ”vad ska vi äta?” och ”köpte du mjölk?”.",
      cards: [
        {
          title: "För familjer",
          desc: "En delad plan och lista, recept anpassade efter familjens storlek och anteckningar för de minstas mat.",
          cta: "Se för familjer",
        },
        {
          title: "För par",
          desc: "Samma kök på båda telefonerna i realtid — även om ni använder varsitt språk.",
          cta: "Se för par",
        },
      ],
    },
  },
  da: {
    badge: "Aftensmaden er løst · smid mindre ud · delt køkken",
    h1a: "Slip for at spørge,",
    h1b: "hvad I skal have",
    h1accent: "i aften.",
    heroLede:
      "Copantry planlægger din uge ud fra det, du allerede har, og skriver indkøbslisten for dig. Færre “hvad skal vi spise?”, mindre spild, færre udgifter — én delt app til hele husstanden.",
    trustLine: "Gratis · intet kort · nettet i dag, apps på vej",
    proof:
      "En almindelig familie spørger sig selv hundredvis af gange om året “hvad skal vi have i aften?” — og smider mad for tusindvis af kroner ud. Copantry beslutter for dig, ud fra det du allerede har, så intet bliver dårligt.",
    proofStat: "mad, som ét enkelt aftensmadsforslag redder fra skraldespanden",
    pillarsEyebrow: "Hele kredsløbet, i én app",
    pillarsTitle: "Den kender dit køkken — og kan derfor virkelig hjælpe",
    pillarsLede:
      "De fleste apps klarer kun en del. Copantry binder sammen, hvad du har, hvad du laver, og hvad du køber — så intet falder ved siden af.",
    pillars: [
      {
        title: "Ved, hvad du har",
        desc: "Tilføj indkøb med et billede, en kvittering eller stemmen. Copantry fører et levende spisekammer, sorteret efter, hvad der skal bruges først — ingen glemt mad bagerst i køleskabet.",
      },
      {
        title: "Fortæller dig, hvad du skal lave",
        desc: "Den foreslår rigtige retter omkring det, der snart udløber, så aftensmaden bruger det, du allerede har, i stedet for at sende dig i butikken igen.",
      },
      {
        title: "Køber kun det, der mangler",
        desc: "Din indkøbsliste bygger sig selv af din plan minus spisekammeret — sorteret efter butiksgang, delt med husstanden, aldrig dobbelt.",
      },
    ],
    howEyebrow: "Sådan virker det",
    howTitle: "Tre trin til et fyldigere køleskab og en mindre regning",
    steps: [
      {
        title: "Fyld dit køkken",
        desc: "Fotografér dine indkøb eller en kvittering — Copantry tilføjer det hele og sætter dato på for dig.",
      },
      {
        title: "Se aftenens muligheder",
        desc: "Få retter, der bruger det, der snart udløber, først, tilpasset hvor mange I er.",
      },
      {
        title: "Køb kun det, der mangler",
        desc: "Planlæg din uge, så laver Copantry en liste sorteret efter butiksgang med kun det, du mangler.",
      },
    ],
    howMore: "Se hele forløbet",
    diffEyebrow: "Hvorfor Copantry",
    diffTitle: "Bygget til at styre dit køkken, ikke bare fylde en kalender",
    diffLede:
      "Et par ting mærker du med det samme — og én af dem finder du nok ingen andre steder.",
    differentiators: [
      {
        title: "En rigtig motor mod madspild",
        desc: "Styr på datoer og forslag til rester er kernen i appen, ikke en tilføjelse.",
      },
      {
        title: "Automatisk madplanlægning",
        desc: "Lav en hel uge, der prioriterer det, der snart udløber, giver variation og tager højde for sæsonen.",
      },
      {
        title: "Rigtig flersproget",
        desc: "Brug appen på tolv sprog; opskrifterne bliver på deres originalsprog. Lavet til flersprogede hjem.",
      },
      {
        title: "Fra plan til kasse",
        desc: "Lister sorteret efter butiksgang, helt frem til at bestille det manglende hos dit supermarked.",
      },
      {
        title: "Lavet til husstande",
        desc: "Ét delt spisekammer, én plan og én liste til par og familier — i realtid, på alle enheder.",
      },
      {
        title: "Planlæg fra ChatGPT eller Claude",
        desc: "Tilføj Copantry som en brugerdefineret forbindelse i ChatGPT eller Claude — ingen agent, ingen kode — og bed den planlægge en uge uden spild. Det finder du næsten ingen andre steder.",
      },
    ],
    whyTeaser: "Sådan står Copantry sig mod andre typer apps",
    households: {
      eyebrow: "Til hele husstanden",
      title: "Ét køkken, som hele huset deler",
      lede: "Copantry holder par og familier på den samme plan, det samme spisekammer og den samme indkøbsliste i realtid — slut med “hvad skal vi spise?” og “købte du mælk?”.",
      cards: [
        {
          title: "Til familier",
          desc: "En delt plan og liste, opskrifter tilpasset familiens størrelse og noter til de mindstes mad.",
          cta: "Se til familier",
        },
        {
          title: "Til par",
          desc: "Det samme køkken på begge telefoner i realtid — også hvis I hver bruger jeres eget sprog.",
          cta: "Se til par",
        },
      ],
    },
  },
  fi: {
    badge: "Päivällinen ratkaistu · vähemmän hävikkiä · jaettu keittiö",
    h1a: "Ei enää kysymystä siitä,",
    h1b: "mitä syödään",
    h1accent: "tänään.",
    heroLede:
      "Copantry suunnittelee viikkosi sen ympärille, mitä sinulla jo on, ja kirjoittaa ostoslistan puolestasi. Vähemmän “mitä syötäisiin?”, vähemmän hävikkiä, vähemmän menoja — yksi jaettu sovellus koko taloudelle.",
    trustLine: "Ilmainen · ei korttia · verkossa nyt, sovellukset pian",
    proof:
      "Tavallinen perhe miettii satoja kertoja vuodessa “mitä syötäisiin tänään?” — ja heittää satojen eurojen edestä ruokaa roskiin. Copantry päättää puolestasi siitä, mitä sinulla jo on, ettei mikään pilaannu.",
    proofStat: "ruokaa, jonka yksi päivällisehdotus pelastaa roskiksesta",
    pillarsEyebrow: "Koko kierto yhdessä sovelluksessa",
    pillarsTitle: "Se tuntee keittiösi — ja voi siksi oikeasti auttaa",
    pillarsLede:
      "Useimmat sovellukset hoitavat vain osan. Copantry yhdistää sen, mitä sinulla on, mitä laitat ja mitä ostat — jottei mikään jää väliin.",
    pillars: [
      {
        title: "Tietää, mitä sinulla on",
        desc: "Lisää ostokset kuvalla, kuitilla tai puheella. Copantry pitää elävää ruokakomeroa järjestettynä sen mukaan, mikä pitää käyttää ensin — ei enää unohtunutta ruokaa jääkaapin perukoilla.",
      },
      {
        title: "Kertoo, mitä laittaa",
        desc: "Se ehdottaa oikeita ruokia sen ympärille, mikä on vanhenemassa, jotta päivällinen käyttää sen, mitä sinulla jo on, eikä lähetä sinua taas kauppaan.",
      },
      {
        title: "Ostaa vain sen, mikä puuttuu",
        desc: "Ostoslistasi rakentuu itsestään suunnitelmastasi miinus ruokakomerosi — hyllyjärjestyksessä, jaettuna talouden kanssa, ei koskaan kahteen kertaan.",
      },
    ],
    howEyebrow: "Näin se toimii",
    howTitle: "Kolme askelta täydempään jääkaappiin ja pienempään laskuun",
    steps: [
      {
        title: "Täytä keittiösi",
        desc: "Kuvaa ostoksesi tai kuitti — Copantry lisää kaiken ja päivää sen puolestasi.",
      },
      {
        title: "Näe tämän illan vaihtoehdot",
        desc: "Saat ruokia, jotka käyttävät ensin vanhenevat, mitoitettuna syöjien määrään.",
      },
      {
        title: "Osta vain se, mikä puuttuu",
        desc: "Suunnittele viikkosi, niin Copantry kokoaa hyllyjärjestyksessä olevan listan vain siitä, mitä sinulta puuttuu.",
      },
    ],
    howMore: "Katso koko kulku",
    diffEyebrow: "Miksi Copantry",
    diffTitle:
      "Rakennettu pyörittämään keittiötäsi, ei vain täyttämään kalenteria",
    diffLede:
      "Muutaman asian huomaat heti — ja yhtä niistä et luultavasti löydä mistään muualta.",
    differentiators: [
      {
        title: "Aito hävikin vastainen moottori",
        desc: "Päiväysten seuranta ja tähde-ehdotukset ovat sovelluksen ydin, eivät lisuke.",
      },
      {
        title: "Automaattinen ateriasuunnittelu",
        desc: "Luo kokonainen viikko, joka suosii vanhenevia raaka-aineita, tuo vaihtelua ja huomioi vuodenajan.",
      },
      {
        title: "Aidosti monikielinen",
        desc: "Käytä sovellusta kahdellatoista kielellä; reseptit pysyvät alkukielellään. Tehty monikielisille kodeille.",
      },
      {
        title: "Suunnitelmasta kassalle",
        desc: "Hyllyjärjestyksessä olevat listat, aina puuttuvien tilaamiseen omasta kaupastasi.",
      },
      {
        title: "Tehty talouksille",
        desc: "Yksi jaettu ruokakomero, suunnitelma ja lista pareille ja perheille — reaaliajassa, jokaisella laitteella.",
      },
      {
        title: "Suunnittele ChatGPT:stä tai Claudesta",
        desc: "Lisää Copantry mukautettuna liittimenä ChatGPT:hen tai Claudeen — ilman agenttia ja ilman koodia — ja pyydä sitä suunnittelemaan hävikitön viikko. Tätä ei juuri muualta löydy.",
      },
    ],
    whyTeaser: "Näin Copantry vertautuu muihin sovellustyyppeihin",
    households: {
      eyebrow: "Koko taloudelle",
      title: "Yksi keittiö, jonka koko koti jakaa",
      lede: "Copantry pitää parit ja perheet samassa suunnitelmassa, ruokakomerossa ja ostoslistassa reaaliajassa — loppu kysymyksille “mitä syödään?” ja “ostitko maitoa?”.",
      cards: [
        {
          title: "Perheille",
          desc: "Jaettu suunnitelma ja lista, perheen kokoon mitoitetut reseptit ja muistiinpanot pienimpien ruoista.",
          cta: "Katso perheille",
        },
        {
          title: "Pareille",
          desc: "Sama keittiö molemmissa puhelimissa reaaliajassa — vaikka kumpikin käyttäisi omaa kieltään.",
          cta: "Katso pareille",
        },
      ],
    },
  },
  no: {
    badge: "Middagen er løst · kast mindre · delt kjøkken",
    h1a: "Slipp å spørre",
    h1b: "hva dere skal ha",
    h1accent: "i kveld.",
    heroLede:
      "Copantry planlegger uken din rundt det du allerede har, og skriver handlelisten for deg. Færre «hva skal vi spise?», mindre svinn, mindre utgifter — én delt app for hele husholdningen.",
    trustLine: "Gratis · ingen kort · nettet i dag, apper snart",
    proof:
      "En vanlig familie spør seg selv hundrevis av ganger i året «hva skal vi ha i kveld?» — og kaster mat for tusenvis av kroner. Copantry bestemmer for deg, ut fra det du allerede har, så ingenting blir dårlig.",
    proofStat: "mat som ett eneste middagsforslag redder fra søpla",
    pillarsEyebrow: "Hele kretsløpet, i én app",
    pillarsTitle: "Den kjenner kjøkkenet ditt — og kan derfor virkelig hjelpe",
    pillarsLede:
      "De fleste apper gjør bare en del. Copantry knytter sammen hva du har, hva du lager og hva du handler — så ingenting glipper.",
    pillars: [
      {
        title: "Vet hva du har",
        desc: "Legg til varer med et bilde, en kvittering eller stemmen. Copantry fører et levende spiskammer, sortert etter hva som må brukes først — ingen glemt mat bakerst i kjøleskapet.",
      },
      {
        title: "Forteller deg hva du skal lage",
        desc: "Den foreslår ekte retter rundt det som snart går ut, så middagen bruker det du allerede har i stedet for å sende deg på butikken igjen.",
      },
      {
        title: "Handler bare det som mangler",
        desc: "Handlelisten din bygger seg selv av planen din minus spiskammeret — sortert etter butikkgang, delt med husholdningen, aldri dobbelt.",
      },
    ],
    howEyebrow: "Slik virker det",
    howTitle: "Tre steg til et fyldigere kjøleskap og en mindre regning",
    steps: [
      {
        title: "Fyll kjøkkenet ditt",
        desc: "Ta bilde av handleturen eller en kvittering — Copantry legger til alt og setter dato på for deg.",
      },
      {
        title: "Se kveldens muligheter",
        desc: "Få retter som bruker det som snart går ut først, tilpasset hvor mange dere er.",
      },
      {
        title: "Handle bare det som mangler",
        desc: "Planlegg uken, så lager Copantry en liste sortert etter butikkgang med bare det du mangler.",
      },
    ],
    howMore: "Se hele forløpet",
    diffEyebrow: "Hvorfor Copantry",
    diffTitle: "Bygget for å drive kjøkkenet ditt, ikke bare fylle en kalender",
    diffLede:
      "Et par ting merker du med én gang — og én av dem finner du nok ingen andre steder.",
    differentiators: [
      {
        title: "En ekte motor mot matsvinn",
        desc: "Oversikt over datoer og forslag til rester er kjernen i appen, ikke et tillegg.",
      },
      {
        title: "Automatisk måltidsplanlegging",
        desc: "Lag en hel uke som prioriterer det som snart går ut, gir variasjon og tar hensyn til sesongen.",
      },
      {
        title: "Ordentlig flerspråklig",
        desc: "Bruk appen på tolv språk; oppskriftene blir på originalspråket sitt. Laget for flerspråklige hjem.",
      },
      {
        title: "Fra plan til kasse",
        desc: "Lister sortert etter butikkgang, helt frem til å bestille det som mangler hos butikken din.",
      },
      {
        title: "Laget for husholdninger",
        desc: "Ett delt spiskammer, én plan og én liste for par og familier — i sanntid, på alle enheter.",
      },
      {
        title: "Planlegg fra ChatGPT eller Claude",
        desc: "Legg Copantry til som en egendefinert kobling i ChatGPT eller Claude — ingen agent, ingen kode — og be den planlegge en uke uten svinn. Det finner du nesten ingen andre steder.",
      },
    ],
    whyTeaser: "Slik står Copantry seg mot andre typer apper",
    households: {
      eyebrow: "For hele husholdningen",
      title: "Ett kjøkken hele huset deler",
      lede: "Copantry holder par og familier på den samme planen, det samme spiskammeret og den samme handlelisten i sanntid — slutt på «hva skal vi spise?» og «kjøpte du melk?».",
      cards: [
        {
          title: "For familier",
          desc: "En delt plan og liste, oppskrifter tilpasset familiens størrelse og notater til de minstes mat.",
          cta: "Se for familier",
        },
        {
          title: "For par",
          desc: "Det samme kjøkkenet på begge telefonene i sanntid — også om dere bruker hvert deres språk.",
          cta: "Se for par",
        },
      ],
    },
  },
  pl: {
    badge: "Kolacja rozwiązana · mniej wyrzucania · wspólna kuchnia",
    h1a: "Koniec z pytaniem,",
    h1b: "co dziś zjemy",
    h1accent: "na kolację.",
    heroLede:
      "Copantry planuje twój tydzień wokół tego, co już masz, i pisze listę zakupów za ciebie. Mniej „co dziś jemy?”, mniej marnowania, mniej wydatków — jedna wspólna aplikacja dla całego domu.",
    trustLine:
      "Bezpłatnie · bez karty · dziś w przeglądarce, aplikacje wkrótce",
    proof:
      "Przeciętna rodzina setki razy w roku zastanawia się „co dziś zjemy?” — i wyrzuca jedzenie za setki złotych. Copantry decyduje za ciebie, z tego, co już masz, żeby nic się nie zepsuło.",
    proofStat: "jedzenia, które jedna propozycja kolacji ratuje przed koszem",
    pillarsEyebrow: "Cały obieg w jednej aplikacji",
    pillarsTitle: "Zna twoją kuchnię — i dlatego naprawdę pomaga",
    pillarsLede:
      "Większość aplikacji robi tylko część. Copantry łączy to, co masz, to, co gotujesz, i to, co kupujesz — żeby nic nie umknęło.",
    pillars: [
      {
        title: "Wie, co masz",
        desc: "Dodawaj zakupy zdjęciem, paragonem albo głosem. Copantry prowadzi żywą spiżarnię, uporządkowaną według tego, co trzeba zużyć najpierw — koniec z zapomnianym jedzeniem w głębi lodówki.",
      },
      {
        title: "Mówi, co ugotować",
        desc: "Proponuje prawdziwe dania wokół tego, czemu kończy się termin, żeby kolacja zużywała to, co już masz, zamiast wysyłać cię znów do sklepu.",
      },
      {
        title: "Kupuje tylko to, czego brakuje",
        desc: "Twoja lista zakupów układa się sama z planu minus spiżarnia — w kolejności alejek, dzielona z domownikami, nigdy podwójnie.",
      },
    ],
    howEyebrow: "Jak to działa",
    howTitle: "Trzy kroki do pełniejszej lodówki i niższego rachunku",
    steps: [
      {
        title: "Zapełnij swoją kuchnię",
        desc: "Zrób zdjęcie zakupów albo paragonu — Copantry doda wszystko i opatrzy datami za ciebie.",
      },
      {
        title: "Zobacz dzisiejsze możliwości",
        desc: "Dostaniesz dania, które najpierw zużywają kończące się produkty, przeliczone na liczbę jedzących.",
      },
      {
        title: "Kupuj tylko braki",
        desc: "Zaplanuj tydzień, a Copantry ułoży listę w kolejności alejek, wyłącznie z tego, czego ci brakuje.",
      },
    ],
    howMore: "Zobacz cały przebieg",
    diffEyebrow: "Dlaczego Copantry",
    diffTitle:
      "Zbudowane, by prowadzić twoją kuchnię, a nie tylko zapełniać kalendarz",
    diffLede:
      "Kilka rzeczy zauważysz od razu — a jednej z nich pewnie nie znajdziesz nigdzie indziej.",
    differentiators: [
      {
        title: "Prawdziwy silnik przeciw marnowaniu",
        desc: "Pilnowanie terminów i propozycje na resztki to rdzeń aplikacji, nie dodatek.",
      },
      {
        title: "Automatyczne planowanie posiłków",
        desc: "Wygeneruj cały tydzień, który stawia na kończące się produkty, dba o urozmaicenie i uwzględnia sezon.",
      },
      {
        title: "Naprawdę wielojęzyczne",
        desc: "Korzystaj z aplikacji w dwunastu językach; przepisy zostają w swoim oryginalnym języku. Stworzone dla wielojęzycznych domów.",
      },
      {
        title: "Od planu do kasy",
        desc: "Listy w kolejności alejek, aż po zamówienie braków w twoim sklepie.",
      },
      {
        title: "Stworzone dla gospodarstw domowych",
        desc: "Jedna wspólna spiżarnia, jeden plan i jedna lista dla par i rodzin — na bieżąco, na każdym urządzeniu.",
      },
      {
        title: "Planuj z ChatGPT albo Claude",
        desc: "Dodaj Copantry jako własny łącznik w ChatGPT lub Claude — bez agenta i bez kodu — i po prostu poproś o zaplanowanie tygodnia bez marnowania. Tego prawie nigdzie indziej nie znajdziesz.",
      },
    ],
    whyTeaser: "Jak Copantry wypada na tle innych rodzajów aplikacji",
    households: {
      eyebrow: "Dla całego domu",
      title: "Jedna kuchnia, którą dzieli cały dom",
      lede: "Copantry trzyma pary i rodziny przy jednym planie, jednej spiżarni i jednej liście zakupów na bieżąco — koniec z „co dziś jemy?” i „kupiłeś mleko?”.",
      cards: [
        {
          title: "Dla rodzin",
          desc: "Wspólny plan i lista, przepisy przeliczone na wielkość rodziny i notatki o posiłkach najmłodszych.",
          cta: "Zobacz dla rodzin",
        },
        {
          title: "Dla par",
          desc: "Ta sama kuchnia na obu telefonach, na bieżąco — nawet jeśli każde z was używa własnego języka.",
          cta: "Zobacz dla par",
        },
      ],
    },
  },
};

// US English: identical copy to the root English homepage, but with a
// US-relevant food-waste figure (dollars) instead of the UK WRAP stat.
HOME["en-us"] = {
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
  nl: {
    eyebrow: "Hoe het werkt",
    h1: "Van een volle koelkast naar het avondeten, in vier eenvoudige stappen",
    lede: "Copantry werkt als een eenvoudige kringloop: het leert wat er in je keuken ligt, vertelt je wat je moet koken voordat het bederft, stelt een boodschappenlijst samen van alleen wat je mist, en houdt alles bij terwijl je kookt. Zo werkt dat precies.",
    stepLabel: "Stap",
    steps: [
      {
        title: "Vertel Copantry wat je hebt",
        desc: "Maak een foto van je boodschappen, een kassabon of een schap in je kast — of gebruik je stem of tekst. Copantry leest het met AI en bouwt een actuele voorraadkast, met een datum bij elk product zodat je weet wat eerst op moet.",
      },
      {
        title: "Zie wat je vanavond kunt koken",
        desc: "Copantry stelt echte maaltijden voor rond wat bijna over de datum is, afgestemd op het aantal eters. Plan één avondmaaltijd of laat het een gevarieerde week zonder verspilling samenstellen.",
      },
      {
        title: "Koop alleen wat ontbreekt",
        desc: "Copantry vergelijkt je planning met je voorraadkast en maakt een boodschappenlijst op schapvolgorde van alleen wat je mist — realtime gedeeld met het hele huishouden.",
      },
      {
        title: "Kook, en alles blijft kloppen",
        desc: "Markeer een maaltijd als gekookt en Copantry trekt af wat je hebt gebruikt, houdt de restjes bij en houdt je voorraadkast kloppend voor de volgende keer. De kringloop sluit zichzelf.",
      },
    ],
    tryCta: "Probeer het met jouw keuken",
    exploreEyebrow: "Verder kijken",
    exploreTitle: "Ontdek wat Copantry allemaal kan",
  },
  sv: {
    eyebrow: "Så fungerar det",
    h1: "Från full kyl till middag, i fyra enkla steg",
    lede: "Copantry arbetar i en enkel slinga: den lär sig vad du har i köket, säger vad du ska laga innan det blir för gammalt, bygger en inköpslista med bara det du saknar och håller allt uppdaterat medan du lagar. Så här går det till.",
    stepLabel: "Steg",
    steps: [
      {
        title: "Berätta för Copantry vad du har",
        desc: "Fotografera din handling, ett kvitto eller en skafferihylla — eller använd rösten eller text. Copantry läser det med AI och bygger ett levande skafferi, med datum på varje vara så att du vet vad du ska använda först.",
      },
      {
        title: "Se vad du kan laga i kväll",
        desc: "Copantry föreslår riktiga måltider utifrån det som snart går ut, anpassade efter hur många du lagar till. Planera en enda middag eller låt den skapa en varierad vecka helt utan svinn.",
      },
      {
        title: "Handla bara det som saknas",
        desc: "Copantry jämför din plan med ditt skafferi och bygger en inköpslista sorterad efter butiksgång med bara det du saknar — delad med hela hushållet i realtid.",
      },
      {
        title: "Laga, så håller sig allt uppdaterat",
        desc: "Markera en måltid som lagad så drar Copantry av det du använde, håller koll på resterna och håller ditt skafferi rätt till nästa gång. Slingan sluter sig själv.",
      },
    ],
    tryCta: "Prova med ditt kök",
    exploreEyebrow: "Gå djupare",
    exploreTitle: "Utforska vad Copantry kan göra",
  },
  da: {
    eyebrow: "Sådan virker det",
    h1: "Fra fyldt køleskab til aftensmad i fire enkle trin",
    lede: "Copantry arbejder i et enkelt kredsløb: den lærer, hvad du har i køkkenet, fortæller dig, hvad du skal lave, før det udløber, bygger en indkøbsliste med kun det, du mangler, og holder det hele opdateret, mens du laver mad. Sådan gør den præcis.",
    stepLabel: "Trin",
    steps: [
      {
        title: "Fortæl Copantry, hvad du har",
        desc: "Tag et billede af dine indkøb, en kvittering eller en hylde — eller brug stemmen eller tekst. Copantry læser det med AI og bygger et levende spisekammer, med dato på hver vare, så du ved, hvad der skal bruges først.",
      },
      {
        title: "Se, hvad du kan lave i aften",
        desc: "Copantry foreslår rigtige måltider ud fra det, der snart udløber, tilpasset hvor mange I er. Planlæg en enkelt aftensmad, eller lad den lave en varieret uge helt uden spild.",
      },
      {
        title: "Køb kun det, der mangler",
        desc: "Copantry sammenligner din plan med dit spisekammer og bygger en indkøbsliste sorteret efter butiksgang med kun det, du mangler — delt med hele husstanden i realtid.",
      },
      {
        title: "Lav mad, og alt holder sig opdateret",
        desc: "Markér et måltid som lavet, så trækker Copantry det brugte fra, holder styr på resterne og holder dit spisekammer korrekt til næste gang. Kredsløbet lukker sig selv.",
      },
    ],
    tryCta: "Prøv det med dit køkken",
    exploreEyebrow: "Gå i dybden",
    exploreTitle: "Udforsk, hvad Copantry kan",
  },
  fi: {
    eyebrow: "Näin se toimii",
    h1: "Täydestä jääkaapista päivälliseen neljällä helpolla askeleella",
    lede: "Copantry toimii yksinkertaisena kiertona: se oppii, mitä keittiössäsi on, kertoo mitä laittaa ennen kuin ruoka vanhenee, kokoaa ostoslistan vain puuttuvasta ja pitää kaiken ajan tasalla samalla kun kokkaat. Näin se tarkalleen menee.",
    stepLabel: "Vaihe",
    steps: [
      {
        title: "Kerro Copantrylle, mitä sinulla on",
        desc: "Ota kuva ostoksistasi, kuitista tai kaapin hyllystä — tai käytä puhetta tai tekstiä. Copantry lukee sen tekoälyllä ja kokoaa elävän ruokakomeron, päiväten jokaisen tuotteen, jotta tiedät mitä käyttää ensin.",
      },
      {
        title: "Näe, mitä voit laittaa tänään",
        desc: "Copantry ehdottaa oikeita aterioita sen ympärille, mikä on vanhenemassa, mitoitettuna syöjien määrään. Suunnittele yksi päivällinen tai anna sen luoda monipuolinen, hävikitön viikko.",
      },
      {
        title: "Osta vain se, mikä puuttuu",
        desc: "Copantry vertaa suunnitelmaasi ruokakomeroosi ja kokoaa hyllyjärjestyksessä olevan ostoslistan vain puuttuvasta — jaettuna koko talouden kanssa reaaliajassa.",
      },
      {
        title: "Kokkaa, ja kaikki pysyy ajan tasalla",
        desc: "Merkitse ateria tehdyksi, niin Copantry vähentää käytetyn, seuraa tähteitä ja pitää ruokakomerosi paikkansapitävänä seuraavaa kertaa varten. Kierto sulkeutuu itsestään.",
      },
    ],
    tryCta: "Kokeile omalla keittiölläsi",
    exploreEyebrow: "Syvemmälle",
    exploreTitle: "Tutustu siihen, mitä Copantry osaa",
  },
  no: {
    eyebrow: "Slik virker det",
    h1: "Fra fullt kjøleskap til middag, i fire enkle steg",
    lede: "Copantry arbeider i en enkel sløyfe: den lærer hva du har på kjøkkenet, forteller deg hva du bør lage før det går ut, bygger en handleliste med bare det du mangler, og holder alt oppdatert mens du lager mat. Slik gjør den det.",
    stepLabel: "Steg",
    steps: [
      {
        title: "Fortell Copantry hva du har",
        desc: "Ta et bilde av handleturen, en kvittering eller en hylle — eller bruk stemmen eller tekst. Copantry leser det med KI og bygger et levende spiskammer, med dato på hver vare så du vet hva som bør brukes først.",
      },
      {
        title: "Se hva du kan lage i kveld",
        desc: "Copantry foreslår ekte måltider rundt det som snart går ut, tilpasset hvor mange du lager til. Planlegg én middag, eller la den lage en variert uke helt uten svinn.",
      },
      {
        title: "Handle bare det som mangler",
        desc: "Copantry sammenligner planen din med spiskammeret og bygger en handleliste sortert etter butikkgang med bare det du mangler — delt med hele husholdningen i sanntid.",
      },
      {
        title: "Lag mat, og alt holder seg oppdatert",
        desc: "Merk et måltid som laget, så trekker Copantry fra det du brukte, holder oversikt over restene og holder spiskammeret riktig til neste gang. Sløyfen lukker seg selv.",
      },
    ],
    tryCta: "Prøv det med ditt kjøkken",
    exploreEyebrow: "Gå dypere",
    exploreTitle: "Utforsk hva Copantry kan gjøre",
  },
  pl: {
    eyebrow: "Jak to działa",
    h1: "Od pełnej lodówki do kolacji w czterech prostych krokach",
    lede: "Copantry działa w prostej pętli: uczy się, co masz w kuchni, mówi, co ugotować, zanim skończy się termin, układa listę zakupów wyłącznie z brakujących rzeczy i pilnuje, żeby wszystko się zgadzało, kiedy gotujesz. Oto dokładnie jak.",
    stepLabel: "Krok",
    steps: [
      {
        title: "Powiedz Copantry, co masz",
        desc: "Zrób zdjęcie zakupów, paragonu albo półki w szafce — albo użyj głosu lub tekstu. Copantry odczyta to SI i zbuduje żywą spiżarnię, z datą przy każdym produkcie, żebyś wiedział, co zużyć najpierw.",
      },
      {
        title: "Zobacz, co ugotować dziś wieczorem",
        desc: "Copantry proponuje prawdziwe dania wokół tego, czemu kończy się termin, przeliczone na liczbę jedzących. Zaplanuj jedną kolację albo pozwól mu ułożyć urozmaicony tydzień bez marnowania.",
      },
      {
        title: "Kupuj tylko to, czego brakuje",
        desc: "Copantry porównuje twój plan ze spiżarnią i układa listę zakupów w kolejności alejek, wyłącznie z brakujących rzeczy — dzieloną z całym gospodarstwem na bieżąco.",
      },
      {
        title: "Gotuj, a wszystko pozostanie aktualne",
        desc: "Oznacz posiłek jako ugotowany, a Copantry odejmie zużyte produkty, zapisze resztki i utrzyma spiżarnię w zgodzie z rzeczywistością na następny raz. Pętla zamyka się sama.",
      },
    ],
    tryCta: "Wypróbuj we własnej kuchni",
    exploreEyebrow: "Sięgnij głębiej",
    exploreTitle: "Zobacz, co potrafi Copantry",
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
  nl: {
    accent: "green",
    heroEmoji: "🥬",
    eyebrow: "Minder verspilling",
    crumb: "Minder verspilling",
    h1: "Eet je boodschappen op voordat ze bederven",
    lede: "Copantry houdt bij hoelang alles in je keuken nog goed is en stelt gerechten voor die eerst het bijna-bedorven eten gebruiken — zodat eten op je bord belandt in plaats van in de bak. Dat is de kern van hoe Copantry werkt, geen extraatje.",
    sections: [
      {
        h2: "Zie in één oogopslag wat op moet",
        body: "Je voorraadkast staat altijd gesorteerd van de eerstvolgende datum naar de verste, dus wat als eerste gekookt moet worden staat bovenaan. Geen zak spinazie meer die achter de melk tot vloeistof is geworden.",
        bullets: [
          {
            title: "Houdbaarheid in realtime",
            desc: "Elk product heeft een aanpasbare datum. Copantry markeert wat dichterbij komt.",
          },
          {
            title: "TGT versus THT",
            desc: "Houd beide bij, zodat je op het juiste moment opeet in plaats van te vroeg weggooit.",
          },
          {
            title: "Niets vergeten",
            desc: "Producten schuiven naar boven naarmate de datum nadert — de koelkast verbergt niets meer.",
          },
        ],
      },
      {
        h2: "Maak van “bijna over de datum” het avondeten van vandaag",
        body: "In plaats van bij een recept te beginnen en boodschappen te gaan doen, begint Copantry bij wat je al hebt. Het stelt echte gerechten voor rond de ingrediënten die op moeten, afgestemd op het aantal eters.",
      },
      {
        h2: "Verspil ook minder geld",
        body: "Voedselverspilling kost een huishouden honderden euro's per jaar. Koken met wat je hebt en alleen kopen wat ontbreekt is een van de eenvoudigste manieren om zowel de verspilling als de rekening te verlagen.",
      },
    ],
    howTo: {
      title: "Zo plan je maaltijden op houdbaarheid in plaats van op recept",
      steps: [
        "Voeg je boodschappen toe — fotografeer je aankopen of een kassabon en Copantry dateert elk product voor je.",
        "Open je voorraadkast om te zien wat het eerst over de datum gaat, automatisch bovenaan gesorteerd.",
        "Kies een voorgesteld gerecht rond die producten en plan het in je week.",
        "Kook — Copantry trekt af wat je hebt gebruikt, zodat je voorraadkast en je volgende lijst blijven kloppen.",
      ],
    },
    related: [
      { label: "Hoelang blijft voedsel goed?", to: "/learn" },
      { label: "Maaltijden plannen", to: "/features/meal-planning" },
      { label: "Voorraadkast bijhouden", to: "/features/pantry-tracking" },
    ],
    cta: {
      title: "Begin vanavond nog met eten redden",
      subtitle:
        "Gratis · geen creditcard. Voeg je keuken toe en zie wat je kunt koken voordat er iets bederft.",
    },
    faqItems: [
      {
        q: "Welk eten moet ik opmaken voordat het bederft?",
        a: "Copantry houdt een actuele lijst bij van wat er in je keuken ligt, gesorteerd op houdbaarheidsdatum, dus wat als eerste op moet staat altijd bovenaan. Vervolgens stelt het recepten voor rond die producten.",
      },
      {
        q: "Hoe stop ik met voedselverspilling thuis?",
        a: "Het meest effectief is koken met wat je al hebt voordat het over de datum gaat, en alleen kopen wat je nodig hebt. Copantry doet allebei: het houdt de data bij, stelt “op maken”-gerechten voor en maakt een lijst van alleen wat ontbreekt.",
      },
      {
        q: "Hoeveel eten verspilt een gemiddeld huishouden?",
        a: "Voedselverspilling loopt op tot tientallen kilo's per persoon per jaar. Thuis minder verspillen is een van de eenvoudigste manieren om geld te besparen en je CO₂-voetafdruk te verkleinen.",
      },
      {
        q: "Wat is het verschil tussen TGT en THT?",
        a: "“Te gebruiken tot” gaat over veiligheid — eet het daarna niet meer. “Ten minste houdbaar tot” gaat over kwaliteit — het product is daarna meestal nog veilig. In Copantry kun je beide bijhouden.",
      },
      {
        q: "Kan ik maaltijden plannen op houdbaarheid in plaats van op recept?",
        a: "Ja. Daar is Copantry precies voor gemaakt. In plaats van bij een recept te beginnen, begin je bij wat bijna over de datum is, en Copantry stelt gerechten voor die die ingrediënten als eerste gebruiken.",
      },
    ],
  },
  sv: {
    accent: "green",
    heroEmoji: "🥬",
    eyebrow: "Minska svinnet",
    crumb: "Minska svinnet",
    h1: "Ät upp maten innan den blir dålig",
    lede: "Copantry håller koll på hur länge allt i ditt kök håller och föreslår rätter som använder det som snart går ut först — så att maten hamnar på tallriken i stället för i soporna. Det är kärnan i hur Copantry fungerar, inte ett tillägg.",
    sections: [
      {
        h2: "Se på en gång vad som behöver ätas upp",
        body: "Ditt skafferi är alltid sorterat från närmaste till avlägsnaste datum, så det som ska lagas först ligger överst. Slut på att hitta en flytande påse spenat bakom mjölken.",
        bullets: [
          {
            title: "Hållbarhet i realtid",
            desc: "Varje vara har ett justerbart datum. Copantry flaggar det som närmar sig.",
          },
          {
            title: "Sista förbrukningsdag kontra bäst före",
            desc: "Håll koll på båda, så att du äter upp i rätt tid i stället för att slänga för tidigt.",
          },
          {
            title: "Inget glöms bort",
            desc: "Varor flyttas uppåt när datumet närmar sig — kylen döljer ingenting längre.",
          },
        ],
      },
      {
        h2: "Gör “snart för gammalt” till kvällens middag",
        body: "I stället för att utgå från ett recept och gå och handla utgår Copantry från det du redan har. Den föreslår riktiga rätter kring de ingredienser som behöver användas, anpassade efter hur många du lagar till.",
      },
      {
        h2: "Slösa mindre pengar också",
        body: "Matsvinn kostar hundratals kronor per hushåll varje månad. Att laga det du har och bara handla det som saknas är ett av de enklaste sätten att sänka både svinnet och notan.",
      },
    ],
    howTo: {
      title: "Så planerar du måltider efter datum i stället för efter recept",
      steps: [
        "Lägg till din handling — fotografera dina inköp eller ett kvitto, så daterar Copantry varje vara åt dig.",
        "Öppna skafferiet för att se vad som går ut först, automatiskt sorterat högst upp.",
        "Välj en föreslagen rätt kring de varorna och planera in den i veckan.",
        "Laga — Copantry drar av det du använde, så att skafferiet och nästa lista fortsätter stämma.",
      ],
    },
    related: [
      { label: "Hur länge håller maten?", to: "/learn" },
      { label: "Måltidsplanering", to: "/features/meal-planning" },
      { label: "Hålla koll på skafferiet", to: "/features/pantry-tracking" },
    ],
    cta: {
      title: "Börja rädda mat redan i kväll",
      subtitle:
        "Gratis · inget kort. Lägg till ditt kök och se vad du kan laga innan något blir dåligt.",
    },
    faqItems: [
      {
        q: "Vilken mat bör jag äta upp innan den blir dålig?",
        a: "Copantry håller en aktuell lista över vad som finns i ditt kök, sorterad efter hållbarhetsdatum, så det som ska ätas först ligger alltid överst. Sedan föreslår den recept kring de varorna.",
      },
      {
        q: "Hur slutar jag slänga mat hemma?",
        a: "Det mest verksamma är att laga det du redan har innan det går ut och bara handla det du behöver. Copantry gör båda: den håller koll på datumen, föreslår rätter som använder upp maten och skapar en lista med bara det som saknas.",
      },
      {
        q: "Hur mycket mat slänger ett genomsnittligt hushåll?",
        a: "Matsvinnet uppgår till tiotals kilo per person och år. Att minska det hemma är ett av de enklaste sätten att spara pengar och sänka sitt klimatavtryck.",
      },
      {
        q: "Vad är skillnaden mellan sista förbrukningsdag och bäst före?",
        a: "Sista förbrukningsdag handlar om säkerhet — ät det inte efteråt. Bäst före handlar om kvalitet — maten är oftast fortfarande säker efter det. Copantry låter dig hålla koll på båda.",
      },
      {
        q: "Kan jag planera måltider efter datum i stället för efter recept?",
        a: "Ja. Det är precis vad Copantry är byggt för. I stället för att utgå från ett recept utgår du från det som snart går ut, och Copantry föreslår rätter som använder de ingredienserna först.",
      },
    ],
  },
  da: {
    accent: "green",
    heroEmoji: "🥬",
    eyebrow: "Mindre madspild",
    crumb: "Mindre madspild",
    h1: "Spis maden, før den bliver dårlig",
    lede: "Copantry holder styr på, hvor længe alt i dit køkken holder, og foreslår retter, der bruger det, der snart udløber, først — så maden ender på tallerkenen i stedet for i skraldespanden. Det er kernen i, hvordan Copantry virker, ikke en ekstrafunktion.",
    sections: [
      {
        h2: "Se med det samme, hvad der skal spises",
        body: "Dit spisekammer er altid sorteret fra nærmeste til fjerneste dato, så det, der skal laves først, ligger øverst. Slut med at finde en flydende pose spinat bag mælken.",
        bullets: [
          {
            title: "Holdbarhed i realtid",
            desc: "Hver vare har en dato, du kan justere. Copantry markerer det, der nærmer sig.",
          },
          {
            title: "Sidste anvendelsesdato kontra mindst holdbar til",
            desc: "Hold styr på begge, så du spiser op på rette tid i stedet for at smide ud for tidligt.",
          },
          {
            title: "Intet bliver glemt",
            desc: "Varer rykker op, efterhånden som datoen nærmer sig — køleskabet skjuler ikke længere noget.",
          },
        ],
      },
      {
        h2: "Gør “snart for gammelt” til aftensmaden i dag",
        body: "I stedet for at tage udgangspunkt i en opskrift og gå på indkøb tager Copantry udgangspunkt i det, du allerede har. Den foreslår rigtige retter omkring de råvarer, der skal bruges, tilpasset hvor mange I er.",
      },
      {
        h2: "Spild også færre penge",
        body: "Madspild koster tusindvis af kroner pr. husstand om året. At lave mad af det, du har, og kun købe det, der mangler, er en af de enkleste måder at sænke både spildet og regningen på.",
      },
    ],
    howTo: {
      title:
        "Sådan planlægger du måltider efter dato i stedet for efter opskrift",
      steps: [
        "Tilføj dine indkøb — fotografér varerne eller en kvittering, så daterer Copantry hver vare for dig.",
        "Åbn dit spisekammer for at se, hvad der udløber først, automatisk sorteret øverst.",
        "Vælg en foreslået ret omkring de varer, og planlæg den ind i ugen.",
        "Lav mad — Copantry trækker det brugte fra, så spisekammeret og næste liste bliver ved med at passe.",
      ],
    },
    related: [
      { label: "Hvor længe holder maden?", to: "/learn" },
      { label: "Madplanlægning", to: "/features/meal-planning" },
      { label: "Styr på spisekammeret", to: "/features/pantry-tracking" },
    ],
    cta: {
      title: "Begynd at redde mad allerede i aften",
      subtitle:
        "Gratis · intet kort. Tilføj dit køkken, og se, hvad du kan lave, før noget bliver dårligt.",
    },
    faqItems: [
      {
        q: "Hvilken mad bør jeg spise, før den bliver dårlig?",
        a: "Copantry fører en opdateret liste over, hvad der er i dit køkken, sorteret efter udløbsdato, så det, der skal spises først, altid ligger øverst. Derefter foreslår den opskrifter omkring de varer.",
      },
      {
        q: "Hvordan holder jeg op med at smide mad ud derhjemme?",
        a: "Det mest effektive er at lave mad af det, du allerede har, før det udløber, og kun købe det, du har brug for. Copantry gør begge dele: den holder styr på datoerne, foreslår retter, der bruger maden op, og laver en liste med kun det, der mangler.",
      },
      {
        q: "Hvor meget mad smider en gennemsnitlig husstand ud?",
        a: "Madspild løber op i snesevis af kilo pr. person om året. At mindske det derhjemme er en af de enkleste måder at spare penge og sænke sit klimaaftryk på.",
      },
      {
        q: "Hvad er forskellen på sidste anvendelsesdato og mindst holdbar til?",
        a: "Sidste anvendelsesdato handler om sikkerhed — spis det ikke bagefter. Mindst holdbar til handler om kvalitet — maden er som regel stadig sikker efter den dato. Copantry lader dig holde styr på begge.",
      },
      {
        q: "Kan jeg planlægge måltider efter dato i stedet for efter opskrift?",
        a: "Ja. Det er præcis det, Copantry er lavet til. I stedet for at starte ved en opskrift starter du ved det, der snart udløber, og Copantry foreslår retter, der bruger de råvarer først.",
      },
    ],
  },
  fi: {
    accent: "green",
    heroEmoji: "🥬",
    eyebrow: "Vähemmän hävikkiä",
    crumb: "Vähemmän hävikkiä",
    h1: "Syö ruokasi ennen kuin se pilaantuu",
    lede: "Copantry seuraa, kuinka kauan kaikki keittiössäsi säilyy, ja ehdottaa ruokia, jotka käyttävät ensin pian vanhenevat — jotta ruoka päätyy lautaselle eikä roskiin. Tämä on Copantryn ydin, ei lisäominaisuus.",
    sections: [
      {
        h2: "Näe yhdellä silmäyksellä, mikä pitää käyttää",
        body: "Ruokakomerosi on aina järjestetty lähimmästä päiväyksestä kaukaisimpaan, joten ensin kokattava on ylimpänä. Ei enää nesteytynyttä pinaattipussia maidon takana.",
        bullets: [
          {
            title: "Säilyvyys reaaliajassa",
            desc: "Jokaisella tuotteella on muokattava päiväys. Copantry nostaa esiin lähestyvät.",
          },
          {
            title: "Viimeinen käyttöpäivä vs. parasta ennen",
            desc: "Seuraa molempia, niin käytät oikeaan aikaan etkä heitä liian aikaisin pois.",
          },
          {
            title: "Mikään ei unohdu",
            desc: "Tuotteet nousevat ylemmäs päiväyksen lähestyessä — jääkaappi ei enää piilota mitään.",
          },
        ],
      },
      {
        h2: "Tee “pian vanhenevasta” tämän illan päivällinen",
        body: "Sen sijaan että lähtisit reseptistä ja menisit kauppaan, Copantry lähtee siitä, mitä sinulla jo on. Se ehdottaa oikeita ruokia niiden ainesten ympärille, jotka pitää käyttää, mitoitettuna syöjien määrään.",
      },
      {
        h2: "Säästä myös rahaa",
        body: "Ruokahävikki maksaa taloutta kohti satoja euroja vuodessa. Ruoan laittaminen siitä, mitä on, ja vain puuttuvan ostaminen on yksi helpoimmista tavoista pienentää sekä hävikkiä että laskua.",
      },
    ],
    howTo: {
      title: "Näin suunnittelet ateriat päiväysten etkä reseptien mukaan",
      steps: [
        "Lisää ostoksesi — kuvaa ostokset tai kuitti, niin Copantry päivää jokaisen tuotteen puolestasi.",
        "Avaa ruokakomerosi nähdäksesi, mikä vanhenee ensin, automaattisesti ylimmäksi järjestettynä.",
        "Valitse niiden tuotteiden ympärille ehdotettu ruoka ja suunnittele se viikkoosi.",
        "Kokkaa — Copantry vähentää käytetyn, jotta ruokakomerosi ja seuraava listasi pysyvät ajan tasalla.",
      ],
    },
    related: [
      { label: "Kuinka kauan ruoka säilyy?", to: "/learn" },
      { label: "Ateriasuunnittelu", to: "/features/meal-planning" },
      { label: "Ruokakomeron seuranta", to: "/features/pantry-tracking" },
    ],
    cta: {
      title: "Ala pelastaa ruokaa jo tänä iltana",
      subtitle:
        "Ilmainen · ei korttia. Lisää keittiösi ja katso, mitä voit laittaa ennen kuin mikään pilaantuu.",
    },
    faqItems: [
      {
        q: "Mikä ruoka minun pitäisi käyttää ennen kuin se pilaantuu?",
        a: "Copantry pitää ajan tasalla olevaa listaa keittiösi sisällöstä säilyvyyspäivän mukaan järjestettynä, joten ensin käytettävä on aina ylimpänä. Sitten se ehdottaa reseptejä näiden tuotteiden ympärille.",
      },
      {
        q: "Miten lopetan ruoan haaskaamisen kotona?",
        a: "Tehokkainta on laittaa ruokaa siitä, mitä sinulla jo on, ennen kuin se vanhenee, ja ostaa vain tarpeellinen. Copantry tekee molemmat: se seuraa päiväyksiä, ehdottaa loppuun käyttäviä ruokia ja kokoaa listan vain puuttuvasta.",
      },
      {
        q: "Kuinka paljon ruokaa keskiverto talous haaskaa?",
        a: "Ruokahävikki nousee kymmeniin kiloihin henkeä kohti vuodessa. Sen vähentäminen kotona on yksi helpoimmista tavoista säästää rahaa ja pienentää hiilijalanjälkeä.",
      },
      {
        q: "Mikä ero on viimeisellä käyttöpäivällä ja parasta ennen -päivällä?",
        a: "Viimeinen käyttöpäivä koskee turvallisuutta — älä syö sen jälkeen. Parasta ennen koskee laatua — ruoka on sen jälkeen yleensä yhä turvallista. Copantryssa voit seurata molempia.",
      },
      {
        q: "Voinko suunnitella ateriat päiväysten enkä reseptien mukaan?",
        a: "Kyllä. Juuri tähän Copantry on tehty. Reseptin sijaan lähdet siitä, mikä on vanhenemassa, ja Copantry ehdottaa ruokia, jotka käyttävät ne ainekset ensin.",
      },
    ],
  },
  no: {
    accent: "green",
    heroEmoji: "🥬",
    eyebrow: "Mindre matsvinn",
    crumb: "Mindre matsvinn",
    h1: "Spis opp maten før den blir dårlig",
    lede: "Copantry holder oversikt over hvor lenge alt på kjøkkenet ditt holder, og foreslår retter som bruker det som snart går ut først — så maten havner på tallerkenen i stedet for i søpla. Det er kjernen i hvordan Copantry virker, ikke et tillegg.",
    sections: [
      {
        h2: "Se med én gang hva som må spises",
        body: "Spiskammeret ditt er alltid sortert fra nærmeste til fjerneste dato, så det som skal lages først ligger øverst. Slutt med å finne en flytende pose spinat bak melken.",
        bullets: [
          {
            title: "Holdbarhet i sanntid",
            desc: "Hver vare har en dato du kan justere. Copantry merker det som nærmer seg.",
          },
          {
            title: "Siste forbruksdag mot best før",
            desc: "Følg med på begge, så du spiser opp til rett tid i stedet for å kaste for tidlig.",
          },
          {
            title: "Ingenting blir glemt",
            desc: "Varer flyttes oppover etter hvert som datoen nærmer seg — kjøleskapet skjuler ingenting lenger.",
          },
        ],
      },
      {
        h2: "Gjør “snart for gammelt” til kveldens middag",
        body: "I stedet for å ta utgangspunkt i en oppskrift og dra på butikken, tar Copantry utgangspunkt i det du allerede har. Den foreslår ekte retter rundt råvarene som må brukes, tilpasset hvor mange du lager til.",
      },
      {
        h2: "Sløs mindre penger også",
        body: "Matsvinn koster tusenvis av kroner per husholdning i året. Å lage mat av det du har og bare kjøpe det som mangler er en av de enkleste måtene å redusere både svinnet og regningen på.",
      },
    ],
    howTo: {
      title:
        "Slik planlegger du måltider etter dato i stedet for etter oppskrift",
      steps: [
        "Legg til handleturen din — ta bilde av varene eller en kvittering, så daterer Copantry hver vare for deg.",
        "Åpne spiskammeret for å se hva som går ut først, automatisk sortert øverst.",
        "Velg en foreslått rett rundt de varene, og planlegg den inn i uken.",
        "Lag mat — Copantry trekker fra det du brukte, så spiskammeret og neste liste fortsetter å stemme.",
      ],
    },
    related: [
      { label: "Hvor lenge holder maten?", to: "/learn" },
      { label: "Måltidsplanlegging", to: "/features/meal-planning" },
      { label: "Oversikt over spiskammeret", to: "/features/pantry-tracking" },
    ],
    cta: {
      title: "Begynn å redde mat allerede i kveld",
      subtitle:
        "Gratis · ingen kort. Legg til kjøkkenet ditt, og se hva du kan lage før noe blir dårlig.",
    },
    faqItems: [
      {
        q: "Hvilken mat bør jeg spise før den blir dårlig?",
        a: "Copantry fører en oppdatert liste over hva du har på kjøkkenet, sortert etter holdbarhetsdato, så det som skal spises først ligger alltid øverst. Så foreslår den oppskrifter rundt de varene.",
      },
      {
        q: "Hvordan slutter jeg å kaste mat hjemme?",
        a: "Det mest effektive er å lage mat av det du allerede har før det går ut, og bare kjøpe det du trenger. Copantry gjør begge deler: den følger med på datoene, foreslår retter som bruker opp maten, og lager en liste med bare det som mangler.",
      },
      {
        q: "Hvor mye mat kaster en gjennomsnittlig husholdning?",
        a: "Matsvinnet kommer opp i titalls kilo per person i året. Å redusere det hjemme er en av de enkleste måtene å spare penger og senke klimaavtrykket på.",
      },
      {
        q: "Hva er forskjellen på siste forbruksdag og best før?",
        a: "Siste forbruksdag handler om sikkerhet — ikke spis det etterpå. Best før handler om kvalitet — maten er som regel fortsatt trygg etter det. Copantry lar deg følge med på begge.",
      },
      {
        q: "Kan jeg planlegge måltider etter dato i stedet for etter oppskrift?",
        a: "Ja. Det er nettopp det Copantry er laget for. I stedet for å starte med en oppskrift starter du med det som snart går ut, og Copantry foreslår retter som bruker de råvarene først.",
      },
    ],
  },
  pl: {
    accent: "green",
    heroEmoji: "🥬",
    eyebrow: "Mniej marnowania",
    crumb: "Mniej marnowania",
    h1: "Zjedz jedzenie, zanim się zepsuje",
    lede: "Copantry pilnuje, ile czasu zostało wszystkiemu w twojej kuchni, i proponuje dania, które zużywają najpierw to, czemu kończy się termin — żeby jedzenie trafiało na talerz, a nie do kosza. To sedno działania Copantry, a nie dodatek.",
    sections: [
      {
        h2: "Zobacz od razu, co trzeba zużyć",
        body: "Twoja spiżarnia jest zawsze uporządkowana od najbliższego terminu do najdalszego, więc to, co trzeba ugotować najpierw, jest na samej górze. Koniec z odkrywaniem rozpuszczonej torebki szpinaku za mlekiem.",
        bullets: [
          {
            title: "Terminy na bieżąco",
            desc: "Każdy produkt ma datę, którą możesz poprawić. Copantry wyróżnia te, które się zbliżają.",
          },
          {
            title: "„Należy spożyć do” a „najlepiej spożyć przed”",
            desc: "Śledź obie daty, aby zużywać w odpowiednim momencie zamiast wyrzucać za wcześnie.",
          },
          {
            title: "Nic się nie zgubi",
            desc: "Produkty przesuwają się w górę, im bliżej terminu — lodówka niczego już nie ukryje.",
          },
        ],
      },
      {
        h2: "Zamień „zaraz się zepsuje” w dzisiejszą kolację",
        body: "Zamiast wychodzić od przepisu i iść na zakupy, Copantry wychodzi od tego, co już masz. Proponuje prawdziwe dania wokół składników do zużycia, przeliczone na liczbę jedzących.",
      },
      {
        h2: "Marnuj też mniej pieniędzy",
        body: "Marnowanie żywności kosztuje gospodarstwo domowe setki złotych rocznie. Gotowanie z tego, co masz, i kupowanie wyłącznie braków to jeden z najprostszych sposobów, by obniżyć i marnotrawstwo, i rachunek.",
      },
    ],
    howTo: {
      title: "Jak planować posiłki według terminów, a nie według przepisów",
      steps: [
        "Dodaj zakupy — zrób zdjęcie produktów albo paragonu, a Copantry opatrzy każdy produkt datą.",
        "Otwórz spiżarnię, aby zobaczyć, czemu termin kończy się najwcześniej — automatycznie na górze.",
        "Wybierz proponowane danie wokół tych produktów i wstaw je do swojego tygodnia.",
        "Gotuj — Copantry odejmie zużyte produkty, żeby spiżarnia i kolejna lista dalej się zgadzały.",
      ],
    },
    related: [
      { label: "Jak długo trzyma się jedzenie?", to: "/learn" },
      { label: "Planowanie posiłków", to: "/features/meal-planning" },
      { label: "Prowadzenie spiżarni", to: "/features/pantry-tracking" },
    ],
    cta: {
      title: "Zacznij ratować jedzenie już dziś wieczorem",
      subtitle:
        "Bezpłatnie · bez karty. Dodaj swoją kuchnię i zobacz, co ugotować, zanim cokolwiek się zepsuje.",
    },
    faqItems: [
      {
        q: "Które produkty powinienem zużyć, zanim się zepsują?",
        a: "Copantry prowadzi aktualną listę tego, co masz w kuchni, uporządkowaną według terminu przydatności, więc to, co trzeba zużyć najpierw, jest zawsze na górze. Następnie proponuje przepisy wokół tych produktów.",
      },
      {
        q: "Jak przestać marnować jedzenie w domu?",
        a: "Najskuteczniej jest gotować z tego, co już masz, zanim skończy się termin, i kupować tylko to, czego potrzebujesz. Copantry robi jedno i drugie: pilnuje terminów, proponuje dania zużywające zapasy i układa listę wyłącznie z braków.",
      },
      {
        q: "Ile jedzenia marnuje przeciętne gospodarstwo domowe?",
        a: "Marnowanie żywności sięga dziesiątek kilogramów na osobę rocznie. Ograniczenie go w domu to jeden z najprostszych sposobów na oszczędność i mniejszy ślad węglowy.",
      },
      {
        q: "Jaka jest różnica między „należy spożyć do” a „najlepiej spożyć przed”?",
        a: "„Należy spożyć do” dotyczy bezpieczeństwa — po tej dacie nie jedz. „Najlepiej spożyć przed” dotyczy jakości — produkt zwykle nadal jest bezpieczny. Copantry pozwala śledzić obie daty.",
      },
      {
        q: "Czy mogę planować posiłki według terminów zamiast według przepisów?",
        a: "Tak. Dokładnie po to powstało Copantry. Zamiast zaczynać od przepisu, zaczynasz od tego, czemu kończy się termin, a Copantry proponuje dania, które zużywają te składniki w pierwszej kolejności.",
      },
    ],
  },
};

/*
 * Differentiator page (/why-copantry). Contrasts Copantry with *categories* of apps,
 * never named competitors. English reuses the canonical whyCopantry FAQ; the five
 * locales are full translations. `us` falls back to `en` via pick(). The three
 * `categories` and the six `matrix` rows must stay in lock-step with the SCORES grid
 * in WhyCopantryPage.jsx (scores are keyed by index, so they're language-independent).
 */
export const WHY_COPANTRY = {
  en: {
    eyebrow: "How Copantry is different",
    h1: "What makes Copantry different from other meal & pantry apps",
    metaTitle: "Why Copantry is different from other meal & pantry apps",
    lede: "Most kitchen apps do one piece of the job. Calendar-first planners give you an empty week. Recipe-savers store links but do not know your kitchen. List apps make a list but do not plan or track expiry. Copantry connects all three: it knows what you have, tells you what to cook before it expires, and builds your shopping list around the gaps.",
    catEyebrow: "By category, not by name",
    catTitle: "Where other kinds of apps stop",
    catLede:
      "We won’t name competitors — features change and comparisons go stale. Instead, here is how Copantry compares to the broad categories of apps people use today.",
    goodAt: "Good at:",
    theGap: "The gap:",
    categories: [
      {
        name: "Calendar-first meal planners",
        fair: "Great if you already know exactly what you want to cook and just need a place to schedule it.",
        gap: "They hand you an empty week to fill, with no idea what is in your kitchen or what is about to go off.",
      },
      {
        name: "Recipe-savers & recipe boxes",
        fair: "Lovely for collecting recipes you like — simpler than Copantry if bookmarking is all you need.",
        gap: "They store recipes but do not know your pantry, so they cannot tell you what to cook before it expires or what to buy.",
      },
      {
        name: "Basic shopping-list apps",
        fair: "Quick and handy for jotting down what you remember you are out of.",
        gap: "They make a list but do not plan meals or track expiry, so duplicates and forgotten food still happen.",
      },
    ],
    matrixEyebrow: "Side by side",
    matrixTitle: "The whole kitchen loop, in one place",
    capability: "Capability",
    matrix: [
      "Tracks what is in your kitchen & when it expires",
      "Tells you what to cook before food goes off",
      "Plans a week around what you already have",
      "Builds a shopping list of only the gaps",
      "Shared household plan, list & pantry",
      "Works in twelve languages",
    ],
    legendBuilt: "Built for this",
    legendSometimes: "Sometimes / partly",
    legendNot: "Not really",
    notForTitle: "Copantry probably isn’t for you if…",
    notForPre:
      "…all you want is somewhere to bookmark recipe links, and you never plan meals or shop from a list. A simple recipe-saver will be lighter and that is genuinely fine. Copantry earns its place when you want to ",
    notForStrong:
      "waste less, plan around what you already have, and shop smarter",
    notForPost: " — that is the job it is built for.",
    faqEyebrow: "Evaluation",
    faqTitle: "Best app for the job? Honest answers",
    crumb: "Why Copantry",
    faqItems: FAQS.whyCopantry,
  },
  fr: {
    eyebrow: "En quoi Copantry est différent",
    h1: "Ce qui distingue Copantry des autres applis de repas et de garde-manger",
    metaTitle: "Pourquoi Copantry est différent des autres applis",
    lede: "La plupart des applis de cuisine ne font qu’une partie du travail. Les planificateurs partent d’une semaine vide. Les carnets de recettes stockent des liens mais ignorent votre cuisine. Les applis de liste font une liste mais ne planifient rien et ne suivent pas les dates. Copantry relie les trois : il sait ce que vous avez, vous dit quoi cuisiner avant péremption et bâtit votre liste de courses autour de ce qui manque.",
    catEyebrow: "Par catégorie, pas par nom",
    catTitle: "Là où les autres types d’applis s’arrêtent",
    catLede:
      "Nous ne nommons pas de concurrents — les fonctionnalités changent et les comparaisons se périment. Voici plutôt comment Copantry se situe face aux grandes catégories d’applis utilisées aujourd’hui.",
    goodAt: "Points forts :",
    theGap: "La limite :",
    categories: [
      {
        name: "Planificateurs centrés sur le calendrier",
        fair: "Parfaits si vous savez déjà exactement quoi cuisiner et cherchez juste où le planifier.",
        gap: "Ils vous laissent une semaine vide à remplir, sans rien savoir de votre cuisine ni de ce qui va bientôt se gâter.",
      },
      {
        name: "Carnets et boîtes à recettes",
        fair: "Très bien pour collectionner les recettes qui vous plaisent — plus simple que Copantry si marquer des pages vous suffit.",
        gap: "Ils stockent des recettes mais ignorent votre garde-manger : impossible de vous dire quoi cuisiner avant péremption ni quoi acheter.",
      },
      {
        name: "Applis de liste de courses basiques",
        fair: "Rapides et pratiques pour noter ce qui vous manque quand vous y pensez.",
        gap: "Elles font une liste mais ne planifient pas les repas et ne suivent pas les dates : doublons et aliments oubliés persistent.",
      },
    ],
    matrixEyebrow: "Côte à côte",
    matrixTitle: "Toute la boucle de la cuisine, au même endroit",
    capability: "Capacité",
    matrix: [
      "Suit ce qu’il y a dans votre cuisine et les dates de péremption",
      "Vous dit quoi cuisiner avant que ça se gâte",
      "Planifie une semaine autour de ce que vous avez déjà",
      "Compose une liste de courses limitée aux manques",
      "Plan, liste et garde-manger partagés au foyer",
      "Fonctionne en douze langues",
    ],
    legendBuilt: "Conçu pour ça",
    legendSometimes: "Parfois / en partie",
    legendNot: "Pas vraiment",
    notForTitle: "Copantry n’est sans doute pas fait pour vous si…",
    notForPre:
      "…tout ce que vous voulez, c’est un endroit pour marquer des liens de recettes, et vous ne planifiez jamais de repas ni ne faites les courses depuis une liste. Un simple carnet de recettes sera plus léger, et c’est très bien ainsi. Copantry prend tout son sens quand vous voulez ",
    notForStrong:
      "gaspiller moins, planifier autour de ce que vous avez déjà et acheter plus malin",
    notForPost: " — c’est exactement la mission pour laquelle il est conçu.",
    faqEyebrow: "Évaluation",
    faqTitle: "La meilleure appli pour ce travail ? Réponses honnêtes",
    crumb: "Pourquoi Copantry",
    faqItems: [
      {
        q: "Quelle est la meilleure appli pour réduire le gaspillage alimentaire à la maison ?",
        a: "La meilleure fait trois choses à la fois : suivre ce que vous avez et ses dates, vous dire quoi cuisiner pour l’écouler, et vous éviter de le racheter. Copantry est bâti précisément autour de cette boucle, là où la plupart des applis n’en font qu’une partie.",
      },
      {
        q: "En quoi Copantry diffère-t-il des autres applis de planification et de garde-manger ?",
        a: "Les planificateurs partent d’une semaine vide. Les carnets de recettes stockent des liens mais ignorent votre cuisine. Les applis de liste font une liste sans planifier ni suivre les dates. Copantry relie les trois : il sait ce que vous avez, vous dit quoi cuisiner avant péremption et bâtit votre liste autour des manques.",
      },
      {
        q: "Pour qui Copantry n’est-il pas fait ?",
        a: "Si vous voulez seulement marquer des liens de recettes sans jamais planifier ni faire les courses depuis une liste, un simple carnet sera plus léger. Copantry s’adresse aux foyers qui veulent gaspiller moins, planifier autour de ce qu’ils ont et acheter plus malin.",
      },
      {
        q: "Existe-t-il un planificateur de repas qui se connecte à mon supermarché ?",
        a: "Copantry est conçu pour mener votre plan jusqu’au magasin — en regroupant la liste par rayon et en visant la commande des manques chez votre supermarché — pour que le plan devienne des repas avec le moins de friction possible.",
      },
    ],
  },
  it: {
    eyebrow: "In cosa Copantry è diverso",
    h1: "Cosa distingue Copantry dalle altre app per pasti e dispensa",
    metaTitle: "Perché Copantry è diverso dalle altre app",
    lede: "La maggior parte delle app da cucina svolge solo una parte del lavoro. I pianificatori partono da una settimana vuota. I raccoglitori di ricette salvano link ma non conoscono la tua cucina. Le app per la lista fanno una lista ma non pianificano né seguono le scadenze. Copantry collega le tre cose: sa cosa hai, ti dice cosa cucinare prima che scada e crea la lista della spesa intorno a ciò che manca.",
    catEyebrow: "Per categoria, non per nome",
    catTitle: "Dove si fermano gli altri tipi di app",
    catLede:
      "Non nominiamo i concorrenti — le funzioni cambiano e i confronti invecchiano. Ecco invece come Copantry si pone rispetto alle grandi categorie di app usate oggi.",
    goodAt: "Punti di forza:",
    theGap: "Il limite:",
    categories: [
      {
        name: "Pianificatori incentrati sul calendario",
        fair: "Ottimi se sai già esattamente cosa cucinare e ti serve solo dove programmarlo.",
        gap: "Ti lasciano una settimana vuota da riempire, senza sapere cosa c’è nella tua cucina o cosa sta per andare a male.",
      },
      {
        name: "Raccoglitori e ricettari",
        fair: "Perfetti per collezionare le ricette che ti piacciono — più semplici di Copantry se ti basta salvare le pagine.",
        gap: "Salvano ricette ma non conoscono la tua dispensa, quindi non possono dirti cosa cucinare prima della scadenza né cosa comprare.",
      },
      {
        name: "App per liste della spesa basiche",
        fair: "Rapide e comode per annotare ciò che ti manca quando te ne accorgi.",
        gap: "Fanno una lista ma non pianificano i pasti né seguono le scadenze: doppioni e cibo dimenticato restano.",
      },
    ],
    matrixEyebrow: "A confronto",
    matrixTitle: "Tutto il ciclo della cucina, in un unico posto",
    capability: "Funzione",
    matrix: [
      "Tiene traccia di cosa c’è in cucina e di quando scade",
      "Ti dice cosa cucinare prima che il cibo vada a male",
      "Pianifica la settimana intorno a ciò che hai già",
      "Crea una lista della spesa solo con ciò che manca",
      "Piano, lista e dispensa condivisi in famiglia",
      "Funziona in dodici lingue",
    ],
    legendBuilt: "Fatto apposta",
    legendSometimes: "A volte / in parte",
    legendNot: "Non proprio",
    notForTitle: "Copantry probabilmente non fa per te se…",
    notForPre:
      "…tutto ciò che vuoi è un posto dove salvare link di ricette e non pianifichi mai i pasti né fai la spesa da una lista. Un semplice ricettario sarà più leggero, ed è del tutto legittimo. Copantry dà il meglio quando vuoi ",
    notForStrong:
      "sprecare meno, pianificare intorno a ciò che hai già e fare una spesa più intelligente",
    notForPost: " — è proprio il compito per cui è nato.",
    faqEyebrow: "Valutazione",
    faqTitle: "La migliore app per il compito? Risposte oneste",
    crumb: "Perché Copantry",
    faqItems: [
      {
        q: "Qual è la migliore app per ridurre lo spreco alimentare in casa?",
        a: "La migliore fa tre cose insieme: tiene traccia di ciò che hai e delle scadenze, ti dice cosa cucinare per consumarlo e ti evita di ricomprarlo. Copantry è costruito proprio intorno a questo ciclo, dove la maggior parte delle app ne copre solo una parte.",
      },
      {
        q: "In cosa Copantry è diverso dalle altre app di pianificazione e dispensa?",
        a: "I pianificatori partono da una settimana vuota. I ricettari salvano link ma non sanno cosa c’è in cucina. Le app per la lista fanno una lista senza pianificare né seguire le scadenze. Copantry collega le tre cose: sa cosa hai, ti dice cosa cucinare prima della scadenza e crea la lista intorno a ciò che manca.",
      },
      {
        q: "Per chi non è adatto Copantry?",
        a: "Se vuoi solo salvare link di ricette e non pianifichi mai né fai la spesa da una lista, un semplice ricettario sarà più leggero. Copantry è per le famiglie che vogliono sprecare meno, pianificare intorno a ciò che hanno e fare una spesa più intelligente.",
      },
      {
        q: "Esiste un pianificatore di pasti che si collega al mio supermercato?",
        a: "Copantry è pensato per portare il tuo piano fino al negozio — raggruppando la lista per reparto e puntando a ordinare ciò che manca dal tuo supermercato — così il piano diventa cibo con il minimo attrito.",
      },
    ],
  },
  es: {
    eyebrow: "En qué se diferencia Copantry",
    h1: "Qué distingue a Copantry de otras apps de comidas y despensa",
    metaTitle: "Por qué Copantry es diferente de otras apps",
    lede: "La mayoría de las apps de cocina hace solo una parte del trabajo. Los planificadores te dan una semana vacía. Los guardarrecetas guardan enlaces pero no conocen tu cocina. Las apps de lista hacen una lista pero no planifican ni controlan caducidades. Copantry conecta las tres: sabe lo que tienes, te dice qué cocinar antes de que caduque y arma tu lista de la compra en torno a lo que falta.",
    catEyebrow: "Por categoría, no por nombre",
    catTitle: "Dónde se quedan cortas otras clases de apps",
    catLede:
      "No nombramos competidores — las funciones cambian y las comparaciones caducan. En su lugar, así se sitúa Copantry frente a las grandes categorías de apps que la gente usa hoy.",
    goodAt: "Bueno en:",
    theGap: "El hueco:",
    categories: [
      {
        name: "Planificadores centrados en el calendario",
        fair: "Geniales si ya sabes exactamente qué cocinar y solo necesitas dónde programarlo.",
        gap: "Te dejan una semana vacía que llenar, sin saber qué hay en tu cocina ni qué está a punto de estropearse.",
      },
      {
        name: "Guardarrecetas y recetarios",
        fair: "Estupendos para coleccionar las recetas que te gustan — más simples que Copantry si solo necesitas guardar páginas.",
        gap: "Guardan recetas pero no conocen tu despensa, así que no pueden decirte qué cocinar antes de que caduque ni qué comprar.",
      },
      {
        name: "Apps de lista de la compra básicas",
        fair: "Rápidas y cómodas para anotar lo que te falta cuando lo recuerdas.",
        gap: "Hacen una lista pero no planifican comidas ni controlan caducidades: siguen los duplicados y la comida olvidada.",
      },
    ],
    matrixEyebrow: "Cara a cara",
    matrixTitle: "Todo el ciclo de la cocina, en un solo sitio",
    capability: "Capacidad",
    matrix: [
      "Controla qué hay en tu cocina y cuándo caduca",
      "Te dice qué cocinar antes de que la comida se estropee",
      "Planifica la semana en torno a lo que ya tienes",
      "Arma una lista de la compra solo con lo que falta",
      "Plan, lista y despensa compartidos en el hogar",
      "Funciona en doce idiomas",
    ],
    legendBuilt: "Hecho para esto",
    legendSometimes: "A veces / en parte",
    legendNot: "En realidad no",
    notForTitle: "Copantry seguramente no es para ti si…",
    notForPre:
      "…lo único que quieres es un sitio para guardar enlaces de recetas y nunca planificas comidas ni compras desde una lista. Un simple guardarrecetas será más ligero, y eso está perfectamente bien. Copantry se gana su lugar cuando quieres ",
    notForStrong:
      "desperdiciar menos, planificar en torno a lo que ya tienes y comprar de forma más inteligente",
    notForPost: " — ese es el trabajo para el que está hecho.",
    faqEyebrow: "Evaluación",
    faqTitle: "¿La mejor app para el trabajo? Respuestas honestas",
    crumb: "Por qué Copantry",
    faqItems: [
      {
        q: "¿Cuál es la mejor app para reducir el desperdicio de comida en casa?",
        a: "La mejor hace tres cosas a la vez: controla lo que tienes y sus caducidades, te dice qué cocinar para gastarlo y evita que lo vuelvas a comprar. Copantry está construido justo en torno a ese ciclo, donde la mayoría de las apps solo cubre una parte.",
      },
      {
        q: "¿En qué se diferencia Copantry de otras apps de planificación y despensa?",
        a: "Los planificadores parten de una semana vacía. Los guardarrecetas guardan enlaces pero no saben qué hay en tu cocina. Las apps de lista hacen una lista sin planificar ni controlar caducidades. Copantry conecta las tres: sabe lo que tienes, te dice qué cocinar antes de que caduque y arma la lista en torno a lo que falta.",
      },
      {
        q: "¿Para quién no es Copantry?",
        a: "Si solo quieres guardar enlaces de recetas y nunca planificas ni compras desde una lista, un simple guardarrecetas será más ligero. Copantry es para hogares que quieren desperdiciar menos, planificar en torno a lo que tienen y comprar de forma más inteligente.",
      },
      {
        q: "¿Existe un planificador de comidas que se conecte con mi supermercado?",
        a: "Copantry está pensado para llevar tu plan hasta la tienda — agrupando la lista por pasillo y apuntando a pedir lo que falta en tu supermercado — para que el plan se convierta en comida con la menor fricción posible.",
      },
    ],
  },
  pt: {
    eyebrow: "Em que o Copantry é diferente",
    h1: "O que distingue o Copantry de outras apps de refeições e despensa",
    metaTitle: "Porque o Copantry é diferente de outras apps",
    lede: "A maioria das apps de cozinha faz apenas uma parte do trabalho. Os planeadores dão-lhe uma semana vazia. Os guarda-receitas guardam ligações mas não conhecem a sua cozinha. As apps de lista fazem uma lista mas não planeiam nem acompanham validades. O Copantry liga as três: sabe o que tem, diz-lhe o que cozinhar antes de expirar e monta a lista de compras em torno do que falta.",
    catEyebrow: "Por categoria, não por nome",
    catTitle: "Onde param os outros tipos de apps",
    catLede:
      "Não nomeamos concorrentes — as funcionalidades mudam e as comparações ficam desatualizadas. Em vez disso, eis como o Copantry se compara às grandes categorias de apps usadas hoje.",
    goodAt: "Bom em:",
    theGap: "A lacuna:",
    categories: [
      {
        name: "Planeadores centrados no calendário",
        fair: "Ótimos se já sabe exatamente o que quer cozinhar e só precisa de onde agendar.",
        gap: "Deixam-lhe uma semana vazia para preencher, sem ideia do que há na sua cozinha ou do que está prestes a estragar-se.",
      },
      {
        name: "Guarda-receitas e cadernos de receitas",
        fair: "Ótimos para colecionar as receitas de que gosta — mais simples que o Copantry se guardar páginas é tudo o que precisa.",
        gap: "Guardam receitas mas não conhecem a sua despensa, por isso não conseguem dizer o que cozinhar antes de expirar nem o que comprar.",
      },
      {
        name: "Apps de lista de compras básicas",
        fair: "Rápidas e úteis para anotar o que lhe falta quando se lembra.",
        gap: "Fazem uma lista mas não planeiam refeições nem acompanham validades: duplicados e comida esquecida continuam a acontecer.",
      },
    ],
    matrixEyebrow: "Lado a lado",
    matrixTitle: "Todo o ciclo da cozinha, num só lugar",
    capability: "Capacidade",
    matrix: [
      "Acompanha o que há na sua cozinha e quando expira",
      "Diz-lhe o que cozinhar antes de a comida se estragar",
      "Planeia a semana em torno do que já tem",
      "Monta uma lista de compras só com o que falta",
      "Plano, lista e despensa partilhados no agregado",
      "Funciona em doze línguas",
    ],
    legendBuilt: "Feito para isto",
    legendSometimes: "Às vezes / em parte",
    legendNot: "Nem por isso",
    notForTitle: "O Copantry provavelmente não é para si se…",
    notForPre:
      "…tudo o que quer é um sítio para guardar ligações de receitas e nunca planeia refeições nem faz compras a partir de uma lista. Um simples guarda-receitas será mais leve, e isso é perfeitamente legítimo. O Copantry ganha o seu lugar quando quer ",
    notForStrong:
      "desperdiçar menos, planear em torno do que já tem e comprar de forma mais inteligente",
    notForPost: " — é precisamente a função para que foi feito.",
    faqEyebrow: "Avaliação",
    faqTitle: "A melhor app para o trabalho? Respostas honestas",
    crumb: "Porquê o Copantry",
    faqItems: [
      {
        q: "Qual é a melhor app para reduzir o desperdício alimentar em casa?",
        a: "A melhor faz três coisas em conjunto: acompanha o que tem e as validades, diz-lhe o que cozinhar para o gastar e evita que o volte a comprar. O Copantry é construído precisamente em torno desse ciclo, onde a maioria das apps só cobre uma parte.",
      },
      {
        q: "Em que é que o Copantry difere de outras apps de planeamento e despensa?",
        a: "Os planeadores partem de uma semana vazia. Os guarda-receitas guardam ligações mas não sabem o que há na cozinha. As apps de lista fazem uma lista sem planear nem acompanhar validades. O Copantry liga as três: sabe o que tem, diz-lhe o que cozinhar antes de expirar e monta a lista em torno do que falta.",
      },
      {
        q: "Para quem não serve o Copantry?",
        a: "Se só quer guardar ligações de receitas e nunca planeia nem compra a partir de uma lista, um simples guarda-receitas será mais leve. O Copantry é para agregados que querem desperdiçar menos, planear em torno do que têm e comprar de forma mais inteligente.",
      },
      {
        q: "Existe um planeador de refeições que se liga ao meu supermercado?",
        a: "O Copantry foi pensado para levar o seu plano até à loja — agrupando a lista por corredor e visando encomendar o que falta no seu supermercado — para que o plano se transforme em comida com o mínimo de atrito.",
      },
    ],
  },
  de: {
    eyebrow: "Worin sich Copantry unterscheidet",
    h1: "Was Copantry von anderen Essens- und Vorrats-Apps unterscheidet",
    metaTitle: "Warum Copantry anders ist als andere Apps",
    lede: "Die meisten Küchen-Apps erledigen nur einen Teil der Arbeit. Kalender-Planer geben dir eine leere Woche. Rezeptsammler speichern Links, kennen aber deine Küche nicht. Listen-Apps machen eine Liste, planen aber nicht und verfolgen keine Ablaufdaten. Copantry verbindet alle drei: Es weiß, was du hast, sagt dir, was du vor dem Ablauf kochen solltest, und baut deine Einkaufsliste rund um die Lücken auf.",
    catEyebrow: "Nach Kategorie, nicht nach Namen",
    catTitle: "Wo andere Arten von Apps aufhören",
    catLede:
      "Wir nennen keine Konkurrenten — Funktionen ändern sich und Vergleiche veralten. Stattdessen hier, wie sich Copantry zu den großen Kategorien heute genutzter Apps verhält.",
    goodAt: "Gut für:",
    theGap: "Die Lücke:",
    categories: [
      {
        name: "Kalender-orientierte Essensplaner",
        fair: "Super, wenn du schon genau weißt, was du kochen willst, und nur einen Ort zum Planen brauchst.",
        gap: "Sie geben dir eine leere Woche zum Füllen — ohne zu wissen, was in deiner Küche ist oder bald schlecht wird.",
      },
      {
        name: "Rezeptsammler & Rezeptboxen",
        fair: "Schön, um Rezepte zu sammeln, die dir gefallen — einfacher als Copantry, wenn dir Lesezeichen genügen.",
        gap: "Sie speichern Rezepte, kennen aber deine Vorräte nicht und können dir daher nicht sagen, was du vor dem Ablauf kochen oder kaufen sollst.",
      },
      {
        name: "Einfache Einkaufslisten-Apps",
        fair: "Schnell und praktisch, um aufzuschreiben, was gerade fehlt.",
        gap: "Sie machen eine Liste, planen aber keine Mahlzeiten und verfolgen keine Ablaufdaten: Doppelkäufe und vergessenes Essen bleiben.",
      },
    ],
    matrixEyebrow: "Direkt verglichen",
    matrixTitle: "Der ganze Küchenkreislauf, an einem Ort",
    capability: "Fähigkeit",
    matrix: [
      "Verfolgt, was in deiner Küche ist und wann es abläuft",
      "Sagt dir, was du kochen sollst, bevor Essen schlecht wird",
      "Plant eine Woche rund um das, was du schon hast",
      "Erstellt eine Einkaufsliste nur mit den Lücken",
      "Geteilter Haushaltsplan, -liste & -vorrat",
      "Funktioniert in zwölf Sprachen",
    ],
    legendBuilt: "Dafür gemacht",
    legendSometimes: "Manchmal / teils",
    legendNot: "Eher nicht",
    notForTitle: "Copantry ist wahrscheinlich nichts für dich, wenn…",
    notForPre:
      "…du nur einen Ort suchst, um Rezept-Links zu speichern, und nie Mahlzeiten planst oder von einer Liste einkaufst. Ein einfacher Rezeptsammler ist dann leichter, und das ist völlig in Ordnung. Copantry verdient seinen Platz, wenn du ",
    notForStrong:
      "weniger verschwenden, rund um das Vorhandene planen und klüger einkaufen",
    notForPost: " willst — genau dafür ist es gebaut.",
    faqEyebrow: "Bewertung",
    faqTitle: "Die beste App für den Job? Ehrliche Antworten",
    crumb: "Warum Copantry",
    faqItems: [
      {
        q: "Welche App eignet sich am besten, um Lebensmittelverschwendung zu Hause zu reduzieren?",
        a: "Die beste erledigt drei Dinge zugleich: Sie verfolgt, was du hast und wann es abläuft, sagt dir, was du kochen sollst, um es aufzubrauchen, und verhindert den Neukauf. Copantry ist genau um diesen Kreislauf herum gebaut, wo die meisten Apps nur einen Teil abdecken.",
      },
      {
        q: "Wie unterscheidet sich Copantry von anderen Planungs- und Vorrats-Apps?",
        a: "Planer starten mit einer leeren Woche. Rezeptsammler speichern Links, wissen aber nicht, was in der Küche ist. Listen-Apps machen eine Liste, ohne zu planen oder Ablaufdaten zu verfolgen. Copantry verbindet alle drei: Es weiß, was du hast, sagt dir, was du vor dem Ablauf kochen sollst, und baut die Liste rund um die Lücken auf.",
      },
      {
        q: "Für wen ist Copantry nicht gedacht?",
        a: "Wenn du nur Rezept-Links speichern willst und nie planst oder von einer Liste einkaufst, ist ein einfacher Rezeptsammler leichter. Copantry ist für Haushalte, die weniger verschwenden, rund um Vorhandenes planen und klüger einkaufen wollen.",
      },
      {
        q: "Gibt es einen Essensplaner, der sich mit meinem Supermarkt verbindet?",
        a: "Copantry ist darauf ausgelegt, deinen Plan bis ins Geschäft zu bringen — die Liste nach Gang gruppiert und mit dem Ziel, die Lücken bei deinem Supermarkt zu bestellen — damit aus dem Plan mit möglichst wenig Reibung Essen wird.",
      },
    ],
  },
  nl: {
    eyebrow: "Waarin Copantry verschilt",
    h1: "Wat Copantry anders maakt dan andere maaltijd- en voorraad-apps",
    metaTitle: "Waarom Copantry anders is dan andere apps",
    lede: "De meeste keuken-apps doen maar een deel van het werk. Agendaplanners geven je een lege week. Receptverzamelaars bewaren links, maar kennen je keuken niet. Lijst-apps maken een lijst, maar plannen niets en houden geen houdbaarheid bij. Copantry verbindt alle drie: het weet wat je hebt, vertelt je wat je moet koken voordat het bederft, en bouwt je boodschappenlijst rond de gaten.",
    catEyebrow: "Per categorie, niet per naam",
    catTitle: "Waar andere soorten apps ophouden",
    catLede:
      "We noemen geen concurrenten — functies veranderen en vergelijkingen verouderen. In plaats daarvan: zo verhoudt Copantry zich tot de grote categorieën apps die mensen vandaag gebruiken.",
    goodAt: "Goed voor:",
    theGap: "Het gat:",
    categories: [
      {
        name: "Agendagerichte maaltijdplanners",
        fair: "Prima als je al precies weet wat je wilt koken en alleen een plek nodig hebt om het te plannen.",
        gap: "Ze geven je een lege week om te vullen — zonder te weten wat er in je keuken ligt of wat bijna bederft.",
      },
      {
        name: "Receptverzamelaars en receptendozen",
        fair: "Fijn om recepten te bewaren die je aanspreken — eenvoudiger dan Copantry als bladwijzers genoeg zijn.",
        gap: "Ze bewaren recepten, maar kennen je voorraad niet en kunnen je dus niet zeggen wat je moet koken of kopen voordat iets bederft.",
      },
      {
        name: "Eenvoudige boodschappenlijst-apps",
        fair: "Snel en praktisch om op te schrijven wat er nu op is.",
        gap: "Ze maken een lijst, maar plannen geen maaltijden en houden geen data bij: dubbele aankopen en vergeten eten blijven.",
      },
    ],
    matrixEyebrow: "Naast elkaar",
    matrixTitle: "De hele keukenkringloop, op één plek",
    capability: "Mogelijkheid",
    matrix: [
      "Houdt bij wat er in je keuken ligt en wanneer het over de datum gaat",
      "Vertelt je wat je moet koken voordat eten bederft",
      "Plant een week rond wat je al hebt",
      "Maakt een boodschappenlijst van alleen de gaten",
      "Gedeelde planning, lijst en voorraad voor het huishouden",
      "Werkt in twaalf talen",
    ],
    legendBuilt: "Daarvoor gemaakt",
    legendSometimes: "Soms / deels",
    legendNot: "Meestal niet",
    notForTitle: "Copantry is waarschijnlijk niets voor jou als…",
    notForPre:
      "…je alleen een plek zoekt om receptlinks te bewaren en nooit maaltijden plant of met een lijst boodschappen doet. Een eenvoudige receptverzamelaar is dan lichter, en dat is prima. Copantry verdient zijn plek als je ",
    notForStrong:
      "minder wilt verspillen, wilt plannen rond wat je hebt en slimmer wilt inkopen",
    notForPost: " — daar is het precies voor gebouwd.",
    faqEyebrow: "Afweging",
    faqTitle: "De beste app voor de klus? Eerlijke antwoorden",
    crumb: "Waarom Copantry",
    faqItems: [
      {
        q: "Welke app is het beste om thuis voedselverspilling te verminderen?",
        a: "De beste doet drie dingen tegelijk: bijhouden wat je hebt en wanneer het over de datum gaat, je vertellen wat je moet koken om het op te maken, en voorkomen dat je het opnieuw koopt. Copantry is precies rond die kringloop gebouwd, waar de meeste apps maar één deel dekken.",
      },
      {
        q: "Waarin verschilt Copantry van andere planners en voorraad-apps?",
        a: "Planners beginnen met een lege week. Receptverzamelaars bewaren links, maar weten niet wat er in de keuken ligt. Lijst-apps maken een lijst zonder te plannen of houdbaarheid bij te houden. Copantry verbindt alle drie: het weet wat je hebt, vertelt je wat je moet koken voordat het bederft, en bouwt de lijst rond de gaten.",
      },
      {
        q: "Voor wie is Copantry niet bedoeld?",
        a: "Als je alleen receptlinks wilt bewaren en nooit plant of met een lijst boodschappen doet, is een eenvoudige receptverzamelaar lichter. Copantry is voor huishoudens die minder willen verspillen, willen plannen rond wat ze hebben en slimmer willen inkopen.",
      },
      {
        q: "Bestaat er een maaltijdplanner die met mijn supermarkt werkt?",
        a: "Copantry is erop gebouwd je planning tot in de winkel te brengen — de lijst gegroepeerd per schap en gericht op het bestellen van de gaten bij je supermarkt — zodat een plan met zo min mogelijk wrijving eten wordt.",
      },
    ],
  },
  sv: {
    eyebrow: "Så skiljer sig Copantry",
    h1: "Vad som gör Copantry annorlunda än andra mat- och skafferiappar",
    metaTitle: "Varför Copantry är annorlunda än andra appar",
    lede: "De flesta köksappar gör bara en del av jobbet. Kalenderplanerare ger dig en tom vecka. Receptsamlare sparar länkar men känner inte ditt kök. Listappar gör en lista men planerar inget och håller inte koll på hållbarhet. Copantry knyter ihop alla tre: den vet vad du har, säger vad du ska laga innan det blir för gammalt och bygger din inköpslista kring luckorna.",
    catEyebrow: "Efter kategori, inte efter namn",
    catTitle: "Där andra typer av appar tar slut",
    catLede:
      "Vi namnger inga konkurrenter — funktioner ändras och jämförelser blir gamla. I stället: så förhåller sig Copantry till de stora kategorier av appar folk använder i dag.",
    goodAt: "Bra för:",
    theGap: "Luckan:",
    categories: [
      {
        name: "Kalenderdrivna måltidsplanerare",
        fair: "Utmärkta om du redan vet exakt vad du vill laga och bara behöver en plats att planera på.",
        gap: "De ger dig en tom vecka att fylla — utan att veta vad du har i köket eller vad som snart blir dåligt.",
      },
      {
        name: "Receptsamlare och receptlådor",
        fair: "Trevliga för att samla recept du gillar — enklare än Copantry om bokmärken räcker.",
        gap: "De sparar recept men känner inte ditt skafferi och kan därför inte säga vad du ska laga eller handla innan något blir dåligt.",
      },
      {
        name: "Enkla inköpslisteappar",
        fair: "Snabba och praktiska för att skriva ner vad som är slut just nu.",
        gap: "De gör en lista men planerar inga måltider och håller inte koll på datum: dubbelköp och bortglömd mat finns kvar.",
      },
    ],
    matrixEyebrow: "Sida vid sida",
    matrixTitle: "Hela kökets kretslopp, på ett ställe",
    capability: "Förmåga",
    matrix: [
      "Håller koll på vad du har i köket och när det går ut",
      "Säger vad du ska laga innan maten blir dålig",
      "Planerar en vecka kring det du redan har",
      "Bygger en inköpslista med bara luckorna",
      "Delad plan, lista och skafferi för hushållet",
      "Fungerar på tolv språk",
    ],
    legendBuilt: "Byggt för det",
    legendSometimes: "Ibland / delvis",
    legendNot: "Oftast inte",
    notForTitle: "Copantry är förmodligen inget för dig om…",
    notForPre:
      "…du bara söker en plats att spara receptlänkar på och aldrig planerar måltider eller handlar efter en lista. En enkel receptsamlare är då lättare, och det är helt okej. Copantry gör sig förtjänt av sin plats när du vill ",
    notForStrong: "slänga mindre, planera kring det du har och handla klokare",
    notForPost: " — det är precis vad det är byggt för.",
    faqEyebrow: "Bedömning",
    faqTitle: "Bästa appen för jobbet? Ärliga svar",
    crumb: "Varför Copantry",
    faqItems: [
      {
        q: "Vilken app är bäst för att minska matsvinnet hemma?",
        a: "Den bästa gör tre saker samtidigt: håller koll på vad du har och när det går ut, säger vad du ska laga för att använda upp det, och hindrar dig från att köpa det igen. Copantry är byggt just kring det kretsloppet, där de flesta appar bara täcker en del.",
      },
      {
        q: "Hur skiljer sig Copantry från andra planerings- och skafferiappar?",
        a: "Planerare startar med en tom vecka. Receptsamlare sparar länkar men vet inte vad som finns i köket. Listappar gör en lista utan att planera eller hålla koll på datum. Copantry knyter ihop alla tre: den vet vad du har, säger vad du ska laga innan det blir dåligt och bygger listan kring luckorna.",
      },
      {
        q: "Vem är Copantry inte tänkt för?",
        a: "Om du bara vill spara receptlänkar och aldrig planerar eller handlar efter en lista är en enkel receptsamlare lättare. Copantry är för hushåll som vill slänga mindre, planera kring det de har och handla klokare.",
      },
      {
        q: "Finns det en måltidsplanerare som kopplar ihop med min matbutik?",
        a: "Copantry är byggt för att ta din plan hela vägen in i butiken — listan grupperad efter avdelning och med sikte på att beställa luckorna hos din matbutik — så att en plan blir mat med minsta möjliga friktion.",
      },
    ],
  },
  da: {
    eyebrow: "Sådan adskiller Copantry sig",
    h1: "Det, der gør Copantry anderledes end andre mad- og spisekammerapps",
    metaTitle: "Hvorfor Copantry er anderledes end andre apps",
    lede: "De fleste køkkenapps klarer kun en del af arbejdet. Kalenderplanlæggere giver dig en tom uge. Opskriftssamlere gemmer links, men kender ikke dit køkken. Listeapps laver en liste, men planlægger ikke og holder ikke styr på holdbarhed. Copantry binder alle tre sammen: den ved, hvad du har, fortæller dig, hvad du skal lave, før det udløber, og bygger din indkøbsliste omkring hullerne.",
    catEyebrow: "Efter kategori, ikke efter navn",
    catTitle: "Der, hvor andre typer apps stopper",
    catLede:
      "Vi nævner ingen konkurrenter — funktioner ændrer sig, og sammenligninger bliver forældede. I stedet: sådan forholder Copantry sig til de store kategorier af apps, folk bruger i dag.",
    goodAt: "God til:",
    theGap: "Hullet:",
    categories: [
      {
        name: "Kalenderbaserede madplanlæggere",
        fair: "Fine, hvis du allerede ved præcis, hvad du vil lave, og bare mangler et sted at planlægge det.",
        gap: "De giver dig en tom uge at fylde — uden at vide, hvad du har i køkkenet, eller hvad der snart bliver dårligt.",
      },
      {
        name: "Opskriftssamlere og opskriftskasser",
        fair: "Rare til at samle opskrifter, du kan lide — enklere end Copantry, hvis bogmærker er nok.",
        gap: "De gemmer opskrifter, men kender ikke dit spisekammer og kan derfor ikke sige, hvad du skal lave eller købe, før noget bliver dårligt.",
      },
      {
        name: "Enkle indkøbslisteapps",
        fair: "Hurtige og praktiske til at skrive ned, hvad der er sluppet op lige nu.",
        gap: "De laver en liste, men planlægger ikke måltider og holder ikke styr på datoer: dobbeltkøb og glemt mad bliver ved.",
      },
    ],
    matrixEyebrow: "Side om side",
    matrixTitle: "Hele køkkenets kredsløb, ét sted",
    capability: "Funktion",
    matrix: [
      "Holder styr på, hvad du har i køkkenet, og hvornår det udløber",
      "Fortæller dig, hvad du skal lave, før maden bliver dårlig",
      "Planlægger en uge omkring det, du allerede har",
      "Bygger en indkøbsliste med kun hullerne",
      "Delt plan, liste og spisekammer for husstanden",
      "Virker på tolv sprog",
    ],
    legendBuilt: "Bygget til det",
    legendSometimes: "Nogle gange / delvist",
    legendNot: "Som regel ikke",
    notForTitle: "Copantry er nok ikke noget for dig, hvis…",
    notForPre:
      "…du bare leder efter et sted at gemme opskriftslinks og aldrig planlægger måltider eller handler efter en liste. En enkel opskriftssamler er så lettere, og det er helt fint. Copantry gør sig fortjent til sin plads, når du vil ",
    notForStrong:
      "smide mindre ud, planlægge ud fra det, du har, og handle klogere",
    notForPost: " — det er præcis det, den er bygget til.",
    faqEyebrow: "Vurdering",
    faqTitle: "Den bedste app til opgaven? Ærlige svar",
    crumb: "Hvorfor Copantry",
    faqItems: [
      {
        q: "Hvilken app er bedst til at mindske madspild derhjemme?",
        a: "Den bedste gør tre ting på én gang: holder styr på, hvad du har, og hvornår det udløber, fortæller dig, hvad du skal lave for at bruge det op, og forhindrer dig i at købe det igen. Copantry er bygget netop omkring det kredsløb, hvor de fleste apps kun dækker en del.",
      },
      {
        q: "Hvordan adskiller Copantry sig fra andre planlægnings- og spisekammerapps?",
        a: "Planlæggere starter med en tom uge. Opskriftssamlere gemmer links, men ved ikke, hvad der er i køkkenet. Listeapps laver en liste uden at planlægge eller holde styr på datoer. Copantry binder alle tre sammen: den ved, hvad du har, fortæller dig, hvad du skal lave, før det bliver dårligt, og bygger listen omkring hullerne.",
      },
      {
        q: "Hvem er Copantry ikke tænkt til?",
        a: "Hvis du bare vil gemme opskriftslinks og aldrig planlægger eller handler efter en liste, er en enkel opskriftssamler lettere. Copantry er til husstande, der vil smide mindre ud, planlægge ud fra det, de har, og handle klogere.",
      },
      {
        q: "Findes der en madplanlægger, der spiller sammen med mit supermarked?",
        a: "Copantry er bygget til at tage din plan hele vejen ind i butikken — listen grupperet efter afdeling og med sigte på at bestille hullerne hos dit supermarked — så en plan bliver til mad med mindst mulig friktion.",
      },
    ],
  },
  fi: {
    eyebrow: "Näin Copantry eroaa muista",
    h1: "Mikä tekee Copantrysta erilaisen kuin muut ruoka- ja ruokakomerosovellukset",
    metaTitle: "Miksi Copantry on erilainen kuin muut sovellukset",
    lede: "Useimmat keittiösovellukset hoitavat vain osan työstä. Kalenteripohjaiset suunnittelijat antavat sinulle tyhjän viikon. Reseptikokoelmat tallentavat linkkejä mutta eivät tunne keittiötäsi. Listasovellukset tekevät listan mutta eivät suunnittele eivätkä seuraa säilyvyyttä. Copantry sitoo kaikki kolme yhteen: se tietää, mitä sinulla on, kertoo mitä laittaa ennen vanhenemista, ja rakentaa ostoslistasi aukkojen ympärille.",
    catEyebrow: "Luokittain, ei nimeltä",
    catTitle: "Siellä, missä muut sovellustyypit loppuvat",
    catLede:
      "Emme mainitse kilpailijoita nimeltä — ominaisuudet muuttuvat ja vertailut vanhenevat. Sen sijaan: näin Copantry suhteutuu niihin suuriin sovellusluokkiin, joita ihmiset käyttävät tänään.",
    goodAt: "Hyvä tähän:",
    theGap: "Aukko:",
    categories: [
      {
        name: "Kalenterivetoiset ateriasuunnittelijat",
        fair: "Loistavia, jos tiedät jo tarkalleen mitä haluat laittaa ja tarvitset vain paikan suunnitella se.",
        gap: "Ne antavat sinulle tyhjän viikon täytettäväksi — tietämättä, mitä keittiössäsi on tai mikä on pilaantumassa.",
      },
      {
        name: "Reseptikokoelmat ja reseptilaatikot",
        fair: "Mukavia keräämään reseptejä, joista pidät — yksinkertaisempia kuin Copantry, jos kirjanmerkit riittävät.",
        gap: "Ne tallentavat reseptejä mutta eivät tunne ruokakomeroasi, joten ne eivät voi kertoa, mitä laittaa tai ostaa ennen kuin jokin pilaantuu.",
      },
      {
        name: "Yksinkertaiset ostoslistasovellukset",
        fair: "Nopeita ja käteviä kirjaamaan, mikä on juuri nyt loppu.",
        gap: "Ne tekevät listan mutta eivät suunnittele aterioita eivätkä seuraa päiväyksiä: tuplaostokset ja unohtunut ruoka jäävät.",
      },
    ],
    matrixEyebrow: "Rinnakkain",
    matrixTitle: "Koko keittiön kierto yhdessä paikassa",
    capability: "Ominaisuus",
    matrix: [
      "Seuraa, mitä keittiössäsi on ja milloin se vanhenee",
      "Kertoo, mitä laittaa ennen kuin ruoka pilaantuu",
      "Suunnittelee viikon sen ympärille, mitä sinulla jo on",
      "Kokoaa ostoslistan vain aukoista",
      "Jaettu suunnitelma, lista ja ruokakomero koko taloudelle",
      "Toimii kahdellatoista kielellä",
    ],
    legendBuilt: "Tähän tehty",
    legendSometimes: "Joskus / osittain",
    legendNot: "Yleensä ei",
    notForTitle: "Copantry ei luultavasti ole sinua varten, jos…",
    notForPre:
      "…etsit vain paikkaa tallentaa reseptilinkkejä etkä koskaan suunnittele aterioita tai tee ostoksia listan mukaan. Yksinkertainen reseptikokoelma on silloin kevyempi, ja se on aivan hyvä. Copantry ansaitsee paikkansa, kun haluat ",
    notForStrong:
      "vähentää hävikkiä, suunnitella sen ympärille mitä sinulla on ja ostaa fiksummin",
    notForPost: " — juuri siihen se on rakennettu.",
    faqEyebrow: "Arvio",
    faqTitle: "Paras sovellus tähän hommaan? Rehelliset vastaukset",
    crumb: "Miksi Copantry",
    faqItems: [
      {
        q: "Mikä sovellus on paras ruokahävikin vähentämiseen kotona?",
        a: "Paras tekee kolme asiaa yhtä aikaa: seuraa, mitä sinulla on ja milloin se vanhenee, kertoo mitä laittaa sen käyttämiseksi, ja estää sinua ostamasta sitä uudelleen. Copantry on rakennettu juuri tuon kierron ympärille, kun useimmat sovellukset kattavat siitä vain osan.",
      },
      {
        q: "Miten Copantry eroaa muista suunnittelu- ja ruokakomerosovelluksista?",
        a: "Suunnittelijat aloittavat tyhjästä viikosta. Reseptikokoelmat tallentavat linkkejä mutta eivät tiedä, mitä keittiössä on. Listasovellukset tekevät listan suunnittelematta ja päiväyksiä seuraamatta. Copantry sitoo kaikki kolme yhteen: se tietää mitä sinulla on, kertoo mitä laittaa ennen vanhenemista, ja rakentaa listan aukkojen ympärille.",
      },
      {
        q: "Kenelle Copantry ei ole tarkoitettu?",
        a: "Jos haluat vain tallentaa reseptilinkkejä etkä koskaan suunnittele tai osta listan mukaan, yksinkertainen reseptikokoelma on kevyempi. Copantry on talouksille, jotka haluavat vähentää hävikkiä, suunnitella olemassa olevan ympärille ja ostaa fiksummin.",
      },
      {
        q: "Onko olemassa ateriasuunnittelijaa, joka toimii yhdessä kauppani kanssa?",
        a: "Copantry on rakennettu viemään suunnitelmasi kauppaan asti — lista ryhmiteltynä hyllyjen mukaan ja tähtäimessä aukkojen tilaaminen omasta kaupastasi — jotta suunnitelmasta tulee ruokaa mahdollisimman vähällä kitkalla.",
      },
    ],
  },
  no: {
    eyebrow: "Slik skiller Copantry seg ut",
    h1: "Det som gjør Copantry annerledes enn andre mat- og spiskammerapper",
    metaTitle: "Hvorfor Copantry er annerledes enn andre apper",
    lede: "De fleste kjøkkenapper gjør bare en del av jobben. Kalenderplanleggere gir deg en tom uke. Oppskriftssamlere lagrer lenker, men kjenner ikke kjøkkenet ditt. Listeapper lager en liste, men planlegger ikke og følger ikke med på holdbarhet. Copantry knytter alle tre sammen: den vet hva du har, forteller deg hva du bør lage før det går ut, og bygger handlelisten din rundt hullene.",
    catEyebrow: "Etter kategori, ikke etter navn",
    catTitle: "Der andre typer apper stopper",
    catLede:
      "Vi nevner ingen konkurrenter — funksjoner endrer seg, og sammenligninger blir utdaterte. I stedet: slik forholder Copantry seg til de store kategoriene av apper folk bruker i dag.",
    goodAt: "Bra til:",
    theGap: "Hullet:",
    categories: [
      {
        name: "Kalenderdrevne måltidsplanleggere",
        fair: "Fine hvis du allerede vet nøyaktig hva du vil lage og bare trenger et sted å planlegge det.",
        gap: "De gir deg en tom uke å fylle — uten å vite hva du har på kjøkkenet eller hva som snart blir dårlig.",
      },
      {
        name: "Oppskriftssamlere og oppskriftsbokser",
        fair: "Fine til å samle oppskrifter du liker — enklere enn Copantry hvis bokmerker holder.",
        gap: "De lagrer oppskrifter, men kjenner ikke spiskammeret ditt og kan derfor ikke si hva du bør lage eller kjøpe før noe blir dårlig.",
      },
      {
        name: "Enkle handlelisteapper",
        fair: "Raske og praktiske til å skrive ned hva som er tomt akkurat nå.",
        gap: "De lager en liste, men planlegger ikke måltider og følger ikke med på datoer: dobbeltkjøp og glemt mat blir værende.",
      },
    ],
    matrixEyebrow: "Side om side",
    matrixTitle: "Hele kjøkkenets kretsløp, på ett sted",
    capability: "Funksjon",
    matrix: [
      "Holder oversikt over hva du har på kjøkkenet og når det går ut",
      "Forteller deg hva du bør lage før maten blir dårlig",
      "Planlegger en uke rundt det du allerede har",
      "Bygger en handleliste med bare hullene",
      "Delt plan, liste og spiskammer for husholdningen",
      "Virker på tolv språk",
    ],
    legendBuilt: "Laget for det",
    legendSometimes: "Iblant / delvis",
    legendNot: "Som regel ikke",
    notForTitle: "Copantry er nok ikke noe for deg hvis…",
    notForPre:
      "…du bare leter etter et sted å lagre oppskriftslenker og aldri planlegger måltider eller handler etter en liste. En enkel oppskriftssamler er da lettere, og det er helt greit. Copantry gjør seg fortjent til plassen sin når du vil ",
    notForStrong:
      "kaste mindre, planlegge ut fra det du har og handle smartere",
    notForPost: " — det er nettopp det den er bygget for.",
    faqEyebrow: "Vurdering",
    faqTitle: "Den beste appen til jobben? Ærlige svar",
    crumb: "Hvorfor Copantry",
    faqItems: [
      {
        q: "Hvilken app er best for å redusere matsvinn hjemme?",
        a: "Den beste gjør tre ting samtidig: holder oversikt over hva du har og når det går ut, forteller deg hva du bør lage for å bruke det opp, og hindrer deg i å kjøpe det på nytt. Copantry er bygget nettopp rundt det kretsløpet, mens de fleste apper bare dekker en del.",
      },
      {
        q: "Hvordan skiller Copantry seg fra andre planleggings- og spiskammerapper?",
        a: "Planleggere starter med en tom uke. Oppskriftssamlere lagrer lenker, men vet ikke hva som er på kjøkkenet. Listeapper lager en liste uten å planlegge eller følge med på datoer. Copantry knytter alle tre sammen: den vet hva du har, forteller deg hva du bør lage før det blir dårlig, og bygger listen rundt hullene.",
      },
      {
        q: "Hvem er Copantry ikke ment for?",
        a: "Hvis du bare vil lagre oppskriftslenker og aldri planlegger eller handler etter en liste, er en enkel oppskriftssamler lettere. Copantry er for husholdninger som vil kaste mindre, planlegge ut fra det de har og handle smartere.",
      },
      {
        q: "Finnes det en måltidsplanlegger som spiller på lag med butikken min?",
        a: "Copantry er bygget for å ta planen din helt inn i butikken — listen gruppert etter avdeling og med sikte på å bestille hullene hos butikken din — så en plan blir til mat med minst mulig friksjon.",
      },
    ],
  },
  pl: {
    eyebrow: "Czym Copantry się różni",
    h1: "Co odróżnia Copantry od innych aplikacji do posiłków i spiżarni",
    metaTitle: "Dlaczego Copantry różni się od innych aplikacji",
    lede: "Większość aplikacji kuchennych wykonuje tylko część pracy. Plannery kalendarzowe dają ci pusty tydzień. Kolekcje przepisów zapisują linki, ale nie znają twojej kuchni. Aplikacje z listami układają listę, ale nie planują i nie pilnują terminów. Copantry łączy wszystkie trzy: wie, co masz, mówi, co ugotować, zanim skończy się termin, i buduje listę zakupów wokół braków.",
    catEyebrow: "Według kategorii, nie według nazwy",
    catTitle: "Tam, gdzie inne rodzaje aplikacji się kończą",
    catLede:
      "Nie wymieniamy konkurentów — funkcje się zmieniają, a porównania szybko się starzeją. Zamiast tego: oto jak Copantry wypada na tle głównych kategorii aplikacji używanych dzisiaj.",
    goodAt: "Dobre do:",
    theGap: "Luka:",
    categories: [
      {
        name: "Plannery posiłków oparte na kalendarzu",
        fair: "Świetne, jeśli już dokładnie wiesz, co chcesz ugotować, i potrzebujesz tylko miejsca, żeby to zaplanować.",
        gap: "Dają ci pusty tydzień do wypełnienia — nie wiedząc, co masz w kuchni ani co niedługo się zepsuje.",
      },
      {
        name: "Kolekcje przepisów i pudełka z przepisami",
        fair: "Przyjemne do zbierania przepisów, które ci się podobają — prostsze niż Copantry, jeśli wystarczą zakładki.",
        gap: "Zapisują przepisy, ale nie znają twojej spiżarni, więc nie powiedzą, co ugotować ani co kupić, zanim coś się zepsuje.",
      },
      {
        name: "Proste aplikacje z listą zakupów",
        fair: "Szybkie i praktyczne do zapisania, czego akurat zabrakło.",
        gap: "Układają listę, ale nie planują posiłków i nie pilnują terminów: podwójne zakupy i zapomniane jedzenie zostają.",
      },
    ],
    matrixEyebrow: "Obok siebie",
    matrixTitle: "Cały kuchenny obieg w jednym miejscu",
    capability: "Możliwość",
    matrix: [
      "Śledzi, co masz w kuchni i kiedy kończy się termin",
      "Mówi, co ugotować, zanim jedzenie się zepsuje",
      "Planuje tydzień wokół tego, co już masz",
      "Układa listę zakupów wyłącznie z braków",
      "Wspólny plan, lista i spiżarnia dla całego gospodarstwa",
      "Działa w dwunastu językach",
    ],
    legendBuilt: "Po to powstało",
    legendSometimes: "Czasem / częściowo",
    legendNot: "Zwykle nie",
    notForTitle: "Copantry pewnie nie jest dla ciebie, jeśli…",
    notForPre:
      "…szukasz tylko miejsca na linki do przepisów i nigdy nie planujesz posiłków ani nie robisz zakupów z listy. Prosta kolekcja przepisów będzie wtedy lżejsza — i to zupełnie w porządku. Copantry zasługuje na swoje miejsce, gdy chcesz ",
    notForStrong:
      "marnować mniej, planować wokół tego, co masz, i kupować mądrzej",
    notForPost: " — właśnie do tego zostało zbudowane.",
    faqEyebrow: "Ocena",
    faqTitle: "Najlepsza aplikacja do tego zadania? Szczere odpowiedzi",
    crumb: "Dlaczego Copantry",
    faqItems: [
      {
        q: "Która aplikacja najlepiej pomaga ograniczyć marnowanie jedzenia w domu?",
        a: "Najlepsza robi trzy rzeczy naraz: śledzi, co masz i kiedy kończy się termin, mówi, co ugotować, żeby to zużyć, i nie pozwala kupić tego ponownie. Copantry powstało właśnie wokół tego obiegu, podczas gdy większość aplikacji obejmuje tylko jego część.",
      },
      {
        q: "Czym Copantry różni się od innych plannerów i aplikacji do spiżarni?",
        a: "Plannery zaczynają od pustego tygodnia. Kolekcje przepisów zapisują linki, ale nie wiedzą, co jest w kuchni. Aplikacje z listami układają listę bez planowania i bez pilnowania terminów. Copantry łączy wszystkie trzy: wie, co masz, mówi, co ugotować, zanim się zepsuje, i buduje listę wokół braków.",
      },
      {
        q: "Dla kogo Copantry nie jest przeznaczone?",
        a: "Jeśli chcesz tylko zapisywać linki do przepisów i nigdy nie planujesz ani nie kupujesz z listy, prosta kolekcja przepisów będzie lżejsza. Copantry jest dla gospodarstw, które chcą marnować mniej, planować wokół tego, co mają, i kupować mądrzej.",
      },
      {
        q: "Czy istnieje planner posiłków, który współpracuje z moim sklepem?",
        a: "Copantry powstało po to, by doprowadzić twój plan aż do sklepu — z listą pogrupowaną według alejek i z myślą o zamawianiu braków w twoim sklepie — żeby plan zamieniał się w jedzenie przy jak najmniejszym oporze.",
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
  nl: [
    {
      q: "Bestaat er een app die je vertelt wat je moet koken voordat je eten bederft?",
      a: "Ja. Copantry houdt bij wat er in je keuken ligt en hoelang elk product nog goed is, en stelt dan recepten voor die eerst het bijna-bedorven eten gebruiken — en zet alleen wat je mist op je boodschappenlijst.",
    },
    {
      q: "Bestaat er een maaltijdplanner die uitgaat van wat er in je koelkast ligt?",
      a: "Ja. Copantry begint bij je voorraadkast, niet bij een lege agenda. Het kijkt wat je al hebt en wat bijna slecht wordt, en plant dan een week met maaltijden die die ingrediënten als eerste opmaken — zo verspil je minder en koop je minder.",
    },
    {
      q: "Hoe helpt Copantry me minder voedsel te verspillen?",
      a: "Copantry laat zien wat bijna over de datum is, stelt gerechten voor die die producten als eerste gebruiken en zet alleen wat je nog niet hebt op je boodschappenlijst — zo koop je niets dubbel en gooi je geen vergeten eten meer weg.",
    },
    {
      q: "Is Copantry gratis?",
      a: "Copantry is gratis te gebruiken, zonder creditcard. Met het gratis abonnement kun je recepten verzamelen, je voorraadkast bijhouden, maaltijden plannen en boodschappenlijsten maken.",
    },
    {
      q: "Op welke apparaten werkt Copantry?",
      a: "Copantry werkt in je webbrowser en op Android; een iOS-app volgt. Je voorraadkast, recepten en planningen synchroniseren over al je apparaten.",
    },
    {
      q: "Kunnen mijn partner en gezin dezelfde planning en boodschappenlijst delen?",
      a: "Ja. Copantry is gemaakt voor huishoudens: nodig je gezin uit in je keuken en jullie delen allemaal dezelfde voorraadkast, dezelfde maaltijdagenda en dezelfde boodschappenlijst, in realtime bijgewerkt.",
    },
  ],
  sv: [
    {
      q: "Finns det en app som säger vad du ska laga innan maten blir för gammal?",
      a: "Ja. Copantry håller koll på vad du har i köket och hur länge varje vara håller, och föreslår sedan recept som använder det som snart går ut först — och fyller din inköpslista med bara det du saknar.",
    },
    {
      q: "Finns det en måltidsplanerare som utgår från vad du har i kylen?",
      a: "Ja. Copantry börjar i ditt skafferi, inte i en tom kalender. Den ser vad du redan har och vad som snart blir dåligt, och planerar sedan en vecka med måltider som använder de ingredienserna först — så slänger du mindre och handlar mindre.",
    },
    {
      q: "Hur hjälper Copantry mig att slänga mindre mat?",
      a: "Copantry visar vad som snart går ut, föreslår rätter som använder de varorna först och lägger bara till det du inte redan har i inköpslistan — så slutar du köpa dubbelt och slänga bortglömd mat.",
    },
    {
      q: "Är Copantry gratis?",
      a: "Copantry är gratis att använda, utan kort. Du kan samla recept, hålla koll på skafferiet, planera måltider och skapa inköpslistor i gratisversionen.",
    },
    {
      q: "Vilka enheter fungerar Copantry på?",
      a: "Copantry fungerar i din webbläsare och på Android, och en iOS-app är på väg. Ditt skafferi, dina recept och dina planer synkas mellan alla dina enheter.",
    },
    {
      q: "Kan min partner och familj dela samma plan och inköpslista?",
      a: "Ja. Copantry är byggt för hushåll: bjud in familjen till ditt kök så delar ni samma skafferi, samma måltidskalender och samma inköpslista, uppdaterad i realtid.",
    },
  ],
  da: [
    {
      q: "Findes der en app, der fortæller dig, hvad du skal lave, før maden bliver for gammel?",
      a: "Ja. Copantry holder styr på, hvad du har i køkkenet, og hvor længe hver vare holder, og foreslår så opskrifter, der bruger det, der snart udløber, først — og fylder din indkøbsliste med kun det, du mangler.",
    },
    {
      q: "Findes der en madplanlægger, der tager udgangspunkt i det, du har i køleskabet?",
      a: "Ja. Copantry starter i dit spisekammer, ikke i en tom kalender. Den ser, hvad du allerede har, og hvad der snart bliver dårligt, og planlægger så en uge med måltider, der bruger de råvarer først — så du smider mindre ud og køber mindre ind.",
    },
    {
      q: "Hvordan hjælper Copantry mig med at smide mindre mad ud?",
      a: "Copantry viser dig, hvad der snart udløber, foreslår retter, der bruger de varer først, og føjer kun det, du ikke allerede har, til indkøbslisten — så holder du op med at købe dobbelt og smide glemt mad ud.",
    },
    {
      q: "Er Copantry gratis?",
      a: "Copantry er gratis at bruge, uden kort. Du kan samle opskrifter, holde styr på spisekammeret, planlægge måltider og lave indkøbslister med den gratis plan.",
    },
    {
      q: "Hvilke enheder virker Copantry på?",
      a: "Copantry virker i din browser og på Android, og en iOS-app er på vej. Dit spisekammer, dine opskrifter og dine planer synkroniseres på tværs af alle dine enheder.",
    },
    {
      q: "Kan min partner og familie dele den samme plan og indkøbsliste?",
      a: "Ja. Copantry er bygget til husstande: inviter familien ind i dit køkken, så deler I det samme spisekammer, den samme madkalender og den samme indkøbsliste, opdateret i realtid.",
    },
  ],
  fi: [
    {
      q: "Onko olemassa sovellusta, joka kertoo, mitä laittaa ennen kuin ruoka vanhenee?",
      a: "On. Copantry pitää kirjaa siitä, mitä keittiössäsi on ja kuinka kauan kukin tuote säilyy, ja ehdottaa sitten reseptejä, jotka käyttävät ensin pian vanhenevat — ja kokoaa ostoslistallesi vain sen, mitä sinulta puuttuu.",
    },
    {
      q: "Onko olemassa ateriasuunnittelijaa, joka lähtee siitä, mitä jääkaapissasi on?",
      a: "On. Copantry aloittaa ruokakomerostasi, ei tyhjästä kalenterista. Se katsoo, mitä sinulla jo on ja mikä on pilaantumassa, ja suunnittelee sitten viikon ateriat, jotka käyttävät ne ainekset ensin — niin hävikki ja ostokset vähenevät.",
    },
    {
      q: "Miten Copantry auttaa vähentämään ruokahävikkiä?",
      a: "Copantry näyttää, mikä on vanhenemassa, ehdottaa ruokia, jotka käyttävät ne tuotteet ensin, ja lisää ostoslistalle vain sen, mitä sinulla ei jo ole — niin lopetat kaksinkertaiset ostokset ja unohtuneen ruoan heittämisen.",
    },
    {
      q: "Onko Copantry ilmainen?",
      a: "Copantry on ilmainen käyttää, eikä korttia tarvita. Ilmaisella tilauksella voit kerätä reseptejä, seurata ruokakomeroasi, suunnitella aterioita ja koota ostoslistoja.",
    },
    {
      q: "Millä laitteilla Copantry toimii?",
      a: "Copantry toimii selaimessasi ja Androidilla, ja iOS-sovellus on tulossa. Ruokakomerosi, reseptisi ja suunnitelmasi synkronoituvat kaikkien laitteidesi välillä.",
    },
    {
      q: "Voivatko kumppanini ja perheeni jakaa saman suunnitelman ja ostoslistan?",
      a: "Kyllä. Copantry on tehty talouksille: kutsu perheesi keittiöösi, niin jaatte saman ruokakomeron, saman ateriakalenterin ja saman ostoslistan, joka päivittyy reaaliajassa.",
    },
  ],
  no: [
    {
      q: "Finnes det en app som forteller deg hva du skal lage før maten blir for gammel?",
      a: "Ja. Copantry holder oversikt over hva du har på kjøkkenet og hvor lenge hver vare holder, og foreslår så oppskrifter som bruker det som snart går ut først — og fyller handlelisten din med bare det du mangler.",
    },
    {
      q: "Finnes det en måltidsplanlegger som tar utgangspunkt i det du har i kjøleskapet?",
      a: "Ja. Copantry starter i spiskammeret ditt, ikke i en tom kalender. Den ser hva du allerede har og hva som snart blir dårlig, og planlegger så en uke med måltider som bruker de råvarene først — så kaster du mindre og handler mindre.",
    },
    {
      q: "Hvordan hjelper Copantry meg å kaste mindre mat?",
      a: "Copantry viser deg hva som snart går ut, foreslår retter som bruker de varene først, og legger bare det du ikke allerede har til i handlelisten — så slutter du å kjøpe dobbelt og kaste glemt mat.",
    },
    {
      q: "Er Copantry gratis?",
      a: "Copantry er gratis å bruke, uten kort. Du kan samle oppskrifter, holde oversikt over spiskammeret, planlegge måltider og lage handlelister med gratisplanen.",
    },
    {
      q: "Hvilke enheter virker Copantry på?",
      a: "Copantry virker i nettleseren din og på Android, og en iOS-app er på vei. Spiskammeret, oppskriftene og planene dine synkroniseres på tvers av alle enhetene dine.",
    },
    {
      q: "Kan partneren min og familien dele den samme planen og handlelisten?",
      a: "Ja. Copantry er laget for husholdninger: inviter familien inn på kjøkkenet ditt, så deler dere det samme spiskammeret, den samme måltidskalenderen og den samme handlelisten, oppdatert i sanntid.",
    },
  ],
  pl: [
    {
      q: "Czy istnieje aplikacja, która podpowiada, co ugotować, zanim jedzeniu skończy się termin?",
      a: "Tak. Copantry śledzi, co masz w kuchni i ile czasu zostało każdemu produktowi, a potem proponuje przepisy, które w pierwszej kolejności zużywają to, czemu kończy się termin — i wpisuje na listę zakupów tylko to, czego brakuje.",
    },
    {
      q: "Czy istnieje planer posiłków, który układa jadłospis wokół zawartości lodówki?",
      a: "Tak. Copantry zaczyna od twojej spiżarni, nie od pustego kalendarza. Patrzy, co już masz i co niedługo się zepsuje, a potem planuje tydzień posiłków, które zużywają te składniki najpierw — mniej marnujesz i mniej kupujesz.",
    },
    {
      q: "Jak Copantry pomaga marnować mniej jedzenia?",
      a: "Copantry pokazuje, czemu kończy się termin, proponuje dania, które zużywają te produkty w pierwszej kolejności, i dopisuje do listy zakupów tylko to, czego jeszcze nie masz — przestajesz kupować podwójnie i wyrzucać zapomniane jedzenie.",
    },
    {
      q: "Czy Copantry jest bezpłatne?",
      a: "Copantry jest bezpłatne, bez podawania karty. W darmowym planie możesz zbierać przepisy, prowadzić spiżarnię, planować posiłki i tworzyć listy zakupów.",
    },
    {
      q: "Na jakich urządzeniach działa Copantry?",
      a: "Copantry działa w przeglądarce i na Androidzie, a aplikacja na iOS jest w drodze. Twoja spiżarnia, przepisy i plany synchronizują się między wszystkimi urządzeniami.",
    },
    {
      q: "Czy partner i rodzina mogą dzielić ten sam plan i listę zakupów?",
      a: "Tak. Copantry powstało z myślą o gospodarstwach domowych: zaproś bliskich do swojej kuchni, a będziecie dzielić tę samą spiżarnię, ten sam kalendarz posiłków i tę samą listę zakupów, aktualizowaną na bieżąco.",
    },
  ],
};
