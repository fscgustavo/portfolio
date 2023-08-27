'use server';

import { EmailTemplate } from '@/components/email-template';
import { SendEmailProps } from '@/contract/send-email';
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.NEXT_RESEND_API_KEY);

export async function sendEmail(body: SendEmailProps) {
  try {
    const data = await resend.emails.send({
      from: 'Portfolio <gus.fonnseca@gmail.com>',
      to: ['gus.fonnseca@gmail.com'],
      reply_to: 'gus.fonnseca@gmail.com',
      subject: `Portfolio - New message from ${body.name}`,
      react: EmailTemplate(body),
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
