'use client';

import Image from 'next/image';
import settingDark from '../../../public/image/setting_dark.png';

export default function SideButton() {


  return (
    <div className="flex justify-center items-center absolute bottom-6 right-6 w-16 h-16 border-4 border-black rounded-full cursor-pointer">
      <Image src={settingDark} alt="setting dark icon" className="w-12 h-12" />
    </div>
  );
}
