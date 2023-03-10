import { React, useState, useEffect } from "react";
import "./score.css";

const Score = () => {
  const [score, setScore] = useState([]);
  const getSort = (a, b) => {
    const x = a[1];
    const y = b[1];

    if (x < y) {
      return -1;
    } else if (x > y) {
      return 1;
    } else {
      return 0;
    }
  };

  useEffect(() => {
    const existingArray = JSON.parse(localStorage.getItem("myArray")) || [];
    setScore(existingArray.sort(getSort));
  }, []);

  const onRemove = (index) => {
    const newArray = [...score];
    newArray.splice(index, 1);

    localStorage.setItem("myArray", JSON.stringify(newArray));
    setScore(newArray);
  };

  const erase = () => {
    localStorage.clear();
    window.location.reload();
  };

  const scoreList = score.map((value, index) => (
    <div key={index} className="score_line">
      <div
        value={index}
        className={index < 3 ? "topindex_style" : "index_style"}
      >
        {index + 1}
      </div>
      <div className="name_style"> {value[0]} </div>
      <div className="score_style"> {value[1]} 초 </div>
      <button className="remove_button" onClick={() => onRemove(index)}>
        ×
      </button>
    </div>
  ));

  return (
    <score>
      <div className="box_style">{scoreList}</div>
      <button className="erase_button" onClick={erase}>
        삭제
      </button>
    </score>
  );
};

export default Score;
