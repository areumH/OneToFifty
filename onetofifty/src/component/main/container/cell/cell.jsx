import "./cell.css";

const Cell = ({ num, handleClick}) => {
  return <cell className="cell" onClick = {() => {handleClick(num)}}>{num}</cell>;
};

export default Cell;
