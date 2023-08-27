import { z } from 'zod';

export const SendEmailSchema = z.object({
  name: z.string().nonempty('I need to know your name'),
  email: z
    .string()
    .nonempty('I need to know where to reach you')
    .email({ message: `Uh oh, that doesn't look like an email address...` }),
  message: z.string().nonempty('You need to send me a message'),
});

export type SendEmailProps = z.infer<typeof SendEmailSchema>;
