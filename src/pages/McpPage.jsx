import { useState } from "react";
import { useTranslation } from "react-i18next";
import {
  Bot,
  Zap,
  Terminal,
  BookOpen,
  Refrigerator,
  Calendar,
  ShoppingCart,
  ChevronDown,
  ChevronRight,
  Copy,
  Check,
  ExternalLink,
  ArrowRight,
  Key,
  Globe,
  Shield,
  Code2,
  Info,
} from "lucide-react";

/* ─── Tool Definitions (GEO-optimised, verbose schemas) ─────────── */

const TOOLS = [
  {
    category: "Recipes",
    icon: BookOpen,
    color: "text-orange-500",
    bg: "bg-orange-50",
    borderColor: "border-orange-100",
    description:
      "Create, edit, import, and read recipes — by hand or from a URL, text, photo or PDF.",
    tools: [
      {
        name: "search_recipes",
        summary:
          "Search the household recipe collection by title keyword and/or category.",
        when: "Use this first when the user asks to find, browse, or filter recipes. Always search before calling get_recipe_details, update_recipe, or plan_meal.",
        params: [
          {
            name: "search",
            type: "string?",
            desc: "Partial or full recipe title to match (case-insensitive). Omit to list recent recipes.",
          },
          {
            name: "category",
            type: "enum?",
            desc: "Filter to one category. Values: APPETISER · STARTER · MAIN · DESSERT · COCKTAIL · CAKE · SIDE · BREAKFAST · SOUP · SNACK",
          },
          {
            name: "limit",
            type: "number?",
            desc: "Maximum results, 1–50. Default 20.",
          },
        ],
        returns:
          "Array of recipe objects with id, title, category, language, servings, prep/cook time, cuisine, and image. Use the id with get_recipe_details.",
        example: '{ "search": "pasta", "category": "MAIN" }',
      },
      {
        name: "get_recipe_details",
        summary:
          "Retrieve the complete recipe: ingredients, step-by-step / workflow instructions, nutrition, and comments.",
        when: "Use after search_recipes to get full content before planning a meal, editing, or answering detailed cooking questions.",
        params: [
          {
            name: "id",
            type: "string (UUID)",
            desc: "The recipe identifier from search_recipes or get_meal_plan.",
          },
        ],
        returns:
          "Full recipe object with ingredients (quantity, unit, name), notes/steps/workflows, nutrition, and comments.",
        example: '{ "id": "a1b2c3d4-..." }',
      },
      {
        name: "create_recipe",
        summary:
          "Create a brand-new recipe — from schema.org/Recipe JSON-LD if you have it, otherwise from a title, ingredient list and method.",
        when: "Use when the user dictates or types a recipe directly rather than importing it. Prefer passing JSON-LD: it is parsed natively, so quantities, units, ISO-8601 times and per-step instructions survive intact. Instructions go in notes (free text) when you have no JSON-LD.",
        params: [
          {
            name: "jsonLd",
            type: "object | array | string?",
            desc: "PREFERRED. schema.org/Recipe JSON-LD — a Recipe node, an array, an @graph document, or the raw JSON string. Any flat field sent alongside it overrides the matching JSON-LD value.",
          },
          {
            name: "title",
            type: "string",
            desc: "Recipe title in its original language. Required unless jsonLd carries one.",
          },
          {
            name: "ingredients",
            type: "array of {name, quantity?, unit?}?",
            desc: "Full ingredient list. Names are normalised automatically.",
          },
          {
            name: "category",
            type: "enum?",
            desc: "Meal category. Defaults to MAIN.",
          },
          {
            name: "notes",
            type: "string?",
            desc: "Cooking method / instructions, free text.",
          },
          {
            name: "servings / prepTime / cookTime",
            type: "number?",
            desc: "Servings, and prep/cook time in minutes.",
          },
          {
            name: "cuisine / language",
            type: "string?",
            desc: "Cuisine label and ISO 639-1 language (defaults to en).",
          },
        ],
        returns: "{ success, recipeId, title } for the created recipe.",
        example:
          '{ "jsonLd": { "@type": "Recipe", "name": "Aglio e Olio", "recipeYield": "2", "recipeIngredient": ["400 g spaghetti"], "recipeInstructions": ["Boil pasta…"] } }',
      },
      {
        name: "update_recipe",
        summary:
          "Edit an existing recipe’s fields and/or replace its ingredient list.",
        when: "Use to change a recipe. Only the creator or a household OWNER may edit. Passing ingredients REPLACES the whole list — fetch the current list with get_recipe_details first.",
        params: [
          { name: "id", type: "string (UUID)", desc: "Recipe to update." },
          {
            name: "title / notes / category / cuisine",
            type: "string/enum?",
            desc: "Any fields to change; omitted fields are untouched.",
          },
          {
            name: "servings / prepTime / cookTime",
            type: "number?",
            desc: "Numeric fields to change.",
          },
          {
            name: "ingredients",
            type: "array?",
            desc: "If provided, replaces ALL existing ingredients.",
          },
        ],
        returns: "{ success, recipeId }.",
        example: '{ "id": "a1b2c3d4-...", "servings": 6 }',
      },
      {
        name: "delete_recipe",
        summary:
          "Permanently delete a recipe. Only the creator or a household OWNER may delete.",
        when: "Use when the user explicitly wants to remove a recipe. Irreversible — confirm first.",
        params: [
          {
            name: "id",
            type: "string (UUID)",
            desc: "Recipe to delete (from search_recipes).",
          },
        ],
        returns: "{ success: true }.",
        example: '{ "id": "a1b2c3d4-..." }',
      },
      {
        name: "import_recipe_from_url",
        summary:
          "Queue a public URL for AI-powered recipe extraction (background, ~60s).",
        when: "Use to add a recipe from a website, YouTube, Instagram or TikTok. Tell the user it is processing; don’t immediately re-search.",
        params: [
          {
            name: "url",
            type: "string (URL)",
            desc: "Public recipe URL. Supports blogs, YouTube, Instagram, TikTok, JSON-LD pages.",
          },
        ],
        returns: "Confirmation that the recipe was queued.",
        example:
          '{ "url": "https://www.seriouseats.com/the-best-pizza-dough-recipe" }',
      },
      {
        name: "import_recipe_from_text",
        summary:
          "Parse a block of pasted recipe text with AI and save it instantly (synchronous).",
        when: "Use when the user pastes a full recipe as text. Returns the new recipe id immediately.",
        params: [
          {
            name: "text",
            type: "string",
            desc: "Full recipe text including title, ingredients and method (up to ~15000 chars).",
          },
        ],
        returns: "{ success, recipeId, title }.",
        example:
          '{ "text": "Pancakes\\n200g flour\\n2 eggs\\n300ml milk\\nMix and fry." }',
      },
      {
        name: "import_recipe_from_image",
        summary:
          "Parse a recipe from a photo (cookbook page, card, screenshot) with vision AI and save it.",
        when: "Use when the user supplies a recipe photo. Pass the image as base64 (a data: URL is accepted).",
        params: [
          {
            name: "base64Image",
            type: "string",
            desc: "Base64-encoded image bytes (optionally a data: URL).",
          },
          {
            name: "mimeType",
            type: "string?",
            desc: "e.g. image/jpeg. Defaults to image/jpeg.",
          },
        ],
        returns: "{ success, recipeId, title }.",
        example: '{ "base64Image": "/9j/4AAQ…", "mimeType": "image/jpeg" }',
      },
      {
        name: "import_recipe_from_pdf",
        summary: "Parse a recipe from a PDF document with AI and save it.",
        when: "Use when the user supplies a recipe PDF. Pass it as base64 (a data: URL is accepted).",
        params: [
          {
            name: "base64Pdf",
            type: "string",
            desc: "Base64-encoded PDF bytes (optionally a data: URL).",
          },
        ],
        returns: "{ success, recipeId, title }.",
        example: '{ "base64Pdf": "JVBERi0xLjc…" }',
      },
      {
        name: "log_recipe_cooked",
        summary:
          "Record that a recipe was cooked (adds cook history, marks it tested), with optional guests.",
        when: "Use when the user made a dish outside the meal calendar. To also deduct pantry stock for a planned meal, use confirm_meal.",
        params: [
          {
            name: "id",
            type: "string (UUID)",
            desc: "Recipe that was cooked.",
          },
          {
            name: "occasion",
            type: "string?",
            desc: 'Free-text occasion, e.g. "Sunday dinner".',
          },
          {
            name: "guestNames",
            type: "string[]?",
            desc: "Guests who ate it (auto-created as household guests).",
          },
          {
            name: "cookedAt",
            type: "string? (YYYY-MM-DD)",
            desc: "When it was cooked. Defaults to now.",
          },
        ],
        returns: "{ success, cookHistoryId }.",
        example: '{ "id": "a1b2c3d4-...", "guestNames": ["Sam", "Alex"] }',
      },
      {
        name: "set_recipe_visibility",
        summary:
          "Set a recipe to PRIVATE, HOUSEHOLD, BRIGADE (approved followers), or PUBLIC.",
        when: "Use when the user wants to share or unshare a recipe. Only the creator may change visibility.",
        params: [
          { name: "id", type: "string (UUID)", desc: "Recipe to update." },
          {
            name: "visibility",
            type: "enum",
            desc: "PRIVATE · HOUSEHOLD · BRIGADE · PUBLIC.",
          },
        ],
        returns: "{ success, visibility }.",
        example: '{ "id": "a1b2c3d4-...", "visibility": "PUBLIC" }',
      },
      {
        name: "estimate_recipe_macros",
        summary:
          "AI-estimate and save per-serving nutrition (calories, protein, carbs, fat, fibre).",
        when: "Use when the user asks for the nutrition/macros of one of their recipes. Results are cached.",
        params: [
          {
            name: "id",
            type: "string (UUID)",
            desc: "Recipe to estimate nutrition for.",
          },
        ],
        returns: "{ calories, protein, carbs, fat, fiber } per serving.",
        example: '{ "id": "a1b2c3d4-..." }',
      },
      {
        name: "add_recipe_comment",
        summary: "Add a note, tweak, substitution or tip to a recipe.",
        when: "Use when the user wants to annotate a recipe for the household.",
        params: [
          { name: "id", type: "string (UUID)", desc: "Recipe to comment on." },
          { name: "text", type: "string", desc: "Comment text." },
        ],
        returns: "{ success, commentId }.",
        example:
          '{ "id": "a1b2c3d4-...", "text": "Add chilli flakes for heat." }',
      },
    ],
  },
  {
    category: "Pantry",
    icon: Refrigerator,
    color: "text-green-600",
    bg: "bg-green-50",
    borderColor: "border-green-100",
    description:
      "Manage the household inventory — add by hand, in bulk, or from text, photos, receipts and PDFs.",
    tools: [
      {
        name: "list_pantry",
        summary:
          "List pantry items, soonest-expiring first. Filter for expired or expiring-soon items.",
        when: 'Use to audit stock, plan waste-free meals, or answer "what do I have?".',
        params: [
          {
            name: "expiredOnly",
            type: "boolean?",
            desc: "Only items already past expiry.",
          },
          {
            name: "expiringInDays",
            type: "number?",
            desc: "Only items expiring within N days from today.",
          },
        ],
        returns:
          "Array of items with id, name, ingredientId, quantity, unit, expiryDate.",
        example: '{ "expiringInDays": 4 }',
      },
      {
        name: "add_pantry_item",
        summary:
          "Add one ingredient with optional quantity, unit, and expiry date.",
        when: "Use to log a single ingredient. For many items at once, use add_pantry_items.",
        params: [
          {
            name: "name",
            type: "string",
            desc: "Ingredient name; normalised to singular lowercase automatically.",
          },
          {
            name: "quantity",
            type: "number|string?",
            desc: 'Amount, e.g. 500 or "1/2".',
          },
          { name: "unit", type: "string?", desc: "e.g. g, ml, l, cup, can." },
          {
            name: "expiryDate",
            type: "string? (YYYY-MM-DD)",
            desc: "Expiry date. Omit for shelf-stable items.",
          },
        ],
        returns: "{ success, id, name }.",
        example:
          '{ "name": "egg", "quantity": 12, "expiryDate": "2025-06-10" }',
      },
      {
        name: "add_pantry_items",
        summary:
          "Add many pantry items in one call (e.g. after a grocery shop).",
        when: "Prefer this over repeated add_pantry_item calls when logging multiple groceries.",
        params: [
          {
            name: "items",
            type: "array of {name, quantity?, unit?, expiryDate?}",
            desc: "Items to add.",
          },
        ],
        returns: "{ success, created, items }.",
        example:
          '{ "items": [{ "name": "milk", "quantity": 1, "unit": "l" }, { "name": "flour", "quantity": 1, "unit": "kg" }] }',
      },
      {
        name: "update_pantry_item",
        summary:
          "Update the quantity, unit, or expiry date of an existing pantry item.",
        when: "Use to correct or adjust an item. Pass expiryDate: null to clear it. Get the id from list_pantry.",
        params: [
          {
            name: "id",
            type: "string (UUID)",
            desc: "Pantry item id (NOT the ingredient id).",
          },
          {
            name: "quantity / unit / expiryDate",
            type: "mixed?",
            desc: "Fields to change; omitted fields are untouched.",
          },
        ],
        returns: "{ success, id, name, quantity, unit, expiryDate }.",
        example: '{ "id": "e5f6a7b8-...", "quantity": 2 }',
      },
      {
        name: "delete_pantry_item",
        summary:
          "Remove a pantry item by id (spoiled, used up, or mis-logged).",
        when: "Always call list_pantry first to obtain the id — never guess UUIDs.",
        params: [
          {
            name: "id",
            type: "string (UUID)",
            desc: "Pantry item id from list_pantry.",
          },
        ],
        returns: "{ success: true }.",
        example: '{ "id": "e5f6a7b8-..." }',
      },
      {
        name: "import_pantry_from_text",
        summary:
          "Parse a typed grocery list with AI and add every detected item to the pantry.",
        when: "Use when the user types out what they bought.",
        params: [
          {
            name: "text",
            type: "string",
            desc: "Free text listing groceries.",
          },
        ],
        returns: "{ success, created, items }.",
        example: '{ "text": "2 onions, 500g mince, a dozen eggs, milk" }',
      },
      {
        name: "import_pantry_from_image",
        summary:
          "Parse a fridge/cupboard photo or receipt photo with vision AI and stock the pantry.",
        when: "Use when the user supplies a photo of groceries. Pass as base64 (a data: URL is accepted).",
        params: [
          {
            name: "base64Image",
            type: "string",
            desc: "Base64-encoded image bytes.",
          },
          { name: "mimeType", type: "string?", desc: "e.g. image/jpeg." },
        ],
        returns: "{ success, created, items }.",
        example: '{ "base64Image": "/9j/4AAQ…" }',
      },
      {
        name: "import_pantry_from_pdf",
        summary:
          "Parse a PDF receipt or grocery order with AI and stock the pantry.",
        when: "Use when the user supplies a PDF receipt. Pass as base64 (a data: URL is accepted).",
        params: [
          {
            name: "base64Pdf",
            type: "string",
            desc: "Base64-encoded PDF bytes.",
          },
        ],
        returns: "{ success, created, items }.",
        example: '{ "base64Pdf": "JVBERi0xLjc…" }',
      },
      {
        name: "estimate_pantry_expiry",
        summary:
          "Estimate a best-before window for a food item, optionally saving it to a pantry item.",
        when: 'Use to answer "how long does X keep?" or to date an undated item. Pass itemId to save the estimate.',
        params: [
          { name: "name", type: "string", desc: 'Food name, e.g. "banana".' },
          {
            name: "storage",
            type: "enum?",
            desc: "counter · fridge · freezer.",
          },
          {
            name: "ripeness",
            type: "enum?",
            desc: "underripe · ripe · very_ripe.",
          },
          {
            name: "cut",
            type: "boolean?",
            desc: "True if already cut/opened.",
          },
          {
            name: "itemId",
            type: "string (UUID)?",
            desc: "If set, saves the estimated date onto this pantry item.",
          },
        ],
        returns: "{ estimate: { minDays, maxDays, tip }, savedExpiryDate }.",
        example:
          '{ "name": "avocado", "ripeness": "ripe", "storage": "fridge" }',
      },
    ],
  },
  {
    category: "Meal Planning",
    icon: Calendar,
    color: "text-violet-600",
    bg: "bg-violet-50",
    borderColor: "border-violet-100",
    description:
      "View, schedule, adjust, and confirm meals — and annotate the household calendar.",
    tools: [
      {
        name: "get_meal_plan",
        summary: "Retrieve planned meals and calendar notes for a date range.",
        when: 'Use to check what is scheduled before planning, or to answer "what are we eating this week?". Omit dates for the next 7 days.',
        params: [
          {
            name: "startDate",
            type: "string? (YYYY-MM-DD)",
            desc: "Inclusive start. Defaults to today.",
          },
          {
            name: "endDate",
            type: "string? (YYYY-MM-DD)",
            desc: "Inclusive end. Defaults to +7 days.",
          },
        ],
        returns:
          "{ entries: [{ id (calendarId), date, mealType, isConfirmed, recipe }], notes }.",
        example: '{ "startDate": "2025-06-02", "endDate": "2025-06-08" }',
      },
      {
        name: "plan_meal",
        summary:
          "Schedule a recipe for lunch or dinner on a date; auto-creates a leftover entry.",
        when: "Use after the user approves a suggestion. Verify the recipe with search_recipes first.",
        params: [
          {
            name: "recipeId",
            type: "string (UUID)",
            desc: "Recipe to schedule.",
          },
          {
            name: "date",
            type: "string (YYYY-MM-DD)",
            desc: "Date to schedule.",
          },
          { name: "mealType", type: "enum", desc: "LUNCH or DINNER." },
          {
            name: "cookFor / partySize",
            type: "number?",
            desc: "Portions to cook, and how many eat now (rest become leftovers).",
          },
        ],
        returns: "{ success, calendarId, message }.",
        example:
          '{ "recipeId": "a1b2c3d4-...", "date": "2025-06-05", "mealType": "DINNER" }',
      },
      {
        name: "update_meal_plan",
        summary:
          "Change how many portions a planned meal is cooked for; recalculates the leftover.",
        when: "Use when serving counts change. Get the id from get_meal_plan.",
        params: [
          {
            name: "calendarId",
            type: "string (UUID)",
            desc: "Calendar entry from get_meal_plan.",
          },
          { name: "cookFor", type: "number", desc: "New portion count." },
          {
            name: "partySize",
            type: "number?",
            desc: "How many eat now; rest become leftovers.",
          },
        ],
        returns: "{ success: true }.",
        example: '{ "calendarId": "c9d0e1f2-...", "cookFor": 6 }',
      },
      {
        name: "delete_meal_plan",
        summary:
          "Remove a planned meal from the calendar (and its linked leftover).",
        when: "Use to unschedule a meal. Get the id from get_meal_plan.",
        params: [
          {
            name: "calendarId",
            type: "string (UUID)",
            desc: "Calendar entry to remove.",
          },
        ],
        returns: "{ success: true }.",
        example: '{ "calendarId": "c9d0e1f2-..." }',
      },
      {
        name: "confirm_meal",
        summary:
          "Mark a meal cooked AND deduct its ingredients from the pantry (FIFO by expiry).",
        when: "Use after the household actually cooked. Provide consumedIngredients to override default quantities.",
        params: [
          {
            name: "calendarId",
            type: "string (UUID)",
            desc: "Calendar entry from get_meal_plan.",
          },
          {
            name: "consumedIngredients",
            type: "array? of {ingredientId, quantity}",
            desc: "Override consumed quantities. Defaults to the recipe’s amounts.",
          },
          {
            name: "guestNames",
            type: "string[]?",
            desc: "Guests who ate the meal.",
          },
        ],
        returns: "{ success, message }.",
        example: '{ "calendarId": "c9d0e1f2-..." }',
      },
      {
        name: "discard_meal",
        summary:
          "Mark a meal done WITHOUT deducting any pantry stock (e.g. ate out).",
        when: "Use when a planned meal happened but should not deduct ingredients.",
        params: [
          {
            name: "calendarId",
            type: "string (UUID)",
            desc: "Calendar entry from get_meal_plan.",
          },
        ],
        returns: "{ success: true }.",
        example: '{ "calendarId": "c9d0e1f2-..." }',
      },
      {
        name: "set_calendar_note",
        summary:
          "Add or replace a free-text note on a meal slot (one per date+mealType).",
        when: 'Use for slot notes like "Eating out" or "Use up the spinach". Upserts on the same slot.',
        params: [
          { name: "date", type: "string (YYYY-MM-DD)", desc: "Slot date." },
          { name: "mealType", type: "enum", desc: "LUNCH or DINNER." },
          { name: "summary", type: "string", desc: "Note text." },
        ],
        returns: "{ success, noteId }.",
        example:
          '{ "date": "2025-06-05", "mealType": "DINNER", "summary": "Eating out" }',
      },
    ],
  },
  {
    category: "Shopping",
    icon: ShoppingCart,
    color: "text-blue-600",
    bg: "bg-blue-50",
    borderColor: "border-blue-100",
    description:
      "Generate, save, and manage shopping lists from the meal plan or by hand.",
    tools: [
      {
        name: "get_shopping_lists",
        summary:
          "Retrieve all shopping lists with their line items (name, quantity, unit, checked state).",
        when: "Use when the user asks what they need to buy or is heading to the shop.",
        params: [],
        returns: "Array of lists each with id, name, createdAt, items.",
        example: "{}",
      },
      {
        name: "generate_shopping_list",
        summary:
          "Compute the grocery deficit between planned meals in a date range and current pantry stock.",
        when: "Use to work out what still needs buying. Returns items only — follow with create_shopping_list to save.",
        params: [
          {
            name: "startDate",
            type: "string (YYYY-MM-DD)",
            desc: "Inclusive start of the meal-plan window.",
          },
          {
            name: "endDate",
            type: "string (YYYY-MM-DD)",
            desc: "Inclusive end of the meal-plan window.",
          },
        ],
        returns: "{ items: [{ name, quantity, unit }] } needing purchase.",
        example: '{ "startDate": "2025-06-02", "endDate": "2025-06-08" }',
      },
      {
        name: "create_shopping_list",
        summary: "Save a new named shopping list with its items.",
        when: "Use to persist a generated list, or build one from a recipe / the user’s request.",
        params: [
          {
            name: "name",
            type: "string",
            desc: 'List name, e.g. "Weekly shop".',
          },
          {
            name: "items",
            type: "array? of {name, quantity?, unit?}",
            desc: "Line items. Defaults to empty.",
          },
        ],
        returns: "{ success, shoppingListId, itemCount }.",
        example:
          '{ "name": "Weekly shop", "items": [{ "name": "eggs", "quantity": 12 }] }',
      },
      {
        name: "add_shopping_list_item",
        summary: "Add one item to an existing shopping list.",
        when: "Use to append to a list. Get the list id from get_shopping_lists.",
        params: [
          {
            name: "shoppingListId",
            type: "string (UUID)",
            desc: "List to add to.",
          },
          { name: "name", type: "string", desc: "Item name." },
          {
            name: "quantity / unit",
            type: "mixed?",
            desc: "Optional amount and unit.",
          },
        ],
        returns: "{ success, itemId }.",
        example:
          '{ "shoppingListId": "f0a1b2c3-...", "name": "butter", "quantity": 250, "unit": "g" }',
      },
      {
        name: "update_shopping_list_item",
        summary: "Rename, re-quantify, or check/uncheck a shopping list item.",
        when: "Use to tick items off or edit them. Get item ids from each list’s items.",
        params: [
          { name: "id", type: "string (UUID)", desc: "Shopping list item id." },
          {
            name: "name / quantity / unit",
            type: "mixed?",
            desc: "Fields to change.",
          },
          {
            name: "isChecked",
            type: "boolean?",
            desc: "True = bought / ticked off.",
          },
        ],
        returns: "{ success, id, isChecked }.",
        example: '{ "id": "aa11bb22-...", "isChecked": true }',
      },
      {
        name: "delete_shopping_list",
        summary: "Delete an entire shopping list and its items.",
        when: "Use when a list is no longer needed. Irreversible.",
        params: [
          { name: "id", type: "string (UUID)", desc: "Shopping list id." },
        ],
        returns: "{ success: true }.",
        example: '{ "id": "f0a1b2c3-..." }',
      },
    ],
  },
  {
    category: "Collections",
    icon: BookOpen,
    color: "text-pink-600",
    bg: "bg-pink-50",
    borderColor: "border-pink-100",
    description: "Organise recipes into collections (cookbooks).",
    tools: [
      {
        name: "list_collections",
        summary:
          "List the user’s recipe collections, including Favorites, with recipe counts.",
        when: "Use before adding to or referencing a collection.",
        params: [],
        returns:
          "Array of { id, name, description, isPublic, isDefault, recipeCount }.",
        example: "{}",
      },
      {
        name: "create_collection",
        summary: "Create a new recipe collection (cookbook).",
        when: "Use when the user wants a new way to group recipes.",
        params: [
          { name: "name", type: "string", desc: "Collection name." },
          {
            name: "description",
            type: "string?",
            desc: "Optional description.",
          },
          {
            name: "isPublic",
            type: "boolean?",
            desc: "Make it publicly shareable. Default false.",
          },
        ],
        returns: "{ success, collectionId }.",
        example: '{ "name": "Weeknight dinners" }',
      },
      {
        name: "add_recipe_to_collection",
        summary: "Add a recipe to one of the user’s collections.",
        when: "Get the collection id from list_collections and the recipe id from search_recipes.",
        params: [
          {
            name: "collectionId",
            type: "string (UUID)",
            desc: "Target collection.",
          },
          { name: "recipeId", type: "string (UUID)", desc: "Recipe to add." },
        ],
        returns: "{ success: true }.",
        example:
          '{ "collectionId": "c0ffee00-...", "recipeId": "a1b2c3d4-..." }',
      },
      {
        name: "remove_recipe_from_collection",
        summary: "Remove a recipe from one of the user’s collections.",
        when: "Use to curate a collection.",
        params: [
          {
            name: "collectionId",
            type: "string (UUID)",
            desc: "Collection to edit.",
          },
          {
            name: "recipeId",
            type: "string (UUID)",
            desc: "Recipe to remove.",
          },
        ],
        returns: "{ success: true }.",
        example:
          '{ "collectionId": "c0ffee00-...", "recipeId": "a1b2c3d4-..." }',
      },
      {
        name: "delete_collection",
        summary:
          "Delete a collection (the Favorites collection cannot be deleted).",
        when: "Use when the user wants to remove a cookbook entirely.",
        params: [
          {
            name: "collectionId",
            type: "string (UUID)",
            desc: "Collection to delete.",
          },
        ],
        returns: "{ success: true }.",
        example: '{ "collectionId": "c0ffee00-..." }',
      },
    ],
  },
  {
    category: "Leftovers",
    icon: Refrigerator,
    color: "text-amber-600",
    bg: "bg-amber-50",
    borderColor: "border-amber-100",
    description: "Track leftover portions and their use-by dates.",
    tools: [
      {
        name: "list_leftovers",
        summary: "List active leftovers with portions and use-by dates.",
        when: 'Use to plan using up leftovers or to answer "what leftovers do we have?".',
        params: [],
        returns: "Array of { id, name, portions, expiryDate, recipeId }.",
        example: "{}",
      },
      {
        name: "add_leftover",
        summary: "Log a leftover with portions and an optional use-by date.",
        when: "Use for extra portions not tracked via the calendar.",
        params: [
          { name: "name", type: "string", desc: "What the leftover is." },
          { name: "portions", type: "number?", desc: "Servings remaining." },
          {
            name: "expiryDate",
            type: "string? (YYYY-MM-DD)",
            desc: "Use-by date.",
          },
          {
            name: "recipeId",
            type: "string (UUID)?",
            desc: "Optional link to the source recipe.",
          },
        ],
        returns: "{ success, leftoverId }.",
        example:
          '{ "name": "Lasagne", "portions": 3, "expiryDate": "2025-06-07" }',
      },
      {
        name: "update_leftover",
        summary: "Update remaining portions and/or the use-by date.",
        when: "Use as leftovers are eaten. Get the id from list_leftovers.",
        params: [
          { name: "id", type: "string (UUID)", desc: "Leftover to update." },
          {
            name: "portions",
            type: "number?",
            desc: "New remaining portions.",
          },
          {
            name: "expiryDate",
            type: "string?",
            desc: "YYYY-MM-DD, or null to clear.",
          },
        ],
        returns: "{ success: true }.",
        example: '{ "id": "1eft0ver-...", "portions": 1 }',
      },
      {
        name: "delete_leftover",
        summary: "Remove a leftover once eaten or discarded.",
        when: "Use to clear a finished leftover. Get the id from list_leftovers.",
        params: [
          { name: "id", type: "string (UUID)", desc: "Leftover to remove." },
        ],
        returns: "{ success: true }.",
        example: '{ "id": "1eft0ver-..." }',
      },
    ],
  },
];

