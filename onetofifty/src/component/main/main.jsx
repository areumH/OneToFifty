import { useState } from "react";
import "./main.css";
import Container from "./container/container";

let arr = [];
for (let i = 1; i < 26; i++) {
  arr.push(i);
}

const Main = () => {
  const [numbers, setNumbers] = useState(arr);
  const [running, setRunning] = useState(false);
  // const [current, setCurrent] = useState(0);

  const shuffleArray = (array) => {
    let shuffled = [];
    let newArray = array;
    while (newArray.length !== 0) {
      const index = Math.floor(Math.random() * newArray.length);
      shuffled.push(newArray[index]);
      newArray.splice(index, 1);
    }
    return shuffled;
  };

  const startGame = () => {
    setNumbers(shuffleArray(arr));
    setRunning(true);
    // let startTime = new Date();
  };

  return (
    <main className="main">
      <Container array={numbers} />
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
