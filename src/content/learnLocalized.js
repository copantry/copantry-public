/*
 * Localized copy for the programmatic /learn (shelf-life) pages.
 *
 * Pure data + resolvers — NO JSX — because seoConfig.js (Node prerender) imports
 * this. English structural data lives in shelfLife.js; this file holds the page
 * chrome (LEARN_UI), the category labels (CATEGORY_TX) and the per-ingredient
 * translations (SHELF_LIFE_TX: name/question/why/store/cook). `/us` falls back to
 * English. Item order, slugs, emoji and min/max stay English-only (URLs + numbers).
 *
 * Templates that weave in the duration use a colon-label form (e.g. "Épinards :
 * environ 3–5 jours…") so they read naturally in every language without article or
 * verb agreement per ingredient.
 */

import { SHELF_LIFE } from "./shelfLife.js";

// ── Page chrome + sentence templates ─────────────────────────────────────────
export const LEARN_UI = {
  en: {
    eyebrow: "Learn",
    breadcrumbLearn: "Learn",
    h1: "How long does food last?",
    lede: "Simple, honest guides to how long everyday food keeps, why it spoils, how to store it so it lasts longer, and what to cook before it goes off. General guides — when in doubt, trust your senses.",
    fridgeShort: (min, max) => `~${min}–${max} days in the fridge`,
    daysUnit: (min, max) => `${min}–${max} days`,
    inFridgeGuide: "in the fridge (general guide)",
    blockWhy: "Why it goes off",
    blockStore: "How to store it so it lasts longer",
    blockCook: "What to cook before it goes",
    question: (name) => `How long does ${name.toLowerCase()} last?`,
    answer: (name, min, max) =>
      `${name} typically lasts about ${min} to ${max} days in the fridge, though it varies with how fresh it was and how it is stored.`,
    disclaimerPre:
      "These are general guides for a typical item stored well, not safety guarantees. Always check use-by dates and trust your eyes and nose. Copantry can date this for you automatically — see ",
    pantryTrackingLabel: "pantry tracking",
    neverBin: "Stop binning good food — see how Copantry helps",
    ctaIndexTitle: "Stop guessing what’s still good",
    ctaIndexSub:
      "Copantry dates everything in your kitchen and tells you what to use up first. Free to use, no card needed.",
    ctaDetailTitle: "Know exactly what’s still good",
    ctaDetailSub:
      "Copantry tracks how long everything in your kitchen has left and tells you what to use up first. Free to use.",
  },
  fr: {
    eyebrow: "Apprendre",
    breadcrumbLearn: "Apprendre",
    h1: "Combien de temps se conservent les aliments ?",
    lede: "Des guides simples et honnêtes sur la durée de conservation des aliments du quotidien, pourquoi ils se gâtent, comment les conserver plus longtemps et quoi cuisiner avant qu’ils ne tournent. Repères généraux — en cas de doute, fiez-vous à vos sens.",
    fridgeShort: (min, max) => `~${min}–${max} jours au frigo`,
    daysUnit: (min, max) => `${min}–${max} jours`,
    inFridgeGuide: "au réfrigérateur (repère général)",
    blockWhy: "Pourquoi ça se gâte",
    blockStore: "Comment le conserver plus longtemps",
    blockCook: "Quoi cuisiner avant que ça tourne",
    question: (name) => `Combien de temps se conserve ${name.toLowerCase()} ?`,
    answer: (name, min, max) =>
      `${name} : environ ${min} à ${max} jours au réfrigérateur, selon la fraîcheur à l’achat et la façon dont c’est conservé.`,
    disclaimerPre:
      "Ce sont des repères généraux pour un produit typique bien conservé, pas des garanties de sécurité. Vérifiez toujours les dates limites et fiez-vous à vos yeux et à votre nez. Copantry peut dater cela pour vous automatiquement — voir ",
    pantryTrackingLabel: "le suivi du garde-manger",
    neverBin: "Ne jetez plus de bons aliments — voyez comment Copantry aide",
    ctaIndexTitle: "Arrêtez de deviner ce qui est encore bon",
    ctaIndexSub:
      "Copantry date tout ce qu’il y a dans votre cuisine et vous dit quoi finir en premier. Gratuit, sans carte.",
    ctaDetailTitle: "Sachez exactement ce qui est encore bon",
    ctaDetailSub:
      "Copantry suit le temps qu’il reste à chaque aliment et vous dit quoi finir en premier. Gratuit.",
  },
  it: {
    eyebrow: "Impara",
    breadcrumbLearn: "Impara",
    h1: "Quanto durano gli alimenti?",
    lede: "Guide semplici e oneste su quanto durano gli alimenti di tutti i giorni, perché si rovinano, come conservarli più a lungo e cosa cucinare prima che vadano a male. Indicazioni generali — nel dubbio, fidati dei tuoi sensi.",
    fridgeShort: (min, max) => `~${min}–${max} giorni in frigo`,
    daysUnit: (min, max) => `${min}–${max} giorni`,
    inFridgeGuide: "in frigorifero (indicazione generale)",
    blockWhy: "Perché si rovina",
    blockStore: "Come conservarlo più a lungo",
    blockCook: "Cosa cucinare prima che vada a male",
    question: (name) => `Quanto dura ${name.toLowerCase()}?`,
    answer: (name, min, max) =>
      `${name}: circa ${min}–${max} giorni in frigorifero, anche se varia in base alla freschezza all’acquisto e a come viene conservato.`,
    disclaimerPre:
      "Sono indicazioni generali per un prodotto tipico ben conservato, non garanzie di sicurezza. Controlla sempre le scadenze e fidati di occhi e naso. Copantry può datarlo per te in automatico — vedi ",
    pantryTrackingLabel: "la gestione della dispensa",
    neverBin: "Smetti di buttare cibo buono — scopri come aiuta Copantry",
    ctaIndexTitle: "Smetti di indovinare cosa è ancora buono",
    ctaIndexSub:
      "Copantry data tutto ciò che hai in cucina e ti dice cosa consumare per primo. Gratis, senza carta.",
    ctaDetailTitle: "Sai esattamente cosa è ancora buono",
    ctaDetailSub:
      "Copantry tiene traccia di quanto resta a ogni alimento e ti dice cosa consumare per primo. Gratis.",
  },
  es: {
    eyebrow: "Aprende",
    breadcrumbLearn: "Aprende",
    h1: "¿Cuánto duran los alimentos?",
    lede: "Guías sencillas y honestas sobre cuánto duran los alimentos del día a día, por qué se estropean, cómo guardarlos para que duren más y qué cocinar antes de que se echen a perder. Orientaciones generales — ante la duda, fíate de tus sentidos.",
    fridgeShort: (min, max) => `~${min}–${max} días en la nevera`,
    daysUnit: (min, max) => `${min}–${max} días`,
    inFridgeGuide: "en la nevera (orientación general)",
    blockWhy: "Por qué se estropea",
    blockStore: "Cómo guardarlo para que dure más",
    blockCook: "Qué cocinar antes de que se eche a perder",
    question: (name) => `¿Cuánto dura ${name.toLowerCase()}?`,
    answer: (name, min, max) =>
      `${name}: unos ${min}–${max} días en la nevera, aunque varía según lo fresco que estuviera y cómo se guarde.`,
    disclaimerPre:
      "Son orientaciones generales para un producto típico bien guardado, no garantías de seguridad. Comprueba siempre las fechas de caducidad y fíate de tu vista y tu olfato. Copantry puede fecharlo por ti automáticamente — consulta ",
    pantryTrackingLabel: "el control de la despensa",
    neverBin: "Deja de tirar comida buena — mira cómo ayuda Copantry",
    ctaIndexTitle: "Deja de adivinar qué sigue estando bueno",
    ctaIndexSub:
      "Copantry fecha todo lo que hay en tu cocina y te dice qué gastar primero. Gratis, sin tarjeta.",
    ctaDetailTitle: "Sabe exactamente qué sigue estando bueno",
    ctaDetailSub:
      "Copantry controla cuánto le queda a cada alimento y te dice qué gastar primero. Gratis.",
  },
  pt: {
    eyebrow: "Aprender",
    breadcrumbLearn: "Aprender",
    h1: "Quanto tempo duram os alimentos?",
    lede: "Guias simples e honestos sobre quanto duram os alimentos do dia a dia, porque se estragam, como guardá-los para durarem mais e o que cozinhar antes de se estragarem. Orientações gerais — na dúvida, confie nos seus sentidos.",
    fridgeShort: (min, max) => `~${min}–${max} dias no frigorífico`,
    daysUnit: (min, max) => `${min}–${max} dias`,
    inFridgeGuide: "no frigorífico (orientação geral)",
    blockWhy: "Porque se estraga",
    blockStore: "Como guardá-lo para durar mais",
    blockCook: "O que cozinhar antes de se estragar",
    question: (name) => `Quanto tempo dura ${name.toLowerCase()}?`,
    answer: (name, min, max) =>
      `${name}: cerca de ${min}–${max} dias no frigorífico, embora varie consoante o frescor na compra e a forma de guardar.`,
    disclaimerPre:
      "São orientações gerais para um produto típico bem guardado, não garantias de segurança. Verifique sempre as datas de validade e confie nos olhos e no nariz. O Copantry pode datar isto por si automaticamente — veja ",
    pantryTrackingLabel: "o controlo da despensa",
    neverBin: "Deixe de deitar fora comida boa — veja como o Copantry ajuda",
    ctaIndexTitle: "Deixe de adivinhar o que ainda está bom",
    ctaIndexSub:
      "O Copantry data tudo o que há na sua cozinha e diz-lhe o que gastar primeiro. Grátis, sem cartão.",
    ctaDetailTitle: "Saiba exatamente o que ainda está bom",
    ctaDetailSub:
      "O Copantry acompanha quanto resta a cada alimento e diz-lhe o que gastar primeiro. Grátis.",
  },
  de: {
    eyebrow: "Wissen",
    breadcrumbLearn: "Wissen",
    h1: "Wie lange halten Lebensmittel?",
    lede: "Einfache, ehrliche Leitfäden dazu, wie lange Alltagslebensmittel halten, warum sie verderben, wie man sie länger lagert und was man kocht, bevor sie schlecht werden. Allgemeine Richtwerte — im Zweifel auf deine Sinne vertrauen.",
    fridgeShort: (min, max) => `~${min}–${max} Tage im Kühlschrank`,
    daysUnit: (min, max) => `${min}–${max} Tage`,
    inFridgeGuide: "im Kühlschrank (allgemeiner Richtwert)",
    blockWhy: "Warum es verdirbt",
    blockStore: "So lagerst du es länger haltbar",
    blockCook: "Was du kochst, bevor es schlecht wird",
    question: (name) => `Wie lange hält ${name}?`,
    answer: (name, min, max) =>
      `${name}: etwa ${min}–${max} Tage im Kühlschrank, je nach Frische beim Kauf und Lagerung.`,
    disclaimerPre:
      "Das sind allgemeine Richtwerte für ein typisches, gut gelagertes Produkt, keine Sicherheitsgarantien. Prüfe immer das Verbrauchsdatum und vertraue Augen und Nase. Copantry kann das automatisch für dich datieren — siehe ",
    pantryTrackingLabel: "Vorratsverwaltung",
    neverBin: "Wirf keine guten Lebensmittel mehr weg — so hilft Copantry",
    ctaIndexTitle: "Hör auf zu raten, was noch gut ist",
    ctaIndexSub:
      "Copantry datiert alles in deiner Küche und sagt dir, was zuerst aufzubrauchen ist. Kostenlos, ohne Karte.",
    ctaDetailTitle: "Wisse genau, was noch gut ist",
    ctaDetailSub:
      "Copantry verfolgt, wie lange jedes Lebensmittel noch hält, und sagt dir, was zuerst dran ist. Kostenlos.",
  },
};

