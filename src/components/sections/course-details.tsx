import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { CalendarDays, Flag, MonitorPlay, CircleDollarSign } from 'lucide-react';

const CourseDetails = () => {
  const bookImage = PlaceHolderImages.find(p => p.id === 'book-mockup');

  const details = [
    {
      icon: <CalendarDays className="w-6 h-6 text-accent" />,
      label: 'Давомийлиги',
      value: '8 ҳафта (16 та дарс)',
    },
    {
      icon: <MonitorPlay className="w-6 h-6 text-accent" />,
      label: 'Курс формати',
      value: 'Инглиз тилида • Жонли онлайн дарслар',
    },
    {
      icon: <Flag className="w-6 h-6 text-accent" />,
      label: 'Бошланиш санаси',
      value: '8 февраль',
    },
  ];

  const benefits = [
    'Халқаро ва кўп йиллик тажрибали мутахассис устозлар',
    'Жонли савол-жавоб сессиялари (онлайн)',
    'Махсус ўқув материаллари',
  ];

  return (
    <section id="course-details" className="py-20 md:py-28 bg-background animate-in fade-in slide-in-from-bottom-8 duration-1000" style={{animationDelay: '400ms'}}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-10">
            <div className="inline-block bg-accent text-accent-foreground font-bold text-2xl py-3 px-8 -skew-x-12">
              <h2 className="skew-x-12 tracking-wide">КУРС КЎЛАМИ ВА БЮДЖЕТИ</h2>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4">Курс кимлар учун?</h3>
              <ul className="space-y-2 text-muted-foreground list-disc list-inside pl-2">
                <li>Ислом молияси мутахассислари;</li>
                <li>Банк ва молия соҳаси ходимлари;</li>
                <li>Талабалар ва тадқиқотчилар.</li>
              </ul>
            </div>
            
            <div className="space-y-4">
              {details.map((item, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="flex-shrink-0">{item.icon}</div>
                  <div className="flex items-center text-sm overflow-hidden rounded-md border border-border">
                    <span className="font-semibold px-4 py-2 bg-card ">{item.label}</span>
                    <span className="px-4 py-2 text-muted-foreground ">{item.value}</span>
                  </div>
                </div>
              ))}
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4">Афзалликлар:</h3>
              <ul className="space-y-2 text-muted-foreground list-disc list-inside pl-2">
                {benefits.map((benefit, i) => <li key={i}>{benefit};</li>)}
              </ul>
            </div>

            <div className="space-y-2">
                <div className="flex items-center gap-4">
                    <div className="flex-shrink-0"><CircleDollarSign className="w-8 h-8 text-accent" /></div>
                    <div className="flex items-center border-2 border-accent rounded-md overflow-hidden">
                        <span className="font-semibold px-4 py-2 bg-accent text-accent-foreground text-lg">Курс нархи:</span>
                        <span className="px-4 py-1 text-4xl font-bold">$350</span>
                    </div>
                </div>
                <p className="pl-12 text-xs text-muted-foreground">
                    Shartnoma kunidagi Markaziy Bank kursi boʻyicha
                </p>
            </div>
          </div>
          
          <div className="flex justify-center items-center animate-in fade-in slide-in-from-right-12 duration-1000" style={{animationDelay: '200ms'}}>
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

export default CourseDetails;
