// 배열 셔플 함수 * * *

const shuffleArray = (array: number[]) => {
  const shuffled: number[] = [];

  while (array.length !== 0) {
    const index = Math.floor(Math.random() * array.length);
    
    shuffled.push(array[index]);
    array.splice(index, 1);
  }
  return shuffled;
};

export default shuffleArray;
