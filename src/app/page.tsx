import ComingUp from '@/components/ComingUp';
import DoorwayHero from '@/components/DoorwayHero';
import Drinks from '@/components/Drinks';
import HostWithUs from '@/components/HostWithUs';
import IntroCircles from '@/components/IntroCircles';
import MotionRoot from '@/components/MotionRoot';
import Nav from '@/components/Nav';
import Statement from '@/components/Statement';
import Visit from '@/components/Visit';
import Moments from '@/components/moments/Moments';

export default function Home() {
  return (
    <>
      <MotionRoot />
      <Nav />
      <main>
        <DoorwayHero />
        <IntroCircles />
        <Statement />
        <Drinks />
        <Moments />
        <ComingUp />
        <HostWithUs />
      </main>
      <Visit />
    </>
  );
}
