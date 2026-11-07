import type { Metadata } from 'next';
import Matcha from '@/components/Matcha';
import PageHeader from '@/components/PageHeader';
import { MATCHA_EYEBROW, MATCHA_HEADING } from '@/content/matcha';

export const metadata: Metadata = {
  title: 'our matcha',
  description:
    'our matcha comes from one family farm in uji, stone-ground in small batches and whisked when you order it.',
};

export default function OurMatchaPage() {
  return (
    <>
      <PageHeader eyebrow={MATCHA_EYEBROW} title={MATCHA_HEADING} />
      <Matcha />
    </>
  );
}
