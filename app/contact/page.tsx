import { Input } from '@/components/ui/input';

export default function Contact() {
  return (
    <div>
      <h1 className="text-5xl font-semibold text-white">Contact</h1>
      <p className="mt-6 leading-7 text-white">
        Do not hesitate to contact me through the form here or by direct email
        on gus.fonnseca@gmail.com regardless of the subject.
      </p>
      <form className="mt-16 grid grid-cols-2 gap-x-3 gap-y-6">
        <div className="grid gap-2">
          <label className="text-sm text-white">What&rsquo;s your name?</label>
          <Input placeholder="Gustavo Fonseca" />
        </div>
        <div className="grid gap-2">
          <label className="text-sm text-white">Where can I reach you?</label>
          <Input type="email" placeholder="alan.turing@example.com" />
        </div>
        <div className="col-span-2 grid gap-2">
          <label className="text-sm text-white">
            What&rsquo;s your message?
          </label>
          <Input type="email" placeholder="alan.turing@example.com" />
        </div>
      </form>
    </div>
  );
}
