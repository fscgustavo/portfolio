import { ReactNode } from 'react';
import { Menu } from './menu';

type MainProps = {
  children: ReactNode;
};

export function Main({ children }: MainProps) {
  return (
    <main className="grid h-screen max-lg:auto-rows-max lg:grid-cols-[20rem_auto] lg:p-4">
      <Menu />
      <div className="mx-auto max-w-[48rem] px-6 py-12 lg:pt-[7.5rem]">
        {children}
      </div>
    </main>
  );
}
