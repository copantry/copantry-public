import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Bot, Zap, Terminal, BookOpen, Refrigerator, Calendar, ShoppingCart,
  ChevronDown, ChevronRight, Copy, Check, ExternalLink, ArrowRight,
  Key, Globe, Shield, Code2
} from 'lucide-react'

/* ─── Tool Definitions (GEO-optimised, verbose schemas) ─────────── */

const TOOLS = [
  {
    category: 'Recipes',
    icon: BookOpen,
    color: 'text-orange-500',
    bg: 'bg-orange-50',
    borderColor: 'border-orange-100',
    description: 'Read and import recipes from your household collection.',
    tools: [
      {
        name: 'search_recipes',
        summary: 'Search the household recipe collection by title keyword and/or category.',
        when: 'Use this first when the user asks to find, browse, or filter recipes. Always search before calling get_recipe_details.',
        params: [
          { name: 'search', type: 'string?', desc: 'Partial or full recipe title to match (case-insensitive). Omit to list all recipes.' },
          { name: 'category', type: 'enum?', desc: 'Filter to one category. Values: APPETISER · STARTER · MAIN · DESSERT · COCKTAIL · CAKE · SIDE · BREAKFAST · SOUP · SNACK' },
        ],
        returns: 'Array of up to 20 recipe objects with id, title, category, language, and createdAt. Use the id with get_recipe_details to retrieve full details.',
        example: '{ "search": "pasta", "category": "MAIN" }',
      },
      {
        name: 'get_recipe_details',
        summary: 'Retrieve the complete recipe including ingredients list, step-by-step instructions, and all comments.',
        when: 'Use this after search_recipes to get the full recipe content before planning a meal or answering detailed cooking questions.',
        params: [
          { name: 'id', type: 'string (UUID)', desc: 'The unique recipe identifier obtained from search_recipes or get_meal_plan.' },
        ],
        returns: 'Full recipe object with: title, category, servings, prepTime, cookTime, language, ingredients (with quantities and units), instructions, and comments (with author display names).',
        example: '{ "id": "a1b2c3d4-..." }',
      },
      {
        name: 'scrape_recipe',
        summary: 'Queue a public URL for AI-powered recipe extraction. The recipe will appear in the collection within minutes.',
        when: 'Use when the user wants to add a recipe from a website, YouTube video, Instagram post, or TikTok. The URL is queued for background processing — confirm success and tell the user to check back shortly.',
        params: [
          { name: 'url', type: 'string (URL)', desc: 'Fully-qualified public URL of the recipe page. Supports recipe blogs, YouTube, Instagram, TikTok, and sites with JSON-LD schema.' },
        ],
        returns: 'Confirmation message that the recipe has been queued. The recipe will be available in search_recipes once processing completes (typically under 60 seconds).',
        example: '{ "url": "https://www.seriouseats.com/the-best-pizza-dough-recipe" }',
      },
    ],
  },
  {
    category: 'Pantry',
    icon: Refrigerator,
    color: 'text-green-600',
    bg: 'bg-green-50',
    borderColor: 'border-green-100',
    description: 'Manage the household\'s ingredient inventory with quantity and expiry tracking.',
    tools: [
      {
        name: 'list_pantry',
        summary: 'List all items currently in the household pantry, sorted by expiry date (soonest first).',
        when: 'Use to audit stock, plan waste-free meals, or answer "what do I have?" questions. Pass expiredOnly: true when the user asks about items that need to be used up urgently.',
        params: [
          { name: 'expiredOnly', type: 'boolean?', desc: 'If true, returns only items whose expiry date is in the past. Default: false (returns all items).' },
        ],
        returns: 'Array of pantry items each with: id, ingredient (name), quantity, unit, expiryDate, and createdAt. Items with no expiry date appear last.',
        example: '{ "expiredOnly": false }',
      },
      {
        name: 'add_pantry_item',
        summary: 'Add a new ingredient to the household pantry with optional quantity, unit, and expiry date.',
        when: 'Use when the user has bought groceries, received produce, or wants to log an ingredient. Normalise ingredient names (singular, lowercase) before calling — the server handles deduplication against the shared ingredient catalogue.',
        params: [
          { name: 'name', type: 'string', desc: 'Ingredient name in singular form, e.g. "egg", "chicken breast", "olive oil". The server normalises casing and pluralisation automatically.' },
          { name: 'quantity', type: 'number?', desc: 'Numeric amount, e.g. 6 (eggs) or 500 (grams of flour). Omit if unknown.' },
          { name: 'unit', type: 'string?', desc: 'Unit of measurement, e.g. "g", "ml", "cup", "piece". Omit if not applicable (e.g., whole eggs).' },
          { name: 'expiryDate', type: 'string? (YYYY-MM-DD)', desc: 'ISO-8601 date string for when the item expires. Omit if no expiry applies (e.g., salt).' },
        ],
        returns: 'Confirmation message listing the ingredient name, quantity, and unit that were added to the pantry.',
        example: '{ "name": "egg", "quantity": 12, "unit": "piece", "expiryDate": "2025-06-10" }',
      },
      {
        name: 'delete_pantry_item',
        summary: 'Remove a specific item from the pantry by its unique identifier.',
        when: 'Use when the user has discarded, consumed, or incorrectly logged an item. Always call list_pantry first to obtain the item\'s id — never guess UUIDs.',
        params: [
          { name: 'id', type: 'string (UUID)', desc: 'The unique pantry item identifier from list_pantry. This references the specific stock entry, not the ingredient name.' },
        ],
        returns: 'Confirmation that the item has been removed from the pantry.',
        example: '{ "id": "e5f6a7b8-..." }',
      },
    ],
  },
  {
    category: 'Meal Planning',
    icon: Calendar,
    color: 'text-violet-600',
    bg: 'bg-violet-50',
    borderColor: 'border-violet-100',
    description: 'View, schedule, and confirm meals on the household calendar.',
    tools: [
      {
        name: 'get_meal_plan',
        summary: 'Retrieve planned meals for a date range from the household meal calendar.',
        when: 'Use to check what is already scheduled before planning new meals, or to answer "what are we eating this week?" Omit both dates to get all upcoming meals.',
        params: [
          { name: 'startDate', type: 'string? (YYYY-MM-DD)', desc: 'Start of the date range (inclusive). Defaults to today if omitted.' },
          { name: 'endDate', type: 'string? (YYYY-MM-DD)', desc: 'End of the date range (inclusive). Defaults to 7 days from today if omitted.' },
        ],
        returns: 'Array of calendar entries each with: id (calendarId for confirm_meal), date, mealType (LUNCH or DINNER), isConfirmed, and recipe (title, category, servings).',
        example: '{ "startDate": "2025-06-02", "endDate": "2025-06-08" }',
      },
      {
        name: 'plan_meal',
        summary: 'Schedule a specific recipe for lunch or dinner on a given date in the household meal calendar.',
        when: 'Use after the user approves a meal plan suggestion. Always confirm the recipe exists (via search_recipes) and check the calendar (via get_meal_plan) for conflicts before scheduling.',
        params: [
          { name: 'recipeId', type: 'string (UUID)', desc: 'The recipe to schedule. Obtain from search_recipes.' },
          { name: 'date', type: 'string (YYYY-MM-DD)', desc: 'The date on which to schedule the meal.' },
          { name: 'mealType', type: 'enum', desc: 'Which meal slot: LUNCH or DINNER.' },
        ],
        returns: 'Confirmation with the recipe title, meal type, and scheduled date.',
        example: '{ "recipeId": "a1b2c3d4-...", "date": "2025-06-05", "mealType": "DINNER" }',
      },
      {
        name: 'confirm_meal',
        summary: 'Mark a planned meal as cooked and automatically deduct its ingredients from the pantry using FIFO expiry order.',
        when: 'Use when the user has finished cooking a meal. Ingredient deduction uses the recipe\'s default quantities unless consumedIngredients overrides them. Items are deducted starting from the earliest-expiring stock.',
        params: [
          { name: 'calendarId', type: 'string (UUID)', desc: 'The meal calendar entry id from get_meal_plan.' },
          { name: 'consumedIngredients', type: 'array? of {ingredientId, quantity}', desc: 'Optional override of actual quantities consumed. If omitted, the recipe\'s default ingredient quantities are used. Each object must have ingredientId (from list_pantry) and quantity (number).' },
        ],
        returns: 'Confirmation that the meal is marked as cooked and pantry has been updated. Lists any ingredients that could not be deducted due to insufficient stock.',
        example: '{ "calendarId": "c9d0e1f2-..." }',
      },
    ],
  },
  {
    category: 'Shopping',
    icon: ShoppingCart,
    color: 'text-blue-600',
    bg: 'bg-blue-50',
    borderColor: 'border-blue-100',
    description: 'View household shopping lists and their items.',
    tools: [
      {
        name: 'get_shopping_lists',
        summary: 'Retrieve all shopping lists for the household, including each list\'s name, status, and all line items.',
        when: 'Use when the user asks what they need to buy, wants to review shopping plans, or is about to go to the supermarket. Shopping lists are typically generated from the meal plan via the app.',
        params: [],
        returns: 'Array of shopping lists each with: id, name, createdAt, and items (array of {name, quantity, unit, checked}). Lists are sorted newest first.',
        example: '{}',
      },
    ],
  },
]

