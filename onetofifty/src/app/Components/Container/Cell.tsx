'use client';

import React, { useEffect, useState } from 'react';

interface CellProps {
  item: number | string;
  handleClick: (item: number | string) => void;
}

const Cell: React.FC<CellProps> = ({ item, handleClick }) => {
  const [currentColor, setCurrentColor] = useState<string>('bg-slate-100');

  useEffect(() => {
    const colorString: string | null = localStorage.getItem('colors');
    
    if (colorString !== null) {
      const colorObj = JSON.parse(colorString);
      setCurrentColor(colorObj.item);
    }
  }, []);

  return (
    <div
      className={`flex justify-center items-center ${currentColor} rounded-xl text-lg text-yellow-950 font-bold cursor-pointer hover:bg-opacity-80 transition duration-200 ease-in-out`}
      onClick={() => {
        handleClick(item);
      }}
    >
      {item}
    </div>
  );
};

export default Cell;
