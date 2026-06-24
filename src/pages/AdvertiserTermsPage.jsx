import { Section, Eyebrow } from "../components/ui";

const LAST_UPDATED = "1 June 2026";

export default function AdvertiserTermsPage() {
  return (
    <>
      <Section
        className="hero-gradient pt-16 pb-10 md:pt-20 md:pb-14"
        width="max-w-3xl"
      >
        <div className="text-center">
          <Eyebrow className="mb-3">Advertising</Eyebrow>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
            Advertiser Terms
          </h1>
          <p className="mt-4 text-gray-500">Last updated: {LAST_UPDATED}</p>
        </div>
      </Section>

      <Section className="py-12 md:py-16" width="max-w-2xl">
        <div className="blog-prose">
          <p>
            These Advertiser Terms govern business accounts and advertising on
            Copantry. They apply in addition to our general Terms of Service. By
            applying for a business account or running any campaign, you accept
            these terms.
          </p>

          <h2>Eligibility & approval</h2>
          <p>
            Business accounts are reviewed and approved by Copantry. You must
            provide accurate company and tax details and may only claim brands
            you are authorised to represent. We may decline, suspend or close an
            account for policy breach, payment failure or fraud.
          </p>

          <h2>Content review</h2>
          <p>
            Every ad creative and sponsored recipe is reviewed against our Ad
            Policy before serving. We may re-review on material changes, pause
            creatives, and remove content that breaches policy.
          </p>

          <h2>Billing</h2>
          <p>
            Amounts are stated in your account currency and billed via Stripe.
            Prepaid balances draw down as your campaigns deliver; invoiced
            accounts are billed within an agreed credit limit. Spend is
            reconciled daily from our billable analytics, which is the
            authoritative record for invoicing.
          </p>

          <h2>Tax</h2>
          <p>
            We supply digital B2B advertising services from the UK. UK customers
            are charged UK VAT; EU and other business customers with a verified
            VAT number are handled under the reverse charge (“customer to
            account for VAT”). Provide a valid VAT number to be treated as a
            business.
          </p>

          <h2>Refunds</h2>
          <ul>
            <li>
              Unspent prepaid balance is refundable on account closure, less
              processing fees, within the stated window.
            </li>
            <li>
              Delivered impressions and clicks are generally non-refundable,
              except verified invalid traffic, which we proactively credit.
            </li>
            <li>Service outages affecting delivery are credited pro-rata.</li>
            <li>
              Refunds are reviewed by Copantry and issued in the original
              currency. Chargebacks trigger suspension pending review.
            </li>
          </ul>

          <h2>Data & privacy</h2>
          <p>
            Targeting is contextual-first and respects user consent. We never
            sell personal data and never provide per-user data to advertisers.
            Reporting is aggregated with a k-anonymity floor. See our{" "}
            <a href="/privacy" className="text-orange-600 hover:underline">
              Privacy Policy
            </a>
            .
          </p>

          <h2>Liability & changes</h2>
          <p>
            We may update these terms; material changes will be notified.
            Continued use after an update constitutes acceptance.
          </p>
        </div>
      </Section>
    </>
  );
}
