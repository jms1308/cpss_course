import { Button } from '@/components/ui/button';

const Cta = () => {
  return (
    <section className="py-20 md:py-28 animate-in fade-in slide-in-from-bottom-8 duration-1000" style={{ animationDelay: '900ms' }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-primary text-primary-foreground rounded-lg shadow-xl p-10 md:p-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">
            Start Your CPSS Journey Today
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-primary-foreground/80">
            Join a community of professionals dedicated to mastering AAOIFI Shari’ah Standards.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
              Enroll Now
            </Button>
            <Button size="lg" variant="secondary" className="bg-primary-foreground/10 hover:bg-primary-foreground/20 text-primary-foreground">
              Download Course Outline
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cta;
