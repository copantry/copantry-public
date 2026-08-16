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
    nl: {
      metaTitle: "Maaltijden plannen",
      eyebrow: "Maaltijden plannen",
      crumb: "Maaltijden plannen",
      h1: "Plan je week rond wat je al hebt",
      lede: "Copantry plant een week aan maaltijden vanuit je voorraadkast, niet vanuit een lege agenda. Het geeft voorrang aan ingrediënten die bijna over de datum zijn, schaalt recepten naar je huishouden en maakt daarna een boodschappenlijst van alleen wat je mist.",
      sections: [
        {
          h2: "Laat het de week voor je plannen",
          body: "Vraag Copantry een week te genereren en het bouwt een gevarieerde planning die eerst het bijna-bedorven eten opmaakt — of sleep je eigen recepten op de agenda. Jij houdt de regie en wisselt elke maaltijd met één tik.",
        },
        {
          h2: "Een planning die je echt volhoudt",
          body: "Een planning houdt stand als hij past bij je echte kast, je echte week en je echte huishouden.",
          bullets: [
            {
              title: "Gebouwd rond je voorraadkast",
              desc: "Gebruikt wat je hebt voordat het bederft, dus er gaat minder verloren.",
            },
            {
              title: "Afgestemd op je huishouden",
              desc: "Stel in voor hoeveel mensen je kookt en de hoeveelheden volgen.",
            },
            {
              title: "Met iedereen gedeeld",
              desc: "Het hele huishouden ziet en bewerkt één planning, in realtime.",
            },
            {
              title: "Restjes bijgehouden",
              desc: "Kook één keer en Copantry houdt de overgebleven porties bij voor later.",
            },
          ],
        },
      ],
      related: [
        "Minder verspilling",
        "Boodschappenlijsten",
        "Plannen vanuit je AI-assistent",
        "Wijn erbij",
      ],
    },
    sv: {
      metaTitle: "Måltidsplanering",
      eyebrow: "Måltidsplanering",
      crumb: "Måltidsplanering",
      h1: "Planera veckan kring det du redan har",
      lede: "Copantry planerar en vecka med måltider utifrån ditt skafferi, inte utifrån en tom kalender. Den prioriterar råvaror som snart går ut, anpassar recepten efter hushållet och bygger sedan en inköpslista med bara det du saknar.",
      sections: [
        {
          h2: "Låt den planera veckan åt dig",
          body: "Be Copantry skapa en vecka så bygger den en varierad plan som först använder upp det som snart går ut — eller dra in dina egna recept i kalendern. Du behåller kontrollen och kan byta vilken måltid som helst med ett tryck.",
        },
        {
          h2: "En plan du faktiskt håller",
          body: "Planer håller när de passar ditt riktiga skåp, din riktiga vecka och ditt riktiga hushåll.",
          bullets: [
            {
              title: "Byggd kring ditt skafferi",
              desc: "Använder det du har innan det går ut, så mindre slängs.",
            },
            {
              title: "Anpassad efter hushållet",
              desc: "Ange hur många du lagar till, så följer mängderna med.",
            },
            {
              title: "Delad med alla",
              desc: "Hela hushållet ser och redigerar en och samma plan i realtid.",
            },
            {
              title: "Rester hålls koll på",
              desc: "Laga en gång, så håller Copantry koll på portionerna som blir över.",
            },
          ],
        },
      ],
      related: [
        "Minska svinnet",
        "Inköpslistor",
        "Planera från din AI-assistent",
        "Vinmatchning",
      ],
    },
    da: {
      metaTitle: "Madplanlægning",
      eyebrow: "Madplanlægning",
      crumb: "Madplanlægning",
      h1: "Planlæg ugen ud fra det, du allerede har",
      lede: "Copantry planlægger en uges måltider med udgangspunkt i dit spisekammer, ikke i en tom kalender. Den prioriterer råvarer, der snart udløber, tilpasser opskrifterne til husstanden og laver derefter en indkøbsliste med kun det, du mangler.",
      sections: [
        {
          h2: "Lad den planlægge ugen for dig",
          body: "Bed Copantry lave en uge, så bygger den en varieret plan, der først bruger det, som snart udløber — eller træk dine egne opskrifter ind i kalenderen. Du har styringen og kan bytte ethvert måltid med ét tryk.",
        },
        {
          h2: "En plan, du faktisk holder",
          body: "Planer holder, når de passer til dit rigtige skab, din rigtige uge og din rigtige husstand.",
          bullets: [
            {
              title: "Bygget om dit spisekammer",
              desc: "Bruger det, du har, før det udløber, så mindre går til spilde.",
            },
            {
              title: "Tilpasset husstanden",
              desc: "Angiv hvor mange I er, så følger mængderne med.",
            },
            {
              title: "Delt med alle",
              desc: "Hele husstanden ser og redigerer én og samme plan i realtid.",
            },
            {
              title: "Styr på resterne",
              desc: "Lav mad én gang, så holder Copantry styr på de portioner, der bliver tilovers.",
            },
          ],
        },
      ],
      related: [
        "Mindre madspild",
        "Indkøbslister",
        "Planlæg fra din AI-assistent",
        "Vin til maden",
      ],
    },
    fi: {
      metaTitle: "Ateriasuunnittelu",
      eyebrow: "Ateriasuunnittelu",
      crumb: "Ateriasuunnittelu",
      h1: "Suunnittele viikkosi sen ympärille, mitä sinulla jo on",
      lede: "Copantry suunnittelee viikon ateriat ruokakomerostasi käsin, ei tyhjästä kalenterista. Se asettaa etusijalle pian vanhenevat raaka-aineet, mitoittaa reseptit talouteesi ja kokoaa sitten ostoslistan vain siitä, mitä sinulta puuttuu.",
      sections: [
        {
          h2: "Anna sen suunnitella viikko puolestasi",
          body: "Pyydä Copantrya luomaan viikko, niin se rakentaa monipuolisen suunnitelman, joka käyttää ensin vanhenevat raaka-aineet — tai vedä omat reseptisi kalenteriin. Ohjat pysyvät sinulla, ja vaihdat minkä tahansa aterian yhdellä napautuksella.",
        },
        {
          h2: "Suunnitelma, jossa oikeasti pysyt",
          body: "Suunnitelmat pitävät, kun ne sopivat oikeaan kaappiisi, oikeaan viikkoosi ja oikeaan talouteesi.",
          bullets: [
            {
              title: "Rakennettu ruokakomerosi ympärille",
              desc: "Käyttää sen, mitä omistat, ennen vanhenemista, joten hävikki pienenee.",
            },
            {
              title: "Mitoitettu talouteesi",
              desc: "Kerro, kuinka monelle laitat, niin määrät seuraavat perässä.",
            },
            {
              title: "Jaettu kaikkien kesken",
              desc: "Koko talous näkee ja muokkaa samaa suunnitelmaa reaaliajassa.",
            },
            {
              title: "Tähteet kirjataan",
              desc: "Kokkaa kerran, niin Copantry pitää kirjaa yli jääneistä annoksista.",
            },
          ],
        },
      ],
      related: [
        "Vähemmän hävikkiä",
        "Ostoslistat",
        "Suunnittele tekoälyavustajastasi",
        "Viinisuositukset",
      ],
    },
    no: {
      metaTitle: "Måltidsplanlegging",
      eyebrow: "Måltidsplanlegging",
      crumb: "Måltidsplanlegging",
      h1: "Planlegg uken rundt det du allerede har",
      lede: "Copantry planlegger en uke med måltider ut fra spiskammeret ditt, ikke ut fra en tom kalender. Den prioriterer råvarer som snart går ut, tilpasser oppskriftene til husholdningen og bygger så en handleliste med bare det du mangler.",
      sections: [
        {
          h2: "La den planlegge uken for deg",
          body: "Be Copantry lage en uke, så bygger den en variert plan som først bruker opp det som snart går ut — eller dra dine egne oppskrifter inn i kalenderen. Du har kontrollen og kan bytte hvilket som helst måltid med ett trykk.",
        },
        {
          h2: "En plan du faktisk holder",
          body: "Planer holder når de passer det virkelige skapet ditt, den virkelige uken din og den virkelige husholdningen din.",
          bullets: [
            {
              title: "Bygget rundt spiskammeret ditt",
              desc: "Bruker det du har før det går ut, så mindre blir kastet.",
            },
            {
              title: "Tilpasset husholdningen",
              desc: "Angi hvor mange du lager til, så følger mengdene med.",
            },
            {
              title: "Delt med alle",
              desc: "Hele husholdningen ser og redigerer én og samme plan i sanntid.",
            },
            {
              title: "Oversikt over restene",
              desc: "Lag mat én gang, så holder Copantry oversikt over porsjonene som blir til overs.",
            },
          ],
        },
      ],
      related: [
        "Mindre matsvinn",
        "Handlelister",
        "Planlegg fra KI-assistenten din",
        "Vin til maten",
      ],
    },
    pl: {
      metaTitle: "Planowanie posiłków",
      eyebrow: "Planowanie posiłków",
      crumb: "Planowanie posiłków",
      h1: "Zaplanuj tydzień wokół tego, co już masz",
      lede: "Copantry planuje tydzień posiłków, zaczynając od twojej spiżarni, a nie od pustego kalendarza. Stawia na składniki, którym kończy się termin, przelicza przepisy na twoje gospodarstwo i układa listę zakupów wyłącznie z braków.",
      sections: [
        {
          h2: "Niech zaplanuje tydzień za ciebie",
          body: "Poproś Copantry o wygenerowanie tygodnia, a ułoży urozmaicony plan, który najpierw zużywa kończące się produkty — albo przeciągnij własne przepisy na kalendarz. Ty masz kontrolę i wymieniasz dowolny posiłek jednym dotknięciem.",
        },
        {
          h2: "Plan, którego naprawdę się trzymasz",
          body: "Plany się trzymają, gdy pasują do twojej prawdziwej szafki, prawdziwego tygodnia i prawdziwego gospodarstwa.",
          bullets: [
            {
              title: "Zbudowany wokół twojej spiżarni",
              desc: "Zużywa to, co masz, zanim skończy się termin, więc mniej się marnuje.",
            },
            {
              title: "Przeliczony na twoje gospodarstwo",
              desc: "Ustaw, dla ilu osób gotujesz, a ilości się dopasują.",
            },
            {
              title: "Dzielony ze wszystkimi",
              desc: "Całe gospodarstwo widzi i edytuje jeden plan na bieżąco.",
            },
            {
              title: "Resztki pod kontrolą",
              desc: "Ugotuj raz, a Copantry policzy porcje, które zostały na później.",
            },
          ],
        },
      ],
      related: [
        "Mniej marnowania",
        "Listy zakupów",
        "Planuj ze swojego asystenta SI",
        "Dobór wina",
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
    nl: {
      metaTitle: "Voorraadkast bijhouden",
      eyebrow: "Voorraadkast bijhouden",
      crumb: "Voorraadkast bijhouden",
      h1: "Houd bij wat er allemaal in je keuken ligt",
      lede: "Copantry houdt een actueel overzicht bij van je voorraadkast, koelkast en vriezer, gesorteerd op wat het eerst over de datum gaat. Voeg producten toe via foto, kassabon, spraak of tekst — en vraag je nooit meer af wat je hebt of net op is.",
      sections: [
        {
          h2: "Voeg boodschappen toe zonder alles in te typen",
          body: "Maak een foto van je boodschappen, een kassabon of een schap in je kast; Copantry leest hem met AI en vult je voorraadkast in seconden. Je kunt ook een lijst plakken of producten met de hand toevoegen.",
        },
        {
          h2: "Altijd kloppend, omdat het meebeweegt terwijl je kookt",
          body: "Als je een geplande maaltijd kookt, trekt Copantry de gebruikte ingrediënten af. Je voorraadkast blijft eerlijk, dus het weet waar je bijna doorheen bent en kan het automatisch op je volgende lijst zetten.",
          bullets: [
            {
              title: "Foto's en kassabonnen scannen",
              desc: "AI maakt van een foto gedateerde producten in je voorraadkast.",
            },
            {
              title: "Houdbaarheidsschatting",
              desc: "Copantry stelt voor elk product een verstandige uiterste datum voor.",
            },
            {
              title: "Eerst wat het snelst over de datum gaat",
              desc: "Wat op moet, staat altijd bovenaan.",
            },
            {
              title: "Gedeeld in huis",
              desc: "Iedereen ziet dezelfde actuele keuken.",
            },
          ],
        },
      ],
      related: [
        "Minder verspilling",
        "Hoelang blijft voedsel goed?",
        "Boodschappenlijsten",
      ],
    },
    sv: {
      metaTitle: "Koll på skafferiet",
      eyebrow: "Koll på skafferiet",
      crumb: "Koll på skafferiet",
      h1: "Håll koll på allt i ditt kök",
      lede: "Copantry håller ett levande register över skafferi, kyl och frys, sorterat efter vad som går ut först. Lägg till varor med foto, kvitto, röst eller text — och undra aldrig igen vad du har eller vad som tagit slut.",
      sections: [
        {
          h2: "Lägg till varor utan att skriva in allt",
          body: "Fotografera din handling, ett kvitto eller en skafferihylla, så läser Copantry det med AI och fyller skafferiet på några sekunder. Du kan också klistra in en lista eller lägga till varor för hand.",
        },
        {
          h2: "Alltid rätt, för den uppdateras medan du lagar",
          body: "När du lagar en planerad måltid drar Copantry av ingredienserna du använde. Skafferiet förblir ärligt, så appen vet vad som håller på att ta slut och kan lägga till det på nästa lista automatiskt.",
          bullets: [
            {
              title: "Skanning av foto och kvitto",
              desc: "AI gör en bild till daterade skafferivaror.",
            },
            {
              title: "Uppskattad hållbarhet",
              desc: "Copantry föreslår ett rimligt sista datum för varje vara.",
            },
            {
              title: "Det som går ut först överst",
              desc: "Det som behöver användas ligger alltid högst upp.",
            },
            {
              title: "Delat i hela hemmet",
              desc: "Alla ser samma uppdaterade kök.",
            },
          ],
        },
      ],
      related: ["Minska svinnet", "Hur länge håller maten?", "Inköpslistor"],
    },
    da: {
      metaTitle: "Styr på spisekammeret",
      eyebrow: "Styr på spisekammeret",
      crumb: "Styr på spisekammeret",
      h1: "Hold styr på alt i dit køkken",
      lede: "Copantry fører et levende overblik over spisekammer, køleskab og fryser, sorteret efter, hvad der udløber først. Tilføj varer med billede, kvittering, stemme eller tekst — og undr dig aldrig igen over, hvad du har, eller hvad der er sluppet op.",
      sections: [
        {
          h2: "Tilføj varer uden at skrive det hele ind",
          body: "Tag et billede af dine indkøb, en kvittering eller en hylde, så læser Copantry det med AI og fylder spisekammeret på få sekunder. Du kan også indsætte en liste eller tilføje varer i hånden.",
        },
        {
          h2: "Altid korrekt, fordi den opdateres, mens du laver mad",
          body: "Når du laver et planlagt måltid, trækker Copantry de brugte ingredienser fra. Dit spisekammer forbliver ærligt, så appen ved, hvad du er ved at løbe tør for, og kan sætte det på næste liste automatisk.",
          bullets: [
            {
              title: "Skanning af billede og kvittering",
              desc: "AI gør et billede til daterede varer i spisekammeret.",
            },
            {
              title: "Skøn over holdbarhed",
              desc: "Copantry foreslår en fornuftig sidste dato for hver vare.",
            },
            {
              title: "Det, der udløber først, øverst",
              desc: "Det, der skal bruges, ligger altid øverst.",
            },
            {
              title: "Delt i hele hjemmet",
              desc: "Alle ser det samme opdaterede køkken.",
            },
          ],
        },
      ],
      related: ["Mindre madspild", "Hvor længe holder maden?", "Indkøbslister"],
    },
    fi: {
      metaTitle: "Ruokakomeron seuranta",
      eyebrow: "Ruokakomeron seuranta",
      crumb: "Ruokakomeron seuranta",
      h1: "Pidä kirjaa kaikesta keittiössäsi",
      lede: "Copantry pitää elävää kirjanpitoa ruokakomerostasi, jääkaapistasi ja pakastimestasi, järjestettynä sen mukaan, mikä vanhenee seuraavaksi. Lisää tuotteita kuvalla, kuitilla, puheella tai tekstillä — etkä enää koskaan mieti, mitä sinulla on tai mikä on loppunut.",
      sections: [
        {
          h2: "Lisää ostokset ilman että näpyttelet kaiken",
          body: "Ota kuva ostoksistasi, kuitista tai kaapin hyllystä, niin Copantry lukee sen tekoälyllä ja täyttää ruokakomerosi sekunneissa. Voit myös liittää listan tai lisätä tuotteet käsin.",
        },
        {
          h2: "Aina paikkansapitävä, koska se päivittyy kokatessasi",
          body: "Kun laitat suunnitellun aterian, Copantry vähentää käyttämäsi ainekset. Ruokakomerosi pysyy rehellisenä, joten se tietää, mikä on loppumassa, ja voi lisätä sen automaattisesti seuraavalle listallesi.",
          bullets: [
            {
              title: "Kuvan ja kuitin skannaus",
              desc: "Tekoäly muuttaa kuvan päivätyiksi ruokakomeron tuotteiksi.",
            },
            {
              title: "Säilyvyysarviot",
              desc: "Copantry ehdottaa jokaiselle tuotteelle järkevän viimeisen käyttöajan.",
            },
            {
              title: "Ensin vanhenevat ylimpänä",
              desc: "Käytettävät asiat ovat aina ylimpänä.",
            },
            {
              title: "Jaettu koko kodin kesken",
              desc: "Kaikki näkevät saman ajantasaisen keittiön.",
            },
          ],
        },
      ],
      related: [
        "Vähemmän hävikkiä",
        "Kuinka kauan ruoka säilyy?",
        "Ostoslistat",
      ],
    },
    no: {
      metaTitle: "Oversikt over spiskammeret",
      eyebrow: "Oversikt over spiskammeret",
      crumb: "Oversikt over spiskammeret",
      h1: "Hold oversikt over alt på kjøkkenet ditt",
      lede: "Copantry fører en levende oversikt over spiskammer, kjøleskap og fryser, sortert etter hva som går ut først. Legg til varer med bilde, kvittering, stemme eller tekst — og lur aldri igjen på hva du har, eller hva som er tomt.",
      sections: [
        {
          h2: "Legg til varer uten å skrive inn alt",
          body: "Ta et bilde av handleturen, en kvittering eller en hylle, så leser Copantry det med KI og fyller spiskammeret på sekunder. Du kan også lime inn en liste eller legge til varer for hånd.",
        },
        {
          h2: "Alltid riktig, fordi den oppdateres mens du lager mat",
          body: "Når du lager et planlagt måltid, trekker Copantry fra ingrediensene du brukte. Spiskammeret forblir ærlig, så appen vet hva du er i ferd med å gå tom for, og kan legge det på neste liste automatisk.",
          bullets: [
            {
              title: "Skanning av bilde og kvittering",
              desc: "KI gjør et bilde om til daterte varer i spiskammeret.",
            },
            {
              title: "Anslått holdbarhet",
              desc: "Copantry foreslår en fornuftig siste dato for hver vare.",
            },
            {
              title: "Det som går ut først øverst",
              desc: "Det som må brukes, ligger alltid øverst.",
            },
            {
              title: "Delt i hele hjemmet",
              desc: "Alle ser det samme oppdaterte kjøkkenet.",
            },
          ],
        },
      ],
      related: ["Mindre matsvinn", "Hvor lenge holder maten?", "Handlelister"],
    },
    pl: {
      metaTitle: "Prowadzenie spiżarni",
      eyebrow: "Prowadzenie spiżarni",
      crumb: "Prowadzenie spiżarni",
      h1: "Miej pod kontrolą wszystko w swojej kuchni",
      lede: "Copantry prowadzi żywy spis twojej spiżarni, lodówki i zamrażarki, uporządkowany według tego, czemu termin kończy się najwcześniej. Dodawaj produkty zdjęciem, paragonem, głosem albo tekstem — i nigdy więcej nie zastanawiaj się, co masz i czego zabrakło.",
      sections: [
        {
          h2: "Dodawaj zakupy bez wpisywania wszystkiego",
          body: "Zrób zdjęcie zakupów, paragonu albo półki w szafce, a Copantry odczyta je SI i zapełni spiżarnię w kilka sekund. Możesz też wkleić listę albo dodać produkty ręcznie.",
        },
        {
          h2: "Zawsze aktualna, bo zmienia się, kiedy gotujesz",
          body: "Gdy ugotujesz zaplanowany posiłek, Copantry odejmie zużyte składniki. Twoja spiżarnia pozostaje uczciwa, więc aplikacja wie, czego ci brakuje, i sama dopisze to do kolejnej listy.",
          bullets: [
            {
              title: "Skanowanie zdjęć i paragonów",
              desc: "SI zamienia zdjęcie w opatrzone datą produkty w spiżarni.",
            },
            {
              title: "Szacowane terminy",
              desc: "Copantry proponuje rozsądny termin przydatności dla każdego produktu.",
            },
            {
              title: "Najpilniejsze na górze",
              desc: "To, co trzeba zużyć, jest zawsze na samej górze.",
            },
            {
              title: "Wspólne dla całego domu",
              desc: "Wszyscy widzą tę samą, aktualną kuchnię.",
            },
          ],
        },
      ],
      related: [
        "Mniej marnowania",
        "Jak długo trzyma się jedzenie?",
        "Listy zakupów",
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
    nl: {
      metaTitle: "Boodschappenlijsten",
      eyebrow: "Boodschappenlijsten",
      crumb: "Boodschappenlijsten",
      h1: "Een boodschappenlijst die zichzelf maakt",
      lede: "Copantry vergelijkt je weekmenu met wat er al in je voorraadkast ligt en maakt een boodschappenlijst van alleen de ontbrekende producten — geordend op schap en realtime gedeeld met je hele huishouden.",
      sections: [
        {
          h2: "Koop niets meer wat je al hebt",
          body: "Omdat Copantry je voorraadkast controleert voordat het iets toevoegt, zet het nooit iets op je lijst wat je al hebt. Die ene gewoonte haalt de meeste dubbele aankopen weg — en de meeste verspilling.",
        },
        {
          h2: "Gemaakt voor de winkel zelf",
          body: "Je lijst is per schap gegroepeerd zodat je de winkel in één ronde doorloopt, en producten worden voor iedereen in het huishouden live afgevinkt.",
          bullets: [
            {
              title: "Automatisch uit je planning",
              desc: "Plan maaltijden en krijg precies wat je moet kopen.",
            },
            {
              title: "Op schapvolgorde",
              desc: "Geen dubbele rondjes door de winkel.",
            },
            {
              title: "Realtime gedeeld",
              desc: "Wie in de winkel staat, ziet de actuele lijst.",
            },
            {
              title: "Op weg naar online bestellen",
              desc: "Gebouwd om de gaten helemaal tot de kassa te brengen.",
            },
          ],
        },
      ],
      related: [
        "Maaltijden plannen",
        "Voorraadkast bijhouden",
        "Koken met een budget",
      ],
    },
    sv: {
      metaTitle: "Inköpslistor",
      eyebrow: "Inköpslistor",
      crumb: "Inköpslistor",
      h1: "En inköpslista som bygger sig själv",
      lede: "Copantry jämför din matsedel med det som redan finns i skafferiet och skapar en inköpslista med bara det som saknas — ordnad efter butiksgång och delad med hela hushållet i realtid.",
      sections: [
        {
          h2: "Sluta köpa sådant du redan har",
          body: "Eftersom Copantry kollar skafferiet innan den lägger till något, hamnar aldrig något du redan äger på listan. Den enda vanan tar bort de flesta dubbelköpen — och det mesta svinnet.",
        },
        {
          h2: "Gjord för själva butiken",
          body: "Listan är grupperad efter avdelning så att du går igenom butiken i ett svep, och varor bockas av live för alla i hushållet.",
          bullets: [
            {
              title: "Skapas automatiskt ur planen",
              desc: "Planera måltider, få exakt det du behöver köpa.",
            },
            {
              title: "Sorterad efter butiksgång",
              desc: "Inga extra vändor genom butiken.",
            },
            {
              title: "Delas i realtid",
              desc: "Den som är i butiken ser listan direkt.",
            },
            {
              title: "På väg mot nätbeställning",
              desc: "Byggd för att ta luckorna hela vägen till kassan.",
            },
          ],
        },
      ],
      related: ["Måltidsplanering", "Koll på skafferiet", "Laga mat på budget"],
    },
    da: {
      metaTitle: "Indkøbslister",
      eyebrow: "Indkøbslister",
      crumb: "Indkøbslister",
      h1: "En indkøbsliste, der bygger sig selv",
      lede: "Copantry sammenligner din madplan med det, der allerede står i spisekammeret, og laver en indkøbsliste med kun de manglende varer — ordnet efter butiksgang og delt med hele husstanden i realtid.",
      sections: [
        {
          h2: "Hold op med at købe det, du allerede har",
          body: "Fordi Copantry tjekker dit spisekammer, før den tilføjer noget, ender der aldrig noget på listen, som du allerede ejer. Den ene vane fjerner de fleste dobbeltkøb — og det meste spild.",
        },
        {
          h2: "Lavet til selve butikken",
          body: "Listen er grupperet efter afdeling, så du går gennem butikken i én omgang, og varer bliver krydset af live for alle i husstanden.",
          bullets: [
            {
              title: "Laves automatisk ud fra planen",
              desc: "Planlæg måltider, og få præcis det, du skal købe.",
            },
            {
              title: "Sorteret efter butiksgang",
              desc: "Ingen ekstra ture frem og tilbage i butikken.",
            },
            {
              title: "Deles i realtid",
              desc: "Den, der står i butikken, ser den aktuelle liste.",
            },
            {
              title: "På vej mod onlinebestilling",
              desc: "Bygget til at tage hullerne hele vejen til kassen.",
            },
          ],
        },
      ],
      related: [
        "Madplanlægning",
        "Styr på spisekammeret",
        "Madlavning på budget",
      ],
    },
    fi: {
      metaTitle: "Ostoslistat",
      eyebrow: "Ostoslistat",
      crumb: "Ostoslistat",
      h1: "Ostoslista, joka kokoaa itsensä",
      lede: "Copantry vertaa ruokasuunnitelmaasi siihen, mitä ruokakomerossasi jo on, ja luo ostoslistan vain puuttuvista tuotteista — hyllyjärjestyksessä ja jaettuna koko talouden kanssa reaaliajassa.",
      sections: [
        {
          h2: "Lopeta sellaisen ostaminen, mitä sinulla jo on",
          body: "Koska Copantry tarkistaa ruokakomerosi ennen kuin lisää mitään, listalle ei koskaan päädy jotain, mitä jo omistat. Tuo yksi tapa poistaa suurimman osan tuplaostoista — ja suurimman osan hävikistä.",
        },
        {
          h2: "Suunniteltu itse kauppareissua varten",
          body: "Listasi on ryhmitelty hyllyjen mukaan, joten kuljet kaupan läpi yhdellä kierroksella, ja tuotteet ruksitaan reaaliajassa kaikille talouden jäsenille.",
          bullets: [
            {
              title: "Syntyy automaattisesti suunnitelmastasi",
              desc: "Suunnittele ateriat, saat täsmälleen sen, mitä pitää ostaa.",
            },
            {
              title: "Hyllyjärjestyksessä",
              desc: "Ei enää edestakaisin ravaamista kaupassa.",
            },
            {
              title: "Jaettu reaaliajassa",
              desc: "Kaupassa oleva näkee listan elävänä.",
            },
            {
              title: "Kohti verkkotilausta",
              desc: "Rakennettu viemään puuttuvat aina kassalle asti.",
            },
          ],
        },
      ],
      related: [
        "Ateriasuunnittelu",
        "Ruokakomeron seuranta",
        "Edullinen ruoanlaitto",
      ],
    },
    no: {
      metaTitle: "Handlelister",
      eyebrow: "Handlelister",
      crumb: "Handlelister",
      h1: "En handleliste som bygger seg selv",
      lede: "Copantry sammenligner matplanen din med det som allerede står i spiskammeret, og lager en handleliste med bare det som mangler — ordnet etter butikkgang og delt med hele husholdningen i sanntid.",
      sections: [
        {
          h2: "Slutt å kjøpe det du allerede har",
          body: "Fordi Copantry sjekker spiskammeret før den legger til noe, havner aldri noe du allerede eier på listen. Den ene vanen fjerner de fleste dobbeltkjøpene — og det meste av svinnet.",
        },
        {
          h2: "Laget for selve butikken",
          body: "Listen er gruppert etter avdeling så du går gjennom butikken i én runde, og varer krysses av live for alle i husholdningen.",
          bullets: [
            {
              title: "Lages automatisk fra planen",
              desc: "Planlegg måltider, få nøyaktig det du må kjøpe.",
            },
            {
              title: "Sortert etter butikkgang",
              desc: "Ingen ekstra runder gjennom butikken.",
            },
            {
              title: "Deles i sanntid",
              desc: "Den som er i butikken ser listen live.",
            },
            {
              title: "På vei mot nettbestilling",
              desc: "Bygget for å ta hullene hele veien til kassen.",
            },
          ],
        },
      ],
      related: [
        "Måltidsplanlegging",
        "Oversikt over spiskammeret",
        "Lage mat på budsjett",
      ],
    },
    pl: {
      metaTitle: "Listy zakupów",
      eyebrow: "Listy zakupów",
      crumb: "Listy zakupów",
      h1: "Lista zakupów, która układa się sama",
      lede: "Copantry porównuje twój jadłospis z zawartością spiżarni i tworzy listę zakupów wyłącznie z brakujących produktów — uporządkowaną według alejek i dzieloną z całym gospodarstwem na bieżąco.",
      sections: [
        {
          h2: "Przestań kupować to, co już masz",
          body: "Ponieważ Copantry sprawdza spiżarnię, zanim cokolwiek doda, nigdy nie wpisze na listę czegoś, co już masz. Ten jeden nawyk usuwa większość podwójnych zakupów — i większość marnotrawstwa.",
        },
        {
          h2: "Zaprojektowana pod prawdziwe zakupy",
          body: "Twoja lista jest pogrupowana według alejek, więc przechodzisz sklep jednym przejściem, a produkty odhaczają się na żywo dla wszystkich domowników.",
          bullets: [
            {
              title: "Tworzona automatycznie z planu",
              desc: "Zaplanuj posiłki i dostaniesz dokładnie to, co trzeba kupić.",
            },
            {
              title: "W kolejności alejek",
              desc: "Koniec z zawracaniem przez cały sklep.",
            },
            {
              title: "Dzielona na bieżąco",
              desc: "Kto jest w sklepie, widzi aktualną listę.",
            },
            {
              title: "W stronę zamówień online",
              desc: "Zbudowana, by doprowadzić braki aż do kasy.",
            },
          ],
        },
      ],
      related: [
        "Planowanie posiłków",
        "Prowadzenie spiżarni",
        "Gotowanie z budżetem",
      ],
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
    nl: {
      metaTitle: "Recepten",
      eyebrow: "Recepten",
      crumb: "Recepten",
      h1: "Al je recepten, waar ze ook vandaan komen, op één plek",
      lede: "Copantry importeert met AI recepten van elke website, foto, pdf of lap tekst en bewaart ze in één doorzoekbare verzameling. Elk recept blijft in zijn oorspronkelijke taal, schaalt naar je huishouden en stroomt rechtstreeks door naar je weekmenu en boodschappenlijst.",
      sections: [
        {
          h2: "Bewaar in seconden een recept van waar dan ook",
          body: "Plak een link, fotografeer een pagina uit een kookboek of plak tekst, en Copantry haalt de ingrediënten, stappen, foto en tijden eruit in een net, bewerkbaar recept — ongeacht waar het vandaan kwam.",
          bullets: [
            {
              title: "Importeer vanaf elke URL",
              desc: "Blogs, videosites en socialmediaposts inbegrepen.",
            },
            {
              title: "Foto- en pdf-import",
              desc: "Maak van een kookboekpagina of receptkaart een echt recept.",
            },
            {
              title: "Schaalt naar je tafel",
              desc: "Stel het aantal porties in en de hoeveelheden passen zich aan.",
            },
            {
              title: "Blijft meertalig",
              desc: "Een Frans recept blijft Frans; de app spreekt jouw taal.",
            },
          ],
        },
        {
          h2: "Recepten die echt iets doen",
          body: "Een bewaard recept is geen dode bladwijzer. Plan het op je agenda en Copantry legt het naast je voorraadkast, schaalt het en zet alleen de ontbrekende ingrediënten op je boodschappenlijst.",
        },
      ],
      related: [
        "Maaltijden plannen",
        "Voor gezinnen",
        "Waarom Copantry",
        "Recepten ontdekken",
      ],
    },
    sv: {
      metaTitle: "Recept",
      eyebrow: "Recept",
      crumb: "Recept",
      h1: "Alla dina recept, varifrån som helst, på ett ställe",
      lede: "Copantry importerar recept från vilken webbplats, bild, PDF eller textmassa som helst med hjälp av AI och samlar dem i en sökbar samling. Varje recept stannar på sitt originalspråk, anpassas efter hushållet och går rakt in i din matsedel och inköpslista.",
      sections: [
        {
          h2: "Spara ett recept varifrån som helst på några sekunder",
          body: "Klistra in en länk, fotografera en kokbokssida eller klistra in text, så plockar Copantry ut ingredienser, steg, bild och tider till ett rent, redigerbart recept — oavsett var det kom ifrån.",
          bullets: [
            {
              title: "Importera från vilken webbadress som helst",
              desc: "Bloggar, videosajter och sociala inlägg inkluderade.",
            },
            {
              title: "Import från foto och PDF",
              desc: "Gör en kokbokssida eller ett receptkort till ett riktigt recept.",
            },
            {
              title: "Anpassas efter ditt bord",
              desc: "Ställ in antal portioner så justeras mängderna.",
            },
            {
              title: "Förblir flerspråkigt",
              desc: "Ett franskt recept förblir franskt; appen talar ditt språk.",
            },
          ],
        },
        {
          h2: "Recept som faktiskt gör något",
          body: "Ett sparat recept är inget dött bokmärke. Planera in det i kalendern så stämmer Copantry av det mot skafferiet, anpassar mängderna och lägger bara de ingredienser som saknas på inköpslistan.",
        },
      ],
      related: [
        "Måltidsplanering",
        "För familjer",
        "Varför Copantry",
        "Upptäck recept",
      ],
    },
    da: {
      metaTitle: "Opskrifter",
      eyebrow: "Opskrifter",
      crumb: "Opskrifter",
      h1: "Alle dine opskrifter, fra hvor som helst, ét sted",
      lede: "Copantry importerer opskrifter fra en hvilken som helst hjemmeside, et billede, en PDF eller en tekstblok ved hjælp af AI og samler dem i én søgbar samling. Hver opskrift bliver på sit originalsprog, tilpasses husstanden og går direkte videre til din madplan og indkøbsliste.",
      sections: [
        {
          h2: "Gem en opskrift fra hvor som helst på få sekunder",
          body: "Indsæt et link, fotografér en kogebogsside eller indsæt tekst, så trækker Copantry ingredienser, trin, billede og tider ud i en ren, redigerbar opskrift — uanset hvor den kom fra.",
          bullets: [
            {
              title: "Importér fra enhver URL",
              desc: "Blogs, videosider og opslag på sociale medier inkluderet.",
            },
            {
              title: "Import fra billede og PDF",
              desc: "Gør en kogebogsside eller et opskriftskort til en rigtig opskrift.",
            },
            {
              title: "Tilpasses dit bord",
              desc: "Angiv antal portioner, så justeres mængderne.",
            },
            {
              title: "Forbliver flersproget",
              desc: "En fransk opskrift bliver fransk; appen taler dit sprog.",
            },
          ],
        },
        {
          h2: "Opskrifter, der faktisk gør noget",
          body: "En gemt opskrift er ikke et dødt bogmærke. Planlæg den ind i kalenderen, så holder Copantry den op mod dit spisekammer, tilpasser mængderne og sætter kun de manglende ingredienser på indkøbslisten.",
        },
      ],
      related: [
        "Madplanlægning",
        "Til familier",
        "Hvorfor Copantry",
        "Opdag opskrifter",
      ],
    },
    fi: {
      metaTitle: "Reseptit",
      eyebrow: "Reseptit",
      crumb: "Reseptit",
      h1: "Kaikki reseptisi, mistä tahansa, yhdessä paikassa",
      lede: "Copantry tuo tekoälyn avulla reseptejä mistä tahansa verkkosivulta, kuvasta, PDF:stä tai tekstipätkästä ja säilyttää ne yhdessä haettavassa kokoelmassa. Jokainen resepti pysyy alkukielellään, mitoittuu talouteesi ja siirtyy suoraan ruokasuunnitelmaasi ja ostoslistallesi.",
      sections: [
        {
          h2: "Tallenna resepti mistä tahansa sekunneissa",
          body: "Liitä linkki, kuvaa keittokirjan sivu tai liitä tekstiä, niin Copantry poimii ainekset, vaiheet, kuvan ja ajat siistiksi, muokattavaksi reseptiksi — riippumatta siitä, mistä se on peräisin.",
          bullets: [
            {
              title: "Tuo mistä tahansa osoitteesta",
              desc: "Myös blogit, videosivustot ja somejulkaisut.",
            },
            {
              title: "Tuonti kuvasta ja PDF:stä",
              desc: "Tee keittokirjan sivusta tai reseptikortista oikea resepti.",
            },
            {
              title: "Mitoittuu pöytääsi",
              desc: "Aseta annosmäärä, niin määrät mukautuvat.",
            },
            {
              title: "Pysyy monikielisenä",
              desc: "Ranskalainen resepti pysyy ranskaksi; sovellus puhuu sinun kieltäsi.",
            },
          ],
        },
        {
          h2: "Reseptit, jotka oikeasti tekevät jotain",
          body: "Tallennettu resepti ei ole kuollut kirjanmerkki. Suunnittele se kalenteriisi, niin Copantry vertaa sen ruokakomeroosi, mitoittaa sen ja lisää ostoslistallesi vain puuttuvat ainekset.",
        },
      ],
      related: [
        "Ateriasuunnittelu",
        "Perheille",
        "Miksi Copantry",
        "Reseptien löytäminen",
      ],
    },
    no: {
      metaTitle: "Oppskrifter",
      eyebrow: "Oppskrifter",
      crumb: "Oppskrifter",
      h1: "Alle oppskriftene dine, fra hvor som helst, på ett sted",
      lede: "Copantry importerer oppskrifter fra hvilken som helst nettside, bilde, PDF eller tekstblokk ved hjelp av KI og samler dem i én søkbar samling. Hver oppskrift blir på sitt originalspråk, tilpasses husholdningen og går rett videre til matplanen og handlelisten din.",
      sections: [
        {
          h2: "Lagre en oppskrift fra hvor som helst på sekunder",
          body: "Lim inn en lenke, fotografer en kokebokside eller lim inn tekst, så henter Copantry ut ingredienser, trinn, bilde og tider til en ryddig, redigerbar oppskrift — uansett hvor den kom fra.",
          bullets: [
            {
              title: "Importer fra hvilken som helst nettadresse",
              desc: "Blogger, videosider og innlegg i sosiale medier inkludert.",
            },
            {
              title: "Import fra bilde og PDF",
              desc: "Gjør en kokebokside eller et oppskriftskort til en ekte oppskrift.",
            },
            {
              title: "Tilpasses bordet ditt",
              desc: "Angi antall porsjoner, så justeres mengdene.",
            },
            {
              title: "Forblir flerspråklig",
              desc: "En fransk oppskrift blir fransk; appen snakker ditt språk.",
            },
          ],
        },
        {
          h2: "Oppskrifter som faktisk gjør noe",
          body: "En lagret oppskrift er ikke et dødt bokmerke. Planlegg den inn i kalenderen, så holder Copantry den opp mot spiskammeret, tilpasser mengdene og legger bare de manglende ingrediensene på handlelisten.",
        },
      ],
      related: [
        "Måltidsplanlegging",
        "For familier",
        "Hvorfor Copantry",
        "Oppdag oppskrifter",
      ],
    },
    pl: {
      metaTitle: "Przepisy",
      eyebrow: "Przepisy",
      crumb: "Przepisy",
      h1: "Wszystkie twoje przepisy, skądkolwiek pochodzą, w jednym miejscu",
      lede: "Copantry importuje przepisy z dowolnej strony, zdjęcia, pliku PDF czy bloku tekstu przy pomocy SI i trzyma je w jednej przeszukiwalnej kolekcji. Każdy przepis zostaje w swoim oryginalnym języku, przelicza się na twoje gospodarstwo i trafia prosto do jadłospisu i listy zakupów.",
      sections: [
        {
          h2: "Zapisz przepis skądkolwiek w kilka sekund",
          body: "Wklej link, sfotografuj stronę książki kucharskiej albo wklej tekst, a Copantry wyciągnie składniki, kroki, zdjęcie i czasy do czytelnego, edytowalnego przepisu — niezależnie od tego, skąd pochodzi.",
          bullets: [
            {
              title: "Import z dowolnego adresu URL",
              desc: "Także blogi, serwisy wideo i wpisy w mediach społecznościowych.",
            },
            {
              title: "Import ze zdjęcia i PDF-u",
              desc: "Zamień stronę książki kucharskiej lub fiszkę w prawdziwy przepis.",
            },
            {
              title: "Przelicza się na twój stół",
              desc: "Ustaw liczbę porcji, a ilości się dopasują.",
            },
            {
              title: "Pozostaje wielojęzyczny",
              desc: "Francuski przepis zostaje francuski; aplikacja mówi twoim językiem.",
            },
          ],
        },
        {
          h2: "Przepisy, które naprawdę coś robią",
          body: "Zapisany przepis to nie martwa zakładka. Wstaw go do kalendarza, a Copantry porówna go ze spiżarnią, przeliczy ilości i dopisze do listy zakupów wyłącznie brakujące składniki.",
        },
      ],
      related: [
        "Planowanie posiłków",
        "Dla rodzin",
        "Dlaczego Copantry",
        "Odkrywanie przepisów",
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
    nl: {
      metaTitle: "Recepten ontdekken",
      eyebrow: "Recepten ontdekken",
      crumb: "Recepten ontdekken",
      h1: "Verken recepten van het hele web, zonder Copantry te verlaten",
      lede: "Het tabblad Ontdekken van Copantry doorzoekt een geselecteerde verzameling receptensites en opent elk resultaat in een schone, advertentievrije lezer in de app zelf — vind iets wat je aanstaat en importeer het direct in je verzameling, nog altijd in de oorspronkelijke taal.",
      sections: [
        {
          h2: "Eén keer zoeken, overal lezen — geen advertenties, geen vijftien tabbladen",
          body: "Typ waar je zin in hebt en Ontdekken zoekt in één keer over een geselecteerde verzameling receptensites. Tik op een resultaat en het opent in een rustige lezer binnen Copantry — geen pop-ups, geen automatisch startende video's en geen receptblogs achter een betaalmuur.",
          bullets: [
            {
              title: "Geselecteerde bronnen",
              desc: "Echte receptensites, geen willekeurige zoekresultaten.",
            },
            {
              title: "Lezer zonder afleiding",
              desc: "Lees het recept, niet de reclame eromheen.",
            },
            {
              title: "Importeren met één tik",
              desc: "Bevalt het? Haal het meteen in je eigen verzameling.",
            },
            {
              title: "Bewaren voor later",
              desc: "Sla een vondst op voordat je hebt besloten wat je eet.",
            },
          ],
        },
        {
          h2: "De vondsten worden beter naarmate je het meer gebruikt",
          body: "Ontdekken leunt naar bronnen en recepten die mensen daadwerkelijk gaan koken, en naar wat populair is in jouw land — zodat de resultaten scherper worden in plaats van algemeen te blijven.",
        },
      ],
      related: ["Recepten", "Maaltijden plannen", "Waarom Copantry"],
    },
    sv: {
      metaTitle: "Upptäck recept",
      eyebrow: "Upptäck recept",
      crumb: "Upptäck recept",
      h1: "Utforska recept från hela webben, utan att lämna Copantry",
      lede: "Copantrys Upptäck-flik söker i en utvald bas av receptsajter och öppnar varje träff i en ren, annonsfri läsare direkt i appen — hitta något du gillar och importera det rakt in i din samling, fortfarande på originalspråket.",
      sections: [
        {
          h2: "Sök en gång, läs var som helst — inga annonser, inga femton flikar",
          body: "Skriv vad du är sugen på, så söker Upptäck i en utvald bas av receptsajter på en gång. Tryck på en träff så öppnas den i en distraktionsfri läsare inuti Copantry — inga popup-fönster, ingen autostartande video och inga receptbloggar bakom betalvägg.",
          bullets: [
            {
              title: "Utvalda källor",
              desc: "Riktiga receptsajter, inte slumpmässiga sökträffar.",
            },
            {
              title: "Distraktionsfri läsare",
              desc: "Läs receptet, inte reklampausen runt omkring.",
            },
            {
              title: "Import med ett tryck",
              desc: "Gillar du det? Ta in det direkt i din egen samling.",
            },
            {
              title: "Spara till senare",
              desc: "Bokmärk ett fynd innan du bestämt vad det blir till middag.",
            },
          ],
        },
        {
          h2: "Träffarna blir bättre ju mer du använder den",
          body: "Upptäck lutar åt källor och recept som folk faktiskt lagar, och åt det som är populärt i ditt land — så resultaten skärps med tiden i stället för att förbli generiska.",
        },
      ],
      related: ["Recept", "Måltidsplanering", "Varför Copantry"],
    },
    da: {
      metaTitle: "Opdag opskrifter",
      eyebrow: "Opdag opskrifter",
      crumb: "Opdag opskrifter",
      h1: "Udforsk opskrifter fra hele nettet uden at forlade Copantry",
      lede: "Copantrys Opdag-fane søger i en udvalgt base af opskriftssider og åbner hvert resultat i en ren, reklamefri læser direkte i appen — find noget, du kan lide, og importér det lige ind i din samling, stadig på originalsproget.",
      sections: [
        {
          h2: "Søg én gang, læs hvor som helst — ingen reklamer, ingen femten faner",
          body: "Skriv, hvad du har lyst til, så søger Opdag på tværs af en udvalgt base af opskriftssider på én gang. Tryk på et resultat, og det åbner i en rolig læser inde i Copantry — ingen pop op-vinduer, ingen video, der starter af sig selv, og ingen opskriftsblogs bag betalingsmur.",
          bullets: [
            {
              title: "Udvalgte kilder",
              desc: "Rigtige opskriftssider, ikke tilfældige søgeresultater.",
            },
            {
              title: "Læser uden forstyrrelser",
              desc: "Læs opskriften, ikke reklamepausen omkring den.",
            },
            {
              title: "Import med ét tryk",
              desc: "Kan du lide den? Tag den direkte ind i din egen samling.",
            },
            {
              title: "Gem til senere",
              desc: "Sæt et bogmærke, før du har besluttet, hvad der skal spises.",
            },
          ],
        },
        {
          h2: "Fundene bliver bedre, jo mere du bruger den",
          body: "Opdag læner sig mod kilder og opskrifter, som folk rent faktisk går i gang med at lave, og mod det, der er populært i dit land — så resultaterne bliver skarpere med tiden i stedet for at forblive generiske.",
        },
      ],
      related: ["Opskrifter", "Madplanlægning", "Hvorfor Copantry"],
    },
    fi: {
      metaTitle: "Reseptien löytäminen",
      eyebrow: "Reseptien löytäminen",
      crumb: "Reseptien löytäminen",
      h1: "Tutki koko verkon reseptejä poistumatta Copantrysta",
      lede: "Copantryn Löydä-välilehti hakee valikoidusta joukosta reseptisivustoja ja avaa jokaisen tuloksen siistiin, mainoksettomaan lukunäkymään suoraan sovelluksessa — löydä jotain mieluista ja tuo se suoraan kokoelmaasi, edelleen alkukielellään.",
      sections: [
        {
          h2: "Hae kerran, lue missä vain — ei mainoksia, ei viittätoista välilehteä",
          body: "Kirjoita, mitä tekisi mieli, niin Löydä hakee kerralla valikoidusta joukosta reseptisivustoja. Napauta tulosta, ja se avautuu häiriöttömään lukunäkymään Copantryn sisällä — ei ponnahdusikkunoita, itsestään käynnistyviä videoita eikä maksumuurin takana olevia reseptiblogeja.",
          bullets: [
            {
              title: "Valikoidut lähteet",
              desc: "Oikeita reseptisivustoja, ei satunnaisia hakutuloksia.",
            },
            {
              title: "Häiriötön lukunäkymä",
              desc: "Lue resepti, älä sen ympärillä olevaa mainoskatkoa.",
            },
            {
              title: "Tuonti yhdellä napautuksella",
              desc: "Pidätkö siitä? Tuo se suoraan omaan kokoelmaasi.",
            },
            {
              title: "Talteen myöhemmäksi",
              desc: "Merkitse löytö muistiin ennen kuin olet päättänyt päivällisestä.",
            },
          ],
        },
        {
          h2: "Löydöt paranevat sitä mukaa kun käytät sitä",
          body: "Löydä painottaa lähteitä ja reseptejä, joita ihmiset oikeasti päätyvät tekemään, sekä sitä, mikä on suosittua omassa maassasi — joten tulokset terävöityvät ajan myötä sen sijaan että pysyisivät yleisluontoisina.",
        },
      ],
      related: ["Reseptit", "Ateriasuunnittelu", "Miksi Copantry"],
    },
    no: {
      metaTitle: "Oppdag oppskrifter",
      eyebrow: "Oppdag oppskrifter",
      crumb: "Oppdag oppskrifter",
      h1: "Utforsk oppskrifter fra hele nettet uten å forlate Copantry",
      lede: "Copantrys Oppdag-fane søker i en utvalgt base av oppskriftssider og åpner hvert treff i en ren, reklamefri leser rett i appen — finn noe du liker, og importer det rett inn i samlingen din, fortsatt på originalspråket.",
      sections: [
        {
          h2: "Søk én gang, les hvor som helst — ingen reklame, ingen femten faner",
          body: "Skriv hva du har lyst på, så søker Oppdag gjennom en utvalgt base av oppskriftssider på én gang. Trykk på et treff, og det åpnes i en rolig leser inne i Copantry — ingen sprettoppvinduer, ingen video som starter av seg selv, og ingen oppskriftsblogger bak betalingsmur.",
          bullets: [
            {
              title: "Utvalgte kilder",
              desc: "Ekte oppskriftssider, ikke tilfeldige søketreff.",
            },
            {
              title: "Leser uten forstyrrelser",
              desc: "Les oppskriften, ikke reklamepausen rundt den.",
            },
            {
              title: "Import med ett trykk",
              desc: "Liker du den? Ta den rett inn i din egen samling.",
            },
            {
              title: "Lagre til senere",
              desc: "Sett et bokmerke før du har bestemt hva det blir til middag.",
            },
          ],
        },
        {
          h2: "Funnene blir bedre jo mer du bruker den",
          body: "Oppdag lener seg mot kilder og oppskrifter som folk faktisk går i gang med å lage, og mot det som er populært i landet ditt — så resultatene blir skarpere over tid i stedet for å forbli generiske.",
        },
      ],
      related: ["Oppskrifter", "Måltidsplanlegging", "Hvorfor Copantry"],
    },
    pl: {
      metaTitle: "Odkrywanie przepisów",
      eyebrow: "Odkrywanie przepisów",
      crumb: "Odkrywanie przepisów",
      h1: "Przeglądaj przepisy z całej sieci, nie wychodząc z Copantry",
      lede: "Zakładka Odkrywaj w Copantry przeszukuje wyselekcjonowaną bazę stron z przepisami i otwiera każdy wynik w czystym, wolnym od reklam czytniku wewnątrz aplikacji — znajdź coś, co ci się spodoba, i zaimportuj to prosto do swojej kolekcji, wciąż w oryginalnym języku.",
      sections: [
        {
          h2: "Szukaj raz, czytaj wszędzie — bez reklam, bez piętnastu kart",
          body: "Wpisz, na co masz ochotę, a Odkrywaj przeszuka naraz wyselekcjonowaną bazę stron z przepisami. Dotknij wyniku, a otworzy się w spokojnym czytniku wewnątrz Copantry — bez wyskakujących okienek, samoodtwarzających się filmów i blogów za paywallem.",
          bullets: [
            {
              title: "Wyselekcjonowane źródła",
              desc: "Prawdziwe strony z przepisami, a nie przypadkowe wyniki wyszukiwania.",
            },
            {
              title: "Czytnik bez rozpraszaczy",
              desc: "Czytaj przepis, a nie reklamę wokół niego.",
            },
            {
              title: "Import jednym dotknięciem",
              desc: "Podoba ci się? Weź go od razu do własnej kolekcji.",
            },
            {
              title: "Zapisz na później",
              desc: "Zapisz znalezisko, zanim zdecydujesz, co na kolację.",
            },
          ],
        },
        {
          h2: "Wyniki są coraz lepsze, im częściej korzystasz",
          body: "Odkrywaj skłania się ku źródłom i przepisom, które ludzie faktycznie gotują, oraz ku temu, co jest popularne w twoim kraju — więc wyniki wyostrzają się z czasem, zamiast pozostawać ogólne.",
        },
      ],
      related: ["Przepisy", "Planowanie posiłków", "Dlaczego Copantry"],
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
    nl: {
      metaTitle: "Wijn erbij",
      eyebrow: "Wijn erbij",
      crumb: "Wijn erbij",
      h1: "Weet welke wijn je opentrekt, uit de flessen die je al hebt",
      lede: "Copantry houdt eenvoudig bij welke wijn er in je kelder ligt en stelt op verzoek een combinatie voor bij de maaltijd van vanavond — een fles die je al hebt als er echt een past, plus altijd een algemene stijl om naar te zoeken.",
      sections: [
        {
          h2: "Jouw kelder, geen wijnencyclopedie",
          body: "Voeg een fles toe met alleen de naam — producent, druif, jaar en een notitie (waar je hem kocht, wie hem gaf) zijn allemaal optioneel. Houd bij hoeveel je er hebt en vink flessen af zodra je ze drinkt.",
          bullets: [
            {
              title: "Bijna niets invullen",
              desc: "Alleen de naam van de fles is verplicht om hem toe te voegen.",
            },
            {
              title: "Combinatie op verzoek",
              desc: "Vraag om een match bij een recept of een hele geplande maaltijd — nooit automatisch.",
            },
            {
              title: "Raadt aan wat je hebt",
              desc: "Stelt eerst een fles uit je eigen kelder voor, als er een past.",
            },
            {
              title: "Altijd een alternatief",
              desc: "Niets passends in je kelder? Je krijgt nog steeds een stijl om naar te zoeken.",
            },
          ],
        },
        {
          h2: "Werkt voor één recept of een hele geplande maaltijd",
          body: "Krijg een wijnsuggestie op elke receptpagina, of in één keer voor alles wat op een dag gepland staat. Koppel de keuze aan die maaltijd en de voorraad wordt automatisch bijgewerkt zodra je gekookt hebt.",
        },
      ],
      related: ["Recepten", "Maaltijden plannen", "Voorraadkast bijhouden"],
    },
    sv: {
      metaTitle: "Vinmatchning",
      eyebrow: "Vinmatchning",
      crumb: "Vinmatchning",
      h1: "Vet vilket vin du ska öppna, bland flaskorna du redan har",
      lede: "Copantry håller ett enkelt register över vinet i din källare och föreslår, på begäran, en matchning till kvällens måltid — en flaska du redan äger när någon verkligen passar, plus en allmän stil att leta efter oavsett.",
      sections: [
        {
          h2: "Din källare, inte ett vinlexikon",
          body: "Lägg till en flaska med bara namnet — producent, druva, årgång och en anteckning (var du köpte den, vem som gav dig den) är alla frivilliga. Håll koll på hur många du har och markera flaskor som urdruckna efter hand.",
          bullets: [
            {
              title: "Knappt något att fylla i",
              desc: "Bara flaskans namn krävs för att lägga till den.",
            },
            {
              title: "Matchning på begäran",
              desc: "Be om en matchning till ett recept eller en hel planerad måltid — aldrig automatiskt.",
            },
            {
              title: "Rekommenderar det du äger",
              desc: "Föreslår i första hand en flaska ur din egen källare, när någon passar.",
            },
            {
              title: "Alltid ett alternativ",
              desc: "Ingen matchning i källaren? Du får ändå en stil att leta efter.",
            },
          ],
        },
        {
          h2: "Fungerar för ett recept eller en hel planerad måltid",
          body: "Få ett vinförslag på vilken receptsida som helst, eller för allt som är planerat i en kalenderlucka på en gång. Koppla valet till måltiden så uppdateras lagret automatiskt när du har lagat.",
        },
      ],
      related: ["Recept", "Måltidsplanering", "Koll på skafferiet"],
    },
    da: {
      metaTitle: "Vin til maden",
      eyebrow: "Vin til maden",
      crumb: "Vin til maden",
      h1: "Vid, hvilken vin du skal åbne, blandt de flasker du allerede har",
      lede: "Copantry fører et enkelt register over vinen i din kælder og foreslår på anmodning en vin til aftenens måltid — en flaske, du allerede ejer, når en virkelig passer, plus en generel stil at lede efter under alle omstændigheder.",
      sections: [
        {
          h2: "Din kælder, ikke et vinleksikon",
          body: "Tilføj en flaske med bare navnet — producent, drue, årgang og en note (hvor du købte den, hvem der gav dig den) er alle valgfrie. Hold styr på, hvor mange du har, og markér flasker som drukket undervejs.",
          bullets: [
            {
              title: "Næsten intet at udfylde",
              desc: "Kun flaskens navn er nødvendigt for at tilføje den.",
            },
            {
              title: "Forslag på anmodning",
              desc: "Bed om et match til en opskrift eller et helt planlagt måltid — aldrig automatisk.",
            },
            {
              title: "Anbefaler det, du ejer",
              desc: "Foreslår først en flaske fra din egen kælder, når en passer.",
            },
            {
              title: "Altid et alternativ",
              desc: "Intet match i kælderen? Du får stadig en stil at lede efter.",
            },
          ],
        },
        {
          h2: "Virker til én opskrift eller et helt planlagt måltid",
          body: "Få et vinforslag på enhver opskriftsside eller til alt, der er planlagt i en kalenderplads, på én gang. Knyt valget til måltidet, så opdateres beholdningen automatisk, når du har lavet maden.",
        },
      ],
      related: ["Opskrifter", "Madplanlægning", "Styr på spisekammeret"],
    },
    fi: {
      metaTitle: "Viinisuositukset",
      eyebrow: "Viinisuositukset",
      crumb: "Viinisuositukset",
      h1: "Tiedä, mikä viini avata niistä pulloista, joita sinulla jo on",
      lede: "Copantry pitää yksinkertaista kirjaa viinikellarisi pulloista ja ehdottaa pyydettäessä paria illan ateriaan — pullon, joka sinulla jo on, kun jokin aidosti sopii, sekä joka tapauksessa yleisen tyylin, jota kannattaa etsiä.",
      sections: [
        {
          h2: "Sinun kellarisi, ei viinitietosanakirja",
          body: "Lisää pullo pelkällä nimellä — tuottaja, rypäle, vuosikerta ja muistiinpano (mistä ostit, kuka antoi) ovat kaikki valinnaisia. Seuraa, montako sinulla on, ja merkitse pullot juoduiksi sitä mukaa.",
          bullets: [
            {
              title: "Tuskin mitään täytettävää",
              desc: "Vain pullon nimi vaaditaan sen lisäämiseen.",
            },
            {
              title: "Suositus pyydettäessä",
              desc: "Pyydä paria reseptille tai koko suunnitellulle aterialle — ei koskaan automaattisesti.",
            },
            {
              title: "Suosittelee sitä, mitä omistat",
              desc: "Ehdottaa ensin pulloa omasta kellaristasi, kun jokin sopii.",
            },
            {
              title: "Aina varavaihtoehto",
              desc: "Eikö kellarista löydy sopivaa? Saat silti tyylin, jota etsiä.",
            },
          ],
        },
        {
          h2: "Toimii yhdelle reseptille tai koko suunnitellulle aterialle",
          body: "Saat viiniehdotuksen millä tahansa reseptisivulla tai kerralla kaikelle, mitä kalenteripaikkaan on suunniteltu. Liitä valinta ateriaan, niin varasto päivittyy automaattisesti, kun olet kokannut.",
        },
      ],
      related: ["Reseptit", "Ateriasuunnittelu", "Ruokakomeron seuranta"],
    },
    no: {
      metaTitle: "Vin til maten",
      eyebrow: "Vin til maten",
      crumb: "Vin til maten",
      h1: "Vit hvilken vin du skal åpne, blant flaskene du allerede har",
      lede: "Copantry fører en enkel oversikt over vinen i kjelleren din og foreslår, på forespørsel, en vin til kveldens måltid — en flaske du allerede eier når en virkelig passer, pluss en generell stil å se etter uansett.",
      sections: [
        {
          h2: "Kjelleren din, ikke et vinleksikon",
          body: "Legg til en flaske med bare navnet — produsent, drue, årgang og et notat (hvor du kjøpte den, hvem som ga deg den) er alle valgfrie. Hold oversikt over hvor mange du har, og merk flasker som drukket underveis.",
          bullets: [
            {
              title: "Nesten ingenting å fylle ut",
              desc: "Bare flaskens navn kreves for å legge den til.",
            },
            {
              title: "Forslag på forespørsel",
              desc: "Be om et treff til en oppskrift eller et helt planlagt måltid — aldri automatisk.",
            },
            {
              title: "Anbefaler det du eier",
              desc: "Foreslår først en flaske fra din egen kjeller, når en passer.",
            },
            {
              title: "Alltid et alternativ",
              desc: "Ingen treff i kjelleren? Du får likevel en stil å se etter.",
            },
          ],
        },
        {
          h2: "Virker for én oppskrift eller et helt planlagt måltid",
          body: "Få et vinforslag på hvilken som helst oppskriftsside, eller for alt som er planlagt i en kalenderplass på én gang. Knytt valget til måltidet, så oppdateres beholdningen automatisk når du har laget maten.",
        },
      ],
      related: [
        "Oppskrifter",
        "Måltidsplanlegging",
        "Oversikt over spiskammeret",
      ],
    },
    pl: {
      metaTitle: "Dobór wina",
      eyebrow: "Dobór wina",
      crumb: "Dobór wina",
      h1: "Wiedz, które wino otworzyć, spośród butelek, które już masz",
      lede: "Copantry prowadzi prosty spis wina w twojej piwniczce i na życzenie proponuje dobór do dzisiejszego posiłku — butelkę, którą już masz, jeśli któraś naprawdę pasuje, a poza tym zawsze ogólny styl, którego warto szukać.",
      sections: [
        {
          h2: "Twoja piwniczka, a nie encyklopedia win",
          body: "Dodaj butelkę, podając samą nazwę — producent, szczep, rocznik i notatka (gdzie kupiłeś, kto ci ją dał) są nieobowiązkowe. Śledź, ile masz, i zaznaczaj butelki jako wypite na bieżąco.",
          bullets: [
            {
              title: "Prawie nic do wypełnienia",
              desc: "Do dodania butelki wystarczy sama nazwa.",
            },
            {
              title: "Dobór na życzenie",
              desc: "Poproś o dopasowanie do przepisu albo całego zaplanowanego posiłku — nigdy automatycznie.",
            },
            {
              title: "Poleca to, co masz",
              desc: "W pierwszej kolejności proponuje butelkę z twojej piwniczki, jeśli któraś pasuje.",
            },
            {
              title: "Zawsze jest alternatywa",
              desc: "Nic nie pasuje w piwniczce? I tak dostaniesz styl, którego warto poszukać.",
            },
          ],
        },
        {
          h2: "Działa dla jednego przepisu albo całego zaplanowanego posiłku",
          body: "Propozycję wina dostaniesz na dowolnej stronie przepisu albo naraz dla wszystkiego zaplanowanego w danym miejscu kalendarza. Przypisz wybór do posiłku, a zapas zaktualizuje się sam, gdy już ugotujesz.",
        },
      ],
      related: ["Przepisy", "Planowanie posiłków", "Prowadzenie spiżarni"],
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
    nl: {
      metaTitle: "Voor gezinnen",
      eyebrow: "Voor gezinnen",
      crumb: "Voor gezinnen",
      h1: "Voed het hele gezin met minder verspilling en minder stress",
      lede: "Copantry houdt je gezin op één gedeelde weekplanning en boodschappenlijst, plant rond het eten dat je al hebt en schaalt elk recept naar de grootte van je gezin — zodat niemand hoeft te raden wat er op tafel komt en er veel minder in de bak belandt.",
      sections: [
        {
          h2: "Kook één keer, voed iedereen — ook de kleintjes",
          body: "Plan gezinsmaaltijden waarbij een baby of peuter een versie eet van wat de volwassenen eten, en houd bij elk recept notities bij over wat je apart houdt of aanpast. Je kunt ook samen bijhouden welke nieuwe voedingsmiddelen en allergenen je hebt geïntroduceerd.",
        },
        {
          h2: "Eén waarheid voor het hele huishouden",
          body: "Geen “heb jij melk gehaald?”-berichtjes meer.",
          bullets: [
            {
              title: "Gedeelde planning en lijst",
              desc: "Iedereen ziet dezelfde week en boodschappenlijst, live.",
            },
            {
              title: "Op maat van je gezin",
              desc: "Recepten passen zich aan het aantal eters aan.",
            },
            {
              title: "Minder verspilling, lagere rekening",
              desc: "Planningen gebruiken wat je hebt voordat het bederft.",
            },
            {
              title: "Handig bij het bijvoeden",
              desc: "Notities om maaltijden aan te passen voor baby's en peuters.",
            },
          ],
        },
      ],
      related: ["Maaltijden plannen", "Voor stellen", "Koken met een budget"],
    },
    sv: {
      metaTitle: "För familjer",
      eyebrow: "För familjer",
      crumb: "För familjer",
      h1: "Mätta hela familjen med mindre svinn och mindre stress",
      lede: "Copantry håller familjen på en gemensam matsedel och inköpslista, planerar utifrån maten ni redan har och anpassar varje recept efter familjens storlek — så ingen behöver gissa vad det blir till middag och långt mindre hamnar i soporna.",
      sections: [
        {
          h2: "Laga en gång, mätta alla — även de allra minsta",
          body: "Planera familjemåltider där en bebis eller ettåring äter en variant av det de vuxna äter, och håll anteckningar på varje recept om vad som ska tas undan eller anpassas. Ni kan också föra en gemensam logg över nya smaker och allergener ni har introducerat.",
        },
        {
          h2: "En enda sanning för hushållet",
          body: "Slut på ”köpte du mjölk?”-meddelanden.",
          bullets: [
            {
              title: "Delad plan och lista",
              desc: "Alla ser samma vecka och inköpslista, live.",
            },
            {
              title: "Anpassad efter familjen",
              desc: "Recepten justeras efter hur många ni är.",
            },
            {
              title: "Mindre svinn, lägre nota",
              desc: "Planerna använder det ni har innan det går ut.",
            },
            {
              title: "Bra vid smakportioner",
              desc: "Anteckningar för att anpassa måltider till bebisar och små barn.",
            },
          ],
        },
      ],
      related: ["Måltidsplanering", "För par", "Laga mat på budget"],
    },
    da: {
      metaTitle: "Til familier",
      eyebrow: "Til familier",
      crumb: "Til familier",
      h1: "Mæt hele familien med mindre spild og mindre stress",
      lede: "Copantry holder familien på én fælles madplan og indkøbsliste, planlægger ud fra den mad, I allerede har, og tilpasser hver opskrift til familiens størrelse — så ingen skal gætte, hvad der er til aftensmad, og langt mindre ender i skraldespanden.",
      sections: [
        {
          h2: "Lav mad én gang, mæt alle — også de mindste",
          body: "Planlæg familiemåltider, hvor en baby eller et lille barn spiser en udgave af det, de voksne spiser, og hold noter på hver opskrift om, hvad der skal tages fra eller tilpasses. I kan også føre en fælles log over nye fødevarer og allergener, I har introduceret.",
        },
        {
          h2: "Én sandhed for husstanden",
          body: "Slut med „købte du mælk?“-beskeder.",
          bullets: [
            {
              title: "Delt plan og liste",
              desc: "Alle ser den samme uge og indkøbsliste, live.",
            },
            {
              title: "Tilpasset familien",
              desc: "Opskrifterne justeres efter, hvor mange I er.",
            },
            {
              title: "Mindre spild, lavere regning",
              desc: "Planerne bruger det, I har, før det udløber.",
            },
            {
              title: "Velegnet til overgangskost",
              desc: "Noter til at tilpasse måltider til babyer og småbørn.",
            },
          ],
        },
      ],
      related: ["Madplanlægning", "Til par", "Madlavning på budget"],
    },
    fi: {
      metaTitle: "Perheille",
      eyebrow: "Perheille",
      crumb: "Perheille",
      h1: "Ruoki koko perhe pienemmällä hävikillä ja vähemmällä stressillä",
      lede: "Copantry pitää perheesi yhdessä jaetussa ruokasuunnitelmassa ja ostoslistassa, suunnittelee sen ruoan ympärille, joka teillä jo on, ja mitoittaa jokaisen reseptin perheenne kokoon — niin kenenkään ei tarvitse arvailla, mitä on ruokana, ja roskiin päätyy paljon vähemmän.",
      sections: [
        {
          h2: "Kokkaa kerran, ruoki kaikki — myös pienimmät",
          body: "Suunnittele perheaterioita, joissa vauva tai taapero syö oman versionsa aikuisten ruoasta, ja pidä jokaisessa reseptissä muistiinpanoja siitä, mitä otetaan erikseen tai mukautetaan. Voitte myös pitää yhteistä kirjaa uusista ruoka-aineista ja allergeeneista, joita olette esitelleet.",
        },
        {
          h2: "Yksi totuus koko taloudelle",
          body: "Ei enää ”ostitko maitoa?” -viestejä.",
          bullets: [
            {
              title: "Jaettu suunnitelma ja lista",
              desc: "Kaikki näkevät saman viikon ja ostoslistan, elävänä.",
            },
            {
              title: "Mitoitettu perheeseenne",
              desc: "Reseptit mukautuvat syöjien määrään.",
            },
            {
              title: "Vähemmän hävikkiä, pienempi lasku",
              desc: "Suunnitelmat käyttävät sen, mitä teillä on, ennen vanhenemista.",
            },
            {
              title: "Sopii kiinteiden aloitukseen",
              desc: "Muistiinpanoja aterioiden mukauttamiseen vauvoille ja taaperoille.",
            },
          ],
        },
      ],
      related: ["Ateriasuunnittelu", "Pareille", "Edullinen ruoanlaitto"],
    },
    no: {
      metaTitle: "For familier",
      eyebrow: "For familier",
      crumb: "For familier",
      h1: "Mett hele familien med mindre svinn og mindre stress",
      lede: "Copantry holder familien på én felles matplan og handleliste, planlegger ut fra maten dere allerede har, og tilpasser hver oppskrift til familiens størrelse — så ingen trenger å gjette hva det blir til middag, og langt mindre havner i søpla.",
      sections: [
        {
          h2: "Lag mat én gang, mett alle — også de minste",
          body: "Planlegg familiemåltider der en baby eller ettåring spiser en variant av det de voksne spiser, og hold notater på hver oppskrift om hva som skal settes til side eller tilpasses. Dere kan også føre en felles logg over nye matvarer og allergener dere har introdusert.",
        },
        {
          h2: "Én sannhet for husholdningen",
          body: "Slutt med «kjøpte du melk?»-meldinger.",
          bullets: [
            {
              title: "Delt plan og liste",
              desc: "Alle ser den samme uken og handlelisten, live.",
            },
            {
              title: "Tilpasset familien",
              desc: "Oppskriftene justeres etter hvor mange dere er.",
            },
            {
              title: "Mindre svinn, lavere regning",
              desc: "Planene bruker det dere har før det går ut.",
            },
            {
              title: "Egnet for smakeporsjoner",
              desc: "Notater for å tilpasse måltider til babyer og småbarn.",
            },
          ],
        },
      ],
      related: ["Måltidsplanlegging", "For par", "Lage mat på budsjett"],
    },
    pl: {
      metaTitle: "Dla rodzin",
      eyebrow: "Dla rodzin",
      crumb: "Dla rodzin",
      h1: "Nakarm całą rodzinę, marnując mniej i mniej się stresując",
      lede: "Copantry trzyma twoją rodzinę przy jednym wspólnym planie posiłków i liście zakupów, planuje wokół jedzenia, które już macie, i przelicza każdy przepis na wielkość rodziny — więc nikt nie musi zgadywać, co będzie na kolację, a do kosza trafia znacznie mniej.",
      sections: [
        {
          h2: "Ugotuj raz, nakarm wszystkich — także najmłodszych",
          body: "Planuj rodzinne posiłki, w których niemowlę albo maluch je wersję tego, co dorośli, i zapisuj przy każdym przepisie, co odłożyć na bok lub zmienić. Możecie też prowadzić wspólny zapis nowych produktów i alergenów, które wprowadziliście.",
        },
        {
          h2: "Jedno źródło prawdy dla całego domu",
          body: "Koniec z wiadomościami „kupiłeś mleko?”.",
          bullets: [
            {
              title: "Wspólny plan i lista",
              desc: "Wszyscy widzą ten sam tydzień i tę samą listę zakupów, na żywo.",
            },
            {
              title: "Przeliczone na twoją rodzinę",
              desc: "Przepisy dopasowują się do liczby jedzących.",
            },
            {
              title: "Mniej marnowania, niższy rachunek",
              desc: "Plany zużywają to, co macie, zanim skończy się termin.",
            },
            {
              title: "Przyjazne przy rozszerzaniu diety",
              desc: "Notatki o tym, jak dostosować posiłki dla niemowląt i maluchów.",
            },
          ],
        },
      ],
      related: ["Planowanie posiłków", "Dla par", "Gotowanie z budżetem"],
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
    nl: {
      metaTitle: "Voor stellen",
      eyebrow: "Voor stellen",
      crumb: "Voor stellen",
      h1: "Plan samen maaltijden, zonder het heen-en-weer",
      lede: "Copantry geeft stellen één gedeelde keuken: dezelfde voorraadkast, weekplanning en boodschappenlijst, realtime bijgewerkt. Voeg recepten toe waar jullie allebei zin in hebben, zie wat op moet, spreek de week op één plek af — en laat de boodschappenlijst zichzelf maken.",
      sections: [
        {
          h2: "Eén planning in plaats van twee botsende ideeën",
          body: "Nodig je partner uit in je huishouden en jullie werken allebei vanuit dezelfde planning. Ieder van jullie kan een recept toevoegen, een maaltijd inplannen of boodschappen afvinken — en jullie kunnen de app allebei in je eigen taal gebruiken.",
        },
        {
          h2: "Deel de mentale last",
          body: "De vraag “wat eten we vanavond?” is niet langer de taak van één persoon.",
          bullets: [
            {
              title: "Realtime synchronisatie",
              desc: "Beide telefoons tonen meteen dezelfde keuken.",
            },
            {
              title: "Twee talen, één huis",
              desc: "Ieder gebruikt zijn eigen voorkeurstaal.",
            },
            {
              title: "Minder ritjes en dubbelingen",
              desc: "Eén keer boodschappen doen, precies wat je nodig hebt.",
            },
            {
              title: "Samen minder verspillen",
              desc: "Maak op wat jullie allebei kochten voordat het bederft.",
            },
          ],
        },
      ],
      related: ["Maaltijden plannen", "Voor gezinnen", "Boodschappenlijsten"],
    },
    sv: {
      metaTitle: "För par",
      eyebrow: "För par",
      crumb: "För par",
      h1: "Planera måltider tillsammans, utan fram och tillbaka",
      lede: "Copantry ger par ett gemensamt kök: samma skafferi, matsedel och inköpslista, uppdaterade i realtid. Lägg till recept ni båda är sugna på, se vad som behöver användas, kom överens om veckan på ett ställe — och låt inköpslistan bygga sig själv.",
      sections: [
        {
          h2: "En plan i stället för två krockande idéer",
          body: "Bjud in din partner till ditt hushåll så utgår ni båda från samma plan. Vem som helst av er kan lägga till ett recept, planera in en måltid eller bocka av inköpen — och ni kan var för sig använda appen på ert eget språk.",
        },
        {
          h2: "Dela på den mentala bördan",
          body: "Frågan ”vad blir det till middag?” slutar vara en persons jobb.",
          bullets: [
            {
              title: "Synk i realtid",
              desc: "Båda telefonerna visar samma kök direkt.",
            },
            {
              title: "Två språk, ett hem",
              desc: "Var och en använder sitt föredragna språk.",
            },
            {
              title: "Färre turer och dubbletter",
              desc: "Handla en gång, exakt det ni behöver.",
            },
            {
              title: "Mindre svinn tillsammans",
              desc: "Använd upp det ni båda köpte innan det blir dåligt.",
            },
          ],
        },
      ],
      related: ["Måltidsplanering", "För familjer", "Inköpslistor"],
    },
    da: {
      metaTitle: "Til par",
      eyebrow: "Til par",
      crumb: "Til par",
      h1: "Planlæg måltider sammen, uden frem og tilbage",
      lede: "Copantry giver par ét fælles køkken: det samme spisekammer, den samme madplan og den samme indkøbsliste, opdateret i realtid. Tilføj opskrifter, I begge har lyst til, se hvad der skal bruges, bliv enige om ugen ét sted — og lad indkøbslisten bygge sig selv.",
      sections: [
        {
          h2: "Én plan i stedet for to modstridende idéer",
          body: "Inviter din partner ind i din husstand, så arbejder I begge ud fra den samme plan. Hvem som helst af jer kan tilføje en opskrift, planlægge et måltid eller krydse indkøbene af — og I kan hver især bruge appen på jeres eget sprog.",
        },
        {
          h2: "Del den mentale byrde",
          body: "Spørgsmålet „hvad skal vi have?“ holder op med at være én persons opgave.",
          bullets: [
            {
              title: "Synkronisering i realtid",
              desc: "Begge telefoner viser det samme køkken med det samme.",
            },
            {
              title: "To sprog, ét hjem",
              desc: "Hver person bruger sit foretrukne sprog.",
            },
            {
              title: "Færre ture og dubletter",
              desc: "Handl én gang, præcis det I har brug for.",
            },
            {
              title: "Mindre spild sammen",
              desc: "Brug det op, I begge købte, før det bliver dårligt.",
            },
          ],
        },
      ],
      related: ["Madplanlægning", "Til familier", "Indkøbslister"],
    },
    fi: {
      metaTitle: "Pareille",
      eyebrow: "Pareille",
      crumb: "Pareille",
      h1: "Suunnitelkaa ateriat yhdessä, ilman edestakaista viestittelyä",
      lede: "Copantry antaa pariskunnille yhden jaetun keittiön: saman ruokakomeron, ruokasuunnitelman ja ostoslistan, reaaliajassa päivittyen. Lisätkää reseptejä, joita molemmat tekevät mieli, nähkää mikä pitää käyttää, sopikaa viikosta yhdessä paikassa — ja antakaa ostoslistan koota itsensä.",
      sections: [
        {
          h2: "Yksi suunnitelma kahden ristiriitaisen idean sijaan",
          body: "Kutsu kumppanisi talouteesi, niin työskentelette molemmat samasta suunnitelmasta. Kumpi tahansa voi lisätä reseptin, aikatauluttaa aterian tai ruksia ostokset — ja kumpikin voi käyttää sovellusta omalla kielellään.",
        },
        {
          h2: "Jakakaa henkinen kuorma",
          body: "Kysymys ”mitä syödään?” lakkaa olemasta yhden ihmisen työ.",
          bullets: [
            {
              title: "Reaaliaikainen synkronointi",
              desc: "Molemmat puhelimet näyttävät saman keittiön heti.",
            },
            {
              title: "Kaksi kieltä, yksi koti",
              desc: "Kumpikin käyttää omaa kieltään.",
            },
            {
              title: "Vähemmän reissuja ja tuplia",
              desc: "Yksi kauppareissu, täsmälleen se mitä tarvitsette.",
            },
            {
              title: "Vähemmän hävikkiä yhdessä",
              desc: "Käyttäkää loppuun se, minkä molemmat ostitte, ennen kuin se pilaantuu.",
            },
          ],
        },
      ],
      related: ["Ateriasuunnittelu", "Perheille", "Ostoslistat"],
    },
    no: {
      metaTitle: "For par",
      eyebrow: "For par",
      crumb: "For par",
      h1: "Planlegg måltider sammen, uten frem og tilbake",
      lede: "Copantry gir par ett felles kjøkken: det samme spiskammeret, den samme matplanen og den samme handlelisten, oppdatert i sanntid. Legg til oppskrifter dere begge har lyst på, se hva som må brukes, bli enige om uken på ett sted — og la handlelisten bygge seg selv.",
      sections: [
        {
          h2: "Én plan i stedet for to motstridende idéer",
          body: "Inviter partneren din inn i husholdningen din, så jobber dere begge ut fra den samme planen. Hvem som helst av dere kan legge til en oppskrift, planlegge et måltid eller krysse av handlelisten — og dere kan hver bruke appen på deres eget språk.",
        },
        {
          h2: "Del den mentale belastningen",
          body: "Spørsmålet «hva skal vi ha til middag?» slutter å være én persons jobb.",
          bullets: [
            {
              title: "Synkronisering i sanntid",
              desc: "Begge telefonene viser det samme kjøkkenet med én gang.",
            },
            {
              title: "To språk, ett hjem",
              desc: "Hver person bruker sitt foretrukne språk.",
            },
            {
              title: "Færre turer og dubletter",
              desc: "Handle én gang, nøyaktig det dere trenger.",
            },
            {
              title: "Mindre svinn sammen",
              desc: "Bruk opp det dere begge kjøpte før det blir dårlig.",
            },
          ],
        },
      ],
      related: ["Måltidsplanlegging", "For familier", "Handlelister"],
    },
    pl: {
      metaTitle: "Dla par",
      eyebrow: "Dla par",
      crumb: "Dla par",
      h1: "Planujcie posiłki razem, bez odbijania piłeczki",
      lede: "Copantry daje parom jedną wspólną kuchnię: tę samą spiżarnię, plan posiłków i listę zakupów, aktualizowane na bieżąco. Dodawajcie przepisy, na które oboje macie ochotę, patrzcie, co trzeba zużyć, ustalcie tydzień w jednym miejscu — a lista zakupów ułoży się sama.",
      sections: [
        {
          h2: "Jeden plan zamiast dwóch sprzecznych pomysłów",
          body: "Zaproś partnera do swojego gospodarstwa, a oboje będziecie pracować na tym samym planie. Każde z was może dodać przepis, wstawić posiłek do kalendarza albo odhaczyć zakupy — i każde może korzystać z aplikacji we własnym języku.",
        },
        {
          h2: "Podzielcie się obciążeniem psychicznym",
          body: "Pytanie „co dziś na kolację?” przestaje być zadaniem jednej osoby.",
          bullets: [
            {
              title: "Synchronizacja na bieżąco",
              desc: "Oba telefony od razu pokazują tę samą kuchnię.",
            },
            {
              title: "Dwa języki, jeden dom",
              desc: "Każde używa swojego preferowanego języka.",
            },
            {
              title: "Mniej wypraw i dubli",
              desc: "Zrób zakupy raz, dokładnie to, czego potrzebujecie.",
            },
            {
              title: "Mniej marnowania razem",
              desc: "Zużyjcie to, co oboje kupiliście, zanim się zepsuje.",
            },
          ],
        },
      ],
      related: ["Planowanie posiłków", "Dla rodzin", "Listy zakupów"],
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
    nl: {
      metaTitle: "Koken met een budget",
      eyebrow: "Koken met een budget",
      crumb: "Koken met een budget",
      h1: "Geef minder uit aan boodschappen zonder slechter te eten",
      lede: "De grootste besparing op boodschappen komt van minder verspillen en minder kopen. Copantry helpt je te koken met wat je al hebt voordat het bederft en alleen de gaten in te kopen — waardoor zowel je voedselverspilling als je weekrekening daalt, terwijl je goed blijft eten.",
      sections: [
        {
          h2: "Haal meer maaltijden uit wat je al gekocht hebt",
          body: "Copantry stelt maaltijden voor die zijn gebouwd rond de ingrediënten in je keuken, zodat het eten waarvoor je hebt betaald het avondeten wordt in plaats van te bederven en vervangen te worden.",
        },
        {
          h2: "Krapper en slimmer boodschappen doen",
          body: "Door te plannen rond je voorraadkast en nooit opnieuw te kopen wat je al hebt, blijft je lijst mager.",
          bullets: [
            {
              title: "Geen dubbele aankopen",
              desc: "Het controleert je voorraadkast voordat het iets toevoegt.",
            },
            {
              title: "Opmaak-maaltijden",
              desc: "Maak van “bijna over de datum” een avondmaaltijd in plaats van afval.",
            },
            {
              title: "Plannen binnen een budget",
              desc: "Bouw de week rond wat je al hebt.",
            },
            {
              title: "Minder verspilling = echte besparing",
              desc: "Huishoudens gooien jaarlijks voor honderden euro's aan eten weg.",
            },
          ],
        },
      ],
      related: [
        "Minder verspilling",
        "Boodschappenlijsten",
        "Maaltijden plannen",
      ],
    },
    sv: {
      metaTitle: "Laga mat på budget",
      eyebrow: "Laga mat på budget",
      crumb: "Laga mat på budget",
      h1: "Lägg mindre pengar på mat utan att äta sämre",
      lede: "De största besparingarna i matbutiken kommer av att slänga mindre och köpa mindre. Copantry hjälper dig att laga det du redan har innan det går ut och bara handla luckorna — vilket sänker både matsvinnet och veckonotan, samtidigt som du fortsätter äta gott.",
      sections: [
        {
          h2: "Få fler måltider ur det du redan köpt",
          body: "Copantry föreslår måltider byggda kring råvarorna i ditt kök, så att maten du har betalat för blir middag i stället för att bli dålig och ersättas.",
        },
        {
          h2: "En stramare, smartare handling",
          body: "Genom att planera kring skafferiet och aldrig köpa om det du redan äger håller sig listan slimmad.",
          bullets: [
            {
              title: "Inga dubbelköp",
              desc: "Den kollar skafferiet innan den lägger till något.",
            },
            {
              title: "Använd-upp-måltider",
              desc: "Gör ”snart för gammalt” till middag i stället för svinn.",
            },
            {
              title: "Planera efter budget",
              desc: "Bygg veckan kring det du redan har.",
            },
            {
              title: "Mindre svinn = riktiga pengar",
              desc: "Hushåll slänger mat för tusentals kronor varje år.",
            },
          ],
        },
      ],
      related: ["Minska svinnet", "Inköpslistor", "Måltidsplanering"],
    },
    da: {
      metaTitle: "Madlavning på budget",
      eyebrow: "Madlavning på budget",
      crumb: "Madlavning på budget",
      h1: "Brug færre penge på mad uden at spise dårligere",
      lede: "De største besparelser i supermarkedet kommer af at smide mindre ud og købe mindre ind. Copantry hjælper dig med at lave mad af det, du allerede har, før det udløber, og kun købe det, der mangler — så både madspild og ugeregning falder, mens du bliver ved med at spise godt.",
      sections: [
        {
          h2: "Få flere måltider ud af det, du allerede har købt",
          body: "Copantry foreslår måltider bygget om de råvarer, du har i køkkenet, så maden, du har betalt for, bliver til aftensmad i stedet for at blive dårlig og skiftet ud.",
        },
        {
          h2: "En strammere, klogere indkøbstur",
          body: "Ved at planlægge ud fra spisekammeret og aldrig genkøbe det, du ejer, holder listen sig slank.",
          bullets: [
            {
              title: "Ingen dobbeltkøb",
              desc: "Den tjekker dit spisekammer, før den tilføjer noget.",
            },
            {
              title: "Brug-op-måltider",
              desc: "Gør „snart for gammelt“ til aftensmad i stedet for spild.",
            },
            {
              title: "Planlæg efter budget",
              desc: "Byg ugen om det, du allerede har.",
            },
            {
              title: "Mindre spild = rigtige penge",
              desc: "Husstande smider mad ud for tusindvis af kroner om året.",
            },
          ],
        },
      ],
      related: ["Mindre madspild", "Indkøbslister", "Madplanlægning"],
    },
    fi: {
      metaTitle: "Edullinen ruoanlaitto",
      eyebrow: "Edullinen ruoanlaitto",
      crumb: "Edullinen ruoanlaitto",
      h1: "Käytä ruokaan vähemmän rahaa syömättä huonommin",
      lede: "Suurimmat säästöt ruokakaupassa syntyvät siitä, että hävikkiä ja ostoksia on vähemmän. Copantry auttaa sinua laittamaan ruokaa siitä, mitä sinulla jo on, ennen kuin se vanhenee, ja ostamaan vain puuttuvat — mikä pienentää sekä ruokahävikkiä että viikkolaskua samalla kun syöt edelleen hyvin.",
      sections: [
        {
          h2: "Saa enemmän aterioita siitä, minkä jo ostit",
          body: "Copantry ehdottaa aterioita, jotka rakentuvat keittiösi ainesten ympärille, jotta ruoasta, josta olet maksanut, tulee päivällinen sen sijaan että se pilaantuisi ja korvattaisiin.",
        },
        {
          h2: "Tiiviimpi ja fiksumpi kauppareissu",
          body: "Kun suunnittelet ruokakomerosi ympärille etkä koskaan osta uudelleen sitä, mitä jo omistat, listasi pysyy hoikkana.",
          bullets: [
            {
              title: "Ei tuplaostoksia",
              desc: "Se tarkistaa ruokakomerosi ennen kuin lisää mitään.",
            },
            {
              title: "Loppuun käyttävät ateriat",
              desc: "Tee ”pian vanhenevasta” päivällinen, ei hävikkiä.",
            },
            {
              title: "Suunnittele budjettiin",
              desc: "Rakenna viikko sen ympärille, mitä sinulla jo on.",
            },
            {
              title: "Vähemmän hävikkiä = oikeaa säästöä",
              desc: "Taloudet heittävät vuosittain satojen eurojen edestä ruokaa.",
            },
          ],
        },
      ],
      related: ["Vähemmän hävikkiä", "Ostoslistat", "Ateriasuunnittelu"],
    },
    no: {
      metaTitle: "Lage mat på budsjett",
      eyebrow: "Lage mat på budsjett",
      crumb: "Lage mat på budsjett",
      h1: "Bruk mindre penger på mat uten å spise dårligere",
      lede: "De største besparelsene i butikken kommer av å kaste mindre og kjøpe mindre. Copantry hjelper deg å lage mat av det du allerede har før det går ut, og bare handle det som mangler — så både matsvinnet og ukeregningen faller, samtidig som du fortsetter å spise godt.",
      sections: [
        {
          h2: "Få flere måltider ut av det du allerede har kjøpt",
          body: "Copantry foreslår måltider bygget rundt råvarene du har på kjøkkenet, så maten du har betalt for blir til middag i stedet for å bli dårlig og erstattet.",
        },
        {
          h2: "En strammere, smartere handletur",
          body: "Ved å planlegge ut fra spiskammeret og aldri kjøpe om igjen det du eier, holder listen seg slank.",
          bullets: [
            {
              title: "Ingen dobbeltkjøp",
              desc: "Den sjekker spiskammeret før den legger til noe.",
            },
            {
              title: "Bruk-opp-måltider",
              desc: "Gjør «snart for gammelt» til middag i stedet for svinn.",
            },
            {
              title: "Planlegg etter budsjett",
              desc: "Bygg uken rundt det du allerede har.",
            },
            {
              title: "Mindre svinn = ekte penger",
              desc: "Husholdninger kaster mat for tusenvis av kroner i året.",
            },
          ],
        },
      ],
      related: ["Mindre matsvinn", "Handlelister", "Måltidsplanlegging"],
    },
    pl: {
      metaTitle: "Gotowanie z budżetem",
      eyebrow: "Gotowanie z budżetem",
      crumb: "Gotowanie z budżetem",
      h1: "Wydawaj mniej na jedzenie, nie jedząc gorzej",
      lede: "Największe oszczędności na zakupach biorą się z mniejszego marnowania i mniejszych zakupów. Copantry pomaga gotować z tego, co już masz, zanim skończy się termin, i kupować wyłącznie braki — obniżając i marnotrawstwo, i tygodniowy rachunek, a ty dalej jesz dobrze.",
      sections: [
        {
          h2: "Wyciśnij więcej posiłków z tego, co już kupiłeś",
          body: "Copantry proponuje dania zbudowane wokół składników z twojej kuchni, żeby jedzenie, za które zapłaciłeś, stało się kolacją, zamiast się zepsuć i zostać kupione na nowo.",
        },
        {
          h2: "Ciaśniejsze, mądrzejsze zakupy",
          body: "Kiedy planujesz wokół spiżarni i nigdy nie dokupujesz tego, co już masz, twoja lista pozostaje szczupła.",
          bullets: [
            {
              title: "Bez podwójnych zakupów",
              desc: "Sprawdza spiżarnię, zanim cokolwiek doda.",
            },
            {
              title: "Dania na zużycie zapasów",
              desc: "Zamień „zaraz się zepsuje” w kolację, a nie w odpad.",
            },
            {
              title: "Planuj do budżetu",
              desc: "Zbuduj tydzień wokół tego, co już masz.",
            },
            {
              title: "Mniej marnowania = realne oszczędności",
              desc: "Gospodarstwa domowe wyrzucają rocznie jedzenie za setki złotych.",
            },
          ],
        },
      ],
      related: ["Mniej marnowania", "Listy zakupów", "Planowanie posiłków"],
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
    nl: [
      {
        q: "Hoe plan ik maaltijden voor de week?",
        a: "In Copantry sleep je recepten op een weekagenda, of je laat het een planning voorstellen rond wat je al hebt. Zodra je week staat, maakt Copantry een boodschappenlijst van alleen de ingrediënten die je mist.",
      },
      {
        q: "Kan de app mijn week aan avondmaaltijden voor me plannen?",
        a: "Ja. Copantry kan automatisch een hele week aan maaltijden genereren, met voorrang voor ingrediënten die bijna over de datum zijn en met genoeg afwisseling zodat je niet twee keer hetzelfde eet. Jij houdt de regie en kunt elke maaltijd wisselen.",
      },
      {
        q: "Hoe plan ik maaltijden rond wat ik al heb?",
        a: "Copantry leest je voorraadkast en bouwt de planning daaromheen, zodat het eten dat je al hebt op gaat voordat het bederft. Je koopt alleen de gaten bij.",
      },
      {
        q: "Hoe maak ik een weekmenu dat ik echt volhoud?",
        a: "Planningen houden stand als ze passen bij je echte leven en je echte kast. Copantry plant rond wat je al hebt, wat in het seizoen is en hoeveel tijd je hebt — en houdt het hele huishouden op één lijn.",
      },
    ],
    sv: [
      {
        q: "Hur planerar jag veckans måltider?",
        a: "I Copantry drar du recept till en veckokalender, eller låter appen föreslå en plan byggd kring det du redan har. När veckan är planerad skapar Copantry en inköpslista med bara de ingredienser du saknar.",
      },
      {
        q: "Kan appen planera veckans middagar åt mig?",
        a: "Ja. Copantry kan skapa en hel vecka med måltider automatiskt, prioritera råvaror som snart går ut och lägga in variation så att du inte äter samma sak två gånger. Du behåller kontrollen och kan byta vilken måltid som helst.",
      },
      {
        q: "Hur planerar jag måltider kring det jag redan har?",
        a: "Copantry läser ditt skafferi och bygger planerna kring det, så att maten du redan äger används innan den blir dålig. Du handlar bara luckorna.",
      },
      {
        q: "Hur gör jag en matsedel jag faktiskt håller?",
        a: "Planer håller när de passar ditt riktiga liv och ditt riktiga skåp. Copantry planerar kring det du redan har, vad som är i säsong och hur mycket tid du har — och håller hela hushållet uppdaterat.",
      },
    ],
    da: [
      {
        q: "Hvordan planlægger jeg ugens måltider?",
        a: "I Copantry trækker du opskrifter ind i en ugekalender, eller du lader appen foreslå en plan bygget om det, du allerede har. Når ugen er planlagt, laver Copantry en indkøbsliste med kun de ingredienser, du mangler.",
      },
      {
        q: "Kan appen planlægge ugens aftensmad for mig?",
        a: "Ja. Copantry kan lave en hel uges måltider automatisk, prioritere råvarer, der snart udløber, og skabe variation, så du ikke spiser det samme to gange. Du har styringen og kan bytte ethvert måltid.",
      },
      {
        q: "Hvordan planlægger jeg måltider ud fra det, jeg allerede har?",
        a: "Copantry læser dit spisekammer og bygger planerne om det, så maden, du allerede ejer, bliver brugt, før den bliver dårlig. Du køber kun det, der mangler.",
      },
      {
        q: "Hvordan laver jeg en madplan, jeg faktisk holder?",
        a: "Planer holder, når de passer til dit rigtige liv og dit rigtige skab. Copantry planlægger ud fra det, du allerede har, hvad der er i sæson, og hvor meget tid du har — og holder hele husstanden på samme side.",
      },
    ],
    fi: [
      {
        q: "Miten suunnittelen viikon ateriat?",
        a: "Copantryssa vedät reseptit viikkokalenteriin tai annat sovelluksen ehdottaa suunnitelmaa sen ympärille, mitä sinulla jo on. Kun viikko on suunniteltu, Copantry luo ostoslistan vain puuttuvista aineksista.",
      },
      {
        q: "Voiko sovellus suunnitella viikon päivälliset puolestani?",
        a: "Kyllä. Copantry voi luoda kokonaisen viikon ateriat automaattisesti, asettaa etusijalle pian vanhenevat raaka-aineet ja tuoda vaihtelua, jottet syö samaa kahdesti. Ohjat pysyvät sinulla ja voit vaihtaa minkä tahansa aterian.",
      },
      {
        q: "Miten suunnittelen ateriat sen ympärille, mitä minulla jo on?",
        a: "Copantry lukee ruokakomerosi ja rakentaa suunnitelmat sen ympärille, jotta jo omistamasi ruoka tulee käytettyä ennen pilaantumista. Ostat vain puuttuvat.",
      },
      {
        q: "Miten teen ruokalistan, jossa oikeasti pysyn?",
        a: "Suunnitelmat pitävät, kun ne sopivat oikeaan elämääsi ja oikeaan kaappiisi. Copantry suunnittelee sen ympärille, mitä sinulla jo on, mikä on sesongissa ja kuinka paljon sinulla on aikaa — ja pitää koko talouden kartalla.",
      },
    ],
    no: [
      {
        q: "Hvordan planlegger jeg ukens måltider?",
        a: "I Copantry drar du oppskrifter inn i en ukekalender, eller lar appen foreslå en plan bygget rundt det du allerede har. Når uken er planlagt, lager Copantry en handleliste med bare de ingrediensene du mangler.",
      },
      {
        q: "Kan appen planlegge ukens middager for meg?",
        a: "Ja. Copantry kan lage en hel uke med måltider automatisk, prioritere råvarer som snart går ut og legge inn variasjon så du ikke spiser det samme to ganger. Du har kontrollen og kan bytte hvilket som helst måltid.",
      },
      {
        q: "Hvordan planlegger jeg måltider ut fra det jeg allerede har?",
        a: "Copantry leser spiskammeret ditt og bygger planene rundt det, så maten du allerede eier blir brukt før den blir dårlig. Du handler bare det som mangler.",
      },
      {
        q: "Hvordan lager jeg en matplan jeg faktisk holder?",
        a: "Planer holder når de passer det virkelige livet ditt og det virkelige skapet ditt. Copantry planlegger ut fra det du allerede har, hva som er i sesong og hvor mye tid du har — og holder hele husholdningen oppdatert.",
      },
    ],
    pl: [
      {
        q: "Jak zaplanować posiłki na tydzień?",
        a: "W Copantry przeciągasz przepisy na tygodniowy kalendarz albo pozwalasz aplikacji zaproponować plan zbudowany wokół tego, co już masz. Gdy tydzień jest gotowy, Copantry układa listę zakupów wyłącznie z brakujących składników.",
      },
      {
        q: "Czy aplikacja zaplanuje za mnie tydzień kolacji?",
        a: "Tak. Copantry potrafi automatycznie ułożyć cały tydzień posiłków, stawiając na składniki, którym kończy się termin, i dbając o urozmaicenie, żebyś nie jadł dwa razy tego samego. Ty masz kontrolę i możesz wymienić dowolny posiłek.",
      },
      {
        q: "Jak planować posiłki wokół tego, co już mam?",
        a: "Copantry czyta twoją spiżarnię i buduje wokół niej plany, żeby jedzenie, które już masz, zostało zużyte, zanim się zepsuje. Kupujesz tylko braki.",
      },
      {
        q: "Jak ułożyć jadłospis, którego naprawdę się będę trzymał?",
        a: "Plany się trzymają, gdy pasują do twojego prawdziwego życia i prawdziwej szafki. Copantry planuje wokół tego, co już masz, tego, co jest w sezonie, i tego, ile masz czasu — a przy tym trzyma cały dom przy jednej wersji.",
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
    nl: [
      {
        q: "Hoe houd ik bij wat er in mijn keuken ligt?",
        a: "Copantry houdt een actueel overzicht bij van je voorraadkast, koelkast en vriezer. Je kunt producten toevoegen via een foto, je stem, een kassabon of door te typen — en alles wordt gesorteerd op houdbaarheid, zodat je altijd weet wat er als eerste op moet.",
      },
      {
        q: "Kan ik een kassabon of foto scannen om aan mijn voorraadkast toe te voegen?",
        a: "Ja. Copantry gebruikt AI om een foto van je boodschappen, een kassabon of een getypte lijst te lezen en voegt elk product automatisch toe aan je voorraadkast, zodat je niets één voor één hoeft in te typen.",
      },
      {
        q: "Hoe houd ik de houdbaarheidsdata van mijn boodschappen bij?",
        a: "Voeg een product toe en Copantry schat er een verstandige uiterste datum bij, die je kunt aanpassen. Je voorraadkast staat altijd gesorteerd op wat het eerst over de datum gaat, zodat er niets achter in de koelkast wordt vergeten.",
      },
      {
        q: "Hoe weet ik waar ik doorheen ben?",
        a: "Omdat Copantry ingrediënten aftrekt zodra je een geplande maaltijd kookt, blijft je voorraadkast kloppen — dus het weet waar je bijna doorheen bent en kan het automatisch op je volgende boodschappenlijst zetten.",
      },
    ],
    sv: [
      {
        q: "Hur håller jag koll på vad jag har i köket?",
        a: "Copantry håller ett levande register över skafferi, kyl och frys. Du kan lägga till varor med foto, röst, kvitto eller genom att skriva — och allt sorteras efter hållbarhet, så du alltid vet vad som ska användas härnäst.",
      },
      {
        q: "Kan jag skanna ett kvitto eller foto för att fylla på skafferiet?",
        a: "Ja. Copantry använder AI för att läsa ett foto av dina varor, ett kvitto eller en inskriven lista och lägger till varje vara automatiskt, så att du slipper skriva in dem en och en.",
      },
      {
        q: "Hur håller jag reda på utgångsdatum för mina varor?",
        a: "Lägg till en vara så uppskattar Copantry ett rimligt sista datum, som du kan justera. Ditt skafferi är alltid sorterat med det som går ut först överst, så inget glöms längst in i kylen.",
      },
      {
        q: "Hur vet jag vad som har tagit slut?",
        a: "Eftersom Copantry drar av ingredienser när du lagar planerade måltider förblir skafferiet korrekt — så appen vet vad som håller på att ta slut och kan lägga det på nästa inköpslista automatiskt.",
      },
    ],
    da: [
      {
        q: "Hvordan holder jeg styr på, hvad jeg har i køkkenet?",
        a: "Copantry fører et levende register over spisekammer, køleskab og fryser. Du kan tilføje varer med billede, stemme, kvittering eller ved at skrive — og alt sorteres efter holdbarhed, så du altid ved, hvad der skal bruges næst.",
      },
      {
        q: "Kan jeg skanne en kvittering eller et billede for at fylde spisekammeret?",
        a: "Ja. Copantry bruger AI til at læse et billede af dine varer, en kvittering eller en indtastet liste og tilføjer hver vare automatisk, så du slipper for at skrive dem ind én for én.",
      },
      {
        q: "Hvordan holder jeg styr på udløbsdatoerne på mine varer?",
        a: "Tilføj en vare, så vurderer Copantry en fornuftig sidste dato, som du kan justere. Dit spisekammer er altid sorteret med det, der udløber først, øverst, så intet glemmes bagerst i køleskabet.",
      },
      {
        q: "Hvordan ved jeg, hvad jeg er løbet tør for?",
        a: "Fordi Copantry trækker ingredienser fra, når du laver planlagte måltider, forbliver spisekammeret korrekt — så appen ved, hvad du er ved at løbe tør for, og kan sætte det på næste indkøbsliste automatisk.",
      },
    ],
    fi: [
      {
        q: "Miten pidän kirjaa siitä, mitä keittiössäni on?",
        a: "Copantry pitää elävää kirjanpitoa ruokakomerosta, jääkaapista ja pakastimesta. Voit lisätä tuotteita kuvalla, puheella, kuitilta tai kirjoittamalla — ja kaikki järjestyy säilyvyyden mukaan, joten tiedät aina, mikä pitää käyttää seuraavaksi.",
      },
      {
        q: "Voinko skannata kuitin tai kuvan ruokakomeroon lisäämistä varten?",
        a: "Kyllä. Copantry lukee tekoälyllä kuvan ostoksistasi, kuitin tai kirjoitetun listan ja lisää jokaisen tuotteen ruokakomeroosi automaattisesti, joten mitään ei tarvitse näpytellä yksi kerrallaan.",
      },
      {
        q: "Miten seuraan ostosteni parasta ennen -päiviä?",
        a: "Lisää tuote, niin Copantry arvioi sille järkevän viimeisen käyttöajan, jota voit muokata. Ruokakomerosi on aina järjestetty ensin vanhenevat ylimpänä, joten mikään ei unohdu jääkaapin perälle.",
      },
      {
        q: "Mistä tiedän, mikä on loppunut?",
        a: "Koska Copantry vähentää ainekset, kun laitat suunnitellun aterian, ruokakomerosi pysyy paikkansapitävänä — joten se tietää, mikä on loppumassa, ja voi lisätä sen automaattisesti seuraavalle ostoslistallesi.",
      },
    ],
    no: [
      {
        q: "Hvordan holder jeg oversikt over hva jeg har på kjøkkenet?",
        a: "Copantry fører en levende oversikt over spiskammer, kjøleskap og fryser. Du kan legge til varer med bilde, stemme, kvittering eller ved å skrive — og alt sorteres etter holdbarhet, så du alltid vet hva som må brukes neste gang.",
      },
      {
        q: "Kan jeg skanne en kvittering eller et bilde for å fylle spiskammeret?",
        a: "Ja. Copantry bruker KI til å lese et bilde av varene dine, en kvittering eller en innskrevet liste og legger til hver vare automatisk, så du slipper å skrive dem inn én for én.",
      },
      {
        q: "Hvordan holder jeg oversikt over utløpsdatoene på varene mine?",
        a: "Legg til en vare, så anslår Copantry en fornuftig siste dato som du kan justere. Spiskammeret er alltid sortert med det som går ut først øverst, så ingenting blir glemt bakerst i kjøleskapet.",
      },
      {
        q: "Hvordan vet jeg hva jeg har gått tom for?",
        a: "Fordi Copantry trekker fra ingredienser når du lager planlagte måltider, forblir spiskammeret riktig — så appen vet hva du er i ferd med å gå tom for, og kan legge det på neste handleliste automatisk.",
      },
    ],
    pl: [
      {
        q: "Jak mieć pod kontrolą to, co mam w kuchni?",
        a: "Copantry prowadzi żywy spis spiżarni, lodówki i zamrażarki. Produkty możesz dodawać zdjęciem, głosem, z paragonu albo wpisując je — a wszystko porządkuje się według terminu przydatności, więc zawsze wiesz, co zużyć jako następne.",
      },
      {
        q: "Czy mogę zeskanować paragon albo zdjęcie, żeby uzupełnić spiżarnię?",
        a: "Tak. Copantry odczytuje SI zdjęcie zakupów, paragon albo wpisaną listę i dodaje każdy produkt do spiżarni automatycznie, więc nie musisz wpisywać ich po kolei.",
      },
      {
        q: "Jak pilnować terminów przydatności moich zakupów?",
        a: "Dodaj produkt, a Copantry oszacuje rozsądny termin przydatności, który możesz poprawić. Twoja spiżarnia jest zawsze uporządkowana tak, że najpilniejsze jest na górze, więc nic nie zaginie z tyłu lodówki.",
      },
      {
        q: "Skąd mam wiedzieć, czego mi zabrakło?",
        a: "Ponieważ Copantry odejmuje składniki, gdy gotujesz zaplanowane posiłki, twoja spiżarnia pozostaje zgodna z rzeczywistością — więc aplikacja wie, czego ci brakuje, i sama dopisze to do kolejnej listy zakupów.",
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
    nl: [
      {
        q: "Hoe maak ik automatisch een boodschappenlijst uit mijn weekmenu?",
        a: "Plan je maaltijden in Copantry; het berekent het verschil tussen wat die maaltijden nodig hebben en wat je al hebt, en maakt daarna een boodschappenlijst van alleen de ontbrekende producten.",
      },
      {
        q: "Hoe stop ik met kopen wat ik al heb?",
        a: "Copantry controleert je voorraadkast voordat het iets aan je lijst toevoegt, dus het zegt nooit dat je iets moet kopen wat je al hebt. Dat alleen al haalt de meeste dubbele aankopen weg.",
      },
      {
        q: "Hoe orden ik mijn boodschappenlijst op supermarktschap?",
        a: "Copantry groepeert je boodschappenlijst per schap, zodat je de winkel in één ronde doorloopt in plaats van terug te moeten lopen. Iedereen in het huishouden ziet dezelfde lijst en producten worden realtime afgevinkt.",
      },
      {
        q: "Wat moet ik deze week kopen?",
        a: "Copantry beantwoordt dat voor je: het vergelijkt je geplande maaltijden met je huidige voorraadkast en laat precies zien wat ontbreekt — niets meer, niets minder.",
      },
    ],
    sv: [
      {
        q: "Hur gör jag automatiskt en inköpslista från min matsedel?",
        a: "Planera dina måltider i Copantry, så räknar den ut skillnaden mellan vad måltiderna behöver och vad du redan har, och bygger sedan en inköpslista med bara de varor som saknas.",
      },
      {
        q: "Hur slutar jag köpa sådant jag redan har?",
        a: "Copantry kollar ditt skafferi innan den lägger till något på listan, så den säger aldrig åt dig att köpa något du redan äger. Bara det tar bort de flesta dubbelköpen.",
      },
      {
        q: "Hur ordnar jag inköpslistan efter butiksavdelning?",
        a: "Copantry grupperar listan efter avdelning så att du kan gå igenom butiken i ett svep i stället för att vända tillbaka. Alla i hushållet ser samma lista och varor bockas av i realtid.",
      },
      {
        q: "Vad behöver jag handla den här veckan?",
        a: "Copantry svarar på det åt dig: den jämför dina planerade måltider med det aktuella skafferiet och visar exakt vad som saknas — varken mer eller mindre.",
      },
    ],
    da: [
      {
        q: "Hvordan laver jeg automatisk en indkøbsliste ud fra min madplan?",
        a: "Planlæg dine måltider i Copantry, så regner den forskellen ud mellem, hvad måltiderne kræver, og hvad du allerede har, og bygger derefter en indkøbsliste med kun de manglende varer.",
      },
      {
        q: "Hvordan holder jeg op med at købe det, jeg allerede har?",
        a: "Copantry tjekker dit spisekammer, før den tilføjer noget til listen, så den beder dig aldrig købe noget, du allerede ejer. Alene det fjerner de fleste dobbeltkøb.",
      },
      {
        q: "Hvordan ordner jeg indkøbslisten efter butiksafdeling?",
        a: "Copantry grupperer listen efter afdeling, så du kan gå gennem butikken i én omgang i stedet for at vende tilbage. Alle i husstanden ser den samme liste, og varer krydses af i realtid.",
      },
      {
        q: "Hvad skal jeg købe denne uge?",
        a: "Copantry svarer på det for dig: den sammenligner dine planlagte måltider med det nuværende spisekammer og viser præcis, hvad der mangler — hverken mere eller mindre.",
      },
    ],
    fi: [
      {
        q: "Miten teen ostoslistan ruokasuunnitelmastani automaattisesti?",
        a: "Suunnittele ateriasi Copantryssa, niin se laskee eron sen välillä, mitä ateriat vaativat ja mitä sinulla jo on, ja kokoaa sitten ostoslistan vain puuttuvista tuotteista.",
      },
      {
        q: "Miten lopetan sellaisen ostamisen, mitä minulla jo on?",
        a: "Copantry tarkistaa ruokakomerosi ennen kuin lisää mitään listalle, joten se ei koskaan kehota ostamaan jotain, mitä jo omistat. Jo pelkästään se poistaa suurimman osan tuplaostoista.",
      },
      {
        q: "Miten järjestän ostoslistani kaupan hyllyjen mukaan?",
        a: "Copantry ryhmittelee ostoslistasi hyllyjen mukaan, jotta kuljet kaupan läpi yhdellä kierroksella etkä joudu palaamaan takaisin. Kaikki talouden jäsenet näkevät saman listan ja tuotteet ruksitaan reaaliajassa.",
      },
      {
        q: "Mitä minun pitää ostaa tällä viikolla?",
        a: "Copantry vastaa tähän puolestasi: se vertaa suunniteltuja aterioitasi nykyiseen ruokakomeroosi ja näyttää täsmälleen, mitä puuttuu — ei enempää eikä vähempää.",
      },
    ],
    no: [
      {
        q: "Hvordan lager jeg automatisk en handleliste fra matplanen min?",
        a: "Planlegg måltidene dine i Copantry, så regner den ut forskjellen mellom hva måltidene trenger og hva du allerede har, og bygger deretter en handleliste med bare de manglende varene.",
      },
      {
        q: "Hvordan slutter jeg å kjøpe det jeg allerede har?",
        a: "Copantry sjekker spiskammeret ditt før den legger noe til på listen, så den ber deg aldri kjøpe noe du allerede eier. Bare det fjerner de fleste dobbeltkjøpene.",
      },
      {
        q: "Hvordan ordner jeg handlelisten etter butikkavdeling?",
        a: "Copantry grupperer listen etter avdeling, så du kan gå gjennom butikken i én runde i stedet for å snu tilbake. Alle i husholdningen ser den samme listen, og varer krysses av i sanntid.",
      },
      {
        q: "Hva må jeg kjøpe denne uken?",
        a: "Copantry svarer på det for deg: den sammenligner de planlagte måltidene med spiskammeret slik det er nå, og viser nøyaktig hva som mangler — verken mer eller mindre.",
      },
    ],
    pl: [
      {
        q: "Jak automatycznie zrobić listę zakupów z mojego jadłospisu?",
        a: "Zaplanuj posiłki w Copantry, a aplikacja policzy różnicę między tym, czego te posiłki wymagają, a tym, co już masz, i ułoży listę zakupów wyłącznie z brakujących produktów.",
      },
      {
        q: "Jak przestać kupować to, co już mam?",
        a: "Copantry sprawdza spiżarnię, zanim doda cokolwiek do listy, więc nigdy nie każe ci kupić czegoś, co już masz. Samo to usuwa większość podwójnych zakupów.",
      },
      {
        q: "Jak uporządkować listę zakupów według alejek sklepowych?",
        a: "Copantry grupuje listę według alejek, żebyś przeszedł sklep jednym przejściem, zamiast zawracać. Wszyscy domownicy widzą tę samą listę, a produkty odhaczają się na bieżąco.",
      },
      {
        q: "Co muszę kupić w tym tygodniu?",
        a: "Copantry odpowiada za ciebie: porównuje zaplanowane posiłki z obecną spiżarnią i pokazuje dokładnie, czego brakuje — ani mniej, ani więcej.",
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
    nl: [
      {
        q: "Hoe bewaar ik recepten van elke website op één plek?",
        a: "Plak een link in Copantry en het importeert het volledige recept — ingrediënten, stappen, foto en tijden — in je verzameling, ongeacht van welke site het komt. Alles staat op één doorzoekbare plek.",
      },
      {
        q: "Hoe importeer ik een recept vanaf een foto of een kookboekpagina?",
        a: "Maak een foto van een kookboekpagina, een receptkaart of een schermafbeelding; Copantry leest hem met AI en bewaart hem als een echt, bewerkbaar recept. Je kunt ook importeren vanuit tekst of een pdf.",
      },
      {
        q: "Hoe schaal ik een recept voor meer of minder mensen?",
        a: "Stel in voor hoeveel mensen je kookt en Copantry past de hoeveelheden voor je aan, en houdt daar op je boodschappenlijst rekening mee.",
      },
      {
        q: "Kan ik recepten in verschillende talen bewaren?",
        a: "Ja. Copantry houdt elk recept in zijn oorspronkelijke taal, dus een in het Frans geïmporteerd recept blijft Frans terwijl de rest van de app jouw taal spreekt. Het is gemaakt voor meertalige huishoudens.",
      },
    ],
    sv: [
      {
        q: "Hur sparar jag recept från vilken webbplats som helst på ett ställe?",
        a: "Klistra in en länk i Copantry så importeras hela receptet — ingredienser, steg, bild och tider — till din samling, oavsett vilken sajt det kom från. Allt finns på ett sökbart ställe.",
      },
      {
        q: "Hur importerar jag ett recept från ett foto eller en kokbokssida?",
        a: "Ta ett foto av en kokbokssida, ett receptkort eller en skärmbild, så läser Copantry det med AI och sparar det som ett riktigt, redigerbart recept. Du kan också importera från text eller en PDF.",
      },
      {
        q: "Hur skalar jag ett recept för fler eller färre personer?",
        a: "Ange hur många du lagar till, så justerar Copantry ingrediensmängderna åt dig och tar hänsyn till det i inköpslistan.",
      },
      {
        q: "Kan jag ha recept på olika språk?",
        a: "Ja. Copantry behåller varje recept på sitt originalspråk, så ett recept som importerats på franska förblir franskt medan resten av appen talar ditt språk. Den är byggd för flerspråkiga hushåll.",
      },
    ],
    da: [
      {
        q: "Hvordan gemmer jeg opskrifter fra en hvilken som helst hjemmeside ét sted?",
        a: "Indsæt et link i Copantry, så importeres hele opskriften — ingredienser, trin, billede og tider — til din samling, uanset hvilken side den kom fra. Alt ligger ét søgbart sted.",
      },
      {
        q: "Hvordan importerer jeg en opskrift fra et billede eller en kogebogsside?",
        a: "Tag et billede af en kogebogsside, et opskriftskort eller et skærmbillede, så læser Copantry det med AI og gemmer det som en rigtig, redigerbar opskrift. Du kan også importere fra tekst eller en PDF.",
      },
      {
        q: "Hvordan skalerer jeg en opskrift til flere eller færre personer?",
        a: "Angiv, hvor mange du laver mad til, så justerer Copantry ingrediensmængderne for dig og tager højde for det på indkøbslisten.",
      },
      {
        q: "Kan jeg have opskrifter på forskellige sprog?",
        a: "Ja. Copantry beholder hver opskrift på sit originalsprog, så en opskrift importeret på fransk bliver fransk, mens resten af appen taler dit sprog. Den er bygget til flersprogede husstande.",
      },
    ],
    fi: [
      {
        q: "Miten tallennan reseptejä mistä tahansa verkkosivustolta yhteen paikkaan?",
        a: "Liitä linkki Copantryyn, niin se tuo koko reseptin — ainekset, vaiheet, kuvan ja ajat — kokoelmaasi riippumatta siitä, miltä sivustolta se on peräisin. Kaikki on yhdessä haettavassa paikassa.",
      },
      {
        q: "Miten tuon reseptin kuvasta tai keittokirjan sivulta?",
        a: "Ota kuva keittokirjan sivusta, reseptikortista tai kuvakaappauksesta, niin Copantry lukee sen tekoälyllä ja tallentaa sen kunnollisena, muokattavana reseptinä. Voit tuoda myös tekstistä tai PDF:stä.",
      },
      {
        q: "Miten mitoitan reseptin useammalle tai harvemmalle?",
        a: "Aseta, kuinka monelle laitat ruokaa, niin Copantry säätää ainesmäärät puolestasi ja ottaa sen huomioon ostoslistallasi.",
      },
      {
        q: "Voinko säilyttää reseptejä eri kielillä?",
        a: "Kyllä. Copantry säilyttää jokaisen reseptin alkukielellään, joten ranskaksi tuotu resepti pysyy ranskaksi, vaikka muu sovellus puhuu sinun kieltäsi. Se on tehty monikielisille talouksille.",
      },
    ],
    no: [
      {
        q: "Hvordan lagrer jeg oppskrifter fra hvilken som helst nettside på ett sted?",
        a: "Lim inn en lenke i Copantry, så importeres hele oppskriften — ingredienser, trinn, bilde og tider — til samlingen din, uansett hvilken side den kom fra. Alt ligger på ett søkbart sted.",
      },
      {
        q: "Hvordan importerer jeg en oppskrift fra et bilde eller en kokebokside?",
        a: "Ta et bilde av en kokebokside, et oppskriftskort eller et skjermbilde, så leser Copantry det med KI og lagrer det som en ordentlig, redigerbar oppskrift. Du kan også importere fra tekst eller en PDF.",
      },
      {
        q: "Hvordan skalerer jeg en oppskrift til flere eller færre personer?",
        a: "Angi hvor mange du lager mat til, så justerer Copantry ingrediensmengdene for deg og tar hensyn til det på handlelisten.",
      },
      {
        q: "Kan jeg ha oppskrifter på ulike språk?",
        a: "Ja. Copantry beholder hver oppskrift på originalspråket sitt, så en oppskrift importert på fransk blir fransk mens resten av appen snakker ditt språk. Den er bygget for flerspråklige husholdninger.",
      },
    ],
    pl: [
      {
        q: "Jak zapisywać przepisy z dowolnej strony w jednym miejscu?",
        a: "Wklej link do Copantry, a aplikacja zaimportuje cały przepis — składniki, kroki, zdjęcie i czasy — do twojej kolekcji, niezależnie od tego, z jakiej strony pochodzi. Wszystko jest w jednym przeszukiwalnym miejscu.",
      },
      {
        q: "Jak zaimportować przepis ze zdjęcia albo strony książki kucharskiej?",
        a: "Zrób zdjęcie strony książki kucharskiej, fiszki z przepisem albo zrzut ekranu, a Copantry odczyta je SI i zapisze jako pełnoprawny, edytowalny przepis. Możesz też importować z tekstu albo pliku PDF.",
      },
      {
        q: "Jak przeliczyć przepis na więcej lub mniej osób?",
        a: "Ustaw, dla ilu osób gotujesz, a Copantry przeliczy ilości składników i uwzględni to na twojej liście zakupów.",
      },
      {
        q: "Czy mogę trzymać przepisy w różnych językach?",
        a: "Tak. Copantry zachowuje każdy przepis w jego oryginalnym języku, więc przepis zaimportowany po francusku zostaje francuski, a reszta aplikacji mówi twoim językiem. Powstała z myślą o wielojęzycznych domach.",
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
    nl: [
      {
        q: "Hoe kook ik uit één maaltijd voor een baby en voor volwassenen?",
        a: "Copantry helpt je gezinsmaaltijden te plannen waarbij een baby of peuter een versie eet van wat de volwassenen eten, zodat je maar één keer kookt. Bij elk recept kun je notities bijhouden over wat je apart houdt of aanpast voor de kleintjes.",
      },
      {
        q: "Hoe houd ik bij welke voeding mijn baby geprobeerd heeft?",
        a: "Je kunt receptnotities en je kookgeschiedenis in Copantry gebruiken om vast te leggen welke nieuwe voedingsmiddelen en allergenen je hebt geïntroduceerd, zodat het hele huishouden één gedeeld naslagwerk heeft.",
      },
      {
        q: "Hoe plan ik maaltijden voor een gezin?",
        a: "Copantry houdt het hele gezin op één gedeelde planning en boodschappenlijst, plant rond wat je al hebt en schaalt recepten naar je gezinsgrootte, zodat niemand hoeft te raden wat er op tafel komt.",
      },
    ],
    sv: [
      {
        q: "Hur lagar jag mat till en bebis och vuxna ur samma måltid?",
        a: "Copantry hjälper dig planera familjemåltider där en bebis eller ettåring äter en variant av det de vuxna äter, så du lagar bara en gång. Du kan hålla anteckningar på varje recept om vad som ska tas undan eller anpassas till de minsta.",
      },
      {
        q: "Hur håller jag reda på vilka smaker min bebis har provat?",
        a: "Du kan använda receptanteckningar och din tillagningshistorik i Copantry för att föra register över nya smaker och allergener du har introducerat, så att hela hushållet har en gemensam referens.",
      },
      {
        q: "Hur planerar jag måltider för en familj?",
        a: "Copantry håller hela familjen på en gemensam plan och inköpslista, planerar utifrån det ni redan har och anpassar recepten efter familjens storlek, så ingen behöver gissa vad det blir till middag.",
      },
    ],
    da: [
      {
        q: "Hvordan laver jeg mad til en baby og voksne ud fra det samme måltid?",
        a: "Copantry hjælper dig med at planlægge familiemåltider, hvor en baby eller et lille barn spiser en udgave af det, de voksne spiser, så du kun laver mad én gang. Du kan holde noter på hver opskrift om, hvad der skal tages fra eller tilpasses til de mindste.",
      },
      {
        q: "Hvordan holder jeg styr på, hvilke fødevarer min baby har prøvet?",
        a: "Du kan bruge opskriftsnoter og din madlavningshistorik i Copantry til at føre register over nye fødevarer og allergener, du har introduceret, så hele husstanden har én fælles reference.",
      },
      {
        q: "Hvordan planlægger jeg måltider til en familie?",
        a: "Copantry holder hele familien på én fælles plan og indkøbsliste, planlægger ud fra det, I allerede har, og tilpasser opskrifterne til familiens størrelse, så ingen skal gætte, hvad der er til aftensmad.",
      },
    ],
    fi: [
      {
        q: "Miten teen samasta ateriasta ruokaa vauvalle ja aikuisille?",
        a: "Copantry auttaa suunnittelemaan perheaterioita, joissa vauva tai taapero syö oman versionsa aikuisten ruoasta, joten kokkaat vain kerran. Voit pitää jokaisessa reseptissä muistiinpanoja siitä, mitä otetaan erikseen tai mukautetaan pienimmille.",
      },
      {
        q: "Miten seuraan, mitä ruokia vauvani on kokeillut?",
        a: "Voit käyttää Copantryn reseptimuistiinpanoja ja kokkaushistoriaa pitääksesi kirjaa uusista ruoka-aineista ja allergeeneista, joita olet esitellyt, jolloin koko taloudella on yksi yhteinen lähde.",
      },
      {
        q: "Miten suunnittelen ateriat perheelle?",
        a: "Copantry pitää koko perheen yhdessä jaetussa suunnitelmassa ja ostoslistassa, suunnittelee sen ympärille, mitä teillä jo on, ja mitoittaa reseptit perheenne kokoon, joten kenenkään ei tarvitse arvailla, mitä on ruokana.",
      },
    ],
    no: [
      {
        q: "Hvordan lager jeg mat til en baby og voksne ut fra det samme måltidet?",
        a: "Copantry hjelper deg å planlegge familiemåltider der en baby eller ettåring spiser en variant av det de voksne spiser, så du lager mat bare én gang. Du kan holde notater på hver oppskrift om hva som skal settes til side eller tilpasses de minste.",
      },
      {
        q: "Hvordan holder jeg oversikt over hvilke matvarer babyen min har prøvd?",
        a: "Du kan bruke oppskriftsnotater og tilberedningshistorikken i Copantry til å føre register over nye matvarer og allergener du har introdusert, så hele husholdningen har én felles referanse.",
      },
      {
        q: "Hvordan planlegger jeg måltider for en familie?",
        a: "Copantry holder hele familien på én felles plan og handleliste, planlegger ut fra det dere allerede har, og tilpasser oppskriftene til familiens størrelse, så ingen trenger å gjette hva det blir til middag.",
      },
    ],
    pl: [
      {
        q: "Jak z jednego posiłku ugotować dla niemowlaka i dorosłych?",
        a: "Copantry pomaga planować rodzinne posiłki, w których niemowlę albo maluch je wersję tego, co dorośli, więc gotujesz tylko raz. Przy każdym przepisie możesz zapisać, co odłożyć na bok lub zmienić dla najmłodszych.",
      },
      {
        q: "Jak śledzić, jakie produkty próbowało moje dziecko?",
        a: "Możesz wykorzystać notatki przy przepisach i historię gotowania w Copantry, aby prowadzić zapis nowych produktów i alergenów, które wprowadziliście, dzięki czemu cały dom ma jedno wspólne źródło.",
      },
      {
        q: "Jak planować posiłki dla rodziny?",
        a: "Copantry trzyma całą rodzinę przy jednym wspólnym planie i liście zakupów, planuje wokół tego, co już macie, i przelicza przepisy na wielkość rodziny, więc nikt nie musi zgadywać, co będzie na kolację.",
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
    nl: [
      {
        q: "Hoe delen mijn partner en ik een weekmenu en boodschappenlijst?",
        a: "Nodig je partner uit in je Copantry-huishouden en jullie zien allebei dezelfde voorraadkast, planning en boodschappenlijst in realtime. Ieder van jullie kan een recept toevoegen, een maaltijd inplannen of boodschappen afvinken.",
      },
      {
        q: "Hoe plannen we samen maaltijden zonder ruzie?",
        a: "Copantry geeft je één gedeelde planning in plaats van twee botsende ideeën. Jullie kunnen allebei recepten toevoegen waar je zin in hebt, zien wat bijna over de datum is en de week op één plek afspreken — daarna maakt de boodschappenlijst zichzelf.",
      },
      {
        q: "Kunnen we maaltijden in twee verschillende talen plannen?",
        a: "Ja. Ieder kan Copantry in zijn eigen taal gebruiken terwijl jullie hetzelfde huishouden delen, en recepten blijven in de taal waarin ze zijn geschreven.",
      },
    ],
    sv: [
      {
        q: "Hur delar min partner och jag en matsedel och inköpslista?",
        a: "Bjud in din partner till ditt Copantry-hushåll så ser ni båda samma skafferi, plan och inköpslista i realtid. Vem som helst av er kan lägga till ett recept, planera en måltid eller bocka av inköpen.",
      },
      {
        q: "Hur planerar vi måltider tillsammans utan att bråka?",
        a: "Copantry ger er en gemensam plan i stället för två krockande idéer. Ni kan båda lägga till recept ni är sugna på, se vad som snart går ut och komma överens om veckan på ett ställe — sedan bygger inköpslistan sig själv.",
      },
      {
        q: "Kan vi planera måltider på två olika språk?",
        a: "Ja. Var och en kan använda Copantry på sitt eget språk samtidigt som ni delar hushåll, och recepten stannar på det språk de skrevs på.",
      },
    ],
    da: [
      {
        q: "Hvordan deler min partner og jeg en madplan og indkøbsliste?",
        a: "Inviter din partner ind i din Copantry-husstand, så ser I begge det samme spisekammer, den samme plan og den samme indkøbsliste i realtid. Hvem som helst af jer kan tilføje en opskrift, planlægge et måltid eller krydse indkøbene af.",
      },
      {
        q: "Hvordan planlægger vi måltider sammen uden at skændes?",
        a: "Copantry giver jer én fælles plan i stedet for to modstridende idéer. I kan begge tilføje opskrifter, I har lyst til, se hvad der snart udløber, og blive enige om ugen ét sted — derefter bygger indkøbslisten sig selv.",
      },
      {
        q: "Kan vi planlægge måltider på to forskellige sprog?",
        a: "Ja. Hver person kan bruge Copantry på sit eget sprog, mens I deler husstand, og opskrifterne bliver på det sprog, de blev skrevet på.",
      },
    ],
    fi: [
      {
        q: "Miten kumppanini ja minä jaamme ruokasuunnitelman ja ostoslistan?",
        a: "Kutsu kumppanisi Copantry-talouteesi, niin näette molemmat saman ruokakomeron, suunnitelman ja ostoslistan reaaliajassa. Kumpi tahansa voi lisätä reseptin, suunnitella aterian tai ruksia ostokset.",
      },
      {
        q: "Miten suunnittelemme ateriat yhdessä riitelemättä?",
        a: "Copantry antaa teille yhden jaetun suunnitelman kahden ristiriitaisen idean sijaan. Molemmat voivat lisätä reseptejä, joita tekee mieli, nähdä mikä on vanhenemassa ja sopia viikosta yhdessä paikassa — sen jälkeen ostoslista kokoaa itsensä.",
      },
      {
        q: "Voimmeko suunnitella ateriat kahdella eri kielellä?",
        a: "Kyllä. Kumpikin voi käyttää Copantrya omalla kielellään samalla kun jaatte saman talouden, ja reseptit pysyvät sillä kielellä, jolla ne on kirjoitettu.",
      },
    ],
    no: [
      {
        q: "Hvordan deler partneren min og jeg en matplan og handleliste?",
        a: "Inviter partneren din inn i Copantry-husholdningen din, så ser dere begge det samme spiskammeret, den samme planen og den samme handlelisten i sanntid. Hvem som helst av dere kan legge til en oppskrift, planlegge et måltid eller krysse av handlelisten.",
      },
      {
        q: "Hvordan planlegger vi måltider sammen uten å krangle?",
        a: "Copantry gir dere én felles plan i stedet for to motstridende idéer. Dere kan begge legge til oppskrifter dere har lyst på, se hva som snart går ut og bli enige om uken på ett sted — så bygger handlelisten seg selv.",
      },
      {
        q: "Kan vi planlegge måltider på to forskjellige språk?",
        a: "Ja. Hver person kan bruke Copantry på sitt eget språk mens dere deler husholdning, og oppskriftene blir på det språket de ble skrevet på.",
      },
    ],
    pl: [
      {
        q: "Jak z partnerem możemy dzielić plan posiłków i listę zakupów?",
        a: "Zaproś partnera do swojego gospodarstwa w Copantry, a oboje będziecie widzieć tę samą spiżarnię, plan i listę zakupów na bieżąco. Każde z was może dodać przepis, zaplanować posiłek albo odhaczyć zakupy.",
      },
      {
        q: "Jak planować posiłki razem bez kłótni?",
        a: "Copantry daje wam jeden wspólny plan zamiast dwóch sprzecznych pomysłów. Oboje możecie dodawać przepisy, na które macie ochotę, widzieć, czemu kończy się termin, i ustalić tydzień w jednym miejscu — a potem lista zakupów ułoży się sama.",
      },
      {
        q: "Czy możemy planować posiłki w dwóch różnych językach?",
        a: "Tak. Każde z was może korzystać z Copantry we własnym języku, dzieląc to samo gospodarstwo, a przepisy zostają w języku, w którym zostały napisane.",
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
    nl: [
      {
        q: "Hoe bespaar ik geld op boodschappen?",
        a: "De grootste besparing op boodschappen komt van minder verspillen en minder kopen. Copantry helpt je te koken met wat je al hebt voordat het bederft en alleen de gaten in te kopen, wat zowel je voedselverspilling als je rekening verlaagt.",
      },
      {
        q: "Hoe kook ik goedkoper met wat ik al heb?",
        a: "Copantry stelt maaltijden voor die zijn gebouwd rond de ingrediënten die al in je keuken liggen, zodat je meer maaltijden haalt uit wat je hebt gekocht in plaats van het te laten bederven en opnieuw te beginnen.",
      },
      {
        q: "Hoe verlaag ik mijn boodschappenrekening zonder slechter te eten?",
        a: "Door te plannen rond je voorraadkast en dubbele aankopen te vermijden geef je minder uit zonder minder goed te eten. Copantry plant echte maaltijden rond echte ingrediënten en houdt je boodschappenlijst strak.",
      },
    ],
    sv: [
      {
        q: "Hur sparar jag pengar på mat?",
        a: "De största besparingarna i matbutiken kommer av att slänga mindre och köpa mindre. Copantry hjälper dig laga det du redan har innan det går ut och bara handla luckorna, vilket sänker både matsvinnet och notan.",
      },
      {
        q: "Hur lagar jag billigare mat med det jag redan har?",
        a: "Copantry föreslår måltider byggda kring de råvaror du redan har i köket, så att du får fler måltider ur det du köpt i stället för att låta det bli dåligt och börja om.",
      },
      {
        q: "Hur sänker jag matkontot utan att äta sämre?",
        a: "Genom att planera kring skafferiet och undvika dubbelköp lägger du mindre pengar utan att äta sämre. Copantry planerar riktiga måltider kring riktiga råvaror och håller inköpslistan stram.",
      },
    ],
    da: [
      {
        q: "Hvordan sparer jeg penge på mad?",
        a: "De største besparelser i supermarkedet kommer af at smide mindre ud og købe mindre ind. Copantry hjælper dig med at lave mad af det, du allerede har, før det udløber, og kun købe det, der mangler, hvilket sænker både madspild og regning.",
      },
      {
        q: "Hvordan laver jeg billigere mad med det, jeg allerede har?",
        a: "Copantry foreslår måltider bygget om de råvarer, du allerede har i køkkenet, så du får flere måltider ud af det, du har købt, i stedet for at lade det blive dårligt og starte forfra.",
      },
      {
        q: "Hvordan sænker jeg mit madbudget uden at spise dårligere?",
        a: "Ved at planlægge ud fra spisekammeret og undgå dobbeltkøb bruger du færre penge uden at spise mindre godt. Copantry planlægger rigtige måltider om rigtige råvarer og holder indkøbslisten stram.",
      },
    ],
    fi: [
      {
        q: "Miten säästän rahaa ruokaostoksissa?",
        a: "Suurimmat säästöt ruokakaupassa syntyvät siitä, että hävikkiä ja ostoksia on vähemmän. Copantry auttaa laittamaan ruokaa siitä, mitä sinulla jo on, ennen kuin se vanhenee, ja ostamaan vain puuttuvat, mikä pienentää sekä hävikkiä että laskua.",
      },
      {
        q: "Miten laitan halvempaa ruokaa siitä, mitä minulla jo on?",
        a: "Copantry ehdottaa aterioita, jotka rakentuvat keittiössäsi jo olevien ainesten ympärille, joten saat ostamastasi enemmän aterioita sen sijaan että antaisit sen pilaantua ja aloittaisit alusta.",
      },
      {
        q: "Miten pienennän ruokalaskuani syömättä huonommin?",
        a: "Kun suunnittelet ruokakomerosi ympärille ja vältät tuplaostoksia, kulutat vähemmän syömättä huonommin. Copantry suunnittelee oikeita aterioita oikeiden ainesten ympärille ja pitää ostoslistasi tiukkana.",
      },
    ],
    no: [
      {
        q: "Hvordan sparer jeg penger på mat?",
        a: "De største besparelsene i butikken kommer av å kaste mindre og kjøpe mindre. Copantry hjelper deg å lage mat av det du allerede har før det går ut, og bare handle det som mangler, noe som senker både matsvinnet og regningen.",
      },
      {
        q: "Hvordan lager jeg billigere mat av det jeg allerede har?",
        a: "Copantry foreslår måltider bygget rundt råvarene du allerede har på kjøkkenet, så du får flere måltider ut av det du har kjøpt, i stedet for å la det bli dårlig og begynne på nytt.",
      },
      {
        q: "Hvordan kutter jeg matbudsjettet uten å spise dårligere?",
        a: "Ved å planlegge ut fra spiskammeret og unngå dobbeltkjøp bruker du mindre penger uten å spise dårligere. Copantry planlegger ekte måltider rundt ekte råvarer og holder handlelisten stram.",
      },
    ],
    pl: [
      {
        q: "Jak zaoszczędzić na zakupach spożywczych?",
        a: "Największe oszczędności biorą się z mniejszego marnowania i mniejszych zakupów. Copantry pomaga gotować z tego, co już masz, zanim skończy się termin, i kupować wyłącznie braki, co obniża i marnotrawstwo, i rachunek.",
      },
      {
        q: "Jak gotować taniej z tego, co już mam?",
        a: "Copantry proponuje dania zbudowane wokół składników, które już masz w kuchni, więc wyciskasz więcej posiłków z tego, co kupiłeś, zamiast pozwolić temu się zepsuć i zaczynać od nowa.",
      },
      {
        q: "Jak obniżyć rachunek za jedzenie, nie jedząc gorzej?",
        a: "Planując wokół spiżarni i unikając podwójnych zakupów, wydajesz mniej, nie jedząc gorzej. Copantry planuje prawdziwe posiłki wokół prawdziwych składników i pilnuje, by lista zakupów pozostała zwięzła.",
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
    nl: [
      {
        q: "Hoe vind ik nieuwe recepten zonder allerlei verschillende websites af te zoeken?",
        a: "Het tabblad Ontdekken van Copantry doorzoekt op één plek een geselecteerde verzameling receptensites en opent de resultaten in een lezer binnen de app, zodat je niet site na site hoeft te bezoeken om iets te vinden om te koken.",
      },
      {
        q: "Kan ik een recept lezen zonder advertenties of pop-ups ertussen?",
        a: "Ja. Ontdekken opent elk resultaat in een schone, opgeschoonde lezer binnen Copantry — geen advertenties, geen automatisch startende video's en geen opdringerige pop-ups, alleen het recept.",
      },
      {
        q: "Kan ik een recept dat ik in Ontdekken vind in mijn eigen verzameling importeren?",
        a: "Ja. Open een resultaat en importeer het met één tik, via dezelfde AI-import die Copantry voor elke recept-URL gebruikt — het recept blijft in zijn oorspronkelijke taal.",
      },
      {
        q: "Kan ik in Ontdekken in mijn eigen taal zoeken?",
        a: "Ja. Ontdekken staat standaard op je eigen taal, en je kunt overschakelen naar een specifieke taal of in alle talen tegelijk zoeken.",
      },
    ],
    sv: [
      {
        q: "Hur hittar jag nya recept utan att söka på massor av olika webbplatser?",
        a: "Copantrys Upptäck-flik söker i en utvald bas av receptsajter på ett ställe och öppnar träffarna i en läsare inuti appen, så du slipper besöka sajt efter sajt för att hitta något att laga.",
      },
      {
        q: "Kan jag läsa ett recept utan att annonser eller popup-fönster är i vägen?",
        a: "Ja. Upptäck öppnar varje träff i en ren, rensad läsare inuti Copantry — inga annonser, ingen autostartande video och inga påträngande popup-fönster, bara receptet.",
      },
      {
        q: "Kan jag importera ett recept jag hittar i Upptäck till min egen samling?",
        a: "Ja. Öppna en träff och importera den med ett tryck, med samma AI-drivna import som Copantry använder för vilken recept-länk som helst — receptet stannar på sitt originalspråk.",
      },
      {
        q: "Kan jag söka i Upptäck på mitt eget språk?",
        a: "Ja. Upptäck utgår från ditt eget språk, och du kan byta till ett visst språk eller söka i alla på en gång.",
      },
    ],
    da: [
      {
        q: "Hvordan finder jeg nye opskrifter uden at søge på en masse forskellige hjemmesider?",
        a: "Copantrys Opdag-fane søger i en udvalgt base af opskriftssider ét sted og åbner resultaterne i en læser inde i appen, så du slipper for at besøge side efter side for at finde noget at lave.",
      },
      {
        q: "Kan jeg læse en opskrift uden reklamer og pop op-vinduer i vejen?",
        a: "Ja. Opdag åbner hvert resultat i en ren, renset læser inde i Copantry — ingen reklamer, ingen video, der starter af sig selv, og ingen påtrængende pop op-vinduer, bare opskriften.",
      },
      {
        q: "Kan jeg importere en opskrift, jeg finder i Opdag, til min egen samling?",
        a: "Ja. Åbn et resultat, og importér det med ét tryk med den samme AI-drevne import, som Copantry bruger til enhver opskrifts-URL — opskriften bliver på sit originalsprog.",
      },
      {
        q: "Kan jeg søge i Opdag på mit eget sprog?",
        a: "Ja. Opdag tager udgangspunkt i dit eget sprog, og du kan skifte til et bestemt sprog eller søge på tværs af dem alle.",
      },
    ],
    fi: [
      {
        q: "Miten löydän uusia reseptejä ilman että haen monilta eri sivustoilta?",
        a: "Copantryn Löydä-välilehti hakee valikoidusta joukosta reseptisivustoja yhdessä paikassa ja avaa tulokset sovelluksen sisäiseen lukunäkymään, joten sinun ei tarvitse käydä sivustolta toiselle löytääksesi jotain kokattavaa.",
      },
      {
        q: "Voinko lukea reseptin ilman että mainokset tai ponnahdusikkunat ovat tiellä?",
        a: "Kyllä. Löydä avaa jokaisen tuloksen siistiin, puhdistettuun lukunäkymään Copantryn sisällä — ei mainoksia, itsestään käynnistyviä videoita eikä tungettelevia ponnahdusikkunoita, pelkkä resepti.",
      },
      {
        q: "Voinko tuoda Löydä-välilehdeltä löytämäni reseptin omaan kokoelmaani?",
        a: "Kyllä. Avaa mikä tahansa tulos ja tuo se yhdellä napautuksella samalla tekoälytuonnilla, jota Copantry käyttää mille tahansa reseptiosoitteelle — resepti pysyy alkukielellään.",
      },
      {
        q: "Voinko hakea Löydä-välilehdeltä omalla kielelläni?",
        a: "Kyllä. Löydä käyttää oletuksena omaa kieltäsi, ja voit vaihtaa tiettyyn kieleen tai hakea kaikilla kielillä.",
      },
    ],
    no: [
      {
        q: "Hvordan finner jeg nye oppskrifter uten å søke på mange ulike nettsider?",
        a: "Copantrys Oppdag-fane søker i en utvalgt base av oppskriftssider på ett sted og åpner treffene i en leser inne i appen, så du slipper å besøke side etter side for å finne noe å lage.",
      },
      {
        q: "Kan jeg lese en oppskrift uten at reklame eller sprettoppvinduer er i veien?",
        a: "Ja. Oppdag åpner hvert treff i en ren, renset leser inne i Copantry — ingen reklame, ingen video som starter av seg selv og ingen påtrengende sprettoppvinduer, bare oppskriften.",
      },
      {
        q: "Kan jeg importere en oppskrift jeg finner i Oppdag til min egen samling?",
        a: "Ja. Åpne et hvilket som helst treff og importer det med ett trykk, med den samme KI-drevne importen som Copantry bruker for enhver oppskriftslenke — oppskriften blir på originalspråket sitt.",
      },
      {
        q: "Kan jeg søke i Oppdag på mitt eget språk?",
        a: "Ja. Oppdag tar utgangspunkt i ditt eget språk, og du kan bytte til et bestemt språk eller søke på tvers av alle.",
      },
    ],
    pl: [
      {
        q: "Jak znaleźć nowe przepisy bez przeszukiwania mnóstwa różnych stron?",
        a: "Zakładka Odkrywaj w Copantry przeszukuje wyselekcjonowaną bazę stron z przepisami w jednym miejscu i otwiera wyniki w czytniku wewnątrz aplikacji, więc nie musisz odwiedzać strony po stronie, żeby znaleźć coś do ugotowania.",
      },
      {
        q: "Czy mogę czytać przepis bez reklam i wyskakujących okienek?",
        a: "Tak. Odkrywaj otwiera każdy wynik w czystym, oczyszczonym czytniku wewnątrz Copantry — bez reklam, samoodtwarzających się filmów i natrętnych okienek, sam przepis.",
      },
      {
        q: "Czy mogę zaimportować przepis znaleziony w Odkrywaj do własnej kolekcji?",
        a: "Tak. Otwórz dowolny wynik i zaimportuj go jednym dotknięciem, tym samym importem SI, którego Copantry używa dla każdego adresu przepisu — przepis zostaje w swoim oryginalnym języku.",
      },
      {
        q: "Czy mogę szukać w Odkrywaj we własnym języku?",
        a: "Tak. Odkrywaj domyślnie korzysta z twojego języka, a ty możesz przełączyć się na konkretny język albo szukać we wszystkich naraz.",
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
    nl: [
      {
        q: "Stelt Copantry een wijn voor bij een recept?",
        a: "Ja. Op elke receptpagina, of voor alles wat in een maaltijdmoment gepland staat, kun je Copantry om een wijncombinatie vragen — het raadt een fles aan die je al hebt als er echt een past, plus een algemene stijl om naar te zoeken.",
      },
      {
        q: "Moet ik elk detail van een fles invoeren om hem bij te houden?",
        a: "Nee. Alleen de weergavenaam van de fles is verplicht. Producent, druif, jaargang, kleur en een vrije notitie zijn allemaal optioneel, dus een fles toevoegen kost enkele seconden.",
      },
      {
        q: "Wat als geen van mijn wijnen bij de maaltijd past?",
        a: "Je krijgt nog steeds een algemene stijlsuggestie — bijvoorbeeld een middelvolle rode — zelfs als niets in je eigen kelder een goede match is.",
      },
      {
        q: "Werkt mijn wijnkelder zichzelf bij als er flessen op gaan?",
        a: "Ja. Koppel een fles aan een geplande maaltijd en de voorraad daalt automatisch zodra je bevestigt dat je hebt gekookt, of markeer elke fles op elk moment handmatig als gedronken.",
      },
    ],
    sv: [
      {
        q: "Föreslår Copantry ett vin till ett recept?",
        a: "Ja. På vilken receptsida som helst, eller för allt som är planerat i en måltidslucka, kan du be Copantry om en vinmatchning — den rekommenderar en flaska du redan äger när någon verkligen passar, plus en allmän stil att leta efter.",
      },
      {
        q: "Måste jag fylla i varje detalj om en flaska för att hålla koll på den?",
        a: "Nej. Bara flaskans visningsnamn krävs. Producent, druva, årgång, färg och en fritextanteckning är alla frivilliga, så det tar sekunder att lägga till en flaska.",
      },
      {
        q: "Vad händer om inget av mitt vin passar måltiden?",
        a: "Du får ändå ett allmänt stilförslag — till exempel ett medelfylligt rött — även när inget i din egen källare är en bra matchning.",
      },
      {
        q: "Uppdaterar sig vinkällaren själv när flaskor används?",
        a: "Ja. Koppla en flaska till en planerad måltid så minskar lagret automatiskt när du bekräftar att du har lagat den, eller markera vilken flaska som helst som urdrucken manuellt när du vill.",
      },
    ],
    da: [
      {
        q: "Foreslår Copantry en vin til en opskrift?",
        a: "Ja. På enhver opskriftsside, eller til alt, der er planlagt i en måltidsplads, kan du bede Copantry om en vin — den anbefaler en flaske, du allerede ejer, når en virkelig passer, plus en generel stil at lede efter.",
      },
      {
        q: "Skal jeg indtaste hver eneste detalje om en flaske for at holde styr på den?",
        a: "Nej. Kun flaskens visningsnavn er nødvendigt. Producent, drue, årgang, farve og en fri note er alle valgfrie, så det tager sekunder at tilføje en flaske.",
      },
      {
        q: "Hvad hvis ingen af mine vine passer til måltidet?",
        a: "Du får stadig et generelt stilforslag — for eksempel en mellemfyldig rødvin — også når intet i din egen kælder er et godt match.",
      },
      {
        q: "Opdaterer min vinkælder sig selv, efterhånden som flasker bliver brugt?",
        a: "Ja. Knyt en flaske til et planlagt måltid, så falder beholdningen automatisk, når du bekræfter, at du har lavet det, eller markér når som helst en flaske som drukket manuelt.",
      },
    ],
    fi: [
      {
        q: "Ehdottaako Copantry viiniä reseptin seuraksi?",
        a: "Kyllä. Millä tahansa reseptisivulla tai kaikelle, mitä ateriapaikkaan on suunniteltu, voit pyytää Copantrylta viinisuositusta — se suosittelee pulloa, joka sinulla jo on, kun jokin aidosti sopii, sekä yleisen tyylin, jota etsiä.",
      },
      {
        q: "Pitääkö minun syöttää pullosta jokainen yksityiskohta, jotta voin seurata sitä?",
        a: "Ei. Vain pullon näyttönimi vaaditaan. Tuottaja, rypäle, vuosikerta, väri ja vapaa muistiinpano ovat kaikki valinnaisia, joten pullon lisääminen vie sekunteja.",
      },
      {
        q: "Entä jos mikään viineistäni ei sovi ateriaan?",
        a: "Saat silti yleisen tyyliehdotuksen — esimerkiksi keskitäyteläisen punaviinin — vaikka mikään omassa kellarissasi ei olisi hyvä pari.",
      },
      {
        q: "Päivittyykö viinikellarini itsestään, kun pulloja käytetään?",
        a: "Kyllä. Liitä pullo suunniteltuun ateriaan, niin varasto vähenee automaattisesti, kun vahvistat kokanneesi sen, tai merkitse mikä tahansa pullo juoduksi käsin milloin tahansa.",
      },
    ],
    no: [
      {
        q: "Foreslår Copantry en vin til en oppskrift?",
        a: "Ja. På hvilken som helst oppskriftsside, eller for alt som er planlagt i en måltidsplass, kan du be Copantry om en vin — den anbefaler en flaske du allerede eier når en virkelig passer, pluss en generell stil å se etter.",
      },
      {
        q: "Må jeg fylle inn hver eneste detalj om en flaske for å holde oversikt over den?",
        a: "Nei. Bare flaskens visningsnavn kreves. Produsent, drue, årgang, farge og et fritt notat er alle valgfrie, så det tar sekunder å legge til en flaske.",
      },
      {
        q: "Hva om ingen av vinene mine passer til måltidet?",
        a: "Du får likevel et generelt stilforslag — for eksempel en middels fyldig rødvin — også når ingenting i din egen kjeller er et godt treff.",
      },
      {
        q: "Oppdaterer vinkjelleren min seg selv etter hvert som flasker brukes?",
        a: "Ja. Knytt en flaske til et planlagt måltid, så synker beholdningen automatisk når du bekrefter at du har laget det, eller merk når som helst en flaske som drukket manuelt.",
      },
    ],
    pl: [
      {
        q: "Czy Copantry proponuje wino do przepisu?",
        a: "Tak. Na dowolnej stronie przepisu albo dla wszystkiego zaplanowanego w danym posiłku możesz poprosić Copantry o dobór wina — poleci butelkę, którą już masz, jeśli któraś naprawdę pasuje, a poza tym ogólny styl, którego warto szukać.",
      },
      {
        q: "Czy muszę wpisać każdy szczegół butelki, żeby ją śledzić?",
        a: "Nie. Wymagana jest tylko nazwa wyświetlana butelki. Producent, szczep, rocznik, kolor i dowolna notatka są nieobowiązkowe, więc dodanie butelki zajmuje kilka sekund.",
      },
      {
        q: "Co jeśli żadne z moich win nie pasuje do posiłku?",
        a: "I tak dostaniesz ogólną propozycję stylu — na przykład czerwone o średniej pełni — nawet gdy nic w twojej piwniczce nie jest dobrym dopasowaniem.",
      },
      {
        q: "Czy moja piwniczka aktualizuje się sama, gdy butelki są zużywane?",
        a: "Tak. Przypisz butelkę do zaplanowanego posiłku, a zapas zmniejszy się automatycznie, gdy potwierdzisz, że go ugotowałeś, albo w dowolnej chwili ręcznie oznacz butelkę jako wypitą.",
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
