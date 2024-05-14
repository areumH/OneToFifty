'use client';

import { useState } from 'react';
import Container from './Components/Container/Container';
import SideButton from './Components/SideButton';
import shuffleArray from './Utils/shuffleArray';

export default function Main() {
  const firstArray: number[] = Array.from({ length: 25 }, (_, index) => index + 1);
  const [numberArray, setNumberArray] = useState<number[]>(firstArray);

  const handleStartButton = () => {
    setNumberArray(shuffleArray(firstArray));
  };

  return (
    <div className="flex flex-col w-10/12 h-svh justify-center items-center relative gap-12">
      <Container array={numberArray} />
      <button
        className="w-28 h-12 bg-gray-900 text-white text-lg rounded-xl hover:bg-opacity-80"
        onClick={handleStartButton}
      >
        게임 시작
      </button>
      <SideButton />
    </div>
  );
}
