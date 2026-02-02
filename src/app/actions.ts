'use server';

import { z } from "zod";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  phone: z.string().min(9, {
    message: "Phone number must be at least 9 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
});

export async function registerUser(values: z.infer<typeof formSchema>) {
  try {
    const validatedData = formSchema.parse(values);

    const response = await fetch(
      "https://cpss.onrender.com/webhook/79446d2c-b088-4c5a-9189-038b04962778",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: validatedData.name,
          number: validatedData.phone,
          email: validatedData.email,
        }),
      }
    );

    if (response.ok) {
      return { success: true, message: "Registration Successful!" };
    } else {
      const errorText = await response.text();
      console.error("API Error:", errorText);
      return {
        success: false,
        message: "Registration failed. Please try again later.",
      };
    }
  } catch (error) {
    if (error instanceof z.ZodError) {
      return {
        success: false,
        message: "Invalid data provided. Please check your inputs.",
      };
    }
    console.error("Server action error:", error);
    return {
      success: false,
      message:
        "An unexpected error occurred on the server. Please try again later.",
    };
  }
}
