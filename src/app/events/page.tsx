import type { Metadata } from 'next';
import ComingUp from '@/components/ComingUp';
import PageHeader from '@/components/PageHeader';
import Moments from '@/components/moments/Moments';

export const metadata: Metadata = {
  title: 'events',
  description:
    'everything we have hosted, from workshops and run club to chess nights, pop-ups and bakery collabs, plus what is coming up next.',
};

export default function EventsPage() {
  return (
    <>
      <PageHeader
        eyebrow="the archive"
        title={'everything we\nhave hosted.'}
        lead="there is run club on sundays and chess on thursdays, with workshops, pop-ups and collabs in between. drag the files around, and click one to open it."
      />
      <Moments />
      <ComingUp />
    </>
  );
}
