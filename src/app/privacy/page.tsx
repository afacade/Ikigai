import type { Metadata } from 'next';
import LegalPage from '@/components/LegalPage';
import { SITE } from '@/content/site';

export const metadata: Metadata = {
  title: 'Privacy · ikigai',
  description: 'Privacy policy / Datenschutzerklärung for ikigai tea bar, Berlin.',
  robots: { index: false },
};

/**
 * PLACEHOLDER. A privacy policy is mandatory under Art. 13 GDPR. The sections
 * below are the ones this site actually needs once it goes live — hosting logs,
 * the newsletter, Google Fonts and the embedded links. Each has to be filled in
 * against the real stack and reviewed by the client's lawyer, in German.
 *
 * Two technical notes that affect what this page has to say:
 *  - Fonts are self-hosted by next/font at build time, so no visitor IP reaches
 *    Google when the site is loaded. Keep it that way and this page stays short.
 *  - The newsletter is not wired up yet. Whichever provider is chosen becomes a
 *    processor and needs a DPA plus a double opt-in.
 */
export default function PrivacyPage() {
  return (
    <LegalPage title="Privacy">
      <p className="t-caption text-wood">
        Placeholder — to be completed by the client before launch. Required by Art. 13 GDPR.
      </p>

      <h2>Controller</h2>
      <p>
        [Legal entity name]
        <br />
        {SITE.street}, {SITE.city}, Germany
        <br />
        <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
      </p>

      <h2>Hosting and server log files</h2>
      <p>
        This site is hosted by [hosting provider]. The provider stores access data (IP address,
        time of request, requested page, referrer, browser and operating system) in log files on
        the basis of our legitimate interest in a secure and stable service, Art. 6 (1) (f) GDPR.
        [Retention period.] A data processing agreement pursuant to Art. 28 GDPR is in place.
      </p>

      <h2>Fonts</h2>
      <p>
        The typefaces used here (Instrument Serif, Archivo, Shippori Mincho, IBM Plex Mono) are
        served from this site&rsquo;s own domain. No connection to Google&rsquo;s servers is made
        when you load a page, and no font request transmits your IP address to a third party.
      </p>

      <h2>Images</h2>
      <p>
        Photographs are currently loaded from images.pexels.com, which receives your IP address
        when an image is requested. [Remove this section once the client&rsquo;s own photography is
        served from this domain.]
      </p>

      <h2>Newsletter</h2>
      <p>
        If you subscribe, we process your email address to send you roughly one email a month
        about upcoming events, on the basis of your consent, Art. 6 (1) (a) GDPR. Consent is
        confirmed by double opt-in and can be withdrawn at any time via the unsubscribe link in
        every email or by writing to us. [Name the provider, the data stored and the retention
        period.]
      </p>

      <h2>Event inquiries by email</h2>
      <p>
        If you write to us about hosting an event, we process the data in your message to answer
        it, Art. 6 (1) (b) GDPR. [Retention period.]
      </p>

      <h2>External links</h2>
      <p>
        This site links to Instagram and Google Maps. Nothing is embedded, so no data is sent to
        either service until you follow a link; from that point their own privacy policies apply.
      </p>

      <h2>Your rights</h2>
      <p>
        You have the right to access, rectification, erasure, restriction of processing, data
        portability and objection, and the right to lodge a complaint with a supervisory
        authority — for Berlin, the Berliner Beauftragte für Datenschutz und Informationsfreiheit.
      </p>
    </LegalPage>
  );
}
