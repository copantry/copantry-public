/*
 * Localized copy for the content-driven /features/* and /use-cases/* pages.
 *
 * Pure data + a resolver — NO JSX — because seoConfig.js (imported by the Node
 * prerender) imports this. English lives in pages.js + faqs.js; this file holds
 * the fr/it/es/pt translations (de included) and merges them onto the English
 * structural fields (accent, heroEmoji, related targets) via `localizedPage()`.
 * `/us` falls back to English. Keep `sections` in lock-step (same count/order) with
 * the English entry, and `related` label arrays in the same order as pages.js.
 *
 * reduce-food-waste is intentionally absent here — it has its own richer
 * REDUCE_WASTE map in localized.js.
 */

import { FEATURES, USE_CASES } from "./pages.js";
import { FAQS } from "./faqs.js";
import { localizePath } from "./localized.js";

const REGISTRY = { ...FEATURES, ...USE_CASES };

// ── Page text translations ──────────────────────────────────────────────────
export const PAGE_TX = {
  "meal-planning": {
    fr: {
      metaTitle: "Planification des repas",
      eyebrow: "Planification des repas",
      crumb: "Planification des repas",
      h1: "Planifiez votre semaine autour de ce que vous avez déjà",
      lede: "Copantry planifie une semaine de repas en partant de votre garde-manger, pas d’un calendrier vide. Il privilégie les aliments bientôt périmés, adapte les recettes à votre foyer, puis compose une liste de courses limitée à ce qui manque.",
      sections: [
        {
          h2: "Laissez-le planifier la semaine pour vous",
          body: "Demandez à Copantry de générer une semaine et il bâtit un plan varié qui écoule d’abord les aliments bientôt périmés — ou glissez vos propres recettes sur le calendrier. Vous gardez la main et changez n’importe quel repas d’un geste.",
        },
        {
          h2: "Un plan que vous tiendrez vraiment",
          body: "Un plan tient quand il colle à votre vrai placard, votre vraie semaine et votre vrai foyer.",
          bullets: [
            {
              title: "Bâti autour de votre garde-manger",
              desc: "Utilise ce que vous avez avant péremption, donc moins de gaspillage.",
            },
            {
              title: "Adapté à votre foyer",
              desc: "Indiquez le nombre de convives et les quantités suivent.",
            },
            {
              title: "Partagé avec tous",
              desc: "Tout le foyer voit et modifie un seul plan en temps réel.",
            },
            {
              title: "Restes suivis",
              desc: "Cuisinez une fois, Copantry suit les portions restantes pour plus tard.",
            },
          ],
        },
      ],
      related: [
        "Réduire le gaspillage",
        "Listes de courses",
        "Planifier depuis votre IA",
        "Accord mets et vins",
      ],
    },
    it: {
      metaTitle: "Pianificazione dei pasti",
      eyebrow: "Pianificazione dei pasti",
      crumb: "Pianificazione dei pasti",
      h1: "Pianifica la settimana intorno a ciò che hai già",
      lede: "Copantry pianifica una settimana di pasti partendo dalla tua dispensa, non da un calendario vuoto. Dà priorità agli alimenti in scadenza, adatta le ricette alla tua famiglia e poi crea una lista della spesa solo con ciò che manca.",
      sections: [
        {
          h2: "Lascia che pianifichi la settimana per te",
          body: "Chiedi a Copantry di generare una settimana e costruisce un piano vario che consuma prima ciò che sta per scadere — oppure trascina le tue ricette sul calendario. Mantieni il controllo e cambi qualsiasi pasto con un tocco.",
        },
        {
          h2: "Un piano che seguirai davvero",
          body: "I piani funzionano quando si adattano alla tua dispensa reale, alla tua settimana reale e alla tua famiglia reale.",
          bullets: [
            {
              title: "Costruito sulla tua dispensa",
              desc: "Usa ciò che hai prima della scadenza, così si spreca meno.",
            },
            {
              title: "Adattato alla tua famiglia",
              desc: "Imposta quante persone e le quantità si adeguano.",
            },
            {
              title: "Condiviso con tutti",
              desc: "Tutta la famiglia vede e modifica un unico piano in tempo reale.",
            },
            {
              title: "Avanzi monitorati",
              desc: "Cucini una volta e Copantry tiene traccia delle porzioni avanzate.",
            },
          ],
        },
      ],
      related: [
        "Ridurre gli sprechi",
        "Liste della spesa",
        "Pianifica dalla tua IA",
        "Abbinamento vino-cibo",
      ],
    },
    es: {
      metaTitle: "Planificación de comidas",
      eyebrow: "Planificación de comidas",
      crumb: "Planificación de comidas",
      h1: "Planifica tu semana en torno a lo que ya tienes",
      lede: "Copantry planifica una semana de comidas partiendo de tu despensa, no de un calendario vacío. Prioriza los alimentos a punto de caducar, ajusta las recetas a tu hogar y luego arma una lista de la compra solo con lo que falta.",
      sections: [
        {
          h2: "Deja que planifique la semana por ti",
          body: "Pídele a Copantry que genere una semana y crea un plan variado que gasta primero lo que está por caducar — o arrastra tus propias recetas al calendario. Mantienes el control y cambias cualquier comida con un toque.",
        },
        {
          h2: "Un plan que de verdad cumplirás",
          body: "Los planes funcionan cuando encajan con tu despensa real, tu semana real y tu hogar real.",
          bullets: [
            {
              title: "Construido en torno a tu despensa",
              desc: "Usa lo que tienes antes de que caduque, así se desperdicia menos.",
            },
            {
              title: "Ajustado a tu hogar",
              desc: "Indica cuántos sois y las cantidades se ajustan.",
            },
            {
              title: "Compartido con todos",
              desc: "Todo el hogar ve y edita un único plan en tiempo real.",
            },
            {
              title: "Sobras controladas",
              desc: "Cocinas una vez y Copantry sigue las porciones sobrantes para luego.",
            },
          ],
        },
      ],
      related: [
        "Reducir el desperdicio",
        "Listas de la compra",
        "Planifica desde tu IA",
        "Maridaje de vinos",
      ],
    },
    pt: {
      metaTitle: "Planeamento de refeições",
      eyebrow: "Planeamento de refeições",
      crumb: "Planeamento de refeições",
      h1: "Planeie a sua semana em torno do que já tem",
      lede: "O Copantry planeia uma semana de refeições a partir da sua despensa, não de um calendário vazio. Dá prioridade aos alimentos prestes a expirar, ajusta as receitas ao seu agregado e depois monta uma lista de compras só com o que falta.",
      sections: [
        {
          h2: "Deixe-o planear a semana por si",
          body: "Peça ao Copantry para gerar uma semana e ele cria um plano variado que gasta primeiro o que está prestes a expirar — ou arraste as suas próprias receitas para o calendário. Mantém o controlo e troca qualquer refeição com um toque.",
        },
        {
          h2: "Um plano que vai mesmo cumprir",
          body: "Os planos resultam quando encaixam na sua despensa real, na sua semana real e no seu agregado real.",
          bullets: [
            {
              title: "Construído em torno da sua despensa",
              desc: "Usa o que tem antes de expirar, por isso desperdiça menos.",
            },
            {
              title: "Ajustado ao seu agregado",
              desc: "Defina quantos são e as quantidades acompanham.",
            },
            {
              title: "Partilhado com todos",
              desc: "Todo o agregado vê e edita um único plano em tempo real.",
            },
            {
              title: "Sobras acompanhadas",
              desc: "Cozinhe uma vez e o Copantry acompanha as porções que sobram.",
            },
          ],
        },
      ],
      related: [
        "Reduzir o desperdício",
        "Listas de compras",
        "Planeie a partir da sua IA",
        "Harmonização de vinhos",
      ],
    },
    de: {
      metaTitle: "Essensplanung",
      eyebrow: "Essensplanung",
      crumb: "Essensplanung",
      h1: "Plane deine Woche rund um das, was du schon hast",
      lede: "Copantry plant eine Woche voller Mahlzeiten ausgehend von deinem Vorrat, nicht von einem leeren Kalender. Es bevorzugt bald ablaufende Lebensmittel, skaliert Rezepte auf deinen Haushalt und erstellt dann eine Einkaufsliste nur mit dem, was fehlt.",
      sections: [
        {
          h2: "Lass es die Woche für dich planen",
          body: "Bitte Copantry, eine Woche zu erzeugen, und es baut einen abwechslungsreichen Plan, der zuerst bald ablaufende Lebensmittel aufbraucht — oder zieh deine eigenen Rezepte auf den Kalender. Du behältst die Kontrolle und tauschst jede Mahlzeit mit einem Tipp.",
        },
        {
          h2: "Ein Plan, den du wirklich einhältst",
          body: "Pläne halten, wenn sie zu deinem echten Schrank, deiner echten Woche und deinem echten Haushalt passen.",
          bullets: [
            {
              title: "Rund um deinen Vorrat gebaut",
              desc: "Nutzt, was du hast, vor dem Ablauf — so geht weniger verloren.",
            },
            {
              title: "Auf deinen Haushalt skaliert",
              desc: "Stell ein, für wie viele du kochst, und die Mengen folgen.",
            },
            {
              title: "Mit allen geteilt",
              desc: "Der ganze Haushalt sieht und bearbeitet einen Plan in Echtzeit.",
            },
            {
              title: "Reste verfolgt",
              desc: "Einmal kochen, und Copantry verfolgt die Restportionen für später.",
            },
          ],
        },
      ],
      related: [
        "Lebensmittel retten",
        "Einkaufslisten",
        "Aus deiner KI planen",
        "Weinbegleitung",
      ],
    },
  },

  "pantry-tracking": {
    fr: {
      metaTitle: "Suivi du garde-manger",
      eyebrow: "Suivi du garde-manger",
      crumb: "Suivi du garde-manger",
      h1: "Gardez un œil sur tout ce qu’il y a dans votre cuisine",
      lede: "Copantry tient un inventaire en direct de votre garde-manger, frigo et congélateur, trié par date de péremption la plus proche. Ajoutez des articles par photo, ticket, voix ou texte — et ne vous demandez plus jamais ce que vous avez ou ce qui vous manque.",
      sections: [
        {
          h2: "Ajoutez vos courses sans tout taper",
          body: "Photographiez vos achats, un ticket de caisse ou une étagère et Copantry les lit avec l’IA et remplit votre garde-manger en quelques secondes. Vous pouvez aussi coller une liste ou ajouter à la main.",
        },
        {
          h2: "Toujours juste, car il se met à jour quand vous cuisinez",
          body: "Quand vous cuisinez un repas planifié, Copantry déduit les ingrédients utilisés. Votre garde-manger reste fidèle : il sait ce qui manque et l’ajoute automatiquement à votre prochaine liste.",
          bullets: [
            {
              title: "Scan photo et ticket",
              desc: "L’IA transforme une image en articles datés.",
            },
            {
              title: "Estimations de péremption",
              desc: "Copantry propose une date limite sensée pour chaque article.",
            },
            {
              title: "Le plus proche d’abord",
              desc: "Ce qu’il faut finir est toujours en haut.",
            },
            {
              title: "Partagé dans le foyer",
              desc: "Tout le monde voit la même cuisine à jour.",
            },
          ],
        },
      ],
      related: [
        "Réduire le gaspillage",
        "Combien de temps se conservent les aliments ?",
        "Listes de courses",
      ],
    },
    it: {
      metaTitle: "Gestione della dispensa",
      eyebrow: "Gestione della dispensa",
      crumb: "Gestione della dispensa",
      h1: "Tieni traccia di tutto ciò che c’è in cucina",
      lede: "Copantry mantiene un inventario in tempo reale di dispensa, frigo e freezer, ordinato per scadenza più vicina. Aggiungi articoli con foto, scontrino, voce o testo — e non chiederti mai più cosa hai o cosa è finito.",
      sections: [
        {
          h2: "Aggiungi la spesa senza digitare tutto",
          body: "Fotografa la spesa, uno scontrino o un ripiano e Copantry lo legge con l’IA e riempie la dispensa in pochi secondi. Puoi anche incollare un elenco o aggiungere a mano.",
        },
        {
          h2: "Sempre preciso, perché si aggiorna mentre cucini",
          body: "Quando cucini un pasto pianificato, Copantry sottrae gli ingredienti usati. La dispensa resta onesta: sa cosa scarseggia e lo aggiunge da solo alla prossima lista.",
          bullets: [
            {
              title: "Scansione foto e scontrino",
              desc: "L’IA trasforma un’immagine in articoli con data.",
            },
            {
              title: "Stime di scadenza",
              desc: "Copantry propone una scadenza sensata per ogni articolo.",
            },
            {
              title: "Prima i più vicini",
              desc: "Ciò da consumare è sempre in cima.",
            },
            {
              title: "Condiviso in casa",
              desc: "Tutti vedono la stessa cucina aggiornata.",
            },
          ],
        },
      ],
      related: [
        "Ridurre gli sprechi",
        "Quanto durano gli alimenti?",
        "Liste della spesa",
      ],
    },
    es: {
      metaTitle: "Control de la despensa",
      eyebrow: "Control de la despensa",
      crumb: "Control de la despensa",
      h1: "Controla todo lo que hay en tu cocina",
      lede: "Copantry mantiene un inventario en vivo de tu despensa, nevera y congelador, ordenado por lo que caduca antes. Añade artículos por foto, ticket, voz o texto — y no vuelvas a preguntarte qué tienes o qué se te ha acabado.",
      sections: [
        {
          h2: "Añade la compra sin teclearlo todo",
          body: "Haz una foto de la compra, un ticket o un estante y Copantry lo lee con IA y llena tu despensa en segundos. También puedes pegar una lista o añadir a mano.",
        },
        {
          h2: "Siempre exacto, porque se actualiza al cocinar",
          body: "Cuando cocinas una comida planificada, Copantry resta los ingredientes usados. Tu despensa se mantiene honesta: sabe qué te falta y lo añade solo a tu próxima lista.",
          bullets: [
            {
              title: "Escaneo de foto y ticket",
              desc: "La IA convierte una imagen en artículos con fecha.",
            },
            {
              title: "Estimaciones de caducidad",
              desc: "Copantry propone una fecha sensata para cada artículo.",
            },
            {
              title: "Lo más próximo primero",
              desc: "Lo que hay que gastar está siempre arriba.",
            },
            {
              title: "Compartido en el hogar",
              desc: "Todos ven la misma cocina actualizada.",
            },
          ],
        },
      ],
      related: [
        "Reducir el desperdicio",
        "¿Cuánto duran los alimentos?",
        "Listas de la compra",
      ],
    },
    pt: {
      metaTitle: "Controlo da despensa",
      eyebrow: "Controlo da despensa",
      crumb: "Controlo da despensa",
      h1: "Controle tudo o que há na sua cozinha",
      lede: "O Copantry mantém um inventário ao vivo da sua despensa, frigorífico e congelador, ordenado pelo que expira primeiro. Adicione itens por foto, talão, voz ou texto — e nunca mais pense no que tem ou no que acabou.",
      sections: [
        {
          h2: "Adicione as compras sem escrever tudo",
          body: "Fotografe as compras, um talão ou uma prateleira e o Copantry lê com IA e enche a sua despensa em segundos. Também pode colar uma lista ou adicionar à mão.",
        },
        {
          h2: "Sempre certo, porque se atualiza ao cozinhar",
          body: "Quando cozinha uma refeição planeada, o Copantry subtrai os ingredientes usados. A despensa mantém-se honesta: sabe o que está a faltar e adiciona-o sozinho à próxima lista.",
          bullets: [
            {
              title: "Leitura de foto e talão",
              desc: "A IA transforma uma imagem em itens com data.",
            },
            {
              title: "Estimativas de validade",
              desc: "O Copantry sugere uma validade sensata para cada item.",
            },
            {
              title: "Os mais próximos primeiro",
              desc: "O que há a gastar está sempre no topo.",
            },
            {
              title: "Partilhado em casa",
              desc: "Todos veem a mesma cozinha atualizada.",
            },
          ],
        },
      ],
      related: [
        "Reduzir o desperdício",
        "Quanto duram os alimentos?",
        "Listas de compras",
      ],
    },
    de: {
      metaTitle: "Vorratsverwaltung",
      eyebrow: "Vorratsverwaltung",
      crumb: "Vorratsverwaltung",
      h1: "Behalte den Überblick über alles in deiner Küche",
      lede: "Copantry führt ein Live-Inventar von Vorrat, Kühl- und Gefrierschrank, sortiert nach dem nächsten Ablaufdatum. Füge Artikel per Foto, Kassenbon, Sprache oder Text hinzu — und frag dich nie wieder, was du hast oder was ausgegangen ist.",
      sections: [
        {
          h2: "Einkäufe hinzufügen, ohne alles zu tippen",
          body: "Fotografiere deinen Einkauf, einen Kassenbon oder ein Regal, und Copantry liest es per KI und füllt deinen Vorrat in Sekunden. Du kannst auch eine Liste einfügen oder von Hand erfassen.",
        },
        {
          h2: "Immer korrekt, weil es sich beim Kochen aktualisiert",
          body: "Wenn du eine geplante Mahlzeit kochst, zieht Copantry die verwendeten Zutaten ab. Dein Vorrat bleibt ehrlich: Er weiß, was knapp wird, und fügt es automatisch der nächsten Liste hinzu.",
          bullets: [
            {
              title: "Foto- & Bon-Scan",
              desc: "Die KI macht aus einem Bild datierte Vorratsartikel.",
            },
            {
              title: "Ablauf-Schätzungen",
              desc: "Copantry schlägt für jeden Artikel ein sinnvolles Datum vor.",
            },
            {
              title: "Nächstes zuerst",
              desc: "Was aufzubrauchen ist, steht immer oben.",
            },
            {
              title: "Im Haushalt geteilt",
              desc: "Alle sehen dieselbe aktuelle Küche.",
            },
          ],
        },
      ],
      related: [
        "Lebensmittel retten",
        "Wie lange halten Lebensmittel?",
        "Einkaufslisten",
      ],
    },
  },

  "shopping-lists": {
    fr: {
      metaTitle: "Listes de courses",
      eyebrow: "Listes de courses",
      crumb: "Listes de courses",
      h1: "Une liste de courses qui se construit toute seule",
      lede: "Copantry compare votre plan de repas à ce qui est déjà dans votre garde-manger et crée une liste de courses limitée aux articles manquants — organisée par rayon de supermarché et partagée en temps réel avec tout le foyer.",
      sections: [
        {
          h2: "Arrêtez d’acheter ce que vous avez déjà",
          body: "Comme Copantry vérifie votre garde-manger avant d’ajouter quoi que ce soit, il ne met jamais sur la liste un produit que vous possédez déjà. Cette seule habitude élimine la plupart des doublons — et la plupart du gaspillage.",
        },
        {
          h2: "Conçue pour les vraies courses",
          body: "Votre liste est regroupée par rayon pour traverser le magasin en une fois, et les articles se cochent en direct pour tout le foyer.",
          bullets: [
            {
              title: "Générée depuis votre plan",
              desc: "Planifiez les repas, obtenez exactement ce qu’il faut acheter.",
            },
            {
              title: "Triée par rayon",
              desc: "Plus d’allers-retours dans le magasin.",
            },
            {
              title: "Partage en temps réel",
              desc: "Qui que ce soit au magasin voit la liste en direct.",
            },
            {
              title: "Vers la commande en supermarché",
              desc: "Pensée pour mener les manques jusqu’à la caisse.",
            },
          ],
        },
      ],
      related: [
        "Planification des repas",
        "Suivi du garde-manger",
        "Cuisine économique",
      ],
    },
    it: {
      metaTitle: "Liste della spesa",
      eyebrow: "Liste della spesa",
      crumb: "Liste della spesa",
      h1: "Una lista della spesa che si crea da sola",
      lede: "Copantry confronta il tuo piano dei pasti con ciò che è già in dispensa e crea una lista della spesa solo con gli articoli mancanti — organizzata per reparto del supermercato e condivisa in tempo reale con tutta la famiglia.",
      sections: [
        {
          h2: "Smetti di comprare ciò che hai già",
          body: "Poiché Copantry controlla la dispensa prima di aggiungere qualcosa, non mette mai in lista un prodotto che possiedi già. Questa sola abitudine elimina la maggior parte dei doppioni — e degli sprechi.",
        },
        {
          h2: "Pensata per la spesa vera",
          body: "La lista è raggruppata per reparto per attraversare il negozio in un colpo solo, e gli articoli si spuntano in diretta per tutta la famiglia.",
          bullets: [
            {
              title: "Generata dal tuo piano",
              desc: "Pianifica i pasti, ottieni esattamente cosa comprare.",
            },
            {
              title: "Ordinata per reparto",
              desc: "Niente più avanti e indietro nel negozio.",
            },
            {
              title: "Condivisione in tempo reale",
              desc: "Chi è al negozio vede la lista in diretta.",
            },
            {
              title: "Verso l’ordine al supermercato",
              desc: "Pensata per portare i mancanti fino alla cassa.",
            },
          ],
        },
      ],
      related: [
        "Pianificazione dei pasti",
        "Gestione della dispensa",
        "Cucina economica",
      ],
    },
    es: {
      metaTitle: "Listas de la compra",
      eyebrow: "Listas de la compra",
      crumb: "Listas de la compra",
      h1: "Una lista de la compra que se construye sola",
      lede: "Copantry compara tu plan de comidas con lo que ya hay en tu despensa y crea una lista de la compra solo con los artículos que faltan — organizada por pasillo de supermercado y compartida en tiempo real con todo el hogar.",
      sections: [
        {
          h2: "Deja de comprar lo que ya tienes",
          body: "Como Copantry revisa tu despensa antes de añadir nada, nunca pone en la lista algo que ya posees. Ese solo hábito elimina la mayoría de los duplicados — y la mayoría del desperdicio.",
        },
        {
          h2: "Diseñada para la compra real",
          body: "Tu lista se agrupa por pasillo para recorrer la tienda de una pasada, y los artículos se marcan en vivo para todo el hogar.",
          bullets: [
            {
              title: "Generada desde tu plan",
              desc: "Planifica comidas y obtén justo lo que hay que comprar.",
            },
            {
              title: "Ordenada por pasillo",
              desc: "Sin volver atrás por la tienda.",
            },
            {
              title: "Compartida en tiempo real",
              desc: "Quien esté en la tienda ve la lista en vivo.",
            },
            {
              title: "Hacia el pedido al súper",
              desc: "Pensada para llevar lo que falta hasta la caja.",
            },
          ],
        },
      ],
      related: [
        "Planificación de comidas",
        "Control de la despensa",
        "Cocina económica",
      ],
    },
    pt: {
      metaTitle: "Listas de compras",
      eyebrow: "Listas de compras",
      crumb: "Listas de compras",
      h1: "Uma lista de compras que se monta sozinha",
      lede: "O Copantry compara o seu plano de refeições com o que já está na despensa e cria uma lista de compras só com os itens em falta — organizada por corredor de supermercado e partilhada em tempo real com todo o agregado.",
      sections: [
        {
          h2: "Pare de comprar o que já tem",
          body: "Como o Copantry verifica a sua despensa antes de adicionar fosse o que fosse, nunca põe na lista algo que já possui. Só esse hábito elimina a maioria dos duplicados — e do desperdício.",
        },
        {
          h2: "Pensada para as compras reais",
          body: "A sua lista é agrupada por corredor para atravessar a loja de uma vez, e os itens marcam-se ao vivo para todo o agregado.",
          bullets: [
            {
              title: "Gerada a partir do seu plano",
              desc: "Planeie refeições e obtenha exatamente o que comprar.",
            },
            {
              title: "Ordenada por corredor",
              desc: "Sem voltar para trás na loja.",
            },
            {
              title: "Partilha em tempo real",
              desc: "Quem estiver na loja vê a lista ao vivo.",
            },
            {
              title: "Rumo à encomenda no supermercado",
              desc: "Pensada para levar o que falta até à caixa.",
            },
          ],
        },
      ],
      related: [
        "Planeamento de refeições",
        "Controlo da despensa",
        "Cozinha económica",
      ],
    },
    de: {
      metaTitle: "Einkaufslisten",
      eyebrow: "Einkaufslisten",
      crumb: "Einkaufslisten",
      h1: "Eine Einkaufsliste, die sich selbst erstellt",
      lede: "Copantry vergleicht deinen Essensplan mit dem, was schon im Vorrat ist, und erstellt eine Einkaufsliste nur mit den fehlenden Artikeln — nach Supermarktgang geordnet und in Echtzeit mit dem ganzen Haushalt geteilt.",
      sections: [
        {
          h2: "Kauf nicht mehr, was du schon hast",
          body: "Weil Copantry deinen Vorrat prüft, bevor es etwas hinzufügt, setzt es nie etwas auf die Liste, das du bereits besitzt. Allein diese Gewohnheit beseitigt die meisten Doppelkäufe — und den meisten Abfall.",
        },
        {
          h2: "Für den echten Einkauf gemacht",
          body: "Deine Liste ist nach Gang gruppiert, damit du den Laden in einem Durchgang schaffst, und Artikel werden für alle live abgehakt.",
          bullets: [
            {
              title: "Aus deinem Plan erzeugt",
              desc: "Plane Mahlzeiten und bekomm genau, was zu kaufen ist.",
            },
            {
              title: "Nach Gang sortiert",
              desc: "Kein Hin und Her durch den Laden.",
            },
            {
              title: "Teilen in Echtzeit",
              desc: "Wer im Laden ist, sieht die Liste live.",
            },
            {
              title: "Richtung Supermarkt-Bestellung",
              desc: "Gebaut, um die Lücken bis zur Kasse zu bringen.",
            },
          ],
        },
      ],
      related: ["Essensplanung", "Vorratsverwaltung", "Günstig kochen"],
    },
  },

  recipes: {
    fr: {
      metaTitle: "Recettes de partout",
      eyebrow: "Recettes",
      crumb: "Recettes",
      h1: "Toutes vos recettes, de partout, au même endroit",
      lede: "Copantry importe des recettes depuis n’importe quel site, photo, PDF ou texte grâce à l’IA et les garde dans une collection unique et cherchable. Chaque recette reste dans sa langue d’origine, s’adapte à votre foyer et passe directement dans votre plan et votre liste de courses.",
      sections: [
        {
          h2: "Enregistrez une recette de n’importe où en quelques secondes",
          body: "Collez un lien, photographiez une page de livre de cuisine, ou collez du texte, et Copantry en extrait ingrédients, étapes, photo et durées dans une recette propre et modifiable — quelle qu’en soit l’origine.",
          bullets: [
            {
              title: "Import depuis n’importe quelle URL",
              desc: "Blogs, sites vidéo et réseaux inclus.",
            },
            {
              title: "Import photo et PDF",
              desc: "Transformez une page de livre ou une fiche en vraie recette.",
            },
            {
              title: "S’adapte à votre table",
              desc: "Réglez les portions, les quantités suivent.",
            },
            {
              title: "Reste multilingue",
              desc: "Une recette française reste française ; l’appli parle votre langue.",
            },
          ],
        },
        {
          h2: "Des recettes qui servent vraiment à quelque chose",
          body: "Une recette enregistrée n’est pas un marque-page mort. Planifiez-la dans votre calendrier et Copantry la confronte à votre garde-manger, l’adapte et n’ajoute à votre liste que les ingrédients manquants.",
        },
      ],
      related: [
        "Planification des repas",
        "Pour les familles",
        "Pourquoi Copantry",
        "Découverte de recettes",
      ],
    },
    it: {
      metaTitle: "Ricette da ovunque",
      eyebrow: "Ricette",
      crumb: "Ricette",
      h1: "Tutte le tue ricette, da ovunque, in un solo posto",
      lede: "Copantry importa ricette da qualsiasi sito, foto, PDF o testo con l’IA e le tiene in un’unica raccolta ricercabile. Ogni ricetta resta nella lingua originale, si adatta alla tua famiglia e confluisce direttamente nel piano e nella lista della spesa.",
      sections: [
        {
          h2: "Salva una ricetta da ovunque in pochi secondi",
          body: "Incolla un link, fotografa una pagina di un libro di cucina o incolla del testo, e Copantry ne estrae ingredienti, passaggi, foto e tempi in una ricetta pulita e modificabile — da qualunque fonte provenga.",
          bullets: [
            {
              title: "Import da qualsiasi URL",
              desc: "Blog, siti video e social inclusi.",
            },
            {
              title: "Import foto e PDF",
              desc: "Trasforma una pagina di libro o una scheda in una vera ricetta.",
            },
            {
              title: "Si adatta alla tua tavola",
              desc: "Imposta le porzioni e le quantità seguono.",
            },
            {
              title: "Resta multilingue",
              desc: "Una ricetta francese resta francese; l’app parla la tua lingua.",
            },
          ],
        },
        {
          h2: "Ricette che servono davvero a qualcosa",
          body: "Una ricetta salvata non è un segnalibro morto. Pianificala nel calendario e Copantry la confronta con la dispensa, la adatta e aggiunge alla lista solo gli ingredienti mancanti.",
        },
      ],
      related: [
        "Pianificazione dei pasti",
        "Per le famiglie",
        "Perché Copantry",
        "Scoperta di ricette",
      ],
    },
    es: {
      metaTitle: "Recetas de cualquier sitio",
      eyebrow: "Recetas",
      crumb: "Recetas",
      h1: "Todas tus recetas, de cualquier sitio, en un solo lugar",
      lede: "Copantry importa recetas desde cualquier web, foto, PDF o texto con IA y las guarda en una colección única y buscable. Cada receta se queda en su idioma original, se ajusta a tu hogar y pasa directamente a tu plan y tu lista de la compra.",
      sections: [
        {
          h2: "Guarda una receta de cualquier sitio en segundos",
          body: "Pega un enlace, fotografía una página de un libro de cocina o pega texto, y Copantry extrae ingredientes, pasos, foto y tiempos en una receta limpia y editable — venga de donde venga.",
          bullets: [
            {
              title: "Importa desde cualquier URL",
              desc: "Blogs, sitios de vídeo y redes incluidos.",
            },
            {
              title: "Importa foto y PDF",
              desc: "Convierte una página de libro o una ficha en una receta real.",
            },
            {
              title: "Se ajusta a tu mesa",
              desc: "Indica las raciones y las cantidades se ajustan.",
            },
            {
              title: "Sigue siendo multilingüe",
              desc: "Una receta francesa sigue en francés; la app habla tu idioma.",
            },
          ],
        },
        {
          h2: "Recetas que de verdad sirven para algo",
          body: "Una receta guardada no es un marcador muerto. Planifícala en tu calendario y Copantry la compara con tu despensa, la ajusta y añade a tu lista solo los ingredientes que faltan.",
        },
      ],
      related: [
        "Planificación de comidas",
        "Para familias",
        "Por qué Copantry",
        "Descubrimiento de recetas",
      ],
    },
    pt: {
      metaTitle: "Receitas de qualquer lado",
      eyebrow: "Receitas",
      crumb: "Receitas",
      h1: "Todas as suas receitas, de qualquer lado, num só lugar",
      lede: "O Copantry importa receitas de qualquer site, foto, PDF ou texto com IA e mantém-nas numa coleção única e pesquisável. Cada receita fica na língua original, ajusta-se ao seu agregado e segue direto para o seu plano e lista de compras.",
      sections: [
        {
          h2: "Guarde uma receita de qualquer lado em segundos",
          body: "Cole uma ligação, fotografe a página de um livro de cozinha ou cole texto, e o Copantry extrai ingredientes, passos, foto e tempos numa receita limpa e editável — venha de onde vier.",
          bullets: [
            {
              title: "Importa de qualquer URL",
              desc: "Blogues, sites de vídeo e redes sociais incluídos.",
            },
            {
              title: "Importa foto e PDF",
              desc: "Transforme a página de um livro ou um cartão numa receita real.",
            },
            {
              title: "Ajusta-se à sua mesa",
              desc: "Defina as doses e as quantidades acompanham.",
            },
            {
              title: "Continua multilíngue",
              desc: "Uma receita francesa fica em francês; a app fala a sua língua.",
            },
          ],
        },
        {
          h2: "Receitas que servem mesmo para algo",
          body: "Uma receita guardada não é um marcador morto. Planeie-a no seu calendário e o Copantry compara-a com a sua despensa, ajusta-a e adiciona à lista só os ingredientes em falta.",
        },
      ],
      related: [
        "Planeamento de refeições",
        "Para famílias",
        "Porquê o Copantry",
        "Descoberta de receitas",
      ],
    },
    de: {
      metaTitle: "Rezepte von überall",
      eyebrow: "Rezepte",
      crumb: "Rezepte",
      h1: "Alle deine Rezepte, von überall, an einem Ort",
      lede: "Copantry importiert Rezepte von jeder Website, jedem Foto, PDF oder Textblock per KI und hält sie in einer durchsuchbaren Sammlung. Jedes Rezept bleibt in seiner Originalsprache, skaliert auf deinen Haushalt und fließt direkt in deinen Plan und deine Einkaufsliste.",
      sections: [
        {
          h2: "Speichere ein Rezept von überall in Sekunden",
          body: "Füge einen Link ein, fotografiere eine Kochbuchseite oder füge Text ein, und Copantry zieht Zutaten, Schritte, Foto und Zeiten in ein sauberes, bearbeitbares Rezept — egal, woher es stammt.",
          bullets: [
            {
              title: "Import von jeder URL",
              desc: "Blogs, Videoseiten und Social Posts inklusive.",
            },
            {
              title: "Foto- & PDF-Import",
              desc: "Mach aus einer Kochbuchseite oder Karte ein echtes Rezept.",
            },
            {
              title: "Skaliert auf deinen Tisch",
              desc: "Stell die Portionen ein, die Mengen folgen.",
            },
            {
              title: "Bleibt mehrsprachig",
              desc: "Ein französisches Rezept bleibt französisch; die App spricht deine Sprache.",
            },
          ],
        },
        {
          h2: "Rezepte, die wirklich etwas tun",
          body: "Ein gespeichertes Rezept ist kein totes Lesezeichen. Plane es in deinen Kalender, und Copantry gleicht es mit deinem Vorrat ab, skaliert es und fügt deiner Liste nur die fehlenden Zutaten hinzu.",
        },
      ],
      related: [
        "Essensplanung",
        "Für Familien",
        "Warum Copantry",
        "Rezept-Entdeckung",
      ],
    },
  },

  "recipe-discovery": {
    fr: {
      metaTitle: "Découverte de recettes",
      eyebrow: "Découverte de recettes",
      crumb: "Découverte de recettes",
      h1: "Explorez des recettes du web entier, sans quitter Copantry",
      lede: "L’onglet Découvrir de Copantry cherche dans une base choisie de sites de recettes et ouvre chaque résultat dans un lecteur propre et sans publicité, directement dans l’appli — trouvez ce qui vous plaît et importez-le dans votre collection, toujours dans sa langue d’origine.",
      sections: [
        {
          h2: "Cherchez une fois, lisez partout — sans pub, sans quinze onglets",
          body: "Tapez ce dont vous avez envie et Découvrir cherche à la fois dans une base choisie de sites de recettes. Touchez un résultat et il s’ouvre dans un lecteur sans distraction à l’intérieur de Copantry — pas de pop-up, de vidéo automatique ni de blog de recettes payant.",
          bullets: [
            {
              title: "Sources choisies",
              desc: "De vrais sites de recettes, pas des résultats de recherche au hasard.",
            },
            {
              title: "Lecteur sans distraction",
              desc: "Lisez la recette, pas la pub tout autour.",
            },
            {
              title: "Import en un geste",
              desc: "Ça vous plaît ? Amenez-la directement dans votre collection.",
            },
            {
              title: "Enregistrer pour plus tard",
              desc: "Mettez une trouvaille de côté avant même d’avoir décidé du dîner.",
            },
          ],
        },
        {
          h2: "Les trouvailles s’améliorent à l’usage",
          body: "Découvrir privilégie les sources et recettes que les gens finissent vraiment par cuisiner, et ce qui est populaire dans votre pays — les résultats s’affinent avec le temps au lieu de rester génériques.",
        },
      ],
      related: ["Recettes", "Planification des repas", "Pourquoi Copantry"],
    },
    it: {
      metaTitle: "Scoperta di ricette",
      eyebrow: "Scoperta di ricette",
      crumb: "Scoperta di ricette",
      h1: "Esplora ricette da tutto il web, senza uscire da Copantry",
      lede: "La scheda Scopri di Copantry cerca in una base selezionata di siti di ricette e apre ogni risultato in un lettore pulito e senza pubblicità direttamente nell’app — trova qualcosa che ti piace e importalo nella tua raccolta, ancora nella sua lingua originale.",
      sections: [
        {
          h2: "Cerca una volta, leggi ovunque — niente pubblicità, niente quindici schede",
          body: "Digita cosa ti va e Scopri cerca contemporaneamente in una base selezionata di siti di ricette. Tocca un risultato e si apre in un lettore senza distrazioni dentro Copantry — niente pop-up, video automatici o blog di ricette a pagamento.",
          bullets: [
            {
              title: "Fonti selezionate",
              desc: "Veri siti di ricette, non risultati di ricerca casuali.",
            },
            {
              title: "Lettore senza distrazioni",
              desc: "Leggi la ricetta, non la pubblicità intorno.",
            },
            {
              title: "Importa con un tocco",
              desc: "Ti piace? Portala direttamente nella tua raccolta.",
            },
            {
              title: "Salva per dopo",
              desc: "Metti da parte una scoperta prima ancora di decidere cosa cucinare.",
            },
          ],
        },
        {
          h2: "Le scoperte migliorano con l’uso",
          body: "Scopri privilegia fonti e ricette che le persone poi cucinano davvero, e ciò che è popolare nel tuo paese — così i risultati migliorano nel tempo invece di restare generici.",
        },
      ],
      related: ["Ricette", "Pianificazione dei pasti", "Perché Copantry"],
    },
    es: {
      metaTitle: "Descubrimiento de recetas",
      eyebrow: "Descubrimiento de recetas",
      crumb: "Descubrimiento de recetas",
      h1: "Explora recetas de toda la web, sin salir de Copantry",
      lede: "La pestaña Descubrir de Copantry busca en una base seleccionada de sitios de recetas y abre cada resultado en un lector limpio y sin anuncios dentro de la app — encuentra algo que te guste e impórtalo directamente a tu colección, todavía en su idioma original.",
      sections: [
        {
          h2: "Busca una vez, lee en cualquier sitio — sin anuncios, sin quince pestañas",
          body: "Escribe lo que te apetece y Descubrir busca a la vez en una base seleccionada de sitios de recetas. Toca un resultado y se abre en un lector sin distracciones dentro de Copantry — sin ventanas emergentes, vídeo automático ni blogs de recetas de pago.",
          bullets: [
            {
              title: "Fuentes seleccionadas",
              desc: "Sitios de recetas reales, no resultados de búsqueda al azar.",
            },
            {
              title: "Lector sin distracciones",
              desc: "Lee la receta, no el anuncio a su alrededor.",
            },
            {
              title: "Importa con un toque",
              desc: "¿Te gusta? Llévala directamente a tu colección.",
            },
            {
              title: "Guarda para más tarde",
              desc: "Guarda un hallazgo antes incluso de decidir la cena.",
            },
          ],
        },
        {
          h2: "Los hallazgos mejoran cuanto más lo usas",
          body: "Descubrir prioriza fuentes y recetas que la gente realmente acaba cocinando, y lo que es popular en tu país — así los resultados mejoran con el tiempo en lugar de quedarse genéricos.",
        },
      ],
      related: ["Recetas", "Planificación de comidas", "Por qué Copantry"],
    },
    pt: {
      metaTitle: "Descoberta de receitas",
      eyebrow: "Descoberta de receitas",
      crumb: "Descoberta de receitas",
      h1: "Explore receitas de toda a web, sem sair do Copantry",
      lede: "O separador Descobrir do Copantry procura numa base selecionada de sites de receitas e abre cada resultado num leitor limpo e sem anúncios diretamente na app — encontre algo de que goste e importe-o para a sua coleção, ainda na língua original.",
      sections: [
        {
          h2: "Procure uma vez, leia em qualquer lado — sem anúncios, sem quinze separadores",
          body: "Escreva o que lhe apetece e o Descobrir procura ao mesmo tempo numa base selecionada de sites de receitas. Toque num resultado e ele abre-se num leitor sem distrações dentro do Copantry — sem pop-ups, vídeo automático ou blogues de receitas pagos.",
          bullets: [
            {
              title: "Fontes selecionadas",
              desc: "Sites de receitas reais, não resultados de pesquisa aleatórios.",
            },
            {
              title: "Leitor sem distrações",
              desc: "Leia a receita, não o anúncio à volta.",
            },
            {
              title: "Importa com um toque",
              desc: "Gostou? Traga-a diretamente para a sua coleção.",
            },
            {
              title: "Guarde para mais tarde",
              desc: "Guarde uma descoberta antes mesmo de decidir o jantar.",
            },
          ],
        },
        {
          h2: "As descobertas melhoram quanto mais usa",
          body: "O Descobrir dá prioridade a fontes e receitas que as pessoas realmente acabam por cozinhar, e ao que é popular no seu país — assim os resultados melhoram com o tempo em vez de ficarem genéricos.",
        },
      ],
      related: ["Receitas", "Planeamento de refeições", "Porquê o Copantry"],
    },
    de: {
      metaTitle: "Rezept-Entdeckung",
      eyebrow: "Rezept-Entdeckung",
      crumb: "Rezept-Entdeckung",
      h1: "Entdecke Rezepte aus dem ganzen Web, ohne Copantry zu verlassen",
      lede: "Der Entdecken-Tab von Copantry durchsucht eine kuratierte Basis von Rezept-Websites und öffnet jedes Ergebnis in einem sauberen, werbefreien Lesemodus direkt in der App — finde etwas, das dir gefällt, und importiere es direkt in deine Sammlung, weiterhin in der Originalsprache.",
      sections: [
        {
          h2: "Einmal suchen, überall lesen — keine Werbung, keine fünfzehn Tabs",
          body: "Tippe ein, worauf du Lust hast, und Entdecken durchsucht gleichzeitig eine kuratierte Basis von Rezept-Websites. Tippe auf ein Ergebnis, und es öffnet sich in einem ablenkungsfreien Lesemodus in Copantry — keine Pop-ups, automatisch startenden Videos oder zahlungspflichtigen Rezeptblogs.",
          bullets: [
            {
              title: "Kuratierte Quellen",
              desc: "Echte Rezept-Websites, keine zufälligen Suchergebnisse.",
            },
            {
              title: "Ablenkungsfreier Lesemodus",
              desc: "Lies das Rezept, nicht die Werbung drumherum.",
            },
            {
              title: "Import mit einem Tipp",
              desc: "Gefällt es dir? Hol es direkt in deine eigene Sammlung.",
            },
            {
              title: "Für später merken",
              desc: "Merke dir einen Fund vor, bevor du dich fürs Abendessen entschieden hast.",
            },
          ],
        },
        {
          h2: "Funde werden mit der Nutzung besser",
          body: "Entdecken bevorzugt Quellen und Rezepte, die Menschen tatsächlich nachkochen, und was in deinem Land beliebt ist — so werden die Ergebnisse mit der Zeit treffsicherer, statt generisch zu bleiben.",
        },
      ],
      related: ["Rezepte", "Essensplanung", "Warum Copantry"],
    },
  },

  "wine-pairing": {
    fr: {
      metaTitle: "Accord mets et vins",
      eyebrow: "Accord mets et vins",
      crumb: "Accord mets et vins",
      h1: "Sachez quel vin ouvrir, parmi les bouteilles que vous avez déjà",
      lede: "Copantry garde une trace simple des vins de votre cave et, sur demande, suggère un accord pour le repas du soir — une bouteille que vous possédez déjà quand elle convient vraiment, plus un style général à rechercher dans tous les cas.",
      sections: [
        {
          h2: "Votre cave, pas une encyclopédie du vin",
          body: "Ajoutez une bouteille avec juste son nom — producteur, cépage, année et une note (où vous l’avez achetée, qui vous l’a offerte) sont tous optionnels. Suivez votre stock et marquez les bouteilles bues au fil de l’eau.",
          bullets: [
            {
              title: "Saisie minimale",
              desc: "Seul le nom de la bouteille est requis pour l’ajouter.",
            },
            {
              title: "Accord sur demande",
              desc: "Demandez un accord pour une recette ou tout un repas planifié — jamais automatique.",
            },
            {
              title: "Recommande ce que vous possédez",
              desc: "Suggère d’abord une bouteille de votre propre cave, quand elle convient.",
            },
            {
              title: "Toujours une solution de repli",
              desc: "Rien qui convienne dans votre cave ? Vous obtenez quand même un style à rechercher.",
            },
          ],
        },
        {
          h2: "Fonctionne pour une recette ou tout un repas planifié",
          body: "Obtenez une suggestion d’accord sur n’importe quelle page recette, ou pour tout ce qui est planifié dans un créneau du calendrier à la fois. Attachez le choix à ce repas et son stock se met à jour automatiquement une fois cuisiné.",
        },
      ],
      related: ["Recettes", "Planification des repas", "Suivi du garde-manger"],
    },
    it: {
      metaTitle: "Abbinamento vino-cibo",
      eyebrow: "Abbinamento vino-cibo",
      crumb: "Abbinamento vino-cibo",
      h1: "Sappi quale vino aprire, tra le bottiglie che hai già",
      lede: "Copantry tiene un registro semplice del vino nella tua cantina e, su richiesta, suggerisce un abbinamento per il pasto di stasera — una bottiglia che possiedi già quando è davvero adatta, più uno stile generale da cercare in ogni caso.",
      sections: [
        {
          h2: "La tua cantina, non un’enciclopedia del vino",
          body: "Aggiungi una bottiglia con solo il suo nome — produttore, vitigno, anno e una nota (dove l’hai comprata, chi te l’ha regalata) sono tutti opzionali. Tieni traccia di quante ne hai e segna le bottiglie bevute man mano.",
          bullets: [
            {
              title: "Inserimento minimo",
              desc: "Serve solo il nome della bottiglia per aggiungerla.",
            },
            {
              title: "Abbinamento su richiesta",
              desc: "Chiedi un abbinamento per una ricetta o un intero pasto pianificato — mai automatico.",
            },
            {
              title: "Consiglia ciò che possiedi",
              desc: "Suggerisce prima una bottiglia della tua cantina, quando è adatta.",
            },
            {
              title: "Sempre un ripiego",
              desc: "Niente si adatta nella tua cantina? Ottieni comunque uno stile da cercare.",
            },
          ],
        },
        {
          h2: "Funziona per una ricetta o per un intero pasto pianificato",
          body: "Ottieni un suggerimento di abbinamento su qualsiasi pagina ricetta, o per tutto ciò che è pianificato in una fascia del calendario insieme. Collega la scelta a quel pasto e la sua scorta si aggiorna automaticamente una volta cucinato.",
        },
      ],
      related: [
        "Ricette",
        "Pianificazione dei pasti",
        "Gestione della dispensa",
      ],
    },
    es: {
      metaTitle: "Maridaje de vinos",
      eyebrow: "Maridaje de vinos",
      crumb: "Maridaje de vinos",
      h1: "Sabe qué vino abrir, entre las botellas que ya tienes",
      lede: "Copantry lleva un registro sencillo del vino de tu bodega y, cuando lo pides, sugiere un maridaje para la cena de hoy — una botella que ya tienes cuando encaja de verdad, además de un estilo general que buscar en cualquier caso.",
      sections: [
        {
          h2: "Tu bodega, no una enciclopedia del vino",
          body: "Añade una botella con solo su nombre — productor, uva, año y una nota (dónde la compraste, quién te la regaló) son todos opcionales. Controla cuántas tienes y marca las botellas bebidas sobre la marcha.",
          bullets: [
            {
              title: "Alta mínima",
              desc: "Solo hace falta el nombre de la botella para añadirla.",
            },
            {
              title: "Maridaje bajo demanda",
              desc: "Pide un maridaje para una receta o una comida planificada entera — nunca automático.",
            },
            {
              title: "Recomienda lo que ya tienes",
              desc: "Sugiere primero una botella de tu propia bodega, cuando encaja.",
            },
            {
              title: "Siempre hay una alternativa",
              desc: "¿Nada encaja en tu bodega? Aun así obtienes un estilo que buscar.",
            },
          ],
        },
        {
          h2: "Funciona para una receta o para toda una comida planificada",
          body: "Obtén una sugerencia de maridaje en cualquier página de receta, o para todo lo planificado en una franja del calendario a la vez. Vincula la elección a esa comida y su stock se actualiza automáticamente en cuanto la cocines.",
        },
      ],
      related: [
        "Recetas",
        "Planificación de comidas",
        "Control de la despensa",
      ],
    },
    pt: {
      metaTitle: "Harmonização de vinhos",
      eyebrow: "Harmonização de vinhos",
      crumb: "Harmonização de vinhos",
      h1: "Saiba que vinho abrir, entre as garrafas que já tem",
      lede: "O Copantry mantém um registo simples do vinho da sua adega e, quando pedido, sugere uma harmonização para a refeição de hoje — uma garrafa que já tem quando encaixa mesmo, além de um estilo geral a procurar de qualquer forma.",
      sections: [
        {
          h2: "A sua adega, não uma enciclopédia do vinho",
          body: "Adicione uma garrafa só com o nome — produtor, casta, ano e uma nota (onde a comprou, quem lha ofereceu) são todos opcionais. Acompanhe quantas tem e marque as garrafas bebidas à medida que avança.",
          bullets: [
            {
              title: "Registo mínimo",
              desc: "Só o nome da garrafa é necessário para a adicionar.",
            },
            {
              title: "Harmonização a pedido",
              desc: "Peça uma harmonização para uma receita ou uma refeição planeada inteira — nunca automática.",
            },
            {
              title: "Recomenda o que já tem",
              desc: "Sugere primeiro uma garrafa da sua própria adega, quando encaixa.",
            },
            {
              title: "Sempre há alternativa",
              desc: "Nada encaixa na sua adega? Ainda assim obtém um estilo a procurar.",
            },
          ],
        },
        {
          h2: "Funciona para uma receita ou para uma refeição planeada inteira",
          body: "Obtenha uma sugestão de harmonização em qualquer página de receita, ou para tudo o que está planeado num horário do calendário de uma vez. Associe a escolha a essa refeição e o stock atualiza-se automaticamente assim que a cozinhar.",
        },
      ],
      related: ["Receitas", "Planeamento de refeições", "Controlo da despensa"],
    },
    de: {
      metaTitle: "Weinbegleitung",
      eyebrow: "Weinbegleitung",
      crumb: "Weinbegleitung",
      h1: "Wisse, welchen Wein du öffnest — aus den Flaschen, die du schon hast",
      lede: "Copantry führt ein einfaches Verzeichnis der Weine in deinem Keller und schlägt auf Wunsch eine Begleitung für das heutige Essen vor — eine Flasche, die du schon besitzt, wenn sie wirklich passt, plus einen allgemeinen Stil, nach dem du in jedem Fall Ausschau halten kannst.",
      sections: [
        {
          h2: "Dein Keller, keine Weinenzyklopädie",
          body: "Füge eine Flasche nur mit ihrem Namen hinzu — Erzeuger, Rebsorte, Jahrgang und eine Notiz (wo du sie gekauft hast, wer sie dir geschenkt hat) sind alle optional. Behalte den Bestand im Blick und markiere getrunkene Flaschen nach und nach.",
          bullets: [
            {
              title: "Minimale Eingabe",
              desc: "Nur der Flaschenname ist zum Hinzufügen nötig.",
            },
            {
              title: "Begleitung auf Anfrage",
              desc: "Frag nach einer Begleitung zu einem Rezept oder einer ganzen geplanten Mahlzeit — nie automatisch.",
            },
            {
              title: "Empfiehlt, was du besitzt",
              desc: "Schlägt zuerst eine Flasche aus deinem eigenen Keller vor, wenn sie passt.",
            },
            {
              title: "Immer eine Rückfalloption",
              desc: "Nichts passt in deinem Keller? Du bekommst trotzdem einen Stil, nach dem du suchen kannst.",
            },
          ],
        },
        {
          h2: "Funktioniert für ein Rezept oder eine ganze geplante Mahlzeit",
          body: "Hol dir einen Vorschlag zu jedem Rezept, oder für alles, was gleichzeitig in einem Kalenderslot geplant ist. Verknüpfe die Wahl mit dieser Mahlzeit, und ihr Bestand aktualisiert sich automatisch, sobald du gekocht hast.",
        },
      ],
      related: ["Rezepte", "Essensplanung", "Vorratsverwaltung"],
    },
  },

  "for-families": {
    fr: {
      metaTitle: "Pour les familles",
      eyebrow: "Pour les familles",
      crumb: "Pour les familles",
      h1: "Nourrissez toute la famille avec moins de gaspillage et de stress",
      lede: "Copantry garde votre famille sur un seul plan de repas et une seule liste de courses partagés, planifie autour de ce que vous avez déjà et adapte chaque recette à la taille de la famille — pour que personne ne devine ce qu’on mange et que bien moins finisse à la poubelle.",
      sections: [
        {
          h2: "Cuisinez une fois, régalez tout le monde — même les petits",
          body: "Planifiez des repas où bébé ou un tout-petit mange une version de ce que mangent les adultes, et notez sur chaque recette ce qu’il faut mettre de côté ou adapter. Vous pouvez aussi tenir un journal partagé des nouveaux aliments et allergènes introduits.",
        },
        {
          h2: "Une seule source de vérité pour le foyer",
          body: "Fini les textos « tu as pris du lait ? ».",
          bullets: [
            {
              title: "Plan et liste partagés",
              desc: "Tout le monde voit la même semaine et la même liste, en direct.",
            },
            {
              title: "Adapté à votre famille",
              desc: "Les recettes s’ajustent au nombre de convives.",
            },
            {
              title: "Moins de gaspillage, facture allégée",
              desc: "Les plans utilisent ce que vous avez avant péremption.",
            },
            {
              title: "Compatible diversification",
              desc: "Des notes pour adapter les repas aux bébés et tout-petits.",
            },
          ],
        },
      ],
      related: [
        "Planification des repas",
        "Pour les couples",
        "Cuisine économique",
      ],
    },
    it: {
      metaTitle: "Per le famiglie",
      eyebrow: "Per le famiglie",
      crumb: "Per le famiglie",
      h1: "Sfama tutta la famiglia con meno sprechi e meno stress",
      lede: "Copantry tiene la tua famiglia su un unico piano dei pasti e lista della spesa condivisi, pianifica intorno a ciò che hai già e adatta ogni ricetta alla dimensione della famiglia — così nessuno indovina cosa si mangia e molto meno finisce nella spazzatura.",
      sections: [
        {
          h2: "Cucina una volta, sfama tutti — anche i più piccoli",
          body: "Pianifica pasti in cui un neonato o un bimbo mangia una versione di ciò che mangiano gli adulti, e annota su ogni ricetta cosa mettere da parte o adattare. Puoi anche tenere un registro condiviso dei nuovi cibi e allergeni introdotti.",
        },
        {
          h2: "Un’unica fonte di verità per la famiglia",
          body: "Basta messaggi « hai preso il latte? ».",
          bullets: [
            {
              title: "Piano e lista condivisi",
              desc: "Tutti vedono la stessa settimana e la stessa lista, in diretta.",
            },
            {
              title: "Adattato alla tua famiglia",
              desc: "Le ricette si regolano sul numero di persone.",
            },
            {
              title: "Meno sprechi, bolletta più bassa",
              desc: "I piani usano ciò che hai prima della scadenza.",
            },
            {
              title: "Adatto allo svezzamento",
              desc: "Note per adattare i pasti a neonati e bambini.",
            },
          ],
        },
      ],
      related: [
        "Pianificazione dei pasti",
        "Per le coppie",
        "Cucina economica",
      ],
    },
    es: {
      metaTitle: "Para familias",
      eyebrow: "Para familias",
      crumb: "Para familias",
      h1: "Alimenta a toda la familia con menos desperdicio y menos estrés",
      lede: "Copantry mantiene a tu familia en un único plan de comidas y lista de la compra compartidos, planifica en torno a lo que ya tienes y ajusta cada receta al tamaño de la familia — para que nadie adivine qué hay de cena y mucho menos acabe en la basura.",
      sections: [
        {
          h2: "Cocina una vez, alimenta a todos — incluidos los peques",
          body: "Planifica comidas en las que un bebé o un niño pequeño come una versión de lo que comen los adultos, y anota en cada receta qué apartar o adaptar. También puedes llevar un registro compartido de los nuevos alimentos y alérgenos introducidos.",
        },
        {
          h2: "Una única fuente de verdad para el hogar",
          body: "Se acabaron los mensajes de « ¿compraste leche? ».",
          bullets: [
            {
              title: "Plan y lista compartidos",
              desc: "Todos ven la misma semana y la misma lista, en vivo.",
            },
            {
              title: "Ajustado a tu familia",
              desc: "Las recetas se adaptan a cuántos sois.",
            },
            {
              title: "Menos desperdicio, factura más baja",
              desc: "Los planes usan lo que tienes antes de que caduque.",
            },
            {
              title: "Apto para el destete",
              desc: "Notas para adaptar las comidas a bebés y niños pequeños.",
            },
          ],
        },
      ],
      related: ["Planificación de comidas", "Para parejas", "Cocina económica"],
    },
    pt: {
      metaTitle: "Para famílias",
      eyebrow: "Para famílias",
      crumb: "Para famílias",
      h1: "Alimente a família toda com menos desperdício e menos stress",
      lede: "O Copantry mantém a sua família num único plano de refeições e lista de compras partilhados, planeia em torno do que já tem e ajusta cada receita ao tamanho da família — para que ninguém adivinhe o que há para o jantar e muito menos acabe no lixo.",
      sections: [
        {
          h2: "Cozinhe uma vez, alimente todos — incluindo os mais pequenos",
          body: "Planeie refeições em que um bebé ou criança come uma versão do que comem os adultos, e tome notas em cada receita sobre o que separar ou adaptar. Também pode manter um registo partilhado dos novos alimentos e alergénios introduzidos.",
        },
        {
          h2: "Uma única fonte de verdade para a casa",
          body: "Acabaram-se as mensagens « compraste leite? ».",
          bullets: [
            {
              title: "Plano e lista partilhados",
              desc: "Todos veem a mesma semana e a mesma lista, ao vivo.",
            },
            {
              title: "Ajustado à sua família",
              desc: "As receitas adaptam-se a quantos são.",
            },
            {
              title: "Menos desperdício, conta mais baixa",
              desc: "Os planos usam o que tem antes de expirar.",
            },
            {
              title: "Adequado à introdução alimentar",
              desc: "Notas para adaptar as refeições a bebés e crianças.",
            },
          ],
        },
      ],
      related: ["Planeamento de refeições", "Para casais", "Cozinha económica"],
    },
    de: {
      metaTitle: "Für Familien",
      eyebrow: "Für Familien",
      crumb: "Für Familien",
      h1: "Versorge die ganze Familie mit weniger Abfall und weniger Stress",
      lede: "Copantry hält deine Familie auf einem geteilten Essensplan und einer geteilten Einkaufsliste, plant rund um das, was du schon hast, und skaliert jedes Rezept auf die Familiengröße — damit niemand rät, was es zu essen gibt, und viel weniger im Müll landet.",
      sections: [
        {
          h2: "Einmal kochen, alle versorgen — auch die Kleinen",
          body: "Plane Familienmahlzeiten, bei denen ein Baby oder Kleinkind eine Variante dessen isst, was die Erwachsenen essen, und notiere zu jedem Rezept, was beiseitezulegen oder anzupassen ist. Du kannst auch gemeinsam festhalten, welche neuen Lebensmittel und Allergene eingeführt wurden.",
        },
        {
          h2: "Eine einzige Quelle der Wahrheit für den Haushalt",
          body: "Keine „Hast du Milch geholt?“-Nachrichten mehr.",
          bullets: [
            {
              title: "Geteilter Plan & Liste",
              desc: "Alle sehen dieselbe Woche und Einkaufsliste, live.",
            },
            {
              title: "Auf deine Familie skaliert",
              desc: "Rezepte passen sich an, für wie viele du kochst.",
            },
            {
              title: "Weniger Abfall, niedrigere Rechnung",
              desc: "Pläne nutzen, was du hast, vor dem Ablauf.",
            },
            {
              title: "Beikost-freundlich",
              desc: "Notizen, um Mahlzeiten für Babys und Kleinkinder anzupassen.",
            },
          ],
        },
      ],
      related: ["Essensplanung", "Für Paare", "Günstig kochen"],
    },
  },

  "for-couples": {
    fr: {
      metaTitle: "Pour les couples",
      eyebrow: "Pour les couples",
      crumb: "Pour les couples",
      h1: "Planifiez les repas à deux, sans les allers-retours",
      lede: "Copantry offre aux couples une cuisine partagée : le même garde-manger, le même plan et la même liste de courses, mis à jour en temps réel. Ajoutez des recettes qui vous tentent tous les deux, voyez ce qu’il faut finir, accordez-vous sur la semaine au même endroit — et laissez la liste se construire seule.",
      sections: [
        {
          h2: "Un seul plan au lieu de deux idées qui s’opposent",
          body: "Invitez votre partenaire dans votre foyer et vous travaillez à partir du même plan. Chacun peut ajouter une recette, planifier un repas ou cocher les courses — et chacun utilise l’appli dans sa propre langue.",
        },
        {
          h2: "Partagez la charge mentale",
          body: "La question « qu’est-ce qu’on mange ? » n’est plus l’affaire d’une seule personne.",
          bullets: [
            {
              title: "Sync en temps réel",
              desc: "Les deux téléphones montrent la même cuisine instantanément.",
            },
            {
              title: "Deux langues, un foyer",
              desc: "Chacun utilise sa langue préférée.",
            },
            {
              title: "Moins de trajets et de doublons",
              desc: "Faites les courses une fois, pour exactement ce qu’il faut.",
            },
            {
              title: "Moins de gaspillage, ensemble",
              desc: "Finissez ce que vous avez acheté avant que ça se gâte.",
            },
          ],
        },
      ],
      related: [
        "Planification des repas",
        "Pour les familles",
        "Listes de courses",
      ],
    },
    it: {
      metaTitle: "Per le coppie",
      eyebrow: "Per le coppie",
      crumb: "Per le coppie",
      h1: "Pianificate i pasti insieme, senza tira e molla",
      lede: "Copantry dà alle coppie un’unica cucina: stessa dispensa, stesso piano e stessa lista della spesa, aggiornati in tempo reale. Aggiungete ricette che piacciono a entrambi, vedete cosa va consumato, mettetevi d’accordo sulla settimana in un unico posto — e lasciate che la lista si crei da sola.",
      sections: [
        {
          h2: "Un solo piano invece di due idee in conflitto",
          body: "Invita il partner nella tua famiglia e lavorate dallo stesso piano. Ognuno può aggiungere una ricetta, pianificare un pasto o spuntare la spesa — e ciascuno usa l’app nella propria lingua.",
        },
        {
          h2: "Condividete il carico mentale",
          body: "La domanda « cosa si mangia? » smette di essere il compito di una sola persona.",
          bullets: [
            {
              title: "Sync in tempo reale",
              desc: "Entrambi i telefoni mostrano la stessa cucina all’istante.",
            },
            {
              title: "Due lingue, una casa",
              desc: "Ognuno usa la lingua preferita.",
            },
            {
              title: "Meno viaggi e doppioni",
              desc: "Spesa una volta sola, per esattamente ciò che serve.",
            },
            {
              title: "Meno sprechi, insieme",
              desc: "Consumate ciò che avete comprato prima che si rovini.",
            },
          ],
        },
      ],
      related: [
        "Pianificazione dei pasti",
        "Per le famiglie",
        "Liste della spesa",
      ],
    },
    es: {
      metaTitle: "Para parejas",
      eyebrow: "Para parejas",
      crumb: "Para parejas",
      h1: "Planificad las comidas juntos, sin tanto ir y venir",
      lede: "Copantry da a las parejas una cocina compartida: la misma despensa, el mismo plan y la misma lista de la compra, actualizados en tiempo real. Añadid recetas que os apetezcan a los dos, ved qué hay que gastar, poneos de acuerdo sobre la semana en un solo lugar — y dejad que la lista se construya sola.",
      sections: [
        {
          h2: "Un solo plan en vez de dos ideas enfrentadas",
          body: "Invita a tu pareja a tu hogar y trabajáis desde el mismo plan. Cualquiera puede añadir una receta, planificar una comida o marcar la compra — y cada uno usa la app en su propio idioma.",
        },
        {
          h2: "Compartid la carga mental",
          body: "La pregunta « ¿qué cenamos? » deja de ser tarea de una sola persona.",
          bullets: [
            {
              title: "Sync en tiempo real",
              desc: "Ambos móviles muestran la misma cocina al instante.",
            },
            {
              title: "Dos idiomas, un hogar",
              desc: "Cada uno usa su idioma preferido.",
            },
            {
              title: "Menos viajes y duplicados",
              desc: "Comprad una vez justo lo que necesitáis.",
            },
            {
              title: "Menos desperdicio, juntos",
              desc: "Gastad lo que comprasteis antes de que se estropee.",
            },
          ],
        },
      ],
      related: [
        "Planificación de comidas",
        "Para familias",
        "Listas de la compra",
      ],
    },
    pt: {
      metaTitle: "Para casais",
      eyebrow: "Para casais",
      crumb: "Para casais",
      h1: "Planeiem as refeições juntos, sem o vaivém",
      lede: "O Copantry dá aos casais uma cozinha partilhada: a mesma despensa, o mesmo plano e a mesma lista de compras, atualizados em tempo real. Adicionem receitas que apeteçam aos dois, vejam o que há a gastar, combinem a semana num só lugar — e deixem a lista montar-se sozinha.",
      sections: [
        {
          h2: "Um só plano em vez de duas ideias em conflito",
          body: "Convide o seu parceiro para o seu agregado e trabalham a partir do mesmo plano. Qualquer um pode adicionar uma receita, planear uma refeição ou marcar as compras — e cada um usa a app na sua própria língua.",
        },
        {
          h2: "Partilhem a carga mental",
          body: "A pergunta « o que há para jantar? » deixa de ser tarefa de uma só pessoa.",
          bullets: [
            {
              title: "Sync em tempo real",
              desc: "Os dois telemóveis mostram a mesma cozinha de imediato.",
            },
            {
              title: "Duas línguas, uma casa",
              desc: "Cada um usa a língua que prefere.",
            },
            {
              title: "Menos idas e duplicados",
              desc: "Comprem uma vez exatamente o que precisam.",
            },
            {
              title: "Menos desperdício, juntos",
              desc: "Gastem o que compraram antes de se estragar.",
            },
          ],
        },
      ],
      related: [
        "Planeamento de refeições",
        "Para famílias",
        "Listas de compras",
      ],
    },
    de: {
      metaTitle: "Für Paare",
      eyebrow: "Für Paare",
      crumb: "Für Paare",
      h1: "Plant Mahlzeiten gemeinsam, ohne Hin und Her",
      lede: "Copantry gibt Paaren eine geteilte Küche: derselbe Vorrat, derselbe Plan und dieselbe Einkaufsliste, in Echtzeit aktualisiert. Fügt Rezepte hinzu, auf die ihr beide Lust habt, seht, was aufzubrauchen ist, einigt euch an einem Ort auf die Woche — und lasst die Liste sich selbst erstellen.",
      sections: [
        {
          h2: "Ein Plan statt zwei widersprüchlicher Ideen",
          body: "Lade deinen Partner in deinen Haushalt ein, und ihr arbeitet am selben Plan. Jeder kann ein Rezept hinzufügen, eine Mahlzeit planen oder den Einkauf abhaken — und jeder nutzt die App in seiner eigenen Sprache.",
        },
        {
          h2: "Teilt die mentale Last",
          body: "Die Frage „Was gibt’s zu essen?“ ist nicht mehr die Aufgabe nur einer Person.",
          bullets: [
            {
              title: "Sync in Echtzeit",
              desc: "Beide Handys zeigen sofort dieselbe Küche.",
            },
            {
              title: "Zwei Sprachen, ein Zuhause",
              desc: "Jeder nutzt seine bevorzugte Sprache.",
            },
            {
              title: "Weniger Wege & Doppelkäufe",
              desc: "Einmal einkaufen, genau das, was ihr braucht.",
            },
            {
              title: "Weniger Abfall, gemeinsam",
              desc: "Braucht auf, was ihr gekauft habt, bevor es schlecht wird.",
            },
          ],
        },
      ],
      related: ["Essensplanung", "Für Familien", "Einkaufslisten"],
    },
  },

  "budget-cooking": {
    fr: {
      metaTitle: "Cuisine économique",
      eyebrow: "Cuisine économique",
      crumb: "Cuisine économique",
      h1: "Dépensez moins en courses sans manger moins bien",
      lede: "Les plus grosses économies viennent de moins gaspiller et moins acheter. Copantry vous aide à cuisiner ce que vous avez déjà avant péremption et à n’acheter que ce qui manque — réduisant à la fois le gaspillage et la facture, tout en continuant à bien manger.",
      sections: [
        {
          h2: "Tirez plus de repas de ce que vous avez déjà acheté",
          body: "Copantry suggère des plats bâtis autour des ingrédients de votre cuisine, pour que la nourriture déjà payée devienne un dîner au lieu de se gâter et d’être rachetée.",
        },
        {
          h2: "Des courses plus serrées et plus malines",
          body: "En planifiant autour de votre garde-manger et sans jamais racheter ce que vous possédez, votre liste reste légère.",
          bullets: [
            {
              title: "Pas de doublons",
              desc: "Il vérifie votre garde-manger avant d’ajouter quoi que ce soit.",
            },
            {
              title: "Repas anti-gaspi",
              desc: "Transformez le « bientôt périmé » en dîner, pas en déchet.",
            },
            {
              title: "Planifier selon un budget",
              desc: "Bâtissez la semaine autour de ce que vous avez déjà.",
            },
            {
              title: "Moins de gaspillage = vraies économies",
              desc: "Le gaspillage représente des centaines d’euros par foyer et par an (ADEME).",
            },
          ],
        },
      ],
      related: [
        "Réduire le gaspillage",
        "Listes de courses",
        "Planification des repas",
      ],
    },
    it: {
      metaTitle: "Cucina economica",
      eyebrow: "Cucina economica",
      crumb: "Cucina economica",
      h1: "Spendi meno per la spesa senza mangiare peggio",
      lede: "I risparmi maggiori vengono dallo sprecare meno e comprare meno. Copantry ti aiuta a cucinare ciò che hai già prima della scadenza e a comprare solo ciò che manca — riducendo sia lo spreco sia la spesa, continuando a mangiare bene.",
      sections: [
        {
          h2: "Ricava più pasti da ciò che hai già comprato",
          body: "Copantry suggerisce piatti costruiti sugli ingredienti della tua cucina, così il cibo già pagato diventa cena invece di rovinarsi ed essere ricomprato.",
        },
        {
          h2: "Una spesa più contenuta e intelligente",
          body: "Pianificando intorno alla dispensa e senza mai ricomprare ciò che possiedi, la lista resta snella.",
          bullets: [
            {
              title: "Niente doppioni",
              desc: "Controlla la dispensa prima di aggiungere qualsiasi cosa.",
            },
            {
              title: "Pasti svuota-frigo",
              desc: "Trasforma il « sta per scadere » in cena, non in spreco.",
            },
            {
              title: "Pianifica a budget",
              desc: "Costruisci la settimana intorno a ciò che hai già.",
            },
            {
              title: "Meno sprechi = risparmi veri",
              desc: "Lo spreco vale centinaia di euro a famiglia ogni anno.",
            },
          ],
        },
      ],
      related: [
        "Ridurre gli sprechi",
        "Liste della spesa",
        "Pianificazione dei pasti",
      ],
    },
    es: {
      metaTitle: "Cocina económica",
      eyebrow: "Cocina económica",
      crumb: "Cocina económica",
      h1: "Gasta menos en la compra sin comer peor",
      lede: "El mayor ahorro viene de desperdiciar menos y comprar menos. Copantry te ayuda a cocinar lo que ya tienes antes de que caduque y a comprar solo lo que falta — recortando tanto el desperdicio como la factura, mientras sigues comiendo bien.",
      sections: [
        {
          h2: "Saca más comidas de lo que ya compraste",
          body: "Copantry sugiere platos construidos en torno a los ingredientes de tu cocina, para que la comida ya pagada se convierta en cena en vez de estropearse y volver a comprarla.",
        },
        {
          h2: "Una compra más ajustada e inteligente",
          body: "Al planificar en torno a tu despensa y no volver a comprar lo que ya tienes, tu lista se mantiene ligera.",
          bullets: [
            {
              title: "Sin compras duplicadas",
              desc: "Revisa tu despensa antes de añadir nada.",
            },
            {
              title: "Comidas de aprovechamiento",
              desc: "Convierte el « a punto de caducar » en cena, no en desperdicio.",
            },
            {
              title: "Planifica con presupuesto",
              desc: "Construye la semana en torno a lo que ya tienes.",
            },
            {
              title: "Menos desperdicio = ahorro real",
              desc: "El desperdicio supone cientos de euros por hogar al año.",
            },
          ],
        },
      ],
      related: [
        "Reducir el desperdicio",
        "Listas de la compra",
        "Planificación de comidas",
      ],
    },
    pt: {
      metaTitle: "Cozinha económica",
      eyebrow: "Cozinha económica",
      crumb: "Cozinha económica",
      h1: "Gaste menos nas compras sem comer pior",
      lede: "As maiores poupanças vêm de desperdiçar menos e comprar menos. O Copantry ajuda-o a cozinhar o que já tem antes de expirar e a comprar só o que falta — cortando tanto o desperdício como a conta, enquanto continua a comer bem.",
      sections: [
        {
          h2: "Tire mais refeições do que já comprou",
          body: "O Copantry sugere pratos construídos em torno dos ingredientes da sua cozinha, para que a comida já paga se torne jantar em vez de se estragar e voltar a ser comprada.",
        },
        {
          h2: "Compras mais contidas e inteligentes",
          body: "Ao planear em torno da sua despensa e nunca recomprar o que já tem, a sua lista mantém-se enxuta.",
          bullets: [
            {
              title: "Sem compras duplicadas",
              desc: "Verifica a sua despensa antes de adicionar fosse o que fosse.",
            },
            {
              title: "Refeições de aproveitamento",
              desc: "Transforme o « prestes a expirar » em jantar, não em desperdício.",
            },
            {
              title: "Planeie com orçamento",
              desc: "Construa a semana em torno do que já tem.",
            },
            {
              title: "Menos desperdício = poupança real",
              desc: "O desperdício vale centenas de euros por agregado por ano.",
            },
          ],
        },
      ],
      related: [
        "Reduzir o desperdício",
        "Listas de compras",
        "Planeamento de refeições",
      ],
    },
    de: {
      metaTitle: "Günstig kochen",
      eyebrow: "Günstig kochen",
      crumb: "Günstig kochen",
      h1: "Gib weniger für Lebensmittel aus, ohne schlechter zu essen",
      lede: "Die größten Ersparnisse kommen davon, weniger zu verschwenden und weniger zu kaufen. Copantry hilft dir, das schon Vorhandene vor dem Ablauf zu kochen und nur die Lücken zu kaufen — das senkt sowohl den Abfall als auch die Rechnung, während du weiter gut isst.",
      sections: [
        {
          h2: "Hol mehr Mahlzeiten aus dem, was du schon gekauft hast",
          body: "Copantry schlägt Gerichte rund um die Zutaten in deiner Küche vor, damit aus bereits bezahltem Essen ein Abendessen wird, statt schlecht zu werden und ersetzt zu werden.",
        },
        {
          h2: "Ein knapperer, klügerer Einkauf",
          body: "Wenn du rund um deinen Vorrat planst und nie nachkaufst, was du besitzt, bleibt deine Liste schlank.",
          bullets: [
            {
              title: "Keine Doppelkäufe",
              desc: "Prüft deinen Vorrat, bevor es etwas hinzufügt.",
            },
            {
              title: "Reste-Mahlzeiten",
              desc: "Mach aus „bald abgelaufen“ ein Abendessen, keinen Abfall.",
            },
            {
              title: "Nach Budget planen",
              desc: "Bau die Woche rund um das, was du schon hast.",
            },
            {
              title: "Weniger Abfall = echte Ersparnis",
              desc: "Verschwendung kostet Haushalte jährlich hunderte Euro.",
            },
          ],
        },
      ],
      related: ["Lebensmittel retten", "Einkaufslisten", "Essensplanung"],
    },
  },
};

