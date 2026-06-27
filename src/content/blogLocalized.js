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
};

const CATEGORY_TX = {
  Cooking: {
    fr: "Cuisine",
    it: "Cucina",
    es: "Cocina",
    pt: "Cozinha",
    de: "Kochen",
  },
  "Food waste": {
    fr: "Gaspillage alimentaire",
    it: "Spreco alimentare",
    es: "Desperdicio de comida",
    pt: "Desperdício alimentar",
    de: "Lebensmittelverschwendung",
  },
  "Meal planning": {
    fr: "Planification des repas",
    it: "Pianificazione dei pasti",
    es: "Planificación de comidas",
    pt: "Planeamento de refeições",
    de: "Essensplanung",
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
