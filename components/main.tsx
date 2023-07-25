import { ReactNode } from 'react';

type MainProps = {
  children: ReactNode;
};

export function Main({ children }: MainProps) {
  return (
    <main className="grid h-screen grid-cols-[20rem_auto] p-4">
      <aside className="h-full rounded-lg bg-foreground p-9">Sidebar</aside>
      {children}
    </main>
  );
}