const CLIENT_CONFIGS = {
  claude: {
    label: 'Claude Desktop',
    hint: 'Add to claude_desktop_config.json — no installation required.',
    lang: 'json',
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
    label: 'Cursor / Windsurf',
    hint: 'Add to .cursor/mcp.json or .windsurf/mcp.json in your project root.',
    lang: 'json',
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
    label: 'npx (stdio)',
    hint: 'For MCP clients that only support stdio transport. No install needed.',
    lang: 'json',
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
    label: 'Raw HTTP',
    hint: 'Test your key with curl before integrating.',
    lang: 'bash',
    code: `curl -X POST "https://api.copantry.com/mcp" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{"jsonrpc":"2.0","id":1,"method":"tools/list","params":{}}'`,
  },
}

/* ─── Sub-components ────────────────────────────────────────────── */

function CopyButton({ text }) {
  const [copied, setCopied] = useState(false)
  return (
    <button
      onClick={() => { navigator.clipboard.writeText(text); setCopied(true); setTimeout(() => setCopied(false), 2000) }}
      className="p-1.5 rounded-lg hover:bg-white/10 transition text-gray-400 hover:text-white shrink-0"
      title="Copy"
    >
      {copied ? <Check size={14} className="text-green-400" /> : <Copy size={14} />}
    </button>
  )
}

