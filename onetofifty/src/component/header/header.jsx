import { React, useState } from "react";
import Score from "./score/score";
import "./header.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(isOpen => !isOpen);
  }

  return (
    <header className="header">
      <div className="content">
        <div className="name">areumH</div>
        <div className="text">1 to 50</div>
        <div className="side_bar" onClick={() => toggleMenu()}>
          <img src="/img/menu.png"></img>
        </div>
      </div>
      <div className={isOpen ? "open" : "hide"}>
        <div className="table_text">기록 순위표</div>
        <div>
          <Score />
        </div>
      </div>
    </header>
  );
};

export default Header;
