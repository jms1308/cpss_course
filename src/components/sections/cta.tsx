'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useToast } from "@/hooks/use-toast";

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';

const formSchema = z.object({
  name: z.string().min(2, {
    message: 'Ism kamida 2 belgidan iborat boʻlishi kerak.',
  }),
  phone: z.string().min(9, {
    message: 'Telefon raqami kamida 9 belgidan iborat boʻlishi kerak.',
  }),
  email: z.string().email({
    message: 'Yaroqli email manzilini kiriting.',
  }),
});

type FormValues = z.infer<typeof formSchema>;

const Cta = () => {
  const { toast } = useToast();
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      phone: '',
      email: '',
    },
  });

  const onSubmit = (values: FormValues) => {
    console.log(values);
    toast({
      title: "Muvaffaqiyatli roʻyxatdan oʻtdingiz!",
      description: "Tez orada siz bilan bogʻlanamiz.",
    });
    form.reset();
  };

  return (
    <section
      className="py-20 md:py-28 animate-in fade-in slide-in-from-bottom-8 duration-1000"
      style={{ animationDelay: '900ms' }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="max-w-2xl mx-auto shadow-xl bg-card">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl md:text-4xl font-bold font-headline">
              Ro'yxatdan o'tish
            </CardTitle>
            <CardDescription className="mt-2 text-lg text-muted-foreground">
              Kursga yozilish uchun maʼlumotlaringizni qoldiring.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Ism</FormLabel>
                      <FormControl>
                        <Input placeholder="Ismingizni kiriting" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Telefon raqam</FormLabel>
                      <FormControl>
                        <Input placeholder="+998 XX XXX XX XX" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="email@example.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" size="lg" className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                  Yuborish
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Cta;
