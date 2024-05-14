'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import settingDark from '../../../public/image/setting_dark.png';

export default function SideButton() {
  const [view, setView] = useState<boolean>(false);

  const handleSideButton = (e: React.MouseEvent) => {
    e.stopPropagation();
    setView(!view);
  };

  const handleOutsideClick = () => {
    setView(false);
  };

  useEffect(() => {
    window.addEventListener('click', handleOutsideClick);
    return () => {
      window.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  return (
    <div className="flex flex-col items-end absolute bottom-0 right-0 px-2 py-6 gap-4">
      {view && (
        <ul className="rounded-2xl border-[3px] border-black bg-white">
          <Link href="/setting">
            <li className="px-6 py-3 text-lg border-b-[3px] border-black cursor-pointer">설정</li>
          </Link>
          <Link href="/ranking">
            <li className="px-6 py-3 text-lg cursor-pointer">랭킹</li>
          </Link>
        </ul>
      )}
      <div
        className="flex justify-center items-center w-16 h-16 m-2 border-4 border-black rounded-full cursor-pointer hover:animate-[spin_3s_linear_infinite]"
        onClick={handleSideButton}
      >
        <Image src={settingDark} alt="setting dark icon" className="w-12 h-12" />
      </div>
    </div>
  );
}