// ── FAQ translations (display + per-locale FAQPage JSON-LD) ──────────────────
export const FAQ_TX = {
  mealPlanning: {
    fr: [
      {
        q: "Comment planifier les repas de la semaine ?",
        a: "Dans Copantry, vous glissez des recettes sur un calendrier hebdomadaire, ou vous le laissez suggérer un plan bâti autour de ce que vous avez déjà. Une fois la semaine planifiée, Copantry génère une liste de courses limitée aux ingrédients manquants.",
      },
      {
        q: "L’appli peut-elle planifier ma semaine de dîners ?",
        a: "Oui. Copantry peut générer une semaine complète de repas automatiquement, en priorisant les aliments bientôt périmés et en variant pour ne pas manger deux fois la même chose. Vous gardez la main et changez n’importe quel repas.",
      },
      {
        q: "Comment planifier autour de ce que j’ai déjà ?",
        a: "Copantry lit votre garde-manger et bâtit les plans autour, pour que la nourriture que vous possédez soit utilisée avant de se gâter. Vous n’achetez que ce qui manque.",
      },
      {
        q: "Comment faire un plan que je tiendrai vraiment ?",
        a: "Un plan tient quand il colle à votre vraie vie et à votre vrai placard. Copantry planifie autour de ce que vous avez, de la saison et du temps disponible — et garde tout le foyer sur la même page.",
      },
    ],
    it: [
      {
        q: "Come pianifico i pasti della settimana?",
        a: "In Copantry trascini le ricette su un calendario settimanale, oppure lo lasci suggerire un piano costruito intorno a ciò che hai già. Pianificata la settimana, Copantry genera una lista della spesa solo con gli ingredienti mancanti.",
      },
      {
        q: "L’app può pianificare la mia settimana di cene?",
        a: "Sì. Copantry può generare un’intera settimana di pasti in automatico, dando priorità agli alimenti in scadenza e variando per non mangiare due volte la stessa cosa. Mantieni il controllo e cambi qualsiasi pasto.",
      },
      {
        q: "Come pianifico intorno a ciò che ho già?",
        a: "Copantry legge la tua dispensa e costruisce i piani su di essa, così il cibo che possiedi viene usato prima di rovinarsi. Compri solo ciò che manca.",
      },
      {
        q: "Come faccio un piano che seguirò davvero?",
        a: "I piani funzionano quando si adattano alla tua vita reale e alla tua dispensa reale. Copantry pianifica intorno a ciò che hai, alla stagione e al tempo a disposizione — e tiene tutta la famiglia allineata.",
      },
    ],
    es: [
      {
        q: "¿Cómo planifico las comidas de la semana?",
        a: "En Copantry arrastras recetas a un calendario semanal, o dejas que te sugiera un plan construido en torno a lo que ya tienes. Una vez planificada la semana, Copantry genera una lista de la compra solo con los ingredientes que faltan.",
      },
      {
        q: "¿La app puede planificar mi semana de cenas?",
        a: "Sí. Copantry puede generar una semana completa de comidas automáticamente, priorizando los alimentos a punto de caducar y aportando variedad para no comer dos veces lo mismo. Mantienes el control y cambias cualquier comida.",
      },
      {
        q: "¿Cómo planifico en torno a lo que ya tengo?",
        a: "Copantry lee tu despensa y construye los planes a partir de ella, para que la comida que ya posees se use antes de estropearse. Solo compras lo que falta.",
      },
      {
        q: "¿Cómo hago un plan que de verdad cumpliré?",
        a: "Los planes funcionan cuando encajan con tu vida real y tu despensa real. Copantry planifica en torno a lo que tienes, lo de temporada y el tiempo que tienes — y mantiene a todo el hogar al día.",
      },
    ],
    pt: [
      {
        q: "Como planeio as refeições da semana?",
        a: "No Copantry arrasta receitas para um calendário semanal, ou deixa-o sugerir um plano construído em torno do que já tem. Planeada a semana, o Copantry gera uma lista de compras só com os ingredientes em falta.",
      },
      {
        q: "A app pode planear a minha semana de jantares?",
        a: "Sim. O Copantry pode gerar uma semana inteira de refeições automaticamente, dando prioridade aos alimentos prestes a expirar e variando para não comer duas vezes o mesmo. Mantém o controlo e troca qualquer refeição.",
      },
      {
        q: "Como planeio em torno do que já tenho?",
        a: "O Copantry lê a sua despensa e constrói os planos a partir dela, para que a comida que possui seja usada antes de se estragar. Só compra o que falta.",
      },
      {
        q: "Como faço um plano que vou mesmo cumprir?",
        a: "Os planos resultam quando encaixam na sua vida real e na sua despensa real. O Copantry planeia em torno do que tem, do que é da época e do tempo que tem — e mantém todo o agregado a par.",
      },
    ],
    de: [
      {
        q: "Wie plane ich die Mahlzeiten für die Woche?",
        a: "In Copantry ziehst du Rezepte auf einen Wochenkalender oder lässt dir einen Plan rund um das vorschlagen, was du schon hast. Ist die Woche geplant, erstellt Copantry eine Einkaufsliste nur mit den fehlenden Zutaten.",
      },
      {
        q: "Kann die App meine Woche an Abendessen planen?",
        a: "Ja. Copantry kann eine ganze Woche automatisch erzeugen, bevorzugt bald ablaufende Lebensmittel und sorgt für Abwechslung, damit du nicht zweimal dasselbe isst. Du behältst die Kontrolle und tauschst jede Mahlzeit.",
      },
      {
        q: "Wie plane ich rund um das, was ich schon habe?",
        a: "Copantry liest deinen Vorrat und baut die Pläne darauf auf, damit das Vorhandene vor dem Verderben genutzt wird. Du kaufst nur die Lücken.",
      },
      {
        q: "Wie mache ich einen Plan, den ich wirklich einhalte?",
        a: "Pläne halten, wenn sie zu deinem echten Leben und Schrank passen. Copantry plant rund um das Vorhandene, die Saison und deine Zeit — und hält den ganzen Haushalt auf demselben Stand.",
      },
    ],
  },

  pantryTracking: {
    fr: [
      {
        q: "Comment savoir ce qu’il y a dans ma cuisine ?",
        a: "Copantry tient un inventaire en direct de votre garde-manger, frigo et congélateur. Ajoutez des articles par photo, voix, ticket ou texte — et tout est trié par péremption pour savoir quoi utiliser ensuite.",
      },
      {
        q: "Puis-je scanner un ticket ou une photo pour remplir mon garde-manger ?",
        a: "Oui. Copantry utilise l’IA pour lire une photo de vos courses, un ticket ou une liste tapée et ajoute chaque article automatiquement, sans tout saisir un par un.",
      },
      {
        q: "Comment suivre les dates de péremption ?",
        a: "Ajoutez un article et Copantry estime une date limite sensée, que vous pouvez ajuster. Votre garde-manger est toujours trié du plus proche au plus lointain, pour ne rien oublier au fond du frigo.",
      },
      {
        q: "Comment savoir ce qui me manque ?",
        a: "Comme Copantry déduit les ingrédients à mesure que vous cuisinez, votre garde-manger reste juste — il sait ce qui manque et l’ajoute automatiquement à votre prochaine liste.",
      },
    ],
    it: [
      {
        q: "Come tengo traccia di cosa c’è in cucina?",
        a: "Copantry mantiene un inventario in tempo reale di dispensa, frigo e freezer. Aggiungi articoli con foto, voce, scontrino o testo — e tutto è ordinato per scadenza, così sai sempre cosa usare.",
      },
      {
        q: "Posso scansionare uno scontrino o una foto per la dispensa?",
        a: "Sì. Copantry usa l’IA per leggere una foto della spesa, uno scontrino o un elenco scritto e aggiunge ogni articolo in automatico, senza digitarli uno a uno.",
      },
      {
        q: "Come tengo traccia delle scadenze?",
        a: "Aggiungi un articolo e Copantry stima una scadenza sensata, modificabile. La dispensa è sempre ordinata dal più vicino, così nulla viene dimenticato in fondo al frigo.",
      },
      {
        q: "Come so cosa è finito?",
        a: "Poiché Copantry sottrae gli ingredienti mentre cucini, la dispensa resta precisa — sa cosa scarseggia e lo aggiunge da solo alla prossima lista.",
      },
    ],
    es: [
      {
        q: "¿Cómo controlo qué hay en mi cocina?",
        a: "Copantry mantiene un inventario en vivo de tu despensa, nevera y congelador. Añade artículos por foto, voz, ticket o texto — y todo se ordena por caducidad, así sabes qué usar antes.",
      },
      {
        q: "¿Puedo escanear un ticket o una foto para la despensa?",
        a: "Sí. Copantry usa IA para leer una foto de la compra, un ticket o una lista escrita y añade cada artículo automáticamente, sin teclearlos uno a uno.",
      },
      {
        q: "¿Cómo controlo las fechas de caducidad?",
        a: "Añade un artículo y Copantry estima una fecha sensata, que puedes ajustar. Tu despensa siempre está ordenada por lo más próximo, para no olvidar nada al fondo de la nevera.",
      },
      {
        q: "¿Cómo sé qué se me ha acabado?",
        a: "Como Copantry resta los ingredientes a medida que cocinas, tu despensa se mantiene exacta — sabe qué te falta y lo añade solo a tu próxima lista.",
      },
    ],
    pt: [
      {
        q: "Como controlo o que há na minha cozinha?",
        a: "O Copantry mantém um inventário ao vivo da sua despensa, frigorífico e congelador. Adicione itens por foto, voz, talão ou texto — e tudo é ordenado por validade, para saber o que usar a seguir.",
      },
      {
        q: "Posso ler um talão ou foto para a despensa?",
        a: "Sim. O Copantry usa IA para ler uma foto das compras, um talão ou uma lista escrita e adiciona cada item automaticamente, sem os escrever um a um.",
      },
      {
        q: "Como controlo as datas de validade?",
        a: "Adicione um item e o Copantry estima uma validade sensata, ajustável. A despensa está sempre ordenada pelos mais próximos, para nada ser esquecido no fundo do frigorífico.",
      },
      {
        q: "Como sei o que acabou?",
        a: "Como o Copantry subtrai os ingredientes à medida que cozinha, a despensa mantém-se exata — sabe o que está a faltar e adiciona-o sozinho à próxima lista.",
      },
    ],
    de: [
      {
        q: "Wie behalte ich den Überblick über meine Küche?",
        a: "Copantry führt ein Live-Inventar von Vorrat, Kühl- und Gefrierschrank. Füge Artikel per Foto, Sprache, Kassenbon oder Text hinzu — alles nach Ablauf sortiert, damit du weißt, was als Nächstes dran ist.",
      },
      {
        q: "Kann ich einen Bon oder ein Foto scannen, um den Vorrat zu füllen?",
        a: "Ja. Copantry liest per KI ein Foto deines Einkaufs, einen Bon oder eine getippte Liste und fügt jeden Artikel automatisch hinzu — kein Eintippen Stück für Stück.",
      },
      {
        q: "Wie verfolge ich Ablaufdaten?",
        a: "Füge einen Artikel hinzu, und Copantry schätzt ein sinnvolles Datum, das du anpassen kannst. Dein Vorrat ist immer nach dem Nächsten sortiert, damit nichts hinten im Kühlschrank vergessen wird.",
      },
      {
        q: "Woher weiß ich, was ausgegangen ist?",
        a: "Weil Copantry beim Kochen die Zutaten abzieht, bleibt dein Vorrat korrekt — er weiß, was knapp wird, und fügt es automatisch der nächsten Liste hinzu.",
      },
    ],
  },

  shoppingLists: {
    fr: [
      {
        q: "Comment créer une liste de courses depuis mon plan de repas, automatiquement ?",
        a: "Planifiez vos repas dans Copantry et il calcule la différence entre ce dont ces repas ont besoin et ce que vous avez déjà, puis bâtit une liste limitée aux articles manquants.",
      },
      {
        q: "Comment arrêter d’acheter ce que j’ai déjà ?",
        a: "Copantry vérifie votre garde-manger avant d’ajouter quoi que ce soit, donc il ne vous dit jamais d’acheter un produit que vous possédez déjà. Cela élimine à soi seul la plupart des doublons.",
      },
      {
        q: "Comment organiser ma liste par rayon de supermarché ?",
        a: "Copantry regroupe votre liste par rayon pour traverser le magasin en une fois plutôt que de revenir sur vos pas. Tout le foyer voit la même liste et les articles se cochent en temps réel.",
      },
      {
        q: "Qu’est-ce que je dois acheter cette semaine ?",
        a: "Copantry y répond pour vous : il compare vos repas planifiés à votre garde-manger actuel et montre exactement ce qui manque — ni plus, ni moins.",
      },
    ],
    it: [
      {
        q: "Come creo una lista della spesa dal piano dei pasti, in automatico?",
        a: "Pianifica i pasti in Copantry e calcola la differenza tra ciò che servono e ciò che hai già, poi crea una lista solo con gli articoli mancanti.",
      },
      {
        q: "Come smetto di comprare ciò che ho già?",
        a: "Copantry controlla la dispensa prima di aggiungere qualcosa, quindi non ti dice mai di comprare un prodotto che possiedi già. Questo da solo elimina la maggior parte dei doppioni.",
      },
      {
        q: "Come organizzo la lista per reparto del supermercato?",
        a: "Copantry raggruppa la lista per reparto per attraversare il negozio in un colpo solo invece di tornare indietro. Tutta la famiglia vede la stessa lista e gli articoli si spuntano in tempo reale.",
      },
      {
        q: "Cosa devo comprare questa settimana?",
        a: "Copantry risponde per te: confronta i pasti pianificati con la dispensa attuale e mostra esattamente cosa manca — né più né meno.",
      },
    ],
    es: [
      {
        q: "¿Cómo creo una lista de la compra desde mi plan, automáticamente?",
        a: "Planifica tus comidas en Copantry y calcula la diferencia entre lo que necesitan y lo que ya tienes, y luego crea una lista solo con los artículos que faltan.",
      },
      {
        q: "¿Cómo dejo de comprar lo que ya tengo?",
        a: "Copantry revisa tu despensa antes de añadir nada, así que nunca te dice que compres algo que ya posees. Eso por sí solo elimina la mayoría de los duplicados.",
      },
      {
        q: "¿Cómo organizo mi lista por pasillo de supermercado?",
        a: "Copantry agrupa tu lista por pasillo para recorrer la tienda de una pasada en vez de volver atrás. Todo el hogar ve la misma lista y los artículos se marcan en tiempo real.",
      },
      {
        q: "¿Qué tengo que comprar esta semana?",
        a: "Copantry te lo responde: compara tus comidas planificadas con tu despensa actual y muestra exactamente lo que falta — ni más ni menos.",
      },
    ],
    pt: [
      {
        q: "Como crio uma lista de compras a partir do meu plano, automaticamente?",
        a: "Planeie as refeições no Copantry e ele calcula a diferença entre o que precisam e o que já tem, e depois cria uma lista só com os itens em falta.",
      },
      {
        q: "Como deixo de comprar o que já tenho?",
        a: "O Copantry verifica a sua despensa antes de adicionar fosse o que fosse, por isso nunca lhe diz para comprar algo que já possui. Só isso elimina a maioria dos duplicados.",
      },
      {
        q: "Como organizo a lista por corredor de supermercado?",
        a: "O Copantry agrupa a sua lista por corredor para atravessar a loja de uma vez em vez de voltar para trás. Todo o agregado vê a mesma lista e os itens marcam-se em tempo real.",
      },
      {
        q: "O que preciso de comprar esta semana?",
        a: "O Copantry responde por si: compara as refeições planeadas com a despensa atual e mostra exatamente o que falta — nem mais, nem menos.",
      },
    ],
    de: [
      {
        q: "Wie erstelle ich automatisch eine Einkaufsliste aus meinem Plan?",
        a: "Plane deine Mahlzeiten in Copantry, und es ermittelt die Differenz zwischen dem, was sie brauchen, und dem, was du schon hast, und erstellt dann eine Liste nur mit den fehlenden Artikeln.",
      },
      {
        q: "Wie höre ich auf, zu kaufen, was ich schon habe?",
        a: "Copantry prüft deinen Vorrat, bevor es etwas hinzufügt, und sagt dir daher nie, etwas zu kaufen, das du bereits besitzt. Allein das beseitigt die meisten Doppelkäufe.",
      },
      {
        q: "Wie ordne ich meine Liste nach Supermarktgang?",
        a: "Copantry gruppiert deine Liste nach Gang, damit du den Laden in einem Durchgang schaffst, statt umzukehren. Der ganze Haushalt sieht dieselbe Liste, und Artikel werden in Echtzeit abgehakt.",
      },
      {
        q: "Was muss ich diese Woche kaufen?",
        a: "Copantry beantwortet das für dich: Es vergleicht deine geplanten Mahlzeiten mit deinem aktuellen Vorrat und zeigt genau, was fehlt — nicht mehr und nicht weniger.",
      },
    ],
  },

  recipes: {
    fr: [
      {
        q: "Comment enregistrer des recettes de n’importe quel site au même endroit ?",
        a: "Collez un lien dans Copantry et il importe la recette complète — ingrédients, étapes, photo et durées — dans votre collection, quel que soit le site d’origine. Tout vit dans un seul endroit cherchable.",
      },
      {
        q: "Comment importer une recette depuis une photo ou un livre de cuisine ?",
        a: "Photographiez une page de livre, une fiche recette ou une capture d’écran et Copantry la lit avec l’IA et l’enregistre comme une vraie recette modifiable. Vous pouvez aussi importer depuis du texte ou un PDF.",
      },
      {
        q: "Comment adapter une recette à plus ou moins de personnes ?",
        a: "Indiquez pour combien de personnes vous cuisinez et Copantry ajuste les quantités d’ingrédients, puis en tient compte dans votre liste de courses.",
      },
      {
        q: "Puis-je garder des recettes dans différentes langues ?",
        a: "Oui. Copantry garde chaque recette dans sa langue d’origine : une recette importée en français reste en français tandis que le reste de l’appli parle votre langue. C’est pensé pour les foyers multilingues.",
      },
    ],
    it: [
      {
        q: "Come salvo ricette da qualsiasi sito in un solo posto?",
        a: "Incolla un link in Copantry e importa la ricetta completa — ingredienti, passaggi, foto e tempi — nella tua raccolta, da qualunque sito provenga. Tutto vive in un unico posto ricercabile.",
      },
      {
        q: "Come importo una ricetta da una foto o da un libro di cucina?",
        a: "Fotografa una pagina di un libro, una scheda o uno screenshot e Copantry la legge con l’IA e la salva come una vera ricetta modificabile. Puoi anche importare da testo o PDF.",
      },
      {
        q: "Come adatto una ricetta a più o meno persone?",
        a: "Indica per quante persone cucini e Copantry regola le quantità degli ingredienti, poi ne tiene conto nella lista della spesa.",
      },
      {
        q: "Posso tenere ricette in lingue diverse?",
        a: "Sì. Copantry tiene ogni ricetta nella lingua originale: una ricetta importata in francese resta in francese mentre il resto dell’app parla la tua lingua. È pensata per le famiglie multilingue.",
      },
    ],
    es: [
      {
        q: "¿Cómo guardo recetas de cualquier web en un solo lugar?",
        a: "Pega un enlace en Copantry e importa la receta completa — ingredientes, pasos, foto y tiempos — en tu colección, venga de la web que venga. Todo vive en un único lugar buscable.",
      },
      {
        q: "¿Cómo importo una receta desde una foto o un libro de cocina?",
        a: "Haz una foto de una página de libro, una ficha o una captura y Copantry la lee con IA y la guarda como una receta real y editable. También puedes importar desde texto o un PDF.",
      },
      {
        q: "¿Cómo ajusto una receta para más o menos personas?",
        a: "Indica para cuántas personas cocinas y Copantry ajusta las cantidades de los ingredientes, y luego lo tiene en cuenta en tu lista de la compra.",
      },
      {
        q: "¿Puedo guardar recetas en distintos idiomas?",
        a: "Sí. Copantry mantiene cada receta en su idioma original: una receta importada en francés sigue en francés mientras el resto de la app habla tu idioma. Está pensada para hogares multilingües.",
      },
    ],
    pt: [
      {
        q: "Como guardo receitas de qualquer site num só lugar?",
        a: "Cole uma ligação no Copantry e ele importa a receita completa — ingredientes, passos, foto e tempos — para a sua coleção, venha do site que vier. Tudo vive num único lugar pesquisável.",
      },
      {
        q: "Como importo uma receita de uma foto ou de um livro de cozinha?",
        a: "Fotografe a página de um livro, um cartão ou uma captura e o Copantry lê com IA e guarda como uma receita real e editável. Também pode importar de texto ou PDF.",
      },
      {
        q: "Como ajusto uma receita para mais ou menos pessoas?",
        a: "Indique para quantas pessoas cozinha e o Copantry ajusta as quantidades dos ingredientes, depois tem isso em conta na sua lista de compras.",
      },
      {
        q: "Posso guardar receitas em línguas diferentes?",
        a: "Sim. O Copantry mantém cada receita na língua original: uma receita importada em francês fica em francês enquanto o resto da app fala a sua língua. Foi pensado para agregados multilíngues.",
      },
    ],
    de: [
      {
        q: "Wie speichere ich Rezepte von jeder Website an einem Ort?",
        a: "Füge einen Link in Copantry ein, und es importiert das vollständige Rezept — Zutaten, Schritte, Foto und Zeiten — in deine Sammlung, egal von welcher Seite. Alles liegt an einem durchsuchbaren Ort.",
      },
      {
        q: "Wie importiere ich ein Rezept von einem Foto oder Kochbuch?",
        a: "Fotografiere eine Kochbuchseite, eine Karte oder einen Screenshot, und Copantry liest es per KI und speichert es als echtes, bearbeitbares Rezept. Du kannst auch aus Text oder PDF importieren.",
      },
      {
        q: "Wie skaliere ich ein Rezept für mehr oder weniger Personen?",
        a: "Stell ein, für wie viele Personen du kochst, und Copantry passt die Zutatenmengen an und berücksichtigt das dann in deiner Einkaufsliste.",
      },
      {
        q: "Kann ich Rezepte in verschiedenen Sprachen behalten?",
        a: "Ja. Copantry hält jedes Rezept in seiner Originalsprache: Ein auf Französisch importiertes Rezept bleibt französisch, während der Rest der App deine Sprache spricht. Es ist für mehrsprachige Haushalte gemacht.",
      },
    ],
  },

  forFamilies: {
    fr: [
      {
        q: "Comment cuisiner pour un bébé et des adultes à partir du même repas ?",
        a: "Copantry vous aide à planifier des repas où bébé ou un tout-petit mange une version de ce que mangent les adultes, pour cuisiner une seule fois. Vous pouvez noter sur chaque recette ce qu’il faut mettre de côté ou adapter pour les petits.",
      },
      {
        q: "Comment suivre les aliments que mon bébé a goûtés ?",
        a: "Vous pouvez utiliser les notes de recette et votre historique de cuisson dans Copantry pour tenir un journal des nouveaux aliments et allergènes introduits, pour que tout le foyer ait une seule référence.",
      },
      {
        q: "Comment planifier les repas pour une famille ?",
        a: "Copantry garde toute la famille sur un seul plan et une seule liste partagés, planifie autour de ce que vous avez déjà et adapte les recettes à la taille de la famille, pour que personne ne devine ce qu’on mange.",
      },
    ],
    it: [
      {
        q: "Come cucino per un neonato e per gli adulti dallo stesso pasto?",
        a: "Copantry ti aiuta a pianificare pasti in cui un neonato o un bimbo mangia una versione di ciò che mangiano gli adulti, così cucini una volta sola. Puoi annotare su ogni ricetta cosa mettere da parte o adattare per i piccoli.",
      },
      {
        q: "Come tengo traccia dei cibi che il mio bambino ha provato?",
        a: "Puoi usare le note delle ricette e lo storico di cottura in Copantry per registrare i nuovi cibi e allergeni introdotti, così tutta la famiglia ha un unico riferimento.",
      },
      {
        q: "Come pianifico i pasti per una famiglia?",
        a: "Copantry tiene tutta la famiglia su un unico piano e lista condivisi, pianifica intorno a ciò che hai già e adatta le ricette alla dimensione della famiglia, così nessuno indovina cosa si mangia.",
      },
    ],
    es: [
      {
        q: "¿Cómo cocino para un bebé y adultos a partir de la misma comida?",
        a: "Copantry te ayuda a planificar comidas donde un bebé o niño pequeño come una versión de lo que comen los adultos, así cocinas una vez. Puedes anotar en cada receta qué apartar o adaptar para los peques.",
      },
      {
        q: "¿Cómo registro qué alimentos ha probado mi bebé?",
        a: "Puedes usar las notas de receta y tu historial de cocción en Copantry para llevar un registro de los nuevos alimentos y alérgenos introducidos, así todo el hogar tiene una única referencia.",
      },
      {
        q: "¿Cómo planifico las comidas para una familia?",
        a: "Copantry mantiene a toda la familia en un único plan y lista compartidos, planifica en torno a lo que ya tienes y ajusta las recetas al tamaño de la familia, para que nadie adivine qué hay de cena.",
      },
    ],
    pt: [
      {
        q: "Como cozinho para um bebé e adultos a partir da mesma refeição?",
        a: "O Copantry ajuda-o a planear refeições em que um bebé ou criança come uma versão do que comem os adultos, para cozinhar uma só vez. Pode anotar em cada receita o que separar ou adaptar para os mais pequenos.",
      },
      {
        q: "Como registo que alimentos o meu bebé já provou?",
        a: "Pode usar as notas de receita e o seu histórico de confeção no Copantry para manter um registo dos novos alimentos e alergénios introduzidos, para que todo o agregado tenha uma única referência.",
      },
      {
        q: "Como planeio as refeições para uma família?",
        a: "O Copantry mantém a família toda num único plano e lista partilhados, planeia em torno do que já tem e ajusta as receitas ao tamanho da família, para que ninguém adivinhe o que há para o jantar.",
      },
    ],
    de: [
      {
        q: "Wie koche ich für ein Baby und Erwachsene aus derselben Mahlzeit?",
        a: "Copantry hilft dir, Mahlzeiten zu planen, bei denen ein Baby oder Kleinkind eine Variante dessen isst, was die Erwachsenen essen — so kochst du nur einmal. Du kannst zu jedem Rezept notieren, was beiseitezulegen oder anzupassen ist.",
      },
      {
        q: "Wie verfolge ich, welche Lebensmittel mein Baby probiert hat?",
        a: "Du kannst Rezeptnotizen und deinen Kochverlauf in Copantry nutzen, um neu eingeführte Lebensmittel und Allergene festzuhalten, damit der ganze Haushalt eine gemeinsame Referenz hat.",
      },
      {
        q: "Wie plane ich die Mahlzeiten für eine Familie?",
        a: "Copantry hält die ganze Familie auf einem geteilten Plan und einer Liste, plant rund um das Vorhandene und skaliert Rezepte auf die Familiengröße, damit niemand rät, was es zu essen gibt.",
      },
    ],
  },

  cookTogether: {
    fr: [
      {
        q: "Comment partager un plan de repas et une liste de courses avec mon partenaire ?",
        a: "Invitez votre partenaire dans votre foyer Copantry et vous voyez tous les deux le même garde-manger, plan et liste en temps réel. Chacun peut ajouter une recette, planifier un repas ou cocher les courses.",
      },
      {
        q: "Comment planifier les repas ensemble sans se disputer ?",
        a: "Copantry vous donne un seul plan partagé au lieu de deux idées opposées. Vous pouvez tous les deux ajouter des recettes qui vous tentent, voir ce qui va périmer et vous accorder sur la semaine au même endroit — puis la liste se construit seule.",
      },
      {
        q: "Pouvons-nous planifier les repas en deux langues différentes ?",
        a: "Oui. Chacun peut utiliser Copantry dans sa propre langue tout en partageant le même foyer, et les recettes restent dans la langue où elles ont été écrites.",
      },
    ],
    it: [
      {
        q: "Come condivido un piano dei pasti e una lista con il mio partner?",
        a: "Invita il partner nella tua famiglia Copantry e vedete entrambi la stessa dispensa, lo stesso piano e la stessa lista in tempo reale. Ognuno può aggiungere una ricetta, pianificare un pasto o spuntare la spesa.",
      },
      {
        q: "Come pianifichiamo i pasti insieme senza litigare?",
        a: "Copantry vi dà un unico piano condiviso invece di due idee in conflitto. Potete entrambi aggiungere ricette che vi piacciono, vedere cosa sta per scadere e accordarvi sulla settimana in un solo posto — poi la lista si crea da sola.",
      },
      {
        q: "Possiamo pianificare i pasti in due lingue diverse?",
        a: "Sì. Ognuno può usare Copantry nella propria lingua pur condividendo la stessa famiglia, e le ricette restano nella lingua in cui sono state scritte.",
      },
    ],
    es: [
      {
        q: "¿Cómo compartimos un plan de comidas y una lista mi pareja y yo?",
        a: "Invita a tu pareja a tu hogar de Copantry y ambos veis la misma despensa, plan y lista en tiempo real. Cualquiera puede añadir una receta, planificar una comida o marcar la compra.",
      },
      {
        q: "¿Cómo planificamos las comidas juntos sin discutir?",
        a: "Copantry os da un único plan compartido en vez de dos ideas enfrentadas. Ambos podéis añadir recetas que os apetezcan, ver qué está por caducar y poneros de acuerdo sobre la semana en un solo lugar — luego la lista se construye sola.",
      },
      {
        q: "¿Podemos planificar las comidas en dos idiomas distintos?",
        a: "Sí. Cada uno puede usar Copantry en su propio idioma compartiendo el mismo hogar, y las recetas se quedan en el idioma en que se escribieron.",
      },
    ],
    pt: [
      {
        q: "Como partilhamos um plano de refeições e uma lista, eu e o meu parceiro?",
        a: "Convide o seu parceiro para o seu agregado Copantry e ambos veem a mesma despensa, plano e lista em tempo real. Qualquer um pode adicionar uma receita, planear uma refeição ou marcar as compras.",
      },
      {
        q: "Como planeamos as refeições juntos sem discutir?",
        a: "O Copantry dá-vos um único plano partilhado em vez de duas ideias em conflito. Ambos podem adicionar receitas que apeteçam, ver o que está prestes a expirar e combinar a semana num só lugar — depois a lista monta-se sozinha.",
      },
      {
        q: "Podemos planear as refeições em duas línguas diferentes?",
        a: "Sim. Cada um pode usar o Copantry na sua própria língua partilhando o mesmo agregado, e as receitas ficam na língua em que foram escritas.",
      },
    ],
    de: [
      {
        q: "Wie teilen mein Partner und ich einen Essensplan und eine Einkaufsliste?",
        a: "Lade deinen Partner in deinen Copantry-Haushalt ein, und ihr seht beide denselben Vorrat, Plan und dieselbe Liste in Echtzeit. Jeder kann ein Rezept hinzufügen, eine Mahlzeit planen oder den Einkauf abhaken.",
      },
      {
        q: "Wie planen wir Mahlzeiten gemeinsam, ohne zu streiten?",
        a: "Copantry gibt euch einen geteilten Plan statt zwei widersprüchlicher Ideen. Ihr könnt beide Rezepte hinzufügen, sehen, was bald abläuft, und euch an einem Ort auf die Woche einigen — dann erstellt sich die Liste selbst.",
      },
      {
        q: "Können wir Mahlzeiten in zwei verschiedenen Sprachen planen?",
        a: "Ja. Jeder kann Copantry in seiner eigenen Sprache nutzen und denselben Haushalt teilen, und Rezepte bleiben in der Sprache, in der sie geschrieben wurden.",
      },
    ],
  },

  budgetCooking: {
    fr: [
      {
        q: "Comment économiser sur les courses ?",
        a: "Les plus grosses économies viennent de moins gaspiller et moins acheter. Copantry vous aide à cuisiner ce que vous avez déjà avant péremption et à n’acheter que ce qui manque, ce qui réduit à la fois le gaspillage et la facture.",
      },
      {
        q: "Comment cuisiner moins cher avec ce que j’ai déjà ?",
        a: "Copantry suggère des plats bâtis autour des ingrédients déjà dans votre cuisine, pour tirer plus de repas de ce que vous avez acheté au lieu de le laisser se gâter et de recommencer.",
      },
      {
        q: "Comment réduire ma facture de courses sans manger moins bien ?",
        a: "En planifiant autour de votre garde-manger et en évitant les doublons, vous dépensez moins sans manger moins bien. Copantry planifie de vrais repas autour de vrais ingrédients et garde votre liste serrée.",
      },
    ],
    it: [
      {
        q: "Come risparmio sulla spesa?",
        a: "I risparmi maggiori vengono dallo sprecare meno e comprare meno. Copantry ti aiuta a cucinare ciò che hai già prima della scadenza e a comprare solo ciò che manca, riducendo sia lo spreco sia la spesa.",
      },
      {
        q: "Come cucino piatti più economici con ciò che ho già?",
        a: "Copantry suggerisce piatti costruiti sugli ingredienti già in cucina, così ricavi più pasti da ciò che hai comprato invece di lasciarlo rovinare e ricominciare.",
      },
      {
        q: "Come taglio la spesa senza mangiare peggio?",
        a: "Pianificando intorno alla dispensa ed evitando i doppioni, spendi meno senza mangiare peggio. Copantry pianifica pasti veri intorno a ingredienti veri e tiene la lista contenuta.",
      },
    ],
    es: [
      {
        q: "¿Cómo ahorro en la compra?",
        a: "El mayor ahorro viene de desperdiciar menos y comprar menos. Copantry te ayuda a cocinar lo que ya tienes antes de que caduque y a comprar solo lo que falta, lo que recorta tanto el desperdicio como la factura.",
      },
      {
        q: "¿Cómo cocino platos más baratos con lo que ya tengo?",
        a: "Copantry sugiere platos construidos en torno a los ingredientes que ya hay en tu cocina, así sacas más comidas de lo que compraste en vez de dejar que se estropee y empezar de nuevo.",
      },
      {
        q: "¿Cómo recorto mi factura de la compra sin comer peor?",
        a: "Al planificar en torno a tu despensa y evitar duplicados, gastas menos sin comer peor. Copantry planifica comidas reales en torno a ingredientes reales y mantiene tu lista ajustada.",
      },
    ],
    pt: [
      {
        q: "Como poupo nas compras?",
        a: "As maiores poupanças vêm de desperdiçar menos e comprar menos. O Copantry ajuda-o a cozinhar o que já tem antes de expirar e a comprar só o que falta, o que corta tanto o desperdício como a conta.",
      },
      {
        q: "Como cozinho pratos mais baratos com o que já tenho?",
        a: "O Copantry sugere pratos construídos em torno dos ingredientes que já estão na sua cozinha, para tirar mais refeições do que comprou em vez de o deixar estragar e começar de novo.",
      },
      {
        q: "Como reduzo a minha conta das compras sem comer pior?",
        a: "Ao planear em torno da sua despensa e evitar duplicados, gasta menos sem comer pior. O Copantry planeia refeições reais em torno de ingredientes reais e mantém a sua lista enxuta.",
      },
    ],
    de: [
      {
        q: "Wie spare ich beim Lebensmitteleinkauf?",
        a: "Die größten Ersparnisse kommen davon, weniger zu verschwenden und weniger zu kaufen. Copantry hilft dir, das schon Vorhandene vor dem Ablauf zu kochen und nur die Lücken zu kaufen, was sowohl Abfall als auch Rechnung senkt.",
      },
      {
        q: "Wie koche ich günstiger mit dem, was ich schon habe?",
        a: "Copantry schlägt Gerichte rund um die Zutaten vor, die schon in deiner Küche sind, damit du mehr Mahlzeiten aus dem Gekauften holst, statt es schlecht werden zu lassen und neu anzufangen.",
      },
      {
        q: "Wie senke ich meine Lebensmittelrechnung, ohne schlechter zu essen?",
        a: "Indem du rund um deinen Vorrat planst und Doppelkäufe vermeidest, gibst du weniger aus, ohne schlechter zu essen. Copantry plant echte Mahlzeiten rund um echte Zutaten und hält deine Liste schlank.",
      },
    ],
  },

  discovery: {
    fr: [
      {
        q: "Comment trouver de nouvelles recettes sans chercher sur plein de sites différents ?",
        a: "L’onglet Découvrir de Copantry cherche dans une base choisie de sites de recettes au même endroit et ouvre les résultats dans un lecteur intégré, pour éviter de visiter site après site.",
      },
      {
        q: "Puis-je lire une recette sans être gêné par des pubs ou des pop-ups ?",
        a: "Oui. Découvrir ouvre chaque résultat dans un lecteur propre et nettoyé à l’intérieur de Copantry — pas de pub, de vidéo automatique ni de pop-up intrusif, juste la recette.",
      },
      {
        q: "Puis-je importer une recette trouvée sur Découvrir dans ma propre collection ?",
        a: "Oui. Ouvrez n’importe quel résultat et importez-le en un geste, avec le même import propulsé par l’IA que pour n’importe quelle URL de recette — la recette garde sa langue d’origine.",
      },
      {
        q: "Puis-je chercher sur Découvrir dans ma propre langue ?",
        a: "Oui. Découvrir utilise votre langue par défaut, et vous pouvez passer à une langue précise ou chercher dans toutes les langues.",
      },
    ],
    it: [
      {
        q: "Come trovo nuove ricette senza cercare su tanti siti diversi?",
        a: "La scheda Scopri di Copantry cerca in una base selezionata di siti di ricette in un solo posto e apre i risultati in un lettore integrato, così non devi visitare sito dopo sito.",
      },
      {
        q: "Posso leggere una ricetta senza pubblicità o pop-up che disturbano?",
        a: "Sì. Scopri apre ogni risultato in un lettore pulito e sanificato dentro Copantry — niente pubblicità, video automatici o pop-up invadenti, solo la ricetta.",
      },
      {
        q: "Posso importare una ricetta trovata su Scopri nella mia raccolta?",
        a: "Sì. Apri qualsiasi risultato e importalo con un tocco, con lo stesso import basato sull’IA usato per qualsiasi URL di ricetta — la ricetta resta nella sua lingua originale.",
      },
      {
        q: "Posso cercare su Scopri nella mia lingua?",
        a: "Sì. Scopri usa di default la tua lingua, e puoi passare a una lingua specifica o cercare in tutte le lingue.",
      },
    ],
    es: [
      {
        q: "¿Cómo encuentro nuevas recetas sin buscar en muchas webs distintas?",
        a: "La pestaña Descubrir de Copantry busca en una base seleccionada de sitios de recetas en un solo lugar y abre los resultados en un lector integrado, así no tienes que visitar sitio tras sitio.",
      },
      {
        q: "¿Puedo leer una receta sin que me molesten anuncios o ventanas emergentes?",
        a: "Sí. Descubrir abre cada resultado en un lector limpio y depurado dentro de Copantry — sin anuncios, vídeo automático ni ventanas emergentes invasivas, solo la receta.",
      },
      {
        q: "¿Puedo importar una receta que encuentro en Descubrir a mi propia colección?",
        a: "Sí. Abre cualquier resultado e impórtalo con un toque, con la misma importación con IA que Copantry usa para cualquier URL de receta — mantiene la receta en su idioma original.",
      },
      {
        q: "¿Puedo buscar en Descubrir en mi propio idioma?",
        a: "Sí. Descubrir usa tu idioma por defecto, y puedes cambiar a uno específico o buscar en todos.",
      },
    ],
    pt: [
      {
        q: "Como encontro novas receitas sem procurar em muitos sites diferentes?",
        a: "O separador Descobrir do Copantry procura numa base selecionada de sites de receitas num só lugar e abre os resultados num leitor integrado, para não ter de visitar site após site.",
      },
      {
        q: "Posso ler uma receita sem anúncios ou pop-ups a atrapalhar?",
        a: "Sim. O Descobrir abre cada resultado num leitor limpo e higienizado dentro do Copantry — sem anúncios, vídeo automático ou pop-ups intrusivos, só a receita.",
      },
      {
        q: "Posso importar uma receita que encontro no Descobrir para a minha coleção?",
        a: "Sim. Abra qualquer resultado e importe-o com um toque, com a mesma importação com IA que o Copantry usa para qualquer URL de receita — mantém a receita na língua original.",
      },
      {
        q: "Posso pesquisar no Descobrir na minha própria língua?",
        a: "Sim. O Descobrir usa a sua língua por predefinição, e pode mudar para uma língua específica ou pesquisar em todas.",
      },
    ],
    de: [
      {
        q: "Wie finde ich neue Rezepte, ohne auf vielen verschiedenen Websites zu suchen?",
        a: "Der Entdecken-Tab von Copantry durchsucht eine kuratierte Basis von Rezept-Websites an einem Ort und öffnet Ergebnisse in einem integrierten Lesemodus, sodass du nicht Seite für Seite besuchen musst.",
      },
      {
        q: "Kann ich ein Rezept lesen, ohne dass Werbung oder Pop-ups stören?",
        a: "Ja. Entdecken öffnet jedes Ergebnis in einem sauberen, bereinigten Lesemodus in Copantry — keine Werbung, automatisch startenden Videos oder aufdringlichen Pop-ups, nur das Rezept.",
      },
      {
        q: "Kann ich ein auf Entdecken gefundenes Rezept in meine eigene Sammlung importieren?",
        a: "Ja. Öffne ein beliebiges Ergebnis und importiere es mit einem Tipp, mit demselben KI-gestützten Import, den Copantry für jede Rezept-URL nutzt — das Rezept bleibt in seiner Originalsprache.",
      },
      {
        q: "Kann ich auf Entdecken in meiner eigenen Sprache suchen?",
        a: "Ja. Entdecken nutzt standardmäßig deine Sprache, du kannst aber auf eine bestimmte Sprache wechseln oder in allen suchen.",
      },
    ],
  },

  winePairing: {
    fr: [
      {
        q: "Copantry suggère-t-il un vin pour accompagner une recette ?",
        a: "Oui. Sur n’importe quelle page recette, ou pour tout ce qui est planifié dans un créneau de repas, vous pouvez demander un accord à Copantry — il recommande une bouteille que vous possédez déjà quand elle convient vraiment, plus un style général à rechercher.",
      },
      {
        q: "Dois-je saisir tous les détails d’une bouteille pour la suivre ?",
        a: "Non. Seul le nom de la bouteille est requis. Producteur, cépage, millésime, couleur et une note libre sont tous optionnels, donc ajouter une bouteille prend quelques secondes.",
      },
      {
        q: "Et si aucun de mes vins ne convient au repas ?",
        a: "Vous obtenez quand même une suggestion de style général — comme « un rouge de corps moyen » — même quand rien dans votre propre cave ne convient vraiment.",
      },
      {
        q: "Ma cave se met-elle à jour toute seule à mesure que les bouteilles sont utilisées ?",
        a: "Oui. Attachez une bouteille à un repas planifié et son stock diminue automatiquement une fois que vous confirmez l’avoir cuisiné, ou marquez n’importe quelle bouteille comme bue manuellement à tout moment.",
      },
    ],
    it: [
      {
        q: "Copantry suggerisce un vino da abbinare a una ricetta?",
        a: "Sì. Su qualsiasi pagina ricetta, o per tutto ciò che è pianificato in una fascia pasto, puoi chiedere a Copantry un abbinamento — consiglia una bottiglia che possiedi già quando è davvero adatta, più uno stile generale da cercare.",
      },
      {
        q: "Devo inserire ogni dettaglio di una bottiglia per tenerne traccia?",
        a: "No. Serve solo il nome della bottiglia. Produttore, vitigno, annata, colore e una nota libera sono tutti opzionali, quindi aggiungere una bottiglia richiede pochi secondi.",
      },
      {
        q: "E se nessuno dei miei vini si adatta al pasto?",
        a: "Ottieni comunque un suggerimento di stile generale — come «un rosso di corpo medio» — anche quando nulla nella tua cantina è davvero adatto.",
      },
      {
        q: "La mia cantina si aggiorna da sola man mano che le bottiglie vengono usate?",
        a: "Sì. Collega una bottiglia a un pasto pianificato e la sua scorta diminuisce automaticamente una volta confermato di averlo cucinato, oppure segna qualsiasi bottiglia come bevuta manualmente in qualsiasi momento.",
      },
    ],
    es: [
      {
        q: "¿Copantry sugiere un vino para acompañar una receta?",
        a: "Sí. En cualquier página de receta, o para todo lo planificado en una franja de comida, puedes pedirle a Copantry un maridaje — recomienda una botella que ya tienes cuando encaja de verdad, además de un estilo general que buscar.",
      },
      {
        q: "¿Tengo que introducir todos los detalles de una botella para llevar el control?",
        a: "No. Solo hace falta el nombre de la botella. Productor, uva, añada, color y una nota libre son todos opcionales, así que añadir una botella lleva segundos.",
      },
      {
        q: "¿Y si ninguno de mis vinos encaja con la comida?",
        a: "Aun así obtienes una sugerencia de estilo general — como «un tinto de cuerpo medio» — incluso cuando nada de tu propia bodega encaja bien.",
      },
      {
        q: "¿Mi bodega se actualiza sola a medida que se usan las botellas?",
        a: "Sí. Vincula una botella a una comida planificada y su stock baja automáticamente en cuanto confirmas que la has cocinado, o marca cualquier botella como bebida manualmente en cualquier momento.",
      },
    ],
    pt: [
      {
        q: "O Copantry sugere um vinho para acompanhar uma receita?",
        a: "Sim. Em qualquer página de receita, ou para tudo o que está planeado num horário de refeição, pode pedir ao Copantry uma harmonização — recomenda uma garrafa que já tem quando encaixa mesmo, além de um estilo geral a procurar.",
      },
      {
        q: "Preciso de indicar todos os detalhes de uma garrafa para a acompanhar?",
        a: "Não. Só o nome da garrafa é necessário. Produtor, casta, colheita, cor e uma nota livre são todos opcionais, por isso adicionar uma garrafa demora segundos.",
      },
      {
        q: "E se nenhum dos meus vinhos encaixar na refeição?",
        a: "Ainda assim obtém uma sugestão de estilo geral — como «um tinto de corpo médio» — mesmo quando nada na sua adega encaixa bem.",
      },
      {
        q: "A minha adega atualiza-se sozinha à medida que as garrafas são usadas?",
        a: "Sim. Associe uma garrafa a uma refeição planeada e o stock desce automaticamente assim que confirmar que a cozinhou, ou marque qualquer garrafa como bebida manualmente a qualquer momento.",
      },
    ],
    de: [
      {
        q: "Schlägt Copantry einen Wein zu einem Rezept vor?",
        a: "Ja. Auf jeder Rezeptseite oder für alles, was in einem Mahlzeiten-Slot geplant ist, kannst du Copantry nach einer Weinbegleitung fragen — es empfiehlt eine Flasche, die du schon besitzt, wenn sie wirklich passt, plus einen allgemeinen Stil, nach dem du suchen kannst.",
      },
      {
        q: "Muss ich jedes Detail zu einer Flasche eingeben, um sie zu verfolgen?",
        a: "Nein. Nur der Anzeigename der Flasche ist nötig. Erzeuger, Rebsorte, Jahrgang, Farbe und eine freie Notiz sind alle optional — eine Flasche hinzuzufügen dauert Sekunden.",
      },
      {
        q: "Was, wenn keiner meiner Weine zum Essen passt?",
        a: "Du bekommst trotzdem einen allgemeinen Stilvorschlag — etwa „ein mittelkräftiger Rotwein“ — selbst wenn nichts in deinem eigenen Keller wirklich passt.",
      },
      {
        q: "Aktualisiert sich mein Weinkeller von selbst, während Flaschen verbraucht werden?",
        a: "Ja. Verknüpfe eine Flasche mit einer geplanten Mahlzeit, und ihr Bestand sinkt automatisch, sobald du bestätigst, dass du gekocht hast — oder markiere jede Flasche jederzeit manuell als getrunken.",
      },
    ],
  },
};

