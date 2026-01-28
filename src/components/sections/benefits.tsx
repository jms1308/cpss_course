import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle2 } from 'lucide-react';

const benefits = [
  'Internationally experienced trainers',
  'Live Q&A sessions (online)',
  'Exclusive study materials',
  'Practical understanding of AAOIFI Shari’ah Standards',
  'CPSS exam-oriented approach',
];

const Benefits = () => {
  return (
    <section className="pt-20 md:pt-28 pb-10 md:pb-16 bg-card animate-in fade-in slide-in-from-bottom-8 duration-1000" style={{ animationDelay: '400ms' }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">Why Choose This Course?</h2>
          <p className="text-lg text-muted-foreground mt-2">Unlock your potential with our expert-led program.</p>
        </div>
        <div className="max-w-4xl mx-auto">
          <Card className="shadow-lg rounded-lg">
            <CardContent className="p-8 md:p-10">
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle2 className="w-6 h-6 text-accent mr-4 mt-1 flex-shrink-0" />
                    <span className="text-lg text-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
