import Link from 'next/link';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from './ui/sheet';
import { Mail, Newspaper } from 'lucide-react';
import { cn } from '@/lib/utils';
import React, { HTMLAttributes } from 'react';

function MyAvatar() {
  return (
    <Link href="/">
      <div className="flex gap-x-3">
        <Avatar>
          <AvatarImage src="https://github.com/fscgustavo.png" />
          <AvatarFallback className="bg-white">GF</AvatarFallback>
        </Avatar>
        <div className="text-sm">
          <p className="text-white">Gustavo Fonseca</p>
          <p>Software Engineer</p>
        </div>
      </div>
    </Link>
  );
}

const links = [
  { Icon: Newspaper, text: 'About', href: '/' },
  { Icon: Mail, text: 'Contact', href: '/contact' },
];

function Navigation({ className, ...props }: HTMLAttributes<HTMLElement>) {
  return (
    <nav className={cn('grid gap-y-0.5', className)}>
      {links.map(({ Icon, href, text }) => {
        return (
          <Link
            href={href}
            className="flex items-center gap-x-3 px-3 py-2 text-sm hover:text-white"
            key={href}
          >
            <Icon className="h-6 w-6" />
            {text}
          </Link>
        );
      })}
    </nav>
  );
}

export function Menu() {
  return (
    <div className=" bg-foreground max-lg:flex max-lg:justify-between max-lg:p-5 lg:h-full lg:rounded-lg lg:px-6 lg:py-10">
      <MyAvatar />
      <Navigation className="mt-10 max-lg:hidden" />
      <Sheet>
        <SheetTrigger className="lg:hidden">Open</SheetTrigger>
        <SheetContent side="left" className="lg-hidden bg-foreground">
          <SheetHeader>
            <MyAvatar />
          </SheetHeader>
          <Navigation className="mt-10" />
        </SheetContent>
      </Sheet>
    </div>
  );
}
