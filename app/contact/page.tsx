import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export default function Contact() {
  return (
    <div>
      <h1 className="text-5xl font-semibold text-white">Contact</h1>
      <p className="mt-6 leading-7 text-white">
        Do not hesitate to contact me through the form here or by direct email
        on gus.fonnseca@gmail.com regardless of the subject.
      </p>
      <form className="mt-16 grid gap-x-3 gap-y-6 md:grid-cols-2">
        <div className="grid gap-2">
          <label htmlFor="name" className="text-sm text-white">
            What&rsquo;s your name?
          </label>
          <Input id="name" placeholder="Gustavo Fonseca" />
        </div>
        <div className="grid gap-2">
          <label htmlFor="email" className="text-sm text-white">
            Where can I reach you?
          </label>
          <Input
            id="email"
            type="email"
            placeholder="alan.turing@example.com"
          />
        </div>
        <div className="grid gap-2 md:col-span-2">
          <label htmlFor="message" className="text-sm text-white">
            What&rsquo;s your message?
          </label>
          <Textarea id="message" placeholder="Hi, Gustavo! Let's work" />
        </div>
      </form>
    </div>
  );
}
