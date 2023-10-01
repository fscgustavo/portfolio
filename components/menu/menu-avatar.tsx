import Link, { LinkProps } from 'next/link';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';

export function MenuAvatar(props: Omit<LinkProps, 'href' | 'className'>) {
  return (
    <Link href="/" className="block" {...props}>
      <div className="flex gap-x-3 text-card-foreground">
        <Avatar>
          <AvatarImage src="https://github.com/fscgustavo.png" />
          <AvatarFallback>GF</AvatarFallback>
        </Avatar>
        <div className="text-sm">
          <p>Gustavo Fonseca</p>
          <p className="text-muted-foreground">Software Engineer</p>
        </div>
      </div>
    </Link>
  );
}
