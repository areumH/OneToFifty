'use client';

import { collection, doc, getDoc, updateDoc } from 'firebase/firestore';
import fireStore from '../Firebase/firestore';

export default function Ranking() {
  const docRef = doc(collection(fireStore, 'onetofifty'), 'scoreList');

  return (
    <div className="flex flex-col w-10/12 h-svh py-12">
      <div className="flex flex-col items-center gap-8">
        <div className="text-xl font-bold">RANKING</div>
        <div className="flex flex-col gap-5">
          <div className="flex w-[500px] gap-28">
            <div className="basis-1/3 text-lg">1</div>
            <div className="basis-1/3 text-lg ps-4">이름</div>
            <div className="basis-1/3 text-lg after:content-['초']">123</div>
          </div>
        </div>
      </div>
    </div>
  );
}
