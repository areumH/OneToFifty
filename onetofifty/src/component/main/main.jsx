import { useState } from "react";
import "./main.css";
import Container from "./container/container";

let arr_1 = [];
for (let i = 1; i < 26; i++) {
  arr_1.push(i);
}

let arr_2 = [];
for (let i = 26; i < 51; i++) {
  arr_2.push(i);
}

const Main = () => {
  const [numbers, setNumbers] = useState(arr_1);
  const [running, setRunning] = useState(false);
  const [current, setCurrent] = useState(1);
  const [newArr, setNewArr] = useState(arr_2);

  const shuffleArray = (array) => {
    let shuffled = [];
    while (array.length !== 0) {
      const index = Math.floor(Math.random() * array.length);
      shuffled.push(array[index]);
      array.splice(index, 1);
    }
    return shuffled;
  };

  const handleClick = (num) => {
    if (num === current && running) {
      if (num === 50) {
        console.log("끝")
      }
      
      const n = numbers.indexOf(num);
      const i = Math.floor(Math.random() * newArr.length);
      setNumbers(numbers => [
        ...numbers.slice(0,n),
        num < 26 ? newArr[i] : "",
        ...numbers.slice(n+1)
      ]);
      setNewArr(newArr => [
        ...newArr.slice(0,i),
        ...newArr.slice(i+1)
      ])

      setCurrent(current+1);
    }
  }

  const startGame = () => {
    setNumbers(shuffleArray(arr_1));
    setRunning(true);
    // let startTime = new Date();
  };

  /*
  const endGame = () => {
    let endTime = new Date();
    setRunning(false);
  }
  */

  return (
    <main className="main">
      <Container array={numbers} handleClick = {handleClick} />
      <div>
        {running === false ? (
          <button className="button" onClick={startGame}>
            게임 시작
          </button>
        ) : (
          <div className="timer_text">
            ~~~ 시간을 기록하고 있어요 ~~~
          </div>
        )}
      </div>
    </main>
  );
};

export default Main;
