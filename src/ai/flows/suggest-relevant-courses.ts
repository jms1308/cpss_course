'use server';

/**
 * @fileOverview A course suggestion AI agent.
 *
 * - suggestRelevantCourses - A function that suggests relevant courses based on user input.
 * - SuggestRelevantCoursesInput - The input type for the suggestRelevantCourses function.
 * - SuggestRelevantCoursesOutput - The return type for the suggestRelevantCourses function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SuggestRelevantCoursesInputSchema = z.object({
  goals: z.string().describe('The goals of the prospective student.'),
  experience: z.string().describe('The experience level of the prospective student.'),
});
export type SuggestRelevantCoursesInput = z.infer<typeof SuggestRelevantCoursesInputSchema>;

const SuggestRelevantCoursesOutputSchema = z.object({
  suggestedCourses: z
    .string()
    .describe('A list of courses relevant to the prospective student.'),
});
export type SuggestRelevantCoursesOutput = z.infer<typeof SuggestRelevantCoursesOutputSchema>;

export async function suggestRelevantCourses(
  input: SuggestRelevantCoursesInput
): Promise<SuggestRelevantCoursesOutput> {
  return suggestRelevantCoursesFlow(input);
}

const prompt = ai.definePrompt({
  name: 'suggestRelevantCoursesPrompt',
  input: {schema: SuggestRelevantCoursesInputSchema},
  output: {schema: SuggestRelevantCoursesOutputSchema},
  prompt: `You are an expert academic advisor, skilled at matching student goals and experience levels to the perfect courses.

Based on the student's stated goals and experience, suggest the most relevant courses for them.

Goals: {{{goals}}}
Experience: {{{experience}}}

Respond using only the names of courses that would be relevant to the user, do not include any other text.`,
});

const suggestRelevantCoursesFlow = ai.defineFlow(
  {
    name: 'suggestRelevantCoursesFlow',
    inputSchema: SuggestRelevantCoursesInputSchema,
    outputSchema: SuggestRelevantCoursesOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
