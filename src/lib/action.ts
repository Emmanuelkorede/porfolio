 'use server';

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export type ContactFormState = {
  success: boolean;
  message?: string;
  errors?: {
    name?: string;
    email?: string;
    subject?: string;
    message?: string;
  };
};

export async function sendContactEmail(
  prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const name = (formData.get('name') as string)?.trim();
  const email = (formData.get('email') as string)?.trim();
  const subject = (formData.get('subject') as string)?.trim();
  const message = (formData.get('message') as string)?.trim();

  const errors: ContactFormState['errors'] = {};

  if (!name) errors.name = 'Name is required.';
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.email = 'A valid email address is required.';
  }
  if (!message) errors.message = 'Message is required.';

  if (Object.keys(errors).length > 0) {
    return {
      success: false,
      message: 'Please fill in all required fields.',
      errors,
    };
  }

  try {
    const { error } = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: ['emmanueljob2009@gmail.com'],
      replyTo: email,
      subject: `Portfolio: ${subject || 'New Contact Message'}`,
      text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject || 'N/A'}\n\nMessage:\n${message}`,
    });

    if (error) {
      return { success: false, message: error.message };
    }

    return {
      success: true,
      message: 'Message sent successfully! I will get back to you soon.',
    };
  } catch {
    return {
      success: false,
      message: 'Something went wrong. Please try again later.',
    };
  }
}