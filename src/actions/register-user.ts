'use server';

import { z } from 'zod';

const registerSchema = z.object({
  username: z
    .string()
    .min(3, {
      message: 'Username must be between 3 and 20 characters',
    })
    .max(20, {
      message: 'Username must be between 3 and 20 characters',
    }),
  email: z.string().email({ message: 'Please enter a valid email address' }),
  password: z
    .string()
    .min(6, {
      message: 'Password must be between 6 and 100 characters',
    })
    .max(100, {
      message: 'Password must be between 6 and 100 characters',
    }),
});

export const registerUserAction = async (
  prevState: any,
  formData: FormData,
) => {
  const { username, email, password } = Object.fromEntries(formData);

  const validatedFields = registerSchema.safeParse({
    username,
    email,
    password,
  });

  if (!validatedFields.success) {
    return {
      ...prevState,
      zodErrors: validatedFields.error.flatten().fieldErrors,
      strapiErrors: null,
      message: 'Missing fields. Failed to register.',
    };
  }

  return {
    ...prevState,
    data: 'ok',
  };
};
