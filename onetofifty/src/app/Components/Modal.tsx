'use client';

import { useState } from 'react';
import { getElapsedTime } from '../Utils/handleTime';
import { collection, doc, getDoc, updateDoc } from 'firebase/firestore';
import fireStore from '../Firebase/firestore';
import Link from 'next/link';

interface ModalProps {
  array: number[];
}

const Modal: React.FC<ModalProps> = ({ array }) => {
  const elapsedTime: number = getElapsedTime(array);
  const docRef = doc(collection(fireStore, 'onetofifty'), 'scoreList');

  const [nickName, setNickName] = useState<string>('');
  const [clicked, setClicked] = useState<boolean>(false);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNickName(e.target.value);
  };

  const registerRanking = async () => {
    const docSnap = await getDoc(docRef);
    const docData = docSnap.data()?.score || [];

    const scoreData = {
      name: nickName,
      score: elapsedTime,
    };

    await updateDoc(docRef, {
      score: [...docData, scoreData],
    });

    setClicked(true);
  };

  const restartGame = () => {
    window.location.reload();
  };

  return (
    <div className="absolute w-full h-full top-0 flex justify-center items-center backdrop-blur">
      <div className="flex flex-col w-[330px] py-6 justify-center relative bg-white border border-gray-300 rounded-xl shadow-xl">
        {clicked ? (
          <div className="flex flex-col items-center gap-7">
            <div className="pt-3 text-lg">랭킹 등록 완료 !</div>
            <div className="flex py-1 gap-10">
              <Link href="/ranking">
                <button className="px-4 py-1.5 rounded-full bg-black text-white">랭킹 보기</button>
              </Link>
              <button
                className="px-4 py-1.5 rounded-full bg-black text-white"
                onClick={restartGame}
              >
                다시 시작
              </button>
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center gap-3">
            <div className="text-lg font-bold">게임 결과</div>
            <div className="text-md after:content-['초']">{elapsedTime}</div>
            <div className="">랭킹 등록을 위한 이름을 입력해주세요!</div>
            <input
              type="text"
              maxLength={7}
              value={nickName}
              onChange={handleInput}
              className="px-3 py-1 border border-gray-400 rounded-lg text-lg"
            />
            <div className="flex pt-2 gap-10">
              <button
                className="px-4 py-1.5 rounded-full bg-black text-white"
                onClick={restartGame}
              >
                취소
              </button>
              <button
                className="px-4 py-1.5 rounded-full bg-black text-white"
                onClick={registerRanking}
              >
                등록
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Modal;
