import { React, useState } from "react";
import "./score.css";

const Score = () => {
  const [score, setScore] = useState([
    [35, "가나다라마바"],
    [36, "ffff"],
    [63, "ggg"],
    [49, "아무거나"],
    [83, "ppp"]
  ]);
  const onRemove = (index) => {
    setScore(score.filter((_, i) => i !== index));
  };

  const scoreList = score.map((value, index) => (
    <div key={index} className="score_line">
      <div
        value={index}
        className={index < 3 ? "topindex_style" : "index_style"}
      >
        {index + 1}
      </div>
      <div className="name_style"> {value[1]} </div>
      <div className="score_style"> {value[0]} 초 </div>
      <button className="remove_button" onClick={() => onRemove(index)}>
        ×
      </button>
    </div>
  ));

  return <div className="box_style">{scoreList}</div>;
};

export default Score;
