/*
 * Content for every /features/* and /use-cases/* page.
 *
 * Each entry is answer-first: the `lede` is a complete, self-contained answer to
 * the page's core query (good for humans and for AI extraction). Sections lead
 * with a direct statement, then elaborate. `faqKey` points at src/content/faqs.js.
 *
 * To add a landing page: add an entry here + a matching seoConfig entry. No new
 * component needed — ContentPage renders it and the prerender + sitemap pick it up.
 */

export const FEATURES = {
  "reduce-food-waste": {
    accent: "green",
    heroEmoji: "🥬",
    eyebrow: "Reduce food waste",
    crumb: "Reduce food waste",
    h1: "Use up your food before it goes to waste",
    lede: "Copantry tracks how long everything in your kitchen has left and suggests meals that use what is about to expire first — so food ends up on your plate instead of in the bin. It is the core of how Copantry works, not a bolt-on.",
    sections: [
      {
        h2: "See what needs using up — at a glance",
        body: "Your pantry is always sorted soonest-to-expire, so the things to cook first are right at the top. No more discovering a liquefied bag of spinach behind the milk.",
        bullets: [
          {
            title: "Live expiry tracking",
            desc: "Every item carries a use-by window you can adjust. Copantry flags what is close.",
          },
          {
            title: "Best-before vs use-by",
            desc: "Track both, so you use food at the right time instead of binning it early.",
          },
          {
            title: "Nothing forgotten",
            desc: "Items move up the list as their date approaches — the fridge stops hiding things.",
          },
        ],
      },
      {
        h2: "Turn “about to expire” into tonight’s dinner",
        body: "Instead of starting from a recipe and shopping for it, Copantry starts from what you already have. It suggests real meals built around your expiring ingredients, scaled to how many you are feeding.",
      },
      {
        h2: "Waste less money, too",
        body: "According to WRAP, UK households throw away around 6.4 million tonnes of food a year — roughly £1,000 for an average family with children. Cooking what you have and buying only what you are missing is one of the simplest ways to cut both waste and your weekly bill.",
      },
    ],
    howTo: {
      title: "How to plan meals around expiry instead of recipes",
      steps: [
        "Add your groceries — snap a photo of your shop or receipt and Copantry dates each item for you.",
        "Open your pantry to see what is closest to expiring, sorted to the top automatically.",
        "Pick a suggested meal built around those items, and plan it onto your week.",
        "Cook it — Copantry deducts what you used, so your pantry and next shop stay accurate.",
      ],
    },
    faqKey: "reduceFoodWaste",
    related: [
      { label: "How long does food last?", to: "/learn" },
      { label: "Meal planning", to: "/features/meal-planning" },
      { label: "Pantry tracking", to: "/features/pantry-tracking" },
    ],
    cta: {
      title: "Start rescuing food tonight",
      subtitle:
        "Free to use · no card needed. Add your kitchen and see what to cook before anything goes off.",
    },
  },

  "meal-planning": {
    accent: "orange",
    heroEmoji: "🗓️",
    eyebrow: "Meal planning",
    crumb: "Meal planning",
    h1: "Plan your week around what you already have",
    lede: "Copantry plans a week of meals starting from your pantry, not from an empty calendar. It prioritises ingredients that are about to expire, scales recipes to your household, and then builds a shopping list of only what you are missing.",
    sections: [
      {
        h2: "Let it plan the week for you",
        body: "Ask Copantry to generate a week and it builds a varied plan that uses up expiring food first — or drag your own recipes onto the calendar. You stay in control and can swap any meal in a tap.",
      },
      {
        h2: "A plan you’ll actually stick to",
        body: "Plans stick when they fit your real cupboard, your real week and your real household.",
        bullets: [
          {
            title: "Built around your pantry",
            desc: "Uses what you own before it expires, so less gets wasted.",
          },
          {
            title: "Scaled to your household",
            desc: "Set how many you are feeding and quantities follow.",
          },
          {
            title: "Shared with everyone",
            desc: "The whole household sees and edits one plan in real time.",
          },
          {
            title: "Leftovers tracked",
            desc: "Cook once, and Copantry tracks the leftover portions for later.",
          },
        ],
      },
    ],
    faqKey: "mealPlanning",
    related: [
      { label: "Reduce food waste", to: "/features/reduce-food-waste" },
      { label: "Shopping lists", to: "/features/shopping-lists" },
      {
        label: "Plan from your AI assistant",
        to: "/features/ai-assistant-mcp",
      },
    ],
  },

  "pantry-tracking": {
    accent: "green",
    heroEmoji: "🧺",
    eyebrow: "Pantry tracking",
    crumb: "Pantry tracking",
    h1: "Keep track of everything in your kitchen",
    lede: "Copantry keeps a live inventory of your pantry, fridge and freezer, sorted by what expires next. Add items by photo, receipt, voice or text — and never wonder what you have or what you have run out of again.",
    sections: [
      {
        h2: "Add groceries without typing everything in",
        body: "Snap a photo of your shopping, a receipt, or a cupboard shelf and Copantry reads it with AI and stocks your pantry in seconds. You can also paste a list or add items by hand.",
      },
      {
        h2: "Always accurate, because it updates as you cook",
        body: "When you cook a planned meal, Copantry deducts the ingredients you used. Your pantry stays honest, so it knows what you are low on and can add it to your next list automatically.",
        bullets: [
          {
            title: "Photo & receipt scanning",
            desc: "AI turns a picture into dated pantry items.",
          },
          {
            title: "Expiry estimates",
            desc: "Copantry suggests a sensible use-by window for each item.",
          },
          {
            title: "Soonest-to-expire first",
            desc: "The things to use up are always at the top.",
          },
          {
            title: "Shared across the home",
            desc: "Everyone sees the same up-to-date kitchen.",
          },
        ],
      },
    ],
    faqKey: "pantryTracking",
    related: [
      { label: "Reduce food waste", to: "/features/reduce-food-waste" },
      { label: "How long does food last?", to: "/learn" },
      { label: "Shopping lists", to: "/features/shopping-lists" },
    ],
  },

  "shopping-lists": {
    accent: "blue",
    heroEmoji: "🛒",
    eyebrow: "Shopping lists",
    crumb: "Shopping lists",
    h1: "A shopping list that builds itself",
    lede: "Copantry compares your meal plan against what is already in your pantry and creates a shopping list of only the missing items — organised by supermarket aisle and shared with your whole household in real time.",
    sections: [
      {
        h2: "Stop buying things you already have",
        body: "Because Copantry checks your pantry before adding anything, it never puts something on your list that you already own. That one habit removes most duplicate purchases — and most waste.",
      },
      {
        h2: "Designed for the actual shop",
        body: "Your list is grouped by aisle so you move through the shop in one pass, and items tick off live for everyone in the household.",
        bullets: [
          {
            title: "Auto-generated from your plan",
            desc: "Plan meals, get exactly what you need to buy.",
          },
          { title: "Aisle-sorted", desc: "No doubling back across the store." },
          {
            title: "Real-time sharing",
            desc: "Whoever is at the shop sees the live list.",
          },
          {
            title: "Towards supermarket ordering",
            desc: "Built to take the gaps all the way to checkout.",
          },
        ],
      },
    ],
    faqKey: "shoppingLists",
    related: [
      { label: "Meal planning", to: "/features/meal-planning" },
      { label: "Pantry tracking", to: "/features/pantry-tracking" },
      { label: "Budget cooking", to: "/use-cases/budget-cooking" },
    ],
  },

  recipes: {
    accent: "orange",
    heroEmoji: "📖",
    eyebrow: "Recipes",
    crumb: "Recipes",
    h1: "All your recipes, from anywhere, in one place",
    lede: "Copantry imports recipes from any website, photo, PDF or block of text using AI, and keeps them in one searchable collection. Each recipe stays in its original language, scales to your household, and flows straight into your meal plan and shopping list.",
    sections: [
      {
        h2: "Save a recipe from anywhere in seconds",
        body: "Paste a link, photograph a cookbook page, or paste text, and Copantry pulls out the ingredients, steps, photo and timings into a clean, editable recipe — no matter where it came from.",
        bullets: [
          {
            title: "Import from any URL",
            desc: "Blogs, video sites and social posts included.",
          },
          {
            title: "Photo & PDF import",
            desc: "Turn a cookbook page or card into a real recipe.",
          },
          {
            title: "Scales to your table",
            desc: "Set servings and quantities adjust.",
          },
          {
            title: "Stays multilingual",
            desc: "A French recipe stays French; the app speaks your language.",
          },
        ],
      },
      {
        h2: "Recipes that actually do something",
        body: "A saved recipe is not a dead bookmark. Plan it onto your calendar and Copantry checks it against your pantry, scales it, and adds only the missing ingredients to your shopping list.",
      },
    ],
    faqKey: "recipes",
    related: [
      { label: "Meal planning", to: "/features/meal-planning" },
      { label: "For families", to: "/use-cases/for-families" },
      { label: "Why Copantry", to: "/why-copantry" },
    ],
  },
};

