'use client';

import Image from 'next/image';
import checkLight from '../../../public/image/check_light.png';
import checkDark from '../../../public/image/check_dark.png';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

type ColorProps = {
  container: string;
  cell: string;
};

const ColorSelector: React.FC<ColorProps> = ({ container, cell }) => {
  const { theme } = useTheme();

  const colors = {
    bg: container,
    item: cell,
  };

  const handleClick = () => {
    localStorage.setItem('colors', JSON.stringify(colors));
  };

  const CheckIcon = () => {
    return theme === 'dark' ? (
      <Image src={checkLight} alt="light_icon" className="w-9 h-9" />
    ) : (
      <Image src={checkDark} alt="dark_icon" className="w-9 h-9" />
    );
  };

  return (
    <div
      className="flex justify-between w-72 h-36 items-center px-7 border-2 border-gray-400 rounded-xl hover:shadow-md transition duration-200 ease-in-out"
      onClick={handleClick}
    >
      <div className={`flex justify-center items-center w-20 h-20 ${container} rounded-2xl `}>
        <div className={`flex w-14 w- h-14 ${cell} rounded-xl`}></div>
      </div>
    </div>
  );
};

export default ColorSelector;
