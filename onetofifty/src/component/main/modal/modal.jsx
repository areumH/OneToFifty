import { React, useState } from "react";
import "./modal.css";

const Modal = () => {
  // const [name, setName] = useState("");

  return (
    <modal className="modal_overlay">
      <div className="modal_container"></div>
    </modal>
  );
};

export default Modal;
