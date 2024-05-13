'use client';

import React from 'react';

interface CellProps {
  num: number;
}

const Cell: React.FC<CellProps> = ({ num }) => {
  return (
    <div className="flex justify-center items-center bg-slate-100 rounded-xl text-lg text-yellow-950 font-bold cursor-pointer hover:bg-opacity-80 transition duration-200 ease-in-out">
      {num}
    </div>
  );
};

export default Cell;