const CLIENT_CONFIGS = {
  claude: {
    label: "Claude Desktop",
    hint: "Add to claude_desktop_config.json — no installation required.",
    lang: "json",
    code: `{
  "mcpServers": {
    "Copantry": {
      "type": "http",
      "url": "https://api.copantry.com/mcp",
      "headers": {
        "Authorization": "Bearer YOUR_API_KEY"
      }
    }
  }
}`,
  },
  cursor: {
    label: "Cursor / Windsurf",
    hint: "Add to .cursor/mcp.json or .windsurf/mcp.json in your project root.",
    lang: "json",
    code: `{
  "mcp": {
    "servers": {
      "Copantry": {
        "type": "http",
        "url": "https://api.copantry.com/mcp",
        "headers": {
          "Authorization": "Bearer YOUR_API_KEY"
        }
      }
    }
  }
}`,
  },
  npx: {
    label: "npx (stdio)",
    hint: "For MCP clients that only support stdio transport. No install needed.",
    lang: "json",
    code: `{
  "mcpServers": {
    "Copantry": {
      "command": "npx",
      "args": ["-y", "@copantry/mcp-server"],
      "env": {
        "COPANTRY_API_KEY": "YOUR_API_KEY"
      }
    }
  }
}`,
  },
  curl: {
    label: "Raw HTTP",
    hint: "Test your key with curl before integrating.",
    lang: "bash",
    code: `curl -X POST "https://api.copantry.com/mcp" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{"jsonrpc":"2.0","id":1,"method":"tools/list","params":{}}'`,
  },
};

