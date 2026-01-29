import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="w-full bg-card overflow-hidden pt-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 items-center pb-20 md:pb-28">
          <div className="flex flex-col justify-center md:justify-start items-center md:items-start space-y-8 animate-in fade-in slide-in-from-left-12 duration-1000">
            <div className="font-headline font-bold leading-none tracking-tight text-center md:text-left">
                <span className="text-7xl md:text-8xl text-accent">CPSS</span>
                <span className="block text-3xl md:text-4xl mt-2">Exam Preparation Course</span>
            </div>
            <p className="text-lg md:text-xl text-muted-foreground max-w-md mx-auto md:mx-0 text-center md:text-left">
              Professional course based on AAOIFI Shari’ah Standards
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90" asChild>
                <Link href="#register">Register Now</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="#schedule">View Course Program</Link>
              </Button>
            </div>
          </div>
          <div className="flex justify-center items-center animate-in fade-in slide-in-from-right-12 duration-1000 text-foreground">
            <Image
                src="https://i.postimg.cc/FHRYwpX6/Screenshot-2026-01-29-at-00-12-59.png"
                alt="Partner logos"
                width={600}
                height={40}
                className="rounded-lg shadow-2xl object-contain max-w-[300px] md:max-w-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
