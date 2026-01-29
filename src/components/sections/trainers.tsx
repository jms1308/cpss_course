import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { CheckCircle2 } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const trainersData = [
  {
    id: 'trainer-yousuf',
    name: 'Dr. Mufti Yousuf Sultan (CSAA)',
    description: [
      'International expert in Islamic finance and Shari’ah advisory',
      'Member of Shari’ah boards including Bangladesh Central Bank',
      'Official AAOIFI trainer and working group member',
      'Holds MSc and PhD in Islamic Finance',
      'Certified by AAOIFI (CSAA) and Ethica (CIFE)',
    ],
  },
  {
    id: 'trainer-mishal',
    name: 'Muhammad Mishal (CSAA)',
    description: [
      'Islamic finance and AAOIFI Shari’ah standards specialist',
      'Shari’ah advisor registered in Malaysia',
      'Holds degrees from IIUM and INCEIF',
      'Experience across Malaysia, Middle East, Africa, Europe, USA',
      'Partner and Director at ADL Advisory',
    ],
  },
];

const Trainers = () => {
  return (
    <section className="py-20 md:py-28 animate-in fade-in slide-in-from-bottom-8 duration-1000" style={{ animationDelay: '600ms' }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
            <div className="inline-block bg-accent text-accent-foreground font-bold text-2xl py-3 px-8 -skew-x-12">
                <h2 className="skew-x-12 tracking-wide">EXPERTS</h2>
            </div>
          <p className="text-lg text-muted-foreground mt-4">Learn from the experienced in the industry.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {trainersData.map((trainer) => {
            const trainerImage = PlaceHolderImages.find(p => p.id === trainer.id);
            return (
              <Card key={trainer.name} className="shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg overflow-hidden">
                <CardHeader className="flex flex-col sm:flex-row items-center gap-6 p-6">
                  {trainerImage && (
                     <Image
                      src={trainerImage.imageUrl}
                      alt={trainerImage.description}
                      width={100}
                      height={100}
                      className="rounded-full border-4 border-accent"
                      data-ai-hint={trainerImage.imageHint}
                    />
                  )}
                  <div>
                    <CardTitle className="text-2xl font-bold">{trainer.name}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="p-6 pt-0">
                  <ul className="space-y-3">
                    {trainer.description.map((desc, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle2 className="w-5 h-5 text-accent/80 mr-3 mt-1 flex-shrink-0" />
                        <span className="text-muted-foreground">{desc}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  );
};

export default Trainers;
