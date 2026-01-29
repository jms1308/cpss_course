import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="w-full bg-card overflow-hidden pt-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 items-center pb-20 lg:pb-28">
          <div className="flex flex-col justify-center items-center lg:items-start lg:pl-16 space-y-8 animate-in fade-in slide-in-from-left-12 duration-1000 text-center lg:text-left">
            <div className="font-headline font-bold leading-none tracking-tight">
                <span className="text-7xl md:text-8xl text-accent">CPSS</span>
                <span className="block text-3xl md:text-4xl mt-2">Exam Preparation Course</span>
            </div>
            <p className="text-lg md:text-xl text-muted-foreground max-w-md mx-auto lg:mx-0">
              Professional course based on AAOIFI Shari’ah Standards
            </p>
            <div className="flex gap-4 justify-center lg:justify-start">
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 px-4 text-xs sm:px-8 sm:text-sm" asChild>
                <Link href="#register">Register Now</Link>
              </Button>
              <Button size="lg" variant="outline" className="px-4 text-xs sm:px-8 sm:text-sm" asChild>
                <Link href="#schedule">View Course Program</Link>
              </Button>
            </div>
          </div>
          <div className="flex justify-center items-center animate-in fade-in slide-in-from-right-12 duration-1000 text-foreground">
            <Image
                src="https://i.postimg.cc/FHRYwpX6/Screenshot-2026-01-29-at-00-12-59.png"
                alt="Partner logos"
                width={450}
                height={40}
                className="rounded-lg shadow-2xl object-contain max-w-[200px] sm:max-w-[240px] lg:max-w-[350px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
