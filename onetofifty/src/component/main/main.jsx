import { useState } from "react";
import "./main.css";
import Container from "./container/container";
import Modal from "./modal/modal";

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

  const [modal, setModal] = useState(false);
  const [done, setDone] = useState(false);
  const [timer, setTimer] = useState([]);

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
      if (num === 3) {
        endGame();
      }

      const n = numbers.indexOf(num);
      const i = Math.floor(Math.random() * newArr.length);
      setNumbers((numbers) => [
        ...numbers.slice(0, n),
        num < 26 ? newArr[i] : "",
        ...numbers.slice(n + 1),
      ]);
      setNewArr((newArr) => [...newArr.slice(0, i), ...newArr.slice(i + 1)]);
      setCurrent(current + 1);
    }
  };

  const startGame = () => {
    setNumbers(shuffleArray(arr_1));
    setRunning(true);

    setTimer((prev) => [...prev, new Date().getTime() / 1000]);
    console.log(timer)
  };

  const endGame = () => {
    setRunning(false);
    setDone(true);
    setModal(true);
    console.log("끝");

    setTimer((prev) => [...prev, new Date().getTime() / 1000]);
    console.log(timer)
  };

  const appendText = () => {
    if (done) {
      return (
        <button
          className="button"
          onClick={() => {
            window.location.reload();
          }}
        >
          다시 시작
        </button>
      );
    } else {
      return <div className="timer_text">~~~ 시간을 기록하고 있어요 ~~~</div>;
    }
  };

  return (
    <main className="main">
      <div>{modal === true ? <Modal time={(timer[1]-timer[0]).toFixed(3)} modalOff={() => setModal(false)}/> : null}</div>
      <Container array={numbers} handleClick={handleClick} />
      <div>
        {running === false && done === false ? (
          <button className="button" onClick={startGame}>
            게임 시작
          </button>
        ) : (
          appendText()
        )}
      </div>
    </main>
  );
};

export default Main;
