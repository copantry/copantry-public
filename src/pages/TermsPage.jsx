const LAST_UPDATED = '28 May 2026'

function Section({ id, title, children }) {
  return (
    <section id={id} className="mb-10">
      <h2 className="text-xl font-extrabold text-gray-900 mb-4 pb-2 border-b border-gray-100">{title}</h2>
      <div className="space-y-3 text-sm text-gray-600 leading-relaxed">{children}</div>
    </section>
  )
}

function P({ children }) {
  return <p>{children}</p>
}

function UL({ items }) {
  return (
    <ul className="list-disc pl-5 space-y-1.5">
      {items.map((item, i) => <li key={i}>{item}</li>)}
    </ul>
  )
}

export default function TermsPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16 md:py-24">

      <div className="mb-12">
        <p className="text-xs font-black text-orange-500 uppercase tracking-widest mb-3">Legal</p>
        <h1 className="text-4xl font-extrabold text-gray-900 mb-3">Terms of Service</h1>
        <p className="text-sm text-gray-400">Last updated: {LAST_UPDATED}</p>
        <div className="mt-4 p-4 bg-amber-50 border border-amber-100 rounded-xl text-sm text-amber-800">
          Please read these terms carefully before using CoPantry. By creating an account or using the service, you agree to be bound by them.
        </div>
      </div>

      <Section id="acceptance" title="1. Acceptance of terms">
        <P>These Terms of Service ("Terms") form a legally binding agreement between you and CoPantry ("CoPantry", "we", "our", "us") governing your use of the CoPantry application and services (collectively, the "Service").</P>
        <P>If you do not agree to these Terms, do not use the Service. If you are using the Service on behalf of an organisation, you represent that you have authority to bind that organisation to these Terms.</P>
      </Section>

      <Section id="eligibility" title="2. Eligibility">
        <P>You must be at least 16 years old to use the Service. By using the Service, you represent that you meet this requirement. If you are under 18, you should have your parent or guardian review these Terms.</P>
        <P>You must provide accurate information when creating an account. You are responsible for keeping your account credentials secure and for all activity that occurs under your account.</P>
      </Section>

      <Section id="the-service" title="3. The Service">
        <P>CoPantry is a recipe and meal-planning application that allows users to:</P>
        <UL items={[
          'Import, store, and organise recipes.',
          'Track household pantry items and expiry dates.',
          'Plan meals using a shared household calendar.',
          'Generate shopping lists from meal plans.',
          'Optionally connect AI assistants (via the Model Context Protocol) to interact with their data.',
        ]} />
        <P>We reserve the right to modify, suspend, or discontinue any feature or aspect of the Service at any time, with or without notice. We will make reasonable efforts to communicate significant changes in advance where practicable.</P>
        <P><strong>Service availability:</strong> We aim to provide a reliable service but do not guarantee any specific level of uptime or availability. The Service is provided on an "as available" basis. Planned and unplanned maintenance may result in temporary unavailability.</P>
      </Section>

      <Section id="accounts" title="4. Accounts and households">
        <P>Each account belongs to one individual user. Account sharing with people outside your household is not permitted.</P>
        <P>Households are shared workspaces. All members of a household can view and edit shared content (recipes, pantry, meal plan, shopping lists). You are responsible for the people you invite into your household.</P>
        <P>You may delete your account at any time from the Settings page. Upon deletion, your personal data will be removed in accordance with our Privacy Policy.</P>
      </Section>

      <Section id="content" title="5. Your content">
        <P><strong>Ownership:</strong> You retain ownership of all recipes, notes, and other content you create or import into CoPantry ("Your Content").</P>
        <P><strong>Licence to us:</strong> By submitting content to the Service, you grant CoPantry a limited, non-exclusive, royalty-free licence to store, process, and display Your Content solely for the purpose of providing the Service to you and your household. We do not claim any ownership rights in Your Content.</P>
        <P><strong>AI processing:</strong> When you use AI-assisted features (recipe import from URL, photo, or text), the content you submit is transmitted to a third-party AI provider (Google Gemini, if you have configured an API key) or processed by our self-hosted model. You are responsible for ensuring you have the right to submit that content for processing. We do not use Your Content to train AI models.</P>
        <P><strong>Responsibility:</strong> You are solely responsible for Your Content and for ensuring it does not infringe third-party intellectual property rights. CoPantry is a tool for personal household use; it is not intended for large-scale commercial recipe republication.</P>
      </Section>

      <Section id="acceptable-use" title="6. Acceptable use">
        <P>You agree not to:</P>
        <UL items={[
          'Use the Service for any unlawful purpose or in violation of any applicable law or regulation.',
          'Attempt to gain unauthorised access to other users\' accounts or data.',
          'Use automated tools (bots, scrapers) to access the Service beyond the documented MCP API, except for personal use.',
          'Abuse the MCP API in a way that unreasonably degrades the service for other users.',
          'Reverse engineer, decompile, or attempt to extract the source code of the Service.',
          'Resell or sublicence the Service without our prior written consent.',
          'Impersonate any person or entity or misrepresent your affiliation with any person or entity.',
        ]} />
        <P>We reserve the right to suspend or terminate accounts that violate these rules, at our sole discretion.</P>
      </Section>

      <Section id="subscriptions" title="7. Subscriptions and billing">
        <P><strong>Free plan:</strong> The Hobbyist plan is free and does not require a payment method. It includes limited AI action credits per month.</P>
        <P><strong>Paid plans:</strong> Home, Family, and Builder plans are billed monthly in advance. Prices are listed on our Pricing page and may be updated with 30 days' notice to existing subscribers.</P>
        <P><strong>Upgrades:</strong> Upgrading to a higher plan takes effect immediately. The price difference is calculated on a pro-rata basis for the remainder of the billing period.</P>
        <P><strong>Downgrades and cancellation:</strong> You may downgrade or cancel at any time. Downgrades and cancellations take effect at the end of the current billing period. We do not provide refunds for partial billing periods already paid.</P>
        <P><strong>Plan limits:</strong> AI action credits (MCP API calls) reset on your monthly billing anniversary. Unused credits do not roll over. If you exceed your monthly limit, AI tool calls will be rejected until the next reset; your in-app usage (recipes, pantry, calendar) is never affected by plan limits.</P>
        <P><strong>Failed payments:</strong> If a payment fails, we will notify you and attempt to retry. If payment cannot be collected, your account may be downgraded to the free plan.</P>
      </Section>

      <Section id="ip" title="8. Intellectual property">
        <P>The CoPantry name, logo, and the software comprising the Service are owned by or licensed to CoPantry and are protected by applicable intellectual property laws. These Terms do not grant you any rights to use our trademarks, logos, or branding.</P>
        <P>We respect intellectual property rights. If you believe that content on the Service infringes your copyright, please contact us at info@copantry.com with sufficient detail for us to investigate.</P>
      </Section>

      <Section id="disclaimers" title="9. Disclaimers">
        <P><strong>The Service is provided "as is" and "as available"</strong>, without warranties of any kind, either express or implied, including but not limited to implied warranties of merchantability, fitness for a particular purpose, or non-infringement.</P>
        <P><strong>AI-generated content:</strong> AI-assisted recipe parsing and suggestions are provided for convenience only. The output may contain errors, inaccuracies, or omissions. You are responsible for verifying the accuracy of AI-generated content, particularly regarding ingredients, quantities, allergens, and cooking instructions.</P>
        <P><strong>Nutritional and health information:</strong> CoPantry does not provide nutritional analysis, dietary advice, or medical guidance. Do not rely on the Service for medical or health-related decisions.</P>
        <P><strong>Third-party links and content:</strong> The Service may allow you to import recipes from third-party websites. CoPantry is not responsible for the accuracy, safety, or legality of third-party content.</P>
      </Section>

      <Section id="liability" title="10. Limitation of liability">
        <P>To the fullest extent permitted by applicable law, CoPantry shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of data, loss of profits, or service interruption, arising from or related to your use of the Service.</P>
        <P>CoPantry's total liability to you for any claim arising under these Terms shall not exceed the greater of (a) the total fees paid by you to CoPantry in the three months preceding the claim, or (b) £50.</P>
        <P>Nothing in these Terms limits or excludes liability for death or personal injury caused by our negligence, fraud or fraudulent misrepresentation, or any other liability that cannot be limited or excluded by applicable law.</P>
      </Section>

      <Section id="termination" title="11. Termination">
        <P>You may stop using the Service and delete your account at any time via Settings → Account.</P>
        <P>We may suspend or terminate your access to the Service if you materially breach these Terms, if we are required to do so by law, or if we discontinue the Service. Where possible, we will give reasonable notice before termination.</P>
        <P>Upon termination, your right to use the Service ends immediately. Sections that by their nature should survive termination (including sections 8, 9, 10, and 12) will continue to apply.</P>
      </Section>

      <Section id="governing-law" title="12. Governing law and disputes">
        <P>These Terms are governed by the laws of England and Wales. Any dispute arising from or related to these Terms or the Service shall be subject to the exclusive jurisdiction of the courts of England and Wales, unless mandatory consumer protection laws in your country of residence require otherwise.</P>
        <P>Before initiating formal proceedings, we encourage you to contact us first so we can try to resolve the issue informally.</P>
      </Section>

      <Section id="changes" title="13. Changes to these Terms">
        <P>We may update these Terms from time to time. We will notify you of material changes by email and by posting the updated Terms on this page with a new "Last updated" date. If you continue to use the Service after the changes take effect, you accept the revised Terms. If you do not accept the changes, you should stop using the Service and delete your account.</P>
      </Section>

      <Section id="contact" title="14. Contact">
        <P>
          For questions about these Terms:{' '}
          <button
            onClick={() => { const p = ['info', 'copantry.com']; window.location.href = `mailto:${p[0]}@${p[1]}` }}
            className="text-orange-600 font-semibold underline cursor-pointer"
          >
            info@copantry.com
          </button>
        </P>
      </Section>

    </div>
  )
}
