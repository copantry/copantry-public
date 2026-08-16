/*
 * Localized blog content (chrome + post metadata + bodies) for /blog and the
 * three editorial posts. Pure data — NO JSX — because seoConfig.js (Node
 * prerender) imports this. Bodies use the block model rendered by
 * src/pages/blog/BlogBody.jsx (kinds: lead/p/note/h2/ul/ol; runs: string |
 * {b} | {l,t} internal link | {a,t} external link). English structural metadata
 * (slug/date/emoji/readMins) lives in blog.js; `/us` falls back to English.
 */

import { POSTS } from "./blog.js";

const BY_SLUG = Object.fromEntries(POSTS.map((p) => [p.slug, p]));

// ── Blog index + post chrome ─────────────────────────────────────────────────
export const BLOG_UI = {
  en: {
    eyebrow: "The Copantry blog",
    h1: "Waste less, cook smarter, spend less",
    lede: "Practical, no-nonsense guides to cooking what you have, planning around your fridge, and cutting food waste at home.",
    readMore: "Read more",
    minRead: "min read",
    locale: "en-GB",
  },
  fr: {
    eyebrow: "Le blog Copantry",
    h1: "Gaspillez moins, cuisinez plus malin, dépensez moins",
    lede: "Des guides pratiques et sans détour pour cuisiner ce que vous avez, planifier autour de votre frigo et réduire le gaspillage à la maison.",
    readMore: "Lire la suite",
    minRead: "min de lecture",
    locale: "fr-FR",
  },
  it: {
    eyebrow: "Il blog di Copantry",
    h1: "Spreca meno, cucina meglio, spendi meno",
    lede: "Guide pratiche e concrete per cucinare ciò che hai, pianificare intorno al frigo e ridurre lo spreco di cibo in casa.",
    readMore: "Leggi di più",
    minRead: "min di lettura",
    locale: "it-IT",
  },
  es: {
    eyebrow: "El blog de Copantry",
    h1: "Desperdicia menos, cocina mejor, gasta menos",
    lede: "Guías prácticas y directas para cocinar lo que tienes, planificar en torno a tu nevera y reducir el desperdicio de comida en casa.",
    readMore: "Leer más",
    minRead: "min de lectura",
    locale: "es-ES",
  },
  pt: {
    eyebrow: "O blog do Copantry",
    h1: "Desperdice menos, cozinhe melhor, gaste menos",
    lede: "Guias práticos e diretos para cozinhar o que tem, planear em torno do seu frigorífico e reduzir o desperdício alimentar em casa.",
    readMore: "Ler mais",
    minRead: "min de leitura",
    locale: "pt-PT",
  },
  de: {
    eyebrow: "Der Copantry-Blog",
    h1: "Weniger verschwenden, klüger kochen, weniger ausgeben",
    lede: "Praktische, unkomplizierte Leitfäden, um das Vorhandene zu kochen, rund um den Kühlschrank zu planen und Lebensmittelabfall zu Hause zu senken.",
    readMore: "Weiterlesen",
    minRead: "Min. Lesezeit",
    locale: "de-DE",
  },
  nl: {
    eyebrow: "De Copantry-blog",
    h1: "Verspil minder, kook slimmer, geef minder uit",
    lede: "Praktische, nuchtere gidsen om te koken met wat je hebt, te plannen rond je koelkast en thuis minder voedsel te verspillen.",
    readMore: "Lees verder",
    minRead: "min lezen",
    locale: "nl-NL",
  },
  sv: {
    eyebrow: "Copantry-bloggen",
    h1: "Släng mindre, laga smartare, lägg mindre pengar",
    lede: "Praktiska, raka guider till att laga det du har, planera utifrån kylen och minska matsvinnet hemma.",
    readMore: "Läs mer",
    minRead: "min läsning",
    locale: "sv-SE",
  },
  da: {
    eyebrow: "Copantry-bloggen",
    h1: "Smid mindre ud, lav klogere mad, brug færre penge",
    lede: "Praktiske, ligefremme guides til at lave mad af det, du har, planlægge ud fra køleskabet og mindske madspild derhjemme.",
    readMore: "Læs mere",
    minRead: "min læsning",
    locale: "da-DK",
  },
  fi: {
    eyebrow: "Copantryn blogi",
    h1: "Hävitä vähemmän, kokkaa fiksummin, kuluta vähemmän",
    lede: "Käytännöllisiä ja suoraviivaisia oppaita siihen, miten laittaa ruokaa olemassa olevasta, suunnitella jääkaapin ehdoilla ja vähentää ruokahävikkiä kotona.",
    readMore: "Lue lisää",
    minRead: "min lukuaika",
    locale: "fi-FI",
  },
  no: {
    eyebrow: "Copantry-bloggen",
    h1: "Kast mindre, lag smartere mat, bruk mindre penger",
    lede: "Praktiske, likefremme guider til å lage mat av det du har, planlegge ut fra kjøleskapet og redusere matsvinn hjemme.",
    readMore: "Les mer",
    minRead: "min lesing",
    locale: "nb-NO",
  },
  pl: {
    eyebrow: "Blog Copantry",
    h1: "Marnuj mniej, gotuj mądrzej, wydawaj mniej",
    lede: "Praktyczne, konkretne poradniki o gotowaniu z tego, co masz, planowaniu wokół lodówki i ograniczaniu marnowania jedzenia w domu.",
    readMore: "Czytaj dalej",
    minRead: "min czytania",
    locale: "pl-PL",
  },
};

const CATEGORY_TX = {
  Cooking: {
    fr: "Cuisine",
    it: "Cucina",
    es: "Cocina",
    pt: "Cozinha",
    de: "Kochen",
    nl: "Koken",
    sv: "Matlagning",
    da: "Madlavning",
    fi: "Ruoanlaitto",
    no: "Matlaging",
    pl: "Gotowanie",
  },
  "Food waste": {
    fr: "Gaspillage alimentaire",
    it: "Spreco alimentare",
    es: "Desperdicio de comida",
    pt: "Desperdício alimentar",
    de: "Lebensmittelverschwendung",
    nl: "Voedselverspilling",
    sv: "Matsvinn",
    da: "Madspild",
    fi: "Ruokahävikki",
    no: "Matsvinn",
    pl: "Marnowanie żywności",
  },
  "Meal planning": {
    fr: "Planification des repas",
    it: "Pianificazione dei pasti",
    es: "Planificación de comidas",
    pt: "Planeamento de refeições",
    de: "Essensplanung",
    nl: "Maaltijden plannen",
    sv: "Måltidsplanering",
    da: "Madplanlægning",
    fi: "Ateriasuunnittelu",
    no: "Måltidsplanlegging",
    pl: "Planowanie posiłków",
  },
};

