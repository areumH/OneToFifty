import React from "react";
import "./header.css";

const Header = () => {
  // const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="header">
      <div className="content">
        <div className="name">areumH</div>
        <div className="text">1 to 50</div>
        <div className="side_bar">
          <img src="/img/menu.png"></img>
        </div>
      </div>
    </header>
  );
};

export default Header;
