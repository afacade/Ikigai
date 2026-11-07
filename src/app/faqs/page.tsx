import type { Metadata } from 'next';
import Faqs from '@/components/Faqs';
import PageHeader from '@/components/PageHeader';
import { FAQ_EYEBROW, FAQ_HEADING } from '@/content/faqs';

export const metadata: Metadata = {
  title: 'faqs',
  description:
    'we have answered the usual questions about opening hours, reservations, milk, caffeine, dogs and both clubs.',
};

export default function FaqsPage() {
  return (
    <>
      <PageHeader eyebrow={FAQ_EYEBROW} title={FAQ_HEADING} />
      <Faqs />
    </>
  );
}
