'use client';

import { useState } from 'react';

type Status = 'idle' | 'submitting' | 'done' | 'error';

/**
 * Where a signup is sent. Set NEXT_PUBLIC_NEWSLETTER_ENDPOINT to the client's
 * email provider (Buttondown, Mailchimp, a form endpoint, an API route — any URL
 * that accepts `POST { email }` and answers 2xx on success). Until it is set,
 * subscribe() throws, so the form shows its error state instead of reporting a
 * success that never happened.
 */
const ENDPOINT = process.env.NEXT_PUBLIC_NEWSLETTER_ENDPOINT;

async function subscribe(email: string): Promise<void> {
  if (!ENDPOINT) {
    // A visible, honest failure beats a silent fake success: the form stays, the
    // error shows, and the address is never lost.
    throw new Error('newsletter endpoint is not configured');
  }
  const res = await fetch(ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email }),
  });
  if (!res.ok) throw new Error(`provider responded ${res.status}`);
}

/**
 * Underline-only field, text button, and one italic line in place of the form
 * on success. The success line only appears once the provider has accepted the
 * address; while the request is in flight the button reads "joining…" and is
 * disabled, and a rejected send keeps the form, shows an inline error, and lets
 * the visitor try again.
 */
export default function Newsletter() {
  const [status, setStatus] = useState<Status>('idle');

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === 'submitting') return;
    const email = new FormData(e.currentTarget).get('email');
    if (typeof email !== 'string' || !email) return;

    setStatus('submitting');
    try {
      await subscribe(email);
      setStatus('done');
    } catch (err) {
      // The real reason goes to the console for whoever wires the provider; the
      // visitor sees a plain, recoverable message.
      console.error('[newsletter] signup failed:', err);
      setStatus('error');
    }
  }

  const submitting = status === 'submitting';

  return (
    <div data-reveal className="mt-14 border-t border-[var(--hairline-cream)] pt-8">
      <div className="t-eyebrow">dates in your inbox</div>

      {status === 'done' ? (
        <div className="t-aside mt-4" role="status">
          see you at the next one.
        </div>
      ) : (
        <form
          onSubmit={onSubmit}
          aria-busy={submitting}
          className="newsletter-field mt-4 flex max-w-[460px] gap-3 border-b-[1.5px] border-matcha-deep"
        >
          <label htmlFor="newsletter-email" className="sr-only">
            your email address
          </label>
          <input
            id="newsletter-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            disabled={submitting}
            placeholder="your email"
            className="t-body min-w-0 flex-1 border-0 bg-transparent py-2.5 text-matcha-deep outline-none placeholder:text-field-placeholder disabled:opacity-60"
          />
          <button
            type="submit"
            disabled={submitting}
            className="t-button-label shrink-0 cursor-pointer disabled:cursor-default disabled:opacity-60"
          >
            {submitting ? 'joining…' : 'join →'}
          </button>
        </form>
      )}

      {status === 'error' ? (
        <p className="t-fine m-0 mt-3 text-terracotta" role="alert">
          that didn’t go through. please try again in a moment.
        </p>
      ) : (
        <p className="t-fine m-0 mt-3 text-matcha-text-2">
          we send one email a month and it is mostly dates.
        </p>
      )}
    </div>
  );
}
