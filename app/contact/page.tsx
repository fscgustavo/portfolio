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
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { Toaster } from '@/components/ui/toaster';

export default function Contact() {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

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

      toast({
        description: 'The message was sent successfully!',
        variant: 'success',
      });

      form.reset();
    } catch {
      toast({
        description:
          'There was an error while submitting the message. If there is an issue, I will fix it as soon as possible!',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  });

  return (
    <div>
      <h1 className="text-5xl font-semibold">Contact</h1>
      <p className="mt-6 leading-7">
        Do not hesitate to contact me through the form here or by direct email
        on{' '}
        <a
          href="mailto:gus.fonnseca@gmail.com"
          className="underline underline-offset-4"
        >
          gus.fonnseca@gmail.com
        </a>{' '}
        regardless of the subject.
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
                <FormLabel className="text-sm ">Username</FormLabel>
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
                <FormLabel className="text-sm ">
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
                <FormLabel className="text-sm">
                  What&rsquo;s your message?
                </FormLabel>
                <FormControl>
                  <Textarea placeholder="Hi, Gustavo! Let's work" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button className="md:col-span-2" disabled={isLoading}>
            {isLoading ? 'Submitting...' : 'Submit'}
          </Button>
        </form>
      </FormProvider>
      <Toaster />
    </div>
  );
}
