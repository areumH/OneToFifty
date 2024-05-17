'use client';

import { useState } from 'react';
import Container from './Components/Container/Container';
import SideButton from './Components/SideButton';
import Modal from './Components/Modal';

import shuffleArray from './Utils/shuffleArray';
import { getCurrentTime } from './Utils/handleTime';

export default function Main() {
  const firstArray: number[] = Array.from({ length: 25 }, (_, index) => index + 1);
  const secondArray: number[] = Array.from({ length: 25 }, (_, index) => index + 26);

  const [numberArray, setNumberArray] = useState<(number | string)[]>(firstArray);
  const [newArray, setNewArray] = useState<number[]>(secondArray);
  const [running, setRunning] = useState<boolean>(false);
  const [current, setCurrent] = useState<number>(1);

  const [timer, setTimer] = useState<number[]>([]);
  const [modal, setModal] = useState<boolean>(false);

  const handleStartButton = () => {
    setNumberArray(shuffleArray(firstArray));
    setNewArray(shuffleArray(secondArray));

    setRunning(true);
    setTimer((prev) => [...prev, getCurrentTime()]);
  };

  const handleClick = (item: number | string) => {
    if (item === current && running) {
      current === 50 && endGame();

      const idx = numberArray.indexOf(item);
      const num: number | undefined = newArray.shift();
      const newNum: number | string = num ? num : '';

      numberArray[idx] = newNum;
      setCurrent(current + 1);
    }
  };

  const endGame = () => {
    setRunning(false);
    setTimer((prev) => [...prev, getCurrentTime()]);

    setModal(true);
  };

  return (
    <div className="flex flex-col w-10/12 h-svh justify-center items-center relative gap-12">
      {modal && <Modal array={timer} />}
      <Container array={numberArray} handleClick={handleClick} />
      {running ? (
        <div className="h-12 text-lg animate-bounce">시간을 측정하고 있어요 !</div>
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
