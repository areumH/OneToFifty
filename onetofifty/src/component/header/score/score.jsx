import { React, useState } from "react";
import { scoreArray } from "../../main/modal/modal";
import "./score.css";

const Score = () => {
  const [score, setScore] = useState(scoreArray);
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
      <div className="name_style"> {value[0]} </div>
      <div className="score_style"> {value[1]} 초 </div>
      <button className="remove_button" onClick={() => onRemove(index)}>
        ×
      </button>
    </div>
  ));

  return <div className="box_style">{scoreList}</div>;
};

export default Score;