function CodeBlock({ code, lang }) {
  return (
    <div className="relative bg-gray-900 rounded-xl overflow-hidden">
      <div className="flex items-center justify-between px-4 py-2.5 bg-gray-800 border-b border-gray-700">
        <span className="text-[11px] font-mono text-gray-400">{lang}</span>
        <CopyButton text={code} />
      </div>
      <pre className="p-4 text-sm font-mono text-gray-100 overflow-x-auto whitespace-pre leading-relaxed code-block">{code}</pre>
    </div>
  )
}

function DefinitionBlock({ term, children }) {
  return (
    <div className="border-l-4 border-orange-400 pl-5 py-1">
      <p className="font-black text-gray-900 text-base mb-1">{term}</p>
      <p className="text-gray-600 leading-relaxed">{children}</p>
    </div>
  )
}

function ParamRow({ name, type, desc }) {
  return (
    <tr className="border-b border-gray-50 last:border-0">
      <td className="py-2 pr-3 align-top w-36">
        <code className="text-xs font-mono font-bold text-orange-600">{name}</code>
      </td>
      <td className="py-2 pr-3 align-top w-32">
        <code className="text-[11px] font-mono text-gray-400">{type}</code>
      </td>
      <td className="py-2 text-xs text-gray-500 leading-relaxed">{desc}</td>
    </tr>
  )
}

