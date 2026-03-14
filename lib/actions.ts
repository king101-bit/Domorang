'use server';
import { createClient } from '@/lib/supabase/server';
import { redirect } from 'next/navigation';
import { loginSchema, signupSchema } from '@/lib/validations/auth';

export type SignupState = {
  errors?: Record<string, string[]>;
  message?: string;
} | null;

export type LoginState = {
  errors?: Record<string, string[]>;
  message?: string;
} | null;

export async function login(
  prevState: LoginState,
  formData: FormData
): Promise<LoginState> {
  const parsed = loginSchema.safeParse({
    email: formData.get('email'),
    password: formData.get('password'),
  });

  if (!parsed.success) {
    return { errors: parsed.error.flatten().fieldErrors };
  }

  const supabase = await createClient();

  const { error } = await supabase.auth.signInWithPassword({
    email: parsed.data.email,
    password: parsed.data.password,
  });

  if (error) return { message: 'Invalid email or password. Please try again.' };

  redirect('/home');
}
export async function signup(
  prevState: SignupState,
  formData: FormData
): Promise<SignupState> {
  const supabase = await createClient();

  const parsed = signupSchema.safeParse({
    full_name: formData.get('full_name'),
    email: formData.get('email'),
    password: formData.get('password'),
    confirm_password: formData.get('confirm_password'),
    role: formData.get('role'),
    phone: formData.get('phone') || null,
  });

  if (!parsed.success) {
    return { errors: parsed.error.flatten().fieldErrors };
  }

  const { full_name, email, password, role, phone } = parsed.data;

  const { data: user, error: signUpError } = await supabase.auth.signUp({
    email,
    password,
    options: {
      emailRedirectTo: `${process.env.NEXT_PUBLIC_APP_URL}/auth/confirm`,
      data: { full_name, phone, role },
    },
  });

  if (signUpError) return { message: signUpError.message };
  if (!user.user) return { message: 'Signup failed, please try again' };

  redirect('/auth/verify-email');
}
