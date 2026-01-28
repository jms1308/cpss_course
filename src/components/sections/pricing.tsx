import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Pricing = () => {
  return (
    <section className="py-20 md:py-28 animate-in fade-in slide-in-from-bottom-8 duration-1000" style={{ animationDelay: '500ms' }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-center">
        <Card className="w-full max-w-md text-center shadow-2xl rounded-xl border-2 border-accent transform hover:scale-105 transition-transform duration-300">
          <CardHeader className="p-8">
            <CardTitle className="text-3xl font-bold text-accent">Course Fee</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6 px-8 pb-8">
            <p className="text-6xl font-bold font-headline">$350</p>
            <Button size="lg" className="w-full bg-accent text-accent-foreground hover:bg-accent/90 text-lg py-6">
              Enroll Now
            </Button>
            <CardDescription className="text-xs">
              Fee based on Central Bank exchange rate on payment date
            </CardDescription>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Pricing;
