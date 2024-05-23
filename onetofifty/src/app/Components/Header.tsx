'use client';

import Link from 'next/link';
import ThemeSwitcher from './ThemeSwitcher';

export default function Header() {
  return (
    <div className="flex justify-between w-10/12 items-center h-16 px-2 border-b border-gray-300">
      <p className="text-base">areumH</p>
      <Link href="/">
        <h3 className="text-lg font-bold">ONETOFIFTY</h3>
      </Link>
      <ThemeSwitcher />
    </div>
  );
}
