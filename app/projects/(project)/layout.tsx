import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { ReactNode } from 'react';

export default function ProjectDetailsLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="grid gap-10">
      <Button className="flex w-fit gap-1 p-1" variant="ghost" asChild>
        <Link href="/projects">
          <ArrowLeft width="16" height="16" />
          Voltar
        </Link>
      </Button>
      {children}
    </div>
  );
}
