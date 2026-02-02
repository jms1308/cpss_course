'use client';

import { useEffect } from 'react';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import Hero from '@/components/sections/hero';
import Trainers from '@/components/sections/trainers';
import CourseDetails from '@/components/sections/course-details';
import Schedule from '@/components/sections/schedule';
import Cta from '@/components/sections/cta';

export default function Home() {
  useEffect(() => {
    const sendVisitInfo = async () => {
      try {
        await fetch(
          'https://cpss.onrender.com/webhook/79446d2c-b088-4c5a-9189-038b04962778',
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              type: 'visit',
              deviceInfo: navigator.userAgent,
              visitTime: new Date().toISOString(),
            }),
          }
        );
      } catch (error) {
        // Silently fail to avoid console errors for the user
      }
    };

    sendVisitInfo();
  }, []);

  return (
    <div className="flex min-h-dvh flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <Trainers />
        <CourseDetails />
        <Schedule />
        <Cta />
      </main>
      <Footer />
    </div>
  );
}