// ── Per-post translations (title/description/blocks) ─────────────────────────
export const POST_TX = {
  "what-can-i-cook-with-what-i-have": {
    en: {
      title: "What can I cook with what’s in my fridge right now?",
      description:
        "A simple method for turning whatever is already in your fridge into a real dinner tonight — no shopping trip required.",
      blocks: [
        {
          k: "lead",
          c: [
            "To cook with what you already have, start from your fridge instead of a recipe: pick the two or three things that need using up first, choose a method (a traybake, a stir-fry, a soup, a pasta, an omelette), and build around them with storecupboard staples. You almost always have a meal already — you just can’t see it yet.",
          ],
        },
        { k: "h2", c: "1. Look at what’s about to go off, not what’s missing" },
        {
          k: "p",
          c: [
            "The trick is to flip the question. Instead of “what do I need to buy to make this recipe?”, ask “what do I already have that I should use first?”. Wilting spinach, a couple of chicken thighs and a lemon aren’t leftovers — they’re a lemon-and-spinach chicken traybake.",
          ],
        },
        { k: "h2", c: "2. Pick a format, then fill it in" },
        {
          k: "p",
          c: [
            "Most weeknight dinners are one of a handful of flexible formats:",
          ],
        },
        {
          k: "ul",
          c: [
            [
              { b: "Traybake:" },
              " a protein + hardy veg + oil + seasoning, roasted together.",
            ],
            [
              { b: "Stir-fry:" },
              " anything crunchy + a protein + a sauce, over rice or noodles.",
            ],
            [
              { b: "Soup:" },
              " an onion base + whatever veg is tired + stock, blended or not.",
            ],
            [
              { b: "Pasta:" },
              " a sauce built from a tin of tomatoes or some cream + bits and bobs.",
            ],
            [
              { b: "Frittata or omelette:" },
              " eggs + cheese + any leftover veg or herbs.",
            ],
          ],
        },
        {
          k: "p",
          c: [
            "Choose the format that matches your ingredients and the time you have, and the “recipe” mostly writes itself.",
          ],
        },
        { k: "h2", c: "3. Let the app do the matching" },
        {
          k: "p",
          c: [
            "This is exactly what Copantry is built to do. It already knows what’s in your kitchen and how long each thing has left, so it can suggest real meals that use your about-to-expire ingredients first — scaled to however many you’re feeding. See ",
            {
              l: "/features/reduce-food-waste",
              t: "how it reduces food waste",
            },
            " and ",
            { l: "/features/meal-planning", t: "how meal planning works" },
            ".",
          ],
        },
        {
          k: "p",
          c: [
            "Cooking from what you have is the single most effective everyday habit for wasting less and spending less — and it’s usually faster than going to the shop. For the bigger picture, see ",
            { l: "/blog/use-it-up-method", t: "the use-it-up method" },
            ".",
          ],
        },
      ],
    },
    fr: {
      title: "Que puis-je cuisiner avec ce qu’il y a dans mon frigo ?",
      description:
        "Une méthode simple pour transformer ce qui est déjà dans votre frigo en un vrai dîner ce soir — sans passer par les courses.",
      blocks: [
        {
          k: "lead",
          c: [
            "Pour cuisiner avec ce que vous avez déjà, partez de votre frigo plutôt que d’une recette : choisissez les deux ou trois choses à finir en premier, choisissez un format (plat au four, sauté, soupe, pâtes, omelette) et complétez avec les basiques du placard. Vous avez presque toujours un repas tout prêt — vous ne le voyez pas encore.",
          ],
        },
        {
          k: "h2",
          c: "1. Regardez ce qui va se gâter, pas ce qui manque",
        },
        {
          k: "p",
          c: [
            "L’astuce est d’inverser la question. Au lieu de « que dois-je acheter pour faire cette recette ? », demandez « qu’est-ce que j’ai déjà et que je devrais finir en premier ? ». Des épinards flétris, deux cuisses de poulet et un citron ne sont pas des restes — c’est un plat de poulet au citron et épinards.",
          ],
        },
        { k: "h2", c: "2. Choisissez un format, puis remplissez-le" },
        {
          k: "p",
          c: [
            "La plupart des dîners de semaine tiennent en quelques formats souples :",
          ],
        },
        {
          k: "ul",
          c: [
            [
              { b: "Plat au four :" },
              " une protéine + des légumes robustes + huile + assaisonnement, rôtis ensemble.",
            ],
            [
              { b: "Sauté :" },
              " tout ce qui croque + une protéine + une sauce, sur du riz ou des nouilles.",
            ],
            [
              { b: "Soupe :" },
              " une base d’oignon + les légumes fatigués + du bouillon, mixée ou non.",
            ],
            [
              { b: "Pâtes :" },
              " une sauce à partir d’une boîte de tomates ou de crème + ce qui traîne.",
            ],
            [
              { b: "Frittata ou omelette :" },
              " œufs + fromage + restes de légumes ou herbes.",
            ],
          ],
        },
        {
          k: "p",
          c: [
            "Choisissez le format qui correspond à vos ingrédients et au temps dont vous disposez, et la « recette » s’écrit presque toute seule.",
          ],
        },
        { k: "h2", c: "3. Laissez l’appli faire les associations" },
        {
          k: "p",
          c: [
            "C’est exactement ce pour quoi Copantry est fait. Il sait déjà ce qu’il y a dans votre cuisine et le temps qu’il reste à chaque chose, donc il peut suggérer de vrais plats qui utilisent d’abord vos ingrédients bientôt périmés — ajustés au nombre de convives. Voir ",
            {
              l: "/features/reduce-food-waste",
              t: "comment il réduit le gaspillage",
            },
            " et ",
            {
              l: "/features/meal-planning",
              t: "comment fonctionne la planification",
            },
            ".",
          ],
        },
        {
          k: "p",
          c: [
            "Cuisiner ce que l’on a est l’habitude quotidienne la plus efficace pour gaspiller et dépenser moins — et c’est souvent plus rapide que d’aller au magasin. Pour la vue d’ensemble, voir ",
            { l: "/blog/use-it-up-method", t: "la méthode anti-gaspi" },
            ".",
          ],
        },
      ],
    },
    it: {
      title: "Cosa posso cucinare con quello che ho in frigo adesso?",
      description:
        "Un metodo semplice per trasformare ciò che è già nel tuo frigo in una cena vera stasera — senza andare a fare la spesa.",
      blocks: [
        {
          k: "lead",
          c: [
            "Per cucinare con ciò che hai già, parti dal frigo invece che da una ricetta: scegli le due o tre cose da consumare per prime, scegli un formato (teglia al forno, saltato, zuppa, pasta, omelette) e completa con le scorte della dispensa. Hai quasi sempre un pasto già pronto — solo, non lo vedi ancora.",
          ],
        },
        { k: "h2", c: "1. Guarda cosa sta per andare a male, non cosa manca" },
        {
          k: "p",
          c: [
            "Il trucco è ribaltare la domanda. Invece di « cosa devo comprare per fare questa ricetta? », chiediti « cosa ho già che dovrei consumare per primo? ». Spinaci appassiti, un paio di cosce di pollo e un limone non sono avanzi — sono una teglia di pollo al limone e spinaci.",
          ],
        },
        { k: "h2", c: "2. Scegli un formato, poi riempilo" },
        {
          k: "p",
          c: [
            "La maggior parte delle cene infrasettimanali rientra in pochi formati flessibili:",
          ],
        },
        {
          k: "ul",
          c: [
            [
              { b: "Teglia al forno:" },
              " una proteina + verdure robuste + olio + condimento, arrostite insieme.",
            ],
            [
              { b: "Saltato:" },
              " qualcosa di croccante + una proteina + una salsa, su riso o noodle.",
            ],
            [
              { b: "Zuppa:" },
              " una base di cipolla + le verdure stanche + brodo, frullata o no.",
            ],
            [
              { b: "Pasta:" },
              " una salsa da una scatola di pomodori o un po’ di panna + avanzi vari.",
            ],
            [
              { b: "Frittata o omelette:" },
              " uova + formaggio + verdure o erbe avanzate.",
            ],
          ],
        },
        {
          k: "p",
          c: [
            "Scegli il formato adatto ai tuoi ingredienti e al tempo che hai, e la « ricetta » si scrive quasi da sola.",
          ],
        },
        { k: "h2", c: "3. Lascia che sia l’app a fare gli abbinamenti" },
        {
          k: "p",
          c: [
            "È esattamente ciò per cui Copantry è fatto. Sa già cosa c’è nella tua cucina e quanto resta a ogni cosa, quindi può suggerire pasti veri che usano prima gli ingredienti in scadenza — adattati a quante persone servi. Vedi ",
            {
              l: "/features/reduce-food-waste",
              t: "come riduce gli sprechi",
            },
            " e ",
            {
              l: "/features/meal-planning",
              t: "come funziona la pianificazione",
            },
            ".",
          ],
        },
        {
          k: "p",
          c: [
            "Cucinare ciò che si ha è l’abitudine quotidiana più efficace per sprecare e spendere meno — e spesso è più veloce che andare al negozio. Per il quadro completo, vedi ",
            { l: "/blog/use-it-up-method", t: "il metodo svuota-frigo" },
            ".",
          ],
        },
      ],
    },
    es: {
      title: "¿Qué puedo cocinar con lo que tengo ahora en la nevera?",
      description:
        "Un método sencillo para convertir lo que ya hay en tu nevera en una cena de verdad esta noche — sin ir a comprar.",
      blocks: [
        {
          k: "lead",
          c: [
            "Para cocinar con lo que ya tienes, parte de tu nevera en vez de una receta: elige las dos o tres cosas que hay que gastar primero, escoge un formato (bandeja al horno, salteado, sopa, pasta, tortilla) y complétalo con básicos de la despensa. Casi siempre tienes una comida ya hecha — solo que aún no la ves.",
          ],
        },
        { k: "h2", c: "1. Mira lo que está por estropearse, no lo que falta" },
        {
          k: "p",
          c: [
            "El truco es darle la vuelta a la pregunta. En vez de « ¿qué necesito comprar para esta receta? », pregunta « ¿qué tengo ya que debería gastar primero? ». Unas espinacas mustias, un par de muslos de pollo y un limón no son sobras — son una bandeja de pollo al limón con espinacas.",
          ],
        },
        { k: "h2", c: "2. Elige un formato y luego rellénalo" },
        {
          k: "p",
          c: [
            "La mayoría de las cenas entre semana son uno de unos pocos formatos flexibles:",
          ],
        },
        {
          k: "ul",
          c: [
            [
              { b: "Bandeja al horno:" },
              " una proteína + verdura resistente + aceite + condimento, asados juntos.",
            ],
            [
              { b: "Salteado:" },
              " algo crujiente + una proteína + una salsa, sobre arroz o fideos.",
            ],
            [
              { b: "Sopa:" },
              " una base de cebolla + la verdura cansada + caldo, triturada o no.",
            ],
            [
              { b: "Pasta:" },
              " una salsa con una lata de tomate o un poco de nata + lo que haya.",
            ],
            [
              { b: "Frittata o tortilla:" },
              " huevos + queso + cualquier verdura o hierba sobrante.",
            ],
          ],
        },
        {
          k: "p",
          c: [
            "Elige el formato que encaje con tus ingredientes y el tiempo que tienes, y la « receta » casi se escribe sola.",
          ],
        },
        { k: "h2", c: "3. Deja que la app haga las combinaciones" },
        {
          k: "p",
          c: [
            "Esto es justo para lo que está hecho Copantry. Ya sabe qué hay en tu cocina y cuánto le queda a cada cosa, así que puede sugerir comidas reales que usan primero los ingredientes a punto de caducar — ajustadas a cuántos sois. Mira ",
            {
              l: "/features/reduce-food-waste",
              t: "cómo reduce el desperdicio",
            },
            " y ",
            {
              l: "/features/meal-planning",
              t: "cómo funciona la planificación",
            },
            ".",
          ],
        },
        {
          k: "p",
          c: [
            "Cocinar lo que tienes es el hábito diario más eficaz para desperdiciar y gastar menos — y suele ser más rápido que ir a la tienda. Para la visión de conjunto, mira ",
            { l: "/blog/use-it-up-method", t: "el método de aprovechamiento" },
            ".",
          ],
        },
      ],
    },
    pt: {
      title: "O que posso cozinhar com o que tenho agora no frigorífico?",
      description:
        "Um método simples para transformar o que já está no seu frigorífico num jantar a sério esta noite — sem ir às compras.",
      blocks: [
        {
          k: "lead",
          c: [
            "Para cozinhar com o que já tem, parta do seu frigorífico em vez de uma receita: escolha as duas ou três coisas a gastar primeiro, escolha um formato (assadeira no forno, salteado, sopa, massa, omelete) e complete com os básicos da despensa. Quase sempre já tem uma refeição — só que ainda não a vê.",
          ],
        },
        {
          k: "h2",
          c: "1. Olhe para o que está prestes a estragar, não para o que falta",
        },
        {
          k: "p",
          c: [
            "O truque é inverter a pergunta. Em vez de « o que preciso de comprar para esta receita? », pergunte « o que já tenho que devia gastar primeiro? ». Espinafres murchos, duas coxas de frango e um limão não são sobras — são uma assadeira de frango com limão e espinafres.",
          ],
        },
        { k: "h2", c: "2. Escolha um formato e depois preencha-o" },
        {
          k: "p",
          c: [
            "A maioria dos jantares de semana é um de uns poucos formatos flexíveis:",
          ],
        },
        {
          k: "ul",
          c: [
            [
              { b: "Assadeira no forno:" },
              " uma proteína + legumes resistentes + azeite + tempero, assados juntos.",
            ],
            [
              { b: "Salteado:" },
              " algo crocante + uma proteína + um molho, sobre arroz ou noodles.",
            ],
            [
              { b: "Sopa:" },
              " uma base de cebola + os legumes cansados + caldo, triturada ou não.",
            ],
            [
              { b: "Massa:" },
              " um molho de uma lata de tomate ou um pouco de natas + o que houver.",
            ],
            [
              { b: "Frittata ou omelete:" },
              " ovos + queijo + quaisquer legumes ou ervas que sobrem.",
            ],
          ],
        },
        {
          k: "p",
          c: [
            "Escolha o formato que combina com os seus ingredientes e o tempo que tem, e a « receita » quase se escreve sozinha.",
          ],
        },
        { k: "h2", c: "3. Deixe a app fazer as combinações" },
        {
          k: "p",
          c: [
            "É exatamente para isto que o Copantry foi feito. Já sabe o que há na sua cozinha e quanto resta a cada coisa, por isso pode sugerir refeições reais que usam primeiro os ingredientes prestes a expirar — ajustadas a quantos são. Veja ",
            {
              l: "/features/reduce-food-waste",
              t: "como reduz o desperdício",
            },
            " e ",
            {
              l: "/features/meal-planning",
              t: "como funciona o planeamento",
            },
            ".",
          ],
        },
        {
          k: "p",
          c: [
            "Cozinhar o que se tem é o hábito diário mais eficaz para desperdiçar e gastar menos — e costuma ser mais rápido do que ir à loja. Para o panorama geral, veja ",
            { l: "/blog/use-it-up-method", t: "o método de aproveitamento" },
            ".",
          ],
        },
      ],
    },
    de: {
      title: "Was kann ich mit dem kochen, was gerade im Kühlschrank ist?",
      description:
        "Eine einfache Methode, aus dem, was schon im Kühlschrank ist, heute Abend ein echtes Essen zu machen — ohne einkaufen zu gehen.",
      blocks: [
        {
          k: "lead",
          c: [
            "Um mit dem zu kochen, was du schon hast, geh von deinem Kühlschrank aus statt von einem Rezept: Nimm die zwei, drei Dinge, die zuerst weg müssen, wähl eine Form (Ofengericht, Pfanne, Suppe, Pasta, Omelett) und ergänze mit Vorratsbasics. Du hast fast immer schon ein Essen — du siehst es nur noch nicht.",
          ],
        },
        { k: "h2", c: "1. Schau, was bald schlecht wird, nicht was fehlt" },
        {
          k: "p",
          c: [
            "Der Trick ist, die Frage umzudrehen. Statt „Was muss ich für dieses Rezept kaufen?“ frag „Was habe ich schon, das ich zuerst verbrauchen sollte?“. Welker Spinat, ein paar Hähnchenschenkel und eine Zitrone sind keine Reste — das ist ein Zitronen-Spinat-Hähnchen aus dem Ofen.",
          ],
        },
        { k: "h2", c: "2. Wähl eine Form und füll sie dann" },
        {
          k: "p",
          c: [
            "Die meisten Wochentagsessen sind eine von wenigen flexiblen Formen:",
          ],
        },
        {
          k: "ul",
          c: [
            [
              { b: "Ofengericht:" },
              " eine Proteinquelle + robustes Gemüse + Öl + Würze, zusammen geröstet.",
            ],
            [
              { b: "Pfanne:" },
              " irgendetwas Knackiges + eine Proteinquelle + eine Sauce, über Reis oder Nudeln.",
            ],
            [
              { b: "Suppe:" },
              " eine Zwiebelbasis + das müde Gemüse + Brühe, püriert oder nicht.",
            ],
            [
              { b: "Pasta:" },
              " eine Sauce aus einer Dose Tomaten oder etwas Sahne + Kleinkram.",
            ],
            [
              { b: "Frittata oder Omelett:" },
              " Eier + Käse + übriges Gemüse oder Kräuter.",
            ],
          ],
        },
        {
          k: "p",
          c: [
            "Wähl die Form, die zu deinen Zutaten und deiner Zeit passt, und das „Rezept“ schreibt sich fast von selbst.",
          ],
        },
        { k: "h2", c: "3. Lass die App die Kombination übernehmen" },
        {
          k: "p",
          c: [
            "Genau dafür ist Copantry gebaut. Es weiß bereits, was in deiner Küche ist und wie lange jedes Ding noch hält, und kann daher echte Gerichte vorschlagen, die zuerst deine bald ablaufenden Zutaten nutzen — skaliert auf so viele, wie du versorgst. Siehe ",
            {
              l: "/features/reduce-food-waste",
              t: "wie es Abfall reduziert",
            },
            " und ",
            { l: "/features/meal-planning", t: "wie die Planung funktioniert" },
            ".",
          ],
        },
        {
          k: "p",
          c: [
            "Aus dem zu kochen, was du hast, ist die wirksamste Alltagsgewohnheit, um weniger zu verschwenden und auszugeben — und meist schneller, als zum Laden zu gehen. Für den größeren Zusammenhang siehe ",
            { l: "/blog/use-it-up-method", t: "die Aufbrauch-Methode" },
            ".",
          ],
        },
      ],
    },
    nl: {
      title: "Wat kan ik koken met wat er nu in mijn koelkast ligt?",
      description:
        "Een eenvoudige methode om wat er al in je koelkast ligt vanavond in een echte maaltijd te veranderen — zonder boodschappen te doen.",
      blocks: [
        {
          k: "lead",
          c: [
            "Om te koken met wat je al hebt, begin je bij je koelkast in plaats van bij een recept: kies de twee of drie dingen die het eerst op moeten, kies een vorm (een ovenschotel, een roerbakgerecht, een soep, een pasta, een omelet) en bouw daaromheen met basisproducten uit de kast. Je hebt bijna altijd al een maaltijd — je ziet hem alleen nog niet.",
          ],
        },
        {
          k: "h2",
          c: "1. Kijk naar wat bijna bederft, niet naar wat ontbreekt",
        },
        {
          k: "p",
          c: [
            "De truc is de vraag om te draaien. In plaats van “wat moet ik kopen om dit recept te maken?” vraag je “wat heb ik al dat ik als eerste moet gebruiken?”. Verlepte spinazie, een paar kippendijen en een citroen zijn geen restjes — dat is een ovenschotel met kip, citroen en spinazie.",
          ],
        },
        {
          k: "h2",
          c: "2. Kies een vorm en vul hem in",
        },
        {
          k: "p",
          c: [
            "De meeste doordeweekse maaltijden zijn een van een handvol flexibele vormen:",
          ],
        },
        {
          k: "ul",
          c: [
            [
              {
                b: "Ovenschotel:",
              },
              " een eiwitbron + stevige groenten + olie + kruiden, samen geroosterd.",
            ],
            [
              {
                b: "Roerbak:",
              },
              " alles wat knapperig is + een eiwitbron + een saus, over rijst of noedels.",
            ],
            [
              {
                b: "Soep:",
              },
              " een basis van ui + welke groente ook slap wordt + bouillon, gepureerd of niet.",
            ],
            [
              {
                b: "Pasta:",
              },
              " een saus van een blik tomaten of wat room + allerlei restjes.",
            ],
            [
              {
                b: "Frittata of omelet:",
              },
              " eieren + kaas + overgebleven groente of kruiden.",
            ],
          ],
        },
        {
          k: "p",
          c: [
            "Kies de vorm die past bij je ingrediënten en de tijd die je hebt, en het “recept” schrijft zichzelf grotendeels.",
          ],
        },
        {
          k: "h2",
          c: "3. Laat de app het matchen doen",
        },
        {
          k: "p",
          c: [
            "Dit is precies waarvoor Copantry is gemaakt. Het weet al wat er in je keuken ligt en hoelang alles nog goed is, dus het kan echte maaltijden voorstellen die eerst je bijna-bedorven ingrediënten gebruiken — afgestemd op het aantal eters. Zie ",
            {
              l: "/features/reduce-food-waste",
              t: "hoe het voedselverspilling vermindert",
            },
            " en ",
            {
              l: "/features/meal-planning",
              t: "hoe maaltijden plannen werkt",
            },
            ".",
          ],
        },
        {
          k: "p",
          c: [
            "Koken met wat je hebt is de meest effectieve dagelijkse gewoonte om minder te verspillen en minder uit te geven — en meestal is het sneller dan naar de winkel gaan. Voor het grotere plaatje, zie ",
            {
              l: "/blog/use-it-up-method",
              t: "de opmaakmethode",
            },
            ".",
          ],
        },
      ],
    },
    sv: {
      title: "Vad kan jag laga av det som finns i kylen just nu?",
      description:
        "En enkel metod för att göra det som redan står i kylen till en riktig middag i kväll — utan att handla.",
      blocks: [
        {
          k: "lead",
          c: [
            "För att laga av det du redan har börjar du i kylen i stället för i ett recept: välj de två eller tre saker som måste användas först, välj en form (en plåtmiddag, en wok, en soppa, en pasta, en omelett) och bygg runt dem med skafferivaror. Du har nästan alltid en måltid redan — du ser den bara inte än.",
          ],
        },
        {
          k: "h2",
          c: "1. Titta på det som snart blir dåligt, inte på det som saknas",
        },
        {
          k: "p",
          c: [
            "Knepet är att vända på frågan. I stället för ”vad måste jag köpa för att laga det här receptet?” frågar du ”vad har jag redan som borde användas först?”. Slokande spenat, ett par kycklinglår och en citron är inga rester — det är en plåtmiddag med kyckling, citron och spenat.",
          ],
        },
        {
          k: "h2",
          c: "2. Välj en form och fyll i den",
        },
        {
          k: "p",
          c: [
            "De flesta vardagsmiddagar är en av en handfull flexibla former:",
          ],
        },
        {
          k: "ul",
          c: [
            [
              {
                b: "Plåtmiddag:",
              },
              " en proteinkälla + tåliga grönsaker + olja + krydda, rostat tillsammans.",
            ],
            [
              {
                b: "Wok:",
              },
              " allt som är krispigt + en proteinkälla + en sås, över ris eller nudlar.",
            ],
            [
              {
                b: "Soppa:",
              },
              " en lökbas + vilka grönsaker som än är trötta + buljong, mixat eller inte.",
            ],
            [
              {
                b: "Pasta:",
              },
              " en sås byggd på en burk tomater eller lite grädde + lite av varje.",
            ],
            [
              {
                b: "Frittata eller omelett:",
              },
              " ägg + ost + eventuella grönsaks- eller örtrester.",
            ],
          ],
        },
        {
          k: "p",
          c: [
            "Välj den form som passar dina råvaror och den tid du har, så skriver ”receptet” mest sig självt.",
          ],
        },
        {
          k: "h2",
          c: "3. Låt appen göra matchningen",
        },
        {
          k: "p",
          c: [
            "Det här är precis vad Copantry är byggt för. Den vet redan vad du har i köket och hur länge varje sak har kvar, så den kan föreslå riktiga måltider som först använder de råvaror som snart går ut — anpassade efter hur många du lagar till. Se ",
            {
              l: "/features/reduce-food-waste",
              t: "hur den minskar matsvinnet",
            },
            " och ",
            {
              l: "/features/meal-planning",
              t: "hur måltidsplaneringen fungerar",
            },
            ".",
          ],
        },
        {
          k: "p",
          c: [
            "Att laga av det du har är den enskilt mest effektiva vardagsvanan för att slänga mindre och lägga mindre pengar — och det går oftast snabbare än att gå till butiken. För helhetsbilden, se ",
            {
              l: "/blog/use-it-up-method",
              t: "använd-upp-metoden",
            },
            ".",
          ],
        },
      ],
    },
    da: {
      title: "Hvad kan jeg lave af det, der står i køleskabet lige nu?",
      description:
        "En enkel metode til at gøre det, der allerede står i dit køleskab, til rigtig aftensmad i aften — uden en tur i butikken.",
      blocks: [
        {
          k: "lead",
          c: [
            "For at lave mad af det, du allerede har, starter du i køleskabet i stedet for i en opskrift: vælg de to eller tre ting, der skal bruges først, vælg en form (en ovnret, en wok, en suppe, en pasta, en omelet) og byg omkring dem med varer fra skabet. Du har næsten altid et måltid allerede — du kan bare ikke se det endnu.",
          ],
        },
        {
          k: "h2",
          c: "1. Kig på det, der snart bliver dårligt, ikke på det, der mangler",
        },
        {
          k: "p",
          c: [
            "Tricket er at vende spørgsmålet om. I stedet for „hvad skal jeg købe for at lave denne opskrift?“ spørger du „hvad har jeg allerede, som bør bruges først?“. Slasket spinat, et par kyllingelår og en citron er ikke rester — det er en ovnret med kylling, citron og spinat.",
          ],
        },
        {
          k: "h2",
          c: "2. Vælg en form, og fyld den ud",
        },
        {
          k: "p",
          c: [
            "De fleste hverdagsmiddage er en af en håndfuld fleksible former:",
          ],
        },
        {
          k: "ul",
          c: [
            [
              {
                b: "Ovnret:",
              },
              " en proteinkilde + hårdføre grøntsager + olie + krydderi, bagt sammen.",
            ],
            [
              {
                b: "Wok:",
              },
              " alt sprødt + en proteinkilde + en sauce, over ris eller nudler.",
            ],
            [
              {
                b: "Suppe:",
              },
              " en løgbase + hvilke grøntsager der end er trætte + fond, blendet eller ej.",
            ],
            [
              {
                b: "Pasta:",
              },
              " en sauce bygget på en dåse tomater eller lidt fløde + lidt af hvert.",
            ],
            [
              {
                b: "Frittata eller omelet:",
              },
              " æg + ost + eventuelle rester af grøntsager eller krydderurter.",
            ],
          ],
        },
        {
          k: "p",
          c: [
            "Vælg den form, der passer til dine råvarer og den tid, du har, så skriver „opskriften“ stort set sig selv.",
          ],
        },
        {
          k: "h2",
          c: "3. Lad appen klare matchningen",
        },
        {
          k: "p",
          c: [
            "Det er præcis det, Copantry er bygget til. Den ved allerede, hvad du har i køkkenet, og hvor længe hver ting holder, så den kan foreslå rigtige måltider, der først bruger de råvarer, som snart udløber — tilpasset hvor mange I er. Se ",
            {
              l: "/features/reduce-food-waste",
              t: "hvordan den mindsker madspild",
            },
            " og ",
            {
              l: "/features/meal-planning",
              t: "hvordan madplanlægningen virker",
            },
            ".",
          ],
        },
        {
          k: "p",
          c: [
            "At lave mad af det, du har, er den enkeltvis mest effektive hverdagsvane til at smide mindre ud og bruge færre penge — og det er som regel hurtigere end at gå i butikken. For det store billede, se ",
            {
              l: "/blog/use-it-up-method",
              t: "brug-op-metoden",
            },
            ".",
          ],
        },
      ],
    },
    fi: {
      title: "Mitä voin laittaa siitä, mitä jääkaapissani juuri nyt on?",
      description:
        "Yksinkertainen tapa muuttaa jääkaapin sisältö oikeaksi päivälliseksi tänä iltana — ilman kauppareissua.",
      blocks: [
        {
          k: "lead",
          c: [
            "Kun laitat ruokaa siitä, mitä sinulla jo on, aloita jääkaapista etkä reseptistä: valitse ne kaksi tai kolme asiaa, jotka pitää käyttää ensin, valitse muoto (uunivuoka, wokki, keitto, pasta, munakas) ja rakenna niiden ympärille kaapin perustarvikkeilla. Sinulla on lähes aina jo ateria — et vain vielä näe sitä.",
          ],
        },
        {
          k: "h2",
          c: "1. Katso sitä, mikä on pilaantumassa, älä sitä, mikä puuttuu",
        },
        {
          k: "p",
          c: [
            "Kikka on kääntää kysymys. Sen sijaan että kysyisit ”mitä minun pitää ostaa tämän reseptin tekemiseen?”, kysy ”mitä minulla jo on, joka pitäisi käyttää ensin?”. Nuutunut pinaatti, pari broilerin koipireittä ja sitruuna eivät ole tähteitä — ne ovat sitruunainen pinaatti-broilerivuoka.",
          ],
        },
        {
          k: "h2",
          c: "2. Valitse muoto ja täytä se",
        },
        {
          k: "p",
          c: [
            "Useimmat arki-illan päivälliset ovat jokin kourallisesta joustavia muotoja:",
          ],
        },
        {
          k: "ul",
          c: [
            [
              {
                b: "Uunivuoka:",
              },
              " proteiini + kestävät kasvikset + öljy + mausteet, paahdettuna yhdessä.",
            ],
            [
              {
                b: "Wokki:",
              },
              " kaikki rapea + proteiini + kastike, riisin tai nuudelien päällä.",
            ],
            [
              {
                b: "Keitto:",
              },
              " sipulipohja + mitkä tahansa nuutuneet kasvikset + liemi, soseutettuna tai ei.",
            ],
            [
              {
                b: "Pasta:",
              },
              " kastike tomaattipurkista tai kermasta + sitä sun tätä.",
            ],
            [
              {
                b: "Frittata tai munakas:",
              },
              " kananmunat + juusto + mitkä tahansa ylijääneet kasvikset tai yrtit.",
            ],
          ],
        },
        {
          k: "p",
          c: [
            "Valitse muoto, joka sopii aineksiisi ja käytettävissä olevaan aikaan, niin ”resepti” kirjoittaa itsensä lähes kokonaan.",
          ],
        },
        {
          k: "h2",
          c: "3. Anna sovelluksen hoitaa yhteensovitus",
        },
        {
          k: "p",
          c: [
            "Juuri tähän Copantry on rakennettu. Se tietää jo, mitä keittiössäsi on ja kuinka kauan kullakin on aikaa, joten se voi ehdottaa oikeita aterioita, jotka käyttävät ensin pian vanhenevat ainekset — mitoitettuna syöjien määrään. Katso ",
            {
              l: "/features/reduce-food-waste",
              t: "miten se vähentää ruokahävikkiä",
            },
            " ja ",
            {
              l: "/features/meal-planning",
              t: "miten ateriasuunnittelu toimii",
            },
            ".",
          ],
        },
        {
          k: "p",
          c: [
            "Siitä laittaminen, mitä sinulla on, on yksittäisistä arjen tavoista tehokkain tapa vähentää hävikkiä ja menoja — ja se on yleensä nopeampaa kuin kauppareissu. Isomman kuvan saat täältä: ",
            {
              l: "/blog/use-it-up-method",
              t: "loppuun käyttämisen menetelmä",
            },
            ".",
          ],
        },
      ],
    },
    no: {
      title: "Hva kan jeg lage av det som står i kjøleskapet akkurat nå?",
      description:
        "En enkel metode for å gjøre det som allerede står i kjøleskapet til ordentlig middag i kveld — uten en tur i butikken.",
      blocks: [
        {
          k: "lead",
          c: [
            "For å lage mat av det du allerede har, starter du i kjøleskapet i stedet for i en oppskrift: velg de to eller tre tingene som må brukes først, velg en form (en langpanne, en wok, en suppe, en pasta, en omelett) og bygg rundt dem med varer fra skapet. Du har nesten alltid et måltid allerede — du ser det bare ikke ennå.",
          ],
        },
        {
          k: "h2",
          c: "1. Se på det som snart blir dårlig, ikke på det som mangler",
        },
        {
          k: "p",
          c: [
            "Trikset er å snu spørsmålet. I stedet for «hva må jeg kjøpe for å lage denne oppskriften?» spør du «hva har jeg allerede som bør brukes først?». Slapp spinat, et par kyllinglår og en sitron er ingen rester — det er en langpanne med kylling, sitron og spinat.",
          ],
        },
        {
          k: "h2",
          c: "2. Velg en form, og fyll den ut",
        },
        {
          k: "p",
          c: [
            "De fleste hverdagsmiddager er én av en håndfull fleksible former:",
          ],
        },
        {
          k: "ul",
          c: [
            [
              {
                b: "Langpanne:",
              },
              " en proteinkilde + hardføre grønnsaker + olje + krydder, stekt sammen.",
            ],
            [
              {
                b: "Wok:",
              },
              " alt som er sprøtt + en proteinkilde + en saus, over ris eller nudler.",
            ],
            [
              {
                b: "Suppe:",
              },
              " en løkbase + hvilke grønnsaker som enn er slappe + kraft, most eller ikke.",
            ],
            [
              {
                b: "Pasta:",
              },
              " en saus bygget på en boks tomater eller litt fløte + litt av hvert.",
            ],
            [
              {
                b: "Frittata eller omelett:",
              },
              " egg + ost + eventuelle rester av grønnsaker eller urter.",
            ],
          ],
        },
        {
          k: "p",
          c: [
            "Velg den formen som passer råvarene dine og tiden du har, så skriver «oppskriften» stort sett seg selv.",
          ],
        },
        {
          k: "h2",
          c: "3. La appen gjøre matchingen",
        },
        {
          k: "p",
          c: [
            "Dette er nettopp det Copantry er bygget for. Den vet allerede hva du har på kjøkkenet og hvor lenge hver ting holder, så den kan foreslå ekte måltider som først bruker råvarene som snart går ut — tilpasset hvor mange du lager til. Se ",
            {
              l: "/features/reduce-food-waste",
              t: "hvordan den reduserer matsvinn",
            },
            " og ",
            {
              l: "/features/meal-planning",
              t: "hvordan måltidsplanleggingen virker",
            },
            ".",
          ],
        },
        {
          k: "p",
          c: [
            "Å lage mat av det du har er den enkeltvis mest effektive hverdagsvanen for å kaste mindre og bruke mindre — og det går som regel raskere enn å dra i butikken. For det store bildet, se ",
            {
              l: "/blog/use-it-up-method",
              t: "bruk-opp-metoden",
            },
            ".",
          ],
        },
      ],
    },
    pl: {
      title: "Co mogę ugotować z tego, co mam teraz w lodówce?",
      description:
        "Prosta metoda, jak zamienić zawartość lodówki w prawdziwą kolację już dziś — bez wyprawy na zakupy.",
      blocks: [
        {
          k: "lead",
          c: [
            "Żeby ugotować z tego, co już masz, zacznij od lodówki, a nie od przepisu: wybierz dwie albo trzy rzeczy, które trzeba zużyć najpierw, wybierz formę (danie z blachy, stir-fry, zupa, makaron, omlet) i zbuduj wokół nich z produktów z szafki. Prawie zawsze masz już gotowy posiłek — po prostu jeszcze go nie widzisz.",
          ],
        },
        {
          k: "h2",
          c: "1. Patrz na to, co zaraz się zepsuje, a nie na to, czego brakuje",
        },
        {
          k: "p",
          c: [
            "Sztuka polega na odwróceniu pytania. Zamiast „co muszę kupić, żeby zrobić ten przepis?”, zapytaj „co już mam i powinienem zużyć najpierw?”. Zwiędły szpinak, para udek z kurczaka i cytryna to nie resztki — to zapiekany kurczak z cytryną i szpinakiem.",
          ],
        },
        {
          k: "h2",
          c: "2. Wybierz formę i ją wypełnij",
        },
        {
          k: "p",
          c: [
            "Większość kolacji w tygodniu to jedna z kilku elastycznych form:",
          ],
        },
        {
          k: "ul",
          c: [
            [
              {
                b: "Danie z blachy:",
              },
              " białko + twarde warzywa + olej + przyprawy, upieczone razem.",
            ],
            [
              {
                b: "Stir-fry:",
              },
              " wszystko, co chrupiące + białko + sos, na ryżu albo makaronie.",
            ],
            [
              {
                b: "Zupa:",
              },
              " baza z cebuli + jakiekolwiek zwiotczałe warzywa + bulion, zmiksowane lub nie.",
            ],
            [
              {
                b: "Makaron:",
              },
              " sos z puszki pomidorów albo odrobiny śmietanki + różności.",
            ],
            [
              {
                b: "Frittata albo omlet:",
              },
              " jajka + ser + resztki warzyw lub ziół.",
            ],
          ],
        },
        {
          k: "p",
          c: [
            "Wybierz formę pasującą do twoich składników i czasu, którym dysponujesz, a „przepis” w większości napisze się sam.",
          ],
        },
        {
          k: "h2",
          c: "3. Niech aplikacja dobierze za ciebie",
        },
        {
          k: "p",
          c: [
            "Dokładnie po to powstało Copantry. Wie już, co masz w kuchni i ile czasu zostało każdej rzeczy, więc potrafi zaproponować prawdziwe posiłki, które najpierw zużywają kończące się składniki — przeliczone na liczbę jedzących. Zobacz ",
            {
              l: "/features/reduce-food-waste",
              t: "jak ogranicza marnowanie jedzenia",
            },
            " i ",
            {
              l: "/features/meal-planning",
              t: "jak działa planowanie posiłków",
            },
            ".",
          ],
        },
        {
          k: "p",
          c: [
            "Gotowanie z tego, co masz, to najskuteczniejszy codzienny nawyk, żeby marnować mniej i wydawać mniej — a zwykle jest szybsze niż wyprawa do sklepu. Szerszy obraz znajdziesz tutaj: ",
            {
              l: "/blog/use-it-up-method",
              t: "metoda zużywania zapasów",
            },
            ".",
          ],
        },
      ],
    },
  },

  "food-waste-statistics-uk": {
    en: {
      title:
        "How much food does the average UK household waste — and the 5 things we bin most",
      description:
        "What the data from WRAP actually says about household food waste in the UK, the foods we throw away most, and what it costs you.",
      blocks: [
        {
          k: "lead",
          c: [
            "According to WRAP, UK households throw away around 6.4 million tonnes of food a year, the large majority of which could have been eaten. For an average family with children that works out at roughly £1,000 of food binned annually. The good news: most of it is avoidable with a few simple habits.",
          ],
        },
        { k: "h2", c: "What the numbers say" },
        {
          k: "p",
          c: [
            "WRAP — the UK’s waste and resources body — is the most-cited source on this. Their household food waste research consistently finds that the bulk of what we throw away was once perfectly edible, and that it’s a major contributor to household carbon footprints as well as a hit to the weekly budget. (Always check the latest figures at ",
            { a: "https://wrap.org.uk", t: "wrap.org.uk" },
            " — they update periodically.)",
          ],
        },
        { k: "h2", c: "The foods we bin most" },
        {
          k: "p",
          c: [
            "WRAP’s data points repeatedly at the same culprits — fresh, fast-spoiling everyday items:",
          ],
        },
        {
          k: "ul",
          c: [
            [
              { b: "Bread" },
              " — bought in bulk, dries out and moulds before we finish it.",
            ],
            [
              { b: "Milk and dairy" },
              " — opened, forgotten, poured away near the date.",
            ],
            [
              { b: "Fresh vegetables and salad" },
              " — wilting bags of leaves are a classic.",
            ],
            [
              { b: "Fresh fruit" },
              " — bananas and berries that ripen faster than we eat them.",
            ],
            [
              { b: "Leftovers and home-cooked food" },
              " — cooked, chilled, never reheated.",
            ],
          ],
        },
        {
          k: "p",
          c: [
            "Want to know how long any of these actually keep? See our ",
            { l: "/learn", t: "guides to how long food lasts" },
            ".",
          ],
        },
        { k: "h2", c: "Why it happens — and how to stop it" },
        {
          k: "p",
          c: [
            "Almost all household food waste comes down to two things: buying more than we use, and losing track of what we already have. The fixes are simple:",
          ],
        },
        {
          k: "ul",
          c: [
            ["Keep an eye on what’s about to expire and cook that first."],
            [
              "Plan meals around your fridge instead of shopping for new recipes each time.",
            ],
            ["Only buy what you don’t already have."],
          ],
        },
        {
          k: "p",
          c: [
            "That’s the entire idea behind Copantry. It tracks how long everything in your kitchen has left, suggests meals to use it up, and builds a shopping list of only the gaps — see ",
            { l: "/features/reduce-food-waste", t: "reduce food waste" },
            " and ",
            { l: "/use-cases/budget-cooking", t: "budget cooking" },
            ".",
          ],
        },
        {
          k: "note",
          c: [
            "Figures attributed to WRAP and intended as a general guide; verify the current statistics at the source before relying on them.",
          ],
        },
      ],
    },
    fr: {
      title:
        "Combien de nourriture un foyer gaspille-t-il — et les 5 aliments les plus jetés",
      description:
        "Ce que disent vraiment les données de WRAP sur le gaspillage alimentaire des foyers, les aliments les plus jetés et ce que cela coûte.",
      blocks: [
        {
          k: "lead",
          c: [
            "Selon WRAP, les foyers britanniques jettent environ 6,4 millions de tonnes de nourriture par an, dont la grande majorité aurait pu être mangée — soit, pour une famille type avec enfants, près de 1 000 £ de nourriture jetée chaque année. La bonne nouvelle : l’essentiel est évitable avec quelques habitudes simples.",
          ],
        },
        { k: "h2", c: "Ce que disent les chiffres" },
        {
          k: "p",
          c: [
            "WRAP — l’organisme britannique des déchets et ressources — est la source la plus citée sur le sujet. Ses recherches montrent régulièrement que l’essentiel de ce que l’on jette était parfaitement comestible, et que c’est un gros contributeur à l’empreinte carbone des foyers en plus de peser sur le budget. (Vérifiez toujours les derniers chiffres sur ",
            { a: "https://wrap.org.uk", t: "wrap.org.uk" },
            " — ils sont mis à jour régulièrement.)",
          ],
        },
        { k: "h2", c: "Les aliments les plus jetés" },
        {
          k: "p",
          c: [
            "Les données de WRAP pointent toujours les mêmes coupables — des produits frais du quotidien qui s’abîment vite :",
          ],
        },
        {
          k: "ul",
          c: [
            [
              { b: "Le pain" },
              " — acheté en grande quantité, il se dessèche et moisit avant qu’on le finisse.",
            ],
            [
              { b: "Le lait et les produits laitiers" },
              " — ouverts, oubliés, jetés près de la date.",
            ],
            [
              { b: "Les légumes frais et la salade" },
              " — les sachets de feuilles flétries sont un classique.",
            ],
            [
              { b: "Les fruits frais" },
              " — bananes et fruits rouges mûrissent plus vite qu’on ne les mange.",
            ],
            [
              { b: "Les restes et plats maison" },
              " — cuisinés, réfrigérés, jamais réchauffés.",
            ],
          ],
        },
        {
          k: "p",
          c: [
            "Envie de savoir combien de temps tout cela se conserve ? Voir nos ",
            { l: "/learn", t: "guides sur la durée de conservation" },
            ".",
          ],
        },
        { k: "h2", c: "Pourquoi ça arrive — et comment l’éviter" },
        {
          k: "p",
          c: [
            "Presque tout le gaspillage des foyers tient à deux choses : acheter plus qu’on ne consomme, et perdre de vue ce que l’on a déjà. Les solutions sont simples :",
          ],
        },
        {
          k: "ul",
          c: [
            ["Surveillez ce qui va périmer et cuisinez-le en premier."],
            [
              "Planifiez autour de votre frigo au lieu de faire les courses pour de nouvelles recettes à chaque fois.",
            ],
            ["N’achetez que ce que vous n’avez pas déjà."],
          ],
        },
        {
          k: "p",
          c: [
            "C’est toute l’idée de Copantry. Il suit le temps qu’il reste à chaque aliment, suggère des plats pour les écouler et compose une liste de courses limitée aux manques — voir ",
            { l: "/features/reduce-food-waste", t: "réduire le gaspillage" },
            " et ",
            { l: "/use-cases/budget-cooking", t: "cuisine économique" },
            ".",
          ],
        },
        {
          k: "note",
          c: [
            "Chiffres attribués à WRAP et donnés à titre indicatif ; vérifiez les statistiques actuelles à la source avant de vous y fier.",
          ],
        },
      ],
    },
    it: {
      title:
        "Quanto cibo spreca una famiglia media — e le 5 cose che buttiamo di più",
      description:
        "Cosa dicono davvero i dati di WRAP sullo spreco alimentare domestico, gli alimenti che buttiamo di più e quanto costa.",
      blocks: [
        {
          k: "lead",
          c: [
            "Secondo WRAP, le famiglie britanniche buttano circa 6,4 milioni di tonnellate di cibo all’anno, in gran parte ancora commestibile — per una famiglia media con figli, circa 1.000 £ di cibo gettato ogni anno. La buona notizia: la maggior parte è evitabile con poche abitudini semplici.",
          ],
        },
        { k: "h2", c: "Cosa dicono i numeri" },
        {
          k: "p",
          c: [
            "WRAP — l’ente britannico per rifiuti e risorse — è la fonte più citata sull’argomento. Le sue ricerche mostrano costantemente che la maggior parte di ciò che buttiamo era perfettamente commestibile, e che incide molto sull’impronta di carbonio domestica oltre che sul budget. (Controlla sempre i dati più recenti su ",
            { a: "https://wrap.org.uk", t: "wrap.org.uk" },
            " — vengono aggiornati periodicamente.)",
          ],
        },
        { k: "h2", c: "Gli alimenti che buttiamo di più" },
        {
          k: "p",
          c: [
            "I dati di WRAP indicano sempre gli stessi colpevoli — prodotti freschi di tutti i giorni che si rovinano in fretta:",
          ],
        },
        {
          k: "ul",
          c: [
            [
              { b: "Il pane" },
              " — comprato in quantità, si secca e ammuffisce prima di finirlo.",
            ],
            [
              { b: "Latte e latticini" },
              " — aperti, dimenticati, buttati vicino alla data.",
            ],
            [
              { b: "Verdura fresca e insalata" },
              " — i sacchetti di foglie appassite sono un classico.",
            ],
            [
              { b: "Frutta fresca" },
              " — banane e frutti di bosco maturano più in fretta di quanto li mangiamo.",
            ],
            [
              { b: "Avanzi e piatti fatti in casa" },
              " — cotti, raffreddati, mai riscaldati.",
            ],
          ],
        },
        {
          k: "p",
          c: [
            "Vuoi sapere quanto durano davvero? Vedi le nostre ",
            { l: "/learn", t: "guide su quanto durano gli alimenti" },
            ".",
          ],
        },
        { k: "h2", c: "Perché succede — e come evitarlo" },
        {
          k: "p",
          c: [
            "Quasi tutto lo spreco domestico si riduce a due cose: comprare più di quanto si consuma e perdere di vista ciò che si ha già. I rimedi sono semplici:",
          ],
        },
        {
          k: "ul",
          c: [
            ["Tieni d’occhio cosa sta per scadere e cucinalo per primo."],
            [
              "Pianifica intorno al frigo invece di fare la spesa per nuove ricette ogni volta.",
            ],
            ["Compra solo ciò che non hai già."],
          ],
        },
        {
          k: "p",
          c: [
            "È tutta qui l’idea di Copantry. Tiene traccia di quanto resta a ogni alimento, suggerisce piatti per consumarlo e crea una lista della spesa solo con i mancanti — vedi ",
            { l: "/features/reduce-food-waste", t: "ridurre gli sprechi" },
            " e ",
            { l: "/use-cases/budget-cooking", t: "cucina economica" },
            ".",
          ],
        },
        {
          k: "note",
          c: [
            "Dati attribuiti a WRAP e forniti come indicazione generale; verifica le statistiche attuali alla fonte prima di farne affidamento.",
          ],
        },
      ],
    },
    es: {
      title:
        "¿Cuánta comida desperdicia un hogar medio — y las 5 cosas que más tiramos",
      description:
        "Lo que dicen de verdad los datos de WRAP sobre el desperdicio de comida en los hogares, los alimentos que más tiramos y lo que cuesta.",
      blocks: [
        {
          k: "lead",
          c: [
            "Según WRAP, los hogares británicos tiran unos 6,4 millones de toneladas de comida al año, la mayoría de la cual se podría haber comido — para una familia media con hijos, unas 1.000 £ de comida tirada cada año. La buena noticia: casi todo es evitable con unos pocos hábitos sencillos.",
          ],
        },
        { k: "h2", c: "Lo que dicen las cifras" },
        {
          k: "p",
          c: [
            "WRAP — el organismo británico de residuos y recursos — es la fuente más citada sobre esto. Sus estudios encuentran de forma constante que la mayor parte de lo que tiramos era perfectamente comestible, y que contribuye mucho a la huella de carbono del hogar además de golpear el presupuesto. (Comprueba siempre las últimas cifras en ",
            { a: "https://wrap.org.uk", t: "wrap.org.uk" },
            " — se actualizan periódicamente.)",
          ],
        },
        { k: "h2", c: "Los alimentos que más tiramos" },
        {
          k: "p",
          c: [
            "Los datos de WRAP señalan siempre a los mismos culpables — productos frescos del día a día que se estropean rápido:",
          ],
        },
        {
          k: "ul",
          c: [
            [
              { b: "El pan" },
              " — comprado en grandes cantidades, se reseca y enmohece antes de terminarlo.",
            ],
            [
              { b: "La leche y los lácteos" },
              " — abiertos, olvidados, tirados cerca de la fecha.",
            ],
            [
              { b: "Verduras frescas y ensalada" },
              " — las bolsas de hojas mustias son un clásico.",
            ],
            [
              { b: "Fruta fresca" },
              " — plátanos y bayas que maduran más rápido de lo que los comemos.",
            ],
            [
              { b: "Sobras y comida casera" },
              " — cocinadas, enfriadas, nunca recalentadas.",
            ],
          ],
        },
        {
          k: "p",
          c: [
            "¿Quieres saber cuánto duran de verdad? Mira nuestras ",
            { l: "/learn", t: "guías sobre cuánto duran los alimentos" },
            ".",
          ],
        },
        { k: "h2", c: "Por qué ocurre — y cómo evitarlo" },
        {
          k: "p",
          c: [
            "Casi todo el desperdicio del hogar se reduce a dos cosas: comprar más de lo que usamos y perder la pista de lo que ya tenemos. Las soluciones son sencillas:",
          ],
        },
        {
          k: "ul",
          c: [
            ["Vigila lo que está por caducar y cocínalo primero."],
            [
              "Planifica en torno a tu nevera en vez de comprar para nuevas recetas cada vez.",
            ],
            ["Compra solo lo que no tengas ya."],
          ],
        },
        {
          k: "p",
          c: [
            "Esa es toda la idea de Copantry. Controla cuánto le queda a cada alimento, sugiere comidas para gastarlo y arma una lista de la compra solo con lo que falta — mira ",
            { l: "/features/reduce-food-waste", t: "reducir el desperdicio" },
            " y ",
            { l: "/use-cases/budget-cooking", t: "cocina económica" },
            ".",
          ],
        },
        {
          k: "note",
          c: [
            "Cifras atribuidas a WRAP y ofrecidas como orientación general; verifica las estadísticas actuales en la fuente antes de confiar en ellas.",
          ],
        },
      ],
    },
    pt: {
      title:
        "Quanta comida desperdiça um agregado médio — e as 5 coisas que mais deitamos fora",
      description:
        "O que dizem mesmo os dados da WRAP sobre o desperdício alimentar nos agregados, os alimentos que mais deitamos fora e quanto custa.",
      blocks: [
        {
          k: "lead",
          c: [
            "Segundo a WRAP, os agregados britânicos deitam fora cerca de 6,4 milhões de toneladas de comida por ano, a maioria da qual podia ter sido comida — para uma família média com filhos, cerca de 1.000 £ de comida deitada fora por ano. A boa notícia: quase tudo é evitável com alguns hábitos simples.",
          ],
        },
        { k: "h2", c: "O que dizem os números" },
        {
          k: "p",
          c: [
            "A WRAP — o organismo britânico de resíduos e recursos — é a fonte mais citada sobre isto. A sua investigação mostra de forma consistente que a maior parte do que deitamos fora estava perfeitamente comestível, e que contribui muito para a pegada de carbono do agregado além de pesar no orçamento. (Verifique sempre os dados mais recentes em ",
            { a: "https://wrap.org.uk", t: "wrap.org.uk" },
            " — são atualizados periodicamente.)",
          ],
        },
        { k: "h2", c: "Os alimentos que mais deitamos fora" },
        {
          k: "p",
          c: [
            "Os dados da WRAP apontam sempre para os mesmos culpados — produtos frescos do dia a dia que se estragam depressa:",
          ],
        },
        {
          k: "ul",
          c: [
            [
              { b: "O pão" },
              " — comprado em quantidade, resseca e ganha bolor antes de o acabarmos.",
            ],
            [
              { b: "Leite e laticínios" },
              " — abertos, esquecidos, deitados fora perto da data.",
            ],
            [
              { b: "Legumes frescos e salada" },
              " — os sacos de folhas murchas são um clássico.",
            ],
            [
              { b: "Fruta fresca" },
              " — bananas e frutos vermelhos que amadurecem mais depressa do que os comemos.",
            ],
            [
              { b: "Sobras e comida caseira" },
              " — cozinhadas, arrefecidas, nunca reaquecidas.",
            ],
          ],
        },
        {
          k: "p",
          c: [
            "Quer saber quanto duram mesmo? Veja os nossos ",
            { l: "/learn", t: "guias sobre quanto duram os alimentos" },
            ".",
          ],
        },
        { k: "h2", c: "Porque acontece — e como evitar" },
        {
          k: "p",
          c: [
            "Quase todo o desperdício do agregado se resume a duas coisas: comprar mais do que usamos e perder a noção do que já temos. As soluções são simples:",
          ],
        },
        {
          k: "ul",
          c: [
            [
              "Esteja atento ao que está prestes a expirar e cozinhe isso primeiro.",
            ],
            [
              "Planeie em torno do frigorífico em vez de comprar para novas receitas de cada vez.",
            ],
            ["Compre só o que ainda não tem."],
          ],
        },
        {
          k: "p",
          c: [
            "É essa toda a ideia do Copantry. Acompanha quanto resta a cada alimento, sugere refeições para o gastar e monta uma lista de compras só com o que falta — veja ",
            { l: "/features/reduce-food-waste", t: "reduzir o desperdício" },
            " e ",
            { l: "/use-cases/budget-cooking", t: "cozinha económica" },
            ".",
          ],
        },
        {
          k: "note",
          c: [
            "Dados atribuídos à WRAP e fornecidos como orientação geral; verifique as estatísticas atuais na fonte antes de confiar nelas.",
          ],
        },
      ],
    },
    de: {
      title:
        "Wie viel Essen verschwendet ein Haushalt — und die 5 größten Abfälle",
      description:
        "Was die WRAP-Daten wirklich über Lebensmittelabfall in Haushalten sagen, welche Lebensmittel wir am meisten wegwerfen und was es kostet.",
      blocks: [
        {
          k: "lead",
          c: [
            "Laut WRAP werfen britische Haushalte rund 6,4 Millionen Tonnen Lebensmittel pro Jahr weg, der Großteil davon wäre essbar gewesen — für eine durchschnittliche Familie mit Kindern etwa 1.000 £ weggeworfenes Essen jährlich. Die gute Nachricht: Das meiste ist mit ein paar einfachen Gewohnheiten vermeidbar.",
          ],
        },
        { k: "h2", c: "Was die Zahlen sagen" },
        {
          k: "p",
          c: [
            "WRAP — die britische Behörde für Abfall und Ressourcen — ist die meistzitierte Quelle dazu. Ihre Forschung zeigt durchgängig, dass das meiste, was wir wegwerfen, einmal völlig essbar war und stark zum CO₂-Fußabdruck des Haushalts beiträgt, neben dem Schlag fürs Budget. (Prüfe die aktuellen Zahlen immer auf ",
            { a: "https://wrap.org.uk", t: "wrap.org.uk" },
            " — sie werden regelmäßig aktualisiert.)",
          ],
        },
        { k: "h2", c: "Die Lebensmittel, die wir am meisten wegwerfen" },
        {
          k: "p",
          c: [
            "Die Daten von WRAP zeigen immer wieder dieselben Übeltäter — frische, schnell verderbliche Alltagsprodukte:",
          ],
        },
        {
          k: "ul",
          c: [
            [
              { b: "Brot" },
              " — in Mengen gekauft, trocknet aus und schimmelt, bevor wir es aufessen.",
            ],
            [
              { b: "Milch und Milchprodukte" },
              " — geöffnet, vergessen, nahe am Datum weggeschüttet.",
            ],
            [
              { b: "Frisches Gemüse und Salat" },
              " — welke Tüten mit Blättern sind ein Klassiker.",
            ],
            [
              { b: "Frisches Obst" },
              " — Bananen und Beeren, die schneller reifen, als wir sie essen.",
            ],
            [
              { b: "Reste und Selbstgekochtes" },
              " — gekocht, gekühlt, nie aufgewärmt.",
            ],
          ],
        },
        {
          k: "p",
          c: [
            "Willst du wissen, wie lange das alles wirklich hält? Siehe unsere ",
            { l: "/learn", t: "Leitfäden zur Haltbarkeit" },
            ".",
          ],
        },
        { k: "h2", c: "Warum es passiert — und wie man es stoppt" },
        {
          k: "p",
          c: [
            "Fast aller Haushaltsabfall läuft auf zwei Dinge hinaus: mehr kaufen, als wir verbrauchen, und den Überblick über das Vorhandene verlieren. Die Lösungen sind einfach:",
          ],
        },
        {
          k: "ul",
          c: [
            ["Behalte im Blick, was bald abläuft, und koch das zuerst."],
            [
              "Plane rund um deinen Kühlschrank, statt jedes Mal für neue Rezepte einzukaufen.",
            ],
            ["Kauf nur, was du nicht schon hast."],
          ],
        },
        {
          k: "p",
          c: [
            "Genau das ist die Idee hinter Copantry. Es verfolgt, wie lange jedes Lebensmittel noch hält, schlägt Gerichte zum Aufbrauchen vor und baut eine Einkaufsliste nur aus den Lücken — siehe ",
            { l: "/features/reduce-food-waste", t: "Lebensmittel retten" },
            " und ",
            { l: "/use-cases/budget-cooking", t: "günstig kochen" },
            ".",
          ],
        },
        {
          k: "note",
          c: [
            "Zahlen WRAP zugeschrieben und als allgemeine Orientierung gedacht; prüfe die aktuellen Statistiken an der Quelle, bevor du dich darauf verlässt.",
          ],
        },
      ],
    },
    nl: {
      title:
        "Hoeveel eten gooit een huishouden weg — en de 5 dingen die het vaakst in de bak gaan",
      description:
        "Wat de cijfers van WRAP echt zeggen over voedselverspilling thuis, welk eten we het vaakst weggooien en wat het je kost.",
      blocks: [
        {
          k: "lead",
          c: [
            "Volgens WRAP gooien Britse huishoudens jaarlijks zo'n 6,4 miljoen ton voedsel weg, waarvan het overgrote deel gegeten had kunnen worden. Voor een gemiddeld gezin met kinderen komt dat neer op ongeveer £1.000 aan weggegooid eten per jaar. Het goede nieuws: het meeste ervan is te voorkomen met een paar simpele gewoontes.",
          ],
        },
        {
          k: "h2",
          c: "Wat de cijfers zeggen",
        },
        {
          k: "p",
          c: [
            "WRAP — het Britse orgaan voor afval en grondstoffen — is de meest geciteerde bron hierover. Hun onderzoek naar huishoudelijke voedselverspilling laat steeds weer zien dat het grootste deel van wat we weggooien ooit prima eetbaar was, en dat het zowel de CO₂-voetafdruk van een huishouden als het weekbudget flink raakt. (Controleer de actuele cijfers altijd op ",
            {
              a: "https://wrap.org.uk",
              t: "wrap.org.uk",
            },
            " — die worden periodiek bijgewerkt.)",
          ],
        },
        {
          k: "h2",
          c: "Het eten dat we het vaakst weggooien",
        },
        {
          k: "p",
          c: [
            "De data van WRAP wijzen keer op keer dezelfde schuldigen aan: verse, snel bederfelijke alledaagse producten:",
          ],
        },
        {
          k: "ul",
          c: [
            [
              {
                b: "Brood",
              },
              " — in grote hoeveelheden gekocht, droogt uit en schimmelt voordat we het op hebben.",
            ],
            [
              {
                b: "Melk en zuivel",
              },
              " — geopend, vergeten, tegen de datum weggegooid.",
            ],
            [
              {
                b: "Verse groente en sla",
              },
              " — verlepte zakken bladgroente zijn een klassieker.",
            ],
            [
              {
                b: "Vers fruit",
              },
              " — bananen en bessen die sneller rijpen dan we ze opeten.",
            ],
            [
              {
                b: "Restjes en zelfgemaakt eten",
              },
              " — gekookt, gekoeld, nooit opgewarmd.",
            ],
          ],
        },
        {
          k: "p",
          c: [
            "Wil je weten hoelang deze producten echt goed blijven? Zie onze ",
            {
              l: "/learn",
              t: "gidsen over hoelang voedsel goed blijft",
            },
            ".",
          ],
        },
        {
          k: "h2",
          c: "Waarom het gebeurt — en hoe je het stopt",
        },
        {
          k: "p",
          c: [
            "Bijna alle voedselverspilling thuis komt neer op twee dingen: meer kopen dan we gebruiken en het overzicht kwijtraken van wat we al hebben. De oplossingen zijn simpel:",
          ],
        },
        {
          k: "ul",
          c: [
            [
              "Houd in de gaten wat bijna over de datum is en kook dat als eerste.",
            ],
            [
              "Plan maaltijden rond je koelkast in plaats van steeds voor nieuwe recepten te winkelen.",
            ],
            ["Koop alleen wat je nog niet hebt."],
          ],
        },
        {
          k: "p",
          c: [
            "Dat is precies het idee achter Copantry. Het houdt bij hoelang alles in je keuken nog goed is, stelt maaltijden voor om het op te maken en maakt een boodschappenlijst van alleen de gaten — zie ",
            {
              l: "/features/reduce-food-waste",
              t: "minder verspilling",
            },
            " en ",
            {
              l: "/use-cases/budget-cooking",
              t: "koken met een budget",
            },
            ".",
          ],
        },
        {
          k: "note",
          c: [
            "Cijfers toegeschreven aan WRAP en bedoeld als algemene richtlijn; controleer de actuele statistieken bij de bron voordat je erop vertrouwt.",
          ],
        },
      ],
    },
    sv: {
      title:
        "Hur mycket mat slänger ett hushåll — och de 5 saker vi kastar mest",
      description:
        "Vad WRAP:s siffror faktiskt säger om matsvinnet i hemmet, vilken mat vi slänger mest och vad det kostar dig.",
      blocks: [
        {
          k: "lead",
          c: [
            "Enligt WRAP slänger brittiska hushåll omkring 6,4 miljoner ton mat om året, varav den stora merparten hade kunnat ätas. För en genomsnittlig familj med barn blir det ungefär 1 000 £ slängd mat årligen. Den goda nyheten: det mesta går att undvika med några enkla vanor.",
          ],
        },
        {
          k: "h2",
          c: "Vad siffrorna säger",
        },
        {
          k: "p",
          c: [
            "WRAP — Storbritanniens myndighet för avfall och resurser — är den mest citerade källan på området. Deras forskning om hushållens matsvinn visar genomgående att merparten av det vi slänger en gång var fullt ätbart, och att det både tynger hushållets klimatavtryck och veckobudgeten. (Kontrollera alltid de senaste siffrorna på ",
            {
              a: "https://wrap.org.uk",
              t: "wrap.org.uk",
            },
            " — de uppdateras med jämna mellanrum.)",
          ],
        },
        {
          k: "h2",
          c: "Maten vi slänger mest",
        },
        {
          k: "p",
          c: [
            "WRAP:s data pekar gång på gång ut samma bovar — färska vardagsvaror som snabbt blir dåliga:",
          ],
        },
        {
          k: "ul",
          c: [
            [
              {
                b: "Bröd",
              },
              " — köps i storpack, torkar ut och möglar innan vi hinner äta upp det.",
            ],
            [
              {
                b: "Mjölk och mejeri",
              },
              " — öppnat, bortglömt, hällt ut nära datumet.",
            ],
            [
              {
                b: "Färska grönsaker och sallad",
              },
              " — slokande påsar med blad är en klassiker.",
            ],
            [
              {
                b: "Färsk frukt",
              },
              " — bananer och bär som mognar snabbare än vi äter dem.",
            ],
            [
              {
                b: "Rester och hemlagad mat",
              },
              " — lagat, nedkylt, aldrig uppvärmt.",
            ],
          ],
        },
        {
          k: "p",
          c: [
            "Vill du veta hur länge något av det här faktiskt håller? Se våra ",
            {
              l: "/learn",
              t: "guider till hur länge maten håller",
            },
            ".",
          ],
        },
        {
          k: "h2",
          c: "Varför det händer — och hur du stoppar det",
        },
        {
          k: "p",
          c: [
            "Nästan allt matsvinn i hemmet handlar om två saker: att köpa mer än vi använder och att tappa koll på vad vi redan har. Lösningarna är enkla:",
          ],
        },
        {
          k: "ul",
          c: [
            ["Håll koll på vad som snart går ut, och laga det först."],
            [
              "Planera måltider utifrån kylen i stället för att handla efter nya recept varje gång.",
            ],
            ["Köp bara det du inte redan har."],
          ],
        },
        {
          k: "p",
          c: [
            "Det är hela idén bakom Copantry. Den håller koll på hur länge allt i köket har kvar, föreslår måltider för att använda upp det och bygger en inköpslista med bara luckorna — se ",
            {
              l: "/features/reduce-food-waste",
              t: "minska svinnet",
            },
            " och ",
            {
              l: "/use-cases/budget-cooking",
              t: "laga mat på budget",
            },
            ".",
          ],
        },
        {
          k: "note",
          c: [
            "Siffrorna tillskrivs WRAP och är avsedda som en allmän vägledning; kontrollera aktuell statistik hos källan innan du förlitar dig på den.",
          ],
        },
      ],
    },
    da: {
      title:
        "Hvor meget mad smider en husstand ud — og de 5 ting, vi kasserer mest",
      description:
        "Hvad WRAP's tal faktisk siger om madspild i hjemmet, hvilken mad vi oftest smider ud, og hvad det koster dig.",
      blocks: [
        {
          k: "lead",
          c: [
            "Ifølge WRAP smider britiske husstande omkring 6,4 millioner tons mad ud om året, hvoraf langt størstedelen kunne have været spist. For en gennemsnitlig familie med børn svarer det til cirka 1.000 £ kasseret mad årligt. Den gode nyhed: det meste kan undgås med nogle få enkle vaner.",
          ],
        },
        {
          k: "h2",
          c: "Hvad tallene siger",
        },
        {
          k: "p",
          c: [
            "WRAP — Storbritanniens myndighed for affald og ressourcer — er den mest citerede kilde på området. Deres forskning i husstandenes madspild viser konsekvent, at hovedparten af det, vi smider ud, engang var fuldt spiseligt, og at det både belaster husstandens klimaaftryk og ugebudgettet. (Tjek altid de nyeste tal på ",
            {
              a: "https://wrap.org.uk",
              t: "wrap.org.uk",
            },
            " — de opdateres jævnligt.)",
          ],
        },
        {
          k: "h2",
          c: "Den mad, vi oftest smider ud",
        },
        {
          k: "p",
          c: [
            "WRAP's data peger igen og igen på de samme syndere — friske hverdagsvarer, der hurtigt bliver dårlige:",
          ],
        },
        {
          k: "ul",
          c: [
            [
              {
                b: "Brød",
              },
              " — købt i store portioner, tørrer ud og mugner, før vi når at spise det.",
            ],
            [
              {
                b: "Mælk og mejeri",
              },
              " — åbnet, glemt, hældt ud tæt på datoen.",
            ],
            [
              {
                b: "Friske grøntsager og salat",
              },
              " — slaskede poser med blade er en klassiker.",
            ],
            [
              {
                b: "Frisk frugt",
              },
              " — bananer og bær, der modner hurtigere, end vi spiser dem.",
            ],
            [
              {
                b: "Rester og hjemmelavet mad",
              },
              " — tilberedt, afkølet, aldrig varmet op.",
            ],
          ],
        },
        {
          k: "p",
          c: [
            "Vil du vide, hvor længe noget af det her faktisk holder? Se vores ",
            {
              l: "/learn",
              t: "guides til, hvor længe maden holder",
            },
            ".",
          ],
        },
        {
          k: "h2",
          c: "Hvorfor det sker — og hvordan du stopper det",
        },
        {
          k: "p",
          c: [
            "Næsten alt madspild i hjemmet handler om to ting: at købe mere, end vi bruger, og at miste overblikket over, hvad vi allerede har. Løsningerne er enkle:",
          ],
        },
        {
          k: "ul",
          c: [
            ["Hold øje med det, der snart udløber, og lav det først."],
            [
              "Planlæg måltider ud fra køleskabet i stedet for at handle efter nye opskrifter hver gang.",
            ],
            ["Køb kun det, du ikke allerede har."],
          ],
        },
        {
          k: "p",
          c: [
            "Det er hele idéen bag Copantry. Den holder styr på, hvor længe alt i dit køkken har tilbage, foreslår måltider til at bruge det op og bygger en indkøbsliste med kun hullerne — se ",
            {
              l: "/features/reduce-food-waste",
              t: "mindre madspild",
            },
            " og ",
            {
              l: "/use-cases/budget-cooking",
              t: "madlavning på budget",
            },
            ".",
          ],
        },
        {
          k: "note",
          c: [
            "Tallene tilskrives WRAP og er ment som en generel vejledning; tjek den aktuelle statistik ved kilden, før du forlader dig på den.",
          ],
        },
      ],
    },
    fi: {
      title:
        "Kuinka paljon ruokaa talous heittää pois — ja 5 asiaa, joita roskaamme eniten",
      description:
        "Mitä WRAPin luvut oikeasti kertovat kotitalouksien ruokahävikistä, mitä ruokaa heitämme eniten pois ja mitä se maksaa sinulle.",
      blocks: [
        {
          k: "lead",
          c: [
            "WRAPin mukaan brittiläiset kotitaloudet heittävät pois noin 6,4 miljoonaa tonnia ruokaa vuodessa, ja suurin osa siitä olisi ollut syötävissä. Keskivertoperheelle, jossa on lapsia, se tarkoittaa noin 1 000 punnan edestä roskiin heitettyä ruokaa vuosittain. Hyvä uutinen: suurin osa on vältettävissä muutamalla yksinkertaisella tavalla.",
          ],
        },
        {
          k: "h2",
          c: "Mitä luvut kertovat",
        },
        {
          k: "p",
          c: [
            "WRAP — Britannian jäte- ja resurssiviranomainen — on tämän aiheen siteeratuin lähde. Sen kotitalouksien ruokahävikkiä koskeva tutkimus osoittaa johdonmukaisesti, että valtaosa poisheitetystä oli aikanaan täysin syötävää, ja että se rasittaa sekä kotitalouden hiilijalanjälkeä että viikkobudjettia. (Tarkista tuoreimmat luvut aina osoitteesta ",
            {
              a: "https://wrap.org.uk",
              t: "wrap.org.uk",
            },
            " — niitä päivitetään ajoittain.)",
          ],
        },
        {
          k: "h2",
          c: "Ruoat, joita heitämme eniten pois",
        },
        {
          k: "p",
          c: [
            "WRAPin data osoittaa yhä uudelleen samoihin syyllisiin — tuoreisiin, nopeasti pilaantuviin arkituotteisiin:",
          ],
        },
        {
          k: "ul",
          c: [
            [
              {
                b: "Leipä",
              },
              " — ostetaan isoissa erissä, kuivuu ja homehtuu ennen kuin ehdimme syödä sen.",
            ],
            [
              {
                b: "Maito ja maitotuotteet",
              },
              " — avattu, unohdettu, kaadettu pois päiväyksen lähellä.",
            ],
            [
              {
                b: "Tuoreet vihannekset ja salaatti",
              },
              " — nuutuneet lehtipussit ovat klassikko.",
            ],
            [
              {
                b: "Tuoreet hedelmät",
              },
              " — banaanit ja marjat kypsyvät nopeammin kuin ehdimme syödä ne.",
            ],
            [
              {
                b: "Tähteet ja kotiruoka",
              },
              " — kypsennetty, jäähdytetty, ei koskaan lämmitetty.",
            ],
          ],
        },
        {
          k: "p",
          c: [
            "Haluatko tietää, kuinka kauan nämä oikeasti säilyvät? Katso ",
            {
              l: "/learn",
              t: "oppaamme ruoan säilyvyydestä",
            },
            ".",
          ],
        },
        {
          k: "h2",
          c: "Miksi näin käy — ja miten sen lopettaa",
        },
        {
          k: "p",
          c: [
            "Lähes kaikki kotitalouden ruokahävikki tiivistyy kahteen asiaan: ostamme enemmän kuin käytämme ja hukkaamme käsityksen siitä, mitä meillä jo on. Ratkaisut ovat yksinkertaisia:",
          ],
        },
        {
          k: "ul",
          c: [
            ["Pidä silmällä, mikä on vanhenemassa, ja laita se ensin."],
            [
              "Suunnittele ateriat jääkaapin ehdoilla sen sijaan että tekisit ostoksia joka kerta uusien reseptien mukaan.",
            ],
            ["Osta vain se, mitä sinulla ei jo ole."],
          ],
        },
        {
          k: "p",
          c: [
            "Juuri tähän Copantry perustuu. Se seuraa, kuinka kauan kaikella keittiössäsi on aikaa jäljellä, ehdottaa aterioita niiden käyttämiseksi ja kokoaa ostoslistan vain aukoista — katso ",
            {
              l: "/features/reduce-food-waste",
              t: "vähemmän hävikkiä",
            },
            " ja ",
            {
              l: "/use-cases/budget-cooking",
              t: "edullinen ruoanlaitto",
            },
            ".",
          ],
        },
        {
          k: "note",
          c: [
            "Luvut on esitetty WRAPin nimissä ja tarkoitettu yleisohjeeksi; tarkista ajantasaiset tilastot lähteestä ennen kuin nojaat niihin.",
          ],
        },
      ],
    },
    no: {
      title:
        "Hvor mye mat kaster en husholdning — og de 5 tingene vi kaster mest",
      description:
        "Hva tallene fra WRAP faktisk sier om matsvinn i hjemmet, hvilken mat vi kaster mest, og hva det koster deg.",
      blocks: [
        {
          k: "lead",
          c: [
            "Ifølge WRAP kaster britiske husholdninger rundt 6,4 millioner tonn mat i året, og det aller meste av det kunne vært spist. For en gjennomsnittlig familie med barn tilsvarer det omtrent 1 000 £ kastet mat årlig. Den gode nyheten: det meste kan unngås med noen få enkle vaner.",
          ],
        },
        {
          k: "h2",
          c: "Hva tallene sier",
        },
        {
          k: "p",
          c: [
            "WRAP — Storbritannias myndighet for avfall og ressurser — er den mest siterte kilden på området. Forskningen deres på husholdningenes matsvinn viser gjennomgående at det meste av det vi kaster en gang var fullt spiselig, og at det både tynger husholdningens klimaavtrykk og ukebudsjettet. (Sjekk alltid de nyeste tallene på ",
            {
              a: "https://wrap.org.uk",
              t: "wrap.org.uk",
            },
            " — de oppdateres jevnlig.)",
          ],
        },
        {
          k: "h2",
          c: "Maten vi kaster mest",
        },
        {
          k: "p",
          c: [
            "WRAPs data peker gang på gang på de samme synderne — ferske hverdagsvarer som raskt blir dårlige:",
          ],
        },
        {
          k: "ul",
          c: [
            [
              {
                b: "Brød",
              },
              " — kjøpt i store porsjoner, tørker ut og mugner før vi rekker å spise det.",
            ],
            [
              {
                b: "Melk og meieri",
              },
              " — åpnet, glemt, helt ut nær datoen.",
            ],
            [
              {
                b: "Ferske grønnsaker og salat",
              },
              " — slappe poser med blader er en klassiker.",
            ],
            [
              {
                b: "Fersk frukt",
              },
              " — bananer og bær som modnes raskere enn vi spiser dem.",
            ],
            [
              {
                b: "Rester og hjemmelaget mat",
              },
              " — laget, avkjølt, aldri varmet opp.",
            ],
          ],
        },
        {
          k: "p",
          c: [
            "Vil du vite hvor lenge noe av dette faktisk holder? Se våre ",
            {
              l: "/learn",
              t: "guider til hvor lenge maten holder",
            },
            ".",
          ],
        },
        {
          k: "h2",
          c: "Hvorfor det skjer — og hvordan du stopper det",
        },
        {
          k: "p",
          c: [
            "Nesten alt matsvinn i hjemmet koker ned til to ting: vi kjøper mer enn vi bruker, og vi mister oversikten over hva vi allerede har. Løsningene er enkle:",
          ],
        },
        {
          k: "ul",
          c: [
            ["Følg med på hva som snart går ut, og lag det først."],
            [
              "Planlegg måltider ut fra kjøleskapet i stedet for å handle etter nye oppskrifter hver gang.",
            ],
            ["Kjøp bare det du ikke allerede har."],
          ],
        },
        {
          k: "p",
          c: [
            "Det er hele idéen bak Copantry. Den holder oversikt over hvor lenge alt på kjøkkenet ditt har igjen, foreslår måltider for å bruke det opp og bygger en handleliste med bare hullene — se ",
            {
              l: "/features/reduce-food-waste",
              t: "mindre matsvinn",
            },
            " og ",
            {
              l: "/use-cases/budget-cooking",
              t: "lage mat på budsjett",
            },
            ".",
          ],
        },
        {
          k: "note",
          c: [
            "Tallene tilskrives WRAP og er ment som en generell veiledning; sjekk den gjeldende statistikken hos kilden før du stoler på den.",
          ],
        },
      ],
    },
    pl: {
      title:
        "Ile jedzenia wyrzuca gospodarstwo domowe — i 5 rzeczy, które lądują w koszu najczęściej",
      description:
        "Co dane WRAP naprawdę mówią o marnowaniu żywności w domu, jakie jedzenie wyrzucamy najczęściej i ile cię to kosztuje.",
      blocks: [
        {
          k: "lead",
          c: [
            "Według WRAP brytyjskie gospodarstwa domowe wyrzucają rocznie około 6,4 miliona ton jedzenia, z czego zdecydowana większość nadawała się do zjedzenia. Dla przeciętnej rodziny z dziećmi to mniej więcej 1000 £ wyrzuconego jedzenia rocznie. Dobra wiadomość: większości da się uniknąć kilkoma prostymi nawykami.",
          ],
        },
        {
          k: "h2",
          c: "Co mówią liczby",
        },
        {
          k: "p",
          c: [
            "WRAP — brytyjska instytucja zajmująca się odpadami i zasobami — jest najczęściej cytowanym źródłem w tej sprawie. Ich badania nad marnowaniem żywności w domach konsekwentnie pokazują, że większość tego, co wyrzucamy, była kiedyś w pełni jadalna i że mocno obciąża zarówno ślad węglowy gospodarstwa, jak i tygodniowy budżet. (Aktualne liczby zawsze sprawdzaj na ",
            {
              a: "https://wrap.org.uk",
              t: "wrap.org.uk",
            },
            " — są okresowo aktualizowane.)",
          ],
        },
        {
          k: "h2",
          c: "Jedzenie, które wyrzucamy najczęściej",
        },
        {
          k: "p",
          c: [
            "Dane WRAP raz po raz wskazują tych samych winowajców — świeże, szybko psujące się produkty codziennego użytku:",
          ],
        },
        {
          k: "ul",
          c: [
            [
              {
                b: "Chleb",
              },
              " — kupowany na zapas, wysycha i pleśnieje, zanim zdążymy go zjeść.",
            ],
            [
              {
                b: "Mleko i nabiał",
              },
              " — otwarte, zapomniane, wylane tuż przy terminie.",
            ],
            [
              {
                b: "Świeże warzywa i sałata",
              },
              " — zwiędłe torebki liści to klasyka.",
            ],
            [
              {
                b: "Świeże owoce",
              },
              " — banany i jagody dojrzewające szybciej, niż je zjadamy.",
            ],
            [
              {
                b: "Resztki i domowe jedzenie",
              },
              " — ugotowane, schłodzone, nigdy nieodgrzane.",
            ],
          ],
        },
        {
          k: "p",
          c: [
            "Chcesz wiedzieć, jak długo naprawdę trzyma się każdy z nich? Zajrzyj do naszych ",
            {
              l: "/learn",
              t: "poradników o trwałości jedzenia",
            },
            ".",
          ],
        },
        {
          k: "h2",
          c: "Dlaczego tak się dzieje — i jak to przerwać",
        },
        {
          k: "p",
          c: [
            "Niemal całe domowe marnowanie żywności sprowadza się do dwóch rzeczy: kupujemy więcej, niż zużywamy, i tracimy rozeznanie w tym, co już mamy. Rozwiązania są proste:",
          ],
        },
        {
          k: "ul",
          c: [
            [
              "Pilnuj tego, czemu kończy się termin, i gotuj to w pierwszej kolejności.",
            ],
            [
              "Planuj posiłki wokół lodówki, zamiast za każdym razem kupować pod nowe przepisy.",
            ],
            ["Kupuj tylko to, czego jeszcze nie masz."],
          ],
        },
        {
          k: "p",
          c: [
            "Na tym właśnie opiera się całe Copantry. Pilnuje, ile czasu zostało wszystkiemu w twojej kuchni, proponuje posiłki, które to zużyją, i układa listę zakupów wyłącznie z braków — zobacz ",
            {
              l: "/features/reduce-food-waste",
              t: "mniej marnowania",
            },
            " i ",
            {
              l: "/use-cases/budget-cooking",
              t: "gotowanie z budżetem",
            },
            ".",
          ],
        },
        {
          k: "note",
          c: [
            "Dane przypisane WRAP i przeznaczone jako ogólna wskazówka; przed powołaniem się na nie sprawdź aktualne statystyki u źródła.",
          ],
        },
      ],
    },
  },

  "use-it-up-method": {
    en: {
      title:
        "The use-it-up method: plan meals around your fridge, not a recipe book",
      description:
        "Most meal planning starts with a recipe and sends you shopping. Flip it: start with what you already have. Here is the method.",
      blocks: [
        {
          k: "lead",
          c: [
            "The use-it-up method is meal planning in reverse: instead of choosing recipes and shopping for them, you start with what’s already in your kitchen and what’s about to expire, then plan meals around that — only buying what you’re genuinely missing. It wastes less, costs less, and takes less effort than a traditional recipe-first plan.",
          ],
        },
        { k: "h2", c: "Why recipe-first planning quietly wastes food" },
        {
          k: "p",
          c: [
            "The usual approach — browse recipes, write a shopping list, buy everything — ignores what you already own. So you buy a second jar of cumin, the half-bag of spinach in the drawer goes off, and last night’s leftovers get pushed to the back of the fridge. The plan looked tidy; the bin tells a different story.",
          ],
        },
        { k: "h2", c: "The method, in four steps" },
        {
          k: "ol",
          c: [
            [
              { b: "Take stock." },
              " Note what you have and, crucially, what’s about to expire.",
            ],
            [
              { b: "Cook the expiring stuff first." },
              " Build this week’s meals around those items.",
            ],
            [
              { b: "Fill the gaps." },
              " Add a few flexible meals, then list only the ingredients you don’t already have.",
            ],
            [
              { b: "Keep it current." },
              " As you cook, update what’s left so next week starts from reality.",
            ],
          ],
        },
        { k: "h2", c: "Making it effortless" },
        {
          k: "p",
          c: [
            "The method works on paper, but it’s tedious by hand — which is why most people give up. The whole point of Copantry is to automate it: it keeps your pantry up to date, surfaces what’s expiring, suggests meals around it, and turns the gaps into a shopping list. See ",
            { l: "/how-it-works", t: "how it works" },
            ", or why this beats a ",
            {
              l: "/why-copantry",
              t: "calendar-first planner or a recipe box",
            },
            ".",
          ],
        },
        {
          k: "p",
          c: [
            "Start small: this week, before you shop, open the fridge and plan one dinner around the thing most likely to be binned. That single habit is the use-it-up method in miniature — and it adds up fast. Related: ",
            {
              l: "/blog/what-can-i-cook-with-what-i-have",
              t: "what can I cook with what I have?",
            },
          ],
        },
      ],
    },
    fr: {
      title:
        "La méthode anti-gaspi : planifier autour de son frigo, pas d’un livre de recettes",
      description:
        "La plupart des plannings partent d’une recette et vous envoient faire les courses. Inversez : partez de ce que vous avez déjà. Voici la méthode.",
      blocks: [
        {
          k: "lead",
          c: [
            "La méthode anti-gaspi, c’est la planification à l’envers : au lieu de choisir des recettes et de faire les courses pour, vous partez de ce qui est déjà dans votre cuisine et de ce qui va périmer, puis vous planifiez autour — en n’achetant que ce qui manque vraiment. On gaspille moins, on dépense moins, et cela demande moins d’efforts qu’un planning classique parti d’une recette.",
          ],
        },
        {
          k: "h2",
          c: "Pourquoi partir des recettes gaspille en silence",
        },
        {
          k: "p",
          c: [
            "L’approche habituelle — parcourir des recettes, faire une liste, tout acheter — ignore ce que l’on possède déjà. Alors on achète un deuxième pot de cumin, le demi-sachet d’épinards se gâte au fond du tiroir, et les restes d’hier filent au fond du frigo. Le planning semblait nickel ; la poubelle raconte autre chose.",
          ],
        },
        { k: "h2", c: "La méthode, en quatre étapes" },
        {
          k: "ol",
          c: [
            [
              { b: "Faites l’inventaire." },
              " Notez ce que vous avez et, surtout, ce qui va périmer.",
            ],
            [
              { b: "Cuisinez d’abord ce qui périme." },
              " Construisez les repas de la semaine autour de ces articles.",
            ],
            [
              { b: "Comblez les manques." },
              " Ajoutez quelques repas souples, puis ne listez que les ingrédients que vous n’avez pas.",
            ],
            [
              { b: "Gardez à jour." },
              " À mesure que vous cuisinez, actualisez ce qu’il reste pour que la semaine suivante parte du réel.",
            ],
          ],
        },
        { k: "h2", c: "Le rendre sans effort" },
        {
          k: "p",
          c: [
            "La méthode marche sur le papier, mais elle est fastidieuse à la main — d’où l’abandon de la plupart des gens. Tout l’intérêt de Copantry est de l’automatiser : il garde votre garde-manger à jour, fait remonter ce qui périme, suggère des plats autour, et transforme les manques en liste de courses. Voir ",
            { l: "/how-it-works", t: "comment ça marche" },
            ", ou pourquoi cela vaut mieux qu’un ",
            {
              l: "/why-copantry",
              t: "planning par calendrier ou un carnet de recettes",
            },
            ".",
          ],
        },
        {
          k: "p",
          c: [
            "Commencez petit : cette semaine, avant de faire les courses, ouvrez le frigo et planifiez un dîner autour de ce qui risque le plus de finir à la poubelle. Cette seule habitude, c’est la méthode anti-gaspi en miniature — et ça monte vite. À lire aussi : ",
            {
              l: "/blog/what-can-i-cook-with-what-i-have",
              t: "que cuisiner avec ce que j’ai ?",
            },
          ],
        },
      ],
    },
    it: {
      title:
        "Il metodo svuota-frigo: pianifica intorno al frigo, non a un ricettario",
      description:
        "La maggior parte dei piani parte da una ricetta e ti manda a fare la spesa. Ribaltalo: parti da ciò che hai già. Ecco il metodo.",
      blocks: [
        {
          k: "lead",
          c: [
            "Il metodo svuota-frigo è la pianificazione al contrario: invece di scegliere ricette e fare la spesa per esse, parti da ciò che è già in cucina e da ciò che sta per scadere, poi pianifichi intorno a questo — comprando solo ciò che manca davvero. Si spreca meno, si spende meno e serve meno fatica di un piano classico che parte dalla ricetta.",
          ],
        },
        { k: "h2", c: "Perché partire dalle ricette spreca in silenzio" },
        {
          k: "p",
          c: [
            "L’approccio solito — sfogliare ricette, scrivere una lista, comprare tutto — ignora ciò che già possiedi. Così compri un secondo barattolo di cumino, il mezzo sacchetto di spinaci nel cassetto va a male e gli avanzi di ieri finiscono in fondo al frigo. Il piano sembrava ordinato; la pattumiera racconta un’altra storia.",
          ],
        },
        { k: "h2", c: "Il metodo, in quattro passi" },
        {
          k: "ol",
          c: [
            [
              { b: "Fai il punto." },
              " Annota cosa hai e, soprattutto, cosa sta per scadere.",
            ],
            [
              { b: "Cucina prima ciò che scade." },
              " Costruisci i pasti della settimana intorno a quegli alimenti.",
            ],
            [
              { b: "Colma i vuoti." },
              " Aggiungi qualche pasto flessibile, poi elenca solo gli ingredienti che non hai già.",
            ],
            [
              { b: "Tienilo aggiornato." },
              " Man mano che cucini, aggiorna ciò che resta così la settimana dopo parte dalla realtà.",
            ],
          ],
        },
        { k: "h2", c: "Renderlo senza fatica" },
        {
          k: "p",
          c: [
            "Il metodo funziona sulla carta, ma a mano è noioso — per questo la maggior parte molla. Lo scopo di Copantry è automatizzarlo: tiene aggiornata la dispensa, fa emergere ciò che scade, suggerisce piatti intorno e trasforma i vuoti in una lista della spesa. Vedi ",
            { l: "/how-it-works", t: "come funziona" },
            ", o perché batte un ",
            {
              l: "/why-copantry",
              t: "planner a calendario o un ricettario",
            },
            ".",
          ],
        },
        {
          k: "p",
          c: [
            "Inizia in piccolo: questa settimana, prima della spesa, apri il frigo e pianifica una cena intorno alla cosa che rischia di più di finire nella spazzatura. Quella sola abitudine è il metodo svuota-frigo in miniatura — e si somma in fretta. Correlato: ",
            {
              l: "/blog/what-can-i-cook-with-what-i-have",
              t: "cosa posso cucinare con ciò che ho?",
            },
          ],
        },
      ],
    },
    es: {
      title:
        "El método de aprovechamiento: planifica con tu nevera, no con un recetario",
      description:
        "La mayoría de los planes parten de una receta y te mandan a comprar. Dale la vuelta: parte de lo que ya tienes. Este es el método.",
      blocks: [
        {
          k: "lead",
          c: [
            "El método de aprovechamiento es la planificación al revés: en vez de elegir recetas y comprar para ellas, parte de lo que ya hay en tu cocina y de lo que está por caducar, y luego planificas en torno a eso — comprando solo lo que de verdad falta. Se desperdicia menos, cuesta menos y exige menos esfuerzo que un plan clásico que parte de la receta.",
          ],
        },
        { k: "h2", c: "Por qué partir de las recetas desperdicia en silencio" },
        {
          k: "p",
          c: [
            "El enfoque habitual — mirar recetas, escribir una lista, comprarlo todo — ignora lo que ya tienes. Así compras un segundo bote de comino, la media bolsa de espinacas se estropea en el cajón y las sobras de ayer van al fondo de la nevera. El plan parecía impecable; la basura cuenta otra cosa.",
          ],
        },
        { k: "h2", c: "El método, en cuatro pasos" },
        {
          k: "ol",
          c: [
            [
              { b: "Haz inventario." },
              " Anota lo que tienes y, sobre todo, lo que está por caducar.",
            ],
            [
              { b: "Cocina primero lo que caduca." },
              " Construye las comidas de la semana en torno a esos artículos.",
            ],
            [
              { b: "Rellena los huecos." },
              " Añade unas comidas flexibles y luego lista solo los ingredientes que no tengas ya.",
            ],
            [
              { b: "Mantenlo al día." },
              " A medida que cocinas, actualiza lo que queda para que la semana siguiente parta de la realidad.",
            ],
          ],
        },
        { k: "h2", c: "Hacerlo sin esfuerzo" },
        {
          k: "p",
          c: [
            "El método funciona sobre el papel, pero a mano es tedioso — por eso la mayoría lo deja. Todo el sentido de Copantry es automatizarlo: mantiene tu despensa al día, saca a la luz lo que caduca, sugiere comidas en torno a ello y convierte los huecos en una lista de la compra. Mira ",
            { l: "/how-it-works", t: "cómo funciona" },
            ", o por qué supera a un ",
            {
              l: "/why-copantry",
              t: "planificador por calendario o un recetario",
            },
            ".",
          ],
        },
        {
          k: "p",
          c: [
            "Empieza poco a poco: esta semana, antes de comprar, abre la nevera y planifica una cena en torno a lo que más probablemente acabe en la basura. Ese solo hábito es el método de aprovechamiento en miniatura — y suma rápido. Relacionado: ",
            {
              l: "/blog/what-can-i-cook-with-what-i-have",
              t: "¿qué puedo cocinar con lo que tengo?",
            },
          ],
        },
      ],
    },
    pt: {
      title:
        "O método de aproveitamento: planeie com o frigorífico, não com um livro de receitas",
      description:
        "A maioria dos planos parte de uma receita e manda-o às compras. Inverta: parta do que já tem. Eis o método.",
      blocks: [
        {
          k: "lead",
          c: [
            "O método de aproveitamento é o planeamento ao contrário: em vez de escolher receitas e comprar para elas, parte do que já está na cozinha e do que está prestes a expirar, e depois planeia em torno disso — comprando só o que falta mesmo. Desperdiça-se menos, custa menos e exige menos esforço do que um plano clássico que parte da receita.",
          ],
        },
        { k: "h2", c: "Porque partir das receitas desperdiça em silêncio" },
        {
          k: "p",
          c: [
            "A abordagem habitual — ver receitas, escrever uma lista, comprar tudo — ignora o que já tem. Assim compra um segundo frasco de cominhos, o meio saco de espinafres estraga-se na gaveta e as sobras de ontem vão para o fundo do frigorífico. O plano parecia impecável; o lixo conta outra história.",
          ],
        },
        { k: "h2", c: "O método, em quatro passos" },
        {
          k: "ol",
          c: [
            [
              { b: "Faça o balanço." },
              " Anote o que tem e, sobretudo, o que está prestes a expirar.",
            ],
            [
              { b: "Cozinhe primeiro o que expira." },
              " Construa as refeições da semana em torno desses itens.",
            ],
            [
              { b: "Preencha as falhas." },
              " Acrescente algumas refeições flexíveis e depois liste só os ingredientes que não tem.",
            ],
            [
              { b: "Mantenha atualizado." },
              " À medida que cozinha, atualize o que resta para a semana seguinte partir da realidade.",
            ],
          ],
        },
        { k: "h2", c: "Torná-lo sem esforço" },
        {
          k: "p",
          c: [
            "O método resulta no papel, mas à mão é maçador — por isso a maioria desiste. Todo o sentido do Copantry é automatizá-lo: mantém a despensa atualizada, faz sobressair o que expira, sugere refeições em torno disso e transforma as falhas numa lista de compras. Veja ",
            { l: "/how-it-works", t: "como funciona" },
            ", ou porque supera um ",
            {
              l: "/why-copantry",
              t: "planeador por calendário ou um caderno de receitas",
            },
            ".",
          ],
        },
        {
          k: "p",
          c: [
            "Comece em pequeno: esta semana, antes de comprar, abra o frigorífico e planeie um jantar em torno do que tem mais probabilidade de ir para o lixo. Esse único hábito é o método de aproveitamento em miniatura — e soma depressa. Relacionado: ",
            {
              l: "/blog/what-can-i-cook-with-what-i-have",
              t: "o que posso cozinhar com o que tenho?",
            },
          ],
        },
      ],
    },
    de: {
      title:
        "Die Aufbrauch-Methode: rund um den Kühlschrank planen, nicht ums Kochbuch",
      description:
        "Die meisten Pläne starten mit einem Rezept und schicken dich einkaufen. Dreh es um: starte mit dem, was du schon hast. Hier ist die Methode.",
      blocks: [
        {
          k: "lead",
          c: [
            "Die Aufbrauch-Methode ist Essensplanung rückwärts: Statt Rezepte zu wählen und dafür einzukaufen, startest du mit dem, was schon in deiner Küche ist und bald abläuft, und planst dann darum herum — und kaufst nur, was wirklich fehlt. Das verschwendet weniger, kostet weniger und ist weniger Aufwand als ein klassischer Plan, der mit dem Rezept beginnt.",
          ],
        },
        { k: "h2", c: "Warum rezeptzuerst-Planung leise Essen verschwendet" },
        {
          k: "p",
          c: [
            "Der übliche Weg — Rezepte durchblättern, Liste schreiben, alles kaufen — ignoriert, was du schon besitzt. So kaufst du ein zweites Glas Kreuzkümmel, der halbe Beutel Spinat in der Schublade verdirbt, und die Reste von gestern wandern nach hinten im Kühlschrank. Der Plan sah ordentlich aus; der Mülleimer erzählt etwas anderes.",
          ],
        },
        { k: "h2", c: "Die Methode in vier Schritten" },
        {
          k: "ol",
          c: [
            [
              { b: "Bestandsaufnahme." },
              " Notiere, was du hast und vor allem, was bald abläuft.",
            ],
            [
              { b: "Koch zuerst das Ablaufende." },
              " Bau die Mahlzeiten dieser Woche rund um diese Dinge.",
            ],
            [
              { b: "Füll die Lücken." },
              " Ergänze ein paar flexible Mahlzeiten und liste dann nur die Zutaten, die du nicht schon hast.",
            ],
            [
              { b: "Halt es aktuell." },
              " Während du kochst, aktualisiere den Rest, damit die nächste Woche von der Realität ausgeht.",
            ],
          ],
        },
        { k: "h2", c: "Es mühelos machen" },
        {
          k: "p",
          c: [
            "Auf dem Papier funktioniert die Methode, von Hand ist sie aber mühsam — deshalb geben die meisten auf. Der ganze Sinn von Copantry ist, sie zu automatisieren: Es hält deinen Vorrat aktuell, bringt Ablaufendes nach oben, schlägt Gerichte darum vor und macht aus den Lücken eine Einkaufsliste. Siehe ",
            { l: "/how-it-works", t: "wie es funktioniert" },
            ", oder warum das einen ",
            {
              l: "/why-copantry",
              t: "Kalender-Planer oder eine Rezeptbox schlägt",
            },
            ".",
          ],
        },
        {
          k: "p",
          c: [
            "Fang klein an: Öffne diese Woche vor dem Einkauf den Kühlschrank und plane ein Abendessen rund um das, was am ehesten im Müll landet. Diese eine Gewohnheit ist die Aufbrauch-Methode im Kleinen — und sie summiert sich schnell. Verwandt: ",
            {
              l: "/blog/what-can-i-cook-with-what-i-have",
              t: "Was kann ich mit dem kochen, was ich habe?",
            },
          ],
        },
      ],
    },
    nl: {
      title:
        "De opmaakmethode: plan maaltijden rond je koelkast, niet rond een kookboek",
      description:
        "De meeste maaltijdplanning begint bij een recept en stuurt je naar de winkel. Draai het om: begin bij wat je al hebt. Dit is de methode.",
      blocks: [
        {
          k: "lead",
          c: [
            "De opmaakmethode is maaltijdplanning in omgekeerde volgorde: in plaats van recepten te kiezen en daarvoor te winkelen, begin je bij wat er al in je keuken ligt en wat bijna over de datum is, en plan je daaromheen — je koopt alleen wat je echt mist. Het verspilt minder, kost minder en vraagt minder moeite dan een klassiek recept-eerst-plan.",
          ],
        },
        {
          k: "h2",
          c: "Waarom recept-eerst plannen ongemerkt eten verspilt",
        },
        {
          k: "p",
          c: [
            "De gebruikelijke aanpak — recepten doorbladeren, een boodschappenlijst schrijven, alles kopen — negeert wat je al hebt. Dus koop je een tweede potje komijn, bederft de halve zak spinazie in de la en verdwijnen de restjes van gisteren achterin de koelkast. Het plan zag er netjes uit; de vuilnisbak vertelt een ander verhaal.",
          ],
        },
        {
          k: "h2",
          c: "De methode, in vier stappen",
        },
        {
          k: "ol",
          c: [
            [
              {
                b: "Maak de balans op.",
              },
              " Noteer wat je hebt en, cruciaal, wat bijna over de datum is.",
            ],
            [
              {
                b: "Kook eerst wat bederft.",
              },
              " Bouw de maaltijden van deze week rond die producten.",
            ],
            [
              {
                b: "Vul de gaten.",
              },
              " Voeg een paar flexibele maaltijden toe en noteer daarna alleen de ingrediënten die je nog niet hebt.",
            ],
            [
              {
                b: "Houd het bij.",
              },
              " Werk tijdens het koken bij wat er over is, zodat de volgende week vanuit de werkelijkheid begint.",
            ],
          ],
        },
        {
          k: "h2",
          c: "Zo kost het geen moeite",
        },
        {
          k: "p",
          c: [
            "Op papier werkt de methode, maar met de hand is hij bewerkelijk — en daarom haken de meeste mensen af. Copantry bestaat juist om hem te automatiseren: het houdt je voorraadkast bij, laat zien wat bijna over de datum is, stelt daar maaltijden bij voor en maakt van de gaten een boodschappenlijst. Zie ",
            {
              l: "/how-it-works",
              t: "hoe het werkt",
            },
            ", of waarom dit beter is dan een ",
            {
              l: "/why-copantry",
              t: "agendagerichte planner of een receptendoos",
            },
            ".",
          ],
        },
        {
          k: "p",
          c: [
            "Begin klein: open deze week vóór je boodschappen doet de koelkast en plan één avondmaaltijd rond het product dat het meest kans maakt om weggegooid te worden. Die ene gewoonte is de opmaakmethode in het klein — en het telt snel op. Verwant: ",
            {
              l: "/blog/what-can-i-cook-with-what-i-have",
              t: "wat kan ik koken met wat ik heb?",
            },
          ],
        },
      ],
    },
    sv: {
      title:
        "Använd-upp-metoden: planera måltider utifrån kylen, inte en kokbok",
      description:
        "De flesta matsedlar börjar i ett recept och skickar dig till butiken. Vänd på det: börja med det du redan har. Så här går metoden till.",
      blocks: [
        {
          k: "lead",
          c: [
            "Använd-upp-metoden är måltidsplanering baklänges: i stället för att välja recept och handla till dem börjar du med det som redan finns i köket och det som snart går ut, och planerar måltider utifrån det — och köper bara det du verkligen saknar. Det slänger mindre, kostar mindre och kräver mindre möda än en traditionell receptplan.",
          ],
        },
        {
          k: "h2",
          c: "Varför receptet-först tyst orsakar matsvinn",
        },
        {
          k: "p",
          c: [
            "Det vanliga upplägget — bläddra bland recept, skriva en inköpslista, köpa allt — bortser från det du redan äger. Så du köper en andra burk spiskummin, halva påsen spenat i lådan blir dålig och gårdagens rester puttas längst in i kylen. Planen såg prydlig ut; soppåsen berättar något annat.",
          ],
        },
        {
          k: "h2",
          c: "Metoden, i fyra steg",
        },
        {
          k: "ol",
          c: [
            [
              {
                b: "Gör en inventering.",
              },
              " Notera vad du har och, framför allt, vad som snart går ut.",
            ],
            [
              {
                b: "Laga det som snart går ut först.",
              },
              " Bygg veckans måltider kring de varorna.",
            ],
            [
              {
                b: "Fyll luckorna.",
              },
              " Lägg till några flexibla måltider, och skriv sedan bara upp de ingredienser du inte redan har.",
            ],
            [
              {
                b: "Håll det aktuellt.",
              },
              " Uppdatera vad som är kvar allteftersom du lagar, så att nästa vecka utgår från verkligheten.",
            ],
          ],
        },
        {
          k: "h2",
          c: "Så blir det enkelt",
        },
        {
          k: "p",
          c: [
            "Metoden fungerar på papper, men den är tjatig för hand — vilket är varför de flesta ger upp. Hela poängen med Copantry är att automatisera den: den håller skafferiet uppdaterat, visar vad som snart går ut, föreslår måltider kring det och gör luckorna till en inköpslista. Se ",
            {
              l: "/how-it-works",
              t: "hur det fungerar",
            },
            ", eller varför det slår en ",
            {
              l: "/why-copantry",
              t: "kalenderdriven planerare eller en receptlåda",
            },
            ".",
          ],
        },
        {
          k: "p",
          c: [
            "Börja smått: den här veckan, innan du handlar, öppna kylen och planera en middag kring det som mest sannolikt hamnar i soporna. Den enda vanan är använd-upp-metoden i miniatyr — och det växer snabbt. Relaterat: ",
            {
              l: "/blog/what-can-i-cook-with-what-i-have",
              t: "vad kan jag laga av det jag har?",
            },
          ],
        },
      ],
    },
    da: {
      title:
        "Brug-op-metoden: planlæg måltider ud fra køleskabet, ikke en kogebog",
      description:
        "De fleste madplaner starter i en opskrift og sender dig i butikken. Vend det om: start med det, du allerede har. Her er metoden.",
      blocks: [
        {
          k: "lead",
          c: [
            "Brug-op-metoden er madplanlægning baglæns: i stedet for at vælge opskrifter og handle til dem starter du med det, der allerede er i køkkenet, og det, der snart udløber, og planlægger måltider ud fra det — og køber kun det, du reelt mangler. Det giver mindre spild, koster mindre og kræver mindre besvær end en traditionel opskrift-først-plan.",
          ],
        },
        {
          k: "h2",
          c: "Hvorfor opskrift-først i stilhed skaber madspild",
        },
        {
          k: "p",
          c: [
            "Den sædvanlige fremgangsmåde — bladre i opskrifter, skrive en indkøbsliste, købe det hele — ser bort fra det, du allerede ejer. Så du køber et glas spidskommen mere, den halve pose spinat i skuffen bliver dårlig, og gårsdagens rester skubbes bagerst i køleskabet. Planen så pæn ud; skraldespanden fortæller en anden historie.",
          ],
        },
        {
          k: "h2",
          c: "Metoden i fire trin",
        },
        {
          k: "ol",
          c: [
            [
              {
                b: "Gør status.",
              },
              " Notér, hvad du har, og ikke mindst hvad der snart udløber.",
            ],
            [
              {
                b: "Lav det, der snart udløber, først.",
              },
              " Byg ugens måltider omkring de varer.",
            ],
            [
              {
                b: "Fyld hullerne.",
              },
              " Tilføj et par fleksible måltider, og skriv derefter kun de ingredienser op, du ikke allerede har.",
            ],
            [
              {
                b: "Hold det opdateret.",
              },
              " Opdatér, hvad der er tilbage, mens du laver mad, så næste uge starter i virkeligheden.",
            ],
          ],
        },
        {
          k: "h2",
          c: "Sådan bliver det ubesværet",
        },
        {
          k: "p",
          c: [
            "Metoden virker på papiret, men den er besværlig i hånden — og derfor giver de fleste op. Hele pointen med Copantry er at automatisere den: den holder spisekammeret opdateret, viser hvad der snart udløber, foreslår måltider omkring det og gør hullerne til en indkøbsliste. Se ",
            {
              l: "/how-it-works",
              t: "hvordan det virker",
            },
            ", eller hvorfor det slår en ",
            {
              l: "/why-copantry",
              t: "kalenderbaseret planlægger eller en opskriftskasse",
            },
            ".",
          ],
        },
        {
          k: "p",
          c: [
            "Start i det små: åbn køleskabet i denne uge, inden du handler, og planlæg ét måltid omkring det, der er mest sandsynligt at ende i skraldespanden. Den ene vane er brug-op-metoden i miniature — og det lægger hurtigt sammen. Relateret: ",
            {
              l: "/blog/what-can-i-cook-with-what-i-have",
              t: "hvad kan jeg lave af det, jeg har?",
            },
          ],
        },
      ],
    },
    fi: {
      title:
        "Loppuun käyttämisen menetelmä: suunnittele ateriat jääkaapin, ei keittokirjan ehdoilla",
      description:
        "Useimmat ruokasuunnitelmat alkavat reseptistä ja lähettävät sinut kauppaan. Käännä se: aloita siitä, mitä sinulla jo on. Tässä on menetelmä.",
      blocks: [
        {
          k: "lead",
          c: [
            "Loppuun käyttämisen menetelmä on ateriasuunnittelua takaperin: sen sijaan että valitsisit reseptit ja ostaisit niihin, aloitat siitä, mitä keittiössäsi jo on ja mikä on vanhenemassa, ja suunnittelet ateriat sen ympärille — ostaen vain sen, mikä oikeasti puuttuu. Se tuottaa vähemmän hävikkiä, maksaa vähemmän ja vaatii vähemmän vaivaa kuin perinteinen resepti edellä tehty suunnitelma.",
          ],
        },
        {
          k: "h2",
          c: "Miksi resepti edellä suunnittelu hukkaa ruokaa huomaamatta",
        },
        {
          k: "p",
          c: [
            "Tavanomainen tapa — selaa reseptejä, kirjoita ostoslista, osta kaikki — sivuuttaa sen, mitä jo omistat. Niinpä ostat toisen purkin juustokuminaa, laatikossa oleva puolikas pinaattipussi pilaantuu ja eilisillan tähteet työntyvät jääkaapin perälle. Suunnitelma näytti siistiltä; roskis kertoo toista tarinaa.",
          ],
        },
        {
          k: "h2",
          c: "Menetelmä neljässä vaiheessa",
        },
        {
          k: "ol",
          c: [
            [
              {
                b: "Tee inventaario.",
              },
              " Kirjaa, mitä sinulla on ja ennen kaikkea mikä on vanhenemassa.",
            ],
            [
              {
                b: "Laita vanhenevat ensin.",
              },
              " Rakenna tämän viikon ateriat niiden ympärille.",
            ],
            [
              {
                b: "Täytä aukot.",
              },
              " Lisää muutama joustava ateria ja listaa sitten vain ne ainekset, joita sinulla ei jo ole.",
            ],
            [
              {
                b: "Pidä se ajan tasalla.",
              },
              " Päivitä kokatessasi, mitä on jäljellä, jotta ensi viikko alkaa todellisuudesta.",
            ],
          ],
        },
        {
          k: "h2",
          c: "Näin siitä tulee vaivatonta",
        },
        {
          k: "p",
          c: [
            "Menetelmä toimii paperilla, mutta käsin se on työlästä — siksi useimmat luovuttavat. Copantryn koko idea on automatisoida se: se pitää ruokakomerosi ajan tasalla, nostaa esiin vanhenevat, ehdottaa niiden ympärille aterioita ja muuttaa aukot ostoslistaksi. Katso ",
            {
              l: "/how-it-works",
              t: "miten se toimii",
            },
            " tai miksi tämä voittaa ",
            {
              l: "/why-copantry",
              t: "kalenterivetoisen suunnittelijan tai reseptilaatikon",
            },
            ".",
          ],
        },
        {
          k: "p",
          c: [
            "Aloita pienesti: avaa tällä viikolla ennen kauppareissua jääkaappi ja suunnittele yksi päivällinen sen ympärille, mikä todennäköisimmin päätyisi roskiin. Tuo yksi tapa on loppuun käyttämisen menetelmä pienoiskoossa — ja se kertyy nopeasti. Aiheeseen liittyvää: ",
            {
              l: "/blog/what-can-i-cook-with-what-i-have",
              t: "mitä voin laittaa siitä, mitä minulla on?",
            },
          ],
        },
      ],
    },
    no: {
      title:
        "Bruk-opp-metoden: planlegg måltider ut fra kjøleskapet, ikke en kokebok",
      description:
        "De fleste matplaner starter i en oppskrift og sender deg i butikken. Snu det: start med det du allerede har. Her er metoden.",
      blocks: [
        {
          k: "lead",
          c: [
            "Bruk-opp-metoden er måltidsplanlegging baklengs: i stedet for å velge oppskrifter og handle til dem, starter du med det som allerede er på kjøkkenet og det som snart går ut, og planlegger måltider ut fra det — og kjøper bare det du virkelig mangler. Det gir mindre svinn, koster mindre og krever mindre strev enn en tradisjonell oppskrift-først-plan.",
          ],
        },
        {
          k: "h2",
          c: "Hvorfor oppskrift-først i det stille gir matsvinn",
        },
        {
          k: "p",
          c: [
            "Den vanlige framgangsmåten — bla i oppskrifter, skrive en handleliste, kjøpe alt — ser bort fra det du allerede eier. Så du kjøper enda et glass spisskummen, den halve posen spinat i skuffen blir dårlig, og gårsdagens rester skyves bakerst i kjøleskapet. Planen så ryddig ut; søppelbøtta forteller en annen historie.",
          ],
        },
        {
          k: "h2",
          c: "Metoden, i fire steg",
        },
        {
          k: "ol",
          c: [
            [
              {
                b: "Ta status.",
              },
              " Noter hva du har og, ikke minst, hva som snart går ut.",
            ],
            [
              {
                b: "Lag det som snart går ut først.",
              },
              " Bygg ukens måltider rundt de varene.",
            ],
            [
              {
                b: "Fyll hullene.",
              },
              " Legg til noen fleksible måltider, og skriv så bare opp ingrediensene du ikke allerede har.",
            ],
            [
              {
                b: "Hold det oppdatert.",
              },
              " Oppdater hva som er igjen mens du lager mat, så neste uke starter i virkeligheten.",
            ],
          ],
        },
        {
          k: "h2",
          c: "Slik blir det uanstrengt",
        },
        {
          k: "p",
          c: [
            "Metoden fungerer på papiret, men den er tungvint for hånd — og derfor gir de fleste opp. Hele poenget med Copantry er å automatisere den: den holder spiskammeret oppdatert, viser hva som snart går ut, foreslår måltider rundt det og gjør hullene om til en handleliste. Se ",
            {
              l: "/how-it-works",
              t: "hvordan det virker",
            },
            ", eller hvorfor dette slår en ",
            {
              l: "/why-copantry",
              t: "kalenderdrevet planlegger eller en oppskriftsboks",
            },
            ".",
          ],
        },
        {
          k: "p",
          c: [
            "Start i det små: denne uken, før du handler, åpne kjøleskapet og planlegg én middag rundt det som mest sannsynlig havner i søpla. Den ene vanen er bruk-opp-metoden i miniatyr — og det summerer seg raskt. Relatert: ",
            {
              l: "/blog/what-can-i-cook-with-what-i-have",
              t: "hva kan jeg lage av det jeg har?",
            },
          ],
        },
      ],
    },
    pl: {
      title:
        "Metoda zużywania zapasów: planuj posiłki wokół lodówki, a nie książki kucharskiej",
      description:
        "Większość planowania posiłków zaczyna się od przepisu i wysyła cię na zakupy. Odwróć to: zacznij od tego, co już masz. Oto metoda.",
      blocks: [
        {
          k: "lead",
          c: [
            "Metoda zużywania zapasów to planowanie posiłków na odwrót: zamiast wybierać przepisy i robić pod nie zakupy, zaczynasz od tego, co już jest w kuchni i czemu kończy się termin, a potem planujesz wokół tego — kupując wyłącznie to, czego naprawdę brakuje. Marnujesz mniej, wydajesz mniej i wkładasz w to mniej wysiłku niż w klasyczny plan zaczynający się od przepisu.",
          ],
        },
        {
          k: "h2",
          c: "Dlaczego planowanie od przepisu po cichu marnuje jedzenie",
        },
        {
          k: "p",
          c: [
            "Zwykłe podejście — przeglądasz przepisy, spisujesz listę zakupów, kupujesz wszystko — pomija to, co już masz. Kupujesz więc drugi słoiczek kminu, pół torebki szpinaku w szufladzie się psuje, a wczorajsze resztki lądują z tyłu lodówki. Plan wyglądał schludnie; kosz mówi co innego.",
          ],
        },
        {
          k: "h2",
          c: "Metoda w czterech krokach",
        },
        {
          k: "ol",
          c: [
            [
              {
                b: "Zrób przegląd.",
              },
              " Zapisz, co masz, a przede wszystkim czemu kończy się termin.",
            ],
            [
              {
                b: "Najpierw ugotuj to, co się kończy.",
              },
              " Zbuduj posiłki na ten tydzień wokół tych produktów.",
            ],
            [
              {
                b: "Uzupełnij braki.",
              },
              " Dorzuć kilka elastycznych posiłków, a potem spisz wyłącznie te składniki, których jeszcze nie masz.",
            ],
            [
              {
                b: "Trzymaj to na bieżąco.",
              },
              " W trakcie gotowania aktualizuj, co zostało, żeby kolejny tydzień zaczynał się od rzeczywistości.",
            ],
          ],
        },
        {
          k: "h2",
          c: "Jak sprawić, żeby to nie kosztowało wysiłku",
        },
        {
          k: "p",
          c: [
            "Na papierze metoda działa, ale ręcznie jest żmudna — i dlatego większość ludzi rezygnuje. Cały sens Copantry polega na jej zautomatyzowaniu: aplikacja utrzymuje spiżarnię w aktualnym stanie, pokazuje, czemu kończy się termin, proponuje wokół tego posiłki i zamienia braki w listę zakupów. Zobacz ",
            {
              l: "/how-it-works",
              t: "jak to działa",
            },
            " albo dlaczego bije to ",
            {
              l: "/why-copantry",
              t: "planner oparty na kalendarzu czy pudełko z przepisami",
            },
            ".",
          ],
        },
        {
          k: "p",
          c: [
            "Zacznij od małego: w tym tygodniu, zanim pójdziesz na zakupy, otwórz lodówkę i zaplanuj jedną kolację wokół tego, co najpewniej wylądowałoby w koszu. Ten jeden nawyk to metoda zużywania zapasów w pigułce — a efekty szybko się sumują. Powiązane: ",
            {
              l: "/blog/what-can-i-cook-with-what-i-have",
              t: "co mogę ugotować z tego, co mam?",
            },
          ],
        },
      ],
    },
  },
};

// ── Resolvers ────────────────────────────────────────────────────────────────

/** Localized post metadata (English structural fields + translated text). */
export function localizedPostMeta(slug, lng) {
  const base = BY_SLUG[slug];
  if (!base) return null;
  const tx = POST_TX[slug]?.[lng] ?? POST_TX[slug]?.en;
  return {
    ...base,
    title: tx?.title ?? base.title,
    description: tx?.description ?? base.description,
    category: CATEGORY_TX[base.category]?.[lng] ?? base.category,
  };
}

/** Localized body blocks for a post (English fallback). */
export function localizedPostBlocks(slug, lng) {
  return POST_TX[slug]?.[lng]?.blocks ?? POST_TX[slug]?.en?.blocks ?? [];
}

/** All posts (localized metadata), newest first — for the blog index. */
export function localizedPostList(lng) {
  return [...POSTS]
    .map((p) => localizedPostMeta(p.slug, lng))
    .sort((a, b) => new Date(b.date) - new Date(a.date));
}
