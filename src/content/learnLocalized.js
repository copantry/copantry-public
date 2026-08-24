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
import { baseLocaleOf } from "./localized.js";

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
  nl: {
    eyebrow: "Leren",
    breadcrumbLearn: "Leren",
    h1: "Hoelang blijft voedsel goed?",
    lede: "Eenvoudige, eerlijke gidsen over hoelang alledaags eten goed blijft, waarom het bederft, hoe je het bewaart zodat het langer meegaat, en wat je ervan kookt voordat het over is. Algemene richtlijnen — vertrouw bij twijfel op je zintuigen.",
    fridgeShort: (min, max) => `~${min}–${max} dagen in de koelkast`,
    daysUnit: (min, max) => `${min}–${max} dagen`,
    inFridgeGuide: "in de koelkast (algemene richtlijn)",
    blockWhy: "Waarom het bederft",
    blockStore: "Zo bewaar je het langer",
    blockCook: "Wat je ervan kookt voordat het over is",
    question: (name) => `Hoelang blijft ${name.toLowerCase()} goed?`,
    answer: (name, min, max) =>
      `${name} blijft meestal ongeveer ${min} tot ${max} dagen goed in de koelkast, afhankelijk van hoe vers het was en hoe je het bewaart.`,
    disclaimerPre:
      "Dit zijn algemene richtlijnen voor een gemiddeld, goed bewaard product, geen veiligheidsgaranties. Controleer altijd de houdbaarheidsdatum en vertrouw op je ogen en neus. Copantry kan dit automatisch voor je dateren — zie ",
    pantryTrackingLabel: "voorraadkast bijhouden",
    neverBin: "Gooi geen goed eten meer weg — zie hoe Copantry helpt",
    ctaIndexTitle: "Stop met gissen wat nog goed is",
    ctaIndexSub:
      "Copantry dateert alles in je keuken en vertelt je wat er als eerste op moet. Gratis te gebruiken, geen creditcard nodig.",
    ctaDetailTitle: "Weet precies wat nog goed is",
    ctaDetailSub:
      "Copantry houdt bij hoelang alles in je keuken nog goed is en vertelt je wat er als eerste op moet. Gratis te gebruiken.",
  },
  sv: {
    eyebrow: "Lär dig",
    breadcrumbLearn: "Lär dig",
    h1: "Hur länge håller maten?",
    lede: "Enkla, ärliga guider till hur länge vardagsmat håller, varför den blir dålig, hur du förvarar den så att den håller längre och vad du lagar innan den tar slut. Allmänna riktvärden — tveka du, lita på dina sinnen.",
    fridgeShort: (min, max) => `~${min}–${max} dagar i kylen`,
    daysUnit: (min, max) => `${min}–${max} dagar`,
    inFridgeGuide: "i kylen (allmänt riktvärde)",
    blockWhy: "Varför den blir dålig",
    blockStore: "Så förvarar du den så att den håller längre",
    blockCook: "Vad du lagar innan den blir dålig",
    question: (name) => `Hur länge håller ${name.toLowerCase()}?`,
    answer: (name, min, max) =>
      `${name} håller vanligtvis ungefär ${min} till ${max} dagar i kylen, men det varierar med hur färsk den var och hur den förvaras.`,
    disclaimerPre:
      "Det här är allmänna riktvärden för en typisk, välförvarad vara, inte säkerhetsgarantier. Kontrollera alltid sista förbrukningsdag och lita på ögon och näsa. Copantry kan datera det åt dig automatiskt — se ",
    pantryTrackingLabel: "koll på skafferiet",
    neverBin: "Sluta slänga fullgod mat — se hur Copantry hjälper",
    ctaIndexTitle: "Sluta gissa vad som fortfarande är bra",
    ctaIndexSub:
      "Copantry daterar allt i ditt kök och säger vad du ska använda först. Gratis att använda, inget kort behövs.",
    ctaDetailTitle: "Vet exakt vad som fortfarande är bra",
    ctaDetailSub:
      "Copantry håller koll på hur länge allt i ditt kök har kvar och säger vad du ska använda först. Gratis att använda.",
  },
  da: {
    eyebrow: "Lær",
    breadcrumbLearn: "Lær",
    h1: "Hvor længe holder maden?",
    lede: "Enkle, ærlige guides til, hvor længe hverdagsmad holder, hvorfor den bliver dårlig, hvordan du opbevarer den, så den holder længere, og hvad du laver af den, før den er for gammel. Generelle retningslinjer — er du i tvivl, så stol på dine sanser.",
    fridgeShort: (min, max) => `~${min}–${max} dage i køleskabet`,
    daysUnit: (min, max) => `${min}–${max} dage`,
    inFridgeGuide: "i køleskabet (generel rettesnor)",
    blockWhy: "Hvorfor den bliver dårlig",
    blockStore: "Sådan opbevarer du den, så den holder længere",
    blockCook: "Hvad du laver af den, før den er for gammel",
    question: (name) => `Hvor længe holder ${name.toLowerCase()}?`,
    answer: (name, min, max) =>
      `${name} holder typisk omkring ${min} til ${max} dage i køleskabet, men det afhænger af, hvor frisk den var, og hvordan den opbevares.`,
    disclaimerPre:
      "Det er generelle retningslinjer for en typisk, velopbevaret vare, ikke sikkerhedsgarantier. Tjek altid sidste anvendelsesdato, og stol på dine øjne og din næse. Copantry kan datere det for dig automatisk — se ",
    pantryTrackingLabel: "styr på spisekammeret",
    neverBin: "Hold op med at smide god mad ud — se, hvordan Copantry hjælper",
    ctaIndexTitle: "Hold op med at gætte på, hvad der stadig er godt",
    ctaIndexSub:
      "Copantry sætter dato på alt i dit køkken og fortæller dig, hvad du skal bruge først. Gratis at bruge, intet kort nødvendigt.",
    ctaDetailTitle: "Vid præcis, hvad der stadig er godt",
    ctaDetailSub:
      "Copantry holder styr på, hvor længe alt i dit køkken har tilbage, og fortæller dig, hvad du skal bruge først. Gratis at bruge.",
  },
  fi: {
    eyebrow: "Opi",
    breadcrumbLearn: "Opi",
    h1: "Kuinka kauan ruoka säilyy?",
    lede: "Selkeitä ja rehellisiä oppaita siitä, kuinka kauan arkiruoka säilyy, miksi se pilaantuu, miten se kannattaa säilyttää ja mitä siitä laittaa ennen kuin se menee huonoksi. Yleisiä suuntaviivoja — epävarmassa tilanteessa luota aisteihisi.",
    fridgeShort: (min, max) => `~${min}–${max} päivää jääkaapissa`,
    daysUnit: (min, max) => `${min}–${max} päivää`,
    inFridgeGuide: "jääkaapissa (yleinen suuntaviiva)",
    blockWhy: "Miksi se pilaantuu",
    blockStore: "Näin säilytät sen pidempään",
    blockCook: "Mitä siitä laittaa ennen kuin se menee huonoksi",
    question: (name) => `Kuinka kauan ${name.toLowerCase()} säilyy?`,
    answer: (name, min, max) =>
      `${name} säilyy jääkaapissa yleensä noin ${min}–${max} päivää, mutta se riippuu tuoreudesta ja säilytystavasta.`,
    disclaimerPre:
      "Nämä ovat yleisiä suuntaviivoja tavanomaiselle, hyvin säilytetylle tuotteelle, eivät turvallisuustakuita. Tarkista aina viimeinen käyttöpäivä ja luota silmiisi ja nenääsi. Copantry voi päivätä tämän puolestasi automaattisesti — katso ",
    pantryTrackingLabel: "ruokakomeron seuranta",
    neverBin: "Lopeta hyvän ruoan heittäminen — katso, miten Copantry auttaa",
    ctaIndexTitle: "Lopeta arvailu siitä, mikä on vielä hyvää",
    ctaIndexSub:
      "Copantry päivää kaiken keittiössäsi ja kertoo, mikä pitää käyttää ensin. Ilmainen käyttää, korttia ei tarvita.",
    ctaDetailTitle: "Tiedä tarkalleen, mikä on vielä hyvää",
    ctaDetailSub:
      "Copantry seuraa, kuinka kauan kaikella keittiössäsi on aikaa jäljellä, ja kertoo, mikä pitää käyttää ensin. Ilmainen käyttää.",
  },
  no: {
    eyebrow: "Lær",
    breadcrumbLearn: "Lær",
    h1: "Hvor lenge holder maten?",
    lede: "Enkle, ærlige guider til hvor lenge hverdagsmat holder, hvorfor den blir dårlig, hvordan du oppbevarer den så den varer lenger, og hva du lager av den før den er for gammel. Generelle retningslinjer — er du i tvil, stol på sansene dine.",
    fridgeShort: (min, max) => `~${min}–${max} dager i kjøleskapet`,
    daysUnit: (min, max) => `${min}–${max} dager`,
    inFridgeGuide: "i kjøleskapet (generell rettesnor)",
    blockWhy: "Hvorfor den blir dårlig",
    blockStore: "Slik oppbevarer du den så den varer lenger",
    blockCook: "Hva du lager av den før den blir dårlig",
    question: (name) => `Hvor lenge holder ${name.toLowerCase()}?`,
    answer: (name, min, max) =>
      `${name} holder som regel rundt ${min} til ${max} dager i kjøleskapet, men det varierer med hvor fersk den var og hvordan den oppbevares.`,
    disclaimerPre:
      "Dette er generelle retningslinjer for en typisk, godt oppbevart vare, ikke sikkerhetsgarantier. Sjekk alltid siste forbruksdag, og stol på øynene og nesen din. Copantry kan datere dette for deg automatisk — se ",
    pantryTrackingLabel: "oversikt over spiskammeret",
    neverBin: "Slutt å kaste god mat — se hvordan Copantry hjelper",
    ctaIndexTitle: "Slutt å gjette på hva som fortsatt er godt",
    ctaIndexSub:
      "Copantry setter dato på alt på kjøkkenet ditt og forteller deg hva du bør bruke først. Gratis å bruke, ingen kort nødvendig.",
    ctaDetailTitle: "Vit nøyaktig hva som fortsatt er godt",
    ctaDetailSub:
      "Copantry holder oversikt over hvor lenge alt på kjøkkenet ditt har igjen, og forteller deg hva du bør bruke først. Gratis å bruke.",
  },
  pl: {
    eyebrow: "Poradnik",
    breadcrumbLearn: "Poradnik",
    h1: "Jak długo trzyma się jedzenie?",
    lede: "Proste, uczciwe poradniki o tym, jak długo trzyma się codzienne jedzenie, dlaczego się psuje, jak je przechowywać, żeby wytrzymało dłużej, i co z niego ugotować, zanim się zepsuje. To ogólne wskazówki — w razie wątpliwości zaufaj zmysłom.",
    fridgeShort: (min, max) => `~${min}–${max} dni w lodówce`,
    daysUnit: (min, max) => `${min}–${max} dni`,
    inFridgeGuide: "w lodówce (ogólna wskazówka)",
    blockWhy: "Dlaczego się psuje",
    blockStore: "Jak przechowywać, żeby wytrzymało dłużej",
    blockCook: "Co ugotować, zanim się zepsuje",
    question: (name) => `Jak długo trzyma się ${name.toLowerCase()}?`,
    answer: (name, min, max) =>
      `${name} trzyma się w lodówce zwykle około ${min}–${max} dni, choć zależy to od świeżości przy zakupie i sposobu przechowywania.`,
    disclaimerPre:
      "To ogólne wskazówki dla typowego, dobrze przechowywanego produktu, a nie gwarancje bezpieczeństwa. Zawsze sprawdzaj datę przydatności i ufaj oczom oraz nosowi. Copantry może opatrzyć to datą automatycznie — zobacz ",
    pantryTrackingLabel: "prowadzenie spiżarni",
    neverBin: "Przestań wyrzucać dobre jedzenie — zobacz, jak pomaga Copantry",
    ctaIndexTitle: "Przestań zgadywać, co jest jeszcze dobre",
    ctaIndexSub:
      "Copantry opatruje datą wszystko w twojej kuchni i mówi, co zużyć najpierw. Bezpłatnie, bez podawania karty.",
    ctaDetailTitle: "Wiedz dokładnie, co jest jeszcze dobre",
    ctaDetailSub:
      "Copantry pilnuje, ile czasu zostało wszystkiemu w twojej kuchni, i mówi, co zużyć najpierw. Bezpłatnie.",
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
    nl: "Groenten",
    sv: "Grönsaker",
    da: "Grøntsager",
    fi: "Kasvikset",
    no: "Grønnsaker",
    pl: "Warzywa",
  },
  "Meat & fish": {
    fr: "Viande & poisson",
    it: "Carne & pesce",
    es: "Carne y pescado",
    pt: "Carne e peixe",
    de: "Fleisch & Fisch",
    nl: "Vlees en vis",
    sv: "Kött & fisk",
    da: "Kød & fisk",
    fi: "Liha & kala",
    no: "Kjøtt & fisk",
    pl: "Mięso i ryby",
  },
  Dairy: {
    fr: "Produits laitiers",
    it: "Latticini",
    es: "Lácteos",
    pt: "Laticínios",
    de: "Milchprodukte",
    nl: "Zuivel",
    sv: "Mejeri",
    da: "Mejeri",
    fi: "Maitotuotteet",
    no: "Meieri",
    pl: "Nabiał",
  },
  Fruit: {
    fr: "Fruits",
    it: "Frutta",
    es: "Fruta",
    pt: "Fruta",
    de: "Obst",
    nl: "Fruit",
    sv: "Frukt",
    da: "Frugt",
    fi: "Hedelmät",
    no: "Frukt",
    pl: "Owoce",
  },
  Bakery: {
    fr: "Boulangerie",
    it: "Panetteria",
    es: "Panadería",
    pt: "Padaria",
    de: "Backwaren",
    nl: "Bakkerij",
    sv: "Bageri",
    da: "Bageri",
    fi: "Leipomo",
    no: "Bakeri",
    pl: "Pieczywo",
  },
  "Cooked food": {
    fr: "Plats cuisinés",
    it: "Cibi cotti",
    es: "Comida cocinada",
    pt: "Comida cozinhada",
    de: "Gekochtes",
    nl: "Bereide gerechten",
    sv: "Tillagad mat",
    da: "Tilberedt mad",
    fi: "Valmis ruoka",
    no: "Tilberedt mat",
    pl: "Dania gotowane",
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
    nl: {
      name: "Spinazie",
      question: "Hoelang blijft spinazie goed?",
      why: "Spinazie heeft dunne, tere blaadjes met veel vocht, dus hij verlept en wordt snel slijmerig zodra hij gesneden en gekoeld is.",
      store:
        "Bewaar hem droog in een losjes gesloten zak of bak met keukenpapier om vocht op te nemen, in de groentelade van de koelkast.",
      cook: "Laat hem slinken in pasta, curry, omelet of soep bij het eerste teken van slapheid — gekookte spinazie blijft langer goed dan rauwe.",
    },
    sv: {
      name: "Spenat",
      question: "Hur länge håller spenat?",
      why: "Spenat har tunna, ömtåliga blad med hög vattenhalt, så den vissnar och blir slemmig snabbt när den väl är skuren och kyld.",
      store:
        "Håll den torr i en löst tillsluten påse eller ask med hushållspapper som suger upp fukt, i kylens grönsakslåda.",
      cook: "Låt den falla ihop i pasta, curry, omelett eller soppa vid första tecken på slokande — tillagad spenat håller längre än rå.",
    },
    da: {
      name: "Spinat",
      question: "Hvor længe holder spinat?",
      why: "Spinat har tynde, sarte blade med højt vandindhold, så den visner og bliver slimet hurtigt, når den først er snittet og kølet.",
      store:
        "Hold den tør i en løst lukket pose eller boks med køkkenrulle, der suger fugt, i køleskabets grøntsagsskuffe.",
      cook: "Lad den falde sammen i pasta, karry, omelet eller suppe ved første tegn på slaphed — tilberedt spinat holder længere end rå.",
    },
    fi: {
      name: "Pinaatti",
      question: "Kuinka kauan pinaatti säilyy?",
      why: "Pinaatilla on ohuet ja herkät lehdet, joissa on paljon vettä, joten se nuutuu ja limaantuu nopeasti, kun se on leikattu ja jäähdytetty.",
      store:
        "Pidä se kuivana löyhästi suljetussa pussissa tai rasiassa, jonka pohjalla on talouspaperia kosteutta imemässä, jääkaapin vihanneslaatikossa.",
      cook: "Kuullota se pastaan, curryyn, munakkaaseen tai keittoon heti kun se alkaa nuutua — kypsennetty pinaatti säilyy raakaa pidempään.",
    },
    no: {
      name: "Spinat",
      question: "Hvor lenge holder spinat?",
      why: "Spinat har tynne, sarte blader med høyt vanninnhold, så den visner og blir slimete raskt når den først er skåret og avkjølt.",
      store:
        "Hold den tørr i en løst lukket pose eller boks med tørkepapir som suger fukt, i kjøleskapets grønnsaksskuff.",
      cook: "La den falle sammen i pasta, karri, omelett eller suppe ved første tegn på slapphet — tilberedt spinat holder lenger enn rå.",
    },
    pl: {
      name: "Szpinak",
      question: "Jak długo trzyma się szpinak?",
      why: "Szpinak ma cienkie, delikatne liście o dużej zawartości wody, więc po pokrojeniu i schłodzeniu szybko więdnie i robi się śliski.",
      store:
        "Trzymaj go suchy w luźno zamkniętej torebce lub pojemniku wyłożonym ręcznikiem papierowym, w szufladzie na warzywa.",
      cook: "Poddusz go w makaronie, curry, omlecie albo zupie przy pierwszych oznakach więdnięcia — ugotowany szpinak trzyma się dłużej niż surowy.",
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
    nl: {
      name: "Rauwe kip",
      question: "Hoelang blijft rauwe kip goed?",
      why: "Rauw gevogelte is vochtig en eiwitrijk, waardoor bacteriën zich er snel op vermenigvuldigen; daarom heeft het een strikte uiterste gebruiksdatum.",
      store:
        "Bewaar hem in het koudste deel van de koelkast (meestal de onderste plank), afgesloten en onder ander eten zodat er niets op kan druppelen.",
      cook: "Bereid hem binnen een dag of twee, of vries hem in op de dag van aankoop. Eenmaal gaar: binnen 2–3 dagen opeten.",
    },
    sv: {
      name: "Rå kyckling",
      question: "Hur länge håller rå kyckling?",
      why: "Rå fågel är fuktig och proteinrik, så bakterier förökar sig snabbt på den — därför har den ett strikt sista förbrukningsdatum.",
      store:
        "Förvara den i kylens kallaste del (oftast nedersta hyllan), försluten och under annan mat så att den inte kan droppa.",
      cook: "Tillaga inom ett eller två dygn, eller frys in den samma dag du köpte den. Färdiglagad: ät inom 2–3 dagar.",
    },
    da: {
      name: "Rå kylling",
      question: "Hvor længe holder rå kylling?",
      why: "Råt fjerkræ er fugtigt og proteinrigt, så bakterier formerer sig hurtigt på det — derfor har det en streng sidste anvendelsesdato.",
      store:
        "Opbevar den i køleskabets koldeste del (oftest nederste hylde), lukket og under anden mad, så den ikke kan dryppe.",
      cook: "Tilbered inden for en dag eller to, eller frys den ned samme dag, du køber den. Færdigtilberedt: spis inden for 2–3 dage.",
    },
    fi: {
      name: "Raaka broileri",
      question: "Kuinka kauan raaka broileri säilyy?",
      why: "Raaka siipikarja on kosteaa ja proteiinipitoista, joten bakteerit lisääntyvät siinä nopeasti — siksi sillä on tiukka viimeinen käyttöpäivä.",
      store:
        "Säilytä se jääkaapin kylmimmässä osassa (yleensä alimmalla hyllyllä), suljettuna ja muun ruoan alapuolella, jottei siitä valu mitään.",
      cook: "Kypsennä päivän tai kahden sisällä tai pakasta ostopäivänä. Kypsennettynä: syö 2–3 päivässä.",
    },
    no: {
      name: "Rå kylling",
      question: "Hvor lenge holder rå kylling?",
      why: "Rått fjørfe er fuktig og proteinrikt, så bakterier formerer seg raskt på det — derfor har det en streng siste forbruksdag.",
      store:
        "Oppbevar den i kjøleskapets kaldeste del (som regel nederste hylle), lukket og under annen mat så den ikke kan dryppe.",
      cook: "Tilbered innen en dag eller to, eller frys den samme dag du kjøper den. Ferdig stekt: spis innen 2–3 dager.",
    },
    pl: {
      name: "Surowy kurczak",
      question: "Jak długo trzyma się surowy kurczak?",
      why: "Surowy drób jest wilgotny i bogaty w białko, więc bakterie mnożą się na nim szybko — dlatego ma ścisły termin przydatności do spożycia.",
      store:
        "Trzymaj go w najzimniejszej części lodówki (zwykle na dolnej półce), szczelnie zamkniętego i poniżej innych produktów, żeby nic z niego nie kapało.",
      cook: "Ugotuj w ciągu dnia lub dwóch albo zamroź w dniu zakupu. Po ugotowaniu: zjedz w ciągu 2–3 dni.",
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
    nl: {
      name: "Melk",
      question: "Hoelang blijft melk goed?",
      why: "Zelfs gepasteuriseerde melk bevat bacteriën die zich langzaam vermeerderen en hem zuur maken, sneller zodra hij open is en warmte krijgt.",
      store:
        "Bewaar hem op een plank in de koelkast, niet in de deur, waar het kouder en gelijkmatiger is.",
      cook: "Maak hem op in pap, pannenkoeken, bechamel of soep; melk tegen de datum is vaak nog prima — ruik er eerst aan.",
    },
    sv: {
      name: "Mjölk",
      question: "Hur länge håller mjölk?",
      why: "Även pastöriserad mjölk innehåller bakterier som långsamt förökar sig och surar den, snabbare när den väl är öppnad och utsatt för värme.",
      store:
        "Förvara den på en kylhylla, inte i dörren, där temperaturen är jämnare och kallare.",
      cook: "Använd upp den i gröt, pannkakor, béchamel eller soppa; mjölk nära datumet är ofta helt fin — lukta först.",
    },
    da: {
      name: "Mælk",
      question: "Hvor længe holder mælk?",
      why: "Selv pasteuriseret mælk indeholder bakterier, der langsomt formerer sig og gør den sur — hurtigere når den først er åbnet og udsat for varme.",
      store:
        "Opbevar den på en køleskabshylde, ikke i døren, hvor temperaturen er jævnere og koldere.",
      cook: "Brug den op i grød, pandekager, bechamel eller suppe; mælk tæt på datoen er ofte stadig fin — lugt først.",
    },
    fi: {
      name: "Maito",
      question: "Kuinka kauan maito säilyy?",
      why: "Pastöroidussakin maidossa on bakteereja, jotka lisääntyvät hitaasti ja happamoittavat sen — nopeammin avaamisen ja lämmön jälkeen.",
      store:
        "Säilytä se jääkaapin hyllyllä, ei ovessa, jossa lämpötila on tasaisempi ja kylmempi.",
      cook: "Käytä se puuroon, lettuihin, bechameliin tai keittoon; päiväyksen lähellä oleva maito on usein aivan hyvää — haista ensin.",
    },
    no: {
      name: "Melk",
      question: "Hvor lenge holder melk?",
      why: "Selv pasteurisert melk inneholder bakterier som sakte formerer seg og gjør den sur, raskere når den først er åpnet og utsatt for varme.",
      store:
        "Oppbevar den på en kjøleskapshylle, ikke i døren, der temperaturen er jevnere og kaldere.",
      cook: "Bruk den opp i grøt, pannekaker, bechamel eller suppe; melk nær datoen er ofte helt fin — lukt først.",
    },
    pl: {
      name: "Mleko",
      question: "Jak długo trzyma się mleko?",
      why: "Nawet pasteryzowane mleko zawiera bakterie, które powoli się mnożą i je zakwaszają — szybciej po otwarciu i w cieple.",
      store:
        "Trzymaj je na półce lodówki, nie w drzwiach, gdzie temperatura jest stabilniejsza i niższa.",
      cook: "Zużyj je do owsianki, naleśników, beszamelu albo zupy; mleko blisko terminu często wciąż jest dobre — najpierw powąchaj.",
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
    nl: {
      name: "Avocado",
      question: "Hoelang blijft een avocado goed?",
      why: "Avocado's geven ethyleen af en rijpen snel; eenmaal rijp verkleurt en verweekt het vruchtvlees binnen een paar dagen.",
      store:
        "Laat hem op kamertemperatuur rijpen en leg hem daarna in de koelkast om het af te remmen. Bewaar een aangesneden helft met de pit erin en citroen erop.",
      cook: "Gebruik hem eenmaal rijp snel in guacamole, op toast, in een smoothie of een dressing.",
    },
    sv: {
      name: "Avokado",
      question: "Hur länge håller avokado?",
      why: "Avokado avger etylen och mognar snabbt; när den väl är mogen brunar och mjuknar fruktköttet på ett par dagar.",
      store:
        "Låt den mogna i rumstemperatur och flytta den sedan till kylen för att bromsa. En uppskuren halva förvaras med kärnan kvar och citron ovanpå.",
      cook: "När den är mogen, använd den snabbt i guacamole, på macka, mixad i en smoothie eller en dressing.",
    },
    da: {
      name: "Avocado",
      question: "Hvor længe holder avocado?",
      why: "Avocado afgiver ethylen og modner hurtigt; når den først er moden, brunes og blødgøres kødet på et par dage.",
      store:
        "Lad den modne ved stuetemperatur, og flyt den så til køleskabet for at bremse den. En overskåret halvdel gemmes med stenen i og citron ovenpå.",
      cook: "Når den er moden, brug den hurtigt i guacamole, på brød, blendet i en smoothie eller en dressing.",
    },
    fi: {
      name: "Avokado",
      question: "Kuinka kauan avokado säilyy?",
      why: "Avokado luovuttaa etyleeniä ja kypsyy nopeasti; kypsänä hedelmäliha tummuu ja pehmenee parissa päivässä.",
      store:
        "Anna sen kypsyä huoneenlämmössä ja siirrä se sitten jääkaappiin hidastamaan. Leikattu puolikas säilytetään kivi paikallaan ja sitruunaa päällä.",
      cook: "Kun se on kypsä, käytä se nopeasti guacamoleen, leivän päälle, smoothieen tai kastikkeeseen.",
    },
    no: {
      name: "Avokado",
      question: "Hvor lenge holder avokado?",
      why: "Avokado avgir etylen og modnes raskt; når den først er moden, blir fruktkjøttet brunt og mykt på et par dager.",
      store:
        "La den modne i romtemperatur, og flytt den så til kjøleskapet for å bremse den. En oppskåret halvdel oppbevares med steinen i og sitron oppå.",
      cook: "Når den er moden, bruk den raskt i guacamole, på brødskiven, i en smoothie eller en dressing.",
    },
    pl: {
      name: "Awokado",
      question: "Jak długo trzyma się awokado?",
      why: "Awokado wydziela etylen i szybko dojrzewa; po dojrzeniu miąższ ciemnieje i mięknie w ciągu kilku dni.",
      store:
        "Pozwól mu dojrzeć w temperaturze pokojowej, a potem przenieś do lodówki, żeby to spowolnić. Przekrojoną połówkę trzymaj z pestką i sokiem z cytryny na wierzchu.",
      cook: "Gdy dojrzeje, zużyj je szybko do guacamole, na kanapkę, do koktajlu albo dressingu.",
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
    nl: {
      name: "Bananen",
      question: "Hoelang blijven bananen goed?",
      why: "Bananen produceren veel ethyleen, dus ze rijpen door op het aanrecht en worden binnen enkele dagen bruin.",
      store:
        "Houd ze uit de koelkast tot ze rijp zijn; ze los van elkaar leggen vertraagt het rijpen. Zeer rijpe bananen kun je goed invriezen.",
      cook: "Maak van gespikkelde bananen bananenbrood, pannenkoeken of een smoothie in plaats van ze weg te gooien.",
    },
    sv: {
      name: "Bananer",
      question: "Hur länge håller bananer?",
      why: "Bananer avger mycket etylen, så de fortsätter mogna på bänken och blir bruna på några dagar.",
      store:
        "Håll dem utanför kylen tills de är mogna; att skilja dem åt bromsar mognaden. Mycket mogna bananer går bra att frysa.",
      cook: "Gör bananbröd, pannkakor eller en smoothie av prickiga bananer i stället för att slänga dem.",
    },
    da: {
      name: "Bananer",
      question: "Hvor længe holder bananer?",
      why: "Bananer afgiver meget ethylen, så de modner videre på køkkenbordet og bliver brune på få dage.",
      store:
        "Hold dem uden for køleskabet, indtil de er modne; at skille dem ad bremser modningen. Meget modne bananer kan fint fryses.",
      cook: "Lav bananbrød, pandekager eller en smoothie af plettede bananer i stedet for at smide dem ud.",
    },
    fi: {
      name: "Banaanit",
      question: "Kuinka kauan banaanit säilyvät?",
      why: "Banaanit tuottavat runsaasti etyleeniä, joten ne kypsyvät edelleen pöydällä ja tummuvat päivissä.",
      store:
        "Pidä ne poissa jääkaapista, kunnes ne ovat kypsiä; erilleen irrottaminen hidastaa kypsymistä. Hyvin kypsät banaanit pakastuvat hyvin.",
      cook: "Tee täplikkäistä banaaneista banaanileipää, lettuja tai smoothie sen sijaan että heittäisit ne pois.",
    },
    no: {
      name: "Bananer",
      question: "Hvor lenge holder bananer?",
      why: "Bananer avgir mye etylen, så de fortsetter å modnes på benken og blir brune på få dager.",
      store:
        "Hold dem utenfor kjøleskapet til de er modne; å skille dem fra hverandre bremser modningen. Svært modne bananer kan fint fryses.",
      cook: "Lag bananbrød, pannekaker eller en smoothie av flekkete bananer i stedet for å kaste dem.",
    },
    pl: {
      name: "Banany",
      question: "Jak długo trzymają się banany?",
      why: "Banany wydzielają dużo etylenu, więc dojrzewają dalej na blacie i w kilka dni robią się brązowe.",
      store:
        "Trzymaj je poza lodówką, dopóki nie dojrzeją; rozdzielenie ich spowalnia dojrzewanie. Bardzo dojrzałe banany dobrze się mrożą.",
      cook: "Z nakrapianych bananów zrób chlebek bananowy, naleśniki albo koktajl, zamiast je wyrzucać.",
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
    nl: {
      name: "Aardbeien",
      question: "Hoelang blijven aardbeien goed?",
      why: "Zacht fruit kneust makkelijk en schimmelt snel door de zachte, vochtige schil.",
      store:
        "Bewaar ze droog en ongewassen in de koelkast; was ze pas vlak voor het eten. Haal beschimmelde exemplaren er meteen uit.",
      cook: "Gebruik zachte bessen in compote, jam, een smoothie of gebakken in muffins.",
    },
    sv: {
      name: "Jordgubbar",
      question: "Hur länge håller jordgubbar?",
      why: "Bär stöts lätt och möglar snabbt på grund av sitt mjuka, fuktiga skal.",
      store:
        "Förvara dem torra och otvättade i kylen; skölj först precis före servering. Plocka bort möglade bär direkt.",
      cook: "Använd mjuka bär i kompott, sylt, smoothie eller inbakade i muffins.",
    },
    da: {
      name: "Jordbær",
      question: "Hvor længe holder jordbær?",
      why: "Bær får let stødmærker og mugner hurtigt på grund af deres bløde, fugtige skind.",
      store:
        "Opbevar dem tørre og uvaskede i køleskabet; skyl dem først lige før servering. Fjern mugne bær med det samme.",
      cook: "Brug bløde bær i kompot, marmelade, smoothie eller bagt i muffins.",
    },
    fi: {
      name: "Mansikat",
      question: "Kuinka kauan mansikat säilyvät?",
      why: "Marjat kolhiintuvat helposti ja homehtuvat nopeasti pehmeän ja kostean kuorensa vuoksi.",
      store:
        "Säilytä ne kuivina ja pesemättöminä jääkaapissa; huuhtele vasta juuri ennen syömistä. Poista homeiset heti.",
      cook: "Käytä pehmeät marjat kompottiin, hilloon, smoothieen tai muffinsseihin.",
    },
    no: {
      name: "Jordbær",
      question: "Hvor lenge holder jordbær?",
      why: "Bær får lett støtskader og mugner raskt på grunn av det myke, fuktige skinnet.",
      store:
        "Oppbevar dem tørre og uvaskede i kjøleskapet; skyll dem først rett før servering. Fjern muggne bær med én gang.",
      cook: "Bruk myke bær i kompott, syltetøy, smoothie eller bakt i muffins.",
    },
    pl: {
      name: "Truskawki",
      question: "Jak długo trzymają się truskawki?",
      why: "Owoce jagodowe łatwo się obijają i szybko pleśnieją przez miękką, wilgotną skórkę.",
      store:
        "Trzymaj je suche i nieumyte w lodówce; myj dopiero tuż przed jedzeniem. Spleśniałe usuwaj natychmiast.",
      cook: "Miękkie owoce zużyj na kompot, dżem, koktajl albo upiecz w muffinkach.",
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
    nl: {
      name: "Brood",
      question: "Hoelang blijft brood goed?",
      why: "Brood droogt uit en schimmelt; de koelkast maakt het juist sneller oudbakken, niet langzamer.",
      store:
        "Bewaar het in een broodtrommel op kamertemperatuur, of snijd het en vries in wat je niet binnen een paar dagen opeet.",
      cook: "Maak van oudbakken brood toast, croutons, paneermeel, wentelteefjes of een broodpudding.",
    },
    sv: {
      name: "Bröd",
      question: "Hur länge håller bröd?",
      why: "Bröd torkar ut och möglar; kylen gör faktiskt att det blir torrt snabbare, inte långsammare.",
      store:
        "Förvara det i en brödburk i rumstemperatur, eller skiva och frys in det du inte äter upp inom några dagar.",
      cook: "Gör rostat bröd, krutonger, ströbröd, fattiga riddare eller en brödpudding av torrt bröd.",
    },
    da: {
      name: "Brød",
      question: "Hvor længe holder brød?",
      why: "Brød tørrer ud og mugner; køleskabet gør det faktisk hurtigere gammelt, ikke langsommere.",
      store:
        "Opbevar det i en brødkasse ved stuetemperatur, eller skær det i skiver og frys det, du ikke spiser inden for få dage.",
      cook: "Lav ristet brød, croutoner, rasp, arme riddere eller en brødbudding af tørt brød.",
    },
    fi: {
      name: "Leipä",
      question: "Kuinka kauan leipä säilyy?",
      why: "Leipä kuivuu ja homehtuu; jääkaappi itse asiassa vanhentaa sen nopeammin, ei hitaammin.",
      store:
        "Säilytä se leipälaatikossa huoneenlämmössä tai viipaloi ja pakasta se, mitä et syö parissa päivässä.",
      cook: "Tee kuivasta leivästä paahtoleipää, krutonkeja, korppujauhoja, köyhiä ritareita tai leipävanukasta.",
    },
    no: {
      name: "Brød",
      question: "Hvor lenge holder brød?",
      why: "Brød tørker ut og mugner; kjøleskapet gjør det faktisk raskere tørt, ikke langsommere.",
      store:
        "Oppbevar det i en brødboks i romtemperatur, eller skjær det opp og frys det du ikke spiser innen noen dager.",
      cook: "Lag ristet brød, krutonger, griljermel, arme riddere eller en brødpudding av tørt brød.",
    },
    pl: {
      name: "Chleb",
      question: "Jak długo trzyma się chleb?",
      why: "Chleb wysycha i pleśnieje; lodówka w rzeczywistości przyspiesza czerstwienie, a nie je spowalnia.",
      store:
        "Trzymaj go w chlebaku w temperaturze pokojowej albo pokrój i zamroź to, czego nie zjesz w ciągu kilku dni.",
      cook: "Z czerstwego chleba zrób grzanki, grzanki do sałatki, bułkę tartą, tosty francuskie albo pudding chlebowy.",
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
    nl: {
      name: "Eieren",
      question: "Hoelang blijven eieren goed?",
      why: "Eieren blijven relatief lang goed, maar verliezen over weken langzaam vocht en versheid door de schaal.",
      store:
        "Bewaar ze in de koelkast in hun doosje, met de punt naar beneden. Een vers ei zinkt in water; een oud ei drijft.",
      cook: "Gebruik oudere eieren om te bakken, in een frittata of hardgekookt. Doe bij twijfel de drijftest.",
    },
    sv: {
      name: "Ägg",
      question: "Hur länge håller ägg?",
      why: "Ägg håller relativt bra men förlorar långsamt fukt och färskhet genom skalet under veckornas gång.",
      store:
        "Förvara dem i kylen i sin kartong, med spetsen nedåt. Ett färskt ägg sjunker i vatten; ett gammalt flyter.",
      cook: "Använd äldre ägg till bakning, frittata eller hårdkokning. Är du osäker, gör flyttestet.",
    },
    da: {
      name: "Æg",
      question: "Hvor længe holder æg?",
      why: "Æg holder forholdsvis godt, men mister langsomt fugt og friskhed gennem skallen i løbet af uger.",
      store:
        "Opbevar dem i køleskabet i deres bakke med spidsen nedad. Et friskt æg synker i vand; et gammelt flyder.",
      cook: "Brug ældre æg til bagning, frittata eller hårdkogning. Er du i tvivl, så lav flydetesten.",
    },
    fi: {
      name: "Kananmunat",
      question: "Kuinka kauan kananmunat säilyvät?",
      why: "Kananmunat säilyvät melko hyvin, mutta menettävät kuoren läpi hitaasti kosteutta ja tuoreutta viikkojen kuluessa.",
      store:
        "Säilytä ne jääkaapissa omassa kennossaan terävä pää alaspäin. Tuore muna uppoaa veteen; vanha kelluu.",
      cook: "Käytä vanhemmat munat leivontaan, frittataan tai koviksi keitettyinä. Jos epäröit, tee kellutustesti.",
    },
    no: {
      name: "Egg",
      question: "Hvor lenge holder egg?",
      why: "Egg holder forholdsvis godt, men mister sakte fuktighet og friskhet gjennom skallet i løpet av uker.",
      store:
        "Oppbevar dem i kjøleskapet i kartongen, med spissen ned. Et ferskt egg synker i vann; et gammelt flyter.",
      cook: "Bruk eldre egg til baking, frittata eller hardkoking. Er du i tvil, gjør flytetesten.",
    },
    pl: {
      name: "Jajka",
      question: "Jak długo trzymają się jajka?",
      why: "Jajka trzymają się stosunkowo długo, ale przez tygodnie powoli tracą wilgoć i świeżość przez skorupkę.",
      store:
        "Trzymaj je w lodówce w oryginalnym opakowaniu, czubkiem w dół. Świeże jajko tonie w wodzie; stare unosi się.",
      cook: "Starsze jajka wykorzystaj do pieczenia, frittaty albo ugotuj na twardo. W razie wątpliwości zrób test w wodzie.",
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
    nl: {
      name: "Tomaten",
      question: "Hoelang blijven tomaten goed?",
      why: "Tomaten rijpen na de pluk door en worden zacht en melig, vooral als je ze te vroeg koelt.",
      store:
        "Bewaar ze op kamertemperatuur uit de zon voor de beste smaak; koel alleen heel rijpe exemplaren om er een dag of twee bij te winnen.",
      cook: "Rooster zachte tomaten voor een saus, soep of ovenschotel.",
    },
    sv: {
      name: "Tomater",
      question: "Hur länge håller tomater?",
      why: "Tomater fortsätter mogna efter skörd och blir mjuka och mjöliga, särskilt om de kyls för tidigt.",
      store:
        "Förvara dem i rumstemperatur utan direkt sol för bästa smak; kyl bara riktigt mogna för att vinna ett dygn eller två.",
      cook: "Rosta mjuka tomater till en sås, soppa eller plåtmiddag.",
    },
    da: {
      name: "Tomater",
      question: "Hvor længe holder tomater?",
      why: "Tomater modner videre efter høst og bliver bløde og melede, især hvis de køles for tidligt.",
      store:
        "Opbevar dem ved stuetemperatur uden direkte sol for den bedste smag; køl kun helt modne for at vinde en dag eller to.",
      cook: "Rist bløde tomater til en sauce, suppe eller en ovnret.",
    },
    fi: {
      name: "Tomaatit",
      question: "Kuinka kauan tomaatit säilyvät?",
      why: "Tomaatit kypsyvät poiminnan jälkeen edelleen ja muuttuvat pehmeiksi ja jauhoisiksi, varsinkin jos ne jäähdytetään liian aikaisin.",
      store:
        "Säilytä ne huoneenlämmössä auringolta suojassa parhaan maun vuoksi; jäähdytä vain hyvin kypsät voittaaksesi päivän tai kaksi.",
      cook: "Paahda pehmeät tomaatit kastikkeeksi, keitoksi tai uunivuokaan.",
    },
    no: {
      name: "Tomater",
      question: "Hvor lenge holder tomater?",
      why: "Tomater fortsetter å modnes etter innhøsting og blir myke og melne, særlig hvis de kjøles for tidlig.",
      store:
        "Oppbevar dem i romtemperatur uten direkte sol for best smak; kjøl bare helt modne for å vinne en dag eller to.",
      cook: "Stek myke tomater i ovnen til en saus, suppe eller langpanne.",
    },
    pl: {
      name: "Pomidory",
      question: "Jak długo trzymają się pomidory?",
      why: "Pomidory dojrzewają dalej po zerwaniu i miękną oraz stają się mączyste, zwłaszcza gdy schłodzi się je za wcześnie.",
      store:
        "Dla najlepszego smaku trzymaj je w temperaturze pokojowej z dala od słońca; chłodź tylko bardzo dojrzałe, by zyskać dzień lub dwa.",
      cook: "Miękkie pomidory upiecz na sos, zupę albo danie z blachy.",
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
    nl: {
      name: "Wortels",
      question: "Hoelang blijven wortels goed?",
      why: "Wortels zijn stevige knollen, maar worden rubberig als ze vocht verliezen.",
      store:
        "Bewaar ze in de groentelade van de koelkast, het liefst in een zak; haal het loof eraf, dat vocht onttrekt.",
      cook: "Gebruik slappe wortels in soepen, stoofpotten, ovenschotels of een rauwkostsalade — gekookt zijn ze prima.",
    },
    sv: {
      name: "Morötter",
      question: "Hur länge håller morötter?",
      why: "Morötter är tåliga rotfrukter men blir sladdriga när de förlorar fukt.",
      store:
        "Förvara dem i kylens grönsakslåda, helst i en påse; ta bort blasten, som drar ut fukt.",
      cook: "Använd slaka morötter i soppor, grytor, ugnsrätter eller en riven sallad — tillagade är de utmärkta.",
    },
    da: {
      name: "Gulerødder",
      question: "Hvor længe holder gulerødder?",
      why: "Gulerødder er hårdføre rodfrugter, men bliver bløde og gummiagtige, når de mister fugt.",
      store:
        "Opbevar dem i køleskabets grøntsagsskuffe, helst i en pose; fjern toppen, som trækker fugt ud.",
      cook: "Brug bløde gulerødder i supper, gryderetter, ovnretter eller en revet salat — tilberedt er de helt fine.",
    },
    fi: {
      name: "Porkkanat",
      question: "Kuinka kauan porkkanat säilyvät?",
      why: "Porkkanat ovat kestäviä juureksia, mutta muuttuvat kumimaisiksi menettäessään kosteutta.",
      store:
        "Säilytä ne jääkaapin vihanneslaatikossa, mieluiten pussissa; poista naatit, jotka imevät kosteutta.",
      cook: "Käytä notkeat porkkanat keittoihin, patoihin, uuniruokiin tai raasteeksi — kypsennettyinä ne ovat aivan hyviä.",
    },
    no: {
      name: "Gulrøtter",
      question: "Hvor lenge holder gulrøtter?",
      why: "Gulrøtter er hardføre rotgrønnsaker, men blir gummiaktige når de mister fuktighet.",
      store:
        "Oppbevar dem i kjøleskapets grønnsaksskuff, helst i en pose; fjern toppen, som trekker ut fuktighet.",
      cook: "Bruk slappe gulrøtter i supper, gryter, ovnsretter eller en revet salat — tilberedt er de helt fine.",
    },
    pl: {
      name: "Marchew",
      question: "Jak długo trzyma się marchew?",
      why: "Marchew to twardy korzeń, ale robi się gumowata, gdy traci wilgoć.",
      store:
        "Trzymaj ją w szufladzie na warzywa, najlepiej w torebce; usuń natkę, która wyciąga wilgoć.",
      cook: "Wiotką marchew zużyj do zup, gulaszy, pieczeni albo surówki — po ugotowaniu jest zupełnie dobra.",
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
    nl: {
      name: "Aardappelen",
      question: "Hoelang blijven aardappelen goed?",
      why: "Aardappelen gaan uitlopen en groen worden bij blootstelling aan licht en warmte.",
      store:
        "Bewaar ze koel, donker en luchtig — niet in de koelkast, die hun zetmeel in suiker omzet. Uit de buurt van uien.",
      cook: "Gebruik zacht wordende aardappelen in puree, soep, een gratin of gebakken in de oven.",
    },
    sv: {
      name: "Potatis",
      question: "Hur länge håller potatis?",
      why: "Potatis gror och blir grön när den utsätts för ljus och värme.",
      store:
        "Förvara den svalt, mörkt och luftigt — inte i kylen, som omvandlar stärkelsen till socker. Åtskild från lök.",
      cook: "Använd mjuknande potatis till mos, soppa, gratäng eller ugnsrostad.",
    },
    da: {
      name: "Kartofler",
      question: "Hvor længe holder kartofler?",
      why: "Kartofler spirer og bliver grønne, når de udsættes for lys og varme.",
      store:
        "Opbevar dem køligt, mørkt og luftigt — ikke i køleskabet, som omdanner deres stivelse til sukker. Væk fra løg.",
      cook: "Brug blødende kartofler i mos, suppe, en gratin eller som ovnbagte.",
    },
    fi: {
      name: "Perunat",
      question: "Kuinka kauan perunat säilyvät?",
      why: "Perunat itävät ja vihertyvät valolle ja lämmölle altistuessaan.",
      store:
        "Säilytä ne viileässä, pimeässä ja ilmavassa paikassa — ei jääkaapissa, joka muuttaa tärkkelyksen sokeriksi. Erillään sipuleista.",
      cook: "Käytä pehmenevät perunat muusiin, keittoon, gratiiniin tai uunissa paahdettuina.",
    },
    no: {
      name: "Poteter",
      question: "Hvor lenge holder poteter?",
      why: "Poteter spirer og blir grønne når de utsettes for lys og varme.",
      store:
        "Oppbevar dem kjølig, mørkt og luftig — ikke i kjøleskapet, som gjør stivelsen om til sukker. Vekk fra løk.",
      cook: "Bruk poteter som mykner i puré, suppe, grateng eller ovnsstekt.",
    },
    pl: {
      name: "Ziemniaki",
      question: "Jak długo trzymają się ziemniaki?",
      why: "Ziemniaki kiełkują i zielenieją, gdy są wystawione na światło i ciepło.",
      store:
        "Trzymaj je w chłodnym, ciemnym i przewiewnym miejscu — nie w lodówce, która zamienia ich skrobię w cukier. Z dala od cebuli.",
      cook: "Miękknące ziemniaki zużyj na puree, zupę, zapiekankę albo upiecz w piekarniku.",
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
    nl: {
      name: "Uien",
      question: "Hoelang blijven uien goed?",
      why: "Hele uien blijven weken goed, maar lopen uit of worden zacht in vochtige, warme omstandigheden.",
      store:
        "Bewaar hele uien koel, droog en geventileerd, uit de buurt van aardappelen. Aangesneden ui verpakt in de koelkast.",
      cook: "Karameliseer zacht wordende uien, of gebruik ze als basis voor vrijwel elke soep, stoofpot of saus.",
    },
    sv: {
      name: "Lök",
      question: "Hur länge håller lök?",
      why: "Hel lök håller i veckor men gror eller mjuknar i fuktiga, varma förhållanden.",
      store:
        "Förvara hel lök svalt, torrt och luftigt, åtskild från potatis. Uppskuren lök förvaras inplastad i kylen.",
      cook: "Karamellisera lök som mjuknar, eller använd den som bas i nästan vilken soppa, gryta eller sås som helst.",
    },
    da: {
      name: "Løg",
      question: "Hvor længe holder løg?",
      why: "Hele løg holder i uger, men spirer eller bliver bløde under fugtige, varme forhold.",
      store:
        "Opbevar hele løg køligt, tørt og med luft omkring, væk fra kartofler. Skåret løg opbevares indpakket i køleskabet.",
      cook: "Karamellisér løg, der bliver bløde, eller brug dem som base i næsten enhver suppe, gryderet eller sauce.",
    },
    fi: {
      name: "Sipulit",
      question: "Kuinka kauan sipulit säilyvät?",
      why: "Kokonaiset sipulit säilyvät viikkoja, mutta itävät tai pehmenevät kosteassa ja lämpimässä.",
      store:
        "Säilytä kokonaiset sipulit viileässä, kuivassa ja ilmavassa paikassa erillään perunoista. Leikattu sipuli säilytetään kääreessä jääkaapissa.",
      cook: "Karamellisoi pehmenevät sipulit tai käytä ne lähes minkä tahansa keiton, padan tai kastikkeen pohjaksi.",
    },
    no: {
      name: "Løk",
      question: "Hvor lenge holder løk?",
      why: "Hel løk holder i uker, men spirer eller mykner under fuktige, varme forhold.",
      store:
        "Oppbevar hel løk kjølig, tørt og luftig, vekk fra poteter. Oppskåret løk oppbevares innpakket i kjøleskapet.",
      cook: "Karamelliser løk som mykner, eller bruk den som base i nesten hvilken som helst suppe, gryte eller saus.",
    },
    pl: {
      name: "Cebula",
      question: "Jak długo trzyma się cebula?",
      why: "Cała cebula trzyma się tygodniami, ale kiełkuje albo mięknie w wilgotnych i ciepłych warunkach.",
      store:
        "Całą cebulę trzymaj w chłodnym, suchym i przewiewnym miejscu, z dala od ziemniaków. Pokrojoną owiń i trzymaj w lodówce.",
      cook: "Miękknącą cebulę skarmelizuj albo wykorzystaj jako bazę niemal każdej zupy, gulaszu czy sosu.",
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
    nl: {
      name: "Harde kaas",
      question: "Hoelang blijft harde kaas goed?",
      why: "Harde kazen blijven lang goed, maar kunnen uitdrogen of schimmel aan de buitenkant krijgen.",
      store:
        "Wikkel hem in bakpapier en daarna losjes in folie, in de koelkast; zo kan hij ademen zonder uit te drogen.",
      cook: "Rasp hardere wordende kaas over pasta, door een saus of op een gratin. Snijd kleine oppervlakteschimmel van harde kaas weg.",
    },
    sv: {
      name: "Hårdost",
      question: "Hur länge håller hårdost?",
      why: "Hårdostar håller bra men kan torka ut eller få mögel på ytan.",
      store:
        "Slå in den i bakplåtspapper och sedan löst i folie, i kylen; då kan den andas utan att torka ut.",
      cook: "Riv ost som hårdnar över pasta, i en sås eller på en gratäng. Skär bort litet ytmögel från hårdost.",
    },
    da: {
      name: "Hård ost",
      question: "Hvor længe holder hård ost?",
      why: "Hårde oste holder godt, men kan tørre ud eller få mug på overfladen.",
      store:
        "Pak den ind i bagepapir og derefter løst i folie, i køleskabet; så kan den ånde uden at tørre ud.",
      cook: "Riv ost, der bliver hård, over pasta, i en sauce eller på en gratin. Skær lidt overflademug af hård ost.",
    },
    fi: {
      name: "Kova juusto",
      question: "Kuinka kauan kova juusto säilyy?",
      why: "Kovat juustot säilyvät hyvin, mutta voivat kuivua tai saada pintahometta.",
      store:
        "Kääri se leivinpaperiin ja sitten löyhästi folioon, jääkaapissa; näin se hengittää kuivumatta.",
      cook: "Raasta kovettuva juusto pastan päälle, kastikkeeseen tai gratiiniin. Leikkaa pieni pintahome pois kovasta juustosta.",
    },
    no: {
      name: "Fast ost",
      question: "Hvor lenge holder fast ost?",
      why: "Faste oster holder godt, men kan tørke ut eller få mugg på overflaten.",
      store:
        "Pakk den inn i bakepapir og deretter løst i folie, i kjøleskapet; da kan den puste uten å tørke ut.",
      cook: "Riv ost som blir hard over pasta, i en saus eller på en gratrett. Skjær litt overflatemugg av fast ost.",
    },
    pl: {
      name: "Ser twardy",
      question: "Jak długo trzyma się ser twardy?",
      why: "Twarde sery trzymają się dobrze, ale mogą wysychać albo dostać pleśni na powierzchni.",
      store:
        "Owiń go papierem do pieczenia, a potem luźno folią i trzymaj w lodówce; dzięki temu oddycha, nie wysychając.",
      cook: "Twardniejący ser zetrzyj na makaron, do sosu albo na zapiekankę. Niewielką pleśń z powierzchni twardego sera po prostu odetnij.",
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
    nl: {
      name: "Yoghurt",
      question: "Hoelang blijft yoghurt goed?",
      why: "Yoghurt is gefermenteerd en vrij stabiel, maar schift uiteindelijk en wordt te zuur.",
      store:
        "Bewaar hem op een koude plank in de koelkast en gebruik een schone lepel om geen bacteriën te introduceren.",
      cook: "Gebruik yoghurt tegen de datum in marinades, smoothies, baksels of een curry.",
    },
    sv: {
      name: "Yoghurt",
      question: "Hur länge håller yoghurt?",
      why: "Yoghurt är syrad och ganska stabil, men skiktar sig till slut och blir för sur.",
      store:
        "Förvara den på en kall kylhylla och använd en ren sked så att du inte tillför bakterier.",
      cook: "Använd yoghurt nära datumet i marinader, smoothies, bakning eller en curry.",
    },
    da: {
      name: "Yoghurt",
      question: "Hvor længe holder yoghurt?",
      why: "Yoghurt er syrnet og ret stabil, men skiller til sidst og bliver for sur.",
      store:
        "Opbevar den på en kold hylde i køleskabet, og brug en ren ske, så du ikke tilfører bakterier.",
      cook: "Brug yoghurt tæt på datoen i marinader, smoothies, bagværk eller en karryret.",
    },
    fi: {
      name: "Jogurtti",
      question: "Kuinka kauan jogurtti säilyy?",
      why: "Jogurtti on hapatettu ja melko vakaa, mutta lopulta se erottuu ja happamoituu liikaa.",
      store:
        "Säilytä se jääkaapin kylmällä hyllyllä ja käytä puhdasta lusikkaa, jottet tuo mukanasi bakteereja.",
      cook: "Käytä päiväyksen lähellä oleva jogurtti marinadeihin, smoothieihin, leivontaan tai curryyn.",
    },
    no: {
      name: "Yoghurt",
      question: "Hvor lenge holder yoghurt?",
      why: "Yoghurt er syrnet og ganske stabil, men skiller seg til slutt og blir for sur.",
      store:
        "Oppbevar den på en kald hylle i kjøleskapet, og bruk en ren skje så du ikke tilfører bakterier.",
      cook: "Bruk yoghurt nær datoen i marinader, smoothies, bakst eller en karrirett.",
    },
    pl: {
      name: "Jogurt",
      question: "Jak długo trzyma się jogurt?",
      why: "Jogurt jest fermentowany i dość stabilny, ale w końcu się rozwarstwia i robi zbyt kwaśny.",
      store:
        "Trzymaj go na zimnej półce lodówki i używaj czystej łyżki, żeby nie wprowadzać bakterii.",
      cook: "Jogurt blisko terminu zużyj do marynat, koktajli, wypieków albo curry.",
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
    nl: {
      name: "Champignons",
      question: "Hoelang blijven champignons goed?",
      why: "Champignons zijn spons-achtig en worden slijmerig of droog naarmate ze vocht verliezen of opnemen.",
      store:
        "Bewaar ze in een papieren zak in de koelkast, niet in afgesloten plastic, zodat ze kunnen ademen.",
      cook: "Bak oudere champignons met knoflook en voeg ze toe aan pasta, risotto, omeletten of op toast.",
    },
    sv: {
      name: "Champinjoner",
      question: "Hur länge håller champinjoner?",
      why: "Svamp är svampliknande och blir slemmig eller torr när den förlorar eller tar upp fukt.",
      store:
        "Förvara dem i en papperspåse i kylen, inte i sluten plast, så att de kan andas.",
      cook: "Fräs äldre svamp med vitlök och lägg i pasta, risotto, omelett eller på rostat bröd.",
    },
    da: {
      name: "Champignoner",
      question: "Hvor længe holder champignoner?",
      why: "Svampe er svampeagtige og bliver slimede eller tørre, når de mister eller optager fugt.",
      store:
        "Opbevar dem i en papirspose i køleskabet, ikke i lukket plastik, så de kan ånde.",
      cook: "Svits ældre svampe med hvidløg, og kom dem i pasta, risotto, omelet eller på ristet brød.",
    },
    fi: {
      name: "Herkkusienet",
      question: "Kuinka kauan herkkusienet säilyvät?",
      why: "Sienet ovat sienimäisiä ja muuttuvat limaisiksi tai kuiviksi menettäessään tai imiessään kosteutta.",
      store:
        "Säilytä ne paperipussissa jääkaapissa, ei suljetussa muovissa, jotta ne pääsevät hengittämään.",
      cook: "Kuullota vanhenevat sienet valkosipulin kanssa ja lisää pastaan, risottoon, munakkaisiin tai leivän päälle.",
    },
    no: {
      name: "Sjampinjonger",
      question: "Hvor lenge holder sjampinjonger?",
      why: "Sopp er svampaktig og blir slimete eller tørr etter hvert som den mister eller tar opp fuktighet.",
      store:
        "Oppbevar dem i en papirpose i kjøleskapet, ikke i lukket plast, så de får puste.",
      cook: "Surr eldre sopp med hvitløk og ha den i pasta, risotto, omelett eller på ristet brød.",
    },
    pl: {
      name: "Pieczarki",
      question: "Jak długo trzymają się pieczarki?",
      why: "Grzyby są gąbczaste i robią się śliskie albo suche, tracąc lub chłonąc wilgoć.",
      store:
        "Trzymaj je w papierowej torebce w lodówce, a nie w zamkniętym plastiku, żeby mogły oddychać.",
      cook: "Podstarzałe grzyby podsmaż z czosnkiem i dodaj do makaronu, risotta, omletu albo na grzankę.",
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
    nl: {
      name: "Sla",
      question: "Hoelang blijft sla goed?",
      why: "Bladsla verlept en verkleurt bruin aan de snijranden naarmate hij vocht verliest.",
      store:
        "Bewaar hem droog en losjes gewikkeld met keukenpapier in de groentelade.",
      cook: "Laat slappe sla slinken in soep of een roerbakgerecht — little gem en romaine zijn goed gesmoord of gegrild.",
    },
    sv: {
      name: "Sallad",
      question: "Hur länge håller sallad?",
      why: "Bladsallad vissnar och brunar i snittkanterna när den förlorar fukt.",
      store:
        "Håll den torr och löst inslagen med hushållspapper i grönsakslådan.",
      cook: "Låt trött sallad falla ihop i en soppa eller wok — romansallad och lilla gem är goda bräserade eller grillade.",
    },
    da: {
      name: "Salat",
      question: "Hvor længe holder salat?",
      why: "Bladsalat visner og bliver brun i snitkanterne, når den mister fugt.",
      store:
        "Hold den tør og løst pakket ind med køkkenrulle i grøntsagsskuffen.",
      cook: "Lad træt salat falde sammen i en suppe eller wok — romaine og lille gem er gode braiserede eller grillede.",
    },
    fi: {
      name: "Lehtisalaatti",
      question: "Kuinka kauan lehtisalaatti säilyy?",
      why: "Lehtisalaatti nuutuu ja ruskettuu leikkuureunoista menettäessään kosteutta.",
      store:
        "Pidä se kuivana ja löyhästi talouspaperiin käärittynä vihanneslaatikossa.",
      cook: "Kuullota väsynyt salaatti keittoon tai wokkiin — romaine ja pikkusalaatti ovat hyviä haudutettuina tai grillattuina.",
    },
    no: {
      name: "Salat",
      question: "Hvor lenge holder salat?",
      why: "Bladsalat visner og blir brun i snittkantene når den mister fuktighet.",
      store:
        "Hold den tørr og løst pakket inn med tørkepapir i grønnsaksskuffen.",
      cook: "La trøtt salat falle sammen i en suppe eller wok — romanosalat og små salathoder er gode braiserte eller grillede.",
    },
    pl: {
      name: "Sałata",
      question: "Jak długo trzyma się sałata?",
      why: "Sałata liściasta więdnie i brązowieje na przekrojonych brzegach, tracąc wilgoć.",
      store:
        "Trzymaj ją suchą i luźno owiniętą ręcznikiem papierowym w szufladzie na warzywa.",
      cook: "Zmęczoną sałatę poddusz w zupie albo na patelni — rzymska i mała sałata dobrze wypadają duszone lub grillowane.",
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
    nl: {
      name: "Paprika's",
      question: "Hoelang blijven paprika's goed?",
      why: "Paprika's rimpelen en worden langzaam zacht naarmate ze uitdrogen.",
      store:
        "Bewaar ze heel en droog in de groentelade; eenmaal gesneden verpakken en binnen een paar dagen gebruiken.",
      cook: "Rooster zacht wordende paprika's voor een saus, soep, fajita's of een ovenschotel.",
    },
    sv: {
      name: "Paprika",
      question: "Hur länge håller paprika?",
      why: "Paprika skrynklar sig långsamt och mjuknar när den torkar ut.",
      store:
        "Förvara dem hela och torra i grönsakslådan; när de väl är skurna, slå in dem och använd inom några dagar.",
      cook: "Rosta paprika som mjuknar till en sås, soppa, fajitas eller en plåtmiddag.",
    },
    da: {
      name: "Peberfrugter",
      question: "Hvor længe holder peberfrugter?",
      why: "Peberfrugter rynker langsomt og bliver bløde, efterhånden som de tørrer ud.",
      store:
        "Opbevar dem hele og tørre i grøntsagsskuffen; når de først er skåret, pak dem ind, og brug dem inden for få dage.",
      cook: "Rist peberfrugter, der bliver bløde, til en sauce, suppe, fajitas eller en ovnret.",
    },
    fi: {
      name: "Paprikat",
      question: "Kuinka kauan paprikat säilyvät?",
      why: "Paprikat kurttuuntuvat ja pehmenevät hitaasti kuivuessaan.",
      store:
        "Säilytä ne kokonaisina ja kuivina vihanneslaatikossa; leikattuina kääri ja käytä parissa päivässä.",
      cook: "Paahda pehmenevät paprikat kastikkeeksi, keitoksi, fajitoihin tai uunivuokaan.",
    },
    no: {
      name: "Paprika",
      question: "Hvor lenge holder paprika?",
      why: "Paprika rynker seg sakte og mykner etter hvert som den tørker ut.",
      store:
        "Oppbevar dem hele og tørre i grønnsaksskuffen; når de først er skåret, pakk dem inn og bruk dem innen noen dager.",
      cook: "Stek paprika som mykner i ovnen til en saus, suppe, fajitas eller en langpanne.",
    },
    pl: {
      name: "Papryka",
      question: "Jak długo trzyma się papryka?",
      why: "Papryka powoli się marszczy i mięknie w miarę wysychania.",
      store:
        "Trzymaj ją w całości i sucho w szufladzie na warzywa; po pokrojeniu owiń i zużyj w ciągu kilku dni.",
      cook: "Miękknącą paprykę upiecz na sos, zupę, fajitas albo danie z blachy.",
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
    nl: {
      name: "Broccoli",
      question: "Hoelang blijft broccoli goed?",
      why: "Broccoli wordt geel en zacht naarmate de roosjes ouder worden.",
      store:
        "Bewaar hem ongewassen en losjes in een zak in de koelkast; een vochtig stukje keukenpapier houdt hem knapperig.",
      cook: "Rooster of roerbak oudere broccoli, of pureer hem tot soep — stelen en al.",
    },
    sv: {
      name: "Broccoli",
      question: "Hur länge håller broccoli?",
      why: "Broccoli gulnar och mjuknar när buketterna åldras.",
      store:
        "Förvara den otvättad i kylen, löst i en påse; en fuktig hushållspappersbit hjälper den att hålla sig krispig.",
      cook: "Rosta eller woka äldre broccoli, eller mixa den till en soppa — stjälkarna med.",
    },
    da: {
      name: "Broccoli",
      question: "Hvor længe holder broccoli?",
      why: "Broccoli bliver gullig og blød, efterhånden som buketterne ældes.",
      store:
        "Opbevar den uvasket i køleskabet, løst i en pose; et fugtigt stykke køkkenrulle holder den sprød.",
      cook: "Rist eller wok ældre broccoli, eller blend den til en suppe — stokken med.",
    },
    fi: {
      name: "Parsakaali",
      question: "Kuinka kauan parsakaali säilyy?",
      why: "Parsakaali kellastuu ja pehmenee kukintojen vanhetessa.",
      store:
        "Säilytä se pesemättömänä jääkaapissa löyhästi pussissa; kostea talouspaperi auttaa sitä pysymään rapeana.",
      cook: "Paahda tai wokkaa vanheneva parsakaali tai soseuta se keitoksi — kannat mukaan lukien.",
    },
    no: {
      name: "Brokkoli",
      question: "Hvor lenge holder brokkoli?",
      why: "Brokkoli gulner og mykner etter hvert som buketten eldes.",
      store:
        "Oppbevar den uvasket i kjøleskapet, løst i en pose; et fuktig stykke tørkepapir hjelper den å holde seg sprø.",
      cook: "Stek eller wok eldre brokkoli, eller kjør den til en suppe — stilken inkludert.",
    },
    pl: {
      name: "Brokuły",
      question: "Jak długo trzymają się brokuły?",
      why: "Brokuły żółkną i miękną w miarę starzenia się różyczek.",
      store:
        "Trzymaj je nieumyte w lodówce, luźno w torebce; wilgotny ręcznik papierowy pomoże im zachować jędrność.",
      cook: "Starsze brokuły upiecz lub podsmaż albo zmiksuj na zupę — razem z łodygami.",
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
    nl: {
      name: "Appels",
      question: "Hoelang blijven appels goed?",
      why: "Appels blijven weken goed, maar worden melig en rimpelig naarmate ze hun knapperigheid verliezen, en ze versnellen het rijpen van fruit ernaast.",
      store:
        "Bewaar ze in de groentelade van de koelkast, uit de buurt van ander fruit en groente die ze te snel zouden laten rijpen.",
      cook: "Stoof zachte appels tot compote, een crumble of topping voor je pap.",
    },
    sv: {
      name: "Äpplen",
      question: "Hur länge håller äpplen?",
      why: "Äpplen håller i veckor men blir mjöliga och skrynkliga när de förlorar sin knaprighet, och de påskyndar mognaden hos närliggande varor.",
      store:
        "Förvara dem i kylens grönsakslåda, åtskilda från annan frukt och grönt som de skulle övermogna.",
      cook: "Koka mjuka äpplen till kompott, en smulpaj eller topping till gröten.",
    },
    da: {
      name: "Æbler",
      question: "Hvor længe holder æbler?",
      why: "Æbler holder i uger, men bliver melede og rynkede, når de mister sprødheden, og de fremskynder modningen af varer ved siden af.",
      store:
        "Opbevar dem i køleskabets grøntsagsskuffe, væk fra anden frugt og grønt, som de ville overmodne.",
      cook: "Kog bløde æbler til kompot, en crumble eller topping til grøden.",
    },
    fi: {
      name: "Omenat",
      question: "Kuinka kauan omenat säilyvät?",
      why: "Omenat säilyvät viikkoja, mutta muuttuvat jauhoisiksi ja kurttuisiksi menettäessään rapeutensa, ja ne nopeuttavat viereisten tuotteiden kypsymistä.",
      store:
        "Säilytä ne jääkaapin vihanneslaatikossa erillään muista hedelmistä ja vihanneksista, jotka ne ylikypsyttäisivät.",
      cook: "Hauduta pehmeät omenat kompotiksi, murupiirakaksi tai puuron päälle.",
    },
    no: {
      name: "Epler",
      question: "Hvor lenge holder epler?",
      why: "Epler holder i uker, men blir melne og rynkete når de mister sprøheten, og de framskynder modningen av varer i nærheten.",
      store:
        "Oppbevar dem i kjøleskapets grønnsaksskuff, vekk fra annen frukt og grønt som de ville overmodnet.",
      cook: "Kok myke epler til kompott, en crumble eller topping til grøten.",
    },
    pl: {
      name: "Jabłka",
      question: "Jak długo trzymają się jabłka?",
      why: "Jabłka trzymają się tygodniami, ale robią się mączyste i pomarszczone, tracąc jędrność, i przyspieszają dojrzewanie sąsiednich produktów.",
      store:
        "Trzymaj je w szufladzie na warzywa, z dala od innych owoców i warzyw, którym przyspieszyłyby dojrzewanie.",
      cook: "Miękkie jabłka uduś na kompot, kruche ciasto albo dodatek do owsianki.",
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
    nl: {
      name: "Verse vis",
      question: "Hoelang blijft verse vis goed?",
      why: "Verse vis is zeer bederfelijk en gaat zelfs gekoeld snel achteruit.",
      store:
        "Bewaar hem op ijs of in het koudste deel van de koelkast en bereid hem op de dag van aankoop of de dag erna.",
      cook: 'Bereid hem binnen een dag, of vries hem in op de dag dat je hem koopt. Vertrouw op je neus — verse vis ruikt naar zee, niet "vissig".',
    },
    sv: {
      name: "Färsk fisk",
      question: "Hur länge håller färsk fisk?",
      why: "Färsk fisk är mycket ömtålig och försämras snabbt även i kyla.",
      store:
        "Förvara den på is eller i kylens kallaste del och tillaga den samma dag eller dagen efter köpet.",
      cook: 'Tillaga inom ett dygn, eller frys in den samma dag du köper den. Lita på näsan — färsk fisk luktar hav, inte "fisk".',
    },
    da: {
      name: "Frisk fisk",
      question: "Hvor længe holder frisk fisk?",
      why: "Frisk fisk er meget letfordærvelig og forringes hurtigt, selv når den er kølet.",
      store:
        "Opbevar den på is eller i køleskabets koldeste del, og tilbered den samme dag eller dagen efter købet.",
      cook: 'Tilbered inden for en dag, eller frys den ned samme dag, du køber den. Stol på næsen — frisk fisk lugter af hav, ikke af "fisk".',
    },
    fi: {
      name: "Tuore kala",
      question: "Kuinka kauan tuore kala säilyy?",
      why: "Tuore kala on erittäin pilaantuvaa ja heikkenee nopeasti jäähdytettynäkin.",
      store:
        "Säilytä se jäissä tai jääkaapin kylmimmässä osassa ja kypsennä osto- tai seuraavana päivänä.",
      cook: 'Kypsennä päivän sisällä tai pakasta ostopäivänä. Luota nenääsi — tuore kala tuoksuu merelle, ei "kalalta".',
    },
    no: {
      name: "Fersk fisk",
      question: "Hvor lenge holder fersk fisk?",
      why: "Fersk fisk er svært lett bedervelig og forringes raskt selv når den er kjølt.",
      store:
        "Oppbevar den på is eller i kjøleskapets kaldeste del, og tilbered den samme dag eller dagen etter kjøpet.",
      cook: 'Tilbered innen en dag, eller frys den samme dag du kjøper den. Stol på nesen — fersk fisk lukter hav, ikke "fisk".',
    },
    pl: {
      name: "Świeża ryba",
      question: "Jak długo trzyma się świeża ryba?",
      why: "Świeża ryba szybko się psuje i traci jakość nawet w lodówce.",
      store:
        "Trzymaj ją na lodzie albo w najzimniejszej części lodówki i przyrządź w dniu zakupu lub następnego dnia.",
      cook: 'Przyrządź w ciągu doby albo zamroź w dniu zakupu. Zaufaj nosowi — świeża ryba pachnie morzem, a nie "rybą".',
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
    nl: {
      name: "Verse kruiden",
      question: "Hoelang blijven verse kruiden goed?",
      why: "Zachte kruiden zoals koriander en basilicum verleppen snel; ze bestaan vooral uit water in dunne blaadjes.",
      store:
        "Zet zachte kruiden als bloemen in een glas water, losjes afgedekt, in de koelkast (basilicum staat liever op het aanrecht).",
      cook: "Pureer slappe kruiden tot pesto, salsa verde of een marinade, of vries ze in olie in een ijsblokjesvorm in.",
    },
    sv: {
      name: "Färska örter",
      question: "Hur länge håller färska örter?",
      why: "Mjuka örter som koriander och basilika vissnar snabbt; de är mest vatten i tunna blad.",
      store:
        "Ställ mjuka örter i ett glas vatten som blommor, löst täckta, i kylen (basilika trivs bättre på bänken).",
      cook: "Mixa trötta örter till pesto, salsa verde eller en marinad, eller frys dem i olja i en istärningsform.",
    },
    da: {
      name: "Friske krydderurter",
      question: "Hvor længe holder friske krydderurter?",
      why: "Bløde krydderurter som koriander og basilikum visner hurtigt; de er mest vand i tynde blade.",
      store:
        "Stil bløde krydderurter i et glas vand som blomster, løst tildækket, i køleskabet (basilikum foretrækker køkkenbordet).",
      cook: "Blend trætte krydderurter til pesto, salsa verde eller en marinade, eller frys dem i olie i en isterningebakke.",
    },
    fi: {
      name: "Tuoreet yrtit",
      question: "Kuinka kauan tuoreet yrtit säilyvät?",
      why: "Pehmeät yrtit kuten korianteri ja basilika nuutuvat nopeasti; ne ovat lähinnä vettä ohuissa lehdissä.",
      store:
        "Laita pehmeät yrtit kukkien tavoin lasiin vettä, löyhästi peitettynä, jääkaappiin (basilika viihtyy paremmin pöydällä).",
      cook: "Soseuta väsyneet yrtit pestoksi, salsa verdeksi tai marinadiksi, tai pakasta ne öljyssä jääpalamuotissa.",
    },
    no: {
      name: "Ferske urter",
      question: "Hvor lenge holder ferske urter?",
      why: "Myke urter som koriander og basilikum visner raskt; de er stort sett vann i tynne blader.",
      store:
        "Sett myke urter i et glass vann som blomster, løst tildekket, i kjøleskapet (basilikum trives bedre på benken).",
      cook: "Kjør trøtte urter til pesto, salsa verde eller en marinade, eller frys dem i olje i en isbitform.",
    },
    pl: {
      name: "Świeże zioła",
      question: "Jak długo trzymają się świeże zioła?",
      why: "Miękkie zioła, jak kolendra i bazylia, szybko więdną; to głównie woda w cienkich listkach.",
      store:
        "Wstaw miękkie zioła do szklanki z wodą jak kwiaty, luźno przykryte, do lodówki (bazylia woli blat).",
      cook: "Zwiotczałe zioła zmiksuj na pesto, salsę verde albo marynatę, lub zamroź je w oleju w foremce na lód.",
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
    nl: {
      name: "Boter",
      question: "Hoelang blijft boter goed?",
      why: "Boter is vetrijk en blijft lang goed, maar kan koelkastgeurtjes opnemen en wordt uiteindelijk ransig.",
      store:
        "Bewaar hem verpakt in de koelkast; vries reservepakjes in. Een beetje in een gesloten botervloot op kamertemperatuur is prima voor dagelijks gebruik.",
      cook: "Gebruik boter tegen de datum in baksels, sauzen of als bruine boter.",
    },
    sv: {
      name: "Smör",
      question: "Hur länge håller smör?",
      why: "Smör är fettrikt och håller bra, men kan ta upp kylsmaker och härsknar till slut.",
      store:
        "Förvara det inslaget i kylen; frys in extra paket. Lite i en täckt smörask i rumstemperatur går bra till dagligt bruk.",
      cook: "Använd smör nära datumet i bakning, såser eller brynt smör.",
    },
    da: {
      name: "Smør",
      question: "Hvor længe holder smør?",
      why: "Smør er fedtrigt og holder godt, men kan optage lugte fra køleskabet og bliver til sidst harsk.",
      store:
        "Opbevar det indpakket i køleskabet; frys ekstra pakker ned. Lidt i en tildækket smørskål ved stuetemperatur er fint til daglig brug.",
      cook: "Brug smør tæt på datoen i bagværk, saucer eller brunet smør.",
    },
    fi: {
      name: "Voi",
      question: "Kuinka kauan voi säilyy?",
      why: "Voi on rasvaista ja säilyy hyvin, mutta se voi imeä jääkaapin hajuja ja lopulta härskiintyä.",
      store:
        "Säilytä se käärittynä jääkaapissa; pakasta ylimääräiset paketit. Vähän voita kannellisessa rasiassa huoneenlämmössä käy hyvin päivittäiskäyttöön.",
      cook: "Käytä päiväyksen lähellä oleva voi leivontaan, kastikkeisiin tai ruskistettuna voina.",
    },
    no: {
      name: "Smør",
      question: "Hvor lenge holder smør?",
      why: "Smør er fettrikt og holder godt, men kan ta opp lukter fra kjøleskapet og blir til slutt harskt.",
      store:
        "Oppbevar det innpakket i kjøleskapet; frys ekstra pakker. Litt i en smørform med lokk i romtemperatur går fint til daglig bruk.",
      cook: "Bruk smør nær datoen i bakst, sauser eller brunet smør.",
    },
    pl: {
      name: "Masło",
      question: "Jak długo trzyma się masło?",
      why: "Masło jest tłuste i trzyma się dobrze, ale może chłonąć zapachy z lodówki i w końcu jełczeje.",
      store:
        "Trzymaj je zawinięte w lodówce; zapasowe kostki zamroź. Odrobina w przykrytej masielniczce w temperaturze pokojowej jest w porządku do codziennego użytku.",
      cook: "Masło blisko terminu zużyj do wypieków, sosów albo zrób z niego masło klarowane na brązowo.",
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
    nl: {
      name: "Gekookte restjes",
      question: "Hoelang blijven gekookte restjes goed?",
      why: "In bereide gerechten kunnen zich na het afkoelen bacteriën ontwikkelen, dus ze hebben een korte veilige periode in de koelkast.",
      store:
        "Laat ze binnen twee uur afkoelen, bewaar ze in een afgesloten bak en houd ze niet langer dan 2–3 dagen — of vries ze in voor later.",
      cook: "Verwarm restjes tot ze door en door heet zijn, en maar één keer. Copantry houdt je restporties bij zodat ze niet worden vergeten.",
    },
    sv: {
      name: "Matrester",
      question: "Hur länge håller matrester?",
      why: "Tillagade rätter kan få bakterietillväxt när de svalnat, så de har ett kort säkert fönster i kylen.",
      store:
        "Kyl ner dem inom två timmar, förvara i en tät låda och håll dem högst 2–3 dagar — eller frys in för senare.",
      cook: "Värm rester tills de är rykande heta, och bara en gång. Copantry håller koll på dina restportioner så att de inte glöms bort.",
    },
    da: {
      name: "Rester",
      question: "Hvor længe holder rester?",
      why: "Tilberedte retter kan få bakterievækst, når de er kølet af, så de har et kort sikkert vindue i køleskabet.",
      store:
        "Køl dem ned inden for to timer, opbevar dem i en lufttæt boks, og hold dem højst 2–3 dage — eller frys dem ned til senere.",
      cook: "Varm rester op, til de er rygende varme, og kun én gang. Copantry holder styr på dine restportioner, så de ikke bliver glemt.",
    },
    fi: {
      name: "Kypsät tähteet",
      question: "Kuinka kauan kypsät tähteet säilyvät?",
      why: "Kypsissä ruoissa voi jäähtymisen jälkeen kasvaa bakteereja, joten niillä on lyhyt turvallinen aika jääkaapissa.",
      store:
        "Jäähdytä ne kahdessa tunnissa, säilytä suljetussa rasiassa ja pidä korkeintaan 2–3 päivää — tai pakasta myöhempää varten.",
      cook: "Kuumenna tähteet kiehuvan kuumiksi, ja vain kerran. Copantry pitää kirjaa tähdeannoksistasi, jotta ne eivät unohdu.",
    },
    no: {
      name: "Matrester",
      question: "Hvor lenge holder matrester?",
      why: "Tilberedte retter kan få bakterievekst når de er avkjølt, så de har et kort trygt vindu i kjøleskapet.",
      store:
        "Kjøl dem ned innen to timer, oppbevar dem i en tett boks, og hold dem høyst 2–3 dager — eller frys dem til senere.",
      cook: "Varm rester til de er rykende varme, og bare én gang. Copantry holder oversikt over restporsjonene dine så de ikke blir glemt.",
    },
    pl: {
      name: "Resztki po gotowaniu",
      question: "Jak długo trzymają się resztki po gotowaniu?",
      why: "W ugotowanych potrawach po ostygnięciu mogą namnażać się bakterie, więc mają krótkie bezpieczne okno w lodówce.",
      store:
        "Schłodź je w ciągu dwóch godzin, przechowuj w szczelnym pojemniku i trzymaj najwyżej 2–3 dni — albo zamroź na później.",
      cook: "Resztki podgrzewaj do wrzenia i tylko raz. Copantry pilnuje twoich porcji resztek, żeby o nich nie zapomnieć.",
    },
  },
};

// ── Resolvers ────────────────────────────────────────────────────────────────

/** Localized category label (falls back to the English key). */
export function localizedCategory(category, lng) {
  return (
    CATEGORY_TX[category]?.[lng] ??
    CATEGORY_TX[category]?.[baseLocaleOf(lng)] ??
    category
  );
}

/**
 * Resolve a single shelf-life item for a locale: structural fields from
 * shelfLife.js + translated name/question/why/store/cook + a built answer
 * sentence. English/`us` use the English templates and source text.
 */
export function localizedShelfItem(item, lng) {
  const baseLocale = baseLocaleOf(lng);
  const ui = LEARN_UI[lng] || LEARN_UI[baseLocale] || LEARN_UI.en;
  const tx =
    SHELF_LIFE_TX[item.slug]?.[lng] ?? SHELF_LIFE_TX[item.slug]?.[baseLocale];
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
