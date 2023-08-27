'use client';

import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { SendEmailProps, SendEmailSchema } from '@/contract/send-email';
import { FormProvider, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { sendEmail } from '../actions';
import { useState, useTransition } from 'react';

export default function Contact() {
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<SendEmailProps>({
    resolver: zodResolver(SendEmailSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  const onSubmit = form.handleSubmit(async (data) => {
    try {
      setIsLoading(true);

      await sendEmail(data);

      form.reset();
    } catch (error) {
      setIsLoading(false);
    }
  });

  return (
    <div>
      <h1 className="text-5xl font-semibold text-white">Contact</h1>
      <p className="mt-6 leading-7 text-white">
        Do not hesitate to contact me through the form here or by direct email
        on gus.fonnseca@gmail.com regardless of the subject.
      </p>
      <FormProvider {...form}>
        <form
          className="mt-16 grid gap-x-3 gap-y-6 md:grid-cols-2"
          onSubmit={onSubmit}
          noValidate
        >
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem className="grid auto-rows-min">
                <FormLabel className="text-sm text-white">Username</FormLabel>
                <FormControl>
                  <Input placeholder="Gustavo Fonseca" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="grid auto-rows-min">
                <FormLabel className="text-sm text-white">
                  Where can I reach you?
                </FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="alan.turing@example.com"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem className="grid auto-rows-min md:col-span-2">
                <FormLabel className="text-sm text-white">
                  What&rsquo;s your message?
                </FormLabel>
                <FormControl>
                  <Textarea placeholder="Hi, Gustavo! Let's work" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <button
            className="rounded-md border bg-white px-4 py-3 text-sm font-semibold text-background hover:bg-white/90"
            disabled={isLoading}
          >
            {isLoading ? 'Submitting' : 'Submit'}
          </button>
        </form>
      </FormProvider>
    </div>
  );
}
