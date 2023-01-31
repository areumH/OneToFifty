import "./container.css";
import Cell from "./cell/cell";

const Container = ({ array, handleClick }) => {
  return (
    <container className="container">
      {array.map((num, id) => (
        <Cell num={num} key={id} handleClick = {handleClick} />
      ))}
    </container>
  );
};

export default Container;
