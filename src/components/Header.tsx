'use client';

import Image from 'next/image';

export function Header() {

  return (
    <header className="sticky top-0 z-50 bg-black/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-start items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="shrink-0 flex items-center">
              <Image
                src="/agv-logo.png"
                alt="AGV Protocol"
                width={32}
                height={32}
                className="mr-2 sm:mr-3"
              />
              <span className="text-xl sm:text-2xl font-bold text-white">PreGVT</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
