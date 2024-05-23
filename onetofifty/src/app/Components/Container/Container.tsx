'use client';

import React, { useEffect, useState } from 'react';
import Cell from './Cell';

type ColorInfo = {
  bg: string;
  item: string;
  id: number;
};

interface ContainerProps {
  array: (number | string)[];
  handleClick: (item: number | string) => void;
}

const Container: React.FC<ContainerProps> = ({ array, handleClick }) => {
  const [currentColor, setCurrentColor] = useState<string>('bg-blue-400');

  useEffect(() => {
    const colorString: string | null = localStorage.getItem('colors');
    
    if (colorString !== null) {
      const colorObj: ColorInfo = JSON.parse(colorString);
      setCurrentColor(colorObj.bg);
    }
  }, []);

  return (
    <div className={`grid grid-cols-5 grid-rows-5 p-2 gap-1.5 w-[400px] h-[400px] ${currentColor} rounded-xl`}>
      {array.map((el, idx) => (
        <Cell key={idx} item={el} handleClick={handleClick} />
      ))}
    </div>
  );
};

export default Container;
