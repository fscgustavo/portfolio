import Link from 'next/link';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from './ui/sheet';
import { Github, Linkedin, Mail, Newspaper, ScrollText } from 'lucide-react';
import { cn } from '@/lib/utils';
import React, { HTMLAttributes } from 'react';

function MyAvatar() {
  return (
    <Link href="/">
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

const links = {
  main: [
    { Icon: Newspaper, text: 'About', href: '/' },
    { Icon: Mail, text: 'Contact', href: '/contact' },
  ],
  social: [
    {
      Icon: Github,
      text: 'Github',
      href: 'https://github.com/fscgustavo',
      target: '_blank',
      rel: 'noopener',
    },
    {
      Icon: Linkedin,
      text: 'Linkedin',
      href: 'https://www.linkedin.com/in/gustavo-fonseca-17584a179/?locale=en_US',
      target: '_blank',
      rel: 'noopener',
    },
    {
      Icon: ScrollText,
      text: 'Resume',
      href: '/Gustavo%20Fonseca%20-%20Resume.pdf',
      target: '_blank',
    },
  ],
};

function Navigation({ className, ...props }: HTMLAttributes<HTMLElement>) {
  return (
    <nav
      className={cn('grid gap-y-8 text-muted-foreground', className)}
      {...props}
    >
      <ul className="list-none gap-y-0.5">
        {links.main.map(({ Icon, href, text, ...props }) => {
          return (
            <li key={href}>
              <Link href={href} className="nav-link" {...props}>
                <Icon className="h-5 w-5" />
                {text}
              </Link>
            </li>
          );
        })}
      </ul>
      <div>
        <p className="mb-3 pl-6 text-xs uppercase">Other resources</p>
        <ul className="list-none gap-y-0.5">
          {links.social.map(({ Icon, href, text, ...props }) => {
            return (
              <li key={href}>
                <a href={href} className="nav-link" {...props}>
                  <Icon className="h-5 w-5" />
                  {text}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}

export function Menu() {
  return (
    <div className="bg-card max-lg:flex max-lg:justify-between max-lg:p-5 lg:h-full lg:rounded-xl lg:py-10">
      <div className="lg:px-6">
        <MyAvatar />
      </div>
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
