"use client";

import { useState, useTransition } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Loader2, Sparkles } from 'lucide-react';
import { getSuggestions } from '@/app/actions';

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  goals: z.string().min(10, { message: "Please describe your goals in at least 10 characters." }),
  experience: z.string().min(10, { message: "Please describe your experience in at least 10 characters." }),
});

type FormValues = z.infer<typeof formSchema>;

const AiSuggester = () => {
  const [isPending, startTransition] = useTransition();
  const [result, setResult] = useState<string | null>(null);
  const { toast } = useToast();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      goals: "",
      experience: "",
    },
  });

  const onSubmit = (values: FormValues) => {
    setResult(null);
    startTransition(async () => {
      const response = await getSuggestions(values);
      if (response.error) {
        toast({
          variant: "destructive",
          title: "An error occurred",
          description: response.error,
        });
      } else if (response.data) {
        setResult(response.data.suggestedCourses);
      }
    });
  };

  return (
    <section className="py-20 md:py-28 bg-card animate-in fade-in slide-in-from-bottom-8 duration-1000" style={{ animationDelay: '800ms' }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">Personalized Course Suggestions</h2>
          <p className="text-lg text-muted-foreground mt-2">Let our AI help you find the right path.</p>
        </div>
        <div className="max-w-3xl mx-auto">
          <Card className="shadow-lg rounded-lg">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)}>
                <CardHeader>
                  <CardTitle>Tell Us About Yourself</CardTitle>
                  <CardDescription>Our AI advisor will suggest relevant courses based on your profile.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <FormField
                    control={form.control}
                    name="goals"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Your Career Goals</FormLabel>
                        <FormControl>
                          <Textarea placeholder="e.g., I want to become a Shari'ah advisor for a major Islamic bank..." {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="experience"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Your Current Experience</FormLabel>
                        <FormControl>
                          <Textarea placeholder="e.g., I have 5 years of experience in conventional banking but new to Islamic finance..." {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </CardContent>
                <CardFooter>
                  <Button type="submit" disabled={isPending}>
                    {isPending ? (
                      <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Please wait</>
                    ) : (
                      <><Sparkles className="mr-2 h-4 w-4" /> Get Suggestions</>
                    )}
                  </Button>
                </CardFooter>
              </form>
            </Form>

            {isPending && (
              <div className="p-6 text-center">
                <Loader2 className="h-8 w-8 animate-spin text-accent mx-auto" />
                <p className="mt-4 text-muted-foreground">Our AI is thinking...</p>
              </div>
            )}

            {result && (
              <div className="p-6 border-t">
                <h3 className="text-xl font-semibold mb-4 flex items-center"><Sparkles className="mr-2 h-5 w-5 text-accent" /> AI Recommended Courses</h3>
                <Card className="bg-background p-4">
                  <p className="whitespace-pre-line">{result}</p>
                </Card>
              </div>
            )}
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AiSuggester;
