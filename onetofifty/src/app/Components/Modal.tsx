'use client';

import { useState } from 'react';
import { getElapsedTime } from '../Utils/handleTime';

interface ModalProps {
  array: number[];
}

const Modal: React.FC<ModalProps> = ({ array }) => {
  const elapsedTime = getElapsedTime(array);
  const [nickName, setNickName] = useState<string>('');

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNickName(e.target.value);
  };

  return (
    <div className="absolute w-full h-full top-0 flex justify-center items-center backdrop-blur">
      <div className="flex flex-col items-center w-[330px] py-7 gap-3 relative bg-white border border-gray-300 rounded-xl shadow-xl">
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
          <button className="px-4 py-1.5 rounded-full bg-black text-white">취소</button>
          <button className="px-4 py-1.5 rounded-full bg-black text-white">등록</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
