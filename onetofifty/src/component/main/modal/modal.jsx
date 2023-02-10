import { React, useState } from "react";
import "./modal.css";

const Modal = ({ time, modalOff }) => {
  const [name, setName] = useState("");

  return (
    <modal className="modal_overlay">
      <div className="modal_container">
        <div className="time_text">걸린 시간 : {time} 초</div>
        <div className="time_text"> 이름을 입력하세요!</div>
        <input
          type="text"
          maxLength="7"
          className="nickname"
          value={name}
          onChange={(e) => setName(e.target.value)}
        ></input>
        <div className="button_text">해당 시간을 기록할까요?</div>
        <div className="button_line">
          <button className="button_style"> 기록 </button>
          <button className="button_style" onClick={modalOff}> 취소 </button>
        </div>
      </div>
    </modal>
  );
};

export default Modal;
