'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useToast } from "@/hooks/use-toast";
import { registerUser } from '@/app/actions';

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
    message: 'Name must be at least 2 characters.',
  }),
  phone: z.string().min(9, {
    message: 'Phone number must be at least 9 characters.',
  }),
  email: z.string().email({
    message: 'Please enter a valid email address.',
  }),
});

type FormValues = z.infer<typeof formSchema>;

const Cta = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      phone: '',
      email: '',
    },
  });

  const onSubmit = async (values: FormValues) => {
    setIsSubmitting(true);
    try {
      const result = await registerUser(values);

      if (result.success) {
        toast({
          title: "Registration Successful!",
          description: "We will contact you shortly.",
        });
        form.reset();
      } else {
        toast({
          variant: "destructive",
          title: "Registration failed.",
          description: result.message || "Could not submit your registration. Please try again.",
        });
      }
    } catch (error) {
      console.error('Submission error:', error);
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: "There was a problem with your request.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="register"
      className="py-20 md:py-28 bg-card animate-in fade-in slide-in-from-bottom-8 duration-1000"
      style={{ animationDelay: '800ms' }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="max-w-2xl mx-auto shadow-xl bg-card">
          <CardHeader className="text-center items-center">
            <div className="inline-block bg-accent text-accent-foreground font-bold text-2xl py-3 px-8 -skew-x-12">
                <h2 className="skew-x-12 tracking-wide">REGISTER NOW</h2>
            </div>
            <CardDescription className="pt-2 text-lg text-muted-foreground">
              Leave your details to enroll in the course.
            </CardDescription>
          </CardHeader>
          <CardContent className="px-4 sm:px-6">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter your name" {...field} />
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
                      <FormLabel>Phone Number</FormLabel>
                      <FormControl>
                        <Input placeholder="Your phone number" {...field} />
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
                <Button type="submit" size="lg" className="w-full bg-accent text-accent-foreground hover:bg-accent/90" disabled={isSubmitting}>
                  {isSubmitting ? 'Submitting...' : 'Submit'}
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
