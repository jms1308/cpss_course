import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import Hero from '@/components/sections/hero';
import Trainers from '@/components/sections/trainers';
import CourseDetails from '@/components/sections/course-details';
import Schedule from '@/components/sections/schedule';
import Cta from '@/components/sections/cta';
import AiSuggester from '@/components/sections/ai-suggester';

export default function Home() {
  return (
    <div className="flex min-h-dvh flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <Trainers />
        <CourseDetails />
        <Schedule />
        <Cta />
        <AiSuggester />
      </main>
      <Footer />
    </div>
  );
}
