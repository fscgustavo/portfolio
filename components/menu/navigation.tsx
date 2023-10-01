import { HTMLAttributes } from 'react';
import Link from 'next/link';
import { ExternalLink } from 'lucide-react';
import { cn } from '@/lib/utils';
import { links } from './links';

type NavigationProps = {
  onRouteChange?: () => void;
} & HTMLAttributes<HTMLElement>;

export function Navigation({
  className,
  onRouteChange,
  ...props
}: NavigationProps) {
  return (
    <nav
      className={cn('grid gap-y-8 text-muted-foreground', className)}
      {...props}
    >
      <ul className="list-none gap-y-0.5">
        {links.main.map(({ Icon, href, text, onClick, ...props }) => {
          return (
            <li key={href}>
              <Link
                href={href}
                className="nav-link"
                onClick={(event) => {
                  onClick?.(event);
                  onRouteChange?.();
                }}
                {...props}
              >
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
            const isExternal = props.target === '_blank';

            return (
              <li key={href}>
                <a href={href} className="nav-link group" {...props}>
                  <Icon
                    className={cn(
                      'h-5 w-5 ',
                      isExternal &&
                        'group-hover:hidden group-focus-visible:hidden',
                    )}
                  />
                  <ExternalLink
                    className={cn(
                      'hidden h-5 w-5 ',
                      isExternal &&
                        'group-hover:block group-focus-visible:block',
                    )}
                  />
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
