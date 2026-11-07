import type { Metadata } from 'next';
import BookUs from '@/components/BookUs';
import PageHeader from '@/components/PageHeader';
import { BOOKING_EYEBROW } from '@/content/booking';

export const metadata: Metadata = {
  title: 'book us',
  description:
    'you can book private matcha workshops, brand pop-ups, food collabs and private gatherings at ikigai tea bar in berlin mitte.',
};

export default function BookUsPage() {
  return (
    <>
      <PageHeader eyebrow={BOOKING_EYEBROW} title={'take the room\nfor an evening.'} tone="espresso" />
      <BookUs />
    </>
  );
}
