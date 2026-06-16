/*
 * FAQ content — the single source of truth for both the rendered FAQ blocks
 * and the FAQPage JSON-LD (see seoConfig.js).
 *
 * GEO rule (plan §7.2): every answer is *self-contained* — an answer engine can
 * lift it verbatim without the question for context. Lead with the direct answer.
 * Questions map to the high-intent queries in Part 1 of the SEO/GEO plan.
 *
 * No fabricated statistics. Where figures appear they are attributed to a named
 * source (WRAP / ADEME) — verify against the source before each launch.
 */

export const FAQS = {
  home: [
    {
      q: "Is there an app that tells you what to cook before food expires?",
      a: "Yes. Copantry tracks what is in your kitchen and how long each item has left, then suggests recipes that use what is about to expire first — and builds your shopping list around only what you are missing.",
    },
    {
      q: "Is there a meal planner that plans around what is in your fridge?",
      a: "Yes. Copantry starts from your pantry, not from an empty calendar. It looks at what you already have and what is about to go off, then plans a week of meals that use those ingredients first so you waste less and shop less.",
    },
    {
      q: "How does Copantry help me waste less food?",
      a: "Copantry shows you what is about to expire, suggests meals that use those items first, and only adds things to your shopping list that you do not already have — so you stop buying duplicates and stop binning food you forgot about.",
    },
    {
      q: "Is Copantry free?",
      a: "Copantry is free to start, with no card required. You can collect recipes, track your pantry, plan meals and build shopping lists on the free tier.",
    },
    {
      q: "What devices does Copantry work on?",
      a: "Copantry works in any web browser at app.copantry.com, and native Android and iOS apps are coming soon. Your recipes, pantry, plan and shopping list stay in sync across every device in your household.",
    },
    {
      q: "Can my partner and family share the same plan and shopping list?",
      a: "Yes. Copantry is built for households. Everyone in your home sees the same pantry, meal plan and shopping list in real time, so you never double-buy or wonder what is for dinner.",
    },
  ],

  reduceFoodWaste: [
    {
      q: "What food do I need to use up before it goes off?",
      a: "Copantry keeps a running list of what is in your kitchen sorted by how soon it expires, so the things to use up first are always at the top. It then suggests recipes built around those items.",
    },
    {
      q: "How do I stop wasting food at home?",
      a: "The most effective way to stop wasting food is to cook from what you already have before it expires and to only buy what you actually need. Copantry does both: it tracks expiry dates, suggests use-it-up meals, and builds a shopping list of just the gaps.",
    },
    {
      q: "How much food does the average household waste?",
      a: "According to WRAP, UK households throw away around 6.4 million tonnes of food a year, most of which could have been eaten — roughly £1,000 a year for an average family with children. Reducing waste at home is one of the simplest ways to save money and cut your carbon footprint.",
    },
    {
      q: "What is the difference between best-before and use-by?",
      a: "A use-by date is about safety — do not eat the food after it. A best-before date is about quality — the food is usually still safe afterwards but may not be at its best. Copantry lets you track both so you can use food up at the right time instead of binning it early.",
    },
    {
      q: "Can I plan meals around expiry dates instead of recipes?",
      a: "Yes. That is exactly what Copantry is built for. Instead of starting from a recipe and shopping for it, you start from what is about to expire and Copantry suggests meals that use those ingredients first.",
    },
  ],

  mealPlanning: [
    {
      q: "How do I plan meals for the week?",
      a: "In Copantry you drag recipes onto a weekly calendar, or let it suggest a plan built around what you already have. Once your week is planned, Copantry generates a shopping list of only the ingredients you are missing.",
    },
    {
      q: "Can the app plan my week of dinners for me?",
      a: "Yes. Copantry can generate a full week of meals automatically, prioritising ingredients that are about to expire and adding variety so you are not eating the same thing twice. You stay in control and can swap any meal.",
    },
    {
      q: "How do I meal plan around what I already have?",
      a: "Copantry reads your pantry and builds plans around it, so the food you already own gets used before it goes off. You only shop for the gaps.",
    },
    {
      q: "How do I make a meal plan I will actually stick to?",
      a: "Plans stick when they fit your real life and your real cupboard. Copantry plans around what you already have, what is in season, and how much time you have — and keeps the whole household on the same page.",
    },
  ],

  pantryTracking: [
    {
      q: "How do I keep track of what is in my kitchen?",
      a: "Copantry keeps a live inventory of your pantry, fridge and freezer. You can add items by photo, by voice, from a receipt, or by typing — and it sorts everything by expiry so you always know what to use next.",
    },
    {
      q: "Can I scan a receipt or photo to add to my pantry?",
      a: "Yes. Copantry uses AI to read a photo of your groceries, a receipt, or a typed list and adds every item to your pantry automatically, so you do not have to type things in one by one.",
    },
    {
      q: "How do I track expiry dates for my groceries?",
      a: "Add an item and Copantry estimates a sensible use-by window for it, which you can adjust. Your pantry is always sorted soonest-to-expire so nothing gets forgotten at the back of the fridge.",
    },
    {
      q: "How do I know what I have run out of?",
      a: "Because Copantry deducts ingredients as you cook planned meals, your pantry stays accurate — so it knows what you are low on and can add it to your next shopping list automatically.",
    },
  ],

  shoppingLists: [
    {
      q: "How do I make a shopping list from my meal plan automatically?",
      a: "Plan your meals in Copantry and it works out the difference between what those meals need and what you already have, then builds a shopping list of only the missing items.",
    },
    {
      q: "How do I stop buying things I already have?",
      a: "Copantry checks your pantry before it adds anything to your list, so it never tells you to buy something you already own. That alone removes most duplicate purchases.",
    },
    {
      q: "How do I organise my shopping list by supermarket aisle?",
      a: "Copantry groups your shopping list by aisle so you can move through the shop in one pass instead of doubling back. Everyone in the household sees the same list and items tick off in real time.",
    },
    {
      q: "What do I need to buy this week?",
      a: "Copantry answers this for you: it compares your planned meals against your current pantry and shows exactly what is missing — nothing more, nothing less.",
    },
  ],

  recipes: [
    {
      q: "How do I save recipes from any website in one place?",
      a: "Paste a link into Copantry and it imports the full recipe — ingredients, steps, photo and timings — into your collection, no matter which site it came from. Everything lives in one searchable place.",
    },
    {
      q: "How do I import a recipe from a photo or a cookbook page?",
      a: "Take a photo of a cookbook page, a recipe card or a screenshot and Copantry reads it with AI and saves it as a proper, editable recipe. You can also import from text or a PDF.",
    },
    {
      q: "How do I scale a recipe for more or fewer people?",
      a: "Set how many people you are cooking for and Copantry adjusts the ingredient quantities for you, then accounts for it in your shopping list.",
    },
    {
      q: "Can I keep recipes in different languages?",
      a: "Yes. Copantry keeps each recipe in its original language, so a recipe imported in French stays in French while the rest of the app speaks your language. It is built for multilingual households.",
    },
  ],

  forFamilies: [
    {
      q: "How do I cook for a baby and adults from the same meal?",
      a: "Copantry helps you plan family meals where a baby or toddler eats a version of what the adults eat, so you cook once. You can keep notes on each recipe about what to set aside or adapt for little ones.",
    },
    {
      q: "How do I track which foods my baby has tried?",
      a: "You can use recipe notes and your cook history in Copantry to keep a record of new foods and allergens you have introduced, so the whole household has one shared reference.",
    },
    {
      q: "How do I meal plan for a family?",
      a: "Copantry keeps the whole family on one shared plan and shopping list, plans around what you already have, and scales recipes to your family size so nobody is guessing what is for dinner.",
    },
  ],

  cookTogether: [
    {
      q: "How can my partner and I share a meal plan and shopping list?",
      a: "Invite your partner to your Copantry household and you both see the same pantry, plan and shopping list in real time. Either of you can add a recipe, plan a meal or tick off the shopping.",
    },
    {
      q: "How do we plan meals together without arguing?",
      a: "Copantry gives you one shared plan instead of two conflicting ideas. You can both add recipes you fancy, see what is about to expire, and agree on the week in one place — then the shopping list builds itself.",
    },
    {
      q: "Can we plan meals in two different languages?",
      a: "Yes. Each person can use Copantry in their own language while sharing the same household, and recipes stay in whatever language they were written in.",
    },
  ],

  aiAssistant: [
    {
      q: "Is there a meal planner that works with ChatGPT or Claude?",
      a: "Yes. Copantry runs a Model Context Protocol (MCP) server, so AI assistants like Claude and ChatGPT-style tools can read your pantry, plan meals, import recipes and build shopping lists on your behalf — with your permission, scoped to your household.",
    },
    {
      q: "What is MCP and why does it matter?",
      a: 'MCP (Model Context Protocol) is an open standard that lets AI assistants securely use external tools. Because Copantry exposes its features over MCP, you can simply ask your assistant to "plan a waste-free week" and it can act in your real kitchen data.',
    },
    {
      q: "Do I need to use AI to use Copantry?",
      a: "No. The AI assistant connection is an optional power feature. Copantry works fully on its own through the web and mobile apps — the MCP server is there for people who want to drive it from their assistant.",
    },
  ],

  budgetCooking: [
    {
      q: "How do I save money on groceries?",
      a: "The biggest grocery savings come from wasting less and buying less. Copantry helps you cook what you already have before it expires and only shop for the gaps, which cuts both your food waste and your bill.",
    },
    {
      q: "How do I cook cheaper meals using what I already have?",
      a: "Copantry suggests meals built around the ingredients already in your kitchen, so you get more meals out of what you have bought instead of letting it go off and starting again.",
    },
    {
      q: "How do I cut my grocery bill without eating worse?",
      a: "By planning around your pantry and avoiding duplicate purchases, you spend less without eating less well. Copantry plans real meals around real ingredients and keeps your shopping list tight.",
    },
  ],

  whyCopantry: [
    {
      q: "What is the best app to reduce food waste at home?",
      a: "The best food-waste app is one that does three things together: tracks what you have and when it expires, tells you what to cook to use it up, and stops you re-buying it. Copantry is built specifically around that loop, where most apps only do one part.",
    },
    {
      q: "How is Copantry different from other meal-planning and pantry apps?",
      a: "Calendar-first planners hand you an empty week to fill. Recipe-savers store links but do not know what is in your kitchen. List apps make a list but do not plan or track expiry. Copantry connects all three: it knows what you have, tells you what to cook before it expires, and builds your shopping list around the gaps.",
    },
    {
      q: "Who is Copantry not for?",
      a: "If all you want is a place to bookmark recipe links and you never plan meals or shop from a list, a simple recipe-saver will be lighter. Copantry is for households that want to waste less, plan around what they have, and shop smarter.",
    },
    {
      q: "Is there a meal planner that connects to my supermarket?",
      a: "Copantry is built to take your plan all the way to the shop — grouping your shopping list by aisle and working towards ordering the gaps from your supermarket — so the plan turns into food with as little friction as possible.",
    },
  ],
};
