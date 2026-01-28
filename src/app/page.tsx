import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import Hero from '@/components/sections/hero';
import Overview from '@/components/sections/overview';
import Benefits from '@/components/sections/benefits';
import Pricing from '@/components/sections/pricing';
import Trainers from '@/components/sections/trainers';
import Schedule from '@/components/sections/schedule';
import Cta from '@/components/sections/cta';

export default function Home() {
  return (
    <div className="flex min-h-dvh flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <Overview />
        <Trainers />
        <Benefits />
        <Pricing />
        <Schedule />
        <Cta />
      </main>
      <Footer />
    </div>
  );
}
