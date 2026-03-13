'use server';

import WaitlistWelcomeEmail from '@/emails/waitlist-welcome';
import { createClient } from '@supabase/supabase-js';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY!);

export async function addToWaitlist(formData: FormData) {
  const email = formData.get('email') as string;

  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SECRET_KEY!
  );

  try {
    const { error: dbError } = await supabase
      .from('waitlist')
      .insert({ email });

    if (dbError) {
      if (dbError.code === '23505') {
        return { error: 'Already on the waitlist!' };
      }
      throw dbError;
    }

    await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL!,
      to: email,
      subject: 'Welcome to Domorang Waitlist!',
      react: WaitlistWelcomeEmail({ email }),
    });

    return { success: true };
  } catch (error) {
    console.error(error);
    return { error: 'Something went wrong' };
  }
}
