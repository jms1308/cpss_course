import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const Hero = () => {
  const bookImage = PlaceHolderImages.find(p => p.id === 'book-mockup');

  return (
    <section className="w-full bg-card overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 items-center pt-12 pb-20 md:py-28">
          <div className="space-y-8 animate-in fade-in slide-in-from-left-12 duration-1000 text-center md:text-left">
            <div className="font-headline font-bold leading-none tracking-tight">
                <span className="text-7xl md:text-8xl text-accent">CPSS</span>
                <span className="block text-3xl md:text-4xl mt-2">Exam Preparation Course</span>
            </div>
            <p className="text-lg md:text-xl text-muted-foreground max-w-md mx-auto md:mx-0">
              Professional training based on AAOIFI Shari’ah Standards
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
            {bookImage && (
                <Image
                src={bookImage.imageUrl}
                alt={bookImage.description}
                width={450}
                height={540}
                className="rounded-lg shadow-2xl"
                data-ai-hint={bookImage.imageHint}
                />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
