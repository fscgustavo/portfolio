import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ComponentPropsWithoutRef } from 'react';

const navClass =
  'flex items-center gap-x-3 px-6 py-2 text-sm hover:bg-accent focus-visible:bg-accent';

export function NavLink({
  className,
  ...props
}: ComponentPropsWithoutRef<typeof Link>) {
  const pathname = usePathname();

  const isActive = pathname === props.href;

  return (
    <Link
      {...props}
      className={cn(navClass, isActive && 'text-accent-foreground', className)}
    />
  );
}

export function NavAnchor({
  className,
  ...props
}: ComponentPropsWithoutRef<'a'>) {
  return <a {...props} className={cn(navClass, className)} />;
}
