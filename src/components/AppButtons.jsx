/*
 * App download buttons (Android + iOS).
 *
 * The native apps are not live yet, so the buttons are deliberately disabled and
 * labelled "Coming soon". When the store links exist, set ANDROID_URL / IOS_URL
 * and the buttons activate automatically.
 *
 * Both buttons share one fixed width so they line up, and the row wraps (instead
 * of overflowing) inside narrow columns such as the footer.
 */

import { UI, pick } from "../content/localized";
import { useLang } from "../i18n/useLang";

const ANDROID_URL = null; // e.g. 'https://play.google.com/store/apps/details?id=com.copantry'
const IOS_URL = null; // e.g. 'https://apps.apple.com/app/copantry/id000000000'

// Official Apple logo (monochrome — inherits the button's text colour).
function AppleLogo({ className = "" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="22"
      height="22"
      fill="currentColor"
      aria-hidden="true"
      className={`shrink-0 ${className}`}
    >
      <path d="M16.365 1.43c0 1.14-.493 2.27-1.177 3.08-.744.9-1.99 1.57-2.987 1.57-.12 0-.23-.02-.3-.03-.01-.06-.04-.22-.04-.39 0-1.15.572-2.27 1.206-2.98.804-.94 2.142-1.64 3.248-1.68.03.13.05.28.05.43zm4.565 15.71c-.03.07-.463 1.58-1.518 3.12-.945 1.34-1.94 2.71-3.43 2.71-1.517 0-1.9-.88-3.63-.88-1.698 0-2.302.91-3.67.91-1.377 0-2.332-1.26-3.428-2.8-1.287-1.82-2.323-4.63-2.323-7.28 0-4.28 2.797-6.55 5.552-6.55 1.448 0 2.675.95 3.6.95.865 0 2.222-1.01 3.902-1.01.613 0 2.886.06 4.374 2.19-.13.09-2.383 1.37-2.383 4.19 0 3.26 2.854 4.42 2.942 4.46z" />
    </svg>
  );
}

// Official Google Play logo (the four-colour triangle).
function GooglePlayLogo({ className = "" }) {
  return (
    <svg
      viewBox="0 0 512 512"
      width="20"
      height="20"
      aria-hidden="true"
      className={`shrink-0 ${className}`}
    >
      <path
        fill="#00D4FF"
        d="M47.1 24.6C40.6 31.5 36.9 42 36.9 55.6v400.8c0 13.6 3.7 24.1 10.5 30.7l1.4 1.3 224.5-224.5v-5.3L48.5 23.3l-1.4 1.3z"
      />
      <path
        fill="#FFD400"
        d="M348 337.1l-74.7-74.8v-5.3l74.8-74.8 1.7 1 88.6 50.3c25.3 14.4 25.3 37.9 0 52.3l-88.6 50.3-1.8 1z"
      />
      <path
        fill="#FF3333"
        d="M349.7 336.1 273.3 259.7 47.1 485.9c8.3 8.8 22.1 9.9 37.7 1.2l264.9-151z"
      />
      <path
        fill="#48FF48"
        d="M349.7 183.3 84.8 32.4C69.2 23.6 55.4 24.8 47.1 33.6l226.2 226.1 76.4-76.4z"
      />
    </svg>
  );
}

function StoreButton({ href, Logo, line1, line2, soon }) {
  const disabled = !href;
  // Fixed width on both buttons so they line up; full row wraps in narrow columns.
  const base =
    "flex items-center gap-3 px-4 py-2.5 rounded-xl font-semibold transition-colors w-56 max-w-full justify-center";

  const content = (
    <>
      <Logo className={disabled ? "opacity-40 grayscale" : ""} />
      <span className="text-left leading-tight">
        <span className="block text-[10px] uppercase tracking-widest opacity-70">
          {line1}
        </span>
        <span className="block text-sm font-bold">{line2}</span>
      </span>
      {disabled && (
        <span className="ml-auto text-[9px] font-black uppercase tracking-widest bg-black/10 px-1.5 py-0.5 rounded-full">
          {soon}
        </span>
      )}
    </>
  );

  if (disabled) {
    return (
      <span
        aria-disabled="true"
        title="Coming soon"
        className={`${base} bg-gray-200 text-gray-500 cursor-not-allowed select-none`}
      >
        {content}
      </span>
    );
  }
  return (
    <a
      href={href}
      className={`${base} bg-gray-900 text-white hover:bg-gray-800`}
    >
      {content}
    </a>
  );
}

export default function AppButtons({ className = "", note = true }) {
  const ui = pick(UI, useLang());
  return (
    <div className={className}>
      <div className="flex flex-wrap gap-3">
        <StoreButton
          href={IOS_URL}
          Logo={AppleLogo}
          line1="Download on the"
          line2="App Store"
          soon={ui.appSoon}
        />
        <StoreButton
          href={ANDROID_URL}
          Logo={GooglePlayLogo}
          line1="Get it on"
          line2="Google Play"
          soon={ui.appSoon}
        />
      </div>
      {note && <p className="mt-2.5 text-xs text-gray-400">{ui.appsNote}</p>}
    </div>
  );
}
