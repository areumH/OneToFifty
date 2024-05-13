'use client';

import React from 'react';
import Cell from './Cell';

export default function Container(): React.ReactNode {
  const numbersArray: number[] = Array.from({ length: 25 }, (_, index) => index + 1);

  return (
    <div className="grid grid-cols-5 grid-rows-5 p-2 gap-1.5 w-[400px] h-[400px] bg-blue-500 rounded-xl">
      {numbersArray.map((el) => (
        <Cell num={el} />
      ))}
    </div>
  );
}
