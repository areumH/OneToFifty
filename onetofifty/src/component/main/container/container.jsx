import "./container.css";
import Cell from "./cell/cell";

const Container = ({ array }) => {
  let arr = [];
  for (let i = 1; i < 26; i++) {
    arr.push(i);
  }

  return (
    <container className="container">
      {array.map((num, id) => (
        <Cell num={num} id={id} />
      ))}
    </container>
  );
};

export default Container;
