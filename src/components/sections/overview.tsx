import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, Clock } from 'lucide-react';

const overviewItems = [
  {
    icon: <Users className="w-8 h-8 text-accent" />,
    title: 'Who is this course for?',
    details: [
      'Islamic finance professionals',
      'Banking and finance practitioners',
      'Students and researchers',
    ],
  },
  {
    icon: <Clock className="w-8 h-8 text-accent" />,
    title: 'Duration',
    details: ['8 weeks', '16 sessions'],
  },
];

const Overview = () => {
  return (
    <section className="py-20 md:py-28 animate-in fade-in slide-in-from-bottom-8 duration-1000" style={{ animationDelay: '200ms' }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">Course Scope and Fees</h2>
          <p className="text-lg text-muted-foreground mt-2">Key details about the CPSS course.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {overviewItems.map((item, index) => (
            <Card key={index} className="text-center transition-transform transform hover:-translate-y-2 duration-300 shadow-lg hover:shadow-xl rounded-lg">
              <CardHeader className="items-center">
                <div className="bg-accent/10 p-4 rounded-full">
                  {item.icon}
                </div>
                <CardTitle className="mt-4 !text-xl font-semibold">{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-1 text-muted-foreground">
                  {item.details.map((detail, i) => (
                    <li key={i}>{detail}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Overview;
