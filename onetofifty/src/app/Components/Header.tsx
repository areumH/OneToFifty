'use client';

import Image from 'next/image';
import darkIcon from '../../../public/image/dark_mode.png';

export default function Header() {
  return (
    <div className="flex justify-between w-10/12 items-center h-16 px-2 border-b border-gray-300">
      <p className="text-base">areumH</p>
      <h3 className="text-lg font-bold">ONETOFIFTY</h3>
      <div className="flex items-center w-16 h-9 bg-black rounded-full p-1">
        {/* <div className="flex flex-row-reverse items-center w-16 h-9 bg-black text-white rounded-full p-1"> */}
        <div className="w-7 h-7 bg-white rounded-full cursor-pointer">
          <Image src={darkIcon} alt="dark_icon" />
        </div>
      </div>
    </div>
  );
}
