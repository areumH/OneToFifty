'use client';

import { collection, doc, getDoc } from 'firebase/firestore';
import fireStore from '../Firebase/firestore';
import { useEffect, useState } from 'react';

type ScoreInfo = {
  name: string;
  score: number;
};

export default function Ranking() {
  const docRef = doc(collection(fireStore, 'onetofifty'), 'scoreList');
  const [scoreList, setScoreList] = useState<ScoreInfo[]>([]);

  const sortScoreList = (scoreList: ScoreInfo[]) => {
    return scoreList.sort((a, b) => a.score - b.score);
  };

  useEffect(() => {
    try {
      const getScore = async () => {
        const query = await getDoc(docRef);
        const scoreData = query.data()?.score || [];

        setScoreList(sortScoreList(scoreData).slice(0, 10));
      };
      getScore();
    } catch (error) {
      console.error("랭킹 불러오기 오류:",error);
    }
  }, []);

  return (
    <div className="flex flex-col w-10/12 h-svh py-10">
      <div className="flex flex-col items-center gap-8">
        <div className="text-xl font-bold">RANKING</div>
        <div className="flex flex-col w-5/12 min-w-60 gap-5">
          {scoreList.map((info, idx) => (
            <div className="flex">
              <div className="flex basis-1/3 justify-center text-lg pe-6">{idx + 1}</div>
              <div className="flex basis-1/3 justify-center text-lg">{info.name}</div>
              <div className="flex basis-1/3 justify-center text-lg after:content-['초']">{info.score}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
