const LAST_UPDATED = "31 August 2026";

function Section({ id, title, children }) {
  return (
    <section id={id} className="mb-10">
      <h2 className="text-xl font-extrabold text-gray-900 mb-4 pb-2 border-b border-gray-100">
        {title}
      </h2>
      <div className="space-y-3 text-sm text-gray-600 leading-relaxed">
        {children}
      </div>
    </section>
  );
}

function P({ children }) {
  return <p>{children}</p>;
}

function UL({ items }) {
  return (
    <ul className="list-disc pl-5 space-y-1.5">
      {items.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  );
}

export default function PrivacyPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16 md:py-24">
      <div className="mb-12">
        <p className="text-xs font-black text-orange-500 uppercase tracking-widest mb-3">
          Legal
        </p>
        <h1 className="text-4xl font-extrabold text-gray-900 mb-3">
          Privacy Policy
        </h1>
        <p className="text-sm text-gray-400">Last updated: {LAST_UPDATED}</p>
        <div className="mt-4 p-4 bg-blue-50 border border-blue-100 rounded-xl text-sm text-blue-800">
          This policy explains what personal data CoPantry collects, why, and
          what rights you have over it. We have tried to write it in plain
          language. If you have questions, contact us at{" "}
          <button
            onClick={() => {
              const p = ["info", "copantry.com"];
              window.location.href = `mailto:${p[0]}@${p[1]}`;
            }}
            className="font-semibold underline cursor-pointer"
          >
            info@copantry.com
          </button>
          .
        </div>
      </div>

      <Section id="who-we-are" title="1. Who we are">
        <P>
          CoPantry ("CoPantry", "we", "our", "us") is the operator of the recipe
          and meal-planning service available at{" "}
          <strong>app.copantry.com</strong> and the marketing site at{" "}
          <strong>www.copantry.com</strong>.
        </P>
        <P>
          For the purposes of the UK GDPR and EU GDPR, CoPantry is the data
          controller for personal data collected through these services.
        </P>
      </Section>

      <Section id="what-we-collect" title="2. What data we collect">
        <P>
          <strong>Account data</strong> — when you register, we collect your
          email address, display name, and a securely hashed version of your
          password. We never store your password in readable form.
        </P>
        <P>
          <strong>Content data</strong> — recipes (titles, ingredients,
          instructions, photos), pantry items, meal calendar entries, shopping
          lists, and household memberships that you create or import.
        </P>
        <P>
          <strong>AI provider credentials</strong> — if you choose to provide a
          Google Gemini API key to unlock AI features, that key is stored in
          encrypted form in our database. We decrypt it only at the moment it is
          needed to process your request, and we never log or display it.
        </P>
        <P>
          <strong>Usage data</strong> — counts of API calls made against your
          plan (for plan-limit enforcement), and the timestamps of actions such
          as recipe imports. We do not build detailed behavioural profiles.
        </P>
        <P>
          <strong>Technical data</strong> — IP addresses and basic HTTP request
          metadata are captured in server logs for security and diagnostic
          purposes. Log retention is limited to 30 days.
        </P>
        <P>
          <strong>Holiday windows</strong> — if you use Holiday mode, we store
          the dates you choose so that we can pause reminders while you are
          away. Because those dates say when you are not at home, we treat them
          as private to you and your household: they are never shown on your
          public profile, shared with people who follow you, included in any
          public recipe page, or made available to advertisers.
        </P>
        <P>
          <strong>Language preference</strong> — if you accept our cookie notice
          on www.copantry.com, we store your chosen language in your browser's
          localStorage. This is not transmitted to our servers.
        </P>
      </Section>

      <Section id="how-we-use" title="3. How we use your data">
        <UL
          items={[
            "To create and manage your account and household.",
            "To store and serve your recipes, pantry, and meal plan.",
            "To process AI-assisted recipe imports: when you submit a URL, image, or text for parsing, that content is sent to Google Gemini (using your API key) or to our self-hosted Ollama model. The content you submit is processed solely to return a structured recipe result and is not used to train third-party models under the applicable API terms.",
            "To enforce your plan limits and send transactional emails (e.g. account confirmation, password reset).",
            "To diagnose errors and improve the reliability of the service.",
            "To comply with legal obligations.",
          ]}
        />
        <P>
          We do not sell your personal data to third parties. Copantry shows
          clearly-labelled advertising and sponsored recipes from vetted
          businesses, but ad targeting is contextual (what you are cooking, your
          market and language) and consent-based — never built by selling or
          handing over your personal data. Advertisers only ever receive
          aggregated, anonymised performance reporting, never per-user data. You
          can decline ad personalisation via the cookie notice; you will still
          see contextual ads but no behavioural targeting.
        </P>
      </Section>

      <Section id="third-parties" title="4. Third-party processors">
        <P>
          We share data with the following categories of third-party processors
          where necessary to operate the service:
        </P>
        <UL
          items={[
            "Google LLC (Gemini API) — recipe content you choose to parse using your own Gemini key is transmitted to Google's servers. This is subject to Google's API terms and privacy policy. If you do not provide a Gemini key, your content is processed only by our self-hosted model.",
            'Sign-in providers (Google, Apple) — if you choose to sign in or register with Google or Apple, we receive a verified identifier and your email and name from that provider to create or access your account. If you use Apple\'s "Hide My Email", we only ever see the private relay address Apple provides. We do not post anything to those accounts.',
            "Infrastructure and hosting providers — our servers, database, and object storage are hosted on third-party cloud infrastructure. These providers process data on our behalf under data processing agreements.",
            "Payment processors (Stripe) — if you subscribe to a paid plan, or if you advertise with us as a business, payment is handled by Stripe (including Stripe Tax for VAT). We do not see or store your full card number; Stripe processes payment data under a data processing agreement with appropriate transfer safeguards.",
            "Analytics (Google Analytics) — on our marketing site (www.copantry.com) we use Google Analytics to understand aggregate, anonymised traffic (pages viewed, approximate region). It loads only if you accept the cookie notice, with IP anonymisation and advertising/ad-personalisation signals disabled. Decline the cookie notice and no analytics cookies are set.",
          ]}
        />
        <P>
          We do not transfer personal data outside the UK/EEA without
          appropriate safeguards (such as Standard Contractual Clauses where
          required).
        </P>
      </Section>

      <Section id="legal-bases" title="5. Legal bases for processing (GDPR)">
        <UL
          items={[
            "Contract performance — processing your account data, content, and usage data is necessary to deliver the service you signed up for.",
            "Legitimate interests — server logs and usage diagnostics are processed on the basis of our legitimate interest in operating a secure and stable service.",
            "Consent — storing your language preference in localStorage, and loading Google Analytics, on www.copantry.com is done only with your consent, which you can withdraw at any time by clearing your browser's localStorage or declining the cookie notice.",
            "Legal obligation — we may process data where required to comply with applicable law.",
          ]}
        />
      </Section>

      <Section id="retention" title="6. How long we keep your data">
        <UL
          items={[
            "Account and content data: retained for as long as your account is active. If you delete your account, we will delete your personal data within 30 days, except where we are required to retain it for legal or financial compliance.",
            "Server logs: deleted after 30 days.",
            "In-app notifications: automatically purged after 90 days.",
            "Backups: encrypted backups are retained for up to 90 days and then purged.",
          ]}
        />
      </Section>

      <Section id="your-rights" title="7. Your rights">
        <P>Under UK/EU data protection law, you have the following rights:</P>
        <UL
          items={[
            "Access — you can request a copy of the personal data we hold about you.",
            "Rectification — you can ask us to correct inaccurate data.",
            "Erasure — you can ask us to delete your account and associated personal data.",
            "Portability — you can request an export of your recipes and other content data in a machine-readable format.",
            "Objection — you can object to processing based on legitimate interests.",
            "Restriction — you can ask us to restrict processing in certain circumstances.",
            "Withdraw consent — where processing is based on consent (language preference), you can withdraw it at any time without affecting the lawfulness of prior processing.",
          ]}
        />
        <P>
          To exercise any of these rights, contact us at info@copantry.com. We
          will respond within 30 days. If you are unsatisfied with our response,
          you have the right to lodge a complaint with your national data
          protection authority (e.g. the ICO in the UK, or your local EU
          supervisory authority).
        </P>
      </Section>

      <Section id="security" title="8. Security">
        <P>
          We implement technical and organisational measures to protect your
          data, including password hashing (bcrypt), encrypted storage of API
          keys, TLS encryption in transit, and access controls on our
          infrastructure.
        </P>
        <P>
          No method of transmission over the internet or electronic storage is
          completely secure. We cannot guarantee absolute security, and we
          encourage you to use a strong, unique password and to keep your API
          keys confidential.
        </P>
      </Section>

      <Section id="children" title="9. Children">
        <P>
          CoPantry is not directed at children under 16. We do not knowingly
          collect personal data from anyone under 16. If you believe a child has
          provided us with personal data, please contact us and we will delete
          it promptly.
        </P>
      </Section>

      <Section id="changes" title="10. Changes to this policy">
        <P>
          We may update this policy from time to time. When we make material
          changes, we will update the "Last updated" date at the top of this
          page and, where appropriate, notify you by email. Continued use of the
          service after changes take effect constitutes acceptance of the
          updated policy.
        </P>
      </Section>

      <Section id="contact" title="11. Contact">
        <P>
          For any privacy-related questions or requests, please contact us:{" "}
          <button
            onClick={() => {
              const p = ["info", "copantry.com"];
              window.location.href = `mailto:${p[0]}@${p[1]}`;
            }}
            className="text-orange-600 font-semibold underline cursor-pointer"
          >
            info@copantry.com
          </button>
        </P>
      </Section>

      <div className="mt-10 pt-6 border-t border-gray-100 text-xs text-gray-400 leading-relaxed">
        <p className="font-semibold text-gray-500">Copantry Ltd</p>
        <p>167-169 Great Portland Street, 5th Floor</p>
        <p>London W1W 5PF</p>
        <p className="mt-1">Registered in England &amp; Wales.</p>
      </div>
    </div>
  );
}