/* ─── Sub-components ────────────────────────────────────────────── */

function CopyButton({ text }) {
  const [copied, setCopied] = useState(false);
  return (
    <button
      onClick={() => {
        navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      }}
      className="p-1.5 rounded-lg hover:bg-white/10 transition text-gray-400 hover:text-white shrink-0"
      title="Copy"
    >
      {copied ? (
        <Check size={14} className="text-green-400" />
      ) : (
        <Copy size={14} />
      )}
    </button>
  );
}

function CodeBlock({ code, lang }) {
  return (
    <div className="relative bg-gray-900 rounded-xl overflow-hidden">
      <div className="flex items-center justify-between px-4 py-2.5 bg-gray-800 border-b border-gray-700">
        <span className="text-[11px] font-mono text-gray-400">{lang}</span>
        <CopyButton text={code} />
      </div>
      <pre className="p-4 text-sm font-mono text-gray-100 overflow-x-auto whitespace-pre leading-relaxed code-block">
        {code}
      </pre>
    </div>
  );
}

function DefinitionBlock({ term, children }) {
  return (
    <div className="border-l-4 border-orange-400 pl-5 py-1">
      <p className="font-black text-gray-900 text-base mb-1">{term}</p>
      <p className="text-gray-600 leading-relaxed">{children}</p>
    </div>
  );
}

