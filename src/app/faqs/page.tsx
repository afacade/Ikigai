import type { Metadata } from 'next';
import Faqs from '@/components/Faqs';
import PageHeader from '@/components/PageHeader';
import { FAQ_EYEBROW, FAQ_HEADING } from '@/content/faqs';

export const metadata: Metadata = {
  title: 'faqs',
  description:
    'opening hours, reservations, milk, caffeine, dogs, the run club and the chess club — answered.',
};

export default function FaqsPage() {
  return (
    <>
      <PageHeader eyebrow={FAQ_EYEBROW} title={FAQ_HEADING} />
      <Faqs />
    </>
  );
}
