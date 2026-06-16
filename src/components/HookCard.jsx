/*
 * The signature hero visual: "what's about to go off → tonight's dinner → money saved".
 * This is the hook that communicates the whole product in one glance — used in
 * place of a generic calendar screenshot. Lightweight (emoji + CSS), no images.
 */

import { ArrowRight, Clock, Sparkles, PiggyBank } from "lucide-react";
import { HOOK, pick } from "../content/localized";
import { useLang } from "../i18n/useLang";

export default function HookCard() {
  const c = pick(HOOK, useLang());

  return (
    <div className="relative">
      {/* soft glow */}
      <div className="absolute -inset-4 bg-orange-200/40 blur-3xl rounded-[2.5rem] pointer-events-none" />

      <div className="relative bg-white rounded-3xl border border-gray-100 shadow-xl shadow-orange-100/50 p-5 sm:p-6 max-w-sm mx-auto">
        {/* First to go */}
        <div className="flex items-center gap-2 mb-3">
          <Clock size={15} className="text-rose-500" />
          <p className="text-xs font-black uppercase tracking-widest text-gray-400">
            {c.firstToGo}
          </p>
        </div>
        <ul className="space-y-2">
          {c.items.map(({ emoji, name, left }) => (
            <li
              key={name}
              className="flex items-center gap-3 bg-gray-50 rounded-xl px-3 py-2.5"
            >
              <span className="text-xl" aria-hidden="true">
                {emoji}
              </span>
              <span className="text-sm font-semibold text-gray-800 flex-1">
                {name}
              </span>
              <span className="text-[11px] font-bold text-rose-600 bg-rose-50 px-2 py-0.5 rounded-full">
                {left}
              </span>
            </li>
          ))}
        </ul>

        {/* Arrow */}
        <div className="flex justify-center my-3">
          <div className="w-9 h-9 rounded-full bg-orange-500 flex items-center justify-center shadow-md shadow-orange-200">
            <ArrowRight size={18} className="text-white rotate-90" />
          </div>
        </div>

        {/* Tonight's dinner */}
        <div className="rounded-2xl border border-orange-100 bg-orange-50/60 p-4">
          <div className="flex items-center gap-2 mb-1.5">
            <Sparkles size={15} className="text-orange-500" />
            <p className="text-xs font-black uppercase tracking-widest text-orange-500">
              {c.tonight}
            </p>
          </div>
          <p className="text-lg font-extrabold text-gray-900 leading-tight">
            {c.dish}
          </p>
          <p className="text-sm text-gray-500 mt-1">{c.dishMeta}</p>
        </div>

        {/* Saved */}
        <div className="flex items-center gap-2 mt-4 justify-center">
          <PiggyBank size={16} className="text-green-600" />
          <p className="text-sm font-bold text-green-700">{c.saved}</p>
        </div>
      </div>
    </div>
  );
}
