import {
  Github,
  Linkedin,
  LucideIcon,
  Mail,
  Newspaper,
  ScrollText,
} from 'lucide-react';
import { ComponentPropsWithoutRef } from 'react';

type NavLink = ComponentPropsWithoutRef<'a'> & {
  Icon: LucideIcon;
  text: string;
  href: string;
};

type NavigationLinkProps = {
  main: NavLink[];
  social: NavLink[];
};

export const links: NavigationLinkProps = {
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