function ToolCard({ tool }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-gray-100 rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-start gap-3 p-4 hover:bg-gray-50 transition text-left"
      >
        <Terminal size={14} className="text-gray-300 mt-0.5 shrink-0" />
        <div className="flex-1 min-w-0">
          <code className="text-sm font-mono font-bold text-gray-800">
            {tool.name}
          </code>
          <p className="text-xs text-gray-500 mt-0.5 leading-snug">
            {tool.summary}
          </p>
        </div>
        {open ? (
          <ChevronDown size={15} className="text-gray-400 mt-0.5 shrink-0" />
        ) : (
          <ChevronRight size={15} className="text-gray-400 mt-0.5 shrink-0" />
        )}
      </button>

      {open && (
        <div className="border-t border-gray-100 px-4 pb-4 pt-3 space-y-4 bg-gray-50/40">
          {/* When to use */}
          <div>
            <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1.5">
              When to use
            </p>
            <p className="text-xs text-gray-600 leading-relaxed">{tool.when}</p>
          </div>

          {/* Parameters */}
          {tool.params.length > 0 && (
            <div>
              <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2">
                Parameters
              </p>
              <div className="bg-white border border-gray-100 rounded-xl overflow-hidden">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-gray-50 border-b border-gray-100">
                      <th className="text-left text-[10px] font-black text-gray-400 uppercase tracking-wider px-3 py-2">
                        Name
                      </th>
                      <th className="text-left text-[10px] font-black text-gray-400 uppercase tracking-wider px-3 py-2">
                        Type
                      </th>
                      <th className="text-left text-[10px] font-black text-gray-400 uppercase tracking-wider px-3 py-2">
                        Description
                      </th>
                    </tr>
                  </thead>
                  <tbody className="px-3">
                    {tool.params.map((p) => (
                      <tr
                        key={p.name}
                        className="border-b border-gray-50 last:border-0"
                      >
                        <td className="py-2 px-3 align-top">
                          <code className="text-xs font-mono font-bold text-orange-600">
                            {p.name}
                          </code>
                        </td>
                        <td className="py-2 px-3 align-top">
                          <code className="text-[11px] font-mono text-gray-400">
                            {p.type}
                          </code>
                        </td>
                        <td className="py-2 px-3 text-xs text-gray-500 leading-relaxed">
                          {p.desc}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Returns */}
          <div>
            <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1.5">
              Returns
            </p>
            <p className="text-xs text-gray-600 leading-relaxed">
              {tool.returns}
            </p>
          </div>

          {/* Example */}
          <div>
            <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1.5">
              Example input
            </p>
            <pre className="bg-gray-900 text-gray-100 text-xs font-mono p-3 rounded-xl overflow-x-auto code-block">
              {tool.example}
            </pre>
          </div>
        </div>
      )}
    </div>
  );
}

function ToolCategory({ cat }) {
  const [open, setOpen] = useState(true);
  const Icon = cat.icon;
  return (
    <section
      className={`border ${cat.borderColor} rounded-2xl overflow-hidden`}
    >
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center gap-3 p-5 hover:bg-gray-50/50 transition text-left"
      >
        <div
          className={`${cat.bg} w-9 h-9 rounded-xl flex items-center justify-center shrink-0`}
        >
          <Icon size={18} className={cat.color} />
        </div>
        <div className="flex-1">
          <p className="font-bold text-gray-900">{cat.category}</p>
          <p className="text-xs text-gray-500">{cat.description}</p>
        </div>
        <span className="text-xs text-gray-400 font-semibold">
          {cat.tools.length} tool{cat.tools.length > 1 ? "s" : ""}
        </span>
        {open ? (
          <ChevronDown size={16} className="text-gray-400 shrink-0" />
        ) : (
          <ChevronRight size={16} className="text-gray-400 shrink-0" />
        )}
      </button>
      {open && (
        <div className="border-t border-gray-100 px-4 pb-4 pt-3 space-y-2">
          {cat.tools.map((t) => (
            <ToolCard key={t.name} tool={t} />
          ))}
        </div>
      )}
    </section>
  );
}

/* ─── Page ──────────────────────────────────────────────────────── */

export default function McpPage() {
  const [activeClient, setActiveClient] = useState("claude");
  const { t } = useTranslation();
  const config = CLIENT_CONFIGS[activeClient];
  const totalTools = TOOLS.reduce((n, c) => n + c.tools.length, 0);

  return (
    <div className="max-w-4xl mx-auto px-4 py-12 md:py-16">
      {/* ── Plain-English intro for non-developers ────────── */}
      <div className="mb-10 bg-blue-50 border border-blue-100 rounded-2xl p-5 flex gap-4">
        <Info size={20} className="text-blue-500 shrink-0 mt-0.5" />
        <div>
          <span className="inline-block text-[10px] font-black uppercase tracking-widest text-blue-500 bg-blue-100 px-2 py-0.5 rounded-full mb-1.5">
            {t("mcp.user_intro_badge")}
          </span>
          <p className="font-bold text-gray-900 mb-1">
            {t("mcp.user_intro_title")}
          </p>
          <p className="text-sm text-gray-600 leading-relaxed mb-2">
            {t("mcp.user_intro_desc")}
          </p>
          <p className="text-sm text-gray-500">
            {t("mcp.user_intro_skip")}{" "}
            <a
              href="https://app.copantry.com/signup"
              className="text-orange-600 font-semibold hover:underline"
            >
              {t("mcp.user_intro_link")}
            </a>
          </p>
        </div>
      </div>

      {/* ── Hero ──────────────────────────────────────────── */}
      <div className="mb-12">
        <div className="inline-flex items-center gap-2 bg-orange-50 border border-orange-100 text-orange-700 text-xs font-bold px-3 py-1.5 rounded-full mb-4">
          <Zap size={12} /> Model Context Protocol · {totalTools} tools
          available
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-4">
          CoPantry MCP Server
        </h1>
        <p className="text-lg text-gray-500 leading-relaxed max-w-2xl">
          A production-ready MCP implementation that lets Claude, GPT, and any
          AI assistant read and write your household's recipes, pantry, meal
          calendar, and shopping lists. Add it to the assistant you already use
          as a custom connector — there is no agent to build and no code to
          write.
        </p>
        <div className="mt-6 flex flex-wrap items-center gap-3">
          <a
            href="#custom-connector"
            className="inline-flex items-center gap-2 px-5 py-3 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-xl transition-colors shadow-md shadow-orange-200/60"
          >
            <Bot size={16} /> Add it to your assistant <ArrowRight size={15} />
          </a>
          <a
            href="https://app.copantry.com/settings/mcp"
            className="inline-flex items-center gap-2 px-5 py-3 border border-gray-200 text-gray-700 font-bold rounded-xl hover:bg-gray-50 transition-colors"
          >
            <Key size={16} /> Get an API key
          </a>
        </div>
      </div>

      {/* ── What is MCP ──────────────────────────────────── */}
      <section className="mb-12" id="what-is-mcp">
        <h2 className="text-2xl font-extrabold text-gray-900 mb-5">
          What is MCP?
        </h2>
        <div className="space-y-5">
          <DefinitionBlock term="Model Context Protocol (MCP)">
            An open standard published by Anthropic that defines a structured
            protocol for AI assistants to connect to external tools, data
            sources, and services. MCP lets a language model call functions with
            typed inputs and receive structured outputs — with full user
            permission control — without needing custom plugins or API wrappers.
          </DefinitionBlock>
          <DefinitionBlock term="MCP Server">
            A process or HTTP endpoint that exposes a set of{" "}
            <strong>tools</strong>, <strong>resources</strong>, and{" "}
            <strong>prompts</strong> in the MCP format. When an AI assistant
            connects to an MCP server, it can discover the available tools,
            understand their schemas, and invoke them on the user's behalf.
          </DefinitionBlock>
          <DefinitionBlock term="The CoPantry MCP Server">
            An always-on, stateless HTTP endpoint at{" "}
            <code className="text-sm font-mono bg-gray-100 px-1.5 py-0.5 rounded">
              https://api.copantry.com/mcp
            </code>{" "}
            that exposes {totalTools} tools covering your household's recipes,
            pantry, meal calendar, and shopping lists. It is a standard remote
            MCP server, so you can add it to ChatGPT or Claude yourself as a
            custom connector and sign in with your CoPantry account — no agent
            and no code. Every request is authenticated and scoped to a single
            household. The server is implemented using the{" "}
            <a
              href="https://modelcontextprotocol.io"
              target="_blank"
              rel="noreferrer"
              className="text-orange-600 hover:underline inline-flex items-center gap-0.5"
            >
              official MCP TypeScript SDK <ExternalLink size={11} />
            </a>
            .
          </DefinitionBlock>
        </div>
      </section>

      {/* ── What it lets AI do ───────────────────────────── */}
      <section
        className="mb-12 bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 md:p-8"
        id="capabilities"
      >
        <h2 className="text-xl font-extrabold text-white mb-2">
          What your AI assistant can do
        </h2>
        <p className="text-gray-400 text-sm mb-6">
          Once connected, your AI assistant can handle these requests without
          you opening the app:
        </p>
        <div className="grid sm:grid-cols-2 gap-3">
          {[
            {
              q: "Plan a waste-free week using expiring pantry items",
              icon: "♻️",
            },
            {
              q: "Search for a pasta recipe and schedule it for Thursday dinner",
              icon: "🍝",
            },
            {
              q: "Add 500g of chicken breast expiring next Monday to my pantry",
              icon: "🥩",
            },
            { q: "Show me what's on the meal plan for this week", icon: "📅" },
            { q: "Queue a recipe from a URL for import", icon: "🔗" },
            {
              q: "Confirm that I cooked tonight's dinner and update the pantry",
              icon: "✅",
            },
            { q: "List everything in my shopping lists", icon: "🛒" },
            { q: "Remove the expired milk from my pantry", icon: "🥛" },
          ].map(({ q, icon }) => (
            <div
              key={q}
              className="flex items-start gap-2.5 p-3 bg-white/5 rounded-xl"
            >
              <span className="text-lg shrink-0 mt-0.5">{icon}</span>
              <p className="text-sm text-gray-300 leading-snug italic">"{q}"</p>
            </div>
          ))}
        </div>
        <div className="mt-6 p-4 bg-orange-500/10 border border-orange-500/20 rounded-xl">
          <p className="text-sm font-bold text-orange-300 mb-1">
            Starter prompt
          </p>
          <p className="text-sm text-orange-200 italic">
            "Review my pantry (especially expiring items) and my recipe
            collection. Suggest a 7-day waste-free meal plan, then help me
            schedule it."
          </p>
        </div>
      </section>

      {/* ── Transport & Auth ─────────────────────────────── */}
      <section className="mb-12" id="transport">
        <h2 className="text-2xl font-extrabold text-gray-900 mb-5">
          Transport &amp; Authentication
        </h2>
        <div className="grid sm:grid-cols-3 gap-4 mb-6">
          {[
            {
              icon: Globe,
              title: "Streamable HTTP",
              desc: "Stateless JSON responses over HTTPS. No WebSocket or session management needed.",
            },
            {
              icon: Shield,
              title: "OAuth 2.1 or API key",
              desc: "Remote connectors register themselves and sign in with PKCE — no key to paste. File-configured clients send an Authorization: Bearer header. Either way, access is scoped to one household.",
            },
            {
              icon: Code2,
              title: "MCP SDK 2.0",
              desc: "Implements the official @modelcontextprotocol/sdk server using the latest Streamable HTTP transport.",
            },
          ].map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="bg-gray-50 border border-gray-100 rounded-xl p-4"
            >
              <Icon size={18} className="text-orange-500 mb-2" />
              <p className="text-sm font-bold text-gray-900 mb-1">{title}</p>
              <p className="text-xs text-gray-500 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
        <div className="bg-gray-50 border border-gray-100 rounded-xl p-4 flex flex-col sm:flex-row sm:items-center gap-3">
          <div className="flex-1">
            <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">
              MCP Endpoint URL
            </p>
            <code className="text-sm font-mono text-gray-800">
              https://api.copantry.com/mcp
            </code>
          </div>
          <CopyButton text="https://api.copantry.com/mcp" />
        </div>
      </section>

      {/* ── Setup guide ──────────────────────────────────── */}
      <section className="mb-12" id="setup">
        <h2 className="text-2xl font-extrabold text-gray-900 mb-2">
          {t("mcp.setup_title")}
        </h2>
        <p className="text-gray-500 mb-6">{t("mcp.setup_subtitle")}</p>

        {/* ── Route A: add it yourself as a custom connector ──
            This is how most people will actually connect, and it needs no
            API key, no config file and no agent — so it leads. */}
        <div
          className="mb-10 border-2 border-orange-200 bg-orange-50/60 rounded-2xl p-5 md:p-6"
          id="custom-connector"
        >
          <span className="inline-block text-[10px] font-black uppercase tracking-widest text-orange-600 bg-orange-100 px-2 py-0.5 rounded-full mb-2">
            {t("mcp.connector_badge")}
          </span>
          <h3 className="text-lg font-extrabold text-gray-900 mb-2">
            {t("mcp.connector_title")}
          </h3>
          <p className="text-sm text-gray-600 leading-relaxed mb-4">
            {t("mcp.connector_lede")}
          </p>

          <ol className="space-y-3 mb-4">
            {[
              t("mcp.connector_step1"),
              t("mcp.connector_step2"),
              t("mcp.connector_step3"),
            ].map((step, i) => (
              <li key={step} className="flex gap-3">
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-white border border-orange-200 text-orange-600 text-xs font-black shrink-0">
                  {i + 1}
                </span>
                <span className="text-sm text-gray-700 leading-relaxed">
                  {step}
                </span>
              </li>
            ))}
          </ol>

          <div className="bg-white border border-orange-100 rounded-xl p-4 flex flex-col sm:flex-row sm:items-center gap-3">
            <div className="flex-1 min-w-0">
              <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">
                {t("mcp.connector_url_label")}
              </p>
              <code className="text-sm font-mono text-gray-800 break-all">
                https://api.copantry.com/mcp
              </code>
            </div>
            <CopyButton text="https://api.copantry.com/mcp" />
          </div>

          <p className="text-xs text-gray-500 leading-relaxed mt-3">
            {t("mcp.connector_note")}
          </p>
        </div>

        {/* ── Route B: the manual, key-based configuration ── */}
        <h3 className="text-lg font-extrabold text-gray-900 mb-1">
          {t("mcp.manual_title")}
        </h3>
        <p className="text-sm text-gray-500 mb-6">{t("mcp.manual_lede")}</p>

        {/* Step 1 */}
        <div className="mb-6">
          <div className="flex items-center gap-3 mb-3">
            <span className="flex items-center justify-center w-7 h-7 rounded-full bg-orange-500 text-white text-xs font-black shrink-0">
              1
            </span>
            <h3 className="font-bold text-gray-900">{t("mcp.step1_title")}</h3>
          </div>
          <div className="ml-10 bg-orange-50 border border-orange-100 rounded-xl p-4">
            <p className="text-sm text-gray-700 mb-3">{t("mcp.step1_desc")}</p>
            <a
              href="https://app.copantry.com/settings/mcp"
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white text-sm font-bold rounded-xl transition-colors"
            >
              <Key size={14} /> {t("mcp.step1_btn")} <ExternalLink size={13} />
            </a>
          </div>
        </div>

        {/* Step 2 */}
        <div className="mb-6">
          <div className="flex items-center gap-3 mb-3">
            <span className="flex items-center justify-center w-7 h-7 rounded-full bg-orange-500 text-white text-xs font-black shrink-0">
              2
            </span>
            <h3 className="font-bold text-gray-900">{t("mcp.step2_title")}</h3>
          </div>
          <div className="ml-10">
            <div className="flex gap-1 bg-gray-100 p-1 rounded-xl w-fit mb-3">
              {Object.entries(CLIENT_CONFIGS).map(([id, c]) => (
                <button
                  key={id}
                  onClick={() => setActiveClient(id)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition ${activeClient === id ? "bg-white text-gray-900 shadow-sm" : "text-gray-500 hover:text-gray-700"}`}
                >
                  {c.label}
                </button>
              ))}
            </div>
            <p className="text-xs text-gray-500 mb-2">{config.hint}</p>
            <CodeBlock code={config.code} lang={config.lang} />
          </div>
        </div>

        {/* Step 3 */}
        <div>
          <div className="flex items-center gap-3 mb-3">
            <span className="flex items-center justify-center w-7 h-7 rounded-full bg-orange-500 text-white text-xs font-black shrink-0">
              3
            </span>
            <h3 className="font-bold text-gray-900">{t("mcp.step3_title")}</h3>
          </div>
          <div className="ml-10 bg-gray-50 border border-gray-100 rounded-xl p-4">
            <p className="text-sm text-gray-600">{t("mcp.step3_desc")}</p>
            <p className="mt-2 text-sm font-mono text-orange-700 italic bg-orange-50 border border-orange-100 rounded-lg px-3 py-2">
              {t("mcp.step3_example")}
            </p>
          </div>
        </div>
      </section>

      {/* ── Tool Reference ───────────────────────────────── */}
      <section className="mb-12" id="tools">
        <div className="flex items-center justify-between mb-5">
          <div>
            <h2 className="text-2xl font-extrabold text-gray-900">
              {t("mcp.tools_title")}
            </h2>
            <p className="text-sm text-gray-500 mt-0.5">
              {totalTools} tools across {TOOLS.length} categories
            </p>
          </div>
          <span className="text-xs text-gray-400 bg-gray-50 border border-gray-100 px-3 py-1.5 rounded-full font-mono">
            MCP SDK v2.0
          </span>
        </div>
        <div className="space-y-4">
          {TOOLS.map((cat) => (
            <ToolCategory key={cat.category} cat={cat} />
          ))}
        </div>
      </section>

      {/* ── Prompts ─────────────────────────────────────── */}
      <section className="mb-12" id="prompts">
        <h2 className="text-2xl font-extrabold text-gray-900 mb-5">
          Built-in Prompts
        </h2>
        <div className="border border-violet-100 rounded-2xl overflow-hidden">
          <div className="flex items-start gap-3 p-5">
            <div className="bg-violet-50 w-9 h-9 rounded-xl flex items-center justify-center shrink-0">
              <Bot size={18} className="text-violet-600" />
            </div>
            <div>
              <p className="font-bold text-gray-900 mb-0.5">
                plan_waste_free_week
              </p>
              <p className="text-xs text-gray-500 mb-3">
                Guided prompt that asks the AI to review your pantry
                (prioritising items expiring soon) and your recipe collection,
                then suggest a 7-day meal plan that minimises food waste.
              </p>
              <div className="bg-violet-50 border border-violet-100 rounded-xl p-3">
                <p className="text-xs text-violet-800 italic leading-relaxed">
                  "Review my current pantry inventory (especially items expiring
                  soon) and my recipe collection. Suggest a 7-day meal plan that
                  uses up the expiring items and minimises food waste. Once I
                  approve, help me plan those meals in the calendar."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ─────────────────────────────────────────── */}
      <section className="mb-12" id="faq">
        <h2 className="text-2xl font-extrabold text-gray-900 mb-5">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {[
            {
              q: "Does the MCP server work with Claude, ChatGPT, and other AI assistants?",
              a: "Yes. CoPantry uses the standard Streamable HTTP transport defined by the MCP specification, which is supported by Claude Desktop, Cursor, Windsurf, and any client that implements the MCP protocol. For stdio-only clients, use the @copantry/mcp-server npx package.",
            },
            {
              q: "Is CoPantry an official ChatGPT or Claude connector?",
              a: "Not yet — CoPantry is not listed in their built-in connector directories. That does not stop you using it: both let you add a custom (remote) MCP server yourself, and CoPantry is a standard one. Paste https://api.copantry.com/mcp into your assistant's custom-connector setting, sign in with your CoPantry account, and it works exactly like a listed connector.",
            },
            {
              q: "Do I need to build an agent, install anything, or write code?",
              a: "No. Adding CoPantry as a custom connector takes about a minute in your assistant's settings — no agent framework, no local install, no code, and no API key. You then talk to your usual assistant in plain language and it calls CoPantry for you. The API key route below exists for desktop and coding clients that are configured through a file, not because it is required.",
            },
            {
              q: "How is my data secured?",
              a: "Every API key is scoped to a single household. The server validates the key on every request and only returns data belonging to that household. Keys can be revoked at any time from Settings → AI & MCP.",
            },
            {
              q: "What happens if I revoke an API key?",
              a: "Revocation is immediate. Any MCP client using that key will receive a 401 Unauthorized response on its next request. Generate a new key and update your client configuration to restore access.",
            },
            {
              q: "Are MCP calls counted against a rate limit?",
              a: "MCP calls are subject to a monthly usage limit to keep the service fast and fair for everyone. You can see your current usage and remaining calls any time in the app under Settings → AI & MCP. Recipes, pantry items, and calendar entries are unlimited.",
            },
            {
              q: "Can I use the MCP server without the CoPantry app?",
              a: "The MCP server requires a CoPantry account for authentication and data storage. The app (app.copantry.com) is where you manage your API keys and view your data. The MCP server is the programmatic interface for AI assistants.",
            },
          ].map(({ q, a }) => (
            <details
              key={q}
              className="group border border-gray-100 rounded-xl overflow-hidden"
            >
              <summary className="flex items-center justify-between p-4 cursor-pointer hover:bg-gray-50 transition font-semibold text-gray-800 text-sm list-none">
                {q}
                <ChevronRight
                  size={15}
                  className="text-gray-400 shrink-0 group-open:rotate-90 transition-transform"
                />
              </summary>
              <div className="px-4 pb-4 pt-1 text-sm text-gray-500 leading-relaxed border-t border-gray-50">
                {a}
              </div>
            </details>
          ))}
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────── */}
      <div className="bg-orange-500 rounded-2xl p-8 text-center text-white">
        <Bot size={28} className="mx-auto mb-3 opacity-80" />
        <h2 className="text-2xl font-extrabold mb-2">{t("mcp.ready_title")}</h2>
        <p className="text-orange-100 mb-6 max-w-md mx-auto text-sm">
          {t("mcp.ready_desc")}
        </p>
        <a
          href="https://app.copantry.com/settings/mcp"
          className="inline-flex items-center gap-2 px-6 py-3 bg-white text-orange-600 font-bold rounded-xl hover:bg-orange-50 transition-colors shadow-md"
        >
          <Key size={16} /> {t("mcp.ready_btn")} <ExternalLink size={14} />
        </a>
        <p className="text-xs text-orange-200 mt-3">{t("mcp.ready_note")}</p>
      </div>
    </div>
  );
}
