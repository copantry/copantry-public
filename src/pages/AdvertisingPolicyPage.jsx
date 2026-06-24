import { Section, Eyebrow } from "../components/ui";

const LAST_UPDATED = "1 June 2026";

export default function AdvertisingPolicyPage() {
  return (
    <>
      <Section
        className="hero-gradient pt-16 pb-10 md:pt-20 md:pb-14"
        width="max-w-3xl"
      >
        <div className="text-center">
          <Eyebrow className="mb-3">Advertising</Eyebrow>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
            Ad Policy
          </h1>
          <p className="mt-4 text-gray-500">Last updated: {LAST_UPDATED}</p>
        </div>
      </Section>

      <Section className="py-12 md:py-16" width="max-w-2xl">
        <div className="blog-prose">
          <p>
            This Ad Policy is the rubric our reviewers apply to every ad
            creative and sponsored recipe on Copantry. It exists to keep
            commercial content honest, safe and clearly labelled — for the
            benefit of the cooks who use Copantry and the brands who advertise
            on it.
          </p>

          <h2>Labelling</h2>
          <p>
            Every commercial surface is labelled. Sponsored recipes carry
            “Recipe by «Brand»” and a “Sponsored” chip; promoted brands are
            marked “Sponsored”; display units are marked “Ad”. Labels are always
            visible and never disguised as organic content, consistent with UK
            ASA/CAP and EU UCPD guidance.
          </p>

          <h2>Prohibited content</h2>
          <ul>
            <li>
              Marketing alcohol to minors, or any content targeting under-16s.
            </li>
            <li>Unsubstantiated health, medical or weight-loss claims.</li>
            <li>Denigration of identifiable competitors.</li>
            <li>
              Unsafe cooking practices, or content that misleads about
              ingredients or allergens.
            </li>
            <li>
              Illegal products, hate, harassment, or sexually explicit material.
            </li>
          </ul>

          <h2>Regulated categories</h2>
          <p>
            Alcohol, health claims, weight-management and infant-food content
            are permitted only where lawful and always require human review.
            They may never auto-publish.
          </p>

          <h2>Quality bar</h2>
          <p>
            Sponsored recipes must meet the same structural quality as organic
            recipes: real ingredients, real steps, a real image and a valid
            language. Thin or spammy submissions are rejected.
          </p>

          <h2>Destinations</h2>
          <p>
            Landing pages must be safe, public web pages that match the reviewed
            creative. We continuously health-check approved destinations and
            automatically pause any creative whose link breaks or redirects off
            its approved domain.
          </p>

          <h2>Enforcement</h2>
          <p>
            Violations may result in rejection, pausing, loss of
            trusted-advertiser status, or suspension of the business account.
            Decisions are recorded for audit.
          </p>
        </div>
      </Section>
    </>
  );
}