export const USE_CASES = {
  "for-families": {
    accent: "violet",
    heroEmoji: "👨‍👩‍👧",
    eyebrow: "For families",
    crumb: "For families",
    h1: "Feed the whole family with less waste and less stress",
    lede: "Copantry keeps your family on one shared meal plan and shopping list, plans around the food you already have, and scales every recipe to your family size — so nobody is guessing what is for dinner and far less ends up in the bin.",
    sections: [
      {
        h2: "Cook once, feed everyone — including the little ones",
        body: "Plan family meals where a baby or toddler eats a version of what the adults eat, and keep notes on each recipe about what to set aside or adapt. You can also keep a shared record of new foods and allergens you have introduced.",
      },
      {
        h2: "One source of truth for the household",
        body: "No more “did you get milk?” texts.",
        bullets: [
          {
            title: "Shared plan & list",
            desc: "Everyone sees the same week and shopping list, live.",
          },
          {
            title: "Scaled to your family",
            desc: "Recipes adjust to how many you are feeding.",
          },
          {
            title: "Less waste, lower bill",
            desc: "Plans use what you have before it expires.",
          },
          {
            title: "Weaning-friendly",
            desc: "Notes for adapting meals for babies and toddlers.",
          },
        ],
      },
    ],
    faqKey: "forFamilies",
    related: [
      { label: "Meal planning", to: "/features/meal-planning" },
      { label: "For couples", to: "/use-cases/for-couples" },
      { label: "Budget cooking", to: "/use-cases/budget-cooking" },
    ],
  },

  "for-couples": {
    accent: "orange",
    heroEmoji: "🧑‍🍳",
    eyebrow: "For couples",
    crumb: "For couples",
    h1: "Plan meals together, without the back-and-forth",
    lede: "Copantry gives couples one shared kitchen: the same pantry, meal plan and shopping list, updated in real time. Add recipes you both fancy, see what needs using up, agree on the week in one place — and let the shopping list build itself.",
    sections: [
      {
        h2: "One plan instead of two conflicting ideas",
        body: "Invite your partner to your household and you both work from the same plan. Either of you can add a recipe, schedule a meal, or tick off the shopping — and you can each use the app in your own language.",
      },
      {
        h2: "Share the mental load",
        body: "The “what’s for dinner?” question stops being one person’s job.",
        bullets: [
          {
            title: "Real-time sync",
            desc: "Both phones show the same kitchen instantly.",
          },
          {
            title: "Two languages, one home",
            desc: "Each person uses their preferred language.",
          },
          {
            title: "Fewer trips & duplicates",
            desc: "Shop once for exactly what you need.",
          },
          {
            title: "Less waste together",
            desc: "Use up what you both bought before it goes off.",
          },
        ],
      },
    ],
    faqKey: "cookTogether",
    related: [
      { label: "Meal planning", to: "/features/meal-planning" },
      { label: "For families", to: "/use-cases/for-families" },
      { label: "Shopping lists", to: "/features/shopping-lists" },
    ],
  },

  "budget-cooking": {
    accent: "green",
    heroEmoji: "💷",
    eyebrow: "Budget cooking",
    crumb: "Budget cooking",
    h1: "Spend less on groceries without eating worse",
    lede: "The biggest grocery savings come from wasting less and buying less. Copantry helps you cook what you already have before it expires and shop only for the gaps — cutting both your food waste and your weekly bill, while you keep eating well.",
    sections: [
      {
        h2: "Get more meals out of what you already bought",
        body: "Copantry suggests meals built around the ingredients in your kitchen, so the food you have paid for becomes dinner instead of going off and being replaced.",
      },
      {
        h2: "A tighter, smarter shop",
        body: "By planning around your pantry and never re-buying what you own, your list stays lean.",
        bullets: [
          {
            title: "No duplicate buys",
            desc: "It checks your pantry before adding anything.",
          },
          {
            title: "Use-it-up meals",
            desc: "Turn “about to expire” into dinner, not waste.",
          },
          {
            title: "Plan to a budget",
            desc: "Build the week around what you already have.",
          },
          {
            title: "Less waste = real savings",
            desc: "Households waste around £1,000 of food a year (WRAP).",
          },
        ],
      },
    ],
    faqKey: "budgetCooking",
    related: [
      { label: "Reduce food waste", to: "/features/reduce-food-waste" },
      { label: "Shopping lists", to: "/features/shopping-lists" },
      { label: "Meal planning", to: "/features/meal-planning" },
    ],
  },
};
