'use client';

import { collection, doc, getDoc, updateDoc } from 'firebase/firestore';
import fireStore from '../Firebase/firestore';

export default function Ranking() {
  const docRef = doc(collection(fireStore, 'onetofifty'), 'scoreList');

  const submitScore = async () => {
    const docSnap = await getDoc(docRef);
    const docData = docSnap.data()?.score || [];

    const scoreData = {
      name: 'nickname',
      score: 123,
    };

    await updateDoc(docRef, {
      score: [...docData, scoreData],
    });
  };

  const getScore = async () => {
    const query = await getDoc(docRef);
    console.log(query.data());
  };

  return (
    <div className="flex flex-col w-10/12 h-svh">
      <button onClick={submitScore}>전송</button>
      <button onClick={getScore}>확인</button>
    </div>
  );
}
