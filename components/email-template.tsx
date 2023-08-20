import { SendEmailProps } from '@/contract/send-email';

export function EmailTemplate({ name, email, message }: SendEmailProps) {
  return (
    <div>
      <p>
        <strong>Name: {name}</strong>
      </p>
      <p>
        <strong>E-mail: {email}</strong>
      </p>
      <p style={{ marginTop: '3rem' }}> {message}</p>
    </div>
  );
}
