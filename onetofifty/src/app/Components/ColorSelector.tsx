'use client';

import Image from 'next/image';
import checkLight from '../../../public/image/check_light.png';
import checkDark from '../../../public/image/check_dark.png';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

type ColorInfo = {
  bg: string;
  item: string;
  id: number;
};

type ColorProps = {
  container: string;
  cell: string;
  id: number;
};

const ColorSelector: React.FC<ColorProps> = ({ container, cell, id }) => {
  const { theme } = useTheme();

  const colors: ColorInfo = {
    bg: container,
    item: cell,
    id: id,
  };

  const handleClick = () => {
    localStorage.setItem('colors', JSON.stringify(colors));
    window.location.reload();
  };

  useEffect(() => {
    const colorString: string | null = localStorage.getItem('colors');

    if (colorString !== null) {
      const colorObj: ColorInfo = JSON.parse(colorString);
      setCurrentId(colorObj.id);
    }
  }, []);

  const [currentId, setCurrentId] = useState<number>(1);

  const CheckIcon = () => {
    if (currentId === colors.id) {
      return theme === 'dark' ? (
        <Image src={checkLight} alt="light_icon" className="w-9 h-9" />
      ) : (
        <Image src={checkDark} alt="dark_icon" className="w-9 h-9" />
      );
    }
  };

  return (
    <div
      className="flex justify-between w-72 h-36 items-center px-7 border-2 border-gray-400 rounded-xl hover:shadow-md transition duration-200 ease-in-out"
      onClick={handleClick}
    >
      <div className={`flex justify-center items-center w-20 h-20 ${container} rounded-2xl `}>
        <div className={`flex w-14 w- h-14 ${cell} rounded-xl`}></div>
      </div>
      <CheckIcon />
    </div>
  );
};

export default ColorSelector;
