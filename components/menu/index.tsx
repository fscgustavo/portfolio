'use client';

import { Sheet, SheetContent, SheetHeader, SheetTrigger } from '../ui/sheet';
import { MenuIcon } from 'lucide-react';
import React, { useState } from 'react';
import { MenuAvatar } from './menu-avatar';
import { Navigation } from './navigation';

function MenuMobile() {
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  return (
    <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
      <SheetTrigger className="lg:hidden" aria-label="Open sidebar">
        <MenuIcon />
      </SheetTrigger>
      <SheetContent side="left" className="lg-hidden bg-card">
        <SheetHeader>
          <MenuAvatar
            onClick={() => {
              setIsSheetOpen(false);
            }}
          />
        </SheetHeader>
        <Navigation
          className="mt-10"
          onRouteChange={() => {
            setIsSheetOpen(false);
          }}
        />
      </SheetContent>
    </Sheet>
  );
}

export function Menu() {
  return (
    <div className="border bg-card max-lg:flex max-lg:justify-between max-lg:p-5 lg:max-h-screen lg:rounded-xl lg:py-10">
      <div className="lg:px-6">
        <MenuAvatar />
      </div>
      <Navigation className="mt-10 max-lg:hidden" />
      <MenuMobile />
    </div>
  );
}
