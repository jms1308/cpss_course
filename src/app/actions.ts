'use server';

import { suggestRelevantCourses } from '@/ai/flows/suggest-relevant-courses';
import type { SuggestRelevantCoursesInput } from '@/ai/flows/suggest-relevant-courses';

export async function getSuggestions(input: SuggestRelevantCoursesInput) {
  try {
    const data = await suggestRelevantCourses(input);
    return { data };
  } catch (e: any) {
    console.error(e);
    return { error: e.message || 'An unexpected error occurred.' };
  }
}