// ── Category labels (also used as index group headings) ──────────────────────
export const CATEGORY_TX = {
  Vegetables: {
    fr: "Légumes",
    it: "Verdura",
    es: "Verduras",
    pt: "Legumes",
    de: "Gemüse",
  },
  "Meat & fish": {
    fr: "Viande & poisson",
    it: "Carne & pesce",
    es: "Carne y pescado",
    pt: "Carne e peixe",
    de: "Fleisch & Fisch",
  },
  Dairy: {
    fr: "Produits laitiers",
    it: "Latticini",
    es: "Lácteos",
    pt: "Laticínios",
    de: "Milchprodukte",
  },
  Fruit: {
    fr: "Fruits",
    it: "Frutta",
    es: "Fruta",
    pt: "Fruta",
    de: "Obst",
  },
  Bakery: {
    fr: "Boulangerie",
    it: "Panetteria",
    es: "Panadería",
    pt: "Padaria",
    de: "Backwaren",
  },
  "Cooked food": {
    fr: "Plats cuisinés",
    it: "Cibi cotti",
    es: "Comida cocinada",
    pt: "Comida cozinhada",
    de: "Gekochtes",
  },
};

// ── Per-ingredient translations (name/question/why/store/cook) ───────────────
export const SHELF_LIFE_TX = {
  spinach: {
    fr: {
      name: "Épinards",
      question: "Combien de temps se conservent les épinards ?",
      why: "Les épinards ont des feuilles fines et délicates très riches en eau ; ils se flétrissent et deviennent visqueux vite une fois coupés et réfrigérés.",
      store:
        "Gardez-les au sec dans un sac ou une boîte mal fermée garnie d’essuie-tout pour absorber l’humidité, dans le bac à légumes.",
      cook: "Faites-les tomber dans des pâtes, un curry, une omelette ou une soupe dès les premiers signes de ramollissement — cuits, ils se gardent plus longtemps que crus.",
    },
    it: {
      name: "Spinaci",
      question: "Quanto durano gli spinaci?",
      why: "Gli spinaci hanno foglie sottili e delicate, molto ricche d’acqua, quindi appassiscono e diventano viscidi in fretta una volta tagliati e refrigerati.",
      store:
        "Tienili asciutti in un sacchetto o contenitore poco chiuso, foderato con carta da cucina per assorbire l’umidità, nel cassetto del frigo.",
      cook: "Falli appassire in pasta, curry, frittata o zuppa ai primi segni di cedimento — cotti durano più che crudi.",
    },
    es: {
      name: "Espinacas",
      question: "¿Cuánto duran las espinacas?",
      why: "Las espinacas tienen hojas finas y delicadas con mucha agua, así que se marchitan y se vuelven viscosas rápido una vez cortadas y refrigeradas.",
      store:
        "Mantenlas secas en una bolsa o caja sin cerrar del todo, forrada con papel de cocina para absorber la humedad, en el cajón de verduras.",
      cook: "Saltéalas en pasta, curry, tortilla o sopa al primer signo de ablandamiento — cocidas duran más que crudas.",
    },
    pt: {
      name: "Espinafres",
      question: "Quanto tempo duram os espinafres?",
      why: "Os espinafres têm folhas finas e delicadas, muito ricas em água, por isso murcham e ficam viscosos depressa depois de cortados e refrigerados.",
      store:
        "Mantenha-os secos num saco ou caixa mal fechada, forrada com papel de cozinha para absorver a humidade, na gaveta dos legumes.",
      cook: "Refogue-os em massa, caril, omelete ou sopa ao primeiro sinal de moleza — cozidos duram mais do que crus.",
    },
    de: {
      name: "Spinat",
      question: "Wie lange hält Spinat?",
      why: "Spinat hat dünne, zarte Blätter mit hohem Wassergehalt, daher welkt er und wird schnell schleimig, sobald er geschnitten und gekühlt ist.",
      store:
        "Trocken in einem locker verschlossenen Beutel oder einer Box mit Küchenpapier (saugt Feuchtigkeit) im Gemüsefach lagern.",
      cook: "Beim ersten Anzeichen von Weichwerden in Pasta, Curry, Omelett oder Suppe zusammenfallen lassen — gekocht hält er länger als roh.",
    },
  },
  chicken: {
    fr: {
      name: "Poulet cru",
      question: "Combien de temps se conserve le poulet cru ?",
      why: "La volaille crue est humide et riche en protéines : les bactéries s’y multiplient vite, d’où une date limite stricte.",
      store:
        "Gardez-le dans la partie la plus froide du frigo (souvent en bas), bien fermé, sous les autres aliments pour qu’il ne coule pas.",
      cook: "Cuisez-le dans un jour ou deux, ou congelez-le le jour de l’achat. Une fois cuit, mangez-le sous 2–3 jours.",
    },
    it: {
      name: "Pollo crudo",
      question: "Quanto dura il pollo crudo?",
      why: "Il pollame crudo è umido e ricco di proteine: i batteri vi si moltiplicano in fretta, da qui una scadenza rigida.",
      store:
        "Tienilo nella parte più fredda del frigo (di solito in basso), ben chiuso e sotto gli altri alimenti perché non sgoccioli.",
      cook: "Cuocilo entro un giorno o due, o congelalo il giorno dell’acquisto. Una volta cotto, consumalo entro 2–3 giorni.",
    },
    es: {
      name: "Pollo crudo",
      question: "¿Cuánto dura el pollo crudo?",
      why: "La carne de ave cruda es húmeda y rica en proteínas: las bacterias se multiplican rápido en ella, de ahí su fecha estricta.",
      store:
        "Guárdalo en la parte más fría de la nevera (suele ser abajo), bien cerrado y debajo de otros alimentos para que no gotee.",
      cook: "Cocínalo en un día o dos, o congélalo el día de la compra. Una vez cocinado, cómelo en 2–3 días.",
    },
    pt: {
      name: "Frango cru",
      question: "Quanto tempo dura o frango cru?",
      why: "A carne de aves crua é húmida e rica em proteína: as bactérias multiplicam-se depressa, daí o prazo rigoroso.",
      store:
        "Guarde-o na parte mais fria do frigorífico (normalmente em baixo), bem fechado e por baixo dos outros alimentos para não pingar.",
      cook: "Cozinhe-o num dia ou dois, ou congele-o no dia da compra. Depois de cozinhado, coma em 2–3 dias.",
    },
    de: {
      name: "Rohes Hähnchen",
      question: "Wie lange hält rohes Hähnchen?",
      why: "Rohes Geflügel ist feucht und eiweißreich: Bakterien vermehren sich darauf schnell, daher das strenge Verbrauchsdatum.",
      store:
        "Im kältesten Teil des Kühlschranks (meist unten) lagern, gut verschlossen und unter anderen Lebensmitteln, damit nichts tropft.",
      cook: "Innerhalb von ein bis zwei Tagen garen oder am Einkaufstag einfrieren. Gegart innerhalb von 2–3 Tagen essen.",
    },
  },
  milk: {
    fr: {
      name: "Lait",
      question: "Combien de temps se conserve le lait ?",
      why: "Même pasteurisé, le lait contient des bactéries qui le font tourner lentement, plus vite une fois ouvert et exposé à la chaleur.",
      store:
        "Rangez-le sur une étagère du frigo, pas dans la porte, où la température est plus stable et plus froide.",
      cook: "Finissez-le dans un porridge, des pancakes, une béchamel ou une soupe ; proche de la date il est souvent encore bon — sentez-le d’abord.",
    },
    it: {
      name: "Latte",
      question: "Quanto dura il latte?",
      why: "Anche pastorizzato, il latte contiene batteri che lo inacidiscono lentamente, più in fretta una volta aperto ed esposto al caldo.",
      store:
        "Conservalo su un ripiano del frigo, non nella porta, dove la temperatura è più stabile e fredda.",
      cook: "Usalo in porridge, pancake, besciamella o una zuppa; vicino alla scadenza spesso va ancora bene — annusalo prima.",
    },
    es: {
      name: "Leche",
      question: "¿Cuánto dura la leche?",
      why: "Aun pasteurizada, la leche contiene bacterias que la agrian poco a poco, más rápido una vez abierta y expuesta al calor.",
      store:
        "Guárdala en un estante de la nevera, no en la puerta, donde la temperatura es más estable y fría.",
      cook: "Gástala en gachas, tortitas, bechamel o una sopa; cerca de la fecha suele estar bien — huélela primero.",
    },
    pt: {
      name: "Leite",
      question: "Quanto tempo dura o leite?",
      why: "Mesmo pasteurizado, o leite contém bactérias que o azedam lentamente, mais depressa depois de aberto e exposto ao calor.",
      store:
        "Guarde-o numa prateleira do frigorífico, não na porta, onde a temperatura é mais estável e fria.",
      cook: "Gaste-o em papas, panquecas, béchamel ou uma sopa; perto da data costuma estar bom — cheire primeiro.",
    },
    de: {
      name: "Milch",
      question: "Wie lange hält Milch?",
      why: "Auch pasteurisierte Milch enthält Bakterien, die sie langsam sauer werden lassen — schneller, sobald sie geöffnet und Wärme ausgesetzt ist.",
      store:
        "Auf einem Kühlschrankfach lagern, nicht in der Tür, wo die Temperatur gleichmäßiger und kälter ist.",
      cook: "In Porridge, Pfannkuchen, Béchamel oder Suppe aufbrauchen; nahe am Datum ist sie oft noch gut — erst riechen.",
    },
  },
  avocado: {
    fr: {
      name: "Avocat",
      question: "Combien de temps se conserve un avocat ?",
      why: "Les avocats libèrent de l’éthylène et mûrissent vite ; une fois mûrs, la chair brunit et ramollit en deux jours.",
      store:
        "Faites mûrir à température ambiante, puis mettez au frigo pour ralentir. Gardez une moitié coupée avec le noyau et du citron dessus.",
      cook: "Une fois mûr, utilisez-le vite en guacamole, sur du pain, mixé en smoothie ou en sauce.",
    },
    it: {
      name: "Avocado",
      question: "Quanto dura l’avocado?",
      why: "Gli avocado rilasciano etilene e maturano in fretta; una volta maturi la polpa annerisce e si ammorbidisce in un paio di giorni.",
      store:
        "Falli maturare a temperatura ambiente, poi mettili in frigo per rallentare. Conserva una metà tagliata con il nocciolo e del limone sopra.",
      cook: "Una volta maturo, usalo subito in guacamole, su pane tostato, frullato o in un condimento.",
    },
    es: {
      name: "Aguacate",
      question: "¿Cuánto dura el aguacate?",
      why: "Los aguacates liberan etileno y maduran rápido; ya maduros, la pulpa se ennegrece y ablanda en un par de días.",
      store:
        "Madúralo a temperatura ambiente y luego pásalo a la nevera para frenarlo. Guarda la mitad cortada con el hueso y limón por encima.",
      cook: "Ya maduro, úsalo pronto en guacamole, sobre tostada, en batido o en un aliño.",
    },
    pt: {
      name: "Abacate",
      question: "Quanto tempo dura o abacate?",
      why: "Os abacates libertam etileno e amadurecem depressa; já maduros, a polpa escurece e amolece em dois dias.",
      store:
        "Amadureça à temperatura ambiente e depois passe ao frigorífico para abrandar. Guarde a metade cortada com o caroço e limão por cima.",
      cook: "Já maduro, use-o depressa em guacamole, na tosta, batido ou num molho.",
    },
    de: {
      name: "Avocado",
      question: "Wie lange hält eine Avocado?",
      why: "Avocados geben Ethylen ab und reifen schnell; reif wird das Fruchtfleisch innerhalb von zwei Tagen braun und weich.",
      store:
        "Bei Zimmertemperatur reifen lassen, dann in den Kühlschrank zum Bremsen. Eine angeschnittene Hälfte mit Kern und Zitrone obenauf aufbewahren.",
      cook: "Reif rasch verwenden — als Guacamole, auf Brot, im Smoothie oder im Dressing.",
    },
  },
  bananas: {
    fr: {
      name: "Bananes",
      question: "Combien de temps se conservent les bananes ?",
      why: "Les bananes produisent beaucoup d’éthylène : elles continuent de mûrir sur le plan de travail et brunissent en quelques jours.",
      store:
        "Gardez-les hors du frigo jusqu’à maturité ; les séparer ralentit le mûrissement. Très mûres, elles se congèlent bien.",
      cook: "Transformez les bananes tachetées en banana bread, pancakes ou smoothie plutôt que de les jeter.",
    },
    it: {
      name: "Banane",
      question: "Quanto durano le banane?",
      why: "Le banane producono molto etilene: continuano a maturare sul piano e anneriscono in pochi giorni.",
      store:
        "Tienile fuori dal frigo fino a maturazione; separarle rallenta la maturazione. Molto mature si congelano bene.",
      cook: "Trasforma le banane maculate in banana bread, pancake o frullato invece di buttarle.",
    },
    es: {
      name: "Plátanos",
      question: "¿Cuánto duran los plátanos?",
      why: "Los plátanos producen mucho etileno: siguen madurando en la encimera y se ennegrecen en pocos días.",
      store:
        "Mantenlos fuera de la nevera hasta que maduren; separarlos frena la maduración. Muy maduros se congelan bien.",
      cook: "Convierte los plátanos manchados en pan de plátano, tortitas o batido en vez de tirarlos.",
    },
    pt: {
      name: "Bananas",
      question: "Quanto tempo duram as bananas?",
      why: "As bananas produzem muito etileno: continuam a amadurecer na bancada e escurecem em poucos dias.",
      store:
        "Mantenha-as fora do frigorífico até amadurecerem; separá-las abranda o amadurecimento. Muito maduras congelam bem.",
      cook: "Transforme as bananas manchadas em pão de banana, panquecas ou batido em vez de as deitar fora.",
    },
    de: {
      name: "Bananen",
      question: "Wie lange halten Bananen?",
      why: "Bananen produzieren viel Ethylen: Sie reifen auf der Arbeitsfläche weiter und werden binnen Tagen braun.",
      store:
        "Bis zur Reife außerhalb des Kühlschranks lagern; getrennt reifen sie langsamer. Sehr reif lassen sie sich gut einfrieren.",
      cook: "Fleckige Bananen zu Bananenbrot, Pfannkuchen oder Smoothie verarbeiten, statt sie wegzuwerfen.",
    },
  },
  strawberries: {
    fr: {
      name: "Fraises",
      question: "Combien de temps se conservent les fraises ?",
      why: "Les fruits rouges s’abîment facilement et moisissent vite à cause de leur peau fine et humide.",
      store:
        "Gardez-les sèches et non lavées au frigo ; ne les lavez qu’au moment de manger. Retirez tout de suite celles qui moisissent.",
      cook: "Utilisez les fraises molles en compote, confiture, smoothie ou dans des muffins.",
    },
    it: {
      name: "Fragole",
      question: "Quanto durano le fragole?",
      why: "I frutti di bosco si ammaccano facilmente e ammuffiscono in fretta per la buccia morbida e umida.",
      store:
        "Tienile asciutte e non lavate in frigo; lavale solo prima di mangiarle. Togli subito quelle ammuffite.",
      cook: "Usa le fragole molli in composta, marmellata, frullato o nei muffin.",
    },
    es: {
      name: "Fresas",
      question: "¿Cuánto duran las fresas?",
      why: "Las bayas se magullan con facilidad y crían moho rápido por su piel blanda y húmeda.",
      store:
        "Mantenlas secas y sin lavar en la nevera; lávalas solo justo antes de comerlas. Retira de inmediato las que tengan moho.",
      cook: "Usa las fresas blandas en compota, mermelada, batido o en magdalenas.",
    },
    pt: {
      name: "Morangos",
      question: "Quanto tempo duram os morangos?",
      why: "Os frutos vermelhos pisam-se com facilidade e ganham bolor depressa pela casca mole e húmida.",
      store:
        "Mantenha-os secos e por lavar no frigorífico; lave-os só mesmo antes de comer. Retire logo os que tiverem bolor.",
      cook: "Use os morangos moles em compota, doce, batido ou em queques.",
    },
    de: {
      name: "Erdbeeren",
      question: "Wie lange halten Erdbeeren?",
      why: "Beeren bekommen leicht Druckstellen und schimmeln schnell wegen ihrer weichen, feuchten Haut.",
      store:
        "Trocken und ungewaschen im Kühlschrank lagern; erst direkt vorm Essen waschen. Schimmlige sofort entfernen.",
      cook: "Weiche Beeren zu Kompott, Marmelade, Smoothie oder in Muffins verarbeiten.",
    },
  },
  bread: {
    fr: {
      name: "Pain",
      question: "Combien de temps se conserve le pain ?",
      why: "Le pain se dessèche et moisit ; le frigo le rend en fait rassis plus vite, pas plus lentement.",
      store:
        "Gardez-le dans une huche à pain à température ambiante, ou tranchez et congelez ce que vous ne mangerez pas sous quelques jours.",
      cook: "Transformez le pain rassis en toasts, croûtons, chapelure, pain perdu ou pudding.",
    },
    it: {
      name: "Pane",
      question: "Quanto dura il pane?",
      why: "Il pane si secca e ammuffisce; il frigo lo fa diventare raffermo più in fretta, non più lentamente.",
      store:
        "Tienilo in un portapane a temperatura ambiente, oppure affetta e congela ciò che non mangerai in pochi giorni.",
      cook: "Trasforma il pane raffermo in crostini, pangrattato, French toast o un budino di pane.",
    },
    es: {
      name: "Pan",
      question: "¿Cuánto dura el pan?",
      why: "El pan se reseca y cría moho; la nevera, en realidad, lo pone duro más rápido, no más lento.",
      store:
        "Guárdalo en una panera a temperatura ambiente, o corta y congela lo que no vayas a comer en unos días.",
      cook: "Convierte el pan duro en tostadas, picatostes, pan rallado, torrijas o un pudin de pan.",
    },
    pt: {
      name: "Pão",
      question: "Quanto tempo dura o pão?",
      why: "O pão resseca e ganha bolor; o frigorífico, na verdade, deixa-o duro mais depressa, não mais devagar.",
      store:
        "Guarde-o numa caixa de pão à temperatura ambiente, ou fatie e congele o que não comer em poucos dias.",
      cook: "Transforme o pão duro em torradas, croutons, pão ralado, rabanadas ou um pudim de pão.",
    },
    de: {
      name: "Brot",
      question: "Wie lange hält Brot?",
      why: "Brot trocknet aus und schimmelt; der Kühlschrank macht es sogar schneller altbacken, nicht langsamer.",
      store:
        "In einem Brotkasten bei Zimmertemperatur lagern oder das, was nicht in ein paar Tagen aufgegessen wird, in Scheiben einfrieren.",
      cook: "Altbackenes Brot zu Toast, Croutons, Semmelbröseln, Arme Ritter oder einem Brotauflauf verarbeiten.",
    },
  },
  eggs: {
    fr: {
      name: "Œufs",
      question: "Combien de temps se conservent les œufs ?",
      why: "Les œufs se gardent assez bien mais perdent lentement humidité et fraîcheur à travers la coquille sur plusieurs semaines.",
      store:
        "Conservez-les au frigo dans leur boîte, pointe vers le bas. Un œuf frais coule dans l’eau ; un vieux flotte.",
      cook: "Utilisez les œufs plus âgés pour la pâtisserie, des frittatas ou durs. En cas de doute, faites le test de l’eau.",
    },
    it: {
      name: "Uova",
      question: "Quanto durano le uova?",
      why: "Le uova si conservano abbastanza bene ma perdono lentamente umidità e freschezza attraverso il guscio nel giro di settimane.",
      store:
        "Conservale in frigo nella loro confezione, con la punta in giù. Un uovo fresco affonda in acqua; uno vecchio galleggia.",
      cook: "Usa le uova più vecchie per dolci, frittate o sode. Nel dubbio, fai la prova dell’acqua.",
    },
    es: {
      name: "Huevos",
      question: "¿Cuánto duran los huevos?",
      why: "Los huevos aguantan bastante bien pero pierden humedad y frescura poco a poco a través de la cáscara durante semanas.",
      store:
        "Guárdalos en la nevera en su caja, con la punta hacia abajo. Un huevo fresco se hunde en agua; uno viejo flota.",
      cook: "Usa los huevos más viejos para repostería, frittatas o duros. Ante la duda, haz la prueba del agua.",
    },
    pt: {
      name: "Ovos",
      question: "Quanto tempo duram os ovos?",
      why: "Os ovos aguentam-se bem mas perdem humidade e frescura lentamente através da casca ao longo de semanas.",
      store:
        "Guarde-os no frigorífico na caixa, com a ponta para baixo. Um ovo fresco afunda na água; um velho flutua.",
      cook: "Use os ovos mais velhos para bolos, frittatas ou cozidos. Na dúvida, faça o teste da água.",
    },
    de: {
      name: "Eier",
      question: "Wie lange halten Eier?",
      why: "Eier halten recht gut, verlieren aber über Wochen langsam Feuchtigkeit und Frische durch die Schale.",
      store:
        "Im Kühlschrank im Karton lagern, mit der Spitze nach unten. Ein frisches Ei sinkt in Wasser, ein altes schwimmt.",
      cook: "Ältere Eier zum Backen, für Frittata oder hartgekocht verwenden. Im Zweifel den Wassertest machen.",
    },
  },
  tomatoes: {
    fr: {
      name: "Tomates",
      question: "Combien de temps se conservent les tomates ?",
      why: "Les tomates continuent de mûrir après la cueillette et deviennent molles et farineuses, surtout réfrigérées trop tôt.",
      store:
        "Gardez-les à température ambiante, à l’abri du soleil, pour la saveur ; ne réfrigérez que les très mûres pour gagner un jour ou deux.",
      cook: "Rôtissez les tomates molles pour une sauce, une soupe ou un plat au four.",
    },
    it: {
      name: "Pomodori",
      question: "Quanto durano i pomodori?",
      why: "I pomodori continuano a maturare dopo la raccolta e diventano molli e farinosi, soprattutto se refrigerati troppo presto.",
      store:
        "Tienili a temperatura ambiente, lontano dal sole, per il sapore; refrigera solo i molto maturi per guadagnare un giorno o due.",
      cook: "Arrostisci i pomodori molli per una salsa, una zuppa o una teglia al forno.",
    },
    es: {
      name: "Tomates",
      question: "¿Cuánto duran los tomates?",
      why: "Los tomates siguen madurando tras la recolección y se ponen blandos y harinosos, sobre todo si se refrigeran demasiado pronto.",
      store:
        "Mantenlos a temperatura ambiente y fuera del sol para el sabor; refrigera solo los muy maduros para ganar un día o dos.",
      cook: "Asa los tomates blandos para una salsa, una sopa o una bandeja al horno.",
    },
    pt: {
      name: "Tomates",
      question: "Quanto tempo duram os tomates?",
      why: "Os tomates continuam a amadurecer depois da colheita e ficam moles e farinhentos, sobretudo se forem refrigerados cedo demais.",
      store:
        "Mantenha-os à temperatura ambiente e fora do sol para o sabor; refrigere só os muito maduros para ganhar um dia ou dois.",
      cook: "Asse os tomates moles para um molho, uma sopa ou um tabuleiro no forno.",
    },
    de: {
      name: "Tomaten",
      question: "Wie lange halten Tomaten?",
      why: "Tomaten reifen nach der Ernte weiter und werden weich und mehlig, besonders wenn sie zu früh gekühlt werden.",
      store:
        "Für den Geschmack bei Zimmertemperatur und vor Sonne geschützt lagern; nur sehr reife kühlen, um ein bis zwei Tage zu gewinnen.",
      cook: "Weiche Tomaten für eine Sauce, Suppe oder ein Ofengericht rösten.",
    },
  },
  carrots: {
    fr: {
      name: "Carottes",
      question: "Combien de temps se conservent les carottes ?",
      why: "Les carottes sont des racines robustes mais deviennent caoutchouteuses en perdant leur eau.",
      store:
        "Gardez-les dans le bac à légumes, idéalement dans un sac ; retirez les fanes, qui pompent l’humidité.",
      cook: "Utilisez les carottes molles en soupe, ragoût, rôti ou salade râpée — elles sont parfaites cuites.",
    },
    it: {
      name: "Carote",
      question: "Quanto durano le carote?",
      why: "Le carote sono radici resistenti ma diventano gommose man mano che perdono acqua.",
      store:
        "Tienile nel cassetto del frigo, meglio se in un sacchetto; togli i ciuffi, che richiamano umidità.",
      cook: "Usa le carote molli in zuppe, stufati, arrosti o un’insalata grattugiata — cotte sono ottime.",
    },
    es: {
      name: "Zanahorias",
      question: "¿Cuánto duran las zanahorias?",
      why: "Las zanahorias son raíces resistentes pero se vuelven gomosas al perder agua.",
      store:
        "Guárdalas en el cajón de la nevera, mejor en una bolsa; quita las hojas, que les roban humedad.",
      cook: "Usa las zanahorias blandas en sopas, guisos, asados o una ensalada rallada — cocidas están perfectas.",
    },
    pt: {
      name: "Cenouras",
      question: "Quanto tempo duram as cenouras?",
      why: "As cenouras são raízes resistentes mas ficam emborrachadas à medida que perdem água.",
      store:
        "Guarde-as na gaveta do frigorífico, de preferência num saco; retire as ramas, que puxam a humidade.",
      cook: "Use as cenouras moles em sopas, guisados, assados ou uma salada ralada — cozidas ficam ótimas.",
    },
    de: {
      name: "Karotten",
      question: "Wie lange halten Karotten?",
      why: "Karotten sind robuste Wurzeln, werden aber gummiartig, wenn sie Feuchtigkeit verlieren.",
      store:
        "Im Gemüsefach lagern, idealerweise im Beutel; das Grün entfernen, da es Feuchtigkeit zieht.",
      cook: "Weiche Karotten in Suppen, Eintöpfen, Braten oder einem geraspelten Salat verwenden — gekocht sind sie top.",
    },
  },
  potatoes: {
    fr: {
      name: "Pommes de terre",
      question: "Combien de temps se conservent les pommes de terre ?",
      why: "Les pommes de terre germent et verdissent à la lumière et à la chaleur.",
      store:
        "Gardez-les dans un endroit frais, sombre et aéré — pas au frigo, qui transforme leur amidon en sucre. Loin des oignons.",
      cook: "Utilisez les pommes de terre ramollies en purée, soupe, gratin ou rôties.",
    },
    it: {
      name: "Patate",
      question: "Quanto durano le patate?",
      why: "Le patate germogliano e diventano verdi se esposte a luce e calore.",
      store:
        "Tienile in un luogo fresco, buio e arieggiato — non in frigo, che trasforma l’amido in zucchero. Lontano dalle cipolle.",
      cook: "Usa le patate molli in purè, zuppa, gratin o arrosto.",
    },
    es: {
      name: "Patatas",
      question: "¿Cuánto duran las patatas?",
      why: "Las patatas brotan y se ponen verdes con la luz y el calor.",
      store:
        "Guárdalas en un sitio fresco, oscuro y aireado — no en la nevera, que convierte su almidón en azúcar. Lejos de las cebollas.",
      cook: "Usa las patatas blandas en puré, sopa, gratén o asadas.",
    },
    pt: {
      name: "Batatas",
      question: "Quanto tempo duram as batatas?",
      why: "As batatas grelam e ficam verdes com a luz e o calor.",
      store:
        "Guarde-as num local fresco, escuro e arejado — não no frigorífico, que transforma o amido em açúcar. Longe das cebolas.",
      cook: "Use as batatas moles em puré, sopa, gratinado ou assadas.",
    },
    de: {
      name: "Kartoffeln",
      question: "Wie lange halten Kartoffeln?",
      why: "Kartoffeln treiben aus und werden grün, wenn sie Licht und Wärme ausgesetzt sind.",
      store:
        "An einem kühlen, dunklen, luftigen Ort lagern — nicht im Kühlschrank, der ihre Stärke in Zucker umwandelt. Getrennt von Zwiebeln.",
      cook: "Weich werdende Kartoffeln als Püree, Suppe, Gratin oder Bratkartoffeln verwenden.",
    },
  },
  onions: {
    fr: {
      name: "Oignons",
      question: "Combien de temps se conservent les oignons ?",
      why: "Les oignons entiers se gardent des semaines mais germent ou ramollissent dans une atmosphère humide et chaude.",
      store:
        "Stockez les oignons entiers au frais, au sec et à l’air, loin des pommes de terre. Gardez les oignons coupés emballés au frigo.",
      cook: "Caramélisez les oignons ramollis, ou utilisez-les comme base de presque toute soupe, ragoût ou sauce.",
    },
    it: {
      name: "Cipolle",
      question: "Quanto durano le cipolle?",
      why: "Le cipolle intere durano settimane ma germogliano o si ammorbidiscono in ambienti umidi e caldi.",
      store:
        "Conserva le cipolle intere al fresco, all’asciutto e all’aria, lontano dalle patate. Tieni quelle tagliate avvolte in frigo.",
      cook: "Caramella le cipolle molli, o usale come base di quasi ogni zuppa, stufato o salsa.",
    },
    es: {
      name: "Cebollas",
      question: "¿Cuánto duran las cebollas?",
      why: "Las cebollas enteras aguantan semanas pero brotan o se ablandan en ambientes húmedos y cálidos.",
      store:
        "Guarda las cebollas enteras en un sitio fresco, seco y ventilado, lejos de las patatas. Las cortadas, envueltas en la nevera.",
      cook: "Carameliza las cebollas blandas, o úsalas como base de casi cualquier sopa, guiso o salsa.",
    },
    pt: {
      name: "Cebolas",
      question: "Quanto tempo duram as cebolas?",
      why: "As cebolas inteiras duram semanas mas grelam ou amolecem em ambientes húmidos e quentes.",
      store:
        "Guarde as cebolas inteiras em local fresco, seco e arejado, longe das batatas. As cortadas, embrulhadas no frigorífico.",
      cook: "Caramelize as cebolas moles, ou use-as como base de quase qualquer sopa, guisado ou molho.",
    },
    de: {
      name: "Zwiebeln",
      question: "Wie lange halten Zwiebeln?",
      why: "Ganze Zwiebeln halten wochenlang, treiben aber aus oder werden weich in feuchter, warmer Umgebung.",
      store:
        "Ganze Zwiebeln kühl, trocken und luftig lagern, getrennt von Kartoffeln. Angeschnittene eingewickelt im Kühlschrank aufbewahren.",
      cook: "Weiche Zwiebeln karamellisieren oder als Basis fast jeder Suppe, jedes Eintopfs oder jeder Sauce nutzen.",
    },
  },
  cheese: {
    fr: {
      name: "Fromage à pâte dure",
      question: "Combien de temps se conserve le fromage à pâte dure ?",
      why: "Les fromages à pâte dure se gardent bien mais peuvent se dessécher ou développer une moisissure de surface.",
      store:
        "Emballez-le dans du papier cuisson puis sans serrer dans du papier alu, au frigo ; il respire sans se dessécher.",
      cook: "Râpez le fromage qui durcit sur des pâtes, dans une sauce ou un gratin. Coupez une petite moisissure de surface sur la pâte dure.",
    },
    it: {
      name: "Formaggio stagionato",
      question: "Quanto dura il formaggio stagionato?",
      why: "I formaggi stagionati si conservano bene ma possono seccarsi o sviluppare muffa superficiale.",
      store:
        "Avvolgilo nella carta da forno e poi, senza stringere, nella stagnola, in frigo; così respira senza seccarsi.",
      cook: "Gratta il formaggio che indurisce su pasta, in una salsa o su un gratin. Taglia via una piccola muffa superficiale dal duro.",
    },
    es: {
      name: "Queso curado",
      question: "¿Cuánto dura el queso curado?",
      why: "Los quesos curados aguantan bien pero pueden resecarse o criar moho superficial.",
      store:
        "Envuélvelo en papel de horno y luego, sin apretar, en papel de aluminio, en la nevera; así respira sin resecarse.",
      cook: "Ralla el queso que se endurece sobre pasta, en una salsa o en un gratén. Corta el moho superficial pequeño del queso duro.",
    },
    pt: {
      name: "Queijo curado",
      question: "Quanto tempo dura o queijo curado?",
      why: "Os queijos curados aguentam bem mas podem ressecar ou ganhar bolor à superfície.",
      store:
        "Embrulhe-o em papel vegetal e depois, sem apertar, em folha de alumínio, no frigorífico; assim respira sem ressecar.",
      cook: "Rale o queijo que endurece sobre massa, num molho ou num gratinado. Corte o bolor superficial pequeno do queijo duro.",
    },
    de: {
      name: "Hartkäse",
      question: "Wie lange hält Hartkäse?",
      why: "Hartkäse hält gut, kann aber austrocknen oder oberflächlich Schimmel ansetzen.",
      store:
        "In Backpapier und dann locker in Folie im Kühlschrank lagern; so atmet er, ohne auszutrocknen.",
      cook: "Festeren Käse über Pasta, in eine Sauce oder auf ein Gratin reiben. Kleinen Oberflächenschimmel beim Hartkäse abschneiden.",
    },
  },
  yoghurt: {
    fr: {
      name: "Yaourt",
      question: "Combien de temps se conserve le yaourt ?",
      why: "Le yaourt est fermenté et assez stable, mais finit par se séparer et tourner passé son meilleur moment.",
      store:
        "Gardez-le sur une étagère froide du frigo et utilisez une cuillère propre pour ne pas introduire de bactéries.",
      cook: "Utilisez le yaourt proche de la date dans des marinades, smoothies, pâtisseries ou un curry.",
    },
    it: {
      name: "Yogurt",
      question: "Quanto dura lo yogurt?",
      why: "Lo yogurt è fermentato e abbastanza stabile, ma alla fine si separa e inacidisce oltre il suo meglio.",
      store:
        "Tienilo su un ripiano freddo del frigo e usa un cucchiaio pulito per non introdurre batteri.",
      cook: "Usa lo yogurt vicino alla scadenza in marinate, frullati, dolci o un curry.",
    },
    es: {
      name: "Yogur",
      question: "¿Cuánto dura el yogur?",
      why: "El yogur está fermentado y es bastante estable, pero acaba separándose y agriándose pasado su mejor momento.",
      store:
        "Guárdalo en un estante frío de la nevera y usa una cuchara limpia para no introducir bacterias.",
      cook: "Usa el yogur cerca de la fecha en adobos, batidos, repostería o un curry.",
    },
    pt: {
      name: "Iogurte",
      question: "Quanto tempo dura o iogurte?",
      why: "O iogurte é fermentado e bastante estável, mas acaba por se separar e azedar depois do seu melhor.",
      store:
        "Guarde-o numa prateleira fria do frigorífico e use uma colher limpa para não introduzir bactérias.",
      cook: "Use o iogurte perto da data em marinadas, batidos, bolos ou um caril.",
    },
    de: {
      name: "Joghurt",
      question: "Wie lange hält Joghurt?",
      why: "Joghurt ist fermentiert und recht stabil, trennt sich aber irgendwann und wird über seinen Höhepunkt hinaus sauer.",
      store:
        "Auf einem kalten Kühlschrankfach lagern und einen sauberen Löffel nehmen, um keine Bakterien einzubringen.",
      cook: "Joghurt nahe am Datum in Marinaden, Smoothies, Gebäck oder einem Curry verwenden.",
    },
  },
  mushrooms: {
    fr: {
      name: "Champignons",
      question: "Combien de temps se conservent les champignons ?",
      why: "Les champignons sont spongieux et deviennent visqueux ou secs selon qu’ils perdent ou absorbent l’humidité.",
      store:
        "Gardez-les dans un sac en papier au frigo, pas dans du plastique fermé, pour qu’ils respirent.",
      cook: "Faites revenir les champignons qui vieillissent avec de l’ail et ajoutez-les à des pâtes, un risotto, des omelettes ou sur du pain.",
    },
    it: {
      name: "Funghi",
      question: "Quanto durano i funghi?",
      why: "I funghi sono spugnosi e diventano viscidi o secchi a seconda che perdano o assorbano umidità.",
      store:
        "Tienili in un sacchetto di carta in frigo, non in plastica chiusa, così respirano.",
      cook: "Salta i funghi che invecchiano con aglio e aggiungili a pasta, risotto, frittate o su pane tostato.",
    },
    es: {
      name: "Champiñones",
      question: "¿Cuánto duran los champiñones?",
      why: "Los champiñones son esponjosos y se vuelven viscosos o secos según pierdan o absorban humedad.",
      store:
        "Guárdalos en una bolsa de papel en la nevera, no en plástico cerrado, para que respiren.",
      cook: "Saltea los champiñones que envejecen con ajo y añádelos a pasta, risotto, tortillas o sobre tostada.",
    },
    pt: {
      name: "Cogumelos",
      question: "Quanto tempo duram os cogumelos?",
      why: "Os cogumelos são esponjosos e ficam viscosos ou secos consoante percam ou absorvam humidade.",
      store:
        "Guarde-os num saco de papel no frigorífico, não em plástico fechado, para respirarem.",
      cook: "Salteie os cogumelos que envelhecem com alho e junte-os a massa, risoto, omeletes ou sobre tosta.",
    },
    de: {
      name: "Pilze",
      question: "Wie lange halten Pilze?",
      why: "Pilze sind schwammartig und werden schleimig oder trocken, je nachdem, ob sie Feuchtigkeit verlieren oder aufnehmen.",
      store:
        "In einer Papiertüte im Kühlschrank lagern, nicht in geschlossener Folie, damit sie atmen.",
      cook: "Ältere Pilze mit Knoblauch anbraten und zu Pasta, Risotto, Omeletts oder auf Brot geben.",
    },
  },
  lettuce: {
    fr: {
      name: "Laitue",
      question: "Combien de temps se conserve la laitue ?",
      why: "La salade en feuilles se flétrit et brunit sur les bords coupés en perdant son eau.",
      store:
        "Gardez-la sèche et emballée sans serrer avec de l’essuie-tout dans le bac à légumes.",
      cook: "Faites tomber la laitue fatiguée dans une soupe ou un sauté — la sucrine et la romaine sont bonnes braisées ou grillées.",
    },
    it: {
      name: "Lattuga",
      question: "Quanto dura la lattuga?",
      why: "L’insalata in foglie appassisce e imbrunisce sui bordi tagliati man mano che perde acqua.",
      store:
        "Tienila asciutta e avvolta senza stringere con carta da cucina nel cassetto del frigo.",
      cook: "Fai appassire la lattuga stanca in una zuppa o saltata — lattughino e romana sono buone brasate o grigliate.",
    },
    es: {
      name: "Lechuga",
      question: "¿Cuánto dura la lechuga?",
      why: "La hoja de ensalada se marchita y se oscurece en los bordes cortados al perder agua.",
      store:
        "Mantenla seca y envuelta sin apretar con papel de cocina en el cajón de verduras.",
      cook: "Saltea la lechuga cansada en una sopa o salteado — el cogollo y la romana van bien braseados o a la plancha.",
    },
    pt: {
      name: "Alface",
      question: "Quanto tempo dura a alface?",
      why: "A folha de salada murcha e escurece nos bordos cortados à medida que perde água.",
      store:
        "Mantenha-a seca e embrulhada sem apertar com papel de cozinha na gaveta dos legumes.",
      cook: "Refogue a alface cansada numa sopa ou salteado — a alface-coração e a romana ficam bem estufadas ou grelhadas.",
    },
    de: {
      name: "Salat",
      question: "Wie lange hält Salat?",
      why: "Blattsalat welkt und wird an den Schnittkanten braun, wenn er Feuchtigkeit verliert.",
      store:
        "Trocken und locker in Küchenpapier gewickelt im Gemüsefach lagern.",
      cook: "Müden Salat in einer Suppe oder Pfanne zusammenfallen lassen — Romana eignet sich auch geschmort oder gegrillt.",
    },
  },
  "bell-peppers": {
    fr: {
      name: "Poivrons",
      question: "Combien de temps se conservent les poivrons ?",
      why: "Les poivrons se rident et ramollissent lentement en se déshydratant.",
      store:
        "Gardez-les entiers et secs dans le bac à légumes ; une fois coupés, emballez et utilisez sous quelques jours.",
      cook: "Rôtissez les poivrons ramollis pour une sauce, une soupe, des fajitas ou un plat au four.",
    },
    it: {
      name: "Peperoni",
      question: "Quanto durano i peperoni?",
      why: "I peperoni si raggrinziscono e ammorbidiscono lentamente disidratandosi.",
      store:
        "Tienili interi e asciutti nel cassetto del frigo; una volta tagliati, avvolgili e usali in pochi giorni.",
      cook: "Arrostisci i peperoni molli per una salsa, una zuppa, fajitas o una teglia al forno.",
    },
    es: {
      name: "Pimientos",
      question: "¿Cuánto duran los pimientos?",
      why: "Los pimientos se arrugan y ablandan poco a poco al deshidratarse.",
      store:
        "Mantenlos enteros y secos en el cajón de la nevera; una vez cortados, envuélvelos y úsalos en unos días.",
      cook: "Asa los pimientos blandos para una salsa, una sopa, fajitas o una bandeja al horno.",
    },
    pt: {
      name: "Pimentos",
      question: "Quanto tempo duram os pimentos?",
      why: "Os pimentos enrugam e amolecem lentamente à medida que desidratam.",
      store:
        "Mantenha-os inteiros e secos na gaveta do frigorífico; depois de cortados, embrulhe e use em poucos dias.",
      cook: "Asse os pimentos moles para um molho, uma sopa, fajitas ou um tabuleiro no forno.",
    },
    de: {
      name: "Paprika",
      question: "Wie lange hält Paprika?",
      why: "Paprika schrumpelt und wird langsam weich, während sie austrocknet.",
      store:
        "Ganz und trocken im Gemüsefach lagern; angeschnitten einwickeln und in ein paar Tagen verbrauchen.",
      cook: "Weiche Paprika für eine Sauce, Suppe, Fajitas oder ein Ofengericht rösten.",
    },
  },
  broccoli: {
    fr: {
      name: "Brocoli",
      question: "Combien de temps se conserve le brocoli ?",
      why: "Le brocoli jaunit et ramollit à mesure que les fleurettes vieillissent.",
      store:
        "Gardez-le non lavé au frigo, emballé sans serrer ; un essuie-tout humide l’aide à rester croquant.",
      cook: "Rôtissez ou sautez le brocoli vieillissant, ou mixez-le en soupe — tiges comprises.",
    },
    it: {
      name: "Broccoli",
      question: "Quanto durano i broccoli?",
      why: "I broccoli ingialliscono e si ammorbidiscono man mano che le cimette invecchiano.",
      store:
        "Tienili non lavati in frigo, avvolti senza stringere; un foglio di carta umido li aiuta a restare croccanti.",
      cook: "Arrostisci o salta i broccoli che invecchiano, o frullali in una zuppa — gambi inclusi.",
    },
    es: {
      name: "Brócoli",
      question: "¿Cuánto dura el brócoli?",
      why: "El brócoli amarillea y se ablanda a medida que envejecen los ramilletes.",
      store:
        "Mantenlo sin lavar en la nevera, envuelto sin apretar; un papel de cocina húmedo ayuda a que siga crujiente.",
      cook: "Asa o saltea el brócoli que envejece, o tritúralo en una sopa — tallos incluidos.",
    },
    pt: {
      name: "Brócolos",
      question: "Quanto tempo duram os brócolos?",
      why: "Os brócolos amarelecem e amolecem à medida que os raminhos envelhecem.",
      store:
        "Mantenha-os por lavar no frigorífico, embrulhados sem apertar; um papel de cozinha húmido ajuda a manter a crocância.",
      cook: "Asse ou salteie os brócolos que envelhecem, ou triture-os numa sopa — talos incluídos.",
    },
    de: {
      name: "Brokkoli",
      question: "Wie lange hält Brokkoli?",
      why: "Brokkoli vergilbt und wird weich, während die Röschen altern.",
      store:
        "Ungewaschen im Kühlschrank lagern, locker eingewickelt; ein feuchtes Küchentuch hält ihn knackig.",
      cook: "Älteren Brokkoli rösten oder anbraten oder zu einer Suppe pürieren — Stiele inklusive.",
    },
  },
  apples: {
    fr: {
      name: "Pommes",
      question: "Combien de temps se conservent les pommes ?",
      why: "Les pommes se gardent des semaines mais deviennent farineuses et ridées en perdant leur croquant, et elles font mûrir plus vite les produits voisins.",
      store:
        "Gardez-les dans le bac à légumes, à l’écart des autres fruits et légumes qu’elles feraient trop mûrir.",
      cook: "Faites compoter les pommes molles en compote, crumble ou garniture de porridge.",
    },
    it: {
      name: "Mele",
      question: "Quanto durano le mele?",
      why: "Le mele durano settimane ma diventano farinose e raggrinzite perdendo croccantezza, e accelerano la maturazione dei prodotti vicini.",
      store:
        "Tienile nel cassetto del frigo, lontano da altra frutta e verdura che farebbero maturare troppo.",
      cook: "Cuoci le mele molli in composta, crumble o come guarnizione del porridge.",
    },
    es: {
      name: "Manzanas",
      question: "¿Cuánto duran las manzanas?",
      why: "Las manzanas aguantan semanas pero se ponen harinosas y arrugadas al perder su textura crujiente, y aceleran la maduración de lo que tienen cerca.",
      store:
        "Guárdalas en el cajón de la nevera, lejos de otras frutas y verduras que harían madurar de más.",
      cook: "Cuece las manzanas blandas en compota, crumble o como topping de gachas.",
    },
    pt: {
      name: "Maçãs",
      question: "Quanto tempo duram as maçãs?",
      why: "As maçãs duram semanas mas ficam farinhentas e enrugadas ao perder a crocância, e aceleram o amadurecimento do que está por perto.",
      store:
        "Guarde-as na gaveta do frigorífico, longe de outras frutas e legumes que fariam amadurecer demais.",
      cook: "Cozinhe as maçãs moles em compota, crumble ou como cobertura de papas.",
    },
    de: {
      name: "Äpfel",
      question: "Wie lange halten Äpfel?",
      why: "Äpfel halten wochenlang, werden aber mehlig und schrumpelig, wenn sie ihre Knackigkeit verlieren, und sie lassen nahes Obst und Gemüse schneller reifen.",
      store:
        "Im Gemüsefach lagern, getrennt von anderem Obst und Gemüse, das sie überreif werden ließen.",
      cook: "Weiche Äpfel zu Kompott, Crumble oder als Porridge-Topping einkochen.",
    },
  },
  fish: {
    fr: {
      name: "Poisson frais",
      question: "Combien de temps se conserve le poisson frais ?",
      why: "Le poisson frais est très périssable et se dégrade vite, même réfrigéré.",
      store:
        "Gardez-le sur de la glace ou dans la partie la plus froide du frigo et cuisez-le le jour même ou le lendemain de l’achat.",
      cook: "Cuisez-le dans la journée, ou congelez-le le jour de l’achat. Fiez-vous à votre nez — le poisson frais sent la mer, pas le « poisson ».",
    },
    it: {
      name: "Pesce fresco",
      question: "Quanto dura il pesce fresco?",
      why: "Il pesce fresco è molto deperibile e si degrada in fretta anche se refrigerato.",
      store:
        "Tienilo sul ghiaccio o nella parte più fredda del frigo e cuocilo il giorno stesso o il giorno dopo l’acquisto.",
      cook: "Cuocilo in giornata, o congelalo il giorno dell’acquisto. Fidati del naso — il pesce fresco sa di mare, non di « pesce ».",
    },
    es: {
      name: "Pescado fresco",
      question: "¿Cuánto dura el pescado fresco?",
      why: "El pescado fresco es muy perecedero y se degrada rápido incluso refrigerado.",
      store:
        "Mantenlo sobre hielo o en la parte más fría de la nevera y cocínalo el mismo día o al día siguiente de la compra.",
      cook: "Cocínalo en el día, o congélalo el día de la compra. Fíate de tu olfato — el pescado fresco huele a mar, no a « pescado ».",
    },
    pt: {
      name: "Peixe fresco",
      question: "Quanto tempo dura o peixe fresco?",
      why: "O peixe fresco é muito perecível e degrada-se depressa mesmo refrigerado.",
      store:
        "Mantenha-o sobre gelo ou na parte mais fria do frigorífico e cozinhe-o no próprio dia ou no dia seguinte à compra.",
      cook: "Cozinhe-o no dia, ou congele-o no dia da compra. Confie no nariz — o peixe fresco cheira a mar, não a « peixe ».",
    },
    de: {
      name: "Frischer Fisch",
      question: "Wie lange hält frischer Fisch?",
      why: "Frischer Fisch ist sehr leicht verderblich und verfällt schnell, selbst gekühlt.",
      store:
        "Auf Eis oder im kältesten Teil des Kühlschranks lagern und am Kauftag oder am Tag danach garen.",
      cook: "Innerhalb eines Tages garen oder am Kauftag einfrieren. Vertrau der Nase — frischer Fisch riecht nach Meer, nicht „fischig“.",
    },
  },
  herbs: {
    fr: {
      name: "Herbes fraîches",
      question: "Combien de temps se conservent les herbes fraîches ?",
      why: "Les herbes tendres comme la coriandre et le basilic se flétrissent vite ; ce sont surtout de l’eau dans des feuilles fines.",
      store:
        "Mettez les herbes tendres dans un verre d’eau comme des fleurs, couvertes sans serrer, au frigo (le basilic préfère le plan de travail).",
      cook: "Mixez les herbes fatiguées en pesto, salsa verde ou marinade, ou congelez-les dans de l’huile en bac à glaçons.",
    },
    it: {
      name: "Erbe fresche",
      question: "Quanto durano le erbe fresche?",
      why: "Le erbe tenere come coriandolo e basilico appassiscono in fretta; sono soprattutto acqua in foglie sottili.",
      store:
        "Metti le erbe tenere in un bicchiere d’acqua come fiori, coperte senza stringere, in frigo (il basilico preferisce il piano).",
      cook: "Frulla le erbe stanche in pesto, salsa verde o marinata, o congelale nell’olio in uno stampo per ghiaccio.",
    },
    es: {
      name: "Hierbas frescas",
      question: "¿Cuánto duran las hierbas frescas?",
      why: "Las hierbas tiernas como el cilantro y la albahaca se marchitan rápido; son sobre todo agua en hojas finas.",
      store:
        "Pon las hierbas tiernas en un vaso de agua como flores, cubiertas sin apretar, en la nevera (la albahaca prefiere la encimera).",
      cook: "Tritura las hierbas cansadas en pesto, salsa verde o adobo, o congélalas en aceite en una cubitera.",
    },
    pt: {
      name: "Ervas frescas",
      question: "Quanto tempo duram as ervas frescas?",
      why: "As ervas tenras como os coentros e o manjericão murcham depressa; são sobretudo água em folhas finas.",
      store:
        "Ponha as ervas tenras num copo de água como flores, tapadas sem apertar, no frigorífico (o manjericão prefere a bancada).",
      cook: "Triture as ervas cansadas em pesto, salsa verde ou marinada, ou congele-as em azeite numa cuvete de gelo.",
    },
    de: {
      name: "Frische Kräuter",
      question: "Wie lange halten frische Kräuter?",
      why: "Weiche Kräuter wie Koriander und Basilikum welken schnell; sie sind vor allem Wasser in dünnen Blättern.",
      store:
        "Weiche Kräuter wie Blumen in ein Glas Wasser stellen, locker abgedeckt, im Kühlschrank (Basilikum mag die Arbeitsfläche).",
      cook: "Müde Kräuter zu Pesto, Salsa verde oder Marinade pürieren oder in Öl in einer Eiswürfelform einfrieren.",
    },
  },
  butter: {
    fr: {
      name: "Beurre",
      question: "Combien de temps se conserve le beurre ?",
      why: "Le beurre est riche en gras et se garde bien, mais peut capter les odeurs du frigo et finir par rancir.",
      store:
        "Gardez-le emballé au frigo ; congelez les plaques en trop. Un peu dans un beurrier couvert à température ambiante convient pour l’usage quotidien.",
      cook: "Utilisez le beurre proche de la date en pâtisserie, dans des sauces ou en beurre noisette.",
    },
    it: {
      name: "Burro",
      question: "Quanto dura il burro?",
      why: "Il burro è ricco di grassi e si conserva bene, ma può assorbire gli odori del frigo e alla fine irrancidire.",
      store:
        "Tienilo avvolto in frigo; congela i panetti in più. Un po’ in una burriera coperta a temperatura ambiente va bene per l’uso quotidiano.",
      cook: "Usa il burro vicino alla scadenza in dolci, salse o come burro nocciola.",
    },
    es: {
      name: "Mantequilla",
      question: "¿Cuánto dura la mantequilla?",
      why: "La mantequilla es rica en grasa y aguanta bien, pero puede coger olores de la nevera y acabar enranciándose.",
      store:
        "Guárdala envuelta en la nevera; congela las pastillas de sobra. Un poco en una mantequera tapada a temperatura ambiente va bien para el día a día.",
      cook: "Usa la mantequilla cerca de la fecha en repostería, salsas o como mantequilla avellana.",
    },
    pt: {
      name: "Manteiga",
      question: "Quanto tempo dura a manteiga?",
      why: "A manteiga é rica em gordura e dura bem, mas pode apanhar cheiros do frigorífico e acabar por rançar.",
      store:
        "Guarde-a embrulhada no frigorífico; congele os pacotes a mais. Um pouco numa manteigueira tapada à temperatura ambiente serve para o dia a dia.",
      cook: "Use a manteiga perto da data em bolos, molhos ou como manteiga avelã.",
    },
    de: {
      name: "Butter",
      question: "Wie lange hält Butter?",
      why: "Butter ist fettreich und hält gut, kann aber Kühlschrankgerüche annehmen und irgendwann ranzig werden.",
      store:
        "Eingewickelt im Kühlschrank lagern; überzählige Stücke einfrieren. Etwas in einer abgedeckten Butterdose bei Zimmertemperatur ist für den täglichen Gebrauch okay.",
      cook: "Butter nahe am Datum zum Backen, für Saucen oder als braune Butter verwenden.",
    },
  },
  leftovers: {
    fr: {
      name: "Restes cuisinés",
      question: "Combien de temps se conservent les restes cuisinés ?",
      why: "Les plats cuisinés peuvent développer des bactéries une fois refroidis, d’où une courte fenêtre sûre au frigo.",
      store:
        "Refroidissez sous deux heures, conservez dans un récipient fermé, et gardez 2–3 jours au maximum — ou congelez pour plus tard.",
      cook: "Réchauffez les restes jusqu’à ce qu’ils soient brûlants, une seule fois. Copantry suit vos portions de restes pour ne pas les oublier.",
    },
    it: {
      name: "Avanzi cotti",
      question: "Quanto durano gli avanzi cotti?",
      why: "I piatti cotti possono sviluppare batteri una volta raffreddati, quindi hanno una breve finestra sicura in frigo.",
      store:
        "Raffredda entro due ore, conserva in un contenitore chiuso e tieni al massimo 2–3 giorni — o congela per dopo.",
      cook: "Riscalda gli avanzi finché sono bollenti, una volta sola. Copantry tiene traccia delle porzioni avanzate così non si dimenticano.",
    },
    es: {
      name: "Sobras cocinadas",
      question: "¿Cuánto duran las sobras cocinadas?",
      why: "Los platos cocinados pueden criar bacterias una vez fríos, así que tienen una ventana segura corta en la nevera.",
      store:
        "Enfría en dos horas, guarda en un recipiente cerrado y conserva como mucho 2–3 días — o congela para luego.",
      cook: "Recalienta las sobras hasta que estén bien calientes, una sola vez. Copantry controla tus porciones de sobras para que no se olviden.",
    },
    pt: {
      name: "Sobras cozinhadas",
      question: "Quanto tempo duram as sobras cozinhadas?",
      why: "Os pratos cozinhados podem ganhar bactérias depois de arrefecidos, por isso têm uma janela segura curta no frigorífico.",
      store:
        "Arrefeça em duas horas, guarde num recipiente fechado e conserve no máximo 2–3 dias — ou congele para depois.",
      cook: "Reaqueça as sobras até ficarem bem quentes, uma só vez. O Copantry acompanha as suas porções de sobras para não serem esquecidas.",
    },
    de: {
      name: "Gekochte Reste",
      question: "Wie lange halten gekochte Reste?",
      why: "Gekochte Gerichte können nach dem Abkühlen Bakterien bilden, daher haben sie ein kurzes sicheres Fenster im Kühlschrank.",
      store:
        "Innerhalb von zwei Stunden abkühlen, in einem geschlossenen Behälter aufbewahren und höchstens 2–3 Tage halten — oder für später einfrieren.",
      cook: "Reste nur einmal aufwärmen, bis sie dampfend heiß sind. Copantry verfolgt deine Restportionen, damit sie nicht vergessen werden.",
    },
  },
};

// ── Resolvers ────────────────────────────────────────────────────────────────

/** Localized category label (falls back to the English key). */
export function localizedCategory(category, lng) {
  return CATEGORY_TX[category]?.[lng] ?? category;
}

/**
 * Resolve a single shelf-life item for a locale: structural fields from
 * shelfLife.js + translated name/question/why/store/cook + a built answer
 * sentence. English/`us` use the English templates and source text.
 */
export function localizedShelfItem(item, lng) {
  const ui = LEARN_UI[lng] || LEARN_UI.en;
  const tx = SHELF_LIFE_TX[item.slug]?.[lng];
  const name = tx?.name ?? item.name;
  return {
    ...item,
    name,
    category: localizedCategory(item.category, lng),
    question: tx?.question ?? ui.question(item.name),
    answer: ui.answer(name, item.min, item.max),
    why: tx?.why ?? item.why,
    store: tx?.store ?? item.store,
    cook: tx?.cook ?? item.cook,
  };
}

/** All shelf-life items resolved for a locale, in source order. */
export function localizedShelfList(lng) {
  return SHELF_LIFE.map((item) => localizedShelfItem(item, lng));
}
