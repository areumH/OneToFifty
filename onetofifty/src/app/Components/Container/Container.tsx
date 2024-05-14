'use client';

import React from 'react';
import Cell from './Cell';

interface ContainerProps {
  array: (number | string)[];
  handleClick: (item: string | number) => void;
}

const Container: React.FC<ContainerProps> = ({ array, handleClick }) => {
  return (
    <div className="grid grid-cols-5 grid-rows-5 p-2 gap-1.5 w-[400px] h-[400px] bg-blue-500 rounded-xl">
      {array.map((el) => (
        <Cell item={el} handleClick={handleClick} />
      ))}
    </div>
  );
};

export default Container;
