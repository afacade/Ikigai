'use client';

import { useState } from 'react';

/**
 * Underline-only field, text button, and one italic line in place of the form
 * on submit.
 *
 * Nothing is sent yet: wire `onSubmit` to the client's email provider. The
 * optimistic swap below is the designed behaviour, so keep it and show an error
 * only if the provider rejects the address.
 */
export default function Newsletter() {
  const [subscribed, setSubscribed] = useState(false);

  return (
    <div data-reveal className="mt-14 border-t border-[var(--hairline-cream)] pt-8">
      <div className="t-eyebrow">Stay in the loop</div>

      {subscribed ? (
        <div className="t-aside mt-4" role="status">
          See you at the next one.
        </div>
      ) : (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            // TODO: POST to the client's email provider before swapping.
            setSubscribed(true);
          }}
          className="mt-4 flex max-w-[460px] gap-3 border-b border-matcha-deep"
        >
          <label htmlFor="newsletter-email" className="sr-only">
            Your email address
          </label>
          <input
            id="newsletter-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="your email"
            className="t-body min-w-0 flex-1 border-0 bg-transparent py-2.5 text-matcha-deep outline-none placeholder:text-field-placeholder"
          />
          <button type="submit" className="t-button-label cursor-pointer">
            Join →
          </button>
        </form>
      )}

      <p className="t-fine m-0 mt-3 text-matcha-text-2">One email a month. Events first.</p>
    </div>
  );
}
