import type { Metadata } from 'next';
import LegalPage from '@/components/LegalPage';
import { SITE } from '@/content/site';

export const metadata: Metadata = {
  title: 'Imprint · ikigai',
  description: 'Imprint / Impressum for ikigai tea bar, Berlin.',
  robots: { index: false },
};

/**
 * PLACEHOLDER. An Impressum is mandatory under § 5 DDG (formerly § 5 TMG) and
 * § 18 MStV and must be complete and reachable in two clicks. Everything in
 * square brackets has to come from the client, and the finished text should be
 * reviewed by their lawyer — and provided in German, since that is the language
 * of the audience the obligation protects.
 */
export default function ImprintPage() {
  return (
    <LegalPage title="Imprint">
      <p className="t-caption text-wood">
        Placeholder — to be completed by the client before launch. Required by § 5 DDG and § 18
        MStV.
      </p>

      <h2>Information pursuant to § 5 DDG</h2>
      <p>
        [Legal entity name, e.g. ikigai Tea Bar GmbH]
        <br />
        {SITE.street}
        <br />
        {SITE.city}
        <br />
        Germany
      </p>

      <h2>Represented by</h2>
      <p>[Name of the managing director / owner]</p>

      <h2>Contact</h2>
      <p>
        Phone: [+49 …]
        <br />
        Email: <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
      </p>

      <h2>Register entry</h2>
      <p>
        Register court: [Amtsgericht Charlottenburg]
        <br />
        Registration number: [HRB …]
      </p>

      <h2>VAT identification number</h2>
      <p>VAT ID pursuant to § 27 a UStG: [DE …]</p>

      <h2>Responsible for editorial content pursuant to § 18 (2) MStV</h2>
      <p>
        [Name]
        <br />
        [Address, if different from above]
      </p>

      <h2>EU dispute resolution</h2>
      <p>
        We are neither obliged nor willing to take part in dispute resolution proceedings before a
        consumer arbitration board. [Confirm or replace with the client&rsquo;s position.]
      </p>
    </LegalPage>
  );
}
