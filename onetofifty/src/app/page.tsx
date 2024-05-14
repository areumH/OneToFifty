'use client';

import { useState } from 'react';
import Container from './Components/Container/Container';
import SideButton from './Components/SideButton';
import shuffleArray from './Utils/shuffleArray';

export default function Main() {
  const firstArray: number[] = Array.from({ length: 25 }, (_, index) => index + 1);

  const [numberArray, setNumberArray] = useState<number[]>(firstArray);
  const [running, setRunning] = useState<boolean>(false);

  const handleStartButton = () => {
    setNumberArray(shuffleArray(firstArray));
    setRunning(true);
  };

  return (
    <div className="flex flex-col w-10/12 h-svh justify-center items-center relative gap-12">
      <Container array={numberArray} />
      {running ? (
        <div className='h-12 text-lg animate-bounce'>시간을 측정하고 있어요 ! </div>
      ) : (
        <button
          className="w-28 h-12 bg-gray-900 text-white text-lg rounded-xl hover:bg-opacity-80"
          onClick={handleStartButton}
        >
          게임 시작
        </button>
      )}
      <SideButton />
    </div>
  );
}