function ToolCard({ tool }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border border-gray-100 rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(v => !v)}
        className="w-full flex items-start gap-3 p-4 hover:bg-gray-50 transition text-left"
      >
        <Terminal size={14} className="text-gray-300 mt-0.5 shrink-0" />
        <div className="flex-1 min-w-0">
          <code className="text-sm font-mono font-bold text-gray-800">{tool.name}</code>
          <p className="text-xs text-gray-500 mt-0.5 leading-snug">{tool.summary}</p>
        </div>
        {open ? <ChevronDown size={15} className="text-gray-400 mt-0.5 shrink-0" /> : <ChevronRight size={15} className="text-gray-400 mt-0.5 shrink-0" />}
      </button>

      {open && (
        <div className="border-t border-gray-100 px-4 pb-4 pt-3 space-y-4 bg-gray-50/40">
          {/* When to use */}
          <div>
            <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1.5">When to use</p>
            <p className="text-xs text-gray-600 leading-relaxed">{tool.when}</p>
          </div>

          {/* Parameters */}
          {tool.params.length > 0 && (
            <div>
              <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2">Parameters</p>
              <div className="bg-white border border-gray-100 rounded-xl overflow-hidden">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-gray-50 border-b border-gray-100">
                      <th className="text-left text-[10px] font-black text-gray-400 uppercase tracking-wider px-3 py-2">Name</th>
                      <th className="text-left text-[10px] font-black text-gray-400 uppercase tracking-wider px-3 py-2">Type</th>
                      <th className="text-left text-[10px] font-black text-gray-400 uppercase tracking-wider px-3 py-2">Description</th>
                    </tr>
                  </thead>
                  <tbody className="px-3">
                    {tool.params.map(p => (
                      <tr key={p.name} className="border-b border-gray-50 last:border-0">
                        <td className="py-2 px-3 align-top">
                          <code className="text-xs font-mono font-bold text-orange-600">{p.name}</code>
                        </td>
                        <td className="py-2 px-3 align-top">
                          <code className="text-[11px] font-mono text-gray-400">{p.type}</code>
                        </td>
                        <td className="py-2 px-3 text-xs text-gray-500 leading-relaxed">{p.desc}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Returns */}
          <div>
            <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1.5">Returns</p>
            <p className="text-xs text-gray-600 leading-relaxed">{tool.returns}</p>
          </div>

          {/* Example */}
          <div>
            <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1.5">Example input</p>
            <pre className="bg-gray-900 text-gray-100 text-xs font-mono p-3 rounded-xl overflow-x-auto code-block">{tool.example}</pre>
          </div>
        </div>
      )}
    </div>
  )
}

function ToolCategory({ cat }) {
  const [open, setOpen] = useState(true)
  const Icon = cat.icon
  return (
    <section className={`border ${cat.borderColor} rounded-2xl overflow-hidden`}>
      <button
        onClick={() => setOpen(v => !v)}
        className="w-full flex items-center gap-3 p-5 hover:bg-gray-50/50 transition text-left"
      >
        <div className={`${cat.bg} w-9 h-9 rounded-xl flex items-center justify-center shrink-0`}>
          <Icon size={18} className={cat.color} />
        </div>
        <div className="flex-1">
          <p className="font-bold text-gray-900">{cat.category}</p>
          <p className="text-xs text-gray-500">{cat.description}</p>
        </div>
        <span className="text-xs text-gray-400 font-semibold">{cat.tools.length} tool{cat.tools.length > 1 ? 's' : ''}</span>
        {open ? <ChevronDown size={16} className="text-gray-400 shrink-0" /> : <ChevronRight size={16} className="text-gray-400 shrink-0" />}
      </button>
      {open && (
        <div className="border-t border-gray-100 px-4 pb-4 pt-3 space-y-2">
          {cat.tools.map(t => <ToolCard key={t.name} tool={t} />)}
        </div>
      )}
    </section>
  )
}

/* ─── Page ──────────────────────────────────────────────────────── */

export default function McpPage() {
  const [activeClient, setActiveClient] = useState('claude')
  const config = CLIENT_CONFIGS[activeClient]
  const totalTools = TOOLS.reduce((n, c) => n + c.tools.length, 0)

  return (
    <div className="max-w-4xl mx-auto px-4 py-12 md:py-16">

      {/* ── Hero ──────────────────────────────────────────── */}
      <div className="mb-12">
        <div className="inline-flex items-center gap-2 bg-orange-50 border border-orange-100 text-orange-700 text-xs font-bold px-3 py-1.5 rounded-full mb-4">
          <Zap size={12} /> Model Context Protocol · {totalTools} tools available
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-4">
          CoPantry MCP Server
        </h1>
        <p className="text-lg text-gray-500 leading-relaxed max-w-2xl">
          A production-ready MCP implementation that lets Claude, GPT, and any AI assistant read and write your household's recipes, pantry, meal calendar, and shopping lists.
        </p>
        <a
          href="https://app.copantry.com/settings/mcp"
          className="mt-6 inline-flex items-center gap-2 px-5 py-3 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-xl transition-colors shadow-md shadow-orange-200/60"
        >
          <Key size={16} /> Get your API key <ArrowRight size={15} />
        </a>
      </div>

      {/* ── What is MCP ──────────────────────────────────── */}
      <section className="mb-12" id="what-is-mcp">
        <h2 className="text-2xl font-extrabold text-gray-900 mb-5">What is MCP?</h2>
        <div className="space-y-5">
          <DefinitionBlock term="Model Context Protocol (MCP)">
            An open standard published by Anthropic that defines a structured protocol for AI assistants to connect to external tools, data sources, and services. MCP lets a language model call functions with typed inputs and receive structured outputs — with full user permission control — without needing custom plugins or API wrappers.
          </DefinitionBlock>
          <DefinitionBlock term="MCP Server">
            A process or HTTP endpoint that exposes a set of <strong>tools</strong>, <strong>resources</strong>, and <strong>prompts</strong> in the MCP format. When an AI assistant connects to an MCP server, it can discover the available tools, understand their schemas, and invoke them on the user's behalf.
          </DefinitionBlock>
          <DefinitionBlock term="The CoPantry MCP Server">
            An always-on, stateless HTTP endpoint at <code className="text-sm font-mono bg-gray-100 px-1.5 py-0.5 rounded">https://api.copantry.com/mcp</code> that exposes {totalTools} tools covering your household's recipes, pantry, meal calendar, and shopping lists. Each request is authenticated with a personal API key scoped to your household. The server is implemented using the <a href="https://modelcontextprotocol.io" target="_blank" rel="noreferrer" className="text-orange-600 hover:underline inline-flex items-center gap-0.5">official MCP TypeScript SDK <ExternalLink size={11} /></a>.
          </DefinitionBlock>
        </div>
      </section>

      {/* ── What it lets AI do ───────────────────────────── */}
      <section className="mb-12 bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 md:p-8" id="capabilities">
        <h2 className="text-xl font-extrabold text-white mb-2">What your AI assistant can do</h2>
        <p className="text-gray-400 text-sm mb-6">Once connected, your AI assistant can handle these requests without you opening the app:</p>
        <div className="grid sm:grid-cols-2 gap-3">
          {[
            { q: 'Plan a waste-free week using expiring pantry items', icon: '♻️' },
            { q: 'Search for a pasta recipe and schedule it for Thursday dinner', icon: '🍝' },
            { q: 'Add 500g of chicken breast expiring next Monday to my pantry', icon: '🥩' },
            { q: 'Show me what\'s on the meal plan for this week', icon: '📅' },
            { q: 'Queue a recipe from a URL for import', icon: '🔗' },
            { q: 'Confirm that I cooked tonight\'s dinner and update the pantry', icon: '✅' },
            { q: 'List everything in my shopping lists', icon: '🛒' },
            { q: 'Remove the expired milk from my pantry', icon: '🥛' },
          ].map(({ q, icon }) => (
            <div key={q} className="flex items-start gap-2.5 p-3 bg-white/5 rounded-xl">
              <span className="text-lg shrink-0 mt-0.5">{icon}</span>
              <p className="text-sm text-gray-300 leading-snug italic">"{q}"</p>
            </div>
          ))}
        </div>
        <div className="mt-6 p-4 bg-orange-500/10 border border-orange-500/20 rounded-xl">
          <p className="text-sm font-bold text-orange-300 mb-1">Starter prompt</p>
          <p className="text-sm text-orange-200 italic">
            "Review my pantry (especially expiring items) and my recipe collection. Suggest a 7-day waste-free meal plan, then help me schedule it."
          </p>
        </div>
      </section>

      {/* ── Transport & Auth ─────────────────────────────── */}
      <section className="mb-12" id="transport">
        <h2 className="text-2xl font-extrabold text-gray-900 mb-5">Transport &amp; Authentication</h2>
        <div className="grid sm:grid-cols-3 gap-4 mb-6">
          {[
            { icon: Globe, title: 'Streamable HTTP', desc: 'Stateless JSON responses over HTTPS. No WebSocket or session management needed.' },
            { icon: Shield, title: 'Bearer Token Auth', desc: 'Every request requires an Authorization: Bearer <key> header. Keys are scoped to your household.' },
            { icon: Code2, title: 'MCP SDK 2.0', desc: 'Implements the official @modelcontextprotocol/sdk server using the latest Streamable HTTP transport.' },
          ].map(({ icon: Icon, title, desc }) => (
            <div key={title} className="bg-gray-50 border border-gray-100 rounded-xl p-4">
              <Icon size={18} className="text-orange-500 mb-2" />
              <p className="text-sm font-bold text-gray-900 mb-1">{title}</p>
              <p className="text-xs text-gray-500 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
        <div className="bg-gray-50 border border-gray-100 rounded-xl p-4 flex flex-col sm:flex-row sm:items-center gap-3">
          <div className="flex-1">
            <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">MCP Endpoint URL</p>
            <code className="text-sm font-mono text-gray-800">https://api.copantry.com/mcp</code>
          </div>
          <CopyButton text="https://api.copantry.com/mcp" />
        </div>
      </section>

      {/* ── Setup guide ──────────────────────────────────── */}
      <section className="mb-12" id="setup">
        <h2 className="text-2xl font-extrabold text-gray-900 mb-2">Setup guide</h2>
        <p className="text-gray-500 mb-6">Three steps to connect your AI assistant to CoPantry.</p>

        {/* Step 1 */}
        <div className="mb-6">
          <div className="flex items-center gap-3 mb-3">
            <span className="flex items-center justify-center w-7 h-7 rounded-full bg-orange-500 text-white text-xs font-black shrink-0">1</span>
            <h3 className="font-bold text-gray-900">Create an API key</h3>
          </div>
          <div className="ml-10 bg-orange-50 border border-orange-100 rounded-xl p-4">
            <p className="text-sm text-gray-700 mb-3">
              Log in to CoPantry and go to <strong>Settings → AI &amp; MCP</strong>, or click the button below. Name your key (e.g. "Claude Desktop"), then copy the key — it is only shown once.
            </p>
            <a
              href="https://app.copantry.com/settings/mcp"
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white text-sm font-bold rounded-xl transition-colors"
            >
              <Key size={14} /> Open API key settings <ExternalLink size={13} />
            </a>
          </div>
        </div>

        {/* Step 2 */}
        <div className="mb-6">
          <div className="flex items-center gap-3 mb-3">
            <span className="flex items-center justify-center w-7 h-7 rounded-full bg-orange-500 text-white text-xs font-black shrink-0">2</span>
            <h3 className="font-bold text-gray-900">Configure your MCP client</h3>
          </div>
          <div className="ml-10">
            <div className="flex gap-1 bg-gray-100 p-1 rounded-xl w-fit mb-3">
              {Object.entries(CLIENT_CONFIGS).map(([id, c]) => (
                <button
                  key={id}
                  onClick={() => setActiveClient(id)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition ${activeClient === id ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}
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
            <span className="flex items-center justify-center w-7 h-7 rounded-full bg-orange-500 text-white text-xs font-black shrink-0">3</span>
            <h3 className="font-bold text-gray-900">Start asking questions</h3>
          </div>
          <div className="ml-10 bg-gray-50 border border-gray-100 rounded-xl p-4">
            <p className="text-sm text-gray-600">Restart your MCP client (Claude Desktop requires a full restart). Then try:</p>
            <p className="mt-2 text-sm font-mono text-orange-700 italic bg-orange-50 border border-orange-100 rounded-lg px-3 py-2">
              "Search my CoPantry recipes for something with chicken and schedule it for dinner tomorrow."
            </p>
          </div>
        </div>
      </section>

      {/* ── Tool Reference ───────────────────────────────── */}
      <section className="mb-12" id="tools">
        <div className="flex items-center justify-between mb-5">
          <div>
            <h2 className="text-2xl font-extrabold text-gray-900">Tool Reference</h2>
            <p className="text-sm text-gray-500 mt-0.5">{totalTools} tools across {TOOLS.length} categories</p>
          </div>
          <span className="text-xs text-gray-400 bg-gray-50 border border-gray-100 px-3 py-1.5 rounded-full font-mono">
            MCP SDK v2.0
          </span>
        </div>
        <div className="space-y-4">
          {TOOLS.map(cat => <ToolCategory key={cat.category} cat={cat} />)}
        </div>
      </section>

      {/* ── Prompts ─────────────────────────────────────── */}
      <section className="mb-12" id="prompts">
        <h2 className="text-2xl font-extrabold text-gray-900 mb-5">Built-in Prompts</h2>
        <div className="border border-violet-100 rounded-2xl overflow-hidden">
          <div className="flex items-start gap-3 p-5">
            <div className="bg-violet-50 w-9 h-9 rounded-xl flex items-center justify-center shrink-0">
              <Bot size={18} className="text-violet-600" />
            </div>
            <div>
              <p className="font-bold text-gray-900 mb-0.5">plan_waste_free_week</p>
              <p className="text-xs text-gray-500 mb-3">Guided prompt that asks the AI to review your pantry (prioritising items expiring soon) and your recipe collection, then suggest a 7-day meal plan that minimises food waste.</p>
              <div className="bg-violet-50 border border-violet-100 rounded-xl p-3">
                <p className="text-xs text-violet-800 italic leading-relaxed">
                  "Review my current pantry inventory (especially items expiring soon) and my recipe collection. Suggest a 7-day meal plan that uses up the expiring items and minimises food waste. Once I approve, help me plan those meals in the calendar."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ─────────────────────────────────────────── */}
      <section className="mb-12" id="faq">
        <h2 className="text-2xl font-extrabold text-gray-900 mb-5">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            {
              q: 'Does the MCP server work with Claude, ChatGPT, and other AI assistants?',
              a: 'Yes. CoPantry uses the standard Streamable HTTP transport defined by the MCP specification, which is supported by Claude Desktop, Cursor, Windsurf, and any client that implements the MCP protocol. For stdio-only clients, use the @copantry/mcp-server npx package.',
            },
            {
              q: 'How is my data secured?',
              a: 'Every API key is scoped to a single household. The server validates the key on every request and only returns data belonging to that household. Keys can be revoked at any time from Settings → AI & MCP.',
            },
            {
              q: 'What happens if I revoke an API key?',
              a: 'Revocation is immediate. Any MCP client using that key will receive a 401 Unauthorized response on its next request. Generate a new key and update your client configuration to restore access.',
            },
            {
              q: 'Are MCP calls counted against a rate limit?',
              a: 'Yes. Each plan includes a monthly MCP call allowance (200 on Hobbyist, 3,000 on Home, 10,000 on Family, 60,000 on Builder). Recipes, pantry items, and calendar entries are unlimited. Usage resets on your billing anniversary.',
            },
            {
              q: 'Can I use the MCP server without the CoPantry app?',
              a: 'The MCP server requires a CoPantry account for authentication and data storage. The app (app.copantry.com) is where you manage your API keys and view your data. The MCP server is the programmatic interface for AI assistants.',
            },
          ].map(({ q, a }) => (
            <details key={q} className="group border border-gray-100 rounded-xl overflow-hidden">
              <summary className="flex items-center justify-between p-4 cursor-pointer hover:bg-gray-50 transition font-semibold text-gray-800 text-sm list-none">
                {q}
                <ChevronRight size={15} className="text-gray-400 shrink-0 group-open:rotate-90 transition-transform" />
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
        <h2 className="text-2xl font-extrabold mb-2">Ready to connect your AI?</h2>
        <p className="text-orange-100 mb-6 max-w-md mx-auto text-sm">
          Create your API key in 30 seconds and let your AI assistant take control of your kitchen.
        </p>
        <a
          href="https://app.copantry.com/settings/mcp"
          className="inline-flex items-center gap-2 px-6 py-3 bg-white text-orange-600 font-bold rounded-xl hover:bg-orange-50 transition-colors shadow-md"
        >
          <Key size={16} /> Get API key at app.copantry.com <ExternalLink size={14} />
        </a>
        <p className="text-xs text-orange-200 mt-3">Free plan includes 200 MCP calls/month · No credit card required</p>
      </div>
    </div>
  )
}
