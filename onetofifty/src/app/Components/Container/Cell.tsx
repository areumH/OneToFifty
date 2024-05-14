'use client';

import React from 'react';

interface CellProps {
  item: number | string;
  handleClick: (item: number | string) => void;
}

const Cell: React.FC<CellProps> = ({ item, handleClick }) => {
  return (
    <div
      className="flex justify-center items-center bg-slate-100 rounded-xl text-lg text-yellow-950 font-bold cursor-pointer hover:bg-opacity-80 transition duration-200 ease-in-out"
      onClick={() => {
        handleClick(item);
      }}
    >
      {item}
    </div>
  );
};

export default Cell;