// ── Resolver ─────────────────────────────────────────────────────────────────

/**
 * Build a fully-formed, localized content page object for ContentPage. Structural
 * fields (accent, heroEmoji, faqKey, related targets) come from the English entry
 * in pages.js; translatable text comes from PAGE_TX / FAQ_TX. Returns null for an
 * unknown slug. `related` targets are run through localizePath so cross-links stay
 * within the locale; their labels are translated when available.
 */
export function localizedPage(slug, lng) {
  const base = REGISTRY[slug];
  if (!base) return null;

  const related = (base.related || []).map((r, i) => ({
    label: PAGE_TX[slug]?.[lng]?.related?.[i] ?? r.label,
    to: localizePath(r.to, lng),
  }));
  const faqItems = FAQ_TX[base.faqKey]?.[lng] ?? FAQS[base.faqKey];

  const tx = PAGE_TX[slug]?.[lng];
  if (!tx) {
    // English (or an untranslated locale): English copy, localized links + FAQ.
    return { ...base, related, faqItems };
  }
  return {
    ...base,
    eyebrow: tx.eyebrow ?? base.eyebrow,
    crumb: tx.crumb ?? base.crumb,
    h1: tx.h1 ?? base.h1,
    lede: tx.lede ?? base.lede,
    metaTitle: tx.metaTitle,
    sections: tx.sections ?? base.sections,
    howTo: tx.howTo ?? base.howTo,
    cta: tx.cta ?? base.cta,
    related,
    faqItems,
  };
}

/** Slugs that have at least one localized translation (for routing + sitemap). */
export const LOCALIZED_FEATURE_SLUGS = Object.keys(FEATURES).filter(
  (s) => PAGE_TX[s],
);
export const LOCALIZED_USE_CASE_SLUGS = Object.keys(USE_CASES).filter(
  (s) => PAGE_TX[s],
);
