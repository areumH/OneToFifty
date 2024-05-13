'use client';

import { useState } from 'react';
import Container from './Components/Container/Container';

export default function Main() {
  const numbersArray: number[] = Array.from({ length: 25 }, (_, index) => index + 1);
  const [array, setArray] = useState<number[]>(numbersArray);

  const shuffleArray = (array: number[]) => {
    const shuffled: number[] = [];

    while (array.length !== 0) {
      const index = Math.floor(Math.random() * array.length);
      shuffled.push(array[index]);
      array.splice(index, 1);
    }
    return shuffled;
  };

  const handleStartButton = () => {
    setArray(shuffleArray(numbersArray));
  };

  return (
    <div className="flex flex-col w-10/12 h-svh justify-center items-center gap-12">
      <Container array={array} />
      <button
        className="w-28 h-12 bg-gray-900 text-white text-lg rounded-xl hover:bg-opacity-80"
        onClick={handleStartButton}
      >
        게임 시작
      </button>
    </div>
  );
}
