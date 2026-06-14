/*
 * App download buttons (Android + iOS).
 *
 * The native apps are not live yet, so the buttons are deliberately disabled and
 * labelled "Coming soon". When the store links exist, set ANDROID_URL / IOS_URL
 * and the buttons activate automatically.
 */

import { Apple, Smartphone } from 'lucide-react'
import { UI } from '../content/localized'
import { useLang } from '../i18n/useLang'

const ANDROID_URL = null // e.g. 'https://play.google.com/store/apps/details?id=com.copantry'
const IOS_URL = null // e.g. 'https://apps.apple.com/app/copantry/id000000000'

function StoreButton({ href, Icon, line1, line2, soon }) {
  const disabled = !href
  const base =
    'flex items-center gap-3 px-5 py-3 rounded-xl font-semibold transition-colors w-full sm:w-auto justify-center'

  const content = (
    <>
      <Icon size={24} className="shrink-0" />
      <span className="text-left leading-tight">
        <span className="block text-[10px] uppercase tracking-widest opacity-70">{line1}</span>
        <span className="block text-sm font-bold">{line2}</span>
      </span>
      {disabled && (
        <span className="ml-1 text-[10px] font-black uppercase tracking-widest bg-white/15 px-2 py-0.5 rounded-full">
          {soon}
        </span>
      )}
    </>
  )

  if (disabled) {
    return (
      <span
        aria-disabled="true"
        title="Coming soon"
        className={`${base} bg-gray-200 text-gray-400 cursor-not-allowed select-none`}
      >
        {content}
      </span>
    )
  }
  return (
    <a href={href} className={`${base} bg-gray-900 text-white hover:bg-gray-800`}>
      {content}
    </a>
  )
}

export default function AppButtons({ className = '', note = true }) {
  const ui = UI[useLang()] || UI.en
  return (
    <div className={className}>
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
        <StoreButton href={IOS_URL} Icon={Apple} line1="Download on the" line2="App Store" soon={ui.appSoon} />
        <StoreButton href={ANDROID_URL} Icon={Smartphone} line1="Get it on" line2="Google Play" soon={ui.appSoon} />
      </div>
      {note && <p className="mt-2.5 text-xs text-gray-400">{ui.appsNote}</p>}
    </div>
  )
}
