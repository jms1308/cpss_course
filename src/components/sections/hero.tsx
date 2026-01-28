import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const Hero = () => {
  const bookImage = PlaceHolderImages.find(p => p.id === 'book-mockup');

  return (
    <section className="w-full bg-card overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 items-center py-20 md:py-32">
          <div className="space-y-6 animate-in fade-in slide-in-from-left-12 duration-1000">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-headline tracking-tight">
              CPSS Exam Preparation Course
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Professional training based on AAOIFI Shari’ah Standards
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                Register Now
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="#schedule">View Course Program</Link>
              </Button>
            </div>
          </div>
          <div className="flex justify-center items-center animate-in fade-in slide-in-from-right-12 duration-1000">
            {bookImage && (
              <Image
                src={bookImage.imageUrl}
                alt={bookImage.description}
                width={500}
                height={600}
                className="rounded-lg shadow-2xl transform transition-transform duration-500 hover:scale-105"
                data-ai-hint={bookImage.imageHint}
                priority
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
