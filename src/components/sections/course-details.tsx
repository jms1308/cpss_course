import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { CalendarDays, Flag, MonitorPlay, CircleDollarSign } from 'lucide-react';

const CourseDetails = () => {
  const bookImage = PlaceHolderImages.find(p => p.id === 'standard-56');

  const details = [
    {
      icon: <CalendarDays className="w-6 h-6 text-accent" />,
      label: 'Duration',
      value: '8 weeks (16 sessions)',
    },
    {
      icon: <MonitorPlay className="w-6 h-6 text-accent" />,
      label: 'Course Format',
      value: 'English • Live online classes',
    },
    {
      icon: <Flag className="w-6 h-6 text-accent" />,
      label: 'Start Date',
      value: 'February 8th',
    },
  ];

  const benefits = [
    'International and highly experienced expert instructors',
    'Live Q&A sessions (online)',
    'Special training materials',
  ];

  return (
    <section id="course-details" className="py-20 md:py-28 bg-card animate-in fade-in slide-in-from-bottom-8 duration-1000" style={{animationDelay: '400ms'}}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-10">
            <div className="inline-block bg-accent text-accent-foreground font-bold text-2xl py-3 px-8 -skew-x-12">
              <h2 className="skew-x-12 tracking-wide">COURSE SCOPE AND BUDGET</h2>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4">Who is this course for?</h3>
              <ul className="space-y-2 text-muted-foreground list-disc list-inside pl-2">
                <li>Islamic finance specialists;</li>
                <li>Banking and finance employees;</li>
                <li>Students and researchers.</li>
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
              <h3 className="text-2xl font-bold mb-4">Benefits:</h3>
              <ul className="space-y-2 text-muted-foreground list-disc list-inside pl-2">
                {benefits.map((benefit, i) => <li key={i}>{benefit};</li>)}
              </ul>
            </div>

            <div className="space-y-2">
                <div className="flex items-center gap-4">
                    <div className="flex-shrink-0"><CircleDollarSign className="w-8 h-8 text-accent" /></div>
                    <div className="flex items-center border-2 border-accent rounded-md overflow-hidden">
                        <span className="font-semibold px-4 py-2 bg-accent text-accent-foreground text-lg">Course price:</span>
                        <span className="px-4 py-1 text-4xl font-bold">$350</span>
                    </div>
                </div>
                <p className="pl-12 text-xs text-muted-foreground">
                    Based on the Central Bank exchange rate on the day of the contract
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
