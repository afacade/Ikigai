import type { Metadata } from 'next';
import ComingUp from '@/components/ComingUp';
import PageHeader from '@/components/PageHeader';
import Moments from '@/components/moments/Moments';

export const metadata: Metadata = {
  title: 'events',
  description:
    'workshops, run club, chess nights, pop-ups and bakery collabs — everything we have hosted, and what is coming up.',
};

export default function EventsPage() {
  return (
    <>
      <PageHeader
        eyebrow="the archive"
        title={'everything we\nhave hosted.'}
        lead="run club on sundays, chess on thursdays, and the workshops, pop-ups and collabs in between. drag the files around — they open."
      />
      <Moments />
      <ComingUp />
    </>
  );
}
